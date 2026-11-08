# International Advertising portfolio

A work-in-progress assessment portfolio built with HTML, CSS and vanilla JavaScript. No installation or build is required.

## Main pages

| File | Purpose |
| --- | --- |
| index.html | Portfolio homepage |
| contents.html | Contents and five-stage creative journey |
| case-studies.html | Case studies placeholder |
| brief.html | Starting point, objectives and learning context |
| discover.html | Research, audiences, insights and culture |
| define.html | Strategy, positioning and decisions |
| develop.html | Concepts, persuasion, iteration and execution |
| evolve.html | Feedback, reflection and development |
| dashboard.html | Separate overview of six learning outcomes |

The stages are a storytelling structure. They do not assign learning outcomes to individual pages. The dashboard will eventually connect 36 official criteria to evidence across the portfolio. Criteria wording, ratings and evidence are intentionally pending.

## Preview and check

Open index.html directly in a browser, or use VS Code's Live Server extension (right-click index.html and choose **Open with Live Server**).

- Test the three homepage links: Contents, Case Studies and Competency Dashboard.
- From Contents, follow each of the five stage links and return using the Contents link.
- Check the Home links on the inner pages.
- Check the navigation, current-page indicator and next-stage links.
- Resize the browser to desktop, tablet and narrow mobile widths.
- On mobile, open the Menu; Escape closes it. Navigation remains visible when JavaScript is disabled.
- Open the dashboard outcomes to view their placeholders.
- Use Tab to check keyboard focus and the skip-to-content link.

## GitHub Pages

Commit and push the site files when ready. In the repository's Settings → Pages, select **Deploy from a branch**, the branch containing the site, and **/ (root)**. No build workflow or backend is needed. All local links are relative, so the same files work at a user-site URL or under a repository-name prefix.

## Editing content

Edit each page's HTML directly. Placeholder sections have stable IDs such as discover.html#insights, so future evidence links can target specific sections. Replace placeholder paragraphs with verified content and remove pending labels as sections are completed.

Shared styles are in assets/css/style.css. Shared mobile navigation is in assets/js/main.js. Dashboard disclosures use native HTML and do not need JavaScript.

The pre-existing, empty about.html, portfolio.html and assets/js/dashboard.js files and projects directory are retained, but are not part of the main navigation.

### Stylesheet caching

Each page includes a shared version tag on its stylesheet URL (assets/css/style.css?v=be1bcf6d42aa). This makes browsers request the current CSS after an update instead of reusing an older cached copy. When changing the stylesheet, update this tag consistently across all nine pages and publish the HTML and CSS together. The tag is a cache key, not a separate filename.

If the live page still shows an old layout immediately after publishing, wait for the GitHub Pages deployment to finish and hard-refresh once with Ctrl+F5.
