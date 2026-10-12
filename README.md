# Starlite Childcare - full-stack website

This version uses separate pages, a shared visual system, a server-side inquiry endpoint, and the Google Maps JavaScript API.

## Run locally

1. Copy `.env.example` to `.env`.
2. Set `INQUIRY_TO_EMAIL` to the private inbox that should receive inquiries.
3. Set `RESEND_API_KEY` from a Resend account. The server uses the Resend HTTP API, so no email address is exposed in the browser.
4. Set `RESEND_FROM_EMAIL` to a sender on a domain verified with Resend. The example sender is suitable for testing only.
5. Set `GOOGLE_MAPS_API_KEY` to a browser-restricted Google Maps JavaScript API key. Enable Maps JavaScript API and restrict the key to your live domain.
5. Run `npm start` and open `http://localhost:3000`.

The site will still render without a Maps key, but the map area will show a setup message. Inquiry delivery requires both email environment variables.

## Deploy

Deploy this folder to a Node host such as Render, Railway, Fly.io, or another service that runs `npm start`. Add the three environment variables in the host dashboard. Do not commit `.env`.

The map uses an approximate Dublin outline and a 250-foot radius circle, which equals a 500-foot diameter. It intentionally does not display a street address or home marker.

## Photos

Photo slots are included in the design. Add only images where no child's face is visible. Crop, blur, or exclude any image that does not satisfy that rule.
