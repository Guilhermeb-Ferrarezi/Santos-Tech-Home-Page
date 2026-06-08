import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Itens e Colecionáveis do Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Modelar no MagicaVoxel os pequenos itens coletáveis do jogo (moedas, chaves, frutas ou poções) usando peças pequenas, coloridas e combinando com o estilo do cenário e dos personagens.`,
  descricao: `Todo jogo bacana tem aqueles itens brilhantes que o jogador adora pegar: a moeda dourada que faz "pling", a chave que abre o baú, a fruta que recupera energia, a poção mágica que dá um poder novo. Esses pequenos tesouros são os coletáveis, e nesta aula as crianças vão modelá-los em Voxel Art para o jogo da turma. É a peça que faltava: já temos o cenário, já temos os personagens, agora vamos espalhar coisinhas para o herói coletar.

A grande ideia desta aula é que pequeno também é importante. Um coletável tem poucos voxels, mas precisa ser fácil de reconhecer mesmo de longe e mesmo pequeno na tela do jogo. Por isso o segredo é usar formas simples e cores fortes: uma moeda é um círculo amarelo, uma chave tem a cabeça redonda e um dente, uma maçã é vermelha com uma folhinha verde. Quanto mais limpo o desenho, mais o jogador entende na hora o que aquilo é.

O professor vai mostrar como construir uma grade pequena no MagicaVoxel (por exemplo 8 por 8 por 8 voxels), escolher cores na paleta e montar o item voxel por voxel. Vamos reforçar a ideia de paleta combinada: os coletáveis precisam usar o mesmo "clima" de cores do cenário e dos personagens que a turma já fez, para tudo parecer do mesmo jogo. Nada de uma moeda neon no meio de um mundo de tons suaves.

No fim da aula cada criança terá pelo menos um coletável pronto, salvo e com nome. Esses itens entram direto na coleção de assets do mês, que será reunida na Aula 8. É um momento gostoso porque os itens ficam prontos rápido, então sobra tempo para caprichar, fazer variações de cor e sentir o orgulho de ver a pecinha brilhar na tela.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto, um por aluno`,
    `Projetor ou TV ligada na tela do professor para demonstrar onde clicar`,
    `Exemplos prontos de coletáveis voxel (moeda, chave, maçã, poção) salvos para mostrar`,
    `Imagens de referência impressas ou na tela: moedas, frutas, chaves e poções de jogos`,
    `Folha de "lista de itens" do jogo, feita na Aula 2, para lembrar o que falta modelar`,
    `Cartões de cores da paleta do jogo (as cores que a turma combinou usar)`,
  ],
  conceitosChave: [
    `Coletável — item pequeno que o jogador pega no jogo, como moeda, chave ou fruta.`,
    `Voxel — o cubinho mágico; é o "tijolinho" com que a gente constrói tudo no MagicaVoxel.`,
    `Paleta — a caixa de cores do jogo; usamos sempre as mesmas cores para tudo combinar.`,
    `Silhueta — o contorno do item; uma boa silhueta deixa claro o que é mesmo de longe.`,
    `Grade pequena — área pequenininha de trabalho (tipo 8x8x8) que cabe um item de cada vez.`,
    `Variação — fazer a mesma peça em outra cor, como uma moeda de prata e uma de ouro.`,
    `Asset — qualquer pecinha pronta do jogo: cenário, personagem ou coletável.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula a turma modela itens pequenos: moedas, chaves, frutas e poções. A boa notícia é que coletáveis são os assets mais fáceis e rápidos de fazer, então é uma aula leve e cheia de vitórias. No MagicaVoxel, cada item cabe numa grade bem pequena. O ferramental que você vai usar é simples: a ferramenta "Attach" (adicionar voxel, atalho tecla "T" no painel de ferramentas à esquerda), a ferramenta "Erase" (apagar, atalho "R") e a paleta de cores no canto superior esquerdo. Antes da aula, abra o MagicaVoxel e crie um arquivo novo. No painel de tamanho do modelo (caixa com os números do tamanho, tipo "20 20 20", normalmente embaixo ou ao lado da cena), troque para algo pequeno como "8 8 8" clicando nos números e digitando. Faça você mesmo uma moeda e uma chave de teste para sentir o tempo. Tudo deve caber em poucos cliques.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: mostre no projetor os personagens e o cenário que a turma já fez. Pergunte: "O que será que o herói vai coletar?". Mostre a lista de itens da Aula 2 e mostre exemplos prontos de coletáveis voxel. Aponte como cada um é pequeno e tem cor forte.

15 min — Conteúdo novo guiado: com seu MagicaVoxel projetado, crie um arquivo novo e ajuste a grade para "8 8 8". Escolha o amarelo na paleta (clique no quadradinho da cor). Selecione a ferramenta "Attach" (tecla T). Mostre como clicar para adicionar cubinhos formando um círculo achatado, uma moeda. Use "Erase" (tecla R) para tirar cantos e arredondar. Gire a cena segurando o botão direito do mouse e arrastando, para ver de todos os lados. Salve em File > Save As com um nome (por exemplo "moeda").

25 min — Mão na massa: cada criança escolhe um item da lista e modela na sua grade 8x8x8. Circule pela sala. Lembre de duas regras: use as cores da paleta do jogo e mantenha a peça pequena. Quem terminar rápido faz uma variação de cor (moeda de ouro e de prata) ou um segundo item.

10 min — Desafio + compartilhar: desafio "combina ou não combina?" — cada um gira sua peça e a turma diz se as cores combinam com o cenário. Salvem todos com nome. Comemore cada item pronto.

## Como explicar para crianças

Use a ideia de tesouro: "Vamos fazer as coisinhas brilhantes que o herói adora pegar!". Explique a silhueta com a brincadeira da sombra: "Se você só visse a sombra do item, daria pra adivinhar o que é? Se sim, está ótimo!". Para a moeda, diga que é "um círculo gordinho e dourado". Para a paleta, fale "vamos usar só as cores da nossa caixinha de cores do jogo, senão o item vira de outro jogo". Reforce que pequeno é bonito: "Não precisa de mil cubinhos, precisa de cor certa e formato fácil de entender".

## Erros comuns e como ajudar

Erro 1: item gigante. A criança usa a grade toda e faz uma moeda do tamanho do herói. Ajude a apagar com "Erase" e lembre que coletável é pequeno, cabe na mão do personagem.

Erro 2: cores fora da paleta. Aparece uma poção arco-íris que não combina com nada. Mostre os cartões de cores e peça para escolher só de lá.

Erro 3: formato confuso. A chave não parece chave. Volte à referência na tela e construam juntos a parte de cima (redonda) e o dente embaixo.

Erro 4: esquecer de salvar ou salvar sem nome. Pare todo mundo 2 minutos antes do fim e façam o File > Save As juntos, cada um digitando o nome do seu item. Assim nada se perde para a Aula 8.`,
  exercicios: [
    {
      titulo: `Caça aos coletáveis`,
      tipo: `Discussão em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre exemplos de coletáveis voxel no projetor e a lista de itens da Aula 2. Conduza a roda perguntando o que o herói do jogo da turma poderia coletar.`,
      atividade: `Em roda, cada criança diz um item que gostaria que o herói coletasse no jogo (moeda, chave, fruta, poção, estrela). A turma escolhe quais entram na lista de hoje.`,
      gabarito: `Espera-se uma lista de 3 a 5 itens pequenos e reconhecíveis, como: moeda, chave, maçã, poção e estrela. Itens válidos são pequenos, fáceis de desenhar e fazem sentido coletar. Itens grandes (como uma casa) não são coletáveis e devem ser remarcados pelo professor.`,
    },
    {
      titulo: `Minha primeira moeda`,
      tipo: `Prática guiada no MagicaVoxel`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça junto, passo a passo no projetor. Garanta que cada criança crie um arquivo novo e ajuste a grade para 8x8x8 antes de começar.`,
      atividade: `Crie um arquivo novo, ajuste o tamanho para "8 8 8", escolha o amarelo na paleta, use a ferramenta Attach (tecla T) para montar uma moeda em formato de círculo achatado e use Erase (tecla R) para arredondar os cantos.`,
      gabarito: `A criança termina com uma moeda amarela pequena, em formato arredondado, que cabe na grade 8x8x8. Está correto se o item é reconhecível como moeda ao girar a câmera e se usou a cor amarela da paleta. Se ficou quadrada, basta apagar os quatro cantos com a ferramenta Erase.`,
    },
    {
      titulo: `Escolha seu item da lista`,
      tipo: `Produção individual`,
      tempo: `15 minutos`,
      guiaProfessor: `Cada aluno escolhe um item diferente da lista do jogo e modela sozinho. Circule pela sala lembrando das duas regras: cores da paleta e peça pequena.`,
      atividade: `Escolha um coletável da lista (chave, maçã, poção ou estrela) e modele na sua grade 8x8x8 usando apenas as cores da paleta do jogo. Gire a câmera com o botão direito do mouse para conferir todos os lados.`,
      gabarito: `O aluno entrega um coletável pronto, pequeno, com silhueta clara e cores da paleta combinada. Exemplos corretos: chave com cabeça redonda e um dente; maçã vermelha com folhinha verde; poção com frasco e líquido colorido. O item deve ser salvo com nome (File > Save As).`,
    },
    {
      titulo: `Variações de cor`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem terminou o item principal. Explique que jogos costumam ter o mesmo item em valores diferentes, mostrados pela cor.`,
      atividade: `Duplique seu coletável e faça uma variação só trocando a cor: moeda de ouro e de prata, ou poção vermelha e azul. Mantenha o mesmo formato, mude apenas as cores da paleta.`,
      gabarito: `O aluno apresenta duas versões do mesmo item, com formato idêntico e cores diferentes (por exemplo, moeda amarela e moeda cinza/branca). Está correto se as duas peças têm o mesmo tamanho e silhueta, e as cores continuam dentro da paleta do jogo.`,
    },
    {
      titulo: `Combina ou não combina?`,
      tipo: `Avaliação entre colegas e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza a rodada final. Cada criança gira sua peça no projetor ou na própria tela e a turma vota se as cores combinam com o cenário e os personagens.`,
      atividade: `Mostre seu coletável girando a câmera. A turma diz "combina" ou "não combina" comparando as cores do item com as cores do cenário e dos personagens já feitos. Quem precisar ajusta a cor.`,
      gabarito: `A turma identifica corretamente se o item usa a paleta combinada. Resposta esperada: "combina" quando as cores são as mesmas do cenário/personagens; "não combina" quando há cores estranhas fora da paleta (como neon ou arco-íris). Em caso de "não combina", a correção é trocar a cor pelos cartões da paleta. Todos os itens devem terminar salvos com nome para a galeria da Aula 8.`,
    },
  ],
};
