import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando meu pacote de imagens",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir e organizar todas as imagens criadas no mês — cenas, texturas e ícones — em um pacote único com pastas e nomes claros, escolhendo as melhores e padronizando o estilo.`,
  descricao: `Esta é a aula de arrumação da casa. Durante o mês inteiro, cada aluno gerou muitas imagens com o Gemini usando o Nano Banana: cenários do jogo, texturas que dão vida às superfícies e ícones com cara de profissional. O problema é que esse material costuma ficar espalhado — algumas imagens na pasta de Downloads, outras no histórico do chat, várias com nomes automáticos como "image (3).png". A missão de hoje é transformar essa bagunça em um pacote de imagens organizado, fácil de achar e pronto para entrar no jogo.

Organizar não é uma tarefa secundária: é o que separa um amador de um profissional. Quando o aluno entrar no Roblox Studio ou no Canva nos próximos meses, ele vai precisar achar rapidamente "o ícone de moeda" ou "a textura de pedra". Se cada arquivo tiver um nome claro e estiver na pasta certa, isso leva segundos. Se estiver tudo embolado, leva minutos e gera frustração. Hoje o aluno aprende a pensar como um diretor de arte que cuida do próprio acervo.

O trabalho tem três frentes que acontecem juntas. Primeiro, a seleção: olhar tudo o que foi gerado e escolher as melhores versões, descartando o que ficou borrado, fora do estilo ou repetido. Segundo, a padronização: garantir que cenas, texturas e ícones conversem entre si — mesma paleta de cores, mesmo nível de detalhe, mesma "vibe". Quando algo não combina, o aluno volta ao Gemini com o Nano Banana e regenera ou ajusta a imagem para alinhar o estilo. Terceiro, a organização: criar uma pasta-mãe do projeto com três subpastas (cenas, texturas e ícones) e renomear cada arquivo com um nome que descreve o que ele é.

Ao final da aula, cada aluno terá uma pasta organizada no computador, com as melhores imagens do mês separadas por tipo, nomeadas com clareza, e uma pequena lista do que ainda falta gerar ou ajustar. Esse é o esqueleto do entregável do mês — o Pacote de Imagens Próprio — que será finalizado e apresentado na Aula 8.`,
  materiais: [
    `Computadores com acesso ao Gemini (gemini.google.com) e ao Nano Banana já liberado, cada aluno com sua conta Google logada`,
    `Navegador atualizado (Chrome ou Edge) e gerenciador de arquivos do sistema (Explorador de Arquivos no Windows)`,
    `Projetor ou TV para o professor demonstrar a criação de pastas e a renomeação dos arquivos`,
    `Pasta de exemplo já organizada pelo professor (com subpastas "cenas", "texturas" e "ícones" e arquivos bem nomeados) para servir de modelo`,
    `Todas as imagens que cada aluno gerou nas semanas anteriores do mês (no histórico do Gemini e/ou já baixadas)`,
    `Folha ou documento digital com uma tabela simples de "checklist do pacote" para anotar o que falta`,
    `Espaço livre no disco e, se houver, um pen drive ou pasta na nuvem para backup do pacote`,
  ],
  conceitosChave: [
    `Pacote de imagens — conjunto organizado de todas as artes do jogo (cenas, texturas e ícones) reunidas em um lugar só, pronto para usar.`,
    `Curadoria — o ato de escolher as melhores imagens e descartar as fracas, repetidas ou fora do estilo.`,
    `Padronização — deixar todas as imagens com a mesma cara: mesma paleta de cores, mesmo nível de detalhe e mesma vibe.`,
    `Convenção de nomes — regra combinada para nomear arquivos de forma clara, como "cena_floresta_01.png", em vez de nomes automáticos.`,
    `Subpasta — pasta dentro de outra pasta; aqui usamos três (cenas, texturas e ícones) dentro da pasta-mãe do projeto.`,
    `Resolução — quantidade de pixels da imagem; quanto maior, mais nítida ela fica quando ampliada no jogo.`,
    `Checklist — lista de verificação do que já está pronto e do que ainda falta gerar ou ajustar no pacote.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você é organizador de acervo, não só professor de geração de imagens. A parte de criar imagens no Gemini com o Nano Banana já foi treinada nas semanas anteriores; nesta aula ela aparece apenas como apoio, quando o aluno precisar regenerar ou ajustar uma imagem para padronizar o estilo. O grosso da aula acontece no gerenciador de arquivos do computador: criar pastas, mover imagens e renomear arquivos. Você não precisa ser um expert em IA para conduzir; precisa saber criar pastas e renomear arquivos, e eu explico tudo abaixo.

Lembre rapidamente como cada aluno recupera as imagens já feitas. No Gemini (gemini.google.com), o histórico de conversas fica na coluna da esquerda; ao abrir uma conversa antiga, as imagens geradas aparecem no fluxo. Para baixar, basta passar o mouse sobre a imagem e clicar no ícone de download (uma seta para baixo) ou clicar com o botão direito e escolher "Salvar imagem como". Para gerar de novo ou ajustar, o aluno digita um novo pedido na caixa de mensagem, por exemplo: "Refaça esta textura de pedra com cores mais frias para combinar com as outras." Esse será o único uso da ferramenta hoje.

No computador (Windows), criar pasta é com o botão direito numa área vazia, "Novo", "Pasta". Renomear é clicar uma vez no arquivo e apertar F2, ou botão direito e "Renomear". Tenha sua pasta-modelo pronta no projetor antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Mostre no projetor uma pasta toda bagunçada, com nomes como "image (7).png", e ao lado a sua pasta-modelo organizada. Pergunte: "Em qual delas você acha o ícone da moeda em três segundos?" Conduza a turma a perceber que organização economiza tempo. Liste no quadro os três tipos de imagem do mês: cenas, texturas e ícones.

15 min - Conteúdo novo guiado: No projetor, crie ao vivo a pasta-mãe (ex.: "PacoteImagens_Joao"), e dentro dela três subpastas: "cenas", "texturas" e "ícones" (sem acento e sem espaço nos nomes, para evitar problemas no jogo). Baixe uma imagem do Gemini, mova-a para a subpasta certa e renomeie com a convenção combinada: tipo_descricao_numero, como "icone_moeda_01.png". Repita com mais uma imagem de outro tipo para fixar.

25 min - Mão na massa: Cada aluno cria a própria pasta-mãe e as três subpastas, revisita o histórico do Gemini, baixa as melhores imagens do mês e as distribui nas subpastas, renomeando cada uma. Enquanto organizam, marcam no checklist o que está fora do estilo. Quem terminar de organizar volta ao Gemini com o Nano Banana para regenerar uma imagem que não combina. Circule conferindo nomes e pastas.

10 min - Desafio e compartilhar: Em duplas, cada aluno mostra a pasta ao colega, que tenta achar um arquivo específico (ex.: "ache a textura de madeira") em até dez segundos. Feche pedindo que cada um diga uma imagem que ainda falta gerar ou ajustar.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora do guarda-roupa: "Você não joga camisa, meia e tênis tudo numa pilha; cada coisa tem sua gaveta. Suas imagens também." Diga que o nome do arquivo é como o rótulo de uma caixa: "Se a caixa diz só 'coisas', você abre todas; se diz 'ícone moeda', você vai direto." Para padronização, fale em "vibe": "Se uma cena é colorida e fofa e o ícone é sombrio, eles brigam; queremos que tudo pareça do mesmo jogo." Reforce que regenerar no Gemini é normal: artista profissional refaz até combinar.

## Erros comuns e como ajudar

O erro mais comum é usar acentos e espaços nos nomes de pasta e arquivo; explique que isso pode quebrar no Roblox e peça nomes sem acento, com underline no lugar do espaço. Outro é guardar TUDO, inclusive imagens borradas e repetidas; incentive a coragem de descartar e ficar só com as melhores. Alguns baixam a mesma imagem várias vezes e geram duplicatas; oriente a conferir antes de baixar. Há quem renomeie sem padrão, misturando estilos de nome; volte à convenção tipo_descricao_numero no quadro. Por fim, muitos esquecem de fazer backup; reserve um minuto no fim para copiar a pasta para a nuvem ou o pen drive.`,
  exercicios: [
    {
      titulo: `Montando a estrutura de pastas`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Acompanhe cada aluno criando a pasta-mãe e as três subpastas. Confira que os nomes não têm acento nem espaço. Use o botão direito, "Novo", "Pasta".`,
      atividade: `No computador, crie uma pasta-mãe com seu nome (ex.: "PacoteImagens_Maria") e, dentro dela, três subpastas: "cenas", "texturas" e "ícones". Não use acentos nem espaços nos nomes.`,
      gabarito: `Está correto quando existe uma pasta-mãe contendo exatamente três subpastas chamadas "cenas", "texturas" e "ícones", todas sem acento e sem espaço. Exemplo aceito: a pasta "PacoteImagens_Maria" com as três subpastas vazias prontas para receber as imagens.`,
    },
    {
      titulo: `Baixando e nomeando as melhores`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Mostre como abrir o histórico do Gemini e baixar imagens (ícone de download ou botão direito, "Salvar imagem como"). Reforce a convenção tipo_descricao_numero e a seleção das melhores versões.`,
      atividade: `Abra o histórico do Gemini, escolha suas melhores cenas, texturas e ícones do mês, baixe cada uma, mova para a subpasta certa e renomeie no formato tipo_descricao_numero (ex.: "cena_floresta_01.png", "textura_pedra_02.png", "icone_moeda_01.png").`,
      gabarito: `Está correto quando cada subpasta tem pelo menos uma imagem selecionada (uma boa versão, não borrada) e todos os arquivos seguem o padrão tipo_descricao_numero. Exemplo válido: na subpasta "ícones", o arquivo "icone_vida_01.png"; na subpasta "texturas", "textura_madeira_01.png".`,
    },
    {
      titulo: `Caça aos arquivos`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e cronometre. Um aluno pede um arquivo pelo nome ("ache a textura de madeira") e o outro busca em até dez segundos. Use isso para mostrar que bons nomes aceleram tudo.`,
      atividade: `Em dupla, abra sua pasta para o colega. Ele vai pedir três imagens pelo nome (ex.: "o ícone de moeda"). Você tenta achar cada uma em até dez segundos. Depois troquem os papéis.`,
      gabarito: `A dupla acerta quando os arquivos pedidos são encontrados rápido porque os nomes são claros e estão na subpasta certa. Se algum demorou ou não foi achado, o aluno corrige o nome ou move o arquivo para a pasta certa na hora. Sucesso é achar as três imagens em poucos segundos cada.`,
    },
    {
      titulo: `Padronizando a vibe`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada aluno coloque suas imagens lado a lado e ache a que mais destoa do conjunto. Acompanhe quem volta ao Gemini para regenerar com o Nano Banana, sugerindo citar a paleta das outras imagens no pedido.`,
      atividade: `Coloque suas cenas, texturas e ícones lado a lado e encontre a imagem que mais foge do estilo do conjunto. Volte ao Gemini e peça ao Nano Banana para refazê-la combinando com as outras, por exemplo: "Refaça este ícone com a mesma paleta de cores quentes e o mesmo traço das minhas outras imagens." Substitua a antiga pela nova na pasta.`,
      gabarito: `Está correto quando o aluno identifica uma imagem fora do estilo, gera uma nova versão mais alinhada (mesma paleta e mesmo traço) e substitui o arquivo na subpasta, mantendo o nome no padrão. Exemplo aceito: trocar um "icone_moeda_01.png" muito escuro por uma versão clara que combina com os demais ícones.`,
    },
    {
      titulo: `Checklist do que falta`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Sente a turma em roda. Conduza cada aluno a revisar seu pacote e listar o que ainda falta gerar ou ajustar para a Aula 8. Anote no quadro padrões comuns para ajudar quem está perdido.`,
      atividade: `Em roda, mostre seu pacote e diga em voz alta: quantas imagens você tem em cada subpasta, qual está faltando e o que precisa ajustar. Anote no seu checklist pelo menos duas tarefas para terminar na próxima aula.`,
      gabarito: `A participação é completa quando o aluno relata quantas imagens tem por tipo, aponta ao menos um item faltando e registra duas tarefas no checklist. Exemplo aceito: "Tenho três cenas, quatro texturas e dois ícones; falta um ícone de vida e preciso clarear a textura de pedra."`,
    },
  ],
};
