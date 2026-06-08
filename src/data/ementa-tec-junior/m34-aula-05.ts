import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Preparando o Modelo para Sair",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a limpar, centralizar na grade e exportar o primeiro asset voxel no formato certo para usar fora do MagicaVoxel, conferindo se o arquivo ficou bom.`,
  descricao: `Até agora as crianças construíram itens mágicos, obstáculos e variações coloridas dentro do MagicaVoxel. Tudo isso vive em um arquivo do tipo ".vox", que só o MagicaVoxel entende. O problema é que o Roblox não sabe ler ".vox". É como escrever uma carta linda em uma língua que o seu amigo não fala: a mensagem existe, mas ele não consegue entender. Por isso, nesta aula, vamos aprender a "traduzir" o modelo para um formato que o Roblox aceita.

Antes de exportar, é preciso preparar o modelo. Imagine que você vai colocar um brinquedo dentro de uma caixa para mandar pelo correio. Primeiro você tira a sujeira, depois coloca o brinquedo no centro da caixa para ele não amassar nas bordas. Com o modelo voxel é parecido: a gente limpa os voxels soltos que sobraram por engano e centraliza a peça na grade, bem no meio. Assim o asset chega organizado e do jeito certo.

Nesta aula o foco é o caminho da exportação. As crianças vão entender por que o Roblox precisa de arquivos especiais (formato OBJ), vão limpar o modelo, centralizar na grade e exportar o primeiro asset. Depois, vão conferir o resultado abrindo a pasta e vendo que os arquivos novos apareceram. É um momento importante porque mostra que o trabalho delas pode sair da tela e virar algo que funciona em outro programa.

O professor não precisa ser especialista. Esta aula é um passo a passo simples e visual. A ideia é demonstrar no projetor, fazer junto com a turma e celebrar quando o arquivo aparecer na pasta. Centralizar e exportar são gestos que as crianças vão repetir nas próximas aulas, então vale praticar com calma e deixar todo mundo confiante.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto, um para cada aluno`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar`,
    `Um modelo voxel pronto e simples (por exemplo, uma moeda ou uma chave) já salvo em cada computador`,
    `Uma pasta na área de trabalho chamada "Meus Assets" criada antes da aula em cada computador`,
    `Folha impressa com o passo a passo da exportação em desenhos, uma por aluno`,
    `Adesivos ou carimbos para premiar quem exportar o primeiro arquivo`,
  ],
  conceitosChave: [
    `Exportar — é tirar o seu desenho de dentro do MagicaVoxel e salvá-lo em outro formato para usar em outro programa.`,
    `Formato de arquivo — é o "tipo" do arquivo, como uma língua. O ".vox" é a língua do MagicaVoxel e o ".obj" é uma língua que o Roblox entende.`,
    `OBJ — é o formato especial que vamos usar para o Roblox conseguir ler o nosso modelo 3D.`,
    `Limpar o modelo — é apagar os voxels soltos ou errados que ficaram sobrando antes de guardar a peça.`,
    `Centralizar na grade — é colocar o modelo bem no meio da caixa de construção, sem ficar torto nem grudado na borda.`,
    `Pasta — é o lugar no computador onde o arquivo fica guardado, como uma gaveta com etiqueta.`,
    `Conferir — é abrir a pasta depois de exportar para ver se o arquivo realmente apareceu.`,
  ],
  treinamento: `## O que o professor precisa saber

O MagicaVoxel salva o trabalho em um arquivo ".vox". Esse formato é ótimo para construir, mas o Roblox não consegue abri-lo. Por isso a gente exporta para o formato OBJ, que é uma "língua" que muitos programas 3D entendem. Quando você exporta um OBJ, o MagicaVoxel cria mais de um arquivo de uma vez: um ".obj" (a forma), um ".mtl" (as cores) e às vezes uma imagem ".png" (a textura). Isso é normal. Diga às crianças que eles andam juntos, como um trio de amigos.

Antes de exportar, vale fazer duas coisas: limpar o modelo (apagar voxels soltos) e centralizar a peça na grade. No MagicaVoxel a área de construção fica no centro da tela, e os comandos de exportação ficam no painel da direita, embaixo, em botões como "export". Pratique o caminho uma vez sozinho antes da aula para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula passada. Pergunte: "Onde mora o nosso desenho hoje?" Mostre no projetor o arquivo ".vox" na pasta e explique que o Roblox não fala essa língua. Faça a analogia da carta em outro idioma. Pergunte o que a gente faz quando precisa traduzir.

Conteúdo novo guiado (15 min): no projetor, abra um modelo simples. Primeiro, limpe: use a ferramenta de apagar (atalho com a tecla de borracha ou o modo "Erase" na barra de ferramentas à esquerda) e tire qualquer voxel solto. Depois, centralize: vá ao painel da direita e procure o comando de centralizar do objeto (botão "to center" ou as setas de mover o modelo na grade) e deixe a peça no meio. Em seguida, mostre onde fica o "export" no painel inferior direito e clique em "obj". Aponte para a janela que pede o nome do arquivo e o lugar para salvar. Salve dentro da pasta "Meus Assets". Mostre que apareceram vários arquivos juntos.

Mão na massa (25 min): cada criança abre o próprio modelo simples. Acompanhe a turma fazendo os mesmos três passos: limpar, centralizar, exportar para OBJ na pasta "Meus Assets". Circule pela sala. Peça que todos coloquem um nome fácil, como "moeda" ou "chave", sem espaços. Quando exportarem, peça que abram a pasta e contem quantos arquivos novos apareceram. Comemore cada arquivo que surgir.

Desafio e compartilhar (10 min): proponha exportar um segundo modelo com nome diferente. Depois, peça que cada um mostre a pasta "Meus Assets" cheia de arquivos no próprio computador e conte o que fez. Reforce a sequência: limpar, centralizar, exportar, conferir.

## Como explicar para crianças

Use a imagem da caixa de correio: "Vamos mandar o nosso brinquedo voxel para o Roblox. Primeiro a gente limpa a sujeira, depois coloca o brinquedo no meio da caixa e por último fecha e manda." Diga que o ".vox" é a língua do MagicaVoxel e o OBJ é a língua que o Roblox entende. Quando aparecerem vários arquivos, explique com alegria: "Eles são um time! Um guarda a forma, outro guarda as cores. Eles precisam ficar juntinhos." Repita a palavrinha mágica da aula: limpar, centralizar, exportar, conferir.

## Erros comuns e como ajudar

Voxels soltos: muitas crianças deixam um quadradinho perdido no ar e nem percebem. Peça para girar o modelo e procurar pontinhos soltos antes de exportar. Modelo torto ou na borda: lembre de centralizar usando o comando do painel da direita; sem isso a peça sai estranha. Esquecer onde salvou: insista em sempre salvar na pasta "Meus Assets" e em conferir abrindo a pasta. Nome com acento ou espaço: peça nomes curtos e simples, sem espaço, porque isso evita problemas depois no Roblox. Achar que o OBJ "sumiu" porque vieram vários arquivos: explique que é assim mesmo, eles vêm em grupo e está tudo certo. Clicar em "vox" em vez de "obj" na hora de exportar: mostre devagar no projetor a diferença entre os dois botões.`,
  exercicios: [
    {
      titulo: `Qual língua o Roblox entende?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no aquecimento, com a turma toda. Mostre no projetor o arquivo ".vox" e o ícone de um arquivo OBJ. Deixe as crianças responderem em voz alta antes de confirmar.`,
      atividade: `O professor pergunta: "O nosso desenho está em um arquivo .vox. O Roblox consegue ler essa língua? Para qual língua a gente precisa traduzir o nosso modelo?"`,
      gabarito: `Não, o Roblox não lê o formato .vox. Precisamos exportar o modelo para o formato OBJ, que é a língua que o Roblox entende.`,
    },
    {
      titulo: `Caça aos voxels soltos`,
      tipo: `Atividade prática individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Prepare antes um modelo simples com dois ou três voxels soltos no ar de propósito. Mostre como girar a câmera para procurar. Ajude quem não achar.`,
      atividade: `Cada criança abre o modelo preparado pelo professor, gira a câmera para procurar voxels soltos e usa a ferramenta de apagar (modo "Erase") para remover todos eles, deixando o modelo limpo.`,
      gabarito: `O aluno deve encontrar e apagar todos os voxels soltos, ficando apenas o modelo principal, sem nenhum quadradinho perdido no ar ao redor da peça.`,
    },
    {
      titulo: `Coloque a peça no meio da caixa`,
      tipo: `Demonstração guiada com prática`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor o comando de centralizar no painel da direita. Use a analogia da caixa de correio. Confira se cada aluno conseguiu deixar a peça no centro da grade.`,
      atividade: `O aluno usa o comando de centralizar do MagicaVoxel para mover o seu modelo até o centro da grade de construção, deixando-o no meio, sem ficar torto nem grudado na borda.`,
      gabarito: `O modelo fica posicionado no centro da grade, equilibrado e afastado das bordas. A criança consegue explicar que centralizar é "colocar o brinquedo no meio da caixa".`,
    },
    {
      titulo: `Minha primeira exportação`,
      tipo: `Tarefa prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe passo a passo. Aponte o botão "export" e a opção "obj" no painel inferior direito. Lembre de salvar na pasta "Meus Assets" com nome curto e sem espaço.`,
      atividade: `Depois de limpar e centralizar, a criança clica em "export", escolhe "obj", dá um nome fácil ao arquivo (como "moeda"), salva na pasta "Meus Assets" e depois abre a pasta para conferir.`,
      gabarito: `Na pasta "Meus Assets" aparecem os arquivos exportados juntos (um .obj, um .mtl e, às vezes, uma imagem .png). A criança reconhece que esse grupo de arquivos é o asset pronto.`,
    },
    {
      titulo: `Detetive da pasta: o que apareceu?`,
      tipo: `Investigação e explicação`,
      tempo: `7 minutos`,
      guiaProfessor: `Desafio final, depois da exportação. Peça que cada aluno conte os arquivos novos e explique para que serve cada um. Reforce a sequência limpar, centralizar, exportar, conferir.`,
      atividade: `A criança abre a pasta "Meus Assets", conta quantos arquivos novos apareceram depois de exportar e tenta explicar, com as próprias palavras, por que vieram vários arquivos e não apenas um.`,
      gabarito: `Apareceu mais de um arquivo porque eles formam um time: o .obj guarda a forma do modelo e o .mtl guarda as cores; às vezes vem também uma imagem .png. Eles precisam ficar juntos na mesma pasta para o asset funcionar.`,
    },
  ],
};
