import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Criando Suas Próprias Funções",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a criar suas próprias funções em Python, usando parâmetros, valores de retorno e argumentos padrão para transformar código repetido em blocos reutilizáveis e organizados.`,
  descricao: `Até agora o aluno usou funções que já vêm prontas no Python, como print e input. Nesta aula ele dá um salto importante: começa a criar as próprias funções. Uma função é como uma "receita" com nome: você escreve os passos uma única vez e depois manda executar quantas vezes quiser, só chamando o nome dela. Isso evita o famoso "copiar e colar" o mesmo código várias vezes, deixa o programa mais curto e muito mais fácil de arrumar quando algo dá errado.

O coração da aula são três ideias que andam juntas. A primeira é parâmetro: a função pode receber informações de fora para trabalhar, como uma receita que recebe os ingredientes. A segunda é valor de retorno: a função pode devolver um resultado para quem a chamou, usando a palavra return, como a receita devolve o bolo pronto. A terceira é argumento padrão: a função pode ter um valor já combinado caso ninguém informe nada, o que deixa o uso mais flexível e evita erros.

O aluno também conhece o conceito de escopo de variáveis. Variáveis criadas dentro de uma função são locais: elas só existem ali dentro, "nascem" quando a função é chamada e "somem" quando ela termina. Já as variáveis criadas fora de todas as funções são globais e podem ser lidas em vários lugares. Entender essa diferença evita um monte de confusão, porque explica por que às vezes o Python diz que uma variável "não existe" mesmo que você jure que criou.

Na prática, o aluno pega trechos soltos de código (que ele mesmo já escreveu em aulas anteriores) e os transforma em funções reutilizáveis, com nome claro, parâmetros e return. Ao final, ele percebe que escrever funções não é mais difícil, e sim o jeito de quem programa de verdade: dividir o problema em pedaços pequenos, dar um nome a cada pedaço e montar o programa juntando essas peças. Essa habilidade será usada nas próximas aulas, quando o código for dividido em módulos e no projeto final do Ano 3.`,
  materiais: [
    `Computadores (1 por aluno) com Python 3 instalado e um editor de código aberto (VS Code, Thonny ou IDLE)`,
    `Projetor ou TV para o professor mostrar a própria tela com o editor e o terminal durante a explicação`,
    `Arquivo de exemplo "antes.py" com código repetido (várias saudações ou várias somas copiadas e coladas) para o aluno melhorar`,
    `Slide ou folha impressa com a "anatomia de uma função" (def, nome, parâmetros, dois pontos, corpo indentado, return)`,
    `Folha de "checklist da função" impressa (tem def? tem nome claro? recebe parâmetro? devolve com return? foi chamada?)`,
    `Cartão de referência rápida com a diferença entre variável local e variável global`,
    `Quadro branco ou cartolina para desenhar a metáfora da "receita" (ingredientes entram, bolo pronto sai)`,
  ],
  conceitosChave: [
    `Função — é um bloco de código com nome que executa uma tarefa; você escreve uma vez e usa quantas vezes quiser, só chamando o nome.`,
    `def — é a palavra do Python que começa a definição de uma função; depois dela vem o nome, os parênteses e dois pontos.`,
    `Parâmetro — é a informação que a função recebe de fora para trabalhar, escrita dentro dos parênteses na definição (como os ingredientes de uma receita).`,
    `Argumento — é o valor real que você passa para a função no momento de chamá-la, que vai ocupar o lugar do parâmetro.`,
    `return — é a palavra que faz a função devolver um resultado para quem a chamou; sem ela, a função não entrega nenhum valor de volta.`,
    `Argumento padrão — é um valor já combinado para um parâmetro; se ninguém informar nada na chamada, a função usa esse valor automaticamente.`,
    `Escopo (local x global) — variável local só existe dentro da função onde nasceu; variável global é criada fora das funções e pode ser lida em mais lugares.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma função é um bloco de código reutilizável com um nome. Em Python ela começa com a palavra def, seguida do nome, dos parênteses com os parâmetros e de dois pontos. O corpo da função fica indentado (com espaços), exatamente como dentro de um if ou de um for. Você só precisa dominar quatro ideias: definir (def), receber dados (parâmetros), devolver dados (return) e chamar (escrever o nome com parênteses). Um detalhe que confunde iniciantes: definir a função NÃO a executa. Ela só roda quando você a chama. Outra: return entrega um valor, enquanto print apenas mostra na tela; são coisas diferentes. Antes da aula, digite e rode você mesmo os dois exemplos abaixo uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento (10 min). Abra o arquivo "antes.py" no projetor, com código repetido, por exemplo:

   print("Ola, Ana, bem-vinda!")
   print("Ola, Bruno, bem-vindo!")
   print("Ola, Caio, bem-vindo!")

   Pergunte: "E se a escola tiver 200 alunos? Vamos copiar 200 vezes?" Deixe a turma sentir o problema. Diga que a solução tem nome: função.

2. Conteúdo novo guiado (15 min). Digite ao vivo, linha a linha, explicando cada parte:

   def saudacao(nome):
       print("Ola,", nome, "seja bem-vindo!")

   Explique: def começa a função; saudacao é o nome; nome (dentro dos parênteses) é o parâmetro; os dois pontos abrem o corpo; a linha indentada é o que a função faz. Agora chame a função:

   saudacao("Ana")
   saudacao("Bruno")

   Mostre que "Ana" e "Bruno" são os argumentos que entram no lugar de nome. Em seguida apresente o return com uma função que devolve um resultado:

   def somar(a, b):
       resultado = a + b
       return resultado

   total = somar(4, 5)
   print("A soma deu:", total)

   Explique que return entrega o valor para fora, e por isso conseguimos guardar em total. Por fim, mostre o argumento padrão:

   def saudacao(nome, saudacao_texto="Ola"):
       print(saudacao_texto, nome)

   saudacao("Ana")
   saudacao("Bruno", "Bom dia")

   Diga: se ninguém informar o segundo valor, o Python usa "Ola" sozinho.

3. Mão na massa (25 min). Cada aluno abre o "antes.py" e transforma o código repetido em uma função saudacao(nome), depois cria uma função somar(a, b) com return. Em seguida criam uma função area_retangulo(largura, altura) que devolve largura vezes altura. Circule pela sala usando o checklist (tem def? nome claro? recebe parâmetro? devolve com return? foi chamada?).

4. Desafio + compartilhar (10 min). Lance o desafio do escopo: peça que criem uma variável dentro de uma função e tentem usá-la fora. O Python dará erro de "não definida". Explique que a variável era local. Cada aluno mostra a tela e diz o nome da função que criou e o que ela devolve.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da receita: a função é a receita com nome; os parâmetros são os ingredientes que entram; o return é o bolo pronto que sai. Chamar a função é "pedir para fazer a receita". Para o escopo, diga que a cozinha tem uma despensa privada: o que você cria dentro da função fica trancado lá dentro e some quando a função acaba; já a despensa da casa (variáveis globais) todo mundo enxerga. Reforce a diferença entre print e return assim: print é falar a resposta em voz alta; return é entregar a resposta na mão de alguém para usar depois. Repita que escrever a função (def) é só guardar a receita; nada acontece até você chamá-la.

## Erros comuns e como ajudar

- Esquecer os dois pontos depois dos parênteses ou esquecer a indentação do corpo: mostre a "anatomia da função" e peça para conferir o alinhamento.
- Confundir return com print: peça para guardar o resultado em uma variável; se vier None, faltou o return.
- Definir a função e estranhar que "nada aconteceu": lembre que é preciso chamá-la escrevendo o nome com parênteses.
- Tentar usar fora da função uma variável criada dentro dela: explique que ela é local e some quando a função termina; a solução é devolvê-la com return.
- Esquecer de passar um argumento obrigatório: o Python avisa que falta um argumento; mostre como o argumento padrão ajuda nesses casos.`,
  exercicios: [
    {
      titulo: `De repetido para função`,
      tipo: `Prática guiada`,
      tempo: `7 min`,
      guiaProfessor: `Abra o "antes.py" com três linhas de print repetidas. Mostre no projetor que o miolo das três linhas é igual, só muda o nome. Conduza a turma a criar uma função saudacao(nome) e chamá-la três vezes. Reforce a indentação e os dois pontos.`,
      atividade: `Pegue o código repetido com três saudações. Crie uma função chamada saudacao que recebe um parâmetro nome e imprime a mensagem. Depois chame a função três vezes, uma para cada nome (Ana, Bruno e Caio).`,
      gabarito: `def saudacao(nome):
    print("Ola,", nome, "seja bem-vindo!")

saudacao("Ana")
saudacao("Bruno")
saudacao("Caio")

Acerto: a função tem def, nome claro, um parâmetro, corpo indentado e é chamada três vezes, produzindo as três saudações sem código repetido.`,
    },
    {
      titulo: `Uma função que devolve resultado`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Aqui entra o return. Reforce a diferença entre mostrar (print) e devolver (return). Peça que guardem o resultado em uma variável e só depois imprimam, para perceberem que o valor saiu da função.`,
      atividade: `Crie uma função chamada somar que recebe dois parâmetros, a e b, e devolve a soma deles usando return. Depois chame somar com os números 4 e 5, guarde o resultado em uma variável total e imprima total.`,
      gabarito: `def somar(a, b):
    resultado = a + b
    return resultado

total = somar(4, 5)
print("A soma deu:", total)

Acerto: a tela mostra "A soma deu: 9". A função usa return (não print) para devolver o valor, e o resultado fica guardado em total.`,
    },
    {
      titulo: `Calculadora de área`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Combina dois parâmetros e return num caso útil. Deixe os alunos escolherem os valores de teste. Confira se usaram return (e não print dentro da função). Quem terminar antes pode imprimir a área de dois retângulos diferentes.`,
      atividade: `Crie uma função chamada area_retangulo que recebe largura e altura e devolve a área (largura vezes altura) usando return. Chame a função com largura 6 e altura 3, guarde o resultado em uma variável e imprima o valor da área.`,
      gabarito: `def area_retangulo(largura, altura):
    return largura * altura

area = area_retangulo(6, 3)
print("A area do retangulo e:", area)

Acerto: a tela mostra "A area do retangulo e: 18". A função recebe dois parâmetros e devolve o produto com return; o valor é guardado em area e impresso.`,
    },
    {
      titulo: `Argumento padrão em dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Apresente o argumento padrão. Forme duplas: um digita, o outro confere. Mostre que, se o segundo valor não for passado, o Python usa o padrão sozinho. Teste as duas formas de chamar para ver a diferença na saída.`,
      atividade: `Em dupla, criem uma função chamada saudacao que recebe nome e um segundo parâmetro saudacao_texto com o valor padrão "Ola". A função deve imprimir o texto da saudação junto com o nome. Chamem a função de duas formas: uma só com o nome e outra passando "Bom dia" como segundo valor.`,
      gabarito: `def saudacao(nome, saudacao_texto="Ola"):
    print(saudacao_texto, nome)

saudacao("Ana")
saudacao("Bruno", "Bom dia")

Acerto: a tela mostra "Ola Ana" na primeira linha e "Bom dia Bruno" na segunda. Quando o segundo valor não é passado, a função usa o padrão "Ola".`,
    },
    {
      titulo: `Caça ao escopo: local x global`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta tarefa amarra a ideia de escopo. Primeiro provoque o erro: criar uma variável dentro da função e tentar usá-la fora (o Python avisa que ela não existe). Depois mostre a solução correta com return. Use o erro como aprendizado, não como problema. Feche a aula pedindo que cada dupla explique por que a variável "sumiu".`,
      atividade: `Parte 1: crie uma função chamada dobro que recebe um número, calcula dentro dela uma variável resultado igual ao número vezes 2 e tenta imprimir resultado FORA da função. Observe o erro e anote a mensagem. Parte 2: conserte o programa fazendo a função devolver resultado com return, guardando o valor em uma variável de fora e imprimindo essa variável.`,
      gabarito: `Parte 1 (gera erro de propósito, pois resultado e local):
def dobro(numero):
    resultado = numero * 2

dobro(5)
print(resultado)
# Python avisa: name 'resultado' is not defined

Parte 2 (versao correta com return):
def dobro(numero):
    resultado = numero * 2
    return resultado

valor = dobro(5)
print("O dobro e:", valor)

Acerto: o aluno entende que resultado era uma variável local (só existia dentro da função) e por isso deu erro fora dela; ao usar return e guardar em valor, a tela mostra "O dobro e: 10".`,
    },
  ],
};
