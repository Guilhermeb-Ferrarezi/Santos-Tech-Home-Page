import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O que é um arquivo? Tipos e extensões",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Entender o que é um arquivo digital e aprender a reconhecer, pela extensão, se ele é texto, imagem, vídeo, música ou PDF, associando cada tipo ao programa que o abre.`,
  descricao: `Esta é a terceira aula do mês dedicado aos fundamentos da informática. Nas duas aulas anteriores os alunos viram o hardware por dentro e usaram software e periféricos na prática. Agora eles descobrem a "matéria-prima" do mundo digital: o arquivo. Tudo o que existe no computador e fica guardado é, no fundo, um arquivo. A foto da viagem, a música favorita, o trabalho da escola, o vídeo engraçado: cada um é um arquivo com um nome e um sobrenome. Esse sobrenome é a extensão, e é ela que conta ao computador que tipo de conteúdo está ali dentro.

A grande ideia da aula é simples e poderosa: o computador diferencia textos, imagens, vídeos e músicas pela extensão, aquelas letrinhas que aparecem depois do ponto no final do nome do arquivo. Um arquivo chamado trabalho.docx é um texto do Word; foto.jpg é uma imagem; clipe.mp4 é um vídeo; musica.mp3 é uma música; e boletim.pdf é um documento para leitura. Quando o aluno aprende a ler essas extensões, ele para de depender só do ícone e passa a entender de verdade o que tem nas mãos.

Por padrão, o Windows costuma esconder as extensões para deixar a tela mais limpa, e é exatamente por isso que muita gente nunca reparou nelas. Nesta aula o professor vai ensinar a turma a ligar a exibição das extensões no Explorador de Arquivos, para que cada nome apareça completo. A partir daí, os alunos vão observar arquivos de exemplo, identificar o tipo de cada um e descobrir qual programa abre o quê: o Word abre .docx, o aplicativo Fotos abre .jpg, o player de vídeo abre .mp4, o player de música abre .mp3 e o navegador ou leitor de PDF abre .pdf.

O clima da aula é de investigação, como pequenos detetives lendo pistas. O professor não precisa decorar todas as extensões do mundo: basta dominar as cinco da aula (.docx, .jpg, .mp4, .mp3, .pdf) e conduzir a turma a observar, comparar e classificar. Essa habilidade prepara o terreno para as próximas aulas, quando os alunos vão organizar esses arquivos em pastas e cuidar deles sem perder nada.`,
  materiais: [
    `Computadores (1 por aluno) com Windows 10 ou 11 atualizado e o Explorador de Arquivos disponível`,
    `Projetor ou TV para o professor mostrar a própria tela e demonstrar cada passo no Explorador de Arquivos`,
    `Uma pasta de exemplo já preparada em cada computador (ou na rede), com pelo menos um arquivo de cada tipo: .docx, .jpg, .mp4, .mp3 e .pdf`,
    `Programas instalados para abrir cada tipo: Word (ou WordPad), aplicativo Fotos, player de vídeo, player de música e um leitor de PDF ou navegador`,
    `Folha impressa ou slide com a "tabela de extensões": extensão, tipo de arquivo e programa que abre`,
    `Quadro branco ou flip chart para anotar as descobertas da turma e montar a tabela coletiva`,
    `Etiquetas ou cartões com nomes de arquivos (ex.: relatorio.docx, gato.jpg) para um jogo rápido de classificação`,
  ],
  conceitosChave: [
    `Arquivo — todo conteúdo digital guardado no computador (um texto, uma foto, uma música) que tem um nome e pode ser aberto, copiado e movido.`,
    `Nome do arquivo — a parte antes do ponto, escolhida por você, que identifica o conteúdo (ex.: "trabalho" em trabalho.docx).`,
    `Extensão — as letras depois do ponto no final do nome (ex.: .docx) que dizem ao computador qual é o tipo do arquivo e qual programa o abre.`,
    `Ícone — a figurinha que representa o arquivo na tela; ela muda conforme o tipo, mas a pista mais confiável é a extensão.`,
    `Tipo de arquivo — a categoria do conteúdo: texto, imagem, vídeo, áudio ou documento de leitura, definida pela extensão.`,
    `Programa associado — o aplicativo que o Windows abre automaticamente ao dar dois cliques no arquivo (ex.: Fotos para .jpg).`,
    `PDF — formato de documento (.pdf) feito para ler e imprimir mantendo a aparência igual em qualquer computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar informática para dar esta aula. Basta entender uma ideia central: todo arquivo tem um nome e uma extensão, separados por um ponto. A extensão são as poucas letras finais (como docx, jpg, mp4, mp3, pdf) e é ela que diz ao computador o tipo do arquivo e qual programa usar para abrir. Memorize só estas cinco extensões da aula: .docx (texto do Word), .jpg (imagem/foto), .mp4 (vídeo), .mp3 (música) e .pdf (documento de leitura). Antes da aula, prepare em cada computador uma pasta de exemplo com um arquivo de cada tipo e teste se cada um abre. Importante: por padrão o Windows esconde as extensões, então a primeira tarefa prática será ligá-las.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Pergunte: "Onde ficam guardadas as suas fotos e músicas no computador?". Conduza até a palavra arquivo. Escreva no quadro um nome completo, como foto-praia.jpg, e marque com cores o nome e a extensão. Explique que o ponto separa o "nome" do "sobrenome" do arquivo.

2. Conteúdo novo guiado (15 min). Projete sua tela e abra o Explorador de Arquivos (ícone da pastinha amarela na barra de tarefas, ou tecla Windows + E). Primeiro, ligue as extensões: no Windows 11, clique no menu "Exibir" (no topo), aponte para "Mostrar" e marque "Extensões de nomes de arquivo"; no Windows 10, abra a aba "Exibir" e marque a caixa "Extensões de nomes de arquivos". Agora os nomes mostram o sobrenome. Abra a pasta de exemplo e leia em voz alta cada arquivo, perguntando à turma o tipo de cada um. Dê dois cliques em cada arquivo e mostre qual programa abre: .docx no Word, .jpg no Fotos, .mp4 no player de vídeo, .mp3 no player de música e .pdf no leitor de PDF.

3. Mão na massa (25 min). Cada aluno repete o processo no próprio computador. Tarefa 1: ligar a exibição das extensões pelo menu "Exibir". Tarefa 2: abrir a pasta de exemplo e escrever numa folha a lista de arquivos com a extensão e o tipo de cada um. Tarefa 3: dar dois cliques em cada arquivo e anotar o nome do programa que abriu. Circule pela sala, confira as telas e provoque: "Esse arquivo é texto, imagem, vídeo ou som? Como você sabe?". Ajude quem não achou o menu certo.

4. Desafio e compartilhar (10 min). Mostre no projetor uma lista só de nomes (ex.: aula.pdf, selfie.jpg, festa.mp4, hino.mp3, redacao.docx) sem dizer o tipo. Cada dupla classifica todos. Feche montando no quadro a tabela coletiva: extensão, tipo e programa que abre.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação do nome e sobrenome: "O arquivo tem nome (que você escolhe) e sobrenome (a extensão, que diz o tipo)". Outra imagem útil é a do crachá: "A extensão é o crachá do arquivo; o computador lê o crachá e já sabe quem chamar para abrir". Reforce que o ícone ajuda, mas pode enganar, enquanto a extensão é a pista certa. Evite termos técnicos como "formato binário"; fale em "tipo de conteúdo". Faça perguntas em vez de só explicar: aponte um arquivo e pergunte "isso é foto, vídeo ou som?". Quando alguém acertar, peça que diga como descobriu, valorizando a leitura da extensão.

## Erros comuns e como ajudar

O erro mais comum é não achar onde ligar as extensões; mostre devagar o caminho "Exibir" e fique ao lado de quem travou. Alguns confundem o ponto do nome com pontos finais de frase; lembre que a extensão é sempre o último grupo de letras depois do último ponto. Outros acham que mudar a extensão muda o arquivo: explique que renomear o sobrenome não converte o conteúdo e pode até estragar a abertura, então nesta aula ninguém renomeia extensões. Há quem julgue o tipo só pelo ícone e erre; reforce a leitura das letras finais. Por fim, se um arquivo abrir no programa "errado", mostre que dá para escolher com botão direito, "Abrir com", mas deixe isso como curiosidade para não dispersar a turma.`,
  exercicios: [
    {
      titulo: `Ligando as extensões no Windows`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto com a turma, projetando sua tela. O objetivo é que todos consigam ligar a exibição das extensões antes de qualquer classificação. Vá devagar e confira cada computador, pois quem não ligar não enxergará os sobrenomes nas próximas atividades.`,
      atividade: `Abra o Explorador de Arquivos (tecla Windows + E). No menu "Exibir", ative a opção "Extensões de nomes de arquivo" (no Windows 11, em "Exibir" > "Mostrar"; no Windows 10, na aba "Exibir"). Depois, abra a pasta de exemplo e confira se os nomes agora aparecem com o ponto e as letras finais.`,
      gabarito: `O aluno acerta se, ao final, os nomes dos arquivos da pasta de exemplo aparecerem completos, com a extensão visível (ex.: foto.jpg em vez de só "foto"). Se ainda não aparecer, a opção não foi marcada: oriente a repetir o caminho pelo menu "Exibir".`,
    },
    {
      titulo: `Detetive de tipos`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Apresente antes a tabela das cinco extensões (.docx, .jpg, .mp4, .mp3, .pdf) e seus tipos. Circule e ajude quem confundir, sempre pedindo que aponte na tela qual é a extensão antes de decidir o tipo.`,
      atividade: `Na pasta de exemplo, escreva numa folha uma lista com todos os arquivos. Para cada um, anote três coisas: o nome completo, a extensão e o tipo (texto, imagem, vídeo, música ou documento de leitura). Use a tabela como apoio.`,
      gabarito: `A classificação correta é: .docx = texto; .jpg = imagem; .mp4 = vídeo; .mp3 = música (áudio); .pdf = documento de leitura. O aluno acerta se associar cada arquivo da pasta ao tipo certo a partir da extensão, e não apenas pelo ícone.`,
    },
    {
      titulo: `Qual programa abre?`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. A ideia é descobrir, na prática, qual aplicativo o Windows usa para cada tipo. Oriente que deem dois cliques com calma e fechem cada programa antes de abrir o próximo, para não acumular janelas. Peça que anotem o nome exato que aparece na barra de título.`,
      atividade: `Em dupla, deem dois cliques em cada arquivo da pasta de exemplo, um de cada vez. Anotem o nome do programa que abriu cada tipo: .docx, .jpg, .mp4, .mp3 e .pdf. Depois, montem uma mini-tabela com três colunas: extensão, tipo e programa que abriu.`,
      gabarito: `Associações esperadas (os nomes podem variar conforme o computador): .docx abre no Word (ou WordPad); .jpg no aplicativo Fotos; .mp4 num player de vídeo (Filmes e TV ou Media Player); .mp3 num player de música (Media Player); .pdf no leitor de PDF ou no navegador (Edge). A dupla acerta se ligar corretamente cada extensão ao programa que abriu na máquina.`,
    },
    {
      titulo: `Caça à extensão escondida`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Projete uma lista apenas com nomes de arquivos, sem ícones e sem dizer o tipo. O desafio testa se o aluno consegue ler a extensão e deduzir o tipo de cabeça, sem abrir nada. Aumente um pouco a dificuldade incluindo nomes com mais de um ponto.`,
      atividade: `Olhe a lista projetada e classifique cada arquivo só pela leitura do nome: relatorio.final.docx, viagem-2026.jpg, show.ao.vivo.mp4, playlist.mp3 e contrato.pdf. Para cada um, escreva a extensão correta e o tipo (texto, imagem, vídeo, música ou documento).`,
      gabarito: `relatorio.final.docx = extensão .docx, tipo texto; viagem-2026.jpg = .jpg, imagem; show.ao.vivo.mp4 = .mp4, vídeo; playlist.mp3 = .mp3, música; contrato.pdf = .pdf, documento de leitura. O ponto-chave do desafio é perceber que a extensão é sempre o último grupo depois do último ponto, mesmo quando o nome tem vários pontos.`,
    },
    {
      titulo: `Tabela-guia das extensões`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Esta atividade fecha a aula e gera um material que o aluno leva consigo. Oriente que confirmem cada linha abrindo o arquivo correspondente na pasta de exemplo, em vez de chutar. Ao final, peça que cada um leia em voz alta uma linha da própria tabela para a turma.`,
      atividade: `Monte, numa folha ou num documento, uma tabela-guia com cinco linhas e três colunas: extensão, tipo de arquivo e programa que abre. Preencha as linhas das extensões .docx, .jpg, .mp4, .mp3 e .pdf. Confirme cada uma abrindo o arquivo de exemplo correspondente antes de escrever.`,
      gabarito: `A tabela correta tem: .docx | texto | Word (ou WordPad); .jpg | imagem | Fotos; .mp4 | vídeo | player de vídeo (Filmes e TV / Media Player); .mp3 | música | player de música (Media Player); .pdf | documento de leitura | leitor de PDF ou navegador. O aluno acerta se as cinco linhas estiverem completas e coerentes com os programas que realmente abriram na máquina. Aceite variações de nome do programa, desde que o tipo e a extensão estejam corretos.`,
    },
  ],
};
