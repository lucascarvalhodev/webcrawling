import React from "react";

import { render } from "@testing-library/react";

import Header from "../components/Header";

describe("testando component header", () => {
  test("testando se o testo passado na props é rederizado", async () => {
    const brand = "Web Crawling";
    const { getByText } = render(<Header brand={brand} />);
    getByText(brand);
  });
});
