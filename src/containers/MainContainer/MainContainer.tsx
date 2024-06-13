import React, { FC } from "react";
import { MainComponent } from "../../components/Main/MainComponent";
import { Body } from "../../components/Body/Body";
import WhoIam from "../../components/WhoIam/WhoIam";


const MainContainer: FC = () => {
  return (
    <MainComponent  >
      <Body title={"Hi, I am"} subTitle={"Gerardo Gutiérrez"} legend={"Full Stack Developer"} >
        <WhoIam />
      </Body>
    </MainComponent>
  );
};

export default MainContainer;
