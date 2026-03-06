

## Split Food Menu into Individual Pages with Navigation Dropdown

### What changes

**1. Create a shared categories data file** (`src/data/foodCategories.ts`)
- Extract the categories array (slug, title, image, description, items) from `FoodMenuPage.tsx` into a shared module so both the nav, homepage cards, and individual pages can use it.

**2. Create 5 individual category pages** (`src/pages/food-menu/[slug].tsx` or a single dynamic page)
- Create one reusable page component `src/pages/FoodCategoryPage.tsx` that reads a URL param (e.g. `/food-menu/chinese-foods`) and renders the matching category with its image, description, and items list. Reuse the existing layout from `FoodMenuPage.tsx`.
- If the slug doesn't match, redirect to 404.

**3. Update routing** (`src/App.tsx`)
- Replace the single `/food-menu` route with `/food-menu/:slug`
- Import the new `FoodCategoryPage` component

**4. Add "Food Menu" dropdown to Header** (`src/components/sections/Header.tsx`)
- **Desktop**: Add a "Food Menu" item to the nav bar with a hover/click dropdown showing 5 submenu links (`/food-menu/chinese-foods`, etc.). Use a simple `relative/absolute` dropdown div (no need for Radix NavigationMenu to keep it consistent with existing header style).
- **Mobile**: In the mobile menu, add "Food Menu" as a collapsible/accordion item that expands to show the 5 submenu links.

**5. Update homepage FoodMenu cards** (`src/components/sections/FoodMenu.tsx`)
- Change "View Details" button navigation from `/food-menu#slug` to `/food-menu/slug`

**6. Remove old FoodMenuPage** (`src/pages/FoodMenuPage.tsx`)
- No longer needed since each category has its own page.

### File summary

| File | Action |
|------|--------|
| `src/data/foodCategories.ts` | Create - shared category data |
| `src/pages/FoodCategoryPage.tsx` | Create - individual category page |
| `src/components/sections/Header.tsx` | Edit - add Food Menu dropdown (desktop + mobile) |
| `src/components/sections/FoodMenu.tsx` | Edit - update navigate paths |
| `src/App.tsx` | Edit - replace `/food-menu` with `/food-menu/:slug` |
| `src/pages/FoodMenuPage.tsx` | Delete |

