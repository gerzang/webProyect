import React, { FC } from "react";
import { MainComponent } from "../../components/Main/MainComponent";
import { Body } from "../../components/Body/Body";
import Skills from "../../components/Skills/Skills";

const SkillsContainer: FC = () => {
  return (
    <MainComponent  >
      <Body legend={"Skills"} onlyLegend={true}>
        <Skills />
      </Body>
    </MainComponent>
  );
};

export default SkillsContainer;
