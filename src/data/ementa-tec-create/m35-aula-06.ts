import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Resolvendo Desafios na Prática",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aplicar tudo o que o aluno aprendeu em Python (variáveis, condições, loops, funções, listas e dicionários) para resolver desafios progressivos, aprendendo a testar o código, encontrar erros e corrigir com calma usando a depuração.`,
  descricao: `Até aqui o aluno já conheceu os comandos básicos, aprendeu a tomar decisões com "if", a repetir tarefas com loops, a criar funções que reaproveitam código e a guardar muitos dados em listas e dicionários. Na aula passada ele treinou a pensar como programador, planejando algoritmos antes de escrever. Agora chega a hora mais divertida e desafiadora: pegar todo esse conhecimento e usar de verdade para resolver problemas reais, escrevendo código que funciona.

O grande foco desta aula é a depuração, que é a arte de encontrar e corrigir erros. Todo programador, do iniciante ao profissional, erra o tempo todo. O que diferencia um bom programador não é nunca errar, e sim saber ler a mensagem de erro, descobrir onde está o problema e consertar sem perder a paciência. Nesta aula o aluno aprende que um erro não é um fracasso: é uma pista que o computador está dando para ajudar a melhorar o programa.

O aluno vai enfrentar desafios progressivos, do mais simples ao mais difícil. Cada desafio combina vários conceitos ao mesmo tempo: uma condição dentro de um loop, uma função que percorre uma lista, um dicionário consultado dentro de uma decisão. Resolver um problema que junta tudo é diferente de praticar cada conceito separado, e é exatamente essa mistura que prepara o aluno para construir o próprio programa nas duas últimas aulas do mês.

Esta é uma aula muito prática, com o aluno o tempo todo no computador, escrevendo, rodando, vendo o que dá errado e corrigindo. O professor não precisa dar todas as respostas: o melhor é guiar o aluno a descobrir o erro sozinho, fazendo perguntas. Ao final, cada aluno terá resolvido vários desafios e, mais importante, terá ganhado confiança para depurar o próprio código.`,
  materiais: [
    `Computadores com Python instalado, um por aluno, com um editor de código aberto (recomendado o Thonny, por mostrar erros de forma simples, ou o VS Code)`,
    `Projetor ou TV ligado à máquina do professor para escrever código ao vivo e mostrar mensagens de erro`,
    `Arquivo de exemplo do professor com pequenos programas que contêm erros de propósito (bugs), para a turma caçar junto`,
    `Folha impressa de "como ler um erro em Python", com os tipos mais comuns (SyntaxError, NameError, IndentationError, TypeError) e o que cada um significa`,
    `Quadro branco ou flip chart para desenhar o passo a passo de um algoritmo antes de programar`,
    `Lista impressa dos 5 desafios do dia, em ordem crescente de dificuldade, para cada aluno acompanhar o próprio ritmo`,
  ],
  conceitosChave: [
    `Depuração (debug) — o processo de procurar, entender e corrigir os erros (bugs) de um programa até ele funcionar como esperado.`,
    `Bug — um erro no código que faz o programa parar ou dar um resultado diferente do que queríamos.`,
    `Mensagem de erro — o aviso que o Python mostra quando algo dá errado; ela diz o tipo do erro e em qual linha aconteceu.`,
    `Testar — rodar o programa com vários valores diferentes para conferir se ele responde certo em todos os casos.`,
    `Erro de sintaxe — quando o código está escrito errado (falta dois pontos, parêntese ou aspas) e o Python nem consegue rodar.`,
    `Erro de lógica — quando o programa roda sem travar, mas o resultado está errado porque o raciocínio estava furado.`,
    `Teste de mesa — ler o código linha por linha no papel, anotando o valor de cada variável, para achar o erro sem rodar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python para dar esta aula. O segredo é que ela é sobre encontrar erros, e isso você consegue fazer junto com os alunos. Antes da aula, abra o editor e teste rodar um programa simples, depois quebre ele de propósito (apague dois pontos de um "if", erre o nome de uma variável) e leia a mensagem de erro com calma. Repare que o Python sempre diz o tipo do erro e o número da linha. Os erros mais comuns nesta idade são: SyntaxError (escrita errada), IndentationError (espaços errados no começo da linha), NameError (variável que não existe ou nome digitado errado) e TypeError (misturar texto com número, por exemplo somar texto com número). Tenha a folha de erros à mão para consultar junto com a turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento: no projetor, mostre um programa curto com um erro de propósito. Por exemplo, um "if" sem os dois pontos no final. Rode e deixe o erro aparecer. Pergunte: "O que o computador está tentando nos dizer?" Conduza a turma a ler a linha e o tipo do erro juntos. Corrija o erro ao vivo e rode de novo, mostrando que funcionou.

15 min — Conteúdo novo guiado: escreva ao vivo um pequeno programa que combina conceitos. Digite linha por linha, explicando cada parte:

idades = [12, 15, 9, 14]
maiores = 0
for idade in idades:
    if idade >= 13:
        maiores = maiores + 1
print("Quantos tem 13 anos ou mais:", maiores)

Explique que a lista guarda vários dados, o "for" passa por cada um, o "if" decide, e a variável "maiores" vai contando. Agora cometa um erro de propósito: troque ">=" por ">" e mostre que o resultado muda. Ensine o teste de mesa: leiam juntos cada volta do loop anotando o valor de "maiores" no quadro.

25 min — Mão na massa: cada aluno trabalha nos desafios da folha, do mais fácil ao mais difícil, no próprio ritmo. Circule pela sala. Quando alguém travar, não dê a resposta: pergunte "qual a mensagem de erro?", "em qual linha?", "o que essa linha deveria fazer?". Incentive rodar o programa a cada poucas linhas, em vez de escrever tudo e só depois testar.

10 min — Desafio e compartilhar: proponha o desafio mais difícil da folha para quem chegou até lá. Depois, dois ou três alunos mostram no projetor um erro que encontraram e como descobriram a solução. Valorize o processo de caçar o bug, não só o programa pronto.

## Como explicar de forma clara (linguagem para a idade)

Compare a depuração com procurar um item perdido no quarto: você não vira tudo de cabeça para baixo de uma vez, você procura por partes, com calma. Diga que a mensagem de erro é como o computador apontando o dedo e falando "olha aqui, nesta linha". Explique que erro de sintaxe é como escrever uma frase sem ponto final, o leitor (o Python) fica confuso e nem começa a ler. Já o erro de lógica é como seguir uma receita inteira mas trocar açúcar por sal: tudo "funciona", mas o resultado fica estranho. Reforce sempre: errar faz parte, todo programador erra, o importante é caçar o bug com paciência.

## Erros comuns e como ajudar

O erro mais comum é o aluno ver a mensagem vermelha e fechar, achando que estragou tudo; ensine a respirar e ler. Muitos esquecem os dois pontos no fim do "if" e do "for", ou erram a indentação (os espaços do começo da linha); mostre que o Python é exigente com isso. Outro clássico é digitar o nome de uma variável diferente de onde ela foi criada (idade e idades, por exemplo), gerando NameError. Há quem tente somar texto com número e receba TypeError; explique que são "coisas de tipos diferentes". Por fim, alguns escrevem o programa inteiro antes de testar e ficam com vários erros juntos; oriente a rodar de pouquinho em pouquinho.`,
  exercicios: [
    {
      titulo: `Cace o bug: o "if" quebrado`,
      tipo: `depuração guiada`,
      tempo: `6 min`,
      guiaProfessor: `Entregue o código com erro já digitado (ou projete para os alunos copiarem). O objetivo é treinar a leitura da mensagem de erro. Quando travarem, pergunte qual o tipo do erro e em qual linha. Aqui falta o dois pontos no fim do "if".`,
      atividade: `O programa abaixo deveria avisar se a pessoa pode entrar no jogo, mas está dando erro. Rode, leia a mensagem e conserte:

idade = 14
if idade >= 13
    print("Pode entrar")

Descubra o que está faltando e corrija até o programa funcionar.`,
      gabarito: `Faltava o dois pontos no fim da linha do "if". O Python mostra um SyntaxError apontando essa linha. Código corrigido:

idade = 14
if idade >= 13:
    print("Pode entrar")

Ao rodar, aparece "Pode entrar". O ponto-chave é que todo "if", "for" e "while" termina com dois pontos.`,
    },
    {
      titulo: `Cace o bug: o nome trocado`,
      tipo: `depuração guiada`,
      tempo: `8 min`,
      guiaProfessor: `Este desafio treina o NameError. O aluno criou a variável com um nome e usou outro. Peça para ele comparar letra por letra os nomes das variáveis. Reforce que o computador não adivinha o que quisemos dizer.`,
      atividade: `Este programa deveria mostrar o dobro de um número, mas está com erro. Rode, leia a mensagem e conserte:

numero = 5
dobro = numeo * 2
print("O dobro é:", dobro)

Encontre o nome digitado errado e corrija.`,
      gabarito: `A variável foi criada como "numero", mas usada como "numeo" (faltou o "r"). Isso gera um NameError. Código corrigido:

numero = 5
dobro = numero * 2
print("O dobro é:", dobro)

Ao rodar, aparece "O dobro é: 10". O ponto-chave é que o nome usado precisa ser exatamente igual ao nome criado.`,
    },
    {
      titulo: `O resultado está errado: erro de lógica`,
      tipo: `desafio de lógica`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o programa roda sem travar, mas dá o resultado errado, que é o erro de lógica. Use o teste de mesa: leiam juntos cada volta do loop anotando o valor de "soma". O erro é começar a soma em um valor errado ou somar a coisa errada.`,
      atividade: `Este programa deveria somar todas as notas e mostrar o total, mas o resultado está errado. Encontre e corrija o erro de lógica:

notas = [8, 7, 9, 10]
soma = 10
for nota in notas:
    soma = soma + nota
print("Total das notas:", soma)

Faça o teste de mesa para descobrir por que o total não bate.`,
      gabarito: `O erro é começar a variável "soma" com 10 em vez de 0, o que faz o total ficar 10 a mais. O programa roda, mas o resultado fica errado (erro de lógica). Código corrigido:

notas = [8, 7, 9, 10]
soma = 0
for nota in notas:
    soma = soma + nota
print("Total das notas:", soma)

Ao rodar, aparece "Total das notas: 34". A soma sempre começa do zero antes de acumular.`,
    },
    {
      titulo: `Função que verifica a senha`,
      tipo: `desafio combinado`,
      tempo: `12 min`,
      guiaProfessor: `Este junta função, condição e teste com vários valores. Incentive o aluno a testar a função com uma senha curta e uma longa para conferir os dois casos. Lembre que a função precisa do "return" para devolver a resposta.`,
      atividade: `Crie uma função chamada checar_senha que recebe uma senha e devolve "Senha forte" se ela tiver 8 ou mais caracteres, e "Senha fraca" se tiver menos. Depois teste a função com duas senhas diferentes.

Dica: use len(senha) para descobrir o tamanho da senha.`,
      gabarito: `Solução possível:

def checar_senha(senha):
    if len(senha) >= 8:
        return "Senha forte"
    else:
        return "Senha fraca"

print(checar_senha("123"))
print(checar_senha("supersegura"))

Ao rodar, aparece "Senha fraca" e depois "Senha forte". A função usa len() para medir o tamanho, decide com o "if/else" e devolve o texto com "return". Testar com dois valores confirma que os dois casos funcionam.`,
    },
    {
      titulo: `Placar do jogo com dicionário`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Este é o desafio mais difícil e combina dicionário, loop e condição. Apoie quem ainda confunde como ler um valor do dicionário. Ao final, abra uma roda rápida para os alunos mostrarem o programa e contarem que erro encontraram e como resolveram.`,
      atividade: `Você tem um dicionário com a pontuação de cada jogador. Escreva um programa que percorra o dicionário e mostre o nome de cada jogador com a pontuação, e ao final avise quem passou de 100 pontos. Use este dicionário:

pontos = {"Ana": 120, "Bia": 80, "Caio": 150}

Percorra o dicionário, mostre cada jogador e, no fim, mostre quem passou de 100.`,
      gabarito: `Solução possível:

pontos = {"Ana": 120, "Bia": 80, "Caio": 150}
for jogador in pontos:
    print(jogador, "fez", pontos[jogador], "pontos")
for jogador in pontos:
    if pontos[jogador] > 100:
        print(jogador, "passou de 100!")

Ao rodar, o programa lista os três jogadores com a pontuação e depois mostra que Ana e Caio passaram de 100. Os pontos-chave: o "for" percorre as chaves do dicionário, pontos[jogador] pega a pontuação daquele nome e o "if" decide quem passou. Esse desafio junta dicionário, loop e condição, exatamente como o aluno vai precisar no próprio programa das próximas aulas.`,
    },
  ],
};
