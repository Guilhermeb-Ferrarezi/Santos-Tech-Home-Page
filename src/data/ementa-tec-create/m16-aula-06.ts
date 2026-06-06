import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dando voz com a IA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar as vozes geradas no ElevenLabs sobre as cenas e equilibrar voz e música com fades e abaixamento da música, deixando tudo audível.`,
  descricao: `Nesta aula o aluno traz para o CapCut as vozes que gerou no ElevenLabs (narração ou falas de personagem) e as encaixa sobre as cenas certas do vídeo. O foco não é só colocar a voz no projeto, mas fazer com que ela seja entendida: a fala precisa ficar acima da música, sem chiado nem cortes bruscos no começo e no fim.

O grande conceito do dia é a mixagem simples de áudio. Quando voz e música tocam ao mesmo tempo no volume cheio, elas brigam e o ouvinte não entende nada. A solução é a técnica do ducking (abaixar a música): nos momentos de fala, a música desce de volume; quando a voz para, a música volta a subir. Isso é feito ajustando o volume da faixa de música e usando palavras-chave (keyframes) para a mudança acontecer de forma suave.

O aluno também aprende a usar o fade de entrada (fade in) e o fade de saída (fade out) na voz, para que ela apareça e suma sem estalo. Tudo isso reaproveita material que ele mesmo criou nas aulas anteriores: a música que veio do Suno e agora a voz que veio do ElevenLabs, montadas dentro do mesmo projeto.

Ao final, o vídeo deve ter três camadas de som convivendo bem: efeitos ou silêncio do vídeo original, a música de fundo abaixada nos diálogos e a voz da IA clara por cima. Esse equilíbrio é o que separa um vídeo amador de um vídeo que parece profissional.`,
  materiais: [
    `Computadores com o CapCut instalado e atualizado (versão para desktop), um por aluno`,
    `Conta do ElevenLabs com as vozes já geradas e os arquivos de áudio baixados (formato MP3)`,
    `Fones de ouvido para cada aluno, para ajustar o volume sem atrapalhar a turma`,
    `Projetor ou TV para o professor mostrar a tela do CapCut passo a passo`,
    `Projeto do CapCut da semana anterior, já com os vídeos da IA e a música do Suno na linha do tempo`,
    `Arquivo de exemplo: uma cena curta de 20 segundos com música, para a turma praticar o ducking`,
    `Roteiro impresso com as falas (quem fala o quê e em qual cena), para guiar o encaixe da voz`,
  ],
  conceitosChave: [
    `Voz da IA — áudio de narração ou fala de personagem gerado no ElevenLabs e baixado como arquivo MP3.`,
    `Faixa de áudio — cada linha separada na linha do tempo onde fica um som; aqui usamos uma para música e outra para a voz.`,
    `Ducking (abaixar a música) — técnica de reduzir o volume da música nos momentos de fala para a voz ficar clara.`,
    `Fade in (entrada suave) — recurso que faz o som começar baixinho e crescer até o volume normal.`,
    `Fade out (saída suave) — recurso que faz o som diminuir aos poucos até o silêncio, sem corte seco.`,
    `Keyframe (palavra-chave) — marca que guarda um valor de volume em um momento exato, permitindo o som mudar de nível ao longo do tempo.`,
    `Mixagem — equilíbrio entre todos os sons do vídeo para que cada um seja ouvido na medida certa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em áudio. O segredo desta aula é uma ideia simples: quando alguém fala, a música tem que baixar. No CapCut, cada som fica em uma faixa própria embaixo do vídeo. Vamos trabalhar com duas faixas de áudio: a música (que já está no projeto desde a aula passada) e a voz da IA (que o aluno traz hoje do ElevenLabs).

Três botões resolvem quase tudo: o controle de Volume (medido em decibéis, dB), o Fade (entrada e saída) e o Keyframe (o losango que marca um valor no tempo). Antes da aula, abra o CapCut e localize esses três no painel da direita quando você clica numa faixa de áudio. Tenha os arquivos de voz já baixados do ElevenLabs em uma pasta fácil de achar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o projeto da semana passada no projetor. Toque uma cena com a música no volume cheio e tente narrar por cima ao vivo. Pergunte: deu para entender? Não. Esse é o problema que vamos resolver hoje. Mostre o roteiro impresso e relembre que a voz veio do ElevenLabs.

Conteúdo novo guiado (15 min): No CapCut, vá em Importar (botão no canto superior esquerdo, ou arraste o MP3 da pasta) e traga a voz para a biblioteca de mídia. Arraste a voz para uma faixa de áudio nova, abaixo da música. Clique na faixa da voz: no painel da direita aparece Volume, Fade e Velocidade. Em Fade, arraste o controle de Entrada para cerca de 0,3 s e o de Saída para cerca de 0,5 s. Agora ensine o ducking: clique na faixa da música, encontre o Volume e abaixe para perto de -18 dB no trecho da fala. Para variar ao longo do tempo, use o Keyframe: posicione a linha do tempo, clique no losango (atalho de adicionar palavra-chave) antes da fala com volume alto, e logo depois crie outro keyframe com volume baixo. A música desce sozinha entre os dois pontos.

Mão na massa (25 min): Cada aluno encaixa a própria voz nas cenas certas, seguindo o roteiro. Depois aplica fade in e fade out na voz e faz o ducking da música em cada fala. Circule pela sala e peça que ouçam de fones. A meta é: voz clara, música presente mas atrás.

Desafio e compartilhar (10 min): Cada aluno toca 15 segundos do trecho com voz para um colega, que dá uma nota de 1 a 5 para a clareza. Feche relembrando que som bom é som equilibrado.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma conversa numa festa: quando alguém importante vai falar, alguém baixa a música para todos ouvirem. A voz é o convidado de honra; a música é o fundo. O ducking é "dar licença" para a voz.

Explique o fade como acender e apagar uma luz com dimmer, em vez de bater o interruptor: o som entra e sai devagar, sem susto. E o keyframe é como marcar dois pontos num gráfico: o CapCut liga os pontos e o volume viaja de um ao outro sozinho.

## Erros comuns e como ajudar

O erro mais comum é colocar a voz na mesma faixa da música, um por cima do outro. Mostre que cada som precisa da sua própria linha. Outro erro é esquecer de abaixar a música: a voz fica abafada. Peça para ouvirem de fones e perguntem "entendi a frase inteira?". Muitos colocam o fade longo demais e a voz some no meio da fala; o fade deve ser curto, menos de 1 segundo. Há quem crie um keyframe só e não entenda por que o volume não muda: lembre que são sempre dois pontos, um alto e um baixo. Por fim, alguns deixam a voz baixa demais por medo de exagerar; o certo é a voz mandar, a música obedecer.`,
  exercicios: [
    {
      titulo: `Encaixando a primeira voz`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno importou o MP3 do ElevenLabs e criou uma faixa de áudio nova, abaixo da música. Verifique se a voz está alinhada ao começo da cena certa do roteiro.`,
      atividade: `Importe sua voz da IA no CapCut e arraste-a para uma faixa de áudio própria, embaixo da música. Posicione a voz no início da cena indicada no roteiro.`,
      gabarito: `A voz aparece em uma faixa separada da música e começa no ponto certo da cena. Resultado esperado: ao tocar, ouve-se música e voz ao mesmo tempo, ainda sem equilíbrio, mas cada uma em sua linha.`,
    },
    {
      titulo: `Entrada e saída suaves`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o painel Fade ao clicar na faixa da voz. Confira que os valores ficaram curtos (entrada perto de 0,3 s e saída perto de 0,5 s) para a voz não sumir no meio da fala.`,
      atividade: `Aplique fade in e fade out na sua faixa de voz. Ajuste a entrada para cerca de 0,3 segundo e a saída para cerca de 0,5 segundo. Ouça e confira que não há estalo no começo nem no fim.`,
      gabarito: `A voz aparece crescendo e some diminuindo, sem corte seco. Valores corretos: entrada por volta de 0,3 s e saída por volta de 0,5 s. A fala continua inteira e compreensível.`,
    },
    {
      titulo: `Abaixando a música na fala`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine o ducking com keyframes. Peça dois keyframes na faixa da música: um com volume cheio antes da fala e outro com volume baixo (perto de -18 dB) durante a fala. Confira que a voz ficou por cima.`,
      atividade: `Na faixa da música, crie um keyframe com volume alto antes da fala e outro com volume baixo durante a fala. Faça a música subir de novo quando a voz terminar. Ouça e ajuste até entender a frase com clareza.`,
      gabarito: `A música baixa durante a fala e volta a subir depois, usando pelo menos dois keyframes. Resultado esperado: a voz fica claramente acima da música em todos os momentos de diálogo.`,
    },
    {
      titulo: `Ouvido crítico em dupla`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno ouve o trecho do colega de fones e aponta um problema (voz baixa, fade longo, música alta) e um acerto. Reforce que a crítica deve ser gentil e específica.`,
      atividade: `Troque de lugar com um colega e ouça o trecho dele com fones. Diga uma coisa que está boa e uma coisa para melhorar no equilíbrio entre voz e música. Depois, cada um corrige seu projeto com base na dica.`,
      gabarito: `Cada aluno recebe um elogio e uma sugestão concreta e aplica pelo menos um ajuste (subir a voz, encurtar o fade ou abaixar mais a música). O trecho fica mais claro depois da correção.`,
    },
    {
      titulo: `Cena falada pronta`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a junção de tudo. Cada aluno entrega uma cena de 15 a 20 segundos com voz encaixada, fades aplicados e música abaixada na fala. Use a roda de conversa final para ouvir dois ou três exemplos no projetor.`,
      atividade: `Monte uma cena completa de 15 a 20 segundos: encaixe a voz no lugar certo, aplique fade in e fade out e faça o ducking da música durante a fala. Salve o projeto e prepare-se para apresentar à turma.`,
      gabarito: `A cena tem voz clara por cima, música presente mas abaixada na fala, e fades suaves na voz. As três camadas (vídeo, música e voz) convivem sem brigar. O aluno consegue explicar onde abaixou a música e por quê.`,
    },
  ],
};
