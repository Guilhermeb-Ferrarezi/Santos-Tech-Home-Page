import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Entrega: Tarefa no Piloto Automático",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, testar e documentar a macro do mês, garantindo que ela roda por botão ou atalho, e apresentá-la mostrando o antes, o depois e o tempo economizado.`,
  descricao: `Esta é a aula de entrega do mês. Durante quatro semanas o aluno descobriu o robô que mora dentro do Excel, gravou suas primeiras macros, criou botões e atalhos, abriu o editor VBA e leu o código por trás da automação. Agora chegou a hora de juntar tudo: cada aluno tem uma tarefa repetitiva escolhida por ele e uma macro que faz essa tarefa sozinha. Nesta aula ele transforma o rascunho em um produto pronto, testado e documentado.

A palavra-chave do dia é confiabilidade. Uma macro só vale de verdade quando funciona sempre, mesmo quando outra pessoa abre o arquivo e clica no botão. Por isso o aluno vai testar a macro do zero, em uma planilha limpa, anotar se algum passo deu errado e corrigir. Em seguida vai escrever uma pequena documentação dentro do próprio arquivo: o que a macro faz, como ela é acionada e qual problema ela resolve. Documentar é o que separa um truque pessoal de uma ferramenta que qualquer pessoa consegue usar.

A segunda metade da aula é a apresentação. Cada aluno mostra à colega ou à turma o antes (a tarefa feita na mão, demorada e repetitiva) e o depois (um clique e tudo pronto). O ponto alto é o tempo economizado: o aluno cronometra a tarefa manual, compara com o tempo da macro e calcula quantos minutos por dia, por semana ou por mês a automação devolve para ele. Esse número concreto faz a ideia de produtividade ficar real.

Como é a última aula do mês, o clima é de celebração e fechamento. O professor reforça que escrever e usar uma macro foi o primeiro grande passo do aluno como alguém que faz o computador trabalhar por ele, e não o contrário. Não há conteúdo novo de VBA aqui: o foco é consolidar, testar, documentar e comunicar o que já foi construído.`,
  materiais: [
    `Computadores com Microsoft Excel instalado e o editor VBA acessível (aba Desenvolvedor já habilitada)`,
    `Projetor ou TV para o professor demonstrar e para os alunos apresentarem`,
    `Arquivo de exemplo do professor: uma planilha com a macro do mês já pronta, testada e documentada (modelo de referência)`,
    `Planilha pessoal de cada aluno, com a macro que ele vem construindo desde a Aula 7, salva em formato .xlsm`,
    `Uma planilha de teste limpa (sem a macro) para validar a automação do zero`,
    `Cronômetro ou o relógio do celular para medir o tempo da tarefa manual e da macro`,
    `Folha ou slide simples de apresentação com três campos: Antes, Depois, Tempo economizado`,
  ],
  conceitosChave: [
    `Macro — uma sequência de passos gravada ou escrita em VBA que o Excel executa sozinho quando você aciona.`,
    `Teste — rodar a macro de propósito para conferir se ela funciona certo em situações diferentes, antes de confiar nela.`,
    `Documentar — escrever de forma simples o que a macro faz, como acioná-la e qual problema resolve, para que qualquer pessoa entenda.`,
    `Comentário no VBA — texto explicativo dentro do código, escrito após um apóstrofo ('), que o Excel ignora mas ajuda a pessoa a entender.`,
    `Arquivo .xlsm — formato de planilha habilitada para macros; um arquivo .xlsx comum apaga as macros ao salvar.`,
    `Tempo economizado — a diferença entre o tempo da tarefa feita na mão e o tempo da macro; é a prova de que a automação vale a pena.`,
    `Confiabilidade — a qualidade de uma macro que funciona sempre do mesmo jeito, mesmo para outra pessoa que abra o arquivo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar VBA para conduzir esta aula. Ela é de fechamento: os alunos já têm a macro pronta das aulas anteriores. Seu papel é ajudá-los a testar, documentar e apresentar. Tenha em mãos o arquivo de exemplo já testado para mostrar como fica um trabalho concluído.

Três lembretes técnicos que resolvem 90 por cento dos problemas: 1) macros só sobrevivem em arquivos salvos como .xlsm (Pasta de Trabalho Habilitada para Macros); 2) ao abrir o arquivo pode aparecer um aviso amarelo de segurança — basta clicar em Habilitar Conteúdo; 3) um comentário no VBA começa com um apóstrofo (') e serve para explicar o código sem afetar a execução.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma em roda. Pergunte qual tarefa cada um automatizou e quanto tempo ela costuma levar na mão. Abra seu arquivo de exemplo, clique no botão da macro e mostre tudo acontecendo em um segundo. Diga: hoje vamos deixar a sua pronta para entregar.

Conteúdo novo guiado (15 min): com o projetor, ensine o checklist de entrega usando seu arquivo. Primeiro, o teste: feche o arquivo, abra de novo, clique em Habilitar Conteúdo e rode a macro pelo botão e pelo atalho. Segundo, a documentação dentro do código: na aba Desenvolvedor, clique em Visual Basic (ou tecle Alt+F11), dê dois cliques no Módulo na coluna da esquerda e, logo acima da linha Sub, escreva comentários como: ' Esta macro organiza a lista de notas e pinta os aprovados de verde. ' Para rodar: botão Organizar ou Ctrl+Shift+O. Terceiro, salve com Ctrl+B e confirme que o formato é .xlsm.

Mão na massa (25 min): cada aluno aplica o mesmo checklist na própria macro. Circule pela sala. Peça que testem em uma planilha limpa, escrevam pelo menos duas linhas de comentário acima do Sub, confirmem que o botão e o atalho funcionam e salvem em .xlsm. Quando terminarem, peça que preparem o cartão de apresentação com três campos: Antes, Depois e Tempo economizado. Para o tempo, oriente a cronometrar a tarefa na mão e comparar com o clique da macro.

Desafio e compartilhar (10 min): forme duplas ou faça em roda. Cada aluno mostra à colega o antes e o depois, roda a macro ao vivo e diz quantos minutos por semana economiza. Feche celebrando: cada um automatizou uma tarefa de verdade.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do robô assistente: a macro é um ajudante que faz a parte chata sempre igual, sem reclamar e sem errar. Diga que testar é como provar a comida antes de servir aos convidados — você confere se está bom antes de confiar. Compare documentar com deixar um bilhete na geladeira: quem chegar depois entende sozinho como usar. E mostre que o tempo economizado é o prêmio: se a tarefa levava cinco minutos por dia, a macro devolve mais de duas horas por mês para fazer algo melhor.

## Erros comuns e como ajudar

As macros sumiram ao salvar: o aluno salvou como .xlsx. Oriente Arquivo, Salvar como, e escolher Pasta de Trabalho Habilitada para Macros (.xlsm).

A macro não roda ao reabrir: faltou clicar em Habilitar Conteúdo na barra amarela. Mostre onde fica.

O botão sumiu ou aponta para o lugar errado: clique com o botão direito no botão, escolha Atribuir Macro e selecione a macro certa.

O atalho não funciona: na aba Desenvolvedor, clique em Macros, selecione a macro, Opções, e confira a tecla de atalho.

Comentário aparece como erro: confira se a linha começa com apóstrofo (') e não com aspas. Lembre que cada comentário ocupa a própria linha.`,
  exercicios: [
    {
      titulo: `Checklist de teste da macro`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Projete o checklist e faça junto com a turma no seu arquivo, depois deixe cada aluno repetir no próprio. Reforce que testar é fechar e reabrir o arquivo, não apenas rodar com tudo aberto.`,
      atividade: `Teste a sua macro seguindo os passos: 1) salve e feche o arquivo; 2) abra de novo e clique em Habilitar Conteúdo na barra amarela; 3) rode a macro pelo botão; 4) desfaça com Ctrl+Z e rode de novo pelo atalho de teclado; 5) anote se algo deu errado.`,
      gabarito: `A macro executa a mesma tarefa corretamente das duas formas (botão e atalho). O aviso de segurança foi tratado com Habilitar Conteúdo. Se algo falhou, o aluno anotou o problema (ex.: botão sem macro atribuída, arquivo salvo como .xlsx) e corrigiu antes de seguir.`,
    },
    {
      titulo: `Bilhete dentro do código`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Mostre no projetor como abrir o editor com Alt+F11 e onde escrever os comentários (logo acima da linha Sub). Lembre que comentário começa com apóstrofo e fica esverdeado na tela.`,
      atividade: `Abra o editor VBA (Alt+F11), entre no seu Módulo e escreva, acima da linha Sub, pelo menos três linhas de comentário: o que a macro faz, como acioná-la (botão e atalho) e qual problema ela resolve. Depois salve com Ctrl+B em formato .xlsm.`,
      gabarito: `Há pelo menos três linhas começando com apóstrofo (') acima do Sub, em texto claro, por exemplo: ' Macro Organizar: ordena a lista e pinta os aprovados de verde. ' Para rodar: botão Organizar ou Ctrl+Shift+O. ' Resolve a tarefa de conferir as notas uma a uma. O arquivo foi salvo como .xlsm e as macros continuam funcionando ao reabrir.`,
    },
    {
      titulo: `Cronômetro: antes e depois`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Empreste cronômetros ou deixe usarem o celular. Ajude na conta do tempo economizado: peça que multipliquem a diferença pela frequência da tarefa (por dia, semana ou mês).`,
      atividade: `Faça a sua tarefa repetitiva totalmente na mão e cronometre. Depois rode a macro e cronometre de novo. Calcule o tempo economizado em um uso e estime quanto seria por semana, considerando quantas vezes a tarefa aconteceria.`,
      gabarito: `O aluno apresenta três números: tempo manual, tempo da macro e a diferença. Exemplo: 4 minutos na mão, 3 segundos com a macro, economia de quase 4 minutos por uso; se a tarefa acontece 5 vezes por semana, são cerca de 20 minutos economizados por semana. Qualquer estimativa coerente com os tempos medidos é válida.`,
    },
    {
      titulo: `Troca de robôs em dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Cada aluno usa a macro do colega seguindo apenas os comentários que o colega escreveu. É o teste real da documentação: se o colega consegue usar sozinho, a documentação está boa.`,
      atividade: `Sente na máquina do colega. Sem que ele explique, leia os comentários no código e tente acionar a macro dele pelo botão e pelo atalho. Depois dê um retorno: o que estava claro e o que faltou explicar.`,
      gabarito: `O colega consegue rodar a macro usando só a documentação, sem ajuda falada. Se não conseguiu, identificou o que faltou (ex.: o atalho não estava anotado, faltou dizer em qual aba clicar) e o autor da macro melhora os comentários. Retorno respeitoso e específico conta como acerto.`,
    },
    {
      titulo: `Apresentação: tarefa no piloto automático`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `12 min`,
      guiaProfessor: `Conduza as apresentações no projetor, uma de cada vez. Mantenha o clima de celebração. Garanta que cada aluno mostre os três pontos: antes, depois e tempo economizado, rodando a macro ao vivo.`,
      atividade: `Apresente à turma a sua automação. Mostre o antes (a tarefa feita na mão), rode a macro ao vivo para mostrar o depois, e diga o tempo economizado por semana ou por mês. Termine respondendo: que outra tarefa repetitiva você gostaria de automatizar a seguir?`,
      gabarito: `O aluno apresenta a macro funcionando ao vivo, descreve com clareza o problema antes e a solução depois, e informa um número de tempo economizado coerente com sua medição. O arquivo está salvo em .xlsm, a macro roda por botão ou atalho e está documentada. O aluno consegue citar pelo menos uma próxima tarefa que gostaria de automatizar.`,
    },
  ],
};
