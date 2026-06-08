import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Exportando: Do Maya para a Unreal",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Preparar e exportar um asset do Maya em formato FBX com as configurações corretas e importá-lo na Unreal Engine para validar escala, pivot e nomenclatura.`,
  descricao: `Esta aula é a ponte entre criar um modelo bonito no Maya e ver esse modelo funcionando de verdade dentro de um jogo na Unreal Engine. Até aqui o aluno modelou, organizou polígonos, fez UVs e pintou texturas PBR. Agora chega a hora mais importante do pipeline: a exportação. Um asset mal exportado chega torto, gigante, minúsculo ou girando do lado errado na Unreal, mesmo estando perfeito no Maya. Por isso, antes de exportar, fazemos uma checagem final de escala, pivot (ponto de origem do objeto), nomenclatura e organização da cena.

A ideia central é simples: a Unreal espera que o modelo respeite certas regras. A escala precisa estar em centímetros (1 unidade da Unreal equivale a 1 centímetro). O pivot deve ficar na base do objeto, normalmente no chão e no centro, para que ele encaixe certinho no mundo do jogo. Os nomes precisam ser claros e sem espaços, porque a Unreal organiza tudo por nome. A cena precisa estar limpa, com o histórico de construção apagado e as transformações zeradas (freeze transformations).

Depois de preparar tudo, o aluno usa a janela de exportação FBX do Maya, escolhe as opções corretas (smoothing groups, tangentes e binormais, triangulação opcional) e gera o arquivo. Em seguida, abre a Unreal Engine, importa o FBX e observa o resultado: o modelo aparece no tamanho certo? O pivot está na base? As normais estão corretas? Esse teste fecha o ciclo e dá ao aluno a confiança de que seus assets estão prontos para o jogo.

Esta aula prepara o terreno para a Aula 8, em que o aluno vai montar o pacote final de entrega. Aqui o foco é entender o processo de exportação e importação de um único modelo, fazendo direito do começo ao fim.`,
  materiais: [
    `Computadores com Autodesk Maya instalado (um por aluno)`,
    `Unreal Engine instalada (versão 5.x) em cada máquina`,
    `Arquivo de exemplo .ma ou .mb com um asset simples já texturizado (ex.: uma caixa de madeira ou um barril)`,
    `Projetor ou TV para a demonstração guiada do professor`,
    `Pasta organizada de exemplo com subpastas Models, Textures e Exports`,
    `Folha de checklist impressa com os itens de preparação (escala, pivot, nome, freeze)`,
  ],
  conceitosChave: [
    `FBX — formato de arquivo que carrega geometria, UVs, normais e materiais entre programas 3D, sendo o padrão para enviar modelos do Maya para a Unreal.`,
    `Pivot — ponto de origem do objeto, em volta do qual ele gira e a partir do qual ele é posicionado; deve ficar na base do modelo.`,
    `Escala — tamanho do objeto; a Unreal trabalha em centímetros, então 1 metro no mundo equivale a 100 unidades.`,
    `Freeze Transformations — comando que zera posição, rotação e escala do objeto, definindo o estado atual como o estado original.`,
    `Delete History — comando que apaga o histórico de construção da malha, deixando o modelo limpo e leve para exportar.`,
    `Nomenclatura — regra de dar nomes claros e sem espaços aos objetos (ex.: SM_Barril_01), usando prefixos que a Unreal reconhece.`,
    `Smoothing Groups — informação que diz quais faces são suaves e quais têm quinas duras, evitando que o modelo fique facetado ou estranho na Unreal.`,
  ],
  treinamento: `## O que o professor precisa saber

Mesmo que você nunca tenha aberto o Maya, esta aula é tranquila porque o objetivo é seguir uma lista de checagem e clicar em uma janela de exportação. O ponto mais importante de entender é este: a Unreal Engine usa centímetros como unidade. Então 1 metro no jogo equivale a 100 unidades. O Maya, por padrão, também trabalha bem com isso quando exportamos em FBX, mas precisamos garantir que o modelo tenha um tamanho razoável (uma porta tem cerca de 200 unidades de altura). O segundo ponto é o pivot: ele é o ponto que a Unreal usa para posicionar o objeto. Se o pivot estiver no meio do objeto, metade dele afunda no chão. Por isso colocamos o pivot na base. O terceiro ponto é limpar a cena: apagar o histórico (Delete History) e zerar as transformações (Freeze Transformations).

## Passo a passo da aula

Aquecimento (10 min): Pergunte à turma o que pode dar errado quando um modelo bonito vai parar no jogo. Anote respostas no quadro (fica gigante, fica girado, some). Mostre no projetor o asset de exemplo no Maya e diga que hoje vamos prepará-lo e mandá-lo para a Unreal.

Conteúdo novo guiado (15 min): Com o asset selecionado, demonstre a checagem final na ordem:
1. Escala: abra Windows > General Editors > Channel Box. Confira que Scale X, Y e Z estão em 1. Verifique o tamanho com a régua mental (a porta tem 200 cm).
2. Pivot na base: pressione a tecla Insert para entrar no modo de editar pivot, segure a tecla V (snap a vértice) e arraste o pivot para o centro da base. Pressione Insert de novo para sair.
3. Posicionar na origem: com o objeto selecionado, vá em Modify > Center Pivot apenas se precisar recentralizar; depois zere a posição digitando 0 em Translate X, Y e Z no Channel Box.
4. Limpar: vá em Edit > Delete by Type > History. Depois em Modify > Freeze Transformations.
5. Nome: no Outliner, dê dois cliques no objeto e renomeie para SM_Barril_01 (SM significa Static Mesh).

Mão na massa (25 min): Cada aluno faz toda a checagem no próprio asset. Depois exporta: selecione o objeto, vá em File > Export Selection. Em File of type escolha FBX export. No painel da direita confira: Smoothing Groups ligado, Tangents and Binormals ligado, Animation desligado (é um asset estático), e em Units desmarque Automatic e deixe a escala correta. Salve na pasta Exports com o nome do objeto. Em seguida, abra a Unreal, clique em Import no Content Browser, escolha o FBX e confirme. O aluno observa se o tamanho e o pivot estão certos.

Desafio e compartilhar (10 min): Cada aluno arrasta o asset para a viewport da Unreal, posiciona no chão e tira um print. Comparem quem acertou a escala de primeira.

## Como explicar de forma clara

Use a imagem da mudança de casa: antes de colocar os móveis no caminhão (o FBX), você confere se cada móvel está em pé, etiquetado e do tamanho certo. O pivot é como a alça do móvel: é por ela que você segura e posiciona. Freeze Transformations é como dizer ao móvel é assim que você fica de agora em diante. Diga que exportar não é só salvar, é traduzir o modelo para a língua que a Unreal entende.

## Erros comuns e como ajudar

O erro mais frequente é o modelo aparecer gigante ou minúsculo na Unreal, quase sempre por escala não congelada; peça para refazer Freeze Transformations e reexportar. Outro erro é o pivot no centro, fazendo o objeto afundar no chão; volte ao passo do Insert e V. Modelos facetados indicam Smoothing Groups desligado na exportação. Nomes com espaço ou acento quebram a importação; reforce SM_Barril_01 sem espaços nem acentos. Se a importação falhar, confira se o aluno escolheu Export Selection com o objeto realmente selecionado.`,
  exercicios: [
    {
      titulo: `Checklist de preparação`,
      tipo: `Atividade guiada`,
      tempo: `5 min`,
      guiaProfessor: `Distribua a folha de checklist e peça que cada aluno marque os itens conferidos no próprio asset. Circule verificando o Channel Box de cada máquina.`,
      atividade: `Abra seu asset no Maya e marque na folha: escala em 1, pivot na base, posição zerada, histórico apagado, transformações congeladas e nome no formato SM_Nome_01.`,
      gabarito: `Checklist correto: Scale X=1, Y=1, Z=1; pivot posicionado na base central do objeto; Translate X=0, Y=0, Z=0; History apagado via Edit > Delete by Type > History; Freeze Transformations aplicado via Modify > Freeze Transformations; nome no padrão SM_Barril_01 sem espaços nem acentos.`,
    },
    {
      titulo: `Movendo o pivot para a base`,
      tipo: `Prática individual`,
      tempo: `7 min`,
      guiaProfessor: `Demonstre uma vez no projetor a sequência Insert e V. Acompanhe os alunos que tiverem dificuldade com o snap a vértice.`,
      atividade: `Selecione seu modelo, pressione Insert para editar o pivot, segure V para fazer snap em um vértice e arraste o pivot para o centro da base do objeto. Pressione Insert novamente para sair.`,
      gabarito: `Sequência correta: tecla Insert ativa o modo de edição de pivot; segurar V ativa o snap a vértice; o pivot é arrastado até o vértice central da base (no chão); pressionar Insert de novo confirma e sai do modo. Resultado esperado: ao girar o objeto, ele gira em torno da base, e o gizmo de movimento aparece no chão.`,
    },
    {
      titulo: `Configurando a exportação FBX`,
      tipo: `Prática individual`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o painel de opções FBX no projetor. Reforce quais caixas devem estar marcadas e quais desmarcadas. Verifique a pasta de destino de cada aluno.`,
      atividade: `Com o objeto selecionado, vá em File > Export Selection, escolha FBX export e ajuste as opções para um asset estático. Salve na pasta Exports.`,
      gabarito: `Opções corretas no painel FBX: Smoothing Groups = ligado; Tangents and Binormals = ligado; Animation = desligado (asset estático); Triangulate = opcional; em Units, desmarcar Automatic e manter a escala em centímetros. Caminho: File > Export Selection > File of type FBX export. Arquivo salvo como SM_Barril_01.fbx na pasta Exports.`,
    },
    {
      titulo: `Importando e testando na Unreal`,
      tipo: `Desafio prático`,
      tempo: `8 min`,
      guiaProfessor: `Ajude os alunos a localizar o botão Import no Content Browser. Peça que comparem o tamanho do asset com um objeto de referência da Unreal, como uma cadeira ou um cubo de 100 unidades.`,
      atividade: `Abra a Unreal, clique em Import no Content Browser, selecione seu FBX e confirme. Arraste o asset para a viewport, posicione no chão e confira escala e pivot.`,
      gabarito: `Passos corretos: Content Browser > Import > selecionar SM_Barril_01.fbx > confirmar no diálogo de importação (Import). Resultado esperado: o modelo aparece no tamanho coerente (próximo da referência de 100 unidades por metro), o pivot fica na base ao arrastar para a viewport, e as normais e o smoothing aparecem corretos, sem faces facetadas. Sinal de sucesso: o objeto pousa no chão sem afundar.`,
    },
    {
      titulo: `Diagnóstico de problemas de exportação`,
      tipo: `Resolução de problemas`,
      tempo: `7 min`,
      guiaProfessor: `Apresente três casos com defeito (um asset gigante, um afundado no chão e um facetado) e peça que os alunos identifiquem a causa e a correção. Pode usar prints ou um asset propositalmente errado.`,
      atividade: `Para cada caso, escreva qual foi o erro na preparação ou exportação e como corrigir: (a) o modelo apareceu enorme na Unreal; (b) metade do modelo ficou abaixo do chão; (c) o modelo ficou com aparência facetada e quebrada.`,
      gabarito: `(a) Modelo enorme: escala não foi congelada ou unidade errada na exportação; corrigir com Modify > Freeze Transformations e conferir Units no painel FBX, depois reexportar. (b) Metade abaixo do chão: pivot no centro do objeto; corrigir movendo o pivot para a base com Insert e V, congelar e reexportar. (c) Aparência facetada: Smoothing Groups desligado na exportação FBX; ligar Smoothing Groups (e Tangents and Binormals) e reexportar. Em todos os casos, reimportar o FBX corrigido na Unreal.`,
    },
  ],
};
