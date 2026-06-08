import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a Automação na Nuvem",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Planejar e começar a construir o projeto final, definindo o objetivo do robô e escrevendo a estrutura principal do código que une planilha, condições, laços, gatilho e Gmail.`,
  descricao: `Esta é a aula em que tudo o que o aluno aprendeu no mês se encontra. Nas seis aulas anteriores, ele escreveu o primeiro código de verdade, aprendeu decisões e repetições, conversou com a planilha, leu e transformou dados, fez o código rodar sozinho com gatilhos e enviou e-mails automáticos. Agora chegou a hora de juntar essas peças em uma única automação útil que roda na nuvem do Google. O objetivo não é terminar o robô hoje, e sim planejá-lo bem e montar o esqueleto do código.

A ideia central é que toda automação séria começa por um plano, não por sair digitando código. O aluno vai escolher um problema real e pequeno do seu dia a dia, como avisar quando uma tarefa está atrasada, mandar um lembrete de aniversário ou organizar uma lista de presença. Em seguida, ele descreve em palavras simples o que o robô deve fazer, passo a passo, e só depois transforma esse plano em uma função principal no Apps Script.

Nesta aula, o foco é a estrutura, ou seja, o desenho geral do programa. O aluno cria a planilha base com as colunas certas, escreve uma função principal com um nome claro e, dentro dela, deixa marcado com comentários onde vai entrar cada parte: ler os dados, percorrer as linhas com um laço, decidir com uma condição e, no final, enviar o e-mail. É como montar o contorno de um desenho antes de pintar.

Ao terminar, cada aluno sai com um projeto pessoal definido, uma planilha pronta e uma função principal que já roda sem erro, mesmo que ainda esteja quase vazia. Esse esqueleto será preenchido e apresentado na Aula 8. O professor não precisa dominar programação para conduzir: basta seguir o passo a passo, valorizar o planejamento e lembrar que código bom nasce de uma boa ideia bem organizada.`,
  materiais: [
    `Computadores com navegador e conta Google (Google Planilhas e Apps Script disponíveis e já testados nas aulas anteriores)`,
    `Projetor para o professor mostrar a tela, o menu Extensões e o editor do Apps Script`,
    `Planilha de exemplo pronta chamada "Robô do Aluno" com as colunas Tarefa, Responsável, Prazo, Status e E-mail`,
    `Folha de planejamento impressa (ou documento) com os campos: o que meu robô faz, quais dados ele lê, qual decisão ele toma, o que ele envia`,
    `Conta de e-mail (Gmail) dos alunos liberada para testes, como nas aulas 5 e 6`,
    `Quadro ou slide com o "mapa do robô" mostrando as cinco peças: planilha, ler dados, laço, condição, e-mail`,
  ],
  conceitosChave: [
    `Automação na nuvem — programa que roda nos servidores do Google sozinho, sem precisar do computador do aluno ligado.`,
    `Função principal — a função que comanda todo o robô e chama, em ordem, as outras partes do programa.`,
    `Estrutura do código — o esqueleto do programa, com as partes organizadas na ordem certa antes de preencher os detalhes.`,
    `Comentário — texto após // que o computador ignora; serve para o programador anotar o que cada parte faz.`,
    `Planejamento — descrever em palavras o que o robô deve fazer antes de escrever o código.`,
    `Integração — juntar várias peças (planilha, condição, laço, gatilho e Gmail) para que trabalhem como um só programa.`,
    `Pseudocódigo — plano escrito em português, passo a passo, que depois vira código de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. O segredo aqui é o planejamento. O aluno já viu todas as peças nas aulas anteriores; hoje ele só vai escolher um problema e montar o esqueleto do código. Uma função no Apps Script é só um bloco que começa com a palavra "function", tem um nome e abre chaves. Dentro dela, escrevemos comentários (linhas que começam com //) para marcar onde cada parte vai entrar. O computador ignora os comentários, então o código roda mesmo quase vazio. Tenha a planilha de exemplo "Robô do Aluno" já aberta no seu computador e teste uma vez antes da aula.

## Passo a passo da aula

Aquecimento (10 min): Abra o projetor e pergunte à turma: "Se você pudesse ter um robô que faz uma tarefa chata por você, o que ele faria?". Anote três ideias no quadro. Relembre as cinco peças que eles já dominam mostrando o "mapa do robô": planilha, ler dados, laço, condição e e-mail. Diga que hoje eles vão juntar tudo.

Conteúdo novo guiado (15 min): Mostre na sua tela como se planeja antes de codar. Preencha junto com a turma a folha de planejamento com o seu exemplo: "Meu robô avisa por e-mail quem tem tarefa atrasada". Depois abra a planilha, vá em Extensões e clique em Apps Script. No editor, apague o conteúdo e digite a função principal devagar, falando cada parte:

function rodarRobo() {
  // 1. Ler os dados da planilha
  // 2. Percorrer cada linha com um laço
  // 3. Decidir com uma condição quem está atrasado
  // 4. Enviar o e-mail de aviso
}

Clique no ícone de Salvar (o disquete). Escolha "rodarRobo" na lista ao lado do botão Executar e clique em Executar. Mostre que rodou sem erro, mesmo vazia, porque só tem comentários.

Mão na massa (25 min): Cada aluno cria a própria planilha base com as colunas Tarefa, Responsável, Prazo, Status e E-mail, e preenche três a quatro linhas de exemplo (pode usar nomes da turma e o próprio e-mail). Depois abre Extensões, Apps Script, digita a sua função principal com os comentários das quatro etapas, salva e executa para confirmar que não dá erro. Circule pela sala ajudando com os nomes das colunas e com a digitação da função. O importante é que cada um saia com planejamento feito, planilha pronta e função rodando.

Desafio e compartilhar (10 min): Peça que cada aluno escreva, abaixo dos comentários, uma frase em português explicando o que o robô fará quando estiver pronto. Em seguida, dois ou três voluntários mostram o seu plano e a sua função na tela do projetor. Encerre dizendo que na próxima aula eles vão preencher esse esqueleto e apresentar o robô funcionando.

## Como explicar de forma clara

Use a imagem de montar um móvel: primeiro a gente lê o manual e separa as peças (planejamento), depois monta a estrutura (a função com comentários) e só no fim aperta cada parafuso (o código de cada etapa). Diga que comentário é como um post-it: lembra o que falta fazer e não atrapalha. Reforce que ninguém escreve um programa inteiro de uma vez; profissionais sempre começam pelo esqueleto.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de fechar as chaves; mostre que toda chave que abre precisa fechar. Outro é o aluno querer escrever todo o código de uma vez e travar; lembre que hoje é só o esqueleto. Alguns esquecem de salvar antes de executar (ícone de disquete) e acham que nada mudou. Há também quem escolha um robô grande demais; ajude a reduzir para algo pequeno e possível. Se o nome da função tiver espaço ou acento, dará erro: use nomes como "rodarRobo", sem espaços. Por fim, garanta que cada aluno selecionou a função certa na lista ao lado do botão Executar.`,
  exercicios: [
    {
      titulo: `Desenhando o mapa do meu robô`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma e peça que cada aluno diga, em uma frase, qual tarefa chata gostaria de automatizar. Anote no quadro e ajude a turma a perceber quais ideias são pequenas o bastante para um robô de planilha e e-mail.`,
      atividade: `Pense em uma tarefa repetitiva do seu dia a dia que poderia ser feita por um robô. Diga em voz alta, em uma frase, o que esse robô faria. Depois aponte, no mapa do robô, quais das cinco peças (planilha, ler dados, laço, condição, e-mail) o seu robô vai usar.`,
      gabarito: `Resposta de exemplo: "Meu robô avisa por e-mail quem ainda não entregou a tarefa." Peças usadas: planilha (lista de tarefas), ler dados, laço (percorrer cada pessoa), condição (status diferente de "entregue") e e-mail (aviso). Qualquer ideia pequena que use planilha mais e-mail está correta; oriente o aluno a evitar robôs grandes demais.`,
    },
    {
      titulo: `Montando a planilha base`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criação da planilha. Confira se os títulos das colunas estão na primeira linha e se há pelo menos três linhas de exemplo. Verifique se a coluna E-mail tem endereços válidos para os testes futuros.`,
      atividade: `Crie uma planilha no Google Planilhas com as colunas Tarefa, Responsável, Prazo, Status e E-mail na primeira linha. Preencha três ou quatro linhas de exemplo, usando o seu próprio e-mail em pelo menos uma delas. Salve e renomeie a planilha para "Robô do (seu nome)".`,
      gabarito: `A planilha deve ter, na linha 1, os títulos: Tarefa, Responsável, Prazo, Status e E-mail. Abaixo, de três a quatro linhas preenchidas, por exemplo: "Lição de mate | Ana | 05/06 | Pendente | ana@email.com". O Google Planilhas salva sozinho. O nome do arquivo deve estar personalizado com o nome do aluno.`,
    },
    {
      titulo: `Escrevendo a função principal`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o caminho Extensões, depois Apps Script. Acompanhe a digitação da função e dos quatro comentários. Lembre os alunos de salvar (ícone de disquete) e de selecionar a função certa antes de clicar em Executar.`,
      atividade: `Na sua planilha, abra Extensões e clique em Apps Script. Apague o conteúdo e escreva uma função chamada rodarRobo com quatro comentários, um para cada etapa: ler os dados, percorrer com laço, decidir com condição e enviar o e-mail. Salve e execute para confirmar que roda sem erro.`,
      gabarito: `O código esperado é:

function rodarRobo() {
  // 1. Ler os dados da planilha
  // 2. Percorrer cada linha com um laço
  // 3. Decidir com uma condição quem está atrasado
  // 4. Enviar o e-mail de aviso
}

Ao executar, não deve aparecer erro vermelho, pois o corpo só tem comentários. Se aparecer erro, geralmente é chave não fechada ou nome da função com espaço ou acento.`,
    },
    {
      titulo: `Revisão em dupla do plano e do esqueleto`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno explica ao colega o que o seu robô fará e mostra a função principal. Oriente as duplas a checar a lista de verificação. Circule confirmando que ambos têm planilha, função e plano escrito.`,
      atividade: `Em dupla, mostre ao colega a sua planilha e a sua função rodarRobo. Depois confira juntos esta lista: a planilha tem as cinco colunas; a função tem nome sem espaços; existem os quatro comentários na ordem certa; a função roda sem erro. Anote uma sugestão de melhoria para o robô do colega.`,
      gabarito: `A dupla considera o esqueleto pronto quando todos os quatro itens da lista estão marcados: cinco colunas na planilha, função com nome válido, quatro comentários em ordem e execução sem erro. A sugestão de melhoria pode ser, por exemplo: "Adicionar uma coluna de data para avisar só quem passou do prazo." Qualquer sugestão coerente com planilha e e-mail é válida.`,
    },
    {
      titulo: `Projeto curto: traduzindo o plano em pseudocódigo`,
      tipo: `Projeto curto e desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o item mais difícil. Peça que o aluno escreva, em português dentro de cada comentário, o detalhe do que aquela etapa fará no robô dele. Não é para programar ainda, e sim deixar o plano claro. Ajude quem travar a usar frases simples começando por um verbo.`,
      atividade: `Complete cada um dos quatro comentários da sua função com uma frase em português, bem específica, dizendo o que aquela etapa fará no seu robô. Por exemplo, na condição, escreva exatamente qual situação faz o robô agir. Esse plano detalhado será o seu guia para programar na próxima aula.`,
      gabarito: `Exemplo de função com pseudocódigo detalhado:

function rodarRobo() {
  // 1. Ler todas as linhas da planilha "Robô do aluno"
  // 2. Percorrer da linha 2 até a última com um laço
  // 3. Se o Status for "Pendente", marcar para avisar
  // 4. Enviar e-mail para a pessoa com a tarefa atrasada
}

Está correto quando cada comentário descreve uma ação clara, específica e na ordem certa. A etapa da condição deve dizer qual situação aciona o robô (por exemplo, Status igual a "Pendente"). O conteúdo varia conforme o projeto de cada aluno.`,
    },
  ],
};
