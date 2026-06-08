import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Lançamento Oficial: Jogo Publicado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Publicar o jogo no Roblox, compartilhar o link com a turma e celebrar a conclusão da etapa 4 do projeto, com cada aluno apresentando o jogo finalizado e jogando o dos colegas.`,
  descricao: `Esta é a aula que fecha o mês inteiro de programação em Lua dentro do Roblox Studio. Durante quatro semanas a turma deu vida ao jogo com scripts, programou o movimento e a ação do jogador, montou um sistema de pontuação e placar, criou itens e regras, caçou bugs e poliu o equilíbrio. Na aula passada o jogo foi preparado para o mundo. Agora chega o momento mais esperado de todos: apertar o botão que coloca o jogo no ar, no Roblox de verdade, para qualquer pessoa jogar.

O coração da aula é a publicação. Até hoje o jogo só rodava quando o aluno apertava Play dentro do Roblox Studio, na própria máquina. Nesta aula ele aprende a publicar no Roblox: o Studio envia o jogo para os servidores da plataforma, gera um endereço (link) e o jogo passa a existir online, abrindo no aplicativo do Roblox como qualquer outro. É a diferença entre um desenho guardado na gaveta e um quadro pendurado na parede. Quando o aluno vê o próprio jogo aparecer no Roblox com o nome dele na tela, a ficha cai: ele construiu um jogo de verdade, que outras pessoas do mundo todo podem jogar.

Depois de publicar, vem a apresentação. Cada aluno mostra o jogo no projetor, conta a ideia em uma frase, joga um trecho ao vivo e compartilha o link para que os colegas entrem. A turma joga o jogo um do outro, deixa elogios e percebe soluções diferentes para problemas parecidos. O professor é o mestre de cerimônias: garante os aplausos, ajuda quem travar na hora de jogar na frente de todos e mantém o clima de festa, porque hoje é dia de comemorar.

Para o professor iniciante, a mensagem é tranquilizadora: nesta aula não se programa nada novo. O peso está em seguir um caminho de cliques claro para publicar, ajustar duas configurações simples de acesso e conduzir a celebração. Se cada aluno terminar com o jogo publicado, o link copiado e uma apresentação feita, a aula cumpriu seu papel e a etapa 4 do projeto está concluída com chave de ouro.`,
  materiais: [
    `Um computador por aluno com o Roblox Studio instalado e o projeto do jogo do mês já aberto, salvo e logado na conta do aluno (ou na conta da escola)`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique da publicação e conduzir as apresentações na tela grande`,
    `Projeto de exemplo do professor, um jogo simples já finalizado, para demonstrar a publicação completa antes de os alunos tentarem`,
    `Conexão de internet estável, porque a publicação envia o jogo para os servidores do Roblox pela nuvem`,
    `Navegador aberto na página do Roblox (roblox.com), para conferir o jogo publicado e copiar o link de cada aluno`,
    `Uma lista ou mural combinado (documento compartilhado ou cartaz) para colar os links de todos os jogos da turma`,
    `Editor de código de apoio (o próprio editor de Script do Roblox Studio) com os scripts do jogo prontos, caso seja preciso um último ajuste`,
  ],
  conceitosChave: [
    `Publicar — enviar o jogo para os servidores do Roblox para que ele exista online e qualquer pessoa possa jogar pelo link.`,
    `Play (Testar) — o botão do Roblox Studio que roda o jogo só na sua máquina, dentro do editor, apenas para testar.`,
    `Link do jogo — o endereço na internet (uma URL do roblox.com) que abre o jogo publicado para outras pessoas.`,
    `Game ID — o número único que o Roblox dá ao jogo quando ele é criado, como uma carteira de identidade do jogo.`,
    `Privacidade (Public ou Private) — a configuração que decide se o jogo fica aberto para todos (Public) ou só para você (Private).`,
    `Servidor — o computador do Roblox, na nuvem, que guarda o jogo e o entrega para quem clica no link.`,
    `Apresentar — mostrar o próprio jogo para a turma, contando a ideia e jogando um trecho ao vivo.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês, e o foco não é programar, e sim PUBLICAR, COMPARTILHAR e CELEBRAR. Você não precisa dominar Lua para conduzi-la. Antes da aula, abra o Roblox Studio com o seu projeto de exemplo, faça o login e publique uma vez do começo ao fim para dominar o caminho. Garanta internet estável, porque a publicação envia o jogo para a nuvem.

Relembre a diferença central da aula: até agora os alunos usaram o botão Play (no topo da tela, com o ícone de seta) para Testar o jogo só na própria máquina. Hoje eles vão Publicar, que coloca o jogo online. O caminho é o menu "File" no canto superior esquerdo e depois "Publish to Roblox" (ou "Publish to Roblox As" na primeira vez). Aparece uma janela para dar Nome e Descrição ao jogo; preencha e clique em "Create" ou "Save". Pronto, o jogo está nos servidores.

Por padrão, um jogo novo nasce como Private (privado), então ninguém além do autor consegue entrar. Para a turma jogar, é preciso deixá-lo Public. Faça isso no navegador: abra "Create" em roblox.com (a área de criações), clique nos três pontinhos do jogo, vá em "Configure" maior que "Permissions" (ou "Settings") e mude a Privacidade para "Public". Depois copie o link do jogo para compartilhar. Tenha o seu exemplo pronto para mostrar tudo isso no projetor.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

1. Aquecimento e revisão (10 min). Peça que cada aluno abra o projeto no Roblox Studio e aperte Play para conferir se o jogo roda do início ao fim. Relembre no quadro a checklist do jogo pronto: começa, tem objetivo claro e pode ser jogado até o final. Hoje quase não escrevemos código, mas, se algum script precisar de um retoque, lembre o padrão de mensagem na tela. Para imprimir um aviso sem erro, use print com vírgula, nunca chaves de interpolação: escreva no Script a linha print("Jogo publicado por", "Ana"). Diga: "Hoje o seu jogo sai do computador e vira um jogo de verdade no Roblox!"

2. Conteúdo novo guiado (15 min). No seu computador, no projetor, publique o exemplo. Clique em "File" maior que "Publish to Roblox". Na janela, escreva o Nome e a Descrição do jogo e clique em "Create". Em seguida, abra o navegador em roblox.com, vá em "Create", encontre o jogo, clique nos três pontinhos, em "Configure" e mude a Privacidade para "Public". Copie o link e cole no mural da turma. Mostre que agora o jogo abre para qualquer pessoa, sem o Studio.

3. Mão na massa (25 min). Cada aluno publica o próprio jogo. Primeiro resolve qualquer ajuste de última hora. Depois segue os passos: "File" maior que "Publish to Roblox", preenche Nome e Descrição, clica em "Create". No navegador, em roblox.com maior que "Create", deixa o jogo "Public", copia o link e cola no mural. Por fim, abre o próprio link em outra aba para ver o jogo publicado rodando. Circule de mesa em mesa, comemore cada jogo que entra no ar e ajude quem se perder no menu.

4. Desafio e compartilhar (10 min). Cada aluno (ou alguns, se faltar tempo) apresenta no projetor: mostra o jogo, conta a ideia em uma frase e joga um trecho ao vivo. A turma abre os links do mural e joga o jogo dos colegas, deixando um elogio. Toda a turma aplaude. Para fechar, celebre: a etapa 4 do projeto está concluída, e cada aluno é agora um criador de jogos publicados no Roblox.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do jogo saindo da caixa. "Até hoje o seu jogo só vivia no seu computador; hoje a gente abre a porta e deixa ele andar pelo mundo inteiro." Mostre, não explique demais: publique o exemplo no projetor e, quando o link funcionar, diga "olha, agora qualquer pessoa pode jogar, é só clicar no link!". Compare Play e Publicar com o ensaio e o show: Play é o ensaio na sua casa; Publicar é subir no palco para o mundo todo assistir. Para a privacidade, diga "Private é a porta fechada, só você entra; Public é a porta aberta, todo mundo entra".

## Erros comuns e como ajudar

O aluno confunde Play com Publicar e acha que já publicou: explique que Play só roda na máquina dele e que o jogo de verdade vem de "Publish to Roblox". O jogo fica privado e os colegas não conseguem entrar: lembre de mudar a Privacidade para "Public" no roblox.com. A janela de publicar não aparece: confira se o aluno está logado na conta do Roblox dentro do Studio. O link abre mas não carrega: peça para aguardar alguns segundos, pois o servidor pode estar iniciando, e tente de novo. O aluno esquece de salvar antes de publicar e perde um ajuste: lembre de "Ctrl+S" antes do "Publish". Fica tímido para apresentar: deixe apresentar em dupla ou só jogar enquanto você narra a ideia.`,
  exercicios: [
    {
      titulo: `Conferindo o jogo no Play`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o projeto de cada aluno aberto no Roblox Studio, peça que cliquem em Play (a seta no topo) e joguem o próprio jogo do começo ao fim. Oriente a anotar tudo que não funcionar. Passe nas mesas e ajude a confirmar se o jogo começa, se tem objetivo e se dá para terminar. Anote no quadro os ajustes encontrados.`,
      atividade: `Abra o seu jogo e clique em Play para testar. Jogue do início ao fim como se fosse um jogador novo. Anote: o jogo começa direito? Dá para chegar ao final? Tem algum bug? Liste o que ainda precisa arrumar antes de publicar.`,
      gabarito: `O aluno acerta quando roda o próprio jogo no Play, joga do início ao fim e confirma a checklist do jogo pronto. Sinal de sucesso: ele diz com clareza se o jogo começa, tem objetivo e pode ser terminado, e lista qualquer último ajuste, ou confirma que está tudo funcionando.`,
    },
    {
      titulo: `Publicando o jogo no Roblox`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre primeiro no projetor o caminho completo: "File" maior que "Publish to Roblox", janela de Nome e Descrição, botão "Create". Depois acompanhe cada aluno fazendo o mesmo. Cuide para que estejam logados na conta antes e ajude quem não encontrar o item no menu "File".`,
      atividade: `Vamos colocar o seu jogo no ar! Clique em "File" no canto superior esquerdo e depois em "Publish to Roblox". Na janela que abrir, escreva o Nome e a Descrição do seu jogo e clique em "Create". Pronto, o seu jogo foi enviado para os servidores do Roblox!`,
      gabarito: `O aluno acerta quando percorre o caminho "File" maior que "Publish to Roblox", preenche Nome e Descrição e clica em "Create", recebendo a confirmação de que o jogo foi publicado. Sinal de sucesso: o jogo passa a existir no Roblox com um Game ID próprio, mesmo que ainda esteja privado.`,
    },
    {
      titulo: `Deixando o jogo público e copiando o link`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `Ensine a ajustar a privacidade no navegador. Oriente o aluno a abrir roblox.com, ir em "Create", achar o jogo, clicar nos três pontinhos, em "Configure" e mudar a Privacidade para "Public". Depois mostre onde copiar o link do jogo. Ajude quem não encontrar a área de criações ou a opção de privacidade.`,
      atividade: `Abra o roblox.com no navegador e entre em "Create". Encontre o seu jogo, clique nos três pontinhos e depois em "Configure". Mude a Privacidade de "Private" para "Public". Por fim, copie o link do seu jogo e cole no mural da turma.`,
      gabarito: `O aluno acerta quando abre roblox.com maior que "Create", entra em "Configure" do jogo, troca a Privacidade para "Public" e copia o link, colando-o no mural. Sinal de sucesso: o jogo fica aberto para todos e o link compartilhado realmente abre o jogo quando clicado.`,
    },
    {
      titulo: `Jogando o jogo do colega`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e peça que abram o link do jogo um do outro a partir do mural. Oriente cada aluno a jogar até onde der e a dar um elogio e uma sugestão gentil. O jogador de fora costuma achar coisas que o autor não percebe. Circule incentivando comentários respeitosos e específicos.`,
      atividade: `Pegue o link do jogo da sua dupla no mural e entre para jogar. Jogue até onde conseguir. Depois, diga uma coisa que você adorou e uma ideia para deixar o jogo ainda melhor. Achou algo estranho que o seu colega não tinha visto? Conte com gentileza.`,
      gabarito: `O aluno acerta quando abre o jogo da dupla pelo link publicado, joga um trecho, dá um elogio específico e uma sugestão construtiva, e relata qualquer problema de forma respeitosa. Sinal de sucesso: a dupla troca observações úteis e cada autor sai com pelo menos uma ideia de melhoria.`,
    },
    {
      titulo: `Lançamento oficial e celebração`,
      tipo: `desafio e roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza as apresentações no projetor como mestre de cerimônias. Combine antes os passos: mostrar o jogo, contar a ideia em uma frase e jogar um trecho ao vivo, dizendo o link em voz alta. Garanta aplausos para cada aluno. Para fechar, celebre a conclusão da etapa 4: cada aluno é agora um criador de jogos publicados no Roblox. Se o aluno for tímido, deixe apresentar em dupla ou só jogar enquanto você narra. Se quiser um toque extra, peça que adicionem ao script uma mensagem de boas-vindas usando print com vírgula, como print("Bem-vindo ao jogo de", "Ana"), sem chaves de interpolação.`,
      atividade: `Chegou a sua vez de brilhar! No telão, mostre o seu jogo publicado, conte a ideia dele em uma frase e jogue um pedaço ao vivo. Diga o link para a turma entrar. Como desafio extra, abra um Script e adicione uma mensagem de boas-vindas com o seu nome, usando print com vírgula, por exemplo: print("Bem-vindo ao jogo de", "Ana"). Comemore: o seu jogo está oficialmente no ar!`,
      gabarito: `O aluno acerta quando apresenta o jogo publicado dizendo a ideia, jogando um trecho ao vivo e compartilhando o link funcionando, mesmo com um empurrãozinho do professor. No desafio extra, a linha correta usa print com vírgula e textos entre aspas, sem chaves de interpolação, por exemplo: print("Bem-vindo ao jogo de", "Ana"). O objetivo é o orgulho de ter um jogo publicado no Roblox e a celebração da etapa 4 concluída.`,
    },
  ],
};
