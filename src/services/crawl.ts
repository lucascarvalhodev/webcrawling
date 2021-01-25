import axios from "axios";

export const createCrawl = (keyword: string) =>
  axios.post("/crawl", { keyword });

export const getCrawl = (id: string) => axios.get(`/crawl/${id}`);
