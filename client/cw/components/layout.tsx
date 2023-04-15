import {Box, VStack, Flex} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({children}: LayoutProps) {
  // const a = async () => {
  //   const api = await fetch("/api/hello");
  //   const res = await api.json();
  //   console.log(res);
  // };
  // a();
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
          h="100%"
          w="100%"
          align="stretch"
          color="white"
          maxHeight="100vh"
          overflow="hidden"
        >
          <Flex
            direction="row"
            w="100%"
            h="100%"
            flex={1}
            mt="0px !important"
            overflow="hidden"
          >
            <Navbar />
            <VStack flex={1} bg="#0E1015" h="4000px" overflow="hidden">
              <Header />
              <Flex flex={1} w="100%" mt="0px !important" overflow="scroll">
                {children}
              </Flex>
              <Footer />
            </VStack>

            <Sidebar />
          </Flex>
        </VStack>
      </main>
    </>
  );
}
