
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      
      <Typography variant="body1" align="justify" paragraph>
      Welcome to the Blog App! This is a simple blog application built using
        React, Express, and MySQL. It allows users to create, read, update, and
        delete blog posts. Feel free to explore and share your thoughts and ideas
        with the community.
      </Typography>
    </Container>
  );
};

export default About;
