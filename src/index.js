import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Privacy from "./pages/Privacy";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TermsConditions from "./pages/TermsConditions";
import Faq from "./pages/Faq";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <ScrollToTop />
          <App />
        </>
      }
    >
      <Route path="" element={<Home />} />
      <Route path="sign-in" element={<Home />} />
      <Route path="register" element={<Home />} />
      <Route path="about-us" element={<AboutPage />} />
      <Route path="FAQ" element={<Faq />} />
      <Route path="privacy-policy" element={<Privacy />} />
      <Route path="terms-conditions" element={<TermsConditions />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
