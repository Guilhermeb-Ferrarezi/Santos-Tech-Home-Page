import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Organizando e Caprichando no Cenário",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Juntar todas as peças já modeladas no Maya, ajustar tamanhos, alinhar os objetos e dar os retoques finais para deixar o cenário 3D bonito, organizado e parecido com o desenho-mapa.`,
  descricao: `Nesta aula a criança vira a "arrumadeira" do seu próprio mundo 3D. Durante as semanas anteriores ela construiu o chão, as paredes e vários objetos do cenário. Agora chegou a hora de juntar tudo e olhar com carinho: será que cada coisa está no lugar certo? Será que o tamanho ficou bom? Será que está parecido com o desenho-mapa que ela criou na Aula 2? Esta é a aula do capricho, em que pequenos ajustes fazem o cenário ficar muito mais bonito e organizado.

A grande ideia é comparar o cenário do Maya com o desenho-mapa. O desenho é a "receita" e a cena 3D é o "bolo" sendo montado. A criança vai olhar o mapa, olhar a tela e perceber o que ainda falta arrumar: um objeto grande demais, uma cadeira flutuando longe do chão, uma árvore atravessando a parede ou dois objetos exatamente no mesmo lugar. Cada um desses probleminhas é uma oportunidade de praticar mover, girar e esticar, que ela já aprendeu nas aulas anteriores.

Organizar também é separar e nomear. No Maya existe o painel Outliner, que é como uma lista de tudo o que está na cena. A criança vai aprender a renomear os objetos (de "pCube1" para "mesa", por exemplo) para não se perder. Assim, a cena fica como um quarto arrumado: cada coisa tem nome e lugar. Isso prepara o terreno para a Aula 8, quando o cenário será apresentado para a turma.

Para o professor, o segredo desta aula é o ritmo calmo e o reforço positivo. Não é uma aula de criar coisas novas, é uma aula de melhorar o que já existe. Demonstre cada ajuste no projetor, deixe a criança comparar com o próprio desenho e celebre cada cantinho que ficou mais bonito. O objetivo é que ao final da aula o cenário esteja limpo, alinhado e pronto para receber os últimos detalhes.`,
  materiais: [
    `Computadores com o Maya aberto e o projeto do cenário de cada criança salvo`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar`,
    `O desenho-mapa de cada criança (feito na Aula 2), impresso ou ao lado do computador`,
    `Um cenário-exemplo já organizado no Maya, para mostrar o "antes e depois"`,
    `Folha de papel e lápis para a criança marcar o que precisa arrumar`,
    `Adesivos ou carimbos para premiar os cantinhos mais caprichados`,
  ],
  conceitosChave: [
    `Organizar — deixar cada coisa no lugar certo, como arrumar o quarto antes de uma visita chegar.`,
    `Alinhar — colocar os objetos retinhos e encostados no chão, sem ficar tortos nem flutuando no ar.`,
    `Outliner — a listinha do Maya que mostra o nome de tudo que está na cena, como uma lista de chamada dos objetos.`,
    `Renomear — trocar o nome difícil que o Maya dá (como pCube1) por um nome fácil (como mesa ou árvore).`,
    `Ajustar tamanho — esticar ou encolher um objeto para ele ficar do tamanho certo perto dos outros.`,
    `Desenho-mapa — o desenho que a criança fez do cenário, usado como receita para comparar com a cena 3D.`,
    `Capricho — fazer com carinho e atenção, olhando os detalhes para o trabalho ficar bonito.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de organização e capricho, não de criar coisas novas. Tudo que a criança precisa já está na cena dela. Você vai guiá-la a comparar o cenário 3D com o desenho-mapa e a fazer pequenos ajustes. Não precisa ser um expert no Maya: basta dominar quatro ações que já apareceram no mês.

No Maya, lembre destes atalhos e painéis. A tecla "W" liga a ferramenta Mover (Move), a tecla "E" liga Girar (Rotate) e a tecla "R" liga Esticar/Escalar (Scale). O painel Outliner (menu "Windows" no topo, depois "Outliner") mostra a lista de todos os objetos. Para renomear, dê dois cliques no nome do objeto dentro do Outliner e digite o nome novo. Para enquadrar a cena inteira, aperte a tecla "A". Para focar em um objeto selecionado, aperte "F". Salve sempre com "Ctrl + S".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o Maya no projetor com o cenário-exemplo. Pergunte: "O que está estranho aqui?". Mostre de propósito uma cadeira flutuando e uma árvore enorme atravessando a parede. Deixe as crianças apontarem os erros. Em seguida cada criança abre o próprio projeto (menu "File", depois "Open") e pega o desenho-mapa ao lado.

Conteúdo novo guiado (15 min): No projetor, abra o Outliner ("Windows", depois "Outliner"). Mostre a lista de nomes esquisitos (pCube1, pCylinder1). Dê dois cliques em um nome e renomeie para "mesa". Depois selecione a cadeira flutuante, aperte "W" e arraste a seta verde para baixo até ela encostar no chão. Selecione a árvore gigante, aperte "R" e arraste o quadradinho central para encolher. Faça cada passo devagar, narrando o clique.

Mão na massa (25 min): Cada criança faz três tarefas, nesta ordem. Primeiro, abre o Outliner e renomeia pelo menos três objetos. Segundo, compara com o desenho-mapa e arruma o que estiver fora do lugar usando "W" para mover. Terceiro, ajusta tamanhos com "R" para que nada fique grande ou pequeno demais. Passe nas mesas dizendo: "Olhe seu mapa, está parecido?". Lembre de salvar com "Ctrl + S".

Desafio e compartilhar (10 min): Peça que cada criança aperte "A" para enquadrar a cena inteira e gire a câmera (segurando "Alt" e arrastando com o botão esquerdo do mouse) para olhar o cenário de cima, como um passarinho. Cada uma mostra para o colega do lado um cantinho que ficou bem caprichado.

## Como explicar para crianças

Use a ideia de arrumar o quarto: "Antes da visita chegar, a gente guarda os brinquedos e deixa tudo no lugar". O desenho-mapa é a receita do bolo e a cena é o bolo ficando pronto. Para alinhar, diga: "Nada pode flutuar no ar nem afundar no chão, tudo tem que ficar pisando firme". Para o Outliner, diga que é a "lista de chamada" dos objetos, e que dar nome ajuda a achar cada um rapidinho.

## Erros comuns e como ajudar

Muitas crianças movem o objeto errado porque clicam fora dele: ajude a clicar bem em cima até o objeto ficar destacado em verde-claro. Outras movem em três direções ao mesmo tempo e o objeto "voa": ensine a arrastar só uma seta colorida por vez (verde sobe e desce, vermelho e azul para os lados). Algumas esticam sem querer pelo cantinho errado e deformam tudo; mostre que o quadradinho do meio mexe no tamanho por igual. Há quem esqueça de salvar: combine de salvar com "Ctrl + S" a cada arrumação. E se alguém apagar algo sem querer, use "Ctrl + Z" para desfazer, explicando que é o "botão voltar no tempo".`,
  exercicios: [
    {
      titulo: `Caça aos errinhos da cena`,
      tipo: `Observação em grupo`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o cenário-exemplo no projetor com erros propositais (objeto flutuando, árvore atravessando parede, mesa gigante). Deixe as crianças apontarem o que está estranho antes de qualquer ajuste.`,
      atividade: `Olhe o cenário na tela grande e levante a mão sempre que ver alguma coisa fora do lugar. Diga em voz alta o que está errado.`,
      gabarito: `Erros esperados: a cadeira está flutuando no ar (precisa descer até o chão), a árvore atravessa a parede (precisa ser movida ou encolhida) e a mesa está grande demais (precisa diminuir). Qualquer objeto torto ou afundado no chão também conta como acerto.`,
    },
    {
      titulo: `A lista de chamada dos objetos`,
      tipo: `Prática guiada no Outliner`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor como abrir o Outliner ("Windows", depois "Outliner") e dê dois cliques no nome para renomear. Peça que cada criança renomeie pelo menos três objetos com nomes fáceis.`,
      atividade: `Abra o Outliner, dê dois cliques nos nomes difíceis (como pCube1) e troque por nomes fáceis: chão, parede, mesa, árvore. Renomeie pelo menos três objetos.`,
      gabarito: `A criança consegue renomear ao menos três objetos com nomes claros (por exemplo chão, parede, mesa). Acerto: os nomes esquisitos sumiram e cada objeto tem um nome que faz sentido com o que ele é no cenário.`,
    },
    {
      titulo: `Tudo pisando firme no chão`,
      tipo: `Prática individual com a ferramenta Mover`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a tecla "W" para Mover e que a seta verde sobe e desce. Circule pela sala ajudando quem move o objeto errado ou em várias direções de uma vez.`,
      atividade: `Compare a cena com o seu desenho-mapa. Selecione cada objeto que está flutuando ou afundado, aperte "W" e use a seta verde para deixar tudo encostado no chão.`,
      gabarito: `Nenhum objeto fica flutuando no ar nem enterrado no chão. Acerto: todos os móveis e objetos estão apoiados na superfície do chão, parecidos com a posição do desenho-mapa.`,
    },
    {
      titulo: `Cada coisa no tamanho certo`,
      tipo: `Prática individual com a ferramenta Escalar`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce a tecla "R" para Escalar e que o quadradinho do meio muda o tamanho por igual, sem deformar. Ajude quem estica pelo cantinho errado e deforma o objeto; ensine a usar "Ctrl + Z" para desfazer.`,
      atividade: `Olhe o desenho-mapa e veja se algum objeto ficou grande ou pequeno demais. Selecione esse objeto, aperte "R" e use o quadradinho do meio para deixá-lo do tamanho certo perto dos outros.`,
      gabarito: `Os objetos ficam em proporção parecida com o desenho-mapa: a mesa não é maior que a parede, a árvore não é menor que a cadeira. Acerto: nada está exageradamente grande ou pequeno e os tamanhos combinam entre si.`,
    },
    {
      titulo: `Olhar de passarinho e capricho final`,
      tipo: `Desafio e compartilhamento`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como apertar "A" para enquadrar a cena e como girar a câmera segurando "Alt" e arrastando com o botão esquerdo. Lembre todos de salvar com "Ctrl + S" antes de mostrar ao colega.`,
      atividade: `Aperte "A" para ver o cenário inteiro e gire a câmera para olhar de cima, como um passarinho. Dê o último capricho, salve com "Ctrl + S" e mostre para o colega o cantinho mais bonito.`,
      gabarito: `A criança consegue enquadrar a cena, girar a câmera para a vista de cima, salvar o projeto e apontar pelo menos um detalhe organizado. Acerto: o cenário está salvo, alinhado, com objetos nomeados e parecido com o desenho-mapa, pronto para a apresentação da Aula 8.`,
    },
  ],
};
