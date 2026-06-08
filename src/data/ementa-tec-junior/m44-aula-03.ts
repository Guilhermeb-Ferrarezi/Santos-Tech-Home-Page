import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Conhecendo a impressora Bambu Lab",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança conhece de perto as partes da impressora Bambu Lab, entende as regras de segurança com as partes quentes e descobre como o arquivo já fatiado viaja do computador até a máquina para virar um objeto de verdade.`,
  descricao: `Nesta aula, as crianças finalmente ficam frente a frente com a estrela do mês: a impressora 3D Bambu Lab. Nas aulas anteriores elas aprenderam que um modelo 3D do computador pode virar um objeto de verdade e treinaram a posicionar e fatiar a peça no Bambu Studio. Agora chegou a hora de olhar a máquina por dentro e por fora, conhecer o nome de cada parte e entender o que faz cada uma. É como conhecer um carro novo antes de dar a partida: a gente abre a porta, olha o volante, o pedal e o motor, e só depois liga.

A impressora tem quatro partes principais que as crianças precisam saber de cor: o bico (que esquenta muito e derrete o plástico), a bobina de filamento (o rolo de plástico colorido que alimenta a máquina, parecido com um carretel de linha gigante), a mesa de impressão (a chapa onde a peça nasce e cresce) e a tela (a telinha colorida na frente, onde a gente toca para escolher o que fazer). Quando a criança entende essas quatro partes, ela para de ter medo da máquina e começa a respeitá-la como uma ferramenta de verdade.

O ponto mais importante desta aula é a segurança. A impressora 3D não é um brinquedo: o bico chega a passar de 200 graus, quente o bastante para queimar a pele num piscar de olhos. A mesa também esquenta. Por isso a regra de ouro é simples e firme: a gente olha, mas não encosta nas partes quentes. O professor precisa repetir essa regra com calma e várias vezes, sem assustar, mas deixando claro que é coisa séria, do mesmo jeito que a gente respeita o fogão da cozinha de casa.

Por fim, as crianças vão entender como o arquivo fatiado, que elas prepararam na aula passada, sai do computador e chega na impressora. Esse arquivo pode ir por uma rede de wi-fi (sem fio, como uma mensagem voando pelo ar) ou dentro de um cartãozinho de memória. A máquina recebe esse arquivo, lê as instruções camada por camada e fica pronta para começar. Assim, a aula fecha o ciclo: o desenho virou arquivo, o arquivo virou instrução, e a instrução vai virar objeto.`,
  materiais: [
    `Uma impressora Bambu Lab montada e ligada, em uma mesa segura, para a turma observar de perto (sem encostar nas partes quentes)`,
    `Computadores (um por aluno ou em dupla) com o Bambu Studio aberto no projeto fatiado da aula passada`,
    `Projetor ou TV ligada ao computador do professor para mostrar a tela da impressora e o botão de enviar o arquivo`,
    `Exemplos de peças já impressas (um chaveiro, um bichinho, uma engrenagem) para passar de mão em mão`,
    `Um pedaço solto de filamento e uma bobina vazia para as crianças tocarem e sentirem o material com segurança`,
    `Cartões grandes com fotos das quatro partes (bico, bobina, mesa, tela) e uma plaquinha vermelha de "NÃO ENCOSTE — QUENTE"`,
    `Adesivos de estrela para premiar quem acertar os nomes das partes e as regras de segurança`,
  ],
  conceitosChave: [
    `Impressora 3D — uma máquina que constrói um objeto de verdade, derretendo plástico e empilhando camadas finas, uma em cima da outra.`,
    `Bico (ou hotend) — a pontinha que fica muito quente e derrete o filamento; é a parte mais perigosa, nunca se encosta nela.`,
    `Filamento — o fio grosso de plástico colorido, enrolado num rolo, que é a "tinta" da impressora 3D.`,
    `Bobina — o rolo redondo onde o filamento fica enrolado, parecido com um carretel de linha bem grande.`,
    `Mesa de impressão — a chapa lisinha onde a peça nasce e vai crescendo; também esquenta para a peça grudar.`,
    `Tela (tela touch) — a telinha colorida na frente da máquina, onde a gente toca com o dedo para escolher e começar a impressão.`,
    `Enviar a impressão — mandar o arquivo fatiado do computador para a impressora, pelo wi-fi sem fio ou por um cartão de memória.`,
  ],
  treinamento: `## O que o professor precisa saber

A Bambu Lab é uma impressora 3D do tipo FDM, que significa que ela derrete um fio de plástico (o filamento) e o deposita em camadas para construir a peça. Você não precisa ser especialista: basta conhecer quatro partes. O bico (hotend) é a ponta metálica que esquenta muito, normalmente acima de 200 graus, e derrete o plástico; é a parte mais perigosa. A bobina é o rolo de filamento que fica preso na lateral ou atrás da máquina e vai desenrolando para alimentar o bico. A mesa (ou plataforma) é a chapa onde a peça é construída; ela também aquece, em torno de 60 graus, para a peça grudar e não soltar. A tela touch fica na frente: é por ela que se inicia e se acompanha a impressão.

O arquivo fatiado que as crianças prepararam no Bambu Studio na aula anterior precisa chegar até a máquina. Há dois caminhos. O primeiro é por wi-fi: no Bambu Studio, depois de fatiar, aparece um botão escrito "Print" (Imprimir) ou "Send" (Enviar); ao clicar, o programa manda o arquivo pelo ar para a impressora conectada à mesma rede. O segundo caminho é por cartão de memória (microSD): clica-se em "Export" para salvar o arquivo, coloca-se o cartão na máquina e escolhe-se o arquivo pela tela touch. Nesta aula você só demonstra; apertar o play de verdade é assunto da Aula 4.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Bambu Studio)

AQUECIMENTO (10 min): Reúna a turma em volta da impressora, a uma distância segura. Mostre uma peça já impressa e pergunte: "Como será que essa máquina fez isso?". Relembre a aula passada: "Vocês fatiaram a peça no computador, lembram? Hoje vamos conhecer a máquina que vai construir ela de verdade".

CONTEÚDO NOVO GUIADO (15 min): Aponte para cada parte e diga o nome em voz alta, pedindo para a turma repetir: bico, bobina, mesa, tela. Levante a plaquinha vermelha de "NÃO ENCOSTE — QUENTE" perto do bico e da mesa e repita a regra de ouro. Depois, no projetor, abra o Bambu Studio no projeto já fatiado e mostre o botão "Print" (canto superior direito) e o botão "Export". Explique: um manda pelo wi-fi, o outro salva no cartãozinho.

MÃO NA MASSA (25 min): No computador de cada dupla, peça que abram o projeto fatiado e localizem o botão "Print" e o botão "Export" no Bambu Studio, sem clicar para imprimir ainda (só apontar e nomear). Em seguida, um de cada vez, as crianças vêm até a impressora e apontam (sem encostar) o bico, a bobina, a mesa e a tela, dizendo o nome de cada uma. Confira e corrija com carinho. Quem souber as quatro partes ganha um adesivo de estrela.

DESAFIO + COMPARTILHAR (10 min): Proponha: "Como o arquivo viaja do computador até a impressora?". Deixe duas ou três crianças explicarem com as próprias palavras (wi-fi sem fio ou cartão de memória). Termine pedindo que cada um diga, em uma frase, qual é a regra de segurança mais importante.

## Como explicar para crianças

Use analogias do dia a dia. O bico é como o bico de uma cola quente ou o ferro de passar: esquenta tanto que queima, então só os olhos chegam perto. A bobina é um carretel de linha gigante, mas em vez de linha tem um fio de plástico. A mesa é o tabuleiro onde a peça vai sendo montada, andar por andar, como um prédio de Lego. A tela é o controle remoto da máquina, onde a gente toca para mandar começar. Para o envio do arquivo, diga que é como mandar uma mensagem no celular: ela voa pelo ar (wi-fi) ou vai dentro de um cartãozinho que a gente entrega na mão da máquina.

## Erros comuns e como ajudar

O erro mais comum é a criança querer tocar no bico ou na mesa por curiosidade; fique sempre entre a turma e as partes quentes e repita a regra com firmeza e sem gritar. Outro erro é confundir bico com bobina; mostre que o bico é pequeno e metálico e a bobina é o rolo grande e redondo. Muitas crianças acham que a impressora "imprime na hora", como uma impressora de papel; explique que ela constrói devagar, camada por camada. Algumas vão clicar em "Print" sem querer; oriente que hoje a gente só aponta e nomeia, sem apertar nada. Por fim, há quem ache que o filamento é mole como massinha; deixe tocar um pedaço frio para sentir que é um fio firme de plástico.`,
  exercicios: [
    {
      titulo: `Caça às partes da impressora`,
      tipo: `observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Leve a turma até a impressora a uma distância segura, com você entre as crianças e as partes quentes. Aponte cada parte e diga o nome. Depois chame as crianças uma a uma para apontar (sem encostar) e nomear. Corrija com carinho e elogie quem acertar.`,
      atividade: `Sem encostar na máquina, aponte com o dedo no ar e diga o nome de cada parte: o bico, a bobina de filamento, a mesa de impressão e a tela. Fale o nome em voz alta para o professor conferir.`,
      gabarito: `A criança acertou quando aponta corretamente e nomeia as quatro partes: bico (a pontinha quente), bobina (o rolo de filamento), mesa (a chapa onde a peça nasce) e tela (a telinha da frente). Se trocar bico por bobina, lembre que o bico é pequeno e metálico e a bobina é o rolo grande e redondo.`,
    },
    {
      titulo: `A regra de ouro: olho, mas não toco`,
      tipo: `roda de segurança`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda longe das partes quentes. Levante a plaquinha vermelha "NÃO ENCOSTE — QUENTE". Faça perguntas curtas e deixe cada criança responder. Reforce a regra com calma, comparando com o fogão de casa, sem assustar.`,
      atividade: `Em roda, responda: Quais partes da impressora ficam muito quentes? O que pode acontecer se a gente encostar no bico? Qual é a nossa regra de ouro com as partes quentes?`,
      gabarito: `Espera-se que a criança diga que o bico e a mesa ficam quentes, que encostar no bico pode queimar a pele e que a regra de ouro é "a gente olha, mas não encosta nas partes quentes". Qualquer resposta nesse sentido está correta.`,
    },
    {
      titulo: `Verdadeiro ou falso da impressora`,
      tipo: `quiz oral`,
      tempo: `8 minutos`,
      guiaProfessor: `Leia cada frase em voz alta e peça que a turma responda "verdadeiro" ou "falso", levantando o polegar para cima ou para baixo. Depois de cada uma, explique por que está certa ou errada. Vá aumentando a velocidade para virar uma brincadeira.`,
      atividade: `Responda verdadeiro ou falso: 1) O bico da impressora fica quente. 2) A bobina é a telinha onde a gente toca. 3) A peça nasce e cresce na mesa. 4) Pode encostar o dedo na mesa quente. 5) O filamento é o fio de plástico colorido.`,
      gabarito: `1) Verdadeiro — o bico esquenta muito. 2) Falso — a bobina é o rolo de filamento; a telinha é a tela. 3) Verdadeiro — a peça é construída na mesa. 4) Falso — nunca se encosta na mesa quente, pode queimar. 5) Verdadeiro — o filamento é o fio de plástico colorido.`,
    },
    {
      titulo: `Encontrando o botão de enviar`,
      tipo: `prática na ferramenta`,
      tempo: `9 minutos`,
      guiaProfessor: `No projetor, abra o Bambu Studio no projeto já fatiado e mostre onde fica o botão "Print" (canto superior direito) e o botão "Export". Avise bem claro que hoje ninguém aperta para imprimir: só apontar e nomear. Passe nas mesas conferindo.`,
      atividade: `No Bambu Studio, abra o projeto que você fatiou na aula passada. Encontre o botão "Print" (Imprimir) e o botão "Export" (Exportar). Aponte cada um na tela e diga para o professor para que serve cada botão. Não clique em imprimir ainda.`,
      gabarito: `A criança acertou quando localiza os dois botões e explica que "Print" envia o arquivo pelo wi-fi para a impressora e "Export" salva o arquivo no cartão de memória. Se ela clicar sem querer em "Print", oriente a fechar a janela; hoje a gente só aponta e nomeia.`,
    },
    {
      titulo: `Desafio: a viagem do arquivo`,
      tipo: `desafio de explicação`,
      tempo: `8 minutos`,
      guiaProfessor: `Proponha para a turma já aquecida com os exercícios anteriores. Peça que cada criança explique, com as próprias palavras, como o arquivo sai do computador e chega na impressora. Aceite explicações simples e ajude quem travar com dicas (pelo ar? por um cartãozinho?).`,
      atividade: `Explique para a turma, em poucas frases: depois de fatiar a peça no computador, como o arquivo chega até a impressora para ela começar a construir? Diga os dois caminhos possíveis.`,
      gabarito: `Acertou quando a criança cita os dois caminhos: pelo wi-fi (sem fio, o arquivo voa pelo ar para a impressora ligada na mesma rede, clicando em "Print") e pelo cartão de memória (salva com "Export", coloca o cartão na máquina e escolhe pela tela). Citar pelo menos um caminho com clareza já mostra entendimento; o desafio é lembrar dos dois.`,
    },
  ],
};
