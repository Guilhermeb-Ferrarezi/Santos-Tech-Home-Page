import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "O Que Existe Dentro de uma IA?",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir de forma lúdica o que é Inteligência Artificial, onde ela aparece no dia a dia e entender que a IA aprende olhando muitos exemplos, e não pensando como gente.`,
  descricao: `A Inteligência Artificial, ou IA, já faz parte do mundo das crianças mesmo que elas nem percebam. Ela está no jogo que sugere a próxima fase, na assistente de voz que responde quando alguém pergunta as horas, no filtro engraçado que coloca orelhas de coelho no rosto e até no aplicativo que adivinha qual música a pessoa quer ouvir. Nesta primeira aula do mês, vamos abrir essa "caixinha mágica" e mostrar que, por dentro, não existe nenhum cérebro de robô pensando sozinho: existe um programa que aprendeu a reconhecer coisas porque viu muitos e muitos exemplos.

A ideia central da aula é simples e poderosa: a IA não "pensa" como uma pessoa, ela aprende por repetição de exemplos. Quando mostramos centenas de fotos de gatos para um computador e dizemos "isto é um gato", ele começa a perceber padrões — orelhas pontudas, bigodes, olhos redondos. Depois de ver muitos gatos, ele consegue olhar uma foto nova e dizer "acho que isto é um gato". É parecido com a forma como a própria criança aprendeu a reconhecer um cachorro: vendo vários cachorros até o cérebro guardar o jeitão deles.

Como esta é a aula de abertura, o foco é despertar a curiosidade e construir a base de vocabulário, sem ainda treinar nenhum modelo de verdade. O professor vai usar muitas demonstrações no projetor, exemplos do cotidiano e perguntas abertas. A Teachable Machine aparece apenas como uma espiada no que vem pela frente: mostramos a tela inicial para criar expectativa, mas o treino real acontece nas próximas aulas.

A aula termina com uma roda de conversa em grupo comparando duas formas de aprender: o cérebro humano e a IA. As crianças vão perceber semelhanças (as duas aprendem vendo exemplos) e diferenças (a gente também usa sentimentos, imaginação e bom senso; a IA só compara padrões). Essa reflexão prepara o terreno emocional e conceitual para o mês inteiro, em que elas vão treinar e testar sua própria IA.`,
  materiais: [
    `Computadores (1 por dupla) com o navegador aberto na página inicial da Teachable Machine (teachablemachine.withgoogle.com)`,
    `Projetor ou TV grande conectada ao computador do professor`,
    `Slides ou imagens prontas de exemplos de IA do dia a dia (jogo, assistente de voz, filtro de câmera, recomendação de vídeos)`,
    `Cartões impressos com figuras de gatos, cachorros e outros bichos para o jogo de "achar o padrão"`,
    `Um celular ou tablet com um filtro de câmera divertido, só para demonstração`,
    `Quadro branco e canetas para anotar as ideias da roda de conversa`,
    `Cronômetro ou relógio visível para controlar o ritmo de cada etapa`,
  ],
  conceitosChave: [
    `Inteligência Artificial (IA) — é um programa de computador que aprendeu a reconhecer ou fazer coisas vendo muitos exemplos, parecido com um aluno que estuda.`,
    `Exemplo — cada coisa que mostramos para a IA aprender, como uma foto, um som ou um desenho.`,
    `Padrão — o "jeitão" que se repete em muitos exemplos, como todo gato ter orelhas pontudas.`,
    `Treinar — ensinar a IA mostrando vários exemplos até ela conseguir reconhecer sozinha.`,
    `Modelo — o "cérebro de mentirinha" pronto que a IA usa para adivinhar depois de treinar.`,
    `Assistente de voz — programa de IA que escuta a voz das pessoas e responde, como a Alexa ou a Siri.`,
    `Reconhecer — quando a IA olha uma coisa nova e diz com qual exemplo ela se parece.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Inteligência Artificial para dar esta aula. Basta entender uma frase: a IA aprende por exemplos, não por mágica. Quando um programa "reconhece" um gato, é porque alguém mostrou muitas fotos de gatos para ele antes. Guarde esta analogia, pois ela é o coração da aula: a IA é como um aluno muito dedicado que decora padrões, mas que nunca pensa sozinho nem tem sentimentos.

Antes da aula, abra no seu computador o site da Teachable Machine (teachablemachine.withgoogle.com). Você verá uma página com o botão grande "Get Started" (Começar). Não vamos treinar nada hoje, mas deixe essa tela pronta no projetor para dar uma espiada no final. Tenha também seus exemplos do dia a dia prontos: um vídeo curto de assistente de voz, uma imagem de filtro de câmera e um print de recomendações de vídeos.

## Passo a passo da aula

Aquecimento (10 min): Comece com a pergunta mágica: "Vocês já falaram com uma máquina que respondeu?". Deixe as crianças contarem histórias de Alexa, Siri ou jogos que "adivinham" coisas. Anote no quadro tudo que elas citarem. Isso revela quanto elas já convivem com IA sem saber o nome.

Conteúdo novo guiado (15 min): No projetor, mostre três exemplos de IA do cotidiano: a assistente de voz, o filtro de câmera e a recomendação de vídeos. A cada exemplo, pergunte: "Como será que a máquina aprendeu isso?". Depois revele a ideia central com o jogo dos cartões: mostre vários cartões de gatos e pergunte "o que todo gato tem?". As crianças vão dizer "orelha pontuda, bigode". Explique que a IA aprende exatamente assim, achando o padrão que se repete. Para finalizar, abra a Teachable Machine no projetor, clique em "Get Started" só para mostrar a tela das três opções (Imagem, Áudio, Pose) e diga: "Mês que vem a IA será nossa, e nós vamos ensiná-la!". Não clique em mais nada.

Mão na massa (25 min): Em duplas, entregue um conjunto de cartões misturados (gatos, cachorros e outros bichos). O desafio: separar os cartões em grupos e escrever no papel qual padrão eles usaram para decidir. Depois, cada dupla vira "a IA": um colega mostra um cartão novo e a dupla precisa "reconhecer" usando só o padrão anotado, sem chutar pela memória. Circule pelas mesas, faça perguntas e elogie quando explicarem o padrão com palavras.

Desafio e compartilhar (10 min): Faça a roda de conversa final. Pergunte: "Como você aprendeu a reconhecer um cachorro?" e "Como a IA aprende?". Conduza a turma a perceber que os dois aprendem vendo exemplos, mas que só nós temos imaginação e sentimentos. Cada dupla compartilha um padrão que descobriu.

## Como explicar para crianças

Use sempre comparações com coisas que elas conhecem. Diga que a IA é como um bebê aprendendo: ninguém nasce sabendo o que é um cachorro, a gente aprende vendo vários. Evite a palavra "algoritmo" e troque por "receita que o computador segue". Repita bastante a frase "muitos exemplos viram um padrão". Use o corpo e a voz: faça orelhas de gato com as mãos para mostrar o padrão. Mantenha tudo concreto, com figuras e gestos, nunca abstrato.

## Erros comuns e como ajudar

O erro mais comum é a criança achar que a IA "é viva" ou "pensa de verdade". Corrija com carinho: "Ela não pensa, ela só compara com o que já viu". Outro erro é querer chutar o cartão pela memória em vez de usar o padrão anotado — relembre a regra do jogo. Algumas crianças vão se dispersar no projetor; mantenha cada demonstração curta, com no máximo um minuto cada. Se uma dupla travar ao descrever o padrão, ajude com perguntas: "O que todos esses bichos têm igual?". Por fim, se alguém disser que IA é robô, mostre que a maioria das IAs não tem corpo nenhum, mora só dentro do programa.`,
  exercicios: [
    {
      titulo: `Caça à IA escondida`,
      tipo: `Conversa em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça no aquecimento. Mostre ou cite situações do dia a dia e peça que a turma levante a mão quando achar que tem IA escondida ali. Aceite respostas variadas e valorize a participação.`,
      atividade: `O professor fala várias situações: "o jogo sugeriu a próxima fase", "a assistente de voz respondeu a hora", "o filtro colocou orelhas de coelho", "a vovó fez um bolo", "o aplicativo adivinhou a música". As crianças levantam a mão quando tem IA na cena.`,
      gabarito: `Têm IA: jogo que sugere fase, assistente de voz que responde, filtro de câmera, aplicativo que adivinha a música. NÃO tem IA: a vovó fazendo bolo (isso é uma pessoa, não uma máquina que aprendeu por exemplos).`,
    },
    {
      titulo: `Descobrindo o padrão do gato`,
      tipo: `Atividade com cartões`,
      tempo: `10 minutos`,
      guiaProfessor: `Distribua cartões de gatos para cada dupla. Peça que observem e listem o que todo gato tem em comum. Conduza para a ideia de "padrão" sem dar a resposta pronta.`,
      atividade: `Cada dupla recebe quatro cartões de gatos diferentes e escreve no papel: "Todo gato tem ______ e ______." A dupla precisa achar pelo menos duas coisas iguais em todos os gatos.`,
      gabarito: `Respostas corretas incluem: orelhas pontudas, bigodes, quatro patas, rabo, olhos redondos, focinho pequeno. Qualquer característica que apareça em TODOS os gatos vale. O importante é a dupla perceber que existe um padrão que se repete.`,
    },
    {
      titulo: `Eu sou a IA`,
      tipo: `Jogo de reconhecer`,
      tempo: `12 minutos`,
      guiaProfessor: `Depois de cada dupla anotar o padrão do gato, entregue cartões novos misturados (gatos e cachorros). A dupla deve "reconhecer" usando só o padrão anotado, sem chutar pela memória. Reforce a regra.`,
      atividade: `Um colega mostra um cartão novo. A dupla, fingindo ser a IA, olha o padrão que anotou e diz: "É gato" ou "Não é gato", explicando por quê. Façam isso com cinco cartões.`,
      gabarito: `A dupla acerta quando usa o padrão para decidir: se o cartão tem orelhas pontudas, bigodes e cara de gato, é gato; se tem orelhas caídas e focinho grande, não é gato (é cachorro). O acerto está em usar o padrão para justificar, não em adivinhar.`,
    },
    {
      titulo: `Treinar com poucos ou muitos exemplos?`,
      tipo: `Desafio de raciocínio`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha uma comparação. Mostre que uma IA que viu só um gato erra muito, e uma que viu muitos gatos acerta mais. Conduza a conclusão pela discussão.`,
      atividade: `Pergunte: "Se a IA viu só UM gato preto, e aparecer um gato laranja, ela vai reconhecer?". Depois: "E se ela tivesse visto cem gatos de cores diferentes?". As crianças respondem e explicam.`,
      gabarito: `Com só um gato preto, a IA provavelmente erra o gato laranja, porque aprendeu pouco e pode achar que "gato é sempre preto". Com cem gatos de várias cores, ela acerta muito mais, porque viu muitos exemplos e entendeu o padrão de verdade. Conclusão: quanto mais exemplos, melhor a IA aprende.`,
    },
    {
      titulo: `Cérebro humano contra IA`,
      tipo: `Roda de conversa final`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a roda final comparando as duas formas de aprender. Anote no quadro duas colunas: "Nosso cérebro" e "A IA". Puxe semelhanças e diferenças com perguntas abertas.`,
      atividade: `A turma responde em grupo: "Como você aprendeu a reconhecer um cachorro?" e "Como a IA aprende a reconhecer um cachorro?". Depois listam uma coisa em que os dois são parecidos e uma em que são diferentes.`,
      gabarito: `Parecido: os dois aprendem vendo muitos exemplos até guardar o padrão. Diferente: nós também usamos imaginação, sentimentos e bom senso, e podemos aprender com pouquíssimos exemplos; a IA só compara padrões, não sente nada e precisa de muitos exemplos. Qualquer resposta que mostre essa semelhança e essa diferença está correta.`,
    },
  ],
};
