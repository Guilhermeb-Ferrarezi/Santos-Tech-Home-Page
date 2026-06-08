import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Da Ideia ao Bloco 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Iniciar a modelagem de um asset de jogo pela técnica de blocagem, partindo de formas básicas e usando extrudar, inserir e bevel para esculpir o objeto com proporções corretas para o Unity.`,
  descricao: `Nesta aula o aluno dá o primeiro passo prático rumo ao entregável do mês: um asset pronto para o Unity. Em vez de tentar modelar um objeto detalhado de uma vez só, ele aprende a técnica profissional da blocagem (em inglês, blockout). A ideia é simples e poderosa: começar com formas básicas, como cubos e cilindros, e moldá-las aos poucos até que o conjunto leia claramente como o objeto desejado, ainda sem se preocupar com detalhes finos. É exatamente assim que estúdios de games trabalham antes de refinar a malha.

A blocagem resolve o maior medo de quem começa a modelar: a folha em branco. Quando o aluno entende que uma espada nasce de um cubo esticado, que um cano vem de um cilindro e que uma caixa de tesouro parte de um simples bloco, a modelagem deixa de ser intimidante e vira um quebra-cabeça de formas. O foco aqui é a silhueta e a proporção, não o capricho. Um bom asset de jogo é, antes de tudo, reconhecível pela sua sombra.

Para esculpir essas formas, o aluno conhece três ferramentas essenciais do modo de edição do Blender: extrudar (Extrude), que puxa uma nova parte a partir de uma face; inserir face (Inset), que cria uma face menor dentro de outra, ótima para criar bordas e recortes; e bevel (chanfro), que arredonda ou corta um canto vivo, deixando o objeto menos artificial e mais agradável à luz do jogo. Com esse trio, é possível construir a maioria dos props de cenário e itens que um jogo precisa.

Ao final, cada aluno terá escolhido um objeto simples (uma arma, um item ou um prop de cenário) e produzido a primeira versão blocada dele, com as proporções pensadas para a escala do Unity. Esse bloco será a base que ele vai refinar nas aulas seguintes do mês, até chegar ao pacote de assets final.`,
  materiais: [
    `Computadores com Blender instalado (versão atual), um por aluno`,
    `Projetor ou tela grande para o professor demonstrar passo a passo`,
    `Arquivo de exemplo blender com três blocagens prontas (espada, barril e bau) para referência`,
    `Folha de referência impressa com a silhueta de 3 objetos para os alunos escolherem`,
    `Mouse com três botoes (essencial para navegar e orbitar no Blender)`,
    `Bloco de notas ou caderno para o aluno rascunhar a ideia do asset antes de modelar`,
  ],
  conceitosChave: [
    `Blocagem (blockout) — primeira versão grosseira do modelo, feita só com formas básicas para acertar silhueta e proporção antes dos detalhes.`,
    `Extrudar (Extrude) — puxa uma face selecionada para fora ou para dentro, criando volume novo a partir da forma existente.`,
    `Inserir face (Inset) — cria uma face menor dentro de uma face existente, sem mudar o contorno, ótima para preparar recortes e bordas.`,
    `Bevel (chanfro) — corta ou arredonda um canto vivo, dividindo-o em vários, deixando a peça mais realista sob a luz.`,
    `Silhueta — o contorno do objeto visto de lado; se a silhueta é reconhecível, o asset funciona no jogo.`,
    `Proporção — relação de tamanho entre as partes do objeto e entre o objeto e o personagem do jogo.`,
    `Modo de Edição (Edit Mode) — modo do Blender onde editamos vértices, arestas e faces da malha, ativado com a tecla Tab.`,
  ],
  treinamento: `## O que o professor precisa saber

A blocagem é a técnica em que começamos um modelo 3D com formas simples e vamos ajustando proporção e silhueta antes de qualquer detalhe. Você não precisa ser artista: precisa apenas dominar quatro ações no Blender. Selecionar partes da malha (vértices, arestas, faces), extrudar (E), inserir face (I) e dar bevel (Ctrl B). Tudo acontece no Modo de Edição, que você ativa com a tecla Tab quando um objeto está selecionado. Antes da aula, abra o Blender, crie um cubo (menu Add, depois Mesh, depois Cube) e treine o ciclo: Tab para entrar na edição, tecla 3 para o modo de seleção de Faces, clicar numa face, E para extrudar, mover o mouse, clicar para confirmar. Faça isso umas cinco vezes até ficar natural. É só isso que a aula exige de você.

Lembre o objetivo do mês: assets prontos para o Unity. Por isso falamos de proporção desde já. Um cubo padrão do Blender tem 2 metros de lado, e no Unity 1 unidade é 1 metro. Não precisa decorar números: a regra prática é comparar o objeto com a altura de uma pessoa (cerca de 1,8 m). Uma espada é um pouco menor que isso; um barril vai pela cintura.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento. Abra o arquivo de exemplo no projetor e mostre as três blocagens prontas (espada, barril, baú). Pergunte: que forma básica deu origem a cada uma? Conduza para a resposta (cubo esticado, cilindro, cubo). Reforce a ideia: todo objeto começa simples.

15 min, conteúdo novo guiado. No projetor, do zero: Add, Mesh, Cube. Aperte Tab para entrar no Modo de Edição. Aperte 3 para selecionar Faces. Clique na face de cima. Aperte E (Extrude), arraste para cima e clique para confirmar, isso estica o cubo. Agora mostre o Inset: com a face de topo selecionada, aperte I, arraste para dentro e clique, nasce uma face menor. Por fim, o Bevel: aperte Tab para sair, selecione o objeto, entre de novo, aperte 2 para Arestas, selecione uma aresta de canto, aperte Ctrl B, arraste e role o scroll do mouse para somar segmentos, clique para confirmar. Diga em voz alta o nome de cada atalho enquanto faz.

25 min, mão na massa. Cada aluno escolhe um objeto da folha de referência e modela a blocagem. Circule pela sala repetindo os atalhos. Não cobre detalhe: cobre silhueta reconhecível e proporção coerente.

10 min, desafio e compartilhar. Peça que cada aluno deixe a vista de lado (tecla 1 do teclado numérico) e mostre a silhueta. A turma tenta adivinhar o objeto. Se adivinharam, a blocagem está boa.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora do escultor com um bloco de pedra: ninguém começa pelos dedos da estátua, começa tirando os pedaços grandes. Diga que extrudar é puxar massinha de modelar, inset é desenhar um quadrado dentro do quadrado, e bevel é lixar o canto pra não ficar afiado. Repita que o jogo não vê os vértices, vê a sombra: se a sombra parece uma espada, ganhamos. Evite jargão sozinho; sempre junte o nome técnico com o gesto.

## Erros comuns e como ajudar

O aluno extruda sem querer e gera faces duplicadas no mesmo lugar: ensine a apertar Esc ou clicar com o botão direito para cancelar antes de confirmar. Outro erro é tentar mover a câmera achando que está movendo o objeto: lembre que orbitar é segurar o botão do meio do mouse, sem clicar em nada. Muitos esquecem de entrar no Modo de Edição e apertam E no Modo de Objeto, onde E não extruda: confira sempre se a tecla Tab foi apertada. Por fim, alguns exageram nos detalhes cedo demais; redirecione para a silhueta e a proporção, que é o foco desta aula.`,
  exercicios: [
    {
      titulo: `Caça às formas básicas`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Use o arquivo de exemplo ou imagens no projetor. O objetivo é treinar o olhar para enxergar a forma básica escondida dentro de objetos do dia a dia, base de toda blocagem.`,
      atividade: `Olhe os objetos mostrados na tela (um barril, uma espada, um baú, uma poção). Para cada um, diga em voz alta qual forma básica do Blender (cubo, cilindro ou esfera) seria o ponto de partida da blocagem.`,
      gabarito: `Barril: cilindro. Espada: cubo esticado (para a lâmina). Baú: cubo. Poção: cilindro ou esfera para o corpo do frasco, mais um cilindro fino para o gargalo. Qualquer resposta bem justificada pela silhueta é válida.`,
    },
    {
      titulo: `Esticando o primeiro bloco`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos consigam entrar no Modo de Edição com Tab e selecionar faces com a tecla 3. Este é o gesto fundamental que se repete o mês todo.`,
      atividade: `Crie um cubo (Add, Mesh, Cube). Entre no Modo de Edição com Tab. Selecione a face de cima e use Extrudar para esticar o cubo até ele ficar alto e fino, como o cabo de um objeto.`,
      gabarito: `Passos esperados: 1. Add > Mesh > Cube. 2. Tab para entrar no Edit Mode. 3. Tecla 3 para modo Faces. 4. Clicar na face superior. 5. Tecla E, arrastar o mouse para cima, clicar para confirmar. Resultado: um bloco visivelmente mais alto que largo.`,
    },
    {
      titulo: `Inset e bevel no topo`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Aqui o aluno combina duas ferramentas novas na mesma peça. Circule lembrando que o Inset (I) não muda o contorno externo, so cria uma face interna.`,
      atividade: `No mesmo bloco da atividade anterior, selecione a face de cima e use Inserir Face (I) para criar uma face menor dentro dela. Depois selecione as arestas de um canto e aplique Bevel (Ctrl B) para arredondá-lo.`,
      gabarito: `Passos esperados: 1. Selecionar a face de topo. 2. Tecla I, arrastar para dentro, clicar para confirmar (surge uma face menor centralizada). 3. Tecla 2 para modo Arestas. 4. Selecionar uma aresta de canto. 5. Ctrl B, arrastar e rolar o scroll para 2 ou 3 segmentos, clicar para confirmar. Resultado: topo com recorte interno e canto arredondado.`,
    },
    {
      titulo: `Blocando meu asset`,
      tipo: `Projeto prático`,
      tempo: `20 min`,
      guiaProfessor: `Este é o coração da aula e o começo do entregável do mês. Cobre silhueta reconhecível e proporção coerente, não detalhes. Lembre a referência de escala: comparar com a altura de uma pessoa (cerca de 1,8 m).`,
      atividade: `Escolha um objeto da folha de referência (arma, item ou prop de cenário). Usando apenas Extrudar, Inserir Face e Bevel a partir de uma forma básica, modele a blocagem dele com proporções pensadas para o jogo.`,
      gabarito: `Considera-se concluído quando: a peça parte de uma forma básica; usa pelo menos uma vez cada ferramenta (E, I, Ctrl B); a silhueta vista de lado é reconhecível como o objeto escolhido; e a proporção é coerente (ex.: uma espada cabe na mão e é menor que uma pessoa). Detalhes finos não são exigidos nesta etapa.`,
    },
    {
      titulo: `Adivinha pela sombra`,
      tipo: `Desafio e compartilhar`,
      tempo: `10 min`,
      guiaProfessor: `Encerre validando o conceito central: a silhueta. Esta dinâmica torna visível, de forma divertida, se a blocagem está boa o suficiente para o jogo.`,
      atividade: `Coloque sua blocagem na vista de lado (tecla 1 do teclado numérico). Mostre a silhueta para a turma e deixe os colegas tentarem adivinhar qual é o objeto. Depois explique uma decisão de proporção que você tomou.`,
      gabarito: `Sucesso quando a maioria da turma identifica o objeto apenas pela silhueta, sinal de que a forma está clara. Resposta esperada do aluno na explicação: cita uma proporção concreta (ex.: deixei a lâmina três vezes maior que o cabo) e relaciona com a escala do jogo.`,
    },
  ],
};
