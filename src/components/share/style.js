import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ShareBtn = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "0.65625rem 1.875rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.3125rem",
  background: "#2EBB55",
  color: "#FFF",
  fontFamily: theme.typography.fontFamily,
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  cursor: "pointer",
}));
export { ShareBtn };
