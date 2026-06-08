import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Gráfico de Barras: As Torres",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Reconhecer o gráfico de barras como torres altas e baixas, ler qual barra é a campeã e qual é a menor, e criar um gráfico de barras simples a partir de uma tabelinha.`,
  descricao: `Nas aulas anteriores deste mês as crianças descobriram que os números podem virar desenho e fizeram seu primeiro gráfico com a ajuda do programa. Hoje a gente para tudo e olha com carinho para um tipo de gráfico em especial: o gráfico de barras. A ideia é simples e poderosa: cada barra é uma torre, e a altura da torre conta uma história. Torre alta quer dizer "tem bastante"; torre baixa quer dizer "tem pouquinho".

O coração da aula é ensinar a olhar e comparar. Quando colocamos várias torres lado a lado, fica fácil ver de longe quem ganhou. A barra mais alta é a campeã, é quem tem mais. A barra mais baixinha é quem tem menos. As crianças não precisam contar número por número: elas só batem o olho nas alturas das torres e já sabem a resposta. Esse "ler com os olhos" é uma das mágicas mais úteis dos gráficos, e é exatamente o que vamos treinar.

Para deixar tudo bem concreto, a turma vai primeiro brincar de ser barra com o próprio corpo e depois ler gráficos de barras já prontos no projetor, apontando com o dedo qual torre é a campeã. Só depois disso é que cada criança vai montar o seu, transformando uma tabelinha pequena (por exemplo, quantas crianças gostam de cada fruta) em torres coloridas na tela. O programa desenha as barras sozinho; o trabalho da criança é digitar os números e clicar no botão certo.

Esta aula é prática guiada, no mesmo ritmo para todos. O professor mostra um passo no projetor, as crianças repetem no computador. Hoje o foco é só o gráfico de barras: ainda não falamos de pizza nem de cores e títulos chiques (isso vem nas próximas aulas). A meta é que cada aluno saia sabendo apontar a barra campeã, a barra menor, e tenha feito ao menos um gráfico de barras simples do começo ao fim.`,
  materiais: [
    `Um computador por criança (ou dupla) com o Excel ou o Google Planilhas já aberto numa planilha em branco.`,
    `Projetor ou tela grande ligada ao computador do professor, para demonstrar cada passo e mostrar os gráficos prontos.`,
    `Um arquivo de exemplo pronto, feito antes da aula, com uma tabelinha de frutas (Maçã, Banana, Uva) e um gráfico de barras já montado, para mostrar o resultado final.`,
    `Dois ou três gráficos de barras prontos e bem coloridos (impressos grandes ou na tela) para as crianças treinarem a ler e apontar a barra campeã.`,
    `Uma tabelinha inicial simples para cada criança digitar, com três nomes e três números pequenos (de 1 a 10).`,
    `Blocos de montar, copinhos empilháveis ou peças de Lego para construir torres de verdade na mesa e comparar alturas.`,
    `Adesivos ou carimbos de "Caçador de Campeã" para premiar quem montar e ler o próprio gráfico.`,
  ],
  conceitosChave: [
    `Gráfico de barras — um desenho feito de torres; cada torre mostra quanto tem de uma coisa.`,
    `Barra (ou torre) — o retângulo em pé que sobe; quanto mais alto, mais coisa ele representa.`,
    `Altura da barra — o tamanho da torre; torre alta é muito, torre baixinha é pouco.`,
    `Barra campeã — a torre mais alta de todas, que mostra quem tem mais.`,
    `Barra menor — a torre mais baixinha, que mostra quem tem menos.`,
    `Comparar — olhar duas torres lado a lado e ver qual é maior só com os olhos.`,
    `Rótulo — o nome escrito embaixo de cada torre, dizendo do que ela está falando (Maçã, Banana...).`,
  ],
  treinamento: `## O que o professor precisa saber

O gráfico de barras é o tipo mais fácil de entender e o melhor para começar. Cada categoria (uma fruta, um animal, um nome) vira uma barra, e o tamanho da barra é o número daquela categoria. Maior número, barra mais alta. É só isso. A força do gráfico de barras é a comparação visual: lado a lado, qualquer pessoa enxerga num instante quem é o maior e quem é o menor, sem precisar somar nada.

No Excel e no Google Planilhas o caminho é quase igual: você digita uma tabelinha com duas colunas (uma com os nomes, outra com os números), seleciona essas células e pede ao programa para inserir um gráfico de colunas. O programa desenha as torres sozinho. Decore dois nomes: no Excel o tipo se chama "Colunas" (na aba "Inserir"); no Google Planilhas, depois de inserir, você escolhe "Gráfico de colunas" no painel da direita. "Coluna" é a barra em pé; é a que queremos hoje.

Prepare antes: tenha o arquivo de exemplo com o gráfico pronto e teste você mesmo o caminho de inserir na ferramenta que vai usar. Tenha também dois ou três gráficos de barras prontos só para a turma treinar a leitura apontando a campeã.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar)

Aquecimento (10 min): no chão ou na mesa, monte torres de copinhos ou blocos de alturas diferentes. Pergunte: "Qual torre é a mais alta? E a mais baixinha?". Mostre no projetor o gráfico de barras pronto do exemplo e diga que ali as torres são desenhadas. Peça para uma criança vir apontar a barra campeã.

Conteúdo novo guiado (15 min): no projetor, digite uma tabelinha de três linhas, por exemplo Maçã 5, Banana 8, Uva 3. Selecione as células arrastando o mouse de cima até embaixo. No Excel: clique na aba "Inserir", clique no ícone de "Colunas" (barrinhas em pé) e escolha o primeiro modelo, "Colunas Agrupadas". No Google Planilhas: clique no menu "Inserir" e depois em "Gráfico"; se vier outro tipo, no painel da direita troque "Tipo de gráfico" para "Gráfico de colunas". Apontem juntos qual torre ficou mais alta.

Mão na massa (25 min): cada criança digita a sua tabelinha inicial (três nomes, três números pequenos), seleciona as células e insere o gráfico de colunas pelo mesmo caminho. Circule pela sala. Depois de pronto, peça que cada uma aponte na tela a barra campeã e a barra menor. Quem terminar, troca um número e vê a torre crescer ou encolher.

Desafio e compartilhar (10 min): peça para mudar um número de propósito e fazer a torre menor virar a campeã. Depois cada criança mostra o gráfico ao colega do lado e diz em voz alta qual é a campeã. Carimbo de "Caçador de Campeã" para quem montou e leu o gráfico.

## Como explicar para crianças de 5 a 9 anos

Use sempre a palavra "torre". Diga: "Cada barra é uma torre. Quanto mais coisa, mais alta ela fica." Faça o gesto com a mão subindo para "alta" e a mão baixinha para "pouco". Compare com as torres de copinhos que vocês montaram: "Na tela é a mesma coisa, só que o computador desenha pra gente."

Para ensinar a ler, transforme em caça à campeã: "Cadê a torre campeã? Aponta com o dedo!" e "Cadê a baixinha?". Celebre cada acerto com um "Isso! A campeã é a banana porque é a torre mais alta!". A repetição alegre e o apontar com o dedo fixam o conceito muito melhor que explicar com palavras difíceis.

## Erros comuns e como ajudar

Erro número um: a criança seleciona só os números e esquece os nomes, e o gráfico fica sem rótulo embaixo das torres. Mostre que ela precisa arrastar o mouse cobrindo as duas colunas, nomes e números juntos, antes de inserir.

Erro número dois: escolher o tipo errado (linha ou pizza) na hora de inserir. Sente ao lado e mostre o ícone certo: barrinhas em pé, as "torres". No Excel é o de "Colunas"; no Google Planilhas, troque no painel para "Gráfico de colunas".

Erro número três: confundir a barra campeã com a primeira da fila. Lembre que campeã é a mais ALTA, não a que está na frente. Peça para a criança correr o dedo pelo topo das torres comparando as alturas, e não a ordem.`,
  exercicios: [
    {
      titulo: `Torres de Copinho: quem é a campeã?`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Sem computador. Monte na mesa três torres de copinhos ou blocos com alturas bem diferentes e dê nomes a elas (por exemplo, torre Maçã, torre Banana, torre Uva). Conduza a turma a comparar as alturas só com os olhos, sem contar peça por peça. Reforce as palavras campeã (mais alta) e menor (mais baixinha).`,
      atividade: `Olhar as três torres montadas e apontar com o dedo: primeiro a torre campeã (a mais alta) e depois a torre menor (a mais baixinha). Cada criança fala em voz alta o nome da campeã.`,
      gabarito: `A criança aponta corretamente a torre mais alta como campeã e a mais baixinha como menor. Numa montagem com Maçã pequena, Banana alta e Uva média, a campeã é a Banana e a menor é a Maçã. Acerto é apontar pela altura, não pela posição na fila.`,
    },
    {
      titulo: `Apontando na Tela: lendo barras prontas`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor (ou impresso grande) um gráfico de barras já pronto e colorido. Faça perguntas de leitura, uma de cada vez, e deixe as crianças apontarem na tela. Não fale de digitar nem de montar ainda; o foco é treinar o olho para ler torres.`,
      atividade: `Diante de um gráfico de barras pronto, as crianças respondem apontando: "Qual torre é a campeã?", "Qual é a baixinha?" e "Qual nome está embaixo da campeã?". Cada criança responde pelo menos uma pergunta.`,
      gabarito: `As respostas batem com as alturas mostradas no gráfico. Por exemplo, num gráfico com Cachorro 7, Gato 4 e Peixe 2, a campeã é o Cachorro (torre mais alta) e a menor é o Peixe (torre mais baixa). O rótulo embaixo da campeã é "Cachorro".`,
    },
    {
      titulo: `Minha Tabelinha vira Torres`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Guie passo a passo no projetor. As crianças digitam três nomes na primeira coluna e três números pequenos (1 a 10) na segunda. Depois selecionam as duas colunas arrastando o mouse. No Excel: aba Inserir, ícone Colunas, modelo "Colunas Agrupadas". No Google Planilhas: menu Inserir, Gráfico, e se preciso trocar para "Gráfico de colunas" no painel da direita. Espere todos terminarem antes de seguir.`,
      atividade: `Cada criança digita sua tabelinha (três nomes e três números), seleciona as duas colunas e insere um gráfico de colunas. Quando as torres aparecerem, aponta na tela a barra campeã e a barra menor.`,
      gabarito: `Aparece na tela um gráfico de barras com três torres, cada uma com seu nome embaixo (rótulo) e altura igual ao número digitado. A criança aponta como campeã a torre do maior número e como menor a do menor número. Caminho certo: selecionar nomes e números juntos antes de inserir o gráfico de colunas.`,
    },
    {
      titulo: `Mapa das Torres no Papel`,
      tipo: `desenho/papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue uma folha. Dê uma tabelinha simples (por exemplo, Sol 6, Lua 9, Estrela 3) e peça para desenharem as torres com alturas diferentes, do tamanho de cada número, e escreverem o nome embaixo de cada uma. Esse desenho ajuda a criança a entender que número grande é torre alta.`,
      atividade: `Desenhar três torres lado a lado representando os números dados: torre mais alta para o número maior, mais baixa para o menor, com o nome escrito embaixo de cada torre. Pintar de cores diferentes e circular a torre campeã.`,
      gabarito: `O desenho mostra três torres com alturas proporcionais aos números (a maior para o maior número) e o nome certo embaixo de cada uma. Com Sol 6, Lua 9, Estrela 3, a torre da Lua é a mais alta e deve estar circulada como campeã; a da Estrela é a mais baixinha.`,
    },
    {
      titulo: `Desafio da Virada: trocando a campeã`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Desafio final, dificuldade maior. Peça para a criança olhar o próprio gráfico, descobrir qual torre é a menor, e mudar o número dela na tabela para um valor bem grande, de modo que a torre cresça e vire a nova campeã. Mostre que ao trocar o número na célula a torre muda sozinha. Carimbo para quem conseguir e explicar a virada.`,
      atividade: `No seu gráfico, achar a barra menor, clicar na célula do número dela na tabela, digitar um número bem maior e apertar Enter. Observar a torre crescer e virar a campeã. Depois contar ao colega qual torre era a menor e virou campeã.`,
      gabarito: `Após trocar o número da menor barra por um valor maior que todos os outros, a torre cresce e passa a ser a mais alta do gráfico (a nova campeã), atualizando sozinha. Sucesso quando a criança identifica a barra menor, aumenta o número certo e percebe que a altura da torre acompanha o número.`,
    },
  ],
};
