import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <Box component="section" sx={{ width: "100%", background: "black" }}>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          padding: "4rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="h3"
          color="orange"
          textAlign="center"
          fontWeight="bold"
        >
          Subscribe and Get the Latest Tattoo News & Trends
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <TextField
            placeholder="example@mail.com"
            variant="standard"
            color="primary"
            type="email"
            sx={{
              borderBottom: "1px solid #3f50b5",
              "& input": { color: "#fff" },
              "& input::placeholder": { color: "#ddd" },
            }}
          />
          <Button variant="contained">Subscribe</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
