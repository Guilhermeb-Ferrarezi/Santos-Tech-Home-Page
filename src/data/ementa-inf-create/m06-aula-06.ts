import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Coletando e organizando respostas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Explorar a aba Respostas do Google Forms para ler resultados com gráficos automáticos, ativar notificações por e-mail e controlar a coleta abrindo, fechando e limpando respostas de teste.`,
  descricao: `Depois de criar e compartilhar um formulário, chega a parte mais interessante: descobrir o que as pessoas responderam. O Google Forms reúne tudo automaticamente na aba "Respostas", que fica no topo do editor, ao lado da aba "Perguntas". Não é preciso somar nada na mão nem montar gráfico: o próprio Forms conta os votos, calcula porcentagens e desenha gráficos coloridos sozinho. Nesta aula o aluno aprende a ler essa aba como quem lê um placar.

A aba Respostas tem três modos de visualização: "Resumo", "Pergunta" e "Individual". O Resumo mostra o panorama geral, com um gráfico para cada pergunta. O modo Pergunta permite olhar uma pergunta de cada vez e navegar entre elas. O modo Individual mostra uma resposta inteira por vez, como se fosse folhear as fichas preenchidas, uma a uma. Saber alternar entre esses três modos é a habilidade central do dia.

Além de ler, o aluno aprende a controlar a coleta. Existe um botão para abrir e fechar o formulário: quando ele está fechado, ninguém mais consegue responder e quem tenta vê um aviso. Isso é útil quando o prazo acabou. O aluno também ativa as notificações por e-mail, para receber um aviso na caixa de entrada sempre que alguém responder, sem precisar ficar checando.

Por fim, como durante as aulas todo mundo testa o próprio formulário várias vezes, a planilha enche de respostas de mentira. Por isso o aluno aprende a limpar as respostas de teste com segurança, deixando o formulário pronto para a coleta de verdade. É um cuidado de organização que separa o ensaio do resultado final.`,
  materiais: [
    `Computadores com acesso à internet e ao Google Forms, um por aluno, já conectados em uma conta Google`,
    `Projetor ou TV para o professor mostrar a aba Respostas passo a passo`,
    `Um formulário de exemplo já com algumas respostas (use o formulário que cada aluno criou nas aulas anteriores)`,
    `Conta Google de cada aluno (a mesma usada para criar o formulário)`,
    `Acesso ao Gmail de cada aluno, para conferir as notificações por e-mail`,
    `Folha impressa ou slide com o roteiro dos três modos de visualização (Resumo, Pergunta, Individual)`,
    `Celular ou segundo aparelho do professor para enviar respostas de demonstração ao vivo`,
  ],
  conceitosChave: [
    `Aba Respostas — área no topo do editor do Google Forms onde aparecem todos os resultados coletados.`,
    `Resumo — modo de visualização que mostra um panorama geral com gráficos automáticos de cada pergunta.`,
    `Pergunta (modo) — visualização que exibe uma pergunta por vez, com as respostas agrupadas, e permite navegar entre elas.`,
    `Individual (modo) — visualização que mostra uma resposta completa por vez, como folhear fichas preenchidas.`,
    `Notificação por e-mail — aviso automático enviado ao Gmail do dono sempre que o formulário recebe uma nova resposta.`,
    `Aceitar respostas — interruptor que abre ou fecha o formulário, liberando ou bloqueando novos envios.`,
    `Limpar respostas — ação que apaga de vez todas as respostas coletadas, usada para remover testes antes da coleta real.`,
  ],
  treinamento: `## O que o professor precisa saber

A aba "Respostas" fica no topo do editor do formulário, ao lado da aba "Perguntas". O número entre parênteses ao lado da palavra "Respostas" indica quantas respostas já chegaram. Dentro dela há três botões de modo: "Resumo", "Pergunta" e "Individual". O Resumo traz gráficos automáticos (pizza para múltipla escolha, barras para outros tipos e listas para texto). O modo Pergunta mostra uma pergunta por vez com setas para avançar. O Individual mostra uma resposta inteira por vez, também com setas.

No topo direito da aba existe um interruptor "Aceitar respostas": ligado, o formulário recebe envios; desligado, fica fechado e exibe uma mensagem de encerramento. No menu de três pontinhos da aba ficam "Receber notificações por e-mail de novas respostas" e "Excluir todas as respostas". Atenção: limpar respostas é irreversível, não tem desfazer.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte quem já respondeu a algum formulário e como a pessoa que criou veria esses dados. Peça que cada aluno abra o formulário que criou nas aulas anteriores e clique na aba "Perguntas" só para relembrar. Em seguida, mostre no projetor onde fica a aba "Respostas".

Conteúdo novo guiado (15 min): no projetor, clique em "Respostas". Envie uma resposta ao vivo pelo celular e mostre o número subir. Apresente os três modos clicando em "Resumo", depois "Pergunta" (use as setas para passar entre perguntas) e depois "Individual" (use as setas para folhear pessoas). Mostre o gráfico de pizza no Resumo. Depois clique nos três pontinhos e marque "Receber notificações por e-mail de novas respostas". Por fim, mostre o interruptor "Aceitar respostas" sendo desligado e ligado.

Mão na massa (25 min): cada aluno abre a aba "Respostas" do próprio formulário. Se tiver poucas respostas, peça que troquem de computador com o colega do lado e respondam ao formulário um do outro, para gerar dados. Depois, cada um percorre os três modos, ativa as notificações por e-mail, abre o Gmail e confere se chegou o aviso. Em seguida, treinam desligar e religar "Aceitar respostas".

Desafio e compartilhar (10 min): cada aluno limpa as respostas de teste pelos três pontinhos, confirmando a exclusão, e mostra ao colega o gráfico de pizza de uma pergunta, explicando qual foi a opção mais votada.

## Como explicar de forma clara (linguagem para a idade)

Compare a aba Respostas a um placar de jogo que se atualiza sozinho. Diga: "Você não precisa contar os votos, o Forms conta para você." Para os três modos, use a imagem de uma pesquisa na escola: o Resumo é o cartaz com o resultado geral, o modo Pergunta é olhar pergunta por pergunta, e o Individual é abrir a ficha de uma pessoa por vez. Para as notificações, diga que é como ativar o "visto" do celular: chega um aviso toda vez que alguém responde. Para o interruptor, use a ideia de uma loja: "Aberto" recebe clientes, "Fechado" coloca a plaquinha na porta.

## Erros comuns e como ajudar

O erro mais frequente é o aluno procurar os resultados na aba errada e achar que o formulário não coletou nada; mostre que é preciso clicar em "Respostas", não em "Perguntas". Outro erro é limpar as respostas sem querer, achando que dá para desfazer; reforce, antes do exercício, que a exclusão é definitiva e só deve ser feita com respostas de teste. Alguns alunos não acham as notificações porque procuram um botão visível; lembre que a opção está escondida no menu de três pontinhos. Há quem confunda fechar o formulário com apagá-lo: explique que desligar "Aceitar respostas" só pausa os envios e pode ser religado a qualquer momento. Por fim, alguns esperam o e-mail de notificação chegar na hora; avise que pode levar alguns minutos e que a opção precisa estar marcada antes da resposta chegar.`,
  exercicios: [
    {
      titulo: `Caçada aos três modos`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com a aba "Respostas" aberta no próprio formulário. Acompanhe quem ainda está na aba "Perguntas" por engano.`,
      atividade: `Abra a aba "Respostas" do seu formulário e clique, na ordem, em "Resumo", "Pergunta" e "Individual". Em cada modo, anote no caderno uma coisa diferente que você vê na tela.`,
      gabarito: `No Resumo aparecem gráficos automáticos com o panorama geral; no modo Pergunta aparece uma pergunta por vez com setas para navegar; no Individual aparece uma resposta completa por vez, como uma ficha. O aluno deve ter citado um detalhe diferente em cada um.`,
    },
    {
      titulo: `Ative o aviso por e-mail`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre antes onde fica o menu de três pontinhos da aba Respostas. Lembre que a notificação só vale para respostas que chegarem depois de marcada.`,
      atividade: `Clique nos três pontinhos da aba "Respostas", marque "Receber notificações por e-mail de novas respostas", peça a um colega que responda seu formulário e abra o Gmail para conferir se o aviso chegou.`,
      gabarito: `A opção fica no menu de três pontinhos da aba Respostas. Depois de marcada, uma nova resposta gera um e-mail de aviso no Gmail do dono do formulário (pode levar alguns minutos).`,
    },
    {
      titulo: `Abrir e fechar a loja`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Cada dupla testa nos dois formulários. Reforce que fechar não apaga nada e pode ser revertido.`,
      atividade: `Em dupla, desliguem o interruptor "Aceitar respostas" de um formulário. O colega tenta responder pelo link e descreve o que aparece. Depois religuem o interruptor e o colega tenta de novo. Repitam no outro formulário.`,
      gabarito: `Com "Aceitar respostas" desligado, quem abre o link vê uma mensagem de que o formulário não está mais recebendo respostas e não consegue enviar. Ao religar, o formulário volta a aceitar envios normalmente. Nada é apagado no processo.`,
    },
    {
      titulo: `Lendo o gráfico de pizza`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Conduza a roda projetando um Resumo com gráfico de pizza. Faça perguntas que levem o aluno a interpretar porcentagens e a maioria.`,
      atividade: `No modo "Resumo", escolha uma pergunta de múltipla escolha e olhe o gráfico de pizza. Diga em voz alta qual opção foi a mais escolhida e mais ou menos qual a porcentagem dela.`,
      gabarito: `A opção mais votada é a fatia maior do gráfico de pizza, e o Forms mostra a porcentagem ao lado de cada opção. A soma de todas as fatias dá cem por cento. O aluno deve identificar corretamente a fatia maior do próprio gráfico.`,
    },
    {
      titulo: `Limpeza e relatório final`,
      tipo: `projeto curto`,
      tempo: `4 minutos`,
      guiaProfessor: `Avise em voz alta, antes de começar, que a exclusão é definitiva e só vale para respostas de teste. Confira que ninguém apague respostas que queira guardar.`,
      atividade: `Limpe as respostas de teste do seu formulário pelos três pontinhos, confirmando a exclusão. Depois confirme que a aba "Respostas" mostra zero e escreva uma frase explicando por que limpamos os testes antes da coleta de verdade.`,
      gabarito: `A opção "Excluir todas as respostas" fica no menu de três pontinhos e pede confirmação porque é definitiva. Após confirmar, o contador da aba volta a zero. Limpamos os testes para que os dados reais não se misturem com respostas de mentira feitas durante o ensaio.`,
    },
  ],
};
