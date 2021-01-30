import React from "react";

import { render, fireEvent, waitFor } from "@testing-library/react";

import BoxInput from "../components/BoxInput";

describe("testando component boxinput", () => {
  test("testando se o input é obrigatorio", async () => {
    const handleSubmit = jest.fn();

    const { getByTestId, getByText } = render(
      <BoxInput onSubmit={handleSubmit} />
    );

    const input = getByTestId("keyword") as HTMLInputElement;
    const button = getByTestId("btn-submit");

    const valueTest = "";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    getByText("O campo é requerido!");

    expect(handleSubmit).not.toBeCalled();
  });

  test("testando se o input é maior ou igual a 4", async () => {
    const handleSubmit = jest.fn();

    const { getByTestId, getByText } = render(
      <BoxInput onSubmit={handleSubmit} />
    );

    const input = getByTestId("keyword") as HTMLInputElement;
    const button = getByTestId("btn-submit");

    let valueTest = "tes";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    getByText("A palavra deve conter no mínimo 4 caracteres!");

    expect(handleSubmit).not.toBeCalled();

    valueTest = "test";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    expect(handleSubmit).toBeCalled();
  });

  test("testando se o input é menor ou igual a 32", async () => {
    const handleSubmit = jest.fn();

    const { getByTestId, getByText } = render(
      <BoxInput onSubmit={handleSubmit} />
    );

    const input = getByTestId("keyword") as HTMLInputElement;
    const button = getByTestId("btn-submit");

    let valueTest = "testetestetestetestetestetestetes";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    getByText("A palavra deve conter no máximo 32 caracteres!");

    expect(handleSubmit).not.toBeCalled();

    valueTest = "testetestetestetestetestetestete";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    expect(handleSubmit).toBeCalled();
  });

  test("testando o retorno da chamada onSubmit", async () => {
    const handleSubmit = jest.fn();

    const { getByTestId } = render(<BoxInput onSubmit={handleSubmit} />);

    const input = getByTestId("keyword") as HTMLInputElement;
    const button = getByTestId("btn-submit");

    const valueTest = "test";

    await waitFor(async () =>
      fireEvent.change(input, { target: { value: valueTest } })
    );

    expect(input.value).toBe(valueTest);

    await waitFor(async () => fireEvent.click(button));

    expect(handleSubmit).toBeCalled();
    expect(handleSubmit).toHaveBeenCalledWith(valueTest);
  });
});
