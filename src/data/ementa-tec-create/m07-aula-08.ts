import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Exportar e Entregar o Sprite Set",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Exportar o conjunto de sprites do Aseprite como PNG em tamanho original e ampliado, organizar os arquivos prontos para o Construct 3 e apresentar o sprite set finalizado para a turma.`,
  descricao: `Esta é a aula de fechamento do mês de pixel art. Durante quatro semanas o aluno desenhou no quadro 16x16, trabalhou forma, contorno e volume, dominou a paleta de cores, construiu o personagem e montou o conjunto completo de sprites. Agora chega a hora mais importante para quem cria games: tirar o trabalho de dentro do Aseprite e transformá-lo em arquivos PNG de verdade, prontos para virar peça de um jogo no Construct 3. Sem essa etapa, o desenho lindo fica preso no programa; com ela, o personagem ganha passaporte para o motor de jogo.

O foco da aula é a exportação correta. O aluno aprende que um mesmo sprite precisa, muitas vezes, de duas versões: uma em tamanho original (1x), fiel a cada pixel desenhado, e outra ampliada (por exemplo 4x ou 8x) com o redimensionamento sem suavização, para mostrar o trabalho em telas e apresentações sem ficar borrado. Entender a diferença entre essas duas saídas é o coração da aula. O professor vai mostrar onde fica o menu de exportação no Aseprite, quais opções marcar e como nomear cada arquivo com clareza.

Além de exportar, o aluno organiza tudo numa pasta bem arrumada do projeto, revisa a qualidade e a legibilidade de cada sprite (o personagem continua reconhecível em tamanho pequeno?), e prepara o conjunto para a entrega. A organização é tratada como parte do ofício: nomes consistentes, pastas separadas para o tamanho original e o ampliado, nada de arquivos soltos com nome "sem-titulo".

O fechamento é uma apresentação. Cada aluno mostra seu sprite set finalizado no projetor, explica uma decisão que tomou e conta como pretende usar aqueles sprites no jogo. Assim o entregável oficial do mês — o conjunto de sprites pronto para o Construct 3 — é consolidado e celebrado diante da turma.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, cada um com o arquivo .ase do conjunto de sprites montado na aula anterior`,
    `Projetor para a demonstração da exportação e para a roda de apresentações dos alunos`,
    `Arquivo .ase de exemplo já pronto (um personagem com 3 ou 4 sprites) para o professor demonstrar a exportação do zero`,
    `Pasta-modelo de projeto criada antes da aula, com subpastas "sprites_1x" e "sprites_4x", para os alunos copiarem a estrutura`,
    `Pendrive ou pasta de rede compartilhada para o aluno salvar e entregar o conjunto de sprites exportado`,
    `Folha impressa de checklist de qualidade (legibilidade, fundo transparente, nomes corretos) para cada aluno conferir antes de entregar`,
  ],
  conceitosChave: [
    `Exportar — gerar, a partir do arquivo do Aseprite, um arquivo de imagem (PNG) que outros programas, como o Construct 3, conseguem abrir e usar.`,
    `PNG — formato de imagem que guarda cada pixel com nitidez e aceita fundo transparente, ideal para sprites de jogos.`,
    `Tamanho original (1x) — a imagem exportada com exatamente o mesmo número de pixels do desenho, sem aumentar nem diminuir.`,
    `Ampliação (escala) — multiplicar o tamanho do sprite (2x, 4x, 8x) para mostrá-lo maior, sempre mantendo cada pixel quadrado e nítido.`,
    `Vizinho mais próximo (sem suavização) — modo de redimensionar que mantém as bordas duras do pixel art, sem deixar a imagem borrada.`,
    `Fundo transparente (alfa) — área "vazia" ao redor do personagem que deixa ver o cenário do jogo por trás, em vez de um quadrado branco.`,
    `Sprite set — o conjunto organizado de todos os sprites de um personagem ou jogo, com nomes e pastas padronizados, pronto para uso.`,
  ],
  treinamento: `## O que o professor precisa saber

Mesmo sem dominar o Aseprite, você consegue conduzir esta aula seguindo o caminho do menu "File" (Arquivo). O programa tem duas formas de tirar a arte para fora: "Export" (Exportar), que gera uma imagem direta, e "Save As" (Salvar como), que também pode salvar em PNG. Para esta aula, use sempre "File" e depois "Export Sprite Sheet" ou, para uma imagem única, "File" e depois "Export" (atalho Ctrl+Alt+S na maioria das versões). O ponto-chave que você precisa entender antes da aula é a diferença entre exportar em 1x e em escala maior. No Aseprite, ao exportar, há um campo "Scale" (Escala): deixe em 1 para o tamanho original e mude para 4 (ou 8) para a versão ampliada. O Aseprite já amplia pixel art sem borrar (modo vizinho mais próximo), então não há configuração extra de suavização a se preocupar. Garanta também que o fundo do desenho esteja transparente: no painel de camadas (Layers), o quadrado xadrez cinza e branco indica transparência. Teste tudo uma vez antes da aula, exportando o arquivo de exemplo nas duas escalas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): retome o mês inteiro. Pergunte: "O que já fizemos com nosso personagem?" Conduza a resposta passando pelo quadro 16x16, contorno, paleta e montagem. No projetor, abra o arquivo de exemplo no Aseprite e mostre os sprites prontos. Diga que hoje vamos "tirar a arte de dentro do programa" para ela poder virar jogo.

Conteúdo novo guiado (15 min): demonstre a exportação. No menu superior, clique em "File" e depois "Export". Na janela, aponte o campo "Scale" e exporte primeiro em 1 (tamanho original), nomeando o arquivo como "personagem_idle_1x.png". Repita mudando "Scale" para 4 e salvando como "personagem_idle_4x.png". Abra as duas imagens lado a lado e mostre que a 1x é pequenina e a 4x é grande e ainda nítida, sem borrão. Mostre o fundo transparente (o xadrez) e explique por que isso importa no Construct 3.

Mão na massa (25 min): cada aluno exporta o próprio conjunto. Oriente a criar duas pastas, "sprites_1x" e "sprites_4x", copiando a pasta-modelo. Eles exportam cada sprite nas duas escalas, com nomes claros e padronizados. Circule pela sala conferindo o campo "Scale", o nome do arquivo e o fundo transparente. Quem terminar usa o checklist impresso para revisar legibilidade e organização.

Desafio e compartilhar (10 min): roda de apresentações no projetor. Cada aluno abre sua pasta, mostra um sprite em 1x e em 4x, conta uma decisão de design e diz como vai usar aquilo no jogo. Celebre a entrega do sprite set do mês.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do "passaporte": "o desenho está preso dentro do Aseprite; exportar é dar a ele um passaporte em PNG para viajar até o Construct 3". Para as duas escalas, diga: "a versão 1x é o tamanho de verdade que o jogo usa; a 4x é a foto ampliada para a gente mostrar bonito no telão sem borrar". Compare o fundo transparente com um adesivo recortado: "queremos só o personagem colado na tela, não o quadradão branco em volta". Reforce a organização como hábito profissional: "quem nomeia bem os arquivos acha tudo na hora; nome 'sem-titulo-3' é o pesadelo de quem faz jogo".

## Erros comuns e como ajudar

O erro mais comum é esquecer de mudar o campo "Scale" e exportar tudo em 1x ou tudo em 4x; peça que o aluno fale em voz alta o número antes de salvar. Outro clássico é o fundo branco em vez de transparente: confira se há uma camada de fundo pintada de branco e mande apagá-la, deixando o xadrez. Muitos sobrescrevem o arquivo anterior porque repetem o mesmo nome; ensine o padrão "nome_acao_escala". Alguns salvam tudo solto na área de trabalho; insista nas duas pastas. Por fim, há quem amplie no programa errado e borre a arte; reforce que a ampliação correta acontece no próprio Aseprite, pelo campo "Scale", que mantém o pixel nítido.`,
  exercicios: [
    {
      titulo: `Exportando meu primeiro sprite em 1x`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe o caminho do menu na tela de cada aluno: "File" e depois "Export". Confira que o campo "Scale" está em 1 e que o aluno escolheu a pasta "sprites_1x". Reforce o nome do arquivo no padrão "nome_acao_1x.png".`,
      atividade: `Abra seu conjunto de sprites no Aseprite. Escolha um sprite do personagem e exporte-o em PNG no tamanho original (Scale 1), salvando na pasta "sprites_1x" com um nome claro, como "heroi_parado_1x.png".`,
      gabarito: `O aluno gera um PNG no tamanho exato do desenho (por exemplo 16x16 ou 32x32 pixels), com fundo transparente, salvo na pasta "sprites_1x" e com nome no padrão "nome_acao_1x.png". Sinal de acerto: a imagem abre nítida e do tamanho original.`,
    },
    {
      titulo: `A mesma arte ampliada em 4x`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como repetir a exportação mudando o campo "Scale" de 1 para 4. Deixe claro que o arquivo deve ir para outra pasta ("sprites_4x") e com outro nome, para não sobrescrever o de 1x. Peça que comparem as duas imagens lado a lado.`,
      atividade: `Exporte o mesmo sprite do exercício anterior agora ampliado em 4x (Scale 4), salvando na pasta "sprites_4x" como "heroi_parado_4x.png". Abra as duas versões lado a lado e confira se a ampliada continua nítida, sem borrão.`,
      gabarito: `O aluno entrega duas imagens do mesmo sprite: uma em tamanho original e outra quatro vezes maior, ambas nítidas e com fundo transparente, em pastas separadas. A versão 4x mantém os pixels quadrados e duros (sem suavização). Mostra que entendeu a diferença entre 1x e ampliação.`,
    },
    {
      titulo: `Revisão de qualidade em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua o checklist impresso. Oriente as duplas a abrirem as pastas um do outro e conferirem item por item: fundo transparente, nomes padronizados, pastas certas e legibilidade no tamanho 1x. Incentive um feedback gentil e específico.`,
      atividade: `Em dupla, troquem de computador e revisem o conjunto exportado do colega usando o checklist. Verifiquem: o fundo está transparente? Os nomes seguem o padrão? Cada arquivo está na pasta certa? O personagem continua reconhecível em 1x? Anotem dois elogios e um ajuste.`,
      gabarito: `Cada dupla preenche o checklist com observações reais e devolve dois pontos positivos e ao menos um ajuste concreto (por exemplo "renomear sem-titulo-2" ou "apagar o fundo branco do pulo"). O aluno corrige o item apontado. Boa revisão prova que ambos sabem reconhecer um sprite bem exportado.`,
    },
    {
      titulo: `Roda do sprite set finalizado`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda no projetor. Garanta que cada aluno abra a própria pasta e mostre um sprite em 1x e em 4x. Use uma frase-guia para os tímidos e conecte o trabalho ao próximo passo: usar esses sprites no Construct 3.`,
      atividade: `Apresente seu sprite set para a turma: abra a pasta, mostre um sprite em tamanho original e o mesmo ampliado, conte uma decisão de design que você tomou no mês e diga como pretende usar esses sprites no seu jogo no Construct 3.`,
      gabarito: `O aluno mostra os arquivos organizados, exibe o mesmo sprite nas duas escalas, cita pelo menos uma decisão de design consciente (cor, pose, contorno) e relaciona o conjunto ao uso futuro no Construct 3. Resposta forte conecta a jornada do mês ao próximo passo do jogo.`,
    },
    {
      titulo: `Entrega do conjunto pronto para o Construct 3`,
      tipo: `projeto curto`,
      tempo: `13 minutos`,
      guiaProfessor: `Esta atividade consolida o entregável do mês. Confira a estrutura final de pastas, a presença das duas escalas para cada sprite e os nomes padronizados. Acompanhe a cópia para o pendrive ou pasta compartilhada e marque a entrega de cada aluno.`,
      atividade: `Finalize seu sprite set: garanta que todos os sprites do personagem estão exportados em 1x e em 4x, nas pastas "sprites_1x" e "sprites_4x", com nomes padronizados. Confira o checklist completo e copie a pasta do projeto para o local de entrega combinado.`,
      gabarito: `A entrega contém todos os sprites do personagem em duas versões (1x e 4x), separados nas pastas corretas, com fundo transparente e nomes no padrão "nome_acao_escala". O checklist está todo marcado e a pasta foi copiada para a entrega. Esse conjunto é o sprite set oficial do mês, pronto para o Construct 3.`,
    },
  ],
};
