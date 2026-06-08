import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega: Personagens 3D Prontos e Galeria",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer o render final, exportar o modelo do personagem em voxel, organizar os arquivos da etapa 1/2 do projeto e apresentar o resultado na galeria da turma, comparando o personagem 3D com o sprite original do jogo.`,
  descricao: `Esta é a aula que fecha o mês inteiro de modelagem em voxel. Ao longo das sete aulas anteriores, cada aluno pegou um personagem do próprio jogo 2D e o transformou em um modelo tridimensional: construiu o corpo bloco por bloco, adicionou itens e acessórios, montou o cenário, pintou com a paleta e refinou os detalhes, as texturas e a pose. Agora chega o momento mais importante de todos: deixar o personagem oficialmente pronto, transformá-lo em arquivos que ficam guardados e mostrá-lo para a turma. O entregável do mês é exatamente este — os personagens 3D prontos.

O foco técnico da aula é a finalização em três partes. Primeiro, o render final: o aluno enquadra a câmera, ajusta a iluminação e gera uma imagem bonita do personagem para a galeria. Depois, a exportação: o MagicaVoxel salva o trabalho em dois lugares diferentes — o arquivo do projeto (.vox), que guarda os voxels editáveis para continuar mexendo depois, e o arquivo de exportação (.obj), a "fotografia tridimensional" do modelo que será usada mais adiante na impressão. Por fim, a organização: cada aluno arruma tudo em uma pasta com nome claro, separando o material da etapa 1/2 do projeto para não se perder nada.

A aula termina com a parte mais especial: a galeria. Cada aluno apresenta o personagem voxel para a turma e o coloca lado a lado com o sprite original do jogo. Essa comparação é o coração do encerramento, porque mostra de forma concreta a viagem que o aluno fez do 2D para o 3D — o mesmo personagem que antes era um desenho de pixels na tela agora existe como um objeto que poderá ser impresso de verdade. Os colegas dão um retorno positivo e específico, e a turma percebe o quanto cada projeto evoluiu.

Como esta é a última aula do tema voxel deste mês, o professor deve garantir que NENHUM aluno termine sem o render salvo, o arquivo .obj exportado e a pasta organizada com backup. Esse é o critério de sucesso do mês e a base para a próxima etapa da trilha, quando os modelos serão fatiados e impressos.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e o projeto do personagem de cada aluno já aberto, um por aluno`,
    `Projetor ou TV para a demonstração guiada do render e da exportação e para a galeria final`,
    `Uma pasta padrão criada em cada computador (por exemplo "Personagens-3D-Etapa1") para receber os arquivos`,
    `Arquivo de exemplo já finalizado pelo professor (um .vox, um render .png e um .obj exportado) para mostrar o resultado esperado`,
    `Imagem do sprite original de cada personagem, impressa ou em arquivo, para a comparação 2D x 3D na galeria`,
    `Pen drive ou pasta na rede para o backup dos arquivos finalizados da turma`,
    `Impressora 3D ligada (ou foto/vídeo dela) para mostrar o destino real do arquivo .obj, quando disponível`,
  ],
  conceitosChave: [
    `Render — imagem final gerada do modelo, com câmera e luz ajustadas, usada para mostrar o personagem bonito na galeria.`,
    `Exportar — gerar um arquivo novo, em outro formato, para usar o modelo fora do MagicaVoxel, como na impressora.`,
    `Salvar — guardar o projeto editável (.vox) para continuar mexendo nos voxels mais tarde.`,
    `.vox — formato do projeto do MagicaVoxel, que mantém cada voxel editável e a paleta de cores.`,
    `.obj — formato de modelo 3D universal, lido por fatiadores e impressoras 3D; é parte do entregável do mês.`,
    `Sprite — desenho em pixels do personagem no jogo 2D; é a referência original que o modelo voxel recria em 3D.`,
    `Entregável — o resultado final combinado para o mês; aqui, o personagem 3D pronto, com render, arquivo exportado e pasta organizada.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de finalizar, guardar e apresentar, não de criar peça nova. O modelo do aluno já está pronto; o trabalho é gerar uma imagem bonita dele, exportar os arquivos certos e organizar tudo. O MagicaVoxel separa três ações importantes. "Salvar" (atalho Ctrl+S) guarda o projeto editável .vox. O "render" gera uma imagem .png a partir da câmera atual. "Exportar" cria o arquivo .obj, uma malha de triângulos pronta para a impressora, que não dá mais para editar voxel por voxel. Antes da aula, faça você mesmo o caminho completo com um modelo de teste para conhecer cada botão. Você não precisa dominar o programa: basta saber que o painel de exportação fica no canto inferior direito, que o botão de captura da imagem fica próximo à área de visualização e que a pasta de destino e o padrão de nome (nome do aluno mais nome do personagem, sem espaços nem acentos no nome do arquivo, por exemplo "ana-dragao") já devem estar combinados.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o projeto do personagem e aperte Ctrl+S. Faça a revisão: o que é salvar, o que é render e o que é exportar? Mostre no projetor o seu exemplo finalizado (o .vox, a imagem .png e o .obj) e diga: "hoje cada um vai gerar estes três resultados."

Conteúdo novo guiado (15 min): no projetor, abra um modelo. Primeiro gire a câmera com o botão direito do mouse para enquadrar bem o personagem e dê um zoom com a roda do mouse. Mostre o painel de iluminação (Render) e ajuste a luz para o modelo ficar nítido. Gere a imagem com o botão de captura e salve o .png na pasta padrão. Em seguida, salve com Ctrl+S. Por último, no canto inferior direito, no painel "Export", clique no botão "obj", escolha a pasta padrão, digite o nome combinado e confirme. Mostre que aparecem três arquivos juntos (.obj, .mtl e a textura .png) e que eles andam sempre na mesma pasta. Abra a pasta no Windows para todos verem.

Mão na massa (25 min): cada aluno repete o caminho no seu computador. Roteiro na lousa: 1) enquadrar a câmera e a luz; 2) gerar o render e salvar a imagem; 3) salvar o projeto com Ctrl+S; 4) clicar em "obj" no painel Export; 5) escolher a pasta padrão e digitar o nome (aluno-personagem); 6) abrir a pasta e conferir os arquivos. Circule pela sala conferindo um por um. Quando o aluno terminar, peça o backup no pen drive ou na pasta da rede.

Desafio e compartilhar (10 min): monte a galeria. Cada aluno mostra o render do personagem ao lado do sprite original do jogo e conta uma escolha que fez do 2D para o 3D. A turma dá um retorno positivo. Feche dizendo que o entregável do mês está pronto e que esses arquivos virarão peças impressas na próxima etapa.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga que o render é "tirar a foto oficial" do personagem, com a melhor pose e a melhor luz. Explique que o .vox é "o caderno onde você ainda pode apagar e mudar" e o .obj é "a foto 3D que a impressora entende". Reforce que salvar, renderizar e exportar são três coisas diferentes e que é preciso fazer as três. Na galeria, valorize a viagem do 2D para o 3D: "esse mesmo personagem começou como um desenho de pixels no jogo de vocês e agora é um objeto que dá para imprimir." Comemore o fim do mês.

## Erros comuns e como ajudar

O erro mais comum é o aluno só salvar o .vox e achar que terminou; lembre que o entregável também inclui o render e o .obj. Outro é gerar o render com a câmera mal enquadrada ou escura; oriente a girar a vista com o botão direito e clarear a luz antes de capturar. Muitos usam acentos, espaços ou nomes repetidos no arquivo, o que confunde na impressão; padronize o nome. Alguns escolhem a pasta errada e depois não acham o arquivo; sempre abra a pasta no Windows para confirmar. Há quem mova só o .obj e esqueça o .mtl e a textura .png, perdendo as cores; ensine a copiar tudo junto. Na galeria, alguns esquecem de comparar com o sprite; tenha as imagens originais à mão. Por fim, garanta o backup: um arquivo só no computador da escola pode se perder.`,
  exercicios: [
    {
      titulo: `A foto oficial do personagem`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem. Mostre como girar a câmera com o botão direito do mouse, dar zoom com a roda e clarear a luz no painel Render antes de capturar a imagem. Confirme que cada um salvou o .png na pasta padrão.`,
      atividade: `Enquadre bem o seu personagem girando a câmera com o botão direito do mouse e dando zoom com a roda. Ajuste a luz para ele ficar nítido, gere o render e salve a imagem .png na pasta padrão com o seu nome e o do personagem.`,
      gabarito: `O aluno gerou uma imagem .png em que o personagem aparece inteiro, bem enquadrado e com luz suficiente para ver as cores. O arquivo está salvo na pasta padrão com o nome no formato aluno-personagem, sem acentos nem espaços.`,
    },
    {
      titulo: `Salvar, renderizar e exportar`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Reforce que são três ações diferentes. Confirme que cada aluno apertou Ctrl+S, gerou a imagem e depois clicou em "obj" no painel Export, no canto inferior direito. Verifique que o painel Export está visível na tela.`,
      atividade: `Faça as três finalizações na ordem: 1) salve o projeto com Ctrl+S; 2) confira se o render .png foi salvo; 3) no painel Export, clique em "obj" e exporte para a pasta padrão. Anote no caderno qual ação criou cada arquivo.`,
      gabarito: `Ctrl+S cria ou atualiza o projeto editável .vox. O botão de captura gera a imagem .png do render. O botão "obj" no painel Export gera o .obj (mais o .mtl e a textura) para impressão. São três ações distintas e todas precisam ser feitas.`,
    },
    {
      titulo: `Conferência da pasta em dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e mande trocar de computador. Coloque a lista de verificação na lousa. Circule ouvindo as conferências e intervenha só quando a dupla travar. O objetivo é um aluno validar o trabalho do outro antes da entrega.`,
      atividade: `Troque de computador com o colega e confira a pasta dele pela lista: 1) existe o render .png? 2) existe o arquivo .obj? 3) o .obj, o .mtl e a textura estão juntos na mesma pasta? 4) o projeto .vox foi salvo? 5) os nomes seguem o padrão aluno-personagem, sem acentos nem espaços? Aponte o que faltar.`,
      gabarito: `A conferência está correta quando a dupla confirma os cinco itens: render .png, arquivo .obj, os três arquivos de exportação juntos, o .vox salvo e os nomes no padrão combinado. Qualquer item faltando deve ser corrigido antes de seguir para a galeria.`,
    },
    {
      titulo: `Etapa 1/2 organizada e com backup`,
      tipo: `Projeto curto`,
      tempo: `9 min`,
      guiaProfessor: `Este é o fechamento técnico do mês e não pode falhar. Acompanhe aluno por aluno até cada um concluir o backup. Nenhum aluno deve terminar sem o pacote completo guardado em dois lugares. Combine claramente que esta é a etapa 1/2 do projeto.`,
      atividade: `Monte o pacote da etapa 1/2 do seu projeto: deixe na pasta padrão o projeto .vox, o render .png e os três arquivos de exportação (.obj, .mtl e textura), todos com nome correto. Depois copie a pasta inteira para o pen drive ou a pasta da rede como backup e confirme com o professor.`,
      gabarito: `O pacote está completo quando contém o .vox, o render .png e os três arquivos de exportação, todos na mesma pasta com nome padronizado, mais uma cópia de segurança em outro local. Com isso, o entregável do mês — o personagem 3D pronto, etapa 1/2 — está concluído.`,
    },
    {
      titulo: `Galeria: do sprite ao voxel`,
      tipo: `Roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Organize a galeria com os renders no projetor e o sprite original ao lado. Cada aluno fala cerca de um minuto. Modele a apresentação antes com o seu exemplo. Garanta que a turma dê um retorno positivo e específico e que todos comparem o 3D com o sprite original.`,
      atividade: `Apresente o seu personagem na galeria: mostre o render ao lado do sprite original do jogo, diga o nome do personagem e conte uma escolha que você fez ao passar do 2D para o 3D (uma cor, um acessório, uma forma). Depois, dê um elogio específico ao trabalho de um colega.`,
      gabarito: `Não há resposta única: a apresentação está completa quando o aluno mostra o render ao lado do sprite, nomeia o personagem, justifica ao menos uma escolha na passagem do 2D para o 3D e oferece um retorno positivo e específico a um colega. O professor valida a participação e a comparação entre o sprite e o voxel, não uma resposta certa.`,
    },
  ],
};
