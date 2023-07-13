import React from "react";
import { createRoot } from "react-dom/client";
// import QuickStart from "./quick-start/QuickStart";
// import Gallery from "./describing-the-ui/first-component/Gallery";
// import { Gallery } from "./describing-the-ui/importing-and-exporting-components/Gallery.js";
// import { Profile } from "./describing-the-ui/importing-and-exporting-components/Profile.js";
// import TodoList from "./describing-the-ui/writing-markup-with-jsx/TodoList.js";
// import Bio from "./describing-the-ui/writing-markup-with-jsx/Bio.js";
import Avatar from "./describing-the-ui/javascript-in-jsx-with-curly-braces/Avatar";

const root = createRoot(document.getElementById("root"));
// root.render(<QuickStart />);
root.render(
  // <div>
  //   <Gallery />
  //   <Gallery />
  //   <Gallery />
  //   <hr />
  //   <Profile />
  //   <Profile />
  //   <Profile />
  // </div>
  // <div>
  //   <TodoList />
  //   <Bio />
  // </div>
  <Avatar></Avatar>
);
