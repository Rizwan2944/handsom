import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SideBarMain = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingTop: "30px",
  paddingLeft: "15px",
  gap: "1rem",
  flexShrink: 0,
  background: theme.palette.primary.main,
  "& h5": {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h5,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginTop: "50px",
    color: "#E3E3E3",
  },
}));
const MenuListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "3rem",
  width: "15rem",
  color: theme.palette.secondary.dark,
  gap: "1rem",
  borderRadius: "0.3125rem",
  background: theme.palette.primary.darker,
  cursor: "pointer",
  margin: "5px 0px",
  paddingLeft: "15px",
  "& h4": {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h4,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));
const PreferenceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& h4": {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h4,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
}));

export { SideBarMain, MenuListBox, PreferenceBox };
