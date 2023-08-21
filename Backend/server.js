const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'blogapp', 
  insecureAuth : true
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Create a new blog
app.post('/api/blogs', (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO blogs (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred while creating the blog.' });
      } else {
        res.status(201).json({ id: result.insertId });
      }
    });
  });
  
  // Get all blogs
  app.get('/api/blogs', (req, res) => {
    const sql = 'SELECT * FROM blogs ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred while fetching blogs.' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Get a specific blog by ID
  app.get('/api/blogs/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM blogs WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred while fetching the blog.' });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: 'Blog not found.' });
        } else {
          res.status(200).json(result[0]);
        }
      }
    });
  });
  
  // Update a blog by ID
  app.put('/api/blogs/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const sql = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
    db.query(sql, [title, content, id], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred while updating the blog.' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Blog not found.' });
        } else {
          res.status(200).json({ message: 'Blog updated successfully.' });
        }
      }
    });
  });
  
  // Delete a blog by ID
  app.delete('/api/blogs/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM blogs WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred while deleting the blog.' });
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Blog not found.' });
        } else {
          res.status(200).json({ message: 'Blog deleted successfully.' });
        }
      }
    });
  });

  // Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  connection.query(
    'SELECT * FROM blogapp.users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Compare the password hash
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        if (!isMatch) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Successful login
        return res.status(200).json({ message: 'Login successful' }).redirect("/blogs");
        


      });
    }
  );
});

app.post('/register', (req, res) => {
  const { email, username, password } = req.body;

  // Check if the user already exists in the database
  connection.query(
    'SELECT * FROM users WHERE email = ? OR username = ?',
    [email, username],
    (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length > 0) {
        return res.status(409).json({ error: 'User already exists' });
      }

      // Hash the password using bcrypt
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Insert the new user into the database
        connection.query(
          'INSERT INTO users (email, username, password) VALUES (?, ?, ?)',
          [email, username, hash],
          (err, result) => {
            if (err) {
              console.error('Error executing MySQL query:', err);
              return res.status(500).json({ error: 'Internal server error' });
            }
            
            // User registration successful
            return res.status(201).json({ message: 'User registered successfully' });
          }
        );
      });
    }
  );
});
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });