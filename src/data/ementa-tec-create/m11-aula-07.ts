import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Revisão e Pose Final dos Personagens",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar criticamente o personagem em voxel, corrigir os últimos detalhes e definir uma pose de apresentação sólida, já pensando na futura impressão 3D.`,
  descricao: `Nesta penúltima aula do mês, o aluno deixa de adicionar coisas novas e passa a olhar com olhar de revisor para o próprio personagem. É o momento de comparar o modelo com a referência inicial, conferir proporções, simetria, cores e materiais, e caçar os erros que passaram despercebidos nas aulas anteriores. A ideia central é simples: um bom modelo não é o que tem mais detalhes, e sim o que está limpo, fechado e pronto para virar realidade.

Como o entregável do mês é um personagem 3D pronto para impressão, esta aula introduz uma preocupação técnica nova e importante: o modelo precisa ser sólido e fechado, sem voxels soltos flutuando no ar e sem partes finas demais que quebrariam na vida real. O aluno aprende a usar a visão do MagicaVoxel para girar a câmera em volta da peça e inspecionar por todos os ângulos, encontrando buracos, vãos e pedaços que não se conectam ao corpo.

A segunda metade da aula é dedicada à pose de apresentação. Diferente de um jogo, onde o personagem se move, aqui escolhemos uma única pose marcante, estável e fácil de imprimir, que mostre a personalidade do personagem em uma imagem só. O aluno também ajusta o ângulo de câmera, a iluminação básica do render e o enquadramento para que o personagem fique bonito na galeria da próxima aula.

Ao final, cada aluno terá um personagem revisado, ajustado e posicionado, com um arquivo limpo e organizado. É uma aula de polimento e cuidado, que ensina uma das atitudes mais profissionais da criação digital: revisar antes de entregar.`,
  materiais: [
    `Computadores com MagicaVoxel instalado e o arquivo .vox do personagem de cada aluno aberto`,
    `Projetor ou tela grande para o professor demonstrar a rotação de câmera e a inspeção do modelo`,
    `Arquivos de exemplo: um personagem com erros propositais (voxel solto, parte fina, cor errada) e um personagem bem-acabado para comparação`,
    `Checklist de revisão impresso ou projetado (proporção, simetria, cores, partes soltas, espessura mínima)`,
    `Folha de referência original do personagem (sketch ou pixel art da Aula 2) para comparar com o modelo`,
    `Impressora 3D disponível na sala para mostrar fisicamente o que acontece com partes muito finas (opcional, demonstrativo)`,
  ],
  conceitosChave: [
    `Revisão crítica — olhar o próprio trabalho com calma procurando erros e pontos de melhoria antes de entregar.`,
    `Simetria — quando os dois lados do personagem combinam, por exemplo os dois braços do mesmo tamanho e na mesma altura.`,
    `Proporção — a relação de tamanho entre as partes, como cabeça, tronco e pernas, para o personagem parecer equilibrado.`,
    `Modelo sólido e fechado — peça sem buracos e sem voxels soltos no ar, com todas as partes grudadas umas nas outras.`,
    `Espessura mínima — a grossura mais fina que uma parte pode ter para não quebrar quando for impressa de verdade.`,
    `Pose de apresentação — a posição final escolhida para mostrar o personagem, estável e cheia de personalidade.`,
    `Render — a imagem bonita gerada pelo MagicaVoxel com luz e sombra, usada para apresentar o personagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é sobre polir, não sobre criar. O objetivo é que o aluno revise o personagem que já existe e corrija pequenos erros. Você não precisa dominar o MagicaVoxel a fundo, mas precisa saber três coisas: girar a câmera, encontrar voxels soltos e aplicar uma pose simples. Para girar a câmera, segure o botão esquerdo do mouse e arraste sobre a janela de visualização central; para aproximar, use a roda do mouse. Antes da aula, abra o arquivo de exemplo com erros e treine encontrar o voxel solto e a parte fina. Tenha o checklist de revisão sempre à vista. Lembre que o personagem vai virar impressão 3D, então partes muito finas (com 1 voxel só de grossura) são o principal problema a caçar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra o personagem bem-acabado de exemplo no projetor e gire a câmera devagar mostrando todos os lados. Pergunte à turma: o que está bom? O que falta? Apresente o checklist de revisão em voz alta. Peça que cada aluno abra o próprio arquivo .vox no MagicaVoxel.

15 min — Conteúdo novo guiado. Mostre como inspecionar o modelo. Primeiro, gire a câmera arrastando com o botão esquerdo do mouse para ver por cima, por baixo e por trás. Depois, ative a ferramenta de seleção no painel de ferramentas à esquerda e mostre como apagar um voxel solto: selecione o modo Erase (apague) na barra superior e clique no voxel perdido. Em seguida, explique a espessura mínima: aponte uma parte fina (como uma espada de 1 voxel) e mostre que é frágil. Demonstre engrossar adicionando voxels ao lado com o modo Attach (adicionar). Por fim, mostre o painel direito com as opções de câmera e o botão de render para gerar a imagem final.

25 min — Mão na massa. Cada aluno percorre o checklist no próprio personagem: 1) compara com a referência original; 2) confere proporção de cabeça, tronco e pernas; 3) verifica simetria dos dois lados; 4) gira a câmera caçando voxels soltos e apaga cada um; 5) engrossa partes finas demais; 6) confere se as cores estão certas. Circule pela sala parando em cada aluno. Depois, peça que escolham e montem uma pose de apresentação, ajustando braços e pernas, e que posicionem a câmera num ângulo bonito.

10 min — Desafio e compartilhar. Lance o desafio do render: cada aluno gera uma imagem final do personagem na pose escolhida e mostra para um colega ao lado, explicando qual erro corrigiu hoje.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de detetive: vire o personagem como se procurasse pistas escondidas. Diga que voxels soltos no ar são como pedaços de Lego que não estão grudados em nada e cairiam na vida real. Para espessura, use a comparação do palito: uma parte de 1 cubinho é como um palito fino, que quebra fácil; engrossar é deixá-la como um lápis, mais resistente. Para a pose, peça que imaginem a foto de capa do personagem: uma só imagem que mostra quem ele é. Reforce que revisar é coisa de profissional, não sinal de erro.

## Erros comuns e como ajudar

O erro mais comum é o aluno achar que está tudo certo sem girar a câmera; insista para que vejam por baixo e por trás, onde os buracos se escondem. Outro erro é deixar partes de 1 voxel (espadas, antenas, dedos), que quebram na impressão; mostre como engrossar com o modo Attach. Alguns apagam voxels demais por engano com o Erase; ensine o atalho Ctrl+Z para desfazer. Há quem queira refazer o personagem inteiro; lembre que hoje é só ajuste, não recomeço. Por fim, muitos escolhem poses instáveis que não param em pé; oriente poses com base larga e pés bem apoiados, pensando na impressão.`,
  exercicios: [
    {
      titulo: `Caça aos voxels soltos`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o arquivo de exemplo com erros propositais. Peça que cada aluno gire a câmera em todos os ângulos antes de apagar qualquer coisa. Acompanhe e confirme se usaram o modo Erase corretamente.`,
      atividade: `Abra o arquivo de exemplo e gire a câmera arrastando com o botão esquerdo do mouse. Encontre todos os voxels soltos flutuando no ar e apague cada um usando o modo Erase. Conte quantos achou.`,
      gabarito: `O aluno deve girar a câmera por cima, por baixo e por trás, localizar os voxels soltos (no arquivo padrão há 3) e apagá-los com o modo Erase. Resposta esperada: 3 voxels soltos encontrados e removidos, modelo sem peças flutuando.`,
    },
    {
      titulo: `Checklist no meu personagem`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue o checklist de revisão. Oriente o aluno a comparar com a referência original da Aula 2. Pare em cada mesa para validar item por item.`,
      atividade: `Abra o seu próprio personagem e siga o checklist: proporção, simetria, cores e partes soltas. Marque cada item conferido e anote pelo menos um ajuste que você precisa fazer.`,
      gabarito: `O aluno percorre os quatro itens do checklist e identifica ao menos um ajuste real (ex.: braço esquerdo mais alto que o direito, cor errada no sapato, voxel solto na cabeça). Resposta esperada: checklist preenchido e um ajuste anotado e iniciado.`,
    },
    {
      titulo: `Desafio da espessura mínima`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre primeiro uma parte fina de 1 voxel no exemplo e explique que quebraria na impressão. Demonstre o modo Attach. Reforce a comparação do palito e do lápis.`,
      atividade: `Encontre no seu personagem qualquer parte com apenas 1 voxel de grossura (espada, antena, dedo). Engrosse-a para pelo menos 2 voxels usando o modo Attach, mantendo o formato.`,
      gabarito: `O aluno localiza partes finas e adiciona voxels com o modo Attach até ficarem com 2 ou mais de espessura. Resposta esperada: nenhuma parte do personagem com apenas 1 voxel de grossura, formato preservado e mais resistente para impressão.`,
    },
    {
      titulo: `Revisão em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno revisa o personagem do colega usando o checklist, pois um olhar de fora encontra erros que o autor não vê. Garanta um clima respeitoso e elogios junto às sugestões.`,
      atividade: `Troque de computador com seu colega e revise o personagem dele girando a câmera e usando o checklist. Aponte um ponto forte e um ajuste que você sugere. Depois ouça o retorno sobre o seu.`,
      gabarito: `Cada aluno dá ao colega um elogio específico e uma sugestão concreta de melhoria baseada no checklist. Resposta esperada: dois feedbacks por personagem (um ponto forte e um ajuste), recebidos com respeito e anotados pelo autor.`,
    },
    {
      titulo: `Pose final e render de apresentação`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a entrega da aula. Oriente poses estáveis com base larga, pensando na impressão. Ajude com o posicionamento da câmera e o botão de render. Lembre o atalho Ctrl+Z para desfazer.`,
      atividade: `Defina uma pose de apresentação para o seu personagem, estável e que mostre a personalidade dele. Ajuste a câmera num ângulo bonito e gere um render final. Salve o arquivo limpo e organizado.`,
      gabarito: `O aluno entrega o personagem revisado em uma pose estável (pés apoiados, base larga), com câmera enquadrada e um render gerado. Resposta esperada: arquivo .vox salvo, sem voxels soltos, sem partes de 1 voxel, com pose de apresentação definida e imagem de render pronta para a galeria da Aula 8.`,
    },
  ],
};
