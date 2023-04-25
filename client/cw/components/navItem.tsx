import React, {useState, memo} from "react";
import {Box, VStack, Flex, Icon} from "@chakra-ui/react";
import Image from "next/image";
import {useRouter} from "next/router";
import {sharedColors} from "./layout";
import {useMainStore} from "../store/shared/sharedStore";
import {shallow} from "zustand/shallow";

interface NavItemProps {
  src: any;
  desc: string;
  section: string;
  styles?: {
    main?: {};
    image?: {};
    desc?: {};
  };
}

function NavItem({src, desc, section, styles}: NavItemProps) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/" + section);
  };

  const NavbarOpen = useMainStore((state: any) => state.NavbarOpen, shallow);

  return (
    <Flex
      w="100%"
      align="center"
      cursor="pointer"
      gap="18px"
      onClick={handleNavigation}
      mt="0px !important"
      _hover={{color: sharedColors.secondText}}
      {...styles?.main}
      minH="21px"
    >
      <Flex align="center" boxSize="20px" {...styles?.image} justify="center">
        <Image src={src} style={{height: "100%", width: "auto"}} alt="" />
      </Flex>

      <Flex {...styles?.desc} display={NavbarOpen ? "flex" : "none"}>
        {desc}
      </Flex>
    </Flex>
  );
}

export default memo(NavItem);
