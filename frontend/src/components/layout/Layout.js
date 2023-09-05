import { React, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { Box } from "@mui/material";
import { red, grey } from "@mui/material/colors";

const Layout = ({ children }) => {
  return (
    <>
      <Box >
        <TopBar />
        <Box component={"main"} >
          <div>{children}</div>
        </Box>
      </Box>
    </>
  );
};
export default Layout;
