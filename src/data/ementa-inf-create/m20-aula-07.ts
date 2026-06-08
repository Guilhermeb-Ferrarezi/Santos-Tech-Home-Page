import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Construindo Minha Automação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir tudo o que foi aprendido no mês para montar uma automação completa de uma tarefa repetitiva real, gravando as ações, ajustando o código VBA e adicionando um botão funcional.`,
  descricao: `Esta é a aula em que as peças se encaixam. Durante o mês, o aluno entendeu o que é uma macro, gravou ações, criou botões e atalhos, espiou o código VBA por trás e aprendeu a ler e mexer nele. Agora ele junta tudo para construir, do início ao fim, a automação que será o entregável do mês. Não é mais um exercício solto: é o projeto dele, resolvendo um problema de verdade que se repete.

O coração da aula é a escolha de uma tarefa repetitiva real e a transformação dela em uma macro confiável. O aluno grava as ações que costuma fazer na mão, depois abre o Editor do VBA e limpa o código gravado: remove linhas inúteis, troca seleções desnecessárias por comandos diretos e adiciona pequenos ajustes que deixam a macro mais segura. Esse trabalho de "lapidar" o código é o que separa uma gravação bruta de uma automação que funciona sempre.

Para fechar, o aluno conecta a macro a um botão na planilha e testa com dados de verdade, não com um exemplo perfeito. É aqui que ele descobre o que ainda precisa melhorar: a macro quebra quando a lista tem mais linhas? Some a formatação? Ela pede confirmação quando deveria? O aluno anota esses pontos numa lista de melhorias, que será o ponto de partida para a Aula 8, a entrega final.

O professor conduz como um treinador de oficina: cada aluno tem um projeto diferente, então o papel do professor é circular, fazer perguntas que ajudam o aluno a decidir e socorrer travamentos de código. O objetivo não é que todas as macros sejam iguais, e sim que cada uma resolva, de forma honesta, uma tarefa chata da vida real do aluno.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e a aba Desenvolvedor já habilitada, com o Editor do VBA acessível (atalho Alt + F11)`,
    `Projetor ou TV para o professor demonstrar a gravação, a limpeza do código e a criação do botão passo a passo`,
    `Arquivo de exemplo "tarefa-repetitiva.xlsx" com dados reais e bagunçados (uma lista de notas, vendas ou inscrições para limpar, formatar ou organizar)`,
    `Lista impressa ou em slide com 4 ou 5 ideias de tarefas repetitivas para alunos sem ideia (limpar planilha, formatar cabeçalho, somar e destacar totais, ordenar e filtrar)`,
    `Ficha "Minha Automação" para o aluno anotar: tarefa escolhida, passos, problemas encontrados e melhorias`,
    `Arquivos salvos com a extensão .xlsm (Pasta de Trabalho Habilitada para Macros), pois macros não são guardadas em .xlsx`,
    `Pen drive ou pasta na nuvem para o aluno salvar o projeto e levar para a Aula 8`,
  ],
  conceitosChave: [
    `Tarefa repetitiva — atividade chata que você faz sempre do mesmo jeito, várias vezes, e que por isso vale a pena automatizar.`,
    `Gravar macro — registrar suas ações no Excel para que ele as repita sozinho; gera código VBA automaticamente.`,
    `Limpar o código — apagar ou ajustar as linhas inúteis que a gravação cria, deixando a macro mais curta, rápida e confiável.`,
    `Range — em VBA, é a forma de apontar uma célula ou um intervalo direto pelo endereço, sem precisar clicar e selecionar antes.`,
    `Botão de macro — desenho ou forma na planilha que, ao ser clicado, executa a macro; deixa a automação fácil de usar.`,
    `Teste com dados reais — rodar a macro em informações de verdade, e não num exemplo perfeito, para descobrir onde ela falha.`,
    `Lista de melhorias — anotação dos defeitos e ideias percebidos no teste, que guiam o próximo ajuste da automação.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em VBA para dar esta aula. O segredo é que cada aluno vai construir sua própria automação, então seu papel é menos "explicar tudo na frente" e mais "circular e destravar". Tenha clara a sequência que cada aluno seguirá: escolher a tarefa, gravar, limpar o código, criar o botão e testar. Antes da aula, faça você mesmo uma automação simples no arquivo de exemplo (por exemplo: apagar formatação, deixar o cabeçalho em negrito e somar uma coluna). Assim você já viu os erros que aparecem.

Lembre-se de três fatos essenciais: macros só são salvas em arquivos .xlsm; o Editor do VBA abre com Alt + F11; e a gravação cria muito código inútil, especialmente linhas com Select e Selection, que dá para encurtar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 6 com uma pergunta rápida: "O que é aquela linha Range no código?". Mostre no projetor uma macro gravada e pergunte quais linhas parecem inúteis. Em seguida, peça que cada aluno escreva na ficha "Minha Automação" qual tarefa repetitiva vai automatizar. Para quem travar, mostre a lista de ideias.

Conteúdo novo guiado (15 min): no projetor, abra o arquivo de exemplo e grave uma macro ao vivo. Vá na aba Desenvolvedor, clique em Gravar Macro, dê um nome sem espaços (por exemplo LimparEFormatar), faça as ações e clique em Parar Gravação. Abra o Editor com Alt + F11, mostre o código gerado e faça a limpeza ao vivo: troque um trecho como Range("A1").Select seguido de Selection.Font.Bold = True por uma única linha Range("A1").Font.Bold = True. Explique que isso faz a mesma coisa, só que direto.

Mão na massa (25 min): cada aluno grava a sua macro, abre o Editor com Alt + F11 e limpa o código. Depois cria o botão: aba Desenvolvedor, botão Inserir, escolha um Botão de Controle de Formulário, desenhe na planilha e ligue à macro na janela que abre. Circule sem parar, fazendo perguntas em vez de dar respostas prontas: "O que essa linha faz?", "E se a lista tiver 50 itens?". Garanta que todos salvem como .xlsm.

Desafio e compartilhar (10 min): cada aluno testa a macro clicando no botão com os dados reais do arquivo e anota na ficha pelo menos dois problemas ou melhorias. Dois ou três voluntários mostram a automação no projetor e contam o que ainda querem ajustar para a Aula 8.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do robô assistente: "Você está ensinando um robô a fazer a parte chata por você. A gravação é você mostrando uma vez; o código é o caderno de instruções dele." Para a limpeza, diga: "O Excel anota tudo, até os passos bobos. A gente risca o que não precisa para o robô ser mais rápido e não se confundir." Sobre o teste, seja honesto: "Toda automação dá errado na primeira vez. Achar o defeito não é fracasso, é o trabalho do programador."

## Erros comuns e como ajudar

O erro mais comum é salvar em .xlsx e perder a macro: reforce o .xlsm antes da mão na massa. Outro é dar nome de macro com espaço ou acento, que o Excel recusa; ensine nomes colados como SomarTotais. Muitos alunos vão querer apagar linhas demais ao limpar e quebrar o código; oriente a apagar uma de cada vez e testar. Se a macro não roda no botão, geralmente a ligação à macro não foi feita: clique direito no botão, Atribuir Macro. Por fim, alunos que escolhem tarefas grandes demais travam; ajude a recortar para algo de três a cinco passos, que cabe na aula.`,
  exercicios: [
    {
      titulo: `Escolhendo a tarefa certa`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza uma rodada rápida em que cada aluno diz em voz alta a tarefa repetitiva que pensou em automatizar. Ajude a turma a julgar se a ideia é boa: precisa ser repetitiva, ter passos sempre iguais e caber em poucos minutos. Recuse ideias grandes demais e ajude a recortá-las.`,
      atividade: `Pense numa tarefa chata que você faz sempre igual no Excel ou que poderia fazer. Conte para a turma qual é e por que ela é boa para virar macro. Diga em quantos passos ela acontece.`,
      gabarito: `Uma boa tarefa é repetitiva, sempre igual e curta. Exemplos válidos: deixar o cabeçalho em negrito e centralizado, apagar a formatação antiga de uma lista colada, somar uma coluna e destacar o total, ordenar nomes em ordem alfabética. Exemplos ruins (grandes demais): "montar um sistema de notas inteiro" ou "criar um boletim completo", que devem ser recortados em um único passo.`,
    },
    {
      titulo: `Gravando minha primeira versão`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada aluno gravando a macro da tarefa escolhida. Reforce: nome sem espaço nem acento, fazer as ações com calma e clicar em Parar Gravação no fim. Confira se todos salvaram como .xlsm. Não cobre código limpo ainda; aqui o objetivo é só ter a gravação funcionando.`,
      atividade: `Na aba Desenvolvedor, clique em Gravar Macro, dê um nome colado (ex.: LimparLista), execute os passos da sua tarefa e clique em Parar Gravação. Rode a macro uma vez pelo menu Macros para ver se ela repete suas ações. Salve o arquivo como .xlsm.`,
      gabarito: `O aluno deve ter uma macro nomeada corretamente que, ao ser executada, repete as ações gravadas. O arquivo precisa estar salvo como Pasta de Trabalho Habilitada para Macros (.xlsm). Sinal de sucesso: ao rodar a macro num dado já limpo e desfazer com Ctrl + Z, ao rodar de novo o resultado se repete igual.`,
    },
    {
      titulo: `Lapidando o código`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente o aluno a abrir o Editor com Alt + F11 e enxugar o código gravado. O foco é remover pares de Select e Selection, juntando-os numa linha direta com Range. Peça para apagar uma linha por vez e testar a macro depois de cada corte, para não quebrar tudo de uma vez.`,
      atividade: `Abra o Editor do VBA (Alt + F11), encontre sua macro e procure linhas com .Select e Selection. Troque um trecho como Range("A1").Select e Selection.Font.Bold = True por uma única linha: Range("A1").Font.Bold = True. Apague também linhas que não fazem nada. Rode a macro e confira se ainda funciona.`,
      gabarito: `O código final deve ser mais curto e sem as palavras Select e Selection desnecessárias. Exemplo correto: a dupla "Range("A1").Select" mais "Selection.Font.Bold = True" vira "Range("A1").Font.Bold = True". A macro continua entregando o mesmo resultado de antes, só que com menos linhas. Se quebrar, o aluno usa Ctrl + Z no Editor e refaz um corte de cada vez.`,
    },
    {
      titulo: `O botão e o teste real`,
      tipo: `Em dupla`,
      tempo: `15 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno cria um botão para a própria macro e depois testa a macro do colega com dados de verdade. Quem testa age como "controle de qualidade": tenta quebrar a macro usando uma lista maior ou diferente. Garanta que a ligação do botão à macro foi feita (clique direito, Atribuir Macro).`,
      atividade: `Na aba Desenvolvedor, clique em Inserir, escolha o Botão de Controle de Formulário, desenhe na planilha e ligue à sua macro. Dê um nome ao botão (ex.: Limpar Lista). Troque de computador com o colega: rode o botão dele com dados diferentes e anote tudo que deu errado ou poderia melhorar.`,
      gabarito: `O botão deve executar a macro ao ser clicado. No teste cruzado, espera-se que apareçam problemas reais, e isso é o esperado: a macro pode formatar só as primeiras linhas, ignorar linhas novas, perder a formatação ou não pedir confirmação antes de apagar. Cada dupla termina com pelo menos dois pontos anotados na ficha "Minha Automação".`,
    },
    {
      titulo: `Plano para a entrega`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Feche a aula pedindo que cada aluno organize a lista de melhorias na ficha e a transforme num plano curto para a Aula 8. Ajude a priorizar: o que é essencial para a macro funcionar sempre vem primeiro; enfeites ficam por último. Recolha ou fotografe as fichas para acompanhar o progresso.`,
      atividade: `Na ficha "Minha Automação", escreva: (1) qual tarefa sua macro automatiza; (2) os dois ou três problemas que você encontrou no teste; (3) o que vai ajustar na próxima aula, em ordem de importância. Salve o arquivo .xlsm no pen drive ou na nuvem.`,
      gabarito: `Um plano completo identifica a tarefa, lista problemas concretos do teste e propõe ajustes priorizados. Exemplo: tarefa = limpar e formatar lista de notas; problema = a macro só formata até a linha 10 e ignora notas novas; ajuste prioritário = fazer a macro pegar a lista inteira; ajuste secundário = pintar de vermelho as notas abaixo de 6. O arquivo deve estar salvo em .xlsm e guardado para a Aula 8.`,
    },
  ],
};
