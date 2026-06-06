import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Ajustando e equilibrando o jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Testar o jogo do início ao fim e ajustar os números — distância dos pulos, quantidade de moedas, dificuldade e tela de vitória — para deixá-lo justo e divertido, nem fácil demais nem impossível.`,
  descricao: `Na aula passada cada criança terminou de montar as mecânicas do jogo: o personagem pula, as moedas somam pontos e existe um objetivo a cumprir. Agora chegou a parte que todo criador de jogos de verdade faz: jogar o próprio jogo várias vezes e ajustar até ele ficar gostoso de jogar. Essa parte tem um nome especial no mundo dos games: equilibrar o jogo. É como provar uma sopa e ir colocando sal aos poucos, sem deixar salgada demais nem sem graça.

Equilibrar quer dizer encontrar o ponto certo de dificuldade. Um jogo fácil demais fica chato, porque o jogador ganha sem esforço e perde a graça. Um jogo difícil demais fica frustrante, porque ninguém consegue terminar e a pessoa desiste com raiva. O segredo é o meio: difícil o suficiente para ser um desafio, mas possível de vencer com algumas tentativas. As crianças vão descobrir que pequenos números mudam tudo — uma plataforma um pouquinho mais longe, uma moeda a mais para coletar, um chão que some um segundo antes.

Nesta aula o aluno aprende a ser um testador (em inglês, playtester). Ele joga o próprio jogo do começo ao fim, anota o que travou ou ficou estranho e mexe nos valores no código em Lua e nas peças do cenário. Tudo é feito mudando números: a posição de uma plataforma, o número de moedas que dá vitória, o tempo de um obstáculo. Depois de cada ajuste, ele testa de novo e compara. É um ciclo: testar, anotar, ajustar, testar de novo.

Ao final, cada criança terá um jogo mais justo e mais divertido, ajustado pelas próprias mãos. Também vão trocar de cadeira e testar o jogo de um colega, porque quem cria o jogo já sabe os segredos e precisa de outros olhos para perceber o que está difícil ou confuso. Essa troca ensina a ouvir opiniões e a melhorar a partir delas — algo que os criadores profissionais fazem o tempo todo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo de cada criança da Aula 5 já carregado`,
    `Projetor ou TV grande para o professor demonstrar os ajustes ao vivo`,
    `Um jogo-exemplo pronto do professor, propositalmente desequilibrado (fácil demais e difícil demais), para mostrar a diferença`,
    `Ficha de teste impressa para cada criança anotar "o que estava fácil / difícil / confuso"`,
    `Lápis ou caneta para preencher a ficha de teste`,
    `Cartão com a regra dos números (pulo, moedas, tempo, vitória) para lembrar onde mexer`,
    `Adesivos de "Testador Profissional" para premiar quem testar e ajustar o jogo`,
  ],
  conceitosChave: [
    `Equilibrar — achar o ponto certo de dificuldade, nem fácil demais nem difícil demais.`,
    `Testar (playtest) — jogar o próprio jogo do começo ao fim para ver o que precisa melhorar.`,
    `Dificuldade — o quanto o jogo é desafiador para o jogador vencer.`,
    `Ajuste fino — mudar os números aos poucos, um pouquinho de cada vez, e testar de novo.`,
    `Variável — uma caixinha no código que guarda um número, como a quantidade de moedas para vencer.`,
    `Tela de vitória — a mensagem que aparece quando o jogador cumpre o objetivo e ganha.`,
    `Feedback — a opinião de um colega sobre o que ficou bom ou difícil no seu jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um especialista. Nesta aula ninguém cria coisas novas: a gente só mexe em números que já existem. Antes da aula, deixe o jogo de cada criança aberto no Roblox Studio e teste se o botão "Play" (o triângulo azul no topo, na aba "Home" ou "Test") faz o jogo rodar e o "Stop" (quadrado vermelho) o para.

Há três lugares onde se ajusta o jogo. Primeiro, as peças do cenário: clique numa plataforma e arraste-a para mudar a posição, ou use a janela "Properties" (Propriedades), no canto, alterando o campo "Position" para deixá-la mais perto ou mais longe. Segundo, os scripts em Lua: dentro do "Explorer" (Explorador), clique duas vezes num "Script" para abrir o código. Terceiro, os números dentro do código — é onde mora o equilíbrio.

Mostre este trecho de Lua simples no projetor e explique linha a linha:

local moedasParaVencer = 10
local alturaDoPulo = 50

Cada linha começa com a palavra "local", que quer dizer "guarde isto numa caixinha". O nome explica o que é, e depois do sinal de igual vem o número. Para deixar o jogo mais fácil, troque o 10 por 5; para mais difícil, coloque 15. Para um pulo mais alto, aumente o 50. Mexeu, salvou (Ctrl+S), apertou "Play" e testou. Simples assim.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, pergunte: "O que faz um jogo ser divertido?" Deixe as crianças falarem. Mostre no projetor o seu jogo-exemplo fácil demais (vence em 3 segundos) e o difícil demais (impossível). Pergunte qual foi mais legal. Elas vão sentir que nenhum dos dois é bom — esse é o gancho para "equilibrar".

Conteúdo novo guiado (15 min): No projetor, abra um "Script" pelo "Explorer" e mostre a linha "local moedasParaVencer = 10". Mude para 5, salve com Ctrl+S, aperte "Play" azul e mostre como o jogo ficou fácil. Mude para 15 e mostre como ficou difícil. Faça o mesmo com a altura do pulo e com a posição de uma plataforma (arrastando ou pelo "Position"). Repita o ciclo em voz alta: "Mudo, salvo, aperto Play, testo."

Mão na massa (25 min): Cada criança joga o próprio jogo do início ao fim usando "Play" e anota na ficha de teste o que estava fácil, difícil ou confuso. Depois, escolhe pelo menos dois ajustes e mexe nos números (moedas, pulo ou posição de plataforma), salvando e testando após cada mudança. Circule pela sala ajudando a achar a linha certa no código.

Desafio e compartilhar (10 min): As crianças trocam de cadeira e testam o jogo de um colega, dando um elogio e uma dica. Quem testou e ajustou ganha o adesivo de "Testador Profissional".

## Como explicar para crianças

Use a analogia da sopa: "Equilibrar o jogo é como temperar uma sopa — pouco sal fica sem graça, sal demais fica horrível; a gente vai provando até ficar no ponto." Para a dificuldade, use a história dos três ursos: a cadeira mole demais, a dura demais e a perfeita. O jogo bom é a cadeira perfeita. Diga que mexer nos números é como girar o botão do volume: um pouquinho de cada vez, sempre ouvindo (testando) depois.

## Erros comuns e como ajudar

A criança muda muitos números de uma vez e se perde: peça para mudar UM número, testar, e só depois mexer no próximo. A criança esquece de salvar antes do "Play": crie o bordão "salvou com Ctrl+S, depois Play". A criança apaga uma linha do código sem querer: ensine Ctrl+Z para desfazer. A criança deixa o jogo impossível por orgulho ("o meu é o mais difícil!"): lembre que difícil demais ninguém termina, e o objetivo é divertido, não impossível. A criança não acha o número no código: ajude a procurar a palavra "local" no script; é ali que os números moram.`,
  exercicios: [
    {
      titulo: `Fácil, difícil ou no ponto?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `No projetor, mostre os dois jogos-exemplo: o fácil demais (vence em segundos) e o difícil demais (impossível). Deixe as crianças jogarem ou assistirem. Pergunte qual foi divertido e por quê. Conduza até a ideia de "no ponto", no meio dos dois.`,
      atividade: `Olhe os dois jogos que o professor vai mostrar. Diga: qual foi fácil demais? Qual foi difícil demais? Como seria um jogo "no ponto", nem fácil nem impossível?`,
      gabarito: `A criança identifica o jogo fácil (vence sem esforço, fica chato) e o difícil (não dá para vencer, fica frustrante) e percebe que o ideal é o meio. Exemplo de resposta certa: "O primeiro foi fácil demais porque ganhei na hora; o bom seria precisar tentar algumas vezes para vencer."`,
    },
    {
      titulo: `Ficha do testador`,
      tipo: `Prática no Roblox Studio`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a ficha de teste. A criança aperta "Play" (triângulo azul) e joga o próprio jogo do começo ao fim, sem mexer em nada ainda. Vai anotando o que estava fácil, difícil ou confuso. Quem escreve pouco pode desenhar ou contar para você anotar.`,
      atividade: `Aperte "Play" e jogue o seu jogo do início até o fim. Na ficha, escreva uma coisa que estava fácil, uma que estava difícil e uma que ficou confusa.`,
      gabarito: `A ficha preenchida com pelo menos uma observação em cada campo (fácil, difícil, confuso). Acerto = a criança jogou até o fim e percebeu pontos para melhorar. Exemplo: "Fácil: pegar a primeira moeda. Difícil: o pulo da plataforma alta. Confuso: não sabia quando ganhei."`,
    },
    {
      titulo: `Mexendo nas moedas da vitória`,
      tipo: `Prática de código em Lua`,
      tempo: `8 minutos`,
      guiaProfessor: `No "Explorer", a criança abre o "Script" com dois cliques e acha a linha com a variável das moedas, por exemplo "local moedasParaVencer = 10". Ela muda o número, salva com Ctrl+S, aperta "Play" e testa. Ensine que menos moedas deixa fácil e mais moedas deixa difícil.`,
      atividade: `Abra o seu script e ache a linha "local moedasParaVencer = ___". Se o jogo estava fácil, aumente o número; se estava difícil, diminua. Salve com Ctrl+S, aperte "Play" e veja se ficou melhor.`,
      gabarito: `A criança encontra a variável, troca o número de forma coerente com o que sentiu no teste, salva e testa. Acerto = o jogo ficou mais justo após a mudança. Exemplo: estava difícil, trocou de 12 para 8 moedas, salvou, testou e conseguiu vencer com esforço.`,
    },
    {
      titulo: `Ajustando o pulo e a plataforma`,
      tipo: `Prática combinada (cenário + código)`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre dois jeitos de mexer na dificuldade do pulo: pelo código, alterando "local alturaDoPulo = 50", e pelo cenário, clicando numa plataforma e mudando "Position" em "Properties" ou arrastando-a. Reforce a regra de ouro: mudar UM valor, salvar, apertar "Play", testar, e só então mexer no próximo.`,
      atividade: `Escolha um pulo que estava difícil. Tente de um jeito: deixe a plataforma um pouquinho mais perto (arraste ou mude "Position") OU aumente um pouco o "alturaDoPulo" no código. Salve, aperte "Play" e teste. Mudou só um valor de cada vez?`,
      gabarito: `A criança faz UM ajuste (na plataforma ou na altura do pulo), salva, testa e o pulo ficou possível mas ainda desafiador. Acerto = mudar um valor de cada vez e testar. Exemplo: aproximou a plataforma 3 passos, apertou "Play" e agora consegue pular com uma ou duas tentativas.`,
    },
    {
      titulo: `Testador do colega e tela de vitória`,
      tipo: `Desafio final e troca de feedback`,
      tempo: `12 minutos`,
      guiaProfessor: `As crianças trocam de cadeira e jogam o jogo do colega, conferindo se a tela de vitória aparece ao vencer. Cada uma dá um elogio e uma dica gentil. Se a tela de vitória não aparecer, ajude a achar no código a parte que mostra a mensagem (algo como uma linha que escreve "Você venceu!"). Quem testar e ajustar ganha o adesivo de "Testador Profissional".`,
      atividade: `Troque de lugar com um colega e jogue o jogo dele até o fim. A tela de vitória apareceu quando ele venceu? Diga ao colega uma coisa que você gostou e uma dica para melhorar. Depois volte e ajuste o seu jogo com a dica que recebeu.`,
      gabarito: `A criança joga o jogo do colega até o fim, confirma se a tela de vitória aparece e dá um elogio e uma dica claros; depois aplica no próprio jogo a dica recebida. Acerto = feedback gentil e útil mais um ajuste feito. Exemplo: "Gostei das moedas brilhando; dica: a última plataforma está longe demais" — e o colega aproxima a plataforma e a tela de vitória passa a aparecer.`,
    },
  ],
};
