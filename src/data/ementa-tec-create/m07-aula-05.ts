import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Poder da Paleta de Cores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compreender como paletas limitadas, harmonia e contraste definem o clima visual de um jogo e aprender a criar, organizar, importar e trocar cores de uma paleta dentro do Aseprite.`,
  descricao: `Nesta aula o aluno descobre que, em pixel art, a cor não é só enfeite: ela é uma das ferramentas mais poderosas para contar história e criar emoção. Diferente de um desenho com milhões de tons, o pixel art clássico trabalha com paletas limitadas, ou seja, um conjunto pequeno e escolhido a dedo de cores. Essa limitação não é castigo, é vantagem: poucas cores bem pensadas deixam a arte coerente, com identidade, e ainda obrigam o artista a usar cada tom com intenção. O aluno vai perceber que uma mesma cena pode parecer alegre, sombria, gelada ou venenosa só trocando a paleta.

A aula introduz três ideias centrais de teoria de cor aplicadas ao pixel: paletas limitadas, harmonia e contraste. Harmonia é o que faz as cores combinarem, soarem bem juntas; contraste é a diferença entre claro e escuro (valor) que faz o personagem se destacar do fundo e a forma ficar legível mesmo num sprite minúsculo. O aluno aprende que num jogo a leitura rápida é tudo: o jogador precisa enxergar o herói na hora, e isso depende muito mais de contraste de valor do que de matiz.

A parte prática acontece toda no Aseprite. O aluno conhece o painel de paleta (Palette), aprende a criar e organizar a própria paleta colocando as cores em ordem do escuro ao claro, salva essa paleta para reusar, importa paletas prontas da comunidade (formatos como .gpl, .pal, .png e .aseprite) e usa o recurso de trocar uma cor da paleta para repintar um sprite inteiro de uma só vez. Com isso ele testa, na prática, como a paleta define o clima visual: pega um mesmo sprite e gera versões "dia", "noite" e "perigo" só mexendo nas cores.

Esta é a quinta de oito aulas do mês de pixel art. Ela não cobre a montagem completa do personagem nem a organização final do conjunto de sprites, que vêm nas próximas semanas. Aqui o foco é dominar a paleta como ferramenta criativa: criar, organizar, importar e trocar cores, entendendo o efeito disso no clima do jogo.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar o painel de paleta do Aseprite ao vivo`,
    `Arquivo de exemplo do professor: um sprite simples (16x16 ou 32x32) já pintado, para servir de cobaia nas trocas de cor`,
    `Duas ou três paletas prontas em arquivo (.gpl ou .png) para os alunos importarem, como a "DB16", a "PICO-8" e uma de tons frios`,
    `Folha impressa com uma roda de cores simples e exemplos de paleta clima (dia, noite, perigo)`,
    `Bloco de rascunho e lápis para anotar a ordem das cores antes de montar a paleta`,
  ],
  conceitosChave: [
    `Paleta — o conjunto fechado de cores que você decidiu usar na sua arte; em pixel art costuma ser pequeno e escolhido com cuidado.`,
    `Paleta limitada — usar poucas cores de propósito; deixa a arte coerente, com identidade, e força você a usar cada tom com intenção.`,
    `Matiz (Hue) — o "nome" da cor: vermelho, azul, verde; é o tom em si, sem falar de claro ou escuro.`,
    `Valor (Value) — o quão clara ou escura é uma cor; é o que mais ajuda o jogador a enxergar a forma do sprite.`,
    `Contraste — a diferença entre as cores, principalmente entre claro e escuro; bom contraste faz o personagem se destacar do fundo.`,
    `Harmonia — quando as cores combinam e soam bem juntas, passando uma sensação organizada e agradável.`,
    `Clima visual (mood) — a emoção que a cena transmite (alegre, sombria, gelada, perigosa) e que muda só trocando a paleta.`,
  ],
  treinamento: `## O que o professor precisa saber

Em pixel art, paleta é poder. Trabalhar com poucas cores escolhidas a dedo deixa a arte mais bonita e coerente do que ter milhões de tons à disposição. Três conceitos resolvem quase tudo: matiz (o nome da cor), valor (claro ou escuro) e contraste (a diferença entre eles). A regra de ouro é que o valor manda mais que o matiz: se você imaginar o sprite em preto e branco e ainda assim reconhecer a forma, o contraste está bom. No Aseprite, as cores ficam no painel de paleta (Palette), normalmente embaixo ou ao lado esquerdo. Cada quadradinho é uma cor; clicar com o botão esquerdo escolhe a cor de frente. O grande truque da aula é o "Replace Color" e a edição da paleta: ao mudar uma cor na paleta, todo pixel que usava aquela cor muda junto. Antes da aula, abra o Aseprite, deixe o sprite de exemplo pronto e teste você mesmo os passos abaixo uma vez.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: no projetor, mostre o mesmo sprite em duas paletas bem diferentes (uma quente, uma fria) e pergunte: "Qual parece de dia? Qual parece assustador? E por quê?". Relembre rápido o que viram nas aulas anteriores sobre contorno e volume e conecte: a cor termina o trabalho da forma.

15 min — Conteúdo novo guiado: abra o painel de paleta (Palette). Mostre que clicar num quadradinho define a cor de frente. Crie uma cor nova clicando no ícone de mais (+) no canto do painel e ajuste no seletor de cor pelos campos HSV: explique Hue (matiz), Saturation (saturação) e Value (valor). Monte ali uma rampa de 3 a 4 tons da mesma cor, do escuro ao claro, e arraste para colocá-los em ordem. Salve a paleta no menu da paleta (ícone de três barras) em "Save Palette". Depois importe uma paleta pronta pelo mesmo menu em "Load Palette" e escolha o arquivo (.gpl ou .png). Por fim, mostre a troca: dê dois cliques numa cor da paleta para editá-la e veja o sprite inteiro mudar; mostre também o atalho de Replace Color em Edit > Replace Color.

25 min — Mão na massa: cada aluno abre o sprite de exemplo. Tarefa: 1) criar uma paleta própria de 6 a 8 cores, organizada do escuro ao claro; 2) salvar a paleta com o próprio nome; 3) importar uma paleta pronta; 4) gerar duas versões do mesmo sprite (clima "dia" e clima "noite") trocando cores da paleta. Circule pela sala ajudando individualmente.

10 min — Desafio e compartilhar: desafie quem terminar a criar uma terceira versão "perigo" (tons de vermelho e roxo). Cada aluno mostra as versões na tela e diz, em uma frase, qual paleta passa melhor o clima e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Paleta limitada é como "um estojo de poucas canetas": com poucas cores boas você desenha melhor do que com cem cores bagunçadas. Valor é "se a foto fosse em preto e branco, dava pra ver?". Contraste é "o herói tem que aparecer na hora, não pode sumir no fundo". Clima é "a mesma sala de dia é aconchegante, de noite dá medo". Mostre sempre o efeito ao vivo: mude uma cor e deixe a turma reagir ao sprite inteiro virando outra coisa na hora. Reforce que organizar a paleta do escuro ao claro não é frescura: facilita achar a cor e enxergar a rampa.

## Erros comuns e como ajudar

O erro mais comum é escolher cores lindas, mas todas com o mesmo valor (todas médias): o sprite fica "chapado" e some no fundo. Peça para imaginar em preto e branco e puxar uns tons bem escuros e bem claros. Outro erro é usar saturação no talo em tudo, deixando a arte berrante; explique que misturar um pouco de matiz vizinho deixa mais natural. Muitos esquecem que editar uma cor da paleta muda TODOS os pixels iguais e se assustam; mostre que isso é justamente o poder, e que dá pra desfazer com Ctrl+Z. Há quem confunda salvar a paleta com salvar a imagem: lembre que "Save Palette" guarda só as cores. Por fim, alguns importam uma paleta e some o que tinham; avise para salvar a paleta própria antes de carregar outra.`,
  exercicios: [
    {
      titulo: `Minha primeira rampa`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que todos achem o ícone de mais (+) no painel de paleta e os campos HSV no seletor de cor. Circule conferindo se as três cores são de fato do escuro ao claro, e não três cores aleatórias.`,
      atividade: `No painel de paleta, crie três tons da mesma cor (por exemplo, um azul escuro, um azul médio e um azul claro) ajustando só o Value no seletor. Coloque-os em ordem, do mais escuro ao mais claro.`,
      gabarito: `O aluno tem três quadradinhos do mesmo matiz, variando apenas no valor, organizados do escuro para o claro. Em preto e branco, daria para ver claramente a diferença entre eles. Isso é uma rampa de cor correta.`,
    },
    {
      titulo: `Paleta organizada e salva`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o menu da paleta (ícone de três barras) e a opção "Save Palette". O erro frequente é confundir com salvar a imagem; reforce a diferença. Confira se a paleta tem variação de valor, não só de matiz.`,
      atividade: `Monte uma paleta própria com 6 a 8 cores, organizada do escuro ao claro. Salve a paleta com o seu nome usando "Save Palette" no menu do painel de paleta.`,
      gabarito: `Paleta com 6 a 8 cores, ordenada do escuro ao claro e contendo tons bem escuros e bem claros (bom contraste de valor). Arquivo de paleta salvo com o nome do aluno. A paleta salva guarda só as cores, não a imagem.`,
    },
    {
      titulo: `Importando uma paleta pronta`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Antes, peça que todos salvem a paleta própria, para não perderem ao carregar outra. Mostre "Load Palette" e deixe-os escolher entre as paletas que você forneceu. Ajude quem não achar o arquivo.`,
      atividade: `Salve primeiro a sua paleta. Depois, em "Load Palette", importe uma das paletas prontas da comunidade (como DB16 ou PICO-8). Observe quantas cores ela tem e como estão organizadas.`,
      gabarito: `Aluno carregou com sucesso uma paleta pronta (.gpl ou .png), tendo salvo a própria antes. Ele consegue dizer aproximadamente quantas cores a paleta importada tem e notar que também está organizada por valor e por famílias de matiz.`,
    },
    {
      titulo: `Dia e noite no mesmo sprite`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria a versão "dia" e o outro a "noite" do mesmo sprite, trocando cores da paleta (duplo clique na cor ou Edit > Replace Color). Ajude-os a comparar lado a lado e a explicar o efeito.`,
      atividade: `Em dupla, peguem o mesmo sprite de exemplo. Um faz a versão de DIA (cores quentes e claras) e o outro a de NOITE (cores frias e escuras), trocando as cores pela paleta. Comparem as duas e digam o que mudou na sensação.`,
      gabarito: `Duas versões do mesmo sprite com climas claramente diferentes: a de dia mais clara e quente, a de noite mais escura e fria. A dupla explica que o desenho é o mesmo e só a paleta mudou, e que isso já muda totalmente a emoção da cena.`,
    },
    {
      titulo: `Três climas para o jogo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `É a entrega da aula. Verifique cada versão e a justificativa. Confirme que o aluno trocou as cores pela paleta (e não repintou à mão pixel a pixel) e que manteve bom contraste de valor em todas as versões.`,
      atividade: `Crie três versões do mesmo sprite trocando só a paleta: "dia" (alegre), "noite" (sombria) e "perigo" (vermelhos e roxos). Escreva uma frase explicando qual paleta passa melhor cada clima e por quê.`,
      gabarito: `Aprovado quando: as três versões partem do mesmo sprite e diferem só nas cores; cada uma transmite seu clima (dia alegre, noite sombria, perigo tenso); todas mantêm bom contraste de valor, com o personagem legível. A frase justifica a escolha ligando cor a emoção (por exemplo, vermelho e escuro passam tensão).`,
    },
  ],
};
