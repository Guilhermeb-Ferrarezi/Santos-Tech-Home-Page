import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Do Canva para o Jogo: Exportando a UI",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Preparar a interface desenhada no Canva para o jogo, exportando botões, fundos e ícones em PNG com fundo transparente e organizando esses arquivos para a importação no Roblox.`,
  descricao: `Nesta aula o aluno reencontra a interface (UI) que desenhou no Canva no mês anterior e descobre que um desenho bonito ainda não é uma interface de jogo: ele precisa ser exportado do jeito certo. A UI é tudo aquilo que o jogador vê e toca na tela sem ser o mundo 3D: o botão de "Jogar", a barra de vida, o painel de pontos, os ícones do menu. Hoje o trabalho é transformar esses elementos do Canva em arquivos prontos para entrar no Roblox.

O ponto central da aula é o formato PNG com fundo transparente. Um botão exportado como JPG vem com um retângulo branco em volta, que fica horrível em cima do cenário do jogo. Já o PNG transparente recorta o botão pelo contorno e deixa o fundo "vazado", então ele se encaixa em qualquer tela. O aluno vai aprender a separar a interface em pedaços (cada botão, cada ícone e cada fundo viram um arquivo) e a exportar cada pedaço de forma limpa, sem sobras nem espaços brancos.

Depois de exportar, vem a organização. Arquivos espalhados na Área de Trabalho com nomes como "sem-titulo-1.png" são um pesadelo na hora de importar. Por isso o aluno cria uma pasta do projeto e nomeia tudo de forma clara: btn_jogar.png, icone_som.png, fundo_menu.png. Essa disciplina de nomes parece chata, mas é o que torna possível montar a interface rápido nas próximas aulas.

Por fim, a aula apresenta o vocabulário do Roblox que será usado a partir da próxima semana: ScreenGui, Frame e ImageLabel. O aluno ainda não vai montar nada no Roblox hoje; ele só precisa entender o que é cada coisa para saber por que está exportando os arquivos desse jeito. O ScreenGui é a tela inteira de interface; o Frame é uma caixa ou painel que agrupa elementos; o ImageLabel é o quadro que recebe cada imagem PNG. Saber para onde cada arquivo vai dá sentido a todo o trabalho de exportação.`,
  materiais: [
    `Computadores com acesso à internet e ao Canva (um por aluno), com a conta da escola já logada`,
    `Roblox Studio instalado nos computadores (será usado só para mostrar os painéis ScreenGui, Frame e ImageLabel na demonstração)`,
    `Projetor ou TV para o professor demonstrar o Canva e o Roblox Studio em tela grande`,
    `Os projetos de UI que os alunos criaram no Canva no mês anterior (links salvos ou na pasta da turma no Canva)`,
    `Arquivo de exemplo: um projeto de UI simples no Canva já pronto (botão Jogar, ícone de som e fundo de menu) para o professor demonstrar a exportação`,
    `Pasta-modelo "UI_do_jogo" com a lista de nomes de arquivo recomendada, impressa ou em slide`,
    `Pen drive ou pasta na nuvem para guardar os PNGs caso os alunos troquem de computador`,
  ],
  conceitosChave: [
    `UI (interface) — tudo o que o jogador vê e toca na tela sem ser o mundo 3D, como botões, ícones, barras e painéis.`,
    `PNG transparente — formato de imagem que recorta o desenho pelo contorno e deixa o fundo vazado, sem retângulo branco em volta.`,
    `Exportar — gerar um arquivo de imagem a partir do projeto do Canva para usar fora dele, como dentro do jogo.`,
    `ScreenGui — no Roblox, é a tela inteira de interface que fica na frente do jogo e guarda todos os elementos visuais.`,
    `Frame — no Roblox, é uma caixa ou painel que serve para agrupar e organizar vários elementos da interface juntos.`,
    `ImageLabel — no Roblox, é o quadro que recebe e mostra cada imagem PNG, como um botão ou um ícone.`,
    `Nomes claros de arquivo — padrão de nomear os PNGs de forma organizada (btn_jogar, icone_som, fundo_menu) para achar tudo na hora de importar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox para dar esta aula, porque hoje o trabalho pesado é no Canva. O essencial é entender três coisas. Primeira: JPG não tem fundo transparente, PNG transparente tem. Para o jogo, sempre PNG com fundo transparente. Segunda: cada elemento da interface deve virar um arquivo separado (um botão, um arquivo; um ícone, um arquivo), porque no Roblox cada imagem entra em um quadro chamado ImageLabel. Terceira: no Canva, a exportação transparente fica em "Compartilhar", depois "Baixar", escolhendo o tipo "PNG" e marcando a caixinha "Fundo transparente". Essa caixinha é o pulo do gato da aula. Antes da aula, abra o projeto de exemplo no Canva e faça esse caminho uma vez para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra na tela grande a interface que a turma desenhou no Canva no mês passado. Pergunte: "Como a gente leva esse botão para dentro do jogo?" Mostre lado a lado um botão exportado em JPG (com o feio retângulo branco) e o mesmo em PNG transparente, em cima de um cenário. O contraste convence na hora.

15 min, conteúdo novo guiado. No Canva, com o projeto de exemplo aberto, mostre como selecionar apenas um elemento (clicar no botão Jogar). Explique que vamos exportar elemento por elemento. Caminho da exportação: botão "Compartilhar" no canto superior direito, depois "Baixar"; em "Tipo de arquivo" escolha "PNG"; marque a caixinha "Fundo transparente"; clique em "Baixar". Faça isso com o botão Jogar, depois com o ícone de som. Em seguida, abra rapidamente o Roblox Studio e mostre, no painel Explorer (menu "View", "Explorer"), o que são ScreenGui, Frame e ImageLabel, só para a turma saber onde cada PNG vai parar depois. Não monte nada ainda.

25 min, mão na massa. Cada aluno abre o próprio projeto de UI no Canva. Cria uma pasta no computador chamada "UI_do_jogo". Exporta, um por um, pelo menos três elementos em PNG transparente: um botão, um ícone e um fundo. Renomeia cada arquivo com nome claro (btn_jogar.png, icone_som.png, fundo_menu.png) e guarda tudo na pasta. Circule pela sala conferindo se a caixinha "Fundo transparente" está marcada e se os nomes estão organizados.

10 min, desafio e compartilhar. Desafio: cada aluno coloca um dos PNGs transparentes em cima de uma foto qualquer (no próprio Canva ou no visualizador de imagens) para conferir se o fundo está mesmo vazado. Depois, rodada rápida: cada um mostra a pasta organizada e diz quantos arquivos exportou e qual é o botão principal do seu menu.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de adesivo. Diga: "O PNG transparente é um adesivo: você cola o botão em qualquer tela e ele se encaixa, porque não tem aquele papelzinho branco em volta. O JPG é um botão impresso num papel quadrado, e o quadrado aparece todo no jogo." Para a organização dos arquivos, compare com uma mochila: "Se você joga tudo solto na mochila, não acha o estojo na hora da prova. A pasta com nomes claros é a mochila arrumada." Para os termos do Roblox, use a tela: "O ScreenGui é a vitrine inteira, o Frame é uma prateleira dentro da vitrine e o ImageLabel é o porta-retrato onde cada imagem fica." Sempre conecte ao jogo do aluno: "Esse botão é o que abre o seu jogo."

## Erros comuns e como ajudar

O erro número um é esquecer de marcar "Fundo transparente": o arquivo sai com fundo branco. Ensine a sempre conferir a caixinha antes de clicar em "Baixar". O segundo é exportar a interface inteira numa imagem só, em vez de pedaço por pedaço; lembre que cada elemento precisa de seu próprio arquivo. O terceiro é escolher JPG por engano no tipo de arquivo; mostre que JPG não tem a opção de transparência. Muitos baixam tudo com o nome automático "design-sem-titulo.png" e perdem os arquivos; pare a turma e faça todos renomearem na hora. Por fim, alguns alunos selecionam o elemento errado ou nada na hora de exportar; mostre que dá para clicar no item e usar "Baixar" da seleção, ou ajustar o tamanho da página ao redor do elemento.`,
  exercicios: [
    {
      titulo: `Caçando o fundo branco: JPG contra PNG`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o próprio projeto no Canva. Reforce o caminho "Compartilhar", "Baixar" e a diferença entre os tipos de arquivo. Peça que comparem os dois resultados na tela.`,
      atividade: `No Canva, exporte o seu botão Jogar duas vezes: uma como JPG e outra como PNG com a caixinha "Fundo transparente" marcada. Coloque os dois em cima de uma foto colorida e compare. Mostre ao professor qual deles tem fundo vazado.`,
      gabarito: `O JPG aparece com um retângulo branco ao redor do botão; o PNG transparente mostra só o botão, com o fundo vazado, deixando a foto aparecer por trás. Caminho correto: "Compartilhar", "Baixar", tipo "PNG", marcar "Fundo transparente", "Baixar". Se o PNG também vier com fundo branco, a caixinha "Fundo transparente" não foi marcada.`,
    },
    {
      titulo: `Quebrando a interface em pedaços`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que a UI inteira não pode virar um único arquivo. Ajude os alunos a isolar cada elemento e a exportar um por vez. Confira se cada arquivo saiu transparente.`,
      atividade: `Olhe a sua interface no Canva e liste no caderno quais elementos ela tem (botões, ícones, fundo, barras). Depois exporte três elementos diferentes em três arquivos PNG transparentes separados. Conte ao professor quantos pedaços a sua interface tem no total.`,
      gabarito: `A lista deve separar a interface em partes, por exemplo: botão Jogar, botão Sair, ícone de som, barra de vida e fundo do menu. O aluno deve terminar com três arquivos PNG transparentes distintos, um para cada elemento. Erro esperado a corrigir: exportar tudo numa imagem só. Cada elemento precisa de seu próprio arquivo porque, no Roblox, cada imagem entra em um ImageLabel diferente.`,
    },
    {
      titulo: `Arrumando a mochila de arquivos em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno cria a pasta e renomeia, o outro confere os nomes pela lista-modelo. Reforce nomes claros, sem espaços e sem acentos no nome do arquivo.`,
      atividade: `Em dupla, criem uma pasta chamada "UI_do_jogo" no computador. Movam para dentro dela todos os PNGs que exportaram e renomeiem cada um com um nome claro: btn_jogar.png, icone_som.png, fundo_menu.png. Confiram um a lista do outro.`,
      gabarito: `A pasta "UI_do_jogo" deve conter os PNGs com nomes claros e organizados, sem arquivos do tipo "design-sem-titulo.png". Padrão correto: tipo do elemento mais função, em letras minúsculas, sem espaços (btn_jogar.png, icone_som.png, fundo_menu.png). A dupla deve perceber que nomes claros economizam tempo na hora de importar no Roblox, quando cada arquivo precisa ser achado rápido.`,
    },
    {
      titulo: `Roda de conversa: por que tanta organização?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda ligando a organização de hoje ao trabalho das próximas aulas. Apresente os termos ScreenGui, Frame e ImageLabel com a comparação da vitrine. Anote no quadro as respostas da turma.`,
      atividade: `Em roda, conversem: por que separar a interface em arquivos e usar nomes claros ajuda na hora de montar o jogo no Roblox? Cada aluno diz para que serve um dos termos: ScreenGui, Frame ou ImageLabel, com suas próprias palavras.`,
      gabarito: `Não há resposta única, mas as falas devem ligar a organização à próxima etapa. Exemplos válidos: "Se os arquivos estão separados e bem nomeados, eu acho o botão certo rápido para colocar no ImageLabel"; "Cada PNG vai num ImageLabel, então preciso de um arquivo por elemento". Definições esperadas: ScreenGui é a tela inteira de interface; Frame é a caixa que agrupa elementos; ImageLabel é o quadro que mostra cada imagem PNG.`,
    },
    {
      titulo: `Mini projeto: kit de UI pronto para importar`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use a pasta-modelo "UI_do_jogo" como referência. Confira, aluno por aluno, se todos os PNGs estão transparentes, nomeados e na pasta. Esse kit será usado já na próxima aula, então não pode faltar nenhum arquivo.`,
      atividade: `Monte o kit completo da interface do seu jogo: exporte em PNG transparente o botão principal, mais um botão, um ícone e o fundo do menu. Renomeie todos com nomes claros e guarde na pasta "UI_do_jogo". Guarde também uma cópia no pen drive ou na nuvem. Mostre a pasta final ao professor.`,
      gabarito: `O kit deve ter pelo menos quatro PNGs transparentes (dois botões, um ícone e um fundo), todos com nomes claros e dentro da pasta "UI_do_jogo", com cópia de segurança no pen drive ou na nuvem. Conferência: abrir cada PNG e ver o fundo vazado; checar que nenhum arquivo é JPG e que nenhum nome é automático. Esse kit organizado é o material que será importado no Roblox na próxima aula.`,
    },
  ],
};
