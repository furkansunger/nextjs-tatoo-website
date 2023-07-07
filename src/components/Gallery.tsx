import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const Gallery = () => {
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
        <Typography variant="h5" sx={{ color: "orange", fontWeight: "bold" }}>
          Artwork Showcase
        </Typography>
        <Grid
          container
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "320px",
                height: "320px",
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                style={{ borderRadius: "1.5rem", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Gallery;
