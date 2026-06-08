import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a Caixa de Assets",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Organizar todos os modelos voxel criados no mês em um pacote arrumado, com nomes claros e pastas separadas, e revisar o que ainda precisa ser corrigido.`,
  descricao: `Durante o mês inteiro as crianças criaram muitas coisas no MagicaVoxel: itens mágicos, obstáculos, peças pintadas com cores vivas e até variações do mesmo objeto. Agora chegou a hora mais importante de qualquer criador de jogos profissional: arrumar a bagunça. Esta aula ensina a montar a "caixa de assets", que é como uma caixa de brinquedos bem organizada, onde cada peça tem seu lugar e seu nome.

Um asset é qualquer pecinha que entra no jogo: uma espada, uma poção, uma pedra que bloqueia o caminho. Quando temos poucos assets, é fácil achar tudo. Mas quando temos dez, quinze ou vinte arquivos, fica uma confusão se eles tiverem nomes como "novo1", "sem_titulo" ou "teste_final_agora_vai". Por isso, criadores de verdade dão nomes claros para cada arquivo e guardam tudo em pastas separadas: uma pasta para os itens e outra para os obstáculos.

Nesta aula as crianças vão revisar tudo que fizeram, dar nomes bonitos e fáceis de entender para cada modelo, separar os arquivos em pastas e montar uma lista de tudo que existe na caixa. Enquanto fazem isso, vão descobrir que alguns modelos ficaram sem cor, outros não foram exportados e talvez falte alguma peça. É a chance perfeita de consertar antes de fechar o pacote.

Organizar não é a parte mais brilhante de criar um jogo, mas é o que separa um criador iniciante de um profissional. Uma caixa bem montada faz a próxima aula, em que vamos finalizar a galeria do jogo, ficar muito mais fácil e divertida.`,
  materiais: [
    `Computadores com o MagicaVoxel aberto, um para cada criança`,
    `Projetor ligado no computador do professor para mostrar a tela grande`,
    `Pasta no computador já criada na área de trabalho para guardar os modelos`,
    `Exemplos prontos de dois ou três assets bem nomeados (espada_dourada.vox, pedra_bloqueio.vox)`,
    `Uma folha impressa de "lista de assets" para cada criança preencher à mão`,
    `Lápis ou caneta colorida para marcar o que está pronto e o que falta`,
    `Etiquetas ou adesivos para nomear as pastas físicas como brincadeira de apoio`,
  ],
  conceitosChave: [
    `Asset — cada pecinha que vai entrar no jogo, como um item ou um obstáculo.`,
    `Pacote de assets — a caixa que guarda todas as pecinhas juntas e organizadas.`,
    `Nome de arquivo — o apelido que damos para cada modelo para achar ele rápido depois.`,
    `Pasta — uma gavetinha no computador onde guardamos arquivos parecidos juntos.`,
    `Lista de assets — um papel ou tela que mostra tudo que já criamos, como uma lista de compras.`,
    `Revisão — olhar de novo cada modelo para ver se está colorido e exportado direitinho.`,
    `Exportar — salvar o modelo no formato certo para ele poder sair do MagicaVoxel.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em MagicaVoxel para dar esta aula. O foco aqui é organização, não modelagem. O MagicaVoxel guarda cada modelo num arquivo com extensão .vox. Quando a criança abre o programa, ela vê uma lista de modelos no painel da esquerda. Cada vez que ela salva, gera um arquivo. Nesta aula vamos arrumar esses arquivos: dar nomes claros, separar em pastas e conferir se estão completos.

Antes da aula, crie no computador de cada criança uma pasta chamada "Caixa_de_Assets" na área de trabalho, com duas subpastas dentro: "Itens" e "Obstaculos". Tenha também dois ou três exemplos prontos com nomes bons para mostrar no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Reúna as crianças perto do projetor. Pergunte: "Quantas coisas legais vocês criaram este mês?" Mostre uma caixa de brinquedos bagunçada (pode ser de verdade) e uma arrumada. Explique que hoje vamos arrumar nossa caixa de assets no computador, igual arrumar os brinquedos.

15 min — Conteúdo novo guiado: No projetor, abra o MagicaVoxel. Mostre o painel de modelos à esquerda. Clique em um modelo e mostre como salvar com nome claro: vá no menu superior, clique em "File", depois "Save As" (ou o ícone de disquete). Digite um nome bom, por exemplo "espada_dourada". Explique a regra dos nomes: tudo em letra minúscula, sem espaço (use o tracinho de baixo "_"), descrevendo o que é. Depois mostre a pasta "Caixa_de_Assets" na área de trabalho e arraste o arquivo para dentro da subpasta certa: "Itens" ou "Obstaculos".

25 min — Mão na massa: Cada criança abre seus próprios modelos no MagicaVoxel. Peça que façam três coisas, uma de cada vez. Primeiro: abrir cada modelo e olhar se está todo colorido (sem partes cinzas ou vazias). Segundo: salvar cada um com um nome claro usando "File" e "Save As". Terceiro: arrastar cada arquivo para a pasta "Itens" ou "Obstaculos". Enquanto fazem, eles preenchem a folha "lista de assets" escrevendo o nome de cada modelo e marcando um certinho quando está pronto. Circule pela sala ajudando quem travar.

10 min — Desafio e compartilhar: Lance o desafio: "Quem consegue achar um modelo que ficou sem cor ou que esqueceu de exportar?" Quem achar, corrige na hora. Depois cada criança mostra sua caixa organizada no projetor e diz quantos itens e quantos obstáculos tem.

## Como explicar para crianças

Use a analogia da caixa de brinquedos o tempo todo. Diga: "Imagina que você tem um monte de Legos espalhados pelo chão. Fica difícil achar a pecinha vermelha, né? Mas se você guarda os vermelhos numa caixinha e os azuis em outra, acha rapidinho." Os assets são iguais: itens numa pasta, obstáculos em outra.

Para o nome dos arquivos, diga: "O nome é o apelido do seu modelo. Se você chamar de 'coisa1', daqui a pouco nem você lembra o que é. Mas se chamar de 'espada_dourada', todo mundo sabe na hora." Faça uma brincadeira: mostre um nome ruim e pergunte "que objeto é esse?" para eles sentirem a confusão.

Para a lista, compare com uma lista de compras do mercado: a gente escreve tudo que precisa para não esquecer nada.

## Erros comuns e como ajudar

Muitas crianças querem dar nomes engraçados e sem sentido. Aceite a graça, mas peça que o nome diga o que o objeto é. Outras esquecem de clicar em "Save As" e acabam salvando por cima de outro modelo: mostre devagar a diferença entre "Save" e "Save As". Algumas arrastam o arquivo para o lugar errado: ensine a olhar o nome da pasta antes de soltar. E sempre vai aparecer um modelo sem cor ou não exportado: comemore quando acharem, porque achar o erro é parte do trabalho do criador.`,
  exercicios: [
    {
      titulo: `Caça à Bagunça`,
      tipo: `Aquecimento em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor duas telas: uma pasta com arquivos de nomes ruins (novo1, teste, sem_titulo) e outra com nomes bons (espada_dourada, pedra_bloqueio). Pergunte qual é mais fácil de usar.`,
      atividade: `Olhe as duas pastas na tela grande e diga, levantando a mão, qual delas você acha mais organizada e por quê.`,
      gabarito: `A pasta com nomes bons (espada_dourada, pedra_bloqueio) é a mais organizada, porque o nome já avisa o que é cada arquivo, então achamos tudo rápido sem precisar abrir um por um.`,
    },
    {
      titulo: `Dando Nome aos Bichos`,
      tipo: `Prática individual guiada`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança abre um modelo seu no MagicaVoxel. Mostre de novo o caminho "File" e depois "Save As". Reforce a regra: minúsculas, sem espaço, com tracinho de baixo, dizendo o que o objeto é.`,
      atividade: `Abra um dos seus modelos. Clique em "File" e depois em "Save As". Escreva um nome claro que diga o que é o objeto, por exemplo "pocao_azul". Salve.`,
      gabarito: `O modelo deve estar salvo com um nome claro, em letras minúsculas, sem espaços, usando o tracinho de baixo e descrevendo o objeto, como "pocao_azul" ou "escudo_prata". Um nome certo descreve o item; um nome errado seria "novo1" ou "teste".`,
    },
    {
      titulo: `Cada Coisa em Sua Gaveta`,
      tipo: `Organização no computador`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre a pasta "Caixa_de_Assets" com as subpastas "Itens" e "Obstaculos". Ensine a arrastar cada arquivo para a pasta certa e a conferir o nome da pasta antes de soltar.`,
      atividade: `Pegue cada um dos seus modelos salvos e arraste para a pasta certa: itens mágicos vão para a pasta "Itens" e coisas que atrapalham o jogador vão para a pasta "Obstaculos".`,
      gabarito: `Todos os itens mágicos (espadas, poções, moedas) ficam dentro da pasta "Itens". Todos os obstáculos (pedras, espinhos, paredes) ficam dentro da pasta "Obstaculos". Nenhum arquivo fica solto fora das pastas.`,
    },
    {
      titulo: `A Lista da Caixa`,
      tipo: `Registro escrito`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha "lista de assets". Mostre como escrever o nome de cada modelo e marcar um certinho quando estiver colorido e na pasta certa. Ajude quem ainda escreve devagar.`,
      atividade: `Na sua folha, escreva o nome de cada modelo que você criou. Do lado de cada nome, faça um certinho se ele já está colorido e guardado na pasta certa.`,
      gabarito: `A lista deve conter o nome de cada modelo criado pela criança, com um certinho ao lado dos que estão coloridos e guardados. Os que não tiverem certinho são justamente os que precisam ser corrigidos depois.`,
    },
    {
      titulo: `Detetive dos Erros`,
      tipo: `Desafio de revisão`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance o desafio de encontrar problemas. Peça que cada criança reabra seus modelos procurando algum que ficou sem cor, sem nome bom ou que não foi exportado. Comemore cada erro encontrado e ajude a corrigir na hora.`,
      atividade: `Vire detetive da sua própria caixa. Abra de novo seus modelos e procure pelo menos um problema: uma parte sem cor, um nome ruim ou um modelo que não foi exportado. Conserte o que achar.`,
      gabarito: `A criança deve encontrar e corrigir pelo menos um problema. Exemplos de soluções: pintar a parte cinza que faltou cor, renomear "novo1" para um nome claro como "chave_dourada", ou exportar o modelo que ainda não tinha sido salvo. Se a caixa estiver perfeita, o gabarito é confirmar em voz alta que todos os modelos estão coloridos, nomeados e nas pastas certas.`,
    },
  ],
};
