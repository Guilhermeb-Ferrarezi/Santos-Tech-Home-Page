import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Deixando o gráfico com a sua cara",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Personalizar um gráfico no Google Planilhas mudando cores, título, legenda e rótulos de dados pelo editor de gráficos, criar mais de um tipo de gráfico e escolher qual comunica melhor a informação.`,
  descricao: `Na aula passada os alunos transformaram números em gráficos pela primeira vez e descobriram que o Google Planilhas desenha tudo quase sozinho. Só que o gráfico que o programa cria é apenas um ponto de partida: cores cinzentas, um título genérico do tipo "Soma de Vendas" e nenhum número aparecendo nas barras. Esta aula é sobre dar acabamento, deixar o gráfico com a cara do aluno e, principalmente, fazer com que qualquer pessoa entenda a mensagem em três segundos.

A ferramenta central é o editor de gráficos, aquele painel que abre no lado direito da tela quando o aluno clica duas vezes no gráfico. Ele tem duas abas: "Configurar", onde se escolhe o tipo de gráfico e os dados, e "Personalizar", onde mora tudo o que esta aula explora: o título, as cores de cada série, a posição da legenda e os rótulos de dados, que são os numerinhos que aparecem em cima de cada barra ou fatia. Um gráfico bem rotulado dispensa que a pessoa vá conferir a tabela.

Mais do que apertar botões, o aluno vai treinar uma decisão de design: qual gráfico comunica melhor. O mesmo conjunto de dados pode virar um gráfico de colunas, de barras, de linhas ou de pizza, e nem todos contam a história com a mesma clareza. Pizza é ótima para mostrar fatias de um todo (quanto cada um representa de 100%); colunas e barras são imbatíveis para comparar quantidades; linha é a escolha quando o assunto é evolução ao longo do tempo. Criar dois gráficos do mesmo dado e comparar é o coração da aula.

Por fim, entra a organização. Não basta o gráfico ser bonito: ele precisa estar no lugar certo, sem cobrir a tabela, com tamanho adequado e alinhado. O aluno aprende a mover, redimensionar e posicionar os gráficos na planilha para que a página inteira fique limpa e profissional, preparando o terreno para a planilha final que será montada na nuvem nas próximas aulas.`,
  materiais: [
    `Computador para cada aluno com navegador (Chrome) e o Google Planilhas aberto na conta da escola`,
    `Projetor ou TV para o professor demonstrar cada clique do editor de gráficos na tela grande`,
    `Uma planilha de exemplo já preenchida com dados de aulas anteriores (ex.: "Lanches mais vendidos da cantina" ou "Jogos favoritos da turma") e um gráfico básico já criado`,
    `Conta Google da escola ativa para cada aluno, com a planilha salva no Drive`,
    `Lista de cores sugeridas (códigos prontos) projetada, para os alunos que travarem na escolha`,
    `Folha impressa de uma página com a imagem do editor de gráficos e suas duas abas ("Configurar" e "Personalizar") marcadas`,
  ],
  conceitosChave: [
    `Editor de gráficos — painel que abre no lado direito ao dar dois cliques no gráfico; é onde se ajusta tudo no Google Planilhas.`,
    `Aba Personalizar — segunda aba do editor de gráficos, onde ficam título, cores, legenda e rótulos de dados.`,
    `Série de dados — cada conjunto de valores representado no gráfico (por exemplo, as colunas de "Vendas"); cada série pode ter sua própria cor.`,
    `Legenda — pequena caixa que explica o que cada cor do gráfico significa; pode ser movida para cima, baixo, lados ou ocultada.`,
    `Rótulo de dados — número que aparece em cima de cada barra, coluna ou fatia, mostrando o valor exato sem precisar olhar a tabela.`,
    `Título do gráfico — texto principal no topo do gráfico; deve dizer em poucas palavras o que o gráfico está mostrando.`,
    `Tipo de gráfico — formato escolhido (colunas, barras, linha, pizza); cada um comunica melhor um tipo de informação.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra uma planilha com dados simples (duas colunas: um nome e um número, como "Lanche" e "Quantidade vendida") e crie um gráfico básico em "Inserir" e depois "Gráfico". Treine o gesto mais importante da aula: dar dois cliques em cima do gráfico para abrir o editor de gráficos no lado direito. Se você clicar uma vez só, aparecem os três pontinhos no canto do gráfico; clique neles e escolha "Editar o gráfico" para chegar ao mesmo lugar.

No editor, localize as duas abas no topo: "Configurar" e "Personalizar". Na aba "Personalizar", abra cada seção clicando na setinha: "Estilo do gráfico", "Títulos do gráfico e dos eixos", "Série", "Legenda". É na seção "Série" que se troca a cor e se liga a caixa "Rótulos de dados". Faça esse caminho uma vez sozinho para não procurar na frente da turma.

## Passo a passo da aula

10 min — Aquecimento. Projete dois gráficos do MESMO dado: um cinza, sem título e sem números; outro colorido, com título claro e rótulos. Pergunte: "Qual vocês entenderiam mais rápido?" Deixe a turma perceber sozinha que o segundo comunica melhor. Anuncie: "Hoje a gente transforma o primeiro no segundo."

15 min — Conteúdo novo guiado. No projetor, dê dois cliques no gráfico para abrir o editor. Vá em "Personalizar". 1. Em "Títulos do gráfico e dos eixos", troque o título por algo claro, como "Lanches mais vendidos da semana". 2. Em "Série", clique na bolinha de cor e escolha uma cor nova; depois marque a caixa "Rótulos de dados" e mostre os números aparecendo nas barras. 3. Em "Legenda", mude a posição para "Baixo" e mostre como ela some ao escolher "Nenhuma". Faça devagar, narrando cada clique.

25 min — Mão na massa. Cada aluno abre a própria planilha e personaliza seu gráfico: troca o título, escolhe ao menos uma cor, liga os rótulos de dados e ajusta a legenda. Em seguida, cria um SEGUNDO gráfico do mesmo dado com outro tipo (quem usou colunas faz uma pizza, por exemplo) em "Inserir" e "Gráfico", trocando o tipo na aba "Configurar". Circule garantindo que ninguém ficou preso no dois cliques.

10 min — Desafio e compartilhar. Cada aluno posiciona os dois gráficos lado a lado, sem cobrir a tabela, arrastando pela borda para mover e pelos cantos para redimensionar. Em roda rápida, dois ou três alunos mostram seus pares de gráficos e dizem qual comunica melhor e por quê.

## Como explicar de forma clara

Compare o gráfico padrão com uma camiseta branca lisa: serve, mas não tem graça. Personalizar é estampar a camiseta. O título é o nome da estampa; a cor é o estilo; os rótulos de dados são as etiquetas com o preço, para ninguém ter que perguntar.

Para a escolha do tipo de gráfico, use exemplos do dia a dia deles: pizza para "quanto cada um comeu da pizza inteira" (partes de um todo), colunas para "quem ganhou mais figurinhas" (comparar) e linha para "minha nota subiu ou caiu nas provas" (tempo). Repita: o melhor gráfico é o que faz o olho entender sem esforço.

## Erros comuns e como ajudar

O erro mais comum é não conseguir abrir o editor: o aluno clica uma vez e nada acontece. Ensine o dois cliques ou o caminho pelos três pontinhos e "Editar o gráfico". O segundo erro é procurar cor e rótulos na aba errada; lembre que tudo de aparência fica em "Personalizar", nunca em "Configurar". O terceiro é mudar a cor de todas as séries de uma vez sem perceber; mostre que primeiro se escolhe a série no menu suspenso e só depois a cor. O quarto é escrever um título vago como "Gráfico 1"; peça sempre um título que responda "o que estou mostrando?". O quinto é o gráfico ficar por cima da tabela; mostre que se arrasta pela borda (mãozinha) para mover e pelos quadradinhos dos cantos para mudar o tamanho.`,
  exercicios: [
    {
      titulo: `Abrindo o editor e trocando o título`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `O foco é o gesto de abrir o editor de gráficos. Caminhe pela sala conferindo quem consegue dar dois cliques e chegar na aba "Personalizar". Quem não conseguir, ensine o caminho dos três pontinhos e "Editar o gráfico". Reforce que o título precisa explicar o conteúdo.`,
      atividade: `Abra sua planilha com o gráfico básico. Dê dois cliques em cima do gráfico para abrir o editor à direita. Clique na aba "Personalizar", abra "Títulos do gráfico e dos eixos" e troque o título por uma frase clara que diga o que o gráfico mostra (ex.: "Lanches mais vendidos da semana").`,
      gabarito: `O aluno tem o editor aberto na aba "Personalizar" e um gráfico com um título novo e descritivo, que responde "o que este gráfico mostra?". Títulos vagos como "Gráfico 1" ou "Sem título" não valem; o texto deve citar o assunto dos dados.`,
    },
    {
      titulo: `Cores e rótulos de dados`,
      tipo: `Desafio individual`,
      tempo: `10 min`,
      guiaProfessor: `Mostre primeiro no projetor a seção "Série" e a caixa "Rótulos de dados". O erro clássico é ligar os rótulos pela seção errada; aponte que tudo fica em "Série", dentro de "Personalizar". Tenha a lista de cores sugeridas projetada para quem travar na escolha.`,
      atividade: `1. No editor, abra a seção "Série". 2. Clique na bolinha de cor e escolha uma cor nova para as barras. 3. Marque a caixa "Rótulos de dados" e confira os números aparecendo em cima de cada barra. 4. Mostre o resultado ao professor.`,
      gabarito: `O gráfico do aluno tem uma cor diferente da cinza padrão e exibe os rótulos de dados (o número exato em cima de cada barra ou fatia). Ao olhar o gráfico, é possível ler os valores sem consultar a tabela.`,
    },
    {
      titulo: `Qual gráfico comunica melhor?`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza a discussão projetando o mesmo dado em colunas, em pizza e em linha. Faça a turma decidir caso a caso. Corrija na hora confusões comuns, como usar pizza com muitos itens (fica ilegível) ou linha para dados que não são de tempo.`,
      atividade: `Em roda, respondam juntos: (a) Para mostrar quanto cada lanche representa do total vendido, qual tipo é melhor? (b) Para comparar quem vendeu mais entre cinco lanches, qual tipo é melhor? (c) Para mostrar como as vendas subiram a cada dia da semana, qual tipo é melhor? Cada aluno justifica uma resposta.`,
      gabarito: `Respostas esperadas: (a) pizza, porque mostra partes de um todo (fatias de 100%). (b) colunas ou barras, porque servem para comparar quantidades lado a lado. (c) linha, porque mostra evolução ao longo do tempo. A justificativa deve ligar o tipo de gráfico ao tipo de informação.`,
    },
    {
      titulo: `Dois gráficos do mesmo dado`,
      tipo: `Atividade em dupla`,
      tempo: `15 min`,
      guiaProfessor: `Forme duplas. Cada aluno cria um segundo gráfico do mesmo conjunto de dados com um tipo diferente do primeiro (em "Inserir" e "Gráfico", trocando o tipo na aba "Configurar"). Depois, em dupla, comparam e decidem qual comunica melhor. Verifique que os dois gráficos usam os mesmos dados.`,
      atividade: `Com o seu par: 1. Cada um cria um SEGUNDO gráfico do mesmo dado, escolhendo um tipo diferente do primeiro (se usou colunas, faça pizza ou linha). 2. Personalizem o novo gráfico com título e cores. 3. Comparem os dois gráficos de cada um e escolham juntos qual comunica melhor a informação. 4. Anotem em uma frase por que aquele venceu.`,
      gabarito: `Cada aluno tem dois gráficos do mesmo conjunto de dados, em tipos diferentes, ambos com título e cor. A dupla aponta um gráfico vencedor e justifica com base na clareza (ex.: "a pizza venceu porque mostra rápido a fatia de cada lanche" ou "as colunas venceram porque é fácil ver quem vendeu mais").`,
    },
    {
      titulo: `Organizando a página`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Este é o fechamento. Cada aluno posiciona os dois gráficos personalizados de forma organizada na planilha, sem cobrir a tabela. Mostre que se arrasta pela borda para mover e pelos quadradinhos dos cantos para redimensionar. O resultado deve parecer um painel limpo e pronto para apresentar.`,
      atividade: `1. Mova seus dois gráficos para que fiquem lado a lado ou um abaixo do outro, sem cobrir a tabela de dados. 2. Ajuste o tamanho deles pelos cantos para que fiquem parecidos e legíveis. 3. Confira se ambos têm título claro, cores e rótulos de dados. 4. Mostre ao professor a página inteira organizada, como se fosse entregar um relatório.`,
      gabarito: `A planilha do aluno mostra a tabela de dados visível e dois gráficos personalizados (com título, cor e rótulos), posicionados sem se sobrepor à tabela nem um ao outro, com tamanhos parecidos e legíveis. O conjunto parece um painel organizado e pronto para apresentar.`,
    },
  ],
};
