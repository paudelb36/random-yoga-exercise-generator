import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <h1>Random Yoga Excercise Generator</h1>
    </Headers>
  );
};

export default Header;

const Headers = styled.div`
  h1 {
    text-align: center;
  }
`;
