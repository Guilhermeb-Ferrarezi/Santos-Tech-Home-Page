import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Exportando do jeito certo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Exportar o próprio modelo 3D do Blender no formato certo, com a escala e as transformações ajustadas, e salvá-lo numa pasta organizada conferindo se o arquivo apareceu mesmo.`,
  descricao: `Na aula passada as crianças entenderam que chegou a hora de tirar o modelo de dentro do Blender e levá-lo para outro lugar — é a "despedida" do Blender. Hoje a turma coloca a mão na massa de verdade: cada aluno vai pegar a própria criação e exportá-la, ou seja, fazer uma cópia do modelo num arquivo separado que outros programas conseguem abrir. Exportar é como tirar o bolo da forma: o bolo continua sendo seu, mas agora ele sai num formato que dá para servir no prato.

A grande ideia da aula é fazer essa exportação do jeito certo. "Do jeito certo" significa três cuidados simples. Primeiro, escolher o formato do arquivo — vamos usar o formato OBJ, que é como uma "caixa universal" que muitos programas entendem, inclusive o Roblox mais para frente. Segundo, cuidar da escala, para o modelo não sair gigante (do tamanho de um prédio) nem minúsculo (do tamanho de uma formiga). Terceiro, aplicar as transformações, que é um botãozinho que "congela" o tamanho, a posição e o giro do objeto antes de exportar, para ele não sair torto ou deformado.

Esta aula é toda prática e guiada, um passo de cada vez, todos juntos. O professor mostra no projetor e as crianças repetem no próprio computador. Elas vão selecionar o modelo (clicar nele para ele ficar com a borda laranja), abrir o menu de exportar, marcar as opções certinhas, escolher uma pasta organizada para salvar e, por fim, abrir essa pasta para conferir com os próprios olhos que o arquivo está lá. Conferir é parte do trabalho de quem cria: não basta clicar em salvar, a gente abre a gaveta para ver se a coisa entrou mesmo.

Ao final, cada criança terá um arquivo do seu modelo guardado numa pasta com nome claro, pronto para a próxima etapa do mês — levar esse modelo para o Roblox. O recado que fica é poderoso para crianças de 5 a 9 anos: o trabalho delas não some quando o programa fecha; ele vira um arquivo que pode viajar para outros lugares. Aprender a exportar com capricho é o primeiro passo para um dia mostrar a criação para o mundo.`,
  materiais: [
    `Computadores com o Blender aberto e o modelo 3D de cada criança já carregado na cena`,
    `Projetor ou TV grande espelhando a tela do professor, para mostrar onde clicar passo a passo`,
    `Uma pasta já criada na área de trabalho de cada computador, com nome combinado (por exemplo "Meus Modelos 3D")`,
    `Exemplo pronto: um modelo simples já exportado pelo professor, para mostrar como fica o arquivo na pasta`,
    `Slide ou cartaz grande com o passo a passo ilustrado da exportação (selecionar, exportar, escala, salvar, conferir)`,
    `Cartão de conferência por criança: uma listinha de "consegui?" para marcar cada etapa`,
    `Etiquetas ou crachás com o nome de cada criança para nomear o arquivo (por exemplo "casa-da-ana")`,
  ],
  conceitosChave: [
    `Exportar — fazer uma cópia do seu modelo num arquivo separado que outros programas conseguem abrir.`,
    `Formato OBJ — uma "caixa universal" de arquivo 3D que muitos programas entendem, escolhida pela gente para exportar.`,
    `Escala — o tamanho do modelo; ajustamos para ele não sair nem gigante nem minúsculo.`,
    `Aplicar transformações — apertar um botão que "congela" o tamanho, o giro e a posição antes de exportar, para o modelo não sair torto.`,
    `Selecionar — clicar no modelo para ele ficar com a borda laranja, mostrando que é nele que vamos mexer.`,
    `Pasta — a "gaveta" do computador onde guardamos o arquivo com um nome fácil de achar.`,
    `Conferir — abrir a pasta depois de salvar e ver com os próprios olhos que o arquivo apareceu mesmo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender para esta aula. Precisa saber fazer um caminho curto: selecionar o objeto, ir no menu "File" (Arquivo), entrar em "Export" (Exportar), escolher "Wavefront (.obj)", ajustar duas opções e salvar numa pasta. Faça você mesmo uma vez antes da aula, sem crianças, para pegar o ritmo.

Detalhes que salvam a aula: para selecionar o modelo, clique uma vez nele no palco (Viewport 3D) e veja a borda laranja aparecer. Antes de exportar, é ótimo "aplicar as transformações": com o objeto selecionado, aperte "Ctrl + A" e escolha "All Transforms" (Todas as Transformações) — isso congela tamanho, posição e giro. Depois vá em "File" maior que "Export" maior que "Wavefront (.obj)". Na janela que abre, do lado direito há um painel de opções; o mais importante é o campo "Scale" (Escala), que deve ficar em 1.00 para o modelo sair no tamanho que você vê. Em cima dessa janela você escolhe a pasta e digita o nome do arquivo. Combine um padrão de nome simples, tudo minúsculo e sem espaço, como "casa-da-ana".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, retome a aula 1 perguntando "por que a gente precisa tirar o modelo de dentro do Blender?". Aceite respostas como "para levar pro Roblox". Mostre no projetor o seu exemplo pronto: abra a pasta e mostre o arquivo já exportado. Diga: "Hoje cada um vai fazer isso com o seu próprio modelo, com capricho."

Conteúdo novo guiado (15 min): No projetor, faça o caminho completo devagar, narrando cada clique. 1. Clique no modelo no palco e mostre a borda laranja: "isto é selecionar". 2. Aperte "Ctrl + A" e clique em "All Transforms": "isto congela o tamanho e o giro". 3. Vá em "File" (Arquivo), depois "Export" (Exportar), depois "Wavefront (.obj)". 4. Mostre o campo "Scale" (Escala) à direita e confirme que está 1.00. 5. Em cima, escolha a pasta "Meus Modelos 3D" e digite o nome, por exemplo "robô-do-pedro". 6. Clique no botão azul "Export Wavefront OBJ". Por fim, minimize o Blender e abra a pasta para mostrar o arquivo lá dentro: "conferimos, está aqui!".

Mão na massa (25 min): Agora cada criança refaz no seu computador, um passo de cada vez, junto com você. Diga um comando, espere todos fazerem, confira pela sala e só então passe ao próximo: "selecionem o modelo... apertem Ctrl + A e cliquem em All Transforms... abram File, Export, Wavefront... vejam se a Escala está 1.00... escolham a pasta... digitem o nome... cliquem em Export". Termine pedindo que cada um abra a pasta e ache o próprio arquivo. Use o cartão de conferência para marcarem cada etapa que conseguiram.

Desafio e compartilhar (10 min): Faça o desafio "Mostre seu arquivo". Cada criança abre a pasta e mostra para o colega do lado o arquivo com o nome dela. Pergunte à turma: "alguém ficou com o modelo gigante ou minúsculo?" e use isso para reforçar a escala 1.00. Feche celebrando: "todo mundo exportou de verdade o seu próprio modelo!".

## Como explicar para crianças

Use a analogia do bolo: o Blender é a cozinha, o modelo é o bolo, e exportar é tirar o bolo da forma para ele caber num prato que dá para levar para outra festa. O formato OBJ é o prato que todo mundo aceita. A escala é o tamanho do bolo: a gente não quer um bolo do tamanho de uma casa nem do tamanho de uma moeda. Aplicar transformações é "deixar o bolo firme" antes de tirar da forma, para ele não desmontar. E a pasta é a sacola onde guardamos o bolo com uma etiqueta com o nome, para achar depois.

## Erros comuns e como ajudar

A criança esquece de selecionar e o menu exporta tudo ou nada: peça que cliquem no modelo até a borda laranja aparecer antes de exportar. O modelo sai gigante ou minúsculo: quase sempre é a Escala diferente de 1.00 ou as transformações não aplicadas; volte e confira o campo "Scale" e refaça o "Ctrl + A" maior que "All Transforms". A criança não acha a pasta na hora de salvar: combine antes que todos salvem na mesma pasta da área de trabalho e mostre o caminho no projetor. O nome do arquivo fica confuso ou com espaço: ofereça um padrão pronto, tudo minúsculo e com hífen, como "gato-da-bia". A criança clica em salvar mas não confere: reforce sempre o último passo de abrir a pasta e achar o arquivo com os próprios olhos.`,
  exercicios: [
    {
      titulo: `Caça ao botão de exportar`,
      tipo: `Roda de observação`,
      tempo: `5 minutos`,
      guiaProfessor: `Com o Blender no projetor, mostre o menu "File" (Arquivo) aberto e peça que as crianças encontrem a palavra "Export" (Exportar). Leia junto as opções. O objetivo é só localizar o caminho antes de usá-lo, sem pressa.`,
      atividade: `Olhe a tela do projetor. Ache no menu de cima a palavra "File" (Arquivo) e, dentro dela, a palavra "Export" (Exportar). Aponte onde ela está.`,
      gabarito: `A criança aponta corretamente o item "Export" dentro do menu "File". Acerto = localizar o caminho File maior que Export. Erro comum: confundir com "Import" (Importar), que fica logo acima; mostre que exportar é "mandar para fora" e importar é "trazer para dentro".`,
    },
    {
      titulo: `Seleciono o meu modelo`,
      tipo: `Prática no computador`,
      tempo: `5 minutos`,
      guiaProfessor: `No computador de cada criança, peça que cliquem uma vez no próprio modelo no palco (Viewport 3D) e confiram a borda laranja. Caminhe pela sala conferindo. Lembre que exportar sem selecionar dá problema.`,
      atividade: `No seu computador, clique uma vez no seu modelo no meio da tela. Veja ele ficar com uma bordinha laranja: isso quer dizer que ele está selecionado e pronto.`,
      gabarito: `O modelo aparece com contorno laranja, indicando que está selecionado. Acerto = a criança seleciona o objeto certo. Erro comum: clicar no chão vazio (nada fica laranja) ou na luz/câmera; oriente a clicar bem em cima do modelo dela.`,
    },
    {
      titulo: `Congelo com Ctrl + A`,
      tipo: `Prática guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Com o modelo selecionado, mostre no projetor a tecla de atalho "Ctrl + A" e a opção "All Transforms" (Todas as Transformações) que aparece na listinha. Explique que isso "congela" tamanho, giro e posição. Faça todos juntos, um passo de cada vez.`,
      atividade: `Com o seu modelo selecionado (bordinha laranja), aperte as teclas "Ctrl" e "A" juntas. Na listinha que aparecer, clique em "All Transforms". Pronto: o tamanho e o giro do seu modelo ficaram congelados.`,
      gabarito: `A criança aperta Ctrl + A e escolhe "All Transforms"; a listinha some sem erro. Acerto = aplicar as transformações antes de exportar. Erro comum: o cursor estar fora do palco e o atalho não funcionar; peça que passem o mouse para cima do modelo antes de apertar as teclas.`,
    },
    {
      titulo: `Escala certa: nem gigante, nem formiga`,
      tipo: `Prática no computador`,
      tempo: `5 minutos`,
      guiaProfessor: `Abra com a turma a janela de exportar (File maior que Export maior que Wavefront .obj). Mostre o painel de opções à direita e o campo "Scale" (Escala). Peça que confiram se está 1.00. Explique que esse número é o "tamanho certo" para o modelo não sair errado.`,
      atividade: `Na janela de exportar, olhe do lado direito o campo "Scale" (Escala). Confira se o número é 1.00. Se estiver diferente, peça ajuda para deixar em 1.00, para o seu modelo não sair gigante nem minúsculo.`,
      gabarito: `O campo "Scale" mostra 1.00 antes de exportar. Acerto = a criança localiza e confere a escala correta. Erro comum: não achar o painel de opções (ele às vezes vem recolhido); clique na setinha para abrir e mostre o campo Scale para todos.`,
    },
    {
      titulo: `Salvar, conferir e mostrar`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Etapa que fecha a aula. Cada criança escolhe a pasta combinada, digita o nome do arquivo no padrão (minúsculo e com hífen), clica em "Export Wavefront OBJ" e depois abre a pasta para achar o próprio arquivo. Em seguida mostra para o colega do lado. Use o cartão de conferência para marcarem cada passo.`,
      atividade: `Termine sua exportação: escolha a pasta "Meus Modelos 3D", digite o nome do seu arquivo (tudo em letra pequena e com hífen, como "casa-da-ana") e clique no botão "Export Wavefront OBJ". Depois abra a pasta, ache o seu arquivo e mostre para o colega do lado.`,
      gabarito: `O arquivo .obj aparece na pasta combinada com o nome no padrão certo, e a criança consegue mostrá-lo. Acerto = exportar, salvar no lugar certo e conferir o arquivo. Exemplo válido: na pasta "Meus Modelos 3D" surge "casa-da-ana.obj". Erro comum: salvar fora da pasta ou esquecer de conferir; peça sempre o último passo de abrir a pasta e achar o arquivo com os próprios olhos.`,
    },
  ],
};
