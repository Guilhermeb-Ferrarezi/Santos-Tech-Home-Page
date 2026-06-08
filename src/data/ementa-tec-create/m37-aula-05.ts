import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Claude lê seus arquivos: contexto que importa",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a anexar arquivos do próprio projeto no Claude (script de Unity, notas de design e imagens de referência) para receber explicações e melhorias baseadas no código real dele, e não em exemplos genéricos.`,
  descricao: `Nesta aula o aluno descobre uma das maiores diferenças entre conversar com a IA sobre nada e conversar com ela sobre o projeto dele de verdade: o contexto. Nas aulas anteriores deste mês os alunos aprenderam a abrir o Claude, a pedir ajuda de verdade, a escrever bons prompts e a refinar a conversa tirando dúvidas. Até agora, porém, eles descreviam o problema com palavras. Hoje eles vão dar um passo enorme: anexar o próprio arquivo para que o Claude leia o código exato que está na máquina deles.

A ideia central é simples. Quando você cola só um pedaço do código ou descreve o problema de memória, o Claude precisa adivinhar muita coisa. Quando você anexa o arquivo inteiro, o Claude vê os nomes reais das variáveis, os métodos, os comentários e a estrutura completa. A resposta deixa de ser um exemplo genérico da internet e passa a falar do seu jogo, com os seus nomes. É a diferença entre perguntar a um amigo como consertar um carro pelo telefone e levar o carro até ele.

Como este é o Ano 4, os alunos já têm scripts de Unity em C# dos projetos da trilha. Eles vão anexar um desses scripts, ou um arquivo de exemplo que o professor preparou, e pedir duas coisas: primeiro, uma explicação clara do que aquele código faz; depois, uma sugestão de melhoria baseada exatamente naquele código. Também vamos experimentar anexar notas de design (um texto curto com a ideia do jogo) e uma imagem de referência, para mostrar que o Claude entende contexto além do código.

O foco do mês é aprender a usar o Claude nos projetos, e esta aula é o momento em que a ferramenta para de ser um chat solto e vira uma parceira que conhece o material do aluno. O professor deve reforçar a regra de ouro: o Claude ajuda a entender e a melhorar, mas o aluno continua dono do projeto, lê a resposta com olhos críticos e decide o que aceitar. Ao final, cada aluno terá feito o Claude ler um arquivo real e terá recebido uma explicação e uma melhoria sob medida para o próprio jogo.`,
  materiais: [
    `Computadores com acesso ao Claude pelo navegador (claude.ai), um por aluno, com login já feito`,
    `Projetor ou TV para o professor demonstrar onde clicar para anexar arquivos em tela grande`,
    `Arquivo de exemplo em C# pronto numa pasta da máquina (por exemplo PlayerMovement.cs) para quem ainda não tiver script próprio à mão`,
    `Acesso aos scripts de Unity dos projetos dos alunos (na pasta Assets do projeto ou numa cópia em uma pasta de fácil acesso)`,
    `Um arquivo de notas de design curto em texto (design.txt) com a ideia de um jogo, para o exercício de contexto`,
    `Uma imagem de referência (referência.png ou .jpg) de cenário ou personagem para anexar como exemplo`,
    `Editor de código aberto (Visual Studio ou VS Code) para o aluno conferir e aplicar as melhorias no Unity`,
  ],
  conceitosChave: [
    `Contexto — todas as informações que a IA tem sobre o seu problema; quanto mais real o contexto, melhor e mais certeira a resposta.`,
    `Anexar arquivo — enviar um arquivo do seu computador para o Claude ler, usando o botão de clipe (anexo) na caixa de mensagem.`,
    `Script — um arquivo de código que controla algo no jogo; em Unity costuma ter a extensão .cs (C sharp).`,
    `Notas de design — um texto curto que descreve a ideia do jogo, as regras e o clima; serve de contexto criativo para a IA.`,
    `Imagem de referência — uma figura que mostra o visual desejado (cenário, personagem, cor); o Claude consegue olhar a imagem e comentar.`,
    `Resposta sob medida — uma explicação ou melhoria que usa os nomes e a estrutura reais do seu arquivo, em vez de um exemplo genérico.`,
    `Revisão crítica — o hábito de ler a sugestão da IA com atenção e decidir o que faz sentido para o seu projeto antes de aceitar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Claude nem programar em C#. Precisa saber uma coisa central: quando o aluno anexa o arquivo do projeto, a IA passa a responder sobre o código real dele, com os nomes verdadeiros das variáveis e métodos. Sem o arquivo, a resposta é um exemplo genérico; com o arquivo, é sob medida. O caminho para anexar é sempre o mesmo: na caixa de mensagem do Claude, há um ícone de clipe (ou um botão de mais). Clicando nele, abre o explorador de arquivos do computador; o aluno escolhe o arquivo, ele aparece como um cartãozinho acima da caixa, e aí o aluno escreve o pedido e envia. O Claude lê arquivos de texto e de código (.cs, .txt, .md) e também imagens (.png, .jpg). Antes da aula, abra o Claude e anexe o arquivo de exemplo uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Retome a Aula 4: aprendemos a refinar a conversa com palavras. Pergunte: quando você descreve um bug de memória, o Claude às vezes erra o nome da variável, certo? Por quê? Conduza até a resposta: porque ele não está vendo o seu código. Anuncie que hoje vamos deixar o Claude ler o arquivo de verdade.

15 min, conteúdo novo guiado. Em tela grande, abra o Claude. Mostre o ícone de clipe na caixa de mensagem, clique nele e escolha o arquivo de exemplo PlayerMovement.cs. O cartão do arquivo aparece. Agora escreva e envie o seguinte prompt: Leia o arquivo anexado e me explique, em linguagem simples, o que cada parte deste script faz. Leiam juntos a resposta. Em seguida, no mesmo chat, peça uma melhoria com este prompt: Com base nesse mesmo arquivo, sugira uma melhoria no código e me mostre apenas o trecho alterado, explicando o que mudou e por que. Mostre como o Claude usa os nomes reais do arquivo. Reforce a regra de ouro: a gente lê, entende e decide; não copia de olhos fechados.

25 min, mão na massa. Cada aluno anexa um script do próprio jogo (ou o arquivo de exemplo) e faz os dois pedidos: explicação e melhoria. Circule pela sala. Depois, peça que anexem o arquivo de notas de design (design.txt) e perguntem: com base nessas notas, sugira uma ideia que combine com o clima do meu jogo. Por fim, quem quiser anexa a imagem de referência e pede ao Claude para descrever o estilo visual dela.

10 min, desafio e compartilhar. Cada aluno escolhe a melhor sugestão que recebeu e conta para a turma: o que o Claude explicou e qual melhoria ele vai testar no Unity. Faça uma rodada rápida de uma frase por aluno.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do carro: descrever o problema por telefone é difícil, levar o carro até o mecânico é fácil. Anexar o arquivo é levar o carro. Diga: quando o Claude vê o seu script, ele fala dos seus nomes, do seu jogo, e não de um exemplo qualquer da internet. Para notas de design: é como mostrar o roteiro do filme antes de pedir uma ideia de cena. Para a imagem: o Claude tem olhos, ele consegue olhar a figura e comentar a cor e o estilo. Repita sempre a regra de ouro com palavras simples: a IA sugere, você decide; o jogo é seu.

## Erros comuns e como ajudar

O erro mais comum é o aluno colar o texto do código na mensagem em vez de anexar o arquivo; mostre de novo o ícone de clipe. Outro é anexar o arquivo e esquecer de escrever o pedido, mandando só o anexo vazio; lembre que precisa dizer o que quer. Alguns anexam o projeto inteiro ou arquivos enormes; oriente a anexar um script por vez para a resposta ficar focada. Há quem aceite a melhoria sem ler e cole tudo no Unity, quebrando o jogo; reforce a revisão crítica e o teste antes de salvar por cima. Se o Claude disser que não consegue abrir o arquivo, geralmente é um formato estranho; oriente salvar como .cs ou .txt e anexar de novo.`,
  exercicios: [
    {
      titulo: `Levando o carro ao mecânico: anexar e explicar`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno encontre o ícone de clipe na caixa de mensagem e selecione um arquivo .cs. Reforce que, depois de anexar, é preciso escrever o pedido antes de enviar.`,
      atividade: `Abra o Claude. Clique no ícone de clipe e anexe um script de Unity (o seu ou o arquivo de exemplo PlayerMovement.cs). Depois escreva o pedido: Leia o arquivo anexado e me explique, em linguagem simples, o que este script faz. Envie e leia a resposta.`,
      gabarito: `O aluno deve conseguir ver o cartão do arquivo acima da caixa de mensagem e receber uma explicação que cita os nomes reais do código (por exemplo, nomes de variáveis e métodos do arquivo). Caminho correto: ícone de clipe, escolher o arquivo, escrever o pedido, enviar. Se a resposta vier genérica e sem citar nada do arquivo, o anexo não foi enviado ou o aluno colou texto em vez de anexar.`,
    },
    {
      titulo: `Genérico contra sob medida`,
      tipo: `comparação`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que façam o mesmo pedido de duas formas e comparem. Ajude a turma a perceber que a versão com anexo usa os nomes reais do jogo deles.`,
      atividade: `Faça o pedido de explicação primeiro SEM anexar nada, descrevendo o script só com palavras. Depois, num pedido novo, anexe o arquivo e faça a mesma pergunta. Compare as duas respostas e escreva uma frase dizendo qual foi mais útil e por quê.`,
      gabarito: `A resposta com o arquivo anexado é mais útil porque usa os nomes reais das variáveis e métodos e fala do código exato do aluno; a resposta sem anexo é genérica e pode até inventar nomes que não existem no projeto. Frase esperada parecida com: A versão com o arquivo foi melhor porque o Claude falou dos meus nomes de verdade, e não de um exemplo qualquer.`,
    },
    {
      titulo: `Melhoria sob medida no seu script`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente o aluno a pedir apenas o trecho alterado, não o arquivo inteiro. Reforce a revisão crítica: ler, entender e só então testar no Unity. Lembre que o jogo é do aluno.`,
      atividade: `Com o mesmo script anexado, peça uma melhoria com este prompt: Com base nesse arquivo, sugira uma melhoria no código e mostre apenas o trecho alterado, explicando o que mudou e por que. Leia a explicação e diga ao professor se faz sentido para o seu jogo.`,
      gabarito: `O Claude deve devolver um trecho de código C# usando os nomes do arquivo do aluno, mais uma explicação do que mudou e por quê. Exemplo de melhoria válida: transformar um número solto em uma variável pública para ajustar pelo Inspector da Unity, como em public float velocidade = 5f; em vez do número fixo dentro do método. O aluno deve mostrar que leu e entendeu, e identificar se a sugestão cabe no jogo dele antes de aplicar.`,
    },
    {
      titulo: `Contexto criativo: notas de design e imagem`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Mostre que o Claude também lê texto comum (notas de design) e olha imagens. Use o arquivo design.txt e a imagem referência.png preparados. Peça pedidos curtos e claros.`,
      atividade: `Em dupla, anexem o arquivo design.txt com as notas de design de um jogo e peçam: Com base nessas notas, sugira uma ideia de fase que combine com o clima do jogo. Depois anexem a imagem de referência e peçam ao Claude para descrever o estilo visual dela (cores e clima). Anotem a melhor ideia.`,
      gabarito: `Para as notas, o Claude deve sugerir uma ideia coerente com o clima descrito no texto (por exemplo, se o design fala de um jogo de terror numa floresta, uma fase escura com névoa e sons de galhos). Para a imagem, ele deve descrever cores e clima visíveis (por exemplo, tons frios e azulados, clima sombrio). A dupla acerta quando a resposta da IA se liga claramente ao conteúdo do arquivo e da imagem anexados, e não a um tema aleatório.`,
    },
    {
      titulo: `Mini projeto: meu pacote de contexto`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Este exercício junta tudo. Oriente o aluno a usar um único chat, anexando os arquivos um a um e fazendo um pedido por vez. Ao final, peça que aplique e teste a melhoria no Unity antes de salvar por cima. Reforce a revisão crítica.`,
      atividade: `Num único chat do Claude, monte o contexto do seu jogo: anexe um script .cs e peça uma explicação; depois anexe (ou cite) as notas de design e peça uma melhoria que combine com o clima do jogo. Escolha a melhor sugestão, abra o script no editor, aplique a mudança e teste no Unity. Salve o arquivo com seu nome.`,
      gabarito: `O aluno deve terminar com um chat que contém o arquivo anexado, uma explicação sob medida e uma melhoria aplicada e testada no Unity sem quebrar o jogo. Caminho correto: ícone de clipe para cada anexo, um pedido por vez, ler a resposta com olhar crítico, aplicar no editor (Visual Studio ou VS Code), voltar ao Unity e dar Play para testar. Acerta quem mostra que entendeu a melhoria, testou de verdade e decidiu conscientemente mantê-la, lembrando que o projeto é dele.`,
    },
  ],
};
