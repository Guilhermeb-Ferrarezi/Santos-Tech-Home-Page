import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A ideia do meu mini-projeto",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Cada criança planeja seu próprio mini-projeto com inteligência artificial, escolhendo um tema, decidindo quais gestos ou sons vai usar e o que deve acontecer na tela, e começa a montar o cenário e os personagens no Scratch com a ajuda do professor.`,
  descricao: `Nas quatro aulas anteriores a turma aprendeu a fazer a inteligência artificial conversar com o Scratch: a IA reconhece imagens, gestos e sons na Teachable Machine e o gatinho do Scratch reage a cada um deles. Agora chegou o momento mais especial do mês: cada criança vai imaginar e planejar o SEU mini-projeto, do jeito que ela quiser. Esta é a aula da ideia, da escolha e do primeiro rascunho na tela.

Por que parar para planejar antes de sair clicando? Porque um projeto sem plano vira bagunça. Quando a criança decide primeiro o tema (um jogo do astronauta, um aquário, um show de mágica), depois escolhe quais gestos ou sons vai ensinar para a IA e, por último, combina o que deve acontecer na tela, ela constrói com calma e não se perde. É a mesma diferença entre montar um quebra-cabeça olhando a foto da caixa ou montar de olhos fechados. O plano é a foto da caixa.

Nesta aula o professor guia a turma por três perguntas simples e poderosas: "Qual é o seu tema?", "O que a IA vai reconhecer?" e "O que acontece na tela quando ela reconhece?". Cada criança responde no papel, com desenho e poucas palavras, criando o seu mapa do projeto. Esse papel será o guia das próximas aulas, quando o jogo de fato será construído e treinado.

Depois do plano no papel, a turma abre o Scratch e dá os primeiros passos práticos: escolher um cenário (o palco do projeto) e os personagens (os sprites) que vão fazer parte da história. Ninguém precisa terminar nada hoje — a meta é sair da aula com a ideia clara, o papel preenchido e o Scratch já com a cara do projeto começando a aparecer.`,
  materiais: [
    `Computadores ligados, um por criança, com a Teachable Machine (teachablemachine.withgoogle.com) e o Scratch (scratch.mit.edu, na opção Criar) já abertos em abas separadas do navegador.`,
    `Projetor ou TV grande espelhando a tela do professor para demonstrar como escolher cenário e personagens no Scratch.`,
    `Uma folha de planejamento impressa para cada criança, o "Mapa do meu projeto", com três espaços: Tema, O que a IA reconhece e O que acontece na tela.`,
    `Lápis de cor e canetinhas para as crianças desenharem a ideia no Mapa do projeto.`,
    `Dois ou três exemplos prontos e simples feitos pelo professor (por exemplo: mostrar a mão aberta e o foguete decola; bater palma e o peixe nada), para inspirar sem copiar.`,
    `Um cartaz grande com as três perguntas do plano para deixar visível na parede durante toda a aula.`,
    `Adesivos de estrelinha para premiar quem terminar o Mapa do projeto com as três partes preenchidas.`,
  ],
  conceitosChave: [
    `Mini-projeto — uma criação só sua, do começo ao fim, com um tema escolhido por você.`,
    `Tema — o assunto do projeto, como espaço, animais ou mágica; é a ideia principal de tudo.`,
    `Planejar — pensar e combinar primeiro o que você vai fazer, antes de começar a montar.`,
    `Gesto — um movimento do corpo, como a mão aberta ou o joinha, que a IA aprende a reconhecer.`,
    `Som — um barulho como uma palma ou uma palavra, que a IA também pode aprender a escutar.`,
    `Cenário — o fundo da tela no Scratch, o lugar onde a história acontece, como um céu ou um mar.`,
    `Personagem (sprite) — o bichinho ou bonequinho que aparece na tela e obedece aos comandos.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é uma aula de planejamento, não de programação pesada. O grande objetivo é que cada criança saia com uma ideia clara no papel e o Scratch já começando a ter a cara do projeto. Não se preocupe em treinar a IA ou montar blocos hoje — isso é a Aula 6. Aqui você colhe a ideia e prepara o palco.

Relembre rapidamente como o mês funciona: a Teachable Machine é o lugar onde a IA aprende (a gente mostra exemplos de imagem, gesto ou som e ela aprende a reconhecer). O Scratch é o lugar onde a história acontece (cenário e personagens que reagem). Nas aulas passadas a turma já ligou os dois. Hoje cada criança decide o que o SEU projeto vai reconhecer e o que vai aparecer na tela.

No Scratch, dois conceitos bastam para esta aula. O Palco (Stage), no canto inferior direito, é onde se escolhe o Cenário (Backdrop): clique no ícone de imagem com o sinal de mais, lá embaixo à direita, e o catálogo de fundos abre. Os Personagens (Sprites) ficam logo acima, na faixa de sprites: clique no botão redondo azul de gatinho com o sinal de mais para abrir o catálogo de personagens. É só isso que as crianças vão mexer hoje.

## Passo a passo da aula

Aquecimento e revisão (10 min): Reúna a turma diante do projetor. Mostre um exemplo pronto seu: faça o gesto da mão aberta na webcam e deixe o foguete decolar na tela do Scratch. Pergunte: "Quem fez a IA reagir?" e "O que apareceu na tela?". Conte que hoje cada um vai inventar o SEU projeto, com o tema que quiser.

Conteúdo novo guiado (15 min): Apresente o cartaz das três perguntas: 1) Qual é o seu tema? 2) O que a IA vai reconhecer (qual gesto ou qual som)? 3) O que acontece na tela quando ela reconhece? Pense em voz alta um exemplo completo na frente deles: "Meu tema é o espaço. A IA reconhece a mão aberta. Quando vê a mão aberta, o foguete sobe." Entregue o Mapa do projeto e peça que cada criança preencha desenhando e escrevendo pouco. Passe nas mesas ajudando quem travar a escolher entre duas ideias.

Mão na massa (25 min): Com o Mapa preenchido, a turma vai para o Scratch (aba já aberta, na tela Criar). Primeiro o cenário: clique no ícone de paisagem com o sinal de mais, no canto inferior direito, e escolha um fundo que combine com o tema (Stars para espaço, Underwater para aquário). Depois os personagens: clique no botão azul de gatinho com o sinal de mais, na faixa de sprites, e escolha um ou dois personagens. Para apagar o gato padrão, clique nele e na lixeira. Ninguém precisa programar nada; a meta é o palco montado.

Desafio e compartilhar (10 min): Desafio "Conta o seu plano": cada criança mostra o Mapa e diz em uma frase o que a IA dela vai fazer. Dois ou três voluntários mostram o Scratch no projetor com o cenário e o personagem escolhidos. Premie com estrelinha quem completou as três partes do Mapa.

## Como explicar para crianças

Use a ideia de "montar uma peça de teatro". O tema é sobre o que é a peça. Os gestos e sons são as senhas mágicas que fazem a mágica acontecer. O cenário é o lugar onde a peça se passa, e os personagens são os atores. Diga: "Primeiro a gente pensa, depois a gente monta", como decidir a brincadeira antes de começar a brincar. Repita as três perguntas como uma musiquinha: "Qual o tema? O que a IA vê ou ouve? O que aparece na tela?". Valorize cada ideia, mesmo as bem diferentes — o projeto é da criança.

## Erros comuns e como ajudar

O erro mais comum é a criança querer um projeto gigante (um jogo inteiro com dez fases). Ajude a encolher para UMA coisa que acontece: um gesto, uma reação. Outra dificuldade é não conseguir escolher o tema; ofereça três opções prontas (espaço, animais, mágica) para ela apontar. No Scratch, muitos clicam no botão errado: lembre que o ícone de paisagem lá embaixo é para o FUNDO e o gatinho azul é para o PERSONAGEM. Se alguém apagar tudo sem querer, o Ctrl + Z volta no tempo. E reforce sempre: hoje a gente só planeja e monta o palco; treinar a IA é na próxima aula.`,
  exercicios: [
    {
      titulo: `Qual é o meu tema?`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Sente a turma em roda e mostre o cartaz das três perguntas. Foque só na primeira: o tema. Dê três exemplos prontos (espaço, animais, mágica) para destravar quem não tiver ideia. Deixe cada criança falar seu tema em voz alta, em uma palavra ou frase curta. Valorize todas as escolhas.`,
      atividade: `Pense e fale: qual vai ser o tema do seu projeto? É sobre o espaço? Sobre animais? Sobre mágica? Sobre futebol? Escolha um e conte para a turma em uma frase bem curtinha.`,
      gabarito: `Acertou quem escolheu um único tema claro e conseguiu dizê-lo em voz alta (por exemplo: "o meu é do astronauta"). Não existe tema errado; o esperado é que a criança decida UM tema e o comunique, sem ficar pulando de ideia em ideia.`,
    },
    {
      titulo: `A senha mágica da IA`,
      tipo: `Discussão guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Explique que a IA precisa de uma senha mágica: um gesto OU um som que ela vai aprender a reconhecer. Relembre os exemplos do mês (mão aberta, joinha, palma, falar uma palavra). Peça que cada criança escolha UMA senha que combine com o tema dela. Ajude quem misturar muitas senhas a ficar só com uma.`,
      atividade: `Escolha a senha mágica do seu projeto: vai ser um gesto (como a mão aberta ou o joinha) ou um som (como bater palma ou falar uma palavra)? Diga qual você escolheu e mostre o gesto ou faça o som para a turma.`,
      gabarito: `Acertou quem escolheu UMA senha — um gesto ou um som — e conseguiu demonstrá-la. Espera-se coerência simples com o tema (por exemplo, no tema espaço, a mão aberta para o foguete subir), mas qualquer escolha clara e única já está correta.`,
    },
    {
      titulo: `O Mapa do meu projeto`,
      tipo: `Atividade no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a folha "Mapa do meu projeto" com os três espaços: Tema, O que a IA reconhece e O que acontece na tela. Mostre o seu mapa preenchido no projetor como modelo. Peça desenho e poucas palavras. Passe nas mesas garantindo que as três partes sejam preenchidas. Premie com estrelinha quem completar.`,
      atividade: `Preencha o seu Mapa do projeto desenhando e escrevendo pouquinho: 1) o Tema; 2) o que a IA vai reconhecer (seu gesto ou som); 3) o que acontece na tela quando ela reconhece. Capriche no desenho!`,
      gabarito: `Acertou quem preencheu as TRÊS partes do mapa de forma combinada, por exemplo: Tema = espaço; A IA reconhece = mão aberta; Na tela = o foguete sobe. O importante é que as três respostas conversem entre si e que a criança consiga explicar o seu mapa.`,
    },
    {
      titulo: `Montando o palco no Scratch`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre primeiro no projetor: no Scratch, clique no ícone de paisagem com o sinal de mais (canto inferior direito) e escolha um cenário que combine com o tema. Depois clique no botão azul de gatinho com o sinal de mais (faixa de sprites) e escolha um personagem. Mostre como apagar o gato padrão (clicar nele e na lixeira). Depois a turma repete. Circule ajudando a achar os botões certos.`,
      atividade: `No Scratch, monte o palco do seu projeto: 1) escolha um Cenário que combine com o seu tema clicando no ícone de paisagem lá embaixo à direita; 2) escolha um Personagem clicando no gatinho azul com o sinal de mais. Não precisa programar nada ainda!`,
      gabarito: `Acertou quem deixou na tela um cenário coerente com o tema e ao menos um personagem escolhido por conta própria. Não se exige nenhum bloco de programação. Se a criança trocou o cenário e adicionou um sprite usando os botões certos, está perfeito.`,
    },
    {
      titulo: `Conta o seu plano`,
      tipo: `Desafio + compartilhar`,
      tempo: `8 minutos`,
      guiaProfessor: `Junte tudo num desafio de apresentação curtinho. Cada criança usa o Mapa e a tela do Scratch para contar o plano em uma frase só. Convide dois ou três voluntários para mostrar no projetor. Trate como ensaio do showcase do fim do mês: elogie a clareza, ajude quem travar com as três perguntas do cartaz.`,
      atividade: `Desafio final: olhando o seu Mapa e a sua tela do Scratch, conte para a turma em UMA frase o que a sua IA vai fazer. Por exemplo: "Quando eu mostro a mão aberta, o meu foguete sobe no céu cheio de estrelas".`,
      gabarito: `Acertou quem conseguiu resumir o projeto numa frase ligando os três pedaços: a senha (gesto ou som), o reconhecimento da IA e o que acontece na tela. Esperado algo como "quando eu bato palma, o peixe nada no aquário". Participar e comunicar o plano com clareza é o sucesso desta aula.`,
    },
  ],
};
