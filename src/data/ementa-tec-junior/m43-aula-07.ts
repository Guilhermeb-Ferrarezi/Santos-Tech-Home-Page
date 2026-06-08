import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Checklist da impressora",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança aprende a conferir a própria peça usando uma lista de verificação da impressão 3D — peça fechada sem buracos, base apoiada, espessura suficiente e tamanho certo — e corrige no Maya os problemas que encontrar.`,
  descricao: `Nesta aula a turma vira fiscal de qualidade da própria criação. Depois de semanas modelando a peça no Maya, chegou a hora de perguntar uma coisa séria: "Será que isso aqui consegue virar um objeto de verdade na impressora 3D?" Nem todo modelo bonito na tela imprime bem. A impressora é exigente, e por isso existe uma lista de verificação, um checklist, que todo criador profissional usa antes de mandar imprimir.

A impressora 3D funciona como uma máquina de bolo de camadas: ela vai depositando plástico derretido camada por camada, de baixo para cima, até montar a peça inteira. Por causa disso, a peça precisa obedecer a quatro regras. Primeira: estar fechada, sem buracos no meio das paredes, porque a impressora precisa saber o que é dentro e o que é fora. Segunda: ter uma base apoiada na mesa, senão a peça cai antes de terminar. Terceira: ter espessura suficiente — paredes finas demais quebram ou nem saem na impressão. Quarta: estar no tamanho certo, nem minúscula demais para ver, nem gigante demais para caber na impressora.

O foco do mês é modelar itens novos para imprimir, e esta é a aula em que cada aluno olha para a peça com olhos críticos. As crianças vão testar cada item do checklist na própria peça e corrigir os problemas. É um exercício de paciência e atenção, parecido com revisar uma lição antes de entregar para a professora: a gente lê de novo, acha os errinhos e conserta.

O importante é que a criança entenda que conferir não é castigo, é cuidado. Um criador esperto confere antes para a peça sair perfeita depois. Ao final da aula, cada aluno terá passado o próprio modelo pelos quatro testes e deixado a peça um passo mais perto de virar um objeto que dá para segurar na mão.`,
  materiais: [
    `Computadores (um por criança) com o Maya aberto e o modelo da peça da criança já carregado da aula anterior`,
    `Projetor ou TV grande para o professor mostrar o checklist e cada teste na tela`,
    `Cartaz grande impresso com os quatro itens do checklist: Fechada, Base apoiada, Espessura, Tamanho`,
    `Dois modelos de exemplo: um "aprovado" (peça correta) e um "reprovado" (com buraco, parede fina e flutuando) para comparar`,
    `Folha de checklist impressa para cada criança marcar com lápis o que já conferiu`,
    `Lápis e uma carinha de joinha (aprovado) para colar na folha de quem passou nos quatro testes`,
    `Régua de papel ou fita métrica para a turma sentir, de verdade, o tamanho que a peça terá depois de impressa`,
  ],
  conceitosChave: [
    `Checklist — uma lista de coisas para conferir uma por uma, como a lista de itens da mochila antes de ir à escola.`,
    `Peça fechada — modelo sem buracos nas paredes, todo vedadinho, igual a uma caixa sem furo por onde água vazaria.`,
    `Buraco (furo na malha) — um pedaço que faltou fechar no modelo; a impressora fica confusa e não sabe o que é dentro e o que é fora.`,
    `Base apoiada — a parte de baixo da peça encostada na mesa, plana e firme, para a peça não cair durante a impressão.`,
    `Espessura — quão grossa é a parede da peça; fina demais quebra, então precisa ter um tamanhinho mínimo de grossura.`,
    `Tamanho (escala) — o quão grande ou pequena a peça é de verdade, medida em centímetros, para caber e dar para ver.`,
    `Corrigir — achar um problema e arrumar, como apagar um errinho do caderno e escrever certo por cima.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya nem em impressão 3D. Precisa entender quatro regras simples e mostrá-las uma a uma. A impressora 3D constrói a peça em camadas de plástico, de baixo para cima, então o modelo tem que respeitar quatro condições.

Peça fechada: a malha (a casquinha 3D da peça) não pode ter buracos. No Maya, dá para ver buracos girando a câmera (segure Alt e arraste com o botão esquerdo) e procurando partes "vazadas" que mostram o interior escuro. Base apoiada: a parte de baixo precisa estar plana e tocando o chão da grade (o plano quadriculado da cena). Espessura: paredes muito finas não imprimem; a peça precisa ter corpo, não ser uma folha de papel. Tamanho: confira na caixinha "Channel Box" (painel da direita) os valores de "Scale" e o tamanho geral — uma peça boa para impressão costuma ter alguns centímetros.

As correções desta aula são leves: mover a peça para apoiar na base (tecla W), aumentar a escala se estiver minúscula (tecla R), e, para buracos, na maioria dos casos o conserto é refazer ou fechar a forma. O objetivo é treinar o olhar de conferência, não fazer cirurgia avançada na malha.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Maya)

Aquecimento (10 min): Mostre no projetor o exemplo "aprovado" e o "reprovado" lado a lado. Pergunte: "Qual desses vocês acham que a impressora aceita? Por quê?" Deixe a turma apontar o buraco e a peça flutuando. Apresente o cartaz do checklist com os quatro itens.

Conteúdo novo guiado (15 min): Pegue o modelo "reprovado" no Maya e teste cada item ao vivo. Teste 1 (fechada): gire a câmera com Alt mais botão esquerdo e mostre o buraco. Teste 2 (base): aperte W e mostre que a peça está flutuando acima da grade; arraste a seta verde para baixo até encostar. Teste 3 (espessura): mostre a parede fininha e diga que precisa de mais corpo. Teste 4 (tamanho): abra a "Channel Box" à direita e leia os valores de "Scale"; aperte R para crescer se preciso. Diga cada clique em voz alta.

Mão na massa (25 min): Cada criança abre o próprio modelo e passa pelos quatro testes com a folha de checklist na mão, marcando o que confere. Passe de mesa em mesa. Ajude a mover a base com W e a ajustar o tamanho com R. Para buracos, ajude a fechar ou reforçar a forma.

Desafio e compartilhar (10 min): Cada criança mostra a peça já conferida, diz qual problema achou e como corrigiu. Quem passou nos quatro testes ganha o joinha de "aprovado para impressão".

## Como explicar para crianças

Use a analogia da mochila: "Antes de sair de casa a gente confere a mochila item por item — caderno, lápis, lanche. Com a peça é igual: a gente confere quatro coisinhas." Para "fechada", diga "a peça tem que estar toda fechadinha, sem furo, igual a uma bola murcha que não pode ter buraco". Para "base", diga "ela precisa estar de pé no chão, senão tomba". Para "espessura", diga "a parede não pode ser fininha igual a uma folha de papel, senão quebra". Para "tamanho", mostre na régua de verdade o tamanho que vai sair. Sempre mostre antes de pedir.

## Erros comuns e como ajudar

Não acha o buraco: a criança olha só de um lado; ajude a girar a câmera (Alt mais botão esquerdo) para ver por todos os ângulos. Peça flutuando: ela não percebe o vão até a grade; aperte W e arraste a seta verde para baixo até a base encostar. Acha que está pronto sem conferir: incentive a marcar cada item da folha, um por vez, sem pular. Mexe demais e estraga: lembre que corrigir é um ajuste pequeno, não recomeçar tudo; use Ctrl mais Z para desfazer. Frustração com o buraco difícil: tranquilize — "achar o problema já é metade do conserto", e ajude a fechar a forma junto.`,
  exercicios: [
    {
      titulo: `Aprovado ou reprovado?`,
      tipo: `Jogo de observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o exemplo "aprovado" e o "reprovado". Faça um jogo: aponte uma peça e a turma grita "aprovado" ou "reprovado" e explica por quê. Premie quem souber dizer o motivo. Isso treina o olhar para os quatro problemas antes de mexer na própria peça.`,
      atividade: `Olhe as duas peças na tela. Diga qual está aprovada e qual está reprovada para a impressora. Depois aponte o que está errado na reprovada: tem buraco? Está flutuando? A parede é fina demais?`,
      gabarito: `A peça reprovada é a que tem buraco, parede fina e está flutuando longe da base. A aprovada está fechada, apoiada na grade e com paredes com corpo. Acerta quem identifica pelo menos um dos quatro problemas e explica por que a impressora não aceitaria.`,
    },
    {
      titulo: `O checklist da impressora`,
      tipo: `Atividade no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a folha de checklist. Leia em voz alta os quatro itens (Fechada, Base apoiada, Espessura, Tamanho) e peça que a criança desenhe ou escreva ao lado de cada um o que significa. Circule ajudando quem travou. A folha vira o guia que a criança usará na atividade principal.`,
      atividade: `Na sua folha, ao lado de cada item do checklist, faça um desenho ou escreva o que ele quer dizer: Fechada (sem ___), Base apoiada (de pé no ___), Espessura (parede não pode ser ___ demais), Tamanho (nem grande nem ___ demais).`,
      gabarito: `Respostas esperadas: Fechada = sem buraco/furo; Base apoiada = de pé no chão/na mesa/na grade; Espessura = parede não pode ser fina demais; Tamanho = nem grande nem pequeno demais. Concluído quando a criança explica, com desenho ou palavra, pelo menos três dos quatro itens.`,
    },
    {
      titulo: `Caçando o buraco`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como girar a câmera no Maya segurando Alt e arrastando com o botão esquerdo. Peça que cada criança gire o próprio modelo por todos os lados procurando buracos ou partes vazadas que mostrem o interior escuro. Passe nas mesas confirmando que cada um girou a peça de cima, de baixo e dos lados.`,
      atividade: `No seu modelo, segure Alt e arraste com o botão esquerdo para girar a câmera. Olhe a peça por cima, por baixo e dos lados. Procure algum buraco ou parte vazada. Marque na folha se a peça passou no teste "Fechada".`,
      gabarito: `A criança conclui ao girar a peça em vários ângulos e dizer se achou ou não um buraco. Se achou, marca "reprovado" no item Fechada e avisa o professor; se não achou nada vazado, marca o item como conferido. Sucesso é ter olhado a peça de todos os lados, não só de frente.`,
    },
    {
      titulo: `Apoiar e ajustar o tamanho`,
      tipo: `Prática na ferramenta`,
      tempo: `20 minutos`,
      guiaProfessor: `Esta é a atividade principal. Guie pelos itens Base e Tamanho. Para a base, mostre como apertar W e arrastar a seta verde para baixo até a peça encostar na grade. Para o tamanho, mostre a "Channel Box" à direita lendo os valores de "Scale" e a tecla R para crescer. Passe de mesa em mesa corrigindo peças que flutuam e medindo com a régua o tamanho real. Quem terminar marca os itens na folha.`,
      atividade: `1) Aperte W e arraste a seta verde até a base da peça encostar na grade (chão). 2) Olhe a "Channel Box" à direita e veja os valores de "Scale". 3) Se a peça estiver minúscula, aperte R e cresça até ficar do tamanho de alguns centímetros. 4) Marque na folha os itens "Base apoiada" e "Tamanho".`,
      gabarito: `Pronto quando a peça está com a base encostada na grade (não flutuando) e com um tamanho razoável para imprimir (alguns centímetros, não minúscula nem gigante). O professor confirma vendo a peça apoiada no plano e os dois itens marcados na folha de checklist.`,
    },
    {
      titulo: `Selo de aprovado para impressão`,
      tipo: `Roda de conversa e desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme uma roda. Cada criança mostra a peça já conferida, diz qual dos quatro itens estava com problema e como corrigiu. Confira junto a folha de checklist de cada um. Quem passou nos quatro testes ganha a carinha de joinha "aprovado para impressão". Termine reforçando que conferir antes é o que faz a peça sair certa.`,
      atividade: `Mostre sua peça para a turma. Diga: "Meu checklist está completo. O problema que eu achei foi ___ e eu corrigi ___." Conte se a sua peça já está aprovada para a impressora nos quatro itens.`,
      gabarito: `Concluído quando a criança apresenta a peça, cita pelo menos um problema que encontrou e como o corrigiu, e mostra a folha de checklist com os quatro itens conferidos. Sucesso é todo aluno terminar com a peça aprovada nos quatro testes e entender que conferir é cuidado, não castigo.`,
    },
  ],
};
