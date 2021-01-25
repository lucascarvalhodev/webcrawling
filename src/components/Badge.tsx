import React from "react";
import { Link } from "react-router-dom";
import { ISearchCrawl } from "../alias/ISearchCrawl";

interface IProps {
  SearchCrawl: ISearchCrawl;
}

const Badge: React.FC<IProps> = ({ SearchCrawl }) => {
  return (
    <Link
      to={`/crawl/${SearchCrawl.id}/${SearchCrawl.keyword}`}
      className="badge-crawl"
    >
      {SearchCrawl.keyword}
    </Link>
  );
};

export default Badge;
