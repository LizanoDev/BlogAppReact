
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
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
      >
        Explore Blogs
      </Button>
    </Container>
  );
};

export default WelcomePage;