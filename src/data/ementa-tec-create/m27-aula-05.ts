import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Por que Otimizar para o Roblox",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é contagem de polígonos e aprender a inspecionar a geometria dos novos assets no Maya para limpar vértices e faces desnecessárias sem perder a forma.`,
  descricao: `Nas aulas anteriores deste mês os alunos planejaram, modelaram e detalharam novos assets 3D no Maya. Os modelos ficaram bonitos, cheios de relevo e personalidade. Mas existe um segredo que todo criador de jogos precisa conhecer: o que é lindo na tela do Maya pode ser pesado demais para rodar dentro do Roblox. Nesta aula a turma descobre por que isso acontece e como resolver, com uma palavra nova e poderosa: otimização.

O coração da aula é a contagem de polígonos. Todo modelo 3D é feito de faces (também chamadas de polígonos), e cada face precisa ser calculada pelo computador a cada quadro do jogo. Um modelo com poucas faces é leve e roda liso; um modelo com milhares de faces escondidas e desnecessárias deixa o jogo travado, com a famosa "queda de FPS". O aluno aprende que detalhe demais nem sempre é qualidade: muitas vezes é só peso inútil que ninguém vê de perto.

Para enxergar esse peso, vamos usar uma ferramenta do Maya chamada Heads Up Display (o painel de informações na tela) e o caminho Display > Heads Up Display > Poly Count. Com ele ligado, aparece no canto da tela um contador que mostra quantos vértices, arestas, faces e triângulos cada modelo tem. É como um "velocímetro" da pesagem do modelo. A partir desse número, o aluno aprende a comparar assets, identificar quais estão pesados demais e decidir o que pode ser simplificado.

O grande objetivo prático é desenvolver o olhar de otimizador: inspecionar a geometria dos assets do mês, encontrar excesso de detalhe (faces escondidas, divisões a mais, geometria interna) e começar a limpar vértices e faces que não fazem falta. Tudo isso sem destruir a forma reconhecível do modelo. Essa habilidade prepara o terreno para a próxima aula, em que vamos exportar os assets já leves e prontos para o Roblox.`,
  materiais: [
    `Computadores com o Maya instalado e já abertos nos arquivos de assets que os alunos criaram nas Aulas 1 a 4`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Arquivo de exemplo "asset-pesado.mb" com um modelo propositalmente cheio de faces escondidas e divisões desnecessárias`,
    `Arquivo de exemplo "asset-leve.mb" com o mesmo modelo já otimizado, para comparar os dois lado a lado`,
    `Mouse com botão de rolagem (scroll) para cada aluno, facilitando girar a câmera e inspecionar o modelo por todos os lados`,
    `Folha de anotação para o aluno registrar a contagem de polígonos de cada asset antes e depois da limpeza`,
  ],
  conceitosChave: [
    `Polígono — cada face plana que forma um modelo 3D; quanto mais polígonos, mais detalhe e também mais peso para o computador calcular.`,
    `Contagem de polígonos (Poly Count) — o número total de faces ou triângulos de um modelo; serve como medida de quão pesado ele é.`,
    `Otimização — o ato de deixar o modelo mais leve, tirando o que não é necessário, sem estragar a forma que o jogador enxerga.`,
    `FPS (quadros por segundo) — quantas imagens o jogo desenha por segundo; modelos pesados derrubam o FPS e o jogo trava.`,
    `Triângulo (tri) — o polígono mais simples, de três lados; o Roblox conta tudo em triângulos, por isso ficamos de olho nesse número.`,
    `Geometria escondida — faces que ficam por dentro ou por trás do modelo e nunca são vistas, mas continuam pesando no jogo.`,
    `Merge (mesclar vértices) — juntar vértices que estão no mesmo lugar para limpar o modelo e reduzir pontos duplicados.`,
  ],
  treinamento: `## O que o professor precisa saber

A contagem de polígonos no Maya é mostrada pelo Heads Up Display. Ligue em Display > Heads Up Display > Poly Count. No canto superior esquerdo da janela aparecem três colunas de números (Verts, Edges, Faces, Tris e UVs). A coluna do meio mostra o total selecionado, então peça que o aluno selecione o modelo para ver o número dele. Quanto maior o número de Tris (triângulos), mais pesado é o asset.

Para inspecionar a geometria, use o modo wireframe (tecla 4 mostra só as linhas; tecla 5 volta ao modo sólido). No wireframe dá para ver onde há divisões a mais. Para limpar, duas ferramentas no menu Edit Mesh resolvem a maioria dos casos: Edit Mesh > Merge (junta vértices duplicados, com um Threshold pequeno como 0.01) e a remoção de faces escondidas, selecionando a face com o botão direito > Face e apertando Delete. Outra ajuda é Mesh > Cleanup, que aponta problemas. Troque a caixa de menus do canto superior esquerdo para "Modeling" para enxergar esses menus. Lembre: o objetivo é baixar o número de Tris mantendo a silhueta.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome os assets das aulas anteriores. Pergunte: "Vocês acham que o computador trabalha igual para um cubo simples e para um castelo cheio de detalhes?" Deixe a turma debater. Mostre rapidamente um jogo travando por excesso de peso (pode descrever ou mostrar um vídeo curto).

Conteúdo novo guiado (15 min): no projetor, abra "asset-pesado.mb". Ligue Display > Heads Up Display > Poly Count. Selecione o modelo e leia o número de Tris em voz alta. Abra "asset-leve.mb" e leia o número dele. Compare: "Mesmo formato, metade do peso." Aperte 4 para mostrar o wireframe e aponte as faces escondidas e as divisões a mais no modelo pesado.

Mão na massa (25 min): cada aluno abre o seu próprio asset do mês, liga o Poly Count e anota o número de Tris na folha. Em seguida gira a câmera, entra no wireframe (tecla 4), procura geometria escondida e usa Edit Mesh > Merge para juntar vértices duplicados. Circule pela sala conferindo se cada um sabe ler o contador. Salve com Ctrl+S.

Desafio e compartilhar (10 min): peça que cada aluno tente baixar a contagem de Tris do seu asset sem perder a forma e anote o novo número. Cada um mostra o "antes e depois" na tela grande e diz quantos triângulos economizou.

## Como explicar de forma clara

Use a metáfora da mochila: "Cada face é um item dentro da mochila do jogo. Se você enche de coisa que não usa, fica pesado e você anda devagar. Otimizar é tirar o peso inútil." Para o Poly Count, diga: "É o velocímetro do seu modelo; quanto maior o número, mais o computador sua." Para a geometria escondida, diga: "Se ninguém nunca vai ver essa face, por que carregá-la?" Sempre mostre o número antes e depois, porque ver o contador cair é o que torna a ideia concreta para a idade.

## Erros comuns e como ajudar

O erro número um é apagar faces que aparecem e abrir um buraco no modelo; ensine a girar a câmera para confirmar que a face é mesmo escondida antes de apertar Delete, e a desfazer com Ctrl+Z. O segundo é usar o Merge com Threshold alto demais e grudar vértices que deviam ficar separados, deformando a forma; mantenha o valor bem pequeno, como 0.01. O terceiro é confundir as colunas do Poly Count e ler o número errado; oriente sempre selecionar o modelo e olhar a coluna do meio. O quarto é achar que otimizar é "deixar feio"; reforce que a meta é manter a silhueta igual com menos peso. Por fim, alguns esquecem de salvar depois da limpeza; crie o hábito de Ctrl+S a cada melhoria.`,
  exercicios: [
    {
      titulo: `Ligando o velocímetro do modelo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o seu asset do mês e encontre o caminho Display > Heads Up Display > Poly Count. Confira aluno por aluno se o contador apareceu no canto da tela.`,
      atividade: `Abra o seu asset, ligue o contador em Display > Heads Up Display > Poly Count, selecione o modelo e anote na folha quantos triângulos (Tris) ele tem.`,
      gabarito: `O contador de Poly Count está visível no canto superior esquerdo e o aluno anotou um número de Tris correspondente ao seu modelo. O aluno consegue apontar a coluna do meio (total selecionado) e dizer o caminho usado para ligar o contador.`,
    },
    {
      titulo: `Comparando pesado e leve`,
      tipo: `observação guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Disponibilize os arquivos "asset-pesado.mb" e "asset-leve.mb". Oriente os alunos a abrir um, anotar o número, abrir o outro e anotar de novo. Reforce que a forma é parecida, mas o peso é diferente.`,
      atividade: `Abra "asset-pesado.mb" e anote o número de Tris; depois abra "asset-leve.mb" e anote o número dele. Escreva qual dos dois roda mais leve no Roblox e por quê.`,
      gabarito: `O aluno registra os dois números e identifica corretamente que o "asset-leve.mb" tem menos Tris e, por isso, roda mais leve no Roblox, porque o computador calcula menos faces por quadro, mantendo o FPS alto.`,
    },
    {
      titulo: `Caçando geometria escondida`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como entrar no wireframe (tecla 4) e voltar ao sólido (tecla 5). Incentive girar a câmera por todos os lados antes de apagar qualquer face. Lembre do Ctrl+Z se um buraco aparecer.`,
      atividade: `No seu asset, aperte a tecla 4 para ver o wireframe, gire a câmera e encontre pelo menos uma face escondida (por dentro ou por trás). Selecione essa face com o botão direito > Face e apague com Delete.`,
      gabarito: `O aluno apaga ao menos uma face que estava escondida, sem abrir buraco visível no modelo. A contagem de Tris cai um pouco e a silhueta do asset continua reconhecível. O aluno explica que removeu uma face que o jogador nunca veria.`,
    },
    {
      titulo: `Mesclando vértices duplicados`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Troque a caixa de menus para "Modeling". Mostre Edit Mesh > Merge e ensine a usar um Threshold pequeno (0.01) na caixa de opções. Verifique se a forma não deformou depois da mesclagem.`,
      atividade: `Selecione o seu modelo, vá em Edit Mesh > Merge com Threshold 0.01 para juntar vértices que estão no mesmo lugar. Confira o contador de Tris antes e depois e anote os dois números.`,
      gabarito: `O aluno aplica o Merge com Threshold pequeno, a contagem de vértices ou Tris diminui e a forma do modelo permanece igual. Os dois números (antes e depois) estão anotados e o segundo é menor ou igual ao primeiro.`,
    },
    {
      titulo: `Antes e depois do meu asset`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Este exercício junta tudo da aula. Reforce que a meta é baixar a contagem de Tris mantendo a silhueta. Garanta que todos salvem com Ctrl+S e mostrem o "antes e depois" na tela grande para a turma.`,
      atividade: `Otimize o seu asset do mês: anote a contagem inicial de Tris, apague faces escondidas, use Merge para limpar vértices, anote a contagem final e salve o arquivo. Mostre para a turma quantos triângulos você economizou.`,
      gabarito: `O arquivo salvo contém o asset com menos Tris do que no início, sem perder a forma reconhecível. O aluno apresenta os dois números (inicial e final) e a diferença economizada, explicando ao menos uma ação de limpeza usada (apagar face escondida ou mesclar vértices).`,
    },
  ],
};
