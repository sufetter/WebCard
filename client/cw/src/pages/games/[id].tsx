import React from "react";
import Layout from "../../../components/layout";
import {Flex, Box} from "@chakra-ui/react";

const Game = () => {
  return (
    <>
      <main>
        <Layout headerType="lkkl">
          <Flex flex={1} w="100%" h="100%">
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
            </Flex>
          </Flex>
        </Layout>
      </main>
    </>
  );
};

export default Game;
