import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Animação que Reage",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança liga as animações do personagem às ações do jogador no Construct 3, fazendo o herói tocar a animação de correr ao andar, a de pulo ao pular e a de parado ao ficar quieto.`,
  descricao: `Na aula passada o herói ganhou movimento. Hoje vamos deixar esse movimento muito mais bonito e vivo: cada vez que o jogador faz uma ação, o personagem troca de animação na hora certa. Quando o herói anda para o lado, ele toca a animação de correr; quando salta, aparece a pose de pulo; quando para quieto, ele volta para a animação de parado. É como se o boneco "sentisse" o que o jogador está fazendo e respondesse com o corpo.

O segredo para isso são os eventos. No Construct 3, um evento é uma regrinha do tipo "QUANDO isto acontecer, ENTÃO faça aquilo". Hoje as crianças vão montar regras assim: "QUANDO o jogador apertar a seta para o lado, ENTÃO toque a animação Correr". Elas não digitam código nenhum; montam tudo clicando e escolhendo opções em listas, na folha de eventos chamada Event Sheet. Cada animação (Parado, Correr, Pulo) já estará criada e nomeada no objeto do herói, vindo das aulas de pixel art e animação que a turma já fez.

Por que isso importa? Porque é aqui que o jogo começa a parecer um jogo de verdade. Um personagem que corre quando anda e salta com pose de pulo passa muito mais emoção do que uma figura que desliza parada pela tela. Além disso, ligar ação a animação é uma das ideias mais importantes de toda a criação de games: o jogador faz algo, e o jogo responde. As crianças vão sentir esse poder ao apertar uma tecla e ver o boneco reagir.

O professor não precisa ser especialista em Construct 3. A aula é um tutorial passo a passo, com os nomes exatos dos botões, painéis e menus, para que mesmo um professor iniciante conduza a turma com tranquilidade, demonstrando no projetor e ajudando criança por criança. No fim, cada aluno ainda vai poder ajustar a velocidade das animações e deixar a troca entre uma e outra bem suave.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com o Construct 3 já aberto no navegador e com o projeto do jogo, salvo da aula anterior, carregado antes de começar.`,
    `Projetor ou TV grande ligado ao computador do professor, para demonstrar cada clique na tela cheia.`,
    `O objeto do herói já com as três animações criadas e nomeadas exatamente: "Parado", "Correr" e "Pulo" (deixe isso conferido antes da aula).`,
    `Um projeto de exemplo já pronto, com as animações reagindo certinho, para você mostrar a meta da aula logo no início.`,
    `Cartões ilustrados com bonecos nas poses parado, correndo e pulando, para a roda de conversa.`,
    `Crachás ou etiquetas com os nomes das crianças e adesivos/estrelinhas para premiar quem participa.`,
    `Um arquivo de reserva do projeto, salvo num lugar fácil, caso alguma criança bagunce os eventos e seja preciso recarregar rápido.`,
  ],
  conceitosChave: [
    `Animação — é o desenho do personagem trocando de pose bem rápido, como um flipbook, para parecer que ele se mexe de verdade.`,
    `Evento — é uma regrinha do jogo do tipo "QUANDO acontecer isto, ENTÃO faça aquilo".`,
    `Condição — é a parte do "QUANDO": o que precisa acontecer para a regra valer, como o jogador apertar uma seta.`,
    `Ação — é a parte do "ENTÃO": o que o jogo faz quando a regra vale, como tocar a animação de correr.`,
    `Set animation — é a ação que manda o personagem trocar para a animação que você escolher pelo nome.`,
    `Event Sheet — é a folha de regras do jogo, a lista onde a gente monta todos os eventos.`,
    `Velocidade da animação — é o quão rápido as poses trocam: rápido demais vira borrão, devagar demais fica preguiçoso.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Construct 3, o jogo é montado com eventos numa folha chamada Event Sheet. Cada evento tem uma Condição (o "QUANDO", em verde à esquerda) e uma ou mais Ações (o "ENTÃO", à direita). Para hoje, o herói já deve ter três animações nomeadas exatamente: "Parado", "Correr" e "Pulo". Confira isso antes da aula: dê duplo clique no herói, abra o Animations Editor e veja os nomes na lista à esquerda. Se o behavior de movimento usado for o "Platform", ele oferece condições prontas como "Is moving", "On jump" e o sinalizador "Is on floor", que deixam a aula muito mais fácil. A ação que troca a animação chama-se "Set animation": você digita o nome da animação entre aspas, por exemplo "Correr". Decore só isto: condição é o QUANDO; Set animation é o ENTÃO. Teste o passo a passo você mesmo uma vez antes da turma chegar; isso acalma todo mundo.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Construct 3)

Aquecimento (10 min): com a turma longe dos computadores, mostre os cartões parado/correndo/pulando e brinque de "estátua reage": você fala "anda!", "pula!", "para!" e as crianças fazem a pose. Diga que hoje o herói delas vai aprender a reagir do mesmo jeito.

Conteúdo novo guiado (15 min): no projetor, abra o projeto e clique na aba "Event sheet 1" (no topo, ao lado de "Layout 1"). Clique em "Add event", escolha o objeto do herói e a condição "Is moving" (ou "Simulate control" conforme o projeto). Com o evento criado, clique em "Add action" à direita, escolha o herói, role até "Set animation" e digite "Correr" no campo, deixando "From beginning". Repita criando: ao pular, condição "On jump", ação Set animation "Pulo"; e parado, condição "Is NOT moving", ação Set animation "Parado". Mostre o botão Play (triângulo no topo) para testar.

Mão na massa (25 min): cada criança monta os três eventos no próprio computador. Circule de mesa em mesa. A meta mínima: andar toca "Correr" e parar volta para "Parado". Quem conseguir, adiciona o pulo. Mostre como ajustar a velocidade: duplo clique no herói, abra o Animations Editor, clique na animação e mude o campo "Speed" no Properties Bar à esquerda. Teste com o Play depois de cada mudança.

Desafio + compartilhar (10 min): proponha "deixe a troca bem suave", ajustando a velocidade até o boneco trocar de pose sem pular feio. Faça uma roda de orgulho: cada criança aperta as teclas e mostra o herói reagindo na tela.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame o evento de "regrinha mágica" e fale sempre no formato "QUANDO... ENTÃO...", com gesto: uma mão pergunta, a outra responde. Diga: "QUANDO você anda, ENTÃO o herói corre". Compare a animação com um flipbook ou com uma pessoa de verdade: "quando você corre, suas perninhas mexem; o boneco também precisa mexer". Chame o Set animation de "trocar a roupa do movimento". Para a velocidade, use a ideia de devagarzinho e rapidinho: "rápido demais vira borrão; devagar demais fica preguiçoso; vamos achar o ponto certinho". Comemore cada teste: "Olha! Ele correu sozinho quando você andou!".

## Erros comuns e como ajudar

O erro mais comum é digitar o nome da animação diferente do nome real (por exemplo "correr" com letra diferente de "Correr"); o Construct 3 não reclama, mas a animação não toca. Mostre a criança o nome certo no Animations Editor e peça que copie igualzinho. Outro erro é pôr a ação no evento errado, fazendo o herói correr quando deveria parar; leia juntos o QUANDO e o ENTÃO em voz alta para conferir. Algumas crianças esquecem de testar e acham que nada funciona; lembre sempre de apertar Play. Se o boneco fica "tremendo" entre duas animações, geralmente são dois eventos brigando; ajude a deixar o "Parado" só quando NÃO está se movendo. Se um computador travar ou a folha de eventos virar bagunça, recarregue o arquivo de reserva e coloque a criança em dupla para não perder o ritmo.`,
  exercicios: [
    {
      titulo: `Estátua que reage`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Longe dos computadores, com os cartões de poses na mão, comande "anda!", "pula!", "para!" e as crianças fazem a pose certa. Depois pergunte qual animação o herói deve tocar em cada caso. Conecte cada ação a uma animação do jogo.`,
      atividade: `Quando o professor falar "anda!", corra no lugar; quando falar "pula!", pule; quando falar "para!", fique de estátua. Depois responda: qual animação o herói toca quando o jogador anda? E quando pula? E quando para?`,
      gabarito: `A criança faz a pose certa em cada comando e responde que andar toca a animação "Correr", pular toca "Pulo" e ficar quieto toca "Parado". Acertou quando liga cada ação do jogador à animação correspondente, mesmo usando palavras simples.`,
    },
    {
      titulo: `A regrinha do correr`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor e deixe cada criança montar no próprio computador. Abra a aba "Event sheet 1", clique em "Add event", escolha o herói e a condição de andar; depois "Add action", "Set animation", digite "Correr". Confira o nome igualzinho ao do Animations Editor.`,
      atividade: `Na folha de eventos, monte a regra: QUANDO o jogador anda, ENTÃO o herói toca a animação "Correr". Use "Add event" para o QUANDO e "Add action" com "Set animation" para o ENTÃO. Aperte Play e ande para testar.`,
      gabarito: `Existe um evento com a condição de movimento e a ação "Set animation" com o nome "Correr" escrito igualzinho. Acertou quando, ao apertar Play e andar, o herói toca a animação de correr na tela.`,
    },
    {
      titulo: `Parou? Volta pro Parado!`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como criar o evento da animação de parado usando a condição "Is NOT moving" (ou equivalente do projeto) e a ação Set animation "Parado". Reforce que essa regra é o par da regra de correr: uma vale quando anda, a outra quando NÃO anda. Teste com Play.`,
      atividade: `Monte a segunda regra: QUANDO o jogador NÃO está andando, ENTÃO o herói toca a animação "Parado". Aperte Play, ande e depois solte a tecla: o herói deve correr e, ao parar, voltar para a pose de parado.`,
      gabarito: `Há um evento com a condição de "não está se movendo" e a ação Set animation "Parado". Acertou quando, no teste com Play, o herói corre ao andar e volta sozinho para a animação de parado ao soltar a tecla.`,
    },
    {
      titulo: `O salto ganha pose`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem já fez correr e parar, ajude a adicionar o pulo. Use a condição "On jump" (do behavior Platform) e a ação Set animation "Pulo". Se o behavior do projeto não tiver "On jump", use a tecla de pulo como condição. Confira o nome "Pulo" no editor.`,
      atividade: `Crie a terceira regra: QUANDO o jogador pula, ENTÃO o herói toca a animação "Pulo". Aperte Play e pule para ver a pose de salto aparecer. Confira se, ao cair e andar, ele volta a correr.`,
      gabarito: `Existe um evento de pulo com a ação Set animation "Pulo". Acertou quando, no teste, o herói mostra a pose de pulo ao saltar e retorna corretamente para correr ou parar depois, sem travar numa animação só.`,
    },
    {
      titulo: `Velocidade na medida certa`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como ajustar a velocidade: duplo clique no herói para abrir o Animations Editor, clique na animação na lista da esquerda e mude o campo "Speed" no Properties Bar. Incentive testar com Play após cada ajuste, comparando rápido demais e devagar demais até achar o ponto bom e suave.`,
      atividade: `Abra a animação "Correr" e mude o número da velocidade (Speed). Teste com Play. Se ficar um borrão, diminua; se ficar preguiçoso, aumente. Ajuste até a corrida ficar suave e bonita, e mostre o resultado para a turma.`,
      gabarito: `A criança altera o valor de Speed da animação e testa o efeito com Play, parando num valor que deixa a troca de poses suave (nem rápida demais nem lenta demais). Acertou quando explica, mesmo com poucas palavras, por que escolheu aquela velocidade.`,
    },
  ],
};
