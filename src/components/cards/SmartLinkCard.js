import React from "react";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { MainCard } from "./style";

const SmartLinkCard = ({ data }) => {
  return (
    <>
      <MainCard>
        <Box className="content">
          <Box className="image_container">
            <Box
              className="box_image"
              sx={{
                backgroundImage: `url(${data.img})`,
              }}
            ></Box>
          </Box>
          <Box className="link_titile">
            <img src={data.icon} alt="img" />
            <Typography variant="body2">{data.link}</Typography>
          </Box>
          <Typography variant="h5">{data.heading}</Typography>
          <Typography>Title: {data.title}</Typography>
          <Typography>Release Date: {data.releas_date}</Typography>
          <Typography>Musician by {data.name}</Typography>
          <Button variant="contained" fullWidth>
            Listen on Spotify
          </Button>
        </Box>
      </MainCard>
    </>
  );
};

export default SmartLinkCard;
