"""initial schema

Revision ID: 0001_initial
Revises:
Create Date: 2026-05-13
"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    exercise = postgresql.ENUM("squat", "deadlift", "bench", name="exercisetype", create_type=False)
    status = postgresql.ENUM("queued", "processing", "completed", "failed", name="analysisstatus", create_type=False)
    exercise.create(op.get_bind(), checkfirst=True)
    status.create(op.get_bind(), checkfirst=True)
    op.create_table(
        "users",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("full_name", sa.String(length=255), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("avatar_url", sa.String(length=500), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
    )
    op.create_index("ix_users_email", "users", ["email"], unique=True)
    op.create_table(
        "analyses",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id"), nullable=False),
        sa.Column("exercise", exercise, nullable=False),
        sa.Column("status", status, nullable=False),
        sa.Column("video_key", sa.String(length=700), nullable=False),
        sa.Column("video_url", sa.String(length=1000), nullable=True),
        sa.Column("overlay_url", sa.String(length=1000), nullable=True),
        sa.Column("score", sa.Integer(), nullable=False),
        sa.Column("confidence", sa.Float(), nullable=False),
        sa.Column("rep_count", sa.Integer(), nullable=False),
        sa.Column("stability_score", sa.Integer(), nullable=False),
        sa.Column("summary", sa.String(length=1000), nullable=False),
        sa.Column("mistakes", sa.JSON(), nullable=False),
        sa.Column("recommendations", sa.JSON(), nullable=False),
        sa.Column("joint_angles", sa.JSON(), nullable=False),
        sa.Column("movement_path", sa.JSON(), nullable=False),
        sa.Column("error", sa.String(length=1000), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
    )
    op.create_index("ix_analyses_user_id", "analyses", ["user_id"])
    op.create_index("ix_analyses_status", "analyses", ["status"])
    op.create_index("ix_analyses_created_at", "analyses", ["created_at"])


def downgrade() -> None:
    op.drop_table("analyses")
    op.drop_table("users")
    postgresql.ENUM(name="analysisstatus").drop(op.get_bind(), checkfirst=True)
    postgresql.ENUM(name="exercisetype").drop(op.get_bind(), checkfirst=True)
