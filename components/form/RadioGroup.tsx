import React from "react";

import { Grid, GridItem, Radio, RadioGroup } from "@chakra-ui/react";
import { Question } from "@/types";
import { cloneDeep } from "lodash";

interface Props {
  selectedIndex: number;
  questions: Array<Question>;
  setQuestions: (questions: Array<Question>) => void;
  point: number;
}

const FormRadioGroup = ({
  selectedIndex,
  questions,
  setQuestions,
  point,
}: Props) => {
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
  return (
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
  );
};

export default FormRadioGroup;
