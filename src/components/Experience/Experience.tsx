import { Card, CardContent, Box, Typography, Grid } from '@mui/material';
import { whoIamStyles as styles } from "../WhoIam/styles";
import { experienceStyles } from "./Experience.styles"
const Experience = () => {
    return (
        <Card sx={styles.whoIam}>
            <CardContent>
                <Box sx={styles.txtWhoIam}>
                    <Typography variant="h5" sx={styles.texts}>
                        Over 5 Years of experience
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        My professional journey as a software developer has provided me with a broad skill set and a deep understanding of modern web development.
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        I have diligently refined my expertise in JavaScript, Python, AWS and related technologies.
                    </Typography>
                    <Typography variant="body1" textAlign={"justify"}>
                        In my previous role as a full stack developer, I successfully spearheaded the development of several key projects.
                    </Typography>

                    <Grid container sx={experienceStyles.gridContainer} spacing={1}>
                        <Grid item xs={4} sx={experienceStyles.textL}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"left"}>
                                Carconnect
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textC}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"center"}>
                                Front End Developer
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textR}>
                            <Typography variant="body1" sx={styles.textIcon} >
                                2023/10 – 2024/01
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <ul style={{ margin: "0" }}>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Lead CRM development for clients and brands using NextJS.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Participation in the architecture and development of components.
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid container sx={experienceStyles.gridContainer} spacing={1}>
                        <Grid item xs={4} sx={experienceStyles.textL}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"left"}>
                                Kushki
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textC}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"center"}>
                                Full Stack Developer
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textR}>
                            <Typography variant="body1" sx={styles.textIcon} >
                                2021/04 – 2023/07
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <ul style={{ margin: "0" }}>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Development and maintenance of Micro Frontends and Single Page Applications (SPA) using Redux Toolkit and React
                                        Testing Library.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Implementation of a new component library through React Storybook. Contributed to the successful migration to
                                        Redux Toolkit and React Testing Library.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Design and development of microservices with NodeJS, RJXS and Golang. Implementation of REST APIs, leveraging
                                        Serverless architecture in AWS for microservices in the cloud.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Creation of AWS Lambda functions integrating services such as DynamoDB, AWS S3, SQS, Step Functions and
                                        CloudFormation. Design and execution of specific architectures for business flows.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Promotion of best practices in ReactJS, design and layout standards and customization of Material UI styles through
                                        workshops.
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>

                    <Grid container sx={experienceStyles.gridContainer} spacing={1}>
                        <Grid item xs={4} sx={experienceStyles.textL}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"left"}>
                                Tipti
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textC}>
                            <Typography variant="body1" sx={styles.textIcon} textAlign={"center"}>
                                Front End Developer
                            </Typography>

                        </Grid>
                        <Grid item xs={4} sx={experienceStyles.textR}>
                            <Typography variant="body1" sx={styles.textIcon} >
                                2018/04 – 2021/04
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <ul style={{ margin: "0" }}>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Creation and maintenance of e-commerce websites using AngularJs and e-commerce mobile applications using IONIC4,
                                        IONIC6 and CSS, along with integration of plugins for card and product scanning via REST API.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Development of the new version of the e-commerce website with VueJs and SASS, development of new mobile
                                        applications for customers and employees of the business using Flutter
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Participation in the architecture and development of new mobile applications.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={styles.textIcon}>
                                        Presentation of a talk about Frontend technologies in the event "Tipti CON 2020".
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

export default Experience
