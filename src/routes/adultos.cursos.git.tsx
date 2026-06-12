import { createFileRoute } from "@tanstack/react-router"
import { AdultosCursosPage } from "@/components/adultos-course-page"
import type { CourseData } from "@/components/adultos-course-page"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { pageMeta } from "@/lib/seo"

export const Route = createFileRoute("/adultos/cursos/git")({
  component: GitPage,
  head: () =>
    pageMeta({
      title: "Curso de Git e GitHub para Profissionais em Ribeirão Preto — Santos Tech",
      description:
        "Aprenda Git do zero: commits, branches, merge, pull requests e GitHub. Curso presencial em Ribeirão Preto para devs e profissionais que querem trabalhar em equipe com código.",
      path: "/adultos/cursos/git",
    }),
})

const COURSE_DATA: CourseData = {
  nome: "Git e GitHub para Profissionais",
  categoria: "Programação",
  tagline: "Controle versões, colabore em equipe e nunca mais perca código",
  targetAudience: [
    "Você está aprendendo programação e ainda salva código como 'projeto_final_v3_AGORA_VAI.zip'",
    "Você trabalha em equipe e já perdeu horas resolvendo conflito de código enviado pelo WhatsApp",
    "Você quer entrar no mercado de desenvolvimento e sabe que todo processo seletivo exige um GitHub ativo",
    "Você é dev júnior e se sente perdido quando o time fala em branch, rebase, squash ou cherry-pick",
    "Você faz freelance e quer versionar seus projetos com segurança antes de entregar ao cliente",
    "Você nunca usou linha de comando e quer dominar Git no terminal antes de depender de interfaces gráficas",
  ],
  tiers: [
    {
      label: "Essencial",
      levelName: "Essencial",
      totalHours: "24h",
      outcome:
        "Versionar projetos com Git, trabalhar com branches, resolver conflitos e colaborar em repositórios reais no GitHub com pull requests e code review",
      modules: [
        {
          title: "Fundamentos do Git e Controle de Versão",
          topics: [
            "O que é controle de versão e por que todo dev precisa de Git",
            "Instalando o Git no Windows, macOS e Linux e configurando user.name e user.email",
            "Entendendo o repositório local: working tree, staging area (index) e histórico",
            "git init e git clone: criando e copiando repositórios na prática",
            "git status e git log: inspecionando o estado do projeto e o histórico de commits",
            "Configurando o editor padrão (VS Code) e o arquivo .gitconfig global",
          ],
        },
        {
          title: "Commits e Histórico",
          topics: [
            "git add e git commit: adicionando arquivos ao stage e gravando snapshots",
            "Escrevendo mensagens de commit profissionais com Conventional Commits (feat, fix, chore, docs)",
            "git diff: comparando working tree, staging area e commits anteriores",
            ".gitignore: ignorando node_modules, .env, arquivos de build e segredos",
            "git restore e git reset --soft/--mixed/--hard: desfazendo alterações com segurança",
            "git commit --amend: corrigindo o último commit antes do push",
          ],
        },
        {
          title: "Branches e Fluxo de Trabalho",
          topics: [
            "O que são branches e por que isolar funcionalidades em ramificações separadas",
            "git branch, git switch e git checkout: criando, listando e trocando de branch",
            "git merge --no-ff vs fast-forward: diferenças práticas e quando usar cada um",
            "Resolvendo conflitos de merge no VS Code com o editor de conflitos visual",
            "git stash: guardando trabalho inacabado para trocar de branch sem perder código",
            "Estratégias de branching: GitHub Flow e trunk-based development para times pequenos",
          ],
        },
        {
          title: "GitHub: Repositórios Remotos e Colaboração",
          topics: [
            "Criando uma conta e um repositório público/privado no GitHub",
            "git remote add origin, git push -u origin main e git pull: sincronizando local e remoto",
            "Autenticação segura com SSH key e Personal Access Token (PAT)",
            "Fork e clone: contribuindo para projetos open source sem acesso direto ao repositório",
            "Pull Requests: abrindo, descrevendo, revisando e aprovando um PR com code review",
            "Issues, labels e milestones: organizando tarefas e bugs diretamente no GitHub",
          ],
        },
        {
          title: "Boas Práticas e Projeto Final",
          topics: [
            "git rebase interativo (-i): reorganizando, unindo (squash) e editando commits antes do merge",
            "git cherry-pick: aplicando commits específicos de uma branch em outra",
            "git tag: marcando versões de release com tags semânticas (v1.0.0)",
            "GitHub Actions básico: criando um workflow de CI para rodar testes automaticamente a cada push",
            "Protegendo branches no GitHub: regras de proteção, obrigatoriedade de PR e status checks",
            "Projeto final: repositório real com histórico limpo, README, .gitignore e um PR completo revisado",
          ],
        },
      ],
      tools: [
        "Git",
        "GitHub",
        "VS Code",
        "GitHub CLI (gh)",
        "GitHub Actions",
        "GitLens (extensão VS Code)",
      ],
    },
  ],
}

function GitPage() {
  return <AdultosCursosPage course={COURSE_DATA} whatsappUrl={WHATSAPP_URL.courses} />
}
