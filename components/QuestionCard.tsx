import {
  Card,
  Heading,
  CardBody,
  Stack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { Question } from "@/types";
import { cloneDeep } from "lodash";
import Scoreboard from "./Scoreboard";

interface Props {
  questions: Array<Question>;
  setQuestions: (questions: Array<Question>) => void;
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
}

const QuestionCard = ({
  questions,
  setQuestions,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);
  const { id, question, point } = React.useMemo(() => {
    if (selectedIndex >= 0 && selectedIndex <= 19)
      return questions[selectedIndex];
    else return { id: undefined, question: undefined, point: undefined };
  }, [questions, selectedIndex]);
  const score = React.useMemo(
    () => questions.reduce((score: number, { point }) => score + point, 0),
    [questions]
  );
  const handleChecked = React.useCallback(
    (val: number) => {
      if (val >= 1 && val <= 5) {
        const copy = cloneDeep(questions);
        copy[selectedIndex].point = val;
        setQuestions(copy);
      }
    },
    [selectedIndex, questions]
  );

  if (selectedIndex < 0) return <Text>Start</Text>;
  if (!id || !question || !point) return <Scoreboard score={score} />;
  return (
    <Card bg="papayawhip" minHeight={150}>
      <CardBody>
        <Stack display="flex" alignItems="center" justifyContent="center">
          <Heading size="xs" textTransform="uppercase">
            {`Question: ${id}`}
          </Heading>
          <Text pt="2" fontSize="md">
            {question}
          </Text>
          {/* <Slider
            aria-label="slider-ex-6"
            onChange={handleSlider}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            value={point}
            max={5}
            min={1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="blue.500"
              color="white"
              placement="bottom"
              isOpen={showTooltip}
              label={`${point}`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider> */}
          <RadioGroup>
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
              padding={4}
            >
              <GridItem>
                <Radio
                  colorScheme="gray"
                  isChecked={point === 1}
                  onChange={(event) => {
                    if (event.target.checked) {
                      handleChecked(1);
                    }
                  }}
                >
                  1 - 极度不赞同
                </Radio>
              </GridItem>
              <GridItem>
                <Radio
                  colorScheme="gray"
                  isChecked={point === 2}
                  onChange={(event) => {
                    if (event.target.checked) {
                      handleChecked(2);
                    }
                  }}
                >
                  2 - 不赞同
                </Radio>
              </GridItem>
              <GridItem>
                <Radio
                  colorScheme="gray"
                  isChecked={point === 3}
                  onChange={(event) => {
                    if (event.target.checked) {
                      handleChecked(3);
                    }
                  }}
                >
                  3 - 有时
                </Radio>
              </GridItem>
              <GridItem>
                <Radio
                  colorScheme="gray"
                  isChecked={point === 4}
                  onChange={(event) => {
                    if (event.target.checked) {
                      handleChecked(4);
                    }
                  }}
                >
                  4 - 赞同
                </Radio>
              </GridItem>
              <GridItem>
                <Radio
                  colorScheme="gray"
                  isChecked={point === 5}
                  onChange={(event) => {
                    if (event.target.checked) {
                      handleChecked(5);
                    }
                  }}
                >
                  5 - 极度赞同
                </Radio>
              </GridItem>
            </Grid>
          </RadioGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
