import React from "react";
import { Box, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Box component="section" sx={{ width: "100%", background: "black" }}>
      <Box
        sx={{
          width: "80%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="caption"
          color="orange"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          Welcome
        </Typography>
        <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Typography
            variant="body2"
            color="white"
            sx={{ fontSize: "2.5rem", lineHeight: "1.2" }}
          >
            Dive into the world of sublime ink arts and witness the
            awe-inspiring masterpieces!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
