from uuid import UUID

from app.db.session import SessionLocal
from app.ml.analyzer import analyze_video
from app.models.analysis import Analysis, AnalysisStatus
from app.services.storage import storage_service
from app.workers.celery_app import celery_app


@celery_app.task(name="fitform.process_analysis")
def process_analysis(analysis_id: str) -> None:
    db = SessionLocal()
    try:
        analysis = db.get(Analysis, UUID(analysis_id))
        if analysis is None:
            return
        analysis.status = AnalysisStatus.processing
        db.commit()

        local_path = storage_service.download_to_local(analysis.video_key)
        result = analyze_video(local_path, analysis.exercise)

        analysis.status = AnalysisStatus.completed
        analysis.score = result.score
        analysis.confidence = result.confidence
        analysis.rep_count = result.rep_count
        analysis.stability_score = result.stability_score
        analysis.summary = result.summary
        analysis.mistakes = [item.model_dump() for item in result.mistakes]
        analysis.recommendations = result.recommendations
        analysis.joint_angles = [item.model_dump() for item in result.joint_angles]
        analysis.movement_path = [item.model_dump() for item in result.movement_path]
        analysis.set_analysis = result.set_analysis.model_dump() if result.set_analysis else None
        db.commit()
    except Exception as exc:
        analysis = db.get(Analysis, UUID(analysis_id))
        if analysis:
            analysis.status = AnalysisStatus.failed
            analysis.error = str(exc)
            db.commit()
        raise
    finally:
        db.close()
