import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Cortes e ritmo: a base da edição",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Importar os clipes de IA, a música e as vozes para a timeline do CapCut e aprender a cortar, dividir e ordenar as cenas, ajustando o ritmo do vídeo ao compasso da música.`,
  descricao: `Nesta aula, os alunos dão o primeiro passo para transformar vários arquivos soltos em um vídeo de verdade. Eles vão reunir os clipes gerados por IA (no Sora e no Veo), a trilha sonora criada no Suno e as vozes feitas no ElevenLabs, e colocar tudo dentro do CapCut, na linha do tempo (a timeline). É aqui que a edição começa: organizar o material e dar ordem às cenas.

O coração desta aula é o corte. Cortar é decidir onde cada cena começa e onde termina. No CapCut, isso é feito com a ferramenta de dividir (o ícone de tesoura) e com o arrastar das bordas de cada clipe. Quando o aluno corta os pedaços parados ou repetidos, o vídeo fica mais limpo e mais interessante de assistir. Menos é mais: um corte bem feito segura a atenção de quem está vendo.

O segundo conceito é o ritmo. Ritmo é a velocidade com que as cenas trocam. Um vídeo com cenas longas passa calma; um vídeo com cortes rápidos passa energia. Para acertar o ritmo, os alunos vão usar a música como guia: ao ouvir a batida (o compasso), eles cortam as cenas no momento das batidas fortes. Assim, imagem e som andam juntos, e o vídeo ganha vida.

Ao final, cada aluno terá uma sequência inicial montada na timeline, com clipes na ordem certa, cortes feitos e o começo do encaixe entre imagem e música. Não precisa estar perfeito: esta é a base sobre a qual as próximas aulas vão construir efeitos, textos e legendas.`,
  materiais: [
    `Computadores com o CapCut instalado (versão para computador), um por aluno`,
    `Conta no CapCut já criada e com login feito antes da aula`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Pasta com arquivos de exemplo: 4 a 6 clipes de vídeo de IA (Sora/Veo), 1 música do Suno e 1 ou 2 vozes do ElevenLabs`,
    `Fones de ouvido para cada aluno escutar a batida da música sem atrapalhar a turma`,
    `Folha impressa ou slide com o roteiro da ordem das cenas (storyboard simples)`,
  ],
  conceitosChave: [
    `Timeline (linha do tempo) — a faixa na parte de baixo do CapCut onde colocamos os clipes, a música e as vozes em ordem.`,
    `Clipe — cada pedaço de vídeo, áudio ou imagem que importamos para o projeto.`,
    `Cortar/Dividir — separar um clipe em dois no ponto escolhido, usando a tesoura, para tirar o que não serve.`,
    `Ritmo — a velocidade com que as cenas trocam; cortes rápidos dão energia, cenas longas dão calma.`,
    `Compasso (batida) — a pulsação da música que usamos como guia para decidir onde cortar.`,
    `Ordenar — arrastar os clipes para a sequência certa, contando a história na ordem que faz sentido.`,
    `Marcador — uma marca colorida na timeline que indica um ponto importante, como uma batida forte da música.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em CapCut. Esta aula é sobre três ações simples: importar, cortar e ordenar. O CapCut tem uma área central chamada timeline (a linha do tempo, embaixo da tela), onde tudo acontece. Acima dela fica o player (a janela de pré-visualização), onde vemos o vídeo tocar. À esquerda fica o painel de mídia, onde ficam os arquivos importados. Os botões principais para esta aula são: o ícone de "+" ou "Importar" (para trazer arquivos), o ícone de tesoura (para dividir um clipe) e a barra vertical branca chamada playhead (o cursor que marca onde estamos no tempo). O atalho mais útil é a tecla "Espaço" para tocar e pausar.

## Passo a passo da aula

Aquecimento (10 min): Pergunte à turma qual o vídeo favorito deles e por que prende a atenção. Conduza a ideia de que "cortes" e "velocidade" fazem diferença. Mostre dois exemplos curtos: um com cortes rápidos e um com cena parada e longa. Pergunte qual é mais legal de assistir.

Conteúdo novo guiado (15 min): No projetor, abra o CapCut e clique em "Criar projeto" (New Project). Clique em "Importar" (ou no botão "+") e selecione os clipes de IA, a música do Suno e as vozes do ElevenLabs. Arraste cada arquivo do painel de mídia para a timeline: vídeos na faixa de cima, música e voz nas faixas de áudio de baixo. Posicione o playhead onde quer cortar e clique na tesoura (ou aperte "Ctrl + B") para dividir. Mostre como apagar o pedaço ruim clicando nele e apertando "Delete". Toque a música e bata palma junto na batida: esse é o compasso que vai guiar os cortes.

Mão na massa (25 min): Cada aluno importa os arquivos de exemplo, arrasta para a timeline e organiza os clipes na ordem do roteiro. Em seguida, corta os trechos parados e ajusta o tamanho de cada cena. Peça que coloquem a música embaixo e tentem fazer pelo menos três cortes caírem em batidas fortes. Circule pela sala ajudando individualmente.

Desafio + compartilhar (10 min): Cada aluno toca sua sequência para o colega do lado e diz uma coisa que mudaria. Dois ou três voluntários mostram no projetor.

## Como explicar de forma clara

Use comparações que adolescentes entendem. Diga que a timeline é como uma "fila" onde as cenas esperam a vez de aparecer. Cortar é como "tesoura no papel": você separa e joga fora o pedaço que não quer. Ritmo é como dançar: quando a música acelera, as cenas trocam mais rápido. Mostre antes de mandar fazer, e fale devagar os nomes dos botões enquanto aponta na tela. Evite termos técnicos demais; prefira "janela de cima" em vez de "viewport". Repita o atalho da tesoura ("Ctrl + B") várias vezes para fixar.

## Erros comuns e como ajudar

O erro mais comum é arrastar o vídeo para a faixa de áudio (ou o contrário): mostre que vídeo vai na faixa de cima e som nas de baixo. Outro erro é cortar no lugar errado por não olhar o playhead; ensine a aproximar o zoom da timeline (com o controle deslizante no canto) para acertar o ponto. Muitos esquecem de pausar e ficam cortando com o vídeo rodando; lembre-os de apertar "Espaço" para parar antes. Alguns apagam o clipe inteiro sem querer; mostre o "Ctrl + Z" para desfazer. Por fim, há quem queira cortar tudo de uma vez e perde o ritmo; oriente a fazer um corte por vez, sempre ouvindo a batida da música.`,
  exercicios: [
    {
      titulo: `Importar e montar a fila`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre a pasta de exemplos e use o botão "Importar". Verifique se vídeo foi para a faixa de cima e áudio para as de baixo.`,
      atividade: `Crie um projeto novo no CapCut, importe os clipes de IA, a música e a voz, e arraste tudo para a timeline na ordem do roteiro entregue.`,
      gabarito: `O aluno tem um projeto aberto com todos os clipes na faixa de vídeo (em ordem) e a música e a voz nas faixas de áudio. Nada está na faixa errada e a sequência segue o roteiro.`,
    },
    {
      titulo: `Tesoura certeira`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como posicionar o playhead e usar a tesoura ou "Ctrl + B". Confira se os alunos pausam antes de cortar.`,
      atividade: `Em cada clipe, corte e apague o trecho parado ou repetido do começo e do fim, deixando só a parte boa de cada cena.`,
      gabarito: `Cada clipe ficou mais curto, sem os pedaços parados. Os cortes estão limpos e o vídeo flui sem trechos vazios entre as cenas.`,
    },
    {
      titulo: `Cortar na batida`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive o uso de fones para ouvir o compasso. Ensine a marcar a batida com a tecla "M" (marcador) e cortar sobre a marca.`,
      atividade: `Ouça a música, marque três batidas fortes na timeline e faça uma troca de cena cair exatamente em cada uma dessas batidas.`,
      gabarito: `Existem três marcadores na timeline e, em cada um, há uma troca de cena. Ao tocar, a imagem muda junto com a batida da música.`,
    },
    {
      titulo: `Edição em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um assista à sequência do colega e aponte um ponto forte e uma melhoria, sem julgar a pessoa.`,
      atividade: `Troque de lugar com o colega, assista à sequência dele e sugira um corte que deixaria o ritmo melhor. Depois apliquem juntos.`,
      gabarito: `A dupla aplicou pelo menos uma mudança de corte combinada entre os dois, e o aluno consegue explicar por que essa mudança melhorou o ritmo.`,
    },
    {
      titulo: `Roda de conversa: o que faz um corte bom`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma e conduza com perguntas abertas. Anote no quadro as ideias que surgirem para retomar nas próximas aulas.`,
      atividade: `Em roda, cada aluno diz uma regra que aprendeu hoje sobre cortes e ritmo (por exemplo, cortar no silêncio ou trocar a cena na batida).`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: cortar partes paradas, trocar a cena na batida, não deixar cena longa demais e manter a história na ordem certa.`,
    },
  ],
};
