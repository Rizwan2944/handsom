import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainSmartLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  background: "#141515",
  height: "100%",
  // color: theme.palette.secondary.light,
  color: "#fff",
}));

const SmartLinkSubMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "30%",
  paddingTop: "15px",
  alignItems: "center",
  flexShrink: 0,
  color: theme.palette.secondary.light,
}));

const SubMenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "40px",
  color: "#AFAFAF",
  fontFamily: theme.typography.fontFamily,
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  "& .sub-menu": {
    width: "100%",
    gap: "10px",
    "& h5": {
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontSize: theme.typography.h5,
    },
  },
}));

const SubMenuRightContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "40px",
  "& h4": {
    color: "#FFF",
    fontFamily: theme.typography.fontFamily,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginTop: "30px",
  },
}));

const ContentHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "auto",
  paddingBottom: "50px",
  borderBottom: "0.02px solid #414241",
  color: "#FFF",
  "& h2": {
    fontFamily: theme,
    fontSize: "1.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
}));

const GridBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "auto",
  padding: "40px 20px",
  gap: "5 0px",
}));

export {
  MainSmartLinkBox,
  SmartLinkSubMenuBox,
  SubMenuBox,
  SubMenuRightContent,
  ContentHeader,
  GridBox,
};
