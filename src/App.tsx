import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowsePets from "./pages/BrowsePets";
import Adopt from "./pages/Adopt";
import SuccessStories from "./pages/SuccessStories";
import PetCare from "./pages/PetCare";
import GetInvolved from "./pages/GetInvolved";
import DonatePage from "./pages/DonatePage";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-pets" element={<BrowsePets />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/pet-care" element={<PetCare />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
