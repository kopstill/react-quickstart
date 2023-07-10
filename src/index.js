import React from "react";
import { createRoot } from "react-dom/client";
// import QuickStart from "./quick-start/QuickStart";
// import Gallery from "./describing-the-ui/first-component/Gallery";
import { Gallery } from "./describing-the-ui/importing-and-exporting-components/Gallery.js";
import { Profile } from "./describing-the-ui/importing-and-exporting-components/Profile.js";

const root = createRoot(document.getElementById("root"));
// root.render(<QuickStart />);
root.render(
  <div>
    <Gallery />
    <Gallery />
    <Gallery />
    <hr />
    <Profile />
    <Profile />
    <Profile />
  </div>
);
