import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Integrar Música, Voz e Arte da IA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Levar para dentro do jogo no Roblox Studio a trilha do Suno, as vozes do ElevenLabs e as imagens do DALL-E e Nano Banana, configurando áudio de fundo, efeitos sonoros e texturas ou interface conectados via Lua e propriedades do Roblox.`,
  descricao: `Nas aulas anteriores o aluno já trouxe o modelo do Maya para o Roblox, montou o cenário, escreveu os primeiros scripts em Lua e criou as mecânicas que dão vida ao jogo. Agora chega a aula que junta tudo o que foi produzido com IA ao longo do ano e transforma um mapa silencioso e cinza num mundo com som, voz e identidade visual. É a aula em que o jogo finalmente "soa" e "parece" o jogo que cada aluno imaginou.

O foco é a integração de mídia. O aluno traz a música feita no Suno para tocar de fundo, os efeitos sonoros e as vozes geradas no ElevenLabs para os momentos certos, e as imagens do DALL-E e do Nano Banana para virarem texturas no cenário ou imagens na interface (UI). No Roblox, todo arquivo de mídia precisa primeiro ser enviado e aprovado: áudios e imagens passam pela janela Asset Manager, recebem um número de identificação (o asset ID) e só então podem ser usados. Entender esse caminho de "enviar, esperar aprovar, pegar o ID e usar" é o coração da aula.

Depois de enviados, cada tipo de mídia tem seu objeto próprio. A música e os efeitos sonoros viram objetos Sound, que tocam por código Lua ou automaticamente. As imagens viram texturas em objetos Decal ou SurfaceGui aplicados nas partes do cenário, ou viram ImageLabel dentro da interface na tela do jogador (ScreenGui). O aluno aprende onde colar o asset ID em cada propriedade e como disparar um som no momento certo com uma linha de Lua, por exemplo quando o jogador encosta numa parte ou aperta um botão.

Ao final, o jogo de cada aluno terá uma música de fundo tocando, pelo menos um efeito sonoro ou uma voz acionada por uma ação, e ao menos uma imagem da IA aplicada como textura ou na interface. Esse acabamento de áudio e arte é o que separa um protótipo de um jogo com cara de pronto, e prepara o terreno para as aulas de caça aos bugs, polimento e publicação que vêm a seguir.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e logado, um por aluno, com o projeto do jogo do mês aberto`,
    `Conta Roblox de cada aluno com permissão para enviar áudio e imagens (upload de assets), confirmada antes da aula`,
    `Projetor ou TV ligado à máquina do professor para mostrar o Asset Manager, as propriedades e cada clique ao vivo`,
    `Arquivos de mídia de cada aluno prontos: música em MP3 do Suno, voz ou efeito em MP3 do ElevenLabs e imagens em PNG do DALL-E e do Nano Banana, salvos numa pasta organizada`,
    `Projeto de exemplo do professor já com som de fundo, um efeito sonoro acionado por toque e uma textura de IA aplicada, para mostrar o resultado pronto`,
    `Folha impressa de "atalhos do dia" com os objetos Sound, Decal, SurfaceGui, ScreenGui e ImageLabel e onde fica a propriedade de ID em cada um`,
    `Lista de asset IDs livres de exemplo do professor, para usar caso o upload de algum aluno ainda esteja em aprovação`,
  ],
  conceitosChave: [
    `Asset ID — o número de identificação que o Roblox dá a cada áudio ou imagem enviada, e que o aluno cola na propriedade para usar a mídia no jogo.`,
    `Asset Manager — a janela do Roblox Studio onde o aluno envia (faz upload) áudios e imagens e acompanha se já foram aprovados.`,
    `Sound — o objeto do Roblox que guarda e toca um áudio; serve tanto para música de fundo quanto para efeitos sonoros e vozes.`,
    `Decal — uma figura colada na face de uma parte do cenário; é uma das formas de transformar uma imagem da IA em textura no mundo do jogo.`,
    `ScreenGui — o recipiente da interface que aparece na tela do jogador, onde entram os ImageLabel com as imagens da IA.`,
    `ImageLabel — o elemento de interface que mostra uma imagem na tela; recebe o asset ID da figura criada no DALL-E ou no Nano Banana.`,
    `Play do som via Lua — usar uma linha de código como NomeDoSom:Play() para tocar um áudio no momento certo, por exemplo ao encostar numa parte.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio, nenhuma mídia entra direto: todo áudio e toda imagem precisam ser enviados e aprovados antes de aparecer no jogo. O caminho é a janela Asset Manager (menu View, botão Asset Manager). Lá o aluno clica com o botão direito em Audio ou Images, escolhe Add Audio ou Add Images, seleciona o arquivo (MP3 para som, PNG para imagem) e envia. O Roblox revisa e dá um número, o asset ID. Áudio pode levar alguns minutos para aprovar; por isso peça que os alunos enviem os arquivos no começo da aula. Tenha sempre asset IDs livres de exemplo para quem ficar esperando.

Depois de aprovado, cada mídia vai para um objeto. Som usa o objeto Sound: clique no sinal de "+" de um objeto no Explorer, insira um Sound, e na janela Properties cole o número no campo SoundId (em alguns casos no formato rbxassetid://NUMERO). Imagem como textura usa Decal (cole o ID em Texture) ou SurfaceGui com ImageLabel. Imagem na interface usa um ScreenGui em StarterGui, com um ImageLabel dentro, colando o ID no campo Image. Antes da aula, refaça todo o caminho no seu projeto de exemplo: envie um som, toque-o por Lua, envie uma imagem e aplique como Decal e como ImageLabel.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: no projetor, abra o jogo sem som e sem arte da IA, depois o de exemplo já integrado. Pergunte: "Qual dos dois parece pronto?" Conduza até "som, voz e imagem". Relembre que eles já criaram tudo isso no Suno, no ElevenLabs, no DALL-E e no Nano Banana, e que hoje essas mídias entram no jogo.

15 min — Conteúdo novo guiado: abra o Asset Manager (View, Asset Manager). Mostre o upload de um MP3 em Audio e de um PNG em Images. Enquanto aprova, insira um objeto Sound em Workspace, cole o SoundId, marque Playing e Looped para a música de fundo. Depois insira um Decal numa parte e cole o asset ID da imagem em Texture. Por fim, em StarterGui, insira um ScreenGui com um ImageLabel e cole o ID no campo Image. Mostre uma linha simples de Lua que toca um som ao tocar numa parte.

25 min — Mão na massa: cada aluno envia pelo Asset Manager a sua música, um efeito ou voz e ao menos uma imagem. Configura a música de fundo num Sound com Playing e Looped ligados, aplica uma imagem como Decal ou ImageLabel e escreve um script Lua que dispara um som num evento, por exemplo no Touched de uma parte. Circule resolvendo IDs colados no campo errado e uploads ainda em aprovação.

10 min — Desafio e compartilhar: desafie cada aluno a acionar uma voz ou um efeito por uma ação do jogador (encostar, pegar um item, apertar um botão). Dois ou três alunos rodam o jogo no projetor (botão Play), mostram o som tocando e a arte aplicada, e contam de qual ferramenta de IA veio cada mídia.

## Como explicar de forma clara (linguagem para a idade)

Compare o asset ID com a placa de um carro: depois que a mídia é enviada e aprovada, ela ganha um número único, e é esse número que o jogo usa para encontrá-la. Diga que enviar o áudio é como mandar uma foto revelar: leva um tempinho até ficar pronta para usar, por isso enviamos cedo. Explique que o objeto Sound é uma caixinha de som invisível: você coloca o número da música nela e ela toca. O Decal é como um adesivo colado numa parede do cenário, e o ImageLabel é como uma figura colada na moldura da tela. A linha NomeDoSom:Play() é o botão de tocar do controle remoto, só que apertado pelo código no momento certo.

## Erros comuns e como ajudar

O erro mais frequente é tentar usar o áudio antes de aprovar; mostre o status no Asset Manager e ofereça um ID de exemplo enquanto espera. Outro é colar o asset ID no campo errado (ID de imagem no SoundId, ou número de áudio no Texture); confira junto qual propriedade pertence a cada objeto. Muitos esquecem de marcar Playing ou Looped e acham que a música "não funciona"; revise essas caixas. No script, é comum errar o nome do som dentro do Play() ou pôr o Sound fora do alcance do script; oriente a usar o caminho certo no Explorer. Por fim, há quem confunda Decal (textura no mundo) com ImageLabel (imagem na tela); reforce a diferença com o exemplo do adesivo e da moldura.`,
  exercicios: [
    {
      titulo: `Enviando minha mídia pelo Asset Manager`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Faça toda a turma enviar no início, porque o áudio demora para aprovar. Acompanhe pelo projetor abrindo o Asset Manager (View, Asset Manager). Confira que cada aluno está enviando MP3 em Audio e PNG em Images, e não o contrário. Tenha IDs de exemplo prontos para quem ainda estiver em aprovação.`,
      atividade: `Abra o Asset Manager pelo menu View. Clique com o botão direito em Audio, escolha Add Audio e envie a sua música do Suno e a sua voz ou efeito do ElevenLabs. Depois clique com o botão direito em Images, escolha Add Images e envie ao menos uma imagem do DALL-E ou do Nano Banana. Anote os asset IDs que aparecerem.`,
      gabarito: `O aluno tem, no Asset Manager, ao menos um áudio (música) e uma imagem enviados, com os respectivos asset IDs anotados. Os MP3 foram para Audio e os PNG para Images. O aluno entende que o áudio pode levar alguns minutos para ser aprovado e sabe consultar o status na própria janela. Caminho correto: View, Asset Manager, botão direito em Audio ou Images, Add Audio ou Add Images.`,
    },
    {
      titulo: `Música de fundo com o objeto Sound`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Verifique se cada aluno inseriu um objeto Sound e colou o número no campo SoundId (e não em outro campo). O erro comum é a música não tocar porque Playing ou Looped estão desmarcados. Mostre essas caixas na janela Properties. Lembre que para música de fundo o ideal é deixar Looped ligado.`,
      atividade: `No Explorer, insira um objeto Sound dentro do Workspace (botão "+"). Na janela Properties, cole o asset ID da sua música no campo SoundId. Marque as caixas Playing e Looped. Rode o jogo no botão Play e confirme que a música toca em loop.`,
      gabarito: `O jogo toca a música do Suno de fundo, em loop, ao apertar Play. O aluno inseriu um objeto Sound, colou o ID no campo SoundId correto e marcou Playing e Looped. Ele entende que SoundId é o campo do número do áudio e que Looped faz a música recomeçar sozinha. Se não tocava, o ajuste foi marcar Playing ou aprovar o áudio.`,
    },
    {
      titulo: `Arte da IA virando textura e interface`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Aqui o aluno aplica imagem de dois jeitos: como Decal no cenário e como ImageLabel na tela. Reforce a diferença entre Decal (adesivo no mundo) e ImageLabel (figura na tela). Cuide para não colarem o ID de imagem num campo de som. Sugira escolher uma imagem que combine com o tema do jogo.`,
      atividade: `Escolha uma parte do cenário, insira um Decal nela e cole o asset ID da sua imagem no campo Texture. Depois, em StarterGui, insira um ScreenGui e, dentro dele, um ImageLabel; cole o asset ID de outra imagem (ou da mesma) no campo Image. Rode o jogo e veja a textura no mundo e a figura na tela.`,
      gabarito: `O aluno aplicou ao menos uma imagem da IA como Decal (campo Texture) numa parte do cenário e ao menos uma como ImageLabel (campo Image) dentro de um ScreenGui em StarterGui. Ao rodar, a textura aparece no mundo e a figura na tela do jogador. O aluno sabe diferenciar Decal de ImageLabel e colou cada ID no campo certo do objeto correto.`,
    },
    {
      titulo: `Acionando som por código em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para escreverem juntas um script que toca um som num evento de toque. O ponto difícil é o caminho do Sound no Explorer e o nome dentro do Play(). Ofereça o modelo de script no projetor. Circule conferindo se o Sound está num lugar que o script alcança e mediando a divisão de tarefas na dupla.`,
      atividade: `Em dupla, escolham uma parte do cenário e coloquem dentro dela um Sound com o efeito ou a voz do ElevenLabs (SoundId preenchido). Adicionem um Script na parte e escrevam um código que toca o som quando o jogador encosta. Modelo de Lua: local parte = script.Parent  local som = parte.Som  parte.Touched:Connect(function(hit)  som:Play()  end). Testem encostando na parte com o boneco.`,
      gabarito: `A dupla tem uma parte com um Sound (efeito ou voz) e um Script que usa Touched:Connect para chamar som:Play() quando o jogador encosta. Ao rodar e tocar na parte, o áudio dispara. Os dois entendem que script.Parent aponta para a parte, que o Sound precisa estar onde o script alcança e que :Play() é o comando que toca o som. Se não tocava, o ajuste foi o nome do Sound no código ou o áudio ainda em aprovação.`,
    },
    {
      titulo: `Meu jogo com som, voz e arte da IA`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Este exercício junta tudo: música de fundo, um som acionado por ação e arte da IA no mundo e na tela. Apoie quem ainda não fechou alguma parte. Ao final, abra uma roda rápida: cada aluno roda o jogo no projetor, mostra a integração e diz de qual ferramenta de IA veio cada mídia. Anote o que ficou pronto para a aula de caça aos bugs.`,
      atividade: `Finalize a integração de mídia do seu jogo: deixe a música do Suno tocando de fundo em loop, faça um efeito ou voz do ElevenLabs ser acionado por uma ação do jogador (encostar, pegar item ou apertar botão) e aplique ao menos uma imagem do DALL-E ou do Nano Banana como textura no cenário ou na interface. Rode o jogo no Play, confira tudo funcionando e mostre para a turma de qual ferramenta veio cada parte.`,
      gabarito: `O jogo do aluno tem, ao mesmo tempo: música de fundo do Suno em loop num Sound com Playing e Looped, um efeito ou voz do ElevenLabs acionado por uma ação do jogador via Lua (:Play() num evento), e ao menos uma imagem da IA aplicada como textura (Decal/SurfaceGui) ou na interface (ImageLabel em ScreenGui). Ao rodar no Play, som e arte funcionam juntos. Na roda, o aluno identifica a origem de cada mídia (Suno, ElevenLabs, DALL-E, Nano Banana). Esse é o jogo com áudio e arte integrados, pronto para a aula de caça aos bugs.`,
    },
  ],
};
