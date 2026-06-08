import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Itens, Recompensas e Regras do Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar itens colecionáveis, recompensas e condições de vitória ou derrota usando "if" e "else" para dar ao jogo regras claras e um objetivo desafiador.`,
  descricao: `Até agora o aluno deu vida ao jogo, fez o jogador se mover e construiu um placar de pontos. Mas um jogo só fica realmente divertido quando tem regras: algo para coletar, uma recompensa por conseguir e uma condição que diz quando você venceu ou perdeu. Nesta aula o foco é exatamente isso. O aluno vai espalhar itens colecionáveis pelo cenário, programar a recompensa que cada item dá e, principalmente, ensinar o jogo a tomar decisões com "if" e "else".

O coração da aula é a estrutura condicional. Em Lua, "if" significa "se" e "else" significa "senão". Com elas o jogo passa a pensar: "se o jogador pegou 10 moedas, então ele venceu; senão, continue jogando". Essa é a mesma lógica que existe em qualquer jogo profissional. O aluno vai perceber que programar regras é, na verdade, escrever em código aquilo que ele já decide de cabeça quando joga.

Os adolescentes desta turma já trabalharam com variáveis e com o placar na aula anterior, então eles têm a base necessária. A novidade é conectar a pontuação a uma decisão. Quando os pontos chegam a um número-alvo, o jogo reage: mostra "Você venceu!", toca um som ou abre uma porta. Quando o tempo acaba ou a vida zera, o jogo reage de outro jeito. É a diferença entre um cenário bonito e um jogo de verdade.

Ao fim da aula, cada aluno terá um jogo com um objetivo claro, itens que valem pontos e uma mensagem de vitória ou derrota. Isso prepara o terreno para as próximas aulas de teste, equilíbrio e publicação, que fazem parte do entregável do mês: o jogo publicado.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado, um por aluno`,
    `Editor de código integrado do Roblox Studio (janela Script) já em uso`,
    `Projetor ou TV para o professor mostrar cada passo na tela grande`,
    `Arquivo de exemplo "Aula04-Itens.rbxl" com um placar pronto da aula anterior`,
    `Modelo de moeda (Part) já configurado com um Anchored desligado para servir de base`,
    `Folha impressa com a estrutura "if / then / else / end" para consulta rápida`,
    `Navegador aberto na documentação do Roblox (Touched, IntValue) para apoio`,
  ],
  conceitosChave: [
    `Item colecionável — objeto no cenário que o jogador pega e que some ao ser tocado, geralmente dando uma recompensa.`,
    `Recompensa — benefício que o jogador recebe ao pegar um item, como ganhar pontos, vida ou velocidade.`,
    `Condição — pergunta de verdadeiro ou falso que o jogo faz, por exemplo "os pontos são iguais a 10?".`,
    `if (se) — comando que executa um bloco de código apenas quando a condição é verdadeira.`,
    `else (senão) — comando que executa um bloco diferente quando a condição do "if" é falsa.`,
    `Condição de vitória — regra que define quando o jogador ganhou o jogo, como atingir uma pontuação-alvo.`,
    `Condição de derrota — regra que define quando o jogador perdeu, como o tempo acabar ou a vida chegar a zero.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Lua. O segredo desta aula é uma única ideia: o jogo toma decisões com "if" (se) e "else" (senão). A estrutura sempre tem quatro palavras: "if", "then", "else" e "end". Tudo o que estiver entre "then" e "else" roda quando a condição é verdadeira; o que estiver entre "else" e "end" roda quando ela é falsa. Pratique uma vez antes da aula colando o código do passo a passo e testando com o botão Play. Se funcionar na sua máquina, você está pronto. Tenha em mãos o arquivo de exemplo com o placar da aula anterior, pois vamos apenas adicionar regras a ele.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min). Abra o jogo no projetor e pergunte: "Como o jogo sabe quando você venceu?". Deixe os alunos responderem. Mostre o placar da aula passada e diga que hoje ele vai tomar decisões. Peça que cada aluno abra o arquivo de exemplo e confirme que o placar aparece ao apertar Play.

Conteúdo novo guiado (15 min). No Explorer, clique com o botão direito em ServerScriptService, escolha Insert Object e depois Script. Apague o conteúdo e digite junto com a turma, explicando cada linha:

local pontosParaVencer = 10
local pontos = 0

local function pegarItem()
  pontos = pontos + 1
  print("Pontos:", pontos)
  if pontos >= pontosParaVencer then
    print("Você venceu!")
  else
    print("Continue coletando!")
  end
end

Explique: a primeira linha guarda a meta. A função "pegarItem" soma um ponto e mostra o total com print, usando vírgula para juntar texto e número sem chaves. O "if pontos maior ou igual a pontosParaVencer" testa a meta; se for verdade, mostra a vitória; "else" mostra a mensagem de incentivo. O "end" fecha o if e outro "end" fecha a função.

Mão na massa (25 min). Cada aluno cria a moeda. No Explorer, insira uma Part, renomeie para "Moeda" e deixe Anchored ligado para ela ficar parada. Agora ligue a moeda à função com um evento de toque. Dentro do mesmo script, peça que digitem:

local moeda = workspace.Moeda

local function aoTocar(parte)
  local humano = parte.Parent:FindFirstChild("Humanoid")
  if humano then
    pegarItem()
    moeda:Destroy()
  end
end

moeda.Touched:Connect(aoTocar)

Explique: "Touched" dispara quando algo encosta na moeda. O "if humano then" garante que só o jogador conta, não qualquer objeto. Quando é o jogador, chamamos "pegarItem" e a moeda some com Destroy. Mande testar: apertar Play, encostar na moeda, ver os pontos subirem e a mensagem mudar ao chegar em 10.

Desafio e compartilhar (10 min). Proponha trocar a recompensa: em vez de 1 ponto, dar 2; ou mudar a meta para 5. Cada aluno mostra ao colega ao lado a mensagem de vitória do seu jogo.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que "if" é igual a uma regra de jogo de tabuleiro: "SE você tirar 6, ENTÃO joga de novo; SENÃO, passa a vez". O computador faz a mesma coisa, só que escrito em código. Chame a condição de "a pergunta que o jogo faz" e a resposta só pode ser sim ou não. Para a vitória, fale "o jogo está vigiando seus pontos o tempo todo, esperando bater a meta". Evite a palavra "booleano"; diga "verdadeiro ou falso".

## Erros comuns e como ajudar

O erro mais frequente é esquecer um "end": cada "if" precisa de um "end" e cada função de outro. Conte os "end" junto com o aluno. Outro deslize é trocar "=" por "==": para comparar usamos dois sinais de igual, e para guardar valor usamos um só. Se a moeda não some, confira se o nome no script é igual ao nome no Explorer, com maiúsculas iguais. Se nada acontece ao tocar, verifique se a linha "moeda.Touched:Connect(aoTocar)" foi escrita e se a Part está Anchored. Por fim, lembre que Lua diferencia maiúsculas de minúsculas, então "Humanoid" não é o mesmo que "humanoid".`,
  exercicios: [
    {
      titulo: `Lendo a decisão do jogo`,
      tipo: `Leitura de código e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o bloco no projetor e peça que cada aluno diga em voz alta o que o jogo faz em cada caso. Não precisa digitar nada; o objetivo é entender o fluxo do "if" e do "else".`,
      atividade: `Observe o código abaixo e responda: o que aparece se "pontos" for 10? E se for 4?\n\nif pontos >= 10 then\n  print("Você venceu!")\nelse\n  print("Continue coletando!")\nend`,
      gabarito: `Se "pontos" for 10, a condição "pontos >= 10" é verdadeira, então aparece "Você venceu!". Se "pontos" for 4, a condição é falsa, então o "else" roda e aparece "Continue coletando!".`,
    },
    {
      titulo: `Dando a recompensa certa`,
      tipo: `Completar código`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a função com a linha da soma em branco. O aluno deve completar para que cada item dê 1 ponto. Verifique se ele usa "pontos = pontos + 1" e não "pontos == pontos + 1".`,
      atividade: `Complete a linha que falta para que pegar o item aumente a pontuação em 1:\n\nlocal function pegarItem()\n  ______________\n  print("Pontos:", pontos)\nend`,
      gabarito: `local function pegarItem()\n  pontos = pontos + 1\n  print("Pontos:", pontos)\nend\n\nA linha "pontos = pontos + 1" pega o valor atual de pontos e soma 1, guardando o resultado de volta na variável.`,
    },
    {
      titulo: `Criando a moeda colecionável`,
      tipo: `Prática no Roblox Studio`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe os passos no Explorer. O ponto crítico é ligar o evento Touched e proteger com "if humano then". Confirme que a Part está Anchored e com o nome "Moeda".`,
      atividade: `Insira uma Part chamada "Moeda" e escreva o código que faz ela sumir e dar ponto quando o jogador encosta.`,
      gabarito: `local moeda = workspace.Moeda\n\nlocal function aoTocar(parte)\n  local humano = parte.Parent:FindFirstChild("Humanoid")\n  if humano then\n    pegarItem()\n    moeda:Destroy()\n  end\nend\n\nmoeda.Touched:Connect(aoTocar)\n\nO "if humano then" garante que só o jogador conta; "pegarItem" dá o ponto e "moeda:Destroy()" faz a moeda sumir.`,
    },
    {
      titulo: `Vitória ou derrota pelo tempo`,
      tipo: `Escrita de condição com else`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora o aluno adiciona uma condição de derrota. Apresente a variável "tempo" e peça que ele decida o que acontece quando o tempo acaba antes da meta. Reforce a contagem dos "end".`,
      atividade: `Escreva um "if/else" que mostre "Você venceu!" quando os pontos chegarem a 10 e "Tempo esgotado, você perdeu!" quando o tempo for 0 sem atingir a meta. Use as variáveis "pontos" e "tempo".`,
      gabarito: `if pontos >= 10 then\n  print("Você venceu!")\nelse\n  if tempo <= 0 then\n    print("Tempo esgotado, você perdeu!")\n  else\n    print("Continue coletando!")\n  end\nend\n\nPrimeiro o jogo testa a vitória. Se ainda não venceu, testa se o tempo acabou; senão, manda continuar coletando.`,
    },
    {
      titulo: `Regras do seu próprio jogo`,
      tipo: `Desafio criativo de programação`,
      tempo: `13 minutos`,
      guiaProfessor: `Desafio aberto. O aluno inventa uma regra nova: um item especial que vale mais pontos ou que tira pontos. Aceite variações, desde que use "if" e "else" corretamente e o jogo continue rodando sem erro.`,
      atividade: `Crie um item especial chamado "Bomba" que, ao ser tocado, faça o jogador perder 3 pontos, mas nunca deixe os pontos ficarem abaixo de 0.`,
      gabarito: `local bomba = workspace.Bomba\n\nlocal function pegarBomba(parte)\n  local humano = parte.Parent:FindFirstChild("Humanoid")\n  if humano then\n    pontos = pontos - 3\n    if pontos < 0 then\n      pontos = 0\n    end\n    print("Pontos:", pontos)\n    bomba:Destroy()\n  end\nend\n\nbomba.Touched:Connect(pegarBomba)\n\nO segundo "if" protege a pontuação: se ficar negativa, ela volta para 0. Assim o jogo nunca mostra pontos abaixo de zero.`,
    },
  ],
};
