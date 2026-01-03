import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Suspense, lazy } from "react";
import { CategoryProvider } from "@/context/CategoryContext";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CategoryProvider>
        <Sonner /> {/* This is for the sonner toast library */}
        <BrowserRouter>
          <Layout>
            <Suspense
              fallback={
                <div className="flex min-h-screen items-center justify-center bg-background px-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-3 w-3 rounded-full bg-muted animate-pulse" aria-hidden="true" />
                    <span className="text-sm">Pagina laden…</span>
                  </div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projecten" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </CategoryProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;