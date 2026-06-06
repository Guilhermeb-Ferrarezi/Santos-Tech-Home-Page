import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Minha Coleção para Levar para Casa",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Levar cada criança a organizar todas as peças que imprimiu no mês, contar como criou cada uma numa mini-exposição para a turma e embalar suas criações com orgulho para levar para casa.`,
  descricao: `Esta é a aula de fechamento do mês de Impressão 3D. Durante quatro semanas, cada criança modelou no MagicaVoxel e no Blender, fatiou os modelos no Bambu Studio e imprimiu peças de verdade na Bambu Lab. Hoje não vamos imprimir nada novo: vamos celebrar tudo o que já foi feito. É o dia da coleção, da exposição e da despedida das peças, que finalmente vão para a casa de cada aluno.

A ideia central é a consolidação. A criança junta todas as peças do mês numa fileira na mesa, lembra a ordem em que cada uma nasceu e percebe, olhando para a coleção inteira, o quanto evoluiu. A primeira peça costuma ser mais simples; a última, mais caprichada. Ver isso lado a lado é uma descoberta poderosa: "fui eu que fiz tudo isso, e fui melhorando". O professor conduz como um curador de museu amigo, ajudando cada um a organizar e a se orgulhar.

A aula tem dois momentos especiais. Primeiro, a mini-exposição: cada criança vira "guia do museu" das próprias peças e conta para a turma o nome de cada uma, no que pensou quando criou e qual é a sua favorita. Depois, a embalagem: com muito cuidado, cada aluno envolve as peças em papel ou as coloca numa sacolinha, escreve o próprio nome numa etiqueta e prepara tudo para a viagem até em casa. Embalar com carinho ensina que a peça é frágil e preciosa.

Ao final, cada criança sai da sala com uma sacolinha cheia de criações reais, feitas por ela do começo ao fim, e com a memória de ter apresentado o seu trabalho para os amigos. É o encerramento perfeito de um mês de mão na massa: do modelo na tela ao objeto que cabe na mão e vai morar na estante do quarto.`,
  materiais: [
    `Computadores com o Bambu Studio aberto, mostrando os projetos (.3mf) que cada criança fatiou no mês`,
    `Todas as peças impressas do mês, separadas por criança, já soltas da chapa e limpas`,
    `Projetor ou TV grande conectada para mostrar a coleção e os modelos na tela durante a exposição`,
    `Material de embalagem: papel de seda ou jornal, sacolinhas de papel e fita adesiva`,
    `Etiquetas e canetas para cada criança escrever o nome e o nome de cada peça`,
    `Exemplos prontos: uma "coleção modelo" do professor com 3 ou 4 peças já organizadas e embaladas`,
    `Adesivos ou carimbos de "Artista 3D" para premiar a apresentação da coleção`,
  ],
  conceitosChave: [
    `Coleção — um conjunto de peças suas guardadas juntas, como um time de bonecos.`,
    `Exposição — quando você mostra suas criações para outras pessoas verem e admirarem.`,
    `Curador — a pessoa que organiza e cuida das peças de um museu, explicando cada uma.`,
    `Embalar — envolver a peça com cuidado para ela não quebrar na viagem até em casa.`,
    `Etiqueta — um papelzinho com o seu nome para ninguém trocar a sua peça pela do colega.`,
    `Evolução — perceber que você foi melhorando da primeira peça até a última.`,
    `Frágil — algo que pode quebrar fácil e por isso precisa de cuidado nas mãos.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de celebração e organização, não de impressão. Você não precisa fatiar nem mandar nada para a impressora hoje. O único uso do computador é abrir, no Bambu Studio, os projetos que cada criança já fez no mês, para mostrar na tela como o modelo virou peça de verdade. Antes da aula, abra o Bambu Studio em cada computador. Os projetos ficam em "File" (Arquivo) e depois "Open Project" (Abrir Projeto), ou no menu "Recent" (Recentes) da tela inicial, no formato ".3mf". Deixe o projeto de cada aluno já carregado na aba "Prepare" (Preparar), onde aparece o modelo na placa de impressão. Separe também, em montinhos, as peças físicas de cada criança, já soltas da chapa e limpas das aulas anteriores. Tenha o material de embalagem à mão.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sente a turma em roda com as peças do mês no centro, misturadas. Pergunte: "Quem lembra qual foi a primeira peça que imprimimos? E a última?". Deixe as crianças reconhecerem as próprias criações e pegarem de volta. Relembre rapidinho o caminho do mês: modelar, fatiar no Bambu Studio, imprimir na Bambu Lab e soltar a peça.

Conteúdo novo guiado (15 min): Apresente a ideia de "coleção" e "museu". Mostre a sua coleção modelo já organizada numa fileira, da mais simples à mais caprichada. Faça a apresentação de curador você mesmo: pegue uma peça, diga o nome dela, conte no que pensou e diga qual é a favorita. No projetor, abra um projeto no Bambu Studio, na aba "Prepare", e mostre o modelo na tela ao lado da peça real na mão: "Olha, começou aqui na tela e virou isto aqui!". Ensine também a embalar: envolva uma peça no papel devagar, mostrando o cuidado.

Mão na massa (25 min): Cada criança organiza as próprias peças numa fileira na mesa, na ordem em que foram criadas. Passe de mesa em mesa ajudando a lembrar a sequência. Depois, um a um, viram "guias do museu" e apresentam a coleção para a turma: nome de cada peça, no que pensaram e a favorita. A turma aplaude. Em seguida, cada um embala as peças com papel, coloca na sacolinha e escreve o nome na etiqueta.

Desafio e compartilhar (10 min): Desafie cada criança a olhar a coleção e dizer uma coisa que aprendeu a fazer melhor do mês todo. Encerre com uma roda de orgulho: cada um levanta a sacolinha fechada e diz "Eu fiz tudo isso!". Entregue o carimbo de "Artista 3D".

## Como explicar para crianças

Use a analogia do museu: "Hoje cada um de vocês é o dono de um pequeno museu, e essas são as obras de arte que vocês criaram." Chame a fileira de peças de "coleção", como uma coleção de figurinhas ou de bonecos. Para a embalagem, diga que as peças são "frágeis", igual a um ovo: precisam de um cobertorzinho de papel para não se machucarem no caminho de casa. Mostre a evolução com carinho: "Veja como a sua primeira peça e a última são diferentes, você foi virando um artista de verdade."

## Erros comuns e como ajudar

A criança não lembra a ordem das peças: tudo bem, ajude olhando juntos qual parece mais simples (provavelmente a primeira) e qual tem mais detalhes. A criança aperta peças com força ou as deixa cair: relembre que são frágeis e mostre de novo o jeito de segurar com a mão em concha. A criança trava na hora de apresentar: faça as perguntas para ela ("Como se chama? No que você pensou?") e ela só responde. Peças parecidas se misturam entre colegas: por isso a etiqueta com o nome é importante; faça todos etiquetarem antes de guardar. A criança quer imprimir mais hoje: explique com carinho que hoje é o dia de celebrar e levar para casa, e que mês que vem tem mais impressão.`,
  exercicios: [
    {
      titulo: `Quem é a dona desta peça?`,
      tipo: `Dinâmica em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Com as peças do mês misturadas no centro da roda, peça que cada criança reconheça e pegue de volta as suas. Ajude quem ficar em dúvida lembrando o que cada um criou. O objetivo é reativar a memória do mês de forma leve.`,
      atividade: `Olhe as peças no meio da roda e ache as que foram você que fez. Pegue só as suas e segure no colo com cuidado.`,
      gabarito: `A criança reconhece e recolhe as próprias peças. Acerto = juntar as criações que são dela, mesmo que precise de uma dica do professor. Exemplo: "Esse dinossauro é meu, eu fiz na primeira semana!".`,
    },
    {
      titulo: `Montando a fileira da coleção`,
      tipo: `Organização na mesa`,
      tempo: `5 minutos`,
      guiaProfessor: `Cada criança coloca as próprias peças numa fileira na mesa, da que fez primeiro até a mais recente. Passe ajudando a lembrar a ordem. Não precisa estar perfeita; o valor está em perceber a sequência do mês.`,
      atividade: `Coloque suas peças numa fileira na mesa, da primeira que você fez até a última. Capriche para ficar uma coleção bonita.`,
      gabarito: `As peças ficam alinhadas numa fileira, numa ordem que tente seguir o tempo de criação. Acerto = organizar a coleção e conseguir apontar qual veio primeiro e qual veio depois.`,
    },
    {
      titulo: `Da tela para a mão`,
      tipo: `Prática no Bambu Studio`,
      tempo: `5 minutos`,
      guiaProfessor: `No computador da criança, com o Bambu Studio aberto na aba "Prepare", mostre o modelo dela na tela ao lado da peça real. Se precisar, abra o projeto em "File" e depois "Recent". O objetivo é a criança ligar o desenho do computador ao objeto na mão.`,
      atividade: `No seu computador, olhe o seu modelo na tela do Bambu Studio e segure a peça de verdade do lado. Mostre para um colega como o desenho virou um objeto que dá para pegar.`,
      gabarito: `A criança identifica na tela o modelo que corresponde à peça que está na mão. Acerto = entender que o objeto físico nasceu daquele modelo no Bambu Studio. Exemplo: "Esse aqui na tela é o mesmo carrinho que está aqui na minha mão!".`,
    },
    {
      titulo: `Guia do museu`,
      tipo: `Apresentação individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança vira "guia do museu" e apresenta a coleção para a turma: o nome de cada peça, no que pensou ao criar e qual é a favorita. Use as três perguntas como apoio para quem travar. A turma aplaude cada apresentação.`,
      atividade: `Seja o guia do seu museu: mostre sua coleção para a turma e conte o nome de cada peça, no que você pensou quando fez e qual é a sua favorita.`,
      gabarito: `Apresentação com as três partes: nome das peças, a ideia por trás de pelo menos uma e a peça favorita. Acerto = apresentar a coleção para os colegas, mesmo com a ajuda das perguntas do professor. A turma aplaude ao final.`,
    },
    {
      titulo: `Embalando para levar para casa`,
      tipo: `Desafio final`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança embala as peças com papel, coloca na sacolinha e escreve o nome na etiqueta. Reforce que as peças são frágeis e que o papel é o "cobertorzinho" delas. Confira se todos etiquetaram antes de guardar para não trocar com o colega.`,
      atividade: `Envolva cada peça no papel com cuidado, coloque na sua sacolinha e escreva o seu nome na etiqueta. Feche a sacolinha e levante para mostrar: "Eu fiz tudo isso!".`,
      gabarito: `As peças ficam embaladas no papel, dentro da sacolinha, com a etiqueta de nome preenchida. Acerto = embalar com cuidado de "frágil" e identificar a sacola com o próprio nome. Levantar a sacola com orgulho fecha a atividade e vale o carimbo de "Artista 3D".`,
    },
  ],
};
