import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Meu Programa: Ideia e Construção",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Escolher a ideia do próprio programa em Python e construir a primeira versão funcional, usando variáveis, entrada de dados e funções.`,
  descricao: `Esta é a aula em que o aluno deixa de seguir exercícios prontos e começa a criar o seu próprio programa, o entregável do mês. Durante as seis aulas anteriores ele aprendeu variáveis, decisões (if), repetições (loops), funções, listas e dicionários, e como pensar como programador montando algoritmos. Agora tudo isso vira ferramenta a serviço de uma ideia escolhida por ele. O coração de hoje é planejar com clareza e tirar do papel a primeira versão que realmente roda.

A aula tem duas metades muito definidas. Na primeira, o aluno decide o que o programa vai fazer e quais são as funcionalidades principais. Ele não precisa inventar algo grandioso: programas simples e bem terminados valem muito mais do que ideias enormes que nunca funcionam. Bons exemplos para esta idade são um quiz de perguntas e respostas, uma calculadora de gorjeta, um gerador de senhas, um conversor de moedas ou um jogo de adivinhar o número. O professor ajuda cada aluno a escolher algo do tamanho certo para terminar até a Aula 8.

Na segunda metade, o aluno monta a estrutura base do programa. Aqui entra a ideia de esqueleto: primeiro criamos as funções vazias com nomes claros, depois preenchemos cada uma. O programa começa pedindo dados ao usuário com a função input, guarda esses dados em variáveis e organiza as tarefas em funções que serão chamadas em ordem. Não é preciso terminar tudo hoje. A meta é sair da aula com um arquivo que executa sem erro e já faz pelo menos uma coisa de verdade.

O professor atua como um orientador de projeto. Em vez de dar a resposta, ele faz perguntas que ajudam o aluno a pensar: o que o programa precisa perguntar ao usuário? O que ele faz com essa resposta? O que aparece na tela no final? Esse acompanhamento individual é possível porque a turma tem no máximo dez alunos. Ao final da aula, cada aluno tem um plano escrito das funcionalidades e um arquivo Python com a primeira versão funcional, pronta para crescer na próxima aula.`,
  materiais: [
    `Computadores com Python instalado e um editor de código (VS Code, Thonny ou similar)`,
    `Projetor ou TV para mostrar o exemplo guiado e o código linha a linha`,
    `Arquivo de exemplo pronto do professor (um quiz simples em Python) para demonstrar a estrutura`,
    `Folha de planejamento impressa com três campos: Nome do programa, O que ele faz, Funcionalidades principais`,
    `Lista de ideias-modelo no quadro (quiz, calculadora de gorjeta, gerador de senha, adivinhar o número)`,
    `Acesso à pasta da turma para cada aluno salvar o próprio arquivo .py`,
    `Quadro branco ou flip chart para anotar as escolhas de ideia de cada aluno`,
  ],
  conceitosChave: [
    `Programa próprio — um projeto pensado e construído pelo aluno do zero, em vez de um exercício pronto da apostila.`,
    `Funcionalidade — cada coisa que o programa sabe fazer, como perguntar o nome, somar números ou mostrar um resultado.`,
    `Planejamento — escrever antes de programar o que o programa vai fazer, para não se perder no meio do caminho.`,
    `Estrutura base (esqueleto) — a organização inicial do código em funções com nomes claros, que depois são preenchidas.`,
    `Entrada de dados — quando o programa pede uma informação ao usuário usando a função input e guarda em uma variável.`,
    `Função main — a função principal que organiza e chama as outras funções na ordem certa para o programa rodar.`,
    `Primeira versão funcional — um arquivo que já executa sem erro e faz pelo menos uma tarefa de verdade, mesmo sem estar completo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Python para conduzir esta aula. Precisa entender três coisas simples que os alunos já viram. Primeira: input pede uma informação ao usuário e devolve um texto. Escrevemos assim: nome = input("Qual seu nome? "). A variável nome guarda o que a pessoa digitar. Segunda: para mostrar algo na tela usamos print, e para juntar texto com variável usamos vírgula, assim: print("Olá", nome). Terceira: uma função é um bloco com nome que agrupa tarefas, criado com a palavra def, e só roda quando é chamado pelo nome seguido de parênteses.

Importante sobre números: tudo que vem do input é texto. Para fazer contas, convertemos com int (número inteiro) ou float (número com vírgula). Exemplo: idade = int(input("Sua idade? ")). Tenha o seu arquivo de exemplo (um quiz curto) aberto e já testado antes da aula. Rode-o uma vez no seu computador para garantir que funciona no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte à turma: "Se vocês pudessem criar qualquer programa simples, o que seria?" Anote as ideias no quadro. Mostre rapidamente seu exemplo de quiz rodando no projetor, sem ainda mostrar o código, só o que ele faz: pergunta, recebe resposta e dá uma pontuação. Diga que hoje cada um vai começar o seu.

15 min - Conteúdo novo guiado: Mostre o esqueleto no projetor e digite junto com a turma. Explique cada linha:

def perguntar_nome():
    nome = input("Qual seu nome? ")
    return nome

def saudacao(nome):
    print("Olá,", nome, "! Bem-vindo ao meu programa.")

def main():
    nome = perguntar_nome()
    saudacao(nome)

main()

Explique: a função perguntar_nome pede o nome e devolve com return; saudacao recebe o nome e mostra a mensagem; main organiza tudo chamando as duas em ordem; a última linha main() liga o programa. Mostre que primeiro criamos as funções e só no fim chamamos main.

25 min - Mão na massa: Entregue a folha de planejamento. Cada aluno escreve Nome do programa, O que ele faz e três Funcionalidades. Aprove rapidamente cada plano (tamanho certo para terminar na Aula 8). Em seguida, eles criam um arquivo novo (por exemplo meu_programa.py), copiam o esqueleto e trocam pela ideia deles: ao menos uma função que pede um dado com input e uma que mostra um resultado com print. Circule ajudando a salvar e a rodar.

10 min - Desafio e compartilhar: Desafie quem terminou a adicionar uma segunda pergunta com input. Depois, dois ou três voluntários mostram o programa rodando no projetor e contam qual será a próxima funcionalidade.

## Como explicar de forma clara (linguagem para a idade)

Compare o programa a uma receita de bolo: primeiro a gente lista os ingredientes (o planejamento) e só depois cozinha (o código). Diga que as funções são como botões de um controle remoto: cada um faz uma coisa, e main é a pessoa apertando os botões na ordem. Para o input, fale "é o programa fazendo uma pergunta e esperando você responder". Reforce a regra de ouro: melhor um programa pequeno que funciona do que um gigante que nunca roda. Lembre que ninguém precisa terminar hoje.

## Erros comuns e como ajudar

O erro mais comum é esquecer os dois pontos no fim do def ou da linha do main; mostre que o Python avisa com SyntaxError. Outro é a indentação: o conteúdo da função precisa estar deslocado para a direita com espaços; peça que usem sempre a mesma quantidade. Muitos esquecem de chamar main() no final, então nada acontece ao rodar; explique que criar a função não a executa. Quem tenta fazer conta direto com input recebe erro de tipo; lembre de converter com int ou float. Por fim, alguns escolhem ideias grandes demais; ajude a cortar para uma versão pequena e terminável.`,
  exercicios: [
    {
      titulo: `Escolher a ideia e planejar`,
      tipo: `planejamento`,
      tempo: `8 min`,
      guiaProfessor: `Entregue a folha de planejamento e ajude cada aluno a escolher algo do tamanho certo. Recuse ideias enormes com gentileza e sugira uma versão menor. Aprove o plano antes de o aluno começar a programar.`,
      atividade: `Na folha de planejamento, escreva: o Nome do programa, uma frase sobre O que ele faz e três Funcionalidades principais. Exemplo de funcionalidade: "perguntar o nome do jogador".`,
      gabarito: `O plano está correto quando tem os três campos preenchidos e as funcionalidades são pequenas e claras. Exemplo válido: Nome: Quiz de Animais; O que faz: faz três perguntas e conta os acertos; Funcionalidades: 1) perguntar o nome, 2) fazer 3 perguntas, 3) mostrar a pontuação no final.`,
    },
    {
      titulo: `Pedir um dado ao usuário`,
      tipo: `prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Confira se cada aluno consegue criar o arquivo, usar input e ver o resultado ao rodar. Reforce que tudo que vem do input é texto. Ajude a salvar com a extensão .py.`,
      atividade: `Crie um arquivo chamado meu_programa.py. Escreva duas linhas que perguntam o nome do usuário e mostram uma saudação na tela. Rode e teste digitando seu nome.`,
      gabarito: `Solução esperada:

nome = input("Qual seu nome? ")
print("Olá,", nome)

Ao rodar, o programa pergunta o nome, espera o aluno digitar e mostra "Olá," seguido do nome digitado.`,
    },
    {
      titulo: `Organizar em funções`,
      tipo: `prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Mostre de novo o esqueleto com def e main, se precisar. Ajude com indentação e com os dois pontos. Verifique que o aluno chamou main() na última linha, senão nada roda.`,
      atividade: `Reescreva seu programa usando funções: uma função para perguntar o nome e outra para mostrar a saudação. No final, crie a função main que chama as duas e execute o programa.`,
      gabarito: `Solução esperada:

def perguntar_nome():
    nome = input("Qual seu nome? ")
    return nome

def saudacao(nome):
    print("Olá,", nome)

def main():
    nome = perguntar_nome()
    saudacao(nome)

main()

O programa deve rodar igual ao anterior, mas agora dividido em funções, mostrando que o aluno entendeu def, return e a chamada de main.`,
    },
    {
      titulo: `Adicionar a primeira funcionalidade de verdade`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Cada aluno deve incluir uma funcionalidade do próprio plano. Se a ideia usar números, lembre de converter com int. Aceite versões simples; o importante é rodar sem erro.`,
      atividade: `Acrescente ao seu programa uma funcionalidade do seu plano. Por exemplo, faça uma pergunta de quiz e diga se a resposta está certa, ou peça dois números e mostre a soma.`,
      gabarito: `Exemplo válido para um quiz:

def pergunta():
    resposta = input("Qual a capital do Brasil? ")
    if resposta == "Brasilia":
        print("Acertou!")
    else:
        print("A resposta certa e Brasilia.")

Exemplo válido para soma:

a = int(input("Primeiro numero: "))
b = int(input("Segundo numero: "))
print("A soma e", a + b)

O exercício está correto quando o programa roda sem erro e executa uma funcionalidade que estava no plano do aluno.`,
    },
    {
      titulo: `Mostrar e contar o próximo passo`,
      tipo: `compartilhar`,
      tempo: `9 min`,
      guiaProfessor: `Convide dois ou três voluntários para rodar o programa no projetor. Peça que digam, em uma frase, qual funcionalidade vão construir na Aula 8. Reforce os pontos fortes de cada projeto.`,
      atividade: `Rode seu programa para a turma e conte em uma frase qual será a próxima funcionalidade que você vai adicionar na próxima aula.`,
      gabarito: `A participação é completa quando o aluno mostra o programa rodando sem erro e diz uma próxima funcionalidade concreta. Exemplo aceito: "Meu quiz já faz uma pergunta; na próxima aula vou adicionar mais duas e contar os acertos."`,
    },
  ],
};
