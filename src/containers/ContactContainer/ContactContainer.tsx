import React, { FC } from "react";
import { MainComponent } from "../../components/Main/MainComponent";
import { Body } from "../../components/Body/Body";
import Contact from "../../components/Contact/Contact";

const ContactContainer: FC = () => {
  return (
    <MainComponent  >
      <Body onlyLegend={true} legend={"Contact"}>
        <Contact />
      </Body>
    </MainComponent>
  );
};

export default ContactContainer;
