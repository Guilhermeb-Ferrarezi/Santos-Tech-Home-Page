import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do 3D virtual para o objeto de verdade",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança entende que um item 3D feito no computador vira um objeto de verdade quando passa por um programa que fatia o modelo, e conhece a mesa de impressão e os botões principais do Bambu Studio.`,
  descricao: `Nesta primeira aula do mês de Impressão 3D, a turma dá um passo gigante: tudo o que eles modelaram no computador (aqueles itens 3D feitos para a loja do Roblox) agora pode sair da tela e virar um brinquedo de verdade, que cabe na mão. É um momento mágico, porque pela primeira vez o desenho deixa de ser só luz no monitor e começa o caminho para virar plástico que dá para segurar, mostrar e levar para casa.

Para que essa mágica aconteça, existe um programa especial que conversa com a impressora. Ele se chama Bambu Studio. A impressora não entende um modelo 3D do mesmo jeito que a gente vê na tela; ela precisa de instruções bem pequenas, camada por camada, como uma receita de bolo escrita passo a passo. O trabalho de transformar o modelo bonito numa receita que a impressora entende tem um nome: fatiar (em inglês, slice). Fatiar é como cortar o objeto em fatias finíssimas, igual a um pão de forma, para a impressora saber montar uma fatia de cada vez, de baixo para cima.

Hoje a turma não vai imprimir ainda. O objetivo é abrir o Bambu Studio, importar um modelo já pronto e conhecer o cenário onde tudo acontece: a mesa de impressão (aquele quadrado grande no meio da tela, que representa a placa onde a peça vai nascer de verdade), os botões principais e o lugar onde o item aparece. É uma aula de reconhecimento do território, para que nas próximas semanas ninguém fique perdido.

Ao final, cada criança consegue explicar, com as próprias palavras, que o item 3D precisa ser fatiado para virar objeto de verdade, e sabe apontar na tela onde fica a mesa de impressão e onde a peça aparece dentro do Bambu Studio. É a ponte entre o mundo virtual que eles já dominam e o mundo físico que vão descobrir neste mês.`,
  materiais: [
    `Computadores ligados, um por criança, com o Bambu Studio já instalado e aberto na tela inicial (assim ninguém perde tempo procurando o programa).`,
    `Projetor ou TV grande ligada ao computador do professor, para mostrar a tela do Bambu Studio e cada clique para a turma toda ao mesmo tempo.`,
    `Um arquivo de modelo 3D já pronto e simples salvo em todos os computadores (por exemplo, um cubo, um chaveiro ou um item pequeno do Roblox em formato 3MF ou STL), pronto para importar.`,
    `Dois ou três objetos de verdade já impressos em 3D pelo professor (um chaveiro, uma peça pequena), para passar de mão em mão e a turma sentir o resultado final.`,
    `Um pão de forma fatiado de verdade, ou uma foto bem grande dele, para a analogia de fatiar o modelo em camadas.`,
    `Um cartaz ou slide com a palavra FATIAR bem grande e um desenho de um objeto cortado em camadas finas.`,
    `Adesivos ou carimbos de recompensa para o momento de compartilhar (opcional, mas anima muito a turma).`,
  ],
  conceitosChave: [
    `Modelo 3D — é o item que a gente fez no computador, feito de pontinhos e faces, que aparece na tela mas ainda não existe de verdade.`,
    `Impressora 3D — é a máquina que constrói o objeto de verdade, colocando plástico derretido camada por camada até a peça ficar pronta.`,
    `Bambu Studio — é o programa do computador que prepara o modelo e conversa com a impressora, dizendo para ela o que fazer.`,
    `Fatiar (slice) — é cortar o modelo em fatias bem finas, como um pão, para a impressora montar uma fatia de cada vez, de baixo para cima.`,
    `Mesa de impressão — é aquele quadrado grande no meio da tela; representa a placa onde a peça vai nascer de verdade dentro da impressora.`,
    `Importar — é trazer um modelo que já está salvo no computador para dentro do Bambu Studio, igual a abrir uma foto dentro de um programa.`,
    `Camada — é cada fatia fininha do objeto; a impressora empilha muitas camadas, uma em cima da outra, até formar a peça inteira.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. Precisa entender uma única ideia central: a impressora 3D não enxerga o modelo do jeito que a gente vê na tela. Ela só sabe construir o objeto de baixo para cima, depositando plástico em camadas bem finas, uma sobre a outra. Para transformar o modelo bonito numa lista de instruções de camadas, existe um passo chamado fatiar (slice). O programa que faz isso é o Bambu Studio.

Antes da aula, abra o Bambu Studio no seu computador. Na primeira vez ele pede para escolher a impressora; selecione a Bambu Lab que a escola tem (por exemplo, A1 ou P1S) e o filamento padrão (PLA). A tela principal mostra um grande quadrado quadriculado no centro: essa é a mesa de impressão (build plate). No alto, há abas; a aba importante hoje é Preparar (Prepare). Para trazer um modelo, use o botão de importar, que tem o ícone de uma pasta ou a palavra Importar, no canto superior esquerdo. Teste antes: importe o modelo de exemplo e veja a peça aparecer em cima da mesa. Gire a câmera segurando o botão direito do mouse e arrastando; aproxime e afaste com a rodinha. Não aperte Fatiar (Slice) hoje; isso é assunto das próximas aulas.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Bambu Studio)

10 min, aquecimento e revisão: receba a turma e relembre que eles já criaram itens 3D no computador. Pergunte: e se a gente pudesse pegar esse item com a mão de verdade? Passe os objetos já impressos de mão em mão. Mostre o pão fatiado e pergunte como acham que a máquina constrói um brinquedo.

15 min, conteúdo novo guiado: no projetor, abra o Bambu Studio. Aponte para o quadrado quadriculado no meio e diga: esta é a mesa de impressão, o lugar onde a peça vai nascer. Clique no botão Importar (ícone de pasta, canto superior esquerdo) e escolha o modelo de exemplo. A peça aparece em cima da mesa. Gire a câmera com o botão direito do mouse arrastando, e use a rodinha para aproximar. Diga a frase mágica: para virar objeto de verdade, o modelo precisa ser fatiado em camadas. Use o pão como analogia.

25 min, mão na massa: cada criança no seu computador, com o Bambu Studio aberto. Peça que encontrem a mesa de impressão (o quadrado grande do meio). Depois peça que cliquem em Importar e escolham o modelo de exemplo já salvo. Passe de mesa em mesa ajudando a achar o botão. Quando a peça aparecer, oriente a girar a câmera com o botão direito e aproximar com a rodinha. Hoje não fatiamos nada; o objetivo é importar e observar.

10 min, desafio e compartilhar: desafie cada um a girar a peça até olhá-la por baixo e por cima. Faça uma rodinha: cada criança aponta a mesa de impressão na própria tela e diz a frase do dia, que o modelo precisa ser fatiado para virar objeto de verdade. Dê um carimbo a quem explicar o que é fatiar.

## Como explicar para crianças

Use o pão de forma como analogia central: fatiar o modelo é como cortar o pão em fatias finas; a impressora monta uma fatia de cada vez, de baixo para cima, até o objeto ficar inteiro. Diga que o Bambu Studio é o tradutor entre o desenho deles e a máquina: a impressora não fala a língua do desenho, então o programa traduz em camadas. Chame a mesa de impressão de palco, onde a peça vai aparecer. Fale pouco e mostre muito. Repita a palavra FATIAR até virar música e comemore cada modelo que aparece na tela.

## Erros comuns e como ajudar

A criança não acha o botão Importar: mostre que fica no canto superior esquerdo, com ícone de pasta, e clique junto com ela. Ela importa o modelo várias vezes e enche a mesa de cópias: explique que basta uma e ajude a apagar as extras clicando na peça e apertando Delete. Ela gira a câmera e acha que estragou o modelo: tranquilize, é só a vista mudando; gire de volta com o botão direito. Ela tenta apertar Fatiar antes da hora: explique com carinho que fatiar é nas próximas aulas e hoje é só conhecer o cenário. Some um painel da tela: feche e reabra o Bambu Studio. Alguém termina rápido: peça para girar a peça e descrever quantos lados ela tem.`,
  exercicios: [
    {
      titulo: `Da tela para a mão`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e passe os objetos já impressos de mão em mão. Faça perguntas abertas e deixe cada criança falar. Conduza para que a turma perceba que aquele brinquedo na mão um dia foi só um desenho na tela, igual aos que eles fazem. Valide toda resposta com entusiasmo.`,
      atividade: `Segurando uma peça impressa de verdade, responda na roda: você acha que essa peça já foi um desenho no computador? Como será que ela saiu da tela e virou plástico de verdade? O que precisou acontecer no meio do caminho?`,
      gabarito: `A resposta esperada é que sim, a peça começou como um modelo 3D no computador e foi construída de verdade por uma máquina. Conta como acerto qualquer criança que diga que primeiro foi um desenho e depois virou objeto, mesmo sem usar a palavra impressora.`,
    },
    {
      titulo: `Achando a mesa de impressão`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre uma vez no projetor apontando o grande quadrado quadriculado no centro da tela do Bambu Studio. Diga que é a mesa de impressão, o lugar onde a peça vai nascer. Depois passe de mesa em mesa enquanto cada criança procura na própria tela. Se alguém não achar, aponte junto com ela.`,
      atividade: `No seu computador, com o Bambu Studio aberto, ache o quadrado grande quadriculado no meio da tela. Coloque o dedo na tela em cima dele e chame o professor para mostrar que encontrou a mesa de impressão.`,
      gabarito: `A criança acertou quando aponta corretamente para a mesa de impressão (o quadrado quadriculado central) e não confunde com os menus de cima ou os painéis da lateral. Espera-se que ela diga algo como aqui a peça vai nascer.`,
    },
    {
      titulo: `O pão fatiado`,
      tipo: `Demonstração com analogia`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o pão de forma fatiado (ou a foto grande). Separe as fatias uma a uma e depois empilhe de volta para formar o pão inteiro. Conduza para que a turma ligue essa ideia ao fatiar do modelo: a impressora monta o objeto empilhando muitas camadas finas. Repita a palavra fatiar várias vezes.`,
      atividade: `Olhando o pão fatiado, responda e mostre com as mãos: quantas fatias formam o pão inteiro, uma ou muitas? Se a gente empilhar as fatias de baixo para cima, o pão volta a ficar inteiro? E a impressora faz parecido com a nossa peça?`,
      gabarito: `A resposta esperada é que muitas fatias empilhadas formam o pão inteiro, e que a impressora faz igual, empilhando muitas camadas finas de baixo para cima até formar a peça. Conta como acerto quem relacionar as fatias do pão às camadas da impressão.`,
    },
    {
      titulo: `Importando o meu modelo`,
      tipo: `Prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o botão Importar (ícone de pasta, canto superior esquerdo) e clique nele para escolher o modelo de exemplo já salvo. A peça aparece sobre a mesa. Depois peça que cada criança faça o mesmo no seu computador. Passe de mesa em mesa. Se alguém importar várias cópias, ajude a apagar clicando na peça e apertando Delete.`,
      atividade: `No Bambu Studio, clique no botão Importar (o ícone de pasta no canto de cima, à esquerda). Escolha o modelo de exemplo que o professor salvou. Espere a peça aparecer em cima da mesa de impressão. Depois gire a câmera com o botão direito do mouse arrastando e aproxime com a rodinha.`,
      gabarito: `A criança acertou quando consegue clicar em Importar, escolher o modelo e ver a peça aparecer sobre a mesa de impressão, com apenas uma cópia. Ao ser perguntada, ela explica que importar é trazer um modelo salvo para dentro do programa.`,
    },
    {
      titulo: `Explorador 3D: girando a peça`,
      tipo: `Desafio na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Lance como um desafio de explorador. Relembre rápido que para girar a câmera a gente segura o botão direito do mouse e arrasta, e que a rodinha aproxima e afasta. Peça que cada criança olhe a peça por cima, por baixo e dos lados. No fim, faça a rodinha de compartilhar e premie com carimbo quem explicar o que é fatiar.`,
      atividade: `Desafio de explorador: no Bambu Studio, com seu modelo na mesa, segure o botão direito do mouse e arraste para girar a câmera. Olhe a peça por cima, depois por baixo, depois de lado. Use a rodinha para chegar bem perto e ver os detalhes. Conte para um colega quantos lados diferentes você viu.`,
      gabarito: `A criança acertou quando consegue girar a câmera com o botão direito e aproximar com a rodinha, observando a peça de cima, de baixo e dos lados. Ao ser perguntada, explica com as próprias palavras que o modelo precisa ser fatiado em camadas para virar objeto de verdade.`,
    },
  ],
};
