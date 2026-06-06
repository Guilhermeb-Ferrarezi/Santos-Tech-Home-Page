import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Vidas e Tela de Vitória",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a dar vidas ao personagem e a fazer uma tela de Vitória aparecer quando o objetivo do jogo é alcançado.`,
  descricao: `Nesta aula o jogo das crianças ganha duas peças que todo jogo de verdade tem: as vidas e a tela de Vitória. Até agora o personagem andava na tela e juntava os pontinhos, mas o jogo nunca acabava nem premiava o jogador. Hoje vamos mudar isso. O jogo vai ter um começo, um meio e um final feliz.

Primeiro damos vidas ao personagem. Uma vida é uma chance. Vamos usar um número que mostra quantas chances o jogador ainda tem (por exemplo, começa com três corações). A ideia de contar chances é simples e poderosa: as crianças já entendem isso de jogos que jogam em casa. Aqui elas vão ver esse número aparecer na tela e entender que ele é controlado por elas, dentro do programa.

Depois criamos a tela de Vitória. Ela é a recompensa: quando o jogador junta todos os pontos (ou alcança o objetivo do jogo), uma mensagem grande aparece dizendo VOCÊ VENCEU. É o momento mais gostoso da aula, porque a criança joga o próprio jogo até ganhar e vê a mensagem que ela mesma montou surgir na tela. Isso fecha o ciclo do jogo e dá um enorme sentimento de orgulho.

O foco do mês é montar o jogo com a arte própria, e esta é a quarta e última aula da Semana 2. Por isso a tela de Vitória deve usar, sempre que possível, um desenho ou texto que a própria criança criou. No final, cada aluno vai jogar, vencer e comemorar. Eles saem da aula com um jogo que tem objetivo, tem desafio e tem um final de verdade.`,
  materiais: [
    `Computadores ligados, um por aluno, com o Construct 3 já aberto no navegador e o projeto do jogo da semana carregado (personagem que anda e pontos para coletar).`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo.`,
    `Arquivo de exemplo já pronto pelo professor: o mesmo jogo, porém com as vidas e a tela de Vitória funcionando, para mostrar o resultado final logo no começo.`,
    `Uma imagem ou texto de Vitória simples (a palavra VENCEU ou um desenho de troféu) que as crianças possam usar; de preferência feito por elas em aulas anteriores.`,
    `Crachás ou etiquetas com o nome de cada aluno e mouse extra de reserva.`,
    `Folhas de papel e lápis de cor para o exercício de desenho da tela de Vitória.`,
    `Adesivos ou carimbos de recompensa para comemorar quando cada aluno vencer o próprio jogo.`,
  ],
  conceitosChave: [
    `Vida — uma chance que o jogador tem; quando as chances acabam, o jogo termina.`,
    `Variável — uma caixinha mágica do computador que guarda um número, como a quantidade de vidas.`,
    `Tela de Vitória — uma mensagem ou layout que aparece quando o jogador ganha o jogo.`,
    `Objetivo — a missão do jogo; aqui é juntar todos os pontos para vencer.`,
    `Condição — a parte do "se" de uma regra: "SE juntou todos os pontos".`,
    `Ação — o que o jogo faz quando a regra acontece: "ENTÃO mostra a tela de Vitória".`,
    `Layout — cada tela do jogo no Construct 3; o jogo pode ter a tela de jogar e a tela de vencer.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Nesta aula você vai mexer em três coisas dentro do Construct 3: uma variável global para guardar as vidas, um objeto de texto para mostrar a mensagem, e uma regra (event) que leva o jogador para a Vitória.

A variável global é um número que o jogo guarda na memória. Você cria pela aba Project, clicando com o botão direito em Global variables ou usando o painel de eventos. Dê o nome Vidas e o valor inicial 3. Pense nela como um placar de chances.

A tela de Vitória pode ser feita de dois jeitos, do mais simples ao mais completo. O jeito simples: um objeto de Texto (ou um Sprite com o desenho VENCEU) que fica invisível e aparece quando o jogador ganha. O jeito completo: criar um segundo Layout chamado Vitoria (menu Project, botão direito em Layouts, Add layout) e mandar o jogo ir para ele. Para uma turma de 5 a 9 anos, comece pelo jeito simples (texto que aparece); só use o segundo Layout se a turma estiver tranquila.

A regra de vencer é um evento no Event Sheet. A lógica é: SE a pontuação chegou no total de pontos, ENTÃO mostra a Vitória. No Construct 3 isso vira: Add event, escolha a variável Pontos, condição Compare variable, igual ao número de pontos do jogo; depois Add action no objeto Texto, ação Set visible, Visible.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

Aquecimento (10 min): abra o seu arquivo de exemplo no projetor e jogue na frente das crianças. Mostre o número de vidas diminuindo e, no final, a tela VOCÊ VENCEU aparecendo. Pergunte: "O que apareceu quando eu ganhei?". Deixe a turma curiosa.

Conteúdo novo guiado (15 min): no seu projeto, vá na aba Project, clique com o botão direito e crie a variável global Vidas com valor 3. Em seguida, no Layout do jogo, arraste um objeto Text para a tela (duplo clique no Layout vazio, escolha Text), escreva VOCÊ VENCEU, deixe a fonte bem grande. No painel Properties, ponha Initial visibility como Invisible. Faça tudo devagar, narrando cada clique.

Mão na massa (25 min): cada criança repete no próprio computador. Eles criam a variável Vidas, colocam o texto VENCEU e o deixam invisível. Depois, no Event Sheet, criam o evento: Add event, variável Pontos igual ao total, Add action, Texto, Set visible, Visible. Circule pela sala ajudando um a um. Quando terminar, mande jogar até vencer.

Desafio e compartilhar (10 min): desafie quem terminou a mudar a cor ou a palavra da tela de Vitória. Depois, cada aluno mostra no projetor o momento em que vence o próprio jogo e a turma comemora junto.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Vidas: "Cada vida é uma chance, como ter três corações. Se você usar todos, o jogo acaba." Mostre três dedos e vá abaixando um a um.

Variável: "É uma caixinha mágica que guarda um número. A gente escreveu 3 na caixinha das vidas."

Tela de Vitória: "É a festa do jogo. Quando você ganha, aparece a placa VOCÊ VENCEU, igual à medalha que ganhamos quando fazemos algo legal."

Condição e ação: use o jogo do SE e ENTÃO com as mãos: "SE você juntou tudo (mostre os pontos), ENTÃO a festa começa (abra os braços)."

## Erros comuns e como ajudar

O texto de Vitória aparece o tempo todo: a criança esqueceu de deixar Initial visibility como Invisible. Mostre onde fica no painel Properties.

A Vitória nunca aparece: o número da condição não bate com o total de pontos. Conte os pontos juntos e ajuste o número.

A criança apaga sem querer um evento: ensine o atalho de desfazer (Ctrl e Z) e mantenha a calma. Salve o projeto com frequência.

Mexer demais na fonte e travar: limite a uma mudança de cor por vez para não perder tempo nem se perder.`,
  exercicios: [
    {
      titulo: `Criando a caixinha das vidas`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como criar a variável global. Vá na aba Project, clique com o botão direito, escolha Add global variable, dê o nome Vidas e o valor 3. Peça que cada criança repita no próprio computador, devagar, enquanto você caminha pela sala conferindo.`,
      atividade: `No seu jogo, crie uma caixinha mágica chamada Vidas e escreva o número 3 dentro dela. Essa caixinha vai guardar quantas chances o seu personagem tem.`,
      gabarito: `A criança acertou se, no painel de variáveis globais, aparece uma variável de nome Vidas com o valor inicial 3. O professor confere abrindo o Event Sheet ou o painel Project e vendo Vidas = 3 na lista.`,
    },
    {
      titulo: `A placa VOCÊ VENCEU escondida`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Demonstre arrastando um objeto Text para o Layout, escrevendo VOCÊ VENCEU em fonte grande e, no painel Properties, mudando Initial visibility para Invisible. Reforce que a placa fica escondida até o jogador ganhar. Acompanhe cada aluno.`,
      atividade: `Coloque na sua tela um texto bem grande escrito VOCÊ VENCEU. Depois deixe esse texto invisível, escondido, para ele só aparecer quando você ganhar o jogo.`,
      gabarito: `A criança acertou se existe um objeto de texto com a mensagem VOCÊ VENCEU e a propriedade Initial visibility está marcada como Invisible, ou seja, o texto não aparece ao iniciar o jogo. Ao apertar play, a placa não deve estar visível.`,
    },
    {
      titulo: `A regra de vencer`,
      tipo: `desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no Event Sheet como montar a regra. Add event, escolha a variável Pontos, condição Compare variable, igual ao total de pontos do jogo; depois Add action, objeto Texto, Set visible, Visible. Explique em voz alta o SE e o ENTÃO. Ajude quem travar a casar o número certo.`,
      atividade: `Monte a regra mágica do seu jogo: SE eu juntar todos os pontos, ENTÃO a placa VOCÊ VENCEU aparece. Depois jogue e tente vencer para ver a placa surgir.`,
      gabarito: `A criança acertou se, ao coletar todos os pontos durante o jogo, a placa VOCÊ VENCEU aparece na tela. O evento deve comparar Pontos com o total correto e a ação deve tornar o texto visível.`,
    },
    {
      titulo: `Desenhando a minha tela de Vitória`,
      tipo: `desenho no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue folha e lápis de cor. Peça que cada aluno desenhe como gostaria que fosse a tela de quando ganha o jogo: cores, palavra, troféu, estrelas. Explique que ideias bonitas do papel podem virar a arte do jogo nas próximas aulas. Circule elogiando.`,
      atividade: `Desenhe no papel a sua tela de Vitória dos sonhos. Escreva uma palavra de comemoração e desenhe enfeites, como um troféu, estrelas ou fogos. Capriche nas cores.`,
      gabarito: `Não há resposta única. O desenho está correto se mostra claramente uma ideia de comemoração de vitória: uma palavra de festa (como VENCEU, GANHEI ou PARABÉNS) e pelo menos um enfeite. O professor valida conversando com a criança sobre o que ela desenhou.`,
    },
    {
      titulo: `Roda dos campeões`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Chame cada aluno para mostrar no projetor o momento em que vence o próprio jogo e a placa aparece. Faça perguntas simples: o que sua placa diz, de que cor ela é, o que você sentiu ao ganhar. Conduza os aplausos e celebre todos.`,
      atividade: `Mostre para a turma o seu jogo até a hora de vencer. Quando a placa VOCÊ VENCEU aparecer, conte para os amigos o que ela diz e como você se sentiu ao ganhar.`,
      gabarito: `O aluno teve sucesso se conseguiu jogar até a tela de Vitória aparecer e explicou com as próprias palavras o que sua placa mostra e como se sentiu. Todos devem conseguir, com ajuda do professor, fazer a placa surgir ao menos uma vez.`,
    },
  ],
};
