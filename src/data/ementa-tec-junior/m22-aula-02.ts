import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando personagens e itens novos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança terá modelado de verdade um novo personagem ou item da sua lista, juntando formas básicas e usando o extrude para criar partes, salvando o modelo que faltava pronto para receber cor.`,
  descricao: `Nesta aula as crianças voltam ao Maya com uma missão clara: tirar do papel um dos itens que faltavam no jogo. Na Aula 1 cada uma fez sua lista de assets que ainda precisam existir (um baú, uma espada, um robô, uma fruta, um inimigo). Hoje é dia de transformar essa ideia em um modelo 3D de verdade, escolhendo um item da lista e construindo ele peça por peça na tela.

A técnica central é simples e poderosa: juntar formas básicas e esticar partes. Todo objeto, por mais complicado que pareça, é só um monte de caixas, bolas e cilindros grudados. Um robô é uma caixa (o corpo), duas bolinhas (os olhos) e quatro cilindros (braços e pernas). Quando a criança percebe isso, ela para de ter medo do 3D e começa a enxergar formas em tudo. Para fazer braços, chifres ou galhos saírem do corpo, usamos o extrude (extrudar): é como puxar uma parte da forma para fora, igual a esticar massinha de modelar.

Na prática, o professor mostra no projetor como criar uma forma (Create > Polygon Primitives), como movê-la e redimensioná-la com as ferramentas Move e Scale, e como selecionar uma face e usar Extrude para puxar uma parte nova. Depois cada criança, no seu computador, modela o item que escolheu, juntando duas ou três formas e fazendo pelo menos um extrude. O resultado não precisa ser perfeito: precisa existir, ter o formato reconhecível e estar salvo.

O foco é mão na massa e demonstração. As crianças aprendem olhando o professor fazer e repetindo o gesto na hora, com muito incentivo para experimentar. Erros são normais e fáceis de desfazer com Ctrl+Z. No fim, cada aluno salva o seu modelo (Save Scene) com o próprio nome no arquivo, deixando o asset pronto para ganhar cor na próxima aula.`,
  materiais: [
    `Computadores (um por criança) com o Maya já aberto em uma cena nova e vazia, e com a lista de itens da Aula 1 ao lado de cada aluno.`,
    `Projetor ou TV grande ligado ao computador do professor, para demonstrar cada clique no Maya em tela cheia.`,
    `Uma cena de exemplo já pronta pelo professor, mostrando um item simples modelado com formas básicas e um extrude (por exemplo, um robô ou uma espada).`,
    `Mouse com três botões e rodinha em cada computador, pois girar a câmera no Maya (Alt + botão esquerdo) e usar o extrude fica muito mais fácil com mouse do que com touchpad.`,
    `Folhas com desenhos simples dos itens (robô, baú, espada, fruta) marcando quais formas básicas formam cada um, para a criança consultar.`,
    `Massinha de modelar ou blocos de montar (opcional) para mostrar de verdade, na mão, como juntar formas e esticar partes.`,
    `Lista com o nome de cada criança para o professor conferir e salvar cada modelo com o nome certo ao final da aula.`,
  ],
  conceitosChave: [
    `Forma básica (Primitive) — é uma peça pronta do Maya, como caixa, bola ou cilindro, que a gente usa como bloco de montar para construir qualquer coisa.`,
    `Modelar — é construir um objeto em 3D no computador, juntando e moldando formas até virar o que a gente imaginou.`,
    `Mover (Move) — é a ferramenta que pega uma forma e arrasta ela para outro lugar, com as setinhas coloridas.`,
    `Redimensionar (Scale) — é a ferramenta que deixa uma forma maior ou menor, esticando ou encolhendo como um balão.`,
    `Face — é cada ladinho chapado de uma forma; uma caixa tem seis faces, igual aos seis lados de um dado.`,
    `Extrude (Extrudar) — é puxar uma face para fora e criar uma parte nova, igual a esticar massinha para fazer um braço ou um chifre.`,
    `Salvar a cena (Save Scene) — é guardar o trabalho no computador com um nome, para que o modelo não se perca e possa ser aberto de novo depois.`,
  ],
  treinamento: `## O que o professor precisa saber

No Maya, todo modelo começa com uma forma básica. Você cria uma pelo menu de cima: clique em Create (Criar) > Polygon Primitives (Primitivas Poligonais) e escolha Cube (Cubo), Sphere (Esfera) ou Cylinder (Cilindro). A forma aparece no centro da tela. Para movê-la, aperte a tecla W (ferramenta Move) e arraste as setinhas coloridas: vermelha vai para os lados, verde para cima e para baixo, azul para frente e para trás. Para mudar o tamanho, aperte R (ferramenta Scale) e arraste os cubinhos coloridos.

Para girar a câmera e ver o objeto por todos os lados, segure a tecla Alt e o botão esquerdo do mouse e mexa. Para dar zoom, use a rodinha do mouse. O extrude é o coração da aula: aperte a tecla 3 ou clique no canto superior direito da tela no modo Face (segure o botão direito do mouse sobre o objeto e escolha Face), clique numa face para selecioná-la, e então vá no menu Edit Mesh (Editar Malha) > Extrude (Extrudar). Uma nova parte aparece e você a puxa com as setinhas. Antes da aula, modele você mesmo um item simples (um robô feito de caixa e cilindros) para se sentir seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma e abra a sua cena de exemplo no projetor. Mostre o item pronto e diga: "Hoje cada um vai construir um item da sua lista, igual a este!". Relembre da Aula 1 onde fica o botão Create e como girar a câmera com Alt + botão esquerdo do mouse. Peça que cada criança escolha UM item da lista para fazer hoje.

Conteúdo novo guiado (15 min): no projetor, clique em Create > Polygon Primitives > Cube para fazer o corpo. Aperte W e mostre como mover; aperte R e mostre como mudar o tamanho. Crie um Cylinder para um braço. Depois selecione uma face do corpo (botão direito > Face, clique na face) e vá em Edit Mesh > Extrude, puxando a face para fora para criar uma parte nova. Faça tudo devagar, narrando cada clique.

Mão na massa (25 min): cada criança modela o seu item seguindo a ordem: 1) criar a primeira forma básica; 2) ajustar tamanho e posição com W e R; 3) adicionar mais uma ou duas formas; 4) fazer pelo menos um extrude para criar uma parte. Circule pela sala, sente ao lado de quem travar e guie a mão no mouse. Comemore cada item que vai ganhando forma.

Desafio + compartilhar (10 min): peça um detalhe extra, como um segundo braço, um chifre ou uma antena feita com mais um extrude. Em seguida, mande cada criança salvar com Ctrl+S (File > Save Scene), colocando o próprio nome no arquivo. Por fim, cada aluno gira a câmera e mostra o item para o coleguinha ao lado.

## Como explicar para crianças

Fale sempre com imagens da mão na massa: "a caixa é o corpo", "o cilindro é o braço", "extrude é puxar massinha para fora". Mostre de verdade com massinha ou blocos antes de ir para a tela. Diga o nome em português junto do inglês: "Extrude, que é esticar". Faça o gesto no ar de puxar e esticar antes de pedir para a criança fazer no mouse. Reforce que o item não precisa ficar perfeito, só precisa ter o formato e estar salvo. Comemore cada parte nova em voz alta para manter o ânimo da turma.

## Erros comuns e como ajudar

As crianças costumam: 1) criar a forma e perder ela de vista ao girar a câmera (relembre Alt + botão esquerdo e a rodinha para o zoom); 2) confundir Move (W) com Scale (R) e esticar quando queriam só mover (mostre as duas teclas com calma); 3) clicar fora da face e não conseguir extrudar (ajude a entrar no modo Face com o botão direito e a clicar bem em cima do ladinho); 4) esquecer de salvar (passe em cada computador no fim e confira o Save Scene com o nome certo). Lembre sempre: errar é fácil de desfazer com Ctrl+Z, então todos podem experimentar à vontade.`,
  exercicios: [
    {
      titulo: `Criando a Primeira Forma`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o caminho Create > Polygon Primitives > Cube. Faça aparecer um cubo na tela e peça que cada criança repita no seu computador. Circule e ajude quem não achar o menu Create no topo da tela.`,
      atividade: `Cada criança cria uma forma básica (cubo, esfera ou cilindro) no Maya pelo menu Create > Polygon Primitives, deixando ela bem no centro da tela como o começo do seu item.`,
      gabarito: `Acertou quem fez aparecer ao menos uma forma básica na cena. Se há um cubo, esfera ou cilindro visível na tela criado pelo menu Create, está correto.`,
    },
    {
      titulo: `Mexendo com Move e Scale`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Demonstre a tecla W (Move) com as setinhas coloridas e a tecla R (Scale) com os cubinhos. Mostre que vermelho vai para os lados, verde para cima e azul para frente. Ajude as crianças a não confundir as duas ferramentas.`,
      atividade: `Cada criança usa a tecla W para arrastar a sua forma para uma posição boa e a tecla R para deixá-la maior ou menor, ajustando o tamanho do corpo do seu item.`,
      gabarito: `Acertou quem conseguiu mover a forma para outro lugar e mudar o tamanho dela. Se a forma saiu do centro e ficou maior ou menor que o tamanho original, está correto.`,
    },
    {
      titulo: `Juntando Mais Formas`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como criar uma segunda e uma terceira forma e encaixá-las na primeira, como um cilindro grudado na caixa para virar braço. Reforce o uso de W para posicionar cada peça bem junto da outra.`,
      atividade: `Cada criança adiciona mais uma ou duas formas básicas ao seu item e encaixa elas na primeira, montando o corpo com partes (por exemplo, caixa com braços, ou bola com base).`,
      gabarito: `Acertou quem tem pelo menos duas formas encaixadas formando um único objeto reconhecível. Se as peças estão juntas e dá para identificar o item que a criança escolheu, está correto.`,
    },
    {
      titulo: `Puxando uma Parte com Extrude`,
      tipo: `Desafio prático`,
      tempo: `7 minutos`,
      guiaProfessor: `Demonstre com calma: botão direito sobre o objeto > Face, clique numa face, depois Edit Mesh > Extrude e puxe a setinha. Use a analogia da massinha esticando. Ajude quem clicar fora da face a entrar no modo Face de novo.`,
      atividade: `Cada criança seleciona uma face do seu modelo e usa Edit Mesh > Extrude para puxar uma parte nova para fora, criando um braço, um chifre, uma antena ou um detalhe do item.`,
      gabarito: `Acertou quem criou pelo menos uma parte nova saindo do corpo usando o Extrude. Se há uma saliência puxada de uma face que antes não existia, está correto.`,
    },
    {
      titulo: `Salvando o Meu Asset`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre File > Save Scene (ou Ctrl+S) e ensine a digitar o nome do arquivo com o nome da criança e do item, por exemplo "robo-da-ana". Passe em cada computador conferindo que o modelo foi salvo de verdade antes de encerrar.`,
      atividade: `Cada criança salva o seu modelo com File > Save Scene, escrevendo no nome do arquivo o próprio nome e o item feito, deixando o asset guardado e pronto para receber cor na próxima aula.`,
      gabarito: `Acertou quem salvou a cena com um nome que identifica a criança e o item. Se o arquivo aparece guardado e o título da janela mostra o nome dado, o asset está pronto e correto.`,
    },
  ],
};
