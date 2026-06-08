import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Google Agenda: sua semana na tela",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a usar o Google Agenda para visualizar a semana e criar eventos completos com título, data, horário e local.`,
  descricao: `O Google Agenda é o calendário digital do Google, totalmente integrado à conta que os alunos já usam no Gmail. Ele transforma a rotina em algo visual: em vez de tentar lembrar tudo de cabeça ou anotar em papéis soltos, o aluno passa a enxergar a semana inteira em uma única tela, com cada compromisso no seu dia e horário certos. Nesta aula o foco é justamente esse "ver para organizar".

Vamos explorar as três formas principais de olhar o tempo: a visão de Dia, que mostra hora por hora de um único dia; a visão de Semana, que é a mais usada no dia a dia e mostra os sete dias lado a lado; e a visão de Mês, que dá uma ideia geral do que vem pela frente. Saber alternar entre elas ajuda o aluno a planejar tanto o "agora" quanto o "depois".

Depois de aprender a navegar, o aluno cria seu primeiro evento de verdade, preenchendo título, data, horário de início e fim e o local. É aqui que ele percebe a diferença entre três coisas que parecem iguais mas não são: um compromisso (tem hora marcada, como uma aula às 14h), uma tarefa (algo que precisa ser feito, mas sem horário fixo) e um evento de dia inteiro (como um aniversário ou feriado, que ocupa o dia sem hora específica).

Para fechar, a aula trabalha a personalização por cores. Pintar cada tipo de atividade de uma cor (estudo em azul, lazer em verde, família em laranja, por exemplo) faz a agenda virar um mapa visual instantâneo. Bater o olho e entender a semana em segundos é a habilidade que mais ajuda adolescentes a se organizarem sozinhos.`,
  materiais: [
    `Computadores com a conta Google de cada aluno já conectada e o Gmail aberto`,
    `Google Agenda aberto no navegador (calendar.google.com) em cada máquina`,
    `Google Meet e Notion abertos em abas para retomar a continuidade do mês`,
    `Projetor ou tela grande para o professor demonstrar cada passo ao vivo`,
    `Arquivo de exemplo "Rotina da semana" com 5 atividades fictícias para os alunos digitarem`,
    `Lista de cores sugeridas por tipo de atividade (estudo, lazer, família, treino)`,
    `Conta Google ativa e funcional para cada aluno (mesma usada nas aulas anteriores)`,
  ],
  conceitosChave: [
    `Google Agenda — calendário digital do Google, ligado à mesma conta do Gmail, que mostra seus compromissos em uma tela.`,
    `Visão de Dia, Semana e Mês — três modos de olhar o calendário: hora por hora de um dia, os sete dias juntos, ou o mês inteiro.`,
    `Evento — qualquer item marcado no calendário, com título, data e, geralmente, um horário definido.`,
    `Compromisso — evento com hora marcada de início e fim, como uma aula das 14h às 15h.`,
    `Tarefa — algo a fazer registrado na agenda, sem horário fixo, que pode ser marcado como concluído.`,
    `Evento de dia inteiro — item que ocupa o dia sem hora específica, como aniversário, feriado ou viagem.`,
    `Cor do evento — tom escolhido para cada atividade que serve como código visual para identificar o tipo de compromisso de relance.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra calendar.google.com com sua própria conta Google. O Google Agenda usa a MESMA conta do Gmail, então se o aluno já entrou no Gmail nas aulas anteriores, ele já tem acesso, sem novo login. No canto superior direito há três botões importantes: o seletor de visão (onde se lê "Dia", "Semana", "Mês"), a engrenagem de Configurações e a foto da conta. No canto superior esquerdo fica o botão "Criar", que cria eventos. Teste criar e apagar um evento antes da aula para ganhar confiança. Saiba que "tarefa" e "compromisso" são abas diferentes dentro da janela de criação do evento.

## Passo a passo da aula

Aquecimento (10 min): retome a Aula 2. Pergunte: "Como vocês sabem o que têm para fazer amanhã?". Mostre no projetor sua própria agenda da semana real (sem dados sensíveis). Peça que cada aluno abra o Gmail e clique no ícone de quadradinhos (Apps do Google) no canto superior direito, depois em "Agenda".

Conteúdo novo guiado (15 min): com o projetor, mostre o seletor de visão no canto superior direito. Clique em "Dia", depois "Semana", depois "Mês", explicando cada um. Use o atalho de teclado: tecla D para Dia, W para Semana (week), M para Mês. Em seguida clique no botão "Criar" (canto superior esquerdo) e depois em "Evento". Preencha ao vivo: digite o título "Aula de violão", escolha a data, ajuste o horário de início e fim e digite um local no campo "Adicionar local". Clique em "Salvar". Mostre onde o evento apareceu na grade.

Mão na massa (25 min): entregue o arquivo "Rotina da semana" com 5 atividades. Cada aluno cria os 5 eventos na própria agenda, alternando entre as visões para conferir. Oriente: pelo menos um evento deve ser de dia inteiro (mostre a caixinha "Dia inteiro" no topo da janela de criação) e um deve ser uma tarefa (mostre a aba "Tarefa" ao lado de "Evento"). Circule pela sala. Depois, ensine a trocar a cor: clique no evento, clique no ícone de lápis (Editar), e clique no círculo colorido ao lado do título para escolher a cor por tipo.

Desafio e compartilhar (10 min): peça que cada aluno pinte sua semana com pelo menos três cores diferentes por tipo de atividade. Convide dois ou três a mostrarem a tela no projetor e explicarem o código de cores que escolheram.

## Como explicar de forma clara

Use a imagem do "mapa da semana". Diga: "Sua cabeça não foi feita para guardar horários, foi feita para ter ideias. A agenda guarda os horários por você." Para a diferença entre os tipos, use exemplos da vida deles: compromisso é "treino de futebol às 17h" (tem hora), tarefa é "terminar o trabalho de ciências" (sem hora, mas tem que fazer), dia inteiro é "aniversário da minha mãe" (o dia todo é dela). Para as cores, compare com o estojo: cada matéria tem sua cor e você acha rápido.

## Erros comuns e como ajudar

O erro mais frequente é o aluno criar o evento no dia ou horário errado por clicar rápido. Ensine a conferir na visão de Semana antes de salvar e a arrastar o evento para corrigir. Outro erro: confundir "Tarefa" com "Evento" e não achar a aba. Mostre devagar que as abas ficam no topo da janela que abre ao clicar em "Criar". Alguns esquecem de clicar em "Salvar" e o evento some. Há ainda quem não veja o campo de local porque ele fica mais abaixo, role a janela com eles. Por fim, se um aluno trocar a cor e "sumir" o evento, explique que ele só mudou de tom, não foi apagado.`,
  exercicios: [
    {
      titulo: `Conhecendo as três visões`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que todos abriram o Google Agenda pelo menu de Apps do Gmail. Acompanhe pelo projetor e chame a atenção para o seletor de visão no canto superior direito.`,
      atividade: `Abra o Google Agenda e alterne entre as visões de Dia, Semana e Mês usando o seletor no canto superior direito (ou as teclas D, W e M). Pare na visão de Semana ao final.`,
      gabarito: `O aluno demonstra ter clicado nas três visões e termina na visão de Semana, que mostra os sete dias lado a lado com as horas na lateral esquerda. As teclas D (Dia), W (Semana) e M (Mês) funcionam como atalho.`,
    },
    {
      titulo: `Meu primeiro compromisso`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Demonstre o botão "Criar" no canto superior esquerdo. Verifique se cada aluno preencheu título, data, horário de início e fim e local antes de salvar.`,
      atividade: `Crie um evento chamado "Aula de informática" para amanhã, das 14h às 15h, com o local "Santos Tech". Salve e confira se ele apareceu na grade da semana.`,
      gabarito: `Aparece na agenda, na data de amanhã, um bloco entre 14h e 15h com o título "Aula de informática". Ao clicar nele, mostra o local "Santos Tech". Esse é um exemplo de compromisso, pois tem hora marcada de início e fim.`,
    },
    {
      titulo: `Compromisso, tarefa ou dia inteiro?`,
      tipo: `Desafio individual`,
      tempo: `7 min`,
      guiaProfessor: `Mostre onde ficam a aba "Tarefa" e a caixinha "Dia inteiro" na janela de criação. Confira se cada aluno criou os três tipos corretamente.`,
      atividade: `Crie três itens nesta semana: um compromisso ("Treino", com hora marcada), uma tarefa ("Estudar para a prova", sem hora) e um evento de dia inteiro ("Aniversário"). Use as abas e a caixinha corretas para cada um.`,
      gabarito: `O "Treino" aparece com horário definido (compromisso). "Estudar para a prova" aparece como tarefa, sem horário fixo e com possibilidade de marcar como concluída. "Aniversário" aparece no topo do dia, ocupando o dia inteiro, com a caixinha "Dia inteiro" marcada.`,
    },
    {
      titulo: `Agenda da dupla`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Um aluno dita sua rotina enquanto o outro confere a agenda na própria tela. Incentive que apontem erros de dia, horário ou tipo de evento um do outro.`,
      atividade: `Em dupla, troquem de cadeira. Cada um confere a agenda do colega e aponta: existe algum evento no dia errado? Algum sem local? Algum que deveria ser tarefa e está como compromisso? Corrijam juntos o que encontrarem.`,
      gabarito: `A dupla identifica e corrige ao menos um problema (dia errado, horário trocado, local em branco ou tipo de evento incorreto). Ao final, ambas as agendas têm eventos coerentes, no dia e horário certos, e os tipos corretos para cada atividade.`,
    },
    {
      titulo: `Minha semana colorida`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Relembre como trocar a cor: clicar no evento, ícone de lápis (Editar) e o círculo colorido ao lado do título. Ao final, abra uma roda rápida para cada um explicar seu código de cores.`,
      atividade: `Monte uma semana com pelo menos 5 eventos e pinte cada tipo de atividade com uma cor diferente (ex.: estudo em azul, lazer em verde, família em laranja). Depois, explique para a turma qual cor representa cada tipo.`,
      gabarito: `A semana tem ao menos 5 eventos em pelo menos 3 cores distintas, com cada cor representando um tipo de atividade de forma consistente. Na roda, o aluno explica seu código de cores (por exemplo: azul = estudo, verde = lazer, laranja = família), mostrando que entendeu o uso das cores como mapa visual.`,
    },
  ],
};
