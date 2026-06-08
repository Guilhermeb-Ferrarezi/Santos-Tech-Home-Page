import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Roblox Studio",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Roblox Studio, criar um arquivo novo a partir de um template base e salvar o projeto na nuvem, entendendo como o jogo do Ano 2 vai crescer nas próximas etapas.`,
  descricao: `Nesta aula, os alunos abrem pela primeira vez o Roblox Studio, o programa onde vão montar o jogo do mês. Depois de um ano inteiro criando vídeos, músicas, vozes e artes com inteligência artificial, chegou a hora de juntar tudo dentro de um jogo de verdade. O primeiro passo é se sentir em casa no programa: saber onde fica cada painel, o que cada um faz e como não se perder na tela cheia de botões.

A tela do Roblox Studio tem quatro áreas principais que os alunos precisam reconhecer. A janela 3D é o palco, o espaço grande no centro onde vemos o mundo do jogo. O Explorer é a lista de tudo o que existe no jogo, organizada como uma árvore de pastas. O Properties (Propriedades) é o painel que mostra os detalhes do objeto selecionado, como cor, tamanho e posição. E o Workspace é a parte do Explorer onde ficam as coisas que o jogador vai ver e tocar dentro do mundo.

Além de explorar a interface, cada aluno vai criar o seu próprio arquivo de jogo. O Roblox Studio oferece templates (modelos prontos) para começar, como um terreno plano (Baseplate) ou cenários já montados. Nesta aula, a turma escolhe um template base simples, que servirá de fundação para o jogo que será construído ao longo do mês. Aprender a salvar o projeto na nuvem (Roblox) é essencial: assim o trabalho fica guardado na conta do aluno e pode ser aberto em qualquer computador.

Ao final, cada aluno terá um projeto criado, com nome, salvo na nuvem, e saberá apontar onde ficam o Explorer, o Properties, o Workspace e a janela 3D. Não vamos programar nem desenhar nada ainda: esta aula é a base, o momento de conhecer a ferramenta antes de começar a construir o cenário, importar a interface do Canva e escrever os primeiros códigos em Lua nas semanas seguintes.`,
  materiais: [
    `Computadores com o Roblox Studio instalado (versão para computador), um por aluno`,
    `Conta Roblox já criada e com login feito antes da aula, para cada aluno`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Conexão com a internet funcionando, pois o salvamento na nuvem depende dela`,
    `Slide ou folha impressa com um mapa simples da tela do Studio (Explorer, Properties, Workspace, janela 3D)`,
    `Lista com o nome de usuário e a senha Roblox de cada aluno, guardada com o professor para emergências`,
  ],
  conceitosChave: [
    `Roblox Studio — o programa gratuito onde criamos e montamos jogos do Roblox no computador.`,
    `Janela 3D (viewport) — o espaço grande no centro da tela onde vemos e montamos o mundo do jogo.`,
    `Explorer — a lista em árvore que mostra tudo o que existe dentro do jogo, organizada como pastas.`,
    `Properties (Propriedades) — o painel que mostra e deixa mudar os detalhes do objeto selecionado, como cor, tamanho e posição.`,
    `Workspace — a parte do Explorer onde ficam os objetos que o jogador vê e toca dentro do mundo.`,
    `Template (modelo) — um projeto pronto que usamos como ponto de partida, como o terreno plano chamado Baseplate.`,
    `Salvar na nuvem — guardar o jogo na conta Roblox pela internet, para abrir depois em qualquer computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para dar esta aula. Aqui ninguém vai programar ainda: o objetivo é reconhecer a tela e criar um arquivo salvo. Quando o Studio abre, aparece uma janela inicial (Start) com as abas "New" (Novo) e "My Projects" (Meus Projetos). Na aba New ficam os templates. O mais simples é o "Baseplate", um terreno plano cinza. Depois de abrir um template, a tela mostra quatro áreas: a janela 3D no centro, o Explorer à direita (em cima), o Properties à direita (embaixo, abaixo do Explorer) e a barra de menus no topo (Home, Model, Test). Se o Explorer ou o Properties não aparecerem, abra-os pelo menu "View" (Exibir), clicando nos botões "Explorer" e "Properties". Guarde este caminho: você vai precisar dele em quase toda aula.

## Passo a passo da aula

Aquecimento e revisão (10 min): Relembre que no Ano 1 e nos meses passados eles criaram vídeos, música, voz e arte com IA. Pergunte: "onde será que tudo isso vai ser usado?". Conduza até a resposta: dentro de um jogo, feito no Roblox Studio. Mostre rapidamente um jogo simples do Roblox para animar a turma.

Conteúdo novo guiado (15 min): No projetor, abra o Roblox Studio. Na aba "New", clique no template "Baseplate" e espere carregar. Aponte e nomeie cada área: a janela 3D (centro), o Explorer (à direita, em cima) e o Properties (à direita, embaixo). No Explorer, clique na seta ao lado de "Workspace" para abrir e mostrar a "Camera" e o "Baseplate" lá dentro. Clique no Baseplate na janela 3D e mostre como o Properties muda, exibindo cor (BrickColor) e tamanho (Size). Por fim, vá em "File" (Arquivo) e clique em "Publish to Roblox" (Publicar no Roblox); dê um nome ao jogo, como "MeuJogo-Ano2", e confirme. Explique que isso salva na nuvem.

Mão na massa (25 min): Cada aluno abre o Studio, cria um projeto com o template Baseplate e localiza, um a um, o Explorer, o Properties, o Workspace e a janela 3D. Peça que cliquem no Baseplate e observem o Properties mudar. Depois, oriente o caminho "File" e "Publish to Roblox", dando um nome ao projeto e salvando na nuvem. Circule pela sala conferindo se cada um conseguiu salvar.

Desafio e compartilhar (10 min): Desafie cada aluno a achar no Explorer um item que ainda não foi citado (como "Lighting" ou "Players") e dizer para o colega do lado o que imagina que ele faça. Dois ou três voluntários mostram no projetor o projeto salvo e apontam as quatro áreas.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o Explorer é como o sumário de um livro: uma lista que mostra tudo o que tem dentro. O Properties é como a "ficha técnica" de um objeto, onde mudamos cor e tamanho. A janela 3D é o "palco" onde a peça acontece. Salvar na nuvem é como guardar uma foto no celular que aparece em qualquer aparelho com a mesma conta. Mostre sempre antes de mandar fazer, fale devagar o nome em inglês de cada painel enquanto aponta na tela, e repita o caminho "File" e "Publish to Roblox" mais de uma vez, porque é o passo que mais gera dúvida.

## Erros comuns e como ajudar

O erro mais comum é o aluno fechar o Explorer ou o Properties sem querer e achar que sumiu para sempre; ensine logo o menu "View" para trazer de volta. Outro erro é confundir "Save to File" (salvar no computador) com "Publish to Roblox" (salvar na nuvem); reforce que nesta aula salvamos na nuvem, pela conta Roblox. Alguns esquecem de fazer login e o Studio não deixa publicar; confira o login antes. Há quem se perca clicando em tudo e mude propriedades sem querer; mostre o "Ctrl + Z" para desfazer. Por fim, muitos escolhem um template complicado cheio de coisas; oriente todos a usar o Baseplate simples, para não se confundirem agora no começo.`,
  exercicios: [
    {
      titulo: `Caça aos painéis`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu o template Baseplate. Peça que apontem na própria tela cada área enquanto você confere. Se algum painel sumiu, mostre o menu "View".`,
      atividade: `Abra um projeto com o template Baseplate e encontre, um por um, a janela 3D, o Explorer, o Properties e o Workspace. Aponte cada um para o professor.`,
      gabarito: `O aluno abre o Baseplate e mostra corretamente as quatro áreas: a janela 3D no centro, o Explorer à direita (em cima), o Properties abaixo dele e o Workspace dentro do Explorer.`,
    },
    {
      titulo: `Salvando na nuvem`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Confira o login na conta Roblox antes. Acompanhe o caminho "File" e "Publish to Roblox" e ajude quem confundir com "Save to File".`,
      atividade: `Dê um nome ao seu projeto e salve-o na nuvem usando "File" e depois "Publish to Roblox". Confirme com o professor que o jogo aparece na sua conta.`,
      gabarito: `O projeto foi publicado na nuvem com um nome escolhido pelo aluno e aparece em "My Projects" (ou na conta Roblox), provando que o salvamento na nuvem deu certo.`,
    },
    {
      titulo: `Detetive de propriedades`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre que clicar num objeto na janela 3D muda o Properties. Incentive a mudar a cor (BrickColor) do Baseplate e observar o resultado, lembrando do "Ctrl + Z" para voltar.`,
      atividade: `Clique no Baseplate, ache no Properties a cor (BrickColor) e o tamanho (Size), mude a cor para outra e veja o que acontece na janela 3D.`,
      gabarito: `O aluno seleciona o Baseplate, localiza BrickColor e Size no Properties e troca a cor; a janela 3D mostra o terreno na cor nova, comprovando que o Properties controla o objeto.`,
    },
    {
      titulo: `Mapa em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um aluno explique para o outro o que faz cada painel, com suas próprias palavras, e depois troquem os papéis.`,
      atividade: `Em dupla, um aluno aponta para a tela do colega e explica o que faz o Explorer, o Properties, o Workspace e a janela 3D. Depois invertam os papéis.`,
      gabarito: `Cada aluno da dupla consegue explicar, com suas palavras, a função das quatro áreas; por exemplo, o Explorer lista tudo, o Properties mostra os detalhes, a janela 3D é o palco e o Workspace guarda o que o jogador vê.`,
    },
    {
      titulo: `Roda de conversa: como o jogo vai crescer`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda. Conduza com perguntas abertas e anote as ideias no quadro. Ligue cada criação de IA (vídeo, música, voz, arte) ao jogo que será montado no mês.`,
      atividade: `Em roda, cada aluno diz uma coisa que ele criou com IA neste ano (vídeo, música, voz ou arte) e imagina onde ela poderia aparecer dentro do jogo do Roblox.`,
      gabarito: `A turma levanta ao menos quatro ideias válidas de uso, como: a música tocando no menu, a voz da IA narrando, a arte virando a interface (UI) do jogo e os vídeos servindo de inspiração para o cenário.`,
    },
  ],
};
