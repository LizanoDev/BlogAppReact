
import { Container, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 0),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          &copy; 2023 Blog App Leo Lizano. All rights reserved.
        </Typography>
      </Container>
    </footer>
  
  );
};

export default Footer;
