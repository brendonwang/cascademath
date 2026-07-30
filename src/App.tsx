import { Navigate, Route, Routes } from "react-router-dom";
import { SiteShell } from "@/components/SiteShell";
import { AboutPage } from "@/pages/AboutPage";
import { CmfPage } from "@/pages/CmfPage";
import { HomePage } from "@/pages/HomePage";
import { SponsorsPage } from "@/pages/SponsorsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="cmf" element={<CmfPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sponsors" element={<SponsorsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
