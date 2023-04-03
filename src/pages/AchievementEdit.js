
import React from "react";
import AchievementEditPage from "../components/sign-up/AchievementEditPage";
import homeStyles from "./Home.module.css";
import { useLocation } from "react-router-dom";

const   AchievementEdit = () => {

    return (
        <body className={homeStyles.rooted}>
            <section className={homeStyles["home-container"]} height="50%">
                <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
                    <header className={homeStyles["content-header"]}>

                    </header>
                    <div className={homeStyles["outlet-container"]}>
                        <AchievementEditPage />
                    </div>
                </div>

            </section>
        </body>
    );
};

export default AchievementEdit;