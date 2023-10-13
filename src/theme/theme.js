import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: "1.875rem",
    h3: "1.5rem",
    h4: "1.15rem",
    h5: "1rem",
    h6: "0.75rem",
  },
  palette: {
    primary: {
      main: "#141515",
      light: "#0A0B0A",
      dark: "#0E1210",
      darker: "#000000",
    },
    secondary: {
      main: "#2EBB55",
      light: "#fff",
      dark: "#AFAFAF",
    },
  },
});

export default theme;
