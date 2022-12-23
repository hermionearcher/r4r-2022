import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import BottomNavBar from './BottomNavBar';

const Content = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <BottomNavBar />
    </Fragment>
  );
};
export default Content;
