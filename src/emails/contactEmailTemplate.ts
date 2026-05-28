/**
 * Generates the HTML for the contact email received from the portfolio.
 * Returns a fully self-contained HTML string — no external dependencies.
 */
export function contactEmailTemplate({
  senderEmail,
  message,
}: {
  senderEmail: string;
  message: string;
}): string {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  // Escape user-generated content to prevent XSS in the email body
  const safeMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br/>');

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">

          <!-- Header bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#c0392b 0%,#e74c3c 100%);padding:32px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);">
                      Portfolio Message
                    </p>
                    <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;">
                      Someone reached out ✉️
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <div style="width:48px;height:48px;background:rgba(255,255,255,0.15);border-radius:50%;display:inline-block;text-align:center;line-height:48px;font-size:22px;">
                      HD
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender info strip -->
          <tr>
            <td style="background:#222222;padding:16px 36px;border-bottom:1px solid #2a2a2a;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#777;text-transform:uppercase;letter-spacing:1px;">From</p>
                    <a href="mailto:${senderEmail}" style="color:#e74c3c;font-size:15px;font-weight:600;text-decoration:none;display:block;margin-top:4px;">
                      ${senderEmail}
                    </a>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;color:#555;">${timestamp}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message body -->
          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 16px;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#555;">
                Message
              </p>
              <div style="background:#111111;border-left:3px solid #e74c3c;border-radius:0 8px 8px 0;padding:20px 24px;font-size:15px;line-height:1.75;color:#d4d4d4;white-space:pre-wrap;word-break:break-word;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:0 36px 32px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#e74c3c;border-radius:8px;">
                    <a href="mailto:${senderEmail}"
                       style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                      Reply to ${senderEmail} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 36px;">
              <div style="height:1px;background:#2a2a2a;"></div>
            </td>
          </tr>

          <!-- Footer note -->
          <tr>
            <td style="padding:24px 36px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#444;line-height:1.6;">
                This message was sent via the contact form on
                <a href="https://harshdahiya.dev" style="color:#666;text-decoration:none;">harshdahiya.dev</a>.
                <br/>Hit <strong style="color:#666;">Reply</strong> to respond directly to the sender.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
