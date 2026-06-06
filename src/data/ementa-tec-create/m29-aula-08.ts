import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Os Personagens Ganham Vida: Apresentação Final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno exibe os personagens e itens do próprio jogo impressos em 3D ao lado da versão digital, apresenta o caminho completo da criação e celebra a conclusão do projeto do jogo.`,
  descricao: `Chegou o dia de fechar o mês com chave de ouro. Durante quatro semanas, cada aluno resgatou os modelos feitos no Maya, conheceu o Bambu Studio, ajustou e fatiou as peças e finalmente imprimiu, limpou e montou os personagens e itens do próprio jogo no Roblox. Hoje todo esse percurso se junta em uma única apresentação: o jogo aparece na tela, rodando no Roblox Studio, e ao lado, sobre a mesa, os mesmos personagens saem da tela e ficam de pé em plástico, prontos para pegar na mão.

Esta aula é, antes de tudo, uma grande celebração. Não há botão novo para aprender nem fatiamento para fazer: tudo foi preparado nas aulas anteriores e nesta o aluno sobe ao palco para mostrar o que construiu. Cada um abre o jogo, mostra o personagem na tela e levanta a versão impressa, contando a história de como aquele modelo nasceu no Maya, virou arquivo para impressão, ganhou suportes, foi fatiado, impresso, teve os suportes removidos e recebeu acabamento. Para adolescentes de 10 a 15 anos, apresentar um projeto inteiro para a turma e para as famílias é um marco enorme de orgulho e merece holofote.

O papel do professor hoje é de mestre de cerimônias e curador da exposição. Você organiza a bancada onde os modelos impressos ficam à vista, prepara o projetor para mostrar o jogo, conduz a ordem das apresentações e fica por perto para resolver qualquer travada técnica. Você também ajuda quem está nervoso a respirar, encurtar a fala ou apresentar em dupla. O foco é o sentimento de conquista e a narrativa do digital ao físico, não a perfeição da impressão nem a ausência de bugs no jogo.

Ao final das apresentações vem o ponto alto: a foto da turma com os personagens impressos na mão e a comemoração de tudo o que foi aprendido neste mês de impressão 3D. É a hora de olhar para trás e perceber o salto de cada um — de quem tinha apenas um modelo digital a quem agora segura o próprio personagem em plástico — e celebrar juntos o encerramento do projeto do jogo, antes de seguir para os próximos grandes projetos do ano.`,
  materiais: [
    `Computadores ligados, com o Roblox Studio aberto no jogo de cada aluno e o Bambu Studio aberto no projeto fatiado do personagem, prontos para mostrar a tela do fatiamento se alguém pedir.`,
    `Projetor ou TV grande, conectado e testado antes da aula, para a turma e as famílias verem o jogo rodando e a tela do Bambu Studio com nitidez.`,
    `Bancada ou mesa de exposição, coberta com um tecido ou cartolina, onde os personagens e itens impressos de cada aluno ficam de pé com uma plaquinha de nome ao lado.`,
    `Os personagens e itens impressos em 3D de cada aluno, já com suportes removidos e acabamento feito nas aulas anteriores, organizados por aluno para ninguém se perder.`,
    `Câmera ou celular carregado e com memória livre para a foto da turma, mais um banner ou cartaz da Santos Tech ao fundo para a foto ficar bonita.`,
    `Lista com a ordem de apresentação dos alunos e, se possível, um lanche para a confraternização final com as famílias.`,
  ],
  conceitosChave: [
    `Apresentação final — o momento de mostrar ao vivo, com orgulho, o projeto que você construiu durante o mês inteiro.`,
    `Demo — a apresentação curta e bem ensaiada que mostra o melhor do projeto: o jogo rodando e os personagens impressos ao lado.`,
    `Do digital ao físico — a jornada de transformar um modelo na tela em um objeto de plástico que você segura na mão.`,
    `Exposição (showcase) — a mesa onde os modelos impressos ficam expostos para todos verem e pegarem com cuidado.`,
    `Pitch — a fala rápida em que você conta, em poucas frases, o que é o seu jogo e como o personagem saiu da tela.`,
    `Portfólio — o conjunto do que você criou (jogo no Roblox, modelos do Maya e impressões 3D), que prova o que você já sabe fazer.`,
    `Pipeline de criação — o caminho completo de produção, do modelo 3D no Maya até a peça impressa no Bambu Studio.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhuma ferramenta nova: o jogo já está pronto no Roblox Studio, os modelos já foram resgatados do Maya, ajustados, fatiados, impressos, limpos e finalizados nas aulas anteriores. A aula é de CELEBRAÇÃO e de palco. Seu trabalho é conduzir um pequeno evento — a apresentação final — em que cada aluno mostra a Demo: o jogo rodando na tela e os personagens e itens impressos expostos ao lado. O clima do dia é festivo, acolhedor e sem cobrança. Ninguém é avaliado por bug no jogo ou imperfeição na impressão; cada aluno é celebrado por ter ido do modelo digital ao objeto real.

Tecnicamente, você só precisa saber abrir o jogo e, se for o caso, mostrar a tela do fatiamento. No Roblox Studio, com o jogo aberto, clique no botão Play (o triângulo azul de "play", na aba Home ou Test, no topo) para testar o jogo dentro do editor; clique em Stop (o quadrado vermelho) para parar. No Bambu Studio, se um aluno quiser mostrar como o personagem foi preparado, abra o projeto salvo (menu File, depois Open Project, ou use o atalho Ctrl+O), clique na aba Preview, no topo, e arraste a barra de camadas, na lateral direita, para mostrar a impressão sendo construída camada por camada. Teste tudo isso antes da aula e confira o projetor.

Antes de as famílias chegarem, monte o cenário: a bancada de exposição com os personagens impressos de pé e plaquinhas de nome, o projetor testado, a câmera carregada e a lista de apresentação na mão. Deixe cada jogo já aberto ou fácil de localizar, para não procurar arquivo na frente de todos.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Acolhimento e montagem da exposição (10 min). Receba a turma e as famílias e acomode a plateia. Com os alunos, monte juntos a bancada: cada um posiciona o seu personagem impresso e a plaquinha de nome. Combine as regras de plateia (silêncio durante a fala do colega, palmas no fim) e tranquilize quem estiver nervoso.

2. Demonstração guiada do formato (15 min). Mostre você mesmo como será cada Demo, usando um jogo de exemplo. No Roblox Studio, clique em Play e jogue cerca de dez segundos. Aponte um personagem na tela e levante o modelo impresso correspondente da bancada. Se quiser, abra o Bambu Studio, clique na aba Preview e arraste a barra de camadas para mostrar a impressão subindo. Você também pode mostrar, no Roblox, uma linha de código Lua simples que dá as boas-vindas ao jogador, exatamente assim, em uma parte (Part) com um Script: print("Bem-vindo ao meu jogo!"). Diga a frase de ouro: "Eu jogo um pouquinho, aponto o personagem na tela e mostro ele aqui na minha mão."

3. Mão na massa: a apresentação final (25 min). Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo da Júlia!". Ajude cada um a clicar em Play e a rodar o jogo. Peça que joguem uma partida curta, façam o pitch em poucas frases e levantem o personagem impresso, contando como ele foi do Maya ao Bambu Studio, passando pelo fatiamento e pela impressão. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Puxe os aplausos ao fim de cada um.

4. Foto e festa (10 min). Reúna a turma na frente do banner da Santos Tech, cada um segurando o seu personagem impresso, e tire a foto, deixando as famílias fotografarem junto. Conduza uma rodada rápida em que cada aluno diz uma coisa de que mais se orgulha. Encerre com uma grande salva de palmas comemorando o projeto do jogo concluído.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, use a ideia de lançamento de jogo: "Hoje você não é só quem fez o jogo, você é quem apresenta o seu lançamento, como num grande evento de games." Trate a Demo como um trailer: "Mostre o melhor em pouco tempo, sem precisar jogar a fase inteira." Para o momento mais marcante, use a frase do digital ao físico: "O personagem que você modelou no Maya está agora aqui, de pé, na sua mão." Incentive um pitch curto: "Em três frases, conta o que é o jogo e como o personagem saiu da tela." Fale frases diretas, demonstre você primeiro e valorize tanto o jogo quanto a impressão, mesmo com pequenos defeitos. Trate o conjunto como um portfólio: "Tudo isso prova o que você já sabe fazer."

## Erros comuns e como ajudar

- Nervosismo ou medo do palco: nunca force. Ofereça apresentar em dupla, sentado, ou só jogar enquanto você narra. Elogie a coragem de subir.
- Querer jogar o jogo inteiro: combine antes que a Demo é um trailer; oriente a mostrar só a melhor parte e clicar em Stop quando terminar.
- O jogo não roda na hora: tenha o projeto já aberto; se travar, clique em Stop e depois Play de novo, ou conte a ideia do jogo enquanto resolve. O momento do aluno é o que importa.
- Confundir qual modelo impresso é de quem: use plaquinhas de nome na bancada e organize os personagens por aluno antes da aula.
- Aluno que diz que a impressão ficou "feia": valorize o esforço e a jornada, não a perfeição. Lembre que ir do modelo digital ao objeto real é a maior conquista do mês.`,
  exercicios: [
    {
      titulo: `Montando a exposição da turma`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Antes de as famílias se acomodarem, conduza a turma na montagem da bancada de exposição. Cada aluno posiciona o seu personagem impresso de pé, coloca a plaquinha com o nome ao lado e abre, no computador, o jogo no Roblox Studio deixando o botão Play à vista. Circule conferindo se cada modelo está estável e se o jogo abre. Aproveite para combinar a ordem de apresentação e relembrar as regras de plateia. O objetivo é ter o palco e a vitrine prontos antes de o público chegar.`,
      atividade: `1. Pegue o seu personagem impresso e coloque-o de pé na bancada de exposição.
2. Posicione a plaquinha com o seu nome ao lado do modelo.
3. No computador, abra o seu jogo no Roblox Studio e deixe o botão Play visível.
4. Confira se o personagem na tela é o mesmo que está impresso na sua mesa.`,
      gabarito: `Acertou quem deixa o próprio espaço pronto: o personagem impresso de pé, a plaquinha de nome no lugar e o jogo aberto no Roblox Studio com o Play à vista. Exemplo de sucesso: o aluno mostra que o personagem na tela corresponde ao modelo impresso na bancada. Pequenos ajustes com ajuda do professor contam como acerto. O objetivo é ter a exposição e o jogo prontos antes da plateia chegar.`,
    },
    {
      titulo: `O professor abre a apresentação`,
      tipo: `Demonstração guiada`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o formato da Demo usando um jogo de exemplo, na frente de todos. No Roblox Studio, clique no botão Play e jogue cerca de dez segundos. Aponte um personagem na tela e levante o modelo impresso correspondente. Se quiser, abra o Bambu Studio, clique na aba Preview, no topo, e arraste a barra de camadas para mostrar a impressão subindo camada por camada. Faça devagar e narre cada passo. Convide os alunos a repararem no que você fez bem para repetirem na vez deles.`,
      atividade: `1. Assista o professor rodar o jogo de exemplo clicando em Play no Roblox Studio.
2. Repare como ele joga só um pouquinho, aponta o personagem e levanta o modelo impresso.
3. Observe, se mostrado, a barra de camadas do Bambu Studio na aba Preview.
4. Diga uma coisa que o professor fez bem e que você vai imitar.`,
      gabarito: `Acertou quem observa a demonstração e aponta pelo menos uma atitude correta do professor. Exemplos de respostas certas: "Ele clicou em Play e jogou só um pouco", "Ele apontou o personagem e levantou o impresso", "Ele mostrou as camadas no Bambu Studio". Reconhecer um único comportamento já conta como sucesso. O objetivo é dar ao aluno um modelo claro de como conduzir a sua própria Demo.`,
    },
    {
      titulo: `Ensaio do pitch em dupla`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que cada aluno ensaie o seu pitch para o colega antes de ir ao palco. Um apresenta em até um minuto: roda o jogo no Roblox Studio com o botão Play, joga uma partida curta, levanta o personagem impresso e conta em três frases o que é o jogo e como o personagem foi do modelo no Maya à impressão. O colega ouve e dá uma dica gentil (falar mais alto, mostrar melhor o modelo, encurtar). Depois trocam. Circule reforçando que o pitch é curto, como um trailer, e ajudando quem travar a escolher a melhor parte do jogo.`,
      atividade: `1. Em dupla, decidam quem apresenta primeiro.
2. Quem apresenta: rode o jogo com Play, jogue pouco e levante o personagem impresso.
3. Conte em três frases o que é o jogo e como o personagem saiu da tela.
4. O colega dá uma dica boa; depois troquem de lugar e repitam.`,
      gabarito: `Acertou a dupla em que os dois conseguem fazer um pitch curto e dar ao menos uma dica útil ao colega. Exemplo de sucesso: o aluno roda o jogo, joga uma partida breve, levanta o modelo impresso e resume o projeto em poucas frases; o colega sugere algo como "fala um pouco mais alto" ou "mostra melhor o personagem". Ensaio com pequenas falhas conta, pois o objetivo é justamente treinar. O foco é deixar cada um seguro e com a fala curta antes do palco.`,
    },
    {
      titulo: `Apresentação final: jogo na tela, personagem na mão`,
      tipo: `Desafio`,
      tempo: `20 min`,
      guiaProfessor: `Este é o ponto alto do mês. Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo do Lucas!". Ajude cada um a clicar em Play no Roblox Studio e a rodar o jogo. Peça que joguem uma partida curta, façam o pitch em poucas frases e levantem o personagem impresso, contando a jornada do digital ao físico: modelo no Maya, ajuste, fatiamento e impressão no Bambu Studio. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Puxe os aplausos ao fim de cada um e nunca aponte erros diante da plateia.`,
      atividade: `1. Espere o professor chamar o seu nome e vá até a frente.
2. Rode o seu jogo clicando em Play no Roblox Studio e jogue uma partida curta.
3. Aponte um personagem na tela e levante o mesmo personagem impresso na sua mão.
4. Conte em poucas frases como ele foi do modelo até a impressão e receba os aplausos.`,
      gabarito: `Acertou todo aluno que sobe ao palco e apresenta a sua Demo em qualquer nível: sozinho, em dupla, jogando muito ou pouco, com uma fala longa ou uma só frase. Exemplo de sucesso: o aluno roda o jogo, mostra um personagem na tela, levanta o modelo impresso correspondente e diz como ele virou objeto real, recebendo aplausos. Não há resposta errada nem nota; o objetivo é a coragem de apresentar o projeto e a narrativa do digital ao físico. Cada participação merece a mesma celebração.`,
    },
    {
      titulo: `Foto da turma e celebração do projeto`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche o mês com chave de ouro. Reúna a turma em roda e conduza uma conversa rápida: cada aluno diz uma coisa de que mais se orgulha neste projeto de impressão 3D. Em seguida, junte a turma na frente do banner da Santos Tech, cada um segurando o seu personagem impresso, e tire a foto, convidando as famílias a fotografarem também. Relembre, animado, o caminho do mês: resgate dos modelos no Maya, preparo e fatiamento no Bambu Studio, impressão, limpeza e montagem. Encerre com uma grande salva de palmas e adiante que os próximos projetos do ano (o site e o Python) vêm a seguir.`,
      atividade: `1. Na roda, diga uma coisa que você aprendeu ou de que mais se orgulha neste projeto.
2. Junte-se à turma para a foto, segurando o seu personagem impresso, na frente do banner.
3. Ouça o professor relembrar o caminho do Maya até a impressão no Bambu Studio.
4. Bata uma grande palma por você, pelos colegas e pelo projeto do jogo concluído.`,
      gabarito: `Acertou quem participa da roda dizendo algo que aprendeu e entra na foto da celebração. Exemplos de respostas certas: "Aprendi a usar o Bambu Studio", "Consegui transformar o meu personagem em um modelo impresso", "Aprendi a tirar os suportes e dar acabamento". Qualquer participação, até uma frase curta ou um sorriso na foto, conta como sucesso. O objetivo é encerrar o projeto celebrando o crescimento de cada aluno e a jornada que foi do modelo na tela ao personagem na mão.`,
    },
  ],
};
