import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Transições entre Slides com Propósito",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar transições sutis e consistentes entre slides, controlando velocidade e timing para reforçar a mensagem sem distrair a plateia.`,
  descricao: `Transição é o efeito de movimento que acontece quando um slide sai da tela e o próximo entra. Quando bem usada, ela funciona como a passagem de página de um livro: organiza o ritmo da apresentação e ajuda quem assiste a perceber que uma ideia terminou e outra começou. Nesta aula os alunos descobrem que a transição não é enfeite, e sim uma ferramenta de comunicação que deve servir à mensagem.

O PowerPoint reúne todas as transições em uma única aba chamada "Transições". Ali o aluno escolhe o efeito (como Aparecer, Empurrar, Revelar ou Desvanecer), ajusta a duração em segundos e decide se o slide avança com o clique do mouse ou sozinho, depois de um tempo. São poucos controles, mas cada um muda bastante a sensação de quem assiste à apresentação.

O grande aprendizado da aula é o princípio do propósito e da consistência. Em vez de usar um efeito diferente em cada slide, o aluno escolhe uma ou duas transições suaves e as repete do começo ao fim. Transições calmas, como Desvanecer ou um Empurrar lento, passam profissionalismo; efeitos chamativos, como Origami ou Cubo girando em todo slide, cansam os olhos e roubam a atenção do conteúdo.

Ao final, os alunos comparam, na prática, uma apresentação com transições exageradas e outra com transições discretas. Eles percebem que "menos é mais": o objetivo não é impressionar com o movimento, e sim guiar o olhar e manter a mensagem clara do primeiro ao último slide.`,
  materiais: [
    `Computadores com PowerPoint instalado e aberto (um por aluno)`,
    `Projetor ou TV conectados ao computador do professor para demonstrações`,
    `Arquivo de exemplo "exagerado.pptx" com transições diferentes e chamativas em cada slide`,
    `Arquivo de exemplo "elegante.pptx" com a mesma apresentação usando uma transição suave e consistente`,
    `Apresentação iniciada na aula anterior por cada aluno (mínimo de 4 a 5 slides) para aplicar as transições`,
    `Conta Microsoft ativa para salvar os arquivos no OneDrive`,
    `Fones de ouvido opcionais, caso algum exemplo tenha som de transição`,
  ],
  conceitosChave: [
    `Transição — efeito de movimento que aparece quando um slide sai e o próximo entra na tela.`,
    `Aba Transições — local no PowerPoint onde você escolhe o efeito, ajusta a duração e define o avanço.`,
    `Duração — tempo, em segundos, que o efeito de transição leva para acontecer; quanto maior, mais lento.`,
    `Avanço de slides — opção que define se o slide muda com o clique do mouse ou automaticamente após um tempo.`,
    `Consistência — usar a mesma transição em todos os slides para dar unidade e ar profissional à apresentação.`,
    `Aplicar a Tudo — botão que copia a transição do slide atual para todos os slides de uma só vez.`,
    `Transição sutil — efeito discreto (como Desvanecer) que organiza o ritmo sem roubar a atenção da mensagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Transição é o efeito que acontece entre um slide e outro; não confunda com animação, que move elementos dentro do mesmo slide (isso é a próxima aula). Tudo o que você precisa está na aba "Transições", na faixa superior do PowerPoint. Os três controles importantes são: a galeria de efeitos (à esquerda), o botão "Opções de Efeito" (define a direção, por exemplo de cima para baixo) e, à direita, o grupo "Intervalo", com a "Duração" em segundos e as caixas "Ao Clicar com o Mouse" e "Após". O botão "Aplicar a Tudo" copia o efeito do slide atual para todos. A mensagem central da aula é simples: escolha uma transição suave (recomende Desvanecer ou Empurrar), use a mesma em todos os slides e mantenha a duração entre 0,5 e 1 segundo. Antes da aula, abra os dois arquivos de exemplo e teste-os você mesmo apertando F5.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o arquivo "exagerado.pptx" no projetor e apresente com F5, clicando rápido. Pergunte: "O que vocês acharam do movimento?". Em seguida mostre "elegante.pptx" e pergunte qual passa mais confiança. Conduza para a conclusão de que o exagero atrapalha.

Conteúdo novo guiado (15 min): no seu computador, clique na aba "Transições". Selecione um slide e clique no efeito "Desvanecer" na galeria; aperte "Visualizar" (botão à esquerda) para ver o resultado. Mostre o grupo "Intervalo": altere a "Duração" para 0,75 e explique o que muda. Clique em "Aplicar a Tudo" e mostre que todos os slides ganharam o mesmo efeito (aparece uma estrelinha ao lado de cada miniatura). Demonstre também "Opções de Efeito" usando "Empurrar" para mudar a direção.

Mão na massa (25 min): cada aluno abre a própria apresentação iniciada na aula anterior. Tarefa: aplicar "Desvanecer" no primeiro slide, ajustar a duração para cerca de 0,75 segundo e clicar em "Aplicar a Tudo". Depois, testar com F5. Circule pela sala ajudando. Para quem terminar, proponha trocar "Desvanecer" por "Empurrar" e comparar qual combina mais com o tema. Lembre todos de salvar com Ctrl+S.

Desafio e compartilhar (10 min): peça que cada aluno apresente seus slides em F5 para o colega ao lado e responda: "Por que escolhi essa transição?". Encerre reforçando o princípio "uma só transição, suave, do começo ao fim".

## Como explicar de forma clara (linguagem para a idade)

Compare a transição com a passagem de página de um livro ou com o corte entre cenas de um vídeo no YouTube: bons cortes são tão suaves que nem percebemos; cortes espalhafatosos cansam. Diga: "A transição é a respiração da apresentação." Use a regra do bom garçom: o melhor é aquele que serve sem aparecer. Reforce que a plateia precisa olhar para a mensagem, não para o efeito girando.

## Erros comuns e como ajudar

O erro mais frequente é usar um efeito diferente em cada slide. Solução: mostre como "Aplicar a Tudo" padroniza tudo em um clique. Outro erro é duração muito longa (3 segundos ou mais), deixando a apresentação lenta; oriente a manter entre 0,5 e 1 segundo. Alguns alunos confundem transição com animação e procuram o efeito na aba errada; reforce que transição fica na aba "Transições" e age no slide inteiro. Há quem marque "Após" com um tempo pequeno e o slide avance sozinho sem querer; mostre como desmarcar essa caixa e deixar só "Ao Clicar com o Mouse". Por fim, alguns esquecem de salvar: combine que, ao trocar de tarefa, todos apertam Ctrl+S.`,
  exercicios: [
    {
      titulo: `Caça à transição certa`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com a própria apresentação aberta e mostre, no projetor, onde fica a aba "Transições" antes de começarem.`,
      atividade: `Abra sua apresentação, clique no primeiro slide e, na aba "Transições", aplique o efeito "Desvanecer". Aperte o botão "Visualizar" para conferir o resultado.`,
      gabarito: `O aluno clica na aba "Transições", seleciona "Desvanecer" na galeria e usa "Visualizar". O slide passa a abrir com um leve efeito de surgir suave. Esperado: a estrelinha de transição aparece ao lado da miniatura do primeiro slide.`,
    },
    {
      titulo: `Padronizando toda a apresentação`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno ajusta a duração no grupo "Intervalo" antes de clicar em "Aplicar a Tudo"; circule confirmando as estrelinhas em todos os slides.`,
      atividade: `Com o efeito "Desvanecer" no primeiro slide, mude a "Duração" para 0,75 segundo no grupo "Intervalo" e clique em "Aplicar a Tudo". Depois teste com F5 do começo ao fim.`,
      gabarito: `Todos os slides ficam com "Desvanecer" e duração de 0,75 segundo (estrelinha em cada miniatura). Ao apertar F5, a apresentação inteira muda de slide com o mesmo efeito suave. Sai com Esc.`,
    },
    {
      titulo: `Direção com propósito`,
      tipo: `Prática em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente que cada um teste no próprio computador; lembre onde fica o botão "Opções de Efeito" e que ele só funciona com efeitos que têm direção, como "Empurrar".`,
      atividade: `Em dupla, troquem "Desvanecer" por "Empurrar" e usem "Opções de Efeito" para escolher a direção (por exemplo, "De Baixo"). Cada um mostra ao colega e juntos decidem qual direção combina melhor com a apresentação.`,
      gabarito: `Os alunos aplicam "Empurrar", abrem "Opções de Efeito" e escolhem uma direção. A dupla justifica a escolha (por exemplo, "de baixo dá sensação de subir/avançar"). Resposta certa é qualquer direção bem justificada e aplicada com "Aplicar a Tudo".`,
    },
    {
      titulo: `Menos é mais`,
      tipo: `Roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Reabra "exagerado.pptx" e "elegante.pptx" no projetor. Conduza a conversa com perguntas e anote no quadro as palavras que os alunos usarem para descrever cada um.`,
      atividade: `Assistam às duas apresentações de exemplo. Em roda, respondam: qual cansa mais os olhos? Qual passa mais profissionalismo? Quando vale a pena usar um efeito mais chamativo?`,
      gabarito: `A versão exagerada cansa e distrai porque cada slide tem um efeito diferente; a elegante passa profissionalismo pela consistência e suavidade. Efeitos chamativos só valem em momentos pontuais (um slide de impacto, uma virada da história), nunca em todos. Conclusão: uma só transição suave do começo ao fim.`,
    },
    {
      titulo: `Minha apresentação com ritmo`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Deixe claros os critérios antes de começar: uma única transição, duração entre 0,5 e 1 segundo e avanço por clique. Ao final, peça que apresentem em F5 para um colega.`,
      atividade: `Finalize as transições da sua apresentação: escolha UMA transição suave, aplique-a a todos os slides com "Aplicar a Tudo", deixe a duração entre 0,5 e 1 segundo e confira que cada slide avança "Ao Clicar com o Mouse" (caixa "Após" desmarcada). Salve com Ctrl+S e apresente em F5 ao colega.`,
      gabarito: `A apresentação tem a mesma transição suave em todos os slides, duração entre 0,5 e 1 segundo, avanço por clique do mouse e está salva. Ao apresentar em F5, os slides mudam com ritmo consistente, sem efeitos diferentes a cada tela. O aluno consegue explicar por que escolheu aquela transição.`,
    },
  ],
};
