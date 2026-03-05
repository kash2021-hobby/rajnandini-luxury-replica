

## Fullscreen Lightbox for Gallery

### What to build
Add a fullscreen lightbox viewer to both the homepage Gallery section and the Gallery page. Clicking any image opens it in a dark overlay with previous/next navigation and a close button.

### Implementation

**1. Create a reusable `ImageLightbox` component** (`src/components/ImageLightbox.tsx`)
- Uses Radix Dialog for accessible overlay behavior
- Fullscreen dark backdrop (`bg-black/95`)
- Displays the selected image centered and scaled to fit (`object-contain max-h-[90vh]`)
- Left/right arrow buttons (ChevronLeft, ChevronRight from lucide) to navigate between images
- Close button (X icon) top-right
- Keyboard support comes free from Radix Dialog
- Caption text below the image

**2. Update `src/components/sections/Gallery.tsx`**
- Add `useState` for selected image index (null = closed)
- Wrap each image in a clickable `cursor-pointer` div that sets the index
- Render `<ImageLightbox>` at the bottom, passing images array, selected index, and onClose/onChange handlers

**3. Update `src/pages/GalleryPage.tsx`**
- Same pattern: add state, clickable images, and render `<ImageLightbox>`

### Component API
```tsx
<ImageLightbox
  images={images}          // { src, alt }[]
  selectedIndex={number | null}
  onClose={() => void}
  onNext={() => void}
  onPrev={() => void}
/>
```

