# Media URL regression verification

PR6 deleted every whitespace/backtick character, breaking meaningful filename spaces. Original encoded paths returned200; whitespace-deleted paths returned404. No stored data was modified.

The shared normalizer trims outer whitespace and paired backtick wrappers only. It preserves filename characters and existing percent encoding, rejecting unsupported schemes, credentials, control characters and relative authority confusion. Modal and both card renderers share it; invalid modal entries do not create blank slides.

Mac Chrome isolated fixture: raw-space and encoded-space images loaded (naturalWidth300); formatting-wrapped clean image loaded (533). Raw-space, encoded-space and wrapped sample video all reached readyState4, videoWidth960, duration5.055s. Video fixture used an MDN CC0 sample. Local fixture/assets are not committed and server was stopped. Twenty-one Node tests cover idempotence, %20/%2520, Unicode, wrappers and invalid input. TypeScript noEmit passed. Independent review suggestions were addressed.

Local dependencies were reused (Next16.1.0-canary.19). CI performs a clean npm ci plus tests/typecheck; production build/runtime parity remains a separate release gate. No deployment/database mutation. Existing remote-image allowlist unchanged.
