import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Ferramentas e Atalhos Essenciais",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Dominar as ferramentas principais do Aseprite (lápis, borracha, balde de tinta, conta-gotas e seleção) com seus atalhos de teclado, navegando com zoom, pan, grade e simetria, e desenhar um ícone simples para fixar o controle do mouse pixel a pixel.`,
  descricao: `Nesta aula o aluno deixa de apenas olhar o Aseprite e passa a manusear de verdade as ferramentas que vai usar o mês inteiro. Depois da aula de boas-vindas, em que conheceu a tela e abriu o programa, agora ele aprende a desenhar, apagar, pintar e copiar cores com agilidade, usando o teclado em vez de procurar tudo com o mouse. O segredo do pixel art profissional não é só ter boas ideias: é ter controle fino, pixel a pixel, e isso vem da prática com as ferramentas certas e os atalhos.

O foco principal são cinco ferramentas que aparecem na barra lateral esquerda do Aseprite: o Lápis (Pencil), que pinta um pixel de cada vez; a Borracha (Eraser), que apaga; o Balde de Tinta (Paint Bucket), que preenche áreas inteiras de uma cor; o Conta-gotas (Eyedropper), que copia uma cor que já está na tela; e a ferramenta de Seleção (Rectangular Marquee), que marca uma região para mover, copiar ou apagar. Cada uma tem uma letra de atalho, e o aluno vai treinar trocar de ferramenta apertando teclas, sem tirar a mão do mouse do desenho.

Além das ferramentas, o aluno aprende a se mover dentro do desenho. Em pixel art os quadros são pequenos, então é preciso dar zoom para enxergar cada pixel e usar o pan (arrastar a tela) para passear pela imagem sem perder o lugar. A grade (Grid) ajuda a contar os pixels, e a simetria (Symmetry) permite desenhar os dois lados de um personagem ao mesmo tempo, economizando trabalho e deixando tudo alinhado.

A aula termina com um desafio gostoso: desenhar um ícone simples, como um coração ou uma estrela, usando só o que foi aprendido. É um exercício curto que obriga o aluno a posicionar cada pixel com cuidado, treinando a precisão do mouse. Ao final, ele já tem confiança para clicar onde quer, trocar de ferramenta no atalho e navegar pelo desenho com naturalidade, pronto para os quadros 16x16 da próxima aula.`,
  materiais: [
    `Computadores com o Aseprite já instalado e aberto (um por aluno), com um arquivo novo de 32x32 pixels já criado para a turma começar a desenhar`,
    `Projetor ou TV grande para o professor mostrar cada clique, atalho e troca de ferramenta na tela do Aseprite`,
    `Folha impressa com a lista de atalhos da aula (B lápis, E borracha, G balde, I conta-gotas, M seleção, zoom e pan) colada na bancada de cada aluno`,
    `Arquivo de exemplo numa pasta compartilhada com um coração e uma estrela já desenhados em pixel art, para servir de referência visual`,
    `Mouse externo para cada computador, pois o controle pixel a pixel fica muito mais preciso do que com o touchpad`,
    `Quadro branco ou slide com uma grade desenhada à mão para explicar a ideia de pixel, grade e simetria antes de ir para a tela`,
  ],
  conceitosChave: [
    `Lápis (Pencil) — a ferramenta que pinta um pixel por vez com a cor escolhida; é a principal do pixel art, atalho B.`,
    `Borracha (Eraser) — a ferramenta que apaga pixels, deixando-os transparentes ou na cor de fundo, atalho E.`,
    `Balde de Tinta (Paint Bucket) — preenche de uma só vez toda uma área conectada da mesma cor, atalho G.`,
    `Conta-gotas (Eyedropper) — copia uma cor que já existe na tela para você pintar com ela, atalho I (ou tecla Alt enquanto pinta).`,
    `Seleção (Marquee) — marca uma região retangular para mover, copiar ou apagar só aquela parte, atalho M.`,
    `Zoom e Pan — zoom é aproximar ou afastar para ver os pixels; pan é arrastar a tela (segurando a barra de espaço) para passear pelo desenho.`,
    `Simetria (Symmetry) — recurso que espelha o desenho num eixo, pintando os dois lados ao mesmo tempo, ótimo para personagens simétricos.`,
  ],
  treinamento: `## O que o professor precisa saber

As ferramentas ficam na barra vertical da esquerda do Aseprite. Você não precisa decorar todos os ícones: foque nos cinco da aula e nos atalhos. Lápis é a tecla B, Borracha é E, Balde de Tinta é G, Conta-gotas é I e Seleção retangular é M. Um truque ouro: segurando a tecla Alt enquanto usa o Lápis, ele vira Conta-gotas na hora, então o aluno pega uma cor sem trocar de ferramenta. O zoom é feito com a roda do mouse ou com as teclas mais e menos; o pan (arrastar a tela) é feito segurando a barra de espaço e movendo o mouse. A grade liga e desliga no menu "View" e depois "Grid" e "Show Grid". A simetria liga no menu "View" e "Symmetry Options", escolhendo simetria horizontal; uma linha aparece no meio do quadro e tudo que você pinta de um lado se repete no outro. Antes da aula, deixe um arquivo de 32x32 pixels já aberto em cada máquina para a turma não perder tempo criando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior com perguntas rápidas. "O que é um pixel?" "Onde fica a barra de ferramentas?" Peça que cada aluno abra o Aseprite e confirme que vê o arquivo de 32x32 já criado. No projetor, mostre a barra lateral esquerda e diga que hoje a turma vai aprender a usar o teclado para trabalhar rápido.

Conteúdo novo guiado (15 min): no projetor, apresente uma ferramenta de cada vez. Aperte B e pinte alguns pixels com o Lápis. Aperte E e apague. Aperte G e clique numa área para o Balde preencher tudo. Aperte I, clique numa cor da tela e mostre que ela virou a cor ativa; depois mostre o atalho Alt segurado com o Lápis. Aperte M, arraste um retângulo de seleção e mova-o. Em seguida, dê zoom com a roda do mouse, segure a barra de espaço para fazer pan e ligue a grade em "View" e "Show Grid". Por fim, ligue a simetria horizontal em "View" e "Symmetry Options" e pinte para mostrar o espelhamento.

Mão na massa (25 min): cada aluno repete a sequência na própria máquina, pintando livremente para sentir cada ferramenta e cada atalho. Peça que pratiquem trocar de ferramenta só pelo teclado, sem clicar na barra. Depois proponha que liguem a grade e a simetria e brinquem de pintar formas espelhadas. Circule pela sala ajudando quem não acha o atalho ou quem clicou na ferramenta errada.

Desafio e compartilhar (10 min): proponha o desafio do ícone. Cada aluno desenha um coração ou uma estrela usando só Lápis, Borracha e Conta-gotas, com zoom para acertar cada pixel. Termine com dois ou três alunos mostrando o ícone no projetor e contando qual atalho mais ajudou.

## Como explicar de forma clara (linguagem para a idade)

Compare os atalhos com os botões de um videogame: ninguém para o jogo para procurar o comando no menu, aperta direto. Diga que cada letra é um botão mágico que chama a ferramenta na hora. O Conta-gotas é como "roubar" a cor que já está no desenho para usar de novo, sem precisar procurar na paleta. O zoom é a lupa que aproxima para ver cada quadradinho, e o pan é arrastar o papel para ver outra parte sem mexer no desenho. A simetria é como dobrar uma folha ao meio: o que você pinta de um lado aparece igualzinho do outro. Sempre que falar uma palavra em inglês, diga o significado logo em seguida.

## Erros comuns e como ajudar

O erro mais comum é o aluno esquecer os atalhos e ficar procurando tudo na barra lateral; incentive a usar a folha de atalhos colada na bancada e a repetir em voz alta a letra. Muitos usam o Balde de Tinta e ele preenche o quadro inteiro sem querer, porque tudo era da mesma cor; explique que o Balde só para onde a cor muda. Outro tropeço é dar zoom demais e se perder no desenho; ensine a usar o pan com a barra de espaço e a voltar ao zoom que mostra a imagem toda. Alguns pintam com a simetria ligada e estranham o espelho; mostre onde desligar a simetria. Por fim, há quem aperte E e continue achando que está com o Lápis; peça que olhem o ícone destacado na barra para confirmar a ferramenta ativa.`,
  exercicios: [
    {
      titulo: `Corrida de atalhos`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre antes, no projetor, cada atalho sendo apertado e a ferramenta mudando na barra. Peça que os alunos olhem qual ícone fica destacado a cada tecla, para confirmar que mudaram de ferramenta.`,
      atividade: `No seu arquivo, aperte na ordem B, E, G, I e M, e a cada tecla pinte ou clique um pouco para sentir a ferramenta. Repita a sequência três vezes sem clicar na barra lateral, só usando o teclado.`,
      gabarito: `O aluno troca de ferramenta apenas pelo teclado, e a cada atalho o ícone correto fica destacado na barra esquerda. Ele consegue pintar com o Lápis (B), apagar com a Borracha (E), preencher com o Balde (G), pegar cor com o Conta-gotas (I) e selecionar com a Marquee (M).`,
    },
    {
      titulo: `Pintar, apagar e preencher`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que o Balde só preenche a área conectada da mesma cor. Mostre o atalho Alt segurado com o Lápis para virar Conta-gotas na hora. Ajude quem preencher o quadro todo sem querer a desfazer com Ctrl+Z.`,
      atividade: `Pinte um quadrado com o Lápis (B). Apague um canto dele com a Borracha (E). Preencha o miolo com o Balde (G) numa cor diferente. Por fim, segure Alt e clique numa cor já pintada para copiá-la, e pinte um pixel novo com ela.`,
      gabarito: `O aluno desenha o quadrado, apaga parte dele, preenche o interior com o Balde numa cor nova e usa o Conta-gotas (Alt) para reaproveitar uma cor existente. Fica claro que o Balde para onde a cor muda e que o Conta-gotas copia a cor sem ir à paleta.`,
    },
    {
      titulo: `Zoom, pan e grade`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o zoom com a roda do mouse e o pan segurando a barra de espaço. Ensine a ligar a grade em "View" e "Show Grid". Avise que dar zoom demais faz o aluno se perder; ensine a voltar ao enquadramento que mostra a imagem inteira.`,
      atividade: `Ligue a grade pelo menu "View" e "Show Grid". Dê bastante zoom até enxergar cada pixel grande, pinte cinco pixels seguidos contando pela grade, e use o pan (barra de espaço) para passear até outro canto do quadro e pintar mais cinco.`,
      gabarito: `A grade fica visível, o aluno dá zoom para ver os pixels grandes, conta corretamente cinco pixels apoiado na grade e usa o pan com a barra de espaço para se deslocar pelo desenho sem perder o lugar nem mexer no que já pintou.`,
    },
    {
      titulo: `Espelho em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Ensine a ligar a simetria horizontal em "View" e "Symmetry Options". Um aluno comanda em voz alta enquanto o outro executa, depois trocam. Lembre-os de desligar a simetria ao final para não confundir nos próximos desenhos.`,
      atividade: `Em dupla, liguem a simetria horizontal. Um aluno dita uma forma simples (uma carinha, uma borboleta) e o outro pinta de um lado, vendo o desenho se espelhar no outro automaticamente. Depois troquem os papéis e façam outra forma simétrica.`,
      gabarito: `As duas formas ficam simétricas porque a simetria horizontal estava ligada, com os dois lados iguais. Cada aluno, ao menos uma vez, liga a simetria, pinta de um lado e vê o espelhamento, e sabe onde desligar o recurso ao final.`,
    },
    {
      titulo: `Meu primeiro ícone`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Deixe à mostra a referência do coração e da estrela. Incentive o uso de zoom para acertar cada pixel e dos atalhos para agilizar. Valorize o capricho na precisão do mouse, mais do que a velocidade. Reserve os últimos minutos para dois ou três alunos mostrarem o ícone no projetor.`,
      atividade: `Escolha um coração ou uma estrela e desenhe esse ícone usando só Lápis (B), Borracha (E) e Conta-gotas (I), com zoom para acertar cada pixel. Capriche no contorno para que a forma fique reconhecível e bem alinhada na grade.`,
      gabarito: `O aluno entrega um ícone (coração ou estrela) reconhecível, com o contorno fechado e os pixels bem posicionados. Ele usou os atalhos para trocar de ferramenta e o zoom para ajustar pixel a pixel, demonstrando controle preciso do mouse. Pequenas imperfeições são aceitáveis desde que a forma seja clara.`,
    },
  ],
};
