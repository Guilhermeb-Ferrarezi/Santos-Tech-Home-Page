import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Do Aseprite ao Construct 3",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Praticar o fluxo completo de levar os sprites animados do Aseprite para o Construct 3, configurando velocidade, ponto de origem e nomes de animação até o personagem se mover corretamente dentro do jogo.`,
  descricao: `Esta é a aula da ponte. Até agora o aluno animou o personagem dentro do Aseprite, onde a animação roda bonitinha na janela de preview. Mas um jogo de verdade não roda no Aseprite, e sim no Construct 3. O objetivo de hoje é fazer essa travessia: pegar os quadros animados que o aluno desenhou e colocá-los no motor do jogo, vendo o personagem ganhar vida lá dentro. É o momento em que o trabalho de pixel art encontra o trabalho de programação que a turma já conhece do mês anterior.

Existem dois caminhos para essa travessia, e os dois aparecem na aula. O primeiro é exportar a sprite sheet do Aseprite (uma imagem única com todos os quadros lado a lado) e importá-la no Construct 3, fatiando-a em frames. O segundo, mais direto, é exportar cada quadro como um PNG separado e arrastá-los para dentro da animação do objeto no editor de animações do Construct 3. Em ambos, o aluno precisa cuidar de três ajustes que fazem toda a diferença: a Speed (velocidade da animação, em quadros por segundo), o Origin (o ponto de origem, que define onde o personagem é "segurado" pelo jogo) e o nome da animação, que precisa ser claro como "Idle" ou "Andar" porque mais tarde os eventos vão chamar a animação por esse nome.

A transparência é a vilã clássica desta aula. Se o aluno exportou o sprite com fundo branco em vez de fundo transparente, o personagem aparece dentro de um quadrado feio no jogo. Hoje o professor mostra como garantir que o fundo continue transparente do Aseprite até o Construct 3, e como consertar quando dá errado. Ao final, cada aluno deve ter o personagem se movendo na tela do jogo, com a animação rodando na velocidade certa, sem moldura branca e centralizado pelo ponto de origem correto.

Reforce que esse vai-e-volta entre duas ferramentas é exatamente o que profissionais fazem todos os dias: ninguém desenha e programa no mesmo lugar. Aprender a exportar e importar com capricho é uma habilidade tão importante quanto desenhar bem.`,
  materiais: [
    `Computadores com o Aseprite e o Construct 3 instalados e abertos, com o projeto de cada aluno carregado`,
    `Projetor ou TV para o professor demonstrar onde clicar nas duas ferramentas`,
    `Arquivo de exemplo "heroi-idle.aseprite" com uma animação pronta (plano B para quem ainda não terminou a sua)`,
    `Sprite sheet de exemplo já exportada (PNG) e a mesma animação em PNGs separados, para mostrar os dois caminhos`,
    `Projeto base do Construct 3 "jogo-base.c3p" com cenário pronto, esperando o personagem`,
    `Folha impressa com o passo a passo da exportação no Aseprite (formato PNG, fundo transparente)`,
    `Uma pasta organizada por aluno para salvar os arquivos exportados sem se perder`,
  ],
  conceitosChave: [
    `Sprite sheet — imagem única que junta todos os quadros da animação lado a lado, como uma tira de filme.`,
    `Exportar — gerar, a partir do projeto do Aseprite, um arquivo de imagem (PNG) que outras ferramentas conseguem abrir.`,
    `Importar — trazer uma imagem de fora para dentro do Construct 3 e transformá-la na animação de um objeto.`,
    `Transparência (canal alfa) — a parte "vazia" da imagem que deixa ver o cenário atrás do personagem, em vez de um fundo colorido.`,
    `Speed (velocidade) — número de quadros por segundo que define se a animação roda rápida ou devagar no jogo.`,
    `Origin (ponto de origem) — o ponto do sprite pelo qual o jogo "segura" o personagem; usado para posição e centralização.`,
    `Nome da animação — etiqueta como "Idle" ou "Andar" que identifica a animação para que os eventos do jogo consigam chamá-la.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você transita entre duas ferramentas, então teste o caminho antes da aula. No Aseprite, a exportação fica em File > Export Sprite Sheet (para a tira única) ou em File > Export > Export As (para PNGs). O ponto crítico é o fundo transparente: o arquivo do aluno não pode ter uma camada de fundo branca; o "fundo" precisa ser o quadriculado cinza-e-branco que o Aseprite usa para mostrar transparência. No Construct 3, o caminho mais simples é arrastar os PNGs para dentro do editor de animações: dê duplo clique no objeto Sprite, e o Animations editor abre, com a lista de animações à esquerda e a tira de frames embaixo. Três ajustes importam: Speed (na propriedade da animação, padrão 5; suba para 8 a 12 para algo mais vivo), Origin (a ferramenta de origem no editor, normalmente centralizada com a tecla de atalho ou clicando no centro do personagem) e o nome da animação (clique direito na animação > Rename). Rode o jogo com o botão Run para ver o resultado. Faça esse ciclo uma vez sozinho e a aula corre tranquila.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça para cada aluno abrir sua animação no Aseprite e dar play na janela de preview. Pergunte: "Isso roda dentro do jogo?". Não, ainda está preso no Aseprite. Esse é o problema de hoje: levar para o Construct 3.

Conteúdo novo guiado (15 min): no projetor, no Aseprite, vá em File > Export > Export As, escolha formato PNG e marque a opção de exportar cada quadro (ou Export Sprite Sheet para a tira). Mostre que o fundo está transparente. Abra o Construct 3, dê duplo clique no objeto Sprite para abrir o Animations editor. Arraste os PNGs para a tira de frames. Ajuste a Speed para 10. Clique na ferramenta Origin e centralize o ponto no personagem. Clique direito na animação e renomeie para "Idle". Feche o editor e clique em Run para ver o personagem animado no jogo.

Mão na massa (25 min): os alunos repetem com a própria animação. Primeiro exportam do Aseprite com fundo transparente, salvando numa pasta organizada. Depois importam no Construct 3, ajustam Speed, Origin e nome. Circule pela sala conferindo a transparência. Quem terminar importa uma segunda animação (ex.: "Andar") no mesmo objeto.

Desafio e compartilhar (10 min): proponha que cada aluno teste duas velocidades diferentes (Speed 5 e Speed 12) e decida qual combina com o personagem. Cada um mostra o personagem rodando no jogo para um colega e explica qual Speed escolheu e por quê.

## Como explicar de forma clara (linguagem para a idade)

Diga: "O Aseprite é o estúdio onde você desenha; o Construct 3 é o palco onde o personagem atua. Hoje a gente leva o ator do estúdio para o palco." Para transparência: "O fundo transparente é como um vidro: você vê o cenário atrás do personagem. Fundo branco é como colar um adesivo quadrado feio em volta dele." Para Origin: "O ponto de origem é onde o jogo segura o boneco, como o cabo de um pirulito. Se estiver torto, o personagem fica desalinhado." Para Speed: "Speed é a velocidade do desenho animado: número baixo, devagar; número alto, acelerado." Use sempre o ciclo testar, ver e ajustar, rodando o jogo a cada mudança.

## Erros comuns e como ajudar

Personagem com moldura branca no jogo: o sprite foi exportado com camada de fundo branca; volte ao Aseprite, apague o fundo e exporte de novo com transparência. Animação não roda no jogo: a Speed pode estar em 0, ou os frames foram importados em ordem errada (arraste-os de novo na sequência certa). Personagem desalinhado ou "afundado" no chão: o Origin está fora do lugar; abra o Animations editor e centralize a origem. Eventos não acham a animação: o nome ficou como "Animation 1" em vez de um nome claro; renomeie para "Idle" ou "Andar". Importou só um quadro: o aluno arrastou apenas um PNG; é preciso selecionar e arrastar todos os quadros de uma vez. Em todos os casos, peça para o aluno rodar o jogo após cada ajuste, em vez de mudar várias coisas de uma vez.`,
  exercicios: [
    {
      titulo: `Exportando com transparência`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe a tela de exportação no projetor. Reforce que o fundo precisa estar transparente (quadriculado) antes de exportar. Garanta que cada aluno salve numa pasta com nome reconhecível.`,
      atividade: `No Aseprite, vá em File > Export > Export As, escolha formato PNG e exporte os quadros da sua animação para uma pasta sua. Confirme que o fundo dos PNGs está transparente, e não branco.`,
      gabarito: `Os arquivos PNG estão salvos na pasta do aluno e abrem com fundo transparente (sem quadrado branco em volta do personagem). Se aparecer fundo branco, o aluno exportou com uma camada de fundo ativa e precisa apagá-la antes de exportar de novo.`,
    },
    {
      titulo: `Trazendo o personagem para o jogo`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor como abrir o Animations editor com duplo clique no objeto Sprite. Ajude a arrastar todos os quadros de uma vez, na ordem certa. Confira a transparência já dentro do Construct 3.`,
      atividade: `No Construct 3, dê duplo clique no objeto Sprite para abrir o Animations editor. Arraste todos os PNGs exportados para a tira de frames. Feche o editor e clique em Run para ver o personagem na tela.`,
      gabarito: `O personagem aparece no jogo com todos os quadros importados, sem moldura branca. Ao clicar em Run, a animação roda. Se só um quadro apareceu, o aluno arrastou apenas um PNG e precisa selecionar e arrastar todos juntos.`,
    },
    {
      titulo: `Velocidade, origem e nome`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Ensine os três ajustes na ordem: Speed na propriedade da animação, Origin com a ferramenta de origem centralizada no personagem, e Rename pela opção de clique direito. Confira se o nome ficou claro e útil.`,
      atividade: `No Animations editor, ajuste a Speed da animação para 10, use a ferramenta Origin para centralizar o ponto de origem no personagem e renomeie a animação para "Idle". Rode o jogo e veja o resultado.`,
      gabarito: `A animação roda numa velocidade visível (Speed 10), o personagem fica centralizado e alinhado ao chão pelo Origin, e a animação aparece na lista com o nome "Idle". Se o personagem parece torto ou afundado, o Origin não foi centralizado corretamente.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Combine que um aluno vai estragar um detalhe de propósito (fundo branco, Speed 0, Origin torto ou nome genérico) e o outro precisa descobrir e consertar. Depois trocam os papéis. Incentive testar o jogo a cada hipótese.`,
      atividade: `Em dupla, um aluno cria de propósito um problema no personagem do colega (por exemplo, deixar a Speed em 0 ou o Origin fora do lugar). O outro roda o jogo, descobre qual é o erro e conserta. Depois invertam os papéis.`,
      gabarito: `A dupla identifica o problema introduzido e o corrige, deixando o personagem rodando certo de novo. Bons resultados mostram que os alunos sabem ligar o sintoma à causa: moldura branca vem da transparência, parado vem da Speed, desalinhado vem do Origin, evento que não acha vem do nome.`,
    },
    {
      titulo: `Duas animações no mesmo herói`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como adicionar uma segunda animação no mesmo objeto (botão de nova animação na lista à esquerda do editor). Reforce nomes claros e distintos. Quem quiser pode ligar a troca de animação a um evento simples, retomando o conteúdo do mês passado.`,
      atividade: `Importe uma segunda animação no mesmo objeto Sprite (por exemplo, "Andar"), ajuste a Speed e o nome. Se conseguir, crie um evento que troque para a animação "Andar" quando o personagem se mover, voltando para "Idle" quando parar.`,
      gabarito: `O objeto Sprite tem duas animações nomeadas com clareza (ex.: "Idle" e "Andar"), cada uma com a própria Speed e fundo transparente. No caso avançado, o evento usa a ação "Set animation" para "Andar" ao mover e "Idle" ao parar, e a troca acontece visivelmente ao rodar o jogo.`,
    },
  ],
};
