import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Luz, Câmera, Gravar!",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Gravar a primeira macro de verdade no Excel, formatando células (cor, negrito e bordas) e vendo o programa guardar cada ação automaticamente.`,
  descricao: `Nas duas aulas anteriores o aluno descobriu que existe um "robô" dentro do Excel e entendeu, na teoria, o que é uma macro. Agora chega o momento mais aguardado: colocar a mão na massa e gravar a primeira macro de verdade. A ideia central desta aula é simples e poderosa: o Excel consegue observar tudo o que você faz na tela e transformar essas ações em um pequeno programa que pode ser repetido com um único clique.

A gravação de macro funciona como uma câmera de vídeo. Quando você aperta o botão Gravar Macro, o Excel começa a "filmar" cada coisa que você faz: selecionar uma célula, mudar a cor, colocar negrito, desenhar uma borda. Quando você termina e aperta Parar Gravação, o Excel salva todo esse "filme" com o nome que você escolheu. Depois, é só "dar play" que ele refaz tudo sozinho, na ordem exata e em segundos.

Nesta aula o aluno vai aprender o passo a passo completo: dar um nome à macro, decidir onde ela será salva, gravar uma formatação simples e parar a gravação. O exemplo prático é formatar um pequeno cabeçalho de tabela deixando-o bonito (fundo colorido, texto em negrito e bordas em volta). É uma tarefa que todo mundo faz o tempo todo no Excel, e por isso é o exemplo perfeito para mostrar o valor da automação.

O grande objetivo emocional da aula é o "momento mágico": depois de gravar, o aluno apaga a formatação, executa a macro e vê o Excel refazer tudo instantaneamente. Esse efeito costuma arrancar um "uau" da turma e fixa para sempre a ideia de que programar é, no fundo, ensinar o computador a repetir nosso trabalho por nós.`,
  materiais: [
    `Computadores (um por aluno) com Microsoft Excel instalado e a guia Desenvolvedor habilitada`,
    `Projetor ou TV para o professor mostrar a tela e gravar a macro ao vivo`,
    `Arquivo de exemplo "tabela-vendas.xlsx" com uma pequena tabela de dados sem formatação`,
    `Quadro branco ou slide com a sequência dos botões: Gravar Macro, executar ações, Parar Gravação`,
    `Conta Microsoft do aluno (ou login local) para salvar o arquivo com macros`,
    `Lista impressa com os passos da gravação, para o aluno consultar durante a prática`,
  ],
  conceitosChave: [
    `Gravador de Macro — ferramenta do Excel que "filma" suas ações e as transforma em um programa automático.`,
    `Nome da macro — apelido que você dá à gravação; não pode ter espaços nem começar com número.`,
    `Armazenar macro em — escolha de onde a macro fica salva: nesta pasta de trabalho, em uma nova pasta ou na Pasta de Trabalho Pessoal.`,
    `Parar Gravação — botão que encerra a "filmagem" e salva tudo o que foi feito até ali.`,
    `Tecla de atalho — combinação opcional (como Ctrl mais uma letra) que dispara a macro depois.`,
    `Formatação — mudanças na aparência da célula, como cor de preenchimento, negrito e bordas.`,
    `Executar macro — "dar play" na gravação para o Excel refazer as ações sozinho.`,
  ],
  treinamento: `## O que o professor precisa saber

Gravar macro é a forma mais fácil de programar sem digitar código. O Excel observa suas ações e cria o programa por você. Você não precisa dominar VBA para dar esta aula: basta saber onde ficam três coisas na guia Desenvolvedor (no menu superior): o botão Gravar Macro, o botão Parar Gravação e o botão Macros (para executar). Se a guia Desenvolvedor não aparecer no seu Excel, ative assim: Arquivo, depois Opções, depois Personalizar Faixa de Opções e marque a caixa Desenvolvedor à direita. Faça isso antes da aula em todos os computadores. Importante: para salvar o arquivo depois, será preciso usar o formato .xlsm (Pasta de Trabalho Habilitada para Macros), mas isso é aprofundado na próxima aula; hoje o foco é só gravar e executar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Retome a pergunta "o que é uma macro?" da aula anterior. Faça a turma lembrar a comparação com uma câmera de vídeo. Pergunte: "Que tarefa chata vocês repetem todo dia no Excel?" Anote duas ou três respostas no quadro. Diga que hoje vão ensinar o Excel a fazer uma delas sozinho.

Conteúdo novo guiado (15 min): Com o projetor, abra o arquivo de exemplo. Mostre a guia Desenvolvedor e clique em Gravar Macro. Apresente a janelinha que aparece: campo Nome da macro (digite FormatarCabecalho, sem espaços), campo Tecla de atalho (deixe vazio por enquanto) e a lista Armazenar macro em (escolha Esta pasta de trabalho). Clique em OK e diga em voz alta: "A câmera está gravando! Tudo o que eu fizer agora vai ser guardado." Selecione o cabeçalho da tabela, aplique cor de preenchimento amarela (botão balde de tinta), negrito (Ctrl mais N) e bordas (botão Bordas, opção Todas as Bordas). Volte à guia Desenvolvedor e clique em Parar Gravação. Por fim, apague a formatação, clique em Macros, selecione FormatarCabecalho e clique em Executar: a turma vê a mágica acontecer.

Mão na massa (25 min): Cada aluno abre o próprio arquivo de exemplo e repete o processo no computador. Circule pela sala ajudando a encontrar os botões. Peça que gravem uma macro chamada MeuCabecalho aplicando pelo menos três formatações (cor, negrito e bordas). Depois apagam a formatação e executam a macro para confirmar que funciona. Quem terminar pode trocar as cores e gravar uma segunda versão.

Desafio e compartilhar (10 min): Lance o desafio de gravar uma macro que, além de formatar, também centralize o texto e aumente o tamanho da fonte. Convide dois ou três alunos a projetar a tela e executar a própria macro para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da câmera o tempo todo: "Apertou Gravar, a câmera ligou. Apertou Parar, a câmera desligou e salvou o vídeo." Diga que executar a macro é "dar play". Reforce que o nome da macro é como o nome de um arquivo de vídeo: precisa ser sem espaços, por isso escrevemos FormatarCabecalho tudo junto. Quando o aluno vir o Excel refazer tudo sozinho, celebre: "Vocês acabaram de fazer o computador trabalhar por vocês!"

## Erros comuns e como ajudar

O erro mais comum é gravar com a câmera ligada por engano e capturar cliques errados; ensine que é só apagar a macro e gravar de novo, sem medo. Outro erro frequente é colocar espaço ou acento no nome da macro, o que gera mensagem de erro; oriente a usar nomes juntos como MeuCabecalho. Alguns alunos esquecem de clicar em Parar Gravação e a câmera continua "filmando"; lembre sempre de fechar a gravação. Se a macro não funcionar ao executar, verifique se o aluno selecionou as células certas antes de gravar. Por fim, se a guia Desenvolvedor sumir em algum computador, reative pelas Opções antes de continuar.`,
  exercicios: [
    {
      titulo: `Encontrando os botões`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Aquecimento rápido antes de gravar. Garanta que todos localizem a guia Desenvolvedor e os três botões principais. Faça em conjunto, projetando a tela.`,
      atividade: `Abra o Excel e clique na guia Desenvolvedor. Aponte com o mouse (sem clicar para valer) e diga em voz alta onde estão os botões Gravar Macro, Parar Gravação e Macros.`,
      gabarito: `Os três botões ficam na guia Desenvolvedor, no grupo Código (lado esquerdo da faixa). Gravar Macro e Parar Gravação ocupam o mesmo lugar: o botão muda de nome quando a gravação começa. O botão Macros abre a lista de macros para executar.`,
    },
    {
      titulo: `Minha primeira gravação`,
      tipo: `prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Atividade central. Conduza passo a passo no projetor enquanto os alunos repetem. Confirme que cada um deu um nome válido e escolheu Esta pasta de trabalho.`,
      atividade: `No arquivo de exemplo, clique em Gravar Macro, dê o nome MeuCabecalho, escolha Armazenar em Esta pasta de trabalho e clique OK. Selecione o cabeçalho, aplique cor de fundo, negrito e bordas. Clique em Parar Gravação.`,
      gabarito: `A sequência correta é: Desenvolvedor, Gravar Macro, digitar MeuCabecalho (sem espaços), escolher Esta pasta de trabalho, OK, aplicar as três formatações nas células do cabeçalho e por fim Parar Gravação. Ao final, a macro MeuCabecalho aparece na lista do botão Macros.`,
    },
    {
      titulo: `O momento mágico`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Aqui acontece o "uau". Oriente o aluno a apagar a formatação antes de executar, para que a diferença fique visível. Comemore o resultado com a turma.`,
      atividade: `Apague toda a formatação do cabeçalho (deixe-o sem cor, sem negrito e sem bordas). Depois clique em Macros, selecione MeuCabecalho e clique em Executar. Observe o Excel refazer tudo sozinho.`,
      gabarito: `Após apagar a formatação e executar a macro, o cabeçalho volta a ficar com cor, negrito e bordas instantaneamente, sem nenhum clique manual de formatação. Isso prova que a macro guardou e repete as ações gravadas.`,
    },
    {
      titulo: `Gravando em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Estimule a colaboração e a explicação em voz alta. Um aluno narra os passos enquanto o outro executa, depois trocam de papel. Circule corrigindo nomes inválidos.`,
      atividade: `Em dupla, um colega dita os passos da gravação enquanto o outro opera o mouse e o teclado. Gravem juntos uma macro chamada CabecalhoColorido com uma cor diferente da anterior. Depois troquem de função e gravem outra versão.`,
      gabarito: `A dupla deve produzir pelo menos uma macro CabecalhoColorido funcionando, gravada corretamente (nome sem espaços, ações de formatação capturadas e gravação encerrada). Ao trocar de papel, ambos devem conseguir explicar e executar os passos, mostrando que entenderam a ordem: Gravar, agir, Parar, Executar.`,
    },
    {
      titulo: `Roda de conversa: onde isso ajuda?`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Feche a aula conectando a prática com a vida real. Conduza a conversa anotando ideias no quadro e valorizando cada resposta. Não há resposta única.`,
      atividade: `Em círculo, cada aluno responde: "Que tarefa repetitiva da minha vida (escola, jogos, casa) eu gostaria de automatizar com uma macro?" e "Por que gravar é mais fácil do que fazer tudo na mão toda vez?"`,
      gabarito: `Respostas variam, mas devem demonstrar a compreensão de que a macro economiza tempo ao repetir ações idênticas com um clique. Exemplos válidos: formatar boletins ou planilhas de notas, organizar listas de tarefas, padronizar tabelas de um trabalho escolar. A ideia-chave a destacar é que automatizar vale a pena quando a tarefa é repetida muitas vezes e sempre do mesmo jeito.`,
    },
  ],
};
