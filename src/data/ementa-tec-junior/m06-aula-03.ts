import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Caça às cores: montando minha paleta",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a escolher, trocar e organizar suas cores favoritas no Aseprite, montando uma mini paleta própria e clicando na cor certa antes de pintar.`,
  descricao: `Nesta aula a turma vai conhecer o lugar mais colorido do Aseprite: a paleta de cores. A paleta é aquele quadradinho cheio de cores que fica do lado da tela, parecido com a caixa de lápis de cor ou a palheta de tinta do pintor. Em vez de misturar tinta com o pincel, aqui a criança só precisa clicar numa cor para já sair pintando com ela.

Saber escolher a cor certa ANTES de pintar é um passo muito importante na pixel art. Quando o jogo do mês começar a ganhar vida, cada fruta, cada estrela e cada personagem vai precisar das suas cores. Se a criança aprende cedo a olhar para a paleta, clicar na cor e só depois pintar, ela erra menos e fica mais orgulhosa do resultado. É uma rotina simples: escolho, clico, pinto.

Hoje a criançada também vai descobrir que dá para montar uma paleta só sua, com as cores que ela mais gosta. Vamos guiar todo mundo a separar poucas cores (umas cinco ou seis), porque na pixel art menos cores deixam o desenho mais bonito e mais fácil de fazer. Pense numa caixa de lápis pequena, com só os melhores lápis dentro.

Ao final, cada aluno terá brincado de caçar cores, clicado para trocar a cor do pincel e montado uma mini paleta organizada. É a base perfeita para as próximas aulas, quando eles vão desenhar objetos e personagens com a arte do próprio jogo.`,
  materiais: [
    `Um computador por aluno com o Aseprite já aberto e um arquivo novo de 32x32 pixels criado (Menu File, depois New)`,
    `Projetor ou TV ligada ao computador do professor para demonstrar onde fica a paleta e onde clicar`,
    `Um arquivo de exemplo já pintado (uma frutinha ou estrela simples) para mostrar o antes e o depois das cores`,
    `Tela aumentada (zoom) no Aseprite para as crianças enxergarem cada quadradinho de cor de longe`,
    `Folhas de papel quadriculado grosso e lápis de cor ou giz de cera para a atividade no papel`,
    `Cartões impressos com manchas de cores (vermelho, azul, amarelo, verde, rosa, marrom) para o jogo da caça às cores`,
    `Adesivos ou estrelinhas para premiar quem montar a mini paleta`,
  ],
  conceitosChave: [
    `Paleta — a caixinha cheia de cores que fica na tela do Aseprite, igual a uma caixa de lápis de cor.`,
    `Cor selecionada — a cor que está escolhida agora; é com ela que o pincel vai pintar.`,
    `Cor de frente — a cor principal, a que aparece pintada quando você clica com o botão esquerdo do mouse.`,
    `Trocar de cor — clicar em outro quadradinho da paleta para o pincel começar a pintar com uma cor diferente.`,
    `Mini paleta — um grupinho pequeno de cores favoritas, com poucas cores, para deixar o desenho mais bonito.`,
    `Conta-gotas — a ferramentinha de pegar cor; ela copia uma cor que já está no desenho para o pincel.`,
    `Organizar as cores — deixar as cores favoritas juntinhas e em ordem para achar rápido na hora de pintar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A paleta de cores do Aseprite fica, por padrão, no lado direito da tela (em alguns temas aparece embaixo). É um conjunto de quadradinhos coloridos. A cor que estiver selecionada vira a "cor de frente" (foreground), que é a cor que o pincel usa quando você clica com o botão esquerdo do mouse. No canto, perto da paleta, há dois quadrados sobrepostos: o de cima é a cor de frente e o de baixo é a cor de fundo (background, usada com o botão direito). Para esta aula, foque só na cor de frente.

Para trocar a cor do pincel, basta clicar UMA vez no quadradinho desejado da paleta. O pincel (atalho B, ou o ícone de lápis na barra de ferramentas à esquerda) passa a pintar com essa cor. Existe também o conta-gotas (ícone de gota, atalho I, ou segurar a tecla Alt enquanto usa o pincel): ele copia para o pincel uma cor que já está no desenho. Isso é ótimo para a criança "pegar" de volta uma cor que ela já usou.

A paleta pode ser editada. Para mudar um quadradinho, dê dois cliques nele e abre a roda de cores; escolha a cor e confirme. Há ainda botões pequenos acima da paleta com um sinal de mais (adicionar cor) e um de menos (remover cor). Você não precisa de tudo isso hoje: o objetivo é a criança CLICAR para escolher e trocar, e reconhecer que poucas cores bastam.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: mostre no projetor um desenho pintado e um sem cor. Pergunte: "Qual fica mais legal?" Relembre o pincel da aula passada. Diga que hoje vão caçar cores.

15 min — Conteúdo novo guiado: no seu Aseprite projetado, aponte a paleta no lado direito. Clique num quadradinho vermelho e pinte um tracinho: "Olha, virou vermelho!" Clique no azul e pinte: "Agora azul!" Mostre o quadrado da cor de frente mudando de cor junto. Repita devagar: escolho, clico, pinto. Mostre o conta-gotas pegando uma cor do desenho.

25 min — Mão na massa: cada criança, no arquivo 32x32, escolhe cinco ou seis cores favoritas e pinta um tracinho de cada num cantinho da tela, como se fosse uma listinha. Circule pela sala. Peça que falem em voz alta a cor antes de clicar. Ajude quem não acha a paleta apontando com o dedo na tela.

10 min — Desafio e compartilhar: peça que cada um pinte um quadradão usando só as cores da sua mini paleta. Depois, faça uma volta rápida: cada criança mostra a tela e diz a cor que mais gosta.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame a paleta de "caixa de lápis de cor do computador". Diga que o pincel é mágico: ele vira a cor do quadradinho em que você clicar. Use a frase-rima "Escolho, clico, pinto!" e repita várias vezes batendo palma no ritmo. Para a mini paleta, diga que vamos pegar só os "lápis campeões", os preferidos, porque uma caixa pequena é mais fácil de carregar. O conta-gotas vira um "imã que puxa a cor" de volta.

## Erros comuns e como ajudar

A criança pinta e a cor sai errada porque esqueceu de clicar na paleta antes: relembre "primeiro clico na cor, depois pinto". Outra: clica na paleta achando que está pintando na tela; mostre a diferença entre a área de cores e a área de desenho. Algumas escolhem cores demais e a tela vira bagunça; limite a cinco ou seis com carinho. Há quem clique com o botão direito sem querer e pinte a cor de fundo; peça que usem sempre o botão esquerdo. Se a paleta sumiu da tela, vá em Menu View para reativá-la ou troque de tema, mas evite mexer durante a aula.`,
  exercicios: [
    {
      titulo: `Escolho, clico, pinto!`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete o seu Aseprite e faça uma vez bem devagar enquanto fala em voz alta. Depois conte "um, dois, três" e todos fazem juntos no próprio computador. Circule confirmando que cada um clicou na paleta antes de pintar.`,
      atividade: `No seu arquivo de 32x32, clique numa cor da paleta no lado direito e pinte um risquinho. Agora clique numa cor diferente e pinte outro risquinho do lado. Faça isso com três cores diferentes.`,
      gabarito: `Acertou quem tem três risquinhos de três cores diferentes na tela, mostrando que conseguiu clicar na paleta e trocar a cor do pincel antes de cada risco.`,
    },
    {
      titulo: `A caça às cores`,
      tipo: `Jogo`,
      tempo: `8 minutos`,
      guiaProfessor: `Fale uma cor em voz alta e dê um tempinho. Quem encontra e clica na cor certa na paleta levanta a mão. Comece por cores fáceis (vermelho, azul, amarelo) e depois cores mais difíceis (rosa, marrom, roxo). Elogie e dê uma estrelinha.`,
      atividade: `Quando o professor disser uma cor, procure ela na sua paleta, clique nela e pinte um pontinho na tela. Vença quem achar a cor mais rápido sem errar.`,
      gabarito: `Acertou quem clicou na cor exata que o professor falou e pintou o pontinho daquela cor. Se o pontinho saiu de outra cor, é só procurar de novo na paleta.`,
    },
    {
      titulo: `Roda das cores favoritas`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte de um em um qual a cor preferida e por quê. Conecte com o jogo: "Que cor a sua estrela vai ter? E a sua frutinha?" Anote no quadro as cores mais citadas para virarem ideias de paleta.`,
      atividade: `Na roda, diga a sua cor favorita e uma coisa do jogo que poderia ter essa cor (uma fruta, uma estrela, uma moeda, o herói).`,
      gabarito: `Respondeu certo quem disse uma cor e ligou ela a algo do jogo, por exemplo "amarelo, porque a moeda é amarela". Toda resposta com uma cor e uma ideia vale.`,
    },
    {
      titulo: `Minha paleta no papel`,
      tipo: `Desenho no papel`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue a folha quadriculada e os lápis de cor. Mostre que vamos pintar só cinco quadradinhos, cada um de uma cor preferida, formando uma listinha. Reforce que poucas cores deixam tudo mais bonito.`,
      atividade: `Pinte cinco quadradinhos da folha, cada um com uma cor que você ama. Essa é a sua mini paleta de papel. Não passe de cinco cores.`,
      gabarito: `Acertou quem pintou exatamente cinco quadradinhos, cada um de uma cor diferente, formando uma mini paleta organizada e sem misturar as cores num quadradinho só.`,
    },
    {
      titulo: `Desafio do quadrado colorido`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança use SÓ as cinco cores da mini paleta de papel para pintar um quadradão grande no Aseprite. Ande pela sala lembrando "só os lápis campeões" e ajude quem pega cor fora da lista usando o conta-gotas para voltar à cor certa.`,
      atividade: `Pinte um quadrado bem grande na sua tela usando apenas as cinco cores da sua mini paleta. Tente fazer um desenho legal, como listras ou bolinhas, só com essas cores.`,
      gabarito: `Acertou quem preencheu o quadrado usando somente as cinco cores escolhidas, sem entrar cores de fora. O resultado mostra que a criança consegue escolher e trocar de cor clicando na paleta com intenção.`,
    },
  ],
};
