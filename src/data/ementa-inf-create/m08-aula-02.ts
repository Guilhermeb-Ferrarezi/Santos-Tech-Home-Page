import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Formatando seu Primeiro Texto",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Formatar um documento completo no Google Docs usando estilos de título e subtítulo, listas com marcadores e números, imagens e links, e renomear o arquivo com organização.`,
  descricao: `Na aula passada os alunos conheceram o Google Docs e digitaram seu primeiro texto na nuvem. Hoje o documento ganha vida: deixa de ser um bloco de palavras solto e vira uma página bem organizada, com título grande, subtítulos, listas, imagens e links. Formatar não é "enfeitar" por enfeitar; é deixar o texto fácil de ler e de entender, do mesmo jeito que um site bom ou uma revista guiam o olho do leitor.

O coração da aula são os estilos. Em vez de só aumentar a fonte na mão, o aluno aprende a aplicar o estilo "Título 1" no nome do trabalho e "Título 2" nos pedaços menores. O ganho é enorme: o Google Docs entende a hierarquia do texto e ainda monta um índice automático. Esse é o pulo do gato que separa um documento amador de um documento profissional, e os alunos adoram ver a mágica do sumário aparecendo sozinho.

Depois vêm as listas. Marcadores (as bolinhas) servem para itens sem ordem, como uma lista de materiais; números servem quando a ordem importa, como o passo a passo de uma receita. Saber escolher entre os dois é um sinal de organização que vai acompanhar o aluno em todos os trabalhos da escola. É um conceito simples, mas que muda a cara de qualquer texto.

Para fechar, o documento recebe imagens e links. Inserir uma foto da internet ou do Google Drive ilustra a ideia; transformar uma palavra em link leva o leitor direto a uma página. E, como bom hábito de quem trabalha na nuvem, o aluno renomeia o arquivo com um nome claro, para nunca mais procurar um "Documento sem título" perdido no meio de dezenas de outros.`,
  materiais: [
    `Computadores (um por aluno) com o Google Chrome aberto e o Google Docs (docs.google.com) carregado`,
    `Conta Google (e-mail e senha) de cada aluno, já com login feito`,
    `Projetor ou TV para o professor mostrar a tela do Google Docs ao vivo`,
    `Documento de exemplo já formatado, chamado "Receita de Brigadeiro - Exemplo", para o professor mostrar o resultado final`,
    `Texto de apoio sem formatação (um parágrafo corrido) pronto para colar, caso algum aluno digite devagar`,
    `Acesso à internet estável, necessário para o Docs salvar na nuvem e para buscar imagens`,
    `Folha impressa com o mapa da barra de ferramentas (estilos, marcadores, números, inserir imagem, inserir link)`,
  ],
  conceitosChave: [
    `Estilo de texto — formatação pronta e nomeada (Título 1, Título 2, Texto normal) que define tamanho e peso de uma vez só, em vez de mudar a fonte na mão.`,
    `Hierarquia — a "escada" do documento: o título principal fica acima dos subtítulos, que ficam acima do texto comum, mostrando o que é mais importante.`,
    `Lista com marcadores — itens organizados com bolinhas, usada quando a ordem não importa (ex.: ingredientes).`,
    `Lista numerada — itens organizados com números, usada quando a ordem importa (ex.: passo a passo).`,
    `Hiperlink — uma palavra ou frase que, ao ser clicada, leva o leitor a um endereço da internet.`,
    `Inserir imagem — colocar uma foto dentro do documento, vinda do computador, do Drive ou de uma busca na web.`,
    `Renomear — trocar o nome do arquivo (de "Documento sem título" para um nome claro) clicando no nome no canto superior esquerdo.`,
  ],
  treinamento: `## O que o professor precisa saber

Tudo que você vai usar nesta aula está na barra de ferramentas, logo acima da folha branca. Os estilos ficam num menu suspenso que normalmente mostra "Texto normal"; ao clicar nele aparecem "Título 1", "Título 2", "Subtítulo" e outros. Os botões de lista (marcadores e números) ficam mais à direita, perto do centro da barra. Para inserir imagens e links, use o menu "Inserir" no topo (ou os atalhos). Decore só três caminhos: aplicar estilo, criar lista e inserir imagem/link. Lembre-se de que o Google Docs salva sozinho na nuvem; não existe botão "Salvar", e a frase "Todas as alterações foram salvas no Drive" aparece no topo. Para renomear, clique no nome do arquivo no canto superior esquerdo (onde está escrito "Documento sem título") e digite o novo nome. O atalho do link é Ctrl + K, e o de desfazer é Ctrl + Z, seu melhor amigo quando algo der errado.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor dois documentos lado a lado, um sem formatação (texto corrido) e o de exemplo já formatado. Pergunte qual é mais fácil de ler e por quê. Deixe-os perceber sozinhos que título, subtítulos e listas ajudam o olho.

Conteúdo novo guiado (15 min): com todos olhando, selecione a primeira linha, abra o menu de estilos (onde diz "Texto normal") e clique em "Título 1". Selecione um subtítulo e aplique "Título 2". Em seguida, selecione algumas linhas e clique no botão de marcadores; depois troque para o botão de lista numerada. Mostre o menu "Inserir" e "Imagem" e "Pesquisar na web" para achar uma foto. Selecione uma palavra, aperte Ctrl + K, cole um endereço e crie o link. Por fim, clique no nome do arquivo no canto superior esquerdo e renomeie.

Mão na massa (25 min): cada aluno cria um documento com o tema "Minha receita favorita" (ou "Meu jogo favorito"). Deve ter: um Título 1 com o nome, ao menos dois subtítulos em Título 2 (ex.: "Ingredientes" e "Modo de preparo"), uma lista com marcadores e uma lista numerada, uma imagem inserida e um link. Circule pela sala, ajudando a aplicar estilos em vez de só aumentar a fonte. No fim, peça que renomeiem o arquivo.

Desafio e compartilhar (10 min): peça que insiram o menu "Inserir" e "Sumário" para ver o índice nascer sozinho a partir dos títulos. Convide dois ou três alunos a mostrar o documento no projetor e contar qual parte foi mais legal de formatar.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de uma "escada do texto": o Título 1 é o degrau mais alto (o nome do trabalho), o Título 2 é o degrau do meio (as partes) e o texto normal é o chão. Diga que estilo é "uma roupa pronta para o texto vestir de uma vez", melhor do que escolher tamanho e cor peça por peça. Para listas, a regra é simples: "se a ordem importa, use números; se não importa, use bolinhas". O link é "uma porta secreta na palavra: clicou, viajou para outra página". Sempre nomeie o botão exato e mostre no projetor antes de pedir que eles façam.

## Erros comuns e como ajudar

O erro mais comum é aumentar a fonte na mão em vez de aplicar o estilo "Título 1"; mostre que o estilo é que monta o índice depois. Outro é selecionar o texto errado antes de aplicar a formatação: lembre que primeiro se seleciona, depois se clica. Muitos confundem marcadores com números; volte à regra da ordem. Ao inserir imagens, alguns tentam arrastar fotos enormes que estouram a página; ensine a clicar na imagem e puxar os cantinhos azuis para redimensionar. No link, esquecem de selecionar a palavra antes do Ctrl + K e o link fica vazio. E lembre o tempo todo: não há botão salvar, mas conferir a frase "salvo no Drive" no topo dá segurança.`,
  exercicios: [
    {
      titulo: `Detetive da formatação`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Aquecimento para o aluno enxergar o valor da formatação antes de praticar. Projete os dois documentos (sem formato e o de exemplo) e conduza com perguntas curtas, deixando-os descobrirem sozinhos.`,
      atividade: `Olhando os dois documentos no projetor, responda em voz alta: qual é mais fácil de ler? Aponte três coisas que o documento formatado tem e o outro não tem.`,
      gabarito: `O documento formatado é o mais fácil de ler. As três coisas esperadas são: um título grande em destaque (Título 1), subtítulos separando as partes (Título 2) e listas com bolinhas ou números. Respostas válidas também incluem citar a imagem e o link, que organizam e enriquecem o texto.`,
    },
    {
      titulo: `A escada dos títulos`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Primeiro contato com estilos. Reforce o passo "seleciona primeiro, depois clica". Verifique que estão usando o menu de estilos ("Texto normal") e não apenas aumentando a fonte na mão.`,
      atividade: `Em um documento novo, digite o nome de uma receita na primeira linha e aplique o estilo "Título 1". Em seguida, escreva as palavras "Ingredientes" e "Modo de preparo" em linhas separadas e aplique "Título 2" em cada uma.`,
      gabarito: `A primeira linha deve estar com o estilo "Título 1" (fonte grande), e as palavras "Ingredientes" e "Modo de preparo" com o estilo "Título 2" (fonte média). Ao clicar em cada linha, o menu de estilos no canto esquerdo da barra deve mostrar o estilo correto aplicado, e não "Texto normal".`,
    },
    {
      titulo: `Bolinhas ou números?`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Trabalha a escolha entre lista com marcadores e lista numerada. Cobre a regra "ordem importa = números". Mostre os dois botões na barra de ferramentas antes de começarem.`,
      atividade: `Embaixo de "Ingredientes", escreva quatro itens e transforme-os em uma lista com marcadores (bolinhas). Embaixo de "Modo de preparo", escreva três passos e transforme-os em uma lista numerada.`,
      gabarito: `A seção "Ingredientes" deve ter quatro itens com bolinhas (lista com marcadores), pois a ordem não importa. A seção "Modo de preparo" deve ter três itens com números 1, 2 e 3 (lista numerada), pois a ordem dos passos importa. Exemplo: ingredientes (leite condensado, chocolate, manteiga, granulado) com bolinhas; preparo (misturar, cozinhar, enrolar) com números.`,
    },
    {
      titulo: `Imagem e porta secreta`,
      tipo: `Desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Etapa mais técnica: inserir imagem e criar link. Ensine a redimensionar puxando os cantinhos azuis e lembre de selecionar a palavra antes do Ctrl + K. Circule, pois é onde mais aparecem dúvidas.`,
      atividade: `Use o menu "Inserir" e "Imagem" e "Pesquisar na web" para colocar uma foto que combine com a receita, e ajuste o tamanho puxando os cantos. Depois, selecione uma palavra do texto, aperte Ctrl + K e cole um endereço de site para criar um link.`,
      gabarito: `O documento deve ter uma imagem inserida e redimensionada para um tamanho que caiba bem na página (sem estourar as margens). Deve haver pelo menos uma palavra com hiperlink: ela aparece sublinhada e azul, e ao passar o mouse mostra o endereço. Se o link estiver vazio ou na palavra errada, o aluno deve refazer selecionando o texto antes do Ctrl + K.`,
    },
    {
      titulo: `Documento de gente grande`,
      tipo: `Projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Fecha a aula juntando tudo num documento completo e bem nomeado. Mostre o nascimento do sumário a partir dos títulos como recompensa. Confira em cada tela se o arquivo foi renomeado.`,
      atividade: `Finalize sua receita com tudo aprendido: Título 1, dois subtítulos em Título 2, uma lista com marcadores, uma lista numerada, uma imagem e um link. Renomeie o arquivo clicando no nome no canto superior esquerdo e escreva "Receita-SEUNOME". Por fim, use "Inserir" e "Sumário" para ver o índice aparecer.`,
      gabarito: `O documento final deve conter, todos presentes: um Título 1, dois subtítulos em Título 2, uma lista com marcadores, uma lista numerada, uma imagem e um link. O nome do arquivo, no canto superior esquerdo, deve estar no formato "Receita-SEUNOME" (por exemplo, "Receita-Ana"). O sumário inserido deve listar automaticamente o título e os dois subtítulos, provando que os estilos foram aplicados corretamente. O topo deve mostrar a mensagem de salvamento no Drive.`,
    },
  ],
};
