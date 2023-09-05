import { BACKEND_BASE_PATH } from "@/config/config";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import { green, orange, red } from "@mui/material/colors";

const index = () => {
  const router = useRouter();
  const { id } = router.query; // Access the string parameter
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, []);

  console.log(data);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    await axios
      .get(`${BACKEND_BASE_PATH}/character/${id}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  if(isError){
    return <Box  sx={{
      alignItems: "center",
      columnGap: 2,
      p:"10px"
    }} >Ocurrió un error</Box>
  }
  return (
    <Box
      sx={{
        paddingTop: 10,
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {(!isLoading && data) ? (
        <Grid gap={10}   columns={16} container>
          <Grid item  xs={16} md={8  } >
            <Image
              style={{
                width: "100%",
                objectFit: "contain",
                maxHeight: "600px",
                borderRadius:10
              }}
              width={1000}
              alt={data?.name}
              src={data?.image}
              height={1000}
            />
          </Grid>

          <Grid style={{display:"flex",flexDirection:"column",rowGap:10,justifyContent:"flex-start"}} item xs={8} md={6}  >
            <Typography fontWeight={700} fontSize={30} component={"h1"}>
              {data.name}
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                columnGap: 2,
                display: "flex",
              }}
            >
              <RadioButtonCheckedRoundedIcon
                style={{
                  color:
                    data?.status === "Alive"
                      ? green[500]
                      : data?.status === "Dead"
                      ? red[500]
                      : orange[500],
                }}
              />
              {`${data.species} - ${data.status}`}
              
            </Box>
            <Typography fontWeight={500} fontSize={15} component={"p"}>
             <strong>Gender:</strong> {data.gender}
            </Typography>
            <Typography fontWeight={500} fontSize={15} component={"p"}>
             <strong>Last Seen:</strong> {data.location.name}
            </Typography>
            <Typography fontWeight={500} fontSize={15} component={"p"}>
            <strong>Origin:</strong> {data.origin.name}
            </Typography>
          </Grid>
          
        </Grid>
      ) : (
        <Box sx={{display:"flex",justifyContent:"center"}}>
                  <CircularProgress />

        </Box>
      )}
    </Box>
  );
};

export default index;
