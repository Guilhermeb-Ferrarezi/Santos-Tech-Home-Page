import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Exportando Assets Leves",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Otimizar e exportar os modelos 3D do Maya em formato leve e compatível com o Roblox Studio, e validar a importação de pelo menos um asset dentro do jogo.`,
  descricao: `Nesta aula o aluno fecha o ciclo do mês: depois de planejar, modelar, aplicar materiais e dar acabamento nos novos assets, chegou a hora de prepará-los para sair do Maya e entrar no jogo. O foco é "deixar o asset leve". Um modelo pesado, cheio de polígonos desnecessários, deixa o jogo lento e demora para carregar. Um modelo leve roda bem até em computadores e celulares mais fracos, e é por isso que estúdios profissionais cuidam tanto da otimização.

Otimizar significa três coisas simples nesta idade. Primeiro, reduzir polígonos onde dá: tirar faces escondidas e detalhes que ninguém vê. Segundo, conferir a escala, ou seja, o tamanho do objeto comparado a um personagem do Roblox, para ele não chegar gigante ou minúsculo no jogo. Terceiro, ajustar o pivot, que é o ponto de apoio do objeto, para que ele gire e encaixe no lugar certo. Com esses três cuidados feitos, a exportação fica tranquila.

Para sair do Maya e entrar no Roblox, usamos um formato de arquivo que os dois programas entendem: o FBX. Pense no FBX como uma "caixa de mudança" padrão que cabe em qualquer caminhão. O aluno vai selecionar o asset, escolher a opção de exportar seleção, marcar as opções certas e salvar o arquivo .fbx em uma pasta organizada. Depois, abre o Roblox Studio e importa esse arquivo para ver o modelo aparecer dentro do jogo.

O entregável do mês são os novos assets prontos, então esta aula é decisiva: é o momento em que o trabalho 3D vira parte real do jogo. No fim da aula, cada aluno terá pelo menos um asset exportado em .fbx e importado no Roblox Studio, conferindo se ele aparece com o tamanho, a posição e a aparência corretos. Na próxima aula faremos a revisão geral e os ajustes finais.`,
  materiais: [
    `Computadores com o Autodesk Maya e o Roblox Studio instalados e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar a exportação e a importação em tela grande`,
    `Arquivo de exemplo .mb ou .ma com os assets já acabados das aulas anteriores (com materiais aplicados)`,
    `Uma pasta organizada na área de trabalho chamada assets_roblox para salvar os arquivos .fbx`,
    `Modelo de referência de escala: um personagem ou parte do Roblox para comparar o tamanho dos objetos`,
    `Conexão com a internet para abrir e logar no Roblox Studio`,
    `Mouse com scroll para facilitar o zoom e a navegação nas duas ferramentas`,
  ],
  conceitosChave: [
    `Otimização — deixar o modelo leve, tirando o que é desnecessário para o jogo rodar rápido e sem travar.`,
    `Polígono — cada pequena face plana que forma a superfície do modelo 3D; quanto menos, mais leve o objeto.`,
    `Escala — o tamanho do objeto comparado ao personagem do jogo, para ele não chegar gigante nem minúsculo.`,
    `Pivot — o ponto de apoio do objeto, que define onde ele gira e como ele se encaixa no lugar certo.`,
    `FBX — formato de arquivo que o Maya e o Roblox Studio entendem, usado para levar o modelo de um para o outro.`,
    `Exportar — gerar um arquivo a partir do projeto para usá-lo em outro programa, neste caso fora do Maya.`,
    `Importar — trazer um arquivo de fora para dentro de um programa, neste caso colocar o asset no Roblox Studio.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Maya nem o Roblox para dar esta aula. Precisa entender o caminho: otimizar, conferir escala e pivot, exportar em FBX e importar no Roblox. Decore quatro menus. Para reduzir polígonos: menu "Mesh", opção "Reduce". Para centralizar o pivot: menu "Modify", opção "Center Pivot". Para zerar a posição: menu "Modify", "Freeze Transformations". Para exportar: menu "File", "Export Selection", e no tipo de arquivo escolha "FBX export". No Roblox Studio, a importação fica na aba "Home", botão "Import 3D" (ou na janela "Asset Manager", botão de importar). Antes da aula, faça o caminho completo uma vez com um cubo simples para ganhar confiança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra na tela grande um asset acabado das aulas anteriores. Pergunte: "Como esse objeto vai parar dentro do jogo?" Conduza até a ideia de exportar e importar. Mostre dois modelos: um leve e um pesado, e explique que o pesado faz o jogo travar.

15 min, conteúdo novo guiado. No Maya, selecione um objeto. Mostre o contador de polígonos (menu "Display", "Heads Up Display", "Poly Count"). Aplique "Mesh", "Reduce" e baixe um pouco a quantidade, mostrando que a forma continua parecida. Depois faça "Modify", "Center Pivot" para arrumar o ponto de apoio e "Modify", "Freeze Transformations" para zerar a posição. Compare a escala com a referência do Roblox. Agora exporte: "File", "Export Selection", dê um nome simples sem espaços, como cadeira_v1, escolha o tipo "FBX export" e salve na pasta assets_roblox. Por fim, abra o Roblox Studio, vá em "Home", "Import 3D", escolha o arquivo .fbx e veja o modelo aparecer.

25 min, mão na massa. Cada aluno pega um asset próprio e faz o caminho completo: confere os polígonos, aplica Reduce com cuidado, centraliza o pivot, congela as transformações, exporta em FBX para a pasta assets_roblox e importa no Roblox Studio. A meta é validar pelo menos um asset aparecendo correto no jogo. Circule pela sala conferindo nomes de arquivo e a escala dos objetos.

10 min, desafio e compartilhar. Peça que cada aluno posicione o asset importado perto de um personagem no Roblox para conferir o tamanho. Faça uma rodada rápida: cada um mostra o asset no jogo e diz quantos polígonos conseguiu reduzir sem estragar a forma.

## Como explicar de forma clara (linguagem para a idade)

Use comparações simples. Diga: "Otimizar é como fazer a mala de viagem: leve só o que precisa, senão a mala fica pesada demais." Para polígonos: "Cada polígono é um tijolinho do modelo; menos tijolos, objeto mais leve." Para o FBX: "É uma caixa de mudança padrão que cabe no caminhão do Maya e no caminhão do Roblox." Para o pivot: "É a maçaneta por onde você segura e gira o objeto; se estiver no lugar errado, ele gira torto." Para escala: "Coloque seu objeto do lado do personagem; ele tem que ter um tamanho que faça sentido no jogo."

## Erros comuns e como ajudar

O erro mais comum é reduzir polígonos demais e o objeto ficar deformado; ensine a reduzir pouco e olhar o resultado. Outro erro é salvar o arquivo com espaços ou acentos no nome, o que dá problema no Roblox; oriente nomes simples como mesa_v1. Muitos esquecem de selecionar o objeto antes de "Export Selection" e exportam a cena toda ou nada; reforce selecionar primeiro. Há quem importe o asset gigante ou minúsculo: isso quase sempre é escala; mostre comparar com o personagem e reescalar no Roblox se precisar. Se o objeto chegar girando estranho, geralmente é o pivot; volte ao Maya e use "Center Pivot". Por fim, se o aluno não achar o arquivo na hora de importar, confira se ele salvou na pasta assets_roblox e com a extensão .fbx.`,
  exercicios: [
    {
      titulo: `Contando os polígonos`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como ligar o contador de polígonos no menu "Display", "Heads Up Display", "Poly Count". Garanta que cada aluno consiga ver o número na tela antes de seguir.`,
      atividade: `Ligue o contador de polígonos no Maya. Selecione um asset do seu jogo e anote quantos polígonos ele tem agora, antes de qualquer otimização.`,
      gabarito: `O aluno deve ativar "Display", "Heads Up Display", "Poly Count" e ver os números no canto da tela. O valor correto é o número de "Tris" ou "Faces" mostrado com o objeto selecionado. Não há um número certo único; o importante é que o aluno saiba localizar e ler o contador, anotando o valor inicial para comparar depois da redução.`,
    },
    {
      titulo: `Reduzindo sem estragar`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce a regra de reduzir pouco e olhar a forma. Mostre o caminho "Mesh", "Reduce" e como comparar o antes e o depois. Evite que reduzam demais.`,
      atividade: `Aplique "Mesh", "Reduce" no seu asset e baixe a quantidade de polígonos aos poucos. Pare quando a forma começar a ficar estranha. Anote o número final e diga quantos polígonos você economizou.`,
      gabarito: `O caminho correto é menu "Mesh", "Reduce". O objeto deve ter menos polígonos do que no exercício anterior, mas continuar reconhecível, sem buracos ou deformações. A economia é a diferença entre o número inicial e o final (por exemplo, de 1200 para 800 polígonos, economia de 400). Se a forma ficou deformada, o aluno reduziu demais e deve desfazer com Ctrl+Z e reduzir menos.`,
    },
    {
      titulo: `Pivot e escala em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno ajusta o pivot e a escala, o outro confere comparando com a referência do Roblox. Mostre "Modify", "Center Pivot" e "Modify", "Freeze Transformations".`,
      atividade: `Em dupla, escolham um asset. Centralizem o pivot com "Modify", "Center Pivot" e zerem a posição com "Modify", "Freeze Transformations". Depois comparem o tamanho do objeto com a referência do personagem do Roblox e digam se está pequeno, certo ou grande.`,
      gabarito: `O pivot deve ficar no centro do objeto após "Center Pivot", e a posição deve voltar a zero após "Freeze Transformations". Na comparação de escala, a resposta esperada descreve o tamanho em relação ao personagem (por exemplo, "a cadeira está do tamanho certo, na altura do joelho do personagem"). A dupla deve perceber se o objeto precisa ser reescalado antes de exportar.`,
    },
    {
      titulo: `Exportando o arquivo FBX`,
      tipo: `prática na ferramenta`,
      tempo: `13 minutos`,
      guiaProfessor: `Acompanhe os nomes de arquivo: simples, sem espaços nem acentos. Reforce selecionar o objeto antes de "Export Selection" e escolher o tipo "FBX export". Confira se salvaram na pasta assets_roblox.`,
      atividade: `Selecione seu asset otimizado. Use "File", "Export Selection", dê um nome simples sem espaços (como mesa_v1), escolha o tipo "FBX export" e salve na pasta assets_roblox. Confirme que o arquivo .fbx apareceu na pasta.`,
      gabarito: `O resultado correto é um arquivo com extensão .fbx dentro da pasta assets_roblox, com nome simples e sem acentos (como mesa_v1.fbx). Caminho: selecionar o objeto, "File", "Export Selection", escolher "FBX export" no tipo de arquivo, nomear e salvar. Se nada for exportado, o aluno esqueceu de selecionar o objeto; se der erro, o nome provavelmente tem espaço ou acento.`,
    },
    {
      titulo: `Importando e validando no Roblox`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Mostre a importação pela aba "Home", botão "Import 3D" (ou pelo "Asset Manager"). Ajude a comparar a escala com um personagem e a corrigir tamanho ou rotação se necessário. Esta é a validação do entregável.`,
      atividade: `Abra o Roblox Studio, importe seu arquivo .fbx pela aba "Home", botão "Import 3D". Posicione o asset perto de um personagem para conferir o tamanho. Verifique se ele aparece com a cor, a posição e a escala corretos. Ajuste o tamanho se precisar e mostre ao professor.`,
      gabarito: `O asset deve aparecer dentro do jogo no Roblox Studio, com a aparência parecida com a do Maya e tamanho coerente ao lado do personagem. Caminho: "Home", "Import 3D", escolher o arquivo .fbx da pasta assets_roblox. Se chegar gigante ou minúsculo, o aluno ajusta a escala no Roblox; se chegar girado errado, o problema é o pivot e ele volta ao Maya para usar "Center Pivot". A validação está completa quando o objeto aparece correto e bem posicionado no jogo.`,
    },
  ],
};
