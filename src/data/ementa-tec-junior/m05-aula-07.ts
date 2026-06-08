import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o esqueleto do jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta cenário, objetos, uma regra e o movimento do personagem em um único jogo de teste, vê tudo funcionando ao mesmo tempo e percebe o que ainda falta arrumar.`,
  descricao: `Nesta aula nós montamos o "esqueleto" do jogo. Esqueleto é a estrutura básica, igual ao esqueleto do nosso corpo que segura tudo no lugar. Até agora as crianças aprenderam pedaços separados: colocar o cenário e os objetos no palco, criar uma regra do tipo "quando... faça...", e fazer o personagem se mexer com as setas do teclado. Hoje todos esses pedaços se encaixam num jogo único, simples e de teste, com a arte provisória (desenhos temporários, só para experimentar).

Por que isso importa? Porque um jogo de verdade não é feito de partes soltas: é o cenário, mais os objetos, mais as regras, mais o movimento, tudo conversando junto. Quando a criança roda o jogo e vê o personagem andando pelo cenário e uma regra acontecendo, ela entende, pela primeira vez, que aquilo já é "um joguinho". Esse momento é muito poderoso para a motivação da turma.

O que vamos fazer na prática: abrir o projeto, conferir se o cenário e os objetos estão no palco (o Layout), confirmar que o personagem anda com o comportamento de movimento, e adicionar uma regra simples que dê uma resposta na tela (por exemplo, recolher um item ou tocar uma borda). No fim, a turma roda o jogo, observa o que funciona e faz uma lista do que ainda falta arrumar. Essa lista vira o ponto de partida das próximas aulas, quando o projeto do mês continua.

Atenção: o objetivo de hoje NÃO é deixar o jogo bonito nem completo. É ter o esqueleto de pé, com todas as partes ligadas, mesmo que feio e com bugs. "Funcionando junto" vale mais do que "perfeito".`,
  materiais: [
    `Computadores (um por criança ou em dupla) com o Construct 3 já aberto no navegador e o projeto do mês carregado.`,
    `Projetor ou TV ligada ao computador do professor, para demonstrar cada passo na tela grande.`,
    `Arquivo de exemplo pronto pelo professor: um projeto com cenário, um personagem que anda e uma regra simples, para mostrar o "esqueleto" pronto antes de a turma fazer o seu.`,
    `Imagens provisórias simples já salvas (um quadrado para o chão, um círculo para o personagem, uma estrelinha para o item), caso falte arte de alguma criança.`,
    `Folhas de papel e lápis de cor para a atividade de desenho e para a "lista do que falta arrumar".`,
    `Crachás ou etiquetas com os nomes das partes do jogo (Cenário, Objeto, Regra, Movimento) para a dinâmica em roda.`,
    `Lista de presença e um cronômetro ou relógio visível para controlar o ritmo de 10/15/25/10 minutos.`,
  ],
  conceitosChave: [
    `Esqueleto do jogo — a estrutura básica que segura tudo junto: cenário, objetos, regras e movimento, mesmo sem estar bonito ainda.`,
    `Layout — o palco onde a gente monta o jogo, com o chão, o personagem e os itens no lugar.`,
    `Folha de Eventos (Event Sheet) — o caderninho de regras do jogo, onde ficam guardados todos os "quando... faça...".`,
    `Comportamento (Behavior) — um poder mágico que a gente cola num objeto para ele já saber fazer algo, como andar com as setas.`,
    `Arte provisória — desenhos temporários e simples que usamos só para testar, e que serão trocados depois.`,
    `Testar (Preview) — apertar o botão de play para ver o jogo rodando de verdade e descobrir o que funciona.`,
    `Lista do que falta — anotação das coisas que ainda precisam ser arrumadas no jogo, feita depois de testar.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Construct 3 roda no navegador (use o Chrome). Um projeto tem três áreas que você vai usar hoje. Primeiro, o Layout: é o palco, onde os objetos ficam posicionados. Segundo, a Folha de Eventos (Event Sheet): é a lista de regras, no formato "quando acontece tal coisa, faça tal coisa". Terceiro, os Comportamentos (Behaviors): poderes que você cola num objeto para ele já se comportar de um jeito, sem você programar do zero.

Para esta aula, o esqueleto precisa de quatro partes ligadas: (1) um cenário, geralmente um objeto Tiled Background ou Sprite servindo de chão/fundo; (2) objetos no palco, como o personagem e um item; (3) o movimento, dado pelo comportamento "8 Direction" no personagem (ou o que a turma usou na Aula 6); (4) uma regra na Folha de Eventos que dê uma resposta visível. Uma regra fácil e segura: o personagem encosta no item e o item some. Em eventos, isso é "On collision with" entre Personagem e Item, ação "Item -> Destroy".

Antes da aula, monte o projeto de exemplo e teste apertando o botão Preview (o ícone de play no topo, ou a tecla F5). Se rodar na sua máquina, vai rodar na das crianças.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

10 min - Aquecimento e revisão. Em roda, mostre os crachás Cenário, Objeto, Regra e Movimento e pergunte o que cada um faz. Abra o projeto de exemplo no projetor e aperte o botão Preview (play, no canto superior) para a turma ver o esqueleto rodando. Diga: "Hoje cada um vai montar o seu."

15 min - Conteúdo novo guiado. No projetor, com calma: confirme o cenário no Layout. Clique no personagem e mostre, no painel Properties (esquerda), o comportamento de movimento já colado. Agora a regra: clique na aba Event Sheet, clique em "Add event", escolha o Personagem, escolha "On collision with another object", aponte o Item. Depois "Add action", escolha o Item e a ação "Destroy". Aperte Preview e mostre o item sumindo ao encostar.

25 min - Mão na massa. Cada criança (ou dupla) faz o mesmo no seu projeto: cenário no lugar, personagem andando, e a regra de colisão. Circule mesa a mesa. Quem terminar cedo adiciona um segundo item.

10 min - Desafio e compartilhar. Cada um roda o seu jogo e diz uma coisa que funciona e uma coisa que falta. Anote numa "lista do que falta" coletiva no quadro.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia do corpo: "O esqueleto segura nosso corpo em pé. O jogo também tem um esqueleto que segura tudo junto." Use a caixa de brinquedos: "O Layout é a caixa onde a gente arruma os brinquedos: o chão, o boneco e a estrelinha." Para a regra, use mágica: "A Folha de Eventos é o caderninho de feitiços. O feitiço de hoje é: quando o boneco encostar na estrela, ela desaparece." Para a arte provisória: "Esses desenhos são de mentirinha, só para testar. Depois a gente troca pelos bonitos." Sempre demonstre primeiro no projetor e só depois peça para fazerem; nesta idade, ver vale mais que ouvir.

## Erros comuns e como ajudar

A regra não funciona: quase sempre a criança escolheu o objeto errado na colisão, ou esqueceu de adicionar a ação. Peça para ela ler em voz alta "quando o personagem encostar no item, o item some" e confiram juntos se os nomes batem. O personagem não anda: o comportamento de movimento sumiu ou está no objeto errado; clique no personagem e confira o painel Properties. Tudo amontoado no Layout: ajude a arrastar os objetos para lugares separados. Frustração por estar "feio": lembre que hoje é só o esqueleto e que feio funcionando é vitória. Criança apertando muitos botões: combine que só mexe no que você mostrou; o resto a gente vê depois.`,
  exercicios: [
    {
      titulo: `Encaixando as quatro peças`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor o projeto de exemplo já com cenário, personagem que anda e a regra de colisão. Diga que hoje a missão é ter as quatro peças ligadas: cenário, objeto, movimento e regra. Peça que cada criança abra o próprio projeto e confira, uma a uma, se cada peça está presente, sem ainda criar nada novo.`,
      atividade: `No seu projeto, encontre e mostre para o professor: o cenário (o chão ou fundo no Layout), o personagem, um item e o comportamento de movimento no personagem. Aponte cada peça com o mouse.`,
      gabarito: `A criança acertou quando consegue apontar as quatro peças no projeto: o cenário no Layout, o personagem, ao menos um item e o comportamento de movimento aparecendo no painel Properties do personagem. Se faltar alguma, o professor ajuda a localizar ou a adicionar antes de seguir.`,
    },
    {
      titulo: `O feitiço da estrelinha que some`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre passo a passo na Folha de Eventos: "Add event", escolher o personagem, "On collision with another object", apontar o item; depois "Add action", escolher o item, ação "Destroy". Aperte Preview e mostre o item sumindo. Em seguida, deixe a turma reproduzir no próprio projeto, circulando para conferir os nomes dos objetos.`,
      atividade: `Crie no seu jogo a regra: quando o personagem encostar no item, o item desaparece. Depois aperte o botão de play (Preview) e teste encostando no item.`,
      gabarito: `Está correto quando, ao rodar o jogo e levar o personagem até o item, o item desaparece da tela. Se não some, conferir se a colisão usa os objetos certos e se a ação "Destroy" foi adicionada ao item.`,
    },
    {
      titulo: `Roda do esqueleto: o que tem no nosso jogo?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda com os crachás Cenário, Objeto, Regra e Movimento. Levante um crachá por vez e pergunte o que aquela peça faz no jogo e onde ela aparece na tela do Construct 3. Estimule todos a falarem uma frase, mesmo curta. Valorize respostas com exemplos do jogo de cada um.`,
      atividade: `Em roda, cada criança escolhe uma das quatro peças (cenário, objeto, regra ou movimento) e conta, com suas palavras, o que essa peça faz no jogo dela.`,
      gabarito: `A criança acertou quando associa cada peça à sua função: cenário é onde o jogo acontece, objeto é o que fica no palco, regra é o "quando... faça...", e movimento é o personagem andando. Respostas com exemplo do próprio jogo valem mais.`,
    },
    {
      titulo: `Desenhando o esqueleto do meu jogo`,
      tipo: `desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe a tela do jogo dela mostrando as quatro peças e escreva (ou o professor escreve para os menores) um nome ao lado de cada uma. Explique que é um mapa do jogo, para a gente lembrar o que já existe. Passe ajudando a nomear as peças.`,
      atividade: `Desenhe a tela do seu jogo. Mostre o cenário, o personagem, o item e desenhe uma setinha indicando para onde o personagem se mexe. Coloque um nome em cada parte.`,
      gabarito: `Está correto quando o desenho mostra as quatro peças identificáveis: um cenário/chão, um personagem, ao menos um item e uma indicação de movimento (a setinha). Não importa a beleza, e sim que as quatro partes apareçam nomeadas.`,
    },
    {
      titulo: `Caça-bugs: a lista do que falta arrumar`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Explique que todo jogo em construção tem coisas para arrumar e que encontrá-las é trabalho de quem cria jogos. Peça que cada criança rode o jogo e procure UMA coisa que funciona e UMA coisa que está estranha ou faltando. Reúna as respostas numa "lista do que falta" no quadro, que será usada nas próximas aulas.`,
      atividade: `Rode o seu jogo com o botão de play. Encontre uma coisa legal que já funciona e uma coisa que está errada ou faltando. Conte as duas para a turma.`,
      gabarito: `A criança acertou quando aponta, depois de testar, pelo menos um acerto (ex.: "o personagem anda", "a estrela some") e pelo menos um problema real (ex.: "ele atravessa a parede", "tem item demais"). O valor está em observar o jogo rodando e identificar algo concreto para melhorar.`,
    },
  ],
};
