import { createStyles } from "../../interfaces/create_styles";

export const BodyStyles = createStyles({
  boxContainer: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "24px",
    backgroundColor: "rgb(22, 28, 36)",
    flexDirection: "column",
    maxWidth: "100% !important",
  },
  boxLogo: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    "& img": {
      width: "80px",
      height: "80px",
    },
    [`@media screen and (max-width: 600px)`]: {
      justifyContent: "center",
      "& img": {
       marginBottom: "0.75em",
      },
  },
  },
  boxMain: {
    margin: "0",
    display: "flex",
    flexDirection: " column",
    background:
      "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",
    borderRadius: "16px",
    position: "relative",
    color: "#004B50",
  },
  cardContent: {
    padding: "0 !important",
    height: "100%",
    color: "rgb(255, 255, 255)",
    backgroundImage:"",
    backgroundPositionX:"",
    backgroundPositionY:"",
    backgroundSize:"",
    backgroundRepeatX:"",
    backgroundRepeatY: "",
    backgroundAttachment:"",
    backgroundOrigin:"",
    backgroundClip:"",
    backgroundColor: "",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  meImg: {
    display:"flex",
    justifyContent:"flex-end",
    "& img": {
      width: "80%",
      height: "100%",
    },
  },
  whoIam: {
    // margin: "1em 80px",
    backgroundColor: "rgb(33, 43, 54)",
    color: "rgb(255, 255, 255)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",    
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column"
  },
  firstSec: {
    padding: "1em",
    textAlign: "center"
  },
  texts: {
    textAlign:"center",
    marginBottom: "0.75em"
  },
  textIcon:{
    display:"flex",
    alignItems: "center",
        "& img": {
        width: "17.5px",
        marginLeft: "5px"
      },
  }
});
