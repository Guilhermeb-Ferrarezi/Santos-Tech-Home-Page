import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Acompanhando a Impressora ao Vivo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Observar as primeiras camadas da impressão do próprio personagem, reconhecer falhas comuns como warping, descolamento e sub-extrusão, e aprender quando pausar ou ajustar a impressora.`,
  descricao: `Nas aulas anteriores deste mês, os alunos saíram do Blender, importaram o personagem no Orca Slicer, descobriram os segredos do fatiamento e configuraram suportes e aderência na mesa. Na aula passada, eles prepararam a impressão de verdade e enviaram o arquivo para a impressora. Agora chega o momento mais emocionante e também mais delicado da impressão 3D: acompanhar a máquina trabalhando ao vivo, camada por camada, vendo o personagem nascer fio a fio de plástico derretido.

A grande ideia desta aula é que as primeiras camadas decidem o sucesso da impressão. É como a fundação de uma casa: se a base não gruda direito na mesa, tudo o que vem depois vem torto ou desaba. Por isso o aluno aprende a ser um observador atento nos primeiros minutos. Ele vai reconhecer três falhas clássicas: o warping, quando os cantos da peça levantam e se enrolam; o descolamento, quando a peça inteira solta da mesa e passa a ser arrastada pelo bico; e a sub-extrusão, quando sai menos plástico do que deveria e a camada fica falhada, cheia de buraquinhos.

Esta aula é totalmente prática e de observação. O professor mostra a impressora real funcionando e, em paralelo, usa a tela do Orca Slicer e o painel da impressora para explicar o que está acontecendo. Os alunos aprendem a usar a câmera ou a janela de monitoramento, a ler a porcentagem de progresso e a temperatura, e a reconhecer o som e o aspecto de uma impressão saudável. Mais importante, aprendem quando agir: pausar a impressão, ajustar a vazão (flow) ou a velocidade, ou parar para limpar a mesa e recomeçar.

O entregável do mês é a peça impressa do próprio personagem. Saber acompanhar a impressora ao vivo é o que separa uma peça bonita de um amontoado de plástico falhado. Ao final desta aula, o aluno deixa de ser apenas quem aperta o botão de imprimir e passa a ser alguém que entende a máquina, percebe um problema cedo e sabe intervir com segurança, sempre com a supervisão do professor.`,
  materiais: [
    `Impressora 3D real ligada, com a impressão do personagem de um aluno (ou uma peça de demonstração) iniciando as primeiras camadas durante a aula`,
    `Computadores (um por aluno) com o Orca Slicer instalado e aberto no projeto do personagem, para consultar tempo, camadas e configurações`,
    `Projetor ou TV mostrando a tela do professor: aba Device (Dispositivo) do Orca Slicer ou o painel de monitoramento da impressora`,
    `Imagens ou vídeos curtos de exemplo mostrando warping, descolamento e sub-extrusão, para comparação`,
    `Lanterna pequena ou luz extra para iluminar a mesa de impressão e ver bem a primeira camada`,
    `Cartaz com a frase-chave "As primeiras camadas decidem tudo" e a lista das três falhas`,
    `Cronômetro ou timer visível para controlar o ritmo de 10 / 15 / 25 / 10 minutos`,
  ],
  conceitosChave: [
    `Primeira camada — a camada de base da peça, colada diretamente na mesa; se ela falhar, toda a impressão falha.`,
    `Warping — empenamento; quando os cantos da peça esfriam, encolhem e levantam da mesa, deixando a base torta.`,
    `Descolamento — quando a peça inteira solta da mesa e passa a ser empurrada pelo bico, virando uma bagunça de plástico.`,
    `Sub-extrusão — quando sai menos plástico do que o necessário e a camada fica falhada, com falhas e buracos finos.`,
    `Monitoramento — acompanhar a impressão ao vivo pela tela do Orca Slicer ou pelo painel da impressora, observando progresso, temperatura e camadas.`,
    `Pausar e ajustar — interromper a impressão com segurança para limpar a mesa, mudar a vazão (flow) ou a velocidade antes de continuar.`,
    `Flow (vazão) — a quantidade de plástico que o bico empurra; aumentar um pouco ajuda quando há sub-extrusão.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula; precisa saber observar e ter calma. O segredo é simples: as primeiras três a cinco camadas mostram se a impressão vai dar certo. Uma primeira camada saudável é lisa, bem grudada e sem buracos, com as linhas de plástico encostadas umas nas outras. Antes da aula, inicie a impressão do personagem de um aluno (ou uma peça de teste) com alguns minutos de antecedência para a mesa e o bico já estarem aquecidos quando a turma chegar. No Orca Slicer, conheça a aba Device (ou Monitor/Dispositivo), onde aparecem a câmera, a temperatura do bico e da mesa, a porcentagem de progresso e o número da camada atual. Saiba onde ficam os botões Pause (Pausar), Resume (Retomar) e Stop (Parar) — eles podem estar na tela do Orca ou no painel físico da impressora. Tenha cuidado com segurança: o bico passa de 200 graus; ninguém encosta na máquina sem você.

## Passo a passo da aula

Aquecimento e revisão (10 min): com o projetor ligado, relembre a aula anterior — "Vocês prepararam e enviaram a impressão. O que será que está acontecendo agora dentro da máquina?". Mostre a impressora trabalhando. Escreva no quadro "As primeiras camadas decidem tudo" e apresente as três vilãs: warping, descolamento e sub-extrusão.

Conteúdo novo guiado (15 min): no seu computador, abra o Orca Slicer e clique na aba Device (Dispositivo), no topo, ao lado da aba Prepare e Preview. Mostre a imagem da câmera, a temperatura do bico e da mesa e a porcentagem de progresso. Aponte o número da camada atual. Em seguida, leve a turma até a impressora e use a lanterna para iluminar a primeira camada: mostre como ela deve estar lisa e grudada. Exiba as imagens de exemplo e compare: aqui um canto levantado (warping), ali uma camada falhada e cheia de buracos (sub-extrusão). Mostre onde ficam os botões Pause, Resume e Stop no Orca e no painel da máquina, explicando que só você os aciona.

Mão na massa (25 min): com a impressão rodando, cada aluno abre a aba Device no próprio Orca e acompanha o progresso, anotando numa folha a temperatura do bico, a temperatura da mesa, a camada atual e a porcentagem. Em rodízio de dois em dois, vão até a impressora observar de perto a primeira camada com a lanterna e descrever o que veem. Peça que classifiquem: "A impressão está saudável ou tem sinal de falha?". Se aparecer um problema de verdade, transforme em demonstração ao vivo de como pausar e ajustar.

Desafio e compartilhar (10 min): mostre na tela grande as imagens de falhas embaralhadas e desafie a turma a nomear cada uma e dizer o que fazer. Depois, dois ou três alunos apresentam suas anotações e contam como está a impressão do personagem deles.

## Como explicar de forma clara

Use comparações do dia a dia. A primeira camada é a fundação da casa: torta embaixo, torta em cima. O warping é como uma folha de papel molhada que seca e encurva nas pontas. O descolamento é como um adesivo que não grudou e sai inteiro. A sub-extrusão é como uma caneta que está secando e falha no traço. Sempre nomeie em voz alta a falha enquanto aponta na tela ou na peça. Evite termos só em inglês sem traduzir: diga "warping, o empenamento". Reforce que observar é parte do trabalho de quem cria com tecnologia, e que perceber um problema cedo é sinal de esperteza, não de erro.

## Erros comuns e como ajudar

O erro mais comum dos alunos é querer encostar na impressora quente; deixe a regra clara desde o início: olhar pode, tocar não. Outro é confundir as falhas — chamar tudo de "deu errado"; ajude pedindo que descrevam o que veem (canto levantado? buracos? peça solta?) antes de nomear. Muitos não acham a aba Device no Orca; mostre que fica no topo, ao lado de Prepare e Preview, e que só aparece com a impressora conectada. Há quem queira pausar a impressão por curiosidade, sem necessidade; explique que pausar sem motivo pode deixar marcas na peça. Por fim, alguns confundem o ralo natural do começo (a "saia" ou skirt e os suportes) com defeito; mostre que essas linhas extras são normais e fazem parte do plano de impressão.`,
  exercicios: [
    {
      titulo: `Lendo o painel ao vivo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu a aba Device no Orca Slicer com a impressora conectada. Ajude quem não encontrar a aba ou cuja impressora não conecte (use a tela do professor como referência comum).`,
      atividade: `Abra a aba Device (Dispositivo) no Orca Slicer e anote numa folha quatro informações da impressão em andamento: temperatura do bico, temperatura da mesa, número da camada atual e porcentagem de progresso.`,
      gabarito: `O aluno registra os quatro valores corretos lidos na tela, por exemplo: bico em torno de 210 graus, mesa em torno de 60 graus, camada atual (ex.: camada 7) e progresso em porcentagem (ex.: 12 por cento). Os números variam conforme a impressora e o momento, mas os quatro campos devem estar preenchidos e coerentes com o painel.`,
    },
    {
      titulo: `Saudável ou com falha?`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre na tela grande imagens embaralhadas de primeira camada boa, warping, descolamento e sub-extrusão. Conduza para que o aluno justifique a escolha com o que está vendo, não apenas chute.`,
      atividade: `Para cada imagem que o professor mostrar, escreva se a impressão está saudável ou com falha e, se houver falha, qual das três é: warping, descolamento ou sub-extrusão.`,
      gabarito: `Camada lisa e bem grudada = saudável. Cantos levantados e enrolados = warping. Peça inteira solta e arrastada pelo bico = descolamento. Camada com linhas falhadas e buracos finos = sub-extrusão. O aluno acerta o nome da falha de cada imagem e identifica corretamente a saudável.`,
    },
    {
      titulo: `Observação em dupla na máquina`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Organize as duplas em rodízio na impressora, com a regra de olhar sem tocar. Entregue a lanterna e oriente a iluminar a primeira camada. Cada dupla observa por cerca de um minuto.`,
      atividade: `Em dupla, vá até a impressora, ilumine a primeira camada com a lanterna e descreva em voz alta para o colega: as linhas estão grudadas? Há buracos? Algum canto levantou? Concluam juntos se a impressão está saudável.`,
      gabarito: `A dupla descreve a primeira camada usando os critérios certos (linhas encostadas, sem buracos, sem cantos levantados) e chega a uma conclusão coerente com o que observou. Numa impressão boa, a resposta esperada é "saudável: linhas grudadas, sem buracos e sem cantos levantados".`,
    },
    {
      titulo: `Roda de conversa: parar ou continuar?`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda. Apresente situações faladas e conduza a decisão em grupo, reforçando que só o professor aciona Pause, Resume ou Stop e que pausar sem motivo pode marcar a peça.`,
      atividade: `Para cada situação que o professor contar, a turma decide em conjunto: deixar continuar, pausar para ajustar ou parar e recomeçar. Exemplos: um canto levantou um pouco; a peça inteira soltou da mesa; a camada está cheia de buracos.`,
      gabarito: `Canto levantando pouco = observar e, se piorar, pausar para checar a aderência (continuar com atenção). Peça inteira solta da mesa = parar (Stop), limpar a mesa e recomeçar, pois a impressão está perdida. Camada cheia de buracos (sub-extrusão) = pausar e ajustar, aumentando um pouco o flow (vazão) ou checando o filamento. As respostas devem ligar cada falha à ação certa.`,
    },
    {
      titulo: `Diário de bordo da minha impressão`,
      tipo: `Projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça um pequeno registro escrito sobre a impressão do personagem do próprio aluno. Oriente a usar os termos da aula. Ajude quem ainda não teve a peça impressa a observar a de um colega ou a de demonstração.`,
      atividade: `Escreva um mini diário de bordo da impressão do seu personagem com três partes: (1) como estava a primeira camada, (2) se você viu algum sinal de warping, descolamento ou sub-extrusão, e (3) o que faria se aparecesse uma falha.`,
      gabarito: `Diário completo com as três partes preenchidas e usando os termos corretos. Exemplo válido: "(1) A primeira camada estava lisa e bem grudada. (2) Não vi falhas, a peça está saudável. (3) Se aparecesse warping, eu avisaria o professor para checar a aderência da mesa; se fosse sub-extrusão, ele aumentaria um pouco o flow." Aceita-se qualquer registro coerente que descreva a observação e ligue cada falha a uma ação sensata.`,
    },
  ],
};
