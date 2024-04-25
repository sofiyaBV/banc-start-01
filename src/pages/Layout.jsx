import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import style from "../style/layout.module.css";

export default function Layout() {
  return (
    <div className={style.layout_contauner}>
      <Navigation />
      <div className={style.outlet_conteiner}>
        <Outlet />
      </div>
    </div>
  );
}
