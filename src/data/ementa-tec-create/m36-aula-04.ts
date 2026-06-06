import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Dividindo o Código em Módulos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a separar funções em arquivos .py próprios e reaproveitá-los em outro programa usando import, montando um mini projeto com vários arquivos bem organizados.`,
  descricao: `Na aula anterior os alunos aprenderam a criar as próprias funções para não repetir código. Agora eles dão o passo seguinte: tirar essas funções de dentro do programa principal e guardá-las em um arquivo separado, só delas. Esse arquivo separado, cheio de funções prontas para usar, é o que chamamos de módulo. Em vez de ter tudo amontoado em um único arquivo gigante, o aluno vai aprender a dividir o código em peças menores, cada uma com a sua responsabilidade.

Um módulo nada mais é do que um arquivo Python comum, terminado em .py. A novidade é que outro arquivo pode "chamar" esse módulo com a palavra import e usar todas as funções que estão lá dentro, como se fossem suas. É exatamente assim que o Python funciona por baixo dos panos: quando você escreve import random ou import math, está importando módulos prontos. Nesta aula o aluno descobre que ele também pode criar os seus.

Junto com o import, a aula apresenta um trecho que parece estranho à primeira vista, mas que é muito importante: o bloco if __name__ == "__main__". Ele serve para o Python saber a diferença entre "este arquivo foi executado diretamente" e "este arquivo foi importado por outro". Isso evita que código de teste rode na hora errada e é uma marca de código profissional e organizado.

Ao final da aula, cada aluno terá pelo menos dois arquivos trabalhando juntos: um módulo de utilidades (com funções úteis criadas por ele) e um programa principal que importa esse módulo e usa as funções. O aluno sai entendendo, com as próprias palavras, por que separar o código deixa tudo mais fácil de achar, de consertar e de reaproveitar nos próximos projetos.`,
  materiais: [
    `Computadores (1 por aluno) com Python instalado e um editor de código (VS Code ou Thonny) aberto`,
    `Projetor ou TV para o professor mostrar a tela e digitar o código ao vivo`,
    `Arquivos de exemplo prontos: utilidades.py e principal.py para o professor demonstrar o import`,
    `Pasta vazia chamada projeto-modulos para cada aluno guardar os arquivos da aula no mesmo lugar`,
    `Terminal aberto no editor para rodar os programas com o comando python`,
    `Folha-resumo impressa com a sintaxe do import e o bloco if __name__ == "__main__"`,
  ],
  conceitosChave: [
    `Módulo — um arquivo Python (.py) cheio de funções prontas que outro arquivo pode reaproveitar.`,
    `import — a palavra que traz um módulo inteiro para dentro do seu programa para usar as funções dele.`,
    `from import — forma de importar só uma função específica de um módulo, em vez do módulo inteiro.`,
    `Programa principal — o arquivo que você realmente executa; ele organiza e chama as funções dos módulos.`,
    `Módulo de utilidades — um arquivo só com funções úteis e reaproveitáveis, separado do programa principal.`,
    `if __name__ == "__main__" — bloco que só roda quando o arquivo é executado direto, e não quando ele é importado.`,
    `Mesma pasta — para o import simples funcionar, o módulo e o programa principal precisam estar na mesma pasta.`,
  ],
  treinamento: `## O que o professor precisa saber

Um módulo é simplesmente um arquivo .py com funções dentro. Se você tem um arquivo chamado utilidades.py, o nome do módulo é "utilidades" (sem o .py). Em outro arquivo, você escreve import utilidades e passa a poder usar as funções dele assim: utilidades.saudacao(). Existe também a forma from utilidades import saudacao, que traz só aquela função e permite chamá-la direto, sem o prefixo. Regra de ouro desta aula: os dois arquivos precisam estar na MESMA pasta, senão o import simples não acha o módulo.

O bloco if __name__ == "__main__" parece complicado, mas a ideia é simples. Todo arquivo Python tem uma variável secreta chamada __name__. Quando você roda o arquivo direto, ela vale "__main__". Quando o arquivo é importado por outro, ela vale o nome do módulo. Esse bloco serve para colocar testes que só devem rodar quando você executa aquele arquivo sozinho. Antes da aula, crie a pasta, os dois arquivos e rode uma vez para não descobrir os menus na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula 3. Pergunte: "é chato copiar a mesma função para cada projeto novo?". Mostre no projetor um arquivo gigante e bagunçado e um dividido em peças. Apresente a palavra do dia: módulo.

2. Conteúdo guiado (15 min): no projetor, crie um arquivo utilidades.py e digite:

def saudacao(nome):
    return "Ola, " + nome + "!"

def dobro(numero):
    return numero * 2

Salve. Crie outro arquivo, principal.py, na mesma pasta, e digite:

import utilidades

print(utilidades.saudacao("Ana"))
print(utilidades.dobro(5))

Rode principal.py no terminal com python principal.py e mostre o resultado. Depois apresente a outra forma: from utilidades import saudacao, explicando que agora pode chamar só saudacao("Joao"). Por fim, no utilidades.py, adicione no final:

if __name__ == "__main__":
    print("Testando o modulo utilidades")
    print(saudacao("teste"))

Rode utilidades.py direto (aparece o teste) e depois rode principal.py (o teste NÃO aparece). Esse contraste é o coração da aula.

3. Mão na massa (25 min): cada aluno cria a pasta projeto-modulos, o arquivo utilidades.py com ao menos duas funções próprias (ex.: uma que soma dois números e outra que devolve um nome em letras maiúsculas usando .upper()), e o arquivo principal.py que importa e usa as duas. Circule pela sala conferindo se os arquivos estão na mesma pasta e se o import está escrito com o nome certo.

4. Desafio e compartilhar (10 min): cada aluno adiciona um bloco if __name__ == "__main__" no utilidades.py com um teste e mostra à turma que o teste roda sozinho, mas some quando importado. Salve a pasta para a aula seguinte.

## Como explicar de forma clara (linguagem para a idade)

Compare o módulo a uma caixa de ferramentas. O principal.py é você trabalhando; o utilidades.py é a caixa cheia de ferramentas prontas. O import é abrir a caixa para pegar a ferramenta de que precisa. Para o bloco main, use a imagem do ensaio: o if __name__ == "__main__" é como ensaiar a peça quando você está sozinho no palco; quando outro programa chama o seu módulo, a plateia chegou e o ensaio não acontece, só a apresentação de verdade. Repita a frase-chave: "cada arquivo com a sua função, tudo na mesma pasta".

## Erros comuns e como ajudar

Arquivos em pastas diferentes: o erro ModuleNotFoundError quase sempre é isso; peça para colocar os dois na mesma pasta. Escrever import utilidades.py com o .py no fim: explique que o import usa só o nome, sem extensão. Chamar a função sem o prefixo depois de import utilidades (escrever saudacao() em vez de utilidades.saudacao()): mostre as duas formas e quando usar cada uma. Confundir __name__ com nome de variável comum: lembre que são dois sublinhados de cada lado. Esquecer de salvar o utilidades.py antes de rodar o principal.py: o Python usa a última versão salva, então salvar sempre primeiro.`,
  exercicios: [
    {
      titulo: `Lendo o código do professor`,
      tipo: `Aquecimento`,
      tempo: `7 min`,
      guiaProfessor: `Mostre os dois arquivos prontos no projetor. Deixe os alunos preverem a saída antes de rodar. Só depois execute para conferir.`,
      atividade: `Olhe estes dois arquivos. Em utilidades.py existe a função dobro(numero) que devolve numero * 2. Em principal.py está escrito import utilidades e print(utilidades.dobro(5)). Sem rodar ainda, escreva no caderno o que você acha que vai aparecer na tela.`,
      gabarito: `Vai aparecer 10 na tela, porque dobro(5) devolve 5 * 2, que é igual a 10. O aluno acerta ao prever o número 10 e ao entender que principal.py usou uma função que estava no módulo utilidades, e não no próprio arquivo.`,
    },
    {
      titulo: `Meu primeiro módulo`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que cada aluno crie os dois arquivos na MESMA pasta. Confira se o import usa o nome sem .py. Esse é o exercício base da aula.`,
      atividade: `Crie um arquivo utilidades.py com uma função chamada saudacao(nome) que devolve "Ola, " + nome + "!". Em seguida crie principal.py na mesma pasta, importe o módulo e mostre na tela a saudação para o seu nome. Rode o principal.py.`,
      gabarito: `Arquivo utilidades.py:

def saudacao(nome):
    return "Ola, " + nome + "!"

Arquivo principal.py:

import utilidades

print(utilidades.saudacao("Lucas"))

Ao rodar, aparece: Ola, Lucas! O aluno acerta quando os dois arquivos estão na mesma pasta e o programa principal usa a função que veio do módulo.`,
    },
    {
      titulo: `Duas funções na caixa de ferramentas`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Peça duas funções no módulo e que o principal use as duas. Reforce que mexer só no utilidades.py já deixa o principal mais poderoso.`,
      atividade: `No seu utilidades.py, adicione uma segunda função chamada soma(a, b) que devolve a + b. No principal.py, use as duas funções: mostre uma saudação e mostre o resultado de somar dois números. Rode e confira.`,
      gabarito: `Arquivo utilidades.py:

def saudacao(nome):
    return "Ola, " + nome + "!"

def soma(a, b):
    return a + b

Arquivo principal.py:

import utilidades

print(utilidades.saudacao("Ana"))
print(utilidades.soma(4, 3))

Ao rodar, aparece: Ola, Ana! e depois 7. O aluno acerta quando as duas funções ficam no módulo e o principal chama ambas com o prefixo utilidades.`,
    },
    {
      titulo: `Importando só uma função`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Mostre a diferença entre import utilidades e from utilidades import soma. Na segunda forma, a função é chamada sem o prefixo.`,
      atividade: `Em dupla, mudem o principal.py para usar a forma from utilidades import soma. Depois chamem a função direto, escrevendo soma(10, 5) sem o prefixo utilidades. Rodem e expliquem um para o outro por que agora não precisa do prefixo.`,
      gabarito: `Arquivo principal.py:

from utilidades import soma

print(soma(10, 5))

Ao rodar, aparece: 15. A diferença é que from utilidades import soma traz só aquela função para dentro do programa, então ela é chamada direto, sem escrever utilidades. na frente. A dupla acerta ao usar a nova forma e ao explicar que o prefixo some porque a função foi importada diretamente.`,
    },
    {
      titulo: `O bloco main que só roda sozinho`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esse é o conceito mais avançado da aula. Peça para rodar o utilidades.py direto (teste aparece) e depois o principal.py (teste some). O contraste é a prova de que funcionou.`,
      atividade: `No final do seu utilidades.py, adicione um bloco if __name__ == "__main__" que mostre uma mensagem de teste e o resultado de soma(2, 2). Rode primeiro o utilidades.py direto e veja o teste aparecer. Depois rode o principal.py e confira que o teste NÃO aparece.`,
      gabarito: `Final do arquivo utilidades.py:

def saudacao(nome):
    return "Ola, " + nome + "!"

def soma(a, b):
    return a + b

if __name__ == "__main__":
    print("Testando o modulo utilidades")
    print(soma(2, 2))

Ao rodar utilidades.py direto, aparece: Testando o modulo utilidades e depois 4. Ao rodar principal.py, esse teste NÃO aparece, porque ao ser importado a variável __name__ deixa de valer "__main__". O aluno acerta quando o teste roda sozinho mas some na importação, mostrando que entendeu para que serve o bloco.`,
    },
  ],
};
