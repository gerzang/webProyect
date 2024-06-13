import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MainStyles as styles } from "./MainCointainer.styles";
import { Box } from "@mui/material";
import { Body } from "../Body/Body";
import { MainComponentProps } from "./MainComponent.interface";
import WhoIam from "../WhoIam/WhoIam";

export const MainComponent: React.FC<PropsWithChildren> = ({children}:PropsWithChildren) => {
  return (
    <Box sx={styles.main}>
     
      {children}
      <Footer />
    </Box>
  );
};
