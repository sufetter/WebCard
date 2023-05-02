import React, {useState, memo} from "react";
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
import NavItem from "./navItem";
import {FaUserAlt} from "react-icons/fa";

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
      onMouseOver={() => {
        if (NavbarOpen != true) setNavbarOpen(true);
      }}
      onMouseOut={() => {
        if (NavbarOpen != false) setNavbarOpen(false);
      }}
    >
      <Flex
        direction="column"
        align="center"
        h="100%"
        justify="space-between"
        width={NavbarOpen ? "240px" : "auto"}
      >
        <VStack w="100%" px="26px">
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
        <Flex
          my="20px"
          w="100%"
          gap="30px"
          fontSize="14px"
          fontWeight="600"
          color={sharedColors.navbarText}
          boxSize="40px"
          align="center"
          justify="center"
        >
          <Flex>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="var(--shade6)"></circle>
              <path
                fill="rgb(226 228 233)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 21.001v-.579C8 18.146 13.33 17 16 17s8 1.146 8 3.422v.579A9.985 9.985 0 0 1 16 25a9.985 9.985 0 0 1-8-3.999ZM16 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
              ></path>
            </svg>
            <Flex
              position="fixed"
              boxSize="5px"
              bg="red"
              align="flex-end"
              float="right"
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    // </motion.div>
  );
};

export default memo(Navbar);
