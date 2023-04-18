import React, {useRef} from "react";
import Layout from "../../../components/layout";
import {Flex, Box} from "@chakra-ui/react";
import OverviewSection from "../../../components/overviewSection";
import Overview from "../../../components/overview";
import Games from "../../../components/games";
import GetInTouch from "../../../components/getInTouch";

const Game = () => {
  const linksBox = useRef<HTMLInputElement>(null);
  const changeActiveLink = (e: any) => {
    let linksArr: any = linksBox.current?.children;
    for (let i = 0; i < linksArr!.length!; i++) {
      linksArr![i].style!.color = "white";
    }
    e.target.style.color = "blue";
  };

  return (
    <>
      <main>
        <Layout headerType="lkkl">
          <Flex flex={1} w="100%" h="100%" direction="column" overflowY="auto">
            <Flex h="266px" bg="red" w="100%" direction="column">
              <Flex gap="7px">
                <Flex>adad</Flex>
                <Flex>dada</Flex>
                <Flex>dad</Flex>
              </Flex>
              <Flex>
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
              <Flex gap="10px" ref={linksBox}>
                <Flex cursor="pointer" onClick={(e) => changeActiveLink(e)}>
                  dadad
                </Flex>
                <Flex cursor="pointer" onClick={(e) => changeActiveLink(e)}>
                  adada
                </Flex>
                <Flex cursor="pointer" onClick={(e) => changeActiveLink(e)}>
                  dadad
                </Flex>
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
