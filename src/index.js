import React from "react";
import { createRoot } from "react-dom/client";
// import QuickStart from "./quick-start/QuickStart";
import FirstComponent from "./describing-the-ui/FirstComponent";

const root = createRoot(document.getElementById("root"));
// root.render(<QuickStart />);
root.render(<FirstComponent />);
