import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Explorar imagens e ideias com Gemini",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprofundar o uso do Gemini enviando imagens para análise, gerando ideias criativas e apoiando tarefas escolares com busca atualizada, percebendo quando ele se sai melhor que o ChatGPT.`,
  descricao: `Esta é a quarta aula do mês dedicado às inteligências artificiais e a segunda semana inteira voltada ao Gemini, a IA do Google. Na aula passada os alunos deram os primeiros passos: criaram a conta, conversaram por texto e entenderam como escrever um bom comando, o famoso prompt. Agora a turma vai descobrir um superpoder que diferencia o Gemini de muitas outras IAs: ele "enxerga" imagens. O aluno pode enviar uma foto, um desenho, um gráfico ou a página de um livro e pedir explicações, e o Gemini responde sobre aquilo que está na imagem.

A grande ideia da aula é combinar imagem e texto no mesmo comando. Em vez de só perguntar com palavras, o aluno anexa uma figura e escreve ao lado o que deseja: "explique esta imagem", "que planta é esta?", "me ajude a entender este gráfico" ou "dê três ideias de legenda para esta foto". Essa mistura de ver e perguntar abre caminho para usos muito úteis no dia a dia escolar, como entender um diagrama de ciências, decifrar um exercício de matemática fotografado ou descobrir o nome de um monumento numa foto de viagem.

Além de analisar imagens, o Gemini é forte em duas coisas que a turma vai praticar: gerar ideias criativas e buscar informações atualizadas. Por ser do Google, ele consegue trazer respostas conectadas a buscas recentes, o que ajuda em pesquisas escolares sobre temas do momento. E, como assistente criativo, ele é ótimo para destravar a imaginação: nomes para um projeto, ideias para uma apresentação, temas para uma redação ou um roteiro de vídeo. A aula trata o Gemini como um parceiro de brainstorming e um leitor de imagens, sempre com o aluno checando se a resposta faz sentido.

Ao final, a turma faz uma comparação leve e divertida: em quais tarefas o Gemini se sai melhor que o ChatGPT? Sem competição séria, o objetivo é treinar o olhar crítico. Os alunos vão perceber, por exemplo, que para "ler" uma imagem ou trazer algo bem recente o Gemini costuma brilhar, enquanto cada IA tem seu jeito de responder. Essa comparação prepara o terreno para o grande desafio do mês, quando as quatro inteligências vão enfrentar o mesmo problema lado a lado.`,
  materiais: [
    `Computadores (1 por aluno) com navegador atualizado (Chrome ou Edge) e o Gemini aberto na página gemini.google.com`,
    `Conta Google ativa para cada aluno, já logada na aula anterior, para entrar no Gemini sem perder tempo`,
    `Projetor ou TV para o professor mostrar a própria tela e demonstrar onde clicar para anexar e enviar imagens`,
    `Pasta de imagens de exemplo já salva em cada computador: uma foto de planta ou animal, um gráfico simples, um monumento conhecido e a foto de um exercício escolar`,
    `O ChatGPT também aberto numa aba ao lado, para a comparação final entre as duas IAs no mesmo desafio`,
    `Folha impressa ou slide com a "receita de prompt com imagem": anexar a imagem + escrever o que você quer saber`,
    `Quadro branco para anotar, com a turma, as descobertas sobre quando cada IA se sai melhor`,
  ],
  conceitosChave: [
    `Gemini — a inteligência artificial do Google, capaz de conversar por texto, analisar imagens e buscar informações atualizadas na internet.`,
    `Prompt com imagem — comando em que você anexa uma figura e escreve, ao lado, o que deseja que a IA faça com ela (ex.: "explique esta foto").`,
    `Análise de imagem — capacidade do Gemini de "enxergar" o conteúdo de uma figura e descrever, explicar ou responder perguntas sobre ela.`,
    `Busca atualizada — recurso do Gemini de trazer informações recentes da internet, útil para pesquisas escolares sobre temas do momento.`,
    `Brainstorming — gerar muitas ideias rapidamente sobre um tema (nomes, títulos, roteiros) para depois escolher e melhorar as melhores.`,
    `Anexar — ação de adicionar um arquivo (como uma imagem) ao comando, geralmente pelo ícone de clipe ou de imagem na caixa de mensagem.`,
    `Checagem — hábito de conferir se a resposta da IA está correta e faz sentido, comparando com o que você já sabe ou com outra fonte.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA para dar esta aula. O essencial é entender que o Gemini, além de conversar por texto, consegue "ler" imagens. Na prática, isso significa que o aluno anexa uma figura na caixa de mensagem e escreve ao lado o que quer saber. Para anexar, procure na caixa de texto do Gemini o ícone de imagem ou de mais (um sinal de "+" ou um clipe, dependendo da versão); ao clicar, abre a opção "Carregar arquivos" ou "Enviar imagem". Antes da aula, faça o teste você mesmo: envie a foto de uma planta e peça "que planta é esta e como cuidar dela?". Assim você já conhece o caminho dos botões. Deixe também o ChatGPT aberto numa aba para a comparação final. Lembre que tudo acontece no navegador, na página gemini.google.com, com a conta Google já logada.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min). Retome a aula anterior: "O que vocês já conseguiram fazer com o Gemini?". Mostre uma imagem no projetor (um gráfico ou um animal) e pergunte: "Será que a IA consegue me explicar isto?". Anote no quadro a ideia central da aula: imagem + pergunta, juntas no mesmo comando.

2. Conteúdo novo guiado (15 min). Projete sua tela em gemini.google.com. Mostre a caixa de mensagem na parte de baixo e clique no ícone de imagem ou de mais (sinal de "+") ao lado dela. Escolha "Carregar arquivos" e selecione uma imagem da pasta de exemplo. Com a imagem anexada, digite ao lado: "Explique o que aparece nesta imagem em uma linguagem para adolescentes". Pressione Enter ou clique no botão de enviar (a setinha). Leia a resposta com a turma. Faça um segundo exemplo de ideias: sem imagem, peça "me dê 5 ideias de título para uma apresentação sobre reciclagem". Comente que o Gemini também pode buscar coisas atuais.

3. Mão na massa (25 min). Cada aluno repete no próprio computador. Tarefa 1: anexar a foto da planta ou do animal e perguntar o que é. Tarefa 2: anexar o gráfico simples e pedir "explique este gráfico em palavras fáceis". Tarefa 3: pedir 5 ideias criativas para um projeto escolar (um nome de canal, títulos de redação ou temas de vídeo). Circule pela sala, ajude quem não achou o botão de anexar e provoque: "A resposta bate com o que você vê na imagem? Como você confere?".

4. Desafio e compartilhar (10 min). Faça a comparação: peça à turma que dê o mesmo comando para o Gemini e para o ChatGPT (por exemplo, descrever a mesma imagem, se a versão do ChatGPT permitir, ou gerar ideias para o mesmo tema). Cada dupla diz qual resposta achou melhor e por quê. Feche montando no quadro uma lista: "Quando o Gemini ajuda mais" e "Quando o ChatGPT ajuda mais".

## Como explicar de forma clara (linguagem para a idade)

Use a comparação dos olhos: "Até agora a IA só ouvia o que você escrevia; agora ela também tem olhos e consegue ver a imagem que você manda". Para o prompt com imagem, ensine a receita simples: "anexe a figura e diga o que você quer saber sobre ela". Compare o brainstorming com uma chuva de ideias: "peça muitas, depois escolha as melhores, como quem garimpa". Reforce sempre a checagem: "a IA pode errar; você é o chefe que confere". Evite termos técnicos como "modelo multimodal"; fale em "a IA que vê imagens". Faça perguntas em vez de só explicar: mostre uma resposta e pergunte "isso está certo? como você sabe?".

## Erros comuns e como ajudar

O erro mais comum é não encontrar o botão de anexar; mostre devagar o ícone de imagem ou de mais ("+") ao lado da caixa de mensagem e fique ao lado de quem travou. Alguns anexam a imagem mas esquecem de escrever a pergunta e enviam vazio; lembre que é preciso dizer o que se quer com a imagem. Outros enviam fotos muito borradas ou escuras e a IA não entende; oriente a usar imagens nítidas da pasta de exemplo. Há quem aceite qualquer resposta como verdade absoluta, inclusive quando a IA "inventa" o nome de uma planta; reforce a checagem com outra fonte. Por fim, alguns esperam que o ChatGPT faça tudo igual ao Gemini; explique com calma que cada IA tem pontos fortes diferentes, e que descobrir isso é justamente o objetivo da aula.`,
  exercicios: [
    {
      titulo: `Primeira imagem no Gemini`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto com a turma, projetando sua tela. O objetivo é que todos aprendam o caminho de anexar uma imagem antes de qualquer atividade mais livre. Vá devagar no clique do ícone de imagem/mais e confira cada computador, pois quem não conseguir anexar não fará as próximas tarefas.`,
      atividade: `Abra gemini.google.com. Na caixa de mensagem, clique no ícone de imagem ou de mais ("+") e escolha "Carregar arquivos". Selecione a foto de uma planta ou animal da pasta de exemplo. Com a imagem anexada, escreva ao lado: "Que ser vivo aparece nesta imagem? Explique em uma frase simples." e envie.`,
      gabarito: `O aluno acerta se conseguir anexar a imagem (ela aparece como miniatura acima do texto digitado) e receber uma resposta do Gemini descrevendo o que está na foto. Se a imagem não aparecer, o anexo não foi concluído: oriente a repetir o clique no ícone de imagem/mais e a escolher "Carregar arquivos". A resposta correta do aluno é simplesmente ter a IA reconhecendo, mesmo que de forma aproximada, o ser vivo da foto.`,
    },
    {
      titulo: `Decifrando um gráfico`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Apresente antes a ideia de que o Gemini pode explicar imagens com informação, não só fotos bonitas. Use o gráfico simples da pasta de exemplo (por exemplo, barras com a quantidade de alunos por esporte favorito). Circule e ajude quem confundir o ícone de anexar, sempre pedindo que confiram se a explicação bate com o que veem.`,
      atividade: `Anexe o gráfico simples da pasta de exemplo no Gemini. Ao lado, escreva: "Explique este gráfico em palavras fáceis e diga qual é o valor maior e qual é o menor." Envie e leia a resposta. Depois, confira na imagem se o que o Gemini disse sobre o maior e o menor valor está certo.`,
      gabarito: `O aluno acerta se o Gemini descrever o que o gráfico mostra e apontar corretamente o maior e o menor valor, e se o aluno conseguir confirmar isso olhando a própria imagem. Exemplo: se o gráfico mostra "futebol = 6, vôlei = 4, xadrez = 2", a resposta certa indica futebol como maior e xadrez como menor. O ponto-chave é o aluno checar a resposta na imagem, em vez de aceitar de imediato.`,
    },
    {
      titulo: `Chuva de ideias criativas`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. A ideia é mostrar o Gemini como parceiro de brainstorming. Oriente que peçam várias ideias e depois escolham juntos as duas melhores, justificando a escolha. Reforce que pedir "5 ideias" costuma render mais que pedir "uma ideia".`,
      atividade: `Em dupla, escolham um projeto escolar imaginário (um canal de vídeos sobre games, uma campanha de reciclagem ou um clube de leitura). Peçam ao Gemini: "Me dê 5 nomes criativos e 5 ideias de conteúdo para este projeto: [descrevam o projeto]". Leiam as respostas e escolham juntos os 2 melhores nomes e as 2 melhores ideias, anotando o porquê da escolha.`,
      gabarito: `Não há uma resposta única, pois é uma atividade criativa. A dupla acerta se: (1) escrever um comando claro pedindo várias ideias; (2) obter do Gemini uma lista com nomes e ideias de conteúdo; e (3) escolher 2 nomes e 2 ideias justificando a escolha (ex.: "este nome é fácil de lembrar"). Valorize duplas que melhoraram o comando para conseguir ideias melhores, mostrando que aprenderam a pedir.`,
    },
    {
      titulo: `Gemini contra ChatGPT`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Deixe as duas IAs abertas em abas diferentes. O desafio treina o olhar crítico: o aluno dá o mesmo comando aos dois e compara. Se a versão do ChatGPT em uso não aceitar imagens, faça a comparação com um pedido de ideias ou uma pergunta sobre um tema atual. Conduza a turma a justificar a preferência com argumentos, não só "gostei mais".`,
      atividade: `Escolha um mesmo desafio para as duas IAs, por exemplo: "Dê 3 ideias de título para uma redação sobre o uso do celular na escola." Cole o comando no Gemini e no ChatGPT. Leia as duas respostas e responda numa folha: qual foi mais útil, qual foi mais criativa e qual você usaria de verdade, explicando o motivo em uma frase.`,
      gabarito: `Não existe vencedor fixo; o gabarito é a qualidade da análise. O aluno acerta se: (1) der exatamente o mesmo comando às duas IAs; (2) comparar as respostas em pelo menos um critério (utilidade, criatividade ou clareza); e (3) justificar sua escolha com um motivo concreto. Espera-se notar que o Gemini costuma se sair bem em imagens e temas atuais, enquanto cada IA tem seu estilo de escrita. Aceite qualquer escolha desde que bem justificada.`,
    },
    {
      titulo: `Roda de conversa: quem ajuda mais?`,
      tipo: `Roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Esta atividade fecha a aula e organiza o que a turma descobriu. Sente todos em roda e conduza com perguntas, anotando no quadro duas colunas: "Gemini ajuda mais quando..." e "ChatGPT ajuda mais quando...". Garanta que cada aluno fale ao menos uma vez e reforce que não existe uma IA "melhor em tudo".`,
      atividade: `Na roda, cada aluno conta uma situação real em que usaria o Gemini (por exemplo, "entender uma foto de exercício" ou "pesquisar uma notícia de hoje") e uma em que talvez prefira o ChatGPT. A turma ajuda a montar no quadro a lista comparativa das duas IAs, com pelo menos três pontos para cada lado.`,
      gabarito: `A roda atinge o objetivo se a turma construir uma lista com pelo menos três usos para cada IA. Exemplos esperados para o Gemini: analisar imagens, buscar informação atualizada, integrar com o Google. Exemplos para o ChatGPT: escrever textos longos, criar histórias, conversar de forma fluida. O aluno acerta ao dar um exemplo coerente e perceber que a escolha depende da tarefa, e não há uma IA melhor para tudo. Conclua que comparar as IAs é o tema do desafio final do mês.`,
    },
  ],
};
