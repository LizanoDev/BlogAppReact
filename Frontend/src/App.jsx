import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ListBlogs from './ListBlogs';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Ensure full viewport height
  },
  button: {
    marginTop: '1rem', // Add some spacing above the button
  },
};

const App = () => {
  return (
    
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Blog App!
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        A place to share your thoughts and ideas.
      </Typography>
      <Button
        component={Link}
        to="/blogs"
        variant="contained"
        color="primary"
        size="large"
        align="center"
        style={styles.button}
        

      >
        Explore Blogs
      </Button>
    </Container>
  );
};

export default App;
