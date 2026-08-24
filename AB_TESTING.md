# Hero A/B Test

## Experiment

The landing page runs `hero_headline_cta_v1` with a 50/50 split between the existing control and one targeted variation. Assignment is stored in `localStorage` under `logicprimal_hero_variant_v1`, so returning visitors see the same experience. For QA, append `?hero_variant=control` or `?hero_variant=variant` to the landing-page URL.

| Variant | Hero headline | Primary CTA |
| --- | --- | --- |
| Control | WE BUILD / PERSONAL / BRANDS / THAT SELL. | VIEW UGC REELS → |
| Variation | MAKE THEM / STOP. / AND / BUY. | GET MY GROWTH MAP → |

## Events

The page dispatches `logicprimal:experiment` events with `experiment`, `variant`, and `event` fields. The event names are `hero_impression` and `hero_cta_click`. If an existing `dataLayer` array is present, events are also pushed there; if Plausible is present, the same events are sent to Plausible. A local counter is kept under `hero_headline_cta_v1_metrics` for QA only.

The experiment changes only the hero headline and primary CTA. The existing CTA’s control destination remains unchanged, while the variation routes directly to the contact section.

## Secondary Test: Proof Order

The page also runs `proof_order_v1`. The control keeps the existing outcome-first order: `3.2x` average ROAS lift, `180+` UGC reels shipped, then `24h` hook to edit. The variation uses a volume-first order: `180+` UGC reels shipped, `3.2x` average ROAS lift, then `24h` hook to edit. The metric values and labels are unchanged; only their order changes.

Assignment is stored in `localStorage` under `logicprimal_proof_variant_v1`. For QA, append `?proof_variant=control` or `?proof_variant=variant`. The experiment emits `proof_impression` when the proof band enters the viewport and `proof_contact_click` when a visitor later clicks a contact link. These events use the same custom event, `dataLayer`, Plausible, and local QA-counter hooks as the hero experiment.

The hypothesis is that leading with visible creative volume may build enough trust to increase progression to the contact section, compared with leading with the performance metric. Because the site has no verified testimonials or review corpus, this test intentionally does not add fabricated social proof.

## Coordinated MVT: Hero × Proof × Exit

The page now supports `logicprimal_mvt_v1`, an 8-cell, 2×2×2 multivariate test. Each visitor receives one stable combination, stored under `logicprimal_mvt_v1`, and all downstream experiment events include the combination ID.

| Factor | 0 / control | 1 / variation |
| --- | --- | --- |
| H — hero | Original “WE BUILD PERSONAL BRANDS THAT SELL.” and `VIEW UGC REELS →` | “MAKE THEM STOP. AND BUY.” and `GET MY GROWTH MAP →` |
| P — proof | Outcome-first metric order | Volume-first metric order |
| X — exit | Desktop top-edge exit; mobile at 65% scroll or 45 seconds | Desktop top-edge exit plus 20-second recovery; mobile at 55% scroll or 30 seconds |

Combination IDs use the format `H0P0X0` through `H1P1X1`; for example, `H1P1X1` combines the variation for all three factors. Use `?mvt=H1P1X1` to force a complete combination for QA. Individual overrides remain available with `?hero_variant=`, `?proof_variant=`, and `?exit_variant=`. The popup QA override remains `?exit_popup=1`.

The primary business outcome is a completed lead submission from the main form or exit popup. Supporting events are `mvt_assignment`, `hero_impression`, `hero_cta_click`, `proof_impression`, `proof_contact_click`, `popup_impression`, `popup_open`, `popup_submit`, and `popup_dismiss`. Analyze by complete combination ID first, then by each factor and interaction. Do not declare a winner until each cell has adequate real traffic and lead volume; the repository contains no simulated performance results.
