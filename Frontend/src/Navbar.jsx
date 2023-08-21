
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: theme.spacing(2),
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        
        <nav>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/blogs" className={classes.link}>
            Blogs
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/login" className={classes.link}>
            Login | 
          </Link>
          <Link to="/register" className={classes.link}>
             Register
          </Link>

        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
