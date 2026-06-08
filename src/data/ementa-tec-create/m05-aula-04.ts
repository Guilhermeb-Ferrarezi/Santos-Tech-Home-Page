import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Modelando Meu Objeto",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Avançar na construção do próprio modelo 3D no Blender usando extrude, inset, loop cut e bevel para criar volume e detalhes, transformando uma ideia simples em uma forma reconhecível.`,
  descricao: `Nesta aula o aluno deixa de só "empurrar" o cubo e passa a esculpir de verdade. Na aula anterior ele aprendeu a sair do cubo e dar os primeiros formatos ao objeto; agora chega a hora de ganhar profundidade e personalidade. Quatro ferramentas fazem quase toda a mágica da modelagem no Blender: o extrude (extrudar), o inset (recuar uma face para dentro), o loop cut (cortar anéis de arestas) e o bevel (chanfrar quinas). Dominar essas quatro é como aprender as quatro operações básicas da matemática: com elas, dá para construir quase tudo.

O coração da aula é o Modo de Edição (Edit Mode). Até agora o aluno mexia no objeto inteiro, no Modo Objeto. Ao apertar a tecla Tab, ele entra no Modo de Edição e passa a mexer nas partes do modelo: vértices (os pontos), arestas (as linhas) e faces (os quadradinhos). É dentro desse modo que o extrude puxa novas partes para fora, o inset cria uma moldura dentro de uma face, o loop cut adiciona mais divisões para poder dobrar e detalhar, e o bevel arredonda ou suaviza as quinas duras.

A ideia central é que toda forma complexa nasce de operações simples repetidas. Uma cabeça de personagem, um cogumelo, uma nave: tudo começa com um cubo e cresce com extrudes e cortes. O aluno aprende a "planejar antes de clicar": pensar onde puxar, onde cortar e onde suavizar. Mais importante do que a perfeição é a coragem de experimentar, desfazer com Ctrl+Z e tentar de novo.

Ao final, cada aluno terá avançado bastante no seu próprio modelo: a forma já deve ser reconhecível, com algum volume e pelo menos um detalhe feito com extrude, inset, loop cut ou bevel. Esse modelo é o mesmo que, nas próximas semanas, vai ganhar cores, acabamento e por fim será preparado para sair na impressora 3D. É a aula em que a ideia na cabeça começa a virar objeto.`,
  materiais: [
    `Computadores com o Blender instalado e já aberto, um por aluno (versão recente, com o cubo padrão na cena)`,
    `Projetor ou TV grande para o professor demonstrar cada ferramenta passo a passo, com o Blender em tela cheia`,
    `Arquivo .blend de exemplo com um objeto simples em andamento (por exemplo um cogumelo ou um robô), para quem precisar de referência`,
    `Folha impressa com os atalhos da aula colada na bancada: E (extrude), I (inset), Ctrl+R (loop cut), Ctrl+B (bevel), Tab (Modo de Edição)`,
    `Imagens de referência (um desenho simples do objeto de cada aluno) impressas ou abertas na tela, para guiar a modelagem`,
    `Mouse com roda para cada aluno, pois orbitar e usar o loop cut ficam muito mais fáceis do que só com o touchpad`,
    `Impressora 3D ligada e visível na sala, lembrando o destino final do modelo que está sendo construído`,
  ],
  conceitosChave: [
    `Modo de Edição (Edit Mode) — modo do Blender, aberto com a tecla Tab, em que mexemos nas partes do modelo (vértices, arestas e faces) em vez do objeto inteiro.`,
    `Extrude (extrudar) — atalho E; puxa uma face, aresta ou vértice para fora criando geometria nova, como esticar massinha para formar um braço ou um pé.`,
    `Inset (recuar face) — atalho I; cria uma face menor dentro de outra, como desenhar uma moldura por dentro; ótimo para botões, janelas e detalhes afundados.`,
    `Loop Cut (corte em anel) — atalho Ctrl+R; adiciona um anel de arestas em volta do modelo, dando mais divisões para dobrar, detalhar ou afinar partes.`,
    `Bevel (chanfro) — atalho Ctrl+B; arredonda ou achata uma quina dura, deixando o objeto menos "cortante" e mais suave, como lixar a borda de uma madeira.`,
    `Vértice, aresta e face — as três partes da malha: o ponto (vértice), a linha entre dois pontos (aresta) e a superfície fechada (face); alternadas pelas teclas 1, 2 e 3.`,
    `Topologia — o jeito como as faces e arestas estão organizadas no modelo; uma boa topologia tem cortes onde o objeto precisa dobrar ou ganhar detalhe.`,
  ],
  treinamento: `## O que o professor precisa saber

As quatro ferramentas desta aula vivem no Modo de Edição. Para entrar nele, selecione o objeto e aperte Tab; aperte Tab de novo para voltar ao Modo Objeto. No alto à esquerda do visor 3D há três bolinhas (vértice, aresta, face), também acessadas pelas teclas 1, 2 e 3. Para a maioria das operações desta aula, trabalhe em modo Face (tecla 3).

Extrude (E): selecione uma ou mais faces, aperte E e mova o mouse; clique para confirmar. Para puxar reto num eixo, aperte E e depois Z (ou X, ou Y). Inset (I): selecione uma face, aperte I, mova para definir a espessura e clique. Loop Cut (Ctrl+R): passe o mouse sobre o modelo, aparece uma linha amarela; gire a roda do mouse para definir quantos cortes; clique uma vez para fixar, depois mova e clique de novo para posicionar (ou clique com o botão direito para deixar no centro). Bevel (Ctrl+B): selecione uma aresta ou quina, aperte Ctrl+B, arraste para definir o tamanho e gire a roda para aumentar os segmentos (mais segmentos = mais arredondado). Lembre sempre: Ctrl+Z desfaz qualquer passo.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Blender)

Aquecimento (10 min): retome a aula anterior com perguntas. "O que vocês já conseguiram tirar do cubo?" Mostre no projetor um modelo de exemplo girando e pergunte onde dá para puxar, cortar ou suavizar. Peça que todos abram o Blender e o próprio arquivo, deixando a imagem de referência ao lado.

Conteúdo novo guiado (15 min): no projetor, entre no Modo de Edição com Tab e mostre as três bolinhas (vértice, aresta, face). Demonstre uma por vez, devagar: selecione uma face e aperte E para extrudar um braço; aperte I para criar um detalhe afundado; use Ctrl+R para mostrar o anel amarelo do loop cut e adicione um corte; selecione uma quina e aperte Ctrl+B para chanfrar, girando a roda para arredondar. Diga o nome e o atalho em voz alta a cada passo.

Mão na massa (25 min): cada aluno trabalha no próprio modelo seguindo a referência. A meta mínima é usar pelo menos duas das quatro ferramentas e deixar a forma reconhecível. Circule pela sala, sentando ao lado de quem travar. Reforce o Ctrl+Z como amigo: errar faz parte. Quem avançar rápido recebe o desafio de usar as quatro ferramentas.

Desafio e compartilhar (10 min): proponha que cada um adicione um último detalhe com inset ou bevel. Encerre com uma rodada: dois ou três alunos giram o modelo no projetor e contam qual ferramenta usaram para cada parte.

## Como explicar de forma clara (linguagem para a idade)

Use comparações com massinha de modelar. Extrudar é "puxar massinha para fora" para criar um braço ou um chifre. Inset é "desenhar uma moldura por dentro da face" para fazer uma janela ou um botão. Loop cut é "dar mais dobras no papel" para conseguir dobrar onde você quer. Bevel é "lixar a quina" para o objeto não ficar cortante. Diga sempre o atalho junto com o nome, como uma musiquinha: "E de esticar, I de inset, Ctrl+R de corte, Ctrl+B de bevel". Lembre que ninguém acerta de primeira e que Ctrl+Z é o melhor amigo do modelador.

## Erros comuns e como ajudar

O erro mais frequente é tentar usar as ferramentas no Modo Objeto; se nada acontecer, lembre o aluno de apertar Tab para entrar no Modo de Edição. Outro tropeço é nada estar selecionado: peça para clicar numa face antes de apertar E ou I. No loop cut, muitos esquecem que precisam clicar duas vezes (uma para fixar o corte, outra para posicionar) e acabam com o corte fora do lugar; ensine o clique com o botão direito para deixar no centro. No bevel, é comum arrastar demais e bagunçar a malha; mostre que dá para girar a roda para controlar os segmentos e usar Ctrl+Z. Por fim, alguns extrudam várias vezes sem querer (apertando E repetido) e criam faces sobrepostas; oriente a confirmar com um clique e a apagar excessos. Tranquilize sempre: experimentar e desfazer faz parte de aprender a modelar.`,
  exercicios: [
    {
      titulo: `Esticando o primeiro braço`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor entrar no Modo de Edição com Tab e selecionar uma face. Garanta que cada aluno consiga extrudar reto apertando E e depois um eixo (Z, X ou Y).`,
      atividade: `Entre no Modo de Edição com Tab, mude para modo Face (tecla 3) e selecione uma face do seu objeto. Aperte E para extrudar, mova o mouse e clique para confirmar. Tente também E e depois Z para puxar reto para cima.`,
      gabarito: `O aluno entra no Modo de Edição, seleciona uma face e cria uma parte nova esticada com o extrude (tecla E). Ele percebe que E mais Z puxa reto no eixo vertical. A forma ganhou um volume novo (um braço, perna, chifre ou similar).`,
    },
    {
      titulo: `Criando um detalhe afundado`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre a combinação clássica: inset (I) para criar a moldura e depois extrude (E) para dentro. Confira que cada aluno seleciona a face certa antes de apertar I.`,
      atividade: `Selecione uma face do seu modelo e aperte I (inset), mova o mouse para criar uma face menor por dentro e clique. Agora aperte E e empurre essa face para dentro, criando um detalhe afundado, como um botão, uma janela ou um olho.`,
      gabarito: `O aluno cria uma face menor com o inset (I) dentro de uma face maior e depois afunda essa face com o extrude (E) para dentro. O resultado é um detalhe recuado reconhecível (botão, janela, olho ou boca) na superfície do modelo.`,
    },
    {
      titulo: `Cortes e suavização`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Ajude com o loop cut: passe o mouse, gire a roda para escolher o número de cortes, clique uma vez e clique com o botão direito para centralizar. Depois mostre o bevel girando a roda para arredondar.`,
      atividade: `Use Ctrl+R (loop cut) para adicionar um ou dois anéis de corte no seu modelo onde ele precisa dobrar ou ganhar detalhe. Depois selecione uma quina dura e aperte Ctrl+B (bevel), girando a roda do mouse para arredondá-la. Compare como o objeto fica menos "cortante".`,
      gabarito: `O aluno adiciona pelo menos um loop cut (Ctrl+R) na posição que quer e chanfra uma quina com o bevel (Ctrl+B), usando a roda do mouse para aumentar os segmentos. As quinas ficam mais suaves e o modelo tem mais divisões para detalhar.`,
    },
    {
      titulo: `Modelagem em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno comanda em voz alta enquanto o outro executa no próprio modelo, depois trocam. Incentive o uso correto dos nomes das ferramentas e atalhos.`,
      atividade: `Em dupla, um colega dita um passo de modelagem em voz alta ("extrude essa face", "dá um inset aqui", "chanfra essa quina") e o outro executa no próprio modelo. Façam três passos cada e depois troquem de papel. Usem os nomes certos das ferramentas.`,
      gabarito: `Cada aluno executa corretamente os passos ditados pelo colega, usando extrude, inset, loop cut ou bevel com os atalhos certos. A dupla demonstra que entende o nome e a função de cada ferramenta ao comandar e ao executar.`,
    },
    {
      titulo: `Da ideia à forma reconhecível`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno olhe a própria referência e dê o passo que falta para o modelo "ficar reconhecível". Ao final, conduza uma roda curta com dois ou três modelos girando no projetor.`,
      atividade: `Olhando sua imagem de referência, escolha a parte mais importante que ainda falta e construa-a usando ao menos duas das quatro ferramentas (extrude, inset, loop cut, bevel). A meta é deixar o objeto reconhecível. Depois gire o modelo e confira de todos os ângulos.`,
      gabarito: `O modelo do aluno está visivelmente mais próximo da referência, com a forma reconhecível e pelo menos um detalhe novo feito com duas ou mais das quatro ferramentas. O aluno consegue apontar qual ferramenta usou em cada parte ao girar o modelo.`,
    },
  ],
};
