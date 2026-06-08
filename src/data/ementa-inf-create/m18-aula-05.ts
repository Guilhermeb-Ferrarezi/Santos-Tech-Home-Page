import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Código que Roda Sozinho",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Descobrir os gatilhos (triggers) do Apps Script e configurar o primeiro deles, fazendo o código rodar automaticamente ao abrir a planilha, ao editar uma célula ou em um horário marcado, sem ninguém clicar em nada.`,
  descricao: `Até agora, em todas as aulas anteriores, o aluno escrevia uma função e precisava apertar um botão para ela rodar. Era ele quem dava a ordem de início. Nesta aula isso muda de figura: o aluno descobre que o código pode ganhar vida própria e rodar sozinho, no momento certo, sem ninguém mandar. Essa é a ideia que separa um simples script de uma automação de verdade, e é também o momento mais mágico do mês, quando a turma vê algo acontecer na tela sem ter tocado em nada.

A ferramenta que faz essa mágica se chama gatilho, ou trigger em inglês. Um gatilho é um combinado: o aluno diz ao Apps Script qual função rodar e quando rodar. Existem três tipos que cabem perfeitamente nesta idade. O gatilho ao abrir faz a função rodar toda vez que alguém abre a planilha. O gatilho ao editar dispara a função sempre que alguém altera o conteúdo de uma célula. E o gatilho por tempo, agendado por horário, roda a função em intervalos definidos, por exemplo todo dia às oito da manhã ou a cada hora, mesmo com a planilha fechada e o computador desligado, porque tudo acontece nos servidores do Google, na nuvem.

Nesta aula o aluno conhece dois caminhos para criar gatilhos. O primeiro é o caminho automático, escrevendo funções de nome especial como onOpen e onEdit, que o Google reconhece sozinho e dispara nas horas certas. O segundo é o caminho manual, pelo painel de Gatilhos do editor de Apps Script, representado por um ícone de relógio (despertador), onde o aluno escolhe num formulário a função, o evento e a frequência. Conhecer os dois caminhos dá ao aluno autonomia para automatizar quase qualquer rotina.

Este conteúdo é uma peça central do entregável do mês, a automação na nuvem. Sem gatilhos, qualquer código depende de um clique humano. Com gatilhos, o aluno cria algo que trabalha por ele enquanto faz outra coisa. As próximas aulas vão usar esse poder para enviar e-mails automáticos e montar a automação completa, então é essencial que aqui o conceito fique sólido e que cada aluno veja, com os próprios olhos, a função disparar sem nenhum clique.`,
  materiais: [
    `Computadores com navegador atualizado e acesso ao Google Planilhas e ao editor de Apps Script (menu Extensões, opção Apps Script), um por aluno`,
    `Conta Google ativa para cada aluno, já usada nas aulas anteriores do mês`,
    `Projetor ou TV para o professor demonstrar os menus, o ícone de relógio e o painel de Gatilhos na tela grande`,
    `Planilha de exemplo do mês, com a função simples das aulas anteriores já pronta (arquivo de reserva para quem tiver perdido a sua)`,
    `Folha impressa ou slide com os três tipos de gatilho (ao abrir, ao editar, por tempo) para consulta rápida`,
    `Acesso à internet estável, já que os gatilhos são executados na nuvem do Google`,
  ],
  conceitosChave: [
    `Gatilho (trigger) — combinado que diz ao Apps Script qual função rodar e em que momento, sem precisar de um clique humano.`,
    `Gatilho ao abrir — faz a função rodar automaticamente toda vez que alguém abre a planilha; criado com a função especial onOpen.`,
    `Gatilho ao editar — dispara a função sempre que alguém altera o conteúdo de uma célula; criado com a função especial onEdit.`,
    `Gatilho por tempo — agenda a função para rodar em horários marcados, como todo dia ou a cada hora, mesmo com a planilha fechada.`,
    `Função especial — função com nome reconhecido pelo Google (onOpen, onEdit) que o sistema dispara sozinho, sem configuração manual.`,
    `Autorização (permissão) — janela em que o aluno autoriza o script a agir em nome dele; passo obrigatório para gatilhos por tempo funcionarem.`,
    `Painel de Gatilhos — área do editor de Apps Script, no ícone de relógio (despertador) à esquerda, onde se criam e gerenciam os gatilhos manualmente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para conduzir esta aula. Precisa entender uma única ideia: um gatilho é um combinado entre o aluno e o Google sobre QUANDO uma função vai rodar. Existem dois jeitos de criar gatilhos. O jeito automático usa funções de nome mágico: se você criar uma função chamada exatamente onOpen, o Google a executa toda vez que a planilha abre; se criar uma chamada onEdit, ele a executa toda vez que alguém muda uma célula. Esses nomes precisam ser escritos exatamente assim, com o O maiúsculo no meio. O jeito manual é pelo painel de Gatilhos, no ícone de relógio (despertador) à esquerda do editor, onde você preenche um formulário escolhendo a função, o evento e a frequência. O gatilho por tempo, que roda por horário, só existe pelo caminho manual. Faça o exercício em casa uma vez: leva dez minutos e tira todo o medo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, abra a planilha de exemplo e rode a função das aulas anteriores pelo botão, como sempre. Pergunte à turma: e se a gente não quisesse mais clicar? E se o código rodasse sozinho? Deixe a pergunta no ar e diga que hoje vamos resolver isso.

Conteúdo novo guiado (15 min): demonstre na tela grande. Abra o editor pelo menu Extensões, opção Apps Script. Escreva uma função chamada onOpen que mostra um aviso, por exemplo function onOpen() { SpreadsheetApp.getUi().alert('Bom dia!'); }. Salve com o ícone de disquete ou Ctrl mais S. Volte à planilha, recarregue a página (tecla F5) e veja o aviso aparecer sozinho ao abrir. Em seguida, mostre o painel de Gatilhos: clique no ícone de relógio à esquerda, depois no botão Adicionar gatilho no canto inferior direito. No formulário, escolha a função, em tipo de evento selecione Baseado em tempo, depois um temporizador por minutos, e salve. Avise que vai aparecer a janela de autorização: clique na conta, em Avançado e em Permitir. Esse passo é normal e seguro.

Mão na massa (25 min): cada aluno cria sua própria função onOpen com uma mensagem pessoal, salva, recarrega a planilha e confirma que o aviso aparece sozinho. Depois cria uma função onEdit simples, por exemplo que pinta a célula editada, e testa digitando em uma célula. Por fim, quem terminar abre o painel de Gatilhos e cria um gatilho por tempo apontando para uma função sua. Circule pela sala conferindo os nomes das funções e ajudando na tela de autorização.

Desafio e compartilhar (10 min): proponha combinar dois gatilhos no mesmo projeto (um ao abrir e um ao editar). Dois ou três alunos mostram a tela disparando a automação sem clicar, e a turma comemora junto.

## Como explicar de forma clara

Use a comparação do despertador. Um gatilho é como um alarme: você não fica acordado a noite toda esperando a hora; você programa e ele toca sozinho. O onOpen é o alarme que toca quando você entra na sala; o onEdit é o sensor que acende a luz quando você mexe em algo; o gatilho por tempo é o despertador da manhã, que toca mesmo com você dormindo. Reforce que rodar na nuvem significa que o Google faz o trabalho nos computadores dele, então funciona mesmo com a planilha fechada. Diga que eles agora têm um robô que trabalha sozinho.

## Erros comuns e como ajudar

O erro mais comum é digitar o nome da função errado, como onopen ou OnOpen; mostre que precisa ser exatamente onOpen e onEdit. Outro é esquecer de salvar antes de testar; lembre do Ctrl mais S. Muitos não recarregam a planilha e acham que onOpen não funcionou; peça para apertar F5. Na tela de autorização, alguns travam ao ver o aviso de não verificado; explique que é só clicar em Avançado e Permitir, pois o projeto é deles mesmos. Por fim, há quem crie vários gatilhos repetidos por engano; mostre o painel de relógio para apagar os extras no ícone de três pontos.`,
  exercicios: [
    {
      titulo: `Meu primeiro onOpen`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno escreva o nome onOpen exatamente assim e salve antes de testar. Mostre que recarregar a planilha com F5 é o que dispara o gatilho ao abrir.`,
      atividade: `No editor de Apps Script, crie uma função chamada onOpen que mostra um aviso com uma mensagem sua, salve com Ctrl mais S, volte à planilha e recarregue a página para ver o aviso aparecer sozinho.`,
      gabarito: `O aluno tem uma função onOpen escrita corretamente, salva o projeto e, ao recarregar a planilha, vê o aviso surgir automaticamente sem clicar em nenhum botão. Ele consegue explicar que o gatilho ao abrir disparou a função por conta própria.`,
    },
    {
      titulo: `A célula que reage`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Explique que onEdit roda a cada alteração de célula. Use um exemplo simples, como pintar a célula editada, e peça que testem digitando em vários lugares da planilha.`,
      atividade: `Crie uma função chamada onEdit que reaja a uma edição, por exemplo pintando de amarelo a célula que acabou de ser alterada. Salve e teste digitando em diferentes células da planilha.`,
      gabarito: `O aluno escreve uma função onEdit válida, salva e, ao digitar em qualquer célula, vê a reação acontecer na hora, como a célula ficando amarela. Ele percebe que não precisou rodar nada manualmente, pois o próprio ato de editar acionou o código.`,
    },
    {
      titulo: `O despertador do código`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Este é o gatilho por tempo, criado só pelo painel de relógio. Acompanhe a tela de autorização, orientando a clicar em Avançado e Permitir, que costuma assustar quem é iniciante.`,
      atividade: `Abra o painel de Gatilhos pelo ícone de relógio, clique em Adicionar gatilho, escolha uma função sua, selecione o tipo Baseado em tempo com um temporizador por minutos e salve. Autorize o projeto quando a janela pedir.`,
      gabarito: `O aluno cria um gatilho por tempo apontando para uma função sua, passa pela autorização clicando em Avançado e Permitir, e o gatilho aparece listado no painel com a frequência escolhida. Ele explica que esse gatilho roda na nuvem mesmo com a planilha fechada.`,
    },
    {
      titulo: `Caça ao gatilho quebrado`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que cada aluno olhe o projeto do colega procurando o motivo de um gatilho não disparar. Os erros típicos são nome errado, falta de salvar ou planilha não recarregada.`,
      atividade: `Em dupla, troquem de computador e verifiquem por que o gatilho do colega pode não estar funcionando. Confiram o nome exato da função, se o projeto foi salvo e se a planilha foi recarregada, e corrijam o que estiver errado.`,
      gabarito: `Cada dupla encontra pelo menos uma causa do problema, como onopen em vez de onOpen, projeto não salvo ou página não recarregada, e aplica a correção. Ao final, o gatilho do colega passa a disparar corretamente e ambos sabem nomear o erro que havia.`,
    },
    {
      titulo: `Minha automação que acorda sozinha`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Esta é a junção de tudo e alimenta o entregável do mês. Peça que o aluno revise os nomes das funções, salve, autorize o gatilho por tempo e teste cada gatilho antes de chamar você para ver.`,
      atividade: `Monte um projeto com dois gatilhos funcionando ao mesmo tempo: um onOpen que dá boas-vindas ao abrir e um onEdit que reage a uma alteração. Como extra, crie um gatilho por tempo no painel de relógio. Teste os três e explique quando cada um dispara.`,
      gabarito: `O projeto tem um onOpen que mostra a mensagem ao recarregar a planilha, um onEdit que reage ao editar uma célula e, no painel de relógio, um gatilho por tempo autorizado. O aluno demonstra cada disparo sem clicar em botão e explica com clareza o momento em que cada gatilho entra em ação.`,
    },
  ],
};
