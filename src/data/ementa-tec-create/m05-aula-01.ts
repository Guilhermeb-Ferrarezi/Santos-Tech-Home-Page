import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Blender",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer o Blender como ferramenta 3D gratuita e poderosa, instalar e abrir o programa e reconhecer cada área da interface, entendendo para que serve a viewport, os painéis e os menus.`,
  descricao: `Nesta primeira aula do mês a turma encontra a ferramenta que vai acompanhá-la pelas próximas semanas: o Blender. Ele é um programa de modelagem 3D completo, gratuito e usado de verdade no mundo profissional, em filmes de animação, jogos e impressão 3D. O ponto que mais impressiona os alunos é justamente esse: uma ferramenta tão poderosa não custa nada e está ao alcance de qualquer um que tenha um computador. A aula começa mostrando exemplos reais de modelos e de impressões feitas com o Blender, para que a turma perceba aonde vai chegar até o fim do mês com o entregável, que é um modelo pronto pra imprimir.

Antes de modelar qualquer coisa, o aluno precisa se sentir em casa na tela. O Blender tem uma interface cheia de áreas, e quem abre o programa pela primeira vez costuma se assustar com tantos botões. Por isso o foco de hoje não é criar nada ainda, e sim reconhecer o terreno: onde fica a viewport, que é a janela 3D onde tudo acontece; onde estão os painéis laterais com as propriedades do objeto e da cena; e onde ficam os menus do topo. Saber nomear cada área é o primeiro passo para não se perder nas aulas seguintes.

O trabalho prático de hoje é instalar (ou abrir, se já estiver instalado) o Blender e fazer um passeio guiado pela interface. A turma vai identificar o cubo que aparece no centro da viewport, reconhecer a câmera e a luz que vêm junto na cena inicial, e descobrir para que serve cada grande região da tela. O professor conduz mostrando no projetor e os alunos repetem em seus computadores, apontando e nomeando cada área em voz alta.

Não há modelagem nem impressão nesta aula. A intenção é que o aluno termine confortável, sabendo abrir o Blender, reconhecer a viewport e os painéis e entender que aquela tela cheia de botões é só um ateliê organizado, onde cada ferramenta tem o seu lugar. Esse conforto inicial é o que vai permitir que, nas próximas aulas, ele navegue no espaço 3D, transforme o cubo em um objeto e, enfim, prepare o próprio modelo para a impressora.`,
  materiais: [
    `Computadores com o Blender já instalado e aberto (um por aluno); se não estiver instalado, o instalador baixado numa pasta local ou pen drive`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela`,
    `Conexão com a internet (caso seja preciso baixar o Blender do site oficial blender.org)`,
    `Pasta com imagens e vídeos de exemplo de modelos 3D e de impressões reais feitas com o Blender, para mostrar no início`,
    `Impressora 3D da escola ligada e à vista, e se possível uma peça já impressa para passar de mão em mão`,
    `Folha impressa com o nome das áreas da tela (viewport, painéis e menus) colada na bancada`,
    `Ficha rápida com os nomes em português e em inglês das principais regiões da interface, para todos consultarem`,
  ],
  conceitosChave: [
    `Blender — programa de modelagem e animação 3D gratuito e poderoso, usado em filmes, jogos e impressão 3D.`,
    `Modelagem 3D — ato de criar objetos com altura, largura e profundidade dentro do computador, como esculpir no digital.`,
    `Interface — o conjunto de áreas, botões e menus da tela do programa, organizado para você encontrar cada ferramenta.`,
    `Viewport — a janela 3D no centro da tela, onde você vê e mexe nos objetos da cena.`,
    `Cena — tudo o que existe no seu projeto; ao abrir, o Blender já traz um cubo, uma câmera e uma luz.`,
    `Painel de propriedades — a área lateral direita com abas que mostram e ajustam os detalhes do objeto e da cena.`,
    `Menu superior — a barra de cima com os menus principais, como "File" (arquivo), por onde você salva, abre e exporta projetos.`,
  ],
  treinamento: `## O que o professor precisa saber

O Blender é gratuito e baixado no site oficial blender.org (clique em "Download" e baixe a versão para Windows). A instalação é a comum: baixar, executar o instalador e clicar em avançar até concluir. Ao abrir pela primeira vez, surge uma telinha de boas-vindas (splash screen) com opções de novo arquivo; basta clicar fora dela ou em "General" para entrar na cena inicial. Essa cena já vem com três coisas no centro: um cubo, uma câmera (o objeto em forma de pirâmide) e uma luz (a lâmpada). As grandes áreas que você vai nomear são: a viewport (a janela 3D grande no centro, onde está o cubo), o painel de propriedades (a coluna de abas na lateral direita), o outliner (a listinha no canto superior direito que mostra os objetos da cena) e o menu superior (a barra de cima com "File", "Edit", "Render" e outros). Você não precisa modelar nada hoje, só abrir, reconhecer e nomear. Faça esse caminho uma vez sozinho antes da aula para ganhar segurança e conferir se o programa abre sem travar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor as imagens e vídeos de modelos 3D e de impressões reais feitas com o Blender. Pergunte à turma: "vocês sabiam que dá pra criar tudo isso de graça?". Apresente o Blender como uma ferramenta profissional e gratuita. Mostre a peça já impressa e diga que, até o fim do mês, cada um terá o próprio modelo pronto pra imprimir.

Conteúdo novo guiado (15 min): no projetor, abra o Blender. Feche a tela de boas-vindas clicando em "General". Aponte e nomeie as áreas: a viewport no centro (mostre o cubo, a câmera e a luz), o painel de propriedades à direita, o outliner no canto superior direito e o menu superior no topo. Abra o menu "File" só para a turma ver onde fica "Save" (salvar) e "Export" (exportar). Não mexa no cubo ainda; o objetivo é só reconhecer cada região.

Mão na massa (25 min): cada aluno repete no seu computador. Quem precisa instalar faz a instalação com você circulando pela sala. Todos abrem o Blender, fecham a tela de boas-vindas e localizam, apontando com o mouse, a viewport, o painel de propriedades, o outliner e o menu superior. Peça que apontem o cubo, a câmera e a luz na viewport e nomeiem cada um em voz alta. Circule confirmando que todos chegaram à mesma cena inicial e sabem dizer o nome de cada área.

Desafio e compartilhar (10 min): desafie cada aluno a abrir o menu "File" e achar a opção "Save" sem ajuda, mostrando que já sabe navegar pelos menus. Feche com uma rodada rápida em que dois ou três alunos mostram a tela no projetor e dizem, com as próprias palavras, o que é o Blender e para que serve a viewport.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o Blender é como um ateliê de escultor, mas dentro do computador: a viewport é a bancada onde a escultura aparece, os painéis são as prateleiras de ferramentas e os menus são as gavetas onde tudo fica guardado. Explique que o cubo do centro é só um bloco de massinha digital esperando para virar qualquer coisa. Sempre que disser uma palavra em inglês, como "viewport" ou "outliner", fale o significado em português logo depois. Não encha a aula de termos: hoje bastam viewport, painéis e menus. Lembre que ninguém precisa decorar tudo de uma vez, porque vamos voltar nessas áreas todas as aulas.

## Erros comuns e como ajudar

O erro mais comum é o aluno se assustar com a quantidade de botões e travar. Tranquilize dizendo que hoje só vamos olhar, não mexer, e que ninguém precisa entender cada botão agora. Outro tropeço é fechar a tela de boas-vindas sem querer e achar que apagou algo; mostre que ela só some e a cena continua intacta. Alguns confundem a câmera (a pirâmide) com a luz (a lâmpada); aponte cada uma devagar na viewport. Há quem clique no cubo e o mova sem querer; ensine a desfazer com o atalho Ctrl Z e diga que mexer no cubo é assunto das próximas aulas. Se o Blender abrir em inglês e isso travar o aluno, mostre que reconhecer os ícones e a posição das áreas já basta, e que o idioma pode ser ajustado depois em "Edit" e "Preferences". Por fim, alguns esquecem onde fica o menu "File"; reforce que é sempre o primeiro do canto superior esquerdo.`,
  exercicios: [
    {
      titulo: `Abrindo o Blender`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe quem precisa instalar e circule confirmando que todos chegaram à cena inicial. Use o projetor para mostrar o ícone do programa e como fechar a tela de boas-vindas clicando em "General".`,
      atividade: `Localize o ícone do Blender no computador, abra o programa e feche a tela de boas-vindas clicando em "General". Espere até ver o cubo no centro da viewport.`,
      gabarito: `O Blender abre e mostra a janela principal com a viewport no centro e o cubo cinza no meio dela, junto da câmera e da luz. A tela de boas-vindas some ao clicar em "General", sem apagar nada da cena.`,
    },
    {
      titulo: `Conhecendo as áreas da tela`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor a viewport, o painel de propriedades, o outliner e o menu superior antes de soltar a turma. Peça que apontem com o mouse e digam o nome de cada área em voz alta.`,
      atividade: `Com o Blender aberto, aponte com o mouse e nomeie em voz alta quatro áreas: a viewport (centro), o painel de propriedades (lateral direita), o outliner (canto superior direito) e o menu superior (topo).`,
      gabarito: `O aluno identifica corretamente as quatro áreas: a viewport no centro, o painel de propriedades à direita, o outliner no canto superior direito e o menu superior no topo, nomeando cada uma sem trocar os nomes.`,
    },
    {
      titulo: `Caçando o cubo, a câmera e a luz`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor as três formas: o cubo (bloco), a câmera (pirâmide) e a luz (lâmpada). Desafie a turma a achar as três na viewport e também na lista do outliner. Reforce que não é para mover nada.`,
      atividade: `Na viewport, encontre e aponte o cubo, a câmera (forma de pirâmide) e a luz (forma de lâmpada). Depois ache os nomes dos três na lista do outliner, no canto superior direito. Não mova nenhum deles.`,
      gabarito: `O aluno aponta corretamente o cubo, a câmera e a luz na viewport e encontra os três nomes listados no outliner ("Cube", "Camera" e "Light"). Nada na cena foi movido nem apagado.`,
    },
    {
      titulo: `Explorando o menu File em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno dita os passos e o outro executa, depois trocam. Reforce que abrir um menu e olhar as opções não muda nada na cena, então podem explorar à vontade sem medo.`,
      atividade: `Em dupla, um dita e o outro executa: abrir o menu "File" no topo e localizar as opções "Save" (salvar), "Open" (abrir) e "Export" (exportar), lendo cada uma em voz alta. Depois fechem o menu sem clicar em nada e troquem de papel.`,
      gabarito: `A dupla abre o menu "File" e encontra as opções "Save", "Open" e "Export", lendo os nomes corretamente. O menu é fechado sem alterar a cena, e os dois alunos conseguem abrir o menu ao menos uma vez cada um.`,
    },
    {
      titulo: `Roda de conversa: o que é o Blender`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a tela no projetor. Valorize as explicações com palavras próprias e corrija com gentileza quem inverter os nomes das áreas.`,
      atividade: `Em roda, cada aluno explica com suas palavras o que é o Blender e para que serve a viewport. Comente também o que mais chamou a atenção nos exemplos de modelos e impressões reais mostrados no início da aula.`,
      gabarito: `Cada aluno explica que o Blender é um programa de modelagem 3D gratuito e poderoso e que a viewport é a janela 3D onde vemos e mexemos nos objetos. Respostas válidas citam que dá para criar modelos e até imprimir de verdade, usando comparações próprias como "ateliê digital" ou "bancada de escultura".`,
    },
  ],
};
