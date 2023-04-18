import {ButtonDef} from "@/pages";
import {Flex, Box, VStack} from "@chakra-ui/react";
import React from "react";
import sectionBg from "../images/getInTouch_section.png";

const overviewColors = {
  mainBg: "#181A20",
  leftSectionBg: "#13151B",
  mainButton: "#DD364D",
  secondButton: "#262933",
  mainEventButton: "#353940",
  secondEventButton: "#272A30",
  mainButtonHover: "#E5596C",
  secondButtonHover: "#3C3F47",
  mainText: "#fff",
  mainEventItem: "#13151B",
  eventItemButtonHover: "#646E80",
};

const EventItem = () => {
  return (
    <Flex
      w="100%"
      h="94px"
      bg={overviewColors.mainEventItem}
      borderRadius={5}
    ></Flex>
  );
};

const Overview = () => {
  return (
    <Flex w="100%" bg={overviewColors.mainBg} h="356px">
      <Flex
        direction="column"
        bg={overviewColors.leftSectionBg}
        px="20px"
        py="10px"
      >
        <Flex pb="10px">Main info</Flex>
        <Flex w="316px" h="182px" bg="white" borderRadius={8}></Flex>
        <Flex maxW="316px" textAlign="justify" py="10px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          eligendi dolores sint labore, ipsam suscipit consequuntur illo.
        </Flex>
        <Flex gap="10px" py="5px">
          <ButtonDef
            styles={{
              w: "70%",
              bg: `${overviewColors.mainButton}`,
              color: `${overviewColors.mainText}`,
              _hover: {bg: `${overviewColors.mainButtonHover}`},
            }}
          >
            <Box>Play</Box>
          </ButtonDef>
          <Flex w="20%" gap="5px">
            <ButtonDef
              styles={{
                bg: `${overviewColors.secondButton}`,
                color: `${overviewColors.mainText}`,
                _hover: {bg: `${overviewColors.secondButtonHover}`},
              }}
            >
              <Box>Pl</Box>
            </ButtonDef>
            <ButtonDef
              styles={{
                bg: `${overviewColors.secondButton}`,
                color: `${overviewColors.mainText}`,
                _hover: {bg: `${overviewColors.secondButtonHover + 500}`},
              }}
            >
              <Box>Pl</Box>
            </ButtonDef>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" px="20px" py="10px" w="100%">
        <Flex w="100%" justify="space-between" pb="10px" h="34px">
          <Flex>Last events</Flex>
          <Flex gap="1px">
            <ButtonDef
              styles={{
                h: "26px",
                w: "100px",
                borderRadius: "5px 0 0 5px",
                bg: `${overviewColors.mainEventButton}`,
                _hover: {bg: `${overviewColors.eventItemButtonHover}`},
              }}
            >
              <Box>Updates</Box>
            </ButtonDef>
            <ButtonDef
              styles={{
                h: "26px",
                w: "100px",
                borderRadius: "0 5px 5px 0",
                bg: `${overviewColors.secondEventButton}`,
                _hover: {bg: `${overviewColors.eventItemButtonHover}`},
              }}
            >
              <Box>News</Box>
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
