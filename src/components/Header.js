import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Header = () => {
  return <HeaderWrapper>Slider goes here</HeaderWrapper>;
};
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row
  padding: 10vh;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 20;
`;
