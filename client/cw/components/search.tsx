import {Box, Flex, FormLabel, Icon, Img, Input, Text} from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons";
import {HiOutlineSearch} from "react-icons/hi";
import React, {useRef, useState} from "react";
import Image from "next/image";

const searchColors = {
  icon: "#999CA3",
  text: "#999CA3",
  iconActive: "#0E1015",
  textActive: "#0E1015",
  mainBg: "#272A30",
  mainBgActive: "#E9E5E2",
};

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mainBgColor, setMainBgColor] = useState(searchColors.mainBg);
  return (
    <Flex
      w="584px"
      h="56px"
      bg={mainBgColor}
      borderRadius="8px"
      _hover={{cursor: "text"}}
      onMouseUp={() => {
        inputRef.current?.focus();
      }}
      onMouseDown={(e) => {
        if (mainBgColor != searchColors.mainBgActive)
          setMainBgColor(searchColors.mainBgActive);
        e.preventDefault();
      }}
    >
      <Flex w="100%" mx="20px" align="center">
        <Flex w="100%" align="center">
          <Icon
            as={Search2Icon}
            boxSize="16x"
            color={
              mainBgColor == searchColors.mainBg
                ? searchColors.icon
                : searchColors.iconActive
            }
          />
          <Input
            variant="unstyled"
            w="100%"
            ml="10px"
            fontWeight="500"
            color={
              mainBgColor == searchColors.mainBg
                ? searchColors.text
                : searchColors.textActive
            }
            placeholder=" Search games, statistics, events and much more!"
            ref={inputRef}
            onBlur={() => setMainBgColor(searchColors.mainBg)}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Search;
