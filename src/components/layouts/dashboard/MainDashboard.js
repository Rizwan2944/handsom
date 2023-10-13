import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SideBarMain, MenuListBox, PreferenceBox } from "./style";
import LogoIcon from "../../../assets/images/mainLogo.svg";
import OpportunityIcon from "../../../assets/images/opportunity.svg";
import SongAiIcon from "../../../assets/images/songAi.svg";
import BeatsIcon from "../../../assets/images/beats.svg";
import SettingICon from "../../../assets/images/setting.svg";
import HelpIcon from "../../../assets/images/help.svg";
import LinkIcon from "../../../assets/images/link.svg";
import LogoutIcon from "../../../assets/images/logoout.svg";
import MainSmartLink from "../../../pages/smartLink/MainSmartLink";

const drawerWidth = 270;
const PrefMenu = [
  {
    id: 1,
    name: "Setting",
    icon: SettingICon,
  },
  {
    id: 2,
    name: "Help",
    icon: HelpIcon,
  },
  {
    id: 3,
    name: "Log Out",
    icon: LogoutIcon,
  },
];
const menuItem = [
  {
    id: 1,
    name: "Opportunities",
    icon: OpportunityIcon,
  },
  {
    id: 2,
    name: "Beat Inbox",
    icon: BeatsIcon,
  },
  {
    id: 3,
    name: "Smart Link",
    icon: LinkIcon,
  },
  {
    id: 4,
    name: "SongCompletion.AI",
    icon: SongAiIcon,
  },
  //
];

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <SideBarMain>
      <img src={LogoIcon} alt="logo" />
      <Typography variant="h5">Main Menu</Typography>
      <List>
        {menuItem.map((item, id) => (
          <ListItem key={id} disablePadding className="menu-list">
            <MenuListBox>
              <img src={item.icon} alt="menu-items" />
              <Typography variant="h4">{item.name}</Typography>
            </MenuListBox>
          </ListItem>
        ))}
      </List>
      <PreferenceBox>
        <Typography variant="h5">Preference</Typography>
        <List>
          {PrefMenu.map((item, id) => (
            <ListItem key={id} disablePadding className="menu-list">
              <MenuListBox>
                <img src={item.icon} alt="menu-items" />
                <Typography variant="h4">{item.name}</Typography>
              </MenuListBox>
            </ListItem>
          ))}
        </List>
      </PreferenceBox>
    </SideBarMain>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "#141515",
          // padding: "1.5rem 1.875rem 1.5rem 49.0625rem",
          height: "90px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },

          // ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: "90px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <MainSmartLink />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
