

## Fix: Desktop Header Menu Shifting on Click

**Problem**: When clicking desktop nav links, the header shifts horizontally. This happens because navigating between pages causes the scrollbar to appear/disappear, changing the effective viewport width and shifting the fixed header.

**Solution**: Add `scrollbar-gutter: stable` to the `html` element in `src/index.css`. This reserves space for the scrollbar at all times, preventing layout shifts when content changes.

### Changes

**`src/index.css`** — Add one CSS rule inside the existing `@layer base` block:

```css
html {
  scrollbar-gutter: stable;
}
```

This is a single-line fix that prevents the entire page (including the fixed header) from shifting when navigating between pages with different content heights.

