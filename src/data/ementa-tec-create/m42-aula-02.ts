import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Navegando e montando a cena",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Navegar com confiança na viewport 3D do Unity e montar uma cena simples com objetos, câmera e luz, salvando o trabalho.`,
  descricao: `Na aula anterior os alunos conheceram a interface do Unity e os seus principais painéis. Agora chega a hora de entrar de fato no mundo 3D: aprender a "voar" pela cena, criar objetos e organizar o espaço. Essa é uma habilidade que eles vão usar em todas as aulas seguintes, então vale a pena praticar bastante até virar algo natural, quase como dirigir um carrinho de controle.

O coração desta aula é a janela Scene, onde montamos o cenário do jogo. O aluno vai praticar os três movimentos básicos da navegação 3D: orbitar (girar a visão em torno de um ponto), dar zoom (aproximar ou afastar) e enquadrar um objeto (centralizar a câmera nele). Em seguida, vai usar as ferramentas de transformação para mover, rotacionar e escalar objetos. Tudo isso acontece dentro da viewport, com o aluno experimentando e errando à vontade, porque nada aqui quebra o computador.

Para ter o que manipular, cada aluno vai criar GameObjects primitivos (cubo, esfera, plano), que são as formas básicas que o Unity já oferece. Eles também vão posicionar uma câmera, que define o que o jogador enxerga, e uma luz, que ilumina a cena. Ao final, cada um terá uma pequena cena montada e salva no projeto, pronta para evoluir nas próximas aulas.

O conceito teórico que fecha a aula é o Transform: toda peça no Unity tem posição, rotação e escala, descritas por números em três eixos (X, Y e Z). Entender que mover um objeto é simplesmente mudar esses números prepara o terreno para quando, mais adiante, o aluno for mudar esses mesmos números por código em C#.`,
  materiais: [
    `Computadores com Unity instalado (mesma versão usada na Aula 1) e Visual Studio com suporte a C#`,
    `Projetor para o professor demonstrar a navegação ao vivo na viewport`,
    `Projeto Unity criado na Aula 1, já aberto em cada computador`,
    `Mouse com botão do meio (scroll) por aluno — facilita muito orbitar e dar zoom`,
    `Folha impressa com o "mapa dos três eixos" (X vermelho, Y verde, Z azul) para colar ao lado do monitor`,
    `Arquivo de exemplo do professor: uma cena pronta chamada CenaExemplo para mostrar o resultado esperado`,
  ],
  conceitosChave: [
    `Viewport (janela Scene) — a área 3D onde montamos o cenário e onde podemos mover a câmera livremente para olhar de qualquer ângulo.`,
    `Orbitar — girar a visão em torno de um ponto, como se você caminhasse ao redor de um objeto para vê-lo de todos os lados.`,
    `Enquadrar (Frame Selected) — centralizar a câmera da Scene em um objeto selecionado, atalho tecla F, para nunca se perder na cena.`,
    `GameObject — qualquer "coisa" dentro da cena do Unity: um cubo, uma luz, uma câmera; é a peça básica de tudo.`,
    `Transform — o componente que guarda a posição, a rotação e a escala de um objeto, descritas em números nos eixos X, Y e Z.`,
    `Gizmo — as setas e alças coloridas que aparecem no objeto selecionado e permitem mover, girar ou redimensionar arrastando com o mouse.`,
    `Cena (Scene) — o arquivo que guarda tudo o que montamos: objetos, câmera e luz; precisa ser salvo para não perder o trabalho.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é quase toda prática com o mouse, então o segredo é você se sentir à vontade navegando na janela Scene antes da aula. Reserve dez minutos para treinar: abra o projeto da Aula 1 e pratique os três movimentos. Orbitar é segurar Alt e arrastar com o botão esquerdo do mouse. Dar zoom é girar o scroll (botão do meio) ou segurar Alt com o botão direito e arrastar. Mover a visão de lado (pan) é segurar o botão do meio e arrastar. E o atalho mais importante de todos: selecionar um objeto na hierarquia e apertar a tecla F enquadra ele na tela. Decore esses quatro gestos; com eles você nunca se perde.

As ferramentas de transformação ficam na barra superior esquerda, e cada uma tem um atalho de teclado: W move, E rotaciona, R escala (e Q é a mãozinha que só desliza a visão). Quando você seleciona um objeto e escolhe uma dessas ferramentas, aparecem alças coloridas no objeto, chamadas Gizmo. Vermelho é o eixo X, verde é o Y e azul é o Z. Arrastar uma seta move o objeto só naquele eixo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o projeto e a CenaExemplo no projetor. Mostre a cena montada que eles vão alcançar e diga: "Hoje vocês vão aprender a voar pela cena e montar isto." Relembre os painéis da Aula 1 (Hierarchy, Scene, Inspector) com uma pergunta rápida para cada aluno.

Conteúdo guiado (15 min): demonstre devagar, no projetor, os quatro gestos de navegação. Peça que todos repitam em silêncio no próprio computador, um gesto de cada vez: orbitar (Alt + botão esquerdo), zoom (scroll), pan (botão do meio) e enquadrar (tecla F). Em seguida crie um cubo: menu GameObject, depois 3D Object, depois Cube. Aponte o Transform no Inspector e mostre os campos Position X, Y e Z. Apresente as ferramentas W, E e R movendo, girando e escalando o cubo na tela.

Mão na massa (25 min): cada aluno monta a própria cena seguindo a lista no projetor. 1) Criar um plano (GameObject, 3D Object, Plane) para servir de chão. 2) Criar um cubo e uma esfera e posicioná-los sobre o chão usando a ferramenta W. 3) Selecionar a Main Camera na Hierarchy e apontá-la para os objetos, conferindo o resultado na janelinha Camera Preview. 4) Criar uma luz: GameObject, depois Light, depois Directional Light, e girá-la com a ferramenta E para iluminar bem a cena. 5) Salvar com Ctrl + S, dando o nome MinhaCena. Circule pela sala ajudando individualmente.

Desafio e compartilhar (10 min): proponha que cada aluno deixe um objeto com valores de Transform "redondos", por exemplo Position X igual a 2, Y igual a 0.5 e Z igual a 0, e digite esses números direto no Inspector em vez de arrastar. Depois cada um mostra a cena ao colega do lado e explica em que eixo moveu cada peça.

## Como explicar de forma clara (linguagem para a idade)

Compare a janela Scene a uma câmera de drone que eles controlam: dá para subir, descer e girar em volta de tudo. Diga que orbitar é "andar ao redor" e que a tecla F é o botão de "achar de novo" quando se perderam. Para os eixos, use a regra das cores: vermelho é a rua (esquerda e direita, X), verde é o elevador (cima e baixo, Y) e azul é a profundidade (frente e trás, Z). Explique o Transform como a "ficha de identidade" do objeto: onde ele está, para onde aponta e qual o tamanho dele, tudo em números. Reforce que mexer no Gizmo com o mouse e digitar números no Inspector fazem exatamente a mesma coisa.

## Erros comuns e como ajudar

O erro mais comum é o aluno "se perder" e ver só o vazio: peça que selecione qualquer objeto na Hierarchy e aperte F. Outro clássico é arrastar o objeto no plano errado por pegar a seta do eixo errado; mostre que cada seta tem uma cor e que ela só move naquele eixo. Alguns confundem a janela Scene com a Game: explique que Scene é a oficina e Game é o que o jogador vê. Há também quem esqueça de salvar; crie o hábito do Ctrl + S de tempos em tempos. Por fim, se o cubo "some" ao escalar, é porque digitaram escala 0 num eixo; basta voltar para 1.`,
  exercicios: [
    {
      titulo: `Corrida da navegação`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Aquecimento lúdico para fixar os gestos do mouse. Faça como uma corrida em etapas, anunciando cada gesto em voz alta e esperando todos completarem antes de seguir. Elogie quem ajudar o colega ao lado.`,
      atividade: `Na janela Scene, faça nesta ordem: 1) orbite ao redor do cubo segurando Alt e arrastando o botão esquerdo; 2) dê zoom aproximando com o scroll; 3) afaste de novo; 4) selecione o cubo na Hierarchy e aperte F para enquadrá-lo. Repita até conseguir fazer os quatro sem pensar.`,
      gabarito: `O aluno consegue, sem ajuda, orbitar, dar zoom, dar pan e enquadrar com a tecla F. Sinal de acerto: ao apertar F com um objeto selecionado, a visão centraliza nesse objeto. Não há resposta escrita; o gabarito é a execução fluida dos quatro gestos.`,
    },
    {
      titulo: `Fábrica de objetos`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos criem os três objetos pelo menu correto antes de avançar. Caminhe pela sala conferindo a Hierarchy de cada aluno: devem aparecer três novos itens.`,
      atividade: `Crie um chão e duas formas: 1) GameObject, 3D Object, Plane (será o chão); 2) GameObject, 3D Object, Cube; 3) GameObject, 3D Object, Sphere. Use a ferramenta W (mover) para deixar o cubo e a esfera apoiados em cima do chão, sem ficarem afundados nele.`,
      gabarito: `Na Hierarchy aparecem Plane, Cube e Sphere. Na Scene, o cubo e a esfera estão sobre o plano (Position Y maior que o do chão), e não atravessando-o. Acerto típico: cubo em Y aproximadamente 0.5 e esfera em Y aproximadamente 0.5, com o plano em Y igual a 0.`,
    },
    {
      titulo: `Mestre dos eixos`,
      tipo: `Prática no computador com registro escrito`,
      tempo: `7 min`,
      guiaProfessor: `Aqui o foco é ligar o gesto do mouse aos números do Transform. Peça que olhem o Inspector enquanto arrastam, para verem os números mudando ao vivo. Confirme que entenderam a cor de cada eixo.`,
      atividade: `Selecione o cubo e a ferramenta W. Arraste só a seta vermelha e anote o que muda no Inspector. Depois a verde, depois a azul. Escreva na folha: qual letra (X, Y ou Z) muda com cada cor?`,
      gabarito: `Seta vermelha muda o X (esquerda e direita). Seta verde muda o Y (cima e baixo). Seta azul muda o Z (frente e trás). Acerto: o aluno associa corretamente vermelho a X, verde a Y e azul a Z, e percebe que arrastar no Gizmo altera os números do Position no Inspector.`,
    },
    {
      titulo: `Câmera e luz no lugar`,
      tipo: `Prática no computador`,
      tempo: `9 min`,
      guiaProfessor: `Mostre primeiro no projetor onde fica o Camera Preview (canto inferior direito da Scene quando a câmera está selecionada). Explique que a luz Directional ilumina como o Sol, então o que importa é a rotação dela, não a posição.`,
      atividade: `1) Selecione a Main Camera na Hierarchy e use as ferramentas W e E até os objetos aparecerem dentro do Camera Preview. 2) Crie uma luz com GameObject, Light, Directional Light. 3) Use a ferramenta E para girar a luz até a cena ficar bem iluminada, sem sombras muito escuras.`,
      gabarito: `No Camera Preview, o cubo, a esfera e o chão aparecem enquadrados. Existe uma Directional Light na Hierarchy e a cena na janela Scene está claramente iluminada. Acerto: rotação da luz ajustada (por exemplo, Rotation X em torno de 50, Y em torno de 30) de modo que as formas tenham luz e sombra suave.`,
    },
    {
      titulo: `Cena montada e salva`,
      tipo: `Desafio com precisão numérica`,
      tempo: `8 min`,
      guiaProfessor: `Desafio final que integra tudo e introduz a digitação direta de valores no Transform. Reforce o hábito de salvar. Peça que cada aluno explique ao colega em que eixo posicionou cada objeto antes de salvar.`,
      atividade: `Ajuste o cubo digitando direto no Inspector: Position X igual a 2, Y igual a 0.5, Z igual a 0. Ajuste a esfera para X igual a menos 2, Y igual a 0.5, Z igual a 0. Confira que ambos estão sobre o chão. Por fim, salve a cena com Ctrl + S e dê o nome MinhaCena.`,
      gabarito: `No Inspector, o cubo tem Position (2, 0.5, 0) e a esfera tem Position (-2, 0.5, 0); os dois ficam lado a lado sobre o plano. A cena foi salva: o título da aba da Scene mostra MinhaCena sem o asterisco de alteração não salva. Acerto: valores exatos digitados e arquivo MinhaCena visível na pasta do projeto (janela Project).`,
    },
  ],
};
