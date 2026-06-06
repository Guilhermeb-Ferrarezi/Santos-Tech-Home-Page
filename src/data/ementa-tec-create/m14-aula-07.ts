import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o Banco de Vídeos",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Organizar todos os clipes gerados no Veo em um banco de vídeos com pastas claras, nomes descritivos e etiquetas por tipo de cena, pronto para uso futuro no CapCut e no Roblox.`,
  descricao: `Durante as semanas anteriores os alunos geraram muitos clipes com o Gemini + Veo: cenários, personagens em movimento, câmeras diferentes e clipes com a cara do próprio jogo. Só que vídeo solto na pasta de Downloads vira bagunça rápido. Esta aula transforma essa pilha de arquivos em um banco de vídeos organizado, um lugar onde cada clipe tem nome, pasta e etiqueta, e pode ser encontrado em segundos.

Banco de vídeos é a ideia central do mês, o entregável que reúne todo o trabalho. Aqui o aluno aprende algo que profissionais de games e de audiovisual usam todos os dias: nomear arquivos de forma descritiva, criar uma estrutura de pastas que faça sentido e marcar cada vídeo com uma etiqueta de tipo de cena (por exemplo, cenário, personagem, animação de abertura). Isso não é só arrumação: é o que permite reaproveitar a música, a voz e a arte da IA dentro do jogo sem perder tempo procurando.

Nesta aula o aluno baixa os clipes do Veo (caso ainda estejam só na nuvem do Gemini), confere o formato e a resolução de cada um, renomeia os arquivos com um padrão combinado e distribui tudo em pastas. A turma também cria uma planilha ou lista simples, o catálogo, que diz o que cada clipe mostra e onde ele será usado: no CapCut (para edição de trailer) ou no Roblox (como cena dentro do jogo).

O resultado é prático e imediato: na Aula 8 os alunos vão apresentar o banco, e nos meses seguintes vão importar esses mesmos vídeos no CapCut e no Roblox Studio. Um banco bem montado hoje economiza horas depois. Por isso o foco da aula é menos em gerar vídeo novo e mais em cuidar, conferir e organizar o que já existe.`,
  materiais: [
    `Computadores com acesso ao Gemini + Veo (conta Google logada) para baixar os clipes que ainda estão na nuvem`,
    `Pasta-base já criada no computador (por exemplo "Banco de Vídeos - [nome do aluno]") com os clipes das semanas anteriores`,
    `Projetor ou TV para mostrar o padrão de nomes e a estrutura de pastas para a turma`,
    `Planilha ou documento modelo do catálogo (Google Sheets, Excel ou um documento simples) com as colunas combinadas`,
    `Arquivos de exemplo: 3 a 4 clipes do Veo já baixados, alguns com nomes ruins de propósito, para a turma praticar a renomear`,
    `Um aplicativo gratuito tocador de vídeo (o próprio player do Windows serve) para conferir se cada clipe abre e tem som`,
  ],
  conceitosChave: [
    `Banco de vídeos — coleção organizada de todos os seus clipes, guardada de um jeito que deixa qualquer vídeo fácil de achar e reutilizar.`,
    `Nome descritivo — nome de arquivo que conta o que tem no vídeo, em vez de algo solto como "video1.mp4".`,
    `Etiqueta (tag) por tipo de cena — palavra-chave que classifica o clipe, como cenário, personagem, abertura ou ação.`,
    `Estrutura de pastas — jeito de separar os arquivos em pastas e subpastas, por tema ou tipo, para não misturar tudo.`,
    `Formato do arquivo — a extensão e as características do vídeo, como .mp4, a resolução (por exemplo 720p ou 1080p) e a duração.`,
    `Catálogo — lista ou planilha que descreve cada clipe e diz onde ele será usado, no CapCut ou no Roblox.`,
    `Padrão de nomes — combinação fixa de como escrever os nomes (data, tipo de cena, número), para que todos os arquivos sigam a mesma lógica.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de organização, não de geração de vídeo novo. Você não precisa dominar o Veo a fundo: basta saber baixar um clipe e mexer em pastas do computador. O coração da aula é um padrão de nomes simples que toda a turma vai seguir. Combine antes este modelo: tipo-de-cena_descricao-curta_numero, por exemplo "cenario_floresta-noite_01.mp4" ou "personagem_heroi-correndo_02.mp4". Use sempre letras minúsculas, troque espaços por hífen e nunca use acento nem ç nos nomes de arquivo (acento em nome de arquivo costuma quebrar quando o vídeo entra no Roblox ou no CapCut).

Para baixar um clipe do Veo: no Gemini, abra a conversa onde o vídeo foi gerado, passe o mouse sobre o clipe e clique no ícone de baixar (a setinha para baixo) ou nos três pontinhos e depois em "Baixar". O arquivo cai na pasta Downloads. Confira o formato: clique com o botão direito no arquivo, escolha "Propriedades", e veja a extensão (.mp4) e o tamanho. Para ver a resolução e a duração, abra o vídeo no player e observe.

Estrutura de pastas recomendada dentro da pasta-base do aluno: uma pasta por tipo de cena (Cenarios, Personagens, Aberturas, Acoes) e, se quiser, uma pasta "Para-CapCut" e outra "Para-Roblox". O catálogo é uma planilha com as colunas: Nome do arquivo, Tipo de cena, O que mostra, Duração e Onde vou usar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Abra no projetor uma pasta cheia de arquivos com nomes ruins ("video.mp4", "final2.mp4", "aaa.mp4"). Pergunte: "Qual destes vocês acham que é o clipe da floresta?" Eles vão perceber que é impossível saber. Apresente a dor: sem organização, a gente perde os próprios vídeos.

15 min - Conteúdo novo guiado: Mostre na tela o padrão de nomes combinado e renomeie um arquivo ao vivo (botão direito, "Renomear", ou tecla F2). Em seguida, crie as pastas por tipo de cena (botão direito na área vazia, "Novo", "Pasta") e arraste um clipe para dentro. Por fim, abra o catálogo modelo e preencha uma linha junto com a turma.

25 min - Mão na massa: Cada aluno baixa os clipes que ainda estão no Veo, confere se cada arquivo abre e tem som, renomeia tudo no padrão, cria as pastas por tipo de cena e distribui os vídeos. Depois preenche o catálogo com uma linha por clipe. Circule conferindo nomes sem acento e clipes no lugar certo.

10 min - Desafio e compartilhar: Desafie cada aluno a abrir o catálogo e, em 20 segundos, achar e abrir um clipe que você pedir em voz alta ("mostre o cenário noturno"). Quem acha rápido prova que o banco funciona. Feche pedindo que dois alunos mostrem a tela com as pastas organizadas.

## Como explicar de forma clara (linguagem para a idade)

Compare o banco de vídeos com uma estante de jogos: "Se você joga os cartuchos no chão, nunca acha o que quer. Se guarda na prateleira certa, com etiqueta, pega em segundos." Diga que o nome do arquivo é como a capa do jogo: precisa dizer o que tem dentro. Sobre as etiquetas, use: "Tipo de cena é a categoria, como gênero de filme." Reforce que esse trabalho é o que os estúdios de verdade fazem, e que um banco bom hoje vai poupar muito tempo quando eles montarem o trailer no CapCut e as cenas no Roblox.

## Erros comuns e como ajudar

O erro mais comum é usar acento e espaço nos nomes; mostre que "ação.mp4" pode virar símbolos estranhos e ensine a usar "acao" com hífen. Outro é jogar tudo numa pasta só; peça para criarem as pastas antes de mover os arquivos. Alguns renomeiam o vídeo errado por não conferir o conteúdo; oriente a abrir o clipe antes de renomear. Há quem esqueça de baixar os clipes que ainda estão só no Gemini; faça uma checagem rápida perguntando quantos clipes cada um tem. Por fim, muitos pulam o catálogo achando que é perda de tempo; explique que é o catálogo que torna o banco realmente útil depois.`,
  exercicios: [
    {
      titulo: `Renomear no padrão combinado`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Entregue os arquivos de exemplo com nomes ruins. Confira se cada aluno usa F2 ou botão direito para renomear e se segue o padrão sem acento e com hífen no lugar de espaço.`,
      atividade: `Pegue três clipes de exemplo e renomeie cada um no padrão tipo-de-cena_descricao-curta_numero, usando só letras minúsculas, hífen no lugar de espaço e sem acento nem ç. Por exemplo: "cenario_floresta-noite_01.mp4".`,
      gabarito: `Está correto quando os três arquivos seguem o padrão combinado, sem acentos, sem espaços e com a numeração no final. Exemplo válido: "personagem_heroi-correndo_02.mp4". Nomes como "Ação Final.mp4" ou "video1.mp4" estão errados.`,
    },
    {
      titulo: `Criar a estrutura de pastas`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como criar pasta (botão direito, Novo, Pasta) e arrastar arquivos. Confira se cada aluno separou os clipes pelo tipo de cena dentro da pasta-base.`,
      atividade: `Dentro da sua pasta-base, crie as pastas Cenarios, Personagens, Aberturas e Acoes. Depois arraste cada clipe já renomeado para a pasta certa, de acordo com o tipo de cena.`,
      gabarito: `Está pronto quando existem as quatro pastas por tipo de cena e cada clipe está dentro da pasta correspondente, sem vídeos soltos na pasta-base. Um clipe de floresta deve estar em Cenarios; um clipe do herói correndo, em Personagens.`,
    },
    {
      titulo: `Conferir formato e duração`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Desafie a turma a virar conferente de qualidade. Mostre como ver propriedades (botão direito, Propriedades) e como descobrir resolução e duração abrindo o vídeo no player.`,
      atividade: `Escolha quatro clipes do seu banco. Para cada um, confira no botão direito, Propriedades, se a extensão é .mp4 e abra no player para anotar a duração em segundos. Marque com um X qualquer clipe que não abra ou esteja sem som.`,
      gabarito: `Está correto quando o aluno registra, para cada clipe, a extensão (.mp4), a duração aproximada em segundos e se tem ou não som. Um clipe que não abre ou está mudo deve ser marcado com X para refazer ou substituir depois.`,
    },
    {
      titulo: `Preencher o catálogo em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um aluno abre o clipe e descreve em voz alta; o outro preenche a linha do catálogo. Depois trocam. Reforce a coluna "Onde vou usar" (CapCut ou Roblox).`,
      atividade: `Com o colega, abram o catálogo modelo e preencham uma linha por clipe, com as colunas Nome do arquivo, Tipo de cena, O que mostra, Duração e Onde vou usar (CapCut ou Roblox). Revezem quem descreve e quem digita.`,
      gabarito: `Está completo quando cada clipe vira uma linha do catálogo com as cinco colunas preenchidas. Exemplo aceito: cenario_floresta-noite_01.mp4 | Cenário | floresta escura com névoa | 6s | Roblox. A coluna "Onde vou usar" precisa indicar CapCut ou Roblox.`,
    },
    {
      titulo: `Roda de conversa: meu banco está pronto?`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas sobre a organização do banco e peça que cada aluno diga uma coisa que melhoraria. Use isso para preparar a apresentação da Aula 8.`,
      atividade: `Em roda, mostre seu banco e responda: quantos clipes você tem, quais tipos de cena estão mais completos e qual pasta ainda está vazia ou fraca. Diga uma coisa que você vai melhorar antes de apresentar na próxima aula.`,
      gabarito: `A participação é completa quando o aluno informa o número de clipes, cita pelo menos um tipo de cena bem coberto e aponta uma melhoria concreta. Exemplo aceito: "Tenho 9 clipes, os cenários estão ótimos, mas só tenho um de abertura, então vou gerar mais um antes de apresentar."`,
    },
  ],
};
