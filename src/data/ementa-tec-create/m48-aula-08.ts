import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Demo Day Final e Certificado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno apresenta ao público o jogo final feito na Unreal Engine com C++, joga a build empacotada com a turma e recebe o certificado que fecha toda a trilha de games e tecnologia.`,
  descricao: `Este é o último dia da trilha inteira. Ao longo de quatro anos, cada aluno saiu do desenho e do código mais simples para chegar a um portfólio de verdade: uma experiência em Realidade Virtual no Unity com C#, um jogo no Unity com assets modelados no Blender e, neste Ano 4, um jogo completo na Unreal Engine programado em C++, com assets feitos no Maya. Nas semanas anteriores deste mês, o jogo ganhou mecânicas em Blueprints e em C++, materiais e texturas, iluminação e efeitos, ajuste de jogabilidade e áudio, foi empacotado numa build executável e teve a apresentação e o portfólio preparados. Hoje tudo isso vira um único momento: o Demo Day final.

A aula é, antes de tudo, uma grande celebração. Não há recurso novo da Unreal para aprender nem código novo para escrever: a build já está empacotada e testada, a apresentação já foi ensaiada e o portfólio já está organizado. Cada aluno sobe ao palco como criador, abre a própria build do jogo no projetor, joga uma partida curta diante da turma e das famílias, mostra os trechos de código C++ que dão vida às mecânicas e conta a jornada de quatro anos até aqui. Para adolescentes de 10 a 15 anos, apresentar um jogo inteiro feito numa engine profissional, com a própria programação por trás, é um marco enorme de orgulho e merece holofote.

O papel do professor hoje é de mestre de cerimônias e curador. Você prepara o projetor, organiza a pasta de cada build executável para abrir rápido, conduz a ordem das apresentações e fica por perto para resolver qualquer travada técnica. Você também acolhe quem está nervoso, ajuda a encurtar a fala, sugere apresentar em dupla e garante que cada aluno tenha o seu momento de palco. O foco é o sentimento de conquista e a narrativa do percurso, não a perfeição do jogo nem a ausência de bugs.

Ao final das apresentações vem o ponto alto: a entrega do certificado da trilha a cada aluno, a foto da turma e a roda de conversa sobre o portfólio completo de games e os próximos passos na tecnologia. É a hora de olhar para trás e perceber o salto de cada um, de quem mal sabia abrir um programa a quem agora cria um jogo em C++ na Unreal Engine, e de olhar para frente, conversando sobre como continuar criando games, estudando programação e construindo o próprio caminho na tecnologia.`,
  materiais: [
    `Computadores ligados, com a build final empacotada de cada aluno (a pasta com o arquivo executável .exe gerado na aula de empacotamento) pronta para abrir, e o projeto da Unreal Engine acessível caso alguém queira mostrar o código C++.`,
    `Projetor ou TV grande, conectado e testado antes da aula, para a turma e as famílias verem o jogo rodando e os trechos de código com nitidez.`,
    `Oculos VR carregado e higienizado, disponível para quem quiser relembrar e mostrar rapidamente a experiência em Realidade Virtual feita no Ano 4, complementando o portfólio.`,
    `Os arquivos do portfólio de cada aluno reunidos numa pasta: a build do jogo Unreal, capturas de tela, o vídeo curto de gameplay e os slides da apresentação preparados na aula anterior.`,
    `Certificados da trilha impressos e assinados, um por aluno, com o nome conferido letra por letra antes da aula.`,
    `Câmera ou celular carregado e com memória livre para a foto da turma, mais um banner ou cartaz da Santos Tech ao fundo.`,
    `Lista com a ordem de apresentação e, se possível, um lanche para a confraternização final com as famílias.`,
  ],
  conceitosChave: [
    `Demo Day — o dia de apresentar ao vivo, com orgulho, o jogo final que você construiu, fechando a trilha diante do público.`,
    `Build — a versão empacotada do jogo, num arquivo executável que roda sozinho no computador, sem precisar abrir a Unreal Engine.`,
    `Pitch — a fala rápida em que você conta, em poucas frases, o que é o seu jogo, como se joga e o que você programou em C++.`,
    `Portfólio — o conjunto de tudo o que você criou na trilha: a experiência em VR, o jogo no Unity e o jogo final na Unreal Engine.`,
    `Gameplay — o momento de jogar a build na frente de todos, mostrando as mecânicas funcionando de verdade.`,
    `Certificado da trilha — o documento que comprova que você concluiu os quatro anos de criação de games e tecnologia.`,
    `Próximos passos — as ideias do que estudar e criar depois da trilha para continuar crescendo como criador de jogos e na tecnologia.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhum recurso novo da Unreal Engine nem escreve código novo: o jogo já está empacotado numa build executável, a apresentação já foi ensaiada e o portfólio já está organizado nas aulas anteriores. A aula é de CELEBRAÇÃO e de palco. Seu trabalho é conduzir um pequeno evento, o Demo Day final, em que cada aluno apresenta o jogo feito na Unreal Engine com C++ e recebe o certificado da trilha. O clima do dia é festivo, acolhedor e sem cobrança: ninguém é avaliado por bug no jogo ou por uma fala tímida. Cada aluno é celebrado por ter chegado, em quatro anos, a um portfólio de jogos de verdade.

Tecnicamente, você só precisa saber abrir a build e, se for o caso, mostrar o código. Para rodar o jogo empacotado, abra a pasta da build no Windows, encontre o arquivo com final .exe (o nome do jogo do aluno) e dê dois cliques nele; o jogo abre direto, sem precisar da Unreal. Para sair de tela cheia ou fechar, use Alt+F4 ou o atalho de pausa do próprio jogo. Se um aluno quiser mostrar o código, abra o projeto na Unreal Engine e, na janela do editor de código (Visual Studio ou Rider, conforme o computador), abra um arquivo .cpp da mecânica. Teste a build de cada aluno antes da aula e confira o projetor.

Antes de as famílias chegarem, monte o cenário: o projetor testado, a pasta da build de cada aluno aberta ou fácil de localizar, os certificados em ordem alfabética, a câmera carregada e a lista de apresentação na mão. Deixe cada jogo pronto para abrir com dois cliques, para não procurar arquivo na frente de todos.

## Passo a passo da aula (ritmo 10/15/25/10, com o codigo exato)

1. Acolhimento e preparação (10 min). Receba a turma e as famílias e acomode a plateia. Com os alunos, confira juntos que cada build abre: localize a pasta, ache o arquivo .exe e teste um clique duplo. Combine as regras de plateia (silêncio durante a fala do colega, palmas no fim) e tranquilize quem estiver nervoso.

2. Demonstração guiada do formato (15 min). Mostre você mesmo como será cada Demo, usando um projeto de exemplo. Dê dois cliques no .exe da build, jogue cerca de quinze segundos e narre o que está acontecendo. Depois abra um arquivo de código C++ no projeto e aponte um trecho simples, explicando o que ele faz. Exemplo de trecho de mecânica de pulo que você pode mostrar: void AMeuPersonagem::Pular() { LaunchCharacter(FVector(0.0f, 0.0f, ForcaDoPulo), false, true); } e diga: "Esta função empurra o personagem para cima com a força do pulo." Diga a frase de ouro: "Eu jogo um pouquinho, conto o que é o jogo e mostro um pedaço do código que fiz."

3. Mão na massa: o Demo Day final (25 min). Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo da Júlia!". Ajude cada um a abrir a build com dois cliques no .exe. Peça que joguem uma partida curta, façam o pitch em poucas frases e, se quiserem, mostrem um trecho do código C++ contando o que ele faz. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Quem quiser pode também colocar o colega para experimentar rapidamente o oculos VR da experiência do Ano 4. Puxe os aplausos ao fim de cada um.

4. Certificado, foto e festa (10 min). Reúna a turma em roda e peça que cada um diga uma coisa de que mais se orgulha na trilha e um próximo passo na tecnologia. Entregue o certificado da trilha a cada aluno, chamando um a um e parabenizando. Junte a turma na frente do banner da Santos Tech para a foto e encerre com uma grande salva de palmas, celebrando os quatro anos.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, use a ideia de lançamento de jogo: "Hoje você não é só quem programou o jogo, você é o estúdio que lança o seu título, como num evento de games." Trate a Demo como um trailer: "Mostre o melhor em pouco tempo, sem jogar a fase inteira." Para o código, fale com naturalidade: "Mostra uma função que você escreveu e conta, numa frase, o que ela faz." Para o momento mais marcante, use a narrativa da trilha: "Há quatro anos você começou do zero; hoje você fez um jogo numa engine profissional, em C++." Incentive um pitch curto: "Em três frases, conta o que é o jogo, como se joga e algo que você programou." Demonstre você primeiro, fale frases diretas e valorize tanto o jogo quanto a coragem de apresentar, mesmo com pequenos bugs.

## Erros comuns e como ajudar

- Nervosismo ou medo do palco: nunca force. Ofereça apresentar em dupla, sentado, ou só jogar enquanto você narra. Elogie a coragem de subir.
- Querer jogar o jogo inteiro: combine antes que a Demo é um trailer; oriente a mostrar só a melhor parte e fechar com Alt+F4.
- A build não abre na hora: tenha a pasta já localizada e o .exe testado; se travar, peça para fechar e abrir de novo, ou conte a ideia do jogo enquanto resolve. O momento do aluno é o que importa.
- Travar ao explicar o código: combine que basta apontar uma função e dizer uma frase do que ela faz; ninguém precisa explicar o programa inteiro.
- Nome errado no certificado ou aluno esquecido: confira a lista e todos os certificados antes de começar; ninguém pode ficar sem o seu.`,
  exercicios: [
    {
      titulo: `Preparando a sua build para o palco`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Antes de as famílias se acomodarem, conduza a turma na conferência das builds. Cada aluno localiza a pasta da própria build, encontra o arquivo com final .exe e dá dois cliques para confirmar que o jogo abre. Circule conferindo se cada build roda e ajude quem não encontrar o arquivo. Aproveite para combinar a ordem de apresentação e relembrar as regras de plateia. O objetivo é ter cada jogo pronto para abrir com dois cliques antes de o público chegar.`,
      atividade: `1. Abra a pasta onde está a build empacotada do seu jogo.
2. Encontre o arquivo cujo nome termina em .exe, com o nome do seu jogo.
3. Dê dois cliques nele e confirme que o jogo abre na tela.
4. Feche o jogo com Alt+F4 e deixe a pasta pronta para abrir de novo na hora da sua vez.`,
      gabarito: `Acertou quem deixa a própria build pronta: a pasta localizada, o arquivo .exe identificado e o jogo abrindo com dois cliques. Exemplo de sucesso: o aluno dá dois cliques no executável, o jogo aparece na tela e ele consegue fechar com Alt+F4. Pequenos ajustes com ajuda do professor, como achar a pasta certa, contam como acerto. O objetivo é garantir que cada jogo abra rápido no momento da apresentação, sem procurar arquivo na frente de todos.`,
    },
    {
      titulo: `O professor abre o Demo Day`,
      tipo: `Demonstração guiada`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o formato da Demo usando um projeto de exemplo, na frente de todos. Dê dois cliques no .exe da build de exemplo, jogue cerca de quinze segundos e narre o que está acontecendo. Depois abra um arquivo de código C++ e aponte um trecho simples. Use como exemplo a função void AMeuPersonagem::Pular() { LaunchCharacter(FVector(0.0f, 0.0f, ForcaDoPulo), false, true); } e diga "esta função empurra o personagem para cima com a força do pulo". Faça devagar e narre cada passo. Convide os alunos a repararem no que você fez bem para repetirem na vez deles.`,
      atividade: `1. Assista o professor abrir o jogo de exemplo dando dois cliques no arquivo .exe.
2. Repare como ele joga só um pouquinho e conta o que é o jogo.
3. Observe quando ele aponta uma função no código C++ e diz, numa frase, o que ela faz.
4. Diga uma coisa que o professor fez bem e que você vai imitar na sua Demo.`,
      gabarito: `Acertou quem observa a demonstração e aponta pelo menos uma atitude correta do professor. Exemplos de respostas certas: "Ele abriu o jogo com dois cliques no .exe", "Ele jogou só um pouco e contou o que era o jogo", "Ele mostrou a função de pulo e disse o que ela fazia". Reconhecer um único comportamento já conta como sucesso. O objetivo é dar ao aluno um modelo claro de como conduzir a própria Demo, com jogo e código.`,
    },
    {
      titulo: `Ensaio do pitch em dupla`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que cada aluno ensaie o pitch para o colega antes de ir ao palco. Um apresenta em até um minuto: abre a build com dois cliques, joga uma partida curta, conta em três frases o que é o jogo e como se joga, e aponta uma função do código C++ dizendo o que ela faz. O colega ouve e dá uma dica gentil (falar mais alto, mostrar melhor a mecânica, encurtar). Depois trocam. Circule reforçando que o pitch é curto, como um trailer, e ajudando quem travar a escolher a melhor parte do jogo e a função mais simples de explicar.`,
      atividade: `1. Em dupla, decidam quem apresenta primeiro.
2. Quem apresenta: abra a build, jogue pouco e conte em três frases o que é o jogo.
3. Aponte uma função do código C++ e diga, numa frase, o que ela faz.
4. O colega dá uma dica boa; depois troquem de lugar e repitam.`,
      gabarito: `Acertou a dupla em que os dois conseguem fazer um pitch curto e dar ao menos uma dica útil ao colega. Exemplo de sucesso: o aluno abre a build, joga uma partida breve, resume o jogo em poucas frases e aponta uma função como void AMeuPersonagem::Pular() dizendo que ela faz o personagem pular; o colega sugere algo como "fala um pouco mais alto" ou "mostra melhor o pulo". Ensaio com pequenas falhas conta, pois o objetivo é treinar. O foco é deixar cada um seguro e com a fala curta antes do palco.`,
    },
    {
      titulo: `Demo Day final: jogo na tela e código na mão`,
      tipo: `Desafio`,
      tempo: `20 min`,
      guiaProfessor: `Este é o ponto alto da trilha inteira. Chame os alunos um a um pela lista, como apresentador: "Com vocês, o jogo do Lucas!". Ajude cada um a abrir a build com dois cliques no .exe. Peça que joguem uma partida curta, façam o pitch em poucas frases e, se quiserem, mostrem um trecho do código C++ contando o que ele faz, e contem a jornada dos quatro anos: VR no Unity, jogo no Unity com Blender e o jogo final na Unreal com C++ e Maya. Quem estiver tímido pode apresentar em dupla ou só jogar enquanto você narra. Puxe os aplausos ao fim de cada um e nunca aponte erros diante da plateia.`,
      atividade: `1. Espere o professor chamar o seu nome e vá até a frente.
2. Abra a sua build com dois cliques no .exe e jogue uma partida curta.
3. Conte em poucas frases o que é o jogo, como se joga e, se quiser, mostre uma função do código C++.
4. Conte a sua jornada de quatro anos na trilha e receba os aplausos.`,
      gabarito: `Acertou todo aluno que sobe ao palco e apresenta a sua Demo em qualquer nível: sozinho, em dupla, jogando muito ou pouco, mostrando ou não o código, com uma fala longa ou uma só frase. Exemplo de sucesso: o aluno abre a build, joga uma partida, conta o que é o jogo e aponta uma função em C++ dizendo o que ela faz, recebendo aplausos. Não há resposta errada nem nota; o objetivo é a coragem de apresentar o jogo final e a narrativa dos quatro anos até aqui. Cada participação merece a mesma celebração.`,
    },
    {
      titulo: `Certificado, portfólio e próximos passos`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche a trilha com chave de ouro. Reúna a turma em roda e conduza uma conversa rápida: cada aluno diz uma coisa de que mais se orgulha em todo o portfólio (a experiência em VR, o jogo no Unity ou o jogo final na Unreal) e um próximo passo que pretende dar na tecnologia. Em seguida, chame um a um para receber o certificado da trilha, parabenizando pelo nome, sem deixar ninguém de fora. Junte a turma na frente do banner da Santos Tech para a foto e convide as famílias a fotografarem também. Relembre, animado, o caminho dos quatro anos. Encerre com uma grande salva de palmas.`,
      atividade: `1. Na roda, diga uma coisa do seu portfólio de que mais se orgulha e um próximo passo na tecnologia.
2. Quando o professor chamar o seu nome, vá receber o seu certificado da trilha.
3. Junte-se à turma para a foto, na frente do banner da Santos Tech.
4. Bata uma grande palma por você, pelos colegas e pelos quatro anos de jornada.`,
      gabarito: `Acertou quem participa da roda dizendo algo do portfólio e um próximo passo, e recebe o certificado junto da celebração. Exemplos de respostas certas: "Tenho orgulho do meu jogo na Unreal feito em C++", "Quero continuar estudando programação de games", "Pretendo criar um jogo novo sozinho em casa". Qualquer participação, até uma frase curta ou um sorriso na foto, conta como sucesso. O objetivo é encerrar a trilha celebrando o crescimento de cada aluno, o portfólio completo de games e o entusiasmo com os próximos passos na tecnologia.`,
    },
  ],
};
