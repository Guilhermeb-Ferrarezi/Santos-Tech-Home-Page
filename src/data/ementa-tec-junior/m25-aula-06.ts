import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes e variações",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar pequenos detalhes em voxel que dão personalidade ao modelo (olhos, manchas, marcas e acessórios) e criar uma segunda versão variando uma cor ou um detalhe para comparar e escolher a favorita.`,
  descricao: `Nas aulas anteriores cada criança escolheu o seu personagem, deu forma a ele com os cubinhos e pintou com cores. Agora o modelo já existe e está bonito, mas ainda parece um pouco "liso", sem alma. Esta aula é sobre os detalhes: aqueles toquezinhos pequenos que transformam um bonequinho qualquer no personagem DELA. Dois olhinhos, uma manchinha na barriga, uma estrela no peito ou um chapeuzinho mudam tudo. É a parte mais divertida da modelagem, porque é onde a criança coloca a própria assinatura no trabalho.

No MagicaVoxel, detalhe é cubinho também. A diferença é que aqui a gente trabalha pequeno e com capricho: um voxel só já vira um olho, dois voxels viram uma sobrancelha, alguns cubinhos de outra cor viram uma mancha. O professor vai mostrar como dar zoom para enxergar bem de pertinho, como pegar uma cor diferente na paleta para o detalhe se destacar e como apagar um errinho sem estragar o resto do modelo. É um trabalho de ourives: pequeno, calmo e cuidadoso.

A segunda metade da aula traz uma ideia poderosa para crianças dessa idade: a variação. Em vez de fazer um único modelo e parar, cada aluno cria uma SEGUNDA versão do seu personagem mudando só uma coisinha — por exemplo, a cor da camiseta, a cor dos olhos ou trocando um acessório. Assim ela passa a ter "o personagem azul" e "o personagem vermelho", ou "com chapéu" e "sem chapéu". Comparar as duas versões lado a lado ensina a olhar com olhos de criador e a tomar uma decisão: qual ficou melhor e por quê.

Ao final, cada criança terá um modelo cheio de personalidade e duas versões para comparar, escolhendo a favorita para seguir nas próximas aulas rumo à impressão 3D. Essa escolha consciente — "eu prefiro esta porque..." — é um exercício de gosto e de orgulho pelo próprio trabalho, e prepara o terreno para as aulas finais do mês, que vão deixar o modelo pronto para sair da tela e virar um objeto de verdade.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o modelo de cada criança carregado (arquivo salvo nas aulas anteriores)`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Dois exemplos prontos pelo professor: o MESMO personagem em duas versões (ex.: olhos azuis x olhos verdes, ou com chapéu x sem chapéu)`,
    `Exemplo de um modelo "sem detalhe" e o mesmo "com detalhe" para mostrar a diferença que os toques pequenos fazem`,
    `Cartão impresso "Lista de detalhes": olhos, boca, manchas, marcas, acessório, sombra`,
    `Folha de comparação simples (duas colunas: "Versão 1" e "Versão 2") com um espaço para a criança marcar a favorita`,
    `Adesivos ou carimbos de "Detalhista Estrela" para premiar quem caprichou nos detalhes`,
  ],
  conceitosChave: [
    `Detalhe — um toque pequeno, feito com poucos cubinhos, que dá personalidade ao modelo (um olho, uma mancha, uma estrela).`,
    `Acessório — uma coisinha extra que o personagem usa, como chapéu, laço, óculos ou colar.`,
    `Variação — uma segunda versão do mesmo modelo com uma mudança só (outra cor ou outro detalhe).`,
    `Zoom — chegar mais perto na tela com a rodinha do mouse para enxergar e clicar nos cubinhos pequenos.`,
    `Contraste — usar uma cor bem diferente para o detalhe aparecer (olho preto num rosto claro, por exemplo).`,
    `Simetria — quando os dois lados ficam iguais, como os dois olhos na mesma altura.`,
    `Comparar — colocar as duas versões lado a lado e olhar com calma para escolher a favorita.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o MagicaVoxel para dar esta aula. Os detalhes usam as mesmas ferramentas básicas que a turma já conhece, só que aplicadas em tamanho pequeno. As ferramentas ficam no painel à esquerda, na seção "Edit": "Attach" (o lápis que coloca cubinhos) e "Erase" (a borracha que tira cubinhos). No alto desse painel há os modos de clique: "Voxel" (um cubinho por vez — use este para detalhes), "Face", "Box" e "Line". Para detalhe fino, deixe sempre em "Voxel".

A cor vem da paleta de cores que fica à direita da tela. Clique numa cor diferente da do corpo antes de fazer o detalhe — assim ele aparece. Para enxergar de pertinho, ensine o gesto do zoom: girar a rodinha do mouse para frente aproxima, para trás afasta. Para girar o modelo e ver o outro lado, segure o botão direito do mouse (ou o esquerdo numa área vazia, dependendo da configuração) e arraste. Se a criança apagar algo sem querer, o atalho mágico é Ctrl+Z (desfazer) — decore isso, você vai usar muito.

Para a variação, o caminho mais simples e seguro é duplicar o trabalho. Antes de mudar qualquer coisa, salve a versão atual com "Save As" no menu superior, dando um nome como "personagem-v1". Depois faça a mudança e salve de novo como "personagem-v2". Assim a criança fica com os dois arquivos e nada se perde.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Em roda, mostre no projetor o exemplo "sem detalhe" e o "com detalhe" do mesmo personagem. Pergunte: "Qual tem mais personalidade? O que mudou?" Deixe as crianças apontarem os olhos, a mancha, o chapéu. Conclua: hoje vamos dar alma ao nosso modelo com detalhes pequenos.

Conteúdo novo guiado (15 min): No projetor, abra um modelo e demonstre devagar. Primeiro o zoom (rodinha do mouse) para chegar perto do rosto. Depois clique numa cor escura na paleta da direita, garanta que o modo está em "Voxel" e a ferramenta em "Attach", e coloque DOIS olhinhos na mesma altura (fale de simetria). Mostre o Ctrl+Z apagando e refazendo. Por fim, faça "Save As" como "v1", troque a cor dos olhos e mostre como nasce uma "v2".

Mão na massa (25 min): Cada criança abre o próprio modelo e, usando o cartão "Lista de detalhes", adiciona pelo menos três detalhes: olhos, uma boca ou mancha e um acessório. Circule pela sala lembrando do zoom, do contraste de cor e do Ctrl+Z. Quando terminarem os detalhes, oriente a salvar como "v1", criar a "v2" mudando UMA coisa só e salvar de novo.

Desafio e compartilhar (10 min): Cada aluno coloca as duas versões lado a lado (abrindo as duas ou alternando na tela) e preenche a folha de comparação, marcando a favorita e dizendo em uma frase por quê. Faça uma rodinha rápida de "mostrar e contar": cada um exibe a versão escolhida. Quem caprichou ganha o carimbo "Detalhista Estrela".

## Como explicar para crianças

Use a analogia do bolo: "O modelo pronto é o bolo; os detalhes são a cobertura e os confeitos. Sem eles o bolo é bom, mas com eles fica nosso!" Para a variação, fale de roupa: "É o mesmo boneco, mas hoje ele está de camiseta azul e amanhã de camiseta vermelha. Qual você gosta mais?" Chame o zoom de "lupa de detetive" e a simetria de "os dois olhos brincando de espelho, sempre na mesma altura".

## Erros comuns e como ajudar

A criança faz o detalhe da mesma cor do corpo e ele "some": peça para escolher uma cor bem diferente na paleta antes de clicar. Os dois olhos saem em alturas diferentes: ensine a contar os cubinhos a partir do topo para acertar a mesma linha. Ela apaga o modelo inteiro sem querer: Ctrl+Z resolve; mantenha a calma e desfaça junto com ela. O detalhe fica gigante porque o modo estava em "Box": confira se está em "Voxel". Ela some com o modelo da tela ao girar demais: aperte a tecla para reenquadrar ou afaste o zoom até reaparecer. Na hora da variação, a criança muda tudo e perde a "v1": reforce salvar a "v1" ANTES de mexer e mudar só uma coisinha.`,
  exercicios: [
    {
      titulo: `Caça aos detalhes`,
      tipo: `Roda de observação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o mesmo personagem em duas imagens: "sem detalhe" e "com detalhe". Peça para as crianças apontarem tudo que mudou. Vá listando no quadro (olhos, boca, mancha, chapéu). O objetivo é treinar o olhar de detalhista antes de ir ao computador.`,
      atividade: `Olhe os dois bonecos na tela. Aponte e diga em voz alta tudo que é diferente entre o "sem detalhe" e o "com detalhe".`,
      gabarito: `A criança identifica pelo menos dois ou três detalhes adicionados. Acerto = perceber elementos pequenos como olhos, boca, mancha ou acessório. Exemplo de resposta: "Esse tem olhos, uma boca sorrindo e um chapéu, o outro não tinha nada disso".`,
    },
    {
      titulo: `Dois olhinhos na mesma altura`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que a ferramenta está em "Attach" e o modo em "Voxel". Peça para a criança dar zoom no rosto com a rodinha do mouse e escolher uma cor escura na paleta da direita. Ajude a contar os cubinhos do topo para os dois olhos ficarem simétricos. Lembre do Ctrl+Z se errar.`,
      atividade: `Dê zoom no rosto do seu personagem. Escolha uma cor escura e coloque dois olhinhos, um de cada lado, na mesma altura — como se os dois estivessem brincando de espelho.`,
      gabarito: `Dois voxels de cor diferente do corpo, posicionados na mesma linha e em lados opostos do rosto. Acerto = olhos visíveis (com contraste) e simétricos. Erro comum: olhos em alturas diferentes; corrige-se contando os cubinhos a partir do topo.`,
    },
    {
      titulo: `Três detalhes com a Lista`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue o cartão "Lista de detalhes". Cada criança escolhe e adiciona pelo menos três detalhes diferentes (ex.: boca, mancha na barriga e um acessório). Circule lembrando de usar cores com contraste e o modo "Voxel" para não sair detalhe gigante. Valorize a criatividade de cada escolha.`,
      atividade: `Usando a Lista de detalhes, adicione três coisinhas ao seu personagem: por exemplo uma boca, uma manchinha e um acessório como chapéu ou laço. Capriche para cada uma aparecer bem.`,
      gabarito: `O modelo ganha três ou mais detalhes distintos, visíveis e com cores que contrastam com o corpo. Acerto = três elementos identificáveis. Exemplo: boca vermelha, mancha marrom na barriga e um chapéu azul no topo da cabeça.`,
    },
    {
      titulo: `Nasce a Versão 2`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `7 minutos`,
      guiaProfessor: `Oriente a salvar o modelo atual com "Save As" como "v1". Depois a criança muda UMA coisa só — a cor de uma roupa, dos olhos, ou troca um acessório — e salva de novo como "v2". Reforce que é mudar uma coisinha apenas, para dar para comparar as duas. Acompanhe o "Save As" de perto, é o passo mais técnico.`,
      atividade: `Salve o seu personagem como "v1". Agora mude só uma coisa (uma cor ou um detalhe) e salve essa nova versão como "v2". Pronto: você tem duas versões do mesmo personagem!`,
      gabarito: `Dois arquivos salvos ("v1" e "v2") do mesmo modelo, diferindo em exatamente um detalhe. Acerto = a mudança é única e perceptível, e a "v1" foi preservada. Exemplo: "v1" com camiseta azul e "v2" com camiseta vermelha, todo o resto igual.`,
    },
    {
      titulo: `Qual é a minha favorita?`,
      tipo: `Comparar e decidir`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança coloca as duas versões lado a lado (abrindo as duas ou alternando) e preenche a folha de comparação, marcando a favorita e escrevendo ou falando uma frase com o porquê. Conduza uma rodinha rápida de "mostrar e contar". Premie quem caprichou com o carimbo "Detalhista Estrela".`,
      atividade: `Olhe as suas duas versões lado a lado. Escolha a sua favorita, marque na folha de comparação e conte para a turma em uma frase por que você gosta mais dela.`,
      gabarito: `A criança escolhe uma das versões e justifica com uma razão simples ligada a um detalhe ou cor. Acerto = decisão clara e motivo coerente. Exemplo: "Prefiro a v2 porque os olhos verdes combinam mais com o chapéu". Não há resposta certa ou errada na escolha; o que conta é comparar e justificar.`,
    },
  ],
};
