import {Button, Flex, Input} from "@chakra-ui/react";
import React, {FC, useEffect, useState} from "react";
import {io} from "socket.io-client";
import ChatInput from "../../components/chatInput";

const Messages = () => {
  const [messages, setMessages]: any = useState([]);
  let srs: any = [];
  useEffect(() => {
    socket.emit("findAllMessages", {}, (res: any) => {
      if (messages != res) {
        // setMessages(res);
        srs = res;
        renderMessages();
        // console.log(res);
      }
    });
    socket.on("message", (message: any) => {
      // console.log(message);
      // console.log(messages);
      console.log(srs);

      srs = [...srs, message];
      console.log(srs);
      renderMessages();
      // setMessages(message);
    });
  }, []);
  const renderMessages = (): any => {
    const arr: any = [];
    srs.map((message: any) => {
      arr.push(
        <Flex key={Math.random()} pr="20px">
          {message.name + " : " + message.text}
        </Flex>
      );
    });
    // console.log(arr);
    setMessages(arr);
  };
  const socket = io("http://localhost:5000");

  return <Flex direction="column">{messages}</Flex>;
};

export default function Chat(): ReturnType<FC> {
  return (
    <Flex direction="column" align="center" width="70%" justify="center">
      <Messages />
      <ChatInput />
    </Flex>
  );
}
