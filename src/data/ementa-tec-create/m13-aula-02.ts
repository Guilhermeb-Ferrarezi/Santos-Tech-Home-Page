import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Comandos que geram bons clipes",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Aprender a escrever comandos (prompts) que controlam o vídeo da IA, descrevendo assunto, estilo, câmera e duração, e comparar duas versões do mesmo clipe mudando palavras-chave para escolher e salvar os melhores na pasta do projeto do mês.`,
  descricao: `Na Aula 1 os alunos deram os primeiros passos no Sora e viram a mágica de um texto virar vídeo. Agora chega a parte que separa um clipe qualquer de um clipe bom: aprender a falar com a IA do jeito certo. Um comando (ou prompt) é a frase que você escreve para a IA; quanto mais clara e organizada for essa frase, mais perto o vídeo fica do que você imaginou. Esta aula é uma prática guiada de escrita de comandos.

A ideia central é simples e poderosa: um bom comando tem quatro ingredientes. Primeiro o assunto (o que aparece na cena: um gato, um carro, um astronauta). Depois o estilo (como a cena parece: desenho animado, realista, estilo videogame, cores vivas). Em seguida a câmera (de onde a gente olha: de perto, de longe, vista de cima, câmera que se aproxima devagar). E por fim a duração e o ritmo (um clipe curto e calmo, ou rápido e cheio de ação). Quando o aluno aprende a colocar esses quatro ingredientes na ordem, ele para de torcer para a IA acertar e passa a comandar o resultado.

O coração da aula é uma experiência de comparação. Cada aluno vai gerar duas versões do mesmo clipe, mudando só uma ou duas palavras-chave entre elas. Por exemplo, o mesmo gato pode aparecer "em estilo desenho animado" numa versão e "em estilo realista" na outra; ou a câmera pode estar "bem de perto" numa e "vista de cima" na outra. Ao colocar os dois vídeos lado a lado, o aluno enxerga com os próprios olhos como cada palavra muda o resultado. Essa é a lição mais valiosa do mês: as palavras do comando são os controles do vídeo.

No final, o aluno escolhe a melhor das duas versões, baixa o arquivo e salva na pasta do projeto do mês, com um nome organizado. Assim ele não só treina a escrita de comandos, como começa a juntar material de verdade para o entregável do mês, que é um conjunto de clipes de vídeo gerados por IA.`,
  materiais: [
    `Computadores (1 por aluno) com navegador aberto no ChatGPT, na conta com Sora liberado, já com a sessão dos alunos feita`,
    `Projetor ou TV para o professor mostrar a própria tela e escrever os comandos na frente da turma`,
    `Uma pasta do projeto do mês criada em cada computador (por exemplo "Videos-IA-Mes1"), onde os clipes serão salvos`,
    `Folha ou slide com a fórmula dos quatro ingredientes do comando: assunto, estilo, câmera e duração`,
    `Dois exemplos de comando prontos do professor (uma versão A e uma versão B do mesmo clipe) para demonstrar a comparação`,
    `Lista de palavras-chave úteis impressa ou no projetor (estilos, tipos de câmera, ritmos) para os alunos consultarem`,
    `Fones de ouvido (opcional) caso os vídeos de exemplo tenham som, para não atrapalhar a turma`,
  ],
  conceitosChave: [
    `Comando (prompt) — a frase que você escreve para a IA explicando o vídeo que quer; é o controle principal do resultado.`,
    `Palavra-chave — uma palavra forte dentro do comando que muda bastante o vídeo, como "realista", "de cima" ou "rápido".`,
    `Assunto — o que aparece na cena: a personagem, o objeto ou o lugar principal do clipe.`,
    `Estilo — o jeito visual da cena, como desenho animado, realista, pixel art, cores vivas ou preto e branco.`,
    `Câmera — o ponto de vista da cena: de perto, de longe, vista de cima, ou uma câmera que se aproxima devagar.`,
    `Duração e ritmo — o tamanho do clipe e a velocidade da ação: curto e calmo, ou cheio de movimento.`,
    `Comparar versões — gerar dois clipes parecidos mudando poucas palavras para ver qual ficou melhor e por quê.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula; precisa só dominar uma fórmula e um fluxo. A fórmula é o comando de quatro ingredientes: assunto, estilo, câmera e duração. O fluxo é: abrir o Sora, escrever o comando, gerar, escrever uma segunda versão mudando uma palavra-chave, gerar de novo e comparar.

Antes da aula, faça login no ChatGPT e localize o Sora (no menu lateral esquerdo, ou pelo botão de criar vídeo, dependendo da versão da conta). Teste você mesmo: escreva um comando simples como "Um gato astronauta flutuando no espaço, estilo desenho animado, câmera bem de perto, clipe curto e calmo". Clique no botão de gerar (geralmente a setinha para cima ou "Gerar"/"Create") e espere o vídeo ficar pronto. Depois mude só uma palavra (troque "desenho animado" por "realista") e gere outra vez. Assim você chega seguro na frente da turma.

## Passo a passo da aula

Aquecimento e revisão (10 min). Relembre a Aula 1: "Quem lembra o que a gente fez virar vídeo?" Mostre no projetor um clipe simples que você gerou e pergunte: "O que poderíamos mudar nessa frase para o vídeo ficar diferente?" Apresente a fórmula dos quatro ingredientes na tela: assunto, estilo, câmera, duração.

Conteúdo novo guiado (15 min). Na sua tela, abra o Sora dentro do ChatGPT. Mostre o campo de texto onde se escreve o comando. Escreva, em voz alta, um comando completo seguindo a ordem dos ingredientes: "Um robô pequeno andando numa cidade à noite, estilo realista, câmera que se aproxima devagar, clipe curto". Clique em Gerar e, enquanto carrega, explique cada ingrediente apontando na frase. Quando o vídeo abrir, escreva a versão B mudando só uma palavra-chave (por exemplo, troque "realista" por "desenho animado") e gere de novo. Coloque os dois vídeos lado a lado e pergunte: "O que mudou?". Mostre também onde fica o botão de baixar (download, ícone de seta para baixo) e como salvar na pasta do projeto.

Mão na massa (25 min). Cada aluno escreve o próprio comando com os quatro ingredientes e gera a versão A. Depois muda uma ou duas palavras-chave e gera a versão B. Circule pelas máquinas conferindo se o comando tem assunto, estilo, câmera e duração. Quando as duas versões estiverem prontas, peça que comparem, escolham a melhor, cliquem em baixar e salvem na pasta do mês com um nome organizado (por exemplo "gato-realista-A").

Desafio e compartilhar (10 min). Lance o desafio: "Mude só UMA palavra do seu comando e tente deixar o clipe com uma sensação totalmente diferente." Faça uma volta rápida: cada aluno mostra as duas versões e diz, em uma frase, qual palavra mudou e o que aconteceu.

## Como explicar de forma clara

Use a imagem de "dar instruções para um ajudante que nunca viu o que você imagina". Quanto mais detalhe você dá, melhor ele te entende. Compare o comando a uma receita: faltou um ingrediente, o bolo sai diferente. Diga que as palavras-chave são como botões de um controle de videogame: cada uma muda uma coisa na tela. Para a faixa de 10 a 15 anos, mostre sempre o antes e depois lado a lado, porque a comparação visual ensina mais que qualquer explicação. Evite encher de termos técnicos: fale "de onde a câmera olha" em vez de "enquadramento".

## Erros comuns e como ajudar

O erro mais comum é o comando curto demais, do tipo "um gato". Peça que o aluno complete com os quatro ingredientes. O oposto também acontece: comandos enormes e bagunçados; ajude a cortar e organizar na ordem assunto, estilo, câmera, duração. Outro erro é mudar várias palavras de uma vez entre a versão A e a B, o que impede ver o que causou a diferença; reforce a regra de mudar só uma palavra-chave por vez. Muitos esquecem de salvar e perdem o clipe; lembre sempre de baixar e guardar na pasta do mês com nome claro. E se a geração demorar, explique que é normal a IA levar um tempinho, e aproveite a espera para revisar o comando junto com o aluno.`,
  exercicios: [
    {
      titulo: `Os quatro ingredientes do comando`,
      tipo: `Prática no computador`,
      tempo: `6 min`,
      guiaProfessor: `Mostre a fórmula no projetor antes de soltar a turma: assunto, estilo, câmera, duração. Circule conferindo se cada comando tem os quatro pedaços. Não exija geração ainda, só a frase bem escrita.`,
      atividade: `No campo de texto do Sora, escreva um comando que tenha os quatro ingredientes na ordem: assunto (o que aparece), estilo (como parece), câmera (de onde olhamos) e duração (curto ou longo). Exemplo: "Um cachorro skatista num parque, estilo desenho animado, câmera de perto, clipe curto". Não gere ainda, só escreva.`,
      gabarito: `O aluno acertou se o comando dele tem claramente os quatro ingredientes: um assunto, um estilo, uma indicação de câmera e uma de duração. Se faltar algum, peça para completar. Exemplo de comando completo: "Uma raposa correndo na neve, estilo realista, câmera de longe, clipe curto e calmo".`,
    },
    {
      titulo: `Gerando a versão A`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Demonstre uma vez no projetor onde fica o botão de gerar (seta para cima ou "Gerar"/"Create"). Avise que a IA leva um tempinho. Aproveite a espera para revisar o comando com cada aluno.`,
      atividade: `Pegue o comando que você escreveu e clique no botão de gerar para criar seu vídeo. Enquanto espera, leia sua frase em voz baixa e confira se os quatro ingredientes estão lá. Quando o clipe ficar pronto, assista até o fim.`,
      gabarito: `O aluno acertou se conseguiu gerar um clipe a partir do próprio comando e assistir ao resultado. O vídeo não precisa estar perfeito; o importante é o aluno ter usado o botão de gerar e ter um clipe pronto para a próxima etapa de comparação.`,
    },
    {
      titulo: `Mude uma palavra, mude o vídeo`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Reforce a regra de ouro: mudar só UMA palavra-chave entre a versão A e a B. Mostre lado a lado os seus dois exemplos prontos. Ajude quem quiser mudar demais a escolher uma única palavra.`,
      atividade: `Copie seu comando e faça a versão B mudando só uma palavra-chave: troque o estilo (de "desenho animado" para "realista"), ou a câmera (de "de perto" para "vista de cima"). Gere a versão B e coloque os dois clipes lado a lado para comparar.`,
      gabarito: `O aluno acertou se gerou uma segunda versão mudando apenas uma palavra-chave e consegue apontar a diferença entre os dois clipes. Sucesso total é ele dizer qual palavra mudou e qual efeito ela teve, por exemplo: "Troquei 'desenho' por 'realista' e o gato ficou parecendo de verdade".`,
    },
    {
      titulo: `Júri de duplas`,
      tipo: `Em dupla`,
      tempo: `9 min`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira. Cada um assiste às duas versões do colega e ajuda a escolher a melhor, justificando. Estimule a fala gentil: "gostei mais dessa porque...".`,
      atividade: `Troque de lugar com o colega. Assista às duas versões dele (A e B) e, junto com ele, decida qual ficou melhor e por quê. Depois ele faz o mesmo com as suas. Anotem qual palavra-chave fez a maior diferença em cada clipe.`,
      gabarito: `A dupla acertou se conseguiu escolher uma versão vencedora para cada aluno e explicar o motivo ligado a uma palavra-chave (estilo, câmera, ritmo). O resultado esperado é cada aluno entender que a escolha das palavras controla o vídeo, ouvindo a opinião do colega.`,
    },
    {
      titulo: `Salvando o melhor clipe`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Esta tarefa fecha a aula e alimenta o entregável do mês. Mostre o botão de baixar (ícone de seta para baixo) e a pasta do projeto. Ensine um nome organizado. Faça a roda final, cada aluno em uma frase.`,
      atividade: `Escolha a melhor das suas duas versões. Clique no botão de baixar (download) para salvar o vídeo no computador. Guarde o arquivo na pasta do projeto do mês com um nome organizado, como "gato-realista-melhor". Depois conte à turma, em uma frase, qual palavra-chave deixou seu clipe melhor.`,
      gabarito: `O aluno acertou se baixou a versão escolhida e salvou na pasta do projeto do mês com um nome claro e organizado. O resultado esperado é o clipe guardado no lugar certo, pronto para entrar no material de vídeo do mês, e o aluno sabendo dizer qual palavra-chave fez a diferença. Se algum aluno esqueceu de salvar, anote para retomar na Aula 3.`,
    },
  ],
};
