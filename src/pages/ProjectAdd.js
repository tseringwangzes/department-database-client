
import React from "react";
import ProjectAddPage from "../components/sign-up/ProjectAddPage";
import homeStyles from "./Home.module.css";

const ProjectAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <ProjectAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default ProjectAdd;