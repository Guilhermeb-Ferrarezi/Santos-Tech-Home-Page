import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "De olho na impressão: cuidar e anotar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança vai aprender a observar a qualidade da peça enquanto ela é impressa, perceber sinais de que algo pode dar errado e registrar tudo num diário de bordo.`,
  descricao: `Nesta aula a turma deixa de só apertar o play e passa a ser fiscal da própria impressão. Nas aulas anteriores cada aluno fatiou a peça, conheceu a impressora Bambu Lab e começou a imprimir. Agora a impressora está trabalhando sozinha por muitos minutos, e é aí que entra um trabalho importante: olhar com atenção, camada por camada, para ver se está tudo saindo bonito. Imprimir em 3D é parecido com cozinhar um bolo no forno: a gente não abre o forno toda hora, mas fica de olho pela janelinha para ver se está crescendo direito.

O coração da aula é aprender a enxergar sinais. Uma impressão boa tem camadas bem coladas, paredes lisas e a peça firme na mesa (a base aquecida onde tudo é construído). Uma impressão com problema pode mostrar fios soltos voando no ar (a gente chama de cabelinho), uma peça que descolou e começou a balançar, ou camadas tortas que parecem escorregar para o lado. As crianças vão aprender o nome desses sinais e o que cada um quer dizer, sem precisar mexer em nada perigoso: o trabalho delas é observar e avisar o professor.

Por que isso importa? Porque uma peça leva tempo para ficar pronta, e quanto antes a gente percebe um problema, mais fácil é resolver. Um bom criador não some depois de apertar o play; ele acompanha. Além disso, observar com calma treina paciência e atenção aos detalhes, duas coisas que valem para games, para 3D e para a vida toda. As crianças também sentem orgulho ao ver a peça delas crescendo de verdade, milímetro por milímetro.

Na prática, cada aluno vai acompanhar a própria impressão (ou uma impressão de exemplo) olhando a impressora de verdade e a tela do Bambu Studio, que mostra a porcentagem já feita, o tempo que falta e a altura das camadas. Depois, cada criança preenche um diário de bordo de papel: anota quanto por cento já imprimiu, como a peça está ficando e se viu algum sinal estranho. No fim, todos compartilham o que observaram.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com o Bambu Studio aberto e conectado à impressora, mostrando a aba de monitoramento da impressão em andamento.`,
    `Projetor ou TV grande ligada no computador do professor, para todos verem a tela do Bambu Studio e a câmera da impressora.`,
    `A impressora Bambu Lab realmente imprimindo durante a aula (a peça de alguma criança ou uma peça de demonstração começada antes), para olhar de pertinho com segurança.`,
    `Exemplos prontos de peças boas e de peças com defeito (uma com cabelinho/fios soltos, uma que descolou da mesa, uma com camadas tortas) para as crianças tocarem e compararem.`,
    `Uma folha impressa do diário de bordo para cada aluno, com espaços para porcentagem, desenho da peça e marcação dos sinais observados.`,
    `Lápis, borracha e lápis de cor para preencher e desenhar no diário de bordo.`,
    `Fotos ou vídeos curtos no projetor mostrando os sinais de problema em close, para a turma reconhecer antes de procurar na impressora real.`,
  ],
  conceitosChave: [
    `Diário de bordo — um caderninho onde a gente anota o que vê na impressão, como um diário de viagem da peça.`,
    `Camada — uma fininha fatia de plástico; a peça cresce empilhando uma camada em cima da outra, igual a panquecas.`,
    `Porcentagem — um número de 0 a 100 que mostra quanto da peça já ficou pronta; 50 por cento é metade.`,
    `Cabelinho (string) — fios bem finos de plástico que ficam soltos no ar entre as partes da peça, como teia de aranha.`,
    `Descolar (warping) — quando a peça solta da mesa e levanta as pontinhas, deixando de ficar firme.`,
    `Mesa aquecida — a base quentinha onde a peça é construída; ela esquenta para o plástico grudar bem.`,
    `Monitorar — ficar de olho com atenção, observando se está tudo certo enquanto a máquina trabalha.`,
  ],
  treinamento: `## O que o professor precisa saber

Monitorar uma impressão é simplesmente acompanhar a peça enquanto ela é feita e comparar o que você vê com o que era esperado. Você não precisa ser especialista: precisa conhecer três sinais bons e três sinais ruins, e saber onde a tela do Bambu Studio mostra o progresso.

No Bambu Studio, quando uma impressão está em andamento, existe uma aba ou botão chamado Device (Dispositivo). Clicando nele você vê a tela de monitoramento: a imagem da câmera da impressora, a porcentagem concluída, o tempo restante (estimated time) e qual camada está sendo feita (layer). Na própria impressora Bambu Lab, a telinha touch também mostra esses mesmos números. Antes da aula, abra o Bambu Studio, clique em Device e localize a porcentagem e o tempo restante, para mostrar com segurança.

Os três sinais bons: camadas bem coladas (paredes lisas, sem buracos), peça firme e grudada na mesa, e a primeira camada (first layer) larga e bem assentada. Os três sinais de alerta: cabelinho (fios finos soltos no ar), peça descolando da mesa (cantos levantados, a peça balança), e camadas tortas ou deslocadas (parecem escorregar para o lado). Importante: as crianças apenas observam e avisam. Quem abre a tampa, pausa ou mexe na máquina é o professor.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Bambu Studio)

Aquecimento (10 min): Reúna a turma perto da impressora ligada. Pergunte: como vocês acham que está indo a peça? Mostre no projetor um exemplo de peça boa e um de peça com defeito e deixe a turma adivinhar qual é qual. Relembre que na aula passada apertaram o play; hoje vão cuidar.

Conteúdo novo guiado (15 min): No projetor, abra o Bambu Studio e clique na aba Device (Dispositivo). Aponte com o cursor a porcentagem concluída, o tempo restante (estimated time) e o número da camada (layer). Mostre a imagem da câmera. Depois leve a turma até a impressora real e mostre os mesmos números na telinha touch. Apresente os três sinais bons e os três sinais de alerta, usando as fotos em close e os exemplos prontos para as crianças tocarem.

Mão na massa (25 min): Cada criança (ou dupla) acompanha a própria impressão ou a de demonstração. No computador, abre o Bambu Studio, clica em Device e lê a porcentagem. Depois preenche o diário de bordo: escreve a porcentagem, desenha como a peça está e marca com um X se viu algum sinal de alerta. Circule ajudando a ler os números e a nomear o que veem. Quem terminar pode observar a peça do colega e comparar.

Desafio + compartilhar (10 min): Peça que cada criança mostre o diário e diga em voz alta a porcentagem e um sinal que observou. Lance o desafio: quem consegue prever quanto tempo falta olhando o estimated time? Comemore as boas observações.

## Como explicar para crianças

Use a analogia do bolo no forno: a gente não fica abrindo o forno, mas espia pela janelinha para ver se cresce. A impressora é o forno e a câmera é a janelinha. Para camada, empilhe as duas mãos como panquecas, uma sobre a outra. Para porcentagem, diga metade pronta quando der 50. Cabelinho vira teia de aranha boba; descolar vira a peça soltando o pezinho da mesa. Evite palavras técnicas demais: diga sinal bom e sinal de cuidado em vez de defeito. Reforce sempre: a gente olha e avisa, quem mexe é o professor.

## Erros comuns e como ajudar

O erro mais comum é a criança querer tocar na peça quente ou abrir a tampa; combine antes que ninguém encosta na máquina. Outra confusão é trocar porcentagem por tempo: mostre que a porcentagem é quanto já fez e o tempo é quanto falta. Algumas crianças acham que todo fiozinho é problema; explique que um cabelinho pequeno é normal, e que o que preocupa é muito fio. Há quem desanime achando lento; lembre que peça boa leva tempo, como plantar. Se alguém não achar a porcentagem na tela, mostre de novo o caminho: aba Device, número grande em por cento.`,
  exercicios: [
    {
      titulo: `Caça aos números na tela`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `No projetor, mostre a aba Device do Bambu Studio e aponte a porcentagem e o tempo restante. Depois deixe cada criança achar os mesmos números no próprio computador. Confira um a um.`,
      atividade: `Cada criança abre o Bambu Studio, clica na aba Device (Dispositivo) e descobre dois números: a porcentagem já impressa e o tempo que falta (estimated time), dizendo cada um em voz alta.`,
      gabarito: `Acertou quem aponta corretamente a porcentagem concluída e o tempo restante na tela Device. Por exemplo, dizer 40 por cento pronto e faltam 25 minutos, lendo os valores reais que aparecem na tela naquele momento.`,
    },
    {
      titulo: `Sinal bom ou sinal de cuidado?`,
      tipo: `observação e classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Espalhe os exemplos prontos (peça boa, peça com cabelinho, peça descolada, peça com camadas tortas) e as fotos em close. Mostre um por vez e pergunte para a turma se é sinal bom ou de cuidado, dizendo o nome.`,
      atividade: `Para cada peça ou foto mostrada, a criança diz se é um sinal bom ou um sinal de cuidado e tenta dar o nome (camadas bem coladas, cabelinho, descolar ou camadas tortas).`,
      gabarito: `Acertou quem classifica a peça lisa e firme como sinal bom, e reconhece o cabelinho, a peça descolada e as camadas tortas como sinais de cuidado, nomeando pelo menos dois deles corretamente.`,
    },
    {
      titulo: `Preenchendo o diário de bordo`,
      tipo: `registro escrito`,
      tempo: `12 minutos`,
      guiaProfessor: `Entregue a folha do diário de bordo. Mostre no quadro um exemplo preenchido: porcentagem, desenho da peça e o X no sinal observado. Circule ajudando a ler os números do Bambu Studio e a escrever.`,
      atividade: `Cada criança preenche o diário de bordo da sua peça: anota a porcentagem já impressa, desenha como a peça está naquele momento e marca com um X se viu algum sinal de alerta.`,
      gabarito: `Acertou quem registra uma porcentagem coerente com a tela, faz um desenho que lembra a peça em construção e marca corretamente se houve ou não sinal de alerta. O diário deve ter os três campos preenchidos.`,
    },
    {
      titulo: `Detetive da impressora`,
      tipo: `observação guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Leve a turma, em pequenos grupos e a uma distância segura, para olhar a impressora trabalhando de verdade pela câmera e pela tampa. Faça perguntas: a peça está grudada? Tem fio voando? As camadas estão retas?`,
      atividade: `Observando a impressora real (sem encostar), a criança procura pelo menos um sinal e conta para o professor o que viu, dizendo se parece bom ou de cuidado.`,
      gabarito: `Acertou quem descreve com suas palavras um sinal real observado, como a peça está bem grudada na mesa ou vi um fiozinho aqui, e classifica esse sinal como bom ou de cuidado sem ter tocado na máquina.`,
    },
    {
      titulo: `Previsão do criador`,
      tipo: `desafio de raciocínio`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o tempo restante (estimated time) na tela. Peça que cada criança preveja em quanto tempo a peça vai chegar a 100 por cento e o que ela acha que precisa continuar de olho até o fim. Anote as previsões.`,
      atividade: `A criança olha o tempo restante na tela, prevê quanto tempo falta para a peça ficar pronta (100 por cento) e diz um sinal que vai continuar vigiando até o fim da impressão.`,
      gabarito: `Acertou quem usa o estimated time da tela para dar uma previsão próxima do número mostrado (por exemplo, faltam uns 30 minutos quando a tela mostra 28) e cita um sinal para vigiar, como ver se a peça continua grudada na mesa.`,
    },
  ],
};
