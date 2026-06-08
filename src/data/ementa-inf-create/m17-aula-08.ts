import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Automação pronta: hora de mostrar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, testar e apresentar a automação simples do mês funcionando de ponta a ponta, revisando PROCX, SE e o script para entregar o projeto pronto.`,
  descricao: `Esta é a aula de fechamento do mês com Google Planilhas e Apps Script. Durante quatro semanas, o aluno aprendeu a investigar dados com PROCX, a tomar decisões com a função SE e os filtros, e a escrever seu primeiro código de verdade no Apps Script: um robô que lê e escreve células e é acionado por um botão na planilha. Agora chega a hora de juntar tudo em um único entregável: uma automação simples, do começo ao fim, que funciona quando o aluno clica no botão.

A aula tem duas grandes partes. Na primeira, o aluno faz a finalização técnica: confere se as fórmulas PROCX e SE ainda funcionam, testa o script clicando no botão, corrige os últimos detalhes (um nome de aba errado, uma célula trocada, um ponto e vírgula esquecido) e deixa a planilha apresentável, com títulos claros e visual organizado. Na segunda parte, o aluno apresenta a automação na tela grande para a turma, mostrando ao vivo o antes e o depois de clicar no botão.

O objetivo não é criar nada novo do zero, e sim consolidar e entregar. O professor deve circular pela sala garantindo que cada aluno tenha a automação rodando sem erro até o fim da hora. Mesmo que algum projeto seja simples, o importante é que todos cruzem a linha de chegada com algo que funciona de verdade ao apertar o botão.

A apresentação é o momento mais valioso da aula. É quando o aluno percebe que escreveu código real, vê o trabalho dos colegas e aprende a explicar o que construiu. Crie um clima de celebração: este é o resultado de um mês inteiro de trabalho, e cada automação que funciona merece aplausos.`,
  materiais: [
    `Computadores com o Google Planilhas aberto no navegador e o editor do Apps Script acessível em cada máquina`,
    `Projetor ou TV grande conectada para a demonstração do professor e as apresentações da turma`,
    `Conta Google (preferencialmente da escola) logada em cada computador para abrir as planilhas e autorizar os scripts`,
    `Planilha do projeto do mês já iniciada por cada aluno nas aulas anteriores (com PROCX, SE e o script com botão)`,
    `Planilha de exemplo já finalizada pelo professor, com a automação funcionando, para mostrar o resultado esperado`,
    `Folha ou slide com a lista de verificação final e o roteiro de feedback (dois elogios e uma sugestão por colega)`,
  ],
  conceitosChave: [
    `Automação — fazer o computador realizar uma tarefa sozinho; aqui, a planilha que se organiza ao clicar em um botão em vez de a pessoa digitar tudo à mão.`,
    `Entregável — o produto final do mês; neste caso, a planilha com PROCX, SE e um script que funciona ao apertar o botão.`,
    `Teste de ponta a ponta — experimentar o projeto do início ao fim, simulando o uso real, para ter certeza de que tudo funciona junto.`,
    `Depuração — procurar e corrigir os erros do código ou das fórmulas até que tudo funcione sem mensagens de erro.`,
    `PROCX — função que procura um valor em uma coluna e traz a informação correspondente de outra coluna, como um detetive das planilhas.`,
    `SE — função que toma uma decisão: se uma condição for verdadeira mostra um resultado, se for falsa mostra outro.`,
    `Função (no Apps Script) — bloco de código com um nome que executa uma tarefa quando é chamado, por exemplo pelo botão da planilha.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é a linha de chegada do mês. O aluno já tem uma planilha com fórmulas PROCX e SE e um script de Apps Script acionado por um botão, construídos nas aulas anteriores. Hoje ele apenas testa tudo, corrige os últimos detalhes, deixa a planilha bonita e apresenta. Você não precisa dominar o Apps Script a fundo: basta seguir os passos abaixo. O Google Planilhas abre no navegador (Chrome de preferência) e o editor de código fica no menu Extensões > Apps Script, que abre em uma nova aba do navegador.

Antes da aula, abra uma planilha sua já pronta, com a automação funcionando, e teste o botão. Mostrar o resultado esperado vale mais que mil explicações. Tenha o projetor ligado para a demonstração.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Receba a turma com energia de dia de estreia. Pergunte: "Quem está com a automação quase pronta?". Mostre a sua planilha de exemplo no projetor e clique no botão ao vivo, para a turma ver os dados se organizarem sozinhos. Escreva no quadro a lista de hoje: 1) Testar, 2) Corrigir, 3) Deixar bonita, 4) Apresentar.

Conteúdo novo guiado (15 min). Faça com eles, passo a passo, na sua máquina projetada. Primeiro, o teste: clique no botão da planilha e observe se ele faz o que deveria; depois confira uma célula com PROCX e uma com SE para ver se ainda mostram o resultado certo. Em seguida, mostre como abrir o código: vá em Extensões > Apps Script. Aponte onde fica a função (a linha que começa com function e termina com uma chave) e mostre que clicar em Executar (o botão com o triângulo, no topo do editor) roda o código direto dali, ótimo para testar. Mostre também onde aparece o erro em vermelho quando algo está escrito errado, como um ponto e vírgula esquecido ou um nome de aba diferente do real. Por fim, mostre o acabamento na planilha: deixar a primeira linha com títulos em negrito (botão N), congelar essa linha em Exibir > Congelar > 1 linha e pintar o cabeçalho pela lata de tinta da barra de ferramentas.

Mão na massa (25 min). Cada aluno repete os passos no próprio projeto: testa o botão, confere PROCX e SE, corrige o que estiver com erro e dá o acabamento visual. Circule pela sala. Garanta que a automação de todos rode sem mensagem vermelha. Quem terminar antes ajuda um colega ou melhora o visual da planilha. A meta é simples: todo aluno com o botão funcionando do começo ao fim.

Desafio e compartilhar (10 min). Reúna a turma. Cada aluno conecta a planilha no projetor e apresenta em até um minuto, mostrando o antes e clicando no botão para revelar o depois. Após cada apresentação, dois colegas dão feedback usando o roteiro: dois elogios e uma sugestão. Termine com aplausos para todos.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que testar de ponta a ponta é como ensaiar uma peça do início ao fim antes da estreia: "a gente faz tudo o que o usuário faria, para nenhum erro aparecer na hora H". Explique a depuração assim: "o computador é muito obediente; se algo deu errado, quase sempre foi a gente que escreveu um detalhe diferente, e o erro em vermelho é a pista que ele dá". Sobre o botão, fale que ele é "o controle remoto da planilha: um clique e o robô faz o trabalho chato sozinho". Reforce que feedback bom é "ajudar o amigo a melhorar, nunca derrubar".

## Erros comuns e como ajudar

O botão não faz nada ao ser clicado: confira no editor (Extensões > Apps Script) se o botão está ligado à função certa; clique nos três pontinhos do botão, escolha "Atribuir script" e digite o nome exato da função. Aparece erro vermelho citando um nome de aba: o nome digitado no código tem de ser idêntico ao da aba lá embaixo, incluindo maiúsculas e acentos. O PROCX devolve erro: verifique se o intervalo de busca inclui a coluna procurada e se o valor existe. O SE mostra sempre o mesmo resultado: confira o sinal da condição (maior, menor, igual) e se há aspas certas no texto. O aluno alterou o código e tudo parou: peça para olhar parênteses e chaves abertos e fechados em pares. O aluno trava na apresentação por vergonha: combine um sinal de incentivo e deixe claro que a turma só aplaude.`,
  exercicios: [
    {
      titulo: `Teste do botão de ponta a ponta`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe pela sala enquanto cada aluno clica no próprio botão. O objetivo é só observar se a automação faz o que deveria, antes de corrigir qualquer coisa. Peça que anotem num papel o que funcionou e o que falhou.`,
      atividade: `Abra a sua planilha do projeto e clique no botão da automação. Observe com atenção o que acontece e anote: o botão fez o que você esperava? Apareceu alguma mensagem de erro em vermelho? Liste tudo o que precisa de conserto.`,
      gabarito: `O aluno deve ter uma lista clara do estado atual da automação: se o botão executa a ação esperada e se há erros. Espera-se uma anotação do tipo "o botão organizou os dados, mas a coluna de status ficou vazia", que servirá de roteiro para a correção nos próximos passos.`,
    },
    {
      titulo: `Conferir PROCX e SE`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que fórmulas continuam parte da automação. Mostre que clicar na célula revela a fórmula na barra superior. O ponto crítico é confirmar que o intervalo do PROCX cobre a coluna certa e que a condição do SE usa o sinal correto.`,
      atividade: `Clique em uma célula que usa PROCX e veja a fórmula na barra de fórmulas; confira se ela traz a informação certa. Faça o mesmo com uma célula que usa SE. Se alguma estiver errada, corrija o intervalo do PROCX ou a condição do SE.`,
      gabarito: `As células com PROCX devem trazer o valor correspondente correto, e as células com SE devem mostrar o resultado esperado conforme a condição (verdadeira ou falsa). Por exemplo, um SE bem feito mostra "Aprovado" quando a nota é maior ou igual a 7 e "Recuperação" quando é menor. O aluno demonstra que ambas as fórmulas respondem certo a valores diferentes.`,
    },
    {
      titulo: `Caça ao erro no script`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Torne a depuração divertida. Mostre o caminho Extensões > Apps Script e o botão Executar para testar. Lembre que o erro vermelho indica a linha problemática. Os erros mais comuns são nome de aba diferente, ponto e vírgula esquecido e parêntese ou chave sem par.`,
      atividade: `Abra Extensões > Apps Script. Clique em Executar e leia a mensagem que aparecer. Se houver erro em vermelho, encontre a linha indicada e corrija: confira o nome da aba, os parênteses e as chaves em pares, e os pontos e vírgulas. Execute de novo até não aparecer mais erro.`,
      gabarito: `O script deve rodar até o fim sem mensagem de erro vermelha. O aluno deve ter localizado pelo menos um problema (por exemplo, o nome da aba "Dados" escrito como "dados") e corrigido. Considera-se concluído quando o botão executa a função inteira sem interrupção.`,
    },
    {
      titulo: `Acabamento da planilha`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Este passo garante que o entregável fique apresentável. Mostre no projetor os três toques: negrito no cabeçalho, congelar a primeira linha em Exibir > Congelar > 1 linha e pintar o cabeçalho com a lata de tinta. Confira máquina por máquina.`,
      atividade: `Deixe sua planilha apresentável: selecione a primeira linha e deixe os títulos em negrito (botão N), congele essa linha em Exibir > Congelar > 1 linha e pinte o cabeçalho com a lata de tinta da barra de ferramentas. Dê um nome claro à planilha no canto superior esquerdo.`,
      gabarito: `A planilha deve terminar com cabeçalho em negrito e com cor de fundo, com a primeira linha congelada (ela permanece visível ao rolar a página) e com um título claro no topo. Considera-se concluído quando a planilha está organizada, fácil de ler e pronta para ser apresentada no projetor.`,
    },
    {
      titulo: `Estreia e feedback da turma`,
      tipo: `Roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda com clima de celebração. Cada aluno apresenta em até um minuto, mostrando o antes e clicando no botão para revelar o depois. Use o roteiro fixo: dois colegas dão dois elogios e uma sugestão. Garanta respeito total e feche cada apresentação com aplausos.`,
      atividade: `Conecte sua planilha no projetor e apresente para a turma em até um minuto: mostre como estava antes, clique no botão e mostre o resultado da automação. Depois, dois colegas dão feedback usando o roteiro: dois elogios e uma sugestão de melhoria. Anote a sugestão que você recebeu.`,
      gabarito: `Cada aluno apresenta a automação funcionando ao vivo e recebe feedback de dois colegas no formato dois elogios e uma sugestão. Espera-se feedback respeitoso e específico, como "gostei do botão e do cabeçalho colorido; poderia somar também o total no fim". O aluno registra a sugestão recebida para aplicar em projetos futuros.`,
    },
  ],
};
