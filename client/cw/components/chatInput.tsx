import {Button, Flex, Input} from "@chakra-ui/react";
import React, {FC, useEffect, useState} from "react";
import {io} from "socket.io-client";

const ChatInput = () => {
  const socket = io("http://localhost:5000");

  const [text, setText] = useState("");
  const sendMessage = () => {
    socket.emit("createMessage", {text: text}, (res: any) => {
      setText("");
    });
  };
  return (
    <Flex>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          sendMessage();
        }}
      >
        Click
      </Button>
    </Flex>
  );
};

export default ChatInput;
