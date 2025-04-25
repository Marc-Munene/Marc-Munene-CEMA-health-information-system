import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "./pages/protected/GlobalLayout";
import { Client } from "./pages/protected/Client";
import { Programs } from "./pages/protected/Programs";
import { Enrollment } from "./pages/protected/Enrollment";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />} />
          <Route path="clients" element={<Client />} />
          <Route path="programs" element={<Programs />} />
          <Route path="enrollment" element={<Enrollment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
