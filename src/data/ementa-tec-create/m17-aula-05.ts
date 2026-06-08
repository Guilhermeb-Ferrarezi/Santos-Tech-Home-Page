import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Entendendo qualidade: resolução e formato",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conhecer os conceitos de resolução, taxa de quadros e formato de saída para escolher a melhor configuração de exportação conforme a plataforma de destino do vídeo.`,
  descricao: `Até aqui, os alunos aprenderam a cortar, dar ritmo, aplicar transições, animar textos e gerar legendas no CapCut. Agora chega o momento de entender o que está por trás da qualidade de um vídeo. Esta aula é mais conceitual e estratégica: o aluno vai descobrir que um mesmo projeto pode sair com aparências e tamanhos muito diferentes dependendo de três decisões técnicas, a resolução, a taxa de quadros e o formato de saída.

A resolução é a quantidade de pontinhos (pixels) que formam a imagem. Quanto mais pixels, mais nítido e detalhado fica o vídeo, mas também mais pesado fica o arquivo. Os dois padrões mais usados hoje são o 1080p (Full HD) e o 4K (Ultra HD). Já a taxa de quadros, medida em FPS (quadros por segundo), define quantas imagens passam por segundo: 24 ou 30 FPS dão um ar mais cinematográfico, enquanto 60 FPS deixam o movimento muito suave, ideal para jogos e cenas rápidas. O formato de saída é o tipo de arquivo final, e o mais comum e compatível é o MP4.

O ponto central da aula é que não existe uma única configuração "certa", existe a configuração ideal para cada destino. Um vídeo para o YouTube pode aproveitar 1080p ou 4K a 30 ou 60 FPS. Um vídeo para redes sociais geralmente fica em 1080p, vertical, para caber bem na tela do celular. Já uma apresentação na sala de aula pode pedir 1080p horizontal, com um arquivo mais leve para abrir rápido no projetor. O aluno aprende a comparar essas opções e justificar sua escolha.

Ao final, cada aluno saberá ler e ajustar o painel de configurações do CapCut antes de exportar, entendendo o efeito de cada número na nitidez, na suavidade e no tamanho do arquivo. Essa base prepara diretamente a próxima aula, em que eles vão exportar o vídeo de verdade sem perder qualidade, e o entregável final do mês, o vídeo profissional.`,
  materiais: [
    `Computadores com o CapCut instalado e os projetos de vídeo de cada aluno abertos`,
    `Conta do CapCut ativa em cada máquina para acessar o painel de exportação`,
    `Projetor ou tela grande para o professor demonstrar o menu de configurações`,
    `Arquivo de vídeo de exemplo exportado em 1080p e o mesmo em 4K para comparação visual`,
    `Tabela impressa de apoio relacionando plataforma de destino com resolução, FPS e formato recomendados`,
    `Acesso à internet para abrir o YouTube e mostrar a seleção de qualidade no player`,
    `Fones de ouvido opcionais para quem quiser revisar o próprio vídeo durante a prática`,
  ],
  conceitosChave: [
    `Resolução — quantidade de pixels que formam a imagem; quanto maior, mais nítido o vídeo e mais pesado o arquivo.`,
    `Pixel — cada pontinho de cor que, somado a milhões de outros, forma a imagem na tela.`,
    `1080p (Full HD) — resolução de 1920 por 1080 pixels, padrão equilibrado entre qualidade e tamanho de arquivo.`,
    `4K (Ultra HD) — resolução de cerca de 3840 por 2160 pixels, quatro vezes mais nítida que o 1080p e bem mais pesada.`,
    `Taxa de quadros (FPS) — número de imagens exibidas por segundo; 24 ou 30 dão ar de cinema e 60 deixam o movimento mais suave.`,
    `Formato de saída — tipo do arquivo final exportado; o MP4 é o mais compatível com YouTube, redes sociais e projetores.`,
    `Plataforma de destino — onde o vídeo será exibido (YouTube, redes ou apresentação), que determina a melhor configuração de exportação.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em vídeo para dar esta aula. Basta entender três botões do painel de exportação do CapCut: Resolution (resolução), Frame rate (taxa de quadros) e Format (formato). No CapCut para computador, esse painel aparece quando você clica no botão Export, no canto superior direito da tela de edição. Antes da aula, abra um projeto qualquer e clique em Export só para ver o painel: ali ficam as opções 480p, 720p, 1080p, 2K e 4K; as opções de FPS (24, 25, 30, 50, 60); e o formato MP4 ou MOV. Repare que, sempre que você aumenta a resolução ou o FPS, o tamanho estimado do arquivo (Estimated file size) sobe na hora. Essa é a melhor demonstração da aula. Prepare também dois arquivos de exemplo, um em 1080p e um em 4K, para os alunos verem a diferença de nitidez no projetor.

## Passo a passo da aula

Aquecimento (10 min): pergunte quem já escolheu a qualidade de um vídeo no YouTube, aquele menuzinho de engrenagem com 360p, 720p, 1080p. Abra o YouTube no projetor e mostre as opções. Explique que esses números são resoluções, e que hoje eles vão aprender a controlar isso nos próprios vídeos. Reveja rápido o que fizeram nas aulas anteriores (cortes, textos, legendas).

Conteúdo novo guiado (15 min): no CapCut, clique em Export no canto superior direito. Mostre o painel campo por campo. Em Resolution, clique e troque entre 1080p e 4K, apontando como o Estimated file size muda. Em Frame rate, compare 30 e 60 FPS. Em Format, mostre o MP4 selecionado. Exiba os dois arquivos de exemplo lado a lado para eles verem a nitidez. Não exporte ainda, isso é a próxima aula.

Mão na massa (25 min): cada aluno abre o próprio projeto e o botão Export. Sem confirmar a exportação, eles experimentam trocar a resolução e o FPS e anotam numa folha o tamanho estimado de cada combinação. Depois, usando a tabela de apoio, escolhem a melhor configuração para um destino sorteado (YouTube, rede social ou apresentação) e escrevem por que escolheram. Circule pela sala conferindo as anotações.

Desafio e compartilhar (10 min): proponha um caso, por exemplo "vídeo de gameplay rápido para o YouTube". Cada aluno define resolução, FPS e formato e justifica em uma frase. Dois ou três compartilham a escolha com a turma.

## Como explicar de forma clara

Use comparações concretas. Diga que a resolução é como o número de peças de um quebra-cabeça: com mais peças, a imagem fica mais detalhada, mas a caixa fica mais pesada para carregar. Explique o FPS como um flip book, aquele caderninho que se folheia rápido: quanto mais desenhos por página, mais suave o movimento. Para o formato, diga que o MP4 é como o idioma que todo mundo entende, por isso quase toda plataforma aceita. Sempre conecte com a vida deles: "4K é lindo, mas o arquivo é enorme e demora para subir no celular". Mostrar é mais forte que falar, por isso o exemplo lado a lado no projetor vale ouro.

## Erros comuns e como ajudar

O erro mais comum é achar que "mais é sempre melhor" e escolher 4K e 60 FPS para tudo, gerando arquivos gigantes e lentos. Explique que a escolha depende do destino, não do exagero. Outro erro é confundir resolução com FPS, tratando os dois como a mesma coisa; reforce que resolução é nitidez (pixels) e FPS é suavidade (quadros por segundo). Alguns alunos vão clicar em Export e exportar sem querer, então avise antes que nesta aula ninguém confirma a exportação, só observam o painel. Há também quem não ache a diferença entre 1080p e 4K na tela do projetor, porque o projetor pode ser de baixa resolução; nesse caso, use o zoom da imagem para mostrar os pixels de perto. Por fim, oriente quem escolher formato MOV sem necessidade: lembre que o MP4 é o mais seguro para compatibilidade.`,
  exercicios: [
    {
      titulo: `Caça às resoluções no YouTube`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Abra o YouTube no projetor e deixe cada aluno repetir no próprio computador. Guie até a engrenagem de qualidade e peça que leiam as opções em voz alta.`,
      atividade: `Abra um vídeo qualquer no YouTube, clique na engrenagem de configurações e anote todas as opções de qualidade que aparecem (por exemplo 360p, 720p, 1080p). Identifique qual é a maior e qual é a menor.`,
      gabarito: `O aluno deve listar as resoluções disponíveis no player, reconhecendo que 360p é a menor e 1080p ou 4K a maior, e entender que esses números são resoluções, ou seja, mais pixels e mais nitidez quanto maior o número.`,
    },
    {
      titulo: `Pesando o arquivo`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde fica o campo Estimated file size no painel Export do CapCut. Lembre a turma de não confirmar a exportação, só observar os números mudarem.`,
      atividade: `No seu projeto, clique em Export e, sem exportar, troque a resolução entre 1080p e 4K e o FPS entre 30 e 60. Anote o tamanho estimado do arquivo em cada combinação.`,
      gabarito: `A tabela do aluno deve mostrar que o tamanho do arquivo cresce ao subir a resolução e o FPS, sendo o 4K a 60 FPS o mais pesado e o 1080p a 30 FPS o mais leve. O aluno conclui que mais qualidade gera arquivos maiores.`,
    },
    {
      titulo: `Resolução ou FPS?`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `As duplas conversam e classificam cada frase. Peça que justifiquem em voz alta antes de escrever a resposta, para checar se separaram bem os dois conceitos.`,
      atividade: `Em dupla, leiam cinco frases (ex.: "a imagem está mais nítida", "o movimento ficou mais suave", "o vídeo tem mais pixels") e marquem se cada uma fala de resolução ou de taxa de quadros. Defendam a resposta.`,
      gabarito: `Frases sobre nitidez e quantidade de pixels referem-se à resolução; frases sobre suavidade do movimento referem-se ao FPS. A dupla deve classificar corretamente as cinco frases e explicar que resolução é detalhe da imagem e FPS é fluidez do movimento.`,
    },
    {
      titulo: `Configuração para cada destino`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Sorteie um destino para cada aluno (YouTube, rede social ou apresentação). Distribua a tabela de apoio e circule conferindo se a escolha combina com o destino e se a justificativa faz sentido.`,
      atividade: `Receba um destino sorteado e defina, no painel Export do CapCut, a melhor resolução, FPS e formato para ele. Escreva três linhas justificando cada escolha pensando em quem vai assistir e onde.`,
      gabarito: `Respostas variam por destino, mas devem ser coerentes: YouTube admite 1080p ou 4K a 30 ou 60 FPS em MP4; rede social pede 1080p vertical em MP4; apresentação pede 1080p horizontal em MP4, com arquivo mais leve. A justificativa deve citar o público e o local de exibição.`,
    },
    {
      titulo: `O júri da qualidade`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza a roda apresentando um caso polêmico, como exportar um vídeo curto de status em 4K e 60 FPS. Incentive opiniões diferentes e feche reforçando que o destino define a escolha.`,
      atividade: `Em roda, discutam o caso: "um aluno quer exportar todos os vídeos sempre em 4K e 60 FPS". Cada um diz se concorda ou não e por quê, usando os termos resolução, FPS, formato e plataforma de destino.`,
      gabarito: `O consenso esperado é que nem sempre o máximo é o melhor: 4K e 60 FPS geram arquivos pesados e lentos, desnecessários para muitos destinos. Os alunos devem argumentar que a configuração ideal depende da plataforma e do público, usando corretamente os conceitos da aula.`,
    },
  ],
};
