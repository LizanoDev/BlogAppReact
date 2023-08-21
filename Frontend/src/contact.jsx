import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        Have questions or feedback? Feel free to reach out to us!
      </Typography>
      <Typography variant="body1" paragraph>
        You can contact us at{' '}
        <Link href="mailto:contact@example.com">contact@example.com</Link>.
      </Typography>
    </Container>
  );
};

export default ContactPage;