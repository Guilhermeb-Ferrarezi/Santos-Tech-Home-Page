import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Criando uma coleção com estilo único",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Gerar várias imagens no ChatGPT com DALL-E mantendo o mesmo estilo e a mesma paleta de cores, para que pareçam do mesmo universo, e selecionar as melhores artes conceituais para a galeria final.`,
  descricao: `Nesta aula, os alunos saem de gerar imagens soltas e passam a pensar como artistas de um jogo de verdade: tudo precisa parecer do mesmo mundo. Quando um personagem, um cenário e um item têm o mesmo estilo visual e as mesmas cores, dizemos que existe coerência visual. É isso que faz um jogo parecer profissional, e não uma colcha de retalhos de imagens que não combinam entre si.

O coração da aula é a repetição inteligente do prompt. Em vez de escrever um pedido novo do zero a cada vez, o aluno cria um "miolo de estilo": um trecho de texto com o estilo, a paleta de cores e a iluminação que se repete em todas as imagens. Só muda o objeto principal (ora um herói, ora uma poção, ora uma floresta). Assim, a IA entende que todas as artes pertencem à mesma família. No ChatGPT isso fica ainda mais fácil, porque dá para pedir variações na mesma conversa e a IA lembra do estilo combinado.

Os alunos também aprendem a olhar com olhos de curador. Gerar dez imagens é fácil; escolher as três ou quatro melhores é a parte difícil e importante. Eles vão comparar as artes lado a lado e perguntar: estas combinam? Têm as mesmas cores? Parecem do mesmo jogo? As que destoam são descartadas ou geradas de novo. Essa seleção é o que vai virar a galeria do mês.

Ao final, cada aluno terá uma pequena coleção (de três a cinco imagens) com identidade visual clara: mesmas cores, mesmo estilo, mesmo clima. Não é só um monte de desenhos bonitos; é um conjunto que conta uma história visual e mostra que o aluno sabe controlar a IA para servir a uma ideia, e não o contrário.`,
  materiais: [
    `Computadores com acesso ao ChatGPT (com DALL-E para gerar imagens), um por aluno, já logados antes da aula`,
    `Conta no ChatGPT pronta e testada com cada turma (verifique se a geração de imagem está disponível na conta)`,
    `Projetor ou TV para o professor demonstrar a tela do ChatGPT e mostrar os prompts ao vivo`,
    `Pasta de exemplo com 2 conjuntos prontos: um com coerência visual (combina) e outro bagunçado (não combina), para comparar`,
    `Cartão de paleta impresso ou slide com 4 ou 5 cores fixas (com os códigos, por exemplo azul-noite, laranja-fogo) para os alunos escolherem`,
    `Folha de seleção (curadoria) com espaços para colar ou anotar as 3 a 5 imagens escolhidas e o porquê de cada uma`,
    `Local combinado para salvar as imagens (uma pasta no computador com o nome do aluno) para montar a galeria nas próximas aulas`,
  ],
  conceitosChave: [
    `Coerência visual — quando várias imagens combinam entre si por terem o mesmo estilo, cores e clima, parecendo do mesmo mundo.`,
    `Paleta de cores — o conjunto de poucas cores escolhidas que se repete em todas as artes para dar unidade à coleção.`,
    `Estilo — o jeito do desenho (por exemplo, pixel art, cartoon, aquarela, 3D), que deve ser o mesmo em toda a coleção.`,
    `Coleção (série) — um grupo de imagens feitas para andar juntas, contando uma mesma ideia visual.`,
    `Miolo de estilo — o trecho do prompt que descreve estilo, paleta e luz e que se repete igual em todos os pedidos, mudando só o objeto.`,
    `Curadoria — o ato de escolher, entre várias imagens, as melhores que combinam, descartando as que destoam.`,
    `Variação — uma nova versão de uma imagem feita pela IA, mantendo o estilo, mas mudando o objeto ou o ângulo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar a IA. A ideia central é simples: para as imagens combinarem, o aluno repete a mesma "receita de estilo" e só troca o ingrediente principal. No ChatGPT, a geração de imagem acontece dentro da conversa: o aluno digita o pedido na caixa de mensagem (embaixo, onde está escrito "Pergunte alguma coisa") e a imagem aparece logo acima, no fio da conversa. Para baixar, basta passar o mouse sobre a imagem e clicar no ícone de download (uma setinha para baixo) no canto. O grande truque do ChatGPT é a memória da conversa: depois da primeira imagem, o aluno pode escrever "agora faça outra no mesmo estilo, mas com uma poção mágica" e a IA mantém as cores e o traço. Teste tudo antes da aula com a conta da turma.

## Passo a passo da aula

Aquecimento (10 min): No projetor, mostre os dois conjuntos de exemplo. O primeiro combina (mesmas cores e traço); o segundo é bagunçado (cada imagem de um jeito). Pergunte: "Qual parece um jogo de verdade? Por quê?". Conduza até a palavra coerência visual. Apresente o objetivo do dia: criar uma coleção que combine.

Conteúdo novo guiado (15 min): Abra o ChatGPT e escreva ao vivo um prompt com miolo de estilo, por exemplo: "Crie uma arte conceitual de um herói, estilo cartoon, cores azul-noite e laranja-fogo, luz suave do entardecer, fundo simples". Gere a imagem. Depois, na mesma conversa, escreva: "Agora, no mesmo estilo e nas mesmas cores, faça uma poção mágica". Mostre como a segunda imagem combina com a primeira. Repita uma terceira vez com "uma floresta". Aponte na tela que só o objeto mudou; o miolo de estilo ficou igual.

Mão na massa (25 min): Cada aluno escolhe uma paleta do cartão e um estilo. Escreve seu próprio miolo de estilo e gera de quatro a seis imagens na mesma conversa, mudando só o objeto (personagem, item, cenário, inimigo). Oriente a sempre escrever "no mesmo estilo e nas mesmas cores". Circule pela sala ajudando quem se perder. Peça que salvem todas as imagens na pasta com o nome deles.

Desafio + compartilhar (10 min): Cada aluno faz a curadoria: escolhe as 3 a 5 imagens que mais combinam e descarta as que destoam, anotando o porquê na folha de seleção. Dois ou três voluntários mostram a coleção no projetor e explicam a escolha.

## Como explicar de forma clara

Use a comparação do uniforme: numa equipe, todos vestem as mesmas cores para a gente saber que são do mesmo time. As imagens da coleção são o "time", e a paleta é o "uniforme". Diga que o miolo de estilo é como uma "receita de bolo": você usa a mesma massa e só muda a cobertura. Mostre antes de mandar fazer e fale devagar enquanto digita o prompt no projetor. Evite termos difíceis; prefira "a parte do texto que não muda" em vez de "trecho fixo do prompt". Reforce que escolher é tão importante quanto criar: um bom artista joga fora o que não combina.

## Erros comuns e como ajudar

O erro mais comum é o aluno reescrever todo o prompt do zero a cada imagem, mudando o estilo sem querer; ensine a copiar e colar o miolo de estilo ou a pedir "no mesmo estilo" dentro da mesma conversa. Outro erro é usar cores demais: lembre que poucas cores (quatro ou cinco) dão mais unidade. Muitos abrem uma conversa nova a cada imagem e perdem a memória do estilo; oriente a manter tudo na mesma conversa. Há quem ache que todas as dez imagens precisam entrar na galeria; explique que selecionar as melhores é o objetivo, não acumular. Por fim, alguns esquecem de salvar; circule lembrando de baixar cada imagem boa na pasta com o nome deles.`,
  exercicios: [
    {
      titulo: `Meu miolo de estilo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Ajude cada aluno a escolher uma paleta do cartão e um estilo. Confira se o prompt traz estilo, cores e luz juntos antes de gerar.`,
      atividade: `Escreva um único prompt no ChatGPT com seu miolo de estilo (estilo, paleta de cores e iluminação) e gere a primeira imagem da sua coleção.`,
      gabarito: `O aluno tem uma imagem gerada e um prompt escrito que cita claramente o estilo, de quatro a cinco cores da paleta e o tipo de luz. O miolo de estilo está pronto para ser reaproveitado.`,
    },
    {
      titulo: `Mesma família, objetos diferentes`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Reforce que tudo deve ficar na mesma conversa. Verifique se o aluno escreve "no mesmo estilo e nas mesmas cores" e só troca o objeto.`,
      atividade: `Na mesma conversa, gere mais três imagens mudando só o objeto principal (por exemplo: personagem, item e cenário), mantendo o miolo de estilo igual.`,
      gabarito: `Existem ao menos quatro imagens na mesma conversa. Todas têm o mesmo traço e as mesmas cores; apenas o objeto muda. As artes claramente parecem do mesmo universo.`,
    },
    {
      titulo: `Olho de curador`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como comparar as imagens lado a lado. Incentive descartar sem dó as que destoam e a justificar cada escolha por escrito.`,
      atividade: `Olhe todas as suas imagens e selecione as 3 a 5 que mais combinam para a galeria. Anote na folha de seleção por que cada uma entrou e por que as outras saíram.`,
      gabarito: `O aluno escolheu de três a cinco imagens coerentes entre si e escreveu uma justificativa para cada escolha e para cada descarte, citando estilo ou paleta como critério.`,
    },
    {
      titulo: `Teste do combina ou não combina`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente um olhar honesto e gentil: apontar o que combina e o que destoa na coleção do colega, sem julgar a pessoa.`,
      atividade: `Troque de lugar com o colega, olhe a coleção dele e diga qual imagem combina menos e por quê. Depois, sugira um ajuste no prompt para ela combinar.`,
      gabarito: `A dupla identificou pelo menos uma imagem que destoa em cada coleção e propôs uma mudança concreta no prompt (cor, estilo ou luz) para deixá-la coerente com as demais.`,
    },
    {
      titulo: `Gerar a versão que faltava`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe o aluno a refazer a imagem fraca usando o mesmo miolo de estilo. Garanta que a nova versão seja salva na pasta com o nome dele.`,
      atividade: `Pegue a imagem que menos combinava e gere uma nova versão dela usando o seu miolo de estilo, até que ela fique no clima da coleção. Salve a versão final na sua pasta.`,
      gabarito: `Existe uma nova imagem que substitui a que destoava, agora com o mesmo estilo e paleta da coleção. A versão final está salva na pasta do aluno e a coleção ficou coerente do começo ao fim.`,
    },
  ],
};
