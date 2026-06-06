import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Decorando Meu Cenário",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a deixar seu mundo no Roblox bonito, adicionando objetos prontos da biblioteca (árvores, pedras e enfeites) e trocando as cores e os materiais das peças para dar vida ao cenário.`,
  descricao: `Nesta aula a turma entra na parte mais divertida da construção: a decoração. Até agora cada aluno montou o terreno e colocou peças básicas no mundo. Hoje o objetivo é transformar esse espaço meio vazio em um lugar cheio de vida, com árvores balançando, pedras espalhadas e enfeites que contam uma história. Decorar é o momento em que a criança vê o mundo dela ficar parecido com o que imaginou na cabeça.

Para isso, o professor vai mostrar duas ferramentas poderosas do Roblox Studio. A primeira é a biblioteca de objetos prontos (a aba Toolbox), de onde a gente arrasta árvores, rochas, bancos e muitos outros modelos que outras pessoas já criaram. A segunda é a troca de cores e materiais no painel Properties (Propriedades): com poucos cliques, uma pedra cinza vira uma pedra de neve, e um chão liso vira grama ou madeira.

Por que isso importa? Porque a decoração ensina a criança a tomar decisões de design: o que combina, onde colocar, qual cor deixa o cenário mais bonito. É um exercício de imaginação e de capricho. Além disso, ela continua treinando os gestos básicos do Studio (selecionar, mover, girar) sem perceber que está aprendendo, porque está se divertindo.

No final da aula, cada aluno terá um cantinho decorado do jeitinho que ele sonhou: uma floresta, um deserto, um jardim ou o que a imaginação mandar. O foco é a liberdade criativa com apoio do professor em cada passo.`,
  materiais: [
    `Um computador por aluno com o Roblox Studio já aberto no projeto do mundo que cada criança vem construindo (do mês 10).`,
    `Projetor ou TV ligada na tela do professor, para demonstrar cada passo grande para a turma toda ver.`,
    `Mouse para cada aluno (decorar pedindo arrastar e clicar fica muito mais fácil com mouse do que com touchpad).`,
    `Conexão de internet funcionando, porque a biblioteca de objetos prontos (Toolbox) carrega da internet.`,
    `Um cartaz ou folha impressa com fotos de cenários diferentes (floresta, praia, neve, deserto) para inspirar a turma.`,
    `Folhas de papel em branco e lápis de cor para o exercício de desenho do "mapa de decoração".`,
    `Lista simples de palavras-imagem (árvore, pedra, flor, banco) coladas na lousa para ajudar quem ainda lê pouco.`,
  ],
  conceitosChave: [
    `Decorar — deixar o mundo bonito colocando objetos e mudando cores, do jeitinho que a gente imaginou.`,
    `Toolbox (Caixa de Ferramentas) — a caixa mágica de onde a gente puxa árvores, pedras e enfeites prontos para o nosso mundo.`,
    `Modelo (Model) — um objeto pronto, feito de várias peças juntas, como uma árvore inteira que já vem com tronco e folhas.`,
    `Material — o "tipo de pele" da peça: pode ser madeira, grama, pedra, metal ou neve, e muda como ela parece.`,
    `Cor (Color) — a tinta da peça; trocar a cor é como pintar o objeto com um pincel mágico.`,
    `Arrastar (Drag) — segurar com o mouse e puxar um objeto da caixa para dentro do nosso mundo.`,
    `Properties (Propriedades) — o painel lateral onde a gente troca a cor e o material da peça escolhida.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Decorar no Roblox Studio usa dois recursos. O primeiro é a Toolbox (Caixa de Ferramentas), uma biblioteca enorme de modelos prontos feitos pela comunidade. Para abri-la, vá ao menu de cima na aba View (Visualizar) e clique no botão Toolbox; um painel surge à esquerda com uma barra de busca. Ao digitar uma palavra em inglês (por exemplo "tree", "rock", "flower", "bench") e apertar Enter, aparecem miniaturas. Clicar numa miniatura insere o modelo no centro da cena; arrastar a miniatura para um ponto do terreno também funciona.

O segundo recurso é a troca de cor e material no painel Properties (Propriedades). Selecione uma peça com a ferramenta Select. No painel Properties (se não estiver visível, ative-o na aba View), procure a linha Color (clique no quadradinho colorido para escolher outra cor) e a linha Material (um menu que oferece Grass, Wood, Rock, Snow, Metal, entre outros). Importante: modelos da Toolbox vêm agrupados; para pintar só uma parte, dê dois cliques para entrar no modelo, ou pinte o modelo inteiro quando ele tiver uma cor só.

Dica de segurança: alguns modelos da Toolbox têm scripts. Para esta idade, prefira termos de busca simples e modelos visuais. Tenha de 3 a 5 modelos testados antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra o projeto de uma criança no projetor. Pergunte: "O que falta no seu mundo para ele ficar bonito?". Mostre o cenário vazio e diga que hoje vamos enchê-lo de vida. Relembre como selecionar e mover uma peça (cliques rápidos com a ferramenta Select).

Conteúdo novo guiado (15 min): No projetor, abra a Toolbox pela aba View. Digite "tree" e aperte Enter. Clique numa árvore: ela aparece no mundo. Mostre como movê-la com a ferramenta Move (as setas coloridas). Depois selecione o chão, vá ao painel Properties, troque o Material para Grass e a Color para verde. Faça devagar, repetindo cada clique em voz alta.

Mão na massa (25 min): Cada aluno abre sua Toolbox e busca pelo menos três objetos (uma árvore, uma pedra e um enfeite livre). Eles arrastam, posicionam e depois trocam a cor ou o material de pelo menos uma peça. Circule pela sala, ajudando a achar o botão Toolbox e o painel Properties. Elogie escolhas e incentive testar cores diferentes.

Desafio e compartilhar (10 min): Lance o desafio "ponto secreto": cada criança esconde um objeto pequeno e colorido em algum cantinho do mundo. Depois, dois ou três alunos giram a câmera mostrando o cenário decorado para a turma.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Chame a Toolbox de "caixa mágica de brinquedos": é só pedir e o brinquedo aparece. Diga que trocar o Material é "trocar a roupinha da peça" e trocar a Color é "pintar com um pincel mágico". Para posicionar, fale "encaixa aqui, igual montar Lego". Use frases curtas e mostre antes de pedir. Sempre demonstre primeiro no projetor, depois deixe a criança imitar.

## Erros comuns e como ajudar

Muitas crianças clicam várias vezes na Toolbox e enchem o mundo de cópias; ensine o "ctrl + z" (desfazer) como o "botão mágico de voltar". Outras não acham o painel Properties; deixe-o sempre aberto antes da aula. Há quem busque palavra em português e não ache nada; tenha uma listinha de palavras em inglês colada na lousa. Alguns selecionam o modelo todo querendo pintar só um galho; mostre o duplo clique para entrar no grupo. E se uma peça "sumir" debaixo do chão, ajude a subir com a ferramenta Move.`,
  exercicios: [
    {
      titulo: `Caça aos Objetos na Caixa Mágica`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como abrir a Toolbox pela aba View e como digitar uma palavra na busca. Faça uma busca de exemplo ("tree") junto com a turma e depois deixe cada um buscar sozinho. Circule garantindo que todos acharam a barra de busca.`,
      atividade: `Abra a sua Caixa Mágica (Toolbox) e procure três coisas para o seu mundo: uma árvore (tree), uma pedra (rock) e mais um objeto que você quiser. Clique em cada um para colocá-lo no seu mundo.`,
      gabarito: `O aluno acertou quando aparecem pelo menos três objetos novos no mundo dele, vindos da Toolbox: uma árvore, uma pedra e um terceiro objeto à escolha. A Toolbox deve estar aberta e a busca usada corretamente.`,
    },
    {
      titulo: `O Pincel Mágico das Cores`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre onde fica o painel Properties e mostre a linha Color e a linha Material. Demonstre trocando o material do chão para Grass e a cor para verde. Peça que cada aluno escolha uma peça e a transforme. Ajude quem não encontrar o painel.`,
      atividade: `Escolha uma peça do seu mundo e clique nela. No painel Properties, troque a Cor (Color) e troque o Material (experimente Grass, Wood, Rock ou Snow). Deixe sua peça com uma cara nova.`,
      gabarito: `O aluno acertou quando a peça escolhida ficou com uma cor diferente da original e/ou com um material diferente (por exemplo, virou grama, neve ou madeira). Qualquer mudança visível na cor ou no material conta como acerto.`,
    },
    {
      titulo: `Roda do Cenário dos Sonhos`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte a turma em roda e mostre o cartaz com fotos de cenários (floresta, praia, neve, deserto). Pergunte a cada criança que tipo de mundo ela quer e quais objetos combinam com ele. Conduza com perguntas curtas e elogie todas as ideias.`,
      atividade: `Na roda, conte para os amigos: que tipo de mundo você está fazendo? É floresta, praia, neve ou outro? Diga dois objetos que combinam com o seu mundo e duas cores que você vai usar.`,
      gabarito: `O aluno acertou quando consegue dizer o tema do mundo dele e citar pelo menos dois objetos e duas cores que combinam com esse tema (por exemplo: mundo de neve com pinheiros brancos e pedras cinzas). Coerência entre tema e escolhas mostra compreensão.`,
    },
    {
      titulo: `Mapa de Decoração no Papel`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue uma folha em branco e lápis de cor. Peça que cada criança desenhe, antes de mexer no computador, onde vai colocar cada objeto. Explique que é um plano, como um mapa do tesouro. Depois, oriente a copiar o desenho dentro do Roblox Studio.`,
      atividade: `Desenhe no papel o seu cenário visto de cima: marque onde ficam as árvores, as pedras e os enfeites. Use cores. Depois, abra o Roblox Studio e tente deixar o seu mundo parecido com o seu desenho.`,
      gabarito: `O aluno acertou quando o desenho mostra pelo menos três objetos posicionados (árvore, pedra e um enfeite) e, no computador, ele coloca os objetos seguindo mais ou menos a ideia do desenho. O desenho não precisa ser perfeito; precisa guiar a decoração.`,
    },
    {
      titulo: `Desafio do Ponto Secreto`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Explique que cada criança vai esconder um objeto pequeno e colorido em um cantinho do mundo, como um tesouro escondido. Incentive a usar uma cor bem chamativa e um material diferente. No fim, peça que dois ou três alunos girem a câmera e mostrem onde esconderam.`,
      atividade: `Escolha um objeto pequeno na Caixa Mágica, pinte-o com uma cor bem viva e esconda-o num cantinho do seu mundo (atrás de uma pedra, embaixo de uma árvore). Depois, mostre para um amigo achar o seu ponto secreto.`,
      gabarito: `O aluno acertou quando existe no mundo dele um objeto pequeno, com cor viva e material trocado, posicionado de forma escondida em algum canto. Saber mostrar o esconderijo ao final confirma que ele dominou colocar, pintar e posicionar a peça.`,
    },
  ],
};
