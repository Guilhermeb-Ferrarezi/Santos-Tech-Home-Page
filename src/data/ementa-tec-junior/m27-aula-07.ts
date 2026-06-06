import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Criando Meu Objeto",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Iniciar a construção do objeto simples do mês, ajudando cada criança a escolher o que quer modelar e a montar as primeiras peças com formas básicas no Blender.`,
  descricao: `Chegou o grande momento do mês: cada criança vai começar a criar o seu próprio objeto no Blender! Durante as aulas anteriores elas aprenderam a girar o mundo 3D, a mexer nos objetos, a usar as formas mágicas (cubo, esfera, cilindro, cone) e a juntar várias formas. Agora todo esse conhecimento se junta em um projeto de verdade. Esta aula é o primeiro passo da construção: planejar e posicionar as primeiras peças. A próxima aula (Aula 8) será dedicada a deixar o objeto pronto e bonito, então aqui o foco é começar com calma e organização.

A ideia central é simples: todo objeto do mundo é feito de formas básicas grudadas. Um robô é um cubo (corpo) com cilindros (braços e pernas) e uma esfera ou cubo menor (cabeça). Um sorvete é um cone (casquinha) com uma esfera em cima (a bola de sorvete). Uma casa é um cubo (paredes) com uma forma triangular em cima (telhado). Antes de mexer no computador, cada criança vai desenhar no papel o objeto que quer fazer e marcar de quais formas ele é feito. Esse "mapa" guia toda a construção e evita que a criança fique perdida na frente da tela.

No Blender, a criança vai adicionar as formas pelo menu Add (Adicionar), no topo da janela, e vai usar o que já treinou: mover com a tecla G, girar com a tecla R e mudar de tamanho com a tecla S. O professor circula pela sala ajudando cada um a posicionar a primeira e a segunda peça no lugar certo. Não é preciso terminar o objeto hoje: o objetivo é sair da aula com o começo montado e o plano claro na cabeça.

Esta aula valoriza a escolha e a autoria. Cada criança cria algo diferente, do seu jeito, e isso deixa o projeto pessoal e especial. O papel do professor é animar, organizar e resolver as pequenas dúvidas técnicas, mantendo todo mundo confiante de que está no caminho certo para o objeto ficar pronto na aula seguinte.`,
  materiais: [
    `Computadores com o Blender já aberto em um arquivo novo (e a cena inicial com o cubo)`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar`,
    `Folhas de papel e lápis de cor para cada criança desenhar o plano do objeto`,
    `Exemplos prontos no Blender: um robô, um sorvete e uma casa simples, já modelados`,
    `Cartaz com as quatro formas básicas e o nome de cada uma (cubo, esfera, cilindro, cone)`,
    `Lista de teclas no quadro: G (mover), R (girar), S (tamanho), Add (adicionar forma)`,
    `Adesivos de "Arquiteto 3D" para premiar quem terminar o plano e a primeira peça`,
  ],
  conceitosChave: [
    `Modelar — montar um objeto em 3D no computador usando formas, como brincar de blocos de montar.`,
    `Plano — o desenho no papel que mostra qual objeto vamos fazer e de quais formas ele é feito.`,
    `Formas básicas — o cubo, a esfera, o cilindro e o cone, as peças que juntamos para criar tudo.`,
    `Menu Add — o botão "Adicionar" lá no topo do Blender que faz uma forma nova aparecer na cena.`,
    `Posicionar — colocar cada peça no lugar certo, usando a tecla G para mover.`,
    `Cena — o espaço 3D dentro do Blender onde a gente monta o objeto.`,
    `Autoria — a ideia de que cada um cria o seu próprio objeto, do seu jeito.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D para conduzir esta aula. Tudo o que as crianças vão usar já foi treinado nas aulas anteriores: adicionar formas e mover, girar e mudar de tamanho. O segredo de hoje é a organização: primeiro o plano no papel, depois a construção na tela.

Revise os três comandos no seu computador antes da aula. Para adicionar uma forma, clique no menu "Add" (Adicionar), no canto superior esquerdo da janela 3D, e escolha "Mesh" (Malha) e depois "Cube" (Cubo), "UV Sphere" (Esfera), "Cylinder" (Cilindro) ou "Cone". A forma nova aparece no centro da cena. Para movê-la, aperte a tecla G e mova o mouse; clique para soltar. Para girar, aperte R; para mudar o tamanho, aperte S. Se a criança apertar uma tecla sem querer e a forma sair voando, basta apertar a tecla Esc para cancelar. Deixe o Blender já aberto em todos os computadores antes de começar, num arquivo novo, para não perder tempo.

Tenha três exemplos prontos abertos (robô, sorvete e casa) para mostrar no projetor. Eles inspiram e mostram que tudo é só formas grudadas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Reúna a turma e mostre os exemplos prontos no projetor. Pergunte: "De quais formas é feito este robô?". Deixe as crianças apontarem o cubo, os cilindros, a esfera. Faça o mesmo com o sorvete (cone mais esfera) e a casa. Termine perguntando: "Que objeto você quer criar hoje?".

Conteúdo novo guiado (15 min): Entregue papel e lápis. Cada criança desenha o objeto que escolheu e, ao lado, marca as formas que ele usa. Circule ajudando quem não decide ("Que tal um carrinho? É um cubo com quatro cilindros de roda."). Depois, no projetor, mostre como adicionar a primeira forma: clique em "Add", "Mesh", "Cylinder", e use G para posicionar. Faça devagar para todos verem onde clicar.

Mão na massa (25 min): Cada criança vai ao seu computador e começa o objeto. Oriente a regra de ouro: adicionar UMA forma de cada vez, posicionar com G, e só então adicionar a próxima. Circule pela sala. A meta é cada um sair com o plano pronto e ao menos a primeira e a segunda peça posicionadas. Quem for rápido continua com mais peças; quem precisar de mais tempo, tudo bem, terminamos na próxima aula.

Desafio e compartilhar (10 min): Peça que cada criança gire a cena (com o botão do meio do mouse) e mostre ao colega do lado o começo do seu objeto, contando o que ele vai ser. Dê o adesivo de "Arquiteto 3D" para quem completou o plano e posicionou a primeira peça. Lembre que o objeto ficará pronto na próxima aula.

## Como explicar para crianças

Use a analogia dos blocos de montar: "No Blender, a gente monta com formas em vez de blocos de plástico. Cada forma é uma peça." Chame o desenho no papel de "mapa do tesouro": ele mostra o caminho da construção. Reforce a regra de uma peça por vez: "Coloca uma forma, arruma o lugar dela, e só depois pega a próxima. Assim não bagunça." Diga que ninguém precisa terminar hoje, igual a uma casa de Lego grande que a gente constrói aos poucos.

## Erros comuns e como ajudar

A criança adiciona muitas formas de uma vez e se perde: peça para apagar (tecla X ou Delete) e recomeçar com uma forma só. A forma some da tela: ela provavelmente foi movida para longe; aperte a tecla Home (ou o atalho "View" e "Frame All") para enquadrar tudo de novo. A criança aperta G e a peça voa: aperte Esc para cancelar e tente de novo com calma. A criança quer um objeto complicado demais (um dragão completo): ajude a simplificar para 3 ou 4 formas grandes. A criança não consegue decidir o que fazer: ofereça três opções fáceis (robô, sorvete, casa) e deixe ela escolher uma.`,
  exercicios: [
    {
      titulo: `Caça às formas no exemplo`,
      tipo: `Roda de observação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o robô, o sorvete e a casa prontos no projetor. Pergunte de quais formas básicas cada um é feito e deixe as crianças apontarem na tela. O objetivo é elas perceberem que todo objeto é só formas grudadas.`,
      atividade: `Olhe os objetos na tela e diga de quais formas básicas cada um é feito. O robô usa quais peças? E o sorvete? E a casa?`,
      gabarito: `Robô = cubo (corpo), cilindros (braços e pernas), esfera ou cubo (cabeça). Sorvete = cone (casquinha) mais esfera (bola). Casa = cubo (paredes) mais uma forma para o telhado. Acerto = nomear pelo menos duas formas certas em cada objeto.`,
    },
    {
      titulo: `Meu plano no papel`,
      tipo: `Desenho e planejamento`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue papel e lápis. Cada criança desenha o objeto que quer criar e marca ao lado as formas que ele vai usar. Ajude quem não decide oferecendo ideias simples. Quem ainda não escreve bem pode só desenhar as formas.`,
      atividade: `Desenhe no papel o objeto que você quer criar no Blender. Depois, ao lado, escreva ou desenhe quais formas básicas você vai usar para montar ele.`,
      gabarito: `Um desenho do objeto escolhido com pelo menos duas formas básicas indicadas. Exemplo: um carrinho desenhado, com a anotação "1 cubo e 4 cilindros". Acerto = o plano mostra o objeto e as formas que vão construí-lo.`,
    },
    {
      titulo: `Adicionar a primeira forma`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor o menu "Add" (Adicionar) no canto superior esquerdo, depois "Mesh" e a forma. A criança adiciona a primeira peça do seu plano na cena. Deixe o Blender já aberto num arquivo novo antes da aula.`,
      atividade: `No seu computador, clique em "Add" lá em cima, escolha "Mesh" e depois a primeira forma do seu plano. Veja a forma aparecer no meio da cena.`,
      gabarito: `A criança usa o menu Add, escolhe Mesh e uma forma, e a forma aparece na cena 3D. Acerto = conseguir adicionar a primeira peça do plano sozinha. Erro comum: procurar a forma em outro menu; ela está sempre em "Add" e depois "Mesh".`,
    },
    {
      titulo: `Posicionar a peça no lugar`,
      tipo: `Prática no Blender`,
      tempo: `7 minutos`,
      guiaProfessor: `Relembre as teclas G (mover), R (girar) e S (tamanho). A criança usa G para colocar a primeira forma onde ela quer no plano e, se precisar, S para deixar do tamanho certo. Se a peça voar, aperte Esc.`,
      atividade: `Aperte a tecla G e mova a sua forma para o lugar certo do seu objeto. Se ela estiver muito grande ou pequena, aperte S para ajustar o tamanho. Clique para soltar.`,
      gabarito: `A forma fica posicionada no lugar planejado e num tamanho adequado. Acerto = usar G para mover e, quando preciso, S para o tamanho, soltando com um clique. Se errar, sabe apertar Esc para cancelar e tentar de novo.`,
    },
    {
      titulo: `Juntar a segunda forma e mostrar`,
      tipo: `Desafio e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `A criança adiciona a SEGUNDA forma do plano pelo menu Add e posiciona com G perto da primeira, começando a montar o objeto. No fim, ela gira a cena com o botão do meio do mouse e mostra o começo ao colega, contando o que vai ser.`,
      atividade: `Adicione agora a segunda forma do seu plano e use G para colocá-la perto da primeira. Depois, gire a cena com o botão do meio do mouse e mostre ao colega o começo do seu objeto, contando o que ele vai ser.`,
      gabarito: `Duas formas posicionadas começando a formar o objeto planejado, e a criança consegue girar a cena e explicar o que está criando. Exemplo: corpo (cubo) e cabeça (esfera) de um robô juntos. Acerto = duas peças no lugar e uma explicação simples do objeto.`,
    },
  ],
};
