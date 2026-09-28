import { Route, Routes } from "react-router-dom";
import { SiteShell } from "@/components/SiteShell";
import { AboutPage } from "@/pages/AboutPage";
import { CmfPage } from "@/pages/CmfPage";
import { HomePage } from "@/pages/HomePage";
import { NewslettersPage } from "@/pages/NewslettersPage";
import { NewsletterPostPage } from "@/pages/NewsletterPostPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { SponsorsPage } from "@/pages/SponsorsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="cmf" element={<CmfPage />} />
        <Route path="newsletters" element={<NewslettersPage />} />
        <Route path="newsletters/:slug" element={<NewsletterPostPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sponsors" element={<SponsorsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
