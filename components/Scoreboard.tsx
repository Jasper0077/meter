"use client";

import {
  Stack,
  useMediaQuery,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Card,
  CardHeader,
  Box,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { DoubleQuotes } from "./svgs/DoubleQuotes";

const renderText = (score: number) => {
  if (score >= 80) {
    return (
      <Box position="relative">
        <DoubleQuotes
          position={"absolute"}
          top="-50px"
          left="-6%"
          height={16 * 3}
          width={14 * 3}
        />
        <Heading fontSize="md">恭喜！你做得很棒! 但我们仍要提醒自己</Heading>
        <Text
          fontSize="md"
          textAlign="justify"
          sx={{ textJustify: "inter-word" }}
          my={4}
        >
          恭喜！你做得很棒! 但我们仍要提醒自己 “弟兄们,
          我不是以为自己已经得着了, 我只有一件事, 就是忘记背后, 努力面前的,
          向着标竿直跑, 要得神在基督耶稣里从上面召我来得的奖赏。”
        </Text>
        <Text fontSize="xs" fontWeight="bold" textAlign="right">
          腓3:13-14
        </Text>
      </Box>
    );
  }
  if (score >= 50) {
    return (
      <Box position="relative">
        <DoubleQuotes
          position={"absolute"}
          top="-50px"
          left="-6%"
          height={16 * 3}
          width={14 * 3}
        />
        <Heading fontSize="md">
          继续加油！学像耶稣,一起奔走成圣的路,为主做光做盐
        </Heading>
        <Text
          fontSize="md"
          textAlign="justify"
          sx={{ textJustify: "inter-word" }}
          my={4}
        >
          我们既有这许多的见证人, 如同云彩围着我们, 就当放下各样的重担,
          脱去容易缠累我们的罪, 存心忍耐, 奔那摆在我们前头的路程,
          仰望为我们信心创始成终的耶稣。
        </Text>
        <Text fontSize="xs" fontWeight="bold" textAlign="right">
          来12:1-2
        </Text>
      </Box>
    );
  }
  return (
    <Box position="relative">
      <DoubleQuotes
        position={"absolute"}
        top="-50px"
        left="-6%"
        height={16 * 3}
        width={14 * 3}
      />
      <Heading fontSize="md" mb={2}>
        不要气馁, 要记得与神建立关系, 并且相信祂会帮助你, 也永远与你同在！
      </Heading>
      <Text
        fontSize="md"
        textAlign="justify"
        sx={{ textJustify: "inter-word" }}
        my={4}
      >
        你们要常在我里面, 我也常在你们里面。枝子若不常在葡萄树上,
        自己就不能结果子；你们若不常在我里面, 也是这样。我是葡萄树,
        你们是枝子；常在我里面的, 我也常在他里面, 这人就多结果子；因为离了我,
        你们就不能作什么。
      </Text>
      <Text fontSize="xs" fontWeight="bold" textAlign="right">
        约15:4-5
      </Text>
    </Box>
  );
};

const Scoreboard = ({ score }: { score: number }) => {
  const [isDesktop] = useMediaQuery("(min-width: 480px)");
  return (
    <Card>
      <CardHeader>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Heading fontSize={isDesktop ? "lg" : "md"}>你的分数： </Heading>
          <CircularProgress
            value={score}
            size="120px"
            color={
              score >= 80 ? "green.400" : score >= 50 ? "orange.400" : "red.400"
            }
          >
            <CircularProgressLabel>{score}%</CircularProgressLabel>
          </CircularProgress>
        </Stack>
      </CardHeader>

      <CardBody>
        <Stack spacing="4">
          <Box bg="papayawhip" p={8} borderRadius={4}>
            {renderText(score)}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Scoreboard;
