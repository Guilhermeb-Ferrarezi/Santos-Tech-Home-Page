import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Conferindo cada detalhe antes de publicar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer a checagem final do item no Maya usando uma lista simples de quatro itens — cores, materiais, escala e arquivo exportado — e corrigir qualquer probleminha para deixar o objeto perfeito para a loja.`,
  descricao: `Esta aula é o "check-up" do item antes da grande publicação. Durante o mês inteiro a criança modelou, pintou, escolheu materiais, arrumou e exportou o seu objeto no Maya. Agora chegou a hora mais importante: parar, olhar com calma e conferir se está tudo certinho. É como um astronauta que confere a nave antes de decolar — ninguém quer descobrir um problema só depois que o foguete já subiu. Aqui a gente usa uma lista de verificação (uma "checklist") com quatro pontos: cores, materiais, escala e arquivo exportado.

A ideia central é transformar a criança em uma "inspetora de qualidade". Em vez de só achar que está bom, ela aprende a olhar item por item, marcando cada um na lista. Cores: as cores estão como ela queria, sem partes sem pintar? Materiais: o brilho e o acabamento estão certos? Escala: o tamanho do objeto está bom, nem gigante nem minúsculo? Arquivo: o arquivo foi exportado e está salvo na pasta certa, com um nome fácil de achar? Cada pergunta tem uma resposta de "sim" ou "ainda não", e quando é "ainda não" a criança volta e arruma.

O professor não precisa dominar o Maya para conduzir esta aula. O segredo é seguir a checklist junto com a turma, devagar, mostrando no projetor onde clicar para checar cada ponto. A maior parte da aula é a criança olhando o próprio item com olhos de detetive e corrigindo pequenos detalhes. É um momento calmo, de capricho e orgulho, não de criar coisas novas. Nada de modelar de novo nem inventar peças.

Ao final, cada aluno terá passado o item por todos os quatro pontos da lista, corrigido o que precisava e deixado o arquivo prontinho. Na próxima aula, a Aula 8, o item finalmente vai para a loja. Por isso esta conferência é a ponte: ela garante que, no dia da publicação, não exista nenhuma surpresa ruim. Um item bem conferido é um item que dá orgulho de mostrar para o mundo.`,
  materiais: [
    `Computadores com o Maya aberto e o item de cada criança já carregado (arquivo do mês)`,
    `Projetor ou TV grande para o professor mostrar a checklist e demonstrar onde clicar no Maya`,
    `Cartão impresso da "Lista do Inspetor" com os quatro pontos: cores, materiais, escala e arquivo`,
    `Exemplo pronto: um item já conferido e aprovado, para servir de modelo do que é "perfeito para a loja"`,
    `Exemplo com probleminhas de propósito (uma parte sem cor, escala errada) para a turma treinar a achar erros`,
    `Adesivos ou carimbos de "Item Aprovado" para premiar quem terminar toda a lista`,
    `Pasta combinada no computador onde os arquivos exportados ficam guardados (para conferir o arquivo)`,
  ],
  conceitosChave: [
    `Checklist — uma listinha de coisas para conferir, onde você marca cada uma quando está certa.`,
    `Inspetor de qualidade — a pessoa que olha o trabalho com cuidado para ver se está tudo perfeito.`,
    `Escala — o tamanho do objeto; nem gigante nem minúsculo, do tamanho certo para a loja.`,
    `Material — o jeitão da superfície do objeto: se é brilhante, fosco, liso ou colorido.`,
    `Exportar — salvar o item em um arquivo de um tipo que a loja consegue ler e usar.`,
    `Revisar — olhar de novo, com calma, para achar e arrumar qualquer probleminha.`,
    `Arquivo final — o objeto salvo, com nome fácil, na pasta certa, pronto para publicar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya. Esta aula é uma conferência, não uma criação. O coração dela é a "Lista do Inspetor" com quatro pontos: cores, materiais, escala e arquivo. Antes da aula, abra o Maya em cada computador com o item da criança já carregado e deixe a sua checklist no projetor.

Saiba achar quatro lugares no Maya. Para ver o objeto colorido e com brilho de verdade, use o modo de visualização com qualidade: na janela principal (a "viewport"), aperte a tecla 6 do teclado para ligar o modo texturizado e de materiais. Para conferir a escala, olhe o painel "Channel Box" (Caixa de Canais), do lado direito: selecione o objeto com um clique e veja os números de "Scale X, Y e Z" — o normal é estarem em 1. Para ver materiais, abra "Windows > Rendering Editors > Hypershade", ou clique com o botão direito no objeto e escolha "Assign Existing Material". Para conferir o arquivo exportado, minimize o Maya e abra a pasta combinada no computador para ver se o arquivo está lá, com o nome certo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Reúna a turma. Mostre o item-exemplo já aprovado no projetor e pergunte: "O que faz um item ficar pronto para a loja?" Depois mostre o exemplo com probleminhas de propósito (uma parte cinza sem cor, o objeto gigante) e deixe as crianças apontarem o que está errado. Apresente a Lista do Inspetor: cores, materiais, escala, arquivo.

Conteúdo novo guiado (15 min): No projetor, passe pela lista ponto a ponto no item-exemplo. Cores: aperte a tecla 6 e gire o objeto (segure Alt e arraste com o botão esquerdo do mouse) procurando partes sem pintar. Materiais: mostre o brilho e diga se combina com o objeto. Escala: clique no objeto e leia "Scale" no Channel Box, à direita. Arquivo: abra a pasta e mostre o arquivo exportado com o nome certo. Marque cada ponto na lista.

Mão na massa (25 min): Agora cada criança vira inspetora do próprio item. Entregue o cartão da Lista do Inspetor. Ela aperta a tecla 6, gira o objeto procurando falhas de cor, confere o brilho do material, lê a escala no Channel Box e verifica o arquivo na pasta. A cada ponto certo, marca na lista. Quando achar um probleminha, corrige: pinta a parte faltante, ajusta o material ou conserta a escala. Circule pela sala ajudando.

Desafio e compartilhar (10 min): Desafie cada um a trocar de cadeira com um colega e inspecionar o item do amigo usando a mesma lista — um "olhar de fora" sempre acha o que o dono não viu. No final, quem completou os quatro pontos ganha o carimbo de "Item Aprovado". Faça uma roda rápida: cada criança diz um detalhe que arrumou hoje.

## Como explicar para crianças

Use a analogia do astronauta: "Antes do foguete decolar, o astronauta confere tudo com uma listinha. A gente vai fazer igual com o nosso item!" Chame a criança de "inspetora de qualidade", aquela que tem olhos de detetive. Diga que marcar um item da lista é como ganhar uma estrelinha. Explique escala assim: "Imagine o seu chapéu do tamanho de um prédio na loja — ninguém ia querer! Ele precisa do tamanho certo." Lembre que conferir não é desconfiar do trabalho: é dar o último capricho, como passar a mão no cabelo antes da foto.

## Erros comuns e como ajudar

A criança acha que está tudo bom sem olhar direito: peça para ela girar o objeto 360 graus, devagar, segurando Alt e arrastando o mouse, procurando partes escondidas sem cor. A escala aparece com números esquisitos (por exemplo 2.5 ou 0.3): mostre o botão "Reset" ou peça para digitar 1 nos campos de "Scale" no Channel Box, se for esse o combinado do item. A criança não acha o arquivo na pasta: confira juntos se ela realmente exportou na Aula 6; se não, refaça o "File > Export Selection" para a pasta certa. O material some quando aperta a tecla 6: pode ser que ele não foi aplicado; clique com o botão direito no objeto e use "Assign Existing Material" para reaplicar. A criança quer mudar tudo de novo: lembre com carinho que hoje só conferimos e ajustamos detalhes, sem refazer o item.`,
  exercicios: [
    {
      titulo: `Caça aos probleminhas no exemplo`,
      tipo: `Observação em grupo`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor o item-exemplo cheio de probleminhas de propósito (uma parte sem cor, escala gigante, material errado). Gire o objeto na viewport e deixe as crianças apontarem cada erro em voz alta. Vá anotando os erros encontrados no quadro.`,
      atividade: `Olhe o item que o professor mostra na tela e ache os probleminhas: tem alguma parte sem cor? O tamanho está estranho? O brilho está esquisito? Levante a mão e diga o que você achou.`,
      gabarito: `A criança aponta pelo menos um problema real do exemplo. Exemplos certos: "tem uma parte cinza sem pintar", "o objeto está gigante", "não tem brilho". Acerto = perceber que o item ainda não está pronto para a loja.`,
    },
    {
      titulo: `Conferindo as cores do meu item`,
      tipo: `Prática no Maya`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como apertar a tecla 6 para ver o objeto colorido e como girar segurando Alt e arrastando o mouse. A criança procura partes sem pintar no próprio item, girando devagar. Se achar uma falha, ela corrige a cor.`,
      atividade: `No seu Maya, aperte a tecla 6 para ver o item bem colorido. Gire o objeto segurando o Alt e arrastando o mouse. Procure se sobrou alguma parte sem cor. Achou? Então pinte!`,
      gabarito: `A criança gira o item e confirma que não há partes sem cor, ou acha e corrige a parte faltante. Acerto = o objeto inteiro fica colorido, sem manchas cinzas. Erro comum: esquecer de olhar embaixo ou atrás do objeto.`,
    },
    {
      titulo: `Lendo a escala no Channel Box`,
      tipo: `Verificação técnica`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o Channel Box (Caixa de Canais), do lado direito. Ensine a clicar uma vez no objeto e ler os números de "Scale X, Y e Z" — o esperado é 1 em cada. Se estiver diferente do combinado, ajude a digitar o número certo.`,
      atividade: `Clique uma vez no seu item. Olhe o quadro do lado direito, o Channel Box, e leia os números de "Scale". O tamanho está do jeito certo para a loja? Se estiver muito grande ou pequeno, conserte.`,
      gabarito: `A criança lê os valores de Scale e confirma que o tamanho está correto (geralmente 1, 1, 1), ou corrige para o valor combinado. Acerto = saber onde está a escala e que o item não está gigante nem minúsculo.`,
    },
    {
      titulo: `Checando o material e o arquivo`,
      tipo: `Lista de verificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Dois pontos de uma vez. Material: a criança confirma se o brilho ou acabamento combina com o objeto; se sumiu, use "Assign Existing Material" com o botão direito. Arquivo: abra a pasta combinada e veja se o arquivo exportado está lá com o nome certo.`,
      atividade: `Confira duas coisas e marque na sua lista: 1) O material do seu item está com o brilho certo? 2) Abra a pasta no computador: o seu arquivo exportado está lá, com o nome fácil de achar? Marque "sim" quando estiver tudo certo.`,
      gabarito: `Os dois pontos marcados como certos: material aplicado e combinando com o objeto, e arquivo presente na pasta com nome correto. Acerto = a criança encontra o arquivo sozinha e confirma o material. Se faltar o arquivo, ela reexporta com "File > Export Selection".`,
    },
    {
      titulo: `Inspetor do colega`,
      tipo: `Desafio em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça para trocarem de cadeira. Cada criança inspeciona o item do colega usando a Lista do Inspetor completa (cores, materiais, escala, arquivo). Ela aponta com gentileza qualquer detalhe que o dono não tenha visto. Quem completar os quatro pontos ganha o carimbo.`,
      atividade: `Troque de lugar com um colega e vire o inspetor do item dele. Passe pelos quatro pontos da lista: cores, materiais, escala e arquivo. Diga com carinho se achou algum detalhe para melhorar. Depois volte e veja o que o colega achou no seu.`,
      gabarito: `A dupla percorre os quatro pontos no item um do outro e dá pelo menos um retorno útil e gentil. Acerto = usar a lista inteira e ajudar o colega a achar algo que ele não tinha notado. O item de cada um termina aprovado nos quatro pontos.`,
    },
  ],
};
