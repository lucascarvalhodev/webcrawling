import React from "react";

import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BoxInput from "../components/BoxInput";

describe("test component boxinput", () => {
  test("boxinput", async () => {
    const handleSubmit = jest.fn();

    const { rerender } = render(<BoxInput onSubmit={handleSubmit} />);

    userEvent.type(screen.getByTestId("keyword"), "");
    await act(async () => userEvent.click(screen.getByTestId("btn-submit")));
    screen.getByText("O campo é requerido!");

    rerender(<BoxInput onSubmit={handleSubmit} />);

    userEvent.type(screen.getByTestId("keyword"), "tes");
    await act(async () => userEvent.click(screen.getByTestId("btn-submit")));
    screen.getByText("A palavra deve conter no mínimo 4 caracteres!");

    rerender(<BoxInput onSubmit={handleSubmit} />);

    userEvent.type(
      screen.getByTestId("keyword"),
      "testetestetestetestetestetesteteste"
    );
    await act(async () => userEvent.click(screen.getByTestId("btn-submit")));
    screen.getByText("A palavra deve conter no máximo 32 caracteres!");

    rerender(<BoxInput onSubmit={handleSubmit} />);

    userEvent.type(screen.getByTestId("keyword"), "test");
    await act(async () => userEvent.click(screen.getByTestId("btn-submit")));
  });
});
