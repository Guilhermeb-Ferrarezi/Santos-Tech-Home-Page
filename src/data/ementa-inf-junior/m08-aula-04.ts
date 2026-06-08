import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Contar Sem Errar",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Os alunos aprendem a usar a função de contagem para a planilha contar sozinha quantas células têm número e comparam esse resultado com a média na mesma tabelinha, entendendo a diferença entre somar tudo, achar o meio e contar quantos.`,
  descricao: `Nas aulas anteriores deste mês a turma descobriu coisas incríveis: o botão Somar junta tudo num número só, a planilha soma sozinha quando a gente usa a fórmula, e a Média acha o "meio" de um montinho de números. Hoje entra um novo poder da planilha que parece bobo, mas é muito útil: CONTAR. Contar não é somar nem achar o meio — é só descobrir QUANTOS quadradinhos têm número dentro. É como olhar para a semana e perguntar: "em quantos dias teve sol?"

O assunto desta aula é a função de contagem. No Excel e no Google Planilhas ela se chama CONT.NÚM (no Google também aparece como COUNT). A gente seleciona um pedaço da tabela — por exemplo os sete dias da semana — e a função responde com um número: quantas dessas celulinhas têm um número escrito. Se a criança anotou quantas horas de sol teve cada dia e em três dias não teve sol nenhum (célula vazia), a contagem mostra em quantos dias ela conseguiu anotar um número. É a planilha contando no lugar da gente, sem errar e sem pular nenhum.

O coração da aula é COMPARAR. Vamos usar Média e Contar na MESMA tabelinha e olhar os dois resultados lado a lado. A Média diz "no meio, cada dia teve mais ou menos tantas horas de sol"; a Contagem diz "olha, foram tantos dias com número anotado". São perguntas diferentes que dão respostas diferentes, e está tudo certo! Ver os dois números juntos ajuda a criança a perceber que cada função responde a uma pergunta sua.

Por fim, esta aula reforça com calma a diferença entre as três operações que a turma já conhece: SOMAR é juntar tudo num bolo só; achar a MÉDIA é descobrir o meio, o "valor justo" que cada um teria; e CONTAR é dizer quantos são. Três perguntas, três botões, três respostas. Quando a criança entende que ela escolhe a função conforme a pergunta que quer responder, ela está pronta para, nas próximas aulas, montar a sua própria planilha esperta que calcula sozinha.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto e a tabelinha-exemplo da semana pronta para uso.`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada clique, cada menu e cada fórmula bem devagar.`,
    `Uma planilha-exemplo já montada pelo professor: na coluna A os sete dias (Segunda a Domingo) e na coluna B as horas de sol de cada dia, com duas ou três células deixadas vazias de propósito (dias sem sol).`,
    `Cartões de papel desenhados como uma "semana": sete quadradinhos, alguns com um solzinho e um número, outros vazios (dia nublado), para o jogo de contar.`,
    `Folhas de papel quadriculado e lápis de cor para a atividade de desenhar a tabelinha e marcar quantos dias tiveram sol.`,
    `Adesivos coloridos ou setinhas para colar nas teclas e nos cantos da tela, ajudando a turma a achar os botões.`,
    `Um cartaz grande com três figuras: um bolo (Somar), uma balança no meio (Média) e dedinhos contando (Contar), para fixar a diferença.`,
  ],
  conceitosChave: [
    `Contar — é descobrir QUANTOS quadradinhos têm número dentro, sem juntar e sem achar o meio; é só dizer quantos são.`,
    `Função CONT.NÚM — é o botão mágico da planilha que conta sozinho quantas células do pedaço escolhido têm um número escrito.`,
    `Célula vazia — é o quadradinho que ficou sem nada; na contagem ele não conta, como um dia que não teve sol.`,
    `Intervalo — é o pedacinho da tabela que a gente pinta com o mouse para a função olhar, por exemplo os sete dias da semana.`,
    `Somar — é juntar todos os números num bolo só e descobrir o total.`,
    `Média — é achar o meio, o "valor justo" que cada um teria se todos fossem iguais.`,
    `Comparar — é olhar dois resultados lado a lado, como a Média e a Contagem, e ver que cada um responde a uma pergunta diferente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. A função de contar é tão fácil quanto o Somar que a turma já viu. No Excel ela se chama CONT.NÚM; no Google Planilhas, COUNT (e CONT.NÚM também funciona). Ela conta SÓ as células que têm número — células vazias ou com palavras não entram. Pratique antes da aula: monte uma coluninha com horas de sol (por exemplo B2 até B8) e deixe duas células vazias de propósito.

Para contar, clique numa célula livre embaixo da coluna, digite =CONT.NÚM( , pinte com o mouse o intervalo B2:B8, feche o parêntese e aperte Enter. O resultado é quantos daqueles dias têm número. O jeito mais fácil para crianças é o botão de soma automática: no Excel fica na aba Página Inicial, no canto direito, o ícone do somatório (a letrinha grega que parece um "E" de pernas abertas). Clique na setinha ao lado dele e escolha "Contar Números". No Google Planilhas o mesmo botão fica no canto direito da barra de cima, com o mesmo símbolo; clique na setinha e escolha COUNT.

Para a Média, é o mesmo botão: a setinha do somatório tem a opção "Média" (AVERAGE no Google). Assim a turma usa o MESMO botão para três coisas: Soma, Média e Contar. Isso facilita muito.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula da Média. No projetor, mostre a tabelinha das horas de sol e pergunte: "qual foi a média de sol da semana?" Faça a Média com a turma, relembrando o botão. Depois provoque: "e em quantos dias teve sol mesmo? Como descobrir sem contar no dedo?" Mostre o cartaz das três figuras (bolo, balança e dedinhos contando).

Conteúdo novo guiado (15 min): no seu computador, clique numa célula livre embaixo da coluna das horas de sol. Clique na setinha ao lado do botão do somatório e escolha "Contar Números" (Excel) ou COUNT (Google). Pinte o intervalo dos sete dias com o mouse e aperte Enter. Mostre o resultado e diga: "olha, a planilha contou que teve número em tantos dias, e ela não pulou nenhum nem contou os vazios". Apague um número de um dia e mostre a contagem diminuir sozinha. Por fim, deixe a Média e a Contagem visíveis lado a lado e compare: "este diz o meio, este diz quantos".

Mão na massa (25 min): cada criança na sua tabelinha. Tarefa um: achar a Média das horas de sol com o botão. Tarefa dois: numa célula ao lado, achar a Contagem com o mesmo botão. Tarefa três: comparar os dois números e dizer em voz alta o que cada um significa. Passe de mesa em mesa. Quem terminar pode apagar um dia e ver a contagem mudar.

Desafio e compartilhar (10 min): lance o desafio "quantos dias choveu?" numa coluna nova e peça a contagem. Depois cada criança mostra a tela e diz: "a média de sol foi ___ e teve sol em ___ dias".

## Como explicar para crianças de 5 a 9 anos

Use a semana de verdade. Desenhe sete quadradinhos: alguns têm solzinho com um número, outros estão nublados e vazios. "Quantos dias teve sol?" é exatamente o que a função Contar responde. Diga que Contar é como a professora batendo o olho e dizendo "tem cinco crianças aqui hoje" — não soma idades, não acha o meio, só diz quantas são. Repita a comparação com gestos: junte as mãos para Somar (um bolo só), faça uma balança equilibrando para Média (o meio), e conte nos dedinhos para Contar (quantos). Demonstre tudo no projetor antes de pedir que tentem.

## Erros comuns e como ajudar

A criança espera que Contar dê o total das horas e estranha o número pequeno: explique que Contar diz QUANTOS dias, não quantas horas no total — isso é a Soma. A criança pinta o intervalo errado ou pula um dia: ajude a pintar do primeiro ao último dia devagar. Conta uma célula com palavra (como "Segunda") e acha estranho: lembre que CONT.NÚM conta só números, por isso o título não entra. Confunde Média com Contagem: ponha os dois resultados lado a lado e pergunte "qual diz o meio e qual diz quantos?". Esquece de apertar Enter e a fórmula não funciona: reforce o Enter. E elogie cada tentativa para a turma não ter medo de testar.`,
  exercicios: [
    {
      titulo: `Quantos Dias Teve Sol?`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto no projetor, bem devagar. Mostre a coluna com as horas de sol e as células vazias dos dias nublados. Clique na setinha do botão do somatório e escolha "Contar Números" (Excel) ou COUNT (Google), pinte os sete dias e aperte Enter. Circule entre as mesas conferindo o intervalo.`,
      atividade: `Na tabelinha das horas de sol, cada criança clica numa célula livre embaixo da coluna, usa o botão Contar, pinta os sete dias da semana e aperta Enter para ver em quantos dias teve sol anotado.`,
      gabarito: `Sucesso quando aparece um número que mostra QUANTOS dias têm número anotado, ignorando os dias vazios. Por exemplo: se quatro dias têm horas de sol e três ficaram vazios, a contagem deve mostrar 4. O importante é a criança ver que a planilha conta sozinha e não conta os quadradinhos vazios.`,
    },
    {
      titulo: `Caça aos Dias de Sol`,
      tipo: `Jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Use os cartões da "semana" com sete quadradinhos, alguns com solzinho e número, outros vazios. Levante um cartão por vez e a turma conta em voz alta quantos têm sol. Depois confira fazendo a contagem na planilha no projetor e comemore quando bater. Mantenha o ritmo leve, sem disputa.`,
      atividade: `O professor mostra um cartão de semana com sol em quatro quadradinhos e três vazios. As crianças dizem em voz alta "quatro dias!" e, em seguida, fazem a função Contar na planilha para confirmar que o resultado também é 4.`,
      gabarito: `Acertou quem disse o mesmo número que a função Contar deu na planilha. No exemplo do cartão com quatro sóis, a resposta certa é 4, tanto na contagem das crianças quanto na função. Pequenas hesitações valem como tentativa; ajude a recontar apontando cada quadradinho.`,
    },
    {
      titulo: `Média e Contar na Mesma Tabela`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre no projetor as duas funções lado a lado na mesma tabelinha. Use o botão do somatório para Média numa célula e para Contar na célula ao lado. Aponte os dois resultados e pergunte "qual diz o meio? qual diz quantos?". Reforce que cada função responde a uma pergunta diferente e que está tudo certo darem números diferentes.`,
      atividade: `Na tabelinha das horas de sol, a criança calcula a Média numa célula e a Contagem na célula ao lado. Depois diz em voz alta o que cada número significa: "a média de sol foi tantas horas" e "teve sol em tantos dias".`,
      gabarito: `Correto quando aparecem os dois resultados na mesma tabela e a criança consegue explicar a diferença com as próprias palavras: a Média mostra o "meio" das horas de sol e a Contagem mostra QUANTOS dias tiveram número. Não importa se os números são diferentes — o objetivo é justamente perceber que são perguntas diferentes.`,
    },
    {
      titulo: `Minha Semana de Papel`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha quadriculada e os lápis de cor. Peça que desenhem sete quadradinhos como os dias da semana, pintem um solzinho com um número nos dias ensolarados e deixem vazios os dias nublados. No fim, peça que contem no dedo quantos dias têm sol e escrevam esse número embaixo, como a planilha faria.`,
      atividade: `Na folha de papel, a criança desenha a sua própria semana: escolhe quais dias tiveram sol (desenha o sol e um número de horas) e quais ficaram nublados (quadradinho vazio). Depois conta quantos dias tiveram sol e escreve esse número no final.`,
      gabarito: `Correto quando há sete quadradinhos representando os dias, alguns com sol e número e outros vazios, e o número escrito no final corresponde exatamente à quantidade de quadradinhos com sol. Por exemplo: se a criança desenhou sol em cinco dias, o número final deve ser 5. Esse é o mesmo resultado que a função Contar daria.`,
    },
    {
      titulo: `Desafio: Quantos Dias Choveu?`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio final e deixe a turma resolver com pouca ajuda, só dando dicas. Numa coluna nova ("Chuva"), as crianças anotam um número de horas de chuva em alguns dias e deixam outros vazios. Depois usam a função Contar para descobrir em quantos dias choveu. Faça a roda de conversa no fim, cada uma mostrando a tela.`,
      atividade: `Cada criança cria uma coluninha de chuva ao lado da de sol, anota horas de chuva em alguns dias e deixa outros vazios. Em seguida usa a função Contar nessa coluna para descobrir em quantos dias choveu e apresenta para a turma dizendo "teve sol em ___ dias e choveu em ___ dias".`,
      gabarito: `Desafio vencido quando a contagem da coluna de chuva mostra exatamente quantos dias têm número de chuva anotado, ignorando os vazios, e a criança consegue dizer em voz alta os dois resultados — dias de sol e dias de chuva. Por exemplo: se anotou chuva em dois dias, a contagem deve ser 2. Isso mostra que ela aprendeu a escolher a função Contar para responder à pergunta "quantos?".`,
    },
  ],
};
