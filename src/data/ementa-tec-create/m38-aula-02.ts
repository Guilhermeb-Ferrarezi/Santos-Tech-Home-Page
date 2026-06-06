import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Como o Headset Engana o Cérebro",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender como o headset de Realidade Virtual usa rastreamento de cabeça, estereoscopia e graus de liberdade para fazer o cérebro acreditar que está dentro de um mundo virtual.`,
  descricao: `Na Aula 1 os alunos descobriram o que é VR e por que ela é tão imersiva. Hoje vamos olhar por dentro do truque: como um aparelho de plástico e duas telinhas conseguem enganar o cérebro a ponto de a pessoa sentir que está em outro lugar. A resposta está em três ideias que trabalham juntas: rastreamento de cabeça (head tracking), estereoscopia (uma imagem diferente para cada olho) e graus de liberdade (quantos tipos de movimento o headset entende).

A estereoscopia copia o jeito que a nossa visão funciona no mundo real. Cada olho enxerga de um ângulo um pouco diferente, e o cérebro junta as duas imagens para calcular profundidade. O headset faz exatamente isso: mostra uma imagem para o olho esquerdo e outra, levemente deslocada, para o olho direito. O cérebro junta tudo e acredita que os objetos têm volume e distância de verdade. É por isso que em VR uma caixa parece estar perto e uma montanha parece estar longe.

O rastreamento de cabeça é o que faz o mundo virtual reagir quando você mexe a cabeça. Sensores dentro do headset medem para onde você está olhando e a câmera do jogo gira junto, na mesma hora. Se essa resposta atrasa, o cérebro percebe a falha e a pessoa pode sentir enjoo. Por isso a VR precisa ser rápida e estável. Os graus de liberdade (DoF, do inglês degrees of freedom) descrevem quantos movimentos o headset consegue acompanhar: o 3DoF entende só a rotação da cabeça (olhar para os lados, para cima e para baixo), enquanto o 6DoF entende também o deslocamento do corpo (andar, agachar, chegar perto).

Nesta aula o aluno usa o Claude como assistente para comparar tipos de headset (3DoF e 6DoF, com e sem controles) e anota os requisitos do próprio projeto VR. É uma aula de conceitos, mas bem prática: o aluno vai pesquisar, comparar e decidir, registrando tudo num documento que vai guiar as próximas aulas, quando começarmos a montar o projeto no Unity.`,
  materiais: [
    `Computadores com Realidade Virtual (Unity + C#) instalada e funcionando, com acesso ao Claude (um por aluno)`,
    `Óculos VR disponíveis para demonstração e teste rápido, quando aplicável`,
    `Projetor ou TV para o professor mostrar imagens e demonstrar o rastreamento de cabeça em tela grande`,
    `Arquivo de exemplo com uma cena VR simples já pronta (apenas para sentir o head tracking, sem programar)`,
    `Imagens de apoio: par estereoscópico (duas imagens lado a lado), esquema dos eixos de rotação e de movimento, e fotos de headsets 3DoF e 6DoF`,
    `Documento modelo "Requisitos do meu projeto VR" para o aluno preencher (impresso ou digital)`,
  ],
  conceitosChave: [
    `Head tracking (rastreamento de cabeça) — sensores do headset medem para onde você olha e giram a câmera do jogo na mesma hora.`,
    `Estereoscopia — mostrar uma imagem para cada olho, levemente diferente, para o cérebro enxergar profundidade.`,
    `Graus de liberdade (DoF) — quantos tipos de movimento o headset consegue acompanhar.`,
    `3DoF — o headset entende só a rotação da cabeça: olhar para os lados, para cima e para baixo.`,
    `6DoF — o headset entende rotação e também deslocamento do corpo: andar, agachar e chegar perto dos objetos.`,
    `Latência — o atraso entre você mexer a cabeça e a imagem responder; quanto menor, mais confortável e realista.`,
    `Controles VR — aparelhos de mão rastreados que viram as suas mãos dentro do mundo virtual.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VR para dar esta aula. Precisa de três ideias claras. Primeira: o headset mostra uma imagem para cada olho, e essa pequena diferença entre as duas é o que gera a sensação de profundidade (estereoscopia). Segunda: sensores medem o movimento da cabeça e a câmera do jogo gira junto, quase sem atraso (head tracking). Terceira: graus de liberdade dizem quanto movimento o aparelho entende. O 3DoF acompanha só a rotação (girar a cabeça); o 6DoF acompanha rotação mais deslocamento (andar e agachar). Um truque de memória: 3DoF é a cabeça parada girando; 6DoF é a pessoa andando pela sala. Esta aula é de conceito e pesquisa, então o "código" aqui é o aluno pedir comparações ao Claude e registrar decisões, não programar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Retome a Aula 1 com uma pergunta: por que a VR engana tanto o cérebro? Peça que cada aluno feche um olho e depois o outro olhando para o dedo esticado; o dedo parece pular de lado. Explique que essa diferença entre os olhos é a base da estereoscopia.

15 min, conteúdo novo guiado. No projetor, mostre um par estereoscópico (duas imagens quase iguais, lado a lado) e explique que o headset entrega uma para cada olho. Depois coloque o óculos VR (ou abra a cena de exemplo) e gire a cabeça devagar, narrando: a câmera gira junto, isso é head tracking. Apresente o esquema dos eixos: 3DoF entende girar a cabeça em três sentidos; 6DoF entende isso mais andar, agachar e chegar perto. Mostre fotos de um headset simples (3DoF) e de um completo com controles (6DoF). Termine apresentando o documento "Requisitos do meu projeto VR".

25 min, mão na massa. Cada aluno abre o Claude e faz uma pesquisa guiada. Mostre na tela um exemplo de pergunta para colar e adaptar: "Sou aluno e estou planejando um projeto simples de VR no Unity. Explique em linguagem para adolescentes a diferença entre headsets 3DoF e 6DoF, quando usar cada um e se preciso de controles para o meu caso. Faça uma tabela comparando os dois." Peça que o aluno leia a resposta com olhar crítico, anote no documento o que entendeu e decida: meu projeto precisa de 3DoF ou 6DoF? Preciso de controles? Circule pela sala ajudando a refinar perguntas e a checar se a resposta faz sentido.

10 min, desafio e compartilhar. Desafio: cada aluno escreve no documento uma frase explicando por que escolheu 3DoF ou 6DoF para o próprio jogo. Em seguida, faça uma rodada rápida em que cada um lê a frase e diz o tipo de headset escolhido.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Para estereoscopia: "Seus dois olhos são duas câmeras pertinho uma da outra; o cérebro junta as fotos e calcula a distância. O headset faz o mesmo." Para head tracking: "É como uma câmera de segurança que segue exatamente para onde você vira a cabeça, sem atraso." Para graus de liberdade: "3DoF é você sentado numa cadeira giratória, só virando o pescoço; 6DoF é você de pé andando pela sala." Para latência: "Se a imagem demora a acompanhar a cabeça, o cérebro percebe a mentira e dá enjoo." Sempre conecte ao projeto: "Seu jogo é parado olhando ao redor, ou a pessoa anda?"

## Erros comuns e como ajudar

O erro mais comum é confundir 3DoF com 6DoF. Volte ao gesto: pescoço girando é 3DoF; corpo andando é 6DoF. Outro erro é o aluno aceitar a resposta do Claude sem ler; lembre que ele é assistente, não dono da verdade, e que a decisão é do aluno. Alguns acham que mais graus de liberdade é sempre melhor; explique que um jogo de olhar ao redor, parado, pode ser ótimo em 3DoF e mais simples de fazer. Há quem confunda estereoscopia (profundidade) com head tracking (girar a câmera); separe bem: uma é sobre os olhos, a outra é sobre o movimento. Por fim, se alguém testar o óculos e sentir tontura, tire o aparelho, explique que isso vem da latência e da diferença entre o que o corpo sente e o que os olhos veem, e siga com a parte de pesquisa.`,
  exercicios: [
    {
      titulo: `O teste do dedo: sentindo a estereoscopia`,
      tipo: `experimento rápido`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza todos juntos. Garanta que cada aluno faça o teste fechando um olho de cada vez. Ligue a observação à ideia de que o headset entrega uma imagem para cada olho.`,
      atividade: `Estique o braço e aponte o dedo para um objeto distante na sala. Feche o olho esquerdo e olhe; depois feche o olho direito e olhe. Observe o dedo parecer pular de lado. Escreva uma frase explicando o que esse teste tem a ver com a VR.`,
      gabarito: `O dedo parece pular porque cada olho enxerga de um ângulo diferente. Frase esperada: "Cada olho vê uma imagem um pouco diferente, e o cérebro junta as duas para sentir profundidade; o headset de VR mostra uma imagem para cada olho do mesmo jeito (estereoscopia)." Liga o experimento ao conceito de estereoscopia.`,
    },
    {
      titulo: `3DoF ou 6DoF: o gesto certo`,
      tipo: `dinâmica em pé`,
      tempo: `8 minutos`,
      guiaProfessor: `Você fala situações e os alunos respondem com o corpo: girar só o pescoço para 3DoF, dar passos para 6DoF. Corrija na hora quem trocar.`,
      atividade: `Quando o professor disser uma situação, mostre com o corpo: gire só o pescoço se for 3DoF, ande alguns passos se for 6DoF. Situações: (1) montanha-russa em que você só olha ao redor; (2) jogo em que você anda por uma sala; (3) experiência sentado vendo o céu; (4) jogo em que você se agacha para pegar algo.`,
      gabarito: `Respostas corretas: (1) 3DoF, só olhar ao redor; (2) 6DoF, andar; (3) 3DoF, sentado olhando; (4) 6DoF, agachar é deslocamento do corpo. 3DoF entende só rotação da cabeça; 6DoF entende rotação mais deslocamento do corpo.`,
    },
    {
      titulo: `Pesquisando com o Claude: tabela comparativa`,
      tipo: `prática com o Claude`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre um exemplo de pergunta na tela e peça que cada aluno adapte para o próprio projeto. Reforce ler a resposta com olhar crítico antes de copiar para o documento.`,
      atividade: `No Claude, peça uma comparação entre headsets 3DoF e 6DoF em formato de tabela, pensando num projeto simples de VR no Unity. Leia a resposta e copie para o seu documento três diferenças que você achou mais importantes, com suas próprias palavras.`,
      gabarito: `A tabela deve trazer diferenças como: 3DoF acompanha só rotação da cabeça, 6DoF acompanha rotação e deslocamento; 3DoF costuma ser mais barato e simples, 6DoF é mais imersivo e permite andar; 6DoF geralmente combina com controles rastreados. O aluno deve reescrever três pontos com as próprias palavras, mostrando que entendeu e não só copiou.`,
    },
    {
      titulo: `Por dentro do headset: explique o truque`,
      tipo: `produção de texto`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça um texto curto, claro e com os três termos: estereoscopia, head tracking e graus de liberdade. Aceite explicações com palavras simples, desde que corretas.`,
      atividade: `Escreva um parágrafo curto, como se fosse explicar a um amigo, respondendo: como o headset engana o cérebro? Use e explique pelo menos três termos: estereoscopia, head tracking e graus de liberdade (3DoF ou 6DoF).`,
      gabarito: `Texto válido explica que o headset mostra uma imagem para cada olho (estereoscopia) para gerar profundidade, que sensores acompanham o movimento da cabeça e giram a câmera junto (head tracking), e que os graus de liberdade dizem quanto movimento o aparelho entende: 3DoF só rotação, 6DoF rotação mais deslocamento. Exemplo aceitável: "O headset mostra uma imagem para cada olho, então o cérebro sente profundidade. Sensores seguem a minha cabeça e a câmera gira junto. Se ele entende só girar a cabeça é 3DoF; se entende andar também é 6DoF."`,
    },
    {
      titulo: `Requisitos do meu projeto VR`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use o documento modelo. Ajude cada aluno a decidir com base no tipo de jogo que ele imagina, não na vontade de ter o equipamento mais caro. Guarde o documento, pois ele guia as próximas aulas.`,
      atividade: `Preencha o documento "Requisitos do meu projeto VR" respondendo: (1) meu jogo é de olhar ao redor parado ou de andar pelo espaço? (2) escolho 3DoF ou 6DoF e por quê? (3) preciso de controles para as mãos? (4) qual é o cuidado com latência e conforto que vou ter? Termine com uma frase final justificando a sua escolha.`,
      gabarito: `O documento deve estar coerente: jogo de olhar ao redor combina com 3DoF e pode dispensar controles; jogo de andar e interagir combina com 6DoF e geralmente pede controles. O aluno deve citar latência baixa como cuidado de conforto, para evitar enjoo. Não há resposta única, mas a justificativa precisa ligar a escolha ao tipo de jogo. Exemplo válido: "Meu jogo é uma sala que eu exploro andando, então escolhi 6DoF com controles; vou cuidar para a imagem responder rápido e não causar enjoo." Exemplo fraco a melhorar: "Escolhi 6DoF porque é melhor", sem ligar ao jogo nem citar conforto.`,
    },
  ],
};
