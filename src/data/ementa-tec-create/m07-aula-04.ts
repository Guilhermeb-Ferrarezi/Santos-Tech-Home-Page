import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Forma, Contorno e Volume",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Dar vida aos sprites 16x16 aplicando contorno escuro e dois tons de cor para criar a ilusão de volume e luz.`,
  descricao: `Na aula passada os alunos aprenderam a desenhar no quadro 16x16. Agora damos o próximo passo: transformar desenhos chapados e sem graça em sprites que parecem ter peso, redondeza e luz. O segredo está em três técnicas simples que profissionais de pixel art usam o tempo todo: forma legível, contorno limpo e volume com luz e sombra.

A primeira ideia é a forma. Em 16x16 cada pixel vale ouro, então a silhueta precisa ser reconhecível mesmo bem pequena. Se você apertar os olhos e o objeto ainda for identificável, a forma está boa. A segunda ideia é o contorno, também chamado de outline. Uma borda escura ao redor do desenho separa o sprite do fundo e dá a ele um acabamento profissional. O cuidado é manter o contorno fino, de um pixel, e evitar os "degraus tortos" que deixam a linha serrilhada.

A terceira ideia, a mais mágica, é o volume. Um quadrado pintado de uma cor só parece um adesivo plano. Quando escolhemos de onde vem a luz (normalmente do canto superior esquerdo) e pintamos a parte iluminada com um tom mais claro e a parte oposta com um tom mais escuro, o olho passa a enxergar uma esfera, um corpo, um objeto com três dimensões. É a mesma coisa que acontece quando a luz do sol bate numa bola de verdade.

Nesta aula o aluno refaz ou melhora um sprite já existente aplicando essas três técnicas e, em seguida, cria um segundo item para o jogo praticando a legibilidade em tamanho pequeno. O objetivo do mês, lembrando, é montar um conjunto de sprites para o jogo, então cada item criado aqui já é peça de produção.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a tela do Aseprite ao vivo`,
    `Arquivo de exemplo .aseprite com um sprite 16x16 "chapado" (sem contorno e sem sombra) para a turma melhorar`,
    `Imagem de referência mostrando direção de luz e uma esfera com luz e sombra`,
    `Paleta de cores base salva (.gpl ou .aseprite) com tons claro, médio e escuro de cada cor`,
    `Folha impressa com grade 16x16 em branco para rascunho rápido a lápis`,
  ],
  conceitosChave: [
    `Forma (silhueta) — o contorno geral do objeto; precisa ser reconhecível mesmo pequeno e desfocado.`,
    `Contorno (outline) — borda escura de um pixel ao redor do sprite que o separa do fundo e dá acabamento.`,
    `Volume — a ilusão de que um desenho plano tem profundidade, criada com luz e sombra.`,
    `Fonte de luz — a direção de onde a luz "vem"; define qual lado fica claro e qual fica escuro.`,
    `Tom claro (highlight) — cor mais clara aplicada no lado iluminado do objeto.`,
    `Tom escuro (sombra) — cor mais escura aplicada no lado oposto à luz.`,
    `Legibilidade — a clareza com que um sprite é entendido em tamanho pequeno, sem detalhes demais.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para dar esta aula. Precisa entender três regras e saber repeti-las. Regra 1: a luz vem de um canto só, normalmente o superior esquerdo. Regra 2: o lado que recebe a luz fica claro, o lado oposto fica escuro. Regra 3: o contorno é a cor mais escura de todas e tem só um pixel de espessura. Antes da aula, abra o Aseprite e refaça o sprite de exemplo você mesmo uma vez. Cinco minutos praticando vão te dar segurança para demonstrar ao vivo.

No Aseprite, as ferramentas que você vai usar ficam na barra vertical da esquerda: o Lápis (atalho B), a Borracha (atalho E), o Conta-gotas (atalho I, ou segure Alt enquanto desenha) e o Balde de tinta (atalho G). As cores ficam na paleta, no canto inferior. Use Ctrl++ e Ctrl+- para dar zoom. Salve sempre com Ctrl+S.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete dois sprites lado a lado, um chapado e um com contorno e sombra. Pergunte à turma: "Qual parece mais profissional? Por quê?" Deixe eles descobrirem sozinhos que é o contorno e a sombra. Abra o arquivo de exemplo no seu computador projetado.

Conteúdo novo guiado (15 min): demonstre ao vivo. Primeiro o contorno: com o Lápis (B) selecione o tom mais escuro na paleta e contorne a forma com um pixel só, mostrando como evitar degraus tortos. Depois o volume: defina a fonte de luz no canto superior esquerdo (desenhe uma setinha na tela para lembrar). Selecione o tom claro com o Conta-gotas (I) e pinte o lado de cima e da esquerda; selecione o tom escuro e pinte o lado de baixo e da direita. Use o zoom (Ctrl++) para todos verem pixel a pixel.

Mão na massa (25 min): cada aluno abre o arquivo de exemplo e melhora o sprite chapado aplicando contorno e dois tons. Circule pela sala. Quem terminar rápido começa o segundo item novo do jogo. Lembre de salvar (Ctrl+S) com frequência.

Desafio e compartilhar (10 min): peça que cada um aperte os olhos e olhe o próprio sprite de longe; se ainda for reconhecível, a legibilidade está boa. Faça uma mini galeria projetando dois ou três trabalhos e elogiando algo específico de cada um.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do mundo real. Para o contorno: "É como o traço preto de um desenho animado, ele segura tudo junto." Para o volume: "Imagina uma bola no sol. O lado que o sol bate fica clarinho, o lado de trás fica escuro. A gente vai pintar igualzinho." Para legibilidade: "Se você não reconhece de longe, o jogador também não vai reconhecer na tela." Evite termos técnicos sozinhos; sempre amarre o nome à imagem mental. Repita a regra da luz várias vezes, porque é o que mais confunde.

## Erros comuns e como ajudar

O erro mais frequente é a luz vir de lados diferentes em cada parte do sprite. Peça que desenhem uma setinha de luz num canto da tela e conferem cada pixel contra ela. Outro erro é o contorno grosso, com dois ou três pixels: mostre como deixar fino de um pixel só. Muitos exageram nos detalhes e o sprite vira uma bagunça ilegível; lembre que em 16x16 menos é mais. Há também quem use preto puro no contorno, deixando duro demais; sugira um tom bem escuro da própria cor, não preto. Por fim, alguns esquecem de salvar e perdem trabalho; crie o hábito de gritar "Ctrl+S!" a cada poucos minutos.`,
  exercicios: [
    {
      titulo: `Contornando o sprite`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que todos abriram o arquivo de exemplo. Mostre na sua tela onde está o Lápis (B) e como selecionar o tom escuro na paleta. Circule observando a espessura da linha.`,
      atividade: `Abra o sprite chapado de exemplo e aplique um contorno de um pixel ao redor da forma usando o tom mais escuro da paleta. Mantenha a linha fina, sem degraus tortos.`,
      gabarito: `O sprite fica com uma borda escura contínua de um pixel só ao redor de toda a silhueta, separando-o do fundo. A linha não tem espessura dupla nem buracos. Resultado esperado: contorno limpo e fechado.`,
    },
    {
      titulo: `Acendendo a luz`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Relembre a regra: luz no canto superior esquerdo. Peça que desenhem uma setinha de referência num canto. Use o Conta-gotas (I) ao demonstrar a troca de tons.`,
      atividade: `No mesmo sprite, pinte com o tom claro o lado de cima e da esquerda e com o tom escuro o lado de baixo e da direita, criando volume. Defina a luz no canto superior esquerdo.`,
      gabarito: `O sprite passa a parecer tridimensional: o canto superior esquerdo está claro e o inferior direito escuro, de forma coerente em todo o desenho. Não há luz vindo de dois lados ao mesmo tempo. Resultado esperado: ilusão de volume convincente.`,
    },
    {
      titulo: `Trocando olhares`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas. Oriente que o feedback seja específico e gentil. Dê duas perguntas-guia: a luz está de um lado só? O contorno está fino?`,
      atividade: `Troque de cadeira com o colega e analise o sprite dele. Aponte um acerto e uma melhoria sobre contorno, luz ou legibilidade. Depois apliquem as sugestões nos próprios sprites.`,
      gabarito: `Cada dupla identifica corretamente pelo menos um ponto a melhorar (luz inconsistente, contorno grosso ou detalhe demais) e o aluno ajusta o sprite com base no retorno. Resultado esperado: sprite revisado e melhorado após o feedback.`,
    },
    {
      titulo: `O segundo item do jogo`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Sugira itens simples e úteis ao jogo: moeda, poção, chave, fruta. Reforce as três técnicas. Circule lembrando de salvar com Ctrl+S.`,
      atividade: `Crie do zero um segundo item de 16x16 para o jogo aplicando forma legível, contorno de um pixel e dois tons de cor com luz no canto superior esquerdo. Salve o arquivo.`,
      gabarito: `Surge um novo sprite reconhecível em 16x16, com contorno fino, tom claro e tom escuro coerentes com a fonte de luz, salvo no formato .aseprite. Resultado esperado: item de jogo pronto para o conjunto de sprites do mês.`,
    },
    {
      titulo: `Reconhece de longe?`,
      tipo: `roda de conversa`,
      tempo: `5 min`,
      guiaProfessor: `Projete dois ou três sprites da turma. Conduza a conversa pela legibilidade: peça que todos apertem os olhos. Elogie algo específico de cada trabalho.`,
      atividade: `Em roda, observe os sprites projetados apertando os olhos para simular distância. Discuta quais itens são reconhecíveis mesmo pequenos e o que ajuda ou atrapalha a leitura.`,
      gabarito: `A turma conclui que silhueta clara, contorno definido e poucos detalhes deixam o sprite legível, enquanto excesso de cores e detalhes atrapalha. Resultado esperado: cada aluno verbaliza pelo menos um princípio de legibilidade aprendido na aula.`,
    },
  ],
};
