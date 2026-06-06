import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Planejando Nosso Objeto Legal",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Planejar no papel um objeto 3D com várias partes e, no Blender, revisar como adicionar e mover cubo, cilindro e cone para montar o esqueleto inicial juntando duas ou três formas.`,
  descricao: `Este mês a turma vai construir um asset 3D mais elaborado que tudo o que fizeram antes: um objeto formado por várias partes encaixadas, como um foguete, uma casinha ou uma espada. Antes de mexer no computador, todo bom criador faz um plano. Nesta primeira aula, cada criança escolhe o seu objeto e desenha no papel, dividindo o desenho em partes simples. É o mesmo que um arquiteto faz: primeiro a planta no papel, depois a construção de verdade.

A ideia central da aula é descobrir que qualquer objeto complicado é, na verdade, um monte de formas simples grudadas. Um foguete é um cilindro (o corpo) com um cone em cima (a ponta). Uma casinha é um cubo (as paredes) com um bloco achatado por cima (o telhado). Quando a criança aprende a enxergar o mundo assim, ela percebe que consegue construir quase tudo só com cubo, cilindro e cone. Isso tira o medo e dá confiança para começar.

Depois do desenho, voltamos ao Blender para uma revisão tranquila. Os alunos já conhecem essas formas dos meses anteriores, então aqui a missão é relembrar: como adicionar uma forma pelo menu Add (Adicionar), como mover uma forma com a ferramenta de mover (a setinha colorida) e como olhar o objeto de vários lados girando a visão. Não vamos detalhar nem pintar nada hoje. O objetivo é só montar o esqueleto: pegar duas ou três formas e colocá-las mais ou menos no lugar certo, formando a base do objeto.

Ao final, cada criança terá um desenho no papel e um começo de objeto 3D na tela, com algumas formas juntas. É a fundação do trabalho do mês inteiro. As próximas aulas vão montar todas as partes, pintar, dar brilho, ajustar tamanhos e finalizar. Hoje plantamos a semente: um bom plano e o primeiro encaixe de formas.`,
  materiais: [
    `Computadores com o Blender já aberto em um arquivo novo (cena inicial limpa)`,
    `Projetor ou TV grande conectada ao computador do professor para mostrar cada passo`,
    `Folhas de papel em branco e lápis de cor ou canetinhas para o desenho do plano`,
    `Exemplos prontos de assets simples já modelados no Blender (um foguete e uma casinha) para inspirar`,
    `Cartaz ou slide mostrando o cubo, o cilindro e o cone com os nomes em português`,
    `Mouse para cada criança (modelar com touchpad é muito difícil para as mãozinhas)`,
    `Adesivos de "Planejador Mestre" para premiar quem terminar o desenho com as partes marcadas`,
  ],
  conceitosChave: [
    `Asset — uma peça 3D que a gente cria para usar no jogo, como um foguete, uma árvore ou uma espada.`,
    `Planejar — desenhar e pensar antes de construir, igual a fazer a plantinha de uma casa no papel.`,
    `Partes — os pedaços simples que, juntos, formam o objeto inteiro (corpo, ponta, asas).`,
    `Forma básica — o cubo, o cilindro e o cone, as pecinhas com que montamos quase tudo.`,
    `Menu Add (Adicionar) — o menu lá em cima do Blender de onde tiramos uma forma nova para a cena.`,
    `Mover — usar a setinha colorida para arrastar uma forma e colocá-la no lugar certo.`,
    `Esqueleto — as primeiras formas juntas que formam a base do objeto, antes dos detalhes.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula. Hoje usamos só três ações que as crianças já viram: adicionar forma, mover forma e girar a visão. Deixe o Blender aberto em um arquivo novo antes da aula. Quando o Blender abre, já existe um cubo no centro da tela; você pode deixá-lo ou apagá-lo (selecione e aperte a tecla X, depois Delete). Para ADICIONAR uma forma, clique no menu "Add" (Adicionar) no canto superior esquerdo da janela 3D, vá em "Mesh" (Malha) e escolha "Cube" (Cubo), "Cylinder" (Cilindro) ou "Cone" (Cone). Para MOVER, aperte a tecla G (de "grab", agarrar) e arraste o mouse, ou clique na ferramenta de mover na barra da esquerda (o ícone com setas) e arraste a setinha colorida: vermelha é o eixo X, verde é o Y, azul é o Z (para cima e para baixo). Para GIRAR a visão e ver o objeto de outros lados, segure o botão do meio do mouse (a rodinha) e mexa. Para dar zoom, role a rodinha. Treine esses passos uma vez antes da turma chegar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sente a turma em roda. Mostre os exemplos prontos no projetor (foguete e casinha) e pergunte: "Quais formas vocês veem aqui?" Conduza até eles descobrirem o cilindro, o cone e o cubo. Brinque de "caça-formas": apontem objetos da sala e digam de que formas são feitos.

Conteúdo novo guiado (15 min): Agora o plano no papel. Cada criança escolhe um objeto (foguete, casinha ou espada). No projetor, desenhe um foguete devagar e mostre como dividir em partes: "Aqui o corpo é um cilindro, aqui a ponta é um cone." Peça que desenhem o seu objeto e marquem cada parte com a forma certa. Passe nas mesas ajudando a dividir em duas ou três partes simples.

Mão na massa (25 min): Hora do Blender. No projetor, faça o esqueleto do foguete passo a passo e peça que copiem. Clique em "Add" (Adicionar) → "Mesh" (Malha) → "Cylinder" (Cilindro): surge o corpo. Clique em "Add" → "Mesh" → "Cone": surge a ponta. Aperte G e arraste o cone para cima do cilindro (use o eixo azul Z). Gire a visão com a rodinha para conferir se encaixou. Cada criança monta o esqueleto do seu objeto com duas ou três formas. Circule ajudando.

Desafio e compartilhar (10 min): Desafie quem terminou a adicionar uma terceira forma (por exemplo, asas com dois cubinhos no foguete). Depois, cada criança gira a própria cena e mostra o esqueleto para um colega ao lado, contando quais formas usou.

## Como explicar para crianças

Use a analogia do LEGO: "Cada forma é uma pecinha de montar. Sozinha ela é simples, mas juntando várias a gente faz coisas incríveis." Para o plano no papel, diga que somos arquitetos: "Antes de construir a casa de verdade, a gente faz o desenho dela." Chame o conjunto de formas de "esqueleto", como os ossos que ficam por dentro antes de colocar a roupa. Para o eixo azul, diga que é o "elevador": ele sobe e desce a forma.

## Erros comuns e como ajudar

A criança adiciona a forma e ela some: na verdade a nova forma nasce no centro, em cima da outra; mande girar a visão e mover com o G. A criança aperta G e a forma voa para longe sem controle: ensine a apertar Z logo depois do G para travar no eixo azul e mover só para cima e para baixo. A criança não acha o menu Add: ele fica no topo, à esquerda, escrito "Add"; aponte no projetor. A criança quer desenhar um objeto com dez partes: peça para começar com duas ou três, porque o mês todo é para crescer. A criança gira a visão sem querer e fica perdida: mostre como voltar a uma vista de frente apertando a tecla 1 do teclado numérico.`,
  exercicios: [
    {
      titulo: `Caça-formas na sala`,
      tipo: `Dinâmica em roda`,
      tempo: `6 minutos`,
      guiaProfessor: `Em roda, aponte objetos da sala e dos exemplos no projetor. Pergunte de que forma básica cada um é feito. Aceite respostas próximas e celebre cada descoberta. O objetivo é treinar o olhar para enxergar formas dentro dos objetos.`,
      atividade: `Olhe à sua volta e ache objetos parecidos com as formas básicas: o que é parecido com um cubo? O que é parecido com um cilindro? E com um cone?`,
      gabarito: `A criança aponta pelo menos um objeto para cada forma. Exemplos: caixa ou dado = cubo; copo ou lata = cilindro; chapéu de festa ou casquinha de sorvete = cone. Acerto = associar a forma certa, mesmo com o objeto sendo só parecido.`,
    },
    {
      titulo: `Desenhar o meu objeto legal`,
      tipo: `Plano no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança escolhe um objeto (foguete, casinha ou espada) e desenha no papel. Ande pelas mesas ajudando quem não decide. Não cobre capricho no desenho; o importante é a ideia clara do objeto.`,
      atividade: `Escolha o seu objeto do mês e desenhe ele no papel. Pode ser um foguete, uma casinha, uma espada ou outra ideia sua. Capriche para você lembrar depois!`,
      gabarito: `Um desenho com um objeto reconhecível escolhido pela criança. Acerto = ter um plano definido para o mês. Exemplo: um foguete desenhado com corpo comprido e uma ponta triangular em cima. Não existe desenho errado aqui; o que importa é decidir o objeto.`,
    },
    {
      titulo: `Marcar as partes do desenho`,
      tipo: `Análise no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que a criança divida o próprio desenho em partes e escreva ou marque qual forma básica é cada uma. Mostre no projetor como você fez com o foguete. Ajude a manter em duas ou três partes simples.`,
      atividade: `No seu desenho, circule cada parte do objeto e escreva qual forma ela é: cubo, cilindro ou cone. Tente achar duas ou três partes.`,
      gabarito: `O desenho com as partes circuladas e nomeadas. Exemplo no foguete: corpo = cilindro, ponta = cone, asas = dois cubos. Acerto = relacionar cada parte a uma forma básica e ficar em duas ou três partes. Erro comum: marcar partes demais; ajude a juntar.`,
    },
    {
      titulo: `Adicionar duas formas no Blender`,
      tipo: `Prática no Blender`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor: menu "Add" (Adicionar) → "Mesh" (Malha) → escolher a forma. A criança adiciona duas formas do seu objeto. Lembre que a nova forma nasce no centro, em cima da anterior; por isso parece que sumiu. Deixe-os girarem a visão com a rodinha para ver.`,
      atividade: `No Blender, clique em "Add" (Adicionar), depois "Mesh" (Malha) e traga para a cena duas formas do seu objeto, por exemplo um cilindro e um cone. Gire a visão com a rodinha do mouse para ver as duas.`,
      gabarito: `Duas formas básicas adicionadas à cena, visíveis ao girar a visão. Acerto = usar o menu Add corretamente duas vezes. Exemplo: um cilindro e um cone na tela, ainda um sobre o outro. É normal elas começarem grudadas no centro.`,
    },
    {
      titulo: `Montar o esqueleto juntando as partes`,
      tipo: `Desafio final no Blender`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora a criança move as formas para o lugar certo, formando o esqueleto. Ensine a apertar G e depois Z para mover só para cima e para baixo (eixo azul). Quem terminar com duas formas pode adicionar uma terceira. Valorize tentar encaixar, mesmo que não fique perfeito.`,
      atividade: `Mova as suas formas para o lugar certo e monte o esqueleto do seu objeto. Aperte G e depois Z para subir ou descer uma forma, como um elevador. Coloque, por exemplo, o cone bem em cima do cilindro.`,
      gabarito: `Duas ou três formas posicionadas formando a base do objeto. Exemplo: o cone encaixado no topo do cilindro, virando a pontinha do foguete. Acerto = usar G e Z para mover e deixar as formas parecendo o objeto do desenho, mesmo sem precisão perfeita.`,
    },
  ],
};
