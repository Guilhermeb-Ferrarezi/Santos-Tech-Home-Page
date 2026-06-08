import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando Meu Joguinho",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança junta cenário, personagem, movimento por teclas e um alvo que dá pontos para montar, passo a passo, o seu primeiro joguinho 2D no Scratch.`,
  descricao: `Nesta aula chega o momento mais esperado do mês: cada criança vai montar o seu próprio joguinho de verdade. Até agora elas aprenderam pedacinhos separados — mover o personagem, clicar e fazer algo acontecer, apertar uma tecla e tocar um som, fazer o personagem falar e contar pontos. Hoje a gente junta essas peças como quem monta um brinquedo de encaixe e vê tudo funcionar junto pela primeira vez.

A ideia central é simples e poderosa: um jogo é feito de partes que combinam. O personagem se mexe quando a criança aperta as setas, e existe um alvo (uma comida, uma estrela, uma moeda) que, ao ser tocado, some, reaparece em outro lugar e soma um ponto. Com só esses ingredientes já nasce um jogo divertido de "pega o quanto puder". Não precisa de nada complicado para a brincadeira acontecer.

Por que isso importa? Porque montar o jogo inteiro mostra à criança que ela é a autora — não só clica em coisas prontas, ela constrói. Esse sentimento de "eu fiz isso!" é o coração da trilha de games. Além disso, ao encaixar as peças, a criança percebe que cada bloco tem um trabalho, e que vários blocos juntos formam um comportamento maior.

Atenção, professor: esta é a aula 7 de 8, a montagem (parte 1 de 2 do Projeto Scratch). O objetivo de hoje é ter um joguinho que JÁ FUNCIONA, mesmo que simples e sem acabamento. Deixar para a aula 8 os enfeites, a tela de "Você venceu", a arrumação final e o compartilhamento. Hoje o lema é: faz funcionar primeiro, embeleza depois.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o Scratch já aberto na tela de criar projeto — use o Scratch online no navegador ou o aplicativo offline Scratch Desktop.`,
    `Projetor ou TV ligada no computador do professor para demonstrar cada passo bem grande.`,
    `Um projeto-modelo já pronto e salvo pelo professor (personagem que anda com as setas + um alvo que dá ponto), para mostrar a meta logo no começo.`,
    `Folha impressa "Receita do Meu Jogo" com 4 quadrinhos: Cenário, Personagem, Movimento, Alvo de pontos — para a criança marcar o que já fez.`,
    `Lápis de cor e a folha de receita para o aquecimento e o registro.`,
    `Fones de ouvido (opcional), caso os jogos tenham sons e a sala fique barulhenta.`,
    `Adesivos ou carimbos para premiar cada peça encaixada (motivação visual para a turma pequena).`,
  ],
  conceitosChave: [
    `Jogo — uma brincadeira no computador feita de várias partes que trabalham juntas.`,
    `Cenário (Palco) — o fundo onde o jogo acontece, como o tapete onde a gente brinca.`,
    `Personagem (Ator) — o bonequinho que a criança controla e move pela tela.`,
    `Movimento por teclas — quando apertar as setas do teclado faz o personagem andar para cima, baixo, esquerda e direita.`,
    `Alvo — o objeto que a gente precisa pegar; quando o personagem encosta nele, vale ponto.`,
    `Tocar (encostar) — o bloco que percebe quando dois bonecos se encontram na tela.`,
    `Ponto — o numerinho que sobe toda vez que a criança pega o alvo, mostrando que está ganhando.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Um joguinho de "pega o alvo" no Scratch tem só quatro ingredientes, e a criança já viu todos eles nas aulas anteriores. Primeiro, o cenário: clique no botão de Palco (canto inferior direito, o quadradinho à direita dos atores) e na aba "Cenários" escolha um fundo na lupa de "Escolher um Cenário". Segundo, o personagem: na lista de atores embaixo, use a lupa azul "Escolher um Ator" para pegar, por exemplo, um gatinho ou um cachorro. Terceiro, o movimento: com o personagem selecionado, monte quatro pilhas na área de scripts usando os blocos amarelos "quando a tecla [seta para a direita] for pressionada" (categoria Eventos) ligados a "adicione 10 a x" ou "adicione 10 a y" (categoria Movimento). Setas esquerda/direita mudam o x; cima/baixo mudam o y (use número negativo, como -10, para ir para a esquerda e para baixo). Quarto, o alvo e os pontos: crie uma Variável chamada "pontos" (categoria Variáveis, botão "Criar uma variável"), adicione um segundo ator (a comida/estrela) e nele monte "quando clicar na bandeira" + "sempre" + "se tocando em [personagem] então" + "mude pontos para... na verdade adicione 1 a pontos" + "vá para posição aleatória". É só isso. Domine essa receita testando em casa uma vez antes da aula — vale ouro.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): mostre no projetor o seu jogo-modelo já pronto. Jogue 30 segundos na frente da turma, deixe duas crianças jogarem. Pergunte: "O que esse jogo tem?" Vá apontando: tem fundo, tem boneco que anda, tem uma estrelinha que dá ponto. Entregue a folha "Receita do Meu Jogo".

Conteúdo novo guiado (15 min): no seu Scratch projetado, monte do zero e bem devagar, narrando cada clique. Escolha o cenário (botão Palco, aba Cenários, lupa). Escolha o ator (lupa azul embaixo). Pare aqui — o movimento e os pontos as crianças já sabem montar; só relembre rapidinho um bloco de seta e onde fica a variável "pontos".

Mão na massa (25 min): cada criança monta o próprio jogo seguindo a receita, na ordem dos quadrinhos: 1) cenário, 2) personagem, 3) movimento das setas, 4) alvo que dá ponto. Circule sem parar, encaixando uma peça por vez com quem travar. Mande testar na bandeira verde a cada peça.

Desafio + compartilhar (10 min): "Quem consegue pegar 5 pontos seguidos?" Faça um giro rápido pela sala: cada criança mostra o jogo dela funcionando por 20 segundos. Aplauda cada um. Lembre que na próxima aula vamos enfeitar.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de RECEITA DE BOLO: "Todo jogo tem uma receita. Vamos colocar os ingredientes um de cada vez." O cenário é o tapete onde a brincadeira acontece. O personagem é o seu bonequinho de controlar. As setas são o controle do videogame: aperta e ele anda. O alvo é como uma caça ao tesouro — toda vez que você encosta no tesouro, ganha um pontinho e ele se esconde em outro cantinho. Fale pouco e mostre muito: aponte na tela projetada cada bloco enquanto fala.

## Erros comuns e como ajudar

O personagem não anda: quase sempre a criança usou "quando clicar na bandeira" no lugar de "quando a tecla for pressionada", ou esqueceu de escolher a seta certa na setinha do bloco. O personagem some da tela: ele andou demais e saiu pela borda — clique e arraste o boneco de volta para o meio. O ponto não sobe: o bloco "se tocando em" está apontando para o ator errado, ou está faltando o bloco "sempre" em volta — verifique se a checagem está dentro de um laço "sempre". A estrela não some/reaparece: faltou o "vá para posição aleatória". Bandeira verde esquecida: lembre sempre de testar clicando na bandeira. Frustração: elogie cada peça encaixada, mesmo a menor, e garanta que ninguém precisa terminar tudo hoje.`,
  exercicios: [
    {
      titulo: `Caça ao Ingrediente`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Com o jogo-modelo projetado, conduza uma conversa rápida apontando cada parte na tela. Faça uma pergunta de cada vez e deixe as crianças responderem em voz alta. O objetivo é elas perceberem que um jogo é feito de pedaços.`,
      atividade: `Olhando o jogo do professor na tela grande, descubra juntos: Onde está o fundo (cenário)? Quem é o personagem que anda? O que acontece quando ele encosta na estrelinha? Aponte com o dedo cada parte.`,
      gabarito: `A turma identifica corretamente as quatro partes: o fundo é o cenário atrás de tudo; o personagem é o bonequinho que se mexe; ao encostar no alvo, ele some, reaparece em outro lugar e o número de pontos aumenta. Acertou se a criança consegue apontar pelo menos o cenário e o personagem na tela.`,
    },
    {
      titulo: `Monto o Tapete e o Boneco`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor, depois deixe a turma fazer. Vá até cada computador conferindo. Esta é a parte fácil e serve para todos começarem com sucesso e ganharem confiança.`,
      atividade: `No seu Scratch: 1) clique no quadradinho do Palco (canto de baixo, à direita) e na lupa "Escolher um Cenário" para pegar um fundo que você gostar. 2) Embaixo, na lupa azul "Escolher um Ator", escolha o seu personagem. Clique na bandeira verde para ver tudo na tela.`,
      gabarito: `O projeto da criança mostra um fundo escolhido no Palco e um personagem visível na tela. Acertou quando há um cenário (não mais o fundo branco vazio) e um ator escolhido aparecendo no palco.`,
    },
    {
      titulo: `As Setas Mandam no Boneco`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre que isso eles já aprenderam. Monte uma seta junto com a turma no projetor e deixe que copiem as outras três sozinhos. Reforce trocar a direção na setinha do bloco e o sinal de menos (-10) para esquerda e para baixo.`,
      atividade: `Com o personagem selecionado, monte quatro pilhas: "quando a tecla seta-direita for pressionada" ligado a "adicione 10 a x"; seta-esquerda com "adicione -10 a x"; seta-cima com "adicione 10 a y"; seta-baixo com "adicione -10 a y". Aperte as setas do teclado e veja o boneco andar.`,
      gabarito: `Ao apertar cada seta do teclado, o personagem anda na direção certa: direita, esquerda, cima e baixo. Acertou quando o boneco se mexe corretamente para os quatro lados sem ficar parado nem ir para o lado errado.`,
    },
    {
      titulo: `O Alvo que Dá Ponto`,
      tipo: `desafio na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Esta é a peça mais difícil — acompanhe de pertinho. Ajude a criar a variável "pontos" e a montar o laço "sempre" com o "se tocando". Lembre que esses blocos vão no ator do ALVO, não no personagem. Mostre no projetor passo a passo.`,
      atividade: `Adicione um segundo ator (uma estrela ou comida). Crie a variável "pontos". Nele monte: "quando clicar na bandeira" + "sempre" + dentro do sempre "se tocando em [personagem] então" + "adicione 1 a pontos" + "vá para posição aleatória". Teste na bandeira verde e tente pegar a estrela.`,
      gabarito: `Quando o personagem encosta no alvo, o número de pontos sobe de 1 em 1 e o alvo pula para outro lugar da tela. Acertou quando, ao pegar a estrela, o placar aumenta e a estrela reaparece em posição diferente.`,
    },
    {
      titulo: `Minha Receita Pronta`,
      tipo: `desenho/papel`,
      tempo: `5 minutos`,
      guiaProfessor: `Para fechar, peça que cada criança preencha a folha "Receita do Meu Jogo" marcando as peças que conseguiu encaixar e desenhando o personagem dela. Use para registrar o progresso e planejar quem precisa de ajuda na aula 8.`,
      atividade: `Na folha "Receita do Meu Jogo", pinte uma estrelinha em cada quadrinho que você já fez: Cenário, Personagem, Movimento, Alvo de pontos. Depois, no espaço em branco, desenhe o seu personagem e o alvo que ele precisa pegar.`,
      gabarito: `A folha mostra quais peças a criança montou (idealmente as quatro marcadas) e um desenho do personagem e do alvo. Acertou quando a criança marca corretamente as peças que de fato fez no computador e o desenho corresponde ao jogo dela na tela.`,
    },
  ],
};
