import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Edição Inteligente com Magic Studio",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Usar as ferramentas de IA do Magic Studio do Canva (Magic Eraser, Magic Edit, removedor de fundo e Magic Design) para refinar e acelerar projetos visuais reais.`,
  descricao: `Nas aulas anteriores o aluno já criou apresentações e infográficos e descobriu como a IA do Canva gera textos e imagens. Nesta aula damos um passo além: em vez de criar do zero, vamos editar imagens que já existem usando inteligência artificial. O Magic Studio é o conjunto de ferramentas de IA do Canva, e ele permite consertar, transformar e melhorar fotos com poucos cliques, sem precisar de programas complicados como o Photoshop.

O foco são quatro ferramentas. O Magic Eraser (Borracha Mágica) apaga objetos indesejados de uma foto, como uma lixeira no fundo de uma paisagem. O Magic Edit (Edição Mágica) faz o contrário: você seleciona uma parte da imagem e descreve, com palavras, o que quer colocar no lugar (por exemplo, trocar uma camiseta por um casaco). O removedor de fundo (Remover fundo) deixa só o objeto principal e apaga todo o resto, perfeito para recortar uma pessoa ou um produto. E o Magic Design gera layouts prontos a partir de uma ideia ou de uma imagem enviada.

Para adolescentes, isso é poderoso porque resolve um problema real: quase nunca a foto que temos está perfeita. Tem alguém atravessando no fundo, a cor não combina, o objeto está no lugar errado. Com o Magic Studio o aluno corrige tudo isso em segundos e deixa o trabalho dele com cara de profissional.

A aula é prática do começo ao fim. Cada aluno vai pegar uma imagem de exemplo (ou uma do próprio projeto do mês) e aplicar as quatro ferramentas, comparando o antes e o depois. No final, todos compartilham a edição que mais transformou a imagem. O resultado já entra direto no material visual completo que é o entregável deste mês.`,
  materiais: [
    `Computadores com o Canva aberto no navegador (canva.com) e o aluno logado na conta da escola`,
    `Projetor ou tela grande para o professor demonstrar cada ferramenta passo a passo`,
    `Pasta compartilhada com 3 a 4 imagens de exemplo para editar (uma paisagem com um objeto sobrando, uma foto de pessoa ou produto para recortar, uma foto com algo a trocar)`,
    `Conta Canva com acesso ao Magic Studio (a versão gratuita oferece algumas edições por mês; a conta da escola, sendo Canva for Education ou Pro, libera o uso completo)`,
    `Conexão de internet estável, pois as ferramentas de IA processam as imagens online`,
    `Fones de ouvido opcionais, caso algum aluno traga vídeo ou material com áudio`,
    `Projetos do mês de cada aluno salvos no Canva, para aplicar as edições no trabalho real`,
  ],
  conceitosChave: [
    `Magic Studio — conjunto de ferramentas de inteligência artificial do Canva para criar e editar imagens, texto e design.`,
    `Magic Eraser (Borracha Mágica) — ferramenta que apaga objetos indesejados de uma foto pintando por cima deles com o pincel.`,
    `Magic Edit (Edição Mágica) — ferramenta em que você seleciona uma área da imagem e descreve em palavras o que quer colocar no lugar.`,
    `Removedor de fundo — recurso que apaga todo o fundo de uma imagem e deixa apenas o objeto ou a pessoa principal.`,
    `Magic Design — ferramenta que gera layouts e modelos prontos a partir de uma ideia escrita ou de uma imagem enviada.`,
    `Prompt — a instrução em palavras que você dá para a IA, descrevendo exatamente o que quer que ela faça.`,
    `Resolução — a quantidade de detalhes de uma imagem; quanto maior, mais nítida ela fica ao ampliar ou imprimir.`,
  ],
  treinamento: `## O que o professor precisa saber

O Magic Studio fica dentro do editor de imagens do Canva. Você não precisa instalar nada: tudo acontece no navegador. As ferramentas de IA aparecem quando você clica em uma imagem e abre o botão "Editar foto" (ou "Editar imagem"), no topo da tela. Lá dentro existe uma seção chamada Magic Studio com a Borracha Mágica, a Edição Mágica e o Remover fundo. O Magic Design fica na tela inicial do Canva, no campo grande de busca. Antes da aula, faça você mesmo cada edição uma vez. Saiba que a IA processa online e pode levar alguns segundos, e que às vezes o primeiro resultado não fica bom: basta clicar em "Gerar novamente". Não há resposta única, e isso é normal.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra uma foto de exemplo no projetor e pergunte: "O que está atrapalhando nessa imagem?". Os alunos vão apontar o objeto sobrando, o fundo bagunçado. Diga que hoje vamos consertar tudo isso com IA, em segundos. Relembre rapidamente que na Aula 3 a IA criou imagens; hoje ela vai editar imagens que já existem.

Conteúdo novo guiado (15 min). Com a foto aberta, clique nela e depois em "Editar foto" no topo. Mostre a seção Magic Studio. Primeiro a Borracha Mágica: clique nela, ajuste o tamanho do pincel na barra lateral e pinte por cima do objeto indesejado; solte o mouse e a IA apaga. Depois o Remover fundo: clique no botão e o fundo some sozinho. Em seguida a Edição Mágica: clique, pinte a área que quer trocar, escreva no campo de texto o prompt (por exemplo "um casaco vermelho") e clique em "Gerar". Por fim, na tela inicial, mostre o Magic Design: digite uma ideia ou envie uma imagem e veja os layouts prontos aparecerem.

Mão na massa (25 min). Cada aluno abre uma imagem de exemplo ou uma do próprio projeto. Peça para usarem as três ferramentas de edição em ordem: apagar algo com a Borracha Mágica, recortar com o Remover fundo e trocar um detalhe com a Edição Mágica. Circule pela sala. Quando a IA errar, mostre o botão "Gerar novamente" e ensine a escrever o prompt com mais detalhes. Lembre-os de salvar (o Canva salva sozinho, mas peça para conferir o nome do projeto).

Desafio e compartilhar (10 min). Lance o desafio: usar o Magic Design para gerar um layout a partir da imagem que acabaram de editar. Depois, cada aluno mostra à turma o antes e o depois da edição que mais transformou a foto, explicando qual ferramenta usou e qual prompt escreveu.

## Como explicar de forma clara (linguagem para a idade)

Compare as ferramentas com coisas que eles conhecem. A Borracha Mágica é como apagar com borracha, só que a IA preenche o buraco sozinha. O Remover fundo é como recortar uma figurinha com tesoura, mas sem precisar ter mão firme. A Edição Mágica é como pedir para um amigo desenhista: você descreve e ele desenha. Reforce a ideia de prompt: "quanto mais você explica para a IA, melhor ela entende". Diga que errar e tentar de novo faz parte, igual em um jogo.

## Erros comuns e como ajudar

O aluno pinta uma área grande demais e a borracha apaga o que não devia: ensine a diminuir o pincel e pintar só o objeto. A Edição Mágica gera algo estranho porque o prompt foi vago, como "uma coisa legal": ajude a escrever um prompt específico, com cor, objeto e estilo. O Remover fundo come parte do cabelo ou da borda: mostre que dá para refinar ou apenas gerar de novo. A IA demora e o aluno acha que travou: explique que está processando online e que basta esperar. E quem acabar a edição rápido pode aplicar tudo de novo em outra imagem do próprio projeto.`,
  exercicios: [
    {
      titulo: `Apagando o que sobra com a Borracha Mágica`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua a imagem de paisagem com um objeto sobrando. Mostre no projetor o caminho "clicar na imagem, Editar foto, Magic Studio, Borracha Mágica". Lembre de ajustar o tamanho do pincel antes de pintar.`,
      atividade: `Abra a imagem de exemplo, entre em Editar foto e use a Borracha Mágica para apagar o objeto indesejado do fundo. Compare o antes e o depois.`,
      gabarito: `O aluno deve clicar na imagem, abrir "Editar foto", escolher a Borracha Mágica, ajustar o pincel, pintar por cima do objeto e soltar o mouse. A IA preenche o espaço e o objeto desaparece sem deixar um buraco visível. Espera-se que o aluno reconheça que precisa diminuir o pincel se apagar demais.`,
    },
    {
      titulo: `Recortando com o Removedor de fundo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Use a foto de uma pessoa ou de um produto. Mostre que o botão Remover fundo faz o recorte com um clique. Explique que dá para colocar essa figura recortada sobre qualquer outro fundo depois.`,
      atividade: `Abra a foto da pessoa ou do produto, vá em Editar foto e clique em Remover fundo. Depois, coloque a imagem recortada sobre um fundo de cor diferente.`,
      gabarito: `O aluno entra em "Editar foto", clica em "Remover fundo" e o fundo some, deixando só o objeto principal. Ao colocar uma cor de fundo atrás, o recorte fica destacado. Caso a borda fique imperfeita, o aluno deve perceber que pode gerar de novo ou refinar.`,
    },
    {
      titulo: `Trocando um detalhe com a Edição Mágica`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Aqui o prompt é o segredo. Mostre um exemplo de prompt bom e um ruim. Incentive a escrever cor, objeto e estilo. Lembre que o botão "Gerar novamente" existe para quando o resultado não agradar.`,
      atividade: `Escolha uma imagem, use a Edição Mágica, pinte uma área e escreva um prompt detalhado para trocar aquele detalhe (por exemplo, mudar a cor de uma roupa ou trocar um objeto). Gere até ficar bom.`,
      gabarito: `O aluno seleciona a Edição Mágica, pinta a área, escreve um prompt específico como "um casaco vermelho de inverno" e clica em Gerar. Um prompt detalhado produz um resultado melhor que um vago. O aluno deve usar "Gerar novamente" pelo menos uma vez e comparar as versões.`,
    },
    {
      titulo: `Editor em dupla: antes e depois`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno edita e o outro avalia se ficou natural, depois trocam. Peça que conversem sobre qual prompt funcionou melhor. Circule ouvindo as decisões.`,
      atividade: `Em dupla, cada um pega uma imagem e aplica as três ferramentas (Borracha Mágica, Remover fundo e Edição Mágica). Mostre o resultado ao colega, que dá uma sugestão de melhoria. Apliquem a sugestão juntos.`,
      gabarito: `Cada dupla apresenta uma imagem editada com as três ferramentas e pelo menos uma melhoria feita a partir da sugestão do colega. Espera-se que expliquem qual prompt usaram e por que a edição ficou melhor. A avaliação valoriza o resultado natural e a justificativa das escolhas.`,
    },
    {
      titulo: `Layout instantâneo com o Magic Design`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Leve os alunos à tela inicial do Canva. Mostre como enviar a imagem editada ou digitar uma ideia no Magic Design para gerar layouts. Conecte com o entregável do mês: o melhor layout pode virar uma página do material visual.`,
      atividade: `Na tela inicial, use o Magic Design enviando a imagem que você editou ou descrevendo o material que quer criar. Escolha o melhor layout gerado, ajuste o texto e salve como parte do seu projeto do mês.`,
      gabarito: `O aluno acessa o Magic Design, fornece a imagem ou uma ideia escrita, recebe vários layouts e escolhe um. Em seguida ajusta o texto e salva o resultado no Canva. O produto final é uma página de layout pronta, alinhada ao material visual completo do mês, com a imagem editada nas etapas anteriores integrada ao design.`,
    },
  ],
};
