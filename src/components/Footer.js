import React from 'react';
import { Typography, Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Grid
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
      }}>
      <hr style={{ color: 'black', width: '40%' }} />
      <Grid style={{}}>
        <IconButton href="mailto:sungypaik@gmail.com" target="_blank">
          <Email style={{ margin: 10 }} />
        </IconButton>
        <IconButton href="https://www.github.com/spaik11" target="_blank">
          <GitHubIcon style={{ margin: 10 }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/sungypaik/"
          target="_blank">
          <LinkedIn style={{ margin: 10 }} />
        </IconButton>
      </Grid>
      <Typography style={{ marginBottom: 15, zIndex: 1 }}>
        © 2021 Sung Paik
      </Typography>
      <IconButton onClick={scrollToTop}>
        <KeyboardArrowUp style={{ margin: 5 }} />
      </IconButton>
    </Grid>
  );
}
