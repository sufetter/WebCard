import {Flex, Box} from "@chakra-ui/react";
import React, {ReactElement, ReactNode} from "react";
import {sharedColors} from "./layout";
import {ButtonDef} from "@/pages";
import Image from "next/image";
import roomsBg from "../images/roomsBg.png";
import ethereum from "../images/ethereumIcon.svg.png";

type user = {
  id: number;
  icon: string;
};

interface RoomProps {
  name: string;
  users: Array<user>;
  game: {
    value: {
      icon: string;
    };
    bet: number;
  };
}

const Room = ({name, users, game}: RoomProps) => {
  const usersRender = (): ReactNode => {
    return users.map(({id, icon}: user) => {
      if (id && icon) {
        return (
          <Flex key={id} border="0px solid" borderRadius="6px">
            {icon != undefined && (
              <Image width="30" height="30" alt={id + ""} src={icon} />
            )}
          </Flex>
        );
      } else return;
    });
  };
  return (
    <Flex w="100%" minH="30px" align="center" justify="space-between">
      <Flex
        fontWeight="700"
        fontSize="16px"
        color={sharedColors.mainText}
        className=".Inter"
        w="100%"
      >
        {name}
      </Flex>

      <Flex justify="space-between" w="100%">
        <Flex gap="5px">{usersRender()}</Flex>
        <Flex gap="3px" align="center">
          <Flex borderRadius="6px">
            <Image width="30" height="30" alt={""} src={game.value.icon} />
          </Flex>
          <Flex color={sharedColors.secondText} fontWeight="600">
            {game.bet}
          </Flex>
        </Flex>
      </Flex>

      <Flex w="100%" justify="flex-end">
        <ButtonDef
          styles={{
            w: "60px",
            h: "30px",
            bg: sharedColors.mainButton,
            color: sharedColors.mainText,
            _hover: {bg: sharedColors.mainButtonHover},
          }}
        >
          <Box>Join</Box>
        </ButtonDef>
      </Flex>
    </Flex>
  );
};

const Rooms = () => {
  const roomsRender = (number = 1) => {
    let rooms = [];
    console.log(number);
    for (let i = 0; i < number; i++) {
      rooms.push(
        <Room
          name="Aboba"
          users={[
            {id: 1, icon: roomsBg.src},
            {id: 2, icon: roomsBg.src},
          ]}
          game={{
            bet: Math.floor(Math.random() * 100) / 100,
            value: {icon: ethereum.src},
          }}
        />
      );
    }
    return rooms;
  };
  return (
    <Flex
      w="100%"
      h="382px"
      bg={sharedColors.mainBg}
      justify="space-between"
      borderBottom="1px solid"
      borderColor={sharedColors.roomsHeaderBorder}
    >
      <Flex direction="column" flex={1} h="100%">
        <Flex>
          <Flex
            w="100%"
            h="42px"
            bg={sharedColors.overviewHeaderBg}
            borderBottom="1px solid"
            borderColor={sharedColors.roomsHeaderBorder}
          >
            <Flex px="20px" w="100%" justify="space-between" align="center">
              <Flex
                fontSize="14px"
                color={sharedColors.secondText}
                fontWeight="700"
              >
                Available rooms
              </Flex>
              <Flex gap="1px" align="center">
                <ButtonDef
                  styles={{
                    h: "26px",
                    w: "100px",
                    borderRadius: "5px 0 0 5px",
                    bg: sharedColors.mainEventButton,
                    _hover: {bg: sharedColors.eventItemButtonHover},
                  }}
                >
                  <Box fontSize="14px">Updates</Box>
                </ButtonDef>
                <ButtonDef
                  styles={{
                    h: "26px",
                    w: "100px",
                    borderRadius: "0 5px 5px 0",
                    bg: sharedColors.secondEventButton,
                    _hover: {bg: sharedColors.eventItemButtonHover},
                  }}
                >
                  <Box fontSize="14px" color={sharedColors.secondText}>
                    News
                  </Box>
                </ButtonDef>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bg={sharedColors.roomsMainBg}
          my="10px"
          mx="20px"
          p="20px"
          overflowY="auto"
          direction="column"
          gap="15px"
          h="100%"
          borderRadius="6px"
        >
          {roomsRender(10)}
        </Flex>
      </Flex>

      <Flex w="380px">
        <Image
          src={roomsBg}
          style={{width: "380px", height: "382px", objectFit: "cover"}}
          alt=""
        />
      </Flex>
    </Flex>
  );
};

export default Rooms;
