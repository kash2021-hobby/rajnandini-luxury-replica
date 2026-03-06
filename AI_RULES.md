# AI Rules & Guidelines

## Tech Stack Overview

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Query for server state, React Context for client state
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Lovable.dev platform

## Component Architecture Rules

### UI Component Library Usage
- **Always use shadcn/ui components** when available for standard UI elements (buttons, cards, dialogs, etc.)
- **Import directly** from `@/components/ui/[component-name]`
- **Do not modify** shadcn/ui components in place - create custom wrappers if needed
- **Use Radix UI primitives** directly only when no shadcn/ui equivalent exists

### Custom Component Development
- **Create new files** for all custom components in `src/components/`
- **Use TypeScript** with proper typing for props and state
- **Follow existing patterns** in the codebase for component structure
- **Implement responsive design** using Tailwind's responsive prefixes

### Styling Guidelines
- **Use Tailwind CSS exclusively** for styling - no vanilla CSS files
- **Leverage existing design tokens** defined in `tailwind.config.ts` and `src/index.css`
- **Use semantic class names** with `cn()` utility for conditional styling
- **Follow the established typography system** with `font-heading` and `font-body` classes

### Data Fetching & State Management
- **Use React Query** for all server data fetching and caching
- **Create custom hooks** for complex state logic in `src/hooks/`
- **Use React Context** for global client state that doesn't require server synchronization
- **Implement proper loading and error states** for all data-dependent components

### Routing & Navigation
- **Define all routes** in `src/App.tsx` using React Router v6
- **Use programmatic navigation** with `useNavigate()` hook
- **Implement scroll restoration** with existing `ScrollToTop` component
- **Create page components** in `src/pages/` directory

### Form Handling
- **Use React Hook Form** for all form implementations
- **Implement Zod validation** for form schemas
- **Follow existing patterns** in contact forms for consistency
- **Handle form submission** with proper loading states and user feedback

### Icons & Assets
- **Use Lucide React icons** exclusively for all iconography
- **Import icons directly** from `lucide-react` package
- **Place static assets** in `src/assets/` directory
- **Optimize images** before adding to the project

### Responsiveness & Accessibility
- **Mobile-first approach** using Tailwind's responsive utilities
- **Implement proper semantic HTML** for all components
- **Ensure keyboard navigation** works for interactive elements
- **Use ARIA attributes** when needed for custom components

### Performance Optimization
- **Implement lazy loading** for images with `loading="lazy"`
- **Code split components** when appropriate using dynamic imports
- **Use React.memo()** for expensive components
- **Optimize re-renders** with proper dependency arrays in hooks

### Testing
- **Write unit tests** for utility functions and custom hooks
- **Use React Testing Library** for component testing
- **Implement integration tests** for critical user flows
- **Follow existing test patterns** in `src/test/` directory

## Prohibited Practices

- **No direct DOM manipulation** - use React's declarative approach
- **No class components** - use functional components with hooks
- **No inline styles** - use Tailwind classes exclusively
- **No external UI libraries** besides shadcn/ui and Radix UI
- **No hardcoded values** - use design tokens from theme
- **No untyped code** - TypeScript required for all components