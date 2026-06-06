import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Caçando Bugs: Testar para Melhorar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Testar o jogo de forma organizada usando o modo Play e a janela Output do Roblox Studio para encontrar erros nos scripts, identificar bugs nas mecânicas e na pontuação, e registrar tudo o que precisa ser corrigido.`,
  descricao: `Até agora o aluno construiu muita coisa: o jogador se move, o placar conta pontos, há itens e regras no jogo. Mas todo jogo de verdade tem bugs escondidos, e a única forma de achá-los é testar com método. Esta aula muda a postura do aluno: ele deixa de ser só o criador e passa a ser também o testador, aquele detetive que procura defeitos de propósito para poder consertá-los antes do lançamento.

A ferramenta principal de teste no Roblox Studio é o botão Play. Ele liga o jogo dentro do próprio Studio para o aluno jogar como um jogador de verdade. Enquanto ele joga, uma segunda ferramenta trabalha nos bastidores: a janela Output. É nela que o Roblox escreve mensagens, e o mais importante são os erros em vermelho. Cada linha vermelha aponta exatamente qual script quebrou e em qual linha, como uma pista deixada no local do crime. Aprender a ler o Output é uma das habilidades mais valiosas de qualquer programador.

Testar bem não é apertar Play e sair correndo pelo mapa. É testar de forma organizada: uma mecânica de cada vez, comparando o que o aluno espera que aconteça com o que realmente acontece. Se ele toca num item e o ponto não soma, isso é um bug. Se o jogador atravessa a parede, isso é um bug. Anotar cada um numa lista de bugs transforma a bagunça em um plano de trabalho claro para as próximas aulas de polimento.

Esta aula faz parte do mês de programar e publicar, e prepara o terreno para o equilíbrio e o lançamento. Encontrar bugs agora, na semana 3, é muito melhor do que descobri-los depois que os amigos jogarem. O aluno termina a aula com algo concreto e profissional: uma lista de bugs encontrada por ele mesmo, com a pista do Output ao lado de cada problema.`,
  materiais: [
    `Computadores (até 10) com o Roblox Studio instalado e o projeto do jogo de cada aluno aberto, salvo no estado da aula 4`,
    `Projetor ou TV ligado no computador do professor para demonstrar o botão Play e a janela Output ao vivo`,
    `Um lugar para registrar os bugs: caderno, folha impressa de "lista de bugs" ou um documento simples no computador (uma tabela com colunas Bug, Onde acontece, Mensagem do Output, Prioridade)`,
    `Um script de exemplo do professor com um erro proposital (um nome de variável escrito errado) para demonstrar como o erro aparece em vermelho no Output`,
    `Editor de código do Studio (a aba Script) acessível, para o aluno abrir o script indicado pelo erro`,
    `Navegador aberto na conta Roblox do aluno, caso seja preciso reabrir ou recarregar o projeto`,
    `Cronômetro ou relógio visível para ajudar a turma a seguir o ritmo dos blocos da aula`,
  ],
  conceitosChave: [
    `Bug — qualquer comportamento do jogo diferente do que você esperava; pode ser um ponto que não soma ou uma parede que não bloqueia.`,
    `Modo Play — botão do Roblox Studio que liga o jogo ali dentro para você jogar e testar como um jogador de verdade.`,
    `Output (Saída) — janela do Studio onde o Roblox escreve mensagens; os erros aparecem em vermelho com o nome do script e a linha.`,
    `Erro em vermelho — linha do Output que mostra um problema que parou um script; é a pista que diz onde caçar o bug.`,
    `print — comando da linguagem Lua que escreve um texto no Output; serve para o programador espiar se uma parte do código rodou.`,
    `Lista de bugs — registro organizado de cada problema encontrado, com onde acontece e a mensagem do Output, para corrigir depois.`,
    `Reproduzir o bug — conseguir fazer o erro acontecer de novo de propósito; um bug que se repete é um bug que dá para consertar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Lua para conduzir esta aula. Precisa conhecer dois lugares do Roblox Studio: o botão Play e a janela Output. O Play fica no topo, na aba "Test" (Testar), com um triângulo de "play". Ao clicar, o Studio entra no jogo e você controla o personagem; para sair, clique no botão Stop (o quadrado vermelho). A janela Output você abre pelo menu "View" (Exibir) e depois "Output". Ela é a caixa onde o Roblox conversa com você: mensagens normais ficam em branco, avisos em amarelo e erros em vermelho. O erro em vermelho é ouro: ele traz o nome do script e o número da linha onde algo deu errado.

Antes da aula, deixe pronto um script de exemplo com um erro de propósito, por exemplo escrever "scoer" no lugar de "score". Assim, quando você apertar Play, o Output mostra o erro em vermelho e a turma vê a pista na prática. Tenha também a "lista de bugs" pronta, em papel ou num documento, com as colunas: Bug, Onde acontece, Mensagem do Output e Prioridade.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Pergunte "todo jogo famoso já teve bug?". Conte que sim, e que testar é trabalho de profissional. No projetor, abra um projeto e clique em Play, ande com o personagem e clique em Stop. Diga: "hoje a gente vira detetive de bugs".

2. Conteúdo novo guiado (15 min): Abra a janela Output pelo menu View, Output. Mostre o script de exemplo com o erro proposital. Clique em Play: aponte a linha vermelha no Output e leia em voz alta o nome do script e a linha. Ensine também a usar o print para investigar. Mostre este código exato, linha a linha:

local pontos = 0
pontos = pontos + 1
print("Os pontos agora sao", pontos)

Explique: a linha 1 cria a variável pontos com valor zero; a linha 2 soma 1; a linha 3 escreve no Output a frase e o número, usando vírgula para juntar texto e valor (sem chaves de interpolação). Assim o aluno espia se a soma funcionou.

3. Mão na massa (25 min): Cada aluno aperta Play no próprio jogo e testa uma mecânica de cada vez, comparando o esperado com o real. Ele anota cada bug na lista, copiando a mensagem do Output quando houver. Oriente a testar a pontuação encostando num item e olhando se o número sobe. Circule de máquina em máquina ajudando a ler os erros em vermelho.

4. Desafio e compartilhar (10 min): Em roda, cada aluno conta o bug mais interessante que achou e mostra a pista do Output. Combine que essa lista será o roteiro das aulas de polimento. Comemore quem achou mais bugs: aqui, achar defeito é vitória.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, use a imagem do detetive: "o bug é o suspeito, o Output é a cena do crime e a linha vermelha é a pista". Diga que apertar Play é como acender as luzes de um teatro para ver onde está o problema. Explique o print como uma "câmera escondida" que o programador coloca no código para espiar se aquela parte rodou. Reforce que achar bug não é fracasso, é o trabalho; quem testa com capricho faz um jogo que os amigos vão respeitar.

## Erros comuns e como ajudar

O erro mais comum é o aluno apertar Play e sair correndo sem observar, perdendo o bug. Peça para testar uma coisa de cada vez, devagar. Outro erro é ignorar a janela Output ou nem abri-la; ajude a abrir por View, Output e a procurar o vermelho. Muitos confundem aviso amarelo com erro vermelho; explique que vermelho é o que parou de funcionar. Há quem encontre o bug mas não anote; insista na lista, porque bug não escrito vira bug esquecido. E se o aluno não consegue repetir o bug, peça que descreva exatamente o que fez antes; reproduzir o bug é metade do conserto.`,
  exercicios: [
    {
      titulo: `Ligando o Detetive: Play e Output`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Guie a turma a abrir a janela Output pelo menu View, Output, e depois clicar em Play e em Stop. O objetivo é só familiarizar com os dois botões e ver onde as mensagens aparecem. Confira se todos enxergam a janela Output na tela antes de seguir.`,
      atividade: `Abra a janela Output pelo menu View e depois Output. Clique em Play, ande um pouco com seu personagem e clique em Stop. Observe se apareceu alguma mensagem na janela Output.`,
      gabarito: `O aluno abriu a janela Output, conseguiu entrar no jogo com Play, mover o personagem e sair com Stop, e soube apontar onde ficam as mensagens. Acertou quem identificou a janela Output e os botões Play e Stop sem ajuda.`,
    },
    {
      titulo: `Lendo a Pista Vermelha`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Distribua ou abra o script de exemplo com o erro proposital (uma variável escrita errada, como "scoer"). Peça que cada aluno clique em Play e leia, no Output, a linha vermelha. O foco é localizar o nome do script e o número da linha indicados pelo erro.`,
      atividade: `Abra o script de exemplo, clique em Play e olhe a janela Output. Encontre a mensagem em vermelho e escreva o nome do script e o número da linha que ela mostra.`,
      gabarito: `O aluno localizou a mensagem em vermelho no Output e anotou corretamente o nome do script e a linha citados. Acertou quem entendeu que a linha vermelha aponta exatamente onde o erro aconteceu, em vez de adivinhar.`,
    },
    {
      titulo: `Espiando com o print`,
      tipo: `Programação em Lua`,
      tempo: `12 min`,
      guiaProfessor: `Ensine o print como ferramenta de investigação. Peça que o aluno adicione uma linha de print depois de uma soma de pontos no próprio jogo e clique em Play para ver o valor no Output. Lembre de usar vírgula para juntar o texto e o número, sem chaves de interpolação.`,
      atividade: `No seu script de pontuação, depois da linha que soma o ponto, escreva uma linha com print mostrando o valor atual dos pontos. Clique em Play e veja o número aparecer na janela Output.`,
      gabarito: `Solução esperada (adaptar o nome da variável ao jogo do aluno):

local pontos = 0
pontos = pontos + 1
print("Os pontos agora sao", pontos)

O aluno escreveu o print com vírgula juntando texto e valor, rodou com Play e viu o número correto no Output. Acertou quem usou o print para confirmar se a soma funcionou.`,
    },
    {
      titulo: `Caçada Organizada de Bugs`,
      tipo: `Em dupla`,
      tempo: `14 min`,
      guiaProfessor: `Forme duplas: um joga e testa uma mecânica por vez (movimento, item, pontuação), o outro anota na lista de bugs as colunas Bug, Onde acontece e Mensagem do Output. Depois trocam de papel. Oriente a comparar sempre o esperado com o que aconteceu de verdade e a copiar o erro vermelho quando houver.`,
      atividade: `Em dupla, um joga e testa uma mecânica de cada vez enquanto o outro preenche a lista de bugs com Bug, Onde acontece e Mensagem do Output. Depois troquem. Anotem pelo menos três bugs do jogo de vocês.`,
      gabarito: `A dupla registrou ao menos três bugs reais, cada um com onde acontece e, quando havia, a mensagem do Output. Acertou a dupla que testou uma mecânica por vez, comparou o esperado com o real e cooperou trocando os papéis de jogador e anotador.`,
    },
    {
      titulo: `O Bug Que Sempre Acontece`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Desafie o aluno a escolher um bug da lista e conseguir reproduzi-lo, ou seja, fazê-lo acontecer de novo de propósito, descrevendo o passo a passo exato que o provoca. Reproduzir o bug é o que torna o conserto possível. Acompanhe ajudando a transformar "às vezes trava" em "trava quando eu faço isto e aquilo".`,
      atividade: `Escolha um bug da sua lista e tente fazê-lo acontecer de novo. Escreva o passo a passo exato que provoca o bug (o que você toca, para onde anda, o que coleta) e marque a prioridade dele: alta, média ou baixa.`,
      gabarito: `O aluno conseguiu reproduzir o bug e descreveu os passos exatos que o causam, além de definir uma prioridade. Acertou quem transformou um problema vago em um roteiro claro de como repetir o erro, deixando-o pronto para ser corrigido nas próximas aulas.`,
    },
  ],
};
