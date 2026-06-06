import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Criando os pontos do jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar um placar simples guardando os pontos em uma variável e fazer esse número aumentar toda vez que um evento acontece, vendo o valor subir no Output.`,
  descricao: `Nesta aula a criança descobre uma das ideias mais importantes de qualquer jogo: o placar. Todo jogo que vale a pena tem pontos. No Roblox Studio, com a linguagem Lua, a gente guarda esses pontos dentro de uma "caixinha" chamada variável. A variável é como uma gaveta com nome onde colocamos um número, e podemos olhar dentro dela ou trocar o valor quando quisermos.

O coração da aula é juntar o que a turma já aprendeu (eventos, nas aulas 1 e 2) com uma ideia nova (guardar e mudar um número). Nas aulas passadas o aluno fez "quando algo acontece, faça isso". Agora o "isso" vai ser somar um ponto. Assim a criança cria uma variável chamada pontos, começa com zero e, cada vez que um evento dispara, soma mais um. O número cresce na frente dos olhos dela.

Para ver o número subir sem precisar de telas chiques ainda, usamos o painel Output do Studio. O Output é a "janelinha de avisos" do Roblox, onde o comando print mostra mensagens. Toda vez que o evento acontece, o script imprime o total de pontos. A criança aperta, vê 1, aperta de novo, vê 2, e descobre que o computador está realmente lembrando do valor anterior e somando.

Essa aula é a ponte entre "fazer coisas acontecerem" e "ter um jogo de verdade com objetivo". Sem placar não há vitória nem desafio. Ao final, cada aluno terá um pequeno sistema de pontuação funcionando, pronto para virar a mecânica do mês nas próximas semanas.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, com um lugar (baseplate) novo já criado`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo`,
    `Um Part simples na cena (um bloco) para servir de "botão" que dispara o evento`,
    `Exemplo pronto do professor: um script que soma pontos e mostra no Output (para mostrar funcionando antes)`,
    `Folha impressa com o código da aula em letras grandes, linha por linha`,
    `Quadro branco ou flip chart para desenhar a "gaveta" da variável`,
    `Adesivos ou carimbos para premiar quem fez o placar passar de 5 pontos`,
  ],
  conceitosChave: [
    `Variável — uma gaveta com nome onde o computador guarda um valor, como um número de pontos.`,
    `Pontos — o número que mostra quanto você já ganhou no jogo; começa em zero e vai crescendo.`,
    `Atribuição — o momento em que colocamos um valor dentro da gaveta usando o sinal de igual.`,
    `Somar mais um — pegar o valor que já estava na variável e adicionar um, como pontos = pontos + 1.`,
    `print — o comando do Lua que escreve uma mensagem na janelinha Output para a gente ver.`,
    `Output — o painel do Roblox Studio onde aparecem as mensagens do print e os avisos do jogo.`,
    `Evento — o momento em que algo acontece no jogo, como tocar num bloco, que faz o código rodar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Lua. Uma variável é só uma caixinha com nome que guarda um valor. Neste caso, guarda um número de pontos. Existem três passos que se repetem o tempo todo: criar a variável com zero, mudar o valor (somar mais um) e mostrar o valor com print. O painel Output é onde as mensagens aparecem. Abra-o em "View" (Visualizar), na barra de cima, e clique em "Output". Deixe-o sempre visível durante a aula. Antes da turma chegar, teste o código você mesmo: crie um Part, clique nele com o botão direito, escolha "Insert Object" (Inserir Objeto) e adicione um "Script". Apague o texto que vem dentro e digite o código da aula. Aperte o botão "Play" (o triângulo no topo) e veja o número subir no Output ao encostar no bloco.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula passada. Pergunte: "O que é um evento?" e "Como fazemos algo acontecer quando tocamos num bloco?". Desenhe no quadro uma gaveta vazia com a etiqueta "pontos" e escreva 0 dentro. Diga que hoje a gaveta vai guardar a pontuação.

Conteúdo novo guiado (15 min): no projetor, crie um Part. Clique com o botão direito sobre ele, "Insert Object", depois "Script". No Script, mostre linha por linha. Linha 1: local pontos = 0 (cria a gaveta começando em zero). Linha 2: o evento, ligando o toque no bloco a uma função. Dentro dela: pontos = pontos + 1 (soma um) e print(pontos) (mostra na tela). Aperte "Play" e encoste o personagem no bloco. Mostre o Output: 1, depois 2, depois 3. Pergunte: "De onde veio o número 2?". Eles vão perceber que o computador lembrou do 1 e somou.

Mão na massa (25 min): cada aluno cria seu Part, insere o Script e digita o código. Ande pela sala. Quem terminar rápido, peça para trocar a mensagem do print por algo como "Voce ganhou um ponto!" junto com o número.

Desafio e compartilhar (10 min): peça que mudem o ponto por ação de 1 para 5 (pontos = pontos + 5). Quem conseguir, mostra o Output no projetor para a turma e conta quantos toques deu.

## Como explicar para crianças

Use a analogia da gaveta. "Imagina uma gaveta com a etiqueta pontos. No comecinho ela tem zero. Cada vez que você encosta no bloco mágico, a gente abre a gaveta, olha o número, soma mais um e guarda de novo." Para o print, diga que é como um "alto-falante" que grita o número na janelinha Output para todo mundo ouvir. Para a soma, mostre com os dedos: "Eu tinha um dedo levantado, levanto mais um, agora tenho dois. A variável faz a mesma coisa sozinha." Repita sempre a frase "começa em zero, soma um, mostra na tela".

## Erros comuns e como ajudar

O erro mais comum é começar com pontos = 1 em vez de zero, fazendo o placar começar errado. Mostre que zero é o ponto de partida. Outro erro: escrever Pontos com letra maiúscula em um lugar e pontos com minúscula em outro; o Lua acha que são duas gavetas diferentes. Peça atenção às letras iguais. Muitos esquecem os parênteses do print, e a mensagem não aparece; mostre que print precisa de ( e ) abraçando o que vai mostrar. Alguns colocam o print fora do evento, e ele só roda uma vez; confira se está dentro, com o "espacinho" (indentação) à frente. Por fim, se o Output não aparecer, lembre de abri-lo em "View" e "Output".`,
  exercicios: [
    {
      titulo: `Onde mora a pontuação?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas para a turma toda, de mãos levantadas. Use o desenho da gaveta no quadro para apoiar. O objetivo é confirmar que entenderam que a variável guarda o número e que o print mostra na tela.`,
      atividade: `Responda com a turma: 1) Onde o jogo guarda os pontos? 2) Com qual número a gaveta de pontos começa? 3) Qual comando faz o número aparecer na janelinha Output?`,
      gabarito: `1) Dentro de uma variável (a "gaveta" chamada pontos). 2) Começa com zero. 3) O comando print, que escreve a mensagem no Output.`,
    },
    {
      titulo: `Criando a gaveta de pontos`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno cria um Part, insere um Script (botão direito, "Insert Object", "Script") e digita só a primeira linha. Confira se digitaram zero e a palavra local. Ainda não precisa do evento; é só criar a variável e imprimir uma vez.`,
      atividade: `No seu Script, apague o texto que veio dentro e escreva estas duas linhas: a primeira cria a variável pontos começando em zero, e a segunda mostra esse valor no Output. Aperte Play e veja o número zero aparecer.`,
      gabarito: `local pontos = 0
print(pontos)

No Output aparece o número 0. A variável foi criada com o valor inicial zero e o print mostrou esse valor.`,
    },
    {
      titulo: `Somando mais um ponto`,
      tipo: `Prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora os alunos ligam a soma a um evento de toque no bloco. Mostre no projetor o evento Touched do Part. Confira a indentação (o espacinho) das linhas dentro da função. Ande pela sala vendo o número subir no Output de cada um.`,
      atividade: `Complete o Script para que, toda vez que o personagem encostar no bloco, os pontos aumentem em 1 e o novo total apareça no Output. Aperte Play e encoste no bloco três vezes.`,
      gabarito: `local pontos = 0

script.Parent.Touched:Connect(function()
	pontos = pontos + 1
	print(pontos)
end)

Ao encostar três vezes, o Output mostra 1, depois 2, depois 3. A linha pontos = pontos + 1 pega o valor antigo e soma um.`,
    },
    {
      titulo: `Caça ao erro no placar`,
      tipo: `Correção de código`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre este código com erros no projetor ou na folha. Há três problemas: a variável começa em 1 (deveria ser 0), há diferença de maiúscula entre Pontos e pontos, e falta um parêntese no print. Peça para apontarem cada erro antes de mostrar a correção.`,
      atividade: `Encontre os três erros neste código e diga como consertar cada um:
local Pontos = 1
script.Parent.Touched:Connect(function()
	pontos = pontos + 1
	print pontos)
end)`,
      gabarito: `Erro 1: começa com 1, deveria ser local pontos = 0. Erro 2: a variável foi criada como Pontos (maiúscula) e usada como pontos (minúscula); precisam ser iguais, sempre pontos. Erro 3: faltou o parêntese de abertura no print; o correto é print(pontos). Código certo:
local pontos = 0
script.Parent.Touched:Connect(function()
	pontos = pontos + 1
	print(pontos)
end)`,
    },
    {
      titulo: `Meu placar turbinado`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio final para quem já fez o básico. Os alunos mudam quanto cada toque vale e melhoram a mensagem do print. Deixe-os escolher o valor (5, 10 ou 100). No fim, alguns mostram o Output no projetor e contam para a turma quantos toques deram e qual total alcançaram.`,
      atividade: `Mude o seu código para que cada toque no bloco valha 5 pontos em vez de 1. Além do número, faça o print mostrar uma mensagem animada junto, como "Voce fez 5 pontos!". Teste e veja o total pular de 5 em 5.`,
      gabarito: `local pontos = 0

script.Parent.Touched:Connect(function()
	pontos = pontos + 5
	print("Voce fez " .. pontos .. " pontos!")
end)

Cada toque agora soma 5, então o Output mostra 5, 10, 15. A linha usa pontos = pontos + 5 e o print junta o texto com o número usando os dois pontinhos (..).`,
    },
  ],
};
