import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Treinando a IA com Imagens",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Praticar o ciclo completo de treino com imagens na Teachable Machine, capturando muitos exemplos, treinando e observando a IA reconhecer objetos ou gestos ao vivo, e aprender a melhorar o modelo adicionando mais fotos variadas.`,
  descricao: `Nesta aula as crianças colocam a mão na massa de verdade. Na aula anterior elas conheceram a tela da Teachable Machine; agora elas vão viver o ciclo completo de treino com imagens: criar as classes, capturar muitos exemplos pela webcam, clicar em treinar e, na mesma hora, ver a IA tentar adivinhar o que está aparecendo na câmera. É um momento mágico para a turma, porque a barrinha de porcentagem se mexe ao vivo conforme a criança mostra um objeto ou faz um gesto.

O coração da aula é entender que a IA aprende por exemplos, exatamente como elas aprenderam no "Jogo das Pistas" (Aula 2). Quanto mais exemplos boas e variados a gente dá, melhor a IA acerta. Por isso vamos capturar muitas fotos de cada classe (não só duas ou três), mexendo um pouquinho o objeto, mudando o ângulo e a distância da câmera. Isso ensina, na prática, que variedade é o segredo de um bom modelo.

A grande descoberta desta aula é o experimento do "modelo preguiçoso": de propósito, a turma treina uma IA com pouquíssimos exemplos e vê ela errar e ficar confusa. Depois adiciona mais fotos variadas, treina de novo e vê a IA melhorar na frente dos olhos. Essa comparação "antes e depois" fixa o conceito mais importante do mês de um jeito que nenhuma explicação conseguiria sozinha.

Como o professor pode ser iniciante, este material traz o passo a passo de onde clicar, os nomes exatos dos botões e os erros mais comuns das crianças (como ficar paradas demais, mostrar fundo bagunçado ou esquecer de treinar de novo depois de adicionar fotos). O objetivo é que, ao final da hora, cada dupla tenha uma IA que reconhece dois ou três objetos ou gestos ao vivo.`,
  materiais: [
    `Computadores (um por dupla) com o navegador Chrome aberto no site teachablemachine.withgoogle.com, já na opção "Projeto de Imagem padrão"`,
    `Webcam funcionando em cada computador (a maioria dos notebooks já tem; teste antes da aula)`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande`,
    `Objetos coloridos e bem diferentes entre si para as classes (ex.: um lápis, uma borracha, um bichinho de pelúcia, uma caneca)`,
    `Folhas de papel branco para servir de fundo limpo atrás dos objetos`,
    `Um modelo de exemplo já treinado pelo professor (reconhecendo "joia" e "mãozinha aberta") para mostrar o resultado esperado`,
    `Crachás ou adesivos com os nomes das classes para a turma colar e lembrar (opcional, ajuda os menores)`,
  ],
  conceitosChave: [
    `Exemplo — uma foto que a gente mostra para a IA dizendo "isto é assim". Quanto mais exemplos, mais a IA aprende.`,
    `Classe — cada "gavetinha" onde guardamos fotos parecidas, como a gaveta do "lápis" e a gaveta da "borracha".`,
    `Treinar — apertar o botão que faz o computador estudar todas as fotos e aprender a diferença entre as classes.`,
    `Capturar — tirar várias fotos pela webcam segurando o botão, para encher a classe de exemplos.`,
    `Variedade — mostrar o mesmo objeto de jeitos diferentes (perto, longe, virado) para a IA não ficar confusa.`,
    `Porcentagem de confiança — a barrinha que mostra o quanto a IA tem certeza, tipo "tenho 90 por cento de certeza que é o lápis".`,
    `Melhorar o modelo — adicionar mais fotos e treinar de novo quando a IA está errando muito.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa entender de programação nem de inteligência artificial para dar esta aula. A Teachable Machine faz tudo no navegador, de graça, sem instalar nada. Sua tarefa é guiar a turma por um ciclo que se repete três vezes: criar classes, capturar exemplos, treinar e testar ao vivo. Antes da aula, abra o site teachablemachine.withgoogle.com, clique em "Comece já" e depois em "Projeto de Imagem" e "Modelo de imagem padrão". Treine um modelo simples seu (por exemplo "joia" e "mão aberta") para ter certeza de que a webcam funciona e para mostrar o resultado pronto. A regra de ouro do dia: muitos exemplos e exemplos variados deixam a IA esperta; poucos exemplos deixam a IA "preguiçosa" e confusa.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Relembre o "Jogo das Pistas" da Aula 2. Pergunte: "Como vocês aprenderam a adivinhar o animal? Com muitos exemplos ou com um só?" Mostre no projetor seu modelo já treinado: faça "joia" e "mão aberta" para a câmera e deixe a turma ver a barrinha se mexer. Diga: "Hoje quem vai treinar a IA são vocês!"

15 min — Conteúdo novo guiado: No seu computador, com o projetor ligado, mostre cada clique devagar. Clique em "Editar nome" no quadro "Class 1" e troque para o nome do primeiro objeto (ex.: "lápis"). Faça o mesmo na "Class 2" (ex.: "borracha"). Em cada classe, aponte o botão "Webcam", clique e permita o acesso à câmera quando o navegador perguntar. Segure o botão "Manter pressionado para gravar" e mostre como as fotinhas vão enchendo a classe. Capture umas 30 fotos, mexendo o objeto. Repita na outra classe. Depois clique no botão grande "Treinar modelo" (no painel do meio) e espere a barrinha encher. Mostre o painel "Pré-visualização" reconhecendo os objetos ao vivo.

25 min — Mão na massa: As duplas repetem tudo no computador delas. Passe de mesa em mesa garantindo que: renomearam as classes, capturaram muitas fotos (peça pelo menos 30 por classe) e clicaram em "Treinar modelo". Quando a IA estiver reconhecendo, proponha o experimento do "modelo preguiçoso": peça que criem uma classe nova com só 3 ou 4 fotos, treinem e vejam a IA errar e ficar confusa. Depois peça que adicionem mais fotos variadas nessa classe e cliquem em "Treinar modelo" de novo. Eles vão ver a barrinha melhorar. Esse "antes e depois" é o ponto alto da aula.

10 min — Desafio e compartilhar: Lance o desafio: "Quem consegue uma IA que acerta um gesto novo, tipo coração com as mãos?" Cada dupla mostra rapidinho o modelo dela funcionando para a turma. Comemore os acertos e os erros engraçados, sempre lembrando: "Errou? É só dar mais exemplos!"

## Como explicar para crianças

Use a analogia do "ensinar um robô bebê". Diga: "A IA é como um robezinho que nunca viu nada. Cada foto é você apontando e falando: isto é um lápis. Se você mostrar só uma foto, ele fica confuso, igual a gente ficaria se visse um animal só uma vez. Mostre muitas fotos, de pertinho, de longe, virado, e o robô fica esperto!" Para a porcentagem, diga que é "o quanto o robô tem certeza" e compare com um amigo que fala "acho que é... tenho quase certeza que é o lápis!".

## Erros comuns e como ajudar

O erro mais comum é capturar poucas fotos: a IA fica confusa. Insista em pelo menos 30 por classe. Outro erro é a criança ficar paradíssima segurando o objeto; peça que mexa devagar, gire e aproxime durante a captura, para ter variedade. Cuidado com fundo bagunçado e mãos aparecendo na foto do objeto, pois a IA aprende o fundo errado; use a folha branca atrás. O esquecimento clássico é adicionar fotos e não clicar de novo em "Treinar modelo"; lembre que sem treinar, a IA não aprende o novo. Se a webcam não abrir, verifique se o navegador pediu permissão e se nenhum outro programa está usando a câmera. Por fim, se duas classes têm objetos muito parecidos (dois lápis iguais), a IA erra; escolha objetos bem diferentes em cor e formato.`,
  exercicios: [
    {
      titulo: `Aquecimento: a IA do professor`,
      tipo: `Demonstração e observação`,
      tempo: `8 minutos`,
      guiaProfessor: `Com seu modelo pronto no projetor, faça gestos para a câmera e peça que a turma observe a barrinha de porcentagem. Conduza a conversa para a ideia de que a IA aprendeu por exemplos.`,
      atividade: `Observe o professor mostrar a mão para a câmera. Levante a mão quando a barrinha da IA passar de "meio cheia" (mais de 50 por cento). Responda em voz alta: a IA aprendeu sozinha ou alguém ensinou ela com fotos?`,
      gabarito: `Alguém ensinou a IA mostrando muitas fotos (exemplos). A barrinha sobe quando a IA tem mais certeza; quanto mais perto de 100 por cento, mais confiante ela está.`,
    },
    {
      titulo: `Criando e nomeando as classes`,
      tipo: `Prática guiada em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada dupla clicando em "Editar nome" nos quadros "Class 1" e "Class 2". Garanta que escolheram dois objetos bem diferentes. Ainda não é hora de treinar, só de preparar as gavetinhas.`,
      atividade: `Na Teachable Machine, clique no lápis de "Editar nome" da Class 1 e digite o nome do seu primeiro objeto. Faça o mesmo na Class 2 com outro objeto bem diferente. Mostre para o professor os dois nomes prontos.`,
      gabarito: `As duas classes devem aparecer com nomes claros e diferentes (por exemplo "lápis" e "borracha"). Cada classe é uma gavetinha que vai guardar as fotos daquele objeto. Objetos diferentes em cor e formato ajudam a IA a não confundir.`,
    },
    {
      titulo: `Capturando muitos exemplos`,
      tipo: `Prática mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o botão "Webcam" e o "Manter pressionado para gravar". Exija pelo menos 30 fotos por classe. Lembre as crianças de mexer o objeto durante a captura e de usar a folha branca de fundo.`,
      atividade: `Clique em "Webcam" na primeira classe, permita a câmera e segure o botão "Manter pressionado para gravar". Enquanto grava, gire o objeto devagar, aproxime e afaste da câmera. Encha a classe com muitas fotos. Repita na segunda classe.`,
      gabarito: `Cada classe deve ter pelo menos 30 fotos variadas (perto, longe, em ângulos diferentes), com fundo limpo. A variedade é o segredo: a IA que vê o objeto de muitos jeitos acerta mais do que a que viu só uma pose.`,
    },
    {
      titulo: `Treinar e testar ao vivo`,
      tipo: `Experimento comparativo`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza o experimento do "modelo preguiçoso". Primeiro treine com poucas fotos numa classe nova e mostre o erro; depois adicione muitas fotos variadas, clique em "Treinar modelo" de novo e compare. Reforce que é preciso treinar outra vez após adicionar fotos.`,
      atividade: `Crie uma classe nova com só 3 ou 4 fotos e clique em "Treinar modelo". Mostre o objeto na câmera e veja a barrinha na "Pré-visualização". Depois adicione muitas fotos variadas nessa classe, clique de novo em "Treinar modelo" e compare: a IA melhorou?`,
      gabarito: `Com poucas fotos a IA fica confusa e a porcentagem de confiança fica baixa ou pula entre as classes. Depois de adicionar muitas fotos variadas e treinar de novo, a barrinha sobe e a IA acerta mais. Conclusão: mais exemplos variados melhoram o modelo, e é preciso clicar em "Treinar modelo" toda vez que se adiciona fotos.`,
    },
    {
      titulo: `Desafio do gesto novo`,
      tipo: `Desafio criativo e apresentação`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha que cada dupla ensine um gesto novo (coração, joia, tchau). Eles devem criar a classe, capturar muitas fotos e treinar. Deixe cada dupla apresentar o modelo funcionando e celebre acertos e erros engraçados.`,
      atividade: `Escolha um gesto novo com as mãos (coração, joia ou tchau). Crie uma nova classe com esse nome, capture muitas fotos variadas do gesto e clique em "Treinar modelo". Mostre para a turma: faça o gesto na câmera e veja a IA reconhecer. Conte quantas fotos você usou.`,
      gabarito: `O modelo deve reconhecer o gesto novo com confiança alta (barrinha bem cheia) quando a criança usou muitas fotos variadas. Se errar, a solução é sempre a mesma: adicionar mais exemplos diferentes e treinar de novo. Uma boa apresentação explica o nome da classe e mostra a IA acertando ao vivo.`,
    },
  ],
};
