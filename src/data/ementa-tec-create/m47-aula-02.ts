import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando com Polígonos no Maya",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Bloquear a forma base de um novo item da lista usando modelagem poligonal no Maya com extrude, bevel e edge loops, refinando a silhueta e salvando a primeira versão do asset para o portfólio.`,
  descricao: `Na aula passada o aluno planejou os novos itens e escolheu um para construir. Agora chega a hora mais esperada do mês: tirar o desenho do papel e dar volume a ele dentro do Maya. Esta aula é sobre modelagem poligonal, que é a técnica em que a gente molda um objeto 3D empurrando, puxando e cortando faces, como se fosse esculpir uma massinha feita de placas planas. Tudo em 3D para jogos nasce de três peças simples: o vértice (um ponto no espaço), a aresta (a linha que liga dois pontos) e a face (a superfície fechada entre arestas, geralmente um quadrado de quatro lados chamado quad).

O coração da aula são três ferramentas que todo modelador usa o tempo inteiro. A primeira é o Extrude, que pega uma face e a estica para fora, criando novo volume sem precisar começar do zero, como puxar massinha de dentro de um bloco. A segunda é o Bevel, que arredonda ou chanfra uma quina dura, deixando o objeto com cara de coisa real, porque na vida nenhuma quina é perfeitamente afiada. A terceira é o Edge Loop, um anel de arestas que dá a volta no modelo e serve para acrescentar mais detalhe exatamente onde a gente precisa dobrar ou esculpir a forma.

O fluxo de trabalho que o aluno vai treinar se chama blocking, ou bloqueio da forma. Em vez de tentar fazer o item perfeito de primeira, ele começa com um cubo (o primitivo mais comum) e vai aproximando a silhueta aos poucos: primeiro as proporções gerais, depois os volumes principais, e só no fim os detalhes. Pensar primeiro na silhueta é importante porque, num jogo, o jogador reconhece um objeto pelo contorno antes de ver qualquer textura. Uma espada, um baú ou um capacete precisam ser reconhecíveis só pela sombra.

Ao final, o aluno salva a primeira versão do arquivo do Maya, o famoso .mb, com um nome organizado e numerado (por exemplo v01). Essa versão entra no portfólio como registro do progresso. Guardar versões é um hábito profissional: se algo der errado depois, sempre dá para voltar. O Claude entra como assistente nesta aula para tirar dúvidas rápidas sobre atalhos e para ajudar o aluno a descrever em palavras a forma que ele quer construir antes de mexer no mouse.`,
  materiais: [
    `Computadores com o Maya instalado e já aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a interface do Maya ao vivo`,
    `Arquivo de exemplo (.mb) com um item simples já bloqueado, mostrando o resultado esperado da aula`,
    `Folha com o desenho de referência do item escolhido por cada aluno na Aula 1`,
    `Mouse de três botões com rolagem para cada aluno, essencial para navegar a câmera no Maya`,
    `Acesso ao Claude como assistente para dúvidas de atalhos e descrição da forma`,
    `Quadro branco para desenhar a relação entre vértice, aresta e face`,
  ],
  conceitosChave: [
    `Modelagem poligonal — técnica de construir objetos 3D a partir de faces planas que são empurradas, puxadas e cortadas.`,
    `Vértice — um ponto no espaço 3D; é a menor parte de um modelo.`,
    `Aresta (edge) — a linha que liga dois vértices.`,
    `Face — a superfície fechada entre arestas; o ideal em jogos é a face de quatro lados, chamada quad.`,
    `Extrude — ferramenta que estica uma face para fora criando novo volume.`,
    `Bevel — ferramenta que chanfra ou arredonda uma quina dura, deixando a forma mais realista.`,
    `Edge Loop — um anel de arestas em volta do modelo, usado para adicionar detalhe onde a forma precisa dobrar.`,
    `Blocking (bloqueio) — começar pela forma base simples e refinar a silhueta aos poucos, antes dos detalhes.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser modelador profissional para conduzir esta aula. Precisa dominar quatro coisas no Maya: criar um cubo, alternar entre os modos de seleção, usar Extrude e Bevel, e inserir um Edge Loop. Abra o Maya antes da aula e localize as áreas principais: a viewport central (onde o modelo aparece), a barra de menus no topo, a Shelf de ícones logo abaixo, e o Channel Box à direita (onde aparecem os números do objeto). Navegue na câmera segurando a tecla Alt junto com o botão esquerdo do mouse para girar, com o botão do meio para mover (pan) e com o botão direito para dar zoom. Treine isso antes, porque é o que mais trava iniciantes.

Memorize os três modos de seleção, acionados pelas teclas de número: tecla 1 não é isso, atenção; use F8 para alternar entre modo de objeto e modo de componente. No modo de componente, clique com o botão direito segurando sobre o modelo para escolher Vertex (vértice), Edge (aresta) ou Face (face). A ideia central a transmitir é: todo modelo 3D é feito de pontos, linhas e superfícies, e modelar é mover essas peças. Quad é o objetivo, ou seja, faces de quatro lados, porque jogos lidam melhor com elas.

## Passo a passo da aula

Aquecimento e revisão (10 min): no quadro, desenhe um ponto (vértice), uma linha entre dois pontos (aresta) e um quadrado fechado (face). Mostre o arquivo de exemplo .mb girando no projetor e pergunte de que ele é feito; conduza até a resposta: faces. Relembre que na Aula 1 cada aluno escolheu um item e fez o desenho de referência, que agora vai virar 3D.

Conteúdo novo guiado (15 min): no projetor, crie um cubo pelo menu Create, Polygon Primitives, Cube. Mostre a navegação de câmera com Alt mais botões do mouse. Aperte F8 para entrar no modo de componente e selecione uma face. Aplique Extrude pelo menu Edit Mesh, Extrude (atalho comum: a tecla E é mover; o Extrude fica na Shelf de Polygon Modeling). Puxe a face para fora e mostre que nasceu volume novo. Selecione uma quina (aresta) e aplique Bevel pelo menu Edit Mesh, Bevel; ajuste o número de segmentos no Channel Box para 2 e mostre a quina suavizando. Por fim, insira um Edge Loop pelo menu Mesh Tools, Insert Edge Loop Tool, clicando numa face para passar o anel de arestas no meio do modelo. Diga em voz alta o nome de cada ferramenta enquanto usa.

Mão na massa (25 min): cada aluno cria seu cubo e começa o blocking do item escolhido. Primeiro ajusta as proporções gerais esticando o cubo (sem detalhe ainda). Depois usa Extrude para puxar os volumes principais, Bevel para tirar as quinas duras de pelo menos uma parte, e um Edge Loop para preparar uma curva ou dobra. Circule pela sala lembrando: silhueta primeiro, detalhe depois. Reforce o uso de quads. Ao terminar, cada aluno salva pelo menu File, Save Scene As com o nome organizado, por exemplo item_espada_v01.mb.

Desafio e compartilhar (10 min): desafie quem terminou a girar a câmera e conferir se o item é reconhecível só pela silhueta. Cada aluno mostra em 30 segundos seu blocking, diz qual ferramenta usou mais e onde ainda falta volume.

## Como explicar de forma clara

Use comparações concretas. Diga que modelar é como esculpir massinha, só que a massinha é feita de plaquinhas (as faces). Compare o Extrude a puxar chiclete de dentro do bloco. Diga que o Bevel é tirar o canto afiado de um móvel para ninguém se machucar, e que na vida real nenhuma quina é 100 por cento afiada, por isso o Bevel deixa o objeto realista. Para o Edge Loop, use a imagem de um cinto que dá a volta na cintura: ele acrescenta uma linha extra exatamente onde a forma vai dobrar. Reforce sempre a regra de ouro: pense na sombra do objeto, porque é pela silhueta que o jogador reconhece a peça.

## Erros comuns e como ajudar

Erro 1: o aluno se perde na câmera e acha que o modelo sumiu; ensine a tecla F para enquadrar a seleção ou A para enquadrar tudo. Erro 2: aplica Extrude e aparecem faces duplicadas ou bagunçadas; geralmente puxou o gizmo mais de uma vez, peça para desfazer com Ctrl mais Z e refazer com cuidado. Erro 3: esquece de estar no modo certo (objeto versus componente) e tenta selecionar face sem apertar F8; relembre a tecla. Erro 4: gera faces de cinco ou mais lados (n-gons) sem perceber; mostre como manter quads. Erro 5: começa pelos detalhes pequenos antes da forma geral e trava; traga de volta ao blocking. Erro 6: esquece de salvar ou salva por cima da versão antiga; reforce o nome numerado v01 e o costume de versionar.`,
  exercicios: [
    {
      titulo: `Anatomia de um cubo`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que cada aluno crie o cubo e consiga alternar entre vértice, aresta e face com F8 e o menu de botão direito. Corrija a navegação de câmera de quem travar.`,
      atividade: `Crie um cubo pelo menu Create, Polygon Primitives, Cube. Aperte F8 para entrar no modo de componente e, segurando o botão direito sobre o cubo, selecione e mostre um vértice, depois uma aresta e por fim uma face. Gire a câmera com Alt mais botão esquerdo para ver o cubo de vários ângulos.`,
      gabarito: `O aluno cria o cubo e consegue, sem ajuda, selecionar os três tipos de componente (vértice, aresta e face) usando F8 e o menu de botão direito. Ele navega a câmera com Alt mais botões do mouse. Se ele tenta selecionar uma face ainda no modo de objeto, ainda não entendeu a troca de modo com F8.`,
    },
    {
      titulo: `Puxando volume com Extrude`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre o Extrude no menu Edit Mesh, Extrude ou na Shelf de Polygon Modeling. Confira que o aluno entende que cada Extrude cria volume novo a partir de uma face.`,
      atividade: `No seu cubo, selecione uma face do topo e aplique Extrude pelo menu Edit Mesh, Extrude. Puxe a face para cima criando uma torre. Selecione uma face lateral e aplique outro Extrude, puxando para fora um braço. Você deve terminar com um formato de L ou de T.`,
      gabarito: `O modelo termina com pelo menos dois extrudes formando um L ou T, com volume novo claramente puxado de duas faces diferentes. As faces continuam com quatro lados (quads). Se aparecerem faces duplicadas no mesmo lugar, o aluno puxou o gizmo duas vezes: peça Ctrl mais Z e refaça.`,
    },
    {
      titulo: `Tirando a quina com Bevel`,
      tipo: `desafio`,
      tempo: `6 min`,
      guiaProfessor: `Aponte o menu Edit Mesh, Bevel e o campo de segmentos no Channel Box. Reforce que na vida real nenhuma quina é perfeitamente afiada.`,
      atividade: `Selecione uma aresta de quina do seu modelo e aplique Bevel pelo menu Edit Mesh, Bevel. No Channel Box, mude o número de segmentos para 2 e observe a quina ficar suave. Gire a câmera e compare uma quina com Bevel e uma sem, vendo qual parece mais real.`,
      gabarito: `Pelo menos uma quina do modelo aparece chanfrada ou arredondada, com 2 segmentos definidos no Channel Box. O aluno consegue explicar que a quina com Bevel parece mais realista do que a quina dura. Se ele aplicou Bevel numa face em vez de numa aresta, oriente a selecionar a aresta primeiro.`,
    },
    {
      titulo: `Bloqueando o item da lista`,
      tipo: `mão na massa`,
      tempo: `14 min`,
      guiaProfessor: `Cada aluno usa o desenho de referência da Aula 1. Reforce a ordem: proporções gerais, depois volumes com Extrude, depois Bevel e um Edge Loop. Lembre a regra da silhueta e o uso de quads. Oriente a salvar como v01 ao final.`,
      atividade: `A partir de um cubo, faça o blocking do item que você escolheu na Aula 1. Primeiro ajuste as proporções gerais, depois use Extrude para criar os volumes principais, Bevel para suavizar pelo menos uma quina e Insert Edge Loop Tool (menu Mesh Tools) para adicionar um anel de arestas onde a forma precisa dobrar. Salve pelo menu File, Save Scene As com o nome no formato item_nome_v01.mb.`,
      gabarito: `O arquivo salvo (formato item_nome_v01.mb) traz uma forma base reconhecível do item escolhido, feita por blocking: proporções coerentes com a referência, ao menos um Extrude, um Bevel e um Edge Loop aplicados, e faces predominantemente em quads. A silhueta deixa o item reconhecível mesmo sem detalhes finos. O importante é o fluxo correto (forma geral antes do detalhe) e o arquivo versionado como v01, não a perfeição do modelo.`,
    },
    {
      titulo: `Roda da silhueta`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma. Conduza a conversa para fixar os conceitos de Extrude, Bevel, Edge Loop e silhueta. Valorize cada fala e foque no vocabulário, não na crítica ao modelo.`,
      atividade: `Em roda, cada aluno gira a câmera do seu modelo e responde em poucas palavras: qual ferramenta usou para criar volume, qual usou para suavizar uma quina e para que serviu o Edge Loop. Em seguida diz se o item é reconhecível só pela silhueta e onde ainda falta volume.`,
      gabarito: `As respostas devem conter as ideias corretas: o Extrude cria volume a partir de uma face, o Bevel suaviza ou chanfra uma quina, e o Edge Loop adiciona um anel de arestas onde a forma precisa dobrar. Não há resposta única, mas os três conceitos precisam aparecer, e cada aluno deve avaliar honestamente a silhueta do próprio item e apontar onde ainda falta trabalho.`,
    },
  ],
};
