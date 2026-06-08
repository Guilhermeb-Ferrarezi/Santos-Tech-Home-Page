import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Iluminação e Efeitos Visuais",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Dar atmosfera ao jogo da Unreal Engine ajustando luzes dinâmicas, pós-processamento e partículas, usando o Claude como parceiro para sugerir referências de estilo visual e resolver problemas de performance gráfica.`,
  descricao: `Esta é a aula em que a fase deixa de parecer um cenário cru e ganha vida. Até agora o aluno construiu mecânicas e montou os objetos da fase; nesta aula ele aprende que a luz é o que conta a história visual. Uma mesma sala pode parecer aconchegante, misteriosa ou assustadora só mudando a cor, a intensidade e a direção das luzes. Na Unreal Engine isso é feito com luzes dinâmicas, com um volume de pós-processamento que ajusta a imagem inteira e com sistemas de partículas que adicionam fumaça, faíscas e poeira.

O foco está em três pilares. Primeiro, a iluminação dinâmica: o aluno aprende a diferença entre luz estática e dinâmica, ajusta a Directional Light (o sol da cena), adiciona Point Lights e Spot Lights e liga as sombras. Segundo, o pós-processamento: usando um Post Process Volume, o aluno mexe em bloom, exposição, saturação e contraste para dar um clima coeso à fase inteira. Terceiro, os efeitos de partículas com o sistema Niagara, que cria fogo, fumaça e poeira para preencher os ambientes.

O Claude entra como assistente de duas formas concretas. Para estilo visual, o aluno descreve a sensação que quer ("uma caverna fria e azulada com raios de luz vindos do alto") e pede ao Claude referências de jogos, paletas de cores e nomes dos parâmetros da Unreal que produzem esse efeito. Para performance, o aluno descreve o problema ("o jogo travou depois que liguei muitas sombras dinâmicas") e o Claude explica o que pesa no desempenho e sugere ajustes seguros, como reduzir a quantidade de luzes que projetam sombra.

Esta aula reforça uma ideia profissional: gráfico bonito não é encher de efeitos, é fazer escolhas com intenção e cuidar do desempenho. Numa escola presencial premium, com turmas de até dez alunos, o professor consegue circular, olhar a tela de cada um e ajudar a calibrar o gosto visual sem deixar o computador lento. A turma fecha a aula comparando o "antes e depois" da fase iluminada.`,
  materiais: [
    `Computadores com a Unreal Engine instalada (com o projeto do jogo em C++ já aberto) e o Visual Studio configurado para compilar`,
    `Projetor ligado para mostrar a janela principal da Unreal: Viewport, painel Outliner e painel Details`,
    `Acesso ao Claude (no navegador ou app) para pedir referências de estilo visual e ajuda com performance`,
    `Arquivo de exemplo: uma fase simples e sem iluminação trabalhada (mapa "Fase_SemLuz") para quem quiser começar do zero`,
    `Imagens de referência impressas ou no projetor (cenas de jogos com clima frio, quente e neutro) para inspirar as escolhas de luz`,
    `Fones de ouvido opcionais e um cronômetro para controlar o ritmo dos blocos da aula`,
  ],
  conceitosChave: [
    `Iluminação dinâmica — luz que pode mudar e se mover durante o jogo e calcula sombras em tempo real, ao contrário da luz estática que fica "pintada" no cenário.`,
    `Directional Light — a luz que funciona como o sol ou a lua: vem toda de uma mesma direção e ilumina a cena inteira.`,
    `Point Light e Spot Light — luz que sai de um ponto para todos os lados (como uma lâmpada) e luz em formato de cone (como uma lanterna ou holofote).`,
    `Pós-processamento — ajustes aplicados na imagem final inteira, como brilho, contraste e cor, feitos dentro de um Post Process Volume.`,
    `Bloom — o efeito de brilho suave que vaza em volta das partes mais claras da imagem, deixando luzes fortes mais bonitas.`,
    `Niagara — o sistema da Unreal para criar efeitos de partículas como fogo, fumaça, faíscas e poeira.`,
    `Performance gráfica — o quão rápido o jogo consegue desenhar cada quadro; muitos efeitos pesados deixam o jogo lento (queda de FPS).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar a Unreal para dar esta aula. A ideia central é simples: a luz cria o clima e o pós-processamento ajusta a imagem inteira de uma vez. Três conceitos bastam. Luz estática é "pintada" e não muda; luz dinâmica muda e gera sombras em tempo real (mais bonita, mas pesa mais). O Post Process Volume é como um filtro de foto aplicado no jogo todo. As partículas (Niagara) são pequenas imagens que se multiplicam para formar fogo, fumaça e poeira.

Antes da aula, abra a Unreal e localize: a Viewport (a janela 3D no centro), o painel Outliner (lista de objetos, à direita) e o painel Details (propriedades do objeto selecionado, abaixo do Outliner). Saiba achar o menu de adicionar objetos clicando no botão "Add" (sinal de mais, canto superior esquerdo da Viewport). Tenha o mapa "Fase_SemLuz" pronto como rede de segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): no projetor, mostre a fase do aluno sem trabalho de luz e pergunte "que sensação essa fase passa?". Mostre duas imagens de referência (uma fria, uma quente) e deixe a turma sentir a diferença que a luz faz.

2. Conteúdo novo guiado (15 min): selecione a Directional Light no Outliner. No painel Details, mude a propriedade "Mobility" para "Movable" (isso a torna dinâmica). Ajuste "Intensity" e "Light Color". Adicione uma Point Light pelo botão Add, posicione e ligue "Cast Shadows". Em seguida, adicione um Post Process Volume (Add, categoria "Volumes"), marque "Infinite Extent (Unbound)" para valer na fase toda e mexa em "Bloom Intensity" e "Exposure". Mostre como criar uma luz por código C++ no header do ator, escrevendo a linha exata: UPROPERTY(VisibleAnywhere) class UPointLightComponent* MinhaLuz; e explique que UPROPERTY expõe o componente no editor.

3. Mão na massa (25 min): cada aluno ilumina um trecho da própria fase. Roteiro: (a) deixar a Directional Light Movable e escolher cor/intensidade; (b) adicionar pelo menos uma Point Light com sombra; (c) criar um Post Process Volume Unbound e ajustar Bloom e Exposure; (d) adicionar um efeito de fumaça ou faísca com um Niagara System pelo botão Add. Peça que usem o Claude para pedir uma paleta de cores que combine com o clima da fase.

4. Desafio + compartilhar (10 min): cada aluno mostra o "antes e depois" da fase iluminada em uma frase. Quem teve queda de FPS conta o que pediu ao Claude e qual ajuste resolveu.

## Como explicar de forma clara (linguagem para a idade)

Compare a luz com a iluminação de um teatro: a mesma cena fica alegre com luz quente e clara, ou tensa com luz fria e fraca. Diga que o pós-processamento é como um filtro de foto no celular, mas aplicado no jogo inteiro. Explique partículas como confete: cada pedacinho é pequeno, mas juntos formam fogo ou fumaça. Para performance, use a imagem de uma mochila: cada efeito pesado é um livro a mais; carregue só o necessário para não ficar lento.

## Erros comuns e como ajudar

- A luz não muda no jogo: a Mobility ainda está "Static". Mude para "Movable" no painel Details.
- A cena fica toda branca (estourada): a Exposure ou a Intensity está alta demais; reduza aos poucos.
- O Post Process não faz efeito: o volume não está marcado como "Infinite Extent (Unbound)" ou o jogador está fora dele.
- Jogo travando: o aluno ligou sombra dinâmica em luzes demais. Oriente a deixar sombra só nas luzes principais e peça ao Claude sugestões de otimização.
- Partícula não aparece: o sistema Niagara está desativado ou minúsculo; confira a escala e se o emissor está ativo.`,
  exercicios: [
    {
      titulo: `Caça aos painéis da iluminação`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno esteja com a fase aberta na Viewport. Circule pela sala conferindo as telas. O objetivo é só reconhecer onde ficam os controles, sem ainda mudar valores importantes.`,
      atividade: `Na sua fase, encontre e mostre ao colega do lado: (1) a Directional Light no painel Outliner; (2) a propriedade "Mobility" no painel Details; (3) o botão "Add" no canto superior esquerdo da Viewport. Diga em voz alta o que cada um serve.`,
      gabarito: `O aluno localiza a Directional Light na lista do Outliner, aponta a propriedade "Mobility" no painel Details (explicando que ela define se a luz é estática ou móvel) e mostra o botão "Add" (que serve para inserir luzes, volumes e efeitos na cena).`,
    },
    {
      titulo: `De estática para dinâmica`,
      tipo: `Prática guiada`,
      tempo: `10 min`,
      guiaProfessor: `Conduza passo a passo no projetor e deixe a turma repetir. Peça que observem a Viewport mudando ao vivo enquanto ajustam os valores. Reforce que números muito altos estouram a imagem.`,
      atividade: `Selecione a Directional Light. Mude a "Mobility" para "Movable". No painel Details, troque a "Light Color" para uma cor que combine com o clima da sua fase e ajuste a "Intensity" até a cena ficar agradável (nem escura demais, nem estourada). Descreva em uma frase o clima que você criou.`,
      gabarito: `A Mobility fica em "Movable" (luz dinâmica), a Light Color é alterada para uma cor coerente com o clima desejado e a Intensity fica em um valor equilibrado. Exemplo de frase: "Deixei uma luz azulada e fraca para dar um clima frio e misterioso de caverna".`,
    },
    {
      titulo: `Filtro do jogo inteiro com Post Process`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Mostre primeiro como adicionar o volume pelo botão Add (categoria "Volumes"). O erro mais comum é esquecer de marcar "Infinite Extent (Unbound)" — fique atento a isso enquanto circula. Incentive ajustes sutis.`,
      atividade: `Adicione um Post Process Volume na fase. No painel Details, marque a opção "Infinite Extent (Unbound)" para o efeito valer na fase toda. Depois, ative e ajuste "Bloom Intensity" (brilho das luzes) e "Exposure" (claridade geral) até a fase ficar com um clima coeso. Compare o antes e o depois.`,
      gabarito: `O aluno adiciona o Post Process Volume, marca "Infinite Extent (Unbound)" e ajusta Bloom Intensity e Exposure com valores moderados. O resultado esperado é uma imagem com clima mais coeso (por exemplo, luzes com brilho suave e claridade equilibrada), e o aluno consegue descrever a diferença entre o antes e o depois.`,
    },
    {
      titulo: `Pedindo estilo visual ao Claude`,
      tipo: `Uso do Claude (IA)`,
      tempo: `12 min`,
      guiaProfessor: `Mostre como escrever um bom pedido: descrever a sensação desejada, citar a Unreal Engine e pedir nomes de parâmetros. Lembre que o Claude sugere o caminho, mas o aluno decide e testa. Não copie tudo cegamente.`,
      atividade: `Escreva um pedido ao Claude descrevendo o clima que você quer para a sua fase (por exemplo: "uma floresta sombria ao entardecer, com luz alaranjada e névoa"). Peça referências de paleta de cores e os nomes dos parâmetros da Unreal Engine que ajudam a chegar nesse clima. Aplique pelo menos uma sugestão na sua fase.`,
      gabarito: `Um pedido bem feito descreve a sensação, cita a Unreal Engine e pede paleta e parâmetros. Resposta esperada do Claude inclui itens como cores quentes alaranjadas para a Light Color, uso de Fog/Exponential Height Fog para névoa e ajuste de Bloom e Exposure no Post Process. O aluno aplica pelo menos uma dessas sugestões e mostra o resultado na Viewport.`,
    },
    {
      titulo: `Caçador de quadros: resolvendo a lentidão`,
      tipo: `Desafio de resolução de problemas`,
      tempo: `12 min`,
      guiaProfessor: `Antes, mostre como ver o desempenho digitando o comando "stat fps" no console (tecla com til ou aspas, conforme o teclado) durante o jogo. O foco é treinar diagnóstico: identificar o que pesa e ajustar com intenção, com apoio do Claude.`,
      atividade: `Encha um trecho da sua fase com várias luzes dinâmicas projetando sombra até notar que o jogo ficou lento (use "stat fps" para conferir). Em seguida, descreva o problema ao Claude e peça como melhorar a performance sem perder o clima. Aplique a sugestão e veja o FPS subir. Anote o que mudou.`,
      gabarito: `O aluno mede o FPS com "stat fps", percebe a queda causada por muitas sombras dinâmicas e, com a ajuda do Claude, aplica uma otimização — como desligar "Cast Shadows" das luzes secundárias, reduzir a quantidade de luzes ou diminuir o raio (Attenuation Radius) delas. Após o ajuste, o FPS volta a subir e o clima da fase é mantido. O aluno registra qual mudança resolveu.`,
    },
  ],
};
