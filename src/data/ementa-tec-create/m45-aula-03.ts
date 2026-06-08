import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Construindo o Personagem 3D",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Bloquear a base de um personagem 3D no Maya usando primitivas e simetria, definindo proporções e silhueta a partir de referências.`,
  descricao: `Modelar um personagem começa muito antes de qualquer detalhe. Começa com a forma geral, ou seja, com a silhueta e as proporções que fazem o público reconhecer quem é aquele personagem mesmo à distância. Nesta aula o aluno aprende a técnica de blocking: montar o corpo com formas primitivas simples (cilindros, esferas e cubos) que representam cabeça, tronco, braços e pernas. Só depois de a base estar correta é que se pensa em detalhar. Essa ordem evita o erro clássico de detalhar cedo demais um modelo que tem proporções erradas.

O segredo do blocking de personagens é a referência. Antes de tocar no mouse, o aluno define quem é o personagem, em quantas cabeças de altura ele se encaixa (um herói realista costuma ter cerca de sete cabeças e meia, um personagem estilizado pode ter de três a cinco) e qual a forma dominante da silhueta. O Claude entra aqui como assistente de planejamento: ajuda o aluno a transformar uma ideia vaga em uma ficha de personagem clara, com proporções, palavras-chave de estilo e uma lista de primitivas necessárias.

A simetria é a grande aliada da etapa. No Maya, modelamos apenas metade do corpo e deixamos o software espelhar a outra metade em tempo real. Isso dobra a velocidade e garante que os dois lados fiquem idênticos. O aluno vai usar o Symmetry do viewport e também entender o Mirror Geometry para consolidar o modelo no fim. Tudo continua no nível de blocking: nada de músculos ou rugas, apenas volumes limpos que comunicam a pose e o tamanho de cada parte.

Ao final, cada aluno tem um boneco de primitivas que já parece o personagem planejado, com proporções coerentes e uma silhueta legível. Esse boneco é a fundação das próximas aulas, quando ele será refinado, ganhará malha contínua e, mais adiante, materiais e texturas. O foco aqui é disciplina de forma: pensar antes de modelar e respeitar a ordem do grosso ao fino.`,
  materiais: [
    `Computadores com Autodesk Maya instalado (um por aluno)`,
    `Projetor para o professor demonstrar o blocking ao vivo`,
    `Imagens de referência de personagens (folha de proporções em cabeças) impressas ou em tela`,
    `Arquivo de exemplo personagem-blocking-exemplo.mb com um boneco já bloqueado`,
    `Acesso ao Claude para planejar a ficha do personagem`,
    `Folha de planejamento de personagem (impressa) para anotar proporções e estilo`,
  ],
  conceitosChave: [
    `Blocking — etapa inicial em que se monta o personagem com formas simples para acertar a forma geral antes dos detalhes.`,
    `Proporção em cabeças — medida que usa o tamanho da cabeça como unidade para definir a altura total do corpo.`,
    `Silhueta — o contorno do personagem visto como sombra; uma boa silhueta torna o personagem reconhecível sem detalhes.`,
    `Primitiva — forma 3D básica pronta do Maya, como cubo, esfera ou cilindro, usada como ponto de partida.`,
    `Simetria — recurso que espelha automaticamente um lado do modelo no outro, garantindo que fiquem idênticos.`,
    `Mirror Geometry — comando que duplica e espelha a metade modelada, criando o corpo inteiro de forma definitiva.`,
    `Referência — imagem ou ficha que guia o modelo, evitando que o aluno invente proporções sem critério.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser escultor digital para dar esta aula. O objetivo é ensinar disciplina de forma: primeiro a base, depois o detalhe. Tudo gira em torno de três ideias simples. Primeira: proporção em cabeças, que usa a altura da cabeça como régua para medir o corpo. Segunda: silhueta, o contorno que precisa ser reconhecível. Terceira: simetria, modelar só metade e deixar o Maya espelhar. No Maya, as primitivas ficam no menu Create, depois Polygon Primitives (Cube, Sphere, Cylinder). Mover, girar e escalar usam as teclas W, E e R. A simetria de modelagem fica no canto superior do viewport, em Symmetry, onde você escolhe Object X. Pratique montar um boneco simples uma vez antes da aula para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre três personagens famosos no projetor e pergunte quantas cabeças de altura cada um parece ter. Faça a turma estimar em voz alta. Explique que personagem estilizado costuma ter de três a cinco cabeças e personagem realista cerca de sete e meia. Conecte com o entregável do mês: assets para a Unreal.

Conteúdo novo guiado (15 min): planeje um personagem com o Claude na sua frente. Use um prompt como: Você é meu assistente de design. Quero um personagem herói estilizado com cinco cabeças de altura. Liste as proporções parte por parte e quais primitivas do Maya eu uso em cada parte do corpo. Mostre a resposta e abra o Maya. Crie a primeira primitiva por Create, depois Polygon Primitives, depois Cube. No painel Channel Box ajuste a altura digitando o número, por exemplo Scale Y igual a 2. Demonstre W para mover, E para girar e R para escalar. Ative a simetria em Symmetry, escolhendo Object X, e mostre que ao mover um vértice o outro lado acompanha.

Mão na massa (25 min): cada aluno bloqueia seu personagem. Sequência sugerida: esfera para a cabeça; cilindro para o pescoço; cubo alongado para o tronco; cilindros para braços e pernas; esferas pequenas para ombros e junções. Reforce: só metade do corpo, com simetria ligada. Eles ajustam posição e escala até a silhueta bater com a ficha planejada com o Claude. Circule pela sala conferindo proporções em cabeças. No fim, quem terminou usa Mesh, depois Mirror, com Mirror Direction em X negativo, para gerar o corpo inteiro.

Desafio e compartilhar (10 min): peça para cada aluno apertar a tecla de visão em wireframe e olhar só a silhueta do próprio boneco. Pergunte: dá para reconhecer o personagem só pela sombra? Dois ou três alunos mostram a tela e explicam uma decisão de proporção que tomaram.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do boneco de palitos e bolinhas: antes de pintar e detalhar, todo personagem é só um conjunto de formas grandes. Diga que silhueta é como a sombra na parede: se dá para saber quem é só pela sombra, a forma está boa. Compare a simetria com dobrar uma folha ao meio e recortar: o lado de baixo sai igual ao de cima sozinho. E repita a frase guia da aula: a gente trabalha do grosso ao fino, primeiro os blocos, depois os detalhes. Evite termos como topologia ou loop de aresta nesta aula, pois eles entram mais adiante.

## Erros comuns e como ajudar

O erro mais comum é detalhar cedo demais, querendo dedos e rosto antes de o corpo inteiro existir. Lembre que hoje só vale bloco. Outro erro é esquecer de ligar a simetria e modelar os dois lados na mão, o que gera diferenças; mostre o botão Symmetry e peça para religar. Muitos alunos erram a proporção porque não olham a referência; mande comparar o boneco com a ficha do Claude medindo em cabeças. Se um aluno congelou sem saber por onde começar, faça-o criar só a cabeça e o tronco e o restante flui. Por fim, se o Mirror duplicar errado, basta desfazer com Ctrl mais Z e conferir se a direção do espelho era X negativo.`,
  exercicios: [
    {
      titulo: `Quantas cabeças tem este personagem?`,
      tipo: `Observação e estimativa`,
      tempo: `7 minutos`,
      guiaProfessor: `Projete três a quatro personagens. Peça aos alunos que estimem a altura de cada um em cabeças, contando quantas cabeças cabem do topo ao chão. Aceite faixas, não números exatos. O objetivo é treinar o olhar para proporção.`,
      atividade: `Olhe as imagens projetadas e anote, para cada personagem, em quantas cabeças de altura ele parece se encaixar. Classifique cada um como estilizado (três a cinco cabeças) ou realista (cerca de sete e meia).`,
      gabarito: `Respostas aceitas variam por imagem. Exemplos: mascote infantil com cabeça grande, de três a quatro cabeças, estilizado; herói de ação realista, cerca de sete e meia, realista; personagem adolescente estilizado, cerca de cinco a seis, estilizado. O acerto está em justificar a faixa contando cabeças, não em um número único.`,
    },
    {
      titulo: `Ficha de personagem com o Claude`,
      tipo: `Planejamento com IA`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada aluno pede ao Claude uma ficha de proporções para o personagem que vai modelar. Verifique se a resposta lista as partes do corpo, a quantidade de cabeças e as primitivas sugeridas. Oriente a refinar o prompt se vier vago.`,
      atividade: `Escreva ao Claude um pedido para planejar seu personagem, informando estilo e altura desejada em cabeças. Peça a lista de proporções parte por parte e qual primitiva do Maya usar em cada uma. Anote o resultado na folha de planejamento.`,
      gabarito: `Exemplo de prompt: Você é meu assistente de design de personagem. Quero um guerreiro estilizado com cinco cabeças de altura. Liste as proporções parte por parte (cabeça, pescoço, tronco, braços, pernas) e diga qual primitiva do Maya usar em cada parte. A ficha esperada associa esfera à cabeça, cilindro ao pescoço, cubo alongado ao tronco e cilindros a braços e pernas, com a soma das alturas batendo nas cinco cabeças pedidas.`,
    },
    {
      titulo: `Primeira primitiva com simetria ligada`,
      tipo: `Prática guiada no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza passo a passo a criação da cabeça e a ativação da simetria. Confira no viewport de cada aluno se o indicador de Symmetry mostra Object X ativo. Esta é a base técnica para todo o blocking.`,
      atividade: `No Maya, crie uma esfera pela cabeça usando Create, depois Polygon Primitives, depois Sphere. Posicione no alto da cena. Ative a simetria no topo do viewport em Symmetry, escolhendo Object X. Mova um vértice e confirme que o lado oposto acompanha.`,
      gabarito: `Passos corretos: 1) Create, Polygon Primitives, Sphere; 2) tecla W para mover a esfera para o topo; 3) no menu Symmetry do viewport selecionar Object X; 4) entrar no modo de vértices com botão direito segurado e escolher Vertex; 5) arrastar um vértice e observar o vértice simétrico se mover junto. Resultado esperado: simetria ativa e espelhamento visível em tempo real.`,
    },
    {
      titulo: `Bloqueando o corpo inteiro`,
      tipo: `Produção no Maya`,
      tempo: `18 minutos`,
      guiaProfessor: `Acompanhe a montagem completa do boneco usando primitivas. Reforce que só a metade é modelada, com simetria ligada, e que tudo deve seguir a ficha planejada. Cobre proporção em cabeças medindo na tela.`,
      atividade: `Monte a base do personagem com primitivas: esfera para a cabeça, cilindro para o pescoço, cubo alongado para o tronco, cilindros para braços e pernas e esferas pequenas para ombros e junções. Ajuste posição com W, rotação com E e escala com R até a silhueta combinar com sua ficha.`,
      gabarito: `Modelo esperado: conjunto de primitivas posicionadas de modo que a altura total corresponda ao número de cabeças planejado. Cabeça no topo, pescoço curto, tronco como bloco central, braços e pernas como cilindros simétricos, junções marcadas por esferas. Critérios de acerto: proporção coerente com a ficha, silhueta legível e simetria mantida (apenas metade modelada manualmente).`,
    },
    {
      titulo: `Espelhar e testar a silhueta`,
      tipo: `Finalização e análise crítica`,
      tempo: `9 minutos`,
      guiaProfessor: `Oriente o uso do Mirror Geometry para consolidar o corpo inteiro e depois o teste de silhueta em wireframe. Pergunte se o personagem é reconhecível apenas pelo contorno. Use isso para fechar a aula com avaliação da forma.`,
      atividade: `Selecione o corpo modelado e aplique Mesh, depois Mirror, com Mirror Direction em X negativo, para gerar o corpo inteiro. Em seguida, alterne para a visão em wireframe e avalie a silhueta. Anote um ajuste de proporção que você faria.`,
      gabarito: `Sequência correta: 1) selecionar a metade modelada; 2) menu Mesh, opção Mirror; 3) na janela de opções definir Mirror Direction como negativo no eixo X e confirmar com Apply; 4) tecla 4 para entrar em wireframe e observar o contorno. Avaliação esperada: o aluno reconhece o personagem pela silhueta e cita um ajuste concreto, por exemplo aumentar a cabeça para reforçar o estilo ou alongar as pernas para corrigir a proporção em cabeças.`,
    },
  ],
};
