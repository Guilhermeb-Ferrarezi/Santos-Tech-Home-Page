import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Claude leitor: arquivos e PDFs",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a anexar arquivos e PDFs no Claude para que ele leia, resuma e responda perguntas sobre o conteúdo, citando a parte exata que se quer entender.`,
  descricao: `Até agora o aluno conversou com o Claude digitando perguntas e pedindo resumos de textos colados na conversa. Mas o Claude consegue muito mais: ele pode ler um arquivo inteiro que você anexa, como um PDF, um documento do Word ou um texto simples. Em vez de copiar e colar um texto enorme, basta enviar o arquivo e pedir o que você precisa. Isso é útil para estudar uma apostila, entender as regras de um jogo, revisar um trabalho da escola ou descobrir o que diz um documento longo sem precisar ler tudo de uma vez.

Nesta aula o aluno descobre o botão de anexar (o ícone de clipe de papel), aprende a enviar um PDF e a fazer três coisas com ele: pedir um resumo, fazer perguntas sobre o conteúdo e pedir para o Claude explicar uma parte específica. O segredo de uma boa resposta está em citar exatamente o trecho ou a página que se quer entender. Quando o aluno escreve algo como "explique o parágrafo que fala sobre fotossíntese" ou "resuma a página 2", o Claude responde com muito mais precisão do que diante de um pedido vago como "fala sobre isso aí".

Junto com o poder vem o cuidado. O Claude lê o que recebe, mas pode errar quando o documento é muito grande, está mal digitalizado ou tem imagens em vez de texto de verdade. Por isso o aluno aprende a conferir as respostas com o próprio documento aberto ao lado, sem aceitar tudo cegamente. Também trabalhamos a responsabilidade ao usar material de terceiros: não enviar documentos com dados pessoais sensíveis, não copiar o resumo como se fosse texto próprio em um trabalho e sempre citar de onde veio a informação.

Esta é a terceira aula do mês de Claude. O aluno já fez a primeira conversa (Aula 1) e já sabe escrever prompts campeões para resumir e escrever (Aula 2). Agora ele transforma o Claude em um leitor: dá a ele um arquivo e extrai dali resumos, respostas e explicações. Na próxima aula o Claude vai além do texto e passa a observar imagens e planilhas.`,
  materiais: [
    `Computadores com acesso à internet e ao Claude aberto no navegador (claude.ai) ou no aplicativo de desktop`,
    `Conta no Claude já com login feito para cada aluno antes do início da aula`,
    `Projetor ou tela compartilhada para o professor demonstrar onde clicar para anexar um arquivo`,
    `Arquivo PDF de exemplo curto (2 a 4 páginas) sobre um tema da idade, por exemplo "Regras do campeonato de games da escola" ou um artigo simples sobre animais`,
    `Um segundo arquivo de exemplo em formato de texto (.txt) ou Word (.docx) para mostrar que o Claude lê vários formatos`,
    `Lista impressa ou no projetor com três pedidos prontos: "resuma este arquivo", "explique a parte sobre...", "o que diz a página..."`,
    `Caderno ou documento para o aluno anotar as respostas e comparar com o documento original`,
  ],
  conceitosChave: [
    `Anexar — enviar um arquivo do computador para dentro da conversa, clicando no ícone de clipe de papel para o Claude poder ler o conteúdo.`,
    `PDF — formato de arquivo muito usado para documentos, apostilas e provas; mantém o texto e o visual organizados em páginas.`,
    `Resumo — versão curta de um texto longo, em que o Claude diz as ideias principais em poucas frases.`,
    `Citar o trecho — apontar no pedido a parte exata que você quer entender, como "a página 2" ou "o parágrafo sobre alimentação", para a resposta ser mais precisa.`,
    `Limite do arquivo — quantidade máxima de páginas ou tamanho que o Claude consegue ler de uma vez; arquivos muito grandes podem não ser lidos por completo.`,
    `Material de terceiros — documento que não é seu, feito por outra pessoa; deve ser usado com respeito, sem copiar como próprio e citando a fonte.`,
    `Conferir a resposta — comparar o que o Claude disse com o documento original aberto ao lado, para ter certeza de que ele não inventou nem confundiu nada.`,
  ],
  treinamento: `## O que o professor precisa saber

No Claude, o botão para enviar arquivos é o ícone de clipe de papel (um "+" ou um clipe, dependendo da versão), que fica na barra de digitação, à esquerda do espaço onde você escreve a mensagem, na parte de baixo da tela. Ao clicar nele, abre a janela do computador para escolher o arquivo; também é possível arrastar o arquivo direto para dentro da conversa. O Claude lê PDF, texto (.txt), Word (.docx) e outros formatos comuns. Depois de anexado, aparece um pequeno cartão com o nome do arquivo acima da caixa de texto; só então você escreve o pedido e aperta Enter. Importante: anexar o arquivo sozinho não faz nada, é preciso escrever o que você quer que ele faça com aquele arquivo. Há um limite de tamanho e de páginas; se o PDF for muito grande ou for só uma imagem escaneada sem texto, o Claude pode não ler tudo. Teste o seu PDF de exemplo antes da aula.

## Passo a passo da aula

Aquecimento (10 min): Retome a Aula 2. Pergunte: "Quem lembra como pedir um bom resumo para o Claude?". Mostre no projetor um texto longo e diga: "Imaginem ter que copiar e colar isso tudo. E se a gente pudesse só mandar o arquivo?". Apresente o objetivo do dia: fazer o Claude ler um documento que a gente anexa.

Conteúdo novo guiado (15 min): No projetor, abra uma nova conversa no Claude. Clique no ícone de clipe de papel na barra de baixo, escolha o PDF de exemplo e mostre o cartão com o nome do arquivo aparecendo. Digite o pedido "Resuma este arquivo em 5 frases" e envie. Leia a resposta com a turma. Em seguida, faça uma pergunta sobre o conteúdo: "Quantas equipes podem participar do campeonato?". Por fim, mostre como citar o trecho: "Explique com minhas palavras a parte que fala sobre as regras de pontuação". Destaque a diferença entre o pedido vago e o pedido que cita a parte exata.

Mão na massa (25 min): Cada aluno anexa o PDF de exemplo na própria conta e faz, na ordem, três pedidos: 1) um resumo; 2) uma pergunta sobre um detalhe do conteúdo; 3) um pedido que cite uma parte específica (página ou assunto). O aluno anota a resposta e confere se ela bate com o documento. Circule pela sala ajudando quem não acha o botão de anexar.

Desafio e compartilhar (10 min): Peça que cada aluno encontre uma informação que o Claude resumiu errado ou deixou de fora e mostre ao colega ao lado. Reúna a turma e pergunte: "O Claude acertou tudo? Como vocês conferiram?".

## Como explicar de forma clara

Use a imagem de "dar um livro para um amigo ler". Anexar é entregar o livro; o pedido é dizer o que você quer que o amigo faça com ele: "me conta o resumo", "procura naquela página", "explica esse pedaço". Sem o pedido, o amigo fica só segurando o livro. Reforce que citar a parte exata é como apontar com o dedo na página: quanto mais preciso o aluno for ("a página 2", "o parágrafo sobre comida"), melhor a resposta. Para o cuidado, diga que o Claude é um ajudante muito esperto, mas que às vezes "lê rápido demais" e troca um detalhe, então a gente sempre confere olhando o documento de verdade.

## Erros comuns e como ajudar

O erro mais comum é anexar o arquivo e não escrever nada: lembre que é preciso digitar o pedido depois de anexar. Outro é não achar o clipe de papel; aponte que ele fica na barra de baixo, perto de onde se digita. Alguns alunos sobem o arquivo errado: peça que confiram o nome no cartão antes de enviar. Há quem faça pedidos vagos ("fala disso aí") e receba respostas genéricas; incentive a citar a página ou o assunto. Por fim, alguns aceitam a resposta sem conferir: reforce sempre o hábito de comparar com o documento original, principalmente quando o PDF é grande ou escaneado.`,
  exercicios: [
    {
      titulo: `Meu primeiro anexo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o PDF de exemplo salvo no computador. Demonstre uma vez no projetor: clipe de papel, escolher o arquivo, esperar o cartão com o nome aparecer, escrever o pedido. Circule ajudando quem não encontra o botão de anexar na barra de baixo.`,
      atividade: `Abra uma nova conversa no Claude, clique no ícone de clipe de papel, anexe o PDF de exemplo e, depois que o nome do arquivo aparecer, escreva o pedido "Resuma este arquivo em 5 frases". Leia a resposta e anote as duas ideias principais no caderno.`,
      gabarito: `O aluno deve conseguir anexar o arquivo (o cartão com o nome do PDF aparece acima da caixa de texto) e receber um resumo. Considere correto se ele anexou o arquivo, escreveu o pedido depois de anexar e copiou no caderno pelo menos duas ideias que realmente estão no documento. Erro típico a corrigir: enviar o arquivo sem escrever o pedido.`,
    },
    {
      titulo: `Caça à informação`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Prepare três perguntas cujas respostas estão no PDF de exemplo (por exemplo, número de equipes, data do evento, premiação). O aluno deve fazer as perguntas ao Claude com o arquivo já anexado e depois conferir cada resposta abrindo o próprio PDF ao lado.`,
      atividade: `Com o PDF de exemplo anexado na conversa, faça ao Claude estas três perguntas, uma de cada vez: 1) Quantas equipes podem participar? 2) Qual é a data do evento? 3) Qual é a premiação? Depois, abra o PDF e confira se cada resposta está certa, marcando "confere" ou "não confere".`,
      gabarito: `As respostas devem bater com o que está escrito no PDF de exemplo usado pela turma. O ponto principal do exercício é o aluno CONFERIR no documento, então considere correto quem fez as três perguntas e comparou cada resposta com o PDF original, marcando se confere ou não. Se o Claude errar algum detalhe, o aluno deve identificar o erro ao conferir.`,
    },
    {
      titulo: `Aponte com o dedo`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. O objetivo é mostrar que citar a parte exata melhora a resposta. Cada dupla faz dois pedidos sobre o mesmo PDF: um vago e um que cita a parte específica, e compara as duas respostas. Oriente a usarem números de página ou nomes de seções.`,
      atividade: `Em dupla, com o PDF anexado, façam dois pedidos e comparem: primeiro um pedido vago, como "fala sobre esse arquivo"; depois um pedido que cita a parte exata, como "explique com suas palavras o parágrafo que fala sobre as regras". Escrevam qual das duas respostas foi mais útil e por quê.`,
      gabarito: `Espera-se que a dupla perceba que o pedido que cita a parte exata gera uma resposta mais focada e útil, enquanto o pedido vago gera uma resposta genérica. Considere correto se eles fizeram os dois tipos de pedido, compararam e explicaram (com suas palavras) que citar a página ou o trecho deixa a resposta mais precisa.`,
    },
    {
      titulo: `Pode confiar no Claude?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em círculo. Conduza a conversa pedindo justificativas e exemplos reais que apareceram na mão na massa. O objetivo é fixar os cuidados: conferir respostas, respeitar material de terceiros e não copiar resumos como se fossem texto próprio.`,
      atividade: `Discutam em grupo: o Claude pode errar ao ler um arquivo? Em que situações isso acontece mais? É certo enviar qualquer documento, mesmo com dados pessoais de outras pessoas? E posso entregar o resumo do Claude como se fosse meu trabalho? Cada aluno dá um exemplo do dia a dia.`,
      gabarito: `Pontos esperados: sim, o Claude pode errar, principalmente com arquivos muito grandes, escaneados ou só com imagens; por isso devemos sempre conferir no documento original. Não se deve enviar documentos com dados pessoais sensíveis de terceiros. Não se deve copiar o resumo como trabalho próprio; o certo é entender, escrever com as próprias palavras e citar a fonte. Aceite qualquer exemplo coerente com esses cuidados.`,
    },
    {
      titulo: `Estudo-relâmpago de um documento`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Cada aluno escolhe um dos arquivos de exemplo (PDF, texto ou Word) e produz uma pequena ficha de estudo usando o Claude como leitor. É a síntese da aula: anexar, resumir, perguntar, citar a parte e conferir. Ao final, peça que mostrem a ficha ao colega ao lado.`,
      atividade: `Escolha um arquivo de exemplo, anexe no Claude e monte uma ficha de estudo no caderno com quatro itens: 1) um resumo em 3 frases; 2) duas perguntas que você fez e as respostas; 3) a explicação de uma parte específica que você citou (diga qual parte); 4) uma observação dizendo se conferiu as respostas no documento e se achou algum erro.`,
      gabarito: `A ficha deve conter os quatro itens: um resumo curto e fiel ao documento; duas perguntas com respostas coerentes com o conteúdo; a explicação de uma parte que o aluno citou de forma específica (página ou assunto); e a observação de conferência indicando se comparou com o original e se encontrou erro. Considere completo se os quatro itens estiverem presentes, o conteúdo bater com o arquivo escolhido e houver evidência de que o aluno conferiu a resposta.`,
    },
  ],
};
