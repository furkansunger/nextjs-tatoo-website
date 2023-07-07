"use client"

import React from 'react'
import { Box } from '@mui/material'
import { Gallery, Header, Services, Welcome } from '@/components'

const Home = () => {
  return (
    <Box>
      <Header />
      <Welcome />
      <Services />
      <Gallery />
    </Box>
  )
}

export default Home