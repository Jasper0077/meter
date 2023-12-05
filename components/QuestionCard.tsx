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
} from "@chakra-ui/react";
import { questions } from "@/data";
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
  const handleSlider = React.useCallback(
    (val: number) => {
      if (typeof val === "number" && val >= 1 && val <= 5) {
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
          <Text pt="2" fontSize="sm">
            {question}
          </Text>
          <Slider
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
          </Slider>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
