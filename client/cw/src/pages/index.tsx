import {Box, HStack, Flex, Button} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Tilt from "react-parallax-tilt";
import {useRouter} from "next/router";
import Games from "../../components/games";
import GetInTouch from "../../components/getInTouch";

interface CardProps {
  styles?: object;
  src?: string;
  desc?: string;
  section?: string;
}

export const Card = ({styles, src, desc, section = "games"}: CardProps) => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push("/" + path);
  };
  return (
    <Flex direction="column">
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <Box
          w="190px"
          h="220px"
          bg="red"
          border="0ps"
          borderRadius={8}
          transition="border-color 1s"
          _hover={{border: "3px solid #6A717E"}}
          {...styles}
          onClick={() => handleNavigation(section)}
        ></Box>
      </Tilt>
      <Flex mt="5px">{desc}</Flex>
    </Flex>
  );
};

interface ButtonProps {
  styles?: object;
  children?: JSX.Element;
  section?: string;
}

export const ButtonDef = ({styles, children, section = "/"}: ButtonProps) => {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push("/" + path);
  };
  return (
    <Button
      // variant="unstyled"
      color="white"
      bg="gray"
      alignContent="center"
      {...styles}
      onClick={() => handleNavigation(section)}
    >
      {children}
    </Button>
  );
};

export default function Home() {
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
          <Flex direction="column" align="center" flex={1}>
            <Flex direction="column" w="1000px">
              <Games />
              <Flex direction="column">
                <Flex>fsfs</Flex>
                <Flex justify="space-between" flexWrap="wrap" mb="72px">
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                  <Card styles={{h: "400px", w: "326px", mb: "8px"}} />
                </Flex>
              </Flex>
            </Flex>
            <GetInTouch />
          </Flex>
        </Layout>
      </main>
    </>
  );
}
