import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';

export default function Project({
  imgUrl,
  title,
  detail,
  techs,
  githubUrl,
  deployUrl,
  devs,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        onMouseEnter={() => setIsFlipped(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
          height: '320px',
          margin: '10px',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}>
        <img style={{ height: '200px' }} src={imgUrl} alt="Err" />
        <CardContent style={{ backgroundColor: '#003973', color: 'white' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontFamily: 'Space Grotesk' }}>
            {title}
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="text.secondary"
            style={{ fontFamily: 'Space Grotesk' }}>
            {detail}
          </Typography>
        </CardContent>
      </Card>
      <Card
        onMouseLeave={() => setIsFlipped(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
          height: '320px',
          margin: '10px',
          justifyContent: 'space-around',
          textAlign: 'center',
          backgroundColor: 'white',
          color: '#003973',
        }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: 'Space Grotesk' }}>
          {title[0] === 'U' ? 'Uni Chat App' : title} Tech Stacks
        </Typography>
        <Typography style={{ margin: '2px' }}>
          {techs.map((tech, idx) =>
            idx !== techs.length - 1 ? tech + ' · ' : tech
          )}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: 'Space Grotesk' }}>
          {devs > 1 ? `Team Project (${devs} Devs)` : 'Solo Project'}
        </Typography>
        <Grid style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>
            <a target="_blank" href={githubUrl} style={{ color: '#003973' }}>
              Code
            </a>
          </Button>
          <Button size="small">
            <a target="_blank" href={deployUrl} style={{ color: '#003973' }}>
              Demo
            </a>
          </Button>
        </Grid>
      </Card>
    </ReactCardFlip>
  );
}
