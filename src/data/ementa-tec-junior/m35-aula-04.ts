import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando o Cenário Completo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Posicionar os assets voxel pelo mapa para construir caminhos, casas e obstáculos, deixando o mundo completo e pronto para explorar.`,
  descricao: `Nas aulas anteriores, nós trouxemos os bonecos voxel para o Roblox Studio, arrumamos os assets na cena e desenhamos o mapa do nosso mundo com a planta baixa dos lugares importantes. Agora chegou a parte mais divertida e visual: vamos dar vida ao cenário! Nesta aula, as crianças vão pegar os modelos e blocos que já prepararam e espalhá-los pelo mapa para criar caminhos por onde o jogador vai andar, casas para ele visitar e obstáculos para ele desviar.

Pense no mapa como um tabuleiro vazio e nos assets como peças de um jogo de montar gigante. Cada modelo voxel é uma peça que tem um lugar certo no mundo. Quando juntamos várias peças com cuidado, o cenário deixa de ser só um chão plano e vira uma cidade, uma floresta ou uma ilha cheia de detalhes. O segredo está em combinar blocos simples (Parts) com os modelos mais bonitos que vieram do MagicaVoxel para preencher o mundo inteiro.

O foco da aula é a ação de posicionar com capricho: mover, girar e encaixar os assets para que tudo fique alinhado e faça sentido. Um caminho precisa levar a algum lugar, uma casa precisa ter uma entrada e os obstáculos precisam ficar no meio do percurso para criar um desafio. Quando o mundo fica visualmente completo e organizado, o jogo começa a parecer de verdade, e é isso que deixa as crianças orgulhosas.

Ao final da aula, cada criança terá um cenário muito mais rico do que no começo, com pelo menos um caminho claro, uma ou duas construções e alguns obstáculos posicionados. Esse cenário completo é a base para as próximas aulas, quando vamos definir onde o jogador começa, criar os itens para pegar e as regras para vencer. Hoje o mundo ganha forma e cor.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um para cada criança, no projeto do jogo voxel que já vem das aulas anteriores`,
    `Projetor ligado no computador do professor para demonstrar cada passo na tela grande`,
    `Os assets voxel das crianças já dentro do Roblox Studio (modelos prontos das aulas 1 e 2)`,
    `O mapa do mundo desenhado na aula 3, servindo de guia de onde colocar cada coisa`,
    `Um exemplo pronto feito pelo professor: um cenário pequeno e completo com caminho, casa e obstáculo`,
    `Folha impressa com a planta baixa de cada criança para riscar e marcar o que já foi montado`,
    `Mouse com rodinha (scroll) para facilitar o zoom e a movimentação da câmera`,
  ],
  conceitosChave: [
    `Cenário — é o mundo todo do jogo montado com peças: o chão, os caminhos, as casas e tudo que dá para ver.`,
    `Asset — cada peça ou modelo pronto que a gente usa para montar o mundo, como uma árvore ou uma casinha de voxel.`,
    `Caminho — a trilha por onde o jogador anda, feita de blocos ou peças coladas uma do lado da outra.`,
    `Obstáculo — uma peça que fica no meio do caminho para atrapalhar o jogador e deixar o jogo mais divertido.`,
    `Mover (Move) — a ferramenta com setas coloridas que serve para arrastar uma peça para outro lugar.`,
    `Girar (Rotate) — a ferramenta com argolas que serve para virar a peça para o lado certo.`,
    `Encaixar — juntar duas peças bem coladinhas, sem buraco e sem ficarem uma dentro da outra.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. O coração de tudo são duas ferramentas que ficam na aba "Home" (ou "Model"), na faixa de cima do Roblox Studio: a ferramenta "Move" (ícone com setas coloridas para cima/baixo/lados) e a ferramenta "Rotate" (ícone com argolas curvas). Com "Move" você arrasta uma peça pelas setas. Com "Rotate" você gira a peça pelas argolas. Para selecionar um objeto, é só clicar nele. Para girar a câmera e ver o mundo de cima, segure o botão direito do mouse e mova; a rodinha do mouse dá zoom. A tecla "F" centraliza a câmera no objeto selecionado, o que ajuda muito quando uma peça some de vista. Antes da aula, abra o seu projeto exemplo e treine mover e girar três ou quatro peças. Isso é suficiente.

## Passo a passo da aula

Aquecimento (10 min): Reúna a turma em volta do projetor. Mostre seu cenário exemplo pronto e diga: "Olhem como ficou nosso mundo com caminho, casa e obstáculo!" Depois mostre uma cena vazia e pergunte: "O que falta aqui?" Deixe as crianças apontarem. Relembre o mapa que desenharam na aula 3 e peça que peguem a folha da planta baixa.

Conteúdo novo guiado (15 min): No projetor, no painel "Explorer" (lado direito; se não aparecer, abra em "View" maior que "Explorer"), clique em um asset para selecioná-lo. Aperte o ícone "Move" e arraste pela seta verde para subir, pela vermelha e azul para os lados. Mostre como colar dois blocos lado a lado para virar um caminho. Depois aperte "Rotate" e gire uma casinha pelas argolas para a porta ficar virada para o caminho. Por último, coloque um obstáculo no meio do percurso. Fale em voz alta cada clique.

Mão na massa (25 min): Cada criança monta o próprio cenário no computador, seguindo a planta baixa. Peça que comecem pelo caminho, depois a casa e por fim os obstáculos. Circule pela sala ajudando quem trava. Lembre-os de usar a tecla "F" se perderem uma peça de vista e de salvar com "Ctrl + S" no meio do caminho.

Desafio e compartilhar (10 min): Lance o desafio: "Adicionem mais um detalhe que conte uma história no mundo de vocês." Depois, peça que dois ou três alunos girem a câmera e mostrem o cenário no projetor, explicando por onde o jogador vai andar.

## Como explicar para crianças

Use a analogia do jogo de montar: "O mapa é o tabuleiro vazio e os assets são as pecinhas. Vocês são os arquitetos do mundo!" Para a ferramenta Move, diga: "As setas coloridas são alavancas mágicas: puxe a verde para subir, a vermelha e a azul para andar de lado." Para Rotate, diga: "As argolas são um volante de carrinho: gire devagar para virar a peça." Reforce a ideia de caminho com a pergunta: "Se você fosse o bonequinho, daria para andar daqui até a casa sem cair no vazio?"

## Erros comuns e como ajudar

O erro mais comum é a peça afundar no chão ou ficar voando. Ensine a usar a seta verde do Move para ajustar a altura e a tecla "F" para reencontrar a peça. Outro erro é arrastar a câmera achando que está movendo a peça: lembre que primeiro precisa clicar na peça e depois no ícone "Move". Algumas crianças deixam buracos entre os blocos do caminho; mostre o zoom com a rodinha para encostar bem as peças. Muitos esquecem de selecionar antes de mover e ficam frustrados; repita "clica primeiro, move depois". Por fim, se alguém apagar uma peça sem querer, "Ctrl + Z" desfaz. Mantenha a calma e comemore cada construção, mesmo a mais simples.`,
  exercicios: [
    {
      titulo: `Caça às ferramentas Move e Rotate`,
      tipo: `Reconhecimento na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete a faixa de ferramentas do Roblox Studio e peça que as crianças apontem na própria tela onde estão os ícones. Faça uma criança de cada vez vir mostrar no projetor para os colegas confirmarem.`,
      atividade: `Encontre na barra de cima do Roblox Studio o botão "Move" (setas coloridas) e o botão "Rotate" (argolas). Aponte cada um e diga, com suas palavras, para que serve.`,
      gabarito: `O botão "Move" tem setas coloridas (verde, vermelha e azul) e serve para arrastar e mover uma peça pelo mundo. O botão "Rotate" tem argolas curvas e serve para girar a peça, virando-a para o lado certo. Ambos ficam na aba "Home" ou "Model", na faixa de cima.`,
    },
    {
      titulo: `Colando um caminho de blocos`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor colando três blocos lado a lado. Depois deixe cada criança fazer o seu. Circule e use a rodinha do mouse para mostrar o zoom a quem deixar buracos entre as peças.`,
      atividade: `Use a ferramenta "Move" para colocar três blocos (Parts) bem coladinhos, um do lado do outro, formando um pedacinho de caminho reto. Não deixe buraco entre eles.`,
      gabarito: `Os três blocos ficam encostados sem espaço entre si, formando uma linha reta contínua que serve de caminho. A criança seleciona cada bloco com o clique, ativa o "Move" e usa as setas vermelha ou azul para encostar um no outro, conferindo com zoom que não sobrou buraco nem sobreposição.`,
    },
    {
      titulo: `Girando a casa para a porta certa`,
      tipo: `Prática com Rotate`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor uma casa com a porta virada para o lado errado e gire-a com o "Rotate" até a porta apontar para o caminho. Reforce a analogia do volante: girar devagar.`,
      atividade: `Coloque uma casinha voxel no fim do seu caminho e use a ferramenta "Rotate" para girar a casa até a porta dela ficar virada para o caminho, de modo que o jogador possa entrar.`,
      gabarito: `A casa fica posicionada no fim do caminho com a porta voltada para a trilha. A criança seleciona a casa, ativa o "Rotate", segura uma das argolas e gira até a entrada apontar para o caminho. O sucesso é visual: dá para imaginar o bonequinho andando pelo caminho e entrando pela porta.`,
    },
    {
      titulo: `Posicionando obstáculos no percurso`,
      tipo: `Desafio criativo`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que obstáculo é uma peça que atrapalha de propósito para deixar o jogo divertido. Peça que coloquem entre dois e três obstáculos no meio do caminho, sem bloquear totalmente a passagem.`,
      atividade: `Adicione dois ou três obstáculos (como pedras, troncos ou caixas) no meio do seu caminho. Eles devem deixar o percurso mais difícil, mas ainda permitir que o jogador desvie e passe.`,
      gabarito: `Há dois ou três obstáculos posicionados ao longo do caminho, espalhados e não amontoados, deixando espaço para o jogador desviar. O caminho continua possível de percorrer do início até a casa. A criança usou "Move" para colocar cada obstáculo e ajustou a altura com a seta verde para nenhum ficar voando ou afundado.`,
    },
    {
      titulo: `Meu cenário conta uma história`,
      tipo: `Projeto e apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio final que junta tudo. Peça que cada criança deixe o cenário com caminho, casa e obstáculos e acrescente um detalhe que conte uma história. Depois, escolha dois ou três para apresentar no projetor girando a câmera.`,
      atividade: `Deixe seu mundo completo com pelo menos um caminho, uma casa e alguns obstáculos. Acrescente um detalhe especial que conte uma história (por exemplo: uma ponte sobre um rio, uma fogueira perto da casa ou um tesouro escondido). Depois, gire a câmera e explique para a turma por onde o jogador vai andar.`,
      gabarito: `O cenário está visualmente completo e organizado: um caminho claro liga as partes, há uma casa com a porta acessível, alguns obstáculos no percurso e pelo menos um detalhe extra que dá sentido de história ao lugar. Na apresentação, a criança gira a câmera com o botão direito do mouse e descreve o trajeto do jogador do começo até o fim, mostrando que pensou na experiência de quem vai jogar.`,
    },
  ],
};
