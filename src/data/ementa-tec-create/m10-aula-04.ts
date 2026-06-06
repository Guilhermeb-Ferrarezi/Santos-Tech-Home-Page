import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Vidas, game over e telas do jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar o sistema de vidas que diminui ao sofrer dano e montar as telas de início, game over e vitória em layouts separados, conectadas por botões e transições.`,
  descricao: `Até agora o jogo dos alunos já tem um personagem que se move, troca de animação e ganha pontos. Mas falta uma coisa que todo jogo de verdade tem: um começo, um fim e uma forma de recomeçar. Nesta aula o aluno fecha o ciclo completo do jogo, ensinando o personagem a perder vidas quando sofre dano e levando o jogador para uma tela de game over quando as vidas acabam.

A ideia central é simples e poderosa: uma variável global chamada "vidas" guarda um número (por exemplo, três). Toda vez que o personagem encosta em algo perigoso, esse número diminui em um. Quando chega a zero, o jogo muda para outro layout. Esse pensamento de "guardar um número e reagir quando ele muda" é a base de quase todos os sistemas de jogos: vida, energia, tempo, munição. O aluno já viu essa lógica no score, e agora vai usá-la de novo, reforçando o conceito.

A segunda parte da aula é montar as telas. No Construct 3, cada tela do jogo é um Layout diferente: uma tela de início com o botão "Jogar", a tela do jogo em si, uma tela de "Game Over" e uma tela de "Vitória". O aluno aprende a criar layouts, colocar texto e botões neles, e usar a ação "Go to layout" para pular de uma tela para outra. É a primeira vez que o jogo deixa de ser uma única tela solta e vira uma experiência com começo, meio e fim.

Ao final, o aluno terá um jogo que se comporta como um produto: abre numa tela de boas-vindas, é jogado, e termina mostrando se o jogador venceu ou perdeu, com a opção de tentar de novo. Isso prepara o terreno para as próximas aulas, em que entram inimigos e som, e para a montagem final do jogo completo.`,
  materiais: [
    `Computadores com o Construct 3 aberto no navegador, cada aluno no seu projeto do jogo`,
    `Projetor ou TV para o professor mostrar a tela e os menus do Construct 3`,
    `Projeto de exemplo do professor já com vidas e telas funcionando, para mostrar o resultado final`,
    `Sprite ou imagem de "coração" para representar as vidas na tela (pode ser pixel art do mês anterior)`,
    `Folha impressa com o passo a passo das ações principais (variável global, Subtract, Go to layout)`,
    `Fones de ouvido opcionais, caso algum aluno já queira testar com som`,
  ],
  conceitosChave: [
    `Variável global — um número com nome que vale para o jogo inteiro e não se perde ao trocar de layout, ideal para guardar as vidas.`,
    `Layout — cada "tela" do jogo no Construct 3; o início, o jogo, o game over e a vitória são layouts diferentes.`,
    `Go to layout — a ação que troca a tela atual por outra, levando o jogador de uma cena para a próxima.`,
    `Subtract from (subtrair de) — a ação que diminui um valor de uma variável, usada para tirar uma vida quando o personagem sofre dano.`,
    `Condição "is less or equal" — o teste que verifica se as vidas chegaram a zero ou menos para disparar o game over.`,
    `Botão (Button) — um objeto clicável que o jogador usa para começar ou reiniciar o jogo, ligado a uma ação de troca de layout.`,
    `On click — o evento que dispara uma ação quando o jogador clica num botão, como "Jogar" ou "Tentar de novo".`,
  ],
  treinamento: `## O que o professor precisa saber

O Construct 3 organiza o jogo em Layouts (as telas) e em Event Sheets (as folhas de eventos, onde fica a lógica). Cada layout tem a sua própria event sheet, mas todas podem compartilhar variáveis globais. Uma variável global é criada na event sheet com o botão direito, opção "Add global variable", e mantém o valor mesmo quando o jogo troca de tela. É por isso que usamos uma variável global para as vidas. Você não precisa programar nada: tudo é montado clicando em "Add event" (condição) e "Add action" (ação). Antes da aula, abra o seu projeto de exemplo e confirme que as vidas caem e as telas trocam, para mostrar o resultado pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra o jogo de um aluno da aula anterior e jogue rápido. Pergunte: "O que acontece quando o personagem encosta no perigo? Nada! E como o jogo começa? Já começa jogando." Mostre que falta começo e fim. Apresente o objetivo do dia.

Conteúdo novo guiado (15 min): com todos olhando o projetor, crie a variável de vidas. Abra a Event Sheet, clique com o botão direito numa área vazia e escolha "Add global variable". Nomeie como "vidas", tipo Number, valor inicial 3. Depois mostre a ação de tirar vida: "Add event" no objeto perigoso (ou colisão do personagem), condição "On collision with", e "Add action" escolhendo System > "Subtract from variable" > vidas > 1. Em seguida crie o game over: "Add event" > System > "Compare variable" > vidas > "Less or equal" > 0, e a ação System > "Go to layout" > "GameOver". Por fim, crie o layout: no painel "Project" à esquerda, botão direito em "Layouts" > "Add layout". Faça as telas Inicio, GameOver e Vitoria.

Mão na massa (25 min): cada aluno reproduz no próprio jogo. Primeiro a variável "vidas". Depois a ação de subtrair ao sofrer dano. Depois os três layouts novos com um objeto Text ("Game Over", "Você Venceu", "Meu Jogo") e um objeto Button. No Button, "Add event" > Button > "On clicked" > ação System > "Go to layout". Circule pela sala ajudando individualmente.

Desafio + compartilhar (10 min): peça que adicionem corações na tela que somem conforme as vidas caem (desafio extra) ou simplesmente um Text mostrando "Vidas: " & vidas. Cada aluno mostra o jogo abrindo na tela de início, perdendo e caindo no game over.

## Como explicar de forma clara (linguagem para a idade)

Compare as vidas com um videogame que eles conhecem: "Quantas vidas o Mario tem? Quando o número chega a zero, aparece o quê? Game over!". Diga que a variável global é "uma caixinha com um número escrito" que o jogo inteiro consegue ler. Para os layouts, use a ideia de "telas" ou "cenas de filme": a tela de abertura, a ação e os créditos. Cada botão é "um interruptor: você aperta e algo acontece". Repita que "Go to layout" é como trocar de canal na TV.

## Erros comuns e como ajudar

O erro mais comum é criar a variável como "local" em vez de "global": aí ela zera ao trocar de tela. Confira que usaram "Add global variable". Outro erro é esquecer de definir o valor inicial 3, deixando em 0, o que joga direto para o game over. Muitos digitam o nome do layout errado na ação "Go to layout" (maiúsculas e espaços importam): peça que escolham pela lista, não digitem. Alguns colocam a ação de subtrair sem condição, tirando vidas o tempo todo. Por fim, há quem esqueça de ligar o botão ao evento "On clicked", e o botão fica sem fazer nada. Verifique sempre o par evento-ação.`,
  exercicios: [
    {
      titulo: `Criando a caixinha das vidas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno cria a variável global. Confirme um a um que escolheram "Add global variable" (e não a opção de variável de instância) e que o valor inicial está em 3.`,
      atividade: `No seu jogo, abra a Event Sheet, clique com o botão direito numa área vazia e escolha "Add global variable". Crie uma variável chamada "vidas", do tipo Number, com valor inicial 3.`,
      gabarito: `A variável global "vidas" aparece no topo da Event Sheet com o valor 3. Ela é do tipo Number e fica visível em todos os layouts, pois é global. Forma correta: clicar com o botão direito na Event Sheet, "Add global variable", nome "vidas", tipo Number, valor inicial 3.`,
    },
    {
      titulo: `Perdendo uma vida ao sofrer dano`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Verifique se cada aluno criou um evento de colisão (ou de encostar no perigo) ligado à ação de subtrair. O erro comum é a ação ficar sem condição, tirando vidas sem parar. Teste rodando o jogo.`,
      atividade: `Adicione um evento que, quando o personagem colidir com o objeto perigoso, subtraia 1 da variável "vidas". Use "Add action" > System > "Subtract from variable" > vidas > valor 1. Rode o jogo e veja o número cair.`,
      gabarito: `O evento tem a condição "On collision with" (personagem encosta no perigo) e a ação System "Subtract from variable" com vidas e valor 1. Ao testar, o número de vidas cai de 3 para 2, depois 1, a cada colisão. Sem a condição, as vidas cairiam continuamente, o que está errado.`,
    },
    {
      titulo: `Montando a tela de game over`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Aqui o aluno cria um novo layout e a lógica que leva até ele. Reforce que o nome do layout na ação "Go to layout" deve ser escolhido na lista, nunca digitado, para evitar erro de maiúscula ou espaço.`,
      atividade: `Crie um layout novo chamado "GameOver" com um Text escrito "Game Over". Na Event Sheet do jogo, adicione um evento: System > "Compare variable" > vidas > "Less or equal" > 0, com a ação System > "Go to layout" > GameOver. Teste perdendo todas as vidas.`,
      gabarito: `Existe um layout "GameOver" com um Text "Game Over". O evento compara vidas com "Less or equal" a 0 e dispara "Go to layout" para GameOver. Ao perder as 3 vidas no teste, o jogo muda automaticamente para a tela de game over. Escolher o layout pela lista evita o erro de nome digitado errado.`,
    },
    {
      titulo: `Ligando as telas com botões`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas para que um confira o trabalho do outro. O foco é o evento "On clicked" do Button ligado a "Go to layout". Lembre que esquecer de ligar o botão ao evento o deixa sem função.`,
      atividade: `Em dupla, criem uma tela de início "Inicio" com um Button escrito "Jogar" e a tela "GameOver" com um Button "Tentar de novo". Para cada botão, adicionem o evento Button > "On clicked" > ação System > "Go to layout" (o de início vai para o jogo; o de game over volta para o início ou para o jogo). Testem o ciclo completo.`,
      gabarito: `O layout "Inicio" tem um Button "Jogar" com evento "On clicked" que faz "Go to layout" para o layout do jogo. O layout "GameOver" tem um Button "Tentar de novo" com "On clicked" que volta para o início ou para o jogo. Testando, o jogo abre no início, é jogado, vai ao game over e reinicia pelo botão. Cada botão precisa do par "On clicked" + "Go to layout" para funcionar.`,
    },
    {
      titulo: `O ciclo completo do meu jogo`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Este exercício junta tudo: início, jogo, vitória e game over. Apoie quem ainda não fez a tela de vitória. Ao final, abra uma roda rápida para cada aluno mostrar o ciclo e dizer o que mais gostou de criar.`,
      atividade: `Complete o ciclo do seu jogo: crie também o layout "Vitoria" com um Text "Você Venceu" e uma condição que leve a ele (por exemplo, ao alcançar um certo score, use "Compare variable" > pontos > "Greater or equal" > o número escolhido > "Go to layout" Vitoria). Garanta que o jogo abre na tela de início, vai para o game over ao perder e para a vitória ao vencer. Mostre o ciclo para a turma.`,
      gabarito: `O jogo tem quatro telas conectadas: Inicio (botão Jogar), o jogo, Vitoria (texto "Você Venceu") e GameOver (texto "Game Over" e botão Tentar de novo). As vidas levam ao game over quando chegam a 0; o score (ou outra condição) leva à vitória quando atinge o valor escolhido. O fluxo testado mostra início, jogo, e uma das duas telas de fim, com retorno pelo botão. Esse é o ciclo completo de começar, perder ou vencer e reiniciar.`,
    },
  ],
};
