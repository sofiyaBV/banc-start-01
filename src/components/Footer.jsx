import React from "react";
import s from "../style/footer.module.css";
import arrow from "../img/right-arrow-angle.png";
import profile_photo from "../img/Profil_photo.jpg";
export default function Footer() {
  return (
    <div className={s.general_container}>
      <img
        className={s.profil_photo}
        src={profile_photo}
        alt="img you profile"
      />
      <div className={s.info_user_container}>
        <h3>Sofiya</h3>
        <p>info</p>
      </div>
      <img className={s.arrow_photo} src={arrow} alt="arrow" />
    </div>
  );
}
