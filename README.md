# Boyi Liu — Personal Homepage

Personal academic homepage of Boyi Liu (Logan B. Liu).

Website: https://logancome.github.io/

This repository contains a static website. GitHub Pages serves the `main` branch from the repository root. Edit `index.html` for content and `assets/css/cv-updates.css` for custom styling.

Based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). See `LICENSE`.

## Site identity and visitor statistics

Browser icons, the root `favicon.ico`, and mobile home-screen icons use the current
portrait from `images/icon.jpg`. Versioned icon URLs refresh cached template icons.

The footer places credits on the left, the motto “创新无极限，敢为天下先” in
the center, and visitor statistics with the back-to-top link on the right. These
share one row on wide screens and stack on mobile. The small counter uses
[Vercount](https://github.com/evannotfound/vercount), an open-source project licensed
under GPL-3.0, through its official hosted client at
`https://events.vercount.one/js`. There is no large statistics heading or card.

Site-wide views include repeat page loads. Vercount estimates visitors by marking
the browser with a first-party cookie; it also caches the last returned totals in
local storage. Counts are maintained by its remote service, not a local counter.
No account or separate server is needed for this public counter. The optional
Vercount administration dashboard has not been configured.

The provider was switched from the original Busuanzi on 2026-10-01. Although the
Vercount documentation describes automatic import, our first live response began
at 1 view / 1 visitor, so do not assume previous totals have been migrated.
Historical traffic from before tracking was installed cannot be reconstructed.

Tracking loads only on `https://logancome.github.io`; local previews do not record
visits. The browser sends its current page URL to the Vercount service. The official
client can display cached totals when requests fail. If it cannot supply counts,
the footer retains dashes with a short unavailable message. Service availability
is controlled by the external provider.

Styling and loading behavior are in `assets/css/visitor-stats.css` and
`assets/js/visitor-stats.js`.
