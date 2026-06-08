import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Fatiando o sprite sheet",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Entender o que é um sprite sheet e usar o menu Export Sprite Sheet do Aseprite para exportar o walk cycle e o idle em PNG, conferindo o tamanho dos frames e o nome dos arquivos.`,
  descricao: `Durante o mês inteiro as crianças animaram o herói: fizeram o herói andar (o walk cycle) e o herói paradinho respirando (o idle). Tudo isso vive dentro do Aseprite, quadro a quadro. Mas o jogo, lá no Construct 3, não sabe abrir o arquivo do Aseprite. O jogo precisa de uma imagem só, em PNG, com todos os quadrinhos da animação enfileirados lado a lado. Essa imagem com vários quadrinhos é o sprite sheet (a "folha de figurinhas").

Nesta aula a gente abre a porta mágica que transforma a animação do Aseprite em uma figurinha pronta para o jogo. Essa porta se chama Export Sprite Sheet (Exportar Folha de Sprites), e fica no menu File (Arquivo). Quando a criança clica em exportar, o Aseprite pega cada quadro da animação e cola todos um do lado do outro numa única imagem PNG. É como tirar todas as fotos de um flipbook e colá-las numa fita comprida.

A palavra "fatiar" do título ajuda a explicar: o jogo recebe a fita comprida (o sprite sheet) e depois "corta" ela em pedacinhos iguais, um para cada quadro, para tocar a animação. Para o corte funcionar, todos os quadros precisam ter exatamente o mesmo tamanho. Por isso, nesta aula, a gente confere com carinho o tamanho dos frames (por exemplo, 32 por 32 pixels) e dá um nome bem caprichado para o arquivo, tipo heroi_andando.png e heroi_parado.png, para não confundir na hora de colocar no jogo.

Ao final, cada criança terá dois arquivos PNG salvos numa pasta: o walk cycle e o idle. Esses dois arquivos são o entregável do mês inteiro chegando perto: as animações prontas para virar movimento de verdade dentro do jogo na próxima aula.`,
  materiais: [
    `Computadores com o Aseprite aberto e os arquivos do walk cycle e do idle de cada criança já carregados`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada clique`,
    `Exemplo pronto: um sprite sheet de herói já exportado, mostrado no projetor para as crianças verem o resultado`,
    `Uma pasta criada na área de trabalho de cada computador, chamada "Animacoes do Jogo", para salvar os PNG`,
    `Uma fita de papel comprida com vários desenhos iguais colados em sequência, para explicar o sprite sheet sem a tela`,
    `Etiquetas ou cartões com os nomes corretos dos arquivos (heroi_andando e heroi_parado) para a criança copiar`,
    `Adesivos de "Exportador Mestre" para premiar quem exportar os dois arquivos certinhos`,
  ],
  conceitosChave: [
    `Sprite sheet — uma imagem só com todos os quadrinhos da animação colados lado a lado, igual a uma fita de figurinhas.`,
    `Frame (quadro) — cada desenho da animação; juntando vários quadros em sequência nasce o movimento.`,
    `Exportar — transformar o nosso trabalho do Aseprite em uma imagem PNG que o jogo consegue abrir.`,
    `PNG — o tipo de imagem que o jogo entende e que deixa o fundo do herói transparente, sem quadrado branco.`,
    `Tamanho do frame — a largura e a altura de cada quadrinho, em pixels (por exemplo, 32 por 32); todos precisam ser iguais.`,
    `Nome do arquivo — o "apelido" que damos à figurinha (heroi_andando.png) para achar fácil na hora de usar no jogo.`,
    `Pasta — a gavetinha do computador onde guardamos as nossas figurinhas para não perder.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um mestre do Aseprite para dar esta aula. O caminho é curtinho e sempre o mesmo. Com o arquivo da animação aberto, vá no menu de cima e clique em File (Arquivo) e depois em Export Sprite Sheet (Exportar Folha de Sprites). Vai abrir uma janelinha com algumas abas. Na aba Layout, em "Sheet Type" (Tipo de Folha), escolha "By Rows" (Por Linhas) — assim os quadros ficam enfileirados na horizontal, que é o mais comum para o jogo. Na aba Sprite, deixe marcado "Selected: All frames" (Todos os quadros). Na aba Output (Saída), marque a caixinha "Output File" (Arquivo de Saída), clique no botão ao lado para escolher a pasta "Animacoes do Jogo", digite o nome (heroi_andando) e confira embaixo que o formato é .png. Clique em "Export" (Exportar). Pronto: o PNG aparece na pasta.

Antes da aula, abra o Aseprite no seu computador e faça você mesmo a exportação uma vez, para conhecer os botões. Para conferir o tamanho do frame, olhe no canto inferior da tela do Aseprite, onde aparece o tamanho da imagem (por exemplo "32x32"), ou vá em Sprite e depois "Sprite Size" (Tamanho do Sprite). Deixe os dois arquivos de cada criança (walk cycle e idle) já abertos em abas separadas para não perder tempo procurando.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Sente as crianças e mostre a fita de papel comprida com vários desenhos iguais em sequência. Diga: "Isto é uma folha de figurinhas! O jogo quer receber a nossa animação assim, tudo numa fita só." Relembre o walk cycle e o idle que elas fizeram. Pergunte: "Quantos quadrinhos tem o nosso herói andando?" e deixe contarem na tela.

Conteúdo novo guiado (15 min): No projetor, abra o walk cycle. Clique devagar em File e depois em Export Sprite Sheet, narrando cada passo. Mostre a aba Layout com "By Rows", a aba Sprite com "All frames" e a aba Output, onde você escolhe a pasta, digita "heroi_andando" e confere o ".png". Clique em Export e abra a pasta para mostrar a figurinha pronta. Aponte o tamanho do frame no canto da tela ("olha, cada quadrinho tem 32 por 32").

Mão na massa (25 min): Agora é a vez deles. Cada criança repete os mesmos passos no walk cycle: File, Export Sprite Sheet, conferir as abas, escolher a pasta, nome "heroi_andando", Export. Passe de mesa em mesa. Depois eles trocam para a aba do idle e exportam de novo com o nome "heroi_parado". Peça para abrirem a pasta e verem os dois PNG lado a lado.

Desafio e compartilhar (10 min): Desafie cada um a abrir o próprio PNG (clicando duas vezes) e contar quantos quadrinhos aparecem na fita. Quem exportou os dois arquivos com os nomes certos ganha o adesivo de "Exportador Mestre". Mostre um ou dois sprite sheets no projetor e elogie.

## Como explicar para crianças

Use a analogia do flipbook: "Sabe o caderninho que a gente folheia rápido e o desenho mexe? Cada folha é um quadro. O sprite sheet é como arrancar todas as folhas e colá-las numa fita, lado a lado." Diga que exportar é "mandar a animação para fora do Aseprite, embrulhada como presente para o jogo". Para o nome do arquivo, fale: "O nome é o apelido da figurinha; se a gente chamar tudo de 'sem nome', depois não acha." Para o tamanho igual, mostre quadradinhos de mesmo tamanho: "Se um quadro for grande e o outro pequeno, o herói fica gordo e magro pulando; por isso todos têm o mesmo tamanho."

## Erros comuns e como ajudar

A criança não acha o menu: lembre que Export Sprite Sheet fica dentro de File, não em Sprite. A criança salva sem nome ou com nome repetido: tenha as etiquetas com "heroi_andando" e "heroi_parado" para ela copiar; combine que o de andar e o de parar têm nomes diferentes. O arquivo some: quase sempre foi salvo em outra pasta; ajude a sempre escolher a pasta "Animacoes do Jogo". O fundo fica branco em vez de transparente: confirme que o formato é .png (não .jpg) e que não marcaram fundo de cor. A criança exporta um quadro só: verifique se na aba Sprite está em "All frames" e não em "Current frame" (quadro atual).`,
  exercicios: [
    {
      titulo: `O que é um sprite sheet?`,
      tipo: `Conversa com apoio visual`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre a fita de papel com desenhos iguais em sequência e um sprite sheet no projetor. Pergunte o que as duas coisas têm em comum. Conduza para a ideia de "vários quadros numa imagem só". Aceite respostas com as palavras das crianças.`,
      atividade: `Olhe a fita de figurinhas e a imagem na tela. Conte para a turma: o que é um sprite sheet e por que o jogo precisa dele?`,
      gabarito: `Um sprite sheet é uma imagem só com vários quadros da animação colados lado a lado. O jogo precisa dele porque não abre o arquivo do Aseprite; ele lê a figurinha PNG e corta em quadrinhos para tocar a animação. Exemplo de resposta de criança: "É uma fita com o herói andando, tudo junto numa figura só."`,
    },
    {
      titulo: `Achando a porta mágica (File e Export)`,
      tipo: `Prática no Aseprite`,
      tempo: `8 minutos`,
      guiaProfessor: `Com o walk cycle aberto, peça para a criança achar e clicar em File e depois em Export Sprite Sheet. Não precisa exportar ainda, só abrir a janelinha. Mostre no projetor onde fica o menu File, no canto de cima à esquerda.`,
      atividade: `No Aseprite, clique no menu File lá em cima e depois em Export Sprite Sheet. Quando a janelinha aparecer, levante a mão e mostre para o professor.`,
      gabarito: `A criança abre o menu File e clica em Export Sprite Sheet; a janela de exportação aparece na tela. Acerto = encontrar o caminho certo dentro de File. Erro comum: procurar em Sprite ou em Edit; lembre que fica em File.`,
    },
    {
      titulo: `Conferindo o tamanho dos frames`,
      tipo: `Observação guiada`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde aparece o tamanho da imagem (por exemplo "32x32") no canto inferior do Aseprite ou em Sprite e depois Sprite Size. Peça para a criança ler o número em voz alta e comparar o walk cycle com o idle.`,
      atividade: `Procure o tamanho do seu herói no canto da tela do Aseprite. Leia o número (por exemplo, 32 por 32) e diga se o herói andando e o herói parado têm o mesmo tamanho.`,
      gabarito: `A criança lê o tamanho do frame (ex.: 32x32) e percebe que walk cycle e idle têm o mesmo tamanho. Acerto = saber onde ver o tamanho e notar que precisa ser igual nos dois. Se forem diferentes, avise o professor para ajustar antes de exportar.`,
    },
    {
      titulo: `Exportando o walk cycle em PNG`,
      tipo: `Exportação no Aseprite`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a criança nos passos: File, Export Sprite Sheet, aba Layout em "By Rows", aba Sprite em "All frames", aba Output marcando "Output File", escolher a pasta "Animacoes do Jogo", nome "heroi_andando", formato .png, e clicar em Export. Tenha a etiqueta do nome à mão.`,
      atividade: `Exporte o seu herói andando: em Export Sprite Sheet, confira as abas, escolha a pasta "Animacoes do Jogo", escreva o nome heroi_andando, deixe em .png e clique em Export. Depois abra a pasta e veja a figurinha.`,
      gabarito: `Um arquivo heroi_andando.png salvo na pasta "Animacoes do Jogo", com todos os quadros do walk cycle em fila e fundo transparente. Acerto = nome certo, formato .png e todos os frames na imagem. Erro comum: exportar só um quadro (verificar "All frames") ou salvar em .jpg (deixar fundo branco).`,
    },
    {
      titulo: `Os dois arquivos prontos (andando e parado)`,
      tipo: `Desafio final`,
      tempo: `8 minutos`,
      guiaProfessor: `Agora a criança troca para a aba do idle e repete a exportação, salvando como "heroi_parado" na mesma pasta. No fim, abre a pasta e confere os dois PNG com nomes diferentes. Quem fizer os dois certinhos ganha o adesivo de "Exportador Mestre".`,
      atividade: `Vire um Exportador Mestre: exporte também o herói parado com o nome heroi_parado.png na pasta "Animacoes do Jogo". Depois abra a pasta e mostre os dois arquivos, andando e parado, com nomes diferentes.`,
      gabarito: `Dois arquivos na pasta: heroi_andando.png e heroi_parado.png, ambos PNG, com nomes diferentes e cada um com seus quadros. Acerto = os dois exportados corretamente e nomeados sem repetir. Erro comum: salvar os dois com o mesmo nome (um apaga o outro); usar as etiquetas para garantir nomes distintos.`,
    },
  ],
};
