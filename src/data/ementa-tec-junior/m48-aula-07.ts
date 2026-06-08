import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Ensaio de apresentador: preparando o Demo Day",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno monta um roteiro curto para apresentar o seu jogo publicado e o seu portfólio, e ensaia em dupla falando alto e claro, recebendo dicas dos colegas.`,
  descricao: `Esta é a penúltima aula do ano, e o clima já é de festa chegando. Os alunos terminaram a trilha de criação de games: treinaram uma IA no ML for Kids, criaram itens 3D no MagicaVoxel, no Blender e no Maya, imprimiram peças em 3D de verdade e, nestas últimas semanas, programaram um jogo com a linguagem Lua dentro do Roblox, corrigiram os bugs, publicaram a experiência e montaram um portfólio com todos esses tesouros. Agora falta uma habilidade que vale ouro no mundo do CREATE: saber apresentar o próprio trabalho.

Apresentar é tão importante quanto criar. Um criador que constrói coisas incríveis mas trava na hora de mostrar acaba ficando escondido. Por isso, nesta aula a gente não constrói nada novo no jogo: a gente treina a fala. Cada criança vai montar um roteiro curto, com começo, meio e fim, decidindo exatamente o que dizer: o que ela criou, como resolveu um bug no código Lua, e qual foi a parte que ela mais gostou. O roteiro é como um mapa do tesouro da fala: ele mostra a ordem das coisas para ninguém se perder no meio da apresentação.

Depois de montar o roteiro, vem o ensaio. As crianças treinam em duplas, uma apresentando e a outra sendo a plateia atenta. Falar para um colega antes de falar para os pais tira o nervosismo e transforma o medo em empolgação. A plateia não fica só assistindo: ela dá uma dica gentil ("fala um pouquinho mais alto" ou "mostra a parte do código que você consertou"). Assim, cada apresentação melhora a cada repetição.

O professor conduz como um diretor de teatro carinhoso: dá o modelo, mostra um exemplo animado, deixa cada criança ensaiar e aplaude muito. O objetivo não é decorar um texto perfeito; é a criança se sentir dona do que fez e feliz em mostrar o jogo publicado e o portfólio. Esta aula é a ponte direta para a próxima, que é o Demo Day de verdade, e também para o CREATE, onde apresentar projetos vira rotina.`,
  materiais: [
    `Computadores ligados, com o Roblox aberto e o jogo de cada aluno carregado (no Roblox Studio em modo de teste e também no Player, pelo botão verde Jogar, pelo site roblox.com já logado)`,
    `O arquivo de script em Lua de cada aluno aberto no Roblox Studio, para a criança poder apontar a linha do bug que ela consertou`,
    `O portfólio de cada aluno acessível na tela (pasta com fotos das peças 3D, prints do jogo e o link da experiência publicada)`,
    `Projetor ou TV conectada a um computador, para o professor mostrar o exemplo de apresentação e fazer o mini ensaio na frente da turma`,
    `Folhas com o modelo do roteiro em três partes (começo, meio e fim) e lápis de cor para a criança desenhar ou marcar cada parte`,
    `Um cronômetro ou ampulheta visual para a criança treinar a fala curta, de mais ou menos um minuto`,
    `Cartões de dicas para a plateia, com lembretes simples como "fale alto", "olhe para a plateia" e "mostre a tela"`,
  ],
  conceitosChave: [
    `Roteiro — é a lista do que você vai falar, na ordem certa: primeiro isto, depois aquilo, por último o final.`,
    `Apresentar — é mostrar o que você fez e contar com a sua própria voz, para as pessoas entenderem.`,
    `Ensaio — é treinar antes de verdade, repetindo várias vezes, para ficar fácil e a gente não travar na hora.`,
    `Plateia — são as pessoas que assistem você, como o seu colega de dupla, a sua turma e, no Demo Day, a sua família.`,
    `Portfólio — é a coleção dos seus tesouros de criador: as peças 3D, os prints do jogo e o link da experiência publicada.`,
    `Bug — é um errinho no código que fazia o jogo se comportar de um jeito esquisito, e que você descobriu e consertou.`,
    `Feedback — é uma dica gentil que o colega te dá para a sua apresentação ficar ainda melhor da próxima vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não ensina a programar nada novo. O foco é a fala: ajudar cada criança a montar um roteiro curto e ensaiar. Mesmo assim, você precisa dominar três caminhos técnicos simples para guiar a turma com segurança.

Primeiro, saiba abrir o jogo publicado pelo lado do jogador. No navegador, entre em roblox.com já logado, clique no avatar do aluno (canto superior direito), vá em "Criações" e ache a "Experiência" publicada. A página do jogo tem um botão verde grande escrito "Jogar". Clicar nele é exatamente o que os pais farão no Demo Day. O jogo leva alguns segundos "carregando".

Segundo, saiba mostrar o código no Roblox Studio. Abra o jogo do aluno no Studio, no painel "Explorer" (à direita) encontre o Script dentro de "ServerScriptService" e dê dois cliques para abrir a janela de código. É ali que a criança vai apontar a linha do bug que consertou. Por exemplo, se ela trocou um "=" por "==" numa condição, ou ajustou um "end" que faltava, ela mostra essa linha.

Terceiro, saiba abrir o portfólio do aluno (a pasta com as fotos das peças 3D, os prints e o link). Deixe tudo aberto antes da aula. Teste a internet da escola: abra um jogo de aluno do começo ao fim para saber quanto tempo ele demora a carregar. Isso evita sustos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma em roda. Pergunte: "O que você mais quer mostrar para a sua família no Demo Day?" Faça uma rodada rápida em que cada criança diz só uma coisa que criou. Esse já é o primeiro mini ensaio e quebra a vergonha.

Conteúdo novo guiado (15 min): No projetor, apresente o "roteiro de três partes". COMEÇO: "Oi, eu sou o(a)..., e este é o meu jogo, que se chama...". MEIO: "Aqui no Roblox Studio eu tive um bug e consertei: olha esta linha do código Lua que eu arrumei. No meu portfólio também tenho minhas peças 3D." FIM: "A parte que eu mais gostei de fazer foi..., obrigado(a) por assistir!". Faça você mesmo a apresentação modelo, curtinha e animada, abrindo o jogo pelo botão verde "Jogar" e apontando uma linha de código no Studio.

Mão na massa (25 min): Cada aluno monta o seu roteiro na folha de três partes (desenhando ou marcando cada parte). Depois, em duplas, um apresenta e o outro é a plateia com o cartão de dicas. Quem escuta dá um feedback gentil. Em seguida trocam os papéis. Circule de mesa em mesa ajudando a achar a linha do bug no Studio e batendo palma.

Desafio e compartilhar (10 min): Monte um mini Demo Day de mentira. Dois ou três voluntários vêm à frente, abrem o jogo no projetor e fazem o roteiro inteiro para a turma. Todos aplaudem. Encerre lembrando: "Na próxima aula é a festa de verdade, o nosso Demo Day!"

## Como explicar para crianças

Use a ideia de teatro: "Hoje somos atores ensaiando a peça, e a peça é mostrar o nosso jogo." Compare o roteiro com uma receita de bolo: "Primeiro a gente faz isto, depois aquilo, na ordem certa, para não esquecer nada." Para as três partes, use os dedos: levante um dedo a cada parte (começo, meio, fim). Para o bug, diga que ela é uma "detetive de erros" que achou a pista escondida no código e consertou. Reforce que não existe jeito errado de falar do próprio jogo, porque ninguém o conhece melhor do que quem o criou.

## Erros comuns e como ajudar

Travar de vergonha: comece sempre fazendo você primeiro e deixe a criança apresentar só para o colega da dupla antes de ir à frente. Falar baixinho: brinque de "voz de super-herói". Querer brincar no jogo em vez de mostrar: combine antes que hoje a gente abre, mostra e fala, e jogar de verdade fica para depois. Não achar a linha do bug: tenha o Script já aberto no Studio e ajude a apontar. Roteiro grande demais: lembre que são só três partes curtas. Plateia que critica de um jeito feio: ensine a dar a dica sempre começando por um elogio.`,
  exercicios: [
    {
      titulo: `Minha frase de abertura`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sentados em roda, explique que toda apresentação começa com um "oi" e o nome do jogo. Faça você o exemplo primeiro, bem animado: "Oi, eu sou o professor, e este é o meu jogo, que se chama Aventura na Floresta!". Depois dê a vez a cada criança. Aplauda cada uma e ajude quem travar completando junto o começo da frase.`,
      atividade: `Diga em voz alta a sua frase de abertura, no modelo: "Oi, eu sou o(a) [seu nome], e este é o meu jogo, que se chama [nome do jogo]!". Fale alto, como um super-herói, e olhe para a turma.`,
      gabarito: `A criança acertou quando diz uma frase de abertura que tem o nome dela e o nome do jogo, mesmo com um empurrãozinho do professor para começar. Sinal de sucesso: ela fala alto o bastante para a turma ouvir e olha para a frente.`,
    },
    {
      titulo: `O roteiro de três partes`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha dividida em três quadrados: COMEÇO, MEIO e FIM. Explique que cada quadrado é uma parte da fala. Peça que desenhem ou escrevam pouquinho em cada um: no começo, o nome do jogo; no meio, o bug que consertaram e uma peça do portfólio; no fim, a parte favorita. A folha vira o cartão de cola para o Demo Day. Circule perguntando "o que tem nesse quadrado?".`,
      atividade: `Na folha de três quadrados, preencha o seu roteiro: no COMEÇO, o nome do seu jogo; no MEIO, o bug que você consertou no código Lua e uma peça 3D do seu portfólio; no FIM, a parte que você mais gostou de criar. Pode desenhar ou escrever.`,
      gabarito: `A criança acertou quando os três quadrados estão preenchidos e combinam com a apresentação: nome do jogo, algo do meio (bug consertado ou peça do portfólio) e a parte favorita. Sinal de sucesso: olhando só para a folha, ela consegue contar a apresentação inteira.`,
    },
    {
      titulo: `Achando a linha do bug`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude cada aluno a abrir o jogo no Roblox Studio e, no painel Explorer, dar dois cliques no Script para abrir o código Lua. Peça que encontrem a linha que eles consertaram nas aulas anteriores deste mês (por exemplo, uma condição com "==" no lugar de "=", ou um "end" que estava faltando). A criança vai apontar essa linha durante a apresentação. Passe de mesa em mesa ajudando a localizar.`,
      atividade: `No Roblox Studio, abra o seu Script no Explorer com dois cliques. Encontre a linha do código Lua que você consertou e deixe a tela pronta nela. Treine dizer: "Aqui estava o meu bug, e eu consertei trocando esta parte do código."`,
      gabarito: `A criança acertou quando consegue abrir o Script e apontar para uma linha de código, explicando com as próprias palavras o que estava errado e o que ela arrumou. Exemplo de acerto: "Faltava um end aqui, e o jogo dava erro; eu coloquei o end e funcionou."`,
    },
    {
      titulo: `Ensaio em dupla com dica`,
      tipo: `jogo`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno é o apresentador e faz o roteiro inteiro (abertura, meio, fim) abrindo o jogo e o portfólio. O outro é a plateia, com o cartão de dicas em mãos. No fim, a plateia dá um feedback gentil começando sempre por um elogio: "Gostei do seu jogo! Da próxima vez, fale um pouquinho mais alto." Depois invertem os papéis. Circule garantindo que a dica seja sempre carinhosa.`,
      atividade: `Em dupla, apresente o seu jogo inteiro para o colega usando o roteiro de três partes. Quando for a plateia, escute com atenção e dê uma dica gentil: comece com um elogio e depois sugira uma coisa para melhorar. Depois troquem de papel.`,
      gabarito: `A dupla acertou quando os dois apresentaram o roteiro completo e cada um deu uma dica que começa com elogio e traz uma sugestão. Mostra que apresentaram e ouviram de verdade, com respeito. Qualquer dica gentil e verdadeira está certa.`,
    },
    {
      titulo: `Ensaio geral no projetor`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o desafio final e mais difícil: apresentar na frente de todos, no projetor, como será no Demo Day. Chame voluntários e, se houver tempo, deixe cada criança fazer o ciclo completo: abrir o jogo no botão verde Jogar, mostrar a linha do bug no Studio, apontar o portfólio e fechar com a parte favorita. Aplauda forte, corrija com carinho e aproveite para conferir login, internet e projetor para o dia de verdade.`,
      atividade: `Venha à frente da turma. No computador ligado ao projetor, faça o seu roteiro inteiro: abra o seu jogo pelo botão verde Jogar, mostre a linha do bug que você consertou, aponte uma peça do seu portfólio e termine dizendo a parte que você mais gostou. No fim, faça uma reverência para a plateia.`,
      gabarito: `A criança acertou quando completa o ciclo inteiro: abre o jogo no projetor, mostra o bug consertado, aponta o portfólio e diz a parte favorita, mesmo com um empurrãozinho do professor. Sinal de sucesso: o jogo aparece na tela grande e ela apresenta de ponta a ponta, com voz que a turma consegue ouvir.`,
    },
  ],
};
