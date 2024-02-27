import React from "react";
import img from "../img/bolt.png";
import s from "../style/header.module.css";
export default function Header() {
  return (
    <div className={s.general_container}>
      <img src={img} alt="" />
      <h1>Exchenge</h1>
    </div>
  );
}
