import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Posicionar e fatiar a minha peça",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança coloca o seu item 3D na mesa do Bambu Studio, gira, move e ajusta o tamanho para caber bem, aperta o botão de fatiar para ver a peça virar camadas e salva o arquivo pronto para imprimir.`,
  descricao: `Nesta aula, o item 3D que a criança criou nas ferramentas de modelagem dá o seu primeiro grande passo rumo ao mundo real. Na aula passada, a turma entendeu que um modelo virtual pode virar um objeto de verdade. Hoje, cada aluno abre o seu próprio arquivo dentro do Bambu Studio, o programa que conversa com a impressora Bambu Lab, e prepara a peça na mesa virtual antes de imprimir de fato.

A primeira parte do trabalho é arrumar a peça na mesa. Assim como a gente coloca um brinquedo em cima da mesa para que ele fique firme e em pé, aqui a criança aprende a mover o item para o meio da mesa, girar para deixar a melhor face encostada embaixo e ajustar o tamanho para que ele não fique nem gigante demais nem pequenininho demais. Tudo isso é feito arrastando o objeto e clicando em botões com ícones bem simples na barra de ferramentas do lado esquerdo.

A segunda parte é a mágica do fatiamento. A palavra "fatiar" assusta, mas a ideia é deliciosa de explicar: a impressora não sabe construir um objeto inteiro de uma vez, então ela precisa que a gente corte o modelo em fatias bem fininhas, como as fatias de um pão de forma empilhadas. Quando a criança aperta o botão de fatiar, o programa mostra a peça dividida em camadas e calcula quanto tempo vai levar e quanto material vai gastar.

Por fim, cada aluno salva o arquivo já fatiado, o famoso arquivo que a impressora entende, deixando tudo pronto para a aula em que a impressão começa de verdade. O foco do professor é guiar, passo a passo, onde clicar no Bambu Studio, comemorar cada peça bem posicionada e mostrar a beleza das camadas aparecendo na tela.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com o Bambu Studio já aberto e o arquivo 3D de cada aluno carregado na mesa.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada clique no Bambu Studio na tela grande.`,
    `Um projeto de exemplo do professor, com uma peça já posicionada e já fatiada, para mostrar o resultado final logo no começo.`,
    `Duas ou três peças impressas prontas, de aulas ou exemplos anteriores, para as crianças segurarem e entenderem que aquilo na tela vira objeto de verdade.`,
    `Um pão de forma de brinquedo ou imagem de pão fatiado para a analogia das camadas (opcional, mas ajuda muito).`,
    `Folhas de papel e lápis de cor para o exercício de desenhar as camadas da peça.`,
    `Lista com o nome do arquivo de cada criança, para o professor achar rápido o modelo de quem precisar de ajuda.`,
  ],
  conceitosChave: [
    `Mesa (placa) — é o chão quadriculado na tela onde a gente coloca a peça; é o mesmo lugar onde a impressora vai construir o objeto de verdade.`,
    `Posicionar (mover) — é arrastar a peça para o meio da mesa, no lugar certo, para ela ficar bem apoiada.`,
    `Girar (rotacionar) — é virar a peça para deixar o lado mais plano encostado embaixo, para ela não cair.`,
    `Escala (tamanho) — é deixar a peça maior ou menor, sem deformar, para ela caber bem e ficar do tamanho que a gente quer.`,
    `Fatiar (Slice) — é o programa cortar o modelo em fatias bem fininhas e empilhadas, como pão de forma, porque a impressora constrói camada por camada.`,
    `Camada — é cada fatia fininha que a impressora vai colocar uma em cima da outra até formar a peça inteira.`,
    `Salvar/Exportar — é guardar o arquivo já fatiado, prontinho para a impressora ler e imprimir na próxima aula.`,
  ],
  treinamento: `## O que o professor precisa saber

O Bambu Studio é o programa que prepara um modelo 3D para a impressora Bambu Lab. Pense nele como a cozinha onde a gente arruma o prato antes de mandar para o forno. A tela tem uma mesa quadriculada no centro (a placa de impressão), uma barra de ferramentas vertical do lado esquerdo com ícones de Mover, Girar e Escala, e um botão grande de fatiar (Slice Plate, "Fatiar placa") no canto inferior direito. Depois de fatiar, aparece o botão de exportar para um cartão ou enviar para a impressora.

Três ajustes importam nesta aula. Mover (ícone de setas para os lados) coloca a peça no centro da mesa. Girar (ícone de seta curva) vira a peça para deixar a face mais plana encostada embaixo, o que evita que ela tombe. Escala (ícone de quadrado com setas nos cantos) muda o tamanho; deixe a opção de travar proporção ligada para a peça não deformar. Antes da aula, abra o seu projeto de exemplo, posicione e fatie uma peça para conferir que tudo funciona e cronometrar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento/revisão: mostre no projetor uma peça impressa de verdade e o mesmo modelo na mesa do Bambu Studio. Pergunte: "Como será que isto na tela vira aquilo na minha mão?". Reveja a aula passada e peça que cada criança abra o Bambu Studio e confirme que vê o próprio item na mesa.

15 min — Conteúdo novo guiado: na tela grande, faça os passos devagar. Um: clique na peça e, no ícone Mover (setas para os lados), arraste para o centro da mesa. Dois: clique no ícone Girar (seta curva) e gire a peça para que o lado mais chato fique encostado embaixo. Três: clique no ícone Escala (quadrado com setas) e ajuste o tamanho, conferindo que a proporção está travada. Quatro: aperte o botão Slice Plate (Fatiar placa), no canto inferior direito, e mostre a peça virando camadas; arraste a barrinha lateral para ver as camadas subindo. Cinco: clique em Export (Exportar) e salve o arquivo com o nome da criança.

25 min — Mão na massa: cada criança repete nos próprios arquivos. Circule pela sala. Garanta que todos centralizaram a peça, deixaram a face plana embaixo, ajustaram o tamanho com a proporção travada, apertaram Slice Plate e salvaram. Comemore cada peça bem fatiada.

10 min — Desafio + compartilhar: proponha o desafio de descobrir, no tempo que o programa mostra, qual peça da turma vai imprimir mais rápido. Depois, cada criança mostra na tela a sua peça em camadas e diz quantos minutos vai levar.

## Como explicar para crianças

Diga que a mesa é o chão onde a peça vai nascer, e a gente coloca a peça no meio para ela ficar firme. Para girar, use a ideia de deitar um boneco: "vamos deitar a peça do lado mais chato para ela não cair". Para o tamanho, fale em roupa: "nem gigante, nem do tamanho de uma formiguinha". A estrela da aula é o fatiar: traga um pão de forma e diga que a impressora não faz o objeto de uma vez, ela empilha fatias fininhas, uma em cima da outra, até formar a peça. O botão Slice Plate é o que corta o pão em fatias na tela.

## Erros comuns e como ajudar

Peça flutuando ou fora da mesa: a criança moveu demais; clique na peça e use o ícone Mover para trazer de volta ao centro, ou o botão de centralizar. Peça deformada (esticada ou achatada): a trava de proporção estava desligada na Escala; mostre o cadeado e refaça com Ctrl+Z. Peça em pé que vai cair: girem para deixar a face plana embaixo. Esqueceu de fatiar: lembre que sem apertar Slice Plate o arquivo não fica pronto; o botão de exportar só funciona depois de fatiar. Salvou sem nome: peça sempre o nome da criança no arquivo, para não perder na próxima aula.`,
  exercicios: [
    {
      titulo: `Peça no meio da mesa`,
      tipo: `prática na ferramenta`,
      tempo: `4 min`,
      guiaProfessor: `Mostre no projetor o ícone Mover (setas para os lados) na barra esquerda e como arrastar a peça para o centro da mesa quadriculada. Circule e ajude quem jogou a peça para fora da mesa, lembrando do botão de centralizar.`,
      atividade: `Abra o seu arquivo, clique na sua peça e use o ícone Mover para arrastá-la bem para o meio da mesa.`,
      gabarito: `A peça fica apoiada no centro da mesa quadriculada, sem partes para fora da placa. Acertou quando o objeto está no meio e nenhuma parte aparece em vermelho ou fora da área.`,
    },
    {
      titulo: `Deitar a peça do lado certo`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Demonstre o ícone Girar (seta curva) e gire a peça até o lado mais plano ficar encostado embaixo. Use a analogia de deitar um boneco para ele não cair. Ajude quem deixou a peça em pé e instável.`,
      atividade: `Clique na sua peça, use o ícone Girar e vire a peça até o lado mais chato dela ficar encostado embaixo, na mesa.`,
      gabarito: `A face mais plana da peça está apoiada na mesa e a peça fica estável, sem risco de tombar. Acertou quando o lado liso encosta embaixo e a peça parece firme em pé.`,
    },
    {
      titulo: `Nem gigante, nem formiguinha`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Mostre o ícone Escala (quadrado com setas nos cantos) e confira que a trava de proporção (cadeado) está ligada, para a peça não deformar. Reforce o desfazer (Ctrl+Z) para quem exagerar no tamanho.`,
      atividade: `Clique na sua peça, abra a Escala e ajuste o tamanho até ela ficar do jeito certo, conferindo que o cadeado da proporção está fechado.`,
      gabarito: `A peça muda de tamanho mantendo a forma original (não está esticada nem achatada) e cabe bem na mesa. Acertou quando o tamanho ficou bom e a peça continua com a forma certa.`,
    },
    {
      titulo: `A mágica de fatiar`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Guie até o botão Slice Plate (Fatiar placa), no canto inferior direito. Depois de fatiar, mostre a barrinha lateral que sobe as camadas e onde o programa mostra o tempo e o material. Por fim, oriente a clicar em Export e salvar com o nome da criança. Confira que cada um fatiou antes de exportar.`,
      atividade: `Aperte o botão Slice Plate, arraste a barrinha para ver as camadas da sua peça e depois clique em Export para salvar o arquivo com o seu nome.`,
      gabarito: `A peça aparece dividida em camadas na tela, o programa mostra o tempo e o material, e o arquivo é salvo com o nome da criança. Acertou quando vê as fatias e o arquivo fica salvo e pronto.`,
    },
    {
      titulo: `Quem imprime mais rápido?`,
      tipo: `desafio + roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Depois de todos fatiarem, lance o desafio de olhar o tempo que o Bambu Studio mostra para cada peça. Faça uma roda: cada criança diz quantos minutos a sua peça vai levar e a turma descobre junto qual será a mais rápida e a mais demorada. Aproveite para falar que peças maiores demoram mais.`,
      atividade: `Olhe na tela quantos minutos a sua peça vai levar para imprimir e conte para a turma. Depois, juntos, descubram qual peça da turma vai ficar pronta mais rápido.`,
      gabarito: `A criança encontra e diz o tempo de impressão da sua peça e participa da comparação, percebendo que peças maiores ou mais cheias levam mais tempo. Acertou quando lê o tempo na tela e compara com os colegas na roda.`,
    },
  ],
};
