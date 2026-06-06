import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Maya para o Roblox: trazendo meus modelos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Roblox Studio, exportar um modelo 3D feito no Maya no formato certo e importá-lo dentro de um projeto novo, vendo o modelo aparecer no jogo.`,
  descricao: `Neste mês as crianças vão transformar tudo o que criaram no Maya em um mundo de verdade dentro do Roblox. Para isso, primeiro elas precisam aprender a "mudar de casa": tirar o modelo do programa onde ele nasceu (o Maya) e levá-lo para o programa onde o jogo vai acontecer (o Roblox Studio). Esta primeira aula é justamente essa ponte. É um momento mágico, porque a criança vê o objeto que ela modelou aparecer num cenário que pode virar um jogo navegável.

O Roblox Studio é o programa gratuito da Roblox onde a gente constrói os jogos. Ele tem uma janela grande no meio (a área 3D, chamada de Viewport), onde enxergamos o mundo, e vários painéis ao redor com as ferramentas. Nesta aula o professor vai apresentar essa "mesa de trabalho" para as crianças com calma, sem assustar: mostramos onde fica o chão (o Baseplate), como girar a câmera e onde ficam os botões mais importantes na barra de cima.

A parte central da aula é a exportação e a importação do modelo. No Maya, a criança vai salvar o seu modelo num formato que o Roblox entende: o formato .fbx (efe-bê-xis). É como guardar um desenho num envelope que o Roblox sabe abrir. Depois, dentro do Roblox Studio, usamos o botão "Import 3D" para trazer esse envelope para dentro do jogo. Quando o modelo aparece na tela, é festa: o trabalho do Maya virou peça de jogo.

Como o professor pode ser iniciante em Roblox, o material explica cada clique: o nome dos menus, dos painéis e dos botões. O importante hoje não é deixar tudo bonito ou no lugar perfeito (isso vem nas próximas aulas), e sim vencer a ponte Maya → Roblox e garantir que cada criança veja pelo menos um modelo seu dentro do Studio.`,
  materiais: [
    `Computadores com o Roblox Studio já instalado e aberto (um por aluno, ou em duplas)`,
    `Computadores com o Maya aberto contendo um modelo simples já feito pela criança (ou um modelo de exemplo pronto)`,
    `Projetor ou TV ligado ao computador do professor para a demonstração passo a passo`,
    `Arquivos .fbx de exemplo já exportados (plano B caso a exportação do aluno falhe)`,
    `Uma conta Roblox para login no Studio (ou login do professor/escola já feito nas máquinas)`,
    `Crachás ou etiquetas para nomear pastas e arquivos sem confusão (ex.: "casa_da_ana")`,
    `Lista de presença e ficha rápida para anotar quem conseguiu importar o modelo`,
  ],
  conceitosChave: [
    `Roblox Studio — é o programa onde a gente constrói o jogo; é a nossa mesa de trabalho.`,
    `Exportar — é tirar o modelo de dentro do Maya e guardá-lo num arquivo para usar em outro lugar.`,
    `Importar — é trazer um arquivo de fora para dentro do Roblox, fazendo o modelo aparecer no jogo.`,
    `Formato .fbx — é o "envelope" que guarda o modelo 3D de um jeito que o Roblox sabe abrir.`,
    `Viewport — é a janela grande do meio, onde a gente enxerga o mundo em três dimensões.`,
    `Baseplate — é o chão quadriculado que já vem no projeto novo; é onde o mundo começa.`,
    `Explorer — é a listinha do lado direito que mostra todas as peças que existem no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você é a "ponte" entre dois programas. No Maya está o modelo; no Roblox Studio vai morar o jogo. Você não precisa dominar o Roblox: precisa saber abrir um projeto novo, achar o botão de importar e reconhecer quando o modelo apareceu. Faça você mesmo o passo a passo uma vez antes da aula, com calma, para não titubear na frente da turma.

Conceitos-chave em uma frase: exportar é "guardar num envelope" (o arquivo .fbx); importar é "abrir o envelope dentro do Roblox". A criança vê o modelo do Maya aparecer no mundo do jogo. Só isso já é vitória.

Tenha sempre um plano B: deixe arquivos .fbx prontos numa pasta. Se a exportação de alguma criança falhar, ela importa o seu de exemplo e ninguém fica de fora.

## Passo a passo da aula

AQUECIMENTO / REVISÃO (10 min). Pergunte: "onde a gente fez os modelos 3D?" (Maya). "E pra que serve um jogo?" (pra jogar, andar, brincar). Diga a missão do mês com empolgação: "vamos pegar nossos modelos e montar um mundo de verdade no Roblox!". Mostre no projetor o ícone azul do Roblox Studio e abra um projeto.

CONTEÚDO NOVO GUIADO (15 min). No projetor, demonstre devagar:
1. Abra o Roblox Studio e clique na aba "New" e depois no modelo "Baseplate". Aparece o chão quadriculado na Viewport (a janela grande do meio). Mostre que dá pra girar a câmera segurando o botão direito do mouse e olhar em volta.
2. Aponte o painel "Explorer" no lado direito (a listinha das peças). Se ele não estiver visível, abra na aba "View" (barra de cima) clicando em "Explorer".
3. Agora a exportação no Maya: com o modelo selecionado, vá em "File" e depois "Export Selection". Em "Files of type" escolha "FBX export". Dê um nome simples sem acento e sem espaço (ex.: "casa_da_ana") e salve numa pasta combinada. Diga: "guardamos o modelo no envelope .fbx".
4. De volta ao Roblox Studio, na barra de cima vá na aba "Home" (ou "Model"), clique em "Import 3D". Escolha o arquivo .fbx. O Roblox mostra uma janelinha de pré-visualização; clique em "Import". O modelo aparece na Viewport e na lista do Explorer. Comemore: "olha ele aqui dentro do jogo!".

MÃO NA MASSA (25 min). Cada criança repete os passos no próprio computador: abre Baseplate, exporta o modelo do Maya em .fbx e importa no Studio. Circule pela sala. Faça as crianças nomearem o arquivo antes de salvar. Quem terminar rápido pode importar um segundo modelo. Quem travar na exportação usa o .fbx de exemplo para não perder a parte da importação.

DESAFIO + COMPARTILHAR (10 min). Desafio: girar a câmera e achar o próprio modelo na Viewport, depois clicar no nome dele dentro do Explorer (a peça fica destacada). Cada criança mostra a tela e diz em voz alta o nome do seu modelo importado. Termine reforçando: "hoje atravessamos a ponte do Maya pro Roblox!".

## Como explicar para crianças

Use a analogia da mudança de casa: o modelo nasceu no Maya, mas vai morar no Roblox. Para levar, a gente coloca ele num "envelope" chamado .fbx. Dizer "exportar = guardar no envelope" e "importar = abrir o envelope lá dentro" funciona muito bem com 5 a 9 anos.

Chame a janela grande de "janela mágica onde a gente vê o mundo" (Viewport) e o chão quadriculado de "chão do mundo" (Baseplate). Fale devagar, mostre primeiro e só depois peça para fazerem. Celebre cada modelo que aparece na tela.

## Erros comuns e como ajudar

Salvar no formato errado: a criança esquece de escolher "FBX export" no Maya. Mostre de novo o campo "Files of type". Nomes com acento ou espaço dão erro: ensine nomes curtos com underline (casa_da_ana). Criança "perde" o arquivo: combine UMA pasta só para todos salvarem. O modelo some na Viewport: ela girou a câmera longe demais; ensine a clicar no nome dele no Explorer e apertar a tecla "F" para a câmera focar nele. Importar e não achar: o modelo pode ter vindo minúsculo ou gigante; hoje só localizamos no Explorer, o tamanho a gente arruma na próxima aula.`,
  exercicios: [
    {
      titulo: `Caça aos botões: conhecendo a mesa de trabalho`,
      tipo: `Reconhecimento guiado / oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor com a tela do Roblox Studio aberta. Vá apontando e pergunte o nome de cada parte. É um aquecimento para a turma decorar onde ficam as coisas, sem mexer em nada ainda.`,
      atividade: `Olhando para a tela do Roblox Studio, aponte e diga: onde fica a janela grande onde a gente vê o mundo? Onde fica o chão quadriculado? E a listinha de peças do lado direito?`,
      gabarito: `A janela grande do meio é a Viewport. O chão quadriculado é o Baseplate. A listinha de peças do lado direito é o Explorer.`,
    },
    {
      titulo: `Abrindo o meu mundo novo`,
      tipo: `Prática individual no computador`,
      tempo: `5 minutos`,
      guiaProfessor: `Cada criança abre o Roblox Studio e cria um projeto Baseplate. Confirme que apareceu o chão quadriculado na tela de todos antes de seguir.`,
      atividade: `No Roblox Studio, clique na aba "New" e depois escolha o modelo "Baseplate". Espere o chão quadriculado aparecer na janela grande.`,
      gabarito: `O caminho correto é aba "New" e depois "Baseplate". Sucesso é ver o chão quadriculado (Baseplate) aparecer na Viewport.`,
    },
    {
      titulo: `Guardando o modelo no envelope .fbx`,
      tipo: `Prática guiada (exportação no Maya)`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe de perto. O erro mais comum é não escolher o formato FBX ou usar nome com acento/espaço. Reforce a pasta combinada para todos salvarem no mesmo lugar.`,
      atividade: `No Maya, selecione o seu modelo, vá em "File" e depois "Export Selection". Em "Files of type" escolha "FBX export", dê um nome curto sem acento (ex.: "carro_do_leo") e salve na pasta combinada.`,
      gabarito: `O modelo deve ser exportado como arquivo .fbx, com nome curto sem acento e sem espaço, salvo na pasta combinada. O envelope (.fbx) está pronto para ser aberto no Roblox.`,
    },
    {
      titulo: `Trazendo o modelo para dentro do jogo`,
      tipo: `Prática individual (importação no Roblox)`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o botão "Import 3D" na barra de cima antes de soltarem a mão. Quem não conseguiu exportar usa o .fbx de exemplo para também praticar a importação. Confirme que o modelo aparece no Explorer.`,
      atividade: `No Roblox Studio, na barra de cima clique em "Import 3D", escolha o seu arquivo .fbx e clique em "Import". Procure o seu modelo na janela grande e na lista do Explorer.`,
      gabarito: `Após "Import 3D" e "Import", o modelo aparece na Viewport e também na lista do Explorer no lado direito. Encontrar o nome dele no Explorer confirma que a importação deu certo.`,
    },
    {
      titulo: `Desafio: achar e focar no meu modelo`,
      tipo: `Desafio + compartilhar`,
      tempo: `4 minutos`,
      guiaProfessor: `Encerramento. Ensine o truque da tecla "F" para focar a câmera. Peça que cada criança mostre a tela e diga o nome do modelo importado. Anote na ficha quem conseguiu.`,
      atividade: `Gire a câmera segurando o botão direito do mouse e ache o seu modelo. Depois clique no nome dele no Explorer e aperte a tecla "F" para a câmera focar nele. Mostre para a turma e diga o nome do seu modelo.`,
      gabarito: `Clicar no modelo no Explorer e apertar "F" faz a câmera voar até ele e centralizá-lo na Viewport. O modelo fica destacado (selecionado), provando que ele está dentro do jogo.`,
    },
  ],
};
