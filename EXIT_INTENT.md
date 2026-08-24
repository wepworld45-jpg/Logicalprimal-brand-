# Exit-Intent Lead Capture

## Experience

`exit_intent_popup_v1` is a respectful recovery flow for visitors who are about to leave without completing the primary inquiry form. On desktop, it appears once per session when the pointer leaves through the top edge of the viewport. On mobile, it uses a lower-friction fallback: it appears once after 45 seconds or after the visitor has scrolled through roughly 65% of the page.

The popup personalizes its headline from observed intent only. Clicking the UGC, Brands, or Models navigation links, or changing the existing service selector, sets the interest used in the message. If no signal exists, it uses the neutral phrase “your next growth move.” No personal data is inferred.

## Lead flow

The compact popup asks only for an email address, includes explicit contact consent copy, tags the source as `exit-intent-popup`, and submits to the same FormSubmit destination as the main inquiry form. The secondary “Prefer the full inquiry form?” action closes the popup and scrolls to the existing contact section.

## Accessibility and controls

The popup uses `role="dialog"`, `aria-modal="true"`, a labelled heading, an accessible close button, Escape-to-close behavior, a simple focus trap, initial focus on the email field, overlay-click dismissal, and body scroll locking while open. It can be QA-tested without submitting a lead by appending `?hero_variant=control&proof_variant=control` and triggering the desktop exit condition.

## Events

The popup emits `popup_impression`, `popup_open`, `popup_submit`, and `popup_dismiss` through the existing custom experiment event, `dataLayer`, Plausible if present, and local QA counters under `exit_intent_popup_v1_metrics`.
