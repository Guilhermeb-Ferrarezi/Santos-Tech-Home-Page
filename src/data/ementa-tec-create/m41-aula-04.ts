import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Modelando com Baixa Poligonagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Finalizar a forma do asset no Blender aplicando o conceito de low-poly, limpando a geometria e usando o Claude para conferir se a contagem de polígonos está adequada para rodar leve no Unity.`,
  descricao: `Nesta aula o aluno dá um passo importante na trilha de Blender deste mês: ele aprende a detalhar o modelo sem deixá-lo pesado. Na Aula 3 cada aluno saiu da ideia para um bloco 3D, ou seja, montou a forma geral do objeto a partir de cubos, cilindros e esferas. Agora chegou a hora de refinar essa forma e, ao mesmo tempo, manter o número de polígonos baixo. Esse equilíbrio é o coração da modelagem low-poly, o estilo que faz os jogos rodarem rápido até em computadores e óculos de VR mais simples.

Polígono é cada pequena face plana que forma a superfície de um modelo 3D. Quanto mais polígonos, mais detalhe, mas também mais trabalho para o computador desenhar a cena. Um jogo precisa desenhar a tela muitas vezes por segundo, então cada polígono a mais pesa. A ideia de low-poly é simples: usar poucos polígonos bem colocados para sugerir a forma, deixando o material e a textura cuidarem dos detalhes finos depois. É como um desenho feito com poucas linhas firmes em vez de mil rabiscos.

Durante a aula o aluno vai terminar a silhueta do seu asset, remover geometria que não serve para nada e juntar pontos soltos que sobraram da modelagem. Essa faxina na malha é chamada de limpeza de geometria. Vamos olhar a contagem de vértices, arestas e faces direto na tela do Blender, ativando as estatísticas, e aprender a ler esses números com calma.

No fim, o aluno usa o Claude como assistente: descreve o tipo de objeto e a contagem atual de polígonos e pede uma opinião sobre se está adequado para o Unity. O Claude não modela por ele; ele ajuda a pensar, sugere onde cortar e explica por que um número alto pode atrapalhar. Tudo isso prepara o terreno para a Aula 5, quando entram os materiais. O foco do mês continua firme: assets prontos para o Unity, leves e bem feitos.`,
  materiais: [
    `Computadores com o Blender instalado e atualizado (um por aluno), com mouse de scroll`,
    `Projetor ou TV para o professor demonstrar os passos do Blender em tela grande`,
    `Arquivo de exemplo .blend com o bloco 3D da Aula 3 já montado (um objeto simples, como uma caixa, um barril ou uma arma estilizada)`,
    `Acesso ao Claude (navegador aberto) para a revisão da contagem de polígonos no fim da aula`,
    `Folha impressa ou slide com a tabela de referência de polígonos (objeto pequeno, médio e grande) para consulta`,
    `Óculos de VR opcionais para lembrar a turma de que o modelo pode rodar em VR e precisa ser bem leve`,
  ],
  conceitosChave: [
    `Polígono — cada face plana que forma a superfície de um modelo 3D; o jogo desenha cada uma, então quanto mais, mais pesado.`,
    `Low-poly — estilo de modelagem que usa poucos polígonos bem posicionados para a forma rodar leve no jogo.`,
    `Vértice — o ponto onde as arestas se encontram; é o "cantinho" da malha que podemos mover, juntar ou apagar.`,
    `Aresta (edge) — a linha que liga dois vértices; várias arestas juntas formam as faces.`,
    `Topologia — a maneira como vértices, arestas e faces estão organizados; uma boa topologia é limpa e fácil de animar.`,
    `Limpeza de geometria — remover faces inúteis e juntar vértices duplicados para a malha ficar enxuta e correta.`,
    `Merge by Distance — comando do Blender que junta automaticamente vértices muito próximos, eliminando pontos duplicados.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser modelador profissional. Precisa entender uma ideia central: no jogo, cada polígono custa desempenho, então low-poly significa usar poucos polígonos bem colocados. Guarde três comandos do Blender que resolvem quase tudo nesta aula. Primeiro, a contagem de polígonos: ative em Edit, depois Preferences, aba Interface, e marque "Statistics"; ou clique no menu de sobreposições (Overlays, o ícone de dois círculos no topo da janela 3D) e ligue "Statistics". Os números de vértices, arestas e faces aparecem no canto. Segundo, o Merge by Distance, que junta vértices grudados. Terceiro, apagar faces e vértices com a tecla X no Modo de Edição. Antes da aula, abra um cubo, entre no Modo de Edição com a tecla Tab, selecione tudo com a tecla A e teste o Merge by Distance uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão. Mostre na tela grande dois modelos do mesmo objeto: um com 200 faces e outro com 20 mil faces. Pergunte qual roda melhor no jogo. Conduza a turma até a resposta: o leve. Relembre que na Aula 3 eles montaram o bloco 3D e que hoje vão refinar a forma sem deixar pesado.

15 min, conteúdo novo guiado. No Blender, com o objeto selecionado, entre no Modo de Edição apertando a tecla Tab. Ligue as estatísticas pelo menu Overlays e mostre o número de faces. Agora selecione tudo apertando a tecla A. Vá no menu superior do Modo de Edição em "Mesh", depois "Clean Up" e clique em "Merge by Distance"; mostre os vértices duplicados sumindo e a contagem de vértices baixar. Em seguida, ensine a apagar uma face inútil: clique numa face no modo de seleção de faces (tecla 3), aperte a tecla X e escolha "Faces". Por fim, mostre como deletar arestas extras: tecla 2 para modo de arestas, selecione a aresta, tecla X, escolha "Dissolve Edges" para apagar sem deixar buraco. Esses são os comandos da faxina.

25 min, mão na massa. Cada aluno termina a silhueta do próprio asset e faz a limpeza: aplica Merge by Distance em tudo, apaga faces escondidas que ninguém vai ver (como o fundo de uma caixa) e remove arestas que não ajudam na forma. Peça que anotem a contagem de faces antes e depois. Circule pela sala conferindo se entraram no Modo de Edição (tecla Tab) e se a malha continua fechada, sem buracos. Estimule cortes conscientes: detalhe fino fica para a textura na Aula 6.

10 min, desafio e compartilhar. Cada aluno abre o Claude e cola uma mensagem de revisão. Sugira este texto exato para o aluno enviar: "Estou modelando um (tipo do objeto) low-poly para o Unity. Ele tem (numero) faces. Esse total esta adequado para um asset de jogo leve? Onde posso cortar polígonos sem perder a forma?" O aluno lê a resposta, escolhe uma sugestão e a aplica. Depois, em uma frase, conta para o colega quantos polígonos economizou.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga: "Polígono é como ladrilho de uma parede. Com poucos ladrilhos grandes você cobre rápido; com mil ladrilhos minúsculos, demora e pesa." Para low-poly: "É desenhar com poucos traços firmes, sem rabiscar." Para limpeza de geometria: "É varrer a sujeira que ficou depois de montar o móvel: pontos soltos e tampas que ninguém vê." Sobre o Claude: "Ele é seu revisor, não o seu lápis. Você modela; ele dá ideias de onde economizar." Sempre conecte com o jogo do aluno: "Seu asset precisa rodar leve, talvez até no óculos de VR."

## Erros comuns e como ajudar

O erro mais comum é o aluno apagar com a tecla X e escolher a opção errada, abrindo um buraco na malha. Ensine a diferença: "Faces" some com a face, "Dissolve Edges" tira a aresta mantendo a superfície fechada. Outro erro é querer detalhe demais e estourar a contagem; lembre que detalhe fino é trabalho da textura. Muitos esquecem de entrar no Modo de Edição (tecla Tab) e tentam editar no Modo Objeto sem sucesso; confira o canto superior esquerdo. Tem aluno que aplica Merge by Distance com distância alta e funde vértices que deveriam ficar separados, deformando a forma; oriente a deixar o valor pequeno, o padrão. Por fim, alguns esperam que o Claude modele por eles; reforce que ele só sugere, e que a decisão final é do aluno.`,
  exercicios: [
    {
      titulo: `Lendo os números: ative as estatísticas`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o próprio arquivo da Aula 3 e entre no Modo de Edição com a tecla Tab. Mostre o menu Overlays (ícone de dois círculos no topo da janela 3D) e a opção Statistics.`,
      atividade: `Abra seu modelo da Aula 3. Entre no Modo de Edição (tecla Tab) e ligue as estatísticas pelo menu Overlays. Anote em uma folha quantos vértices e quantas faces o seu modelo tem agora.`,
      gabarito: `O aluno deve mostrar os números de vértices e faces aparecendo no canto da janela 3D. Caminho correto: tecla Tab para entrar no Modo de Edição, clicar no ícone Overlays (dois círculos sobrepostos) e marcar "Statistics". O número anotado é o ponto de partida que será comparado depois da limpeza. Se nada aparecer, o aluno provavelmente está no Modo Objeto ou não marcou Statistics.`,
    },
    {
      titulo: `Faxina rápida: Merge by Distance`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Reforce que primeiro é preciso selecionar tudo com a tecla A. Mostre o caminho do menu Mesh, Clean Up, Merge by Distance. Avise para deixar o valor de distância pequeno (o padrão).`,
      atividade: `No seu modelo, selecione toda a malha com a tecla A. Aplique o comando Merge by Distance pelo menu Mesh, Clean Up. Observe a contagem de vértices antes e depois e diga ao professor quantos vértices foram juntados.`,
      gabarito: `Caminho correto: tecla A para selecionar tudo, menu "Mesh", "Clean Up", "Merge by Distance". A contagem de vértices deve cair (ou ficar igual, se não houver duplicados). O Blender mostra uma mensagem do tipo "Removed X vértices". Resposta esperada: o aluno informa a diferença entre o número de vértices de antes e o de depois. Se a forma deformar, a distância estava alta demais e deve voltar ao valor padrão.`,
    },
    {
      titulo: `Apagar com cuidado: face ou aresta?`,
      tipo: `desafio`,
      tempo: `11 minutos`,
      guiaProfessor: `Explique a diferença entre apagar "Faces" (abre buraco) e "Dissolve Edges" (mantém fechado). Peça que apaguem só geometria escondida ou inútil. Confira se a malha continua sem buracos.`,
      atividade: `Encontre no seu modelo uma face escondida que ninguém vai ver no jogo (por exemplo, o fundo do objeto) e apague-a com a tecla X, opção Faces. Depois encontre uma aresta extra que não ajuda na forma e remova-a com a tecla X, opção Dissolve Edges. Compare: o que aconteceu com a malha em cada caso?`,
      gabarito: `Ao apagar a face escondida com X e "Faces", surge um buraco onde a face estava, o que é aceitável quando ninguém verá aquele lado no jogo. Ao usar X e "Dissolve Edges" na aresta, a aresta some mas a superfície continua fechada, sem buraco. Resposta esperada: "Apagar Faces deixa buraco; Dissolve Edges tira a linha mas mantém a superfície." Esse é o critério para escolher cada opção: use Dissolve Edges para limpar topologia sem furar o modelo.`,
    },
    {
      titulo: `Revisão com o Claude: meu modelo está leve?`,
      tipo: `pesquisa com assistente de IA`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o texto sugerido na tela grande. Reforce que o Claude é revisor, não modelador: ele sugere, o aluno decide. Peça que apliquem pelo menos uma sugestão depois de ler a resposta.`,
      atividade: `Abra o Claude e envie esta mensagem, trocando os dados pelos do seu modelo: "Estou modelando um (tipo do objeto) low-poly para o Unity. Ele tem (numero) faces. Esse total esta adequado para um asset de jogo leve? Onde posso cortar polígonos sem perder a forma?" Leia a resposta, escolha uma sugestão e aplique no Blender.`,
      gabarito: `O aluno deve apresentar a conversa com o Claude e o modelo já ajustado com pelo menos uma sugestão aplicada. Uma boa mensagem do aluno contém o tipo do objeto e o número exato de faces. Uma boa resposta do Claude comenta se o total é alto, médio ou baixo para a categoria do objeto e aponta áreas para reduzir (por exemplo, faces escondidas, arredondamentos exagerados, partes que a textura pode resolver). O critério de acerto é o aluno saber justificar a mudança que fez: "O Claude disse que 5 mil faces era muito para uma caixa, então removi o fundo e os detalhes pequenos e cheguei a 800 faces."`,
    },
    {
      titulo: `Mini projeto: asset low-poly limpo e pronto`,
      tipo: `projeto curto`,
      tempo: `16 minutos`,
      guiaProfessor: `Este é o fechamento da aula. Cada aluno deve entregar o asset com a forma finalizada, a malha limpa e a contagem dentro de um alvo razoável para o objeto. Use a tabela de referência de polígonos. Lembre de salvar o arquivo com o nome do aluno.`,
      atividade: `Finalize a forma do seu asset, faça a limpeza completa (Merge by Distance, apagar faces escondidas e dissolver arestas inúteis) e deixe a contagem de polígonos adequada para um objeto leve de jogo. Anote a contagem final e salve o arquivo .blend com o seu nome para usar na Aula 5.`,
      gabarito: `O entregável correto é um arquivo .blend salvo com o nome do aluno, contendo um modelo com a silhueta finalizada, malha fechada sem buracos indevidos e contagem de faces reduzida em relação ao início. Como referência geral para esta idade e tipo de jogo: objeto pequeno (moeda, chave) até cerca de 300 faces; objeto médio (caixa, barril, arma simples) entre cerca de 300 e 1500 faces; objeto grande ou detalhado entre cerca de 1500 e 5000 faces. O aluno deve mostrar a contagem de antes e de depois e explicar uma limpeza que fez. Sinal de acerto: a forma continua reconhecível, a malha está limpa e o número de faces caiu, ficando dentro ou perto do alvo da categoria.`,
    },
  ],
};
