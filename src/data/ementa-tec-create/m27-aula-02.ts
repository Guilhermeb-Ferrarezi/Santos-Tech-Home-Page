import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando Itens e Cenário",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Transformar os esboços da aula anterior em modelos 3D de verdade, partindo do blocking e usando extrude, insert edge loop e bevel para dar forma aos novos itens e começar a montar paredes, plataformas e props do cenário com proporção e encaixe corretos.`,
  descricao: `Na aula passada cada aluno planejou os novos itens e desenhou os esboços de referência. Agora chega a parte que todo mundo estava esperando: colocar a mão na massa e modelar de verdade no Maya. Esta é a aula mais prática do mês. O aluno sai de um desenho no papel e de um cubo de referência e termina com formas 3D reconhecíveis na tela, prontas para receber acabamento nas próximas aulas.

A técnica central de hoje é o blocking. Blocking quer dizer começar pelas formas grandes e simples, usando blocos básicos (cubos, cilindros, esferas) para montar a silhueta do objeto antes de pensar em qualquer detalhe. É como montar com peças de LEGO: primeiro o esqueleto, depois os detalhes. A partir do blocking, apresentamos três ferramentas que dão poder de verdade à modelagem: o extrude, que puxa faces para fora ou para dentro criando volume novo; o insert edge loop, que adiciona linhas de corte para ter mais controle sobre a forma; e o bevel, que arredonda ou chanfra as quinas para o objeto não parecer um bloco duro e artificial.

Além dos itens soltos, hoje os alunos também começam a montar elementos do cenário: paredes, plataformas e props (os objetos de ambientação). Aqui entra um conceito importante que é a proporção e o encaixe entre as peças. Uma parede precisa ter altura coerente com o personagem, uma plataforma precisa ser larga o bastante para o boneco pisar, e duas peças que se encostam precisam encaixar sem buracos nem sobreposição estranha. O cubo de referência criado na aula anterior continua sendo a régua que garante tudo isso.

Para o professor iniciante, fique tranquilo: você não precisa ser artista 3D. Vamos usar pouquíssimas ferramentas, sempre as mesmas, e repetir o caminho dos menus em voz alta. O segredo é o ritmo: mostrar um passo, deixar o aluno repetir, conferir, e só então avançar. Se ao final cada aluno tiver pelo menos um item modelado a partir do blocking e uma peça de cenário no lugar, a aula foi um sucesso.`,
  materiais: [
    `Computadores com o Maya instalado e já aberto na cena salva da aula anterior, com o cubo de referência na escala do personagem do Roblox`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique, cada menu e cada ferramenta na tela grande`,
    `Os esboços de referência que os alunos desenharam na Aula 1 (frente e lado), em cima da mesa ao lado do teclado`,
    `Arquivo de exemplo do professor: uma cena do Maya com um item simples já modelado por blocking (por exemplo, um barril ou uma caixa) para mostrar o resultado esperado`,
    `Folha impressa com o passo a passo das três ferramentas do dia: extrude, insert edge loop e bevel, com o caminho do menu de cada uma`,
    `Mouse com botão de rolagem (scroll) em cada máquina, pois ele facilita muito orbitar e dar zoom na cena do Maya`,
  ],
  conceitosChave: [
    `Blocking — etapa de começar a modelagem pelas formas grandes e simples, montando a silhueta do objeto com blocos básicos antes dos detalhes.`,
    `Face — cada superfície plana de um modelo 3D (um cubo tem seis faces); é nela que aplicamos o extrude.`,
    `Aresta (edge) — a linha que une dois vértices e forma a borda de uma face; o bevel age sobre as arestas.`,
    `Extrude — ferramenta que puxa uma face para fora ou para dentro, criando volume novo a partir do que já existe.`,
    `Insert Edge Loop — ferramenta que adiciona uma linha de corte ao redor do modelo, dando mais pontos de controle para moldar a forma.`,
    `Bevel — ferramenta que arredonda ou chanfra uma quina, tirando o aspecto de bloco duro e deixando o objeto mais natural.`,
    `Encaixe — quando duas peças do cenário se tocam sem deixar buracos nem se sobrepor, mantendo o mundo coerente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai conduzir a aula mais prática do mês usando apenas três ferramentas, sempre as mesmas: extrude, insert edge loop e bevel. Antes da aula, abra o Maya e treine cada uma com um cubo. Crie um cubo em "Create" maior que "Polygon Primitives" maior que "Cube". Aperte a tecla "3" para ver as formas mais suaves e a tecla "1" para voltar ao normal. Para selecionar faces, clique com o botão direito sobre o cubo e escolha "Face"; para selecionar arestas, escolha "Edge". O extrude fica em "Edit Mesh" maior que "Extrude" (atalho "Ctrl+E"). O insert edge loop fica em "Mesh Tools" maior que "Insert Edge Loop". O bevel fica em "Edit Mesh" maior que "Bevel" (atalho "Ctrl+B"). Para orbitar a câmera, segure "Alt" e arraste com o botão esquerdo; para dar zoom, use o scroll do mouse. Treine isso três vezes e você estará pronto.

## Passo a passo da aula (ritmo 10/15/25/10, com o código exato)

10 min, aquecimento e revisão: Abram a cena salva da Aula 1. Peça que cada aluno coloque o esboço ao lado do teclado. Reforce a frase do dia: "Primeiro a forma grande, depois os detalhes." Lembre que no Maya não digitamos código como em Python; aqui o "código" são os caminhos de menu e os atalhos de teclado, então vamos repeti-los em voz alta.

15 min, conteúdo novo guiado: No seu Maya projetado, faça o blocking de um item simples. 1) Crie um cubo: "Create" maior que "Polygon Primitives" maior que "Cube". 2) Clique com o botão direito no cubo e escolha "Face". 3) Selecione a face de cima e use "Edit Mesh" maior que "Extrude" (ou "Ctrl+E"); arraste a setinha para cima para puxar volume. 4) Mostre o insert edge loop: "Mesh Tools" maior que "Insert Edge Loop" e clique no meio do modelo para criar uma linha de corte. Aperte "Enter" para confirmar a ferramenta. 5) Arredonde uma quina: clique com o botão direito e escolha "Edge", selecione uma aresta e use "Edit Mesh" maior que "Bevel" (ou "Ctrl+B"). Diga em voz alta cada caminho enquanto clica.

25 min, mão na massa: Agora é a vez deles, olhando o próprio esboço. Peça que cada aluno: 1) crie o bloco base do seu item com "Create" maior que "Polygon Primitives" e o primitivo que combinar com o desenho; 2) ajuste a escala comparando com o cubo de referência; 3) use o extrude ("Ctrl+E") pelo menos uma vez para criar volume; 4) use o insert edge loop para ganhar controle; 5) use o bevel ("Ctrl+B") para tirar o aspecto de bloco duro de pelo menos uma quina; 6) crie uma peça de cenário (uma parede ou uma plataforma) e encoste-a em outra, conferindo o encaixe. Circule pela sala confirando proporção e encaixe.

10 min, desafio e compartilhar: Lance o desafio de duplicar uma peça com "Ctrl+D" e montar duas plataformas encaixadas formando um degrau, sem buracos entre elas. Peça que dois ou três alunos mostrem o item modelado e expliquem qual ferramenta usaram em cada parte. Termine pedindo que todos salvem com "Ctrl+S".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que o blocking é "montar o boneco de LEGO antes de pintar". Compare o extrude com "puxar uma massa de modelar para fora". Diga que o insert edge loop é "desenhar uma linha extra para poder dobrar o objeto naquele ponto". Explique o bevel como "lixar a quina para não ficar pontuda". Para o encaixe, use a imagem de "duas peças de quebra-cabeça que se juntam sem sobrar espaço". Sempre nomeie o caminho do menu em voz alta enquanto clica e repita os atalhos: "Extrude é Ctrl mais E; bevel é Ctrl mais B." Elogie cada forma que aparecer na tela.

## Erros comuns e como ajudar

O erro mais comum é pular o blocking e tentar fazer detalhes logo de cara; reforce sempre começar pela forma grande. Muitos alunos esquecem de selecionar a face ou a aresta antes de usar a ferramenta; lembre o clique com o botão direito para escolher "Face" ou "Edge". Outro tropeço é arrastar o extrude sem perceber e criar faces duplicadas; oriente a apertar "Ctrl+Z" para desfazer e tentar de novo com calma. No insert edge loop e em outras ferramentas, é comum a ferramenta continuar ligada; lembre de apertar "Enter" para confirmar e "Q" para voltar ao modo de seleção. Quando peças de cenário ficam com buraco entre elas, peça que orbitem a câmera (segurando "Alt") para ver de outro ângulo e usem o cubo de referência como medida. Alunos que terminam rápido podem dar bevel em mais quinas ou começar um segundo item.`,
  exercicios: [
    {
      titulo: `Aquecendo as ferramentas no cubo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre cada caminho no projetor antes. Reforce a ordem: criar o cubo, selecionar a face ou a aresta com o botão direito, e só então usar a ferramenta. Passe de mesa em mesa confirmando que cada aluno conseguiu usar as três ferramentas pelo menos uma vez.`,
      atividade: `Crie um cubo em "Create" maior que "Polygon Primitives" maior que "Cube". Clique com o botão direito, escolha "Face", selecione a face de cima e use "Edit Mesh" maior que "Extrude" para puxar um volume. Depois use "Mesh Tools" maior que "Insert Edge Loop" para cortar o meio. Por fim, clique com o botão direito, escolha "Edge", selecione uma quina e use "Edit Mesh" maior que "Bevel".`,
      gabarito: `O cubo é criado em "Create" maior que "Polygon Primitives" maior que "Cube". O extrude é aplicado a uma face selecionada (botão direito maior que "Face") por "Edit Mesh" maior que "Extrude" ou "Ctrl+E", puxando volume. O insert edge loop é feito por "Mesh Tools" maior que "Insert Edge Loop", criando uma linha de corte e confirmando com "Enter". O bevel é aplicado a uma aresta selecionada (botão direito maior que "Edge") por "Edit Mesh" maior que "Bevel" ou "Ctrl+B", arredondando a quina.`,
    },
    {
      titulo: `Blocking do meu item`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno deixe o esboço da Aula 1 ao lado do teclado. Reforce que blocking é só a forma grande, sem detalhes. Caminhe pela sala lembrando de comparar o tamanho do bloco com o cubo de referência antes de seguir em frente.`,
      atividade: `Olhe o seu esboço e crie o bloco base do seu item com "Create" maior que "Polygon Primitives", escolhendo o primitivo que mais combina com o desenho (cubo, cilindro ou esfera). Ajuste a escala comparando com o cubo de referência. Não faça detalhes ainda, apenas a silhueta.`,
      gabarito: `Um bom blocking apresenta a silhueta correta do item usando um ou poucos primitivos, com a escala coerente em relação ao cubo de referência (por exemplo, um barril com cerca de metade da altura do cubo). Não deve haver detalhes finos nesta etapa; o objetivo é só a forma grande reconhecível, fiel ao esboço.`,
    },
    {
      titulo: `Dando volume com extrude e bevel`,
      tipo: `desafio individual`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce a sequência: selecionar a face com o botão direito antes do extrude, e a aresta antes do bevel. Lembre os alunos de usar "Ctrl+Z" se algo der errado. Confira se cada um usou o extrude e o bevel pelo menos uma vez no próprio item.`,
      atividade: `No seu item do blocking, use o "Edit Mesh" maior que "Extrude" (ou "Ctrl+E") para criar pelo menos um volume novo (por exemplo, a tampa de um barril ou a aba de uma placa). Depois selecione uma quina (botão direito maior que "Edge") e use "Edit Mesh" maior que "Bevel" (ou "Ctrl+B") para arredondá-la.`,
      gabarito: `O extrude deve ter sido aplicado a uma face selecionada, gerando um volume novo coerente com o item (por exemplo, a borda da tampa do barril). O bevel deve ter sido aplicado a pelo menos uma aresta, deixando a quina arredondada e tirando o aspecto de bloco duro. A forma final continua reconhecível e fiel ao esboço, agora com mais volume e quinas suaves.`,
    },
    {
      titulo: `Montando o cenário com encaixe`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas para um conferir o trabalho do outro. Oriente a usar o cubo de referência para medir a altura das paredes e a largura das plataformas. Peça que orbitem a câmera (segurando "Alt") para checar se há buracos entre as peças.`,
      atividade: `Em dupla, criem uma parede e uma plataforma a partir de cubos, ajustando a escala pelo cubo de referência (a parede um pouco mais alta que o personagem e a plataforma larga o bastante para o boneco pisar). Encostem as duas peças e confiram, orbitando a câmera, se o encaixe ficou sem buracos.`,
      gabarito: `A parede deve ter altura coerente com o cubo de referência (um pouco mais alta que o personagem) e a plataforma deve ser larga o bastante para o boneco pisar. As peças encostadas precisam encaixar sem buracos nem sobreposição estranha, o que se confirma orbitando a câmera com "Alt" e olhando de vários ângulos. A escala usada é sempre medida pelo cubo de referência.`,
    },
    {
      titulo: `Degrau duplicado e apresentação`,
      tipo: `apresentação curta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como duplicar uma peça com "Ctrl+D" e reposicioná-la. Peça que dois ou três alunos apresentem o item modelado e digam qual ferramenta usaram em cada parte. Encerre pedindo que todos salvem a cena com "Ctrl+S".`,
      atividade: `Duplique uma das suas plataformas com "Ctrl+D" e mova a cópia para formar um degrau encaixado na primeira, sem buracos. Depois apresente em meio minuto o seu item: mostre a forma e diga onde usou o extrude, o insert edge loop e o bevel. Salve a cena com "Ctrl+S".`,
      gabarito: `A duplicata é feita com "Ctrl+D" e reposicionada para formar um degrau encaixado sem buracos na peça original. Uma boa apresentação aponta onde cada ferramenta foi usada, por exemplo: "usei extrude para puxar a tampa, insert edge loop para cortar o meio e bevel para arredondar as quinas". Salvar com "Ctrl+S" ao final confirma que o trabalho foi guardado.`,
    },
  ],
};
