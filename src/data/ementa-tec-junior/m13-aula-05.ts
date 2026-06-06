import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A IA Que Escuta e Imita Poses",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança descobre que a Teachable Machine também aprende com som e com poses do corpo, e a turma explora em grupo gravar sons curtos ou registrar posições, percebendo que treinar com imagem, som e movimento é tudo muito parecido.`,
  descricao: `Nas aulas passadas a turma viu a Teachable Machine aprendendo com imagens: a gente mostrava muitas fotos de cada coisa e a inteligência artificial aprendia a reconhecer. Mas a IA não enxerga só com olhos. Ela também pode ter "ouvidos" e pode ter um "esqueleto" que sente o corpo se mexer. Nesta aula a gente abre dois mundos novos da mesma ferramenta: o modo de áudio (sons) e o modo de poses (movimentos do corpo). É o momento em que as crianças descobrem que a IA é bem mais esperta do que parecia.

No modo de som, a Teachable Machine usa o microfone do computador. Em vez de mostrar fotos, a gente grava sonzinhos curtos: bater palma, falar "oi", assoviar, fazer "psiu". A IA escuta vários exemplos de cada som e aprende a diferença entre eles, do mesmo jeito que aprendeu a diferença entre as fotos. No modo de poses, a ferramenta usa a webcam, mas não para ver a cor das roupas: ela desenha um bonequinho de pontos e linhas em cima do corpo da criança (chamamos de esqueleto) e aprende a reconhecer posições, como braços para cima, mão na cabeça ou agachado.

O coração desta aula é uma descoberta simples e poderosa: treinar é sempre a mesma receita. Não importa se é imagem, som ou pose. A gente sempre cria as caixinhas (as classes), dá muitos exemplos de cada uma, aperta para treinar e depois testa. Muda só o que a IA usa para perceber o mundo: a câmera para imagens e poses, o microfone para sons. Quando a criança entende que a receita se repete, ela ganha confiança para usar qualquer um dos três modos.

Esta é uma aula bem de exploração e mão na massa. A turma vai trabalhar em grupo, conversar e escolher junto qual caminho experimentar primeiro: o som ou a pose. Não é hora de fazer um modelo perfeito nem de salvar nada definitivo; é hora de brincar, gravar, se mexer e perceber as semelhanças. Na próxima aula a turma vai treinar de verdade um modelo de som ou de poses, então hoje o objetivo é abrir a porta e deixar todo mundo espiar os dois mundos novos.`,
  materiais: [
    `Computadores (um por dupla ou pequeno grupo) com a Teachable Machine já aberta no navegador, no endereço teachablemachine.withgoogle.com, e o microfone e a webcam funcionando.`,
    `Projetor ou TV grande para o professor demonstrar onde clicar nos modos de Áudio e de Poses.`,
    `Dois exemplos prontos pelo professor: um projeto de som simples (ex.: "palma" e "silêncio") e um projeto de pose simples (ex.: "braços para cima" e "braços para baixo"), já treinados, para mostrar funcionando.`,
    `Fones de ouvido ou ambiente silencioso para o modo de som, porque o microfone capta o barulho da sala inteira.`,
    `Espaço livre na frente de cada computador para a criança aparecer inteira na webcam ao fazer poses.`,
    `Cartões ilustrados com poses para imitar (braços para cima, mão na cabeça, agachado, estrela) e com sons para fazer (palma, assovio, "oi").`,
    `Cartolina ou lousa com a "receita de treinar" desenhada em 4 passos: caixinhas, exemplos, treinar, testar.`,
  ],
  conceitosChave: [
    `Modo de Áudio (Audio Project) — o jeito da Teachable Machine de aprender com sons, usando o microfone do computador.`,
    `Modo de Poses (Pose Project) — o jeito da Teachable Machine de aprender com posições do corpo, usando a webcam.`,
    `Microfone — o ouvido do computador; é por ele que a IA escuta os sons que a gente grava.`,
    `Esqueleto (pontos e linhas) — o bonequinho de pontinhos que a IA desenha em cima do corpo para perceber como você está se mexendo.`,
    `Classe (caixinha) — cada grupo de exemplos com um nome; pode ser um som ("palma") ou uma pose ("braços para cima").`,
    `Amostra (exemplo) — cada gravação de som ou cada foto da pose que a gente dá para a IA aprender.`,
    `Receita de treinar — os mesmos 4 passos para qualquer modo: criar caixinhas, dar exemplos, treinar e testar.`,
  ],
  treinamento: `## O que o professor precisa saber

A Teachable Machine tem três tipos de projeto na tela inicial: "Image Project" (imagens), "Audio Project" (sons) e "Pose Project" (poses do corpo). Nas aulas anteriores a turma usou o de imagens. Hoje você vai apresentar os outros dois. A boa notícia é que a lógica é idêntica: criar classes (as caixinhas), dar muitos exemplos em cada uma, apertar "Train Model" (Treinar) e ver o resultado na janela "Preview" (Pré-visualização). Você não precisa ser especialista; precisa só conhecer onde ficam os botões de cada modo.

No modo de Áudio há uma diferença importante: toda classe de som precisa começar pela classe "Background Noise" (Barulho de Fundo), que a própria ferramenta já cria. Ela serve para a IA aprender o "silêncio" da sala. Antes de gravar qualquer som, a gente grava alguns segundos de "quase nada". Cada gravação de som tem duração curta. No modo de Poses, a ferramenta usa a webcam e desenha um esqueleto de pontos sobre o corpo; os exemplos são tirados como "fotos" da pose, segurando a posição enquanto aparece a contagem.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Receba a turma e relembre como a IA aprendeu com fotos. Pergunte: "Será que a IA também consegue ouvir? E sentir a gente se mexer?" Faça mistério. Mostre no projetor os dois exemplos prontos funcionando: bata uma palma e veja a barra "palma" subir; levante os braços e veja a pose ser reconhecida. As crianças adoram esse momento.

15 min — Conteúdo novo guiado: No projetor, vá em teachablemachine.withgoogle.com e clique em "Get Started". Mostre os três quadros: Image, Audio e Pose. Abra primeiro o "Audio Project". Aponte a classe "Background Noise" e grave alguns segundos de silêncio com o botão "Mic" e "Record". Crie uma classe nova chamada "palma", grave palmas. Aperte "Train Model". Teste batendo palma. Depois volte e abra um "Pose Project": mostre a webcam desenhando o esqueleto, crie a classe "braços para cima", segure "Hold to Record" para capturar a pose, treine e teste. Vá nomeando cada botão devagar.

25 min — Mão na massa: Em duplas ou pequenos grupos, cada grupo escolhe um caminho para explorar primeiro: som OU pose. Eles abrem o modo escolhido e brincam de criar uma caixinha e dar exemplos. Passe de mesa em mesa. No som, lembre de gravar o "Background Noise" antes. Na pose, ajude a criança a aparecer inteira na webcam. Não precisa ficar perfeito: o objetivo é experimentar e perceber a semelhança com o modo de imagens.

10 min — Desafio e compartilhar: Lance o desafio "ache o que é igual". Cada grupo conta uma coisa que é IGUAL entre treinar com som, pose e imagem (ex.: "sempre precisa de muitos exemplos"). Quem explorou som conta para quem explorou pose como foi, e o contrário também.

## Como explicar para crianças

Use a ideia dos sentidos: "A IA pode ter olhos (câmera), ouvidos (microfone) e pode sentir o corpo se mexer (o esqueleto de pontinhos)." Para o esqueleto, diga que a IA desenha um "bonequinho de palitinho" em cima de você. Repita sempre a "receita de treinar" como uma musiquinha: caixinhas, exemplos, treinar, testar. Compare com ensinar um cachorrinho: a gente repete muitas vezes até ele aprender. Para o som, explique que a IA precisa ouvir o silêncio primeiro para saber o que NÃO é o som que a gente quer.

## Erros comuns e como ajudar

O erro mais comum no som é esquecer de gravar o "Background Noise": sem ele, a IA fica confusa. Sempre confira essa caixinha primeiro. Outro erro é dar pouquíssimos exemplos; incentive gravar várias vezes. Na sala barulhenta, o microfone capta tudo: peça silêncio na hora de gravar ou use fones. Na pose, a criança costuma aparecer só pela metade na webcam; ajude a afastar a cadeira até o corpo aparecer inteiro e o esqueleto desenhar certinho. Alguns grupos querem fazer os dois modos ao mesmo tempo e se perdem; combine "primeiro um, depois o outro". E se a IA errar no teste, comemore: "Ótimo, isso mostra que ela precisa de mais exemplos!"`,
  exercicios: [
    {
      titulo: `Os Três Sentidos da IA`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Com a turma no projetor, mostre rapidinho os três quadros da tela inicial da Teachable Machine: Image, Audio e Pose. Conduza a conversa usando a ideia de sentidos: olhos, ouvidos e o corpo se mexendo. Deixe as crianças adivinharem qual quadro serve para cada sentido antes de você confirmar.`,
      atividade: `Olhe os três quadros na tela: Image (imagem), Audio (som) e Pose (corpo). Responda em voz alta: qual deles usa os "olhos" da IA (a câmera)? Qual usa os "ouvidos" (o microfone)? Qual sente você se mexer (o esqueleto)?`,
      gabarito: `A criança acerta ao ligar Image aos olhos/câmera, Audio aos ouvidos/microfone e Pose ao corpo/movimento (esqueleto). Resposta esperada: Image = olhos (câmera); Audio = ouvidos (microfone); Pose = corpo se mexendo. O professor confirma pela fala correta de cada ligação.`,
    },
    {
      titulo: `Abrindo o Modo de Som`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Demonstre primeiro no projetor: clique em "Get Started", depois em "Audio Project". Mostre a classe "Background Noise" já pronta e explique que é o silêncio. Ajude cada grupo a chegar nessa tela. Lembre que ainda não é hora de gravar muita coisa, só de abrir e reconhecer a caixinha do barulho de fundo.`,
      atividade: `Abra a Teachable Machine, clique em "Get Started" e depois em "Audio Project". Encontre a caixinha chamada "Background Noise" (Barulho de Fundo). Grave alguns segundinhos de silêncio nela usando o botão de gravar. Mostre ao professor que conseguiu.`,
      gabarito: `O grupo acerta quando chega na tela do Audio Project e grava o "Background Noise" com a sala em silêncio. O professor confirma vendo a classe "Background Noise" com uma amostra de som gravada e a tela do modo de áudio aberta.`,
    },
    {
      titulo: `Imita a Pose, Bonequinho!`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `No projetor, abra um "Pose Project" e mostre a webcam desenhando o esqueleto de pontos e linhas sobre o seu corpo. Ajude cada criança a se afastar até aparecer inteira na câmera. Use os cartões de poses. O foco é ver o esqueleto acompanhar o movimento, não treinar ainda.`,
      atividade: `Abra um "Pose Project". Apareça inteiro na webcam e veja o esqueleto de pontinhos desenhado em você. Faça três poses dos cartões (ex.: braços para cima, mão na cabeça, estrela) e observe o bonequinho de palitinho imitar cada movimento seu.`,
      gabarito: `A criança acerta quando aparece inteira na webcam e o esqueleto de pontos acompanha as três poses que ela faz. O professor confirma olhando o bonequinho de pontos se mexer junto com o corpo da criança em cada pose escolhida.`,
    },
    {
      titulo: `Uma Caixinha de Verdade`,
      tipo: `Trabalho em grupo`,
      tempo: `10 min`,
      guiaProfessor: `Agora cada grupo escolhe UM caminho: som ou pose. Eles vão criar uma classe (caixinha) nova, dar um nome e juntar vários exemplos. No som, reforce gravar o "Background Noise" antes. Passe de mesa em mesa garantindo que cada grupo dê MUITOS exemplos, não só um ou dois. Combine "primeiro um modo, depois conversamos".`,
      atividade: `Escolham em grupo: som ou pose. Criem uma caixinha nova (clicando no botão de adicionar classe) e deem um nome (ex.: "palma" ou "braços para cima"). Juntem vários exemplos nessa caixinha: várias gravações do som OU várias capturas da pose. Quanto mais exemplos, melhor!`,
      gabarito: `O grupo acerta quando cria uma classe com nome próprio e adiciona vários exemplos (várias gravações de som ou várias capturas de pose) nela. No modo de som, o "Background Noise" também deve ter exemplos. O professor confirma vendo a caixinha nomeada com muitas amostras dentro.`,
    },
    {
      titulo: `Caça ao Que é Igual`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Feche a aula reunindo a turma. Apresente como desafio final descobrir as semelhanças entre os modos. Use a cartolina da "receita de treinar" (caixinhas, exemplos, treinar, testar) como apoio. Peça que quem explorou som troque ideia com quem explorou pose. Valide cada semelhança citada e celebre a descoberta de que a receita é sempre a mesma.`,
      atividade: `Em grupo, descubram e digam pelo menos DUAS coisas que são IGUAIS entre treinar com imagem, com som e com pose. Pensem na receita: criar caixinhas, dar exemplos, treinar e testar. Contem para um grupo que explorou o outro modo como foi a experiência de vocês.`,
      gabarito: `O grupo acerta quando aponta pelo menos duas semelhanças entre os modos, por exemplo: "sempre tem caixinhas (classes)", "sempre precisa de muitos exemplos", "sempre tem o botão de treinar" ou "sempre dá para testar no final". Qualquer item correto da receita de treinar vale. O professor avalia pela clareza das semelhanças citadas e pela troca entre os grupos.`,
    },
  ],
};
