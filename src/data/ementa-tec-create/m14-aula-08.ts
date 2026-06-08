import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Banco de Vídeos Pronto e Apresentado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar e revisar o Banco de Vídeos da IA completo e bem organizado, registrar qual cena cada clipe cobre e apresentar o banco à turma, fechando a Etapa 2 de 5 do projeto do ano.`,
  descricao: `Esta é a aula de fechamento do segundo mês do Ano 2. Durante quatro semanas, cada aluno aprendeu a usar o Gemini com o Veo para transformar ideias em vídeo: escreveu prompts, dirigiu a câmera da IA, criou cenas em movimento, deu a cara do próprio jogo aos clipes e refinou e variou os resultados. Nas últimas aulas, todo esse material foi reunido num lugar só, com nomes de arquivo claros e uma planilha de controle. Hoje o aluno termina, confere e apresenta esse Banco de Vídeos da IA completo.

O foco do dia não é gerar vídeo novo, e sim consolidar e apresentar. O aluno abre o banco, assiste a cada clipe com olhar crítico e confere três coisas: se o vídeo atende ao que o projeto pede, se o nome do arquivo está certo e se a planilha registra qual cena daquele clipe cobre. Esse banco organizado é o entregável do mês e a base que será reaproveitada nos próximos meses, quando a trilha sonora, a voz, a arte e o jogo no Roblox forem montados em cima desses vídeos.

A apresentação é a parte mais importante da aula. Cada aluno mostra o seu banco no projetor, abre a pasta para a turma ver a organização, reproduz dois ou três clipes que mais gosta e explica qual cena cada um cobre e por que escolheu aquele resultado. Isso treina comunicação, organização e olhar crítico, três habilidades que valem para qualquer projeto de tecnologia e que serão cobradas o ano inteiro.

Para o professor, a aula é leve em ferramenta nova e forte em acompanhamento. O papel principal é garantir que ninguém feche o mês com clipes que nunca foram baixados, pasta bagunçada, nomes repetidos ou cenas sem nenhum vídeo associado. Ao final, todos devem ter o Banco de Vídeos da IA arquivado, nomeado, com a planilha preenchida e apresentado, pronto para abrir a Etapa 3 de 5.`,
  materiais: [
    `Computadores com o Gemini aberto (com o Veo habilitado) e a conta de cada aluno já logada, para reabrir e baixar qualquer clipe que ainda falte.`,
    `Navegador atualizado (Chrome ou Edge) para reproduzir os vídeos e acessar a pasta do banco na nuvem.`,
    `Projetor ou TV conectada ao computador do professor para as apresentações da turma.`,
    `A pasta do Banco de Vídeos da IA de cada aluno (na área de trabalho ou na nuvem da turma), com os clipes já baixados em MP4.`,
    `A planilha de controle do banco (uma linha por clipe: nome do arquivo, cena que cobre e situação), aberta em cada computador.`,
    `Arquivo de exemplo: um banco-modelo já montado pelo professor, com clipes numerados, planilha preenchida e nomes padronizados.`,
    `Lista de checagem impressa ou no quadro com os itens obrigatórios da entrega (clipe baixado, nome certo, cena registrada, atende ao projeto).`,
  ],
  conceitosChave: [
    `Banco de Vídeos da IA — a coleção organizada de todos os clipes gerados no mês, guardada numa pasta clara para ser reaproveitada nos próximos meses.`,
    `Entregável — o resultado final combinado do mês; aqui, o Banco de Vídeos da IA completo, nomeado e apresentado.`,
    `Planilha de controle — a tabela com uma linha por clipe que registra o nome do arquivo, a cena que ele cobre e se está pronto.`,
    `Cobertura de cena — a checagem de que toda cena do projeto tem pelo menos um vídeo associado a ela, sem cena ficar de fora.`,
    `Revisar — assistir ao próprio material com olhar crítico para achar clipes fracos, repetidos ou fora do projeto antes de entregar.`,
    `Padronizar nomes — usar um mesmo jeito de nomear os arquivos (por exemplo, cena e número) para encontrar tudo com facilidade.`,
    `Etapa 2 de 5 — a segunda das cinco fases do projeto do ano; o Banco de Vídeos da IA será a base para som, arte, 3D e o jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina ferramenta nova: o trabalho com o Gemini e o Veo já foi feito nas sete aulas anteriores. A aula é de CONSOLIDAÇÃO e de APRESENTAÇÃO. Cada aluno termina, confere e mostra à turma o Banco de Vídeos da IA: a pasta com todos os clipes baixados em MP4, com nomes padronizados, e a planilha de controle que diz qual cena cada vídeo cobre. O clima é de fechamento de etapa, organizado e acolhedor, sem cobrança por clipe imperfeito.

Tecnicamente, você só precisa saber três coisas. Primeira: reabrir um clipe no Gemini caso falte baixar. No Gemini, role a conversa até o vídeo, passe o mouse por cima do clipe e clique no ícone de baixar (a setinha para baixo) ou nos três pontinhos e em "Baixar"; o arquivo cai na pasta Downloads em MP4. Segunda: mover o arquivo para a pasta do banco e renomear (clique com o botão direito, depois "Renomear"), usando o padrão combinado, por exemplo "cena01_introducao_v2". Terceira: abrir e preencher a planilha de controle, uma linha por clipe, com nome do arquivo, cena que cobre e situação (pronto ou refazer). Teste o projetor antes da aula e deixe o seu banco-modelo aberto para mostrar como fica certo.

Antes de começar, escreva no quadro a lista de checagem da entrega: clipe baixado em MP4, nome no padrão, cena registrada na planilha, vídeo atende ao que o projeto pede e nenhuma cena sem vídeo. Deixe o banco-modelo à vista para servir de referência.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Gemini + Veo)

1. Aquecimento e revisão (10 min). Receba a turma e relembre o caminho do mês: do primeiro vídeo no Veo até refinar e variar os clipes. Mostre rapidamente o seu banco-modelo no projetor: a pasta organizada e a planilha preenchida. Leia em voz alta a lista de checagem do quadro.

2. Conteúdo novo guiado (15 min). Demonstre a revisão final passo a passo no banco-modelo. Abra a pasta, reproduza um clipe, confira o nome do arquivo e mostre a linha dele na planilha, lendo qual cena ele cobre. Repare em voz alta se há cena sem vídeo. Se faltar baixar algum clipe, mostre como reabrir no Gemini, passar o mouse no vídeo, clicar no ícone de baixar e arrastar o MP4 para a pasta do banco, renomeando no padrão.

3. Mão na massa (25 min). Cada aluno revisa o próprio banco com a lista de checagem na frente. Assiste a cada clipe, confere se atende ao projeto, corrige nomes fora do padrão (botão direito, "Renomear"), baixa o que faltava no Gemini e preenche a planilha, garantindo que toda cena tenha pelo menos um vídeo. Circule pelas máquinas, abrindo a planilha de cada um e perguntando "qual cena este clipe cobre?".

4. Desafio e compartilhar (10 min). Cada aluno apresenta o banco no projetor: abre a pasta, mostra a organização, reproduz dois clipes e diz qual cena cada um cobre. A turma aplaude. Encerre dizendo que a Etapa 2 de 5 está fechada e que esses vídeos serão a base do próximo mês.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes, use a ideia de biblioteca de vídeos do estúdio: "Seu banco é o acervo do seu jogo; quando precisar de uma cena, você abre a prateleira certa e o vídeo está lá." Trate a planilha como o catálogo: "Cada linha diz o nome do arquivo e qual cena ele cobre, igual à etiqueta de uma estante." Para a cobertura de cena, pergunte "tem alguma cena do seu projeto sem nenhum vídeo? Essa é a que falta." Para os nomes, use a regra do colega de futuro: "Daqui a dois meses, você vai conseguir achar este clipe só pelo nome?". Demonstre você primeiro, fale frases curtas e elogie a organização tanto quanto o clipe bonito.

## Erros comuns e como ajudar

- Clipe assistido no Gemini mas nunca baixado: peça para reabrir a conversa, passar o mouse no vídeo e clicar no ícone de baixar; sem o MP4 na pasta, o clipe não conta.
- Nomes repetidos ou bagunçados (vídeo, vídeo (1), final_final): mostre o padrão "cena e número" e renomeie junto com o aluno pelo botão direito.
- Cena do projeto sem nenhum vídeo: use a planilha para achar a cena vazia e oriente reaproveitar um clipe parecido ou marcar como "refazer".
- Planilha em branco ou só na cabeça: sente ao lado e preencham uma linha juntos; o controle precisa estar escrito, não na memória.
- Apresentação virando exibição de vídeo aleatório: combine antes que cada um mostra só dois clipes e sempre diz qual cena eles cobrem.`,
  exercicios: [
    {
      titulo: `Revisão clipe a clipe com a lista de checagem`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a turma na primeira passada de revisão do próprio banco. Cada aluno abre a pasta do Banco de Vídeos da IA, reproduz cada clipe e confere, com a lista de checagem na frente, se o vídeo está baixado em MP4, se o nome segue o padrão e se atende ao que o projeto pede. Circule abrindo a pasta de cada aluno e perguntando se algum clipe ainda está só no Gemini, sem ter sido baixado. O objetivo é que todos saibam exatamente o que já está pronto e o que ainda falta antes de seguir.`,
      atividade: `1. Abra a pasta do seu Banco de Vídeos da IA no computador.
2. Reproduza cada clipe, um por um, do começo ao fim.
3. Para cada um, marque na lista de checagem: baixado em MP4, nome no padrão e atende ao projeto.
4. Anote quais clipes ainda precisam ser baixados ou corrigidos.`,
      gabarito: `Acertou quem termina com a lista de checagem preenchida e sabe dizer, clipe por clipe, o que está pronto e o que falta. Exemplo de sucesso: o aluno aponta "estes quatro estão prontos e este aqui ainda está só no Gemini, preciso baixar". Encontrar problemas conta como acerto, pois o objetivo da revisão é justamente achá-los. O resultado esperado é um diagnóstico claro do próprio banco antes de arrumá-lo.`,
    },
    {
      titulo: `Padronizando os nomes dos arquivos`,
      tipo: `Prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Mostre no banco-modelo o padrão de nome combinado (por exemplo "cena01_introducao_v2") e peça que cada aluno renomeie os próprios arquivos para seguir esse padrão. Demonstre clicar com o botão direito no arquivo e escolher "Renomear", trocando nomes como "vídeo (1)" por algo que diga a cena e o número. Se faltar baixar algum clipe, oriente a reabrir o Gemini, passar o mouse no vídeo, clicar no ícone de baixar e arrastar o MP4 para a pasta antes de renomear. Circule conferindo se os nomes ficaram claros e sem repetição.`,
      atividade: `1. Olhe o padrão de nome no banco-modelo do professor.
2. Clique com o botão direito em cada clipe e escolha "Renomear".
3. Troque o nome para o padrão, indicando a cena e o número (ex.: cena02_perseguicao_v1).
4. Confira se não há dois arquivos com o mesmo nome na pasta.`,
      gabarito: `Acertou quem deixa todos os arquivos com nomes no padrão, sem repetição e fáceis de entender. Exemplo de sucesso: a pasta passa de "vídeo, vídeo (1), final_final" para "cena01_introducao_v2, cena02_perseguicao_v1, cena03_final_v3". Pequenas variações no padrão valem, desde que o nome diga claramente qual cena o clipe cobre. O resultado esperado é uma pasta em que qualquer pessoa acha o clipe certo só pelo nome.`,
    },
    {
      titulo: `Conferindo a cobertura das cenas em dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas para uma conferência cruzada da planilha de controle. Um aluno abre a sua planilha e lê, linha por linha, qual cena cada clipe cobre; o colega anota quais cenas do projeto aparecem e quais não aparecem em nenhuma linha. Depois trocam de papel. O objetivo é caçar a cena órfã, aquela sem nenhum vídeo associado. Reforce que encontrar uma cena vazia é vitória, porque dá tempo de resolver: reaproveitar um clipe parecido ou marcar a linha como "refazer". Circule garantindo que a planilha esteja escrita, não só na cabeça do aluno.`,
      atividade: `1. Em dupla, decidam quem mostra a planilha primeiro.
2. Quem mostra lê cada linha em voz alta: nome do arquivo e cena que cobre.
3. O colega lista as cenas do projeto e marca quais ficaram sem nenhum vídeo.
4. Apontem juntos a cena que falta e troquem de papel para revisar o outro banco.`,
      gabarito: `Acertou a dupla que identifica corretamente se todas as cenas têm vídeo ou aponta a cena que ficou sem nenhum. Exemplos de respostas certas: "Todas as cenas têm pelo menos um clipe", ou "A cena do chefe ficou sem vídeo, falta gerar ou marcar para refazer". Achar a cena vazia conta como o maior acerto, pois é o objetivo da conferência. O resultado esperado é cada banco com a cobertura de cenas verificada e qualquer falha já anotada na planilha.`,
    },
    {
      titulo: `Banco completo e planilha fechada`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Este é o momento de finalizar o entregável. Cada aluno aplica tudo o que revisou: baixa no Gemini os clipes que faltavam, move e renomeia os arquivos no padrão, garante que toda cena tenha pelo menos um vídeo e preenche a planilha de controle com uma linha por clipe (nome, cena e situação). O banco precisa terminar arquivado na pasta certa, na nuvem da turma, completo. Circule conferindo a lista de checagem de cada um e ajudando quem ainda tem clipe no Gemini ou planilha incompleta. Não force perfeição no clipe; o foco é o banco organizado e a planilha fechada.`,
      atividade: `1. Baixe no Gemini qualquer clipe que ainda faltava e mova o MP4 para a pasta do banco.
2. Renomeie tudo no padrão e confira que nenhuma cena ficou sem vídeo.
3. Preencha a planilha: uma linha por clipe, com nome do arquivo, cena e situação.
4. Salve a pasta no lugar combinado e marque todos os itens da lista de checagem.`,
      gabarito: `Acertou quem termina com o Banco de Vídeos da IA completo, organizado e arquivado, e a planilha preenchida sem cena sem vídeo. Exemplo de sucesso: a pasta tem todos os clipes em MP4 com nomes no padrão, e a planilha mostra cada clipe com a cena que cobre e a situação "pronto". Pequenos ajustes feitos com ajuda do professor contam como acerto. O resultado esperado é o entregável do mês fechado e pronto para a Etapa 3 de 5.`,
    },
    {
      titulo: `Apresentação do banco à turma`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Feche o mês com a apresentação no projetor. Chame os alunos um a um para abrir o próprio banco na frente da turma: mostrar a pasta organizada, reproduzir dois clipes que mais gosta e dizer qual cena cada um cobre, contando uma escolha que fez (por que aquele resultado e não outro). Conduza como mestre de cerimônias, puxando os aplausos e nunca apontando defeitos diante de todos. Depois das falas, abra uma roda rápida em que cada aluno diz o que aprendeu sobre vídeo com IA no mês. Encerre anunciando que a Etapa 2 de 5 está concluída.`,
      atividade: `1. Quando o professor chamar, abra o seu Banco de Vídeos da IA no projetor.
2. Mostre a pasta organizada e reproduza dois clipes que você mais gosta.
3. Diga qual cena cada clipe cobre e conte uma escolha que você fez.
4. Na roda final, diga uma coisa que você aprendeu sobre vídeo com IA neste mês.`,
      gabarito: `Acertou todo aluno que apresenta o seu banco mostrando a organização, reproduzindo clipes e dizendo qual cena cada um cobre. Exemplos de respostas certas na roda: "Aprendi a dirigir a câmera da IA no prompt", "Descobri como variar um clipe sem perder a cara do meu jogo", "Entendi a importância de nomear bem os arquivos". Qualquer participação, mesmo curta ou em dupla, conta como sucesso. O objetivo é fechar a etapa celebrando o Banco de Vídeos da IA de cada um e o que foi aprendido no mês.`,
    },
  ],
};
