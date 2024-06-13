import React, { PropsWithChildren } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { BodyStyles as styles } from "./Body.styles";
import logo from "../../assets/images/LogoDev.png";
import CardMe from "../CardMe/CardMe";

interface Props {
  title?: string,
  subTitle?: string,
  legend?: string
  onlyLegend?: boolean;
}


export const Body: React.FC<PropsWithChildren<Props>> = ({ children, title, subTitle, onlyLegend, legend }) => {

  return (
    <Container sx={styles.boxContainer} >
      <Box sx={styles.boxLogo}>
        <img src={logo} alt="Logo" />
      </Box>
      <Grid container id="me" justifyContent={"center"}>
        <Grid item sm={8} md={7}>
          <CardMe legend={legend} subTitle={subTitle} title={title} onlyLegend={onlyLegend} />
        </Grid>
      </Grid>
      {children}
    </Container>
  );
};
