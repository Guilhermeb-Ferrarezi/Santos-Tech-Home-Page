import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Botões que Funcionam de Verdade",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Programar em Lua o evento MouseButton1Click para que os botões do menu abram, troquem e fechem telas usando a propriedade Visible, conectando vários botões a ações reais dentro do jogo no Roblox Studio.`,
  descricao: `Nas aulas anteriores os alunos trouxeram a interface do Canva para dentro do Roblox e a montaram na tela com frames, botões e textos. Até agora, porém, essa interface é só enfeite: o aluno clica no botão "Jogar" e nada acontece. Nesta aula o menu ganha vida. O objetivo é simples e poderoso ao mesmo tempo: fazer cada botão responder ao clique do jogador e executar uma ação de verdade, como abrir a tela de opções, voltar ao menu principal ou iniciar o jogo.

O coração da aula é um único evento da linguagem Lua: o MouseButton1Click. Esse nome assusta no começo, mas a ideia é direta. Todo botão no Roblox sabe avisar quando alguém clica nele com o botão esquerdo do mouse. O que o aluno faz é "escutar" esse aviso e dizer ao Roblox o que fazer quando ele chegar. Para isso, usamos a função connect (ou Connect), que liga o clique a um trecho de código. É como ligar um interruptor a uma lâmpada: aperto aqui, acende ali.

A ação mais usada nesta aula é mostrar e esconder telas com a propriedade Visible. Todo frame tem essa propriedade: quando Visible é true, a tela aparece; quando é false, a tela some. Trocar de tela, então, vira uma brincadeira de ligar uma e desligar a outra. O botão "Opções" esconde o menu e mostra o painel de opções; o botão "Voltar" faz o caminho inverso. Com isso, o aluno descobre que um menu inteiro de jogo é, no fundo, uma coleção de frames aparecendo e sumindo na hora certa.

Esta é uma aula intensa de prática em Lua, mas dentro de um escopo pequeno e seguro. Não vamos criar o jogo em si, e sim a navegação entre as telas. Ao final, cada aluno terá um menu de mentira que se comporta como um menu de verdade: clico, a tela troca; clico de novo, ela volta. É a primeira vez que o código do aluno conversa diretamente com a interface, e a sensação de ver o próprio botão obedecer costuma ser um marco da turma.`,
  materiais: [
    `Computadores com Roblox Studio instalado e conta Roblox conectada, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada clique e cada linha de código`,
    `Arquivo de exemplo .rbxl com um menu já montado (um ScreenGui com os frames MenuPrincipal e Opcoes e botões nomeados) para quem não terminou as aulas anteriores`,
    `Folha impressa de apoio com o modelo de script do MouseButton1Click e os nomes corretos dos botões`,
    `Caderno ou bloco de notas para o aluno anotar os nomes exatos dos botões e frames do seu projeto`,
    `Acesso à internet estável para o Roblox Studio salvar o projeto na nuvem`,
  ],
  conceitosChave: [
    `Evento — um aviso que um objeto envia quando algo acontece; no botão, o aviso de que o jogador clicou.`,
    `MouseButton1Click — o evento do botão que dispara quando o jogador clica com o botão esquerdo do mouse.`,
    `Connect (conectar) — a função que liga um evento a um trecho de código, dizendo o que rodar quando o evento acontecer.`,
    `Propriedade Visible — a propriedade do frame que vale true (aparece) ou false (some), usada para mostrar e esconder telas.`,
    `LocalScript — o tipo de script que roda no computador do jogador e é o lugar certo para programar cliques de interface.`,
    `Função (function) — um bloco de código com um nome que guarda as instruções a serem executadas quando chamado.`,
    `Caminho do objeto — a sequência de nomes (como script.Parent.Opcoes) que indica onde um objeto está dentro da árvore do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para dar esta aula, mas precisa ter feito o caminho uma vez sozinho. Abra o Roblox Studio, carregue o projeto do menu e confirme que existe um ScreenGui em StarterGui com pelo menos dois frames (por exemplo MenuPrincipal e Opcoes) e botões do tipo TextButton ou ImageButton dentro deles. O segredo da aula é o LocalScript: ele é o único script que enxerga e controla a interface do jogador. Para criar um, passe o mouse sobre o botão na janela Explorer, clique no sinal de mais e escolha LocalScript. Decore este modelo, pois é tudo que a aula precisa:

local botao = script.Parent
local opcoes = script.Parent.Parent.Opcoes
botao.MouseButton1Click:Connect(function()
opcoes.Visible = true
end)

Faça o teste apertando o botão Play (atalho F5) na aba Home. Clique no botão dentro do jogo e veja a tela aparecer. Aperte Shift e F5 para parar. Se funcionou para você, vai funcionar para a turma.

## Passo a passo da aula

Aquecimento (10 min): peça que cada aluno abra o próprio projeto e aperte Play (F5) para ver o menu na tela. Pergunte: "o botão Jogar faz alguma coisa?". A resposta é não, e é exatamente isso que vamos resolver hoje. Quem não terminou pega o arquivo de exemplo.

Conteúdo novo guiado (15 min): no projetor, abra o Explorer (aba View, botão Explorer). Mostre a árvore do ScreenGui, os frames e os botões. Clique num botão, crie dentro dele um LocalScript pelo sinal de mais. Digite junto com a turma, linha a linha, o modelo do MouseButton1Click conectando o clique a opcoes.Visible igual a true. Explique cada parte enquanto digita: script.Parent é o próprio botão, Connect liga o clique à função, e Visible liga ou desliga a tela. Aperte Play, clique e mostre a tela aparecer.

Mão na massa (25 min): cada aluno escreve o próprio script. Primeiro, faz o botão Opções abrir a tela de opções. Depois, dentro da tela de opções, faz o botão Voltar esconder as opções (Visible igual a false) e mostrar o menu de novo. Circule pela sala conferindo os nomes: o caminho até o frame precisa bater exatamente com o nome no Explorer. Quem avançar conecta um terceiro botão.

Desafio e compartilhar (10 min): peça que cada aluno demonstre ao colega do lado o menu trocando de tela ao clicar. Pergunte quem conseguiu conectar três botões diferentes a três ações.

## Como explicar de forma clara

Use a ideia do interruptor de luz: o MouseButton1Click é o ato de apertar o interruptor, e o código dentro do Connect é a lâmpada que acende. Para o Visible, fale em "ligar e desligar a tela": true acende a tela, false apaga. Compare a troca de telas a um jogo de esconde-esconde entre dois frames: quando um aparece, o outro se esconde. Reforce que o nome no código tem que ser idêntico ao nome no Explorer, igual ao nome de uma pessoa: errou uma letra, ela não atende.

## Erros comuns e como ajudar

O erro mais comum é digitar o script num Script normal em vez de LocalScript, e nada acontece; mostre como apagar e criar o LocalScript certo. Outro é errar o caminho do objeto, escrevendo Opcoes com acento ou letra trocada quando no Explorer está sem acento; ensine a copiar o nome exato olhando o Explorer. Muitos esquecem o end no fim da função ou os dois pontos antes de Connect; aponte que toda função aberta precisa de um end e que MouseButton1Click usa dois pontos. Há quem teste sem apertar Play e ache que está quebrado; lembre que a interface só responde no modo de jogo (F5). Por fim, alguns deixam o frame de opções já com Visible marcado como true no editor, e ele aparece por cima de tudo; oriente a deixar a tela secundária com Visible desmarcado antes de testar.`,
  exercicios: [
    {
      titulo: `Meu primeiro clique`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confira se o aluno criou um LocalScript dentro do botão, e não um Script comum. Verifique se ele apertou Play (F5) para testar, pois a interface só responde no modo de jogo.`,
      atividade: `Crie um LocalScript dentro do botão "Opções" e escreva o código que, ao clicar, deixa o frame de opções com Visible igual a true. Aperte Play e teste se a tela de opções aparece ao clicar.`,
      gabarito: `O aluno tem um LocalScript dentro do botão "Opções" com o evento MouseButton1Click conectado a uma função que define opcoes.Visible como true. Ao apertar Play e clicar no botão, a tela de opções aparece corretamente na frente do menu.`,
    },
    {
      titulo: `Ligar e desligar a tela`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a conversa pedindo que os alunos expliquem com as próprias palavras. Mostre no projetor um frame com Visible marcado e desmarcado para que todos vejam a tela aparecer e sumir.`,
      atividade: `Em roda, respondam juntos: o que a propriedade Visible faz quando vale true e quando vale false? Como usamos esses dois valores para trocar de uma tela para outra no menu?`,
      gabarito: `Quando Visible é true, o frame aparece na tela; quando é false, o frame some. Para trocar de tela, ligamos um frame (Visible igual a true) e desligamos o outro ao mesmo tempo (Visible igual a false), fazendo um aparecer enquanto o outro se esconde.`,
    },
    {
      titulo: `Vai e volta entre telas`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe o caminho do objeto de cada aluno no Explorer, pois é onde mais se erra. Confira se o botão Voltar esconde as opções e mostra o menu na mesma função, e teste com Play junto do aluno.`,
      atividade: `Faça o botão "Voltar" da tela de opções funcionar: ao clicar, ele deve esconder as opções (Visible igual a false) e mostrar de novo o menu principal (Visible igual a true). Teste indo do menu para as opções e voltando.`,
      gabarito: `O aluno tem um LocalScript no botão "Voltar" com MouseButton1Click conectado a uma função que define opcoes.Visible como false e MenuPrincipal.Visible como true. No teste com Play, é possível ir do menu para as opções e retornar ao menu clicando em Voltar.`,
    },
    {
      titulo: `Conferindo o nome certo`,
      tipo: `Em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de computador para revisar o código do colega. O foco é caçar erros de caminho: nomes trocados, acentos a mais ou letras maiúsculas e minúsculas diferentes do Explorer.`,
      atividade: `Em dupla, revisem o script um do outro. Comparem cada nome escrito no código com o nome que aparece no Explorer e marquem qualquer diferença. Corrijam juntos e testem com Play para ver se o botão volta a funcionar.`,
      gabarito: `A dupla encontra e corrige diferenças entre os nomes do código e os nomes do Explorer, como acentos indevidos ou letras maiúsculas trocadas. Após a correção, o botão volta a funcionar no teste com Play, confirmando que o caminho do objeto ficou idêntico ao Explorer.`,
    },
    {
      titulo: `Três botões, três ações`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio para quem terminou rápido. Confira se cada um dos três botões tem o seu próprio LocalScript com MouseButton1Click e se cada ação leva a uma tela diferente. Oriente a deixar as telas secundárias com Visible desmarcado antes de testar.`,
      atividade: `Conecte três botões do menu a três ações diferentes: por exemplo, "Jogar" esconde o menu e mostra uma tela de jogo, "Opções" mostra as opções e "Créditos" mostra a tela de créditos. Garanta que cada botão troque para a tela certa.`,
      gabarito: `O aluno entrega três botões, cada um com seu LocalScript e evento MouseButton1Click, conectados a três ações distintas que mostram telas diferentes ajustando a propriedade Visible. No teste com Play, cada botão troca para a tela correta sem que duas telas apareçam ao mesmo tempo.`,
    },
  ],
};
