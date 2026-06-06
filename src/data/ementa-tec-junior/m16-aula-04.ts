import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Passou de fase!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar um segundo nível no jogo e fazer o herói passar de fase ao tocar a bandeira, usando uma variável para guardar em qual nível a criança está.`,
  descricao: `Hoje o jogo da criança vai crescer de verdade: ele deixa de ter um único cenário e ganha um segundo nível. No Construct 3, cada cenário do jogo é montado em um "Layout" — pense em cada Layout como uma página diferente de um livro de aventuras. Na aula passada o herói já se mexia e tínhamos um Layout 1 com chão, plataformas e uma bandeira no final. Agora vamos criar o Layout 2, o nosso Nível 2, e ensinar o jogo a "virar a página" quando o herói chega na bandeira.

Para o jogo saber em qual fase a criança está, vamos usar uma variável global chamada "nivel". Uma variável é como uma caixinha que guarda um número (as crianças já viram isso na Aula 3). Quando o jogo começa, a caixinha "nivel" guarda o número 1. Quando o herói toca a bandeira, somamos 1 na caixinha (ela vira 2) e mandamos o Construct 3 ir para o outro Layout. Assim os dois níveis ficam conectados, como degraus de uma escada.

O segredo desta aula é a ideia de "transição": uma ação que leva o jogador de um lugar para outro. No Construct 3 isso é feito com a ação "Go to layout" (Ir para o layout), dentro do objeto especial "System" (Sistema). Vamos montar um evento que diz: "Quando o Herói colidir com a Bandeira, vá para o Layout 2". É simples, mas é o coração de qualquer jogo de fases, do Mario ao Sonic.

Esta aula é bem "mão na massa": cada criança vai duplicar o nível, mudar um pouco o desenho do Nível 2 (mais plataformas, posições diferentes), e testar correndo até a bandeira para ver a fase mudar na frente dos olhos dela. A emoção de ver "Nível 2" aparecer na tela é o grande momento do dia.`,
  materiais: [
    `Computadores (1 por criança ou em dupla) com o Construct 3 já aberto e o projeto do jogo da Aula 3 carregado`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Projeto-exemplo pronto do professor, com Nível 1 e Nível 2 já funcionando, para mostrar o resultado final logo no começo`,
    `Sprite (imagem) de uma bandeira de chegada, caso o projeto ainda não tenha uma`,
    `Cartão grande impresso com a frase "Quando tocar a bandeira → nível = nível + 1 → ir para o Layout 2" para deixar visível na parede`,
    `Folha de adesivos ou carimbos para premiar quem conseguir passar de fase sozinho`,
    `Caixinha de papel ou pote com etiqueta "nível" para representar fisicamente a variável durante a explicação`,
  ],
  conceitosChave: [
    `Layout — é cada cenário do jogo, como uma página diferente de um livro. O Nível 1 é uma página, o Nível 2 é outra.`,
    `Nível (ou fase) — uma parte do jogo que a gente termina para chegar na próxima, ficando cada vez mais legal.`,
    `Variável global — uma caixinha mágica que guarda um número e funciona em todos os layouts do jogo, não só em um.`,
    `Transição — quando o jogo te leva de um lugar para outro, como passar de uma sala para a próxima abrindo uma porta.`,
    `Ir para o layout (Go to layout) — a ação do Construct 3 que faz o jogo "virar a página" e mostrar o outro nível.`,
    `Colisão — quando dois objetos se encostam, como o herói tocando a bandeira; é o sinal para a fase mudar.`,
    `Bandeira de chegada — o objeto que marca o fim do nível; tocar nela é o jeito de avançar para a próxima fase.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai ensinar a criança a criar um segundo nível e a conectar os dois. No Construct 3, cada cenário é um "Layout" e a lista deles fica no painel "Project" (Projeto), na coluna da direita, dentro da pasta "Layouts". Cada Layout tem uma "Event Sheet" (folha de eventos), que é o lugar onde a gente escreve as regras com blocos. Você não precisa saber programar: é tudo clicar, escolher e confirmar. Antes da aula, faça você mesmo o passo a passo uma vez no seu projeto-exemplo para ter segurança. Tenha o Nível 2 já pronto no seu exemplo para mostrar o resultado logo no início.

Conceito central: uma variável global chamada "nivel" guarda em qual fase o jogador está. Ao tocar a bandeira, somamos 1 nessa variável e usamos a ação "Go to layout" (Ir para o layout) para trocar de cenário.

## Passo a passo da aula

Aquecimento e revisão (10 min): Reúna as crianças no projetor. Mostre seu jogo-exemplo rodando: corra até a bandeira e deixe o "Nível 2" aparecer. Pergunte: "Vocês querem fazer isso?". Relembre a caixinha (variável) da Aula 3 usando o pote etiquetado "nível".

Conteúdo novo guiado (15 min): No seu projeto, no painel "Project" à direita, clique com o botão direito na pasta "Layouts" e escolha "Add layout" (Adicionar layout). Aparece o "Layout 2" e a "Event sheet 2". Renomeie para "Nivel2" clicando duas vezes no nome. Agora crie a variável: abra a "Event sheet" do Nível 1, clique com o botão direito numa área vazia, escolha "Add global variable" (Adicionar variável global). No nome digite "nivel", tipo "Number" (Número), valor inicial "1". Confirme em "OK". Em seguida, mostre o evento da bandeira: clique em "Add event" (Adicionar evento), escolha o objeto "Heroi", a condição "On collision with another object" (Ao colidir com outro objeto) e selecione "Bandeira". Depois clique em "Add action" (Adicionar ação): escolha "System" (Sistema), ação "Add to" e selecione a variável "nivel", valor "1". Adicione uma segunda ação: "System" → "Go to layout" (Ir para o layout) → escolha "Nivel2". Teste apertando o botão "Run" (Play, triângulo no topo).

Mão na massa (25 min): Cada criança faz no próprio projeto. Vá mesa a mesa. Eles vão: 1) adicionar o Layout 2; 2) desenhar nele algumas plataformas e uma bandeira (podem copiar e colar do Nível 1); 3) criar a variável "nivel"; 4) montar o evento da colisão com a bandeira; 5) testar correndo até a bandeira. Quem terminar, deixa o Nível 2 mais difícil ou diferente.

Desafio e compartilhar (10 min): Desafio: "Faça o Nível 2 ter uma cor de fundo diferente do Nível 1" (na barra de propriedades do Layout, propriedade "Layout > Color" ou um objeto de fundo). Depois, cada criança roda o jogo no projetor e mostra a passagem de fase para os colegas.

## Como explicar para crianças

Use a analogia do livro: "Cada Layout é uma página da nossa história. A bandeira é a setinha de 'virar a página'." Para a variável, segure o pote: "Esta caixinha guarda o número da fase. Começa com 1. Quando você toca a bandeira, a gente põe mais 1 na caixinha e ela vira 2, e o jogo pula para a próxima página." Mostre sempre fazendo, não só falando: clique devagar e narre cada clique. Repita a frase mágica do cartão na parede: "Tocou a bandeira, ganha mais um nível, vai pro Layout 2!".

## Erros comuns e como ajudar

A criança esquece de colocar uma bandeira NO Layout 2 e o jogo "trava" no segundo nível — lembre que cada nível precisa do seu chão e do seu herói. O evento aponta para o layout errado: confira em "Go to layout" se está escrito "Nivel2". O herói atravessa a bandeira sem reagir: verifique se a condição é "On collision" e se a bandeira foi mesmo selecionada. Esqueceram de criar a variável: o "Add to nivel" não aparece — volte e crie a variável global primeiro. Por fim, alguns clicam em "Run" e nada acontece porque o objeto Heroi não está no Layout: arraste o Heroi para dentro do Nível 2 também.`,
  exercicios: [
    {
      titulo: `Caça à bandeira no jogo-exemplo`,
      tipo: `Observação guiada / aquecimento`,
      tempo: `5 minutos`,
      guiaProfessor: `Rode o seu projeto-exemplo no projetor com o Nível 1 e o Nível 2 prontos. Peça que as crianças observem e apontem para a tela. Não precisa que façam nada no computador ainda; o objetivo é despertar a vontade e fixar o conceito de "passar de fase".`,
      atividade: `Olhe a tela grande! O professor vai correr com o herói até a bandeira. Levante a mão no momento exato em que o jogo mudar de fase e grite "passou!". Depois responda em voz alta: o que apareceu de diferente no Nível 2?`,
      gabarito: `Quando o herói toca a bandeira, o jogo troca de cenário e mostra o Nível 2 (outro Layout), com plataformas em posições diferentes. As crianças devem notar que o herói "muda de página" no momento da colisão com a bandeira. Respostas válidas: o fundo mudou, há mais plataformas, a bandeira sumiu da primeira tela, apareceu um cenário novo.`,
    },
    {
      titulo: `Adicionando o segundo Layout`,
      tipo: `Prática guiada passo a passo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, projetando. Mostre o painel "Project" à direita, a pasta "Layouts", o botão direito e "Add layout". Acompanhe para que todos renomeiem para "Nivel2" antes de seguir. Quem tiver dificuldade com o clique direito, ajude apontando o item no menu.`,
      atividade: `No seu projeto, encontre a pasta "Layouts" no painel da direita. Clique com o botão direito nela e escolha "Add layout". Quando o novo layout aparecer, clique duas vezes no nome dele e troque para "Nivel2". Pronto: seu jogo agora tem dois cenários!`,
      gabarito: `O aluno deve terminar com dois layouts visíveis na pasta "Layouts": o do Nível 1 e um novo chamado "Nivel2". O caminho correto é botão direito na pasta "Layouts" → "Add layout" → renomear com duplo clique no nome. Se aparecer "Event sheet 2" junto, está certo: cada layout tem sua folha de eventos.`,
    },
    {
      titulo: `A caixinha que guarda o número da fase`,
      tipo: `Criação de variável`,
      tempo: `7 minutos`,
      guiaProfessor: `Abra a "Event sheet" do Nível 1. Mostre o clique direito numa área vazia e "Add global variable". Reforce que o tipo é "Number" (Número) e o valor inicial é 1. Use o pote etiquetado "nível" para representar a caixinha enquanto explica. Confira nas telas se todos digitaram o nome exatamente "nivel".`,
      atividade: `Abra a folha de eventos (Event sheet) do Nível 1. Clique com o botão direito num espaço vazio e escolha "Add global variable". No nome, escreva "nivel". No tipo, deixe "Number". No valor inicial, coloque 1. Clique em "OK". Você criou a caixinha mágica do nível!`,
      gabarito: `O aluno deve criar uma variável global de nome "nivel", do tipo "Number" (Número), com valor inicial 1. O caminho é: botão direito na folha de eventos → "Add global variable" → preencher nome, tipo e valor → "OK". A variável deve aparecer no topo da folha de eventos. Erro comum: deixar o tipo como "Text"; o correto é "Number".`,
    },
    {
      titulo: `Tocou a bandeira, passou de fase!`,
      tipo: `Montagem de evento (lógica do jogo)`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o coração da aula. Garanta primeiro que o aluno tem uma bandeira no Nível 1 e plataformas, herói e uma bandeira no Nivel2. Guie a criação do evento: "Add event" → objeto "Heroi" → condição "On collision with another object" → "Bandeira". Depois "Add action" → "System" → "Add to" → variável "nivel" valor 1; e uma segunda ação "System" → "Go to layout" → "Nivel2". Mande testar no botão "Run".`,
      atividade: `Na folha de eventos do Nível 1: clique em "Add event", escolha "Heroi", depois "On collision with another object" e selecione "Bandeira". Agora clique em "Add action": escolha "System", depois "Add to", escolha a variável "nivel" e digite 1. Adicione outra ação: "System" e "Go to layout", escolhendo "Nivel2". Aperte "Run" e corra até a bandeira!`,
      gabarito: `O evento correto é: Condição — Heroi → "On collision with another object" → Bandeira. Ações — 1) System → "Add to" → nivel + 1; 2) System → "Go to layout" → Nivel2. Ao testar com "Run", o herói deve tocar a bandeira e o jogo deve trocar para o Nivel2, com a variável "nivel" valendo 2. Se não funcionar, verificar: a bandeira foi selecionada na colisão? O "Go to layout" aponta para "Nivel2"? Existe um Heroi dentro do Nivel2?`,
    },
    {
      titulo: `Deixe o Nível 2 com a sua cara`,
      tipo: `Desafio criativo / personalização`,
      tempo: `8 minutos`,
      guiaProfessor: `Para os que já fizeram a transição funcionar. Incentive a diferenciar o Nível 2: cor de fundo diferente, mais plataformas, posições novas. Mostre onde fica a propriedade de cor: selecione o Layout "Nivel2" e veja a barra "Properties" à esquerda (propriedade de cor do layout) ou use um objeto Tiled Background de fundo. Premie com adesivo quem mostrar o jogo passando de fase com um Nível 2 personalizado.`,
      atividade: `Entre no seu "Nivel2" e deixe ele diferente do Nível 1: mude a cor do fundo e mude o lugar das plataformas para ficar mais desafiador. Depois teste o jogo do começo: comece no Nível 1, corra até a bandeira e veja seu novo Nível 2 personalizado aparecer. Mostre para um colega!`,
      gabarito: `O aluno deve ter o Nivel2 visualmente diferente do Nível 1 (cor de fundo trocada e/ou plataformas reposicionadas) e a transição funcionando: ao tocar a bandeira no Nível 1, o jogo vai para o Nivel2 personalizado. A cor de fundo se ajusta selecionando o layout e mudando a propriedade de cor na barra "Properties", ou colocando um objeto de fundo. Considera-se completo se a passagem de fase continuar funcionando após as mudanças.`,
    },
  ],
};
