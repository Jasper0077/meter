"use client";

import {
  Text,
  Button,
  Divider,
  Grid,
  GridItem,
  Stack,
  Heading,
  Box,
} from "@chakra-ui/react";
import QuestionCard from "@/components/QuestionCard";
import React from "react";
import { useAtom } from "jotai";
import { questionsAtom } from "@/store";
import ReactToPrint from "react-to-print";
import { format } from "date-fns";

export default function Questions() {
  const ref = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [questions, setQuestions] = useAtom(questionsAtom);
  const [print, setPrint] = React.useState<boolean>(false);

  const handleAfterPrint = () => {
    setPrint(false);
  };

  React.useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <Stack divider={<Divider />}>
      <Grid
        templateRows="repeat(4, 0.25fr)"
        templateColumns="repeat(3, 0.33fr)"
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
        {selectedIndex <= 19 && (
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
        )}
        {selectedIndex >= 20 && (
          <GridItem colSpan={3} textAlign="right">
            <ReactToPrint
              bodyClass="print-agreement"
              content={() => ref.current}
              onBeforePrint={() => setPrint(true)}
              onAfterPrint={() => setPrint(false)}
              trigger={() => (
                <Button onClick={() => setPrint(true)}>Download</Button>
              )}
            />
          </GridItem>
        )}
      </Grid>
      <Box className="onlyPrint">
        <Stack
          ref={ref}
          display={"flex"}
          justifyContent="start"
          alignItems="start"
          padding={4}
          spacing={1}
        >
          <Heading fontSize="md">{`${format(
            new Date(),
            "yyyy-MM-dd"
          )} - 属灵检测`}</Heading>
          {questions.map(({ question, point }, index) => {
            return (
              <Stack direction="row" justifyContent="space-between">
                <Text textAlign="left" fontSize="md">
                  {index + 1}. {" " + question}
                </Text>
                <Text textAlign="right" fontSize="md" fontWeight="bold">
                  {point}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}
