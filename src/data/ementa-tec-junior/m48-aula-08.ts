import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Demo Day e ponte para o CREATE",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno apresenta no Demo Day final o seu jogo Lua publicado no Roblox e o portfólio, jogando ao vivo e contando a sua jornada, e descobre o que vem na ponte para o CREATE.`,
  descricao: `Hoje é o último dia da trilha Júnior inteira, e ele tem nome de festa: Demo Day! Depois de quatro anos aprendendo a criar games, e de um mês final dedicado a consertar bugs em Lua, publicar o jogo no Roblox e montar o portfólio, cada criança vai subir ao palco para mostrar o seu jogo no ar e contar a história de como chegou até aqui. Não é uma aula comum de técnica: é a grande celebração de quem virou, de verdade, uma criadora ou um criador de jogos.

O Demo Day final é especial porque a criança não apresenta só um botão que funciona. Ela apresenta uma jornada: a IA que treinou no ML for Kids, os itens 3D que fez no MagicaVoxel, no Blender e no Maya, a peça que imprimiu em 3D de verdade e, no centro de tudo, o jogo com código de texto em Lua que ela mesma escreveu, corrigiu e colocou no ar. Apresentar essa jornada para a turma e para os convidados transforma quatro anos de esforço em uma memória de orgulho.

Nesta aula a sala vira um pequeno palco com projetor. A turma faz um aquecimento rápido, relembra a frase de apresentação que ensaiou na aula passada e, um por um, cada aluno abre o seu jogo publicado, joga ao vivo na frente de todos e mostra o portfólio. O professor conduz como mestre de cerimônia: chama pelo nome, ajuda a abrir o jogo, faz perguntas simples e puxa as palmas.

No final, depois das apresentações e da celebração de encerramento da trilha Júnior, o professor abre a janela do futuro: a ponte para o CREATE. As crianças descobrem, com um gostinho de continuação, o que vem pela frente na próxima etapa, para saírem daqui com a vontade de voltar e continuar criando.`,
  materiais: [
    `Computadores com o Roblox e o Roblox Studio abertos, e a página do jogo publicado de cada aluno salva nos Favoritos ou com o link pronto para abrir rápido`,
    `Projetor ou TV grande ligada em um computador, para o jogo e o portfólio de cada criança aparecerem para toda a plateia`,
    `Lista com o nome de cada aluno, o nome do jogo dele e a ordem de apresentação, impressa para o professor`,
    `Portfólios prontos (da Aula 6): a pasta ou slide de cada aluno com a IA, os itens 3D, a peça impressa e o jogo Lua`,
    `Um jogo de exemplo já publicado e um portfólio modelo, para o professor demonstrar a apresentação antes das crianças`,
    `Microfone de brinquedo ou um objeto para a criança segurar na vez de falar, e cadeiras formando a plateia dos convidados`,
    `Certificados de conclusão da trilha Júnior impressos, balões, um lanchinho e um celular ou câmera para registrar a foto da turma`,
  ],
  conceitosChave: [
    `Demo Day — o dia especial em que a gente mostra o jogo pronto e o portfólio para a turma e os convidados verem e jogarem.`,
    `Apresentar ao vivo — clicar em Jogar na frente de todos e mostrar o jogo funcionando de verdade, na hora, sem ser um vídeo gravado.`,
    `Jornada — a história de tudo o que você aprendeu e fez ao longo do caminho, do primeiro passo até o jogo publicado.`,
    `Portfólio — a coleção dos seus melhores trabalhos junta num lugar só: a IA, os itens 3D, a peça impressa e o jogo Lua.`,
    `Jogo publicado — o jogo que já está no ar na internet do Roblox, e qualquer pessoa pode entrar e jogar pelo link.`,
    `Celebrar — comemorar junto, com palmas e alegria, a conquista de cada um e o fim da trilha Júnior inteira.`,
    `Ponte para o CREATE — o caminho que liga o que você aprendeu agora ao que vem na próxima etapa, onde você vai criar coisas ainda maiores.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a última aula da trilha Júnior, e é uma festa de encerramento. Tecnicamente ela é simples: nenhum código novo de Lua será escrito hoje. O que você precisa garantir é que o jogo de cada criança abra rápido e sem susto na frente dos convidados. Antes da aula, abra você mesmo o Roblox em cada computador, entre na conta do aluno (ou na conta da escola onde os jogos foram publicados) e teste o botão verde Jogar (Play) de cada jogo. Deixe a página de cada jogo salva nos Favoritos e o portfólio de cada um aberto numa aba, para não perder tempo procurando na hora.

Lembre-se de como o jogo chegou até aqui. Nas aulas anteriores a criança usou o Roblox Studio, corrigiu os bugs do código Lua dentro do painel Script, e depois clicou em File e em Publish to Roblox para colocar o jogo no ar. Hoje a gente não publica de novo: a gente apenas joga o que já está publicado e mostra o portfólio. Se um jogo não abrir, tenha um plano B simples: mostre o jogo dentro do próprio Roblox Studio apertando o botão Play azul do menu de cima. Funciona igual para a plateia e evita frustração.

Sua função principal hoje é de apresentador e mestre de cerimônia. No fim, você também apresenta a ponte para o CREATE: explique, com um gostinho de continuação, que a próxima etapa vai pegar tudo isto (IA, 3D, impressão e código Lua) e levar para projetos ainda maiores. Não precisa detalhar; basta plantar a vontade de voltar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e boas-vindas: receba as crianças e os convidados. Mostre a sala montada como palco, com o projetor ligado. Faça a turma respirar fundo junto e diga a frase do dia: hoje cada um é um criador de games. Leia a lista com a ordem das apresentações para todos saberem a sua vez.

15 min — Conteúdo guiado (o ensaio final): você faz uma apresentação de exemplo. No projetor, abra o Roblox, clique no jogo de exemplo, aperte o botão verde Jogar (Play) e jogue dez segundos. Depois mostre o portfólio modelo dizendo: aqui está a minha IA, aqui meus itens 3D, aqui minha peça impressa e aqui meu jogo em Lua. Peça que cada criança repasse na cabeça a frase que ensaiou na Aula 7.

25 min — Mão na massa (as apresentações): chame uma criança por vez pelo nome. Ajude-a a sentar no computador ligado ao projetor, abrir a página do jogo no Roblox e clicar no botão verde Jogar (Play). Deixe a criança jogar ao vivo, contar a sua jornada em uma ou duas frases e mostrar o portfólio. Puxe as palmas no fim de cada uma e mantenha o ritmo para todos terem a vez.

10 min — Desafio e compartilhar (celebração e ponte): reúna a turma na frente da plateia. Entregue o certificado de conclusão da trilha Júnior a cada um com um toca aqui. Então mostre no projetor a janela do CREATE: conte que a aventura continua e o que vem por aí. Tire a foto da turma toda junta segurando os certificados e feche com uma palma grande.

## Como explicar para crianças

Use a ideia de grande final de show de talentos: durante quatro anos vocês treinaram a mágica, e hoje sobem ao palco para mostrá-la. O projetor é a tela gigante do cinema, e o jogo de vocês vai aparecer lá para todos verem. O botão verde Jogar (Play) é o botão de ligar a aventura ao vivo. O portfólio é a mochila de tesouros: a IA, os bonecos 3D, a peça que saiu da impressora e o jogo de código. A plateia são os fãs, que batem palmas porque gostaram. E a ponte para o CREATE é a porta que abre para a próxima aventura. Fale devagar, sorria muito e mostre na tela em vez de só explicar com palavras.

## Erros comuns e como ajudar

A criança trava de vergonha na hora de falar: fique ao lado, faça uma pergunta para ela responder só uma palavra e nunca force; uma frase curtinha já basta. O jogo não abre na hora: use o plano B e abra pelo botão Play azul do Roblox Studio, sem dramatizar. A criança clica em tudo e fecha o jogo sem querer: aponte com o dedo o botão verde Jogar (Play) e deixe ela clicar sozinha. Uma criança quer jogar o tempo todo e não passa a vez: combine antes que cada estrela tem o seu tempo e use um cronômetro visível. Convidados quietos: você puxa as palmas primeiro, e todos seguem.`,
  exercicios: [
    {
      titulo: `Abrir o meu jogo publicado no projetor`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre primeiro no seu computador: abra o Roblox, encontre a página do jogo nos Favoritos e aponte o botão verde Jogar (Play). Depois deixe a criança repetir os mesmos passos no computador ligado ao projetor, guiando com o dedo na tela. Se o jogo não abrir, use o botão Play azul do Roblox Studio.`,
      atividade: `Na sua vez, cada criança abre o Roblox, encontra a página do seu jogo já publicado e clica no botão verde Jogar (Play) para o jogo aparecer no projetor para todos.`,
      gabarito: `Acertou quando o jogo da criança abre na tela do projetor depois de ela clicar no botão verde Jogar (Play). Se não abrir, o professor usa o botão Play azul do Roblox Studio e o resultado vale igual.`,
    },
    {
      titulo: `A minha frase de jornada`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda e dê o exemplo: meu jogo se chama tal, treinei uma IA, fiz itens 3D e escrevi o código em Lua. Passe o microfone de brinquedo de mão em mão; quem segura é quem fala. Relembre a frase ensaiada na Aula 7 e elogie cada uma.`,
      atividade: `Cada criança segura o microfone e diz três coisas sobre a sua jornada: o nome do jogo, uma coisa que ela criou no ano (a IA, um item 3D, a peça impressa ou o código Lua) e a parte de que mais gosta no jogo.`,
      gabarito: `Acertou quando a criança fala o nome do jogo e cita pelo menos uma coisa que ela criou na trilha e uma parte favorita. Uma frase curtinha já conta; o importante é ela contar a sua jornada na vez dela.`,
    },
    {
      titulo: `Caça aos tesouros do portfólio`,
      tipo: `jogo`,
      tempo: `7 min`,
      guiaProfessor: `Transforme em brincadeira de apontar rápido usando o portfólio aberto no projetor. Você fala o nome de um tesouro e a turma aponta na tela onde ele está. Use o portfólio modelo para todos verem o mesmo lugar.`,
      atividade: `O professor grita um tesouro do portfólio (a IA do ML for Kids, um item 3D do MagicaVoxel ou do Blender, a peça impressa em 3D, o jogo em Lua) e as crianças apontam o mais rápido que conseguirem no projetor. Quem aponta certo ganha uma palma.`,
      gabarito: `Acertou quando a criança aponta corretamente o tesouro pedido dentro do portfólio e sabe diferenciar a IA, os itens 3D, a peça impressa e o jogo Lua. Saber onde está cada parte mostra que ela entende o próprio portfólio.`,
    },
    {
      titulo: `O meu desenho da ponte para o CREATE`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue papel e lápis de cor. Conte rapidinho que a próxima etapa é o CREATE, onde eles vão criar coisas ainda maiores. Peça que desenhem o que gostariam de criar a seguir. Circule pela sala perguntando sobre cada desenho.`,
      atividade: `Cada criança desenha numa folha o jogo, o item 3D ou a invenção que ela mais gostaria de criar na próxima etapa, o CREATE. Depois mostra o desenho para o colega do lado e conta a ideia.`,
      gabarito: `Acertou quando a criança termina um desenho e consegue contar, em uma frase, o que ela quer criar no CREATE. Qualquer desenho com uma explicação simples está correto; não existe desenho errado aqui.`,
    },
    {
      titulo: `A grande apresentação do Demo Day`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o ponto alto da trilha. Chame cada criança pelo nome como um apresentador de festa. Fique ao lado para ajudar a abrir o jogo e segurar o microfone, mas deixe a criança ser a estrela: ela joga ao vivo, conta a jornada e mostra o portfólio. Puxe as palmas no fim de cada uma. No encerramento, entregue o certificado e apresente no projetor a ponte para o CREATE.`,
      atividade: `Na frente da turma e dos convidados, cada criança abre o seu jogo publicado no projetor, joga ao vivo um pouquinho, conta a sua jornada em uma ou duas frases, mostra o portfólio e recebe palmas. No fim, todos recebem o certificado da trilha Júnior, conhecem a ponte para o CREATE e tiram a foto da turma.`,
      gabarito: `Acertou quando a criança apresenta o seu jogo aberto e jogando na tela, conta a sua jornada, mostra o portfólio e recebe o certificado. O sucesso é todo aluno ter a sua vez no palco, sair com o certificado na mão e saber que a aventura continua no CREATE.`,
    },
  ],
};
