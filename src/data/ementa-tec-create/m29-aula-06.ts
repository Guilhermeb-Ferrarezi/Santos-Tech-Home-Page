import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Mãos à Obra: Imprimindo os Personagens",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Gerar o arquivo final fatiado no Bambu Studio, enviá-lo para a impressora 3D e acompanhar o início da impressão, observando a primeira camada, o uso de filamento e o tempo estimado de cada personagem do jogo.`,
  descricao: `Chegou o momento mais esperado do mês: ver o personagem do jogo, que nasceu no Maya e foi preparado nas aulas anteriores, começar a virar um objeto de verdade. Nas aulas passadas os alunos resgataram os modelos, conheceram o Bambu Studio, ajustaram o tamanho e a posição na mesa e aprenderam o segredo do fatiamento (slicing). Agora é a hora de apertar o botão e enviar tudo para a impressora 3D.

Nesta aula o foco é prático e cheio de emoção. Cada aluno abre o seu projeto já preparado, confere os ajustes, clica em fatiar uma última vez e gera o arquivo final, que no Bambu Studio costuma ter a extensão .3mf ou .gcode. Esse arquivo é como uma "lista de instruções" que diz à impressora exatamente para onde mover o bico, quanto plástico derretido depositar e em que ordem construir cada camada. Em seguida, o aluno envia o trabalho para a impressora, pela rede (Wi-Fi) ou por um cartão de memória, e acompanha o início da impressão.

O grande aprendizado do dia é a leitura das informações que aparecem na tela antes de imprimir: o tempo estimado (quanto tempo aquele personagem vai levar), o peso e o comprimento de filamento que serão gastos e o número de camadas. Esses números ajudam o aluno a entender que a impressão 3D é paciente: um personagem pequeno pode levar de trinta minutos a algumas horas. Por isso, é comum começar a impressão na aula e deixá-la terminando depois, com o professor acompanhando.

O momento mágico é observar a primeira camada nascendo na mesa de impressão. A primeira camada é a base de tudo: se ela gruda bem na placa, o resto da impressão tende a dar certo. Os alunos vão olhar de perto (com segurança, sem encostar nas partes quentes) e perceber as linhas de plástico se formando, uma ao lado da outra, desenhando o contorno do personagem. É a hora em que o jogo, finalmente, começa a existir no mundo real.`,
  materiais: [
    `Computadores (um por aluno) com o Bambu Studio instalado e aberto, já com o projeto do personagem preparado e posicionado nas aulas anteriores`,
    `Impressora 3D ligada, calibrada e com filamento carregado (uma para a turma ou conforme a quantidade disponível na escola)`,
    `Projetor ou TV ligada ao computador do professor para mostrar, na tela grande, onde clicar para fatiar e enviar a impressão`,
    `Arquivo de exemplo de um personagem simples já preparado (formato de projeto do Bambu Studio) para o professor demonstrar o passo a passo do envio`,
    `Cartão de memória (microSD) compatível com a impressora, caso o envio não seja por Wi-Fi`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
    `Folha impressa de apoio com os botões na ordem: "Slice plate" (Fatiar), "Print" / "Send" (Imprimir / Enviar) e onde ler tempo, peso e camadas`,
  ],
  conceitosChave: [
    `Fatiar (Slice) — transformar o modelo 3D em camadas finas e gerar as instruções que a impressora vai seguir para construir o objeto.`,
    `Arquivo G-code — o arquivo final, com a "lista de instruções" exata de movimentos e quantidade de plástico para a impressora; no Bambu Studio costuma sair como .3mf ou .gcode.`,
    `Primeira camada — a base que a impressora deposita primeiro na mesa; se ela gruda bem, a impressão inteira tende a dar certo.`,
    `Tempo estimado — a previsão de quanto tempo a impressora vai levar para terminar aquele personagem, mostrada na tela depois de fatiar.`,
    `Uso de filamento — a quantidade de plástico (em gramas e em metros) que será gasta na impressão, exibida junto do tempo estimado.`,
    `Mesa de impressão (placa) — a superfície aquecida onde o objeto é construído camada por camada; precisa estar limpa para a primeira camada grudar.`,
    `Enviar para a impressora — a ação de mandar o arquivo fatiado para a máquina, pela rede Wi-Fi ou por cartão de memória, para a impressão começar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para conduzir esta aula. Precisa entender o caminho de três passos: fatiar, enviar e observar. Fatiar é o Bambu Studio pegar o modelo 3D e cortá-lo em centenas de camadas finas, gerando o arquivo que a impressora entende. Enviar é mandar esse arquivo para a máquina, pelo Wi-Fi ou por um cartão de memória. Observar é acompanhar a primeira camada e ler os números na tela: tempo estimado, gramas e metros de filamento e número de camadas. Antes da aula, faça o caminho completo uma vez em casa ou na escola: abra um projeto pronto, clique no botão "Slice plate" (Fatiar), veja o tempo e o peso aparecerem, depois clique em "Print" (ou "Send") e acompanhe a primeira camada. Atenção à segurança: o bico e a mesa ficam quentes; ninguém encosta neles. Tenha um plano para o tempo: como cada personagem leva de trinta minutos a horas, comece na aula e deixe terminando depois.

## Passo a passo da aula

Aquecimento (10 min): com o projetor ligado, retome o que já foi feito: "O personagem está posicionado e fatiamos na aula passada. Hoje a gente imprime de verdade." Pergunte: "O que será que a impressora precisa saber para construir o boneco?" Conduza até a ideia de instruções camada por camada. Escreva no quadro: Fatiar, Enviar, Observar.

Conteúdo novo guiado (15 min): no seu Bambu Studio, com o projeto aberto, mostre o botão "Slice plate" (Fatiar) no canto e clique. Aponte na tela o tempo estimado, o peso (em gramas) e o comprimento (em metros) de filamento que aparecem. Mostre a prévia em camadas e arraste a barrinha lateral para ver o objeto sendo construído de baixo para cima. Depois clique em "Print" (ou "Send" se for por Wi-Fi); se for por cartão, mostre "Export G-code file" e onde salvar. Vá até a impressora e mostre a primeira camada começando, reforçando a regra de não encostar nas partes quentes.

Mão na massa (25 min): cada aluno abre o próprio projeto, confere o tamanho e a posição, clica em "Slice plate" e anota numa folha o tempo estimado, o peso e o número de camadas do seu personagem. Em seguida, organize a fila da impressora: um de cada vez envia o arquivo (ou exporta para o cartão) e a turma observa juntos a primeira camada de cada peça nascer. Circule garantindo que todos consigam fatiar e ler os números, mesmo que nem todos imprimam na hora.

Desafio e compartilhar (10 min): peça que comparem os números entre os personagens: "Quem tem o boneco que demora mais? Quem gasta mais filamento? Por quê?" Dois ou três alunos mostram a prévia em camadas na tela grande e dizem o tempo e o peso do seu personagem.

## Como explicar de forma clara

Use comparações do dia a dia. Para fatiar: "É como cortar um pão de forma em fatias; a impressora monta o personagem empilhando uma fatia de plástico em cima da outra." Para o arquivo G-code: "É a lista de instruções, igual a uma receita de bolo, dizendo para onde mover e quanto plástico colocar." Para a primeira camada: "É o alicerce da casa; se a base gruda firme, o resto sobe bem." Sempre diga o nome do botão em inglês com a tradução ao lado ("Slice plate, que é Fatiar"). E valorize a paciência: a impressão 3D é devagar de propósito, porque é assim que ela fica caprichada.

## Erros comuns e como ajudar

O erro mais comum é o aluno mexer no modelo depois de fatiar e esquecer de fatiar de novo; lembre que toda mudança pede um novo "Slice plate". Outro é não achar os números porque não fatiou ainda; o tempo e o peso só aparecem depois do fatiamento. Alguns confundem "Export G-code" com "Print": explique que exportar salva no cartão e imprimir manda direto pela rede. Há quem tente enviar dois trabalhos ao mesmo tempo para a mesma impressora; organize uma fila clara. Se a primeira camada não grudar e o plástico vier solto, oriente a pausar, limpar a mesa e conferir se a peça está bem apoiada (sem flutuar acima da placa). Por fim, reforce sempre a segurança: ninguém toca no bico nem na mesa quente.`,
  exercicios: [
    {
      titulo: `Fatiar e ler os números`,
      tipo: `Prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe cada aluno até clicar em "Slice plate" e localizar, na tela, o tempo estimado, o peso em gramas e o comprimento em metros de filamento. Garanta que anotem esses valores numa folha.`,
      atividade: `No Bambu Studio, com o seu personagem aberto, clique em "Slice plate" (Fatiar). Depois encontre na tela e anote três informações: o tempo estimado, o peso do filamento (em gramas) e o comprimento do filamento (em metros).`,
      gabarito: `O aluno fatia o modelo e, após o fatiamento, lê e anota os três valores que aparecem na área de informações do Bambu Studio: o tempo estimado (por exemplo, "1h 20min"), o peso (por exemplo, "8 g") e o comprimento (por exemplo, "2,7 m"). Sem clicar em "Slice plate" primeiro, esses números não aparecem.`,
    },
    {
      titulo: `Viajando pelas camadas`,
      tipo: `Desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre a prévia de fatiamento e a barrinha lateral que percorre as camadas. Peça que o aluno arraste do começo (camada 1) ao topo e observe o personagem sendo construído de baixo para cima. Pergunte qual parte é impressa primeiro.`,
      atividade: `Depois de fatiar, entre na prévia em camadas e arraste a barrinha lateral da primeira até a última camada. Observe o personagem se formando de baixo para cima e descubra quantas camadas ele tem e qual parte é impressa primeiro.`,
      gabarito: `Ao arrastar a barra de camadas, o aluno vê o objeto surgir de baixo para cima e identifica que a primeira camada é a base do personagem (a parte que toca a mesa, normalmente os pés ou a área de apoio). Ele também lê o número total de camadas mostrado pelo Bambu Studio. A última camada exibe o personagem completo.`,
    },
    {
      titulo: `Enviar ou exportar?`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e explique as duas formas de levar o arquivo até a impressora: "Print" / "Send" (pela rede Wi-Fi) e "Export G-code file" (salvar no cartão de memória). Deixe cada dupla decidir e executar a opção disponível na sua escola.`,
      atividade: `Em dupla, decidam como o arquivo do personagem vai chegar à impressora: se for por Wi-Fi, cliquem em "Print" (ou "Send"); se for por cartão, cliquem em "Export G-code file" e salvem no cartão de memória. Expliquem por que escolheram cada caminho.`,
      gabarito: `A dupla identifica corretamente os dois caminhos: "Print" / "Send" envia o arquivo direto pela rede Wi-Fi para a impressora, e "Export G-code file" salva o arquivo no cartão de memória para depois ser levado à máquina. Eles executam a opção disponível na escola e explicam a diferença com as próprias palavras.`,
    },
    {
      titulo: `O detetive da primeira camada`,
      tipo: `Observação guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Reúna a turma perto da impressora (com segurança, sem encostar nas partes quentes) para observar a primeira camada de uma peça nascendo. Conduza o olhar para as linhas de plástico se formando e para se elas estão grudando bem na mesa.`,
      atividade: `Observe, de perto e sem encostar, a primeira camada de um personagem sendo impressa. Responda: as linhas de plástico estão grudando bem na mesa? O contorno do personagem está aparecendo? O que aconteceria se a primeira camada não grudasse?`,
      gabarito: `O aluno descreve a primeira camada como linhas de plástico depositadas lado a lado, desenhando o contorno da base do personagem, e percebe se estão aderindo à mesa. Conclui que, se a primeira camada não grudar, o resto da impressão pode soltar, entortar ou falhar; por isso a base bem aderida é tão importante.`,
    },
    {
      titulo: `Comparando os personagens da turma`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada aluno traga os números anotados (tempo, peso e camadas) e ajude a turma a comparar. Conduza a percepção de que personagens maiores ou mais cheios gastam mais tempo e mais filamento. Deixe que justifiquem as diferenças.`,
      atividade: `Junte os números do seu personagem (tempo estimado, peso em gramas e número de camadas) e compare com os de pelo menos dois colegas. Monte uma pequena tabela e escreva uma frase explicando por que um personagem demora mais ou gasta mais filamento que o outro.`,
      gabarito: `O aluno organiza uma tabela simples com tempo, peso e camadas dos personagens comparados e identifica corretamente o que demora mais e o que gasta mais filamento. A frase de conclusão liga essas diferenças ao tamanho e ao volume das peças: personagens maiores, mais altos ou mais "cheios" por dentro têm mais camadas, levam mais tempo e consomem mais plástico que personagens pequenos ou ocos.`,
    },
  ],
};
