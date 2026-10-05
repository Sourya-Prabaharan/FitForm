import smtplib
import ssl
from email.message import EmailMessage

from app.core.config import settings


def send_reset_code(recipient: str, code: str) -> None:
    message = EmailMessage()
    message["From"] = settings.email_from
    message["To"] = recipient
    message["Subject"] = "Your FitForm password reset code"
    message.set_content(
        f"Your FitForm reset code is {code}.\n\n"
        "Enter it in FitForm within 15 minutes. It can only be used once.\n"
        "If you did not request this, you can ignore this email."
    )
    with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as smtp:
        if settings.smtp_starttls:
            smtp.starttls(context=ssl.create_default_context())
        if settings.smtp_username:
            smtp.login(settings.smtp_username, settings.smtp_password)
        smtp.send_message(message)
