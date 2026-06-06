import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Dirigindo a Câmera da IA",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a controlar ângulos, aproximação, panorâmica e ritmo da câmera dentro do prompt do Veo para que o vídeo gerado combine com cenas de jogo.`,
  descricao: `Nas duas primeiras aulas os alunos descobriram o Veo dentro do Gemini e perceberam que um bom prompt gera o clipe certo. Agora damos um passo a mais: vamos virar diretores de câmera. Em um filme ou em um jogo, não basta dizer o que aparece na tela; importa de que ângulo a gente vê, se a câmera chega perto ou fica longe, se ela passeia pelo cenário e em qual velocidade tudo acontece. Esses mesmos comandos existem dentro do prompt do Veo, e quando o aluno escreve "câmera aproximando devagar" ou "vista de cima", o resultado muda por completo.

O foco da aula é o vocabulário de câmera. O aluno vai entender quatro ideias centrais: ângulo (de onde a câmera olha a cena), aproximação ou zoom (a câmera chega perto ou se afasta), panorâmica (a câmera desliza para os lados ou para cima e para baixo) e ritmo (rápido, lento, suave). Cada termo é uma "alavanca" que o aluno aprende a puxar dentro do texto do prompt, sempre em português claro, para dirigir o que o Veo cria.

Ao longo da hora, o professor mostra no projetor como uma mesma cena muda quando trocamos apenas a instrução de câmera. A turma compara um plano fechado com um plano aberto, um movimento rápido com um lento, e percebe que cada escolha conta uma sensação diferente: aproximação cria tensão, vista de cima mostra o mapa do jogo, panorâmica apresenta o cenário. No fim, cada aluno planeja qual movimento combina com a cena do próprio jogo.

Esta aula prepara o terreno para a Aula 4, em que os alunos colocam de fato cenas em movimento na prática. Aqui o objetivo é entender e experimentar os controles; ainda não é hora de montar o banco de vídeos nem de fechar clipes finais. É a aula em que a turma deixa de só "pedir um vídeo" e começa a "dirigir o vídeo".`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e acesso ao Gemini com o Veo habilitado, cada aluno logado na própria conta da escola.`,
    `Conta do Gemini com Veo liberada e testada pelo professor antes da aula, para garantir que a geração de vídeo está funcionando no dia.`,
    `Projetor ou TV ligado ao computador do professor para demonstrar os prompts e comparar resultados com a turma.`,
    `Arquivo de exemplo com três a quatro prompts prontos da mesma cena, variando só a câmera (ângulo, zoom, panorâmica e ritmo), para mostrar a diferença lado a lado.`,
    `Folha ou documento "Cardápio de Câmera" com os termos em português e o que cada um faz, impressa ou compartilhada na tela.`,
    `Fones de ouvido por aluno (opcional) e um cronômetro visível para controlar o ritmo de 10/15/25/10 minutos.`,
    `Caderno ou bloco de notas digital para o aluno anotar o prompt que funcionou e o movimento escolhido para a cena do seu jogo.`,
  ],
  conceitosChave: [
    `Ângulo de câmera — de onde a câmera olha a cena; por exemplo, vista de cima, vista de baixo ou na altura dos olhos.`,
    `Aproximação (zoom) — a câmera chega mais perto do objeto ou se afasta dele, deixando a cena mais íntima ou mais ampla.`,
    `Panorâmica — a câmera desliza suavemente para os lados, para cima ou para baixo, passeando pelo cenário sem cortar.`,
    `Plano aberto e plano fechado — plano aberto mostra todo o ambiente; plano fechado mostra só um detalhe, como o rosto de um personagem.`,
    `Ritmo da câmera — a velocidade do movimento; pode ser lento e suave para calma ou rápido para criar ação e tensão.`,
    `Prompt de câmera — a parte do texto em que você descreve o movimento, escrita junto da cena, por exemplo "câmera aproximando devagar do herói".`,
    `Cena de jogo — o momento do seu jogo que você quer mostrar em vídeo, como a entrada de um chefão ou a visão geral do mapa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em cinema. Basta dominar quatro ideias e saber onde digitá-las no Veo. As quatro alavancas de câmera são: ângulo (de onde olhamos), aproximação ou zoom (perto ou longe), panorâmica (a câmera desliza pelo cenário) e ritmo (rápido, lento, suave). No Gemini com o Veo, todo controle de câmera entra no mesmo campo de texto do prompt: não há botões separados de câmera. Por isso, dirigir a câmera é, na prática, escrever bem a parte do movimento dentro da frase.

Antes da aula, abra o Gemini, selecione o modo de geração de vídeo com o Veo (no seletor de modelo ou no botão de criar vídeo, conforme a sua conta), e gere os exemplos do arquivo: a mesma cena com "plano aberto", com "câmera aproximando devagar" e com "panorâmica lenta da esquerda para a direita". Tenha os três clipes prontos para comparar no projetor. Lembre os alunos de que o vídeo demora alguns segundos ou minutos para ficar pronto, então o prompt precisa estar bem escrito antes de enviar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, mostre dois clipes da mesma cena, um plano aberto e um plano fechado, e pergunte "o que mudou?". Conduza a turma a perceber que só a câmera mudou, não a história. Apresente o "Cardápio de Câmera" com os quatro termos.

Conteúdo novo guiado (15 min): com o Gemini aberto, mostre onde fica o campo do prompt do Veo. Digite uma cena simples, por exemplo "um cavaleiro parado na entrada de um castelo, à noite". Gere. Depois, no mesmo campo, acrescente o movimento: "câmera aproximando devagar do cavaleiro". Gere de novo e compare. Repita trocando para "vista de cima do castelo, panorâmica lenta". Mostre, passo a passo, onde clicar para enviar e onde o vídeo aparece para baixar ou rever.

Mão na massa (25 min): cada aluno, no próprio computador, escolhe uma cena do seu jogo e gera o mesmo prompt duas vezes, mudando só a câmera (por exemplo, zoom contra panorâmica). Circule pela sala. Peça que anotem qual versão combinou melhor com a cena.

Desafio e compartilhar (10 min): proponha o desafio de criar um clipe que use dois movimentos juntos, como "panorâmica e depois aproximação". Encerre com uma roda rápida em que dois ou três alunos mostram o resultado e dizem qual movimento escolheram e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do diretor de cinema: "Vocês não são só quem pede o vídeo, vocês são quem manda na câmera." Compare com o celular: aproximar é como dar zoom na foto; panorâmica é como girar o celular devagar filmando a paisagem; ângulo é se você filma de cima, de baixo ou de frente. Ligue cada movimento a uma emoção do jogo: aproximação cria tensão ("o monstro está chegando"), vista de cima mostra o mapa, panorâmica apresenta o cenário com calma. Peça que escrevam o movimento em português simples e direto, sempre dizendo a velocidade: "devagar", "rápido" ou "suave".

## Erros comuns e como ajudar

O erro mais comum é escrever uma cena cheia de movimentos ao mesmo tempo ("zoom, panorâmica, gira e sobe"); a IA se confunde e o vídeo fica estranho. Oriente: um ou no máximo dois movimentos por clipe. Outro erro é esquecer a velocidade, e a câmera fica tremida ou rápida demais; lembre sempre de "devagar" ou "suave". Alguns alunos mudam a cena e a câmera ao mesmo tempo e não percebem o que causou a diferença; peça que troquem só a câmera, mantendo o resto igual, para enxergar o efeito. Por fim, há quem reenvie sem ler o prompt; reforce reler antes de gerar, porque cada vídeo leva tempo.`,
  exercicios: [
    {
      titulo: `Trocando só a câmera`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o Gemini com o Veo aberto e o "Cardápio de Câmera" à vista. O objetivo é isolar o efeito da câmera mantendo a cena igual.`,
      atividade: `Escreva uma cena simples (ex.: "uma nave parada no espaço, estrelas ao fundo") e gere. Depois, no mesmo prompt, acrescente "câmera aproximando devagar da nave" e gere de novo. Compare os dois vídeos e anote a diferença que você viu.`,
      gabarito: `O aluno deve gerar dois clipes da mesma cena e perceber que, com a aproximação, a nave fica maior e mais próxima, criando mais foco e tensão. A anotação correta menciona que só a câmera mudou, não a cena. Exemplo de prompt aceito: "uma nave parada no espaço, estrelas ao fundo, câmera aproximando devagar da nave".`,
    },
    {
      titulo: `Encontre o termo certo`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Leia em voz alta cada situação e peça que escolham o termo do cardápio. Aceite sinônimos em português desde que o movimento esteja correto.`,
      atividade: `Para cada frase, escreva qual movimento de câmera usar: 1) mostrar todo o mapa do jogo de uma vez; 2) deixar o rosto do chefão bem perto e assustador; 3) apresentar o cenário deslizando pela floresta com calma.`,
      gabarito: `1) Vista de cima com plano aberto (mostra o mapa inteiro). 2) Aproximação/zoom com plano fechado no rosto. 3) Panorâmica lenta. São aceitas variações como "câmera de cima", "zoom no rosto" e "câmera deslizando devagar pela floresta".`,
    },
    {
      titulo: `Dupla de diretores`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno escreve o prompt e o outro confere se há apenas um ou dois movimentos e se a velocidade está dita. Depois trocam de papel.`,
      atividade: `Em dupla, escolham uma cena de jogo e criem dois clipes da mesma cena: um com plano aberto e outro com plano fechado. Comparem e decidam juntos qual combina melhor com a cena escolhida e por quê.`,
      gabarito: `A dupla deve entregar dois clipes da mesma cena, um aberto e um fechado, com prompts que mudam só o enquadramento. A justificativa correta liga o plano à intenção: aberto para mostrar o ambiente, fechado para destacar um detalhe ou personagem. Exemplo: plano aberto para a chegada ao castelo; plano fechado para o olhar do herói.`,
    },
    {
      titulo: `Roda dos movimentos`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza uma roda rápida. Faça perguntas abertas e garanta que cada aluno fale ao menos uma vez. Anote no quadro os movimentos citados.`,
      atividade: `Em roda, cada aluno conta qual movimento de câmera mais combinou com a cena do seu jogo e qual emoção ele queria passar (tensão, calma, descoberta). A turma sugere um ajuste para o colega melhorar o clipe.`,
      gabarito: `Cada aluno deve nomear um movimento (ângulo, zoom, panorâmica ou ritmo) e ligá-lo a uma emoção coerente: aproximação para tensão, panorâmica para descoberta, vista de cima para mostrar o mapa, ritmo lento para calma. As sugestões da turma devem ser concretas, como "deixe a aproximação mais devagar" ou "use plano aberto para mostrar o cenário".`,
    },
    {
      titulo: `Mini roteiro de câmera do meu jogo`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais completo. Peça planejamento antes de gerar: primeiro o aluno escreve, depois envia ao Veo. Lembre de no máximo dois movimentos por clipe e sempre indicar a velocidade.`,
      atividade: `Planeje e gere um clipe da cena principal do seu jogo usando dois movimentos combinados (ex.: panorâmica lenta e depois aproximação no personagem). Escreva o prompt completo, gere no Veo e anote o que você ajustaria na próxima vez.`,
      gabarito: `O aluno deve entregar um prompt válido com cena clara e dois movimentos com velocidade definida, além do clipe gerado e uma reflexão de melhoria. Exemplo de prompt aceito: "uma floresta misteriosa ao entardecer com um arqueiro caminhando, panorâmica lenta da esquerda para a direita e depois câmera aproximando devagar do arqueiro". A reflexão correta cita um ajuste concreto, como reduzir um movimento, deixar mais lento ou trocar o ângulo.`,
    },
  ],
};
