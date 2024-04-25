import React from "react";
import logo from "../assets/logo_01.png";
import s from "../style/header.module.css";
export default function Header() {
  return (
    <div>
      <img className={s.logo} src={logo} alt="" />
    </div>
  );
}
