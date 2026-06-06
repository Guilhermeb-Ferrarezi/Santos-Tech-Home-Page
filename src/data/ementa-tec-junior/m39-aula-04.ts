import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Construindo Meu Item Cubo a Cubo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança começa a modelar de verdade, no MagicaVoxel, o item que desenhou na Semana 1, empilhando voxels até deixar a forma base firme e bem proporcional.`,
  descricao: `Chegou o grande momento: as crianças saem do papel e vão construir o item delas dentro do MagicaVoxel, cubinho por cubinho. Na Semana 1 elas desenharam a ideia (uma espada, um chapéu, uma poção, uma coroa); hoje essa ideia ganha forma de verdade na tela. Cada voxel é como uma peça de LEGO: a gente empilha um em cima do outro até a forma aparecer. O foco desta aula é só a FORMA BASE, sem cor e sem detalhes finos. Isso vem nas próximas semanas.

O conceito mais importante de hoje é a proporção. Proporção quer dizer o tamanho das partes comparado com o todo. Uma espada precisa ter a lâmina bem mais comprida que o cabo; uma coroa precisa ser larga embaixo e ter pontas em cima. Se a criança colocar voxels demais ou de menos em um lugar, o item fica torto ou "gordo". O professor vai circular pela sala ajudando a contar voxels e a comparar com o desenho da Semana 1, que deve ficar do lado do teclado o tempo todo como mapa.

O segundo cuidado é deixar o item FIRME, ou seja, sem voxels soltos no ar e sem buracos no meio que não deviam existir. No MagicaVoxel um cubo pode flutuar sozinho, mas na hora de virar item de loja isso fica estranho. Por isso a regra de ouro da aula é: cada voxel novo precisa encostar em outro voxel. A gente constrói de baixo para cima, como uma casa, começando pela base que apoia tudo.

Ao fim da hora, o objetivo não é o item lindo e colorido. É a forma base pronta: dá para olhar e reconhecer "isso é uma espada", "isso é um chapéu". A cor brilhante vem na Aula 5 e os detalhes na Aula 6. Hoje celebramos quem conseguiu erguer a estrutura inteira, firme e parecida com o desenho.`,
  materiais: [
    `Computadores (um por aluno) com o MagicaVoxel já aberto e um modelo novo vazio na tela`,
    `Projetor ligado para o professor mostrar cada passo na tela grande`,
    `Os desenhos da Semana 1 de cada criança, impressos ou em folha, ao lado do teclado`,
    `Dois ou três exemplos de forma base prontos no MagicaVoxel (uma espada simples, um chapéu) para mostrar a meta da aula`,
    `Peças de LEGO ou blocos de montar de verdade para a analogia do aquecimento`,
    `Folha de "mapa de voxels" quadriculada e lápis para quem quiser planejar antes de empilhar`,
  ],
  conceitosChave: [
    `Voxel — é um cubinho 3D, como uma peça de LEGO quadrada; a gente junta vários para formar qualquer coisa.`,
    `Forma base — é o "esqueleto" do item, só os blocos que dão o formato, ainda sem cor nem enfeite.`,
    `Proporção — é o tamanho de cada parte comparado com o todo; a lâmina da espada é comprida, o cabo é curtinho.`,
    `Empilhar — colocar um voxel em cima ou do lado do outro para a forma ir crescendo, sempre encostando.`,
    `Base — a fileira de baixo que apoia o item inteiro; construímos de baixo para cima, como uma casa.`,
    `Firme — quando nenhum voxel está solto no ar e tudo está grudado; um item firme não desmonta.`,
    `Ferramenta Attach (anexar) — o botão do MagicaVoxel que adiciona um voxel novo quando você clica.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista de games para dar esta aula. Precisa saber três coisas no MagicaVoxel: como adicionar um cubo, como apagar um cubo e como girar a câmera. Abra o programa antes da aula e teste. No painel da esquerda fica a barra de ferramentas; o botão que importa hoje é o "Attach" (anexar, com ícone de lápis ou de mais), que adiciona voxels quando você clica na grade. Ao lado fica o "Erase" (borracha), que apaga. Para girar a vista, segure o botão direito do mouse e arraste; para dar zoom, use a rolitinha do mouse. A grade no chão é o seu "tabuleiro": é nela que a base do item vai apoiar. Lembre que hoje é só FORMA, então não toque na paleta de cores ainda.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Mostre as peças de LEGO. Pergunte: "Como vocês fariam uma espada de LEGO?" Deixe duas crianças explicarem. Conecte: "No computador é igual, mas a peça se chama voxel." Peça que cada um pegue o desenho da Semana 1 e diga em voz alta o que vai construir.

15 min — Conteúdo novo guiado. No projetor, abra um modelo vazio. Clique na ferramenta "Attach". Clique na grade do chão para colocar o primeiro voxel: "essa é a base". Coloque uma fileira: clique e arraste para nascer vários de uma vez. Depois suba um andar clicando em cima de um voxel já existente. Mostre a regra de ouro: "todo cubo novo encosta em outro". Gire a câmera com o botão direito para mostrar que a forma tem frente, lado e fundo. Apague um cubo errado com o "Erase" para mostrar que dá para corrigir sem medo.

25 min — Mãos na massa. Cada criança constrói a base do seu item, de baixo para cima. Circule sem parar. Faça três perguntas a cada aluno: "Qual é a base?", "Esse cubo está encostando?", "Está parecido com o seu desenho?". Ajude a contar voxels para acertar a proporção (por exemplo: "a lâmina tem 8 cubos de altura e o cabo só 2"). Quem terminar a forma base ajuda o colega do lado a contar.

10 min — Desafio e compartilhar. Lance o desafio: "Gire o item e mostre que ele é firme, sem nenhum cubo voando." Cada criança vira a câmera e mostra o item para a turma em 20 segundos. Elogie a forma, não a beleza: hoje a vitória é a estrutura de pé.

## Como explicar para crianças

Use a analogia do LEGO o tempo todo: "voxel é peça de LEGO quadrada". Para proporção, use o corpo: "se um braço fosse gigante e o outro pequenininho, ia ficar estranho, né? O item é igual." Para "construir de baixo para cima", diga: "ninguém constrói o telhado antes da parede". Para firmeza: "cubo solto no ar é cubo fantasma, ele não pode existir no nosso item." Repita a regra de ouro como um refrão: "encostou, valeu; flutuou, apagou".

## Erros comuns e como ajudar

Erro 1: colocar voxels soltos no ar. Mostre o cubo fantasma girando a câmera e ajude a apagar com o "Erase". Erro 2: item "gordo", grosso demais. Peça para comparar com o desenho e contar quantos cubos de largura ele realmente precisa. Erro 3: querer pintar já. Lembre com carinho: "cor é na próxima aula, hoje é só o esqueleto". Erro 4: apagar tudo com raiva quando erra. Mostre que o "Erase" tira um cubo de cada vez e que errar e corrigir faz parte. Erro 5: girar a câmera sem querer e achar que perdeu o trabalho. Mostre que é só a vista que mudou, o item continua lá; gire de volta com o botão direito.`,
  exercicios: [
    {
      titulo: `Achando os botões da forma`,
      tipo: `Reconhecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no projetor primeiro, devagar, e depois peça que cada criança aponte na própria tela. Não deixe ninguém clicar em cor ainda.`,
      atividade: `No MagicaVoxel, encontre e mostre para o professor três coisas: o botão "Attach" (adicionar cubo), o botão "Erase" (apagar cubo) e a grade do chão onde a base vai apoiar.`,
      gabarito: `O "Attach" é a ferramenta de adicionar voxels (ícone de lápis ou de mais) na barra de ferramentas da esquerda; o "Erase" é a borracha, ao lado dele; a grade do chão é o tabuleiro quadriculado no centro da tela onde o primeiro voxel é colocado.`,
    },
    {
      titulo: `A base que apoia tudo`,
      tipo: `Prática inicial`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada criança comece pela fileira de baixo. Quem pular para o "andar de cima" sem base vai ter cubo flutuando depois.`,
      atividade: `Construa só a base do seu item: clique e arraste com o "Attach" para criar a primeira fileira de voxels no chão, do tamanho que o seu desenho da Semana 1 mostra.`,
      gabarito: `A criança deve ter uma fileira ou plataforma de voxels assentada na grade do chão, sem nenhum cubo no ar, do comprimento parecido com a base do desenho. Exemplo: para uma espada, a base é o pé do cabo; para um chapéu, é a aba larga embaixo.`,
    },
    {
      titulo: `Subindo andar por andar`,
      tipo: `Construção orientada`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a regra de ouro: cada voxel novo encosta em outro. Circule contando voxels em voz alta com a criança para acertar a altura.`,
      atividade: `A partir da base, suba o seu item de baixo para cima, empilhando voxels até chegar na altura do desenho. Cada cubo novo precisa estar encostando em outro.`,
      gabarito: `O item deve crescer em camadas conectadas, sem buracos no meio nem cubos soltos. A altura final fica próxima da proporção do desenho. Exemplo: lâmina da espada com cerca de 8 cubos de altura sobre um cabo de 2 a 3 cubos.`,
    },
    {
      titulo: `Caça ao cubo fantasma`,
      tipo: `Verificação e correção`,
      tempo: `7 minutos`,
      guiaProfessor: `Ensine a girar com o botão direito do mouse. Muitos não percebem o cubo solto até olharem por outro ângulo.`,
      atividade: `Gire a câmera do seu item segurando o botão direito do mouse e olhe por todos os lados. Ache qualquer voxel solto no ar ("cubo fantasma") e apague com o "Erase". Conserte buracos que não deviam existir.`,
      gabarito: `Depois da correção, ao girar a câmera o item aparece firme: nenhum voxel flutuando e nenhum buraco indesejado. Se havia um cubo fantasma, ele foi removido com o "Erase"; se havia um vão na forma, foi preenchido com o "Attach".`,
    },
    {
      titulo: `Espelho do desenho`,
      tipo: `Comparação e ajuste de proporção`,
      tempo: `8 minutos`,
      guiaProfessor: `Coloque o desenho da Semana 1 ao lado da tela. Ajude a comparar tamanho das partes, não os detalhes. O objetivo é reconhecer o item, não deixá-lo perfeito.`,
      atividade: `Compare a forma base na tela com o seu desenho da Semana 1. Veja se as partes têm a proporção certa (parte comprida comprida, parte larga larga). Adicione ou apague voxels até o item ficar parecido e explique para o professor uma coisa que você ajustou.`,
      gabarito: `A forma base final é reconhecível como o item do desenho e tem proporções coerentes: partes longas continuam longas, partes largas continuam largas. A criança consegue nomear um ajuste, por exemplo "deixei a lâmina mais comprida" ou "diminuí a largura do chapéu para não ficar gordo".`,
    },
  ],
};
