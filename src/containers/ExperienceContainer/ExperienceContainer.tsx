import React, { FC } from "react";
import { MainComponent } from "../../components/Main/MainComponent";
import { Body } from "../../components/Body/Body";
import Experience from "../../components/Experience/Experience";

const ExperienceContainer: FC = () => {
  return (
    <MainComponent  >
      <Body legend={"Experience"} onlyLegend={true}>
        <Experience />
      </Body>
    </MainComponent>
  );
};

export default ExperienceContainer;
