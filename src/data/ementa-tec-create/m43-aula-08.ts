import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega e Portfólio dos Assets 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês montando a biblioteca final de novos assets 3D otimizados e prontos para o Unity, com prévias de portfólio renderizadas, documentação de cada peça e uma apresentação do conjunto.`,
  descricao: `Esta é a aula que fecha a etapa de modelagem no Blender e encerra a fase 3 de 4 do grande projeto do ano. Ao longo do mês o aluno planejou o cenário, modelou peças e itens, criou materiais e iluminação, renderizou, otimizou polígonos com LODs e exportou em FBX com UVs e texturas. Agora o trabalho não é criar coisas novas, e sim reunir, organizar e apresentar tudo como um profissional faria ao entregar uma biblioteca de assets para uma equipe de jogo.

O coração da aula é a ideia de portfólio. Um portfólio não é uma pasta cheia de arquivos soltos; é uma coleção curada, com nomes claros, prévias bonitas e uma ficha técnica que explica cada peça. Quando um estúdio recebe assets, a primeira pergunta é sempre a mesma: isto está pronto para entrar no jogo? O aluno responde a essa pergunta organizando a biblioteca em pastas, conferindo que os FBX abrem corretamente, gerando uma imagem de prévia de cada modelo e escrevendo a contagem de polígonos, o tamanho da textura e o uso pretendido.

A aula também tem um lado de comunicação. Cada aluno apresenta seu conjunto para a turma, explica as escolhas de otimização e mostra como os assets vão funcionar dentro do Unity. Esse momento de fala treina o vocabulário técnico (polígono, LOD, UV, FBX, textura) e a confiança de defender o próprio trabalho, habilidades tão importantes quanto modelar bem.

Ao final, cada aluno deve ter uma biblioteca final completa, com FBX otimizados, texturas, prévias de portfólio e uma documentação simples por peça, importada e conferida no Unity. É o pacote que será reaproveitado nos próximos meses, quando o foco passar para o jogo em si.`,
  materiais: [
    `Computadores com o Blender e o Unity instalados e abertos, um por aluno`,
    `Projetor ligado para o professor demonstrar o passo a passo na tela`,
    `Arquivos de exemplo: uma pasta de biblioteca de assets bem organizada, com FBX, texturas e prévias de portfólio`,
    `Modelo de ficha técnica (planilha ou documento) com campos de nome, polígonos, tamanho de textura e uso`,
    `Os assets já modelados, otimizados e exportados pelos alunos nas Aulas 1 a 7, salvos em pasta pessoal`,
    `Folha impressa de checklist de entrega (FBX abre, escala correta, textura ligada, prévia gerada, ficha preenchida)`,
  ],
  conceitosChave: [
    `Biblioteca de assets — coleção organizada de modelos 3D prontos para serem reutilizados em um ou mais jogos.`,
    `Portfólio — conjunto curado de trabalhos que mostra a qualidade e a evolução do aluno para outras pessoas.`,
    `Prévia de portfólio — imagem renderizada que apresenta cada asset de forma bonita e clara, como uma foto de produto.`,
    `Ficha técnica — documento curto que descreve cada peça com nome, contagem de polígonos, tamanho de textura e uso.`,
    `FBX — formato de arquivo que leva o modelo 3D, com UVs e materiais, do Blender para o Unity.`,
    `LOD (Level of Detail) — versões do mesmo modelo com menos polígonos para usar quando o objeto está longe da câmera.`,
    `Pipeline — caminho completo do asset, do Blender até funcionar dentro do jogo no Unity.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai ensinar a modelar; vai ensinar a entregar. O objetivo é transformar os assets soltos dos alunos em uma biblioteca profissional, com pastas nomeadas, prévias renderizadas, fichas técnicas e tudo conferido dentro do Unity. Antes da aula, abra a pasta de exemplo e repare na estrutura: uma pasta raiz chamada Biblioteca_Assets, com subpastas Modelos, Texturas e Previas, e um documento de fichas. Se você é iniciante, decore três telas do Blender: a janela 3D Viewport no centro, o painel Output Properties (ícone de impressora, à direita) onde se define a pasta e o formato da imagem, e o menu File maior que Export maior que FBX. No Unity, decore só duas coisas: a janela Project (embaixo) onde se arrastam os arquivos, e a janela Scene (centro) onde se confere o modelo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete a pasta de exemplo bem organizada e uma bagunçada. Pergunte qual delas um estúdio aceitaria e por quê. Conduza até as respostas: nomes claros, pastas separadas, prévias e fichas. Liste no quadro o que faz parte da entrega do mês.

Conteúdo novo guiado (15 min): no Blender, mostre como gerar uma prévia de portfólio. Selecione um modelo, posicione a câmera com o atalho Numpad 0 para ver pela câmera, ajuste a luz e abra Output Properties. Defina a pasta de saída clicando no campo Output e escolhendo a pasta Previas, e o formato como PNG. Aperte F12 para renderizar e use Image maior que Save As para salvar com nome igual ao do modelo. Em seguida, demonstre a exportação final: File maior que Export maior que FBX, marcando Selected Objects e conferindo a escala. No Unity, arraste o FBX e a textura para a janela Project e confira o modelo na Scene.

Mao na massa (25 min): cada aluno monta sua pasta Biblioteca_Assets com as subpastas, gera ao menos duas prévias em PNG, exporta os FBX faltantes e importa tudo no Unity, conferindo escala e textura. Em paralelo, preenche a ficha técnica de cada peça. Circule conferindo nomes de arquivo e a pasta de saída do render.

Desafio e compartilhar (10 min): cada aluno apresenta a biblioteca no projetor por dois minutos, mostrando uma prévia, a ficha de uma peça e o asset funcionando no Unity. A turma confere com o checklist.

## Como explicar de forma clara (linguagem para a idade)

Compare a biblioteca com uma loja de peças: cada produto tem foto, etiqueta e gaveta certa. A prévia é a foto do produto; a ficha técnica é a etiqueta com as informações; a pasta é a gaveta. Diga que entregar é como mandar um presente bem embrulhado: o conteúdo importa, mas a apresentação mostra cuidado. Para a contagem de polígonos, lembre que menos polígonos faz o jogo rodar mais leve, e que o LOD é como ter uma versão simples da peça para quando ela está longe e ninguém repara nos detalhes.

## Erros comuns e como ajudar

O erro mais comum é o FBX importar gigante ou minúsculo no Unity, por causa da escala. Mostre que no Blender vale aplicar a escala com Object maior que Apply maior que Scale antes de exportar. Outro erro é a prévia sair preta: quase sempre falta luz na cena ou a câmera está apontada para o lugar errado; use Numpad 0 para enxergar pela câmera. Muitos esquecem de definir a pasta de saída e não acham o PNG depois; pare a turma e faça todos conferirem o campo Output juntos. Há quem deixe nomes como modelo1.fbx e modelo2.fbx, impossíveis de entender; insista em nomes descritivos como Arvore_Pinheiro_LOD0.fbx. Por fim, alguns deixam a ficha técnica vazia; lembre que sem a etiqueta a peça não está entregue, e que a contagem de polígonos aparece no canto da tela ativando Statistics no menu de overlays do Viewport.`,
  exercicios: [
    {
      titulo: `Montando as gavetas da biblioteca`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Guie o aluno a criar a pasta raiz Biblioteca_Assets com as subpastas Modelos, Texturas e Previas. Confira que ninguém deixou arquivos soltos fora das subpastas e que os nomes estão corretos.`,
      atividade: `Crie no seu computador a pasta Biblioteca_Assets e, dentro dela, as subpastas Modelos, Texturas e Previas. Mova cada arquivo que você já tem para a subpasta correta.`,
      gabarito: `A pasta Biblioteca_Assets contém exatamente três subpastas (Modelos, Texturas, Previas), cada arquivo está na pasta certa, os FBX em Modelos, as imagens de textura em Texturas e nenhum arquivo solto sobra fora das subpastas.`,
    },
    {
      titulo: `A foto do produto`,
      tipo: `Prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe o aluno a posicionar a câmera com Numpad 0, definir a pasta de saída em Output Properties, escolher PNG e renderizar com F12. Confira se o render saiu com luz e foi salvo na pasta Previas com nome igual ao modelo.`,
      atividade: `Escolha um dos seus modelos, enquadre pela câmera com Numpad 0, defina a saída como PNG na pasta Previas, renderize com F12 e salve a imagem com o mesmo nome do modelo.`,
      gabarito: `O aluno gera um arquivo PNG iluminado e nítido na pasta Previas, com o objeto bem enquadrado e o nome igual ao do modelo, por exemplo Arvore_Pinheiro.png na pasta de prévias.`,
    },
    {
      titulo: `Preenchendo a etiqueta`,
      tipo: `Documentação`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como ler a contagem de polígonos ativando Statistics nos overlays do Viewport. Entregue o modelo de ficha técnica e oriente o preenchimento de pelo menos duas peças com nome, polígonos, tamanho de textura e uso.`,
      atividade: `Preencha a ficha técnica de pelo menos duas peças da sua biblioteca, anotando o nome do asset, a contagem de polígonos, o tamanho da textura e para que ele serve no jogo.`,
      gabarito: `Cada ficha tem os quatro campos preenchidos com dados reais, por exemplo nome Arvore_Pinheiro_LOD0, polígonos 1200, textura 1024x1024 e uso decoração de cenário florestal, sem campos em branco.`,
    },
    {
      titulo: `Do Blender ao Unity sem susto`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a exportação FBX com Selected Objects marcado e a aplicação de escala antes de exportar. No Unity, oriente o arraste do FBX e da textura para a janela Project e a conferência na Scene. Foque nos erros de escala e de textura desligada.`,
      atividade: `Exporte um asset em FBX a partir do Blender, importe no Unity arrastando para a janela Project e confira na Scene se a escala está certa e a textura aparece. Corrija o que estiver errado.`,
      gabarito: `O FBX importa no Unity com a escala correta (nem gigante nem minúsculo), a textura aparece aplicada no modelo dentro da Scene e o aluno consegue explicar que aplicou a escala no Blender antes de exportar para evitar o problema.`,
    },
    {
      titulo: `Apresentando o portfólio`,
      tipo: `Apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Organize a rodada de apresentações de dois minutos por aluno no projetor. Garanta que cada um mostre uma prévia, uma ficha técnica e o asset funcionando no Unity, usando o vocabulário do mês. Use o checklist de entrega para fechar o entregável.`,
      atividade: `Apresente sua biblioteca final para a turma em até dois minutos: mostre uma prévia de portfólio, leia a ficha técnica de uma peça e demonstre o asset funcionando no Unity, explicando uma escolha de otimização que você fez.`,
      gabarito: `O aluno apresenta a biblioteca completa cumprindo o checklist de entrega: pasta organizada, ao menos uma prévia em PNG, ficha técnica preenchida e o asset rodando no Unity, e usa corretamente ao menos dois termos do mês, como polígono, LOD, UV, FBX ou textura, ao explicar uma decisão de otimização.`,
    },
  ],
};
