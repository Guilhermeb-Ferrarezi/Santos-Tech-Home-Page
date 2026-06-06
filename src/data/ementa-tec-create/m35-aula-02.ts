import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Decisões e Repetições: If e Loops",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Fazer o programa tomar decisões com if, elif e else e repetir ações automaticamente com os loops for e while.`,
  descricao: `Na aula passada o aluno guardou informações em variáveis e mostrou dados na tela. Agora o programa vai ganhar inteligência: ele aprende a decidir o que fazer dependendo da situação. É a mesma lógica que um jogo usa quando pergunta "a vida do jogador chegou a zero?" para mostrar a tela de game over. Em Python, essa decisão é escrita com as palavras if (se), elif (senão, se) e else (senão).

Para o computador decidir, ele precisa comparar valores e obter uma resposta verdadeira ou falsa. Usamos comparações como maior que, menor que e igual a. Quando a comparação é verdadeira, o bloco de código dentro do if é executado; quando é falsa, o Python pula para o elif ou para o else. O segredo do Python é a indentação: o código que pertence à decisão fica recuado com espaços, e é esse recuo que diz ao computador o que está dentro do bloco.

A segunda grande ideia da aula é a repetição. Em vez de copiar e colar a mesma linha dez vezes, pedimos ao computador para repetir sozinho. O loop for percorre uma sequência de valores, ótimo quando sabemos quantas vezes queremos repetir. O loop while repete enquanto uma condição continuar verdadeira, ideal quando não sabemos o número exato de repetições, como esperar o jogador acertar a senha.

No final da aula, o aluno junta tudo: variáveis, condições e loops em um mini-programa interativo, por exemplo um jogo de adivinhar o número. Esse exercício mostra de forma divertida que decisões e repetições são a base de praticamente todo software, de uma calculadora simples até os jogos que eles criam no Roblox.`,
  materiais: [
    `Computadores com Python 3 instalado (um por aluno)`,
    `Editor de código instalado (VS Code, Thonny ou IDLE)`,
    `Projetor ou TV para o professor mostrar o código ao vivo`,
    `Arquivo de exemplo aula02_exemplos.py com os trechos prontos para demonstração`,
    `Quadro branco e canetas para desenhar o fluxograma das decisões`,
    `Folha impressa com a tabela de comparações (maior que, menor que, igual, diferente)`,
    `Navegador aberto na documentação oficial do Python para consulta rápida`,
  ],
  conceitosChave: [
    `Condição — uma pergunta que o computador responde com verdadeiro ou falso, como "a idade é maior que 12?".`,
    `if / elif / else — comandos que escolhem qual bloco de código rodar conforme a condição (se / senão se / senão).`,
    `Comparação — sinais usados para comparar valores: maior que, menor que, igual a (==) e diferente de (!=).`,
    `Indentação — o recuo com espaços no início da linha que mostra ao Python qual código está dentro de um bloco.`,
    `Loop for — repetição que percorre uma sequência conhecida, usada quando sabemos quantas vezes repetir.`,
    `Loop while — repetição que continua enquanto uma condição for verdadeira, usada quando não sabemos o número de vezes.`,
    `range — função que gera uma sequência de números para o for, por exemplo de 1 até 5.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python. Esta aula tem apenas duas ideias: tomar decisões e repetir ações. Decisão usa as palavras if, elif e else. Repetição usa for e while. O ponto mais importante e que mais confunde iniciantes é a indentação: em Python o código que fica dentro de uma decisão ou de um loop precisa estar recuado com espaços (use a tecla Tab ou quatro espaços). Se o recuo estiver errado, o programa dá erro. Antes da aula, abra o arquivo aula02_exemplos.py e rode cada trecho uma vez para se sentir seguro. Lembre que os dois-pontos no fim da linha do if e do for são obrigatórios.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Retome a aula 1 pedindo que cada aluno crie uma variável com a própria idade. Faça uma pergunta no quadro: "Como o programa sabe se alguém pode entrar em um jogo com restrição de idade?". Anote as respostas. Apresente a ideia de decisão sem código ainda.

CONTEÚDO NOVO GUIADO (15 min): No projetor, digite e rode ao vivo, explicando linha a linha:

idade = 14
if idade >= 12:
    print("Pode jogar")
else:
    print("Ainda nao pode")

Explique que >= significa maior ou igual, que os dois-pontos abrem o bloco e que o print recuado só roda quando a condição é verdadeira. Em seguida acrescente o elif:

nota = 7
if nota >= 9:
    print("Otimo")
elif nota >= 6:
    print("Aprovado")
else:
    print("Estudar mais")

Mostre agora os loops. Primeiro o for com range:

for numero in range(1, 6):
    print("Contando:", numero)

Explique que range(1, 6) gera 1, 2, 3, 4 e 5. Depois o while:

vida = 3
while vida > 0:
    print("Vida:", vida)
    vida = vida - 1

Mostre que a vida diminui a cada volta até chegar a zero, quando o loop para.

MÃO NA MASSA (25 min): Os alunos digitam os exemplos no próprio computador e depois mudam os valores das variáveis para ver respostas diferentes. Em seguida começam o mini-programa de adivinhar o número (veja os exercícios). Circule pela sala ajudando com a indentação.

DESAFIO E COMPARTILHAR (10 min): Cada aluno mostra o programa rodando e conta qual condição ou loop usou. Peça que um colega tente "quebrar" o programa digitando valores estranhos.

## Como explicar de forma clara (linguagem para a idade)

Compare o if com uma porta: a condição é o segurança que decide quem entra. Compare o loop com uma música no repeat: ela toca de novo até você mandar parar. Use exemplos de jogos que eles conhecem: vida que chega a zero, contagem regressiva, fases que se repetem. Diga que o computador é rápido mas obediente: ele faz exatamente o que está escrito, então o recuo precisa estar certo. Evite termos técnicos demais; fale "pergunta" em vez de "expressão booleana".

## Erros comuns e como ajudar

O erro número um é esquecer a indentação ou misturar Tab com espaços, gerando IndentationError. Mostre como deixar tudo com quatro espaços. O segundo erro é esquecer os dois-pontos no fim da linha do if ou do for. O terceiro é trocar o sinal de igualdade: para comparar usamos == com dois sinais, e um sinal só serve para guardar valor. No while, alerte para o loop infinito: se a variável nunca muda, o programa nunca para; ensine o atalho Ctrl + C para interromper. Sempre que der erro, leia a mensagem em voz alta com o aluno: ela indica a linha do problema.`,
  exercicios: [
    {
      titulo: `Maior de idade no jogo`,
      tipo: `Prática guiada`,
      tempo: `4 min`,
      guiaProfessor: `Faça junto no projetor. Reforce o uso de >= e da indentação. Peça que troquem o valor da idade e rodem de novo.`,
      atividade: `Crie uma variável chamada idade com um número. Use if e else para imprimir "Pode jogar" se a idade for maior ou igual a 12, e "Ainda nao pode" caso contrário.`,
      gabarito: `idade = 13
if idade >= 12:
    print("Pode jogar")
else:
    print("Ainda nao pode")`,
    },
    {
      titulo: `Classificando a nota`,
      tipo: `Exercício individual`,
      tempo: `5 min`,
      guiaProfessor: `Deixe o aluno tentar sozinho. Verifique se ele colocou o elif no meio e o else no fim. Teste com notas 10, 7 e 4.`,
      atividade: `Crie uma variável nota. Use if, elif e else para imprimir "Otimo" se a nota for maior ou igual a 9, "Aprovado" se for maior ou igual a 6, e "Estudar mais" para os demais casos.`,
      gabarito: `nota = 7
if nota >= 9:
    print("Otimo")
elif nota >= 6:
    print("Aprovado")
else:
    print("Estudar mais")`,
    },
    {
      titulo: `Contagem com for`,
      tipo: `Desafio curto`,
      tempo: `5 min`,
      guiaProfessor: `Mostre que range(1, 11) vai de 1 a 10. Peça depois que mudem o range para contar de 1 a 5 e confirmem o resultado.`,
      atividade: `Use um loop for com range para imprimir os números de 1 até 10, cada um em uma linha, no formato "Numero:" seguido do valor.`,
      gabarito: `for numero in range(1, 11):
    print("Numero:", numero)`,
    },
    {
      titulo: `Contagem regressiva com while`,
      tipo: `Desafio aplicado`,
      tempo: `5 min`,
      guiaProfessor: `Atenção ao loop infinito: confira se a variável diminui dentro do loop. Lembre o aluno de usar Ctrl + C se travar.`,
      atividade: `Crie uma variável tempo com o valor 5. Use um loop while para imprimir a contagem regressiva enquanto tempo for maior que 0, diminuindo 1 a cada volta. Ao final, imprima "Fim".`,
      gabarito: `tempo = 5
while tempo > 0:
    print("Tempo:", tempo)
    tempo = tempo - 1
print("Fim")`,
    },
    {
      titulo: `Jogo de adivinhar o número`,
      tipo: `Projeto da aula`,
      tempo: `6 min`,
      guiaProfessor: `Este exercício junta tudo: variável, while e if. Explique que int() transforma o texto digitado em número. Teste com chutes errados e o certo. Se sobrar tempo, peça para mudar o número secreto.`,
      atividade: `Crie um número secreto guardado em uma variável. Use um loop while que continue pedindo um chute ao jogador até ele acertar. Dentro do loop, use if e else para avisar se o número secreto é maior ou menor que o chute. Quando acertar, imprima "Voce acertou!".`,
      gabarito: `secreto = 7
chute = int(input("Adivinhe o numero: "))
while chute != secreto:
    if chute < secreto:
        print("O numero secreto e maior")
    else:
        print("O numero secreto e menor")
    chute = int(input("Tente de novo: "))
print("Voce acertou!")`,
    },
  ],
};
