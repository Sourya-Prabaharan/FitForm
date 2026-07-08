from app.core.security import hash_password
from app.db.session import SessionLocal
from app.models.user import User


def main() -> None:
    db = SessionLocal()
    try:
        existing = db.query(User).filter(User.email == "demo@fitform.ai").first()
        if existing:
            return
        db.add(User(email="demo@fitform.ai", full_name="Demo Athlete", hashed_password=hash_password("password123")))
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    main()
