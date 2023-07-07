import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        height: "100vh",
        display: "grid",
        alignContent: "center",
        position: "relative",
        textAlign: "center",
        background: "black",
        padding: "2rem 0",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ color: "orange", marginBottom: "1rem" }}>
          DeepInk
        </Typography>
        <Typography variant="h3" sx={{ color: "#ccc" }}>
          Tattoo
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            width: "4rem",
            height: "4rem",
            fontSize: "2rem",
            borderRadius: "50%",
            color: "#fff",
            padding: "0",
            minWidth: "auto",
          }}
        >
          <MdOutlineKeyboardArrowDown />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
