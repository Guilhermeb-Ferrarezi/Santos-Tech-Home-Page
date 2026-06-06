import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Soltando a peça da impressora",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Retirar com segurança a peça impressa da mesa da Bambu Lab, segurá-la pela primeira vez e compará-la com o modelo 3D original na tela.`,
  descricao: `Chegou o momento mais esperado de todos: a impressão terminou e a peça está esfriando em cima da mesa da impressora. Nesta aula a criança vai viver a emoção de tirar da máquina aquilo que ela mesma desenhou no computador semanas atrás. É a hora em que o desenho vira objeto de verdade, daqueles que cabem na mão, que têm peso e que dá pra apertar de leve.

A retirada da peça é sempre feita com a ajuda do professor, porque a mesa de impressão da Bambu Lab é flexível e tem um jeito certo de soltar a peça sem forçar nem quebrar. Quando a impressora termina, a melhor coisa é esperar a mesa esfriar um pouquinho; muitas vezes a peça solta quase sozinha quando o metal esfria. Depois é só dobrar de leve a placa de aço (a chapa magnética) que a peça pula pra fora.

Com a peça na mão, vem a parte da limpeza carinhosa: tirar aquela basezinha de apoio chamada brim, soltar com cuidado os suportes que seguraram as partes que ficavam no ar e remover os fiozinhos finos de filamento, que chamamos de cabelinhos. Tudo isso usando os dedos ou um alicate pequeno, sempre com o professor por perto.

Por fim, a turma faz a comparação mágica: coloca o modelo 3D na tela do Bambu Studio do lado da peça de verdade e procura as semelhanças e as diferenças. É um momento de celebrar, conversar sobre a jornada do desenho até o objeto real e perceber que cada criança é, de verdade, uma criadora de coisas que existem no mundo.`,
  materiais: [
    `Computadores com o Bambu Studio aberto, mostrando o modelo 3D original de cada criança na tela`,
    `Impressora Bambu Lab com as peças já impressas e prontas para serem retiradas`,
    `Projetor ligado para o professor demonstrar a comparação entre modelo na tela e peça real`,
    `Placas de impressão (chapas magnéticas) com as peças ainda grudadas`,
    `Alicate de ponta fina e espátula plástica para soltar suportes e brim com cuidado`,
    `Exemplos prontos de peças já limpas e peças ainda com suportes, para mostrar o antes e o depois`,
    `Luvas pequenas ou pano limpo para segurar a placa, caso ainda esteja morninha`,
  ],
  conceitosChave: [
    `Placa magnética — a chapa de metal que fica embaixo da peça; ela é flexível e gruda na impressora por imã, como um adesivo de geladeira.`,
    `Esfriar — quando a impressão acaba, a peça e a mesa estão quentinhas; esperar esfriar deixa a peça soltar fácil e segura.`,
    `Brim — a saia fininha de plástico em volta da base da peça que ajuda ela a grudar na mesa; depois a gente solta com o dedo.`,
    `Suporte — as perninhas que a impressora cria pra segurar as partes que ficam no ar; depois de pronto a gente tira com cuidado.`,
    `Cabelinhos — fiozinhos bem finos de filamento que às vezes sobram na peça; é só puxar de leve que eles saem.`,
    `Acabamento — a limpeza carinhosa da peça pra ela ficar lisinha e bonita, pronta pra levar pra casa.`,
    `Modelo original — o desenho 3D que está na tela do Bambu Studio e que virou a peça de verdade que está na sua mão.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é a colheita do mês: a impressão já terminou e agora a criança vai retirar e segurar a própria peça. Você não precisa dominar a Bambu Lab, mas precisa saber três coisas. Primeira: nunca force a peça quando a mesa estiver quente; espere esfriar até ficar morninha ou fria ao toque. Segunda: a placa de impressão é magnética e flexível; ela sai da impressora puxando pra cima e a peça solta quando você dobra a placa de leve, como dobrar uma régua de plástico. Terceira: suportes e brim saem com os dedos ou com um alicate pequeno; o professor faz as partes mais firmes, a criança faz as fáceis. Antes da aula, confirme que cada peça já está fria e que os computadores estão com o modelo original aberto no Bambu Studio para a comparação final.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto da impressora. Pergunte: "O que aconteceu desde a aula passada?" Mostre a tela da Bambu Lab com a mensagem de impressão concluída. Relembre que o desenho do computador virou plástico de verdade, camada sobre camada.

Conteúdo novo guiado (15 min): demonstre no projetor e na máquina. Abra a tampa da impressora. Segure a placa magnética pelas bordas e puxe pra cima, retirando-a da base (ela é presa por imã). Apoie a placa numa mesa e dobre-a devagar com as duas mãos: a peça vai estalar e soltar. Mostre o brim em volta da base e puxe um pedacinho. Mostre um suporte e solte com o alicate. Nomeie cada parte em voz alta: placa magnética, brim, suporte, cabelinhos.

Mão na massa (25 min): chame uma criança por vez à impressora enquanto as outras observam ou comparam suas peças. Com você segurando a placa, deixe a criança dobrá-la de leve para a peça soltar; comemore o "estalo". Depois, na mesa, cada criança limpa a própria peça: solta o brim com o dedo, puxa os cabelinhos e, com sua ajuda, remove os suportes mais firmes. Use a espátula plástica para os pontos difíceis. Vá circulando e elogiando o cuidado de cada um.

Desafio e compartilhar (10 min): cada criança leva a peça até o computador e coloca lado a lado com o modelo original no Bambu Studio. Peça que descrevam em voz alta: "O que ficou igual ao desenho? O que ficou diferente?" Faça uma rodada rápida em que cada um mostra a peça para a turma e conta uma palavra sobre como se sente.

## Como explicar para crianças

Use a analogia do biscoito saindo da forma: "A peça é como um biscoito que assou; primeiro a gente deixa esfriar, senão queima a mão e ele quebra." Para a placa, diga que ela é "uma chapa mágica de geladeira que gruda por imã e dobra como borracha". O brim é "a saia da peça", o suporte é "as muletas que seguraram a peça no ar" e os cabelinhos são "os fios de cabelo do robô que a gente penteia pra fora". Reforce sempre a ideia central: "Você desenhou no computador e agora isso existe de verdade na sua mão."

## Erros comuns e como ajudar

O erro mais comum é a criança querer arrancar a peça com a mesa ainda quente; segure a ansiedade dela e mostre o termômetro na tela ou toque com ela na placa para sentir que ainda está quente. Outro erro é puxar o suporte com muita força e quebrar um detalhe da peça; ensine a soltar devagar, sempre da borda para o centro, e faça você as partes coladas no detalhe fino. Crianças também tentam dobrar a placa pelo meio com a peça grande no centro; oriente a dobrar pelas pontas. Se um cabelinho não sair, mostre que é só puxar reto, sem torcer. E se a peça grudou demais no brim, use a espátula plástica entrando por baixo da borda, nunca uma ponta de metal sobre a peça.`,
  exercicios: [
    {
      titulo: `Caça às partes da peça`,
      tipo: `Observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre uma peça recém-impressa ainda com brim, suportes e cabelinhos no projetor ou na mão. Aponte para cada parte e peça que a turma diga o nome em voz alta.`,
      atividade: `Olhe bem para a peça que o professor está segurando. Aponte e diga em voz alta onde está o brim, onde está um suporte e onde está um cabelinho.`,
      gabarito: `O brim é a saia fininha de plástico ao redor da base; o suporte são as perninhas que seguraram as partes no ar; os cabelinhos são os fiozinhos finos espalhados pela peça. Acertou quem identificou pelo menos duas dessas três partes.`,
    },
    {
      titulo: `Quente ou frio?`,
      tipo: `Decisão de segurança`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente duas situações: a impressora acabou agora de imprimir e a peça que já esfriou desde antes da aula. Pergunte qual delas pode ser retirada com segurança e por quê.`,
      atividade: `O professor vai contar duas situações. Decida em qual delas é seguro tirar a peça da impressora e explique com suas palavras o motivo.`,
      gabarito: `É seguro retirar a peça que já esfriou, porque a mesa quente pode queimar a mão e fazer a peça soltar de forma errada ou entortar. Esperar esfriar deixa a peça soltar fácil e segura.`,
    },
    {
      titulo: `Soltando do jeito certo`,
      tipo: `Mão na massa assistida`,
      tempo: `10 minutos`,
      guiaProfessor: `Com você segurando a placa magnética firme pelas bordas, deixe a criança dobrá-la devagar pelas pontas para a peça soltar. Reforce dobrar pelas pontas, nunca pelo meio com a peça no centro.`,
      atividade: `Com a ajuda do professor segurando a placa, dobre a chapa devagarinho pelas pontas até ouvir o estalo e a sua peça soltar. Depois pegue a peça com cuidado na mão.`,
      gabarito: `A peça solta quando a placa é dobrada de leve pelas pontas, fazendo um estalinho. Fez certo quem dobrou pelas bordas, sem forçar e sem dobrar pelo meio, e conseguiu segurar a peça inteira na mão.`,
    },
    {
      titulo: `Limpeza carinhosa`,
      tipo: `Acabamento prático`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente cada criança a soltar o brim com o dedo, puxar os cabelinhos reto e, com sua ajuda, remover os suportes da borda para o centro. Faça você as partes coladas em detalhes finos e use a espátula plástica nos pontos difíceis.`,
      atividade: `Deixe sua peça lisinha: solte o brim com o dedo, puxe os cabelinhos reto e tire os suportes devagar, começando da borda. Chame o professor para as partes mais firmes.`,
      gabarito: `A peça fica limpa quando o brim foi solto, os cabelinhos puxados e os suportes removidos sem quebrar nenhum detalhe. Acertou quem soltou as partes devagar, da borda para o centro, e pediu ajuda nos pontos mais colados.`,
    },
    {
      titulo: `Igual ou diferente do desenho?`,
      tipo: `Comparação e reflexão`,
      tempo: `13 minutos`,
      guiaProfessor: `Leve cada criança ao computador com o modelo original aberto no Bambu Studio. Coloque a peça real ao lado da tela e conduza a comparação com perguntas: o que ficou igual, o que ficou diferente e por quê. Encerre com a rodada de compartilhar.`,
      atividade: `Coloque sua peça de verdade ao lado do seu modelo na tela do Bambu Studio. Descubra uma coisa que ficou igual ao desenho e uma coisa que ficou diferente, e conte para a turma como você se sente ao segurar sua criação.`,
      gabarito: `Não há resposta única, mas a comparação deve citar pelo menos uma semelhança (o formato geral, as partes principais) e uma diferença (a cor única do filamento, marcas dos suportes, detalhes muito pequenos que mudaram). Completou quem comparou peça e modelo e partilhou um sentimento sobre a própria criação.`,
    },
  ],
};
