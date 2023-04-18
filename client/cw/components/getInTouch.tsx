import {ButtonDef} from "@/pages";
import {Flex, Box, Icon} from "@chakra-ui/react";
import sectionBg from "../images/getInTouch_section.png";
import React from "react";
import {HiOutlineCloudDownload} from "react-icons/hi";

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
        Your favorite gaming platform
      </Flex>
      <Flex maxW="470px" color="#999CA3" textAlign="center" my="20px">
        Worzell provides a wide range of games with the integration of
        cryptocurrency, NFT and smart contracts. Play wherever you want.
      </Flex>
      <Flex gap="7px" mt="10px">
        <ButtonDef
          styles={{
            minW: "150px",
            bg: "#DD364D",
            _hover: {bg: "#E5596C"},
            px: "0px",
          }}
        >
          <Flex align="center">Get Worzell</Flex>
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
