import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { green, grey, orange, red } from "@mui/material/colors";

import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import Image from "next/image";

const CharacterCard = ({ info }) => {
  const boxSX = {

    maxWidth: 345, margin: "auto",      

    "&:hover": {
      color: "gray",
      backgroundColor: grey[100],
     
    },
  };

  return (
    <Grid
        item
      component={Link}
      
      href={`/character/${info.id}`}
      style={{marginLeft:"auto",marginRight:"auto",padding:10}}
      xs={12}
      md={6}
      lg={4}
      xl={3}
    >
      <Card sx={boxSX}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor:
                  info?.status === "Alive"
                    ? green[500]
                    : info?.status === "Dead"
                    ? red[500]
                    : orange[500],
              }}
              aria-label="recipe"
            >
              {info.name[0]}
            </Avatar>
          }
         
          title={
            <Typography fontWeight={900} color={"black"}>
              {info.name}
            </Typography>
          }
          subheader={
            <Box
              sx={{
                flex: 1,
                alignItems: "center",
                columnGap: 2,
                display: "flex",
              }}
            >
              {`${info.species} - ${info.status}`}

              <RadioButtonCheckedRoundedIcon
                style={{
                  color:
                    info?.status === "Alive"
                      ? green[500]
                      : info?.status === "Dead"
                      ? red[500]
                      : orange[500],
                }}
              />
            </Box>
          }
        />
        <CardMedia
            component={"img"}
          height={300}
          width={300}
          image={info.image}
          alt="Paella dish"
        />
        <CardContent>
          <Box
            component={"div"}
            style={{ display: "flex", gap: 4, alignItems: "center" }}
          >
            <MyLocationIcon />
            <Typography variant="body2" color="text.secondary">
              {info.location.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default React.memo(CharacterCard);
