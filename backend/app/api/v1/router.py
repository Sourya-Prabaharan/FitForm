from fastapi import APIRouter

from app.api.v1 import analyses, auth, users

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(analyses.router, prefix="/analyses", tags=["analyses"])
