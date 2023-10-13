import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderMain = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  color: "#fff",
  width: "100%",
  padding: "12px 0px",
  paddingBottom: "0px",
  "& .avatar_main": {
    borderRadius: "5px",
    background: "#414241",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    gap: "10px",
    color: "#fff",
    justifyContent: "start",
    width: "12%",
    "& h6": {
      marginTop: "0px",
      marginBottom: "0px",
      color: "#FFF",
      fontFamily: theme.typography.fontFamily,
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    "& p": {
      marginTop: "0px",
      marginBottom: "0px",
      fontFamily: theme.typography.fontFamily,
      color: "#AFAFAF",
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "normal",
    },
  },
}));

export { HeaderMain };
