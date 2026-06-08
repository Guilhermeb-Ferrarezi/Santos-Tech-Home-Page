import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Segredo do Fatiamento (Slicing)",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender o que é fatiar (slicing) e preparar o personagem do jogo para impressão ajustando altura de camada, preenchimento (infill) e ativando suportes para as partes flutuantes.`,
  descricao: `Nesta aula o aluno descobre o grande segredo que faz a impressora 3D funcionar: o fatiamento, ou slicing. A impressora não entende um modelo 3D do jeito que vemos na tela. Ela só sabe fazer uma coisa de cada vez: depositar uma fininha linha de plástico derretido, camada sobre camada, de baixo para cima. O fatiamento é justamente o momento em que o Bambu Studio corta o modelo do personagem em centenas de camadas horizontais e escreve, passo a passo, o caminho que a impressora vai seguir.

Na Aula 4 o aluno já ajustou o modelo: posicionou na mesa, girou para a melhor face e conferiu o tamanho. Agora chega a parte que decide a qualidade e a velocidade da impressão. Três ajustes mandam no resultado. O primeiro é a altura de camada: camadas finas deixam o personagem mais liso e detalhado, mas demoram mais; camadas grossas imprimem rápido, porém com degraus visíveis. O segundo é o preenchimento, o infill: o miolo da peça não precisa ser maciço, então a impressora faz uma grade por dentro que economiza plástico e tempo, mantendo a peça firme. O terceiro são os suportes: como o plástico não pode ser depositado no ar, partes que ficam flutuando (um braço esticado, uma capa, uma orelha grande) precisam de uma estrutura temporária por baixo, que depois a gente quebra e tira.

O aluno vai abrir o modelo do seu personagem no Bambu Studio, escolher uma altura de camada, definir uma porcentagem de preenchimento e ativar os suportes. Em seguida vai clicar em Slice (Fatiar) e ver o programa transformar o personagem numa pré-visualização camada por camada, mostrando o tempo estimado e a quantidade de filamento. É um momento mágico: o aluno enxerga, antes de imprimir, exatamente como a máquina vai construir a peça.

O foco do mês é trazer os personagens e itens do jogo para a vida real. Esta aula é a ponte entre o modelo digital e o objeto físico. O professor deve reforçar que fatiar bem é o que separa uma impressão bonita de uma impressão falha. Ao final, cada aluno terá o seu personagem fatiado, com os três ajustes feitos de propósito, e o arquivo pronto para a impressão da Aula 6.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar o fatiamento em tela grande`,
    `Arquivo de exemplo do personagem em formato STL ou 3MF, com pelo menos uma parte flutuante (um braço esticado ou uma capa), pronto na pasta de cada aluno`,
    `Uma peça já impressa de aula anterior, para mostrar ao vivo as camadas reais e o material de suporte`,
    `Folha ou slide com a tabela de referência: altura de camada, preenchimento e suportes (quando usar cada um)`,
    `Um galho de árvore ou um andaime de brinquedo (ou imagem) para a metáfora dos suportes`,
  ],
  conceitosChave: [
    `Fatiamento (slicing) — processo de cortar o modelo 3D em camadas horizontais e gerar o caminho que a impressora vai seguir.`,
    `Camada — cada linha fina de plástico depositada de uma vez; a peça é a pilha de muitas camadas, de baixo para cima.`,
    `Altura de camada — a espessura de cada camada em milímetros; fina deixa liso e lento, grossa deixa rápido e com degraus.`,
    `Preenchimento (infill) — a grade que enche o miolo da peça; em porcentagem, decide o quanto a peça é oca ou cheia.`,
    `Suporte — estrutura temporária que segura as partes flutuantes durante a impressão e é removida no final.`,
    `Saliência (overhang) — parte do modelo muito inclinada ou no ar, que cai se não tiver suporte por baixo.`,
    `G-code — a lista de instruções que o fatiamento gera para a impressora; é a receita de movimentos da máquina.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D. Precisa entender uma ideia central: a impressora constrói a peça em camadas, de baixo para cima, e o fatiamento é o que transforma o modelo 3D nessas camadas. No Bambu Studio, o botão que faz isso se chama Slice (Fatiar), e fica no canto superior direito. Antes da aula, abra o Bambu Studio, carregue um modelo de exemplo e clique em Slice uma vez para ver a pré-visualização das camadas e o tempo estimado aparecerem. Decore onde ficam três controles, todos no painel direito ou na barra superior de parâmetros: Layer height (altura de camada), Infill (preenchimento) e Support (suporte). Esses três são o coração da aula. Para esta idade e para um personagem pequeno, valores seguros são: altura de camada 0,2 mm, preenchimento 15 por cento e suporte ativado se houver partes flutuantes.

## Passo a passo da aula (ritmo 10/15/25/10, com os valores exatos)

10 min, aquecimento e revisão. Mostre a peça já impressa e peça que os alunos achem as linhas finas com o dedo. Pergunte: como a impressora construiu isso? Conduza até a resposta: uma camada de cada vez, de baixo para cima. Diga que hoje vamos ensinar o computador a cortar o personagem nessas camadas.

15 min, conteúdo novo guiado. No Bambu Studio, com o personagem na mesa, mostre o painel de parâmetros. Em Quality, aponte Layer height e escolha 0.2 mm. Em Strength, aponte Infill (Sparse infill density) e digite 15 por cento. Em Support, ligue a chave Enable support e deixe o tipo em Normal (auto). Agora clique no botão Slice no canto superior direito. Quando terminar, clique em Preview. Arraste a barra lateral de camadas para cima e para baixo e mostre o personagem sendo construído camada por camada. Aponte na tela o tempo estimado e os gramas de filamento.

25 min, mão na massa. Cada aluno abre o próprio personagem. Faça em ordem: 1. Defina Layer height 0.2 mm. 2. Defina Infill 15 por cento. 3. Ligue Enable support se o personagem tiver braço, capa ou orelha no ar. 4. Clique em Slice. 5. Clique em Preview e arraste a barra de camadas para ver a peça subir. 6. Anote o tempo estimado e os gramas. Circule pela sala conferindo cada um dos seis passos.

10 min, desafio e compartilhar. Peça que cada aluno fatie o mesmo personagem duas vezes: uma com Layer height 0.2 mm e outra com 0.28 mm, comparando os tempos. Em roda, cada um diz quanto tempo cada versão levou e qual escolheria e por quê.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Para fatiamento: imagine um pão de forma; o modelo inteiro é o pão, e fatiar é cortar em fatias finas que a impressora empilha. Para altura de camada: fatia fina de presunto deixa o sanduíche liso mas leva mais fatias; fatia grossa é rápida mas o sanduíche fica cheio de degraus. Para preenchimento: a peça é como uma caixa de papelão com favos por dentro, leve mas firme; não precisa ser um tijolo maciço. Para suporte: mostre o galho e diga que, se você pendurar massinha no ar, ela cai; o suporte é um andaime que segura até o plástico esfriar, e depois a gente derruba o andaime. Sempre ligue ao jogo: este é o seu personagem virando objeto de verdade.

## Erros comuns e como ajudar

O erro mais comum é esquecer de clicar em Slice e tentar imprimir o modelo cru; lembre que sem fatiar não há instruções para a máquina. Outro erro é não ativar o suporte em um personagem com braço esticado; mostre na Preview a parte que vai falhar no ar e ative Enable support. Alguns colocam preenchimento altíssimo, como 100 por cento; explique que isso gasta muito plástico e tempo sem precisar, e volte para 15 por cento. Há quem confunda altura de camada baixa com qualidade infinita; lembre que 0,2 mm já fica ótimo para personagem pequeno. Por fim, se a pré-visualização não aparecer, geralmente o aluno não clicou em Preview depois do Slice; aponte os dois botões na ordem certa.`,
  exercicios: [
    {
      titulo: `Caça às camadas na peça real`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Passe a peça já impressa de mão em mão. Peça que sintam as linhas com o dedo antes de explicar. Conduza até a ideia de que a impressora trabalha de baixo para cima, uma camada por vez.`,
      atividade: `Observe e toque a peça impressa que o professor passou. Conte para a turma: você consegue sentir as linhas finas? Em que direção elas vão? Como você acha que a impressora construiu essa peça?`,
      gabarito: `O aluno deve perceber linhas horizontais finas, empilhadas de baixo para cima. Resposta esperada: a impressora fez uma camada de cada vez, do chão para o topo, depositando plástico em linhas. Quem disser que a impressora fez a peça inteira de uma vez deve ser corrigido com a peça na mão, mostrando as camadas.`,
    },
    {
      titulo: `O primeiro Slice do personagem`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja com o próprio personagem na mesa do Bambu Studio. Mostre na tela grande onde fica o botão Slice e, depois, o botão Preview. Reforce a ordem: primeiro Slice, depois Preview.`,
      atividade: `Abra o seu personagem no Bambu Studio. Clique no botão Slice no canto superior direito. Depois clique em Preview e arraste a barra de camadas para ver o personagem ser construído. Anote o tempo estimado que aparece na tela.`,
      gabarito: `Depois do Slice, o programa mostra a pré-visualização e o tempo estimado de impressão e os gramas de filamento. Caminho correto: botão Slice no canto superior direito, depois botão Preview, depois arrastar a barra lateral de camadas. Se nada aparecer, o aluno provavelmente não clicou em Preview depois do Slice.`,
    },
    {
      titulo: `Ajustando a altura de camada`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre onde fica Layer height no grupo Quality. Explique a troca: fina é mais lisa e lenta, grossa é mais rápida e com degraus. Peça que fatiem com dois valores e comparem os tempos na tela.`,
      atividade: `No seu personagem, defina Layer height em 0.2 mm e clique em Slice. Anote o tempo. Depois mude Layer height para 0.28 mm e clique em Slice de novo. Anote o novo tempo. Qual versão imprime mais rápido?`,
      gabarito: `A versão com 0.28 mm imprime mais rápido, pois usa menos camadas; a de 0.2 mm demora mais, mas fica mais lisa. Caminho: grupo Quality, campo Layer height, digitar o valor, clicar em Slice e ler o tempo estimado. O aluno deve concluir que camada mais grossa significa menos tempo e mais degraus visíveis.`,
    },
    {
      titulo: `Salvando plástico com o preenchimento`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre o campo Infill (Sparse infill density) no grupo Strength. Explique a metáfora dos favos por dentro. Peça que comparem o filamento gasto em duas porcentagens. Não deixe ninguém imprimir maciço sem motivo.`,
      atividade: `No seu personagem, coloque Infill em 15 por cento e clique em Slice. Anote os gramas de filamento. Depois mude Infill para 50 por cento e clique em Slice de novo. Anote os gramas. Quanto de plástico a mais o de 50 por cento gastou?`,
      gabarito: `O preenchimento de 50 por cento gasta mais filamento (mais gramas) e mais tempo que o de 15 por cento, porque enche mais o miolo da peça. Caminho: grupo Strength, campo Sparse infill density, digitar a porcentagem, clicar em Slice e ler os gramas. Conclusão esperada: para um personagem pequeno, 15 por cento já é firme e economiza plástico; maciço quase nunca é necessário.`,
    },
    {
      titulo: `Salvando os suportes do personagem flutuante`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use um personagem que tenha uma parte no ar (braço esticado, capa ou orelha grande). Mostre, na Preview, a parte que cairia sem suporte. Ative Enable support e fatie de novo, apontando o material de suporte por baixo. Lembre que o suporte é temporário e será removido na Aula 7.`,
      atividade: `Escolha o seu personagem com uma parte flutuando. Primeiro clique em Slice sem suporte e olhe na Preview a parte que ficaria no ar. Depois ligue Enable support, mantenha o tipo em Normal, clique em Slice de novo e veja o suporte aparecer por baixo da parte flutuante. Salve o arquivo fatiado com o seu nome para a Aula 6.`,
      gabarito: `Com Enable support ligado, aparece uma estrutura de suporte por baixo das partes flutuantes (saliências/overhangs), que segura a impressão e depois é removida. Caminho: grupo Support, ligar Enable support, tipo Normal (auto), clicar em Slice e conferir na Preview. Sem suporte, a parte no ar falharia. O arquivo deve ficar salvo com o nome do aluno, pronto para imprimir na Aula 6.`,
    },
  ],
};
