import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pintando com Cores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ao final da aula, a criança consegue escolher cores na paleta do MagicaVoxel e pintar com cuidado, cubinho por cubinho, a pele, a roupa e o cabelo do personagem que já construiu.`,
  descricao: `Nesta aula o personagem feito de cubinhos ganha vida com cor. Até agora a turma construiu a forma: corpo, cabeça, bracinhos, perninhas e carinha, tudo na mesma cor cinza padrão. Hoje é o dia mais colorido do mês: cada criança vai abrir o seu personagem e começar a pintar, escolhendo uma cor para a pele, outra para a roupa e outra para o cabelo.

Pintar no MagicaVoxel é diferente de pintar no papel. Aqui a criança não passa o pincel por cima de tudo; ela clica em cada cubinho e troca a cor daquele cubinho. É como colorir um desenho de quadradinhos, em que cada quadradinho recebe a sua cor. Por isso a aula trabalha duas habilidades juntas: escolher a cor certa na paleta e mirar com cuidado para pintar só o cubinho que se quer, sem invadir o vizinho.

Esse cuidado é importante porque a cor conta a história do personagem. A roupa azul, o cabelo marrom e a pele combinada fazem o boneco parecer "de verdade". Quando as crianças veem o personagem ganhando cor, elas se animam muito e ficam orgulhosas do trabalho. Esse é também o momento de aprender a trocar de cor com calma: clicar numa cor nova na paleta antes de continuar pintando, em vez de sair clicando em qualquer lugar.

A aula não pede que o personagem fique perfeito. A meta é que cada criança pinte pelo menos três partes com três cores diferentes (pele, roupa e cabelo) e entenda o movimento básico: escolher cor, depois pintar o cubinho. Nas próximas aulas o personagem ganha detalhes e fica pronto para a impressão; hoje o foco é só a alegria de colorir com capricho.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o MagicaVoxel já aberto e o personagem de cada aluno carregado na tela.`,
    `Projetor ou TV grande ligado no computador do professor, para mostrar onde clicar.`,
    `Arquivo de exemplo: um personagem simples já pintado (pele, roupa, cabelo) para mostrar o resultado final.`,
    `Arquivo de apoio: o mesmo personagem sem cor (cinza), para o professor demonstrar a pintura ao vivo.`,
    `Folhas com o desenho do personagem em quadradinhos (grade) e lápis de cor ou giz de cera, para a atividade no papel.`,
    `Cartões coloridos (vermelho, azul, amarelo, verde, marrom, rosa) para o jogo das cores.`,
    `Adesivos ou carimbos de "Artista do dia" para o momento de compartilhar.`,
  ],
  conceitosChave: [
    `Cor — é o jeito de dar vida ao personagem; cada cubinho pode ter a sua cor, como tinta mágica.`,
    `Paleta — é a caixinha cheia de quadradinhos coloridos no canto da tela; ali a gente escolhe a cor antes de pintar.`,
    `Pintar — clicar num cubinho para trocar a cor dele pela cor que você escolheu.`,
    `Trocar de cor — clicar numa cor nova na paleta; é como largar um lápis e pegar outro.`,
    `Pele, roupa e cabelo — as três partes principais do personagem que vamos colorir hoje, cada uma com a sua cor.`,
    `Mirar com cuidado — apontar o mouse certinho no cubinho que você quer, para não pintar o vizinho sem querer.`,
    `Capricho — pintar devagar e com atenção, deixando cada parte bem-feita.`,
  ],
  treinamento: `## O que o professor precisa saber (a teoria + a base tecnica)

No MagicaVoxel, cada modelo é feito de pequenos cubos chamados voxels. Cada voxel guarda duas informações: onde ele está e qual é a sua cor. Quando as crianças construíram o personagem, todos os voxels nasceram com a mesma cor padrão (um cinza claro). Pintar é simplesmente mudar a cor de um voxel já existente, sem apagar nem criar cubo nenhum.

A cor vem da paleta, a faixa de quadradinhos coloridos no lado direito da tela. Você clica numa cor da paleta para deixá-la "ativa" (ela fica destacada) e essa passa a ser a cor do seu pincel. Para pintar, é preciso estar na ferramenta de pintura: no painel de ferramentas, à esquerda da área de trabalho, existem os botões Attach (adicionar cubo), Erase (apagar cubo) e Paint (pintar). A letra de atalho de Paint é a tecla "G". Com Paint ativo, clicar num voxel troca a cor dele pela cor ativa da paleta, sem adicionar nem remover cubos. É exatamente isso que queremos hoje: a forma já está pronta, vamos só colorir.

Dica de preparo: deixe o personagem de cada criança aberto e gire-o de frente para a câmera. Confirme que o modo Paint está selecionado em cada máquina antes da turma chegar, para não perder tempo. Tenha o exemplo já pintado salvo para mostrar o objetivo logo no início.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar em MagicaVoxel)

Aquecimento (10 min): mostre no projetor o personagem de exemplo já pintado e diga "hoje a gente vai deixar o nosso assim, cheio de cor!". Faça uma rodada rápida: cada criança fala uma cor que quer usar no seu personagem.

Conteúdo novo guiado (15 min): no seu computador, abra o personagem cinza. Mostre a paleta de cores à direita e clique numa cor (por exemplo, um tom de pele). Mostre o painel de ferramentas à esquerda e clique no botão Paint (ou aperte a tecla G). Explique: "agora o mouse virou pincel". Clique num cubinho do rosto e ele muda de cor. Pinte alguns cubinhos da carinha. Depois clique noutra cor da paleta (azul) e diga "troquei de lápis" e pinte um pedaço da roupa. Por fim escolha o marrom e pinte o cabelo. Repita devagar o ciclo: escolher cor na paleta, conferir se Paint está ligado, clicar no cubinho.

Mão na massa (25 min): cada criança volta para o seu personagem. Peça que pintem nesta ordem para não se perder: primeiro a pele (rosto e mãos), depois a roupa (tronco e pernas), depois o cabelo. Passe de mesa em mesa garantindo que o botão Paint está ativo e que a criança clica na paleta antes de pintar. Elogie o capricho.

Desafio + compartilhar (10 min): proponha o desafio "uma cor surpresa" (pintar os sapatos ou um detalhe com uma cor nova). Depois cada criança gira o seu personagem para a turma ver e ganha o adesivo de Artista do dia.

## Como explicar para criancas de 5 a 9 (analogias e linguagem)

Chame a paleta de "caixa de lápis de cor". Diga: "escolha um lápis clicando na cor, depois pinte". Chame o modo Paint de "modo pincel" e mostre com gesto de pintar no ar. Para a troca de cor, use "largue um lápis e pegue outro". Para o cuidado, diga "mire certinho no quadradinho, como acertar a bolinha no buraco". Comemore cada parte pintada: "olha a pele pronta! agora a roupa!".

## Erros comuns e como ajudar

O mais comum é a criança esquecer de ativar o Paint e acabar adicionando cubos (modo Attach) ou apagando (modo Erase). Se o personagem começar a "crescer" ou "sumir", reative o Paint (tecla G) e mostre de novo. Outro erro é continuar com a cor antiga porque esqueceu de clicar na paleta; lembre "trocou de lápis?". Há também quem pinte rápido demais e invada o cubinho vizinho; peça calma e capricho. Por fim, alguns clicam fora do modelo, no vazio; mostre que só os cubinhos do personagem pegam cor.`,
  exercicios: [
    {
      titulo: `Pinte a carinha`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Comece pela parte mais fácil e visível: o rosto. Demonstre uma vez no projetor (escolher cor da pele na paleta, conferir o modo Paint, clicar nos cubinhos do rosto). Depois deixe a turma repetir no seu próprio personagem. Passe nas mesas confirmando que o botão Paint está ativo.`,
      atividade: `Escolha uma cor de pele na paleta. Confira que o modo pincel (Paint) está ligado. Pinte todos os cubinhos da carinha do seu personagem com essa cor.`,
      gabarito: `O rosto do personagem fica todo de uma cor de pele, sem cubinhos cinzas sobrando no rosto. Nenhum cubo novo foi criado nem apagado: a forma continua igual, só mudou a cor.`,
    },
    {
      titulo: `Jogo "Acha a Cor"`,
      tipo: `jogo`,
      tempo: `7 minutos`,
      guiaProfessor: `Levante os cartões coloridos um de cada vez. A cada cor que você mostra, as crianças correm para clicar naquela mesma cor na paleta do MagicaVoxel (sem pintar ainda, só selecionar). É um jogo para treinar achar a cor certa na caixinha rapidinho.`,
      atividade: `Quando o professor levantar um cartão colorido, ache e clique nessa mesma cor na sua paleta. Vermelho, azul, amarelo, verde, marrom, rosa. Quem acha primeiro levanta a mão.`,
      gabarito: `A criança seleciona na paleta a cor igual à do cartão mostrado (a cor fica destacada como ativa). Acertou quem clicou na cor correta correspondente ao cartão.`,
    },
    {
      titulo: `Roda das cores do meu personagem`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Pergunte a cada criança quais cores ela escolheu e por quê. Incentive falas curtas e valorize as escolhas, mostrando que não existe cor errada. Aproveite para reforçar os nomes "pele", "roupa" e "cabelo".`,
      atividade: `Conte para a turma: qual cor você usou na pele do seu personagem? E na roupa? E no cabelo? Por que escolheu essas cores?`,
      gabarito: `A criança nomeia ao menos três cores e relaciona cada uma a uma parte (pele, roupa, cabelo). Está certo quando ela consegue dizer, por exemplo, "pele bege, roupa azul, cabelo marrom".`,
    },
    {
      titulo: `Colorindo no papel (grade)`,
      tipo: `desenho/papel`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a folha com o personagem desenhado em quadradinhos (grade). Peça que pintem com lápis de cor respeitando as linhas, um quadradinho de cada vez, igual fazemos no computador. Isso treina o capricho de pintar dentro da forma sem invadir o vizinho.`,
      atividade: `Pinte o personagem da folha um quadradinho de cada vez. Use uma cor para a pele, outra para a roupa e outra para o cabelo. Tente não passar a cor para fora dos quadradinhos.`,
      gabarito: `O desenho fica colorido em três áreas distintas (pele, roupa, cabelo), com a cor mantida dentro dos quadradinhos. Acertou quem pintou com capricho, respeitando as linhas da grade.`,
    },
    {
      titulo: `Desafio da cor surpresa`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o passo mais difícil e divertido. Depois de pintar pele, roupa e cabelo, peça que cada criança escolha uma cor nova para um detalhe especial (sapatos, um chapéu, um cinto ou bochechas rosadas). Reforce a troca de cor na paleta e a mira cuidadosa. Termine com cada um girando o personagem para mostrar à turma.`,
      atividade: `Seu personagem já tem pele, roupa e cabelo coloridos. Agora escolha UMA cor surpresa na paleta e pinte um detalhe especial: sapatos, chapéu, cinto ou bochechas. Depois gire o personagem e mostre para os amigos.`,
      gabarito: `O personagem tem as três partes principais pintadas mais pelo menos um detalhe com uma cor diferente, e a criança consegue apresentar girando o modelo. Acertou quem trocou de cor corretamente e pintou só o detalhe escolhido, sem bagunçar o resto.`,
    },
  ],
};
