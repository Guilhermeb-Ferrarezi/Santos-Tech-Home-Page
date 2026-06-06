import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando com Capricho",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Encaixar bem todas as formas no Blender para que a peça vire um bloco único, sólido e sem buracos, pronta para a impressão 3D.`,
  descricao: `Nesta aula a turma sai do "monte de pecinhas soltas" e parte para a montagem caprichada. Até agora cada criança criou as formas básicas da sua peça (cabeça, corpo, braços, base). Hoje o trabalho é juntar tudo com atenção, encostando uma forma na outra e deixando todas as partes presas como se fossem coladas. A palavra do dia é capricho: encaixar devagar, conferir de todos os lados e garantir que nada fique flutuando no ar nem com vão entre as peças.

Por que isso importa tanto para impressão? A impressora 3D constrói a peça camada por camada, de baixo para cima. Se duas formas só se tocam de leve ou ficam separadas por um espacinho, a impressora pode entender que são dois objetos diferentes e um deles pode cair ou sair torto. Por isso o professor vai mostrar como sobrepor as formas (deixar uma entrando um pouquinho dentro da outra), como mover com precisão usando as setas coloridas e como olhar a peça por baixo e por dentro para caçar buracos escondidos.

A grande ideia que as crianças levam para casa é a diferença entre "parece junto" e "está junto de verdade". No videogame uma peça pode só encostar na outra e ficar bonita na tela; na vida real, para virar brinquedo de plástico, ela precisa estar grudada de verdade. Hoje treinamos esse olhar de quem vai imprimir: nada solto, nada vazado, tudo encaixado com carinho.

O resultado da aula é a peça de cada aluno com todas as partes bem encostadas e sobrepostas, salva no computador, pronta para nas próximas aulas receber lixamento dos cantos e detalhes finais.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo da peça de cada aluno carregado`,
    `Projetor ligado mostrando a tela do professor para a turma acompanhar`,
    `Uma peça-exemplo no Blender com as formas BEM encaixadas (modelo "certo")`,
    `Uma peça-exemplo "errada", com partes soltas e buracos, para comparar`,
    `Blocos de montar ou peças de LEGO de verdade para a analogia do encaixe`,
    `Mouse com rodinha para cada aluno (facilita girar e dar zoom na peça)`,
    `Folha de "checklist do capricho" impressa: encostou? sobrepôs? sem buraco?`,
  ],
  conceitosChave: [
    `Encaixar — fazer uma forma encostar bem na outra, sem deixar espaço vazio no meio.`,
    `Sobrepor — empurrar uma forma um pouquinho para dentro da outra, para elas grudarem de verdade.`,
    `Mover com setas (Gizmo) — usar as setinhas coloridas vermelha, verde e azul para arrastar a forma no lugar certo.`,
    `Buraco (vão) — um espaço aberto entre duas peças por onde a gente "vê através"; precisa fechar.`,
    `Peça sólida — quando tudo vira um bloco só, cheio por dentro, sem partes flutuando.`,
    `Girar a câmera (orbitar) — rodar a visão segurando o botão do meio do mouse para olhar a peça de todos os lados.`,
    `Salvar — guardar o trabalho no computador com Ctrl + S para não perder o capricho de hoje.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender. Hoje o objetivo é simples: ajudar cada criança a empurrar suas formas até elas se tocarem e se sobreporem um pouquinho. "Sobrepor" significa deixar uma forma entrando alguns milímetros dentro da outra, em vez de só encostar a casquinha. Isso é o que faz a impressora 3D entender tudo como uma peça única.

Três atalhos resolvem 90% da aula: clicar com o botão esquerdo seleciona uma forma; a tecla G ("grab/agarrar") move a forma livremente; e segurar o botão do meio do mouse e arrastar gira a câmera ao redor da peça. Para mover certinho num eixo só, aperte G e depois X, Y ou Z. As setas coloridas que aparecem ao redor da forma (o "gizmo") fazem a mesma coisa quando arrastadas: vermelha vai para os lados, verde para frente e trás, azul para cima e baixo.

## Passo a passo da aula

10 min — Aquecimento. Mostre no projetor a peça-exemplo "certa" e a "errada". Gire as duas com o botão do meio do mouse. Pergunte: "Qual está grudada de verdade?" Deixe as crianças apontarem os buracos da errada. Conte a regra de ouro: para imprimir, nada pode estar solto nem vazado.

15 min — Conteúdo guiado. Na sua tela, clique numa forma (botão esquerdo). Aperte G e arraste devagar até ela encostar na outra; clique para soltar. Mostre o truque do capricho: aperte G de novo e empurre só mais um pouquinho, fazendo a forma entrar dentro da vizinha (sobrepor). Gire a câmera para ver por baixo e por dentro. Repita com o gizmo: arraste a setinha azul para subir, a vermelha para o lado. Mostre Ctrl + Z para desfazer se errar.

25 min — Mão na massa. Cada aluno encaixa as próprias formas. Passe de mesa em mesa. Peça que, a cada peça encaixada, a criança gire a câmera e confirme que não sobrou vão. Lembre de salvar com Ctrl + S no meio do caminho. Quem terminar cedo, confere a peça por baixo, que é onde mais escondem buracos.

10 min — Desafio e compartilhar. Lance o desafio: "Ache um buraco escondido na sua peça e feche." Depois, cada um gira a peça no projetor por 10 segundos e diz uma parte que encaixou com capricho.

## Como explicar para crianças

Use a analogia dos blocos de montar: "Quando você encaixa um LEGO, ele faz 'clec' e gruda. No Blender não tem o 'clec', então a gente precisa empurrar a peça pra dentro da outra um pouquinho, pra ela grudar de verdade." Outra imagem boa: "Se ficar um espacinho entre as peças, é como um brinquedo quebrado que vai cair. A gente não quer pedaço solto." Sempre peça para a criança "espiar por baixo", como quem olha embaixo da cama procurando um brinquedo escondido.

## Erros comuns e como ajudar

O erro mais comum é só encostar e achar que está pronto: a forma fica colada na casquinha e some o vão quando se gira a câmera. Peça para a criança girar e mostrar que ainda há um fio de luz no meio; depois empurre mais um pouquinho. Outro erro é mover a forma errada: a criança aperta G antes de selecionar e a peça inteira foge. Mostre Ctrl + Z e lembre "primeiro clica, depois aperta G". Algumas crianças exageram e enfiam metade de uma forma dentro da outra, sumindo com o braço; ensine a desfazer e empurrar só um tiquinho. Por fim, muitos esquecem de salvar; combine um "minuto do Ctrl + S" no meio da mão na massa para ninguém perder o trabalho.`,
  exercicios: [
    {
      titulo: `Certo ou Solto?`,
      tipo: `Observação em grupo`,
      tempo: `5 min`,
      guiaProfessor: `No projetor, gire a peça-exemplo "certa" e a "errada". Para cada uma, pergunte à turma se está grudada de verdade ou solta. Deixe as crianças apontarem os buracos.`,
      atividade: `Olhe as duas peças girando na tela do professor. Levante a mão e diga qual está bem encaixada e onde tem um buraco na outra.`,
      gabarito: `A peça "certa" não mostra nenhum vão ao girar e tudo parece um bloco só. A peça "errada" tem espaços abertos entre as formas (dá para ver através), e há partes que parecem flutuando, sem encostar.`,
    },
    {
      titulo: `Arrasta a Setinha`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno clique numa forma da própria peça e use o gizmo (setas coloridas). Reforce: vermelha vai para os lados, verde frente e trás, azul para cima e baixo.`,
      atividade: `Clique numa forma da sua peça. Arraste a seta azul para subir a forma e a vermelha para movê-la de lado. Encoste-a na forma vizinha.`,
      gabarito: `O aluno consegue mover a forma escolhida com as setas coloridas (sem mover as outras) e a deixa encostada na peça vizinha, sem espaço grande no meio.`,
    },
    {
      titulo: `Encaixe com Capricho`,
      tipo: `Mão na massa`,
      tempo: `12 min`,
      guiaProfessor: `Oriente o aluno a usar G para mover cada forma até encostar e depois empurrar um pouquinho mais para sobrepor. Lembre de girar a câmera (botão do meio) para conferir de todos os lados e salvar com Ctrl + S.`,
      atividade: `Encaixe todas as partes da sua peça. Em cada uma, depois de encostar, empurre só mais um tiquinho para a forma entrar dentro da outra. Gire a peça e confira. Salve com Ctrl + S.`,
      gabarito: `Todas as partes da peça estão encostadas e levemente sobrepostas, sem vãos visíveis ao girar a câmera. O arquivo foi salvo. A peça parece um bloco único, não pecinhas soltas.`,
    },
    {
      titulo: `Caçador de Buracos`,
      tipo: `Desafio de inspeção`,
      tempo: `7 min`,
      guiaProfessor: `Desafie cada criança a girar a câmera e olhar a peça por baixo e por dentro, procurando algum vão escondido. Quem achar, fecha empurrando a forma com G.`,
      atividade: `Gire sua peça de cabeça para baixo e por dentro procurando um buraco escondido. Achou um vão? Use G e empurre a forma até fechar.`,
      gabarito: `O aluno encontra pelo menos um vão escondido (geralmente por baixo ou entre duas formas) e o fecha empurrando a forma, deixando-a sobreposta. Ao girar de novo, o buraco sumiu.`,
    },
    {
      titulo: `Mostra e Conta`,
      tipo: `Compartilhar e explicar`,
      tempo: `8 min`,
      guiaProfessor: `Cada aluno gira a própria peça no projetor por alguns segundos e explica uma parte que ficou bem encaixada e como conferiu que não tinha buraco. Reforce o vocabulário: encaixar, sobrepor, sólido.`,
      atividade: `Mostre sua peça girando na tela. Diga uma parte que você encaixou com capricho e explique como você sabe que não ficou nenhum buraco.`,
      gabarito: `O aluno apresenta a peça girando, aponta uma junção bem sobreposta e explica que girou a câmera para conferir todos os lados e não viu vão. Usa pelo menos uma palavra-chave (encaixar, sobrepor ou sólido).`,
    },
  ],
};
