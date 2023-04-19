import {ButtonDef} from "@/pages";
import {Flex, Box, VStack} from "@chakra-ui/react";
import React from "react";
import sectionBg from "../images/getInTouch_section.png";
import {sharedColors} from "./layout";

const EventItem = () => {
  return (
    <Flex
      w="100%"
      h="94px"
      bg={sharedColors.mainEventItem}
      borderRadius={5}
    ></Flex>
  );
};

const Overview = () => {
  return (
    <Flex w="100%" bg={sharedColors.mainBg} h="356px">
      <Flex
        direction="column"
        bg={sharedColors.leftSectionBg}
        px="20px"
        py="10px"
      >
        <Flex
          pb="10px"
          fontSize="14px"
          color={sharedColors.secondText}
          fontWeight="700"
        >
          Main info
        </Flex>
        <Flex w="316px" h="182px" bg="white" borderRadius={8}></Flex>
        <Flex maxW="316px" textAlign="justify" py="10px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          eligendi dolores sint labore, ipsam suscipit consequuntur illo.
        </Flex>
        <Flex gap="10px" py="5px">
          <ButtonDef
            styles={{
              w: "70%",
              bg: sharedColors.mainButton,
              color: sharedColors.mainText,
              _hover: {bg: sharedColors.mainButtonHover},
            }}
          >
            <Box>Play</Box>
          </ButtonDef>
          <Flex w="20%" gap="5px">
            <ButtonDef
              styles={{
                bg: sharedColors.secondButton,
                color: sharedColors.mainText,
                _hover: {bg: sharedColors.secondButtonHover},
              }}
            >
              <Box>Pl</Box>
            </ButtonDef>
            <ButtonDef
              styles={{
                bg: sharedColors.secondButton,
                color: sharedColors.mainText,
                _hover: {bg: sharedColors.secondButtonHover},
              }}
            >
              <Box>Pl</Box>
            </ButtonDef>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" px="20px" py="10px" w="100%">
        <Flex w="100%" justify="space-between" pb="10px" h="31px">
          <Flex
            fontSize="14px"
            color={sharedColors.secondText}
            fontWeight="700"
          >
            Last events
          </Flex>
          <Flex gap="1px" align="center">
            <ButtonDef
              styles={{
                h: "26px",
                w: "100px",
                borderRadius: "5px 0 0 5px",
                bg: sharedColors.mainEventButton,
                _hover: {bg: sharedColors.eventItemButtonHover},
              }}
            >
              <Box fontSize="14px">Updates</Box>
            </ButtonDef>
            <ButtonDef
              styles={{
                h: "26px",
                w: "100px",
                borderRadius: "0 5px 5px 0",
                bg: sharedColors.secondEventButton,
                _hover: {bg: sharedColors.eventItemButtonHover},
              }}
            >
              <Box fontSize="14px" color={sharedColors.secondText}>
                News
              </Box>
            </ButtonDef>
          </Flex>
        </Flex>
        <VStack>
          <EventItem />
          <EventItem />
          <EventItem />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Overview;
