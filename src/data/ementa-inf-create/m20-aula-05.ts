import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Espiando Por Trás: o Código VBA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Abrir o editor VBA com Alt+F11 e descobrir que cada macro gravada virou um código de verdade, identificando suas partes básicas: Sub, End Sub, comentários e as linhas que representam cada ação realizada.`,
  descricao: `Nas aulas anteriores os alunos gravaram macros e criaram botões mágicos sem nunca verem o que acontecia por baixo. Eles apertavam "Gravar", faziam algumas ações e a tarefa ficava automatizada como num passe de mágica. Hoje a cortina se abre: vamos espiar por trás e descobrir que aquela mágica é, na verdade, um código escrito. Cada clique e cada digitação que o aluno gravou foi traduzido pelo Excel para uma linguagem chamada VBA, que significa Visual Basic for Applications.

O coração desta aula é uma janela escondida: o editor VBA, que se abre com o atalho Alt+F11. É um ambiente separado, com fundo claro e um painel à esquerda, onde mora todo o código das macros. Quando o aluno abre esse editor e dá dois cliques no módulo da sua própria macro, ele finalmente lê, em texto, aquilo que antes era só movimento na tela. É um momento de descoberta: "então era isto que estava acontecendo o tempo todo!".

O foco não é escrever código ainda, e sim reconhecer suas partes. Toda macro começa com a palavra Sub seguida do nome dela e termina com End Sub. No meio ficam as linhas de ação, uma para cada coisa que o aluno fez durante a gravação, e os comentários, que são lembretes em verde que o computador ignora. O aluno vai aprender a apontar onde cada coisa está, como quem aprende a ler um mapa antes de dirigir por ele.

Esta aula é a ponte entre gravar e programar. Até aqui o aluno foi um usuário de macros; a partir de agora ele começa a ser um leitor de código, e na próxima aula passará a mexer nele. Ver que o código não é um bicho de sete cabeças, e sim uma lista organizada de instruções em inglês simples, derruba o medo e prepara o terreno para a automação que cada um vai construir até o fim do mês.`,
  materiais: [
    `Computadores com Excel instalado e a guia Desenvolvedor já habilitada (Arquivo, Opções, Personalizar Faixa de Opções, marcar Desenvolvedor)`,
    `Projetor ou tela grande para o professor demonstrar o editor VBA passo a passo`,
    `Arquivo de exemplo .xlsm (pasta de trabalho habilitada para macros) com uma macro simples já gravada, por exemplo formatar um título em negrito e azul`,
    `Cada aluno com a própria pasta de trabalho .xlsm que contém a macro que ele gravou nas aulas anteriores`,
    `Folha ou slide de apoio mostrando a estrutura básica: Sub, linhas de ação, comentário e End Sub`,
    `Bloco de notas ou caderno para os alunos anotarem o que cada linha do código faz`,
  ],
  conceitosChave: [
    `VBA — sigla de Visual Basic for Applications, a linguagem de programação que o Excel usa para guardar e executar as macros.`,
    `Editor VBA — a janela separada onde mora o código das macros, aberta com o atalho Alt+F11.`,
    `Módulo — a folha de código, listada no painel da esquerda do editor, onde as macros gravadas ficam escritas.`,
    `Sub — a palavra que marca o início de uma macro; vem seguida do nome dela e de parênteses, por exemplo Sub FormatarTitulo().`,
    `End Sub — a linha que marca o fim da macro; tudo o que está entre Sub e End Sub é o conteúdo da automação.`,
    `Comentário — uma linha que começa com apóstrofo (') e aparece em verde; serve de lembrete para humanos e é totalmente ignorada pelo computador.`,
    `Linha de ação — cada linha de código que representa uma coisa que o aluno fez durante a gravação, como selecionar uma célula ou deixar um texto em negrito.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa saber programar para dar esta aula. Precisa apenas saber abrir uma janela e apontar quatro coisas dentro dela. O editor VBA é uma janela separada do Excel que se abre com Alt+F11 (segure a tecla Alt e aperte F11). Para fechar e voltar à planilha, use o mesmo atalho ou Alt+Q. No lado esquerdo do editor há um painel chamado Project Explorer, com uma pasta "Módulos"; dentro dela ficam os módulos (Módulo1, Módulo2). Dando dois cliques num módulo, o código aparece na área grande da direita. Antes da aula, abra o arquivo de exemplo, aperte Alt+F11, dê dois cliques no Módulo1 e leia o código uma vez. Repare que ele sempre tem este formato: começa com Sub NomeDaMacro(), tem linhas no meio e termina com End Sub. As linhas verdes que começam com apóstrofo são comentários. Se o painel da esquerda não aparecer, vá ao menu Exibir (View) e clique em Project Explorer, ou use Ctrl+R.

## Passo a passo da aula

Aquecimento e revisão (10 min): retome a aula passada. Pergunte: "Quando vocês gravam uma macro, para onde vai tudo o que vocês fazem?". Ouça os palpites. Diga que hoje vão finalmente descobrir o esconderijo. No projetor, com o arquivo de exemplo aberto, rode a macro pelo botão para lembrar o efeito dela.

Conteúdo novo guiado (15 min): no projetor, aperte Alt+F11 com calma e diga o nome da janela: editor VBA. Mostre o painel da esquerda, abra a pasta Módulos e dê dois cliques no Módulo1. O código surge à direita. Aponte, em ordem: a primeira linha, que começa com Sub e tem o nome da macro; a última linha, End Sub; as linhas verdes com apóstrofo, que são comentários; e as linhas do meio, que são as ações. Leia uma linha de ação em voz alta, por exemplo Selection.Font.Bold = True, e traduza: "deixe o texto em negrito".

Mão na massa (25 min): cada aluno abre a própria pasta .xlsm, aperta Alt+F11, dá dois cliques no seu Módulo1 e encontra a macro que gravou. A tarefa é localizar e marcar no caderno quatro elementos: a linha Sub com o nome, a linha End Sub, pelo menos um comentário e duas linhas de ação. Circule pela sala ajudando quem não acha o painel ou o módulo. Peça que tentem adivinhar, pela leitura, o que cada linha de ação faz.

Desafio e compartilhar (10 min): desafie cada aluno a contar quantas linhas de ação a sua macro tem e a escolher a linha que ele mais entende para explicar a um colega. Dois ou três alunos mostram no projetor a própria macro e leem em voz alta a linha que escolheram, dizendo o que ela faz.

## Como explicar de forma clara

Use a imagem da cortina e dos bastidores: "A macro é o show; o editor VBA é o que está atrás da cortina". Compare o código com uma receita de bolo: Sub é o "Modo de preparo:", cada linha do meio é um passo da receita e End Sub é o "Pronto, está feito". Diga que os comentários verdes são como bilhetes colados na geladeira, escritos para gente ler, e que o computador nem olha para eles. Repita que o código é só uma lista de ordens em inglês, escrita de cima para baixo. Sempre que ler uma linha, traduza para o português do dia a dia, para que pareça simples e não assustador.

## Erros comuns e como ajudar

O erro mais comum é o aluno não saber que o editor VBA é uma janela separada e achar que sumiu tudo; mostre que basta Alt+F11 para ir e voltar. Outro é não encontrar o painel da esquerda: leve-o ao menu Exibir e clique em Project Explorer. Muitos não acham o módulo porque não abriram a pasta Módulos; clique no sinal de mais para expandir. Alguns abrem um arquivo .xlsx comum, que não guarda macros; confirme que o arquivo é .xlsm. Se a planilha avisar que as macros estão desabilitadas, clique em "Habilitar Conteúdo" na barra amarela. Por fim, há quem queira já apagar ou mudar o código; segure esse impulso e explique que hoje só vamos ler e reconhecer; mexer é a aula da semana que vem.`,
  exercicios: [
    {
      titulo: `Abrindo a cortina com Alt+F11`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre uma vez no projetor o caminho completo: Alt+F11, painel da esquerda, pasta Módulos, dois cliques no Módulo1. Depois deixe cada aluno repetir na própria pasta de trabalho. Confirme que todos chegaram a ver o código.`,
      atividade: `Abra a sua pasta de trabalho com a macro que você gravou. Aperte Alt+F11 para abrir o editor VBA. No painel da esquerda, abra a pasta Módulos e dê dois cliques no Módulo1. Pronto: o código da sua macro deve aparecer na área grande da direita.`,
      gabarito: `O aluno abre o editor VBA com Alt+F11, expande a pasta Módulos no Project Explorer e, com dois cliques no Módulo1, faz o código aparecer à direita. Sucesso é ter o texto da macro visível na tela, começando com Sub e terminando com End Sub.`,
    },
    {
      titulo: `Caça às quatro partes`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre as quatro partes na folha de apoio: Sub, End Sub, comentário e linha de ação. Peça que copiem cada uma no caderno. Circule conferindo se acertaram, principalmente o comentário em verde.`,
      atividade: `No código da sua macro, encontre e copie no caderno quatro coisas: 1) a linha que começa com Sub e o nome da sua macro; 2) a linha End Sub; 3) uma linha de comentário (verde, começa com apóstrofo); 4) duas linhas de ação do meio.`,
      gabarito: `O caderno mostra a linha Sub com o nome correto da macro, a linha End Sub, uma linha verde de comentário começando com apóstrofo e duas linhas de ação. Exemplo de acerto: Sub FormatarTitulo(), uma linha como ' Macro gravada por mim, Selection.Font.Bold = True e Range("A1").Select, com End Sub no fim.`,
    },
    {
      titulo: `Tradutores de código em dupla`,
      tipo: `Em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Ensine a técnica de ler uma linha e traduzir para o português do dia a dia. Dê um exemplo no projetor antes. Lembre que não é para acertar termos técnicos, e sim entender a ideia da ação.`,
      atividade: `Em dupla, escolham três linhas de ação do código de um de vocês. Para cada linha, escrevam em uma frase simples o que vocês acham que ela faz. Por exemplo, Selection.Font.Bold = True pode virar "deixa o texto em negrito".`,
      gabarito: `A dupla escolhe três linhas de ação e escreve, para cada uma, uma tradução em português que descreva a ação. As traduções não precisam ser perfeitas, mas devem captar a ideia, como negrito, selecionar célula, mudar cor ou copiar. Sucesso é a dupla relacionar cada linha a algo que realmente fizeram durante a gravação.`,
    },
    {
      titulo: `Roda de conversa: a mágica explicada`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza uma conversa curta para fixar que a macro virou código. Use as imagens da cortina e da receita. O objetivo é que percebam, com as próprias palavras, que não existe mágica, e sim instruções escritas.`,
      atividade: `Em roda, cada aluno responde: depois de espiar por trás, o que é uma macro de verdade? Onde fica o código dela e o que acontece com cada ação que a gente grava? Por que os comentários verdes não atrapalham o computador?`,
      gabarito: `Espera-se que os alunos digam que a macro é um código escrito em VBA, guardado no editor que se abre com Alt+F11, dentro de um módulo. Devem perceber que cada ação gravada virou uma linha de ação. Sobre os comentários, a boa resposta é que são bilhetes para humanos lerem e o computador os ignora por começarem com apóstrofo.`,
    },
    {
      titulo: `Projeto curto: o mapa da minha macro`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Esta é a entrega da aula e prepara a próxima, em que vão mexer no código. Garanta que cada aluno produza um mapa escrito da própria macro, identificando início, fim, comentários e a sequência das ações. Peça que mostrem ao colega ao lado.`,
      atividade: `Monte no caderno o "mapa da sua macro". Anote, em ordem de cima para baixo: a linha Sub com o nome, cada comentário que encontrar, a lista numerada das linhas de ação com uma tradução curta de cada uma, e a linha End Sub no fim. No final, conte quantas linhas de ação a sua macro tem.`,
      gabarito: `O mapa entregue mostra, na ordem correta, a linha Sub com o nome da macro, os comentários, as linhas de ação numeradas com tradução curta e a linha End Sub. O aluno informa o número total de linhas de ação e esse número corresponde ao código real. Resultado esperado: um mapa fiel da macro, pronto para servir de guia na aula em que o código será modificado.`,
    },
  ],
};
