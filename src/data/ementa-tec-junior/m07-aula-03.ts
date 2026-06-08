import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "O segredo do tempo certo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a mudar a velocidade da animação no Aseprite e descobre que o tempo certo de cada quadro deixa o boneco mais bonito do que ter muitos quadros.`,
  descricao: `Nesta aula a turma descobre um segredo importante dos animadores: não é a quantidade de desenhos que faz uma animação ficar boa, e sim o tempo certo de cada um. A gente chama isso de "timing". Uma animação com poucos quadros, mas com a velocidade bem escolhida, pode parecer muito melhor do que uma animação cheia de quadros passando rápido demais ou devagar demais.

Continuando o trabalho das aulas anteriores, em que as crianças fizeram um boneco que "respira" (o idle), agora elas vão pegar essa mesma animação e brincar com o relógio dela. No Aseprite cada quadro tem um número de milissegundos que diz quanto tempo ele fica na tela. Mudando esse número, o mesmo boneco pode ficar elétrico e nervoso, ou calmo e preguiçoso. A criança vai testar os dois e escolher, com os próprios olhos, qual parece melhor.

Para deixar o conceito de tempo bem concreto para crianças que ainda leem pouco, a aula usa muito o corpo: vamos bater palma no ritmo da animação, devagar e rápido, sentindo o tempo com as mãos antes de mexer nos números. O timing deixa de ser um número abstrato e vira uma batida que dá para ouvir e sentir.

No fim, cada criança terá o seu idle ajustado no tempo que ela mesma achou mais legal, e vai mostrar para os colegas explicando se ficou "rápido" ou "devagar". O professor reforça a grande mensagem do dia: tempo certo vale mais que muitos desenhos.`,
  materiais: [
    `Computadores com o Aseprite já aberto e o arquivo do idle de cada criança (feito nas aulas 1 e 2) carregado`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar os passos`,
    `Um arquivo de exemplo pronto: um idle simples de 2 a 4 quadros, salvo pelo professor antes da aula`,
    `O painel de Timeline (linha do tempo) visível em todos os computadores`,
    `Um relógio ou cronômetro grande, ou um metrônomo de celular, para marcar o ritmo das palmas`,
    `Cartões de papel com desenho de uma tartaruga (devagar) e de um coelho (rápido) para a brincadeira de votação`,
    `Folhas em branco e lápis de cor para o exercício de papel`,
  ],
  conceitosChave: [
    `Timing (tempo certo) — é o segredo de quanto tempo cada desenho fica na tela; o tempo certo deixa tudo mais bonito.`,
    `Quadro (frame) — cada desenho da animação, como uma figurinha de um flipbook.`,
    `Milissegundo — um pedacinho minúsculo de segundo; é o número que diz quanto tempo o quadro fica aparecendo.`,
    `Rápido — quando os quadros ficam pouco tempo na tela e o boneco se mexe ligeiro, igual um coelho.`,
    `Devagar — quando os quadros ficam mais tempo na tela e o boneco se mexe calminho, igual uma tartaruga.`,
    `Ritmo — a batida da animação; dá para bater palma junto, como numa música.`,
    `Velocidade da animação — o quão depressa o boneco se mexe; muda quando a gente muda o tempo dos quadros.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

A grande ideia da aula é simples: animação boa não é animação com muitos quadros, é animação com o tempo certo em cada quadro. Esse "tempo certo" os profissionais chamam de timing. No Aseprite, cada quadro tem uma duração medida em milissegundos (ms). 100 ms é um décimo de segundo. Quanto menor o número, mais rápido o quadro passa; quanto maior, mais tempo ele fica parado na tela.

Onde isso aparece: na Timeline (a linha do tempo na parte de baixo da tela). Cada quadro é um quadradinho numerado em cima. Para ver ou mudar a duração de um quadro, dê dois cliques (duplo clique) em cima do número do quadro na Timeline; abre uma janelinha chamada "Frame Properties" com o campo "Duration" em milissegundos. Você também pode selecionar vários quadros (clicando no primeiro e, segurando Shift, clicando no último) e mudar todos de uma vez.

Para ver o resultado, use o botão de Play (o triângulo) no canto da Timeline, ou aperte a barra de espaço (a tecla Enter também roda a animação numa janela separada de preview). Um idle costuma ficar bom entre 120 ms e 250 ms por quadro. Não decore esses números: o objetivo é a criança comparar e escolher, não acertar um valor exato.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Aseprite)

10 min — Aquecimento/revisão: Reúna a turma na frente do projetor. Mostre o idle de exemplo rodando (aperte a barra de espaço). Pergunte: "Lembram que nosso boneco respira?" Bata palma junto com a animação para a turma sentir o ritmo. Faça de novo, agora batendo palma bem devagar e depois bem rápido, sem ainda mexer no computador.

15 min — Conteúdo novo guiado: No projetor, dê duplo clique no número do primeiro quadro na Timeline. Mostre a janelinha "Frame Properties" e o campo "Duration". Troque para um número alto (por exemplo 400) e aperte a barra de espaço: o boneco fica preguiçoso. Depois troque para um número baixo (por exemplo 60): o boneco fica nervoso, elétrico. Diga: "Olha só, é o mesmo boneco, só mudou o tempo!" Ensine a selecionar todos os quadros com Shift para mudar tudo junto.

25 min — Mão na massa: Cada criança abre o próprio idle. Peça que façam duas versões: primeiro deixem tudo rápido (número pequeno) e apertem espaço para ver; depois deixem tudo devagar (número grande) e vejam de novo. Passe de mesa em mesa. No fim, cada criança escolhe o tempo que achou mais bonito e deixa o idle nesse tempo.

10 min — Desafio + compartilhar: Cada criança mostra o seu idle no tempo escolhido. A turma bate palma no ritmo da animação do colega e adivinha: "É rápido ou devagar?" Feche reforçando: tempo certo vale mais que muitos desenhos.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Use o coelho e a tartaruga: número pequeno é coelho (rápido), número grande é tartaruga (devagar). Compare com músicas: tem música rápida pra pular e música devagar pra dormir; a animação também tem batida. Use o corpo: "Respira comigo bem devagar... agora respira rápido como se tivesse correndo." Eles sentem na barriga que o tempo muda tudo. Evite a palavra "milissegundo" no começo; fale "número do tempo" e só depois conte o nome difícil como um segredo de gente grande.

## Erros comuns e como ajudar

A criança digita um número gigante (tipo 9000) e acha que travou: explique que ficou tão devagar que parece parado, e mande voltar para um número menor. Outra confusão: mudar só um quadro e achar que a animação inteira ficou esquisita; mostre a seleção com Shift para mudar todos juntos. Algumas apertam espaço e nada acontece porque clicaram fora da janela do Aseprite; basta clicar no desenho antes. Por fim, há quem queira encher de quadros achando que melhora: aproveite para repetir a mensagem do dia, que o tempo certo é mais importante que a quantidade.`,
  exercicios: [
    {
      titulo: `Rápido ou devagar?`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o número do tempo (duplo clique no quadro na Timeline, campo Duration). Faça junto com a turma uma vez antes de soltar.`,
      atividade: `Abra o seu idle. Dê duplo clique no número do quadro e troque o tempo: primeiro coloque um número pequeno (rápido) e aperte a barra de espaço para ver. Depois coloque um número grande (devagar) e veja de novo.`,
      gabarito: `Acertou se conseguiu ver o boneco se mexendo de dois jeitos: ligeiro com número pequeno e calminho com número grande. O professor confirma vendo a criança apertar espaço e a animação mudar de velocidade.`,
    },
    {
      titulo: `Palma no ritmo`,
      tipo: `jogo`,
      tempo: `6 minutos`,
      guiaProfessor: `Rode uma animação no projetor. Comece batendo palma junto com a turma. Depois rode versões em tempos diferentes e deixe as crianças baterem palma no ritmo certo de cada uma.`,
      atividade: `Quando a animação aparecer na tela, bata palma na mesma batida dela. Se ela ficar rápida, palmas rápidas; se ficar devagar, palmas devagar. Tente não atrasar e não adiantar!`,
      gabarito: `Acertou quando as palmas acompanham a velocidade da animação: rápidas para a versão rápida e lentas para a versão lenta. O professor percebe pela turma batendo junto, no mesmo tempo da tela.`,
    },
    {
      titulo: `O que ficou mais bonito?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o mesmo idle em duas velocidades, uma de cada vez. Pergunte qual pareceu melhor e por quê. Aceite todas as respostas e reforce que cada um pode ter um gosto.`,
      atividade: `Olhe o mesmo boneco passando rápido e depois devagar. Pense: qual dos dois você achou mais bonito? Diga para a turma se foi o rápido ou o devagar e conte por quê.`,
      gabarito: `Acertou quem consegue escolher uma das versões e explicar com palavras simples, por exemplo "gostei do devagar porque parece que ele tá descansando". Não existe resposta errada, mas a criança precisa justificar a escolha.`,
    },
    {
      titulo: `Tartaruga e coelho no papel`,
      tipo: `desenho/papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue uma folha dividida em duas partes. Explique que vamos desenhar o tempo: a tartaruga é devagar e o coelho é rápido. Ajude a turma a relacionar tempo grande com a tartaruga e tempo pequeno com o coelho.`,
      atividade: `De um lado da folha desenhe uma tartaruga e escreva (ou peça ajuda) um número grande de tempo. Do outro lado desenhe um coelho e um número pequeno. Faça uma seta apontando do número pequeno para o coelho e do número grande para a tartaruga.`,
      gabarito: `Acertou quando o número grande está ligado à tartaruga (devagar) e o número pequeno ao coelho (rápido). Isso mostra que a criança entendeu que número maior é mais lento e número menor é mais rápido.`,
    },
    {
      titulo: `O tempo perfeito do meu idle`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Peça que cada criança ajuste o próprio idle até achar o tempo que mais gosta, nem rápido demais nem devagar demais. Circule ajudando a usar Shift para mudar todos os quadros juntos. No fim, cada um mostra para a turma.`,
      atividade: `Mexa no tempo do seu boneco quantas vezes precisar até ele ficar do jeito que você acha mais bonito. Quando achar o tempo perfeito, deixe assim e mostre para os colegas, dizendo se ficou rápido ou devagar.`,
      gabarito: `Acertou quem deixou o idle com um tempo escolhido de propósito (não travado nem voando) e consegue dizer se ficou rápido ou devagar. O professor confirma vendo a animação rodar num ritmo agradável e a criança explicar a sua escolha.`,
    },
  ],
};
