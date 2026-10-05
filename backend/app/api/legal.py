from html import escape
from fastapi import APIRouter
from fastapi.responses import HTMLResponse
from app.core.config import settings

router = APIRouter()


def page(title: str, body: str) -> HTMLResponse:
    contact = escape(settings.support_email, quote=True)
    return HTMLResponse(f"""<!doctype html><html lang="en"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>FitForm - {title}</title><style>
body{{font:17px/1.65 system-ui,sans-serif;max-width:760px;margin:40px auto;padding:0 24px;color:#172921}}
h1,h2{{line-height:1.25}}a{{color:#18623e}}
</style><main><h1>FitForm {title}</h1>{body}
<h2>Contact</h2><p>For support, privacy or account questions, email
<a href="mailto:{contact}">{contact}</a>.</p></main></html>""")


@router.get("/privacy", response_class=HTMLResponse, include_in_schema=False)
def privacy():
    return page("Privacy Policy", """
<p>Effective September 18, 2026.</p>
<h2>Data we collect</h2><p>FitForm stores your name, email address, password hash,
videos you upload, pose landmarks, workout analyses and account identifiers.
Service logs may include request times, IP addresses and processing errors.</p>
<h2>How we use data</h2><p>We use this information to authenticate you, process
the videos you choose, show your history and progress, send password reset emails
and operate the service. Workout feedback uses automated pose estimation and
rule-based scoring. Uploaded videos are not used to train a custom model.</p>
<h2>Storage and sharing</h2><p>Videos are processed on the backend and remain
private to your account, except for time-limited playback links. Infrastructure
and email providers process data to operate FitForm. FitForm does not sell your
data, display targeted advertising, use HealthKit or include analytics tracking.</p>
<h2>Retention and deletion</h2><p>Account data, videos and analyses remain until
you delete your account. Use Delete account in Profile to remove active records
and videos; wait for running analyses to finish first. Contact support for data
access or export requests. Backup copies, where used by the deployment operator,
are governed by that operator's published retention policy.</p>
<h2>Your choices</h2><p>Camera and microphone access is optional. You can select
an existing video instead and change device permissions in Settings. Only upload
videos you have permission to share. FitForm is intended for ages 13 and older.</p>
""")


@router.get("/terms", response_class=HTMLResponse, include_in_schema=False)
def terms():
    return page("Terms of Service", """
<p>Effective September 18, 2026.</p>
<h2>Using FitForm</h2><p>Keep your account secure and upload only videos you own
or are authorized to share. Do not upload unlawful material, impersonate others
or abuse the service. You retain ownership of your videos and permit FitForm
to store and process them to provide your requested analyses.</p>
<h2>Fitness feedback</h2><p>FitForm provides informational fitness feedback.
Scores and possible fatigue patterns are estimates, not medical advice or a
substitute for a qualified coach. Camera position, occlusion and lighting can
change results. A score does not establish that a movement is safe or unsafe.
Stop exercising if you feel pain and seek appropriate professional guidance.</p>
<h2>Availability</h2><p>FitForm may be unavailable for maintenance or faults.
Do not rely on it as your sole record of training. You may stop using FitForm
and delete your account in Profile. These terms do not limit rights you have
under applicable law.</p>
""")
