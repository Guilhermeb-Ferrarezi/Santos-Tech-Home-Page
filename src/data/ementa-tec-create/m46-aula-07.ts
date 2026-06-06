import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a cena: ambiente e iluminação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Transformar os assets do Maya e os Blueprints em uma cena coesa na Unreal Engine, compondo o ambiente, posicionando luzes e ajustando céu e atmosfera para criar um clima visual pronto para os ajustes finais.`,
  descricao: `Nesta aula a cena deixa de ser uma coleção de peças soltas e começa a virar um lugar. Até aqui os alunos importaram os modelos do Maya, ajustaram materiais e deram os primeiros passos com Blueprints. Agora o foco é a composição: onde cada objeto fica, para onde a câmera olha e, principalmente, como a luz desenha esse mundo. Iluminação é o que separa uma cena chapada e sem graça de uma cena com profundidade, sombra e atmosfera de jogo de verdade.

Na Unreal Engine, a luz é tratada como objetos que você coloca no mundo, chamados Actors de luz. Os quatro tipos mais importantes são Directional Light (o sol, que ilumina tudo numa direção só), Sky Light (a luz suave que vem do céu e preenche as sombras), Point Light (uma lâmpada que ilumina em todas as direções a partir de um ponto) e Spot Light (uma lanterna, com um cone de luz). Entender o papel de cada uma é o que permite ao aluno montar um clima — manhã, fim de tarde, interior aconchegante ou noite tensa.

O céu e a atmosfera fecham o conjunto. A Unreal oferece Actors como o Sky Atmosphere, que simula o azul do céu e o espalhamento da luz do sol, e o Exponential Height Fog, que adiciona uma névoa que dá distância e profundidade. Combinados com a Directional Light, eles fazem o horizonte parecer real. O aluno aprende que mexer na rotação do sol muda na hora a cor e a direção das sombras, e que isso é uma ferramenta de narrativa visual: a mesma cena pode parecer alegre ou sombria só pela luz.

Por fim, a aula trabalha enquadramento e clima. Compor a cena é decidir o que aparece, o ponto de vista e o que a luz destaca. Os alunos vão arrastar e girar objetos, alinhar uma vista interessante e equilibrar as luzes para guiar o olhar. Ao final, cada um terá uma cena montada, iluminada e com atmosfera definida, pronta para os ajustes finais da próxima aula.`,
  materiais: [
    `Computadores com a Unreal Engine instalada e configurada para projeto C++ (Visual Studio com as ferramentas de jogos)`,
    `Projetor para o professor demonstrar o posicionamento de luzes e a configuração do céu passo a passo`,
    `Projeto da Unreal de cada aluno, já com os assets do Maya importados e ao menos um Blueprint das aulas anteriores`,
    `Pasta com arquivos de exemplo: uma cena base montada pelo professor (chão, alguns objetos) para quem precisar de ponto de partida`,
    `Folha de apoio com a tabela dos quatro tipos de luz (Directional, Sky, Point, Spot) e quando usar cada um`,
    `Óculos VR disponíveis na sala para quem quiser, ao final, espiar a cena em escala (opcional, sem ser foco da aula)`,
  ],
  conceitosChave: [
    `Actor — qualquer objeto colocado no mundo da Unreal (um modelo, uma luz, uma câmera); tudo na cena é um Actor.`,
    `Directional Light — a luz que representa o sol; ilumina toda a cena numa única direção e define a direção das sombras.`,
    `Sky Light — luz suave que vem do céu e preenche as sombras escuras, deixando a cena mais natural e menos dura.`,
    `Point Light e Spot Light — luzes locais; a Point ilumina em todas as direções a partir de um ponto (lâmpada) e a Spot joga um cone (lanterna).`,
    `Sky Atmosphere — Actor que simula o céu, o azul do ar e o espalhamento da luz do sol no horizonte.`,
    `Exponential Height Fog — névoa que se acumula perto do chão e dá profundidade e clima à cena.`,
    `Intensity e Color — a intensidade (brilho) e a cor de uma luz; mudá-las transforma o clima, de manhã clara a fim de tarde alaranjado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em iluminação para conduzir esta aula. Precisa apenas conhecer onde as coisas ficam. No alto da janela do editor há a barra de ferramentas; o botão "Create" (ou o sinal de mais "Add", dependendo da versão) abre o menu para inserir luzes e céu. À esquerda fica o Place Actors (Colocar Atores), com a categoria "Lights" e a categoria "Visual Effects". À direita ficam dois painéis essenciais: o Outliner (lista de tudo que está na cena) e o Details (detalhes do objeto selecionado, onde você muda Intensity, Color e rotação). Antes da aula, monte você mesmo uma cena simples para treinar: insira uma Directional Light, gire-a e veja as sombras mudarem. Saiba também que mover usa a tecla W, girar usa E e escalar usa R, e que arrastar com o botão direito gira a câmera enquanto WASD anda por ela.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

AQUECIMENTO (10 min): no projetor, mostre a mesma cena com duas iluminações bem diferentes (sol da manhã e fim de tarde alaranjado) e pergunte qual clima cada uma passa. Relembre que tudo na cena é um Actor e que luz também é um Actor que se coloca no mundo.

CONTEÚDO NOVO GUIADO (15 min): demonstre. 1) Abra o painel "Place Actors", categoria "Lights", e arraste uma Directional Light para a cena. 2) Com ela selecionada, no painel Details mude Intensity e Color e gire o Actor (tecla E) para ver as sombras se moverem. 3) Arraste uma Sky Light e clique em "Recapture" no Details para ela capturar o céu. 4) Na categoria "Visual Effects" (ou "Fog/Sky"), arraste um Sky Atmosphere e um Exponential Height Fog. 5) Adicione uma Point Light perto de um objeto para um foco local. Como o projeto é C++, mostre que dá para criar uma luz por código: no .cpp do Actor, dentro do construtor, use as duas linhas a seguir, escritas exatamente assim, com concatenação normal (sem cifrão):

PointLightComponent = CreateDefaultSubobject<UPointLightComponent>(TEXT("MinhaLuz"));
PointLightComponent->SetIntensity(5000.0f);

Explique que CreateDefaultSubobject cria o componente de luz e SetIntensity define o brilho. O valor 5000.0f é o brilho; números maiores deixam mais forte.

MÃO NA MASSA (25 min): cada aluno monta a própria cena. Na ordem: posicionar os objetos do Maya num arranjo que faça sentido (mover com W, girar com E); inserir Directional Light e girá-la para escolher a hora do dia; inserir Sky Light e dar Recapture; adicionar Sky Atmosphere e Exponential Height Fog; colocar uma Point Light ou Spot Light para destacar um objeto principal. Circule ajudando a equilibrar Intensity para a cena não ficar nem estourada nem escura.

DESAFIO E COMPARTILHAR (10 min): peça que cada aluno escolha um clima (manhã, fim de tarde ou noite) e ajuste a cor e a rotação do sol mais a densidade da névoa para alcançar esse clima. Cada um mostra a cena por 20 segundos e diz que clima quis criar.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de palco de teatro: "Os objetos são os atores e a luz é o refletor que decide o que a plateia vê e o que fica na sombra." Explique a Directional Light como o sol: "Você gira o sol e a sombra anda junto, igual de manhã para a tarde." A Sky Light é "a luz que vem do céu inteiro e clareia os cantinhos escuros, para nada ficar preto demais". Point e Spot são "a lâmpada e a lanterna". Para a névoa, diga: "É como aquela bruma de manhã cedo, que faz o que está longe parecer mais longe ainda." Conecte sempre luz a sentimento: luz quente e baixa é aconchego, luz fria e dura é tensão.

## Erros comuns e como ajudar

O erro mais comum é a cena ficar toda preta: quase sempre falta a Directional Light ou a Sky Light, ou a Intensity está em zero. O segundo é exagerar no brilho e estourar tudo de branco; peça para baixar a Intensity aos poucos. O terceiro é esquecer o Recapture da Sky Light depois de mudar o céu, deixando as sombras estranhas. O quarto é confundir mover (W) com girar (E) e empurrar a luz para longe sem querer; mostre como usar o Outliner para reencontrar o Actor. O quinto, no código C++, é digitar errado o nome do componente ou esquecer o ponto-e-vírgula; confira a grafia das duas linhas junto com o aluno e mande compilar.`,
  exercicios: [
    {
      titulo: `O sol da cena`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Confirme que cada aluno encontrou o painel Place Actors e a categoria Lights. Reforce que girar a Directional Light (tecla E) muda a direção das sombras na hora.`,
      atividade: `Arraste uma Directional Light para a sua cena. Com ela selecionada, gire-a usando a tecla E e observe as sombras se moverem. No painel Details, ajuste a Intensity até a cena ficar bem iluminada, sem estourar de branco.`,
      gabarito: `A cena tem uma Directional Light listada no Outliner, as sombras apontam numa direção clara e a Intensity está num valor que ilumina sem estourar (a cena não está nem preta nem totalmente branca). Ao girar a luz, o aluno consegue mostrar a sombra mudando de lugar.`,
    },
    {
      titulo: `Preenchendo as sombras com a Sky Light`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que a Sky Light suaviza as sombras escuras e que, após qualquer mudança no céu, é preciso clicar em Recapture no Details para ela atualizar.`,
      atividade: `Adicione uma Sky Light à cena. Compare as sombras antes e depois: elas devem ficar menos pretas e mais naturais. Clique em Recapture no painel Details e veja a iluminação suave preencher os cantos escuros.`,
      gabarito: `A Sky Light aparece no Outliner e as sombras antes muito escuras ficaram mais claras e naturais. O aluno usou o botão Recapture e descreve que a Sky Light é a luz que vem do céu para preencher as sombras.`,
    },
    {
      titulo: `Céu e névoa para dar profundidade`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Verifique se o aluno encontrou o Sky Atmosphere e o Exponential Height Fog na categoria de efeitos. Explique que a névoa dá distância e que pouco já faz efeito; pedir moderação na densidade.`,
      atividade: `Insira um Sky Atmosphere e um Exponential Height Fog na cena. Ajuste a densidade da névoa (Fog Density no Details) para que o que está longe pareça mais distante, sem cobrir a cena inteira. Gire o sol e observe o céu mudar de cor perto do horizonte.`,
      gabarito: `A cena tem Sky Atmosphere e Exponential Height Fog no Outliner. Há um azul de céu visível e uma névoa suave que aumenta a sensação de profundidade sem apagar os objetos próximos. Ao girar a Directional Light, o aluno mostra a cor do céu mudando perto do horizonte.`,
    },
    {
      titulo: `Uma luz por código (C++)`,
      tipo: `programação em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Trabalhe em dupla para reduzir erros de digitação. Abra com a turma o arquivo .cpp do Actor e mostre onde fica o construtor. Lembre da concatenação normal, sem strings interpoladas, e da importância do ponto-e-vírgula. Mande compilar ao final.`,
      atividade: `No arquivo .cpp do seu Actor, dentro do construtor, crie um componente de Point Light e defina o brilho dele. Depois compile o projeto e confirme que o Actor passa a emitir luz na cena. Use exatamente estas linhas:

PointLightComponent = CreateDefaultSubobject<UPointLightComponent>(TEXT("MinhaLuz"));
PointLightComponent->SetIntensity(5000.0f);`,
      gabarito: `A solução, dentro do construtor do Actor, é:

PointLightComponent = CreateDefaultSubobject<UPointLightComponent>(TEXT("MinhaLuz"));
PointLightComponent->SetIntensity(5000.0f);

A primeira linha cria o componente de Point Light e a segunda define a intensidade (o brilho) em 5000. Após compilar sem erros, o Actor colocado na cena emite luz no ponto onde está. A dupla consegue explicar que CreateDefaultSubobject cria o componente e SetIntensity controla o quão forte a luz brilha.`,
    },
    {
      titulo: `Escolhendo o clima da cena`,
      tipo: `desafio criativo + roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a parte criativa e depois a roda. Incentive escolhas de clima diferentes entre os alunos. Puxe a reflexão sobre como cor da luz, rotação do sol e densidade da névoa juntas criam uma emoção.`,
      atividade: `Escolha um clima para a sua cena: manhã clara, fim de tarde alaranjado ou noite tensa. Ajuste a Color e a rotação da Directional Light, a Intensity das luzes e a densidade da névoa para alcançar esse clima. Depois apresente a cena por 20 segundos e diga qual clima você quis criar e como a luz ajudou.`,
      gabarito: `A cena montada tem objetos posicionados, Directional Light, Sky Light, Sky Atmosphere e névoa, mais ao menos uma luz local (Point ou Spot). O aluno escolheu um clima claro e o defende com argumentos de iluminação: por exemplo, "fim de tarde" com cor alaranjada, sol baixo no horizonte e névoa um pouco mais densa. A turma reconhece o clima pretendido só de olhar, mostrando que o aluno entendeu que luz, cor e atmosfera juntas contam uma história visual.`,
    },
  ],
};
