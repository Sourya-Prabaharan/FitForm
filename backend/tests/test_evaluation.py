import pytest

from app.ml.evaluation import evaluate_accuracy


def reviewed(**updates):
    item = {"file": "clip.mp4", "exercise": "squat", "status": "completed", "rep_count": 5,
            "mistakes": [{"code": "depth_not_reached"}, {"code": "knees_caving"}],
            "expected": {"reviewed": "true", "split": "holdout", "source_type": "human",
                         "reviewer": "test reviewer", "rep_count": "4", "mistakes": '["depth_not_reached"]'}}
    return {**item, **updates}


def test_unlabeled_predictions_cannot_establish_accuracy():
    report = evaluate_accuracy([reviewed(expected={})])
    assert report["status"] == "unvalidated"
    assert report["exercises"]["squat"]["repCountMeanAbsoluteError"] is None


def test_known_errors_and_rejections_are_visible():
    result = evaluate_accuracy([reviewed(), reviewed(status="failed")])["exercises"]["squat"]
    assert result["repCountMeanAbsoluteError"] == 1
    assert result["issuePrecision"] == 0.5
    assert result["issueRecall"] == 1
    assert result["coverage"] == 0.5
    assert result["rejectedOrFailedClips"] == 1


def test_bad_labels_fail_instead_of_silently_dropping_a_clip():
    item = reviewed()
    item["expected"]["rep_count"] = "not reviewed"
    with pytest.raises(ValueError, match="Invalid reviewed labels"):
        evaluate_accuracy([item])


def test_training_and_synthetic_clips_are_not_holdout_evidence():
    training = reviewed()
    training["expected"]["split"] = "train"
    synthetic = reviewed()
    synthetic["expected"]["source_type"] = "synthetic"
    assert evaluate_accuracy([training, synthetic])["status"] == "unvalidated"
