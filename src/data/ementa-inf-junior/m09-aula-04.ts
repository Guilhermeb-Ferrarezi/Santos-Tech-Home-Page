import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Gráfico de Pizza: As Fatias",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Transformar os mesmos dados em um gráfico de pizza, entender que cada fatia mostra "quanto de cada coisa" e comparar pizza com barras para escolher o formato mais bonito e claro.`,
  descricao: `Nesta aula a turma descobre um novo jeito de mostrar números: o gráfico de pizza. A ideia é simples e gostosa de explicar para criança: imagine uma pizza de verdade em cima da mesa. Se muita gente quer um sabor, esse sabor ganha uma fatia bem grande; se pouca gente quer, a fatia fica fininha. O gráfico de pizza faz exatamente isso com os números: o maior número vira a maior fatia, e o menor número vira a menor fatia. Tudo junto fecha o círculo, igual a uma pizza inteira.

O ponto central da aula é a comparação. Na aula passada a turma fez gráficos de barras (as torres). Hoje pegamos os mesmos dados e pedimos para a planilha desenhar uma pizza. Assim a criança vê, lado a lado, dois desenhos diferentes contando a mesma história. Ela percebe que a torre mais alta nas barras é a fatia maior na pizza. Esse "encontrar o mesmo campeão nos dois gráficos" é o aprendizado mais importante do dia.

A pizza é ótima para mostrar pedaços de um todo: as cores favoritas da turma, os sabores de sorvete preferidos, os bichinhos de estimação. Cada coisa ganha sua fatia colorida dentro do mesmo círculo. As barras, por outro lado, são melhores para comparar alturas e ver "quem tem mais". Não existe gráfico errado: existe o gráfico mais bonito e fácil para cada situação, e a turma vai treinar esse olhar.

Como as crianças de 5 a 9 anos ainda estão desenvolvendo leitura e escrita, a aula é toda no visual e no clicar. O professor demonstra no projetor, as crianças repetem no computador, e no final cada uma escolhe, apontando com o dedo, qual desenho achou mais bonito. O resultado entra no painel do mês, que está sendo montado pouco a pouco.`,
  materiais: [
    `Computadores (1 por criança ou em duplas) com o Excel ou o Google Planilhas já aberto na MESMA tabela de dados usada na aula de barras (ex.: lista de cores favoritas com a contagem de votos).`,
    `Projetor ou TV ligados no computador do professor para demonstrar cada clique.`,
    `Um arquivo de exemplo pronto, salvo antes da aula, contendo a tabela e já com um gráfico de barras feito (para comparar com a pizza).`,
    `Uma pizza de papel ou cartolina recortada em fatias coloridas de tamanhos diferentes (apoio concreto para a explicação).`,
    `Etiquetas ou cartões coloridos (vermelho, azul, amarelo, verde) para a brincadeira de votação.`,
    `Folhas em branco e lápis de cor para o exercício de desenho no papel.`,
    `Lista de presença para anotar quem já consegue inserir o gráfico sozinho.`,
  ],
  conceitosChave: [
    `Gráfico de pizza — um desenho redondo, igual a uma pizza, que mostra os números virando fatias coloridas.`,
    `Fatia — cada pedaço colorido da pizza; mostra "quanto" de cada coisa a gente tem.`,
    `Fatia maior — o pedaço mais gordo, que ganha mais espaço porque tem o número maior.`,
    `Fatia menor — o pedacinho fininho, que tem o número menor.`,
    `Círculo inteiro — a pizza completa; todas as fatias juntas formam o todo.`,
    `Legenda — a lista de cores ao lado do gráfico que diz qual fatia é cada coisa.`,
    `Comparar — olhar dois gráficos e ver o que conta a mesma história de jeitos diferentes.`,
  ],
  treinamento: `## O que o professor precisa saber

Um gráfico de pizza é um círculo dividido em fatias. Quanto maior o número, maior a fatia. A regra de ouro para passar à turma: a maior fatia é sempre o "campeão" dos dados, igual à torre mais alta nas barras. Você vai reusar a tabela da aula passada, então não precisa digitar nada novo. No Excel e no Google Planilhas o caminho é quase igual: selecionar os dados e mandar inserir um gráfico de pizza. O nome muda um pouquinho: no Excel é "Gráfico de Pizza"; no Google Planilhas é "Gráfico de pizza" dentro do menu "Inserir". Antes da aula, faça você mesmo o gráfico uma vez para não titubear na frente da turma.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): mostre a pizza de papel recortada. Pergunte: "Quem quer a fatia grande? E a fatia pequenininha?". Conecte com a aula passada abrindo o arquivo de exemplo e apontando para a torre mais alta no gráfico de barras: "Essa torre vai virar a maior fatia hoje".

2. Conteúdo novo guiado (15 min): no projetor, selecione a tabela com o mouse (clique na primeira célula, segure e arraste até a última, pegando nomes e números). No Excel, clique na aba "Inserir", depois no botãozinho de pizza (ícone redondo colorido) em "Gráficos" e escolha "Pizza 2D". No Google Planilhas, clique em "Inserir" no menu de cima, depois "Gráfico"; se aparecer outro tipo, abra a aba "Configurar" à direita, no campo "Tipo de gráfico" role e escolha "Gráfico de pizza". A pizza aparece na hora. Mostre que a fatia maior é o campeão.

3. Mão na massa (25 min): cada criança (ou dupla) repete no seu computador, com você circulando. Diga os passos em voz alta e devagar, um de cada vez. Quem terminar rápido tenta achar, sozinho, a menor fatia e dizer qual cor é. Deixe que comparem a pizza com as barras na mesma tela.

4. Desafio e compartilhar (10 min): cada criança aponta no monitor a maior fatia e diz a cor. Depois, todos votam levantando a mão: "Qual ficou mais bonito, a pizza ou as barras?". Salve o gráfico de cada um para o painel do mês.

## Como explicar para crianças de 5 a 9 anos

Use sempre a pizza de verdade como imagem. "A planilha é uma pizzaria mágica: a gente dá os números e ela assa a pizza pra gente." Fale "fatia gorda" e "fatia magrinha" em vez de "maior valor" e "menor valor". Aponte com o dedo no projetor o tempo todo. Para a comparação, diga: "A torre mais alta e a fatia mais gorda são o mesmo campeão, só que vestidos de roupa diferente". Evite palavras como "porcentagem" ou "proporção"; fique no concreto: grande, pequeno, mais, menos.

## Erros comuns e como ajudar

O erro mais comum é selecionar só os números e esquecer os nomes (as cores); aí a pizza fica sem legenda e a criança não sabe o que é cada fatia. Ajude refazendo a seleção pegando as duas colunas. Outro erro: escolher o tipo errado no menu e aparecer barra ou linha; mostre calmamente onde trocar para "pizza". Algumas crianças clicam fora e a pizza some ou vira; basta apertar Ctrl+Z (desfazer) e tentar de novo. Por fim, muitos confundem "fatia maior" com "fatia mais bonita" ou com a cor preferida; reforce que o tamanho vem do número, não da cor.`,
  exercicios: [
    {
      titulo: `Achando a Fatia Campeã`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada criança já tenha a pizza pronta na tela. Faça junto no projetor a primeira vez e depois deixe-as olharem o próprio gráfico. O objetivo é só treinar o olho para enxergar a maior fatia.`,
      atividade: `Olhe a sua pizza na tela. Aponte com o dedo a fatia mais gorda de todas. Fale bem alto qual cor é essa fatia campeã.`,
      gabarito: `A criança aponta corretamente a maior fatia, que corresponde ao maior número da tabela. Ex.: se "azul" teve mais votos, a fatia campeã é a azul. Acerto = apontar a maior fatia e dizer a cor certa.`,
    },
    {
      titulo: `Jogo da Pizza Humana`,
      tipo: `Jogo`,
      tempo: `10 min`,
      guiaProfessor: `Espalhe os cartões coloridos pela sala. Cada criança escolhe uma cor favorita e fica perto do cartão dela. As crianças que escolheram a mesma cor formam um grupo (uma fatia). Conduza a contagem de cada grupo.`,
      atividade: `Escolha sua cor favorita e vá para o cartão dessa cor. Conte com a turma quantos amigos ficaram em cada cor. O grupo com mais amigos é a fatia campeã da nossa pizza humana!`,
      gabarito: `O grupo mais numeroso é a maior fatia; o grupo com menos crianças é a menor fatia. Acerto = a turma identifica o maior grupo como a fatia campeã e o menor grupo como a fatia magrinha.`,
    },
    {
      titulo: `Desenhando Minha Pizza`,
      tipo: `Desenho no papel`,
      tempo: `12 min`,
      guiaProfessor: `Entregue folha e lápis de cor. Desenhe na lousa um círculo grande e mostre como dividir em fatias de tamanhos diferentes. Deixe a criança usar os mesmos dados da tela como inspiração, sem cobrar precisão.`,
      atividade: `Desenhe um círculo bem grande, igual a uma pizza. Faça uma fatia bem gorda para a coisa que tem o maior número e uma fatia fininha para a que tem o menor. Pinte cada fatia de uma cor.`,
      gabarito: `O desenho mostra um círculo com fatias de tamanhos diferentes: a maior fatia para o maior número e a menor fatia para o menor número, cada uma de uma cor. Acerto = a fatia mais gorda corresponde ao item com mais votos.`,
    },
    {
      titulo: `Pizza ou Torre? Roda de Conversa`,
      tipo: `Roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Sente a turma em roda. Mostre na tela a pizza e as barras dos mesmos dados, lado a lado. Faça perguntas e deixe cada criança opinar. Não há resposta única; valorize a justificativa simples ("porque é mais colorida", "porque a torre é mais fácil de ver quem tem mais").`,
      atividade: `Olhem os dois gráficos juntos. Respondam: nos dois, quem é o campeão? Qual desenho você achou mais bonito, a pizza ou as torres? Por quê?`,
      gabarito: `O campeão é o mesmo nos dois gráficos (maior fatia = torre mais alta). A escolha do mais bonito é livre, mas a criança deve dar um motivo. Acerto = reconhecer que o campeão é o mesmo nos dois e justificar a preferência.`,
    },
    {
      titulo: `Desafio: Crio a Pizza Sozinho`,
      tipo: `Desafio na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Este é o passo mais difícil. Dê uma tabela nova e pequena (ex.: 3 sabores de sorvete com votos). Deixe a criança tentar inserir o gráfico de pizza com a menor ajuda possível. Só intervenha se ela travar, lembrando o caminho: selecionar tudo, menu "Inserir", escolher "pizza".`,
      atividade: `Selecione a tabela nova inteira (nomes e números). Vá no menu "Inserir" e escolha o gráfico de pizza. Quando a pizza aparecer, mostre para o professor a maior fatia.`,
      gabarito: `A criança seleciona as duas colunas, abre "Inserir", escolhe o gráfico de pizza e ele aparece com a legenda das cores. Por fim, aponta a maior fatia, que é o sabor mais votado. Acerto = pizza criada com legenda e maior fatia identificada corretamente.`,
    },
  ],
};
