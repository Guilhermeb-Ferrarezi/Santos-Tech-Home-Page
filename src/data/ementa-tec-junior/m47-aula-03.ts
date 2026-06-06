import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Lua de novo: scripts que dão vida ao jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Relembrar a lógica da linguagem Lua, descobrir onde os Scripts ficam dentro de um objeto no Roblox e escrever o primeiro script de mecânica simples usando o evento Touched.`,
  descricao: `Nesta aula a turma reencontra um velho amigo: a linguagem Lua. As crianças já programaram com texto antes, então o objetivo não é começar do zero, e sim acordar essa memória e mostrar que o mesmo jeito de pensar agora vai dar vida ao cenário que elas construíram na semana passada. Até aqui o jogo tinha paredes, chão e objetos parados. A partir de hoje, um pedaço de código vai fazer as coisas reagirem quando o jogador encostar nelas.

O coração da aula é entender onde mora o código dentro do Roblox Studio. No Roblox, um Script não fica solto: ele vive dentro de um objeto, como uma parte (Part). É como colocar um cérebro pequenininho dentro de um bloco. Quando o aluno aprende a clicar com o botão direito num Part, inserir um Script e abrir o editor, ele descobre o lugar exato onde a mágica acontece. Esse "onde" é tão importante quanto o "o quê".

Depois de relembrar a lógica (um comando por linha, de cima para baixo, o computador faz exatamente o que está escrito), a criança escreve seu primeiro script de mecânica usando o evento Touched. Touched quer dizer "foi tocado". A ideia é simples e poderosa: quando o personagem encosta na parte, alguma coisa acontece. Nesta aula essa coisa será trocar a cor do bloco ou fazê-lo sumir. É a primeira vez no mês que o cenário deixa de ser decoração e vira um jogo que responde ao jogador.

Esta é uma aula-ponte dentro do mês. Ela liga o cenário pronto (aula 2) às mecânicas mais completas que virão (aula 4). Ao final, cada aluno terá uma parte do seu mundo que reage ao toque, e vai entender que isso é só o começo: o mesmo evento Touched poderá, nas próximas aulas, somar pontos, abrir portas ou dar um item ao jogador.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, já com o cenário da aula 2 carregado`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada clique e cada linha de código`,
    `Exemplo pronto do professor: um bloco que muda de cor ao ser tocado e outro que some, para mostrar funcionando antes`,
    `Folha impressa com o código da aula em letras grandes, linha por linha, para a turma copiar com calma`,
    `Quadro branco ou flip chart para desenhar onde o Script "mora" dentro do Part`,
    `Painel Output do Studio aberto (menu View, opção Output) para ver mensagens e erros`,
    `Adesivos ou carimbos para premiar quem fizer o bloco reagir corretamente ao toque`,
  ],
  conceitosChave: [
    `Lua — a linguagem de texto que usamos para dar ordens ao computador dentro do Roblox.`,
    `Script — um pedaço de código que mora dentro de um objeto e diz o que ele deve fazer.`,
    `Part — uma parte do mundo, como um bloco, que pode ganhar um Script para virar inteligente.`,
    `Explorer — o painel do Roblox que mostra a lista de todos os objetos do jogo, como uma árvore.`,
    `Evento — um momento em que algo acontece no jogo, como encostar num bloco, que faz o código rodar.`,
    `Touched — o evento que dispara quando alguém ou alguma coisa toca na parte.`,
    `Função — o conjunto de ordens que o jogo executa quando o evento acontece.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para dar esta aula. Três ideias bastam. Primeira: no Roblox o código não fica solto, ele mora dentro de um objeto. A gente coloca um Script dentro de um Part, e esse Script controla aquela parte. Segunda: para inserir um Script, clica-se com o botão direito sobre o Part (na cena ou no painel Explorer), escolhe-se "Insert Object" (Inserir Objeto) e depois "Script". Abre uma janela de texto onde digitamos as ordens. Terceira: o evento Touched é a frase "quando esta parte for tocada, faça isto". Tudo o que estiver dentro da função roda no momento do toque.

Antes da turma chegar, faça você mesmo: abra o Explorer (menu View, opção Explorer) e o Output (menu View, opção Output). Clique num Part, insira um Script, apague o texto de exemplo e digite o código da aula. Aperte o botão Play (o triângulo no topo) e encoste o personagem no bloco. Veja a cor mudar ou o bloco sumir. Se der erro, ele aparece em vermelho no Output, quase sempre por causa de uma letra trocada.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Lua. Pergunte "o que é a Lua?" e "o computador lê o código de cima para baixo ou de baixo para cima?". Mostre o cenário pronto da aula 2 e diga: "hoje vamos fazer um pedaço dele acordar e reagir ao toque". Desenhe no quadro um bloco com um cérebro pequeno dentro, escrevendo "Script" embaixo.

Conteúdo novo guiado (15 min): no projetor, abra o Explorer. Clique com o botão direito num Part, "Insert Object", depois "Script". Mostre que apareceu um item Script abaixo do Part na árvore, prova de que ele mora dentro do bloco. Apague o texto de exemplo. Digite linha por linha. Linha 1: liga o evento Touched a uma função. Dentro da função: a ordem que muda a cor da parte. Linha final: end e o fecha-parênteses, que terminam a função. Aperte Play, encoste no bloco e mostre a cor mudando. Pergunte: "quando a cor mudou? Só quando encostamos, certo?".

Mão na massa (25 min): cada aluno escolhe um Part do próprio cenário, insere um Script e digita o código. Ande pela sala. Confira a indentação (o espacinho) das linhas de dentro da função e o end no fim. Quem terminar a troca de cor, parte para o desafio de fazer o bloco sumir.

Desafio e compartilhar (10 min): peça que troquem a cor por outra, ou que façam o bloco desaparecer com Transparency em vez de mudar a cor. Quem conseguir mostra no projetor e conta para a turma qual parte do mapa "ganhou vida".

## Como explicar para crianças

Use a imagem do cérebro dentro do bloco. "O bloco sozinho é só um bloco. Mas se a gente coloca um Script dentro dele, é como dar um cérebro pequenininho para o bloco pensar." Para o evento Touched, faça o gesto de encostar com o dedo e diga: "Touched é inglês de tocado. É como um sininho: quando alguém toca no bloco, o sininho toca e o código acorda." Repita a frase mágica: "quando for tocado, faça isto". Mostre que o que está dentro da função, com o espacinho na frente, é o "isto" que vai acontecer.

## Erros comuns e como ajudar

O erro mais comum é colocar o Script no lugar errado, fora do Part, e o bloco não reage. Abra o Explorer com a criança e confirme que o Script está pendurado embaixo do Part certo. Outro erro: esquecer o end no final, e o Output mostra erro em vermelho; ensine que toda função aberta precisa de um end para fechar. Muitos trocam maiúsculas e minúsculas, escrevendo touched em vez de Touched ou color em vez de Color; lembre que o Roblox liga para as letrinhas. Alguns escrevem a cor errada; mostre que BrickColor pede o nome entre aspas, como "Bright red". Por fim, se nada acontece, confira se apertaram Play de verdade e se estão encostando no bloco certo.`,
  exercicios: [
    {
      titulo: `Onde mora o cérebro do bloco?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas para a turma toda, de mãos levantadas. Use o desenho do bloco com o cérebro dentro para apoiar. O objetivo é confirmar que entenderam que o Script mora dentro de um Part e que o evento Touched dispara ao tocar.`,
      atividade: `Responda com a turma: 1) Onde fica o Script no Roblox, solto ou dentro de um objeto? 2) Como se chama o evento que acontece quando encostamos num bloco? 3) Em qual painel vemos a árvore com todos os objetos e o Script dentro do Part?`,
      gabarito: `1) Dentro de um objeto, como um Part (não fica solto). 2) O evento Touched, que quer dizer "foi tocado". 3) No painel Explorer, que mostra a lista de objetos em forma de árvore.`,
    },
    {
      titulo: `Inserindo o Script no bloco`,
      tipo: `Prática guiada no computador`,
      tempo: `7 minutos`,
      guiaProfessor: `Cada aluno escolhe um Part do cenário e insere um Script. Mostre no projetor: botão direito no Part, "Insert Object", "Script". Confira no Explorer se o Script apareceu pendurado embaixo do Part. Ainda não precisa digitar o evento; é só criar o Script e ver o texto de exemplo dentro dele.`,
      atividade: `No seu cenário, escolha um bloco. Clique nele com o botão direito, escolha Insert Object e depois Script. Olhe o painel Explorer e confirme que o Script ficou logo abaixo do seu bloco, mostrando que mora dentro dele.`,
      gabarito: `O item Script aparece no Explorer pendurado abaixo do Part escolhido, com um pequeno triângulo de recuo, provando que o Script está dentro do bloco. A janela do editor abre com um texto de exemplo (print("Hello world!")).`,
    },
    {
      titulo: `Meu primeiro Touched`,
      tipo: `Prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora os alunos apagam o exemplo e digitam o código que muda a cor ao toque. Mostre linha por linha no projetor. Confira a indentação da linha de dentro e o end no fim. Ande pela sala, peça que apertem Play e encostem no bloco para ver a cor mudar.`,
      atividade: `Apague o texto de exemplo do Script e escreva o código que, quando o bloco for tocado, muda a cor dele para vermelho. Aperte Play e encoste o seu personagem no bloco para ver a cor mudar.`,
      gabarito: `script.Parent.Touched:Connect(function()
	script.Parent.BrickColor = BrickColor.new("Bright red")
end)

Ao apertar Play e encostar no bloco, ele fica vermelho. A primeira linha liga o evento Touched a uma função; a linha de dentro troca a cor; o end fecha a função.`,
    },
    {
      titulo: `Caça ao erro no script`,
      tipo: `Correção de código`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre este código com erros no projetor ou na folha. Há três problemas: o evento está escrito touched (minúsculo) em vez de Touched, falta o end para fechar a função, e a cor está sem aspas. Peça que apontem cada erro antes de mostrar a correção. Reforce que o Roblox liga para as letras maiúsculas.`,
      atividade: `Encontre os três erros neste código e diga como consertar cada um:
script.Parent.touched:Connect(function()
	script.Parent.BrickColor = BrickColor.new(Bright red)`,
      gabarito: `Erro 1: o evento foi escrito touched com t minúsculo; o certo é Touched com T maiúsculo. Erro 2: faltou o end) para fechar a função. Erro 3: o nome da cor está sem aspas; o certo é "Bright red" entre aspas. Código certo:
script.Parent.Touched:Connect(function()
	script.Parent.BrickColor = BrickColor.new("Bright red")
end)`,
    },
    {
      titulo: `O bloco que some`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio final para quem já fez a troca de cor. Em vez de mudar a cor, o bloco vai sumir ao ser tocado, usando Transparency com valor 1 (invisível) e CanCollide false (deixa passar). Deixe-os testar e, no fim, alguns mostram no projetor a parte do mapa que "desaparece" ao toque e contam para a turma como ficou.`,
      atividade: `Mude o seu código para que, em vez de trocar a cor, o bloco fique invisível e o jogador possa atravessá-lo quando encostar nele. Aperte Play e veja o bloco sumir no momento do toque.`,
      gabarito: `script.Parent.Touched:Connect(function()
	script.Parent.Transparency = 1
	script.Parent.CanCollide = false
end)

Ao encostar, o bloco fica invisível (Transparency 1) e deixa o jogador passar (CanCollide false), parecendo que sumiu. As duas linhas de dentro da função rodam juntas no momento do toque.`,
    },
  ],
};
