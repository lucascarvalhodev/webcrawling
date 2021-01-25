import React from "react";
import { CrawlProvider } from "./CrawlContext";

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <CrawlProvider>
      <>{children}</>
    </CrawlProvider>
  );
};

export default GlobalProvider;
