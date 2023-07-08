import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  };

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
        background:
          "linear-gradient(to bottom, rgba(256, 256, 256, 0), rgba(0, 0, 0, 1)), url('/assets/header.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "2rem 0",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "orange",
            marginBottom: "1rem",
            fontSize: { xs: "5rem", sm: "6rem" },
          }}
        >
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
          onClick={scrollDown}
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
