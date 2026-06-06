import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Gráfico, IA e Canva",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança transforma os números da sua planilha em um gráfico colorido com um clique, cria uma figura do seu tema usando IA por um comando guiado e monta uma arte simples no Canva juntando o título e a imagem, finalizando todas as peças do seu projeto final.`,
  descricao: `Esta é a aula em que o projeto final ganha cor e ganha cara. Nas semanas anteriores a criança escolheu o tema, fez o plano, escreveu o documento e preencheu a planilha com números. Tudo isso já está pronto e guardado. Hoje a turma pega esses números meio sem graça, só feitos de algarismos, e os transforma em algo lindo de olhar: um gráfico de barras coloridas. É a mágica de ver um monte de números virar um desenho que conta uma história só de bater o olho.

Depois do gráfico, vem a parte que mais encanta: criar uma figura com Inteligência Artificial. A criança vai dizer ao computador, com a ajuda do professor, o que ela quer ver desenhado, e a IA vai inventar essa imagem do nada. Para uma criança de 5 a 9 anos, isso parece um superpoder de fazer aparecer qualquer figura do mundo. O segredo é o comando, que a gente chama de pedido: quanto mais clarinho o pedido, mais bonita fica a imagem. O professor guia palavra por palavra, porque as crianças ainda escrevem pouco.

A última peça do dia é o Canva, a ferramenta de montar artes. Lá a criança junta tudo numa folha só: coloca o título grandão do seu projeto em cima e a figura que a IA criou embaixo. É como montar um cartaz da escola, mas no computador, arrastando as coisas para o lugar. No fim da aula, cada criança terá nas mãos três tesouros novos: um gráfico, uma imagem de IA e uma arte do Canva.

Com isso, todas as peças do projeto ficam prontas. Da próxima vez a turma só vai juntar tudo na apresentação. Por isso hoje é um dia de fechamento e de orgulho: a criança vê que, sozinha, com o professor do lado, ela criou coisas de verdade no computador, com capricho, sobre um tema que ela mesma escolheu.`,
  materiais: [
    `Um computador por aluno (até 10), com a planilha do projeto de cada criança já aberta, e as abas do Canva e da ferramenta de imagem por IA prontas para abrir, deixadas assim antes da turma chegar.`,
    `O computador do professor ligado a um projetor ou TV grande, para demonstrar cada clique no telão bem devagar.`,
    `Um gráfico-exemplo pronto feito pelo professor a partir de uma planilha simples, para mostrar o resultado antes de começar.`,
    `Uma imagem-exemplo já criada por IA (por exemplo, um gato astronauta colorido), impressa ou na tela, para mostrar do que a IA é capaz.`,
    `Uma arte-exemplo pronta no Canva com um título grande em cima e uma figura embaixo, mostrando como fica a peça final.`,
    `Folhas de papel e lápis de cor para o exercício de desenhar o gráfico e escrever o pedido para a IA.`,
    `Adesivos ou carimbos de carinha feliz para premiar quem terminar as três peças com capricho.`,
  ],
  conceitosChave: [
    `Gráfico — um desenho de barrinhas coloridas que mostra os números da planilha de um jeito fácil de entender só de olhar.`,
    `Barra — cada coluna colorida do gráfico; quanto maior o número, mais alta fica a barra.`,
    `Inteligência Artificial (IA) — um ajudante esperto dentro do computador que desenha figuras e responde quando a gente pede com palavras.`,
    `Pedido (comando) — a frase que a gente escreve para a IA dizendo o que queremos que ela desenhe; quanto mais clarinho, melhor.`,
    `Canva — a ferramenta de montar artes e cartazes no computador, arrastando títulos e figuras para o lugar.`,
    `Arrastar — segurar uma figura com o mouse e levar ela para outro lugar da folha sem soltar até chegar.`,
    `Selecionar — clicar uma vez em cima dos números ou da figura para escolher com quem o computador vai trabalhar.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você vai conduzir três mini-tarefas seguidas: gráfico na planilha, imagem por IA e montagem no Canva. Faça uma de cada vez, sem misturar, para a criança não se perder. Tudo já deve estar aberto antes da aula.

Para o gráfico: a planilha (Excel ou Google Planilhas) já tem os números do projeto. Você seleciona os números (clica e arrasta por cima deles, eles ficam com uma borda azul), depois vai no menu "Inserir" e clica em "Gráfico". No Excel, escolha "Gráfico de Colunas" (as barrinhas em pé). No Google Planilhas, o gráfico aparece sozinho e você pode trocar o tipo no painel da direita, em "Tipo de gráfico". Pronto: os números viraram barras. É literalmente um clique depois de selecionar.

Para a IA: use a ferramenta de imagem que a escola já deixou aberta. Existe um campo de texto onde se digita o pedido. Você, o professor, digita; a criança dita. Um bom pedido é curto e claro, em português: por exemplo, "um dinossauro azul comendo sorvete, colorido, desenho infantil". Clique no botão "Criar" ou "Gerar" e espere a figura aparecer. Importante: você sempre revisa o pedido antes de enviar, e nunca deixa a criança digitar nomes de pessoas reais nem pedir coisas que não sejam do tema. É uma ferramenta supervisionada pelo adulto, do começo ao fim.

Para o Canva: abra um cartaz ou apresentação em branco. Para o título, clique em "Texto" (lado esquerdo) e em "Adicionar caixa de texto"; digite o título do projeto e arraste para o topo. Para a figura, clique em "Enviar" (ou "Uploads"), suba a imagem que a IA criou, e arraste ela para o meio da folha. Arrastar é segurar com o mouse e soltar no lugar.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Receba a turma e relembre: "Quem lembra dos números que a gente colocou na planilha?". Mostre no telão a planilha cheia de números e diga: "Hoje eles vão virar um desenho colorido, vão virar uma figura mágica e vão entrar num cartaz!". Mostre rapidinho os três exemplos prontos (gráfico, imagem de IA, arte do Canva). As crianças costumam fazer "uau".

2. Conteúdo novo guiado (15 min). No telão, bem devagar, faça as três peças do exemplo. Primeiro o gráfico: selecione os números arrastando, vá em "Inserir", clique em "Gráfico", escolha colunas. "Viraram barrinhas!". Depois a IA: digite um pedido clarinho que a turma ditar, clique em "Criar", espere a figura. Por fim o Canva: adicione uma caixa de texto com o título e arraste; suba a figura em "Enviar" e arraste para o meio. Mostre a arte montada.

3. Mão na massa (25 min). Cada criança no seu computador. Guie em coro, uma peça por vez. Gráfico: "Pintem os números arrastando o mouse... agora Inserir... agora Gráfico!". Espere todos verem as barras. IA: passe de mesa em mesa, a criança dita, você digita o pedido e clica em Criar, juntos. Canva: "Cliquem em Texto, escrevam o título, arrastem para cima... agora Enviar, peguem a figura, arrastem para o meio". Ajude quem travar.

4. Desafio e compartilhar (10 min). Desafio: "Escolha a cor que você mais gostou para uma barra do seu gráfico e mostre sua arte do Canva para o coleguinha do lado." Quem terminar as três peças com capricho ganha adesivo. Termine reunindo a turma: cada um mostra no telão (ou na própria tela) o gráfico, a figura e o cartaz, com palmas.

## Como explicar para crianças de 5 a 9 anos

Chame o gráfico de "a corridinha das barras": a barra do número maior é a que ganhou, é a mais alta. Chame a IA de "o robô que desenha o que a gente pede" e o pedido de "a cartinha mágica para o robô". Reforce: "quanto mais a gente conta para o robô, mais bonito ele desenha". Para o Canva, use a ideia de cartaz: "é a nossa cartolina do computador, a gente cola o título em cima e a figura no meio". Para arrastar, diga "segura a figura com o dedo do mouse e leva passeando até o lugar, sem soltar no caminho". Faça gestos: mão subindo para a barra alta, mão escrevendo no ar para o pedido, mão arrastando para o Canva.

## Erros comuns e como ajudar

O erro mais comum no gráfico é não selecionar os números antes, e aí o botão "Gráfico" não faz nada; mostre que os números precisam estar com a borda azul acesa primeiro. Na IA, as crianças querem pedidos enormes e confusos; ajude a deixar curto e claro, e lembre que você revisa o pedido antes de enviar. Algumas ficam ansiosas porque a imagem demora uns segundos; diga "o robô está pensando, espera ele". No Canva, o erro clássico é clicar e soltar a figura cedo demais, e ela cai no lugar errado; mostre "segura até chegar". Outros digitam o título numa caixa minúscula que some atrás da figura; ajude a deixar o texto grande e em cima. Nunca faça tudo pela criança: guie a mão dela e deixe ela dar o clique final, para o orgulho ser dela.`,
  exercicios: [
    {
      titulo: `A corridinha das barras`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda de frente para o telão. Mostre um gráfico de barras simples feito de poucos números (por exemplo, frutas que a turma mais gosta). Aponte e pergunte: "Qual barra é a mais alta? Então qual número é o maior?". Deixe várias crianças responderem apontando. Use a mão subindo no ar para mostrar a barra mais alta. Conecte com o projeto: "o gráfico do seu projeto vai ser assim, mostrando seus números".`,
      atividade: `Olhe o gráfico no telão. Aponte com o dedo qual é a barra MAIS ALTA e diga em voz alta: essa é a do número maior. Depois aponte a barra mais baixinha, a do número menor. Mostre com a mãozinha no ar: bem alto para a barra grande, bem baixinho para a pequena.`,
      gabarito: `A barra mais alta é a do número maior; a mais baixa é a do menor. A criança acerta se aponta corretamente a maior e a menor barra e entende que altura da barra mostra o tamanho do número, mesmo usando as próprias palavras.`,
    },
    {
      titulo: `Meus números viram barras`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Com cada criança na sua planilha já preenchida, guie em coro. Conte os passos juntos: pintar os números arrastando o mouse por cima até ficarem com a borda azul, ir no menu Inserir, clicar em Gráfico e escolher as colunas (barrinhas em pé). Comemore o "viraram barras!". Passe de mesa em mesa ajudando quem não conseguiu selecionar os números ou clicou no lugar errado.`,
      atividade: `1. Pinte os seus números: segure o mouse e arraste por cima deles até ficarem com a borda azul. 2. Vá lá em cima no menu Inserir. 3. Clique em Gráfico. 4. Escolha o de barrinhas em pé (colunas) e veja seus números virarem barras coloridas.`,
      gabarito: `A criança seleciona os números (borda azul visível) e insere um gráfico de colunas que mostra esses números como barras. Acertou quando o gráfico aparece na tela com uma barra para cada número, sem ajuda no clique final.`,
    },
    {
      titulo: `A cartinha mágica para o robô`,
      tipo: `Desenho`,
      tempo: `10 min`,
      guiaProfessor: `Dê uma folha e lápis de cor. Cada criança vai inventar e desenhar a figura que quer pedir para a IA sobre o tema do seu projeto, e dizer o pedido em voz alta para você anotar. Desenhe um exemplo no quadro (um peixe roxo num castelo) e diga o pedido junto. Quem já escreve pode tentar escrever três palavras do pedido embaixo; quem não escreve só desenha e dita. Passe perguntando "o que você vai pedir para o robô?".`,
      atividade: `Pense numa figura do seu projeto que você quer que o robô desenhe. 1. Desenhe ela na folha do jeito que você imagina. 2. Pinte com as cores que ela vai ter. 3. Fale para o professor o seu pedido bem clarinho, dizendo a figura e as cores (por exemplo: um cavalo azul correndo num campo verde).`,
      gabarito: `Espera-se um desenho da figura desejada e um pedido falado claro, com o objeto e ao menos uma cor. Acertou se a criança consegue descrever em voz alta o que quer (figura + cor), mesmo com o desenho simples, pois esse pedido é o que vai virar o comando para a IA.`,
    },
    {
      titulo: `O robô desenhista`,
      tipo: `Jogo`,
      tempo: `12 min`,
      guiaProfessor: `Brincadeira de "pedido bom ou pedido confuso". No telão, mostre dois pedidos rapidinhos para a IA: um clarinho ("um sapo verde sorrindo, desenho infantil") e um confuso ("coisa legal aí"). A turma grita "PEDIDO BOM!" e faz joinha para o claro, ou "CONFUSO!" e balança a cabeça para o sem graça. Pergunte: "Qual deles o robô vai conseguir desenhar bonito?". Acelere para virar brincadeira e reforce que um bom pedido diz a figura e a cor.`,
      atividade: `Olhe cada pedido no telão. Se ele conta direitinho a figura e a cor, grite "PEDIDO BOM!" e faça joinha. Se ele é confuso e não diz o que é, grite "CONFUSO!" e balance a cabeça. No fim, ajude a consertar o pedido confuso falando o que faltou.`,
      gabarito: `Pedido bom = diz a figura e a cor de forma clara. Pedido confuso = não diz o que desenhar. Acertou quem identifica o pedido claro e sabe dizer que falta a figura ou a cor no pedido confuso para arrumá-lo.`,
    },
    {
      titulo: `Meu cartaz no Canva`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Desafio final no computador, juntando tudo. Cada criança monta uma arte no Canva com DUAS peças: o título do projeto em cima e a figura da IA no meio. Ajude na caixa de texto (clicar em Texto, escrever, arrastar para cima) e no envio da imagem (clicar em Enviar, subir a figura, arrastar para o meio). Lembre de segurar a figura até chegar no lugar. Quem montar com capricho mostra para a turma e ganha adesivo.`,
      atividade: `Monte o seu cartaz no Canva: 1. Clique em Texto e em Adicionar caixa de texto; escreva o título do seu projeto e arraste ele para o alto da folha. 2. Clique em Enviar, suba a figura que o robô desenhou e arraste ela para o meio. 3. Veja seu título em cima e sua figura embaixo. 4. Mostre o cartaz pronto para a turma. Lembre: segure a figura até ela chegar no lugar!`,
      gabarito: `A arte final tem o título do projeto no topo e a figura da IA posicionada no meio, ambos visíveis e organizados. Acertou quem coloca o texto em cima e arrasta a imagem para o lugar sem soltar no caminho; o nível completo é montar as duas peças sozinho e apresentar à turma.`,
    },
  ],
};
