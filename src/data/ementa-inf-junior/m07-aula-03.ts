import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Minhas Primeiras Palavras na Célula",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Os alunos aprendem a clicar numa célula, digitar uma palavra curta ou um número, confirmar com Enter, pular para a próxima célula e apagar para corrigir quando erram.`,
  descricao: `Nas duas primeiras aulas as crianças conheceram o mapa da planilha (as linhas, as colunas e as celulinhas) e aprenderam a caçar uma célula pelo seu endereço, como B2 ou C5. Até agora elas só olharam e clicaram. Hoje chega o momento mais esperado: vamos finalmente ESCREVER dentro das células! É como ter um caderno cheio de quadradinhos vazios e, pela primeira vez, colocar palavras de verdade dentro deles.

O assunto desta aula é digitar e confirmar. A criança clica numa célula para escolhê-la (ela fica com uma borda mais grossa em volta, como se estivesse acesa), digita uma palavra curta — o próprio nome, um animal favorito — ou um número simples, como a idade, e aperta a tecla Enter para "guardar" o que escreveu. Apertar Enter é o gesto mágico que diz para o computador: "pronto, pode salvar essa palavra aqui". Sem o Enter, a palavra fica meio no ar; com o Enter, ela se acomoda dentro do quadradinho e a seleção pula para a célula de baixo.

Também aprendemos a consertar erros, e isso é muito importante para crianças de 5 a 9 anos, que ainda estão treinando as letras. Se digitou errado, dá para apagar com a tecla Backspace (apaga a última letra) ou clicar na célula e apertar Delete para limpar tudo e começar de novo. Mostrar que ERRAR É NORMAL e que o computador deixa a gente corrigir quantas vezes quiser tira o medo e deixa a turma muito mais solta para tentar.

Por fim, esta aula planta a semente da próxima: quando a criança digita o nome numa célula e a idade na célula do lado, ela está começando, sem perceber, a montar a sua primeira tabelinha. O foco de hoje é só o gesto: clicar, digitar, apertar Enter e pular para a próxima célula. Quando isso vira automático, todo o resto do mês fica fácil.`,
  materiais: [
    `Computadores ligados, um por criança, com o Excel ou o Google Planilhas já aberto numa planilha em branco, prontos para uso.`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada clique e cada tecla devagar.`,
    `Uma planilha-exemplo já preenchida pelo professor: na célula A1 o nome "Ana", em B1 a idade "7" e em C1 o animal "Gato", para mostrar o resultado pronto.`,
    `Teclados com as letras e o ENTER bem visíveis; se possível, cole um adesivo colorido ou uma setinha na tecla Enter de cada teclado.`,
    `Cartões de papel com palavras curtas e fáceis (sol, bola, gato, casa, pato) e cartões com números pequenos (1 a 10) para o jogo de digitar.`,
    `Folhas de papel quadriculado grande (uma grade de células desenhada) e lápis para a atividade de "digitar no papel".`,
    `Crachás ou etiquetas com o nome de cada criança, para quem ainda não escreve o próprio nome de cor poder copiar.`,
  ],
  conceitosChave: [
    `Célula — é cada quadradinho da planilha, o lugar onde a gente escreve uma palavra ou um número.`,
    `Selecionar — é clicar numa célula para escolhê-la; ela fica com uma borda mais grossa em volta, como se estivesse acesa e esperando você escrever.`,
    `Digitar — é apertar as letras do teclado para a palavra aparecer dentro da célula que está acesa.`,
    `Enter — é a tecla mágica que guarda o que você escreveu e faz a seleção pular para a célula de baixo.`,
    `Backspace — é a tecla que apaga a última letra que você digitou, quando errou só um pedacinho.`,
    `Delete — é a tecla que limpa a célula inteira de uma vez, para você começar a escrever de novo do zero.`,
    `Corrigir — é arrumar o que ficou errado; no computador a gente pode apagar e tentar quantas vezes quiser, sem medo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar planilhas para dar esta aula. Há só três gestos: clicar numa célula, digitar e apertar Enter. Pratique uma vez antes da aula, tanto no Excel quanto no Google Planilhas — eles funcionam quase igual. Abra uma planilha em branco, clique uma vez na célula A1 (o primeiro quadradinho do canto, onde a coluna A encontra a linha 1). Ela ganha uma borda verde ou azul mais grossa: é a célula selecionada, a célula "acesa". Digite seu nome e aperte Enter: a palavra fica guardada e a seleção desce para A2.

Saiba destas teclas para ajudar a corrigir: Backspace apaga a última letra; Delete (com a célula selecionada, sem estar digitando) limpa a célula toda; e a tecla Tab (a setinha dupla à esquerda do teclado) confirma e pula para a célula da DIREITA, em vez de para baixo. No Google Planilhas tudo é igual e o trabalho se salva sozinho; no Excel, lembre de salvar com Ctrl+S de vez em quando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula passada. No projetor, mostre a planilha vazia e peça à turma que cace a célula B2, depois A1. Confirme que todos lembram que cada quadradinho tem um endereço. Diga, animado: "Hoje a gente vai ESCREVER dentro desses quadradinhos!"

Conteúdo novo guiado (15 min): no seu computador, com o projetor ligado, faça bem devagar. Clique uma vez na célula A1 e mostre a borda grossa: "olhem, a célula acendeu". Digite seu nome, letra por letra, falando em voz alta. Aponte para a tecla Enter (a do adesivo) e aperte: "agora ela guardou e pulou para baixo". Mostre o erro de propósito: digite uma letra errada e conserte com Backspace. Depois selecione a célula e aperte Delete para limpar tudo. Por último, mostre que dá para digitar um número, como a sua idade.

Mão na massa (25 min): cada criança faz no próprio computador. Tarefa um: clicar em A1 e digitar o próprio nome, apertar Enter. Tarefa dois: em A2 digitar a idade (um número), apertar Enter. Tarefa três: em A3 digitar o animal favorito. Passe de mesa em mesa. Quem digitou errado, ajude a apagar com Backspace ou Delete e tentar de novo. Quem terminar pode escrever a cor favorita em A4.

Desafio e compartilhar (10 min): lance o desafio "escreva o nome de um amiguinho na célula B1 e aperte Enter". Depois cada criança mostra a tela e lê em voz alta o que escreveu: "Meu nome é ___, tenho ___ anos e meu animal é ___."

## Como explicar para crianças de 5 a 9 anos

Use imagens do dia a dia. A célula selecionada está "acesa", esperando você escrever, como uma lâmpada que acendeu. Apertar Enter é como fechar a gavetinha: a palavra fica guardada lá dentro e o computador desce para o próximo quadradinho sozinho. O Backspace é a "borrachinha rápida" que apaga só a última letrinha; o Delete é o "apagador grande" que limpa o quadradinho inteiro. Repita sempre: "no computador, errar é fácil de consertar". Demonstre cada gesto no projetor antes de pedir que tentem, porque nesta idade eles aprendem muito mais vendo do que ouvindo.

## Erros comuns e como ajudar

A criança digita mas esquece o Enter e a palavra parece sumir ao clicar fora: mostre que ela ainda está lá e ensine a sempre apertar Enter para guardar. A criança clica em várias células e não sabe em qual está escrevendo: aponte a borda grossa e diga "escreva só onde está aceso". Aperta letras demais e a palavra fica enorme: ensine o Backspace para apagar letra por letra. Apaga sem querer o que já estava certo: use Ctrl+Z para desfazer. Não acha a tecla Enter: por isso o adesivo colorido ajuda muito. E elogie cada tentativa, mesmo as erradas, para a turma não ter medo de digitar.`,
  exercicios: [
    {
      titulo: `Meu Nome na Célula`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto com a turma, no projetor, bem devagar. Diga cada gesto em voz alta: clicar em A1, digitar, apertar Enter. Quem ainda não escreve o nome de cor copia do crachá. Circule entre as mesas e confira a borda grossa na célula certa.`,
      atividade: `Cada criança clica na célula A1, digita o próprio nome e aperta a tecla Enter para guardar.`,
      gabarito: `Sucesso quando o nome da criança aparece escrito dentro da célula A1 e, depois do Enter, a seleção pulou para a célula A2. Não importa se o nome ficou em letras grandes ou pequenas: o importante é digitar e confirmar com Enter.`,
    },
    {
      titulo: `Corrida das Palavrinhas`,
      tipo: `Jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre um cartão por vez com uma palavra curta (sol, bola, gato, casa, pato) ou um número pequeno. A turma corre para digitar a palavra do cartão na célula que você indicar e apertar Enter. Comemore cada acerto e mantenha o ritmo leve, sem disputa.`,
      atividade: `O professor levanta um cartão com a palavra "gato". Cada criança clica na célula A1, digita "gato" e aperta Enter. Depois o professor mostra o número "5" e elas digitam na célula B1.`,
      gabarito: `Acertou quem digitou exatamente a palavra ou o número do cartão na célula indicada e apertou Enter para guardar. Por exemplo: "gato" em A1 e "5" em B1. Pequenas trocas de letra valem como tentativa; ajude a corrigir com Backspace.`,
    },
    {
      titulo: `Conserta a Letrinha`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre no projetor o conserto. Digite uma palavra com um erro de propósito (por exemplo "gatoo" com dois "o") e mostre o Backspace apagando a última letra. Depois selecione a célula e mostre o Delete limpando tudo. Reforce: errar é normal e fácil de consertar.`,
      atividade: `A criança digita a palavra "casa" na célula A1, mas de propósito coloca uma letra a mais ("casaa"). Ela usa o Backspace para apagar a letra extra e deixar "casa" certinho. Depois seleciona a célula e aperta Delete para limpar tudo.`,
      gabarito: `Certo quando a criança consegue duas coisas: corrigir a palavra para "casa" usando o Backspace e, em seguida, deixar a célula vazia usando o Delete. Saber apagar uma letrinha e saber limpar a célula inteira são os dois objetivos desta atividade.`,
    },
    {
      titulo: `Minha Planilha de Papel`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha quadriculada que representa a planilha. Peça que escrevam (ou copiem) uma palavra em cada quadradinho, como vão fazer no computador. Quem ainda não escreve bem pode desenhar e dizer a palavra. Ajude a manter uma palavra por quadradinho.`,
      atividade: `Na folha de papel quadriculado, a criança escreve o próprio nome no primeiro quadradinho, a idade no quadradinho de baixo e o animal favorito no quadradinho seguinte, uma informação por célula.`,
      gabarito: `Correto quando há uma única informação dentro de cada quadradinho, na ordem nome, idade e animal, sem misturar duas coisas no mesmo quadradinho. Vale planejar no papel o que depois será digitado na planilha de verdade.`,
    },
    {
      titulo: `Desafio: Eu em Três Células`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha o desafio final e deixe as crianças resolverem com pouca ajuda, só dando dicas. Ao terminar, faça a roda de conversa: cada uma mostra a tela e lê em voz alta o que escreveu. Elogie quem lembrou de apertar Enter e quem soube corrigir sozinho.`,
      atividade: `Cada criança preenche três células sobre ela mesma: o nome na célula A1, a idade na célula A2 e o animal favorito na célula A3, apertando Enter depois de cada uma. Depois apresenta para a turma lendo o que escreveu.`,
      gabarito: `Desafio vencido quando as três células estão preenchidas na ordem certa — nome em A1, idade em A2 e animal em A3 — cada uma confirmada com Enter, e a criança consegue ler em voz alta as três informações. Esse é o começo da primeira tabelinha, que continua na próxima aula.`,
    },
  ],
};
