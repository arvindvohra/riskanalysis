import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavBar from './Navbar/NavBar';
import Header from './Navbar/Header';


export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid xs={12} border={0}>
          <Header />

        </Grid>
        <Grid xs={3}>
          <NavBar />
        </Grid>
        <Grid xs={9}>
          Dashboard
        </Grid>

      </Grid>
    </Box>
  );
}