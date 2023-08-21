import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch the blog data for editing
      fetchBlogData();
    }
  }, [id]);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
      const { title, content } = response.data;
      setTitle(title);
      setContent(content);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { title, content };

    try {
      if (id) {
        // Update existing blog
        await axios.put(`http://localhost:5000/api/blogs/${id}`, data);
      } else {
        // Create new blog
        await axios.post('http://localhost:5000/api/blogs', data);
        console.log(data);
      }
      navigate('/blogs'); // Navigate back to the list of blogs
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        {id ? 'Edit Blog' : 'Create Blog'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Body"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {id ? 'Update' : 'Create'}
        </Button>
      </form>
    </Container>
  );
};

export default CreateEditBlog;