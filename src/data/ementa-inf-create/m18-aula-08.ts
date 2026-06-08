import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Lançando e Apresentando o Robô",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, testar e corrigir a automação na nuvem — garantindo que o gatilho dispara e o e-mail chega certo — e apresentar o entregável do mês explicando como o código funciona e qual problema ele resolve.`,
  descricao: `Esta é a última aula do mês e tem clima de lançamento. Durante quatro semanas a turma escreveu seu primeiro código de verdade no Apps Script: aprendeu variáveis, decisões e repetições, conversou com a planilha, leu e transformou dados, programou o código para rodar sozinho com gatilhos e fez o robô enviar e-mails automáticos. Hoje todas essas peças viram um produto que funciona de ponta a ponta, e cada aluno coloca o seu robô no ar.

O coração da aula é testar e corrigir. Programar não é acertar de primeira: é rodar, ver o que quebrou, ler a mensagem de erro e ajustar. O aluno vai abrir o editor do Apps Script (no menu Extensões, opção Apps Script), conferir se o gatilho está configurado, executar a função na mão para ver o resultado na hora e confirmar que o e-mail realmente chega na caixa de entrada. Quando algo falhar, ele vai usar o registro de execuções para descobrir onde está o problema, como um detetive lendo pistas.

Depois de funcionar, vem a parte que dá orgulho: apresentar. Cada aluno mostra o seu entregável do mês — uma automação na nuvem — explicando em poucas frases o que o robô faz, qual problema chato ele resolve e como o código toma as decisões. Aprender a explicar o próprio código em voz alta é uma habilidade tão importante quanto escrevê-lo, porque programador de verdade também precisa contar o que construiu.

O encerramento celebra o mês inteiro. A turma revê a jornada — do primeiro Logger.log até um robô completo que roda sozinho na nuvem e manda e-mail — e reconhece que cada aluno saiu da aula sabendo programar uma automação real. É a prova concreta de que eles já escrevem código que resolve problemas do mundo de verdade.`,
  materiais: [
    `Computadores com Google Planilhas e o editor do Apps Script abertos (menu Extensões > Apps Script), um por aluno`,
    `Contas Google ativas e já autorizadas para o Apps Script enviar e-mail (autorização feita nas aulas anteriores)`,
    `Projetor ou tela grande para o professor demonstrar os testes e para os alunos apresentarem o robô`,
    `Planilha de exemplo do mês com o script da automação (gatilho + envio de e-mail) já montado nas aulas anteriores`,
    `Lista de checagem do lançamento, impressa ou projetada (função roda sem erro, gatilho ativo, e-mail chega)`,
    `Conexão estável com a internet (necessária para executar o script na nuvem e enviar os e-mails)`,
    `Roteiro curto de apresentação para o aluno (o que o robô faz, qual problema resolve, como o código decide)`,
  ],
  conceitosChave: [
    `Teste — executar o código de propósito para ver se ele funciona como esperado antes de confiar nele.`,
    `Depuração — processo de encontrar e corrigir erros no código, lendo as mensagens e descobrindo o que deu errado.`,
    `Registro de execuções — histórico que o Apps Script guarda de cada vez que o código rodou, mostrando sucesso, erro e a hora.`,
    `Gatilho — agendamento que faz a função rodar sozinha, sem alguém clicar, em um horário ou evento definido.`,
    `Mensagem de erro — aviso vermelho que o editor mostra quando o código quebra, indicando a linha e o motivo do problema.`,
    `Entregável — produto final do mês que o aluno conclui e apresenta; aqui, uma automação na nuvem que funciona de verdade.`,
    `Apresentação — momento de explicar em voz alta o que o código faz, qual problema resolve e como ele toma as decisões.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não ensina ferramenta nova: você ajuda cada aluno a finalizar, testar e mostrar o robô que vem construindo no mês. Chegue antes e rode a automação inteira na sua máquina para não hesitar na frente da turma. O caminho é sempre o mesmo: na planilha, abra o menu Extensões e clique em Apps Script para entrar no editor. Lá dentro, há três coisas que você precisa saber checar. Primeiro, executar uma função na mão: escolha o nome da função na caixa de seleção do topo e clique em Executar (o botão com o ícone de seta). Segundo, ler o registro: logo abaixo do editor abre o painel "Registro de execução", e no menu lateral o ícone de relógio (Acionadores) e o ícone de lista (Execuções) mostram o histórico. Terceiro, conferir o gatilho: clique no ícone do relógio (Acionadores) na barra lateral esquerda para ver se o acionamento está ativo. Teste também enviar o e-mail e confirme que ele chega na caixa de entrada (olhe o spam, por garantia).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Projete a tela e comemore: "Hoje vocês colocam o robô no ar!" Pergunte o que pode dar errado quando um código roda sozinho. Relembre rápido o gatilho e o envio de e-mail feitos nas aulas anteriores, abrindo o editor pelo menu Extensões > Apps Script no projetor.

Conteúdo novo guiado (15 min). Mostre o ciclo de testar e corrigir na tela. Escolha a função principal na caixa de seleção do topo e clique em Executar. Abra o painel do registro embaixo e leia a mensagem (sucesso ou erro). Provoque um erro de propósito (por exemplo, escreva errado o nome de uma célula), execute de novo e mostre como a mensagem vermelha aponta a linha. Corrija ao vivo. Por fim, clique no ícone de relógio (Acionadores) e confirme que o gatilho está ativo.

Mão na massa (25 min). Cada aluno finaliza o próprio robô seguindo a lista de checagem: 1) a função roda sem erro ao clicar em Executar; 2) o gatilho aparece ativo no painel de Acionadores; 3) o e-mail chega de verdade na caixa de entrada. Circule pela sala ajudando quem travar, leia as mensagens de erro junto com o aluno e confira cada item da lista.

Desafio e compartilhar (10 min). Alguns alunos vêm à frente e apresentam o robô em um minuto: o que ele faz, qual problema resolve e como o código decide. Faça a viagem pelas conquistas do mês e reconheça que todos saíram sabendo programar uma automação real.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que testar o código é como provar a comida antes de servir: você experimenta primeiro para ter certeza de que ficou bom. A mensagem de erro não é uma bronca, é um mapa: ela diz a linha exata onde está o problema, como uma seta apontando o tesouro. Depurar é ser detetive: você segue as pistas do registro de execuções até achar o culpado. O gatilho é o despertador do robô: mesmo sem ninguém por perto, na hora marcada ele acorda e faz o trabalho. E apresentar é contar a história do seu robô, igual a mostrar um projeto da feira de ciências.

## Erros comuns e como ajudar

O erro mais comum é o aluno entrar em pânico ao ver a mensagem vermelha; tranquilize dizendo que erro é parte de programar e ensine a ler a linha indicada. Outro tropeço é esquecer de salvar antes de executar: lembre o atalho Ctrl + S, porque o código rodado é sempre o último salvo. Muitos confundem "não rodou" com "rodou mas não fez nada"; peça para abrir o registro de execuções e checar se aparece sucesso ou erro. No e-mail, alguns acham que não chegou quando na verdade caiu no spam; oriente a procurar lá. Há quem desative o gatilho sem querer ou tenha o gatilho sem confirmar a autorização; mostre o ícone de relógio (Acionadores) para conferir se está ativo. Por fim, alguns travam na hora de apresentar; ofereça o roteiro de três frases (o que faz, que problema resolve, como decide) para destravar a fala.`,
  exercicios: [
    {
      titulo: `Apertar o play: rodar a função`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como abrir o editor pelo menu Extensões > Apps Script, escolher o nome da função na caixa de seleção do topo e clicar em Executar. Lembre de salvar antes com Ctrl + S. Peça que todos abram o painel do registro embaixo para ver o resultado.`,
      atividade: `Abra o editor do Apps Script (menu Extensões > Apps Script). Salve com Ctrl + S, escolha a sua função principal na caixa de seleção do topo e clique em Executar. Olhe o painel de registro embaixo e anote: rodou com sucesso ou apareceu um erro?`,
      gabarito: `O aluno abre o editor pelo menu Extensões > Apps Script, salva o código, seleciona a função correta e clica em Executar. No painel de registro aparece "Execução concluída" (sucesso) ou uma mensagem de erro; o aluno relata corretamente qual dos dois ocorreu. Se houver erro, ele identifica que precisa corrigir.`,
    },
    {
      titulo: `Detetive de erros`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre como o editor mostra a mensagem vermelha com a linha do erro e como abrir o ícone de lista (Execuções) na barra lateral para ver o histórico. Peça que os alunos provoquem um erro pequeno de propósito, leiam a pista e depois corrijam.`,
      atividade: `No seu código, troque de propósito o nome de uma célula ou variável por um errado e clique em Executar para ver o erro. Leia a mensagem vermelha e descubra em qual linha está o problema. Depois desfaça a alteração (Ctrl + Z), salve e rode de novo até funcionar.`,
      gabarito: `O aluno provoca um erro, executa e lê a mensagem vermelha, identificando corretamente a linha apontada como a do problema. Em seguida corrige o código (desfazendo ou ajustando), salva e executa novamente, e a função volta a rodar com sucesso, comprovando que ele soube ler a pista e depurar.`,
    },
    {
      titulo: `O e-mail chegou mesmo?`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como executar a função que envia o e-mail e depois abrir o Gmail em outra aba para conferir a chegada. Reforce que, se não estiver na caixa de entrada, é preciso olhar a pasta de spam. Lembre que o destinatário pode ser o próprio e-mail do aluno para o teste.`,
      atividade: `Execute a função que envia o e-mail do seu robô. Abra o Gmail em outra aba e confira se a mensagem chegou na caixa de entrada. Se não estiver lá, procure na pasta de spam. Confirme que o assunto e o texto do e-mail estão como você programou.`,
      gabarito: `O aluno executa a função de envio sem erro, abre o Gmail e localiza o e-mail enviado pelo robô (na caixa de entrada ou no spam). Ele confirma que o assunto e o conteúdo correspondem ao que foi programado no código, provando que o envio automático funciona de ponta a ponta.`,
    },
    {
      titulo: `Lançamento conferido em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno conduz o lançamento do próprio robô enquanto o outro confere a lista de checagem em voz alta; depois trocam de papel. Use a lista projetada (função roda sem erro, gatilho ativo, e-mail chega) e confira cada item com a dupla.`,
      atividade: `Em dupla, confiram o lançamento do robô de cada um pela lista de checagem: 1) a função roda sem erro ao clicar em Executar; 2) o gatilho aparece ativo no ícone de relógio (Acionadores); 3) o e-mail chega na caixa de entrada. Marquem cada item só depois de confirmarem juntos e depois troquem os papéis.`,
      gabarito: `A dupla verifica os três itens na ordem e só marca cada um após confirmar junto: a função executa sem erro, o gatilho aparece ativo no painel de Acionadores e o e-mail chega de verdade. Os dois robôs passam pela lista completa; ao trocar de papel, o segundo aluno também conduz e conclui a checagem do seu robô.`,
    },
    {
      titulo: `Vitrine do robô`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `15 minutos`,
      guiaProfessor: `Conduza as apresentações no projetor, com cerca de um minuto por aluno que se voluntariar. Ofereça o roteiro de três frases para quem travar. Depois reúna a turma em roda para a viagem pelas conquistas do mês, valorizando cada aluno pelo nome.`,
      atividade: `Apresente para a turma o seu robô: explique em um minuto o que ele faz, qual problema chato ele resolve e como o código toma uma decisão (por exemplo, quando ele decide enviar o e-mail). Na roda de conversa, conte uma coisa que você aprendeu neste mês de programação que mais gostou.`,
      gabarito: `O aluno apresenta a automação concluída, dizendo com palavras próprias o que o robô faz, qual problema ele resolve e como o código decide algo (por exemplo, uma condição com SE que dispara o e-mail). Na roda, cita um aprendizado real do mês — como variáveis, gatilhos, ler a planilha ou enviar e-mail. Qualquer reflexão coerente e respeitosa é válida.`,
    },
  ],
};
