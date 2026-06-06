import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Construindo o meu modelo final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada aluno começa a produzir o entregável do mês criando, no ML for Kids, um modelo de IA próprio com tema escolhido por ele, montando categorias claras e muitos exemplos de qualidade, treinando, testando e refinando até alcançar boa confiança e poucos erros.`,
  descricao: `Chegou a hora mais importante do mês: cada criança vai construir o seu próprio modelo de Inteligência Artificial, do zero e com o tema que ela mesma escolher. Nas seis aulas anteriores a turma aprendeu o que é uma IA que aprende, treinou os primeiros modelos juntos, entendeu como a máquina pensa e decide, virou caçadora de erros e desenhou um mini-projeto. Agora tudo isso se junta numa única missão: um modelo de verdade, treinado pela própria criança e pronto para ser apresentado na última aula.

A ferramenta continua sendo o ML for Kids (machinelearningforkids.co.uk), o mesmo site das aulas anteriores. Hoje cada aluno cria um projeto novo do tipo Reconhecimento de imagens (Images) ou de texto (Text), escolhe um tema (por exemplo: gato ou cachorro, feliz ou triste, maçã ou banana, círculo ou quadrado) e monta as suas próprias categorias, que o site chama de labels. Em seguida adiciona muitos exemplos bons em cada categoria, aperta o botão de treinar e testa para ver se a IA acerta. Se errar, a criança volta, adiciona mais exemplos e treina de novo. Esse ciclo de treinar, testar e melhorar é o coração da aula.

Para o professor, esta é uma aula de acompanhar de pertinho, não de ensinar coisa nova. As crianças já sabem clicar nos botões; o seu papel é circular pela sala, ajudar quem travou, lembrar a turma das regras de ouro (categorias claras e muitos exemplos parecidos com o que a IA vai ver de verdade) e celebrar cada modelo que começa a acertar. É a ponte para o CREATE: a criança sai daqui sabendo que ensinou um computador a reconhecer algo, com as próprias mãos.

Esta aula inicia o entregável; a próxima (Aula 8) é só apresentação. Por isso o objetivo de hoje é sair com um modelo já treinado e funcionando razoavelmente bem, mesmo que ainda dê para melhorar. Não se busca perfeição: busca-se um modelo próprio, com tema escolhido pela criança, que acerta a maioria dos testes e que ela entende como construiu.`,
  materiais: [
    `Computadores com o site do ML for Kids (machinelearningforkids.co.uk) já aberto e cada aluno logado na sua conta de turma, com internet testada antes da aula.`,
    `Projetor ou TV grande ligado na máquina do professor para demonstrar, passo a passo, a criação de um projeto novo e o ciclo de treinar e testar.`,
    `Um projeto de exemplo já pronto pelo professor (por exemplo, gato ou cachorro), com categorias e exemplos, para mostrar como deve ficar um modelo bem treinado.`,
    `Folha impressa de planejamento do modelo, com espaço para a criança escrever o tema, as duas ou três categorias e ideias de exemplos.`,
    `Fones de ouvido ou webcam funcionando, caso algum aluno escolha um projeto de imagem que use a câmera para capturar fotos de exemplo.`,
    `Cartaz na parede com as duas regras de ouro: categorias com nomes claros e muitos exemplos parecidos com o mundo real.`,
    `Lista de temas sugeridos (impressa) para ajudar quem não souber o que escolher: feliz ou triste, dia ou noite, círculo ou quadrado, maçã ou banana.`,
  ],
  conceitosChave: [
    `Modelo de IA — o cérebro de computador que a criança ensina, e que depois consegue reconhecer ou decidir coisas sozinho.`,
    `Categoria (label) — cada caixinha de resposta que a IA pode escolher, como gato ou cachorro; é o nome do grupo onde guardamos exemplos.`,
    `Exemplo — cada foto, palavra ou frase que a gente mostra para a IA aprender; quanto mais exemplos bons, mais esperta ela fica.`,
    `Treinar — apertar o botão para a IA estudar todos os exemplos e montar o seu cérebro; é como mandar ela fazer a lição.`,
    `Testar — mostrar uma coisa nova para a IA e ver se ela acerta a categoria; serve para descobrir se ela aprendeu mesmo.`,
    `Confiança — o número em porcentagem que mostra o quanto a IA tem certeza da resposta; quanto mais perto de cem, mais segura ela está.`,
    `Refinar — voltar e melhorar o modelo adicionando mais exemplos e treinando de novo, até a IA errar pouco.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Inteligência Artificial para conduzir esta aula. O ML for Kids faz o trabalho pesado; as crianças já conhecem o site das aulas anteriores. Seu papel hoje é organizar, acompanhar e animar. Antes da aula, faça um projeto de exemplo seguindo os passos abaixo, para você ter total segurança de onde cada botão fica e para mostrar no projetor como deve ficar um modelo pronto.

O caminho no site é sempre o mesmo. Na página inicial, clique em Projects (Projetos) e depois no botão azul Add a new project (Adicionar um novo projeto). Dê um nome, escolha o tipo: Images (imagens, usa a webcam) ou Text (texto, a criança digita palavras). Clique em Create. Ao abrir o projeto, aparecem três caixas grandes: Train (Treinar), Learn & Test (Aprender e Testar) e Make (Fazer). É só nessas três que a turma vai mexer hoje, e quase sempre nas duas primeiras.

## Passo a passo da aula

Aquecimento e revisão (10 min): no tapete ou nas cadeiras, relembre as duas regras de ouro com o cartaz: categorias com nomes claros e muitos exemplos parecidos com o mundo real. Pergunte à turma o que faz uma IA acertar mais. Mostre rapidamente, no projetor, o seu modelo de exemplo já pronto acertando um teste, para todos lembrarem do objetivo do dia.

Conteúdo novo guiado (15 min): demonstre no projetor a criação do zero. Clique em Projects, em Add a new project, nomeie (por exemplo, Frutas), escolha o tipo, clique em Create. Entre no projeto, clique na caixa Train. Mostre o botão Add new label (Adicionar nova categoria) e crie duas, como Maçã e Banana. Em cada categoria, mostre o botão de adicionar exemplo (a webcam tira foto no projeto de imagem; no de texto a criança digita uma palavra e aperta Add). Adicione uns poucos exemplos, volte com o botão Back to project, clique em Learn & Test e aperte Train new machine learning model. Quando ficar verde, teste.

Mão na massa (25 min): cada criança cria o seu projeto. Distribua a folha de planejamento: ela escolhe o tema, escreve as duas ou três categorias e pensa nos exemplos. Depois cria o projeto, monta as categorias, adiciona muitos exemplos (peça pelo menos dez por categoria), treina e testa. Circule sem parar, ajudando a clicar no lugar certo e lembrando: mais exemplos, exemplos parecidos com a vida real. Quem terminar, refina: adiciona exemplos e treina de novo.

Desafio e compartilhar (10 min): cada criança mostra ao colega do lado o seu modelo acertando um teste e diz qual o tema e as categorias. Feche lembrando que na próxima aula eles vão apresentar esse modelo para a turma toda.

## Como explicar para crianças

Use a ideia de ensinar um filhote. A IA é como um bichinho que não sabe nada e aprende olhando muitos exemplos. As categorias são as caixinhas de resposta dele; os exemplos são as fotos ou palavras que a gente mostra. Treinar é mandar o bichinho estudar; testar é fazer uma surpresinha para ver se aprendeu. Repita como musiquinha: muitos exemplos, treinar, testar, melhorar. Diga que se a IA errar, a culpa não é dela, é que faltou exemplo, e a gente conserta dando mais.

## Erros comuns e como ajudar

O erro mais comum é dar poucos exemplos: a IA fica confusa e chuta. Insista em pelo menos dez por categoria. Outro tropeço é misturar exemplos esquisitos numa categoria errada (uma foto de banana dentro de Maçã); peça para a criança conferir caixinha por caixinha. Muitas crianças esquecem de apertar Train new machine learning model depois de adicionar exemplos, e acham que a IA não aprendeu, lembre que sem treinar de novo o cérebro não atualiza. No projeto de imagem, fotos muito escuras ou de fundos diferentes confundem; oriente fotos claras e parecidas. Por fim, se a confiança vier baixa, não é erro: é a deixa para adicionar mais exemplos e treinar mais uma vez.`,
  exercicios: [
    {
      titulo: `Escolhendo o meu tema`,
      tipo: `Planejamento no papel`,
      tempo: `6 minutos`,
      guiaProfessor: `Antes de qualquer clique, entregue a folha de planejamento. Leia em voz alta os campos e mostre a lista de temas sugeridos para quem travar. O objetivo é cada criança sair com um tema e duas ou três categorias definidas antes de ir ao computador.`,
      atividade: `Na sua folha, escreva: 1. O tema do meu modelo (o que ele vai reconhecer). 2. As minhas duas ou três categorias com nomes claros. 3. Duas ideias de exemplo para cada categoria.`,
      gabarito: `Está pronto quando há um tema e pelo menos duas categorias com nomes claros e diferentes, como Maçã e Banana ou Feliz e Triste. Acertou quem consegue dizer o tema e as categorias em voz alta. Categorias parecidas demais (Maçã e Maçã verde) devem ser ajustadas para algo bem distinto.`,
    },
    {
      titulo: `Criando o meu projeto no ML for Kids`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe a criança clicar em Projects, depois em Add a new project. Ajude a nomear, escolher o tipo (Images ou Text) e apertar Create. Tenha o seu projeto de exemplo no projetor para comparação. Garanta que cada aluno entre no projeto e veja as caixas Train, Learn & Test e Make.`,
      atividade: `No site, clique em Projects e em Add a new project. Dê um nome ao seu projeto, escolha se é de imagem (Images) ou de texto (Text) e aperte Create. Depois entre no seu projeto e ache a caixa Train.`,
      gabarito: `Acertou quando o projeto novo aparece na lista com o nome da criança e, ao abrir, mostram-se as três caixas Train, Learn & Test e Make. Se a criança não achar o projeto, confira se apertou Create; se escolheu o tipo errado, vale apagar e criar de novo, sem problema.`,
    },
    {
      titulo: `Montando categorias e muitos exemplos`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Na caixa Train, mostre o botão Add new label para criar cada categoria. Em cada uma, mostre como adicionar exemplos (webcam no projeto de imagem; digitar e apertar Add no de texto). Insista na regra de ouro: pelo menos dez exemplos bons por categoria, parecidos com o mundo real. Circule conferindo se nenhum exemplo está na caixa errada.`,
      atividade: `Na caixa Train, crie as suas categorias com o botão Add new label, usando os nomes do seu planejamento. Em cada categoria, adicione pelo menos dez exemplos bons (fotos parecidas ou palavras certas). Confira se cada exemplo está na caixinha certa.`,
      gabarito: `Acertou quando cada categoria tem dez ou mais exemplos e todos estão na caixa correta, sem misturar. Um modelo bem montado tem categorias equilibradas (número parecido de exemplos em cada). Se uma categoria tiver muito menos exemplos, a IA vai acertar menos nela: peça para completar.`,
    },
    {
      titulo: `Treinar e testar a minha IA`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Leve a criança ao botão Back to project e depois à caixa Learn & Test. Mostre o botão Train new machine learning model e espere ficar verde (pode levar um pouquinho). Em seguida, mostre o campo de teste: no projeto de texto ela digita uma palavra nova; no de imagem mostra algo para a webcam. Aponte o número de confiança que aparece.`,
      atividade: `Volte ao projeto, entre em Learn & Test e aperte Train new machine learning model. Espere ficar pronto. Depois, teste: mostre ou digite algo novo e veja se a IA acerta a categoria. Olhe o número de confiança.`,
      gabarito: `Acertou quando o modelo treina sem erro e, ao testar, escolhe a categoria certa com confiança alta (perto de cem por cento). Se a IA errar ou a confiança vier baixa, não é fracasso: é o sinal de que faltam exemplos. O sucesso desta etapa é a criança ver a sua própria IA dando uma resposta.`,
    },
    {
      titulo: `Desafio: refinar até a IA quase não errar`,
      tipo: `Desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Proponha como missão de campeão para quem já tem o modelo funcionando. A ideia é fazer o ciclo de melhoria: testar, achar onde a IA erra, adicionar exemplos parecidos com o erro e treinar de novo. Ajude a criança a perceber que mais exemplos do tipo que confunde a IA é o que mais melhora a confiança. Aceite progresso, não perfeição.`,
      atividade: `Sua missão de campeão: faça três testes difíceis no seu modelo. Toda vez que a IA errar ou ficar com confiança baixa, volte ao Train, adicione mais exemplos parecidos com aquilo que confundiu e aperte treinar de novo. Repita até a IA acertar com confiança alta.`,
      gabarito: `Venceu o desafio quem completa pelo menos uma volta do ciclo: testou, viu um erro ou confiança baixa, adicionou exemplos novos e treinou outra vez, melhorando o resultado. O modelo final ideal acerta a maioria dos testes com confiança alta. Mesmo uma melhora pequena (de errar para acertar um caso) já mostra que a criança entendeu como refinar uma IA.`,
    },
  ],
};
