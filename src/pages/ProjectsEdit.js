import React from "react";
import ProjectsEditPage from "../components/sign-up/ProjectsEditPage";
import homeStyles from "./Home.module.css";

const ProjectsEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <ProjectsEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default ProjectsEdit;