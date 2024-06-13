import { Card, CardContent, Box, Typography, Grid } from '@mui/material';
import { whoIamStyles as styles } from "../WhoIam/styles";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    const email = "gerardogutierrezr94@gmail.com";
    const subject = "Contacting You";
    const body = "Hi there,\n\nI would like to get in touch with you regarding...";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const linkedInd = 'https://www.linkedin.com/in/gerarado-gz'
    const gitHub = 'https://github.com/gerzang'

    return (

        <Card sx={styles.whoIam}>
            <CardContent>
                <Box sx={styles.txtWhoIam}>
                    <Typography variant="h5" sx={styles.texts}>
                        Contact Me
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        Thank you for visiting my website! I appreciate your interest and would love to hear from you. Whether you have a question, a project idea, or just want to connect, please feel free to reach out.
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        You can contact me via email or phone, or connect with me on LinkedIn. I look forward to hearing from you!
                    </Typography>


                    <Grid container sx={styles.iconAndText} spacing={1} >
                        <Grid item>
                            <EmailIcon sx={styles.icon} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" sx={styles.textIcon}>
                                Email:&nbsp; <a href={mailtoLink} style={{ color: "rgb(255, 255, 255)", }}>{email}</a>
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid container sx={styles.iconAndText} spacing={1} >
                        <Grid item>
                            <LocalPhoneIcon sx={styles.icon} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" sx={styles.textIcon}>
                                Phone:&nbsp;  (+593) 979237695
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.iconAndText} spacing={1} >
                        <Grid item>
                            <LinkedInIcon sx={styles.icon} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" sx={styles.textIcon}>
                                LinkedIn:&nbsp; <a href={linkedInd} target='_blank' rel="noopener noreferrer" style={{ color: "rgb(255, 255, 255)", }}>linkedin.com/in/gerarado-gz</a>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={styles.iconAndText} spacing={1} >
                        <Grid item>
                            <GitHubIcon sx={styles.icon} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" sx={styles.textIcon}>
                                GitHub:&nbsp; <a href={gitHub} target='_blank' rel="noopener noreferrer" style={{ color: "rgb(255, 255, 255)", }}>github.com/gerzang</a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={styles.iconAndText} spacing={1} >
                        <Grid item>
                            <LocationOnIcon sx={styles.icon} />
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" sx={styles.textIcon}>
                                Location:&nbsp; Loja, Ecuador
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" textAlign={"justify"} marginTop={"10px"}>
                        Best regards,
                    </Typography>


                </Box>
            </CardContent>
        </Card>
    )
}

export default Contact
