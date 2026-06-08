import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Treinando com Sons ou Poses",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Cada criança treina um modelo completo de som ou de pose na Teachable Machine, testa ao vivo se a IA acerta e melhora o resultado adicionando mais exemplos.`,
  descricao: `Nas aulas anteriores as crianças descobriram que a IA aprende olhando muitos exemplos, conheceram a Teachable Machine e já treinaram um modelo de imagens. Agora chegou a hora de treinar com algo novo e divertido: o som da nossa voz ou as poses do nosso corpo. É a mesma ideia de sempre, mas com o microfone ou a câmera capturando os exemplos de um jeito diferente.

Nesta aula cada criança escolhe um caminho e faz o treino do começo ao fim sozinha (com a sua ajuda por perto): cria as categorias, grava vários exemplos, clica em treinar e espera o modelo ficar pronto. O objetivo é que cada uma sinta na prática o ciclo completo da IA, do exemplo até o resultado. No fim, o computador vai tentar adivinhar o som ou a pose, e a criança vai ver na hora se acertou ou errou.

O ponto mais importante da aula não é só treinar, é testar e melhorar. Quando a IA erra, isso não é um problema, é uma pista. Erro quer dizer que faltou exemplo ou que os exemplos estavam parecidos demais. A criança aprende a voltar, gravar mais exemplos e treinar de novo para deixar a IA mais esperta. Esse vai e volta (treinar, testar, melhorar) é o coração do trabalho com inteligência artificial.

Como professor, você não precisa ser especialista em Teachable Machine. Esta aula é um tutorial: vamos mostrar exatamente onde clicar, o nome de cada botão e os erros que as crianças sempre cometem. Faça tudo no projetor primeiro, devagar, e depois deixe a turma repetir. A energia da aula vem do barulho e do movimento, então prepare-se para uma sala animada e cheia de sons e poses.`,
  materiais: [
    `Computadores (um por criança ou em dupla) com a Teachable Machine já aberta no navegador, no endereço teachablemachine.withgoogle.com`,
    `Microfone funcionando (o do notebook serve) para o projeto de som, e webcam funcionando para o projeto de pose`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo`,
    `Um modelo de som já treinado pelo professor (ex.: "palma" e "silêncio") e um modelo de pose já treinado (ex.: "braços para cima" e "braços para baixo") para mostrar pronto`,
    `Cartões com desenhos das poses sugeridas e das palavras/sons sugeridos, para as crianças que não sabem o que escolher`,
    `Fones de ouvido (opcionais) para diminuir o barulho quando vários grupos gravarem som ao mesmo tempo`,
    `Crachás ou etiquetas para escrever o nome das categorias e não esquecer`,
  ],
  conceitosChave: [
    `Categoria — cada gavetinha onde a IA guarda um tipo de exemplo, como "palma" ou "braço para cima".`,
    `Exemplo de som — um pedacinho de áudio que a IA grava e escuta para aprender, como bater palma várias vezes.`,
    `Exemplo de pose — uma fotinha do seu corpo que a câmera tira para a IA aprender o jeito que você ficou.`,
    `Ruído de fundo — o som da sala quando ninguém faz nada de propósito; a IA precisa aprender isso também para saber o que é silêncio.`,
    `Treinar — o momento em que a IA estuda todos os exemplos de uma vez para ficar pronta para adivinhar.`,
    `Testar — mostrar um som ou uma pose novinha para a IA e ver se ela acerta a categoria.`,
    `Melhorar — quando a IA erra, voltar e gravar mais exemplos para deixar ela mais esperta.`,
  ],
  treinamento: `## O que o professor precisa saber

A Teachable Machine tem três tipos de projeto na tela inicial: "Projeto de Imagem", "Projeto de Áudio" e "Projeto de Pose". Nesta aula a turma vai usar o de Áudio (som) ou o de Pose. Você não precisa decidir um único caminho para todos: pode deixar metade da sala no som e metade na pose, ou deixar cada criança escolher. O importante é que cada uma faça o ciclo completo: criar categorias, gravar exemplos, treinar, testar e melhorar.

Uma diferença importante do projeto de Áudio: ele sempre começa com uma categoria especial chamada "Background Noise" (Ruído de Fundo). Essa categoria precisa de exemplos do silêncio da sala antes de qualquer outra coisa, senão o botão de treinar não funciona. Avise isso desde o começo. No projeto de Pose, a câmera tira fotos do corpo e marca pontinhos nos braços, pernas e cabeça (o "esqueleto"). Teste o microfone e a webcam antes da aula no seu computador.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Faça o "jogo do robô". Você é a IA. As crianças mostram uma pose ou fazem um som e você "adivinha" o nome. Depois pergunte: "Como eu aprendi? Vendo muitos exemplos!". Relembre que a IA precisa de muitos exemplos, igual elas viram na aula de imagens.

CONTEÚDO NOVO GUIADO (15 min): No projetor, abra teachablemachine.withgoogle.com e clique em "Comece Já" (Get Started). Mostre os três projetos e escolha um para demonstrar. Para o de Áudio: clique em "Projeto de Áudio". Aparece a caixa "Background Noise". Clique em "Mic" e depois em "Gravar 20 Segundos" (Record 2 Seconds repetido) ficando em silêncio; depois clique em "Extrair Amostra" (Extract Sample). Crie a segunda categoria clicando no lápis para renomear (ex.: "Palma") e grave batendo palma. Para o de Pose: clique em "Projeto de Pose", clique em "Webcam" em "Class 1", segure a pose e clique em "Segurar para Gravar" (Hold to Record). Em ambos, clique no botão grande "Treinar Modelo" (Train Model) e mostre a janela de testar ao vivo à direita.

MÃO NA MASSA (25 min): Agora cada criança faz o seu. Passe de mesa em mesa. A meta mínima é: 1 categoria de "vazio" (ruído de fundo ou pose parada) e 2 categorias de verdade, com pelo menos 8 exemplos cada. Quando treinarem, peça que testem na hora fazendo o som ou a pose e olhem as barrinhas coloridas que mostram o palpite da IA. Se errar, oriente a clicar na categoria que errou, gravar mais exemplos e clicar em "Treinar Modelo" de novo.

DESAFIO + COMPARTILHAR (10 min): Cada criança mostra o modelo para a turma e faz a IA acertar ao vivo. Desafio: "Quem consegue fazer a IA errar de propósito?" (isso ensina os limites). Termine perguntando o que cada um fez para a IA melhorar.

## Como explicar para crianças

Use a analogia da gavetinha: cada categoria é uma gaveta onde guardamos exemplos parecidos. Quanto mais exemplos colocamos na gaveta, mais fácil a IA encontra. Para o ruído de fundo, diga: "Precisamos ensinar a IA a reconhecer o silêncio também, senão ela acha que tudo é palma". Para a pose, diga: "A câmera desenha um bonequinho de pontinhos em você; mova o corpo bem diferente em cada categoria". Compare treinar com estudar para a prova e testar com fazer a prova.

## Erros comuns e como ajudar

O erro número um no Áudio é pular o "Background Noise": sem ele o botão de treinar fica apagado. Sempre comece por essa caixa. Outro erro é gravar poucos exemplos (a IA fica confusa); a regra é "mais exemplos, IA mais esperta". Crianças tímidas falam baixo demais ou fazem a pose torta no canto da tela; peça para ficar bem na frente da câmera e fazer o som bem claro. No projeto de Pose, se duas categorias forem parecidas (braço só um pouco diferente), a IA mistura; oriente poses bem distintas. Por fim, muitas esquecem de clicar em "Treinar Modelo" depois de adicionar exemplos novos e acham que a IA "não melhorou", sempre treine de novo após mudar algo.`,
  exercicios: [
    {
      titulo: `Som ou Pose? Escolhendo o meu caminho`,
      tipo: `Escolha guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre rapidamente um modelo de som pronto e um de pose pronto no projetor. Deixe cada criança decidir qual quer fazer. Ajude quem ficar em dúvida usando os cartões de sugestão.`,
      atividade: `Olhe os dois exemplos que o professor mostrou. Escolha: você quer treinar a IA com SONS (sua voz, palmas, assobio) ou com POSES (mexer os braços e o corpo)? Diga em voz alta sua escolha e o nome das duas categorias que você quer criar.`,
      gabarito: `Não há resposta certa ou errada na escolha. O exercício está correto quando a criança escolhe um dos dois caminhos e consegue dizer duas categorias claras, por exemplo: som "palma" e "assobio", ou pose "braços para cima" e "braços para baixo".`,
    },
    {
      titulo: `Criando minhas categorias e o ruído de fundo`,
      tipo: `Prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe de mesa em mesa. Para som, garanta que cada criança grave primeiro a categoria "Background Noise" (Ruído de Fundo). Para pose, garanta uma categoria de corpo parado. Mostre o lápis de renomear.`,
      atividade: `No seu projeto, crie suas categorias. Se você escolheu SOM: primeiro grave a caixa "Background Noise" ficando em silêncio, depois crie e renomeie suas duas categorias. Se você escolheu POSE: crie uma categoria "parado" e suas duas poses. Use o lápis para dar um nome a cada categoria.`,
      gabarito: `Está correto quando o projeto tem a categoria de "vazio" (Background Noise no som ou pose parada) mais duas categorias de verdade, todas com nomes escritos. No som, sem o Background Noise gravado o botão de treinar fica apagado, então essa parte é obrigatória.`,
    },
    {
      titulo: `Gravando muitos exemplos`,
      tipo: `Prática no computador`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a regra "mais exemplos, IA mais esperta". A meta é pelo menos 8 exemplos por categoria. Peça que fiquem bem na frente do microfone ou da câmera e variem um pouquinho (mais alto, mais baixo, virando o corpo).`,
      atividade: `Grave bastantes exemplos em cada categoria. No som, clique em "Gravar" e faça o som várias vezes, depois "Extrair Amostra". Na pose, segure a pose e clique em "Segurar para Gravar". Conte seus exemplos: você precisa de pelo menos 8 em cada categoria.`,
      gabarito: `Está correto quando cada categoria (incluindo a de vazio) tem 8 ou mais exemplos. Se a criança gravou poucos, oriente a gravar mais antes de treinar. Variar um pouco os exemplos (tom de voz, ângulo do corpo) deixa o modelo melhor.`,
    },
    {
      titulo: `Treinar e testar ao vivo`,
      tipo: `Teste prático`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre onde fica o botão "Treinar Modelo" (Train Model). Avise para não fechar a aba durante o treino. Depois aponte as barrinhas coloridas do painel de Visualização (Preview) à direita, que mostram o palpite da IA.`,
      atividade: `Clique no botão "Treinar Modelo" e espere ficar pronto (não feche a janela!). Quando terminar, faça seus sons ou suas poses na frente do microfone ou da câmera e olhe as barrinhas à direita. A IA está acertando qual categoria você está fazendo?`,
      gabarito: `Está correto quando o modelo termina de treinar e a criança consegue testar ao vivo. A IA acerta quando a barrinha mais alta (a porcentagem maior) corresponde ao som ou à pose que a criança está fazendo. É normal acertar umas e errar outras nesta etapa.`,
    },
    {
      titulo: `Detetive do erro: deixando a IA mais esperta`,
      tipo: `Desafio de melhoria`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o exercício mais difícil e o mais importante. Ajude a criança a identificar QUAL categoria a IA confunde, voltar nela, gravar mais exemplos e treinar de novo. Comemore quando o acerto melhorar.`,
      atividade: `Descubra onde sua IA erra mais. Qual categoria ela confunde? Volte nessa categoria, grave mais 5 exemplos bem claros e clique em "Treinar Modelo" de novo. Teste outra vez: a IA melhorou? Conte para a turma o que você fez para deixar sua IA mais esperta.`,
      gabarito: `Está correto quando a criança identifica a categoria que a IA confundia, adiciona mais exemplos nela, treina novamente e testa de novo. A resposta esperada é que, com mais exemplos, a IA passa a acertar mais vezes. O aprendizado-chave: erro não é problema, é pista de que faltava exemplo; treinar de novo após mudar algo é obrigatório.`,
    },
  ],
};
