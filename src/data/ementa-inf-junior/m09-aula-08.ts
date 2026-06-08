import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Painel Pronto e Apresentação!",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança dá os últimos retoques de cor, título e clareza no seu painel com gráfico, mostra o painel pronto para a turma, conta o que descobriu nos números e celebra o trabalho concluído do mês de Gráficos.`,
  descricao: `Esta é a última aula do mês de Gráficos e o grande dia da turma. Durante quatro semanas cada criança aprendeu a transformar números em desenho: fez o primeiro gráfico, montou as torres do gráfico de barras, repartiu as fatias do gráfico de pizza, pintou com cores e títulos divertidos, deixou o gráfico fácil de entender e, na aula passada, começou a montar o seu painel juntando tudo numa folha só. Hoje esse painel ganha os toques finais e, principalmente, ganha plateia.

Antes de apresentar, cada criança faz uma checagem rápida do painel: o título está escrito e dá para ler? As cores estão bonitas e diferentes umas das outras? O gráfico tem um nome em cima? Dá para olhar e entender na hora o que ele mostra? São ajustes pequenos e rápidos, porque o trabalho pesado já foi feito nas semanas anteriores. O foco do dia não é construir do zero, e sim deixar tudo claro e caprichado para mostrar com orgulho.

Depois vem o coração da aula: a apresentação. Cada aluno vem até a frente, abre o seu painel no projetor e conta, com as próprias palavras, o que descobriu nos números. Não é uma prova de Excel ou de Google Planilhas: é um momento de contar uma historinha. "Meu painel mostra as frutas que a turma mais gosta; a barra da banana é a mais alta, então a banana ganhou!". Para crianças de 5 a 9 anos, ler um gráfico em voz alta e explicar para os amigos é uma conquista enorme e merece muita comemoração.

O papel do professor hoje é mais de apresentador de festa e torcedor do que de instrutor. Você prepara o palco, ajuda nos últimos ajustes, chama cada criança pelo nome, fica por perto para abrir o arquivo e puxa os aplausos no final de cada apresentação. As crianças mais tímidas podem apresentar em dupla, falar só uma frase ou apontar a barra mais alta enquanto você narra junto. Ao fim, a turma fecha o mês inteiro com a sensação de conquista: aprenderam que números viram desenho, que o desenho conta uma história e que essa história pode ser mostrada para outras pessoas.`,
  materiais: [
    `Computadores ligados, com o Excel ou o Google Planilhas já aberto e o painel de cada criança localizado e pronto para abrir (um arquivo por aluno).`,
    `Projetor ou TV grande conectado ao computador da apresentação, testado antes da aula, para a turma toda enxergar bem o painel.`,
    `Um painel modelo do professor, simples e colorido (uma tabelinha com o gráfico ao lado, com título e cores caprichadas), pronto para demonstrar a checagem e a apresentação.`,
    `Uma "lista de conferência" impressa e ilustrada, com 4 perguntas: tem título? tem cores diferentes? o gráfico tem nome? dá para entender?`,
    `Cadeiras ou um tapete organizados em formato de plateia, virados para a tela, para a turma assistir confortável.`,
    `Medalhas de papel, adesivos ou certificados de "Mestre dos Gráficos" para entregar a cada criança no final.`,
    `Lista com o nome de todos os alunos e a ordem de apresentação, para ninguém ficar de fora e o professor chamar um a um.`,
  ],
  conceitosChave: [
    `Painel — uma folha que junta os números (a tabelinha) e o gráfico no mesmo lugar, para mostrar tudo de uma vez.`,
    `Toque final — os últimos ajustes que deixam o painel mais bonito e mais fácil de entender, como arrumar a cor ou o título.`,
    `Título — o nome escrito em cima que conta, em poucas palavras, sobre o que é o painel ou o gráfico.`,
    `Clareza — quando dá para olhar o gráfico e entender na hora o que ele mostra, sem precisar de explicação.`,
    `Apresentar — ficar na frente e mostrar para os colegas o painel que você fez, contando sobre ele.`,
    `Descoberta — a coisa que os números contam, como qual barra é a mais alta ou qual fatia é a maior.`,
    `Plateia — o grupo de colegas que assistem com carinho, prestam atenção e batem palmas no final.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina nenhum gráfico novo: o mês inteiro de criação já passou. A aula tem duas partes. Primeiro, um retoque rápido no painel de cada criança (título, cores e clareza). Depois, a CELEBRAÇÃO: cada um mostra o painel pronto e conta o que descobriu nos números. O segredo do dia é o clima acolhedor e sem cobrança. Ninguém é avaliado por estar certo; todos são aplaudidos pela coragem de mostrar o trabalho.

Tecnicamente, você só precisa de três coisas. Primeira: ajustar o título do gráfico. No Excel, clique uma vez no gráfico, depois clique no texto "Título do Gráfico" em cima dele e digite o nome certo. No Google Planilhas, dê dois cliques no gráfico para abrir o "Editor de gráficos" à direita, vá na aba "Personalizar", abra "Título do gráfico" e digite o texto. Segunda: trocar a cor de uma barra ou fatia. No Excel, clique no gráfico, clique uma vez na barra/fatia (seleciona todas) ou clique de novo (seleciona só uma) e use o balde de tinta "Preenchimento de Forma" na aba "Formatar". No Google Planilhas, no "Editor de gráficos", aba "Personalizar", abra "Série" e escolha a cor. Terceira: ligar o modo de apresentação para mostrar grande. Em qualquer um dos dois, basta abrir o arquivo no projetor e dar zoom (Ctrl e o sinal de mais juntos) para a turma enxergar bem. Teste tudo antes da aula com o seu painel modelo.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Excel / Google Planilhas)

1. Aquecimento e revisão (10 min). Reúna a turma na plateia. Relembre o mês: "O que a gente aprendeu a fazer com os números?". Deixe falarem sobre barras, pizza, cores e título. Mostre o seu painel modelo no projetor e diga: "Hoje a gente deixa o nosso painel lindo e mostra para os amigos."

2. Conteúdo guiado / demonstração (15 min). Use o painel modelo e faça a "lista de conferência" na frente da turma. Pergunta 1, tem título? Se faltar, no Excel clique no texto "Título do Gráfico" e digite; no Google Planilhas dê dois cliques, vá em "Personalizar" e "Título do gráfico". Pergunta 2, as cores estão diferentes? Mostre como trocar a cor de uma barra com o balde "Preenchimento de Forma" (Excel) ou em "Série" no Editor de gráficos (Google Planilhas). Pergunta 3, o gráfico tem nome? Pergunta 4, dá para entender? Demonstre apontando a barra mais alta e contando a descoberta.

3. Mão na massa / os toques finais (25 min). Entregue a lista de conferência ilustrada. Cada criança abre o seu painel e passa pelas 4 perguntas, fazendo só os ajustes que faltam: arrumar o título, trocar uma cor parecida, deixar claro. Circule pela sala ajudando a clicar nos lugares certos. Quem terminar cedo treina apontar no painel a barra ou fatia mais alta e ensaia a frase que vai falar.

4. Desafio e compartilhar (10 min). Chame as crianças uma a uma pela lista. Ajude cada uma a abrir o painel no projetor com zoom. Deixe contar com as próprias palavras o que descobriu nos números. Puxe os aplausos no fim de cada uma. Entregue a medalha de "Mestre dos Gráficos" e termine com uma grande salva de palmas fechando o mês.

## Como explicar para crianças de 5 a 9 anos

Use a analogia da geladeira: "O painel é a folha que a gente prende na geladeira para todo mundo ver os números e o desenho juntos." Para o título, diga: "É o nome do desenho, igual ao nome num livro." Para as cores, brinque: "Cada barra com a sua cor, para ninguém confundir." Para a apresentação, diga: "Você vira o contador de histórias dos números: aponta a barra mais alta e conta quem ganhou." Fale frases curtas, mostre você primeiro e comemore alto a cada criança.

## Erros comuns e como ajudar

- Gráfico sem título ou com o nome de fábrica "Título do Gráfico": peça para clicar no texto e digitar um nome de verdade; se não souber escrever, ajude a digitar a palavra que a criança falar.
- Duas barras ou fatias com cores quase iguais: mostre como abrir o balde de cor e escolher uma cor bem diferente, para ficar fácil de distinguir.
- Querer mexer demais e desmontar o painel pronto: lembre que hoje é só dar toques pequenos; o painel já está bom, é só caprichar.
- Timidez na hora de apresentar: nunca force. Ofereça apresentar em dupla, sentado, ou só apontar a barra mais alta enquanto você narra.
- Painel não abre ou o arquivo some: tenha os arquivos localizados antes; se algo falhar, a criança conta a descoberta dela mesmo sem a tela. O importante é o momento dela.`,
  exercicios: [
    {
      titulo: `A lista de conferência do painel`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Junte a turma na plateia, longe das telas, com o seu painel modelo no projetor. Apresente a "lista de conferência" ilustrada com as 4 perguntas: tem título? tem cores diferentes? o gráfico tem nome? dá para entender? Faça as perguntas em voz alta apontando o painel modelo e deixe a turma responder junto, gritando "tem!" ou "não tem!". Explique que daqui a pouco cada um vai fazer essa mesma checagem no próprio painel para deixá-lo lindo.`,
      atividade: `1. Olhe o painel do professor na tela.
2. Responda junto com a turma as 4 perguntas da lista: tem título? tem cores diferentes? o gráfico tem nome? dá para entender?
3. Aponte na tela onde está o título do gráfico.
4. Diga: "Vou fazer essa checagem no meu painel também!"`,
      gabarito: `Acertou quem participa respondendo as perguntas da lista e consegue apontar pelo menos o título no painel modelo. Exemplo de sucesso: a criança responde "tem título!" e mostra com o dedo o nome em cima do gráfico. Qualquer participação na roda conta. O objetivo é que a turma entenda as 4 coisas que deixam um painel claro e bonito antes de mexer no próprio.`,
    },
    {
      titulo: `Arrumando o meu título`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada criança abra o seu painel. Foque numa única tarefa: o título do gráfico. No Excel, mostre como clicar uma vez no gráfico e depois clicar no texto "Título do Gráfico" em cima dele para apagar e digitar o nome certo. No Google Planilhas, mostre o duplo clique no gráfico para abrir o "Editor de gráficos", a aba "Personalizar" e a opção "Título do gráfico" para digitar. Circule ajudando a digitar a palavra que a criança falar, já que muitas ainda escrevem com dificuldade.`,
      atividade: `1. Abra o seu painel no computador.
2. Clique no gráfico e ache o lugar do título em cima dele.
3. Apague o nome velho e digite um nome de verdade para o seu gráfico (ex.: "Frutas da Turma").
4. Olhe se o título agora conta sobre o que é o seu gráfico.`,
      gabarito: `Acertou quem coloca no gráfico um título que faça sentido, com alguma ajuda para digitar. Exemplo de sucesso: o gráfico que dizia "Título do Gráfico" agora diz "Frutas da Turma" ou "Cores Favoritas". Não importa erro de escrita; importa que o título conte sobre o tema. O objetivo é o gráfico ter um nome de verdade no lugar do nome de fábrica.`,
    },
    {
      titulo: `Caça às cores parecidas`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Transforme a checagem de cores num jogo de "detetive". Cada criança vira um detetive que procura no próprio painel duas barras ou fatias com cores parecidas demais, que possam se confundir. Quem achar levanta a mão e ganha a missão de trocar uma das cores por uma bem diferente. No Excel, mostre o balde "Preenchimento de Forma" na aba "Formatar" depois de clicar na barra; no Google Planilhas, mostre a opção "Série" na aba "Personalizar" do Editor de gráficos. Comemore cada cor trocada.`,
      atividade: `1. Vire detetive e olhe bem o seu gráfico.
2. Procure duas cores muito parecidas que dá para confundir.
3. Se achar, clique na barra ou fatia e troque por uma cor bem diferente usando o balde de tinta.
4. Confira: agora cada cor está fácil de distinguir?`,
      gabarito: `Acertou quem consegue olhar o gráfico, perceber se há cores muito parecidas e deixar as cores diferentes umas das outras, com ajuda se precisar. Exemplo de sucesso: duas barras quase iguais viram uma azul e uma vermelha, fáceis de separar com o olhar. Se o gráfico já tinha cores bem diferentes, acertou quem confere e diz "as minhas já estão boas". O objetivo é um gráfico com cores que não se confundem.`,
    },
    {
      titulo: `Contando a história do meu painel`,
      tipo: `Desafio`,
      tempo: `18 min`,
      guiaProfessor: `Este é o ponto alto da aula. Chame as crianças uma a uma pela lista, como um apresentador de festa: "Com vocês, o painel da Maria!". Ajude cada uma a abrir o painel no projetor e dar zoom (Ctrl e mais juntos) para a turma ver bem. Deixe a criança contar, com as próprias palavras, o que o painel mostra e qual foi a descoberta (a barra mais alta, a maior fatia). Fique ao lado para apontar junto se travar. As tímidas podem apresentar em dupla ou só apontar a barra mais alta enquanto você narra. Puxe os aplausos e nunca aponte erros.`,
      atividade: `1. Espere o professor chamar o seu nome e vá até a frente.
2. Mostre o seu painel grande na tela.
3. Leia o título e aponte a barra mais alta (ou a maior fatia).
4. Conte para a turma o que você descobriu (ex.: "A banana ganhou!") e receba os aplausos.`,
      gabarito: `Acertou toda criança que vai à frente e mostra o seu painel, em qualquer nível: contando sozinha, em dupla, falando uma frase ou só apontando a barra mais alta. Exemplo de sucesso: a criança lê o título e diz "a banana é a mais alta, então a banana ganhou", recebendo aplausos. Não há resposta errada; o objetivo é a coragem de apresentar e ler o gráfico. Cada participação merece a mesma comemoração.`,
    },
    {
      titulo: `Festa do Mestre dos Gráficos`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma na roda para fechar o mês com chave de ouro. Pergunte a cada criança qual painel do colega ela mais gostou e ajude a turma a elogiar uns aos outros com carinho. Relembre tudo o que aprenderam no mês: números viram desenho, gráfico de barras, gráfico de pizza, cores e títulos, deixar fácil de entender e montar o painel. Entregue a medalha ou o certificado de "Mestre dos Gráficos" para cada um, sem exceção, e termine com uma grande salva de palmas coletiva.`,
      atividade: `1. Sente na roda com os colegas.
2. Quando for a sua vez, diga: "Eu gostei do painel do(a)..." e fale o nome de um colega.
3. Diga uma coisa que você aprendeu neste mês de gráficos.
4. Receba a sua medalha de Mestre dos Gráficos e bata uma palma bem grande para a turma toda.`,
      gabarito: `Acertou quem participa da roda elogiando um colega ou dizendo algo que aprendeu no mês. Exemplos de respostas certas: "Gostei do painel do João", "Aprendi a fazer gráfico de barras", "Aprendi que a banana é a barra mais alta". Qualquer participação, até uma frase curtinha ou um gesto, conta como sucesso. O objetivo é fechar o mês celebrando o crescimento de cada criança com os gráficos.`,
    },
  ],
};
