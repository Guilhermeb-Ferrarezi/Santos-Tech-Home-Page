import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Preparando os Itens para a Loja",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende o caminho que um item 3D faz desde a pasta do computador até a conta do Roblox, organiza a sua própria pasta de itens e escolhe qual será o primeiro a publicar na loja.`,
  descricao: `Nesta aula a turma vai descobrir uma parte muito importante de virar criador de verdade: antes de um item aparecer na lojinha do Roblox, ele precisa fazer uma viagem. Ele sai de dentro da pasta do computador, passa por um portal especial chamado Creator Hub (o portal dos criadores) e entra na conta do Roblox. Essa viagem tem um nome: upload, que é quando a gente envia um arquivo do nosso computador para a internet.

Para essa viagem dar certo, o item precisa estar arrumado. Imagine que cada criança vai viajar com uma mala: se a mala está toda bagunçada, a gente não acha nada e esquece coisas importantes. Com os arquivos é igual. Por isso, hoje cada aluno vai criar uma pasta organizada só para os itens da loja, dar nomes que dá para entender e guardar tudo no lugar certo. Assim, na hora de publicar, ninguém vai ficar perdido procurando o arquivo.

O Roblox tem regras sobre o tipo de arquivo que aceita. Os itens 3D que as crianças fizeram em ferramentas como o Blender ou o MagicaVoxel viram um arquivo especial (geralmente terminando em .fbx ou .obj). É esse arquivo, e não o projeto inteiro, que entra no portal. A criança precisa aprender a reconhecer onde esse arquivo fica salvo e a diferença entre o projeto e o item pronto para enviar.

No final da aula, cada aluno terá a sua pasta de itens limpa e organizada, vai saber abrir o Creator Hub no navegador e entender, em palavras simples, o que é um upload. E, o mais empolgante: cada um vai escolher o primeiro item campeão que quer colocar à venda na próxima aula. É a preparação que deixa tudo pronto para o grande momento de publicar.`,
  materiais: [
    `Um computador por aluno com o navegador aberto e a página do Roblox Creator Hub (create.roblox.com) carregada, já com a conta do aluno ou da turma logada`,
    `Projetor ou TV ligada ao computador do professor para mostrar onde ficam os arquivos e onde clicar no portal de criadores`,
    `Exemplos prontos: dois ou três arquivos de itens 3D já exportados (um .fbx e um .obj) salvos numa pasta de demonstração para mostrar como um item pronto se parece`,
    `Uma pasta de exemplo bem organizada e outra toda bagunçada, para comparar no projetor o "antes e depois" da arrumação`,
    `Etiquetas de papel ou um quadro branco para a turma combinar junta um padrão de nomes para os arquivos`,
    `Folha impressa com o desenho do caminho do item (Pasta do computador, seta, Creator Hub, seta, Conta do Roblox) para colar na parede`,
    `Adesivos ou estrelinhas para premiar quem deixar a pasta de itens organizada e escolher o primeiro item`,
  ],
  conceitosChave: [
    `Arquivo — é o item já pronto e salvo no computador, como uma fotografia guardada; cada item 3D vira um arquivo que dá para enviar.`,
    `Pasta — a caixinha do computador onde a gente guarda os arquivos juntos e organizados, igual a uma gaveta com etiqueta.`,
    `Upload — a viagem do arquivo do seu computador para a internet; é quando você envia o item para dentro do Roblox.`,
    `Creator Hub — o portal dos criadores do Roblox, o site onde a gente entra para colocar os itens na loja.`,
    `Exportar — transformar o item feito no Blender ou MagicaVoxel num arquivo que o Roblox entende, como .fbx ou .obj.`,
    `Organizar — deixar cada arquivo no lugar certo, com nome claro, para achar tudo rápido na hora de publicar.`,
    `Item campeão — o item preferido que a criança escolhe para ser o primeiro a entrar na loja de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

O caminho de um item até a loja tem três pontos: a pasta do computador, o Creator Hub e a conta do Roblox. O item 3D que as crianças criaram já foi exportado nos meses anteriores e virou um arquivo, normalmente terminando em .fbx ou .obj. O projeto original (o arquivo .blend do Blender, por exemplo) NÃO é o que se envia; é o arquivo exportado que viaja. Sua primeira tarefa é ajudar cada criança a localizar onde esse arquivo está salvo.

O portal dos criadores se chama Creator Hub e fica no endereço create.roblox.com, aberto no navegador. Depois de logar com a conta, no menu da esquerda existe a área "Creator Store" e, para roupas e acessórios, o caminho "Avatar Items" ou o botão "Create". Nesta aula você ainda NÃO vai publicar (isso é a Aula 4); o foco é só abrir o portal, mostrar onde fica o botão de envio e explicar que clicar ali abrirá uma janela para escolher o arquivo. Upload é simplesmente isso: escolher um arquivo do computador e enviá-lo para o Roblox.

Antes da aula, crie no computador-modelo uma pasta chamada "Itens da Loja" e deixe dentro dela dois arquivos de exemplo. Tenha também uma pasta bagunçada (nomes como "sem titulo 2", "final final", "aaa.fbx") para comparar. Confira se as contas estão logadas e se a internet funciona, porque o portal precisa de conexão.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: relembre que nos meses passados eles criaram itens 3D no MagicaVoxel, no Blender e no Maya. Pergunte: "Onde será que esses itens estão guardados agora?" Mostre no projetor a pasta bagunçada e a pasta organizada, lado a lado, e pergunte qual deixa achar o item mais rápido.

15 min — Conteúdo novo guiado: no projetor, mostre o desenho do caminho (Pasta, seta, Creator Hub, seta, Conta). Abra a pasta "Itens da Loja" e aponte um arquivo .fbx: "Este é o item pronto para viajar." Abra o navegador, digite create.roblox.com e mostre o Creator Hub. No menu da esquerda, aponte (sem clicar para publicar) onde ficam "Creator Store" e o botão de criar. Explique: "Aqui é o portal; mais tarde a gente envia o item por este botão."

25 min — Mão na massa: cada criança cria a sua pasta. Mostre como clicar com o botão direito na área de trabalho, escolher "Novo" e depois "Pasta", e nomear "Itens da Loja". Ajude a encontrar os arquivos de item já exportados e a arrastá-los para dentro da pasta. Em seguida, peça que renomeiem cada arquivo com um nome claro (por exemplo "chapeu-estrela"). Por último, cada aluno abre o Creator Hub no próprio navegador e localiza o botão de envio, sem clicar para publicar.

10 min — Desafio e compartilhar: cada criança escolhe o seu "item campeão", o primeiro que vai publicar na próxima aula, e arrasta esse arquivo para o topo da pasta. Faça uma roda rápida: cada um mostra a tela com a pasta arrumada e diz o nome do item escolhido.

## Como explicar para crianças

Chame a pasta de "gaveta com etiqueta" e o arquivo de "o item guardado dentro de uma caixinha". Diga que o upload é uma "viagem do item": ele sai do computador, atravessa o portal (o Creator Hub) e chega na loja, como uma carta que vai pelo correio. Use a frase-rima "Arrumo, escolho, envio!" e repita batendo palma. A pasta bagunçada vira o "quarto bagunçado" onde ninguém acha o brinquedo, e a pasta organizada vira o "quarto arrumado". Para o item campeão, diga que é como escolher o brinquedo favorito para levar primeiro na viagem.

## Erros comuns e como ajudar

Muitas crianças confundem o projeto com o arquivo de envio e tentam guardar o .blend; mostre que só o .fbx ou o .obj viaja. Outras dão nomes que ninguém entende, como "aaa" ou "sem titulo"; combine com a turma um padrão simples antes de começar. Algumas salvam a pasta dentro de outra pasta e depois se perdem; oriente a criar a pasta na área de trabalho, bem à vista. Há quem queira clicar e publicar agora; explique com carinho que hoje é só preparar e que publicar é na próxima aula. Se a página do Creator Hub não abrir, confira a internet e o login antes de continuar, sem deixar a criança travada.`,
  exercicios: [
    {
      titulo: `O caminho do item`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e mostre a folha com o desenho do caminho (Pasta, seta, Creator Hub, seta, Conta). Peça que cada criança aponte por onde o item passa. Reforce que o upload é a viagem do arquivo do computador para o Roblox.`,
      atividade: `Olhando o desenho do caminho, diga em voz alta os três lugares por onde o seu item passa até chegar na loja, na ordem certa.`,
      gabarito: `Respondeu certo quem disse, nesta ordem: primeiro a pasta do computador, depois o Creator Hub (o portal) e por último a conta do Roblox (a loja). Acertou também quem usou a palavra upload para a viagem do arquivo.`,
    },
    {
      titulo: `Qual arquivo viaja?`,
      tipo: `Jogo de reconhecer`,
      tempo: `9 minutos`,
      guiaProfessor: `Projete a pasta de exemplo com vários arquivos: um .fbx, um .obj e um .blend (o projeto). Fale o nome de cada terminação e pergunte qual deles é o item pronto para enviar ao Roblox. Elogie e dê uma estrelinha para quem acertar.`,
      atividade: `Quando o professor mostrar os arquivos, aponte qual é o item pronto para viajar para o Roblox e qual é só o projeto que fica no computador.`,
      gabarito: `Acertou quem apontou o arquivo .fbx ou .obj como o item pronto para enviar, e reconheceu que o .blend é o projeto que fica guardado e não viaja para a loja.`,
    },
    {
      titulo: `Minha gaveta de itens`,
      tipo: `Prática no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor como criar a pasta: botão direito na área de trabalho, "Novo", depois "Pasta", e digitar o nome. Faça uma vez bem devagar e depois conte "um, dois, três" para todos fazerem juntos. Circule ajudando quem não acha o botão direito.`,
      atividade: `Crie na sua área de trabalho uma pasta chamada "Itens da Loja" e arraste para dentro dela os seus arquivos de item 3D que já estão prontos.`,
      gabarito: `Acertou quem criou uma pasta com o nome "Itens da Loja" e colocou dentro dela os arquivos de itens prontos (.fbx ou .obj), deixando a área de trabalho mais organizada e a pasta com os itens reunidos.`,
    },
    {
      titulo: `Nomes que dá para entender`,
      tipo: `Desafio de organização`,
      tempo: `8 minutos`,
      guiaProfessor: `Combine com a turma um padrão simples de nome (só letras minúsculas e um tracinho no lugar do espaço, como "chapeu-estrela"). Mostre como renomear: clicar uma vez no arquivo, esperar, clicar de novo no nome e digitar. Ajude quem usa nomes confusos a trocar.`,
      atividade: `Renomeie cada arquivo da sua pasta com um nome claro que diga o que é o item, sem espaços, usando um tracinho. Por exemplo: "espada-azul" ou "chapeu-estrela".`,
      gabarito: `Acertou quem deixou todos os arquivos com nomes claros que descrevem o item, sem espaços e com tracinho, de um jeito que outra pessoa consiga entender só de ler, sem nomes como "aaa" ou "sem titulo".`,
    },
    {
      titulo: `Abrindo o portal e escolhendo o campeão`,
      tipo: `Desafio na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada criança abra o navegador e digite create.roblox.com para entrar no Creator Hub. Mostre no projetor onde fica o botão de criar/enviar, mas deixe claro que hoje NÃO vamos clicar para publicar. Depois, ajude cada um a escolher o item campeão e a arrastá-lo para o topo da pasta.`,
      atividade: `Abra o Creator Hub no navegador (create.roblox.com), encontre o botão de enviar item (sem clicar para publicar) e depois escolha na sua pasta o item campeão que você quer publicar primeiro, deixando ele no topo.`,
      gabarito: `Acertou quem abriu o Creator Hub na tela, apontou o botão de envio sem publicar, e escolheu um item campeão deixando o arquivo dele em destaque no topo da pasta, pronto para a próxima aula. Qualquer item escolhido com clareza vale.`,
    },
  ],
};
