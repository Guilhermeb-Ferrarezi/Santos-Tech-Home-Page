import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Brincando de criar regras",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a montar vários eventos no Construct 3, clicando em condições e ações prontas para fazer objetos aparecerem, sumirem ou mudarem quando algo acontece.`,
  descricao: `Nesta aula a turma continua brincando com a "mágica do quando... faça...", que eles conheceram na aula passada. Agora o foco é praticar bastante: montar muitas regrinhas pequenas, uma de cada vez, vendo na hora o que cada uma faz no jogo. A ideia central continua sendo causa e efeito — eu faço uma coisa (aperto, clico, toco) e o jogo responde com outra coisa (algo aparece, some ou muda de cor).

O lugar onde montamos essas regras no Construct 3 se chama Folha de Eventos (Event Sheet). Cada regra é um "Evento": ele tem uma Condição (o "quando") e uma Ação (o "faça"). Nesta aula as crianças vão repetir esse caminho várias vezes, sempre escolhendo opções já prontas em listas, sem precisar digitar ou ler textos longos. É como montar peças de encaixe: o professor mostra uma vez, e elas refazem com pequenas variações.

Por que isso importa? Programar um jogo é, no fundo, ensinar regras para o computador seguir. Quando a criança percebe que ELA manda no jogo — que foi ela quem disse "quando clicar, o monstrinho some" — nasce a confiança de criadora, não só de jogadora. Repetir o gesto de criar eventos, nesta semana, prepara o terreno para as próximas aulas, em que o personagem vai começar a se mexer de verdade.

Ao longo da hora, cada aluno vai montar pelo menos três regras diferentes no mesmo projeto: uma que faz um objeto sumir, uma que faz outro aparecer e uma que muda algo (cor, tamanho ou posição). No final, todos testam apertando o botão de Prévia e mostram para a turma a regra mais engraçada que conseguiram criar.`,
  materiais: [
    `Computadores (1 por aluno ou em duplas) com o Construct 3 já aberto no navegador e o projeto da aula anterior carregado.`,
    `Projetor ou TV ligada ao computador do professor, para demonstrar cada passo na tela grande.`,
    `Um projeto de exemplo pronto, com 3 ou 4 objetos coloridos já colocados no cenário (ex.: estrela, monstrinho, coração, nuvem).`,
    `Mouse para cada computador (clicar é mais fácil que o touchpad para esta idade).`,
    `Cartões impressos grandes com os ícones de "quando" (uma mão clicando) e "faça" (uma varinha mágica), para o aquecimento.`,
    `Adesivos ou carimbos para premiar quem montar e testar uma regra sozinho.`,
    `Lista de chamada com o nome de cada criança ao lado do nome do objeto que ela escolheu, para o professor acompanhar.`,
  ],
  conceitosChave: [
    `Evento — uma regrinha do jogo, feita de um "quando" e um "faça". É o combinado que ensinamos para o computador.`,
    `Condição — o "quando": a coisa que precisa acontecer primeiro, como clicar ou tocar em algo.`,
    `Ação — o "faça": o que o jogo faz como resposta, como sumir, aparecer ou mudar de cor.`,
    `Folha de Eventos — a folha mágica onde a gente guarda todas as regrinhas do jogo, uma embaixo da outra.`,
    `Causa e efeito — quando uma coisa faz outra coisa acontecer; eu aperto e algo muda na tela.`,
    `Visível e Invisível — visível é quando dá para ver o objeto; invisível é quando ele fica escondido, como num esconde-esconde.`,
    `Prévia (Preview) — o botão de play que liga o jogo para a gente testar e ver se a regra funcionou.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Construct 3, todo jogo funciona com Eventos. Um Evento mora na Folha de Eventos (Event Sheet) e tem duas partes: a Condição (o "quando") e a Ação (o "faça"). Você não escreve código: clica e escolhe em listas prontas. Nesta aula você não vai ensinar nada novo de teoria — vai consolidar, por repetição, o que foi visto na Aula 3. A meta é que cada criança crie de forma autônoma 3 regras simples.

Antes da aula, abra o projeto de exemplo. Garanta que ele tem 3 ou 4 objetos do tipo Sprite no Layout (a tela do cenário), cada um com um nome fácil (Estrela, Monstro, Coração). Tenha à mão a Folha de Eventos: no painel Project, clique duas vezes em "Event sheet 1". As ações que você vai usar são: "Set visible" (deixar visível ou invisível), "Set color"/"Set animation" ou, mais simples, "Set scale"/"Set size" para mudar o tamanho. A condição mais fácil para esta idade é "On clicked" do objeto, ou "On any click" do mouse.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

Aquecimento (10 min): com os cartões de "quando" e "faça", brinque no tapete. Você diz "QUANDO eu bater palma..." e as crianças completam com um "FAÇA": pular, abaixar, fazer careta. Faça 5 ou 6 rodadas. Diga: "Hoje vamos ensinar regras assim para o computador, várias vezes!"

Conteúdo novo guiado (15 min): no projetor, abra a Folha de Eventos. Mostre o botão "Add event" (ou clique duplo no espaço vazio). Escolha o objeto Estrela, depois a condição "On clicked". Clique em "Add action" na mesma linha, escolha a Estrela de novo e a ação "Set visible" com a opção "Invisible". Aperte o botão de Prévia (o triângulo de play no topo, "Preview"). Clique na estrela: ela some. Faça um "uau" bem grande. Repita criando uma SEGUNDA regra que faz o Monstro aparecer, e uma TERCEIRA que muda o tamanho do Coração ("Set scale" para 2). Diga sempre em voz alta: "QUANDO... FAÇA...".

Mão na massa (25 min): cada criança refaz os três passos no próprio computador. Circule sem parar. Mande criar pelo menos: 1 regra de sumir, 1 de aparecer, 1 de mudar. Quem terminar, inventa uma quarta regra livre. Lembre de apertar "Preview" para testar cada uma. Dê adesivo a quem testar sozinho.

Desafio e compartilhar (10 min): proponha "a regra mais maluca". Cada aluno mostra na tela uma regra que criou e a turma adivinha o que vai acontecer antes de ele clicar. Feche celebrando: "Vocês são programadores de regras!"

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de "combinado mágico": uma regra é um combinado que a gente faz com o jogo. "Visível e invisível" vira esconde-esconde: o objeto está brincando de se esconder. A Folha de Eventos é a "caderneta de regras" do jogo. Evite as palavras "código" e "programar"; diga "regras" e "combinados". Fale devagar e SEMPRE mostre antes de pedir. Faça gestos: a mão clicando é o "quando", a varinha é o "faça".

## Erros comuns e como ajudar

O erro mais comum é colocar a Ação como se fosse uma nova linha de Evento — a criança clica em "Add event" de novo em vez de "Add action". Mostre que a ação fica na MESMA linha, à direita do quando, depois da setinha. Outro tropeço: esquecer de apertar Prévia e achar que "não funcionou". Vá junto até o botão de play. Há também quem escolha o objeto errado na lista; combine que cada um cuida só do seu objeto da chamada. Por fim, alguns deixam tudo invisível e "perdem" os objetos: ensine que parar a Prévia (botão Stop ou fechar a aba) traz tudo de volta, porque as regras só valem durante o jogo.`,
  exercicios: [
    {
      titulo: `Regra do some-some`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, no projetor, e peça que copiem. Mostre devagar onde clicar: Folha de Eventos, "Add event", objeto, condição "On clicked", depois "Add action" na mesma linha.`,
      atividade: `Cada criança cria uma regra que faz o objeto dela sumir quando ela clica nele. Depois aperta o botão de Prévia e testa clicando no objeto.`,
      gabarito: `Acertou quem, ao clicar no objeto durante a Prévia, vê o objeto desaparecer da tela. Na Folha de Eventos deve haver um evento com a condição "On clicked" e a ação "Set visible: Invisible".`,
    },
    {
      titulo: `Aparece, amiguinho!`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Lembre que primeiro o objeto precisa começar invisível para depois aparecer. Mostre como deixar um segundo objeto invisível no início e criar a regra que o faz aparecer.`,
      atividade: `A criança escolhe um segundo objeto, deixa ele invisível no começo e cria uma regra que faz esse objeto APARECER quando ela clica no primeiro objeto. Testa na Prévia.`,
      gabarito: `Acertou quem, ao clicar no primeiro objeto durante a Prévia, vê o segundo objeto surgir na tela. A regra deve ter "On clicked" no primeiro objeto e a ação "Set visible: Visible" no segundo.`,
    },
    {
      titulo: `Detetive de regras`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Leia em voz alta um "quando" e peça que as crianças adivinhem ou inventem o "faça". Valorize toda resposta criativa, sem certo ou errado rígido.`,
      atividade: `O professor fala: "QUANDO eu clico na estrela..." e cada criança completa em voz alta com um "FAÇA": some, fica gigante, vira azul. Faça 5 ou 6 frases assim.`,
      gabarito: `Acertou a criança que completa a frase com uma ação possível no jogo (sumir, aparecer, crescer, mudar de cor). Mostra que ela entendeu que todo "quando" precisa de um "faça".`,
    },
    {
      titulo: `Desenhando minha regra`,
      tipo: `desenho/papel`,
      tempo: `9 minutos`,
      guiaProfessor: `Entregue uma folha dividida em duas partes: "QUANDO" e "FAÇA". Mostre um exemplo seu desenhado no quadro antes de soltarem para desenhar.`,
      atividade: `Cada aluno desenha na parte "QUANDO" o que ele faz (uma mão clicando num objeto) e na parte "FAÇA" o que acontece com o objeto (sumindo, crescendo ou colorido). Depois conta para a dupla.`,
      gabarito: `Acertou quem desenha uma ligação clara entre as duas partes: um gesto de clique no "QUANDO" e uma mudança coerente do objeto no "FAÇA". O importante é a relação causa e efeito aparecer no desenho.`,
    },
    {
      titulo: `A regra mais maluca`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha como competição amigável de criatividade. Deixe a criança combinar duas ações na mesma regra (sumir E mudar tamanho) se conseguir. Ajude quem travar, mas incentive a tentativa sozinha.`,
      atividade: `Cada aluno inventa UMA regra nova e diferente das anteriores (ex.: quando clico no coração, ele fica gigante e some). Monta no Construct 3 e apresenta para a turma, que tenta adivinhar o que vai acontecer antes do clique.`,
      gabarito: `Acertou quem cria uma regra funcional que faz algo acontecer na Prévia ao clicar, e que seja diferente das três anteriores. Se a turma consegue prever o efeito antes do clique, a regra está clara e correta.`,
    },
  ],
};
