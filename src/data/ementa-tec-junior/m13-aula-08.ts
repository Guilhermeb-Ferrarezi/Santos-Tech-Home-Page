import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Show da IA: Apresentando Nosso Modelo Treinado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar e testar diante da turma a inteligência artificial treinada na Teachable Machine, mostrando as categorias que cada criança ensinou e celebrando que a IA aprendeu graças aos exemplos dados por elas.`,
  descricao: `Esta é a aula de fechamento do primeiro mês. Durante quatro semanas as crianças descobriram o que existe dentro de uma IA, brincaram com pistas e exemplos, conheceram a Teachable Machine e treinaram um modelo com imagens, sons ou poses. Hoje chega a hora mais esperada: o Show da IA. Cada criança vira apresentadora do próprio projeto, mostra para a turma as categorias que criou e prova, ao vivo, que a máquina aprendeu a reconhecer aquilo que ela ensinou.

O coração da aula é a apresentação. Uma de cada vez, a criança abre o seu modelo na Teachable Machine, mostra a barra de porcentagem subindo quando aparece o objeto certo e explica com as próprias palavras o que a IA está adivinhando. Não é uma prova, é uma celebração: queremos que cada aluno se sinta orgulhoso, mesmo que a IA erre de vez em quando. Os erros, aliás, viram momentos divertidos de aprendizado, porque mostram que a máquina só sabe aquilo que recebeu de exemplo.

Além de apresentar, a turma registra junto o que funcionou bem e o que poderia ficar melhor. O professor anota num cartaz ou no quadro as descobertas do grupo, criando uma memória coletiva da turma. Esse registro é precioso: ele será a ponte para a etapa 2 do projeto, quando essas IAs treinadas começarão a virar ideias de jogo nos próximos meses.

A aula encerra reforçando a grande lição do mês: a inteligência artificial não nasce sabendo. Ela aprende com exemplos, e foram as crianças que deram esses exemplos. Sair daqui entendendo que elas são as professoras da máquina é o objetivo mais importante de todo o mês.`,
  materiais: [
    `Computadores ou notebooks com a Teachable Machine já aberta no navegador (site teachablemachine.withgoogle.com), com o modelo de cada criança da aula anterior carregado`,
    `Projetor ou TV grande conectada para mostrar a apresentação de cada criança para a turma toda`,
    `Webcam e microfone funcionando em cada computador (para os modelos de imagem, som ou pose)`,
    `Objetos, cartões ou fantasias que as crianças usaram para treinar (ex.: lápis, brinquedos, placas coloridas) para testar ao vivo`,
    `Um modelo de exemplo pronto pelo professor, já testado, para abrir o show e servir de referência`,
    `Cartaz grande ou quadro branco com canetas para registrar "O que funcionou bem" e "Ideias para a próxima etapa"`,
    `Adesivos, carimbos ou um diploma simples de "Treinador de IA" para celebrar cada apresentação`,
  ],
  conceitosChave: [
    `Modelo treinado — é o cérebro da nossa IA depois que ela já aprendeu com os exemplos que demos.`,
    `Categoria (ou classe) — cada grupo que ensinamos para a IA, como uma caixinha com um nome (por exemplo: "maçã" e "banana").`,
    `Testar — mostrar coisas novas para a IA e ver se ela adivinha certo qual é a categoria.`,
    `Confiança — a barrinha de porcentagem que mostra o quanto a IA tem certeza da resposta; quanto mais cheia, mais segura ela está.`,
    `Acerto e erro — quando a IA adivinha certo ela acerta; quando confunde, ela erra, e isso nos ensina o que faltou de exemplo.`,
    `Apresentar — mostrar e explicar o nosso projeto para os colegas, falando o que ele faz.`,
    `Exemplo — cada foto, som ou pose que demos para a IA aprender; sem exemplos, ela não sabe nada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA. A Teachable Machine é um site gratuito do Google que treina modelos só com exemplos, sem código. Nesta aula o trabalho pesado já foi feito nas aulas anteriores: os modelos das crianças já existem. Seu papel hoje é ajudar cada criança a abrir, testar e apresentar o que treinou, e conduzir uma celebração organizada.

Antes da aula, abra você mesmo um modelo de exemplo em teachablemachine.withgoogle.com e clique no botão "Preview" (Visualizar), o painel do lado direito da tela. É ali que a IA mostra ao vivo, pela webcam ou pelo microfone, qual categoria ela reconhece e a barrinha de porcentagem de confiança. Garanta que as webcams e os microfones estão liberados no navegador (quando aparecer a janelinha pedindo permissão, clique em "Permitir").

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma diante do projetor. Pergunte: "O que a nossa IA aprendeu este mês?" Relembre que ela só sabe o que recebeu de exemplo. Abra o seu modelo de exemplo e clique em "Preview" para mostrar a barrinha de confiança subindo quando você mostra o objeto certo à webcam. Diga que hoje cada um vai virar apresentador.

15 min — Conteúdo novo guiado: como apresentar. Ensine o roteirinho de fala em três passos: (1) "Minha IA aprendeu a reconhecer..."; (2) "Estas são as minhas categorias..."; (3) "Vou testar para vocês". Mostre na Teachable Machine onde clicar: à esquerda ficam as categorias treinadas (as classes com nome); no centro o botão verde "Train Model" (já treinado); à direita o painel "Preview". Explique que, no Preview, basta mostrar o objeto à webcam ou fazer o som e olhar qual barrinha enche mais.

25 min — Mão na massa: o Show da IA. Chame uma criança de cada vez ao computador ligado no projetor. Ela abre o próprio modelo, clica em "Preview", fala o roteirinho e testa ao vivo mostrando os objetos. A turma torce. Para cada apresentação, peça à plateia: "A IA acertou ou errou?" Aplauda os dois casos. Vá anotando no cartaz "O que funcionou bem". Dê o adesivo ou diploma de Treinador de IA. Mantenha cerca de 2 a 3 minutos por criança para todos terem vez.

10 min — Desafio e compartilhar. Faça o desafio coletivo: junte a turma e pergunte "Se nossa IA virasse um joguinho, o que ela poderia fazer?" Anote 2 ou 3 ideias no cartaz "Ideias para a próxima etapa". Encerre com a frase do mês: "A IA aprendeu porque vocês deram os exemplos. Vocês são os professores da máquina!" Peça uma salva de palmas para a turma toda.

## Como explicar para crianças

Use a analogia do bichinho de estimação: "Treinar a IA é como ensinar um truque para um cachorrinho. Ele só faz o truque que você ensinou muitas vezes." Para a barrinha de confiança, diga: "Quanto mais cheia a barrinha, mais a IA tem certeza, como quando você tem muita certeza da resposta e levanta o dedo bem rápido." Para o erro, fale com leveza: "Quando a IA erra, não é burra, é que faltou exemplo. A gente é que esqueceu de ensinar aquela parte." Evite palavras difíceis: troque "classificação" por "adivinhar a caixinha certa" e "porcentagem" por "barrinha que enche".

## Erros comuns e como ajudar

A webcam não aparece: confira se outra aba está usando a câmera e clique de novo em "Permitir" na janelinha do navegador. A IA erra muito ao vivo: lembre que a luz e o fundo mudaram em relação ao treino; aproxime o objeto e centralize na câmera. Criança tímida para apresentar: deixe que ela apenas mostre o objeto enquanto você narra, ou apresente em dupla. Modelo sumiu: se a criança não salvou, use o modelo de exemplo do professor para ela testar junto, sem drama. Alunos ansiosos esperando a vez: dê a eles a tarefa de "juiz da plateia", respondendo se a IA acertou ou errou, para todos participarem o tempo todo.`,
  exercicios: [
    {
      titulo: `Aquecimento: A IA Sabe ou Não Sabe?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Use no início da aula para reativar a memória do mês. Mostre objetos no projetor e pergunte se a IA de cada criança reconheceria aquilo. O objetivo é a criança perceber que a IA só sabe o que recebeu de exemplo.`,
      atividade: `Sentados em roda, mostre três objetos diferentes. Para cada um, a turma responde junto: "A nossa IA aprendeu isso?" levantando o polegar para cima (sim) ou para baixo (não).`,
      gabarito: `A IA só reconhece aquilo que foi usado como exemplo no treino. Se o objeto foi uma das categorias treinadas, a resposta é polegar para cima; se nunca foi mostrado à IA, é polegar para baixo. A conclusão correta é: sem exemplo, a IA não sabe.`,
    },
    {
      titulo: `Achando os Botões na Teachable Machine`,
      tipo: `Atividade guiada na tela`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça com a turma toda olhando o projetor. Nomeie cada parte da tela e peça que as crianças apontem no próprio computador. Garanta que todos encontrem o botão "Preview" antes de apresentar.`,
      atividade: `No seu modelo aberto, encontre e aponte: as categorias com nome (à esquerda), o botão verde "Train Model" (no centro) e o painel "Preview" (à direita). Depois clique em "Preview" e mostre um objeto à webcam.`,
      gabarito: `À esquerda ficam as classes/categorias treinadas com seus nomes. No centro fica o botão verde "Train Model", já usado para treinar. À direita fica o "Preview", onde a IA mostra ao vivo qual categoria reconhece e a barrinha de confiança. Ao mostrar o objeto certo, a barrinha da categoria correta deve encher mais que as outras.`,
    },
    {
      titulo: `Meu Roteirinho de Apresentação`,
      tipo: `Preparação em três passos`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude cada criança a montar a fala antes do show. Escreva os três passos no quadro como modelo. Para os menores, deixe que repitam falando, sem precisar ler.`,
      atividade: `Complete em voz alta o seu roteirinho: (1) "Minha IA aprendeu a reconhecer ___"; (2) "Minhas categorias são ___ e ___"; (3) "Agora vou testar mostrando ___".`,
      gabarito: `Cada criança preenche com o conteúdo do próprio modelo. Exemplo de resposta válida: (1) "Minha IA aprendeu a reconhecer frutas"; (2) "Minhas categorias são maçã e banana"; (3) "Agora vou testar mostrando uma maçã de verdade". O importante é citar corretamente as próprias categorias treinadas.`,
    },
    {
      titulo: `O Show: Testando a IA ao Vivo`,
      tipo: `Apresentação individual`,
      tempo: `15 minutos`,
      guiaProfessor: `Chame uma criança por vez ao computador ligado no projetor. Ela fala o roteirinho, clica em "Preview" e testa mostrando os objetos. A plateia responde se a IA acertou ou errou. Aplauda todos e entregue o diploma de Treinador de IA.`,
      atividade: `Apresente para a turma: abra o seu modelo, clique em "Preview", fale o roteirinho e mostre pelo menos um objeto de cada categoria. Peça à turma para confirmar se a barrinha encheu na categoria certa.`,
      gabarito: `A apresentação está correta quando: o modelo abre no "Preview", a criança testa cada categoria mostrando o objeto certo, e a barrinha de confiança enche mais na categoria correspondente. Se a IA errar, a resposta certa é explicar que faltou exemplo daquele jeito (luz, ângulo ou fundo diferente). Acertar e errar valem aplausos.`,
    },
    {
      titulo: `Desafio Final: A Ideia do Nosso Jogo`,
      tipo: `Desafio coletivo e registro`,
      tempo: `9 minutos`,
      guiaProfessor: `Atividade de fechamento, com a turma reunida. Conduza a conversa e anote as ideias no cartaz "Ideias para a próxima etapa". Reforce a frase do mês. É a ponte para a etapa 2 do projeto.`,
      atividade: `Em grupo, respondam: "Se a nossa IA treinada virasse um joguinho, o que ela poderia fazer no jogo?" Cada criança dá uma ideia e o professor anota no cartaz. No fim, todos repetem juntos a frase do mês.`,
      gabarito: `Não há resposta única; toda ideia coerente é válida. Exemplos aceitáveis: "a IA reconhece a fruta certa e o personagem ganha pontos", "fazer uma pose para o jogo virar de fase", "falar uma palavra para o boneco pular". A conclusão obrigatória, repetida por todos, é: "A IA aprendeu porque nós demos os exemplos. Nós somos os professores da máquina."`,
    },
  ],
};
