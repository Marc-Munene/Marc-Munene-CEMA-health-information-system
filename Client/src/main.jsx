import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalLayout } from "./pages/protected/GlobalLayout";
import { Client } from "./pages/protected/Client";
import { Programs } from "./pages/protected/Programs";
import { Enrollment } from "./pages/protected/Enrollment";
import { Home } from "./pages/protected/Home";
import { ProtectedWrapper } from "./pages/protected/ProtectedWrapper";
import { SignUp } from "./pages/Auth/SignUp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route index element={<Home />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Navigate to="/" />} />

          <Route element={<ProtectedWrapper />}>
            {/* <Route element={<App />}> */}
            <Route path="clients" element={<Client />} />
            <Route path="programs" element={<Programs />} />
            <Route path="enrollment" element={<Enrollment />} />
            {/* </Route> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
