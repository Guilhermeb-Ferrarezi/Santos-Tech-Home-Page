import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Montando Minha Tabelinha",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `A criança aprende a juntar várias células digitadas para formar uma tabelinha, escrevendo os títulos na linha de cima (como Nome e Cor) e os dados nas linhas de baixo, entendendo que cada coluna guarda um tipo de coisa.`,
  descricao: `Nesta aula as crianças dão o passo mais importante do mês: deixam de escrever em uma célula solta e passam a juntar várias células para montar uma tabela de verdade. Nas aulas anteriores elas conheceram o mapa da planilha, aprenderam a achar células pelo endereço (como B2 ou C3) e treinaram digitar suas primeiras palavras dentro de uma célula. Agora chegou a hora de organizar tudo isso em um formato com cabeça e corpo: uma linha de títulos em cima e os dados arrumados embaixo.

O coração da aula é uma ideia simples e poderosa: cada coluna guarda um tipo de coisa, sempre o mesmo. Se a coluna se chama "Nome", então de cima a baixo ela só tem nomes. Se a coluna se chama "Cor", de cima a baixo ela só tem cores. As crianças preenchem, linha por linha, uma tabelinha de exemplo guiada pelo professor, e percebem que ler fica fácil quando cada coisa está no seu lugar certo. Essa organização é a base de toda planilha, do boletim escolar à lista de compras dos pais.

Para crianças de 5 a 9 anos, que ainda estão desenvolvendo a leitura e a escrita, o segredo é demonstrar muito no telão e fazer junto, devagar, uma célula de cada vez. O professor digita um título, a turma copia; o professor digita um dado, a turma copia. A tabelinha de exemplo deve ser curta e cheia de sentido para elas, como uma lista de bichinhos com a cor de cada um, ou uma lista de frutas com a quantidade. Pouca digitação, muito entendimento.

Ao final, cada criança terá montado, com a própria mão, uma tabelinha pequena com duas ou três colunas de títulos e duas ou três linhas de dados, toda alinhada e organizada. Esse é um degrau direto para o entregável do mês, que é uma tabela própria da criança (coleção, notas ou time): hoje ela aprende a estrutura; nas próximas aulas vai pintar, fazer bordas e enfeitar a sua própria.`,
  materiais: [
    `Um computador por aluno (até 10), com o Excel ou o Google Planilhas já aberto antes da turma chegar, numa planilha em branco e com a célula A1 selecionada.`,
    `O computador do professor ligado a um projetor ou TV grande, para digitar cada passo no telão bem devagar e a turma acompanhar.`,
    `Uma tabelinha-exemplo pronta feita pelo professor (por exemplo, colunas Nome, Cor e Patas com três bichinhos preenchidos), para mostrar como fica o resultado final antes de começar.`,
    `Um cartaz ou folha grande desenhada à mão com uma tabela vazia de 3 colunas e 4 linhas, para apontar com o dedo onde vão os títulos e onde vão os dados.`,
    `Plaquinhas ou tarjetas de papel com os títulos das colunas (Nome, Cor, Patas) para as crianças segurarem no exercício de papel.`,
    `Folhas com uma grade de quadradinhos impressa e lápis de cor, para a atividade de montar a tabela no papel.`,
    `Adesivos ou carimbos de carinha feliz para premiar quem terminar a tabelinha com capricho e organização.`,
  ],
  conceitosChave: [
    `Tabela — um quadro feito de várias células juntas, com os títulos em cima e as coisas arrumadas embaixo, para a gente achar tudo rápido.`,
    `Coluna — a fileira de células que desce de cima para baixo; cada coluna guarda só um tipo de coisa, como só nomes ou só cores.`,
    `Linha — a fileira de células que vai da esquerda para a direita; cada linha conta a história de uma coisa só, como um bichinho inteiro.`,
    `Título da coluna — a palavra que fica na primeira célula de cima e diz o que aquela coluna vai guardar, como Nome ou Cor.`,
    `Cabeçalho — a linha lá de cima cheia de títulos, que é a "cabeça" da tabela e ensina a gente a ler as colunas.`,
    `Dado — cada informação que a gente digita nas células de baixo, como o nome do bichinho ou a cor dele.`,
    `Enter — a tecla que a gente aperta depois de digitar para guardar a palavra na célula e pular para a célula de baixo.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma tabela é só um monte de células organizadas com uma regra: a primeira linha são os títulos (o cabeçalho) e as linhas seguintes são os dados. A regra de ouro que você vai repetir a aula toda é: cada coluna guarda um tipo de coisa só. A coluna do Nome só tem nomes; a coluna da Cor só tem cores. Quando isso é respeitado, a tabela fica fácil de ler.

Tanto no Excel quanto no Google Planilhas o jeito de montar é igual. Você clica na célula A1 (canto de cima, à esquerda), digita o primeiro título e aperta Tab para ir para a célula do lado (B1), digita o segundo título, Tab de novo para C1, e assim por diante. A tecla Tab anda para a direita; a tecla Enter desce uma linha. Um truque ótimo: depois de preencher a linha de títulos toda com Tab e apertar Enter no fim, o cursor volta sozinho para a coluna A na linha de baixo, pronto para começar os dados.

Não é preciso usar fórmula, cor ou borda nesta aula. Isso vem nas próximas. Hoje é só digitar e organizar. Se uma palavra ficar maior que a célula e transbordar para o lado, tudo bem, não atrapalha nada; explique que a célula está só "espreguiçando" e que vamos arrumar a largura mais para frente. Para corrigir um erro, clique na célula, aperte Delete e digite de novo, ou dê dois cliques na célula para editar por dentro.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Excel / Google Planilhas)

1. Aquecimento e revisão (10 min). Receba a turma e relembre as aulas passadas com o cartaz da grade: "Quem lembra o nome do quadradinho do cantinho de cima? Isso, A1!". Aponte uma célula e peça o endereço. Depois mostre a tabelinha-exemplo no telão (Nome, Cor, Patas com três bichinhos) e diga: "Hoje a gente vai montar uma tabela igual a essa, juntando vários quadradinhos."

2. Conteúdo novo guiado (15 min). No telão, bem devagar. Clique na célula A1. Digite "Nome" e aperte Tab. "Viu? Andou para o lado, foi para B1." Digite "Cor", Tab para C1, digite "Patas". Aperte Enter: "Olha, o cursor voltou lá para baixo, na coluna A!". Agora comece os dados: digite "Gato", Tab, "Cinza", Tab, "4", Enter. Mostre que cada coisa caiu embaixo do seu título. Aponte uma coluna inteira e repita a regra de ouro: "A coluna Cor só tem cores, viu? Cinza, em cima dela só tem a palavra Cor."

3. Mão na massa (25 min). Cada criança na sua planilha, com A1 selecionada. Guie em coro, uma célula por vez, todos juntos: "Cliquem na A1... digitem Nome... apertem Tab!". Espere todos chegarem antes de seguir. Preencham juntos a linha de títulos (Nome, Cor, Patas) e depois, linha por linha, dois ou três bichinhos. Passe de mesa em mesa conferindo se os dados estão embaixo do título certo. Reforce sempre: Tab anda para o lado, Enter desce.

4. Desafio e compartilhar (10 min). Desafio: "Acrescente mais um bichinho na sua tabela, na linha de baixo, sozinho." Quem montar a linha completa e organizada ganha adesivo. Termine reunindo a turma: cada criança mostra a tabelinha no telão ou para o colega do lado e lê (ou aponta) qual coluna guarda os nomes e qual guarda as cores.

## Como explicar para crianças de 5 a 9 anos

Use a ideia de gavetas: "cada coluna é uma gavetinha; na gaveta dos nomes só entra nome, na gaveta das cores só entra cor". Chame os títulos de "as plaquinhas que dizem o que mora em cada gaveta". Para a linha, use a história: "cada linha conta a vida de um bichinho inteiro, do nome até quantas patas ele tem". Explique o Tab como "o passinho para o lado" e o Enter como "o pulo para baixo". Faça gestos: a mão andando para a direita no Tab, a mão descendo no Enter. Compare com encher uma caixa de ovos: cada ovo no seu buraquinho, nada misturado.

## Erros comuns e como ajudar

O erro mais comum é misturar o tipo de coisa na coluna, como pôr uma cor na coluna do Nome; pare e mostre a regra das gavetas, "cor não mora na gaveta do nome". Muitos apertam Enter em vez de Tab e descem quando deveriam andar para o lado, bagunçando os títulos; mostre as duas teclas e o gesto de cada uma. Outro erro é começar na célula errada, no meio da planilha; lembre que toda tabela começa lá no cantinho, na A1. Tem quem se assuste quando a palavra transborda da célula; tranquilize, "ela está só espreguiçando, depois a gente arruma". E há quem digite e esqueça de confirmar; ensine que só vale depois de apertar Tab ou Enter. Nunca digite pela criança: aponte a tecla e deixe ela apertar.`,
  exercicios: [
    {
      titulo: `O que mora em cada gaveta?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda de frente para o cartaz com a tabela vazia. Aponte o título de cada coluna (Nome, Cor, Patas) e pergunte: "O que vai morar nesta gaveta aqui?". Depois fale palavras soltas (azul, gato, três, vermelho) e a turma diz em qual coluna cada uma mora. Use a ideia das gavetinhas e celebre cada acerto.`,
      atividade: `Olhe o cartaz da tabela. Quando o professor apontar uma coluna e disser o título, fale alto o que mora ali: na coluna Nome moram os nomes, na coluna Cor moram as cores, na coluna Patas moram os números. Depois, quando o professor falar uma palavra, aponte para a coluna certa onde ela deve morar.`,
      gabarito: `Nome guarda nomes; Cor guarda cores; Patas guarda números. A criança acerta se coloca cada palavra na coluna do mesmo tipo: "gato" vai em Nome, "azul" vai em Cor, "três" vai em Patas, mesmo usando as próprias palavras.`,
    },
    {
      titulo: `Escrevendo os títulos da tabela`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Com cada criança na planilha em A1, guie em coro a linha de títulos. Conte os passos juntos: clicar na A1, digitar "Nome", apertar Tab para ir a B1, digitar "Cor", Tab para C1, digitar "Patas". Mostre no telão como o cursor anda para o lado a cada Tab. Passe de mesa em mesa ajudando quem apertou Enter sem querer e desceu de linha.`,
      atividade: `1. Clique na célula A1, lá no cantinho de cima. 2. Digite a palavra Nome e aperte Tab para andar para o lado. 3. Digite Cor e aperte Tab de novo. 4. Digite Patas. Pronto, sua tabela já tem as plaquinhas das gavetas!`,
      gabarito: `A linha de cima fica com Nome em A1, Cor em B1 e Patas em C1, cada título na sua célula. Acertou quem escreve os três títulos um ao lado do outro, usando Tab para andar, sem descer de linha.`,
    },
    {
      titulo: `Montando a tabela no papel`,
      tipo: `Desenho`,
      tempo: `10 min`,
      guiaProfessor: `Dê a folha com a grade de quadradinhos e lápis de cor. Peça que escrevam (ou copiem do cartaz) os três títulos na linha de cima e desenhem ou escrevam dois bichinhos nas linhas de baixo, um por linha. Quem ainda não escreve pode desenhar o bichinho e a cor com lápis. Desenhe junto no quadro como exemplo e passe perguntando "qual gaveta é essa?".`,
      atividade: `Na sua folha de quadradinhos: 1. Na linha de cima, escreva os títulos Nome, Cor e Patas, um em cada quadrado. 2. Nas linhas de baixo, coloque dois bichinhos: escreva o nome, pinte ou escreva a cor e desenhe quantas patas ele tem. Capriche para cada coisa ficar embaixo do título certo!`,
      gabarito: `A folha tem três títulos na linha de cima e dois bichinhos nas linhas de baixo, com cada informação embaixo da coluna correta. Acertou se o nome está na coluna Nome, a cor na coluna Cor e as patas na coluna Patas, mesmo com letra ou desenho tortinhos.`,
    },
    {
      titulo: `Tab anda, Enter desce`,
      tipo: `Jogo`,
      tempo: `12 min`,
      guiaProfessor: `Brincadeira de robô na sala. Marque no chão (ou com a turma em pé) uma grade imaginária. Você é o comandante: quando gritar "TAB!" todos dão um passo para o lado direito; quando gritar "ENTER!" todos descem uma fileira (um passo para trás). Acelere para virar diversão. Depois leve para a planilha: você dita "Tab... Tab... Enter" e a turma vê o cursor obedecer no telão.`,
      atividade: `Fique em pé na grade. Quando o professor gritar "TAB!", dê um passo para o lado direito (igual quando a tabela anda para o lado). Quando gritar "ENTER!", dê um passo para trás (igual quando a tabela desce uma linha). Não confunda: Tab é para o lado, Enter é para baixo!`,
      gabarito: `Tab = andar para o lado (direita); Enter = descer uma linha. Acertou quem se move para o lado no Tab e para baixo no Enter sem trocar as direções, mostrando que entendeu como o cursor caminha na tabela.`,
    },
    {
      titulo: `Minha tabelinha completa`,
      tipo: `Desafio`,
      tempo: `13 min`,
      guiaProfessor: `Desafio final no computador. Cada criança deve completar a tabela com a linha de títulos (Nome, Cor, Patas) e pelo menos dois bichinhos nas linhas de baixo, preenchidos sozinha. Ajude quem travar apontando a tecla certa (Tab para o lado, Enter para descer) sem digitar pela criança. Confira se cada dado está embaixo do título certo. Quem montar tudo organizado mostra para a turma e ganha adesivo.`,
      atividade: `Monte sua tabelinha inteira: 1. Na linha de cima, escreva os títulos Nome, Cor e Patas usando Tab para andar. 2. Aperte Enter para voltar lá embaixo na coluna A. 3. Digite o primeiro bichinho: nome, Tab, cor, Tab, número de patas, Enter. 4. Faça mais um bichinho na linha de baixo do mesmo jeito. Confira: cada coisa está embaixo do título certo?`,
      gabarito: `A tabela fica com três títulos na linha de cima e pelo menos duas linhas de dados, cada informação na coluna do tipo certo. Acertou quem monta o cabeçalho e os dados alinhados, usando Tab e Enter corretamente; o nível completo é fazer tudo sozinho e explicar para a turma qual coluna guarda cada tipo de coisa.`,
    },
  ],
};
