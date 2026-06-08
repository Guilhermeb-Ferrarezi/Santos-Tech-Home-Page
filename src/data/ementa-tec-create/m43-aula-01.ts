import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Planejando o Cenário do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Planejar o cenário e os itens 3D que entrarão no jogo do Unity usando o Claude como assistente de produção e montar o blockout das formas básicas no Blender com primitivas.`,
  descricao: `Esta é a primeira aula do mês dedicado a aprofundar o 3D no Blender, e ela abre todo o ciclo de produção dos novos assets. Antes de modelar qualquer coisa bonita, todo estúdio profissional faz um planejamento: decide quais objetos existem na cena, como eles se relacionam em tamanho e onde ficam no espaço. Nesta aula o aluno não vai detalhar nada; ele vai pensar como diretor de arte e como artista técnico, definindo a lista de assets, as referências visuais e a escala, e em seguida bloqueando as formas no Blender com cubos, cilindros e esferas. Esse esboço tridimensional se chama blockout, e é o esqueleto sobre o qual o cenário inteiro será construído nas próximas semanas.

O aluno deste Ano 4 já passou pelos três anos anteriores da trilha e já conhece o Blender de meses passados. A novidade aqui é usar o Claude como parceiro de produção: pedir uma lista organizada de assets para um cenário, sugestões de referências visuais e uma tabela de escala em metros. O Claude ajuda a transformar uma ideia vaga ("uma sala de controle de nave") em um plano concreto, mas a decisão final e a execução continuam sendo do aluno. Essa é uma habilidade central do ano: dirigir a ferramenta de IA com clareza e julgar criticamente o que ela devolve.

O conceito mais importante da aula é a escala. Como esses assets vão para o Unity, eles precisam nascer no tamanho certo. No Blender, uma unidade equivale a um metro, e no Unity também. Se o aluno modelar uma cadeira com dois metros de altura, ela vai parecer um trono gigante dentro do jogo. Por isso o blockout já começa respeitando medidas reais: uma porta com cerca de dois metros, uma mesa com cerca de setenta e cinco centímetros de altura, um personagem de referência com cerca de um metro e oitenta. Trabalhar com uma escala correta desde o primeiro cubo evita retrabalho doloroso lá na frente.

Ao final da aula, cada aluno terá um documento de planejamento (a lista de assets com escala) e um arquivo .blend com o blockout do cenário montado só com primitivas posicionadas em tamanho aproximado. É um arquivo simples, quase abstrato, mas ele já comunica a ideia do espaço e serve de guia para a modelagem detalhada da Aula 2.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno`,
    `Acesso ao Claude (navegador) para gerar a lista de assets, referências e escala`,
    `Projetor ou TV para o professor mostrar o Blender e o Claude passo a passo`,
    `Mouse com três botões para cada aluno (a navegação 3D do Blender depende do botão do meio)`,
    `Arquivo .blend de exemplo com um blockout já pronto, para mostrar o resultado esperado`,
    `Folha ou documento digital com uma tabela de escala de referência (porta, mesa, cadeira, personagem)`,
    `Pasta compartilhada para os alunos salvarem o .blend e o documento de planejamento`,
  ],
  conceitosChave: [
    `Cenário — o ambiente 3D onde o jogo acontece; o conjunto de objetos que formam o espaço da cena.`,
    `Asset — cada peça de conteúdo do jogo (modelo, textura, som); aqui, cada objeto 3D do cenário.`,
    `Blockout — esboço tridimensional feito só com formas simples, sem detalhes, para definir espaço e proporção.`,
    `Primitiva — forma básica pronta do Blender, como cubo, cilindro, esfera e plano, usada como ponto de partida.`,
    `Escala — relação de tamanho entre os objetos; no Blender e no Unity, uma unidade equivale a um metro.`,
    `Referência visual — imagem usada como inspiração e guia para definir como o asset deve parecer.`,
    `Origem do objeto — o ponto que marca a posição e o centro de um objeto no espaço 3D.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula, porque hoje só usamos formas prontas. Antes da aula, abra o Blender uma vez e localize quatro áreas: a Viewport (a janela 3D central), o Outliner (a lista de objetos no canto superior direito), o painel de Propriedades (abaixo do Outliner) e a barra de ferramentas à esquerda da Viewport. Decore poucos atalhos: para adicionar uma forma use o menu Add no topo da Viewport (atalho Shift+A); para mover um objeto pressione G, para girar R e para escalar S; gire a câmera segurando o botão do meio do mouse e dê zoom com a roda. Tenha um arquivo de exemplo com um blockout pronto para projetar logo no início. No Claude, deixe uma conta aberta no navegador e teste um pedido simples antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete o blockout de exemplo e pergunte à turma o que cada caixa cinza representa. Explique que estúdios reais começam assim, com formas simples, antes de gastar tempo em detalhes. Relembre que esses assets vão para o jogo do Unity e que tamanho importa.

Conteúdo novo guiado (15 min): com o projetor ligado, abra o Claude e mostre como pedir o planejamento. Digite um pedido claro, por exemplo: Crie uma lista de 8 assets 3D para um cenario de sala de controle de nave espacial, com escala aproximada em metros para cada um e uma sugestao de referência visual. Leia a resposta com a turma e mostre como ajustar pedindo mais detalhe. Em seguida, abra o Blender e demonstre o blockout: apague o cubo inicial (clique nele e pressione X, depois confirme), adicione um plano grande para o chão (Add > Mesh > Plane) e escale com S digitando 10 e Enter. Adicione um cubo (Add > Mesh > Cube), mova com G e ajuste a altura no painel de transformação (tecla N abre a barra lateral com posição, rotação e escala em metros). Salve com Ctrl+S.

Mão na massa (25 min): cada aluno escolhe um tema de cenário, pede ao Claude a lista de assets com escala e cola esse plano no documento de planejamento. Depois monta o blockout no Blender posicionando de cinco a oito primitivas no tamanho aproximado da lista (Add > Mesh para cada forma, G para mover, S para escalar, painel N para conferir os metros). Circule pela sala garantindo que cada um salve o arquivo .blend e respeite a escala em metros.

## Como explicar de forma clara (linguagem para a idade)

Compare o blockout com a planta de uma casa antes da construção: ninguém pinta a parede antes de saber onde ela fica. Diga que as primitivas são como peças de LEGO grandes que marcam o lugar das coisas. Para a escala, use o corpo como medida: uma porta tem mais ou menos a altura de duas pessoas empilhadas, uma mesa bate na cintura. Sobre o Claude, explique que ele é um assistente de produção: você manda um pedido bem feito e ele devolve um rascunho, mas quem decide é o aluno.

## Erros comuns e como ajudar

O erro mais comum é ignorar a escala e criar objetos gigantes ou minúsculos; ensine a abrir o painel N e conferir as dimensões em metros sempre. Outro erro é querer detalhar logo, arredondando cantos e adicionando peças; segure isso, hoje é só caixa. Muitos esquecem de salvar; peça Ctrl+S a cada poucos minutos. Na navegação 3D, quem usa touchpad se perde; oriente o uso do mouse com botão do meio. No Claude, pedidos vagos geram listas ruins; mostre como descrever tema, quantidade e a necessidade de escala em metros no próprio pedido.`,
  exercicios: [
    {
      titulo: `Pedindo a lista de assets ao Claude`,
      tipo: `prática com IA`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza com o projetor mostrando um pedido modelo. Garanta que cada aluno inclua tema, quantidade e escala em metros no próprio pedido antes de aceitar a resposta.`,
      atividade: `Escolha um tema de cenário e peça ao Claude uma lista de 6 a 8 assets 3D com a escala aproximada de cada um em metros e uma referência visual para cada item. Cole a resposta no seu documento de planejamento.`,
      gabarito: `Exemplo de pedido eficaz: Crie uma lista de 8 assets 3D para um cenario de oficina mecanica, com escala aproximada em metros e uma sugestao de referência visual para cada item. O documento deve conter de 6 a 8 itens, cada um com nome, escala em metros e referência.`,
    },
    {
      titulo: `Preparando a cena para o blockout`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o caminho no projetor e espere todos chegarem ao chão criado. Reforce que escalar o plano define o tamanho do terreno em metros.`,
      atividade: `No Blender, apague o cubo inicial (clique nele e pressione X, depois confirme). Adicione um plano em Add > Mesh > Plane para ser o chão e escale-o pressionando S, digitando 10 e Enter. Salve com Ctrl+S.`,
      gabarito: `Passos: selecionar o cubo padrão e apagar com X; Add > Mesh > Plane; com o plano selecionado, S depois 10 depois Enter (chão de cerca de 20 metros, pois o plano padrão tem 2 metros de lado). Arquivo salvo com Ctrl+S.`,
    },
    {
      titulo: `Conferindo a escala no painel N`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria a primitiva e ajusta a dimensão; o outro confere os valores no painel N. Depois trocam. Reforce que uma unidade equivale a um metro.`,
      atividade: `Adicione um cubo (Add > Mesh > Cube), abra a barra lateral com a tecla N e ajuste as Dimensions para representar uma porta: cerca de 1 metro de largura, 0.1 de profundidade e 2 metros de altura. O colega confere os valores.`,
      gabarito: `Com o cubo selecionado, pressionar N abre a barra com Item, Transform e Dimensions. A porta correta fica próxima de X igual a 1, Y igual a 0.1 e Z igual a 2 metros. A dupla confirma os três valores no painel.`,
    },
    {
      titulo: `Montando o blockout do cenário`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe os alunos trabalharem sozinhos e circule ajudando com G, S e o painel N. Lembre que hoje é só caixa e cilindro: nada de detalhar. Peça Ctrl+S ao final.`,
      atividade: `Usando sua lista do Claude, posicione de 5 a 8 primitivas (Add > Mesh) no chão, cada uma no tamanho aproximado da lista. Mova com G, escale com S e confira os metros no painel N. Salve o arquivo .blend.`,
      gabarito: `O arquivo deve conter de 5 a 8 primitivas posicionadas sobre o plano, em tamanhos coerentes com a lista (por exemplo, mesa com cerca de 0.75 metro de altura, armário com cerca de 2 metros). Sem detalhamento, apenas formas. Arquivo .blend salvo.`,
    },
    {
      titulo: `Refinando o plano com julgamento crítico`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Estimule o senso crítico: nem toda sugestão da IA serve. Peça que cada aluno questione pelo menos um item da lista e justifique a mudança em uma frase.`,
      atividade: `Releia a lista que o Claude gerou e o seu blockout. Aponte um asset que sobra, falta ou está com escala errada, peça ao Claude um ajuste e corrija o blockout de acordo com sua decisão final.`,
      gabarito: `Não há resposta única. Espera-se uma decisão justificada, por exemplo: remover um item repetido, adicionar um asset que faltou no cenário ou corrigir a altura de um objeto que estava fora de escala. O aluno deve mostrar que a palavra final é dele, não da IA.`,
    },
  ],
};
