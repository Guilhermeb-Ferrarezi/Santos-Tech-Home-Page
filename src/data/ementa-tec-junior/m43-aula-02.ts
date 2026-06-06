import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Meu plano de peça no papel",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança escolhe uma peça e desenha um mini briefing no papel, com vista de frente e de lado, medidas aproximadas e a base de apoio, deixando o plano pronto para modelar no Maya na semana seguinte.`,
  descricao: `Na aula passada as crianças descobriram o que vira peça de verdade na impressora 3D. Hoje elas dão o segundo passo: transformar a ideia da cabeça em um desenho organizado no papel. Esse desenho é o que os profissionais chamam de briefing ou planta. Antes de qualquer artista 3D tocar no computador, ele rabisca a peça para decidir o tamanho, as partes principais e como o objeto vai ficar de pé. Desenhar primeiro economiza tempo e evita refazer tudo depois.

A grande ideia da aula é olhar a peça por dois lados: a vista de frente (como se você estivesse cara a cara com o objeto) e a vista de lado (como se você girasse o objeto 90 graus). Engenheiros e modeladores 3D usam essas duas vistas porque um desenho só de frente esconde informações importantes, como a espessura e a profundidade. Com as duas vistas juntas, qualquer pessoa consegue imaginar a peça inteira no espaço.

Outro ponto central é a base de apoio. Como a peça vai ser impressa de verdade, ela precisa ter um lugar plano para ficar em pé na bandeja da impressora, sem cair nem tombar. As crianças vão marcar no desenho qual é o lado que encosta na mesa. Peças muito finas, muito altas ou apoiadas em pontas costumam dar problema, então é melhor descobrir isso agora, no papel, do que depois de horas de impressão.

Por fim, elas anotam medidas aproximadas em centímetros e dão nomes às partes principais (por exemplo: corpo, cabeça, base, alça). Não precisa de precisão de régua perfeita; o objetivo é ter um plano claro e realista. No fim da hora, cada aluno sai com uma folha de briefing completa, pronta para virar modelo 3D no Maya.`,
  materiais: [
    `Computadores com o Maya já aberto em uma cena nova (para mostrar a relação entre o desenho e o que será modelado)`,
    `Projetor ligado para o professor mostrar exemplos de briefing e as vistas de frente e de lado`,
    `Exemplos prontos: dois ou três briefings simples já desenhados pelo professor (um chaveiro, um troféu pequeno, um suporte de celular)`,
    `Folhas de papel A4 ou fichas de briefing impressas, uma por criança e algumas extras`,
    `Lápis, borracha e lápis de cor ou canetinhas para destacar a base de apoio`,
    `Régua de 30 cm para medidas aproximadas e linhas retas`,
    `Alguns objetos reais pequenos da sala (apontador, peça de Lego, borracha grande) para servir de inspiração e de modelo de medida`,
  ],
  conceitosChave: [
    `Briefing — é o plano da sua peça no papel, com desenho, medidas e nomes das partes, feito antes de ir para o computador.`,
    `Vista de frente — é como você vê a peça olhando bem de frente para ela, mostrando a largura e a altura.`,
    `Vista de lado — é como você vê a peça depois de girá-la 90 graus, mostrando a profundidade e a espessura.`,
    `Base de apoio — é o lado plano da peça que encosta na bandeja da impressora e faz ela ficar de pé sem cair.`,
    `Medida aproximada — é um tamanho mais ou menos certo, em centímetros, sem precisar acertar milímetro por milímetro.`,
    `Partes principais — são os pedaços grandes da peça que ganham nome, como corpo, cabeça, base e alça.`,
    `Proporção — é o tamanho de uma parte comparado com a outra, para a peça não ficar com a cabeça gigante e o corpo minúsculo.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é quase toda no papel, então você não precisa dominar o Maya hoje. Você só vai usar o Maya rapidamente para mostrar a ligação entre o desenho e o modelo. O coração da aula é ensinar a criança a planejar antes de construir. Tenha em mãos dois ou três briefings já desenhados por você: um objeto bem simples (um chaveiro), um médio (um troféu) e um com base estreita (um suporte de celular). Eles servem de modelo visual. Lembre que peças para impressão precisam de uma base plana e de proporções que não quebrem; reforce isso o tempo todo.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: o que a gente descobriu na aula passada sobre o que vira peça de verdade? Ouça duas ou três respostas. Mostre no projetor um objeto real e pergunte: como ele fica de pé? Qual lado encosta na mesa? Apresente a palavra briefing como o plano da peça no papel.

15 min — Conteúdo novo guiado. No projetor, desenhe ao vivo um briefing simples. Faça a vista de frente, depois a vista de lado ao lado dela. Marque a base de apoio pintando o lado de baixo. Escreva medidas aproximadas em centímetros (por exemplo: 6 cm de altura, 3 cm de largura) e dê nomes às partes. Abra o Maya em uma cena nova, mostre o cubo cinza no centro e diga: na semana que vem, esse cubo vira a peça que vocês estão desenhando agora. Para criar o cubo, vá no menu superior, clique na aba Poly Modeling, e clique no ícone do cubo (Polygon Cube); ele aparece no centro da grade. Isso é só demonstração, sem aprofundar.

25 min — Mão na massa. Cada criança escolhe uma peça simples e desenha o próprio briefing: vista de frente, vista de lado, base de apoio pintada, medidas aproximadas em centímetros e nomes das partes principais. Circule pela sala, sente ao lado de cada um, e faça perguntas em vez de dar a resposta pronta: qual lado encosta na mesa? Essa pontinha não vai quebrar? Incentive escolhas realistas e proporções equilibradas.

10 min — Desafio e compartilhar. Desafio: cada criança escreve, embaixo do desenho, uma frase explicando por que a base escolhida é segura para a impressora. Depois, dois ou três voluntários mostram o briefing para a turma e contam qual é a parte mais difícil de imprimir. Recolha ou fotografe os briefings, porque eles serão usados na próxima aula.

## Como explicar para crianças

Use a analogia do pedreiro: ninguém constrói uma casa sem a planta no papel; a gente também não modela uma peça sem o briefing. Para as duas vistas, peça que imaginem uma foto de frente e uma foto de lado da mesma pessoa. Para a base de apoio, use a imagem de um boneco em pé: se os pés forem muito pequenos, ele cai. Fale sempre em centímetros e compare com objetos que elas conhecem, como uma borracha ou um dedo, para o tamanho fazer sentido.

## Erros comuns e como ajudar

Muitas crianças desenham a peça gigante e cheia de detalhes impossíveis de imprimir; peça para escolher algo simples e do tamanho de uma mão. Outras esquecem a vista de lado e só fazem a de frente; lembre que precisamos das duas para imaginar a peça inteira. Tem quem desenhe a peça flutuando, sem base; pare e pergunte qual lado encosta na mesa, e mande pintar esse lado. Há também quem faça pontas muito finas ou peças muito altas e estreitas, que tombam; sugira engrossar a base. Por último, alguns não anotam nenhuma medida; ajude estimando junto, comparando com um objeto real da sala.`,
  exercicios: [
    {
      titulo: `Frente ou lado?`,
      tipo: `Aquecimento oral`,
      tempo: `5 min`,
      guiaProfessor: `Mostre no projetor o briefing de exemplo (o troféu) com as duas vistas. Aponte para cada uma e deixe a turma responder em voz alta. Use para fixar o vocabulário antes do desenho.`,
      atividade: `O professor aponta para um desenho e a criança diz se aquela é a vista de frente ou a vista de lado, explicando como sabe.`,
      gabarito: `A vista de frente mostra a largura e a altura, como se você olhasse o objeto cara a cara. A vista de lado mostra a profundidade e a espessura, como se o objeto tivesse girado 90 graus. A criança acerta quando identifica a vista e cita pelo menos uma dessas pistas.`,
    },
    {
      titulo: `Caça à base de apoio`,
      tipo: `Observação prática`,
      tempo: `7 min`,
      guiaProfessor: `Coloque três objetos reais na mesa (apontador, peça de Lego, borracha grande). Peça que cada criança aponte a base de cada um. Reforce que a base precisa ser plana e larga o bastante.`,
      atividade: `Para cada objeto da mesa, a criança mostra qual lado é a base de apoio e diz se aquela base é segura ou se o objeto cairia fácil na impressora.`,
      gabarito: `A base de apoio é o lado plano que encosta na mesa. O apontador tem uma base plana boa; a peça de Lego apoia bem na parte de baixo; a borracha grande deita no lado mais largo. Bases largas e planas são seguras; bases pequenas ou em ponta fazem a peça tombar.`,
    },
    {
      titulo: `Meu desenho de frente`,
      tipo: `Desenho guiado`,
      tempo: `10 min`,
      guiaProfessor: `Cada criança escolhe sua peça e desenha só a vista de frente na folha. Circule conferindo se o tamanho é realista (cabe na mão) e se as partes principais aparecem. Não deixe avançar sem escolher uma peça simples.`,
      atividade: `Escolha uma peça simples e desenhe a vista de frente dela na folha, mostrando a altura e a largura e marcando onde ficam as partes principais.`,
      gabarito: `Um desenho de frente correto mostra o contorno da peça com altura e largura visíveis e tem pelo menos duas partes principais com nome (por exemplo: corpo e base). A peça deve ser simples e do tamanho aproximado de uma mão. Não é avaliado o capricho do traço, e sim a clareza do plano.`,
    },
    {
      titulo: `Briefing completo`,
      tipo: `Produção individual`,
      tempo: `8 min`,
      guiaProfessor: `Agora a criança acrescenta a vista de lado, pinta a base de apoio e escreve as medidas aproximadas em centímetros. Ajude a estimar medidas comparando com objetos reais. Confira se a base pintada é plana.`,
      atividade: `Complete seu briefing: desenhe a vista de lado ao lado da de frente, pinte a base de apoio e escreva as medidas aproximadas em centímetros de cada parte principal.`,
      gabarito: `O briefing completo tem as duas vistas (frente e lado), a base de apoio pintada num lado plano e medidas aproximadas em centímetros (por exemplo: altura 6 cm, largura 3 cm). As medidas não precisam ser exatas, só realistas. A base pintada deve estar embaixo, encostando na mesa.`,
    },
    {
      titulo: `Defenda sua base`,
      tipo: `Desafio e compartilhamento`,
      tempo: `5 min`,
      guiaProfessor: `Peça que cada criança escreva uma frase justificando a base escolhida e apontando a parte mais difícil de imprimir. Dois ou três voluntários apresentam. Use as respostas para preparar a aula de modelagem.`,
      atividade: `Escreva embaixo do desenho uma frase explicando por que a base que você escolheu é segura para a impressora e qual parte da peça você acha mais difícil de imprimir.`,
      gabarito: `Uma boa resposta diz que a base é segura porque é plana e larga, então a peça não cai nem tomba na bandeja. A parte mais difícil costuma ser uma ponta fina, uma alça estreita ou um detalhe muito pequeno. A criança acerta quando liga a base à estabilidade e identifica um ponto frágil real da própria peça.`,
    },
  ],
};
