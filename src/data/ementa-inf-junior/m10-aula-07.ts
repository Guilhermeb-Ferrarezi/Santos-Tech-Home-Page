import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Escolhendo as Melhores Figuras",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Rever todas as imagens criadas com a IA durante o mês e escolher, nomear e organizar as favoritas para montar a galeria da turma.`,
  descricao: `Esta é a aula da grande arrumação antes da festa. Durante o mês inteiro as crianças conheceram a Inteligência Artificial, descobriram que ela aprende com exemplos, escreveram palavras mágicas (os comandos, também chamados de "prompt") e geraram muitas figuras com a IA de imagem. Agora chegou a hora de olhar com carinho para tudo o que foi feito e escolher as melhores para a galeria que será inaugurada na próxima aula. Escolher é um trabalho de gente grande: a criança vira uma pequena curadora, aquela pessoa que decide quais obras entram numa exposição.

O coração da aula é olhar, comparar e decidir. As crianças vão rever suas imagens salvas (na pasta do computador ou nas conversas do Gemini, onde a IA respondeu com as figuras) e separar as favoritas. Não é sobre ter a imagem "mais bonita do mundo": é sobre escolher as que a criança mais gostou, que ficaram mais parecidas com o que ela pediu ou que contam uma historinha legal. Cada criança escolhe poucas figuras (uma a três), para a galeria ficar especial e não cansativa.

Depois de escolher, vem o segundo trabalho: dar um nome para cada figura. O nome é o título da obra, como nos museus de verdade. "Gato Astronauta", "Floresta de Doces", "Meu Dragão Azul". Como a leitura e a escrita ainda estão em desenvolvimento, o professor é o escriba: a criança fala o nome e o professor digita ou escreve num cartãozinho. O terceiro trabalho é organizar a ordem em que as figuras vão aparecer na galeria, decidindo qual vem primeiro, qual vem depois.

O professor é o guia da curadoria. Você ajuda cada criança a olhar suas imagens sem pressa, faz perguntas que ajudam a decidir ("Qual dessas te deixou mais feliz?"), digita os nomes que elas inventam e anota a ordem combinada. É uma aula calma, de conversa e escolha, que prepara o terreno para a aula 8, quando a galeria será finalmente montada e mostrada. O clima é de orgulho: cada criança percebe o quanto criou e se sente artista de verdade.`,
  materiais: [
    `Um computador por criança (ou em dupla) com o Gemini aberto e logado, mostrando as conversas do mês onde as figuras foram geradas, e com a pasta de imagens salvas aberta`,
    `Projetor ou tela grande ligada ao computador do professor para mostrar exemplos e ensinar a escolher`,
    `Uma seleção-exemplo do professor: três ou quatro figuras feitas com IA já com nomes, para mostrar como um título fica bonito`,
    `Cartões de papel em branco e canetinhas grossas para escrever o nome de cada figura escolhida`,
    `Uma "Ficha da Galeria" impressa por criança, com espaços para colar/desenhar a miniatura, o nome e o número da ordem`,
    `Adesivos de estrela ou carimbo de "Selecionada!" para marcar as figuras escolhidas`,
    `Estrelinhas autocolantes ou fita crepe colorida para a criança votar nas favoritas`,
  ],
  conceitosChave: [
    `Escolher — olhar várias figuras e decidir quais são as suas preferidas, do mesmo jeito que você escolhe o brinquedo favorito.`,
    `Galeria — um lugar bonito onde as figuras ficam expostas para todo mundo ver e admirar, como um museu de criança.`,
    `Curador — a pessoa que decide quais obras entram na exposição; hoje o curador é você!`,
    `Nome da figura — o título que damos para a obra, como uma plaquinha de museu, por exemplo "Gato Astronauta".`,
    `Ordem — decidir o que vem primeiro, o que vem depois e o que vem por último na galeria.`,
    `Favorita — a figura que você mais gostou, a que te deixou mais feliz ou orgulhoso.`,
    `Comparar — colocar duas figuras lado a lado para ver qual delas você gosta mais.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de curadoria, não de criar imagens novas. As crianças vão rever o que já fizeram no mês e escolher as melhores. Seu papel é o de guia tranquilo: ajudar a olhar, comparar, decidir, nomear e ordenar. Como a escrita ainda está em desenvolvimento, você é o escriba oficial: a criança fala, você digita ou escreve no cartão.

Antes da aula, saiba onde estão as figuras. No Gemini, as imagens geradas durante o mês ficam guardadas nas conversas antigas: abra o site do Gemini, clique no menu de três risquinhos (ícone "hambúrguer") no canto superior esquerdo para ver a lista de conversas anteriores e localize as que têm figuras. Se vocês salvaram as imagens no computador, abra também a pasta onde elas ficaram (geralmente "Downloads" ou uma pasta da turma). Para salvar uma figura no Gemini, é só passar o mouse sobre a imagem e clicar no ícone de baixar (uma setinha apontando para baixo). Teste isso uma vez sozinho antes da aula para não procurar na frente das crianças.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min). Receba a turma celebrando: "Quanta figura linda vocês fizeram este mês!" No projetor, abra rapidamente uma conversa do Gemini e mostre algumas imagens da turma rolando a tela. Pergunte: "Lembram desta? Quem fez?" Aqueça o olhar pedindo que cada criança diga, de cabeça, qual foi a figura de que mais gostou.

2. Conteúdo novo guiado (15 min). Apresente a palavra do dia: curador. "Hoje vocês são curadores: quem escolhe as figuras do museu." No projetor, mostre sua seleção-exemplo com três figuras já nomeadas e diga os títulos com orgulho ("Esta é a Floresta de Doces"). Ensine a comparar: coloque duas figuras lado a lado na tela e pergunte à turma "Qual vocês escolheriam? Por quê?". Mostre como salvar uma figura do Gemini passando o mouse sobre a imagem e clicando na setinha de baixar.

3. Mão na massa (25 min). Cada criança abre suas conversas do Gemini (menu de três risquinhos, lista de conversas) ou a pasta de imagens. Ela olha tudo com calma e escolhe de uma a três favoritas. Passe de mesa em mesa fazendo perguntas que ajudam a decidir: "Qual te deixou mais feliz? Qual ficou mais parecida com o que você pediu?". Para cada favorita, marque com o adesivo "Selecionada!". Em seguida, a criança inventa um nome e VOCÊ escreve no cartão e na Ficha da Galeria. Por fim, ajude a numerar a ordem (1, 2, 3) em que as figuras vão aparecer.

4. Desafio e compartilhar (10 min). Faça uma mini-roda: cada criança mostra UMA figura escolhida e diz o nome que deu. A turma bate palmas. Combinem juntos a ordem geral da galeria (de quem começa) usando a parede ou o chão para enfileirar os cartões. Finalize lembrando: "Na próxima aula a gente monta a galeria DE VERDADE com tudo o que vocês escolheram hoje!"

## Como explicar para crianças de 5 a 9 anos

Use a ideia de museu e de escolher o brinquedo favorito. "Curador é quem decide o que entra no museu, e hoje o museu é o nosso!" Para a escolha, evite perguntas de "certo ou errado"; pergunte pelo sentimento: "Qual te deixou mais feliz? Qual você quer mostrar para a sua família?". Mostre, não explique demais: faça você primeiro com a seleção-exemplo. Para o nome, ensine o truque "o que tem na figura + uma palavra divertida": gato + astronauta vira "Gato Astronauta". Lembre que escolher poucas é melhor, como guardar só os melhores tesouros na caixinha.

## Erros comuns e como ajudar

A criança quer escolher TODAS as figuras: combine um número (uma a três) e use a comparação lado a lado para ajudar a decidir. A criança não acha as imagens do mês: ajude a abrir o menu de três risquinhos no Gemini e a rolar a lista de conversas, ou abra a pasta de Downloads. A criança trava para inventar um nome: aponte a figura e pergunte "o que é isto?" e "como ele está se sentindo?" para destravar. A criança apaga ou fecha a conversa sem querer: mostre que dá para voltar pela lista de conversas, sem drama. A criança fica triste por uma figura não escolhida: explique que ela continua salva e linda, só não vai para a galeria desta vez. A criança ansiosa esperando a vez: dê a ela a tarefa de colar os adesivos de estrela nas fichas dos colegas.`,
  exercicios: [
    {
      titulo: `Caça às figuras do mês`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada criança esteja com o Gemini aberto e logado. Mostre no projetor onde ficam as conversas antigas: o menu de três risquinhos (ícone "hambúrguer") no canto superior esquerdo abre a lista. Se as imagens foram salvas, abra também a pasta de Downloads. Passe de mesa em mesa ajudando quem não acha.`,
      atividade: `Abra o menu de três risquinhos no canto de cima do Gemini e veja a lista de conversas. Clique nas conversas para reencontrar as figuras que você fez este mês. Role a tela devagar e olhe todas as suas figuras.`,
      gabarito: `A criança acerta quando consegue abrir a lista de conversas (ou a pasta de imagens) e visualizar pelo menos duas figuras que ela mesma criou no mês. Sinal de sucesso: ela reconhece e aponta as próprias figuras dizendo "esta eu fiz!".`,
    },
    {
      titulo: `Qual eu gosto mais?`,
      tipo: `Jogo`,
      tempo: `8 min`,
      guiaProfessor: `No projetor, coloque duas figuras lado a lado (pode ser da seleção-exemplo ou de um aluno voluntário). Pergunte à turma qual escolheriam e por quê. Repita com três ou quatro pares. Use a regra do "polegar para cima" para a figura preferida. O objetivo é treinar o olhar de comparar antes de a criança escolher as suas.`,
      atividade: `Olhe as duas figuras na tela. Aponte o polegar para cima para a que você mais gosta. Depois conte para a turma o motivo: "Eu gosto desta porque...". Vamos fazer isso com vários pares de figuras!`,
      gabarito: `A criança acerta quando escolhe uma das duas figuras e diz um motivo simples (cor, personagem, achou engraçada, ficou parecida com o pedido). Não há resposta certa única; o sucesso é conseguir comparar e justificar a escolha com uma frase.`,
    },
    {
      titulo: `Minhas favoritas`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Cada criança revê suas figuras e escolhe de uma a três favoritas. Circule fazendo perguntas que ajudam a decidir: "Qual te deixou mais feliz? Qual ficou mais parecida com o que você pediu?". Marque cada favorita com o adesivo "Selecionada!". Se a figura estiver só na tela do Gemini, mostre como salvar: passar o mouse sobre a imagem e clicar na setinha de baixar.`,
      atividade: `Olhe todas as suas figuras com calma. Escolha de uma a três que são as suas favoritas. Mostre cada favorita para o professor e ganhe um adesivo de "Selecionada!" para ela. Se ainda não estiver salva, baixe clicando na setinha de baixar.`,
      gabarito: `A criança acerta quando seleciona entre uma e três figuras (não todas) e consegue dizer por que cada uma foi escolhida. Sinal de sucesso: as favoritas ficam marcadas com o adesivo e salvas no computador, prontas para a galeria.`,
    },
    {
      titulo: `Dando nome à obra`,
      tipo: `Desenho e papel`,
      tempo: `12 min`,
      guiaProfessor: `Você é o escriba. Para cada figura favorita, peça que a criança invente um nome usando o truque "o que tem na figura + uma palavra divertida". A criança fala, você escreve no cartão com letra grande e cola na Ficha da Galeria. A criança pode desenhar uma miniatura da figura no cartão para enfeitar. Capriche para o nome ser do jeito que a criança falou.`,
      atividade: `Olhe a sua figura favorita e invente um nome para ela, como uma plaquinha de museu. Exemplo: um gato no espaço vira "Gato Astronauta". Diga o nome bem alto para o professor escrever no cartão. Depois desenhe um pedacinho da figura no cartão para enfeitar.`,
      gabarito: `A criança acerta quando dá um nome com sentido para cada figura escolhida (ligado ao que aparece na imagem) e o nome fica escrito no cartão. Não precisa ser elaborado; "Cachorro Feliz" já é um título válido. Sucesso extra: a criança decora o cartão com um desenho.`,
    },
    {
      titulo: `Montando a fila da galeria`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Ajude cada criança a decidir a ordem das suas figuras, numerando os cartões (1, 2, 3) na Ficha da Galeria. Depois, faça a turma combinar a ordem geral: enfileirem os cartões no chão ou numa parede. Pergunte "qual figura começa a galeria? Qual vem por último?". Garanta que cada criança coloque pelo menos um cartão na fila e explique por que escolheu aquele lugar.`,
      atividade: `Coloque as suas figuras em ordem: qual aparece primeiro, qual vem depois e qual fica por último. Numere os cartões com 1, 2 e 3. Agora, junto com a turma, monte a grande fila da galeria no chão, colocando o seu cartão no lugar que você combinou.`,
      gabarito: `A criança acerta quando numera suas figuras em uma ordem e coloca seu cartão na fila da turma, conseguindo dizer um motivo simples para a posição escolhida ("começo com esta porque é a minha preferida"). Sucesso da turma: existe uma fila combinada, com começo e fim, pronta para virar a galeria na aula 8.`,
    },
  ],
};
