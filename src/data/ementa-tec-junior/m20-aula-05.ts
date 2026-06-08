import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Grande, pequeno ou certinho? A proporção",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a comparar e ajustar o tamanho dos nossos itens 3D no Maya para que uma moeda, um baú e uma poção combinem entre si dentro do jogo.`,
  descricao: `Nesta aula a turma vai descobrir uma palavra muito importante para quem cria jogos: proporção. Proporção é o jeito de comparar o tamanho das coisas, perguntando "isto é maior, menor ou do mesmo tamanho que aquilo?". No mundo real a gente já sabe que uma formiga é menor que um elefante, e uma moeda é menor que uma caixa de tesouro. Quando criamos itens no computador, precisamos lembrar dessa lógica, senão nosso jogo fica engraçado do jeito errado: uma moeda gigante do tamanho de uma casa ou um baú minúsculo que ninguém consegue ver.

Até agora as crianças modelaram vários itens separados, cada um na sua própria janela, sem comparar um com o outro. O problema é que cada item foi criado sozinho, então um pode ter saído enorme e outro pequenininho sem a gente perceber. Quando juntarmos tudo no mesmo jogo, esses tamanhos precisam fazer sentido juntos. É por isso que nesta semana vamos colocar os itens lado a lado e olhar com calma para ajustar cada um.

A ferramenta principal de hoje é a Scale Tool (Ferramenta de Escala) do Maya, que serve justamente para deixar um objeto maior ou menor. Vamos também usar um truque de professor: colocar um objeto de referência, como um cubo do tamanho do personagem, para comparar todos os itens com ele. Assim as crianças têm uma régua visual e descobrem sozinhas quando algo está grande demais ou pequeno demais.

Ao final da aula, cada aluno terá olhado para a sua coleção de itens, comparado os tamanhos e corrigido o que estava fora de medida. O resultado é um conjunto de itens que parece de verdade: a moeda cabe na mão, o baú é grande o suficiente para guardar coisas e a poção tem um tamanho que combina com tudo. Esse cuidado com a proporção é o que faz um jogo parecer bem feito e profissional.`,
  materiais: [
    `Computadores com o Autodesk Maya aberto e os itens 3D já modelados nas aulas anteriores`,
    `Projetor ou TV ligados ao computador do professor para demonstrar cada passo`,
    `Um arquivo de exemplo do professor com 3 itens já prontos (uma moeda, um baú e uma poção)`,
    `Um cubo de referência do "tamanho do personagem" salvo para comparar os itens`,
    `Objetos reais para a analogia: uma moeda de verdade, uma caixinha e um copo`,
    `Folha impressa com desenhos de itens em tamanhos certos e errados para a turma apontar`,
    `Adesivos ou estrelinhas para premiar quem deixar a coleção na medida certa`,
  ],
  conceitosChave: [
    `Proporção — é comparar o tamanho das coisas para ver o que é maior, menor ou igual.`,
    `Escala (Scale) — esticar ou encolher um objeto para deixá-lo maior ou menor.`,
    `Scale Tool — a ferramenta do Maya, com um cubinho colorido, que muda o tamanho dos objetos.`,
    `Objeto de referência — um item que a gente usa como régua para comparar todos os outros.`,
    `Tamanho relativo — não importa só o número, importa o tamanho de uma coisa perto da outra.`,
    `Proporção uniforme — crescer ou encolher por igual em todos os lados, sem ficar achatado ou esticado.`,
    `Outliner — a listinha do Maya onde aparecem os nomes de todos os objetos da cena.`,
  ],
  treinamento: `## O que o professor precisa saber

Proporção, nesta aula, é simplesmente comparar tamanhos. Você não precisa de matemática complicada nem de números exatos. O objetivo é a criança olhar dois itens lado a lado e sentir se um está grande ou pequeno demais em relação ao outro. A ferramenta-chave é a Scale Tool, que no Maya tem o atalho da tecla R. Ela mostra um manipulador com três cubinhos coloridos (vermelho = eixo X, verde = eixo Y, azul = eixo Z) e um cubinho central. Se você puxar o cubinho central, o objeto cresce ou encolhe por igual em todos os lados. Esse é o segredo de hoje: usar SEMPRE o cubinho central para que o item não fique achatado nem esticado. Antes da aula, abra o Maya, importe ou abra os itens da turma na mesma cena e tenha um cubo simples salvo como "tamanho do personagem" para servir de régua.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre a moeda de verdade, a caixinha e o copo. Pergunte: "Qual é o maior? Qual é o menor?". Depois mostre a folha com desenhos certos e errados (moeda gigante, baú minúsculo) e deixe a turma apontar o que está estranho. Apresente a palavra proporção.

Conteúdo novo guiado (15 min): No Maya, com o projetor, mostre o Outliner (menu Windows > Outliner) para ver a lista de itens. Selecione um item clicando nele. Aperte a tecla R para ligar a Scale Tool. Mostre os cubinhos coloridos e diga que o do meio mexe tudo junto. Puxe devagar o cubinho central e mostre o item crescendo e encolhendo. Depois traga o cubo de referência para perto e compare: "Olha, a moeda está maior que o personagem, isso está errado!". Encolha a moeda até ficar do tamanho certo.

Mão na massa (25 min): Cada criança abre os próprios itens na mesma cena (ou você já deixou tudo aberto). Peça que tragam o cubo de referência para o lado. Um de cada vez, selecionam o item, apertam R e usam o cubinho central para ajustar o tamanho comparando com o cubo. A regra é: moeda pequena, poção média, baú grande. Passe nas mesas ajudando a clicar no cubinho certo. Lembre sempre: "Use o cubinho do meio para crescer por igual".

Desafio e compartilhar (10 min): Lance o desafio "fila do tamanho": cada aluno organiza os itens em linha, do menor para o maior. Depois cada um mostra a tela e os colegas dizem se está na medida certa. Dê estrelinhas para as coleções bem proporcionais.

## Como explicar para crianças

Use a analogia da família: "O baú é o pai, grandão; a poção é o irmão do meio; a moeda é o bebê, pequenininha". Outra imagem boa é a boneca russa (matrioska), uma dentro da outra, do menor ao maior. Para a Scale Tool, diga: "O cubinho do meio é mágico, ele faz a coisa crescer inteira, igual a um balão enchendo". Evite falar em números; fale em "maior que", "menor que" e "do tamanho do personagem". Repita a frase de ouro: "A moeda nunca pode ser maior que o baú".

## Erros comuns e como ajudar

O erro número um é a criança puxar um cubinho colorido lateral em vez do central, deixando o item achatado ou esticado como um chiclete. Mostre na hora como apertar Ctrl+Z (desfazer) e puxar o cubinho do meio. Outro erro é arrastar rápido demais e o item virar um pontinho ou um gigante: peça movimentos lentos. Algumas crianças esquecem de selecionar o objeto antes e mexem no nada; ensine a clicar no item ou no nome dele no Outliner primeiro. Por fim, há quem queira deixar tudo do mesmo tamanho; lembre que num jogo bonito as coisas têm tamanhos diferentes e isso é proposital.`,
  exercicios: [
    {
      titulo: `Maior, menor ou igual?`,
      tipo: `Aquecimento oral em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre pares de objetos reais e desenhos. Faça as crianças responderem em voz alta apontando o maior e o menor. Não use o computador ainda; o objetivo é treinar o olhar para comparar tamanhos.`,
      atividade: `Olhe os objetos que o professor mostrar (moeda, caixinha, copo) e diga qual é o maior e qual é o menor. Depois aponte na folha qual desenho está com o tamanho errado.`,
      gabarito: `A moeda é a menor, a caixinha é a maior e o copo fica no meio. Na folha, o desenho errado é a moeda gigante e o baú minúsculo, porque no jogo a moeda tem que ser pequena e o baú grande.`,
    },
    {
      titulo: `Ligando a ferramenta de escala`,
      tipo: `Prática guiada no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada criança selecione um item e aperte a tecla R para abrir a Scale Tool. Confirme com todos que apareceram os cubinhos coloridos e o cubinho central. Mostre a diferença entre puxar o do meio e os laterais.`,
      atividade: `Clique em um item da sua cena. Aperte a tecla R no teclado. Olhe os cubinhos que apareceram. Puxe devagar só o cubinho do meio e veja o item crescer e encolher por igual.`,
      gabarito: `Ao apertar R aparece a Scale Tool, com três cubinhos coloridos (vermelho, verde e azul) e um cubinho central. Puxando o cubinho central, o objeto fica maior ou menor por igual em todos os lados, sem achatar.`,
    },
    {
      titulo: `Comparando com o personagem`,
      tipo: `Atividade de comparação`,
      tempo: `12 minutos`,
      guiaProfessor: `Traga o cubo de referência "tamanho do personagem" para perto dos itens de cada aluno. Peça que comparem item por item e digam se está grande demais, pequeno demais ou certo. Só depois ajustem com a Scale Tool.`,
      atividade: `Coloque o cubo do personagem ao lado dos seus itens. Para cada item pergunte: ele é maior, menor ou do tamanho certo perto do personagem? Ajuste com o cubinho do meio até a moeda ficar pequena, a poção média e o baú grande.`,
      gabarito: `A moeda deve ficar bem menor que o personagem (cabe na mão), a poção fica média (mais ou menos até a cintura do personagem) e o baú fica grande, do tamanho do personagem ou um pouco menor. Qualquer item maior que o personagem deve ser encolhido.`,
    },
    {
      titulo: `A fila do tamanho`,
      tipo: `Desafio de organização`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno coloque todos os itens em uma linha na cena, do menor para o maior. Eles devem mover os objetos para formar a fila. Verifique se a ordem dos tamanhos está correta antes de seguir.`,
      atividade: `Organize seus itens numa fila, da esquerda para a direita, começando pelo menor e terminando no maior. Olhe a fila inteira e veja se cada item é um pouquinho maior que o anterior.`,
      gabarito: `A fila correta começa na moeda (menor), depois a poção (média) e termina no baú (maior). Se algum item estiver fora de ordem ou do mesmo tamanho que outro que deveria ser diferente, é preciso ajustar a escala dele.`,
    },
    {
      titulo: `Conserte a cena bagunçada`,
      tipo: `Resolução de problema`,
      tempo: `12 minutos`,
      guiaProfessor: `Abra ou entregue um arquivo do professor com tamanhos propositalmente errados: moeda gigante, baú minúsculo e uma poção esticada (achatada por terem usado o cubinho lateral). Peça que a turma descubra e conserte cada erro usando a Scale Tool e o cubo de referência.`,
      atividade: `Olhe a cena bagunçada que o professor abriu. Descubra quais itens estão com o tamanho errado. Conserte: encolha a moeda gigante, aumente o baú minúsculo e arrume a poção esticada usando sempre o cubinho do meio.`,
      gabarito: `São três erros. A moeda gigante deve ser encolhida até ficar menor que o personagem. O baú minúsculo deve ser aumentado até ficar grande. A poção esticada foi feita puxando um cubinho lateral; o conserto é desfazer com Ctrl+Z ou usar o cubinho central para deixá-la com forma normal de novo. No fim, a ordem certa é moeda menor, poção média e baú maior.`,
    },
  ],
};
