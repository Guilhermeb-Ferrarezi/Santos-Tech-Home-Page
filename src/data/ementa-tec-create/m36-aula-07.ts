import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Planejando o Projeto Final em Python",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Planejar o projeto final em Python e começar a estrutura, combinando arquivos, funções, módulos e bibliotecas em uma única aplicação.`,
  descricao: `Esta é a aula em que tudo o que o aluno aprendeu no mês se junta. Nas semanas anteriores, ele aprendeu a ler e escrever arquivos, a trabalhar com dados estruturados em CSV e JSON, a criar suas próprias funções, a dividir o código em módulos e a usar bibliotecas que vêm com o Python e bibliotecas externas. Agora chegou o momento de transformar essas peças soltas em um projeto de verdade, planejado por ele mesmo.

O foco da aula não é programar tudo de uma vez, e sim PLANEJAR com clareza antes de construir. Um bom programador desenha o projeto no papel (ou em comentários no código) antes de escrever linha por linha. O aluno vai escolher uma ideia simples e possível em uma hora de construção apoiada, como um jogo de texto, um gerenciador de pontuações ou uma ferramenta útil do dia a dia. Depois, vai listar o que o programa precisa fazer e quais funções e arquivos serão necessários.

Na parte prática, o aluno começa a construir a estrutura do projeto: cria a pasta, o arquivo principal, escreve um esqueleto com funções vazias (usando a palavra pass) e o menu inicial. O professor circula pela sala ajudando cada aluno a escolher uma ideia do tamanho certo, nem grande demais nem fácil demais. O importante é sair desta aula com um plano escrito e o começo do código rodando.

Lembre o professor de que esta aula prepara a Aula 8, em que o projeto será finalizado e o aluno receberá o certificado do Ano 3. Por isso, o plano feito hoje precisa ser realista. Vale mais um projeto pequeno e completo do que um projeto enorme e inacabado.`,
  materiais: [
    `Computadores com Python 3 instalado (um por aluno)`,
    `Editor de código instalado (VS Code, Thonny ou similar)`,
    `Projetor para o professor mostrar o esqueleto do projeto na tela`,
    `Folha de planejamento impressa (ideia, funções, arquivos) ou documento em branco no editor`,
    `Arquivo de exemplo de projeto já planejado (jogo de adivinhação) para inspirar`,
    `Caderno ou bloco de notas para rascunhar a ideia antes de programar`,
  ],
  conceitosChave: [
    `Planejamento — pensar e escrever o que o programa vai fazer antes de programar, para não se perder no meio.`,
    `Escopo — o tamanho do projeto; escolher uma ideia que cabe no tempo que você tem.`,
    `Esqueleto de código — uma versão inicial com as funções criadas mas ainda vazias, para depois preencher.`,
    `Função vazia — função que ainda não faz nada; usa a palavra pass no lugar do código.`,
    `Menu — lista de opções que o programa mostra ao usuário para ele escolher o que fazer.`,
    `Estrutura de pastas — a organização dos arquivos do projeto, com o arquivo principal e os módulos separados.`,
    `Persistência — guardar dados em arquivo (TXT, CSV ou JSON) para que não se percam quando o programa fecha.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Python. Esta aula é mais sobre ORGANIZAÇÃO do que sobre código novo. O segredo é ajudar cada aluno a escolher uma ideia do tamanho certo e a escrevê-la em pedaços pequenos. Antes da aula, leia o esqueleto abaixo uma vez e digite-o você mesmo para ver funcionando. Tenha três ideias prontas para sugerir a quem travar: um jogo de adivinhar número, um gerenciador de pontuações que salva em arquivo, e uma calculadora de notas. Todas usam o que já foi visto no mês.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min). Pergunte à turma: "O que dá para fazer juntando arquivos, funções, módulos e bibliotecas?" Anote as respostas no quadro. Mostre rapidamente o exemplo pronto rodando no projetor para abrir a imaginação. Diga a regra de ouro: projeto pequeno e completo vale mais que projeto grande e quebrado.

CONTEÚDO NOVO GUIADO (15 min). Ensine o ciclo PLANEJAR antes de PROGRAMAR. No projetor, abra um arquivo novo chamado projeto.py e escreva o plano em comentários, linha a linha:

# Projeto: Gerenciador de Pontuacoes
# O que faz: guarda nomes e pontos dos jogadores
# Funcoes: mostrar_menu, adicionar_pontuacao, listar_pontuacoes, salvar, carregar
# Arquivo de dados: pontuacoes.txt

Depois transforme o plano em esqueleto. Explique que cada função começa vazia, só com pass:

def mostrar_menu():
    print("1 - Adicionar pontuacao")
    print("2 - Listar pontuacoes")
    print("3 - Sair")

def adicionar_pontuacao():
    pass

def listar_pontuacoes():
    pass

Mostre o laço principal que liga tudo:

while True:
    mostrar_menu()
    opcao = input("Escolha: ")
    if opcao == "1":
        adicionar_pontuacao()
    elif opcao == "2":
        listar_pontuacoes()
    elif opcao == "3":
        print("Ate logo!")
        break
    else:
        print("Opcao invalida")

Rode o programa. O menu funciona e as opções não fazem nada ainda, e tudo bem: o esqueleto está de pé.

MÃO NA MASSA (25 min). Cada aluno escreve o próprio plano em comentários e monta o esqueleto com as funções vazias e o menu. Passe de mesa em mesa. Sua maior ajuda aqui é ajustar o escopo: se a ideia é grande demais, corte; se é pequena demais, sugira salvar dados em arquivo. Peça que cada aluno teste o menu rodando antes de seguir. Quem terminar o esqueleto pode começar a preencher uma função, por exemplo a de adicionar pontuação, pedindo nome e pontos com input e guardando em uma lista.

DESAFIO + COMPARTILHAR (10 min). Desafio: escreva, em uma única frase de comentário, o que o seu projeto fará quando estiver pronto. Depois, dois ou três alunos mostram o menu rodando e contam o plano. Combine que na próxima aula o projeto será finalizado e virá o certificado do Ano 3.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação da casa: "Antes de construir, o arquiteto desenha a planta. As funções vazias são os cômodos ainda sem móveis. O esqueleto é a casa em pé, e depois a gente vai mobiliando um cômodo de cada vez." Reforce que ninguém escreve um programa inteiro de uma vez; escreve-se um pedacinho, testa, e segue. Comemore cada vez que o menu rodar sem erro, mesmo vazio.

## Erros comuns e como ajudar

O erro mais comum é escolher um projeto grande demais. Ajude a cortar para algo que cabe em uma aula. Outro erro: esquecer os dois pontos no fim de def, while ou if, o que gera SyntaxError; mostre onde faltou. Esquecer de chamar a função (escrever só o nome sem os parênteses) faz nada acontecer; lembre dos parênteses. Erro de indentação (IndentationError) acontece quando o conteúdo da função não está recuado; peça quatro espaços. Por fim, alguns esquecem o break na opção de sair e o programa nunca para; mostre o break dentro do if.`,
  exercicios: [
    {
      titulo: `Escolhendo a ideia do projeto`,
      tipo: `Planejamento no papel`,
      tempo: `5 minutos`,
      guiaProfessor: `Aprovado se o aluno escrever uma ideia clara e realista. Recuse ideias grandes demais (ex: um jogo 3D) e ajude a reduzir o escopo.`,
      atividade: `Escreva em uma frase qual será o seu projeto final e o que ele vai fazer. Exemplo: "Um gerenciador de pontuações que guarda nomes e pontos dos jogadores."`,
      gabarito: `Exemplo de resposta aceitável: "Um jogo de adivinhar número, onde o computador sorteia um número de 1 a 100 e o jogador tenta acertar com dicas de maior ou menor." Critério: ideia em uma frase, possível de fazer em uma aula, que use arquivos, funções e/ou bibliotecas.`,
    },
    {
      titulo: `Listando as funções`,
      tipo: `Planejamento em comentários`,
      tempo: `5 minutos`,
      guiaProfessor: `Verifique se o aluno listou de 3 a 5 funções com nomes claros, escritos sem acento e sem espaço (use sublinhado).`,
      atividade: `No topo do arquivo projeto.py, escreva em comentários o nome de cada função que o seu projeto vai precisar. Comece cada linha com o sinal de tralha (#).`,
      gabarito: `# Projeto: Jogo de Adivinhar Numero
# Funcoes que vou precisar:
# sortear_numero
# pedir_palpite
# dar_dica
# mostrar_resultado`,
    },
    {
      titulo: `Montando o esqueleto`,
      tipo: `Programação prática`,
      tempo: `8 minutos`,
      guiaProfessor: `O esqueleto deve rodar sem erro. Cada função vazia usa pass. Confira os dois pontos no fim de cada def e a indentação de quatro espaços.`,
      atividade: `Transforme a sua lista de funções em código. Crie cada função vazia usando a palavra pass dentro dela. Rode o programa para garantir que não há erro.`,
      gabarito: `def sortear_numero():
    pass

def pedir_palpite():
    pass

def dar_dica():
    pass

def mostrar_resultado():
    pass

print("Esqueleto pronto!")`,
    },
    {
      titulo: `Criando o menu`,
      tipo: `Programação prática`,
      tempo: `7 minutos`,
      guiaProfessor: `O menu deve mostrar as opções e ler a escolha com input. Confira que a opção de sair tem break. Teste rodando junto com o aluno.`,
      atividade: `Crie a função mostrar_menu com as opções do seu projeto e um laço while que lê a escolha do usuário. A última opção deve sair do programa com break.`,
      gabarito: `def mostrar_menu():
    print("1 - Jogar")
    print("2 - Sair")

while True:
    mostrar_menu()
    opcao = input("Escolha: ")
    if opcao == "1":
        print("Comecando o jogo...")
    elif opcao == "2":
        print("Ate logo!")
        break
    else:
        print("Opcao invalida")`,
    },
    {
      titulo: `Preenchendo a primeira função com dados em arquivo`,
      tipo: `Desafio de programação`,
      tempo: `10 minutos`,
      guiaProfessor: `Exercício mais difícil, junta função, input e escrita em arquivo. Aceite variações. Confira o modo "a" (append) para não apagar dados antigos e o uso de with open. Ajude quem travar a abrir o arquivo no editor para ver os dados salvos.`,
      atividade: `Preencha uma função do seu projeto que peça um dado ao usuário e salve em um arquivo de texto. Depois rode e abra o arquivo para ver o dado guardado.`,
      gabarito: `def adicionar_pontuacao():
    nome = input("Nome do jogador: ")
    pontos = input("Pontos: ")
    arquivo = open("pontuacoes.txt", "a")
    arquivo.write(nome + " - " + pontos + "\\n")
    arquivo.close()
    print("Pontuacao salva para", nome)

adicionar_pontuacao()

# Versao mais segura usando with (fecha o arquivo sozinho):
def adicionar_pontuacao_v2():
    nome = input("Nome do jogador: ")
    pontos = input("Pontos: ")
    with open("pontuacoes.txt", "a") as arquivo:
        arquivo.write(nome + " - " + pontos + "\\n")
    print("Pontuacao salva para", nome)`,
    },
  ],
};
