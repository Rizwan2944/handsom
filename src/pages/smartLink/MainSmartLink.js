import React from "react";
import {
  MainSmartLinkBox,
  SmartLinkSubMenuBox,
  SubMenuBox,
  SubMenuRightContent,
  ContentHeader,
  GridBox,
} from "./style";
import IntegratedIcon from "../../assets/images/integrated.svg";
import EditIcon from "../../assets/images/edit-outline.svg";
import InboxSettingIcon from "../../assets/images/inbox-setting.svg";
import { Grid, MenuItem, Typography } from "@mui/material";
import ShareButton from "../../components/share/ShareButton";
import SmartLinkCard from "../../components/cards/SmartLinkCard";
import CardImg from "../../assets/images/card-pic.svg";
import MusicIcon from "../../assets/images/beats.svg";

const SubMenu = [
  {
    id: 1,
    name: "Integrate",
    icon: IntegratedIcon,
  },
  {
    id: 2,
    name: "Customization",
    icon: EditIcon,
  },
  {
    id: 3,
    name: "Inbox Setting",
    icon: InboxSettingIcon,
  },
];
const CardData = [
  {
    id: 1,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Music Release Details",
    title: "KakaStar",
    name: "Atif Aslam",
    img: CardImg,
    releas_date: "12/10/2023",
  },
  {
    id: 2,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 3,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 4,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 5,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 6,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 7,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
  {
    id: 8,
    link: "rizwankhan/2944/?455.%4$842=de2",
    icon: MusicIcon,
    heading: "Another Release",
    title: "Another Title",
    name: "Another Musician",
    img: CardImg,
    releas_date: "12/15/2023",
  },
];
const MainSmartLink = () => {
  return (
    <MainSmartLinkBox>
      <SubMenuRightContent>
        <ContentHeader>
          <Typography variant="h2">Smart Link</Typography>
          <ShareButton />
        </ContentHeader>
        <SmartLinkSubMenuBox>
          {SubMenu.map((item) => (
            <SubMenuBox key={item.id}>
              <MenuItem className="sub-menu">
                <img src={item.icon} alt="submenu-icon" />
                <Typography variant="h5">{item.name}</Typography>
              </MenuItem>
            </SubMenuBox>
          ))}
        </SmartLinkSubMenuBox>
        <Typography variant="h4">Recent Integration</Typography>
        <GridBox>
          <Grid container spacing={2}>
            {CardData.map((item) => (
              <Grid item key={item.id} xl={4} lg={4} md={6} sm={12}>
                <SmartLinkCard data={item} />
              </Grid>
            ))}
          </Grid>
        </GridBox>
      </SubMenuRightContent>
    </MainSmartLinkBox>
  );
};

export default MainSmartLink;
