import {Box, VStack, Flex} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Layout from "../../components/layout";

type LayoutProps = {
  children: JSX.Element;
};

export default function Home({children}: LayoutProps) {
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
        <Layout>
          <VStack h="4000" w="100%">
            <Box bg="red">jkbkb</Box>
          </VStack>
        </Layout>
      </main>
    </>
  );
}
