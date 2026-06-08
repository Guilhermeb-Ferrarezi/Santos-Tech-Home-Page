import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Dados Estruturados: CSV e JSON",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a salvar e carregar dados organizados em arquivos CSV e JSON usando as bibliotecas csv e json do Python, convertendo entre listas e dicionários do Python e os formatos reais usados em jogos e sites.`,
  descricao: `Na aula passada o aluno aprendeu a ler e escrever arquivos de texto comuns. Hoje damos um passo importante: em vez de guardar texto solto, vamos guardar dados organizados, com colunas e campos, do jeito que os programas de verdade fazem. Quando um jogo salva o placar dos jogadores ou quando um site guarda a lista de produtos, ele quase sempre usa um destes dois formatos: CSV ou JSON. Entender esses dois formatos abre a porta para o aluno conectar o Python a planilhas, jogos e sites.

O CSV (que significa "valores separados por vírgula") é a forma mais simples de guardar uma tabela. Cada linha do arquivo é uma linha da tabela, e os valores de cada coluna ficam separados por vírgula. É exatamente o que uma planilha do Excel ou do Google Planilhas exporta. O Python tem uma biblioteca chamada csv, que já vem instalada, para ler e escrever esse formato sem que a gente precise contar vírgulas na mão.

O JSON (que se lê "geison") é o formato preferido da internet. Ele guarda dados em pares de nome e valor, parecidíssimo com o dicionário do Python que o aluno já conhece. Quando um site pede informações para um servidor, a resposta quase sempre volta em JSON. A grande vantagem é que o JSON consegue guardar coisas mais complexas que o CSV: listas dentro de listas, dicionários dentro de dicionários. O Python também já vem com a biblioteca json pronta para uso.

Ao final da aula, cada aluno terá escrito um pequeno programa que salva uma lista de pontuações (ou de itens de inventário) em CSV e em JSON, e depois lê esses arquivos de volta para mostrar os dados na tela. O aluno vai perceber, na prática, que salvar e carregar dados é a base de qualquer placar, ranking ou sistema de save de jogo. Essa habilidade será reutilizada no projeto final do mês.`,
  materiais: [
    `Computadores (1 por aluno) com Python 3 instalado e um editor de código aberto (VS Code, Thonny ou similar)`,
    `Projetor ou TV para o professor mostrar a própria tela e digitar o código ao vivo`,
    `Arquivo de exemplo pontuacoes.csv já pronto, para o aluno abrir e ver como um CSV se parece por dentro`,
    `Arquivo de exemplo itens.json já pronto, para o aluno abrir e comparar com o CSV`,
    `Uma planilha simples (Excel ou Google Planilhas) aberta no projetor, só para mostrar de onde vem o CSV`,
    `Folha impressa de apoio com os três blocos de código da aula, para o aluno consultar sem decorar`,
    `Pasta de trabalho criada para cada aluno, onde os arquivos gerados serão salvos`,
  ],
  conceitosChave: [
    `CSV — formato de arquivo de texto que guarda uma tabela; cada linha é uma linha da tabela e as colunas são separadas por vírgula.`,
    `JSON — formato de texto que guarda dados em pares de nome e valor, muito parecido com o dicionário do Python; é o formato mais usado na internet.`,
    `Biblioteca csv — conjunto de ferramentas que já vem com o Python para ler e escrever arquivos CSV sem precisar contar vírgulas na mão.`,
    `Biblioteca json — conjunto de ferramentas que já vem com o Python para transformar dados Python em texto JSON e vice-versa.`,
    `Serializar — transformar dados que estão na memória (listas, dicionários) em texto que pode ser salvo em arquivo; com json fazemos isso com a função dump.`,
    `Carregar (load) — fazer o caminho contrário: ler o texto do arquivo e transformá-lo de volta em listas e dicionários do Python.`,
    `Dicionário — estrutura do Python que guarda dados em pares de chave e valor, por exemplo o nome do jogador e a pontuação dele.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Python para dar esta aula. Precisa entender três ideias e três blocos de código. As ideias: (1) CSV é uma tabela em texto, com vírgulas separando as colunas; (2) JSON guarda dados parecido com um dicionário do Python; (3) as bibliotecas csv e json já vêm instaladas, então basta escrever import csv e import json no topo do programa. Antes da aula, rode você mesmo os três blocos de código abaixo, um de cada vez, e veja os arquivos aparecerem na pasta. Abra os arquivos gerados com o Bloco de Notas para enxergar como ficam por dentro. Isso te dá segurança total para repetir na frente da turma.

Importante: a abertura de arquivos usa with open. O parâmetro newline igual a aspas vazias evita linhas em branco extras no CSV no Windows; deixe sempre assim. O parâmetro encoding igual a utf-8 garante acentos corretos.

## Passo a passo da aula

Aquecimento (10 min). Abra uma planilha no projetor com três colunas: nome, pontos, nível. Pergunte: "Como o computador guarda essa tabela num arquivo?" Mostre o arquivo pontuacoes.csv aberto no Bloco de Notas: é a mesma tabela, só que com vírgulas. Diga que hoje o Python vai criar e ler esses arquivos sozinho.

Conteúdo novo guiado (15 min). Digite na sua tela, linha a linha, explicando cada parte. Primeiro, salvar um CSV:

import csv
jogadores = [["Ana", 120], ["Bia", 95], ["Caio", 200]]
with open("pontuacoes.csv", "w", newline="", encoding="utf-8") as arquivo:
    escritor = csv.writer(arquivo)
    escritor.writerow(["nome", "pontos"])
    escritor.writerows(jogadores)
print("CSV salvo!")

Explique: import csv traz a ferramenta; a lista jogadores é a tabela; csv.writer cria o escritor; writerow grava o cabeçalho; writerows grava todas as linhas de uma vez. Agora ler o CSV de volta:

import csv
with open("pontuacoes.csv", "r", encoding="utf-8") as arquivo:
    leitor = csv.reader(arquivo)
    for linha in leitor:
        print(linha)

Agora o JSON. Mostre como ele é parecido com dicionário:

import json
itens = [
    {"nome": "espada", "dano": 30},
    {"nome": "pocao", "cura": 50},
]
with open("itens.json", "w", encoding="utf-8") as arquivo:
    json.dump(itens, arquivo, indent=2, ensure_ascii=False)
print("JSON salvo!")

E para ler o JSON de volta, transformando texto em dados Python:

import json
with open("itens.json", "r", encoding="utf-8") as arquivo:
    itens = json.load(arquivo)
print(itens[0]["nome"])

Mão na massa (25 min). Cada aluno cria seu próprio programa: monta uma lista de três a cinco jogadores (nome e pontos), salva em CSV, lê de volta e mostra na tela. Depois monta uma lista de itens como dicionários, salva em JSON com json.dump e lê com json.load. Circule pelas máquinas. Quem terminar, adiciona mais campos (nível, vida).

Desafio e compartilhar (10 min). Desafio: "Leia o JSON dos itens e imprima só o nome de cada item, um por linha." Faça uma volta rápida: cada aluno mostra um arquivo gerado e diz se preferiu CSV ou JSON e por quê.

## Como explicar de forma clara

Use comparações do dia a dia. O CSV é uma "planilha em texto puro": as vírgulas são as linhas da grade. O JSON é uma "etiqueta": cada dado vem com o nome dele colado ("nome" igual a "espada"), por isso é mais fácil de entender mas ocupa mais espaço. Diga que salvar dados é como o jogo "lembra" do seu progresso quando você desliga o console. Para a faixa de 10 a 15 anos, os mais novos gostam da ideia de "save do jogo"; os mais velhos gostam de saber que sites de verdade trocam JSON o tempo todo.

## Erros comuns e como ajudar

O erro mais comum é esquecer o import csv ou import json no topo. O segundo é trocar o modo de abertura: w apaga e escreve, r só lê; quem usa r para escrever recebe erro. Outro clássico é esquecer as aspas em nomes de texto dentro da lista. No JSON, lembre que dump (salvar) e load (carregar) andam em par e não podem ser confundidos com dumps e loads (que trabalham com texto, não com arquivo). Se aparecerem linhas em branco no CSV, confira o newline igual a aspas vazias. Se os acentos saírem errados, confira o encoding igual a utf-8.`,
  exercicios: [
    {
      titulo: `Lendo um CSV pronto`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que o arquivo pontuacoes.csv esteja na mesma pasta do programa do aluno. O objetivo é só abrir e ler, sem escrever ainda. Demonstre uma vez no projetor e circule confirmando que cada linha aparece na tela.`,
      atividade: `Use o arquivo pontuacoes.csv que já está na sua pasta. Escreva um programa que abra esse arquivo, leia linha por linha e mostre cada linha na tela. Lembre de começar com import csv.`,
      gabarito: `import csv
with open("pontuacoes.csv", "r", encoding="utf-8") as arquivo:
    leitor = csv.reader(arquivo)
    for linha in leitor:
        print(linha)

O aluno acertou se o programa roda sem erro e mostra cada linha do CSV como uma lista na tela, incluindo o cabeçalho nome e pontos.`,
    },
    {
      titulo: `Salvando seu placar em CSV`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Agora o aluno cria o arquivo do zero. Reforce o modo w e o cabeçalho na primeira linha. Mostre como abrir o arquivo gerado no editor para conferir o resultado. Lembre do newline igual a aspas vazias.`,
      atividade: `Crie uma lista com três jogadores, cada um com nome e pontos. Salve essa lista no arquivo meu_placar.csv, com uma primeira linha de cabeçalho escrito nome e pontos. Depois abra o arquivo gerado no editor e veja como ficou.`,
      gabarito: `import csv
jogadores = [["Ana", 120], ["Bia", 95], ["Caio", 200]]
with open("meu_placar.csv", "w", newline="", encoding="utf-8") as arquivo:
    escritor = csv.writer(arquivo)
    escritor.writerow(["nome", "pontos"])
    escritor.writerows(jogadores)
print("CSV salvo!")

O aluno acertou se o arquivo meu_placar.csv é criado, começa com a linha de cabeçalho nome,pontos e traz as três linhas de jogadores, uma por linha.`,
    },
    {
      titulo: `Inventário em JSON`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Aqui entra o dicionário. Mostre que cada item é um dicionário com chaves e valores. Explique que json.dump precisa do dado e do arquivo. O parâmetro ensure_ascii igual a False mantém os acentos legíveis.`,
      atividade: `Monte uma lista com três itens de um jogo. Cada item deve ser um dicionário com pelo menos as chaves nome e poder. Salve essa lista no arquivo inventario.json usando a biblioteca json. Abra o arquivo gerado e veja o formato.`,
      gabarito: `import json
itens = [
    {"nome": "espada", "poder": 30},
    {"nome": "escudo", "poder": 15},
    {"nome": "pocao", "poder": 50},
]
with open("inventario.json", "w", encoding="utf-8") as arquivo:
    json.dump(itens, arquivo, indent=2, ensure_ascii=False)
print("JSON salvo!")

O aluno acertou se o arquivo inventario.json é criado, contém uma lista de três dicionários e cada item mostra as chaves nome e poder com seus valores.`,
    },
    {
      titulo: `Carregando e mostrando o inventário`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Este exercício fecha o ciclo: depois de salvar, agora lê de volta. Reforce que json.load devolve a mesma lista de dicionários. Mostre como acessar um valor pela chave, por exemplo item entre colchetes e aspas nome.`,
      atividade: `Use o arquivo inventario.json que você criou no exercício anterior. Escreva um programa que carregue esse arquivo com a biblioteca json e mostre na tela apenas o nome de cada item, um por linha.`,
      gabarito: `import json
with open("inventario.json", "r", encoding="utf-8") as arquivo:
    itens = json.load(arquivo)
for item in itens:
    print(item["nome"])

O aluno acertou se o programa lê o arquivo sem erro e imprime apenas os nomes dos itens (espada, escudo, pocao), um em cada linha, usando a chave nome de cada dicionário.`,
    },
    {
      titulo: `Mini sistema de save`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Tarefa que junta tudo: salvar em JSON e ler de volta no mesmo programa. Deixe o aluno escolher o tema (placar ou inventário). Faça a roda final de compartilhamento, cada um mostrando o arquivo gerado e dizendo se preferiu CSV ou JSON.`,
      atividade: `Crie um único programa que faça duas coisas: primeiro, salve uma lista de três personagens (cada um um dicionário com nome e vida) no arquivo save.json; depois, no mesmo programa, leia esse arquivo de volta e mostre na tela o nome e a vida de cada personagem.`,
      gabarito: `import json

personagens = [
    {"nome": "Heroi", "vida": 100},
    {"nome": "Mago", "vida": 70},
    {"nome": "Arqueiro", "vida": 80},
]

with open("save.json", "w", encoding="utf-8") as arquivo:
    json.dump(personagens, arquivo, indent=2, ensure_ascii=False)
print("Jogo salvo!")

with open("save.json", "r", encoding="utf-8") as arquivo:
    dados = json.load(arquivo)

for p in dados:
    print(p["nome"], "tem vida", p["vida"])

O aluno acertou se o mesmo programa cria o arquivo save.json com os três personagens e, em seguida, lê esse arquivo e imprime na tela o nome e a vida de cada um. Esse é o esqueleto de um sistema de save de jogo, que será reaproveitado no projeto final do mês.`,
    },
  ],
};
