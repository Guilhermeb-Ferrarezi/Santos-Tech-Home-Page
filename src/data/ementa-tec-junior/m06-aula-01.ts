import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Oi, Aseprite! Meu primeiro quadrinho",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue abrir o Aseprite, reconhecer a folha de desenho, escolher o lápis ou a borracha e pintar pontinhos coloridos, entendendo que a arte do jogo é feita de quadradinhos chamados pixels.`,
  descricao: `Esta é a primeira aula do mês de pixel art, e o objetivo é fazer as crianças se sentirem em casa dentro do Aseprite. O Aseprite é um programa feito especialmente para desenhar com quadradinhos, os famosos pixels, que são os mesmos tijolinhos coloridos que formam a arte dos jogos antigos e de muitos jogos atuais. Nesta aula ninguém vai desenhar um personagem completo ainda: o que importa é abrir o programa, olhar a tela com calma e perder o medo de clicar.

A grande ideia que a criança precisa levar para casa é simples e poderosa: tudo o que ela vê em um jogo 2D é feito de pequenos quadradinhos coloridos, um do lado do outro, como peças de mosaico ou contas de pulseira. Quando ela pinta um pontinho na tela, ela está colocando um pixel. Quando pinta muitos, começa a aparecer um desenho. Essa descoberta costuma encantar as crianças, porque elas percebem que a arte do jogo não é mágica distante, e sim algo que elas mesmas podem montar.

Durante a hora de aula, o professor vai apresentar a folha de desenho (a área onde se pinta), o lápis (a ferramenta que coloca cor) e a borracha (a ferramenta que tira cor). As crianças vão pintar pontinhos coloridos seguindo o professor passo a passo, experimentar apagar e pintar de novo, e brincar com o zoom para enxergar os quadradinhos bem de pertinho.

Como os alunos têm entre 5 e 9 anos e ainda leem e escrevem pouco, a aula é guiada principalmente pela demonstração no projetor e pela imitação. O professor faz, as crianças repetem. A meta não é um desenho bonito, e sim a confiança de mexer no programa e a compreensão concreta do que é um pixel. Essa base será usada em todas as aulas seguintes do mês.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Aseprite já instalado e ABERTO antes da aula começar, para não perder tempo com carregamento.`,
    `Projetor ou TV grande ligado ao computador do professor, para todos verem onde clicar.`,
    `Um arquivo de exemplo já pronto pelo professor: um quadrado de 32x32 pixels com alguns pontinhos coloridos espalhados, para mostrar como fica.`,
    `Uma folha de papel quadriculado e giz de cera ou lápis de cor por aluno, para a atividade de pixel no papel.`,
    `Cartões grandes com as figuras do lápis e da borracha impressas, para o professor apontar e nomear as ferramentas.`,
    `Mouse funcionando bem em cada máquina (de preferência mouse de verdade, não só touchpad, pois facilita muito clicar nos quadradinhos).`,
    `Adesivos ou carimbos de elogio para premiar quem ajudar um colega e quem terminar o desafio.`,
  ],
  conceitosChave: [
    `Pixel — um quadradinho colorido bem pequenininho; é o tijolinho que monta toda a arte do jogo.`,
    `Pixel art — desenho feito juntando muitos pixels, um quadradinho do lado do outro.`,
    `Folha de desenho (tela) — o lugar branco no meio da janela onde a gente pinta os pixels.`,
    `Lápis — a ferramenta que coloca cor num quadradinho quando você clica nele.`,
    `Borracha — a ferramenta que tira a cor de um quadradinho e deixa ele vazio de novo.`,
    `Zoom — chegar perto ou longe do desenho, como uma lupa, para enxergar os quadradinhos grandes.`,
    `Aseprite — o programa onde a gente desenha pixel art para os jogos.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Aseprite é um editor de pixel art. Diferente de programas de pintura comuns, ele trabalha com uma grade de quadradinhos: cada clique pinta um pixel inteiro, não um traço suave. Isso é justamente o que queremos ensinar. Antes da aula, abra o Aseprite e crie um arquivo novo em "File" (menu no canto superior esquerdo) e depois "New". Na janela que abre, coloque largura (Width) 32 e altura (Height) 32, e clique em "OK". Use 32x32 nesta aula porque é grande o bastante para pintar pontinhos com folga e pequeno o bastante para a criança ver que são quadradinhos.

Conheça três regiões da tela: no centro fica a folha de desenho (o canvas); na lateral esquerda ficam as ferramentas, com o ícone de lápis (Pencil) e o de borracha (Eraser); e à direita ou embaixo fica a paleta de cores. Para dar zoom, segure a tecla com o sinal de mais "+" ou use a rodinha do mouse com a tecla Ctrl. Deixe cada máquina já no zoom grande, mostrando a grade. Se a grade não aparecer, ative em "View" e depois "Grid" e "Show Grid".

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

Aquecimento (10 min): receba a turma com a pergunta "vocês sabem do que os jogos são feitos por dentro?". Mostre no projetor uma imagem de jogo bem ampliada até virar quadradinhos. Diga que hoje todos viram desenhistas de jogo. Mostre o arquivo de exemplo com pontinhos coloridos.

Conteúdo novo guiado (15 min): no seu computador projetado, mostre a folha de desenho branca. Aponte e diga em voz alta "isto é a folha, é aqui que a gente pinta". Clique no ícone do lápis (Pencil) na barra de ferramentas à esquerda. Escolha uma cor clicando num quadradinho de cor da paleta. Clique uma vez na folha e mostre que apareceu um quadradinho. Repita devagar três ou quatro vezes. Agora clique no ícone da borracha (Eraser) e passe por cima de um pontinho para mostrar que ele some. Volte ao lápis. Mostre o zoom uma vez para todos verem os quadradinhos enormes.

Mão na massa (25 min): peça que cada criança clique no lápis, escolha uma cor e faça cinco pontinhos. Depois troque a cor e faça mais cinco. Depois experimente a borracha e apague dois. Circule pela sala ajudando quem não acha o botão. Elogie cada pontinho. Quem quiser pode tentar fazer um caminho de pontinhos atravessando a folha.

Desafio e compartilhar (10 min): proponha "façam um pontinho de cada cor da paleta que conseguirem". Depois peça que cada criança vire a tela para o colega do lado e conte quantas cores usou. Encerre lembrando a palavra mágica do dia: pixel.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use analogias concretas. Diga que o pixel é como um tijolinho de Lego: um sozinho é pequeno, mas muitos juntos viram um castelo. Ou como contas de pulseira: cada conta colorida no lugar certo forma o desenho. Chame a folha de desenho de "folha mágica de quadradinhos". Chame o lápis de "pincel que carimba quadradinhos" e a borracha de "apagador". Fale pouco e mostre muito: faça você primeiro, no projetor, e só depois peça para imitarem. Use a voz para comemorar cada acerto, porque nesta idade o entusiasmo do professor é o que mantém o foco.

## Erros comuns e como ajudar

As crianças costumam clicar e arrastar o mouse sem querer, criando riscos longos em vez de pontinhos; ensine a dar um toque rápido e soltar. Algumas selecionam a borracha e acham que o lápis quebrou; verifique sempre qual ferramenta está ativa. Outras pintam fora da folha e nada acontece; mostre os limites da folha branca. Há quem clique no menu errado e mude o zoom ou abra uma janela; ensine a respirar e chamar o professor em vez de fechar tudo. Por fim, vão querer salvar e bagunçar; nesta aula não precisamos salvar, então diga que hoje a gente só brinca e na próxima aprende a guardar.`,
  exercicios: [
    {
      titulo: `Caça ao lápis e à borracha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o ícone do lápis (Pencil) e o da borracha (Eraser) na barra à esquerda. Peça que cada criança encontre os dois no próprio computador antes de pintar qualquer coisa. Passe de mesa em mesa confirmando.`,
      atividade: `Encontre o lápis na barra de ferramentas e clique nele. Depois encontre a borracha e clique nela. Por último, volte a clicar no lápis para deixar ele escolhido.`,
      gabarito: `A criança acertou se conseguiu clicar no lápis, depois na borracha e terminou com o lápis selecionado. O professor confirma olhando qual ferramenta está destacada na barra e perguntando "qual está ligado agora?", esperando a resposta "o lápis".`,
    },
    {
      titulo: `Chuva de pontinhos coloridos`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Com o lápis já escolhido, demonstre clicar uma vez para nascer um pontinho. Reforce o toque rápido para não virar risco. Mostre como trocar de cor clicando num quadradinho diferente da paleta. Acompanhe a turma contando os pontinhos em voz alta.`,
      atividade: `Escolha uma cor e faça cinco pontinhos na folha. Troque para outra cor e faça mais cinco pontinhos. Você deve ficar com dez pontinhos no total, em duas cores diferentes.`,
      gabarito: `Acertou quem tem pelo menos dez quadradinhos pintados, usando duas cores diferentes, e separados (não um risco contínuo). Se virou risco, o professor mostra de novo o toque rápido e pede para apagar e refazer.`,
    },
    {
      titulo: `Sou um pixel humano`,
      tipo: `jogo de movimento`,
      tempo: `7 minutos`,
      guiaProfessor: `Leve a turma para um espaço livre ou use o tapete da sala. Explique que cada criança é um pixel e que, juntos, eles formam um desenho. Marque no chão uma grade imaginária e oriente quem fica em cada quadradinho. Conduza com comandos curtos e bom humor.`,
      atividade: `Cada um é um pixel. Quando o professor disser "coração", corram para formar juntos um coração no chão. Quando disser "sorriso", formem uma boca sorrindo. Cada criança ocupa só um quadradinho.`,
      gabarito: `Acertaram se, ao olhar de cima ou de longe, dá para reconhecer a figura combinada e cada criança ocupa um único lugar da grade sem amontoar. O sucesso é perceber, juntos, que muitos pixels formam um desenho.`,
    },
    {
      titulo: `Meu pixel no papel`,
      tipo: `desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha quadriculada e o giz de cera. Explique que cada quadradinho do papel é um pixel e que pintar dentro do quadradinho inteiro é a regra. Mostre um exemplo seu pintando alguns quadradinhos no quadro ou numa folha grande.`,
      atividade: `Pinte cada quadradinho da sua folha inteiro, sem deixar pedaços brancos dentro dele, escolhendo a cor que quiser. Faça pelo menos seis quadradinhos pintados, podendo encostar um no outro.`,
      gabarito: `Acertou quem pintou cada quadradinho por completo, respeitando as linhas da grade, com no mínimo seis quadradinhos coloridos. O professor verifica se a criança não pintou por cima das linhas misturando dois quadradinhos num borrão só.`,
    },
    {
      titulo: `Desafio do arco-íris de pixels`,
      tipo: `desafio na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final, mais difícil, para quem já dominou os pontinhos. Mostre a paleta de cores e proponha usar o máximo de cores diferentes. Incentive a apagar com a borracha se errar, sem medo. Convide quem terminar a ajudar um colega.`,
      atividade: `Faça uma fileira de pontinhos atravessando a folha de um lado ao outro, usando uma cor diferente em cada pontinho, como um arco-íris. Se errar, use a borracha e tente de novo.`,
      gabarito: `Acertou quem formou uma linha de pontinhos atravessando a folha com várias cores diferentes (pelo menos quatro cores) e soube usar a borracha para corrigir ao menos uma vez. O resultado é uma fileira colorida reconhecível como um caminho de pixels.`,
    },
  ],
};
