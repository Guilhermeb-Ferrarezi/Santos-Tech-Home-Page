import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: `Robô que Não Cansa: o Loop`,
  semana: `Semana 3`,
  duracao: "1 hora",
  objetivo: `A criança aprende a usar um bloco de repetir para o Agente andar várias casas com poucos blocos, percebendo que o loop faz o mesmo trabalho mais rápido do que repetir tudo à mão.`,
  descricao: `Nesta aula as crianças descobrem uma das ideias mais poderosas da programação: a repetição, que aqui chamamos de loop. Nas aulas anteriores elas aprenderam a dar comandos ao Agente e a fazê-lo andar casa por casa. Agora vão perceber um probleminha chato: se o Agente precisa andar dez casas, ninguém quer arrastar dez blocos iguais "andar para frente". É cansativo e fácil de errar. O loop resolve isso: é um bloco que diz "faça isso de novo, de novo, de novo" sozinho.

O loop importa porque é assim que computadores e robôs de verdade trabalham. Eles não se cansam e fazem a mesma tarefa milhares de vezes sem reclamar. Quando a criança entende que pode dizer "repita 10 vezes" em vez de escrever a mesma coisa dez vezes, ela ganha uma ferramenta que vai usar em todos os jogos e construções que criar daqui para frente. É também um momento mágico: com um bloco só, o Agente atravessa o mapa inteiro.

Na prática, as crianças vão comparar dois jeitos de fazer a mesma coisa. Primeiro montam um caminho do Agente do jeito antigo, empilhando vários blocos iguais. Depois aprendem o bloco "repetir" do MakeCode, colocam um comando dentro dele e escolhem o número de vezes. Ao rodar, veem o Agente andar a mesma distância com muito menos blocos. A turma vai sentir na pele que o loop deixa o código mais curto, mais limpo e mais rápido de montar.

O foco do dia é a descoberta e o encantamento, não a perfeição técnica. Queremos que cada criança diga "uau, com um bloco só ele anda tudo isso!" e entenda, com o corpo e com os olhos, que repetir é melhor do que copiar. Essa percepção prepara o terreno para a próxima aula, em que o loop será usado para criar fileiras de blocos.`,
  materiais: [
    `Computadores (um por aluno ou em dupla) com Minecraft Education aberto e o editor de código MakeCode já carregado, na tela onde se arrastam blocos.`,
    `Projetor ou TV grande conectado ao computador do professor, para mostrar onde clicar e demonstrar cada passo.`,
    `Um mundo plano simples do Minecraft já criado e salvo, com o Agente visível ao lado do jogador (sem monstros, modo criativo, dia).`,
    `Arquivo de exemplo pronto pelo professor: dois programinhas iguais, um feito com blocos repetidos à mão e outro feito com o bloco "repetir", para comparar.`,
    `Fita crepe ou tapete de quadradinhos no chão da sala, formando uma trilha de casas, para a brincadeira do "robô humano".`,
    `Cartões grandes impressos com a palavra "REPETIR" e um número (por exemplo, "REPETIR 5 vezes"), para usar na roda e nos desenhos.`,
    `Folhas de papel e lápis de cor para a atividade de desenho do caminho do Agente.`,
  ],
  conceitosChave: [
    `Loop — é quando o jogo faz a mesma coisa várias vezes seguidas sem a gente mandar de novo toda hora.`,
    `Bloco repetir — o bloquinho do MakeCode onde você escreve um número e tudo que está dentro dele acontece aquele tanto de vezes.`,
    `Número de repetições — o numerozinho que diz quantas vezes o Agente vai fazer o comando, por exemplo repetir 5 vezes.`,
    `Dentro do loop — o lugar dentro do bloco repetir onde a gente coloca o comando que vai se repetir, como uma caixa que segura o que será feito de novo.`,
    `Comando — uma ordem que damos ao Agente, como "andar para frente"; é a peça que vai dentro do loop.`,
    `Repetir à mão — quando a gente copia o mesmo bloco várias vezes em vez de usar o loop; funciona, mas dá muito trabalho.`,
    `Mais rápido com menos — a ideia de que com poucos blocos o loop faz o mesmo que muitos blocos repetidos.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Um loop é uma instrução que manda o computador repetir um pedaço de código um certo número de vezes. No MakeCode usado dentro do Minecraft Education, o bloco que faz isso fica na categoria "Ciclos" (em inglês aparece como "Loops"), com a cor laranja ou roxa dependendo da versão. O bloco principal desta aula é o "repetir 4 vezes", uma peça em formato de "C" (uma boca aberta) onde você encaixa outros blocos dentro. O número 4 vem por padrão e pode ser trocado clicando em cima dele e digitando outro valor.

A ideia técnica é simples: tudo que estiver encaixado dentro da boca do bloco "repetir" será executado o número de vezes indicado, um após o outro. Se você colocar "Agente mover para frente 1" dentro de "repetir 10 vezes", o Agente dará dez passos. O resultado é idêntico a empilhar dez blocos "mover para frente", mas com muito menos peças. Antes da aula, abra o MakeCode (botão "C" do código ou tecla de atalho no Minecraft), monte os dois exemplos e teste rodando com o botão de play, para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Minecraft + MakeCode)

AQUECIMENTO (10 min). Receba a turma com a brincadeira do "robô humano". No tapete de quadradinhos, escolha uma criança para ser o Agente e peça que ela ande "para frente" um passo cada vez que a turma fala. Faça a turma repetir "anda, anda, anda" oito vezes e finja cansaço: "Que canseira falar tudo isso! Será que dá para falar só uma vez?". Mostre o cartão "REPETIR 8 vezes" e plante a curiosidade.

CONTEÚDO NOVO GUIADO (15 min). No projetor, abra o Minecraft no mundo plano e entre no código clicando no ícone do MakeCode (o "C" de código). Mostre primeiro o jeito antigo: arraste da categoria "Agente" o bloco "Agente mover para frente" e duplique-o quatro ou cinco vezes (clique direito, "Duplicar"). Rode e conte os passos. Depois diga: "Agora o jeito esperto!". Clique na categoria "Ciclos", arraste o bloco "repetir 4 vezes" para a área de trabalho, encaixe UM bloco "Agente mover para frente" dentro da boca dele e clique no número para trocar para 5. Rode no botão de play e mostre que o Agente anda igual, mas com um bloco só dentro.

MÃO NA MASSA (25 min). Cada criança (ou dupla) no seu computador. Peça que abram o MakeCode pelo ícone "C". Tarefa: fazer o Agente andar usando o bloco "repetir". Passe de mesa em mesa ajudando a achar a categoria "Ciclos" e a encaixar o "mover para frente" dentro da boca do bloco. Desafie cada um a trocar o número e ver o Agente andar mais ou menos casas.

DESAFIO + COMPARTILHAR (10 min). Lance o desafio: "Faça o Agente andar exatamente até aquela árvore (ou ponto combinado) mudando só o número". Depois, cada criança mostra na tela quantas vezes pôs para repetir. Celebre o bloco mais curto.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a imagem do robô que não cansa: "Você ficaria cansado de dar dez passos contando um por um? O loop é um robozinho que conta sozinho!". Outra analogia boa é a da música: quando a gente canta "parabéns pra você" de novo e de novo, está repetindo; o loop é o botão de repetir da música. Fale sempre "dentro da caixinha" para o miolo do bloco. Evite a palavra "executar"; diga "fazer" ou "andar". Use os dedos para contar junto enquanto o Agente anda.

## Erros comuns e como ajudar

O erro mais comum é a criança colocar o bloco "mover para frente" do lado de fora do "repetir", e não dentro da boca. Mostre que o bloco precisa "entrar na boca" até dar o clique de encaixe. Outro erro: esquecer de trocar o número e achar que o loop não funcionou; peça para olharem o numerozinho. Alguns vão querer encher de blocos dentro do loop e se perder; comece com um só. Se o Agente "some" andando demais, ensine o botão de voltar ao início do mundo ou reduzir o número. Elogie quem usa o loop em vez de copiar.`,
  exercicios: [
    {
      titulo: `Robô Humano que Repete`,
      tipo: `jogo de movimento (corpo)`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente como brincadeira antes do computador. Explique que a turma vira o "controle" e uma criança vira o Agente. Conduza com voz animada, marcando bem a diferença entre falar comando por comando e falar uma vez só "repete".`,
      atividade: `No tapete de quadradinhos, escolha uma criança para ser o Agente. Primeiro, a turma manda passo a passo: "anda, anda, anda, anda" e o Agente dá um passo a cada palavra. Depois, segure o cartão "REPETIR 4 vezes" no alto e a turma fala apenas "repete 4 vezes!". O Agente conta sozinho e dá os quatro passos.`,
      gabarito: `A criança-Agente dá exatamente o número de passos do cartão (4) ao ouvir "repete 4 vezes", sem precisar que a turma fale palavra por palavra. Acertou quando o número de passos bate com o número do cartão e a turma percebe que falar uma vez foi mais fácil.`,
    },
    {
      titulo: `Achando a Caixa de Repetir`,
      tipo: `prática guiada na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça junto, passo a passo, no projetor, e espere a turma acompanhar em cada tela. Mostre devagar onde fica a categoria "Ciclos" e como o bloco "repetir" tem uma boca aberta para colocar coisas dentro.`,
      atividade: `Abra o MakeCode pelo ícone "C". Clique na categoria "Ciclos" e arraste o bloco "repetir 4 vezes" para a área de trabalho. Da categoria "Agente", arraste "Agente mover para frente" e encaixe DENTRO da boca do bloco repetir. Aperte o play e veja o Agente andar.`,
      gabarito: `O bloco "Agente mover para frente" fica dentro da boca do "repetir 4 vezes" (encaixado, não solto do lado). Ao rodar, o Agente anda 4 casas. Acertou quando o Agente se move sozinho as 4 vezes com um único bloco lá dentro.`,
    },
    {
      titulo: `À Mão ou com Loop?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e mostre os dois programas de exemplo lado a lado no projetor: um com cinco blocos "mover para frente" empilhados e outro com um "mover" dentro de "repetir 5 vezes". Faça perguntas e deixe todos opinarem.`,
      atividade: `Olhe os dois programas. Pergunte à turma: "Qual tem mais bloquinhos?", "Qual deu mais trabalho de montar?", "Os dois fazem o Agente andar a mesma distância?". Peça que apontem qual deles é o jeito do "robô que não cansa".`,
      gabarito: `As crianças identificam que o programa com loop tem menos blocos e dá menos trabalho, e que os dois fazem o Agente andar a mesma distância. O jeito do "robô que não cansa" é o que usa o bloco "repetir". Acertou quando a turma explica que o loop faz o mesmo com menos peças.`,
    },
    {
      titulo: `Desenho do Caminho que se Repete`,
      tipo: `desenho / papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua folha e lápis. Explique que cada quadradinho desenhado é uma casa que o Agente anda. Peça que escrevam ou copiem o número de vezes ao lado do caminho, usando o cartão "REPETIR" como modelo para quem ainda não escreve.`,
      atividade: `Desenhe o Agente e, na frente dele, uma fileira de 6 quadradinhos formando o caminho. Ao lado, escreva ou copie "REPETIR 6 vezes" e desenhe uma seta de "andar para frente" dentro de uma caixinha, mostrando o que vai se repetir.`,
      gabarito: `O desenho mostra 6 quadradinhos no caminho e o número 6 ao lado da palavra "REPETIR", com uma seta de andar dentro de uma caixinha. Acertou quando a quantidade de quadradinhos é igual ao número de repetições escrito.`,
    },
    {
      titulo: `Pare Bem na Marca`,
      tipo: `desafio na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Combine um ponto de chegada visível no mundo (uma árvore, uma flor ou um bloco colorido que você posicionou). Diga que o segredo é mudar SÓ o número dentro do bloco repetir, sem colocar mais blocos. Deixe tentar e errar, ajudando a contar as casas.`,
      atividade: `Use só um bloco "Agente mover para frente" dentro de um "repetir". Mude o número de repetições para o Agente parar exatamente em cima da marca combinada. Teste, conte quantas casas faltaram ou sobraram e ajuste o número até acertar.`,
      gabarito: `O Agente para exatamente em cima da marca usando apenas um bloco dentro do loop, com o número certo de repetições (por exemplo, repetir 7 vezes para 7 casas). Acertou quando o Agente chega na marca sem ultrapassar nem ficar antes, mudando só o número.`,
    },
  ],
};
