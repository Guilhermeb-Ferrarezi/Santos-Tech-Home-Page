import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Nossa Galeria de Assets 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Consolidar o entregável do mês: cada criança finaliza, nomeia e salva os seus próprios assets 3D, organiza uma galeria pessoal no computador e apresenta as criações para a turma.`,
  descricao: `Esta é a última aula do mês e tem cara de festa! Durante quatro semanas as crianças aprenderam a planejar, montar, colorir, dar brilho e ajustar o tamanho de objetos 3D no Blender. Agora chegou a hora de juntar tudo, deixar cada modelo bem acabado e guardado, e mostrar o trabalho com orgulho. É como arrumar os desenhos mais bonitos numa pasta especial antes de pendurar na parede da sala.

O coração da aula é a organização. Cada criança vai abrir os arquivos que fez no mês, conferir se está tudo certo, dar um nome claro para cada modelo (como "robo_azul" ou "arvore_magica") e salvar tudo numa pasta só dela, a "Minha Galeria 3D". Quando os arquivos têm nomes bons e ficam no lugar certo, fica fácil achar depois e usar esses assets na próxima etapa do projeto, que é montar o jogo em Voxel Art no Roblox.

Não criamos nada novo do zero nesta aula. O trabalho é de finalização e cuidado: salvar no formato certo, organizar a pasta e deixar a galeria pronta. Esse hábito de guardar bem o trabalho é uma das coisas mais importantes que um criador de games aprende. Um artista profissional sempre sabe onde estão os seus arquivos.

No fim, fazemos uma mostra. Cada criança gira o seu modelo na tela, conta o nome e a parte mais legal, e a turma aplaude. Sai todo mundo da sala com a galeria pessoal completa, salva e bonita, prontinha para a aventura seguinte do projeto. É um momento de celebrar o quanto cada um evoluiu.`,
  materiais: [
    `Computadores com o Blender aberto e os arquivos que cada criança fez durante o mês já carregados na máquina`,
    `Projetor ou TV grande para a mostra final, ligado no computador de cada criança na hora de apresentar`,
    `Uma pasta criada na área de trabalho de cada computador, vazia, com o nome "Minha Galeria 3D"`,
    `Exemplos prontos: dois ou três modelos do professor já nomeados e salvos, para mostrar como fica uma galeria organizada`,
    `Cartão impresso com a "regra dos nomes bons" (letras minúsculas, sem espaço, com a cor ou o tipo do objeto)`,
    `Adesivos ou carimbos de "Artista 3D" para premiar cada galeria finalizada`,
    `Cronômetro ou ampulheta visível para controlar o tempo de cada apresentação`,
  ],
  conceitosChave: [
    `Asset — uma pecinha 3D que você criou e que pode usar depois no seu jogo, como um robô ou uma árvore.`,
    `Galeria — a coleção de todos os seus modelos guardados juntos num lugar só, como um álbum de figurinhas.`,
    `Salvar — guardar o seu trabalho no computador para ele não se perder e você abrir de novo depois.`,
    `Nome de arquivo — o apelido que damos para cada modelo, para a gente achar fácil (ex.: "robo_azul").`,
    `Pasta — a "caixinha" do computador onde a gente junta os arquivos parecidos no mesmo lugar.`,
    `Finalizar — deixar o trabalho pronto e bonito, conferindo se não falta nada antes de guardar.`,
    `Mostra — o momento de apresentar a sua criação para a turma e ouvir os aplausos dos amigos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender para dar esta aula. O trabalho técnico é simples: abrir arquivos, salvar com um nome bom e organizar uma pasta. O foco é o cuidado e a celebração, não modelar nada novo.

Salvar no Blender se faz pelo menu "File" (Arquivo), no canto superior esquerdo. "Save" (Salvar) guarda por cima do arquivo atual; "Save As..." (Salvar Como) abre uma janela para escolher o nome e a pasta. O atalho é Ctrl+S. Os arquivos do Blender terminam em ".blend". Para girar o modelo e mostrá-lo, segure o botão do meio do mouse (a rodinha) e mexa o mouse; isso roda a câmera ao redor do objeto. Se a criança apertar a tecla "." (ponto) do teclado numérico, a câmera centraliza no objeto selecionado.

Antes da aula, abra a pasta "Minha Galeria 3D" na área de trabalho de cada computador e deixe os arquivos do mês já carregados. Isso economiza muito tempo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Sente a turma em roda. Diga que hoje é dia de arrumar a galeria de cada um, como um museu de arte. Mostre no projetor a sua galeria de exemplo: abra a pasta "Minha Galeria 3D" e mostre os arquivos com nomes bonitos. Pergunte: "Qual nome é mais fácil de achar: 'arquivo1.blend' ou 'robo_azul.blend'?" Deixe as crianças responderem.

Conteúdo novo guiado (15 min): Ensine a "regra dos nomes bons" no quadro: letras minúsculas, sem espaço (use o tracinho de baixo "_"), e diga o que é (a cor ou o tipo). Faça você mesmo, no projetor: abra um modelo, vá em "File" depois "Save As...", digite o nome novo (ex.: "nave_verde"), escolha a pasta "Minha Galeria 3D" e clique no botão azul "Save As". Mostre devagar onde cada clique acontece. Depois gire o modelo com a rodinha do mouse para mostrar como apresentar.

Mão na massa (25 min): Agora é a vez deles. Cada criança abre os seus arquivos do mês, um de cada vez. Para cada modelo: confere se está tudo certo, vai em "File" depois "Save As...", escreve um nome bom, salva na pasta "Minha Galeria 3D" e clica "Save As". Circule pela sala ajudando a digitar e a achar a pasta. A meta é cada criança ter todos os seus assets do mês salvos e nomeados na galeria. Quem terminar, ajuda um colega ou treina girar o modelo.

Desafio e compartilhar (10 min): A mostra! Cada criança liga o computador no projetor, abre o seu modelo favorito, gira ele com a rodinha do mouse e conta o nome e a parte mais legal. A turma aplaude. Quem tiver a galeria completa e salva ganha o carimbo de "Artista 3D". Encerre dizendo que esses assets vão virar parte do jogo no Roblox em breve.

## Como explicar para crianças

Use a ideia de museu: "Cada modelo de vocês é uma obra de arte, e a pasta é o nosso museu particular." Compare salvar com guardar um brinquedo na caixa certa: se você joga em qualquer lugar, depois não acha. Os nomes bons são como etiquetas nos potes da cozinha. Diga que o tracinho de baixo "_" é a "cola mágica" que junta as palavras sem deixar espaço. Lembre que girar o modelo com a rodinha é como pegar a peça na mão para mostrar todos os lados.

## Erros comuns e como ajudar

A criança clica "Save" e fica com o nome velho: peça sempre "Save As..." para poder trocar o nome. Ela salva na pasta errada: mostre na janela de salvar o caminho até "Minha Galeria 3D" e confira junto. Coloca espaço ou letra maiúscula no nome: relembre a regra e ajude a digitar o tracinho "_". Some o modelo da tela ao girar: aperte a tecla "." do teclado numérico para a câmera voltar ao objeto. A criança tem medo de perder o trabalho: mostre que depois de salvar o nome aparece no topo da janela do Blender, prova de que está guardado.`,
  exercicios: [
    {
      titulo: `Caça aos nomes bons`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor (ou leia em voz alta) pares de nomes e peça que a turma aponte qual é o nome bom, seguindo a regra: minúsculas, sem espaço, dizendo o que é. Comemore cada acerto.`,
      atividade: `Escute os pares de nomes e diga qual é o nome bom para um arquivo: "Arquivo 1" ou "robo_azul"? "casa verde" ou "casa_verde"? "NAVE" ou "nave_foguete"?`,
      gabarito: `Nomes bons: "robo_azul", "casa_verde" e "nave_foguete". A criança escolhe a opção em letras minúsculas, sem espaço e que diz o que é o objeto. Erro comum: achar que letras maiúsculas ou espaços são melhores.`,
    },
    {
      titulo: `Salvando o primeiro modelo`,
      tipo: `Prática no Blender`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o caminho "File" depois "Save As...". A criança abre um dos seus modelos, dá um nome bom e salva na pasta "Minha Galeria 3D". Ajude a digitar o tracinho "_" e a achar a pasta na janela de salvar.`,
      atividade: `Abra um modelo que você fez no mês. Vá em "File", depois "Save As...", escreva um nome bom (como "arvore_magica") e salve na pasta "Minha Galeria 3D".`,
      gabarito: `O arquivo aparece dentro da pasta "Minha Galeria 3D" com um nome bom (minúsculas, sem espaço, dizendo o que é). Acerto = usar "Save As..." e escolher a pasta certa. O nome novo aparece no topo da janela do Blender.`,
    },
    {
      titulo: `Girando para mostrar`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a girar a câmera segurando a rodinha do mouse (botão do meio) e mexendo o mouse. Se o modelo sumir, ensine a tecla "." do teclado numérico para centralizar. Deixe cada criança treinar.`,
      atividade: `Segure a rodinha do mouse e mexa o mouse para girar o seu modelo e ver todos os lados, como se estivesse segurando ele na mão. Se ele sumir, aperte a tecla "." do teclado numérico.`,
      gabarito: `A criança gira a câmera ao redor do modelo e consegue ver frente, lados e trás. Acerto = controlar a rodinha do mouse com calma. Se o objeto sai da tela, ela usa o "." para trazer de volta.`,
    },
    {
      titulo: `Montando a galeria inteira`,
      tipo: `Mão na massa`,
      tempo: `9 minutos`,
      guiaProfessor: `A criança repete o salvar com nome bom para TODOS os seus modelos do mês, um por um, até a galeria ficar completa. Circule ajudando a abrir cada arquivo e a confirmar a pasta. Confira o resultado abrindo a pasta no fim.`,
      atividade: `Abra cada modelo que você fez no mês e salve todos na pasta "Minha Galeria 3D", cada um com o seu nome bom. No final, abra a pasta e conte quantos assets você tem na sua galeria.`,
      gabarito: `Todos os modelos do mês aparecem na pasta "Minha Galeria 3D", cada um com nome bom e sem repetir. Acerto = galeria completa e organizada. Exemplo: a pasta mostra "robo_azul", "arvore_magica" e "nave_verde" salvos juntos.`,
    },
    {
      titulo: `A mostra dos artistas`,
      tipo: `Apresentação individual`,
      tempo: `5 minutos`,
      guiaProfessor: `Cada criança liga no projetor, abre o modelo favorito, gira com a rodinha do mouse e conta o nome e a parte mais legal. Use o cronômetro de um minuto. A turma aplaude e quem tem a galeria completa ganha o carimbo de "Artista 3D".`,
      atividade: `No projetor, abra o seu modelo favorito da galeria, gire ele para a turma ver todos os lados e conte: "Esse asset se chama ___ e a parte mais legal é ___".`,
      gabarito: `A criança abre um asset salvo, gira no projetor e diz o nome e a parte mais legal em cerca de um minuto. Acerto = apresentar com a galeria já salva. A turma aplaude e a criança recebe o carimbo de "Artista 3D".`,
    },
  ],
};
