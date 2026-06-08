import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Pintando com Cores Vivas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aprender a usar a paleta de cores do MagicaVoxel para pintar os itens da Semana 1, trocando de cor voxel a voxel e usando o balde para preencher áreas grandes rapidinho.`,
  descricao: `Nesta aula a turma vai dar vida aos itens mágicos que construíram na Semana 1. Até agora os modelos estão prontos no formato, mas quase tudo na mesma cor. Hoje a mágica acontece: vamos descobrir a paleta de cores do MagicaVoxel, escolher cores que combinam e pintar cada criação para que ela fique bonita e fácil de reconhecer no jogo.

A ideia central é que cor não é só enfeite, é informação. Uma poção vermelha "fala" perigo ou força; uma poção azul "fala" calma ou água; uma moeda amarela "fala" tesouro. Quando a criança escolhe a cor certa, qualquer pessoa que olhar o item entende na hora o que ele é. Por isso vamos conversar sobre cores que combinam, como deixar um detalhe brilhando e como não deixar o modelo virar uma bagunça colorida.

No lado técnico, as crianças vão aprender duas ações principais: selecionar uma cor na paleta (a faixa colorida do lado direito da tela) e aplicar essa cor de dois jeitos. O primeiro é o Attach pintando voxel por voxel, com cuidado, para detalhes pequenos. O segundo é o balde de tinta (Fill / Paint Bucket), que pinta uma área inteira da mesma cor de uma vez só, economizando muito tempo.

Ao final da aula, cada aluno terá pelo menos um item totalmente colorido e salvo, pronto para virar parte do pacote de assets do mês. O professor não precisa ser especialista: este material mostra exatamente onde clicar, o que falar e como ajudar quando algo der errado.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o arquivo .vox de cada aluno da Semana 1 carregado`,
    `Projetor ou TV grande para o professor demonstrar na tela principal`,
    `Dois exemplos prontos do professor: um item sem cor (cinza) e o mesmo item já pintado e bonito`,
    `Uma roda de cores impressa ou um cartaz simples mostrando cores que combinam (quente x frio)`,
    `Mouse para cada criança (pintar com touchpad é muito difícil para essa idade)`,
    `Fones de ouvido opcionais e um cronômetro visível para marcar as etapas da aula`,
  ],
  conceitosChave: [
    `Paleta — a faixa cheia de quadradinhos coloridos no lado direito da tela; é a caixa de tintas do MagicaVoxel.`,
    `Voxel — o cubinho mágico que forma tudo no MagicaVoxel; cada voxel pode ter a sua própria cor.`,
    `Cor selecionada — a cor que está marcada na paleta agora; é a tinta que vai sair quando você clicar no modelo.`,
    `Balde de tinta (Fill) — a ferramenta que pinta uma área grande inteira da mesma cor de uma vez, bem rápido.`,
    `Pincel (Attach / pintar) — pintar um cubinho de cada vez, com calma, para os detalhes pequenos.`,
    `Cores que combinam — cores que ficam bonitas juntas, como amarelo com laranja ou azul com roxo.`,
    `Contraste — quando uma cor clara fica do lado de uma escura e o detalhe "salta aos olhos".`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel separa duas coisas: a forma do modelo (os cubinhos) e a cor de cada cubinho. Na Semana 1 a turma cuidou da forma. Hoje cuidamos só da cor, então ninguém vai mexer no formato. A peça mais importante da tela é a paleta: a faixa colorida vertical no lado direito. Cada quadradinho dela é uma cor. A cor que estiver com uma bordinha marcada é a "cor selecionada", ou seja, a tinta que vai sair quando você clicar no modelo.

Você vai usar três botões da barra de ferramentas (à esquerda do modelo): Attach (pintar/encaixar), Erase (apagar) e o modo de pintura com Fill. Para esta aula, o essencial é o Attach com a opção de cor e o balde Fill. Antes de começar, abra o seu exemplo no projetor e localize: a paleta à direita, a barra de ferramentas à esquerda e o nome do arquivo no topo.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor os dois exemplos, o item cinza e o item colorido. Pergunte: "Qual vocês escolheriam no jogo? Por quê?" Deixe as crianças perceberem que a cor ajuda a entender o item. Mostre rapidamente o cartaz de cores que combinam.

Conteúdo novo guiado (15 min): No projetor, faça devagar. Primeiro, clique numa cor na paleta à direita (por exemplo, um vermelho) e mostre que ela fica marcada. Segundo, com a ferramenta Attach ativa (ícone à esquerda, geralmente o primeiro), passe o mouse sobre o modelo e clique num voxel: ele muda de cor. Faça três ou quatro voxels para mostrar o "pintar com pincel". Terceiro, ative o modo Fill (balde): segure a tecla de atalho do Fill ou escolha o ícone de balde e clique numa área grande de uma cor só; toda a área pinta de uma vez. Diga em voz alta cada clique: "Escolho a cor... clico no modelo... pronto, pintou!"

Mão na massa (25 min): As crianças abrem o próprio arquivo da Semana 1. Tarefa: escolher duas ou três cores que combinam e pintar o item. Oriente a usarem o balde Fill para as partes grandes (o corpo da poção, a moeda inteira) e o pincel Attach para os detalhes (a rolha, o brilho, a estrelinha). Circule pela sala, elogie escolhas de cor e lembre de salvar com Ctrl+S a cada poucos minutos.

Desafio + compartilhar (10 min): Desafio: adicionar um ponto de brilho com uma cor bem clara num detalhe pequeno, para criar contraste. Depois, cada aluno mostra o item pintado no projetor ou para o colega do lado e diz qual cor escolheu e por quê.

## Como explicar para crianças

Use a ideia de caixa de tintas: "A paleta é a sua caixa de tintas. Primeiro você escolhe a tinta clicando no quadradinho colorido, depois você pinta clicando no seu modelo." Para o balde, diga: "O balde é tinta mágica que pinta tudo de uma cor só de uma vez, como derrubar tinta num chão liso." Para cores que combinam, use comida e natureza: "Amarelo e laranja são amigos, como o sol. Azul e roxo são amigos, como o céu à noite." Lembre sempre: "Escolho a cor, depois clico no modelo." Essa ordem evita a maioria das confusões.

## Erros comuns e como ajudar

O erro número um é clicar no modelo sem ter escolhido a cor antes, então o voxel pinta da cor errada; mostre de novo a ordem "primeiro a paleta, depois o modelo". O segundo erro é apagar voxel sem querer porque a criança ficou no modo Erase ou no botão direito; peça para usar o botão esquerdo do mouse e confirmar que a ferramenta Attach está marcada. O terceiro erro é o balde Fill pintar áreas demais e bagunçar o modelo; explique que o balde pinta tudo que está grudado da mesma cor, então convém usar o pincel nos detalhes. O quarto erro é exagerar e usar muitas cores diferentes; combine "no máximo três cores" para o item ficar limpo. Por fim, muitas crianças esquecem de salvar: faça uma contagem em voz alta e todos apertam Ctrl+S juntos. Se alguém disser que "sumiu a cor", provavelmente é a luz do programa; basta girar a câmera para ver melhor.`,
  exercicios: [
    {
      titulo: `Cor que Combina`,
      tipo: `Conversa em roda / aquecimento`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o cartaz de cores e os dois exemplos (cinza e colorido). Faça perguntas e deixe várias crianças responderem antes de revelar a ideia de que cor é informação.`,
      atividade: `Olhe o item colorido do professor no projetor. Diga qual cor você acha que combina com a cor principal dele e por quê.`,
      gabarito: `Não há resposta única. Respostas boas mostram pares que combinam, por exemplo: amarelo com laranja, azul com roxo, verde com amarelo. O importante é a criança justificar ("ficam bonitos juntos", "lembram o sol"). Aceite qualquer par coerente e elogie a explicação.`,
    },
    {
      titulo: `Achei a Paleta`,
      tipo: `Demonstração guiada (todos juntos)`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que todos olhem a própria tela. Conduza passo a passo: localizar a faixa colorida à direita, clicar numa cor e ver a bordinha de seleção. Confirme um por um antes de seguir.`,
      atividade: `Encontre a paleta no lado direito da tela. Clique numa cor azul e mostre para o professor que ela ficou marcada como cor selecionada.`,
      gabarito: `O aluno aponta corretamente a faixa colorida vertical à direita e clica num quadradinho azul; a cor passa a aparecer marcada (com bordinha) indicando que é a cor selecionada. Sucesso é a criança saber que escolher a cor é o primeiro passo, antes de pintar.`,
    },
    {
      titulo: `Pintando com o Pincel`,
      tipo: `Prática individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta que a ferramenta Attach está ativa e que as crianças usam o botão esquerdo do mouse. Circule e relembre a ordem "primeiro a cor, depois o modelo". Peça para salvarem com Ctrl+S ao terminar.`,
      atividade: `Escolha uma cor na paleta e pinte um detalhe pequeno do seu item voxel a voxel, por exemplo a rolha da poção ou o brilho da moeda.`,
      gabarito: `O aluno seleciona uma cor e, com o Attach, clica em voxels individuais que mudam para essa cor, formando um detalhe pequeno bem feito. Espera-se que ele troque a cor pelo menos uma vez e mantenha a forma do modelo intacta. Salvar com Ctrl+S completa a tarefa.`,
    },
    {
      titulo: `O Balde Mágico`,
      tipo: `Prática individual com ferramenta nova`,
      tempo: `12 minutos`,
      guiaProfessor: `Ative o modo Fill (balde) com a turma. Avise que o balde pinta toda a área grudada da mesma cor; por isso é ótimo para partes grandes e perigoso perto de detalhes. Ajude quem pintou demais a usar Ctrl+Z para desfazer.`,
      atividade: `Use o balde de tinta (Fill) para pintar a parte grande do seu item de uma só vez, como o corpo da poção ou a moeda inteira. Depois ajuste com o pincel se precisar.`,
      gabarito: `O aluno seleciona uma cor, ativa o Fill e pinta uma área grande do modelo num clique. Espera-se que perceba a diferença de velocidade em relação ao pincel e que use Ctrl+Z se o balde espalhar a cor demais. Resultado correto: a parte grande fica de uma cor só, limpa e combinando com os detalhes.`,
    },
    {
      titulo: `Brilho de Mestre`,
      tipo: `Desafio criativo + compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Incentive o uso de uma cor bem clara (branco ou amarelo claro) em um ou dois voxels para criar contraste. Limite a três cores no total para o item não virar bagunça. Conduza o momento de cada aluno mostrar e explicar a escolha.`,
      atividade: `Adicione um ponto de brilho com uma cor bem clarinha num detalhe pequeno do item, para ele "saltar aos olhos". Depois mostre seu item e diga quais cores você escolheu e por quê.`,
      gabarito: `O aluno coloca um ou dois voxels de cor clara num detalhe, criando contraste visível com o resto do modelo, e mantém o total em até três cores que combinam. Ao compartilhar, ele nomeia as cores usadas e dá uma justificativa simples (por exemplo, "o brilho mostra que a poção é mágica"). Item pintado e salvo com Ctrl+S encerra o desafio.`,
    },
  ],
};
