import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Formas Mágicas em 3D",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Descobrir o menu de adicionar formas básicas do Blender e colocar na cena um cubo, uma esfera, um cilindro e um cone, entendendo que o mundo 3D é montado com peças simples.`,
  descricao: `Nas aulas passadas as crianças aprenderam a girar o mundo 3D e a mexer no objeto que já vinha na cena: o famoso cubinho. Hoje elas descobrem um segredo mágico do Blender: dá para criar formas novas do nada! Com o menu de adicionar formas, a criança vira uma fada construtora que faz aparecer cubos, esferas (bolas), cilindros (latinhas) e cones (chapéus de festa) só de clicar em alguns botões.

A grande ideia desta aula é mostrar que tudo no mundo 3D é feito de pecinhas simples juntas, igual a uma montagem de blocos de encaixe. Um boneco de neve é só duas ou três esferas. Um foguete é um cilindro com um cone em cima. Uma casa é um cubo com um cone de telhado. Quando a criança percebe isso, o mundo todo vira um quebra-cabeça de formas, e ela ganha confiança para criar qualquer coisa.

Nesta aula o foco é só aprender a fazer cada forma aparecer na cena. As crianças vão usar o menu "Add" (Adicionar) lá em cima, escolher "Mesh" (Malha) e clicar na forma que querem. Elas vão repetir isso para as quatro formas mágicas: cubo, esfera, cilindro e cone. Não vamos ainda juntar tudo num objeto bonito (isso é na próxima aula) nem mover muito as formas; aqui a brincadeira é descobrir o menu e ver as formas surgindo.

Ao final, cada criança terá uma cena cheia de formas que ela mesma criou e saberá o nome de cada uma. Esse é o vocabulário de construtor que vai acompanhar o aluno até montar o seu próprio objeto e, mais para frente, imprimir em 3D de verdade.`,
  materiais: [
    `Computadores com o Blender já aberto na tela inicial de modelagem (Layout) para cada criança`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos impressos ou na tela: boneco de neve (esferas), foguete (cilindro + cone) e casinha (cubo + cone)`,
    `Objetos de verdade da sala que pareçam as formas: um dado (cubo), uma bolinha (esfera), uma latinha (cilindro) e um chapéu de festa (cone)`,
    `Cartão ilustrado com as quatro formas e os nomes em letras grandes, para colar perto da tela`,
    `Mouse com rodinha para cada criança (ajuda muito a girar e dar zoom para ver as formas)`,
    `Adesivos de "Construtor de Formas" para premiar quem criar as quatro formas`,
  ],
  conceitosChave: [
    `Forma básica — uma peça simples em 3D, como cubo, esfera, cilindro ou cone, que serve para montar coisas maiores.`,
    `Menu Add (Adicionar) — o botão lá em cima do Blender que faz aparecer formas novas na cena, como uma varinha mágica.`,
    `Mesh (Malha) — a palavra que o Blender usa para "forma sólida em 3D"; é nela que ficam o cubo, a esfera e os amigos.`,
    `Cubo — uma caixinha quadrada de seis lados, igual a um dado ou a um bloco de montar.`,
    `Esfera — uma bolinha redonda em 3D, igual a uma bola de futebol ou de gude.`,
    `Cilindro — um tubo redondo em pé, igual a uma latinha de refrigerante ou um rolinho de papel.`,
    `Cone — uma forma pontuda em cima e larga embaixo, igual a um chapéu de festa ou uma casquinha de sorvete.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D para dar esta aula. O único truque novo é o menu "Add" (Adicionar), e ele é bem fácil. No Blender, no topo da janela grande do meio (chamada Viewport, a área 3D onde aparece o cubo), existe uma barra com algumas palavras: "View", "Select", "Add" e "Object". A palavra mágica de hoje é "Add". Clique nela e vai abrir uma listinha; passe o mouse em cima de "Mesh" (Malha) e abre outra listinha com os nomes das formas: "Cube" (Cubo), "UV Sphere" (Esfera), "Cylinder" (Cilindro) e "Cone" (Cone). É só clicar no nome e a forma aparece no centro da cena.

Atenção a um detalhe: a forma nova sempre aparece onde está o "3D Cursor", aquele alvinho vermelho e branco que costuma ficar no meio da tela. Por isso, as formas vão nascer mais ou menos uma em cima da outra. Não tem problema nenhum hoje; na próxima aula a gente aprende a afastar e organizar. Se quiser separar para a criança ver melhor, basta apertar a tecla G (de "Grab", agarrar) e mover o mouse, mas isso é opcional.

Antes da aula, abra o Blender em todos os computadores e deixe na aba "Layout". Apague o cubo inicial só no seu computador de demonstração, para mostrar a cena começando vazia; nos das crianças, pode deixar o cubo (elas vão criar formas ao lado dele).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Sente as crianças em roda com os objetos de verdade (dado, bolinha, latinha e chapéu de festa). Mostre cada um e pergunte o nome da forma. Ensine: o dado é o cubo, a bolinha é a esfera, a latinha é o cilindro, o chapéu é o cone. Depois mostre os exemplos prontos (boneco de neve, foguete, casinha) e pergunte: "De quais formas isso é feito?". Isso planta a ideia de que tudo é montado com pecinhas.

Conteúdo novo guiado (15 min): No projetor, mostre o menu "Add" no topo da Viewport. Clique em "Add", depois passe em "Mesh" e clique em "Cube". Diga "abracadabra!" e o cubo aparece. Repita devagar para "UV Sphere", "Cylinder" e "Cone", nomeando cada forma em português enquanto clica. Use a rodinha do mouse para dar zoom e gire a cena (botão do meio do mouse) para todos verem as formas em 3D.

Mão na massa (25 min): Cada criança no seu computador refaz o caminho mágico: "Add" → "Mesh" → e cria as quatro formas, uma de cada vez. Circule pela sala ajudando a achar o menu. Peça que digam o nome de cada forma em voz alta ao criar. Quem terminar as quatro pode girar a cena para olhar as formas de todos os lados.

Desafio e compartilhar (10 min): Desafie cada criança a apontar na própria tela qual forma vira melhor um chapéu (o cone) e qual vira melhor uma bola de neve (a esfera). Faça uma rodinha rápida: cada um mostra a tela e diz o nome da forma favorita. Entregue o adesivo de "Construtor de Formas" para quem criou as quatro.

## Como explicar para crianças

Chame o menu "Add" de "varinha mágica que faz formas aparecerem". Use sempre a comparação com objetos do mundo real: cubo é dado ou bloquinho, esfera é bola, cilindro é latinha ou rolo de papelão, cone é chapéu de aniversário ou casquinha de sorvete. Repita a frase-chave: "Tudo no 3D é feito de pecinhas simples juntas". Quando criar a esfera, mostre que ela é redondinha por fora mas feita de muitos quadradinhos por dentro, como uma bola de pixel.

## Erros comuns e como ajudar

A criança não acha o menu "Add": mostre que ele fica no alto da janela grande do meio, em letrinhas, e não nos botões coloridos da lateral. As formas aparecem todas em cima do cubo e a criança acha que "deu errado": explique que é assim mesmo, elas nascem no mesmo lugar; é só girar a cena ou apertar G para mover. A criança clica e nada aparece porque o mouse não estava sobre "Mesh": peça para ela parar o mouse em cima de "Mesh" e esperar a segunda listinha abrir. A criança cria formas demais sem querer: tudo bem, ensine a apertar a tecla X (ou Delete) para apagar a forma selecionada. A criança sumiu com a forma da tela ao dar zoom: ensine a girar a rodinha para trás para afastar e ver tudo de novo.`,
  exercicios: [
    {
      titulo: `Caça às formas na sala`,
      tipo: `Dinâmica de observação`,
      tempo: `7 minutos`,
      guiaProfessor: `Em roda, mostre os objetos de verdade (dado, bolinha, latinha, chapéu de festa). Pergunte o nome da forma de cada um e relacione com cubo, esfera, cilindro e cone. Deixe as crianças tocarem nos objetos.`,
      atividade: `Olhe os objetos que o professor trouxe e diga qual forma cada um é: o dado é um ___, a bolinha é uma ___, a latinha é um ___ e o chapéu de festa é um ___.`,
      gabarito: `Dado = cubo; bolinha = esfera; latinha = cilindro; chapéu de festa = cone. Acerto = ligar pelo menos três objetos à forma correta. As quatro certas merecem um elogio extra de "olho de construtor".`,
    },
    {
      titulo: `Achar a varinha mágica (menu Add)`,
      tipo: `Prática guiada no Blender`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor que o menu "Add" fica no topo da janela grande do meio (a Viewport). Peça que cada criança encontre e clique em "Add" no próprio computador, só para ver a listinha abrir, sem criar nada ainda.`,
      atividade: `No seu Blender, ache a palavra "Add" lá em cima da tela grande do meio e clique nela. Veja a listinha mágica abrir. Depois passe o mouse em cima de "Mesh" para a segunda lista aparecer.`,
      gabarito: `A criança clica em "Add" e a primeira lista abre; ao pousar o mouse em "Mesh", abre a segunda lista com as formas. Acerto = enxergar os nomes Cube, UV Sphere, Cylinder e Cone na segunda lista. Erro comum: procurar na lateral colorida em vez do topo.`,
    },
    {
      titulo: `Criar o cubo e a esfera`,
      tipo: `Mão na massa`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça junto no projetor: "Add" → "Mesh" → "Cube" e depois "Add" → "Mesh" → "UV Sphere". Peça que digam o nome em voz alta ao criar. Lembre que a esfera pode nascer em cima do cubo, e isso é normal.`,
      atividade: `Use a varinha mágica para criar duas formas: primeiro um cubo (Add → Mesh → Cube) e depois uma esfera (Add → Mesh → UV Sphere). Fale o nome de cada uma bem alto quando ela aparecer.`,
      gabarito: `A cena passa a ter um cubo e uma esfera criados pela criança. Acerto = as duas formas aparecem e a criança sabe nomeá-las. Se a esfera surgir sobre o cubo, está certo; gire a cena com o botão do meio do mouse para enxergar as duas.`,
    },
    {
      titulo: `Completar as quatro formas mágicas`,
      tipo: `Desafio de criação`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora as crianças adicionam também o cilindro e o cone (Add → Mesh → Cylinder e Add → Mesh → Cone), ficando com as quatro formas na cena. Circule ajudando a achar o caminho do menu. Incentive a dizer cada nome.`,
      atividade: `Agora crie as duas formas que faltam: um cilindro (a latinha) e um cone (o chapéu de festa). No fim você deve ter as quatro formas mágicas na sua cena: cubo, esfera, cilindro e cone.`,
      gabarito: `A cena contém as quatro formas: cubo, esfera, cilindro e cone, criadas pela criança. Acerto = ter as quatro formas e saber apontar e nomear cada uma. Se faltar alguma, basta repetir Add → Mesh → e o nome da forma que falta.`,
    },
    {
      titulo: `Detetive de formas no mundo real`,
      tipo: `Desafio final de raciocínio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre os exemplos prontos (boneco de neve, foguete, casinha) e peça que cada criança descubra de quais formas eles são feitos. Aceite respostas faladas ou que apontem na própria tela qual forma usariam. Premie a coragem de tentar.`,
      atividade: `Vire detetive de formas! Olhe os exemplos e diga de quais formas mágicas cada um é feito: o boneco de neve é feito de ___, o foguete é um ___ com um ___ em cima e a casinha é um ___ com um ___ de telhado.`,
      gabarito: `Boneco de neve = esferas; foguete = cilindro com um cone em cima; casinha = cubo com um cone de telhado. Acerto = identificar corretamente pelo menos dois dos três exemplos, mostrando que entendeu que tudo se monta com formas simples.`,
    },
  ],
};
