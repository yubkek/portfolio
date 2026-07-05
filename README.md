# Portfolio

A simple static portfolio site with two sections — **AI / ML** and **Projects** — each showing project cards with a screenshot placeholder, description, and a link to the work.

## Structure

- `index.html` — the home page. Each project is a `<article class="card">` block in the AI/ML or Projects grid.
- `projects/*.html` — one detail page per project, linked from its card. Clicking a card's image or title opens its detail page, which shows a gallery of multiple screenshots plus the GitHub link.
- `style.css` — shared styling for both the home page and detail pages.

## Editing

- Update the placeholder name, bio, and social links at the top of `index.html`.
- To add a project: duplicate a `<article class="card">` block in `index.html`, then duplicate a file in `projects/` (e.g. copy `projects/project-1.html`) and update its title, description, tags, GitHub link, and gallery screenshots. Point the card's links (`card-shot-link`, the `<h3>` link, and "View Screenshots") at the new file.
- Update the `href="#"` GitHub links (on both the card and its detail page) to point at each project's actual repo or live demo.

### Adding real screenshots

Both the home page cards and the detail page galleries currently use placeholder divs (`<div class="gallery-shot placeholder-shot"><span>Screenshot 1</span></div>`). To use a real image instead:

1. Add your image to an `images/` folder (e.g. `images/email-agent-1.png`).
2. Replace the placeholder div with:
   ```html
   <img class="gallery-shot" src="../images/email-agent-1.png" alt="Email Agent — chat interface" />
   ```
   (use `images/` without `../` on the home page, since `index.html` is one level up from `projects/`)

## Hosting on GitHub Pages

1. Push this folder's contents to the `portfolio` repo on GitHub (already set up as the `origin` remote).
2. On GitHub: **Settings → Pages → Source** → select branch `main`, folder `/ (root)` → Save.
3. Your site will be live at `https://yubkek.github.io/portfolio/`.
