import React from "react";
import FtyAchievementAddPage from "../components/sign-up/FtyAchievementAddPage";
import homeStyles from "./Home.module.css";

const FtyAchievementAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyAchievementAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyAchievementAdd;