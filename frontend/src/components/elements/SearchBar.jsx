import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button } from "@mui/material";
const SearchBar = ({
  name,
  setName,
  fetchByName,
  status,
  setStatus,
  setPage,
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const listStatus = [
    { id: 1, name: "alive", label: "Alive" },
    { id: 2, name: "dead", label: "Dead" },
    { id: 3, name: "unknown", label: "Unknown" },
    { id: 4, name: "", label: "all" },
  ];
  const submit = (event) => {
    event.preventDefault();
    setOpenMenu(false);
    setPage(1);
    fetchByName();
  };
  return (
    <Paper
      component="form"
      onSubmit={submit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 400,
        marginBottom:5,
        position: "relative",
      }}
    >
      {openMenu && (
        <Paper
          component={"div"}
          sx={{
            position: "absolute",
            top: "105%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            zIndex: 500,
            p: "4px",
          }}
        >
          {listStatus.map((e) => (
            <Button
              onClick={() => setStatus(e.name)}
              variant={e.name === status ? "contained" : "text"}
              sx={{ padding: 1 }}
              key={e.id}
            >
              {e.label}
            </Button>
          ))}
        </Paper>
      )}
      <IconButton
        onClick={() => setOpenMenu(!openMenu)}
        sx={{ p: "10px" }}
        aria-label="menu"
      >
        <FilterAltIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search characters by name"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
