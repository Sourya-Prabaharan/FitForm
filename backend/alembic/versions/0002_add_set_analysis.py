"""add set analysis payload

Revision ID: 0002_add_set_analysis
Revises: 0001_initial
Create Date: 2026-05-21 00:00:00.000000
"""

from collections.abc import Sequence

import sqlalchemy as sa

from alembic import op

revision: str = "0002_add_set_analysis"
down_revision: str | None = "0001_initial"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    op.add_column("analyses", sa.Column("set_analysis", sa.JSON(), nullable=True))


def downgrade() -> None:
    op.drop_column("analyses", "set_analysis")
