import React from "react";
import {Flex} from "@chakra-ui/react";
import {Card} from "../src/pages/index";

const Games = () => {
  return (
    <Flex w="100%" h="250px" justify="space-between" mt="48px" mb="62px">
      <Card desc="Example" />
      <Card desc="Example" />
      <Card desc="Example" />
      <Card desc="Example" />
      <Card desc="Example" />
    </Flex>
  );
};

export default Games;
