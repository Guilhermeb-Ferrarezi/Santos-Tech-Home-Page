import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "UI pronta: exportar e apresentar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar a interface do jogo, exportar cada tela do Canva em PNG no formato certo para o Roblox, organizar os arquivos em pastas e apresentar a UI pronta para a turma, encerrando a Etapa 1 de 5 do projeto.`,
  descricao: `Esta é a aula que fecha o mês. Durante quatro semanas, cada aluno desenhou a interface do seu jogo no Canva: o menu inicial, os botões, o HUD com as informações da tela de jogo e os ícones com a identidade visual. Agora chegou a hora de transformar esses desenhos em arquivos de verdade, prontos para entrar dentro do Roblox nas próximas etapas do projeto.

O foco prático da aula é a exportação. Exportar é pegar o que está dentro do Canva e gerar um arquivo de imagem para o computador. Para a UI de um jogo usamos o formato PNG, porque ele aceita fundo transparente, o que é essencial para botões e ícones se encaixarem por cima do cenário sem aquele quadrado branco em volta. Os alunos vão aprender onde fica o botão de exportar, qual tipo escolher, quando marcar a transparência e como baixar página por página ou tudo de uma vez.

Depois de exportar, vem a organização. Um projeto bem cuidado tem uma pasta com nomes claros: cada PNG nomeado pelo que ele é (por exemplo, botao-jogar, hud-vida, icone-moeda), em vez de nomes soltos como imagem1, imagem2. Isso parece detalhe, mas é o que vai poupar tempo lá na frente, quando o aluno precisar arrastar cada arquivo para o Roblox Studio. Organizar é parte do trabalho de quem cria tecnologia de verdade.

Por fim, a aula é também uma celebração. Cada aluno apresenta sua UI pronta no projetor, conta as escolhas que fez e recebe um feedback gentil dos colegas. Esse momento fecha a Etapa 1 de 5 do projeto do jogo com a interface concluída e dá orgulho do que foi construído. Nas próximas etapas, essa mesma arte vai ganhar vida dentro do Roblox.`,
  materiais: [
    `Computadores com acesso ao Canva (login feito antes da aula), um por aluno`,
    `Conta no Canva já criada, com os projetos da UI das aulas anteriores salvos`,
    `Projetor ou TV para o professor demonstrar a exportação e para os alunos apresentarem`,
    `Pasta de exemplo já organizada, com PNGs nomeados, para servir de modelo na tela`,
    `Pen drive ou pasta na nuvem (Google Drive) para guardar os arquivos finais de cada aluno`,
    `Folha simples de checklist da entrega (telas, formato PNG, nomes, pasta) impressa para cada aluno`,
    `Slide ou cartaz com a frase de feedback gentil: "Eu gostei de... / Eu sugiro..."`,
  ],
  conceitosChave: [
    `Exportar — gerar um arquivo no computador a partir do que foi criado dentro do Canva, para usar fora dele.`,
    `PNG — formato de imagem que aceita fundo transparente, ideal para botões e ícones de jogo.`,
    `Transparência — a ausência de fundo na imagem, que deixa o cenário do jogo aparecer por trás do botão ou ícone.`,
    `Resolução — a quantidade de pixels da imagem; quanto maior, mais nítida ela fica na tela.`,
    `Nome de arquivo — o título que damos a cada PNG, que deve dizer o que ele é (por exemplo, botao-jogar).`,
    `Pasta do projeto — o lugar único onde guardamos todos os arquivos da UI, em ordem e fáceis de achar.`,
    `Entregável — o resultado final combinado para o mês; aqui, a UI completa do jogo pronta e exportada.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Canva para dar esta aula. Toda a exportação acontece em um único botão. No canto superior direito do Canva fica o botão "Compartilhar" (Share). Ao clicar nele, abre um menu; escolha "Baixar" (Download). Aí aparece a opção "Tipo de arquivo" (File type): selecione "PNG". Logo abaixo surge a caixa "Fundo transparente" (Transparent background) e a opção de escolher quais páginas baixar. É só isso que precisamos hoje. Lembre que cada página do projeto no Canva é uma tela da UI (menu, botão, HUD, ícones). O PNG é o formato certo porque guarda a transparência; o JPG, não. Tenha sua própria pasta de exemplo já pronta e nomeada para mostrar na tela.

## Passo a passo da aula

Aquecimento (10 min): Retome o mês com a turma. Pergunte: "O que é a UI de um jogo?" e "Quais telas vocês criaram?". Mostre rapidamente, no projetor, a UI de exemplo pronta. Explique que hoje vamos transformar os desenhos em arquivos PNG e apresentar tudo. Entregue o checklist da entrega.

Conteúdo novo guiado (15 min): No projetor, abra um projeto de UI no Canva. Clique em "Compartilhar" (canto superior direito) e depois em "Baixar". Em "Tipo de arquivo", escolha "PNG". Marque a caixa "Fundo transparente" e mostre a diferença: com a caixa marcada, o botão não tem quadrado branco em volta. Mostre como escolher páginas: clique em "Selecionar páginas" para baixar uma de cada vez (melhor para nomear) ou todas juntas. Clique em "Baixar" e mostre onde o arquivo cai (pasta Downloads). Por fim, crie uma pasta nova, renomeie um PNG para um nome claro como "botao-jogar" e explique o porquê.

Mão na massa (25 min): Cada aluno revisa as telas, exporta cada uma em PNG com fundo transparente, cria uma pasta do projeto e nomeia cada arquivo pelo que ele é. Use o checklist para conferir. Circule pela sala ajudando quem esqueceu a transparência ou misturou os nomes. Quem terminar, salva a pasta no Drive ou pen drive.

Desafio + compartilhar (10 min): Cada aluno mostra a UI pronta no projetor em 30 segundos e diz uma escolha que fez. Dois colegas dão feedback usando "Eu gostei de... / Eu sugiro...". Encerre celebrando o fim da Etapa 1 de 5.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que exportar é como "tirar uma foto" do desenho para levar para fora do Canva. Explique a transparência assim: "É como um adesivo recortado, sem o papel branco em volta; ele cola por cima de qualquer fundo." Mostre na tela o antes e o depois de marcar a caixa, porque ver convence mais do que falar. Sobre os nomes dos arquivos, brinque: "imagem1, imagem2 é como guardar a roupa sem etiqueta; depois ninguém acha a meia certa." Fale devagar os nomes dos botões enquanto aponta, e repita o caminho "Compartilhar, depois Baixar, depois PNG, depois transparente".

## Erros comuns e como ajudar

O erro mais comum é exportar em JPG e perder a transparência: mostre que o tipo precisa ser PNG. Outro é esquecer de marcar "Fundo transparente" e o botão sair com quadrado branco; peça para refazer com a caixa marcada. Muitos baixam todas as páginas juntas e depois não sabem qual é qual; oriente a baixar uma página por vez e nomear na hora. Alguns deixam os arquivos espalhados na pasta Downloads; mostre como criar uma pasta só do projeto e mover tudo para lá. Há quem nomeie tudo igual ou com nomes soltos; reforce nomes que dizem o que a imagem é. Por fim, alguém pode esquecer de salvar a pasta no Drive ou pen drive; lembre que sem isso o arquivo não chega ao Roblox nas próximas etapas.`,
  exercicios: [
    {
      titulo: `Primeira exportação em PNG`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe o caminho "Compartilhar, Baixar, PNG". Confira se cada aluno encontrou o botão no canto superior direito e escolheu o tipo PNG.`,
      atividade: `Abra o projeto da sua UI no Canva, clique em "Compartilhar", depois em "Baixar", escolha "PNG" e baixe a tela do menu inicial.`,
      gabarito: `O aluno tem na pasta Downloads um arquivo PNG da tela do menu inicial, baixado pelo caminho correto. O tipo do arquivo é PNG (e não JPG).`,
    },
    {
      titulo: `Transparência no lugar certo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre o antes e o depois de marcar a caixa "Fundo transparente". Verifique nos botões e ícones se o fundo saiu sem quadrado branco.`,
      atividade: `Exporte um botão e um ícone do seu jogo em PNG com a caixa "Fundo transparente" marcada. Compare com a versão sem a caixa marcada.`,
      gabarito: `O botão e o ícone exportados não têm fundo branco em volta; o fundo está transparente. O aluno sabe dizer que a caixa "Fundo transparente" precisa estar marcada.`,
    },
    {
      titulo: `Organizando a pasta do projeto`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Ensine a criar uma pasta nova e renomear arquivos com nomes claros. Reforce nomes que dizem o que a imagem é, sem espaços ou acentos.`,
      atividade: `Crie uma pasta chamada UI-do-meu-jogo, mova todos os PNGs para dentro e renomeie cada um pelo que ele é (por exemplo, botao-jogar, hud-vida, icone-moeda).`,
      gabarito: `Existe uma pasta única com todos os PNGs dentro, cada arquivo com nome claro que diz o que ele é. Não há nomes soltos como imagem1 nem arquivos espalhados fora da pasta.`,
    },
    {
      titulo: `Conferência em dupla com checklist`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas e entregue o checklist. Oriente cada aluno a conferir a entrega do colega com gentileza, marcando o que está pronto e o que falta.`,
      atividade: `Troque de lugar com o colega e use o checklist para conferir a entrega dele: todas as telas exportadas, formato PNG, transparência, nomes claros e pasta organizada. Aponte um item que falta.`,
      gabarito: `A dupla preencheu o checklist do colega e identificou pelo menos um ponto a corrigir ou confirmou que a entrega está completa. O aluno consegue explicar o que conferiu.`,
    },
    {
      titulo: `Apresentação da UI pronta`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Conduza as apresentações no projetor, dando 30 segundos a cada aluno. Garanta que o feedback siga a frase "Eu gostei de... / Eu sugiro...". Celebre o fim da Etapa 1 de 5.`,
      atividade: `Apresente sua UI pronta para a turma: mostre as telas exportadas, conte uma escolha visual que você fez e diga onde essa interface vai aparecer dentro do jogo. Receba o feedback de dois colegas.`,
      gabarito: `O aluno apresenta a UI completa em PNG, explica ao menos uma escolha de design e indica onde a interface entra no jogo. Recebe feedback de dois colegas no formato "Eu gostei de... / Eu sugiro...", encerrando a Etapa 1 de 5 com a interface concluída.`,
    },
  ],
};
