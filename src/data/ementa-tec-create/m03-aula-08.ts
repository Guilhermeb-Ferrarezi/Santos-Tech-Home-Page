import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Modelo Pronto pra Imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o personagem 3D no Maya, congelar as transformações, exportar em OBJ ou STL pronto para o slicer e apresentar o modelo para a turma.`,
  descricao: `Esta é a aula que fecha o mês com chave de ouro. Durante quatro semanas os alunos aprenderam a navegar pela câmera do Maya, montaram formas primitivas, esculpiram com Extrude, ajustaram proporção e adicionaram detalhes que deram vida ao personagem. Agora chegou o momento de transformar todo esse trabalho em um arquivo de verdade, aquele que vai para a impressora 3D na próxima etapa do curso. O foco não é criar coisas novas, e sim deixar o modelo limpo, organizado e exportado corretamente.

O coração da aula é entender que um modelo bonito na tela nem sempre está pronto para imprimir. Antes de exportar, é preciso "congelar" as transformações do objeto, ou seja, zerar os valores de posição, rotação e escala para que o Maya entenda o estado atual como o ponto de partida oficial. Sem esse passo, o modelo pode chegar ao slicer torto, gigante ou minúsculo. Também fazemos uma checagem final de escala usando o Heads Up Display de medidas, garantindo que o personagem tenha um tamanho real coerente, em centímetros, com o que cabe na mesa da impressora.

Depois da limpeza, o aluno aprende o caminho do menu de exportação. No Maya, o formato OBJ é amigável e muito usado entre programas de modelagem, enquanto o STL é o queridinho da impressão 3D porque guarda só a malha, sem cores nem texturas. O professor mostra onde clicar, como nomear o arquivo de forma organizada e onde salvar para não perder nada. Cada aluno sai com o seu arquivo guardado na pasta do projeto.

Por fim, a turma se reúne para uma pequena apresentação. Cada aluno mostra o personagem rotacionando na tela, conta uma curiosidade da criação e diz o que mais gostou de fazer. É um momento de celebração e de fechamento do entregável do mês, deixando todos prontos e animados para ver o modelo ganhar forma física na fase de impressão.`,
  materiais: [
    `Computadores com Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos ao vivo`,
    `Arquivo de exemplo de personagem finalizado (.mb) já modelado nas aulas anteriores`,
    `Pasta organizada no computador para salvar os arquivos OBJ e STL de cada aluno`,
    `Pen drive ou pasta de rede para fazer backup dos arquivos exportados`,
    `Impressora 3D disponível na sala para mostrar fisicamente o destino do arquivo`,
    `Folha simples de checklist de exportação para cada aluno acompanhar os passos`,
  ],
  conceitosChave: [
    `Congelar transformações (Freeze Transformations) — comando que zera posição, rotação e escala do objeto, fixando o estado atual como o oficial.`,
    `Apagar histórico (Delete History) — limpeza que remove o registro de ações antigas da malha, deixando o modelo leve e sem surpresas na exportação.`,
    `Exportar (Export) — ação de salvar o modelo em um formato que outros programas, como o slicer, conseguem abrir.`,
    `OBJ — formato de arquivo 3D muito comum, que guarda a malha e pode levar cores e texturas junto.`,
    `STL — formato preferido da impressão 3D, que guarda apenas a malha do modelo, sem cores nem texturas.`,
    `Escala real — tamanho do modelo em centímetros, conferido para garantir que o personagem caiba na mesa da impressora.`,
    `Slicer — programa que recebe o arquivo OBJ ou STL e o transforma em instruções que a impressora 3D entende.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula é de finalização, então a maior parte do trabalho pesado já foi feita. Seu papel é guiar três etapas técnicas simples mas importantes: limpar o modelo, conferir a escala e exportar. Mesmo que você nunca tenha usado o Maya, basta seguir os menus na ordem. Os comandos principais ficam no menu Modify (para congelar transformações) e no menu Edit (para apagar histórico). A exportação fica em File, na opção Export Selection. Antes da aula, abra o arquivo de exemplo e faça o caminho completo uma vez sozinho, para chegar seguro. Lembre os alunos de sempre selecionar o personagem antes de qualquer comando, clicando nele na janela 3D (a viewport).

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Abra a roda perguntando o que cada um lembra das aulas do mês. Mostre no projetor um modelo finalizado girando. Pergunte: "esse personagem está pronto para imprimir?". Use a pergunta para apresentar a ideia de que falta um passo de preparação. Peça que todos abram o próprio arquivo salvo na aula anterior.

Conteúdo novo guiado (15 min): No projetor, selecione o personagem na viewport. Vá em Modify, clique em Freeze Transformations. Mostre no Channel Box (painel da direita) que os valores de Translate, Rotate e Scale voltaram para 0 e 1. Em seguida vá em Edit e clique em Delete by Type, depois History. Explique que isso limpa a "memória" do modelo. Por fim, ative a régua de medidas: vá no menu Display, depois Heads Up Display, e ligue Object Details, conferindo o tamanho em centímetros.

Mão na massa (25 min): Cada aluno repete os três passos no próprio modelo: Freeze Transformations, Delete History e conferir a escala. Depois, mostre a exportação. Selecione o personagem, vá em File, depois Export Selection. Na janela, em Files of type escolha OBJexport (ou STL_DCE para STL). Nomeie o arquivo com o nome do aluno e do personagem, sem espaços, e salve na pasta do projeto. Passe nas mesas conferindo cada exportação.

Desafio e compartilhar (10 min): Cada aluno gira o personagem na tela e apresenta em uma frase. Comemore o entregável concluído e mostre a impressora física, contando que na próxima etapa o arquivo vira objeto real.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que congelar transformações é como tirar uma foto e dizer "é assim que ele é agora, esse é o tamanho e a posição certos". Apagar o histórico é como apagar os rascunhos do caderno e deixar só a versão final. Exportar é como salvar uma música em um formato que toca em qualquer celular. Para o STL, diga que é o "idioma" que a impressora entende melhor, por isso guardamos só o esqueleto do modelo, sem as cores. Reforce que nomear bem o arquivo é como escrever o nome na mochila: ajuda a achar depois.

## Erros comuns e como ajudar

O erro mais frequente é esquecer de selecionar o personagem antes de clicar nos comandos; oriente sempre a clicar no modelo até ele ficar destacado em verde. Outro erro é exportar com Export All em vez de Export Selection, o que pode levar lixo da cena junto; mostre a diferença com calma. Alguns alunos esquecem de congelar antes de exportar e o modelo chega torto no slicer; crie o hábito de seguir o checklist na ordem. Por fim, há quem salve com espaços ou acentos no nome do arquivo, o que confunde alguns slicers; peça nomes simples, com hífen ou sublinhado no lugar de espaço. Se a malha tiver buracos visíveis, anote para revisar, mas tranquilize: a etapa de impressão também tem ferramentas de reparo.`,
  exercicios: [
    {
      titulo: `Congelando e limpando o modelo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno fazendo o Freeze Transformations e o Delete History. Confira no Channel Box se Translate está em 0 e Scale em 1. Esse é o passo base para todos os outros.`,
      atividade: `Abra o seu personagem no Maya. Selecione o modelo na viewport. Vá em Modify e clique em Freeze Transformations. Depois vá em Edit, Delete by Type e clique em History. Confira no painel da direita (Channel Box) se os valores zeraram.`,
      gabarito: `Modelo selecionado, transformações congeladas (Translate X, Y, Z em 0; Rotate em 0; Scale em 1) e histórico apagado. O Channel Box deve mostrar os valores limpos, confirmando que o modelo está pronto para a próxima etapa.`,
    },
    {
      titulo: `Conferindo a escala real`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como ligar o Heads Up Display de medidas em Display, Heads Up Display, Object Details. Ajude quem tiver o modelo muito grande ou muito pequeno a ajustar a escala antes de congelar de novo.`,
      atividade: `Ligue a exibição de medidas no menu Display. Descubra a altura do seu personagem em centímetros. Ele está entre 5 cm e 15 cm? Se estiver muito grande ou muito pequeno, ajuste a escala com a ferramenta Scale (tecla R) e congele as transformações de novo.`,
      gabarito: `Aluno identifica a altura do modelo em centímetros e confirma que está dentro de um tamanho imprimível (entre 5 cm e 15 cm). Se ajustou a escala, refez o Freeze Transformations. Resposta esperada: o personagem tem cerca de X cm e cabe na mesa da impressora.`,
    },
    {
      titulo: `Exportando para o slicer`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Garanta que cada aluno use Export Selection e não Export All. Confira o formato escolhido (OBJ ou STL) e o nome do arquivo sem espaços nem acentos. Verifique se salvou na pasta certa.`,
      atividade: `Com o personagem selecionado, vá em File e clique em Export Selection. Na janela, escolha o formato OBJexport ou STL_DCE. Dê um nome simples ao arquivo, como seunome-personagem, sem espaços. Salve na pasta do projeto e avise o professor.`,
      gabarito: `Arquivo OBJ ou STL salvo na pasta do projeto, com nome organizado e sem espaços ou acentos. O professor confirma que o arquivo abre e contém apenas o personagem, sem elementos extras da cena.`,
    },
    {
      titulo: `Revisão entre colegas`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira para revisar o trabalho um do outro usando o checklist. Incentive comentários gentis e específicos. Anote dúvidas que aparecerem para responder à turma.`,
      atividade: `Em dupla, abra o checklist de exportação e confira o modelo do colega: as transformações foram congeladas? O histórico foi apagado? A escala está boa? O arquivo foi exportado e nomeado direito? Dê uma dica de melhoria ao seu colega.`,
      gabarito: `Cada dupla preenche o checklist com os quatro itens conferidos e oferece pelo menos uma dica construtiva. Exemplo de resposta: "Seu modelo está congelado e exportado, mas o nome tem espaço; troque por um hífen para o slicer ler melhor."`,
    },
    {
      titulo: `Apresentação do meu personagem`,
      tipo: `roda de conversa e projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a roda dando a vez a cada aluno. Peça que girem o modelo na tela com o atalho da câmera. Celebre o entregável do mês e relembre que a próxima etapa é a impressão real. Valorize o esforço de todos.`,
      atividade: `Apresente seu personagem para a turma. Gire o modelo na tela para mostrar todos os lados. Conte em poucas frases: qual o nome dele, o que mais gostou de criar e por que ele está pronto para imprimir. Mostre onde o arquivo foi salvo.`,
      gabarito: `Aluno apresenta o personagem girando na viewport, diz o nome, comenta uma etapa preferida da criação e confirma que o modelo está congelado, limpo e exportado em OBJ ou STL na pasta do projeto. Entregável do mês concluído e pronto para a fase de impressão.`,
    },
  ],
};
