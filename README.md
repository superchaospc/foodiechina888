# foodiechina888 kitchen store

[foodiechina888.com](https://foodiechina888.com/) is the production storefront. The catalog links to Amazon US with the tracking ID `weichaoshen-20`.

The initial storefront was copied from [the tested yiwuhire revision](https://github.com/superchaospc/yiwuhire/commit/ea310db). Production uses the HTML, styles, scripts and hero images in this repository. Both sites are maintained independently. Apply future yiwuhire.com changes to production only when the owner explicitly requests that particular sync.

## Storefront

The [v2.0.1 release](https://github.com/superchaospc/foodiechina888/releases/tag/v2.0.1) documents the live catalog of 32 products. The eight categories appear in this order: cookbooks, pans, knives, steamers, air fryers, prep tools, tableware and pantry. Each has four products with its featured best seller first.

Edit product cards and links in [index.html](index.html), responsive layouts in [kitchen/shop.css](kitchen/shop.css) and category filtering in [kitchen/shop.js](kitchen/shop.js). When changing the catalog, update the initial item count in the HTML.

## Publishing

Cloudflare Pages deploys this repository's main branch. The site requires no build step. To preview it locally, run `python3 -m http.server 8000` from the repository root.

## Previous website

The [pre-store backup](https://github.com/superchaospc/foodiechina888/releases/tag/backup-before-kitchen-store-2026-11-06) contains the original homepage, images, music, configuration and documentation. To restore that version, restore its tree on a new branch and review it before merging into main.
