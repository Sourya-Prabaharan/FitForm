"""Persist timestamped video overlay landmarks."""
from alembic import op
import sqlalchemy as sa

revision = "0004_pose_frames"
down_revision = "0003_password_reset"
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("analyses", sa.Column("pose_frames", sa.JSON(), nullable=False, server_default="[]"))


def downgrade():
    op.drop_column("analyses", "pose_frames")
