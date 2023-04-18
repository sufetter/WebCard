import {ButtonDef} from "@/pages";
import {Flex, Box} from "@chakra-ui/react";
import sectionBg from "../images/getInTouch_section.png";
import React from "react";

const GetInTouch = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      minH="420px"
      flex={1}
      bgImage={sectionBg.src}
      bgSize="cover"
      align="center"
      justify="center"
    >
      <Flex fontSize="28px" fontWeight="700">
        Your personal gaming coach
      </Flex>
      <Flex maxW="450px" color="#999CA3" textAlign="justify" my="20px">
        Blitz simplifies the process of mastering difficult games, helping you
        improve at every step of your journey to the top.
      </Flex>
      <Flex gap="7px" mt="10px">
        <ButtonDef
          styles={{minW: "150px", bg: "#DD364D", _hover: {bg: "#E5596C"}}}
        >
          <Box> Download Blitz</Box>
        </ButtonDef>
        <ButtonDef
          styles={{
            minW: "150px",
            bg: "#272A30",
            color: "#999CA3",
            _hover: {bg: "#3C3F47"},
          }}
        >
          <Box>Sign in</Box>
        </ButtonDef>
      </Flex>
    </Flex>
  );
};

export default GetInTouch;
