import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes que Dão Vida",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar com segurança os detalhes finais (relevos, marcas e pequenas partes) na peça 3D, conferindo sempre se ficaram grossos o bastante para a impressora dar conta.`,
  descricao: `Nesta aula a peça de cada criança já está lisinha e bem montada das aulas anteriores. Agora chegou a hora mais divertida do acabamento: colocar os detalhes que fazem a peça parecer viva de verdade. Um botãozinho saltado, uma estrela em relevo, a inicial do nome, uma orelhinha extra, um risco que vira sorriso. São esses pequenos toques que transformam um bloco bonito em algo com personalidade, com cara de brinquedo de loja.

Mas existe uma regra de ouro da impressão 3D que toda criança precisa entender hoje: detalhe muito fino some na impressora. A Bambu Lab funciona empilhando finas camadas de plástico derretido, e ela tem um tamanho mínimo que consegue desenhar. Se a gente faz um traço mais fino que um fio de cabelo grosso, a impressora não dá conta, e o detalhe vira uma bolha borrada ou simplesmente desaparece. Por isso a frase mágica da aula é: "se eu não consigo apertar com o dedinho, a impressora também não consegue fazer."

No Blender, vamos aprender duas formas seguras de criar detalhes. A primeira é grudar pequenas formas por cima da peça (um cubo achatado vira um botão, um cilindro fininho vira um relevo). A segunda é afundar uma marca para baixo, como carimbar a peça. Em todos os casos, a criança vai medir a grossura olhando o painel de tamanho e comparando com a régua de referência da turma (um detalhe nunca pode ser mais fino que cerca de 2 milímetros).

O segredo pedagógico é a calma e a conferência. Detalhe é a parte em que a criança se empolga e quer colocar mil coisinhas minúsculas. Nosso trabalho é celebrar a criatividade e, ao mesmo tempo, ensinar a parar, olhar o número e perguntar: "isso vai sair bonito na impressora de verdade?" Quem aprende a conferir hoje, na Aula 7 faz o teste de impressão sem sustos.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo da peça de cada aluno carregado`,
    `Projetor ou TV ligado no computador do professor para demonstrar cada passo ampliado`,
    `Dois ou três exemplos prontos impressos: um com detalhe grosso (deu certo) e um com detalhe fininho (sumiu ou borrou)`,
    `Régua de referência da turma: um pedacinho de papel marcado mostrando "2 milímetros" como espessura mínima`,
    `Mouse com rodinha para cada criança (essencial para aproximar e afastar a câmera)`,
    `Cartão ilustrado com os atalhos do dia colado na lateral do monitor (G de mover, S de tamanho, Tab de editar)`,
    `Folha de planejamento da peça que os alunos preencheram na Aula 2, para lembrar quais detalhes foram combinados`,
  ],
  conceitosChave: [
    `Detalhe — uma partezinha pequena que a gente coloca por cima ou afunda na peça para deixá-la com mais graça, como um botão ou uma estrela.`,
    `Relevo — quando o detalhe fica saltado para fora da superfície, alto o bastante para a gente sentir com o dedo.`,
    `Marca afundada — quando a gente carimba o detalhe para dentro da peça, criando um buraquinho com formato (como um nome gravado).`,
    `Espessura mínima — a grossura mais fininha que a impressora consegue desenhar; abaixo dela o detalhe some. Nossa regra: nunca mais fino que 2 milímetros.`,
    `Painel de tamanho — a janelinha do Blender (tecla N) que mostra os números de largura, altura e profundidade da forma selecionada.`,
    `Juntar (mesclar) — grudar a forminha do detalhe na peça grande para virarem uma coisa só, prontas para imprimir juntas.`,
    `Régua do dedinho — nossa analogia: se você não consegue apertar o detalhe com a pontinha do dedo, a impressora também não consegue fazê-lo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Precisa apenas treinar uma vez o caminho desta aula antes de entrar na sala. O objetivo é só um: ajudar a criança a colocar pequenos detalhes na peça sem deixá-los finos demais. Os detalhes saem de duas maneiras: colando uma forminha por cima (relevo) ou afundando uma forminha para dentro (marca). Em ambos os casos, o que mais importa não é o desenho bonito, e sim conferir a grossura no painel de tamanho. Tenha à mão os exemplos impressos: o detalhe grosso que ficou lindo e o fininho que sumiu. Eles valem mais que mil explicações. Deixe a "régua do dedinho" sempre visível: se não dá para apertar com a ponta do dedo, é fino demais.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra os dois exemplos impressos e passe de mão em mão. Pergunte: "qual detalhe vocês conseguem sentir com o dedo? Por que esse aqui sumiu?" Deixe as crianças descobrirem sozinhas que o fino some. Reabra os arquivos de cada um no projetor.

Conteúdo novo guiado (15 min): No seu Blender, mostre como criar um relevo. Clique em "Add" (Adicionar) no topo, escolha "Mesh" e depois "Cube". Aperte G para mover a forminha até a superfície da peça. Aperte S para mudar o tamanho e deixe-a achatada, como um botão. Agora abra o painel de tamanho com a tecla N: a janelinha aparece na direita. Mostre o campo "Dimensions" (Dimensões) e diga em voz alta o número da altura. Combine com a turma: nunca menor que 2 milímetros. Em seguida, mostre a marca afundada: posicione outra forminha entrando para dentro da peça e explique que depois ela vira um buraquinho carimbado.

Mão na massa (25 min): Cada criança escolhe UM detalhe da folha de planejamento e o coloca na própria peça. Passe de mesa em mesa repetindo o mesmo ritual: "selecionou? Aperta N. Qual o número? Passou de 2? Então tá seguro." Quem terminar rápido coloca um segundo detalhe, sempre conferindo. Não deixe ninguém colocar mais de três para não virar bagunça.

Desafio e compartilhar (10 min): Lance o desafio do "detalhe ousado", peça para cada um mostrar a peça no projetor e contar qual detalhe colocou e qual número apareceu no painel.

## Como explicar para crianças

Use sempre a analogia do dedinho: "a impressora desenha com um lápis de plástico bem gordinho; ela não consegue fazer risquinhos de formiga." Chame o relevo de "detalhe saltado" e a marca de "detalhe carimbado". Quando a criança quiser um detalhe minúsculo, não diga "não pode"; diga "vamos engordar ele um pouquinho para ele aparecer na impressão". Transforme conferir o número em brincadeira: "vamos espiar o segredo da forma apertando o N!"

## Erros comuns e como ajudar

O erro número um é o detalhe fino demais: a criança faz um traço lindo na tela, mas com 0,5 milímetro. Solução: aperte S e aumente até o painel mostrar pelo menos 2. O segundo erro é o detalhe flutuando, sem encostar na peça; mostre que ele precisa tocar a superfície, use G para aproximar até afundar um tiquinho. O terceiro é exagerar na quantidade: combine o limite de três detalhes. O quarto é mexer na câmera achando que mexeu na peça; lembre que rodinha do mouse só aproxima e afasta, e que mover a forma é com a tecla G depois de clicar nela. Por fim, se a criança apagar algo sem querer, Ctrl+Z desfaz com calma.`,
  exercicios: [
    {
      titulo: `Caça ao Detalhe Sumido`,
      tipo: `Observação e discussão`,
      tempo: `8 minutos`,
      guiaProfessor: `Use os dois exemplos impressos durante o aquecimento. Passe-os de mão em mão e deixe cada criança tocar antes de responder. O objetivo é que descubram sozinhas a regra, sem você entregar a resposta.`,
      atividade: `Compare as duas peças impressas. Aperte cada detalhe com a pontinha do dedo. Qual detalhe você consegue sentir bem? Qual ficou borrado ou sumiu? Por que você acha que isso aconteceu?`,
      gabarito: `O detalhe grosso (com pelo menos 2 milímetros) dá para sentir com o dedo e saiu bonito. O detalhe fino sumiu ou borrou porque era mais fino do que a impressora consegue desenhar. Conclusão: se não dá para apertar com o dedinho, a impressora não consegue fazer.`,
    },
    {
      titulo: `Espiando o Número Secreto`,
      tipo: `Prática guiada no Blender`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada criança tenha uma forma já selecionada (clicada, com a borda laranja). Mostre no projetor onde fica a tecla N e qual é o campo "Dimensions". Repita o ritual junto com a turma a primeira vez.`,
      atividade: `Clique em uma forminha da sua peça. Aperte a tecla N para abrir o painel de tamanho na direita. Encontre o campo "Dimensions" (Dimensões) e leia em voz alta o número da altura. Esse número passou de 2 milímetros?`,
      gabarito: `Ao apertar N, o painel lateral abre e mostra "Dimensions" com três números (largura, profundidade e altura). A criança deve ler o número da altura. Se for 2 ou mais, está seguro para imprimir; se for menor que 2, precisa engordar com a tecla S.`,
    },
    {
      titulo: `Meu Primeiro Relevo`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe mesa a mesa. Lembre a sequência: Add > Mesh > Cube, depois G para mover e S para achatar. Reforce que a forminha precisa encostar na peça, afundando um tiquinho. Confira o painel N com cada aluno.`,
      atividade: `Adicione um cubo (Add > Mesh > Cube). Aperte S para achatá-lo como um botão. Aperte G para movê-lo até encostar na sua peça. Abra o painel com N e confira: a altura do seu relevo tem pelo menos 2 milímetros?`,
      gabarito: `A criança cria um relevo saltado e o posiciona tocando a superfície da peça. No painel N, a altura deve aparecer com 2 milímetros ou mais. Se estiver fino, ela aperta S para engordar até o número ficar correto. Um relevo válido é aquele que dá para sentir com o dedo.`,
    },
    {
      titulo: `Carimbo na Peça`,
      tipo: `Mão na massa (desafio intermediário)`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o passo da marca afundada. Mostre que a forminha precisa entrar para dentro da peça, não só encostar. Explique que o buraquinho também tem que ser largo o bastante, senão fecha na impressão. Confira o tamanho com a régua do dedinho.`,
      atividade: `Crie uma forminha simples (um cubo ou cilindro) e use G para empurrá-la para dentro da sua peça, como um carimbo. Confira no painel N se a marca tem pelo menos 2 milímetros de largura. Ela ficou larga o bastante para aparecer?`,
      gabarito: `A criança posiciona uma forma penetrando a peça para criar uma marca afundada. No painel N, a largura da marca deve ter no mínimo 2 milímetros. Marcas muito estreitas fecham e somem na impressão. A marca correta é larga o bastante para enxergar e sentir o sulco.`,
    },
    {
      titulo: `O Detalhe Ousado`,
      tipo: `Desafio criativo e compartilhamento`,
      tempo: `11 minutos`,
      guiaProfessor: `Momento final de criatividade com responsabilidade. Cada criança escolhe um detalhe especial e precisa justificar que ele é grosso o bastante. No compartilhamento, peça para mostrarem o número do painel N no projetor, valorizando quem conferiu.`,
      atividade: `Escolha um detalhe especial que deixe sua peça com mais personalidade (uma estrela, sua inicial, um botão extra). Coloque-o na peça, confira a grossura no painel N e mostre para a turma. Explique: qual detalhe você fez e qual número apareceu?`,
      gabarito: `Não existe um único desenho certo: vale qualquer detalhe criativo desde que tenha pelo menos 2 milímetros de espessura, esteja encostando ou afundado na peça, e respeite o limite de até três detalhes. A criança deve conseguir dizer qual detalhe colocou e mostrar o número do painel N comprovando que está seguro para impressão.`,
    },
  ],
};
