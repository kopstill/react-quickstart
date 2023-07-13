import React from "react";
import TodoList from "./TodoList";

const baseUrl = "https://i.imgur.com/";

const person = {
  class: "avatar",
  avatar: "https://i.imgur.com/7vQD0fPs.jpg",
  description: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "l",
};

export default function Avatar() {
  // const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  // const description = "Gregorio Y. Zara";
  return (
    <div>
      <img
        className={person.class}
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.description}
      />
      <TodoList />
    </div>
  );
}
