import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useBreakpoints } from './util/mediaQuery';
import Project from './Project';
import Contact from './Contact';

export default function Home() {
  const classes = useStyles();
  const breakpoint = useBreakpoints();

  return (
    <Grid className={classes.body}>
      <Grid id="home" className={classes.intro}>
        <Typography className={classes.logo}>
          Hi, I'm{' '}
          <span style={{ color: 'white' }}>
            Sung <img id="pic" src="/images/sung.jpg" />
          </span>
        </Typography>
        <Typography
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '3vw',
            textShadow: '2px 2px 2px darkgray',
            zIndex: '1',
            textStroke: '1px black',
            letterSpacing: '0px',
          }}>
          a full stack developer living in NYC.
        </Typography>
      </Grid>

      <Grid id="about" className={classes.about}>
        <Typography className={classes.title}>About Me</Typography>
        <hr style={{ color: 'black', width: '40%' }} />
        <Typography
          id="about-text"
          paragraph
          style={{
            width: '80vw',
            fontFamily: 'Space Grotesk',
            fontSize: '20px',
          }}>
          Experienced coding bootcamp graduate with extensive background in
          various coding languages, developing mobile applications, and building
          websites from the ground up. Specializes in JavaScript and Node.js.
          Professional strengths include creative problem-solving, written and
          verbal communication, and time management. Detail-oriented mindset
          from 7+ years of experience in the U.S. Marine Corps and 2+ years in
          the Banking industry.
        </Typography>
        <Button
          variant="contained"
          size="medium"
          style={{
            backgroundColor: '#003973',
          }}>
          <a
            style={{ color: 'white', fontFamily: 'Space Grotesk' }}
            target="_blank"
            href="https://spaik11.github.io/resume/">
            Resume
          </a>
        </Button>
      </Grid>
      <Grid id="projects" className={classes.topSection}>
        <Typography className={classes.title}>Projects</Typography>
        <hr style={{ color: 'black', width: '40%' }} />
        <Grid className={classes.projects}>
          <Project
            imgUrl="/images/okra.png"
            title="Okra"
            detail="AR Dining Experience"
            techs={[
              'Viro React',
              'React Native',
              'Sequelize',
              'Node.js',
              'Redux',
            ]}
            gitHubUrl="https://github.com/FSAOnions/Okra-client"
            deployUrl="https://youtu.be/_sXa_hgtVuU"
            devs={4}
          />
          <Project
            imgUrl="/images/chat.png"
            title="Universal Chat App"
            detail="Directly translate messages in this chat!"
            techs={['Sequelize', 'React', 'Socket.io', 'Node.js', 'Redux']}
            githubUrl="https://github.com/spaik11/Universal-Chat"
            deployUrl="https://unistackchat.herokuapp.com/"
            devs={1}
          />
        </Grid>
        <Grid className={classes.projects}>
          <Project
            imgUrl="/images/shopper.png"
            title="Ray's Kitchen"
            detail="Food e-commerce site"
            techs={['Sequelize', 'Express', 'React', 'Node.js', 'JWT']}
            githubUrl="https://github.com/Brownie-Batter/graceshopper-project"
            deployUrl="https://graceshopper-fullstack.herokuapp.com/"
            devs={4}
          />
          <Project
            imgUrl="/images/fuber.png"
            title="Fuber"
            detail="Friends Uber, request or help out a friend"
            techs={['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io']}
            githubUrl="https://github.com/Brownie-Batter/graceshopper-project"
            deployUrl="https://graceshopper-fullstack.herokuapp.com/"
            devs={2}
          />
        </Grid>
      </Grid>
      <Grid id="contact" className={classes.topSection}>
        <Typography className={classes.title}>Contact</Typography>
        <hr
          style={{
            color: 'black',
            width: '40%',
            borderRadius: '50% 100px 0 0',
          }}
        />
        <Contact />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  intro: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Space Grotesk',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Space Grotesk',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    width: '100%',
  },
  body: {
    backgroundColor: '#F2F2F2',
  },
  logo: {
    marginBottom: '20px',
    color: 'black',
    fontSize: '7vw',
    textShadow: '2px 2px 2px darkgray',
    zIndex: '1',
    textStroke: '1px black',
    letterSpacing: '0px',
    fontFamily: 'Space Grotesk',
  },
  title: {
    color: 'white',
    fontSize: '4vw',
    textShadow: '4px 4px 4px darkgray',
    zIndex: '1',
    textStroke: '1px black',
    letterSpacing: '0px',
  },
  projects: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    flexWrap: 'wrap',
  },
}));
