import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Primeiros Passos em Lua",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Dar os primeiros passos em programação Lua dentro do Roblox Studio, criando um Script que usa variáveis, funções e print, e entendendo como um botão pode escutar um clique.`,
  descricao: `Nas aulas anteriores deste mês, os alunos montaram o cenário, exportaram a interface do Canva e importaram os botões e telas no Roblox Studio. Agora a interface está lá, bonita e organizada, mas ainda é só desenho: nada acontece quando o jogador clica. Nesta aula damos o primeiro passo para mudar isso, escrevendo nossas primeiras linhas de código na linguagem Lua, que é o idioma que o Roblox entende.

A linguagem Lua é leve e amigável para iniciantes. Nesta aula o aluno descobre o que é um Script (o lugar onde escrevemos código), aprende a guardar informações em variáveis, a criar funções (pequenas tarefas com nome) e a usar o comando print para escrever mensagens na janela Output. O print é a melhor ferramenta de um programador iniciante, porque mostra na tela se o código está funcionando e ajuda a encontrar erros.

Depois de testar o print, apresentamos um conceito muito importante dos jogos: os eventos. Um evento é algo que acontece, como um clique do mouse. O aluno descobre que um TextButton ou ImageButton tem um evento chamado MouseButton1Click, capaz de avisar o código toda vez que alguém clica. Conectamos esse evento a uma função e vemos uma mensagem aparecer no Output a cada clique.

Esta é uma aula de preparação. Não vamos abrir telas nem trocar de menu ainda; isso fica para a próxima aula, "Botões que Funcionam de Verdade". Hoje o objetivo é o aluno se sentir confortável escrevendo código, entender a lógica de variável, função e evento, e provar que o botão da interface consegue conversar com o Lua. É o terreno preparado para dar vida aos botões.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado, um por aluno, com a conta Roblox de cada um já logada`,
    `Projeto do jogo de cada aluno com a interface (ScreenGui e botões) já importada nas aulas anteriores`,
    `Projetor ou TV para o professor mostrar a janela Output e a escrita do código ao vivo`,
    `Arquivo de exemplo "exemplo-script-lua.txt" com o código pronto da aula, para colar caso algum aluno trave`,
    `Folha impressa "Cola do Lua" com print, variável, function e MouseButton1Click escritos como lembrete`,
    `Mouse comum (não só touchpad) para facilitar os cliques de teste no jogo`,
  ],
  conceitosChave: [
    `Script — o objeto do Roblox onde escrevemos o código em Lua; é a folha de papel onde o programador dá ordens ao jogo.`,
    `Lua — a linguagem de programação usada pelo Roblox; o idioma simples que o jogo entende.`,
    `Variável — uma caixinha com nome que guarda uma informação, como um número ou um texto, para usar depois.`,
    `Função — um bloco de código com nome que faz uma tarefa só quando é chamado; como uma receita que só executa quando você pede.`,
    `print — o comando que escreve uma mensagem na janela Output; serve para testar e descobrir se o código funciona.`,
    `Output — a janela do Roblox Studio onde aparecem as mensagens do print e os avisos de erro.`,
    `Evento — algo que acontece no jogo, como um clique; o evento MouseButton1Click de um botão avisa o código toda vez que o jogador clica.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Lua é a linguagem mais fácil que existe para começar, e hoje usamos apenas três ideias: variável, função e print. Antes da aula, abra o Roblox Studio, abra um projeto qualquer e teste você mesmo o roteiro abaixo uma vez. Saber onde fica a janela Output e como inserir um Script já é metade do caminho. Tenha o arquivo de exemplo aberto para colar caso precise.

Três janelas importam hoje. O Explorer (à direita) mostra todos os objetos do jogo em forma de lista. O Output mostra as mensagens. Se o Output não aparecer, vá no menu superior em View e clique em Output. Faça o mesmo com o Explorer, em View, Explorer.

## Passo a passo da aula

Aquecimento (10 min): retome a aula passada. Pergunte: "O que aconteceu quando você clicou no botão importado?" A resposta é "nada". Explique que hoje vamos ensinar o jogo a reagir, escrevendo código. Mostre no projetor a janela Output vazia e diga que é nela que a mágica vai aparecer.

Conteúdo novo guiado (15 min): no Explorer, peça para clicarem com o botão direito em ServerScriptService, escolher Insert Object e depois Script. Um Script novo abre com a linha "print('Hello world!')". Mande apertar o botão Play (triângulo no topo) e olhar o Output: a frase apareceu. Comemore. Agora apague tudo e digite junto, no projetor, devagar:

local nome = "Santos Tech"
print(nome)

Explique que "local nome" cria uma variável (a caixinha) e que print mostra o que tem dentro dela. Em seguida, mostre uma função:

local function saudacao()
    print("Bem-vindo ao jogo!")
end

saudacao()

Explique que a função é uma receita: só executa na linha "saudacao()", quando é chamada. Aperte Play e veja a mensagem.

Mão na massa (25 min): cada aluno cria seu Script em ServerScriptService, escreve uma variável com o próprio nome e usa print para mostrá-la. Depois cria uma função que imprime uma frase do jogo dele. Circule de mesa em mesa. Quem terminar avança para o desafio: conectar o botão. Peça para localizarem o TextButton da interface no Explorer (dentro do ScreenGui). Em um LocalScript dentro do botão, oriente a digitar:

local botao = script.Parent

botao.MouseButton1Click:Connect(function()
    print("Botao clicado!")
end)

Aperte Play, clique no botão dentro do jogo e veja "Botao clicado!" aparecer no Output a cada clique. Esse é o momento alto da aula.

Desafio e compartilhar (10 min): peça para mudarem a mensagem do clique para algo do jogo deles, como "Iniciar partida". Cada aluno mostra o Output ao colega do lado, clicando e vendo a mensagem surgir. Encerre dizendo que na próxima aula o clique vai fazer algo de verdade na tela.

## Como explicar de forma clara

Use comparações do dia a dia. Variável é uma caixinha com etiqueta. Função é uma receita guardada que só vira bolo quando alguém manda fazer. O print é como mandar um bilhete para você mesmo, para conferir se deu certo. Evento é uma campainha: o clique toca a campainha e o código corre para atender. Evite a palavra "programação" como algo difícil; chame de "dar ordens ao jogo". Digite sempre devagar e em voz alta, lendo cada símbolo, inclusive os parênteses e as aspas.

## Erros comuns e como ajudar

O erro mais comum é esquecer aspas em textos, ou usar aspas diferentes no começo e no fim. Mostre que toda palavra escrita vira texto e precisa de aspas dos dois lados. O segundo erro é esquecer o "end" que fecha a função: o Output mostra um aviso vermelho; ensine que toda função aberta precisa de um end. O terceiro é colocar o Script no lugar errado: para o clique, ele precisa ser um LocalScript dentro do botão. Por fim, muitos esquecem de apertar Play para testar; lembre que código só roda quando o jogo está rodando.`,
  exercicios: [
    {
      titulo: `Meu primeiro print`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno inseriu o Script em ServerScriptService e se a janela Output está aberta. O objetivo é só ver a mensagem aparecer e ganhar confiança. Elogie quem conseguir, por mais simples que pareça.`,
      atividade: `Crie um Script novo em ServerScriptService, apague o conteúdo e escreva um print com uma mensagem sua, como "Oi, sou o programador!". Aperte Play e confira a mensagem na janela Output.`,
      gabarito: `Código esperado: print("Oi, sou o programador!"). Ao apertar Play, a frase aparece na janela Output em texto cinza. Se aparecer aviso vermelho, geralmente faltou uma aspa.`,
    },
    {
      titulo: `A caixinha com meu nome`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce a ideia de variável como caixinha com etiqueta. Cheque se usaram a palavra local antes do nome da variável e se o print mostra a variável, não o texto direto. Corrija quem esquecer as aspas no texto guardado.`,
      atividade: `Crie uma variável chamada meuNome com o seu nome dentro e use print para mostrá-la na janela Output. O nome guardado deve aparecer ao apertar Play.`,
      gabarito: `Código esperado: local meuNome = "Ana" e depois print(meuNome). No Output aparece o nome guardado, por exemplo "Ana". Note que print(meuNome) mostra o conteúdo da caixinha, sem aspas, e não a palavra meuNome.`,
    },
    {
      titulo: `Minha receita (função)`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Aqui aparece o "end" pela primeira vez de forma independente. Acompanhe quem esquece de fechar a função ou quem esquece de chamá-la na última linha. Lembre que sem a chamada nada aparece no Output, mesmo o código estando certo.`,
      atividade: `Crie uma função chamada iniciarJogo que imprime a frase "O jogo vai comecar!". Depois chame a função para que a frase apareça na janela Output.`,
      gabarito: `Código esperado: local function iniciarJogo() print("O jogo vai comecar!") end e, em uma linha separada, iniciarJogo(). A frase aparece no Output só por causa da última linha, que executa a receita.`,
    },
    {
      titulo: `O botão que avisa`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Garanta que a dupla coloque um LocalScript dentro do TextButton, não um Script comum, e dentro do botão, não solto. Confirme que usam script.Parent e o evento MouseButton1Click. Peça para clicarem o botão dentro do jogo, não no Studio.`,
      atividade: `Em dupla, localizem o TextButton da interface no Explorer. Coloquem um LocalScript dentro dele e escrevam um código que imprime "Botao clicado!" toda vez que o botão for clicado. Apertem Play e cliquem para testar.`,
      gabarito: `Código esperado: local botao = script.Parent e depois botao.MouseButton1Click:Connect(function() print("Botao clicado!") end). A mensagem aparece no Output uma vez a cada clique. Se nada aparece, conferir se é um LocalScript e se está dentro do botão.`,
    },
    {
      titulo: `O som do meu jogo no clique`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Exercício de fechamento que conecta com o tema do mês. Não precisa de tela nova ainda; basta o print personalizado. Estimule cada aluno a usar uma frase do próprio jogo. Na roda final, peça que mostrem o Output ao grupo, clicando ao vivo.`,
      atividade: `Personalize o código do botão para imprimir uma mensagem do seu jogo a cada clique, como "Iniciar partida" ou "Abrir loja". Teste clicando algumas vezes e mostre a janela Output funcionando para a turma.`,
      gabarito: `Código esperado: dentro do Connect, trocar a mensagem do print pela frase do jogo do aluno, por exemplo print("Iniciar partida"). A cada clique a frase escolhida aparece no Output. O importante é o evento do botão continuar funcionando com a mensagem personalizada.`,
    },
  ],
};
