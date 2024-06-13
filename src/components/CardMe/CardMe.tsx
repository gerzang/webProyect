import {
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

import { cardMeStyles as styles } from "./CardMe.styles";
import me from "../../assets/images/me.png";
import universe from "../../assets/images/OIG.jpg";
import React from "react";

interface Props {
    title?: string,
    subTitle?: string,
    legend?: string,
    onlyLegend?: boolean
}

const CardMe: React.FC<Props> = ({ legend, subTitle, title, onlyLegend }: Props) => {
    return (
        <Card sx={styles.boxMain}>
            <CardContent
                sx={styles.cardContent}
                style={{
                    background: `linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat, url(${universe})`,
                }}
            >
                <Grid container id="meS1" justifyContent={"center"}>
                    {!onlyLegend ? (<Grid item sm={8} md={8} sx={styles.firstSec}>
                        {title && <Typography variant="h4">{title}</Typography>}
                        {subTitle && <Typography variant="h3">{subTitle}</Typography>}
                        {legend && <Typography variant="h3">{legend}</Typography>}
                    </Grid>) : (<Grid item sm={8} md={8} sx={styles.onlyLegend}>

                        {legend && <Typography variant="h3">{legend}</Typography>}
                    </Grid>)}

                    <Grid item sm={4} md={4} sx={styles.meImg}>
                        <img src={me} alt="me" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardMe
