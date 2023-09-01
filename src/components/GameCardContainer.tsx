import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transistion: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
