import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dando o Acabamento Final",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Polir o modelo 3D no Blender suavizando os cantos com o sombreamento suave, endireitando peças tortas e apagando formas que sobraram, deixando o asset caprichado e pronto para ser oficial.`,
  descricao: `Nas aulas anteriores deste mês as crianças montaram as partes do objeto, pintaram com cores, escolheram materiais brilhantes e foscos e acertaram o tamanho de cada peça. Agora chega o momento de artista de verdade: o acabamento final. É como quando a gente termina um desenho e passa a borracha nos riscos que sobraram, alinha a folha e capricha nos detalhes antes de mostrar para todo mundo. Acabamento é deixar a criação bonita, limpa e organizada.

Nesta aula o professor mostra três cuidados de acabamento. O primeiro é suavizar os cantos: por padrão o Blender deixa as formas com as faces "facetadas", parecendo um diamante cheio de quininhas. Com o atalho de sombreamento suave (Shade Smooth), a superfície fica lisinha e arredondada, como uma bolinha de gude em vez de uma bola de futebol cheia de gomos. O segundo cuidado é endireitar peças que ficaram tortas, usando rotação e o alinhamento certo. O terceiro é a faxina: apagar formas que sobraram, peças escondidas dentro de outras ou objetos que ninguém vai usar.

A grande ideia é o capricho. Um modelo bem acabado é aquele que, quando a gente gira o mundo para ver de todos os lados, não tem surpresa feia: nada torto, nada saindo do lugar, nada de lixo escondido. As crianças desta idade adoram a transformação visual do Shade Smooth, porque o objeto fica liso na hora, como num passe de mágica. Esse "antes e depois" é o coração emocional da aula.

O professor conduz como um polidor de joias. Você demonstra no projetor um objeto cheio de cantos e peças tortas e, passo a passo, vai deixando ele liso, alinhado e limpinho. Depois cada criança faz o acabamento do próprio modelo. O resultado é um asset polido, do qual a turma se orgulha, pronto para virar uma peça oficial da galeria.`,
  materiais: [
    `Computadores com o Blender já aberto e o modelo de cada criança carregado, um por aluno`,
    `Projetor (ou TV grande) ligado no computador do professor para a demonstração passo a passo`,
    `Exemplo "antes": um arquivo do Blender com um objeto facetado, com uma peça torta e uma forma sobrando, para mostrar o problema`,
    `Exemplo "depois": o mesmo objeto já polido, liso e limpo, para mostrar onde a turma quer chegar`,
    `Uma bola de gude (lisa) e uma bola facetada ou um cristal de plástico, para a analogia liso versus quininhas na mão`,
    `Folha impressa com os atalhos do dia: Shade Smooth (botão direito), tecla R para girar, tecla X para apagar`,
    `Mouse com rodinha em cada computador, essencial para girar o mundo e conferir o acabamento de todos os lados`,
  ],
  conceitosChave: [
    `Acabamento — os últimos cuidados para deixar a criação limpa, alinhada e bonita antes de mostrar.`,
    `Sombreamento suave (Shade Smooth) — o comando que deixa a superfície lisinha e arredondada, sem as quininhas.`,
    `Sombreamento facetado (Shade Flat) — o jeito padrão, em que dá para ver cada lado da forma separado, cheio de cantos.`,
    `Girar a peça (tecla R) — rodar um objeto torto para deixá-lo direitinho no lugar certo.`,
    `Apagar (tecla X) — fazer a faxina, removendo uma forma que sobrou ou que está escondida sem precisar.`,
    `Conferir de todos os lados — girar o mundo com a rodinha do mouse para ver se não sobrou nada feio.`,
    `Asset oficial — a peça pronta, polida e caprichada, que pode entrar na galeria e ser usada no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

O acabamento é a etapa que separa um modelo "mais ou menos" de um asset oficial. Três comandos resolvem quase tudo, e nenhum é difícil. O primeiro é o Shade Smooth (sombreamento suave): clique com o botão direito do mouse em cima do objeto, na janela 3D, e escolha "Shade Smooth" no menu que aparece. Na hora a superfície fica lisa. Se quiser desfazer, o mesmo menu tem "Shade Flat", que volta ao jeito facetado com os cantos à mostra. Antes da aula, treine isso duas vezes: adicione uma esfera e um cilindro, deixe-os facetados, aplique o Shade Smooth e observe a diferença.

O segundo comando é a tecla R, de girar (rotate). Clique no objeto torto, aperte R, mova o mouse e a peça gira; clique uma vez para soltar. Para girar travado num eixo, aperte R e depois X, Y ou Z. O terceiro é a tecla X, de apagar: clique na forma que sobrou e aperte X; aparece um pequeno menu, escolha "Delete". E o salva-vidas de sempre é o Ctrl + Z, que desfaz qualquer passo errado. Tenha aberto um exemplo "antes" (facetado, torto, com lixo) e um "depois" (polido) para mostrar a meta.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Passe na mão da turma a bola de gude lisa e a bola facetada. Pergunte: "Qual parece mais acabada, mais caprichada?" Mostre no projetor o exemplo "antes" e o "depois" e pergunte o que mudou. Explique que hoje todos vão virar polidores, deixando o próprio modelo liso, direito e limpo.

CONTEÚDO GUIADO (15 min): No seu computador, com o projetor ligado, faça o acabamento do exemplo narrando cada clique. 1. Clique com o botão direito no objeto e escolha "Shade Smooth"; mostre a superfície ficar lisa. 2. Selecione uma peça torta, aperte a tecla R e gire até ela ficar direitinha; clique para soltar. 3. Selecione a forma que sobrou, aperte X e escolha "Delete" para apagar. 4. Gire o mundo com a rodinha do mouse e mostre que, de todos os lados, ficou limpo e caprichado.

MÃO NA MASSA (25 min): Cada criança abre o próprio modelo e faz o acabamento. Oriente a seguir a ordem: primeiro suavizar (Shade Smooth em cada peça), depois endireitar o que estiver torto (tecla R), por fim apagar o que sobrou (tecla X). Circule pela sala. Com até 10 alunos, dê atenção a quem travar. Repita o lema: "Suaviza, endireita, faz a faxina."

DESAFIO + COMPARTILHAR (10 min): Lance o desafio "gire o seu mundo e cace um defeito": cada criança roda o próprio modelo procurando algo torto ou sobrando e arruma. Depois, cada um mostra o antes e o depois para a turma, dizendo o que poliu. Puxe palmas para todos.

## Como explicar para crianças

Compare sempre com coisas do dia a dia. O Shade Smooth é "passar a mão e deixar lisinho, como alisar massinha". O facetado é "cheio de quininhas, como uma bola de futebol de gomos". Endireitar com o R é "deixar o quadro na parede reto, sem ficar torto". Apagar com o X é "passar a borracha no que sobrou" ou "varrer a sujeira que ficou no chão". E girar o mundo com a rodinha é "dar a volta na estátua para ver se as costas também estão bonitas".

## Erros comuns e como ajudar

A criança aplica o Shade Smooth e a peça fica com um brilho estranho ou esquisito: é normal em formas finas; explique que está suave, só parece diferente, e que dá para voltar com "Shade Flat". A criança aperta R e a peça gira para todo lado sem parar: lembre que é só clicar uma vez para soltar, ou apertar Esc para cancelar. Ao apagar com X, a criança seleciona a peça errada e some algo importante: ensine o Ctrl + Z, o botão mágico de voltar atrás. A criança suaviza só uma peça e esquece as outras: lembre que cada parte precisa do Shade Smooth, uma de cada vez. Alguém não acha a peça que sobrou: oriente a girar o mundo com a rodinha e a aproximar o zoom para encontrar o lixo escondido.`,
  exercicios: [
    {
      titulo: `Liso ou cheio de quininhas?`,
      tipo: `Roda de observação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, com a turma olhando o projetor e tocando a bola de gude e a bola facetada. O objetivo é treinar o olhar para perceber a diferença entre uma superfície suave e uma facetada, antes de ir para o computador.`,
      atividade: `Mostre o exemplo "antes" (facetado) e o "depois" (suave) no projetor e passe as duas bolas na mão da turma. Pergunte: "Qual está liso e qual está cheio de quininhas? Qual parece mais acabado?" As crianças apontam e dizem em voz alta.`,
      gabarito: `Resposta esperada: a bola de gude e o exemplo "depois" estão lisos e mais acabados; a bola facetada e o exemplo "antes" têm quininhas e cantos. Acertou quem reconheceu que o liso parece mais caprichado. O ganho é entender o que o acabamento vai fazer com o modelo.`,
    },
    {
      titulo: `O passe de mágica do Shade Smooth`,
      tipo: `Prática guiada no computador`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza passo a passo, todos fazendo ao mesmo tempo no Blender. É o exercício mais fácil: só clicar com o botão direito e escolher Shade Smooth. Vá devagar e espere todos verem a superfície ficar lisa.`,
      atividade: `Cada criança clica numa peça do próprio modelo, aperta o botão direito do mouse e escolhe "Shade Smooth" no menu. Observe a superfície ficar lisinha. Depois repita em outra peça do modelo.`,
      gabarito: `Sucesso é a criança aplicar o Shade Smooth em pelo menos duas peças, deixando-as suaves. Se a peça ficar com brilho estranho, está certo mesmo assim. Quem quiser comparar pode usar "Shade Flat" para voltar e "Shade Smooth" de novo, vendo o antes e o depois.`,
    },
    {
      titulo: `Endireitando a peça torta`,
      tipo: `Mão na massa individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Suba um degrau de dificuldade: agora a criança usa a tecla R para girar. Ajude quem girar demais a apertar Esc ou clicar uma vez para soltar. Circule conferindo se as peças ficaram alinhadas.`,
      atividade: `Encontre no seu modelo uma peça que ficou torta ou desalinhada. Clique nela, aperte a tecla R e gire até deixá-la direitinha no lugar; clique uma vez para soltar. Gire o mundo com a rodinha para conferir se ficou reta.`,
      gabarito: `Acertou quem selecionou a peça torta, usou a tecla R para girar e a deixou alinhada com o resto do modelo, soltando com um clique. A peça está certa se, ao girar o mundo, ela aparece reta e encaixada. Se não houver peça torta, vale girar uma de propósito e endireitar para treinar.`,
    },
    {
      titulo: `A grande faxina do modelo`,
      tipo: `Desafio no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Aumente a dificuldade: a criança precisa caçar e apagar formas que sobraram, algumas escondidas dentro de outras. Reforce o Ctrl + Z para quem apagar errado. Incentive a girar o mundo e dar zoom para encontrar o lixo.`,
      atividade: `Gire o seu mundo com a rodinha e procure formas que sobraram: peças escondidas, repetidas ou que não fazem parte do objeto. Clique em cada uma, aperte a tecla X e escolha "Delete" para apagar, deixando só o que importa.`,
      gabarito: `Sucesso é a criança encontrar e apagar pelo menos uma forma que sobrava, usando X e "Delete", sem apagar uma peça necessária (e usando Ctrl + Z se errar). O modelo está limpo quando, ao girar o mundo, só aparecem as peças que fazem parte do objeto, sem lixo escondido.`,
    },
    {
      titulo: `Meu asset polido e oficial`,
      tipo: `Desafio final e compartilhar`,
      tempo: `8 minutos`,
      guiaProfessor: `Fechamento da aula. A criança junta os três cuidados (suavizar, endireitar, apagar) num passe final de conferência e depois apresenta o antes e o depois. Puxe palmas para cada um e celebre o capricho, sem comparar uns com os outros.`,
      atividade: `Dê o acabamento final: confira se todas as peças estão suaves (Shade Smooth), se nada ficou torto (tecla R) e se não sobrou lixo (tecla X). Gire o seu mundo 3D uma última vez e mostre para a turma o antes e o depois, dizendo o que você poliu.`,
      gabarito: `O exercício deu certo quando a criança revisou o modelo nos três pontos (suave, alinhado e limpo) e apresentou dizendo ao menos um acabamento que fez, por exemplo "deixei a cabeça lisinha com o Shade Smooth". Todo modelo vale: o objetivo é entregar um asset caprichado e ter orgulho do antes e depois.`,
    },
  ],
};
