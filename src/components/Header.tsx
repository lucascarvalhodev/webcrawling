import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faSpider } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCrawl } from "../contexts/CrawlContext";

interface IProps {
  brand: string;
}

const Header: React.FC<IProps> = ({ brand }) => {
  const { setListSearchCrawl } = useCrawl();

  function clearState() {
    setListSearchCrawl([]);
  }

  return (
    <div className="header-crawl">
      <div className="title-crawl">
        <FontAwesomeIcon icon={faSpider} className="mr-crawl-5" />
        {brand}
      </div>
      <div className="mobile-hidden">
        <button className="btn-crawl" onClick={clearState}>
          <FontAwesomeIcon
            icon={faEraser}
            className="mr-crawl-5"
            data-testid="clear_history"
          />
          Limpar Histórico
        </button>
      </div>
    </div>
  );
};

export default Header;
