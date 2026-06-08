import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dando Vida ao Jogo com Scripts",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Programar em Lua elementos jogáveis de verdade no Roblox Studio, usando o evento Touched, funções e condicionais if para que objetos reajam quando o jogador encosta neles.`,
  descricao: `Nesta aula, o cenário que os alunos construíram nas semanas anteriores começa a ganhar vida. Até agora o mundo era bonito, mas parado: nada acontecia quando o jogador chegava perto das coisas. Hoje vamos mudar isso usando scripts em Lua para fazer os objetos reagirem ao toque do personagem. Uma plataforma vai dar pontos, uma porta vai abrir e um bloco vai trocar de cor quando o jogador encostar nele.

O coração da aula é o evento Touched. No Roblox, "evento" é algo que acontece no jogo e que o nosso código pode escutar. O evento Touched dispara toda vez que outra parte (por exemplo, o pé do personagem) toca em uma peça. Quando isso acontece, o Roblox chama uma função que nós escrevemos, e dentro dessa função decidimos o que vai acontecer. É assim que o jogo deixa de ser um cenário enfeitado e passa a ser interativo.

Para o objeto reagir do jeito certo, os alunos vão usar condicionais com if. O if é uma pergunta que o computador faz: "isso é verdade?". Por exemplo, antes de dar pontos, precisamos perguntar se quem tocou foi mesmo um jogador, e não uma folha caindo ou outra peça do cenário. Se a resposta for sim, o código roda; se for não, ele não faz nada. Com funções, eventos e if combinados, o aluno cria comportamentos completos e seguros.

Ao final, cada aluno terá pelo menos um elemento jogável funcionando dentro do próprio jogo. Não precisa ser perfeito nem complicado: o importante é entender o ciclo "o jogador toca, o evento dispara, a função decide e o objeto reage". Esse ciclo é a base de quase tudo que torna um game divertido, e será reaproveitado nas próximas aulas, quando juntarmos cenário, assets e código.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e atualizado, um por aluno, com login feito antes da aula`,
    `Projeto do jogo de cada aluno já salvo, com o cenário das aulas anteriores`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo no Studio`,
    `Editor de Script do Roblox Studio aberto (a janela de código que aparece ao dar dois cliques em um Script)`,
    `Arquivo de exemplo com os três trechos de código da aula (plataforma de pontos, porta e bloco que muda de cor)`,
    `Folha impressa com o passo a passo de onde clicar e o código linha a linha, para os alunos acompanharem`,
    `Navegador aberto na documentação do Roblox (Creator Hub) caso o professor queira consultar algo durante a aula`,
  ],
  conceitosChave: [
    `Evento — algo que acontece no jogo (como um toque) e que o nosso código pode escutar para reagir.`,
    `Touched — o evento que dispara toda vez que outra parte encosta em uma peça do cenário.`,
    `Função — um bloco de código com nome que guarda uma tarefa e só roda quando é chamado.`,
    `Condicional (if) — uma pergunta do tipo "isso é verdade?"; se for, o código dentro do if roda; se não, ele é pulado.`,
    `Parâmetro — uma informação que a função recebe; no Touched, é a parte que tocou na peça.`,
    `Propriedade — uma característica de um objeto que podemos ler ou mudar pelo código, como cor, posição ou transparência.`,
    `Humanoid — a peça que todo personagem jogável tem; encontrá-la confirma que quem tocou foi mesmo um jogador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para dar esta aula. Basta entender um ciclo simples: o jogador toca em uma peça, o evento Touched dispara, e uma função que escrevemos decide o que fazer. No Roblox Studio, o código mora dentro de um Script. Para criar um, passe o mouse sobre uma peça (Part) na janela Explorer, clique no sinal de mais e escolha "Script". Ao dar dois cliques no Script, abre o Editor de código. O Roblox já coloca uma linha de exemplo, print("Hello world!"), que você pode apagar.

Três ideias guiam a aula. Primeiro, conectar um evento: usamos script.Parent.Touched para dizer "quando a peça do meu Script for tocada". Segundo, a função: o código que roda quando o toque acontece, e que recebe um parâmetro chamado hit (a parte que tocou). Terceiro, a condicional if: antes de reagir, perguntamos se quem tocou foi um jogador, procurando um Humanoid. Teste sempre clicando no botão azul "Play" no topo; ande com o personagem até a peça e veja a reação.

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 5. Pergunte: "o que é uma variável? E uma função?". Mostre no projetor uma peça parada e pergunte: "como faríamos ela reagir quando o jogador encostar?". Conduza até a palavra "evento".

Conteúdo novo guiado (15 min): No projetor, crie uma Part chamada "Plataforma", insira um Script nela e digite o código abaixo, explicando cada linha:

local plataforma = script.Parent

local function aoTocar(hit)
    local humano = hit.Parent:FindFirstChild("Humanoid")
    if humano then
        print("Um jogador tocou na plataforma!")
        plataforma.BrickColor = BrickColor.new("Bright green")
    end
end

plataforma.Touched:Connect(aoTocar)

Explique: a linha 1 guarda a peça numa variável. "local function aoTocar(hit)" cria a função; "hit" é o que tocou. A linha do FindFirstChild procura um Humanoid no personagem. O "if humano then" só deixa o código rodar se for um jogador. Dentro do if, mostramos uma mensagem e mudamos a cor. A última linha liga o evento à função. Clique em "Play" e ande até a peça para ver ficar verde.

Mão na massa (25 min): Cada aluno cria a plataforma no próprio jogo e testa. Depois adapta para uma porta: em vez de mudar a cor, deixa a peça invisível e atravessável com plataforma.Transparency = 0.5 e plataforma.CanCollide = false. Circule ajudando um a um.

Desafio + compartilhar (10 min): Cada aluno faz um terceiro objeto reagir do seu jeito (mudar de cor, sumir, mover). Dois ou três mostram no projetor e contam o que o if está perguntando.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o evento Touched é como uma campainha: toda vez que alguém aperta, a casa "escuta" e alguém vai atender. A função é a pessoa que atende. O if é o porteiro: ele só deixa entrar se a resposta for "sim, é um jogador". Mostre primeiro, fale devagar o nome de cada parte enquanto aponta na tela e só depois mande digitar. Lembre que Lua diferencia maiúsculas de minúsculas: "Touched" com T maiúsculo é diferente de "touched".

## Erros comuns e como ajudar

O erro mais comum é o Script estar no lugar errado: ele precisa estar dentro da peça que será tocada, então confira no Explorer. Outro é digitar "touched" com letra minúscula ou esquecer o ":Connect"; mostre a grafia exata. Muitos esquecem o "end" que fecha a função ou o if; ensine a contar quantos "end" são necessários. Alguns testam sem clicar em "Play" e acham que não funcionou; lembre de rodar o jogo. Por fim, se a peça reage com qualquer coisa que toca, é porque faltou o if com o Humanoid; reforce que o if é o porteiro do código.`,
  exercicios: [
    {
      titulo: `Inserir o Script no lugar certo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Verifique no Explorer se o Script ficou dentro da peça (e não solto no Workspace). Confirme que o aluno apagou a linha de exemplo print("Hello world!").`,
      atividade: `Crie uma Part chamada "Plataforma" no seu jogo, insira um Script dentro dela e abra o Editor de código. Apague a linha de exemplo que o Roblox cria.`,
      gabarito: `No Explorer, existe uma Part chamada "Plataforma" e, dentro dela, um Script. O Editor está aberto e vazio (sem a linha de exemplo). Esta é a estrutura: a peça contém o Script que vai reagir ao toque.`,
    },
    {
      titulo: `Plataforma que reage ao toque`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe a digitação, atenta à grafia de "Touched" e ":Connect". Peça que cliquem em "Play" e andem até a peça. Se nada acontecer, confira maiúsculas e o "end".`,
      atividade: `Digite o código que faz a plataforma ficar verde quando um jogador a toca, usando o evento Touched, uma função e um if que procura o Humanoid. Teste clicando em "Play".`,
      gabarito: `local plataforma = script.Parent

local function aoTocar(hit)
    local humano = hit.Parent:FindFirstChild("Humanoid")
    if humano then
        plataforma.BrickColor = BrickColor.new("Bright green")
    end
end

plataforma.Touched:Connect(aoTocar)

Ao tocar a peça com o personagem, ela fica verde. O if garante que só um jogador (com Humanoid) dispara a mudança.`,
    },
    {
      titulo: `Porta que abre ao encostar`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre que abrir a porta é deixá-la quase invisível e atravessável, mudando duas propriedades. Reforce que o if continua igual; muda só o que está dentro dele.`,
      atividade: `Adapte o código para uma peça chamada "Porta": quando o jogador tocar, a porta deve ficar semitransparente e atravessável. Use Transparency e CanCollide.`,
      gabarito: `local porta = script.Parent

local function aoTocar(hit)
    local humano = hit.Parent:FindFirstChild("Humanoid")
    if humano then
        porta.Transparency = 0.5
        porta.CanCollide = false
    end
end

porta.Touched:Connect(aoTocar)

Ao tocar, a porta fica semitransparente (Transparency = 0.5) e o jogador atravessa (CanCollide = false). O evento, a função e o if seguem a mesma estrutura da plataforma.`,
    },
    {
      titulo: `Plataforma que dá pontos`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente a ideia de guardar pontos numa variável e somar a cada toque. Ensine a usar o operador de soma e a mostrar o total com print de dois argumentos, sem chaves de interpolação. Cuidado para o toque não somar muitas vezes seguidas; basta funcionar.`,
      atividade: `Faça a plataforma contar pontos: crie uma variável que começa em zero e, a cada toque do jogador, soma 10 e mostra o total na janela Output usando print.`,
      gabarito: `local plataforma = script.Parent
local pontos = 0

local function aoTocar(hit)
    local humano = hit.Parent:FindFirstChild("Humanoid")
    if humano then
        pontos = pontos + 10
        print("Pontos do jogador:", pontos)
    end
end

plataforma.Touched:Connect(aoTocar)

A variável "pontos" começa em 0 e cresce de 10 em 10 a cada toque de um jogador. O print mostra o total na janela Output (usando vírgula entre o texto e o número, sem interpolação).`,
    },
    {
      titulo: `Objeto com dois comportamentos`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Estimule combinar o que aprenderam: um único toque pode mudar mais de uma propriedade. Aceite variações criativas (cor, transparência, tamanho). O essencial é o if presente e ao menos duas reações dentro dele.`,
      atividade: `Crie um objeto que, ao ser tocado por um jogador, faça duas coisas ao mesmo tempo, por exemplo: mudar de cor e diminuir a transparência. Use o if para garantir que só o jogador dispara as reações.`,
      gabarito: `local objeto = script.Parent

local function aoTocar(hit)
    local humano = hit.Parent:FindFirstChild("Humanoid")
    if humano then
        objeto.BrickColor = BrickColor.new("Bright blue")
        objeto.Transparency = 0.3
    end
end

objeto.Touched:Connect(aoTocar)

Ao tocar, o objeto faz duas coisas dentro do mesmo if: troca para azul e fica um pouco transparente. Variações com tamanho, posição ou outras cores também valem, desde que haja o if com o Humanoid e duas reações.`,
    },
  ],
};
