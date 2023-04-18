import {ButtonDef} from "@/pages";
import {Flex, Box} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex minH="396px" w="100%" bg="#13151B" justify="center">
      <Flex w="1000px" direction="column" flex={1} py="64px">
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
          <Flex w="550px" justify="space-between">
            <Flex direction="column">
              <Flex
                color="#999CA3"
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Our games
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                letterSpacing="1px"
                color="#E2E4E9"
                lineHeight="28px"
              >
                <Flex cursor="pointer">League of Knights</Flex>
                <Flex cursor="pointer">Combat Watch</Flex>
                <Flex cursor="pointer">Shadow Hunter</Flex>
                <Flex cursor="pointer">Cyber Flame</Flex>
                <Flex cursor="pointer">Just a Tavern</Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex
                color="#999CA3"
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Socials
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                letterSpacing="1px"
                color="#E2E4E9"
                lineHeight="28px"
              >
                <Flex cursor="pointer">Facebook</Flex>
                <Flex cursor="pointer">Twitter</Flex>
                <Flex cursor="pointer">Instagram</Flex>
                <Flex cursor="pointer">Our Discord</Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex
                color="#999CA3"
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Our games
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                letterSpacing="1px"
                color="#E2E4E9"
                lineHeight="28px"
              >
                <Flex cursor="pointer">League of Knights</Flex>
                <Flex cursor="pointer">Combat Watch</Flex>
                <Flex cursor="pointer">Shadow Hunter</Flex>
                <Flex cursor="pointer">Cyber Flame</Flex>
                <Flex cursor="pointer">Just a Tavern</Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          justify="space-between"
          align="flex-end"
          h="100%"
          color="#999CA3"
        >
          <Flex gap="25px">
            <Flex cursor="pointer">Made with love by Lobunets Daniil</Flex>
            <Flex cursor="pointer">English</Flex>
          </Flex>
          <Flex gap="25px">
            <Flex cursor="pointer">Terms of use</Flex>
            <Flex cursor="pointer">Privacy Policy</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
