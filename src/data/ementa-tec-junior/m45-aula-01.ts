import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O Que São Códigos de Texto?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança descobre que a linguagem Lua é um código de texto que dá ordens ao computador, percebendo a diferença entre arrastar blocos e escrever palavras para criar jogos profissionais no Roblox Studio.`,
  descricao: `Nesta aula as crianças dão um passo enorme na trilha de criação de games: elas saem do mundo dos blocos coloridos que arrastam com o mouse e entram no mundo do código de texto, onde a gente escreve palavras para mandar no computador. Até aqui, nos Anos anteriores, elas montaram lógica encaixando peças, como no Scratch. Agora vão entender que os jogos profissionais que tanto amam, como os do Roblox, são feitos escrevendo linhas de texto numa linguagem chamada Lua.

A ideia central do dia é simples e poderosa: cada linha de código é uma ordem, uma instrução que o computador lê de cima para baixo, uma de cada vez, como uma receita de bolo. Quando arrastamos um bloco, a ordem já vem pronta dentro dele; quando escrevemos em Lua, nós mesmos digitamos a ordem palavra por palavra. É como a diferença entre montar uma frase com ímãs de geladeira já escritos e escrever a frase à mão num caderno: com a mão, você pode dizer qualquer coisa, mas precisa escrever direitinho.

Para que isso não fique abstrato, o professor abre o Roblox Studio no projetor e mostra código Lua de verdade aparecendo numa janela chamada Script. As crianças veem que aquilo são palavras e símbolos organizados em linhas, e que cada linha faz uma coisinha. Elas ainda não vão escrever código hoje (isso começa na Aula 3); o foco é olhar, reconhecer e entender o que é um código de texto e por que ele existe.

A aula fecha com uma discussão guiada deliciosa para a idade: por que os criadores de jogos profissionais preferem texto em vez de blocos? A resposta que elas vão construir junto com o professor é que o texto é mais rápido de escrever quando você já sabe, ocupa menos espaço na tela e permite criar coisas muito maiores e mais complexas. Hoje elas plantam a semente de que vão virar gente que escreve código de verdade.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o Roblox Studio já instalado e aberto, e um lugar baixado para conseguir criar um Script de exemplo.`,
    `Projetor ou TV grande para o professor mostrar o Roblox Studio e o código Lua passo a passo para toda a turma ao mesmo tempo.`,
    `Um arquivo de exemplo preparado pelo professor antes da aula: um lugar do Roblox Studio com um Script já criado contendo três ou quatro linhas simples de Lua para mostrar.`,
    `Uma folha impressa grande (ou slide) com um bloco do Scratch de um lado e uma linha de código Lua do outro, para comparar lado a lado.`,
    `Cartões de papel com uma "ordem" escrita em cada um (por exemplo: "pule", "ande", "fale oi") para a brincadeira do aquecimento.`,
    `Folhas de papel e lápis de cor para o exercício de desenho e de escrita das instruções.`,
    `Adesivos ou carimbos de "Leitor de Código" para premiar quem reconhecer as linhas de instrução.`,
  ],
  conceitosChave: [
    `Código — são as palavras e símbolos que a gente escreve para dar ordens ao computador, como bilhetinhos que ele entende.`,
    `Lua — é o nome da linguagem de texto que vamos usar no Roblox para mandar no jogo, do jeito que os profissionais fazem.`,
    `Linha — é cada fileira de palavras do código; cada linha guarda uma ordem, uma de cada vez.`,
    `Instrução — é uma ordem que você dá ao computador, tipo "faça isso agora".`,
    `Bloco — é a pecinha colorida que a gente arrastava com o mouse, com a ordem já escrita dentro dela.`,
    `Script — é a janelinha dentro do Roblox Studio onde o código de texto mora e fica guardado.`,
    `Roblox Studio — é o programa onde a gente cria jogos do Roblox e escreve o código que dá vida a eles.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula; precisa entender três ideias e onde clicar. Primeira ideia: programar é dar ordens ao computador, e existem duas formas de fazer isso. A forma com blocos (que a turma já conhece do Scratch) é arrastar pecinhas prontas. A forma com texto é escrever as palavras você mesmo, numa linguagem. A linguagem que o Roblox usa se chama Lua. Segunda ideia: no Roblox, o código de texto fica dentro de um objeto chamado Script. Pense no Script como uma folha de caderno digital onde escrevemos as ordens. Terceira ideia: o computador lê o código de cima para baixo, uma linha por vez, e cada linha é uma instrução. Hoje a turma só observa o código; ninguém precisa digitar ainda. Antes da aula, abra o Roblox Studio, crie um lugar novo (template Baseplate) e prepare um Script de exemplo, para você só apresentar na hora.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox + Lua)

10 min - Aquecimento e revisão: faça a brincadeira "robô de ordens". Você é o robô e só obedece cartões com uma ordem cada (pule, ande, fale oi). Mostre que, se a ordem vier toda embaralhada num cartão só, o robô trava. Conclua: o computador também gosta de uma ordem por vez. Relembre os blocos do Scratch que elas arrastavam.

15 min - Conteúdo novo guiado: no projetor, abra o Roblox Studio. Mostre a janela Explorer (menu View, botão Explorer). Clique com o botão direito em ServerScriptService e escolha Insert Object e depois Script. Uma janela de texto abre: esse é o Script com código Lua. Aponte para as linhas e diga: "cada linha é uma ordem". Mostre o exemplo print("Ola") e explique, sem entrar em detalhe, que esta linha manda o computador escrever uma mensagem. Agora abra o cartaz que compara um bloco do Scratch com uma linha de Lua, lado a lado, e diga: "os dois mandam a mesma coisa, mas um é arrastado e o outro é escrito".

25 min - Mão na massa: cada criança (ou dupla) abre o Roblox Studio, abre o Explorer e cria um Script dentro de ServerScriptService, repetindo seus passos. O objetivo NÃO é escrever código, e sim achar a janela, criar o Script e olhar as linhas. Circule pela sala ajudando a achar o Explorer e o botão direito. Peça que apontem na tela quantas linhas existem no Script de exemplo.

10 min - Desafio e compartilhar: lance a pergunta "por que os profissionais usam texto e não blocos?". Conduza a discussão até as respostas: texto é mais rápido quando você já sabe, cabe mais coisa na tela e dá para fazer jogos enormes. Cada criança fala uma palavra que aprendeu hoje (código, linha, Script, Lua, instrução).

## Como explicar para crianças

Use a analogia da receita de bolo: cada linha do código é um passo da receita, e o computador faz um passo de cada vez, na ordem. Use também a comparação dos ímãs de geladeira (blocos prontos) contra escrever no caderno (texto livre): com o caderno você escreve o que quiser, mas precisa caprichar na escrita. Chame o Script de "caderninho do computador" e cada linha de "um bilhetinho com uma ordem". Evite a palavra "sintaxe"; diga "escrever do jeito certo". Mostre apontando com o dedo na tela: leia uma linha em voz alta como se fosse uma frase. Deixe a criança adivinhar o que cada linha manda fazer antes de você explicar.

## Erros comuns e como ajudar

O engano mais comum é a criança achar que vai ter que decorar tudo hoje; tranquilize dizendo que hoje a gente só olha e reconhece, e que escrever começa devagar nas próximas aulas. Outro tropeço é não achar a janela Explorer: mostre de novo o menu View e o botão Explorer, e explique que sem ela não dá para criar o Script. Algumas crianças vão clicar com o botão esquerdo em vez do direito para inserir o Script; reforce "clique com o botão da direita do mouse". Há quem confunda Script com Local Script; para hoje, use sempre Script normal e não complique. Por fim, se alguém apagar o Script de exemplo sem querer, mostre que dá para criar outro do zero, sem drama, porque é texto e a gente reescreve.`,
  exercicios: [
    {
      titulo: `Bloco ou Texto?`,
      tipo: `Roda de observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor, alternando, uma imagem de um bloco do Scratch e uma linha de código Lua. A cada imagem, a turma decide em voz alta se é "bloco" (arrastado) ou "texto" (escrito). Conduza como um jogo rápido de adivinhação.`,
      atividade: `Olhe para a tela. Quando aparecer uma pecinha colorida de arrastar, grite "BLOCO!". Quando aparecer uma linha de palavras escritas, grite "TEXTO!". Faça isso para cada imagem que o professor mostrar.`,
      gabarito: `Acertou quem identifica corretamente: pecinha colorida com encaixe é bloco; fileira de palavras e símbolos, como print("Ola"), é texto. Espera-se que a criança perceba que o bloco já vem pronto e o texto é escrito por nós.`,
    },
    {
      titulo: `Achando o Script no Roblox`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Guie passo a passo no projetor enquanto cada criança repete. O foco é achar o Explorer e criar um Script, não escrever código. Circule garantindo que todos abriram a janela Explorer pelo menu View.`,
      atividade: `No Roblox Studio, abra o menu View e clique em Explorer. Na janela Explorer, clique com o botão direito em ServerScriptService, escolha Insert Object e depois Script. Veja a janela de texto que abriu.`,
      gabarito: `Acertou quando aparece um novo Script dentro de ServerScriptService na janela Explorer e abre uma janela de texto com algumas linhas. Se nada abrir, provavelmente clicou com o botão esquerdo ou em outro lugar; refaça clicando com o botão direito em ServerScriptService.`,
    },
    {
      titulo: `Conte as Linhas`,
      tipo: `Observação na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Use o Script de exemplo que você preparou, com três ou quatro linhas. Peça que cada criança aponte e conte as linhas na própria tela. Reforce a ideia de que cada linha é uma ordem separada.`,
      atividade: `Olhe o Script de exemplo no seu computador. Use o dedo para apontar e conte quantas linhas de código existem nele. Diga o número em voz alta e mostre a primeira e a última linha.`,
      gabarito: `Acertou quando a criança conta corretamente o número de linhas do Script de exemplo (por exemplo, 4 linhas) e entende que cada linha é uma instrução diferente. Cada linha começa numa fileira nova, embaixo da anterior.`,
    },
    {
      titulo: `Escreva uma Ordem de Mentirinha`,
      tipo: `Desenho / papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis. Peça que cada criança invente três ordens curtas, uma por linha, como se fosse um código. Não precisa ser Lua de verdade; o objetivo é entender que cada linha guarda uma ordem.`,
      atividade: `No papel, escreva três ordens para um robô, uma em cada linha. Por exemplo: linha 1 "ande para frente", linha 2 "pule uma vez", linha 3 "fale oi". Numere as linhas de 1 a 3.`,
      gabarito: `Acertou quando há exatamente uma ordem por linha, numeradas de 1 a 3, e cada ordem é uma instrução clara e curta. Mostra entendimento se a criança percebe que o robô faria as ordens de cima para baixo, na sequência.`,
    },
    {
      titulo: `Professor por um Minuto: Texto x Blocos`,
      tipo: `Desafio criativo (avançado)`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem terminou os anteriores. Convide a criança a explicar para um colega, com as próprias palavras, por que jogos profissionais usam código de texto. Ofereça as pistas: rápido, cabe mais coisa, dá para fazer jogos grandes.`,
      atividade: `Vire professor por um minuto. Explique para um colega: "os profissionais usam texto em vez de blocos porque ___ e porque ___". Use pelo menos duas razões que aprendemos hoje.`,
      gabarito: `Acertou quando a criança dá pelo menos duas razões válidas, como: o texto é mais rápido de escrever quando você já sabe, ocupa menos espaço na tela, ou permite criar jogos maiores e mais complexos. Vale qualquer explicação com as próprias palavras que mostre que texto dá mais poder ao criador.`,
    },
  ],
};
