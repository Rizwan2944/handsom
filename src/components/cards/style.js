import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "0.625rem",
  background: "#0A0B0A",
  color: "#fff",
  "& .image_container": {
    height: "28vh",
    marginBottom: "12px",
    background: "",
    "& .box_image": {
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .content": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",

    "& p": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  "& .link_titile": { display: "flex", alignItems: "center", gap: "10px" },
}));
export { MainCard };
