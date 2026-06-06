import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando meu item passo a passo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança modela o próprio item da loja partindo de uma forma básica, usando mover, escalar e rotacionar os pontos para empurrar e puxar vértices e faces até dar forma ao objeto, e salva o primeiro modelo 3D feito no Maya.`,
  descricao: `Na aula passada a turma conheceu o Maya, o estúdio dos profissionais, e aprendeu a girar a câmera ao redor da cena. Hoje começa a parte mais divertida: dar forma a um item de verdade. Cada criança vai escolher um objeto simples para a loja do Roblox (um dado, um sabonete, um pão, uma caixa de presente, um pedaço de queijo) e construir esse item a partir de uma forma básica, como um cubo. A ideia é mostrar que todo modelo 3D, por mais bonito que pareça, sempre começa de uma forminha simples que a gente vai empurrando e puxando.

O coração desta aula são os três super-poderes de transformação do Maya: mover (a tecla W), escalar (a tecla R) e rotacionar (a tecla E). Com eles, a criança não mexe só no objeto inteiro: ela entra no modo de edição e mexe nas peças menores que formam o modelo, os vértices (os pontinhos dos cantos) e as faces (as paredinhas chatas entre os pontos). Puxar um vértice para cima faz um cantinho subir; empurrar uma face para dentro faz uma covinha. É como esculpir em uma massinha digital que nunca suja a mão.

O professor conduz como um escultor mostrando o passo a passo no projetor antes de soltar a turma. Cada clique e cada tecla aparece na tela grande primeiro; depois as crianças repetem no próprio computador. Não buscamos um modelo perfeito hoje: buscamos a coragem de pegar uma forma e transformá-la em outra coisa. Errar e desfazer com Ctrl+Z faz parte da brincadeira.

Ao final, cada aluno terá o primeiro item modelado por ele mesmo no Maya, salvo com um nome próprio na pasta da turma. Esse arquivo é a semente do entregável do mês, o item pronto para a loja, e nas próximas aulas ele vai ganhar cor, brilho e os ajustes finais. Sair da aula com um modelo salvo, mesmo simples, é uma vitória enorme.`,
  materiais: [
    `Computadores com o Maya já aberto e uma cena nova vazia para cada criança`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Exemplos prontos: dois ou três itens simples já modelados (um dado, um pão, uma caixa) para mostrar o objetivo`,
    `Massinha de modelar de verdade (algumas bolinhas) para a analogia de empurrar e puxar`,
    `Cartão impresso com as três teclas mágicas: W mover, E rotacionar, R escalar`,
    `Pasta da turma criada na área de trabalho para todos salvarem o arquivo no mesmo lugar`,
    `Adesivos de "Primeiro Modelo no Maya" para premiar quem salvar o arquivo`,
  ],
  conceitosChave: [
    `Forma básica — a peça simples (cubo, esfera, cilindro) que a gente usa como ponto de partida do modelo.`,
    `Vértice — cada pontinho de canto do modelo; puxando um vértice, o cantinho se move.`,
    `Face — a paredinha chata entre os vértices; é onde a gente empurra para fazer covinhas e puxa para fazer saliências.`,
    `Mover (tecla W) — arrastar a peça ou o pontinho para outro lugar usando as setinhas coloridas.`,
    `Escalar (tecla R) — deixar a peça maior ou menor, esticando ou achatando com os quadradinhos.`,
    `Rotacionar (tecla E) — virar a peça, girando com os anéis coloridos.`,
    `Modo de edição de vértice — o jeito do Maya que deixa a gente clicar nos pontinhos em vez do objeto inteiro.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D para dar esta aula. Precisa apenas dominar quatro ações no Maya e treinar uma vez antes. A primeira é criar uma forma básica: no menu do topo clique em "Create" (Criar), depois "Polygon Primitives" (Primitivas Poligonais) e escolha "Cube" (Cubo). O cubo aparece no centro da cena. A segunda são as três teclas de transformação, com o objeto selecionado (clique nele uma vez): W liga o mover (aparecem três setinhas vermelha, verde e azul), E liga o rotacionar (aparecem três anéis) e R liga o escalar (aparecem três quadradinhos). Arraste pela setinha, anel ou quadradinho da cor certa para mexer só em uma direção.

A terceira ação é entrar no modo de edição para mexer nas peças por dentro. Clique com o botão DIREITO em cima do cubo e segure: abre um menu em roda (marking menu). Sem soltar, arraste até "Vertex" (Vértice) e solte; agora aparecem os pontinhos dos cantos. Para mexer nas paredinhas, faça o mesmo e escolha "Face". Para voltar ao objeto inteiro, botão direito de novo e escolha "Object Mode" (Modo Objeto). A quarta ação é salvar: menu "File" (Arquivo), depois "Save Scene As" (Salvar Cena Como), escolha a pasta da turma e dê um nome. Deixe a pasta criada na área de trabalho antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor dois exemplos prontos (um dado e um pão). Pergunte: "de que forminha simples vocês acham que isso começou?". Mostre que ambos começaram de um cubo. Pegue a massinha de verdade, faça uma bolinha e empurre com o dedo para virar um pãozinho: essa é a ideia do dia.

Conteúdo novo guiado (15 min): No projetor, crie o cubo ("Create" maior que "Polygon Primitives" maior que "Cube"). Selecione e mostre as três teclas: aperte W e arraste a setinha; aperte R e estique; aperte E e gire. Depois clique com o botão direito, segure e escolha "Vertex". Puxe um vértice de cima para fazer um pico. Troque para "Face" e empurre uma parede para dentro, fazendo uma covinha. Diga em voz alta cada tecla e cada clique enquanto faz.

Mão na massa (25 min): Cada criança escolhe o próprio item e cria o cubo no seu computador. Primeiro ajusta o tamanho geral com R. Depois entra no modo "Vertex" e puxa pontinhos; entra no modo "Face" e empurra paredinhas até o cubo virar o item escolhido. Circule pela sala, elogie e ajude um a um. Lembre sempre do Ctrl+Z para desfazer sem medo.

Desafio e compartilhar (10 min): Desafie cada um a salvar o arquivo ("File" maior que "Save Scene As") com o próprio nome na pasta da turma; quem salvar ganha o adesivo de "Primeiro Modelo no Maya". Faça uma volta rápida: cada criança gira a câmera e mostra o item para a turma em uma frase ("Esse é o meu queijo!").

## Como explicar para crianças

Use a analogia da massinha o tempo todo: "o cubo é uma massinha digital; os pontinhos são onde você belisca e as paredinhas são onde você aperta". Chame as teclas de poderes: W é o poder de empurrar (mover), R é o poder de crescer e encolher (escalar), E é o poder de girar (rotacionar). Diga que as setinhas coloridas são "trilhos" e que a peça só anda no trilho que você puxa. E repita que ninguém acerta de primeira: por isso existe o Ctrl+Z, o botão de "voltar no tempo".

## Erros comuns e como ajudar

A criança move a câmera achando que move o objeto: lembre que para mover a peça é preciso clicar nela primeiro e apertar W. A criança arrasta pelo meio das setinhas e o objeto vai para qualquer lado: peça para arrastar exatamente pela setinha colorida, não pelo cantinho amarelo do meio. A criança não acha os pontinhos: confirme que ela usou o botão direito e escolheu "Vertex", não "Object Mode". O modelo fica torto demais e ela se frustra: mostre o Ctrl+Z para voltar passo a passo. A criança esquece de salvar: faça o salvar junto com a turma toda ao mesmo tempo, conferindo na tela de cada um o nome do arquivo na pasta da turma.`,
  exercicios: [
    {
      titulo: `De que forminha isso começou?`,
      tipo: `Observação guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor três itens prontos (dado, pão, caixa de presente). Para cada um, pergunte de qual forma básica ele parece ter começado. Guie a turma até perceber que quase tudo começa de um cubo. Use a massinha para reforçar.`,
      atividade: `Olhe os três itens na tela. Para cada um, diga de qual forminha simples você acha que ele começou: cubo, bolinha ou rolinho?`,
      gabarito: `O dado e a caixa começam de um cubo; o pão também pode começar de um cubo arredondado. Acerto = perceber que objetos diferentes nascem da mesma forma básica. Exemplo de resposta: "o dado é um cubo, a caixa é um cubo e o pão é um cubo amassadinho".`,
    },
    {
      titulo: `Os três poderes: mover, girar e crescer`,
      tipo: `Prática no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor como criar o cubo ("Create" maior que "Polygon Primitives" maior que "Cube"). Cada criança cria o seu, seleciona e testa as teclas W, E e R, observando as setinhas, os anéis e os quadradinhos. Ainda não precisa ficar bonito.`,
      atividade: `Crie um cubo. Aperte W e arraste uma setinha colorida para mover. Aperte E e gire um anel. Aperte R e estique um quadradinho. Veja o que muda a cada tecla.`,
      gabarito: `A criança cria o cubo e usa as três teclas: W mostra setinhas e move, E mostra anéis e gira, R mostra quadradinhos e muda o tamanho. Acerto = reconhecer qual desenho aparece em cada tecla. Erro comum: arrastar pelo meio amarelo e mover em todas as direções de uma vez; oriente a puxar só pela cor.`,
    },
    {
      titulo: `Puxando um vértice`,
      tipo: `Prática no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Ensine o botão direito em cima do cubo, segurar e escolher "Vertex" no menu em roda. Com W ligado, a criança puxa um pontinho de cima para fazer um pico. Mostre o Ctrl+Z para desfazer. Reforce que mexer no pontinho muda só aquele cantinho.`,
      atividade: `Clique com o botão direito no cubo, segure e escolha "Vertex". Aperte W e puxe um pontinho de cima para virar um piquinho. Se não gostar, aperte Ctrl+Z e tente de novo.`,
      gabarito: `O cubo ganha um canto puxado pelo vértice movido. Acerto = entrar no modo "Vertex" e mover um pontinho com a tecla W. Exemplo: o topo do cubo fica pontudo como um telhado. Erro comum: continuar em "Object Mode" e mover o cubo inteiro; confira que ela escolheu "Vertex".`,
    },
    {
      titulo: `Empurrando uma face para fazer o meu item`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança escolhe o próprio item da loja. Ensine a trocar para o modo "Face" (botão direito maior que "Face") e empurrar paredinhas para dentro ou para fora, combinando com mover vértices, até o cubo virar o objeto escolhido. Circule e ajude um a um, sempre lembrando do Ctrl+Z.`,
      atividade: `Escolha o seu item (queijo, sabonete, pão, presente). Entre no modo "Face", aperte W e empurre paredinhas para dentro e para fora. Misture com puxar pontinhos até o cubo virar o seu item.`,
      gabarito: `O cubo é transformado em um item reconhecível pela criança, usando faces e vértices. Acerto = combinar empurrar faces e puxar vértices de forma intencional. Exemplo: empurrar duas faces para dentro forma a "casquinha" do pão; um cantinho cortado vira a fatia de queijo. Não precisa ficar perfeito, precisa ter intenção.`,
    },
    {
      titulo: `Salvar o meu primeiro modelo`,
      tipo: `Desafio final`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza o salvamento com a turma toda ao mesmo tempo: menu "File" maior que "Save Scene As", escolher a pasta da turma e digitar o próprio nome no arquivo. Confira na tela de cada criança se o arquivo apareceu na pasta. Quem salvar ganha o adesivo de "Primeiro Modelo no Maya".`,
      atividade: `Vá em "File", depois "Save Scene As". Escolha a pasta da turma e dê um nome ao seu arquivo, como "queijo-do-pedro". Clique em salvar e mostre para o professor que deu certo.`,
      gabarito: `O arquivo do modelo aparece salvo na pasta da turma com o nome da criança. Acerto = encontrar "Save Scene As", escolher a pasta certa e nomear o arquivo. Erro comum: fechar a janela sem digitar o nome ou salvar fora da pasta da turma; ajude a refazer o caminho "File" maior que "Save Scene As".`,
    },
  ],
};
