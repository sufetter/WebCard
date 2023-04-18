import React, {useRef, useState} from "react";
import Layout from "../../../components/layout";
import {Flex, Box} from "@chakra-ui/react";
import Overview from "../../../components/overview";
import Games from "../../../components/games";
import GetInTouch from "../../../components/getInTouch";

const LinkItem = ({linksBox, name, def}: any) => {
  const changeActiveLink = (e: any) => {
    let linksArr: any = linksBox.current?.children;
    for (let i = 0; i < linksArr!.length!; i++) {
      linksArr![i].children[0].style!.color = "#7E828B";
      linksArr![i].children[1].style!.visibility = "hidden";
    }

    e.target.parentNode.children[0].style.color = "#E2E4E9";
    e.target.parentNode.children[1].style.visibility = "visible";
  };
  return (
    <Flex direction="column" align="center" h="100%" justify="center">
      <Flex
        cursor="pointer"
        onClick={(e) => changeActiveLink(e)}
        fontWeight="600"
        fontSize="14px"
        color={def ? "#E2E4E9" : "#7E828B"}
        px="12px"
        h="100%"
        align="center"
      >
        {name}
      </Flex>
      <Flex
        visibility={def ? "visible" : "hidden"}
        h="3px"
        w="24px"
        bg="#DD364D"
        justify="flex-end"
        borderRadius="3px 3px 0 0"
        mt="-3px"
      />
    </Flex>
  );
};

const Game = () => {
  const linksBox = useRef<HTMLInputElement>(null);

  return (
    <>
      <main>
        <Layout headerType="lkkl">
          <Flex flex={1} w="100%" h="100%" direction="column" overflowY="auto">
            <Flex
              h="266px"
              bg=""
              w="100%"
              direction="column"
              justify="flex-end"
            >
              <Flex gap="7px">
                <Flex>adad</Flex>
                <Flex>dada</Flex>
                <Flex>dad</Flex>
              </Flex>
              <Flex mb="8px" mt="20px" align="center">
                <Flex
                  boxSize="120px"
                  bg="white"
                  borderRadius={8}
                  align="center"
                ></Flex>
                <Flex px="20px" h="100" justify="center" direction="column">
                  <Flex fontWeight="700">Combat Watch</Flex>
                  <Flex>jlkjkl</Flex>
                </Flex>
              </Flex>
              <Flex gap="10px" ref={linksBox} h="40px" align="center">
                <LinkItem linksBox={linksBox} name="Overview" def />
                <LinkItem linksBox={linksBox} name="Rooms" />
                <LinkItem linksBox={linksBox} name="Game Shop" />
                <LinkItem linksBox={linksBox} name="Tokens" />
              </Flex>
            </Flex>
            <Overview />
            <Games />
            <GetInTouch />
          </Flex>
        </Layout>
      </main>
    </>
  );
};

export default Game;
