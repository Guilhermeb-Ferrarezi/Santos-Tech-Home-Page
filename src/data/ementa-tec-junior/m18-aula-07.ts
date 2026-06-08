import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Reta Final do Jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Caçar e corrigir os últimos erros do jogo, ajustar pequenos detalhes e adicionar sons aos cliques e às ações, testando o jogo do menu até o fim.`,
  descricao: `Chegamos na reta final! Nas aulas anteriores as crianças construíram um jogo 2D inteiro no Construct 3: heróis que se movem, animações que reagem, inimigos que aparecem, colisões que acontecem, tela de início, placar de recorde e tela de vitória. Agora o trabalho não é criar coisas novas, e sim deixar tudo redondinho. Esta aula é sobre revisar, consertar e dar o acabamento.

Pense como um mecânico testando um carro antes de entregar: a gente liga, dirige um pouco, escuta os barulhos e ajusta o que estiver torto. No jogo é igual. Vamos jogar do começo ao fim, anotar o que estiver estranho (um botão que não funciona, um inimigo que atravessa a parede, um som que falta) e arrumar um problema de cada vez.

O grande tempero desta aula é o som. Sons deixam o jogo vivo: um "clique" quando se aperta um botão, um "bip" quando se pega uma moeda, um "tchan" na vitória. No Construct 3 isso é feito com o objeto Audio e a ação Play, ligada aos eventos que já existem. É um acréscimo simples, mas que muda totalmente a sensação de jogar.

No fim da aula cada criança deve ter um jogo que roda inteiro, do menu à tela final, sem travar, com sons nos momentos certos. É a penúltima parada antes de publicar o jogo para o mundo na próxima aula.`,
  materiais: [
    `Computadores com o Construct 3 aberto, cada um com o projeto do jogo da criança já salvo`,
    `Projetor ou TV ligada ao computador do professor para demonstrar os passos`,
    `Um jogo-exemplo pronto e funcionando, para mostrar como deve ficar no fim`,
    `Um jogo-exemplo "com erros de propósito" (botão quebrado, sem som) para a turma caçar os problemas juntos`,
    `Lista impressa de "checagem do jogo" (menu, movimento, inimigos, colisão, recorde, vitória) para cada criança marcar`,
    `Sons gratuitos prontos para usar (clique, moeda, vitória), já baixados na pasta do projeto`,
    `Fones de ouvido (opcional) para a turma testar os sons sem bagunça`,
  ],
  conceitosChave: [
    `Testar — jogar o próprio jogo do início ao fim para descobrir o que não está funcionando, como um detetive procurando pistas.`,
    `Erro (bug) — um pedacinho do jogo que faz algo errado ou não faz nada; a gente acha e conserta.`,
    `Revisar — olhar tudo de novo com calma para ter certeza de que cada parte está certinha.`,
    `Ajuste — uma pequena mudança que deixa o jogo melhor, como mexer um número ou mover um objeto.`,
    `Som (Audio) — o barulho que o jogo faz; no Construct 3 usamos o objeto Audio e a ação Play.`,
    `Evento — a regra "quando isso acontecer, faça aquilo", onde a gente pendura os sons e os consertos.`,
    `Checklist — uma listinha de coisas para conferir, marcando um "ok" em cada item que está funcionando.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de acabamento, não de criação. O jogo já existe; vamos torná-lo confiável e divertido. Antes da aula, abra um projeto de exemplo no Construct 3 e jogue do menu até a vitória para sentir o fluxo. Você não precisa ser especialista: precisa saber abrir a aba Event Sheet (folha de eventos), reconhecer um evento ("Condição → Ação") e adicionar uma ação. O som no Construct 3 usa um objeto chamado Audio. Adicione-o uma única vez por layout (clique com o botão direito no layout, "Insert New Object", escolha "Audio"). Os arquivos de som ficam na pasta Sounds do projeto (painel Project, à esquerda). Tenha de 3 a 4 sons curtos já importados: clique, moeda/ponto e vitória.

## Passo a passo da aula

Aquecimento (10 min): reúna a turma e diga que hoje somos "detetives de jogos". No projetor, abra o exemplo "com erros de propósito" e jogue na frente deles. Erre de propósito: aperte um botão que não responde, deixe um inimigo atravessar a parede. Pergunte: "O que está errado aqui?". Anote no quadro 3 ou 4 problemas que a turma apontar. Isso ensina o olhar de testador.

Conteúdo novo guiado (15 min): mostre como adicionar som. No projetor, vá ao painel Project à esquerda, abra a pasta "Sounds" e confirme que há sons importados (se faltar, arraste o arquivo para a pasta). Abra a folha de eventos (aba "Event sheet"). Ache o evento do botão de iniciar: "On Start clicked". Clique em "Add action", escolha o objeto "Audio", depois a ação "Play", e selecione o som "clique". Rode o jogo (botão de play, no alto à direita) e clique no botão: deve soar. Repita ao vivo para o som de pegar moeda (no evento de colisão) e o som de vitória (no evento que mostra a tela de vitória).

Mão na massa (25 min): cada criança abre o próprio jogo. Entregue o checklist impresso. Elas jogam do menu ao fim, marcam cada item e anotam erros. Depois consertam um de cada vez e adicionam pelo menos dois sons (um no clique do menu, um numa ação do jogo). Circule pela sala ajudando. Lembre sempre: "salve o projeto" (menu Menu → Save, ou ícone de salvar).

Desafio + compartilhar (10 min): desafie quem terminou a colocar um terceiro som (vitória ou derrota). Depois, duas ou três crianças mostram o jogo no projetor, jogando do começo ao fim, com os sons funcionando. A turma aplaude cada acabamento.

## Como explicar para crianças

Use a ideia do detetive: "Vamos procurar pistas do que está estranho no nosso jogo." Para o som, diga que um jogo sem som é como um desenho animado mudo, sem graça. "Quando você aperta o botão, o jogo precisa responder com um barulhinho, igual à campainha da casa." Mostre, não só fale: faça o som tocar na frente deles e veja os olhos brilharem. Para o conserto de erros, use "um de cada vez", como arrumar os brinquedos guardando um por vez, sem bagunçar tudo.

## Erros comuns e como ajudar

O som não toca: quase sempre o objeto Audio não foi inserido no layout, ou o nome do som digitado na ação está diferente do nome do arquivo. Confira a pasta Sounds e selecione o som pela lista, sem digitar. A criança coloca o som no evento errado e ele toca o tempo todo: peça para ela ler a condição em voz alta ("quando o botão é clicado") e ver se faz sentido. Esquecer de salvar e perder o trabalho: crie o hábito de salvar a cada conserto. Querer mudar o jogo inteiro em vez de consertar: redirecione com carinho, lembrando que hoje a missão é deixar o que já existe funcionando bem, não recomeçar.`,
  exercicios: [
    {
      titulo: `Detetive de erros`,
      tipo: `Observação em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, jogue o exemplo "com erros de propósito". Pause em cada problema e deixe as crianças apontarem. Anote no quadro o que encontrarem.`,
      atividade: `Assista ao professor jogando e levante a mão sempre que algo parecer errado. Diga em voz alta o que está estranho.`,
      gabarito: `A turma deve identificar pelo menos 3 erros, como: um botão que não responde ao clique, um inimigo que atravessa a parede e a falta de som ao apertar botões. Cada erro apontado corretamente é um acerto.`,
    },
    {
      titulo: `Marcando o checklist`,
      tipo: `Teste guiado individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue o checklist impresso. Oriente cada criança a jogar o próprio jogo do menu ao fim e marcar "ok" no que funciona e "X" no que está com problema.`,
      atividade: `Jogue o seu jogo do começo ao fim. Marque na lista cada parte que funciona e circule o que não está certo: menu, movimento, inimigos, colisão, recorde e vitória.`,
      gabarito: `O checklist deve estar totalmente preenchido, com pelo menos um item marcado como problema para corrigir depois. Exemplo correto: "Menu ok, movimento ok, colisão com X (inimigo não some)".`,
    },
    {
      titulo: `Som no clique do botão`,
      tipo: `Mão na massa`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe a criança até o evento "On Start clicked" na folha de eventos. Ajude a usar "Add action" → objeto "Audio" → ação "Play" → som "clique". Lembre de inserir o objeto Audio no layout antes.`,
      atividade: `Adicione um som de clique ao botão de iniciar o jogo. Depois rode o jogo e aperte o botão para ouvir.`,
      gabarito: `Ao clicar no botão de iniciar, o som de clique toca uma vez. A ação correta na folha de eventos é "Audio: Play 'clique'" dentro do evento do clique do botão.`,
    },
    {
      titulo: `Consertando um erro de verdade`,
      tipo: `Resolução de problema`,
      tempo: `12 minutos`,
      guiaProfessor: `Pegue um erro marcado no checklist da criança e ajude-a a consertar só aquele. Leiam juntos o evento responsável e ajustem a condição, a ação ou a posição do objeto. Salve ao terminar.`,
      atividade: `Escolha um erro que você marcou na lista e conserte apenas ele. Teste de novo para ver se o problema sumiu. Salve o seu jogo.`,
      gabarito: `O erro escolhido deixa de acontecer ao testar novamente. Exemplo: se o inimigo atravessava a parede, depois do ajuste no comportamento Solid ou na colisão ele passa a parar na parede. O projeto foi salvo após o conserto.`,
    },
    {
      titulo: `Jogo completo com sons`,
      tipo: `Desafio final + compartilhar`,
      tempo: `12 minutos`,
      guiaProfessor: `Desafie a criança a ter o jogo rodando do menu à vitória, com pelo menos dois sons funcionando. Convide dois ou três alunos a mostrar no projetor, jogando do início ao fim.`,
      atividade: `Jogue o seu jogo inteiro, do menu até a tela de vitória, com os sons tocando. Mostre para a turma, se for a sua vez, e explique qual som você colocou.`,
      gabarito: `O jogo roda do menu ao fim sem travar, com no mínimo dois sons funcionando (por exemplo, clique no menu e som ao pegar um ponto). A criança consegue explicar onde colocou cada som. Tudo marcado como "ok" no checklist final.`,
    },
  ],
};
