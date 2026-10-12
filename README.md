# Starlite Childcare - full-stack website

This version uses separate pages, a shared visual system, a server-side inquiry endpoint, and a supplied still map image. It supports split deployment: GitHub Pages for the front end and a Node web service for inquiries.

## Run locally

1. Copy `.env.example` to `.env`.
2. Set `INQUIRY_TO_EMAIL` to the private inbox that should receive inquiries.
3. Set `RESEND_API_KEY` from a Resend account. The server uses the Resend HTTP API, so no email address is exposed in the browser.
4. Set `RESEND_FROM_EMAIL` to a sender on a domain verified with Resend. The example sender is suitable for testing only.
5. Run `npm start` and open `http://localhost:3000`.

The site will render without any map key. Inquiry delivery requires the email environment variables.

## Deploy with GitHub Pages plus Render

1. Deploy this folder as a Render Web Service. Render supports Node web services and provides a public `onrender.com` URL. Use `npm install` as the build command and `npm start` as the start command.
2. Add these Render environment variables:
   - `FRONTEND_ORIGIN=https://YOUR-USERNAME.github.io`
   - `INQUIRY_TO_EMAIL=...`
   - `RESEND_API_KEY=...`
   - `RESEND_FROM_EMAIL=...`
3. Wait for Render to deploy and copy the service URL, such as `https://starlite-inquiries.onrender.com`.
4. In `config.js`, set:
   ```js
   window.STARLITE_CONFIG = { apiBase: 'https://starlite-inquiries.onrender.com' };
   ```
5. Push the repository root to the GitHub Pages repository. It already contains `config.js`, all HTML pages, `styles.css`, `app.js`, and `assets/starlite-map.png`.

The browser sends inquiries to the Render URL, while Resend credentials remain only on Render. Render automatically redeploys the backend when the linked Git branch changes. GitHub Pages continues to host the public pages separately.

If the GitHub Pages site is a project site rather than a `YOUR-USERNAME.github.io` site, use only the origin in `FRONTEND_ORIGIN`, without the repository path.

The About page uses the supplied map image and intentionally does not display a street address.

## Photos

Photo slots are included in the design. Add only images where no child's face is visible. Crop, blur, or exclude any image that does not satisfy that rule.
