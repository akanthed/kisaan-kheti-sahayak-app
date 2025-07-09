
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DiagnoseCropScreen from "./screens/DiagnoseCropScreen";
import CropResultScreen from "./screens/CropResultScreen";
import MarketRatesScreen from "./screens/MarketRatesScreen";
import GovtSchemeScreen from "./screens/GovtSchemeScreen";
import ExpertConnectScreen from "./screens/ExpertConnectScreen";
import CommunityHubScreen from "./screens/CommunityHubScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/diagnose-crop" element={<DiagnoseCropScreen />} />
          <Route path="/crop-result" element={<CropResultScreen />} />
          <Route path="/market-rates" element={<MarketRatesScreen />} />
          <Route path="/govt-schemes" element={<GovtSchemeScreen />} />
          <Route path="/expert-connect" element={<ExpertConnectScreen />} />
          <Route path="/community-hub" element={<CommunityHubScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
