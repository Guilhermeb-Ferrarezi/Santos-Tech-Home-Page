import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Joga e Mostra!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza o seu jogo no Scratch, testa tudo do começo ao fim, brinca com o jogo dos colegas e apresenta a sua criação para a turma.`,
  descricao: `Esta é a última aula do mês e o grande dia de fechamento do projeto. Durante quatro semanas as crianças construíram um jogo no Scratch com regras de verdade: colisões que fazem coisas acontecerem, fases, vidas, fim de jogo, velocidade que aumenta e sorteios que deixam tudo diferente a cada partida. Agora chegou a hora de juntar tudo, dar os últimos ajustes e mostrar o resultado com orgulho.

O coração desta aula é o ritual do "joga e mostra". Primeiro cada criança testa o próprio jogo inteiro, como um detetive procurando o que ainda não funciona direito. Depois a turma faz um rodízio: cada um senta na cadeira do colega e brinca com o jogo dele, dando carinho e ideias. Por fim, cada criança apresenta a sua criação, conta o que mais gostou de fazer e mostra ao vivo o jogo rodando.

Por que isso importa tanto? Porque criar um jogo de verdade inclui testar, arrumar, compartilhar e celebrar. Apresentar o próprio trabalho desenvolve coragem, fala e orgulho saudável. Jogar o jogo do amigo ensina a observar, elogiar e dar sugestões gentis. Essa é a parte que transforma um monte de blocos coloridos em algo que dá para chamar de "o MEU jogo".

Nesta aula o professor é menos um instrutor de blocos novos e mais um mestre de cerimônias: você organiza o tempo, garante que cada jogo esteja salvo e jogável, conduz o rodízio com regras claras de gentileza e ajuda cada criança a brilhar na hora de apresentar. Não há conceito técnico novo pesado aqui; há consolidação, teste e celebração.`,
  materiais: [
    `Computadores ligados, um por criança, com o projeto Scratch de cada aluno já aberto (o mesmo arquivo das semanas anteriores).`,
    `Projetor ou TV grande para a hora das apresentações, ligado e testado antes da turma chegar.`,
    `Um cartão "Pronto pra Jogar" por criança (papel com três quadradinhos para marcar: começa, dá para jogar, tem fim) e lápis de cor.`,
    `Crachás ou plaquinhas com o nome de cada jogo, feitos rapidamente no início ou já prontos.`,
    `Adesivos ou carimbos de estrelinha para premiar quem testou e apresentou.`,
    `Um cronômetro grande visível (pode ser o do projetor) para marcar os tempos do rodízio.`,
    `Cópia de segurança: os projetos salvos no computador e, se possível, exportados em arquivo .sb3 numa pasta.`,
  ],
  conceitosChave: [
    `Testar — brincar com o jogo de propósito para descobrir o que está quebrado antes dos outros descobrirem.`,
    `Bug — um errinho no jogo, tipo um monstrinho escondido, que faz algo dar errado e que a gente conserta.`,
    `Salvar — guardar o jogo no computador para ele não sumir, clicando em Arquivo e depois em Salvar.`,
    `Bandeira verde — o botão que faz o jogo começar do zero; sempre clicamos nela para testar tudo de novo.`,
    `Apresentar — mostrar o seu jogo para os amigos e contar o que você fez, com a tela grande do projetor.`,
    `Elogio gentil — falar uma coisa boa do jogo do colega, como "eu adorei a sua fase azul".`,
    `Versão final — o jogo já pronto, testado e arrumado, do jeito que a gente quer mostrar para todo mundo.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Esta aula consolida o projeto do mês, então não há bloco novo para ensinar: o seu papel é ajudar cada criança a deixar o jogo jogável do começo ao fim e a apresentá-lo. Tecnicamente, você precisa dominar três ações simples no Scratch. Primeiro, a bandeira verde (ícone verde no topo direito do palco): ela reinicia o jogo e é a forma certa de testar tudo de novo. Segundo, salvar: menu "Arquivo" (canto superior esquerdo) e opção "Salvar agora" se estiver logado, ou "Salvar no seu computador" para baixar o arquivo .sb3. Terceiro, o modo de tela cheia: o ícone de quatro setinhas para fora, logo acima do palco, que aumenta o jogo para a apresentação no projetor. Um jogo "pronto" aqui significa: começa ao clicar na bandeira verde, dá para jogar com as setas ou o mouse, e tem um fim (ganhou, perdeu ou "Fim de Jogo"). Não persiga perfeição; persiga "funciona e é divertido".

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

Aquecimento (10 min): receba a turma com a tela grande mostrando um jogo simples rodando. Clique na bandeira verde na frente deles e pergunte: "O que acontece quando aperto aqui?". Relembre vidas, fim de jogo e velocidade das aulas anteriores. Anuncie o dia: "Hoje a gente termina, testa e MOSTRA o nosso jogo!".

Conteúdo guiado (15 min): no seu computador projetado, demonstre o ritual de teste. Clique na bandeira verde, jogue até o fim de propósito, e mostre como achar um "bug" (um monstrinho escondido). Demonstre salvar: clique em "Arquivo" e depois em "Salvar". Demonstre a tela cheia clicando nas quatro setinhas acima do palco. Entregue o cartão "Pronto pra Jogar" e explique os três quadradinhos: começa, dá para jogar, tem fim.

Mão na massa (25 min): cada criança testa o próprio jogo clicando na bandeira verde, marca os quadradinhos do cartão e arruma um errinho com a sua ajuda. Depois, faça o rodízio: ao seu sinal, todos levantam e sentam na cadeira da direita para jogar o jogo do colega por dois minutos; repita umas três vezes. Lembre a regra de ouro: "mão só no teclado, boca só pra elogio". Garanta que todos salvaram clicando em "Arquivo" e "Salvar".

Desafio e compartilhar (10 min): hora das apresentações. Chame as crianças uma a uma ao projetor. Cada uma clica na tela cheia, na bandeira verde, joga dez segundos e diz uma frase: "Meu jogo é o... e a parte que eu mais gostei foi...". A turma bate palma e você entrega a estrelinha. Encerre celebrando que todos terminaram o projeto do mês.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Para testar, use a ideia de detetive: "Vamos caçar os errinhos antes que eles façam bagunça". Chame bug de "monstrinho escondido" que a gente acha e arruma. Salvar é "guardar o jogo numa caixinha mágica para ele não fugir". A tela cheia é "deixar o jogo gigante para todo mundo ver". Apresentar é "ser o dono do cinema": você mostra o seu filme e todo mundo assiste. Para o rodízio, fale "cadeira musical dos jogos". Reforce sempre o elogio gentil com exemplos prontos: "eu adorei a cor", "que som legal", "a fase é difícil e divertida".

## Erros comuns e como ajudar

O erro mais comum é a criança esquecer de salvar e perder o trabalho; circule pela sala repetindo "Arquivo, Salvar" e confira você mesmo nos computadores. Outro é o jogo que não começa porque falta o bloco "quando a bandeira verde for clicada" no topo do script: peça para a criança arrastar esse bloco do painel "Eventos" e encaixar em cima. Na hora de apresentar, alguns ficam tímidos: dê uma única frase pronta para completar e apresente junto, com a mão no ombro. No rodízio, há quem queira mexer demais no jogo do colega; reforce "mão só no teclado". Por fim, evite o perfeccionismo de querer arrumar tudo: escolha com a criança UM errinho para consertar e celebre o que já está pronto.`,
  exercicios: [
    {
      titulo: `Caçada aos Errinhos`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Diga à turma que cada um vira detetive do próprio jogo. No seu computador projetado, mostre uma vez: clicar na bandeira verde, jogar até o fim e apontar uma coisa que está estranha. Depois solte as crianças para testarem o próprio projeto e ande pela sala ajudando a localizar e arrumar um errinho de cada vez.`,
      atividade: `Clique na bandeira verde do seu jogo e jogue do começo até o fim. Procure UM errinho (algo que não funciona como você quer). Mostre para o professor e, com a ajuda dele, arrume esse errinho. Depois clique na bandeira verde de novo para ver se ficou bom.`,
      gabarito: `A criança acertou se conseguiu jogar o jogo inteiro pelo menos uma vez, apontou um problema com palavras (mesmo simples, como "o gato não para") e, com ajuda, o jogo ficou jogável depois do ajuste. O sinal de sucesso é o jogo começar na bandeira verde e dar para brincar até algum tipo de fim.`,
    },
    {
      titulo: `Cartão Pronto pra Jogar`,
      tipo: `desenho/papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue o cartão com os três quadradinhos e explique cada um devagar, apontando: começa, dá para jogar, tem fim. Mostre no seu jogo projetado como cada item é verdadeiro ou não. Peça que marquem com X apenas o que já funciona e desenhem uma carinha do seu personagem no cantinho.`,
      atividade: `No seu cartão, teste o seu jogo e marque um X em cada coisa que já funciona: (1) o jogo COMEÇA quando clico na bandeira verde; (2) DÁ PARA JOGAR mexendo no personagem; (3) o jogo TEM FIM (ganha, perde ou aparece Fim de Jogo). Depois desenhe o seu personagem favorito no cantinho do cartão.`,
      gabarito: `O cartão está correto quando os quadradinhos marcados batem com a realidade do jogo ao ser testado na frente do professor. O ideal é os três marcados; se faltar algum, o professor usa o cartão para ajudar a criança a completar aquela parte. Sucesso é a criança saber dizer qual quadradinho ainda falta.`,
    },
    {
      titulo: `Cadeira Musical dos Jogos`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Organize as cadeiras para que dê para girar de lugar facilmente. Explique a regra de ouro antes de começar: "mão só no teclado, boca só pra elogio". Ao seu sinal, todos trocam de cadeira para a direita e jogam o jogo do colega por dois minutos. Use o cronômetro grande e faça umas três rodadas, sempre relembrando a gentileza.`,
      atividade: `Quando o professor der o sinal, levante e sente na cadeira da direita. Jogue o jogo do colega por dois minutinhos sem mexer nos blocos, só brincando. Antes de trocar de novo, fale UM elogio gentil para o dono do jogo, como "eu adorei a sua fase" ou "que som legal". Repita até voltar para a sua cadeira.`,
      gabarito: `Deu certo quando cada criança jogou pelo menos dois jogos diferentes, respeitou a regra de não mexer nos blocos e disse pelo menos um elogio gentil de verdade. O professor observa se houve cuidado com o trabalho do colega e fala respeitosa; esse é o sinal de acerto, não pontuação no jogo.`,
    },
    {
      titulo: `Roda do "Eu Mais Gostei"`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Junte a turma numa roda sentada no chão ou nas cadeiras viradas para o centro. Comece você dando o exemplo: "A parte que eu mais gostei de ver foi...". Passe a vez de um em um, garantindo que cada criança fale sem ser interrompida. Aceite respostas curtas e ajude os mais tímidos com perguntas como "foi a cor, o som ou a fase?".`,
      atividade: `Na roda, cada um fala em voz alta completando duas frases: "A parte que EU mais gostei de fazer no meu jogo foi..." e "A coisa mais legal que vi no jogo de um amigo foi...". Escute o colega sem interromper e bata palma quando ele terminar de falar.`,
      gabarito: `A atividade foi bem-sucedida quando todas as crianças completaram as duas frases, mesmo que de forma bem simples, e ouviram os colegas sem atrapalhar. Não há resposta certa ou errada de conteúdo; o acerto é participar falando e respeitar a vez do outro, demonstrando que reparou em algo do próprio jogo e no de um amigo.`,
    },
    {
      titulo: `O Dono do Cinema`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o ponto alto. Chame as crianças uma a uma ao computador ligado no projetor. Ajude cada uma a clicar no ícone de tela cheia (as quatro setinhas acima do palco) e na bandeira verde. Fique ao lado dando segurança, ofereça a frase pronta para completar e conduza as palmas da turma. Entregue a estrelinha ao final de cada apresentação.`,
      atividade: `Chegou a sua vez de ser o dono do cinema! Vá até o projetor, clique nas quatro setinhas para deixar o jogo gigante e clique na bandeira verde. Jogue por uns dez segundos mostrando para todo mundo e diga: "Meu jogo se chama... e a parte que eu mais gostei foi...". No final, agradeça e volte para o lugar.`,
      gabarito: `A apresentação está completa quando a criança deixou o jogo em tela cheia, fez o jogo começar na bandeira verde diante da turma, jogou alguns segundos e disse a frase com o nome do jogo e a parte favorita. O sucesso é a criança mostrar o jogo funcionando e falar sobre ele com orgulho, recebendo as palmas e a estrelinha dos colegas.`,
    },
  ],
};
