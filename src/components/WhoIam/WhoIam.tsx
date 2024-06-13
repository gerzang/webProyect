import { Card, CardContent, Box, Typography, Link } from '@mui/material';
import reactLogo from "../../assets/svg/reactIcon.svg";
import angularLogo from "../../assets/svg/angularIcon.svg";
import vueLogo from "../../assets/svg/vueIcon.svg";
import pythonIcon from "../../assets/svg/pythonIcon.svg";
import nodejsIcon from "../../assets/svg/nodejsIcon.svg";
import dynamodbIcon from "../../assets/svg/dynamodbIcon.svg";
import cloudwatchIcon from "../../assets/svg/cloudwatchIcon.svg";
import s3Icon from "../../assets/svg/s3Icon.svg";
import { useNavigate } from "react-router-dom";
import { whoIamStyles as styles } from "./styles";

const WhoIam = () => {
    let navigate = useNavigate();
    const tab = <>&nbsp;</>;
    return (
        <Card sx={styles.whoIam}>
            <CardContent>
                <Box sx={styles.txtWhoIam}>
                    <Typography variant="h4" sx={styles.texts}>
                        Who I am ?
                    </Typography>
                    <Typography variant="h5" sx={styles.texts}>
                        Keep calm and let's read my bio.
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        I am an Ecuadorian full-stack developer with experience working as
                        a web developer and mobile application developer.
                    </Typography>

                    <Typography variant="body1" textAlign={"justify"}>
                        I am passionate about creating innovative web solutions. I have a
                        strong foundation in both front-end and back-end technologies, and
                        throughout my career, I have had the opportunity to work on
                        diverse projects. This includes building responsive user
                        interfaces using cutting-edge JavaScript frameworks like:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                ReactJS <img src={reactLogo} alt="reactLogo" />
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                AngularJS <img src={angularLogo} alt="angularLogo" />
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                VueJS <img src={vueLogo} alt="vueLogo" />
                            </Typography>
                        </li>
                    </ul>

                    <Typography variant="body1" textAlign={"justify"}>
                        As designing robust server-side solutions with:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                NodeJS <img src={nodejsIcon} alt="nodejsIcon" />
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                I also have some experience with Python{" "}
                                <img src={pythonIcon} alt="pythonIcon" />
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant="body1" textAlign={"justify"}>
                        I have worked with AWS technologies such as:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                DynamoDB <img src={dynamodbIcon} alt="dynamodbIcon" />
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                S3 buckets <img src={s3Icon} alt="s3Icon" />
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body1" sx={styles.textIcon}>
                                CloudWatch
                                <img src={cloudwatchIcon} alt="cloudwatchIcon" />
                            </Typography>
                        </li>
                    </ul>
                    <Typography variant="body1" textAlign={"justify"} sx={styles.textIcon}>
                        If you want know about my skils click {tab}
                        <Link
                            onClick={() => {
                                navigate("/experience");
                            }}
                        >
                            <Typography variant="h6">here</Typography>
                        </Link>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default WhoIam
