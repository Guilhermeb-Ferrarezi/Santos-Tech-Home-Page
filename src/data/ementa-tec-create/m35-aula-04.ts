import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Listas e Dicionários: Guardando Muitos Dados",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a guardar vários itens em listas e a organizar pares de chave e valor em dicionários, percorrendo esses dados com loops para montar um pequeno cadastro.`,
  descricao: `Até agora os alunos guardaram informações uma de cada vez, em variáveis separadas. Mas e quando precisamos guardar dez nomes, ou a vida e a pontuação de vários jogadores? Criar uma variável para cada um seria cansativo e desorganizado. É aí que entram as listas: uma lista é como uma caixa numerada que guarda muitos valores juntos, em ordem, dentro de uma única variável. Em vez de dez variáveis, temos uma lista com dez itens.

Cada item da lista mora em uma posição numerada, chamada índice, e o Python começa a contar do zero. Assim, o primeiro item está no índice 0, o segundo no índice 1, e assim por diante. Com a lista podemos adicionar itens novos, acessar um item específico pelo seu índice e percorrer todos os itens, um por um, usando um loop. Essa combinação de lista mais loop é uma das ferramentas mais poderosas da programação, porque permite repetir a mesma ação para muitos dados sem reescrever o código.

Os dicionários resolvem outro problema: às vezes não queremos guardar valores em ordem por número, e sim por nome. Um dicionário guarda pares de chave e valor, como uma agenda em que cada nome (a chave) aponta para um telefone (o valor). Em vez de pedir o item da posição 2, pedimos o valor da chave "telefone". Isso deixa os dados muito mais claros: a chave descreve o que aquele valor significa.

Nesta aula os alunos juntam tudo o que já viram no mês — variáveis, decisões, loops e funções — para construir um pequeno cadastro. Eles vão criar uma lista de itens, guardar informações detalhadas em dicionários e percorrer esses dados com um loop para mostrar tudo na tela de forma organizada. É o primeiro passo para programas que de verdade guardam e manipulam coleções de informações.`,
  materiais: [
    `Computadores com Python instalado e um editor de código aberto (VS Code, Thonny ou IDLE), um por aluno`,
    `Projetor ou TV para o professor mostrar o código sendo digitado e executado ao vivo`,
    `Arquivo de exemplo cadastro_inicio.py com uma lista simples já pronta, para servir de ponto de partida`,
    `Arquivo de exemplo cadastro_pronto.py com a versão final do cadastro, para o professor consultar`,
    `Quadro branco para desenhar listas como caixas numeradas e dicionários como uma agenda de chave e valor`,
    `Folha de papel para o aluno rascunhar quais informações o cadastro vai guardar antes de programar`,
  ],
  conceitosChave: [
    `Lista — uma variável que guarda vários valores juntos, em ordem, dentro de colchetes, como uma caixa numerada.`,
    `Índice — o número da posição de um item na lista; no Python a contagem começa em zero.`,
    `Método append — comando que adiciona um item novo no final de uma lista.`,
    `Dicionário — uma coleção de pares de chave e valor, escrita entre chaves, em que cada chave dá nome ao seu valor.`,
    `Chave — o nome usado para encontrar um valor dentro de um dicionário, como a palavra "nome" ou "idade".`,
    `Valor — a informação guardada e associada a uma chave dentro do dicionário.`,
    `Percorrer com loop — usar um for para visitar todos os itens de uma lista ou de um dicionário, um de cada vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Listas e dicionários são duas formas de guardar muitos dados em uma única variável. A lista usa colchetes e guarda valores em ordem, acessados por um número de posição chamado índice. Atenção a um ponto que confunde iniciantes: o índice começa em zero, então o primeiro item é o de número 0. O dicionário usa chaves e guarda pares de chave e valor, acessados pelo nome da chave em vez de por um número. Pense na lista como uma fila de caixas numeradas e no dicionário como uma agenda em que cada nome aponta para uma informação.

Antes da aula, abra o editor e teste rodar um arquivo Python simples. Para imprimir um valor junto de um texto, use a vírgula dentro do print, assim: print("Texto", variável). Evite f-strings nesta aula para manter o código simples e previsível. Tenha o arquivo cadastro_pronto.py aberto numa janela só sua, para consultar caso travar.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento e revisão (10 min): no quadro, escreva três variáveis separadas com nomes de jogadores e pergunte: "e se fossem cem jogadores?". Conduza a turma a perceber que precisamos de algo melhor. Desenhe uma fila de caixas numeradas de 0 em diante e diga que isso é uma lista. Relembre rapidamente o loop for da aula passada.

Conteúdo novo guiado (15 min): no projetor, digite e rode passo a passo. Primeiro a lista:

jogadores = ["Ana", "Bruno", "Carla"]
print(jogadores[0])
jogadores.append("Diego")
print(jogadores)

Explique linha a linha: a primeira cria a lista com três nomes; a segunda mostra o item do índice 0 (Ana); a terceira adiciona Diego no final com append; a quarta mostra a lista completa. Depois percorra com loop:

for nome in jogadores:
    print("Jogador:", nome)

Mostre que o loop visita cada nome, um por vez. Em seguida o dicionário:

aluno = {"nome": "Ana", "idade": 12}
print(aluno["nome"])
print("Idade:", aluno["idade"])

Explique que entre chaves ficam os pares: a chave "nome" aponta para "Ana". Acessamos pelo nome da chave, não por número.

Mão na massa (25 min): cada aluno cria uma lista com pelo menos quatro itens (jogos favoritos, por exemplo), usa append para adicionar mais um e percorre a lista com for imprimindo cada item. Depois cria um dicionário com três chaves descrevendo algo (um personagem, um jogo) e imprime dois valores acessando pelas chaves. Circule lembrando que índice começa em zero e que a chave vai entre aspas dentro dos colchetes.

Desafio e compartilhar (10 min): proponha juntar tudo num mini cadastro: uma lista de dicionários, em que cada dicionário descreve uma pessoa, percorrida por um loop. Cada aluno mostra a tela e lê em voz alta um item do seu cadastro.

## Como explicar de forma clara (linguagem para a idade)

Compare a lista a um armário de escola com gavetas numeradas a partir do zero: "para pegar algo, você diz o número da gaveta". Compare o dicionário ao contato do celular: "você não procura o telefone pela posição 5, procura pelo nome da pessoa". Reforce a regra do índice com uma frase curta: "no Python, o primeiro é o zero". Ao falar de append, use a imagem de "colocar mais um na fila, sempre no fim". Pergunte sempre "isso aqui é ordem por número ou por nome?" para os alunos escolherem entre lista e dicionário.

## Erros comuns e como ajudar

O erro mais comum é pedir o índice 1 esperando o primeiro item; relembre que a contagem começa em zero. Outro é esquecer os colchetes ou as aspas ao acessar uma chave: o certo é aluno["nome"], com aspas, pois é uma palavra. Muitos escrevem append sem os parênteses ou esquecem o ponto antes; mostre o formato lista.append(item). Há quem confunda colchetes de lista com chaves de dicionário; aponte no quadro qual símbolo é de cada um. Por fim, lembre que o bloco dentro do for precisa estar indentado (com espaços à frente), senão o Python acusa erro.`,
  exercicios: [
    {
      titulo: `Minha primeira lista`,
      tipo: `prática guiada`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno consiga criar a lista e acessar um item antes de seguir. Reforce que o índice começa em zero conferindo a saída na tela.`,
      atividade: `Crie uma lista chamada cores com quatro cores que você gosta. Depois imprima na tela apenas o primeiro item da lista e apenas o terceiro item, usando os índices certos.`,
      gabarito: `cores = ["azul", "verde", "vermelho", "amarelo"]
print(cores[0])
print(cores[2])

O primeiro item está no índice 0 e o terceiro no índice 2, porque a contagem começa em zero. A saída esperada é "azul" e depois "vermelho".`,
    },
    {
      titulo: `Adicionando e percorrendo`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Mostre o formato lista.append(item) no projetor. Confira que o bloco do for está indentado e que o append realmente colocou o item novo no final.`,
      atividade: `Crie uma lista chamada jogos com três jogos. Use append para adicionar um quarto jogo. Depois percorra a lista inteira com um loop for, imprimindo cada jogo com o texto "Jogo:" na frente.`,
      gabarito: `jogos = ["Roblox", "Minecraft", "Mario"]
jogos.append("Sonic")
for jogo in jogos:
    print("Jogo:", jogo)

O append acrescenta "Sonic" no fim da lista. O for visita os quatro jogos, um por vez, e imprime cada um precedido de "Jogo:".`,
    },
    {
      titulo: `Meu primeiro dicionário`,
      tipo: `desafio individual`,
      tempo: `9 min`,
      guiaProfessor: `Aponte no quadro a diferença entre colchetes de lista e chaves de dicionário. Reforce que a chave vai entre aspas quando é uma palavra.`,
      atividade: `Crie um dicionário chamado personagem com três chaves: "nome", "vida" e "arma". Preencha com os dados de um personagem do seu jogo. Depois imprima o nome e a vida acessando pelas chaves.`,
      gabarito: `personagem = {"nome": "Cavaleiro", "vida": 100, "arma": "espada"}
print("Nome:", personagem["nome"])
print("Vida:", personagem["vida"])

Os dados ficam entre chaves, em pares de chave e valor. O acesso é feito pelo nome da chave entre aspas e colchetes, não por número de posição.`,
    },
    {
      titulo: `Lista de dicionários: o cadastro`,
      tipo: `projeto curto`,
      tempo: `13 min`,
      guiaProfessor: `Indicado para juntar tudo. Mostre que dentro de um for podemos acessar as chaves de cada dicionário. Ajude quem confundir o item do loop com a lista inteira.`,
      atividade: `Crie uma lista chamada turma com dois dicionários; cada dicionário representa um aluno com as chaves "nome" e "idade". Percorra a lista com um for e, para cada aluno, imprima o nome e a idade.`,
      gabarito: `turma = [
    {"nome": "Ana", "idade": 12},
    {"nome": "Bruno", "idade": 13},
]
for aluno in turma:
    print("Nome:", aluno["nome"], "- Idade:", aluno["idade"])

Cada volta do loop pega um dicionário da lista e a variável aluno guarda esse dicionário. Acessamos os valores com aluno["nome"] e aluno["idade"]. A saída mostra os dois alunos com nome e idade.`,
    },
    {
      titulo: `Função que cadastra`,
      tipo: `desafio avançado`,
      tempo: `13 min`,
      guiaProfessor: `Conecta com a aula de funções. Reforce que a função recebe dados, monta o dicionário e o devolve com return. Aceite variações de nomes de chave desde que o aluno explique a lógica.`,
      atividade: `Escreva uma função chamada criar_aluno que receba um nome e uma idade e devolva um dicionário com as chaves "nome" e "idade". Use a função para criar dois alunos, guarde-os em uma lista e percorra a lista imprimindo cada nome.`,
      gabarito: `def criar_aluno(nome, idade):
    return {"nome": nome, "idade": idade}

turma = []
turma.append(criar_aluno("Carla", 11))
turma.append(criar_aluno("Diego", 14))

for aluno in turma:
    print("Aluno:", aluno["nome"])

A função monta um dicionário com os dados recebidos e o devolve com return. Cada chamada cria um aluno, que é adicionado à lista com append. O for percorre a lista e imprime o nome de cada aluno, unindo função, dicionário, lista e loop.`,
    },
  ],
};
