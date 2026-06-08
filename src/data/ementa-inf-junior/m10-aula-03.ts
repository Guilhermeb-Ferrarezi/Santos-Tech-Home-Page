import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Palavras Mágicas Viram Figuras",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança entende que uma IA de imagem transforma uma frase curta em um desenho e escolhe a sua primeira ideia de figura para testar com a ajuda do professor.`,
  descricao: `Nas duas primeiras aulas do mês a turma descobriu o que é a Inteligência Artificial e como ela aprende olhando muitos exemplos. Hoje vem a parte mais encantadora: a criança vai ver que existe uma IA que desenha. A gente fala ou dita uma ideia bem curtinha, como 'um gato astronauta', e a IA pensa um pouquinho e desenha aquilo na tela. É como ter um robô artista que entende as nossas palavras e vira pintor.

A grande novidade desta aula é a ideia de que as palavras que a gente escolhe são como palavras mágicas: elas mandam na figura. Esse pedidinho que a gente faz para a IA tem um nome de gente grande, prompt, mas para as crianças basta dizer 'a frase mágica' ou 'o pedido'. Quanto mais clara a frase, mais a IA acerta o que a gente imaginou. Se a frase for confusa ou vazia, a figura sai estranha. Por isso o foco de hoje é montar frases simples e bem ditas: o quê, como e onde (um cachorro, azul, na praia).

Para a idade de 5 a 9 anos, o melhor jeito é o professor demonstrar muito no telão e a criança experimentar com ajuda. Como a leitura e a escrita ainda estão em desenvolvimento, o professor escreve ou dita as frases por elas: a criança fala a ideia em voz alta e vê a frase virar figura. O encantamento de ver 'um dinossauro tomando sorvete' aparecer do nada é o motor da aula. Não existe figura certa ou errada; o que vale é perceber que a frase comanda o desenho.

Esta aula abre o caminho para as próximas. Depois de ver como a frase vira figura, na aula 4 cada criança vai criar a sua própria imagem com mais autonomia. Hoje a meta é simples e poderosa: cada aluno escolhe e guarda a primeira ideia de figura que quer ver ganhar vida com a IA, entendendo que foram as palavras dele que fizeram a mágica acontecer.`,
  materiais: [
    `Um computador ligado por aluno (até 10), com a ferramenta de IA já aberta antes da turma chegar (o Gemini em gemini.google.com ou a IA de imagem combinada pela escola), para não perder tempo com login na frente das crianças.`,
    `O computador do professor ligado ao projetor ou tela grande, com a mesma ferramenta de IA aberta e a conta já logada, para demonstrar para a turma toda ao mesmo tempo.`,
    `Três a quatro figuras prontas, geradas pelo professor antes da aula (por exemplo 'um gato astronauta', 'um dinossauro tomando sorvete', 'um cachorro azul na praia'), salvas e prontas para mostrar como exemplo de frase que virou desenho.`,
    `Cartões grandes com desenhos simples de objetos, cores e lugares (um gato, a cor azul, uma praia, um foguete), para a criança montar frases apontando, sem precisar ler.`,
    `Uma folha de papel por aluno com espaço para desenhar a ideia da figura e lápis de cor, para o momento de planejar o pedido no papel.`,
    `Adesivos ou carimbos de estrela para premiar quem disser a sua primeira frase mágica no final.`,
    `Um copo de água por perto e uma combinação de tempo (um cronômetro ou ampulheta visível), porque a IA demora alguns segundos para desenhar e ajuda a turma a esperar com calma.`,
  ],
  conceitosChave: [
    `IA de imagem — um robô esperto que desenha figuras quando a gente pede com palavras; é como um artista que mora dentro do computador.`,
    `Frase mágica (prompt) — o pedido que a gente faz para a IA; são as palavras que dizem o que ela deve desenhar.`,
    `Caixa de mensagem — o lugar na tela, embaixo, onde a gente escreve ou dita a frase mágica para a IA.`,
    `Gerar — o momento em que a IA pensa e cria a figura depois que a gente manda o pedido.`,
    `Ditar — falar a ideia em voz alta para o professor ou para o microfone, em vez de escrever, quando a gente ainda está aprendendo a escrever.`,
    `Ideia clara — uma frase que diz o quê, como e onde (um cachorro azul na praia), para a IA acertar o desenho.`,
    `Esperar — o tempinho de alguns segundos que a IA leva para terminar a figura, como esperar a pipoca estourar.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma IA de imagem é um programa que recebe uma frase em palavras e devolve um desenho novo, criado na hora. Ela não copia uma figura pronta da internet: ela monta uma imagem inédita a partir do que aprendeu vendo milhões de exemplos (a ideia da aula 2). A frase que a gente digita ou dita chama-se prompt; com as crianças, chame de 'frase mágica' ou 'pedido'. A regra de ouro é simples: frase clara gera figura boa; frase vazia ou confusa gera figura estranha.

Há dois caminhos possíveis na escola. No Gemini (gemini.google.com), com a conta já logada, há uma caixa de mensagem na parte de baixo da tela; você digita o pedido, por exemplo 'desenhe um gato astronauta', e aperta Enter ou o botão de enviar (a setinha). A IA leva alguns segundos e mostra a imagem. Se a escola usar outra IA de imagem combinada, o caminho é o mesmo: achar a caixa de escrever embaixo, digitar e enviar. Teste tudo ANTES da aula, gere as figuras-exemplo e deixe a conta logada, para não digitar senha na frente das crianças.

Como a leitura e a escrita das crianças estão em desenvolvimento, o professor é o digitador. A criança fala a ideia em voz alta e você escreve a frase por ela, lendo em voz alta enquanto digita, para ela ver as palavras virarem figura. Combine uma frase de cada vez para a turma não ficar agitada.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Gemini ou na IA de imagem)

1. Aquecimento e revisão (10 min): receba a turma e relembre as aulas passadas. Pergunte: 'O que a IA sabe fazer? Como ela aprende?'. Mostre no projetor as suas figuras-exemplo já prontas e diga: 'Olhem este gato astronauta. Sabem como ele apareceu? Eu falei essas palavras para a IA e ela desenhou. Hoje a gente faz isso também.'

2. Conteúdo novo guiado (15 min): no seu computador, no Gemini (gemini.google.com), aponte a caixa de mensagem lá embaixo da tela. Diga: 'Aqui a gente escreve o pedido.' Digite devagar, lendo em voz alta, uma frase combinada com a turma, por exemplo 'um dinossauro tomando sorvete'. Aperte Enter (ou a setinha de enviar). Aponte o cronômetro e diga: 'Agora a gente espera a IA pensar.' Quando a figura aparecer, comemore e mostre que foram as palavras que comandaram o desenho.

3. Mão na massa (25 min): leve cada criança ao seu computador, com a ferramenta já aberta. Passe nas mesas e, um por um, peça a ideia em voz alta. Digite o pedido da criança por ela, lendo as palavras enquanto escreve. Aperte enviar juntos e contem os segundos enquanto a IA desenha. Deixe cada uma ver a sua figura nascer. Se der tempo, troque uma palavra (a cor, o lugar) e mostre que a figura muda.

4. Desafio e compartilhar (10 min): peça que cada criança escolha e diga em voz alta a sua primeira frase mágica favorita (o que ela mais quer ver a IA desenhar na próxima aula). Anote a frase de cada um. Um por um, mostre a figura que saiu na tela ou no projetor. Dê a estrelinha para todos que disseram o seu pedido.

## Como explicar para crianças de 5 a 9 anos

Chame a IA de imagem de 'robô artista' e o prompt de 'frase mágica'. Diga: 'Quando a gente fala as palavras certas, o robô desenha o que a gente pediu, como num passe de mágica.' Use os cartões: a criança aponta um cartão de gato, um de azul e um de praia, e você lê 'um gato azul na praia' montando a frase com ela. Compare a espera com coisas que elas conhecem: 'A IA pensa um pouquinho, igual a pipoca que demora para estourar.' Reforce sempre que as palavras mandam na figura: 'Se eu pedir um gato, vem um gato; se eu pedir um gato astronauta, vem com capacete.' Deixe a criança falar a ideia, porque o encantamento vem de ver o próprio pedido ganhar vida.

## Erros comuns e como ajudar

Frase vazia ou de uma palavra só (a criança diz só 'gato'): ajude a completar com como e onde, 'um gato laranja dormindo', para a figura ficar mais legal. Querer tudo de uma vez (um gato e um cachorro e um foguete e dez coisas): combine uma ideia por vez para a IA não se confundir. Ansiedade na espera dos segundos: use o cronômetro e a analogia da pipoca, contando juntos. Frustração porque a figura não saiu exatamente como imaginou: explique que a IA tenta do jeito dela e que dá para pedir de novo trocando uma palavra. Pedir coisas assustadoras ou bobas para testar: redirecione com gentileza para ideias bonitas e divertidas (isso será aprofundado na aula 5, usar a IA com carinho). Mexer no teclado e apagar o pedido: lembre que hoje quem digita é o professor, e a criança é a dona da ideia.`,
  exercicios: [
    {
      titulo: `Adivinhe a frase mágica`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em frente ao projetor com as suas figuras-exemplo já prontas na tela. Mostre uma de cada vez e pergunte qual frase fez aquela figura aparecer. O objetivo é a criança perceber a ligação entre as palavras e o desenho, sem precisar ler nem escrever, só falando.`,
      atividade: `Olhe a figura na tela grande. Tente adivinhar quais palavras o professor falou para a IA desenhar isso. Levante a mão e diga a sua ideia de frase mágica, por exemplo 'um gato com capacete de astronauta'.`,
      gabarito: `A criança liga a figura a uma frase de palavras possível, descrevendo o que vê (o gato, o astronauta, o sorvete). Acertou quem percebeu que foi um pedido em palavras que gerou aquele desenho, mesmo dizendo a frase com palavras diferentes das que o professor usou.`,
    },
    {
      titulo: `Monte o pedido com cartões`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Espalhe os cartões de objetos, cores e lugares numa mesa ou no chão. Explique que uma boa frase mágica tem o quê, como e onde. Cada criança escolhe três cartões (um objeto, uma cor, um lugar) e você lê a frase montada em voz alta. É um jogo de montar frases apontando, sem depender da escrita.`,
      atividade: `Escolha três cartões: um de uma coisa (gato, foguete, dinossauro), um de uma cor e um de um lugar. Junte os três e mostre para o professor ler a sua frase mágica, por exemplo 'um foguete vermelho na lua'.`,
      gabarito: `A criança seleciona um objeto, uma cor e um lugar e forma uma frase com sentido (coisa + cor + lugar). Acertou quem montou um pedido completo com os três cartões, entendendo que cada cartão acrescenta uma informação para a IA desenhar melhor, mesmo com ajuda para juntar.`,
    },
    {
      titulo: `Minha frase virou figura`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Leve cada criança ao seu computador com a ferramenta de IA já aberta. Peça a ideia em voz alta e digite o pedido por ela na caixa de mensagem (no Gemini, a caixa fica embaixo da tela), lendo as palavras enquanto escreve. Apertem enviar juntos e contem os segundos. Deixe a criança ver a figura nascer. Passe nas mesas garantindo que cada um teve a sua vez.`,
      atividade: `Fale para o professor a sua ideia de figura. Veja ele escrever a sua frase mágica na caixa lá embaixo da tela. Apertem enviar juntos e contem os segundinhos enquanto a IA desenha. Quando a figura aparecer, mostre para o coleguinha do lado.`,
      gabarito: `A criança diz uma ideia, vê a frase ser escrita e enviada, espera e observa a IA gerar a figura correspondente. Acertou quem acompanhou o caminho do pedido virar desenho na tela e reconheceu que a figura veio das palavras que ele escolheu, mesmo que o professor tenha digitado.`,
    },
    {
      titulo: `Desenho do meu pedido`,
      tipo: `Desenho`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a folha e os lápis de cor. Antes de pedir para a IA na próxima aula, a criança desenha no papel a ideia que tem na cabeça. Isso ajuda a planejar o pedido e a perceber a diferença entre o que ela imagina e o que a IA cria. Circule pela sala perguntando o que cada um desenhou e ajudando a transformar o desenho em uma frase falada.`,
      atividade: `Na sua folha, desenhe a figura que você quer pedir para a IA: pode ser um bicho, um lugar, uma cena divertida. Capriche e pinte. Depois conte para o professor, em voz alta, qual é a frase mágica do seu desenho.`,
      gabarito: `O desenho mostra uma ideia e a criança consegue dizer uma frase que combina com ele (o quê e, se possível, a cor e o lugar). Acertou quem transformou o próprio desenho em um pedido falado para a IA, mesmo que a frase seja simples, como 'um peixe roxo no mar'.`,
    },
    {
      titulo: `Escolho minha primeira ideia`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este é o ponto alto da aula e prepara a aula 4. Peça que cada criança decida qual é a primeira ideia de figura que ela mais quer ver a IA criar. Ajude a deixar a frase clara, com o quê, como e onde. Anote a frase escolhida de cada aluno para retomar na próxima aula. Um por um, a criança diz o seu pedido para a turma e ganha a estrelinha.`,
      atividade: `Pense bem e escolha a sua ideia favorita de figura para a IA desenhar. Deixe a frase bem clara: diga o quê, a cor e o lugar, por exemplo 'um unicórnio dourado voando no céu'. Quando o professor chamar, diga a sua primeira frase mágica para todo mundo ouvir.`,
      gabarito: `A criança escolhe uma ideia e a expressa em uma frase clara com pelo menos o objeto e mais um detalhe (cor ou lugar). Acertou quem fez uma escolha consciente e anunciou o seu pedido de forma compreensível, mostrando que entendeu que palavras claras geram figuras melhores, mesmo precisando de ajuda para completar a frase.`,
    },
  ],
};
