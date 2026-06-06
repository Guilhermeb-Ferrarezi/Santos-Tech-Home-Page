import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Maya na Veia: Pipeline para Unreal",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Maya, navegar com segurança na viewport e configurar a unidade de escala correta para que os modelos cheguem do tamanho certo na Unreal Engine.`,
  descricao: `Esta é a primeira aula do mês em que o aluno troca o Blender pelo Maya, o software de modelagem 3D mais usado em grandes estúdios de cinema e de games. A boa notícia é que ninguém parte do zero: depois de tantos meses modelando, o aluno já entende vértices, arestas, faces, viewport e exportação. O que muda é o ferramental e alguns nomes. Por isso a aula é apresentada como uma migração, e não como um recomeço, mostrando lado a lado o que cada conceito do Blender vira no Maya.

O foco do mês inteiro é modelar pensando na Unreal Engine, e tudo começa pela base: entender a interface e acertar a escala. No Maya, três painéis concentram quase todo o trabalho. A viewport é a janela 3D onde o modelo aparece. O Outliner é a lista de tudo que existe na cena, parecido com a aba de objetos do Blender. O Channel Box mostra os números de posição, rotação e escala do objeto selecionado, o equivalente ao painel de transformação que o aluno já conhece. Dominar esses três painéis e a navegação com o botão Alt resolve a maior parte das tarefas do dia a dia.

A parte mais técnica e mais importante da aula é a unidade de escala. A Unreal Engine trabalha em centímetros: 1 unidade equivale a 1 centímetro. Se o Maya estiver configurado em outra unidade, um personagem pensado para ter 1,80 metro pode chegar gigante ou minúsculo no jogo. Configurar o Maya em centímetros logo no início evita horas de retrabalho mais tarde, na aula de exportação. Acertar a fundação agora é o que garante que o pacote de assets do mês saia profissional.

A aula fecha com um momento de planejamento criativo: usando o Claude como assistente, a turma define o conceito dos assets que vai produzir durante o mês. Pode ser um conjunto de props de um cenário, um personagem com seus acessórios ou um kit de objetos temáticos. O aluno descreve a ideia, o Claude ajuda a organizar a lista de peças e a pensar o estilo, e cada um sai da aula com um pequeno briefing escrito para guiar as próximas semanas.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e aberto, um por aluno`,
    `Projetor ou TV conectada para mostrar a interface do Maya e a navegação`,
    `Acesso ao Claude (navegador ou app) para a definição do conceito dos assets`,
    `Arquivo de exemplo do professor: uma cena .mb simples com um cubo e uma esfera já posicionados`,
    `Mouse de três botões para cada aluno, essencial para navegar no Maya`,
    `Folha ou documento digital de briefing para anotar o conceito dos assets do mês`,
    `Tabela de equivalências Blender para Maya impressa ou projetada como apoio`,
  ],
  conceitosChave: [
    `Viewport — janela 3D onde o modelo aparece e onde o aluno gira, aproxima e move a câmera para ver a cena.`,
    `Outliner — lista hierárquica de tudo que existe na cena, semelhante à aba de objetos do Blender.`,
    `Channel Box — painel à direita que mostra os números de posição, rotação e escala do objeto selecionado.`,
    `Pipeline — o caminho que um asset percorre, do Maya até o Unreal, passando por modelagem, UV, textura e exportação.`,
    `Unidade de escala — a medida que o software usa; o Unreal usa centímetros, e o Maya precisa ficar igual.`,
    `Asset — qualquer peça de conteúdo do jogo, como um modelo, uma textura ou um som, que será usada no Unreal.`,
    `Navegação com Alt — no Maya, segurar Alt e arrastar o mouse gira, move ou aproxima a câmera na viewport.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um expert em Maya para dar esta aula, mas precisa ter feito o percurso uma vez antes. O Maya tem uma cara diferente do Blender, porém os conceitos são os mesmos. Três painéis importam hoje: a viewport (a janela 3D no centro), o Outliner (menu Windows, item Outliner) e o Channel Box (a coluna estreita do lado direito). A navegação usa o mesmo princípio do Blender, mas com a tecla Alt: segure Alt e o botão esquerdo do mouse para girar a câmera, Alt e o botão do meio para mover de lado, e Alt e o botão direito (ou o scroll) para aproximar. A tecla F enquadra o objeto selecionado. A configuração de unidade fica em Windows, Settings/Preferences, Preferences, categoria Settings, no campo Linear, que você muda para centimeter. Faça isso uma vez em casa antes da aula para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): abra a roda perguntando o que a turma lembra do Blender. Liste no quadro vértice, aresta, face, viewport e exportação. Diga a frase guia do dia: o Maya não é um bicho novo, é o Blender com outra roupa. Projete a tabela de equivalências: Blender vira Maya, objeto vira Outliner, painel de transformação vira Channel Box, modo de edição vira clique direito e Vertex.

Conteúdo novo guiado (15 min): abra o Maya no projetor. Mostre a viewport e ensine a navegação com Alt. Pratiquem juntos: Alt e botão esquerdo para girar, Alt e botão do meio para mover, scroll para aproximar, tecla F para enquadrar. Abra o Outliner por Windows, Outliner e mostre a esfera e o cubo do arquivo de exemplo aparecendo na lista. Clique no cubo e mostre, no Channel Box, os campos Translate, Rotate e Scale mudando. Por fim, faça a configuração de escala em Windows, Settings/Preferences, Preferences, Settings, e mude Linear para centimeter, explicando que assim o Unreal recebe o tamanho certo.

Mão na massa (25 min): cada aluno abre o arquivo de exemplo, configura a unidade para centimeter, pratica a navegação até enquadrar o cubo com F, renomeia os objetos no Outliner com clique duplo (por exemplo cubo_base e esfera_topo) e cria um cubo novo pelo menu Create, Polygon Primitives, Cube. Circule conferindo a unidade de cada máquina, pois esse é o ponto crítico.

Desafio e compartilhar (10 min): cada aluno abre o Claude e, com sua ajuda, escreve um briefing curto do conceito dos assets do mês. Uma boa instrução para o Claude é: me ajude a planejar um kit de cinco props 3D com tema de laboratório espacial para um jogo na Unreal, liste as peças e sugira um estilo. Dois ou três alunos compartilham o conceito em voz alta.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da mudança de casa: o aluno já sabe morar em 3D, só trocou de endereço. Os movimentos são os mesmos, mudaram as gavetas de lugar. Para a navegação, diga segura o Alt que a câmera obedece. Para a escala, use uma imagem forte: se o Maya fala em metros e o Unreal escuta em centímetros, seu personagem chega cem vezes maior, do tamanho de um prédio. Para o conceito de pipeline, compare a uma linha de montagem: o asset nasce no Maya e viaja por estações até chegar no jogo.

## Erros comuns e como ajudar

O erro mais comum é esquecer de mudar a unidade para centimeter; passe de máquina em máquina conferindo, pois isso só aparece como problema na aula de exportação. Muitos tentam navegar sem o Alt e movem o objeto por engano; lembre que no Maya a câmera só se mexe com Alt segurado. Alguns não acham o Outliner; mostre de novo o caminho Windows, Outliner. Há quem perca o objeto de vista; ensine a tecla F para reenquadrar. No momento do Claude, alguns pedem algo vago demais; oriente a dar tema, quantidade de peças e estilo para receber uma lista útil.`,
  exercicios: [
    {
      titulo: `Tour pela interface`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Conduza no projetor enquanto os alunos repetem em suas máquinas. Garanta que todos consigam abrir o Outliner e ver o Channel Box reagir ao clique.`,
      atividade: `Abra o arquivo de exemplo, localize a viewport, abra o Outliner por Windows, Outliner e clique no cubo. Observe os campos Translate, Rotate e Scale aparecerem no Channel Box.`,
      gabarito: `O aluno mostra os três painéis: a viewport com o cubo e a esfera, o Outliner listando os dois objetos e o Channel Box exibindo Translate, Rotate e Scale ao selecionar o cubo. Se o Channel Box estiver vazio, nenhum objeto foi selecionado.`,
    },
    {
      titulo: `Navegação com Alt`,
      tipo: `prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Demonstre cada combinação uma vez e deixe a turma repetir. Reforce que sem o Alt a câmera não se move e o aluno acaba movendo o objeto.`,
      atividade: `Pratique girar a câmera com Alt e botão esquerdo, mover com Alt e botão do meio e aproximar com o scroll. Em seguida, selecione a esfera e pressione F para enquadrá-la no centro da tela.`,
      gabarito: `O aluno gira, move e aproxima a câmera sem deslocar os objetos, e ao pressionar F a esfera fica enquadrada e centralizada. Se o objeto se moveu, o aluno arrastou sem segurar Alt e deve desfazer com Ctrl Z.`,
    },
    {
      titulo: `Acertando a escala para o Unreal`,
      tipo: `configuração guiada`,
      tempo: `8 min`,
      guiaProfessor: `Este é o ponto crítico do mês. Confira máquina por máquina se o campo Linear ficou em centimeter, pois o erro só aparece lá na frente.`,
      atividade: `Abra Windows, Settings/Preferences, Preferences, categoria Settings, e mude o campo Linear de Working Units para centimeter. Confirme em Save e explique em uma frase por que essa escala importa para o Unreal.`,
      gabarito: `A unidade Linear fica configurada como centimeter. A justificativa correta é que a Unreal Engine usa 1 unidade igual a 1 centímetro, então manter o Maya em centímetros garante que o modelo chegue no tamanho certo dentro do jogo, sem ficar gigante nem minúsculo.`,
    },
    {
      titulo: `Blender vira Maya`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e entregue a tabela de equivalências. Estimule que liguem cada termo a algo que já usaram no Blender nos anos anteriores.`,
      atividade: `Em dupla, completem uma tabela ligando quatro ações do Blender ao seu equivalente no Maya: ver a lista de objetos, ver posição e escala, girar a câmera e enquadrar o objeto selecionado.`,
      gabarito: `Lista de objetos: aba de objetos no Blender vira Outliner no Maya. Posição e escala: painel de transformação vira Channel Box. Girar a câmera: botão do meio no Blender vira Alt e botão esquerdo no Maya. Enquadrar o objeto: a tecla usada para enquadrar continua sendo a tecla F nos dois programas.`,
    },
    {
      titulo: `Briefing do conceito com o Claude`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Acompanhe os pedidos feitos ao Claude e ajude quem escrever algo vago. O briefing guia o mês inteiro, então precisa sair com tema, lista de peças e estilo.`,
      atividade: `Abra o Claude e peça ajuda para planejar o kit de assets do mês. Dê um tema, diga quantas peças quer e o estilo desejado. Anote no documento de briefing a lista final de peças e uma frase sobre o estilo visual.`,
      gabarito: `O aluno entrega um briefing escrito com tema definido, uma lista de três a seis peças e uma frase descrevendo o estilo visual. Um exemplo válido é um kit de laboratório espacial com mesa, console, cadeira, tubo de ensaio e luminária, em estilo low poly limpo. Briefings sem tema ou sem lista de peças devem ser refeitos com um pedido mais específico ao Claude.`,
    },
  ],
};
