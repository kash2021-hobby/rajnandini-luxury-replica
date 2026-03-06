import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FoodSelectionProvider } from "@/contexts/FoodSelectionContext";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/sections/Header";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import FoodCategoryPage from "./pages/FoodCategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SiteLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <FoodSelectionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/food-menu/:slug" element={<FoodCategoryPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FoodSelectionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
