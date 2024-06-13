import { FC } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { FooterStyles as styles } from "./Footer.styles";

const Footer: FC = () => {
  return (
    <footer>
      <Grid container alignItems="center" sx={styles.boxContainer}>
        <Grid item xs={10} sx={styles.grids}>
          <Grid sx={styles.box}>
            <Typography variant="body2">GerZang (c) 2023</Typography>
            <Divider orientation="vertical" sx={styles.divider} />
            <Typography variant="body2">
              gerardogutierrezr94@gamil.com (c) 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={styles.grids}>
          <Typography variant="body2">Copyright (c) 2023</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
