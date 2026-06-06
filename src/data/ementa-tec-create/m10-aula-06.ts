import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Som no jogo: efeitos e musica",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar efeitos sonoros para pulo, coleta, dano e derrota de inimigos, mais uma musica de fundo em loop, importando audios e disparando sons por eventos no Construct 3.`,
  descricao: `Nesta aula o jogo ganha vida pelos ouvidos. Ate aqui os alunos construiram personagem, score, vidas, telas e inimigos, mas tudo isso acontecia em silencio. Som e a camada que transforma um protótipo bonito em um jogo que parece de verdade: um pulo com "boing", uma moeda com "pling", um dano com "ai" e uma música animada no fundo mudam totalmente a sensação de jogar. O objetivo da aula é ensinar como o Construct 3 trata áudio e como disparar o som certo no momento certo.

No Construct 3, todo o áudio é controlado por um plugin chamado Audio. Ele não aparece sozinho: o professor precisa adicioná-lo ao projeto antes de qualquer som tocar. Os arquivos de áudio ficam na pasta Sounds (efeitos curtos, que podem tocar várias vezes ao mesmo tempo) ou na pasta Music (faixas longas, em streaming, ideais para a música de fundo em loop). Entender essa diferença evita o erro clássico de jogar a música dentro de Sounds e travar o jogo.

A lógica é a mesma que os alunos já dominam: na Event Sheet, quando um evento acontece (o personagem pula, encosta na moeda, leva dano, o inimigo é destruído), adicionamos a ação Audio que toca o som. Eles vão reaproveitar eventos que já existem das aulas anteriores e apenas pendurar uma ação de som em cada um. Isso reforça a ideia de que o áudio é uma reação a algo que já está programado, não um sistema novo e separado.

Por fim, a aula trabalha equilíbrio de volume. Música de fundo muito alta engole os efeitos; efeito muito alto irrita. Os alunos aprendem a usar volume em decibéis (0 é o volume normal, números negativos abaixam o som) para deixar a música discreta e os efeitos nítidos, fechando a aula com um jogo que soa profissional e divertido.`,
  materiais: [
    `Computadores com o Construct 3 aberto, cada aluno com o próprio projeto do jogo 2D em andamento`,
    `Projetor para o professor demonstrar a importação de áudio e a Event Sheet passo a passo`,
    `Pasta com arquivos de áudio de exemplo prontos (pulo.wav, moeda.wav, dano.wav, inimigo.wav) em formato curto`,
    `Arquivo de música de fundo em loop (musica-fundo.ogg ou .m4a) já testado`,
    `Fone de ouvido por aluno (ou caixinhas de som baixas) para não virar bagunça sonora na sala`,
    `Slide ou folha de apoio com a tabela "evento - som" para os alunos preencherem`,
  ],
  conceitosChave: [
    `Plugin Audio — recurso que o Construct 3 precisa para tocar qualquer som; sem ele adicionado ao projeto, nenhum áudio funciona.`,
    `Pasta Sounds — onde ficam os efeitos curtos (pulo, moeda, dano); podem tocar várias vezes ao mesmo tempo sem travar.`,
    `Pasta Music — onde fica a música de fundo longa, que toca em streaming e é própria para loop.`,
    `Ação Play (Audio) — comando que dispara um áudio quando um evento acontece na Event Sheet.`,
    `Loop — quando a música recomeça sozinha ao terminar, tocando sem parar durante o jogo.`,
    `Volume em decibéis (dB) — número que controla a intensidade do som; 0 é o volume cheio e valores negativos (como -10) deixam mais baixo.`,
    `Tag de áudio — apelido dado a um som tocado para depois controlá-lo (por exemplo, parar a música na tela de Game Over).`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, garanta três coisas no seu próprio Construct 3. Primeiro, o projeto precisa do plugin Audio: clique com o botão direito em qualquer espaço vazio do Layout, escolha "Insert new object", procure "Audio" na categoria General e insira. Ele é invisível no layout, mas é o que faz som existir. Segundo, conheça as duas pastas no painel Project (à direita): "Sounds" para efeitos curtos e "Music" para faixas longas. Terceiro, saiba que o Construct converte os áudios sozinho ao importar (aceita .wav, .mp3, .ogg, .m4a). Teste todos os arquivos de exemplo antes para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): com o projetor, abra um jogo conhecido sem som e depois com som, e pergunte qual parece mais divertido. Revise rapidamente a Event Sheet, lembrando que som será uma "reação" a eventos que eles já criaram (pulo, colisão, dano, inimigo destruído).

CONTEÚDO NOVO GUIADO (15 min): demonstre no projetor. 1) Insira o plugin Audio (botão direito no Layout, "Insert new object", "Audio"). 2) Importe os efeitos: clique com o botão direito na pasta "Sounds" no painel Project, escolha "Import sounds", selecione pulo.wav, moeda.wav, dano.wav e inimigo.wav e confirme em "Import". 3) Importe a música: botão direito na pasta "Music", "Import music", escolha musica-fundo. 4) Abra a Event Sheet. No evento "On start of layout" (ou crie um), adicione a ação: clique em "Add action", escolha o objeto Audio, ação "Play", selecione a música, marque "Looping" como "Looping" e Volume 0. 5) No evento do pulo já existente, "Add action", Audio, "Play", som pulo, "Not looping". Mostre como o nome do arquivo aparece na lista.

MÃO NA MASSA (25 min): os alunos repetem nos próprios projetos. Peça que adicionem, nesta ordem: música de fundo em loop; som de pulo; som de moeda no evento de coleta; som de dano quando o personagem é atingido; som no evento em que o inimigo é destruído. Circule pela sala. Quando todos tiverem som, peça que ajustem o volume da música para algo entre -8 e -12 dB para os efeitos ficarem audíveis.

DESAFIO E COMPARTILHAR (10 min): proponha que coloquem uma tag na música (campo "Tag" da ação Play, ex.: "fundo") e parem essa música na tela de Game Over com a ação "Stop" usando a mesma tag. Cada aluno mostra 20 segundos do jogo com som para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de "cada som é uma reação". Diga: "Quando o personagem pula, ele faz um barulho, igual quando você pula numa cama elástica." Explique Sounds e Music assim: "Efeito é tipo um 'tchau' rápido; música é uma rádio que fica tocando o tempo todo." Para decibéis, fale: "Zero é o volume normal; números negativos são o botão de abaixar o som. A música tem que ser baixinha, senão você não escuta a moeda." Evite termos técnicos demais e sempre conecte o som a um evento que eles já entendem.

## Erros comuns e como ajudar

O erro número um é esquecer de inserir o plugin Audio: nada toca e ninguém entende por quê. Cheque isso primeiro em quem está sem som. O segundo é colocar a música dentro de Sounds (fica pesada) ou um efeito dentro de Music (não toca rápido) - confira a pasta. O terceiro é esquecer de marcar "Looping" na música, então ela toca uma vez e silencia. O quarto é deixar a música em volume 0 (cheio) abafando tudo. O quinto é pendurar o som no evento errado, fazendo o "dano" tocar no pulo - peça que leiam a condição do evento antes de adicionar a ação.`,
  exercicios: [
    {
      titulo: `Importando os primeiros sons`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha inserido o plugin Audio antes de começar; passe pela sala confirmando. Reforce a diferença entre as pastas Sounds e Music no painel Project.`,
      atividade: `Insira o plugin Audio no projeto. Depois importe os quatro efeitos (pulo, moeda, dano, inimigo) para a pasta Sounds e a música de fundo para a pasta Music, usando o botão direito e as opções "Import sounds" e "Import music".`,
      gabarito: `O painel Project mostra o objeto Audio inserido, a pasta Sounds com os quatro efeitos e a pasta Music com a faixa de fundo. Nenhum efeito ficou em Music e a música não ficou em Sounds.`,
    },
    {
      titulo: `Som de pulo na hora certa`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que o som deve ser pendurado no evento de pulo que já existe. Peça que leiam a condição do evento antes de adicionar a ação para não errar de evento.`,
      atividade: `Na Event Sheet, localize o evento que faz o personagem pular. Adicione a ação Audio "Play" com o som de pulo, marcando "Not looping". Teste apertando para pular e confirme que o som toca a cada pulo.`,
      gabarito: `Ao pular, o efeito de pulo toca uma vez por pulo. A ação Audio Play está dentro do evento de pulo correto, com o som pulo selecionado e "Not looping".`,
    },
    {
      titulo: `Música de fundo em loop equilibrada`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Verifique se marcaram "Looping" e ajudaram a baixar o volume. Explique que um volume entre -8 e -12 dB deixa os efeitos audíveis sem sumir com a música.`,
      atividade: `Crie (ou use) o evento "On start of layout" e adicione a ação Audio "Play" com a música de fundo, marcando "Looping" e definindo um volume negativo para ela ficar mais baixa que os efeitos. Teste e ajuste o número até ouvir bem a moeda por cima da música.`,
      gabarito: `A música toca sozinha desde o início e recomeça ao terminar (loop). O volume está negativo (por exemplo -10 dB) e os efeitos de pulo e moeda são ouvidos claramente por cima da música.`,
    },
    {
      titulo: `Sons de dano e inimigo derrotado`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `As duplas conferem o trabalho uma da outra. Oriente que cada som vá no evento correto: dano no evento em que o personagem é atingido, e o som de derrota no evento em que o inimigo é destruído.`,
      atividade: `Em dupla, cada um adiciona dois sons no próprio projeto: o som de dano no evento em que o personagem leva dano e o som de inimigo no evento em que o inimigo é destruído. Depois troquem de computador e testem o jogo do colega, conferindo se cada som toca no momento certo.`,
      gabarito: `No teste cruzado, o som de dano toca apenas quando o personagem é atingido e o som de inimigo toca apenas quando um inimigo é destruído. Nenhum som dispara no evento errado e a dupla confirmou o funcionamento em ambos os jogos.`,
    },
    {
      titulo: `Roda de conversa: o som conta uma história`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a roda deixando cada aluno mostrar 20 segundos do jogo com som. Puxe a reflexão sobre como o áudio muda a sensação e sobre o equilíbrio de volume entre música e efeitos.`,
      atividade: `Cada aluno apresenta um trecho curto do jogo com os sons funcionando e responde: qual som ficou mais divertido, qual estava alto ou baixo demais, e o que ainda falta ajustar no volume? A turma sugere uma melhoria de áudio para cada projeto.`,
      gabarito: `Cada aluno demonstra o jogo com pelo menos os sons de pulo, moeda, dano, inimigo e a música em loop, e descreve com clareza pelo menos um ajuste de volume feito ou ainda necessário. A turma registra ao menos uma sugestão de melhoria por projeto, mostrando entendimento de que o som equilibrado deixa o jogo mais vivo e divertido.`,
    },
  ],
};
