import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Caça ao Tesouro do Meu Asset",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `O aluno abre o Roblox Studio, encontra o botão de importar e traz para a tela o modelo 3D que ele mesmo criou no Maya, selecionando o seu próprio asset.`,
  descricao: `Nesta primeira aula do mês de publicação, as crianças começam uma grande aventura: trazer para dentro do Roblox o tesouro que elas mesmas construíram no Maya. Esse tesouro é o asset, o modelo 3D que cada aluno modelou nos meses anteriores. Importar significa pegar um arquivo que está guardado no computador e colocá-lo dentro de um novo programa, como quem traz um brinquedo de casa para mostrar na escola.

Por que isso importa? Porque o jogo final precisa ter as coisas que as crianças criaram. Sem importar o asset, o Roblox fica vazio, só com o cenário padrão. Quando a criança vê o próprio modelo aparecer na tela do Roblox Studio, ela entende que o trabalho dela vira parte de um jogo de verdade, e isso desperta muito orgulho e empolgação.

O foco desta aula é apenas um passo, bem pequeno e bem feito: descobrir ONDE fica o botão de importar e CONSEGUIR abrir o arquivo do próprio modelo. Não vamos posicionar, colorir nem programar nada ainda. É uma caça ao tesouro: cada aluno procura, encontra e seleciona o seu asset na tela. As próximas aulas cuidam de colocar o personagem, montar o cenário e publicar.

O professor conduz como um guia de expedição, mostrando o caminho no próprio Roblox Studio e esperando cada criança chegar junto. A vitória da aula é simples e clara: todo aluno vê o seu modelo aparecer e diz em voz alta o nome do seu tesouro.`,
  materiais: [
    `Um computador por aluno com o Roblox Studio já instalado e aberto, com login feito na conta da escola (evita o aluno perder tempo digitando senha).`,
    `Os arquivos dos modelos exportados do Maya (formato .fbx ou .obj) salvos em uma pasta fácil de achar na área de trabalho, um arquivo por aluno, com o nome da criança no arquivo.`,
    `Projetor ou TV ligado ao computador do professor para demonstrar cada clique na tela grande.`,
    `Um arquivo de exemplo extra do professor (um modelo simples, como uma estrela ou uma chave) para a demonstração inicial.`,
    `Etiquetas ou crachás com o nome de cada aluno e o nome do tesouro dele (ajuda a criança a reconhecer o próprio arquivo).`,
    `Folhas de papel e lápis de cor para o desenho do tesouro encontrado.`,
    `Uma medalha de papel ou adesivo de caça-tesouro para entregar a quem encontrar o asset.`,
  ],
  conceitosChave: [
    `Asset — é o seu tesouro, o modelo 3D que você criou no Maya, como um boneco, uma espada ou uma fruta.`,
    `Roblox Studio — o programa onde a gente monta o jogo, como uma mesa gigante de montar.`,
    `Importar — trazer um arquivo de fora para dentro do programa, como levar um brinquedo de casa para a escola.`,
    `Arquivo — uma caixinha guardada no computador onde mora o seu modelo, com um nome escrito na frente.`,
    `Explorer — a lista mágica do Roblox que mostra tudo que está dentro do jogo, como um caderno de presença.`,
    `Selecionar — clicar em uma coisa para escolher ela, e aí ela fica iluminada mostrando que é a sua.`,
    `Viewport — a janela grande no meio da tela onde a gente vê o mundo do jogo em 3D.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Roblox Studio é o programa gratuito da Roblox para criar jogos. Nesta aula você só precisa dominar uma ação: importar um modelo 3D que veio do Maya. No Maya, o modelo foi exportado como um arquivo, normalmente .fbx ou .obj. Esse arquivo guarda o formato 3D da peça. Importar é trazer esse arquivo para dentro do Studio.

Onde fica o botão: com um lugar (Place) aberto, olhe a faixa de menus no topo, chamada Ribbon. Clique na aba HOME e procure o grupo Insert, com o botão Import 3D (ícone de cubo com uma seta). Existe também o botão Toolbox, mas hoje o caminho certo é Import 3D, porque o tesouro está no computador, não na loja online. Ao clicar em Import 3D, abre a janela do Windows para escolher o arquivo. O aluno navega até a pasta na Área de Trabalho, encontra o arquivo com o nome dele e clica em Abrir. O Studio mostra uma prévia; basta confirmar em Import. O modelo aparece na Viewport (janela 3D central) e na lista Explorer (painel à direita).

Antes da aula: abra o Studio em cada máquina, crie um Place novo (Baseplate), deixe a pasta dos modelos pronta na Área de Trabalho e faça o login. Teste você mesmo importar o arquivo de exemplo para garantir que tudo funciona.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Roblox Studio)

10 min — Aquecimento: reúna a turma e conte que hoje começa a caça ao tesouro. Mostre na tela grande o Roblox Studio já aberto. Pergunte: cadê o tesouro que vocês fizeram no Maya? Explique que ele está guardado numa caixinha (arquivo) e que vamos buscar juntos.

15 min — Conteúdo novo guiado: no seu computador, no projetor, mostre devagar. Clique na aba HOME na faixa de cima (Ribbon). Aponte o grupo Insert e clique no botão Import 3D. Quando a janela abrir, mostre como achar a pasta na Área de Trabalho, clique no arquivo de exemplo e em Abrir. Mostre a prévia e clique em Import. Aponte para o modelo aparecendo na Viewport e o nome surgindo no Explorer à direita. Faça tudo uma vez inteira, sem pressa, nomeando cada botão em voz alta.

25 min — Mão na massa: cada criança repete no seu computador. Circule pela sala. Diga em ordem: aba HOME, botão Import 3D, achar a pasta, clicar no SEU nome, Abrir, Import. Espere todos chegarem juntos em cada passo antes de seguir. Quando o asset aparecer, peça para a criança clicar nele (selecionar) e ver ele iluminar. Comemore cada tesouro encontrado.

10 min — Desafio + compartilhar: peça que cada aluno aponte para a tela e diga o nome do seu tesouro. Entregue a medalha de caça-tesouro. Roda rápida: cada um conta uma palavra do que sentiu.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a história da caça ao tesouro o tempo todo. O arquivo é uma caixinha fechada com o nome da criança escrito na frente. Importar é abrir a porta da escola e deixar o brinquedo de casa entrar. O botão Import 3D é a porta mágica. A Viewport é o palco onde o tesouro aparece. O Explorer é a lista de presença: quando o nome do tesouro aparece lá, é porque ele chegou de verdade. Selecionar é dar um abraço no tesouro: ele acende para mostrar que é seu. Fale frases curtas, mostre antes de pedir e use o dedo apontando na tela.

## Erros comuns e como ajudar

A criança clica em Toolbox em vez de Import 3D: leve o dedo dela ao botão certo no grupo Insert. A criança abre o arquivo de outro colega: confira o nome no arquivo junto com ela usando o crachá. A janela some sem importar (clicou em Cancelar): respire, repita o caminho com calma. O modelo aparece minúsculo ou gigante: não conserte agora, isso é assunto da próxima aula; só comemore que apareceu. A criança não acha a pasta: deixe a pasta com um ícone bem visível e oriente clicar em Área de Trabalho no lado esquerdo da janela.`,
  exercicios: [
    {
      titulo: `A Porta Mágica do Tesouro`,
      tipo: `Prática na ferramenta (guiada)`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que toda caça ao tesouro tem uma porta mágica. Mostre no projetor a aba HOME e o botão Import 3D. Peça que cada aluno só ENCONTRE o botão na tela, sem clicar ainda, e coloque o dedo nele. Passe de mesa em mesa confirmando.`,
      atividade: `Olhe a faixa colorida no topo do Roblox Studio. Clique na aba que está escrito HOME. Agora procure o botão Import 3D, que tem um cubinho com uma setinha. Coloque o seu dedo em cima dele na tela e fale bem alto: achei a porta mágica!`,
      gabarito: `O aluno acertou quando o dedo dele está sobre o botão Import 3D, dentro da aba HOME, no grupo Insert. O professor confirma vendo o dedo no lugar certo e o aluno falando a frase. Se apontar para Toolbox ou outra aba, ainda não acertou.`,
    },
    {
      titulo: `Abrindo a Caixinha do Meu Nome`,
      tipo: `Prática na ferramenta (autônoma)`,
      tempo: `12 minutos`,
      guiaProfessor: `Agora cada um abre o próprio tesouro. Reforce que o arquivo certo tem o NOME do aluno. Conduza passo a passo: clicar em Import 3D, achar a pasta na Área de Trabalho, clicar no arquivo com o seu nome, Abrir e Import. Espere todos juntos em cada etapa.`,
      atividade: `Clique no botão Import 3D. Quando a janela abrir, clique em Área de Trabalho do lado esquerdo. Ache a caixinha (arquivo) que tem o SEU nome. Clique nela uma vez e depois em Abrir. Quando aparecer a prévia, clique em Import. Pronto, seu tesouro chegou!`,
      gabarito: `O aluno acertou quando o modelo dele aparece na Viewport e o nome do modelo surge na lista Explorer, à direita. Conferir também que é o arquivo certo, com o nome da própria criança. Se abriu o de outro colega, refaça com o crachá ao lado.`,
    },
    {
      titulo: `Roda dos Tesouros`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme uma roda. Conduza com perguntas simples e dê a vez a cada criança. Valorize toda resposta. O objetivo é a criança nomear o próprio asset e contar onde ele apareceu na tela.`,
      atividade: `Sentados em roda, cada um responde na sua vez: Qual é o nome do seu tesouro? Onde ele apareceu, na janela grande (Viewport) ou na listinha (Explorer)? Você gostou de ver ele no Roblox?`,
      gabarito: `Espera-se que cada criança diga o nome do seu asset e aponte que ele apareceu na Viewport (janela 3D) e na lista Explorer. Acertou quem nomeia o tesouro e indica pelo menos um dos dois lugares onde ele apareceu.`,
    },
    {
      titulo: `Mapa do Meu Tesouro`,
      tipo: `Desenho no papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue papel e lápis de cor. Peça que desenhem o tesouro que encontraram na tela e escrevam (ou copiem) o nome dele. Para quem escreve pouco, aceite o desenho e ajude com a primeira letra. Relacione o desenho ao que apareceu no Roblox.`,
      atividade: `Desenhe no papel o seu tesouro do jeito que ele apareceu no Roblox Studio. Pinte com as cores que você quiser. Embaixo do desenho, escreva (ou copie do crachá) o nome do seu tesouro.`,
      gabarito: `Acertou quando o desenho representa o asset importado (mesma ideia do modelo, por exemplo uma espada se o modelo era uma espada) e o nome aparece escrito ou copiado embaixo. O professor confirma comparando o desenho com o modelo na tela.`,
    },
    {
      titulo: `Desafio do Caçador Mestre`,
      tipo: `Desafio (autônomo, dificuldade maior)`,
      tempo: `10 minutos`,
      guiaProfessor: `Proponha sozinho, sem ditar os passos, para quem já terminou. O aluno deve fechar a seleção, clicar de novo no seu modelo na Viewport, ver ele iluminar e achar o nome dele no Explorer. Ajude só se travar. Premie com a medalha de Caçador Mestre.`,
      atividade: `Sozinho, faça assim: clique em um lugar vazio da janela grande para desmarcar tudo. Agora clique no SEU tesouro de novo: ele tem que acender (selecionar). Depois, ache o nome dele na lista Explorer do lado direito e coloque o dedo nele.`,
      gabarito: `Acertou quando o aluno consegue, sem ajuda, selecionar o próprio modelo na Viewport (o modelo fica iluminado) e apontar o nome correspondente no Explorer. Se conseguir os dois, é Caçador Mestre e ganha a medalha.`,
    },
  ],
};
