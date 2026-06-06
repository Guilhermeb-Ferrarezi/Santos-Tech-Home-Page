import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando para a Impressora",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Verificar e corrigir o modelo 3D no Blender para que ele fique imprimível: malha fechada, com espessura adequada e na escala correta em milímetros.`,
  descricao: `Modelar no computador é uma coisa; transformar esse modelo em um objeto físico de plástico é outra bem diferente. A impressora 3D não enxerga o modelo como nós vemos na tela: ela precisa que a superfície do objeto seja uma casca totalmente fechada, sem nenhum buraco, para saber o que é "dentro" e o que é "fora". Nesta aula o aluno aprende que um modelo bonito na tela pode ser impossível de imprimir, e descobre como caçar e consertar os problemas antes de mandar para a máquina.

São três coisas que tornam um modelo imprimível, e é nelas que vamos focar. A primeira é a malha fechada (também chamada de manifold ou estanque): nenhum vazamento, nenhuma face faltando, nenhuma borda solta. A segunda é a espessura: paredes muito finas simplesmente não imprimem ou quebram na hora de soltar da mesa. A terceira é a escala correta em milímetros: o Blender por padrão pensa em metros, então um modelo que parece grande na tela pode sair do tamanho de uma formiga ou de um carro se a escala estiver errada.

A boa notícia é que o Blender tem ferramentas prontas para checar tudo isso. O add-on 3D-Print Toolbox faz uma varredura no modelo e aponta exatamente onde estão os buracos, as bordas problemáticas e as paredes finas, com botões que selecionam esses pontos para o aluno enxergar. Nesta aula o professor mostra como ligar esse add-on, rodar a checagem, ler o relatório e usar as ferramentas de correção. O aluno sai entendendo que "preparar para imprimir" é uma etapa de qualidade tão importante quanto modelar.

Esta é a penúltima aula do mês. O modelo que o aluno vem construindo ao longo das semanas finalmente passa pela revisão técnica. Na próxima aula, com o modelo já aprovado, ele será exportado e ficará pronto de verdade para a impressora. Por isso o foco aqui é deixar a malha limpa e saudável, sem pressa de exportar ainda.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos na tela grande`,
    `O modelo 3D que cada aluno vem desenvolvendo nas aulas anteriores (arquivo .blend salvo)`,
    `Arquivo de exemplo preparado pelo professor com problemas propositais (um buraco na malha e uma parede fina) para a turma praticar a correção`,
    `Régua ou objeto pequeno de referência (uma borracha, uma moeda) para conversar sobre tamanho real em milímetros`,
    `Impressora 3D da sala ligada e visível, apenas para mostrar a máquina que vai receber o trabalho (sem imprimir ainda)`,
  ],
  conceitosChave: [
    `Malha fechada (manifold) — superfície totalmente vedada, sem buracos, em que a impressora distingue o interior do exterior do objeto.`,
    `Buraco na malha — face que está faltando, deixando um vazamento na casca do modelo; a impressora não sabe preencher esse vão.`,
    `Espessura de parede — quão grossa é a casca do objeto; paredes muito finas não imprimem direito e quebram com facilidade.`,
    `Escala em milímetros — o tamanho real que o objeto terá ao sair da impressora; precisa ser definido em mm e não em metros.`,
    `Normais — a direção para a qual cada face "aponta"; quando invertidas, a impressora se confunde sobre o que é dentro e fora.`,
    `3D-Print Toolbox — add-on do Blender que verifica o modelo e aponta buracos, paredes finas e outros problemas de impressão.`,
    `Non-manifold — bordas ou pontos com geometria inválida (faces soltas, arestas compartilhadas errado) que travam a impressão.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. Basta dominar uma ideia central: a impressora exige uma casca fechada, com espessura suficiente, no tamanho certo em milímetros. Tudo o que vamos fazer no Blender serve para garantir essas três coisas. A ferramenta principal é o add-on 3D-Print Toolbox, que já vem com o Blender e só precisa ser ligado. Antes da aula, abra o arquivo de exemplo que você preparou (com um buraco e uma parede fina de propósito) e rode a checagem uma vez para ganhar confiança. Lembre os alunos de que problemas são normais e que caçá-los é parte do trabalho profissional.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome o que é uma malha. Pergunte: "se o nosso modelo tem um buraco, o que a impressora faz?". Mostre na tela grande o arquivo de exemplo girando e provoque: "aqui tem um problema escondido, quem acha?". Isso desperta o olhar de detetive.

Conteúdo novo guiado (15 min): primeiro ligue o add-on. Vá em Edit > Preferences > Add-ons, digite "3D-Print" na busca e marque a caixinha do 3D-Print Toolbox. Feche as preferências. Na barra lateral direita da viewport, aperte a tecla N e abra a aba "3D-Print". Com o objeto selecionado, clique em "Check All": o painel mostra um relatório (buracos, non-manifold, paredes finas). Explique cada linha devagar. Mostre que ao clicar nos botões de checagem o Blender seleciona os pontos com defeito. Em seguida demonstre o conserto: entre no Modo de Edição (Tab), selecione tudo com a tecla A, e use Mesh > Clean Up > Make Manifold (ou os botões da seção Clean Up do toolbox) para fechar buracos. Fale também da escala: abra a seção "Scale" do toolbox e confira as dimensões; se necessário, ajuste com a tecla N na aba "Item" definindo as dimensões em milímetros.

Mão na massa (25 min): cada aluno abre o próprio modelo, aperta N, vai na aba 3D-Print e clica em "Check All". Eles anotam quantos problemas apareceram e tentam corrigir com as ferramentas de Clean Up. Circule pela sala. Peça que rodem o "Check All" de novo depois de cada correção para ver o número de problemas diminuir. Quem terminar confere a escala em milímetros.

Desafio e compartilhar (10 min): cada aluno mostra o relatório antes e depois e conta um problema que consertou. Comemore as malhas que ficaram "limpas".

## Como explicar de forma clara

Use a imagem do balão ou da garrafa de água: se tiver um furo, vaza. A impressora precisa de um objeto que "segura água" por dentro, sem vazamentos. Para espessura, compare com uma folha de papel: fina demais, rasga; uma parede de Lego é firme. Para escala, diga que o Blender pensa em metros como se fôssemos gigantes, e a gente precisa avisar que o brinquedo tem poucos centímetros. Chame a checagem de "exame médico do modelo": o Check All é o raio-x que mostra onde dói.

## Erros comuns e como ajudar

O erro mais frequente é o aluno não achar a aba do add-on: confira se ligaram o 3D-Print Toolbox nas Preferences e se apertaram a tecla N na viewport. Outro problema é querer consertar tudo de uma vez sem selecionar a malha no Modo de Edição; lembre de apertar Tab e a tecla A antes de usar Clean Up. Muitos esquecem de rodar o Check All de novo depois de corrigir e acham que nada mudou. Alguns ficam assustados com o tamanho em metros; mostre que basta digitar o valor em mm no painel Item. Por fim, evite que tentem exportar agora: isso é assunto da próxima aula. O foco de hoje é só deixar a malha saudável.`,
  exercicios: [
    {
      titulo: `Ligando o exame: rodando o Check All`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos ligaram o add-on 3D-Print Toolbox em Edit > Preferences > Add-ons antes de começar. Caminhe pela sala confirmando que cada tela mostra a aba "3D-Print" depois de apertar a tecla N.`,
      atividade: `Abra o arquivo de exemplo. Aperte a tecla N, abra a aba "3D-Print", selecione o objeto e clique em "Check All". Anote no caderno quantos problemas o relatório apontou e quais tipos apareceram.`,
      gabarito: `O aluno deve conseguir abrir a aba e gerar o relatório. O esperado é encontrar pelo menos dois tipos de problema no arquivo de exemplo: bordas non-manifold (o buraco) e paredes finas (thin faces). O número exato depende do arquivo, mas o aluno deve listar ao menos esses dois tipos.`,
    },
    {
      titulo: `Caçando o buraco`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre que clicar no botão de checagem (por exemplo "Non Manifold Edges") seleciona os pontos com defeito. Ajude quem não consegue enxergar a seleção a entrar no Modo de Edição com Tab para ver as arestas destacadas.`,
      atividade: `No arquivo de exemplo, use o botão de checagem do toolbox para selecionar as bordas com problema. Entre no Modo de Edição (Tab) e descreva onde está o buraco da malha: em que parte do objeto ele fica?`,
      gabarito: `O aluno localiza visualmente a região com a face faltando. A resposta correta aponta o local exato do buraco que você inseriu no arquivo (por exemplo, "na base do objeto" ou "embaixo, onde falta uma face"). O importante é que ele relacione a borda destacada ao vazamento na casca.`,
    },
    {
      titulo: `Consertando a malha em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas onde um aluno opera e o outro confere o relatório. Reforce a sequência: Tab para entrar no Modo de Edição, tecla A para selecionar tudo, depois Mesh > Clean Up > Make Manifold. Lembre de rodar o Check All de novo para confirmar.`,
      atividade: `Em dupla, fechem o buraco do arquivo de exemplo usando Mesh > Clean Up > Make Manifold no Modo de Edição. Depois rodem o "Check All" outra vez e comparem o relatório antes e depois.`,
      gabarito: `Depois do conserto, o relatório deve mostrar zero (ou bem menos) bordas non-manifold do que antes. A dupla precisa apresentar os dois relatórios e explicar que o número de buracos diminuiu porque a malha foi fechada. Se ainda restarem problemas, devem identificar quais.`,
    },
    {
      titulo: `Roda de conversa: por que a escala importa?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a conversa com a régua ou um objeto pequeno na mão. Mostre as dimensões do modelo no painel Item (tecla N) e pergunte que tamanho real aquilo teria. Conecte com a ideia de que o Blender pensa em metros.`,
      atividade: `Em roda, discutam: o que aconteceria se mandássemos para a impressora um modelo com 2 metros de altura por engano? E se estivesse com 2 milímetros? Olhem juntos as dimensões do modelo no painel Item e digam qual tamanho em milímetros seria bom para o objeto de vocês.`,
      gabarito: `Respostas esperadas: com 2 metros, não cabe na impressora (ou viraria um custo absurdo de material); com 2 milímetros, sairia minúsculo e frágil. Um tamanho razoável costuma ficar entre 30 e 80 mm para um objeto de mesa. O aluno deve demonstrar que entende que a escala em mm define o tamanho físico real da peça.`,
    },
    {
      titulo: `Laudo de impressão do meu modelo`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Cada aluno trabalha no próprio arquivo .blend. Oriente a corrigir o que conseguir e a registrar o resto. Não deixe ninguém exportar agora; o foco é deixar a malha saudável para a próxima aula. Valorize quem chegou a zero problema.`,
      atividade: `Abra o seu próprio modelo. Rode o "Check All", corrija os problemas que conseguir (buracos com Make Manifold, conferindo a escala em mm) e escreva um pequeno "laudo": quantos problemas havia, quantos você resolveu, e qual ficou para resolver depois.`,
      gabarito: `O laudo deve conter três informações: número de problemas iniciais, número resolvido e o que restou. Um bom resultado é a malha terminar sem bordas non-manifold e com a escala definida em milímetros (algo entre cerca de 30 e 80 mm). Se sobrou algum problema, o aluno deve nomeá-lo (por exemplo, "ainda há uma parede fina"). Nenhum laudo deve vir vazio: mesmo um modelo já correto rende o laudo "0 problemas encontrados, malha limpa e na escala certa".`,
    },
  ],
};
