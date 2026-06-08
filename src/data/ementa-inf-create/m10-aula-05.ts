import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Trabalho em equipe na nuvem",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compartilhar uma apresentação do Google com colegas, definir permissões (editor, comentarista e leitor) e usar comentários para dar e receber sugestões em tempo real.`,
  descricao: `Até agora cada aluno trabalhou sozinho na própria apresentação. Nesta aula a turma descobre o maior poder do Google Apresentações: várias pessoas podem editar o mesmo arquivo ao mesmo tempo, de computadores diferentes, sem precisar enviar arquivos por e-mail nem ter cópias soltas. Tudo fica salvo na nuvem, sempre na versão mais nova. Essa é a base do trabalho em equipe moderno, igual ao que acontece em empresas e em projetos de escola.

O coração da aula é o botão "Compartilhar", aquele botão azul no canto superior direito da tela. A partir dele o aluno aprende duas formas de convidar alguém: digitando o e-mail da pessoa ou copiando um link para enviar pelo chat ou pela sala. Mais importante do que convidar é decidir o que a pessoa convidada pode fazer. Por isso a aula trabalha as três permissões: leitor (só olha), comentarista (pode opinar mas não muda nada) e editor (pode alterar tudo). Saber escolher a permissão certa é uma habilidade de organização e de respeito ao trabalho do colega.

A segunda metade prática é sobre comentários. Em vez de apagar o trabalho do colega quando algo parece errado, o aluno aprende a deixar um comentário amarelo preso a um texto ou imagem, escrevendo uma sugestão educada. O dono do slide lê, responde, concorda ou explica, e por fim marca o comentário como resolvido. É uma conversa dentro do arquivo, registrada e organizada.

Ao final, cada dupla terá convidado um ao outro, definido permissões conscientes e trocado pelo menos uma rodada de comentários e respostas. A turma sai entendendo que colaborar não é bagunçar o arquivo dos outros, e sim combinar regras claras de quem pode o quê.`,
  materiais: [
    `Computadores (um por aluno) com o Google Apresentações aberto no navegador e cada aluno logado na própria conta Google da escola`,
    `Projetor ou TV ligado ao computador do professor para demonstrar o botão Compartilhar e os comentários`,
    `Uma apresentação de exemplo já pronta em cada conta (pode ser a dos slides feitos nas aulas 1 a 4)`,
    `Lista impressa com os e-mails das contas Google da turma, para os alunos convidarem uns aos outros sem erro de digitação`,
    `Conexão estável com a internet (a colaboração em tempo real depende dela)`,
    `Slide-modelo do professor com um texto propositalmente com erros, para a turma praticar comentários`,
    `Quadro ou flip chart para anotar a diferença entre leitor, comentarista e editor`,
  ],
  conceitosChave: [
    `Compartilhar — dar acesso a uma pessoa para que ela veja ou edite o mesmo arquivo na nuvem, sem precisar enviar uma cópia.`,
    `Permissão — a regra que diz o que a pessoa convidada pode fazer no arquivo: só ver, comentar ou editar.`,
    `Editor — quem pode mudar tudo na apresentação: texto, imagens, slides e até o compartilhamento.`,
    `Comentarista — quem pode deixar comentários e sugestões, mas não pode alterar o conteúdo dos slides.`,
    `Leitor — quem só pode visualizar a apresentação, sem comentar nem editar nada.`,
    `Comentário — um bilhete amarelo preso a um texto ou imagem, usado para dar uma sugestão sem apagar o trabalho do colega.`,
    `Tempo real — quando duas ou mais pessoas mexem no mesmo arquivo ao mesmo tempo e cada uma vê o cursor e as mudanças da outra na hora.`,
  ],
  treinamento: `## O que o professor precisa saber

A colaboração no Google Apresentações gira em torno do botão azul "Compartilhar", no canto superior direito. Ao clicar nele abre uma janela com dois campos: "Adicionar pessoas e grupos" (onde você digita e-mails) e, mais abaixo, "Acesso geral", que controla o link. Ao lado de cada pessoa convidada há um menu suspenso com as três permissões: Leitor, Comentarista e Editor. Para gerar um link, clique em "Copiar link". Para mudar quem o link alcança, troque de "Restrito" para "Qualquer pessoa com o link". O comentário se cria selecionando um texto ou imagem e clicando no ícone de balão com o sinal de mais (atalho Ctrl+Alt+M). Cada comentário pode receber respostas e ser marcado como "Resolver" (o tique). Teste tudo isso uma vez antes da aula, com duas abas ou dois logins, para ver a colaboração em tempo real funcionando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte como eles entregariam um trabalho em grupo sem a nuvem. Mostre no projetor um arquivo seu e diga que hoje a turma vai mexer no mesmo slide ao mesmo tempo. Confirme que todos estão logados na conta da escola.

Conteúdo guiado (15 min): abra sua apresentação no projetor. Clique no botão azul "Compartilhar" (canto superior direito). Digite o e-mail de um aluno no campo "Adicionar pessoas e grupos". Mostre o menu de permissões e explique Leitor, Comentarista e Editor com uma frase cada. Escolha "Comentarista", clique em "Enviar". Depois mostre "Copiar link" e a diferença entre "Restrito" e "Qualquer pessoa com o link". Por fim, selecione um texto, aperte Ctrl+Alt+M e escreva um comentário de exemplo; mostre o botão "Comentar".

Mão na massa (25 min): organize a turma em duplas. Cada aluno abre a própria apresentação e clica em "Compartilhar". Usando a lista de e-mails, convida o colega como "Editor" e clica em "Enviar". Quando os dois aceitarem, peça que abram o arquivo um do outro e observem o cursor colorido do parceiro se mexendo em tempo real. Em seguida, cada um seleciona um texto no slide do colega, aperta Ctrl+Alt+M e deixa uma sugestão educada. O dono do slide lê, responde e clica em "Resolver". Circule pela sala conferindo permissões e comentários.

Desafio e compartilhar (10 min): peça que cada dupla mude a permissão de uma pessoa para "Leitor" e tente editar, para sentir na prática o bloqueio. Depois reúna a turma e pergunte qual permissão usariam para a diretora ver o trabalho sem mexer (resposta: Leitor).

## Como explicar de forma clara

Use a imagem de uma casa. O Editor tem a chave e pode mexer nos móveis. O Comentarista entra e pode deixar bilhetes na geladeira, mas não muda nada de lugar. O Leitor olha pela janela. Diga que o link é como o endereço da casa: se você der para "qualquer pessoa", qualquer um que tiver o endereço entra; se deixar "Restrito", só quem foi convidado pelo nome. Reforce que comentar não é apagar: é como escrever a lápis na margem, e o dono decide se aceita.

## Erros comuns e como ajudar

O erro mais frequente é digitar o e-mail errado e o convite não chegar; por isso a lista impressa é essencial. Outro é confundir "comentar" com "editar": muitos alunos apagam o texto do colega em vez de sugerir. Pare a turma e relembre o Ctrl+Alt+M. Há quem esqueça de clicar em "Enviar" ou "Comentar" e ache que travou. Alguns deixam o link em "Qualquer pessoa com o link" sem perceber; mostre como voltar para "Restrito". E se dois mexem na mesma palavra ao mesmo tempo, explique que a nuvem guarda as duas mudanças, sem perder nada, e que dá para ver o histórico em "Arquivo" e depois "Histórico de versões".`,
  exercicios: [
    {
      titulo: `Achando o botão Compartilhar`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com a própria apresentação aberta e logado na conta da escola. Aponte no projetor o canto superior direito.`,
      atividade: `Abra a sua apresentação. Encontre e clique no botão azul "Compartilhar", no canto superior direito da tela. Na janela que abrir, localize o campo "Adicionar pessoas e grupos" e o menu de permissões. Não convide ninguém ainda; apenas reconheça onde fica cada coisa e feche a janela.`,
      gabarito: `O botão "Compartilhar" fica no canto superior direito, geralmente azul. Ao clicar, abre uma janela com o campo "Adicionar pessoas e grupos" no topo e, mais abaixo, a seção "Acesso geral", que controla o link. O menu de permissões aparece ao lado de cada pessoa convidada.`,
    },
    {
      titulo: `Convidando o colega como editor`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e entregue a lista de e-mails. Confira que cada um escolheu a permissão "Editor" antes de enviar. Verifique se o convite chegou.`,
      atividade: `Em dupla, cada um abre a própria apresentação e clica em "Compartilhar". No campo "Adicionar pessoas e grupos", digite o e-mail do seu colega usando a lista impressa. No menu de permissões, escolha "Editor". Clique em "Enviar". Depois, abra o convite que o colega mandou e entre na apresentação dele.`,
      gabarito: `Cada aluno deve ter o colega listado como "Editor" dentro da janela de compartilhamento, e ambos conseguem abrir e alterar o arquivo um do outro. Sinal de sucesso: ao abrir o slide do colega, aparece um cursor colorido com o nome dele se movendo em tempo real.`,
    },
    {
      titulo: `Comentário e resposta`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre o atalho Ctrl+Alt+M e o ícone de balão. Reforce que comentar não é apagar. Cheque se as sugestões são educadas.`,
      atividade: `No slide do seu colega, selecione um texto ou uma imagem e aperte Ctrl+Alt+M (ou clique no ícone de balão com o sinal de mais). Escreva uma sugestão educada, por exemplo "Que tal deixar o título maior?", e clique em "Comentar". Volte ao seu próprio slide, leia o comentário que o colega deixou, escreva uma resposta e clique em "Resolver" quando combinarem.`,
      gabarito: `Aparece um balão amarelo preso ao texto, com a sugestão escrita e o nome do autor. O dono do slide responde dentro do mesmo balão e, ao clicar no tique "Resolver", o comentário some da tela mas continua guardado no histórico, podendo ser reaberto em "Comentários", no topo da tela.`,
    },
    {
      titulo: `Testando as três permissões`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre primeiro no projetor como trocar a permissão pelo menu suspenso. Espere o aluno sentir o bloqueio e nomeie o que aconteceu.`,
      atividade: `Volte em "Compartilhar" na sua apresentação. Troque a permissão do seu colega de "Editor" para "Leitor" e clique em "Salvar". Peça para o colega tentar digitar um texto no seu slide e observe o que acontece. Depois troque para "Comentarista" e peça para ele tentar comentar e tentar editar. Anote em quais permissões ele conseguiu cada ação.`,
      gabarito: `Como Leitor, o colega só visualiza e não consegue digitar nada (aparece o modo somente leitura). Como Comentarista, ele consegue deixar comentários, mas o texto e as imagens dos slides continuam bloqueados para edição. Apenas como Editor ele altera o conteúdo. Conclusão correta: Leitor só vê, Comentarista vê e comenta, Editor faz tudo.`,
    },
    {
      titulo: `Mural colaborativo da dupla`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Crie ou indique uma apresentação única por dupla. Defina papéis claros e circule garantindo que ambos editem e que pelo menos um comentário seja resolvido.`,
      atividade: `Em dupla, escolham uma das apresentações para ser o "mural" comum e garantam que ambos estejam como "Editor". Juntos, no mesmo arquivo e ao mesmo tempo, criem um slide chamado "Nossa dupla": um escreve dois hobbies de cada, o outro adiciona uma imagem. Depois, cada um deixa um comentário sugerindo uma melhoria no que o parceiro fez, o autor responde e os dois marcam os comentários como resolvidos.`,
      gabarito: `O slide "Nossa dupla" fica pronto com texto e imagem feitos pelas duas pessoas, visível com os dois cursores coloridos durante a edição. Deve haver pelo menos dois comentários trocados (um de cada aluno), cada um com uma resposta, todos marcados como resolvidos. Sinal de sucesso: o arquivo mostra os dois nomes no compartilhamento como Editores e nenhum trabalho foi apagado, só melhorado por sugestões.`,
    },
  ],
};
