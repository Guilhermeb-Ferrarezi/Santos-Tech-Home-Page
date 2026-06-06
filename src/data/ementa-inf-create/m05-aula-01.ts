import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Google Planilhas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `O aluno acessa o Google Planilhas pelo navegador com a conta Google, cria sua primeira planilha em branco e entende o que são células, linhas e colunas, percebendo que tudo é salvo automaticamente na nuvem.`,
  descricao: `Esta é a primeira aula do mês dedicado ao Google Planilhas. O aluno já conhece o computador, já conversou com várias IAs e já mexeu em documentos; agora começa um eixo muito prático: aprender a trabalhar com planilhas na nuvem. O entregável deste mês é uma planilha de verdade guardada online, e hoje a turma dá o primeiro passo dessa construção, descobrindo onde a ferramenta mora e como ela funciona.

Uma planilha é uma folha quadriculada feita de pequenas caixinhas chamadas células, organizadas em linhas (na horizontal) e colunas (na vertical). Cada célula guarda um pedacinho de informação: um nome, um número, uma data. As planilhas servem para organizar listas, somar valores, controlar gastos, montar tabelas e muito mais. O Google Planilhas é a ferramenta gratuita do Google para criar essas planilhas direto no navegador, sem instalar nada no computador.

A grande diferença do Google Planilhas para o Excel instalado é justamente esta: o Excel é um programa que fica gravado no computador e que abre arquivos guardados ali na máquina, enquanto o Google Planilhas funciona pela internet e guarda tudo na nuvem, dentro do Google Drive. Por isso não existe botão "salvar": a cada letra ou número que você digita, o Google grava sozinho. Outra vantagem é que a mesma planilha pode ser aberta de qualquer computador, basta entrar na conta Google.

Nesta primeira aula o foco é se familiarizar com a ferramenta e perder o medo dela. O aluno vai descobrir onde o Google Planilhas mora, vai criar uma planilha em branco, vai conhecer a tela (a grade de células, as letras das colunas, os números das linhas) e vai digitar suas primeiras informações em algumas células. É importante manter o escopo de hoje: não vamos importar dados nem usar fórmulas, pois isso vem nas próximas aulas. Hoje plantamos a base: acessar, criar, nomear a planilha e entender a grade. Quando o adolescente percebe que está montando a mesma coisa que vê os adultos usarem no trabalho, a ferramenta deixa de ser misteriosa e vira algo que ele controla.`,
  materiais: [
    `Um computador por aluno, com navegador (de preferência o Chrome) e conexão com a internet, para acessar o Google Planilhas direto no site.`,
    `Conta Google ativa para cada aluno (a conta da escola ou uma conta pessoal já logada), pois o Planilhas só funciona com login.`,
    `Computador do professor ligado a um projetor ou televisão grande, para demonstrar cada clique na tela do Google Planilhas.`,
    `Uma planilha de exemplo já pronta e aberta pelo professor (por exemplo, uma lista de presença da turma ou um controle de mesada), para mostrar logo no começo o que dá para fazer.`,
    `O endereço sheets.google.com anotado no quadro, além do caminho pelo Google Drive, para os alunos encontrarem a ferramenta de duas maneiras.`,
    `Uma lista de ideias de tema no quadro (lista de presença, lanches favoritos da turma, agenda de jogos, controle de mesada) para quem travar na hora de escolher o que digitar.`,
    `Cronômetro ou relógio visível para controlar as quatro etapas da aula (10/15/25/10).`,
  ],
  conceitosChave: [
    `Planilha — uma folha quadriculada, feita de células, usada para organizar informações e números em linhas e colunas.`,
    `Google Planilhas — a ferramenta gratuita do Google, usada no navegador, para criar e guardar planilhas na nuvem.`,
    `Nuvem — o espaço de armazenamento na internet onde seus arquivos ficam guardados, podendo ser abertos de qualquer computador.`,
    `Célula — cada caixinha da planilha, onde você digita uma informação; é identificada por uma letra e um número, como A1 ou B3.`,
    `Coluna — a fileira que vai de cima para baixo (vertical), identificada por uma letra no topo, como A, B ou C.`,
    `Linha — a fileira que vai da esquerda para a direita (horizontal), identificada por um número na lateral, como 1, 2 ou 3.`,
    `Salvamento automático — o recurso que grava tudo sozinho na nuvem a cada alteração, sem precisar clicar em "salvar".`,
  ],
  treinamento: `## O que o professor precisa saber

O Google Planilhas é uma ferramenta totalmente online, que roda no navegador e não precisa de instalação. Para usá-la basta estar logado numa conta Google. Tudo o que o aluno cria fica salvo automaticamente no Google Drive, então não existe botão "salvar": o Planilhas grava sozinho a cada alteração. Isso tranquiliza muito a turma, que não corre o risco de perder o trabalho. Vale você reforçar a diferença para o Excel instalado: o Excel é um programa gravado na máquina, enquanto o Google Planilhas vive na internet e guarda os arquivos na nuvem.

Existem duas maneiras fáceis de chegar ao Planilhas. A primeira é digitar sheets.google.com na barra de endereço do navegador e apertar Enter. A segunda é pelo Drive: abrir drive.google.com, clicar no botão Novo (canto superior esquerdo, com um sinal de mais), passar o mouse sobre Planilhas Google e escolher Planilha em branco. Teste as duas antes da aula para saber qual flui melhor com a conta da escola.

A tela tem partes que o professor deve saber nomear. No alto, à esquerda, fica o nome do arquivo (começa como "Planilha sem título"); clicar nele permite renomear. Logo abaixo ficam os menus (Arquivo, Editar, Inserir, Formatar) e a barra de ferramentas. O grande quadriculado central é a grade de células. No topo da grade, as letras A, B, C identificam as colunas; na lateral esquerda, os números 1, 2, 3 identificam as linhas. O encontro de uma coluna com uma linha é uma célula, com nome como A1. A célula selecionada fica com a borda azul, e o nome dela aparece na "Caixa de nome", à esquerda, logo acima das letras.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Mostre no projetor uma planilha de exemplo pronta, como uma lista de presença da turma. Pergunte: "Onde vocês já viram uma tabela assim, cheia de quadradinhos?" Deixe falarem de boletins, tabelas de jogos, controle de mesada. Diga que hoje todos vão criar uma dessas, do zero. Não mostre ainda como; só desperte a vontade.

2. Conteúdo novo guiado (15 min). No seu computador, mostre o caminho devagar. Abra sheets.google.com e clique em "Planilha em branco" (o cartão com o sinal de mais). Quando a grade abrir, clique no nome "Planilha sem título" lá em cima e renomeie. Depois clique numa célula (mostre que ela fica com borda azul) e aponte o nome dela na Caixa de nome. Clique na letra A, no topo, e diga "isto é uma coluna"; clique no número 1, na lateral, e diga "isto é uma linha". Digite algo na célula A1 e aperte Enter para descer.

3. Mão na massa (25 min). Leve a turma aos computadores. Guie todos juntos até abrir uma planilha em branco e renomeá-la. A partir daí, cada aluno escolhe um tema da lista do quadro (lanches favoritos, agenda de jogos, lista de presença) e digita pelo menos cinco informações em células, uma embaixo da outra na coluna A, apertando Enter a cada uma. Passe de mesa em mesa conferindo se o nome do arquivo mudou e se o aluno sabe apontar uma célula, uma linha e uma coluna. Lembre que tudo salva sozinho.

4. Desafio e compartilhar (10 min). Proponha o desafio: digitar uma informação na célula exata B2, sem confundir com A2 ou B1. Depois reúna a turma e peça que dois ou três alunos mostrem no projetor a planilha, dizendo o nome que deram ao arquivo e apontando uma célula, uma linha e uma coluna.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, compare a planilha a um caderno quadriculado gigante, onde cada quadradinho tem nome e sobrenome: a letra da coluna e o número da linha. Diga: "A célula A1 é o cruzamento da coluna A com a linha 1, igual a um endereço: rua A, número 1." Para a diferença entre coluna e linha, lembre que coluna fica "em pé" (vertical) e linha fica "deitada" (horizontal). Explique que não existe botão salvar porque o Google guarda tudo na hora, na nuvem, e que por isso a planilha pode ser aberta de qualquer computador. Use frases curtas, mostre na tela antes de pedir e deixe cada um digitar sozinho.

## Erros comuns e como ajudar

- Esquecer de fazer login na conta Google e o Planilhas não abrir. Confira no canto superior direito se aparece a foto ou inicial da conta; se não, ajude o aluno a entrar antes de continuar.

- Confundir linha com coluna. Reforce com gesto: coluna em pé (de cima para baixo, letras), linha deitada (da esquerda para a direita, números).

- Procurar um botão de salvar e travar. Tranquilize: o Planilhas salva sozinho a cada letra; basta olhar a mensagem "Todas as alterações foram salvas no Drive".

- Não renomear o arquivo e deixar "Planilha sem título". Mostre que basta clicar no nome lá no alto, à esquerda, e digitar o novo nome.

- Digitar numa célula errada por não olhar a Caixa de nome. Ensine a conferir, antes de digitar, qual célula está selecionada (a de borda azul) olhando o nome na Caixa de nome.`,
  exercicios: [
    {
      titulo: `Onde já vi uma tabela assim?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece sem computador, com a turma voltada para o projetor mostrando uma planilha de exemplo pronta (uma lista de presença ou um controle de mesada). Conduza uma conversa rápida sobre onde os adolescentes já viram tabelas quadriculadas no dia a dia: boletins, tabelas de jogos, planilhas de gastos, listas de compras. Vá anotando no quadro os exemplos. O objetivo é mostrar que planilha é algo comum e despertar a vontade de criar uma.`,
      atividade: `Olhem esta tabela cheia de quadradinhos no projetor. Onde vocês já viram algo parecido? Pensem em boletins da escola, tabelas de campeonato, controle de mesada ou lista de compras. Diga pelo menos um lugar onde você já viu uma tabela assim e o que ela mostrava.`,
      gabarito: `O aluno acerta se citar pelo menos um exemplo real de tabela ou planilha que já viu (boletim, tabela de jogos, controle de gastos, lista de compras) e entender que é uma folha quadriculada feita de células em linhas e colunas. Não é preciso usar o termo Google Planilhas ainda; reconhecer a ideia já conta como acerto.`,
    },
    {
      titulo: `Achando o Google Planilhas`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Agora a turma vai localizar e abrir a ferramenta, sem digitar nada ainda. Demonstre no projetor as duas formas: digitar sheets.google.com e apertar Enter, e o caminho pelo Drive (botão Novo, depois Planilhas Google, depois Planilha em branco). Guie a turma a abrir uma planilha em branco, esperando todos chegarem. Confira se cada aluno está logado na conta Google, olhando o canto superior direito. Reforce que a grade de células apareceu, vazia.`,
      atividade: `Vamos abrir a ferramenta. 1. Na barra de endereço do navegador, digite sheets.google.com e aperte Enter. 2. Clique no cartão "Planilha em branco", o que tem o sinal de mais. 3. Esperou a grade quadriculada abrir? Confira no canto de cima, à direita, se aparece a foto ou a inicial da sua conta Google. Levante a mão quando a planilha em branco estiver na sua tela.`,
      gabarito: `O aluno acerta se conseguir abrir uma planilha em branco no Google Planilhas, por qualquer um dos dois caminhos (endereço direto ou pelo Drive), com a conta Google logada. Sinal de sucesso: a grade de células aparece, com as letras A, B, C no topo e os números 1, 2, 3 na lateral. Pequena ajuda do professor no login é aceitável.`,
    },
    {
      titulo: `Dando nome e digitando na grade`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Este é o coração da aula. No projetor, mostre devagar: clicar no nome "Planilha sem título" lá no alto à esquerda e renomear; depois clicar numa célula (mostre a borda azul e o nome na Caixa de nome) e digitar, apertando Enter para descer uma linha. Peça que cada aluno escolha um tema da lista do quadro (lanches favoritos, agenda de jogos, lista de presença) e digite pelo menos cinco informações na coluna A, uma por linha. Passe de mesa em mesa conferindo o nome do arquivo e o uso do Enter. Lembre que tudo salva sozinho.`,
      atividade: `Hora de dar identidade à sua planilha. 1. Clique no nome "Planilha sem título" lá no alto, à esquerda, e digite um nome que combine com o tema (por exemplo, "Lanches Favoritos da Turma"). 2. Clique na célula A1 e digite a primeira informação. 3. Aperte Enter para descer para A2 e digite a próxima. Faça isso até ter pelo menos cinco informações na coluna A, uma embaixo da outra. Não precisa salvar: o Google guarda sozinho.`,
      gabarito: `O aluno acerta se renomear o arquivo (deixando de ser "Planilha sem título") com um nome que combine com o tema, e digitar pelo menos cinco informações em células da coluna A, uma por linha, usando Enter para descer. Sinal de sucesso: o nome do arquivo no topo combina com o conteúdo, e as células A1 a A5 estão preenchidas. A mensagem de salvamento no Drive confirma que está tudo guardado.`,
    },
    {
      titulo: `Caça às células`,
      tipo: `Prática em dupla`,
      tempo: `14 min`,
      guiaProfessor: `Organize a turma em duplas para que um confira o outro. O objetivo é fixar a leitura do endereço das células (letra da coluna + número da linha). No projetor, mostre como clicar numa célula faz o nome dela aparecer na Caixa de nome, à esquerda, acima das letras. Ditem-se mutuamente endereços de células e confiram pela Caixa de nome. Passe nas duplas verificando se diferenciam linha de coluna. Quem terminar pode criar novos endereços para o colega achar.`,
      atividade: `Em dupla, façam a caça às células. 1. Um diz um endereço, por exemplo "vá para a célula C4". 2. O colega clica nessa célula e confere o nome dela na Caixa de nome (à esquerda, acima das letras), digitando ali a palavra "achei". 3. Troquem de papel e repitam com pelo menos quatro endereços diferentes (como B2, D3, A5, E1). Apontem juntos qual é a coluna (letra) e qual é a linha (número) de cada um.`,
      gabarito: `O aluno acerta se, ao receber um endereço como C4, selecionar exatamente essa célula (confirmada pela Caixa de nome) e souber dizer que C é a coluna e 4 é a linha. Sinal de sucesso: a dupla acerta pelo menos quatro endereços diferentes sem confundir coluna com linha. Saber explicar que o endereço é "letra da coluna mais número da linha" reforça o acerto.`,
    },
    {
      titulo: `Desafio: acerte a célula B2`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha o desafio depois que a turma já souber ler o endereço das células. O objetivo é acertar uma célula específica sem confundir a ordem coluna-linha. No projetor, mostre que B2 é o cruzamento da coluna B com a linha 2, diferente de A2 (coluna errada) e de B1 (linha errada). Peça que cada aluno selecione B2, confira pela Caixa de nome e só então digite. Depois conduza a roda para dois ou três mostrarem a planilha no projetor.`,
      atividade: `Desafio final! 1. Sem pressa, ache a célula B2: ela fica no cruzamento da coluna B (segunda letra) com a linha 2 (segundo número). 2. Confira na Caixa de nome, à esquerda, se está escrito B2 antes de digitar. 3. Digite ali a frase "Cheguei na B2". 4. Cuidado para não cair na A2 (coluna errada) nem na B1 (linha errada). Levante a mão quando acertar.`,
      gabarito: `O aluno acerta se digitar o texto exatamente na célula B2, confirmada pela Caixa de nome, sem confundir com A2 ou B1. Sinal de sucesso: a frase aparece na B2 e o aluno sabe explicar que B é a coluna e 2 é a linha. Reconhecer por que A2 e B1 estariam erradas (coluna ou linha trocada) mostra domínio completo do conceito de endereço de célula.`,
    },
  ],
};
