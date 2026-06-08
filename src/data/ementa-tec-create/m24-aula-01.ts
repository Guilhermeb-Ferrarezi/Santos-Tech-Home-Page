import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Planejando os Extras do Jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Revisar o próprio jogo no Roblox, listar quais melhorias e objetos 3D ainda faltam e montar um plano de modelagem no Maya escolhendo de 2 a 3 assets novos com referência visual.`,
  descricao: `Este é o último mês do Ano 2 e ele tem um objetivo muito claro: deixar o jogo bonito, completo e pronto para o Demo Day, o dia em que cada aluno apresenta a sua criação. Mas antes de modelar qualquer coisa nova no Maya, a turma precisa parar e olhar com calma para o que já existe. Esta primeira aula é toda sobre planejar. Em vez de sair criando sem rumo, o aluno vira uma espécie de "detetive do próprio jogo": entra no Roblox Studio, joga o seu projeto do começo ao fim e anota o que está faltando para a experiência ficar caprichada.

A ideia central do mês é a dos "extras". Extras são os objetos que não são obrigatórios para o jogo funcionar, mas que dão vida ao cenário e deixam tudo mais divertido e profissional. São os props (objetos de cena, como uma lâmpada, uma caixa, uma placa), a decoração (plantas, quadros, tapetes) e os itens colecionáveis (moedas, gemas, troféus que o jogador pega). Um jogo com cenário vazio parece inacabado; os extras são o tempero que faz o jogador sentir que está num mundo de verdade. Ao longo do mês, esses extras serão modelados no Maya, texturizados, exportados e importados de volta no Roblox.

Nesta aula, o aluno faz três coisas em sequência. Primeiro, testa o jogo e cria uma lista honesta de melhorias e objetos que faltam. Segundo, dá prioridade: nem tudo cabe no tempo do mês, então ele escolhe apenas de 2 a 3 assets novos para modelar. Terceiro, junta referência visual para cada escolha, ou seja, imagens que mostram como o objeto deveria parecer. Sem referência, o aluno modela "de cabeça" e o resultado costuma sair torto ou pobre. Com referência, ele tem um alvo claro para mirar.

O Maya entra aqui de leve, só para a turma se reambientar com o programa e abrir um arquivo de projeto novo e organizado. O peso da aula está no planejamento, não na modelagem em si, que começa de verdade na Aula 2. Sair desta aula com um plano escrito (quais assets, em que ordem, com quais referências) é a meta. Esse plano é o mapa que guiará as próximas sete aulas até o Demo Day e o certificado do Ano 2.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e já aberto, um por aluno, com login feito na conta Autodesk`,
    `Computadores com o Roblox Studio instalado e o projeto de cada aluno acessível (login Roblox feito)`,
    `Projetor ou TV para o professor demonstrar o Roblox Studio e o Maya ao vivo`,
    `Arquivo de exemplo: um plano de modelagem já preenchido (com 3 assets, prioridade e referências) para mostrar o resultado esperado`,
    `Folhas de planejamento impressas ou um documento digital com colunas (asset, tipo, prioridade, referência) para o aluno preencher`,
    `Acesso à internet para buscar imagens de referência (sites de imagens, pastas de referência preparadas pelo professor)`,
    `Quadro branco para listar os tipos de extras (props, decoração, colecionáveis) e organizar a priorização da turma`,
  ],
  conceitosChave: [
    `Asset — qualquer objeto 3D usado no jogo (um prop, uma decoração, um item); é a "peça" que o aluno vai modelar no Maya.`,
    `Prop — objeto de cena que enfeita ou compõe o ambiente, como uma caixa, uma lâmpada ou uma placa.`,
    `Item colecionável — objeto que o jogador pega durante o jogo, como moeda, gema ou troféu.`,
    `Referência visual — imagem que mostra como o objeto deve parecer; serve de alvo para o aluno mirar ao modelar.`,
    `Plano de modelagem — a lista escrita dos assets escolhidos, com prioridade e referência, que guia o trabalho do mês.`,
    `Priorização — escolher o que é mais importante fazer primeiro, já que não dá tempo de modelar tudo.`,
    `Demo Day — o dia final do mês em que cada aluno apresenta o jogo pronto e recebe o certificado do Ano 2.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya para dar esta aula, porque o foco de hoje é planejar, não modelar. O Maya aparece só no fim, para o aluno abrir um projeto novo e organizado. O que você precisa saber é guiar a turma a olhar criticamente para o próprio jogo no Roblox e a transformar essa observação numa lista realista de tarefas. Antes da aula, abra um jogo de exemplo no Roblox Studio e identifique espaços "vazios" que pediriam um extra (um canto sem decoração, uma mesa sem objetos em cima). Tenha à mão o conceito dos três tipos de extra: props, decoração e itens colecionáveis. No Maya, saiba apenas abrir o programa e criar um arquivo novo em File, New Scene, e salvar em File, Save Scene As com um nome claro como "extras-meujogo". A mensagem central do dia é: planejar primeiro economiza tempo depois.

## Passo a passo da aula

Aquecimento e revisão (10 min): no projetor, abra o jogo de exemplo no Roblox Studio e jogue um trecho. Pergunte à turma: "o que falta aqui para ficar mais legal?". Anote no quadro as respostas, separando em três colunas: props, decoração, colecionáveis. Relembre que neste mês eles vão modelar esses extras no Maya.

Conteúdo novo guiado (15 min): mostre o que é uma boa referência visual. Abra duas ou três imagens de um mesmo objeto (por exemplo, uma moeda) e explique que a referência define formato, proporção e detalhes. Em seguida, mostre o arquivo de exemplo com o plano de modelagem preenchido: três assets, cada um com tipo, prioridade e link/imagem de referência. Por fim, abra o Maya no projetor, vá em File, New Scene e depois File, Save Scene As, salvando como "extras-nome-do-aluno" para que cada um tenha o projeto do mês organizado desde já.

Mão na massa (25 min): cada aluno abre o seu próprio jogo no Roblox Studio e o joga do início ao fim, anotando na folha de planejamento tudo o que falta. Depois, escolhe de 2 a 3 assets para modelar no mês (oriente: nem demais, nem de menos) e marca a prioridade de cada um. Em seguida, busca uma imagem de referência para cada asset e salva numa pasta. Por último, abre o Maya, cria a New Scene e salva o arquivo do projeto. Circule pela sala ajudando a priorizar: puxe para escolhas simples e viáveis no tempo do mês.

Desafio e compartilhar (10 min): desafie quem terminou a descrever em uma frase por que cada asset escolhido vai melhorar o jogo. Cada aluno mostra em 30 segundos o seu plano: quais 2 ou 3 assets escolheu, de que tipo são e qual referência vai usar.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que planejar os extras é como "fazer a lista do mercado antes de cozinhar": sem a lista, você esquece ingredientes e perde tempo. Compare a referência visual a "uma foto do prato pronto que você quer copiar": fica muito mais fácil acertar olhando a foto do que imaginando. Para priorização, use a ideia da mochila: "só cabem três coisas na mochila do mês, então escolha as que mais fazem diferença". Reforce que extras são o que transforma um cenário vazio num lugar vivo, igual à diferença entre um quarto sem nada e um quarto decorado.

## Erros comuns e como ajudar

Erro 1: o aluno quer modelar dez objetos de uma vez; segure o ritmo e limite a 2 ou 3, lembrando que ainda faltam texturas e importação. Erro 2: escolhe assets complicados demais (um carro com rodas que giram); puxe para formas simples que cabem no tempo. Erro 3: não busca referência e diz "já sei como é"; insista que toda escolha precisa de pelo menos uma imagem. Erro 4: confunde extra com algo essencial do jogo; explique que extra é o que enfeita, não o que faz o jogo funcionar. Erro 5: esquece de salvar o arquivo no Maya ou salva sem nome claro; passe na mesa e confira o nome "extras-nome". Erro 6: pula a etapa de jogar o próprio jogo e lista coisas no chute; peça para testar de verdade antes de anotar.`,
  exercicios: [
    {
      titulo: `Detetive do próprio jogo`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno realmente jogue o próprio projeto no Roblox Studio antes de listar. Lembre de separar em props, decoração e colecionáveis.`,
      atividade: `Abra o seu jogo no Roblox Studio e jogue do início ao fim. Enquanto joga, anote na folha de planejamento pelo menos cinco objetos ou melhorias que faltam, dizendo de qual tipo é cada um: prop, decoração ou item colecionável.`,
      gabarito: `A lista traz no mínimo cinco itens, cada um classificado corretamente como prop, decoração ou colecionável. Os itens fazem sentido para o jogo (apontam cantos vazios ou faltas reais). Se o aluno listou sem jogar, normalmente os itens ficam genéricos; peça para testar de novo e detalhar.`,
    },
    {
      titulo: `Escolhendo o que cabe na mochila`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Reforce o limite de 2 a 3 assets. Ajude a priorizar puxando para escolhas simples e viáveis no tempo do mês.`,
      atividade: `Da sua lista, escolha apenas de 2 a 3 assets para modelar neste mês. Para cada um, marque a prioridade (1 = mais importante) e escreva em uma frase por que ele vai deixar o jogo melhor.`,
      gabarito: `O aluno seleciona entre 2 e 3 assets (nem mais, nem menos), numera a prioridade de cada um e justifica com uma frase clara. As escolhas são realistas para o tempo do mês (formas simples). Se escolheu objetos muito complexos, oriente a trocar por versões mais simples.`,
    },
    {
      titulo: `Caça à referência`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o que é uma boa referência (formato e proporção visíveis). Confira que cada asset tem ao menos uma imagem salva numa pasta.`,
      atividade: `Para cada asset escolhido, busque uma imagem de referência que mostre bem o formato do objeto e salve numa pasta com nome de cada asset. Anote no plano onde a referência está guardada.`,
      gabarito: `Cada asset escolhido tem pelo menos uma imagem de referência salva e identificada no plano. As imagens mostram o objeto de forma clara (não borradas nem de ângulo ruim). Se faltar referência para algum asset, o plano ainda não está completo; peça para buscar antes de seguir.`,
    },
    {
      titulo: `Plano revisado em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Cada um apresenta o seu plano e o colega confere se os assets são viáveis, se têm referência e se a prioridade faz sentido. Incentive sugestões respeitosas.`,
      atividade: `Em dupla, apresente o seu plano de modelagem ao colega: os 2 ou 3 assets, a prioridade e a referência de cada um. O colega revisa e sugere pelo menos um ajuste (trocar um asset complicado, melhorar uma referência ou mudar a ordem de prioridade).`,
      gabarito: `Cada plano é apresentado por completo (assets, prioridade e referência). O colega aponta pelo menos um ajuste concreto, mostrando que houve revisão de verdade. Ao fim, o plano do aluno fica mais viável ou mais claro do que antes. Duplas que só elogiam sem sugerir nada precisam ser reorientadas a olhar tempo e dificuldade.`,
    },
    {
      titulo: `Abrindo o projeto do mês no Maya`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Acompanhe a criação do arquivo no Maya. O importante é cada aluno sair com a cena nova salva e um nome claro, pronta para a Aula 2. Confira nome e local do arquivo na mesa de cada um.`,
      atividade: `Abra o Maya, crie uma cena nova em File, New Scene e salve em File, Save Scene As com o nome "extras-seu-nome". Em seguida, escreva no canto da folha de planejamento qual asset você vai modelar primeiro na próxima aula.`,
      gabarito: `O aluno termina com um arquivo do Maya salvo, com nome claro no padrão "extras-nome", e com o primeiro asset a modelar já anotado no plano. A cena está vazia e organizada, pronta para a Aula 2. Se o arquivo não foi salvo ou está sem nome reconhecível, oriente a refazer o Save Scene As antes de encerrar.`,
    },
  ],
};
