import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Mapeando as telas do meu jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Listar todas as telas que o próprio jogo do Roblox vai precisar, desenhar um rascunho de como elas se conectam e abrir o Canva criando o projeto do mês com o tamanho de tela correto para começar a UI.`,
  descricao: `Na aula passada, os alunos descobriram o que é a UI de um jogo: tudo aquilo que aparece na tela para o jogador clicar, ler e entender. Hoje eles saem da teoria e vão para a prática, olhando para o próprio jogo do Roblox que estão construindo. A pergunta que guia a aula é simples e poderosa: de quais telas o meu jogo precisa?

Todo jogo, por mais simples que seja, tem mais de uma tela. Existe a tela de início (onde o jogador chega e aperta "Jogar"), a tela de jogo (onde a partida acontece de verdade), a tela de configurações (para mexer no som, por exemplo) e a tela de fim de jogo (quando o jogador vence ou perde). Quando o aluno consegue listar essas telas antes de desenhar qualquer coisa, ele evita o erro mais comum de iniciante: começar a criar botões soltos sem saber onde eles vão morar.

O segundo passo da aula é entender que as telas conversam entre si. Da tela de início o jogador vai para a tela de jogo; da tela de jogo ele pode ir para as configurações e voltar; ao terminar, ele cai na tela de fim de jogo, que oferece um botão para recomeçar. Desenhar essas ligações num rascunho rápido, com caixas e setas, é o que chamamos de mapa de telas (ou fluxograma). É a planta da casa antes de levantar as paredes.

Por fim, os alunos abrem o Canva, criam o projeto do mês e definem o tamanho de tela certo para a UI de um jogo. Esse tamanho importa muito: se for errado, a interface fica esticada ou cortada dentro do Roblox. Ao terminar a aula, cada aluno tem a lista das suas telas, um rascunho mostrando como elas se conectam e um projeto Canva vazio, no tamanho correto, pronto para receber os primeiros botões nas próximas aulas.`,
  materiais: [
    `Computadores com acesso ao Canva pelo navegador, um por aluno, com a conta já logada antes da aula`,
    `Conta Canva da escola (ou conta gratuita) com login feito e funcionando em cada máquina`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada clique no Canva`,
    `Folhas de papel em branco e canetas ou lápis para o rascunho do mapa de telas`,
    `Arquivo de exemplo: um mapa de telas pronto (caixas e setas) de um jogo simples, impresso ou em slide`,
    `Lista impressa com os nomes das telas mais comuns (Início, Jogar, Configurações, Fim de jogo) para servir de apoio`,
    `Acesso ao projeto do jogo no Roblox Studio de cada aluno, ou anotações sobre o jogo que estão criando`,
  ],
  conceitosChave: [
    `Tela (ou cena de interface) — cada "página" diferente que o jogo mostra ao jogador, como a tela de início ou a de fim de jogo.`,
    `Tela de início — a primeira tela que aparece quando o jogo abre, com o nome do jogo e o botão "Jogar".`,
    `Tela de jogo — a tela onde a partida acontece de verdade, com o jogador controlando o personagem.`,
    `Tela de configurações — a tela onde o jogador ajusta opções, como ligar ou desligar o som e a música.`,
    `Tela de fim de jogo — a tela que aparece quando o jogador vence ou perde, com a pontuação e um botão para jogar de novo.`,
    `Mapa de telas (fluxograma) — um desenho com caixas (as telas) e setas que mostra para onde o jogador vai ao clicar em cada botão.`,
    `Tamanho de tela (dimensões) — a largura e a altura do projeto em pixels; para a UI de jogo usamos 1920 por 1080, o formato widescreen.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Canva para dar esta aula. Basta entender três ideias: listar telas, ligar telas com setas e abrir um projeto no tamanho certo. O Canva funciona no navegador. Ao entrar, você vê a tela inicial do Canva com uma barra de busca no topo escrita "O que você vai criar?" e um botão roxo "Criar um design" no canto superior direito. O tamanho que vamos usar é 1920 x 1080 pixels (o formato widescreen, o mesmo de uma TV), porque é o formato que melhor combina com a tela de um jogo. Decore esse número: ele vai se repetir em todas as aulas do mês. Antes da aula, faça você mesmo o passo a passo uma vez para ganhar confiança.

## Passo a passo da aula

Aquecimento (10 min): Retome a aula anterior com uma pergunta: "O que é a UI de um jogo?". Em seguida, mostre no projetor um jogo do Roblox e pergunte: "Quantas telas diferentes este jogo tem?". Conduza a turma a perceber que existe a tela de início, a de jogo, a de configurações e a de fim de jogo. Escreva esses quatro nomes no quadro.

Conteúdo novo guiado (15 min): Mostre o mapa de telas de exemplo no projetor. Explique que cada caixa é uma tela e cada seta mostra para onde o jogador vai ao clicar. Desenhe um mapa simples ao vivo: caixa "Início" com seta para "Jogo", "Jogo" com seta para "Configurações" e de volta, e "Jogo" com seta para "Fim de jogo", que tem uma seta de volta para "Início". Depois abra o Canva: clique em "Criar um design" (botão roxo, canto superior direito), escolha "Tamanho personalizado", digite 1920 na largura e 1080 na altura, mantenha a unidade em "px" e clique em "Criar novo design". Renomeie o projeto clicando no nome lá em cima e escrevendo "UI do meu jogo".

Mão na massa (25 min): Cada aluno pega papel e caneta e lista as telas do seu próprio jogo do Roblox. Em seguida, desenha o mapa de telas, ligando as caixas com setas. Depois abre o Canva, cria o design no tamanho 1920 x 1080 e renomeia o projeto. Circule pela sala conferindo se cada um digitou o tamanho certo e salvou o projeto.

Desafio + compartilhar (10 min): Cada aluno mostra o mapa de telas ao colega do lado e explica o caminho do jogador. Dois ou três voluntários apresentam no projetor.

## Como explicar de forma clara

Use a comparação da casa: cada tela é um cômodo, e as setas são as portas que ligam um cômodo ao outro. Ninguém constrói uma casa sem planta, e ninguém faz um jogo sem mapa de telas. Para o tamanho, diga que 1920 por 1080 é o tamanho de uma TV de tela cheia, por isso fica perfeito para um jogo. Fale os nomes dos botões devagar enquanto aponta na tela do projetor. Evite palavras difíceis: prefira "tamanho da tela" em vez de "resolução" e "página" em vez de "frame".

## Erros comuns e como ajudar

O erro mais comum é o aluno esquecer alguma tela, em geral a de configurações ou a de fim de jogo; relembre as quatro telas básicas escritas no quadro. Outro erro é digitar o tamanho errado no Canva, trocando largura por altura ou colocando 1080 x 1920 (formato em pé, de celular); mostre que largura vem primeiro e é o número maior. Muitos esquecem de trocar a unidade e deixam em outra medida; confira que está em "px". Há quem desenhe as caixas sem as setas, perdendo a ligação entre as telas; lembre que sem setas o mapa não mostra o caminho do jogador. Por fim, alguns não renomeiam nem salvam o projeto; ensine que o Canva salva sozinho, mas o nome ajuda a achar o arquivo depois.`,
  exercicios: [
    {
      titulo: `Lista das minhas telas`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a folha de apoio com as telas comuns. Garanta que cada aluno pense no próprio jogo do Roblox, e não em um jogo genérico. Confira se ninguém esqueceu a tela de fim de jogo.`,
      atividade: `Em uma folha, escreva a lista de todas as telas que o seu jogo do Roblox vai precisar. Comece pelas quatro básicas (início, jogar, configurações e fim de jogo) e acrescente outras que o seu jogo tiver.`,
      gabarito: `O aluno listou no mínimo as quatro telas básicas (início, jogar, configurações e fim de jogo), com nomes claros, e cada tela faz sentido dentro do jogo dele.`,
    },
    {
      titulo: `Mapa de telas com setas`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre de novo o exemplo no projetor. Reforce que cada caixa é uma tela e cada seta mostra para onde o jogador vai ao clicar. Verifique se há setas de ida e de volta.`,
      atividade: `Desenhe o mapa de telas do seu jogo: faça uma caixa para cada tela da sua lista e ligue as caixas com setas mostrando o caminho que o jogador faz ao clicar nos botões.`,
      gabarito: `O rascunho tem uma caixa para cada tela listada e setas ligando-as: início vai para jogo, jogo vai e volta das configurações, e jogo vai para fim de jogo, que volta para o início. O caminho do jogador fica claro.`,
    },
    {
      titulo: `Criando o projeto no tamanho certo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto os alunos clicam. Confira máquina por máquina se o tamanho ficou 1920 x 1080 e se o projeto foi renomeado. Lembre que largura vem primeiro.`,
      atividade: `Abra o Canva, clique em "Criar um design", escolha "Tamanho personalizado", digite 1920 de largura e 1080 de altura em px e clique em "Criar novo design". Depois renomeie o projeto para "UI do meu jogo".`,
      gabarito: `O aluno tem um projeto Canva aberto, em branco, com o tamanho exato de 1920 x 1080 pixels e com o nome "UI do meu jogo" no topo. O projeto está salvo automaticamente.`,
    },
    {
      titulo: `Conferindo o mapa em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um siga as setas do mapa do colega como se fosse o jogador, procurando telas que faltam ou setas que não levam a lugar nenhum. Comentem o trabalho, não a pessoa.`,
      atividade: `Troque o seu mapa de telas com o do colega. Siga as setas dele como se você fosse o jogador e aponte uma tela que falta ou uma seta que está faltando para o caminho ficar completo.`,
      gabarito: `A dupla encontrou e anotou ao menos um ajuste em cada mapa (uma tela faltando ou uma seta faltando), e cada aluno consegue explicar por que aquele ajuste deixa o caminho do jogador completo.`,
    },
    {
      titulo: `O desafio do botão Voltar`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Este é o exercício mais difícil. Provoque a turma: "Se o jogador entrou nas configurações, como ele volta para o jogo?". Mostre que toda tela que não seja o início precisa de uma forma de voltar. Anote as descobertas no quadro.`,
      atividade: `Olhe o seu mapa de telas e descubra: em quais telas o jogador ficaria "preso" sem um jeito de voltar? Acrescente as setas de retorno que estão faltando para que o jogador sempre consiga voltar.`,
      gabarito: `O aluno identificou as telas sem saída (em geral configurações e fim de jogo) e adicionou setas de retorno: das configurações de volta ao jogo, e do fim de jogo de volta ao início. Nenhuma tela deixa o jogador preso.`,
    },
  ],
};
