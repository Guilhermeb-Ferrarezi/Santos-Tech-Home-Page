import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Movimento e comportamentos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Dar vida ao personagem usando Behaviors prontos e eventos, deixando o jogo de verdade jogável com movimento, colisões, coleta de itens e pontuação.`,
  descricao: `Nesta aula o jogo deixa de ser uma cena parada e passa a responder ao jogador. O grande segredo do Construct 3 é que ele já traz "comportamentos" prontos, os Behaviors, que são pequenos pacotes de programação que você adiciona a um objeto com poucos cliques. Em vez de programar do zero como o personagem anda, o aluno escolhe o Behavior 8-Direction (movimento livre nas oito direções, ótimo para jogos vistos de cima) ou o Behavior Platform (com gravidade e pulo, ótimo para jogos de plataforma). Com isso, o personagem já se move com as setas do teclado sem escrever nenhuma linha de código.

Depois do movimento, entra a parte que transforma a cena em jogo: as regras. O aluno volta à folha de eventos (Event Sheet) que conheceu na aula passada e cria eventos de colisão. Quando o personagem encosta em um item, o item some e a pontuação sobe. Para isso usamos a condição "On collision with another object" e as ações "Destroy" e "Add to (variável)". É aqui que o conceito de variável global aparece de forma concreta: o número da pontuação fica guardado e cresce a cada item coletado.

O ritmo segue o padrão da escola: revisão rápida, conteúdo novo guiado no projetor, bastante mão na massa e um desafio final para compartilhar. O objetivo não é um jogo perfeito, e sim um jogo que reage. Ao final, cada aluno deve ter um personagem que anda pela tela, itens que somem ao serem tocados e um número de pontos que aumenta. Esse é o momento mágico do mês, quando o projeto vira realmente um joguinho.

Reforce que errar faz parte: se o personagem atravessa a parede ou o ponto não sobe, há sempre um detalhe simples para corrigir, e descobrir qual é faz parte de aprender a programar.`,
  materiais: [
    `Computadores com o Construct 3 aberto, com o projeto do mês de cada aluno carregado`,
    `Projetor ou TV para o professor demonstrar onde clicar`,
    `Arquivo de exemplo "jogo-base.c3p" com personagem, itens e cenário já montados (plano B)`,
    `Sprites de itens colecionáveis prontos (moeda, estrela ou fruta) para quem ainda não tem`,
    `Folha impressa com o passo a passo dos eventos de colisão e pontuação`,
    `Teclado funcionando bem em cada máquina (as setas serão muito usadas)`,
  ],
  conceitosChave: [
    `Behavior (comportamento) — pacote de regras prontas que você adiciona a um objeto para ele ganhar uma habilidade, como andar ou pular, sem programar do zero.`,
    `8-Direction — Behavior que faz o objeto se mover nas oito direções com as setas do teclado, ideal para jogos vistos de cima.`,
    `Platform — Behavior que aplica gravidade e permite pular, ideal para jogos de plataforma vistos de lado.`,
    `Colisão — momento em que dois objetos se encostam na tela; o jogo pode detectar isso e disparar uma ação.`,
    `Evento — uma regra no formato "quando isto acontecer, faça aquilo", escrita na folha de eventos (Event Sheet).`,
    `Variável global — uma caixinha que guarda um número usado pelo jogo inteiro, como a pontuação do jogador.`,
    `Ação — o que o jogo executa quando a condição é verdadeira, como destruir um item ou somar pontos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. O Construct 3 faz quase tudo por menus. Dois Behaviors importam hoje: o 8-Direction (anda nas oito direções, jogo de cima) e o Platform (tem gravidade e pulo, jogo de lado). Escolha um deles com a turma e mantenha o mesmo para todos, para facilitar a ajuda. Behavior é adicionado pelo painel Properties (à esquerda), em "Behaviors", botão "Add new behavior". Depois disso, as setas do teclado já movem o objeto, sem código. A segunda parte são os eventos de colisão, na folha de eventos (Event Sheet), aba que aparece no topo ao lado do Layout. Antes da aula, abra o projeto de exemplo e teste você mesmo: adicione um Behavior, rode com o ícone "Run" (canto superior, atalho que abre o jogo no navegador) e ande com o personagem. Sentir o fluxo uma vez deixa a aula tranquila.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça para cada aluno abrir o projeto e clicar em Run só para ver a cena parada. Pergunte: "O personagem se mexe?". Ainda não. Esse é o problema que vamos resolver hoje.

Conteúdo novo guiado (15 min): no projetor, clique no personagem no Layout. No painel Properties, à esquerda, role até "Behaviors" e clique em "Add new behavior". Escolha 8-Direction (ou Platform) e dê duplo clique. Clique em Run e mostre que agora as setas movem o personagem. Em seguida, abra a aba "Event sheet". Clique em "Add event", escolha o personagem, condição "On collision with another object" e selecione o item. Adicione duas ações: no item, "Destroy"; e em "Add to" da variável global "Pontos". Para criar a variável, clique direito na folha, "Add global variable", nome Pontos, valor 0.

Mão na massa (25 min): os alunos repetem tudo no próprio projeto. Primeiro o Behavior e o teste de movimento. Depois o evento de colisão com o item, o Destroy e o Add to Pontos. Circule pela sala. Quem terminar adiciona um objeto Text na tela e a ação "Set text" para mostrar "Pontos: " & Pontos, atualizando o número na tela.

Desafio e compartilhar (10 min): proponha um segundo tipo de item que vale 5 pontos, ou um obstáculo que, ao colidir, leva a pontuação de volta a zero. Cada aluno mostra o jogo rodando para um colega e conta quantos pontos conseguiu.

## Como explicar de forma clara (linguagem para a idade)

Diga: "Behavior é tipo um superpoder que você cola no personagem. O 8-Direction dá o poder de andar; o Platform dá o poder de pular." Para colisão: "Quando duas coisas se encostam, o jogo percebe, igual a um abraço: o programa sente o toque e reage." Para variável: "Pontos é uma caixinha que guarda um número. Cada item coletado coloca mais um na caixinha." Use sempre o ciclo "testa, vê o que acontece, ajusta". Mostre que rodar o jogo a cada mudança é normal e esperado, não é pressa.

## Erros comuns e como ajudar

O personagem não anda: quase sempre o Behavior foi adicionado ao objeto errado, ou faltou clicar dentro da janela do jogo antes de usar as setas. O item não some: a condição de colisão aponta para o objeto errado, ou a ação Destroy foi posta no personagem em vez do item. A pontuação não sobe: a variável não foi criada como global, ou o "Add to" está somando à variável errada. O número na tela não muda: faltou a ação "Set text" rodando o tempo todo (use "Every tick"). Personagem cai sem parar no Platform: falta um objeto com o Behavior "Solid" como chão. Em todos os casos, peça ao aluno para ler o evento em voz alta como uma frase: "Quando o personagem encosta na moeda, destrua a moeda e some 1 em Pontos." Se a frase não bate com o que está escrito, o erro aparece sozinho.`,
  exercicios: [
    {
      titulo: `Dando movimento ao personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos escolham o mesmo Behavior combinado (8-Direction ou Platform). Verifique no painel Properties se o Behavior foi adicionado ao personagem, e não ao cenário.`,
      atividade: `Clique no personagem no Layout, vá ao painel Properties, em "Behaviors" clique em "Add new behavior" e adicione 8-Direction (ou Platform). Clique em Run e ande com as setas do teclado.`,
      gabarito: `O Behavior aparece listado nas Properties do personagem. Ao clicar em Run, o personagem se move com as setas. Se não mover, o aluno provavelmente adicionou o Behavior ao objeto errado ou esqueceu de clicar dentro da janela do jogo antes de usar as setas.`,
    },
    {
      titulo: `Colidir e coletar`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor como criar o evento. Reforce que a ação Destroy deve ser do item, não do personagem. Ajude a apontar a condição para o objeto certo.`,
      atividade: `Na aba "Event sheet", clique em "Add event", escolha o personagem e a condição "On collision with another object" apontando para o item. Adicione a ação "Destroy" no item. Rode e encoste no item para vê-lo sumir.`,
      gabarito: `Ao encostar no item, ele desaparece. O evento correto é: condição "Personagem -> On collision with Item", ação "Item -> Destroy". Se o item não some, a condição ou a ação está apontando para o objeto errado.`,
    },
    {
      titulo: `Contando os pontos`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Ensine a criar a variável global com clique direito na folha de eventos. Confira se o "Add to" soma à variável Pontos e se a ação está dentro do mesmo evento de colisão.`,
      atividade: `Crie uma variável global chamada Pontos com valor 0. No evento de colisão, adicione a ação "Add to Pontos" somando 1. Adicione um objeto Text e a ação "Set text" mostrando "Pontos: " & Pontos com a condição "Every tick".`,
      gabarito: `A cada item coletado, o número na tela aumenta de 1 em 1. A variável Pontos deve ser global e iniciar em 0. O Text usa "Set text" em "Every tick" com a expressão "Pontos: " & Pontos. Se o número não muda na tela, faltou o "Set text" rodando sempre.`,
    },
    {
      titulo: `Programando em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um aluno descreve em voz alta o evento que quer; o outro executa no Construct 3. Depois trocam os papéis. Incentive a leitura do evento como uma frase completa.`,
      atividade: `Em dupla, adicionem um segundo tipo de item que vale 5 pontos. Um dita o passo a passo ("quando encostar na estrela, destrua e some 5"), o outro clica e cria o evento. Testem juntos e depois invertam os papéis.`,
      gabarito: `Existe um segundo evento de colisão, com um item diferente, somando 5 em Pontos e destruindo esse item. Ao coletar a estrela, a pontuação sobe 5 de uma vez. Os dois alunos conseguem explicar o que cada parte do evento faz.`,
    },
    {
      titulo: `O que deixa um jogo bom?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em círculo. Conduza com perguntas abertas e ligue as respostas aos Behaviors e eventos usados hoje. Anote ideias no quadro para a aula de polimento.`,
      atividade: `Conversem: qual jogo de vocês é mais divertido de jogar e por quê? O movimento está bom? Os pontos deixam o jogo mais animado? O que cada um quer ajustar na próxima aula?`,
      gabarito: `Não há resposta única. Espera-se que os alunos relacionem diversão com movimento responsivo, feedback claro (item sumindo, pontos subindo) e desafio. Boas respostas citam o Behavior do movimento, a colisão e a pontuação como peças que tornaram o jogo jogável, e apontam ao menos um ajuste concreto para a próxima aula.`,
    },
  ],
};
