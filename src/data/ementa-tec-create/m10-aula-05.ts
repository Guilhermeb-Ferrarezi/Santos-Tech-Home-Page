import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Inimigos em ação: criando os adversários",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar um inimigo com animações próprias, movimento automático e colisão com o jogador, definindo dano, derrota e recompensa ao vencê-lo.`,
  descricao: `Até agora o jogo dos alunos tinha um herói que se move, pula e troca de animação, além de pontos e telas. Mas todo bom jogo precisa de obstáculos vivos: os inimigos. Nesta aula o aluno vai dar vida aos adversários, transformando um simples objeto parado em uma criatura que anda sozinha, ameaça o jogador e pode ser derrotada. É o momento em que o jogo deixa de ser um passeio tranquilo e passa a ter desafio de verdade.

O foco está em três ideias que andam juntas. Primeiro, o inimigo precisa ter aparência e animação própria, para parecer um ser independente e não uma cópia do herói. Segundo, ele precisa se mover sozinho por meio de um comportamento automático, como patrulhar de um lado para o outro ou perseguir o jogador. Terceiro, precisa existir uma regra clara para o encontro entre inimigo e herói: se o herói encosta de um jeito, leva dano; se encosta de outro jeito (por exemplo, pulando em cima), o inimigo é derrotado.

No Construct 3 isso se traduz em criar um novo objeto Sprite para o inimigo, importar seus quadros de animação, adicionar um comportamento de movimento (como o Sine ou o Bullet para patrulha simples) e escrever eventos de colisão na aba Event Sheet. O professor verá que cada decisão do jogo vira um evento do tipo condição mais ação: quando algo acontece, faça algo. Essa lógica de causa e consequência é o coração da programação de jogos.

Ao final da aula, cada aluno terá pelo menos um inimigo funcional patrulhando o cenário, capaz de tirar vida do jogador ao toque e de ser eliminado quando o herói o vence. Isso conecta diretamente com as aulas anteriores de vidas e score e prepara o terreno para a montagem final do jogo completo nas próximas semanas.`,
  materiais: [
    `Computadores com o Construct 3 aberto no projeto do jogo de cada aluno`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Arquivo de exemplo com um inimigo já pronto (sprite e eventos) para consulta`,
    `Pasta com quadros de animação de inimigos em pixel art (andar e ser derrotado)`,
    `Folha impressa de apoio com a tabela condição/ação dos eventos de colisão`,
    `Fones de ouvido opcionais para os alunos que já quiserem testar com som`,
  ],
  conceitosChave: [
    `Inimigo (adversário) — objeto do jogo que ameaça o herói e tem comportamento e animações próprias.`,
    `Comportamento (Behavior) — bloco pronto do Construct 3 que dá uma habilidade automática ao objeto, como mover-se sozinho.`,
    `Patrulha — movimento de vai e vem do inimigo entre dois pontos, sem precisar de comando do jogador.`,
    `Perseguição — comportamento em que o inimigo se move em direção ao jogador para alcançá-lo.`,
    `Colisão — momento em que dois objetos se encostam, usado como condição para disparar uma ação no jogo.`,
    `Dano — quantidade de vida que o herói perde ao tocar o inimigo de forma errada.`,
    `Derrota do inimigo — regra que faz o adversário sumir e dar recompensa quando o herói o vence.`,
  ],
  treinamento: `## O que o professor precisa saber

Um inimigo no Construct 3 é apenas mais um objeto Sprite, igual ao herói, mas com duas diferenças: ele se move sozinho (por um comportamento) e tem eventos que reagem ao toque do jogador. Você não precisa programar nada complicado. Tudo acontece em dois lugares: o Layout (onde você coloca e desenha o inimigo) e o Event Sheet (onde você escreve as regras). Lembre que evento é sempre uma condição mais uma ação: "Se o inimigo toca o jogador, então o jogador perde vida". Antes da aula, abra o projeto modelo e confira que o objeto do jogador já existe e que há uma variável de vidas criada nas aulas anteriores.

## Passo a passo da aula

Aquecimento (10 min): pergunte aos alunos quais inimigos eles lembram de jogos famosos e o que cada um faz. Mostre no projetor o jogo deles até aqui e diga: "hoje ele vai ganhar adversários". Reveja rápido o que é um evento (condição mais ação).

Conteúdo novo guiado (15 min): no Construct 3, clique com o botão direito no Layout e escolha Insert new object, depois Sprite. Dê o nome "Inimigo". No editor de imagem que abre, importe os quadros de animação pela aba Animations (clique direito no painel Animations, Import frames). Crie a animação "Andar" e marque Loop como Yes nas Properties. Agora adicione o movimento: com o Inimigo selecionado, no painel Properties clique em Behaviors, depois no sinal de mais, e escolha Sine (faz vai e vem) ou Bullet (anda em linha reta). Para patrulha simples, Sine no eixo Horizontal é o mais fácil. Mostre também onde fica o Event Sheet na aba superior.

Mão na massa (25 min): cada aluno repete os passos no próprio jogo. Depois vá ao Event Sheet, clique em Add event, escolha o objeto Inimigo, condição On collision with another object, selecione o Jogador. Na ação, escolha o Jogador, Subtract from (a variável de vidas), valor 1. Para a derrota, adicione outro evento: Jogador On collision with Inimigo, com a condição extra Is falling (comparando Player.Platform.VectorY maior que 0) e a ação Inimigo Destroy, mais Add to score. Circule pela sala ajudando individualmente.

Desafio e compartilhar (10 min): peça para cada aluno deixar o inimigo mais rápido ou trocar a patrulha por perseguição. Dois ou três alunos mostram o inimigo funcionando no projetor.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o comportamento é como dar pilha e motor ao boneco: você liga e ele anda sozinho. Explique a colisão como "esbarrar": quando duas coisas se esbarram, o jogo percebe e reage. Para a regra de vencer o inimigo, use a imagem clássica: "se você cai em cima dele, ele perde; se você esbarra de lado, você é quem se machuca". Sempre leia o evento em voz alta como uma frase: "Quando o inimigo toca o jogador, tire uma vida". Isso ajuda os adolescentes a enxergar a lógica.

## Erros comuns e como ajudar

O erro mais comum é esquecer de marcar Loop na animação, e o inimigo congela no primeiro quadro: mostre onde fica o Loop nas Properties da animação. Outro erro é colocar a ação de tirar vida sem limite, fazendo o jogador perder várias vidas de uma vez no mesmo toque: explique que On collision dispara uma vez por toque, mas se o inimigo for destruído logo após, evita repetição; oriente a usar o evento de derrota junto. Muitos confundem qual objeto recebe a ação (Jogador perde vida, Inimigo é destruído) então peça que leiam o evento devagar. Por fim, alguns esquecem de criar a variável de vidas antes; nesse caso, reaproveite a que já existe das aulas anteriores em vez de criar outra.`,
  exercicios: [
    {
      titulo: `Criando o inimigo na tela`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe pela tela do projetor enquanto os alunos inserem o objeto. Verifique se cada um nomeou o objeto e marcou o Loop da animação.`,
      atividade: `Insira um novo objeto Sprite chamado "Inimigo", importe os quadros pela aba Animations, crie a animação "Andar" e marque Loop como Yes. Arraste o inimigo para o cenário.`,
      gabarito: `O aluno deve ter um Sprite chamado Inimigo no Layout, com a animação Andar em loop rodando ao apertar Play. Confirme que a animação se repete e não congela no primeiro quadro.`,
    },
    {
      titulo: `Dando movimento ao adversário`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde fica Behaviors no painel Properties. Ajude quem não acha o sinal de mais para adicionar o comportamento.`,
      atividade: `Adicione ao Inimigo o comportamento Sine no eixo Horizontal para criar uma patrulha de vai e vem. Ajuste o valor de Magnitude para definir a distância do percurso.`,
      gabarito: `Ao apertar Play, o inimigo deve andar de um lado para o outro sozinho. O comportamento Sine aparece listado em Behaviors e a Magnitude controla o tamanho do trajeto. Movimento contínuo e correto.`,
    },
    {
      titulo: `O toque que machuca`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `As duplas escrevem o evento de colisão juntas, um dita e o outro digita. Peça que leiam o evento em voz alta antes de testar.`,
      atividade: `No Event Sheet, criem um evento: Inimigo On collision with Jogador, com a ação Jogador Subtract 1 da variável de vidas. Testem encostando o herói no inimigo.`,
      gabarito: `Ao tocar o inimigo, o número de vidas do jogador cai de 1. O evento tem a condição On collision e a ação Subtract na variável correta. A dupla consegue ler o evento como uma frase clara.`,
    },
    {
      titulo: `Vencendo o inimigo`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o passo mais difícil. Mostre como adicionar a condição extra de estar caindo e a ação Destroy. Circule e ajude um a um.`,
      atividade: `Criem um segundo evento: Jogador On collision with Inimigo mais a condição de estar caindo (VectorY maior que 0). Como ação, Inimigo Destroy e Add 10 ao score. Testem pulando em cima do inimigo.`,
      gabarito: `Ao pular sobre o inimigo, ele é destruído e o score sobe 10 pontos; ao tocar de lado, o jogador perde vida. As duas regras convivem corretamente, distinguindo o toque de cima do toque lateral.`,
    },
    {
      titulo: `Que tipo de inimigo você criou?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza uma roda rápida. Faça cada aluno descrever o comportamento do seu inimigo usando os termos aprendidos: patrulha, perseguição, dano, derrota.`,
      atividade: `Em roda, cada aluno apresenta seu inimigo respondendo: ele patrulha ou persegue? Quanto dano causa? Como o jogador o vence? O que poderia deixá-lo mais divertido?`,
      gabarito: `Cada aluno usa corretamente os conceitos da aula ao descrever seu inimigo: identifica o comportamento (patrulha ou perseguição), o valor de dano, a regra de derrota e propõe pelo menos uma melhoria. Respostas variam, mas devem citar os termos certos.`,
    },
  ],
};
