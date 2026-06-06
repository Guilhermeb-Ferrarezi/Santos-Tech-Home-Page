import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Meu Primeiro Brinquedo 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança constrói sozinha, com ajuda do professor, um brinquedinho 3D próprio juntando formas, ajustando o tamanho e pintando, e escolhe qual objeto quer levar para o Roblox.`,
  descricao: `Nesta aula cada criança vira a dona de um projeto de verdade: ela escolhe um objetinho simples que existe no mundo real — um docinho, um robozinho, uma chave, uma estrelinha — e constrói esse objeto em 3D dentro do Maya. É a primeira vez que a turma junta tudo o que aprendeu no mês inteiro em uma só criação que pertence a cada aluno.

Até agora as crianças conheceram o Maya, espiaram o mundo 3D, fizeram aparecer o cubo, brincaram com bola, caixa e tubo, aprenderam a mexer, virar e crescer as formas, e pintaram do jeito delas. Aula 7 é o momento de juntar essas peças como quem monta um brinquedo de blocos: combinar duas ou três formas básicas, encaixar uma na outra, deixar do tamanho certo e dar uma cor bonita.

O segredo da aula é que não existe resposta errada. Cada criança imagina o seu brinquedo e o professor ajuda a transformar essa ideia em formas simples. Um robô pode ser uma caixa (o corpo) com uma caixa menor em cima (a cabeça) e dois tubinhos do lado (os braços). Um docinho pode ser uma bola em cima de um cilindro. A mágica é perceber que objetos complicados são feitos de formas fáceis grudadas.

Esse brinquedo é importante porque será o asset que a criança vai querer levar para o Roblox nas próximas aulas. Ao terminar, cada aluno terá um objeto 3D feito por ele mesmo, com nome, tamanho ajustado e cor escolhida — um pequeno tesouro digital pronto para a próxima etapa da viagem.`,
  materiais: [
    `Computadores (um por criança) com o Maya já aberto em uma cena nova e vazia`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela`,
    `Arquivo de exemplo com três brinquedos prontos (um robozinho, um docinho e uma chave) para inspirar a turma`,
    `Folhas de papel e lápis de cor para a criança desenhar o brinquedo antes de montar`,
    `Cartões grandes impressos com as figuras das formas básicas: cubo, esfera e cilindro`,
    `Lista impressa com os passos principais (Criar forma, Mexer, Crescer, Pintar) colada perto de cada computador`,
    `Um carimbo, adesivo ou estrelinha para premiar quem terminar o brinquedo`,
  ],
  conceitosChave: [
    `Asset — um objeto pronto feito no computador, como um brinquedo digital que a gente guarda para usar depois.`,
    `Combinar formas — juntar duas ou mais formas simples (caixa, bola, tubo) para fazer um objeto maior e mais legal.`,
    `Encaixar — colocar uma forma bem do ladinho ou em cima da outra, sem deixar buraco no meio.`,
    `Ajustar o tamanho — deixar cada peça do tamanho certo: uma maior, outra menor, para o brinquedo ficar bonito.`,
    `Pintar — escolher uma cor e dar para a forma, como pintar um desenho com tinta colorida.`,
    `Cena — a tela escura onde a gente constrói, como uma mesa vazia onde a criança monta o brinquedo dela.`,
    `Salvar — guardar o brinquedo no computador para ele não sumir e poder voltar na próxima aula.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

Esta aula junta tudo do mês: criar formas, mover, girar, redimensionar e aplicar cor. Você não precisa ser especialista em Maya — só precisa dominar quatro ações simples e repeti-las com calma.

Criar uma forma: menu superior "Create" depois "Polygon Primitives" e escolha "Cube", "Sphere" ou "Cylinder". A forma aparece no centro da cena (a área 3D escura do meio da tela). Mover: aperte a tecla W e arraste as setinhas coloridas (vermelha = lado, verde = cima/baixo, azul = frente/trás). Girar: tecla E. Crescer ou diminuir: tecla R e arraste os quadradinhos. Pintar: clique na forma com o botão direito, segure e escolha "Assign New Material", depois "Lambert"; no painel da direita ("Attribute Editor") clique no retângulo de cor ao lado de "Color" e escolha uma cor no círculo. Para salvar: "File" depois "Save Scene As" e digite um nome.

Um brinquedo aqui é só duas ou três dessas formas posicionadas juntas. Não há agrupamento nem modelagem avançada — apenas encaixar peças lado a lado, como blocos de montar.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

Aquecimento (10 min): Mostre os três brinquedos de exemplo no projetor. Pergunte: "De quais formas esse robô é feito?" Deixe as crianças apontarem caixas e tubos. Relembre as teclas W (mover) e R (crescer) fazendo um cubo aparecer e mexendo nele na frente da turma.

Conteúdo novo guiado (15 min): Construa um brinquedo simples ao vivo, devagar. Exemplo robozinho: "Create" depois "Polygon Primitives" depois "Cube" para o corpo. Crie outro "Cube" para a cabeça, aperte W e arraste a seta verde para subir até encostar no corpo. Crie um "Cylinder" para o braço, gire com E e mova com W até o lado do corpo. Diga cada clique em voz alta. Por fim pinte: botão direito segurado depois "Assign New Material" depois "Lambert" depois escolha a cor.

Mão na massa (25 min): Cada criança constrói o seu brinquedo escolhido. Passe de mesa em mesa. Lembre a ordem na lousa: 1) Criar forma; 2) Mexer (W); 3) Crescer (R); 4) Repetir para a próxima peça; 5) Pintar. Não exija perfeição. Ajude a encaixar peças que ficaram flutuando.

Desafio e compartilhar (10 min): Cada criança gira a câmera (segure Alt e arraste com o botão esquerdo) e mostra o brinquedo para a turma, dizendo o nome dele. Salve a cena de cada um com "File" depois "Save Scene As".

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use a ideia de blocos de montar: "Todo brinquedo é feito de pecinhas. A gente vai pegar uma caixa, uma bola, um tubo e grudar tudo junto." Para encaixar, diga "cola a cabeça em cima do corpo, sem deixar buraco". Para o tamanho, diga "a cabeça é menorzinha que o corpo, igual à sua cabeça". Para pintar, "agora escolhe a cor favorita do seu brinquedo". Mostre sempre antes de pedir; nesta idade o olho ensina mais que a palavra.

## Erros comuns e como ajudar

Peças flutuando longe: a criança criou uma forma e ela ficou no centro, longe da outra. Ajude a apertar W e arrastar até encostar. Tudo do mesmo tamanho: lembre a tecla R para deixar uma peça maior e outra menor. Some a forma: às vezes ela vai para trás de outra; gire a câmera (Alt mais botão esquerdo) para achar. Não acha a cor: confira se clicou na forma certa antes de "Assign New Material". Frustração por querer algo difícil: traga de volta para duas ou três formas simples — "vamos fazer fácil e bonito".`,
  exercicios: [
    {
      titulo: `Aquecendo as formas`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de começar o brinquedo, peça que cada criança faça aparecer uma forma e brinque com ela. Mostre no projetor o caminho "Create" depois "Polygon Primitives" e diga as teclas W e R em voz alta. Passe nas mesas confirmando que cada um conseguiu criar e mexer.`,
      atividade: `Crie um cubo usando "Create" depois "Polygon Primitives" depois "Cube". Aperte W e mexa o cubo para o lado. Depois aperte R e deixe o cubo bem grandão.`,
      gabarito: `A criança acertou se na tela dela aparecer um cubo que saiu do centro (foi movido) e está maior do que o tamanho original. O professor vê o cubo deslocado e crescido.`,
    },
    {
      titulo: `Caça às formas do brinquedo`,
      tipo: `Jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor os três brinquedos de exemplo (robô, docinho, chave). Faça um jogo rápido: aponte para uma parte e a turma grita qual forma é. Premie quem acerta com uma estrelinha. Isso treina o olhar de "objeto = formas juntas".`,
      atividade: `Olhe o robô na tela. Grite qual forma é cada parte: o corpo é uma ___? A cabeça é uma ___? O braço é um ___? Agora faça o mesmo com o docinho e a chave.`,
      gabarito: `Respostas esperadas: corpo = caixa (cubo); cabeça = caixa (cubo); braço = tubo (cilindro); docinho = bola (esfera) em cima de tubo (cilindro); chave = tubo comprido com uma bola ou caixa na ponta. Acerta quem identifica formas simples em cada parte.`,
    },
    {
      titulo: `Desenhando meu brinquedo`,
      tipo: `Desenho no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que cada criança desenhe o brinquedo que quer montar no Maya e pinte com a cor escolhida. Circule pelas mesas ajudando a quebrar o desenho em formas: "isso aqui é uma bola, isso é uma caixa". O desenho vira o mapa da construção.`,
      atividade: `Desenhe no papel o brinquedo que você quer fazer no computador. Pinte com a cor que ele vai ter. Depois conte para o professor de quais formas (caixa, bola, tubo) ele é feito.`,
      gabarito: `O desenho está completo quando a criança consegue nomear pelo menos duas formas simples que compõem o brinquedo e diz a cor escolhida. Não importa a beleza do traço, e sim conseguir explicar as peças.`,
    },
    {
      titulo: `Montando o brinquedo de verdade`,
      tipo: `Prática na ferramenta`,
      tempo: `20 minutos`,
      guiaProfessor: `Esta é a atividade principal. Guie pela ordem da lousa (Criar, Mexer, Crescer, Repetir, Pintar). Construa junto a primeira peça com a turma e depois libere para cada um seguir o próprio desenho. Passe de mesa em mesa encaixando peças soltas e lembrando das teclas. Salve a cena de cada criança no final.`,
      atividade: `Siga o seu desenho. 1) Crie a primeira forma ("Create" depois "Polygon Primitives"). 2) Mexa com W até o lugar certo. 3) Cresça ou diminua com R. 4) Crie a segunda forma e encaixe na primeira. 5) Pinte cada peça com botão direito segurado depois "Assign New Material" depois "Lambert" depois escolha a cor.`,
      gabarito: `Pronto quando o brinquedo tem pelo menos duas formas encaixadas (encostadas, sem flutuar longe), com tamanhos diferentes entre as peças e ao menos uma cor aplicada. O professor confirma vendo um objeto reconhecível e colorido na cena.`,
    },
    {
      titulo: `Mostra e batiza`,
      tipo: `Roda de conversa e desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme uma roda. Cada criança gira a câmera (Alt mais botão esquerdo) para mostrar o brinquedo de todos os lados e dá um nome para ele. Pergunte por que escolheu esse brinquedo para levar ao Roblox. Termine salvando a cena com "File" depois "Save Scene As" usando o nome do brinquedo.`,
      atividade: `Gire a câmera segurando Alt e arrastando com o botão esquerdo. Mostre seu brinquedo para a turma. Dê um nome para ele e diga: "Meu brinquedo se chama ___ e ele é feito de ___ e ___." Depois salve com o nome do brinquedo.`,
      gabarito: `Concluído quando a criança gira a câmera, fala o nome do brinquedo, cita as formas que usou e a cena é salva com nome. Sucesso é todo aluno terminar com um asset nomeado e guardado, pronto para o Roblox.`,
    },
  ],
};
