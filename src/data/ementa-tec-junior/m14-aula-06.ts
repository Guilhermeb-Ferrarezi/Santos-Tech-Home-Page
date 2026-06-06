import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Montando meu jogo com IA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança liga as classes da sua Teachable Machine aos blocos do Scratch, testa o mini-projeto do começo ao fim, conserta os erros que aparecem e deixa o jogo pronto para mostrar.`,
  descricao: `Esta é a aula em que tudo se encaixa. Nas semanas anteriores a turma treinou a Inteligência Artificial na Teachable Machine, aprendeu a conectar o modelo ao Scratch e desenhou no papel a ideia do mini-projeto. Hoje é a hora do mão na massa de verdade: cada criança abre o seu projeto e liga, bloco por bloco, cada classe que a IA reconhece a uma reação dentro do jogo. É o dia de ver a ideia ganhar vida na tela.

O coração da aula é a conexão entre dois mundos. De um lado está a Teachable Machine, que aprendeu a reconhecer gestos, sons ou imagens e devolve o nome da classe vencedora. Do outro está o Scratch, com os personagens, os movimentos e os sons do jogo. O bloco mágico que une os dois é o "quando o modelo reconhecer [classe]": é a ponte por onde a IA conversa com o jogo. Quando a criança encaixa a classe certa nesse bloco e escolhe a reação certa embaixo dele, o projeto começa a responder sozinho à câmera ou ao microfone.

Mas montar não é só encaixar blocos: é testar e consertar. Nesta idade, é raríssimo o projeto funcionar de primeira, e isso é ótimo, porque é testando que se vira criador de jogos de verdade. A criança vai ligar a câmera, mostrar um gesto, ver se o gato reage do jeito esperado e, quando não reagir, virar detetive para descobrir o que faltou. O professor é o guia paciente que ajuda a achar o bloco solto, a classe trocada ou a câmera desligada.

A aula termina com cada projeto rodando de ponta a ponta e com os toques finais que deixam tudo pronto para a apresentação das próximas aulas: um cenário escolhido, um som divertido, uma mensagem na tela. A criança sai com a sensação poderosa de que construiu algo que a IA controla e que funciona quando ela mostra para os colegas.`,
  materiais: [
    `Computadores com a Teachable Machine aberta no modelo de cada criança (já treinado nas aulas anteriores) e o Scratch aberto com o projeto do mini-projeto carregado.`,
    `Extensão da Teachable Machine já adicionada no Scratch de cada máquina, com os blocos do modelo aparecendo na coluna lateral.`,
    `Câmera e microfone funcionando em cada computador, testados antes da aula começar.`,
    `Projetor ou TV ligado na máquina do professor para mostrar cada bloco e cada clique com a turma olhando junto.`,
    `Um projeto de exemplo já pronto e funcionando, montado antes pelo professor, para servir de modelo do que a turma vai construir.`,
    `Lista impressa com o nome de cada criança e as classes do projeto dela (qual gesto ou som faz o quê), para consultar durante a montagem.`,
    `Checklist do projeto pronto, em papel, com itens simples para marcar: liguei a câmera, encaixei o bloco, testei e funcionou.`,
  ],
  conceitosChave: [
    `Classe — cada coisa que a sua IA aprendeu a reconhecer, como o gesto da mão aberta ou o som de palma.`,
    `Bloco "quando o modelo reconhecer" — a pecinha do Scratch que avisa o jogo na hora em que a IA vê a classe certa.`,
    `Conectar — encaixar a classe da IA num bloco do Scratch para que o jogo reaja sozinho.`,
    `Reação — o que o personagem faz quando a IA reconhece a classe, como pular, mudar de cor ou fazer um som.`,
    `Testar — ligar a câmera ou o microfone e conferir, mostrando o gesto, se o jogo responde do jeito certo.`,
    `Erro (bug) — quando algo não funciona como a gente queria; é normal e a gente conserta como detetive.`,
    `Toque final — o detalhe que deixa o projeto bonito e pronto para mostrar, como um cenário, um som ou uma mensagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula junta as duas ferramentas que a turma já conhece. A Teachable Machine é o site (teachablemachine.withgoogle.com) onde cada criança treinou um modelo com algumas classes — por exemplo "mão aberta", "mão fechada" e "nada". Esse modelo gera um link de modelo (um endereço que termina em uma combinação de letras) que já foi colado no Scratch nas aulas anteriores. No Scratch, ao adicionar a extensão da Teachable Machine pelo botão de blocos azul no canto inferior esquerdo, surgem blocos próprios do modelo, sendo o principal o bloco de evento "quando o modelo reconhecer [classe]". É esse bloco, em formato de chapéu, que dispara as ações.

A lógica é simples de explicar e de montar: cada classe da IA precisa de um bloco "quando o modelo reconhecer" próprio, e embaixo dele vão os blocos de reação (mover, tocar som, mudar fantasia, dizer algo). Antes de testar, a câmera precisa estar ligada — há um bloco "ligar câmera" ou um quadradinho de vídeo que deve estar ativo. Tenha o seu projeto de exemplo pronto e testado, porque demonstrar funcionando vale mais que mil explicações. Confira câmera e microfone de todas as máquinas antes de começar.

## Passo a passo da aula

Aquecimento e revisão (10 min): reúna a turma diante do projetor. Pergunte: quais classes a sua IA aprendeu? Abra o seu projeto de exemplo, ligue a câmera, mostre um gesto e deixe a turma ver o personagem reagir. Diga que hoje cada um vai deixar o próprio projeto funcionando assim, do começo ao fim.

Conteúdo novo guiado (15 min): com a turma olhando, mostre no Scratch a coluna de blocos da Teachable Machine. Arraste o bloco "quando o modelo reconhecer [classe]" para a área de programação. Clique na setinha do bloco e escolha uma classe (por exemplo, "mão aberta"). Embaixo dele encaixe uma reação, como "mude para a fantasia 2" ou "toque o som miau". Repita para uma segunda classe, devagar, narrando cada clique. Ligue a câmera e mostre funcionando.

Mão na massa (25 min): cada criança no seu computador. Acompanhe um por um. Para cada classe da lista impressa, a criança arrasta um bloco "quando o modelo reconhecer", escolhe a classe na setinha e encaixa embaixo a reação combinada no plano dela. Depois liga a câmera, mostra o gesto e confere se reage. Quando não funcionar, ajude a virar detetive: a classe está certa? O bloco está encaixado? A câmera está ligada? Marque o checklist a cada parte que funciona.

Desafio e compartilhar (10 min): cada criança adiciona um toque final ao projeto (um cenário, um som ou uma mensagem na tela) e mostra rapidinho para a turma o jogo reagindo à câmera. A turma bate palma a cada projeto que roda de ponta a ponta.

## Como explicar para crianças

Use a ideia de um interruptor de luz: o bloco "quando o modelo reconhecer" é como um interruptor que a sua mão liga; quando a IA vê o gesto, a luz acende e o personagem faz a ação. Diga que cada gesto precisa do seu próprio interruptor, então temos um bloco para cada classe. Outra analogia boa é a de um controle remoto: o seu gesto é o botão e o personagem é a televisão que obedece. Fale sempre no concreto: encaixa esse bloco aqui, escolhe o nome do gesto na setinha, põe a reação embaixo, liga a câmera e mostra. Evite palavras como modelo ou classe sozinhas; prefira o gesto que a IA aprendeu e o bloco que avisa o jogo.

## Erros comuns e como ajudar

O erro mais comum é esquecer de ligar a câmera: o projeto parece quebrado, mas é só ativar o vídeo. Outro clássico é escolher a classe errada na setinha do bloco, fazendo o gesto certo disparar a reação errada; confira sempre o nome dentro do bloco com a lista impressa. Muitas crianças deixam o bloco de reação solto, sem encaixar embaixo do bloco de chapéu; mostre que precisa ficar grudado como peça de quebra-cabeça. Às vezes a luz da câmera está fraca e a IA confunde os gestos; melhore a iluminação ou peça gestos bem nítidos. Se um projeto travar de vez, salve, recarregue a página do Scratch e ligue a câmera de novo, em vez de deixar a criança parada.`,
  exercicios: [
    {
      titulo: `Encaixando o primeiro interruptor`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como arrastar o bloco "quando o modelo reconhecer" e escolher a classe na setinha. Faça junto, bem devagar, e só então solte a turma. Passe de mesa em mesa garantindo que cada criança escolha a classe certa da lista impressa.`,
      atividade: `No seu Scratch, arraste o bloco "quando o modelo reconhecer" para a área de montar. Clique na setinha e escolha um dos gestos que a sua IA aprendeu. Você acabou de criar o primeiro interruptor do seu jogo.`,
      gabarito: `A criança acertou quando o bloco "quando o modelo reconhecer" está na área de programação com o nome de uma classe real do modelo dela escolhido na setinha. Confira que o nome no bloco bate com um gesto da lista impressa. Se bater, o interruptor está pronto.`,
    },
    {
      titulo: `Ligando o gesto à reação`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Relembre que embaixo do bloco de chapéu vai a reação do personagem. Mostre encaixando um bloco como "mude para a fantasia 2" ou "toque o som". Ajude cada criança a encaixar a peça até ficar grudada de verdade.`,
      atividade: `Embaixo do seu bloco de gesto, encaixe uma reação para o personagem: pular, mudar de fantasia, tocar um som ou dizer algo. Ligue a câmera, faça o gesto e veja se o personagem reage.`,
      gabarito: `Está certo quando há um bloco de reação grudado embaixo do bloco de chapéu e, ao fazer o gesto com a câmera ligada, o personagem executa essa reação. Se o gesto faz o personagem reagir, a conexão funcionou.`,
    },
    {
      titulo: `Detetive de erros`,
      tipo: `Resolução de problema`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente como missão de detetive. Quando um projeto não reagir, faça as três perguntas com a criança: a câmera está ligada? A classe no bloco está certa? O bloco de reação está encaixado? Guie sem entregar a resposta pronta.`,
      atividade: `Seu projeto não está reagindo? Vire detetive e cheque três pistas: (1) a câmera está ligada? (2) o nome do gesto no bloco está certo? (3) a reação está grudada embaixo? Conserte a pista que estiver errada e teste de novo.`,
      gabarito: `A criança venceu quando encontra qual das três pistas estava errada, corrige e o projeto volta a reagir ao gesto. Respostas válidas incluem "faltava ligar a câmera", "o gesto estava trocado" ou "o bloco estava solto". O acerto é o projeto funcionando depois do conserto.`,
    },
    {
      titulo: `Jogo de ponta a ponta`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança ligue TODAS as classes do projeto dela, uma por uma, conferindo na lista impressa. Acompanhe cada teste completo e marque o checklist quando cada gesto reagir certinho.`,
      atividade: `Monte um bloco "quando o modelo reconhecer" para cada gesto que a sua IA aprendeu, com a reação certa embaixo de cada um. Ligue a câmera e teste todos os gestos, um de cada vez, para ver o jogo inteiro funcionando.`,
      gabarito: `Está completo quando cada classe do modelo tem o seu próprio bloco com a reação certa e todos os gestos, ao serem mostrados na câmera, disparam a reação combinada. Use a lista impressa para conferir gesto por gesto. Se todos reagem certinho, o projeto está de ponta a ponta.`,
    },
    {
      titulo: `Desafio: o toque final`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha como capricho de criador esperto, para deixar o jogo pronto de mostrar. Mostre rapidamente onde escolher um cenário, adicionar um som de fundo ou usar o bloco "diga". Desafie quem já terminou a deixar o projeto mais bonito sem quebrar o que já funciona.`,
      atividade: `Sua missão: dê um toque final no seu jogo. Escolha um cenário novo, adicione um som divertido ou faça o personagem dizer uma mensagem quando reagir. Depois teste de novo para garantir que tudo continua funcionando.`,
      gabarito: `A criança cumpriu o desafio quando adiciona pelo menos um toque final (cenário, som ou mensagem) e, ao testar com a câmera, os gestos continuam disparando as reações sem quebrar. Se o projeto ficou mais bonito e ainda funciona de ponta a ponta, a missão foi cumprida.`,
    },
  ],
};
