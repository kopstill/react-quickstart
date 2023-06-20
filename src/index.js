import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import QuickStart from "./quick_start/QuickStart";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QuickStart />
  </StrictMode>
);
