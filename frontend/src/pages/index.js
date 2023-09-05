import CharacterList from "@/components/elements/CharacterList";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{paddingTop:10, maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}
      >

        <CharacterList/>
        
      </Box>
    </>
  );
}
