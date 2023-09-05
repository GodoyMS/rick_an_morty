import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center", display: "flex" }}>
          <Link href={"/"}>
            <Typography
              variant="h1"
              noWrap
              fontSize={30}
              fontWeight={900}
              component="div"
              sx={{ color: "white" }}
            >
              Rick And Morty
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
