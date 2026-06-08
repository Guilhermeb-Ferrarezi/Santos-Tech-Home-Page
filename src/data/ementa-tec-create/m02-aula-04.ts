import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Ajustando a Peça na Placa",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Deixar o modelo pronto para fatiar, escalando a peça para um tamanho ideal, escolhendo a melhor orientação para imprimir e conferindo se ela cabe e fica bem apoiada na placa.`,
  descricao: `Nesta aula o aluno aprofunda a preparação do arquivo dentro do Bambu Studio. Nas aulas anteriores ele entendeu o que é impressão 3D, conheceu a impressora da Bambu Lab e abriu o programa pela primeira vez. Agora chega a etapa que separa um arquivo qualquer de um arquivo pronto para imprimir: ajustar a peça na placa. Isso significa controlar três coisas, o tamanho, a orientação e o apoio, antes de pensar em fatiar.

A primeira parte é a escala. Quando a gente importa um modelo, ele aparece no tamanho em que foi salvo, que pode ser minúsculo ou gigante demais para a mesa de impressão. O aluno vai usar a ferramenta de escala (Scale) para deixar a peça num tamanho ideal: grande o bastante para imprimir bem, mas dentro dos limites da placa. Aqui entra um hábito profissional importante, manter as proporções travadas para a peça não ficar achatada ou esticada.

A segunda parte é a orientação. A mesma peça pode ser impressa deitada, em pé ou de lado, e cada escolha muda o tempo, a quantidade de suporte e a resistência do resultado. O aluno vai girar o modelo com a ferramenta de rotação (Rotate) e usar o recurso de apoiar a face plana na mesa (Place on Face) para entender que a melhor orientação costuma ser aquela com a maior superfície tocando a placa, com menos partes flutuando no ar.

A terceira parte é a verificação. Não basta a peça estar bonita na tela, ela precisa caber dentro da área de impressão e ficar estável, sem cair ou balançar. O aluno vai olhar a placa de cima e de lado, checar se nada passou das bordas e confirmar que a base está bem assentada. Ao final da hora, cada um deixa o próprio modelo bem dimensionado, bem orientado e firme, pronto para a etapa de fatiamento das próximas aulas.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada passo ao vivo`,
    `Arquivos de exemplo em 3MF ou STL: uma peça pequena, uma peça grande demais e uma peça com forma irregular (para testar orientação)`,
    `O modelo 3D que cada aluno modelou no Mês 1 (quando disponível) para usar como peça pessoal`,
    `Impressora da Bambu Lab ligada e perfil de placa já selecionado no programa, para mostrar a área real de impressão`,
    `Régua ou trena para comparar, de forma concreta, o tamanho da peça na tela com o tamanho real em milímetros`,
  ],
  conceitosChave: [
    `Placa (Build Plate) — a mesa quadriculada onde a peça é montada na tela; tudo que estiver fora dela não será impresso.`,
    `Escala (Scale) — ferramenta que aumenta ou diminui a peça; pode ser em porcentagem ou em milímetros exatos.`,
    `Proporção travada (Uniform Scale) — opção que aumenta ou reduz altura, largura e profundidade juntas, para a peça não ficar deformada.`,
    `Orientação — a posição em que a peça fica na placa (em pé, deitada ou de lado), que muda tempo, suporte e resistência.`,
    `Rotação (Rotate) — ferramenta que gira a peça em torno de um eixo para mudar a orientação dela na mesa.`,
    `Place on Face (apoiar na face) — recurso que assenta uma face escolhida do modelo direto na placa, deixando a base plana.`,
    `Estabilidade — quando a peça tem uma base larga apoiada na mesa e não fica em equilíbrio frágil, com risco de cair durante a impressão.`,
  ],
  treinamento: `## O que o professor precisa saber

Você vai trabalhar três ajustes dentro do Bambu Studio, escala, orientação e verificação de apoio. Selecione a peça com um clique e a barra de ferramentas lateral esquerda aparece. Os ícones que importam hoje são Move (mover), Scale (escalar, atalho S) e Rotate (girar, atalho R). Ao clicar em Scale, surge um painel com os tamanhos em X, Y e Z e a opção de manter a proporção travada (Uniform Scale), que deve ficar sempre ligada nesta aula. Em Rotate, você gira por eixo digitando graus ou arrastando os anéis coloridos. O recurso mais útil da aula é o "Place on Face": com a peça selecionada, ative-o e clique numa face plana do modelo; ela assenta direto na placa. Teste tudo antes: importe um exemplo, escale para metade, gire 90 graus, use Place on Face e veja a peça pousar firme na mesa quadriculada.

## Passo a passo da aula

10 min — Aquecimento e revisão: relembre as Aulas 1 a 3 com perguntas rápidas. "O que a impressora faz camada por camada?" e "Onde a peça aparece quando a gente abre o arquivo?". Abra o Bambu Studio no projetor e importe um arquivo de exemplo arrastando para a placa, mostrando que ele pode vir pequeno ou enorme.

15 min — Conteúdo novo guiado: demonstre os três ajustes na ordem. Primeiro a escala, clique na peça, depois no ícone Scale (S), confirme que o cadeado de proporção está ligado e digite um tamanho em milímetros (ex.: 60 mm na maior medida). Depois a orientação, clique em Rotate (R) e gire 90 graus num eixo para mostrar a peça deitada e em pé. Em seguida ative o Place on Face e clique numa face plana para a base assentar sozinha. Por fim, gire a câmera com o botão direito do mouse para olhar a placa de cima e de lado e confirmar que nada saiu das bordas.

25 min — Mão na massa: cada aluno abre o próprio modelo (ou um exemplo). Sequência sugerida, 1) importar e selecionar a peça; 2) escalar para um tamanho que caiba na placa, com a proporção travada; 3) girar para a melhor orientação; 4) usar Place on Face para deixar a base plana; 5) girar a câmera e conferir se cabe e está firme. Circule pela sala, sente ao lado de quem travar e ajude a achar o ícone certo na barra lateral.

10 min — Desafio e compartilhar: lance o desafio de achar a orientação com menos partes no ar (ver exercícios). Depois faça uma rodada em que cada aluno mostra a placa na tela e diz em voz alta o tamanho da peça e por que escolheu aquela posição.

## Como explicar de forma clara

Use comparações do dia a dia. Para a placa, diga "é a mesa da impressora, e tudo que cair fora da mesa não imprime". Para a proporção travada, diga "é como esticar uma foto pelo cantinho, ela cresce sem entortar; se você puxa só de um lado, a pessoa fica gorda ou magra demais". Para a orientação, use a imagem de um boneco, "deitado ele fica firme; em pé numa perna só ele cai". Reforce sempre que a melhor posição costuma ser a que tem a maior parte plana encostada na mesa. Evite termos técnicos soltos, em vez de "eixo Z" diga "a altura, de baixo pra cima".

## Erros comuns e como ajudar

O erro mais comum é escalar com a proporção destravada e deixar a peça achatada ou esticada; mostre o cadeado de Uniform Scale e peça para ligá-lo. Outro é deixar a peça maior que a placa, com partes vermelhas ou fora das linhas; oriente a reduzir a escala até tudo ficar dentro das bordas. Muitos esquecem de girar a câmera e não percebem que a base está flutuando ou tombada; passe pedindo "olha de lado, encostou na mesa?". Há quem confunda mover (Move) com girar (Rotate) e empurre a peça para fora da placa; mostre a diferença dos dois ícones. Por fim, alguns escolhem a peça em equilíbrio frágil, em pé sobre uma ponta fina; explique que base larga e apoiada é sempre mais segura.`,
  exercicios: [
    {
      titulo: `Cabe na placa?`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que cada aluno selecione a peça antes de escalar e confirme que o cadeado de proporção (Uniform Scale) está ligado. Use o exemplo "grande demais".`,
      atividade: `Importe a peça de exemplo que está grande demais. Clique nela, abra a ferramenta Scale (S), confirme que a proporção está travada e reduza o tamanho até a peça caber inteira dentro das linhas da placa.`,
      gabarito: `A peça aparece inteira dentro da área quadriculada, sem nenhuma parte fora das bordas nem destacada em vermelho. As três medidas (X, Y, Z) diminuíram juntas, mantendo o formato original. Exemplo válido: uma peça que tinha 200 mm passa para cerca de 80 mm e fica centralizada na mesa.`,
    },
    {
      titulo: `Tamanho certinho em milímetros`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Mostre que dá para digitar o valor exato no painel de Scale, não só arrastar. Tenha uma régua à mão para comparar o número com o tamanho real.`,
      atividade: `Com a peça selecionada, abra o painel de Scale e digite um valor em milímetros para a maior medida (ex.: 60 mm). Confira com a régua mais ou menos quanto isso é no mundo real e ajuste se quiser uma peça um pouco maior ou menor.`,
      gabarito: `A maior medida da peça mostra o número escolhido em milímetros no painel, e as outras medidas mudaram proporcionalmente. O aluno consegue dizer quanto a peça terá de tamanho real. Exemplo: define 60 mm de altura e percebe, com a régua, que será do tamanho aproximado de um dedo.`,
    },
    {
      titulo: `Apoiando a base na mesa`,
      tipo: `desafio`,
      tempo: `5 min`,
      guiaProfessor: `Ensine o Place on Face e peça para o aluno escolher conscientemente a maior face plana. Incentive a girar a câmera para conferir o apoio.`,
      atividade: `Use a ferramenta Rotate (R) para deitar a peça e depois ative o Place on Face. Clique na maior face plana do modelo para ela assentar direto na placa. Gire a câmera e confirme que a base ficou bem encostada na mesa.`,
      gabarito: `A peça fica com uma face larga e plana totalmente apoiada na placa, sem partes da base flutuando no ar. Ao olhar de lado, não há vão entre o modelo e a mesa. Exemplo: um modelo que estava de ponta passa a repousar sobre o lado mais largo e plano.`,
    },
    {
      titulo: `Caça à peça instável`,
      tipo: `em dupla`,
      tempo: `6 min`,
      guiaProfessor: `Forme duplas. Oriente que o colega aponte o problema sem mexer no arquivo do outro. Reforce a ideia de base larga contra equilíbrio frágil.`,
      atividade: `Em dupla, girem a câmera no modelo do colega e procurem UM problema de estabilidade: peça em pé numa ponta fina, base flutuando ou parte fora da placa. Voltem ao próprio arquivo e corrijam esse ponto usando Rotate ou Place on Face.`,
      gabarito: `Cada aluno identifica um problema real de estabilidade no modelo do colega e aplica uma correção no próprio. Exemplo: "tua peça tá em pé numa perninha só" leva o autor a deitar a peça com Place on Face, deixando uma base larga apoiada e firme.`,
    },
    {
      titulo: `Minha melhor orientação`,
      tipo: `projeto curto`,
      tempo: `8 min`,
      guiaProfessor: `Conduza como um mini projeto, o aluno deve testar pelo menos duas orientações e justificar a escolha. Valorize o raciocínio, não só o resultado bonito.`,
      atividade: `Pegue o seu modelo e teste duas orientações diferentes na placa (por exemplo, em pé e deitado). Para cada uma, observe quanta parte fica plana na mesa e quanta fica no ar. Escolha a melhor, deixe a peça bem escalada e apoiada, e prepare uma frase explicando por que essa posição é a melhor.`,
      gabarito: `O aluno apresenta a peça numa orientação estável, bem dimensionada e dentro da placa, e justifica a escolha com um motivo válido. Exemplo de fala correta: "Escolhi deitado porque assim a base fica grande na mesa e quase nada fica no ar, então vai ficar mais firme e precisar de menos suporte". Considera-se completo quando há teste de duas posições e uma justificativa coerente.`,
    },
  ],
};
