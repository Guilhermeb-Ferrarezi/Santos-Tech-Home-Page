import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Construct: nosso palco de jogos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue abrir o Construct 3, reconhecer o cenário (layout) como o palco do jogo e navegar nele arrastando a tela, dando zoom e olhando ao redor com ajuda do professor.`,
  descricao: `Esta é a primeira aula do nosso jogo 2D do mês. Antes de colocar personagens, regras ou movimento, as crianças precisam conhecer o lugar onde tudo vai acontecer: o Construct 3. Pense no Construct como um teatro vazio, e o "layout" (cenário) como o palco onde a história do jogo vai ser montada. Nesta aula ninguém ainda monta nada no palco; nós só apresentamos o palco, andamos por ele e aprendemos a enxergá-lo de perto e de longe.

O objetivo é tirar o medo da tela cheia de botões. Um programa novo, com muitos painéis e menus, assusta criança pequena (e professor iniciante também). Por isso vamos no ritmo da brincadeira: abrir um projeto em branco, mostrar onde fica a área retangular do jogo, e deixar cada criança experimentar arrastar a tela com o mouse, aproximar e afastar com o zoom. É um passeio guiado, não uma aula de cliques decorados.

Por que isso importa? Porque todas as próximas sete aulas acontecem dentro deste palco. Se a criança souber se localizar, achar a área do jogo e mexer na visão sem entrar em pânico, as aulas seguintes (colocar objetos, criar regras, mover o personagem) ficam muito mais leves. Esta aula constrói a confiança e o vocabulário visual que sustentam o mês inteiro.

Como a turma tem leitura e escrita mínimas, o professor demonstra tudo no projetor primeiro e depois acompanha cada dupla ou cada criança. A palavra de ordem é "olhar e fazer junto": pouco texto, muita mão na massa, muito apontar com o dedo na tela.`,
  materiais: [
    `Um computador por criança (ou um para cada dupla) com o Construct 3 já aberto no editor, em um projeto novo em branco, antes da aula começar.`,
    `Projetor ou TV grande ligada ao computador do professor, para demonstrar cada passo ampliado.`,
    `Conexão com a internet testada, pois o Construct 3 roda no navegador (de preferência Google Chrome).`,
    `Um mouse de verdade para cada computador (criança pequena tem dificuldade com o touchpad para arrastar e dar zoom).`,
    `Crachás ou etiquetas com o nome de cada criança, para o professor chamar pelo nome durante o apoio individual.`,
    `Uma folha grande de papel ou cartolina desenhada como um "palco de teatro" vazio, para a roda de conversa e a analogia.`,
    `Adesivos ou carimbos simples para premiar quem completar o passeio pelo palco (motivação na idade).`,
  ],
  conceitosChave: [
    `Construct 3 — o programa onde a gente cria jogos no computador, como uma caixa mágica cheia de ferramentas.`,
    `Layout (cenário) — o palco do jogo; é o lugar de fundo onde o jogo vai acontecer.`,
    `Área do jogo — o retângulo que mostra o pedaço que o jogador vai ver na tela quando estiver jogando.`,
    `Arrastar a tela — segurar e puxar com o mouse para passear pelo palco e ver outros cantos.`,
    `Zoom — chegar perto (aumentar) ou ir para longe (diminuir) para enxergar melhor o palco.`,
    `Projeto — a pasta mágica que guarda tudo do nosso jogo, como uma mochila que segura nosso trabalho.`,
    `Painel — as janelinhas em volta da tela onde ficam os botões e as coisas que a gente usa.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base técnica)

O Construct 3 é uma ferramenta de criação de jogos que roda no navegador, sem instalar nada. Você abre pelo site editor.construct.net, de preferência no Google Chrome. A tela do editor tem três regiões que você deve saber nomear: no centro fica o "layout", que é a área de trabalho onde montamos o cenário do jogo; à direita ficam os painéis "Project" (a lista de tudo que existe no jogo) e "Properties" (as propriedades do item selecionado); embaixo ou ao lado pode aparecer a "Layers". Nesta aula só importa o layout central.

Dentro do layout existe um retângulo com uma borda mais marcada: é a "área do jogo" (o tamanho da janela que o jogador enxerga, chamado de viewport). O resto, fora desse retângulo, é o palco estendido, onde podemos guardar coisas que ainda não entram em cena. Para navegar: segure a barra de espaço e arraste com o mouse, ou use a barra de rolagem, para mover a visão; gire o scroll do mouse (ou Ctrl com mais e menos) para dar zoom. O atalho Shift+0 (ou o menu de zoom) reposiciona a visão e ajuda quando alguém se perde. Decore esse atalho: ele é seu botão de socorro.

Importante: nesta aula NÃO adicionamos objetos, NÃO criamos eventos e NÃO mexemos em movimento. Isso é conteúdo das próximas aulas. Aqui o objetivo é só reconhecer e navegar pelo palco.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em Construct 3)

Aquecimento (10 min): com os computadores ainda de lado, reúna a turma na roda. Mostre a cartolina do palco vazio e pergunte: "Onde a história de um teatro acontece?". Conduza até a ideia de palco. Diga que hoje vamos conhecer o palco dos nossos jogos dentro do computador.

Conteúdo novo guiado (15 min): no projetor, mostre o Construct 3 já aberto. Aponte o retângulo central e diga "este é o nosso palco, o layout". Demonstre devagar: segure a barra de espaço e arraste o mouse para passear; gire o scroll para dar zoom de perto e de longe; use Shift+0 para voltar ao centro. Faça cada gesto duas vezes, falando em voz alta o que está fazendo.

Mão na massa (25 min): cada criança vai ao seu computador (já com projeto em branco aberto por você). Peça que encontrem o retângulo da área do jogo. Depois, um comando de cada vez: "arrastem para a direita", "deem zoom para perto", "voltem com o Shift+0". Circule pela sala, ajoelhe ao lado de cada um, guie a mão se preciso. Elogie cada acerto.

Desafio e compartilhar (10 min): proponha o "caça ao tesouro": esconda visualmente um cantinho do palco e peça que naveguem até achar. No fim, cada criança mostra para a turma como dá zoom. Encerre com adesivo para todos.

## Como explicar para crianças de 5 a 9 (analogias e linguagem)

Use sempre a palavra "palco". O layout é o palco; a área do jogo é "a parte que o público vê"; arrastar a tela é "andar pelo palco para ver os cantos"; o zoom é "uma lupa: perto para ver detalhe, longe para ver tudo". Evite termos técnicos como viewport ou editor. Fale frases curtas e mostre antes de pedir. Use o corpo: peça que estiquem o braço (longe = zoom para fora) e aproximem a mão do rosto (perto = zoom para dentro).

## Erros comuns e como ajudar

A criança clica em tudo e cria objetos ou apaga coisas sem querer: oriente "só vamos olhar e passear hoje" e use Ctrl+Z para desfazer. A criança se perde e some da área do jogo: ensine o botão de socorro Shift+0. Confusão entre arrastar a tela e arrastar um item: reforce que hoje seguramos a barra de espaço para andar. Touchpad atrapalha o zoom: por isso o mouse é obrigatório. Frustração por "não achar nada": reaproxime a visão você mesmo, depois devolva o controle. Pressa de "começar o jogo": valide a ansiedade e prometa que na próxima aula colocamos coisas no palco.`,
  exercicios: [
    {
      titulo: `Achando o palco`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Com cada criança no seu computador e o projeto em branco já aberto, peça que encontrem com o dedo na tela o retângulo da área do jogo. Demonstre uma vez no projetor antes. Circule e confirme um por um.`,
      atividade: `Olhe a tela do Construct 3 e aponte com o dedo onde fica o retângulo da área do jogo, o pedaço que o jogador vai ver. Depois conte para o professor: o palco é grande ou pequeno?`,
      gabarito: `A criança aponta corretamente para o retângulo central de borda marcada (a área do jogo). Acertou se identifica o retângulo e percebe que existe espaço para além dele (o palco é maior que o retângulo).`,
    },
    {
      titulo: `Passeio pelo palco`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Dê um comando de movimento de cada vez e espere todos fazerem. Lembre que hoje seguramos a barra de espaço e arrastamos o mouse para andar. Use Shift+0 para reagrupar a turma na mesma visão.`,
      atividade: `Segure a barra de espaço e arraste o mouse para passear pelo palco: vá para a direita, depois para a esquerda, depois para cima. No final, aperte Shift+0 para voltar ao centro.`,
      gabarito: `A criança consegue mover a visão para os lados e para cima e retorna ao centro com Shift+0. Acertou se a tela se move de forma controlada e ela sabe usar o botão de socorro para voltar.`,
    },
    {
      titulo: `A lupa mágica do zoom`,
      tipo: `Jogo`,
      tempo: `10 minutos`,
      guiaProfessor: `Transforme em brincadeira de comando: o professor fala "perto!" e "longe!" como num jogo de estátua. Faça junto no projetor. Ajoelhe ao lado de quem usa touchpad ou troque por um mouse.`,
      atividade: `Quando o professor disser "perto!", gire o scroll do mouse para dar zoom e chegar bem perto do palco. Quando disser "longe!", gire para o outro lado e veja o palco inteirinho de longe. Vamos repetir várias vezes, cada vez mais rápido.`,
      gabarito: `A criança aumenta e diminui o zoom no comando certo. Acertou se associa "perto" a aproximar e "longe" a afastar, e consegue alternar entre os dois sem se perder.`,
    },
    {
      titulo: `Meu palco no papel`,
      tipo: `Desenho / papel`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua uma folha para cada criança. Mostre a cartolina do palco vazio como exemplo. Não exige escrita: é desenho. Peça que conversem enquanto desenham sobre o que viram na tela.`,
      atividade: `Desenhe numa folha o palco do seu jogo do jeito que você imaginar: faça um retângulo grande (a área do jogo) e desenhe ao redor o que você sonha colocar nele depois (um sol, uma árvore, um bichinho). Hoje o palco está vazio; você desenha o sonho dele.`,
      gabarito: `A criança desenha um retângulo representando a área do jogo e algo ao redor. Acertou se mostra que entendeu que o palco é o espaço do jogo e que ainda está vazio, esperando ser preenchido nas próximas aulas.`,
    },
    {
      titulo: `Caça ao tesouro no palco`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Antes, no computador de cada criança, dê um zoom bem para fora e arraste a visão para um canto distante do palco, deixando a área do jogo fora da tela. O desafio é a criança voltar sozinha. Ajude só com dicas, não com a mão.`,
      atividade: `Ops! O palco se perdeu de vista. Usando o que você aprendeu, arraste a tela e use o zoom para achar de novo o retângulo da área do jogo. Se ficar muito difícil, lembre do botão de socorro Shift+0.`,
      gabarito: `A criança reencontra a área do jogo navegando sozinha, combinando arrastar e zoom, ou usando Shift+0 quando precisa. Acertou se consegue voltar ao palco e explicar em uma frase qual ferramenta usou.`,
    },
  ],
};
