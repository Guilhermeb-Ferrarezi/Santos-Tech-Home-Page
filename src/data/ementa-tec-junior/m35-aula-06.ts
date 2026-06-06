import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Itens pra Pegar e Regras pra Vencer",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Espalhar itens colecionáveis pelo mapa e criar a regra principal que diz quando o jogador vence.`,
  descricao: `Até agora as crianças trouxeram seus bonecos voxel para o Roblox, arrumaram os assets, desenharam o mapa e montaram o cenário completo. Na aula passada elas escolheram onde o jogador começa. Hoje o jogo ganha vida de verdade: vamos espalhar itens colecionáveis pelo mapa (moedas, estrelas, frutinhas ou cristais voxel) e ensinar o jogo a perceber quando o jogador encostou neles. Esse é o coração de qualquer jogo: ter um objetivo e saber quando alguém ganhou.

A grande ideia técnica desta aula é o "toque" (em inglês, Touched). No Roblox, toda peça (Part) pode avisar quando outra coisa encosta nela. Quando o personagem do jogador toca uma estrela, a estrela some e o placar sobe um ponto. Isso é feito com um pedacinho de código chamado script, dentro de um Script do Roblox Studio. Não se preocupe: o código é curto e a gente cola pronto, palavra por palavra, no painel de propriedades.

A segunda ideia é a regra de vitória. Um jogo sem regra é só um mundo bonito pra passear. A regra transforma o passeio em desafio: "pegue todas as 5 estrelas para vencer". Vamos guardar um número (quantas estrelas faltam) e, quando esse número chegar a zero, mostramos a mensagem "VOCÊ VENCEU!" na tela. As crianças vão amar ver a contagem diminuir a cada estrela pega.

No fim da aula, cada dupla terá um jogo com itens espalhados, um placar funcionando e uma condição clara de vitória. É um momento mágico, porque pela primeira vez o mundo que elas construíram responde às ações delas e diz quem ganhou.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o projeto do jogo voxel de cada dupla`,
    `Projetor para o professor mostrar onde clicar passo a passo`,
    `Exemplo pronto: um jogo com 3 estrelas que somem ao toque e mensagem de vitória`,
    `Folha impressa com o código curto do Script (uma cópia por dupla)`,
    `Modelos voxel de itens já prontos (estrela, moeda ou cristal) na pasta de assets`,
    `Cronômetro ou timer na tela para marcar os blocos de 10/15/25/10 minutos`,
    `Adesivos ou carimbos para premiar quem terminar o desafio final`,
  ],
  conceitosChave: [
    `Item colecionável — coisinha brilhante espalhada pelo mapa que o jogador junta, como estrelas ou moedas.`,
    `Toque (Touched) — o jeito do Roblox perceber quando o personagem encostou em uma peça.`,
    `Script — uma cartinha de instruções que diz ao jogo o que fazer, como "some e dê 1 ponto".`,
    `Placar — o número na tela que mostra quantos itens o jogador já pegou.`,
    `Regra de vitória — a missão do jogo: o que precisa acontecer para o jogador ganhar.`,
    `Variável — uma caixinha mágica que guarda um número, como "estrelas que faltam".`,
    `Condição — um "se isto acontecer, então faça aquilo", como "se faltar zero, mostre VENCEU".`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. O Roblox Studio deixa a gente colar um código curto e ele simplesmente funciona. Os três objetos que importam hoje são: a peça (Part) do item colecionável, o Script (que é uma "cartinha de instruções") e um valor numérico que funciona como placar. Antes da aula, abra o exemplo pronto e teste apertando o botão Play (triângulo verde no topo). Encoste o personagem numa estrela e confirme que ela some e o placar sobe. Se funcionar com você, vai funcionar com as crianças.

Lembre destes nomes de menus, porque você vai repeti-los: Explorer (painel da direita com a lista de tudo), Properties (painel de propriedades, logo abaixo do Explorer) e Toolbox. Para inserir um Script, passe o mouse sobre o item no Explorer, clique no sinal de "+" que aparece e escolha "Script".

## Passo a passo da aula

10 min — Aquecimento e revisão: Pergunte "o que o nosso jogo já tem?" e relembre o ponto de início criado na aula anterior. Mostre no projetor o exemplo pronto rodando e encoste numa estrela: ela some e o número sobe. Diga: "hoje vamos fazer isso no jogo de vocês!".

15 min — Conteúdo novo guiado: No projetor, no Explorer, selecione um modelo de estrela. Clique no "+" ao lado dela e escolha "Script". Apague o texto que vem dentro e cole o código da folha impressa, que diz: quando algo tocar, suma e dê 1 ponto. Explique cada linha em voz alta com palavras simples. Depois mostre onde está o placar: um valor "IntValue" dentro de "ServerStorage" ou "Workspace", que guarda quantas estrelas faltam.

25 min — Mão na massa: Cada dupla espalha de 3 a 5 itens colecionáveis pelo mapa, arrastando da Toolbox ou copiando (Ctrl+C, Ctrl+V) um item já pronto. Em cada item, elas inserem o Script (clicando no "+" e escolhendo "Script") e colam o código da folha. Circule pela sala. Mande cada dupla apertar Play e testar se a estrela some ao toque. Quem terminar ajusta o número da regra de vitória (por exemplo, "precisa de 5 estrelas").

10 min — Desafio e compartilhar: Lance o desafio: "deixe seu jogo mostrar VOCÊ VENCEU quando todas as estrelas forem pegas". Cada dupla mostra o jogo rodando no projetor por 30 segundos. Aplauda cada vitória na tela.

## Como explicar para crianças

Use a analogia do jogo de pega-pega com tesouros: "Imagine que você está num parque cheio de estrelas brilhando no chão. Cada vez que você toca uma, ela some e seu colar ganha mais uma estrelinha. Quando você junta todas, ganha o jogo!". Chame o Script de "cartinha mágica que ensina a estrela a sumir". Chame o placar de "colar de estrelas" que vai enchendo. Mostre, não só fale: rode o exemplo várias vezes para elas verem o número subir.

## Erros comuns e como ajudar

O erro mais comum é colar o Script no lugar errado: ele precisa ficar DENTRO da peça do item, não solto no Workspace. Confira no Explorer se o Script aparece "encaixado" embaixo da estrela. Outro erro é esquecer de apertar Play para testar; lembre que no modo de edição nada se mexe. Algumas crianças apagam o código sem querer ou colam duas vezes; tenha a folha à mão para recolar. Se a estrela não some, geralmente é porque a peça está marcada como "Anchored" e sem "CanTouch", ou o nome no código não bate com o do placar. Por fim, evite que coloquem itens dentro de paredes ou no chão fundo, onde o jogador não alcança; peça para deixarem tudo bem visível e fácil de pegar.`,
  exercicios: [
    {
      titulo: `Caça às estrelas no mapa`,
      tipo: `Atividade prática guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Peça às crianças que apontem na tela onde colocariam as estrelas antes de arrastá-las. Reforce que devem ficar visíveis e fáceis de alcançar, nunca dentro de paredes.`,
      atividade: `Espalhe 3 estrelas pelo seu mapa, arrastando ou copiando (Ctrl+C e Ctrl+V) o modelo pronto. Coloque cada uma num lugar diferente que dê para o jogador alcançar.`,
      gabarito: `A criança terá 3 estrelas visíveis no mapa, em locais separados e acessíveis (caminho, praça ou colina), nenhuma presa dentro de paredes ou enterrada no chão.`,
    },
    {
      titulo: `A cartinha mágica do toque`,
      tipo: `Colar e testar código`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como clicar no "+" ao lado da estrela e escolher "Script". Acompanhe para que colem o código DENTRO da peça e não solto no Workspace.`,
      atividade: `Em uma das suas estrelas, insira um Script (clique no "+" e escolha "Script"), apague o texto que veio e cole o código da folha. Aperte Play e encoste o personagem na estrela.`,
      gabarito: `Ao apertar Play e tocar a estrela, ela some. No Explorer, o Script aparece encaixado embaixo da estrela, e não solto no Workspace.`,
    },
    {
      titulo: `Enchendo o colar de estrelas`,
      tipo: `Conectar item ao placar`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre onde está o valor do placar (IntValue) e confira que o nome usado no código bate exatamente com o nome do placar. Ajude a copiar o Script para as outras estrelas.`,
      atividade: `Copie o Script para as suas outras estrelas. Aperte Play e pegue todas, observando o número do placar subir de 1 em 1 a cada estrela tocada.`,
      gabarito: `A cada estrela tocada o placar sobe exatamente 1 ponto; ao pegar as 3 estrelas, o placar mostra 3. Todas as estrelas têm o mesmo Script funcionando.`,
    },
    {
      titulo: `Qual é a regra pra vencer?`,
      tipo: `Definir a regra de vitória`,
      tempo: `6 minutos`,
      guiaProfessor: `Pergunte a cada dupla qual será a missão do jogo. Ajude a ajustar o número da variável de vitória para bater com a quantidade de estrelas que colocaram no mapa.`,
      atividade: `Escreva numa frase a regra do seu jogo (exemplo: "pegue todas as 5 estrelas para vencer"). Ajuste o número no jogo para combinar com quantas estrelas você espalhou.`,
      gabarito: `A regra está escrita em uma frase clara com objetivo e quantidade (ex.: "pegar 5 estrelas"). O número da meta no jogo é igual ao número de estrelas espalhadas no mapa.`,
    },
    {
      titulo: `Mostrando VOCÊ VENCEU!`,
      tipo: `Desafio final`,
      tempo: `6 minutos`,
      guiaProfessor: `Esse é o desafio mais avançado. Ajude a usar a condição "se faltar zero, mostre a mensagem". Quem não conseguir mostrar texto na tela pode usar uma mudança de cor do céu como sinal de vitória.`,
      atividade: `Faça seu jogo mostrar a mensagem "VOCÊ VENCEU!" quando todas as estrelas forem pegas. Teste apertando Play e pegando todas até a mensagem aparecer.`,
      gabarito: `Ao pegar a última estrela (placar atinge a meta), o jogo mostra "VOCÊ VENCEU!" na tela ou dá um sinal claro de vitória (como o céu mudar de cor). A condição só dispara quando faltam zero estrelas.`,
    },
  ],
};
