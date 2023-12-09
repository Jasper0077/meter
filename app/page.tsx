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

function Home() {
  const router = useRouter();
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" p={6}>
      <Tabs variant="line" colorScheme="cyan">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Instruction</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack display="flex" justifyContent="center" alignItems="center">
              <Image
                src="/home.png"
                width="max-content"
                height="auto"
                alt="Home"
              />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack
              display="flex"
              justifyContent="center"
              alignItems="center"
              direction="column"
              gap="4"
            >
              <Image
                src="/instruction.png"
                width="max-content"
                height="auto"
                alt="Instruction"
              />
              <Button onClick={() => router.push("/questions")}>Start</Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}

export default Home;
