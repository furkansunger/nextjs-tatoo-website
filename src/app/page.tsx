"use client";

import React from "react";
import { Box } from "@mui/material";
import {
  Footer,
  Gallery,
  Header,
  Services,
  Subscribe,
  Testimonials,
  Welcome,
} from "@/components";

const Home = () => {
  return (
    <Box>
      <Header />
      <Welcome />
      <Services />
      <Gallery />
      <Testimonials />
      <Subscribe />
      <Footer />
    </Box>
  );
};

export default Home;
