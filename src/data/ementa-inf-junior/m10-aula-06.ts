import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "A IA Pode Errar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `A criança descobre que a Inteligência Artificial às vezes erra ou inventa coisas nas figuras que cria, aprende a apontar esses erros divertidos com o olhar atento e entende que sempre precisa pedir e conferir com um adulto.`,
  descricao: `Nas aulas anteriores a turma descobriu que a Inteligência Artificial pode virar nossas palavras em figuras incríveis. Hoje vem uma surpresa importante: a IA não é perfeita. Às vezes ela faz uma mão com seis dedos, um gato com três orelhas, uma bicicleta com a roda no lugar errado ou inventa uma palavra escrita toda embaralhada. A IA não faz isso de propósito nem por maldade: ela só está tentando adivinhar como o desenho deveria ser, e de vez em quando erra a adivinhação. Mostrar isso para as crianças não as deixa com medo da IA; pelo contrário, deixa elas mais espertas e no comando.

A ideia central da aula é simples e poderosa: a máquina ajuda, mas quem confere é a gente. Igual a uma calculadora, que faz conta rápido mas não sabe se digitamos o número certo, a IA cria a figura rápido mas não sabe se ela ficou estranha. Por isso os olhos atentos de uma criança e a ajuda de um adulto são tão importantes. Aprender a olhar de novo, perceber o que ficou esquisito e dizer está errado aqui é uma das habilidades mais valiosas de toda a jornada com tecnologia.

Na prática, a turma vai virar uma equipe de detetives de erros. O professor mostra no projetor imagens engraçadas feitas pela IA, cheias de defeitos divertidos, e as crianças apontam o que está estranho: o dedo a mais, a sombra no lugar errado, o animal com a cor trocada. Depois, no computador, elas mesmas pedem figuras à IA, observam o resultado com calma e marcam numa folhinha o que acharam certo e o que ficou errado. Tudo com leveza e muita risada, porque os erros da IA costumam ser engraçados.

O professor não precisa ser especialista em Inteligência Artificial para conduzir esta aula. Basta seguir o passo a passo, ter alguns exemplos de imagens estranhas já prontos (caso a IA do dia colabore fazendo tudo certinho) e reforçar sempre a mensagem do mês: a IA é uma ajudante divertida, mas o ser humano é quem decide, confere e pede ajuda a um adulto quando precisa.`,
  materiais: [
    `Um computador por aluno com a Inteligência Artificial de imagem aberta (o Gemini, no site gemini.google.com, ou a ferramenta de imagem que a escola usa), já com a conta do professor logada e a tela pronta para digitar um pedido.`,
    `Um computador do professor ligado ao projetor ou à TV, para mostrar na tela grande as figuras estranhas e o passo a passo de pedir uma imagem.`,
    `Uma pasta de exemplos prontos: de 4 a 6 imagens feitas por IA com erros divertidos e bem visíveis (mão com dedo a mais, gato com três orelhas, bicicleta torta, palavra embaralhada na figura), salvas no computador caso a IA do dia faça tudo certo.`,
    `Folhas impressas da Ficha do Detetive, com dois quadradinhos por imagem: um certinho para o que ficou bom e um X para o que ficou errado, e um espaço para circular o erro.`,
    `Lápis de cor, canetinhas e uma lupa de brinquedo (ou recortada em papel) para a brincadeira de detetive de erros.`,
    `Cartaz grande com a frase do mês bem visível: A IA ajuda, mas quem confere sou EU e um adulto.`,
    `Adesivos ou carimbos de Detetive Esperto para premiar quem encontrar erros no desafio final.`,
  ],
  conceitosChave: [
    `Erro da IA — quando a Inteligência Artificial faz uma figura estranha, com algo que não existe de verdade, como uma mão com seis dedos.`,
    `Inventar (alucinação) — quando a IA cria uma coisa que não é real, só porque tentou adivinhar e errou a adivinhação.`,
    `Conferir — olhar a figura de novo, com calma, para ver se está tudo certo ou se ficou alguma coisa esquisita.`,
    `Olho atento — prestar bastante atenção nos detalhes para encontrar o que está errado, igual a um detetive com a lupa.`,
    `Pedir ajuda — chamar um adulto para conferir junto e ajudar quando a figura ficou estranha ou a gente ficou em dúvida.`,
    `A IA não é perfeita — a máquina é rápida e divertida, mas pode errar; por isso o ser humano sempre confere o resultado.`,
    `Erro divertido — quando o engano da IA fica tão engraçado que dá vontade de rir, como um cachorro com a cara de gato.`,
  ],
  treinamento: `## O que o professor precisa saber

A mensagem desta aula é uma só: a Inteligência Artificial é muito útil, mas pode errar, e por isso o ser humano sempre confere. As IAs de imagem, como o Gemini, criam figuras tentando adivinhar como o desenho deveria ser a partir das suas palavras. Quase sempre acertam, mas às vezes inventam coisas: mãos com dedos a mais, olhos tortos, letras embaralhadas dentro da figura, objetos derretidos ou animais com partes trocadas. Quando a IA inventa algo que não existe, os adultos chamam isso de alucinação; com as crianças, basta dizer que a IA inventou ou se confundiu.

Prepare-se antes da aula gerando você mesmo algumas imagens com erros e salvando as melhores na pasta de exemplos. Bons pedidos para provocar erros engraçados: uma pessoa tocando piano com as duas mãos, um relógio mostrando as horas, uma placa com a palavra ESCOLA escrita. Esses pedidos costumam confundir a IA e geram mãos e letras estranhas. Tenha de 4 a 6 prontas, porque no dia da aula a IA pode acabar acertando tudo.

No Gemini, o caminho é simples: abra gemini.google.com já logado, clique na caixa de texto embaixo (onde está escrito algo como Insira um comando aqui ou Pergunte ao Gemini), digite o pedido começando com Crie uma imagem de e aperte Enter ou a setinha de enviar. A figura aparece em alguns segundos logo acima da caixa.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Gemini)

1. Aquecimento e revisão (10 min). Sente a turma de frente para o projetor. Relembre: nas aulas passadas a IA virou nossas palavras em figuras. Mostre uma imagem bonita que a IA fez e elogie. Depois faça cara de surpresa e mostre uma das figuras estranhas da pasta de exemplos: ué, tem alguma coisa errada aqui? Deixe as crianças apontarem o dedo a mais ou a orelha extra. Apresente o cartaz: a IA ajuda, mas quem confere sou eu e um adulto.

2. Conteúdo novo guiado (15 min). No seu computador projetado, abra o Gemini, clique na caixa de texto embaixo e digite na frente da turma: Crie uma imagem de uma pessoa tocando piano. Aperte Enter. Quando a figura aparecer acima da caixa, conte os dedos em voz alta com a turma e procurem juntos algo estranho. Explique com calma: a IA tentou adivinhar e às vezes erra; por isso a gente sempre confere e pede para um adulto olhar.

3. Mão na massa (25 min). Cada criança vai ao próprio computador com o Gemini aberto. Peça que digitem um pedido simples (você dita devagar, letra por letra, ou cola um pedido pronto) e apertem Enter. Quando a figura aparecer, entregue a Ficha do Detetive: elas marcam o certinho no que ficou bom e o X no que ficou errado, e circulam o erro com o lápis. Circule pela sala, ponha o dedo na tela ajudando a achar os detalhes e reforce que pedir ajuda é coisa de gente esperta.

4. Desafio e compartilhar (10 min). Desafio do Detetive: cada criança mostra a figura para um colega do lado e os dois tentam achar mais um erro escondido. Quem encontrar ganha o adesivo de Detetive Esperto. Feche em roda repetindo a frase do mês e perguntando: quem é que sempre confere o trabalho da IA? Resposta: eu e um adulto.

## Como explicar para crianças de 5 a 9 anos

Use a analogia da calculadora ou do amigo que conta histórias: a IA é rápida e esperta, mas às vezes se confunde e inventa, igual a um amigo que conta uma história e exagera. Por isso a gente confere. Diga que erro não é coisa feia: todo mundo erra, até as máquinas, e o legal é descobrir o erro e dar risada.

Transforme a conferência num jogo de detetive: cada criança ganha uma lupa e a missão de caçar o que está esquisito na figura. Conte os dedos juntos, em voz alta, apontando cada um. Sempre termine reforçando que, quando a figura fica estranha ou ela fica em dúvida, a coisa mais esperta a fazer é chamar um adulto para olhar junto.

## Erros comuns e como ajudar

- A criança acha que a IA é burra ou ruim. Explique com carinho que a IA não é ruim, ela só se confundiu; errar faz parte e é por isso que a gente confere.

- A criança fica frustrada porque a figura dela ficou errada. Comemore o erro: que erro engraçado, você é um ótimo detetive por ter achado! O erro vira diversão, não fracasso.

- A criança não percebe nenhum erro na imagem. Ajude apontando devagar com o dedo: vamos contar os dedos juntos? Olha a cor desse gato, está certa? Guie o olhar para um detalhe de cada vez.

- A criança quer só ficar pedindo figuras novas e não para para conferir. Lembre que a missão de hoje não é fazer muitas, é olhar com atenção; uma figura bem conferida vale mais que dez sem olhar.

- A criança tenta resolver sozinha uma figura confusa ou estranha. Reforce a regra de ouro do mês: quando ficar em dúvida, chame um adulto; pedir ajuda é coisa de gente esperta.`,
  exercicios: [
    {
      titulo: `Caça ao erro no telão`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma de frente para o projetor e abra, uma por uma, as imagens estranhas da pasta de exemplos. Comece com a mais óbvia (a mão com dedo a mais costuma ser fácil). Pergunte sempre: tem alguma coisa errada nessa figura? O que está esquisito? Deixe as crianças apontarem o dedo para a tela e falarem. Conte detalhes em voz alta com elas (vamos contar os dedos: um, dois, três...). Reforce que a IA se confundiu e que elas são ótimas detetives por terem achado.`,
      atividade: `Olhe bem cada figura que a professora mostrar no telão. Levante a mão e diga o que está estranho: É a mão? São as orelhas? A cor está errada? Aponte o erro com o dedo e conte para a turma o que você descobriu.`,
      gabarito: `A criança observa a imagem e aponta pelo menos um erro real (um dedo a mais, uma orelha extra, uma cor trocada, uma letra embaralhada). Acerta quem participa apontando algo esquisito na figura, mesmo que precise de uma pista do professor para enxergar o detalhe.`,
    },
    {
      titulo: `Conta os dedos no Gemini`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Garanta que cada criança está com o Gemini aberto no próprio computador. Demonstre primeiro no seu, projetado: clique na caixa de texto embaixo, digite Crie uma imagem de uma pessoa tocando piano e aperte Enter. Quando a figura aparecer acima da caixa, conte os dedos em voz alta. Depois oriente cada criança a digitar (você dita devagar, letra por letra) e apertar Enter. Quando a figura surgir, peça que contem os dedos das mãos da pessoa na figura. Circule e ajude a apontar.`,
      atividade: `No seu computador, clique na caixinha de escrever embaixo do Gemini e digite (com a ajuda da professora): Crie uma imagem de uma pessoa tocando piano. Aperte Enter e espere a figura aparecer. Agora conte os dedos das mãos na figura, apontando um por um. Quantos dedos tem cada mão? Está certo ou a IA se confundiu?`,
      gabarito: `A criança consegue digitar o pedido com ajuda, gerar a figura e contar os dedos apontando. Acerta quem percebe se o número de dedos está certo ou errado e diz em voz alta se a IA se confundiu ou acertou, mesmo precisando de ajuda para contar.`,
    },
    {
      titulo: `A Ficha do Detetive`,
      tipo: `Prática com papel`,
      tempo: `14 min`,
      guiaProfessor: `Entregue a Ficha do Detetive impressa, com um quadradinho de certinho, um de X e um espaço para circular o erro. Depois que cada criança gerar uma figura no Gemini, oriente o passo a passo: olhar a figura inteira com calma, marcar o certinho no que ficou bom, marcar o X se achar algo errado e circular o erro na figura desenhando ou apontando. Projete um exemplo seu e preencha a ficha junto com a turma primeiro. Circule ajudando a guiar o olhar, um detalhe de cada vez.`,
      atividade: `Pegue a sua Ficha do Detetive. Olhe com bastante atenção a figura que a IA fez para você. Marque um certinho no que ficou bonito e certo. Se achar algo errado, marque um X e circule o errinho. No fim, conte para a professora: o que a IA acertou e o que ela inventou?`,
      gabarito: `A criança preenche a ficha de forma honesta, marcando o certinho e o X depois de olhar a figura de verdade, e consegue circular ou apontar pelo menos um detalhe. Acerta quem conta com suas palavras o que ficou bom e o que a IA inventou, mesmo com uma ajudinha.`,
    },
    {
      titulo: `Desenhe o erro mais engraçado`,
      tipo: `Desenho`,
      tempo: `12 min`,
      guiaProfessor: `Sente a turma para um momento mais calmo de desenho. Peça que cada criança lembre do erro mais engraçado que viu hoje (na própria figura ou nos exemplos do telão) e o desenhe numa folha, bem exagerado e divertido. Enquanto desenham, passe perguntando o que a IA inventou ali. Use esse momento para reforçar, sem peso, que errar é normal e que o importante é a gente perceber e dar risada. Exponha os desenhos num cantinho da sala como a galeria de erros divertidos.`,
      atividade: `Lembre do erro mais engraçado que a IA fez hoje, na sua figura ou no telão. Numa folha, desenhe esse erro bem grande e divertido: pode ser a mão com muitos dedos, o gato de três orelhas ou o que você quiser. Embaixo, faça uma carinha rindo, porque o erro foi engraçado!`,
      gabarito: `A criança desenha um erro de IA reconhecível (uma parte a mais, uma cor trocada, algo fora do lugar) e demonstra entender que aquilo foi um engano da IA, não algo real. Acerta quem representa um erro divertido e consegue explicar por que aquilo está errado.`,
    },
    {
      titulo: `O grande desafio do Detetive Esperto`,
      tipo: `Desafio`,
      tempo: `14 min`,
      guiaProfessor: `Este é o fechamento. Explique a missão inteira antes de começar: cada criança gera (ou usa a figura que já fez) e troca de lugar com o colega do lado para virar detetive da figura do amigo, tentando achar um erro escondido. Reforce a regra de ouro: se a figura ficar muito estranha ou surgir uma dúvida, a coisa mais esperta é chamar um adulto para olhar junto. Quem achar um erro ganha o adesivo de Detetive Esperto. Feche em roda repetindo a frase do mês: a IA ajuda, mas quem confere sou eu e um adulto.`,
      atividade: `Sua missão de Detetive Esperto: 1. Olhe a figura do colega do lado com bastante atenção (pode usar a lupa). 2. Tente achar pelo menos um erro escondido que a IA inventou. 3. Mostre o erro para o colega e conte para a professora. 4. Se a figura estiver muito confusa, chame um adulto para conferir junto. Quem achar o erro vira Detetive Esperto!`,
      gabarito: `A criança examina a figura do colega, encontra ou aponta pelo menos um erro e o comunica, e demonstra saber que deve chamar um adulto em caso de dúvida. Acerta quem participa como detetive, aponta um erro real e repete, com suas palavras, que a IA pode errar e que a gente sempre confere.`,
    },
  ],
};
