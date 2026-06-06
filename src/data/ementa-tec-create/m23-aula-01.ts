import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do Maya ao Roblox: Exportar e Importar",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Exportar um modelo 3D do Maya no formato certo (FBX ou OBJ) e importá-lo no Roblox Studio usando o Asset Manager, entendendo como o Roblox lê malhas e texturas.`,
  descricao: `Neste mês os alunos vão montar e publicar o jogo que vêm construindo. A primeira aula é a ponte entre dois mundos que eles já conhecem: o Maya, onde modelaram em 3D, e o Roblox Studio, onde o jogo ganha vida. O grande aprendizado aqui é que cada programa fala uma "língua" de arquivo, e precisamos exportar no formato certo para o outro entender. No Maya, esse formato é o FBX (ou o OBJ, mais simples). No Roblox, a importação acontece pelo Asset Manager.

Um modelo 3D é feito de três coisas que viajam juntas: a malha (a geometria, os vértices e faces que dão a forma), as texturas (as imagens coladas na superfície, como a "pele" do objeto) e a escala (o tamanho). Quando exportamos do Maya, queremos levar a malha junto com as coordenadas de textura (chamadas UVs). O Roblox importa a malha como um objeto chamado MeshPart e, em seguida, aplicamos a imagem da textura nele. Entender essa separação evita a maior frustração da aula: o modelo aparecer cinza, sem cor.

Antes de exportar, há uma etapa de higiene que faz toda a diferença: organizar e nomear os arquivos. Um modelo bem nomeado (por exemplo, "espada_heroi.fbx") e guardado numa pasta clara economiza tempo e evita importar a coisa errada. Esta é uma habilidade profissional de verdade: estúdios de games perdem horas quando os arquivos viram bagunça.

Ao final da aula, cada aluno terá organizado seus arquivos, exportado pelo menos um modelo do Maya e feito a primeira importação no Roblox Studio, vendo a própria criação 3D aparecer dentro do jogo. É um momento muito motivador, porque o trabalho do Maya finalmente "entra" no Roblox.`,
  materiais: [
    `Computadores com Roblox Studio instalado e com Autodesk Maya, um por aluno`,
    `Conta Roblox de cada aluno já logada no Roblox Studio (sessão ativa)`,
    `Projetor ou TV para o professor demonstrar a exportação e a importação passo a passo`,
    `Arquivos de exemplo: um modelo 3D simples já pronto no Maya (por exemplo, uma moeda ou uma caixa) e a imagem de textura correspondente, para alunos que ainda não terminaram o próprio modelo`,
    `Pasta de projeto organizada em cada computador (uma pasta "modelos" e uma pasta "texturas")`,
    `Cópia impressa ou no projetor da lista de checagem de exportação (formato, escala, texturas)`,
  ],
  conceitosChave: [
    `Malha (Mesh) — a geometria do modelo 3D, formada por vértices e faces, que define a forma do objeto.`,
    `Textura — a imagem que é "colada" na superfície da malha para dar cor e detalhe, como a pele do objeto.`,
    `FBX — formato de arquivo que carrega a malha junto com informações extras (UVs, escala) e é o mais usado para levar modelos do Maya ao Roblox.`,
    `OBJ — formato de arquivo 3D mais simples, que guarda a malha e as UVs, mas costuma separar as texturas em outro arquivo.`,
    `MeshPart — o objeto do Roblox que recebe a malha importada; é a "peça" 3D dentro do jogo.`,
    `Asset Manager — o painel do Roblox Studio onde importamos e organizamos modelos, imagens e sons do jogo.`,
    `UV (mapa UV) — as coordenadas que dizem a cada ponto da malha qual pedaço da textura deve aparecer ali.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um especialista em Maya nem em Roblox. Precisa entender uma ideia central: um modelo 3D viaja entre programas como um arquivo, e cada programa entende formatos diferentes. Do Maya para o Roblox, usamos FBX ou OBJ. A malha (a forma) vai no arquivo; a textura (a imagem colorida) muitas vezes precisa ser importada à parte e aplicada depois. Se o modelo aparecer cinza no Roblox, quase sempre é só a textura que ainda não foi aplicada, não é um erro grave. Saber disso já deixa você tranquilo para conduzir a aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min). Pergunte: "Onde está o modelo que vocês fizeram no Maya?". Relembre que o jogo será montado no Roblox e que hoje é o dia de levar a arte 3D para lá. Mostre no projetor um modelo cinza e o mesmo modelo já com textura, e pergunte qual é a diferença. Isso prepara o conceito de malha versus textura.

Conteúdo novo guiado (15 min). Demonstre a exportação no Maya. Selecione o modelo, vá em "File" (Arquivo), depois "Export Selection..." (Exportar Seleção). Em "Files of type" (Tipo de arquivo), escolha "FBX export". Dê um nome claro, como "moeda_ouro", e salve na pasta "modelos". Em seguida, abra o Roblox Studio e mostre o "Asset Manager": vá no menu "View" (Exibir) e clique em "Asset Manager" para abrir o painel. Clique no ícone de importar (a seta para cima) ou no botão "Bulk Import", escolha o arquivo FBX e confirme. O modelo aparece como um MeshPart na cena.

Mão na massa (25 min). Cada aluno organiza as pastas (uma "modelos", uma "texturas"), exporta o próprio modelo do Maya em FBX e importa no Roblox Studio pelo Asset Manager. Quem ainda não terminou o modelo usa o arquivo de exemplo. Circule pela sala. Depois de importar a malha, mostre como aplicar a textura: selecione o MeshPart, no painel "Properties" (Propriedades) encontre a propriedade "TextureID", clique nela, importe a imagem da textura e selecione-a. O modelo ganha cor.

Desafio e compartilhar (10 min). Peça que cada aluno reposicione o modelo importado para que ele fique visível no centro da cena e ajuste o tamanho com a ferramenta "Scale" (Escala). Faça uma rodada rápida: cada um mostra o modelo na tela e diz uma coisa que aprendeu sobre exportar ou importar.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da mala de viagem: "Quando seu modelo vai do Maya para o Roblox, ele faz uma viagem. O arquivo FBX é a mala. A malha é o corpo do personagem; a textura é a roupa. Às vezes a roupa fica numa mala separada, e por isso o modelo chega 'pelado', cinza, até a gente vestir a textura nele." Reforce a ideia de nome de arquivo claro com a frase: "Nome bagunçado é tempo perdido." Evite termos técnicos demais de uma vez; introduza "malha", "textura" e "UV" um de cada vez, sempre com o exemplo na tela.

## Erros comuns e como ajudar

O erro mais frequente é o modelo aparecer cinza: a malha importou, mas a textura não foi aplicada. Ajude o aluno a abrir "TextureID" nas Propriedades e importar a imagem. Outro erro é exportar no formato errado (deixar como arquivo do Maya, ".mb"): confira sempre se foi escolhido "FBX export". Modelos gigantes ou minúsculos na cena indicam problema de escala; use a ferramenta "Scale" para ajustar. Por fim, muitos alunos esquecem de selecionar o objeto antes de "Export Selection", e o arquivo sai vazio; lembre sempre de clicar no modelo primeiro.`,
  exercicios: [
    {
      titulo: `Organizar as pastas do projeto`,
      tipo: `prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Abra o explorador de arquivos com a turma e crie juntos a estrutura de pastas. Verifique que cada aluno tem uma pasta "modelos" e uma pasta "texturas". É uma vitória rápida para começar a aula com confiança.`,
      atividade: `Crie no seu computador uma pasta com o nome do seu jogo. Dentro dela, crie duas subpastas: "modelos" e "texturas". Mova para "modelos" o arquivo 3D que você fez no Maya (ou o arquivo de exemplo).`,
      gabarito: `Existe uma pasta do jogo contendo duas subpastas, "modelos" e "texturas", e o arquivo 3D já está dentro de "modelos" com um nome claro (por exemplo, "moeda_ouro.fbx").`,
    },
    {
      titulo: `Exportar o modelo do Maya em FBX`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe a exportação no projetor enquanto os alunos repetem. O ponto crítico é selecionar o objeto antes de exportar e escolher "FBX export" no tipo de arquivo. Circule conferindo o tipo do arquivo salvo.`,
      atividade: `No Maya, clique no seu modelo para selecioná-lo. Vá em "File" e depois "Export Selection...". Em "Files of type" escolha "FBX export", dê um nome claro e salve na pasta "modelos". Confira que o arquivo terminou em ".fbx".`,
      gabarito: `Um arquivo com extensão ".fbx" e nome claro está salvo na pasta "modelos". O aluno selecionou o objeto antes de exportar e escolheu o formato FBX, não o formato ".mb" do Maya.`,
    },
    {
      titulo: `Primeira importação no Roblox Studio`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como abrir o Asset Manager pelo menu "View". Deixe o aluno tentar a importação sozinho como desafio. Se o modelo aparecer cinza, tranquilize: a malha chegou; falta a textura, que será aplicada no próximo exercício.`,
      atividade: `No Roblox Studio, abra o "Asset Manager" pelo menu "View". Clique no botão de importar (ou "Bulk Import"), escolha seu arquivo FBX e confirme. Encontre o seu modelo, agora como um MeshPart, dentro da cena.`,
      gabarito: `O modelo aparece na cena do Roblox Studio como um MeshPart. É normal ele estar cinza neste momento: a malha foi importada com sucesso, e a textura ainda será aplicada.`,
    },
    {
      titulo: `Vestir a textura (em dupla)`,
      tipo: `em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Junte os alunos em duplas para que um ajude o outro a achar a propriedade "TextureID" no painel "Properties". A troca entre colegas acelera o aprendizado e revela quem ainda não entendeu a diferença entre malha e textura.`,
      atividade: `Em dupla, selecione o MeshPart importado. No painel "Properties", encontre a propriedade "TextureID", clique nela, importe a imagem da textura e selecione-a. Repita o processo no modelo do seu colega. Observem o modelo ganhar cor.`,
      gabarito: `O MeshPart deixa de ser cinza e mostra a textura aplicada. As duas duplas conseguem explicar com as próprias palavras que a malha é a forma e a textura é a imagem colada na superfície.`,
    },
    {
      titulo: `Da viagem do arquivo à cena montada`,
      tipo: `roda de conversa e projeto curto`,
      tempo: `7 min`,
      guiaProfessor: `Conduza uma roda de conversa curta enquanto cada aluno finaliza o posicionamento. Pergunte por que o modelo às vezes chega cinza e o que significa exportar no formato certo. Encerre conectando com a próxima aula, que vai preparar o cenário.`,
      atividade: `Posicione o seu modelo no centro da cena e ajuste o tamanho com a ferramenta "Scale". Depois, na roda, conte em uma frase: qual foi o formato que você usou para exportar e o que aconteceu quando importou. Diga também uma dica que você daria para um colega que vai importar pela primeira vez.`,
      gabarito: `O modelo está visível, centralizado e em tamanho coerente na cena. O aluno diz que exportou em FBX (ou OBJ), descreve a importação pelo Asset Manager e dá uma dica válida, como "selecione o objeto antes de exportar" ou "se ficar cinza, aplique a textura no TextureID".`,
    },
  ],
};
