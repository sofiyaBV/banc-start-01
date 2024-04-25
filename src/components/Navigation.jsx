import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import s from "../style/Navigation.module.css";
import exchange from "../assets/icon/exchange_svg.svg";
import manaher from "../assets/icon/manager.png";
import product from "../assets/icon/product.png";
export default function Navigation() {
  return (
    <div className={s.nav_container}>
      <Header />
      <nav>
        <NavLink to="exchange-rate" className={s.nav_btn}>
          <span>
            <img src={exchange} alt="" />
          </span>
          Exchenge rate
        </NavLink>
        <NavLink to="product-rate" className={s.nav_btn}>
          <span>
            <img src={manaher} alt="" />
          </span>
          Product
        </NavLink>
        <NavLink to="customer-rate" className={s.nav_btn}>
          <span>
            <img src={product} alt="" />
          </span>
          Customer
        </NavLink>
      </nav>
      <Footer />
    </div>
  );
}
