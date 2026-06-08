import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Minha IA em ação",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Finalizar o treino do mini-projeto de IA e conectá-lo a um bloco simples (Scratch ou cartões do ML for Kids) que reage às respostas do modelo, testando com colegas usando entradas reais.`,
  descricao: `Hoje é o dia em que a IA das crianças deixa de ser só um treino na tela e passa a fazer alguma coisa de verdade. Nas aulas anteriores os alunos ensinaram o computador a reconhecer categorias (por exemplo, textos alegres e textos tristes, ou desenhos de gato e de cachorro). Agora eles vão pegar esse modelo treinado e ligar a uma ação: quando a IA reconhece uma categoria, o programa responde com um som, uma fala, uma cor ou um personagem que se mexe. É a hora em que a criança vê a própria criação ganhar vida.

No ML for Kids, depois de treinar o modelo, existe um botão para "Make" (Fazer), que leva o aluno para o Scratch já com blocos especiais da IA prontos para usar. Esses blocos novos ficam numa categoria com o nome do projeto e permitem perguntar ao modelo "qual é a categoria disto?" dentro do jogo. A grande ideia da aula é juntar um bloco "quando..." com um bloco da IA e um bloco de resposta (falar, tocar som, trocar de fantasia). Assim, a IA pensa e o Scratch reage.

A parte mais divertida e mais importante é o teste com entradas reais. Cada criança vai digitar frases novas (ou mostrar desenhos novos) que a IA nunca viu antes, e a turma observa se o modelo acerta. Quando erra, isso não é um problema: é uma pista. O aluno volta ao painel de treino, adiciona mais exemplos na categoria certa, treina de novo e testa outra vez. Esse ciclo de testar, observar o erro e melhorar é o coração de como a inteligência artificial fica mais esperta.

Ao final, cada criança terá um pequeno projeto funcionando: ela fala ou mostra algo, a IA decide a categoria e o computador responde de um jeito visível e divertido. Eles também terão experimentado o papel de "ajustador de IA", aprendendo que mais exemplos e categorias bem separadas deixam o resultado mais certeiro. É a ponte perfeita para a próxima semana, quando construirão o modelo final.`,
  materiais: [
    `Computadores com o ML for Kids aberto e o projeto de cada criança já carregado e treinado`,
    `Navegador com a página do Scratch do ML for Kids pronta (botão "Make" disponível)`,
    `Projetor ou TV grande para o professor demonstrar onde clicar e para os testes em turma`,
    `Exemplos prontos de frases ou desenhos novos para testar a IA (alguns fáceis e alguns "pegadinha")`,
    `Cartão impresso com a receita do bloco: "quando" + "reconhecer (IA)" + "responder"`,
    `Folha de registro simples para anotar o que a IA acertou e o que errou`,
    `Caixinha de som ou fones para ouvir as respostas faladas do Scratch`,
  ],
  conceitosChave: [
    `Modelo treinado — a IA depois que aprendeu com os seus exemplos; já sabe separar as categorias.`,
    `Bloco da IA — o comando especial no Scratch que pergunta ao seu modelo "que categoria é esta?".`,
    `Conectar — ligar a resposta da IA a uma ação do computador, como falar, tocar som ou mudar de cor.`,
    `Entrada real — uma frase ou desenho novo, de verdade, que você dá para a IA na hora de testar.`,
    `Reação — o que o programa faz quando a IA decide uma categoria (a resposta visível ou sonora).`,
    `Testar — experimentar coisas novas para ver se a IA acerta ou erra.`,
    `Ajustar — melhorar a IA dando mais exemplos e separando melhor as categorias.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar IA para dar esta aula. O ML for Kids já entrega tudo mastigado. O caminho é sempre o mesmo: o aluno entra no projeto dele, treina o modelo e usa o botão "Make" (Fazer) para abrir o Scratch com os blocos da IA já prontos. Esses blocos novos aparecem numa categoria na coluna da esquerda do Scratch, geralmente com o nome do projeto da criança. O bloco principal é parecido com "recognise text [ ] (label)" ou "recognise images (label)" — em português, "reconhecer o texto/imagem (categoria)". Ele devolve o nome da categoria que a IA escolheu.

Antes da aula: abra o ML for Kids em cada computador, faça login no projeto de cada criança e confirme que o modelo já está treinado (na aba "Train" deve aparecer o botão "Train new machine learning model" já usado, com o status de pronto). Teste você mesmo o botão "Make" uma vez para garantir que o Scratch abre certo. A receita do bloco que todos vão montar é simples: um bloco "quando a bandeira verde for clicada" ou "quando este sprite for clicado", depois "pergunte [ ] e espere", depois um bloco "se ... então" comparando o resultado do bloco da IA com uma categoria, e dentro dele uma ação ("falar", "tocar som", "mudar fantasia").

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, relembre o que cada IA aprendeu a reconhecer. Pergunte: "O que a sua IA já sabe separar?". No projetor, abra um projeto e clique na aba "Learn & Test" para mostrar a IA respondendo a uma frase. Diga que hoje a IA vai sair do painel e entrar num joguinho de verdade.

Conteúdo novo guiado (15 min): No projetor, faça o caminho completo devagar. Clique em "Make", espere o Scratch abrir, mostre a categoria de blocos com o nome do projeto na coluna da esquerda. Arraste o bloco da IA ("reconhecer o texto...") e mostre que ele responde uma categoria. Monte com a turma a receita do cartão: "quando" + "pergunte e espere" + "se (resposta da IA = alegre) então falar Que legal!". Clique na bandeira verde e teste uma frase no palco.

Mão na massa (25 min): Cada criança monta a própria receita no seu computador. Circule pela sala. O objetivo mínimo é UM "se ... então" funcionando para uma categoria. Quem avançar rápido cria um segundo "se" para a outra categoria, com uma resposta diferente (som, cor, personagem). Incentive testar com frases ou desenhos novos a cada passo.

Desafio e compartilhar (10 min): Faça um "torneio de testar". Cada criança mostra o projeto no projetor e a turma sugere uma entrada nova para a IA decidir. Anotem juntos um acerto e um erro. Combine que, na próxima aula, vamos consertar os erros com mais exemplos.

## Como explicar para crianças

Use a analogia do robô garçom: a IA é o garçom que escuta o pedido (a frase) e decide o prato (a categoria); o Scratch é a cozinha que prepara a resposta. Diga que o bloco da IA é uma "pergunta mágica": você dá uma frase e ele devolve uma palavra (a categoria). O bloco "se ... então" é uma "porta": só abre e faz a ação se a IA disser a categoria certa. Quando a IA erra, fale que ela só viu poucos exemplos ainda, igual a uma criança que ainda está aprendendo a diferença entre dois bichos.

## Erros comuns e como ajudar

A criança não acha os blocos da IA: eles ficam na coluna da esquerda, numa categoria com o nome do projeto; role a lista para baixo. O projeto abre o Scratch sem os blocos: o modelo não foi treinado; volte ao ML for Kids, aba "Train", e clique em treinar de novo. O "se ... então" nunca dispara: confira se a categoria escrita no bloco está exatamente igual à do treino (maiúsculas e acentos contam). A IA erra muito: não é defeito; leve a criança de volta ao painel para adicionar mais exemplos na categoria certa. A criança quer só brincar e não testar: peça três entradas novas e anote os resultados na folha de registro.`,
  exercicios: [
    {
      titulo: `O que a minha IA já sabe`,
      tipo: `Revisão em roda`,
      tempo: `6 minutos`,
      guiaProfessor: `Em roda, cada criança diz em uma frase o que a sua IA aprendeu a reconhecer e quais são as categorias. Ajude quem esquecer abrindo o projeto na aba "Learn & Test". O objetivo é relembrar o modelo antes de conectá-lo.`,
      atividade: `Conte para a turma: o que a sua IA aprendeu a reconhecer? Diga o nome das categorias que ela sabe separar.`,
      gabarito: `A criança nomeia o tema e ao menos duas categorias do próprio projeto. Exemplo: "Minha IA reconhece frases e separa em 'alegre' e 'triste'." Acerto = lembrar o que o modelo faz e as categorias certas.`,
    },
    {
      titulo: `Abrir o Scratch com os blocos da IA`,
      tipo: `Prática guiada no ML for Kids`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor e depois acompanhe cada um. Caminho: no projeto, clique em "Make" (Fazer) e espere o Scratch abrir. Os blocos da IA aparecem na coluna da esquerda, na categoria com o nome do projeto. Se não aparecerem, o modelo não foi treinado; volte à aba "Train".`,
      atividade: `No seu projeto, clique no botão "Make" para abrir o Scratch. Encontre, na coluna da esquerda, a categoria de blocos com o nome do seu projeto e arraste o bloco "reconhecer..." para a área de montar.`,
      gabarito: `O Scratch abre e a criança encontra e arrasta o bloco da IA. Acerto = achar a categoria com o nome do projeto e soltar o bloco "reconhecer o texto/imagem" na área de scripts. Erro comum: o modelo não treinado faz os blocos não aparecerem.`,
    },
    {
      titulo: `Montar a receita "se ... então"`,
      tipo: `Construção de blocos`,
      tempo: `12 minutos`,
      guiaProfessor: `Use o cartão da receita. Ajude a montar: "quando a bandeira verde for clicada" + "pergunte [ ] e espere" + "se (bloco da IA = nome de uma categoria) então (falar algo)". Confira que a categoria escrita no "se" está igual à do treino, com acentos e maiúsculas. O mínimo é um "se" funcionando.`,
      atividade: `Monte esta receita no Scratch: quando a bandeira verde for clicada, pergunte e espere; se a IA reconhecer a categoria "alegre", então faça o personagem falar "Que legal!". Clique na bandeira verde e teste.`,
      gabarito: `Os blocos encaixados na ordem certa e a ação disparando quando a IA reconhece a categoria. Exemplo funcionando: digito "eu adorei o dia", a IA responde "alegre" e o personagem fala "Que legal!". Acerto = pelo menos um "se ... então" reagindo à resposta da IA.`,
    },
    {
      titulo: `Testar com entradas reais`,
      tipo: `Teste prático com registro`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue exemplos novos (alguns fáceis, alguns pegadinha) ou peça que a criança invente frases/desenhos. A cada teste, anote na folha se a IA acertou ou errou. O foco é coletar pistas, sem consertar ainda. Comemore tanto acertos quanto erros descobertos.`,
      atividade: `Dê três entradas novas para a sua IA (frases ou desenhos que ela nunca viu). Para cada uma, anote na folha: o que você deu, qual categoria a IA escolheu e se ela acertou ou errou.`,
      gabarito: `A folha preenchida com três testes e o resultado de cada um. Exemplo: entrada "que dia chato" → IA disse "alegre" → errou. Acerto do exercício = registrar pelo menos um acerto e um erro com clareza, mesmo que a IA tenha errado.`,
    },
    {
      titulo: `Ajustar a IA para ficar mais certeira`,
      tipo: `Desafio de melhoria`,
      tempo: `9 minutos`,
      guiaProfessor: `Pegue um erro anotado no exercício anterior. Leve a criança ao ML for Kids, aba "Train", adicione a frase/desenho que errou na categoria correta, clique em treinar de novo e volte ao Scratch para testar a mesma entrada. Mostre que mais exemplos deixam a IA mais esperta.`,
      atividade: `Escolha uma entrada que a sua IA errou. Adicione esse exemplo na categoria certa no painel de treino, treine a IA de novo e teste a mesma entrada outra vez. A IA melhorou?`,
      gabarito: `A criança adiciona o exemplo na categoria correta, retreina e testa de novo. Acerto = entender que mais exemplos na categoria certa tornam o modelo mais preciso, mesmo que um único ajuste nem sempre corrija de imediato. Exemplo: depois de adicionar "que dia chato" em "triste" e retreinar, a IA passa a responder "triste".`,
    },
  ],
};
