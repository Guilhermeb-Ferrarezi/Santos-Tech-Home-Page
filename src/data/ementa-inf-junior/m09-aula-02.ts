import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: `Eu Faço Meu Gráfico!`,
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança seleciona os dados com o mouse e clica sozinha para criar o seu primeiro gráfico, repete o passo a passo com um novo conjunto de números e observa o gráfico mudar quando troca um valor.`,
  descricao: `Esta é a segunda aula do mês dos Gráficos. Na aula passada, "De Números para Desenho!", a turma descobriu a grande mágica do mês: números soltinhos numa tabela podem virar um desenho que conta a história deles. As crianças viram o professor transformar números em barras coloridas e perceberam que um desenho é mais fácil de entender do que uma lista de números. Hoje a gente dá o passo mais empolgante: cada criança vai fazer o seu próprio gráfico, com as próprias mãozinhas no mouse.

O coração da aula de hoje são dois movimentos simples e poderosos. O primeiro é selecionar: arrastar o mouse por cima dos números para "pintar" os dados, deixando-os marcados de azul. O segundo é clicar no botão certo para o computador desenhar o gráfico sozinho. Para uma criança de 5 a 9 anos, ver os números que ela mesma marcou virarem barras coloridas na tela é um momento de pura mágica e orgulho. É a primeira vez que ela é a autora do gráfico, e não só a plateia.

Depois de fazer o primeiro gráfico juntos, a turma repete tudo com um conjunto de números novo e divertido: as cores favoritas da turma. O professor já deixa uma tabelinha pronta (Vermelho, Azul, Amarelo, Verde) com quantas crianças gostam de cada cor, e cada aluno refaz o passo a passo sozinho. Repetir é o segredo do aprendizado nessa idade: na primeira vez a criança segue o professor, na segunda ela já se sente dona do caminho.

O fechamento traz a descoberta mais legal do dia: o gráfico é vivo! Quando a criança muda um número na tabela, a barra correspondente cresce ou encolhe na hora, sozinha. Essa brincadeira de trocar um valor e ver a barra "mexer" mostra que o gráfico está sempre ligado aos números. Não é preciso entender nada de técnico: basta a criança trocar um 3 por um 8 e gritar de alegria quando a torre cresce. Hoje a meta é simples e marcante: cada criança sai da aula tendo criado o seu próprio gráfico, mais de uma vez, e tendo visto esse gráfico mudar diante dos olhos.`,
  materiais: [
    `Um computador por aluno (ou em duplas) com o Excel ou o Google Planilhas já aberto numa planilha em branco, pronto para usar, e o navegador logado na conta da escola se for o Google Planilhas (site sheets.google.com).`,
    `Computador do professor ligado a um projetor ou televisão grande, com a mesma planilha aberta, para demonstrar cada arrastar de mouse e cada clique para a turma toda ver de pertinho.`,
    `Uma tabela de exemplo já digitada e pronta nos computadores: "Frutas que eu gosto" com nomes na coluna A (Maçã, Banana, Uva) e números na coluna B (por exemplo 5, 3, 4), para o primeiro gráfico guiado.`,
    `Uma segunda tabela já digitada e pronta: "Cores favoritas da turma" com as cores na coluna A (Vermelho, Azul, Amarelo, Verde) e os números na coluna B, para a criança repetir o passo a passo sozinha.`,
    `Um gráfico de exemplo já pronto e impresso (ou salvo numa aba), para mostrar o resultado caso a internet ou o computador falhe na hora da aula.`,
    `Etiquetas ou adesivos coloridos e cartões com os nomes das cores, para a roda de conversa em que a turma vota na cor favorita.`,
    `Um cronômetro ou relógio visível para controlar o ritmo das quatro etapas da aula (10/15/25/10).`,
  ],
  conceitosChave: [
    `Gráfico — um desenho feito de barras ou fatias coloridas que conta a história dos números de um jeito fácil e bonito de ver.`,
    `Tabela — o lugar com quadradinhos onde a gente escreve os nomes e os números antes de virar gráfico.`,
    `Célula — cada quadradinho da tabela; é a casinha onde mora um número ou uma palavra.`,
    `Selecionar — arrastar o mouse por cima dos números para "pintar" e marcar quais dados o computador vai desenhar; eles ficam azuizinhos.`,
    `Botão Inserir — o lugar lá em cima da tela onde a gente clica para o computador desenhar o gráfico sozinho.`,
    `Valor — o número que está dentro de uma célula; quando a gente troca o valor, a barra do gráfico cresce ou encolhe.`,
    `Gráfico vivo — o jeito divertido de dizer que o gráfico muda sozinho na hora em que a gente troca um número na tabela.`,
  ],
  treinamento: `## O que o professor precisa saber

A aula de hoje é prática do começo ao fim: o objetivo é que cada criança crie o seu próprio gráfico com o mouse. Para isso o professor precisa dominar dois movimentos e nada mais. O primeiro é selecionar os dados: clicar com o mouse na primeira célula (o canto de cima da tabela, onde está o primeiro nome) e, segurando o botão, arrastar até a última célula com número (o canto de baixo). Os quadradinhos ficam pintados de azul: isso quer dizer que estão marcados. O segundo movimento é mandar desenhar: no Excel, com os dados marcados, clique na aba Inserir lá em cima e depois no botão de gráfico (o desenho de barrinhas, "Gráficos Recomendados"); escolha o primeiro de colunas e clique OK. No Google Planilhas é ainda mais direto: com os dados marcados, clique no menu Inserir lá em cima e depois em Gráfico; o gráfico aparece sozinho.

Deixe as duas tabelas já digitadas antes da aula (frutas e cores). Digitar números com crianças pequenas consome todo o tempo; hoje o foco é selecionar e clicar, não digitar. Teste o caminho no seu computador uma vez antes da turma chegar.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Excel ou Google Planilhas)

1. Aquecimento e revisão (10 min). Junte a turma em roda. Relembre a aula passada: "Lembram que os números viraram desenho? Hoje QUEM vai fazer o desenho são vocês!" Mostre no projetor a tabela das frutas e pergunte: "Qual fruta tem o número maior?" Deixe a turma adivinhar como ficaria o gráfico.

2. Conteúdo novo guiado (15 min). No computador do professor, mostre devagar os dois movimentos. Primeiro selecionar: clique na célula da primeira fruta e arraste até o último número; mostre os quadradinhos ficando azuis. Depois mandar desenhar: no Excel clique na aba Inserir e no botão de Gráficos Recomendados, escolha colunas e clique OK; no Google Planilhas clique no menu Inserir e depois em Gráfico. O gráfico aparece! Comemore junto: "Olha só, o computador desenhou pra gente!"

3. Mão na massa (25 min). Leve as crianças aos computadores. Guie todos, ao mesmo tempo, a fazer o gráfico das frutas: arrastar para selecionar, clicar em Inserir, clicar em Gráfico. Passe de mesa em mesa ajudando a segurar o botão do mouse enquanto arrasta. Depois que todos conseguirem, peça que repitam tudo sozinhos com a segunda tabela, a das cores favoritas. A repetição é o que fixa o aprendizado.

4. Desafio e compartilhar (10 min). Mostre a descoberta mágica: peça que a criança clique numa célula de número da tabela, apague e digite um número bem maior (troque um 3 por um 9, por exemplo) e aperte Enter. A barra do gráfico cresce na hora! Deixe cada um trocar um número e ver a barra mexer. Encerre na roda: "O gráfico é vivo, ele muda quando a gente muda o número!"

## Como explicar para crianças de 5 a 9 anos

Use a palavra "pintar" no lugar de "selecionar": "Vamos pintar os números de azul com o mouse, igual passar um pincel." Para o clique, fale "vamos mandar o computador desenhar". Use as mãos: faça o gesto de arrastar no ar antes de cada criança tentar. Para o gráfico vivo, use a imagem das torres: "A barra é uma torre; se a gente dá mais blocos pro número, a torre cresce!" Frases curtas e muita comemoração a cada gráfico que aparece seguram a atenção e o orgulho.

## Erros comuns e como ajudar

- Soltar o botão do mouse no meio do arrasto e selecionar só uma célula. Mostre de novo devagar: "Aperta e NÃO solta até o fim." Ajude segurando junto a mãozinha.

- Esquecer de selecionar antes de clicar em Inserir e o gráfico sair vazio ou errado. Volte um passo: "Primeiro pintamos de azul, depois mandamos desenhar."

- Não achar o menu Inserir. Aponte sempre o mesmo lugar (a barra lá de cima) e diga "é a palavrinha Inserir, lá no alto".

- Frustração se o gráfico sair diferente do esperado. Lembre que todo gráfico é válido e que o importante é os números viraram desenho; depois é só trocar um número e ver a mágica acontecer.`,
  exercicios: [
    {
      titulo: `Qual fruta vai ser a torre mais alta?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece na roda com a tabela das frutas no projetor. Leia os números em voz alta apontando cada um: "A maçã tem 5, a banana tem 3, a uva tem 4." Pergunte qual será a barra mais alta e qual a mais baixa, antes de criar o gráfico. Para os menores, peça que mostrem com as mãozinhas (uma mão baixinha, uma mão bem alta). Conduza a turma a perceber que o número maior vira a torre maior. Termine dizendo: "Agora vocês vão fazer esse gráfico sozinhos!"`,
      atividade: `Olhe a tabela das frutas no telão. A maçã tem 5, a banana tem 3, a uva tem 4. Adivinhe: qual fruta vai virar a torre MAIS ALTA no gráfico? E a mais baixinha? Mostre com a mão: bem alta para o número grande, bem baixa para o número pequeno!`,
      gabarito: `A criança acerta se ligar o número maior à barra mais alta e o número menor à barra mais baixa. Sinal de sucesso: apontar a maçã (5) como a torre mais alta e a banana (3) como a mais baixa, ou mostrar com as mãos a altura certa. Não precisa explicar com palavras; basta entender que número maior vira torre mais alta.`,
    },
    {
      titulo: `Eu pinto os números de azul`,
      tipo: `Jogo`,
      tempo: `8 min`,
      guiaProfessor: `Antes de ir ao gráfico, treine só o movimento de selecionar, como um joguinho. No projetor, mostre o arrasto e depois desafie: "Quem consegue pintar de azul só os números das frutas?" Leve a turma ao computador e peça que cada criança arraste o mouse da primeira até a última célula, sem clicar em mais nada. Passe de mesa em mesa conferindo se ficou tudo azul. Comemore cada criança que conseguir "pintar" certinho. É um treino do gesto antes de criar o gráfico de verdade.`,
      atividade: `Joguinho de pintar! Pegue o mouse, clique no primeiro quadradinho da tabela e, sem soltar, arraste até o último número. Os quadradinhos ficaram azuis? Você pintou os números! Solte o mouse só no fim. Conseguiu deixar tudo azul de uma vez só?`,
      gabarito: `A criança acerta se conseguir arrastar o mouse e deixar todas as células da tabela marcadas de azul de uma só vez, sem soltar no meio. Sinal de sucesso: os nomes e os números aparecem pintados de azul juntos na tela. Aceitar ajuda do professor para segurar o botão; o importante é entender que arrastar sem soltar é "pintar para marcar".`,
    },
    {
      titulo: `Meu primeiro gráfico sozinho`,
      tipo: `Prática no computador`,
      tempo: `14 min`,
      guiaProfessor: `Este é o coração da aula. No projetor, mostre o caminho completo bem devagar: selecionar (arrastar para pintar de azul), clicar na aba ou menu Inserir lá em cima e clicar em Gráfico (no Excel, escolher colunas e OK). O gráfico aparece. Depois leve a turma a fazer igual com a tabela das frutas, todos juntos, passo a passo. Quando todos conseguirem, peça que repitam o caminho inteiro sozinhos com a tabela das cores favoritas. Passe de mesa em mesa; o objetivo é que cada criança faça o gráfico com as próprias mãos.`,
      atividade: `Faça o seu gráfico! Siga os passos: 1. Pinte os números de azul arrastando o mouse. 2. Clique em Inserir lá em cima. 3. Clique em Gráfico. Pronto, o computador desenhou para você! Agora faça TUDO DE NOVO sozinho com a tabela das cores favoritas. Você fez dois gráficos!`,
      gabarito: `A criança acerta se selecionar os dados e clicar em Inserir e Gráfico até o gráfico aparecer na tela, e depois repetir o caminho sozinha com a segunda tabela. Sinal de sucesso: dois gráficos criados, o das frutas e o das cores, mesmo com alguma ajuda do professor. O foco é a criança ser a autora do gráfico e conseguir repetir o passo a passo.`,
    },
    {
      titulo: `A torre que cresce: o gráfico vivo`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Depois que cada criança já tem o seu gráfico, mostre a descoberta mágica. No projetor, clique numa célula de número da tabela, apague e digite um número bem maior, aperte Enter e mostre a barra crescendo na hora. Desafie a turma: "Façam a torre de vocês crescer!" Peça que cada criança clique num número, troque por um maior e aperte Enter. Depois deixe trocar por um menor e ver a torre encolher. Acompanhe de mesa em mesa para ajudar a achar a célula certa.`,
      atividade: `Desafio do gráfico vivo! Clique num número da sua tabela, apague e digite um número bem maior, tipo 9. Aperte Enter. O que aconteceu com a torre? Ela cresceu sozinha! Agora coloque um número pequeno e veja a torre encolher. O gráfico mexe quando você muda o número!`,
      gabarito: `A criança acerta se trocar o valor de uma célula e perceber a barra do gráfico crescer ou encolher na hora. Sinal de sucesso: a criança digita um número maior, aperta Enter e aponta a barra que cresceu, dizendo que o gráfico mudou sozinho. Aceitar ajuda para achar a célula; o importante é entender que o gráfico é "vivo" e segue os números.`,
    },
    {
      titulo: `O desenho da minha cor favorita`,
      tipo: `Desenho no papel`,
      tempo: `8 min`,
      guiaProfessor: `Para fechar e descansar do computador, faça a ponte com o papel. Na roda, faça a turma votar na cor favorita levantando o cartão da cor. Conte os votos em voz alta. Depois entregue uma folha e peça que cada criança desenhe, no papel, as torres das cores (uma barra para cada cor, mais alta quando tem mais votos), como se fosse o gráfico que acabaram de fazer no computador. Para os menores, basta desenhar barras de tamanhos diferentes. Reforce que o gráfico de papel conta a mesma história do gráfico da tela.`,
      atividade: `Vamos desenhar o gráfico no papel! Pense nas cores favoritas da turma. Desenhe uma torre para cada cor: a cor com mais votos tem a torre MAIS ALTA, a com menos votos tem a torre baixinha. Pinte cada torre com a sua cor de verdade! Seu papel virou um gráfico igual ao do computador.`,
      gabarito: `A criança acerta se desenhar barras de alturas diferentes representando as cores, com a torre mais alta para a cor mais votada. Sinal de sucesso: pelo menos duas ou três torres de tamanhos diferentes, pintadas com as cores certas, e a criança dizer que a torre mais alta é a cor que mais gente gosta. Não há desenho errado; o foco é ligar mais votos a torre mais alta.`,
    },
  ],
};
