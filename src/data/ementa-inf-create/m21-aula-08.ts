import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Botões que Funcionam: Entrega Final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `O aluno insere botões na planilha, conecta-os às suas macros e monta o entregável do mês: um mini painel interativo com mensagens e botões funcionando de verdade.`,
  descricao: `Esta é a aula final do mês de VBA, o momento em que tudo o que o aluno aprendeu se junta em um único projeto. Durante quatro semanas ele abriu o Editor VBA, guardou dados em variáveis, tomou decisões com If, repetiu tarefas com loops, leu e escreveu células, controlou planilhas por código e conversou com o usuário usando MsgBox e InputBox. Agora chega a hora de dar a esse código uma cara visível e clicável: o botão. Em vez de rodar a macro escondida pelo menu, o aluno vai criar um painel onde basta apertar um botão para a planilha responder.

O coração da aula é o controle de Formulário chamado Botão. É um retângulo que fica desenhado na própria planilha e que, ao ser clicado, executa uma macro que o aluno escolher. Conectar o botão à macro é simples e quase mágico para a idade: o aluno desenha o botão, escolhe na lista qual macro ele dispara, digita um texto bonito no botão e pronto. A partir daí, qualquer pessoa que abrir a planilha consegue usar o programa sem saber nada de código.

O entregável do mês é um mini painel interativo. Ele reúne pelo menos três botões que acionam macros já escritas nas aulas anteriores: um que pede o nome com InputBox e dá boas-vindas, um que lê números das células e mostra um resultado com MsgBox, e um que limpa ou reinicia a planilha. O aluno testa cada botão, ajusta o que não funciona e deixa o painel pronto para apresentar aos colegas.

Esta aula é tão sobre programar quanto sobre testar e apresentar. O aluno aprende que software de verdade precisa ser experimentado, corrigido e mostrado para outras pessoas. Ao final, cada aluno demonstra seu painel para a turma, explicando o que cada botão faz. É a coroação do mês: ver o próprio código virar uma ferramenta que qualquer um consegue clicar e usar.`,
  materiais: [
    `Computadores (1 por aluno) com Microsoft Excel instalado e a guia Desenvolvedor já habilitada`,
    `Editor VBA aberto (atalho Alt + F11) e arquivos das aulas anteriores salvos como .xlsm (pasta habilitada para macros)`,
    `Projetor ou TV para o professor demonstrar a inserção do botão passo a passo`,
    `Arquivo de exemplo "PainelExemplo.xlsm" pronto, com três macros já escritas (boas-vindas, cálculo e limpar)`,
    `Roteiro impresso de teste com uma lista do tipo "clicar no botão X deve fazer Y"`,
    `Folha de apresentação onde cada aluno anota o nome do painel e o que cada botão faz`,
    `Cronômetro ou timer visível para controlar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Botão de Formulário — controle em forma de retângulo que fica desenhado na planilha e executa uma macro ao ser clicado.`,
    `Atribuir Macro — ação de conectar um botão a uma macro específica, escolhendo qual código ele vai disparar.`,
    `Painel interativo — conjunto de botões e células organizados que deixam o usuário usar o programa só clicando, sem ver o código.`,
    `Guia Desenvolvedor — aba da faixa de opções do Excel onde ficam os botões para inserir controles e abrir o Editor VBA.`,
    `Testar — clicar em cada botão e conferir se o resultado é o esperado, anotando o que deu certo e o que falhou.`,
    `Depurar (ajustar) — encontrar e corrigir o erro quando um botão não faz o que deveria.`,
    `Entregável — o produto final pronto e funcionando que o aluno apresenta, neste mês o mini painel com mensagens e botões.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA para dar esta aula. Tudo o que importa é conectar um botão a uma macro que já existe. Antes da aula, abra o arquivo "PainelExemplo.xlsm" e confira que ele já tem três macros prontas (BoasVindas, Calcular e Limpar). Garanta também que a guia Desenvolvedor aparece na faixa de opções. Se não aparecer, vá em Arquivo, Opções, Personalizar Faixa de Opções e marque a caixa Desenvolvedor à direita. Os arquivos precisam estar salvos como .xlsm; o formato comum .xlsx apaga as macros. Avise os alunos disso logo no começo.

## Passo a passo da aula

Aquecimento (10 min): Pergunte à turma quais macros eles escreveram no mês. Liste no quadro: pedir nome, calcular, limpar. Diga que hoje essas macros vão ganhar botões e virar um painel de verdade. Mostre rápido no projetor uma macro rodando pelo menu Macros, e pergunte: não seria melhor só clicar um botão?

Conteúdo novo guiado (15 min): No projetor, ensine a inserir o botão. Clique na guia Desenvolvedor, depois em Inserir, e escolha o primeiro ícone, o Botão de Formulário. O cursor vira uma cruz; arraste na planilha para desenhar o retângulo. Solte o mouse e o Excel abre logo a janela Atribuir Macro. Clique na macro BoasVindas e em OK. Clique com o botão direito no botão, escolha Editar Texto e digite "Dar boas-vindas". Clique fora e teste: aperte o botão; a mensagem deve aparecer. Repita para um segundo botão ligado à macro Calcular.

Mão na massa (25 min): Cada aluno abre seu próprio arquivo .xlsm das aulas anteriores e cria pelo menos três botões, ligando cada um a uma macro sua. Circule pela sala. Os passos repetidos são sempre: Desenvolvedor, Inserir, Botão de Formulário, desenhar, escolher a macro, dar nome ao texto, testar. Peça que organizem os botões em coluna, com um título na célula de cima, como "Meu Painel".

Desafio e compartilhar (10 min): Desafie quem terminar a colorir os botões (clique direito, Formatar Controle) ou adicionar um quarto botão que limpa a planilha. Depois, cada aluno mostra seu painel para a turma em trinta segundos, clicando nos botões e dizendo o que cada um faz.

## Como explicar de forma clara

Use a ideia de controle remoto: o botão é como o botão de um controle, e a macro é o que acontece na TV quando você aperta. O aluno já tem o aparelho montado (a macro); hoje ele só está colocando os botões na frente para qualquer um usar. Diga que o usuário do painel não precisa ver o código, igual a quem usa o celular não vê a programação por dentro. Reforce que dar um nome claro ao botão é gentileza com quem vai clicar: "Calcular total" é melhor do que "Botão 1".

## Erros comuns e como ajudar

O erro mais frequente é o aluno desenhar o botão e fechar a janela Atribuir Macro sem escolher nada; aí o botão não faz nada. Solução: clicar com o botão direito no botão, escolher Atribuir Macro e selecionar a macro certa. Outro erro é salvar como .xlsx e perder as macros; insista no formato .xlsm e use Salvar Como. Se ao clicar o aluno entra no modo de mover o botão em vez de acioná-lo, basta clicar fora uma vez e depois clicar normal. Se a macro dá erro ao rodar pelo botão, abra o Editor com Alt + F11 e leia a linha destacada em amarelo: quase sempre é um nome de célula ou de variável digitado errado. Mantenha a calma e mostre que corrigir bug faz parte de programar.`,
  exercicios: [
    {
      titulo: `Meu primeiro botão`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tem o arquivo .xlsm aberto com pelo menos uma macro pronta. Acompanhe a sequência de cliques no projetor enquanto eles repetem. O objetivo é que todos consigam ao menos um botão funcionando antes de avançar.`,
      atividade: `Insira um botão na planilha pela guia Desenvolvedor, ligue-o à sua macro de boas-vindas, dê a ele o texto "Começar" e clique para testar.`,
      gabarito: `Passos corretos: guia Desenvolvedor, botão Inserir, escolher o Botão de Formulário (primeiro ícone), desenhar o retângulo na planilha, na janela Atribuir Macro escolher BoasVindas e clicar OK, clicar com o botão direito e usar Editar Texto para escrever "Começar". Ao clicar, a mensagem de boas-vindas deve aparecer. Botão funcionando equivale a exercício correto.`,
    },
    {
      titulo: `Três botões, três ações`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Agora cada aluno conecta botões diferentes a macros diferentes. Reforce a importância de testar cada um logo após criar. Circule conferindo se os nomes dos botões estão claros e se cada botão chama a macro certa.`,
      atividade: `Crie três botões em coluna: um para pedir o nome, um para calcular um resultado e um para limpar a planilha. Ligue cada botão à macro correta, dê nomes claros e teste os três.`,
      gabarito: `O aluno deve ter três botões, cada um ligado a uma macro distinta (por exemplo BoasVindas, Calcular e Limpar). Os textos devem ser claros, como "Dar boas-vindas", "Calcular total" e "Limpar tudo". Ao clicar em cada um, a ação correspondente acontece: pede nome, mostra resultado e limpa as células. Se algum não funcionar, usar o botão direito e Atribuir Macro para corrigir a ligação.`,
    },
    {
      titulo: `Caça ao botão quebrado`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Entregue ou abra um arquivo preparado em que um botão está ligado à macro errada e outro não está ligado a nada. O desafio é o aluno descobrir e consertar. Dê dicas sobre clicar com o botão direito e usar Atribuir Macro, sem entregar a resposta.`,
      atividade: `Abra o arquivo "PainelComBug.xlsm". Clique em todos os botões, descubra quais estão errados e conserte para que cada um faça a ação certa indicada pelo texto do botão.`,
      gabarito: `O aluno identifica que o botão "Calcular total" estava chamando a macro Limpar (ação errada) e que o botão "Limpar tudo" não tinha macro atribuída (não fazia nada). Conserto: clicar com o botão direito em cada botão, escolher Atribuir Macro e selecionar a macro correta (Calcular para o primeiro, Limpar para o segundo). Após o ajuste, cada botão executa a ação que o texto promete.`,
    },
    {
      titulo: `Painel em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um aluno é o construtor e o outro é o testador, depois trocam. O testador segue um roteiro do tipo "clicar no botão X deve fazer Y" e anota o que falha. Incentive feedback gentil e específico. O foco é a cultura de testar o software de outra pessoa.`,
      atividade: `Em dupla, troquem de computador. Cada um testa o painel do colega clicando em todos os botões e anota numa folha o que funciona e o que precisa melhorar. Depois, juntos, consertem os problemas encontrados.`,
      gabarito: `Espera-se uma lista de teste preenchida com observações reais, por exemplo: "botão Calcular funciona", "botão Limpar apaga, mas o nome do texto está confuso", "botão de boas-vindas não tinha macro atribuída". A dupla deve ter corrigido pelo menos um problema encontrado, usando Atribuir Macro ou ajustando o texto do botão. Painéis testados e melhorados em conjunto indicam exercício cumprido.`,
    },
    {
      titulo: `Apresentação do meu painel`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `13 min`,
      guiaProfessor: `Este é o fechamento do mês. Cada aluno finaliza o painel com título e botões organizados, salva como .xlsm e apresenta em até trinta segundos para a turma, clicando nos botões ao vivo. Conduza uma breve roda de conversa: pergunte o que foi mais difícil e o que mais gostaram de programar no mês.`,
      atividade: `Finalize seu mini painel: dê um título na célula de cima (como "Painel do Pedro"), organize os botões, salve como .xlsm e apresente para a turma clicando em cada botão e explicando o que ele faz.`,
      gabarito: `O entregável do mês está completo quando o painel tem um título, pelo menos três botões funcionando ligados a macros próprias (boas-vindas com InputBox, cálculo com MsgBox e limpar), está salvo no formato .xlsm e foi apresentado com os botões clicados ao vivo. Na roda de conversa, o aluno consegue explicar em palavras simples o que cada botão faz, demonstrando que entende a ligação entre botão e macro. Esse é o objetivo final: mensagens e botões funcionando de verdade.`,
    },
  ],
};
