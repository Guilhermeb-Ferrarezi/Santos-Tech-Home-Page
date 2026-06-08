import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Exportando Assets Finais",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Fazer a checagem final de cada modelo no Maya (tamanho, pivot e otimização) e exportar os assets prontos no formato certo para o Roblox, organizando os arquivos em pastas nomeadas para a importação.`,
  descricao: `Nas três aulas anteriores o aluno planejou os extras do jogo, modelou as melhorias no Maya e deu o acabamento com texturas e materiais. Agora chega o momento de embrulhar o presente: exportar os assets finais. Exportar é tirar o modelo de dentro do Maya e gravá-lo num arquivo independente que o Roblox Studio consegue abrir. Se essa etapa for feita com pressa, o modelo chega torto, gigante, minúsculo ou girando em torno do lugar errado no Roblox. Por isso esta aula é sobre cuidado e checagem, não sobre criar coisas novas.

Antes de exportar, cada modelo passa por uma checagem rápida de três pontos. O primeiro é o tamanho: o personagem precisa ter uma escala que faça sentido no jogo, nem do tamanho de uma formiga nem de um prédio. O segundo é o pivot, que é o pontinho em volta do qual o objeto gira e que serve de "âncora" para posicioná-lo; o ideal é deixá-lo na base do modelo, centralizado, para encaixar fácil no chão do cenário. O terceiro é a otimização: apagar histórico, congelar transformações e conferir se não há geometria escondida ou pesada demais, para o jogo rodar leve.

Com a checagem feita, o aluno exporta no formato certo. Para o Roblox, o formato amigável de modelos com materiais é o FBX (também serve o OBJ para casos simples). No Maya isso é feito pelo menu File > Export Selection, escolhendo o tipo de arquivo, dando um nome claro e salvando dentro de uma pasta organizada. A organização é parte do trabalho: arquivos com nomes como "asset final FINAL 2 de verdade" viram caos na hora de importar. O combinado é uma pasta por aluno, com subpastas para modelos e texturas, e nomes curtos e descritivos.

Ao final da aula, cada aluno terá seus assets finais exportados em FBX, com tamanho e pivot conferidos, geometria otimizada e tudo guardado em pastas nomeadas. É o pacote que será importado no Roblox já na próxima aula. O foco é a disciplina do "arquivo pronto": um asset bem exportado e bem nomeado economiza muito tempo e evita dor de cabeça mais adiante.`,
  materiais: [
    `Computadores (1 por aluno) com o Autodesk Maya instalado e os modelos texturizados das aulas 2 e 3 já salvos`,
    `Projetor ou TV para o professor mostrar a tela do Maya e o menu de exportação`,
    `Arquivos de exemplo: uma cena .mb/.ma com 2 ou 3 assets prontos (um deles com pivot fora do lugar e escala errada, de propósito, para a checagem)`,
    `Roblox Studio instalado em pelo menos um computador, para conferir rapidamente um asset importado`,
    `Pen drive ou pasta compartilhada na rede para os alunos guardarem os arquivos exportados`,
    `Folha-resumo impressa com os três pontos da checagem (tamanho, pivot, otimização) e o passo de exportar em FBX`,
    `Modelo de nomes de pasta e arquivo combinado pela turma (ex.: pasta do aluno, subpasta modelos, subpasta texturas)`,
  ],
  conceitosChave: [
    `Asset — cada peça pronta do jogo (um modelo 3D, uma textura, um som) que será usada dentro do Roblox.`,
    `Exportar — gravar o modelo num arquivo independente do Maya, que outro programa, como o Roblox Studio, consegue abrir.`,
    `FBX — formato de arquivo que guarda o modelo 3D junto com materiais e é o mais usado para levar assets ao Roblox.`,
    `Pivot — o ponto de âncora em volta do qual o objeto gira e se posiciona; o ideal é deixá-lo na base do modelo.`,
    `Escala — o tamanho do modelo em relação ao jogo; precisa ser conferida para o asset não chegar gigante ou minúsculo.`,
    `Freeze Transformations — comando que zera posição, rotação e escala atuais, deixando os valores "limpos" antes de exportar.`,
    `Delete History — comando que apaga o histórico de construção do modelo, deixando a geometria mais leve e estável para exportar.`,
  ],
  treinamento: `## O que o professor precisa saber

Exportar no Maya é simples quando se segue uma ordem. Primeiro a checagem, depois a exportação. Você não precisa ser especialista: precisa conhecer cinco lugares na interface. (1) O menu superior File, onde fica "Export Selection". (2) O painel "Channel Box", à direita, onde aparecem os valores de posição (Translate), rotação (Rotate) e escala (Scale) do objeto selecionado. (3) O menu "Modify", onde ficam "Freeze Transformations" e "Center Pivot". (4) O menu "Edit > Delete by Type > History" (atalho Alt + Shift + D), que limpa o histórico. (5) A tecla "D" combinada com clique, que ativa o modo de mover o pivot manualmente.

A regra de ouro: selecione o objeto, limpe o histórico, posicione o pivot na base, congele as transformações e só então exporte. Antes da aula, abra a cena de exemplo e faça esse fluxo uma vez do começo ao fim, exportando um FBX para uma pasta de teste. Assim você não descobre os menus na frente dos alunos. Se possível, importe esse FBX no Roblox Studio (aba Home > Import 3D) para mostrar o asset chegando inteiro.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento (10 min): retome a aula 3 (texturas). Mostre no projetor um asset que foi importado errado (torto e gigante) e pergunte "o que será que deu errado?". Apresente a palavra do dia: exportar. Liste na lousa os três pontos da checagem.

2. Conteúdo guiado (15 min): no projetor, com a cena de exemplo, selecione um asset e mostre na ordem: (a) no Channel Box, confira a escala; se estiver estranha, ajuste; (b) Edit > Delete by Type > History para limpar; (c) Modify > Center Pivot e, se preciso, segure D e arraste o pivot para a base do modelo; (d) Modify > Freeze Transformations para zerar os valores. Por fim File > Export Selection, em "Files of type" escolha "FBX export", dê um nome curto (ex.: arvore_final) e salve na pasta de modelos. Mostre o arquivo .fbx aparecendo na pasta.

3. Mão na massa (25 min): cada aluno repete o fluxo com os próprios assets das aulas anteriores. Pede-se: criar a pasta do aluno com subpastas modelos e texturas; para cada asset, limpar histórico, centralizar e baixar o pivot, congelar transformações e exportar em FBX com nome claro. Circule conferindo escala e pivot antes de cada exportação.

4. Desafio e compartilhar (10 min): cada aluno mostra à turma sua pasta organizada e diz quantos assets exportou e como nomeou. Se der tempo, importe um FBX de um aluno no Roblox Studio para a turma ver chegar certo.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. Exportar é como tirar um bolo da forma e embalar para entregar: o bolo (modelo) é o mesmo, mas agora vai num formato que a outra pessoa (o Roblox) consegue receber. O pivot é a alça da mochila: se a alça estiver no lugar errado, fica difícil pegar e pendurar; por isso colocamos a alça na base. Congelar transformações é como apertar "zerar o cronômetro": tudo recomeça do zero, sem confundir. E organizar as pastas é arrumar o material escolar: com tudo nomeado, na hora da prova (a importação) você acha rápido. Repita a frase-chave: "primeiro a checagem, depois exporta".

## Erros comuns e como ajudar

Exportar sem limpar o histórico: o asset chega pesado ou bugado; lembre do Delete History antes de exportar. Esquecer de centralizar e baixar o pivot: o modelo gira em torno do nada e fica difícil posicionar no Roblox; mostre o Center Pivot e o arrastar com a tecla D. Não congelar as transformações: a escala "invisível" volta a atrapalhar; reforce o Freeze. Escolher o formato errado (salvar como .mb em vez de FBX): mostre onde trocar "Files of type". Nomes confusos e tudo na Área de Trabalho: insista na pasta do aluno com subpastas e nomes curtos. Exportar a cena inteira em vez do que está selecionado: lembre que é "Export Selection", com o asset certo selecionado antes.`,
  exercicios: [
    {
      titulo: `Checagem em três pontos`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Garanta que cada aluno tenha um asset aberto e selecionado. Acompanhe se conseguem ler a escala no Channel Box e localizar os menus Modify e Edit.`,
      atividade: `Selecione um dos seus assets no Maya. Confira a escala no Channel Box, limpe o histórico em Edit > Delete by Type > History e use Modify > Center Pivot. Diga em voz alta qual dos três pontos da checagem (tamanho, pivot, otimização) você acabou de cuidar em cada passo.`,
      gabarito: `O aluno acerta quando faz os três passos e relaciona corretamente: conferir a escala cuida do tamanho; Center Pivot cuida do pivot; Delete History cuida da otimização. Não há um valor único de escala; o que importa é o aluno saber ler o número e dizer se está coerente com o jogo.`,
    },
    {
      titulo: `Pivot na base`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Use o asset com pivot fora do lugar. Mostre que, segurando a tecla D, o pivot pode ser arrastado. Reforce o uso do snap ao ponto/grade se a turma já souber.`,
      atividade: `Pegue um asset cujo pivot esteja fora do lugar. Centralize com Modify > Center Pivot e depois, segurando a tecla D, arraste o pivot para a base do modelo (o ponto que vai encostar no chão). Gire o objeto para testar: ele deve girar apoiado na base.`,
      gabarito: `O pivot fica certo quando, ao girar o objeto, ele gira apoiado na base, como uma peça em pé no chão, e não flutuando ou girando longe de si mesmo. O aluno acerta ao posicionar o pivot na base centralizada e comprovar isso com uma rotação de teste.`,
    },
    {
      titulo: `Exportar em FBX`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Um confere o fluxo (history, pivot, freeze) enquanto o outro exporta, depois trocam. Verifique se escolhem FBX e salvam na subpasta de modelos.`,
      atividade: `Em dupla, escolham um asset. Façam juntos a sequência: limpar histórico, centralizar e baixar o pivot, e Modify > Freeze Transformations. Depois usem File > Export Selection, escolham "FBX export", deem um nome curto e salvem na subpasta de modelos. Confirmem que o arquivo .fbx apareceu na pasta.`,
      gabarito: `A dupla acerta quando o arquivo .fbx aparece na subpasta de modelos, com nome curto e claro, e o fluxo foi feito na ordem (history, pivot, freeze, export). Erros típicos a corrigir: salvar como .mb, esquecer de selecionar o asset antes, ou pular o freeze. O ponto-chave é que o FBX exista e o nome seja compreensível.`,
    },
    {
      titulo: `O nome importa`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor uma lista de nomes ruins (asset1, final FINAL 2, sem titulo) e nomes bons (arvore_final, porta_madeira). Conduza a turma a criar uma regra simples de nomes e pastas.`,
      atividade: `Em roda, comparem nomes de arquivo bons e ruins. Decidam juntos uma regra simples para a turma: como nomear modelos e texturas e quais subpastas usar. Cada um diz como vai renomear um dos próprios arquivos seguindo a regra combinada.`,
      gabarito: `Uma boa regra usa nomes curtos, sem espaços confusos nem "FINAL FINAL", descrevendo o que é o asset (ex.: arvore_final.fbx, porta_madeira.fbx), com subpastas separadas para modelos e texturas dentro da pasta do aluno. O aluno acerta ao propor um nome claro e descritivo para um arquivo seu, seguindo a regra que a turma combinou. Não há um único nome certo, mas ele deve ser curto e explicar o conteúdo.`,
    },
    {
      titulo: `Pacote pronto para o Roblox`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Cada aluno entrega a pasta final completa. Confira escala, pivot na base, freeze feito e todos os assets em FBX nas subpastas certas. Se houver tempo e um Roblox Studio livre, importe um FBX para validar.`,
      atividade: `Monte o pacote final dos seus assets: para cada modelo, faça a checagem completa (escala conferida, history limpo, pivot na base, freeze feito) e exporte em FBX. Guarde tudo na sua pasta, com subpastas modelos e texturas e nomes claros. No fim, faça uma lista rápida dos assets exportados.`,
      gabarito: `O aluno acerta quando entrega uma pasta organizada (subpastas modelos e texturas), com todos os assets exportados em FBX, nomes curtos e descritivos, e tendo passado cada modelo pela checagem (escala coerente, pivot na base, history limpo, freeze feito). A lista final deve bater com os arquivos da pasta. O ideal é que, ao importar um FBX no Roblox Studio, o asset chegue inteiro, no tamanho certo e apoiado pela base.`,
    },
  ],
};
