import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "A Mágica do Botão Somar",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir que a planilha pode somar números sozinha usando o botão Soma Automática (Autosoma), num passe de mágica.`,
  descricao: `Nesta primeira aula do mês, as crianças conhecem uma ideia incrível: a planilha sabe fazer contas sozinha! Em vez de contar nos dedinhos ou somar na cabeça, elas vão descobrir um botão mágico que aparece o resultado num instante. O tema central é simples e encantador: digitamos alguns números, apertamos um botão e a planilha mostra o total. Para uma criança de 5 a 9 anos, isso parece truque de mágica de verdade.

Para deixar tudo bem concreto, usamos uma história gostosa: cada número é a quantidade de figurinhas que a criança ganhou em um dia da semana. Segunda ganhei 3, terça ganhei 5, quarta ganhei 2... e quantas figurinhas eu tenho no total? Em vez de somar tudo no papel, a planilha faz isso por nós. Esse contexto lúdico ajuda a criança a entender que cada célula guarda um número e que a soma junta todos eles.

O professor demonstra primeiro no projetor, devagar, narrando cada passo em voz alta. Depois cada aluno repete o gesto guiado: clicar numa célula vazia logo abaixo dos números e apertar o botão Soma Automática (chamado de Autosoma no Excel, ou o ícone de somatório no Google Planilhas). O foco não é decorar fórmulas, e sim viver a experiência mágica de ver o número aparecer sozinho.

Esta aula abre o mês inteiro de Contas Automáticas. Aqui plantamos a semente: a planilha calcula por mim. Nas próximas aulas as crianças vão aprender a escrever a soma sozinhas, calcular médias, contar itens e copiar contas. Por enquanto, o objetivo é só o encantamento e o primeiro clique no botão mágico.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto numa planilha em branco (deixe pronto antes da aula para não perder tempo com login).`,
    `Projetor ou TV grande conectado ao computador do professor, para todos verem a demonstração.`,
    `Um arquivo de exemplo já preparado pelo professor, com os dias da semana numa coluna e a quantidade de figurinhas ao lado (Segunda 3, Terça 5, Quarta 2, Quinta 4, Sexta 1).`,
    `Figurinhas ou adesivos de verdade (ou cartões com desenhos) para a história ficar bem concreta na mão das crianças.`,
    `Folhas de papel e lápis de cor para o exercício de desenho.`,
    `Uma plaquinha ou cartaz grande com o desenho do botão Soma Automática (o símbolo Σ), para apontar durante a aula.`,
    `Etiquetas com os nomes das crianças, caso troquem de computador.`,
  ],
  conceitosChave: [
    `Planilha — uma folha cheia de quadradinhos no computador onde a gente guarda números e palavras.`,
    `Célula — cada quadradinho da planilha; é a casinha onde mora um número ou uma palavra.`,
    `Soma — juntar todos os números para saber quanto dá no total, igual juntar todas as figurinhas numa pilha só.`,
    `Botão Soma Automática (Autosoma) — o botão mágico, com o desenho Σ, que soma os números pra gente sem precisar contar.`,
    `Total — o número final que aparece depois da mágica; é tudo junto somado.`,
    `Selecionar — clicar numa célula para escolher ela, igual colocar o dedo em cima do quadradinho que a gente quer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em planilhas para dar esta aula. O botão Soma Automática faz o trabalho pesado. No Excel ele se chama Autosoma e fica na aba Página Inicial, lá no cantinho direito, com o símbolo Σ (parece um E de pernas abertas). No Google Planilhas, o mesmo símbolo Σ fica na barra de ferramentas de cima, perto da direita; ao clicar nele aparece a opção SOMA. Em ambos, o segredo é o mesmo: clica na célula vazia logo abaixo da coluna de números, aperta o botão e confirma com Enter. A planilha entende sozinha quais números somar. Teste uma vez antes da aula para conhecer o caminho na ferramenta da sua escola.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Sente as crianças perto do projetor. Mostre as figurinhas de verdade e conte a história: ganhei figurinhas a semana toda. Junte algumas pilhas e pergunte quantas no total. Deixe elas contarem nos dedos. Diga: hoje o computador vai contar por nós, igual mágica!

Conteúdo novo guiado (15 min): No seu computador, com o projetor ligado, mostre a planilha de exemplo (Segunda 3, Terça 5, Quarta 2, Quinta 4, Sexta 1). Aponte uma célula e diga isto é uma célula, a casinha do número. Clique na célula vazia logo abaixo do último número. Mostre o botão Σ na tela (Autosoma no Excel, na aba Página Inicial; ou o ícone Σ no Google Planilhas). Clique nele bem devagar e aperte Enter. Faça cara de surpresa quando o total aparecer. Repita duas ou três vezes para fixar.

Mão na massa (25 min): Agora cada criança no seu computador. Peça que digitem três a cinco números, um em cada célula de uma coluna (você pode ditar: 2, depois Enter; 4, depois Enter). Circule pela sala. Guie o gesto: clica no quadradinho vazio embaixo, acha o botão mágico Σ, aperta e dá Enter. Comemore cada total que aparecer. Deixe repetirem com números diferentes.

Desafio e compartilhar (10 min): Dite um conjunto novo de números (por exemplo 5, 5, 5) e desafie a turma a somar sozinha. Depois cada criança mostra o total na tela e conta para os colegas qual número apareceu na mágica dela.

## Como explicar para crianças de 5 a 9 anos

Use sempre a palavra mágica para o botão e faça gestos grandes. Compare a célula com uma casinha onde o número mora. Compare a soma com juntar todas as figurinhas numa pilha só. Evite a palavra fórmula; fale botão de somar. Mostre antes de mandar fazer, sempre. Faça cara de espanto quando o total aparece, as crianças imitam a alegria. Repita o passo principal cantando: clica embaixo, acha o Σ, aperta, Enter!

## Erros comuns e como ajudar

A criança clica numa célula no meio dos números, não na vazia de baixo. Mostre com o dedo na tela onde é embaixo. Algumas digitam o número e esquecem o Enter; lembre que o Enter pula para a casinha de baixo. Outras apertam o botão antes de ter números; confira se há números na coluna primeiro. Se o resultado vier estranho, provavelmente foram selecionadas células erradas: apague e refaça juntos, com calma, clicando exatamente na célula vazia abaixo da coluna de números.`,
  exercicios: [
    {
      titulo: `Caça à Casinha dos Números`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Com a planilha de exemplo no projetor, aponte células e faça perguntas para a turma reconhecer o que é célula, número e onde fica a casinha vazia. Deixe várias crianças responderem apontando na tela.`,
      atividade: `Olhando a tela grande, as crianças apontam: onde está uma célula? Onde mora o número 5? Qual é a casinha vazia que vai receber a mágica?`,
      gabarito: `Uma célula é qualquer quadradinho da planilha. O número 5 mora na célula onde ele está escrito (no exemplo, na linha da Terça). A casinha vazia da mágica é a célula logo abaixo do último número da coluna.`,
    },
    {
      titulo: `Meu Primeiro Clique Mágico`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança no seu computador. Dite três números para digitarem, um por célula, apertando Enter entre eles. Depois guie o gesto de clicar na célula vazia de baixo e apertar o botão Soma Automática (Autosoma no Excel, ícone Σ no Google Planilhas) e dar Enter.`,
      atividade: `Digite os números 2, 3 e 4, cada um numa casinha da mesma coluna. Depois clique na casinha vazia de baixo e aperte o botão mágico Σ para a planilha somar.`,
      gabarito: `O total que aparece é 9 (2 + 3 + 4 = 9). Se aparecer outro número, confira se foram digitados só esses três números e se o clique foi na célula vazia logo abaixo deles.`,
    },
    {
      titulo: `Quantas Figurinhas Ganhei na Semana?`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue uma folha. Cada criança desenha cinco quadradinhos em coluna (as casinhas) e escreve ou desenha figurinhas em cada um. No último quadradinho de baixo, ela escreve o total contando com a sua ajuda. É a planilha de papel antes da do computador.`,
      atividade: `Desenhe cinco casinhas, uma embaixo da outra. Em cada casinha coloque quantas figurinhas você ganhou: 3, 1, 2, 2 e 1. Na casinha de baixo, escreva quantas figurinhas dão todas juntas.`,
      gabarito: `O total é 9 figurinhas (3 + 1 + 2 + 2 + 1 = 9). O número do total vai na casinha vazia de baixo, igual à mágica faz no computador.`,
    },
    {
      titulo: `Mágica ou Não é Mágica? (Jogo do Verdadeiro ou Falso)`,
      tipo: `jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Em pé, brincadeira de placar. Leia frases sobre a aula; se for verdade as crianças levantam as mãos (mágica!), se for mentira abaixam (não é mágica!). Comemore cada acerto da turma.`,
      atividade: `O professor lê: 1) O botão Soma Automática soma os números pra gente. 2) Cada quadradinho da planilha se chama célula. 3) O botão mágico funciona em qualquer casinha, mesmo sem números. 4) O símbolo do botão mágico parece um E de pernas abertas (Σ).`,
      gabarito: `1) Verdadeiro. 2) Verdadeiro. 3) Falso, precisa ter números na coluna para o botão somar. 4) Verdadeiro, o símbolo é o Σ.`,
    },
    {
      titulo: `O Grande Desafio da Soma Secreta`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Dite um conjunto novo de números maiores e desafie cada criança a somar sozinha, com o mínimo de ajuda. Só intervenha se travar. Depois cada uma mostra o total na tela e conta para os colegas. Confira os resultados na sua tela.`,
      atividade: `Digite os números 5, 5, 5 e 5 na mesma coluna, cada um numa casinha. Use o botão mágico Σ para descobrir a soma secreta sozinho e mostre o total para os colegas.`,
      gabarito: `A soma secreta é 20 (5 + 5 + 5 + 5 = 20). Se a criança digitar três cincos em vez de quatro, o total será 15; basta acrescentar mais um 5 e somar de novo.`,
    },
  ],
};
