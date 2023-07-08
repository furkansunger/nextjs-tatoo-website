import React from "react";
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
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
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          style={{ width: "100%", height: "100%", padding: "3rem 0" }}
        >
          <SwiperSlide>
            <Box
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "40px",
                backgroundColor: "#0d0d0d",
                overflow: "hidden",
                gap: "2rem",
                borderRadius: "1.5rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    "& img": { borderRadius: "50%" },
                  }}
                >
                  <Image
                    src="/assets/avatar-1.jpg"
                    alt="profile-img"
                    fill={true}
                  />
                </Box>

                <Typography variant="h6" color="orange">
                  Their creativity and skill level is beyond exceptional!
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="orange"
                textTransform="uppercase"
              >
                Jake Gallagher
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "40px",
                backgroundColor: "#0d0d0d",
                overflow: "hidden",
                gap: "2rem",
                borderRadius: "1.5rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    "& img": { borderRadius: "50%" },
                  }}
                >
                  <Image
                    src="/assets/avatar-1.jpg"
                    alt="profile-img"
                    fill={true}
                  />
                </Box>

                <Typography variant="h6" color="orange">
                  Their creativity and skill level is beyond exceptional!
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="orange"
                textTransform="uppercase"
              >
                Jake Gallagher
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "40px",
                backgroundColor: "#0d0d0d",
                overflow: "hidden",
                gap: "2rem",
                borderRadius: "1.5rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    "& img": { borderRadius: "50%" },
                  }}
                >
                  <Image
                    src="/assets/avatar-1.jpg"
                    alt="profile-img"
                    fill={true}
                  />
                </Box>

                <Typography variant="h6" color="orange">
                  Their creativity and skill level is beyond exceptional!
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="orange"
                textTransform="uppercase"
              >
                Jake Gallagher
              </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "40px",
                backgroundColor: "#0d0d0d",
                overflow: "hidden",
                gap: "2rem",
                borderRadius: "1.5rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    "& img": { borderRadius: "50%" },
                  }}
                >
                  <Image
                    src="/assets/avatar-1.jpg"
                    alt="profile-img"
                    fill={true}
                  />
                </Box>

                <Typography variant="h6" color="orange">
                  Their creativity and skill level is beyond exceptional!
                </Typography>
              </Box>
              <Typography
                variant="caption"
                color="orange"
                textTransform="uppercase"
              >
                Jake Gallagher
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
