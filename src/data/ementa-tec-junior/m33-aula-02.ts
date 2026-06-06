import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "A Lista de Assets do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende o que é um asset e monta, organizada em cenário, personagens e colecionáveis, a lista de tudo o que o seu jogo voxel precisa, marcando o que será construído primeiro.`,
  descricao: `Nesta aula a turma transforma a grande ideia da aula passada em um plano de verdade. Na Aula 1 cada aluno sonhou o seu jogo: o mundo, o herói, a aventura. Agora chega a pergunta mais importante de quem vai criar de fato: "do que esse jogo é feito?". A resposta tem um nome especial no mundo dos games: asset. Um asset é cada pecinha que a gente constrói e coloca dentro do jogo, como a árvore, o personagem, a moeda ou a casa.

A ideia central é simples e poderosa: nenhum jogo nasce pronto. Antes de abrir o MagicaVoxel e empilhar cubinhos, quem cria games faz uma lista de compras do jogo. Assim como a gente lista os ingredientes antes de fazer um bolo, o criador lista os assets antes de modelar. Sem lista, a criança abre o programa, faz uma coisinha solta e se perde. Com lista, ela sabe exatamente o que falta construir e comemora cada item riscado.

Para não virar bagunça, a lista é organizada em três caixas. A caixa do cenário guarda as peças do mundo: o chão, as árvores, as pedras, as casas. A caixa dos personagens guarda quem se move e age: o herói, os amigos, os vilões. A caixa dos colecionáveis guarda os itens que o jogador pega: moedas, chaves, corações, estrelas. Separar nessas três famílias ajuda a criança a pensar no jogo inteiro e a perceber o que ainda está faltando.

Por fim, cada aluno marca o que vem primeiro. Nem tudo precisa ser feito de uma vez, e algumas peças são mais importantes para o jogo começar a existir. Decidir a ordem é uma habilidade de planejamento valiosa: a criança aprende que o herói e o chão costumam vir antes da décima árvore decorativa. Esta aula é toda no papel e na conversa; ela prepara o terreno para que, nas próximas aulas, a modelagem no MagicaVoxel flua sem que ninguém fique perdido.`,
  materiais: [
    `Um computador por criança com o MagicaVoxel já aberto, só para mostrar de perto exemplos de assets prontos.`,
    `Projetor ou TV grande espelhando a tela do professor, para todos verem os exemplos de assets.`,
    `Dois ou três modelos voxel prontos pelo professor (uma árvore, um personagem simples e uma moeda), salvos e abertos para exibir.`,
    `Imagens impressas ou na tela de jogos voxel conhecidos, mostrando cenário, personagens e itens separadamente.`,
    `Uma folha de "Lista de Assets" para cada aluno, com três colunas já tituladas: Cenário, Personagens e Colecionáveis.`,
    `Lápis, canetinhas e adesivos de estrela para marcar os assets que vêm primeiro.`,
    `Um cartaz grande na parede com as três caixas (Cenário, Personagens, Colecionáveis) para a lista coletiva da turma.`,
  ],
  conceitosChave: [
    `Asset — cada pecinha que a gente cria e coloca dentro do jogo, como uma árvore, um herói ou uma moeda.`,
    `Cenário — a caixa dos assets que formam o mundo onde a aventura acontece: chão, árvores, pedras, casas.`,
    `Personagens — a caixa dos assets que se movem e agem na história: o herói, os amigos e os vilões.`,
    `Colecionáveis — a caixa dos assets que o jogador pega durante o jogo: moedas, chaves, corações e estrelas.`,
    `Lista de assets — a "lista de compras" do jogo, com tudo o que precisa ser construído antes de começar.`,
    `Prioridade — decidir o que vem primeiro; as peças mais importantes para o jogo existir são construídas antes.`,
    `Planejar — pensar e organizar antes de fazer, para não se perder na hora de criar no computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Asset é o nome que os criadores de games dão a cada elemento construído que entra no jogo: um personagem, uma árvore, uma moeda, uma casa, um chão. No nosso projeto do mês, cada asset será um modelo feito de cubinhos (voxels) no MagicaVoxel. A função desta aula é puramente de planejamento: a turma ainda não vai modelar, vai pensar. Pode parecer pouco, mas é o passo que diferencia quem cria um jogo de quem só fica fazendo peças soltas sem rumo.

A grande sacada pedagógica é a organização em três famílias: Cenário, Personagens e Colecionáveis. Cenário é o mundo (o que fica parado e forma o ambiente). Personagens é quem age (herói, amigos, vilões). Colecionáveis são os itens que o jogador pega. Essa divisão dá à criança um mapa mental do jogo inteiro e revela buracos: "tenho herói, mas não tenho vilão"; "tenho moedas, mas o mundo não tem chão". Você não precisa dominar o MagicaVoxel para esta aula, só precisa abri-lo para mostrar exemplos de assets prontos.

## Passo a passo da aula

Aquecimento e revisão (10 min): Sente a turma em roda. Relembre a aula passada pedindo que dois ou três alunos contem a grande ideia do seu jogo. Em seguida faça a pergunta-chave: "do que esse jogo é feito?". Anote as respostas no cartaz, sem organizar ainda, deixando a bagunça aparecer de propósito.

Conteúdo novo guiado (15 min): Apresente a palavra asset. No projetor, com o MagicaVoxel aberto, mostre seus três modelos prontos: abra a árvore e diga "isto é um asset de cenário"; abra o personagem e diga "isto é um asset de personagem"; abra a moeda e diga "isto é um asset colecionável". Para abrir cada arquivo use o menu superior, no botão de arquivo, opção de abrir, e escolha o modelo salvo; ou simplesmente deixe os três já abertos em janelas e alterne. Aponte para o cartaz e mostre as três caixas: Cenário, Personagens, Colecionáveis. Pegue as respostas bagunçadas do aquecimento e arraste cada uma para a caixa certa, em voz alta.

Mão na massa (25 min): Entregue a folha de Lista de Assets com as três colunas. Cada aluno preenche a sua, pensando no próprio jogo. Circule pela sala fazendo perguntas que destravam: "qual é o chão do seu mundo?", "quem é o vilão?", "o que o jogador junta para ganhar pontos?". Ajude quem só escreve em uma coluna a equilibrar as três. Não deixe ninguém parar antes de ter ao menos dois itens em cada caixa.

Desafio e compartilhar (10 min): Desafio da estrela: cada criança coloca um adesivo de estrela no asset que ela acha que precisa ser construído primeiro, e explica por quê. Depois, roda rápida de compartilhar: cada um mostra a lista e diz o seu item estrelado. Feche montando a lista coletiva da turma no cartaz grande.

## Como explicar para crianças

Não comece pela palavra difícil. Diga: "todo jogo é feito de pecinhas, e cada pecinha tem um nome chique: asset". Use a analogia da lista de compras: "antes de fazer um bolo, a gente lista os ingredientes; antes de fazer um jogo, a gente lista os assets". Para as três caixas, use gestos e imagens: Cenário é "o lugar onde tudo acontece"; Personagens são "quem mexe e fala"; Colecionáveis são "os tesouros que a gente pega". Para a prioridade, pergunte: "se você só pudesse construir uma coisa hoje, qual seria a mais importante para o jogo existir?". Comemore cada item da lista como uma conquista.

## Erros comuns e como ajudar

Confundir cenário com colecionável: lembre que cenário fica parado formando o mundo e colecionável é o que o jogador pega na mão. Listar só uma família (só personagens, por exemplo): peça para preencher pelo menos duas peças em cada caixa antes de continuar. Querer cinquenta assets de uma vez: mostre que lista grande demais cansa, e que começar com poucos e bem escolhidos é mais esperto. Travar na folha em branco: ofereça exemplos prontos e pergunte sobre o jogo dela. Achar que já vai modelar hoje: explique com carinho que hoje é dia de planejar, e que o computador de verdade entra em força na próxima aula.`,
  exercicios: [
    {
      titulo: `Asset ou não é asset?`,
      tipo: `jogo de adivinhar`,
      tempo: `5 min`,
      guiaProfessor: `Faça em roda, no ritmo de jogo. Fale itens em voz alta e a turma responde com o corpo. Misture coisas que são assets do jogo com coisas que não são, para checar se entenderam o conceito.`,
      atividade: `O professor fala uma palavra. Se for um asset de jogo (árvore, herói, moeda, casa), levantem as mãos e gritem "asset!". Se não for de jogo (geladeira da sua casa, professora, mochila), fiquem quietos e abracem os joelhos.`,
      gabarito: `A criança acertou ao levantar as mãos para itens que entram no jogo (árvore, herói, moeda, casa, vilão) e ficar quieta para coisas do mundo real que não são do jogo. Acerto mostra que entendeu que asset é uma pecinha construída para dentro do jogo.`,
    },
    {
      titulo: `Três caixas, cada peça no lugar`,
      tipo: `classificação no quadro`,
      tempo: `7 min`,
      guiaProfessor: `Use o cartaz com as três caixas (Cenário, Personagens, Colecionáveis). Distribua cartões com nomes ou desenhos de assets. Cada criança vai ao cartaz e cola o seu cartão na caixa certa, explicando a escolha.`,
      atividade: `Pegue um cartão de asset (por exemplo: pedra, herói, moeda, vilão, árvore, chave). Vá até o cartaz e cole o cartão na caixa certa: Cenário, Personagens ou Colecionáveis. Diga por que ele vai ali.`,
      gabarito: `Acertou quem colocou cada cartão na família certa: pedra e árvore em Cenário; herói e vilão em Personagens; moeda e chave em Colecionáveis. A explicação deve dizer que cenário é o mundo, personagem é quem age e colecionável é o que se pega.`,
    },
    {
      titulo: `A lista do meu jogo`,
      tipo: `produção individual no papel`,
      tempo: `8 min`,
      guiaProfessor: `Este é o coração da aula. Entregue a folha de três colunas. Circule e faça perguntas que destravam. Garanta que ninguém termine com uma coluna vazia. Aceite desenhos para quem ainda não escreve bem.`,
      atividade: `Na sua folha de Lista de Assets, preencha as três colunas pensando no seu jogo. Escreva ou desenhe pelo menos dois assets em Cenário, dois em Personagens e dois em Colecionáveis.`,
      gabarito: `Acertou quem entregou a folha com pelo menos dois assets coerentes em cada uma das três colunas, sem misturar as famílias (nada de moeda na coluna de personagens). A lista deve fazer sentido com o jogo que a criança imaginou na Aula 1.`,
    },
    {
      titulo: `A estrela do "vem primeiro"`,
      tipo: `decisão e priorização`,
      tempo: `6 min`,
      guiaProfessor: `Trabalhe a ideia de prioridade. Explique que nem tudo se constrói no mesmo dia e que algumas peças são essenciais para o jogo começar. Cada criança escolhe um item da sua lista para construir primeiro e justifica.`,
      atividade: `Olhe a sua lista. Cole um adesivo de estrela no asset que você acha que precisa ser construído primeiro. Depois conte para a turma: "eu vou começar por este porque...".`,
      gabarito: `Acertou quem escolheu UM asset prioritário e deu uma justificativa razoável (por exemplo: "o herói, porque é ele que o jogador controla" ou "o chão, porque sem chão o personagem cai"). Não há resposta única; o que conta é escolher um só e explicar o porquê.`,
    },
    {
      titulo: `A grande lista da turma`,
      tipo: `desafio coletivo`,
      tempo: `4 min`,
      guiaProfessor: `Feche a aula construindo, no cartaz grande, uma lista coletiva juntando os assets de todos. O desafio é a turma perceber peças repetidas e peças que ninguém pensou, somando ideias. Você escreve enquanto eles ditam.`,
      atividade: `Em grupo, vamos montar a lista de assets da turma inteira no cartaz. Cada um diz um asset da sua folha; se já estiver no cartaz, dizemos "repetido!" e pensamos em um novo. O desafio é encher as três caixas juntos.`,
      gabarito: `O desafio foi vencido quando o cartaz tem as três caixas (Cenário, Personagens, Colecionáveis) preenchidas com assets variados vindos de várias crianças, sem repetições óbvias. Mostra que a turma entendeu organizar e somar ideias para planejar o jogo.`,
    },
  ],
};
