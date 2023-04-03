
import React from "react";
import FtyAchievementsEditPage from "../components/sign-up/FtyAchievementsEditPage";
import homeStyles from "./Home.module.css";

const FtyAchievementsEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyAchievementsEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyAchievementsEdit;