import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Caça aos Bugs: Testar e Ajustar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conduzir uma sessão de teste guiada em que o aluno joga o próprio jogo no Roblox Studio para encontrar erros de script, de colisão e de som, usando o painel Output e o modo Play para diagnosticar bugs e aplicar correções que deixem a experiência fluida e divertida.`,
  descricao: `Esta é a Aula 6 de 8 do mês, dedicada inteiramente a testar e consertar. Nas aulas anteriores os alunos importaram os modelos do Maya, montaram o cenário, escreveram os primeiros scripts em Lua, criaram mecânicas e integraram a música, a voz e a arte feitas com IA. Agora o jogo existe, mas quase nunca funciona perfeito de primeira: o personagem atravessa uma parede, um botão não responde, a música não toca ou o script trava. Hoje o aluno aprende a olhar para o próprio jogo com olhos de testador, encontrar esses problemas de forma organizada e corrigi-los.

O coração da aula é o painel Output do Roblox Studio. É nele que o jogo "fala" com a gente: toda vez que um script tem um erro, aparece uma linha vermelha com a mensagem e o número da linha onde o problema está. O aluno descobre que o erro não é um bicho de sete cabeças, e sim uma pista. Ao lado do Output, o botão Play (atalho F5) permite entrar no jogo e testar de verdade, andando, pulando, apertando botões e ouvindo os sons, enquanto o botão Stop (Shift + F5) volta para o modo de edição para consertar.

A aula trabalha três famílias de bugs. Bugs de script são os erros de código que aparecem no Output (palavra escrita errada, variável que não existe, vírgula faltando). Bugs de colisão acontecem quando o jogador atravessa o chão, fica preso numa quina ou cai pra fora do mapa, e quase sempre têm a ver com a propriedade CanCollide e com a posição das peças. Bugs de som são quando a música ou a voz da IA não toca, toca na hora errada ou fica repetindo sem parar.

Para o professor iniciante: você não precisa decorar a linguagem Lua. O segredo é ensinar um método de caça aos bugs: testar, ler a mensagem do Output, achar a linha, mudar uma coisa de cada vez e testar de novo. Esse ciclo "testar, observar, corrigir" é exatamente o que programadores de verdade fazem o dia inteiro, e é a habilidade mais valiosa que sai desta aula.`,
  materiais: [
    `Computadores (1 por aluno) com o Roblox Studio instalado e com cada aluno logado na própria conta Roblox, abrindo o projeto do jogo das aulas anteriores`,
    `Projetor ou TV para o professor mostrar o painel Output, o botão Play e o processo de correção em tempo real`,
    `Arquivo de exemplo: um jogo .rbxl simples preparado com três bugs propositais (um erro de script no Output, uma peça com CanCollide errado e um som que não toca) para a turma treinar a caça`,
    `Ficha impressa ou slide "Lista de Caça aos Bugs" com as três famílias: script (linhas vermelhas no Output), colisão (atravessar/prender) e som (não toca/repete)`,
    `Quadro branco ou slide para anotar o ciclo "Testar → Ler o Output → Achar a linha → Corrigir uma coisa → Testar de novo"`,
    `Fone de ouvido por aluno, indispensável para testar a música e a voz da IA sem que o som de um atrapalhe o do outro`,
  ],
  conceitosChave: [
    `Bug — qualquer erro ou comportamento estranho no jogo, como atravessar uma parede ou um botão que não funciona.`,
    `Output — painel do Roblox Studio onde o jogo mostra mensagens; erros de script aparecem em vermelho com o número da linha.`,
    `Modo Play (F5) — botão que entra no jogo para testar de verdade; o botão Stop (Shift + F5) volta para o modo de edição.`,
    `Bug de colisão — problema em que o jogador atravessa o chão ou fica preso, ligado à propriedade CanCollide das peças.`,
    `CanCollide — propriedade de uma peça (Part) que liga ou desliga a colisão; quando está desligada, o jogador atravessa.`,
    `Bug de som — quando a música ou a voz da IA não toca, toca na hora errada ou fica repetindo sem parar.`,
    `Depurar (debug) — o ato de procurar a causa de um bug e corrigi-lo, mudando uma coisa de cada vez e testando de novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Lua para dar esta aula; precisa dominar um método. Abra o Roblox Studio e garanta dois painéis visíveis: o Output e o Explorer. Se o Output não estiver na tela, vá no menu superior em "View" e clique em "Output" (ele costuma abrir embaixo). O Output é onde os erros aparecem em vermelho, com a mensagem e o número da linha. O botão Play fica no topo, na aba "Home" ou "Test" (ícone de seta, atalho F5); ao lado dele o botão Stop (Shift + F5). A regra de ouro da aula, que você vai repetir o tempo todo, é: "muda uma coisa só e testa de novo". Quem muda cinco coisas juntas nunca descobre qual resolveu.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): com o jogo de exemplo no projetor, aperte Play (F5) e mostre um bug acontecendo (o jogador atravessando o chão). Pergunte: "o jogo está fazendo o que a gente quer?". Mostre a linha vermelha no Output e explique que ela é uma pista, não um castigo. Apresente no quadro o ciclo: Testar → Ler o Output → Achar a linha → Corrigir uma coisa → Testar de novo.

Conteúdo novo guiado (15 min): ensine as três famílias de bug ao vivo. Script: clique na mensagem vermelha do Output; o Studio abre o script e mostra a linha do erro. Conserte um erro simples (ex.: "prnit" que deveria ser "print") e aperte Play de novo. Colisão: selecione a peça do chão no Explorer, abra o painel Properties e mostre a caixa "CanCollide"; marque-a para o jogador parar de atravessar. Som: clique no objeto "Sound" no Explorer, mostre as propriedades "Playing", "Looped" e "Volume", e teste se a música toca. Diga sempre: "uma mudança, um Play".

Mão na massa (25 min): cada aluno entra no próprio jogo e segue a "Lista de Caça aos Bugs". Escreva os passos no quadro: 1) aperte Play e jogue por 1 minuto anotando tudo que está estranho; 2) abra o Output e anote os erros vermelhos; 3) escolha UM bug e conserte; 4) aperte Play para confirmar; 5) repita com o próximo bug. Circule pela sala com fone, ajudando a ler as mensagens. Reforce salvar com Ctrl + S a cada correção que funcionou.

Desafio e compartilhar (10 min): desafie quem terminou a encontrar e corrigir um bug de som (música que não toca ou que repete sem parar). Cada aluno conta em 30 segundos qual foi o bug mais difícil e como descobriu a causa, mostrando o jogo rodando sem aquele erro.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do detetive: "o bug é o mistério e o Output é a testemunha que conta onde o crime aconteceu". Trate o erro vermelho como amigo: "ele está te entregando a linha exata, é só ir lá olhar". Para colisão, diga "CanCollide ligado é parede de verdade; desligado é fantasma, o jogador passa através". Para som, "Playing é o play do controle, Looped é o repeat". Reforce o hábito de mudar uma coisa por vez com a frase "se você mexer em tudo, não sabe quem foi o culpado". Comemore cada bug resolvido: achar e consertar é vitória, não fracasso.

## Erros comuns e como ajudar

O erro mais comum é o aluno entrar em pânico com a tela vermelha; mostre que cada linha tem o número exato onde olhar. Outro é trocar Letras maiúsculas e minúsculas: em Lua "Print" não é "print", e o nome do objeto precisa ser idêntico. Muitos esquecem de apertar Stop (Shift + F5) e tentam editar no modo Play, onde as mudanças não são salvas; ensine a sempre parar antes de mexer. Em colisão, vários desligam CanCollide sem querer; oriente a conferir no Properties. Em som, o clássico é o objeto Sound estar no lugar errado do Explorer ou sem o ID do áudio; confira "SoundId" e "Volume". Por fim, lembre Ctrl + S após cada acerto e avise que polir e balancear é assunto da Aula 7.`,
  exercicios: [
    {
      titulo: `Aquecimento: lendo o Output como detetive`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que o painel Output esteja aberto (menu View > Output) na tela de cada aluno. Use o jogo de exemplo com bugs propositais. Mostre no projetor como clicar na linha vermelha para o Studio abrir o script na linha certa. Reforce que o erro é uma pista.`,
      atividade: `Abra o jogo de exemplo, aperte Play (F5) e jogue por um minuto. Aperte Stop (Shift + F5), olhe o painel Output e anote no caderno quantas linhas vermelhas apareceram e qual o número da linha de cada erro.`,
      gabarito: `O aluno mantém o Output aberto, identifica pelo menos uma linha vermelha e anota corretamente o número da linha indicado na mensagem. Espera-se que ele entenda que clicar na mensagem leva direto ao ponto do erro no script, sem ainda precisar corrigir nada.`,
    },
    {
      titulo: `Conserto de bug de script`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor um erro de digitação simples (ex.: "prnit" no lugar de "print", ou um nome de objeto escrito errado). Clique na linha vermelha do Output, conserte e aperte Play. Reforce a regra "muda uma coisa só e testa de novo" e a atenção a letras maiúsculas e minúsculas.`,
      atividade: `No seu jogo ou no de exemplo, escolha um erro vermelho do Output. Clique na mensagem para abrir o script na linha certa, corrija a palavra ou o nome escrito errado e aperte Play para confirmar que o erro sumiu.`,
      gabarito: `O aluno corrige um erro de script de forma que a linha vermelha correspondente desaparece do Output ao apertar Play. Ele mudou apenas uma coisa antes de testar e consegue explicar que a maioria desses bugs é palavra digitada errada ou diferença entre maiúscula e minúscula.`,
    },
    {
      titulo: `Caça à colisão em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno joga o jogo do colega procurando lugares onde o personagem atravessa peças, cai do mapa ou fica preso; o outro anota. Mostre antes, no Explorer + Properties, onde fica a caixa CanCollide. Lembre de apertar Stop antes de editar.`,
      atividade: `Jogue o jogo do seu colega e procure bugs de colisão: lugares onde o jogador atravessa, prende ou cai pra fora. Anotem juntos. Depois, no próprio jogo, cada um conserta um desses bugs ajustando a propriedade CanCollide ou a posição da peça.`,
      gabarito: `A dupla encontra pelo menos um bug de colisão e o corrige marcando CanCollide na peça certa (ou reposicionando a peça) no painel Properties. Ao testar com Play, o jogador deixa de atravessar ou de prender naquele ponto. Os dois sabem dizer que CanCollide ligado funciona como parede sólida.`,
    },
    {
      titulo: `Desafio: o som que não obedece`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Use fones. Mostre no Explorer o objeto Sound e, no Properties, as propriedades SoundId, Playing, Looped e Volume. Apresente os três defeitos típicos: não toca (SoundId vazio ou Volume 0), repete sem parar (Looped marcado quando não deveria) ou toca na hora errada. Deixe o aluno diagnosticar antes de dar a resposta.`,
      atividade: `No seu jogo, encontre um bug de som: a música ou a voz da IA não toca, repete sem parar ou toca na hora errada. Descubra a causa olhando as propriedades do objeto Sound (SoundId, Volume, Playing, Looped) e corrija para o som ficar do jeito certo.`,
      gabarito: `O aluno identifica a causa do bug de som e a corrige: preenche o SoundId que faltava, ajusta o Volume acima de zero, desmarca Looped quando o som não devia repetir ou acerta onde o som é disparado. Ao testar com Play e fone, o som toca corretamente, sem repetição indesejada.`,
    },
    {
      titulo: `Projeto curto: relatório de caça e roda de conversa`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça que cada aluno faça uma rodada completa de teste no próprio jogo e preencha um mini-relatório com três colunas: bug encontrado, família (script, colisão ou som) e o que foi feito para corrigir. Nos minutos finais, conduza a roda em que cada um mostra o jogo rodando sem o pior bug. Lembre todos de salvar com Ctrl + S.`,
      atividade: `Jogue seu jogo do início ao fim procurando bugs. Anote num mini-relatório pelo menos três bugs (de script, colisão e som), classifique cada um e corrija os que conseguir. Depois, na roda, apresente em 30 segundos o bug mais difícil e mostre o jogo funcionando sem ele.`,
      gabarito: `O relatório lista pelo menos três bugs corretamente classificados nas famílias script, colisão e som, com a correção aplicada descrita em cada caso. Na roda, o aluno demonstra o jogo rodando sem o bug mais grave e explica o ciclo que usou: testar, ler o Output, achar a causa e corrigir uma coisa de cada vez. O projeto é salvo com Ctrl + S, pronto para a Aula 7 (polir e balancear).`,
    },
  ],
};
