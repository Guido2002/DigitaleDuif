import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

// GitHub Pages SPA redirect handler
// When 404.html redirects here, navigate to the stored route
if (sessionStorage.getItem('redirect')) {
  const redirect = sessionStorage.getItem('redirect');
  sessionStorage.removeItem('redirect');
  if (redirect) {
    window.history.replaceState(null, '', redirect);
  }
}

createRoot(document.getElementById("root")!).render(
  <App />,
);