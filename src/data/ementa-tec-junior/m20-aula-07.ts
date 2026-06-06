import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Juntando a coleção de itens 3D",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir todos os itens 3D que as crianças modelaram, pintaram e acabaram em um único cenário do Maya, conferindo cores, tamanhos e detalhes para a coleção ficar completa.`,
  descricao: `Esta aula é o momento de juntar tudo! Durante o mês, cada criança modelou vários itens para o jogo: pode ter feito uma moeda, uma chave, uma poção, uma estrela, um baú. Até agora, esses itens viveram em arquivos separados. Hoje vamos abrir um cenário novo no Maya e trazer todas as peças para dentro dele, lado a lado, como quem arruma os brinquedos numa prateleira só.

Quando os itens ficam juntos, a gente enxerga a coleção de verdade. É aí que percebemos coisas importantes: a moeda ficou maior que o baú? A poção está sem cor? A estrela ficou torta? Reunir as peças é a melhor forma de revisar o trabalho do mês inteiro, porque os erros aparecem na hora quando uma coisa está perto da outra.

O professor vai ensinar duas habilidades centrais: importar arquivos de Maya para dentro de uma cena (usar o menu File e a opção Import) e organizar os objetos no espaço usando a ferramenta Move. Não é uma aula de modelar coisas novas; é uma aula de organizar, comparar e caprichar. Pense nela como arrumar uma vitrine de loja: cada item precisa estar visível, na cor certa e no tamanho certo.

Ao final, cada aluno terá um único arquivo do Maya com toda a sua coleção de itens alinhada e conferida. Esse arquivo é o quase-pronto da entrega do mês. Na próxima aula (a Aula 8), essa coleção vira uma galeria para mostrar aos colegas. Por isso hoje o foco é deixar tudo reunido, limpo e organizado.`,
  materiais: [
    `Computadores com o Maya aberto, um para cada criança`,
    `Os arquivos dos itens 3D que cada aluno modelou nas aulas anteriores (moeda, chave, poção, baú etc.), salvos e localizáveis`,
    `Projetor ligado no computador do professor para demonstrar cada passo`,
    `Um arquivo de exemplo já pronto com 3 ou 4 itens reunidos e organizados, para mostrar o resultado esperado`,
    `Uma folha impressa simples (checklist) com três perguntas: tem cor? está do tamanho certo? está organizado?`,
    `Mouse com rodinha em cada computador (ajuda muito a girar e dar zoom na cena)`,
  ],
  conceitosChave: [
    `Importar — trazer um arquivo de fora para dentro da cena que você está montando, como colar uma figurinha no álbum.`,
    `Cena — o espaço 3D do Maya onde os objetos ficam; é como a mesa onde você arruma todos os brinquedos.`,
    `Coleção — o conjunto de todos os itens juntos, formando um grupo que combina entre si.`,
    `Outliner — a listinha do Maya que mostra o nome de cada objeto da cena, como uma lista de chamada das peças.`,
    `Mover (Move) — a ferramenta com setas coloridas que empurra um objeto para outro lugar sem mudar o formato dele.`,
    `Conferir — olhar com atenção para ver se está tudo certo: cor, tamanho e organização.`,
    `Alinhar — deixar os itens em fila, organizados, todos na mesma altura, como soldadinhos em ordem.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não vai modelar nada novo. Vai juntar, em um único arquivo do Maya, todos os itens que as crianças criaram no mês. A operação principal chama-se Import. Você abre uma cena nova e vai puxando, um a um, os arquivos salvos das peças. Antes da aula, confirme onde cada criança salvou seus itens (de preferência todos numa pasta com o nome dela). Se algum arquivo estiver perdido, ache antes para não travar a turma. Faça você mesmo o exercício em casa: importe 3 ou 4 peças, mova com a ferramenta Move e salve. Assim você domina o caminho dos cliques antes de ensinar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Pergunte quais itens cada um fez no mês. Liste no quadro: moeda, chave, poção, baú, estrela. Mostre no projetor o arquivo de exemplo já pronto, com tudo reunido e organizado, e diga: é isso que vamos montar hoje, cada um com a sua coleção.

Conteúdo novo guiado (15 min): No seu computador, crie uma cena nova em File, New Scene. Agora ensine a importar: clique em File e depois em Import (não em Open!). Na janelinha que abre, navegue até a pasta dos itens, escolha o primeiro arquivo e clique no botão Import lá embaixo. A peça aparece na cena. Repita com a segunda peça. Mostre o Outliner (menu Windows, Outliner) e aponte: cada item aparece na lista com seu nome. Selecione uma peça, aperte a tecla W para ativar a ferramenta Move e arraste pelas setas coloridas para afastar uma da outra. Use a rodinha do mouse para dar zoom e o Alt mais botão do meio para se mover pela cena.

Mão na massa (25 min): Cada criança cria uma cena nova e importa todas as suas peças, uma por uma, usando File, Import. Circule pela sala. Ajude a achar arquivos e a clicar em Import (e não em Open). Depois que todas as peças estiverem na cena, peça que usem o Move (tecla W) para alinhar os itens lado a lado, como numa prateleira. Lembre de salvar: File, Save Scene As, com um nome claro como minha-colecao.

Desafio e compartilhar (10 min): Entregue o checklist de três perguntas (tem cor? tamanho certo? organizado?). Cada criança confere a própria coleção e ajusta o que precisar. No fim, dois ou três voluntários giram a cena no projetor e mostram a coleção para a turma.

## Como explicar para crianças

Use a ideia de arrumar a prateleira: hoje a gente vai pegar todos os brinquedos que fizemos e colocar numa estante só, em fila bonitinha. Para a palavra Import, diga que é como colar figurinhas no álbum: cada item vem de um envelope (arquivo) diferente e a gente cola todos na mesma página (a cena). Para o Move, fale que as setas coloridas são empurradores: vermelha empurra para um lado, verde para cima, azul para frente. Reforce que mover não estraga a peça, só muda o lugar dela.

## Erros comuns e como ajudar

O erro mais frequente é clicar em Open em vez de Import: o Open apaga o que já está na cena e abre só o novo arquivo. Mostre a diferença com calma e reforce sempre Import. Outro erro é importar a mesma peça duas vezes; olhe o Outliner juntos para conferir os nomes repetidos e apague a cópia com a tecla Delete. Algumas crianças empilham tudo no mesmo ponto e acham que sumiu; ensine a dar zoom out com a rodinha e a usar o Move para separar. Por fim, muitos esquecem de salvar: faça uma pausa no meio da mão na massa e diga em voz alta agora todo mundo salva com File, Save Scene As.`,
  exercicios: [
    {
      titulo: `Caça aos meus itens`,
      tipo: `Aquecimento / organização`,
      tempo: `5 minutos`,
      guiaProfessor: `Antes de importar, ajude cada criança a achar e listar os arquivos que ela fez no mês. É uma checagem rápida para ninguém ficar travado depois.`,
      atividade: `Liste no papel ou conte nos dedos quais itens 3D você fez este mês. Abra a pasta no computador e confira se cada arquivo está lá.`,
      gabarito: `A criança deve nomear seus itens (por exemplo: moeda, chave, poção, baú) e confirmar que cada um tem um arquivo salvo na pasta. Se faltar algum, o professor ajuda a localizar antes de seguir.`,
    },
    {
      titulo: `Importar a primeira peça`,
      tipo: `Prática guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Faça junto, passo a passo, no projetor. Reforce: clicar em File, depois Import, e nunca em Open. Espere todos concluírem antes de avançar.`,
      atividade: `Crie uma cena nova (File, New Scene). Clique em File, depois Import, ache a sua primeira peça e clique no botão Import. Veja a peça aparecer na cena.`,
      gabarito: `O aluno cria uma cena vazia e traz uma única peça para dentro dela usando File, Import. A peça aparece na cena e seu nome surge no Outliner. Não pode ter usado Open.`,
    },
    {
      titulo: `Trazendo a coleção inteira`,
      tipo: `Mão na massa`,
      tempo: `12 minutos`,
      guiaProfessor: `Circule pela sala. Confira no Outliner se cada peça entrou uma só vez. Ajude quem importou repetido a apagar a cópia com Delete.`,
      atividade: `Importe, uma por uma, todas as suas peças do mês para a mesma cena, sempre por File, Import. Abra o Outliner (Windows, Outliner) e confira se todos os nomes aparecem na lista.`,
      gabarito: `Todos os itens do aluno estão na mesma cena, cada um aparecendo uma única vez no Outliner. Nenhuma peça está duplicada e nenhuma foi esquecida na pasta.`,
    },
    {
      titulo: `Arrumar a prateleira`,
      tipo: `Organização espacial`,
      tempo: `10 minutos`,
      guiaProfessor: `Ensine a tecla W para o Move. Mostre as setas vermelha, verde e azul. Incentive a alinhar os itens lado a lado, na mesma altura, como numa estante.`,
      atividade: `Selecione cada peça, aperte W e use as setas coloridas para alinhar todos os itens lado a lado, formando uma fila organizada. Dê zoom com a rodinha para ver a coleção inteira.`,
      gabarito: `Os itens ficam separados e alinhados em fila, sem ficarem empilhados ou escondidos uns nos outros. Dá para ver a coleção completa na tela com um zoom out.`,
    },
    {
      titulo: `Checklist do colecionador`,
      tipo: `Conferência e ajuste`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue a folha com três perguntas. Acompanhe a autoavaliação e ajude a corrigir o que aparecer (peça sem cor, tamanho muito diferente, item torto). No fim, peça para salvar.`,
      atividade: `Responda no checklist: tem cor? está do tamanho certo? está organizado? Ajuste o que estiver errado e salve a cena em File, Save Scene As, com um nome claro como minha-colecao.`,
      gabarito: `As três perguntas são respondidas com sim ou são corrigidas na hora: cada peça tem cor, os tamanhos combinam entre si e os itens estão organizados. O arquivo final é salvo com um nome reconhecível.`,
    },
  ],
};
