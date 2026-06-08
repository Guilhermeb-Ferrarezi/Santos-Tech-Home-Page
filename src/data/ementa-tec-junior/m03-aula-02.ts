import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu Personagem se Move!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança saberá encaixar os blocos de movimento do Scratch para fazer seu personagem andar e girar pelo palco, vendo o resultado ao clicar.`,
  descricao: `Nesta aula as crianças dão vida ao personagem que conheceram na aula anterior: elas vão fazê-lo se mexer! Usando os blocos azuis de Movimento do Scratch, cada criança monta uma pequena sequência de comandos que faz o personagem andar alguns passos e girar para um lado. É o primeiro contato com a ideia mais importante da programação: o computador faz exatamente o que a gente manda, na ordem em que a gente manda.

O assunto central é a sequência de comandos. Os blocos do Scratch se encaixam como peças de quebra-cabeça, um embaixo do outro, e o personagem obedece a eles de cima para baixo. Quando a criança clica nos blocos, ela vê na hora o personagem se deslocar pelo palco. Esse retorno imediato é mágico para a faixa de 5 a 9 anos: o que penso vira ação na tela em segundos.

Vamos focar em poucos blocos, mas bem dominados: "mover 10 passos" e "gire 15 graus". A criança vai mudar os números, ver o personagem andar mais ou menos, girar para a direita ou para a esquerda, e empilhar vários blocos para criar um caminho. Não é preciso ler bem para isso: as cores, os ícones de setinha e a demonstração do professor guiam tudo.

Por que isso importa? Porque mover um personagem é a base de quase todo jogo. Quem domina o movimento hoje conseguirá, nas próximas aulas, fazer o personagem reagir ao clique, à tecla e até falar. Esta aula planta a semente de "eu mando, o computador obedece" — o coração da criação de games.`,
  materiais: [
    `Um computador por criança (ou em duplas) com o Scratch já aberto no projeto editor, em tela cheia. Use o Scratch online (site oficial) ou o aplicativo Scratch instalado.`,
    `Projetor ou TV grande mostrando a tela do professor, para demonstrar onde clicar.`,
    `Um projeto de exemplo já montado pelo professor, com o gato andando alguns passos, para mostrar o resultado final logo no começo.`,
    `Personagem (ator) de cada criança já escolhido na aula anterior, ou o gato padrão do Scratch.`,
    `Cartões de papel grandes desenhando os blocos "mover 10 passos" e "gire 15 graus", para brincar de encaixar com o corpo.`,
    `Fita crepe ou tapete para marcar um "palco gigante" no chão, onde uma criança vira o personagem.`,
    `Adesivos ou carimbos de "Cientista do Movimento" para premiar quem fizer o personagem andar.`,
  ],
  conceitosChave: [
    `Bloco de Movimento — peça azul do Scratch que manda o personagem se mexer, andar ou girar.`,
    `Mover passos — comando que faz o personagem dar um passo para frente; quanto maior o número, mais longe ele vai.`,
    `Girar — comando que faz o personagem virar o corpo para um lado, como quando a gente vira para olhar para trás.`,
    `Sequência — vários blocos encaixados um embaixo do outro; o personagem faz um de cada vez, de cima para baixo.`,
    `Palco — a telinha onde o personagem mora e se movimenta; é o "mundo" do jogo.`,
    `Encaixar — juntar um bloco no outro até dar o clique de quebra-cabeça, mostrando que eles estão grudados.`,
    `Clicar para rodar — tocar nos blocos ou na bandeira verde faz os comandos acontecerem na hora.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Scratch é uma linguagem visual: em vez de digitar código, a gente arrasta blocos coloridos que se encaixam como quebra-cabeça. Cada cor é uma família. A família azul é a de "Movimento" (no painel da esquerda, o botão azul escrito Movimento). Nesta aula você usará só dois blocos dessa família.

O primeiro é "mover 10 passos": empurra o personagem para frente, na direção em que ele está apontando. O número dentro do bloco (10) é editável — clique nele e digite outro valor. Um "passo" no Scratch é um pixel, então 10 passos é um deslocamento pequeno; 100 passos atravessa boa parte do palco.

O segundo é "gire 15 graus" — há duas versões, uma com a seta para a direita (sentido horário) e outra para a esquerda. Girar muda a direção para onde o personagem aponta; se você girar e depois mandar mover, ele anda para o novo lado. O personagem fica no "palco", a área branca grande no canto superior direito da tela.

A grande ideia técnica é a sequência: blocos empilhados rodam de cima para baixo, um de cada vez. Para rodar, basta clicar em cima da pilha de blocos (ela fica com um contorno amarelo enquanto executa). A bandeira verde no topo do palco também serve para iniciar, mas hoje pode bastar clicar na pilha.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Scratch)

10 min — Aquecimento: mostre no projetor seu projeto de exemplo com o gato andando. Clique na pilha de blocos e deixe as crianças verem o gato se mexer. Pergunte: "O que faz o gato andar?" Relembre rapidamente o palco e o personagem da aula 1. Brinque com os cartões de papel: você é o "personagem" e elas mandam "mover" e "girar" com o corpo.

15 min — Conteúdo novo guiado: peça que todos olhem só para você. No seu Scratch, clique no botão azul Movimento (à esquerda). Arraste o bloco "mover 10 passos" para a área central (a área de código, no meio da tela) e clique nele: o gato anda. Mude o 10 para 100 e clique de novo. Agora arraste "gire 15 graus" para baixo do primeiro, encostando até dar o clique de encaixe. Clique na pilha: o gato anda e vira. Faça devagar, repetindo cada passo duas vezes.

25 min — Mão na massa: cada criança repete no seu computador. Circule pela sala. Meta mínima: encaixar "mover" + "gire" e clicar para ver o personagem andar. Quem terminar, adiciona mais blocos de mover para o personagem cruzar o palco. Elogie cada tentativa e dê o adesivo de "Cientista do Movimento".

10 min — Desafio + compartilhar: proponha "faça seu personagem dar uma voltinha" (vários "gire" seguidos). Convide duas ou três crianças a mostrar a tela no projetor e explicar o que montaram.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Diga que os blocos são "ordens mágicas" e o personagem é um robozinho muito obediente: ele faz exatamente o que a gente manda, na ordem da pilha. "Mover passos" é como dar passos de verdade — quanto maior o número, mais longe o robô anda. "Girar" é como quando a gente vira para olhar o amigo do lado. Empilhar blocos é "fazer uma listinha de tarefas" para o personagem. Use o corpo: ande pela sala dando passos e girando enquanto fala.

## Erros comuns e como ajudar

Blocos soltos (não encaixados): a criança coloca os blocos perto, mas sem grudar. Mostre que precisa encostar até dar o "clique" e aparecer a sombra de encaixe. Clicar no lugar errado: muitas clicam no palco esperando que ande; lembre que se clica na pilha de blocos. Número apagado: ao trocar o valor, alguns deixam o campo vazio e o bloco não anda; peça para digitar um número. Personagem some do palco: depois de muitos "mover", ele pode ir para a borda; ensine a arrastar o personagem de volta para o meio do palco com o dedo do mouse. Pressa: quem termina rápido pode atrapalhar; dê o desafio da voltinha para manter o foco.`,
  exercicios: [
    {
      titulo: `Um passo de cada vez`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como arrastar UM bloco "mover 10 passos" da família azul Movimento para a área de código e clicar nele. Peça que cada criança faça igual, sozinha, só com esse bloco. O objetivo é sentir o personagem andar pela primeira vez.`,
      atividade: `No seu Scratch, clique no botão azul Movimento. Arraste o bloco "mover 10 passos" para o meio da tela. Clique nele e veja seu personagem dar um passinho. Agora troque o número 10 por 100 e clique de novo.`,
      gabarito: `Acertou quem vê o personagem se deslocar para frente ao clicar no bloco, e o vê andar bem mais longe depois de trocar o 10 por 100. Se o personagem se move, está correto.`,
    },
    {
      titulo: `Robô obediente`,
      tipo: `Jogo / brincadeira de corpo`,
      tempo: `8 minutos`,
      guiaProfessor: `Marque um "palco gigante" no chão com fita. Uma criança é o "personagem-robô" e as outras dão ordens usando só duas palavras: "mover" (dá um passo) e "girar" (vira um quarto de volta). Troque o robô a cada rodada. Conecte a brincadeira aos blocos do Scratch.`,
      atividade: `Vire o robô! Você só pode fazer o que a turma mandar: quando ouvir "mover", dê um passo; quando ouvir "girar", vire para o lado. Sigam a ordem dos comandos, um de cada vez.`,
      gabarito: `Acertou a turma quando o robô anda e vira na ordem exata dos comandos, um por vez, sem inventar movimentos. Isso mostra que entenderam que o personagem obedece à sequência.`,
    },
    {
      titulo: `Empilhando comandos`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre encaixar dois blocos: "mover 10 passos" e, embaixo, "gire 15 graus", até dar o clique de encaixe. Clique na pilha e mostre o personagem andar e virar. Peça que cada criança monte a mesma pilha e depois acrescente mais um "mover".`,
      atividade: `Encaixe o bloco "mover 10 passos" e, logo embaixo, o bloco "gire 15 graus", até eles grudarem. Clique na pilha e veja o personagem andar e virar. Agora coloque mais um "mover 10 passos" no final e clique de novo.`,
      gabarito: `Acertou quem tem os três blocos grudados em uma única pilha e, ao clicar, vê o personagem andar, virar e andar de novo. Se os blocos estão encaixados (sem espaços) e o personagem executa tudo, está correto.`,
    },
    {
      titulo: `Desenhando o caminho`,
      tipo: `Desenho / papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue uma folha com o desenho do palco e o personagem em um canto. Peça que a criança desenhe com lápis o caminho que quer que o personagem faça (uma linha com curvas) e marque com setinhas onde ele vira. Depois, ligue isso aos blocos mover e girar.`,
      atividade: `Nesta folha, o personagem está num canto do palco. Desenhe com o lápis o caminho que ele vai fazer até o outro lado. Cada vez que o caminho dobrar uma esquina, desenhe uma setinha de "girar".`,
      gabarito: `Acertou quem desenha um caminho contínuo do personagem até outro ponto do palco, com setinhas nos lugares onde a linha muda de direção. Cada curva marcada representa um bloco "girar"; o caminho representa os blocos "mover".`,
    },
    {
      titulo: `A voltinha completa`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Proponha o desafio final: fazer o personagem dar uma volta completa no lugar, encaixando vários blocos "gire" seguidos. Deixe as crianças descobrirem por tentativa quantos blocos precisam. Convide alguns a mostrar no projetor.`,
      atividade: `Desafio! Monte uma pilha só com blocos "gire 15 graus", um embaixo do outro, e clique para o personagem girar. Coloque mais blocos até ele dar uma volta inteira e voltar a olhar para o mesmo lado do começo.`,
      gabarito: `Acertou quem empilha vários blocos "gire 15 graus" e faz o personagem completar uma volta, terminando apontando para a mesma direção do início. Com blocos de 15 graus, são necessários 24 blocos para a volta completa; qualquer pilha que gire o personagem em círculo já mostra que entendeu a ideia.`,
    },
  ],
};
