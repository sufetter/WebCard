import React, {useState} from "react";
import {Box, VStack, Flex, Icon} from "@chakra-ui/react";
import Image from "next/image";
import logo from "./../images/logo.svg";
import games from "./../images/games_section.svg";
import {useRouter} from "next/router";
import {motion, Variants} from "framer-motion";

interface NavItemProps {
  src: any;
  desc: string;
  section: string;
}

export const NavItem = ({src, desc, section}: NavItemProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/" + section);
  };
  return (
    <Flex
      w="100%"
      align="center"
      cursor="pointer"
      gap="18px"
      onClick={handleNavigation}
      mt="0px !important"
    >
      <Flex align="center" color="white">
        <Image src={src} style={{height: "18px", width: "auto"}} alt="" />
      </Flex>

      <Flex fontWeight="600">{desc}</Flex>
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
  const [isOpen, setIsOpen] = useState(false);

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
      minW={240 + "px"}
      bg="#101318"
      border="1px solid"
      borderColor="#16181D"
    >
      <Flex
        direction="column"
        align="center"
        w="100%"
        h="100%"
        px="26px"
        justify="space-between"
      >
        <VStack w="100%">
          <Flex h="24px" w="100%" gap="18px" mt="20px" mb="26px" align="center">
            <Flex>
              <Image src={logo} alt="" />
            </Flex>

            <Flex
              className=".Inter"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="0.15em"
            >
              SINTER
            </Flex>
          </Flex>
          <VStack w="100%" gap="16px">
            <NavItem src={games} desc="Games" section="games" />
            <NavItem src={games} desc="Games" section="games" />
            <NavItem src={games} desc="Games" section="games" />
            <NavItem src={games} desc="Games" section="games" />
          </VStack>
        </VStack>
        <Flex py="10px" w="100%">
          <NavItem src={games} desc="Games" section="games" />
        </Flex>
      </Flex>
    </Flex>
    // </motion.div>
  );
};

export default Navbar;
