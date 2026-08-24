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
