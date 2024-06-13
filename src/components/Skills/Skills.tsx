import { Card, CardContent, Box, Typography, Grid, } from '@mui/material';
import { whoIamStyles as styles } from "../WhoIam/styles";
import { createStyles } from '../../interfaces/create_styles';



const Skills = () => {
    const skillsStyles = createStyles({
        gridContainer: {
            margin: "16px 8px "
        },

        ul: {
            marginTop: 0
        }
    });
    return (
        <Card sx={styles.whoIam}>
            <CardContent>
                <Box sx={styles.txtWhoIam}>
                    <Typography variant="h5" sx={styles.texts}>
                        Key highlights of my qualifications include
                    </Typography>


                    <Grid container sx={skillsStyles.gridContainer} spacing={1}>

                        <Grid item xs={12}>
                            <ul style={{ margin: "0" }}>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Proficiency in React, Redux, JavaScript, HTML, and CSS.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Experience with RESTful APIs and modern front-end build pipelines and tools.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Strong problem-solving skills and a passion for writing clean, efficient, and maintainable code.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Ability to work collaboratively in a team environment as well as independently
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Skills
