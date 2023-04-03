import React from "react";
import SignUp from "../components/sign-up/SignUp";
import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <SignUp />
        </div>
      </div>

      </section>
      </body>
  );
};

export default Home;