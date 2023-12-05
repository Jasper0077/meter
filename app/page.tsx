"use client";

import {
  Button,
  ChakraProvider,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import { questions as questionsData } from "@/data";
import QuestionCard from "@/components/QuestionCard";
import React from "react";
import { Question } from "@/types";
import { atom, useAtom } from "jotai";
import { questionsAtom } from "@/store";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [questions, setQuestions] = useAtom(questionsAtom);

  React.useEffect(() => {
    console.log(selectedIndex);
  });

  React.useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <ChakraProvider>
      <main>
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          padding={4}
        >
          <GridItem rowSpan={1} colSpan={3} mt="25%">
            <QuestionCard
              questions={questions}
              setQuestions={setQuestions}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </GridItem>
          <GridItem colSpan={3} mt={2}>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button onClick={() => setSelectedIndex(selectedIndex - 1)}>
                Previous
              </Button>
              <Button onClick={() => setSelectedIndex(selectedIndex + 1)}>
                Next
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </main>
    </ChakraProvider>
  );
}
