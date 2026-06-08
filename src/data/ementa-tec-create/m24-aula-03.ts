import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Texturas e Materiais de Acabamento",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Dar acabamento profissional aos modelos 3D aplicando cores, materiais e texturas no Maya, ajustando brilho e suavização de bordas para combinar com o estilo do jogo.`,
  descricao: `Nesta aula o aluno aprende que um modelo 3D bonito não é só uma forma bem feita: é também a cor, o material e o brilho que aparecem na tela. Até agora, na Aula 2, os alunos modelaram as melhorias do jogo (novos objetos, detalhes e formas). Hoje eles vão "pintar" e dar acabamento nesses modelos para que pareçam de um jogo de verdade, com visual caprichado. A ideia é transformar peças cinzas e sem graça em objetos com identidade visual.

No Maya, a cor e o brilho de um objeto vêm de um material (também chamado de shader). O material é como uma "tinta inteligente": ele decide se a superfície é fosca como madeira, brilhante como metal ou lisa como plástico. O aluno vai criar materiais, escolher cores e ajustar o quanto a superfície reflete a luz. Vamos usar materiais simples e diretos para que a aula caiba em uma hora e o resultado já fique bonito.

Além da cor, o acabamento envolve a suavização de bordas, o famoso smooth. Um cubo com bordas duras parece bruto; ao aplicar a suavização, as faces ficam macias e o objeto parece mais profissional. O aluno também vai conhecer a ideia de textura: em vez de uma cor única, podemos colocar uma imagem na superfície, como uma madeira ou um tijolo. Nesta aula faremos uma textura simples só para entender o conceito, sem complicar.

O foco do mês é Assets Finais para o Demo Day, então tudo o que for feito hoje precisa servir ao jogo do aluno. O professor deve sempre lembrar a turma de combinar as cores com o estilo do jogo: se o jogo é alegre e colorido, use cores vivas; se é sombrio, use tons escuros. No fim, cada aluno terá pelo menos um modelo com material aplicado, brilho ajustado e bordas suaves, pronto para ser exportado na Aula 4.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar os passos no Maya em tela grande`,
    `Arquivo de exemplo .mb ou .ma com os modelos da Aula 2 já abertos (peças simples como cubo, esfera e o objeto do aluno)`,
    `Imagens de textura prontas em uma pasta (madeira.jpg, metal.jpg, tijolo.jpg) para o exercício de textura`,
    `Paleta de cores do jogo impressa ou em slide (3 a 5 cores principais do projeto de cada aluno)`,
    `Fones de ouvido opcionais e mouse com scroll para facilitar a navegação na cena 3D`,
  ],
  conceitosChave: [
    `Material (shader) — a "tinta inteligente" que define cor, brilho e aparência da superfície de um objeto 3D.`,
    `Hypershade — o painel do Maya onde criamos, vemos e organizamos os materiais da cena.`,
    `Lambert — material fosco, sem brilho, bom para madeira, parede e coisas opacas.`,
    `Blinn (ou Phong) — material com brilho e reflexo, bom para metal, plástico e vidro.`,
    `Textura — uma imagem aplicada na superfície do objeto, como colar um papel de parede em 3D.`,
    `Smooth (suavização) — recurso que arredonda as bordas duras do modelo, deixando o objeto mais macio e profissional.`,
    `Specular (brilho) — controle que decide o quanto a luz brilha refletida na superfície do material.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Precisa entender três ideias simples. Primeira: no Maya, a cor de um objeto vem de um material, não de um botão de "pintar". Segunda: existem dois materiais que resolvem quase tudo nesta idade. O Lambert é fosco (madeira, parede); o Blinn é brilhante (metal, plástico). Terceira: o smooth arredonda as bordas. Decore o caminho do clique direito: com o objeto selecionado, clique direito segurando e escolha "Assign New Material". Esse menu é o coração da aula. Antes da aula, abra o Maya, crie um material e mude a cor uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Mostre na tela grande os modelos cinzas da Aula 2. Pergunte: "O que falta para isso parecer de um jogo?" Conduza até a resposta: cor, brilho e bordas suaves. Mostre uma imagem de jogo bonito e uma feia para criar contraste.

15 min, conteúdo novo guiado. No Maya, selecione um objeto. Clique com o botão direito segurando sobre o objeto, escolha "Assign New Material" e clique em "Lambert". Abre o painel Attribute Editor à direita. Clique no quadradinho de cor ao lado de "Color" e escolha uma cor na roda de cores; confirme. O objeto muda de cor. Agora repita com "Blinn" em outro objeto e mostre o controle "Specular Shading" (ou "Specular Roll Off") para aumentar o brilho. Por fim, com um objeto selecionado, vá no menu superior, modo "Modeling", menu "Mesh" e clique em "Smooth"; mostre as bordas ficando macias. Avise que o Smooth aumenta as faces, então usar uma vez basta.

25 min, mão na massa. Cada aluno aplica material em pelo menos dois objetos do próprio jogo: um fosco (Lambert) e um brilhante (Blinn). Devem escolher cores da paleta do jogo. Em seguida, aplicam Smooth no objeto principal. Circule pela sala. Para textura, mostre rápido: no Attribute Editor, clique no ícone de tabuleiro xadrez ao lado de "Color", escolha "File" e aponte a imagem (madeira.jpg). Deixe a textura como bônus para quem terminar antes.

10 min, desafio e compartilhar. Peça que cada aluno gire a câmera (segure Alt e arraste com o botão esquerdo) e mostre o objeto acabado para o colega do lado. Faça uma rodada rápida: cada um diz uma cor que escolheu e por quê combina com o jogo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "O material é a roupa do objeto. O Lambert é uma camiseta de algodão, sem brilho. O Blinn é uma jaqueta de couro, que reflete a luz." Para o smooth: "É como passar a mão numa quina dura até ela ficar arredondada." Para specular: "É o ponto de luz que aparece numa maçã brilhante." Evite a palavra "shader" sem explicar; diga "material" primeiro e depois conte que o nome técnico é shader. Sempre conecte com o jogo do aluno: "Que cor combina com o seu mundo?"

## Erros comuns e como ajudar

O erro mais comum é o aluno tentar mudar a cor sem selecionar o objeto certo: a cor vai para o lugar errado. Ensine a sempre clicar no objeto primeiro e conferir se ele fica branco selecionado. Outro erro é aplicar Smooth várias vezes; o objeto fica pesado e trava. Limite a uma vez. Muitos esquecem de confirmar a cor na roda e fecham a janela sem aplicar; mostre o botão de confirmar. Há quem deixe tudo brilhante demais; lembre que nem tudo é metal. Por fim, se a textura aparecer preta, geralmente o caminho da imagem está errado: reaponte o arquivo no botão "File".`,
  exercicios: [
    {
      titulo: `Primeira pintura: cor com Lambert`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um objeto simples selecionado antes de começar. Reforce o caminho do clique direito segurando até aparecer "Assign New Material".`,
      atividade: `Selecione um objeto do seu jogo. Aplique um material Lambert nele e mude a cor para uma das cores da paleta do seu jogo. Mostre o resultado ao professor.`,
      gabarito: `O objeto deve aparecer colorido na cor escolhida. Caminho correto: botão direito segurando sobre o objeto, "Assign New Material", "Lambert", depois clicar no quadrado ao lado de "Color" no Attribute Editor, escolher a cor na roda e confirmar. Se o objeto continuar cinza, a cor não foi confirmada ou o objeto não estava selecionado.`,
    },
    {
      titulo: `Fosco ou brilhante: Lambert contra Blinn`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que comparem os dois materiais lado a lado. Mostre como aumentar o brilho do Blinn pelo controle "Specular".`,
      atividade: `Crie dois objetos pequenos. Aplique Lambert em um e Blinn no outro, com a mesma cor. Aumente o brilho (Specular) do Blinn. Anote em uma frase qual ficou parecendo metal e qual ficou parecendo madeira ou parede.`,
      gabarito: `O objeto com Blinn deve mostrar um ponto de luz brilhante (parece metal ou plástico); o com Lambert fica fosco e uniforme (parece madeira ou parede). Resposta esperada na frase: "O Blinn ficou parecendo metal porque tem brilho; o Lambert ficou fosco como madeira." Aumentar Specular do Blinn deixa o ponto de luz mais forte.`,
    },
    {
      titulo: `Suavizando as bordas em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno aplica o Smooth, o outro confere o antes e depois girando a câmera. Lembre de aplicar Smooth só uma vez.`,
      atividade: `Em dupla, escolham um objeto com bordas duras (como um cubo). Antes de suavizar, observem as quinas. Apliquem Smooth uma única vez pelo menu "Mesh" e comparem o antes e o depois. Expliquem um ao outro o que mudou.`,
      gabarito: `Depois do Smooth, as bordas duras ficam arredondadas e o objeto parece mais macio e profissional. Caminho: modo "Modeling", menu "Mesh", "Smooth". A dupla deve perceber que o número de faces aumentou e que aplicar muitas vezes deixa o objeto pesado, por isso uma vez basta.`,
    },
    {
      titulo: `Roda de conversa: cor com identidade`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda sem julgar escolhas. Faça perguntas que liguem a cor ao clima do jogo. Anote no quadro as palavras que os alunos usarem (alegre, sombrio, futurista).`,
      atividade: `Em roda, cada aluno mostra um objeto acabado e responde: que cor e material você escolheu e por que isso combina com o estilo do seu jogo? Ouçam os colegas e deem uma sugestão amigável para cada um.`,
      gabarito: `Não há resposta única, mas a justificativa deve ligar a escolha ao estilo do jogo. Exemplos válidos: "Usei azul fosco porque meu jogo é calmo e aquático"; "Usei metal brilhante porque meu jogo é futurista." Respostas fracas a melhorar: "Escolhi porque é bonito", sem ligação com o clima do jogo. O professor reforça a conexão entre cor, material e identidade visual.`,
    },
    {
      titulo: `Mini projeto: objeto com textura pronta para o jogo`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use a pasta de imagens preparada (madeira.jpg, metal.jpg, tijolo.jpg). Mostre o ícone de tabuleiro xadrez ao lado de "Color" e a opção "File". Se a textura aparecer preta, reaponte o arquivo.`,
      atividade: `Escolha o objeto principal do seu jogo. Aplique uma textura de imagem nele usando o botão ao lado de "Color" e a opção "File", apontando uma imagem da pasta. Ajuste o brilho e, se precisar, suavize as bordas. Salve o arquivo com seu nome para usar na Aula 4.`,
      gabarito: `O objeto deve mostrar a imagem da textura na superfície (madeira, metal ou tijolo), com brilho coerente e bordas adequadas ao estilo. Caminho: Attribute Editor, ícone de tabuleiro ao lado de "Color", "File", botão da pasta para apontar a imagem. Arquivo salvo com o nome do aluno. Se a textura ficar preta, o caminho da imagem está errado e deve ser reapontado pelo botão "File".`,
    },
  ],
};
