import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Levando os Assets para o Roblox",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Exportar vários modelos voxel em sequência no MagicaVoxel e importá-los no Roblox Studio com a ajuda do professor, posicionando um item no mundo do jogo para ver a criação funcionando de verdade.`,
  descricao: `Hoje as criações saem da telinha do MagicaVoxel e entram no jogo de verdade! Durante o mês inteiro a turma vem construindo um pacote de assets voxel: itens mágicos, obstáculos, peças pintadas e variações de cor. Nesta aula a gente faz a ponte mágica: pega esses modelos e os leva para dentro do Roblox Studio, o lugar onde o jogo realmente acontece. É o momento em que a criança vê o próprio voxel aparecer no mundo do jogo e diz "olha, é o meu item!".

A grande novidade é exportar não só um, mas vários modelos em sequência. Cada arquivo do MagicaVoxel vira um arquivo de modelo 3D que o Roblox entende. A criança aprende que, antes de levar para o jogo, precisa "embalar" o modelo no formato certo, parecido com colocar um presente numa caixa para conseguir transportar. Depois, dentro do Roblox Studio, a gente importa essa caixa e o item surge na tela, pronto para ser arrastado para o cenário.

O professor é o capitão da travessia. Esta aula tem muitos cliques em dois programas diferentes (MagicaVoxel e Roblox Studio), então o segredo é ir devagar, um passo de cada vez, mostrando tudo no projetor antes de soltar a turma para fazer. A maior parte do tempo de mão na massa é com você circulando, ajudando cada criança a exportar e a importar. Não tem problema se cada um conseguir levar só um ou dois itens hoje; o importante é a experiência de ver a criação ganhar vida no jogo.

No fim, a recompensa é grande: cada criança posiciona o próprio item no mundo do Roblox e mostra para a turma. Ver o asset que ela mesma construiu, pintou e exportou aparecer de pé no chão do jogo é um momento de orgulho enorme e fecha o ciclo de "criar para usar de verdade".`,
  materiais: [
    `Computadores com o MagicaVoxel aberto e os modelos voxel do mês já salvos numa pasta da criança`,
    `Roblox Studio instalado e aberto em cada computador, com um lugar (place) em branco pronto para receber os itens`,
    `Projetor (ou TV grande) ligado para você demonstrar os dois programas na telona`,
    `Uma pasta clara no computador, com nome tipo "Meus Assets", para guardar os arquivos exportados`,
    `Exemplos prontos: dois ou três modelos voxel seus já exportados e já importados no Roblox, para mostrar o resultado final`,
    `Lista com os nomes dos modelos de cada criança, para não se perder na hora de exportar vários em sequência`,
    `Etiquetas ou cartões coloridos de "Asset no Jogo!" para entregar a quem conseguir posicionar o item`,
  ],
  conceitosChave: [
    `Exportar — salvar o modelo num formato diferente, como uma caixa de presente, para outro programa conseguir abrir.`,
    `Importar — abrir dentro do Roblox Studio um arquivo que veio de fora, como receber a caixa e desembrulhar.`,
    `Asset — cada peça pronta do jogo, como um item, um obstáculo ou uma árvore que a gente construiu.`,
    `Formato de arquivo — o "tipo de embrulho" do modelo; o Roblox gosta de um embrulho chamado OBJ.`,
    `Roblox Studio — o programa onde a gente monta o jogo de verdade e coloca os itens no mundo.`,
    `Em sequência — fazer uma coisa depois da outra, um modelo por vez, sem misturar nem pular.`,
    `Posicionar — arrastar o item e colocá-lo no lugar certo dentro do mundo do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula usa dois programas que conversam entre si: o MagicaVoxel, onde os modelos foram criados, e o Roblox Studio, onde o jogo é montado. O caminho é sempre o mesmo: exportar no MagicaVoxel, salvar numa pasta, depois importar no Roblox Studio. Você não precisa ser especialista; basta seguir os passos com calma.

No MagicaVoxel, o botão de exportar fica no painel da direita, na seção "Export". Lá aparecem várias siglas (vox, obj, ply, qb). A que o Roblox entende bem é a "obj". Ao clicar em "obj", o MagicaVoxel salva dois ou três arquivos juntos (um ".obj", um ".mtl" e uma imagem ".png" com as cores). Eles precisam ficar na mesma pasta. Dica importante: deixe tudo numa pasta só, com nome simples e sem acento, como "MeusAssets".

No Roblox Studio, a importação se faz pela aba "Avatar" ou pelo botão "Import 3D" (em versões mais novas, fica no topo). Você clica, escolhe o arquivo ".obj" e o modelo aparece numa janelinha de pré-visualização. Confirma e ele entra no jogo. Faça esse caminho inteiro sozinho uma vez antes da aula para não travar na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Relembre o pacote de assets do mês. Abra no projetor a pasta com os modelos das aulas anteriores e pergunte: "De quem é esse item mágico? E esse obstáculo?". Depois conte a novidade do dia com empolgação: "Hoje a gente leva nossos voxels para dentro do jogo de verdade!". Mostre rapidinho um item seu já dentro do Roblox para dar o gostinho do resultado.

CONTEÚDO GUIADO (15 min): No projetor, faça a travessia completa devagar. No MagicaVoxel, com um modelo aberto, vá ao painel direito, seção "Export", e clique em "obj". Salve na pasta "MeusAssets". Mostre que apareceram vários arquivos juntos. Agora abra o Roblox Studio, clique em "Import 3D" (ou na aba "Avatar"), escolha o arquivo ".obj", confira a pré-visualização e clique em confirmar. O item surge na tela. Arraste-o para o chão do cenário. Diga em voz alta cada clique enquanto faz.

MÃO NA MASSA (25 min): As crianças repetem em sequência. Comece todos exportando um modelo no MagicaVoxel (clicar em "Export", depois "obj", salvar na pasta). Circule conferindo. Em seguida, passe ao Roblox Studio e ajude cada um a importar o seu arquivo. Com até 10 alunos, foque em garantir que cada criança leve pelo menos um item para o jogo. Quem terminar rápido pode exportar e importar um segundo modelo.

DESAFIO + COMPARTILHAR (10 min): Cada criança posiciona o seu item num lugar bonito do mundo do Roblox e o gira para ficar de frente. Depois, um por um mostra a tela no projetor e diz: "Esse é o meu item, e ele já está no jogo!". Entregue a etiqueta de "Asset no Jogo!" e puxe palmas.

## Como explicar para crianças

Use a ideia de mudança de casa: "Nosso item morava no MagicaVoxel; agora vamos mudar ele para a casa nova, que é o Roblox". Para exportar, diga que é "embrulhar o presente numa caixa especial chamada OBJ". Para importar, diga que é "abrir a caixa lá dentro do jogo". Reforce que os arquivos andam juntos, como uma família, e não podem se separar de pasta. E celebre cada vez que um item aparecer: "Olha ele vivo no jogo!".

## Erros comuns e como ajudar

O modelo aparece todo branco ou sem cor no Roblox: provavelmente os arquivos ".mtl" e ".png" ficaram em outra pasta; junte os três no mesmo lugar e importe de novo. A criança clica em "vox" em vez de "obj": mostre que "vox" é só para o MagicaVoxel e "obj" é a caixa para o jogo. O item entra gigante ou minúsculo: explique que dá para ajustar o tamanho depois e ajude a redimensionar. A criança perde o arquivo salvo: padronize todos na pasta "MeusAssets" e ensine a olhar sempre lá. Roblox Studio demora a abrir: deixe os dois programas já abertos antes da aula para não perder tempo.`,
  exercicios: [
    {
      titulo: `Caça aos assets do mês`,
      tipo: `Revisão em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor, abrindo a pasta com os modelos das aulas anteriores. O objetivo é relembrar o pacote de assets e animar a turma para a novidade de hoje. Aceite respostas faladas em voz alta.`,
      atividade: `Mostre na telona, um de cada vez, alguns modelos voxel já criados pela turma (um item mágico, um obstáculo, uma peça pintada). As crianças dizem em voz alta de que tipo é cada um e quem se lembra de tê-lo construído.`,
      gabarito: `O exercício deu certo quando a turma reconhece pelo menos três tipos de asset (item, obstáculo e peça pintada) e fica empolgada com a ideia de levá-los para o jogo. Não há resposta única: qualquer identificação correta do tipo vale.`,
    },
    {
      titulo: `Embrulhando o presente: exportar em OBJ`,
      tipo: `Mão na massa guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre antes no projetor. No MagicaVoxel, mostre o painel direito, seção "Export". Reforce que a criança deve clicar em "obj" (não em "vox") e salvar na pasta "MeusAssets". Circule conferindo cada computador.`,
      atividade: `Com um modelo aberto no MagicaVoxel, a criança vai ao painel "Export", clica no botão "obj" e salva o arquivo na pasta "MeusAssets". Em seguida confere que apareceram vários arquivos juntos (.obj, .mtl e .png).`,
      gabarito: `Sucesso é a criança gerar o arquivo ".obj" na pasta certa e ver que ele veio acompanhado do ".mtl" e do ".png". Se aparecer só um arquivo ou o tipo errado, oriente a clicar de novo em "obj" e a salvar tudo na mesma pasta "MeusAssets".`,
    },
    {
      titulo: `Abrindo a caixa dentro do jogo`,
      tipo: `Mão na massa guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o caminho no projetor primeiro. No Roblox Studio, use o botão "Import 3D" (ou a aba "Avatar"). Ajude cada criança individualmente a escolher o arquivo ".obj" certo e a confirmar na pré-visualização.`,
      atividade: `No Roblox Studio, a criança clica em "Import 3D", escolhe o seu arquivo ".obj" da pasta "MeusAssets", confere a pré-visualização e confirma. O modelo voxel aparece na tela do jogo.`,
      gabarito: `O exercício foi cumprido quando o modelo da criança aparece dentro do Roblox Studio com as cores corretas. Se vier branco, junte os três arquivos na mesma pasta e importe novamente. Cada criança deve conseguir importar pelo menos um item.`,
    },
    {
      titulo: `Plantando o item no mundo`,
      tipo: `Desafio individual`,
      tempo: `5 minutos`,
      guiaProfessor: `Esta etapa é a recompensa: ver o item de pé no cenário. Ajude a arrastar o modelo para o chão e a girá-lo para ficar de frente. Se o item estiver gigante ou minúsculo, mostre como ajustar o tamanho.`,
      atividade: `A criança arrasta o seu item importado para um lugar bonito do chão do mundo do Roblox, ajusta o tamanho se precisar e gira o modelo para que fique virado de frente, bem visível.`,
      gabarito: `Está correto quando o item aparece posicionado no chão do cenário, num tamanho razoável e virado de frente. Não existe lugar "errado": qualquer posição em que o item fique visível e de pé conta como sucesso.`,
    },
    {
      titulo: `Exportando vários em sequência`,
      tipo: `Desafio avançado e compartilhar`,
      tempo: `4 minutos`,
      guiaProfessor: `Para quem terminou o primeiro item. Reforce a ideia de "um de cada vez, sem misturar": abrir o segundo modelo, exportar em OBJ, salvar, importar no Roblox. No fim, organize a roda de compartilhar no projetor.`,
      atividade: `A criança repete a travessia com um segundo modelo: abre outro asset no MagicaVoxel, exporta em "obj" para a pasta, importa no Roblox Studio e o posiciona perto do primeiro. Depois mostra os dois itens no projetor dizendo "esses são meus itens no jogo!".`,
      gabarito: `Sucesso é a criança levar um segundo item para o jogo seguindo a sequência completa sozinha ou com pouca ajuda, e apresentá-lo à turma. Quem conseguir importar apenas um item também deve ser celebrado; o desafio dos dois é um extra para os mais rápidos.`,
    },
  ],
};
