import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Construindo o Documento da Turma",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Iniciar o documento colaborativo do mês com a turma trabalhando ao mesmo tempo no mesmo arquivo, cada aluno responsável por uma seção com formatação, imagem e comentários.`,
  descricao: `Esta é a aula em que o entregável do mês finalmente ganha vida. Até agora os alunos aprenderam a criar, formatar, compartilhar, comentar e usar o histórico de versões do Google Docs. Nesta aula, todas essas habilidades se juntam em um único projeto real: um documento colaborativo da turma sobre um tema escolhido em conjunto, como "Jogos favoritos da turma", "Curiosidades sobre o espaço" ou "Guia de filmes e séries para a idade".

A grande novidade não é uma ferramenta nova, e sim a experiência de produzir algo de verdade em equipe. O professor cria um único documento, compartilha com toda a turma como editores e, dentro dele, organiza seções com títulos. Cada aluno "adota" uma seção, escreve seu conteúdo, aplica formatação (títulos, negrito, listas), insere uma imagem e usa comentários para combinar detalhes com os colegas. Tudo isso acontecendo ao vivo, com vários cursores coloridos se movendo na tela ao mesmo tempo.

O objetivo pedagógico é mostrar que a nuvem permite que muitas pessoas construam um mesmo trabalho sem bagunçar o arquivo umas das outras, desde que combinem regras simples de convivência. O documento desta aula ainda não precisa ficar perfeito: ele será revisado e finalizado na Aula 8. Aqui o foco é começar bem, distribuir as seções e garantir que cada aluno saiba exatamente onde escrever.

Como o professor pode ser iniciante no Google Docs, esta aula traz o passo a passo exato: onde clicar para compartilhar, como criar seções com estilos de título, como ver o índice da turma e como orientar os alunos a não escreverem por cima do colega. O clima deve ser de mutirão divertido e organizado.`,
  materiais: [
    `Computadores com navegador (Chrome) e Google Docs acessível, um por aluno, todos com login na conta Google da escola`,
    `Conta Google do professor para criar e ser o "dono" do documento da turma`,
    `Projetor ou TV para o professor mostrar o documento principal e demonstrar os passos`,
    `Documento modelo de exemplo já pronto pelo professor (com 3 ou 4 seções de teste) para demonstração`,
    `Lista impressa ou no quadro com o tema escolhido e o nome do aluno responsável por cada seção`,
    `Acesso à internet estável (o trabalho é todo na nuvem, em tempo real)`,
    `Banco de imagens livres sugerido (ex.: busca de imagens dentro do próprio Google Docs em Inserir > Imagem > Pesquisar na web)`,
  ],
  conceitosChave: [
    `Documento colaborativo — arquivo único na nuvem em que várias pessoas escrevem e editam ao mesmo tempo.`,
    `Seção — parte do documento com um título próprio, sob responsabilidade de um aluno (ex.: "Introdução", "Curiosidade 1").`,
    `Estilo de título — formatação especial (Título 1, Título 2) que organiza o texto e cria o índice automático.`,
    `Editor — pessoa com permissão para escrever e alterar o documento, diferente de quem só pode ver ou comentar.`,
    `Cursor colaborativo — marcador colorido com o nome de cada colega, mostrando onde ele está digitando agora.`,
    `Comentário — bilhete preso a um trecho do texto, usado para combinar algo com o colega sem apagar o conteúdo dele.`,
    `Índice (sumário) — lista automática das seções, gerada a partir dos estilos de título, para navegar pelo documento.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai conduzir um "mutirão" de escrita: um único documento aberto por toda a turma ao mesmo tempo. Antes da aula, faça três coisas. Primeiro, crie o documento em docs.new (ou no Google Drive em Novo > Documentos Google) e dê um nome claro, como "Documento da Turma - Jogos Favoritos". Segundo, defina o tema com a turma (pode ser na revisão inicial) e a lista de seções, uma por aluno. Terceiro, deixe pronto um documento de exemplo só seu, com 2 ou 3 seções de teste, para demonstrar sem mexer no arquivo real.

O ponto técnico central é o compartilhamento. No documento, clique no botão azul "Compartilhar" (canto superior direito). Em "Acesso geral", troque "Restrito" por "Qualquer pessoa com o link" e, ao lado, escolha "Editor". Copie o link e envie aos alunos (Sala de aula, chat ou projetor). Assim todos entram já podendo escrever.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento/revisão: Retome as aulas anteriores com perguntas rápidas: "Como compartilho um Doc?", "O que é o modo sugestão?", "Onde fica o histórico de versões?". Anuncie o projeto do mês e mostre o tema no projetor. Combine a lista de seções e quem fica com cada uma.

15 min - Conteúdo novo guiado: No seu documento de exemplo projetado, mostre como criar uma seção. Digite o nome da seção, selecione o texto e, na barra de ferramentas, abra o menu de estilos onde está escrito "Texto normal"; escolha "Título 1" para o título principal e "Título 2" para os subtítulos. Mostre que, ao abrir o menu lateral Ver > Mostrar resumo do documento (ou o ícone de índice à esquerda), aparece o sumário automático com as seções. Demonstre inserir uma imagem em Inserir > Imagem > Pesquisar na web.

25 min - Mão na massa: Compartilhe o link do documento real (Editor) e oriente cada aluno a entrar. Mostre os cursores coloridos com os nomes. Cada aluno vai até a SUA seção, escreve o título em estilo "Título 2", redige o conteúdo, aplica negrito e uma lista (menu de listas na barra), e insere uma imagem relacionada. Circule pela sala garantindo que ninguém escreva na seção do colega. Peça que usem comentários (selecionar texto > ícone de balão "Adicionar comentário", ou Ctrl+Alt+M) para combinar detalhes, como "esta imagem combina?".

10 min - Desafio + compartilhar: Projete o documento e percorra o índice mostrando o trabalho coletivo. Cada aluno apresenta sua seção em 20 segundos. Salve com calma: lembre que o Google Docs salva sozinho na nuvem.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um "mural gigante" onde todos colam seu cartaz ao mesmo tempo. Diga: "Cada um tem seu espaço marcado com seu nome; ninguém cola por cima do cartaz do colega." Explique os cursores coloridos como "fantasminhas com o nome de cada um, mostrando onde a pessoa está mexendo agora". Para os estilos de título, diga que são "etiquetas" que o documento usa para montar sozinho o índice, como o sumário de um gibi.

## Erros comuns e como ajudar

O erro mais comum é o aluno escrever na seção errada e apagar o que o colega fez. Combine a regra "só mexo na minha seção" e mostre o histórico de versões (Arquivo > Histórico de versões) para recuperar, sem drama. Outro erro: usar negrito gigante no lugar do estilo "Título"; reforce a diferença entre formatar à mão e usar a etiqueta de título. Alguns esquecem de aplicar o título e o índice fica vazio; mostre que sem estilo de título a seção não aparece no sumário. Por fim, muitos colam imagens enormes; ensine a clicar na imagem e arrastar os cantos para reduzir.`,
  exercicios: [
    {
      titulo: `Entrei no documento da turma`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Verifique se todos abriram o link como Editor e conseguem ver os cursores coloridos dos colegas. Confirme no projetor quantos cursores aparecem.`,
      atividade: `Abra o link do documento da turma que o professor enviou. Confirme que você consegue digitar. Encontre na tela pelo menos um cursor colorido com o nome de um colega e diga em voz alta de quem é.`,
      gabarito: `O aluno está dentro do documento como Editor (consegue digitar), e identifica corretamente ao menos um cursor colorido com o nome de outro colega. Sinal de sucesso: o documento mostra vários cursores com nomes diferentes ao mesmo tempo.`,
    },
    {
      titulo: `Minha seção com título de verdade`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre de novo o menu "Texto normal" > "Título 2". Circule conferindo se cada aluno aplicou o estilo de título (e não apenas negrito grande) na sua seção.`,
      atividade: `Vá até a SUA seção. Escreva o nome dela (ex.: "Curiosidade 1") e aplique o estilo "Título 2" pelo menu de estilos da barra de ferramentas. Em seguida, escreva pelo menos duas frases de conteúdo abaixo do título.`,
      gabarito: `A seção tem um título no estilo "Título 2" (aparece no índice/resumo do documento) e pelo menos duas frases de conteúdo. Erro típico a corrigir: título feito só com negrito, que não entra no índice.`,
    },
    {
      titulo: `Formatação e imagem na seção`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Lembre os atalhos: Ctrl+B para negrito e o menu de listas na barra. Ensine a redimensionar a imagem arrastando os cantos. Garanta que a imagem fique dentro da seção certa.`,
      atividade: `Na sua seção: deixe uma palavra importante em negrito (Ctrl+B), crie uma lista com 3 itens usando o botão de lista da barra, e insira uma imagem pelo menu Inserir > Imagem > Pesquisar na web. Reduza a imagem arrastando um dos cantos.`,
      gabarito: `A seção contém: pelo menos uma palavra em negrito, uma lista com 3 itens e uma imagem relacionada ao tema, com tamanho razoável (não ocupando a página inteira). A imagem está dentro da seção do próprio aluno.`,
    },
    {
      titulo: `Combinando pelo comentário (em dupla)`,
      tipo: `em dupla`,
      tempo: `5 min`,
      guiaProfessor: `Forme duplas de seções vizinhas. Mostre como inserir comentário (selecionar texto > ícone de balão ou Ctrl+Alt+M) e como responder. Reforce: comentário NÃO apaga o texto do colega.`,
      atividade: `Em dupla, leia a seção do seu colega. Selecione um trecho dele e adicione um comentário com uma sugestão gentil (ex.: "que tal trocar esta imagem por uma maior?"). Depois, responda ao comentário que o colega deixar na sua seção.`,
      gabarito: `Cada aluno deixou pelo menos um comentário preso a um trecho da seção do colega e respondeu a um comentário recebido. O texto original permanece intacto (nada foi apagado). A sugestão é respeitosa e útil.`,
    },
    {
      titulo: `Índice da turma e fechamento`,
      tipo: `roda de conversa`,
      tempo: `5 min`,
      guiaProfessor: `Projete o documento e abra Ver > Mostrar resumo do documento (ou o ícone de índice à esquerda). Percorra o sumário mostrando como cada seção aparece. Conduza a conversa sobre o que falta para a Aula 8.`,
      atividade: `Olhem juntos o índice automático que apareceu com os títulos de todos. Em roda, cada aluno diz em uma frase qual seção é a sua e uma coisa que ainda quer melhorar nela na próxima aula.`,
      gabarito: `O índice mostra as seções da turma (prova de que os estilos de título foram aplicados). Cada aluno identifica sua seção no índice e cita um ponto de melhoria concreto (ex.: "trocar a imagem", "escrever mais uma curiosidade"), preparando a finalização da Aula 8.`,
    },
  ],
};
