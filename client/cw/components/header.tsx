import {Flex, Box} from "@chakra-ui/react";
import React from "react";
import Search from "./search";

const Header = () => {
  return (
    <Flex h="168px" align="end" w="100%">
      <Flex justify="center" w="100%">
        <Search />
      </Flex>
    </Flex>
  );
};

export default Header;
