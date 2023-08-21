import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import BrowserRouter and Switch
import theme from './theme';
import './index.css';
import CreateEditBlog from './CreateEditBlog';
import ListBlogs from './ListBlogs';
import App from './App';
import Navbar from './Navbar';
import About from "./about";
import ContactPage from "./contact";
import Footer from './footer';
import Login from './login';
import RegisterForm from './register';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Navbar/>
      <Routes>
        {/* Route for the welcome page */}
        <Route path="/" element={<App/>}></Route>

        {/* Route for listing blogs */}
        <Route path="/blogs" element={<ListBlogs/>}></Route>
        
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>

        {/* Route for creating/editing blogs */}
        
        <Route path="/create" element={<CreateEditBlog/>}></Route>
        <Route path="/edit/:id" element={<CreateEditBlog/>} />

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<RegisterForm/>}></Route>

      </Routes>
      <br>
      </br>
      <Footer/>
    </Router>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
