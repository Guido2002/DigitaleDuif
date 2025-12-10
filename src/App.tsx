import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner /> {/* This is for the sonner toast library */}
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-foreground">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/diensten" element={<ServicesPage />} />
              <Route path="/projecten" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;