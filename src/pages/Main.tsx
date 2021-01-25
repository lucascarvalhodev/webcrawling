import React, { useState } from "react";
import Badge from "../components/Badge";
import BoxInput from "../components/BoxInput";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { useCrawl } from "../contexts/CrawlContext";
import { createCrawl } from "../services/crawl";

const Main: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { listSearchCrawl, setListSearchCrawl } = useCrawl();

  function newKeyword(keyword: string) {
    setLoading(true);
    createCrawl(keyword)
      .then((res) => {
        setListSearchCrawl([
          ...listSearchCrawl,
          {
            id: res.data.id,
            keyword,
          },
        ]);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <div className="page-crawl">
      <Header brand="Web Crawling" />
      <div className="flex-column-align-center-crawl">
        <div className="container-crawl card-crawl">
          <BoxInput onSubmit={newKeyword} />

          <div className="sub-text-crawl text-center-crawl mt-crawl-10 mb-crawl-10 pt-crawl-10">
            Histórico de palavras chaves já pesquisadas
          </div>

          {error ? (
            <div className="sub-text-crawl text-center-crawl text-error-crawl mt-crawl-10 mb-crawl-10 pt-crawl-10">
              Erro, tente novamente mais tarde!
            </div>
          ) : (
            <>
              {loading ? (
                <div className="flex-column-center-crawl">
                  <Loading />
                </div>
              ) : (
                <div className="badge-box">
                  {listSearchCrawl.length !== 0 ? (
                    listSearchCrawl.map((searchCrawl, i) => (
                      <Badge key={i} SearchCrawl={searchCrawl} />
                    ))
                  ) : (
                    <div className="box-empty">Lista vazia</div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer brand="Web Crawling" />
    </div>
  );
};

export default Main;
