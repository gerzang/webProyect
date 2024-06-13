import {createStyles} from '../../interfaces/create_styles';

export const MainStyles = createStyles({
    main:{
        display: "flex",
        flexDirection: "column",
        height:" 100vh",
    },
    contenido: {
        flexGrow: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }
      
})