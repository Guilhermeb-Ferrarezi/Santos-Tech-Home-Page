import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando o Jogo para o Mundo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o jogo no Roblox Studio definindo título, descrição, ícone, configurações de acesso e fazendo a última revisão das mecânicas, deixando o projeto pronto para ir ao ar.`,
  descricao: `Nesta aula o aluno deixa de ser apenas programador e vira também o dono de um produto que vai para o mundo. O jogo já funciona: o jogador se move, ganha pontos, coleta itens e segue as regras. O que falta agora é vestir o projeto com roupa de festa e ajustar os últimos detalhes antes do grande dia. A diferença entre um jogo que ninguém abre e um jogo que muita gente joga começa aqui, na vitrine: o título chama a atenção, o ícone aparece bonito na lista e a descrição explica em poucas linhas o que o jogador vai encontrar.

A maior parte do trabalho de hoje não é escrever código novo, e sim usar as telas de configuração do próprio Roblox Studio e do site do Roblox. O aluno aprende onde mora cada ajuste: o nome do jogo, o resumo que aparece para todo mundo, a imagem do ícone e, principalmente, quem pode entrar. Essa parte de acesso é importante porque, enquanto o jogo está sendo finalizado, ele deve ficar privado, visível só para o autor; só na próxima aula, no lançamento oficial, é que tudo vira público.

Antes de cuidar da vitrine, o aluno faz uma última revisão das mecânicas. É o famoso teste final: jogar do começo ao fim, conferir se a pontuação soma certo, se os itens somem ao serem coletados e se nada trava. Pequenos ajustes de código entram aqui, mas a regra de ouro é não inventar mecânica nova na véspera do lançamento. Hoje é dia de polir o que existe, não de criar do zero.

Ao final da hora, cada aluno deve ter um projeto com nome definido, descrição escrita, ícone escolhido, acesso configurado como privado e as mecânicas revisadas. O jogo fica numa espécie de sala de espera: tudo pronto, esperando apenas o botão de publicar da Aula 8.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e logado na conta do aluno, um por aluno`,
    `Navegador aberto no site do Roblox (roblox.com) para a área de criações de cada aluno`,
    `Projetor ligado para o professor demonstrar cada tela passo a passo`,
    `Arquivo de exemplo: um lugar (place) já programado nas aulas anteriores, com movimento, pontuação e itens funcionando`,
    `Imagens de ícone prontas (512x512 pixels) ou acesso a um editor simples para criar o ícone`,
    `Folha impressa de checklist de publicação (título, descrição, ícone, acesso privado, mecânicas revisadas)`,
    `Editor de código embutido no Roblox Studio (aba Script) para pequenos ajustes finais`,
  ],
  conceitosChave: [
    `Place (lugar) — o mundo jogável do projeto no Roblox, onde acontece o jogo de verdade.`,
    `Experience (experiência) — o pacote que reúne o jogo e suas informações públicas, como título, ícone e descrição.`,
    `Game Settings — janela de configurações do Roblox Studio onde se define nome, descrição, ícone e permissões do jogo.`,
    `Ícone — imagem quadrada (512x512 pixels) que representa o jogo na lista, funcionando como a capa do projeto.`,
    `Acesso (Permissions) — controle de quem pode entrar no jogo, podendo ser privado (só o autor) ou público (todos).`,
    `Revisão de mecânicas — teste final que confere se movimento, pontuação, itens e regras funcionam do começo ao fim.`,
    `Publicar — ato de salvar o jogo nos servidores do Roblox; nesta aula salvamos privado, e só na próxima tornamos público.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai ensinar a programar algo grande, e sim a finalizar e arrumar a vitrine do jogo. O coração da aula são duas telas: a janela Game Settings dentro do Roblox Studio e a área de criações no site do Roblox. Antes da aula, abra o projeto de exemplo e percorra o caminho File maior que Game Settings, conferindo as abas Basic Info (nome, descrição, ícone) e Permissions (acesso). Faça um teste de publicação privada com sua própria conta para não travar na frente da turma. Decore três pontos: o ícone deve ser uma imagem quadrada de 512x512 pixels; o acesso deve continuar privado hoje; e publicar agora significa salvar nos servidores do Roblox, não abrir para o público. Tenha o checklist impresso em mãos.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

Aquecimento (10 min): projete dois jogos da lista do Roblox, um com capa e descrição caprichadas e outro sem nada. Pergunte qual a turma abriria primeiro e por quê. Conduza até as respostas: título claro, ícone bonito e descrição que explica o jogo. Diga que hoje cada aluno vai preparar essa vitrine.

Conteúdo novo guiado (15 min): no Roblox Studio, abra o projeto e vá em File, depois Game Settings. Na aba Basic Info, mostre o campo Name (título), o campo Description (descrição) e o botão de ícone (Game Icon). Faça um upload de imagem 512x512. Vá à aba Permissions e confirme que está em Private. Antes de fechar, mostre a última revisão de mecânica com um ajuste simples no script da pontuação para evitar número negativo. Abra o Script da pontuação e mostre este código exato, linha a linha:

local pontos = 0

local function adicionarPontos(valor)
  pontos = pontos + valor
  if pontos < 0 then
    pontos = 0
  end
  print("Pontuacao atual:", pontos)
end

adicionarPontos(10)

Explique: a primeira linha cria a variável pontos começando em zero; a função adicionarPontos soma o valor recebido; o if garante que a pontuação nunca fique negativa; o print mostra o número no Output usando vírgula para separar texto e valor, sem chaves.

Mão na massa (25 min): cada aluno abre Game Settings, escreve o título, digita a descrição em duas ou três frases, sobe o ícone e confirma o acesso como Private. Depois, joga o próprio jogo do começo ao fim conferindo movimento, pontuação e itens. Por fim, clica em File, Publish to Roblox para salvar privado. Circule conferindo cada item do checklist.

Desafio e compartilhar (10 min): cada aluno mostra no projetor o título, o ícone e a descrição. A turma dá uma dica de melhoria. Feche revisando o checklist com todos.

## Como explicar de forma clara (linguagem para a idade)

Compare a publicação com abrir uma loja: o título é a placa, o ícone é a vitrine e a descrição é o cartaz que convida a entrar. Diga que deixar o jogo privado é como manter a porta fechada enquanto arruma as prateleiras; só na próxima aula a loja abre para todos. Para a revisão de mecânicas, use a ideia de provar a comida antes de servir: o cozinheiro experimenta tudo de novo antes do cliente chegar.

## Erros comuns e como ajudar

O erro mais comum é o aluno deixar o título genérico, tipo Place1; pare a turma e peça nomes que descrevam o jogo. Outro erro é subir um ícone fora do tamanho certo; lembre que precisa ser quadrado, 512x512, e mostre na tela como recortar. Muitos esquecem de conferir o acesso e deixam público sem querer; faça todos abrirem Permissions juntos e confirmarem Private. Há quem queira programar uma mecânica nova na última hora e quebre o jogo; reforce que hoje só polimos o que já existe. Por fim, alguns clicam em Publish achando que ficou público; explique com calma que publicar privado é só salvar nos servidores, e que abrir para todos é a Aula 8.`,
  exercicios: [
    {
      titulo: `Dando nome ao jogo`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Guie o aluno até File maior que Game Settings, aba Basic Info. Confira que ninguém deixou o nome padrão Place1. Reforce um título curto e que descreva o jogo.`,
      atividade: `Abra Game Settings no Roblox Studio e escreva um título claro para o seu jogo no campo Name. O nome não pode ser o padrão (como Place1) e deve dizer do que o jogo trata.`,
      gabarito: `O campo Name aparece preenchido com um título descritivo e curto, por exemplo Corrida das Moedas ou Fuga do Labirinto, sem nenhum nome padrão como Place1. O aluno consegue explicar por que o título combina com o jogo.`,
    },
    {
      titulo: `Vitrine completa`,
      tipo: `Prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Acompanhe o upload do ícone e a escrita da descrição na aba Basic Info. Lembre o tamanho 512x512 do ícone. Confira que a descrição tem ao menos duas frases e explica o objetivo do jogo.`,
      atividade: `Ainda em Game Settings, suba um ícone quadrado de 512x512 pixels e escreva uma descrição de duas ou três frases que explique o objetivo do jogo e como jogar.`,
      gabarito: `O jogo passa a ter um ícone quadrado de 512x512 carregado e uma descrição com duas ou três frases, dizendo o objetivo e o controle básico, por exemplo: Colete todas as moedas antes do tempo acabar. Use as setas para se mover e pule nas plataformas.`,
    },
    {
      titulo: `Fechando a porta`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Leve o aluno à aba Permissions e confirme que o acesso está em Private. Explique a diferença entre privado e público. Garanta que ninguém deixou público antes da hora.`,
      atividade: `Vá até a aba Permissions de Game Settings e confirme que o seu jogo está como Private. Em seguida, explique com suas palavras por que ele deve ficar privado até a aula do lançamento.`,
      gabarito: `O acesso do jogo aparece marcado como Private. O aluno explica que privado significa que só o autor entra, e que o jogo deve ficar assim até a Aula 8 para que ninguém jogue uma versão ainda não terminada.`,
    },
    {
      titulo: `Teste final das mecânicas`,
      tipo: `Em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e peça que cada um jogue o jogo do colega do começo ao fim. Eles anotam se movimento, pontuação e itens funcionam. Oriente a corrigir apenas pequenos ajustes, sem mecânica nova.`,
      atividade: `Jogue o jogo do seu colega do início ao fim e anote se o movimento, a pontuação e os itens funcionam direito. Depois, troquem os retornos e corrijam juntos um pequeno problema que aparecer, sem criar nada novo.`,
      gabarito: `Cada dupla produz uma lista de verificação com pelo menos três pontos testados (movimento, pontuação e itens) e corrige um ajuste pequeno, como um item que não somia ao ser coletado ou um print faltando. Nenhuma mecânica nova é adicionada na revisão.`,
    },
    {
      titulo: `Salvando para a sala de espera`,
      tipo: `Projeto curto`,
      tempo: `14 minutos`,
      guiaProfessor: `Acompanhe cada aluno finalizando o checklist e fazendo File maior que Publish to Roblox com acesso privado. Confira título, descrição, ícone, acesso e mecânicas. Inclua o ajuste anti-negativo na pontuação, se ainda não estiver feito.`,
      atividade: `Confira todo o checklist de publicação (título, descrição, ícone, acesso privado e mecânicas revisadas), garanta o ajuste que impede a pontuação negativa e salve o jogo com File, Publish to Roblox, mantendo o acesso privado.`,
      gabarito: `O projeto fica com todos os itens do checklist concluídos e salvo nos servidores como privado. O ajuste de pontuação está presente no script, garantindo que o número nunca fique negativo. Exemplo do código final esperado:

local pontos = 0

local function adicionarPontos(valor)
  pontos = pontos + valor
  if pontos < 0 then
    pontos = 0
  end
  print("Pontuacao atual:", pontos)
end

adicionarPontos(10)

O jogo está pronto na sala de espera, aguardando apenas o lançamento oficial da Aula 8.`,
    },
  ],
};
