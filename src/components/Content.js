import React, { div } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Contact from './Contact';
import Services from './Services';
import Areas from './Areas';
import { Reviews } from '@mui/icons-material';

const Content = () => {
  return (
    <div style={{width: "95%"}}>
      <NavBar />
      <Header />
      <Services />
      <Areas />
      <Reviews />
      <Contact />
    </div>
  );
};
export default Content;
