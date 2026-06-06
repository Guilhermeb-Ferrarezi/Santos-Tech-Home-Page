import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Ajustando a IA para ficar mais esperta",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Voltar ao ML for Kids para corrigir os erros anotados da IA, reajustar os blocos do jogo e comparar se o protótipo ficou melhor que antes.`,
  descricao: `Na aula passada as crianças testaram o protótipo e descobriram que a IA ainda erra em algumas situações. Elas anotaram cada confusão: "a IA achou que era 'pulo' mas eu falei 'correr'", "ela não reconheceu quando eu desenhei devagar". Hoje é o dia de consertar tudo isso. Vamos ensinar para as crianças a grande verdade da inteligência artificial: uma IA não nasce esperta, ela fica esperta com prática e com bons exemplos.

O coração desta aula é a ideia de treinar de novo. No ML for Kids, voltamos ao projeto, abrimos as etiquetas (os "rótulos" que a IA aprende) e adicionamos novos exemplos justamente nos lugares onde a IA se confundiu. Se a IA trocava "feliz" por "bravo", colocamos mais exemplos de "bravo" para ela aprender melhor a diferença. Depois clicamos de novo em "Treinar / Train" e esperamos o computador reaprender. É como dar mais lições de casa para um amigo que estava errando uma conta de matemática.

Além de reensinar a IA, as crianças também voltam ao Scratch (os blocos) para deixar a reação do jogo mais clara e divertida. Às vezes a IA até acerta, mas o jogador não percebe porque o personagem reage de um jeito fraquinho. Então ajustamos os blocos: um som mais alto, uma fala maior na tela, uma cor que pisca. O objetivo é que, ao testar de novo, fique óbvio que melhorou.

No fim, fazemos a comparação mais importante do mês: "Antes errava 4 vezes, agora erra 1 vez. Ficou mais esperta!" As crianças aprendem que melhorar é um processo de tentar, observar, ajustar e testar de novo. Esse ciclo é exatamente o que profissionais de tecnologia fazem todos os dias, e elas estão fazendo isso de verdade no protótipo delas.`,
  materiais: [
    `Computadores com o ML for Kids aberto e logado no projeto de cada aluno (mesmo projeto das aulas anteriores)`,
    `Scratch aberto com o protótipo de jogo de cada criança (o arquivo salvo da Aula 5)`,
    `Projetor ligado para o professor demonstrar onde clicar no ML for Kids`,
    `Folha de erros anotados na Aula 5 (a lista de confusões da IA de cada aluno)`,
    `Webcam ou microfone funcionando, conforme o tipo de IA do projeto (imagem, som ou texto)`,
    `Exemplo pronto do professor: um projeto que erra de propósito e depois acerta, para mostrar o antes e depois`,
    `Cronômetro ou relógio visível para controlar o tempo de cada etapa`,
  ],
  conceitosChave: [
    `Treinar de novo — ensinar a IA mais uma vez, com exemplos novos, para ela parar de errar.`,
    `Exemplo — uma amostra (uma foto, um som ou uma frase) que mostra para a IA como é cada coisa.`,
    `Etiqueta (rótulo) — o nome de cada grupo que a IA aprende, como "feliz" ou "bravo".`,
    `Confusão — quando a IA troca uma coisa pela outra porque viu poucos exemplos.`,
    `Ajuste — uma pequena mudança que a gente faz para algo funcionar melhor.`,
    `Comparar — olhar o antes e o depois para ver se a mudança melhorou de verdade.`,
    `Reação do jogo — o que o personagem faz na tela quando a IA decide algo (som, fala, cor).`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA. O segredo desta aula é uma frase: a IA aprende com exemplos, então mais exemplos certos deixam ela menos confusa. O ML for Kids guarda o projeto de cada aluno na nuvem; basta entrar com o mesmo login das aulas passadas. Cada projeto tem etiquetas (chamadas de "labels" ou "rótulos") e, dentro de cada uma, uma lista de exemplos. Quando adicionamos exemplos e clicamos em "Treinar / Train", o computador reaprende em alguns segundos ou minutos. Tenha a lista de erros da Aula 5 em mãos: ela diz exatamente onde a IA falha e, portanto, onde colocar exemplos novos.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor a folha de erros de um aluno voluntário. Pergunte: "Por que vocês acham que a IA errou aqui?" Conduza até a resposta: ela viu poucos exemplos desse caso. Faça uma analogia: "É como um amigo que só viu três cachorros na vida e acha que todo bicho de quatro patas é cachorro."

Conteúdo novo guiado (15 min): No seu projeto de exemplo, abra o ML for Kids, clique em "Projetos / Projects" e entre no projeto. Clique no botão "Treinar / Train". Mostre as etiquetas. Escolha a etiqueta que a IA confunde e clique em "Adicionar exemplo / Add example". Adicione dois ou três exemplos novos bem claros. Depois clique em "Voltar ao projeto / Back to project" e em "Aprender e testar / Learn & Test". Aperte o botão grande "Treinar novo modelo de aprendizagem / Train new machine learning model". Mostre a barra de progresso e explique que ela está reaprendendo.

Mão na massa (25 min): Cada criança abre o seu projeto, olha a própria lista de erros e adiciona pelo menos três exemplos novos nas etiquetas que erravam. Depois clica em "Treinar novo modelo". Enquanto treina, ela volta ao Scratch e melhora a reação do jogo: deixa o som mais alto, a fala maior ou adiciona um bloco de cor que pisca. Circule pela sala ajudando quem travar.

Desafio e compartilhar (10 min): Cada aluno testa o jogo de novo e conta para a turma: "Antes errava tantas vezes, agora erra tantas." Comemore as melhoras, mesmo as pequenas.

## Como explicar para crianças

Use sempre a ideia de ensinar um amiguinho. Diga: "A IA é como um bebê que está aprendendo. Se ela confunde gato com cachorro, a gente mostra mais fotos de gato até ela entender." Evite palavras difíceis como "algoritmo". Prefira "exemplos", "mostrar de novo" e "ela aprendeu". Quando treinar, fale "agora ela está estudando" enquanto a barra carrega. Comemore cada acerto novo com entusiasmo, porque a criança precisa ver que o esforço dela mudou o resultado.

## Erros comuns e como ajudar

O erro mais comum é a criança adicionar exemplos na etiqueta errada, piorando a confusão; peça que ela leia em voz alta o nome da etiqueta antes de adicionar. Outro erro é esquecer de clicar em "Treinar novo modelo" depois de adicionar exemplos: sem isso, nada muda, então passe na mesa e confirme que cada um treinou. Algumas crianças adicionam exemplos bagunçados (uma foto escura, um som baixinho); explique que exemplo ruim ensina coisa errada, então o exemplo precisa ser claro. Por fim, muitos esquecem de salvar o Scratch; lembre todos de salvar antes de testar. Se o treino travar, atualize a página e entre no projeto de novo, os exemplos ficam guardados.`,
  exercicios: [
    {
      titulo: `Caça aos erros da IA`,
      tipo: `Revisão em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Use no aquecimento. Peça que cada dupla pegue a folha de erros da Aula 5 e circule de vermelho as confusões mais frequentes. Caminhe pela sala confirmando que cada dupla escolheu pelo menos uma confusão para consertar hoje.`,
      atividade: `Olhe a sua lista de erros da aula passada. Circule a confusão que mais aconteceu e escreva ao lado em qual etiqueta você vai adicionar exemplos novos.`,
      gabarito: `Resposta correta é qualquer confusão real anotada com a etiqueta certa indicada. Exemplo: a IA trocava "bravo" por "feliz", então o aluno escreve "vou adicionar exemplos na etiqueta bravo". O importante é a etiqueta escolhida ser a que a IA confundia, não a outra.`,
    },
    {
      titulo: `Adicionar três exemplos novos`,
      tipo: `Prática guiada no ML for Kids`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre no projetor antes. Garanta que cada criança entre no projeto, clique em "Treinar / Train", escolha a etiqueta que errava e use "Adicionar exemplo / Add example" três vezes. Verifique a qualidade dos exemplos (claros, na etiqueta certa).`,
      atividade: `No seu projeto, abra a etiqueta que você circulou e adicione três exemplos novos bem claros dessa coisa. Capriche: foto nítida, som alto ou frase completa.`,
      gabarito: `O aluno deve terminar com três exemplos novos visíveis dentro da etiqueta correta. Conferência: a contagem de exemplos daquela etiqueta aumentou em três e os exemplos são nítidos. Se algum exemplo estiver na etiqueta errada, peça para apagar e refazer no lugar certo.`,
    },
    {
      titulo: `Treinar e ver a barra carregar`,
      tipo: `Execução individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Este é o passo que as crianças mais esquecem. Passe em cada mesa e confirme que clicaram em "Aprender e testar / Learn & Test" e depois em "Treinar novo modelo de aprendizagem / Train new machine learning model". Espere a barra de progresso terminar com a turma.`,
      atividade: `Vá em "Aprender e testar" e clique no botão grande "Treinar novo modelo de aprendizagem". Espere a barra encher até o fim sem fechar a página.`,
      gabarito: `Treino concluído com sucesso quando aparece a mensagem de modelo pronto (status "Disponível / Available" ou data e hora do último treino atualizada). Se aparecer erro, atualizar a página e treinar de novo; os exemplos permanecem salvos.`,
    },
    {
      titulo: `Deixar a reação do jogo mais clara`,
      tipo: `Ajuste de blocos no Scratch`,
      tempo: `12 minutos`,
      guiaProfessor: `Enquanto a IA treina, leve a turma ao Scratch. Mostre como deixar a reação mais forte: aumentar o volume do som, usar um balão de fala maior ou adicionar um bloco de efeito de cor. Lembre todos de salvar ao terminar.`,
      atividade: `No seu jogo, escolha a reação que ficava fraca e melhore: deixe o som mais alto, a fala maior na tela ou faça o personagem mudar de cor quando a IA acerta. Salve no fim.`,
      gabarito: `Considera-se feito quando, ao rodar o jogo, a reação está nitidamente mais perceptível que antes. Exemplo válido: o aluno adicionou o bloco "mude efeito cor por 25" junto com a fala, e agora o personagem pisca e fala maior. Qualquer melhora visível e audível conta, desde que o projeto esteja salvo.`,
    },
    {
      titulo: `Antes e depois: ficou mais esperta?`,
      tipo: `Teste comparativo e compartilhamento`,
      tempo: `10 minutos`,
      guiaProfessor: `Fechamento da aula. Cada aluno testa o jogo com o modelo novo e conta o número de erros de antes e de agora. Registre as melhoras no quadro para a turma comemorar. Valorize toda redução de erro, mesmo de um único acerto a mais.`,
      atividade: `Teste o seu jogo de novo, fazendo as mesmas situações de antes. Conte quantas vezes a IA erra agora e compare com a aula passada. Conte para a turma o seu antes e depois.`,
      gabarito: `Resposta correta é uma comparação honesta com dois números, por exemplo: "Antes errava 4 vezes, agora erra 1 vez, ficou mais esperta". Se a IA não melhorou ou piorou, a resposta certa é reconhecer isso e dizer o próximo ajuste: adicionar mais exemplos ou exemplos mais claros na etiqueta que ainda confunde.`,
    },
  ],
};
