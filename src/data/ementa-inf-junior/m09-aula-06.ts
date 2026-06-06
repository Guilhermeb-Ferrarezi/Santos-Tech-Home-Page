import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Gráfico Fácil de Entender",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança deixa o seu gráfico fácil de entender colocando os nomes embaixo das barras, deixando os números visíveis e aumentando tudo para que qualquer pessoa entenda a história só de bater o olho.`,
  descricao: `Nesta aula a turma não cria um gráfico novo: ela aprende a deixar um gráfico claro, ou seja, fácil de entender só de olhar. Nas semanas anteriores as crianças já transformaram números em desenho, montaram barras e fatias e até brincaram com cores e títulos. Agora chega a parte mais importante de todas: fazer com que qualquer pessoa, até a vovó que nunca viu aquele gráfico, entenda na hora o que ele quer dizer. Um gráfico bonito que ninguém entende não serve; um gráfico claro é um gráfico que conversa com quem olha.

O coração da aula é uma comparação. O professor mostra dois gráficos lado a lado: um bagunçado e um arrumado. O bagunçado tem letras minúsculas, não tem nome embaixo das barras, não mostra os números e fica espremido num cantinho. O arrumado tem nomes grandes embaixo de cada barra, os números aparecendo em cima de cada uma e tudo bem grandão na tela. A turma olha os dois e responde, em voz alta, qual dá para entender mais rápido. Essa comparação ensina o olhar crítico: perceber o que está faltando e o que está atrapalhando.

Depois a turma conserta junto. Três arrumações simples deixam qualquer gráfico claro. Primeiro, os nomes embaixo das barras (os rótulos do eixo de baixo), para a gente saber o que cada torre representa. Segundo, os números visíveis (os rótulos de dados), aqueles numerozinhos que aparecem em cima de cada barra dizendo o tamanho exato. Terceiro, deixar tudo grande e legível: aumentar o gráfico puxando as alças dos cantos e usar uma letra maior. São três gestos fáceis, muito visuais e perfeitos para a idade.

Tudo isso prepara o terreno para as próximas aulas, em que a turma vai montar e apresentar o painel do mês. Um gráfico claro hoje deixa o painel muito mais bonito e a apresentação muito mais fácil, porque os colegas vão entender o trabalho num piscar de olhos. O professor não precisa dominar o Excel ou o Google Planilhas para conduzir: basta seguir o passo a passo, sempre mostrando primeiro na tela projetada e só depois pedindo que as crianças repitam no computador delas.`,
  materiais: [
    `Um computador por aluno com o Excel ou o Google Planilhas já aberto na planilha de barras que a criança vem montando nas aulas anteriores (com uma tabelinha de números e um gráfico de barras pronto).`,
    `Um computador do professor ligado ao projetor ou à TV, com uma planilha de exemplo aberta para demonstrar cada passo na tela grande.`,
    `Dois gráficos de exemplo prontos e impressos (ou abertos na tela): um bagunçado (letra pequena, sem nomes embaixo das barras, sem números, espremido) e um arrumado (nomes grandes, números visíveis, tudo grandão) para a turma comparar.`,
    `Cartazes ou folhas grandes mostrando onde fica o nome embaixo da barra (o rótulo de baixo) e o número em cima da barra (o rótulo de dados), com setas apontando.`,
    `Uma lupa de papel ou de brinquedo (pode ser uma feita de papelão) para a brincadeira de "procurar o que está faltando" no gráfico bagunçado.`,
    `Folhas impressas com a Lista do Gráfico Claro (três perguntas: tem nome embaixo? tem número aparecendo? está grande e dá para ler?), com quadradinhos para marcar.`,
    `Lápis de cor, adesivos ou carimbos de recompensa para o desafio final.`,
  ],
  conceitosChave: [
    `Gráfico claro — um gráfico tão fácil que qualquer pessoa entende a história só de bater o olho, sem precisar de ninguém explicando.`,
    `Nome embaixo da barra (rótulo) — a palavrinha que fica debaixo de cada torre dizendo o que ela é, por exemplo "cachorro" ou "gato".`,
    `Número visível (rótulo de dados) — o numerozinho que aparece em cima de cada barra mostrando o tamanho exato dela, por exemplo 5 ou 8.`,
    `Legível — quando a letra está grande o bastante para a gente conseguir ler sem apertar os olhos nem chegar perto da tela.`,
    `Alça do canto — a bolinha ou quadradinho que aparece no canto do gráfico; a gente puxa ela para deixar o gráfico maior ou menor.`,
    `Comparar — colocar duas coisas lado a lado para ver qual está melhor e descobrir o que faz uma ser mais fácil de entender que a outra.`,
    `Arrumar o gráfico — colocar os nomes, mostrar os números e aumentar tudo até o gráfico ficar fácil de entender.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é sobre clareza: deixar um gráfico fácil de entender. As crianças já têm um gráfico de barras pronto das aulas anteriores. Aqui elas não criam outro, elas melhoram o que já existe com três ajustes simples: nomes embaixo das barras, números visíveis em cima delas e tamanho grande e legível.

No Excel, ao clicar no gráfico aparece um sinal de mais (o ícone "+", chamado Elementos do Gráfico) no canto direito do gráfico. Clicando nele você liga ou desliga, com um clique nas caixinhas: "Rótulos de Dados" (faz os números aparecerem em cima das barras) e "Títulos dos Eixos" e "Eixos" (mostram os nomes embaixo). No Google Planilhas é parecido: dê dois cliques no gráfico para abrir o "Editor de gráficos" à direita, vá na aba "Personalizar" e abra "Série" para marcar "Rótulos de dados"; os nomes de baixo já vêm dos títulos da sua tabela.

Para deixar tudo grande, clique no gráfico uma vez (aparecem as alças, aquelas bolinhas nos cantos) e arraste uma alça do canto para fora. Para aumentar a letra, clique uma vez num número ou num nome e use o tamanho da fonte na barra de cima (no Excel, na aba Página Inicial; no Google, na barrinha que aparece). Treine esses gestos uma vez sozinho antes da aula para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Sente a turma de frente para o projetor. Mostre os dois gráficos de exemplo lado a lado, o bagunçado e o arrumado, e pergunte: qual destes vocês entendem mais rápido? Deixe apontarem. Pergunte o que falta no bagunçado: tem nome embaixo das barras? Dá para ver os números? A letra é grande? Relembre rapidinho o que é uma barra e o que ela conta.

2. Conteúdo novo guiado (15 min). No seu computador projetado, clique no gráfico bagunçado. No Excel, clique no ícone de mais ("+") e marque "Rótulos de Dados"; mostre os números aparecendo em cima das barras. No Google Planilhas, dê dois cliques, vá em "Personalizar", "Série" e marque "Rótulos de dados". Depois confira os nomes embaixo das barras. Por fim, puxe uma alça do canto para deixar o gráfico maior e aumente o tamanho da fonte dos números. Narre cada gesto devagar.

3. Mão na massa (25 min). Cada criança abre o próprio gráfico de barras. Comande um passo de cada vez, esperando a turma acompanhar: primeiro ligar os números visíveis, depois conferir os nomes embaixo, por último aumentar o gráfico e a letra. Circule e ponha o dedo na tela de quem travar. Entregue a Lista do Gráfico Claro impressa e peça que marquem os três quadradinhos conforme arrumam: tem nome embaixo? tem número aparecendo? está grande e dá para ler?

4. Desafio e compartilhar (10 min). Desafio: deixar o próprio gráfico com os três quadradinhos marcados, sem ajuda. Quem terminar mostra o gráfico claro para um colega do lado e pergunta: você entende só de olhar? Quem entende ganha um adesivo. Feche celebrando: agora o gráfico está fácil de entender e pronto para o painel.

## Como explicar para crianças de 5 a 9 anos

Use a analogia da plaquinha: cada barra é uma torre, e o nome embaixo é a plaquinha que diz de quem é a torre, senão a gente não sabe quem mora ali. O número em cima é como a etiqueta que diz a altura da torre. Diga que um gráfico claro é educado: ele conta a história sozinho, sem precisar de ninguém ao lado explicando.

Para o tamanho, use a ideia dos óculos da vovó: se a letra é pequenininha, a vovó precisa apertar os olhos; se a gente deixa tudo grandão, qualquer pessoa lê de longe. Faça o gesto de apertar os olhos para mostrar o gráfico ruim e abra bem os olhos sorrindo para o gráfico bom.

## Erros comuns e como ajudar

- A criança não acha onde ligar os números. Mostre no projetor, bem devagar, onde fica o ícone de mais ("+") no Excel ou o caminho "Personalizar", "Série" no Google, e ponha o dedo na tela do computador dela.

- Ligam e desligam várias caixinhas e o gráfico fica estranho. Mostre o botão Desfazer (a setinha de voltar, ou as teclas Ctrl mais Z) e explique que sempre dá para voltar atrás.

- Arrastam o gráfico inteiro em vez de puxar a alça do canto e ele sai do lugar. Mostre a diferença: clicar no meio e puxar move; puxar a bolinha do canto aumenta. Use Desfazer se precisar.

- Acham que está claro mesmo com a letra pequena. Peça que sentem longe da tela e tentem ler; se não conseguirem de longe, ainda não está grande o bastante.

- Marcam a Lista do Gráfico Claro sem conferir. Peça que apontem com o dedo o nome embaixo e o número em cima antes de marcar cada quadradinho.`,
  exercicios: [
    {
      titulo: `Caça ao que está faltando`,
      tipo: `Jogo com lupa`,
      tempo: `8 min`,
      guiaProfessor: `Use a lupa de papel e os dois gráficos de exemplo (o bagunçado e o arrumado), impressos ou na tela projetada. Diga que a turma vira detetive: precisa descobrir o que está faltando no gráfico bagunçado. Conduza apontando: cadê os nomes embaixo das barras? Cadê os números em cima? A letra dá para ler? Cada coisa que falta é uma pista encontrada. Comemore cada descoberta para manter o jogo animado.`,
      atividade: `Pegue a lupa de detetive e olhe o gráfico bagunçado. Descubra o que está faltando para ele ficar fácil de entender: 1. Tem nome embaixo de cada barra? 2. Tem número aparecendo em cima das barras? 3. A letra é grande o bastante para ler? Aponte com a lupa cada coisa que estiver faltando e fale em voz alta.`,
      gabarito: `A criança encontra pelo menos duas coisas faltando no gráfico bagunçado (por exemplo, não tem nome embaixo das barras e não tem número aparecendo) e aponta com a lupa. Acerta quem percebe que o gráfico arrumado tem essas coisas e o bagunçado não, mesmo precisando de uma dica do professor.`,
    },
    {
      titulo: `Acende os números!`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que cada criança está com o próprio gráfico de barras aberto. Demonstre primeiro no seu computador projetado: no Excel, clique no gráfico, clique no ícone de mais ("+") e marque "Rótulos de Dados"; no Google Planilhas, dois cliques no gráfico, "Personalizar", "Série", marque "Rótulos de dados". Mostre os números aparecendo em cima de cada barra. Depois comande a turma a fazer igual, um passo de cada vez, e circule mostrando o Desfazer (Ctrl mais Z) para quem precisar.`,
      atividade: `Clique no seu gráfico de barras. Agora vamos acender os números! No Excel, clique no sinal de mais ("+") e marque a caixinha "Rótulos de Dados". No Google Planilhas, dê dois cliques no gráfico, vá em "Personalizar", abra "Série" e marque "Rótulos de dados". Pronto: agora cada barra mostra o número dela em cima!`,
      gabarito: `A criança liga os rótulos de dados e os números passam a aparecer em cima de cada barra do gráfico dela. Acerta quem consegue fazer os números aparecerem, mesmo precisando de ajuda para achar a caixinha certa uma vez.`,
    },
    {
      titulo: `Cada torre com sua plaquinha`,
      tipo: `Desenho no papel`,
      tempo: `12 min`,
      guiaProfessor: `Entregue uma folha com três ou quatro barras já desenhadas (torres de alturas diferentes), mas sem nomes e sem números. Explique que cada torre é uma barra do gráfico e que ela está sem plaquinha (o nome) e sem etiqueta (o número). A turma vai completar no papel, do mesmo jeito que faz no computador. Mostre no cartaz onde vai o nome (embaixo) e onde vai o número (em cima). Ajude com a escrita quem precisar.`,
      atividade: `Olhe as torres desenhadas na folha. Cada uma é uma barra do gráfico, mas está sem plaquinha e sem etiqueta! Embaixo de cada torre, escreva ou desenhe o nome dela (por exemplo: cachorro, gato, peixe). Em cima de cada torre, escreva o número que diz a altura dela. No fim, todas as torres têm nome embaixo e número em cima.`,
      gabarito: `A criança coloca um nome embaixo de cada barra e um número em cima de cada barra na folha. Acerta quem completa todas as torres com nome embaixo e número em cima, mesmo com letrinha de criança ou pedindo ajuda para escrever uma palavra.`,
    },
    {
      titulo: `Os óculos da vovó`,
      tipo: `Roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Sente a turma em roda. Mostre no projetor o mesmo gráfico de dois tamanhos: um pequenininho e espremido num canto e outro bem grandão na tela. Faça a brincadeira: peça que todos apertem os olhos para tentar ler o pequeno, como a vovó faz, e depois abram bem os olhos para o grande. Pergunte qual dá para entender de longe e por quê. Conduza a ideia de que deixar tudo grande e legível ajuda qualquer pessoa, de qualquer idade, a entender.`,
      atividade: `Olhe os dois gráficos que a professora mostrou. Aperte os olhos para tentar ler o gráfico pequenininho, como a vovó faz quando esquece os óculos. Agora abra bem os olhos e olhe o grandão. Diga em voz alta qual é mais fácil de ler de longe e por quê. Conte: por que é bom deixar o gráfico grande e a letra grande?`,
      gabarito: `A criança diz que o gráfico grande é mais fácil de ler de longe e explica com as próprias palavras (a letra é maior, dá para ver sem apertar os olhos). Acerta quem entende que deixar tudo grande e legível ajuda todo mundo a entender, mesmo de longe.`,
    },
    {
      titulo: `O grande desafio: meu gráfico fácil de entender`,
      tipo: `Desafio`,
      tempo: `16 min`,
      guiaProfessor: `Este é o fechamento. Peça atenção e explique a missão inteira antes de começar: deixar o próprio gráfico fácil de entender, conferindo a Lista do Gráfico Claro com as três perguntas. Reforce que hoje a missão é arrumar e deixar claro, não criar um gráfico novo. Deixe a criança tentar sozinha e só ajude se ela travar ou pedir. Quem terminar mostra o gráfico para um colega e pergunta "você entende só de olhar?". Se o colega entender, ganha um adesivo. Celebre dizendo que o gráfico está pronto para o painel.`,
      atividade: `Sua missão: deixar o seu gráfico fácil de entender! Use a Lista do Gráfico Claro e marque os três quadradinhos: 1. Tem nome embaixo de cada barra? 2. Tem número aparecendo em cima das barras? 3. Está grande e dá para ler de longe? Arrume o que faltar (acenda os números, confira os nomes, puxe a alça do canto para aumentar). Quando os três estiverem marcados, mostre para o colega do lado e pergunte: você entende só de olhar?`,
      gabarito: `A criança entrega o gráfico com nome embaixo das barras, números visíveis em cima e tamanho grande e legível, com os três quadradinhos da lista marcados. Acerta quem deixa o gráfico claro o bastante para um colega entender só de olhar, com no máximo uma ajuda do professor.`,
    },
  ],
};
