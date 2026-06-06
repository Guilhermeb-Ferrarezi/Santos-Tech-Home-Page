import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: `Minha Planilha Calcula Sozinha!`,
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança finaliza, testa e apresenta a sua planilha esperta, trocando um número e vendo todos os totais, médias e contagens mudarem sozinhos para provar que a planilha calcula automaticamente.`,
  descricao: `Esta é a grande aula final do mês das contas automáticas! Durante quatro semanas as crianças descobriram o botão de Somar, somaram sozinhas escrevendo a fórmula, calcularam a média da turma, contaram sem errar e usaram a alça mágica para copiar uma conta e transformá-la em muitas. Na aula passada cada criança começou a montar a sua planilha esperta. Agora chega o momento mais esperado: deixar tudo pronto, testar a mágica e mostrar para a turma.

O coração da aula é uma descoberta encantadora: quando a criança troca um único número dentro da tabela, todos os resultados que dependem dele mudam sozinhos. O total se atualiza, a média muda, a contagem acompanha. É a prova de que a planilha não guarda só números parados, ela CALCULA. As crianças vão testar isso de propósito, mudando um valor e observando, com os olhos brilhando, o resultado se mexer sem ninguém digitar de novo. Essa é a mágica que dá nome ao mês inteiro.

Depois de testar a mágica, vem o capricho: deixar a planilha bonita. As crianças pintam os títulos com cor de fundo, deixam as letras dos cabeçalhos em negrito e conferem se as bordas e os nomes das colunas estão organizados. Uma planilha esperta também precisa ser bonita e fácil de ler. Esse cuidado final dá orgulho e prepara a apresentação.

Por fim, cada aluno apresenta a sua mágica para a turma: mostra a planilha, troca um número na frente de todos e deixa os colegas verem os totais, médias e contagens mudarem sozinhos. É o fechamento do entregável do mês, uma planilha que calcula sozinha, feita e apresentada por cada criança. O professor é o mestre de cerimônias: ajuda nos últimos ajustes, garante que cada planilha tenha pelo menos uma soma, uma média e uma contagem funcionando, e conduz a rodada de aplausos.`,
  materiais: [
    `Um computador por criança (ou em dupla) com o Excel ou o Google Planilhas já aberto na planilha que ela começou na aula 7`,
    `Projetor ou tela grande ligada ao computador do professor para demonstrar a mágica e conduzir as apresentações`,
    `Uma planilha-exemplo pronta do professor, com soma, média e contagem funcionando, para mostrar a mágica antes das crianças testarem`,
    `Lista impressa, para o professor, de como achar a cor de fundo, o negrito e onde ficam as fórmulas de soma, média e contagem nas duas ferramentas`,
    `Cartões com as três fórmulas escritas em letra grande para a criança copiar caso falte alguma: =SOMA(), =MÉDIA() e =CONT.NÚM()`,
    `Medalhas ou adesivos de "Minha planilha calcula sozinha!" para premiar cada apresentação`,
    `Cópias de segurança simples: pen drive ou pasta combinada para salvar as planilhas no fim, para a família ver depois`,
  ],
  conceitosChave: [
    `Planilha esperta — uma tabela que calcula sozinha, porque tem fórmulas que fazem as contas no seu lugar.`,
    `Cálculo automático — quando você troca um número e os resultados mudam sozinhos, sem ninguém digitar de novo.`,
    `Fórmula — a frase mágica que começa com o sinal de igual e manda a planilha fazer a conta, como =SOMA(A1:A5).`,
    `Atualizar — a planilha refazer a conta na hora, assim que um número muda dentro dela.`,
    `Cor de fundo — a tinta que pinta a célula por trás das letras para deixar o título bonito e fácil de achar.`,
    `Negrito — deixar a letra mais forte e grossa para destacar os títulos importantes.`,
    `Apresentar — mostrar o seu trabalho para a turma, contando o que ele faz e como a mágica funciona.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês. O objetivo não é ensinar fórmula nova, e sim TESTAR, DEIXAR BONITA e APRESENTAR a planilha que cada criança já vem montando. Garanta que cada planilha tenha pelo menos três contas funcionando: uma soma, uma média e uma contagem. Se faltar alguma, ajude a criança a colocá-la rapidamente no aquecimento, usando os cartões de fórmula.

Relembre as três fórmulas do mês, que são iguais no Excel e no Google Planilhas. Soma: clique numa célula vazia, digite =SOMA( , selecione os números com o mouse e aperte Enter. Média: =MÉDIA( e selecione os números. Contagem de números: =CONT.NÚM( e selecione. No Google Planilhas em inglês os nomes podem aparecer como SUM, AVERAGE e COUNT, mas em português é como descrito. Sempre comece com o sinal de igual e termine apertando Enter.

A mágica do cálculo automático é o ponto alto. Antes da aula, monte a sua planilha-exemplo e teste você mesmo: troque um número que está sendo somado e veja o total mudar sozinho. É isso que as crianças vão reproduzir. Saiba também deixar bonito: a cor de fundo fica no botão de balde de tinta (no Excel, na aba Página Inicial; no Google Planilhas, na barra de cima) e o negrito é o botão com a letra N (ou B), ou as teclas Ctrl+B.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Excel / Google Planilhas)

1. Aquecimento e revisão (10 min). Abra a planilha de cada criança e confira as três contas. No projetor, relembre as fórmulas apontando os cartões: =SOMA(), =MÉDIA() e =CONT.NÚM(). Se alguma planilha estiver sem uma conta, ajude a criança a clicar numa célula vazia, digitar a fórmula e selecionar os números. Diga: "Hoje a sua planilha vai calcular sozinha na frente de todo mundo!"

2. Conteúdo novo guiado (15 min). No seu computador no projetor, mostre a mágica. Aponte o total feito pela soma. Depois clique num dos números que entram na conta, digite outro valor maior e aperte Enter. Peça que a turma olhe o total: ele mudou sozinho! Faça o mesmo com a média e a contagem. Em seguida ensine a deixar bonito: clique na célula do título, ache o balde de tinta de cor de fundo e escolha uma cor; depois clique no botão N (negrito) ou aperte Ctrl+B. Fale cada passo devagar.

3. Mão na massa (25 min). Cada criança vai para a sua planilha. Primeiro testa a mágica: troca um número que entra na soma e confirma com Enter que o total mudou; repete com um número da média e da contagem. Depois deixa bonita: pinta a cor de fundo dos títulos e aplica negrito nos cabeçalhos. Circule de mesa em mesa, comemore cada total que se mexe, ajude a achar o balde de tinta. No Google Planilhas a planilha salva sozinha; no Excel, lembre de apertar Ctrl+S.

4. Desafio e compartilhar (10 min). Cada criança (ou algumas, se faltar tempo) apresenta no projetor: mostra a planilha, diz o tema, troca um número na frente da turma e deixa todos verem o total mudar sozinho. Toda a turma bate palmas e a criança ganha a medalha "Minha planilha calcula sozinha!". Salve as planilhas no lugar combinado para a família ver depois.

## Como explicar para crianças de 5 a 9 anos

Use a ideia de robô ajudante. "A sua planilha tem um robozinho que faz as contas para você; toda vez que você troca um número, o robô refaz a conta na hora, sem reclamar." Mostre, não explique demais: troque um número no projetor e diga "olha o total se mexendo sozinho!" com voz de surpresa. Para deixar bonita, use "vamos pintar o nome da coluna e deixar a letra fortona". Comemore cada apresentação com um "uau" e palmas, para que mostrar o trabalho vire algo gostoso, e não assustador.

## Erros comuns e como ajudar

A criança apaga a fórmula por engano ao trocar o número: explique que ela deve clicar só na célula do número, não na do resultado, e ajude a refazer a fórmula com o cartão. O total não muda: confira se ela trocou um número que realmente entra na soma e se apertou Enter. Ela troca o número mas digita por cima do resultado: mostre a diferença entre a célula do dado e a célula da conta. Pinta a célula inteira de uma cor escura e some com a letra: escolha uma cor clara ou aplique a letra branca. Fica tímida para apresentar: deixe apresentar em dupla ou só trocar o número enquanto você narra. Esqueceu de salvar no Excel: aperte Ctrl+S junto com ela no fim.`,
  exercicios: [
    {
      titulo: `A mágica do número que muda`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Com a planilha da criança aberta, mostre primeiro no projetor: troque um número que entra na soma e aperte Enter para o total mudar sozinho. Depois peça que cada criança faça o mesmo na própria planilha. Garanta que ela clique na célula do número (o dado), e não na célula do resultado. Comemore cada total que se mexe.`,
      atividade: `Olhe o total da sua tabela e guarde esse número na cabeça. Agora clique em um dos números que entram na conta e digite um número bem maior. Aperte Enter. O que aconteceu com o total? Ele mudou sozinho? Essa é a sua mágica!`,
      gabarito: `A criança acerta quando troca um número que entra na soma e o total se atualiza sozinho após o Enter, sem ela mexer na fórmula. Sinal de sucesso: ela diz, surpresa, que o total mudou sem ela digitar a conta de novo.`,
    },
    {
      titulo: `Testando soma, média e contagem`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Agora a criança testa as três contas. Peça que troque um número e observe, uma de cada vez, a soma, a média e a contagem. Para a contagem, mostre que apagar um número faz a contagem diminuir e digitar um novo faz aumentar. Use os cartões =SOMA(), =MÉDIA() e =CONT.NÚM() para apontar qual conta é qual. Confira que as três funcionam.`,
      atividade: `Vamos testar todas as mágicas! Troque um número e olhe o total da soma mudar. Olhe também a média mudar. Agora apague um número e veja a contagem diminuir; digite um número novo e veja a contagem aumentar. As três contas calcularam sozinhas?`,
      gabarito: `A criança acerta quando confirma que as três contas se atualizam sozinhas: a soma e a média mudam ao trocar um número, e a contagem diminui ao apagar e aumenta ao acrescentar um número. Sucesso extra: ela aponta na tela onde está cada resultado.`,
    },
    {
      titulo: `Deixando a planilha bonita`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Ensine a parte visual. Mostre no projetor onde fica o balde de tinta da cor de fundo (no Excel, na aba Página Inicial; no Google Planilhas, na barra de cima) e o botão de negrito (a letra N ou B, ou Ctrl+B). Peça que cada criança clique na célula do título, escolha uma cor de fundo clara e deixe a letra em negrito. Cuide para a cor não esconder as letras.`,
      atividade: `Deixe a sua planilha linda! Clique na célula de um título. Ache o baldinho de tinta e escolha uma cor de fundo. Depois clique no botão N para deixar a letra fortona. Faça isso em todos os títulos das colunas. Sua planilha ficou bonita e fácil de ler?`,
      gabarito: `A criança acerta quando os títulos das colunas ficam com cor de fundo e em negrito, e as letras continuam legíveis (cor clara ou contraste bom). Sinal de sucesso: os cabeçalhos se destacam do resto da tabela e a criança consegue lê-los.`,
    },
    {
      titulo: `Roda da planilha esperta`,
      tipo: `Roda de conversa`,
      tempo: `7 min`,
      guiaProfessor: `Reúna a turma em roda, longe dos computadores. Conduza uma conversa rápida para consolidar a ideia do mês. Pergunte o que torna uma planilha esperta e o que acontece quando a gente troca um número. Aceite respostas com as palavras das crianças e reforce os termos calcular sozinha, fórmula e atualizar. Deixe cada criança falar uma frase.`,
      atividade: `Em roda, responda com a turma: o que é uma planilha esperta? O que acontece quando você troca um número dentro dela? Por que a gente diz que ela calcula sozinha? Conte para os colegas a mágica que mais te surpreendeu este mês.`,
      gabarito: `A criança acerta quando explica, com as próprias palavras, que a planilha esperta calcula sozinha porque tem fórmulas e que, ao trocar um número, os resultados se atualizam sem digitar a conta de novo. Não há frase errada; vale qualquer resposta que mostre essa ideia.`,
    },
    {
      titulo: `Desafio: apresentar a minha mágica`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Conduza as apresentações no projetor como um mestre de cerimônias. Combine antes os três passos: mostrar a planilha e dizer o tema, trocar um número na frente da turma e deixar todos verem o total mudar sozinho. Garanta aplausos para cada criança e entregue a medalha "Minha planilha calcula sozinha!". Se a criança for tímida, deixe apresentar em dupla ou só trocar o número enquanto você narra.`,
      atividade: `Chegou a sua vez de brilhar! No telão, mostre a sua planilha e diga o tema dela. Depois troque um número na frente de todos e peça para a turma olhar o total mudar sozinho. No final, faça a sua reverência de mestre das planilhas espertas!`,
      gabarito: `A criança acerta quando apresenta a própria planilha dizendo o tema e demonstra ao vivo o cálculo automático, trocando um número e mostrando o resultado se atualizar sozinho, mesmo com um empurrãozinho do professor. O objetivo é o orgulho de ter feito e mostrado uma planilha que calcula sozinha.`,
    },
  ],
};
