import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Variáveis: Caixas que Guardam Valores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender que uma variável é uma caixa com nome que guarda um valor para usar depois, criando variáveis de número e de texto com local e imprimindo o conteúdo delas com print.`,
  descricao: `Até agora as crianças já escreveram comandos print e já caçaram bugs no Roblox Studio. Nesta aula damos um passo gigante: vamos guardar informações dentro do código. Imagine uma estante cheia de caixinhas. Cada caixinha tem uma etiqueta com um nome (por exemplo, "vida" ou "nomeDoHeroi") e dentro dela mora um valor (o número 100 ou a palavra Theo). Isso é uma variável: uma caixa com nome que guarda um valor para a gente usar quando quiser. Em vez de digitar o mesmo número várias vezes, a criança guarda esse número numa caixa e depois só chama a caixa pelo nome.

No Lua, a palavra mágica para criar essa caixa é local. Escrevemos local pontos = 10 e pronto: nasceu uma caixa chamada pontos com o número 10 dentro. A palavra local avisa o computador "crie uma caixa nova aqui". O sinal de igual não significa "é igual" como na matemática; ele significa "guarde isto dentro da caixa". Esta é uma das confusões mais comuns das crianças, e o professor vai repetir essa ideia várias vezes durante a aula.

As variáveis podem guardar dois tipos de coisa que veremos hoje: números (sem aspas, como 100 ou 7) e textos (entre aspas, como "Maria" ou "vitória"). Texto em programação tem um nome de gente grande, string, que a gente pode apresentar como "a caixa de palavras". A regra das aspas é importante: número não usa aspas, palavra usa aspas. Depois de criar a caixa, a criança usa print para espiar o que tem dentro, escrevendo print(pontos) e vendo o valor aparecer na janela de saída do Studio.

O grande prêmio da aula é a reutilização. Uma vez guardado o valor na caixa, a criança pode imprimir aquela caixa quantas vezes quiser e usar o mesmo valor em vários lugares, sem redigitar. Isso prepara o terreno para a próxima aula, quando vamos mudar e combinar esses valores. Hoje o foco é só criar caixas com nomes claros e espiar o que há dentro delas.`,
  materiais: [
    `Computadores (1 por aluno) com o Roblox Studio aberto num lugar novo (template Baseplate) e a janela Output já visível`,
    `Projetor ou TV para o professor mostrar a própria tela do Studio enquanto digita`,
    `Caixas de papelão pequenas (ou potes) com etiquetas em branco e fita, para a brincadeira das caixas de verdade`,
    `Canetão para escrever os nomes nas etiquetas das caixas`,
    `Cartões impressos com exemplos prontos de variáveis (um com número, um com texto) para mostrar de perto`,
    `Folha de apoio impressa com a regra "número sem aspas, palavra com aspas" e o modelo local nome = valor`,
    `Lista de nomes de caixas sugeridos (vida, pontos, nomeDoHeroi, corFavorita) para quem travar na hora de inventar nome`,
  ],
  conceitosChave: [
    `Variável — uma caixa com um nome que guarda um valor para você usar depois.`,
    `local — a palavra mágica do Lua que cria uma caixa nova; escreva local antes do nome da caixa.`,
    `Sinal de igual (=) — não quer dizer "é igual"; quer dizer "guarde este valor dentro da caixa".`,
    `Número — um valor de contar que vai sem aspas, como 10, 100 ou 7.`,
    `Texto (string) — a caixa de palavras; um valor de letras que vai sempre entre aspas, como "Theo".`,
    `Nome claro — a etiqueta da caixa; deve dizer o que tem dentro (vida é melhor que x).`,
    `Reutilizar — usar o valor guardado na caixa muitas vezes, só chamando o nome dela.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma variável é só uma caixa com etiqueta. Você cria a caixa com a palavra local, dá um nome a ela e guarda um valor dentro usando o sinal de igual. Exemplo: local pontos = 10. Leia isso em voz alta como "crie uma caixa chamada pontos e guarde dez dentro dela". O sinal de igual aqui significa guardar, não comparar.

Dois tipos de valor nesta aula: número (sem aspas, como 10) e texto, também chamado string (entre aspas, como "Maria"). A regra de ouro que você vai repetir o tempo todo: número não usa aspas, palavra usa aspas. Para ver o que tem na caixa, use print(nomeDaCaixa). O resultado aparece na janela Output. Se a janela não estiver visível, abra pelo menu View e clique em Output. O script vive em ServerScriptService: clique com o botão direito nele, escolha Insert Object e depois Script. Apague a linha de exemplo que já vem escrita e digite o seu código.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Mostre uma caixa de papelão de verdade com a etiqueta vida e o número 100 escrito num papel dentro. Pergunte: o que está guardado aqui? Reveja rápido o print da aula passada digitando print("Oi") na sua tela e rodando com o botão Play (o triângulo azul no topo). Diga que hoje vamos guardar coisas dentro de caixas.

2. Conteúdo novo guiado (15 min): No projetor, crie um Script novo em ServerScriptService (botão direito, Insert Object, Script). Apague tudo e digite devagar, narrando cada parte: local vida = 100 na primeira linha e print(vida) na segunda. Aperte Play e mostre o 100 aparecendo no Output. Agora faça uma caixa de texto: local heroi = "Theo" e print(heroi). Aponte para as aspas e repita a regra número sem aspas, palavra com aspas.

3. Mão na massa (25 min): Cada criança cria um Script no próprio computador e faz duas caixas: uma de número (por exemplo local pontos = 7) e uma de texto (por exemplo local corFavorita = "azul"). Depois imprime as duas com print. Passe de mesa em mesa conferindo as aspas e os nomes. Desafie quem terminar a imprimir a mesma caixa duas vezes para ver que o valor pode ser reutilizado.

4. Desafio e compartilhar (10 min): Peça que cada um crie uma caixa chamada meuNome com o próprio nome dentro (texto, com aspas) e imprima. Convide dois ou três alunos a mostrar o Output na tela grande e ler em voz alta o que apareceu.

## Como explicar para crianças

Use sempre a imagem da caixa com etiqueta. "A palavra local manda o computador construir uma caixa nova. O nome é a etiqueta. O igual é a mão que coloca o valor dentro." Para as aspas, diga que palavras precisam de um cobertor de aspas para o computador entender que é texto, e números andam pelados, sem aspas. Para reutilizar, diga: depois que o brinquedo está na caixa, você pode pegar de novo quantas vezes quiser, é só chamar pelo nome.

## Erros comuns e como ajudar

Esquecer a palavra local: a criança escreve só vida = 100. Funciona às vezes, mas ensine a sempre começar com local para criar a caixa direito. Esquecer as aspas no texto: escrever local heroi = Theo dá erro vermelho no Output; mostre que faltou o cobertor de aspas. Colocar aspas em número: local pontos = "7" transforma o número em texto; explique que número não usa cobertor. Errar maiúscula no nome: criar vida e depois imprimir print(Vida) dá erro, porque o computador acha que são duas caixas diferentes; o nome tem que ser igualzinho. Nome confuso como x ou aaa: peça nomes que digam o que tem dentro, como pontos ou nomeDoHeroi. Esquecer o print: a criança cria a caixa mas nada aparece; lembre que sem print a gente não espia dentro da caixa.`,
  exercicios: [
    {
      titulo: `A caixa de verdade`,
      tipo: `Roda de conversa com objeto`,
      tempo: `8 min`,
      guiaProfessor: `Comece sem computador. Pegue duas caixas de papelão com etiquetas em branco. Escreva vida numa e nomeDoHeroi na outra. Coloque um papel com o número 100 na primeira e um papel com a palavra Theo na segunda. Mostre que a etiqueta é o nome e o que está dentro é o valor. Conecte com o Lua: dizer local vida = 100 é fazer essa mesma caixa no código.`,
      atividade: `Cada criança recebe uma caixa e uma etiqueta. Ela escolhe um nome para a etiqueta, escreve, e coloca dentro um papelzinho com um valor (um número ou uma palavra). Depois mostra para o colega do lado e diz em voz alta: o nome da minha caixa é ___ e o valor guardado é ___.`,
      gabarito: `A criança consegue separar as duas partes: o nome na etiqueta (por exemplo pontos) e o valor dentro (por exemplo 50). Acertou se disser claramente "o nome é pontos e o valor é cinquenta", entendendo que a caixa guarda um valor e tem um nome próprio.`,
    },
    {
      titulo: `Minha primeira caixa de número`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Leve o aluno a criar um Script novo em ServerScriptService (botão direito, Insert Object, Script) e apagar a linha de exemplo. Mostre na sua tela primeiro, depois deixe a criança digitar. Confira que tem a palavra local no começo e que o número está sem aspas. Lembre de apertar o botão Play e olhar a janela Output.`,
      atividade: `Crie uma caixa de número chamada pontos guardando o valor 10 e depois imprima o que tem dentro. Digite estas duas linhas no seu Script:
local pontos = 10
print(pontos)
Aperte Play e veja o número aparecer no Output.`,
      gabarito: `No Output aparece o número 10. O código correto é local pontos = 10 na primeira linha e print(pontos) na segunda, com a palavra local presente e o número 10 sem aspas. Se aparecer erro vermelho, geralmente faltou o print ou o nome foi digitado diferente.`,
    },
    {
      titulo: `Minha caixa de palavras`,
      tipo: `Prática no computador`,
      tempo: `9 min`,
      guiaProfessor: `Agora é a vez do texto. Reforce a regra do cobertor de aspas: palavra vai entre aspas. Mostre que faltar as aspas deixa o Output vermelho. Deixe a criança escolher qualquer palavra, mas peça que ponha as aspas antes e depois dela. Confira nome com letra inicial minúscula e aspas dos dois lados.`,
      atividade: `Crie uma caixa de texto chamada corFavorita guardando a sua cor preferida, e imprima. Por exemplo:
local corFavorita = "azul"
print(corFavorita)
Troque azul pela sua cor de verdade, sempre entre aspas. Aperte Play.`,
      gabarito: `No Output aparece a palavra escolhida sem as aspas, por exemplo azul. O código correto é local corFavorita = "azul" com a palavra entre aspas e print(corFavorita) embaixo. Acertou se a palavra apareceu no Output sem erro vermelho; se deu erro, provavelmente faltou uma das aspas.`,
    },
    {
      titulo: `Usar a mesma caixa de novo`,
      tipo: `Desafio no computador`,
      tempo: `9 min`,
      guiaProfessor: `Aqui mostramos o poder de reutilizar. A criança cria uma caixa só uma vez e a imprime duas vezes. O objetivo é a criança perceber que não precisa redigitar o valor: a caixa guarda e devolve quantas vezes a gente pedir. Pergunte por que o mesmo número apareceu duas vezes no Output.`,
      atividade: `Crie uma caixa de número chamada vida com o valor 100 e imprima ela duas vezes:
local vida = 100
print(vida)
print(vida)
Aperte Play e conte quantas vezes o 100 apareceu no Output.`,
      gabarito: `O número 100 aparece duas vezes no Output, em duas linhas. Isso mostra que a caixa vida guardou o valor uma vez e foi reutilizada nas duas chamadas de print. Acertou se viu o 100 repetido duas vezes e entendeu que foi a mesma caixa usada de novo.`,
    },
    {
      titulo: `Conserte as caixas quebradas`,
      tipo: `Caça aos bugs`,
      tempo: `10 min`,
      guiaProfessor: `Este é o exercício mais difícil e junta tudo. Mostre na tela um código com três erros de propósito e peça que as crianças encontrem e consertem. Deixe que tentem antes de dar a resposta. Os erros são: faltou a palavra local, faltou as aspas no texto, e o nome foi impresso com maiúscula diferente. Vá guiando com perguntas, não entregue de imediato.`,
      atividade: `Olhe este código cheio de erros e conserte as três caixas:
vida = 100
local nome = Maria
print(Vida)
Descubra: onde faltou a palavra local? Onde faltou as aspas? Onde o nome foi escrito com letra trocada? Reescreva certo e aperte Play.`,
      gabarito: `O código correto fica assim:
local vida = 100
local nome = "Maria"
print(vida)
As três correções são: acrescentar local antes de vida; colocar a palavra Maria entre aspas; e imprimir print(vida) com v minúsculo igual ao nome criado. Ao rodar, o Output mostra 100 sem erro vermelho.`,
    },
  ],
};
