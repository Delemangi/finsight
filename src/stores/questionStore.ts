import { create } from "zustand";

import { Question } from "../types/Question";

type QuestionStore = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],
  setQuestions: (questions: Question[]) => set({ questions }),
}));
