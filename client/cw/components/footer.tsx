import {ButtonDef} from "@/pages";
import {Flex, Box} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex minH="396px" w="100%" bg="#13151B" justify="center">
      <Flex w="1000px" direction="column" flex={1}>
        <Flex w="100%" justify="space-between">
          <Flex direction="column">
            <Flex>Adadadadad</Flex>
            <ButtonDef>
              <Box>dgdgd</Box>
            </ButtonDef>
            <ButtonDef>
              <Box>dgdgd</Box>
            </ButtonDef>
          </Flex>
          <Flex w="400px" justify="space-between">
            <Flex direction="column">
              <Flex>Fdsfsdf</Flex>
              <Flex direction="column">
                <Flex>dadada</Flex>
                <Flex>dadada</Flex>
                <Flex>adadad</Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex>Fdsfsdf</Flex>
              <Flex direction="column">
                <Flex>dadada</Flex>
                <Flex>dadada</Flex>
                <Flex>adadad</Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex>Fdsfsdf</Flex>
              <Flex direction="column">
                <Flex>dadada</Flex>
                <Flex>dadada</Flex>
                <Flex>adadad</Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" justify="space-between" align="flex-end" h="100%">
          <Flex>dadas</Flex>
          <Flex>dadas</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
