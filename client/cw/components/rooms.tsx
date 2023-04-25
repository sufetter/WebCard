import {Flex, Box} from "@chakra-ui/react";
import React from "react";
import {sharedColors} from "./layout";
import {ButtonDef} from "@/pages";
import Image from "next/image";
import roomsBg from "../images/roomsBg.png";

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
  return (
    <Flex w="100%" minH="30px" align="center" justify="space-between">
      <Flex
        fontWeight="700"
        fontSize="16px"
        color={sharedColors.mainText}
        className=".Inter"
      >
        {name}
      </Flex>

      {users != undefined && game != undefined && (
        <Flex>
          <Flex>
            {users != undefined &&
              users.map(({user}: any) => {
                console.log(user);
                return (
                  <Flex key={user?.id} border="0px solid" borderRadius="6px">
                    {user?.icon != undefined && (
                      <Image
                        width="30"
                        height="30"
                        alt={user.id}
                        src={user.icon}
                      />
                    )}
                  </Flex>
                );
              })}
          </Flex>
          <Flex>
            <Flex borderRadius="6px">
              <Image width="30" height="30" alt={""} src={game.value.icon} />
            </Flex>
            <Flex>{game.bet}</Flex>
          </Flex>
        </Flex>
      )}
      <Flex>
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
  return (
    <Flex w="100%" h="382px" bg={sharedColors.mainBg} justify="space-between">
      <Flex direction="column" flex={1}>
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
        >
          <Room
            name="Aboba"
            users={[{id: 1, icon: roomsBg.src}]}
            game={{bet: 1, value: {icon: roomsBg.src}}}
          />
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
