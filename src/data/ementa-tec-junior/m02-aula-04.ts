import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "O Jogo que Toma Decisões",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a criar uma regra com dois caminhos usando o "se... senão...", de modo que o jogo dê uma resposta quando ela acerta o bloco certo e outra resposta quando ela erra.`,
  descricao: `Na aula passada as crianças descobriram o "se... então...": uma regra que faz algo acontecer SÓ quando uma condição é verdadeira. Hoje a gente dá o próximo passinho e ensina o "senão". O "senão" é o outro caminho da regra: ele diz o que acontece quando a condição NÃO é verdadeira. Assim o jogo passa a ter dois finais possíveis em vez de um só.

Por que isso importa? Porque é exatamente assim que os jogos de verdade tomam decisões. Quando você acerta o alvo, ganha pontos; senão, não ganha nada. Quando o personagem pega a chave certa, a porta abre; senão, ela continua trancada. Esse pensamento de "ou isto, ou aquilo" é uma das ideias mais poderosas da programação, e crianças de 5 a 9 anos conseguem entender muito bem quando a gente mostra os dois caminhos lado a lado.

Na prática de hoje, cada aluno vai montar no MakeCode uma regra simples ligada a quebrar (minerar) um bloco no Minecraft. A regra vai dizer: SE o bloco quebrado for o bloco certo (por exemplo, ouro), ENTÃO o jogador ganha um prêmio (uma maçã, ou um efeito divertido); SENÃO, ele recebe outra coisa (uma mensagem ou um bloco diferente). Depois eles vão testar de verdade no mundo, quebrando os dois tipos de bloco para ver os dois caminhos funcionarem.

O segredo da aula é o TESTE das duas situações. Não basta montar a regra: a criança precisa quebrar o bloco certo e ver o prêmio, e depois quebrar o bloco errado e ver a outra resposta. Quando ela vê os dois caminhos acontecendo com os próprios olhos, ela entende de verdade o que o "senão" faz.`,
  materiais: [
    `Computadores (um por aluno) com Minecraft Education ou Bedrock + Code Connection já abertos e conectados ao MakeCode.`,
    `Um mundo de teste já criado e plano (modo Criativo), com o professor e os alunos no mesmo padrão, para não perder tempo gerando mundo.`,
    `Projetor ou TV espelhando a tela do professor para a demonstração guiada.`,
    `Arquivo de exemplo pronto do professor: um projeto MakeCode com a regra "se... senão..." já montada, para mostrar funcionando e para socorro.`,
    `Folhas de desenho e lápis de cor para a atividade de papel (dois caminhos: prêmio e não-prêmio).`,
    `Dois blocos de referência impressos ou desenhados grandes (por exemplo, "bloco de ouro" e "bloco de terra") para usar no aquecimento.`,
    `Lista com os nomes dos blocos que serão usados, para o professor não esquecer na hora de configurar o evento.`,
  ],
  conceitosChave: [
    `Se (condição) — uma pergunta que só tem duas respostas: sim ou não. Exemplo: "esse é o bloco de ouro?".`,
    `Então — o que o jogo faz quando a resposta da pergunta é SIM.`,
    `Senão — o caminho de reserva: o que o jogo faz quando a resposta é NÃO.`,
    `Dois caminhos — toda regra "se... senão..." tem dois finais; o jogo escolhe um dependendo do que aconteceu.`,
    `Condição — a coisa que a gente testa para saber qual caminho seguir (qual bloco foi quebrado).`,
    `Prêmio — a recompensa que aparece quando a criança acerta a condição (ganha uma maçã, um efeito, uma mensagem feliz).`,
    `Testar — quebrar os dois tipos de bloco para ver, com os próprios olhos, os dois caminhos da regra acontecendo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

O coração desta aula é um bloco do MakeCode chamado "if... else" (em português, "se... senão"). Na aula 3 a turma usou só o "se... então": uma regra de um caminho só. Hoje a gente abre o lado "senão" do mesmo bloco, e ele passa a ter DOIS caminhos. O jogo testa uma condição: se ela for verdadeira, executa o que está na parte de cima (então); se for falsa, executa o que está na parte de baixo (senão). Nunca os dois ao mesmo tempo: sempre um ou o outro.

A base técnica que você usa é um evento de mundo. No MakeCode, na categoria "Player" (Jogador), existe o evento "on block broken" / "ao quebrar bloco". Esse evento dispara toda vez que alguém quebra (minera) um bloco. Dentro dele você coloca o bloco "if... else" da categoria "Logic" (Lógica). A condição que vai dentro do "if" é uma comparação: você pega o bloco "block is" / "o bloco é igual a" e compara o bloco quebrado com o bloco que você escolheu (ex.: bloco de ouro). Na parte "então" você dá o prêmio (ex.: comando "give"/"dar" uma maçã, ou "say"/"dizer" uma mensagem). Na parte "senão" você coloca a outra resposta (ex.: dizer "Tente o bloco dourado!").

Antes da aula, monte e TESTE você mesmo o exemplo. Conecte o Minecraft ao MakeCode pelo Code Connection (no Minecraft, abra o chat e digite o comando de conexão que o Code Connection mostra). Tenha o mundo plano em Criativo, com os dois tipos de bloco na mão.

## Passo a passo da aula (ritmo 10/15/25/10)

 AQUECIMENTO (10 min): brinque do jogo dos dois caminhos sem computador. Levante o "bloco de ouro" e o "bloco de terra". Diga: "SE eu mostrar ouro, vocês pulam; SENÃO, vocês se abaixam." Faça várias rodadas, rápido e divertido. Eles vão sentir no corpo que toda regra tem dois caminhos.

CONTEÚDO NOVO GUIADO (15 min): no projetor, abra o MakeCode. Mostre a categoria "Player" e arraste "on block broken" / "ao quebrar bloco" para a área de trabalho. Depois abra "Logic" / "Lógica" e arraste o bloco "if... else" para dentro do evento. Aponte: "Olha, esse bloco tem dois andares: o de cima é o ENTÃO e o de baixo é o SENÃO." Encaixe a condição (o bloco quebrado é igual ao ouro). No então, coloque "say"/"dizer" "Você ganhou!"; no senão, "say"/"dizer" "Esse não é o certo!". Clique em rodar e demonstre quebrando os dois blocos no mundo.

MÃO NA MASSA (25 min): cada criança monta a sua. Faça em voz alta, um bloco de cada vez, esperando todos acompanharem. Passe de mesa em mesa. Quando alguém montar, peça para TESTAR os dois caminhos: quebrar o bloco certo (ver o prêmio) e o bloco errado (ver a outra mensagem). Quem terminar pode trocar a mensagem ou trocar o prêmio.

DESAFIO + COMPARTILHAR (10 min): desafie a trocar o prêmio do "então" por algo melhor (dar uma maçã com o comando "give"/"dar"). No fim, dois ou três alunos mostram a regra rodando no projetor, quebrando os dois blocos para a turma ver os dois caminhos.

## Como explicar para criancas de 5 a 9

Use a analogia da bifurcação: "A regra é uma estradinha que se divide em duas. Se você acertar o bloco, vai pelo caminho do prêmio. SENÃO, vai pelo outro caminho." Outra analogia: o porteiro. "Se você tem o crachá certo, ENTÃO entra; SENÃO, fica do lado de fora." Fale sempre "então" apontando para cima e "senão" apontando para baixo, do mesmo jeito que os dois andares do bloco aparecem na tela. Repita o mantra: "um OU o outro, nunca os dois juntos".

## Erros comuns e como ajudar

O erro mais comum é a criança colocar a ação FORA do bloco "if... else", então o prêmio sai sempre. Mostre que tudo precisa estar DENTRO do andar certo (encaixado, com o contorno por dentro). Outro erro: esquecer de configurar a condição (fica comparando com o bloco padrão errado) — confira junto qual bloco está escolhido. Muitos esquecem de clicar em rodar/baixar depois de mudar, e acham que não funcionou; lembre de sempre clicar em rodar. E vários testam só o caminho do prêmio: insista que eles quebrem TAMBÉM o bloco errado, senão não viram o "senão" funcionando.`,
  exercicios: [
    {
      titulo: `Pula ou Abaixa: o jogo dos dois caminhos`,
      tipo: `aquecimento / jogo de corpo`,
      tempo: `8 min`,
      guiaProfessor: `Antes de tocar no computador, faça a turma sentir o "se... senão..." com o corpo. Segure os dois blocos de referência (ouro e terra). Explique a regra uma vez bem devagar e depois acelere para virar brincadeira.`,
      atividade: `O professor levanta um bloco por vez. A regra é: SE aparecer o bloco de ouro, todos pulam; SENÃO (qualquer outro bloco), todos se abaixam. Faça umas 8 rodadas, misturando a ordem e aumentando a velocidade.`,
      gabarito: `A turma acertou quando pula só no ouro e se abaixa em todos os outros blocos, sem fazer as duas coisas juntas. Se alguém pular no bloco errado, repita devagar: "esse é ouro? Não? Então é o caminho do senão: abaixa."`,
    },
    {
      titulo: `Montando a regra dos dois caminhos`,
      tipo: `prática guiada na ferramenta`,
      tempo: `14 min`,
      guiaProfessor: `Conduza passo a passo, um bloco de cada vez, esperando todos no projetor. Diga onde clicar: categoria "Player" para "ao quebrar bloco", categoria "Lógica" para o "if... else". Mostre os dois andares (então em cima, senão embaixo).`,
      atividade: `Cada aluno arrasta "ao quebrar bloco" (Player), encaixa dentro o bloco "if... else" (Lógica) e configura a condição "o bloco quebrado é igual a ouro". No ENTÃO coloca dizer "Você ganhou!"; no SENÃO coloca dizer "Esse não é o certo!". Clica em rodar.`,
      gabarito: `Está correto quando a regra tem o "ao quebrar bloco" por fora, o "if... else" por dentro, a condição comparando com o ouro, e cada mensagem no andar certo. Ao rodar, sem erros vermelhos, a estrutura está pronta para testar.`,
    },
    {
      titulo: `Testando os dois finais no mundo`,
      tipo: `prática na ferramenta + teste`,
      tempo: `12 min`,
      guiaProfessor: `Agora o foco é TESTAR, não montar. Lembre que precisam quebrar os DOIS tipos de bloco. Passe de mesa em mesa e peça para a criança narrar o que vai acontecer antes de quebrar.`,
      atividade: `No mundo, cada aluno coloca um bloco de ouro e um bloco de terra lado a lado. Quebra o de ouro e observa a mensagem; depois quebra o de terra e observa a outra. Anota (ou conta para o professor) qual mensagem apareceu em cada um.`,
      gabarito: `Acertou quem viu "Você ganhou!" ao quebrar o ouro e "Esse não é o certo!" ao quebrar a terra. Se a mesma mensagem aparecer nos dois, a ação está fora do "if... else" ou a condição está errada — corrija junto.`,
    },
    {
      titulo: `Desenhando a bifurcação`,
      tipo: `desenho / papel`,
      tempo: `8 min`,
      guiaProfessor: `Atividade calma para fixar a ideia dos dois caminhos longe da tela. Desenhe no quadro um exemplo: uma estradinha que se divide em dois, com uma pergunta no meio.`,
      atividade: `Cada criança desenha uma estrada que se divide em dois caminhos. No meio escreve ou desenha a pergunta ("é o bloco de ouro?"). Num caminho desenha o PRÊMIO (então) e no outro desenha a OUTRA resposta (senão).`,
      gabarito: `O desenho está certo se tiver uma pergunta no meio e dois caminhos diferentes saindo dela: um com o prêmio (sim/então) e outro com a outra coisa (não/senão). Os dois caminhos precisam ser diferentes entre si.`,
    },
    {
      titulo: `Desafio: troca o prêmio e mostra`,
      tipo: `desafio + compartilhar`,
      tempo: `10 min`,
      guiaProfessor: `Para quem terminou, suba o nível: trocar a mensagem do "então" por um prêmio de verdade. Mostre no projetor onde fica o comando "dar"/"give". No fim, escolha 2 ou 3 alunos para apresentar.`,
      atividade: `No andar do ENTÃO, troque o "dizer" por "dar/give" uma maçã (ou outro item) ao jogador. Rode e teste de novo os dois blocos. Depois, apresente para a turma quebrando o ouro (ganha o item) e a terra (recebe a outra resposta).`,
      gabarito: `Concluiu quem, ao quebrar o ouro, recebe o item no inventário (prêmio de verdade) e, ao quebrar a terra, recebe a outra resposta — provando que os dois caminhos do "se... senão..." funcionam. Na apresentação, os dois finais devem aparecer.`,
    },
  ],
};
