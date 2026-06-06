import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O Mundo das Cores no Blender",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Descobrir onde ficam as cores no Blender, criar um material novo e pintar cada parte do objeto 3D com uma cor diferente, vendo a mágica da pré-visualização colorida na tela.`,
  descricao: `Nas aulas anteriores deste mês, cada criança planejou um objeto legal e montou as partes dele no Blender juntando formas. Agora os objetos estão prontinhos em formato 3D, mas ainda estão todos cinzas, parecendo de pedra. Nesta aula, vamos dar vida a eles com cores! As crianças vão aprender que, no Blender, a cor não é só "pintar por cima": a gente cria uma coisa chamada material, e é o material que carrega a cor.

O material é como uma "roupa" que vestimos no objeto. Cada parte do objeto pode vestir uma roupa de cor diferente. Por exemplo, num foguete, o corpo pode vestir vermelho, a ponta pode vestir amarelo e as janelas podem vestir azul. Para isso, o professor vai mostrar onde ficam os botões de material no Blender: do lado direito da tela existe uma coluna de ícones (o painel de Propriedades), e um deles é uma bolinha vermelha e branca chamada Material Properties. É ali que toda a mágica das cores acontece.

A grande novidade desta aula é a pré-visualização. Quando a criança troca o modo de exibição da tela para o modo colorido (Material Preview), ela vê na hora o objeto ganhando cor de verdade, com luz e sombrinha. Isso encanta muito as crianças, porque o objeto deixa de ser cinza e fica parecido com um brinquedo de verdade. É um momento de "uau!" que vale a pena celebrar com a turma.

Esta é apenas a introdução às cores. Nesta aula focamos em criar materiais e escolher cores chapadas (sólidas) para cada parte. Na próxima aula vamos aprofundar como deixar um material brilhante ou fosco. Aqui o objetivo é simples e poderoso: cada criança termina a aula com seu objeto colorido, com pelo menos duas ou três partes em cores diferentes.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo do objeto de cada criança carregado (o objeto montado na Aula 2)`,
    `Projetor ou tela grande ligada ao computador do professor para demonstrar cada passo ao vivo`,
    `Um exemplo pronto feito pelo professor: o mesmo tipo de objeto, mas já colorido com várias cores (para mostrar o "antes e depois")`,
    `Cartões impressos com bolinhas de cores (vermelho, azul, amarelo, verde) para a brincadeira de escolher cores longe da tela`,
    `Mouse com rodinha para cada criança (ajuda muito a girar e dar zoom no objeto)`,
    `Folha de papel e lápis de cor para a criança planejar quais cores quer usar antes de mexer no computador`,
  ],
  conceitosChave: [
    `Material — é a "roupa colorida" que vestimos no objeto 3D no Blender; é ele que guarda a cor da parte.`,
    `Material Properties — o botão de bolinha vermelha e branca, do lado direito da tela, onde a gente cria e escolhe as cores.`,
    `Cor Base (Base Color) — o quadradinho de cor que a gente clica para abrir o círculo de cores e escolher a cor que queremos.`,
    `Slot de material — uma "gavetinha" na lista onde cada material fica guardado; cada parte pode ter sua própria gavetinha.`,
    `Material Preview — o modo da tela que liga as cores de verdade, com luz e sombra, para ver o objeto colorido na hora.`,
    `Botão Novo (New) — o botão que clicamos para criar um material novinho quando a parte ainda não tem cor nenhuma.`,
    `Atribuir (Assign) — quando o objeto tem várias partes juntas, é o botão que cola a cor escolhida só na parte que selecionamos.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra o Blender e teste você mesmo o caminho das cores. No Blender, a cor mora dentro de um material. Do lado direito da tela há uma coluna fina de ícones chamada painel de Propriedades. Procure o ícone de uma bolinha vermelha e branca (parece uma esfera): é o Material Properties. Clique nele. Se o objeto ainda não tem material, aparece um botão grande escrito Novo (em inglês, New). Ao clicar, surge um quadradinho chamado Cor Base (Base Color). Clicar nesse quadradinho abre uma roda de cores: você arrasta o pontinho e escolhe a cor.

Para ver a cor na tela, troque o modo de exibição. No canto superior direito da janela 3D há quatro bolinhas pequenas em fila. A segunda, que parece uma esfera lisa, é o Material Preview. Clique nela e o objeto fica colorido com luz e sombra. Pratique esse caminho duas ou três vezes até ficar automático, pois você vai repetir com cada criança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma e mostre no projetor o objeto cinza da Aula 2 ao lado do seu exemplo já colorido. Pergunte: "Qual está mais legal?" Faça a brincadeira dos cartões de cores: cada criança escolhe no papel quais cores quer no objeto dela e desenha com lápis de cor. Isso planeja a aula longe da tela.

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, mostre passo a passo. Primeiro clique no ícone da bolinha vermelha e branca (Material Properties) à direita. Aponte com o mouse bem devagar. Clique em Novo. Mostre o quadradinho Cor Base, clique nele e abra a roda de cores. Escolha uma cor bem forte (vermelho) e diga "viu, nada mudou ainda na tela?". Então clique nas quatro bolinhas do canto superior direito e ligue o Material Preview. A turma vê o objeto ganhar cor: celebre o "uau!". Repita criando um segundo material para outra parte.

Mão na massa (25 min): Agora cada criança faz no próprio computador. Passe de mesa em mesa. Garanta que todos liguem o Material Preview primeiro, para verem o resultado na hora. Ajude cada um a criar um material, escolher uma cor e, se o objeto tiver várias partes, selecionar a próxima parte e criar outro material. A meta é cada criança ter pelo menos duas ou três cores diferentes no objeto.

Desafio e compartilhar (10 min): Lance o desafio: "Deixe seu objeto com três cores diferentes e uma cor que ninguém da turma usou!". Depois, gire a cadeira ou use o projetor para cada criança mostrar seu objeto colorido e dizer qual foi a cor favorita dela.

## Como explicar para crianças

Use a ideia de roupa: "O objeto está pelado e cinza, vamos vestir uma roupa colorida nele". Chame o material de "roupa de cor". Diga que a bolinha vermelha e branca é o "guarda-roupa". A roda de cores é a "caixa de tintas mágica". E o Material Preview é o "botão de ligar as cores". Use frases curtas e mostre antes de pedir para fazer.

## Erros comuns e como ajudar

O erro mais comum é a criança escolher a cor mas achar que "não funcionou", porque esqueceu de ligar o Material Preview; lembre sempre de ligar as quatro bolinhas primeiro. Outro erro é clicar fora do quadradinho Cor Base e fechar a roda de cores sem querer; mostre que basta clicar de novo. Algumas crianças criam vários materiais sem querer clicando muitas vezes em Novo; ensine que um clique já basta. E há quem queira pintar uma parte mas pinte o objeto todo: nesse caso, lembre que objetos de uma peça só recebem uma cor, e que partes separadas é assunto que aprofundamos depois.`,
  exercicios: [
    {
      titulo: `Caça ao botão das cores`,
      tipo: `Reconhecimento na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete a tela do Blender e peça que a turma encontre o ícone certo. Vá apontando com o mouse e deixe as crianças dizerem "é esse!". Reforce que o painel fica do lado direito.`,
      atividade: `Olhe a coluna de ícones do lado direito da tela. Aponte e diga onde está a bolinha vermelha e branca que abre o mundo das cores (o Material Properties).`,
      gabarito: `O ícone é a bolinha vermelha e branca (parece uma esfera) na coluna de Propriedades, do lado direito da tela. É o Material Properties, onde criamos e escolhemos os materiais.`,
    },
    {
      titulo: `Meu primeiro material colorido`,
      tipo: `Mão na massa guiado`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada criança no caminho: clicar no ícone de material, clicar em Novo, clicar no quadradinho Cor Base e escolher uma cor. Garanta que liguem o Material Preview para verem o resultado.`,
      atividade: `Crie um material novo no seu objeto: clique na bolinha vermelha e branca, clique em Novo, clique na Cor Base e escolha sua cor favorita. Depois ligue o Material Preview e veja a mágica.`,
      gabarito: `A criança clica no Material Properties, clica em Novo, abre a Cor Base na roda de cores, escolhe uma cor e liga o Material Preview. O objeto aparece colorido na tela com luz e sombra.`,
    },
    {
      titulo: `Antes e depois`,
      tipo: `Observação e conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Peça para a criança alternar entre o modo cinza (Solid) e o modo colorido (Material Preview) clicando nas quatro bolinhas do canto superior direito. Conduza a conversa sobre a diferença.`,
      atividade: `Clique nas bolinhas do canto de cima para desligar e ligar as cores. Conte para um colega o que muda no seu objeto quando você liga o Material Preview.`,
      gabarito: `No modo Solid o objeto fica cinza, sem as cores do material. No modo Material Preview o objeto mostra as cores escolhidas, com luz e sombra, ficando parecido com um brinquedo de verdade.`,
    },
    {
      titulo: `Três cores diferentes`,
      tipo: `Desafio prático`,
      tempo: `7 minutos`,
      guiaProfessor: `Ajude as crianças cujo objeto tem partes separadas a selecionar cada parte e criar um material próprio. Para objetos de peça única, oriente trocar a Cor Base e pensar em qual parte futura usariam cada cor.`,
      atividade: `Deixe seu objeto com pelo menos três cores diferentes. Para cada parte, crie um material e escolha uma cor que combine. Escolha cores bem diferentes umas das outras.`,
      gabarito: `O objeto fica com três ou mais materiais, cada um com uma Cor Base diferente, e as cores aparecem corretamente no Material Preview. Por exemplo: corpo vermelho, ponta amarela e janela azul.`,
    },
    {
      titulo: `Cor secreta da turma`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Estimule a originalidade: peça que cada criança escolha uma cor que ache que ninguém usou (como roxo, laranja ou rosa). Na hora de compartilhar, confira se houve cores repetidas e celebre as diferentes.`,
      atividade: `Escolha uma cor especial para o seu objeto que você acha que nenhum colega usou. Depois mostre seu objeto colorido para a turma e diga qual foi sua cor secreta.`,
      gabarito: `A criança adiciona ou troca um material para uma cor pouco comum (por exemplo, roxo, laranja, turquesa ou rosa) e apresenta o objeto explicando a escolha. Não há cor errada; o importante é criar um material novo e mostrar a cor na tela.`,
    },
  ],
};
