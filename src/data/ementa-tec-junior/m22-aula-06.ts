import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Imprimindo meu modelo para levar pra casa",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Enviar para a impressora 3D o modelo que cada criança preparou no Maya e acompanhar a máquina construindo a peça camada por camada, para cada aluno levar seu objeto impresso para casa.`,
  descricao: `Chegou o dia mais mágico do mês: a peça que cada criança modelou no Maya vai sair da tela do computador e virar um objeto de verdade, que dá para segurar na mão. Na aula passada, todo mundo deixou seu modelo prontinho e salvo no formato certo para a impressora. Hoje a turma vai ver essa mágica acontecer de pertinho, acompanhando a impressora 3D trabalhar.

A impressora 3D funciona de um jeito que encanta as crianças: ela desenha o objeto deitadinho, uma camada bem fininha de cada vez, igual a quem empilha panquecas até montar uma torre. O bico quente derrete um fio de plástico e vai colocando esse plástico camada sobre camada, de baixo para cima. Cada camada é tão fina quanto uma folha de papel, e por isso a impressão é devagar e exige paciência, como esperar um bolo assar no forno.

Como a impressão de uma peça leva mais tempo do que uma aula de uma hora, o professor já deixa algumas peças impressas com antecedência, ou usa uma impressão rápida e pequena para a turma ver começando. O importante desta aula não é a velocidade, e sim a experiência: ver o modelo nascer, entender que o desenho 3D do Maya virou matéria de verdade e sentir o orgulho de segurar a própria criação.

Ao final, cada criança recebe seu objeto impresso para levar para casa e mostrar para a família. É o momento em que o trabalho do mês inteiro ganha forma física. Eles saem da sala carregando uma prova concreta de que são criadores: pensaram, modelaram no computador e fabricaram algo real.`,
  materiais: [
    `Computadores com o Maya aberto e o modelo de cada criança já finalizado e salvo`,
    `Impressora 3D montada, ligada e testada antes da aula, com filamento (rolo de plástico) carregado`,
    `Arquivos dos modelos já exportados no formato da impressão (OBJ ou STL) e prontos no programa de fatiamento`,
    `Projetor ou TV para mostrar a impressora trabalhando bem de perto, sem a turma precisar se amontoar`,
    `Peças já impressas com antecedência (uma por criança, ou exemplos prontos para todos verem o resultado)`,
    `Saquinhos ou caixinhas para cada aluno guardar e levar a peça com segurança para casa`,
    `Luva ou pano para o professor tocar na peça quente com cuidado (a criança nunca toca o bico da impressora)`,
  ],
  conceitosChave: [
    `Impressora 3D — uma máquina que pega o seu desenho do computador e fabrica um objeto de verdade em plástico.`,
    `Camada — uma fininha fileira de plástico; a impressora empilha muitas camadas, uma sobre a outra, até montar a peça.`,
    `Filamento — o fio de plástico em rolo que a impressora derrete para construir o seu modelo.`,
    `Bico (extrusor) — a parte quente da impressora que derrete o plástico e o espalha; nunca encostamos nele.`,
    `Fatiar — picar o modelo 3D em muitas camadas finas para a impressora saber a ordem de construção.`,
    `Mesa de impressão — a base lisa onde a peça vai sendo construída de baixo para cima.`,
    `Imprimir — apertar o botão e mandar a máquina começar a fabricar a sua peça camada por camada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser engenheiro nem dominar impressão 3D para conduzir esta aula. O trabalho técnico pesado já foi feito antes: o modelo está salvo e exportado. No Maya, lembre que para conferir e exportar uma peça você usa o menu "File" (Arquivo) e a opção "Export Selection..." (Exportar Seleção), escolhendo o formato OBJ ou STL no campo "Files of type". Mas hoje o protagonista é a impressora, não o Maya.

Antes da turma chegar, faça três coisas: ligue a impressora e deixe-a aquecer; confira que o filamento (rolo de plástico) está carregado e passando pelo bico; e tenha em mãos peças já impressas, porque uma impressão completa leva mais tempo do que a aula. O programa que transforma o modelo em camadas chama-se "fatiador" (slicer); ali você abre o arquivo OBJ/STL, aperta "Slice" (Fatiar) e depois envia para a impressora ou salva no cartão. Segurança em primeiro lugar: o bico e a mesa ficam muito quentes, então nenhuma criança encosta na máquina sem você ao lado.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): sente a turma em roda e relembre o mês. Pergunte: "O que a gente fez no Maya?". Mostre no projetor o modelo 3D de uma criança girando na tela e diga que hoje ele vai virar de verdade. Passe de mão em mão uma peça já impressa para todos sentirem o plástico. Crie expectativa: "Vamos ver a máquina mágica construir!".

Conteúdo novo guiado (15 min): explique a impressora com a analogia das panquecas empilhadas. No computador ligado à impressora, abra o fatiador, mostre o modelo na tela e aponte as muitas camadas finas que ele virou. Aperte "Slice" (Fatiar) e mostre o tempo estimado aparecendo. No Maya, abra rapidamente o arquivo de uma criança e mostre que foi dali que tudo saiu. Depois aperte "Print" (Imprimir) e deixe a impressora começar diante da turma.

Mão na massa (25 min): com a impressora trabalhando, leve a turma para observar de pertinho, em pequenos grupos ou pelo projetor, apontando o bico se movendo e a camada nascendo. Enquanto a máquina trabalha, cada criança volta ao seu computador no Maya, confere seu modelo, gira a câmera com Alt + botão esquerdo do mouse e verifica se está do jeito que quer. Quem terminou ajuda a nomear sua peça impressa. Distribua as peças já prontas e deixe cada um examinar a sua.

Desafio e compartilhar (10 min): desafie cada criança a achar no próprio objeto as "linhas das camadas" passando o dedo de leve. Faça uma roda final: cada aluno mostra sua peça, diz o que é e o que mais gostou de ter criado. Guarde tudo nos saquinhos para levar para casa.

## Como explicar para crianças

Use a imagem das panquecas: "A impressora coloca uma panqueca de plástico bem fininha, depois outra em cima, e outra, até montar o seu boneco." Compare a espera com um bolo no forno: "Demora porque está sendo feito com capricho." Diga que o bico é quentinho como o ferro de passar, por isso só o professor chega perto. Reforce o orgulho: "Esse objeto saiu da SUA cabeça, você desenhou no Maya e a máquina fabricou."

## Erros comuns e como ajudar

A criança quer tocar na impressora ligada: combine a regra do "olhar com os olhos, não com as mãos" e fique sempre entre a turma e a máquina. A criança fica frustrada porque a impressão demora: mostre a peça já pronta e explique que coisas caprichadas levam tempo. Vários querem ficar na frente ao mesmo tempo: organize fila ou use o projetor para todos verem juntos. A criança acha que a peça veio "errada" por causa das linhas: explique que as linhas são as camadas, a marca registrada da impressão 3D, e são bonitas. A criança mexe demais no Maya e bagunça o modelo: peça para apenas girar a câmera com Alt + botão esquerdo, sem clicar e arrastar os pontos do objeto.`,
  exercicios: [
    {
      titulo: `Detetive das camadas`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Distribua uma peça impressa para cada criança (ou em duplas). Peça que passem o dedo de leve sobre a superfície e encontrem as linhas finas. Explique que cada linha é uma camada que a impressora empilhou.`,
      atividade: `Pegue a peça impressa e passe o dedinho devagar nela. Você consegue sentir e ver várias linhas? Conte quantas camadas você acha que tem perto da base.`,
      gabarito: `A criança identifica as linhas horizontais como camadas empilhadas. Acerto = perceber que o objeto é feito de muitas camadas finas, uma sobre a outra. Não importa o número exato: vale dizer "muitas" ou um número aproximado.`,
    },
    {
      titulo: `Empilhando panquecas`,
      tipo: `Analogia com gestos`,
      tempo: `6 minutos`,
      guiaProfessor: `Em roda, peça que cada criança mostre com as mãos como a impressora monta a peça: uma camada por vez, de baixo para cima. Use a palavra "camada" várias vezes para fixar o conceito.`,
      atividade: `Faça de conta que suas mãos são a impressora. Mostre como ela coloca uma panqueca de plástico, depois outra em cima, e outra, até montar o objeto inteiro. De que lado ela começa, de baixo ou de cima?`,
      gabarito: `A criança gesticula empilhando de baixo para cima e responde "de baixo". Acerto = entender que a impressora 3D constrói camada por camada, começando pela base e subindo. Exemplo: mãos planas subindo aos poucos, uma sobre a outra.`,
    },
    {
      titulo: `Conferindo meu modelo no Maya`,
      tipo: `Prática no Maya`,
      tempo: `6 minutos`,
      guiaProfessor: `Cada criança abre seu modelo no Maya. Ensine a girar a câmera segurando Alt + botão esquerdo do mouse para olhar a peça de todos os lados. Avise para NÃO clicar e arrastar os pontos do objeto, só girar a câmera.`,
      atividade: `No Maya, segure a tecla Alt e o botão esquerdo do mouse e mexa devagar para girar a câmera ao redor do seu modelo. Olhe sua peça de cima, de baixo e dos lados. Está do jeito que você queria?`,
      gabarito: `A criança gira a câmera com Alt + botão esquerdo e observa o modelo por vários ângulos, sem deformar a peça. Acerto = usar a rotação de câmera para conferir o objeto. Erro comum: clicar sem o Alt e arrastar pontos; basta apertar Ctrl + Z para desfazer.`,
    },
    {
      titulo: `Da tela para a máquina`,
      tipo: `Demonstração e perguntas`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre o fatiador com o modelo aberto, aperte "Slice" (Fatiar) e aponte o tempo estimado. Depois aperte "Print" (Imprimir) e deixe a impressora começar. Faça perguntas para a turma acompanhar cada passo.`,
      atividade: `Olhe a tela: o modelo virou muitas camadas no programa de fatiar. Responda em voz alta: o que acontece quando o professor aperta o botão "Imprimir"? E por que será que vai demorar um pouquinho?`,
      gabarito: `A criança responde que a impressora começa a construir a peça camada por camada e que demora porque cada camada é fina e feita com capricho. Acerto = ligar o "Imprimir" ao início da fabricação e entender o motivo da espera.`,
    },
    {
      titulo: `Apresento minha criação`,
      tipo: `Compartilhar em roda`,
      tempo: `7 minutos`,
      guiaProfessor: `Roda final. Cada criança segura sua peça impressa, diz o que é, conta uma coisa que gostou de ter criado e mostra as camadas. A turma aplaude. Guarde cada peça no saquinho para ir para casa em segurança.`,
      atividade: `Mostre sua peça impressa para a turma e conte: o que é o seu objeto, em qual programa você o desenhou e qual foi a parte mais legal de criá-lo. No fim, aponte uma camada para os amigos verem.`,
      gabarito: `A criança apresenta a peça dizendo o que é, que foi modelada no Maya e impressa na impressora 3D, e aponta uma camada. Acerto = expressar orgulho da criação e reconhecer o caminho da tela até o objeto real. Exemplo: "É a minha espada, desenhei no Maya e a parte legal foi o cabo."`,
    },
  ],
};
