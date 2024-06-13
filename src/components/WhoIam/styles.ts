import { createStyles } from "../../interfaces/create_styles";

export const whoIamStyles = createStyles({
    texts: {
        textAlign: "center",
        marginBottom: "0.75em"
    },
    textIcon: {
        display: "flex",
        alignItems: "center",
        "& img": {
            width: "17.5px",
            marginLeft: "5px"
        },
    },
    whoIam: {
        margin: "1em 80px",
        backgroundColor: "rgb(33, 43, 54)",
        color: "rgb(255, 255, 255)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        [`@media screen and (max-width: 600px)`]: {
            margin: "1em 10px",
        },
    },
    iconAndText: {
        display: "flex",
        alignItems: "center",
        margin: "8px 0"
    },
    icon: {
        fontSize: "0.65em",
        display: "flex",
        alignItems: "center",
    },
    txtWhoIam: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        [`@media screen and (max-width: 600px)`]: {
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
        },
    }

});
