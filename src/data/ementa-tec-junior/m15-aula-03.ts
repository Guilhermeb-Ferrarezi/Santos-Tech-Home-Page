import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Nasce o herói do jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança inventa o personagem principal do seu jogo e desenha o corpo básico em pixels com uma silhueta clara dentro do tamanho certo do sprite.`,
  descricao: `Hoje é um dia muito especial: nasce o herói do jogo de cada criança! Depois de revisar o Aseprite e treinar as boas práticas do pixel artista, chegou a hora de criar o personagem principal que vai correr, pular e viver aventuras no jogo do ano. Cada aluno vai inventar quem é esse herói e desenhar o corpo dele em pixels, peça por peça: cabeça, tronco, braços e pernas.

O foco desta aula é a silhueta. Silhueta é o contorno do personagem, a forma escura que a gente vê quando ele está contra a luz, como uma sombra. Um bom herói de jogo precisa de uma silhueta clara e fácil de reconhecer, mesmo bem pequenininho na tela. Por isso vamos desenhar primeiro a forma do corpo, sem nos preocuparmos ainda com cores e detalhes (isso fica para a próxima aula). É como modelar um boneco de massinha antes de pintar.

Trabalharemos dentro de um sprite de tamanho certo, geralmente 32 por 32 pixels. Esse quadradinho é a casa do herói, e o corpo precisa caber dentro dele com folga, deixando uma margem nas bordas. As crianças vão aprender a dividir o espaço com a cabeça em cima, o tronco no meio e as pernas embaixo, montando uma figurinha em pé, vista de frente ou de lado, do jeito que combina com o jogo de cada uma.

No final, cada aluno terá um herói de pixels começando a ganhar vida na tela. Mais importante que ficar perfeito é a criança conseguir contar quem é o personagem dela e mostrar que dá para reconhecer a forma do corpo. Esse desenho será a base que vamos colorir e detalhar nas aulas seguintes até virar um sprite completo do jogo.`,
  materiais: [
    `Computadores com o Aseprite já aberto, um por criança`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar`,
    `Arquivo novo de sprite em 32 por 32 pixels preparado em cada computador`,
    `Exemplos prontos de heróis de pixel art impressos ou na tela (um robô, um gatinho, uma menina aventureira)`,
    `Folhas de rascunho e lápis para a criança rabiscar a ideia antes de desenhar no programa`,
    `Cartões com palavras de inspiração (mago, ninja, dinossauro, astronauta, princesa, super-herói)`,
    `Adesivos ou carimbos para premiar os heróis terminados`,
  ],
  conceitosChave: [
    `Personagem principal — o herói da história, aquele que você controla e que vive a aventura do jogo.`,
    `Silhueta — o contorno do personagem, a forma escura que a gente reconhece mesmo sem ver os detalhes, igual a uma sombra.`,
    `Sprite — o desenho do personagem feito em pixels que vai aparecer e se mexer dentro do jogo.`,
    `Proporção — o tamanho de cada parte do corpo comparado com as outras, como a cabeça em relação ao tronco e às pernas.`,
    `Margem — o espacinho vazio entre o desenho e a borda do quadrado, para o herói não ficar grudado na parede.`,
    `Formas básicas — desenhar usando bolinhas, quadradinhos e retângulos simples para montar o corpo aos poucos.`,
    `Pose de frente — quando o personagem está olhando para nós, mostrando o rosto e os dois braços.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula a criança cria o herói do jogo dela e desenha o corpo em pixels. O segredo é a silhueta: a forma do corpo precisa ser clara e fácil de reconhecer. Não vamos pintar com várias cores nem colocar olhos e bocas ainda; isso é assunto da Aula 4. Hoje desenhamos só a forma com uma cor escura.

Antes da aula, deixe em cada computador um arquivo novo aberto: menu "File" depois "New", largura (Width) 32 e altura (Height) 32 pixels, e clique "OK". Aumente o zoom com a tecla "+" até o quadriculado encher bem a tela. Ative a grade em "View" depois "Show" depois "Grid" para a criança enxergar cada pixel. Tenha na paleta uma cor escura selecionada (preto ou cinza escuro) e a ferramenta lápis (atalho "B", ícone de lápis na barra de ferramentas) já pronta.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 2 perguntando o que é um pixel e por que mantemos o desenho organizado. Mostre no projetor os exemplos de heróis prontos e brinque: "Quem é esse personagem só de olhar a sombra dele?" Tampe os detalhes com a mão e mostre que a silhueta já conta tudo. Peça que cada criança imagine o herói do próprio jogo e diga em uma frase quem é.

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, demonstre desenhando junto. Primeiro mostre a margem: não encoste nas bordas, deixe um espacinho. Comece pela cabeça com a ferramenta lápis ("B"), fazendo um quadradinho ou bolinha de uns 8 por 8 pixels na parte de cima. Depois o tronco, um retângulo no meio. Depois os dois braços, um de cada lado, e por fim as duas pernas embaixo. Vá nomeando cada parte. Se errar, mostre o apagador ("E") ou o atalho "Ctrl Z" para desfazer. Lembre que tudo é da mesma cor escura por enquanto, porque queremos a silhueta.

Mão na massa (25 min): cada criança desenha o próprio herói no computador. Circule pela sala ajudando. Garanta que comecem pela cabeça e desçam o corpo, mantendo a margem. Incentive heróis variados (robô, bichinho, aventureira). Se alguém travar, peça para rascunhar no papel primeiro. Quem terminar a forma pode ajustar o tamanho para o corpo caber bem centralizado.

Desafio e compartilhar (10 min): proponha o desafio "passe no teste da sombra": dá para reconhecer o herói só pela silhueta? Peça para um colega adivinhar o que é. Depois cada criança mostra o herói para a turma e diz o nome dele. Salve o arquivo em "File" depois "Save As" com o nome da criança.

## Como explicar para crianças

Use a analogia da sombra: "A silhueta é como a sua sombra no chão; mesmo sem ver sua cor, dá para saber que é você." Fale do boneco de massinha: "Primeiro fazemos a forma do corpo, depois pintamos." Para o tamanho, diga: "O quadrado é a casinha do herói; ele cabe dentro sem encostar nas paredes." Conte o corpo como peças de montar: cabeça, tronco, braços e pernas, uma de cada vez.

## Erros comuns e como ajudar

A criança desenha grande demais e o corpo encosta nas bordas: peça para apagar e começar a cabeça mais para o centro, lembrando a margem. A cabeça fica gigante ou minúscula: mostre a proporção comparando com os exemplos. A criança quer pintar tudo colorido agora: explique com carinho que hoje é só a forma, a cor vem na próxima aula. Esquece um braço ou uma perna: aponte as peças que faltam contando junto. Aperta o lápis e arrasta torto fazendo borrões: ensine a clicar pixel por pixel e a usar "Ctrl Z" para desfazer sem medo. Travou na ideia: ofereça os cartões de inspiração para escolher um tipo de herói.`,
  exercicios: [
    {
      titulo: `Quem é o meu herói?`,
      tipo: `Conversa e imaginação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça uma roda rápida antes de ligar o desenho. Ajude cada criança a decidir quem é o herói do jogo dela com perguntas simples: é uma pessoa, um bicho ou um robô? Anote ou peça que guardem a ideia na cabeça. Aceite qualquer escolha válida.`,
      atividade: `Pense e conte para a turma em uma frase quem é o herói do seu jogo. Diga o nome dele e uma coisa que ele gosta de fazer.`,
      gabarito: `Não há resposta certa ou errada. Espera-se uma frase clara, por exemplo: "Meu herói é o Robô Zico e ele adora pular." O importante é a criança ter definido um personagem principal para começar a desenhar.`,
    },
    {
      titulo: `Caça à silhueta`,
      tipo: `Observação e adivinhação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor três a quatro silhuetas escuras de heróis (sem detalhes). Tampe as cores e detalhes. Pergunte à turma qual é cada um. Reforce que a forma do corpo já entrega o personagem.`,
      atividade: `Olhe as sombras dos personagens na tela e tente adivinhar o que é cada um: um gatinho, um robô, uma aventureira? Levante a mão e diga o que você reconheceu.`,
      gabarito: `Os alunos devem reconhecer cada figura apenas pela silhueta, por exemplo: orelhas pontudas e rabo são o gatinho; corpo quadrado com antena é o robô; cabelo comprido e mochila é a aventureira. Mostra que uma boa silhueta é fácil de reconhecer.`,
    },
    {
      titulo: `A casinha do herói`,
      tipo: `Mão na massa guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o arquivo de 32 por 32 aberto, demonstre no projetor e peça que copiem. Foque na margem e na cabeça. Verifique se ninguém encostou nas bordas e se a cabeça ficou centralizada na parte de cima.`,
      atividade: `No seu sprite de 32 por 32, use o lápis (tecla "B") com a cor escura e desenhe só a cabeça do seu herói lá em cima, deixando um espacinho de margem até as bordas. Não encoste na parede do quadrado!`,
      gabarito: `A criança deve ter uma cabeça de tamanho médio (cerca de 8 por 8 pixels) desenhada na cor escura, posicionada na parte de cima e com margem visível em volta. Se encostou na borda, deve apagar com "E" ou desfazer com "Ctrl Z" e refazer mais para dentro.`,
    },
    {
      titulo: `Montando o corpo`,
      tipo: `Desenho passo a passo`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora a criança completa o corpo: tronco, dois braços e duas pernas, tudo na mesma cor escura. Circule lembrando a ordem (de cima para baixo) e a proporção. Ajude quem esquecer um membro contando as peças junto.`,
      atividade: `Continue o seu herói: desenhe o tronco no meio, depois um braço de cada lado e as duas pernas embaixo. Use sempre a cor escura. Confira se ele tem cabeça, tronco, dois braços e duas pernas.`,
      gabarito: `O sprite deve mostrar um corpo completo em silhueta: cabeça em cima, tronco no meio, dois braços nas laterais e duas pernas embaixo, todos na mesma cor escura, com proporção razoável e dentro do quadrado com margem. Faltando algum membro, a criança deve acrescentá-lo.`,
    },
    {
      titulo: `Teste da sombra`,
      tipo: `Desafio em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte as crianças em duplas. Cada uma mostra o herói para o colega, que tenta dizer o que é só olhando a forma. Se o colega não reconhecer, oriente pequenos ajustes (deixar orelhas, mochila ou formato mais marcante). Termine salvando o arquivo em "File" depois "Save As".`,
      atividade: `Mostre o seu herói para um colega e peça para ele adivinhar o que é só olhando a forma. Se ele não reconhecer, melhore um detalhe da silhueta para ficar mais fácil. Depois salve o seu arquivo.`,
      gabarito: `O sucesso é o colega reconhecer o tipo de personagem apenas pela silhueta. Se não reconhecer, a criança ajusta a forma (por exemplo, deixa as orelhas maiores ou marca a mochila) até ficar claro. Ao final, o arquivo deve estar salvo com o nome do aluno, pronto para colorir na próxima aula.`,
    },
  ],
};
