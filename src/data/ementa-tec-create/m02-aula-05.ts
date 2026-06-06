import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "O Que É Fatiar (Slicing)",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Explicar o que é fatiar (slicing) e fazer cada aluno fatiar o próprio modelo no Bambu Studio, vendo a pré-visualização das camadas e os três ajustes principais: altura de camada, preenchimento e velocidade.`,
  descricao: `Nas aulas anteriores a turma já abriu o Bambu Studio, colocou a peça na placa e ajustou a posição e o tamanho do modelo. Mas a impressora não entende um modelo 3D do jeito que ele aparece na tela: ela só sabe desenhar uma camadinha de cada vez, de baixo para cima, como se estivesse empilhando folhas de papel muito finas. Nesta aula o aluno descobre a palavra mágica que liga o modelo à impressora: fatiar, ou em inglês slicing.

Fatiar é o trabalho que o computador faz quando você aperta o botão Slice (Fatiar) no Bambu Studio. O software pega o seu modelo 3D e o corta em centenas de fatias horizontais bem fininhas, uma em cima da outra. Para cada fatia, ele calcula exatamente o caminho que o bico quente da impressora vai percorrer desenhando aquela camada. No final, ele transforma tudo isso em uma lista de instruções que a impressora consegue ler. Sem fatiar, não existe impressão: é por isso que esse passo é o coração de toda a impressão 3D.

Para que o aluno sinta que tem controle sobre o resultado, esta aula apresenta de forma bem simples os três ajustes mais importantes. A altura de camada decide a espessura de cada fatia: camadas mais finas deixam a peça mais lisa, porém demoram mais; camadas mais grossas imprimem rápido, mas deixam degraus mais visíveis. O preenchimento (infill) decide o quanto a peça é cheia ou oca por dentro: ninguém imprime um bloco totalmente maciço, então o software faz uma gradezinha interna que economiza material e tempo. E a velocidade decide quão depressa o bico se move: mais rápido economiza tempo, mais devagar costuma dar mais qualidade.

O momento mais divertido da aula é a pré-visualização das camadas. Depois de fatiar, o aluno troca para a aba Preview (Pré-visualização) e arrasta uma barrinha do lado da tela para ver a peça sendo construída camada por camada, como uma animação. É aqui que o conceito abstrato vira algo concreto: o aluno enxerga, com os próprios olhos, que a sua peça é feita de muitas linhas empilhadas. Ao final, todo mundo terá fatiado o próprio modelo pelo menos uma vez e sabe dizer quanto tempo a impressão vai levar e quanto material vai gastar, informações que o Bambu Studio mostra logo após fatiar.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor mostrar a tela do Bambu Studio passo a passo`,
    `Arquivo de exemplo .3mf ou .stl com uma peça simples já posicionada na placa (por exemplo um chaveiro ou um cubo com detalhe)`,
    `O próprio modelo de cada aluno, salvo da aula anterior, já ajustado na placa`,
    `Impressora 3D Bambu Lab na sala, ligada, para mostrar de verdade as camadas em uma peça já impressa`,
    `Uma peça impressa pronta cortada ao meio (ou com defeito) para a turma ver o preenchimento por dentro`,
    `Quadro branco ou flip chart para anotar os nomes dos botões e os três ajustes principais`,
  ],
  conceitosChave: [
    `Fatiar (Slicing) — processo em que o software corta o modelo 3D em centenas de camadas finas e calcula o caminho que a impressora vai desenhar em cada uma.`,
    `Camada — cada fatia horizontal fininha que a impressora empilha de baixo para cima até formar a peça inteira.`,
    `Altura de camada — a espessura de cada fatia; menor deixa a peça mais lisa e mais lenta, maior imprime rápido com degraus mais visíveis.`,
    `Preenchimento (Infill) — a gradezinha interna que deixa a peça oca por dentro para economizar material e tempo, medida em porcentagem.`,
    `Velocidade — o quão depressa o bico da impressora se move; mais rápido economiza tempo, mais devagar costuma dar mais qualidade.`,
    `Pré-visualização (Preview) — aba do Bambu Studio que mostra a peça camada por camada, como uma animação, depois de fatiar.`,
    `G-code — a lista final de instruções que o fatiamento gera para a impressora ler e executar a impressão.`,
  ],
  treinamento: `## O que o professor precisa saber

Fatiar é converter o modelo 3D em camadas e em instruções que a impressora entende. No Bambu Studio isso acontece quando você clica no botão Slice Plate (Fatiar Placa), que fica no canto superior direito da tela. Antes de fatiar, confira no painel direito o perfil de impressão e os ajustes. Para a aula, deixe o modo Global ou Simple ativo, não o Advanced, para não assustar os alunos com dezenas de opções. Os três ajustes que importam hoje estão fáceis de achar: a altura de camada (Layer height) costuma aparecer logo no topo do painel direito, com perfis prontos como 0.20mm Standard; o preenchimento (Infill ou Sparse infill density) aparece na aba Strength (Resistência) em porcentagem; e a velocidade (Speed) tem uma aba própria chamada Speed. Depois de fatiar, o botão muda para Preview e o software mostra o tempo total e o peso de filamento estimado. A barrinha vertical do lado direito, na aba Preview, controla qual camada você está vendo. Salve o projeto com Ctrl+S.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor a peça de exemplo já na placa. Pegue uma peça impressa de verdade e mostre as linhas das camadas com o dedo. Pergunte: "como a impressora faz uma peça inteira se ela só sabe desenhar uma linha por vez?". Anote as ideias no quadro e apresente a palavra fatiar.

Conteúdo novo guiado (15 min): no projetor, clique em Slice Plate no canto superior direito e espere a barra de progresso. Quando terminar, clique na aba Preview e arraste a barrinha vertical da direita para baixo e para cima, mostrando a peça surgindo camada por camada. Depois volte para Prepare e mostre os três ajustes no painel direito: troque a altura de camada entre 0.20mm e 0.28mm, mude o Infill de 15% para 25% na aba Strength, e mostre a aba Speed. A cada mudança, fatie de novo e mostre como o tempo estimado muda.

Mão na massa (25 min): cada aluno abre o seu próprio modelo, confere se está na placa e clica em Slice Plate. Depois vai para Preview e arrasta a barrinha para ver as camadas. Em seguida cada um experimenta mudar a altura de camada e o preenchimento, fatiando de novo e anotando o tempo e o peso antes e depois. Circule pela sala. Lembre de salvar com Ctrl+S.

## Como explicar de forma clara

Use a comparação do pão de forma: o modelo inteiro é o pão, e fatiar é cortar em muitas fatias finas; a impressora monta o pão de volta uma fatia por vez. Para a altura de camada, diga "fatias finas, peça lisinha mas lenta; fatias grossas, peça rápida mas com degraus". Para o preenchimento, mostre a peça cortada ao meio e diga "por dentro ela não é maciça, é uma gradezinha, igual a estrutura de uma ponte". Para a velocidade, fale "é a mão da impressora indo mais depressa ou mais devagar". Sempre fatie na frente deles antes de pedir que façam, porque ver a barrinha do Preview animando vale mais que mil explicações.

## Erros comuns e como ajudar

O erro mais comum é o aluno mudar um ajuste e esquecer de fatiar de novo, achando que nada aconteceu; lembre que toda mudança pede um novo Slice. Outro erro é confundir a aba Prepare com a aba Preview e não achar as camadas; mostre que a animação só aparece em Preview, depois de fatiar. Muitos colocam o preenchimento em 100% achando que fica mais forte, e a impressão fica lenta e gasta demais; explique que 15% a 25% já é o normal. Alguns deixam a altura de camada minúscula e o tempo dispara para horas; mostre o número de tempo estimado para eles perceberem. Há quem ative o modo Advanced sem querer e veja opções demais; volte para Simple. Por fim, se o software acusar erro ao fatiar, costuma ser a peça flutuando ou fora da placa; recoloque a peça apoiada na placa e fatie de novo.`,
  exercicios: [
    {
      titulo: `Meu primeiro Slice`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno está com o próprio modelo na placa antes de começar. Aponte onde fica o botão Slice Plate no canto superior direito e confirme que todos viram a barra de progresso.`,
      atividade: `Com o seu modelo na placa, clique no botão Slice Plate no canto superior direito e espere a barra de progresso terminar. Observe o tempo de impressão e o peso de filamento que aparecem na tela.`,
      gabarito: `O aluno clica em Slice Plate, espera o fatiamento concluir e localiza o tempo estimado e o peso de filamento que o Bambu Studio mostra após fatiar. Ele consegue dizer em voz alta esses dois números, demonstrando que entendeu que fatiar gera essas informações.`,
    },
    {
      titulo: `Viajando pelas camadas`,
      tipo: `Prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre de novo que a animação só aparece na aba Preview. Ajude quem confundir a aba Prepare com a Preview e oriente onde fica a barrinha vertical da direita.`,
      atividade: `Depois de fatiar, clique na aba Preview e arraste a barrinha vertical da direita de baixo para cima. Pare na metade da peça e observe como ela está sendo construída camada por camada.`,
      gabarito: `O aluno entra na aba Preview, arrasta a barrinha e consegue parar em uma camada do meio, enxergando o interior da peça. Ele descreve que a peça é feita de muitas camadas empilhadas e que por dentro há uma gradezinha, mostrando que entendeu a pré-visualização.`,
    },
    {
      titulo: `Fino ou grosso?`,
      tipo: `Desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde trocar a altura de camada no topo do painel direito. Reforce que é preciso fatiar de novo a cada mudança e que o tempo estimado é o número a observar.`,
      atividade: `Anote o tempo da sua peça com altura de camada 0.20mm. Depois troque para 0.28mm, fatie de novo e anote o novo tempo. Por último, descubra qual das duas deixa a peça mais lisa.`,
      gabarito: `O aluno registra dois tempos diferentes e percebe que 0.28mm imprime mais rápido que 0.20mm. Ele conclui corretamente que a camada mais fina (0.20mm) deixa a peça mais lisa, porém mais lenta, demonstrando a troca entre qualidade e tempo.`,
    },
    {
      titulo: `Cheio ou oco em dupla`,
      tipo: `Em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Mostre onde fica o Infill na aba Strength. Tenha em mãos a peça cortada ao meio para a dupla comparar com o que veem na tela. Circule para garantir que ambos fatiem.`,
      atividade: `Em dupla, um aluno coloca o preenchimento (Infill) em 10% e fatia; o outro coloca em 40% e fatia. Comparem na aba Preview como fica a gradezinha por dentro e comparem o tempo e o peso de cada um.`,
      gabarito: `A dupla observa que 40% de preenchimento cria uma gradezinha mais densa, gasta mais filamento e demora mais que 10%. Eles explicam que o preenchimento controla o quanto a peça é cheia por dentro e que um valor médio, como 15% a 25%, equilibra resistência, material e tempo.`,
    },
    {
      titulo: `Minha receita de fatiamento`,
      tipo: `Projeto curto e roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza primeiro a escolha individual dos ajustes e depois a roda. Faça perguntas sobre por que cada um escolheu seus valores. Valorize escolhas que equilibrem qualidade e tempo, não só o mais rápido.`,
      atividade: `Escolha uma altura de camada, uma porcentagem de preenchimento e uma velocidade para a sua peça pensando em um equilíbrio entre qualidade e tempo. Fatie com a sua receita, anote o tempo final e, na roda, explique para a turma por que você escolheu esses valores.`,
      gabarito: `O aluno define os três ajustes de forma coerente (por exemplo 0.20mm de camada, 20% de preenchimento e velocidade padrão), fatia com sucesso e anota o tempo final. Na roda, ele justifica as escolhas relacionando-as a qualidade, material e tempo, mostrando que entendeu o papel de cada ajuste no fatiamento.`,
    },
  ],
};
