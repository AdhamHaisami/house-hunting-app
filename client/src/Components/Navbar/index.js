import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '../Button';
import LinkItem from '../LinkItem';
import useStyles from './style';
import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  HOUSES,
  PROFILE,
  FAVORITE,
  ABOUT_US,
  CONTACT_US,
} from '../../Utils/routes.constant';

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.logo}>
            <LinkItem className={classes.linkItem} linkUrl={HOME_PAGE}>
              House Hunting
            </LinkItem>
          </Typography>
          <LinkItem className={classes.linkItem} linkUrl={HOUSES}>
            Houses
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={CONTACT_US}>
            Contact us
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={ABOUT_US}>
            About us
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={FAVORITE}>
            Favorite
          </LinkItem>
          <Button
            variant="outlined"
            color="secondary"
            onClick=""
            href={SIGNUP_PAGE}
          >
            SignUp
          </Button>
          <LinkItem className={classes.linkItem} linkUrl={LOGIN_PAGE}>
            Signin
          </LinkItem>
          <LinkItem className={classes.linkItem} linkUrl={PROFILE}>
            Profile
          </LinkItem>
          <Button variant="outlined" color="secondary" onClick="">
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;