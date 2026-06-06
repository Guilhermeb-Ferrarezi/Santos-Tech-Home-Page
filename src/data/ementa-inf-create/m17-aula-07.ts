import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Botões que dão vida ao código",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Conectar um script do Apps Script a um botão na planilha e a um item de menu personalizado, para que a automação rode com um único clique, montando o esqueleto do entregável do mês.`,
  descricao: `Nas últimas aulas o aluno escreveu funções de verdade no Apps Script: ele aprendeu a anatomia de um script, escreveu o primeiro código e treinou ler e escrever células. Mas até agora, para rodar esse código, ele precisava abrir o editor do Apps Script e clicar em "Executar" lá dentro. Isso funciona, só que ninguém usa uma planilha desse jeito no dia a dia. O que falta é dar um rosto ao código: um botão ou um menu que qualquer pessoa consiga apertar sem nem saber que existe programação por trás.

Esta aula é sobre essa ponte entre o código e a pessoa. O aluno vai aprender duas formas de disparar uma função com um clique. A primeira é o botão dentro da planilha: ele insere um desenho (uma forma colorida com um texto, tipo "Atualizar"), clica com o botão direito e "atribui um script" a esse desenho. A partir daí, clicar no desenho executa a função. A segunda forma é o menu personalizado: usando uma função especial chamada onOpen, o aluno cria um menu novo na barra superior da planilha, ao lado de "Arquivo" e "Inserir", com itens que rodam as funções dele.

A grande virada aqui é de perspectiva. Até agora o aluno programava para ele mesmo. Agora ele programa pensando em quem vai usar: o botão precisa de um nome claro, o menu precisa de itens que façam sentido, e tudo tem que funcionar de primeira para o "usuário" não se perder. É exatamente assim que profissionais entregam automações: a complexidade fica escondida atrás de um clique simples.

No fim desta aula, o aluno junta o que construiu no mês — uma planilha com fórmulas avançadas e funções de Apps Script — e amarra tudo a botões e a um menu. Esse é o esqueleto do entregável do mês: uma automação simples que funciona com um clique. Na aula 8 ele vai só finalizar, testar e apresentar.`,
  materiais: [
    `Computadores (um por aluno) com o navegador Chrome e uma conta Google ativa, com login já feito antes da aula`,
    `Uma planilha do Google Planilhas aberta em cada computador, já contendo as funções de Apps Script escritas nas aulas anteriores`,
    `O editor do Apps Script acessível pelo menu "Extensões" → "Apps Script" de cada planilha`,
    `Projetor ou TV conectado ao computador do professor para demonstrar onde clicar na planilha e no editor`,
    `Arquivo de exemplo "Planilha de Pontos da Turma" (Google Planilhas) com uma função pronta chamada limparTabela e outra chamada somarPontos, compartilhada com a turma`,
    `Uma folha de "cola rápida" impressa ou no projetor com os passos para inserir desenho, atribuir script e escrever a função onOpen`,
  ],
  conceitosChave: [
    `Atribuir script — ação de ligar um desenho (botão) da planilha a uma função do Apps Script, para que clicar no desenho execute a função.`,
    `Desenho — forma ou imagem inserida na planilha pelo menu "Inserir" → "Desenho", que pode virar um botão clicável.`,
    `Menu personalizado — menu novo criado por código na barra superior da planilha, com itens que rodam funções suas.`,
    `onOpen — função especial que o Google executa sozinho toda vez que a planilha é aberta, ideal para montar o menu personalizado.`,
    `addMenu — comando do Apps Script que cria o menu e diz qual texto aparece e qual função cada item chama.`,
    `Autorização — permissão que o Google pede na primeira vez que um script roda, para confirmar que você confia no código.`,
    `Usuário — a pessoa que vai usar a planilha clicando nos botões, sem precisar abrir o editor de código.`,
  ],
  treinamento: `## O que o professor precisa saber

Faça o caminho inteiro uma vez antes da aula, com calma. Abra a "Planilha de Pontos da Turma". Para criar um botão de desenho: vá em "Inserir" → "Desenho", clique no ícone de forma, desenhe um retângulo, dê dois cliques nele e digite o texto "Somar pontos", depois clique em "Salvar e fechar". O desenho aparece flutuando sobre a planilha. Clique nele uma vez para selecioná-lo, clique nos três pontinhos que surgem no canto do desenho e escolha "Atribuir script". Na caixinha, digite apenas o nome da função, sem parênteses: somarPontos. Pronto — agora clicar no desenho roda a função.

Para o menu personalizado, abra o editor em "Extensões" → "Apps Script". Você vai escrever a função onOpen. O Google chama essa função automaticamente sempre que a planilha abre. Dentro dela, usamos SpreadsheetApp.getUi() para pegar a interface, e .createMenu("Turma") para criar um menu chamado "Turma". Depois encadeamos .addItem("Somar pontos", "somarPontos") e .addToUi(). Salve (ícone de disquete ou Ctrl+S), recarregue a planilha (F5) e o menu "Turma" aparece na barra de cima. Importante: na primeira execução o Google pede Autorização — clique em "Revisar permissões", escolha a conta e em "Permitir".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): No projetor, abra a planilha e o editor do Apps Script. Mostre a função somarPontos e rode-a pelo botão "Executar" do editor, como nas aulas anteriores. Pergunte à turma: "e se a sua mãe fosse usar essa planilha, ela ia abrir o editor e clicar em Executar?". Deixe rirem e diga que hoje o código vai ganhar um botão de gente.

Conteúdo novo guiado (15 min): No projetor, insira o desenho ("Inserir" → "Desenho"), escreva "Somar pontos", salve e atribua o script somarPontos pelos três pontinhos → "Atribuir script". Clique no botão e mostre a função rodando. Em seguida, no editor, escreva a função onOpen criando o menu "Turma" com o item "Somar pontos". Salve, recarregue a planilha com F5 e mostre o menu novo aparecendo na barra superior.

Mão na massa (25 min): Cada aluno repete os dois caminhos na própria planilha. Primeiro cria um botão de desenho e atribui a função somarPontos. Depois escreve a função onOpen para montar o menu "Turma" com pelo menos um item. Recarrega a planilha e testa pelo menu. Quem terminar adiciona um segundo botão "Limpar" ligado à função limparTabela. Circule ajudando com a autorização e com erros de digitação no nome da função.

Desafio + compartilhar (10 min): Peça que dois ou três alunos mostrem no projetor a planilha deles rodando uma função pelo botão e outra pelo menu. A turma confere se o nome do botão está claro. Encerre dizendo que esse é o esqueleto do entregável do mês — na próxima aula eles vão finalizar e apresentar.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que "o código é o motor e o botão é a chave: sem a chave, ninguém liga o carro". Explique o menu personalizado como "criar um atalho seu na barra de cima, igual aos menus que já existem". Conte que a função onOpen é "um robô que monta o menu sozinho toda vez que a planilha abre". Reforce que o nome dado ao botão é para o usuário, então tem que ser claro, como "Somar pontos", e não "func1". E avise que a Autorização aparecer é normal e bom: é o Google perguntando "você confia nesse código?".

## Erros comuns e como ajudar

O erro mais frequente é digitar o nome da função errado ao atribuir o script — com parênteses, com letra trocada ou com espaço. Lembre que é só o nome exato, sem parênteses: somarPontos. Outro clássico é escrever onOpen e não recarregar a planilha; o menu só aparece depois do F5. Há quem escreva onopen ou OnOpen com letra errada — o nome precisa ser exatamente onOpen. Muitos travam na tela de Autorização e desistem; mostre o caminho "Revisar permissões" → escolher a conta → "Avançado" → "Permitir". Se o botão de desenho não responder, peça para clicar nele uma vez (selecionar) e conferir nos três pontinhos se o script foi mesmo atribuído. E lembre que cada função chamada precisa existir no código com aquele nome, senão dá erro ao clicar.`,
  exercicios: [
    {
      titulo: `Meu primeiro botão`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Confirme que a função somarPontos já existe na planilha de cada aluno. Demonstre uma vez no projetor o caminho "Inserir" → "Desenho" e a atribuição do script pelos três pontinhos. Reforce que o nome vai sem parênteses.`,
      atividade: `Na sua planilha, vá em "Inserir" → "Desenho", desenhe um retângulo, escreva dentro dele "Somar pontos" e clique em "Salvar e fechar". Selecione o desenho, clique nos três pontinhos e escolha "Atribuir script". Digite somarPontos e confirme. Depois clique no botão e veja a função rodar.`,
      gabarito: `O aluno deve ter um desenho com o texto "Somar pontos" sobre a planilha. Ao atribuir o script, deve digitar apenas somarPontos, sem parênteses e sem espaços. Clicar no desenho executa a função somarPontos (por exemplo, preenchendo a célula de total). Se o Google pedir Autorização, o aluno revisa as permissões e permite. O resultado é o código rodando por um clique, sem abrir o editor.`,
    },
    {
      titulo: `O menu da Turma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor a função onOpen completa e cada parte: getUi, createMenu, addItem, addToUi. Lembre a turma de salvar e recarregar a planilha com F5. Tenha a "cola rápida" visível.`,
      atividade: `Abra "Extensões" → "Apps Script" e escreva a função: function onOpen() { SpreadsheetApp.getUi().createMenu("Turma").addItem("Somar pontos", "somarPontos").addToUi(); } . Salve com Ctrl+S, volte à planilha e recarregue com F5. Procure o menu "Turma" na barra de cima e clique no item "Somar pontos".`,
      gabarito: `A função onOpen deve estar escrita com esse nome exato. Ela usa SpreadsheetApp.getUi() para pegar a interface, createMenu("Turma") para criar o menu, addItem("Somar pontos", "somarPontos") para o item e addToUi() para colocá-lo na tela. Depois de salvar e dar F5, o menu "Turma" aparece na barra superior e seu item executa a função somarPontos. Se nada aparecer, quase sempre faltou recarregar a planilha.`,
    },
    {
      titulo: `Botão certo, função certa`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada dupla cria um segundo botão ligado à função limparTabela. Circule conferindo se o nome do botão combina com o que ele faz e se o script atribuído é o correto. Aproveite para discutir nomes claros.`,
      atividade: `Em dupla, criem um segundo botão de desenho com o texto "Limpar" e atribuam a ele a função limparTabela. Testem: clicar em "Somar pontos" soma, clicar em "Limpar" limpa. Conversem e respondam por escrito: por que o nome do botão deve combinar com o que a função faz?`,
      gabarito: `A dupla deve ter dois botões: "Somar pontos" atribuído a somarPontos e "Limpar" atribuído a limparTabela. Cada botão executa a função certa ao ser clicado. A resposta escrita esperada é que o nome do botão é o que o usuário lê, então precisa descrever a ação (somar, limpar) para que a pessoa saiba o que vai acontecer e não clique errado — botão e função têm que combinar.`,
    },
    {
      titulo: `Caça ao erro do menu`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Prepare antes uma planilha com três erros plantados na função onOpen: o nome escrito como onopen, um addItem chamando uma função inexistente e a falta de addToUi(). Deixe os alunos investigarem antes de você revelar.`,
      atividade: `O professor vai mostrar uma função onOpen que não funciona: o menu não aparece e um item dá erro ao clicar. Encontre os três problemas: o nome da função está errado, um item chama uma função que não existe e está faltando o comando que coloca o menu na tela. Conserte e teste com F5.`,
      gabarito: `Os três erros são: (1) o nome onopen deve ser exatamente onOpen, com O e O maiúsculos no lugar certo, senão o Google não a executa ao abrir; (2) o addItem aponta para uma função que não existe — deve apontar para uma função real, como somarPontos; (3) falta o addToUi() no final, que é o comando que efetivamente coloca o menu na barra superior. Após corrigir e dar F5, o menu "Turma" aparece e seus itens rodam sem erro.`,
    },
    {
      titulo: `O esqueleto do entregável`,
      tipo: `projeto curto`,
      tempo: `11 minutos`,
      guiaProfessor: `Esta é a montagem do esqueleto do entregável do mês. Oriente cada aluno a juntar fórmulas avançadas e funções em uma planilha só, acessível por botões e menu. Controle o tempo e anote quem já está pronto para apresentar na aula 8.`,
      atividade: `Monte o esqueleto do seu entregável: uma planilha que tenha pelo menos uma fórmula avançada (PROCX ou SE) calculando algo, um botão de desenho que rode uma função sua e um menu "Turma" com pelo menos um item que rode uma função. Teste tudo com um clique, recarregue com F5 e confira que o menu aparece sozinho.`,
      gabarito: `Um esqueleto completo tem três peças funcionando juntas: (1) uma fórmula avançada (PROCX ou SE) calculando um resultado de verdade na planilha; (2) um botão de desenho com nome claro atribuído a uma função do Apps Script que roda ao clicar; (3) uma função onOpen que cria o menu "Turma" com ao menos um item ligado a uma função. Ao recarregar a planilha, o menu surge sozinho e tanto o botão quanto o menu executam as funções sem erro de autorização. Esse é o ponto de partida pronto para finalizar e apresentar na aula 8.`,
    },
  ],
};
