
import React from "react";
import FtyAwardsEditPage from "../components/sign-up/FtyAwardsEditPage";
import homeStyles from "./Home.module.css";

const FtyAwardsEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyAwardsEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyAwardsEdit;