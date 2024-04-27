import React from "react";
import { Button, Flex } from "antd";
const Home = () => (
  <a href="http://localhost:6969/auth">
    <Flex gap="small" wrap="wrap">
      <Button type="primary">Login with Upstox</Button>
    </Flex>
  </a>
);

export default Home;
