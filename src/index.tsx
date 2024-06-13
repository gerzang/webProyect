import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MainContainer from "./containers/MainContainer/MainContainer";
import "./index.css"
import ExperienceContainer from "./containers/ExperienceContainer/ExperienceContainer";
import SkillsContainer from "./containers/SkilsContainer/SkilsContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <style>
      {
        "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap');"
      }
    </style>
    <style>
      {
        "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');"
      }
    </style>
    <BrowserRouter basename="/">
    <Header />
      <Routes>
        <Route path={"/"} element={<MainContainer />} />
      </Routes>
      <Routes>
        <Route path={"/experience"} element={<ExperienceContainer />} />
      </Routes>
      <Routes>
        <Route path={"/skills"} element={<SkillsContainer />} />
      </Routes>
      <Routes>
        <Route path={"/contact"} element={<ContactContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
