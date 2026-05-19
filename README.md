# foodiechina888 🍜

[![Website](https://img.shields.io/badge/website-live-C7352D?style=for-the-badge)](https://foodiechina888.com)
[![Deploy](https://img.shields.io/badge/deploy-Netlify-00AD9F?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
![HTML](https://img.shields.io/badge/HTML-static-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-inline-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JS-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222)
[![License: MIT](https://img.shields.io/badge/license-MIT-222222?style=for-the-badge)](LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/superchaospc/foodiechina888?style=for-the-badge)

Official static website for [foodiechina888.com](https://foodiechina888.com), Wayne Shen's Chinese cooking channel.

The site is a single-page HTML/CSS/JavaScript website built for fast loading, simple maintenance, and GitHub-to-Netlify deployment.

## Latest Update

`v1.1.6` refreshes the social proof stats:

- Updates Facebook followers to `3.6M`.
- Updates Instagram followers to `3.7M`.
- Keeps total followers aligned at `11.8M`.
- Enlarges the infinity stat visually without shifting the label below it.

`v1.1.5` replaces the background music track:

- Replaces `assets/sparkle.mp3` with `assets/sun-kissed-haze.mp3`.
- Updates the lower-left music player title to `Sun-Kissed Haze`.
- Keeps autoplay attempts, looping playback, and the play/pause control behavior unchanged.

`v1.1.4` strengthens automatic background music playback:

- Retries playback across audio readiness events, page load, page restore, and page visibility changes.
- Adds short delayed retry attempts after the page opens.
- Starts playback after the first general page click or keypress if a browser blocks initial audible autoplay.
- Keeps the lower-left `Sparkle` player available for manual pause and resume.

`v1.1.3` adds a discreet background music player:

- Shows the current background track name, `Sparkle`, in a small lower-left player.
- Adds a compact play/pause button so visitors can turn the music off or back on.
- Keeps the default automatic playback attempt and continuous looping behavior.
- Places the control away from the Buy Me a Coffee widget so the floating UI does not overlap.

`v1.1.2` adds background music:

- Adds `assets/sparkle.mp3` as the site's background track.
- Enables automatic playback attempts when the homepage opens, loads, or restores from browser cache.
- Loops the track continuously with no visible playback controls.
- Keeps the implementation static and dependency-free with a native HTML audio element.

`v1.1.1` refines the site palette to better match the new hero artwork:

- Keeps the warm gold and rice-paper base from the illustration.
- Adds muted jade and teal accents drawn from the greens in the bowl and landscape.
- Softens section backgrounds, borders, cards, and hover states so the page feels cohesive below the hero.
- Keeps the chili-red accent for key calls to action and follower counts.

`v1.1.0` adds a full-screen illustrated hero system:

- Desktop uses a wide cinematic background with the brand copy placed in the open left side of the artwork.
- Mobile switches to a portrait background so the character, bowl, and Great Wall composition stay visible.
- Social preview metadata now uses the hero artwork for richer link previews.
- The Buy Me a Coffee widget is kept as a compact floating button so it does not cover the hero image.

## 🥢 About

`foodiechina888` is a Chinese home cooking and food entertainment brand known for deadpan recipe videos, family kitchen lore, and the catchphrase:

> Done and dusted, out of this world. ✨

This website collects the channel identity, social links, business contact information, and support links in one lightweight landing page.

## 🧰 Tech Stack

- Static HTML
- Inline CSS
- Vanilla JavaScript
- Netlify hosting
- GitHub continuous deployment

## 📁 Project Structure

```text
.
├── assets/
│   ├── foodiechina888-hero-mobile.png
│   ├── foodiechina888-hero-mobile.webp
│   ├── foodiechina888-hero-wide.png
│   ├── foodiechina888-hero-wide.webp
│   └── sun-kissed-haze.mp3
├── index.html
├── netlify.toml
└── README.md
```

## 🖼️ Artwork

The homepage uses two responsive hero images:

- `assets/foodiechina888-hero-wide.webp` for desktop and tablet layouts
- `assets/foodiechina888-hero-mobile.webp` for phone layouts

PNG versions are kept as fallbacks and for social previews.

## 🎵 Background Music

The homepage uses `assets/sun-kissed-haze.mp3` as a looping background track through a native HTML audio element:

```html
<audio id="bg-music" src="assets/sun-kissed-haze.mp3" autoplay loop preload="auto" playsinline></audio>
```

The script retries playback when the audio becomes ready, when the page loads, when it restores from browser cache, when the tab becomes visible again, and through several short delayed attempts after opening. A small lower-left player displays `Sun-Kissed Haze` and gives visitors a play/pause control. Some browsers may still block audible autoplay for first-time visitors because of browser-level autoplay policies; in that case, the first general page click or keypress starts playback.

## 🚀 Netlify

This project is deployed through Netlify from the GitHub repository.

Build settings:

```text
Build command: leave blank
Publish directory: .
```

Every push to the `main` branch triggers a new Netlify deployment.

## 👀 Local Preview

Open `index.html` directly in a browser:

```text
file:///path/to/foodiechina888/index.html
```

Or run a simple local server from the repository root:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173
```

No build step is required.

## 📬 Contact

Business enquiries: [foodiechina888@gmail.com](mailto:foodiechina888@gmail.com)
