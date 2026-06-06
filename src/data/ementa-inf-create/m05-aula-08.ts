import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Compartilhando e apresentando o projeto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Publicar a versão final da planilha na nuvem com o link e as permissões corretas, e apresentar para a turma a mesma planilha agora online, colaborativa e com gráficos.`,
  descricao: `Esta é a aula que fecha o mês inteiro. Durante quatro semanas o aluno pegou aquela planilha que existia no Excel e a trouxe para o Google Planilhas: importou e organizou os dados, criou fórmulas, colaborou ao vivo com a turma, transformou números em gráficos e deixou tudo com a cara dele na aula passada. Agora chegou o momento de tornar esse trabalho público, gerar o link de compartilhamento e apresentar o resultado. O entregável do mês é exatamente isto: a mesma planilha, agora na nuvem.

O coração da aula é o botão "Compartilhar". O aluno vai aprender a diferença entre quem pode "Ver", quem pode "Comentar" e quem pode "Editar", e por que escolher a permissão certa é uma questão de segurança e de organização. Compartilhar com a permissão errada pode significar que alguém apaga seu gráfico sem querer, ou que ninguém consegue abrir o arquivo. Aqui o aluno entende, na prática, que dar acesso é uma decisão consciente, não um clique automático.

Além de gerar o link, cada aluno apresenta a planilha para a turma de três a quatro minutos, projetada na tela grande. É um exercício de comunicação tão importante quanto o exercício técnico: explicar de onde vieram os dados, qual fórmula resolveu um problema e o que o gráfico mostra. Apresentar o próprio trabalho dá orgulho e fixa o aprendizado, porque o aluno precisa colocar em palavras o que fez.

A aula termina com uma comparação direta entre o Excel e o Google Planilhas. O aluno percebe o que mudou: o arquivo não vive mais preso a um computador, ele salva sozinho, várias pessoas podem mexer ao mesmo tempo e qualquer um com o link entra de qualquer lugar. É o fechamento natural de um mês inteiro dedicado a planilhas na nuvem.`,
  materiais: [
    `Computadores com o Google Planilhas aberto no navegador (Chrome), um por aluno`,
    `Conta Google da escola já logada em cada computador (necessária para compartilhar e gerar link)`,
    `Projetor ou TV conectada para as apresentações da turma`,
    `A planilha final de cada aluno, montada na Aula 7, com dados, fórmulas e gráficos prontos`,
    `Planilha de exemplo do professor já compartilhada, para demonstrar as permissões`,
    `Roteiro impresso de apresentação (3 perguntas: de onde vêm os dados, qual fórmula usei, o que o gráfico mostra)`,
    `Folha de comparação Excel x Google Planilhas para o desafio final`,
  ],
  conceitosChave: [
    `Compartilhar — dar a outra pessoa acesso ao seu arquivo na nuvem por meio de um link ou convite por e-mail.`,
    `Permissão — o nível de acesso que você concede: Leitor (só vê), Comentador (vê e comenta) ou Editor (vê e altera).`,
    `Link de compartilhamento — endereço único que abre a planilha; quem tem o link entra conforme a permissão definida.`,
    `Restrito — modo em que só pessoas convidadas pelo e-mail conseguem abrir o arquivo; é a opção mais segura.`,
    `Qualquer pessoa com o link — modo em que basta ter o link para abrir, sem precisar de convite; prático, porém menos seguro.`,
    `Publicar — tornar a planilha visível na nuvem de forma final, pronta para ser apresentada e acessada.`,
    `Versão na nuvem — o arquivo que salva sozinho, abre de qualquer lugar e permite várias pessoas juntas, diferente do arquivo solto no computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula consolida o mês. Não há fórmula nova nem gráfico novo: o foco é publicar e apresentar. Você não precisa ser especialista em Google Planilhas, basta dominar o botão "Compartilhar", que fica no canto superior direito da tela, na cor verde ou azul. Antes da aula, abra sua planilha de exemplo e teste cada permissão: clique em "Compartilhar", veja as opções "Restrito" e "Qualquer pessoa com o link", e os três níveis "Leitor", "Comentador" e "Editor". Tenha o projetor testado e a conta Google da escola logada em todas as máquinas, porque sem login o botão de compartilhar não funciona.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte à turma o que cada um fez nas semanas anteriores. Projete uma planilha qualquer e relembre: dados organizados, uma fórmula como =SOMA(A1:A10) e um gráfico. Diga que hoje o trabalho vai para o ar: "Vocês vão criar o link e mostrar para todo mundo."

15 min — Conteúdo novo guiado. Projete sua planilha de exemplo. Clique no botão "Compartilhar" (canto superior direito). Mostre a janela que abre. Aponte para o campo onde se digita um e-mail e para o link embaixo. Clique em "Restrito" e troque para "Qualquer pessoa com o link". Em seguida, mostre o menu de permissão à direita do link e explique os três níveis: "Leitor" só olha, "Comentador" deixa recados, "Editor" muda tudo. Clique em "Copiar link". Cole numa aba nova para a turma ver que o link realmente abre a planilha. Reforce: para apresentar um trabalho pronto, escolhemos "Qualquer pessoa com o link" como "Leitor", assim ninguém estraga o arquivo.

25 min — Mão na massa. Cada aluno abre a própria planilha final. Passo a passo no quadro: 1) confira se tem dados, fórmula e gráfico; 2) renomeie o arquivo clicando no título no canto superior esquerdo, colocando nome e turma; 3) clique em "Compartilhar"; 4) mude para "Qualquer pessoa com o link"; 5) deixe a permissão como "Leitor"; 6) clique em "Copiar link"; 7) cole o link no documento ou chat combinado da turma. Circule pela sala conferindo cada link. Peça que cada aluno abra o próprio link numa aba anônima para confirmar que abre.

10 min — Desafio e compartilhar. Cada aluno apresenta a planilha projetada por três minutos respondendo: de onde vêm os dados, qual fórmula usou e o que o gráfico mostra. Ao final, conduza a comparação Excel x Google Planilhas: no Excel o arquivo fica num computador só; no Planilhas ele salva sozinho, abre de qualquer lugar e várias pessoas mexem juntas.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da festa: "Compartilhar é como mandar o convite. Você decide quem entra e o que cada um pode fazer na sua casa." O "Leitor" é o convidado que só olha as fotos; o "Comentador" pode deixar um bilhete na geladeira; o "Editor" pode mudar os móveis de lugar. Pergunte: "Você daria a chave da sua casa para qualquer um?" Assim eles entendem por que escolher a permissão certa importa. Para o link, diga que é o endereço da casa: quem tem, sabe chegar.

## Erros comuns e como ajudar

O erro mais frequente é deixar em "Restrito" e mandar o link; aí ninguém abre. Mostre como trocar para "Qualquer pessoa com o link". Outro erro é dar permissão "Editor" para todos, e alguém acaba apagando um gráfico; oriente a usar "Leitor" para apresentação. Alguns esquecem de copiar o link e fecham a janela; basta reabrir "Compartilhar". Há quem não esteja logado na conta da escola, e o botão fica travado; confira o login. Na apresentação, o nervosismo trava: ofereça as três perguntas do roteiro como apoio e elogie cada aluno ao terminar.`,
  exercicios: [
    {
      titulo: `Gerando o link da minha planilha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno clicar no botão "Compartilhar" e trocar de "Restrito" para "Qualquer pessoa com o link". Confira que a permissão ficou em "Leitor" antes de copiar.`,
      atividade: `Abra sua planilha final. Clique no botão "Compartilhar" no canto superior direito. Mude a opção para "Qualquer pessoa com o link", deixe a permissão em "Leitor" e clique em "Copiar link". Cole o link no chat combinado da turma.`,
      gabarito: `O aluno deve ter um link colado no chat que, ao ser aberto, mostra a planilha em modo somente leitura. Caminho correto: Compartilhar, "Qualquer pessoa com o link", "Leitor", "Copiar link". Se o link pede para solicitar acesso, ele ainda está em "Restrito" e precisa ser corrigido.`,
    },
    {
      titulo: `Caça à permissão certa`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Projete três situações e peça que cada aluno escreva qual permissão usar. Discuta cada resposta mostrando o risco da escolha errada (alguém apagar o gráfico, por exemplo).`,
      atividade: `Para cada caso, escolha entre Leitor, Comentador ou Editor: 1) você quer só mostrar a planilha pronta na apresentação; 2) o professor vai deixar sugestões sem mexer nos dados; 3) você e um colega vão montar uma tabela juntos ao mesmo tempo.`,
      gabarito: `1) Leitor — basta visualizar, ninguém deve alterar. 2) Comentador — permite recados sem mudar o conteúdo. 3) Editor — os dois precisam alterar a tabela juntos. Aceite justificativas equivalentes desde que liguem o nível de acesso ao que a pessoa precisa fazer.`,
    },
    {
      titulo: `Conferindo o link em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno envia o próprio link ao colega; o colega tenta abrir e relata se conseguiu e em qual modo. Circule garantindo que os links abram em "somente leitura".`,
      atividade: `Troque o link da sua planilha com o colega da dupla. Abra o link recebido e responda no caderno: a planilha abriu? Em qual modo (vendo, comentando ou editando)? Avise o colega se algo deu errado para ele corrigir.`,
      gabarito: `Cada link deve abrir corretamente no modo "Leitor" (somente leitura, sem barra de edição). Resposta esperada: "Abriu, modo de visualização." Se o colega não conseguir abrir, a permissão estava em "Restrito"; se conseguir editar, estava em "Editor", e ambos os casos devem ser ajustados na hora.`,
    },
    {
      titulo: `Apresentando a minha planilha na nuvem`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Projete a planilha de cada aluno e cronometre cerca de três minutos por apresentação. Ofereça as três perguntas do roteiro como apoio e elogie pontos fortes ao final de cada fala.`,
      atividade: `Apresente sua planilha projetada para a turma respondendo: de onde vêm os dados, qual fórmula você usou e o que o gráfico mostra. Mostre na tela o link que você gerou e diga qual permissão escolheu.`,
      gabarito: `Apresentação completa contém: origem dos dados explicada, ao menos uma fórmula citada (por exemplo =SOMA(A1:A10) ou =MÉDIA(B1:B10)), leitura do gráfico em uma frase e o link aberto em modo "Leitor". Considere bem-sucedida a fala clara que cobre os três pontos, mesmo que curta ou com nervosismo.`,
    },
    {
      titulo: `Excel x Google Planilhas: o que mudou`,
      tipo: `roda de conversa`,
      tempo: `9 minutos`,
      guiaProfessor: `Conduza a conversa em roda. Anote no quadro as diferenças que a turma levantar e complete o que faltar. Feche reforçando o sentido do mês: a mesma planilha, agora na nuvem.`,
      atividade: `Em roda, diga uma diferença que você percebeu entre usar a planilha no Excel e usar no Google Planilhas. Pense em onde o arquivo fica salvo, em quem pode mexer e em como você compartilha o trabalho.`,
      gabarito: `Diferenças esperadas: no Excel o arquivo vive em um computador, no Planilhas vive na nuvem e abre de qualquer lugar; o Planilhas salva sozinho, sem precisar clicar em salvar; várias pessoas editam ao mesmo tempo no Planilhas; o compartilhamento é por link com permissões, em vez de mandar o arquivo anexado. Aceite qualquer dessas observações corretamente explicada.`,
    },
  ],
};
