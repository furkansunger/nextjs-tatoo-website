import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

const Services = () => {
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
          gap: "3rem",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: "1rem",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "orange", fontWeight: "bold", marginBottom: "1rem" }}
            >
              Traditional to Hyper-realistic: Unleash Your Imagination
            </Typography>
            <Typography variant="body2" sx={{ color: "orange" }}>
              Explore the vast universe of tattoo designs, from intricate line
              work to explosive color compositions.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "240px", sm: "360px" },
                height: { xs: "360px", sm: "480px" },
                "&:hover img": {
                  scale: "1.01",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              <Image
                src="/assets/services-1.jpg"
                alt=""
                fill={true}
                sizes="100vw"
                style={{ borderRadius: "1.5rem" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            gap: "1rem",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              order: {xs: "1", sm: "-1"}
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "240px", sm: "360px" },
                height: { xs: "360px", sm: "480px" },
                "&:hover img": {
                  scale: "1.01",
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              <Image
                src="/assets/services-2.jpg"
                alt=""
                fill={true}
                sizes="100vw"
                style={{ borderRadius: "1.5rem" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              order: {xs: "-1", sm: "1"}
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "orange", fontWeight: "bold", marginBottom: "1rem" }}
            >
              Get Inked by the Pros: World-renowned Tattoo Artists
            </Typography>
            <Typography variant="body2" sx={{ color: "orange" }}>
              Experience the magic of needle and ink with our lineup of
              visionary artists, elevating your tattoo ideas to pure artistry.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
