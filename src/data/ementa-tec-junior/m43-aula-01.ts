import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O que vira peça de verdade",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir por que algumas formas 3D viram peças impressas de verdade e outras não, observando exemplos bons e ruins para impressão.`,
  descricao: `Neste mês a turma vai usar o Maya para modelar itens 3D que serão impressos de verdade, em plástico, na impressora 3D da escola. Mas antes de abrir o programa e começar a criar, as crianças precisam entender uma ideia muito importante: nem tudo o que parece bonito na tela do computador funciona quando sai para o mundo real. Esta primeira aula é a aula do olhar atento, em que a turma vira detetive de peças e aprende a enxergar o que dá certo e o que dá errado na impressão.

Quando um objeto está só na tela, ele pode flutuar no ar, ser fino como um fio de cabelo ou ter espinhos minúsculos, e mesmo assim continua lá, perfeito. A impressora 3D, porém, trabalha como um confeiteiro que monta um bolo camada por camada, de baixo para cima. Se a peça não tem uma base que apoia no chão, ela tomba. Se uma parte é fina demais, ela quebra. Se a forma é cheia de detalhes minúsculos, eles somem ou viram uma bagunça. Por isso, três coisas importam muito: tamanho que cabe na impressora, base estável que segura a peça em pé e formas simples que a máquina consegue construir.

Nesta aula o professor mostra exemplos prontos, no projetor e, se possível, peças de verdade na mão, comparando uma versão boa e uma versão ruim do mesmo objeto. As crianças observam, tocam, comentam e começam a montar um cartaz mental de regras: o que faz uma peça ser amiga da impressora. Esse conhecimento será o guia de todas as aulas seguintes, quando elas finalmente vão modelar suas próprias peças no Maya.

O entregável do mês é um modelo pronto para impressão, e tudo começa aqui, com a turma entendendo que criar para imprimir é diferente de criar só para a tela. É uma aula de observação, conversa e descoberta, com pouca mão no mouse e muito olho esperto.`,
  materiais: [
    `Computadores com o Maya aberto (um por dupla), só para olhar exemplos hoje`,
    `Projetor ou TV grande ligada ao computador do professor`,
    `Exemplos prontos no Maya: dois arquivos, uma peça boa e uma peça ruim para impressão`,
    `Peças impressas de verdade na mão: uma que deu certo e uma que quebrou ou tombou`,
    `Uma régua e uma fita métrica para medir tamanhos`,
    `Cartolina e canetões para montar o cartaz de regras da turma`,
    `Fichas de papel com desenhos de objetos para a atividade de detetive`,
  ],
  conceitosChave: [
    `Impressão 3D — quando a máquina monta um objeto de plástico de verdade, camada por camada, de baixo para cima.`,
    `Base estável — a parte de baixo da peça, larga e plana, que faz ela ficar em pé sem cair.`,
    `Forma simples — um desenho sem detalhes minúsculos demais, que a impressora consegue construir bem.`,
    `Parte fina — pedaço muito estreito da peça, como um palito, que quebra fácil quando vira plástico.`,
    `Tamanho da impressora — o espaço dentro da máquina; a peça precisa caber ali, nem grande nem minúscula demais.`,
    `Flutuar no ar — quando uma parte da peça não toca em nada embaixo; na tela funciona, na impressão cai.`,
    `Peça amiga da impressora — objeto pensado para ser impresso: base boa, tamanho certo e formas tranquilas.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para dar esta aula. Hoje o Maya entra só como vitrine: a turma vai olhar dois exemplos prontos, não modelar. O coração da aula é a conversa sobre o que faz uma peça funcionar na impressora 3D. Guarde três ideias na cabeça: tamanho (a peça cabe na máquina?), base estável (ela fica em pé sozinha?) e formas simples (a máquina consegue construir sem detalhes minúsculos?). Se você entender por que uma peça ruim falha, conduz a aula com tranquilidade. A impressora trabalha como um confeiteiro empilhando camadas de baixo para cima: sem apoio embaixo, a camada de cima desaba.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma com as peças impressas de verdade na mesa, uma boa e uma quebrada. Pergunte: por que vocês acham que esta aqui quebrou? Deixe as crianças tocarem e darem palpites. Relembre que no Ano 4 elas já criaram itens 3D; agora o desafio novo é imprimir de verdade.

Conteúdo novo guiado (15 min): no computador do professor, com o Maya já aberto e projetado, abra o primeiro arquivo de exemplo. Vá em File, depois Open Scene, escolha a peça boa e clique em Open. Use o mouse para girar a câmera: segure a tecla Alt e arraste com o botão esquerdo do mouse; assim a peça gira e todos veem a base larga embaixo. Aproxime e afaste com a rodinha do mouse. Depois abra a peça ruim do mesmo jeito (File, Open Scene) e gire para mostrar a base fininha ou a parte que flutua no ar. Aponte na tela: vejam, esta perninha é fina como um palito, vai quebrar. Compare as duas lado a lado.

Mão na massa (25 min): vire a turma em detetives. Entregue as fichas com desenhos de objetos e, em duplas, peça que marquem cada um como amigo ou inimigo da impressora, escrevendo o porquê. Em seguida, montem juntos o cartaz de regras na cartolina: base larga, sem partes finas, tamanho que cabe, formas simples. Cada dupla pode usar a régua para medir um exemplo e dizer se cabe na impressora.

Desafio e compartilhar (10 min): cada dupla escolhe uma ficha inimiga e conta para a turma como consertaria aquela peça para ela virar amiga da impressora. Cole o cartaz na parede; ele será o guia do mês.

## Como explicar para crianças

Use a analogia do confeiteiro: a impressora monta a peça como um bolo de muitos andares, colocando uma camada de plástico de cada vez, de baixo para cima. Pergunte: dá para colocar um andar do bolo no ar, sem nada embaixo? Não, ele cai. Por isso toda peça precisa de chão embaixo. Para partes finas, mostre um palito e dobre até quebrar: viram assim de fácil? Em plástico é parecido. Para tamanho, mostre a impressora ou uma caixa e diga que a peça precisa caber ali dentro, como um brinquedo cabe na caixa.

## Erros comuns e como ajudar

As crianças costumam achar que, se ficou bonito na tela, vai imprimir bem; mostre na prática que a tela aceita coisas que a máquina não aceita. Outro erro é confundir base estável com peça grande: explique que o que importa é a base ser larga e plana embaixo, não a peça ser enorme. Algumas duplas vão querer logo mexer no Maya e modelar; segure com carinho, diga que hoje é dia de olhar e descobrir, e que na próxima aula elas vão planejar a peça delas. Se alguém travar para decidir se um objeto é amigo ou inimigo, faça as três perguntas-guia: tem base? tem parte fina? cabe na impressora? As respostas resolvem quase tudo.`,
  exercicios: [
    {
      titulo: `Toque e adivinhe`,
      tipo: `Observação em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Passe as duas peças impressas de verdade pela turma. Faça uma criança de cada vez falar uma diferença que sentiu ou viu. Anote as ideias no quadro sem julgar.`,
      atividade: `Pegue na mão a peça que deu certo e a peça que quebrou. Diga uma diferença entre elas: qual parece mais firme? Onde a peça quebrada parece fraca?`,
      gabarito: `A peça boa tem base larga e plana embaixo e formas grossas; a quebrada tem partes finas ou base estreita. Respostas esperadas: a quebrada é fina aqui, a boa fica em pé sozinha, a boa é mais grossa e firme.`,
    },
    {
      titulo: `Amigo ou inimigo da impressora`,
      tipo: `Classificação em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue as fichas com desenhos de objetos. Cada dupla separa em dois montes: amigo e inimigo. Circule e peça que justifiquem com uma das três regras.`,
      atividade: `Olhe cada ficha. Coloque no monte amigo se a peça tem base larga, é grossa e cabe na impressora. Coloque no monte inimigo se tem parte fina, flutua no ar ou é minúscula demais.`,
      gabarito: `Amigos: cubo com base plana, boneco gordinho em pé, caixinha. Inimigos: antena fina como fio, estrela com pontas finíssimas, objeto flutuando sem apoio, peça gigante que não cabe. O certo é justificar com a regra, não só separar.`,
    },
    {
      titulo: `Gira e encontra o problema no Maya`,
      tipo: `Observação guiada na tela`,
      tempo: `10 minutos`,
      guiaProfessor: `No computador do professor, com a peça ruim aberta (File, Open Scene), gire usando Alt mais botão esquerdo do mouse. Convide uma criança por vez para apontar o defeito na projeção.`,
      atividade: `Olhe a peça girando na tela. Aponte qual parte vai dar problema na impressão e diga por quê: é fina, flutua no ar ou a base é pequena demais?`,
      gabarito: `A criança deve apontar a parte fina ou a base estreita e dizer que vai quebrar ou tombar. Exemplo de resposta certa: esta perna é fininha, vai quebrar; ou esta parte está no ar, não tem chão embaixo.`,
    },
    {
      titulo: `Cabe ou não cabe`,
      tipo: `Medição prática`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o tamanho máximo que a impressora aceita (por exemplo, uma caixa que representa o espaço dela). Dê a régua e a fita métrica às duplas para medir objetos da sala.`,
      atividade: `Use a régua para medir um objeto da mesa. Compare com o tamanho da impressora. Diga: cabe, é pequeno demais ou é grande demais para imprimir?`,
      gabarito: `A resposta certa compara a medida do objeto com o limite da impressora. Se for maior que o espaço, não cabe; se for muito pequeno, os detalhes somem; o tamanho ideal cabe inteiro dentro da caixa com folga.`,
    },
    {
      titulo: `Conserte a peça inimiga`,
      tipo: `Desafio criativo de explicação`,
      tempo: `9 minutos`,
      guiaProfessor: `Cada dupla escolhe uma ficha inimiga e explica para a turma como mudaria a peça para ela virar amiga da impressora. Incentive usar as três regras do cartaz.`,
      atividade: `Pegue uma ficha inimiga. Pense: o que eu mudaria para a impressora conseguir fazer? Conte para a turma a sua ideia de conserto.`,
      gabarito: `Boas soluções: engrossar a parte fina, dar uma base larga e plana embaixo, apoiar a parte que flutua no chão, diminuir ou aumentar o tamanho para caber na impressora e tirar detalhes minúsculos. Vale qualquer conserto que use uma das três regras: base estável, formas simples e grossas, tamanho certo.`,
    },
  ],
};
