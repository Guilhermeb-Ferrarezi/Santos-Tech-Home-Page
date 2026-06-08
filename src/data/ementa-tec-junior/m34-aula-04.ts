import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Variações: O Mesmo Item, Cores Diferentes",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar três variações da mesma moeda (dourada, prateada e de bronze) trocando apenas as cores, entendendo que cor mostra a raridade de um item no jogo.`,
  descricao: `Nesta aula a turma descobre um truque poderoso de quem faz jogos de verdade: aproveitar um modelo que já existe para criar vários itens novos só trocando as cores. Em vez de modelar uma moeda do zero três vezes, a criança modela (ou usa a moeda que já fez) uma única vez, faz duas cópias e pinta cada uma de um jeito. Nasce assim a moeda dourada, a moeda prateada e a moeda de bronze. É o mesmo formato, com roupas de cores diferentes.

A ideia principal por trás disso é a raridade. Em quase todo jogo, alguns itens valem mais que outros, e a cor conta essa história sem precisar de uma única palavra. O dourado costuma ser o item mais valioso e mais difícil de achar; o prateado vem no meio; o bronze é o mais comum, aquele que aparece a toda hora. Quando a criança entende isso, ela para de escolher cor "porque é bonita" e começa a escolher cor "porque significa alguma coisa para o jogador".

Para manter tudo organizado, vamos guardar essas três cores numa paleta própria, reutilizável. Em vez de procurar o tom de dourado certo toda vez, a criança salva as cores favoritas na paleta do MagicaVoxel e pode usá-las de novo em qualquer outro asset, garantindo que todas as moedas do jogo combinem entre si. É como ter um estojo de lápis de cor sempre do mesmo jeito, com os tons certinhos já separados.

Ao final da aula, cada aluno terá três moedas iguais no formato e diferentes na cor, salvas como três arquivos, mais uma paleta de raridade guardada. Esse conjunto entra direto no pacote de assets que a turma está montando ao longo do mês.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o modelo de uma moeda pronto (ou um arquivo de moeda salvo da aula anterior)`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos impressos ou na tela: as três moedas (dourada, prateada e de bronze) lado a lado`,
    `Uma paleta de cores de raridade já preparada pelo professor para mostrar como fica`,
    `Cartão visual de raridade: dourado = raro, prateado = médio, bronze = comum`,
    `Uma pasta criada para cada criança salvar os três arquivos da moeda`,
  ],
  conceitosChave: [
    `Variação — o mesmo item criado de novo com uma diferença, como a cor, sem mudar o formato.`,
    `Cópia — repetir um modelo que já existe para não ter que fazer tudo de novo do zero.`,
    `Raridade — o quanto um item é difícil de achar no jogo; quanto mais raro, mais valioso.`,
    `Paleta — o estojo de cores do MagicaVoxel onde a gente guarda os tons que mais usa.`,
    `Dourado, prateado e bronze — as três cores que mostram se a moeda é rara, média ou comum.`,
    `Reutilizar — usar de novo uma cor ou um modelo que a gente já tem guardado.`,
    `Salvar com outro nome — guardar uma cópia do arquivo com um nome novo para não apagar o antigo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o MagicaVoxel para dar esta aula. O trabalho técnico é simples: abrir uma moeda pronta, fazer cópias e trocar a cor. Antes da aula, abra o MagicaVoxel e tenha uma moeda na cena (um disco achatado feito de voxels já basta).

Três áreas da tela importam aqui. À esquerda fica a "Palette" (paleta), uma grade de quadradinhos coloridos; cada quadradinho é uma cor. À direita ficam os "Brush" e as ferramentas, mas o que mais vamos usar é a ferramenta "Paint" (pincel) e o "Bucket"/"Fill" (balde, que pinta tudo de uma cor de uma vez). Embaixo, na barra de "Projects", ficam os botões "Save" (salvar) e "Save As" (salvar como, para guardar com outro nome).

O conceito central é raridade: dourado é raro e valioso, prateado é médio, bronze é comum. A cor conta isso sozinha. Guarde isso numa frase simples para repetir com as crianças: "A cor é o crachá do item: ela diz se ele é raro ou comum".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor as três moedas lado a lado. Pergunte: "Qual delas vocês acham que vale mais no jogo? Por quê?". Deixe a turma adivinhar. Conduza até a ideia de que a dourada é a mais rara. Relembre a moeda que eles já fizeram na semana passada.

Conteúdo novo guiado (15 min): No seu computador, com a moeda aberta, ensine a copiar. Selecione o modelo todo (no menu do objeto, use "Select All" ou aperte Ctrl+A), copie com Ctrl+C e cole com Ctrl+V; arraste a cópia para o lado para não ficar em cima da original. Agora a parte da cor: na "Palette" à esquerda, clique em uma cor dourada (se não tiver, dê dois cliques num quadradinho para abrir o seletor e escolha um amarelo-ouro). Pegue a ferramenta "Bucket"/"Fill" (o balde) e clique na moeda copiada: ela inteira fica dourada de uma vez. Repita o raciocínio explicando que faremos a prateada (cinza claro) e a de bronze (marrom-alaranjado). Por fim, mostre como guardar a cor: dê dois cliques num quadradinho vazio da paleta, escolha o tom e ele fica salvo ali para reusar.

Mão na massa (25 min): Cada criança abre a própria moeda. Faz duas cópias (ficam três moedas no total). Pinta a primeira de dourado, a segunda de prateado e a terceira de bronze, usando o balde. Conforme escolhem cada tom, salvam a cor num quadradinho da paleta, montando a paleta de raridade. Depois salvam cada moeda como um arquivo: use "Save As" e nomes claros como "moeda-dourada", "moeda-prateada" e "moeda-bronze". Circule pela sala ajudando quem pinta fora ou esquece de salvar.

Desafio e compartilhar (10 min): Desafie quem terminou a inventar uma quarta moeda "secreta" e mais rara (por exemplo, uma colorida ou brilhante) e dizer por que ela seria a mais valiosa. Façam uma roda rápida: cada um mostra as três moedas no projetor e diz qual é a rara, a média e a comum.

## Como explicar para crianças

Use a analogia da roupa: "É a mesma moeda, mas com roupas de cores diferentes". Para a raridade, use o crachá: "A cor é o crachá que diz se a moeda é difícil de achar". Para a paleta, fale do estojo: "Guardamos nossos tons favoritos no estojo de cores para usar de novo". Para a cópia, diga: "Não vamos fazer tudo de novo do zero; vamos copiar a que já temos, igual a uma fotocópia".

## Erros comuns e como ajudar

A criança pinta voxel por voxel e demora demais: mostre de novo o balde "Fill", que pinta tudo de uma vez. A criança pinta em cima da moeda errada (a original): lembre de arrastar a cópia para longe antes de pintar e de conferir qual está selecionada. A criança escolhe três tons quase iguais: coloque as três moedas lado a lado e pergunte se dá para diferenciar de longe; se não der, troque por cores mais distintas. A criança salva por cima e perde uma versão: reforce o "Save As" com nome novo para cada moeda, nunca o "Save" simples. A criança esquece de guardar a cor na paleta: pare a turma e faça todos darem dois cliques num quadradinho vazio juntos, como um ritual.`,
  exercicios: [
    {
      titulo: `Quem vale mais?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre as três moedas (dourada, prateada e de bronze) no projetor. Pergunte qual vale mais e por quê. Conduza a turma até a ideia de que a cor mostra a raridade: dourado raro, prata médio, bronze comum.`,
      atividade: `Olhe as três moedas na tela. Qual delas você acha que é a mais rara e valiosa do jogo? E a mais comum, aquela que aparece toda hora? Explique a sua escolha.`,
      gabarito: `A criança aponta a moeda dourada como a mais rara e valiosa e a de bronze como a mais comum, ligando a cor à raridade. Exemplo de resposta certa: "A dourada vale mais porque é difícil de achar, e a de bronze é comum". Aceitar qualquer explicação que ligue cor a valor.`,
    },
    {
      titulo: `Copiar a moeda`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como selecionar o modelo (Ctrl+A ou "Select All"), copiar (Ctrl+C) e colar (Ctrl+V), e arrastar a cópia para o lado. A criança precisa terminar com duas moedas iguais na cena, lado a lado.`,
      atividade: `Abra a sua moeda no MagicaVoxel. Selecione ela toda, copie e cole. Arraste a cópia para o lado para ficarem duas moedas iguais, uma do lado da outra.`,
      gabarito: `A cena fica com duas moedas idênticas, separadas, sem uma em cima da outra. Acerto = saber copiar e colar sem refazer a moeda do zero. Erro comum: a cópia nasce em cima da original; basta arrastá-la para o lado.`,
    },
    {
      titulo: `Pintar com o balde`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a ferramenta "Bucket"/"Fill" (balde). A criança escolhe uma cor dourada na "Palette" à esquerda e clica na moeda copiada para deixá-la dourada de uma vez. Reforce usar o balde, e não pintar voxel por voxel.`,
      atividade: `Escolha uma cor dourada na paleta da esquerda. Pegue a ferramenta balde (Fill) e clique na sua moeda copiada para deixar ela toda dourada de uma vez só.`,
      gabarito: `A moeda copiada fica inteira dourada com um clique do balde. Acerto = usar o "Fill" em vez de pintar quadradinho por quadradinho. Sinal de erro: pintar só uma parte; o balde deveria preencher tudo de uma vez.`,
    },
    {
      titulo: `Trio de raridade`,
      tipo: `Desafio no MagicaVoxel`,
      tempo: `10 minutos`,
      guiaProfessor: `Agora as três moedas: dourada, prateada (cinza claro) e de bronze (marrom-alaranjado). A criança faz a terceira cópia, pinta cada uma e salva cada cor num quadradinho vazio da paleta, montando a paleta de raridade.`,
      atividade: `Faça três moedas: uma dourada, uma prateada e uma de bronze. Pinte cada uma com o balde e guarde cada cor num quadradinho vazio da paleta, dando dois cliques nele.`,
      gabarito: `Três moedas com cores bem diferentes (dourado, prata e bronze, dá para distinguir de longe) e três cores salvas na paleta. Acerto = as três variações prontas mais a paleta de raridade montada. Se os tons ficarem parecidos, trocar por cores mais distintas.`,
    },
    {
      titulo: `Salvar e batizar a quarta moeda`,
      tipo: `Desafio final`,
      tempo: `7 minutos`,
      guiaProfessor: `A criança salva cada moeda com "Save As" e nomes claros (moeda-dourada, moeda-prateada, moeda-bronze). Quem terminar inventa uma quarta moeda "secreta" mais rara e diz por que seria a mais valiosa. Reforce nunca usar "Save" por cima.`,
      atividade: `Use "Save As" para salvar cada moeda com seu nome: moeda-dourada, moeda-prateada e moeda-bronze. Se sobrar tempo, invente uma quarta moeda secreta, ainda mais rara, e diga por que ela vale mais que a dourada.`,
      gabarito: `Três arquivos salvos com nomes diferentes pelo "Save As", sem apagar nenhuma versão. A quarta moeda é opcional, mas a criança deve explicar a raridade dela. Exemplo: "A moeda arco-íris é a mais rara porque quase nunca aparece e vale o dobro da dourada".`,
    },
  ],
};
