import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Dando Vida ao Jogo com Lua",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Revisar a sintaxe essencial de Lua no Roblox Studio e conectar o primeiro script a um objeto do cenário usando o evento Touched para gerar uma reação no jogo.`,
  descricao: `Nesta aula a turma cruza uma linha importante: o cenário do jogo deixa de ser apenas decoração e começa a reagir ao jogador. Até aqui os alunos montaram o mundo no Roblox Studio com peças, modelos e assets vindos do Maya, mas tudo ficava parado. A partir de hoje, escrever código em Lua é o que vai dar vida ao jogo. A linguagem Lua é o "idioma" que o Roblox entende, e dominá-la é o que separa um cenário bonito de um jogo de verdade.

Para isso, a aula revisa os três pilares da sintaxe de Lua que os alunos já viram nos anos anteriores: variáveis (caixinhas que guardam informação), funções (blocos de instruções com nome, prontos para serem chamados) e eventos (avisos que o jogo dispara quando algo acontece). Esses três conceitos juntos formam a base de quase tudo que um programador de jogos faz. Sem eles, não existe pontuação, não existe movimento, não existe nenhuma regra.

O grande conceito novo do dia é a mecânica de jogo: a ideia de que toda interação interessante segue o padrão "quando ACONTECE algo, então FAÇA alguma coisa". O exemplo mais simples e poderoso desse padrão é o evento Touched, que dispara no exato momento em que um personagem encosta em uma peça. Conectar uma função a esse evento é a primeira mecânica de verdade que o aluno vai construir nesta trilha.

No fim da aula, cada aluno terá um objeto no cenário que reage ao toque do jogador, por exemplo mudando de cor. É uma vitória pequena no tamanho, mas enorme no significado: é a primeira vez que o código dele faz o mundo do jogo responder. Essa conquista abre o caminho para as próximas aulas do mês, em que o jogo ganha movimento, pontuação, regras e, por fim, é publicado para o mundo.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e logado (um por aluno), com o editor de scripts em Lua disponível`,
    `Projetor ou TV grande para o professor mostrar cada clique e cada linha de código na tela`,
    `Conexão com a internet para abrir os projetos no Roblox Studio e salvar na nuvem`,
    `Arquivo de exemplo: um lugar (place) do Roblox já com um piso e uma peça (Part) chamada "Plataforma" pronta para receber o script`,
    `Folha impressa com o código modelo do evento Touched, para os alunos consultarem enquanto digitam`,
    `Ficha de revisão rápida com os três conceitos do dia: variável, função e evento, cada um com um exemplo curto`,
    `Cartaz na parede com a frase-mecânica "quando ACONTECE algo, então FAÇA alguma coisa", para ancorar a ideia central`,
  ],
  conceitosChave: [
    `Lua — a linguagem de programação que o Roblox entende; é com ela que escrevemos as instruções que dão vida ao jogo.`,
    `Variável — uma caixinha com nome que guarda uma informação, como um número ou um objeto, para usarmos depois no código.`,
    `Função — um bloco de instruções com nome; quando a função é chamada, o jogo executa tudo o que está dentro dela.`,
    `Evento — um aviso que o jogo dispara quando algo acontece, por exemplo quando o jogador encosta em uma peça.`,
    `Touched — o evento de uma peça que dispara no momento exato em que algo encosta nela; é a base da primeira mecânica.`,
    `Mecânica de jogo — uma regra de interação no formato "quando ACONTECE algo, então FAÇA alguma coisa".`,
    `Script — o arquivo dentro de um objeto onde escrevemos o código em Lua que faz aquele objeto se comportar.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio, todo comportamento vem de um Script, que é um arquivo de código em Lua que mora dentro de um objeto. Para esta aula você precisa saber três coisas. Primeiro, como inserir um Script: no painel Explorer, passe o mouse sobre uma peça (Part), clique no sinal de mais e escolha "Script". Segundo, a sintaxe básica de Lua: uma variável se cria com "local nome = valor"; uma função se cria com "local function nome() ... end". Terceiro, o evento Touched: toda Part tem um evento chamado Touched, e ligamos uma função a ele com "Conexao" usando a sintaxe parte.Touched:Connect(funcao). Quando algo encosta na peça, a função roda. Faça o caminho inteiro sozinho uma vez antes da aula. O código que vamos usar muda a cor da peça quando o jogador encosta. Tenha o arquivo de exemplo aberto, com uma Part chamada Plataforma já no cenário.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): aponte para o cartaz "quando ACONTECE algo, então FAÇA alguma coisa". Pergunte: "o que faz um jogo ser um jogo, e não um desenho parado?". Conduza até a ideia de reação. Reveja os três conceitos pela ficha: variável (caixinha), função (bloco com nome) e evento (aviso do jogo). Peça exemplos da vida real de cada um.

Conteúdo novo guiado (15 min): no projetor, abra o exemplo. No Explorer, selecione a Part Plataforma, clique no mais e adicione um Script. Apague o "print" que vem pronto e digite, linha a linha, explicando cada parte:

local plataforma = script.Parent
local function aoTocar(outraParte)
plataforma.BrickColor = BrickColor.new("Bright green")
end
plataforma.Touched:Connect(aoTocar)

Explique: a linha 1 cria a variável plataforma guardando a peça onde o script está (script.Parent). A linha 2 começa a função aoTocar, que recebe outraParte (o que encostou). A linha 3 muda a cor da peça para verde. A linha 4 fecha a função com end. A linha 5 conecta o evento Touched à função: quando algo tocar, aoTocar roda. Clique em "Play" e ande com o personagem até a peça para ver a cor mudar.

Mão na massa (25 min): cada aluno repete no seu computador. Todos inserem um Script na peça Plataforma, digitam o código da folha modelo, testam com Play e veem a cor mudar. Circule pela sala conferindo a indentação e o "end". Quem terminar pode trocar "Bright green" por outra cor, como "Really red" ou "Bright blue".

Desafio e compartilhar (10 min): desafie cada aluno a fazer a peça mudar para uma cor diferente da do colega ao lado, só alterando o nome da cor dentro das aspas. Feche com dois ou três alunos mostrando no projetor o jogo rodando e explicando, com as próprias palavras, o que o evento Touched faz.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma campainha. O evento Touched é como o botão da campainha na porta: quando alguém aperta (encosta), a campainha toca (a função roda). A função é a melodia que toca; o evento é o aperto do botão. A variável é só uma etiqueta: em vez de dizer "aquela peça verde grande ali", damos um apelido, plataforma, e usamos o apelido. Sempre que aparecer uma palavra em inglês como Touched ou Connect, diga o significado em português logo em seguida: Touched é "tocado", Connect é "conectar". Repita a frase-mecânica em voz alta: "quando ACONTECE algo, então FAÇA alguma coisa".

## Erros comuns e como ajudar

O erro mais comum é esquecer o "end" que fecha a função; o Studio sublinha em vermelho e o código não roda. Mostre que toda function precisa do seu end. Outro tropeço é digitar Connected ou conect em vez de Connect, ou trocar maiúsculas e minúsculas: Lua diferencia Touched de touched. Reforce que precisa ser igualzinho. Há quem coloque o Script no objeto errado; confirme que ele está dentro da peça Plataforma no Explorer. Alguns esquecem os dois pontos em Touched:Connect ou os parênteses; aponte devagar. Por fim, se a cor não muda, peça que confiram se o nome da cor está escrito certo entre aspas, como "Bright green", e se clicaram em Play e andaram até encostar na peça.`,
  exercicios: [
    {
      titulo: `Caça aos conceitos: variável, função e evento`,
      tipo: `revisão guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Use a ficha de revisão e o cartaz da frase-mecânica. Peça exemplos do dia a dia para cada conceito antes de partir para o código. Corrija com gentileza quem trocar os nomes.`,
      atividade: `Sem mexer no computador, explique com suas palavras o que é uma variável, o que é uma função e o que é um evento. Dê um exemplo da vida real para cada um (por exemplo: uma campainha é um evento).`,
      gabarito: `Variável é uma caixinha com nome que guarda uma informação (exemplo: a idade anotada num papel). Função é um bloco de instruções com nome que executa tudo quando é chamado (exemplo: a receita de um bolo). Evento é um aviso que dispara quando algo acontece (exemplo: a campainha tocando quando alguém aperta o botão). O aluno usa os três nomes corretamente, sem trocá-los.`,
    },
    {
      titulo: `Inserindo o primeiro Script`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o caminho no Explorer: selecionar a peça Plataforma, clicar no sinal de mais e escolher Script. Confirme que cada aluno colocou o Script dentro da peça certa, e não no Workspace solto.`,
      atividade: `No Roblox Studio, encontre a peça chamada Plataforma no painel Explorer. Passe o mouse sobre ela, clique no sinal de mais e adicione um Script dentro dela. Depois apague a linha de print que vem pronta.`,
      gabarito: `No Explorer, aparece um objeto Script aninhado dentro da peça Plataforma (e não solto no Workspace). O editor de código abre mostrando o Script vazio, sem a linha de print original.`,
    },
    {
      titulo: `Digitando o código do toque`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete a folha modelo e digite junto, linha a linha. Reforce a indentação, o end que fecha a função e os dois pontos em Touched:Connect. Circule conferindo maiúsculas e minúsculas.`,
      atividade: `Digite no Script o código que muda a cor da peça quando o jogador encosta nela. Use a folha modelo como guia. Em seguida, clique em Play e ande com o personagem até a peça para ver a cor mudar.`,
      gabarito: `O código correto é:

local plataforma = script.Parent
local function aoTocar(outraParte)
plataforma.BrickColor = BrickColor.new("Bright green")
end
plataforma.Touched:Connect(aoTocar)

Ao clicar em Play e encostar na peça, ela muda para a cor verde. Não há sublinhado vermelho de erro no editor.`,
    },
    {
      titulo: `Trocando a cor da reação`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Tenha à mão alguns nomes de cores válidos do Roblox para sugerir. Reforce que só se muda o texto dentro das aspas e que o nome da cor precisa estar escrito exatamente certo.`,
      atividade: `No seu código, troque a cor que aparece dentro das aspas por outra diferente da do colega ao lado. Teste com Play. Tente pelo menos duas cores novas, como "Really red" ou "Bright blue".`,
      gabarito: `O aluno altera apenas o texto dentro das aspas na linha do BrickColor. Por exemplo:

plataforma.BrickColor = BrickColor.new("Really red")

Ao testar com Play e encostar, a peça muda para a nova cor escolhida, diferente da do colega. O nome da cor está escrito corretamente entre aspas.`,
    },
    {
      titulo: `Mensagem secreta no console`,
      tipo: `desafio avançado`,
      tempo: `9 minutos`,
      guiaProfessor: `Mostre onde fica a janela Output (saída) no Studio, em View e depois Output. Explique que print escreve uma mensagem para o programador ver, sem aparecer no jogo. Combine print com a mudança de cor já existente.`,
      atividade: `Faça a peça, além de mudar de cor, também mostrar uma mensagem na janela Output quando for tocada. Use a função print dentro da função aoTocar. Abra a janela Output em View e depois Output para ver a mensagem aparecer ao encostar.`,
      gabarito: `O aluno adiciona uma linha com print dentro da função, mantendo a mudança de cor. Solução possível:

local plataforma = script.Parent
local function aoTocar(outraParte)
plataforma.BrickColor = BrickColor.new("Bright green")
print("A plataforma foi tocada!")
end
plataforma.Touched:Connect(aoTocar)

Ao encostar na peça durante o Play, a cor muda e a mensagem "A plataforma foi tocada!" aparece na janela Output, comprovando que o evento disparou.`,
    },
  ],
};
