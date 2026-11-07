# foodiechina888 kitchen store

[foodiechina888.com](https://foodiechina888.com/) is the production storefront. The catalog links to Amazon US with the tracking ID `weichaoshen-20`.

The initial storefront was copied from [the tested yiwuhire revision](https://github.com/superchaospc/yiwuhire/commit/ea310db). Production uses the HTML, styles, scripts and hero images in this repository. Both sites are maintained independently. Apply future yiwuhire.com changes to production only when the owner explicitly requests that particular sync.

## Storefront

Production [v2.2.1](https://github.com/superchaospc/foodiechina888/releases/tag/v2.2.1) adopts the approved [yiwuhire v2.3.1 design](https://github.com/superchaospc/yiwuhire/releases/tag/v2.3.1):

- **Warm palette.** Cream page and catalog backgrounds with a brown-red primary button that matches the illustrated hero.
- **Even product cards.** Every image sits in the same square tile. Descriptions stop at three lines, and each card ends with a round arrow button. Apart from the required Associates disclosure, the page does not mention Amazon. Best sellers carry a pill badge on the image.
- **Category sections.** The All view shows a heading before each category. The filter bar sticks below the header while scrolling.
- **Affiliate disclosure.** "As an Amazon Associate I earn from qualifying purchases." appears under the catalog heading and in the footer.
- **Coffee support.** The hero keeps a single shopping button. "Buy me a coffee" sits in The lore, and a floating coffee cup button appears at the bottom right once the hero scrolls away. It hides again over the hero and The lore, and shows as a round icon on phones.

The live catalog has 32 products. The eight categories appear in this order: cookbooks, pans, knives, steamers, air fryers, prep tools, tableware and pantry. Each has four products with its featured best seller first.

Edit product cards and links in [index.html](index.html), responsive layouts in [kitchen/shop.css](kitchen/shop.css), and category filtering and the coffee button in [kitchen/shop.js](kitchen/shop.js). When changing the catalog, update the initial item count in the HTML. After editing the CSS or JavaScript, bump both `?v=` version strings in index.html so visitors get the new files.

Production [v2.1.0](https://github.com/superchaospc/foodiechina888/releases/tag/v2.1.0) had the previous design: a blue shopping button, a light grey catalog and white product cards.

## Publishing

Cloudflare Pages deploys this repository's main branch. The site requires no build step. To preview it locally, run `python3 -m http.server 8000` from the repository root.

## Previous website

The [pre-store backup](https://github.com/superchaospc/foodiechina888/releases/tag/backup-before-kitchen-store-2026-11-06) contains the original homepage, images, music, configuration and documentation. To restore that version, restore its tree on a new branch and review it before merging into main.
