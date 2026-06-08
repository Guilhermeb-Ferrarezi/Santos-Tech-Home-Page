import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Reuniões com chat, tela e legendas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Praticar os recursos avançados do Google Meet — compartilhar a tela, usar o chat, levantar a mão e ativar legendas — dentro de uma reunião simulada da turma agendada pelo Google Agenda e convidada pelo Gmail.`,
  descricao: `Na aula passada o aluno aprendeu a entrar em uma reunião do Google Meet: clicar no link, escolher a câmera e o microfone e juntar-se à sala. Agora é hora de ir além de só aparecer na telinha. Numa reunião de verdade — uma aula online, um trabalho em grupo ou uma conversa com um professor — a pessoa precisa mostrar algo no computador, escrever um recado sem interromper quem fala e pedir a vez de maneira educada. Esta aula transforma o aluno de "participante quieto" em "participante completo".

São quatro superpoderes do Meet nesta aula. Compartilhar a tela permite mostrar para todo mundo o que está no seu computador — um slide, um site, um documento. O chat é a caixinha de mensagens escritas da reunião, perfeita para mandar um link ou tirar uma dúvida rápida sem cortar a fala de ninguém. Levantar a mão é um botão que avisa, com um ícone, que você quer falar, evitando que todos falem ao mesmo tempo. E as legendas escrevem na tela, em tempo real, o que está sendo dito — ótimo para acompanhar melhor e para incluir quem ouve com dificuldade.

Para deixar tudo realista, a reunião desta aula não nasce do nada: ela é agendada no Google Agenda, com horário marcado, e o convite chega pelo Gmail de cada aluno. Assim o aluno revisa, na prática, o que aprendeu nas semanas anteriores (e-mail e agenda) e vê como essas ferramentas se conectam. No fim, cada um registra no Notion uma pequena "ata" da reunião — o que foi combinado e os links importantes que apareceram no chat.

Esta é a segunda e última aula sobre o Google Meet antes de partirmos para o Notion. O objetivo é confiança: ao final, o aluno deve conseguir entrar numa reunião, mostrar a própria tela sem pânico, conversar pelo chat, pedir a vez e ligar as legendas — tudo sozinho.`,
  materiais: [
    `Computadores (um por aluno) com o navegador Chrome e Gmail, Google Agenda, Google Meet e Notion já abertos em abas separadas`,
    `Conta Google ativa para cada aluno, com login feito antes da aula`,
    `Projetor ou TV conectado ao computador do professor para demonstrar cada recurso do Meet`,
    `Um evento já criado pelo professor no Google Agenda ("Reunião da turma — Aula 6"), com videochamada do Meet e todos os alunos como convidados`,
    `Arquivo de exemplo "Slide para compartilhar — Meu lugar favorito" (Google Apresentações), compartilhado com a turma para o teste de compartilhar tela`,
    `Uma página no Notion chamada "Ata da reunião" (modelo simples com campos "Combinados" e "Links do chat") compartilhada com a turma`,
    `Fones de ouvido (opcional), úteis para evitar microfonia quando vários computadores estão na mesma sala`,
  ],
  conceitosChave: [
    `Compartilhar tela — mostrar para os participantes o que está no seu computador (a tela inteira, uma janela ou uma aba).`,
    `Chat da reunião — caixa de mensagens escritas dentro do Meet, usada para recados e links sem interromper quem fala.`,
    `Levantar a mão — botão que coloca um ícone de mãozinha avisando, de forma educada, que você quer falar.`,
    `Legendas — texto que aparece na tela mostrando, em tempo real, o que está sendo dito na reunião.`,
    `Convidado — pessoa que recebe o convite da reunião pelo Gmail e cujo nome aparece na lista de participantes.`,
    `Silenciar o microfone — desligar o seu áudio para não passar barulho quando você não está falando.`,
    `Ata — registro curto do que foi combinado na reunião, que aqui o aluno escreve no Notion.`,
  ],
  treinamento: `## O que o professor precisa saber

Faça o caminho inteiro uma vez antes da aula. No Google Agenda, crie o evento "Reunião da turma — Aula 6": clique em "Criar" (botão azul no canto superior esquerdo), depois em "Evento", dê um título, escolha o horário e clique em "Adicionar videochamada do Google Meet". Em "Convidados", digite os e-mails dos alunos e salve; o Agenda envia o convite por e-mail automaticamente. Dentro do Meet, conheça a barra inferior: o ícone de seta para cima dentro de um retângulo é "Apresentar agora" (compartilhar tela); o balãozinho é o "Chat"; o ícone de mãozinha é "Levantar a mão"; e em "Mais opções" (os três pontinhos) ficam as "Legendas". Ao compartilhar, o Chrome oferece três opções: "A tela inteira", "Uma janela" e "Uma guia do Chrome" — para mostrar só um slide, "Uma janela" é a mais segura. Teste as legendas: elas aparecem na parte de baixo da tela quando alguém fala.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o Gmail no projetor e mostre o e-mail de convite da reunião que o Agenda enviou. Clique no evento e mostre que dentro dele há o botão "Participar com o Google Meet". Pergunte à turma: "numa reunião online, como você mostra uma coisa que está no seu computador sem mandar foto?". Deixe os alunos chutarem e diga que hoje eles vão descobrir.

Conteúdo novo guiado (15 min): Entre na reunião pelo seu computador. Na barra inferior, clique em "Apresentar agora", escolha "Uma janela", selecione a janela do slide de exemplo e mostre que a turma passa a ver o slide. Pare de apresentar. Abra o "Chat", escreva um recado e um link. Clique em "Levantar a mão" e mostre o ícone aparecendo. Por fim, em "Mais opções" (três pontinhos), ligue as "Legendas" e fale uma frase para a turma ver o texto surgir na tela.

Mão na massa (25 min): Cada aluno abre o convite no Gmail, clica no evento no Agenda e entra na reunião pelo Meet. Lá dentro, todos praticam: silenciar o microfone, escrever no chat, levantar a mão, ligar as legendas e compartilhar a janela do slide de exemplo (um de cada vez, para a sala não travar). Em seguida, cada aluno abre a página "Ata da reunião" no Notion e anota um combinado e um link que apareceu no chat. Circule ajudando quem travar.

Desafio + compartilhar (10 min): Faça uma rodada relâmpago: peça que dois ou três alunos compartilhem a janela do slide e digam uma frase sobre ele, usando o chat para colar um link. A turma confere as legendas funcionando. Encerre revendo, no Notion, uma ata bem-feita.

## Como explicar de forma clara

Use comparações da idade. Diga que "compartilhar a tela é como virar a sua tela para todo mundo da sala ver". Chame o chat de "o WhatsApp da reunião, mas só para aquela conversa". Explique levantar a mão como "pedir a vez na sala de aula, só que com um botão". Diga que as legendas "são como a legenda dos vídeos do YouTube, mas ao vivo". Reforce a etiqueta: microfone desligado quando não estiver falando, e nada de escrever bobagem no chat — ele fica registrado.

## Erros comuns e como ajudar

O erro mais comum é o aluno compartilhar "A tela inteira" e acabar mostrando notificações ou outra aba sem querer. Ensine a escolher "Uma janela" e a fechar o que for particular antes. Outro clássico é esquecer de clicar em "Parar de apresentar" e continuar mostrando a tela sem perceber; mostre o aviso "Você está apresentando" e o botão de parar. Muitos falam todos juntos: por isso a mão levantada existe — peça que usem. Há quem confunda silenciar o microfone com desligar a câmera: aponte que o ícone de microfone corta o som e o de câmera corta a imagem. Se as legendas não aparecerem, confira em "Mais opções" se o idioma está em "Português" e se foram realmente ativadas. E lembre que microfone aberto perto de outro computador causa aquele apito (microfonia) — fones resolvem.`,
  exercicios: [
    {
      titulo: `Do convite até a sala`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Confirme que o evento já está no Agenda de todos e que o convite chegou no Gmail. Demonstre uma vez no projetor o caminho Gmail → evento → "Participar com o Google Meet".`,
      atividade: `Abra o Gmail e encontre o e-mail de convite "Reunião da turma — Aula 6". Clique no evento (ou abra-o no Google Agenda), depois clique em "Participar com o Google Meet" e entre na reunião com a câmera ligada e o microfone silenciado.`,
      gabarito: `O aluno deve localizar o convite no Gmail, abrir o evento e usar o botão "Participar com o Google Meet" para entrar na sala. Ao entrar, aparece na lista de participantes com o nome correto, com a câmera ligada e o microfone silenciado (ícone de microfone com risco). Isso prova que ele ligou e-mail, agenda e Meet em um só fluxo.`,
    },
    {
      titulo: `Mostrando a minha tela`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Combine que apenas um aluno compartilha por vez, para a sala não travar. Reforce a escolha de "Uma janela" em vez de "A tela inteira" e o botão "Parar de apresentar".`,
      atividade: `Com o slide de exemplo aberto, clique em "Apresentar agora" na barra inferior do Meet e escolha "Uma janela". Selecione a janela do slide e confirme com os colegas que eles estão vendo. Depois clique em "Parar de apresentar".`,
      gabarito: `Ao clicar em "Apresentar agora", o Chrome oferece "A tela inteira", "Uma janela" e "Uma guia do Chrome". A escolha correta é "Uma janela" selecionando a janela do slide. Os colegas passam a ver o slide e aparece o aviso "Você está apresentando". Ao final, "Parar de apresentar" encerra o compartilhamento — sinal de que o aluno controla começo e fim.`,
    },
    {
      titulo: `Recado pelo chat e a vez na mão`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Cada dupla treina os dois recursos. Circule conferindo se a mensagem aparece para todos e se o ícone de mão levantada surge ao lado do nome. Tenha um link curto pronto para os alunos copiarem.`,
      atividade: `Em dupla, dentro da reunião: o aluno A abre o "Chat" (ícone de balão), escreve "Oi!" e cola um link indicado pelo professor. O aluno B confirma que recebeu a mensagem e clica em "Levantar a mão". Conferem juntos se o ícone de mãozinha aparece ao lado do nome do aluno B.`,
      gabarito: `A mensagem e o link enviados pelo aluno A devem aparecer no painel de chat de todos os participantes. Ao clicar em "Levantar a mão", surge um ícone de mãozinha ao lado do nome do aluno B na lista de participantes (e um aviso para os demais). A dupla demonstra que sabe se comunicar por escrito e pedir a vez sem interromper quem fala.`,
    },
    {
      titulo: `Ligando as legendas`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre antes onde ficam as legendas: em "Mais opções" (três pontinhos) → "Legendas" → idioma "Português". Avise que pode haver pequenos erros de transcrição, e que isso é normal.`,
      atividade: `Em "Mais opções" (os três pontinhos na barra inferior), ative as "Legendas" e escolha o idioma "Português". Fale uma frase clara, como "Bom dia, turma do Santos Tech", e observe o texto aparecer na parte de baixo da tela. Compare com o que um colega falou.`,
      gabarito: `As legendas devem ser ativadas pelo menu "Mais opções" com o idioma em "Português". Ao falar, o texto correspondente aparece na parte inferior da tela em tempo real. O aluno percebe que a transcrição pode ter pequenos erros e entende que a função serve para acompanhar melhor e para incluir quem ouve com dificuldade.`,
    },
    {
      titulo: `A ata da reunião no Notion`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Tenha a página "Ata da reunião" do Notion compartilhada e aberta na aba de cada aluno. Conduza uma mini-reunião com 2 ou 3 combinados reais (ex.: data do projeto final) para os alunos terem o que registrar. Controle o tempo.`,
      atividade: `Durante uma mini-reunião conduzida pelo professor, use o chat para guardar pelo menos um link e levante a mão para dar uma ideia. Ao final, abra a página "Ata da reunião" no Notion e preencha: em "Combinados", escreva uma coisa que foi decidida; em "Links do chat", cole um link que apareceu na reunião.`,
      gabarito: `Uma ata bem-feita tem, no Notion, ao menos um item real em "Combinados" (algo de fato decidido na reunião, como uma data ou tarefa) e ao menos um endereço válido em "Links do chat" (copiado do chat do Meet). O texto deve estar escrito com clareza e acentuação correta. O resultado esperado é o aluno usando chat, mão levantada e Notion de forma integrada, registrando a reunião como um profissional faria.`,
    },
  ],
};
