import {ButtonDef} from "@/pages";
import {Flex, Box} from "@chakra-ui/react";
import React from "react";
import {sharedColors} from "./layout";
import logo from "../images/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <Flex minH="396px" w="100%" bg="#13151B" justify="center">
      <Flex w="1000px" direction="column" flex={1} py="64px">
        <Flex w="100%" justify="space-between">
          <Flex direction="column" w="250px" gap="40px">
            <Flex align="center" gap="8px">
              <Image width="26" height="32" src={logo.src} alt="" />
              <Flex
                className=".Inter"
                fontSize="18px"
                fontWeight="700"
                letterSpacing="0.15em"
              >
                SINTER
              </Flex>
            </Flex>
            <Flex gap="12px" direction="column">
              <ButtonDef
                styles={{
                  bg: sharedColors.mainButton,
                  _hover: {bg: sharedColors.mainButtonHover},
                }}
              >
                <Box color={sharedColors.mainText}>Download Worzell</Box>
              </ButtonDef>
              <ButtonDef
                styles={{
                  bg: sharedColors.secondButton,
                  _hover: {bg: sharedColors.secondButtonHover},
                }}
              >
                <Box color={sharedColors.secondText}>Binance partner</Box>
              </ButtonDef>
            </Flex>
          </Flex>
          <Flex w="550px" justify="space-between">
            <Flex direction="column">
              <Flex
                color={sharedColors.secondText}
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Our games
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                color={sharedColors.mainText}
                lineHeight="28px"
              >
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  League of Knights
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Combat Watch
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Shadow Hunter
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Cyber Flame
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Just a Tavern
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex
                color={sharedColors.secondText}
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Our games
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                color={sharedColors.mainText}
                lineHeight="28px"
              >
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  League of Knights
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Combat Watch
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Shadow Hunter
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Cyber Flame
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Just a Tavern
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Flex
                color={sharedColors.secondText}
                fontSize="12px"
                fontWeight="500"
                textTransform="uppercase"
                letterSpacing="1.5px"
                pb="10px"
              >
                Our games
              </Flex>
              <Flex
                direction="column"
                fontWeight="600"
                fontSize="16px"
                color={sharedColors.mainText}
                lineHeight="28px"
              >
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  League of Knights
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Combat Watch
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Shadow Hunter
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Cyber Flame
                </Flex>
                <Flex
                  cursor="pointer"
                  _hover={{color: sharedColors.secondText}}
                >
                  Just a Tavern
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          justify="space-between"
          align="flex-end"
          h="100%"
          color="#999CA3"
          fontSize="14px"
        >
          <Flex gap="25px">
            <Flex cursor="pointer">Made with love by Lobunets Daniil</Flex>
            <Flex cursor="pointer">English</Flex>
          </Flex>
          <Flex gap="25px">
            <Flex cursor="pointer">Terms of use</Flex>
            <Flex cursor="pointer">Privacy Policy</Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
