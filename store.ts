import { atom } from "jotai";
import { Question } from "./types";
import { questions } from "@/data";

export const questionsAtom = atom<Array<Question>>(questions);
