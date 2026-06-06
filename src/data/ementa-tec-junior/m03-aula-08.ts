import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Jogo Pronto para Jogar!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza seu joguinho 2D no Scratch juntando som, mensagem e placar de pontos, testa se tudo funciona e mostra o jogo para a turma jogar.`,
  descricao: `Esta é a última aula do mês e a grande festa do projeto! Durante quatro semanas, cada criança aprendeu pedacinhos do Scratch: como mover o personagem, fazer ele responder ao clique, tocar som quando aperta uma tecla, fazer o personagem falar e contar pontos com uma variável. Hoje a gente junta tudo isso em um único joguinho que funciona do começo ao fim.

O assunto da aula é "fechar" o projeto. Fechar significa olhar o jogo que já está quase pronto e completar as últimas peças: garantir que o som toca na hora certa, que aparece uma mensagem para o jogador e que o placar de pontos sobe quando deve. Depois disso vem a parte mais importante de quem cria jogos de verdade: TESTAR. Testar é clicar na bandeira verde, jogar o próprio jogo e ver se tudo funciona como a gente imaginou.

Isso importa porque criar um jogo não é só montar os blocos uma vez. É montar, experimentar, ver o que deu errado e arrumar. Essa ideia de "testar e consertar" é o coração de toda a tecnologia, e as crianças vão sentir o orgulho enorme de ver algo que elas mesmas construíram funcionando na tela.

No final, cada criança vira "apresentadora" do seu jogo: mostra para os colegas, conta o que o jogo faz e deixa um amigo jogar. É um momento de celebração, de aplaudir o esforço de todos e de fechar o primeiro projeto Scratch da trilha com chave de ouro.`,
  materiais: [
    `Um computador por criança com o Scratch já aberto no projeto que ela vem construindo nas aulas anteriores (jogo 2D em andamento)`,
    `Projetor ou TV grande para o professor demonstrar os passos no Scratch para a turma toda ver`,
    `Um projeto de exemplo já finalizado pelo professor (com som, mensagem e placar funcionando) para servir de modelo`,
    `Fones de ouvido ou caixas de som testadas, já que vários sons vão tocar ao mesmo tempo na sala`,
    `Adesivos, carimbos ou um "diploma de criador de jogos" para entregar na hora de compartilhar`,
    `Uma folha de papel e lápis de cor por criança para a atividade de desenho do "cartaz do jogo"`,
    `Lista de presença com o nome de cada jogo para o professor anotar quem já apresentou`,
  ],
  conceitosChave: [
    `Testar — clicar na bandeira verde e jogar o próprio jogo para ver se tudo funciona, como provar a comida antes de servir.`,
    `Bug — um errinho no jogo, tipo o som que não toca ou o ponto que não sobe; quem cria jogo vira detetive e conserta.`,
    `Placar — o numerozinho que mostra quantos pontos o jogador fez, igual ao painel de pontos de um videogame.`,
    `Mensagem — uma frase que o personagem fala ou que aparece na tela para avisar algo ao jogador, como "Você ganhou!".`,
    `Som — o barulho que o jogo faz quando algo acontece, deixando o jogo mais divertido e vivo.`,
    `Bandeira verde — o botão que liga o jogo e faz tudo começar, como o botão de "play".`,
    `Apresentar — mostrar o jogo para os colegas e contar o que ele faz, como um diretor mostrando seu filme.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula você não ensina blocos novos: você ajuda cada criança a JUNTAR o que já existe e a TESTAR. O projeto de cada uma já deve ter um personagem que se move (aulas 2 e 3), um som ao apertar tecla (aula 4), uma fala do personagem (aula 5) e uma variável de pontos (aula 6 e 7). Hoje conferimos se essas quatro coisas estão presentes e funcionando juntas.

Três blocos são as estrelas de hoje. O som está na aba "Som", nos blocos roxos "tocar som ___ até o fim". A mensagem usa o bloco roxo "diga ___ por ___ segundos" (categoria Aparência). O placar usa a variável de pontos, com o bloco laranja "adicione ___ a pontos" (categoria Variáveis). Tudo é disparado por um bloco amarelo de evento, normalmente "quando bandeira verde for clicada" ou "quando tecla ___ pressionada".

O conceito central é testar e consertar. Em Scratch, testar é só clicar na bandeira verde (canto superior do palco) e jogar. Se algo não acontece, a criança vira detetive: olha quais blocos estão encaixados e arruma. Não existe "errar feio" aqui; existe "ainda não terminou".

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

AQUECIMENTO (10 min): Reúna a turma na frente do projetor. Abra SEU jogo de exemplo e clique na bandeira verde. Jogue na frente deles, deixe o som tocar, mostre o personagem falando e o placar subindo. Pergunte: "O que está faltando no jogo de vocês para ficar igual a esse?". Deixe cada criança falar uma coisa.

CONTEÚDO NOVO GUIADO (15 min): No projetor, mostre os três acabamentos, um de cada vez. Primeiro o SOM: clique no personagem, vá na aba "Código", arraste "quando tecla espaço pressionada" e embaixo "tocar som ___ até o fim"; clique na bandeira verde e aperte espaço para ouvir. Depois a MENSAGEM: arraste "quando bandeira verde for clicada" e "diga Olá! por 2 segundos"; troque o texto clicando dentro do bloco. Por fim o PLACAR: mostre a variável "pontos" e o bloco "adicione 1 a pontos" encaixado onde o jogador pontua. Teste cada um clicando na bandeira verde.

MÃO NA MASSA (25 min): Cada criança volta ao próprio computador e completa seu jogo. Passe de mesa em mesa. Peça que sigam a ordem: 1) coloca o som, testa; 2) coloca a mensagem, testa; 3) confere o placar, testa. Sempre testando depois de cada bloco, nunca tudo no fim. Quem terminar pode trocar a fala do personagem ou escolher outro som na aba "Som".

DESAFIO + COMPARTILHAR (10 min): Cada criança clica na bandeira verde e deixa o colega do lado jogar uma vez. Depois, duas ou três crianças apresentam para a turma toda no projetor. Aplauda cada um, entregue o diploma ou adesivo e celebre: o primeiro jogo está pronto!

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Para testar, diga: "Vamos provar nosso jogo, igual a gente prova a comida para ver se está gostosa." A bandeira verde é "o botão liga", o vermelho ao lado é "o botão desliga". Para o placar, diga "é o plaquinha de pontos, como no videogame: cada acerto, sobe um". Para a mensagem, diga "o personagem vai falar com você, como num desenho animado". Para o bug, fale "achamos um errinho, vamos ser detetives e descobrir onde ele se escondeu". Evite palavras como "depurar" ou "executar"; use "testar", "jogar", "ligar".

## Erros comuns e como ajudar

O erro mais comum é a criança montar tudo e nunca clicar na bandeira verde; lembre sempre "testou? clica na bandeira". Outro é o bloco de som ou de pontos solto, sem estar encaixado num bloco amarelo de evento; mostre que todo bloco precisa de um "chapéu" amarelo em cima para funcionar. Muitas crianças esquecem de escolher o som na aba "Som" e o bloco fica vazio; ajude a clicar e escolher. No placar, é comum a variável não aparecer no palco: marque a caixinha ao lado da variável "pontos" na categoria Variáveis. Por fim, se duas crianças apertam a mesma tecla, vários sons tocam juntos; use fones para manter a sala tranquila e cada uma ouvindo o seu.`,
  exercicios: [
    {
      titulo: `Liga o jogo e prova!`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica a bandeira verde (canto de cima do palco) e o botão vermelho de parar ao lado. Explique que testar é provar o jogo. Peça que façam no próprio computador.`,
      atividade: `Abra seu jogo, clique na bandeira verde e jogue por um minutinho. Observe: o personagem se move? Conte para o professor uma coisa que funcionou e uma coisa que ainda falta.`,
      gabarito: `A criança acerta se clica na bandeira verde sozinha, o jogo começa, ela joga e consegue dizer ao menos uma coisa que funciona (ex.: "o personagem anda") e uma que falta (ex.: "ainda não tem som"). O sucesso é o jogo iniciar ao clicar na bandeira.`,
    },
    {
      titulo: `Coloca o som no lugar certo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre que o som está na aba "Som" e o bloco roxo "tocar som ___ até o fim" no Código. Demonstre encaixar o som embaixo de um bloco amarelo "quando tecla espaço pressionada". Reforce: sempre testar depois.`,
      atividade: `No seu jogo, arraste o bloco "quando tecla espaço pressionada" e embaixo dele "tocar som ___ até o fim". Escolha um som da lista. Clique na bandeira verde e aperte espaço. O som tocou?`,
      gabarito: `Acertou quando, ao apertar a tecla espaço com o jogo ligado, um som toca. Se nada tocar, o professor confere se o bloco roxo está encaixado no bloco amarelo e se um som foi escolhido (bloco não pode estar vazio).`,
    },
    {
      titulo: `Caça ao errinho (detetives de bug)`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Abra no projetor um jogo "com defeito" de propósito: por exemplo, o bloco de pontos solto, sem o chapéu amarelo em cima. Faça a turma virar detetive e descobrir o errinho junto.`,
      atividade: `Olhem o jogo do professor na tela. Ele aperta a tecla e o ponto não sobe! Onde será que está o errinho? Levantem a mão e digam o que está faltando para o ponto funcionar.`,
      gabarito: `A resposta esperada é que as crianças percebam que falta um bloco amarelo de evento em cima (o "chapéu"), ou que o bloco "adicione 1 a pontos" está solto e precisa ser encaixado. Acertou quem aponta que algum bloco está separado e precisa se juntar.`,
    },
    {
      titulo: `O cartaz do meu jogo`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Explique que todo jogo tem um cartaz que mostra do que ele se trata. Peça que desenhem o personagem principal e escrevam (ou peçam ajuda para escrever) o nome do jogo.`,
      atividade: `Desenhe o personagem do seu jogo e o cenário. Em cima, escreva o nome do seu jogo. Pinte bem bonito, porque esse cartaz vai apresentar seu jogo para a turma!`,
      gabarito: `Acertou quem entrega um desenho que mostra o personagem do próprio jogo e um título (mesmo que escrito com ajuda). Não há desenho "errado"; o objetivo é a criança identificar e representar o que criou. O professor confirma perguntando "quem é esse personagem no seu jogo?".`,
    },
    {
      titulo: `Apresenta para a turma jogar`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o ponto alto. Chame as crianças, uma por vez, ao projetor. Peça que liguem o jogo na bandeira verde, contem em uma frase o que o jogo faz e deixem um colega jogar. Conduza os aplausos e entregue o diploma a cada um.`,
      atividade: `Mostre seu jogo na tela grande. Clique na bandeira verde, diga "no meu jogo você precisa ___" e convide um amigo para jogar uma vez. No fim, todos batem palmas!`,
      gabarito: `Acertou a criança que liga o jogo na bandeira verde, fala em uma frase o objetivo do jogo e deixa um colega jogar com o jogo funcionando (som, mensagem ou placar aparecendo). O sucesso é o jogo rodar do início ao fim na frente da turma e a criança conseguir explicá-lo.`,
    },
  ],
};
