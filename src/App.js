import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import GlobalStyle from "./globalStyle";
import Theme from "./Theme";
import styled from "styled-components";

function App() {
  return (
    <Theme>
      <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Content />} />
          </Routes>
        </BrowserRouter>
            {/* <Heading isHeading={true}>Hello World</Heading> */}
      </div>
    </Theme>
  );
}

export default App;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.primary};
`;
