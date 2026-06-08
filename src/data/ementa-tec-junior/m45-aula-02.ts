import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Conhecendo o Roblox Studio por Dentro",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança explora a tela do Roblox Studio, localiza a janela de Script dentro de uma Part e digita o seu primeiro print sem medo de errar.`,
  descricao: `Na aula passada as crianças descobriram que os códigos de texto são como receitinhas escritas que o computador lê de cima para baixo. Hoje elas finalmente entram no programa onde essas receitas vão morar: o Roblox Studio. É o mesmo Roblox dos jogos que elas adoram, só que agora visto "por dentro", do lado de quem constrói e não de quem só brinca. Esse momento costuma ser muito empolgante, e o professor pode usar essa empolgação a favor da aula.

O foco de hoje é a alfabetização visual da tela. O Roblox Studio tem muitas janelas e botões, e à primeira vista isso assusta. Por isso a aula vai com calma, dando nome a cada parte importante: a janela grande do meio onde vemos o mundo 3D, o painel Explorer (a lista de tudo que existe no jogo, como um índice), o painel Properties (as características de cada objeto) e, o mais importante de tudo hoje, a janela de Script, que é a folha em branco onde o código vai ser escrito.

O passo central da aula é aprender a criar um Script novo dentro de uma Part (um bloco). A criança vai entender que o código não fica solto no ar: ele mora dentro de um objeto, igual a um recadinho colado dentro de uma caixa. Ao criar o Script, o Roblox abre automaticamente uma janela cheia de palavras de exemplo. As crianças aprendem que podem apagar esse exemplo com tranquilidade e escrever o seu próprio texto no lugar.

Para fechar, cada criança digita o seu primeiro print de verdade. Ainda não vamos rodar nem explicar a fundo o que o print faz (isso é a Aula 3); o objetivo de hoje é só perder o medo da tela, saber exatamente onde se escreve o código e sentir que aquele espaço também é dela. Quando a criança sabe achar a janela de Script sozinha, todas as próximas aulas de programação ficam muito mais leves.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o Roblox Studio já instalado, ABERTO e com um lugar vazio (Baseplate) carregado antes da aula começar`,
    `Conta do Roblox já logada em cada máquina, para a criança não perder tempo digitando senha`,
    `Projetor ou TV grande para o professor mostrar a tela e demonstrar cada clique`,
    `Um cartaz ou slide com a tela do Studio dividida em quatro partes nomeadas: Janela 3D, Explorer, Properties e Script`,
    `Um arquivo de exemplo pronto com uma Part já criada e um Script já aberto, para mostrar como tudo fica no final`,
    `Uma caixinha de verdade com um recadinho de papel dentro, para a analogia de que o código mora dentro do objeto`,
    `Cartões coloridos com os nomes das janelas (Explorer, Properties, Script) para um joguinho de reconhecimento`,
  ],
  conceitosChave: [
    `Roblox Studio — o programa onde a gente constrói os jogos do Roblox, em vez de só jogar; é a "oficina" por dentro do Roblox.`,
    `Janela 3D — o quadro grande do meio da tela onde vemos o mundo do jogo e podemos girar a câmera, igual ao mundo onde a gente brinca.`,
    `Explorer — a lista de tudo que existe no jogo, parecida com um índice de livro; cada objeto aparece como um item nessa lista.`,
    `Part — um bloco, a pecinha básica do Roblox; é dentro dela que a gente vai guardar o código.`,
    `Script — a folha em branco onde se escreve o código de texto; é a "caderninho de receitas" do nosso objeto.`,
    `print — o nosso primeiro comando de Lua, que serve para fazer o computador escrever uma mensagem; hoje só vamos digitá-lo.`,
    `Apagar sem medo — entender que dá para apagar o texto de exemplo e escrever o nosso, porque errar e apagar faz parte de programar.`,
  ],
  treinamento: `## O que o professor precisa saber

O Roblox Studio é o programa gratuito da Roblox para criar jogos. Você não precisa ser especialista: nesta aula o objetivo é só apresentar a tela e mostrar onde o código vai morar. Reserve quinze minutos antes da aula para abrir o Studio e reconhecer quatro regiões. No centro fica a Janela 3D (o mundo do jogo). À direita, em cima, fica o Explorer, que é a lista de todos os objetos. Logo abaixo dele fica o Properties, com as características do objeto selecionado. A janela de Script só aparece quando a gente cria um Script e clica duas vezes nele.

Para criar uma Part: na barra de cima, aba Home (ou Model), clique no botão Part. Um bloco cinza aparece no chão. Para criar o Script dentro dela: no Explorer, passe o mouse em cima do nome "Part", clique no sinal de mais (+) que aparece ao lado, e na caixinha de busca digite Script e escolha Script. Pronto, o Roblox já abre a janela de Script com um texto de exemplo escrito, geralmente algo como uma linha com a palavra print e a frase Hello world entre aspas. Esse exemplo pode ser apagado sem dó.

Importante: hoje a gente NÃO vai rodar o código (botão Play) nem explicar o que o print faz por dentro. Isso é a Aula 3. Se uma criança apertar Play, tudo bem, é só apertar Stop (o quadradinho) e voltar. Mantenha o foco em achar a janela e digitar.

## Passo a passo da aula

10 min — Aquecimento e revisão. Relembre a Aula 1 com uma pergunta: "O que é um código de texto?" Conduza para "uma receitinha escrita que o computador lê de cima para baixo". Mostre a caixinha real com o recado dentro e diga: "Hoje vamos descobrir onde, dentro do Roblox, a gente guarda essas receitas." Aponte o cartaz das quatro janelas.

15 min — Conteúdo novo guiado. Com o projetor ligado, mostre a tela do Studio devagar. Aponte e nomeie cada região: "Esta janela grande é o mundo 3D. Esta lista aqui do lado é o Explorer. Esta debaixo é o Properties." Em seguida, crie uma Part (aba Home, botão Part). Mostre o bloco aparecendo. Depois crie o Script: passe o mouse no nome Part no Explorer, clique no mais (+), digite Script e escolha Script. A janela de Script abre com o texto de exemplo. Diga: "Olha, o Roblox já escreveu uma coisinha aqui. A gente vai apagar e escrever a nossa."

25 min — Mão na massa. Cada criança repete os passos na sua tela: criar uma Part, criar um Script dentro dela e abrir a janela. Circule pela sala. O segredo é achar o sinal de mais (+) no Explorer; muitos vão errar aqui. Depois, peça que selecionem todo o texto de exemplo (clique e arraste, ou Ctrl+A) e apaguem com a tecla Delete ou Backspace. A janela fica vazia. Então peça que digitem exatamente: print("oi"). Não precisa rodar; só digitar.

10 min — Desafio e compartilhar. Desafie: "Quem consegue apagar tudo e deixar a janela de Script totalmente em branco, sem nenhuma letra?" Depois faça a roda: cada criança mostra na sua tela onde fica a janela de Script e lê em voz alta o que digitou.

## Como explicar para crianças

Use a analogia da caixa com recado. Diga: "A Part é uma caixinha. O Script é um papelzinho dentro dela com a receita escrita. O código não fica voando solto, ele mora dentro de um objeto." Para o Explorer, diga que é "a lista de tudo que existe no nosso jogo, igual ao índice de um livro". Para a janela de Script, chame de "a folha de escrever". Evite palavras como "instanciar" ou "hierarquia"; fale "criar", "colocar dentro", "lista". Reforce que apagar o exemplo é normal e seguro.

## Erros comuns e como ajudar

O erro mais comum é não achar o sinal de mais (+) no Explorer: ele só aparece quando o mouse está em cima do nome do objeto. Mostre devagar. Outro erro é a criança clicar no lugar errado e a Part sumir da seleção; peça que clique de novo no nome Part no Explorer. Algumas crianças têm medo de apagar o texto de exemplo achando que vão "quebrar" o programa; tranquilize: "Dá para apagar à vontade, é só texto." Há quem aperte Play sem querer e a tela mude; basta apertar Stop (o quadradinho vermelho) para voltar. Por fim, quem digita print sem os parênteses ou as aspas não tem problema hoje, pois ainda não vamos rodar; só ajude a copiar print("oi") igualzinho ao modelo da lousa.`,
  exercicios: [
    {
      titulo: `Caça às janelas do Studio`,
      tipo: `Reconhecimento na tela`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o Studio aberto na tela de cada criança e o cartaz das quatro janelas à vista, vá dizendo o nome de uma janela por vez e peça que apontem no monitor. Comece pela Janela 3D, que é a mais fácil, e termine no Explorer. Confira de mesa em mesa.`,
      atividade: `Olhe para a sua tela do Roblox Studio. Quando o professor falar o nome de uma janela, aponte com o dedo onde ela está: 1) a Janela 3D (o mundo grande do meio), 2) o Explorer (a lista do lado), 3) o Properties (as características debaixo).`,
      gabarito: `A criança aponta corretamente as três regiões na própria tela. Acertou quando localiza a Janela 3D no centro, o Explorer como a lista à direita e o Properties logo abaixo, sem confundir uma com a outra.`,
    },
    {
      titulo: `Nascendo um bloco`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre no projetor uma vez: aba Home, botão Part, e o bloco aparece no chão. Depois deixe que cada criança faça sozinha. Circule conferindo se a Part apareceu também na lista do Explorer, não só na tela 3D.`,
      atividade: `Vamos criar o nosso primeiro bloco! Clique na aba Home lá em cima e depois no botão Part. Veja o bloco cinza aparecer no mundo 3D. Agora procure o nome "Part" também na lista do Explorer, do lado.`,
      gabarito: `A criança cria uma Part que aparece tanto na Janela 3D quanto como um item chamado Part no Explorer. Acertou quando consegue apontar o bloco nos dois lugares: no mundo 3D e na lista.`,
    },
    {
      titulo: `O recado dentro da caixa`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o passo central. Mostre devagar como o sinal de mais (+) só aparece quando o mouse está em cima do nome Part no Explorer. Acompanhe de perto, pois muitos erram aqui. O objetivo é a janela de Script abrir com o texto de exemplo.`,
      atividade: `Hora de colocar um Script dentro do bloco. No Explorer, passe o mouse em cima do nome "Part" e clique no sinal de mais (+) que aparece. Na caixinha, digite Script e escolha Script. Uma janela nova vai abrir com umas palavras já escritas. Achou? Levante a mão!`,
      gabarito: `A criança cria um Script dentro da Part e a janela de Script abre mostrando o texto de exemplo. Acertou quando o Script aparece no Explorer indentado embaixo da Part (mostrando que está "dentro" dela) e a janela de escrever está visível.`,
    },
    {
      titulo: `Apagando sem medo`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Tranquilize a turma de que apagar é seguro. Ensine a selecionar tudo (clicar e arrastar do começo ao fim, ou usar Ctrl+A) e apagar com Delete ou Backspace. O desafio é deixar a janela de Script totalmente em branco, sem nenhuma letra.`,
      atividade: `Desafio corajoso! Selecione todo o texto de exemplo da janela de Script (arraste por cima de tudo ou aperte Ctrl+A) e apague com a tecla Delete. A janela tem que ficar limpinha, sem nenhuma letra. Conseguiu deixar tudo em branco?`,
      gabarito: `A janela de Script fica completamente vazia, sem nenhum caractere. Acertou quando não sobra nenhuma palavra do exemplo e a criança entende que apagar o texto não quebra o programa.`,
    },
    {
      titulo: `Meu primeiro print escrito`,
      tipo: `Prática + apresentação`,
      tempo: `8 minutos`,
      guiaProfessor: `Escreva na lousa, bem grande, o modelo: print("oi"). Peça que copiem igualzinho na janela de Script já vazia. Não rode o código hoje, o foco é só digitar com calma, com os parênteses e as aspas. No fim, cada criança lê em voz alta o que escreveu.`,
      atividade: `Agora escreva o seu primeiro comando! Na janela de Script vazia, copie exatamente o que está na lousa: print("oi"). Capriche nos parênteses ( ) e nas aspas " ". Quando terminar, leia em voz alta para a turma o que você digitou.`,
      gabarito: `A criança digita print("oi") na janela de Script, copiando o modelo da lousa, e lê em voz alta. Acertou quando o texto tem a palavra print, os dois parênteses e as duas aspas em volta da palavra oi, mesmo que tenha precisado de uma ajudinha para copiar.`,
    },
  ],
};
