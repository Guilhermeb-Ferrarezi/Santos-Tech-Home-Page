import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Desenhando o Mapa do Nosso Mundo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Imaginar como será o mundo do nosso jogo, fazer um rascunho rápido no papel e começar a montar o chão e as paredes principais usando blocos no Roblox Studio.`,
  descricao: `Todo jogo legal começa com uma ideia de mundo. Antes de sair colocando bloco em cima de bloco, a gente precisa parar e imaginar: onde o jogador vai andar? Onde ficam as paredes? Tem uma parte de grama, uma parte de pedra, um caminho? Nesta aula a criança vira a arquiteta do próprio jogo. Primeiro desenhamos um mapa rápido no papel, como se fosse a planta de uma casa vista de cima, e só depois transformamos esse rascunho em blocos de verdade dentro do Roblox Studio.

O grande aprendizado de hoje é que planejar antes economiza tempo e evita bagunça. Quando a criança rabisca o mapa antes, ela já sabe onde colocar cada bloco e não fica perdida na tela. É a mesma lógica que ela usou na modelagem 3D no MagicaVoxel e no Blender: primeiro a ideia, depois a construção. Aqui no Roblox o chão é só um bloco grande e achatado, e as paredes são blocos compridos colocados em pé. Simples assim.

Na parte de mão na massa, cada aluno vai criar o chão do seu mundo redimensionando um bloco (a peça chamada Part) e depois levantar pelo menos duas ou três paredes principais. Não precisa ficar perfeito nem terminar o cenário inteiro hoje; o objetivo é ter a base montada para, nas próximas aulas, encher o mundo com os bonecos voxel que já trouxemos e com a decoração. É o esqueleto do mundo nascendo na tela.

O professor não precisa ser especialista em Roblox. Esta aula é um tutorial guiado: vamos dizer exatamente onde clicar, o nome de cada botão e cada painel. A ideia é que professor e turma descubram juntos, com você sempre um passo à frente projetando a sua tela para todos verem.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por aluno, já com o projeto do jogo da turma carregado`,
    `Projetor ou TV grande ligado ao computador do professor para demonstrar cada passo`,
    `Folhas de papel quadriculado e lápis de cor para o rascunho do mapa`,
    `Um exemplo de mapa pronto desenhado no papel (chão, paredes e caminho) para mostrar como fica`,
    `Um projeto Roblox de exemplo com o chão e duas paredes já montadas, para a turma ver o resultado`,
    `Régua ou borracha extra para ajudar nos desenhos`,
    `Lista com os nomes dos alunos para anotar quem já montou o chão`,
  ],
  conceitosChave: [
    `Mapa — desenho do nosso mundo visto de cima, mostrando onde fica cada coisa, como a planta de uma casa.`,
    `Rascunho — desenho rápido e simples que a gente faz primeiro, só pra ter a ideia, sem caprichar nos detalhes.`,
    `Bloco (Part) — a peça básica do Roblox, um tijolinho que a gente estica e empilha pra construir tudo.`,
    `Chão — bloco grande e achatado onde o jogador anda; é a base do mundo.`,
    `Parede — bloco comprido colocado em pé que serve de muro pra fechar o cenário.`,
    `Redimensionar — esticar ou encolher um bloco puxando as bolinhas, pra deixar do tamanho certo.`,
    `Explorer — a janelinha do Roblox Studio que mostra a lista de tudo que existe no nosso mundo.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje a turma sai do papel para a tela. Você vai precisar de dois passos simples no Roblox Studio: criar um bloco (Part) e mudar o tamanho dele. O bloco é a peça mágica que vira chão quando achatamos e vira parede quando deixamos comprido e em pé. Para criar um bloco, na aba "Home" (Início), no topo, clique no botão "Part". Um cubo cinza aparece no centro da cena. Para mudar o tamanho, clique na ferramenta "Scale" (Escala), também no topo: surgem bolinhas coloridas no bloco; puxando essas bolinhas você estica ou achata. Tenha o seu projeto aberto e teste esses dois passos uma vez antes da aula. Deixe o painel "Explorer" visível (menu "View" / Exibir, botão "Explorer") porque é nele que vemos a lista de tudo.

## Passo a passo da aula (10/15/25/10)

AQUECIMENTO (10 min): Reúna a turma longe do computador. Pergunte: "Como vocês imaginam o mundo do nosso jogo?" Mostre o seu mapa de exemplo no papel e explique que é o mundo visto de cima, como um passarinho enxerga. Entregue o papel quadriculado e peça um rascunho bem rápido: um retângulo para o chão, riscos para as paredes e uma seta mostrando onde o jogador começa. Dois minutos, sem capricho.

CONTEÚDO NOVO GUIADO (15 min): Agora no projetor, com o Roblox Studio aberto. Mostre o painel "Explorer" à direita. Vá na aba "Home" e clique em "Part": surge um cubo cinza. Diga "esse tijolinho vai virar o nosso chão". Clique na ferramenta "Scale" (Escala) no topo. Puxe a bolinha de cima para baixo até o bloco ficar bem fininho e achatado, depois puxe as bolinhas dos lados para deixá-lo largo e comprido como um tapete. Pronto, virou chão. Depois crie outra Part, use "Scale" para deixá-la comprida e fininha, e com a ferramenta "Move" (Mover) levante-a de pé na beirada do chão: virou parede.

MÃO NA MASSA (25 min): Cada aluno faz no próprio computador. Tarefa: criar o chão (uma Part achatada e larga) e levantar pelo menos duas paredes seguindo o rascunho do papel. Circule pela sala. Lembre que o botão "Part" cria e o "Scale" muda o tamanho. Quem terminar rápido pode pintar o chão de verde na propriedade "Color" e fazer uma terceira parede.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Coloque uma parede a mais para criar um cantinho fechado, como um quintal." Depois, dois ou três alunos giram a tela e mostram o mundo deles para a turma. Pergunte o que cada um vai colocar ali na próxima aula.

## Como explicar para crianças

Use a analogia da casa: "O mapa é a plantinha da nossa casa, vista lá de cima, como se a gente fosse um passarinho voando." Para o bloco, diga: "É um tijolinho de massinha mágica: a gente aperta pra baixo e ele vira o chão; a gente puxa pra cima e ele vira a parede." Mostre sempre antes de pedir, e faça junto com eles na primeira vez. Repita os nomes dos botões em voz alta: "Part faz o tijolinho; Scale muda o tamanho." Crianças aprendem vendo e imitando, então projete cada passo bem devagar.

## Erros comuns e como ajudar

O erro mais comum é a criança criar vários blocos sem querer, clicando em "Part" muitas vezes. Mostre o painel "Explorer" e apague os blocos extras com a tecla "Delete". Outro erro é puxar a bolinha errada e o bloco virar uma torre em vez de chão; oriente a puxar a bolinha de cima para baixo, achatando. Alguns vão querer terminar o mundo inteiro hoje; acalme e diga que hoje é só a base, o resto vem nas próximas aulas. E quem ficar travado olhando a tela: peça para olhar o próprio rascunho no papel e copiar dali. O papel é o mapa que guia a construção.`,
  exercicios: [
    {
      titulo: `Rascunho do meu mundo no papel`,
      tipo: `Desenho no papel`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue papel quadriculado. Peça um desenho bem rápido do mundo visto de cima: um retângulo grande para o chão e riscos nas bordas para as paredes. Não precisa caprichar.`,
      atividade: `Desenhe o mapa do seu jogo visto de cima. Faça um retângulo para o chão e risque onde vão ficar as paredes principais.`,
      gabarito: `Um desenho simples com um retângulo representando o chão e pelo menos duas linhas nas bordas representando paredes. Qualquer mapa legível com chão e paredes está correto; o objetivo é planejar, não desenhar bonito.`,
    },
    {
      titulo: `Achei o botão certo`,
      tipo: `Identificação na tela`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete a aba "Home" do Roblox Studio. Aponte para alguns botões e pergunte qual deles cria um bloco novo. Reforce o nome em voz alta.`,
      atividade: `Olhe a barra de cima do Roblox Studio. Qual botão a gente clica para criar um tijolinho (bloco) novo na cena?`,
      gabarito: `O botão "Part", que fica na aba "Home" (Início). Ao clicar nele, um cubo cinza aparece no centro da cena.`,
    },
    {
      titulo: `Montando o chão do mundo`,
      tipo: `Mão na massa no Roblox Studio`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe cada aluno. Garanta que criem uma Part com "Part" e usem "Scale" para achatar e alargar. Lembre de puxar a bolinha de cima para baixo.`,
      atividade: `Crie um bloco com o botão "Part". Depois use a ferramenta "Scale" para achatar ele e deixá-lo largo, como um tapete. Esse é o chão do seu mundo.`,
      gabarito: `Um bloco bem fininho na altura e largo nas laterais, parecendo um piso, posicionado como base da cena. Pequenas diferenças de tamanho são aceitáveis, desde que o bloco esteja achatado e sirva de chão.`,
    },
    {
      titulo: `Levantando as paredes`,
      tipo: `Mão na massa no Roblox Studio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre que a parede é uma Part comprida e fininha colocada em pé. Use "Scale" para a forma e "Move" para levantar na beirada do chão. Ajude quem deixar a parede deitada.`,
      atividade: `Crie pelo menos duas paredes seguindo o seu rascunho. Use "Scale" para deixar o bloco comprido e fininho e "Move" para colocá-lo em pé na beirada do chão.`,
      gabarito: `Duas ou mais Parts compridas e estreitas, posicionadas em pé sobre as bordas do chão, formando muros. Aceita-se qualquer disposição que feche pelo menos um lado do mundo, contanto que as paredes estejam em pé.`,
    },
    {
      titulo: `Fazendo um cantinho fechado`,
      tipo: `Desafio criativo no Roblox Studio`,
      tempo: `10 minutos`,
      guiaProfessor: `Para os mais rápidos. Peça uma parede a mais para fechar um canto, como um quintal. Quem quiser pode pintar o chão de verde na propriedade "Color", no painel "Properties".`,
      atividade: `Adicione mais uma parede para criar um cantinho fechado no seu mundo, como um quintal. Se sobrar tempo, pinte o chão de verde usando a propriedade "Color".`,
      gabarito: `Pelo menos três paredes formando um canto fechado em "L" ou um espaço cercado, opcionalmente com o chão pintado de verde pela propriedade "Color" no painel "Properties". Qualquer canto fechado com as paredes em pé conta como concluído.`,
    },
  ],
};
