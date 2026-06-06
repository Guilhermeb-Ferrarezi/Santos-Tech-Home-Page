import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Qualidade na Exportação",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compreender o painel de exportação do CapCut e como resolução, taxa de quadros (FPS) e taxa de bits afetam a nitidez e o tamanho final do vídeo.`,
  descricao: `Até agora os alunos aprenderam a deixar o vídeo bonito por dentro: efeitos, camadas, legendas e som limpo. Nesta aula eles descobrem a etapa que transforma o projeto em um arquivo de verdade, que pode ser enviado, postado ou guardado: a exportação. É aqui que muita gente erra sem perceber, exportando um vídeo borrado ou pesado demais simplesmente porque clicou em qualquer botão sem entender as opções.

O painel de exportação do CapCut tem três configurações que decidem a qualidade: a resolução (quantos pontinhos formam a imagem, como 1080p ou 4K), a taxa de quadros ou FPS (quantas imagens passam por segundo, deixando o movimento mais ou menos fluido) e a taxa de bits (quanta informação o CapCut guarda em cada segundo de vídeo). Essas três configurações trabalham juntas: quanto mais alta cada uma, mais nítido fica o vídeo, mas também maior fica o arquivo.

A ideia central da aula é mostrar que não existe um botão mágico de "melhor qualidade". Existe uma escolha consciente: para um vídeo de escola ou para postar no Instagram, 1080p costuma ser perfeito e gera um arquivo leve; o 4K só vale a pena quando a tela é muito grande ou quando o vídeo será editado de novo no futuro. O aluno aprende a pensar como um profissional, perguntando "para onde esse vídeo vai?" antes de exportar.

Ao final, cada aluno consegue abrir o painel de exportação, reconhecer os três controles, prever se o arquivo vai ficar nítido e leve ou nítido e pesado, e exportar com confiança. Essa base prepara a próxima aula, em que eles vão escolher o formato certo para cada tela.`,
  materiais: [
    `Computadores com o CapCut (versão para computador) instalado e aberto, um por aluno`,
    `Projetor ou TV conectada ao computador do professor para mostrar o painel de exportação`,
    `Um projeto curto de vídeo já montado (15 a 30 segundos) salvo em cada computador para servir de teste de exportação`,
    `Pasta ou área de trabalho organizada para salvar os arquivos exportados de cada aluno`,
    `Acesso à internet e conta do CapCut conectada (para salvar e exportar sem travar)`,
    `Folha ou bloco de notas para anotar os três valores escolhidos (resolução, FPS, taxa de bits) antes de exportar`,
  ],
  conceitosChave: [
    `Exportação — é o momento de transformar o projeto editado em um arquivo de vídeo pronto (geralmente .mp4) que pode ser enviado, postado ou guardado.`,
    `Resolução — é a quantidade de pontinhos (pixels) que formam a imagem; quanto maior, mais nítido o vídeo. As opções comuns são 1080p (Full HD) e 4K (ultra nítido).`,
    `1080p — resolução Full HD, ótima para redes sociais e telas comuns; deixa o vídeo nítido com um arquivo leve.`,
    `4K — resolução quatro vezes maior que o 1080p, super nítida para telas grandes; gera um arquivo bem mais pesado.`,
    `Taxa de quadros (FPS) — é o número de imagens mostradas por segundo; 30 FPS é o padrão e 60 FPS deixa o movimento mais suave, mas aumenta o tamanho do arquivo.`,
    `Taxa de bits (bitrate) — é a quantidade de informação guardada por segundo de vídeo; quanto mais alta, mais detalhe e mais nitidez, porém maior fica o arquivo.`,
    `Tamanho do arquivo — é o "peso" do vídeo em megabytes (MB) ou gigabytes (GB); aumenta sempre que subimos a resolução, o FPS ou a taxa de bits.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em vídeo. Basta entender uma frase: resolução, FPS e taxa de bits são três "torneiras" de qualidade. Quando você abre mais qualquer uma delas, o vídeo fica mais nítido ou mais suave, mas o arquivo fica mais pesado. O objetivo da aula é que o aluno entenda essa troca e saiba escolher, não que decore números.

Antes da aula, abra o CapCut, carregue um projeto curto e clique no botão "Exportar" (canto superior direito, ícone de seta para cima ou a palavra "Exportar"). Assim você já vê o painel que vai mostrar: lá aparecem "Resolução" (com 480p, 720p, 1080p, 2K, 4K), "Taxa de quadros" (24, 25, 30, 50, 60) e, logo abaixo, a "Taxa de bits" (com opções como Recomendado, Mais alta, Personalizada). Repare também no número de tamanho estimado do arquivo, que muda quando você mexe nas opções: ele é o seu melhor aliado para mostrar a "troca" aos alunos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma "quando vocês gravam um vídeo no celular, ele já fica pronto sozinho; mas no computador a gente precisa exportar. Por que será?". Mostre dois arquivos no projetor: um vídeo nítido e um borrado. Pergunte qual eles prefeririam postar e por quê. Conecte com a aula: "a diferença começa na hora de exportar".

Conteúdo novo guiado (15 min): no projetor, abra o CapCut e clique em "Exportar". Mostre o painel devagar. Aponte para "Resolução" e deslize entre 1080p e 4K, mostrando como o tamanho estimado do arquivo, logo ali, cresce muito. Depois aponte "Taxa de quadros" e troque 30 por 60, mostrando de novo o tamanho subir. Por fim, mostre a "Taxa de bits": mude de "Recomendado" para "Mais alta" e observe o número crescer outra vez. Repita a ideia: "três torneiras, mesma regra: mais qualidade, mais peso".

Mão na massa (25 min): cada aluno abre o projeto curto que está no computador e clica em "Exportar". Peça que primeiro anotem no papel os três valores que vão escolher. Tarefa: exportar a mesma cena duas vezes, uma em 1080p e 30 FPS, outra em 4K e 60 FPS, salvando com nomes diferentes (por exemplo "teste-1080" e "teste-4K"). Circule pela sala. Ao final, eles comparam o tamanho dos dois arquivos na pasta e veem com os próprios olhos a diferença de peso.

Desafio e compartilhar (10 min): proponha a pergunta "se o vídeo é para postar no celular de um amigo, qual versão você mandaria e por quê?". Cada aluno responde em uma frase. Feche reforçando: "1080p resolve quase tudo do dia a dia; 4K guardamos para telas grandes".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do mundo deles. Resolução é como uma figurinha: quanto mais pontinhos, mais nítida; o 4K é como uma figurinha gigante e detalhada que ocupa muito espaço no álbum. FPS é como um flipbook (aquele caderninho que vira rápido): mais desenhos por página, movimento mais suave. Taxa de bits é como o capricho do desenho: mais detalhe gasta mais "tinta", ou seja, mais espaço. E o tamanho do arquivo é a mochila: tudo que você adiciona pesa mais para carregar.

## Erros comuns e como ajudar

Aluno acha que "4K é sempre melhor": mostre os dois arquivos lado a lado e pergunte se ele consegue ver diferença na tela do computador; muitas vezes não dá, e o 4K só ficou pesado à toa. Aluno exporta e some o arquivo: ensine a olhar a pasta de destino que aparece no painel antes de clicar em "Exportar". Aluno fica esperando travado: a exportação leva tempo, avise que é normal e que não se deve fechar o CapCut no meio. Aluno mexe na taxa de bits "Personalizada" e estoura o tamanho: oriente a manter "Recomendado" quando não tiver certeza.`,
  exercicios: [
    {
      titulo: `Abrindo o painel de exportação`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o projeto curto aberto. Caminhe pela sala confirmando que todos encontraram o botão "Exportar" e identificaram as três configurações na tela.`,
      atividade: `Abra o projeto curto no CapCut, clique em "Exportar" no canto superior direito e localize na tela as três configurações: Resolução, Taxa de quadros e Taxa de bits. Aponte para o colega ao lado onde cada uma aparece.`,
      gabarito: `O aluno deve abrir o painel clicando em "Exportar" e indicar corretamente as três opções: Resolução (com valores como 1080p e 4K), Taxa de quadros (com valores como 30 e 60 FPS) e Taxa de bits (com opções como Recomendado ou Mais alta). Localizar o tamanho estimado do arquivo é um bônus.`,
    },
    {
      titulo: `Mais qualidade, mais peso`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que o objetivo é observar o número do tamanho estimado mudar. Peça que falem em voz alta o que acontece quando sobem cada configuração.`,
      atividade: `Dentro do painel de exportação, troque a resolução de 1080p para 4K e observe o tamanho estimado do arquivo. Depois mude a taxa de quadros de 30 para 60 FPS. Anote no papel o que aconteceu com o número do tamanho em cada mudança.`,
      gabarito: `Em ambos os casos o tamanho estimado do arquivo aumenta. Trocar 1080p por 4K aumenta bastante; subir de 30 para 60 FPS também aumenta. A conclusão esperada: mais resolução e mais FPS deixam o vídeo melhor, porém o arquivo fica mais pesado.`,
    },
    {
      titulo: `Dois arquivos, uma cena`,
      tipo: `em dupla`,
      tempo: `14 minutos`,
      guiaProfessor: `Cada dupla compartilha um computador. Verifique se salvam com nomes diferentes e na pasta combinada, para depois comparar o tamanho na própria pasta.`,
      atividade: `Em dupla, exportem a mesma cena duas vezes: a primeira em 1080p e 30 FPS, salvando como "teste-1080"; a segunda em 4K e 60 FPS, salvando como "teste-4K". Depois abram a pasta e comparem o tamanho dos dois arquivos.`,
      gabarito: `As duas exportações devem gerar dois arquivos com nomes diferentes. O arquivo "teste-4K" deve ficar visivelmente maior (mais MB) que o "teste-1080". A dupla deve concluir que a versão 4K e 60 FPS é mais nítida e fluida, mas ocupa muito mais espaço.`,
    },
    {
      titulo: `Para onde vai o vídeo?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda fazendo a pergunta-chave "para onde esse vídeo vai?". Aceite respostas diferentes desde que justificadas. Anote no quadro as conclusões da turma.`,
      atividade: `Em roda, discutam três situações: 1) postar um vídeo curto no celular de um amigo; 2) mostrar o vídeo numa TV grande da escola; 3) guardar o vídeo para reeditar no futuro. Para cada caso, decidam juntos se usariam 1080p ou 4K e justifiquem.`,
      gabarito: `Respostas esperadas: 1) celular do amigo, 1080p, porque é nítido o bastante e o arquivo é leve para enviar; 2) TV grande, pode valer 4K pela tela maior; 3) reeditar no futuro, 4K para guardar mais detalhe. O essencial é que cada escolha venha com uma justificativa ligada ao destino do vídeo e ao tamanho do arquivo.`,
    },
    {
      titulo: `Minha exportação consciente`,
      tipo: `projeto curto`,
      tempo: `18 minutos`,
      guiaProfessor: `Peça que o aluno escolha um destino real antes de exportar e justifique as três configurações. Avalie a coerência entre a escolha e o destino, não a "perfeição" dos números.`,
      atividade: `Escolha um destino para o seu vídeo (rede social, TV da escola ou arquivo para o futuro). Anote no papel a resolução, o FPS e a taxa de bits que vai usar, com uma frase explicando o porquê de cada escolha. Em seguida, exporte o vídeo com essas configurações e confira o tamanho final do arquivo.`,
      gabarito: `O aluno deve entregar: o destino escolhido, os três valores anotados (resolução, FPS e taxa de bits) e uma justificativa coerente para cada um. Exemplo válido: destino "Instagram", 1080p e 30 FPS com taxa de bits Recomendado, porque fica nítido, suave e leve para postar. A exportação deve gerar um arquivo de fato, e o aluno deve saber dizer se ficou leve ou pesado e por quê.`,
    },
  ],
};
