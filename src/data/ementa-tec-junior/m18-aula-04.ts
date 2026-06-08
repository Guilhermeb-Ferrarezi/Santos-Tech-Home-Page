import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Bateu, Aconteceu!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança programa a colisão entre o herói e os inimigos e ajusta a dificuldade do jogo para ele ficar divertido, nem fácil demais nem impossível.`,
  descricao: `Nesta aula chega o momento mais esperado de qualquer jogo: o que acontece quando o herói e o inimigo se encostam? Até agora os inimigos já estavam na tela e se mexendo, mas eles só passavam pelo herói como se fossem fantasminhas, sem nada acontecer. Hoje a turma faz a mágica de verdade: quando bater, alguma coisa acontece. É a aula do "Bateu, aconteceu!".

O assunto central é a colisão. Colidir é só uma palavra grande para uma coisa simples: dois objetos se tocando. No Construct 3, a gente ensina o jogo a ficar de olho nesse toque e a fazer uma coisa quando ele acontece. Pode ser o herói perder uma vida, pode ser o inimigo desaparecer (derrotado), ou os dois ao mesmo tempo. Quem decide é a criança, e essa decisão é o coração do jogo dela.

A segunda parte da aula é tão importante quanto a primeira: equilibrar a dificuldade. Um jogo bom não é fácil demais (aí fica chato e ninguém quer jogar) nem difícil demais (aí ninguém consegue e todo mundo desiste). A criança vira a chefe do desafio: ela escolhe quantos inimigos aparecem, qual a velocidade deles e o que acontece no choque. Mexendo nesses três botões, ela acha o ponto certinho onde o jogo fica gostoso de jogar.

Na prática, o professor vai mostrar onde clicar no Construct 3 para criar o evento de colisão, deixar cada criança montar o seu e depois testar muitas vezes. Testar, ajustar, testar de novo: é assim que os profissionais fazem os jogos do mundo inteiro. No fim, a turma joga o jogo dos colegas e dá dicas de como deixar o desafio ainda mais divertido.`,
  materiais: [
    `Um computador por criança com o Construct 3 já aberto no projeto do jogo da turma, com o herói, os inimigos e o evento de mexer dos inimigos prontos da aula anterior.`,
    `Projetor ou TV grande ligada ao computador do professor, para todos verem a demonstração na tela cheia.`,
    `Um projeto de exemplo já pronto e salvo, com a colisão funcionando, para o professor mostrar o resultado final logo no começo.`,
    `Duas versões do jogo de exemplo: uma fácil demais (1 inimigo bem devagar) e uma impossível (muitos inimigos super rápidos), para a turma sentir a diferença e entender o equilíbrio.`,
    `Cartões com os três "botões da dificuldade" desenhados: quantidade de inimigos, velocidade e o que acontece no choque.`,
    `Adesivos ou carimbos de "Programador de Colisão" para premiar quem fizer o seu evento funcionar.`,
    `Um bichinho de pelúcia ou dois bonecos para encenar a colisão com as mãos na roda de conversa.`,
  ],
  conceitosChave: [
    `Colisão — o momento em que dois objetos se encostam na tela, como o herói batendo no inimigo.`,
    `Evento — uma regrinha do tipo "quando isso acontecer, faça aquilo"; é assim que a gente conversa com o jogo.`,
    `Condição — a parte do evento que fica de olho esperando algo acontecer (por exemplo, "quando o herói tocar no inimigo").`,
    `Ação — a parte do evento que faz a coisa acontecer depois do toque (perder vida, sumir com o inimigo).`,
    `Vida — os pontinhos de energia do herói; quando acabam, o jogo termina (game over).`,
    `Dificuldade — o tamanho do desafio do jogo; a gente deixa mais fácil ou mais difícil mudando os inimigos.`,
    `Equilíbrio — o ponto certinho em que o jogo não é fácil demais nem difícil demais, ficando divertido de jogar.`,
  ],
  treinamento: `## O que o professor precisa saber

No Construct 3, tudo o que o jogo faz é programado na aba "Event Sheet" (a Folha de Eventos), que fica numa abinha no alto da tela ao lado da aba "Layout". Cada linha dessa folha é um evento, montado como uma frase: tem uma "condição" (o gatilho, fundo azul) e uma "ação" (o que fazer, à direita). Para a colisão, usamos uma condição especial chamada "On collision with another object" (ao colidir com outro objeto). Ela dispara no exato instante em que dois objetos se tocam.

O caminho é: na Event Sheet, clique em "Add event", clique no objeto do herói (Player), procure na lista a condição "On collision with another object", escolha o inimigo (Enemy) e confirme. Agora adicione a ação clicando no "Add action" daquele evento: para sumir com o inimigo, escolha o Enemy e a ação "Destroy"; para tirar vida, escolha o Player (ou uma variável de vida) e use "Subtract from" na vida. Você não precisa dominar o Construct 3 inteiro; precisa só montar esse evento com calma e saber repeti-lo.

Para a dificuldade, há três botões fáceis de mexer: a quantidade de inimigos (quantos foram colocados no Layout ou são criados), a velocidade deles (a propriedade "Speed" do comportamento de movimento, no painel "Properties" à esquerda) e o que acontece no choque (Destroy, tirar vida, ou os dois). Mexa nesses três e teste sempre com o botão de "Preview" (o triângulo de play, no alto à direita).

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Construct 3)

10 min, aquecimento e revisão: Mostre no projetor as duas versões do jogo de exemplo. Deixe a turma jogar 1 minuto a fácil demais ("que sono!") e 1 minuto a impossível ("que raiva!"). Pergunte qual foi mais divertida. Encene com dois bonecos uma batida e pergunte: "Quando eles se encostam, o que deveria acontecer?". Relembre que os inimigos já se mexem desde a aula passada.

15 min, conteúdo novo guiado: Com a tela no projetor, abra a aba "Event Sheet". Diga cada passo em voz alta: "Clico em Add event, clico no Player, escolho On collision with another object, escolho o Enemy". Depois "Add action, escolho o Enemy, escolho Destroy". Clique em "Preview" e mostre o inimigo sumindo ao bater. Comemore: "Bateu, aconteceu!". Mostre também a versão de tirar vida.

25 min, mão na massa: Cada criança no seu computador. Guie pelo mesmo caminho, devagar, repetindo bem alto. Passe nas mesas apontando o mouse e conferindo se escolheram Player e Enemy certos. Quando o evento funcionar, entregue o adesivo de "Programador de Colisão". Em seguida, deixe cada uma virar a chefe do desafio: mexer na velocidade dos inimigos (Properties, Speed) e na quantidade, testando com Preview até achar o equilíbrio.

10 min, desafio e compartilhar: Lance o desafio "deixe o seu jogo divertido, nem fácil nem impossível". Depois, faça um rodízio: cada criança joga o jogo do colega ao lado por 1 minuto e dá uma dica gentil de dificuldade. Comemorem juntos os jogos que ficaram no ponto certo.

## Como explicar para crianças

Use a analogia do toque: "Colidir é só os dois se encostando, igual quando você esbarra num amigo". Chame o evento de "regrinha mágica": "A gente vai ensinar uma regrinha pro jogo: quando o herói encostar no inimigo, plim, acontece!". Para a vida, mostre os corações na tela e diga "cada batida tira um coraçãozinho". Para o equilíbrio, fale dos três botões mágicos (quantos inimigos, quão rápido, o que acontece) e diga que a criança é a chefe que gira esses botões até o jogo ficar gostoso. Fale pouco e mostre muito: faça você primeiro, no projetor, e só então peça que repitam.

## Erros comuns e como ajudar

Escolher o objeto errado no evento (clicar no Enemy onde era o Player): aproxime-se e confira juntos qual objeto está na condição. Esquecer a ação e só pôr a condição (aí nada acontece ao bater): mostre que todo evento precisa de um "fazer" no lado direito. Botar a ação Destroy no objeto errado e sumir com o herói sem querer: ria junto, desfaça com Ctrl+Z e corrija. Não testar e ficar mexendo no escuro: ensine a clicar em "Preview" toda vez para ver o resultado. Deixar o jogo impossível (muitos inimigos rapidíssimos): lembre o ponto do equilíbrio e ajude a baixar a velocidade ou a quantidade. Frustração quando não funciona de primeira: comemore cada tentativa e lembre que testar e ajustar é exatamente o que os criadores de jogos fazem.`,
  exercicios: [
    {
      titulo: `Fácil, Impossível ou no Ponto?`,
      tipo: `jogo / observação`,
      tempo: `7 minutos`,
      guiaProfessor: `No projetor, mostre as três versões do jogo de exemplo: a fácil demais, a impossível e a equilibrada. Deixe a turma jogar um pouquinho cada uma. Conduza a conversa perguntando qual foi chata, qual deu raiva e qual foi divertida, ligando isso à ideia de equilíbrio.`,
      atividade: `A criança experimenta as três versões e diz qual delas ela achou mais divertida e por quê, usando as palavras "fácil demais", "impossível" e "no ponto".`,
      gabarito: `Acerta quem aponta a versão equilibrada como a mais divertida e percebe que a fácil é entediante e a impossível é frustrante. Qualquer explicação com sentido (por exemplo "a do meio foi melhor porque dava pra ganhar mas era difícil") conta como certo.`,
    },
    {
      titulo: `Quando Bater, o Que Acontece?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda com dois bonecos na mão. Encene a colisão batendo um boneco no outro e pergunte o que poderia acontecer no jogo. Anote no quadro as ideias (perder vida, inimigo sumir, ganhar ponto). Conduza para as duas opções da aula: perder vida ou derrotar o inimigo.`,
      atividade: `Cada criança diz uma coisa que poderia acontecer quando o herói bate no inimigo e escolhe o que ela quer no jogo dela: perder vida, derrotar o inimigo, ou os dois.`,
      gabarito: `Acerta quem dá uma consequência coerente para o choque (perder vida, o inimigo sumir, game over) e faz a sua escolha. Não existe resposta única; vale qualquer ideia que faça sentido para uma batida no jogo.`,
    },
    {
      titulo: `Minha Primeira Colisão`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre primeiro no projetor, bem devagar, dizendo cada clique: Add event, Player, On collision with another object, Enemy, depois Add action, Enemy, Destroy. Libere as crianças para fazerem no próprio computador. Passe nas mesas conferindo se escolheram Player e Enemy certos e ajude a clicar em Preview para testar.`,
      atividade: `A criança monta na Event Sheet o evento de colisão entre o herói e o inimigo e escolhe uma ação (sumir com o inimigo ou tirar uma vida), depois testa no Preview até ver o efeito acontecer ao bater.`,
      gabarito: `Acerta quando, ao jogar o Preview e encostar o herói no inimigo, algo acontece de verdade: o inimigo é destruído ou a vida diminui. Se a batida gera um efeito visível, está certo, mesmo que tenha precisado de ajuda no caminho.`,
    },
    {
      titulo: `Os Três Botões da Dificuldade`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor os três botões: quantidade de inimigos, velocidade (Properties, Speed) e o que acontece no choque. Demonstre deixando o jogo bem fácil e depois bem difícil. Peça que cada criança experimente mudar a velocidade e a quantidade, testando no Preview a cada mudança. Ajude quem deixar impossível a reduzir os números.`,
      atividade: `A criança muda a velocidade dos inimigos e a quantidade deles, testa no Preview pelo menos duas configurações diferentes (uma mais fácil e uma mais difícil) e diz qual ficou melhor.`,
      gabarito: `Acerta quem consegue deixar o jogo visivelmente mais fácil em uma tentativa e mais difícil em outra, e percebe a diferença ao testar. Se a criança altera a velocidade ou a quantidade e nota a mudança no jogo, o objetivo foi cumprido.`,
    },
    {
      titulo: `Desafio do Jogo no Ponto Certo`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio final: ajustar o próprio jogo para ele ficar nem fácil nem impossível. Depois organize um rodízio em que cada criança joga o jogo do colega por 1 minuto e dá uma dica gentil ("acho que dá pra deixar um pouquinho mais rápido"). Termine com a turma comemorando os jogos equilibrados.`,
      atividade: `Cada criança equilibra o seu jogo mexendo nos três botões (quantidade, velocidade e o que acontece no choque), depois joga o jogo de um colega e dá uma dica para melhorar a dificuldade dele.`,
      gabarito: `Acerta quem entrega um jogo em que dá para jogar com algum desafio (não ganha sozinho nem perde na hora) e oferece uma dica coerente ao colega. Se o colega consegue jogar e se divertir, e a dica faz sentido, o desafio está concluído.`,
    },
  ],
};
