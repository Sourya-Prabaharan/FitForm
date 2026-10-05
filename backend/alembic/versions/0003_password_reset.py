"""Store expiring, one-use password reset codes."""
from alembic import op
import sqlalchemy as sa

revision = "0003_password_reset"
down_revision = "0002_add_set_analysis"
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("users", sa.Column("reset_code_hash", sa.String(64), nullable=True))
    op.add_column("users", sa.Column("reset_expires_at", sa.DateTime(timezone=True), nullable=True))


def downgrade():
    op.drop_column("users", "reset_expires_at")
    op.drop_column("users", "reset_code_hash")
