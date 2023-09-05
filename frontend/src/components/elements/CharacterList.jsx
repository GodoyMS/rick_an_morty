import { BACKEND, BACKEND_BASE_PATH } from "@/config/config";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Search } from "@mui/icons-material";
import SearchBar from "./SearchBar";

const CharacterList = () => {
  const [humanCharacters, setHumanCharacters] = useState([]);
  const [humanCharactersInfo, setHumanCharactersInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [nameCharacter, setNameCharacter] = useState("");
  const [status, setStatus] = useState("Alive");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    await axios
      .get(`${BACKEND_BASE_PATH}/humanCharacters?page=${page}`)
      .then(({ data }) => {
        setHumanCharacters(data.data.results);
        setHumanCharactersInfo(data.data.info);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchByName = async (event) => {
    setIsLoading(true);
    setIsError(false);
    await axios
      .get(
        `${BACKEND_BASE_PATH}/humanCharactersByName?page=${page}&name=${nameCharacter}&status=${status}`
      )
      .then(({ data }) => {
        console.log(data.data);
        setHumanCharacters(data.data.results);
        setHumanCharactersInfo(data.data.info);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    if (nameCharacter || status) {
      fetchByName();
    } else {
      fetchData();
    }
  };
  return (
    <>
      <>
        {humanCharactersInfo && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Typography fontWeight={700}>
              {humanCharactersInfo?.count} Characters
            </Typography>
          </Box>
        )}
        <SearchBar
          fetchByName={fetchByName}
          name={nameCharacter}
          status={status}
          page={page}
          setPage={setPage}
          setStatus={setStatus}
          setName={setNameCharacter}
        />

        {isLoading ? (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container>
            {humanCharacters.length > 0 &&
              humanCharacters.map((e) => <CharacterCard info={e} key={e.id} />)}
          </Grid>
        )}

        {humanCharactersInfo && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Pagination
              size="large"
              count={humanCharactersInfo?.pages}
              variant="outlined"
              page={page}
              onChange={handleChangePage}
            />
          </Box>
        )}
      </>
    </>
  );
};

export default CharacterList;
