import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Botão Mágico de Publicar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança vai entender o que significa publicar um jogo, encontrar o menu de publicação no Roblox Studio, dar um nome para o seu jogo e escolher um ícone bonito para ele.`,
  descricao: `Esta é a aula em que o jogo das crianças começa a deixar de ser um segredo guardado dentro do computador e se prepara para virar um jogo de verdade, que outras pessoas vão poder jogar. Publicar significa enviar o jogo para a internet, para a "nuvem" do Roblox, onde ele ganha um endereço próprio. Para uma criança pequena, é como tirar um desenho da gaveta e colá-lo na parede da sala para todo mundo ver. É um momento muito emocionante e cheio de orgulho.

Nesta aula, o foco não é mexer no mundo do jogo nem construir mais nada. O foco é descobrir o "Botão Mágico de Publicar". As crianças, guiadas pelo professor, vão abrir o menu certo no Roblox Studio, escrever um nome legal para o seu jogo e escolher uma imagem bonita que vai ser a capinha (o ícone) do jogo. O nome e o ícone são como o nome e a foto de um bichinho de estimação: é assim que as pessoas vão reconhecer e querer brincar com aquele jogo.

Por que isso importa? Porque dar nome e cara para o jogo faz a criança sentir que aquilo é REALMENTE dela. É o primeiro passo concreto rumo ao Demo Day, quando a família vai poder ver o jogo no ar. Também é um treino gentil de leitura, escrita e escolha: a criança pensa "como quero que meu jogo se chame?" e "qual imagem mostra do que meu jogo se trata?".

Importante: nesta aula nós preparamos e abrimos o caminho da publicação (nome e ícone). O ato de apertar o publicar de fato e ver o jogo realmente no ar acontece na próxima aula, "Meu Jogo no Ar!". Aqui a gente deixa tudo lindo e pronto, como quem embrulha um presente antes de entregar.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o projeto do jogo de cada criança já carregado (um por criança ou em duplas).`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo ao vivo.`,
    `Login do Roblox de cada criança (ou contas da escola) já conectado no Studio antes da aula começar.`,
    `Algumas imagens de ícone prontas (arquivos PNG ou JPG quadrados, simples e coloridos) salvas numa pasta, para quem não tiver uma imagem própria.`,
    `Internet funcionando e estável, pois publicar e enviar o ícone precisam de conexão.`,
    `Folhas de papel e lápis de cor para o exercício de desenhar o ícone e escrever o nome do jogo.`,
    `Uma "plaquinha de nome" impressa de exemplo (como crachá) para mostrar a ideia de nome do jogo.`,
  ],
  conceitosChave: [
    `Publicar — mandar o meu jogo para a internet, para que outras pessoas também possam brincar nele.`,
    `Nuvem — um lugar mágico na internet onde o jogo fica guardado e seguro, longe de só ficar no meu computador.`,
    `Nome do jogo — o apelido especial do meu jogo, igual ao nome de um bichinho de estimação.`,
    `Ícone — a capinha, a fotinho bonita do meu jogo que aparece para as pessoas escolherem brincar.`,
    `Menu de publicação — a porta secreta dentro do Roblox Studio que leva o jogo para a internet.`,
    `Configuração — o lugar onde a gente escreve o nome e coloca a foto do jogo antes de mandar para fora.`,
    `Rascunho — quando o jogo ainda está só no meu computador, antes de virar de verdade lá na internet.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Publicar um jogo no Roblox significa enviar o arquivo do jogo (chamado "place" ou "experiência") dos servidores do Roblox, para que ele ganhe um endereço e possa, mais tarde, ser jogado por outras pessoas. Nesta aula você NÃO vai tornar o jogo público ainda; vai apenas criar a experiência na conta e configurar o nome e o ícone. O botão real de "tornar público" e a verificação de que o jogo está no ar ficam para a Aula 6.

No Roblox Studio, o caminho principal é o menu superior. Clique em "File" (Arquivo) e depois em "Publish to Roblox" (Publicar no Roblox). Na primeira vez, abre uma janela onde você digita o nome do jogo no campo "Name" e uma descrição no campo "Description"; clique em "Create" (Criar). Pronto: a experiência foi criada na conta, ainda como rascunho privado. Para escolher o ícone, vá em "File" e depois "Game Settings" (Configurações do Jogo), ou no painel "Asset Manager", e procure a área de ícone ("Game Icon" / "Thumbnails"), onde há um botão de adicionar imagem que abre o navegador de arquivos do computador. A imagem ideal é quadrada (por exemplo 512 por 512 pixels), simples e colorida.

Dica de preparação: faça login com a conta de cada criança antes da aula e deixe o projeto aberto. Tenha imagens de ícone de reserva na pasta combinada, pois nem toda criança terá uma imagem pronta.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: pergunte "o que vocês acham que é publicar um jogo?". Mostre a analogia do desenho que sai da gaveta e vai para a parede. Relembre que o jogo deles já está quase pronto das aulas anteriores.

15 min — Conteúdo novo guiado: no projetor, mostre o seu Roblox Studio. Clique devagar em "File" e aponte "Publish to Roblox". Mostre a janela, o campo "Name" e o campo "Description". Não aperte ainda; explique que isso é o "Botão Mágico". Depois mostre "File" e "Game Settings", apontando onde fica o ícone.

25 min — Mão na massa: cada criança, no seu computador, abre "File" e "Publish to Roblox", digita o nome do jogo (ajude na escrita) e clica em "Create". Em seguida, vá em "Game Settings" e escolha um ícone, usando uma imagem da pasta ou uma que a criança trouxe. Circule pela sala ajudando um a um.

10 min — Desafio + compartilhar: cada criança mostra para a turma o nome e o ícone que escolheu e diz por que escolheu aquele nome.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use comparações do mundo delas. "Publicar" é como pendurar o desenho na parede para todos verem. A "nuvem" é uma caixa mágica na internet que guarda o jogo. O "nome do jogo" é o apelido, igual ao nome do bichinho de estimação ou do brinquedo favorito. O "ícone" é a capinha, a fotinho do jogo, como a capa colorida de um livro de histórias que faz a gente querer abrir. Fale sempre devagar, mostrando no projetor e repetindo "olha onde eu cliquei".

## Erros comuns e como ajudar

As crianças costumam clicar rápido demais e fechar a janela sem querer; peça para clicarem só quando você disser "agora". Muitas tentam apertar tudo e podem publicar como público antes da hora; reforce que hoje só damos nome e cara, e o "jogar de verdade" é na próxima aula. Outras escolhem imagens muito escuras ou confusas para o ícone; oriente a escolher imagens coloridas e simples. Na escrita do nome, ajude letra por letra e aceite nomes curtos e divertidos.`,
  exercicios: [
    {
      titulo: `Achando a Porta Secreta`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que todo jogo tem uma "porta secreta" que leva ele para a internet. Demonstre uma vez no projetor, clicando em "File" e mostrando "Publish to Roblox", e depois peça que cada criança faça o mesmo no seu computador, sem ainda apertar nada de mais.`,
      atividade: `No seu Roblox Studio, clique no menu "File" lá em cima e encontre a opção "Publish to Roblox". Quando achar, levante a mão e mostre para o professor onde ela fica. Não aperte nada ainda, só encontre a porta secreta!`,
      gabarito: `A criança acerta quando clica em "File" e aponta corretamente a opção "Publish to Roblox" no menu, sem ter publicado ainda. O professor confirma vendo o menu aberto na tela da criança com a opção destacada.`,
    },
    {
      titulo: `O Jogo da Nuvem e da Gaveta`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Explique que quando o jogo está só no computador ele está "na gaveta" (rascunho) e quando ele vai para a internet ele está "na nuvem" (publicado). Diga frases e as crianças apontam para cima (nuvem) ou para baixo (gaveta). Faça em pé, com energia.`,
      atividade: `Quando o professor disser uma frase, mostre com as mãos: braços para cima se for NUVEM (jogo na internet, todo mundo pode brincar) e mãos para baixo se for GAVETA (jogo só no meu computador). Exemplos: "Meu jogo só está no meu computador" / "Meu jogo está na internet para os amigos jogarem".`,
      gabarito: `Acertou quem aponta para cima nas frases de jogo publicado/internet e para baixo nas frases de jogo só no computador. Espera-se: "só no meu computador" = gaveta (baixo); "na internet para os amigos" = nuvem (cima).`,
    },
    {
      titulo: `Que Nome Daremos?`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte a cada criança que nome ela quer dar ao seu jogo e por quê. Mostre a plaquinha de nome de exemplo. Estimule nomes que combinem com o jogo (por exemplo, se tem muita corrida, pode ter "corrida" no nome). Anote os nomes para ajudar depois na escrita dentro do Studio.`,
      atividade: `Na roda, cada um responde: "Qual vai ser o nome do meu jogo?" e "Por que escolhi esse nome?". Escute o nome dos colegas e bata palma para cada ideia. Pode escolher um nome curto e divertido!`,
      gabarito: `Cada criança diz em voz alta um nome para o seu jogo e uma razão simples (por exemplo "porque meu jogo tem muito pulo, vai se chamar Pula-Pula"). Acertou quem consegue dizer um nome e justificar de qualquer forma, mesmo bem simples.`,
    },
    {
      titulo: `Desenhando a Capinha do Jogo`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue folha e lápis de cor. Explique que o ícone é a capinha do jogo, a primeira coisa que as pessoas veem. Peça para desenharem dentro de um quadrado, com cores fortes e poucos detalhes, algo que mostre do que o jogo se trata. Use os desenhos depois como inspiração para escolher o ícone no Studio.`,
      atividade: `Desenhe a capinha do seu jogo dentro do quadrado da folha. Use cores bem fortes e coloque o nome do jogo embaixo do desenho. Pense: se alguém olhar essa capinha, vai entender do que é o meu jogo?`,
      gabarito: `Acertou quem entrega um desenho dentro do quadrado, colorido, com o nome do jogo escrito embaixo, e que tenha alguma ligação com o tema do jogo. O professor valida conversando: "o que essa capinha mostra do seu jogo?".`,
    },
    {
      titulo: `Nome e Ícone de Verdade no Studio`,
      tipo: `desafio`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o desafio principal e mais difícil. Guie cada criança a abrir "File", depois "Publish to Roblox", digitar o nome no campo "Name" e clicar em "Create". Em seguida, leve em "File" e "Game Settings" para adicionar o ícone, escolhendo uma imagem da pasta ou a que a criança trouxe. Ajude na escrita e nos cliques, um aluno de cada vez. Reforce que NÃO vamos tornar público ainda.`,
      atividade: `Agora é pra valer! Abra "File" e "Publish to Roblox", escreva o nome do seu jogo no campo "Name" e clique em "Create". Depois vá em "File" e "Game Settings" e coloque uma capinha (ícone) bonita para o seu jogo. Chame o professor quando terminar cada passo.`,
      gabarito: `Acertou a criança cujo jogo já tem um nome digitado e salvo (a experiência foi criada com "Create") e um ícone escolhido em "Game Settings". O professor confirma vendo, na tela, o nome do jogo na janela de publicação e a imagem do ícone aparecendo nas configurações.`,
    },
  ],
};
