import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Demo Day e certificado do Ano 1",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno apresenta a Demo final do Ano 1 com o jogo 2D rodando e os personagens impressos em 3D expostos na mesa, recebendo o certificado do Ano 1 e celebrando a jornada que foi do desenho digital ao objeto real na mão.`,
  descricao: `Chegou o dia mais esperado do Ano 1: o Demo Day. Ao longo de doze meses, cada aluno modelou em 3D no MagicaVoxel, no Maya e no Blender, desenhou e animou em pixel art no Aseprite, montou um jogo 2D completo no Construct 3 e, neste último mês, transformou os personagens do próprio jogo em modelos impressos de verdade no Bambu Studio. Hoje todo esse percurso se junta numa única apresentação: o jogo aparece na tela rodando e, ao lado, os personagens saem da tela e ficam de pé sobre a mesa, em plástico, prontos para pegar na mão.

Esta aula é, antes de tudo, uma grande celebração. Não há botão novo para aprender nem fatiamento para fazer: tudo foi preparado nas aulas anteriores e nesta o aluno sobe ao palco para mostrar o que construiu. Cada um abre o jogo no projetor, joga uma partida curta, aponta o personagem na tela e levanta o mesmo personagem impresso, contando a história de como aquele desenho virou voxel, virou modelo 3D, virou suporte, fatiamento, impressão, remoção de suporte e acabamento. Para adolescentes de 10 a 15 anos, apresentar um projeto inteiro de um ano para a turma, para os colegas e para as famílias é um marco enorme de orgulho e merece holofote.

O papel do professor hoje é de mestre de cerimônias e curador da exposição. Você organiza a "bancada de exposição" onde os personagens impressos ficam à vista, prepara o projetor para o jogo, conduz a ordem das apresentações e fica por perto para resolver qualquer travada técnica. Você também ajuda quem está nervoso a respirar, encurtar a fala ou apresentar em dupla. O foco é o sentimento de conquista e a narrativa do digital ao físico, não a perfeição da impressão nem do código.

Ao final das apresentações vem o ponto alto: a entrega do certificado do Ano 1 a cada aluno, a foto da turma com os personagens impressos na mão e a comemoração de tudo o que foi aprendido. É a hora de olhar para trás e perceber o salto de cada um — de quem nunca tinha aberto um programa de modelagem a quem agora cria um jogo e imprime os próprios personagens — e celebrar juntos o fechamento do primeiro ano da trilha.`,
  materiais: [
    `Computadores ligados, com o Construct 3 aberto no jogo final de cada aluno e o Bambu Studio aberto no projeto fatiado do personagem, prontos para mostrar a tela do fatiamento se alguém pedir.`,
    `Projetor ou TV grande, conectado e testado antes da aula, para a turma e as famílias verem o jogo rodando e a tela do Bambu Studio com nitidez.`,
    `Bancada ou mesa de exposição, coberta com um tecido ou cartolina, onde os personagens impressos de cada aluno ficam de pé com uma plaquinha de nome ao lado.`,
    `Os personagens impressos em 3D de cada aluno, já com suportes removidos e acabamento feito nas aulas anteriores, organizados por aluno para ninguém se perder.`,
    `Certificados do Ano 1 impressos e assinados, um por aluno, com o nome conferido letra por letra antes da aula.`,
    `Câmera ou celular carregado e com memória livre para a foto da turma, mais um banner ou cartaz da Santos Tech ao fundo para a foto ficar bonita.`,
    `Lista com a ordem de apresentação dos alunos e, se possível, um lanche para a confraternização final com as famílias.`,
  ],
  conceitosChave: [
    `Demo Day — o dia de apresentar ao vivo, com orgulho, o projeto que você construiu durante o Ano 1 inteiro.`,
    `Demo — a apresentação curta e bem ensaiada que mostra o melhor do projeto: o jogo rodando e os personagens impressos.`,
    `Do digital ao físico — a jornada de transformar um desenho na tela em um objeto de plástico que você segura na mão.`,
    `Exposição (showcase) — a mesa onde os modelos impressos ficam expostos para todos verem e pegarem com cuidado.`,
    `Pitch — a fala rápida em que você conta, em poucas frases, o que é o seu jogo e como o personagem saiu da tela.`,
    `Certificado do Ano 1 — o documento que comprova que você concluiu o primeiro ano da trilha de criação de games e tecnologia.`,
    `Portfólio — o conjunto do que você criou no ano (jogo, pixel art, modelos 3D e impressões), que prova o que você já sabe fazer.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhuma ferramenta nova: o jogo já está pronto no Construct 3, os personagens já foram fatiados no Bambu Studio, impressos, limpos e finalizados nas aulas anteriores. A aula é de CELEBRAÇÃO e de palco. Seu trabalho é conduzir um pequeno evento — o Demo Day — em que cada aluno apresenta a Demo final: o jogo rodando na tela e os personagens impressos expostos ao lado. O clima do dia é festivo, acolhedor e sem cobrança. Ninguém é avaliado por bug no jogo ou imperfeição na impressão; cada aluno é celebrado por ter ido do desenho ao objeto real.

Tecnicamente, você só precisa saber abrir o jogo e, se for o caso, mostrar a tela do fatiamento. No Construct 3, com o projeto aberto, clique no botão Preview (o triângulo de "play", no canto superior direito da barra de ferramentas) ou pressione o atalho F5 para o jogo rodar em tela cheia no navegador; pressione F11 para deixar o navegador em tela cheia e Esc para sair. No Bambu Studio, se um aluno quiser mostrar como o personagem foi preparado, abra o projeto salvo (menu File, depois Open Project, ou Ctrl+O), clique na aba Preview, no topo, e arraste a barra de camadas na lateral para mostrar a impressão sendo "construída" camada por camada. Teste tudo isso antes da aula e confira o projetor.

Antes de as famílias chegarem, monte o cenário: a bancada de exposição com os personagens impressos de pé e plaquinhas de nome, o projetor testado, os certificados em ordem alfabética, a câmera carregada e a lista de apresentação na mão. Deixe cada jogo já aberto ou fácil de localizar, para não procurar arquivo na frente de todos.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Bambu Studio)

1. Acolhimento e montagem da exposição (10 min). Receba a turma e as famílias e acomode a plateia. Com os alunos, monte juntos a bancada: cada um posiciona o seu personagem impresso e a plaquinha de nome. Combine as regras de plateia (silêncio durante a fala do colega, palmas no fim) e tranquilize quem estiver nervoso.

2. Demonstração guiada do formato (15 min). Mostre você mesmo como será cada Demo, usando um projeto de exemplo. No Construct 3, clique em Preview (F5) e jogue dez segundos. Aponte um personagem na tela e levante o modelo impresso correspondente da bancada. Se quiser, abra o Bambu Studio, clique na aba Preview e arraste a barra de camadas para mostrar a impressão subindo. Diga a frase de ouro: "Eu jogo um pouquinho, aponto o personagem na tela e mostro ele aqui na minha mão."

3. Mão na massa: o Demo Day (25 min). Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo da Júlia!". Ajude cada um a clicar em Preview e a rodar o jogo. Peça que joguem uma partida curta, façam o pitch em poucas frases e levantem o personagem impresso, contando como ele foi do MagicaVoxel ao Blender, ao fatiamento e à impressão. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Puxe os aplausos ao fim de cada um.

4. Certificado, foto e festa (10 min). Entregue o certificado do Ano 1 a cada aluno, chamando um a um e parabenizando. Reúna a turma na frente do banner da Santos Tech, cada um segurando o seu personagem impresso, e tire a foto, deixando as famílias fotografarem junto. Encerre com uma grande salva de palmas comemorando o ano inteiro.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, use a ideia de lançamento de produto: "Hoje você não é só quem fez o jogo, você é quem apresenta o seu lançamento, como num evento de games." Trate a Demo como um trailer: "Mostre o melhor em pouco tempo, sem precisar jogar a fase inteira." Para o momento mais marcante, use a frase do digital ao físico: "O personagem que você desenhou na tela está agora aqui, de pé, na sua mão." Incentive um pitch curto: "Em três frases, conta o que é o jogo e como o personagem saiu da tela." Fale frases diretas, demonstre você primeiro e valorize tanto o jogo quanto a impressão, mesmo com pequenos defeitos. Trate o certificado como o fechamento de um ano de portfólio.

## Erros comuns e como ajudar

- Nervosismo ou medo do palco: nunca force. Ofereça apresentar em dupla, sentado, ou só jogar enquanto você narra. Elogie a coragem de subir.
- Querer jogar o jogo inteiro: combine antes que a Demo é um trailer; oriente a mostrar só a melhor parte e cortar com o atalho Esc.
- O jogo não roda na hora: tenha o projeto já aberto; se travar, peça para recarregar com F5 ou conte a ideia do jogo enquanto resolve. O momento do aluno é o que importa.
- Confundir qual modelo impresso é de quem: use plaquinhas de nome na bancada e organize os personagens por aluno antes da aula.
- Nome errado no certificado ou aluno esquecido: confira a lista e todos os certificados antes de começar; ninguém pode ficar sem o seu.`,
  exercicios: [
    {
      titulo: `Montando a exposição da turma`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Antes de as famílias se acomodarem, conduza a turma na montagem da bancada de exposição. Cada aluno posiciona o seu personagem impresso de pé, coloca a plaquinha com o nome ao lado e abre, no computador, o jogo no Construct 3 deixando o botão Preview à vista. Circule conferindo se cada modelo está estável e se o jogo abre. Aproveite para combinar a ordem de apresentação e relembrar as regras de plateia. O objetivo é ter o palco e a vitrine prontos antes de o público chegar.`,
      atividade: `1. Pegue o seu personagem impresso e coloque-o de pé na bancada de exposição.
2. Posicione a plaquinha com o seu nome ao lado do modelo.
3. No computador, abra o seu jogo no Construct 3 e deixe o botão Preview visível.
4. Confira se o personagem na tela é o mesmo que está impresso na sua mesa.`,
      gabarito: `Acertou quem deixa o próprio espaço pronto: o personagem impresso de pé, a plaquinha de nome no lugar e o jogo aberto no Construct 3 com o Preview à vista. Exemplo de sucesso: o aluno mostra que o personagem na tela corresponde ao modelo impresso na bancada. Pequenos ajustes com ajuda do professor contam como acerto. O objetivo é ter a exposição e o jogo prontos antes da plateia chegar.`,
    },
    {
      titulo: `O professor abre o Demo Day`,
      tipo: `Demonstração guiada`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o formato da Demo usando um projeto de exemplo, na frente de todos. No Construct 3, clique no botão Preview (ou pressione F5) e jogue cerca de dez segundos. Aponte um personagem na tela e levante o modelo impresso correspondente. Se quiser, abra o Bambu Studio, clique na aba Preview, no topo, e arraste a barra de camadas para mostrar a impressão subindo camada por camada. Faça devagar e narre cada passo. Convide os alunos a repararem no que você fez bem para repetirem na vez deles.`,
      atividade: `1. Assista o professor rodar o jogo de exemplo clicando em Preview no Construct 3.
2. Repare como ele joga só um pouquinho, aponta o personagem e levanta o modelo impresso.
3. Observe, se mostrado, a barra de camadas do Bambu Studio na aba Preview.
4. Diga uma coisa que o professor fez bem e que você vai imitar.`,
      gabarito: `Acertou quem observa a demonstração e aponta pelo menos uma atitude correta do professor. Exemplos de respostas certas: "Ele clicou em Preview e jogou só um pouco", "Ele apontou o personagem e levantou o impresso", "Ele mostrou as camadas no Bambu Studio". Reconhecer um único comportamento já conta como sucesso. O objetivo é dar ao aluno um modelo claro de como conduzir a sua própria Demo.`,
    },
    {
      titulo: `Ensaio do pitch em dupla`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que cada aluno ensaie o seu pitch para o colega antes de ir ao palco. Um apresenta em até um minuto: roda o jogo no Construct 3 com Preview, joga uma partida curta, levanta o personagem impresso e conta em três frases o que é o jogo e como o personagem foi do desenho à impressão. O colega ouve e dá uma dica gentil (falar mais alto, mostrar melhor o modelo, encurtar). Depois trocam. Circule reforçando que o pitch é curto, como um trailer, e ajudando quem travar a escolher a melhor parte do jogo.`,
      atividade: `1. Em dupla, decidam quem apresenta primeiro.
2. Quem apresenta: rode o jogo com Preview, jogue pouco e levante o personagem impresso.
3. Conte em três frases o que é o jogo e como o personagem saiu da tela.
4. O colega dá uma dica boa; depois troquem de lugar e repitam.`,
      gabarito: `Acertou a dupla em que os dois conseguem fazer um pitch curto e dar ao menos uma dica útil ao colega. Exemplo de sucesso: o aluno roda o jogo, joga uma partida breve, levanta o modelo impresso e resume o projeto em poucas frases; o colega sugere algo como "fala um pouco mais alto" ou "mostra melhor o personagem". Ensaio com pequenas falhas conta, pois o objetivo é justamente treinar. O foco é deixar cada um seguro e com a fala curta antes do palco.`,
    },
    {
      titulo: `Demo Day: jogo na tela, personagem na mão`,
      tipo: `Desafio`,
      tempo: `20 min`,
      guiaProfessor: `Este é o ponto alto do ano. Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo do Lucas!". Ajude cada um a clicar em Preview (ou F5) no Construct 3 e a rodar o jogo. Peça que joguem uma partida curta, façam o pitch em poucas frases e levantem o personagem impresso, contando a jornada do digital ao físico: desenho, voxel, modelo 3D, fatiamento e impressão. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Puxe os aplausos ao fim de cada um e nunca aponte erros diante da plateia.`,
      atividade: `1. Espere o professor chamar o seu nome e vá até a frente.
2. Rode o seu jogo clicando em Preview no Construct 3 e jogue uma partida curta.
3. Aponte um personagem na tela e levante o mesmo personagem impresso na sua mão.
4. Conte em poucas frases como ele foi do desenho até a impressão e receba os aplausos.`,
      gabarito: `Acertou todo aluno que sobe ao palco e apresenta a sua Demo em qualquer nível: sozinho, em dupla, jogando muito ou pouco, com uma fala longa ou uma só frase. Exemplo de sucesso: o aluno roda o jogo, mostra um personagem na tela, levanta o modelo impresso correspondente e diz como ele virou objeto real, recebendo aplausos. Não há resposta errada nem nota; o objetivo é a coragem de apresentar o projeto do ano e a narrativa do digital ao físico. Cada participação merece a mesma celebração.`,
    },
    {
      titulo: `Certificado do Ano 1, foto e celebração`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche o Ano 1 com chave de ouro. Reúna a turma em roda e conduza uma conversa rápida: cada aluno diz uma coisa de que mais se orgulha no ano. Em seguida, chame um a um para receber o certificado do Ano 1, parabenizando pelo nome, sem deixar ninguém de fora. Junte a turma na frente do banner da Santos Tech, cada um segurando o seu personagem impresso, e tire a foto, convidando as famílias a fotografarem também. Relembre, animado, o caminho do ano: modelagem 3D, pixel art, jogo no Construct 3 e impressão dos personagens. Encerre com uma grande salva de palmas.`,
      atividade: `1. Na roda, diga uma coisa que você aprendeu ou de que mais se orgulha neste ano.
2. Quando o professor chamar o seu nome, vá receber o seu certificado do Ano 1.
3. Junte-se à turma para a foto, segurando o seu personagem impresso, na frente do banner.
4. Bata uma grande palma por você, pelos colegas e pela jornada do ano inteiro.`,
      gabarito: `Acertou quem participa da roda dizendo algo que aprendeu e recebe o certificado junto da celebração. Exemplos de respostas certas: "Aprendi a modelar no Blender", "Consegui transformar o meu personagem em um modelo impresso", "Terminei o meu jogo no Construct 3". Qualquer participação, até uma frase curta ou um sorriso na foto, conta como sucesso. O objetivo é encerrar o Ano 1 celebrando o crescimento de cada aluno e a jornada que foi do desenho na tela ao personagem na mão.`,
    },
  ],
};
