import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Mexe, Vira e Cresce",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança aprende a usar as três ações mágicas do Maya — mover, girar e escalar — para colocar uma forma 3D no lugar certo, virá-la para o lado que quiser e deixá-la maior ou menor.`,
  descricao: `Nas aulas anteriores as crianças conheceram o Maya, espiaram o mundo 3D e fizeram nascer formas básicas como o cubo, a bola e o tubo. Agora chegou a hora mais divertida: aprender a MEXER nessas formas. Nesta aula apresentamos as três ações mágicas que todo profissional de games usa o tempo todo — mover (levar a forma para outro lugar), girar (virar a forma para outro lado) e escalar (deixar a forma maior ou menor).

Por que isso importa? Porque uma forma parada no meio da tela não vira brinquedo nenhum. Para montar um carrinho, um robô ou um bichinho, a criança precisa pegar cada pecinha e colocá-la no lugar exato, virá-la na direção certa e ajustar o tamanho. Essas três ações são a base de tudo o que vem depois na trilha de criação de games. Quem domina mover, girar e escalar consegue construir qualquer coisa juntando formas simples.

O segredo desta aula são as setas e alças coloridas que aparecem grudadas na forma quando escolhemos cada ferramenta. São como puxadores mágicos: o vermelho mexe num sentido, o verde em outro e o azul em mais outro. A criança aprende a puxar esses puxadores devagar, uma cor de cada vez, sem bagunçar tudo de uma vez só.

O treino é guiado e tranquilo: o professor mostra primeiro, no projetor, e depois a turma repete uma ação de cada vez. Primeiro só mover, todo mundo junto. Depois só girar. Por último, só escalar. No final, cada criança brinca de levar sua forma para um lugar combinado, virá-la e mudar o tamanho — pronta para começar a montar brinquedos de verdade na próxima aula.`,
  materiais: [
    `Computadores ligados, um por criança, com o Maya já aberto e um projeto novo criado pelo professor antes da aula.`,
    `Projetor ou TV grande espelhando a tela do professor para demonstrar cada ação ao vivo.`,
    `Um arquivo de exemplo simples, salvo em cada máquina, contendo um cubo grande já criado no centro da cena (pronto para mover, girar e escalar).`,
    `Três cartões coloridos grandes (vermelho, verde e azul) para o professor mostrar de qual seta está falando.`,
    `Folhas de desenho e lápis de cor para a atividade de papel.`,
    `Adesivos ou carimbos de "joinha" para premiar quem conseguir colocar a forma no lugar combinado.`,
    `Um tapetinho ou alvo de papel colado na mesa de cada criança (um quadrado desenhado) para servir de "lugar combinado" no chão da cena.`,
  ],
  conceitosChave: [
    `Mover — pegar a forma e levá-la para outro lugar da tela, como arrastar um carrinho pelo chão.`,
    `Girar — virar a forma para outro lado sem sair do lugar, como rodar um pião.`,
    `Escalar — deixar a forma maior ou menor, como encher ou murchar um balão.`,
    `Setas coloridas — os puxadores que aparecem na forma; vermelho, verde e azul mandam em direções diferentes.`,
    `Ferramenta — o botão que a gente escolhe primeiro para decidir se vai mover, girar ou escalar.`,
    `Selecionar — clicar na forma uma vez para escolher quem vai obedecer antes de mexer.`,
    `Desfazer — o botão mágico (Ctrl + Z) que volta no tempo quando a forma vai parar no lugar errado.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

No Maya, qualquer objeto 3D pode sofrer três transformações básicas: translação (mover), rotação (girar) e escala (escalar). Cada uma tem uma ferramenta própria, com atalhos de teclado que vale a pena decorar: W = Mover (Move Tool), E = Girar (Rotate Tool), R = Escalar (Scale Tool). Quando você seleciona um objeto e ativa uma dessas ferramentas, aparece um "manipulador" colorido grudado no objeto. As cores seguem um padrão fixo: vermelho é o eixo X, verde é o eixo Y (altura) e azul é o eixo Z (profundidade). Para a criança, não fale "eixo" — fale "seta vermelha, verde e azul".

Antes da aula, abra o Maya, crie um projeto novo, faça um cubo (menu Create, Polygon Primitives, Cube) bem no centro e salve esse arquivo em cada máquina. Assim ninguém perde tempo criando forma; a aula é só sobre MEXER. Deixe a viewport na vista de perspectiva (persp) e dê um Frame (tecla F) para o cubo ficar bem no meio da tela.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Maya)

Aquecimento (10 min): Reúna a turma na frente do projetor. Relembre as formas da aula passada apontando o cubo no centro da cena. Pergunte: "E se a gente quiser tirar ele daqui e levar pra lá?" Mostre que a forma está paradinha e diga que hoje vamos aprender a mexer nela.

Conteúdo novo guiado (15 min): No seu Maya, clique uma vez no cubo para selecionar (ele fica com contorno verde). Aperte W: aparecem as setas coloridas. Puxe devagar só a seta vermelha para o lado e diga "olha, ele andou!". Volte com Ctrl + Z. Agora aperte E: aparecem círculos coloridos; puxe um devagar e diga "olha, ele virou!". Desfaça. Por fim aperte R: aparecem alças com quadradinhos; puxe o quadradinho do meio e diga "olha, ele cresceu!". Mostre uma ação de cada vez, sempre desfazendo antes da próxima, para não acumular bagunça.

Mao na massa (25 min): Cada criança vai para o seu computador com o cubo já na tela. Faça uma ação por vez, todos juntos. Primeiro: "Aperta a letra W e arrasta a seta vermelha até o seu alvo." Passe nas mesas ajudando. Depois: "Aperta E e gira só um pouquinho." Por último: "Aperta R e puxa o quadradinho do meio pra deixar maior." Repita o ciclo se houver tempo. Lembre sempre do Ctrl + Z como botão de voltar no tempo.

Desafio e compartilhar (10 min): Proponha o desafio "Coloca no lugar certo": cada um precisa mover o cubo até o alvo combinado, virá-lo um pouco e deixá-lo do tamanho de uma caixa de presente. Quem conseguir ganha um joinha. Depois, dois ou três voluntários mostram a tela no projetor e contam o que fizeram.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use analogias do dia a dia. Mover é "arrastar o carrinho pelo chão". Girar é "rodar o pião" ou "virar o rostinho do bonequinho para o outro lado". Escalar é "encher o balão para crescer e murchar o balão para diminuir". As setas coloridas são "puxadores mágicos": cada cor leva a forma para um caminho diferente. Insista em "uma cor de cada vez", como pegar um brinquedo por vez na caixa. Repita os nomes das letras como uma musiquinha: "W de andar, E de virar, R de crescer".

## Erros comuns e como ajudar

O erro mais comum é puxar a seta do centro (que mexe em todas as direções de uma vez) e a forma "fugir" da tela. Ensine a puxar SÓ as setas coloridas das pontas e use a tecla F para reenquadrar quando a forma sumir. Outro erro é clicar fora e perder a seleção — basta clicar de novo no cubo. Algumas crianças apertam a ferramenta errada; pendure os cartões vermelho, verde e azul perto do projetor e relembre "W, E, R". Quando algo der muito errado, comemore o Ctrl + Z como mágica de voltar no tempo, sem bronca.`,
  exercicios: [
    {
      titulo: `Anda, Cubo!`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Introduza dizendo que vamos só ANDAR com o cubo, sem girar nem crescer. Mostre no projetor: clicar no cubo, apertar W e puxar a seta vermelha. Depois deixe a turma repetir. Passe nas mesas e lembre de usar só as setas das pontas.`,
      atividade: `Clique no cubo, aperte a letra W e arraste a seta vermelha até o cubo ficar em cima do seu alvo de papel (o quadrado na sua mesa). Use só a seta vermelha desta vez.`,
      gabarito: `Acertou quem moveu o cubo na horizontal e parou em cima do alvo combinado, sem o cubo sumir da tela e sem ter girado ou mudado o tamanho. O contorno verde de selecionado deve continuar no cubo.`,
    },
    {
      titulo: `Roda Pião`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Explique que agora não vamos tirar o cubo do lugar, só virá-lo, como um pião. Demonstre apertar E e puxar um dos círculos coloridos bem devagar. Avise que é para girar só um pouquinho, não dar voltas e voltas.`,
      atividade: `Aperte a letra E. Apareceram círculos coloridos? Puxe um deles devagar para virar o cubo um pouco para o lado, como se estivesse rodando um pião. Pare quando o cubo estiver torto de um jeito diferente.`,
      gabarito: `Acertou quem girou o cubo e ele ficou visivelmente virado para outro lado, mas continuou no mesmo lugar (não andou) e do mesmo tamanho. Se a criança girou só um pouco e parou, está perfeito.`,
    },
    {
      titulo: `Balão que Cresce`,
      tipo: `Jogo`,
      tempo: `5 minutos`,
      guiaProfessor: `Transforme em jogo de comando. Você fala "ENCHE!" e todos puxam o quadradinho do meio para aumentar; você fala "MURCHA!" e todos diminuem. Faça duas ou três rodadas rápidas. Lembre de apertar R antes de começar.`,
      atividade: `Aperte a letra R para ver as alças com quadradinhos. Quando o professor falar "ENCHE!", puxe o quadradinho do meio para o cubo crescer. Quando falar "MURCHA!", empurre para ele diminuir. Siga os comandos!`,
      gabarito: `Acertou quem fez o cubo inteiro crescer e diminuir junto (usando o quadradinho do meio, que escala por igual) seguindo a voz do professor, sem o cubo ficar achatado ou esticado só para um lado.`,
    },
    {
      titulo: `Roda de Conversa: W, E, R`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Sente a turma em roda. Mostre os três cartões coloridos e faça perguntas, deixando as crianças responderem em voz alta. Reforce a musiquinha "W de andar, E de virar, R de crescer". Valorize toda resposta e corrija com carinho.`,
      atividade: `Vamos lembrar juntos: qual letra a gente aperta para o cubo ANDAR? E para ele VIRAR como um pião? E para ele CRESCER ou diminuir? E as setas, de que cores elas aparecem?`,
      gabarito: `Esperado: W para mover/andar, E para girar/virar e R para escalar/crescer. As setas aparecem nas cores vermelho, verde e azul. As crianças não precisam acertar sozinhas; basta participarem e repetirem a musiquinha ao final.`,
    },
    {
      titulo: `Desafio do Tesouro no Lugar Certo`,
      tipo: `Desafio + desenho`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte as três ações num só desafio. Combine um destino (o alvo da mesa), um tamanho (do tamanho de uma caixa de presente) e um giro (um pouquinho torto). Depois, peça que desenhem no papel o cubo no lugar final. Premie com joinha quem completar.`,
      atividade: `Missão completa: 1) aperte W e leve o cubo até o seu alvo; 2) aperte E e vire ele um pouquinho; 3) aperte R e deixe ele do tamanho de uma caixa de presente. Depois, desenhe no papel como o seu cubo ficou no lugar final.`,
      gabarito: `Acertou quem usou as três ações em sequência: o cubo terminou em cima do alvo, levemente girado e num tamanho médio combinado, sem sumir da tela. No desenho, espera-se um cubo posicionado dentro do quadrado do alvo, mostrando que a criança entendeu o resultado final.`,
    },
  ],
};
