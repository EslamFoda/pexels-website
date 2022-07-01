import { useState } from "react";

import { Tabs, Tab, Divider } from "@mui/material";
import styled from "styled-components";
const Tabss = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="disabled tabs example"
      >
        <Tab className="tab" label="Home" />
        <Tab className="tab" label="Discover" />
        <Tab className="tab" label="Videos" />
        <Tab className="tab" label="Leaderboard" />
        <Tab className="tab" label="Challenges" />
      </Tabs>
      <Divider />
    </Container>
  );
};

export default Tabss;
const Container = styled.div`
  .tab {
    font-size: 16px;
    font-weight: bold;
  }
`;
