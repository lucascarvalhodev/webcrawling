import { ISearchCrawl } from "../alias/ISearchCrawl";

const KEY = "@listSearchCrawl";

export function salveListSearchCrawl(listSearchCrawl: ISearchCrawl[]) {
  localStorage.setItem(KEY, JSON.stringify(listSearchCrawl));
}

export function loadingListSearchCrawl() {
  let data = localStorage.getItem(KEY);
  if (!data) return [];
  return JSON.parse(data) as ISearchCrawl[];
}
