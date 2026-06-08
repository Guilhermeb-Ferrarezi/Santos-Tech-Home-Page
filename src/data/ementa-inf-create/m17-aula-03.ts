import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Apps Script: o robô da planilha",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Apresentar o Google Apps Script como a ferramenta que permite criar automações em JavaScript dentro do Google Planilhas, mostrando o que é, para que serve e onde encontrá-lo no menu Extensões.`,
  descricao: `Até agora os alunos resolveram problemas nas planilhas usando fórmulas como PROCX, SE e filtros. As fórmulas são poderosas, mas têm um limite: elas ficam paradas dentro de uma célula esperando dados e só calculam aquilo que pedimos, célula por célula. Nesta aula descobrimos uma nova camada de superpoder: o Google Apps Script, uma forma de dar ordens à planilha por meio de código de verdade.

O Apps Script é uma ferramenta gratuita que já vem dentro do Google Planilhas, escondida no menu Extensões. Com ela escrevemos pequenos programas que podem fazer tarefas repetitivas sozinhos, como pintar células, somar valores, enviar um aviso ou organizar uma lista, tudo com um único clique. É a diferença entre pedir para alguém calcular uma conta (fórmula) e contratar um robô que faz a tarefa inteira por você (script). Por isso a aula se chama o robô da planilha.

A grande novidade desta aula é que esse robô fala JavaScript, a mesma linguagem que faz os sites e os jogos da internet funcionarem. Ou seja, os alunos vão escrever, pela primeira vez, código de uma linguagem de programação profissional e de verdade. Nesta aula o objetivo não é ainda programar muito, e sim conhecer o terreno: abrir o editor, entender a tela, descobrir onde o código mora e enxergar a diferença entre uma fórmula e uma automação.

É uma aula de descoberta e de empolgação. O professor não precisa ser um programador experiente: basta seguir o passo a passo, abrir o editor junto com a turma e celebrar o momento em que a planilha mostra uma mensagem criada por código escrito pelo próprio aluno. Esse primeiro contato prepara o caminho para as aulas seguintes, em que os alunos vão escrever seus próprios scripts completos.`,
  materiais: [
    `Computadores (um por aluno) com navegador Chrome e acesso à internet`,
    `Conta Google (escolar ou pessoal) já logada em cada computador para usar o Google Planilhas e o Apps Script`,
    `Projetor ou tela grande para o professor demonstrar onde clicar`,
    `Uma planilha de exemplo pronta no Google Drive chamada "Robô da Planilha", com uma lista simples (nomes e notas) para a turma copiar`,
    `Slide ou cartaz com a frase: "Fórmula calcula uma célula. Script automatiza a tarefa inteira."`,
    `Folha impressa ou arquivo com o código de exemplo da aula, para os alunos digitarem`,
    `Acesso liberado ao domínio script.google.com (verificar com a equipe de TI antes da aula)`,
  ],
  conceitosChave: [
    `Apps Script — ferramenta gratuita do Google que permite escrever código para automatizar o Google Planilhas e outros aplicativos.`,
    `Automação — fazer o computador realizar uma tarefa sozinho, sem precisar repetir os mesmos cliques toda vez.`,
    `JavaScript — linguagem de programação usada pelo Apps Script; a mesma que faz sites e jogos funcionarem na internet.`,
    `Editor de código — a tela do Apps Script onde escrevemos e guardamos os scripts; é diferente da planilha.`,
    `Menu Extensões — o menu do Google Planilhas onde fica o atalho "Apps Script" para abrir o editor.`,
    `Função — um bloco de código com um nome que guarda uma sequência de ordens para o computador executar.`,
    `Executar — mandar o código rodar, ou seja, fazer o robô cumprir as ordens que escrevemos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. O Apps Script é o editor de código que vem dentro do Google Planilhas e usa a linguagem JavaScript. Nesta aula o foco é conhecer o ambiente, não dominar programação. A ideia central que o aluno deve levar para casa é simples: uma fórmula vive dentro de uma célula e calcula um valor; um script é um programa que automatiza uma tarefa inteira com um clique. Antes da aula, faça você mesmo o passo a passo uma vez, do começo ao fim, para se sentir seguro. Tenha a planilha de exemplo "Robô da Planilha" pronta e confirme com o TI que o site script.google.com está liberado.

## Passo a passo da aula

Aquecimento (10 min). Receba a turma com uma pergunta: "Quem já desejou que a planilha fizesse a tarefa chata sozinha?" Relembre rapidamente o PROCX e o SE das aulas anteriores. Explique que hoje vamos conhecer um robô que mora dentro do Google Planilhas e obedece a ordens em código.

Conteúdo novo guiado (15 min). No projetor, abra a planilha de exemplo. Vá ao menu superior e clique em Extensões e depois em Apps Script. Uma nova aba do navegador abre o editor de código. Mostre as três partes: à esquerda o menu lateral com os ícones (Visão geral, Editor, com o símbolo de chaves); no centro a área onde fica o código, com um arquivo chamado Código.gs; e no topo a barra com os botões Salvar (ícone de disquete) e Executar. Explique que esse texto que parece estranho é JavaScript, uma linguagem de programação de verdade, a mesma dos sites. Apague o conteúdo que vier escrito e digite junto com a turma:

function meuPrimeiroRobo() {
  Browser.msgBox("Olá! Eu sou o robô da planilha.");
}

Explique cada parte devagar: a palavra function cria uma função, que é uma caixa com ordens; meuPrimeiroRobo é o nome que demos a ela; as chaves guardam o que o robô vai fazer; e Browser.msgBox manda a planilha mostrar uma mensagem na tela. Clique no disquete para salvar, escolha a função no topo e clique em Executar. Na primeira vez o Google pede autorização: clique em Revisar permissões, escolha a conta e em Permitir. Volte à aba da planilha e mostre a mensagem aparecendo. Comemore esse momento.

Mão na massa (25 min). Cada aluno faz uma cópia da planilha de exemplo (Arquivo, depois Fazer uma cópia), abre Extensões e depois Apps Script, digita a mesma função, salva, executa e autoriza. Circule pela sala ajudando com a autorização, que costuma travar os iniciantes. Quando todos virem a mensagem, peça que troquem o texto dentro das aspas por uma frase própria, salvem e executem de novo.

Desafio e compartilhar (10 min). Desafie a turma a fazer o robô mostrar duas mensagens seguidas, copiando a linha do msgBox. Convide dois ou três alunos a projetar o resultado e ler a mensagem que criaram.

## Como explicar de forma clara

Use a comparação do robô o tempo todo: a fórmula é como uma calculadora que responde uma conta; o script é um ajudante que executa a tarefa inteira sozinho quando você aperta o botão. Compare o editor de código a uma sala dos bastidores, separada do palco que é a planilha. Diga que JavaScript é a língua que o robô entende, igual à língua dos sites e jogos. Reforce que errar uma letra ou esquecer um ponto e vírgula é normal e faz parte de programar.

## Erros comuns e como ajudar

O erro mais frequente é o aluno digitar Browser ou msgBox com letra diferente, pois o JavaScript diferencia maiúsculas de minúsculas; peça que copiem exatamente. Outro tropeço é esquecer de fechar as chaves ou os parênteses, o que gera um erro em vermelho; mostre que cada abre tem um fecha. Muitos esquecem de salvar antes de executar; lembre do disquete. A tela de autorização assusta e alguns clicam em cancelar; explique com calma que é seguro e que precisam clicar em Revisar permissões e Permitir. Por fim, alguns confundem a aba do editor com a aba da planilha; mostre que são duas abas diferentes do navegador e que a mensagem aparece na aba da planilha.`,
  exercicios: [
    {
      titulo: `Caça ao menu: onde mora o robô?`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Atividade de aquecimento individual. Garanta que todos estejam com a planilha de exemplo aberta. O objetivo é apenas localizar o caminho até o editor, sem digitar código ainda.`,
      atividade: `Abra a planilha de exemplo. Encontre no menu superior o caminho que abre o editor de código do Apps Script. Anote em uma célula qual menu você usou e em qual opção clicou.`,
      gabarito: `O caminho é o menu Extensões e depois a opção Apps Script. Ao clicar, abre-se uma nova aba do navegador com o editor de código e um arquivo chamado Código.gs.`,
    },
    {
      titulo: `Fórmula ou automação?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a discussão em grupo. Leia cada situação em voz alta e peça que a turma decida se é tarefa para fórmula ou para script, justificando. Aceite respostas com bom raciocínio mesmo que diferentes.`,
      atividade: `Para cada situação, diga se é melhor resolver com FÓRMULA ou com SCRIPT e explique por quê: 1) somar a coluna de notas; 2) com um clique, pintar de verde todos os aprovados e enviar um aviso; 3) procurar a nota de um aluno pelo nome; 4) toda manhã organizar a lista e mostrar uma mensagem de resumo.`,
      gabarito: `1) Fórmula (SOMA): é um cálculo simples de uma célula. 2) Script: junta várias ações em um clique. 3) Fórmula (PROCX): é uma busca pontual. 4) Script: é uma tarefa repetitiva e automática. A regra: cálculo de um valor é fórmula; tarefa inteira automatizada é script.`,
    },
    {
      titulo: `Meu primeiro robô fala`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a digitação no projetor. Ajude principalmente na tela de autorização, que costuma travar. Confira que cada aluno salvou (disquete) antes de executar.`,
      atividade: `No editor, apague o código que veio pronto e digite a função abaixo. Salve, selecione a função no topo e clique em Executar. Autorize quando o Google pedir e volte à planilha para ver a mensagem.

function meuPrimeiroRobo() {
  Browser.msgBox("Olá! Eu sou o robô da planilha.");
}`,
      gabarito: `Após salvar, executar e autorizar (Revisar permissões, escolher a conta e Permitir), uma caixa de mensagem aparece na aba da planilha exibindo o texto "Olá! Eu sou o robô da planilha." Se der erro, conferir letras maiúsculas em Browser e msgBox e se as chaves e parênteses estão fechados.`,
    },
    {
      titulo: `Personalize a mensagem em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno digita e o outro confere a ortografia do código; depois trocam. Reforce que só o texto entre aspas deve mudar, o resto da estrutura permanece igual.`,
      atividade: `Em dupla, troquem o texto que está entre aspas por uma frase criada por vocês, por exemplo o nome da dupla e uma saudação. Salvem, executem e mostrem a nova mensagem na tela.`,
      gabarito: `A função continua igual; apenas o texto dentro das aspas muda. Exemplo: Browser.msgBox("Oi! Somos a Ana e o Léo, e este é nosso robô!"). Ao executar, a caixa mostra a frase personalizada. Aspas precisam abrir e fechar e o ponto e vírgula no fim da linha deve permanecer.`,
    },
    {
      titulo: `O robô que fala duas vezes`,
      tipo: `desafio / projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio individual com dica progressiva. Se travarem, mostre que basta copiar a linha do msgBox e colar logo abaixo, ainda dentro das chaves, mudando o texto. Convide alguns a projetar o resultado.`,
      atividade: `Faça o robô mostrar DUAS mensagens, uma depois da outra. Dica: copie a linha do Browser.msgBox e cole uma segunda linha abaixo dela, dentro das chaves, com um texto diferente. Salve, execute e confira se as duas mensagens aparecem em sequência.`,
      gabarito: `Exemplo correto:

function meuPrimeiroRobo() {
  Browser.msgBox("Primeira mensagem do robô!");
  Browser.msgBox("Agora a segunda mensagem!");
}

Ao executar, a primeira caixa aparece; ao clicar em OK, a segunda surge. As duas linhas precisam estar dentro das chaves e cada uma termina com ponto e vírgula.`,
    },
  ],
};
