import React from "react";
import "./gallery-style.css";
import ProfileX from "./GalleryProfile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ProfileX
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        size="70"
        profession="physicist and chemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (element)"
      />
      <ProfileX
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        size="70"
        profession="geochemist"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
