import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Movimento e Ação do Jogador",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Programar em Lua a mecânica central do jogo — movimento, pulo e interação do personagem — deixando o jogo realmente jogável.`,
  descricao: `Na aula passada demos os primeiros passos com Lua dentro do Roblox Studio. Hoje o jogo deixa de ser apenas um cenário bonito e passa a responder ao jogador: o personagem se move, pula e interage com objetos. Esse é o momento em que o aluno percebe que o código que ele escreve vira ação imediata na tela — uma das experiências mais motivadoras do curso.

O coração desta aula são os eventos. Em Roblox, quase tudo acontece por meio de eventos: quando o jogador toca um objeto, quando uma tecla é pressionada, quando um personagem nasce. O aluno aprende a "ouvir" esses eventos com a função Connect e a executar uma ação em resposta. Trabalhamos principalmente com o evento Touched (toque) de uma peça e com a leitura de teclas pelo serviço UserInputService, que é como o jogo enxerga o teclado.

Também ajustamos propriedades do personagem que mudam a sensação do jogo: a velocidade de caminhada (WalkSpeed) e a força do pulo (JumpPower ou JumpHeight). São números simples, mas que transformam completamente o ritmo da partida. O aluno vai testar valores, sentir a diferença e entender que equilibrar esses números é parte do trabalho de quem faz games.

Ao final, cada aluno terá pelo menos uma peça interativa funcionando (um item que reage ao toque) e o controle de movimento ajustado. O jogo passa a ter resposta às ações do jogador, preparando o terreno para a pontuação e as regras das próximas aulas.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado (um por aluno)`,
    `Conta Roblox de cada aluno já logada no Studio`,
    `Projetor ou TV para o professor demonstrar os passos`,
    `Arquivo de exemplo .rbxl com um mapa simples e uma peça nomeada "Plataforma" (compartilhado pelo professor)`,
    `Editor de Script integrado do Roblox Studio (já vem no programa)`,
    `Folha impressa com os trechos de código da aula, para consulta dos alunos`,
    `Caderno ou bloco de notas para anotar os valores de WalkSpeed e JumpPower testados`,
  ],
  conceitosChave: [
    `Evento — algo que acontece no jogo (um toque, uma tecla, um nascimento) e que o código pode "ouvir" para reagir.`,
    `Connect — comando que liga um evento a uma função, dizendo "quando isto acontecer, execute aquilo".`,
    `Função (function) — um bloco de código com nome que guarda uma ação para ser executada quando chamado.`,
    `Touched — evento de uma peça que dispara quando outra parte (como o jogador) encosta nela.`,
    `Humanoid — objeto dentro do personagem que controla vida, velocidade e pulo; é por ele que mexemos no movimento.`,
    `WalkSpeed — propriedade do Humanoid que define a velocidade de caminhada do personagem (número).`,
    `UserInputService — serviço do Roblox que detecta o que o jogador faz no teclado, mouse ou controle.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Lua. Esta aula gira em torno de uma ideia única e poderosa: o jogo reage a eventos. Sempre que algo acontece (um toque, uma tecla), o código escuta e responde. Antes da aula, abra o arquivo de exemplo e confirme que existe uma peça chamada Plataforma na Workspace. Teste você mesmo, uma vez, o script de toque para chegar confiante. Tenha o projetor pronto: nesta aula o aluno copia vendo você fazer.

Lembre-se de dois lugares importantes do Studio: a janela Explorer (lista tudo no jogo, à direita) e a janela Properties (mostra os detalhes do item selecionado). Scripts ficam dentro de objetos. Para o personagem, usamos o objeto Humanoid, que vive dentro do Character de cada jogador.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "O que conseguimos fazer com Lua na aula passada?" Recolha respostas rápidas. No projetor, abra o jogo e ande com o personagem. Diga: "Hoje vamos fazer o jogo RESPONDER a nós. Vamos fazer uma peça reagir quando encostamos nela e deixar nosso personagem mais rápido."

15 min — Conteúdo novo guiado. Na Workspace, clique na peça Plataforma. Clique no sinal de mais e adicione um Script. Apague o conteúdo e escreva junto, linha a linha, explicando cada parte:

local plataforma = script.Parent
-- guarda a peça onde o script está dentro de uma variável

local function aoTocar(parte)
    print("Algo encostou na plataforma!")
end
-- cria a função que será executada no toque

plataforma.Touched:Connect(aoTocar)
-- liga o evento Touched à nossa função

Aperte Play. Quando o personagem encostar na peça, a mensagem aparece na janela Output. Explique: Touched é o evento, Connect é a ligação, aoTocar é a ação.

Agora mostre o movimento. Crie um Script dentro de ServerScriptService e escreva:

local Players = game:GetService("Players")

local function aoEntrar(jogador)
    jogador.CharacterAdded:Connect(function(personagem)
        local humano = personagem:WaitForChild("Humanoid")
        humano.WalkSpeed = 32
        humano.JumpPower = 60
    end)
end

Players.PlayerAdded:Connect(aoEntrar)

Explique: WalkSpeed muda a velocidade (o padrão é 16) e JumpPower muda a força do pulo. Aperte Play e sinta a diferença.

25 min — Mão na massa. Cada aluno repete os dois scripts no próprio jogo. Circule pela sala. Depois desafie: que a peça mude de cor ao ser tocada. Mostre dentro da função aoTocar a linha:

    plataforma.BrickColor = BrickColor.new("Bright green")

Peça que testem valores diferentes de WalkSpeed (16, 24, 50) e anotem qual sensação cada número dá.

10 min — Desafio e compartilhar. Lance: "Faça a plataforma só reagir se quem tocou for um jogador." Mostre a verificação dentro de aoTocar:

    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        print("Foi um jogador!")
    end

Peça que dois ou três alunos mostrem o jogo no projetor e expliquem o que programaram.

## Como explicar de forma clara (linguagem para a idade)

Compare evento a uma campainha: a campainha toca (evento) e alguém vai atender (função). Connect é o fio que liga a campainha à pessoa. Diga que o computador "fica esperando" o toque, sem nunca cansar. Use o corpo: ande devagar e depois rápido para mostrar o que WalkSpeed faz. Evite termos abstratos; mostre na tela e deixe o aluno repetir imediatamente.

## Erros comuns e como ajudar

O erro mais comum é o nome da peça diferente de Plataforma — peça que confiram no Explorer. Outro é esquecer Connect, deixando a função sem ligação ao evento; sem ele nada acontece. Letras trocadas em WalkSpeed ou Humanoid quebram o código: Lua diferencia maiúsculas de minúsculas. Se a mensagem não aparecer, confirme que a janela Output está aberta (menu View, Output). Se o personagem não muda de velocidade, verifique se o script está em ServerScriptService e se usaram WaitForChild antes do Humanoid.`,
  exercicios: [
    {
      titulo: `Acendendo a Output`,
      tipo: `Aquecimento guiado`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que todos abram a janela Output (menu View, opção Output) antes de testar qualquer evento. É onde as mensagens print aparecem. Sem ela, o aluno acha que o código não funcionou.`,
      atividade: `Adicione um Script dentro da peça Plataforma que escreva uma mensagem na Output assim que o jogo começar. Aperte Play e confirme que a mensagem aparece.`,
      gabarito: `local plataforma = script.Parent
print("O script da plataforma comecou!")

-- Ao apertar Play, a frase aparece na janela Output, provando que o Script esta rodando.`,
    },
    {
      titulo: `Plataforma que avisa o toque`,
      tipo: `Prática de evento`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce os três pedaços: o evento (Touched), a ligação (Connect) e a ação (a função). Peça que o aluno aponte cada parte no próprio código antes de testar.`,
      atividade: `Faça a peça Plataforma escrever na Output a frase "Alguem me tocou!" toda vez que algo encostar nela.`,
      gabarito: `local plataforma = script.Parent

local function aoTocar(parte)
    print("Alguem me tocou!")
end

plataforma.Touched:Connect(aoTocar)

-- Touched dispara no toque; Connect liga o evento a funcao aoTocar, que escreve a mensagem.`,
    },
    {
      titulo: `Personagem mais veloz`,
      tipo: `Ajuste de movimento`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que o movimento mora no Humanoid, dentro do personagem. Use WaitForChild para esperar o Humanoid existir. Deixe o aluno testar dois ou três valores e sentir a diferença.`,
      atividade: `Crie um Script em ServerScriptService que deixe o personagem de cada jogador andar mais rápido (WalkSpeed igual a 28) assim que ele entrar no jogo.`,
      gabarito: `local Players = game:GetService("Players")

local function aoEntrar(jogador)
    jogador.CharacterAdded:Connect(function(personagem)
        local humano = personagem:WaitForChild("Humanoid")
        humano.WalkSpeed = 28
    end)
end

Players.PlayerAdded:Connect(aoEntrar)

-- PlayerAdded detecta o jogador; CharacterAdded espera o personagem nascer; WalkSpeed muda a velocidade.`,
    },
    {
      titulo: `Plataforma que muda de cor`,
      tipo: `Desafio criativo`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que dá para combinar evento com mudança de propriedade. Apresente BrickColor.new com um nome de cor entre aspas. Incentive o aluno a escolher a própria cor.`,
      atividade: `Faça a peça Plataforma mudar de cor (por exemplo, verde) no momento em que algo encostar nela.`,
      gabarito: `local plataforma = script.Parent

local function aoTocar(parte)
    plataforma.BrickColor = BrickColor.new("Bright green")
end

plataforma.Touched:Connect(aoTocar)

-- No toque, a funcao troca a propriedade BrickColor da peca para verde.`,
    },
    {
      titulo: `Só reage a jogadores`,
      tipo: `Desafio com condição`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais difícil. Explique que objetos do cenário também disparam Touched, então precisamos checar se quem tocou tem um Humanoid. Apresente o if e o FindFirstChild com calma; é a primeira condição da aula.`,
      atividade: `Melhore a plataforma para que ela escreva "Foi um jogador!" apenas quando um personagem (e não um objeto qualquer) encostar nela.`,
      gabarito: `local plataforma = script.Parent

local function aoTocar(parte)
    local humano = parte.Parent:FindFirstChild("Humanoid")
    if humano then
        print("Foi um jogador!")
    end
end

plataforma.Touched:Connect(aoTocar)

-- FindFirstChild procura um Humanoid no pai da parte tocada; o if so executa quando ele existe, ou seja, quando foi um jogador.`,
    },
  ],
};
