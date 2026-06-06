import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Pulando de Fase",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar o toque em uma porta ou estrela para trocar o cenário e mudar o palco, ligando duas fases dentro do mesmo jogo.`,
  descricao: `Nesta aula, as crianças descobrem como um jogo pode ter mais de uma fase. Na aula passada elas aprenderam que, quando um personagem encosta em outro, alguma coisa acontece. Agora vamos usar esse mesmo toque para algo novo e muito empolgante: passar de fase. Quando o personagem encosta em uma porta ou em uma estrela, o cenário do jogo inteiro se transforma, como se a criança tivesse atravessado uma porta mágica para um lugar diferente.

Isso é importante porque a ideia de fases está em quase todos os jogos que as crianças conhecem e amam. Entender que existe uma fase 1 e uma fase 2, e que dá para ir de uma para a outra, é um passo gigante para que elas comecem a pensar como criadoras de jogos, e não só como jogadoras. É a primeira vez que o jogo delas tem um começo, um meio e uma continuação.

No Scratch, o cenário do jogo é chamado de palco, e cada desenho de fundo é uma fantasia do palco. Trocar de fase, para o computador, é simplesmente trocar a fantasia do palco. As crianças vão montar um mini-jogo com duas fases: uma floresta e um castelo (ou dois lugares que elas escolherem). Na primeira fase haverá uma porta ou uma estrela; ao tocar nela, o jogo muda para a segunda fase.

Ao longo da hora, o professor vai guiar passo a passo: adicionar um segundo fundo, programar o toque que muda a fantasia e testar a passagem de fase clicando na bandeira verde. No final, cada criança terá um joguinho que sai de um lugar e chega em outro só de encostar na porta, e poderá mostrar para os colegas.`,
  materiais: [
    `Computadores (um por aluno ou em dupla) com o Scratch já aberto em um projeto novo`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo`,
    `Projeto de exemplo pronto pelo professor, com duas fases ligadas por uma porta, para mostrar o resultado final logo no começo`,
    `Crachás ou etiquetas com o nome de cada criança para colar no computador`,
    `Folhas de papel e lápis de cor para o exercício de desenhar as duas fases`,
    `Cartões grandes impressos com a imagem dos blocos "quando esta bandeira for clicada", "se ... então" e "mude o fundo para ..."`,
    `Adesivos ou carimbos de estrela para premiar quem conseguir fazer a passagem de fase funcionar`,
  ],
  conceitosChave: [
    `Palco — é o lugar onde o jogo acontece, o fundo grande atrás dos personagens.`,
    `Fantasia do palco — cada desenho de fundo diferente; o palco pode trocar de fantasia como quem troca de roupa.`,
    `Fase — um pedaço do jogo com seu próprio cenário; quando você passa de fase, vai para um lugar novo.`,
    `Colisão (toque) — quando dois desenhos se encostam na tela; o jogo percebe e faz algo acontecer.`,
    `Porta mágica — o objeto (porta ou estrela) que, ao ser tocado, leva o personagem para a próxima fase.`,
    `Bloco "mude o fundo para" — o comando que manda o palco trocar de fantasia e mudar a fase.`,
    `Bandeira verde — o botão que faz o jogo começar do início para a gente testar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Em Scratch, o fundo do jogo fica no Palco. Você o encontra no canto inferior direito da tela, no quadradinho separado dos personagens (que são chamados de atores ou sprites). O Palco pode ter vários fundos diferentes, e cada um se chama "fantasia". Trocar de fase, na prática, é mandar o Palco trocar de fantasia. O bloco que faz isso é "mude o fundo para [nome]", da categoria roxa "Aparência".

Para detectar o toque, usamos o bloco azul-claro "tocando em [...]?" da categoria "Sensores". Ele fica dentro de um bloco "se ... então" (categoria amarela "Controle"), e tudo isso dentro de um bloco "sempre", para o jogo ficar conferindo o tempo todo. A lógica completa é: sempre, se o personagem está tocando na porta, então mude o fundo para a fase 2. Simples assim. Teste tudo clicando na bandeira verde, acima do palco.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

AQUECIMENTO (10 min): Reúna a turma na frente do projetor. Abra o seu projeto de exemplo e mostre o personagem andando até a porta e o cenário mudando. Pergunte: "O que aconteceu? Para onde ele foi?". Relembre a aula passada: "Lembram do toque, quando uma coisa encosta na outra? Hoje o toque vai abrir uma porta de fase!".

CONTEUDO NOVO GUIADO (15 min): No seu computador, projetando, clique no Palco (quadradinho à direita, embaixo). Em cima, à esquerda, clique na aba "Fundos". Clique no ícone de paisagem (montanha) embaixo, "Escolher um fundo", e adicione dois fundos: um para a fase 1 e outro para a fase 2. Mostre os nomes deles. Depois clique no personagem, vá em "Código" e monte devagar: arraste "quando [bandeira] for clicada" (Eventos), encaixe "sempre" (Controle), dentro dele "se ... então", e no buraco do "se" encaixe "tocando em [porta]?" (Sensores). Dentro do "se", coloque "mude o fundo para [fase 2]" (Aparência). Diga cada nome de bloco em voz alta.

MAO NA MASSA (25 min): Agora as crianças repetem no computador delas. Passe de mesa em mesa. Primeiro todos adicionam os dois fundos no Palco. Depois adicionam um ator de porta ou estrela (botão de gatinho no canto, "Escolher um ator"). Por fim montam o script de toque. Vá conferindo e ajudando a encaixar os blocos. Quem terminar testa clicando na bandeira verde e anda com as setas até a porta.

DESAFIO + COMPARTILHAR (10 min): Proponha: "Quem consegue colocar uma estrela na fase 2 que faz voltar para a fase 1?". Depois, junte a turma e deixe duas ou três crianças mostrarem o jogo no projetor, passando de fase ao vivo. Dê um adesivo de estrela para cada um que conseguiu a passagem.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de porta mágica: "O palco é o quarto do jogo. A porta é mágica: quando o boneco encosta nela, o quarto inteiro vira outro lugar!". Compare a troca de fantasia do palco com trocar de roupa: "O fundo tirou a roupa de floresta e vestiu a roupa de castelo". Para o "sempre", diga que o computador é um vigia que fica de olho o tempo todo, esperando o boneco encostar na porta. Faça gestos: ande com os dedos pela mesa até bater numa caneta (a porta) e diga "agora muda!".

## Erros comuns e como ajudar

O erro mais comum é adicionar o segundo fundo mas esquecer o bloco "mude o fundo para", então nada muda; mostre que o cenário só troca com esse bloco. Outro erro é colocar o script no Palco em vez de no personagem que toca a porta; oriente clicar no ator certo antes de montar. Muitas crianças esquecem o "sempre", então o jogo confere só uma vez e parece não funcionar; reforce o bloco "sempre" por fora. Há também quem escolha "tocando em" apontando para o fundo errado; ajude a abrir a listinha e escolher o nome da porta. Por fim, alguns esquecem de clicar na bandeira verde para testar; lembre que a bandeira é o botão de começar.`,
  exercicios: [
    {
      titulo: `Trocando a roupa do palco`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que, antes de fazer a porta funcionar, todos precisam ter dois lugares no jogo. Mostre no projetor como clicar no Palco e adicionar dois fundos. Depois deixe cada criança fazer no seu computador enquanto você passa nas mesas.`,
      atividade: `Clique no Palco (quadradinho embaixo, à direita). Vá na aba "Fundos". Use "Escolher um fundo" e adicione dois fundos diferentes: um para a fase 1 e um para a fase 2. Clique em cada um para ver o cenário mudar na tela.`,
      gabarito: `A criança acertou quando o Palco tem dois fundos na lista da aba "Fundos" e, ao clicar em cada um, o cenário grande muda na tela. Se só houver um fundo, ela precisa adicionar o segundo.`,
    },
    {
      titulo: `A porta mágica funciona!`,
      tipo: `prática na ferramenta (jogo)`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre os blocos da demonstração. Monte um de cada vez junto com a turma, dizendo o nome em voz alta. Ajude a encaixar o bloco "tocando em" apontando para a porta certa. Peça para testarem com a bandeira verde.`,
      atividade: `Adicione um ator de porta ou estrela. No personagem que anda, monte: "quando a bandeira for clicada", depois "sempre", dentro dele "se tocando na porta então", e dentro do se "mude o fundo para a fase 2". Clique na bandeira verde e ande até a porta.`,
      gabarito: `Acertou quando, ao andar o personagem até a porta, o cenário troca da fase 1 para a fase 2. Se o fundo não muda, conferir se há o bloco "mude o fundo para", se o "sempre" está por fora e se o "tocando em" aponta para a porta.`,
    },
    {
      titulo: `Roda das fases`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Sente a turma em roda. Faça perguntas curtas e deixe cada criança falar de um jogo que ela conhece que tem fases. Conduza com leveza, ligando as respostas à ideia de trocar de cenário.`,
      atividade: `Em roda, responda: Qual é o seu jogo favorito que tem fases? O que muda quando você passa de fase? No nosso jogo, o que faz a fase mudar?`,
      gabarito: `Espera-se que a criança cite um jogo com fases e diga que o cenário ou o lugar muda. Para a última pergunta, a resposta certa é "encostar na porta ou na estrela" (o toque) faz a fase mudar.`,
    },
    {
      titulo: `Desenhando minhas duas fases`,
      tipo: `desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue uma folha dividida ao meio e lápis de cor. Explique que cada criança vai desenhar como serão suas duas fases e onde fica a porta. Esse desenho vira o plano do jogo delas.`,
      atividade: `Na metade de cima da folha, desenhe a fase 1 e marque com um X onde fica a porta ou a estrela. Na metade de baixo, desenhe a fase 2, o lugar para onde o personagem vai depois de encostar na porta.`,
      gabarito: `Acertou quando a folha mostra dois cenários diferentes e há um X marcando a porta na fase 1. O importante é que a fase 1 e a fase 2 sejam lugares distintos, com a porta indicada.`,
    },
    {
      titulo: `Desafio: a porta de volta`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha apenas para quem já fez a passagem da fase 1 para a 2. Mostre que agora a fase 2 também pode ter uma porta ou estrela que leva de volta. Ajude a copiar a mesma ideia, mudando o destino para a fase 1.`,
      atividade: `Coloque uma estrela na fase 2. Faça um script parecido: "sempre, se tocando na estrela então mude o fundo para a fase 1". Teste indo da fase 1 para a 2 e voltando da 2 para a 1.`,
      gabarito: `Acertou quando o personagem vai da fase 1 para a fase 2 tocando na porta e volta da fase 2 para a fase 1 tocando na estrela, sem travar. As duas trocas de fundo precisam funcionar ao clicar na bandeira verde.`,
    },
  ],
};
