import { config } from "@config/config";

export const getUrl = (scraperType: string) =>
  `${config.BASE_URL}/get/${scraperType}`;

export const listUrl = () => `${config.BASE_URL}/list`;

export const questionsUrl = () => `${config.BASE_URL}/questions`;
