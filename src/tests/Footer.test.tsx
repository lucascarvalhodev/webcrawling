import React from "react";

import { render } from "@testing-library/react";

import Footer from "../components/Footer";

describe("testando component footer", () => {
  test("testando se o testo passado na props é rederizado", async () => {
    const brand = "Web Crawling";
    const { getByText } = render(<Footer brand={brand} />);
    getByText(`Todos os direitos reservados a ©${brand}`);
  });
});
