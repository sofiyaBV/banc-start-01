import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import s from "../style/Navigation.module.css";
export default function Navigation() {
  return (
    <div className={s.nav_container}>
      <Header />
      <nav>
        <NavLink to="exchange-rate" className={s.nav_btn}>
          Exchenge rate
        </NavLink>
        <NavLink to="product-rate" className={s.nav_btn}>
          Product
        </NavLink>
        <NavLink to="customer-rate" className={s.nav_btn}>
          Customer
        </NavLink>
      </nav>
      <Footer />
    </div>
  );
}
