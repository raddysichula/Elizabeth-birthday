# Elizabeth Birthday Celebration Website

Owner/occasion: Elizabeth
Birthday: 7 May 2026
Developer: Raddy

## Features
- Responsive birthday landing page
- Love-message popup
- Animated CSS birthday cake
- Music play/pause control
- Birthday schedule
- Real photo gallery section
- Online RSVP form
- PostgreSQL database storage for RSVPs
- Admin-only RSVP listing endpoint

## Local editing
Open `public/index.html` with a local web server. Keep `style.css` and `script.js` beside it.
Put Elizabeth's photo in `public/images/elizabeth-photo.jpg`.
Put a permitted birthday music file at `public/birthday-music.mp3`.

## Online backend
The `api/` and `migrations/` folders are for the Hatchable-hosted backend/database. The public site sends RSVP data to `/api/rsvp`.

## Important
Do not put database passwords or private API keys in the frontend.
