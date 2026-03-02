
Goal: Fix only the desktop header movement and keep the header/logo visually stable during page navigation (no footer changes).

Plan

1) Keep Header mounted once across route changes
- Update `src/App.tsx` to use a shared layout route with `<Header /> + <Outlet />`.
- Remove `<Header />` usage/import from:
  - `src/pages/Index.tsx`
  - `src/pages/AboutPage.tsx`
  - `src/pages/ContactPage.tsx`
  - `src/pages/GalleryPage.tsx`
- Footer stays exactly as-is in each page.

2) Stabilize logo space inside header
- In `src/components/sections/Header.tsx`, reserve fixed logo space so nav items don’t shift during image paint:
  - Add explicit `width`/`height` attributes on the `<img>`
  - Use fixed-width wrapper/class (desktop + mobile sizes) and `shrink-0`.

3) Make desktop width behavior fully stable
- In `src/index.css`, strengthen scrollbar reservation for desktop by updating:
  - `scrollbar-gutter: stable` → `scrollbar-gutter: stable both-edges`
- Add fallback for browsers with weaker support (always reserve vertical scrollbar space via CSS fallback).

Technical details
- Root cause is header remount + transient layout recalculation during route transitions.
- Persisting Header at app-layout level prevents logo/menu reinitialization.
- Explicit logo dimensions remove intrinsic-size reflow.
- Stable scrollbar gutter prevents horizontal viewport-width changes that nudge centered nav content.

Validation checklist
- On desktop, click all header menu items repeatedly: header row should not move left/right.
- Navigate `/`, `/about`, `/contact`, `/gallery`: logo should remain steady with no “refresh” flicker.
- Confirm mobile menu behavior remains unchanged.
