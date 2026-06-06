import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Minha Jornada de Game Maker",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança relembra tudo que aprendeu no Ano 2, monta um mural visual da própria jornada de criador de jogos e escolhe, com orgulho, o seu projeto favorito do ano.`,
  descricao: `Esta é a aula de olhar para trás e ver o quanto a gente cresceu. O jogo no Roblox já está publicado e pronto para o Demo Day, então hoje a turma não constrói nada novo: hoje a turma celebra. Durante o Ano 2 inteiro, cada criança virou uma verdadeira game maker, e nesta aula ela vai perceber isso de um jeito visual e emocionante, montando um mural da própria jornada.

Por que isso importa? Porque crianças de 5 a 9 anos aprendem muita coisa em um ano e nem sempre se dão conta do tamanho da conquista. Quando elas veem, lado a lado, a inteligência artificial que treinaram na Teachable Machine, os desenhos em pixel art do Aseprite, o joguinho que fizeram no Construct 3 e os modelos 3D do Maya e do Roblox, acontece uma mágica: a criança fala "nossa, eu fiz tudo isso!". Esse orgulho é o melhor combustível para ela continuar criando.

Nesta aula a turma vai fazer três coisas. Primeiro, vai relembrar em roda as quatro grandes ferramentas do ano (IA, pixel art, jogos 2D e 3D), com o professor mostrando exemplos prontos no projetor. Segundo, cada aluno vai montar um mural visual da sua jornada, colando ou desenhando uma lembrança de cada etapa, numa linha do tempo do começo ao fim do ano. Terceiro, cada criança vai escolher e apresentar o seu projeto favorito, dizendo por que aquele foi o preferido dela.

O professor conduz como um guia de museu animado: caminha pela "exposição" da jornada da turma, aponta as obras, faz perguntas e celebra cada lembrança. O objetivo não é avaliar nem corrigir, é fazer a criança sentir o orgulho de ser uma criadora de jogos. Esta é a penúltima aula do ano, logo antes da Festa do Certificado — o clima é de festa, memória e gratidão pelo caminho percorrido.`,
  materiais: [
    `Computadores ligados, com o Roblox (Roblox Studio) aberto no jogo 3D que cada aluno construiu durante o mês, para relembrar e mostrar`,
    `Projetor ou TV conectada a um computador, para o professor exibir os exemplos prontos de cada ferramenta do ano`,
    `Exemplos prontos salvos e abertos: um modelo da Teachable Machine, um desenho em pixel art do Aseprite, um joguinho do Construct 3 e um modelo 3D do Maya`,
    `Uma folha grande (cartolina) por aluno para montar o mural da jornada, dividida em quatro espaços`,
    `Lápis de cor, canetinhas, cola e adesivos ou figurinhas para decorar o mural`,
    `Fichas de papel impressas com o ícone de cada ferramenta do ano (IA, pixel, joystick, cubo 3D) para colar no mural`,
    `Crachás ou plaquinhas com o nome de cada aluno e o título de "Game Maker do Ano 2"`,
  ],
  conceitosChave: [
    `Jornada — é todo o caminho que você percorreu desde o começo do ano até agora, com tudo que aprendeu pelo caminho.`,
    `Mural — é um cartaz onde a gente junta vários desenhos e lembranças para contar uma história só de olhar.`,
    `Linha do tempo — é colocar as coisas na ordem em que aconteceram: o que veio primeiro, depois e por último.`,
    `Inteligência artificial (IA) — é ensinar o computador a reconhecer coisas, como você fez na Teachable Machine mostrando exemplos para ele.`,
    `Pixel art — é o desenho feito de quadradinhos coloridos, do jeitinho que você criou no Aseprite.`,
    `Modelo 3D — é um objeto que tem frente, lados e fundo, igual a um brinquedo de verdade, como você fez no Maya e no Roblox.`,
    `Projeto favorito — é a criação de que você mais gostou no ano inteiro, a que te deixou mais orgulhoso.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula você não vai criar nada novo no Roblox Studio. O foco é a memória e a celebração da jornada do Ano 2. Mesmo assim, prepare quatro exemplos prontos para mostrar no projetor, um de cada ferramenta do ano, porque a parte visual é o coração desta aula.

Antes da aula, abra e deixe pronto em abas ou janelas: (1) um modelo simples da Teachable Machine no navegador (teachablemachine.withgoogle.com), com duas classes treinadas; (2) um desenho em pixel art aberto no Aseprite; (3) um joguinho aberto no Construct 3; (4) um modelo 3D aberto no Maya. Por fim, abra o Roblox Studio com o jogo 3D que a turma construiu este mês, porque é o ponto final da jornada e o orgulho maior.

No Roblox Studio, para reabrir o jogo da turma, abra o programa, clique na aba "My Games" (Meus Jogos) na tela inicial e clique no projeto da turma. Para mostrar como ficou, clique no botão "Play" (o triângulo verde no topo, na barra "Home"/"Test") e ande pelo cenário com as teclas W, A, S, D. Para parar, clique no quadrado "Stop". Você só vai navegar e mostrar; não precisa editar nada.

Teste tudo antes na internet da escola para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox)

Aquecimento e revisão (10 min): Receba a turma em roda. Pergunte: "O que a gente aprendeu a fazer este ano?". Deixe as crianças soltarem palavras (jogo, desenho, robô, 3D) e vá anotando no quadro com um desenho ao lado de cada uma. Esse mapa rápido já é a semente do mural.

Conteúdo novo guiado (15 min): No projetor, faça um passeio pela jornada na ordem do ano. Mostre 1) a Teachable Machine reconhecendo algo ao vivo; 2) um pixel art do Aseprite; 3) um joguinho do Construct 3 sendo jogado; 4) um modelo 3D girando no Maya. Termine grandioso: no Roblox Studio, clique em "My Games", abra o jogo da turma, aperte o "Play" verde e ande pelo cenário, dizendo "e foi aqui que tudo virou um jogo 3D de verdade!". Clique em "Stop" para encerrar.

Mão na massa (25 min): Entregue a cartolina dividida em quatro espaços. Cada espaço é uma etapa do ano (IA, pixel art, jogo 2D, 3D). A criança cola a ficha-ícone certa e desenha ou escreve uma lembrança em cada espaço, montando a linha do tempo da própria jornada. Circule perguntando "o que você fez nessa parte?" e elogiando cada lembrança. Quem terminar decora o mural com adesivos.

Desafio e compartilhar (10 min): Cada criança escolhe o seu projeto favorito do ano e diz para a turma qual foi e por quê. Dois ou três voluntários mostram o cantinho favorito no projetor. Encerre entregando o crachá de "Game Maker do Ano 2" e lembrando que a próxima aula é a festa do certificado.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a ideia de álbum de fotos ou caixa de tesouros: "O mural é a caixa onde a gente guarda as coisas mais legais que fizemos no ano." Compare a linha do tempo com a fila do parquinho: "Primeiro veio isto, depois aquilo, na ordem certinha." Para a inteligência artificial, lembre: "Foi quando a gente ensinou o computador a reconhecer as coisas mostrando exemplos pra ele." Para o 3D, diga que é "como um brinquedo de verdade, que dá pra ver de todos os lados". Reforce sempre: "Tudo isso aqui foi você quem fez. Você é uma game maker de verdade."

## Erros comuns e como ajudar

Achar que não aprendeu nada: mostre os exemplos prontos e diga "lembra disso? Você fez!". A memória visual desbloqueia o orgulho. Não lembrar a ordem do ano: use as fichas-ícone como pistas e monte a linha do tempo junto. Querer desenhar tudo perfeito e travar: lembre que o mural é de lembranças, não precisa ficar bonito, precisa ser verdadeiro. Não saber escolher o favorito: pergunte "qual te deu mais alegria de fazer?" em vez de "qual é o melhor?". Disputa sobre qual ferramenta é a melhor: explique que cada uma serve para uma coisa e todas juntas formam a jornada. Mexer demais no jogo do Roblox em vez de só olhar: combine que hoje a gente revisita e celebra, e brincar é depois.`,
  exercicios: [
    {
      titulo: `Caça às lembranças do ano`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Em roda, faça perguntas-gatilho para ativar a memória: "Em qual programa a gente desenhou com quadradinhos?", "Onde a gente ensinou o computador a reconhecer as coisas?", "E o jogo 3D, foi em qual?". Mostre rapidinho cada exemplo pronto no projetor conforme as crianças acertam. Aceite respostas em qualquer ordem e celebre cada lembrança.`,
      atividade: `Na roda, ajude a turma a lembrar as quatro ferramentas mágicas do ano. Diga em voz alta o nome de cada uma que você lembrar: a da inteligência artificial, a do desenho de quadradinhos, a do jogo e a do 3D.`,
      gabarito: `A criança acertou quando consegue lembrar, com ajuda das pistas, pelo menos duas das quatro ferramentas do ano (Teachable Machine, Aseprite, Construct 3 e Maya/Roblox). Sinal de sucesso: a turma reconhece os exemplos quando aparecem no projetor.`,
    },
    {
      titulo: `O ícone certo no lugar certo`,
      tipo: `jogo de combinar`,
      tempo: `10 minutos`,
      guiaProfessor: `Espalhe as fichas-ícone (IA, pixel, joystick, cubo 3D) na mesa. Mostre um exemplo no projetor de cada vez e peça que a criança levante ou aponte a ficha que combina com aquela ferramenta. É um jogo de associação visual que prepara o terreno para o mural.`,
      atividade: `Olhe a tela e pegue a ficha certa: quando aparecer o computador reconhecendo coisas, levante a ficha da IA; quando aparecer o desenho de quadradinhos, a ficha do pixel; quando aparecer o jogo, o joystick; quando aparecer o objeto 3D, o cubo.`,
      gabarito: `A criança acertou quando combina corretamente pelo menos três das quatro fichas com a ferramenta certa mostrada na tela. Espera-se: IA com o computador que reconhece, pixel com o desenho de quadradinhos, joystick com o jogo e cubo com o modelo 3D.`,
    },
    {
      titulo: `Minha linha do tempo`,
      tipo: `desenho/papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a cartolina dividida em quatro espaços, na ordem do ano. Explique que cada espaço é uma etapa. A criança cola a ficha-ícone e desenha uma lembrança em cada um. Como ainda leem e escrevem pouco, incentive o desenho. Circule perguntando "o que você fez nessa parte?" e ajude a montar a ordem certa.`,
      atividade: `Na sua cartolina de quatro espaços, monte a linha do tempo do seu ano: no primeiro espaço cole a ficha da IA e desenhe uma lembrança; no segundo, o pixel art; no terceiro, o jogo; no quarto, o 3D do Roblox. Decore do jeito que quiser.`,
      gabarito: `A criança acertou quando os quatro espaços têm a ficha certa e pelo menos um desenho ou marca de lembrança em cada um, na ordem do ano. Sinal de sucesso: olhando o mural, a criança consegue contar a própria jornada do começo ao fim.`,
    },
    {
      titulo: `Reabrindo o meu jogo 3D`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor o caminho no Roblox Studio: abrir o programa, clicar na aba "My Games", clicar no jogo da turma, apertar o botão verde "Play" e andar com W, A, S, D. Depois deixe cada aluno fazer no seu computador. Passe de mesa em mesa ajudando a achar o jogo e a apertar o "Play". Combine que hoje é só visitar.`,
      atividade: `No seu computador, abra o Roblox Studio, clique em "My Games", abra o seu jogo 3D e aperte o botão verde "Play". Ande um pouquinho pelo seu cenário com as teclas W, A, S, D e aponte para a parte de que você mais se orgulha. Aperte "Stop" no fim.`,
      gabarito: `A criança acertou quando consegue reabrir o próprio jogo no Roblox Studio e entrar no modo "Play", mesmo com ajuda para achar o projeto. Sinal de sucesso: o aluno anda pelo cenário e aponta uma parte que ele mesmo construiu.`,
    },
    {
      titulo: `O meu projeto favorito do ano`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final e mais reflexivo: escolher um favorito e justificar. Ajude quem hesita com a pergunta "qual te deu mais alegria de fazer?" em vez de "qual é o melhor?". Chame voluntários para mostrar o cantinho favorito no projetor (o jogo do Roblox ou o mural). Celebre cada escolha e entregue o crachá de Game Maker do Ano 2.`,
      atividade: `Olhe o seu mural e pense no ano inteiro. Escolha o seu projeto favorito e conte para a turma três coisas: 1) qual foi o seu favorito; 2) em qual ferramenta você fez; 3) por que foi esse que você mais gostou.`,
      gabarito: `A criança acertou quando escolhe um projeto favorito e diz qual é, em qual ferramenta foi feito e um motivo verdadeiro para a escolha. Qualquer favorito é válido, desde que ela consiga justificar com as próprias palavras, mesmo que com um empurrãozinho do professor.`,
    },
  ],
};
