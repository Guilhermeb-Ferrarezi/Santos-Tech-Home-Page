import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Mover, Girar e Esticar Formas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar as três ferramentas mãos na massa do Maya — mover, girar e esticar — para transformar cubos e cilindros em formas novas e ganhar firmeza no controle do mouse.`,
  descricao: `Nas aulas passadas a turma reabriu o Maya, conheceu o estúdio 3D e descobriu como criar as primeiras formas básicas: o cubo, o cilindro, a esfera. Mas uma forma sozinha, paradinha no lugar onde nasceu, ainda não vira nada. Hoje a turma aprende o segredo de todo artista 3D: pegar uma forma simples e mexer nela até ela virar outra coisa. É a aula em que o cubo deixa de ser só um cubo.

O assunto central são as três ferramentas mais importantes da modelagem 3D, que a gente chama de "as três mágicas": mover, girar e esticar. Mover é levar a forma para outro lugar (para cima, para o lado, para a frente). Girar é virar a forma, como rodar um pião. Esticar (ou escalar) é deixar a forma maior, menor, mais comprida ou mais achatada. Com essas três coisas, um cubo vira uma mesa baixinha, um cilindro vira um poste comprido, e uma esfera achatada vira uma pizza. Tudo o que a turma vai construir no cenário do jogo, nas próximas semanas, sai dessas três mágicas.

No Maya, cada uma dessas mágicas tem uma ferramenta com um atalho de teclado bem fácil de lembrar: a letra W para mover, a letra E para girar e a letra R para esticar. Quando a criança aperta uma dessas letras com a forma selecionada, aparecem em volta dela umas setinhas e alças coloridas chamadas "manipulador". Vermelho é um caminho, verde é outro, azul é outro. A criança arrasta a alça da cor que quiser e a forma obedece. É quase como ter um controle remoto da forma.

Esta é uma aula bem prática e de muito treino de mouse. As crianças de 5 a 9 anos ainda estão ganhando firmeza para clicar, segurar e arrastar com precisão, e arrastar a alça certa é justamente esse exercício. O professor demonstra cada mágica no projetor, devagar, e depois deixa a turma repetir muitas vezes, sem pressa de ficar bonito. O objetivo não é construir nada definitivo ainda: é sair da aula com o domínio das três ferramentas, seguro para começar a montar peças de verdade do cenário na próxima aula.`,
  materiais: [
    `Um computador por criança com o Maya já aberto numa cena nova e vazia, com um cubo e um cilindro já criados e prontos para a turma mexer.`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem a demonstração na tela cheia.`,
    `Uma cena de exemplo já salva e pronta, mostrando um cubo virado mesa, um cilindro virado poste e uma esfera achatada virada pizza, para a turma ver aonde dá para chegar.`,
    `Cartões grandes com as três mágicas e seus atalhos desenhados: W de mover (setas), E de girar (círculo) e R de esticar (quadradinhos), com as cores vermelho, verde e azul.`,
    `Um cubo de brinquedo ou caixinha e um rolinho (cilindro) de verdade para a turma mover, girar e esticar com as mãos antes de ir para a tela.`,
    `Adesivos ou carimbos de "Mestre das Formas" para premiar quem dominar as três mágicas.`,
  ],
  conceitosChave: [
    `Mover — levar a forma de um lugar para o outro, para cima, para o lado ou para a frente, sem mudar o tamanho dela. O atalho é a letra W.`,
    `Girar — virar a forma no lugar, como rodar um pião ou um volante de carrinho. O atalho é a letra E.`,
    `Esticar (escalar) — deixar a forma maior, menor, mais comprida ou mais achatada. O atalho é a letra R.`,
    `Manipulador — as setinhas e alças coloridas que aparecem em volta da forma quando você escolhe uma mágica; é o controle remoto da forma.`,
    `Eixos — os três caminhos coloridos por onde a forma anda: vermelho para um lado, verde para outro e azul para o terceiro.`,
    `Selecionar — clicar numa forma para escolhê-la; só a forma escolhida obedece às mágicas, e ela fica com a borda destacada.`,
    `Desfazer — o botão mágico que volta atrás quando algo dá errado; no Maya é o Ctrl+Z, o melhor amigo do artista 3D.`,
  ],
  treinamento: `## O que o professor precisa saber

No Maya, depois que uma forma existe na cena, você a controla com três ferramentas de transformação. Elas ficam na barrinha de ferramentas à esquerda da tela (a "Toolbox"), mas o jeito mais rápido e o que vamos ensinar é pelos atalhos de teclado: W para Move (mover), E para Rotate (girar) e R para Scale (esticar/escalar). Decore essa sequência olhando o teclado: W, E e R ficam lado a lado, na ordem das mágicas.

Para usar qualquer uma, primeiro clique na forma para selecioná-la (ela fica com o contorno destacado em verde-claro). Depois aperte a letra. Aí aparece o "manipulador" em volta da forma: com Move são três setas, com Rotate são três círculos e com Scale são três alças com quadradinhos na ponta. Cada manipulador tem três cores que são os eixos: vermelho é o eixo X (esquerda-direita), verde é o eixo Y (cima-baixo) e azul é o eixo Z (frente-trás). A criança clica e arrasta a alça da cor que quiser, e a forma se mexe só naquele caminho. Há também um quadradinho ou círculo central que mexe em todas as direções ao mesmo tempo — útil para esticar a forma inteira por igual.

Antes da aula, abra o Maya, crie um cubo (menu Create, Polygon Primitives, Cube) e um cilindro (Create, Polygon Primitives, Cylinder) e deixe a cena pronta em cada computador. Ensaie uma vez: clique no cubo, aperte W e arraste a seta azul; aperte E e arraste um círculo; aperte R e arraste uma alça. Guarde no bolso o atalho mais importante de todos: Ctrl+Z desfaz a última ação. Você vai usar muito.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Maya)

10 min, aquecimento e revisão: Com a turma em roda, pegue o cubo de brinquedo e o rolinho. Mova-os pela mesa ("movi!"), gire-os na mão ("girei!") e finja esticar com as mãos ("estiquei!"). Mostre no projetor a cena de exemplo com a mesa, o poste e a pizza, e diga que tudo aquilo nasceu de um cubo, um cilindro e uma esfera. Relembre como se cria uma forma, da aula passada.

15 min, conteúdo novo guiado: Na tela do projetor, clique no cubo para selecioná-lo. Diga em voz alta: "Aperto W de mover, aparecem as setas, arrasto a vermelha". Faça e mostre. "Agora E de girar, aparecem os círculos, arrasto e ele roda". "Agora R de esticar, aparecem os quadradinhos, puxo e ele cresce". Mostre o achatado puxando uma alça só. Mostre o Ctrl+Z desfazendo.

25 min, mão na massa: Cada criança no seu computador, com o cubo e o cilindro prontos. Guie devagar, repetindo bem alto W, E, R, uma mágica de cada vez, esperando a turma toda fazer antes de seguir. Passe nas mesas conferindo se clicaram na forma certa e ajudando a pegar a alça da cor pedida. Proponha pequenos desafios: "deixem o cubo bem comprido", "girem o cilindro deitado". Entregue o adesivo de "Mestre das Formas" para quem dominar as três.

10 min, desafio e compartilhar: Lance o desafio "transforme o cubo numa coisa nova e dê um nome a ela" (mesa, caixa, tijolo). Depois faça um giro pela sala: cada criança mostra a sua forma transformada e conta qual mágica usou. Comemorem as ideias mais criativas.

## Como explicar para crianças

Chame as ferramentas de "três mágicas" e mostre com o corpo: mover é andar, girar é rodopiar, esticar é crescer ou se espreguiçar. Diga que o manipulador é o "controle remoto da forma" e que cada cor é um caminhozinho: "o vermelho leva pra um lado, o verde pra cima, o azul pra trás". Use comparações: "puxa a alça igual quem puxa uma massinha de modelar". Para o Ctrl+Z, diga que é "o botão de voltar no tempo" e que errar não é problema, é só apertar e tentar de novo. Fale pouco e mostre muito: faça você primeiro, no projetor, e só então peça que repitam.

## Erros comuns e como ajudar

Clicar no vazio e mexer sem nada selecionado: mostre que primeiro precisa clicar na forma até ela ficar destacada. Arrastar a alça errada e a forma ir para um lado inesperado: aponte a cor certa e diga "pega a vermelha". Esticar pelo quadradinho do canto e a forma virar gigante ou minúscula sem querer: use Ctrl+Z e refaça devagar. Confundir as letras W, E e R: deixe os cartões coloridos à vista e repita a ordem em voz alta. Arrastar rápido demais e a forma sumir da tela: ensine a apertar a tecla F (frame, enquadrar) para a câmera achar a forma de novo. Frustração quando não sai de primeira: comemore cada tentativa e lembre que mexer, errar e desfazer é exatamente o que os artistas 3D fazem o dia inteiro.`,
  exercicios: [
    {
      titulo: `As Três Mágicas com o Corpo`,
      tipo: `aquecimento / jogo de movimento`,
      tempo: `7 minutos`,
      guiaProfessor: `Em roda, sem computador, ensine os três gestos: mover é dar um passo para o lado, girar é rodopiar no lugar e esticar é se espreguiçar bem alto. Fale uma das palavras e a turma faz o gesto. Acelere para virar brincadeira. Ligue cada gesto ao seu atalho mostrando os cartões W, E e R.`,
      atividade: `A criança ouve a palavra mãe — "mover", "girar" ou "esticar" — e faz o gesto certo com o corpo, sem errar, mesmo quando o professor troca rápido entre as três.`,
      gabarito: `Acerta quem associa cada palavra ao gesto correto: andar para mover, rodopiar para girar e se espreguiçar para esticar. Se a criança faz os três gestos certos quando o professor fala, o objetivo foi cumprido, mesmo que tropece numa troca rápida.`,
    },
    {
      titulo: `Mover o Cubo pela Tela`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre primeiro no projetor: clique no cubo, aperte W, mostre as três setas coloridas e arraste uma de cada vez. Libere a turma para repetir no próprio computador. Passe nas mesas conferindo se selecionaram o cubo e ajudando a pegar a seta da cor pedida. Se a forma sumir, ensine a tecla F para enquadrar de novo.`,
      atividade: `A criança seleciona o cubo, aperta W e arrasta a seta vermelha para um lado e a seta azul para outro, levando o cubo para um lugar diferente da tela.`,
      gabarito: `Acerta quando o cubo sai claramente do lugar onde estava, usando as setas do manipulador de mover. Se a criança consegue arrastar a forma para uma nova posição com a ferramenta Move, está certo, mesmo que tenha precisado de ajuda para pegar a alça.`,
    },
    {
      titulo: `Girar o Cilindro Deitado`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `No projetor, clique no cilindro, aperte E e mostre os três círculos. Arraste um deles para deitar o cilindro, como derrubar um poste. Peça que cada criança tente deitar o seu cilindro. Lembre que, se ficar estranho, é só apertar Ctrl+Z e tentar de novo. Ajude quem confundir o E com as outras letras.`,
      atividade: `A criança seleciona o cilindro, aperta E e arrasta um dos círculos do manipulador até o cilindro ficar deitado, em vez de em pé.`,
      gabarito: `Acerta quando o cilindro muda de posição visivelmente — sai de em pé e fica inclinado ou deitado — usando a ferramenta de girar. Qualquer giro perceptível com a ferramenta Rotate conta como certo; não precisa ficar perfeitamente na horizontal.`,
    },
    {
      titulo: `Esticar e Achatar`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor: selecione o cubo, aperte R e os quadradinhos aparecem. Puxe uma alça só para deixar o cubo comprido (vira um tijolo) e empurre outra para achatá-lo (vira uma plaquinha). Peça que cada criança faça as duas coisas: uma forma comprida e uma achatada. Cuidado com o quadradinho central, que estica tudo por igual; aponte a alça certa quando precisarem mudar só um lado.`,
      atividade: `A criança seleciona o cubo, aperta R e usa as alças para criar duas formas diferentes: uma bem comprida (como um tijolo) e outra bem achatada (como uma plaquinha).`,
      gabarito: `Acerta quem consegue, em momentos diferentes, deixar a forma claramente mais comprida e claramente mais achatada usando a ferramenta de esticar. Se a criança altera o formato do cubo nas duas direções pedidas com o Scale, o objetivo foi cumprido.`,
    },
    {
      titulo: `Desafio: De Cubo a Coisa Nova`,
      tipo: `desafio criativo`,
      tempo: `11 minutos`,
      guiaProfessor: `Proponha o desafio final: usar as três mágicas — mover, girar e esticar — para transformar o cubo em alguma coisa nova e dar um nome a ela (mesa, caixa, tijolo, degrau). Não precisa ficar perfeito; o que vale é usar as ferramentas com intenção. Depois faça um giro pela sala em que cada criança mostra a sua criação e conta quais mágicas usou. Comemore as ideias mais criativas.`,
      atividade: `Cada criança usa pelo menos duas das três mágicas (mover, girar, esticar) para transformar o cubo em um objeto imaginado por ela, dá um nome ao resultado e conta para a turma quais ferramentas usou.`,
      gabarito: `Acerta quem transforma o cubo de forma visível usando ao menos duas das ferramentas e consegue nomear o que criou, explicando uma das mágicas que aplicou. Se a forma final é diferente do cubo original e a criança sabe dizer o que fez, o desafio está concluído.`,
    },
  ],
};
