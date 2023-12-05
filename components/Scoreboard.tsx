"use client";

import {
  Stack,
  useMediaQuery,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from "react";

const Scoreboard = ({ score }: { score: number }) => {
  const [isDesktop] = useMediaQuery("(min-width: 480px)");
  return (
    <Stack
      display="flex"
      direction="row"
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={isDesktop ? "lg" : "sm"}>Your score: </Text>
      <CircularProgress
        value={score}
        color={
          score >= 80 ? "green.400" : score >= 50 ? "orange.400" : "red.400"
        }
      >
        <CircularProgressLabel>{score}%</CircularProgressLabel>
      </CircularProgress>
    </Stack>
  );
};

export default Scoreboard;
