import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando Meu Item",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Esticar, mover e duplicar partes de um cubo no Blender para dar ao item escolhido o formato que a criança imaginou.`,
  descricao: `Na aula passada cada criança conheceu o Blender, aprendeu a girar a câmera e abriu o programa pela primeira vez. Hoje a gente coloca a mão na massa de verdade: vamos pegar aquele cubo cinza que aparece no centro da tela e transformá-lo no item que cada aluno escolheu para a loja do Roblox, como uma espada, um chapéu, um robô ou um sorvete. A ideia é esculpir com blocos, como quem brinca de massinha ou de blocos de montar.

Para isso, a criança vai usar três superpoderes do modelador 3D: mover (pegar uma parte e levar para outro lugar), esticar (a famosa ferramenta de Extrude, que puxa uma face do cubo para fora e cria um novo pedaço) e duplicar (copiar uma parte inteira para repetir, como fazer dois braços iguais). Com esses três poderes dá para construir quase qualquer coisa. Um robô, por exemplo, é só um corpo, dois braços esticados e uma cabeça duplicada e diminuída.

O segredo desta aula é o Modo de Edição (Edit Mode). Até agora a criança mexia no objeto inteiro por fora; agora ela entra dentro do objeto para mexer nas partes (os vértices, as arestas e as faces). É como a diferença entre carregar uma caixa fechada e abrir a caixa para mexer no que tem dentro. O professor vai demonstrar tudo no projetor primeiro, devagar, e só depois soltar a turma para criar.

O resultado de hoje não precisa ficar perfeito nem bonito. O importante é que cada criança saia da aula com um bloco que já lembra o item dela: com a forma geral certa. O capricho nas cores e no acabamento vem nas próximas aulas. Hoje é dia de dar forma.`,
  materiais: [
    `Computadores com o Blender já aberto e o cubo inicial na tela (um por criança)`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar`,
    `Exemplos prontos no projetor: um robô e uma espada simples modelados com cubos esticados`,
    `Folha de papel e lápis para a criança desenhar o item antes de modelar`,
    `Lista impressa de atalhos grandes: G (mover), E (esticar/Extrude), Shift+D (duplicar), Tab (Modo de Edição)`,
    `Mouse com rodinha para cada computador (modelar com touchpad é muito difícil para a idade)`,
    `Cronômetro ou timer visível para marcar o tempo de cada parte da aula`,
  ],
  conceitosChave: [
    `Modo de Edição (Edit Mode) — quando você entra dentro do objeto para mexer nas partes dele, e não no objeto inteiro por fora.`,
    `Vértice — cada cantinho do modelo, o pontinho onde as linhas se encontram, como o canto de uma caixa.`,
    `Face — cada lado chapado do cubo, como a parede de uma caixa que dá para empurrar e puxar.`,
    `Esticar (Extrude) — puxar uma face para fora e criar um pedaço novo, igual esticar chiclete.`,
    `Mover (Grab) — pegar uma parte e arrastar para outro lugar na tela.`,
    `Duplicar (Duplicate) — fazer uma cópia exata de uma parte, perfeito para repetir braços e pernas.`,
    `Modo de Objeto (Object Mode) — quando você mexe no objeto inteiro por fora, do jeito que estava na aula passada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista 3D para dar esta aula. Precisa só saber quatro atalhos e ter testado uma vez antes. O Blender tem dois modos: o Modo de Objeto (Object Mode), onde a criança mexe no cubo inteiro, e o Modo de Edição (Edit Mode), onde ela mexe nas partes. A tecla Tab troca entre os dois, e o nome do modo aparece no canto superior esquerdo da janela 3D, num menu suspenso. Os quatro atalhos da aula são: Tab (entrar e sair do Modo de Edição), G de Grab (mover, é só apertar G e mexer o mouse, depois clicar com o botão esquerdo para soltar), E de Extrude (esticar uma face para fora) e Shift+D (duplicar). Importante: depois de apertar G ou E, a criança não segura o mouse, ela só mexe e dá um clique para confirmar. Treine isso antes da aula até ficar natural.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada criança mostre o desenho do item que escolheu na aula 1. Se alguém não tem, dê dois minutos para desenhar num papel. No projetor, gire a câmera do cubo (segure o botão do meio do mouse e mexa) para revisar a navegação da aula passada. Pergunte: de quais blocos é feito o item de vocês?

Conteúdo novo guiado (15 min): no projetor, clique no cubo (ele fica com a borda laranja). Aperte Tab e mostre que agora aparecem pontinhos (vértices) e linhas. Diga em voz alta: entramos dentro do cubo. No topo da janela, mostre os três botõezinhos de seleção (ponto, linha, quadrado) e clique no quadrado (modo Face). Clique numa face do cubo, aperte E, puxe o mouse para cima e clique: nasceu um pedaço novo. Faça de novo. Depois aperte G e mostre como mover. Por fim, no Modo de Objeto (Tab para sair), selecione o cubo e aperte Shift+D para duplicar, mova e clique.

Mão na massa (25 min): solte a turma. Cada criança entra no Modo de Edição (Tab) e começa a esticar faces (E) para formar o item do desenho. Circule pela sala sem parar. Para um robô: estique o topo para a cabeça, estique duas faces laterais para os braços. Para uma espada: estique uma face muito comprida para a lâmina e uma pequena para o cabo. Vá de mesa em mesa elogiando e desentravando.

Desafio e compartilhar (10 min): desafie quem terminou a deixar o item com pelo menos quatro partes diferentes. Depois, peça que cada criança gire a câmera e mostre o bloco para a turma em dez segundos. Aplauda todos.

## Como explicar para crianças

Use a analogia da massinha e dos blocos de montar o tempo todo. Diga: o Modo de Edição é como abrir a caixa para mexer dentro; o Modo de Objeto é a caixa fechada. Para o Extrude, fale puxa a parede como chiclete. Para o mover, diga pega e arrasta. Para o duplicar, diga é a máquina de xerox: faz uma cópia igualzinha. Evite as palavras vértice e face nos primeiros minutos; comece com cantinho e parede e só depois apresente os nomes certos.

## Erros comuns e como ajudar

O erro número um é a criança esquecer de apertar Tab e tentar esticar no Modo de Objeto, onde o E não funciona. Olhe o canto superior esquerdo: se não estiver escrito Edit Mode, aperte Tab. O erro número dois é segurar o mouse depois de apertar G ou E; ensine a soltar e mexer, depois um clique. O erro número três é arrastar para muito longe e perder a parte de vista; ensine a apertar a tecla Home, que enquadra tudo de novo na tela. O erro número quatro é clicar fora e perder a seleção; mostre que basta clicar de novo na face. Se a criança fizer uma bagunça sem volta, ensine o Ctrl+Z (desfazer), o botão mágico que conserta tudo.`,
  exercicios: [
    {
      titulo: `Entrando e saindo da caixa`,
      tipo: `Aquecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto com a turma, contando em voz alta. O objetivo é só treinar a tecla Tab e reconhecer os dois modos. Verifique o canto superior esquerdo da tela de cada criança.`,
      atividade: `Clique no cubo até ele ficar com a borda laranja. Aperte Tab e observe: apareceram pontinhos e linhas? Então você está no Modo de Edição. Aperte Tab de novo para voltar ao Modo de Objeto. Faça isso cinco vezes dizendo em voz alta entrei e saí.`,
      gabarito: `No Modo de Edição aparecem os vértices (pontinhos) e as arestas (linhas), e o canto superior esquerdo mostra Edit Mode. No Modo de Objeto o cubo fica liso com a borda laranja e o canto mostra Object Mode. A tecla Tab alterna entre os dois.`,
    },
    {
      titulo: `Meu primeiro esticão`,
      tipo: `Prática guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor. Garanta que cada criança esteja no Modo de Edição e com o modo Face (o botão de quadradinho no topo) ativado antes de começar.`,
      atividade: `No Modo de Edição, clique numa face do cubo (um lado fica destacado). Aperte a tecla E, mexa o mouse para cima e dê um clique para soltar. Você acabou de esticar um pedaço novo. Aperte Ctrl+Z para desfazer e tente esticar para o lado.`,
      gabarito: `Apertar E (Extrude) com uma face selecionada cria uma nova parte que sai do cubo na direção em que o mouse for movido. Um clique confirma. O cubo agora tem um pedaço a mais. Ctrl+Z desfaz a ação e o cubo volta ao normal.`,
    },
    {
      titulo: `Mover e copiar`,
      tipo: `Prática`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe a criança trabalhar mais sozinha. Circule e cheque se ela solta o mouse depois de apertar G e Shift+D, em vez de segurar. Lembre da tecla Home para reenquadrar.`,
      atividade: `Estique uma face com E para criar um braço. Agora aperte G, mova o braço um pouco e clique. Volte ao Modo de Objeto com Tab, selecione o objeto e aperte Shift+D para fazer uma cópia; mova a cópia para o lado e clique. Você tem dois objetos parecidos.`,
      gabarito: `G (Grab) move a parte ou o objeto selecionado, confirmando com um clique. Shift+D duplica, criando uma cópia idêntica que gruda no mouse até o clique confirmar a posição. Mover sem soltar o mouse antes não funciona: aperta-se a tecla, move-se e clica-se.`,
    },
    {
      titulo: `Construindo o meu item`,
      tipo: `Mão na massa`,
      tempo: `15 minutos`,
      guiaProfessor: `Esta é a parte principal. Cada criança modela o item do desenho dela. Passe de mesa em mesa. Para robô: cabeça em cima, dois braços nas laterais. Para espada: lâmina comprida e cabo curto. Elogie o esforço, não a beleza.`,
      atividade: `Olhe o seu desenho. Usando E para esticar, G para mover e Shift+D para duplicar, transforme o cubo no seu item. Tente fazer pelo menos a forma geral: se é um robô, ele precisa de cabeça e braços; se é uma espada, precisa de lâmina e cabo. Gire a câmera para conferir de todos os lados.`,
      gabarito: `Não existe uma resposta única. O modelo está correto quando tem a forma geral do item planejado, feito com partes esticadas, movidas e duplicadas a partir do cubo. Exemplo de robô: corpo (cubo), cabeça (topo esticado e ajustado) e dois braços (faces laterais esticadas). O capricho fino fica para as próximas aulas.`,
    },
    {
      titulo: `Desafio das quatro partes`,
      tipo: `Desafio e compartilhar`,
      tempo: `7 minutos`,
      guiaProfessor: `Para quem terminou rápido. Incentive a contar as partes em voz alta. No compartilhar, dê dez segundos para cada criança girar a câmera e mostrar o item. Aplauda todos, mesmo os inacabados.`,
      atividade: `Deixe o seu item com pelo menos quatro partes diferentes, usando esticar e duplicar. Conte as partes apontando para cada uma. Depois aperte Home para enquadrar, gire a câmera e mostre o seu bloco para a turma explicando o que é.`,
      gabarito: `O desafio está cumprido quando o modelo tem quatro ou mais partes visíveis criadas a partir do cubo (por exemplo, corpo, cabeça e dois braços de um robô). Espera-se que a criança nomeie cada parte e gire a câmera com o botão do meio do mouse para apresentar o item.`,
    },
  ],
};
