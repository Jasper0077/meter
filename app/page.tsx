"use client";

import {
  Button,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const images = [
  <Image src="/home.png" width="max-content" height="auto" alt="Home" />,
  <Image
    src="/instruction.png"
    width="max-content"
    height="auto"
    alt="Instruction"
  />,
];

function Home() {
  const router = useRouter();
  const [index, setIndex] = React.useState<number>(0);
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={6}
      spacing={2}
    >
      {images[index]}
      <Stack
        display="flex"
        direction={index === 0 ? "row-reverse" : "row"}
        justifyContent="space-around"
        alignItems="center"
      >
        {index === 1 && <Button onClick={() => setIndex(0)}>Previous</Button>}
        {index === 0 ? (
          <Button onClick={() => setIndex(1)} textAlign="right">
            Next
          </Button>
        ) : (
          <Button onClick={() => router.push("/questions")}>Start</Button>
        )}
      </Stack>
    </Stack>
  );
}

export default Home;
