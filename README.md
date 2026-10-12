# Starlite Childcare - full-stack website

This version uses separate pages, a shared visual system, a server-side inquiry endpoint, and a supplied still map image.

## Run locally

1. Copy `.env.example` to `.env`.
2. Set `INQUIRY_TO_EMAIL` to the private inbox that should receive inquiries.
3. Set `RESEND_API_KEY` from a Resend account. The server uses the Resend HTTP API, so no email address is exposed in the browser.
4. Set `RESEND_FROM_EMAIL` to a sender on a domain verified with Resend. The example sender is suitable for testing only.
5. Run `npm start` and open `http://localhost:3000`.

The site will render without any map key. Inquiry delivery requires the email environment variables.

## Deploy

Deploy this folder to a Node host such as Render, Railway, Fly.io, or another service that runs `npm start`. Add the three environment variables in the host dashboard. Do not commit `.env`.

The About page uses the supplied map image and intentionally does not display a street address.

## Photos

Photo slots are included in the design. Add only images where no child's face is visible. Crop, blur, or exclude any image that does not satisfy that rule.
