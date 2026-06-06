import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Software e periféricos na prática",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Compreender o que é software e como ele se comunica com o hardware, identificando na prática os periféricos de entrada e saída do computador da sala.`,
  descricao: `Na aula passada os alunos abriram o "corpo" do computador e conheceram o hardware: as peças físicas que dão vida à máquina. Agora chegou a hora de entender quem dá as ordens. O software é a parte invisível do computador, feita de instruções e programas, que diz ao hardware exatamente o que fazer. Sem software, o computador seria apenas um amontoado de peças sem utilidade, como um corpo sem cérebro.

Existem três grandes grupos de software. O sistema operacional (no nosso caso, o Windows) é o programa principal, aquele que organiza tudo e permite que você use a máquina. Os programas e aplicativos são os softwares que rodam por cima do sistema, como o navegador, a calculadora, o editor de textos e os jogos. E há também os drivers, pequenos softwares que ensinam o computador a conversar com cada peça conectada a ele.

E é justamente nessa conversa que entram os periféricos. Periféricos são os equipamentos que ligamos ao computador para colocar informação dentro dele ou tirar informação dele. Os periféricos de entrada enviam dados para a máquina, como o teclado, o mouse, o microfone e a webcam. Os periféricos de saída recebem dados da máquina e mostram o resultado para nós, como o monitor, a impressora, os fones e as caixas de som. Alguns ainda fazem as duas coisas, como uma impressora multifuncional que também digitaliza.

Nesta aula, os alunos vão olhar a tela e descobrir quais programas estão instalados, entender o caminho que um clique percorre do hardware até o software, e depois colocar a mão na massa identificando, ligando e reconhecendo cada periférico do computador da sala. O objetivo é que cada estudante consiga apontar um cabo ou dispositivo e dizer com segurança se ele é de entrada ou de saída, e que software faz aquilo funcionar.`,
  materiais: [
    `Computadores com Windows instalado e ligado, um por aluno ou dupla`,
    `Projetor ou TV para o professor demonstrar a tela na frente da turma`,
    `Periféricos para manuseio: teclado, mouse, fone de ouvido, webcam e, se houver, uma impressora e caixas de som`,
    `Cabos USB soltos e adaptadores para os alunos praticarem ligar e desligar`,
    `Folha impressa com a tabela "Entrada x Saída" para o desafio em dupla`,
    `Conta de usuário local do Windows já iniciada em cada máquina (sem necessidade de login na internet)`,
  ],
  conceitosChave: [
    `Software — parte invisível do computador, feita de instruções e programas, que diz ao hardware o que fazer.`,
    `Sistema operacional — programa principal que organiza a máquina e permite usar tudo; aqui usamos o Windows.`,
    `Programa ou aplicativo — software que roda por cima do sistema, como navegador, calculadora ou editor de textos.`,
    `Driver — pequeno software que ensina o computador a conversar com um periférico específico.`,
    `Periférico de entrada — dispositivo que envia informação para o computador, como teclado, mouse, microfone e webcam.`,
    `Periférico de saída — dispositivo que recebe informação do computador e mostra o resultado, como monitor, impressora e fones.`,
    `Porta USB — encaixe padrão onde ligamos a maioria dos periféricos modernos ao computador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Guarde três ideias: hardware é a parte física (peça que você toca), software é a parte invisível (programa, instrução) e periférico é tudo que liga por fora para pôr ou tirar informação. O sistema operacional desta turma é o Windows. Para mostrar os programas instalados, clique no botão Iniciar (o ícone da janela do Windows, no canto inferior esquerdo) e veja a lista de aplicativos; ou clique em "Todos os aplicativos". A regra simples de entrada e saída: se o dispositivo manda dado PARA o computador, é entrada; se RECEBE dado DO computador e mostra para você, é saída. Teste mentalmente cada objeto com essa pergunta antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula 1 com uma pergunta rápida: "O que é hardware?". Espere respostas e introduza: "Hoje conhecemos quem manda nas peças: o software." Mostre o computador da frente e pergunte "isso liga sozinho?" para puxar a ideia de sistema operacional.

Conteúdo novo guiado (15 min): no computador projetado, clique no botão Iniciar. Mostre a lista de programas e diga que cada ícone é um software. Abra a Calculadora (digite "calculadora" na busca do Iniciar e tecle Enter). Explique: "Isso é um programa rodando dentro do Windows, que é o sistema operacional." Depois clique com o botão direito na barra de tarefas, abra o Gerenciador de Tarefas (ou tecle Ctrl + Shift + Esc) e mostre a aba "Processos": são softwares trabalhando. Por fim, pegue o mouse físico e diga "esse é um periférico de entrada; quando eu mexo, o software responde na tela, que é a saída".

Mão na massa (25 min): cada aluno (ou dupla) recebe periféricos e cabos. Tarefa: ligar um periférico na porta USB, abrir o programa correto e testar. Sugestões: ligar o fone e tocar um som pela Calculadora não, mas sim abrir o player ou um vídeo do menu; ligar a webcam e abrir o app Câmera (busque "Câmera" no Iniciar); digitar o nome no Bloco de Notas para testar o teclado. A cada teste, o aluno anota na folha se o periférico é de entrada ou de saída. Circule pela sala conferindo as conexões.

Desafio e compartilhar (10 min): em dupla, completem a tabela "Entrada x Saída" com pelo menos seis periféricos. Cada dupla apresenta um exemplo e explica por que ele é de entrada ou de saída. Feche reforçando: software manda, hardware obedece, periférico conecta os dois.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do corpo humano: o hardware é o corpo, o software é o cérebro pensando, e os periféricos são os sentidos. Os olhos e ouvidos trazem informação (entrada); a boca e as mãos respondem (saída). Outra comparação boa: o Windows é como o diretor da escola, que organiza tudo; os programas são os professores, cada um com sua matéria. Para entrada e saída, peça para o aluno imaginar uma seta: para dentro do computador é entrada, para fora é saída.

## Erros comuns e como ajudar

O erro mais comum é confundir hardware com software: o aluno aponta o monitor e diz "isso é o Windows". Corrija com calma: o monitor é a peça (hardware), o Windows é o que aparece nele (software). Outro tropeço é achar que o monitor é de entrada porque "eu olho para ele": lembre que ele mostra o resultado, então é saída. Muitos também trocam as portas; mostre que o USB só encaixa de um jeito e nunca se deve forçar. Se o periférico não funcionar, peça para verificar se o cabo está firme antes de pensar em problema maior. Elogie cada acerto para manter a turma confiante.`,
  exercicios: [
    {
      titulo: `Caçador de programas`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o menu Iniciar. Caminhe pela sala e ajude quem não acha o botão (canto inferior esquerdo, ícone da janela). O objetivo é familiarizar com a ideia de que cada ícone é um software.`,
      atividade: `Abra o menu Iniciar do Windows clicando no ícone da janela no canto inferior esquerdo. Encontre e abra três programas diferentes: a Calculadora, o Bloco de Notas e o app Câmera. Anote no caderno o nome de cada um.`,
      gabarito: `O aluno deve abrir os três programas. Calculadora e Bloco de Notas são acessórios do Windows; Câmera usa a webcam. Resposta esperada no caderno: Calculadora, Bloco de Notas, Câmera. Todos são programas (software) que rodam dentro do Windows (sistema operacional).`,
    },
    {
      titulo: `Entrada ou saída?`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue ou aponte os periféricos disponíveis. Reforce a pergunta-chave: "esse aparelho manda dado para o computador ou recebe dado dele?". Confira as classificações individualmente.`,
      atividade: `Olhe os periféricos do seu computador. Classifique cada um como ENTRADA ou SAÍDA e escreva numa lista: teclado, mouse, monitor, fone de ouvido, webcam e caixas de som.`,
      gabarito: `Entrada: teclado, mouse, webcam (mandam informação para o computador). Saída: monitor, fone de ouvido, caixas de som (recebem informação do computador e mostram o resultado). Aceite "microfone" como entrada se o aluno citar.`,
    },
    {
      titulo: `Ligando e testando`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Supervisione as conexões USB; oriente a nunca forçar o cabo. Tenha um periférico reserva caso algum não funcione. Avalie se o aluno consegue ligar, abrir o programa certo e testar.`,
      atividade: `Pegue um periférico (fone, webcam ou teclado), ligue-o na porta USB sem forçar, abra o programa correto para testá-lo (por exemplo, o app Câmera para a webcam) e confirme que ele funciona. Diga em voz alta se ele é de entrada ou de saída.`,
      gabarito: `O aluno liga o periférico corretamente, abre o app adequado e o testa. Webcam = entrada, vista no app Câmera. Fone = saída, testado com um som ou vídeo. Teclado = entrada, testado no Bloco de Notas. Sucesso quando o dispositivo responde e a classificação está correta.`,
    },
    {
      titulo: `Tabela em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e entregue a folha "Entrada x Saída". Incentive a justificar cada escolha. Passe nas duplas conferindo se as colunas estão certas e estimule o uso da seta imaginária (para dentro ou para fora).`,
      atividade: `Em dupla, completem a tabela com duas colunas, ENTRADA e SAÍDA, listando pelo menos seis periféricos no total. Ao lado de cada um, escrevam em uma frase por que ele pertence àquela coluna.`,
      gabarito: `Exemplo de tabela correta. ENTRADA: teclado (envia letras digitadas), mouse (envia o movimento), microfone (envia o som da voz). SAÍDA: monitor (mostra a imagem), impressora (imprime no papel), fones (reproduzem o som). As justificativas devem indicar o sentido da informação: para dentro = entrada, para fora = saída.`,
    },
    {
      titulo: `Roda de conversa: software e hardware`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em círculo. Conduza com perguntas abertas e deixe vários alunos falarem. Corrija confusões entre peça física e programa com gentileza, usando a comparação do corpo e do cérebro.`,
      atividade: `Em roda, respondam juntos: o que aconteceria com o computador se não existisse nenhum software? E se existisse o software mas faltassem os periféricos? Deem exemplos do dia a dia em que software e hardware trabalham juntos.`,
      gabarito: `Sem software, o hardware seria só um conjunto de peças paradas, sem saber o que fazer (como corpo sem cérebro). Sem periféricos, o software não teria como receber comandos nem mostrar resultados para a pessoa. Exemplos válidos: digitar um texto (teclado + editor), ver um vídeo (monitor e fones + player), tirar foto (webcam + app Câmera). Valorize qualquer resposta que mostre software e hardware dependendo um do outro.`,
    },
  ],
};
