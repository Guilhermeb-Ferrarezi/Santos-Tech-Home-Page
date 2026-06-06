import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pensar como Programador: Algoritmos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a decompor um problema em passos claros antes de escrever código, usando fluxo e pseudocódigo para planejar a solução de um algoritmo.`,
  descricao: `Nesta aula o aluno descobre o segredo que separa quem só copia código de quem realmente programa: pensar antes de digitar. Até agora a turma aprendeu variáveis, decisões, repetições, funções, listas e dicionários. São as ferramentas. Agora chega a hora de aprender a usá-las com intenção, planejando a solução passo a passo. O nome dessa receita de passos é algoritmo, e é sobre isso que toda a aula gira.

Um algoritmo é simplesmente uma sequência de passos bem definidos que resolve um problema. A turma já segue algoritmos o dia inteiro sem perceber: uma receita de bolo, o caminho de casa até a escola, o tutorial de uma fase do jogo que eles mesmos criaram. A grande virada da aula é mostrar que o computador é obediente, mas burro: ele faz exatamente o que mandamos, na ordem em que mandamos. Por isso, antes de programar, vale a pena escrever o plano em português, com calma, para só depois traduzir para Python.

As duas ferramentas centrais da aula são o fluxograma e o pseudocódigo. O fluxograma é o desenho da lógica: caixas para ações, losangos para decisões e setas mostrando o caminho. O pseudocódigo é o plano escrito em português, quase como código, mas sem se preocupar com a sintaxe exata da linguagem. Os dois servem para a mesma coisa: deixar o pensamento visível e organizado antes de tocar no teclado. Quando o plano está claro, escrever o programa em Python vira só uma tradução tranquila.

Ao final, cada aluno terá praticado a decomposição de problemas: pegar um desafio grande, quebrar em partes pequenas, descrever cada parte como um passo e enxergar a solução completa antes de codar. Essa é a habilidade mais valiosa do mês e o alicerce direto para a Aula 6, em que a turma vai resolver desafios na prática, e para o projeto final, em que cada um construirá o próprio programa.`,
  materiais: [
    `Computadores com Python instalado e um editor de código aberto (VS Code ou Thonny), um por aluno`,
    `Projetor ou TV para o professor desenhar fluxogramas e mostrar o pseudocódigo`,
    `Quadro branco ou flip chart com canetas para desenhar fluxogramas à mão com a turma`,
    `Folhas de papel e lápis para cada aluno rascunhar seu próprio fluxograma`,
    `Arquivo de exemplo (algoritmos_exemplo.py) com um programa simples já resolvido a partir de um plano`,
    `Cartões impressos com os símbolos do fluxograma (início, ação, decisão, fim) para colar na parede`,
    `Folha impressa com um modelo de pseudocódigo em português para guiar os alunos`,
  ],
  conceitosChave: [
    `Algoritmo — uma sequência de passos claros e em ordem que resolve um problema, como uma receita.`,
    `Decomposição — quebrar um problema grande em partes pequenas e fáceis de resolver uma de cada vez.`,
    `Pseudocódigo — o plano da solução escrito em português, quase como código, mas sem a sintaxe exata.`,
    `Fluxograma — um desenho da lógica com caixas para ações, losangos para decisões e setas para o caminho.`,
    `Entrada e saída — o que o programa recebe (entrada) e o que ele devolve (saída) ao usuário.`,
    `Passo a passo — a ordem exata das instruções, lembrando que o computador faz tudo na sequência dada.`,
    `Teste de mesa — simular o algoritmo com valores no papel para conferir se ele dá o resultado certo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python para dar esta aula, porque o foco é o raciocínio, não a sintaxe. A ideia central é simples: um algoritmo é uma lista de passos em ordem que resolve um problema. O computador é obediente e literal, ele faz exatamente o que mandamos, na ordem que mandamos. Por isso planejamos antes de digitar.

Tenha clara a diferença entre as duas ferramentas. O fluxograma é o desenho da lógica: usamos um retângulo para uma ação, um losango para uma decisão (uma pergunta de sim ou não) e setas ligando tudo, do início ao fim. O pseudocódigo é o mesmo plano, mas escrito em português, linha a linha, parecido com código sem se prender às regras exatas da linguagem. Antes da aula, faça você mesmo um fluxograma simples no papel (por exemplo, decidir se um número é par) para se sentir seguro ao desenhar no quadro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma como se faz um sanduíche e anote os passos no quadro, fora de ordem de propósito. Mostre que, se a ordem está errada, o resultado quebra. Conclua: isso é um algoritmo, uma sequência de passos em ordem. Relembre rápido que eles já usam variáveis, if e loops.

Conteúdo novo guiado (15 min): no quadro, desenhe um fluxograma para verificar se um número é par. Início, ação (ler o número), decisão (o resto da divisão por 2 é zero?), duas saídas (escrever par ou escrever ímpar), fim. Depois traduza o desenho em pseudocódigo no projetor, em português:

LER numero
SE resto de numero dividido por 2 for igual a 0
   ESCREVER "par"
SENAO
   ESCREVER "impar"

Por fim, mostre a tradução para Python, digitando linha a linha e explicando cada parte:

numero = int(input("Digite um numero: "))
if numero % 2 == 0:
    print("par")
else:
    print("impar")

Explique: input pega o texto digitado, int transforma em número, o sinal de porcento (%) dá o resto da divisão, o dois pontos abre o bloco e a indentação mostra o que está dentro do if.

Mão na massa (25 min): entregue um problema novo, por exemplo, dizer se uma pessoa pode tirar carteira de motorista (idade 18 ou mais). Cada aluno primeiro desenha o fluxograma no papel, depois escreve o pseudocódigo e só então abre o editor e traduz para Python. Circule pela sala cobrando o plano antes do código.

Desafio e compartilhar (10 min): proponha o desafio do maior de dois números. O aluno planeja e codifica. Dois ou três mostram o fluxograma e o programa rodando para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia deles. Diga que o algoritmo é a receita do bolo e o computador é um robô que segue a receita ao pé da letra, sem adivinhar nada. Compare a decomposição com zerar uma fase difícil do jogo: ninguém vence tudo de uma vez, a gente divide em partes. Chame o losango do fluxograma de a pergunta que tem duas portas, sim e não. Reforce sempre a frase de ouro: primeiro penso, depois desenho, depois escrevo em português e só então digito em Python.

## Erros comuns e como ajudar

O erro mais comum é querer digitar código direto sem plano nenhum; insista que abram o editor só depois do fluxograma e do pseudocódigo prontos. Outro erro é esquecer os dois pontos no fim do if ou do else, ou bagunçar a indentação; mostre que o Python usa o recuo para saber o que está dentro do bloco. Muitos confundem o sinal de igual: explique que um igual (=) guarda um valor e dois iguais (==) comparam. Há quem esqueça o int e tente comparar texto com número; lembre que input sempre traz texto. Por fim, alguns travam diante do problema inteiro; ajude-os a decompor, perguntando qual é o primeiro passo, só o primeiro.`,
  exercicios: [
    {
      titulo: `A receita virou algoritmo`,
      tipo: `aquecimento no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Não use computador ainda. Reforce a ideia de ordem e de passos claros. Aceite respostas variadas, desde que a sequência faça sentido e esteja completa.`,
      atividade: `No papel, escreva o algoritmo de uma tarefa simples do dia a dia em pelo menos cinco passos numerados e na ordem certa. Pode ser escovar os dentes, fazer um suco ou abrir o jogo no Roblox Studio.`,
      gabarito: `Exemplo aceitável (fazer um suco): 1) Pegar um copo. 2) Pegar a jarra de suco. 3) Abrir a jarra. 4) Despejar o suco no copo. 5) Beber. Resultado esperado: cinco ou mais passos numerados, em ordem lógica, sem pular etapas essenciais. O importante é a sequência correta e completa, não as palavras exatas.`,
    },
    {
      titulo: `Desenhando o fluxograma do par ou ímpar`,
      tipo: `prática no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Tenha os símbolos do fluxograma visíveis (retângulo para ação, losango para decisão). Verifique se cada aluno usou um losango para a pergunta e duas setas saindo dele.`,
      atividade: `Desenhe no papel o fluxograma que decide se um número digitado é par ou ímpar. Use um retângulo para ler o número, um losango para a pergunta e dois caminhos de saída, um para par e outro para ímpar.`,
      gabarito: `Fluxograma esperado: INÍCIO -> retângulo "ler número" -> losango "resto da divisão por 2 é igual a 0?" -> caminho SIM leva a "escrever par"; caminho NÃO leva a "escrever ímpar" -> FIM. Resultado esperado: um losango com duas setas (sim e não) e duas saídas distintas, ligadas corretamente do início ao fim.`,
    },
    {
      titulo: `Do pseudocódigo ao Python: a carteira de motorista`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Cobre o plano antes do código: o aluno escreve o pseudocódigo no papel e só depois digita. Lembre dos dois pontos, da indentação e do uso de int no input.`,
      atividade: `Escreva o pseudocódigo e depois o programa em Python que pergunta a idade da pessoa e escreve na tela se ela pode tirar a carteira de motorista (idade 18 ou mais) ou se ainda não pode.`,
      gabarito: `Pseudocódigo: LER idade; SE idade for maior ou igual a 18 ESCREVER "pode tirar carteira" SENAO ESCREVER "ainda nao pode". Código solução em Python:

idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("pode tirar carteira")
else:
    print("ainda nao pode")

Resultado esperado: ao digitar 18 ou mais, aparece "pode tirar carteira"; ao digitar menos de 18, aparece "ainda nao pode".`,
    },
    {
      titulo: `Decompondo um problema maior`,
      tipo: `em dupla`,
      tempo: `13 minutos`,
      guiaProfessor: `Forme duplas. O segredo é a decomposição: ajude-os a listar os passos antes de codar. Aceite soluções com if encadeado (if, elif, else). Conferir o teste de mesa com três notas diferentes.`,
      atividade: `Em dupla, planejem e programem um corretor de provas: o programa lê a nota do aluno (de 0 a 10) e escreve "aprovado" se a nota for 7 ou mais, "recuperacao" se for de 5 a 6.9, e "reprovado" se for menos de 5. Primeiro listem os passos, depois escrevam em Python.`,
      gabarito: `Passos: 1) ler a nota; 2) testar se é maior ou igual a 7; 3) senão, testar se é maior ou igual a 5; 4) senão, reprovado. Código solução:

nota = float(input("Digite a nota: "))
if nota >= 7:
    print("aprovado")
elif nota >= 5:
    print("recuperacao")
else:
    print("reprovado")

Resultado esperado: nota 8 mostra "aprovado", nota 6 mostra "recuperacao", nota 3 mostra "reprovado". Usar float porque a nota pode ter casa decimal.`,
    },
    {
      titulo: `Desafio do maior número`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o exercício mais completo. Peça plano (fluxograma ou pseudocódigo) antes do código. Quem terminar rápido pode estender para três números como bônus.`,
      atividade: `Planeje e programe um algoritmo que lê dois números digitados pelo usuário e escreve na tela qual deles é o maior. Trate também o caso em que os dois são iguais. Faça o plano primeiro e depois traduza para Python.`,
      gabarito: `Pseudocódigo: LER a; LER b; SE a for maior que b ESCREVER a; SENAO SE b for maior que a ESCREVER b; SENAO ESCREVER "sao iguais". Código solução:

a = int(input("Primeiro numero: "))
b = int(input("Segundo numero: "))
if a > b:
    print("O maior e:", a)
elif b > a:
    print("O maior e:", b)
else:
    print("Os dois sao iguais")

Resultado esperado: com 5 e 9 mostra "O maior e: 9"; com 7 e 7 mostra "Os dois sao iguais". Solução usa print com vírgula para mostrar texto e variável juntos, sem chaves de interpolação.`,
    },
  ],
};
