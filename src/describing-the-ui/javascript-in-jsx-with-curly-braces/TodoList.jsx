import React from "react";

// const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  date: new Date(),
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  const name = "Gregorio Y. Zara";
  return (
    <div>
      <h3>{name}'s To Do List</h3>
      <h3>
        {person.name}'s To Do List for {formatDate(person.date)}
      </h3>
      <ul style={person.theme}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
