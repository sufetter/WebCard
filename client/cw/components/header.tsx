import {Flex, Box} from "@chakra-ui/react";
import React, {memo, useEffect, useRef, useState} from "react";
import Search from "./search";
import {useMainStore} from "../store/shared/sharedStore";
import {shallow} from "zustand/shallow";

const Header = ({headerStandart}: any) => {
  // const [scrollPosition, updateScrollPosition] = useMainStore(
  //   (state: any) => [state.PageYOffset, state.setPageYOffset],
  //   shallow
  // );
  // const [headerPosition, setHeaderPosition] = useState("stetch");
  // const headerRef = useRef(null);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     updateScrollPosition(window.pageYOffset);
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () =>
  //       updateScrollPosition(window.pageYOffset)
  //     );
  //   };
  // });

  return (
    <>
      {headerStandart == "main" && (
        <Flex
          h="168px"
          align="end"
          w="100%"
          position={"sticky"}
          top="0px"
          zIndex="10"
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
