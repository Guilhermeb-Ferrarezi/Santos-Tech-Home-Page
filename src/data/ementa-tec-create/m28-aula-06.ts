import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Equilíbrio e Polimento do Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer o ajuste fino do jogo — equilibrar dificuldade, velocidade e valores de pontos, corrigir bugs e aplicar melhorias a partir do feedback de um colega que testa a sua criação.`,
  descricao: `Na aula passada os alunos viraram caçadores de bugs e descobriram o que estava quebrado no jogo. Hoje damos o passo seguinte: deixar o jogo gostoso de jogar. Um jogo pode estar sem erros e, mesmo assim, ser chato — fácil demais entedia, difícil demais frustra. O trabalho de hoje é o equilíbrio (o famoso balanceamento) somado ao polimento, que são os pequenos acabamentos que fazem o jogo parecer profissional.

Equilibrar um jogo é mexer em números com intenção. A velocidade do jogador, o tempo de uma rodada, quantos pontos cada item vale, quanto custa para vencer — tudo isso são valores que o aluno pode aumentar ou diminuir até a partida ficar justa e divertida. A grande lição da aula é que esses números não devem ficar espalhados e escondidos pelo código: quando reunimos os valores importantes no topo do script, em variáveis com nomes claros, fica fácil testar e ajustar sem caçar linha por linha. Essa é uma prática que programadores de verdade usam todos os dias.

A segunda metade da aula é sobre ouvir o jogador. Cada aluno vai trocar de cadeira e jogar o jogo do colega, anotando o que sentiu: o que foi confuso, o que foi fácil demais, o que travou. Depois, de volta ao próprio jogo, aplica pelo menos uma melhoria baseada nesse feedback. Aprender a receber crítica sem se ofender e a transformar opinião em ação é uma habilidade tão importante quanto programar.

Ao final, cada aluno terá um jogo mais equilibrado, com pelo menos um bug corrigido e uma melhoria aplicada a partir do teste do colega. O jogo fica mais perto de estar pronto para o mundo, que é o tema das próximas aulas: preparar e lançar oficialmente o projeto.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado (um por aluno)`,
    `Conta Roblox de cada aluno já logada no Studio, com o jogo em andamento aberto`,
    `Projetor ou TV para o professor demonstrar os ajustes no código em tela grande`,
    `Editor de Script integrado do Roblox Studio (já vem no programa) com a janela Output aberta`,
    `Arquivo de exemplo .rbxl com um jogo simples e valores espalhados no código, para a demonstração de balanceamento`,
    `Ficha de teste impressa para o colega anotar o feedback (campos: fácil/difícil, o que confundiu, o que travou, sugestão)`,
    `Caderno ou bloco de notas para registrar os valores antigos e novos de cada ajuste`,
  ],
  conceitosChave: [
    `Balanceamento — ajustar os números do jogo (velocidade, pontos, tempo, dificuldade) até a partida ficar justa e divertida, nem fácil nem difícil demais.`,
    `Dificuldade — o quanto o jogo desafia o jogador; equilibrá-la é deixar o desafio na medida certa para a idade e a habilidade de quem joga.`,
    `Variável de configuração — uma variável colocada no topo do script para guardar um valor importante que será ajustado com frequência, como velocidade ou pontos.`,
    `Polimento — os pequenos acabamentos finais (cores, mensagens, sons, correções) que fazem o jogo parecer profissional.`,
    `Playtest (teste com jogador) — quando outra pessoa joga o seu jogo enquanto você observa, para descobrir problemas que você não enxergava.`,
    `Feedback — a opinião do jogador sobre o que foi bom, confuso ou difícil; serve de guia para as melhorias.`,
    `Iteração — o ciclo de testar, ouvir, ajustar e testar de novo, repetido até o jogo ficar bom.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para conduzir esta aula. A ideia central é simples: bons jogos nascem de muitos pequenos ajustes, não de um acerto de primeira. O seu papel é mostrar como mexer em números com intenção e como organizar esses números para facilitar o ajuste. O segredo técnico da aula é reunir os valores importantes em variáveis no topo do script, com nomes claros em MAIUSCULAS. Em vez de procurar o número 16 perdido no meio do código, o aluno troca uma linha só.

Antes da aula, abra o arquivo de exemplo e pratique uma vez: encontre um valor (como a velocidade do jogador), suba esse valor para uma variável no topo, aperte Play e sinta a diferença. Tenha a janela Output aberta (menu View, opção Output). Prepare a sala para a troca de testes: os alunos vão sentar no computador do colega, então combine antes como será o rodízio.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "Quais bugs vocês acharam na aula passada?" Recolha duas ou três respostas. No projetor, jogue um jogo de propósito muito fácil e depois um difícil demais. Pergunte: "Qual dos dois é divertido?" Conduza até a ideia de equilíbrio: o jogo bom fica no meio.

15 min — Conteúdo novo guiado. Abra o script do jogo de exemplo. Mostre um valor escondido no meio do código, por exemplo uma velocidade escrita direto na linha. Explique o problema: difícil de achar e de mudar. Agora reorganize junto com a turma, escrevendo no topo do script:

local VELOCIDADE_JOGADOR = 24
local PONTOS_POR_ITEM = 10
local TEMPO_DE_RODADA = 60

Explique que MAIUSCULAS avisam "isto é um valor de ajuste". Em seguida, use essas variáveis no código, em vez do número solto:

humano.WalkSpeed = VELOCIDADE_JOGADOR

Aperte Play, sinta o jogo, volte ao topo, mude VELOCIDADE_JOGADOR para 40, rode de novo. Mostre como agora basta uma linha para rebalancear. Faça o mesmo com PONTOS_POR_ITEM, mostrando que dobrar os pontos muda a sensação de recompensa.

25 min — Mão na massa. Cada aluno abre o próprio jogo e cria pelo menos duas variáveis de configuração no topo do script (por exemplo velocidade e pontos), trocando os números soltos por elas. Depois testa valores diferentes e anota no caderno qual deixou o jogo mais justo. Em seguida, corrige um bug que sobrou da aula anterior. Circule pela sala e ajude nos nomes das variáveis.

10 min — Desafio e compartilhar. Organize o rodízio: cada aluno joga o jogo do colega por dois minutos e preenche a ficha de teste (fácil ou difícil, o que confundiu, uma sugestão). De volta ao próprio lugar, cada um lê o feedback e aplica pelo menos uma melhoria. Peça que dois ou três contem qual ajuste fizeram e por quê.

## Como explicar de forma clara (linguagem para a idade)

Compare balancear a temperar comida: pouco sal é sem graça, sal demais estraga, o cozinheiro vai provando e ajustando. Diga que os números do jogo são o sal. Para as variáveis de configuração, use a imagem de um painel de controle: em vez de mexer no motor inteiro, você gira um botão no painel. Reforce que receber feedback não é levar bronca: é ganhar um mapa do tesouro que mostra onde melhorar. Sempre conecte com o jogo do aluno: "O que o seu colega achou difícil? O que dá para deixar mais justo?"

## Erros comuns e como ajudar

O erro mais comum é o aluno mudar o valor na variável do topo mas esquecer de usar a variável no código, deixando o número antigo solto; peça que ele procure e substitua todos. Outro é escrever o nome da variável diferente em dois lugares — Lua diferencia maiúsculas de minúsculas, então VELOCIDADE e Velocidade são coisas distintas. Há quem exagere e deixe o jogo impossível; lembre de testar a cada mudança, não tudo de uma vez. No playtest, alguns levam a crítica para o lado pessoal; reforce que o alvo da crítica é o jogo, não a pessoa. Se o jogo não mudar após o ajuste, confirme que o aluno salvou e apertou Play de novo.`,
  exercicios: [
    {
      titulo: `Subindo o número para o topo`,
      tipo: `Aquecimento guiado`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre primeiro um valor solto no meio do código e explique por que ele é difícil de ajustar. Acompanhe a turma criando a variável no topo e usando-a embaixo. Reforce o estilo em MAIUSCULAS para valores de configuração.`,
      atividade: `No seu jogo, encontre a velocidade do jogador escrita direto no código. Crie uma variável chamada VELOCIDADE_JOGADOR no topo do script e use essa variável no lugar do número solto.`,
      gabarito: `local VELOCIDADE_JOGADOR = 24

local humano = personagem:WaitForChild("Humanoid")
humano.WalkSpeed = VELOCIDADE_JOGADOR

-- O valor agora mora numa variável no topo; basta mudar uma linha para reequilibrar a velocidade.`,
    },
    {
      titulo: `Pontos no painel de controle`,
      tipo: `Prática de balanceamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Explique que o valor de cada item afeta a sensação de recompensa. Peça que o aluno crie a variável e teste dois valores diferentes, anotando qual deixou o jogo mais gostoso.`,
      atividade: `Crie uma variável PONTOS_POR_ITEM no topo do script e use-a quando o jogador pega um item. Teste com 10 e depois com 25 pontos e anote qual valor deixou o jogo mais divertido.`,
      gabarito: `local PONTOS_POR_ITEM = 10

local function aoColetar(jogador)
    jogador.leaderstats.Pontos.Value = jogador.leaderstats.Pontos.Value + PONTOS_POR_ITEM
end

-- Trocar o valor de PONTOS_POR_ITEM no topo (de 10 para 25) muda a recompensa sem mexer no resto do código.`,
    },
    {
      titulo: `Caçando o bug que sobrou`,
      tipo: `Correção de bug`,
      tempo: `10 minutos`,
      guiaProfessor: `Retome a lista de bugs da aula anterior. Ajude o aluno a usar print para localizar onde o código se perde. Um bug clássico é o nome de objeto ou variável escrito errado.`,
      atividade: `Escolha um bug da lista da aula passada. Use print para descobrir onde o jogo se comporta errado e corrija o problema. Teste para confirmar que sumiu.`,
      gabarito: `-- Exemplo: a pontuacao não subia porque o nome estava errado (Ponto em vez de Pontos).
local function aoColetar(jogador)
    print("Tentando dar pontos para:", jogador.Name)
    jogador.leaderstats.Pontos.Value = jogador.leaderstats.Pontos.Value + PONTOS_POR_ITEM
end

-- O print revela o ponto da falha; corrigir o nome para Pontos faz a pontuacao voltar a funcionar.`,
    },
    {
      titulo: `Jogando o jogo do colega`,
      tipo: `Playtest em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Organize o rodízio com calma: cada aluno senta no lugar do colega e joga por dois minutos. Entregue a ficha de teste e oriente um feedback respeitoso e específico, sempre sobre o jogo, nunca sobre a pessoa.`,
      atividade: `Jogue o jogo de um colega por dois minutos. Preencha a ficha de teste anotando: o jogo estava fácil ou difícil, o que te confundiu e uma sugestão de melhoria. Entregue a ficha ao dono do jogo.`,
      gabarito: `Não há código nesta atividade. Uma ficha bem preenchida traz observações específicas, como: "Estava difícil porque o tempo da rodada é curto; o item verde confundiu porque parece inimigo; sugestão: dar mais tempo ou mudar a cor do item." Feedback fraco a melhorar: respostas vagas como "Foi legal", sem dizer o que ajustar. O professor reforça a crítica útil e gentil.`,
    },
    {
      titulo: `Aplicando o feedback recebido`,
      tipo: `Desafio de iteração`,
      tempo: `14 minutos`,
      guiaProfessor: `Este é o exercício que fecha a aula. Peça que o aluno leia a ficha que recebeu e escolha UMA melhoria para aplicar agora. Ajude a ligar a crítica ao valor exato que precisa mudar. Incentive testar antes e depois para sentir a diferença.`,
      atividade: `Leia o feedback que você recebeu do colega. Escolha uma melhoria e aplique no seu jogo mudando uma variável de configuração. Por exemplo, se o colega achou a rodada curta demais, aumente o TEMPO_DE_RODADA. Teste antes e depois e explique o que mudou.`,
      gabarito: `-- Feedback: "a rodada acaba rapido demais". Ajuste aplicado:
local TEMPO_DE_RODADA = 60   -- antes
local TEMPO_DE_RODADA = 90   -- depois, deixando o tempo final no topo do script

-- O aluno deve trocar apenas a variável de configuracao, testar a partida e perceber que a rodada ficou mais justa. Vale qualquer melhoria coerente com o feedback recebido (velocidade, pontos, tempo ou dificuldade), desde que feita por uma variável no topo e testada antes e depois.`,
    },
  ],
};
