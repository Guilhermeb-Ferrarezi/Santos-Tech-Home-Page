import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Ajustes Finais e Teste do Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Jogar o próprio jogo do início ao fim, encontrar e corrigir bugs no código Lua e ajustar interface, som e jogabilidade para deixar a versão final polida e pronta para o Demo Day.`,
  descricao: `Esta é a aula do "acabamento". O jogo já tem os assets novos do Maya importados, a arte, a música e as vozes feitas com IA, e a interface montada no Canva. Agora o aluno vira jogador e testador: ele joga o próprio jogo de ponta a ponta, com olhar crítico, anotando tudo que está estranho, quebrado ou difícil de entender. Esse momento se chama "playtest" e é exatamente o que estúdios profissionais fazem antes de lançar um jogo.

O foco prático é caçar e corrigir problemas. No Roblox Studio, o aluno usa o botão Play para testar, abre o Output para ler as mensagens de erro em vermelho e ajusta o código Lua nos Scripts. Erros comuns nesta fase são botões que não funcionam, sons que não tocam, partes que travam o personagem, pontuação que não soma e texto da interface que aparece cortado ou ilegível.

Além de consertar bugs, o aluno faz pequenos ajustes de polimento: volume da música e das vozes, tamanho e posição dos textos na tela, velocidade de movimento, cor de botões e clareza das instruções para quem joga pela primeira vez. São detalhes pequenos, mas que fazem o jogo parecer profissional na apresentação.

O resultado da aula é uma "versão final" salva: um jogo que roda do começo ao fim sem travar, com som equilibrado, interface legível e jogabilidade justa. Na próxima aula o aluno vai preparar a apresentação, então é essencial sair daqui com o jogo realmente pronto e testado.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado (um por aluno)`,
    `Contas Roblox de cada aluno já logadas no Studio`,
    `O projeto do jogo de cada aluno, com os assets do Maya já importados (aula 5)`,
    `Projetor ligado para o professor mostrar o Output, o Explorer e o teste ao vivo`,
    `Fones de ouvido (para testar música e vozes sem atrapalhar a turma)`,
    `Ficha de teste impressa ou no Canva: lista de checagem (botões, som, pontos, travamentos)`,
    `Um jogo de exemplo do professor com 2 ou 3 bugs propositais para demonstrar a correção`,
  ],
  conceitosChave: [
    `Playtest — quando você joga o próprio jogo do início ao fim procurando problemas, como um testador profissional.`,
    `Bug — um erro no jogo que faz algo funcionar errado ou travar; precisa ser encontrado e corrigido.`,
    `Output — painel do Roblox Studio que mostra mensagens e erros em vermelho enquanto o jogo roda.`,
    `Depuração (debug) — o processo de achar a causa de um bug e consertá-la no código.`,
    `Polimento — pequenos ajustes finais de som, texto e jogabilidade que deixam o jogo com cara profissional.`,
    `Versão final — a cópia do jogo salva como pronta para apresentar, já testada e sem travamentos.`,
    `Balanceamento — ajustar a dificuldade e a velocidade para o jogo ficar divertido e justo.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não precisa programar do zero: o jogo já existe. Seu papel é guiar a turma a TESTAR e CORRIGIR. Mesmo se você for iniciante em Roblox Studio, três coisas resolvem quase tudo: o botão Play (para testar), o painel Output (para ler erros) e o Explorer (para achar Scripts e objetos). Abra View no menu de cima e ative Output e Explorer antes da aula. No Output, mensagens em vermelho são erros; o texto do erro quase sempre diz o nome do Script e o número da linha, por exemplo "Script 'BotaoIniciar' linha 8". É lá que se conserta.

Tenha pronto um jogo de exemplo com bugs propositais (um som que não toca, um botão sem função, um erro de digitação no código). Você vai consertar ao vivo no projetor para a turma ver o método: testar, ler o erro, achar a linha, arrumar, testar de novo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: pergunte "o que é um bug?" e "como um estúdio descobre que o jogo tem problema antes de lançar?". Apresente a palavra playtest. Mostre a ficha de teste (botões funcionam? som toca? pontos somam? trava em algum lugar?).

15 min — Conteúdo novo guiado (no projetor): abra seu jogo de exemplo. Clique em Play (botão azul de seta no topo, ou tecla F5) e jogue mostrando um bug. Pare no botão Stop. Abra o Output e leia em voz alta o erro em vermelho. No Explorer, dê dois cliques no Script citado. Mostre o erro na linha indicada (por exemplo, "prnt" em vez de "print", ou faltando um "end"). Corrija, dê Ctrl+S e clique em Play de novo para provar que sumiu. Mostre também um ajuste sem código: selecione um Sound e mude a propriedade Volume no painel Properties; selecione um TextLabel e ajuste TextScaled para true e a posição.

25 min — Mão na massa: cada aluno joga o próprio jogo do início ao fim, preenchendo a ficha de teste. Para cada problema, ele corrige no Studio. Circule pela sala. Mande sempre olhar o Output antes de mexer no código. Lembre de salvar (Ctrl+S) e de testar de novo após cada correção. Peça que ajustem volume da música, posição dos textos da interface e velocidade, se necessário.

10 min — Desafio + compartilhar: cada aluno troca de lugar e joga o jogo do colega ao lado por 2 minutos, anotando UMA coisa boa e UM problema. De volta ao próprio lugar, corrige esse problema apontado. Feche com 2 ou 3 alunos mostrando rapidamente o jogo já corrigido.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação: "testar o jogo é como provar a comida antes de servir para a visita". Diga que bug não é vergonha, é parte do trabalho: "todo jogo famoso teve centenas de bugs antes de ficar pronto". Chame o Output de "o detetive do jogo: ele aponta onde está o erro e até em que linha". Para polimento, fale "deixar bonito e justo": som nem alto demais nem baixo demais, texto que dá para ler de longe, jogo nem fácil demais nem impossível.

## Erros comuns e como ajudar

O aluno conserta no código mas esquece de clicar em Play de novo: lembre que só dá para saber se funcionou testando. Ele apaga linhas de código no susto: oriente a ler o Output primeiro e mexer só na linha indicada. Esquece um "end" e o Script todo para: mostre que cada if, for e function precisa de um end fechando. Troca o nome do objeto e o Script não acha mais: nome no Explorer tem que bater exatamente com o nome escrito no código. Mexe no jogo sem salvar e perde o ajuste: reforce Ctrl+S após cada correção. Fica preso querendo deixar perfeito: lembre que o objetivo é "rodar do início ao fim sem travar", não ficar impecável.`,
  exercicios: [
    {
      titulo: `Playtest com ficha de teste`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno clique em Play e jogue do começo ao fim sem pular partes. O objetivo é só ANOTAR, ainda não corrigir.`,
      atividade: `Clique em Play e jogue seu jogo inteiro. Preencha a ficha de teste marcando: os botões funcionam? O som toca? Os pontos somam? Trava em algum lugar? Anote cada problema que encontrar.`,
      gabarito: `Ficha preenchida com pelo menos um problema identificado e a localização dele (por exemplo: "botão Iniciar não responde" ou "música não toca na fase 2"). Espera-se de 2 a 5 itens anotados por aluno.`,
    },
    {
      titulo: `Lendo o Output e corrigindo um erro`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Reforce a sequência: jogar, parar, ler o Output, abrir o Script citado, corrigir a linha, salvar, testar de novo. Circule e peça que leiam o erro em voz alta para você.`,
      atividade: `Escolha um bug da sua ficha. Abra o painel Output, leia a mensagem em vermelho e veja o nome do Script e o número da linha. Dê dois cliques nesse Script no Explorer, corrija a linha indicada, salve com Ctrl+S e clique em Play para conferir.`,
      gabarito: `O erro em vermelho some do Output após a correção e o jogo roda aquela parte normalmente. Exemplo: a linha "prnt(pontos)" foi corrigida para "print(pontos)", ou um "end" que faltava foi adicionado ao fim de uma função.`,
    },
    {
      titulo: `Polimento de som e interface`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor onde ficam as propriedades Volume (no Sound) e TextScaled e Position (no TextLabel). Ajuste sem programar, só pelo painel Properties.`,
      atividade: `Sem mexer no código, melhore a apresentação do jogo: selecione a música no Explorer e ajuste o Volume; selecione um texto da interface e deixe TextScaled como true para ele se ajustar à tela; reposicione textos cortados. Teste depois de cada mudança.`,
      gabarito: `O som fica equilibrado (nem estourado nem inaudível), os textos da interface ficam legíveis e dentro da tela, sem cortes. O aluno consegue explicar qual propriedade mudou em cada caso (Volume, TextScaled ou Position).`,
    },
    {
      titulo: `Teste cruzado em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Cada um joga o jogo do colega por cerca de 2 minutos. Reforce o feedback respeitoso: sempre um elogio antes do problema.`,
      atividade: `Troque de computador com um colega e jogue o jogo dele. Anote UMA coisa boa e UM problema que você encontrou. Volte ao seu lugar, conte o feedback ao colega e corrija o problema que apontaram no seu jogo.`,
      gabarito: `Cada aluno recebe um feedback escrito (um ponto positivo e um problema) e corrige o problema apontado no próprio jogo, testando depois para confirmar que melhorou. A dupla consegue mostrar a correção feita.`,
    },
    {
      titulo: `Versão final pronta para o Demo Day`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Acompanhe um playtest final por aluno. Só pode considerar pronto quem rodar do início ao fim sem travar. Confirme que todos salvaram com Ctrl+S e que a versão está publicada ou salva no projeto.`,
      atividade: `Faça um último teste jogando o jogo inteiro. Confira a ficha: todos os problemas foram corrigidos? O jogo roda do início ao fim sem travar, com som equilibrado e interface legível? Salve a versão final do seu jogo.`,
      gabarito: `Versão final salva que roda do começo ao fim sem travamentos, com Output limpo (sem erros em vermelho durante o jogo), som ajustado e interface legível. A ficha de teste está com todos os itens marcados como resolvidos, deixando o jogo pronto para a apresentação.`,
    },
  ],
};
