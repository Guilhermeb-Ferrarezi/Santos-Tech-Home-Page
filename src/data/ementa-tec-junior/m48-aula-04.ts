import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "No ar! Publicando no Roblox",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Cada criança publica oficialmente o próprio jogo no Roblox, ajusta as permissões para deixá-lo público, abre o link no navegador para ver o jogo rodando de verdade e troca links com os colegas para um teste cruzado.`,
  descricao: `Esta é uma aula de grande emoção: o dia em que o jogo sai do computador da escola e vai para a internet, onde qualquer pessoa do mundo pode entrar e jogar. Até agora a turma testou, consertou bugs e deixou tudo pronto no Roblox Studio. Mas um jogo que só roda no Studio é como um desenho que ficou guardado na gaveta. Hoje a gente "pendura o desenho na parede": publicamos o jogo no Roblox e ele ganha um endereço próprio na internet, um link que dá para mandar para a família e os amigos.

Publicar significa enviar o jogo do Studio para os servidores do Roblox e, depois, dizer quem pode entrar. Quando a criança aperta "Publish to Roblox" (Publicar no Roblox) pela primeira vez, ela dá um nome ao jogo e ele vira uma "experiência" (é assim que o Roblox chama os jogos). Nesse momento, porém, o jogo nasce privado: só o dono consegue entrar. Por isso existe um segundo passo tão importante quanto o primeiro: ir nas configurações de permissão e mudar de "Private" (Privado) para "Public" (Público). Sem esse ajuste, os colegas tentam abrir o link e recebem um aviso de "sem permissão".

Depois de publicado e tornado público, vem a parte mais divertida: abrir o link no navegador e ver o jogo rodando "de verdade", fora do Studio, na página oficial do Roblox. A criança percebe que aquilo que ela construiu agora tem foto, nome, botão verde de "Play" e um endereço só dela. É a prova concreta de que ela é uma criadora de games. Então a turma troca os links: cada um joga o jogo do outro, faz um teste cruzado e dá um retorno carinhoso sobre o que achou legal e o que poderia melhorar.

Esta aula encerra a etapa de produção e abre a etapa de portfólio e Demo Day das próximas semanas. O professor não precisa ser um especialista em Roblox: precisa conhecer dois passos (publicar e tornar público), saber onde ficam os botões e conduzir a turma com calma, celebrando cada link que abre. É o momento de mostrar que o trabalho de criação termina quando outras pessoas conseguem jogar o que a gente fez.`,
  materiais: [
    `Computadores (um por aluno) com o Roblox Studio aberto no projeto final de cada criança, já pronto e testado, e cada aluno logado na própria conta Roblox.`,
    `Navegador de internet (Chrome ou Edge) aberto em cada máquina para abrir o link do jogo depois de publicado.`,
    `Projetor ou TV grande para o professor demonstrar passo a passo onde clicar em "Publish to Roblox" e nas configurações de permissão.`,
    `Um jogo de exemplo simples já publicado pelo professor, para mostrar como fica a página final no Roblox e o botão verde de jogar.`,
    `Folha "Meu Link" impressa: um cartão onde cada criança copia (ou anota com ajuda) o endereço do próprio jogo para trocar com os colegas.`,
    `Ficha de "Teste Cruzado": papel com carinhas (gostei / posso melhorar) para a criança marcar o retorno do jogo do colega.`,
    `Conexão de internet estável e, se a escola usar contas de menores, autorização prévia dos responsáveis para publicação (verificar antes da aula).`,
  ],
  conceitosChave: [
    `Publicar — enviar o jogo do Studio para os servidores do Roblox, para ele ganhar um endereço na internet e poder ser jogado fora do computador.`,
    `Experiência — o nome que o Roblox dá para um jogo publicado; é a "casa" do seu jogo na internet, com nome, foto e botão de jogar.`,
    `Privado (Private) — quando só o dono do jogo consegue entrar; é assim que o jogo nasce ao ser publicado pela primeira vez.`,
    `Público (Public) — quando qualquer pessoa com o link pode entrar e jogar; é a permissão que a gente liga para os colegas conseguirem jogar.`,
    `Link — o endereço do jogo na internet; um caminho único que a gente copia e manda para os amigos abrirem o jogo.`,
    `Teste cruzado — jogar o jogo de um colega e dizer o que achou, enquanto ele joga o seu; é o momento de dar e receber retorno.`,
    `Permissão — a regra que diz quem pode entrar no jogo; a gente muda essa regra nas configurações da experiência.`,
  ],
  treinamento: `## O que o professor precisa saber

Publicar um jogo no Roblox tem dois momentos que a turma precisa entender separados: primeiro a gente PUBLICA (envia o jogo para a internet) e depois a gente TORNA PÚBLICO (liga a permissão para os outros entrarem). Muita gente faz só o primeiro e acha que terminou; aí o colega tenta abrir e não consegue. Decore esses dois passos e você conduz a aula tranquilo.

Para publicar, no Roblox Studio vá no menu "File" (Arquivo), no canto superior esquerdo, e clique em "Publish to Roblox" (Publicar no Roblox). Na primeira vez abre uma janela para dar "Name" (Nome) e, se quiser, "Description" (Descrição); depois é só clicar no botão azul "Create" (Criar) ou "Publish" (Publicar). Atalho útil: Alt+P. Quando der certo, aparece uma mensagem de confirmação. A partir daí, o jogo existe na internet, mas ainda nasce PRIVADO.

Para tornar público existem dois caminhos. O mais simples: no site roblox.com, entre em "Create" (Criar), abra "Experiences" (Experiências), clique nos três pontinhos do jogo, escolha as configurações e mude "Playability" de "Private" para "Public". Pelo Studio dá também: "File" maior que "Game Settings" (Configurações do Jogo), aba "Permissions" (Permissões), opção "Public". Sempre clique em "Save" (Salvar). Antes da aula, confirme que as contas das crianças podem publicar e que há autorização dos responsáveis.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Receba a turma comemorando: "Hoje nosso jogo vai para a internet!". Relembre que na aula passada deixamos tudo testado e sem bugs. No projetor, mostre seu jogo de exemplo já publicado, abra a página no navegador e aperte o botão verde de jogar. Diga: "No fim da aula, cada um vai ter um link assim, só seu."

15 min — Conteúdo novo guiado: No Studio, no projetor, abra "File" e clique em "Publish to Roblox". Mostre devagar a janela: digite um "Name", clique em "Create"/"Publish". Espere a confirmação. Agora explique o segundo passo: vá em "File" maior que "Game Settings", aba "Permissions", e mude de "Private" para "Public", clicando em "Save". Por fim, copie o link e abra no navegador para todos verem o jogo no ar.

25 min — Mão na massa: Cada criança publica o próprio jogo seguindo os dois passos. Passe de mesa em mesa garantindo que ninguém pule a parte de tornar público. Ajude a copiar o link para a folha "Meu Link". Quando o link abrir no navegador, comemore junto. Depois, organize a troca de links entre duplas para o teste cruzado: cada um abre e joga o jogo do colega.

10 min — Desafio e compartilhar: Lance o desafio do "joguei o do amigo": cada criança preenche a ficha de Teste Cruzado marcando uma coisa que gostou e uma ideia de melhora no jogo do colega. Depois, alguns mostram rapidamente o próprio jogo aberto no navegador para a turma. Celebre cada link que funcionou.

## Como explicar para crianças

Use a ideia de "pendurar o desenho na parede": o jogo estava guardado na gaveta (no Studio) e agora vai para a parede (a internet), onde os outros podem ver. Explique privado e público com a porta de casa: "Privado é porta trancada, só você entra; público é porta aberta, os amigos entram também." Chame o link de "endereço do seu jogo", como o endereço da nossa casa que a gente dá para a visita chegar. Comemore cada etapa em voz alta: "Publicou! Agora abriu a porta! Agora seu amigo está jogando o SEU jogo!". Para o teste cruzado, diga "vamos ser jogadores um do outro e contar o que achamos legal".

## Erros comuns e como ajudar

O erro número um é publicar e esquecer de tornar público; o colega abre o link e vê "sem permissão". Reforce sempre os DOIS passos e cheque mesa a mesa. Outro erro: a criança clica em "Save to Roblox" (Salvar no Roblox) achando que é a mesma coisa que publicar; mostre que o certo é "Publish to Roblox". Algumas perdem o link; por isso usamos a folha "Meu Link" e você pode ajudar a copiar. Há quem digite o link errado no navegador e caia em página de erro; ensine a copiar e colar em vez de digitar. Se a internet cair, peça que continuem testando no Studio enquanto você resolve, e publiquem assim que voltar.`,
  exercicios: [
    {
      titulo: `Caça aos Dois Botões`,
      tipo: `Roda de conversa / reconhecimento`,
      tempo: `7 min`,
      guiaProfessor: `Antes de qualquer clique, mostre no projetor o menu "File" do Studio e, separadamente, a tela de "Game Settings" com a aba "Permissions". Explique que publicar tem DOIS passos e que hoje todo mundo vai ser campeão se lembrar dos dois. Faça a turma repetir em voz alta: "Passo 1: publicar. Passo 2: tornar público."`,
      atividade: `Olhe a tela do professor e responda: qual é o passo 1 (publicar o jogo) e qual é o passo 2 (tornar o jogo público)? Aponte onde fica o "Publish to Roblox" no menu "File" e onde fica a opção "Public" nas permissões.`,
      gabarito: `A criança acerta quando diz, com as próprias palavras, que primeiro a gente publica (envia o jogo para a internet pelo "Publish to Roblox" no menu "File") e depois torna público (muda de "Private" para "Public" nas permissões). O professor confirma vendo a criança apontar os dois lugares na tela e citar a ordem certa.`,
    },
    {
      titulo: `Meu Jogo no Ar`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Guie passo a passo no projetor enquanto a turma faz junto. No Studio: "File" maior que "Publish to Roblox", digitar um "Name", clicar em "Create"/"Publish" e esperar a confirmação. Passe de mesa em mesa garantindo que cada um chegou na mensagem de sucesso. Lembre que, por enquanto, o jogo ainda está privado.`,
      atividade: `Abra o menu "File" e clique em "Publish to Roblox". Dê um "Name" (nome) para o seu jogo e clique no botão azul "Create" ou "Publish". Espere aparecer a mensagem de que deu certo. Pronto: seu jogo já está na internet!`,
      gabarito: `A criança acerta quando consegue concluir a publicação e ver a confirmação de sucesso na tela, com o jogo recebendo um nome. O professor confirma checando a mensagem de jogo publicado em cada máquina; se não apareceu, ajuda a refazer o caminho "File" maior que "Publish to Roblox".`,
    },
    {
      titulo: `Abrindo a Porta (Tornar Público)`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Este é o passo que mais gera esquecimento, então conduza com atenção. Mostre o caminho "File" maior que "Game Settings", aba "Permissions", e a troca de "Private" para "Public", terminando em "Save". Use a analogia da porta: "vamos abrir a porta do jogo para os amigos entrarem". Confirme mesa a mesa que cada um salvou.`,
      atividade: `Vá em "File" e abra "Game Settings". Clique na aba "Permissions" (Permissões). Troque de "Private" (Privado) para "Public" (Público) e clique em "Save" (Salvar). Você acabou de abrir a porta do seu jogo para os colegas!`,
      gabarito: `A criança acerta quando a permissão do jogo fica em "Public" e ela clica em "Save", confirmando a mudança. O professor verifica abrindo as configurações e vendo "Public" selecionado; um teste extra é o próprio professor abrir o link do aluno e conseguir entrar sem aviso de "sem permissão".`,
    },
    {
      titulo: `Trocando Links com o Amigo`,
      tipo: `Prática + papel`,
      tempo: `8 min`,
      guiaProfessor: `Ajude cada criança a copiar o link do jogo (do navegador ou da página da experiência) para a folha "Meu Link". Forme duplas e oriente a troca: um abre o link do outro no navegador. Reforce copiar e colar em vez de digitar, para não errar o endereço. Circule confirmando que cada link realmente abre o jogo do colega.`,
      atividade: `Copie o link (endereço) do seu jogo para a folha "Meu Link". Troque com o seu par: pegue o link do colega, cole no navegador e abra o jogo dele. Aperte o botão verde de jogar e veja o jogo do seu amigo rodando.`,
      gabarito: `A criança acerta quando consegue registrar o próprio link e abrir o jogo do colega no navegador, chegando a entrar e jogar. O professor confirma vendo a página do jogo do colega aberta na tela e a criança conseguindo apertar jogar; se der erro de permissão, retorna ao exercício anterior para checar o "Public".`,
    },
    {
      titulo: `Teste Cruzado dos Criadores`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Apresente como o desafio final: ser jogador e crítico carinhoso do jogo do colega. Entregue a ficha de Teste Cruzado com as carinhas (gostei / posso melhorar). Oriente que todo retorno deve começar por algo legal antes de uma sugestão. Ao final, convide alguns alunos a mostrar o próprio jogo aberto no navegador para a turma e comemore cada link no ar.`,
      atividade: `Jogue o jogo publicado de um colega usando o link dele. Na ficha de Teste Cruzado, marque uma coisa que você gostou e uma ideia de melhora. Conte para o colega: "Eu gostei de..." e "Você poderia melhorar...". Depois, se for chamado, mostre o seu jogo aberto no navegador para a turma.`,
      gabarito: `A criança acerta quando joga o jogo público de um colega pelo link, preenche a ficha com pelo menos um elogio e uma sugestão e comunica o retorno de forma gentil. O professor avalia pela ficha preenchida, pelo jogo do colega tendo aberto de verdade (prova de que o "Public" funcionou) e pela qualidade do retorno dado.`,
    },
  ],
};
