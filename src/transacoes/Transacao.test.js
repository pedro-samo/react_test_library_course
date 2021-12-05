import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Componente de Transação do Extrato", () => {
  it("O Snapshot do componente sempre deve permanecer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="09/08/2020" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
