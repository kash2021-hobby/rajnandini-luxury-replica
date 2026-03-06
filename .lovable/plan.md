

## Enhance "Why Choose Us" with Horizontal Auto-Scroll

### Changes

**1. Update `src/components/sections/WhyChooseUs.tsx`**
- Add 5 new cards with appropriate icons (AirVent, Car, Shield, ChefHat, Bed from lucide-react) and stock webp images from Unsplash/Pexels URLs
- Replace the grid layout with a CSS infinite marquee-style horizontal scroll track (duplicated cards for seamless loop)
- Implement:
  - CSS `@keyframes scroll` animation moving cards left continuously (~30s duration)
  - `animation-play-state: paused` on hover of the container
  - Mouse drag scrolling via `onMouseDown/Move/Up` handlers with momentum
  - Touch swipe via native `overflow-x: auto` + `scroll-snap` as fallback
- Cards keep identical styling (border, rounded-2xl, shadow, hover effects, image height, padding, typography)

**2. Update `src/index.css`**
- Add `@keyframes scroll-left` keyframe for the infinite marquee animation

### Approach
Use a CSS marquee technique: render cards twice in a flex row, animate `translateX` from 0 to -50% infinitely. Overlay with `overflow: hidden`. Drag-to-scroll handled via JS mouse/touch events that temporarily disable the CSS animation and manually adjust `translateX`. On release, resume CSS animation from current position.

### Stock images
Use high-quality Unsplash URLs with `?w=400&q=80` for optimized loading, converted conceptually as webp (Unsplash auto-serves webp when supported).

