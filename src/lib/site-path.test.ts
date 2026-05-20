import { describe, expect, test } from "bun:test";

import { normalizePublishedRoutePath } from "./site-path";

describe("normalizePublishedRoutePath", () => {
  test("normaliza rota simples", () => {
    expect(normalizePublishedRoutePath("meu-site")).toEqual({
      path: "/meu-site",
      error: null,
    });
  });

  test("reserva a raiz", () => {
    expect(normalizePublishedRoutePath("/")).toEqual({
      path: null,
      error: "A raiz / é reservada para o site principal.",
    });
  });

  test("bloqueia rotas reservadas", () => {
    expect(normalizePublishedRoutePath("/publicador")).toEqual({
      path: null,
      error: "Essa rota já está reservada pelo app.",
    });
  });

  test("rejeita traversal", () => {
    expect(normalizePublishedRoutePath("/../evil")).toEqual({
      path: null,
      error: "A rota não pode conter . ou ..",
    });
  });
});
