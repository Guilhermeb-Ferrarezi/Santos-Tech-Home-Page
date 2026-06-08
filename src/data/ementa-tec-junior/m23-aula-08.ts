import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Jogo Jogável e Pronto!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança finaliza, testa do início ao fim e garante que o seu jogo 3D no Roblox está jogável e divertido, encerrando com uma mostra em que a turma joga as criações dos colegas.`,
  descricao: `Esta é a aula que fecha o mês inteiro de trabalho no Roblox Studio. Durante quatro semanas as crianças trouxeram os modelos 3D que fizeram no Maya, montaram o cenário, escolheram onde o jogador nasce, espalharam moedas e obstáculos, criaram as regras, os pontos e a vitória, e deixaram tudo mais divertido. Agora chegou o momento de juntar todas essas peças e dizer com orgulho: "Meu jogo está pronto e dá para jogar!".

O coração da aula é o teste do início ao fim. Cada criança vai apertar o botão "Play" e jogar o próprio jogo como se fosse um visitante que nunca o viu antes: nascer no lugar certo, andar pelo cenário, pegar as moedas, desviar dos obstáculos, ganhar pontos e chegar até a vitória. Esse percurso completo é o que chamamos de "jogada inteira". Se em algum ponto o jogo trava, a moeda não some ou o jogador cai para fora do mundo, a criança anota e conserta. É um trabalho de detetive: testar, achar o probleminha e ajeitar.

Depois de cada um deixar o seu jogo redondinho, vem a parte mais esperada: a Mostra de Jogos. As crianças trocam de cadeira (ou o professor projeta um jogo de cada vez) e jogam as criações dos colegas. Quem criou observa o amigo jogando e descobre coisas preciosas: onde o outro se perdeu, o que achou divertido, o que ficou fácil ou difícil demais. Ver outra pessoa jogar o seu jogo é a melhor forma de aprender se ele está bom.

Nenhum conteúdo novo de programação entra aqui. A aula é de polimento, teste e celebração. O professor age como um treinador que ajuda cada criança a salvar o trabalho, testar com calma e ter orgulho do que construiu. No final, todo aluno sai com um jogo 3D completo, testado e jogado pelos colegas: o entregável do mês está conquistado.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e o jogo de cada criança já carregado na tela`,
    `Projetor ou TV grande para a Mostra de Jogos, mostrando um jogo de cada vez para a turma`,
    `Exemplo pronto: um joguinho simples do professor, já testado, para mostrar como é uma "jogada inteira"`,
    `Lista de verificação impressa (checklist) com os itens "nasce, anda, pega moeda, desvia, ganha ponto, vence"`,
    `Adesivos ou carimbos de "Jogo Pronto" para premiar cada criança que finalizar o teste`,
    `Cartão de comentário gentil (uma carinha feliz e um espaço para "o que eu mais gostei") para a Mostra`,
    `Cronômetro ou ampulheta visível para organizar a vez de cada um na Mostra de Jogos`,
  ],
  conceitosChave: [
    `Jogo jogável — um jogo que a pessoa consegue começar, jogar até o fim e ganhar sem ele travar.`,
    `Jogada inteira — testar o jogo do começo ao fim, do nascer do jogador até a vitória.`,
    `Testar — jogar o próprio jogo procurando o que não está funcionando direito, igual a um detetive.`,
    `Polir — dar os últimos ajustes para o jogo ficar mais bonito, justo e divertido.`,
    `Salvar — guardar o jogo no computador para o trabalho não se perder.`,
    `Mostra de Jogos — momento em que a turma joga as criações uns dos outros e elogia.`,
    `Comentário gentil — falar algo bom e útil sobre o jogo do amigo, sem machucar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para conduzir esta aula: ela é de teste e celebração, não de programação nova. O passo técnico mais importante é cada criança conseguir abrir o jogo, testar e salvar. No Roblox Studio, o jogo de cada aluno aparece na tela inicial em "My Games" (Meus Jogos) ou em "Recent" (Recentes); um duplo clique no quadradinho com o nome abre o projeto. Para testar, clique no botão azul "Play" (um triângulo) no topo, na aba "Home" ou "Test"; para parar, clique no quadrado vermelho "Stop". Para salvar, use o menu "File" (Arquivo) e clique em "Save to Roblox" (salvar na nuvem) ou aperte Ctrl+S. Deixe TODOS os jogos abertos antes da aula para não perder tempo.

A grande ideia é a "jogada inteira": jogar do nascer do personagem até a vitória, conferindo cada item da lista. Escreva no quadro o checklist: nasce no lugar certo, anda pelo cenário, pega a moeda, desvia do obstáculo, ganha ponto, chega à vitória. Cada item conferido vira um "joinha".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma em roda. Diga que hoje é o grande dia de deixar o jogo PRONTO e mostrar para os amigos. Faça uma revisão relâmpago: aponte para o checklist no quadro e pergunte "o que um jogo precisa ter para a gente conseguir jogar?". Deixe as crianças responderem (moeda, obstáculo, ponto, vitória). Mostre rapidamente o "Play" azul e o "Stop" vermelho na sua tela.

Conteúdo novo guiado (15 min): Faça VOCÊ uma "jogada inteira" no projetor com o joguinho-exemplo. Aperte o "Play" azul, jogue narrando em voz alta: "Olha, eu nasci aqui, agora ando, peguei a moeda, desviei do obstáculo, ganhei ponto e venci!". Pare no "Stop". Depois mostre de propósito um probleminha (por exemplo, uma moeda que não some) e diga "isso é um bug; vamos consertar". Mostre como salvar com Ctrl+S ou "File > Save to Roblox". Repita o checklist com a turma como uma musiquinha.

Mão na massa (25 min): Cada criança abre o próprio jogo, aperta "Play" e faz a jogada inteira com o checklist na mão, marcando cada item que funciona. Onde algo falhar, ajuda a criança a achar e ajeitar (mover um bloco, reposicionar o ponto de nascimento, conferir a moeda). Circule pela sala, computador por computador. Quando o jogo passar em todos os itens, a criança salva (Ctrl+S) e ganha o carimbo "Jogo Pronto". Quem terminar antes ajuda um colega ou melhora um detalhe visual.

Desafio e compartilhar (10 min): A Mostra de Jogos. Projete (ou troque os alunos de lugar) um jogo de cada vez. A turma joga ou assiste e cada um diz um comentário gentil: "o que eu mais gostei foi...". Termine com aplausos para todos e a frase coletiva: "Meu jogo está jogável e pronto!".

## Como explicar para crianças

Use a analogia do brinquedo: "Quando montamos um brinquedo, antes de dar para um amigo a gente testa para ver se funciona. Hoje testamos o nosso jogo do mesmo jeito." Chame o teste de "trabalho de detetive": procurar o probleminha escondido (o bug) e consertar. Diga que "jogar do começo ao fim" é fazer a jogada inteira, igual a comer toda a comida do prato. Explique salvar como "guardar o desenho na gaveta para não perder". Na Mostra, ensine o comentário gentil: sempre começar com algo bom.

## Erros comuns e como ajudar

A criança esquece de salvar e perde o trabalho: lembre o Ctrl+S no início e no fim, e salve junto com ela. O jogador nasce no lugar errado ou cai do mundo: confira o ponto de nascimento (SpawnLocation) e mostre como movê-lo para cima do chão. A moeda não some ou o ponto não conta: jogue junto e veja se o item está nomeado e posicionado certo; muitas vezes é só reposicionar. A criança quer adicionar coisas novas em vez de testar: combine que hoje só finalizamos e jogamos, sem inventar mais. Na Mostra, alguém fala algo mal do jogo do colega: relembre o comentário gentil e dê o exemplo começando com um elogio. A criança tímida não quer mostrar: jogue o jogo dela você mesmo no projetor, elogiando, para ela ganhar coragem.`,
  exercicios: [
    {
      titulo: `Revisão do checklist do jogo`,
      tipo: `Dinâmica em roda`,
      tempo: `5 minutos`,
      guiaProfessor: `Em roda, aponte o checklist no quadro (nasce, anda, pega moeda, desvia, ganha ponto, vence). Pergunte item por item "o jogo precisa disso?". Deixe as crianças responderem em voz alta. Serve para relembrar o que torna um jogo jogável.`,
      atividade: `Olhe para a lista no quadro e diga em voz alta tudo o que um jogo precisa ter para a gente conseguir jogar até o fim: nascer, andar, pegar moeda, desviar, ganhar ponto e vencer.`,
      gabarito: `A criança nomeia os seis itens do checklist com ajuda. Acerto = entender que jogável é começar, jogar e vencer sem travar. Exemplo: "Precisa de um lugar para nascer, moeda para pegar e um jeito de ganhar".`,
    },
    {
      titulo: `Salvar o meu jogo`,
      tipo: `Prática no Roblox Studio`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o caminho "File > Save to Roblox" e o atalho Ctrl+S. A criança salva o próprio jogo. Reforce que salvar guarda o trabalho para não se perder. Deixe os jogos já abertos antes da aula.`,
      atividade: `No seu computador, aperte as teclas Ctrl e S juntas para salvar o seu jogo. Se aparecer uma janelinha, clique em "Save" (Salvar). Pronto, o seu trabalho está guardado!`,
      gabarito: `A criança salva o jogo usando Ctrl+S ou o menu "File > Save to Roblox". Acerto = entender que salvar guarda o trabalho. Erro comum: esquecer de confirmar na janelinha; basta clicar em "Save".`,
    },
    {
      titulo: `A jogada inteira`,
      tipo: `Teste guiado no Roblox Studio`,
      tempo: `12 minutos`,
      guiaProfessor: `A criança aperta o "Play" azul e joga do começo ao fim com o checklist na mão, marcando cada item que funciona. Circule e ajude a achar e ajeitar qualquer falha. Ao passar em tudo, salva e ganha o carimbo "Jogo Pronto".`,
      atividade: `Aperte o botão azul "Play" e jogue o seu jogo do começo até o fim: nasça, ande, pegue uma moeda, desvie de um obstáculo, ganhe um ponto e vença. Marque na lista cada coisa que funcionou.`,
      gabarito: `A criança completa a jogada inteira marcando os seis itens; o que falhar é consertado com ajuda. Acerto = o jogo começa, dá para jogar e tem como vencer. Exemplo: nasce no chão, pega a moeda que some, o ponto sobe e aparece a vitória.`,
    },
    {
      titulo: `Detetive de bugs`,
      tipo: `Resolução de problema`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que a criança encontre um probleminha (bug) no próprio jogo durante o teste e o conserte: jogador caindo do mundo, moeda que não some, obstáculo no lugar errado. Ajude a mover blocos e reposicionar o ponto de nascimento. Dificuldade maior porque exige achar a causa.`,
      atividade: `Vire um detetive: jogue de novo e encontre uma coisa que não está funcionando direito no seu jogo. Conserte essa coisa (mexa no bloco, na moeda ou no lugar onde você nasce) e teste outra vez para ver se ficou bom.`,
      gabarito: `A criança identifica um bug e aplica uma correção, testando de novo para confirmar. Acerto = o problema some depois do conserto. Exemplo: o jogador nascia dentro de uma parede; ela move o ponto de nascimento (SpawnLocation) para cima do chão e agora nasce certo.`,
    },
    {
      titulo: `Mostra de Jogos e comentário gentil`,
      tipo: `Apresentação e jogo coletivo`,
      tempo: `10 minutos`,
      guiaProfessor: `Projete ou troque os alunos de lugar; cada jogo é jogado pela turma um de cada vez. Cada criança escreve ou diz um comentário gentil começando por um elogio. Reforce a regra de só falar coisas boas e úteis. É o fechamento celebrativo do mês.`,
      atividade: `Jogue o jogo de um colega e depois diga ou escreva um comentário gentil no cartão, começando com "O que eu mais gostei foi...". Termine batendo palmas para o amigo.`,
      gabarito: `A criança joga o jogo de outro e oferece um comentário gentil que começa com um elogio. Acerto = falar algo bom e específico, sem machucar. Exemplo: "O que eu mais gostei foi a moeda dourada que brilha e o pulo bem alto".`,
    },
  ],
};
