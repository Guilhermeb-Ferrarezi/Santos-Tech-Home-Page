import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Salvando como GIF",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança consegue, com ajuda do professor, exportar a sua moeda girando como um arquivo GIF que roda sozinho e mostrá-lo para a turma.`,
  descricao: `Nesta aula a gente aprende a transformar a animação que ficou pronta dentro do Aseprite em um arquivo de verdade que qualquer pessoa pode abrir e assistir: o GIF. Até agora, a moeda girava só dentro do programa, na janela de animação. O GIF é o jeito de tirar essa animação de dentro do Aseprite e guardá-la como um arquivo no computador, pronto para enviar para a mamãe, para o papai ou para colocar no jogo.

Um GIF é como uma figurinha que se mexe sozinha. Diferente de um desenho parado (uma foto), o GIF guarda vários quadrinhos e os mostra um atrás do outro, repetindo sem parar. É por isso que ele é perfeito para guardar a nossa moeda girando: o arquivo lembra de todos os frames e do tempo de cada um, e fica rodando em looping para sempre quando a gente abre.

O coração da aula é o comando Exportar. O professor vai mostrar, no telão, exatamente onde clicar para escolher o formato GIF, dar um nome para o arquivo e decidir onde ele vai ficar guardado. Depois, cada criança faz o mesmo no seu computador, com o professor passando de mesa em mesa. No fim, abrimos os arquivos prontos fora do Aseprite e vemos as moedas girando sozinhas, como num passe de mágica.

Esta é a penúltima aula do mês e tem um clima de celebração. Cada animação que ficou viva merece palmas. Guardar o GIF é o momento em que o trabalho de quatro semanas vira algo que a criança pode levar para casa e mostrar com orgulho, preparando o terreno para a última aula, quando tudo vai entrar no jogo.`,
  materiais: [
    `Computadores com o Aseprite já aberto e, em cada um, o arquivo da moeda girando (a animação da Aula 5) carregado e pronto.`,
    `Projetor ou telão ligado, espelhando a tela do computador do professor.`,
    `Um arquivo de exemplo já exportado: uma moeda-modelo salva como GIF pronto, para mostrar o resultado final logo no começo.`,
    `Uma pasta combinada na área de trabalho (por exemplo, uma pasta chamada Minhas Animações) onde todas as crianças vão salvar, para achar fácil depois.`,
    `Visualizador de imagens do computador aberto e testado (o programa que abre fotos), para rodar o GIF fora do Aseprite.`,
    `Adesivos, carimbos ou estrelinhas para comemorar cada animação salva.`,
    `Folhas e lápis de cor para o exercício de papel.`,
  ],
  conceitosChave: [
    `Exportar — tirar a nossa animação de dentro do Aseprite e guardá-la como um arquivo pronto que o computador entende.`,
    `GIF — um tipo de figurinha que se mexe sozinha; ela guarda vários quadrinhos e fica repetindo sem parar.`,
    `Arquivo — uma caixinha guardada no computador com o nosso trabalho dentro; ela tem um nome e fica numa pasta.`,
    `Pasta — a gavetinha do computador onde a gente guarda os arquivos para não perder.`,
    `Nome do arquivo — o apelido que damos para o nosso trabalho, para reconhecê-lo depois (por exemplo, moeda).`,
    `Looping — quando a animação chega no fim e volta para o começo sozinha, repetindo para sempre.`,
    `Salvar — guardar para não perder; depois de salvar, o trabalho fica no computador mesmo que a gente feche o programa.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Até aqui as crianças animaram a moeda dentro do Aseprite, mas a animação só existe enquanto o programa está aberto. Exportar como GIF cria um arquivo independente que roda sozinho em qualquer visualizador de imagens. O GIF guarda todos os frames e o tempo de cada um, e por padrão repete em looping, o que é perfeito para uma moeda girando.

A diferença que confunde iniciantes: "Salvar" (Save, com Ctrl+S) guarda o projeto no formato do Aseprite (.aseprite ou .ase), que só o Aseprite abre. "Exportar" gera o GIF, que todo mundo abre. Você precisa dos dois: salve o projeto para não perder o trabalho e exporte para gerar o GIF de mostrar. O caminho do menu é File, depois Export, depois Export As (ou use o atalho Ctrl+Alt+Shift+S). Na janela que abre, escreva o nome do arquivo terminando em .gif (por exemplo, moeda.gif); o Aseprite entende o formato pela terminação. Confira a pasta de destino no topo da janela e clique em Save; aparece então a janela de opções de exportação (Export GIF), onde basta confirmar em Export. Mantenha Resize em 100 por cento (ou aumente para 200 ou 400 por cento se a moeda for pequena no telão).

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

Aquecimento (10 min): Mostre no telão o GIF-exemplo já pronto, abrindo-o no visualizador de imagens do computador (fora do Aseprite). Pergunte: "Olha, a moeda está girando e a gente nem está no programa de desenho! Como será que ela foi parar aqui?". Recolha respostas e anuncie: "Hoje a gente aprende a guardar a nossa moeda assim, num arquivo que se mexe sozinho."

Conteúdo novo guiado (15 min): No seu computador espelhado, abra o projeto da moeda. Primeiro, salve o projeto: clique em File, depois Save (ou Ctrl+S). Diga em voz alta: "Salvar guarda o nosso trabalho para a gente não perder." Agora exporte: clique em File, depois Export, depois Export As. Na janela, apague o nome antigo e escreva moeda.gif, mostrando a terminação ponto-g-i-f. Aponte a pasta de destino (a pasta Minhas Animações combinada). Clique em Save. Na janela Export GIF que aparece, deixe Resize em 100 por cento e clique em Export. Vá até a pasta, dê dois cliques no arquivo moeda.gif e mostre a moeda girando sozinha. Faça palmas.

Mão na massa (25 min): Cada criança repete no seu computador. Passe de mesa em mesa. Os passos, na ordem, são: File, depois Save; depois File, depois Export, depois Export As; escrever o nome moeda.gif; conferir a pasta; clicar em Save; clicar em Export. Como leem pouco, faça por demonstração: aponte cada botão antes de a criança clicar. Quando o GIF estiver salvo, abra junto com a criança no visualizador e comemore.

Desafio e compartilhar (10 min): Reúna a turma. Abra, um de cada vez, o GIF de cada criança no telão. Toda a turma bate palma para cada moeda. Entregue um adesivo ou estrelinha de "Animador". Termine dizendo que na próxima aula essas moedas vão entrar no jogo.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use a analogia da figurinha que se mexe: "O GIF é uma figurinha mágica que dança sozinha." Para exportar, diga: "Vamos tirar a nossa moeda de dentro do programa e colocá-la numa caixinha, o arquivo." Para a pasta: "A pasta é a gavetinha onde a gente guarda a caixinha para não perder." Para o looping: "Olha, ela chegou no fim e voltou pro começo sozinha, ela nunca cansa!". Evite as palavras formato e exportar sozinhas; sempre acompanhe com o gesto de apontar a tela.

## Erros comuns e como ajudar

O erro mais comum é confundir Salvar com Exportar e achar que o trabalho sumiu. Tranquilize: "Está tudo guardado, só falta tirar a figurinha para fora." Outro erro é esquecer o .gif no nome; reforce a terminação apontando as letras. Algumas crianças salvam na pasta errada e não acham o arquivo; por isso combine uma única pasta para todos. Outras clicam rápido demais e fecham a janela Export GIF sem clicar em Export; peça para esperarem você apontar o botão. Se uma moeda aparecer parada, provavelmente abriram o .aseprite em vez do .gif; abra o arquivo certo junto com a criança.`,
  exercicios: [
    {
      titulo: `Caça à figurinha que se mexe`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece a aula com a turma sentada em roda de frente para o telão. Mostre o GIF-exemplo já pronto rodando e depois mostre uma foto parada (um desenho que não se mexe). Conduza a comparação com perguntas simples, deixando cada criança responder.`,
      atividade: `Olhem a tela. Uma imagem está paradinha, a outra está se mexendo sozinha. Levantem a mão e digam: qual delas é a figurinha mágica que dança? Por que vocês acham que ela se mexe?`,
      gabarito: `A criança aponta corretamente o GIF (a imagem que se mexe) como a figurinha que dança e identifica que a outra está parada. Espera-se que diga, com as próprias palavras, que o GIF se mexe porque tem vários quadrinhos passando rápido, um atrás do outro. Acertou se distinguir o que se mexe do que está parado.`,
    },
    {
      titulo: `Onde guardar a caixinha?`,
      tipo: `desenho e papel`,
      tempo: `8 min`,
      guiaProfessor: `Entregue uma folha e lápis de cor. Explique que todo arquivo precisa de um nome e de uma pasta (gavetinha) para morar. Peça que cada criança desenhe a sua moeda dentro de uma caixinha e desenhe uma gaveta ao lado para guardá-la, escrevendo (ou copiando do quadro) o nome moeda.`,
      atividade: `Desenhe a sua moeda dentro de uma caixinha (o arquivo). Ao lado, desenhe uma gaveta (a pasta) onde ela vai morar. Escreva ou copie do quadro o nome da caixinha: moeda. Pinte do jeito que você quiser.`,
      gabarito: `O desenho mostra a moeda dentro de uma caixinha (representando o arquivo) e uma gaveta ao lado (representando a pasta), com o nome moeda escrito ou copiado. Acertou se mostrar que entendeu que o arquivo tem um nome e fica guardado numa pasta. Não se avalia a beleza do desenho nem a caligrafia.`,
    },
    {
      titulo: `Exportando a minha moeda`,
      tipo: `prática na ferramenta`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a atividade central. Cada criança, no seu computador com o projeto da moeda aberto, exporta o GIF com você passando de mesa em mesa. Faça por demonstração, apontando cada botão antes do clique. Acompanhe a abertura do arquivo no visualizador e comemore com cada um.`,
      atividade: `Vamos guardar a sua moeda como figurinha que dança. Siga os passos comigo: 1) clique em File e depois Save para guardar; 2) clique em File, depois Export, depois Export As; 3) escreva o nome moeda.gif; 4) confira a pasta Minhas Animações; 5) clique em Save; 6) clique em Export. Agora abra o arquivo e veja a moeda girar sozinha!`,
      gabarito: `Existe, na pasta combinada, um arquivo chamado moeda.gif que, ao ser aberto no visualizador de imagens, mostra a moeda girando em looping fora do Aseprite. Acertou quando o GIF abre e gira sozinho. É aceitável que a criança tenha precisado de ajuda em alguns cliques, desde que o arquivo final exista e rode.`,
    },
    {
      titulo: `Salvar ou Exportar? O jogo dos botões`,
      tipo: `jogo`,
      tempo: `8 min`,
      guiaProfessor: `Em pé, faça um jogo de respostas rápidas para fixar a diferença entre Salvar (guarda o projeto) e Exportar (gera o GIF). Você diz uma situação e as crianças respondem com um gesto combinado: mãos no peito para Salvar (guardar para mim) e mãos abertas para a frente para Exportar (mostrar para todos).`,
      atividade: `Quando eu disser uma frase, façam o gesto certo. Mãos no peito é Salvar. Mãos para a frente é Exportar. Frases: "Quero guardar para não perder o meu trabalho." / "Quero fazer a figurinha que dança para mostrar." / "Quero abrir de novo amanhã no Aseprite." / "Quero mandar a moeda girando para a minha mãe."`,
      gabarito: `Gestos esperados: guardar para não perder = Salvar (mãos no peito); fazer a figurinha que dança para mostrar = Exportar (mãos para a frente); abrir de novo amanhã no Aseprite = Salvar (mãos no peito); mandar a moeda girando para a mãe = Exportar (mãos para a frente). Acertou quem associa guardar o trabalho a Salvar e mostrar a figurinha que se mexe a Exportar.`,
    },
    {
      titulo: `Desafio do animador: dois tamanhos`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Para quem terminou primeiro, proponha exportar uma segunda versão da moeda em tamanho maior, mexendo na opção Resize. Mostre no telão onde fica o campo Resize na janela Export GIF e como trocar de 100 por cento para 200 ou 400 por cento. Ajude a dar um nome diferente para não substituir o primeiro arquivo.`,
      atividade: `Você já tem a sua moeda salva. Agora faça uma versão GRANDE! Exporte de novo (File, Export, Export As), dê o nome moeda-grande.gif e, na janela Export GIF, mude o Resize de 100 por cento para 400 por cento antes de clicar em Export. Abra os dois e compare os tamanhos.`,
      gabarito: `Existem dois arquivos GIF da mesma moeda na pasta: moeda.gif (tamanho normal) e moeda-grande.gif (visivelmente maior, com Resize aumentado). Ao abrir os dois, a versão grande aparece maior na tela e ambas giram. Acertou quem gerar o segundo arquivo com nome diferente e tamanho maior, sem apagar o primeiro.`,
    },
  ],
};
