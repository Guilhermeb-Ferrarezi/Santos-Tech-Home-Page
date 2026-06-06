import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Caça-bugs: deixando tudo funcionando",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança faz a revisão final do seu jogo no Roblox Studio, caçando e consertando os erros (bugs) dos scripts e do cenário com a ajuda do painel Output e de testes repetidos, até que começar, jogar e vencer funcionem do início ao fim.`,
  descricao: `Nesta aula a turma vira "caça-bugs". Depois de várias semanas montando o cenário, escrevendo scripts em Lua e programando as mecânicas, chegou a hora de garantir que o jogo inteiro funcione sem travar. Um bug é um errinho escondido no código ou no cenário que faz o jogo se comportar de um jeito que a gente não quis: um botão que não responde, um ponto que não soma, uma porta que nunca abre. Todo programador de verdade caça bugs, então as crianças vão fazer exatamente o que os profissionais fazem.

A ferramenta principal do dia é o painel "Output" do Roblox Studio. Ele é a janelinha onde o computador "conversa" com a gente e avisa, em letrinhas vermelhas, quando algo deu errado e em qual linha do script o problema está. Aprender a ler o Output é como aprender a ler o mapa do tesouro: a mensagem mostra o caminho até o erro. Ao lado disso, a turma vai usar a técnica mais poderosa do caça-bugs: testar de novo, e de novo, e de novo, apertando o botão "Play" para jogar o próprio jogo e ver o que acontece.

O foco é o caminho completo do jogador: começar, jogar e vencer. A criança vai testar se o jogo inicia direitinho, se as mecânicas respondem (pular, pegar item, somar ponto) e se dá para chegar até a vitória. Cada vez que algo quebra, ela volta ao script, lê a dica do Output, conserta e testa outra vez. É um ciclo: testar, achar o bug, consertar, testar de novo.

Esta é a penúltima aula do mês. Depois de hoje, o jogo precisa estar redondo, sem erros que impeçam de jogar, pronto para a Aula 8, quando cada criança vai mostrar o seu jogo jogável para a turma. Por isso a palavra de ordem é capricho: testar tudo com paciência e deixar funcionando de ponta a ponta.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, cada um com o projeto de jogo da própria criança das aulas anteriores (um por aluno)`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar o painel Output e os testes ao vivo`,
    `Um projeto de exemplo preparado pelo professor com 3 bugs de propósito (um ponto que não soma, um script com erro de digitação e uma plataforma de vitória solta no lugar errado)`,
    `Painel Output do Studio já visível na tela do professor (menu "View" depois "Output")`,
    `Folha impressa "Lista do Caça-Bugs" com os três testes: começar funciona? jogar funciona? vencer funciona?`,
    `Cartões com mensagens de erro comuns do Output em letras grandes para a turma "ler" junto`,
    `Cronômetro ou timer visível para controlar cada parte da aula`,
  ],
  conceitosChave: [
    `Bug — um errinho escondido no código ou no cenário que faz o jogo agir diferente do que a gente queria, tipo um botão que não funciona.`,
    `Output — a janelinha do Roblox Studio onde o computador escreve avisos e mostra, em vermelho, quando deu erro e em qual linha foi.`,
    `Testar — apertar o botão "Play" e jogar o próprio jogo para ver com os próprios olhos se tudo funciona.`,
    `Erro (mensagem vermelha) — o recado do computador dizendo que algo quebrou; ele aponta a linha do script onde está o problema.`,
    `Consertar (debugar) — voltar no script ou no cenário, achar o pedaço errado e arrumar para o jogo funcionar de novo.`,
    `Caminho completo — começar, jogar e vencer; é o trajeto inteiro do jogador que precisa funcionar do início ao fim.`,
    `Print — uma linha de código (print) que faz aparecer uma mensagem no Output para a gente saber se aquela parte do script rodou.`,
  ],
  treinamento: `## O que o professor precisa saber

Caçar bugs é encontrar e consertar erros. No Roblox Studio existem dois lugares onde o erro aparece: na tela do jogo (algo não acontece como devia) e no painel "Output" (uma mensagem vermelha de erro). Para abrir o Output, vá no menu de cima em "View" e clique em "Output"; uma janela vai surgir embaixo. Quando um script tem erro, o Output mostra uma linha vermelha com o nome do script e o número da linha, por exemplo "Workspace.Script:5". Esse número 5 é a linha onde olhar primeiro.

Os bugs mais comuns das crianças nesta idade são: nome escrito errado (digitar "Pont" em vez de "Points"), esquecer de fechar um bloco com "end", e usar maiúscula ou minúscula trocada (Lua diferencia "Parte" de "parte"). Uma técnica simples e poderosa é o print: a linha print("cheguei aqui") faz aparecer um aviso no Output. Se a mensagem aparece, aquele pedaço do código rodou; se não aparece, o problema está antes. Teste o projeto de exemplo com bugs antes da aula para dominar o caminho.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): No projetor, abra o jogo de exemplo e aperte o botão "Play" (o triângulo azul no topo). Jogue na frente da turma e deixe um bug aparecer (um ponto que não soma). Pergunte: "O que será que está quebrado?". Mostre o painel Output (menu "View" depois "Output") e leia junto a mensagem vermelha. Diga que hoje todos serão caça-bugs.

CONTEÚDO NOVO GUIADO (15 min): Ainda no exemplo, mostre como ler o erro. A linha vermelha diz "Script:5". Dê dois cliques na mensagem: o Studio pula direto para a linha 5 do script. Mostre o bug (por exemplo, "Pont" escrito errado). Corrija para "Points", aperte "Play" de novo e mostre que agora o ponto soma. Depois ensine o print: digite print("peguei o item") dentro do script e mostre a mensagem aparecendo no Output ao jogar. Narre cada clique devagar.

MÃO NA MASSA (25 min): Cada criança abre o seu próprio jogo e usa a "Lista do Caça-Bugs": testa começar (aperta Play e o jogo inicia?), testa jogar (as mecânicas respondem?) e testa vencer (dá para chegar ao fim?). A cada bug, ela abre o Output, lê a linha vermelha, dá dois cliques para ir até a linha e conserta. Depois aperta "Play" de novo para confirmar. Circule pela sala lendo as mensagens com quem travar.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Jogue o seu jogo do começo ao fim sem nenhum erro vermelho no Output". Quem conseguir, levanta a mão. Depois, cada criança conta para a turma um bug que achou e como consertou: "O meu bug era ___ e eu arrumei ___".

## Como explicar para crianças

Chame o bug de "bichinho travesso" que se esconde no código e bagunça o jogo, e a turma de "detetives caça-bugs". O Output é o "rádio do computador": é por ali que a máquina fala com a gente e dá pistas. A mensagem vermelha é a "pista do detetive" que mostra onde o bichinho está escondido. Repita o ciclo com gestos: "Testa (aperta Play), acha o bug, conserta, testa de novo". Use a frase "errar e arrumar faz parte" para tirar o medo: até os criadores de jogos famosos caçam bugs o dia inteiro. Comemore cada conserto: "Achou e consertou, detetive!".

## Erros comuns e como ajudar

Erro 1: a criança não acha o Output. Mostre o menu "View" depois "Output" e deixe a janela fixa embaixo. Erro 2: ela conserta mas não testa de novo, então não sabe se funcionou; lembre sempre de apertar "Play" após cada conserto. Erro 3: ela muda muitas coisas de uma vez e se perde; ensine a arrumar um bug por vez e testar entre eles. Erro 4: digitação trocada (maiúscula/minúscula ou nome do objeto diferente do script); compare letra por letra com ela. Erro 5: ela apaga um "end" sem querer e o script para tudo; ensine que cada bloco precisa do seu "end" para fechar.`,
  exercicios: [
    {
      titulo: `Lendo o Rádio do Computador`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Faça junto com a turma ao mesmo tempo. Garanta que todos abram o painel Output antes de começar. Aperte "Play" no projeto de exemplo e leia a mensagem vermelha em voz alta, mostrando o nome do script e o número da linha.`,
      atividade: `Abra o painel Output pelo menu "View" depois "Output". Aperte o botão azul "Play" e jogue. Quando aparecer uma mensagem vermelha, leia em voz alta o nome do script e o número da linha que aparece (por exemplo, "Script linha 5").`,
      gabarito: `A criança acerta quando consegue apontar a mensagem vermelha no Output e dizer o número da linha do erro. Por exemplo, se aparece "Workspace.Script:5", a resposta é "linha 5". O importante é localizar a pista, ainda sem consertar.`,
    },
    {
      titulo: `Conserta o Ponto que Não Soma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o bug do ponto que não soma do projeto de exemplo (o nome "Points" escrito errado como "Pont"). Dê dois cliques na mensagem do Output para o Studio pular até a linha. Acompanhe a turma corrigindo a palavra e testando de novo.`,
      atividade: `No Output, dê dois cliques na mensagem vermelha para ir até a linha do erro. O nome do ponto está escrito errado. Corrija de "Pont" para "Points". Aperte "Play" e confira se agora o ponto soma quando você pega o item.`,
      gabarito: `Acertou quem trocou "Pont" por "Points", apertou "Play" e viu o ponto somar na tela sem nenhuma mensagem vermelha no Output. Se ainda não somar, conferir se a palavra ficou idêntica, com P maiúsculo e "s" no final.`,
    },
    {
      titulo: `Espião do Print`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Ensine a usar print como detetive. Mostre que a linha print("peguei o item") faz uma mensagem aparecer no Output quando aquela parte do código roda. Ajude quem não souber onde colocar a linha dentro do script da mecânica de pegar item.`,
      atividade: `No seu script de pegar item, escreva uma linha nova: print("peguei o item"). Aperte "Play" e pegue um item no jogo. Olhe o Output: a mensagem "peguei o item" apareceu? Se apareceu, aquela parte do código está funcionando.`,
      gabarito: `Acertou quem viu a frase "peguei o item" aparecer no Output ao encostar no item durante o teste. Se não aparecer, o problema está antes dessa linha (o item não está chamando o script), e isso é uma pista valiosa de onde caçar o bug.`,
    },
    {
      titulo: `Lista do Caça-Bugs`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha "Lista do Caça-Bugs" com os três testes. Peça que cada criança teste o próprio jogo nos três pontos e marque um "X" no que funciona e um "?" no que está quebrado. Para cada "?", oriente a abrir o Output e tentar consertar. Circule lendo as mensagens.`,
      atividade: `Teste o seu jogo nos três pontos e marque a lista: 1) Começar: o jogo inicia ao apertar "Play"? 2) Jogar: as mecânicas (pular, pegar, somar) respondem? 3) Vencer: dá para chegar até o fim e ganhar? Para cada "?", abra o Output, leia a pista e conserte.`,
      gabarito: `Acertou quem testou os três pontos, marcou a lista com honestidade e consertou pelo menos um bug encontrado, apertando "Play" para confirmar. O resultado ideal é os três itens com "X": começar, jogar e vencer funcionando.`,
    },
    {
      titulo: `Jogada Sem Erros do Começo ao Fim`,
      tipo: `desafio`,
      tempo: `14 minutos`,
      guiaProfessor: `Este é o desafio final que junta tudo. Cada criança deve jogar o próprio jogo do início ao fim, sem nenhuma mensagem vermelha no Output e chegando à vitória. Quem ainda tiver bug, ajude a achar a linha pelo Output e consertar. Comemore cada jogo que roda inteiro.`,
      atividade: `Jogue o seu jogo do começo ao fim: comece (Play), jogue todas as mecânicas e chegue até vencer. O objetivo é completar o caminho inteiro sem nenhuma mensagem vermelha no Output. Se aparecer erro, volte, leia a pista, conserte e tente de novo.`,
      gabarito: `Acertou quem conseguiu começar, jogar e vencer numa jogada completa, sem erros vermelhos no Output. O jogo fica pronto e jogável de ponta a ponta para a Aula 8. Se um bug teimar, deixe anotado qual é, para retomar na próxima aula.`,
    },
  ],
};
