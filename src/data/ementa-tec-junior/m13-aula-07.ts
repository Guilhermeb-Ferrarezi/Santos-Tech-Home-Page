import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Hora de Testar: a IA Acerta ou Erra?",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança testa o próprio modelo treinado na Teachable Machine como uma pequena cientista, observando quando a IA acerta e quando se confunde, e descobre que dar mais exemplos e variar a luz ajuda a máquina a melhorar.`,
  descricao: `Esta aula é o momento de virar detetive. Nas semanas anteriores a turma treinou um modelo na Teachable Machine, mostrando vários exemplos de cada classe (imagens, sons ou poses). Agora a pergunta muda: será que a IA aprendeu mesmo? Em vez de só treinar, as crianças vão testar com cuidado, mostrando coisas novas para a câmera e observando a barrinha de porcentagem subir e descer. É como dar uma provinha para a máquina e ver se ela passou.

O coração da aula é descobrir que uma IA não é mágica nem perfeita: às vezes ela acerta na hora, às vezes ela hesita e às vezes ela erra feio. E tudo bem! Errar faz parte. O importante é a criança aprender a olhar para o erro com curiosidade, e não com frustração. Quando a IA se confunde, há sempre um motivo: faltou exemplo, a luz estava diferente, o fundo atrapalhou ou as duas classes eram parecidas demais. O pequeno cientista investiga o porquê.

A grande descoberta do dia é que a gente pode consertar a IA. Se ela confunde duas coisas, a solução não é brigar com o computador: é voltar e dar mais exemplos, ou treinar de novo com mais luz, ou com o objeto em posições diferentes. As crianças vão experimentar isso na prática, vendo a IA melhorar com os próprios olhos. Essa é uma lição poderosa sobre como a inteligência artificial de verdade é construída no mundo lá fora: testando, errando e melhorando.

Esta é a penúltima aula do mês. No próximo encontro a turma vai apresentar o modelo treinado num pequeno show. Por isso, hoje o objetivo também é deixar o modelo de cada criança bem afinado e confiável, para que na apresentação ele acerte bonito. O professor conduz como um treinador animado: celebra cada acerto, transforma cada erro numa pista e mantém o clima de investigação leve e divertido.`,
  materiais: [
    `Computadores com a Teachable Machine aberta (teachablemachine.withgoogle.com) e o modelo já treinado nas aulas anteriores carregado em cada máquina`,
    `Webcam funcionando em cada computador (ou o microfone, se a turma treinou um projeto de sons)`,
    `Projetor ou TV ligada ao computador do professor para demonstrar o teste para todos verem juntos`,
    `Os objetos, cartões ou fantoches que cada criança usou para treinar as classes do seu modelo`,
    `Uma luminária ou lanterna (pode ser a do celular do professor) para mostrar como a iluminação muda as respostas`,
    `Folhas de papel com uma carinha feliz e uma carinha confusa desenhadas, para a atividade de marcar acertos e erros`,
    `Lápis de cor e adesivos (estrelinhas) para premiar os modelos que ficaram bem afinados`,
  ],
  conceitosChave: [
    `Testar — é mostrar coisas novas para a IA depois de treinar, para ver se ela aprendeu de verdade.`,
    `Acerto — é quando a IA escolhe a classe certa, igual à resposta que a gente esperava.`,
    `Erro — é quando a IA escolhe a classe errada ou fica confusa sem saber qual é qual.`,
    `Confiança — é a barrinha de porcentagem que mostra o quanto a IA tem certeza da resposta dela.`,
    `Confusão — é quando duas classes ficam parecidas demais e a IA não consegue decidir qual é.`,
    `Iluminação — é a luz do ambiente; se a luz muda, a IA pode enxergar diferente e errar.`,
    `Melhorar o modelo — é dar mais exemplos e treinar de novo para a IA acertar mais vezes.`,
  ],
  treinamento: `## O que o professor precisa saber

Na Teachable Machine, depois que o modelo está treinado, o painel da direita chamado "Visualização" (Preview) mostra a IA funcionando ao vivo. Embaixo da imagem da câmera aparece a lista de classes (os nomes que a criança deu, como "Maçã" e "Banana"), cada uma com uma barra colorida e um número em porcentagem. Essa barra é a "confiança": a classe com a barra mais cheia é o palpite da IA naquele instante. Testar é simplesmente mostrar objetos para a câmera e observar qual barra enche.

O ponto importante: você não precisa salvar nem treinar de novo para testar. O Preview já reage sozinho, em tempo real. Só treine de novo (botão "Treinar modelo") depois de adicionar exemplos novos. Antes da aula, abra um modelo de exemplo e brinque de mostrar objetos certos e errados, para você ver a barrinha subir e descer. Repare como a luz da sala muda os números.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma em roda. Pergunte: "Vocês acham que a IA de vocês é esperta? Será que ela acerta tudo?" Faça uma votação de mãos. Relembre rapidinho o que cada um treinou. Diga que hoje todos serão cientistas testando a própria invenção.

Conteúdo novo guiado (15 min): No projetor, abra a Teachable Machine com um modelo pronto. Mostre o painel "Visualização" à direita. Aponte para as barras coloridas e diga: "Essa barra cheia é o palpite da IA." Mostre um objeto da classe certa e celebre quando a barra enche. Depois, de propósito, mostre algo confuso (um objeto parecido ou a mão na frente) e deixe a barra ficar dividida. Explique: "Olha, agora ela ficou em dúvida!" Por fim, apague a luz ou ligue a lanterna na cara da câmera e mostre que os números mudam. A lição: luz diferente confunde a IA.

Mão na massa (25 min): Cada criança no seu computador, com o modelo já carregado. Primeiro, todos testam mostrando os objetos certos e contando quantas vezes a IA acerta. Em seguida, cada um tenta "enganar" a IA de propósito, para descobrir onde ela se confunde. Passe de mesa em mesa perguntando: "Quando ela errou? Por quê?" Quando uma criança achar uma confusão, oriente o conserto: clique na classe que está errando, em "Webcam", capture mais alguns exemplos bem variados, e clique em "Treinar modelo" de novo. Depois testem outra vez e vejam se melhorou.

Desafio e compartilhar (10 min): Reúna a turma. Convide dois ou três voluntários para mostrar no projetor um acerto e um erro do seu modelo, contando o que descobriram. Pergunte para todos: "O que faz a IA melhorar?" e colha as respostas (mais exemplos, mais luz, mostrar de jeitos diferentes). Feche dizendo que na próxima aula é o show de apresentação.

## Como explicar para crianças

Use a ideia de provinha: "A gente ensinou a IA, agora vamos ver se ela estudou direito." Compare a barrinha de confiança com encher um copo de água: o copo mais cheio é a resposta que a IA escolheu. Para a confusão, diga que a IA fica "coçando a cabeça sem saber". Para a iluminação, brinque que a IA é como a gente de olhos meio fechados no escuro: enxerga mal e pode confundir. E para o conserto, use a frase mágica: "Quando a IA erra, a gente não briga, a gente ensina mais!" Reforce sempre que errar é normal e que consertar é a parte mais divertida de ser cientista.

## Erros comuns e como ajudar

Criança que fica triste quando a IA erra: transforme o erro em vitória, dizendo "Você achou um defeito, parabéns, cientista!" Esquecer de treinar depois de adicionar exemplos: lembre que precisa clicar em "Treinar modelo" para a IA aprender o novo. Testar com o objeto longe demais ou fora do quadro: peça para chegar mais perto da câmera. Achar que a barra dividida é erro do computador: explique que é a IA mostrando dúvida, e que isso é uma informação útil. Querer adicionar exemplos demais de uma vez e bagunçar: oriente capturar poucos e variados de cada vez. Mexer na luz e assustar com a mudança: aproveite o momento para mostrar que iluminação importa.`,
  exercicios: [
    {
      titulo: `A provinha da IA`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor o painel "Visualização" à direita e explique que a barra cheia é o palpite da IA. Depois peça que cada criança, no seu computador, mostre um objeto certo de cada classe para a câmera e observe qual barra enche. Passe de mesa em mesa confirmando que a câmera está ligada e o modelo carregado.`,
      atividade: `No seu computador, mostre para a câmera um objeto de cada classe que você treinou. Olhe a barrinha colorida e veja qual enche mais. A IA acertou? Levante a mão e conte para o professor qual classe a sua IA escolheu.`,
      gabarito: `A criança acertou quando consegue mostrar um objeto, observar a barra correspondente encher e dizer qual classe a IA escolheu. Sinal de sucesso: ela aponta para a barra mais cheia e diz "a IA achou que era a maçã" (ou a classe que ela mostrou).`,
    },
    {
      titulo: `Caça aos acertos e aos erros`,
      tipo: `investigação com papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha com uma carinha feliz e uma carinha confusa. Explique que a cada teste a criança marca um tracinho na carinha feliz se a IA acertou, ou na carinha confusa se ela errou ou ficou em dúvida. Oriente fazer uns cinco testes. Circule perguntando "essa contou como acerto ou erro?" para ajudar a decidir.`,
      atividade: `Faça cinco testes mostrando objetos para a IA. A cada teste, marque um tracinho: na carinha feliz se ela acertou, na carinha confusa se ela errou ou ficou em dúvida. No fim, conte quantos acertos e quantos erros a sua IA teve.`,
      gabarito: `A criança acertou quando registra os resultados e consegue dizer o total de acertos e de erros (ex.: "três acertos e dois erros"). Não importa o número exato; importa ela ter observado e classificado cada teste como acerto ou confusão.`,
    },
    {
      titulo: `Engana a IA`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha um desafio divertido: tentar confundir a IA de propósito. Sugira truques como mostrar um objeto parecido com outra classe, colocar a mão na frente, mostrar pela metade ou afastar muito. A ideia é descobrir onde o modelo é frágil. Reforce que achar a confusão é uma vitória de cientista, não um defeito da criança.`,
      atividade: `Tente enganar a sua IA! Mostre algo parecido com outra classe, ou esconda metade do objeto, e veja a barrinha ficar dividida ou ir para a classe errada. Quando conseguir confundir a IA, conte para um colega qual truque funcionou.`,
      gabarito: `A criança acertou quando consegue provocar uma confusão visível (a barra dividida ou apontando para a classe errada) e explicar o que fez para confundir. Sinal de sucesso: ela descreve um truque, como "eu mostrei só um pedacinho e ela achou que era a outra coisa".`,
    },
    {
      titulo: `Por que a IA se confundiu?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Reúna a turma em roda e recolha as confusões que apareceram no exercício anterior. Para cada uma, pergunte "por que será que isso aconteceu?" e guie até as causas: faltou exemplo, as classes eram parecidas, a luz estava ruim ou o objeto estava longe. Anote no quadro as causas que a turma descobrir. Esta conversa prepara o conserto do próximo exercício.`,
      atividade: `Na roda, conte uma confusão que a sua IA teve e tente adivinhar o motivo: faltou exemplo? As duas coisas eram parecidas? A luz estava ruim? Escute também os motivos que os colegas descobriram.`,
      gabarito: `A criança acertou quando relaciona uma confusão a um motivo plausível, como "ela errou porque as duas frutas são vermelhas" ou "estava escuro". Qualquer causa razoável (poucos exemplos, classes parecidas, luz, distância) está correta.`,
    },
    {
      titulo: `Cientista que conserta a IA`,
      tipo: `desafio`,
      tempo: `11 minutos`,
      guiaProfessor: `Este é o desafio final e mais completo. Oriente cada criança a escolher a classe que mais errava, clicar nela, usar o botão "Webcam" para capturar alguns exemplos novos e bem variados (mudando a posição e ligando mais luz), e depois clicar em "Treinar modelo". Quando terminar, peça que testem de novo a mesma situação que dava erro e comparem. Celebre cada modelo que melhorou com uma estrelinha.`,
      atividade: `Conserte a sua IA! Escolha a classe que mais errava, clique nela, capture alguns exemplos novos com a webcam (mude a posição e acenda mais luz) e clique em "Treinar modelo". Depois teste de novo aquilo que antes confundia e veja se a sua IA melhorou.`,
      gabarito: `A criança acertou quando completa o ciclo: adiciona exemplos novos, treina o modelo de novo e testa outra vez. Sinal de sucesso: ela percebe e relata uma melhora (a barra fica mais cheia ou a confusão diminui), entendendo que mais exemplos e mais luz ajudam a IA a acertar.`,
    },
  ],
};
