import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "A IA conversa com o Scratch",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir que um modelo de IA treinado na Teachable Machine pode conversar com o Scratch e mostrar no palco qual classe está reconhecendo pela câmera ou pelo som.`,
  descricao: `Nesta primeira aula do mês as crianças reencontram um velho conhecido: o modelo de Inteligência Artificial que elas mesmas treinaram na Teachable Machine. Só que agora vem a grande novidade do mês. Esse modelo não vai mais ficar sozinho dentro do site da Teachable Machine. Ele vai aprender a conversar com o Scratch, o programa colorido de blocos que a turma já adora usar. Quando duas ferramentas conversam, podemos fazer coisas muito mais legais com elas juntas.

A ideia central é simples e mágica ao mesmo tempo. A Teachable Machine é a parte que aprende e reconhece, ela é os olhos e os ouvidos espertos. O Scratch é a parte que faz acontecer na tela, ele é o palco com personagens. No meio dos dois existe uma ponte, que chamamos de extensão. Quando a ponte está montada, a IA olha pela câmera ou escuta pelo microfone, decide qual classe está vendo, e conta isso para o Scratch em tempo real.

Por que isso é importante para a trilha de games? Porque a partir desta aula a IA deixa de ser só um experimento isolado e vira um sensor de verdade dentro do jogo. Imagine controlar um personagem mostrando um gesto, fazendo um som ou levantando um objeto na frente da câmera. Tudo começa aqui, com a turma vendo o palco do Scratch escrever, ao vivo, o nome da classe que a IA reconhece. É a prova de que a conversa entre as duas ferramentas realmente acontece.

Nesta aula o foco é observar e entender essa conversa, sem ainda programar um jogo completo. As crianças vão carregar um modelo pronto, conectar a extensão, e brincar de testar: mostram algo para a câmera e gritam de alegria quando o palco mostra a resposta certa. Essa descoberta concreta é a base para as próximas aulas, em que o gato vai reagir, os gestos virarão comandos e a voz controlará o jogo.`,
  materiais: [
    `Computadores (um por dupla) com o Scratch aberto no editor online e a Teachable Machine acessível pelo navegador`,
    `Um modelo de IA já treinado e exportado, salvo num link ou arquivo, com pelo menos três classes (exemplo: mão aberta, mão fechada, nada)`,
    `Projetor ou TV ligada ao computador do professor para a turma ver o palco do Scratch ampliado`,
    `Webcam funcionando em cada computador (a maioria dos notebooks já tem embutida) e microfone para os testes de som`,
    `Crachás ou plaquinhas coloridas com os nomes das classes, para as crianças associarem palavra e gesto`,
    `Folha de registro simples com três quadradinhos para a criança desenhar o que reconheceu em cada classe`,
    `Conexão de internet estável, pois tanto a Teachable Machine quanto o Scratch funcionam pelo navegador`,
  ],
  conceitosChave: [
    `Inteligência Artificial — um programa de computador que aprende a reconhecer coisas vendo muitos exemplos, parecido com você aprendendo a reconhecer animais.`,
    `Modelo — o cérebro pronto que a IA usa depois de treinar; é como um caderno cheio do que ela aprendeu.`,
    `Classe — cada grupo que a IA aprendeu a reconhecer, como mão aberta, mão fechada ou silêncio; é como uma gavetinha com um nome.`,
    `Extensão — uma peça extra que a gente liga no Scratch para ganhar blocos novos; é como encaixar uma peça de LEGO que dá um poder a mais.`,
    `Câmera e microfone — os olhos e os ouvidos do computador, que deixam a IA ver e escutar o mundo de verdade.`,
    `Palco — o espaço grande do Scratch onde as coisas aparecem; aqui ele vai mostrar o nome da classe reconhecida.`,
    `Tempo real — quando algo acontece na mesma hora, sem espera; a IA reconhece e o Scratch mostra na mesma hora.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Pense assim: a Teachable Machine aprende e reconhece, o Scratch mostra na tela, e uma extensão é a ponte entre os dois. Nesta aula usamos um modelo já treinado, então ninguém vai treinar do zero agora. Antes da aula, faça você mesmo o caminho uma vez: tenha o link do modelo em mãos (na Teachable Machine, no botão Export Model, escolha a aba Upload my model e copie o link que termina parecido com tm-my-image-model). No Scratch, abra o editor em scratch.mit.edu, clique no ícone azul Adicionar Extensão (canto inferior esquerdo) e procure a extensão da Teachable Machine. Se a sua versão do Scratch não tiver essa extensão na lista oficial, use o link de extensão que a escola já deixou salvo nos favoritos do navegador. Teste a câmera e o som antes para evitar surpresas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Sentados em roda, relembre o mês anterior com perguntas. O que é uma classe? O que a IA fez quando você mostrou algo? Mostre no projetor a Teachable Machine com o modelo aberto e peça que uma criança mostre um gesto para a câmera; a barrinha da classe sobe. Diga: hoje vamos fazer essa IA conversar com o nosso amigo Scratch.

Conteúdo novo guiado (15 min): No seu computador, projetando para todos, abra o Scratch. Clique no ícone Adicionar Extensão (canto inferior esquerdo, parece um quadrado com um sinal de mais). Escolha a extensão da Teachable Machine. Vão aparecer blocos novos na cor da extensão. Clique no bloco de carregar modelo e cole o link do modelo treinado. Em seguida, arraste para a área de scripts o bloco quando bandeira verde for clicada e, embaixo, o bloco sempre. Dentro do sempre, coloque o bloco diga unido ao bloco da classe atual do modelo. Clique na bandeira verde. Aponte a câmera para você e mostre os gestos: o personagem vai dizer o nome da classe que a IA reconhece. Faça isso devagar, narrando cada clique.

Mão na massa (25 min): Em duplas, as crianças repetem o caminho no próprio computador. Passe de mesa em mesa. Cada dupla deve: adicionar a extensão, carregar o mesmo link de modelo, montar o pequeno script (bandeira verde, sempre, diga, classe atual) e clicar na bandeira. Depois brincam de testar: um faz o gesto, o outro confere se o palco mostrou a classe certa. Incentive a trocarem de função. Quem terminar pode testar o reconhecimento por som, se o modelo for de áudio.

Desafio e compartilhar (10 min): Lance o desafio: façam a IA acertar as três classes em sequência, sem errar. Depois, cada dupla mostra para a turma um gesto e todos torcem para o palco acertar. Feche perguntando: quem conversou com quem nesta aula? A resposta é a IA conversou com o Scratch.

## Como explicar para crianças

Use a imagem de dois amigos conversando. A Teachable Machine é a amiga que tem olhos e ouvidos espertos e sabe reconhecer coisas. O Scratch é o amigo que tem um palco e adora mostrar coisas na tela. Sozinhos, cada um faz pouco. Juntos, a primeira fala: estou vendo a mão aberta. E o palco escreve mão aberta na hora. Diga que a extensão é a linha do telefone entre os dois amigos. Compare também com um controle de videogame: a câmera virou um controle mágico que funciona com o seu corpo.

## Erros comuns e como ajudar

A câmera não liga: confira se o navegador pediu permissão e se a criança clicou em Permitir; recarregue a página se preciso. O palco não mostra nada: quase sempre o modelo não terminou de carregar; espere alguns segundos após colar o link. O nome da classe sai errado o tempo todo: a iluminação pode estar ruim ou o gesto está diferente do que foi treinado; peça para chegar mais perto e fazer o gesto igual ao exemplo. As crianças colam o link no lugar errado: mostre de novo qual é o bloco de carregar modelo. Por fim, evite que troquem o link sozinhas; deixe o link pronto no quadro ou nos favoritos.`,
  exercicios: [
    {
      titulo: `Quem é quem: a ponte entre as ferramentas`,
      tipo: `Conversa guiada com cartões`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre três cartões grandes: um com a Teachable Machine, um com o Scratch e um com a palavra Extensão. Pergunte qual deles aprende e reconhece, qual mostra na tela e qual é a ponte. Aceite respostas com as próprias palavras das crianças e celebre a ideia de conversa entre as duas ferramentas.`,
      atividade: `Aponte para cada cartão e diga em voz alta: este aprende e reconhece, este mostra no palco, este é a ponte que liga os dois.`,
      gabarito: `Teachable Machine é quem aprende e reconhece (os olhos e ouvidos espertos). Scratch é quem mostra no palco. A extensão é a ponte que liga os dois para que conversem.`,
    },
    {
      titulo: `Carregando o modelo no Scratch`,
      tipo: `Mão na massa guiado em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada dupla adicionando a extensão da Teachable Machine pelo ícone Adicionar Extensão e colando o link do modelo no bloco de carregar modelo. Verifique se o link foi colado no bloco certo. Confirme que blocos novos da cor da extensão apareceram na paleta.`,
      atividade: `Clique no ícone Adicionar Extensão, escolha a Teachable Machine e cole o link do modelo no bloco de carregar modelo.`,
      gabarito: `A extensão aparece com blocos novos na paleta e o modelo é carregado pelo link. O sinal de sucesso é a câmera ligar ou os blocos da classe ficarem disponíveis, sem mensagem de erro.`,
    },
    {
      titulo: `O palco fala a classe`,
      tipo: `Montagem de script curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude a montar o script: bloco quando bandeira verde for clicada, depois sempre e, dentro dele, diga unido ao bloco da classe atual do modelo. Peça para clicarem na bandeira verde e apontarem a câmera para si. Reforce que o palco deve mostrar o nome da classe ao vivo.`,
      atividade: `Monte o script com bandeira verde, sempre, diga e classe atual; clique na bandeira e mostre um gesto para a câmera.`,
      gabarito: `Ao clicar na bandeira verde e mostrar um gesto, o personagem diz no palco o nome da classe reconhecida e o nome muda quando o gesto muda. Isso prova que a IA está conversando com o Scratch em tempo real.`,
    },
    {
      titulo: `Detetives das três classes`,
      tipo: `Desafio de teste e registro`,
      tempo: `12 minutos`,
      guiaProfessor: `Peça que cada dupla teste as três classes e desenhe na folha de registro o gesto de cada uma e o nome que o palco mostrou. Circule observando se percebem quando o reconhecimento erra e por quê (luz fraca, gesto diferente, longe da câmera).`,
      atividade: `Teste as três classes do modelo, anote qual nome o palco mostrou em cada uma e marque se a IA acertou ou errou.`,
      gabarito: `As três classes treinadas devem aparecer corretamente no palco quando o gesto é feito igual ao do treino. Erros costumam vir de luz fraca, distância da câmera ou gesto diferente; a solução é melhorar a luz, chegar perto e repetir o gesto certo.`,
    },
    {
      titulo: `Explicando para a família`,
      tipo: `Explicação oral com analogia`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança explica, como se contasse para alguém de casa, o que a IA fez e como ela conversou com o Scratch. Estimule o uso de uma analogia (dois amigos conversando, controle mágico). Valorize quem citar a câmera ou o microfone como olhos e ouvidos.`,
      atividade: `Em uma ou duas frases, explique para um colega o que a IA fez hoje e como ela conversou com o Scratch.`,
      gabarito: `Uma boa explicação diz que a IA reconheceu algo pela câmera ou pelo microfone e contou para o Scratch, que mostrou o nome da classe no palco em tempo real, usando a extensão como ponte. Qualquer explicação clara com essa ideia central está correta.`,
    },
  ],
};
