import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Meus Desenhos Viram Sprites",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança aprende a importar o personagem que desenhou para o Construct 3, transformando a imagem em um sprite que aparece na tela do jogo.`,
  descricao: `Esta é a primeira aula do mês em que vamos montar um jogo 2D usando a arte que as próprias crianças criaram. A grande ideia de hoje é simples e mágica: o desenho que a criança fez (no papel ou no computador) deixa de ser só uma figura parada e vira um sprite, ou seja, uma peça viva do jogo que poderá andar, ser tocada e participar da brincadeira nas próximas aulas.

Um sprite é qualquer imagem que entra no jogo como um objeto. No Construct 3, cada personagem, cada item e cada cenário costuma ser um sprite. Hoje as crianças vão fazer o caminho da imagem até a tela: abrir o projeto, trazer o arquivo do desenho para dentro do Construct 3 e ver o personagem aparecer no Layout (a tela do jogo) pela primeira vez. É um momento muito especial, porque a criança reconhece o próprio traço dentro de um programa de verdade.

Por que isso importa? Porque dá sentido a tudo que vem depois. Nas próximas aulas o personagem vai andar, colecionar pontos, ganhar vidas, fugir de inimigos e até fazer sons. Mas nada disso funciona se o personagem não estiver dentro do jogo como sprite. Esta aula é a fundação: sem o sprite, não há jogo.

O professor não precisa ser especialista em Construct 3. A aula foi pensada como um tutorial passo a passo, com os nomes exatos dos botões e painéis, para que mesmo um professor iniciante conduza a turma com segurança, demonstrando no projetor e ajudando criança por criança.`,
  materiais: [
    `Computadores (um por criança ou em duplas) com o Construct 3 já aberto no navegador e com um projeto novo criado antes da aula.`,
    `Projetor ou TV grande ligado ao computador do professor, para demonstrar cada passo na tela cheia.`,
    `Os desenhos dos personagens já digitalizados (fotografados ou escaneados) e salvos como arquivos de imagem PNG na pasta do computador de cada aluno.`,
    `Uma pasta única e fácil de achar na área de trabalho, com nome simples como "Meus Desenhos", contendo as imagens de cada criança.`,
    `Dois ou três desenhos de exemplo prontos (do professor), para usar caso o desenho de algum aluno não esteja disponível.`,
    `Crachás ou etiquetas com o nome de cada criança, para identificar facilmente qual desenho é de quem.`,
    `Folhas de papel e lápis de cor de reserva, para quem terminar antes ou quiser desenhar um segundo personagem.`,
  ],
  conceitosChave: [
    `Sprite — é o seu desenho que entra no jogo virando uma peça que se mexe e brinca junto.`,
    `Importar — é trazer uma figura de fora para dentro do programa, como guardar um brinquedo na caixa do jogo.`,
    `Layout — é a telinha do jogo onde tudo acontece, o palco onde o personagem fica.`,
    `Arquivo de imagem — é o desenho guardado no computador, com nome e um lugar certo para morar.`,
    `Arrastar e soltar — é pegar uma coisa com o mouse, levar para outro lugar e largar ali.`,
    `PNG — é um tipo de figura limpinha, sem fundo branco atrapalhando, ótima para personagens.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

Construct 3 é um programa que roda no navegador (Chrome de preferência) para criar jogos 2D sem precisar digitar código. Tudo é montado de forma visual. Os dois lugares que você mais vai usar hoje são o Layout (a área grande do meio, que é a tela do jogo) e o Project Bar (a barra à direita, que lista tudo que existe no projeto). Um sprite é um tipo de objeto que carrega uma imagem. Quando você importa um desenho, ele vira um Sprite Object, e esse objeto aparece tanto no Layout quanto na lista do projeto. Prefira arquivos PNG, porque eles permitem fundo transparente, deixando o personagem recortado e bonito. Antes da aula, abra o Construct 3, crie um New Project em branco e deixe pronto em cada computador. Tenha os desenhos já salvos como PNG numa pasta fácil de achar. Teste você mesmo o passo a passo uma vez: a confiança do professor acalma a turma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba as crianças com os desenhos delas em mãos ou na tela. Pergunte: "Quem desenhou esse herói? O que ele sabe fazer?" Mostre no projetor um jogo simples e diga que hoje o desenho de cada um vai entrar dentro do computador para virar personagem de jogo.

Conteúdo novo guiado (15 min): no projetor, mostre o Construct 3 aberto. Aponte o Layout no centro e o Project Bar à direita. Agora demonstre o passo principal: abra a pasta com as imagens ao lado da janela do Construct 3, clique e segure um arquivo PNG, arraste-o para cima do Layout e solte. O Construct 3 cria o sprite automaticamente e o personagem aparece na tela. Mostre também o caminho do menu: clique com o botão direito no Layout, escolha "Insert new object", selecione "Sprite", clique no Layout para posicionar e, no editor que abrir, use o botão de pasta "Load an image from a file" para escolher o desenho. Repita devagar duas vezes.

Mão na massa (25 min): agora cada criança faz no próprio computador. Circule pela sala. Peça que arrastem o desenho deles para o Layout e digam em voz alta "apareceu!" quando der certo. Ajude a posicionar o personagem mais ou menos no meio da tela. Se sobrar tempo, mostre como arrastar pelos cantinhos (as alças) para deixar o personagem num tamanho bom, nem gigante nem minúsculo.

Desafio e compartilhar (10 min): proponha que cada um traga um segundo desenho (um item, uma estrela, uma fruta) e o transforme em sprite também. No fim, faça a "roda de orgulho": cada criança vira a tela e mostra o personagem que ganhou vida.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Evite palavras técnicas soltas. Use imagens mentais. Diga: "Seu desenho é como um adesivo. Vamos colar esse adesivo dentro do jogo, e ele vira um personagem que vai poder se mexer." Chame o Layout de "palco" ou "telinha do jogo". Chame importar de "trazer para dentro". Faça gestos: imite com a mão o movimento de pegar, levar e soltar o desenho. Comemore cada acerto com entusiasmo: "Olha! Ele apareceu! Você colocou seu herói no jogo!" Repetir o vocabulário com alegria fixa as palavras melhor do que explicar definições.

## Erros comuns e como ajudar

O erro mais frequente é a criança soltar o arquivo fora do Layout, e nada acontecer; mostre de novo, devagar, segurando o mouse junto com ela. Outro problema é o personagem aparecer gigante: ensine a clicar nele e arrastar pela alça do canto para diminuir. Às vezes a criança importa a imagem errada; mantenha os arquivos com nomes claros e o crachá por perto. Se o desenho tiver fundo branco feio, tudo bem por hoje; o recorte fino fica para depois. Se um computador travar, peça para a criança trabalhar em dupla com o colega do lado, sem perder o ritmo da turma.`,
  exercicios: [
    {
      titulo: `Caça aos painéis`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Com o Construct 3 no projetor, faça perguntas rápidas apontando para a tela. O objetivo é que as crianças reconheçam onde fica o palco do jogo antes de mexer sozinhas. Aponte e pergunte, deixe várias crianças responderem.`,
      atividade: `Olhando para a tela grande, responda apontando com o dedo: "Onde fica o palco do jogo, o lugar onde o personagem vai aparecer?" Depois mostre onde fica a lista com tudo que tem no jogo.`,
      gabarito: `A criança aponta corretamente para o Layout (a área grande no meio) como o palco do jogo e para o Project Bar (barra à direita) como a lista do projeto. Acertou se identificou os dois espaços, mesmo chamando pelos apelidos "palco" e "lista".`,
    },
    {
      titulo: `Meu desenho no palco`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor e depois deixe cada criança fazer no próprio computador. Circule e ajude a segurar o mouse junto com quem tiver dificuldade. Comemore alto cada personagem que aparecer.`,
      atividade: `Abra a pasta com o seu desenho. Clique e segure o arquivo, arraste para cima da telinha do jogo e solte. Quando o seu personagem aparecer, grite "apareceu!" e levante a mão para o professor ver.`,
      gabarito: `O desenho da criança vira um sprite e aparece dentro do Layout, e o objeto também surge na lista do projeto à direita. Acertou quando o personagem está visível no palco do jogo.`,
    },
    {
      titulo: `No tamanho certo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que ao clicar no personagem aparecem alças (quadradinhos) nos cantos. Demonstre como arrastar a alça do canto para mudar o tamanho. Reforce que o personagem deve ficar do tamanho de uma mão na tela, nem gigante nem minúsculo.`,
      atividade: `Clique no seu personagem para selecioná-lo. Pegue um dos quadradinhos do canto, segure e arraste devagar para deixar o personagem num tamanho bom para o jogo. Depois arraste o personagem para mais ou menos o meio da tela.`,
      gabarito: `O personagem fica num tamanho equilibrado (aproximadamente do tamanho de uma mão na tela) e posicionado perto do centro do Layout. Acertou quando o personagem não está cortado pela borda nem ocupando a tela inteira.`,
    },
    {
      titulo: `Desenhe o segundo personagem`,
      tipo: `desenho no papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua papel e lápis de cor. Peça um desenho simples de um item que vai existir no jogo (uma estrela, uma fruta, uma moeda). Explique que esse desenho também vai virar sprite numa próxima vez. Incentive traços grandes e cheios de cor, que ficam melhores como sprite.`,
      atividade: `Desenhe num papel um item para o seu jogo: pode ser uma estrela, uma frutinha ou uma moeda. Faça grande, pinte bastante e escreva seu nome no cantinho da folha.`,
      gabarito: `A criança entrega um desenho de um item de jogo, com traço claro e colorido, e o nome escrito ou marcado na folha. Acertou quando o desenho é grande o suficiente e fácil de reconhecer para ser usado como sprite depois.`,
    },
    {
      titulo: `Desafio: a coleção de sprites`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Para quem já dominou o passo de importar, proponha trazer mais de um desenho para o Layout. Ajude a organizar os personagens lado a lado sem ficarem um por cima do outro. No final, faça a roda de orgulho, com cada criança mostrando sua coleção na tela.`,
      atividade: `Importe pelo menos dois desenhos diferentes para a telinha do jogo, arrastando cada arquivo e soltando no palco. Coloque os personagens lado a lado, sem um tampar o outro. Mostre a sua coleção para a turma.`,
      gabarito: `Há dois ou mais sprites visíveis no Layout, separados e sem sobreposição, cada um listado também no Project Bar. Acertou quando todos os personagens importados aparecem ao mesmo tempo na tela, organizados lado a lado.`,
    },
  ],
};
