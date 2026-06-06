import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Pós-Processamento da Peça",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Dar o acabamento na peça impressa — soltá-la da mesa com segurança, retirar suportes e brim e lixar as imperfeições — comparando o resultado físico com o modelo digital feito no Blender.`,
  descricao: `Nesta aula a impressão deixa de ser um objeto bruto e vira uma peça acabada. Depois de tudo o que o aluno preparou no Orca Slicer ao longo do mês — importar o personagem, fatiar, escolher suportes e aderência, enviar para a impressora e acompanhar ao vivo —, chega a hora mais satisfatória: ter a peça nas mãos e cuidar dela. O pós-processamento é a etapa que separa um modelo "feito às pressas" de um modelo bem-acabado, e é onde o aluno aprende paciência e atenção aos detalhes.

O primeiro cuidado é soltar a peça da mesa sem quebrar nada e sem se machucar. Em impressoras com mesa flexível (PEI magnética), basta retirar a chapa, curvá-la levemente e a peça se solta. Em mesas rígidas, usa-se uma espátula entrando por baixo de uma borda, sempre empurrando para longe das mãos. Em seguida vêm os suportes (aquelas estruturas finas que seguraram as partes flutuantes durante a impressão) e o brim (a borda fininha de uma camada que ajudou a peça a grudar na mesa). Os dois são feitos para sair — foram fatiados justamente para se desprender com facilidade.

Depois de limpar suportes e brim, sobram pequenas marcas: pontinhos onde o suporte tocava a peça, fios soltos ("stringing") e cantos ásperos. É aí que entra a lixa. Lixar é simples, mas exige técnica: começar por uma lixa mais grossa e ir para uma mais fina, sempre com movimentos suaves. O aluno descobre que a peça vai ficando lisa ao toque e pronta para pintar nas próximas etapas.

Por fim, a aula fecha o ciclo com uma avaliação de qualidade: colocar a peça impressa ao lado do modelo digital aberto no Blender e perguntar "ficou parecido?". Onde o real combinou com o digital? Onde houve diferença — um detalhe que sumiu, uma superfície mais áspera? Essa comparação ensina o aluno a olhar com olhos críticos e a anotar o que pode melhorar na próxima impressão, fechando a ponte entre o mundo digital e o mundo real.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e o Blender aberto com o modelo do personagem do aluno, para comparar o digital com o real`,
    `Projetor para o professor demonstrar cada passo do acabamento na tela grande`,
    `A peça impressa de cada aluno (entregável do mês) já retirada da impressora, ou peças de exemplo prontas caso alguma impressão não tenha terminado`,
    `Kit de acabamento por aluno: espátula de ponta fina, alicate de corte (ou alicate de bico), e lixas de água nas gramaturas 220, 400 e 600`,
    `Óculos de proteção e um pano ou toalha para apoiar a peça enquanto lixa, evitando que role da mesa`,
    `Impressora 3D com mesa flexível (chapa PEI magnética) para demonstrar a remoção da peça ao vivo`,
    `Folha impressa "Ficha de Avaliação da Peça" com uma tabela simples para o aluno comparar real e digital e anotar notas de 1 a 5`,
  ],
  conceitosChave: [
    `Pós-processamento — conjunto de etapas de acabamento feitas na peça depois que a impressão termina (soltar da mesa, retirar suportes, lixar).`,
    `Suporte — estrutura fina que a impressora cria por baixo das partes flutuantes do modelo para segurá-las durante a impressão; é removida no fim.`,
    `Brim — borda fininha de uma só camada impressa ao redor da base da peça para ajudá-la a grudar na mesa; solta-se com facilidade depois.`,
    `Mesa flexível (PEI) — chapa magnética que se curva; ao dobrá-la levemente a peça se desprende sozinha, sem precisar de força.`,
    `Lixa de água — lixa numerada em que o número menor (220) é mais grossa e o maior (600) é mais fina; vai-se da grossa para a fina.`,
    `Stringing — fios finíssimos de plástico que ficam grudados entre partes da peça; são pequenos defeitos que se retiram na limpeza.`,
    `Avaliação de qualidade — comparar a peça real com o modelo digital do Blender para julgar o quanto ficaram parecidos e o que melhorar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D. Esta aula é prática e manual: o foco está na peça física, não no software. O Orca Slicer entra só como apoio visual — você vai abrir o arquivo .3mf ou .gcode do aluno para mostrar, na pré-visualização, ONDE estão os suportes e o brim antes de o aluno mexer na peça de verdade. Para isso, abra o Orca, carregue o projeto do aluno e clique na aba "Preview" (Pré-visualização), no topo da janela. A barra deslizante do lado direito mostra camada por camada; as estruturas de suporte aparecem numa cor diferente do corpo da peça. Saiba também a regra de ouro do lixamento: do número menor (mais grosso) para o maior (mais fino). E a regra de ouro da segurança: a espátula sempre empurra para LONGE das mãos.

## Passo a passo da aula

Aquecimento e revisão (10 min): com a peça impressa na mão de cada aluno (ou peças de exemplo), pergunte: "o que ainda está faltando para essa peça ficar bonita?". Anote no quadro — alguém vai citar os suportes ou os cantos ásperos. No projetor, abra o Orca Slicer, vá na aba Preview e mostre onde estavam os suportes e o brim no modelo do aluno.

Conteúdo novo guiado (15 min): demonstre no projetor e na impressora, na ordem.
1. Soltar da mesa: retire a chapa flexível da impressora, curve-a com as duas mãos longe do corpo e mostre a peça se soltando. Em mesa rígida, encaixe a espátula por baixo de uma borda empurrando para longe.
2. Retirar os suportes: segure a peça com firmeza e puxe os suportes com o alicate de corte, começando pelas pontas. Mostre que eles saem em blocos.
3. Retirar o brim: descole a bordinha de uma camada com a unha ou a ponta da espátula.
4. Lixar: passe a lixa 220 nos pontos ásperos, depois 400, depois 600, com movimentos suaves e circulares.

Mão na massa (25 min): cada aluno faz os quatro passos na própria peça, usando óculos de proteção e o pano por baixo. Circule pela sala corrigindo a pegada e a direção da espátula.

Desafio e compartilhar (10 min): cada aluno abre o modelo no Blender, coloca a peça acabada ao lado e preenche a Ficha de Avaliação. Dois ou três voluntários mostram a peça e contam o que ficou igual ao digital e o que ficou diferente.

## Como explicar de forma clara

Use comparações do dia a dia. Os suportes são "andaimes de uma obra": serviram para construir, mas no fim a gente tira. O brim é "a fita adesiva que segurou o desenho na mesa". A mesa flexível "funciona como uma forma de gelo de silicone — você torce e o cubo pula". Para o lixamento, explique que "a lixa grossa tira os pedaços maiores e a fina deixa lisinho, igual a quando a gente passa do pente grosso para o fino no cabelo". E sobre a avaliação: "a impressora é uma fotocopiadora 3D; vamos ver se a cópia ficou fiel ao original".

## Erros comuns e como ajudar

Forçar a peça na mesa quente ou ainda morna: ela entorta. Lembre que se espera a mesa esfriar antes de soltar. Puxar os suportes com a mão e cortar o dedo: por isso o alicate e os óculos são obrigatórios; nunca puxe com força perto do rosto. Arrancar suporte às pressas e levar um pedaço da peça junto: oriente a ir devagar, das pontas para o centro. Lixar seco e com força, deixando a superfície esbranquiçada e arranhada: peça movimentos leves e, se possível, a lixa levemente úmida. Pular da lixa 220 direto para a 600: não adianta, fica marcado; respeite a ordem 220, 400, 600. Na avaliação, o aluno só escreve "ficou legal": peça que aponte UM detalhe que combinou e UM que ficou diferente do Blender, para treinar o olhar crítico.`,
  exercicios: [
    {
      titulo: `Encontrando os suportes na pré-visualização`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Antes de a turma tocar nas peças, faça este reconhecimento no Orca Slicer para todos entenderem o que vão remover. Conduza no projetor e peça que cada aluno repita no próprio computador. Mostre como clicar na aba Preview e arrastar a barra de camadas.`,
      atividade: `No Orca Slicer, abra o seu projeto do personagem e clique na aba "Preview" (Pré-visualização). Arraste a barra de camadas do lado direito de baixo para cima e localize, na cor diferente, onde estão os suportes e o brim. Aponte na tela para o colega do lado onde eles ficam.`,
      gabarito: `O aluno acertou quando consegue abrir a aba Preview, mover a barra de camadas e apontar corretamente as estruturas de suporte (cor distinta do corpo da peça) e o brim (a borda fina de uma camada na base). Saber onde estão antes de remover na peça real confirma o entendimento.`,
    },
    {
      titulo: `Soltando a peça com segurança`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre primeiro na impressora real com a mesa já fria. Reforce a regra da espátula: sempre empurrar para longe das mãos. Fique perto enquanto cada aluno faz, corrigindo a pegada. Distribua os óculos de proteção antes de começar.`,
      atividade: `Solte a sua peça da mesa. Se a mesa for flexível, retire a chapa e curve-a com as duas mãos, longe do corpo, até a peça pular. Se for rígida, encaixe a espátula por baixo de uma borda empurrando sempre para longe das mãos. A peça deve sair inteira.`,
      gabarito: `Sucesso quando a peça sai inteira, sem quebrar e sem o aluno se machucar, usando a técnica certa (curvar a chapa flexível ou empurrar a espátula para longe das mãos). Se a peça entortou, provavelmente a mesa ainda estava morna — anote para a próxima.`,
    },
    {
      titulo: `Limpeza: suportes e brim`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Este é o passo que mais arranca pedaço da peça quando feito às pressas. Mostre como segurar a peça firme e puxar os suportes com o alicate começando pelas pontas, devagar. Circule garantindo que ninguém puxe com a mão nem perto do rosto.`,
      atividade: `Retire todos os suportes da sua peça usando o alicate de corte, começando pelas pontas e indo devagar das extremidades para o centro. Depois descole o brim da base com a unha ou a ponta da espátula. No fim, a peça deve estar livre de andaimes e da bordinha.`,
      gabarito: `Correto quando todos os suportes e o brim foram removidos e a peça ficou com o formato do modelo, sem partes arrancadas junto. Sobram apenas marquinhas nos pontos de contato — isso é normal e será resolvido no lixamento. Pedaços faltando indicam pressa.`,
    },
    {
      titulo: `Lixando em dupla`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para um conferir o trabalho do outro. Reforce a ordem das lixas (220, depois 400, depois 600) e os movimentos suaves. Peça que apoiem a peça no pano para não rolar. Um aluno lixa enquanto o outro passa o dedo conferindo se ficou liso, depois trocam.`,
      atividade: `Em dupla, lixe a sua peça começando pela lixa 220 nos pontos ásperos e nas marcas de suporte, depois passe a 400 e termine com a 600. Use movimentos suaves. A cada troca de lixa, peça ao colega para passar o dedo e dizer se já está mais liso. Depois troquem e ajude o colega.`,
      gabarito: `Sucesso quando a peça fica lisa ao toque nos pontos antes ásperos, com a sequência de lixas respeitada (220, 400, 600) e sem arranhões profundos de lixamento forçado. A confirmação do colega passando o dedo serve de prova. Superfície esbranquiçada e riscada indica força demais.`,
    },
    {
      titulo: `Real x Digital: a avaliação da peça`,
      tipo: `Roda de conversa`,
      tempo: `13 min`,
      guiaProfessor: `Esta é a entrega que fecha o mês e o ciclo do digital ao real. Peça que cada aluno abra o modelo no Blender e ponha a peça acabada ao lado. Distribua a Ficha de Avaliação. Conduza a roda pedindo a cada um que aponte um acerto e uma diferença, e valorize o olhar crítico em vez de só elogiar.`,
      atividade: `Abra o seu personagem no Blender e coloque a peça impressa acabada ao lado da tela. Preencha a Ficha de Avaliação dando uma nota de 1 a 5 para o quanto ficaram parecidos e escreva: UM detalhe que ficou igual ao digital e UM que ficou diferente (um detalhe que sumiu, uma superfície mais áspera, um tamanho). Na roda, compartilhe a sua avaliação.`,
      gabarito: `Concluído quando o aluno apresenta a peça acabada ao lado do modelo no Blender, preenche a ficha com uma nota justificada e cita pelo menos um ponto que combinou e um que diferiu do digital, falando na roda. Respostas vagas como "ficou legal" devem virar uma observação concreta sobre o que melhorar na próxima impressão.`,
    },
  ],
};
