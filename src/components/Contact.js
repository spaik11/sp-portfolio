import React, { useState } from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'subject':
        setSubject(e.target.value);
        break;
      case 'body':
        setBody(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubject('');
    setBody('');
  };

  return (
    <Grid
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50vw',
        maxWidth: '500px',
      }}
      noValidate
      autoComplete="off">
      <TextField
        style={{ textAlign: 'center', width: '100%' }}
        margin="normal"
        id="outlined-basic"
        label="Subject"
        variant="outlined"
        name="subject"
        value={subject}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        style={{ textAlign: 'center', width: '100%' }}
        margin="normal"
        id="outlined-basic"
        label="Type your message here"
        variant="outlined"
        name="body"
        value={body}
        onChange={(e) => handleChange(e)}
      />
      <Button
        variant="contained"
        size="medium"
        style={{
          backgroundColor: '#003973',
        }}>
        <a
          style={{ color: 'white', fontFamily: 'Space Grotesk' }}
          href={`mailto:sungypaik@gmail.com?subject=${subject}&body=${body}`}>
          Submit
        </a>
      </Button>
    </Grid>
  );
}
