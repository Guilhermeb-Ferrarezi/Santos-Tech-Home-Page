import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Lembretes e convites que funcionam",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Configurar notificações e lembretes automáticos no Google Agenda, criar eventos recorrentes e convidar participantes por e-mail, montando a agenda real de estudos e atividades da semana integrada ao Gmail.`,
  descricao: `Nesta aula o aluno dá um salto importante: sai de "marcar um evento" e passa a "fazer a agenda trabalhar por ele". A grande ideia é que um compromisso só ajuda de verdade quando avisa a tempo. Por isso o foco são as notificações e os lembretes automáticos — aqueles avisos que aparecem na tela ou chegam por e-mail dez minutos antes da aula de inglês, do treino ou da prova. Quando o aluno entende que pode escolher quando e como ser avisado, a agenda deixa de ser um calendário enfeitado e vira um assistente pessoal.

O segundo conceito central é o evento recorrente. Muita coisa na vida de um adolescente se repete: aula de matemática toda segunda, treino de futebol às terças e quintas, reunião da família no domingo. Em vez de digitar o mesmo evento dezenas de vezes, o aluno aprende a criar um evento que se repete sozinho, todo dia, toda semana ou em dias específicos. É um daqueles momentos em que a tecnologia economiza tempo de forma visível, e isso costuma encantar a turma.

O terceiro pilar é o convite de participantes. Aqui a Agenda conversa diretamente com o Gmail: ao adicionar o e-mail de um colega ou familiar a um evento, a pessoa recebe um convite na caixa de entrada e pode responder "Sim", "Não" ou "Talvez". O aluno percebe que a comunicação e a organização que ele estudou na semana anterior agora se encaixam: o e-mail leva o convite, e a agenda guarda a resposta. É comunicação e organização caminhando juntas.

Ao final da hora, cada aluno terá uma agenda real da própria semana, com pelo menos um evento recorrente, lembretes configurados em mais de um formato e um convite enviado de verdade para um colega da turma. A aula é prática do começo ao fim: o aluno não anota sobre a agenda, ele constrói a agenda dele.`,
  materiais: [
    `Computadores (um por aluno) com navegador Chrome e o Google Agenda aberto em agenda.google.com`,
    `Conta Google ativa para cada aluno, com login feito antes da aula e Gmail acessível na mesma conta`,
    `Projetor ou tela grande para o professor demonstrar a Agenda e a chegada do convite no Gmail`,
    `Lista impressa com os e-mails da turma (ou no quadro) para que os alunos consigam convidar uns aos outros`,
    `Arquivo de exemplo "Minha-Semana-Modelo" com uma rotina simples (aulas, treino e estudo) para servir de referência`,
    `Conexão de internet estável, já que a Agenda e o Gmail salvam tudo na nuvem em tempo real`,
    `Cronômetro ou relógio visível para respeitar o ritmo de 10/15/25/10 minutos`,
  ],
  conceitosChave: [
    `Notificação — aviso que a Agenda mostra na tela do computador ou do celular quando um evento está chegando.`,
    `Lembrete por e-mail — aviso do evento enviado para a caixa de entrada do Gmail, útil quando a pessoa não está com a Agenda aberta.`,
    `Evento recorrente — compromisso que se repete sozinho em uma frequência escolhida (diária, semanal ou em dias específicos).`,
    `Recorrência — a regra que define como o evento se repete, por exemplo "toda segunda e quarta" ou "todo dia útil".`,
    `Participante — pessoa convidada para um evento pelo e-mail; ela recebe o convite e pode responder na própria caixa de entrada.`,
    `Convite — mensagem que sai da Agenda e chega ao Gmail do convidado, com os botões "Sim", "Não" e "Talvez".`,
    `RSVP — a resposta do convidado ("Sim", "Não" ou "Talvez") que volta para a Agenda de quem organizou o evento.`,
  ],
  treinamento: `## O que o professor precisa saber

Tudo nesta aula acontece dentro de um único lugar: a janela de criação de evento do Google Agenda. Para abri-la, clique em qualquer espaço vazio do calendário ou no botão "Criar" no canto superior esquerdo e escolha "Evento". Na versão completa, clique em "Mais opções" para ver todos os campos. É nessa tela cheia que ficam três controles que você vai ensinar: a recorrência (um menu logo abaixo da data e hora, que começa em "Não se repete"), as notificações (campo "Notificação", com um menu de tempo e a opção de trocar entre "Notificação" e "E-mail") e os convidados (campo "Convidados" ou "Adicionar convidados", à direita).

Memorize esta sequência, pois é o coração da aula: definir o evento, escolher a recorrência, ajustar os lembretes e, por fim, adicionar convidados. Se você dominar esses quatro passos, conduz a turma com segurança mesmo sendo iniciante. Sempre que adicionar um convidado e clicar em "Salvar", a Agenda pergunta "Deseja enviar e-mails de convite?" — responda "Enviar" para que o convite realmente chegue ao Gmail do colega.

## Passo a passo da aula

1. Aquecimento e revisão (10 min). Projete a Agenda da semana já com alguns eventos da aula anterior. Pergunte: "Quem já esqueceu um compromisso mesmo tendo marcado?". Conduza para a ideia de que o evento precisa avisar. Mostre rápido onde fica o relógio da semana e relembre como criar um evento simples.

2. Conteúdo novo guiado (15 min). No projetor, crie um evento "Estudar para a prova", clique em "Mais opções". Abra o menu de recorrência e escolha "Semanalmente". No campo "Notificação", deixe "10 minutos antes"; clique em "Adicionar notificação", troque o tipo para "E-mail" e ponha "1 dia antes". No campo "Convidados", digite o e-mail de um aluno e clique em "Salvar" e depois "Enviar". Abra o Gmail no projetor e mostre o convite chegando, com os botões "Sim", "Não" e "Talvez".

3. Mão na massa (25 min). Cada aluno monta a própria semana real: pelo menos um evento recorrente (uma aula ou um treino), dois eventos com lembretes diferentes (um por notificação na tela, um por e-mail) e um convite enviado a um colega da turma. Circule pela sala conferindo se clicaram em "Enviar" e se a recorrência ficou correta.

4. Desafio e compartilhar (10 min). Cada aluno abre o Gmail, aceita o convite que recebeu do colega clicando em "Sim" e confere se o evento entrou na própria Agenda. Feche perguntando quem montou a semana mais organizada e por quê.

## Como explicar de forma clara

Use a imagem de um "assistente pessoal invisível". Diga: "A notificação é o seu assistente cutucando seu ombro dez minutos antes; o e-mail é ele deixando um bilhete na sua mesa". Para recorrência, compare com a TV: "Você não liga a série episódio por episódio na mão, você deixa programado". Para convites, use a festa: "Convidar pelo e-mail é como entregar o convite em mãos — a pessoa responde se vai ou não, e você já sabe quem confirmou". Repita a frase-guia: "Compromisso bom é o que avisa na hora certa".

## Erros comuns e como ajudar

O erro mais frequente é o aluno fechar o evento sem clicar em "Enviar", então o convite nunca chega; ensine a confirmar sempre na caixa "Enviar e-mails de convite". Outro é confundir "Notificação" com "E-mail" e achar que não funcionou porque nada apareceu na tela — mostre que o lembrete por e-mail vai para o Gmail, não para a área de trabalho. Muitos escolhem recorrência errada, marcando "Diariamente" para algo que é só de segunda; mostre a opção "Personalizar" para escolher os dias exatos. Há quem digite o e-mail do colega com um erro de letra: o convite volta como "não entregue", então peça para conferir com a lista da turma. Por fim, alguns criam dez notificações iguais; explique que duas bem escolhidas valem mais que dez repetidas.`,
  exercicios: [
    {
      titulo: `Meu primeiro lembrete na tela`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno está logado na própria conta e com a Agenda aberta. Demonstre uma vez no projetor onde fica o campo "Notificação". Reforce que o aviso só aparece se a Agenda estiver aberta ou no celular.`,
      atividade: `Crie um evento chamado "Lição de casa" para hoje, no fim da tarde. Clique em "Mais opções". No campo "Notificação", deixe o tipo "Notificação" e escolha "30 minutos antes". Clique em "Salvar". Abra o evento de novo e confira se o lembrete aparece listado.`,
      gabarito: `O evento "Lição de casa" aparece no calendário de hoje e, ao abri-lo, mostra uma notificação configurada para "30 minutos antes". Se o aluno não encontrar o lembrete, ele provavelmente salvou sem ajustar o campo "Notificação" ou usou a versão rápida sem "Mais opções".`,
    },
    {
      titulo: `Dois avisos, dois formatos`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o aluno aprende a diferença entre notificação na tela e lembrete por e-mail. Mostre o botão "Adicionar notificação" e como trocar o tipo no menu de cada linha. Avise que o e-mail chega no Gmail.`,
      atividade: `Crie um evento "Prova de matemática" para esta semana. Em "Notificação", deixe a primeira como "Notificação", "10 minutos antes". Clique em "Adicionar notificação", troque o tipo para "E-mail" e escolha "1 dia antes". Salve. Depois abra o Gmail e veja se o lembrete por e-mail aparece quando chegar a hora.`,
      gabarito: `O evento tem dois lembretes diferentes: um do tipo "Notificação" (10 minutos antes) e um do tipo "E-mail" (1 dia antes). No painel do evento as duas linhas aparecem com tipos distintos. Se as duas estiverem como "Notificação", o aluno esqueceu de trocar o tipo da segunda para "E-mail".`,
    },
    {
      titulo: `Aula que se repete sozinha`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Foco na recorrência. Ensine a abrir o menu "Não se repete" e a usar "Personalizar" para escolher dias específicos. Confira no calendário se o evento realmente se multiplicou nas semanas seguintes.`,
      atividade: `Crie um evento "Aula de inglês" e abra "Mais opções". No menu de recorrência (que começa em "Não se repete"), escolha "Personalizar" e marque "segunda" e "quarta", repetindo semanalmente. Salve. Avance algumas semanas no calendário e confirme que a aula aparece sempre nas segundas e quartas.`,
      gabarito: `O evento "Aula de inglês" aparece repetido em todas as segundas e quartas das próximas semanas, sem o aluno digitar de novo. Ao abrir um deles, aparece a indicação de evento recorrente. Se a aula aparecer todos os dias, o aluno escolheu "Diariamente" em vez de personalizar os dias.`,
    },
    {
      titulo: `Convite que chega na caixa de entrada`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Atividade que conecta Agenda e Gmail. Tenha a lista de e-mails da turma à mão. Lembre os alunos de clicar em "Enviar" quando a Agenda perguntar. Peça que confiram a digitação do e-mail do colega.`,
      atividade: `Em dupla, cada um cria um evento "Estudar juntos" para esta semana. No campo "Convidados", digite o e-mail do colega da dupla e salve, clicando em "Enviar" quando perguntar. Agora abra o Gmail e localize o convite que o colega enviou para você. Confira o horário e quem é o organizador.`,
      gabarito: `Cada aluno recebe no Gmail um convite do colega, com o nome do evento "Estudar juntos", o horário e os botões "Sim", "Não" e "Talvez". Na Agenda do organizador, o convidado aparece listado no evento. Se o convite não chegou, normalmente o e-mail foi digitado errado ou o aluno não clicou em "Enviar".`,
    },
    {
      titulo: `Minha semana de verdade, organizada`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Fechamento integrador. O aluno monta a própria semana real juntando tudo: recorrência, lembretes nos dois formatos e ao menos um convite. Avalie se a agenda reflete a rotina verdadeira e se ele respondeu ao convite recebido pelo Gmail.`,
      atividade: `Monte sua semana real na Agenda com, no mínimo: um evento recorrente (uma aula ou treino que se repete), um evento com lembrete por notificação, um evento com lembrete por e-mail e um convite enviado a um colega. Por fim, abra o Gmail, encontre o convite que você recebeu e responda "Sim". Apresente sua semana para a dupla.`,
      gabarito: `A Agenda do aluno mostra a rotina real da semana com: pelo menos um evento recorrente repetindo nos dias certos, dois lembretes em formatos diferentes (um na tela e um por e-mail) e um convite enviado a um colega. No Gmail, o convite recebido aparece respondido como "Sim", e esse evento entra na Agenda do aluno. A semana fica completa, com avisos e participantes funcionando de verdade.`,
    },
  ],
};
