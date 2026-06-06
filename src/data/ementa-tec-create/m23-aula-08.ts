import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Publicar o Jogo e Compartilhar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Publicar oficialmente o jogo no Roblox, gerar o link público, testar a versão online e apresentar o jogo publicado para a turma, fechando a etapa 4 de 5 do projeto.`,
  descricao: `Esta é a aula que coroa o mês inteiro de trabalho no Roblox Studio. Ao longo das sete aulas anteriores, cada aluno importou o cenário modelado no Maya, posicionou tudo, escreveu os primeiros scripts em Lua, programou as mecânicas que dão vida ao jogo, integrou a música, a voz e a arte feitas com IA, caçou bugs e, por fim, poliu e balanceou a experiência. Agora chega o momento mais aguardado: apertar o botão de publicar e ver o próprio jogo virar algo de verdade, com um endereço na internet que qualquer pessoa pode abrir e jogar.

O foco técnico da aula é a publicação. Publicar, no Roblox, significa enviar o jogo para os servidores da plataforma e gerar uma página pública com um link. Até aqui, o aluno testava o jogo só dentro do Roblox Studio, no próprio computador. A partir de hoje, o jogo existe online: o aluno cria a experiência, ajusta o nome, a descrição e o ícone, define quem pode jogar e clica em publicar. Depois, abre o link no navegador ou no aplicativo do Roblox Player e joga a versão que está rodando "na nuvem", exatamente como qualquer jogador veria. Essa diferença entre testar no Studio e jogar a versão publicada é o coração da aula.

A aula termina com a apresentação. Cada aluno mostra o jogo publicado para a turma, compartilha o link e conta uma escolha que fez para deixar a experiência pronta. Os colegas jogam ou assistem e dão um retorno positivo e específico. Esse momento fecha a etapa 4 de 5 do projeto do Ano 2 e prepara o terreno para a última etapa, quando o jogo ganhará os extras finais e será apresentado no Demo Day.

Como esta é a aula final do mês de Roblox Studio mais Lua, o professor deve garantir que NENHUM aluno termine sem o jogo publicado e sem o link salvo. Esse é o critério de sucesso do mês: o entregável é o jogo publicado, com endereço público, testado na versão online e mostrado para a turma.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e o projeto de cada aluno já aberto, um por aluno, com login Roblox feito`,
    `Conta Roblox ativa de cada aluno (e, quando necessário, a conta da escola ou autorização dos responsáveis para publicar)`,
    `Navegador ou o aplicativo Roblox Player instalado em cada computador para testar a versão online publicada`,
    `Projetor ou TV para o professor demonstrar a publicação ao vivo e para a apresentação final dos jogos`,
    `Arquivo de exemplo: um jogo já publicado pelo professor, com nome, descrição e ícone prontos, para mostrar o resultado esperado`,
    `Ícone ou imagem de capa de cada jogo (pode reaproveitar a arte feita com IA) já salvo numa pasta para subir na publicação`,
    `Documento ou folha para cada aluno anotar e guardar o link público do próprio jogo (backup do endereço)`,
  ],
  conceitosChave: [
    `Publicar — enviar o jogo para os servidores do Roblox e criar uma página pública com um link que outras pessoas podem abrir.`,
    `Experiência — o nome que o Roblox dá a cada jogo publicado; é a página oficial do projeto na plataforma.`,
    `Link público — o endereço na internet do jogo publicado; é o que o aluno compartilha para os colegas jogarem.`,
    `Versão online — o jogo rodando "na nuvem", igual ao que qualquer jogador veria, diferente do teste feito dentro do Studio.`,
    `Ícone e capa — a imagem que representa o jogo na página; aqui o aluno reaproveita a arte criada com IA.`,
    `Privacidade — a configuração que define quem pode jogar (público, para todos, ou privado, só para convidados).`,
    `Entregável — o resultado combinado para o mês; aqui, o jogo publicado, com link, testado na versão online e apresentado à turma.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula, mas precisa ter feito o caminho de publicação pelo menos uma vez antes. Publicar no Roblox tem dois passos que costumam confundir. O primeiro é "Publicar para o Roblox" (File, Publish to Roblox), que envia o jogo e cria a experiência; o segundo é tornar a experiência pública nas configurações, senão ninguém além do aluno consegue abrir o link. Antes da aula, publique um jogo de teste, marque-o como público e abra o link em outra aba para confirmar que funciona. Saiba onde ficam os botões: o menu File no canto superior esquerdo do Studio, a janela de publicação com os campos Nome, Descrição e a opção de subir o ícone, e a página da experiência no Creator Dashboard, onde a privacidade vira "Public". Lembre que contas muito novas ou de menores podem ter restrições; tenha combinado com a escola se a publicação será na conta do aluno ou numa conta da turma. A mensagem central do dia é simples: hoje o jogo deixa de ser um arquivo no computador e passa a existir na internet.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): peça que cada aluno abra o projeto e aperte Ctrl+S para salvar. Pergunte à turma: qual a diferença entre testar no Studio e jogar a versão publicada? No projetor, mostre o seu jogo de exemplo já publicado, abra o link e jogue um trecho, dizendo "hoje cada um vai gerar este link".

Conteúdo novo guiado (15 min): no projetor, abra um projeto no Studio. Vá em File, Publish to Roblox. Na janela, preencha o Nome do jogo e a Descrição, clique para subir o Ícone (a arte feita com IA) e confirme em Create ou Publish. Depois mostre o segundo passo: abra o Creator Dashboard (botão na própria janela ou no site), encontre a experiência e mude a privacidade para Public. Por fim, copie o link e abra-o no navegador ou no Roblox Player para jogar a versão online. Mostre que é o mesmo jogo, agora "na nuvem".

Mão na massa (25 min): cada aluno repete o caminho no próprio computador. Roteiro na lousa: 1) salvar com Ctrl+S; 2) File, Publish to Roblox; 3) preencher Nome, Descrição e subir o Ícone; 4) confirmar a publicação; 5) deixar a experiência Public; 6) copiar o link e abrir para testar a versão online; 7) anotar o link na folha. Circule conferindo um por um. Quando o aluno terminar, peça para guardar o link em dois lugares (folha e documento da turma).

Desafio e compartilhar (10 min): monte a vitrine de jogos. Cada aluno compartilha o link, mostra o jogo rodando online e conta uma escolha que fez para deixá-lo pronto. A turma joga ou assiste e dá um retorno positivo. Feche dizendo que o entregável do mês está concluído e que falta só a etapa final do projeto, o Demo Day.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga que publicar é "tirar o jogo da sua gaveta e colocar na vitrine da loja": antes só você via, agora o mundo todo pode entrar e jogar. Explique que testar no Studio é como "ensaiar no quarto" e jogar a versão publicada é "subir no palco de verdade". Compare o link a um endereço: assim como uma casa tem um número que as pessoas usam para chegar, o jogo tem um link que leva qualquer um até ele. Reforce que publicar e deixar público são duas coisas diferentes, igual a abrir a loja e destrancar a porta. Comemore: este é o dia em que o jogo nasce de verdade.

## Erros comuns e como ajudar

O erro mais comum é publicar e achar que terminou, mas deixar a experiência privada; o link não abre para os colegas. Sempre confira a privacidade como Public. Outro erro é esquecer de salvar com Ctrl+S antes de publicar e subir uma versão antiga; lembre de salvar primeiro. Muitos pulam o ícone e a descrição, deixando a página sem cara de jogo; incentive a reaproveitar a arte feita com IA. Alguns confundem testar no Studio com testar a versão online e não chegam a abrir o link de verdade; insista que o teste vale só quando o jogo abre pelo link. Há quem não copie nem guarde o link e depois não ache o jogo; combine guardar o endereço em dois lugares. Por fim, contas novas podem barrar a publicação; tenha o plano da conta da turma pronto para esses casos.`,
  exercicios: [
    {
      titulo: `Salvar antes de publicar`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Reforce que publicar uma versão antiga é um erro comum. Confirme que cada aluno apertou Ctrl+S e que o jogo está na última versão antes de seguir. Mostre no projetor onde fica o menu File.`,
      atividade: `Abra o seu projeto no Roblox Studio e dê uma última jogada rápida para conferir que está tudo certo. Em seguida, salve com Ctrl+S. Anote no caderno por que é importante salvar antes de publicar.`,
      gabarito: `O aluno salvou o projeto com Ctrl+S e está com a versão mais recente aberta. A explicação correta é: se publicar sem salvar, o Roblox sobe a versão antiga e as últimas mudanças não aparecem no jogo online. Quem não salvou deve refazer antes de publicar.`,
    },
    {
      titulo: `Publicar a experiência`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem. Mostre File, Publish to Roblox e os campos Nome, Descrição e Ícone. Confira que cada aluno reaproveitou a arte feita com IA como ícone e confirmou a publicação.`,
      atividade: `Vá em File, Publish to Roblox. Preencha o Nome do jogo e uma Descrição curta, suba o Ícone usando a arte que você criou com IA e confirme a publicação. Confira que apareceu a mensagem de que o jogo foi publicado.`,
      gabarito: `O jogo foi publicado com Nome preenchido, Descrição curta e Ícone (a arte de IA) carregado, e o Studio mostrou a confirmação de publicação. A experiência já existe na plataforma. Se faltou nome, descrição ou ícone, a página fica incompleta; oriente a completar.`,
    },
    {
      titulo: `Deixar público e testar online`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o passo que mais falha. Acompanhe cada aluno mudando a privacidade para Public no Creator Dashboard e depois abrindo o link no navegador ou no Roblox Player. Só conte como pronto quando o jogo abrir pelo link.`,
      atividade: `Abra as configurações da sua experiência e mude a privacidade para Public. Depois copie o link do jogo, cole no navegador ou no Roblox Player e jogue a versão online. Compare: é o mesmo jogo que você fez no Studio?`,
      gabarito: `A experiência está marcada como Public e o aluno conseguiu abrir e jogar o jogo pelo link, fora do Studio. O aluno percebe que a versão online é igual à do Studio, só que rodando na nuvem. Se o link não abre, quase sempre a experiência ainda está privada; volte às configurações.`,
    },
    {
      titulo: `Link salvo e conferido em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e mande cada um testar o jogo do colega pelo link. Coloque a lista de verificação na lousa. Circule ouvindo. O objetivo é um aluno validar a publicação do outro e garantir que o link esteja salvo em dois lugares.`,
      atividade: `Troque o link com o colega. Abra o jogo dele pelo link e confira: 1) o jogo abre fora do Studio? 2) tem nome e ícone na página? 3) dá para jogar do início? 4) o link está salvo na folha e no documento da turma? Aponte o que faltar e ajude a corrigir.`,
      gabarito: `A conferência está correta quando a dupla confirma os quatro itens: o jogo abre pelo link, tem nome e ícone, dá para jogar e o endereço está guardado em dois lugares. Qualquer item faltando deve ser corrigido antes da apresentação. Se o link do colega não abre, a experiência dele ainda está privada.`,
    },
    {
      titulo: `Vitrine de jogos publicados`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Organize a vitrine com os jogos no projetor. Cada aluno fala cerca de um minuto, mostra o jogo rodando pelo link e compartilha o endereço. Modele a apresentação antes com o seu exemplo. Garanta que a turma dê um retorno positivo e específico e celebre o fechamento da etapa 4 de 5.`,
      atividade: `Apresente o seu jogo publicado para a turma: mostre ele rodando pelo link, diga o nome, conte uma escolha que você fez para deixá-lo pronto (uma mecânica, a trilha, a arte) e compartilhe o link. Depois, jogue o jogo de um colega e dê um elogio específico.`,
      gabarito: `Não há resposta única: a apresentação está completa quando o aluno mostra o jogo rodando pelo link, nomeia o projeto, justifica ao menos uma escolha de finalização e oferece um retorno positivo e específico a um colega. O professor valida a publicação funcionando e a participação, fechando a etapa 4 de 5 do projeto.`,
    },
  ],
};
