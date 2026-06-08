import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Uma Conta Vira Muitas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Arrastar uma fórmula de soma por todas as linhas de uma tabela maior, para que cada criança da lista calcule sozinha o seu próprio total de pontos.`,
  descricao: `Nas aulas anteriores as crianças aprenderam a usar o botão Somar e a alça mágica do cantinho da célula. Hoje a gente junta as duas coisas em uma tabela de verdade, com vários nomes e vários jogos. Em vez de uma única conta, vamos ver UMA conta virar MUITAS contas com um único arrastão. É o momento "uau" do mês: a planilha trabalha por nós.

Imagine uma tabela com uma criança em cada linha e três jogos em três colunas (Jogo 1, Jogo 2, Jogo 3). Na última coluna fica o Total de cada criança. Em vez de escrever a fórmula linha por linha, escrevemos a soma só na primeira linha e usamos a alça mágica para descer. Quando arrastamos, a planilha é esperta: ela não copia o mesmo resultado, ela copia a IDEIA da conta. Na linha da Ana ela soma os pontos da Ana; na linha do Bento ela soma os pontos do Bento. Cada linha calcula o seu próprio total sozinha.

O coração da aula é perceber que a fórmula "anda junto" com a linha. Como a criança não lê bem ainda, o professor mostra clicando em cada célula de total e lendo em voz alta o que aparece na barra de fórmulas: "olha, aqui ele somou a linha da Ana; aqui, a linha do Bento". A mágica fica visível.

Por fim, reforçamos um cuidado importante: depois de arrastar, é preciso CONFERIR. Às vezes a gente arrasta de menos e sobra uma criança sem total; às vezes arrasta de mais e aparece um zero perdido lá embaixo. A criança aprende a olhar a tabela inteira, ver se todo mundo ganhou seu total e corrigir esticando ou encurtando o arrastão. Confiar na planilha, mas sempre dar uma conferida.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com Excel ou Google Planilhas já aberto na tela.`,
    `Projetor ou TV grande espelhando a tela do professor, para todos verem o arrastão acontecer.`,
    `Planilha-modelo pronta: tabela com 5 a 8 nomes de crianças e colunas Jogo 1, Jogo 2, Jogo 3 e Total (apenas a primeira linha do Total já calculada).`,
    `Uma segunda planilha-modelo "com erro" de propósito (Total arrastado de menos, faltando as últimas crianças) para o exercício de conferir.`,
    `Fichas de papel impressas com uma mini-tabela de pontos para a atividade de papel.`,
    `Lápis de cor ou canetinhas para a atividade de desenho.`,
    `Adesivos ou carimbos de "Detetive da Planilha" para premiar quem conferir direitinho.`,
  ],
  conceitosChave: [
    `Tabela — um quadro com linhas e colunas onde cada criança tem a sua própria linha de pontos.`,
    `Linha — a fileira que anda de lado, da esquerda para a direita; cada criança mora em uma linha.`,
    `Alça mágica — o quadradinho no canto de baixo da célula que a gente puxa para copiar a conta.`,
    `Arrastar — segurar a alça mágica e descer, levando a fórmula para as outras linhas.`,
    `Fórmula que anda junto — a conta muda de lugar com a linha, somando sempre os números daquela criança.`,
    `Total — o número final de cada linha, a soma dos pontos de todos os jogos daquela criança.`,
    `Conferir — olhar a tabela toda no fim para ver se ninguém ficou sem total e se nenhum total ficou errado.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje o aluno vai pegar UMA fórmula de soma e, com a alça mágica, copiá-la para várias linhas de uma vez. O segredo que você precisa dominar é simples: quando você arrasta a fórmula para baixo, a planilha ajusta sozinha as células somadas. Se na linha da Ana a fórmula é igual a SOMA(B2:D2), ao arrastar para a linha do Bento ela vira igual a SOMA(B3:D3), e assim por diante. Isso se chama referência relativa, mas para a criança chamamos de "fórmula que anda junto com a linha".

A alça mágica é o quadradinho minúsculo no canto inferior direito da célula selecionada. No Excel e no Google Planilhas funciona igual: clique na célula, leve o mouse até esse cantinho até o cursor virar um sinal de mais fininho (+), segure e arraste para baixo. Outra forma é dar dois cliques na alça: a fórmula desce sozinha até o fim da tabela. Tenha a planilha-modelo aberta e a barra de fórmulas visível, porque você vai ler para as crianças o que aparece nela.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): abra a planilha-modelo no projetor. Relembre a aula passada: clique numa célula de soma e mostre a alça mágica no cantinho. Pergunte "quem lembra para que serve esse quadradinho?". Faça um arrastão curtinho de uma conta só para acordar a memória.

2. Conteúdo novo guiado (15 min): mostre a tabela grande, com vários nomes. Clique na célula Total da primeira criança (por exemplo E2). Leia a barra de fórmulas em voz alta: "igual SOMA dos pontos da Ana". Agora segure a alça mágica e arraste devagar até a última criança. Solte. Surpresa: todas as linhas ganharam total. Clique em duas ou três células de total diferentes e leia a barra de fórmulas para mostrar que cada uma soma a sua própria linha.

3. Mão na massa (25 min): cada criança (ou dupla) abre a planilha-modelo. Peça que cliquem na célula de total da primeira linha, encontrem a alça mágica e arrastem até a última criança. Circule pela sala. Mostre o truque do duplo clique na alça para quem quiser. Depois, peça que cliquem em duas células de total e você lê a barra de fórmulas com eles para comprovar que andou junto.

4. Desafio e compartilhar (10 min): abra a planilha-modelo "com erro", onde o arrastão parou no meio. Pergunte "alguém ficou sem total?". Deixe as crianças apontarem na tela. Mostre como esticar o arrastão para terminar. Para fechar, cada criança mostra a tabela cheia de totais para o colega do lado.

## Como explicar para crianças de 5 a 9 anos

Use a imagem do trenzinho: a fórmula é um vagão de soma, e quando você arrasta, ela vira muitos vagões, um para cada criança da fila. Cada vagão carrega só os pontos da sua dona. Diga: "a planilha é tão esperta que sabe que a conta da Ana é só da Ana, e a do Bento é só do Bento". Mostre, não fale demais: arraste devagar e deixe o "uau" acontecer na tela grande. Repita o gesto de puxar o cantinho com a mão no ar para virar memória de corpo.

## Erros comuns e como ajudar

O erro mais comum é arrastar de menos: a criança solta o mouse cedo e a última criança fica sem total. Ajude mostrando a célula vazia e dizendo "faltou descer mais". O contrário também acontece: arrasta de mais e aparece um total zero numa linha vazia lá embaixo; basta apagar essa célula. Muitos pegam a célula inteira em vez do quadradinho do canto e acabam movendo a fórmula para o lado, em vez de copiar; mostre bem de perto onde está a alça e espere o cursor virar o sinal de mais fininho antes de segurar. Por fim, alguns esquecem de conferir: crie o hábito de, no final, passar o dedo na tela por todos os totais perguntando "tem total aqui? e aqui?". Conferir é parte da mágica.`,
  exercicios: [
    {
      titulo: `Aquecendo a Alça Mágica`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto, passo a passo, no projetor enquanto as crianças repetem na própria tela. Vá devagar e espere cada um achar o quadradinho do canto. Esta é a tarefa mais fácil: só uma linha vira duas.`,
      atividade: `Abra a planilha-modelo. Clique na célula Total da primeira criança. Ache a alça mágica no cantinho de baixo e arraste só uma linha para baixo, até a segunda criança. Veja se a segunda criança ganhou o seu total.`,
      gabarito: `A segunda linha mostra o total correto (a soma dos três jogos daquela criança). Ao clicar na nova célula de total, a barra de fórmulas mostra a soma da linha 3 (e não da linha 2), provando que a fórmula andou junto.`,
    },
    {
      titulo: `A Tabela Inteira Calcula Sozinha`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Agora é o arrastão completo. Deixe a criança puxar do total da primeira até a última criança. Ensine o atalho do duplo clique na alça para quem terminar rápido. Circule conferindo se todos chegaram até o fim.`,
      atividade: `Clique no total da primeira criança, segure a alça mágica e arraste até a última criança da tabela. Solte e veja todos os totais aparecerem de uma vez. Depois clique em três totais diferentes e peça ao professor para ler a barra de fórmulas com você.`,
      gabarito: `Todas as linhas têm seu total preenchido com a soma certa. Em cada célula clicada, a barra de fórmulas soma exatamente os jogos daquela linha (linha 2 soma a 2, linha 3 soma a 3, e assim por diante). Nenhuma linha fica vazia.`,
    },
    {
      titulo: `Detetive da Planilha`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Abra a planilha-modelo "com erro", onde o arrastão parou no meio e as últimas crianças ficaram sem total. Transforme em caça ao erro. Dê um carimbo ou adesivo de "Detetive da Planilha" para quem achar e consertar.`,
      atividade: `Olhe a tabela toda e descubra quais crianças ficaram sem total. Aponte na tela. Depois conserte: clique no último total que existe, pegue a alça mágica e estique o arrastão até a última criança, para ninguém ficar sem.`,
      gabarito: `A criança identifica corretamente as linhas vazias (as últimas da tabela). Após esticar o arrastão, todas as crianças passam a ter total e nenhuma célula de total fica em branco. A tabela fica completa.`,
    },
    {
      titulo: `Minha Tabela de Pontos no Papel`,
      tipo: `Desenho e papel`,
      tempo: `10 min`,
      guiaProfessor: `Distribua as fichas de papel com a mini-tabela. A criança vira a "planilha humana": faz a conta de cada linha com a cabeça ou nos dedos. Isso ajuda a entender que cada linha tem a sua própria soma antes de confiar no computador.`,
      atividade: `Na ficha, complete a coluna Total de cada criança somando os pontos dos três jogos da linha dela. Pinte a linha de quem fez mais pontos no total.`,
      gabarito: `Exemplo: linha da Ana 2 mais 3 mais 5 igual a 10; linha do Bento 4 mais 0 mais 4 igual a 8; linha da Lia 5 mais 5 mais 1 igual a 11. Cada total é a soma correta dos três números da linha. A linha pintada é a de maior total (no exemplo, a Lia, com 11).`,
    },
    {
      titulo: `Conta de Quem é Esta?`,
      tipo: `Roda de conversa e desafio`,
      tempo: `10 min`,
      guiaProfessor: `Sente todos em roda perto do projetor. Mostre uma célula de total e leia a barra de fórmulas. O desafio é descobrir de qual criança é aquela conta sem olhar o nome, só pela linha. É o conceito mais avançado: ligar a fórmula à linha certa.`,
      atividade: `O professor clica numa célula de total e lê a barra de fórmulas. Você descobre de qual criança é aquela conta, olhando qual linha ela está somando. Depois explique para a roda como você sabe que a fórmula "anda junto" com a linha.`,
      gabarito: `A criança aponta a criança certa, ligando a linha somada na fórmula ao nome daquela linha (se a fórmula soma a linha 4, é a criança da quarta linha). E explica com suas palavras que, ao arrastar, a conta muda de linha junto, somando sempre os pontos da criança daquela linha.`,
    },
  ],
};
