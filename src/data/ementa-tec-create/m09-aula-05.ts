import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Pronto pro Jogo: Sprite Sheets",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Organizar as animações em tags e gerar a primeira folha de sprites (sprite sheet) com o Export Sprite Sheet do Aseprite, deixando o material pronto para entrar no Construct 3.`,
  descricao: `Até agora, os alunos criaram movimento dentro do Aseprite: o idle respira, o personagem caminha, a moeda brilha e a explosão acontece em quadros. Tudo isso vive numa linha do tempo cheia de quadros (frames). O problema é que um jogo não lê uma animação do jeito que o Aseprite mostra na tela. O motor de jogo, como o Construct 3, precisa receber as imagens de um jeito organizado. É aí que entra a folha de sprites, ou sprite sheet: uma única imagem grande que junta todos os quadros lado a lado, como um álbum de figurinhas do movimento.

Nesta aula o aluno aprende a separar as animações usando tags. A tag é uma etiqueta colorida que marca um trecho da linha do tempo e dá um nome a ele, por exemplo "idle", "andar" ou "explosao". Sem tags, todos os quadros viram uma mistura só. Com tags, cada animação fica identificada, e o Aseprite consegue exportar tudo organizado de uma vez. Entender essa organização é o que diferencia um arquivo bonito de um arquivo que de fato funciona dentro de um jogo.

O coração da aula é a janela Export Sprite Sheet (Arquivo, depois Export Sprite Sheet). O aluno vai descobrir a diferença entre exportar quadros separados (vários arquivos PNG soltos) e exportar uma folha única (um PNG só, com todos os quadros arrumados numa grade). Para o Construct 3, a folha única é o caminho mais limpo, porque o motor importa a imagem e fatia em quadros automaticamente. Ao final, cada aluno gera o seu primeiro sprite sheet de verdade e guarda o arquivo na pasta do projeto, pronto para a próxima aula, quando esse material entrará no Construct 3.

Esta é uma aula de ponte: ela liga o mundo da arte de pixel ao mundo do jogo jogável. O foco não é desenhar mais, e sim preparar e empacotar o que já existe com capricho e organização.`,
  materiais: [
    `Computadores com Aseprite instalado e aberto, um por aluno`,
    `Projetor ou tela grande para o professor demonstrar cada clique`,
    `Arquivo de exemplo .aseprite com pelo menos duas animações já prontas (idle e caminhada) para quem não terminou as aulas anteriores`,
    `Uma pasta de projeto já criada no computador para salvar as folhas de sprites exportadas`,
    `Folha impressa de apoio com o passo a passo do Export Sprite Sheet e os atalhos principais`,
    `Bloco de notas ou caderno para o aluno anotar os nomes das tags que criar`,
  ],
  conceitosChave: [
    `Sprite sheet (folha de sprites) — uma única imagem que reúne todos os quadros de uma animação lado a lado, em formato de grade.`,
    `Frame (quadro) — cada desenho individual que, em sequência, forma o movimento da animação.`,
    `Tag (etiqueta) — uma marcação colorida e nomeada que delimita um trecho da linha do tempo e separa uma animação da outra.`,
    `Export Sprite Sheet — a janela do Aseprite que transforma os quadros e tags num arquivo final pronto para o jogo.`,
    `Quadros separados — modo de exportação que gera vários arquivos PNG soltos, um por quadro.`,
    `Folha única — modo de exportação que gera um só arquivo PNG com todos os quadros arrumados numa grade.`,
    `Padding (espaçamento) — pequena borda extra entre os quadros na folha, usada para evitar que cores de um quadro vazem para o outro no jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Antes da aula, abra o Aseprite e crie ou abra um arquivo com pelo menos duas animações curtas na linha do tempo, por exemplo um idle de quatro quadros e uma caminhada de seis quadros. A linha do tempo (Timeline) fica embaixo da área de desenho; se não estiver visível, aperte a tecla Tab para mostrá-la. Você não precisa ser especialista: precisa apenas saber criar uma tag e abrir a janela Export Sprite Sheet. Faça o caminho completo uma vez sozinho antes da turma, exportando uma folha de teste, para não travar na frente dos alunos.

## Passo a passo da aula

Aquecimento (10 min): peça que cada aluno abra o próprio arquivo das aulas anteriores. Pergunte: "como será que o jogo recebe a nossa animação?". Mostre no projetor uma sprite sheet pronta e diga que hoje vamos transformar os quadros nessa imagem única. Quem não terminou pega o arquivo de exemplo.

Conteúdo novo guiado (15 min): demonstre as tags. Na Timeline, clique no primeiro quadro do idle, segure Shift e clique no último para selecionar o trecho. Clique com o botão direito sobre a seleção e escolha New Tag. Dê o nome "idle" no campo Name e confirme. Repita para a caminhada, criando a tag "andar". Mostre que cada tag aparece como uma barra colorida acima dos quadros. Em seguida, abra Arquivo (File), depois Export Sprite Sheet. Explique os campos principais: em Sheet Type escolha Packed ou By Rows; em Layout, marque a opção Split Tags (Separar Tags) para cada animação ficar identificada. Mostre a diferença prática: em Output, ative Output File para gerar a folha única; já o Export do menu Arquivo com "Frames" geraria arquivos soltos. Aponte o campo Border Padding e Shape Padding e explique o espaçamento.

Mão na massa (25 min): cada aluno cria as próprias tags com nomes claros e em minúsculas, sem espaços nem acentos, por exemplo "idle", "andar", "moeda". Depois abre Export Sprite Sheet, marca Split Tags, define um padding de 1 ou 2 pixels e clica em Export na janela. Salve o PNG na pasta do projeto com um nome simples. Circule pela sala conferindo se a grade saiu correta e se nenhum quadro ficou cortado.

Desafio e compartilhar (10 min): peça que cada aluno abra a folha exportada num visualizador de imagens e mostre ao colega do lado, contando quantos quadros e quantas animações estão ali. Pergunte quem conseguiu separar duas animações na mesma folha.

## Como explicar de forma clara

Use a imagem do álbum de figurinhas: a sprite sheet é uma página onde cada figurinha é um quadro do movimento, e o jogo "cola" essas figurinhas em ordem para criar a ação. Compare a tag a uma etiqueta de caixa de brinquedos: sem etiqueta você não sabe o que tem dentro; com etiqueta, "idle" e "andar" ficam separados e fáceis de achar. Reforce que exportar não é desenhar de novo, é empacotar com capricho o que já está pronto.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de marcar Split Tags, então as animações saem misturadas; mande reabrir a janela e ativar a opção. Outro é dar nome de tag com acento, espaço ou letra maiúscula, o que atrapalha no Construct 3; oriente nomes curtos e minúsculos. Muitos alunos selecionam o trecho errado na Timeline e a tag pega quadros de outra animação; ensine a conferir o número do primeiro e do último quadro. Há quem exporte quadros separados sem querer e gere dezenas de arquivos; mostre que a folha única vem da janela Export Sprite Sheet com Output File ligado. Por fim, alguns esquecem onde salvaram o PNG; combine uma pasta única do projeto para todos.`,
  exercicios: [
    {
      titulo: `Etiquetando o movimento`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno seleciona o trecho certo na Timeline antes de criar a tag. Lembre que se usa Shift para marcar do primeiro ao último quadro e botão direito para New Tag.`,
      atividade: `No seu arquivo, crie uma tag chamada "idle" para os quadros da animação parada e outra chamada "andar" para a caminhada. Confira se cada barra colorida cobre só os quadros certos.`,
      gabarito: `O aluno deve ter duas barras de tag visíveis acima da linha do tempo, uma nomeada "idle" e outra "andar", cada uma cobrindo exatamente os quadros da sua animação, sem invadir os quadros da outra.`,
    },
    {
      titulo: `Solta ou junta?`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a discussão comparando os dois modos. Mostre no projetor um exemplo de vários PNG soltos e um exemplo de folha única, e deixe os alunos opinarem antes de você concluir.`,
      atividade: `Em roda, respondam juntos: qual a diferença entre exportar quadros separados e exportar uma folha única? Qual dos dois é melhor para levar a animação ao Construct 3 e por quê?`,
      gabarito: `Quadros separados geram vários arquivos PNG soltos, um por quadro; a folha única gera um só PNG com todos os quadros numa grade. Para o Construct 3, a folha única é melhor porque o motor importa uma imagem só e a fatia em quadros automaticamente, mantendo tudo organizado.`,
    },
    {
      titulo: `Minha primeira folha de sprites`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe a janela Export Sprite Sheet de cada aluno. Confira se Split Tags está marcado, se há um padding de 1 ou 2 pixels e se o arquivo foi salvo na pasta do projeto.`,
      atividade: `Abra Arquivo, depois Export Sprite Sheet. Marque Split Tags, defina um espaçamento de 1 ou 2 pixels e exporte uma folha única em PNG. Salve na pasta do projeto com um nome simples, como "personagem-sheet".`,
      gabarito: `O aluno entrega um único arquivo PNG na pasta do projeto, contendo todos os quadros das duas animações numa grade, com as tags separadas e um pequeno espaçamento entre os quadros. O nome do arquivo é simples, sem acentos nem espaços.`,
    },
    {
      titulo: `Caça ao quadro`,
      tipo: `Em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira para olhar a folha do colega. Estimule a contagem cuidadosa e a leitura dos nomes das tags.`,
      atividade: `Em dupla, abram a folha de sprites um do outro num visualizador de imagens. Contem quantos quadros tem cada animação e digam quantas animações diferentes estão na folha. Anotem os números.`,
      gabarito: `Cada dupla relata corretamente o número de quadros por animação e o total de animações presentes na folha. Por exemplo: idle com 4 quadros e andar com 6 quadros, totalizando 2 animações na mesma folha.`,
    },
    {
      titulo: `Pacote pronto pro jogo`,
      tipo: `Desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Desafio para quem terminou rápido. Oriente nomes de tag curtos e em minúsculos e confira se a terceira animação foi mesmo incluída na exportação com Split Tags ativo.`,
      atividade: `Acrescente uma terceira animação ao arquivo, por exemplo "moeda" ou "explosao", crie a tag dela e gere uma nova folha de sprites com as três animações separadas por Split Tags. Garanta nomes curtos, em minúsculas e sem acento.`,
      gabarito: `O aluno entrega uma nova folha PNG contendo três animações identificadas por tags com nomes curtos e em minúsculas, sem acentos nem espaços. As três aparecem separadas na grade graças ao Split Tags, e o arquivo está salvo na pasta do projeto, pronto para o Construct 3.`,
    },
  ],
};
