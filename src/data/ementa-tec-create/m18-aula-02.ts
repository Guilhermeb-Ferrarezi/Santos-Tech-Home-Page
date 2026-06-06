import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Gerando minhas primeiras imagens",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Praticar a geração guiada de imagens no ChatGPT com DALL-E, escrevendo vários pedidos, ajustando os resultados e salvando os arquivos organizados em uma pasta pessoal do projeto.`,
  descricao: `Na aula passada, os alunos conheceram o DALL-E e entenderam que é a inteligência artificial que desenha a partir de texto. Agora chegou a hora de colocar a mão na massa de verdade: cada aluno vai escrever seus próprios pedidos (os prompts) e ver a IA transformar palavras em imagens na tela. O foco do dia é a prática repetida, ou seja, gerar muitas imagens, observar o que mudou e tentar de novo com pequenos ajustes.

O coração desta aula é o ciclo de tentativa e ajuste. O aluno escreve um pedido simples, lê o resultado, percebe o que ficou diferente do que imaginava e reescreve o pedido com mais detalhes. Esse vai e volta é normal e é assim que se aprende a conversar com a IA. Não existe acerto na primeira tentativa: existe melhorar a cada nova versão. O professor deve incentivar a curiosidade e a coragem de testar ideias diferentes.

A segunda metade do aprendizado é tão importante quanto gerar: salvar e organizar. Uma imagem que não foi salva se perde quando a conversa fecha. Por isso, cada aluno vai criar uma pasta pessoal no computador, com o próprio nome, e guardar ali todas as imagens boas que gerar. Aprender a baixar o arquivo, dar um nome claro e colocar na pasta certa é uma habilidade que vai servir para o projeto do mês inteiro: a galeria de imagens com IA.

Ao final da aula, cada aluno terá um conjunto de imagens próprias, geradas por ele, organizadas em uma pasta com nome. Não precisa que todas estejam perfeitas: o objetivo é ganhar confiança com a ferramenta, entender o ciclo de gerar e ajustar, e sair com os arquivos guardados em ordem para as próximas aulas.`,
  materiais: [
    `Computadores com acesso à internet e ao ChatGPT com DALL-E (geração de imagem por IA), um por aluno`,
    `Conta no ChatGPT já criada e com login feito antes da aula (de preferência conta da escola)`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo`,
    `Pasta de exemplo preparada pelo professor, com três ou quatro imagens já geradas para mostrar à turma`,
    `Folha impressa ou slide com cinco ideias de pedidos prontos para os alunos que travarem`,
    `Nome de pasta combinado com a turma (por exemplo, "Galeria-NomeDoAluno") para padronizar`,
  ],
  conceitosChave: [
    `Prompt — o pedido em texto que escrevemos para a IA dizendo qual imagem queremos.`,
    `Gerar — a ação de pedir à IA que crie a imagem a partir do prompt.`,
    `Ajuste (refinar) — mudar o pedido com mais detalhes para melhorar o resultado anterior.`,
    `Baixar (download) — salvar a imagem da tela para dentro do computador como um arquivo.`,
    `Pasta pessoal — o lugar no computador, com o nome do aluno, onde ele guarda as imagens do projeto.`,
    `Nome de arquivo — o título que damos a cada imagem para encontrá-la depois com facilidade.`,
    `Variação — uma nova versão da mesma ideia, gerada quando pedimos à IA para tentar de novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o DALL-E para dar esta aula. O processo é simples: dentro do ChatGPT, você escreve um pedido em texto na caixa de mensagem (embaixo da tela) e aperta Enter; a IA responde com uma imagem em alguns segundos. Para gerar imagem, basta pedir de forma clara, por exemplo: "Crie uma imagem de...". Para salvar, passe o cursor sobre a imagem gerada e clique no ícone de baixar (uma setinha para baixo) ou clique com o botão direito e escolha "Salvar imagem como". É importante testar tudo isso sozinho antes da aula e deixar uma conta logada em cada computador. Lembre os alunos de que cada pedido novo gera uma imagem nova, então vale a pena tentar várias vezes.

## Passo a passo da aula

Aquecimento e revisão (10 min): Retome a aula anterior com uma pergunta rápida: "O que é o DALL-E e o que ele faz?". Mostre no projetor as três imagens de exemplo que você gerou e pergunte qual pedido cada uma poderia ter tido. Isso aquece a turma para escrever os próprios pedidos.

Conteúdo novo guiado (15 min): No projetor, abra o ChatGPT e clique em "Novo chat" (New Chat), no canto superior esquerdo. Na caixa de mensagem embaixo, digite um pedido simples, como: "Crie uma imagem de um robô amigável segurando um sorvete, estilo desenho animado". Aperte Enter e espere a imagem aparecer. Mostre que dá para ajustar: escreva em seguida "Agora deixe o fundo azul e o robô sorrindo" e veja a nova versão. Demonstre como salvar: passe o cursor sobre a imagem, clique no ícone de baixar e mostre a imagem caindo na pasta Downloads. Por fim, crie uma pasta nova na área de trabalho, renomeie para "Galeria-SeuNome" e mova a imagem para dentro dela.

Mão na massa (25 min): Cada aluno cria a própria pasta pessoal e começa a gerar. Peça que escrevam pelo menos quatro pedidos diferentes, gerem as imagens, escolham as melhores e salvem cada uma na pasta com um nome claro (por exemplo, "robo-sorvete"). Incentive o ciclo de ajuste: a cada imagem, peça que tentem mudar uma coisa no pedido. Circule pela sala ajudando individualmente e elogiando as tentativas.

Desafio + compartilhar (10 min): Lance o desafio de gerar uma imagem a partir de uma palavra sorteada (por exemplo, "floresta mágica"). Depois, dois ou três voluntários mostram a pasta organizada e a imagem favorita no projetor, explicando qual pedido usaram.

## Como explicar de forma clara

Use comparações simples. Diga que escrever um prompt é como pedir um lanche: quanto mais você explica o que quer, mais perto vem do que imaginou. Explique que ajustar é como pedir "sem cebola, por favor" depois que o lanche chegou. Compare a pasta pessoal a uma mochila: tudo que é importante a gente guarda lá para não perder. Mostre na tela enquanto fala os nomes dos botões, e repita devagar onde fica o ícone de baixar. Evite termos difíceis; prefira "caixa de escrever" para a caixa de mensagem e "setinha de baixar" para o botão de download.

## Erros comuns e como ajudar

O erro mais comum é gerar a imagem e esquecer de salvar; reforce o tempo todo "gerou que gostou, baixou na hora". Outro erro é salvar tudo na pasta Downloads e nunca mover para a pasta pessoal; mostre de novo como arrastar o arquivo. Muitos alunos escrevem pedidos vagos como "um bicho" e ficam frustrados; ajude a acrescentar detalhes (cor, lugar, estilo). Há quem dê o mesmo nome a vários arquivos e um sobrescreve o outro; ensine a usar nomes diferentes e numerados. Por fim, alguns desistem na primeira imagem ruim; lembre que a IA melhora a cada ajuste e que tentar de novo faz parte.`,
  exercicios: [
    {
      titulo: `Meu primeiro pedido`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno abra um chat novo e encontre a caixa de mensagem. Confira se a primeira imagem foi gerada antes de seguir.`,
      atividade: `Abra um novo chat no ChatGPT e escreva um pedido simples para criar uma imagem de algo que você gosta. Aperte Enter e espere a imagem aparecer.`,
      gabarito: `O aluno tem um chat aberto com pelo menos uma imagem gerada na tela, a partir de um pedido escrito por ele. Exemplo de pedido válido: "Crie uma imagem de um gato astronauta no espaço, estilo desenho".`,
    },
    {
      titulo: `Salvar na pasta certa`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o ícone de baixar e ensine a criar a pasta pessoal. Verifique se o aluno deu um nome claro ao arquivo e moveu para a pasta.`,
      atividade: `Crie uma pasta no computador com o seu nome (Galeria-SeuNome). Baixe a imagem que você gerou e mova o arquivo para dentro dessa pasta, dando a ele um nome fácil de entender.`,
      gabarito: `Existe uma pasta com o nome do aluno e, dentro dela, pelo menos um arquivo de imagem com nome claro (por exemplo, "gato-astronauta"). A imagem não está mais solta na pasta Downloads.`,
    },
    {
      titulo: `Ajustar e melhorar`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Incentive o aluno a não recomeçar do zero: basta escrever um novo pedido pedindo a mudança. Compare as duas versões lado a lado.`,
      atividade: `Pegue uma imagem que você gerou e escreva um novo pedido mudando uma coisa nela (a cor, o fundo, a expressão ou o estilo). Compare a versão antiga com a nova.`,
      gabarito: `O aluno tem duas versões da mesma ideia e consegue apontar o que mudou entre elas. Exemplo: a primeira tinha fundo branco e a segunda, depois do ajuste "deixe o fundo azul e à noite", ficou com fundo azul escuro.`,
    },
    {
      titulo: `Pedido em dupla`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um aluno descreve a ideia em voz alta e o outro escreve o pedido, depois trocam de papel. Cada dupla salva as duas imagens.`,
      atividade: `Com o colega, criem juntos um pedido bem detalhado para uma imagem. Um pensa a ideia e o outro escreve o prompt. Gerem, ajustem se quiserem e salvem a imagem nas duas pastas.`,
      gabarito: `A dupla gerou ao menos uma imagem combinada entre os dois e salvou o arquivo nas pastas pessoais de cada um. Os dois conseguem explicar quais detalhes colocaram no pedido para chegar nesse resultado.`,
    },
    {
      titulo: `Roda de conversa: o que faz uma boa geração`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Reúna a turma em roda e conduza com perguntas abertas. Anote no quadro as dicas que surgirem para retomar nas próximas aulas.`,
      atividade: `Em roda, cada aluno conta uma coisa que aprendeu hoje sobre gerar e organizar imagens (por exemplo, dar detalhes no pedido, salvar na hora ou usar nomes claros nos arquivos).`,
      gabarito: `A turma levanta ao menos quatro ideias válidas, como: escrever pedidos com detalhes, baixar a imagem assim que gostar, mover o arquivo para a pasta pessoal, usar nomes diferentes para cada imagem e tentar de novo ajustando o pedido.`,
    },
  ],
};
