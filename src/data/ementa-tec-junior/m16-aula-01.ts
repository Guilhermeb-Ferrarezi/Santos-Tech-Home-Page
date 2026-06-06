import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Os sprites entram em cena",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Montar o palco do jogo 2D no Construct 3, arrastando, nomeando e organizando todos os sprites prontos (herói, plataformas e cenário) dentro de um novo layout.`,
  descricao: `Nesta primeira aula do mês, as crianças começam a construir o esqueleto do seu próprio jogo 2D no Construct 3. Antes de fazer qualquer personagem se mexer, todo jogo precisa de um palco: um lugar onde os personagens e os cenários ficam parados, esperando a ação começar. É como montar o tabuleiro antes de jogar. Hoje o foco é justamente esse: pegar as figuras prontas (os sprites) e colocá-las no lugar certo da tela.

Um sprite é qualquer figura que aparece no jogo: o herói, uma plataforma, uma nuvem, uma árvore. No Construct 3, cada sprite vira um objeto que vive dentro de um layout, que é a tela do jogo. A criança vai aprender a abrir um layout novo, arrastar os sprites para dentro dele e dar um nome para cada objeto, do mesmo jeito que damos nome para os nossos brinquedos para não confundir um com o outro.

Organizar é a palavra mágica desta aula. Um jogo bem organizado, com nomes claros como "Herói", "Plataforma" e "Céu", é muito mais fácil de programar depois. Se tudo se chamar "Sprite1", "Sprite2", "Sprite3", a criança e o professor vão se perder nas próximas aulas. Por isso, hoje plantamos uma sementinha de bom hábito: tudo no jogo tem um nome bonito e está no lugar certo.

Ao final da hora, cada aluno terá o palco do seu jogo montado: o herói em pé sobre uma plataforma, com o cenário ao fundo, e todos os objetos nomeados. Esse palco será a base para as próximas sete aulas, quando o herói vai ganhar movimento, poderes, fases e itens. Hoje plantamos; nas próximas aulas, colhemos.`,
  materiais: [
    `Computadores (1 por aluno) com o Construct 3 já aberto e logado no navegador`,
    `Projetor ou TV grande para o professor demonstrar cada passo na tela`,
    `Pasta com os sprites prontos do jogo (herói, 2 ou 3 plataformas, cenário de fundo) em formato PNG, já baixados em cada computador`,
    `Um projeto-exemplo já montado pelo professor, com o palco pronto, para mostrar o objetivo final da aula`,
    `Quadro branco ou cartolina com os nomes sugeridos dos objetos (Herói, Plataforma, Céu, Chão)`,
    `Mouse para cada aluno (arrastar com mouse é bem mais fácil para criança do que com touchpad)`,
    `Adesivos ou carimbos para premiar quem organizar e nomear tudo certinho`,
  ],
  conceitosChave: [
    `Sprite — uma figurinha que aparece no jogo, como o herói, uma plataforma ou uma nuvem.`,
    `Layout — a tela do jogo, o palco onde a gente coloca todos os sprites.`,
    `Objeto — cada coisinha do jogo depois que ela entra no palco; o sprite vira um objeto.`,
    `Nomear — dar um nome bonito e fácil para cada objeto, para a gente não se confundir.`,
    `Arrastar e soltar — segurar a figura com o mouse, levar até o lugar certo e soltar.`,
    `Painel de Projeto — a listinha do lado da tela que mostra todos os objetos que você já criou.`,
    `Organizar — deixar cada coisa no lugar certo, em ordem, para o jogo ficar bonito e fácil de mexer.`,
  ],
  treinamento: `## O que o professor precisa saber

Construct 3 é um criador de jogos que roda no navegador (Chrome ou Edge). Você não precisa instalar nada. Tudo gira em torno de duas telas: o Layout (o palco do jogo, onde você vê e posiciona as figuras) e a folha de Eventos (onde se programa, que veremos só na próxima aula). Hoje ficamos 100 por cento no Layout. Os termos-chave que você vai repetir: Sprite (a figura), Objeto (a figura já dentro do jogo) e Painel de Projeto (a lista de objetos, à direita da tela). Antes da aula, abra o Construct 3, crie um projeto novo e teste arrastar um sprite, para chegar confiante. Tenha um projeto-exemplo pronto para mostrar o resultado final.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Reúna a turma diante do projetor. Mostre seu jogo-exemplo com o palco montado e pergunte: "O que vocês veem nessa tela?". Conduza até a palavra sprite. Explique que hoje cada um vai montar o próprio palco. Faça uma brincadeira rápida: "apontem para algo na sala que poderia ser um sprite" (um cartaz, um boneco).

CONTEÚDO NOVO GUIADO (15 min): No projetor, faça o caminho devagar e peça que observem. 1) Clique em Menu (canto superior esquerdo), depois Novo projeto, dê um nome como "MeuJogo" e clique em Criar. 2) Mostre o Layout grande no centro e o Painel de Projeto à direita. 3) Para inserir o herói: dê dois cliques numa área vazia do Layout (ou clique com o botão direito e escolha Inserir novo objeto), escolha Sprite na lista e clique em Inserir. O cursor vira uma cruz; clique no Layout para posicionar. Abre o Editor de Imagem: clique no ícone de pasta (Carregar imagem) e escolha o arquivo do herói. Feche o editor no X. 4) Mostre o objeto novo no Painel de Projeto e renomeie: clique uma vez sobre o nome, espere e clique de novo (ou tecla F2), digite "Herói" e aperte Enter.

MÃO NA MASSA (25 min): Agora cada criança faz no seu computador. Circule sem parar. Peça, na ordem: criar o projeto, inserir o cenário (nomear "Céu"), inserir o chão/plataformas (nomear "Plataforma" e "Chão"), inserir o herói (nomear "Herói"). Lembre sempre: nomear cada objeto logo depois de criar. Ajude a arrastar os objetos para os lugares: céu ao fundo e bem grande, plataforma no meio, herói em pé sobre a plataforma.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Adicione mais UMA plataforma e dê um nome diferente, como Plataforma2". Depois, cada aluno gira a tela para mostrar o palco montado. Peça a um colega para dizer o nome de um objeto que vê. Elogie quem nomeou tudo certinho.

## Como explicar para crianças

Use a analogia do teatro: "O layout é o palco. Os sprites são os atores e o cenário. Hoje vamos colocar cada um no lugar certo, mas ninguém vai se mexer ainda; eles vão se mexer na próxima aula." Para nomear, diga: "Imagine uma caixa de brinquedos sem nome nenhum: você nunca acha o que quer! Por isso colocamos uma etiqueta com nome em cada objeto." Para arrastar: "Segure a figura com o mouse, leve com cuidado e solte onde quiser, como mover uma peça no tabuleiro."

## Erros comuns e como ajudar

O erro mais comum é esquecer de nomear: o objeto fica "Sprite", "Sprite2". Crie o hábito de nomear logo após inserir; passe de mesa em mesa conferindo o Painel de Projeto. Outro erro: clicar fora e perder o cursor de cruz na hora de posicionar; basta repetir Inserir novo objeto. Algumas crianças sobrepõem o herói atrás do céu e somem; explique que o que foi colocado por último fica na frente e mande arrastar o herói de novo por cima. Há quem clique mil vezes e crie objetos repetidos; mostre o Painel de Projeto e ajude a apagar os extras com a tecla Delete. Por fim, esticar a figura sem querer pelas alças dos cantos: oriente a clicar fora para soltar e usar Ctrl+Z para desfazer.`,
  exercicios: [
    {
      titulo: `Caça aos sprites na tela`,
      tipo: `Observação e oral (aquecimento)`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o jogo-exemplo no projetor com o palco montado. Faça a turma apontar e nomear o que veem. O objetivo é fixar a palavra "sprite" antes de mexer no computador. Não precisa de mouse ainda.`,
      atividade: `Olhe para a tela do professor e diga em voz alta: quais figuras você vê no jogo? Aponte o herói, a plataforma e o cenário do fundo. Cada uma dessas figuras tem um nome especial. Qual é esse nome?`,
      gabarito: `As figuras do jogo se chamam sprites. Na tela aparecem três tipos: o herói (personagem), as plataformas (onde o herói fica em pé) e o cenário/céu (o fundo). Toda figura que aparece num jogo 2D é um sprite.`,
    },
    {
      titulo: `Criando o seu primeiro layout`,
      tipo: `Prática guiada passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, devagar. Projete cada clique. Confirme que todos chegaram à tela do Layout vazio antes de seguir. Quem travar, ajude a clicar em Menu e Novo projeto.`,
      atividade: `No seu computador, clique em Menu no canto de cima. Depois clique em Novo projeto. Dê o nome "MeuJogo" e clique em Criar. Pronto: você está vendo o palco do seu jogo, ainda vazio!`,
      gabarito: `O aluno deve ter um projeto novo aberto chamado "MeuJogo", mostrando o Layout vazio no centro e o Painel de Projeto à direita. O caminho correto é Menu, depois Novo projeto, depois digitar o nome e clicar em Criar.`,
    },
    {
      titulo: `O herói entra no palco`,
      tipo: `Prática individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Oriente o caminho: dois cliques no Layout vazio, escolher Sprite, clicar para posicionar, carregar a imagem do herói pelo ícone de pasta e fechar o editor. Lembre de nomear logo em seguida. Passe de mesa em mesa.`,
      atividade: `Dê dois cliques numa parte vazia do palco. Escolha Sprite e clique em Inserir. Clique no palco para colocar. Quando abrir o editor de imagem, clique no ícone de pasta e escolha o arquivo do herói. Feche no X. Por último, renomeie o objeto para "Herói".`,
      gabarito: `O aluno deve ter um objeto Sprite com a imagem do herói visível no Layout e, no Painel de Projeto, esse objeto deve aparecer com o nome "Herói" (e não "Sprite"). A nomeação é feita clicando no nome e digitando, ou com a tecla F2.`,
    },
    {
      titulo: `Montando o cenário completo`,
      tipo: `Prática individual com organização`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora o aluno repete o processo para o céu e as plataformas. Reforce nomear cada um na hora: "Céu", "Plataforma", "Chão". Ajude a posicionar: céu grande ao fundo, plataforma no meio, herói em pé sobre a plataforma. Se o herói sumir atrás do céu, explique a ordem das camadas.`,
      atividade: `Insira o cenário do fundo e dê o nome "Céu". Depois insira o chão e nomeie "Chão". Insira uma plataforma e nomeie "Plataforma". Agora arraste cada objeto para o lugar certo: o céu bem grande lá no fundo, a plataforma no meio e o herói em pé em cima dela.`,
      gabarito: `O palco deve ter pelo menos quatro objetos nomeados no Painel de Projeto: Herói, Céu, Chão e Plataforma. No Layout, o céu ocupa o fundo, o chão fica embaixo, a plataforma no meio e o herói aparece em pé sobre a plataforma, visível (não escondido atrás do céu).`,
    },
    {
      titulo: `Desafio: a plataforma extra`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio final de dificuldade maior: o aluno cria mais uma plataforma sozinho e a nomeia diferente, mostrando que entendeu por que nomes únicos importam. Ao final, conduza a roda de compartilhamento: cada um mostra o palco e um colega lê um nome de objeto.`,
      atividade: `Adicione mais UMA plataforma ao seu jogo. Como já existe uma chamada "Plataforma", dê um nome diferente para a nova, como "Plataforma2". Coloque-a num lugar legal do palco. Depois, mostre seu jogo para a turma e deixe um colega ler o nome de um dos seus objetos.`,
      gabarito: `O aluno deve ter uma segunda plataforma no Layout, nomeada de forma única (por exemplo "Plataforma2"), diferente da primeira. O ponto-chave é entender que dois objetos não podem ter o mesmo nome e que nomes claros ajudam a organizar o jogo. No compartilhamento, o palco aparece montado com todos os objetos nomeados.`,
    },
  ],
};
