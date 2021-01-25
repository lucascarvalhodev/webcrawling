import React from "react";

import { render, screen } from "@testing-library/react";

import Header from "../components/Header";

describe("test component header", () => {
  test("header", async () => {
    const brand = "Web Crawling";
    render(<Header brand={brand} />);
    screen.getByText(brand);
  });
});
