import {Box, VStack, Flex} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import {useMainStore} from "../store/shared/sharedStore";
import {shallow} from "zustand/shallow";
import React, {useRef} from "react";

export const sharedColors = {
  mainBg: "#181A20",
  leftSectionBg: "#13151B",
  mainButton: "#DD364D",
  secondButton: "#262933",
  mainEventButton: "#353940",
  secondEventButton: "#272A30",
  mainButtonHover: "#E5596C",
  secondButtonHover: "#3C3F47",
  mainText: "#E2E4E9",
  secondText: "#999CA3",
  navbarText: "#7E828B",
  mainEventItem: "#13151B",
  eventItemButtonHover: "#454A54",
  overviewHeaderBg: "#16191E",
  overviewHeaderBorder: "",
  roomsHeaderBg: "#16191E",
  roomsHeaderBorder: "#1E2026",
  roomsMainBg: "#22272F",
};

type LayoutProps = {
  children: JSX.Element;
  headerType?: string;
};

export default function Layout({children, headerType = "main"}: LayoutProps) {
  // const a = async () => {
  //   const api = await fetch("/api/hello");
  //   const res = await api.json();
  //   console.log(res);
  // };
  // a();
  const mainSection = useRef(null);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VStack
          direction="column"
          // h="100%"
          w="100%"
          color="white"
          // maxHeight="100vh"
        >
          <Flex
            direction="row"
            w="100%"
            mt="0px !important"
            maxW="100vw"
            overflowX="hidden"
          >
            <Navbar />

            <VStack
              bg="#0E1015"
              maxH="100vh"
              flex={1}
              overflowY="auto"
              ref={mainSection}
            >
              <Flex direction="column" mt="0px !important" flex={1}>
                <Header headerType={headerType} scrollItem={mainSection} />
                <Flex mt="0px !important" flex={1}>
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </VStack>

            <Sidebar />
          </Flex>
        </VStack>
      </main>
    </>
  );
}
