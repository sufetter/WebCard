import React, {useState, memo} from "react";
import {Box, VStack, Flex} from "@chakra-ui/react";
import {useMainStore} from "../store/shared/sharedStore";
import {shallow} from "zustand/shallow";
const Sidebar = () => {
  const [SidebarOpen, setSidebarOpen] = useMainStore(
    (state: any) => [state.SidebarOpen, state.setSidebarOpen],
    shallow
  );
  return (
    <Flex
      bg="#0e1015"
      width={SidebarOpen ? "188px" : "20px"}
      px="26px"
      onMouseOver={() => setSidebarOpen(true)}
      onMouseOut={() => setSidebarOpen(false)}
    >
      Sidebar
    </Flex>
  );
};

export default memo(Sidebar);
