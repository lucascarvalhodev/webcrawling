import React, { createContext, useContext, useState, useEffect } from "react";
import { ISearchCrawl } from "../alias/ISearchCrawl";
import {
  loadingListSearchCrawl,
  salveListSearchCrawl,
} from "../helpers/listSearchCrawlStorage";

interface ICrawlContextData {
  listSearchCrawl: ISearchCrawl[];
  setListSearchCrawl(value: ISearchCrawl[]): void;
}

export const CrawlContext = createContext<ICrawlContextData>(
  {} as ICrawlContextData
);

export const CrawlProvider: React.FC = ({ children }) => {
  const [listSearchCrawl, setListSearchCrawl] = useState<ISearchCrawl[]>([]);

  function init() {
    setListSearchCrawl(loadingListSearchCrawl());
  }

  function salve() {
    salveListSearchCrawl(listSearchCrawl);
  }

  useEffect(init, []);
  useEffect(salve, [listSearchCrawl]);

  return (
    <CrawlContext.Provider value={{ listSearchCrawl, setListSearchCrawl }}>
      {children}
    </CrawlContext.Provider>
  );
};

export const useCrawl = () => useContext(CrawlContext);
