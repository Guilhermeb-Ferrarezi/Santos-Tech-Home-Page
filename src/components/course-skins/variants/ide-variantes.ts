import { AdsConteudo, AdsPublico } from "@/components/course-skins/variants/ide-ads";
import { BackendConteudo, BackendPublico } from "@/components/course-skins/variants/ide-backend";
import { FrontendConteudo, FrontendPublico } from "@/components/course-skins/variants/ide-frontend";
import { FullstackConteudo, FullstackPublico } from "@/components/course-skins/variants/ide-fullstack";
import { GitConteudo, GitPublico } from "@/components/course-skins/variants/ide-git";
import { JogosConteudo, JogosPublico } from "@/components/course-skins/variants/ide-jogos";
import { LogicaConteudo, LogicaPublico } from "@/components/course-skins/variants/ide-logica";
import { MakeConteudo, MakePublico } from "@/components/course-skins/variants/ide-make";
import { MobileConteudo, MobilePublico } from "@/components/course-skins/variants/ide-mobile";
import { N8nConteudo, N8nPublico } from "@/components/course-skins/variants/ide-n8n";
import { PythonConteudo, PythonPublico } from "@/components/course-skins/variants/ide-python";
import { PythonApisConteudo, PythonApisPublico } from "@/components/course-skins/variants/ide-python-apis";
import { SqlConteudo, SqlPublico } from "@/components/course-skins/variants/ide-sql";
import { TypescriptConteudo, TypescriptPublico } from "@/components/course-skins/variants/ide-typescript";
import type { VarianteIde } from "@/components/course-skins/variants/ide-util";

/**
 * Registro da pele IDE: `variante` do curso → cores/rótulos do hero (iguais
 * aos de antes) + os dois blocos com a metáfora da ferramenta. Cada curso tem
 * estrutura própria; nenhum reaproveita o molde de outro.
 */

const PYTHON: VarianteIde = {
  accent2: "#FFD43B",
  cm: "#",
  doc: ['"""', '"""'],
  status: ["main", "✓ 0 problemas"],
  linguagem: "Python",
  publicoRotulo: "publico_alvo.py",
  conteudoRotulo: "curso/",
  Publico: PythonPublico,
  Conteudo: PythonConteudo,
};

export const VARIANTES_IDE: Record<string, VarianteIde> = {
  python: PYTHON,

  "python-apis": {
    ...PYTHON,
    linguagem: "Python · FastAPI",
    publicoRotulo: "para_quem_e.ipynb",
    conteudoRotulo: "integracoes/",
    Publico: PythonApisPublico,
    Conteudo: PythonApisConteudo,
  },

  typescript: {
    accent2: "#C3E88D",
    cm: "//",
    doc: ["/** ", " */"],
    status: ["main", "✓ 0 erros de tipo"],
    linguagem: "TypeScript",
    publicoRotulo: "publico-alvo.ts",
    conteudoRotulo: "curso.d.ts",
    Publico: TypescriptPublico,
    Conteudo: TypescriptConteudo,
  },

  frontend: {
    accent2: "#C3E88D",
    cm: "<!--",
    doc: ["<!-- ", " -->"],
    status: ["main", "✓ build ok"],
    linguagem: "HTML · CSS · JS",
    publicoRotulo: "localhost:5173/para-quem-e",
    conteudoRotulo: "DevTools · Elements",
    Publico: FrontendPublico,
    Conteudo: FrontendConteudo,
  },

  backend: {
    accent2: "#C3E88D",
    cm: "//",
    doc: ["/** ", " */"],
    status: ["main", "✓ 0 erros"],
    linguagem: "Node.js · API REST",
    publicoRotulo: "logs do servidor",
    conteudoRotulo: "/docs · OpenAPI",
    Publico: BackendPublico,
    Conteudo: BackendConteudo,
  },

  fullstack: {
    accent2: "#C3E88D",
    cm: "//",
    doc: ["/** ", " */"],
    status: ["main", "✓ front + api ok"],
    linguagem: "React · Node.js",
    publicoRotulo: "a pilha inteira",
    conteudoRotulo: "front → api → banco",
    Publico: FullstackPublico,
    Conteudo: FullstackConteudo,
  },

  mobile: {
    accent2: "#C3E88D",
    cm: "//",
    doc: ["/** ", " */"],
    status: ["main", "✓ iOS · Android"],
    linguagem: "React Native",
    publicoRotulo: "onboarding do app",
    conteudoRotulo: "app/telas/",
    Publico: MobilePublico,
    Conteudo: MobileConteudo,
  },

  jogos: {
    accent2: "#7CE38B",
    cm: "//",
    doc: ["/// ", ""],
    status: ["main", "▶ 60 fps"],
    linguagem: "C# · GDScript",
    publicoRotulo: "selecao_de_personagem.tscn",
    conteudoRotulo: "mapa_do_mundo.tscn",
    Publico: JogosPublico,
    Conteudo: JogosConteudo,
  },

  sql: {
    accent2: "#F7A541",
    cm: "--",
    doc: ["-- ", ""],
    status: ["main", "✓ conectado"],
    linguagem: "SQL · PostgreSQL",
    publicoRotulo: "publico_alvo.sql",
    conteudoRotulo: "diagrama ER",
    Publico: SqlPublico,
    Conteudo: SqlConteudo,
  },

  git: {
    accent2: "#F4845F",
    cm: "#",
    doc: ["# ", ""],
    status: ["main", "✓ tudo salvo"],
    linguagem: "Git · GitHub",
    publicoRotulo: "pull request #42",
    conteudoRotulo: "git log --graph",
    Publico: GitPublico,
    Conteudo: GitConteudo,
  },

  logica: {
    accent2: "#FFD166",
    cm: "//",
    doc: ["// ", ""],
    status: ["passo a passo", "✓ sem erros"],
    linguagem: "Portugol",
    publicoRotulo: "fluxograma",
    conteudoRotulo: "blocos de montar",
    Publico: LogicaPublico,
    Conteudo: LogicaConteudo,
  },

  ads: {
    accent2: "#FFD43B",
    cm: "#",
    doc: ["# ", ""],
    status: ["main", "✓ trilha completa"],
    linguagem: "Curso de ADS",
    publicoRotulo: "personas.md",
    conteudoRotulo: "roadmap do curso",
    Publico: AdsPublico,
    Conteudo: AdsConteudo,
  },

  n8n: {
    accent2: "#FF7A98",
    cm: "//",
    doc: ["“", "”"],
    status: ["● ativo", "✓ 0 erros"],
    linguagem: "n8n · no-code",
    publicoRotulo: "Workflow · para quem é",
    conteudoRotulo: "Workflows",
    Publico: N8nPublico,
    Conteudo: N8nConteudo,
  },

  make: {
    accent2: "#B98CFF",
    cm: "//",
    doc: ["“", "”"],
    status: ["● ativo", "✓ 0 erros"],
    linguagem: "Make · no-code",
    publicoRotulo: "Cenário · para quem é",
    conteudoRotulo: "Cenários",
    Publico: MakePublico,
    Conteudo: MakeConteudo,
  },
};
