# RESTAU POS — Tablet UI Prototype

This repository begins the standalone RESTAU POS project. The current **index.html** is a responsive, touch-friendly front-end prototype for design and workflow validation.

## Current prototype features

- Cashier layout with Dine-in, Takeaway and Delivery order types.
- Sample menu with search, category filters, cart quantity controls and KWD totals.
- Order submission to a local prototype kitchen ticket board.
- Kitchen statuses: New → Preparing → Ready → Completed.
- Record-cash demo action for unpaid orders.
- Menu editor: add items and categories, edit name/price/route, toggle availability.
- Settings screens for restaurant details, printer addresses, category routing, configurable charges, role descriptions and local backup.
- Sales summary and CSV/JSON export/restore.
- Browser-local persistence using localStorage, so a refresh keeps prototype settings and demo orders.
- Network indicator that reflects the browser's internet state.

## Important limitations

This is **not a production POS** and must not be used for live transactions.

- It saves prototype data in the browser on the device running the page, not in the planned POS hub database.
- It does not connect to physical printers, an actual card terminal, a cloud service or remote reporting.
- The card-terminal selection is test-only and does not process or authorize payments.
- Print jobs, cloud synchronization and encrypted off-device backups are represented in the UI but are not yet implemented.
- Browser storage can be cleared and is not a substitute for a real database and backup.
- Staff roles are illustrative; production permissions must be enforced on the local hub.

## Run the prototype

Open **index.html** in a modern browser on a tablet or computer. No package installation is required. For the best tablet review, serve the file from a local development web server rather than relying on browser-specific file URL behavior.

The menu and settings are sample data. Changes remain local to that browser profile.

## Target production architecture

1. **Android cashier app** — native Kotlin/Jetpack Compose user interface.
2. **Local POS hub** — dedicated Linux mini-PC running a Node.js/TypeScript API and PostgreSQL.
3. **Local operations** — orders and payments saved to the hub database before non-essential online work.
4. **Print service** — durable local print queue with separate receipt and kitchen routes, retries and reprint audit records.
5. **Cloud service** — secure sync endpoint, encrypted off-device backups and read-only remote sales reports.
6. **Offline synchronization** — transactional outbox, stable event IDs, retry with backoff and idempotent cloud writes so pending events are sent once after internet connectivity returns.
7. **Payment terminal adapter** — integrate only after the chosen Kuwait merchant-acquiring provider confirms a supported SDK/ECR/API. Do not store card numbers, PINs or CVVs in the POS.

## Recommended implementation sequence

- [x] Create UI prototype branch and initial cashier/kitchen/settings design.
- [ ] Review the tablet layout and first-version workflow.
- [ ] Create local-hub API, PostgreSQL schema and health endpoint.
- [ ] Connect cashier UI to the hub and persist test orders there.
- [ ] Implement durable kitchen/receipt queues and test with selected printers.
- [ ] Add staff authentication, server-enforced permissions and audit logs.
- [ ] Implement cloud outbox synchronization, encrypted backups and tested restore.
- [ ] Integrate the selected terminal in provider-approved test mode.
- [ ] Add remote reporting and complete offline/failure acceptance tests.

## First acceptance goals

Before any live deployment, demonstrate that the hub can save an order while the internet is disconnected, restart without losing that order, queue its kitchen ticket, synchronize the event once internet returns, and restore successfully from an encrypted backup. Also verify that the payment state never becomes paid without confirmed payment-provider evidence.


## Preview link

- **Instant design preview (third-party HTML preview):** https://html-preview.github.io/?url=https://github.com/mahlikakopiofficial-stack/POS/blob/feat/tablet-pos-ui-prototype/index.html
- **Stable GitHub Pages URL after Pages is enabled and the deployment succeeds:** https://mahlikakopiofficial-stack.github.io/POS/

To enable the stable Pages URL, open repository **Settings → Pages**, set the source to **GitHub Actions**, then open **Actions** and rerun or run **POS preview deployment**. The workflow runs a basic JavaScript/UI smoke check before publishing.

**Preview safety:** this is unconnected demo software. Do not enter real customer data, staff PINs or payment details. The external HTML preview uses a third-party rendering service; use GitHub Pages for the preferred stable review link.
