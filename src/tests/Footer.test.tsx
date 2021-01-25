import React from "react";

import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("test component footer", () => {
  test("footer", async () => {
    const brand = "Web Crawling";
    render(<Footer brand={brand} />);
    screen.getByText(`Todos os direitos reservados a ©${brand}`);
  });
});
