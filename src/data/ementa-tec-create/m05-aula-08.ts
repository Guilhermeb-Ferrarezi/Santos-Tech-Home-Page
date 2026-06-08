import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Modelo Pronto pra Imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o entregável do mês — fazer os últimos ajustes no modelo, posicioná-lo apoiado na base e exportar o arquivo no formato STL pronto para o slicer, com a turma revisando cada peça em conjunto.`,
  descricao: `Esta é a aula que fecha o mês de Blender. Durante quatro semanas o aluno conheceu o programa, aprendeu a navegar no espaço 3D, transformou o cubo inicial em um objeto, modelou o próprio modelo, pintou com cores e materiais e deu o acabamento com suavização. Agora chega o momento de empacotar tudo: conferir se o modelo está saudável, deixá-lo na posição certa e gerar o arquivo que a impressora entende. É a ponte entre o mundo da modelagem e o mundo da peça física.

O foco desta aula é a exportação. O aluno vai abrir o próprio modelo no Blender, fazer uma checagem final — conferir se está fechado, sem buracos e sem partes soltas —, aplicar as transformações para o objeto ficar com tamanho e rotação "de verdade", apoiá-lo na base de impressão e finalmente usar o menu Arquivo, Exportar, Stl para salvar o arquivo. O STL é o formato universal que todos os slicers (como o Bambu Studio e o Orca Slicer) abrem; ele guarda só a malha, a casca do modelo, que é tudo o que a impressora precisa para fatiar a peça camada por camada.

Como esta é a última aula do mês, a parte de compartilhar ganha um peso especial. A turma vai fazer uma revisão coletiva: cada aluno mostra o seu modelo no projetor, e juntos confirmam que ele está apto para virar uma peça impressa de verdade — base apoiada, escala definida, sem furos e exportado em STL. Essa roda de revisão valoriza o esforço de todos, treina o olhar crítico e garante que ninguém saia com um arquivo quebrado.

Importante: a exportação parece um detalhe pequeno, mas é onde mais erros aparecem. Um modelo lindo na tela pode virar um STL inútil se tiver buracos, se a escala estiver errada ou se faltar aplicar as transformações. Por isso o professor deve tratar a checagem com calma e capricho. No fim, cada aluno termina com o seu arquivo STL salvo e nomeado, encerrando o entregável do mês: um modelo pronto pra imprimir.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, cada um com o modelo que o aluno desenvolveu ao longo do mês carregado e salvo no arquivo .blend`,
    `Projetor para o professor demonstrar a checagem, o posicionamento e a exportação numa peça de exemplo, e para a revisão coletiva no fim`,
    `Arquivo de exemplo "modelo-pronto.blend" já ajustado, apoiado na base e com escala correta, para servir de referência de qualidade`,
    `Uma pasta de destino combinada (por exemplo, "Modelos STL") em cada computador para os alunos salvarem o arquivo exportado de forma organizada`,
    `Impressora 3D ligada por perto (ou imagens dela) para reforçar que o STL é o arquivo que vai mesmo virar peça física`,
    `Lista de checagem impressa por bancada (escala, base apoiada, sem furos, transformações aplicadas, STL salvo) para o aluno marcar item por item`,
  ],
  conceitosChave: [
    `STL — formato de arquivo que guarda só a malha (a casca) do modelo; é o que praticamente todos os slicers abrem para imprimir.`,
    `Malha (mesh) — a rede de pontos, arestas e faces que forma a superfície do modelo 3D no Blender.`,
    `Exportar — salvar o modelo num formato diferente do .blend para que outro programa, como o slicer, consiga abrir.`,
    `Aplicar transformações (Apply) — "congelar" a posição, a rotação e a escala atuais do objeto, para o STL sair com o tamanho certo.`,
    `Modelo fechado (estanque) — malha sem buracos, como um pote sem rachaduras; só assim a impressora consegue preencher o interior.`,
    `Escala — o tamanho real do modelo em milímetros; precisa ser definida antes de exportar para a peça não sair grande ou pequena demais.`,
    `Entregável — o resultado final do mês; aqui é o arquivo STL do próprio modelo, salvo e pronto para o slicer.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula. O trabalho novo de hoje é curto e bem definido: conferir o modelo, apoiá-lo na base, aplicar as transformações e exportar em STL. Antes da aula, faça você mesmo esse caminho uma vez com o arquivo de exemplo "modelo-pronto.blend" para sentir a sequência. Guarde três ideias na cabeça: o STL é só a casca do modelo; a escala precisa estar definida antes de exportar; e a exportação é o ponto onde mais erros aparecem, então vá com calma. Tenha a lista de checagem impressa em mãos e combine com a turma uma pasta única para salvar os arquivos, senão alguns alunos vão "perder" o STL no computador.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra o próprio arquivo .blend e dê uma olhada no modelo. Pergunte: "O que ainda falta para ele virar uma peça de verdade?". Recolha as respostas e mostre no projetor o exemplo "modelo-pronto.blend" para a turma ver onde querem chegar.

Conteúdo novo guiado (15 min): demonstre a exportação no projetor, passo a passo, numa peça de exemplo.
1. Selecionar o objeto: clique com o botão esquerdo no modelo até a borda ficar laranja.
2. Apoiar na base: com o objeto selecionado, abra o menu Object (Objeto), depois Set Origin (Definir Origem), Origin to Geometry; em seguida zere a posição com a tecla N para abrir o painel lateral e ajuste o Z, ou use Object, Snap para encostar na base do grid.
3. Aplicar transformações: pressione Ctrl A e escolha All Transforms (Todas as Transformações). Isso "congela" rotação e escala.
4. Conferir a escala: ainda no painel N (tecla N), olhe a aba Item e veja as Dimensions (Dimensões) em metros; lembre que no slicer 1 unidade vira 1 milímetro.
5. Exportar: vá em File (Arquivo), Export (Exportar), Stl (.stl). Marque a opção Selection Only (Apenas Seleção) para exportar só o modelo. Dê um nome claro, escolha a pasta combinada e clique em Export STL.

Mão na massa (25 min): cada aluno repete a sequência no próprio modelo, marcando a lista de checagem item por item. Circule confirmando que cada um aplicou as transformações e salvou o STL na pasta certa. Quem terminar pode reabrir o STL no Blender (File, Import, Stl) para conferir que o arquivo saiu inteiro.

Desafio e compartilhar (10 min): faça a revisão coletiva. Cada aluno mostra o modelo no projetor e a turma confirma os itens da lista. Celebre cada arquivo aprovado — é o entregável do mês cumprido.

## Como explicar de forma clara

Use comparações concretas. O STL é "a fôrma de gelatina: guarda só o formato de fora, sem o recheio". Aplicar transformações é "tirar a foto: depois de bater, o tamanho fica registrado e não muda mais". Apoiar na base é "fazer o boneco ficar de pé no chão, e não flutuando". O modelo fechado é "um pote sem rachadura: se tiver um furo, a água vaza — aqui é o plástico que não tem onde se firmar". Diga que exportar é "traduzir o desenho para a língua que a impressora entende". E celebre no fim: "esse arquivo que você salvou é o mesmo que vai virar uma peça na sua mão".

## Erros comuns e como ajudar

O aluno exporta sem selecionar o objeto e o STL sai vazio: lembre de clicar no modelo (borda laranja) e marcar Selection Only. Esqueceu de aplicar as transformações e a peça sai gigante ou minúscula no slicer: volte e pressione Ctrl A, All Transforms. O modelo tem um buraco e o slicer reclama: mostre como girar a câmera para achar a face faltando; se for simples, feche selecionando a borda e usando a tecla F. O aluno salva o STL e não acha depois: combine a pasta única antes e confira o caminho na hora de exportar. O modelo está flutuando acima da base: reforce o passo de apoiar na base antes de exportar, senão o slicer vai "derrubar" a peça de qualquer jeito. Por fim, garanta que cada arquivo tenha um nome claro com o do aluno, para ninguém trocar ou perder o entregável.`,
  exercicios: [
    {
      titulo: `Checagem final do modelo`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Oriente cada aluno a abrir o próprio arquivo .blend e girar a câmera em volta do modelo (segurando o botão do meio do mouse) para procurar buracos ou partes soltas. Reforce que esta conferência é como revisar um trabalho antes de entregar. Circule apontando faces faltando e ensine a fechar buracos simples selecionando a borda e usando a tecla F.`,
      atividade: `Abra o seu modelo no Blender e gire a câmera em volta dele, olhando por cima, por baixo e pelos lados. Procure buracos, faces faltando ou pedaços soltos. Anote o que encontrar e, se for um furo simples, feche-o selecionando a borda e apertando a tecla F.`,
      gabarito: `O aluno acertou quando consegue girar a câmera e inspecionar o modelo por todos os lados, identifica se há ou não buracos e, havendo um furo simples, o fecha com a tecla F. Um modelo já fechado também é resposta correta, desde que o aluno tenha de fato conferido todos os lados.`,
    },
    {
      titulo: `Apoiar na base e aplicar transformações`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Demonstre de novo no projetor: selecionar o objeto (borda laranja), apoiar na base do grid e pressionar Ctrl A para escolher All Transforms. Explique que aplicar transformações "congela" o tamanho e a rotação. Acompanhe de perto, pois pular este passo é o erro que mais estraga a impressão. Peça que abram o painel N para conferir as Dimensions.`,
      atividade: `Selecione o seu modelo (borda laranja), apoie-o na base de impressão e pressione Ctrl A, escolhendo All Transforms para congelar a rotação e a escala. Abra o painel lateral com a tecla N e confira as Dimensions na aba Item para saber o tamanho do seu modelo.`,
      gabarito: `Está correto quando o modelo está apoiado na base (não flutuando), o aluno aplicou All Transforms com Ctrl A e consegue ler as Dimensions no painel N, dizendo em voz alta o tamanho aproximado do seu modelo. Se a escala estiver fora do esperado, o aluno reconhece isso ao olhar as dimensões.`,
    },
    {
      titulo: `Exportar o STL`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Guie o caminho File, Export, Stl no projetor e destaque a opção Selection Only, que evita exportar a câmera e a luz junto. Reforce três coisas: selecionar o objeto antes, dar um nome claro com o do aluno e salvar na pasta combinada. Quem terminar pode reabrir o STL com File, Import, Stl para provar que o arquivo saiu inteiro.`,
      atividade: `Com o seu modelo selecionado, vá em File, Export, Stl. Marque Selection Only, dê ao arquivo um nome com o seu nome (por exemplo, "modelo-lucas.stl"), escolha a pasta combinada e clique em Export STL. Depois, reabra o arquivo com File, Import, Stl para conferir que ele saiu inteiro.`,
      gabarito: `Sucesso quando existe um arquivo .stl salvo na pasta combinada, com nome claro, contendo o modelo do aluno (e não vazio nem com câmera e luz juntas). Ao reimportar, o modelo aparece inteiro no Blender, provando que a exportação deu certo.`,
    },
    {
      titulo: `Revisão em dupla com a lista de checagem`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e entregue a lista de checagem (escala, base apoiada, sem furos, transformações aplicadas, STL salvo). A ideia é treinar o olhar crítico: cada um confere o arquivo do colega e marca os itens. Reforce que apontar um problema é ajudar, não criticar. Circule para que as observações sejam concretas, não um simples "está ok".`,
      atividade: `Em dupla, troquem de lugar. Cada um abre o STL do colega no Blender (File, Import, Stl) e confere a lista de checagem item por item: o modelo está apoiado na base? Tem furos? A escala faz sentido? O arquivo está salvo na pasta certa? Marquem juntos cada item e anotem o que precisa de ajuste.`,
      gabarito: `Concluído quando a dupla preenche a lista de checagem do arquivo um do outro, apontando com clareza pelo menos um item aprovado e, se houver, um item que precisa de ajuste (por exemplo, "o modelo está flutuando" ou "a escala parece grande demais"). Observações vagas como "está ok" devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Meu modelo pronto pra imprimir: revisão coletiva`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a entrega final do mês e o momento de valorizar o esforço de todos. Organize a turma em roda diante do projetor. Cada aluno mostra o seu modelo e a turma confirma, em conjunto, que ele está apto para virar peça: base apoiada, escala definida, sem furos, transformações aplicadas e STL salvo. Faça perguntas-guia se alguém travar e celebre cada arquivo aprovado.`,
      atividade: `Mostre o seu modelo no projetor para a turma. Conte: o que é o seu modelo, o que foi mais difícil de fazer no Blender e como você sabe que ele está pronto para imprimir. Junto com a turma, confirme os cinco itens da lista (base apoiada, escala, sem furos, transformações aplicadas, STL salvo). No fim, guarde o seu arquivo STL na pasta combinada.`,
      gabarito: `Concluído quando o aluno apresenta o modelo, responde às três perguntas (o que é, o que foi mais difícil, como sabe que está pronto) e a turma confirma os cinco itens da lista de checagem para aquele arquivo. O entregável do mês está cumprido: o próprio modelo, modelado no Blender, ajustado e exportado em STL, pronto pra imprimir.`,
    },
  ],
};
