import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Escolhendo as Configurações",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a ajustar a sua própria impressão escolhendo a cor do filamento, a qualidade da camada e o preenchimento, e ainda confere o tempo estimado para confirmar que a peça está pronta e segura para imprimir.`,
  descricao: `Nesta aula cada aluno vira o chefe da sua própria impressão. Até agora a turma aprendeu a abrir o Bambu Studio, a posicionar as peças na mesa e a entender o que é fatiar. Hoje damos um passo a mais: antes de mandar imprimir, vamos mexer em três botõezinhos que mudam o jeito que a peça vai sair. São eles a cor do filamento, a qualidade da camada e o preenchimento. Parece coisa de gente grande, mas é simples e muito divertido, porque cada criança escolhe e vê a diferença na hora.

A cor do filamento é a parte mais gostosa. O filamento é o fio de plástico colorido que a impressora derrete para construir a peça. No Bambu Studio a gente diz para o programa qual cor está colocada na máquina, e assim a pré-visualização já mostra a peça naquela cor. A qualidade da camada é o quão fininhas são as fatias: camadas mais finas deixam a peça mais lisa e bonita, porém mais demorada; camadas mais grossas deixam a peça mais rápida, porém com degrauzinhos. O preenchimento é o quão cheia a peça fica por dentro: pode ser bem ocada (rápida e leve) ou bem cheia (forte e pesada).

Depois de escolher, a criança aprende a ler o tempo estimado. O Bambu Studio mostra quanto tempo a impressão vai levar e quanto filamento vai gastar. Ler esse número é um superpoder: ajuda a entender que toda escolha tem um preço em tempo. Se a peça vai demorar horas demais, a gente conversa e ajusta para caber na aula e no plano do mês.

Esta é a quarta aula do mês de impressão e a segunda da Semana 2. O foco do mês é imprimir mais criações e levar as peças para casa. Por isso, ao final desta aula, cada aluno terá a sua peça configurada do jeitinho dele e confirmada como pronta e segura para imprimir, deixando tudo preparado para as próximas aulas, quando as impressoras Bambu Lab vão entrar em ação de verdade.`,
  materiais: [
    `Computadores ligados, um por aluno, com o Bambu Studio já aberto e o projeto da peça de cada criança carregado e posicionado na mesa.`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada clique do Bambu Studio.`,
    `Carretéis (rolos) de filamento de cores diferentes em cima da mesa, para as crianças verem e tocarem o fio de plástico de verdade.`,
    `Exemplos já impressos pelo professor: a mesma peça impressa com camada grossa e com camada fina, e outra peça cortada ao meio mostrando o preenchimento por dentro.`,
    `Crachás com o nome de cada aluno e um mouse extra de reserva.`,
    `Folhas de papel e lápis de cor para o exercício de escolher e registrar as configurações.`,
    `Adesivos de recompensa para comemorar quando cada aluno confirmar a sua peça pronta e segura.`,
  ],
  conceitosChave: [
    `Filamento — o fio de plástico colorido que a impressora derrete para construir a peça, igual a uma cola quente bem caprichada.`,
    `Cor do filamento — a cor que a gente avisa ao programa, para a peça aparecer pintada na tela do jeito que vai sair de verdade.`,
    `Camada — cada fatia bem fininha que a impressora empilha; muitas camadas juntas formam a peça inteira.`,
    `Qualidade da camada — o quão fininhas são as fatias: fininhas deixam a peça mais lisa, porém mais demorada.`,
    `Preenchimento — o quão cheia a peça fica por dentro; pode ser ocada e leve ou cheia e forte.`,
    `Tempo estimado — o número que o programa mostra dizendo quanto a impressão vai demorar.`,
    `Configuração — uma escolha que a gente faz antes de imprimir, como cor, camada e preenchimento.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você vai mexer em quatro coisas no Bambu Studio, todas na parte de cima ou na lateral direita da tela. Não precisa ser especialista: são botões simples e você vai praticar antes da aula.

Primeiro, a cor do filamento. No alto da tela, perto do desenho do carretel, há um quadradinho colorido. Clicando nele abre uma paleta; você escolhe a cor que está colocada na impressora. Isso muda só a cor da pré-visualização, não a impressão física.

Segundo, a qualidade da camada. Na barra de cima existe um menu com alturas como 0.20mm Standard, 0.28mm Draft (mais grosso e rápido) e 0.12mm Fine (mais fino e lento). Para crianças, pense assim: número menor é mais bonito e mais demorado; número maior é mais rápido e com degrauzinhos.

Terceiro, o preenchimento (Infill). Clique na aba Process e procure Sparse infill density: é uma porcentagem. 10 a 15 por cento já é ótimo para brinquedos: leve, rápido e firme o bastante. 100 por cento deixa a peça maciça, pesada e demorada (evite).

Quarto, o tempo estimado. Sempre que você clica em Slice plate (Fatiar), o Bambu Studio recalcula e mostra, no canto, o tempo total e os gramas de filamento. É o que vamos ler juntos.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Bambu Studio)

Aquecimento (10 min): no projetor, mostre as peças prontas. Passe de mão em mão a peça de camada grossa e a de camada fina, e a peça cortada mostrando o vazio por dentro. Pergunte: qual está mais lisinha? Por que será que uma demora mais? Deixe a turma curiosa.

Conteúdo novo guiado (15 min): no seu Bambu Studio, com uma peça na mesa, faça os quatro passos devagar narrando cada clique. 1) Clique no quadradinho de cor lá em cima e escolha uma cor. 2) Abra o menu de altura de camada e mude para 0.28mm Draft, depois para 0.12mm Fine, mostrando que o número muda. 3) Vá na aba Process e ajuste o Sparse infill density para 15 por cento. 4) Clique em Slice plate e mostre, no canto, o tempo estimado e os gramas. Leia o número em voz alta.

Mão na massa (25 min): cada criança repete na sua própria peça. Escolhe a cor, define a qualidade da camada (sugira 0.20mm Standard como padrão), ajusta o preenchimento para 15 por cento e clica em Slice plate. Circule pela sala ajudando um a um a achar cada botão. Quando fatiar, peça que cada aluno leia para você o tempo estimado da peça dele.

Desafio e compartilhar (10 min): desafie quem terminou a comparar dois tempos, fatiando a mesma peça com 0.28mm e depois com 0.12mm, e dizer qual demora mais. Depois, cada aluno mostra no projetor a cor escolhida e fala o tempo da sua peça. Comemore cada peça confirmada como pronta e segura.

## Como explicar para crianças

Filamento e cor: mostre o rolo de verdade. A impressora derrete esse fio igual cola quente e desenha a peça. A gente avisa a cor para a tela ficar igual ao que vai sair.

Qualidade da camada: a peça é feita de muitas panquequinhas empilhadas. Panquecas fininhas deixam tudo lisinho, mas leva mais tempo. Panquecas grossas ficam prontas rápido, mas com degraus.

Preenchimento: pergunte se um chocolate é melhor recheado ou oco. Por dentro a peça tem um favo de mel; mais favo deixa forte e pesado, menos favo deixa leve e rápido. Para brinquedo, pouco favo já basta.

Tempo estimado: é o relógio do programa avisando quanto vamos esperar. Ler o número ajuda a escolher direito.

## Erros comuns e como ajudar

A criança acha que mudar a cor na tela muda o plástico da máquina: explique que a cor da tela é só o aviso; o plástico de verdade é o rolo que está na impressora.

A criança coloca preenchimento de 100 por cento: o tempo dispara. Mostre o tempo estimado subindo e volte para 15 por cento juntos.

Esqueceram de clicar em Slice plate e o tempo não aparece: lembre que o número só atualiza depois de fatiar.

A criança escolhe 0.12mm Fine e a peça fica demorada demais para a aula: combine 0.20mm Standard como padrão e deixe o Fine só para peças pequenas.`,
  exercicios: [
    {
      titulo: `Pintando a minha peça na tela`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o quadradinho de cor no alto do Bambu Studio, perto do desenho do carretel. Clique nele, abra a paleta e escolha uma cor. Peça que cada criança repita na própria peça enquanto você caminha pela sala conferindo. Reforce que isso muda só a cor da tela.`,
      atividade: `No Bambu Studio, ache o quadradinho de cor lá em cima e clique nele. Escolha a cor que você mais gosta para a sua peça e veja ela ficar pintada na tela.`,
      gabarito: `A criança acertou se a peça na pré-visualização mudou para a cor escolhida por ela. O professor confere olhando a tela: a peça aparece colorida com a cor selecionada na paleta.`,
    },
    {
      titulo: `Panquecas finas ou grossas`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Demonstre o menu de altura de camada na barra de cima. Troque entre 0.28mm Draft e 0.12mm Fine, narrando que número menor é mais lisinho e mais demorado. Peça que cada aluno deixe a peça em 0.20mm Standard, o padrão da turma. Ajude quem não achar o menu.`,
      atividade: `Abra o menu de qualidade da camada lá em cima e experimente trocar entre o número grande e o número pequeno. Depois deixe a sua peça no padrão da turma, que é 0.20mm Standard.`,
      gabarito: `A criança acertou se conseguiu abrir o menu, experimentou pelo menos duas alturas diferentes e deixou a peça em 0.20mm Standard ao final. O professor confere vendo o valor selecionado no menu de altura de camada.`,
    },
    {
      titulo: `Quanto favo de mel por dentro`,
      tipo: `desafio na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre a aba Process e o campo Sparse infill density. Explique que é o favo de mel por dentro da peça. Ajude cada criança a digitar 15 por cento. Aproveite a peça cortada ao meio para mostrar o vazio por dentro. Evite que coloquem 100 por cento.`,
      atividade: `Vá na aba Process e procure o preenchimento (Sparse infill density). Coloque 15 por cento, que deixa a sua peça leve, rápida e firme para brincar.`,
      gabarito: `A criança acertou se o valor de Sparse infill density ficou em 15 por cento (ou bem perto, entre 10 e 20). O professor confere olhando o campo de preenchimento na aba Process com o número certo digitado.`,
    },
    {
      titulo: `Lendo o relógio da impressão`,
      tipo: `desafio na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada aluno clique em Slice plate e leia em voz alta, no canto da tela, o tempo estimado e os gramas de filamento. Para quem terminar, proponha fatiar a mesma peça com 0.28mm e depois 0.12mm e dizer qual demora mais. Ajude a ler os números.`,
      atividade: `Clique em Slice plate para fatiar a sua peça. Depois ache o tempo estimado no canto da tela e leia em voz alta quanto tempo a sua impressão vai demorar.`,
      gabarito: `A criança acertou se conseguiu clicar em Slice plate e ler o tempo estimado mostrado pelo programa. Quem fez o desafio deve dizer corretamente que a camada 0.12mm demora mais que a 0.28mm. O professor confere o tempo no canto da tela.`,
    },
    {
      titulo: `Roda do pronto e seguro`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Chame cada aluno ao projetor para mostrar a sua peça e dizer as três escolhas: a cor, a qualidade da camada e o preenchimento, além do tempo estimado. Confirme com a turma que a peça está fatiada e pronta. Conduza os aplausos e entregue o adesivo.`,
      atividade: `Mostre a sua peça para a turma e conte as suas escolhas: qual cor, qual qualidade de camada e quanto de preenchimento. Diga também o tempo estimado e confirme que a sua peça está pronta e segura para imprimir.`,
      gabarito: `O aluno teve sucesso se explicou, com as próprias palavras, as três configurações escolhidas (cor, camada e preenchimento), leu o tempo estimado e confirmou que a peça está fatiada e pronta. Todos devem conseguir, com ajuda do professor, deixar a peça confirmada como pronta e segura.`,
    },
  ],
};
