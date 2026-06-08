import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Montando com Formas",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Combinar várias formas básicas no Blender, movendo e ajustando o tamanho de cada peça, até montar uma figura reconhecível como um boneco ou um animalzinho.`,
  descricao: `Nas aulas passadas as crianças aprenderam a girar o mundo 3D, a mexer nos objetos e a colocar formas mágicas (cubo, esfera, cilindro) na tela do Blender. Agora chega a parte mais empolgante: juntar várias dessas formas para construir algo de verdade! Montar com formas é como brincar de blocos de montar ou de massinha, só que dentro do computador. Uma esfera vira a cabeça, um cilindro vira o corpo, dois cubinhos viram os pés. Peça por peça, a figura ganha vida.

A grande ideia desta aula é que tudo no mundo 3D pode ser construído juntando formas simples. Um boneco de neve são três esferas empilhadas. Um cachorrinho é um corpo comprido com quatro perninhas e uma cabeça redonda. Um robô é feito de cubos e cilindros. Quando a criança percebe isso, ela passa a olhar para qualquer coisa e pensar "que formas eu uso para montar isso?". Essa é a base da modelagem 3D de verdade, a mesma técnica que artistas usam em jogos e desenhos animados.

Para montar, a criança vai usar três superpoderes que já conhece: adicionar uma forma nova (menu Add), mover a forma para o lugar certo (tecla G) e mudar o tamanho dela (tecla S). A novidade da aula é a combinação: repetir esses passos várias vezes, encaixando uma peça ao lado da outra, até a figura aparecer. É um trabalho de paciência e capricho, e o resultado deixa qualquer criança orgulhosa.

O professor conduz como um mestre de construção. Você mostra no projetor como montar um bonequinho simples, passo a passo, e depois deixa cada criança montar a sua própria figura. Não existe figura errada: um aluno faz um gato, outro faz um foguete, outro inventa um monstrinho. O importante é praticar o encaixe das formas e perceber que, juntando peças, dá para criar qualquer coisa.`,
  materiais: [
    `Computadores com o Blender já aberto, um para cada criança`,
    `Projetor (ou TV grande) ligado no computador do professor para a demonstração`,
    `Exemplo pronto: um arquivo do Blender com um bonequinho de formas já montado, para mostrar o objetivo`,
    `Cartões ou imagens grandes de figuras simples feitas de formas (boneco de neve, cachorrinho, robô)`,
    `Peças reais de blocos de montar ou massinha, para a analogia com as mãos`,
    `Folha impressa com o desenho das três formas básicas e seus atalhos (G de mover, S de tamanho)`,
    `Mouse com rodinha em cada computador (essencial para girar e dar zoom no mundo 3D)`,
  ],
  conceitosChave: [
    `Montar com formas — juntar várias peças simples, como cubo e esfera, para construir uma figura maior.`,
    `Adicionar (Add) — o menu de cima do Blender que coloca uma forma nova na cena, como tirar uma peça da caixa.`,
    `Mover (tecla G) — pegar uma forma e arrastar para o lugar certo, como encaixar um bloco no boneco.`,
    `Redimensionar (tecla S) — deixar uma forma maior ou menor, esticando ou apertando a peça.`,
    `Encaixar — colocar uma peça bem juntinho da outra, para que pareçam grudadas e formem uma figura só.`,
    `Figura reconhecível — quando a gente olha e já entende o que é, como dizer "olha, é um cachorro!".`,
    `Cena — o espaço 3D do Blender onde colocamos e organizamos todas as nossas formas.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não tem ferramenta nova: ela combina o que as crianças já praticaram. O segredo é a repetição com capricho. Você vai adicionar formas (menu Add), mover com a tecla G e mudar o tamanho com a tecla S, várias vezes, até virar uma figura. Antes da aula, treine montar um bonequinho simples no Blender: uma esfera para a cabeça, um cilindro ou cubo esticado para o corpo, dois cubinhos pequenos para os pés e dois cilindros finos para os braços. Faça isso duas vezes em casa para ganhar segurança nos atalhos.

Relembre os três atalhos essenciais. Para adicionar: clique em "Add" no menu de cima à esquerda da janela 3D, depois "Mesh", e escolha "Cube" (cubo), "UV Sphere" (esfera) ou "Cylinder" (cilindro). Para mover: aperte a tecla G e arraste o mouse; clique para soltar. Para mudar o tamanho: aperte a tecla S e arraste; afaste o mouse para crescer, aproxime para diminuir. Para girar o mundo e ver de todos os lados, segure a rodinha do mouse e arraste. Tenha um exemplo pronto aberto para mostrar onde a turma quer chegar.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Mostre no projetor o bonequinho pronto e pergunte: "Que formas vocês veem aqui?" Deixe que apontem a esfera da cabeça e o cilindro do corpo. Pegue blocos de montar ou massinha de verdade e monte um bichinho com as mãos, dizendo que no Blender é a mesma brincadeira. Reveja rapidinho os atalhos G (mover) e S (tamanho) com todos apertando no ar com o dedo.

CONTEÚDO GUIADO (15 min): No seu computador, com o projetor ligado, monte um boneco passo a passo e narre cada clique. 1. Clique em "Add", "Mesh", "UV Sphere" para a cabeça. 2. Aperte G e arraste a esfera para cima. 3. Clique em "Add", "Mesh", "Cylinder" para o corpo; aperte G e coloque embaixo da cabeça. 4. Aperte S e ajuste o tamanho do corpo. 5. Adicione dois cubos pequenos para os pés, movendo com G e diminuindo com S. Gire o mundo com a rodinha para mostrar a figura de todos os lados.

MÃO NA MASSA (25 min): Agora cada criança monta a sua figura. Deixe escolherem: boneco, animalzinho ou monstrinho. Circule pela sala ajudando. Lembre a sequência mágica: "Adicionar, mover, ajustar o tamanho, repetir." Incentive a usarem pelo menos três formas. Com até 10 alunos, dê atenção individual a quem travar. Peça que girem o mundo de vez em quando para conferir se as peças estão encaixadas.

DESAFIO + COMPARTILHAR (10 min): Lance o desafio "dê um detalhe à sua figura": adicionar mais uma forma pequena, como uma orelha, um chapéu ou um rabinho. Depois, cada criança gira o próprio mundo 3D e mostra a figura para a turma, dizendo que formas usou. Puxe palmas para todos.

## Como explicar para crianças

Use sempre a comparação com blocos de montar e massinha: "Cada forma é uma peça; juntando as peças, a gente constrói qualquer coisa." Para o encaixe, diga "cola uma peça bem juntinho da outra, sem deixar buraco". Para o tamanho, brinque: "Aperta o S e estica como chiclete, ou aperta como uma esponja." Mostre que girar o mundo com a rodinha é como dar a volta em volta de uma estátua para ver as costas dela.

## Erros comuns e como ajudar

A criança adiciona a forma e ela aparece no mesmo lugar da outra, parecendo sumir: explique que estão uma dentro da outra; aperte G e arraste para separar. A criança esquece de clicar para soltar depois do G ou do S, e a peça fica "grudada" no mouse: lembre que é só clicar uma vez para soltar. A figura fica com peças soltas e espalhadas: oriente a girar o mundo e aproximar as formas até encostarem. A criança aperta uma tecla errada e algo estranho acontece: ensine o "Ctrl + Z" para desfazer, o botão mágico de voltar atrás. Alguém quer só uma forma gigante: incentive com carinho a usar pelo menos três peças, mostrando seu exemplo.`,
  exercicios: [
    {
      titulo: `Caça às formas escondidas`,
      tipo: `Roda de observação`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, com a turma olhando o projetor ou os cartões de figuras. O objetivo é treinar o olhar para enxergar formas básicas dentro de objetos do dia a dia, antes de ir para o computador.`,
      atividade: `Mostre imagens de um boneco de neve, um cachorrinho e um robô. Pergunte para a turma: "Que formas estão escondidas aqui? Onde tem esfera? Onde tem cubo? Onde tem cilindro?" As crianças apontam e dizem em voz alta.`,
      gabarito: `Respostas esperadas: no boneco de neve são três esferas; no cachorrinho há esferas e cilindros (corpo e perninhas); no robô há cubos e cilindros. Qualquer criança que aponte ao menos uma forma correta acertou. O ganho é perceber que tudo é feito de formas simples.`,
    },
    {
      titulo: `Empilhando o boneco de neve`,
      tipo: `Prática guiada no computador`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza passo a passo junto com a turma, todos fazendo ao mesmo tempo no Blender. É o exercício mais fácil: só usa esferas e o atalho G. Vá devagar e espere todos terminarem cada passo.`,
      atividade: `Cada criança adiciona três esferas (Add, Mesh, UV Sphere) e usa a tecla G para empilhá-las uma em cima da outra, da maior embaixo até a menor em cima, formando um boneco de neve.`,
      gabarito: `Sucesso é ter três esferas empilhadas, uma sobre a outra, formando um boneco de neve reconhecível. Não precisa estar perfeito: basta que as esferas estejam encaixadas em coluna. Se uma esfera sumir, é porque ficou dentro de outra; basta mover com G.`,
    },
    {
      titulo: `Montando o meu bonequinho`,
      tipo: `Mão na massa individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Este é o coração da aula. Cada criança monta um boneco usando formas diferentes e os três atalhos (Add, G, S). Circule ajudando e relembre a sequência mágica: adicionar, mover, ajustar o tamanho, repetir.`,
      atividade: `Monte um bonequinho com pelo menos quatro formas: uma esfera para a cabeça, um cilindro ou cubo para o corpo, e duas formas pequenas para os pés ou os braços. Use a tecla S para deixar cada peça no tamanho certo e a tecla G para encaixar.`,
      gabarito: `O exercício deu certo quando a criança juntou pelo menos quatro formas, ajustou tamanhos com o S e encaixou as peças com o G, formando algo que pareça um boneco. A figura é reconhecível se a turma consegue dizer "é um boneco". Capriche no encaixe, sem peças voando soltas.`,
    },
    {
      titulo: `Criando o meu animalzinho`,
      tipo: `Desafio criativo no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Aumente um pouco a dificuldade: agora a figura precisa de mais peças e de uma posição "deitada". Ajude quem tiver dificuldade em girar o mundo com a rodinha para conferir as quatro perninhas embaixo do corpo.`,
      atividade: `Monte um animalzinho de quatro patas, por exemplo um cachorrinho: um cilindro deitado para o corpo, quatro cilindros finos para as perninhas (use S para afinar) e uma esfera para a cabeça. Gire o mundo com a rodinha do mouse para conferir todos os lados.`,
      gabarito: `Acertou quem montou um corpo com quatro perninhas embaixo e uma cabeça, usando S para afinar as patas e G para posicioná-las. O animal é reconhecível se tem as quatro patas e a cabeça no lugar. Girar o mundo para conferir mostra que a criança entendeu o espaço 3D.`,
    },
    {
      titulo: `O detalhe especial da minha criação`,
      tipo: `Desafio final e compartilhar`,
      tempo: `6 minutos`,
      guiaProfessor: `Fechamento da aula. Peça um detalhe extra para dar personalidade à figura e depois conduza a apresentação. Puxe palmas para cada criança e celebre a criatividade, sem comparar uns com os outros.`,
      atividade: `Adicione mais uma forma pequena à sua figura como um detalhe especial: uma orelha, um chapéu, um rabinho ou um nariz. Depois, gire o seu mundo 3D e mostre a figura para a turma, dizendo que formas você usou.`,
      gabarito: `Sucesso é a criança adicionar pelo menos um detalhe novo com Add e posicioná-lo com G e S, e depois apresentar dizendo ao menos uma forma que usou (por exemplo "usei uma esfera de chapéu"). Toda figura vale: o objetivo é criar com orgulho e reconhecer as formas usadas.`,
    },
  ],
};
