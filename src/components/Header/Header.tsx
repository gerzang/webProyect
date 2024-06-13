import React, { FC } from "react";
import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
import { HeaderStyles as styles } from "./Header.styles";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="static" sx={styles.boxContainer}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3} md={3}>
            <Link
            sx={styles.link}
              onClick={() => {
                navigate('/');
              }}
            >
              <Typography variant="h6">Home</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Link
            sx={styles.link}
              onClick={() => {
                navigate('/experience');
              }}
            >
              <Typography variant="h6">Experience</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Link
            sx={styles.link}
              onClick={() => {
                navigate('/skills');
              }}
            >
              <Typography variant="h6">Skils</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <Link
            sx={styles.link}
              onClick={() => {
                navigate('/contact');
              }}
            >
              <Typography variant="h6">Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
