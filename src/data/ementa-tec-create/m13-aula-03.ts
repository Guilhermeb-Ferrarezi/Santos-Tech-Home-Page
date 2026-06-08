import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Roteiro: a ideia do vídeo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Escrever um mini-roteiro em texto que liga o vídeo ao tema do jogo do aluno, com ideia central, mensagem e a ordem dos acontecimentos em três a cinco momentos.`,
  descricao: `Nas duas primeiras aulas o aluno já gerou seus primeiros clipes no Sora e descobriu como um bom comando produz um vídeo melhor. Só que até agora cada clipe nasceu solto, sem um plano por trás. Nesta aula a turma dá um passo importante: aprende que todo vídeo bom começa no papel, antes de qualquer prompt. Esse plano escrito chama-se roteiro, e é ele que vai guiar todas as cenas das próximas aulas.

O roteiro desta aula é simples e curtinho, mas tem três peças que não podem faltar. A ideia central é a frase que resume o que o vídeo mostra. A mensagem é o que você quer que quem assiste sinta ou entenda no final. E a ordem dos acontecimentos é a sequência de momentos, de três a cinco, que conta a pequena história do começo ao fim. O segredo é que tudo precisa estar amarrado ao tema do jogo que o aluno está criando no curso: se o jogo é uma aventura espacial, o vídeo é sobre aquele universo, não sobre qualquer coisa.

O professor vai mostrar que o ChatGPT é um ótimo parceiro nesse momento. Ele ajuda o aluno a clarear a ideia, a transformar uma frase bagunçada em uma mensagem clara e a quebrar a história em momentos numerados. O aluno conversa com o ChatGPT, mas a decisão final é sempre dele: o roteiro precisa fazer sentido para o jogo dele, e ele é quem manda. O Sora não entra ainda nesta aula; aqui o produto é texto.

Ao final, cada aluno sai com um mini-roteiro escrito e salvo: uma ideia central em uma frase, uma mensagem em uma frase e uma lista de três a cinco momentos em ordem. Esse documento é a planta do vídeo. Nas próximas aulas, cada um desses momentos vai virar uma cena descrita e, depois, um clipe gerado pela IA. Sem esse plano, o aluno fica gerando clipes ao acaso; com ele, o vídeo final tem começo, meio e fim.`,
  materiais: [
    `Computadores (1 por aluno) com navegador e acesso ao ChatGPT (chat.openai.com) já logado na conta da turma`,
    `Conta com Sora disponível (sora.com) apenas para referência das próximas aulas; não será usada para gerar vídeo nesta aula`,
    `Projetor ou TV para o professor mostrar a tela do ChatGPT e os exemplos`,
    `Arquivo de exemplo: um mini-roteiro modelo já pronto (ideia central, mensagem e 4 momentos) para mostrar como fica o resultado`,
    `Documento em branco por aluno (Google Docs, bloco de notas ou folha de papel) para escrever e salvar o roteiro`,
    `Lista impressa do tema do jogo de cada aluno, retomada das aulas do curso, para amarrar o vídeo ao jogo`,
  ],
  conceitosChave: [
    `Roteiro — o plano escrito do vídeo; um texto curto que diz o que vai acontecer antes de gerar qualquer clipe.`,
    `Ideia central — a frase única que resume sobre o que é o vídeo, ligada ao tema do jogo do aluno.`,
    `Mensagem — o que você quer que quem assiste sinta ou entenda quando o vídeo termina.`,
    `Momento — cada acontecimento da história; o roteiro tem de três a cinco momentos em ordem.`,
    `Ordem dos acontecimentos — a sequência do começo, meio e fim; a fila dos momentos que conta a história.`,
    `Tema do jogo — o assunto e o clima do jogo que o aluno cria no curso; tudo no vídeo nasce dele.`,
    `ChatGPT como parceiro de ideias — usar o chat para clarear e organizar o roteiro, mas com a decisão final sempre do aluno.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não vai gerar vídeo. O produto é um texto: um mini-roteiro. A ferramenta principal é o ChatGPT, e ela serve para ajudar o aluno a pensar, não para escrever o roteiro sozinha. Um roteiro, aqui, tem só três partes: ideia central (uma frase), mensagem (uma frase) e ordem dos acontecimentos (de três a cinco momentos numerados). Tudo amarrado ao tema do jogo de cada aluno.

No ChatGPT você acessa chat.openai.com, já logado na conta da turma. A tela tem uma barra lateral à esquerda com as conversas e um botão "New chat" (Nova conversa) no topo. No centro fica a caixa de mensagem com o texto "Message ChatGPT" e o ícone de enviar (uma setinha) à direita. Você digita, aperta Enter ou clica na setinha, e a resposta aparece logo abaixo. Não precisa de mais nada. Antes da aula, abra uma conversa nova e teste o prompt-modelo (abaixo) uma vez, para já saber o que a IA responde.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula 2. Pergunte: "vocês geraram vários clipes; eles contavam uma história juntos?". Mostre no projetor dois clipes soltos e pergunte o que faltava para virar um vídeo de verdade. Apresente a palavra do dia: roteiro. Explique em uma frase: é o plano escrito antes de gerar qualquer vídeo.

2. Conteúdo guiado (15 min): no projetor, abra o arquivo-modelo e leia em voz alta a ideia central, a mensagem e os quatro momentos. Mostre como tudo está ligado ao tema de um jogo. Em seguida abra uma conversa nova no ChatGPT (botão "New chat") e digite, na frente da turma, um prompt-modelo: "Sou aluno e estou criando um jogo sobre [tema do jogo]. Quero um vídeo curto de divulgação. Me ajude a definir, em frases curtas: a ideia central, a mensagem e uma lista de 4 momentos em ordem." Aperte Enter. Leia a resposta e mostre que ela é um ponto de partida, não a resposta final: peça à turma para sugerir uma mudança.

3. Mão na massa (25 min): cada aluno abre uma conversa nova no ChatGPT e escreve seu próprio prompt trocando [tema do jogo] pelo tema do jogo dele. Depois de receber a sugestão, cada um copia para o documento em branco e edita com as próprias palavras: ajusta a ideia central, melhora a mensagem e deixa de três a cinco momentos em ordem que façam sentido para o jogo dele. Circule pela sala perguntando "qual é a ideia central em uma frase?" para quem travar. Cada aluno salva o documento.

4. Desafio e compartilhar (10 min): cada aluno lê para a turma só a sua ideia central e o primeiro momento. Desafio extra: peça que numerem os momentos de novo conferindo se há começo, meio e fim. Garanta que todos salvaram o roteiro, pois ele será usado na aula 4.

## Como explicar de forma clara (linguagem para a idade)

Compare com algo que eles conhecem. O roteiro é como a planta de uma casa: ninguém constrói parede antes de desenhar onde ela vai. A ideia central é o "título" do vídeo em uma frase. A mensagem é o que você quer que o amigo sinta ao ver: empolgação, curiosidade, vontade de jogar. Os momentos são as cenas em fila, como os quadrinhos de uma história. Repita a frase-chave: "primeiro a gente planeja no papel, depois a IA faz o vídeo". Deixe claro que o ChatGPT é um ajudante de ideias, mas o dono do roteiro é o aluno.

## Erros comuns e como ajudar

Copiar a resposta do ChatGPT sem mudar nada: peça que cada aluno reescreva pelo menos a ideia central com as próprias palavras e cheque se combina com o jogo dele. Fazer um roteiro que não tem nada a ver com o jogo: traga de volta a lista de temas e pergunte "como isso conecta com o seu jogo?". Escrever momentos demais ou de menos: lembre o limite de três a cinco e que cada momento é um acontecimento, não um detalhe minúsculo. Confundir ideia central com mensagem: a ideia é o que aparece na tela; a mensagem é o que a pessoa sente depois. Querer já gerar vídeo no Sora: explique que hoje o produto é texto e que o vídeo vem nas próximas aulas, justamente a partir deste roteiro.`,
  exercicios: [
    {
      titulo: `Minha ideia em uma frase`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno abriu uma conversa nova no ChatGPT e trocou [tema do jogo] pelo tema do próprio jogo. O foco é sair com UMA frase de ideia central.`,
      atividade: `Abra uma conversa nova no ChatGPT e peça ajuda para resumir, em uma única frase, a ideia central de um vídeo sobre o seu jogo. Leia as sugestões, escolha uma e reescreva com as suas palavras no documento.`,
      gabarito: `O aluno acerta quando entrega UMA frase clara que diz sobre o que é o vídeo e que se liga ao tema do jogo dele. Não há frase única correta; o professor confere se é uma frase só, se é compreensível e se combina com o jogo. Exemplo: "Um vídeo curto que mostra o herói explorando o planeta gelado do meu jogo".`,
    },
    {
      titulo: `Qual é a mensagem?`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Reforce a diferença entre ideia central (o que aparece) e mensagem (o que a pessoa sente). Peça que escrevam a mensagem em uma frase começando por "Quero que quem assiste...".`,
      atividade: `Olhando a sua ideia central, escreva em uma frase a mensagem do vídeo, começando por "Quero que quem assiste...". Se travar, pergunte ao ChatGPT como transformar a sua ideia em uma mensagem que faça a pessoa sentir algo.`,
      gabarito: `O aluno acerta quando a mensagem descreve um sentimento ou entendimento de quem assiste, e não apenas repete a ideia central. Exemplo certo: "Quero que quem assiste sinta vontade de explorar o planeta e jogar o meu jogo". Errado: repetir "o vídeo mostra o herói no planeta" (isso é ideia central, não mensagem).`,
    },
    {
      titulo: `Os momentos em ordem`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Cada aluno escreve seus 3 a 5 momentos e o colega confere se há começo, meio e fim e se a ordem faz sentido. Lembre o limite de momentos.`,
      atividade: `Em dupla, cada um escreve a lista de 3 a 5 momentos do seu vídeo, numerados em ordem. Depois troquem os documentos: leia os momentos do colega e diga se dá para entender a história do começo ao fim e se algum momento está fora de lugar.`,
      gabarito: `O aluno acerta quando sua lista tem de três a cinco momentos numerados, em ordem, formando uma pequena história com começo, meio e fim ligada ao jogo. A revisão do colega acerta ao apontar se falta um momento, se há momentos demais ou se a ordem está confusa. Exemplo de lista boa: "1. O herói chega ao planeta gelado; 2. Encontra uma porta misteriosa; 3. Abre a porta e vê um tesouro; 4. Pega o tesouro e sorri".`,
    },
    {
      titulo: `Conserta o roteiro confuso`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Mostre no projetor um roteiro-modelo de propósito ruim (momentos fora de ordem, mensagem igual à ideia, sem ligação com jogo nenhum). Conduza a turma a apontar os erros e a sugerir consertos.`,
      atividade: `Olhem juntos o roteiro confuso na tela e apontem os problemas: a ordem dos momentos faz sentido? A mensagem está clara e diferente da ideia central? Tudo se liga a um jogo? Sugiram em voz alta como consertar cada parte.`,
      gabarito: `A turma acerta ao identificar os três tipos de erro plantados: (1) momentos fora de ordem ou que não formam começo-meio-fim; (2) mensagem igual à ideia central, sem dizer o que a pessoa deve sentir; (3) conteúdo solto, sem ligação com nenhum jogo. O conserto certo é reordenar os momentos, reescrever a mensagem como um sentimento e amarrar tudo a um tema de jogo claro.`,
    },
    {
      titulo: `Meu mini-roteiro completo`,
      tipo: `Projeto curto`,
      tempo: `13 min`,
      guiaProfessor: `Cada aluno monta e salva o roteiro final com as três partes. Verifique se o documento foi salvo, pois será a base da aula 4. Peça que cada um justifique em uma frase por que o roteiro combina com o jogo dele.`,
      atividade: `Junte tudo no seu documento: ideia central (1 frase), mensagem (1 frase) e a lista de 3 a 5 momentos em ordem. Releia conferindo se cada parte combina com o seu jogo, ajuste o que precisar e salve o arquivo com o seu nome.`,
      gabarito: `O aluno acerta quando entrega um documento salvo com as três partes presentes e coerentes entre si: a ideia central resume o vídeo, a mensagem diz o que quem assiste deve sentir, e os momentos (de três a cinco, em ordem) formam uma história com começo, meio e fim ligada ao tema do jogo dele. Não há resposta única; o que importa é que as três partes existam, façam sentido juntas e estejam amarradas ao jogo, com o arquivo salvo para a aula seguinte.`,
    },
  ],
};
