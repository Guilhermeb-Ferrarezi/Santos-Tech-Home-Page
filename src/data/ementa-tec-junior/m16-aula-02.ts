import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu herói se mexe!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dar vida ao herói usando o comportamento Platform, fazendo ele andar com as setas e pular com o teclado em cima do cenário já montado.`,
  descricao: `Na aula passada as crianças aprenderam a colocar os sprites em cena: o herói apareceu na tela e o cenário ficou montado. Mas tem um problema gigante: o herói está parado feito uma estátua! Hoje é o dia mais esperado da semana, porque vamos fazer o herói se mexer de verdade. Quando uma criança aperta a seta e vê o personagem andar pela primeira vez, os olhos brilham. Esse é o momento mágico que transforma um desenho parado em um jogo de verdade.

O segredo para isso no Construct 3 chama-se comportamento (em inglês, behavior). Pense num comportamento como um superpoder pronto que a gente cola no herói. Em vez de a criança escrever páginas de comandos, ela apenas escolhe o poder Platform e, num passo de mágica, o herói já sabe andar para os lados, cair com a gravidade e pular. É como dar um par de tênis mágico para o boneco: ele aprende a correr e a saltar sozinho.

Nesta aula o aluno vai adicionar o comportamento Platform ao herói e o comportamento Solid ao chão, para o herói não atravessar o piso e cair no vazio. Depois vamos testar o jogo apertando o botão de Play e brincar de verdade com o teclado. A parte mais divertida vem em seguida: ajustar os números. Se o herói está lento demais, aumentamos a velocidade (Max Speed); se o pulo está baixinho, aumentamos a força do pulo (Jump Strength). Cada criança vira a chefe do seu herói e decide como ele se move.

No fim, o herói já anda para a esquerda e para a direita e pula pelo cenário, batendo no chão sem cair. As crianças vão sair da aula com a sensação de "eu fiz um jogo que funciona!", e essa vitória é o combustível para as próximas aulas, quando começam as variáveis e os sistemas mais espertos.`,
  materiais: [
    `Computadores com o Construct 3 já aberto e com o projeto da Aula 1 (herói e cenário) carregado em cada estação`,
    `Projetor ou TV grande ligada no computador do professor para demonstrar onde clicar`,
    `Exemplo pronto do professor: um projeto onde o herói já anda e pula, para mostrar o resultado final logo no começo`,
    `Teclados funcionando e testados (setas e barra de espaço), pois toda a aula depende deles`,
    `Folha impressa ou cartaz com os nomes das propriedades em inglês e em português (Max Speed = Velocidade, Jump Strength = Força do Pulo)`,
    `Adesivos ou carimbos de "Herói em movimento" para premiar quem fizer o personagem andar e pular`,
  ],
  conceitosChave: [
    `Comportamento (Behavior) — um superpoder pronto que a gente cola no boneco para ele já saber fazer uma coisa, sem precisar montar tudo do zero.`,
    `Platform — o comportamento que ensina o herói a andar para os lados, cair com a gravidade e pular, igual ao Mario.`,
    `Solid — o poder que a gente coloca no chão e nas plataformas para o herói pisar em cima e não atravessar.`,
    `Velocidade (Max Speed) — o número que diz se o herói anda devagar como uma tartaruga ou rápido como um foguete.`,
    `Força do Pulo (Jump Strength) — o número que decide se o herói dá um pulinho de pulga ou um super salto bem alto.`,
    `Colisão — quando o herói encosta em alguma coisa, como o chão, e essa coisa o segura no lugar.`,
    `Testar (Play) — apertar o botão de brincar para ver o jogo funcionando de verdade e descobrir o que precisa ajustar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. No Construct 3, "behaviors" (comportamentos) são poderes prontos que evitam escrever código. O único comportamento estrela de hoje é o Platform: ao adicioná-lo ao herói, o Construct 3 já entrega andar, gravidade, queda e pulo de graça, controlados pelas setas e pela barra de espaço por padrão. O segundo comportamento é o Solid, que vai no chão para o herói não cair pelo vazio. Antes da aula, abra um projeto e teste você mesmo: adicione o Platform no herói, o Solid no piso e aperte Play. Faça isso uma vez e a aula fica tranquila. Tenha também um exemplo pronto, com o herói já andando e pulando, para mostrar a meta logo no início.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Receba a turma e relembre a Aula 1. Pergunte: "O que nosso herói sabia fazer ontem?" A resposta é: nada, ele estava parado! Mostre no projetor o exemplo pronto onde o herói anda e pula e diga: "Hoje o nosso herói vai ficar assim!". Crie a expectativa.

Conteúdo novo guiado (15 min): No seu computador, projetando para todos, clique uma vez no sprite do herói no layout (a tela do cenário). À direita aparece o painel Properties (Propriedades). Lá embaixo desse painel há o botão "Add / Edit" dentro de Behaviors; clique nele. Abre uma janelinha; clique no sinal de "+" (Add new behavior). Procure e clique duas vezes em "Platform". Feche a janelinha. Pronto, o herói ganhou o superpoder! Agora clique no chão (o piso do cenário), vá de novo em Behaviors > Add / Edit > "+", e escolha "Solid". Explique em voz alta cada clique enquanto faz.

Mão na massa (25 min): As crianças repetem nos computadores delas. Passe de mesa em mesa garantindo que cada uma clicou no herói (e não no fundo) antes de adicionar o Platform, e que clicou no chão antes do Solid. Quando todos terminarem, mande apertar o botão Play (a setinha de "Play" no canto superior direito) e brincar com as setas e o espaço. Depois venha o ajuste: com o herói selecionado, no painel Properties role até as linhas do Platform e mude "Max Speed" (deixe maior para correr) e "Jump Strength" (deixe maior para pular mais alto). Cada criança testa, volta e ajusta até gostar.

Desafio e compartilhar (10 min): Lance o desafio "O super pulo": quem consegue deixar o herói pulando bem alto sem voar para fora da tela? Depois, faça uma roda rápida: cada criança mostra o herói dela andando e pulando no projetor e diz qual número mudou.

## Como explicar para crianças

Use a analogia do tênis mágico: "Vamos calçar um tênis mágico no herói. Com ele, o boneco aprende a correr e a pular sozinho!". Para o Solid, diga que o chão virou "duro como uma pedra", então o herói pisa em cima e não afunda. Para os números, use comparações: velocidade baixa é "tartaruga", alta é "foguete"; pulo fraco é "pulo de pulga", forte é "super salto". Sempre mande testar apertando Play, porque criança aprende vendo e brincando, não ouvindo.

## Erros comuns e como ajudar

O erro mais comum é a criança adicionar o Platform no objeto errado (no fundo ou no chão) em vez do herói; o sinal é o herói não se mexer ao testar. Peça para clicar bem no herói e olhar se o nome dele aparece no topo do painel Properties. Outro erro clássico: o herói atravessa o chão e some para baixo, sinal de que faltou o Solid no piso. Há também quem exagere e deixe a velocidade ou o pulo tão grandes que o herói voa para fora da tela; explique que número muito grande "estraga" e ajude a diminuir. Por fim, se o herói não pula, confira se a criança está apertando a barra de espaço e se o foco do jogo está na janela de teste (basta clicar na tela do jogo uma vez).`,
  exercicios: [
    {
      titulo: `O tênis mágico do herói`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, projetando na tela. Garanta que cada criança clicou no herói antes de adicionar o comportamento. Circule pela sala conferindo o nome do objeto no topo do painel Properties.`,
      atividade: `Clique no herói no cenário. No painel Properties, à direita, encontre Behaviors e clique em "Add / Edit". Clique no "+", procure "Platform" e clique duas vezes nele. Feche a janela. Seu herói acabou de calçar o tênis mágico!`,
      gabarito: `O herói está selecionado e, no painel Properties, aparece o comportamento Platform listado em Behaviors. Ao apertar Play, o herói já anda com as setas (mesmo que ainda atravesse o chão, o que será resolvido no próximo exercício).`,
    },
    {
      titulo: `O chão virou pedra`,
      tipo: `Prática guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre primeiro o problema: aperte Play sem o Solid e deixe o herói cair no vazio, para a criança entender por que precisamos do chão duro. Depois ensine a solução. Confira que cada um clicou no piso, e não no herói.`,
      atividade: `Aperte Play e veja o herói cair pelo chão. Agora clique no chão do cenário. Em Behaviors, clique em "Add / Edit", depois no "+", e escolha "Solid". Aperte Play de novo: o herói agora fica em pé no chão!`,
      gabarito: `O chão tem o comportamento Solid. Ao testar com Play, o herói cai com a gravidade, encosta no chão e para em cima dele, sem atravessar. O herói anda para os lados em cima do piso.`,
    },
    {
      titulo: `Tartaruga ou foguete?`,
      tipo: `Experimentação com números`,
      tempo: `8 minutos`,
      guiaProfessor: `Deixe a criança experimentar livremente, mas mostre onde fica a propriedade Max Speed (com o herói selecionado, role o painel Properties até as linhas do Platform). Incentive testar com Play depois de cada mudança. Evite que coloquem números absurdos de início.`,
      atividade: `Clique no herói. No painel Properties, ache "Max Speed". Troque o número por um bem pequeno e teste com Play: o herói vira tartaruga! Agora coloque um número maior e teste: virou foguete! Escolha a velocidade que você mais gostou.`,
      gabarito: `A criança alterou o valor de Max Speed e percebeu, ao testar, que número pequeno deixa o herói lento e número grande deixa o herói rápido. Ela escolhe e mantém um valor que considera divertido, com o herói ainda controlável na tela.`,
    },
    {
      titulo: `O super pulo`,
      tipo: `Desafio de ajuste`,
      tempo: `7 minutos`,
      guiaProfessor: `Este é o desafio do dia. Mostre a propriedade Jump Strength (Força do Pulo) no painel Properties do herói. O objetivo é um pulo alto, mas sem o herói sumir para fora da tela. Ajude quem exagerar a diminuir o número.`,
      atividade: `Com o herói selecionado, ache "Jump Strength" no painel Properties. Aumente o número para o herói pular bem alto e teste com Play apertando a barra de espaço. O desafio: deixe o pulo o mais alto possível sem o herói voar para fora da tela!`,
      gabarito: `A criança aumentou o valor de Jump Strength e testou o pulo com a barra de espaço. Ela encontra um valor alto em que o herói pula bem, mas continua aparecendo na tela e voltando para o chão sem sumir. Demonstra entender que número grande demais "estraga" o pulo.`,
    },
    {
      titulo: `Meu herói mostra os movimentos`,
      tipo: `Apresentação e revisão`,
      tempo: `5 minutos`,
      guiaProfessor: `Conduza uma roda rápida de apresentações no projetor. Cada criança mostra o herói andando e pulando e diz uma frase. Reforce os conceitos: comportamento, Solid no chão, e o número que ela mudou. Entregue o adesivo de "Herói em movimento".`,
      atividade: `Mostre para a turma o seu herói andando e pulando pelo cenário. Diga em voz alta: "Eu usei o comportamento Platform, coloquei Solid no chão e mudei o número da ____ (velocidade ou pulo)." Aplauda o herói do colega!`,
      gabarito: `A criança apresenta um herói que anda para a esquerda e direita com as setas, pula com a barra de espaço e fica em pé no chão sem atravessar. Ela nomeia corretamente pelo menos dois conceitos da aula: comportamento Platform, Solid no chão, velocidade (Max Speed) ou força do pulo (Jump Strength).`,
    },
  ],
};
