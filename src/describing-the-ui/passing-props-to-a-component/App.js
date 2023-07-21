import React from "react";
import Avatar from "./Avatar";
import "./style.css";
import Gallery from "./Gallery";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <React.Fragment>
      <Card>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          size={undefined}
        />
        <Avatar
          person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
          size={100}
        />
        <Avatar
          person={{ name: "Lin lanying", imageId: "1bX5QH6" }}
          size={70}
        />
      </Card>
      <Gallery />
    </React.Fragment>
  );
}
