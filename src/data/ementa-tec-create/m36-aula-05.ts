import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Bibliotecas que Vem com o Python",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conhecer a biblioteca padrão do Python explorando os módulos random, math, datetime e os para deixar os programas mais ricos com números aleatórios, cálculos prontos e datas.`,
  descricao: `O Python já vem cheio de presentes prontos para usar. Esses presentes se chamam módulos da biblioteca padrão: pequenas caixas de ferramentas que vêm instaladas junto com o Python, sem precisar baixar nada. Nesta aula o aluno descobre que não precisa reinventar a roda toda vez, porque alguém muito esperto já escreveu funções úteis e deixou guardadas para a gente usar com um simples import.

A aula passeia por quatro módulos que aparecem o tempo todo na vida de quem programa. O módulo random sorteia números e escolhe itens ao acaso, perfeito para jogos, dados e sorteios. O módulo math traz cálculos prontos como raiz quadrada, o valor de pi e arredondamentos. O módulo datetime sabe que dia é hoje e que horas são agora, ideal para mostrar a data em um programa. E o módulo os conversa com o sistema do computador, descobrindo, por exemplo, em qual pasta o programa está rodando.

A ideia é experimentar cada módulo com exemplos curtinhos, escrevendo poucas linhas e vendo o resultado na hora. Em vez de uma explicação longa, o aluno testa, observa e se diverte. Cada módulo abre uma porta nova para tornar os programas mais interessantes, e isso conecta direto com o projeto final de Python que a turma vai planejar nas próximas aulas.

No fim, o aluno entende a regra de ouro de um bom programador: antes de escrever uma função difícil do zero, vale a pena perguntar se o Python já não tem isso pronto. A biblioteca padrão é gigante, e conhecer só esses quatro módulos já abre um mundo de possibilidades.`,
  materiais: [
    `Computadores com Python instalado (versão 3) e um editor de código aberto, como o VS Code ou o IDLE`,
    `Projetor ligado para o professor mostrar o código sendo escrito linha a linha`,
    `Arquivo de exemplo "exemplos_modulos.py" com os trechos da aula, caso algum aluno precise copiar`,
    `Acesso ao terminal ou ao botão de executar do editor para rodar os programas`,
    `Quadro branco ou bloco de notas para listar os quatro módulos e o que cada um faz`,
    `Folha impressa com a "cola rápida" dos comandos principais de random, math, datetime e os`,
    `Navegador aberto na documentação oficial do Python (docs.python.org) para mostrar a lista de módulos`,
  ],
  conceitosChave: [
    `Biblioteca padrão — conjunto de módulos que já vem instalado com o Python, pronto para usar sem baixar nada.`,
    `Módulo — uma caixa de ferramentas com funções prontas que a gente abre usando a palavra import.`,
    `import — comando que carrega um módulo para dentro do nosso programa, liberando suas funções.`,
    `random — módulo que gera números aleatórios e faz escolhas ao acaso, ótimo para jogos e sorteios.`,
    `math — módulo de cálculos prontos, como raiz quadrada, o valor de pi e arredondamentos.`,
    `datetime — módulo que sabe a data e a hora atuais e ajuda a trabalhar com calendário e relógio.`,
    `os — módulo que conversa com o sistema do computador, como descobrir a pasta atual do programa.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa decorar a biblioteca padrão inteira: ela é enorme. Para esta aula, basta dominar quatro módulos com poucos comandos cada. A ideia central é simples: o Python já vem com várias "caixas de ferramentas" prontas, e a gente abre cada caixa com a palavra import. Depois de importar, usamos as funções escrevendo o nome do módulo, um ponto e o nome da função, por exemplo random.randint. Antes da aula, abra o editor e teste você mesmo os quatro exemplos abaixo, para chegar confiante. Tudo roda em segundos e não precisa de internet. Lembre os alunos de salvar o arquivo com final .py antes de executar.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): retome a aula anterior perguntando "o que é uma função?". Em seguida, faça a ponte: hoje vamos usar funções que outras pessoas já escreveram para a gente. Mostre no projetor que basta uma linha para ganhar superpoderes. Escreva e rode:

import random
print(random.randint(1, 6))

Explique que randint(1, 6) sorteia um número de 1 a 6, como um dado. Rode duas ou três vezes para a turma ver o número mudar.

Conteúdo novo guiado (15 min): apresente os quatro módulos, um de cada vez, escrevendo no projetor. Módulo random, com escolha ao acaso:

import random
cores = ["vermelho", "azul", "verde"]
print(random.choice(cores))

Módulo math, com cálculos prontos:

import math
print(math.sqrt(16))
print(math.pi)

Diga que sqrt é raiz quadrada (de 16 dá 4) e que math.pi é o número pi (3,14...). Módulo datetime, com a data de hoje:

import datetime
hoje = datetime.date.today()
print("Hoje e:", hoje)

Módulo os, para descobrir a pasta atual:

import os
print("Pasta atual:", os.getcwd())

Mão na massa (25 min): peça que cada aluno crie um arquivo chamado meus_modulos.py e digite os quatro exemplos, rodando um por vez. Depois lance a missão: montar um "sorteador de número da sorte" que junta dois módulos:

import random
import datetime

sorte = random.randint(1, 100)
hoje = datetime.date.today()
print("Seu numero da sorte de hoje e:", sorte)
print("Valido para o dia:", hoje)

Caminhe pela sala conferindo a indentação e os imports no topo. Incentive quem terminar a trocar o intervalo do randint ou a sortear de uma lista de nomes.

Desafio + compartilhar (10 min): cada aluno acrescenta uma linha usando math, por exemplo print("Raiz do numero da sorte:", math.sqrt(sorte)), lembrando de importar math no topo. Termine com uma roda rápida em que dois ou três alunos mostram a saída do seu programa.

## Como explicar de forma clara (linguagem para a idade)

Compare a biblioteca padrão com um armário cheio de gavetas que já vem com a casa. Cada gaveta é um módulo, e o import é a chave que abre a gaveta certa. Diga que ninguém precisa fabricar um martelo do zero quando já existe um na gaveta. Use exemplos do dia a dia: random é o copo de dados do jogo de tabuleiro, datetime é o calendário da parede, math é a calculadora e os é o "mapa" que mostra onde a gente está dentro do computador. Reforce sempre que o import vai lá no topo do arquivo, antes de tudo.

## Erros comuns e como ajudar

- Esquecer o import: aparece "NameError" ou "name ... is not defined". Mostre que a primeira linha precisa ter o import do módulo.
- Escrever o nome errado, como "Random" com letra maiúscula: lembre que módulos são minúsculos.
- Esquecer o ponto entre módulo e função (random randint em vez de random.randint): aponte o ponto que liga os dois.
- Não salvar com final .py: o editor não roda como Python. Peça para salvar de novo conferindo o nome.
- Achar que random está quebrado por dar números diferentes: explique que é exatamente isso que ele faz, sortear toda vez.`,
  exercicios: [
    {
      titulo: `Rolando o dado`,
      tipo: `Prática guiada`,
      tempo: `7 min`,
      guiaProfessor: `Faça junto no projetor primeiro e depois deixe cada aluno repetir. O objetivo é fixar o import e o uso de random.randint. Peça para rodar várias vezes e perceber que o número muda.`,
      atividade: `Crie um arquivo dado.py que importe o módulo random e imprima na tela um número sorteado de 1 a 6, como se fosse a rolagem de um dado. Rode o programa três vezes e observe os resultados.`,
      gabarito: `import random
numero = random.randint(1, 6)
print("Você tirou:", numero)

O aluno deve perceber que o número muda a cada execução, porque random sorteia um valor novo toda vez.`,
    },
    {
      titulo: `Sorteador de nomes`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Reforce a diferença entre random.randint (sorteia número) e random.choice (sorteia item de uma lista). Ajude quem esquecer os colchetes da lista. Sugira usar os nomes dos próprios colegas.`,
      atividade: `Crie uma lista com pelo menos quatro nomes da turma e use o módulo random para sortear um nome para apagar o quadro. Imprima na tela quem foi o escolhido.`,
      gabarito: `import random
nomes = ["Ana", "Bruno", "Carla", "Davi"]
escolhido = random.choice(nomes)
print("O escolhido foi:", escolhido)

Qualquer lista com quatro ou mais nomes vale. O importante é usar random.choice sobre a lista.`,
    },
    {
      titulo: `Calculadora de raiz e área`,
      tipo: `Exercício de código`,
      tempo: `11 min`,
      guiaProfessor: `Apresente math.sqrt e math.pi. Explique que para a área do círculo usamos pi vezes o raio ao quadrado. O raio ao quadrado pode ser raio vezes raio. Confira se o import math está no topo.`,
      atividade: `Usando o módulo math, escreva um programa que mostre a raiz quadrada de 81 e, em seguida, a área de um círculo de raio 5 (área é pi vezes o raio vezes o raio).`,
      gabarito: `import math
print("Raiz de 81:", math.sqrt(81))
raio = 5
area = math.pi * raio * raio
print("Area do circulo:", area)

A raiz de 81 dá 9.0 e a área dá aproximadamente 78.5. Aceite também o uso de raio ** 2 no lugar de raio * raio.`,
    },
    {
      titulo: `Cartão com a data de hoje`,
      tipo: `Desafio de código`,
      tempo: `13 min`,
      guiaProfessor: `Combine datetime com random. Mostre datetime.date.today() para a data atual. Deixe o aluno escolher a mensagem. O foco é juntar dois módulos no mesmo programa, com os dois imports no topo.`,
      atividade: `Monte um "cartão do dia" que mostre a data de hoje (módulo datetime) e uma mensagem da sorte sorteada de uma lista de pelo menos três frases (módulo random). Imprima as duas coisas na tela.`,
      gabarito: `import datetime
import random

hoje = datetime.date.today()
frases = ["Hoje vai dar tudo certo!", "Você vai aprender muito!", "Dia de criar algo novo!"]
mensagem = random.choice(frases)
print("Data de hoje:", hoje)
print("Mensagem da sorte:", mensagem)

O programa precisa importar os dois módulos, mostrar a data atual e uma frase sorteada da lista.`,
    },
    {
      titulo: `Relatório do meu programa`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este exercício junta os quatro módulos da aula. Apresente os.getcwd() como a pasta onde o programa está. Ajude a organizar os quatro imports no topo. Valorize quem deixar a saída bem escrita e organizada.`,
      atividade: `Crie um programa "relatorio.py" que mostre, em quatro linhas: (1) a pasta atual usando o módulo os; (2) a data de hoje usando datetime; (3) um número sorteado de 1 a 1000 usando random; (4) a raiz quadrada desse número sorteado usando math.`,
      gabarito: `import os
import datetime
import random
import math

pasta = os.getcwd()
hoje = datetime.date.today()
numero = random.randint(1, 1000)
raiz = math.sqrt(numero)

print("Pasta atual:", pasta)
print("Data de hoje:", hoje)
print("Numero sorteado:", numero)
print("Raiz quadrada dele:", raiz)

O programa deve importar os quatro módulos e imprimir as quatro informações, usando o mesmo número sorteado tanto na linha do random quanto na do math.`,
    },
  ],
};
