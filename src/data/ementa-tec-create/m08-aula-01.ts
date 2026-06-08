import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Construct 3",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Construct 3 como um motor de jogos que permite criar jogos 2D sem precisar programar, explorando a interface e criando o primeiro projeto em branco salvo na nuvem.`,
  descricao: `Esta é a primeira aula do mês dedicado ao Construct 3, e o grande objetivo é a descoberta. Os alunos já modelaram em 3D e desenharam em pixel art nos meses anteriores; agora vão conhecer a ferramenta que transforma essas peças em um jogo de verdade, que se mexe e responde aos comandos. O Construct 3 é um motor de jogos (game engine) que roda direto no navegador, sem instalação pesada, e permite montar jogos completos usando blocos visuais de regras, sem digitar uma única linha de código tradicional. Para um adolescente, perceber que dá para fazer um jogo apertando botões e arrastando peças é um momento muito motivador.

Nesta aula o foco é entender a lógica de um motor de jogos e se orientar dentro da tela. O aluno aprende que um jogo no Construct 3 é organizado em duas grandes ideias: o Layout, que é o palco onde os objetos ficam (o cenário, os personagens, os botões), e a Event Sheet, que é a folha de regras onde decidimos o que acontece quando algo ocorre. Layout é o que se vê; Event Sheet é o que pensa. Essa separação entre o visual e as regras é a base de tudo que vem nas próximas sete aulas.

O professor vai apresentar a interface com calma, mostrando as três regiões mais importantes: o Layout no centro (a área grande de trabalho), a Project Bar (a barra de projeto, que lista tudo que existe no jogo, como uma árvore de pastas) e a barra de Properties (Propriedades), que mostra os ajustes do que estiver selecionado. Não é preciso decorar tudo; a meta é o aluno saber onde estão essas áreas e para que servem, como quem aprende onde ficam os cômodos de uma casa nova.

Ao final, cada aluno cria seu próprio projeto em branco (New project, modelo Blank) e salva na nuvem (Save to cloud, no Google Drive ou na conta do Construct), garantindo que nada se perca. Esse projeto vazio é a semente do joguinho que será o entregável do mês. Aqui não montamos cenário nem regras ainda; plantamos a base, conhecemos o território e saímos da aula com um projeto nosso, nomeado e salvo, pronto para crescer nas próximas semanas.`,
  materiais: [
    `Computadores ligados, um por aluno, com um navegador atualizado (Chrome ou Edge) e o Construct 3 já aberto no site editor.construct.net, com a conta da escola logada (deixe pronto antes da aula para não perder tempo com login).`,
    `Projetor ou TV grande conectado ao computador do professor, para todos acompanharem a demonstração da interface.`,
    `Um projeto de exemplo já criado pelo professor (um joguinho simples, mesmo que de outra fonte) só para mostrar como fica um jogo pronto rodando no botão Preview.`,
    `Acesso à internet estável, pois o Construct 3 roda no navegador e o salvamento na nuvem depende da conexão.`,
    `Uma conta de nuvem disponível por aluno (Google Drive ou conta gratuita do Construct) para o salvamento, configurada com antecedência.`,
    `Cartaz ou slide com o mapa da interface, destacando Layout, Project Bar e Properties Bar, para apontar durante a explicação.`,
    `Lista com os nomes dos alunos e a sugestão de nome de projeto de cada um, para padronizar e facilitar achar depois.`,
  ],
  conceitosChave: [
    `Motor de jogos (game engine) — programa que junta as peças de um jogo (imagens, sons, regras) e faz tudo funcionar; o Construct 3 é um motor que roda no navegador.`,
    `Construct 3 — ferramenta de criação de jogos 2D que funciona sem programar, montando regras com blocos visuais em vez de código digitado.`,
    `Layout — o palco do jogo, a área grande no centro da tela onde colocamos os objetos visuais como cenário, personagens e botões.`,
    `Event Sheet (folha de eventos) — a folha de regras do jogo, onde decidimos o que acontece quando algo ocorre; é o lado que pensa, separado do que se vê.`,
    `Project Bar (barra de projeto) — o painel lateral que lista tudo que existe no jogo, como uma árvore de pastas com Layouts, Event Sheets e objetos.`,
    `Properties Bar (barra de propriedades) — o painel que mostra e ajusta as características do item selecionado, como nome, tamanho e posição.`,
    `Salvar na nuvem (Save to cloud) — guardar o projeto na internet (Google Drive ou conta do Construct) para não perder o trabalho e poder abrir em qualquer computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Construct 3 para dar esta aula. O Construct 3 roda no navegador, no endereço editor.construct.net, e a versão gratuita já basta para começar. Antes da aula, faça login com a conta da escola e crie um projeto de teste para conhecer o caminho. Memorize três regiões da tela: no centro fica o Layout (o palco); à direita normalmente fica a Project Bar (barra de projeto, em árvore) e logo abaixo a Properties Bar (propriedades); no topo fica a barra de menus e o botão Menu (as três linhas, o hambúrguer) à esquerda. Guarde também dois nomes que vão se repetir o mês todo: Layout, o que se vê, e Event Sheet, as regras. O botão Preview (o ícone de play, no canto superior direito) roda o jogo. Teste salvar com Menu, Project, Save as, Save to cloud para conhecer o fluxo na conta da sua escola.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma perto do projetor. Pergunte quais jogos eles gostam e o que esses jogos têm em comum (personagem que anda, pontos, inimigos). Diga que neste mês cada um vai criar o próprio jogo 2D, e que a ferramenta se chama Construct 3, um motor de jogos onde a gente cria sem precisar programar. Mostre, no seu projeto de exemplo, o botão Preview rodando um joguinho, só para encantar.

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, abra o Construct 3. Aponte o Layout no centro e diga este é o palco, onde ficam os personagens e o cenário. Aponte a Project Bar à direita e diga aqui mora tudo que existe no jogo, como uma árvore de pastas. Aponte a Properties Bar e diga aqui ajustamos o que estiver selecionado. Abra a Event Sheet (clique duas vezes nela na Project Bar) e diga esta é a folha de regras; o Layout é o que se vê, a Event Sheet é o que pensa. Repita esses nomes devagar.

Mão na massa (25 min): Agora cada aluno no seu computador. Guie a criação do primeiro projeto: clique no Menu (três linhas), depois Project, depois New project; escolha o modelo Blank (em branco); dê um nome ao projeto (combine um padrão, por exemplo MeuJogo seguido do primeiro nome) e confirme em Create. Peça que localizem sozinhos o Layout, a Project Bar e a Properties Bar, apontando na própria tela. Em seguida, oriente o salvamento na nuvem: Menu, Project, Save as, Save to cloud, escolhendo o Google Drive ou a conta do Construct. Circule pela sala conferindo cada projeto criado e salvo.

Desafio e compartilhar (10 min): Desafie cada aluno a abrir a Project Bar e dizer em voz alta o nome do Layout e o nome da Event Sheet do projeto recém-criado. Depois cada um mostra a tela e conta o nome do seu projeto salvo na nuvem, fechando a aula com todos tendo um projeto próprio, nomeado e guardado.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, use comparações concretas e respeite a curiosidade deles. Chame o motor de jogos de a máquina que faz o jogo funcionar. Diga que o Layout é o palco de um teatro e os objetos são os atores; a Event Sheet é o roteiro que diz o que cada um faz. Reforce a frase de ouro: Layout é o que se vê, Event Sheet é o que pensa. Evite mergulhar em detalhes técnicos agora; o foco é se orientar e criar o primeiro projeto. Valorize a autonomia: deixe que eles cliquem e descubram, intervindo só quando travarem. Comemore o projeto salvo na nuvem como uma conquista de verdade.

## Erros comuns e como ajudar

O erro mais comum é o aluno fechar o projeto sem salvar; reforce o Save to cloud e confira aluno por aluno. Alguns confundem Layout com Event Sheet; volte à frase o que se vê e o que pensa e peça que apontem cada um na tela. Outros criam o projeto com um modelo pronto em vez de Blank; oriente a escolher sempre o modelo em branco nesta aula. Há quem perca a Project Bar ou a Properties Bar de vista, achando que sumiram; mostre que elas reaparecem pelo menu View, em Bars. Se a internet cair durante o salvamento, oriente a aguardar e tentar de novo, e nunca fechar a aba antes de ver a confirmação de salvo.`,
  exercicios: [
    {
      titulo: `Caça aos Cômodos da Tela`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o Construct 3 aberto no projetor, aponte regiões da tela e faça perguntas para a turma reconhecer cada área. Deixe vários alunos responderem apontando na tela grande, sem mexer ainda no próprio computador.`,
      atividade: `Olhando a tela grande, responda apontando: onde fica o Layout (o palco)? Onde está a Project Bar (a árvore do projeto)? E a Properties Bar (as propriedades)? Onde clico para abrir a Event Sheet?`,
      gabarito: `O Layout é a área grande no centro da tela. A Project Bar é o painel lateral (geralmente à direita) com a árvore do projeto. A Properties Bar é o painel que mostra os ajustes do item selecionado, normalmente abaixo da Project Bar. A Event Sheet abre dando duplo clique no nome dela dentro da Project Bar.`,
    },
    {
      titulo: `Meu Primeiro Projeto em Branco`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada aluno no seu computador. Guie passo a passo a criação do projeto em branco e confira que todos escolheram o modelo Blank e nomearam o projeto no padrão combinado. Circule pela sala acompanhando.`,
      atividade: `No Construct 3, clique no Menu (três linhas), depois Project e New project. Escolha o modelo Blank (em branco), dê o nome MeuJogo seguido do seu primeiro nome e clique em Create.`,
      gabarito: `Ao final aparece um projeto novo e vazio, com um Layout 1 e uma Event Sheet 1 já listados na Project Bar. Se aparecer um cenário ou objetos prontos, o modelo escolhido não foi o Blank; basta criar de novo escolhendo o modelo em branco.`,
    },
    {
      titulo: `Guardando na Nuvem`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Oriente o salvamento na nuvem e confirme aluno por aluno que viram a mensagem de salvo. Reforce nunca fechar a aba antes da confirmação. Se a internet oscilar, peça para aguardar e tentar de novo.`,
      atividade: `Com seu projeto aberto, clique no Menu, depois Project, depois Save as e escolha Save to cloud. Selecione o Google Drive ou a conta do Construct e confirme o salvamento.`,
      gabarito: `O projeto fica guardado na nuvem e aparece a confirmação de salvo (e o nome do arquivo deixa de mostrar o aviso de não salvo). Assim o trabalho não se perde e pode ser aberto em qualquer computador logado na mesma conta.`,
    },
    {
      titulo: `O que se vê e o que pensa (em dupla)`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno explica para o outro a diferença entre Layout e Event Sheet usando as próprias palavras, apontando cada um na tela do projeto que criaram. Depois trocam os papéis. Circule ouvindo as explicações e corrija com gentileza.`,
      atividade: `Em dupla, um aluno aponta na tela e explica: o Layout é o palco, o que se vê. A Event Sheet é a folha de regras, o que pensa. Depois troquem: o outro repete a explicação com as próprias palavras.`,
      gabarito: `O Layout é onde ficam os objetos visuais (cenário, personagens, botões), ou seja, o que se vê. A Event Sheet é onde ficam as regras do jogo, ou seja, o que pensa e decide o que acontece. São coisas diferentes e separadas, e todo jogo no Construct 3 usa as duas.`,
    },
    {
      titulo: `Desafio: Explorador da Project Bar`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Desafie cada aluno a explorar sozinho a Project Bar do próprio projeto e descobrir os itens listados, com o mínimo de ajuda. Intervenha só se travar. Depois cada um mostra a tela e diz em voz alta o que encontrou. Confira nas telas.`,
      atividade: `Sozinho, abra a Project Bar do seu projeto e descubra: qual é o nome do Layout? Qual é o nome da Event Sheet? Clique no Layout para selecioná-lo e veja, na Properties Bar, qual é o tamanho (Size) dele. Anote ou guarde para contar à turma.`,
      gabarito: `Num projeto em branco recém-criado, a Project Bar mostra um Layout 1 e uma Event Sheet 1. Ao selecionar o Layout, a Properties Bar exibe o tamanho dele no campo Size (por padrão algo próximo de 854 por 480 pixels, podendo variar conforme a versão). O importante é o aluno localizar os itens e ler a propriedade sozinho.`,
    },
  ],
};
