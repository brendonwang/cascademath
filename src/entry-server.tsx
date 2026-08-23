import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "@/App";

export {
  absoluteUrl,
  createStructuredData,
  notFoundSeo,
  normalizeSiteUrl,
  seoPages,
  siteSeo,
} from "@/content/seo";

export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
