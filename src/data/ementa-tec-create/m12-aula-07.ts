import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparar a Demo do Ano 1",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Montar uma apresentação que una o jogo 2D jogável e os personagens impressos lado a lado, ensaiando contar todo o percurso do Ano 1.`,
  descricao: `Esta aula é o ponto de encontro de tudo o que os alunos construíram durante o ano. Eles têm um jogo 2D completo feito no Construct 3 e os personagens desse mesmo jogo agora transformados em modelos 3D, fatiados no Bambu Studio e impressos de verdade. A missão de hoje é juntar essas duas partes em uma demonstração curta e bem contada, em que a pessoa que assiste entende a jornada: do desenho em pixel art à peça física na mão.

A Demo do Ano 1 não é só "mostrar o jogo". É um roteiro com começo, meio e fim. O aluno aprende a organizar a mesa de apresentação, decidir a ordem em que mostra cada coisa, preparar o computador com o jogo aberto e posicionar os personagens impressos ao lado da tela. No Bambu Studio, eles reabrem o projeto fatiado do personagem para mostrar à plateia "como o boneco saiu da tela e virou objeto", explicando a fatia, os suportes e o tempo de impressão como parte da história.

O foco pedagógico é comunicação e orgulho do trabalho. Adolescentes muitas vezes sabem fazer, mas travam na hora de explicar. Por isso a aula reserva bastante tempo para escrever um roteiro simples (o que falo, o que mostro, o que a pessoa toca) e para ensaiar em voz alta. O professor atua como diretor de ensaio: ajuda a cortar o que é longo demais, reforça os pontos fortes de cada projeto e garante que cada aluno tenha um momento de fala.

Ao final, cada aluno sai com um roteiro escrito, a estação de demonstração organizada (jogo + impressos + projeto do Bambu Studio aberto) e pelo menos um ensaio completo feito. Isso prepara diretamente a Aula 8, o Demo Day, onde tudo será apresentado para valer e o certificado do Ano 1 será entregue.`,
  materiais: [
    `Computadores com Bambu Studio instalado e os projetos (.3mf) dos personagens já fatiados`,
    `Computadores ou tablets com o jogo 2D do Construct 3 pronto para jogar`,
    `Projetor ou TV para ensaiar a apresentação para a turma`,
    `Personagens impressos e finalizados de cada aluno (do Mês 12)`,
    `Folhas de roteiro impressas ou documento digital com o modelo de roteiro`,
    `Mesa ou bancada livre para montar a estação de demonstração`,
    `Cronômetro ou timer no celular para controlar o tempo de cada ensaio`,
  ],
  conceitosChave: [
    `Demo — apresentação curta e prática em que você mostra o que criou, deixando a pessoa ver e tocar o resultado.`,
    `Roteiro — lista em ordem do que você vai falar e mostrar, para não esquecer nem se perder no meio.`,
    `Estação de demonstração — o jeito organizado de montar a mesa, com o computador, o jogo aberto e os personagens impressos ao lado.`,
    `Percurso do Ano 1 — a história completa do trabalho, do pixel art ao modelo 3D e à peça impressa.`,
    `Pitch — a fala de abertura, bem curta, que explica em poucas frases o que é o seu projeto.`,
    `Ensaio — treinar a apresentação em voz alta antes do dia real, para ganhar segurança e ajustar o tempo.`,
    `Projeto fatiado (.3mf) — o arquivo do Bambu Studio com o personagem já posicionado, com suportes e fatias, que prova como a peça foi impressa.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você é diretor de ensaio, não professor de software. A parte técnica do Bambu Studio já foi feita nas aulas anteriores: os personagens estão fatiados e impressos. Nesta aula, o Bambu Studio entra apenas como peça de demonstração: o aluno reabre o projeto .3mf do personagem para mostrar à plateia a fatia, os suportes e o tempo de impressão. Você não precisa fatiar nada novo. Se você é iniciante, basta saber abrir um projeto e usar o visualizador de fatias, que vou explicar abaixo.

Para reabrir um projeto: no Bambu Studio, clique em "File" no canto superior esquerdo e depois em "Open Project", ou use o atalho Ctrl+O, e escolha o arquivo .3mf do personagem. Com o modelo na tela, clique na aba "Preview" (fica no topo, ao lado de "Prepare"). Ali aparece a barra deslizante lateral de camadas: arraste-a de baixo para cima para mostrar o boneco sendo "construído" fatia por fatia. No canto, o painel mostra "Total time" (tempo de impressão) e "Total filament" (quanto de material foi usado). Esses três números contam uma história ótima para a plateia.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Reúna a turma e pergunte: "Se um amigo nunca viu seu jogo nem seus bonecos, o que você mostraria primeiro?" Anote no quadro 3 ou 4 ideias. Mostre rapidamente, no seu computador, um projeto .3mf aberto na aba "Preview" arrastando a barra de camadas, para lembrá-los de que isso será parte da demo.

15 min - Conteúdo novo guiado: Apresente o modelo de roteiro em 4 blocos no projetor: (1) Pitch - uma frase sobre o jogo; (2) Jogar - mostrar o jogo rodando por 30 segundos; (3) Da tela ao objeto - abrir o .3mf no Bambu Studio, ir na aba "Preview" e deslizar as camadas mostrando o personagem; (4) Na mão - entregar o personagem impresso para a pessoa segurar. Escreva esse roteiro-modelo no quadro para todos copiarem.

25 min - Mão na massa: Cada aluno monta sua estação de demonstração: computador com o jogo aberto, Bambu Studio aberto no projeto do personagem na aba "Preview", e os impressos arrumados ao lado. Em seguida, preenchem o próprio roteiro nos 4 blocos. Circule pela sala ajudando a cortar frases longas e conferindo se cada um conseguiu abrir o .3mf e mexer na barra de camadas.

10 min - Desafio e compartilhar: Em duplas, cada aluno faz um ensaio cronometrado de 90 segundos para o colega, que dá um elogio e uma sugestão. Feche pedindo que dois voluntários apresentem para a turma toda no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "contar a história do seu boneco". Diga: "Sua demo é como um trailer. Em pouco tempo, a pessoa precisa entender que você desenhou, programou e imprimiu de verdade." Compare o roteiro a um mapa: "Sem mapa, a gente se perde e fala tudo embaralhado." Para o Bambu Studio, fale: "A aba Preview é a câmera lenta da impressão; arrastando a barra, você mostra o boneco nascendo camada por camada." Reforce que ninguém precisa decorar; o roteiro fica na mesa como cola.

## Erros comuns e como ajudar

O erro mais comum é falar demais e querer mostrar tudo: limite a 90 segundos e elogie quem for direto ao ponto. Outro é abrir o arquivo errado no Bambu Studio; peça que confirmem o nome do .3mf antes do ensaio. Alguns esquecem de testar o jogo e ele trava na hora; oriente a deixar o jogo já aberto e na tela inicial. Há quem fale olhando só para a tela; lembre-os de olhar para a plateia e segurar o boneco enquanto fala. Por fim, muitos terminam sem ensaiar; garanta que cada aluno faça pelo menos um ensaio completo hoje.`,
  exercicios: [
    {
      titulo: `Abrir o projeto e mostrar as camadas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Verifique se cada aluno consegue abrir o .3mf e chegar à aba "Preview". Circule conferindo se a barra de camadas aparece e se mexe.`,
      atividade: `Abra no Bambu Studio o projeto do seu personagem (File, depois Open Project, ou Ctrl+O). Clique na aba "Preview" e arraste a barra de camadas de baixo para cima até o topo, mostrando o boneco completo.`,
      gabarito: `O aluno acerta quando o personagem aparece na aba "Preview" e a barra de camadas, ao ser arrastada, revela a peça surgindo fatia por fatia até ficar inteira. Ele também deve localizar "Total time" e "Total filament" no painel.`,
    },
    {
      titulo: `Escrever o roteiro em 4 blocos`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a folha de roteiro com os 4 títulos. Ajude a deixar cada bloco em uma ou duas frases curtas. Corte tudo que for longo demais.`,
      atividade: `Preencha seu roteiro nos 4 blocos: Pitch (uma frase sobre o jogo), Jogar (o que mostrar no jogo), Da tela ao objeto (mostrar o personagem na aba Preview) e Na mão (entregar o boneco impresso).`,
      gabarito: `O roteiro está pronto quando tem os 4 blocos preenchidos, cada um com frases curtas e na ordem certa. Exemplo de pitch válido: "Meu jogo é uma corrida espacial onde o herói foge dos meteoros." Cada bloco deve caber em até duas frases.`,
    },
    {
      titulo: `Montar a estação de demonstração`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Desafie cada aluno a deixar a mesa pronta para uma plateia chegar agora. Confira os três elementos: jogo aberto, Bambu Studio na aba Preview e impressos arrumados.`,
      atividade: `Organize sua estação: o jogo do Construct 3 aberto na tela inicial, o Bambu Studio aberto no projeto do personagem na aba "Preview" e os personagens impressos arrumados ao lado do computador.`,
      gabarito: `A estação está correta quando, sem mexer em mais nada, é possível começar a demo: jogo pronto para jogar, projeto .3mf aberto na aba Preview e bonecos impressos visíveis e ao alcance da mão para entregar à plateia.`,
    },
    {
      titulo: `Ensaio em dupla com tempo`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e cronometre 90 segundos por aluno. Oriente o ouvinte a dar um elogio e uma sugestão. Reforce olhar para a plateia e segurar o boneco.`,
      atividade: `Apresente sua demo completa para o colega em 90 segundos, seguindo os 4 blocos do roteiro. Depois troquem: você assiste o colega e diz um elogio e uma sugestão de melhoria.`,
      gabarito: `O ensaio é válido quando o aluno percorre os 4 blocos dentro de 90 segundos, mostra o jogo, abre o Preview no Bambu Studio e entrega o boneco. O feedback do colega deve trazer exatamente um elogio e uma sugestão concreta, como "fale um pouco mais devagar".`,
    },
    {
      titulo: `Roda de conversa: o percurso do Ano 1`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas sobre a jornada do ano e ajude cada aluno a resumir o percurso em uma frase para usar na abertura da demo.`,
      atividade: `Em roda, conte qual etapa do Ano 1 você mais gostou: pixel art, modelagem 3D, programação do jogo ou impressão. Depois, diga em uma frase o caminho completo, do desenho à peça impressa.`,
      gabarito: `A participação é completa quando o aluno cita pelo menos uma etapa preferida com um motivo e formula uma frase que liga as fases do ano. Exemplo aceito: "Eu desenhei meu personagem em pixel art, modelei ele em 3D e imprimi de verdade para segurar na mão."`,
    },
  ],
};
