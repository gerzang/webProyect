import { createStyles } from "../../interfaces/create_styles";

export const FooterStyles = createStyles({
  boxContainer: {
    backgroundColor: "#24292e",
    display: "flex",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    flexShrink: "0",
    position: "static",
    color: "#fff",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    justifyContent: "space-between"
  },
  grids: {
   padding: "1em"
  },
  box:{
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  },
  divider:{
    backgroundColor: "#fff",
    height:"1em"
  }
});