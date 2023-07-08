import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box component="footer" sx={{ width: "100%", background: "black" }}>
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link href="www.google.com" style={{ color: "#fff" }}>
            <FaTwitter size="2rem" />
          </Link>
          <Link href="www.google.com" style={{ color: "#fff" }}>
            <FaInstagram size="2rem" />
          </Link>
          <Link href="www.google.com" style={{ color: "#fff" }}>
            <FaYoutube size="2rem" />
          </Link>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography color="#ccc" variant="body2">
            © 2023 DeepInk Tattoo, All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
