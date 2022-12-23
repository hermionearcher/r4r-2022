import React, { Fragment } from 'react';
import './App.css';
import Content from './components/Content';
import GlobalStyle from './globalStyle';
import Theme from './Theme';
import styled from 'styled-components';

function App() {
  return (
    <Theme>
      <Content />
      <Heading isHeading={true}>Hello World</Heading>
    </Theme>
  );
}

export default App;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.primary};
`;
