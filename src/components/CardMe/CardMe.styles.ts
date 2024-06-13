import { createStyles } from "../../interfaces/create_styles";

export const cardMeStyles = createStyles({

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
    backgroundImage: "",
    backgroundPositionX: "",
    backgroundPositionY: "",
    backgroundSize: "",
    backgroundRepeatX: "",
    backgroundRepeatY: "",
    backgroundAttachment: "",
    backgroundOrigin: "",
    backgroundClip: "",
    backgroundColor: "",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  meImg: {
    display: "flex",
    justifyContent: "flex-end",
    "& img": {
      width: "80%",
      height: "100%",
    },
    [`@media screen and (max-width: 600px)`]: {
      justifyContent: "center",
      "& img": {
        width: "40%",
        height: "100%",
      },
    },
  },
  firstSec: {
    padding: "1em",
    textAlign: "center",
  },
  onlyLegend: {
    padding: "1em",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  }
});
