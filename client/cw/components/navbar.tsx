import React, {useState} from "react";
import {Box, VStack, Flex, Icon} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../images/logo.svg";
import games from "../images/games_section.png";
import arena from "../images/arena_section.svg";
import statistic from "../images/statistic_section.svg";
import guides from "../images/guides_section.svg";
import {useRouter} from "next/router";
import {motion, Variants} from "framer-motion";
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

export const NavItem = ({src, desc, section, styles}: NavItemProps) => {
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
};

const NavbarVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {type: "spring", stiffness: 300, damping: 24},
  },
  closed: {opacity: 0, y: 20, transition: {duration: 0.2}},
};

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useMainStore(
    (state: any) => [state.NavbarOpen, state.setNavbarOpen],
    shallow
  );

  return (
    // <motion.div
    //   initial={false}
    //   animate={isOpen ? "open" : "closed"}
    //   variants={{
    //     open: {x: 180},
    //     closed: {x: 0},
    //   }}
    //   transition={{duration: 0.2}}
    //   style={{originY: 0.55}}
    //   onMouseOver={() => setIsOpen(true)}
    //   onMouseOut={() => setIsOpen(false)}
    // >
    <Flex
      h="100vh"
      bg="#101318"
      border="1px solid"
      borderColor="#16181D"
      onMouseOver={() => setNavbarOpen(true)}
      onMouseOut={() => setNavbarOpen(false)}
    >
      <Flex
        direction="column"
        align="center"
        h="100%"
        px="26px"
        justify="space-between"
        width={NavbarOpen ? "240px" : "auto"}
      >
        <VStack w="100%">
          <Flex
            w="100%"
            gap="18px"
            mt="20px"
            mb="26px"
            align="center"
            minH="27px"
          >
            <Flex>
              <Image src={logo} alt="" />
            </Flex>

            <Flex
              className=".Inter"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="0.15em"
              display={NavbarOpen ? "flex" : "none"}
            >
              SINTER
            </Flex>
          </Flex>
          <VStack
            w="100%"
            gap="30px"
            fontSize="14px"
            fontWeight="600"
            color={sharedColors.navbarText}
            mt="0px !important"
          >
            <NavItem
              src={games}
              desc="Games"
              section="Games"
              styles={{
                image: {boxSize: "24px", mr: "-4px"},
              }}
            />
            <NavItem src={statistic} section="Games" desc="Statistic" />
            <NavItem src={guides} section="Games" desc="Guides" />
            <NavItem src={arena} section="Games" desc="Arena" />
          </VStack>
        </VStack>
        {/* <Flex
          py="10px"
          w="100%"
          gap="30px"
          fontSize="14px"
          fontWeight="600"
          color={sharedColors.navbarText}
        >
          <NavItem src={games} section="Games" desc="Close" />
        </Flex> */}
      </Flex>
    </Flex>
    // </motion.div>
  );
};

export default Navbar;
