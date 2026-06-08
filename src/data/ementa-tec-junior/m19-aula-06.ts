import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Adicionando Objetos do Cenário",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar objetos que dão vida ao cenário — como árvores, caixas, pilares e pedras — combinando formas simples e posicionando cada peça no lugar certo do mapa que a turma planejou.`,
  descricao: `Nas aulas passadas a turma construiu o chão e as paredes do nosso jogo 3D no Maya. Agora o cenário ainda parece vazio, como uma sala sem móveis. Nesta aula vamos encher esse espaço de vida: vamos criar os objetos que fazem o lugar parecer de verdade. Uma árvore, uma caixa de tesouro, um pilar de pedra, uma rocha no caminho. Cada objeto é construído a partir das mesmas formas simples que as crianças já conhecem: o cubo, o cilindro e a esfera.

A grande ideia é que objetos complicados nascem de formas fáceis grudadas. Uma árvore é só um cilindro fininho (o tronco) com uma esfera ou um cone em cima (a copa). Uma caixa é um cubo. Um pilar é um cilindro alto. Uma pedra é uma esfera ou um cubo "esticado" e amassado. Quando a criança percebe isso, ela ganha um superpoder: consegue inventar quase qualquer coisa só empilhando blocos, igual ao que fazia com peças de montar.

O segundo aprendizado importante desta aula é POSICIONAR. Não basta criar a árvore: ela precisa ficar no lugar certo do mapa que a turma desenhou na Aula 2. As crianças vão usar o mover, o girar e o esticar (que treinaram na Aula 4) para colocar cada objeto onde planejaram. É como decorar um quarto: o objeto existe, agora ele vai para o canto certo, no tamanho certo, virado para o lado certo.

Ao final da aula o cenário deixa de ser uma caixa vazia e começa a virar um lugar com personalidade — uma floresta, uma praça, um castelo. As crianças saem orgulhosas porque o mundo que elas imaginaram está aparecendo na tela em três dimensões.`,
  materiais: [
    `Computadores com o Maya aberto e a cena do cenário (chão e paredes) de cada criança já carregada`,
    `Projetor ou TV grande conectada no computador do professor para a demonstração ao vivo`,
    `O mapa do cenário que a turma desenhou na Aula 2, impresso ou no quadro, para consultar onde vão os objetos`,
    `Um exemplo pronto pelo professor: uma cena com uma árvore, uma caixa e um pilar já montados, para mostrar o objetivo`,
    `Peças de montar de verdade (blocos, cilindros, esferas de brinquedo) para a criança "construir" o objeto com as mãos antes de fazer no Maya`,
    `Folha de papel com os "objetos do dia" sugeridos (árvore, caixa, pilar, pedra) e de quais formas cada um é feito`,
    `Adesivos ou carimbos de "Construtor 3D" para premiar quem posiciona um objeto no lugar certo do mapa`,
  ],
  conceitosChave: [
    `Objeto do cenário — uma coisa que mora no nosso mundo do jogo, como uma árvore, uma caixa ou uma pedra.`,
    `Forma primitiva — as formas simples do Maya (cubo, cilindro, esfera, cone) que usamos como peças de montar.`,
    `Combinar formas — juntar duas ou mais formas simples para criar um objeto novo, como tronco mais copa virar uma árvore.`,
    `Posicionar — colocar o objeto no lugar certo do cenário, igual a arrumar um móvel no canto certo do quarto.`,
    `Mover (W) — a ferramenta com as setinhas coloridas que empurra o objeto para cima, para os lados ou para frente.`,
    `Girar (E) — a ferramenta dos círculos coloridos que vira o objeto para o lado que a gente quer.`,
    `Esticar / Escalar (R) — a ferramenta dos quadradinhos que deixa o objeto maior, menor, mais alto ou mais gordo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um artista 3D. Tudo nesta aula usa só formas prontas que o Maya já tem e três ferramentas que a turma já treinou. As formas ficam no menu de cima "Create" (Criar) → "Polygon Primitives" (Primitivas de Polígono): ali estão "Cube" (Cubo), "Cylinder" (Cilindro), "Sphere" (Esfera) e "Cone" (Cone). Cada vez que você clica em um desses, uma forma nova aparece no meio da tela. Atalhos das ferramentas de transformação: W = mover (setinhas), E = girar (círculos), R = escalar/esticar (quadradinhos). Decore só isso: W, E, R.

A regra de ouro: objeto difícil = formas fáceis grudadas. Tronco é um cilindro fino e alto; copa é uma esfera em cima. Caixa é um cubo. Pilar é um cilindro alto. Pedra é uma esfera ou um cubo amassado com o R. Tenha o mapa da Aula 2 à vista para lembrar ONDE cada objeto vai.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor a cena vazia (só chão e paredes) e pergunte: "O que falta para virar um lugar de verdade?". Espalhe as peças de montar e peça que cada criança monte com as mãos uma árvore (um cilindro de pé + uma bola em cima). Isso planta a ideia de combinar formas antes de tocar no computador.

Conteúdo novo guiado (15 min): No Maya, no projetor, construa UMA árvore devagar. 1) "Create" → "Polygon Primitives" → "Cylinder": aparece um cilindro. 2) Aperte R (esticar) e puxe o quadradinho de cima para deixá-lo alto e fininho — é o tronco. 3) "Create" → "Polygon Primitives" → "Sphere": aparece uma esfera. 4) Aperte W (mover) e puxe a setinha verde (para cima) até a bola pousar no topo do tronco — é a copa. Pronto, uma árvore! Repita rapidinho fazendo uma caixa ("Cube") e um pilar (um "Cylinder" alto e fino com o R).

Mão na massa (25 min): Cada criança abre a própria cena e cria pelo menos dois objetos do "cardápio do dia" (árvore, caixa, pilar ou pedra). Para cada objeto: cria as formas pelo "Create", usa R para deixar do tamanho certo, W para levar até o lugar do mapa e E para virar se precisar. Circule pela sala dizendo "olha o seu mapa: onde fica essa árvore?". Lembre de salvar: "File" → "Save Scene" (Ctrl + S).

Desafio e compartilhar (10 min): Desafie cada criança a posicionar um objeto exatamente no ponto do mapa onde ela planejou. Quem acertar ganha o carimbo de "Construtor 3D". Termine com uma volta pela sala: cada um mostra no projetor um objeto que criou e diz que formas usou.

## Como explicar para crianças

Use a analogia das peças de montar: "Lembra que com bloquinhos você fazia um carro juntando peças? No Maya é igual: a gente junta formas simples para fazer coisas grandes." Chame as formas de "ingredientes" e o objeto de "receita": árvore = um cilindro + uma bola. Para posicionar, use a ideia de arrumar o quarto: "O móvel existe, agora vamos levar ele para o canto certo." Sempre aponte para o mapa: "o mapa é o nosso plano, vamos seguir o plano."

## Erros comuns e como ajudar

A criança cria a forma e ela some: provavelmente está atrás do chão ou bem pequena; aperte W e use a setinha verde para subir a forma, ou aperte F (no teclado) para a câmera "achar" e centralizar o objeto selecionado. A criança estica e o objeto vira um monstro torto: lembre de puxar só UM quadradinho por vez com o R, devagar. A árvore fica com a copa no chão: ela esqueceu de mover a esfera para cima; ajude a achar a setinha VERDE (para cima). A criança cria dez formas e bagunça: combine "uma forma de cada vez, termina o objeto, depois começa o próximo". A criança não sabe onde pôr o objeto: leve-a até o mapa impresso e aponte juntos o lugar antes de mover no Maya. Sempre lembre de salvar com Ctrl + S para não perder o trabalho.`,
  exercicios: [
    {
      titulo: `Montando objetos com as mãos`,
      tipo: `Dinâmica com peças de montar`,
      tempo: `5 minutos`,
      guiaProfessor: `Antes do computador, entregue as peças de montar (cilindros, cubos e esferas de brinquedo). Peça que cada criança construa uma árvore com as mãos: um cilindro de pé e uma bola em cima. Isso ensina a ideia de combinar formas sem nenhuma tela.`,
      atividade: `Pegue as peças de montar e construa uma árvore: ponha um cilindro de pé para ser o tronco e encaixe uma bola em cima para ser a copa. Mostre a sua árvore para um colega.`,
      gabarito: `A criança junta duas formas: um cilindro em pé (tronco) e uma esfera no topo (copa). Acerto = perceber que uma árvore é feita de formas simples grudadas. Exemplo: cilindro embaixo + bola em cima formando uma arvorezinha.`,
    },
    {
      titulo: `Criando a primeira forma no Maya`,
      tipo: `Prática no Maya`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor onde fica "Create" (Criar) → "Polygon Primitives" (Primitivas de Polígono) → "Cube" (Cubo). Cada criança cria um cubo na própria cena. Esse cubo vai virar uma caixa do cenário. Se a forma sumir, ensine a apertar F para a câmera centralizar nela.`,
      atividade: `No Maya, clique em "Create", depois "Polygon Primitives" e depois "Cube". Apareceu um cubo na tela? Esse cubo vai ser a sua caixa do jogo!`,
      gabarito: `Um cubo novo aparece no centro da cena depois de a criança percorrer "Create" → "Polygon Primitives" → "Cube". Acerto = achar o menu e criar a forma sozinha. Erro comum: a forma fica escondida atrás do chão; basta apertar F para encontrá-la.`,
    },
    {
      titulo: `Construindo uma árvore de duas formas`,
      tipo: `Prática no Maya`,
      tempo: `8 minutos`,
      guiaProfessor: `Guie a turma a criar um cilindro (tronco) e uma esfera (copa). Use R para deixar o cilindro alto e fino e W (setinha verde) para subir a esfera até o topo do tronco. Faça junto, passo a passo, olhando o projetor.`,
      atividade: `Crie um cilindro e use o R para deixá-lo alto e fino: esse é o tronco. Agora crie uma esfera, aperte W e puxe a setinha verde para cima até a bola pousar no topo do tronco. Pronto, você fez uma árvore!`,
      gabarito: `Uma árvore montada: cilindro alto e fino embaixo e esfera apoiada no topo. Acerto = usar R para esticar o tronco e W (setinha verde) para subir a copa. Erro comum: a copa fica no chão porque a criança esqueceu de mover a esfera para cima.`,
    },
    {
      titulo: `Posicionando o objeto no lugar do mapa`,
      tipo: `Prática no Maya com o mapa`,
      tempo: `8 minutos`,
      guiaProfessor: `Coloque o mapa da Aula 2 à vista. A criança escolhe um objeto que já criou e o leva, com a ferramenta mover (W), para o ponto do cenário onde planejou no mapa. Se precisar virar o objeto, use E (girar). Pergunte sempre "onde isso fica no seu mapa?".`,
      atividade: `Olhe o seu mapa e escolha onde a sua árvore (ou caixa) deve ficar. Aperte W e use as setinhas para levar o objeto até esse lugar no cenário. Se quiser virar ele, aperte E e gire devagar.`,
      gabarito: `O objeto é movido com W (e girado com E, se preciso) até o ponto do cenário que combina com o mapa. Acerto = a posição no Maya bater com o plano desenhado. Exemplo: a árvore que estava no centro vai para o canto onde o mapa mostra a floresta.`,
    },
    {
      titulo: `Decorando o cenário com três objetos`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Desafie cada criança a ter pelo menos três objetos diferentes no cenário (por exemplo árvore, caixa e pilar), cada um no lugar certo do mapa e num tamanho que faça sentido. Lembre de salvar com Ctrl + S. Quem completar ganha o carimbo de "Construtor 3D".`,
      atividade: `Encha o seu cenário de vida: deixe pelo menos três objetos diferentes (como árvore, caixa e pilar), cada um no lugar certo do mapa e num tamanho legal. No fim, salve apertando Ctrl + S e mostre o seu mundo para a turma.`,
      gabarito: `O cenário tem três ou mais objetos distintos, posicionados conforme o mapa e em tamanhos coerentes, com a cena salva. Acerto = combinar formas, posicionar com W/E/R e salvar. Exemplo: uma árvore no canto, uma caixa perto da parede e um pilar na entrada, tudo salvo.`,
    },
  ],
};
