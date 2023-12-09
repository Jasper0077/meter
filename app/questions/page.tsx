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
import { useRouter } from "next/navigation";

export default function Questions() {
  const router = useRouter();
  const ref = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [questions, setQuestions] = useAtom(questionsAtom);

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
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
            >
              {selectedIndex >= 1 ? (
                <Button onClick={() => setSelectedIndex(selectedIndex - 1)}>
                  Previous
                </Button>
              ) : (
                <Button onClick={() => router.push("/")}>Home</Button>
              )}
              <Button
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                textAlign="right"
              >
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
              trigger={() => <Button>Download</Button>}
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
              <Stack direction="row" justifyContent="space-between" key={index}>
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
