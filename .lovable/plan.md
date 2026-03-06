

## Fix Lightbox Centering + Build Error

### Issues Found

1. **Build error**: `src/pages/Index.tsx` imports `Stats` component that doesn't exist — line 8. Must remove the import (and any usage, though it's not rendered).

2. **Lightbox centering**: The current lightbox code already uses `flex items-center justify-center` on the overlay and the inner div. The issue is likely that the inner `div` with `w-full h-full` takes the full viewport but the image container competes with absolute-positioned nav buttons. The `px-4` padding is minimal but the structure should be fine. Let me check if there's something else causing the off-center behavior — possibly the caption pushes the image up since `flex-col` with caption means the image+caption group is centered, not the image alone.

### Plan

**1. Fix build error in `src/pages/Index.tsx`**
- Remove the `import Stats` line (line 8) since the component doesn't exist.

**2. Improve lightbox centering in `src/components/ImageLightbox.tsx`**
- The image container uses `flex-col items-center justify-center` which is correct, but the caption below the image shifts the visual center upward. Fix by positioning the caption absolutely or using a structure where only the image determines the center point.
- Increase mobile padding to avoid nav button overlap: use `px-16 md:px-20` to give space for the left/right nav buttons.
- Make close button more prominent with a slightly larger size and higher contrast background (`bg-white/20` with border).
- Ensure the close button is visible on mobile by adjusting position to `top-4 right-4` on small screens via responsive classes.

### Changes

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Remove `Stats` import (line 8) |
| `src/components/ImageLightbox.tsx` | Fix centering: use absolute-positioned caption so image stays perfectly centered; add responsive padding to avoid nav overlap on mobile |

