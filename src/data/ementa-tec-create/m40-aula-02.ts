import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Roteiro e Plano da Experiência",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Transformar a ideia de mundo em VR em um documento de design concreto, definindo ambiente, jornada do usuário e as 2 ou 3 interações principais.`,
  descricao: `Na aula passada, cada aluno imaginou um mundo possível em Realidade Virtual. Agora chegou a hora de tirar essa ideia da cabeça e colocá-la no papel de forma organizada. Toda experiência VR de qualidade começa por um plano: sem ele, o aluno se perde no Unity, cria coisas que não combinam e desperdiça tempo. Esta aula ensina o aluno a pensar como um designer de experiências, decidindo o que o usuário vai ver, sentir e fazer dentro do mundo virtual.

O coração desta aula é o documento de design, também chamado de GDD (Game Design Document) numa versão simples e focada em VR. Nele o aluno descreve o ambiente (onde a experiência acontece), a jornada do usuário (o que a pessoa faz do começo ao fim) e as interações principais (as ações com as mãos que dão graça à experiência). O aluno também faz um esboço do espaço, desenhado à mão ou no computador, e monta uma lista de assets, que são os objetos, sons e modelos que ele vai precisar.

Um ponto especial da aula é usar o Claude como parceiro de revisão. Depois de escrever o plano, o aluno cola o documento no Claude e pede uma análise crítica: o plano faz sentido? Quais desafios técnicos podem aparecer no Unity? Alguma interação é difícil demais para o tempo disponível? Isso ensina os adolescentes a usar a inteligência artificial como consultor, não como alguém que faz o trabalho por eles.

Ao final, cada aluno sai com um plano realista e enxuto, pronto para virar projeto no Unity nas próximas aulas. O foco é planejar pequeno e bem feito: uma experiência curta e polida vale muito mais do que um mundo gigante e quebrado.`,
  materiais: [
    `Computadores com Unity instalado e editor de texto (para escrever o documento de design)`,
    `Projetor ou tela grande para o professor mostrar o modelo de documento`,
    `Óculos VR disponíveis na sala (para o aluno relembrar a sensação de escala e presença)`,
    `Arquivo de exemplo: modelo de documento de design VR (template em branco para preencher)`,
    `Papel e lápis ou tablet para o esboço do espaço`,
    `Acesso ao Claude para revisão do plano`,
  ],
  conceitosChave: [
    `Documento de design — texto curto que descreve o que a experiência é, onde acontece e o que o usuário faz nela.`,
    `Jornada do usuário — a sequência de momentos que a pessoa vive do início ao fim da experiência VR.`,
    `Interação — uma ação que o usuário faz com as mãos ou o corpo e que muda algo no mundo virtual.`,
    `Asset — qualquer recurso usado na experiência: modelo 3D, som, textura, imagem ou efeito.`,
    `Escopo — o tamanho do projeto; manter o escopo pequeno evita que a experiência fique impossível de terminar.`,
    `Esboço de espaço — desenho simples mostrando onde ficam os objetos e por onde o usuário se move.`,
    `Presença — a sensação de estar realmente dentro do mundo virtual, alvo principal de uma boa experiência VR.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de planejamento, não de programação, então você não precisa dominar o Unity para conduzi-la bem. O seu papel é guiar o aluno a tomar decisões claras e realistas. Tenha em mente três perguntas-chave que estruturam todo o documento: Onde a experiência acontece (ambiente)? O que o usuário faz do começo ao fim (jornada)? Quais são as 2 ou 3 ações principais com as mãos (interações)? Se o aluno responder bem essas três perguntas, o plano está pronto.

O erro mais comum nesta idade é querer fazer grande demais. Reforce sempre: melhor uma experiência curta e completa do que um mundo enorme e quebrado. Uma boa experiência VR de aluno pode durar apenas 2 ou 3 minutos.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: peça que cada aluno conte em uma frase o mundo que imaginou na aula 1. Mostre o óculos VR e relembre a sensação de presença e escala. Pergunte: o que faz a gente sentir que está mesmo dentro do mundo? Anote as respostas no quadro (luz, som, tamanho dos objetos, poder mexer nas coisas).

15 min, conteúdo novo guiado: projete o modelo de documento de design e explique cada seção. Use um exemplo simples para a turma toda, por exemplo uma experiência chamada Jardim Mágico. Preencha junto com eles, em voz alta, este modelo no projetor:

Titulo: Jardim Mágico
Ambiente: um jardim a noite, com vaga-lumes e uma fonte no centro.
Jornada do usuario: o usuario aparece perto da fonte, olha em volta, pega uma semente, planta no canteiro e ve a flor crescer.
Interacoes principais: 1) pegar a semente com a mao; 2) plantar tocando o canteiro; 3) regar puxando uma alavanca.
Lista de assets: fonte, canteiro, semente, flor, vaga-lumes, som de grilos, som de agua.

Mostre que a lista de assets nasce direto da jornada: cada coisa citada vira um item da lista.

25 min, mão na massa: cada aluno preenche o próprio documento de design no editor de texto, usando o template. Depois desenha o esboço do espaço no papel: uma vista de cima mostrando onde o usuário começa e onde ficam os objetos. Circule pela sala ajudando a cortar escopo. Quando o documento estiver pronto, o aluno cola o texto no Claude e usa este pedido:

Você e um designer de VR experiente. Leia meu plano de experiência abaixo e me diga: o plano esta claro? Quais desafios técnicos posso ter no Unity? Alguma interacao e difícil demais para um iniciante? Sugira como simplificar. Aqui esta o plano: (colar o plano)

Peça que o aluno leia a resposta do Claude e ajuste pelo menos um ponto do plano com base nela.

10 min, desafio e compartilhar: cada aluno apresenta em 30 segundos o ambiente e a interação principal da sua experiência. O desafio extra: escolher qual das interações é a mais importante e marcá-la com uma estrela no documento, pois essa será a primeira a ser construída no Unity.

## Como explicar de forma clara (linguagem para a idade)

Compare o documento de design com a planta de uma casa: ninguém constrói uma casa sem desenhar antes onde ficam as paredes. Diga que a jornada do usuário é como um roteiro de filme curto, com começo, meio e fim. Para o conceito de escopo, use a imagem de uma pizza: é melhor uma fatia bem feita do que uma pizza gigante sem recheio. Sobre o Claude, explique que ele é como um colega mais experiente que dá conselho, mas a decisão final é sempre do aluno.

## Erros comuns e como ajudar

Aluno com escopo gigante: ajude a cortar para no máximo 3 interações e um único ambiente. Aluno travado na ideia: peça que descreva primeiro só o ambiente, e a jornada surge depois. Lista de assets vazia ou genérica: peça que releia a jornada e liste cada objeto citado. Aluno que cola o plano no Claude e aceita tudo sem pensar: pergunte se ele concorda com cada sugestão e por quê, reforçando o pensamento crítico.`,
  exercicios: [
    {
      titulo: `Caça aos três pilares`,
      tipo: `Identificação em grupo`,
      tempo: `5 minutos`,
      guiaProfessor: `Leia em voz alta a descrição da experiência Jardim Mágico e peça que os alunos identifiquem onde estão o ambiente, a jornada e as interações. Faça oralmente, sem escrever ainda.`,
      atividade: `Ouça a descrição do Jardim Mágico lida pelo professor e aponte: qual parte é o ambiente, qual é a jornada do usuário e quais são as interações principais.`,
      gabarito: `Ambiente: um jardim à noite com vaga-lumes e uma fonte no centro. Jornada: o usuário aparece perto da fonte, olha em volta, pega uma semente, planta no canteiro e vê a flor crescer. Interações: pegar a semente, plantar tocando o canteiro e regar puxando a alavanca.`,
    },
    {
      titulo: `Lista de assets a partir da jornada`,
      tipo: `Extração de informação`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre uma jornada curta e peça que o aluno extraia a lista de assets. Reforce que cada objeto, som ou modelo citado vira um item.`,
      atividade: `Dada a jornada: o usuário entra numa caverna escura, acende uma tocha, encontra um baú, abre o baú e uma joia brilha. Escreva a lista de assets necessária para essa experiência.`,
      gabarito: `Caverna (modelo do ambiente), tocha, baú, joia, luz da tocha (efeito), som de passos, som de baú abrindo, som ambiente de caverna (gotejar de água).`,
    },
    {
      titulo: `Esboço do meu espaço`,
      tipo: `Desenho prático`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno desenhe a vista de cima do próprio ambiente, marcando o ponto inicial do usuário e a posição dos objetos. Verifique se o usuário consegue alcançar tudo a partir de onde começa.`,
      atividade: `Desenhe no papel uma vista de cima do seu ambiente VR. Marque com a letra U onde o usuário começa e numere os objetos principais na ordem em que ele os usa.`,
      gabarito: `Não há resposta única. O esboço está correto se mostra: o ponto inicial do usuário marcado com U, os objetos posicionados de forma alcançável, e a ordem de uso numerada coerente com a jornada descrita no documento. Exemplo válido: U no centro, objeto 1 (mesa) à frente, objeto 2 (botão) à direita, objeto 3 (porta) ao fundo.`,
    },
    {
      titulo: `Revisão crítica com o Claude`,
      tipo: `Uso de IA como consultor`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe o aluno colando o plano no Claude com o prompt da aula. Garanta que ele leia a resposta e altere pelo menos um ponto, em vez de aceitar tudo passivamente.`,
      atividade: `Cole o seu documento de design no Claude usando o prompt de revisão. Anote duas sugestões que o Claude deu e escolha uma para aplicar no seu plano, explicando por quê.`,
      gabarito: `Resposta correta contém: duas sugestões reais retiradas da resposta do Claude (por exemplo, reduzir o número de interações, ou trocar uma interação difícil por uma mais simples), uma escolha aplicada e uma justificativa do aluno. Exemplo: o Claude sugeriu que pegar objetos pequenos é difícil em VR; vou trocar a semente pequena por um vaso maior, porque é mais fácil de agarrar com a mão.`,
    },
    {
      titulo: `Cortando o escopo e marcando a interação-estrela`,
      tipo: `Decisão de design`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafie o aluno a reduzir o plano ao essencial e a escolher a interação mais importante. Esta é a interação que será construída primeiro no Unity, então deve ser a mais central para a experiência.`,
      atividade: `Releia o seu plano. Se tiver mais de 3 interações, corte para no máximo 3. Depois marque com uma estrela a interação principal, aquela sem a qual a experiência perde o sentido, e escreva uma frase justificando a escolha.`,
      gabarito: `Resposta correta apresenta no máximo 3 interações, uma delas marcada como principal, com justificativa coerente. Exemplo: na experiência Jardim Mágico, a interação-estrela é plantar a semente, porque é o momento em que o usuário causa a transformação central da experiência (a flor crescendo); pegar e regar são apoios desse momento.`,
    },
  ],
};
