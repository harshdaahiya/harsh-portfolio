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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Inter',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- ── HEADER CARD ── -->
          <tr>
            <td style="background:#2d2d2d;border-radius:16px 16px 0 0;padding:36px 40px 32px;">

              <!-- Logo Row -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Monogram Logo -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#ffffff;border-radius:8px;padding:6px 10px;">
                          <img src="https://drive.google.com/file/d/1ylRJE9Fx_m_Y06PwgYjcBUCoyl69-DK1/view?usp=sharing" alt="Harsh Dahiya" height="28" style="display:block;height:28px;width:auto;border:0;" />
                        </td>
                        <td style="padding-left:12px;">
                          <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;color:#888888;letter-spacing:0.3px;">
                            harshdaahiya.com
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" valign="middle">
                    <!-- Notification pill -->
                    <span style="display:inline-block;background:#383838;border:1px solid #464646;border-radius:100px;padding:4px 12px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:500;color:#aaaaaa;letter-spacing:0.5px;text-transform:uppercase;">
                      New Message
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 24px;">
                <tr>
                  <td style="height:1px;background:#3a3a3a;"></td>
                </tr>
              </table>

              <!-- Headline -->
              <h1 style="margin:0 0 6px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.8px;line-height:1.2;">
                Someone reached out.
              </h1>
              <p style="margin:0;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#666666;line-height:1.5;">
                A new message arrived through your portfolio contact form.
              </p>

            </td>
          </tr>

          <!-- ── BODY CARD ── -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <!-- FROM + TIME row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <!-- From -->
                  <td width="50%" style="padding-right:16px;">
                    <p style="margin:0 0 6px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;color:#aaaaaa;">
                      From
                    </p>
                    <a href="mailto:${senderEmail}" style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:15px;font-weight:600;color:#111111;text-decoration:none;word-break:break-all;">
                      ${senderEmail}
                    </a>
                  </td>
                  <!-- Received -->
                  <td width="50%" style="padding-left:16px;border-left:1px solid #eeeeee;">
                    <p style="margin:0 0 6px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;color:#aaaaaa;">
                      Received (IST)
                    </p>
                    <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;color:#444444;">
                      ${timestamp}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="height:1px;background:#f0f0f0;"></td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;color:#aaaaaa;">
                Message
              </p>
              <div style="background:#fafafa;border:1px solid #eeeeee;border-left:3px solid #111111;border-radius:0 8px 8px 0;padding:20px 24px;">
                <div style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:1.75;color:#333333;word-break:break-word;">
                  ${safeMessage}
                </div>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td>
                    <a href="mailto:${senderEmail}"
                       style="display:inline-block;background:#111111;color:#ffffff;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;text-decoration:none;letter-spacing:0.2px;padding:13px 28px;border-radius:8px;">
                      Reply to Sender &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER CARD ── -->
          <tr>
            <td style="background:#f9f9f9;border:1px solid #eeeeee;border-top:none;border-radius:0 0 16px 16px;padding:28px 40px;">

              <!-- Social Icons row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.2px;color:#aaaaaa;">
                      Find me on
                    </p>
                    <table cellpadding="0" cellspacing="0">
                      <tr>

                        <!-- GitHub -->
                        <td style="padding-right:10px;">
                          <a href="https://github.com/harshdahiyaa" style="display:inline-block;background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 14px;text-decoration:none;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-right:6px;">
                                  <!-- GitHub SVG icon -->
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#333333"/>
                                  </svg>
                                </td>
                                <td>
                                  <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#333333;">GitHub</span>
                                </td>
                              </tr>
                            </table>
                          </a>
                        </td>

                        <!-- LinkedIn -->
                        <td style="padding-right:10px;">
                          <a href="https://linkedin.com/in/harshdahiyaa" style="display:inline-block;background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 14px;text-decoration:none;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-right:6px;">
                                  <!-- LinkedIn SVG icon -->
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#333333"/>
                                  </svg>
                                </td>
                                <td>
                                  <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#333333;">LinkedIn</span>
                                </td>
                              </tr>
                            </table>
                          </a>
                        </td>

                        <!-- Twitter / X -->
                        <td>
                          <a href="https://twitter.com/harshdahiyaa" style="display:inline-block;background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 14px;text-decoration:none;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-right:6px;">
                                  <!-- X (Twitter) SVG icon -->
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="#333333"/>
                                  </svg>
                                </td>
                                <td>
                                  <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#333333;">Twitter</span>
                                </td>
                              </tr>
                            </table>
                          </a>
                        </td>

                        <!-- Instagram -->
                        <td style="padding-left:10px;">
                          <a href="https://instagram.com/harshdahiyaa" style="display:inline-block;background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 14px;text-decoration:none;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-right:6px;">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#333333"/>
                                  </svg>
                                </td>
                                <td>
                                  <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#333333;">Instagram</span>
                                </td>
                              </tr>
                            </table>
                          </a>
                        </td>

                        <!-- YouTube -->
                        <td style="padding-left:10px;">
                          <a href="https://youtube.com/@harshdahiyaa" style="display:inline-block;background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:8px 14px;text-decoration:none;">
                            <table cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-right:6px;">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#333333"/>
                                  </svg>
                                </td>
                                <td>
                                  <span style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#333333;">YouTube</span>
                                </td>
                              </tr>
                            </table>
                          </a>
                        </td>

                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="height:1px;background:#eeeeee;"></td>
                </tr>
              </table>

              <!-- Footer text -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:400;color:#aaaaaa;line-height:1.7;">
                      Sent via the contact form on
                      <a href="https://harshdaahiya.com" style="color:#888888;text-decoration:underline;">harshdaahiya.com</a>.
                      Reply directly to this email to respond to the sender.
                    </p>
                    <a href="https://harshdaahiya.com" style="font-family:'Inter',Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;color:#888888;text-decoration:none;">
                      View Portfolio &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
