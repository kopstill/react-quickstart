import React from "react";
import { getImageUrlById } from "./utils";

export default function Profile({
  name,
  imageId,
  size,
  profession,
  awards,
  discovered,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrlById(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: 4 </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
