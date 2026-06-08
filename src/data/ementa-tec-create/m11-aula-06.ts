import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes, Texturas e Materiais",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Dar vida ao personagem em voxel aplicando sombreamento, gradientes, pequenos detalhes (olhos, botões e brilhos) e materiais especiais como emissivo, metálico e vidro no MagicaVoxel.`,
  descricao: `Nesta aula os alunos saem da forma sólida e chapada do personagem e entram na fase de acabamento, que é o que separa um modelo "ok" de um modelo que parece vivo. Até agora o personagem tem corpo, itens e cores básicas. Hoje vamos ensinar como adicionar profundidade com sombreamento (tons mais escuros nas dobras e mais claros onde a luz bate), criar gradientes suaves entre cores e colocar os pequenos detalhes que dão personalidade: olhos com brilho, botões na roupa, fivelas e reflexos.

A grande novidade da aula são os materiais do MagicaVoxel. Além da cor, cada voxel pode ter um tipo de material que muda como ele reage à luz: o emissivo faz o voxel brilhar como se tivesse luz própria (ótimo para olhos mágicos, lâmpadas, lava e energia); o metálico cria reflexos de metal (espadas, armaduras, robôs); e o vidro deixa o voxel transparente e brilhante (cristais, óculos, poções). O aluno aprende que detalhe não é encher de coisas, e sim escolher poucos pontos certos para chamar a atenção.

É importante lembrar que esta é a Aula 6 de 8 do mês. O personagem já está construído e pintado das aulas anteriores; aqui ele recebe o acabamento final. A pose final e a entrega acontecem nas Aulas 7 e 8, então hoje o foco é deixar o modelo bonito e pronto, sem ainda posicioná-lo na pose definitiva nem exportar para impressão.

Para o professor iniciante: não é preciso ser artista. O MagicaVoxel já traz tudo na tela; basta mostrar onde clicar e deixar o aluno experimentar. O segredo da aula é repetir uma regra simples: "claro onde a luz bate, escuro onde tem sombra, e um brilho onde queremos chamar o olho".`,
  materiais: [
    `Computadores (1 por aluno) com MagicaVoxel instalado e já aberto com o personagem da Aula 5 carregado`,
    `Projetor ou TV para o professor mostrar a tela do MagicaVoxel em tempo real`,
    `Arquivo de exemplo .vox com um personagem simples antes/depois (sem detalhes e com detalhes aplicados) para comparação`,
    `Imagem de referência com a "regra da luz" (lado claro, lado escuro, ponto de brilho) impressa ou no slide`,
    `Paleta de cores já organizada da Aula 5 (tons claros, médios e escuros de cada cor do personagem)`,
    `Fone de ouvido opcional para os alunos que preferem trabalhar em silêncio`,
    `Impressora 3D disponível na sala apenas para referência visual (lembrar que materiais como vidro e emissivo são efeitos de tela e não saem na impressão)`,
  ],
  conceitosChave: [
    `Sombreamento — usar tons mais escuros nas sombras e mais claros onde a luz bate para criar volume e profundidade.`,
    `Gradiente — transição suave entre duas cores próximas, sem cortes bruscos, deixando a superfície mais natural.`,
    `Material emissivo — tipo de material que faz o voxel brilhar com luz própria, ideal para olhos, lava e energia.`,
    `Material metálico — material que reflete a luz como metal, perfeito para espadas, armaduras e robôs.`,
    `Material vidro (glass) — material transparente e brilhante usado em cristais, óculos e poções.`,
    `Ponto de brilho (highlight) — voxel claro colocado de propósito para chamar a atenção do olhar, como o brilho no olho.`,
    `Acabamento — etapa final em que pequenos detalhes e materiais transformam um modelo simples em um personagem com vida.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você vai trabalhar com duas coisas: cor (sombreamento, gradiente, detalhes) e material (emissivo, metálico, vidro). No MagicaVoxel a cor fica na paleta à direita e o material é configurado logo abaixo da paleta, na aba "Palette / Material". Cada cor da paleta pode guardar um material diferente. A regra de ouro para ensinar é: "claro onde a luz bate, escuro na sombra, e um brilho no ponto certo". Você não precisa ser artista; o programa faz o trabalho pesado e o aluno só escolhe onde clicar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o personagem da Aula 5 no projetor. Mostre o arquivo de exemplo "antes e depois" e pergunte: "o que mudou?". Conduza até a resposta: sombras, brilhos e materiais. Relembre como trocar de cor clicando na paleta e como pintar com a ferramenta "Paint" (tecla B) no modo "Attach/Paint".

Conteúdo novo guiado (15 min): com o personagem na tela, ensine o sombreamento. Selecione a ferramenta "Paint" (B), escolha um tom mais escuro da paleta e pinte a parte de baixo de um braço; depois um tom mais claro no topo. Em seguida mostre os materiais: clique numa cor da paleta, vá ao painel "Material" (abaixo da paleta), e troque o "Type" de "Diffuse" para "Emission" (emissivo). Aumente o valor de "Emit" e mostre o olho brilhando ao renderizar (botão "Render" no topo). Repita rápido com "Metal" (ajuste "Metal" e "Rough") e "Glass" (ajuste "Glass" e "Rough"). Avise: vidro e emissivo são efeitos de tela, não saem na impressão.

Mão na massa (25 min): cada aluno aplica no próprio personagem, nesta ordem (escreva no quadro): 1) sombrear um lado mais escuro e outro mais claro no corpo; 2) criar um gradiente suave em uma área grande (capa, cabelo); 3) colocar dois detalhes pequenos (botão, fivela); 4) deixar os olhos emissivos; 5) escolher UM material especial (metal numa espada OU vidro num cristal). Circule pela sala usando "Render" para mostrar o resultado a cada aluno.

Desafio e compartilhar (10 min): desafie quem terminou a usar gradiente de duas cores diferentes (ex.: roxo para azul). Cada aluno mostra a tela renderizada em 30 segundos dizendo qual material usou e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Sombreamento: "imagina o sol batendo no seu personagem; o lado do sol fica claro e o outro lado fica escuro". Emissivo: "é como uma lanterna ligada dentro do voxel". Metálico: "igual a uma colher brilhando na luz". Vidro: "como um copo que dá pra ver através". Gradiente: "como o céu no fim da tarde, que vai do laranja pro azul sem linha no meio". Evite termos técnicos sozinhos; sempre junte com um exemplo. Reforce que "menos é mais": três brilhos bem colocados valem mais que vinte espalhados.

## Erros comuns e como ajudar

O erro mais comum é o aluno não ver o material funcionando porque esqueceu de clicar em "Render"; no modo de edição normal o brilho não aparece. Mostre o botão "Render" no topo. Outro erro: aplicar emissivo na cor errada da paleta, fazendo o personagem inteiro brilhar; explique que o material gruda na COR da paleta, então use uma cor só para os olhos. Muitos exageram e enchem tudo de metal e vidro; oriente "um material especial por personagem". Há também quem escureça demais e perca o desenho; ensine a escolher tons vizinhos na paleta, não o preto puro. Por fim, alguns esquecem de salvar: lembre "Ctrl + S" no fim da aula e diga que a pose final é só na próxima aula.`,
  exercicios: [
    {
      titulo: `Aquecimento: lado claro, lado escuro`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha tons claro, médio e escuro da mesma cor na paleta. Mostre a ferramenta Paint (tecla B) antes de soltar a turma. Circule e verifique se o lado escuro está embaixo e o claro em cima.`,
      atividade: `Escolha uma parte grande do seu personagem (tronco ou perna). Pinte a parte de baixo com um tom mais escuro e a parte de cima com um tom mais claro da mesma cor, criando a sensação de luz vindo de cima.`,
      gabarito: `A parte tem pelo menos dois tons da mesma cor: um mais escuro embaixo (sombra) e um mais claro em cima (luz). O personagem ganha volume e deixa de parecer chapado. Espera-se uso da ferramenta Paint (B) sem mudar a forma do modelo.`,
    },
    {
      titulo: `Olhos que brilham: primeiro material emissivo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre no projetor: clicar na cor dos olhos na paleta, abrir o painel Material, trocar Type para Emission e subir o valor de Emit. Reforce clicar em Render para ver o brilho. Avise que a cor dos olhos deve ser exclusiva para o personagem inteiro não brilhar.`,
      atividade: `Crie uma cor só para os olhos na paleta. Transforme essa cor em material emissivo (Emission) e ajuste o brilho. Use Render para conferir o resultado.`,
      gabarito: `Os olhos aparecem brilhando ao renderizar, e o restante do personagem continua normal porque o material foi aplicado apenas na cor exclusiva dos olhos. O aluno consegue explicar que o material gruda na cor da paleta, não no voxel isolado.`,
    },
    {
      titulo: `Detalhes em dupla: caça aos pontos certos`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um observe o personagem do colega e sugira onde caberiam dois detalhes (botão, fivela, brilho). Reforce a regra "menos é mais": no máximo três detalhes novos. Ande pela sala mediando as sugestões.`,
      atividade: `Olhe o personagem do seu colega e sugira dois lugares bons para detalhes pequenos (botão, fivela, costura ou brilho). Depois cada um aplica no próprio modelo os dois melhores detalhes sugeridos pela dupla.`,
      gabarito: `Cada personagem ganha até três detalhes pequenos e bem posicionados, sem poluir o modelo. A dupla justifica as escolhas (ex.: "o botão na jaqueta deixa a roupa mais real"). Detalhes ficam em pontos que chamam o olhar, como peito, cinto ou rosto.`,
    },
    {
      titulo: `Desafio do material especial`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe o aluno escolher UM material especial: metálico (Metal, ajustando Metal e Rough) ou vidro (Glass, ajustando Glass e Rough). Mostre rápido os dois no projetor. Lembre que vidro e emissivo são efeitos de tela e não saem na impressão 3D real.`,
      atividade: `Escolha um item do seu personagem (espada, escudo, cristal, óculos) e aplique nele UM material especial: metálico OU vidro. Ajuste os valores até ficar convincente e renderize para conferir.`,
      gabarito: `Um item exibe material metálico (com reflexo) ou vidro (transparente e brilhante) ao renderizar, aplicado a uma cor própria. O aluno escolheu apenas um material especial, mantendo o modelo limpo, e sabe explicar por que aquele material combina com o item.`,
    },
    {
      titulo: `Projeto curto: gradiente e roda de conversa`,
      tipo: `projeto curto e roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça um gradiente suave entre duas cores vizinhas (ex.: roxo para azul) numa área grande como capa ou cabelo, usando tons intermediários da paleta. Nos minutos finais, conduza uma roda rápida em que cada aluno mostra a tela renderizada e cita um detalhe e um material que usou. Lembre todos de salvar com Ctrl + S.`,
      atividade: `Aplique um gradiente suave entre duas cores numa parte grande do personagem, sem cortes bruscos. Depois apresente em 30 segundos, na roda, mostrando o render e contando qual material e qual detalhe deixaram seu personagem mais vivo.`,
      gabarito: `A área escolhida mostra transição suave entre duas cores, sem linha dura no meio. Na roda, o aluno apresenta o modelo renderizado e nomeia corretamente pelo menos um material (emissivo, metálico ou vidro) e um detalhe aplicado. O arquivo é salvo com Ctrl + S, pronto para a Aula 7 (pose final).`,
    },
  ],
};
