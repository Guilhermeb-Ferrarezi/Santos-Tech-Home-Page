import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Artifact: montar e apresentar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o Artifact do mês dentro de um Project no Claude, revisá-lo com bons prompts e arquivos de apoio, e apresentá-lo para a turma explicando como foi construído.`,
  descricao: `Esta é a aula de fechamento do mês inteiro dedicado ao Claude. Durante quatro semanas os alunos conversaram com o Claude, escreveram prompts campeões, enviaram arquivos e imagens, criaram Artifacts, montaram mini-apps e organizaram tudo em Projects com pesquisa responsável. Agora chegou o momento de juntar tudo: cada aluno vai terminar o seu Artifact (um documento, uma tabela ou um mini-app) e mostrá-lo para os colegas, contando a história de como o construiu.

Um Artifact é a janela que aparece ao lado direito da conversa quando o Claude cria algo grande e reaproveitável, como um documento formatado, uma tabela ou uma pequena página interativa. Nesta aula o aluno aprende a abrir esse Artifact dentro de um Project, pedir uma última rodada de melhorias com prompts claros, anexar arquivos de apoio para deixar o conteúdo mais rico e, por fim, exportar ou copiar o resultado para apresentar.

A parte mais importante do dia é a apresentação. Não basta ter um Artifact bonito: o aluno precisa explicar qual problema ele resolve, quais prompts usou, o que deu errado no caminho e como corrigiu. Isso treina comunicação, pensamento crítico e a honestidade de mostrar o processo, não só o produto pronto. É a diferença entre alguém que apertou botões e alguém que de fato sabe usar a ferramenta.

Para o professor, esta aula é mais de mediação do que de conteúdo novo. O foco é garantir que cada aluno tenha um Artifact pronto, ajudar quem ficou para trás e conduzir uma roda de apresentações curta, respeitosa e animada. Ao final do mês, toda a turma deve sair com um entregável concreto que pode mostrar para a família.`,
  materiais: [
    `Computadores com o Claude aberto no navegador (claude.ai), um por aluno, todos com login feito na conta da turma`,
    `Projetor ou TV conectado ao computador do professor para demonstrar e exibir as apresentações`,
    `Project do mês já criado no Claude para cada aluno (ou um Project compartilhado da turma) com o Artifact em andamento`,
    `Arquivos de exemplo de apoio (um PDF curto, uma planilha simples e uma imagem) numa pasta para anexar como referência`,
    `Roteiro de apresentação impresso ou no quadro: o que é, como construí, o que aprendi (1 a 2 minutos por aluno)`,
    `Cronômetro ou relógio visível para controlar o tempo de cada apresentação`,
    `Conta do Claude ativa com acesso a Projects e Artifacts (plano que libera esses recursos)`,
  ],
  conceitosChave: [
    `Artifact — janela ao lado da conversa onde o Claude cria conteúdo grande e reaproveitável, como documento, tabela ou mini-app.`,
    `Project — espaço no Claude que guarda conversas e arquivos de um mesmo assunto, com memória e instruções próprias.`,
    `Arquivo de apoio — documento, planilha ou imagem que você anexa para dar contexto e deixar o resultado do Claude mais correto.`,
    `Revisão — última rodada de melhorias feita com prompts claros para corrigir erros e deixar o Artifact pronto para apresentar.`,
    `Exportar — salvar ou copiar o Artifact para fora do Claude (baixar, copiar texto ou publicar) para poder mostrar e entregar.`,
    `Apresentação — momento de explicar para a turma o que o Artifact faz, como foi construído e o que se aprendeu no caminho.`,
    `Iteração — repetir o ciclo de pedir, avaliar e melhorar várias vezes até o resultado ficar bom de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula consolida o entregável do mês: cada aluno sai com um Artifact pronto e apresentado. Você não precisa ensinar nada totalmente novo, apenas conduzir o fechamento. Antes da aula, confirme que cada aluno tem um Project com um Artifact em andamento (documento, tabela ou mini-app). No Claude, o Artifact é a janela que abre à direita; o Project fica no menu lateral esquerdo, em "Projects". Se algum aluno não tiver começado, oriente-o a abrir uma conversa dentro do Project e pedir ao Claude para criar o Artifact a partir de uma ideia simples. Tenha você mesmo um Artifact de exemplo pronto para demonstrar no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que cada aluno abra claude.ai, faça login e entre no seu Project pelo menu "Projects" à esquerda. Pergunte rapidamente, em roda, o que cada um construiu até agora. No projetor, abra o seu Project e mostre o Artifact de exemplo na janela da direita.

Conteúdo novo guiado (15 min): demonstre o ciclo final de revisão. Dentro do Project, abra a conversa do Artifact, clique nele para expandir a janela à direita e mostre o botão "..." (mais opções) no topo do Artifact, onde ficam "Copy", "Download" e versões. Anexe um arquivo de apoio clicando no clipe de papel (ícone de anexo) na barra de mensagem e peça uma melhoria, por exemplo: "Use as informações deste arquivo para corrigir os dados da tabela e deixar os títulos mais claros." Mostre que o Artifact se atualiza e que dá para voltar a uma versão anterior no seletor de versões.

Mão na massa (25 min): cada aluno faz a sua rodada final. Eles devem dar pelo menos dois comandos de melhoria, anexar um arquivo de apoio e depois exportar (botão "Copy" ou "Download" no topo do Artifact). Circule pela sala, ajudando quem travou. Garanta que todos cheguem a um Artifact que abre, está correto e pode ser mostrado.

Desafio e compartilhar (10 min): faça a roda de apresentações. Cada aluno tem de 1 a 2 minutos para projetar o Artifact e responder: o que é, como construí (quais prompts) e o que aprendi. Aplauda cada um e destaque um ponto positivo de cada apresentação.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "mostrar o jogo, não só o placar". Diga: "Qualquer um pode pedir algo pronto, mas quem entende de verdade sabe contar como fez." Compare o Artifact a um projeto de feira de ciências: você não mostra só o cartaz, você explica o experimento. Chame os prompts de "instruções que você deu ao Claude" e os arquivos de apoio de "as fontes que você usou para não inventar dados". Reforce que errar e corrigir faz parte e é a melhor história para contar.

## Erros comuns e como ajudar

Aluno que perde o Artifact: explique que ele continua salvo na conversa dentro do Project; é só rolar para cima e clicar nele. Aluno que clica em "Download" e nada acontece: confira a pasta de downloads do navegador e o formato oferecido. Aluno que pede mudanças vagas ("melhora aí"): ajude a transformar em pedido específico, dizendo o quê e por quê. Aluno tímido na apresentação: deixe que leia o roteiro de três perguntas e dê tempo. Aluno que quer recomeçar do zero: lembre que dá para voltar a uma versão anterior pelo seletor de versões, sem perder o trabalho. Internet lenta: peça paciência e oriente a salvar uma cópia do texto antes de fechar.`,
  exercicios: [
    {
      titulo: `Abrir o Project e localizar o Artifact`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que todos entrem no Project certo pelo menu "Projects" à esquerda e encontrem o Artifact dentro da conversa. Quem não achar deve rolar a conversa para cima e clicar no bloco do Artifact para abrir a janela à direita.`,
      atividade: `Faça login em claude.ai, abra o seu Project no menu "Projects" à esquerda, encontre a conversa do seu Artifact e clique nele para abrir a janela à direita. Confira se o seu Artifact ainda abre e está como você deixou na última aula.`,
      gabarito: `O aluno tem o Project aberto e o Artifact visível na janela à direita. Caminho correto: barra lateral esquerda, item "Projects", abrir o Project, clicar na conversa e depois no bloco do Artifact. Se não abrir, é preciso rolar a conversa para cima até achar o bloco.`,
    },
    {
      titulo: `Revisar com dois prompts campeões`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno deve dar dois comandos de melhoria específicos. Combata o "melhora aí": peça que digam o quê mudar e por quê. Mostre que o Artifact se atualiza na janela à direita após cada pedido.`,
      atividade: `Escreva dois prompts de revisão para o seu Artifact, um de cada vez. Exemplos: "Corrija os erros de português e deixe os títulos em negrito." e "Adicione uma linha de total ao final da tabela." Envie cada um e observe o Artifact se atualizar.`,
      gabarito: `Dois prompts específicos foram enviados e o Artifact mudou de forma visível na janela à direita. Um bom prompt diz o quê fazer (ação) e em qual parte (alvo). Exemplo correto: "Deixe o primeiro parágrafo mais curto, com no máximo três frases." Exemplo fraco a evitar: "melhora isso aí".`,
    },
    {
      titulo: `Anexar um arquivo de apoio`,
      tipo: `Atividade em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Em duplas, os alunos anexam um arquivo de exemplo (PDF, planilha ou imagem) pelo ícone de clipe de papel na barra de mensagem e pedem ao Claude para usar aquele conteúdo no Artifact. Reforce que o arquivo serve para não inventar dados.`,
      atividade: `Em dupla, escolham um arquivo de apoio da pasta de exemplos. Cliquem no ícone de clipe de papel (anexo) na barra de mensagem, anexem o arquivo e peçam: "Use as informações deste arquivo para melhorar o meu Artifact, corrigindo dados e citando a fonte." Confiram juntos o resultado.`,
      gabarito: `O arquivo foi anexado pelo ícone de clipe de papel e o Claude usou o conteúdo dele para atualizar o Artifact. A dupla consegue apontar pelo menos uma informação no Artifact que veio do arquivo. O arquivo de apoio evita que o Claude invente dados e dá uma fonte real para o conteúdo.`,
    },
    {
      titulo: `Exportar e preparar a apresentação`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada aluno exporta o Artifact pelo botão "..." no topo da janela do Artifact, usando "Copy" ou "Download". Em seguida, escrevem três frases curtas no roteiro: o que é, como construí, o que aprendi. Verifique se o arquivo realmente baixou ou se o texto foi copiado.`,
      atividade: `Exporte o seu Artifact pelo botão "..." no topo da janela (use "Copy" para copiar ou "Download" para baixar). Depois escreva no roteiro três frases: (1) o que o meu Artifact faz, (2) como eu o construí no Claude, (3) o que eu aprendi fazendo. Treine falar em voz baixa.`,
      gabarito: `O Artifact foi exportado (copiado ou baixado) com sucesso e o aluno tem as três frases prontas. Caminho de exportação: botão "..." no topo do Artifact, opção "Copy" ou "Download". As três frases devem responder o que é, como foi feito (com menção a prompts ou arquivos) e o que se aprendeu. Roteiro sem as três respostas não está pronto.`,
    },
    {
      titulo: `Roda de apresentações da turma`,
      tipo: `Roda de conversa`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza a roda projetando o Artifact de cada aluno. Dê de 1 a 2 minutos por pessoa, controle o tempo com cronômetro e garanta que cada um responda as três perguntas do roteiro. Peça à turma um aplauso e destaque um ponto positivo de cada apresentação. Mantenha o clima respeitoso e encorajador.`,
      atividade: `Apresente o seu Artifact no projetor para a turma em 1 a 2 minutos. Responda: o que ele faz, como você o construiu (quais prompts e arquivos usou) e o que aprendeu. Depois, escute os colegas e diga um elogio sincero a pelo menos uma apresentação que não seja a sua.`,
      gabarito: `Todos os alunos apresentaram dentro do tempo e responderam as três perguntas. Uma apresentação completa mostra o Artifact funcionando, explica o processo (prompts e arquivos de apoio) e cita um aprendizado honesto, inclusive um erro corrigido. Exemplo de elogio válido: "Gostei de como você usou o arquivo para corrigir os números da tabela." Apresentação que só mostra o resultado, sem contar como foi feito, está incompleta.`,
    },
  ],
};
