import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Dando Forma ao Modelo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Montar o personagem ou objeto completo em voxel, com cabeça, corpo e detalhes principais, usando a simetria (Mirror) para acelerar as partes iguais até o modelo ficar reconhecível.`,
  descricao: `Nesta aula o aluno deixa de fazer testes soltos e parte para a construção do modelo de verdade. Com o planejamento da Aula 3 em mãos, ele vai erguer o personagem ou objeto bloco a bloco, começando pelas grandes massas (a cabeça e o corpo) e só depois cuidando dos detalhes que dão personalidade, como braços, pernas, orelhas ou antenas. A ideia central é pensar a forma como volumes simples encaixados, e não como uma pilha confusa de cubinhos.

O grande recurso novo da aula é a simetria, chamada de Mirror no MagicaVoxel. Muitos personagens e objetos são espelhados: um olho de um lado, um olho do outro; um braço aqui, outro igual ali. Em vez de construir os dois lados na mão e correr o risco de ficarem tortos, o aluno liga o espelhamento em um eixo e o programa reproduz automaticamente cada bloco do outro lado. Isso economiza tempo, deixa o modelo equilibrado e ensina uma forma de pensar muito usada por artistas 3D profissionais.

Além de montar, o aluno aprende a ajustar. Modelar é um processo de ir e voltar: ergue uma forma, olha de longe, gira a câmera, percebe que a cabeça está grande demais ou que falta barriga, e corrige. A aula reforça o hábito de girar o modelo o tempo todo para checar a silhueta de vários ângulos, porque um boneco pode parecer ótimo de frente e estranho de lado.

Ao final da hora, cada aluno deve ter um modelo reconhecível em três dimensões: dá para olhar e dizer o que é. Ele ainda não estará pintado nem com os detalhes finos (isso vem nas próximas aulas), mas terá corpo, proporção e simetria. Essa base sólida é o que vai permitir, depois, pintar com paletas, acrescentar detalhes e preparar o modelo para a impressão 3D.`,
  materiais: [
    `Computadores com MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar os passos ao vivo`,
    `O desenho/planejamento do personagem feito por cada aluno na Aula 3 (em papel ou na tela)`,
    `Arquivos de exemplo .vox de modelos simples já montados (um boneco, um objeto) para referência`,
    `Imagens de referência de personagens simétricos (bonecos, robôs, bichos) projetadas ou impressas`,
    `Mouse para cada computador (modelar com mouse é muito mais preciso que com touchpad)`,
  ],
  conceitosChave: [
    `Forma geral (silhueta) — o contorno do modelo visto de longe; é o que faz a gente reconhecer o que é antes de ver qualquer detalhe.`,
    `Volume — um bloco grande de voxels que representa uma parte do corpo, como a cabeça ou o tronco, antes de receber acabamento.`,
    `Simetria (Mirror) — recurso que copia automaticamente os voxels de um lado para o outro em relação a um eixo, mantendo os dois lados iguais.`,
    `Eixo de espelhamento — a linha imaginária (X, Y ou Z) que divide o modelo ao meio e define para onde a cópia simétrica acontece.`,
    `Proporção — a relação de tamanho entre as partes, como cabeça em relação ao corpo; proporções equilibradas deixam o modelo agradável.`,
    `Bounding Box (caixa de trabalho) — a área em que se pode construir; o modelo precisa caber dentro dela, e ela pode ser aumentada quando necessário.`,
    `Referência — o desenho ou imagem que serve de guia para saber o que construir e onde colocar cada parte.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai guiar os alunos a montar um modelo completo a partir do planejamento da Aula 3. O recurso central é o Mirror (espelhamento). No MagicaVoxel, no painel à direita (Edit), existe a seção "Mirror" com três botões: X, Y e Z. Ao ativar um deles (ele fica destacado), tudo o que você desenhar de um lado do eixo aparece copiado do outro lado. Para a maioria dos personagens, o eixo de simetria esquerda-direita é o X. Teste antes da aula: ligue o Mirror X, pinte um voxel de um lado e veja o gêmeo surgir do outro. Você só precisa dominar três coisas: ligar/desligar o Mirror, escolher o eixo certo e ampliar a caixa de trabalho (campo de tamanho no topo, ex.: 40 40 40) quando o modelo não couber.

## Passo a passo da aula

10 min — Aquecimento/revisão: peça que cada aluno mostre o desenho da Aula 3 e diga em voz alta as partes do personagem (cabeça, corpo, braços). Pergunte: "Quais partes são iguais dos dois lados?" Isso prepara o conceito de simetria. Abra o MagicaVoxel no projetor.

15 min — Conteúdo novo guiado: demonstre no projetor. Primeiro, ajuste o tamanho da caixa no campo do topo (ex.: digite 32 32 40 e Enter) para caber um boneco em pé. Mostre a ferramenta Attach (atalho T) com o pincel Box para erguer volumes grandes rápido: construa a cabeça como um bloco e o tronco como outro. Depois, no painel Edit à direita, clique no botão "X" da seção Mirror para ligar a simetria. Pinte um olho de um lado e mostre o segundo aparecendo sozinho. Construa um braço; o outro nasce espelhado. Gire a câmera (botão esquerdo do mouse arrastando no fundo) para mostrar o modelo de vários lados.

25 min — Mão na massa: cada aluno monta o próprio modelo seguindo o planejamento. Ordem sugerida: 1) ajustar a caixa de trabalho; 2) erguer cabeça e corpo como volumes grandes; 3) ligar Mirror X; 4) fazer braços, pernas, olhos e detalhes laterais com a simetria ligada; 5) girar o modelo a cada minuto para conferir a silhueta. Circule pela sala, sente ao lado de quem travar e ajude a achar o botão do Mirror.

10 min — Desafio + compartilhar: lance o desafio de melhorar uma proporção (ver exercícios). Depois, faça uma rodada rápida em que cada aluno gira o modelo na tela e os colegas tentam adivinhar o que é. Se adivinharem fácil, a silhueta está boa.

## Como explicar de forma clara

Use comparações concretas. Diga: "Primeiro a gente faz os blocões, como caixas de papelão empilhadas pra montar um boneco; só depois a gente lapida." Para a simetria: "O Mirror é um espelho mágico: o que você faz de um lado, ele faz igualzinho do outro. Você desenha um olho e ganha o outro de graça." Reforce sempre: "Gire seu modelo! Ele pode estar legal de frente e esquisito de lado." Evite a palavra "eixo" sozinha; diga "a linha do meio que separa esquerda e direita". Lembre que detalhe e pintura ficam para depois: hoje o objetivo é a forma reconhecível.

## Erros comuns e como ajudar

O erro mais comum é esquecer de ligar o Mirror e construir os dois lados na mão, ficando tortos: peça para apagar um lado e ativar o espelhamento. Outro erro é o Mirror no eixo errado (Y ou Z), que espelha de cima ou de frente; mostre como desligar e ligar o X. Alguns alunos colocam voxels bem em cima da linha do meio e veem o bloco "piscar" ou duplicar de forma estranha; explique que sobre o eixo a cópia se sobrepõe e que detalhes laterais devem ficar afastados do centro. Há quem comece pelos detalhes minúsculos e perca tempo: redirecione para os volumes grandes primeiro. Por fim, vários esquecem de girar a câmera e só veem a frente; circule pedindo "gira aí, vamos ver de lado".`,
  exercicios: [
    {
      titulo: `Erguendo os volumes`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno ajuste a caixa de trabalho antes de começar. Foque só em massas grandes; impeça que mexam em detalhes agora.`,
      atividade: `Ajuste o tamanho da caixa (ex.: 32 32 40) e, com a ferramenta Attach (T) e pincel Box, construa apenas dois volumes grandes: a cabeça e o corpo do seu personagem. Sem detalhes ainda.`,
      gabarito: `O aluno tem na tela dois blocos claramente identificáveis como cabeça e corpo, encaixados, dentro da caixa de trabalho. Exemplo válido: um cubo menor (cabeça) sobre um bloco maior (tronco), ambos centralizados.`,
    },
    {
      titulo: `Ligando o espelho mágico`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Mostre de novo onde fica o botão Mirror X no painel Edit. Confirme que o botão está destacado antes de o aluno pintar.`,
      atividade: `Ative o Mirror no eixo X (painel Edit, seção Mirror, botão X). Pinte um olho de um lado da cabeça e confirme que o segundo olho aparece sozinho do outro lado.`,
      gabarito: `O modelo mostra dois olhos perfeitamente alinhados e simétricos, criados a partir de um só clique de cada vez. O botão X da seção Mirror está aceso. Se só apareceu um olho, o Mirror não estava ligado.`,
    },
    {
      titulo: `Membros gêmeos`,
      tipo: `desafio`,
      tempo: `5 min`,
      guiaProfessor: `Incentive a usar a simetria para braços e pernas. Verifique se os membros saem da altura certa do corpo e não do meio do tronco.`,
      atividade: `Com o Mirror X ainda ligado, construa um braço de um lado; o outro deve nascer espelhado. Faça o mesmo com as pernas. Gire a câmera para conferir se ficaram iguais dos dois lados.`,
      gabarito: `O personagem tem braços e pernas em pares idênticos e equilibrados, posicionados nas laterais corretas. Ao girar, os dois lados são espelhos um do outro. Exemplo: dois braços na mesma altura dos ombros e duas pernas na base do tronco.`,
    },
    {
      titulo: `Caça à proporção torta`,
      tipo: `em dupla`,
      tempo: `5 min`,
      guiaProfessor: `Forme duplas. Oriente que o colega aponte sem mexer no modelo do outro. Depois cada um corrige o próprio. Reforce o hábito de girar para avaliar.`,
      atividade: `Em dupla, troquem de cadeira e girem o modelo do colega. Cada um aponta UMA proporção que pode melhorar (cabeça grande demais, corpo fino, perna curta). Voltem ao próprio modelo e ajustem essa parte.`,
      gabarito: `Cada aluno identifica um problema real de proporção no modelo do colega e aplica uma correção no próprio. Exemplo: "sua cabeça é maior que o corpo" leva o autor a aumentar o tronco ou reduzir a cabeça, deixando o boneco mais equilibrado.`,
    },
    {
      titulo: `Adivinha o que é?`,
      tipo: `roda de conversa`,
      tempo: `5 min`,
      guiaProfessor: `Conduza a rodada de forma rápida e acolhedora. Use os acertos como prova de que a silhueta está boa e os erros como pista do que melhorar na próxima aula.`,
      atividade: `Em roda, cada aluno mostra o modelo girando na tela, sem dizer o que é. Os colegas tentam adivinhar. Depois o autor conta se acertaram e diz uma coisa que vai melhorar na próxima aula.`,
      gabarito: `Não há resposta única; o objetivo é avaliar a clareza da forma. Considera-se bem-sucedido quando a maioria adivinha o personagem ou objeto pela silhueta. Exemplo de fala válida do autor: "É um gato; vou melhorar as orelhas e deixar o rabo mais longo".`,
    },
  ],
};
