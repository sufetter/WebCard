import {Flex, Box} from "@chakra-ui/react";
import React, {memo, useEffect, useRef, useState} from "react";
import Search from "./search";
import {useMainStore} from "../store/shared/sharedStore";
import {shallow} from "zustand/shallow";

const Header = ({headerType, scrollItem}: any) => {
  const [height, setHeight] = useState(168);
  // useEffect(() => {
  //   scrollItem.current.addEventListener("scroll", () => {
  //     if (scrollItem.current.scrollTop > 60) setHeight(64);
  //     if (scrollItem.current.scrollTop < 60) setHeight(168);
  //   });

  //   return () => {
  //     scrollItem.current.removeEventListener("scroll", () => console.log("ff"));
  //   };
  // });

  return (
    <>
      {headerType == "main" && (
        <Flex
          h={height + "px"}
          minH="64px"
          align="end"
          w="100%"
          position={"sticky"}
          top="0px"
          zIndex="10"
          onClick={() => console.log(scrollItem.current)}
        >
          <Flex justify="center" w="100%">
            <Search />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default memo(Header);
