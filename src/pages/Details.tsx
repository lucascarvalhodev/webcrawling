import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ICrawl } from "../alias/ICrawl";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { getCrawl } from "../services/crawl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ParamTypes {
  id: string;
  keyword: string;
}

const Details: React.FC = () => {
  const [crawl, setCrawl] = useState<ICrawl | undefined>();

  const { id, keyword } = useParams<ParamTypes>();

  function init() {
    getCrawl(id).then((res) => {
      setCrawl(res.data);
    });
  }

  useEffect(init, [id]);
  return (
    <div className="page-crawl">
      <Header brand="Web Crawling" />
      <div className="flex-column-align-center-crawl">
        <div className="container-crawl card-crawl">
          <div className=" text-center-crawl mb-crawl-10 pb-crawl-10">
            Informações da Palavra
          </div>

          {!crawl ? (
            <div className="flex-column-center-crawl">
              <Loading />
            </div>
          ) : (
            <>
              <div>
                Palavra chave: <span className="text-crawl">"{keyword}"</span>
              </div>
              <div>
                Status:{" "}
                <span className="text-crawl">
                  {crawl?.status === "active"
                    ? "análise em andamento"
                    : "análise concluída"}
                </span>
              </div>
              <div>
                URLS onde a palavra chave foi encontrada:
                <ul>
                  {crawl?.urls &&
                    crawl?.urls.map((url, i) => (
                      <li key={i} className="li-crawl">
                        <a
                          className="link-crawl"
                          target="_blank"
                          rel="noreferrer"
                          href={url}
                        >
                          {url}
                        </a>
                      </li>
                    ))}
                  {crawl?.urls.length === 0 && (
                    <li className="text-crawl">nenhuma url encontrada!</li>
                  )}
                </ul>
              </div>
            </>
          )}

          <div>
            <Link to={`/`} className="btn-crawl mt-crawl-10">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-crawl-5" />
              Voltar
            </Link>
          </div>
        </div>
      </div>

      <Footer brand="Web Crawling" />
    </div>
  );
};

export default Details;
