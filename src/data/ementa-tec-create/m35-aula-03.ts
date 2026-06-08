import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Funções: Blocos que Reaproveitam Código",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar funções com def para organizar o código, passando parâmetros e devolvendo resultados com return, de modo a transformar trechos repetidos em blocos limpos e reutilizáveis.`,
  descricao: `Nesta aula o aluno descobre uma das ideias mais poderosas da programação: a função. Até agora, nas aulas anteriores, ele escreveu variáveis, tomou decisões com if e repetiu ações com loops. Tudo isso funcionava, mas o código ia crescendo e começava a ter trechos parecidos copiados várias vezes. A função resolve exatamente esse problema: ela é um bloco de código que recebe um nome e pode ser chamado quantas vezes você quiser, sem precisar reescrever nada.

A grande sacada é pensar na função como uma receita. Você escreve a receita uma única vez, dá um nome a ela (por exemplo, fazer um bolo) e, sempre que tiver vontade de bolo, é só chamar a receita pelo nome. Em Python, criamos a receita com a palavra def, escolhemos um nome para a função e colocamos dentro dela os comandos que queremos reaproveitar. Depois, basta escrever o nome da função seguido de parênteses para executá-la.

As funções ficam ainda mais úteis quando aprendem a receber informações de fora. Isso é feito pelos parâmetros, que são como ingredientes que entram entre os parênteses. Uma função que saúda uma pessoa pode receber o nome dela como parâmetro e, assim, servir para qualquer aluno da turma. E quando a função precisa devolver uma resposta para quem a chamou, ela usa a palavra return. O return é a maneira de a função entregar um resultado pronto, que pode ser guardado em uma variável e usado depois.

Ao final da aula, o aluno não terá apenas decorado a palavra def. Ele terá entendido por que programadores de verdade dividem seus programas em pequenas funções: para deixar o código organizado, fácil de ler, fácil de corrigir e, principalmente, para nunca mais repetir o mesmo trecho duas vezes. Essa habilidade será a base para o programa próprio que cada um vai construir nas últimas aulas do mês.`,
  materiais: [
    `Computadores com Python instalado e um editor de código aberto (VS Code, Thonny ou IDLE), um por aluno`,
    `Projetor ou TV para o professor escrever e rodar o código ao vivo na tela grande`,
    `Arquivo de exemplo saudacao.py com um trecho repetido propositalmente, para transformar em função durante a aula`,
    `Arquivo de exemplo funcoes_prontas.py com duas ou três funções simples já escritas como referência`,
    `Quadro branco ou folha para desenhar a metáfora da receita (nome, ingredientes e resultado)`,
    `Folha impressa com o resumo da sintaxe de def, parâmetros e return para o aluno consultar`,
  ],
  conceitosChave: [
    `Função — bloco de código com nome próprio que pode ser executado várias vezes, evitando repetição.`,
    `def — palavra-chave do Python que inicia a criação de uma função e é seguida pelo nome dela.`,
    `Chamar a função — escrever o nome da função seguido de parênteses para que o bloco seja executado.`,
    `Parâmetro — informação que entra na função entre os parênteses, como um ingrediente que muda o resultado.`,
    `Argumento — o valor real que você passa para a função no momento em que a chama.`,
    `return — palavra-chave que faz a função devolver um resultado para quem a chamou.`,
    `Reaproveitar código — usar a mesma função em vários lugares em vez de copiar e colar o mesmo trecho.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma função em Python tem três partes que você precisa dominar. Primeira: a definição, que começa com a palavra def, o nome da função, os parênteses e dois pontos. Tudo que pertence à função fica indentado (recuado) abaixo dela, normalmente com quatro espaços. Segunda: os parâmetros, que são nomes escritos dentro dos parênteses e funcionam como variáveis que recebem valores quando a função é chamada. Terceira: o return, que devolve um resultado. Atenção a um detalhe que confunde iniciantes: print apenas mostra algo na tela, enquanto return entrega um valor que pode ser guardado em uma variável. Uma função sem return ainda funciona, mas não devolve nada utilizável. Antes da aula, abra um arquivo e teste escrever uma função simples, chamá-la duas vezes e guardar o resultado de um return em uma variável, para pegar segurança.

## Passo a passo da aula

Aquecimento (10 min): retome a aula 2 perguntando o que faz um loop. Depois, mostre na tela um código com três linhas quase iguais saudando três alunos com print. Pergunte: não é chato escrever quase a mesma coisa três vezes? Plante a ideia de que existe um jeito melhor.

Conteúdo novo guiado (15 min): no projetor, escreva e rode passo a passo. Comece pela função mais simples:

def saudar():
    print("Ola, seja bem-vindo a aula!")

saudar()
saudar()

Mostre que chamar saudar() duas vezes repete a mensagem sem copiar o código. Em seguida, adicione um parâmetro:

def saudar(nome):
    print("Ola,", nome)

saudar("Ana")
saudar("Pedro")

Por fim, apresente o return:

def somar(a, b):
    return a + b

resultado = somar(3, 5)
print("A soma e:", resultado)

Explique linha a linha: def cria a função, nome e a e b são parâmetros, return devolve o resultado, e a variável resultado guarda o que voltou.

Mão na massa (25 min): cada aluno digita as três funções acima no próprio computador e roda. Depois, abrem o arquivo saudacao.py com o trecho repetido e o transformam em uma função com parâmetro. Circule pela sala conferindo a indentação e o uso dos parênteses. Reforce: defina a função uma vez, chame quantas vezes quiser.

Desafio e compartilhar (10 min): peça que cada um crie uma função dobro(numero) que use return para devolver o número multiplicado por dois. Quem terminar antes recebe o desafio de criar uma função que receba dois parâmetros. Encerre com dois ou três alunos mostrando a função na tela e explicando o que o return devolveu.

## Como explicar de forma clara

Use a metáfora da receita do começo ao fim. A palavra def é o momento de escrever a receita e dar um nome a ela; chamar a função é cozinhar a receita; os parâmetros são os ingredientes que você coloca entre os parênteses; e o return é o prato pronto que sai da cozinha. Diga que copiar e colar código é como reescrever a receita inteira toda vez que dá fome, enquanto a função é a receita guardada na geladeira, pronta para usar. Para a diferença entre print e return, explique: print é falar a resposta em voz alta; return é entregar a resposta na mão de alguém para ela guardar e usar depois. Evite a palavra retornar de forma abstrata; prefira devolver ou entregar.

## Erros comuns e como ajudar

O erro mais frequente é esquecer os dois pontos no fim da linha do def ou esquecer a indentação do bloco; mostre que o Python acusa erro e peça para alinhar os quatro espaços. Outro erro é definir a função mas nunca chamá-la, e então nada acontece; lembre que escrever a receita não cozinha o prato, é preciso chamar pelo nome com os parênteses. Muitos alunos usam print onde deveriam usar return e depois não conseguem guardar o resultado; explique a diferença com calma. Há quem esqueça de passar o argumento e chame somar() sem os números, gerando erro; mostre que os ingredientes são obrigatórios. Por fim, alguns confundem o nome do parâmetro com o valor; reforce que o parâmetro é apenas um apelido que recebe o valor real no momento da chamada.`,
  exercicios: [
    {
      titulo: `Minha primeira função`,
      tipo: `prática no computador`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que todos digitem os dois pontos no fim do def e recuem a linha do print com quatro espaços. Confira se a função foi de fato chamada depois de definida.`,
      atividade: `Crie uma função chamada apresentar que mostre na tela a frase: Eu estou aprendendo funções! Depois, chame a função duas vezes para a frase aparecer duas vezes.`,
      gabarito: `def apresentar():
    print("Eu estou aprendendo funções!")

apresentar()
apresentar()

A tela mostra a frase repetida duas vezes, mas a mensagem foi escrita uma única vez dentro da função.`,
    },
    {
      titulo: `Saudação com parâmetro`,
      tipo: `prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Mostre que o nome entre os parênteses do def é o parâmetro e que o valor entre aspas na chamada é o argumento. Verifique se cada chamada usa um nome diferente.`,
      atividade: `Crie uma função saudar que receba um parâmetro chamado nome e mostre na tela: Ola, seguido do nome. Chame a função três vezes, cada vez com o nome de um colega da turma.`,
      gabarito: `def saudar(nome):
    print("Ola,", nome)

saudar("Ana")
saudar("Pedro")
saudar("Maria")

Cada chamada mostra uma saudação diferente, pois o mesmo bloco serve para qualquer nome passado como argumento.`,
    },
    {
      titulo: `Devolvendo o dobro`,
      tipo: `prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Aqui o foco é o return. Reforce a diferença: a função não mostra nada sozinha, ela devolve o valor, e é o print de fora que exibe o resultado guardado na variável.`,
      atividade: `Crie uma função dobro que receba um número como parâmetro e use return para devolver esse número multiplicado por dois. Guarde o resultado em uma variável e mostre na tela.`,
      gabarito: `def dobro(numero):
    return numero * 2

resultado = dobro(7)
print("O dobro e:", resultado)

A tela mostra: O dobro e: 14. O valor 14 foi devolvido pelo return e guardado na variável resultado.`,
    },
    {
      titulo: `Calculadora de soma`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Esta função usa dois parâmetros. Ajude quem inverter a ordem dos argumentos ou esquecer a vírgula entre eles. Peça que testem com números diferentes para confirmar.`,
      atividade: `Crie uma função somar que receba dois parâmetros, a e b, e devolva a soma deles com return. Depois, chame a função com dois números à sua escolha e mostre o resultado na tela.`,
      gabarito: `def somar(a, b):
    return a + b

resultado = somar(10, 5)
print("A soma e:", resultado)

A tela mostra: A soma e: 15. A função recebe dois ingredientes e entrega a soma pronta pelo return.`,
    },
    {
      titulo: `Eliminando a repetição`,
      tipo: `desafio em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Mostre primeiro o código repetido. Em dupla, os alunos identificam o que muda de uma linha para outra (o nome) e transformam isso em parâmetro. O objetivo é reduzir muitas linhas a uma função e poucas chamadas.`,
      atividade: `Recebam este código com repetição: print uma mensagem de boas-vindas para Ana, depois para Bruno, depois para Carla, cada um em uma linha separada. Reescrevam tudo usando UMA função com um parâmetro e três chamadas.`,
      gabarito: `Código repetido (antes):
print("Bem-vindo, Ana!")
print("Bem-vindo, Bruno!")
print("Bem-vindo, Carla!")

Código com função (depois):
def boas_vindas(nome):
    print("Bem-vindo,", nome)

boas_vindas("Ana")
boas_vindas("Bruno")
boas_vindas("Carla")

A dupla percebe que só o nome mudava; ele virou parâmetro, e a mensagem foi escrita uma única vez dentro da função.`,
    },
  ],
};
