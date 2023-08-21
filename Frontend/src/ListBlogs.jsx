import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Button, Paper} from '@mui/material';
//import { red, amber} from '@mui/material/colors';
import axios from 'axios';
import { Link } from 'react-router-dom';

//const color_del = red[500];
//const color_update = amber[500];

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
``
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Blog List
      </Typography>
      <Button
        component={Link}
        to="/create"
        variant="contained"
        color="primary"
        size="large"
      >
    
        
        Create New Blog
      </Button>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Grid item xs={12} key={blog.id}>
            <Paper elevation={3} >
              <Typography variant="h5" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body1">{blog.content}</Typography>
              <Button
                variant="outlined"
                
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </Button>
              <Button
                component={Link}
                to={`/edit/${blog.id}`}
                variant="outlined"
                
              >
                Edit
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListBlogs;