import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Preparando a Impressão de Verdade",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Conduzir o aluno pelo fluxo real de impressão no Orca Slicer, da prévia de camadas até iniciar de fato a impressão da peça na impressora 3D.`,
  descricao: `Nesta aula o personagem que o aluno modelou no Blender finalmente sai da tela e começa a virar objeto físico. Até agora trabalhamos com o arquivo digital: importar, fatiar, posicionar suportes e ajustar a aderência na mesa. Agora chegou o momento de revisar tudo com calma, conferir os números que o Orca Slicer calcula (tempo e filamento), preparar a máquina e apertar o botão que dá início à impressão de verdade.

O coração da aula é a prévia de camadas, o chamado preview. Depois de fatiar, o Orca Slicer mostra o objeto desenhado camada por camada, exatamente como o bico da impressora vai construí-lo. É aí que conferimos se não ficou nenhuma parte solta no ar sem suporte, se a base está bem apoiada e se o tempo e a quantidade de material fazem sentido. Aprender a ler essa prévia evita desperdício de filamento e impressões que falham na metade.

Em seguida, cuidamos da máquina física. Uma impressora bem calibrada começa com a mesa nivelada e o filamento carregado corretamente. Mesmo que a escola use impressoras com nivelamento automático, o aluno precisa entender o que está acontecendo e por que isso importa: se a primeira camada não gruda, nada do resto funciona. Carregar o filamento, conferir a temperatura e observar o início da impressão são gestos que transformam o aluno de "usuário do programa" em "operador da impressora".

Por ser uma aula com máquina ligada, o foco também é segurança e paciência. A impressora esquenta, leva tempo e exige observação. O aluno envia o arquivo, acompanha as primeiras camadas e aprende que impressão 3D é um processo, não um clique mágico. Ao final, cada projeto deve estar enviado para a fila de impressão ou já imprimindo, com o aluno sabendo explicar cada etapa que executou.`,
  materiais: [
    `Computadores com o Orca Slicer instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a prévia de camadas e os botões`,
    `Arquivo de exemplo já fatiado do personagem (modelo do Blender exportado em .stl ou .3mf)`,
    `Impressora 3D ligada, com mesa limpa e filamento disponível (rolo reserva à mão)`,
    `Espátula, álcool isopropílico e pano para limpeza da mesa de impressão`,
    `Folha impressa com o checklist de pré-impressão (preview, tempo, filamento, mesa, bico)`,
  ],
  conceitosChave: [
    `Prévia de camadas (preview) — visualização do objeto desenhado fatia por fatia, mostrando como a impressora vai construí-lo de baixo para cima.`,
    `Estimativa de tempo — número que o Orca Slicer calcula prevendo quantas horas e minutos a impressão vai levar.`,
    `Estimativa de filamento — quantidade de material (em gramas e metros) que a peça vai consumir, útil para saber se o rolo é suficiente.`,
    `Calibração da mesa — ajuste da altura e do nivelamento da mesa para que a primeira camada gruda bem e fique uniforme.`,
    `Primeira camada — a base inicial da peça; se ela falhar, toda a impressão falha, por isso é a mais importante.`,
    `Carregamento do filamento — processo de inserir e empurrar o material até o bico, aquecendo a ponta para que ele saia derretido.`,
    `Enviar para a impressora — ação de mandar o arquivo fatiado da tela para a máquina, por cabo, cartão ou rede.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula liga o mundo digital ao físico. No Orca Slicer, depois que o aluno clica em "Slice plate" (Fatiar placa, botão no canto inferior direito), o programa troca da aba "Prepare" (Preparar) para a aba "Preview" (Prévia), no topo da tela. É nessa prévia que aparecem a barra de camadas (à direita), a estimativa de tempo e o gasto de filamento (canto inferior direito). Você não precisa ser especialista: basta saber onde clicar e o que cada número significa. Tenha a impressora ligada e a mesa limpa antes de começar. Faça você mesmo todo o fluxo uma vez antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Pergunte: "O que fizemos com o personagem até aqui?" Relembre fatiamento, suportes e aderência. Mostre no projetor o arquivo já posicionado na placa, na aba "Prepare".

15 min — Conteúdo novo guiado. No projetor, clique em "Slice plate". Quando abrir a aba "Preview", arraste a barra vertical de camadas (lado direito) de baixo para cima e mostre o objeto crescendo fatia por fatia. Aponte o tempo estimado e os gramas de filamento no canto inferior direito. Use o menu de cores (acima da barra) e escolha "Line type" (Tipo de linha) para mostrar paredes, preenchimento e suportes em cores diferentes. Depois, vá até a impressora: mostre a mesa nivelada e demonstre o carregamento do filamento no menu da própria máquina (geralmente "Load filament" / "Carregar filamento"). Clique em "Print plate" (Imprimir placa) no Orca e mostre o envio para a impressora.

25 min — Mão na massa. Cada aluno fatia seu próprio arquivo, abre a prévia, percorre as camadas e anota tempo e filamento no checklist. Em duplas e por ordem, levam o arquivo até a impressora (ou enviam pela rede), conferem a mesa e iniciam a impressão de uma peça. Circule confirmando que ninguém pulou a conferência da primeira camada.

10 min — Desafio e compartilhar. Cada aluno diz em voz alta quanto tempo e quanto filamento sua peça vai usar e qual etapa achou mais delicada. Combine quem acompanhará as impressões ao longo da semana.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do bolo de camadas: "A impressora é uma confeiteira que monta o personagem deitando uma fileira de plástico por vez, de baixo para cima." A prévia é "o filme de como o robô vai construir, antes de ele começar de verdade". A primeira camada é "o alicerce da casa: se entortar, a casa toda cai". O filamento é "a tinta da impressora, só que sólida e derretida na hora". Repita que impressão leva tempo: "Não é mágica de um clique, é como assar um bolo — precisa esperar e vigiar."

## Erros comuns e como ajudar

Muitos alunos esquecem de fatiar e tentam imprimir o arquivo cru: lembre que o botão "Slice plate" vem sempre antes de "Print plate". Outro erro é ignorar a prévia e não notar partes flutuando sem suporte: peça que sempre puxem a barra de camadas até o topo e olhem a base. Há quem se assuste com o tempo estimado (várias horas) e ache que está errado: explique que peças detalhadas demoram mesmo. Na máquina, o erro clássico é não conferir a mesa limpa, fazendo a primeira camada não grudar; reforce limpar com álcool e observar as primeiras fileiras antes de sair de perto. Por fim, ninguém toca no bico quente: ele passa de 200 graus. Mantenha a regra de só mexer na máquina com o professor por perto.`,
  exercicios: [
    {
      titulo: `Lendo a prévia de camadas`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Verifique se cada aluno realmente clicou em "Slice plate" e mudou para a aba "Preview". Passe pelas telas conferindo se eles encontraram a barra de camadas no lado direito.`,
      atividade: `Abra seu arquivo, clique em "Slice plate" e vá para a aba "Preview". Arraste a barra de camadas de baixo até o topo e observe o personagem crescendo. Anote no checklist o tempo estimado e os gramas de filamento.`,
      gabarito: `O aluno deve mostrar a aba "Preview" aberta, ter percorrido as camadas e registrado dois números: o tempo (ex.: "2 h 15 min") e o filamento (ex.: "18 g / 6 m"). Os valores variam por peça; o que importa é que estejam preenchidos e façam sentido.`,
    },
    {
      titulo: `Caça às partes flutuantes`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Prepare um arquivo de exemplo com uma parte do personagem propositalmente sem suporte. Desafie os alunos a encontrá-la usando só a prévia.`,
      atividade: `No arquivo de desafio, use a barra de camadas e o modo de cor "Line type" para descobrir se existe alguma parte do personagem começando solta no ar, sem nada embaixo. Aponte na tela onde está o problema.`,
      gabarito: `O aluno deve identificar a região flutuante (por exemplo, um braço ou orelha que aparece em uma camada sem apoio embaixo) e dizer que ali faltaria suporte ou melhor posicionamento. Reconhecer que aquela parte falharia na impressão é a resposta correta.`,
    },
    {
      titulo: `Checklist de pré-impressão em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno confere a tela do Orca, o outro confere a impressora física. Eles trocam de papel na metade do tempo.`,
      atividade: `Em dupla, completem juntos o checklist: arquivo fatiado, prévia conferida, tempo e filamento anotados, mesa limpa e nivelada, filamento carregado, bico aquecendo. Marquem cada item só depois de confirmar de verdade.`,
      gabarito: `Os seis itens do checklist devem estar marcados com confirmação real, não no chute. A dupla precisa conseguir explicar, ao ser perguntada, por que cada item importa, em especial a mesa limpa e a primeira camada.`,
    },
    {
      titulo: `Enviar e iniciar a impressão`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe um aluno por vez na impressora. Garanta que ninguém toque no bico quente e que todos observem ao menos a primeira camada antes de se afastar.`,
      atividade: `Com o checklist completo, envie seu arquivo para a impressora clicando em "Print plate" (ou levando o arquivo no cartão). Inicie a impressão e fique observando a primeira camada ser desenhada na mesa.`,
      gabarito: `Sucesso é o arquivo enviado e a impressão iniciada, com a primeira camada aderindo bem à mesa (linhas grudadas, sem descolar). Se a camada não grudar, o aluno deve pausar e pedir ajuda para limpar a mesa ou ajustar a altura, em vez de deixar seguir.`,
    },
    {
      titulo: `Roda de conversa: o que pode dar errado`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em círculo. Conduza a conversa com perguntas abertas e anote no quadro os problemas que os alunos citarem, montando uma lista coletiva de cuidados.`,
      atividade: `Em roda, cada um conta qual etapa achou mais delicada e responde: "O que pode dar errado numa impressão e como a gente percebe a tempo?" Tragam exemplos do que viram hoje na própria peça.`,
      gabarito: `A conversa deve levantar problemas reais como primeira camada que não gruda, falta de suporte, mesa suja, filamento acabando e bico quente. Não há resposta única: o objetivo é a turma montar uma lista de sinais de alerta e dizer como agir (pausar, limpar, chamar o professor).`,
    },
  ],
};
