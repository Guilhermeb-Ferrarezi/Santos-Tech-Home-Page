import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Sistema de Pontuação e Placar",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar um sistema de pontos usando leaderstats para que o jogador ganhe pontos ao cumprir objetivos e veja o placar atualizado em tempo real na tela do Roblox.`,
  descricao: `Todo jogo divertido precisa de um jeito de mostrar ao jogador como ele está indo. É por isso que existe o placar: um número visível que sobe quando o jogador faz algo certo. Nesta aula, os alunos vão aprender a criar esse sistema de pontuação no Roblox usando uma estrutura especial chamada leaderstats. Quando montamos o leaderstats do jeito certo, o Roblox mostra a pontuação de cada jogador automaticamente no canto da tela, sem que a gente precise desenhar nada. É como se o jogo já viesse com um quadro de pontos pronto, esperando apenas que a gente diga qual número colocar ali.

A grande ideia da aula é a variável de progresso. Uma variável é como uma caixinha que guarda um valor que pode mudar durante o jogo. A pontuação é o exemplo perfeito: ela começa em zero e cresce conforme o jogador conquista objetivos. No Roblox, essa caixinha tem um tipo especial, o IntValue, que guarda números inteiros e fica pendurada dentro do jogador. Toda vez que o número dentro dessa caixinha muda, o placar na tela muda junto, em tempo real. Os alunos vão sentir a mágica de tocar em um objetivo e ver o número subir na hora.

Para chegar lá, a turma vai escrever um Script no ServerScriptService. Esse script faz duas coisas. Primeiro, ele prepara o leaderstats para cada jogador que entra na partida, criando a caixinha de pontos com valor inicial zero. Depois, ele liga essa pontuação a um objetivo do jogo: ao encostar em uma parte especial, o jogador ganha pontos. É a primeira vez que os alunos conectam uma ação do jogador (tocar em algo) com uma mudança de número (a pontuação), e essa conexão é o coração de quase todos os jogos que existem.

Para o professor iniciante, a tranquilidade é que o código é curto e repetitivo. Você não precisa ser especialista em Lua: basta seguir os passos, digitar o código exatamente como está aqui e entender, linha por linha, o que cada parte faz. A aula foi pensada para que, ao final de uma hora, cada aluno tenha um placar funcionando e veja seus próprios pontos subindo na tela. É uma das aulas mais gratificantes do mês, porque o resultado aparece de forma imediata e clara.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e já aberto no projeto do jogo de cada aluno, para não perder tempo carregando`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique, cada menu e cada linha de código na tela grande`,
    `Editor de código do próprio Roblox Studio (a aba Script), onde os alunos vão digitar o código em Lua`,
    `Arquivo de exemplo do professor: um lugar (place) do Roblox Studio já com um Script de leaderstats funcionando, para mostrar o resultado pronto antes`,
    `Uma Part especial já colocada no mapa de exemplo, nomeada como AlvoDePontos, para servir de objetivo que dá pontos ao ser tocado`,
    `Folha impressa com o código completo da aula, linha a linha, para os alunos consultarem enquanto digitam`,
    `Navegador aberto na documentação oficial do Roblox sobre leaderstats, caso surja alguma dúvida durante a aula`,
  ],
  conceitosChave: [
    `Variável — uma caixinha com nome que guarda um valor que pode mudar; aqui ela guarda a pontuação do jogador.`,
    `leaderstats — uma pasta especial dentro do jogador que o Roblox lê para mostrar o placar na tela automaticamente.`,
    `IntValue — um tipo de objeto que guarda um número inteiro; é a caixinha onde a pontuação fica salva.`,
    `Script — o arquivo de código em Lua que roda no servidor e dá as ordens para o jogo.`,
    `ServerScriptService — o lugar do Roblox Studio onde colocamos scripts que controlam as regras do jogo.`,
    `Evento — um aviso que o jogo dispara quando algo acontece, como um jogador entrar (PlayerAdded) ou tocar em uma parte (Touched).`,
    `Função — um bloco de código com nome que executa uma tarefa quando é chamado, como dar pontos ao jogador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para dar esta aula. O código é curto e segue sempre o mesmo padrão. Antes da aula, abra o Roblox Studio e treine três coisas: criar um Script dentro do ServerScriptService (clique com o botão direito em ServerScriptService, escolha Insert Object e depois Script); apagar o texto que vem dentro do script novo; e digitar e rodar (Play) para ver o placar aparecer no canto superior direito da tela. Entenda a ideia central: leaderstats é uma pasta com um nome exato (precisa ser escrito leaderstats, tudo junto e minúsculo) que o Roblox reconhece sozinho. Dentro dela colocamos um IntValue chamado Pontos, e o número desse IntValue aparece no placar. Tenha o seu place de exemplo pronto, com uma Part chamada AlvoDePontos no mapa, para mostrar o resultado final logo no começo.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão: Abra o seu jogo de exemplo e dê Play. Toque na Part AlvoDePontos e mostre a turma o número subindo no canto da tela. Pergunte: "Como o jogo sabe quantos pontos eu tenho?" Apresente a palavra leaderstats e a frase-chave: "O Roblox já tem um placar pronto, a gente só precisa preencher."

15 min, conteúdo novo guiado: No seu Studio, crie um Script no ServerScriptService. Apague o conteúdo e digite, explicando cada linha:

local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player

    local pontos = Instance.new("IntValue")
    pontos.Name = "Pontos"
    pontos.Value = 0
    pontos.Parent = leaderstats
end)

Explique: a primeira linha pega o serviço de jogadores. O PlayerAdded:Connect roda uma função toda vez que alguém entra. Dentro dela, criamos a pasta leaderstats e a colocamos dentro do player. Depois criamos a caixinha de número (IntValue) chamada Pontos, começando em 0, dentro da pasta. Dê Play e mostre o placar zerado aparecendo na tela.

25 min, mão na massa: Peça que cada aluno faça o mesmo no próprio jogo: crie o Script no ServerScriptService, digite o código acima e dê Play para ver o placar com Pontos em 0. Quem conseguir, avança para dar pontos ao tocar no alvo. No mesmo script, abaixo do código anterior, adicione:

local alvo = workspace:WaitForChild("AlvoDePontos")

alvo.Touched:Connect(function(parteTocada)
    local personagem = parteTocada.Parent
    local jogador = Players:GetPlayerFromCharacter(personagem)
    if jogador then
        local pontos = jogador.leaderstats.Pontos
        pontos.Value = pontos.Value + 1
    end
end)

Explique: o Touched dispara quando algo encosta no alvo; descobrimos qual jogador é o dono daquela parte, e se for mesmo um jogador, somamos 1 ao valor de Pontos. Circule pela sala ajudando com erros de digitação.

10 min, desafio e compartilhar: Lance o desafio de mudar quantos pontos o alvo dá: em vez de somar 1, somar 5 (troque o número 1 por 5 na linha pontos.Value = pontos.Value + 1). Peça que dois ou três alunos mostrem o placar subindo e contem quantos pontos cada toque dá. Termine pedindo que todos salvem o jogo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Chame a variável de "caixinha de número" e a pontuação de "o quanto você já conquistou". Diga que o leaderstats é "o quadro de pontos que já vem dentro do Roblox, esperando a gente escrever o número". Compare o evento Touched com "uma campainha: quando alguém encosta, ela toca e o jogo reage". Para o evento PlayerAdded, diga que é "a porta de entrada: toda vez que alguém chega, o jogo prepara o placar dessa pessoa". Sempre leia o código em voz alta como uma frase: "Crie uma caixinha de número, chame de Pontos, comece em zero." Repita os nomes exatos, lembrando que leaderstats é tudo minúsculo e junto.

## Erros comuns e como ajudar

O erro mais comum é escrever leaderstats errado (com letra maiúscula ou separado); reforce que precisa ser exatamente leaderstats, tudo minúsculo. Outro tropeço é esquecer de definir o Parent, e aí a caixinha não aparece no placar; confira sempre se há .Parent = leaderstats e .Parent = player. Há quem digite Value com v minúsculo: lembre que é Value com V maiúsculo. Se o placar não aparecer, verifique se o script está no ServerScriptService e não em outro lugar. Se o alvo não der pontos, confira se a Part no mapa se chama exatamente AlvoDePontos. Alunos que terminam rápido podem criar um segundo IntValue, como Moedas, repetindo o padrão.`,
  exercicios: [
    {
      titulo: `Leia o código do placar`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete o primeiro bloco de código (o do leaderstats). Leia linha por linha com a turma e peça que expliquem, com palavras simples, o que cada parte faz. O objetivo é entender antes de digitar. Aceite respostas com as próprias palavras dos alunos.`,
      atividade: `Olhe o código do leaderstats projetado e responda em voz alta: o que a linha que cria a Folder faz? E a linha pontos.Value = 0? Para que serve o PlayerAdded?`,
      gabarito: `A linha da Folder cria a pasta especial leaderstats, que o Roblox usa para montar o placar. A linha pontos.Value = 0 define que a pontuação começa em zero. O PlayerAdded é o evento que roda a função sempre que um jogador entra no jogo, preparando o placar dele. Respostas com palavras diferentes mas com esse sentido estão corretas.`,
    },
    {
      titulo: `Monte o placar do zero`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o caminho no projetor antes: botão direito em ServerScriptService, Insert Object, Script. Reforce apagar o texto que vem por padrão. Passe de mesa em mesa conferindo se, ao dar Play, o placar aparece com Pontos em 0. Atenção especial à grafia de leaderstats.`,
      atividade: `Crie um Script no ServerScriptService, apague o conteúdo e digite o código do leaderstats com um IntValue chamado Pontos começando em 0. Dê Play e confira se o placar aparece no canto da tela com Pontos igual a zero.`,
      gabarito: `O código correto é:

local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
    local leaderstats = Instance.new("Folder")
    leaderstats.Name = "leaderstats"
    leaderstats.Parent = player

    local pontos = Instance.new("IntValue")
    pontos.Name = "Pontos"
    pontos.Value = 0
    pontos.Parent = leaderstats
end)

Ao dar Play, o placar deve mostrar a coluna Pontos com o valor 0 no canto superior direito.`,
    },
    {
      titulo: `Dê pontos ao tocar no alvo`,
      tipo: `prática na ferramenta`,
      tempo: `14 minutos`,
      guiaProfessor: `Confira primeiro que cada aluno tem uma Part chamada AlvoDePontos no mapa. Mostre o segundo bloco de código no projetor e explique o evento Touched. Ajude com erros comuns: nome do alvo errado, Value com letra minúscula e falta do if jogador then. Teste com cada aluno tocando no alvo durante o Play.`,
      atividade: `Abaixo do código do placar, adicione o trecho que detecta o toque no AlvoDePontos e soma 1 ponto ao jogador que encostou. Dê Play, encoste no alvo e veja a pontuação subir.`,
      gabarito: `O trecho a adicionar é:

local alvo = workspace:WaitForChild("AlvoDePontos")

alvo.Touched:Connect(function(parteTocada)
    local personagem = parteTocada.Parent
    local jogador = Players:GetPlayerFromCharacter(personagem)
    if jogador then
        local pontos = jogador.leaderstats.Pontos
        pontos.Value = pontos.Value + 1
    end
end)

Ao tocar no alvo durante o Play, a coluna Pontos no placar aumenta de 1 em 1.`,
    },
    {
      titulo: `Ajuste o valor da recompensa`,
      tipo: `desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno escolha quantos pontos o alvo deve dar (por exemplo, 5 ou 10) e altere apenas o número na linha da soma. Reforce que só o número muda, o resto do código fica igual. Confira no Play se a pontuação sobe com o novo valor escolhido.`,
      atividade: `Mude o seu código para que cada toque no alvo dê 5 pontos em vez de 1. Dê Play, toque no alvo e confirme que a pontuação sobe de 5 em 5.`,
      gabarito: `Basta trocar o número 1 por 5 na linha da soma, deixando assim:

pontos.Value = pontos.Value + 5

O restante do código permanece igual. Ao tocar no alvo, a coluna Pontos passa a subir de 5 em 5. Qualquer número inteiro escolhido pelo aluno (por exemplo, 10) também é uma resposta válida.`,
    },
    {
      titulo: `Crie um segundo placar de Moedas`,
      tipo: `desafio avançado`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o desafio mais difícil e serve para quem terminou os anteriores. O aluno deve repetir o padrão do IntValue para criar uma segunda estatística chamada Moedas dentro do mesmo leaderstats. Oriente a copiar o padrão de Pontos e trocar o nome. Mostre que o placar passa a ter duas colunas.`,
      atividade: `Dentro do mesmo bloco do PlayerAdded, crie um segundo IntValue chamado Moedas, começando em 0, dentro do leaderstats. Dê Play e confira se o placar agora mostra duas colunas: Pontos e Moedas.`,
      gabarito: `Adiciona-se um segundo IntValue dentro da função do PlayerAdded, ao lado do de Pontos:

local moedas = Instance.new("IntValue")
moedas.Name = "Moedas"
moedas.Value = 0
moedas.Parent = leaderstats

Com isso, o placar passa a exibir duas colunas, Pontos e Moedas, ambas começando em 0. O padrão é exatamente o mesmo do IntValue de Pontos, mudando apenas o nome da variável e o texto do Name.`,
    },
  ],
};
