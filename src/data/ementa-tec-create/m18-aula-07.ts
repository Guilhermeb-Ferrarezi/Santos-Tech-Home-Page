import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a galeria de imagens",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno organiza as melhores imagens geradas no mês, define a ordem de exibição e cria um título e uma legenda para cada arte, montando a estrutura da galeria.`,
  descricao: `Esta é a aula em que o trabalho do mês inteiro começa a virar um produto de verdade. Durante quatro semanas os alunos aprenderam a conversar com o DALL-E dentro do ChatGPT, escreveram prompts cada vez mais detalhados, exploraram estilos e criaram uma coleção de arte para games. Agora chegou a hora de parar de gerar imagens novas e começar a curar: escolher as melhores, colocá-las em ordem e dar a cada uma um nome e uma explicação. Isso é o que transforma uma pasta bagunçada de arquivos em uma galeria que conta uma história.

Curadoria é uma palavra nova para muitos alunos, mas o conceito é simples: é o trabalho de escolher e organizar. Um artista profissional não mostra tudo o que produz — ele seleciona as obras mais fortes e decide em que ordem o público vai vê-las. Nesta aula o aluno faz exatamente isso com as próprias imagens. Ele vai abrir o histórico de conversas do ChatGPT, revisitar tudo o que criou no mês, baixar as imagens favoritas e montar uma lista organizada.

Além de escolher e ordenar, cada imagem precisa de dois textos: um título curto e uma legenda. O título é o nome da arte, como o nome de um quadro num museu. A legenda explica de onde veio a ideia, qual estilo foi usado ou qual prompt gerou aquela imagem. Esses textos dão profissionalismo à galeria e ajudam quem vê a entender o trabalho. Aqui o ChatGPT volta a ser útil não para desenhar, mas para ajudar a escrever: o aluno pode pedir sugestões de títulos criativos.

Ao final da aula cada aluno terá uma galeria estruturada — uma sequência de imagens escolhidas, ordenadas, com título e legenda — pronta para receber os ajustes finais e ser apresentada na aula 8. Esta aula não introduz uma ferramenta nova de desenho; ela ensina o aluno a pensar como curador e a cuidar do próprio acervo, uma habilidade que vale para qualquer projeto criativo.`,
  materiais: [
    `Computadores com acesso à internet e conta no ChatGPT (versão com DALL-E habilitado) para cada aluno`,
    `Projetor ou TV ligado ao computador do professor para demonstrações`,
    `Pasta criada no computador de cada aluno para guardar as imagens baixadas (ex.: "Galeria_NomeDoAluno")`,
    `Imagens geradas pelos alunos nas aulas anteriores do mês (já no histórico do ChatGPT)`,
    `Arquivo de exemplo: uma galeria-modelo com 5 imagens já tituladas e legendadas, feita pelo professor`,
    `Folha impressa ou documento digital com a "ficha de cada arte" (campos: título, ordem, legenda)`,
    `Editor de texto simples (Bloco de Notas, Google Docs ou Word) para escrever os títulos e legendas`,
  ],
  conceitosChave: [
    `Curadoria — o trabalho de escolher quais imagens entram na galeria e organizá-las numa boa ordem.`,
    `Galeria — coleção de imagens reunidas e exibidas juntas, como uma exposição de arte.`,
    `Título — o nome curto dado a cada imagem, igual ao nome de um quadro num museu.`,
    `Legenda — texto curto que explica a imagem: de onde veio a ideia, o estilo ou o prompt usado.`,
    `Ordem de exibição — a sequência em que as imagens aparecem, pensada para prender a atenção de quem vê.`,
    `Histórico — a lista de conversas antigas do ChatGPT, onde ficam guardadas as imagens já criadas.`,
    `Acervo — o conjunto de todas as artes que o aluno produziu e pode reaproveitar.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula ninguém gera imagens novas — o foco é organizar o que já existe. Antes da aula, abra o ChatGPT (chat.openai.com ou chatgpt.com), faça login e clique numa conversa antiga na barra lateral esquerda para confirmar que o histórico dos alunos está acessível. Saber baixar uma imagem é o ponto central: passe o mouse sobre a imagem gerada e clique no ícone de download (uma seta para baixo), ou clique com o botão direito e escolha "Salvar imagem como". Tenha a galeria-modelo aberta para mostrar onde a aula quer chegar. Lembre que esta turma é de Ano 2: eles já dominam o básico do ChatGPT, então o desafio aqui é de organização e curadoria, não de tecnologia.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra o ChatGPT e role a barra lateral esquerda para reencontrar as conversas do mês. Faça a pergunta-chave: "De tudo o que você criou, quais são as suas 5 imagens favoritas?" Deixe que comentem em voz alta. Projete a galeria-modelo e mostre como cada arte tem título e legenda.

Conteúdo novo guiado (15 min): no projetor, explique os três passos da curadoria. Primeiro, escolher: abra uma conversa antiga, passe o mouse sobre uma imagem e clique no ícone de download para salvá-la na pasta "Galeria_NomeDoAluno". Segundo, ordenar: explique que a ordem conta uma história — pode ir do mais simples ao mais impressionante, ou agrupar por estilo. Terceiro, nomear: mostre como pedir ajuda ao ChatGPT digitando algo como "Me dê 5 sugestões de títulos curtos e criativos para uma imagem de um castelo flutuante em estilo cartoon". Cole o título escolhido na ficha de cada arte.

Mão na massa (25 min): cada aluno baixa de 5 a 8 imagens favoritas para a pasta, numera a ordem de cada uma e escreve título e legenda no documento de texto. Circule pela sala. Ajude quem não encontra as imagens antigas (use a busca no topo da barra lateral) e quem trava na escrita das legendas.

Desafio + compartilhar (10 min): cada aluno mostra ao colega do lado a primeira imagem da galeria e lê o título e a legenda em voz alta. Pergunte: "Essa é a melhor imagem para abrir a galeria?"

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do museu: "Imagina que você é o dono de uma galeria de arte. Você não pendura todos os seus desenhos na parede — você escolhe os melhores e decide em que ordem as pessoas vão ver." Para o título, diga: "É o nome da obra, igual aos quadros famosos têm nome." Para a legenda, diga: "É a plaquinha do lado do quadro que conta a história dele." Reforce que ordenar é como montar a playlist de músicas: a primeira tem que chamar atenção e a última deixa boa impressão.

## Erros comuns e como ajudar

O erro mais comum é o aluno querer colocar tudo na galeria. Lembre que curadoria é escolher — peça que fique com as 5 a 8 melhores, não com 20. Outro erro é não conseguir reencontrar as imagens antigas: ensine a usar a caixa de busca no topo da barra lateral esquerda, digitando uma palavra do prompt usado. Muitos alunos baixam as imagens mas esquecem de renomear os arquivos, que ficam com nomes confusos; sugira renomear cada arquivo com o número da ordem (01, 02, 03). Nas legendas, alguns escrevem só "uma imagem legal" — incentive a contar o estilo e a ideia. Por fim, se o aluno copiar o título do ChatGPT sem ler, lembre que ele é o curador e tem a palavra final: a IA sugere, mas quem decide é ele.`,
  exercicios: [
    {
      titulo: `Caça ao tesouro no histórico`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno está logado no ChatGPT e consegue ver a barra lateral esquerda com as conversas. Mostre a caixa de busca no topo da lista de conversas. O objetivo é treinar a navegação no histórico antes de começar a curadoria de verdade.`,
      atividade: `Abra o ChatGPT, use a barra lateral esquerda (e a busca, se precisar) e reencontre 3 imagens que você criou nas semanas anteriores. Para cada uma, passe o mouse por cima e clique no ícone de download para salvá-la na sua pasta "Galeria_NomeDoAluno".`,
      gabarito: `O aluno deve terminar com 3 arquivos de imagem salvos na pasta. Sucesso é demonstrado quando ele encontra conversas antigas, identifica a imagem, usa o ícone de download (seta para baixo) ou o botão direito + "Salvar imagem como" e confirma que os arquivos aparecem na pasta do computador.`,
    },
    {
      titulo: `O nome da obra`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como pedir títulos ao ChatGPT. Reforce que o aluno é o curador: a IA dá opções, mas a escolha final é dele. Peça títulos curtos (no máximo 4 palavras) para que caibam bem na galeria.`,
      atividade: `Escolha uma das suas imagens favoritas. Peça ao ChatGPT: "Me dê 5 sugestões de títulos curtos e criativos para esta imagem" e descreva a imagem. Leia as 5 opções, escolha 1 e, se quiser, mude uma palavra para deixar com a sua cara.`,
      gabarito: `O aluno apresenta um título final de até 4 palavras para a imagem escolhida. Espera-se que ele tenha gerado as 5 opções, feito uma escolha consciente e, idealmente, personalizado o título. Exemplo aceitável: para um castelo flutuante, títulos como "Castelo nas Nuvens" ou "Fortaleza Voadora" são válidos.`,
    },
    {
      titulo: `Ordem que conta história`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Explique que não existe uma ordem certa única, mas que boas galerias costumam abrir forte e fechar forte. Circule ouvindo os argumentos das duplas e provoque com perguntas como "por que essa vem antes daquela?".`,
      atividade: `Em dupla, juntem de 5 a 6 imagens de um dos integrantes. Decidam juntos a ordem de exibição: qual imagem abre a galeria, quais ficam no meio e qual fecha. Anotem o número da ordem (01, 02, 03...) em cada imagem e escrevam em uma frase por que escolheram essa ordem.`,
      gabarito: `A dupla entrega uma sequência numerada de 5 a 6 imagens e uma frase justificando a ordem. Um bom resultado mostra um critério claro: por estilo, por tema, do mais simples ao mais impressionante, ou abrindo e fechando com as imagens mais fortes. A justificativa não pode ser vazia — deve citar o critério usado.`,
    },
    {
      titulo: `Escrevendo as legendas`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre uma legenda-modelo no projetor antes de começar. Uma boa legenda tem 1 a 2 frases e responde: o que é a imagem, qual estilo e de onde veio a ideia. Ajude quem só escreve "imagem legal" a desenvolver a ideia com perguntas.`,
      atividade: `Para cada uma das suas imagens já escolhidas e ordenadas, escreva no documento de texto uma legenda de 1 a 2 frases. Na legenda, diga o que a imagem mostra, qual estilo você usou (ex.: cartoon, realista, pixel art) e uma curiosidade sobre como teve a ideia.`,
      gabarito: `O aluno entrega uma legenda para cada imagem da galeria. Cada legenda deve ter de 1 a 2 frases e mencionar pelo menos o conteúdo e o estilo. Exemplo aceitável: "Personagem guerreira em estilo cartoon. A ideia surgiu quando pensei em uma heroína para um jogo de aventura na floresta." Legendas de uma palavra ou genéricas não atingem o objetivo.`,
    },
    {
      titulo: `Minha galeria, minha mostra`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Cada aluno apresenta a estrutura da galeria — não precisa estar perfeita, é um ensaio para a aula 8. Garanta que todos falem e incentive elogios específicos entre os colegas. Anote quem ainda precisa terminar legendas ou ordem.`,
      atividade: `Apresente para a turma a estrutura da sua galeria: diga quantas imagens ela tem, leia o título e a legenda da imagem que abre e da que fecha, e explique em uma frase por que escolheu essa ordem. Depois, ouça os colegas e diga um elogio específico para a galeria de pelo menos um deles.`,
      gabarito: `Cada aluno demonstra ter uma galeria estruturada: número de imagens definido, imagens ordenadas, e título e legenda prontos pelo menos para a primeira e a última. O sucesso aparece quando o aluno consegue explicar sua escolha de ordem e oferecer um elogio concreto (ex.: "gostei de como você usou só pixel art, ficou com identidade"), e não um elogio vago como "ficou legal".`,
    },
  ],
};
