import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Detalhes que Dão Vida",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Adicionar detalhes ao modelo usando Insert Edge Loop e Bevel, trabalhando com simetria para criar características marcantes do personagem como olhos, orelhas ou acessórios.`,
  descricao: `Até agora o aluno construiu o corpo principal do personagem com formas primitivas e extrusões. Nesta aula ele aprende a etapa que realmente transforma um bloco genérico em um personagem com personalidade: os detalhes. Um modelo ganha vida quando aparecem olhos, orelhas, um chapéu, um nariz ou um acessório que conta uma história. Para isso, o Maya oferece duas ferramentas essenciais que vamos praticar: o Insert Edge Loop, que adiciona novas divisões na malha para dar mais controle, e o Bevel, que arredonda cantos vivos deixando o modelo mais suave e agradável.

A ideia central é que detalhe não precisa de esforço dobrado. Quando o personagem é simétrico (e quase todos são: dois olhos, duas orelhas, dois braços), o aluno pode modelar apenas um lado e deixar o Maya espelhar o outro automaticamente. Isso se chama trabalhar com simetria. O aluno aprende a ativar a simetria na própria ferramenta de seleção e também a usar o comando Mirror para duplicar metade do modelo. Assim, ao posicionar um olho de um lado, o outro aparece igualzinho no lado oposto, sem retrabalho.

O Insert Edge Loop é como desenhar uma linha de corte que dá a volta no modelo. Cada nova linha cria mais vértices e arestas para o aluno puxar, criando relevos, saliências e reentrâncias. Já o Bevel pega um canto reto e o transforma em uma pequena curva ou chanfro. Cantos vivos parecem duros e artificiais; cantos levemente arredondados parecem reais e profissionais. Juntas, essas ferramentas permitem esculpir os pequenos elementos que diferenciam um cubo qualquer de um personagem memorável.

Ao final da aula, cada aluno terá acrescentado pelo menos uma característica marcante ao seu personagem (olhos, orelhas ou um acessório), usando simetria para garantir que os dois lados fiquem idênticos. Esse modelo detalhado é a base que, nas próximas aulas, será preparado e exportado para a impressão 3D real.`,
  materiais: [
    `Computadores com o Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos na tela`,
    `Arquivo de exemplo: o personagem-base de cada aluno salvo da Aula 5 (formato .mb)`,
    `Arquivo de exemplo do professor com olhos, orelhas e acessórios já modelados, para mostrar o resultado-alvo`,
    `Imagens de referência impressas ou no projetor (personagens simples com olhos, orelhas e chapéus)`,
    `Mouse com três botões para cada aluno (essencial para navegar e selecionar no Maya)`,
    `Folha de atalhos da turma com os comandos da aula (Insert Edge Loop, Bevel, Mirror, simetria)`,
  ],
  conceitosChave: [
    `Insert Edge Loop — ferramenta que adiciona uma nova linha de arestas dando a volta no modelo, criando mais pontos para detalhar.`,
    `Bevel — comando que arredonda ou chanfra um canto reto, deixando a superfície mais suave e realista.`,
    `Simetria — recurso que reflete automaticamente o que você faz de um lado para o outro, poupando metade do trabalho.`,
    `Mirror — comando que duplica e espelha metade de um modelo para formar a outra metade idêntica.`,
    `Edge Loop — sequência contínua de arestas que percorre o modelo como um anel, usada para moldar formas.`,
    `Componente — cada parte editável da malha: vértice (ponto), aresta (linha) e face (superfície).`,
    `Relevo — pequena saliência ou reentrância na superfície que cria detalhes como olhos saltados ou bochechas.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula tem duas ferramentas estrela: Insert Edge Loop e Bevel. O Insert Edge Loop fica no menu Mesh Tools > Insert Edge Loop Tool. Ele adiciona uma linha de arestas que dá a volta completa no modelo; serve para criar mais "controle", ou seja, mais pontos que você pode puxar para formar olhos, bochechas ou relevos. O Bevel fica em Edit Mesh > Bevel (ou clique direito > Bevel) e arredonda cantos vivos. A terceira ideia é a simetria: você ativa em Modeling Toolkit (ícone à direita) ou na ferramenta Move, marcando Symmetry: Object X. Assim, mexer de um lado reflete no outro. Antes da aula, abra o seu arquivo de exemplo e teste cada comando uma vez. Tenha certeza de que cada aluno salvou o personagem da Aula 5.

## Passo a passo da aula

10 min — Aquecimento e revisão. Abra o personagem de exemplo no projetor. Pergunte: "O que falta para ele parecer vivo?" Conduza para a resposta: olhos, orelhas, detalhes. Peça que cada aluno abra o próprio arquivo da Aula 5 (File > Open Scene) e salve já como nova versão (File > Save Scene As com o nome m03-aula06).

15 min — Conteúdo novo guiado. Demonstre os três comandos, devagar, no projetor. Primeiro: ative Wireframe on Shaded (atalho 5 para sólido, e o painel já mostra as arestas). Selecione o modelo. Abra Mesh Tools > Insert Edge Loop Tool e clique numa aresta vertical — uma linha amarela aparece dando a volta; clique para confirmar. Faça dois loops perto de onde ficará um olho. Depois selecione um canto reto (modo aresta: botão direito > Edge), vá em Edit Mesh > Bevel e arraste o valor Fraction para arredondar. Por fim, ative a simetria: na ferramenta Move (atalho W), abra Tool Settings e marque Symmetry > Object X. Mostre que ao mover um vértice de um lado, o outro acompanha.

25 min — Mão na massa. Cada aluno acrescenta UMA característica marcante: olhos, orelhas OU um acessório. Roteiro na lousa: 1) inserir edge loops na região do detalhe; 2) ativar simetria Object X; 3) puxar vértices para criar relevo (olhos saltados, orelhas pontudas); 4) aplicar Bevel nos cantos duros. Circule pela sala. Lembre-os de salvar a cada poucos minutos (Ctrl+S).

10 min — Desafio e compartilhar. Lance o desafio: "Use Mirror para garantir os dois lados idênticos." Em Mesh > Mirror, defina o eixo X. Depois, cada aluno mostra o personagem para a turma e diz qual detalhe adicionou.

## Como explicar de forma clara

Use comparações concretas. Diga que o Insert Edge Loop é como "desenhar mais linhas no papel para ter onde dobrar" — quanto mais linhas, mais controle. Compare o Bevel a "lixar a quina de uma madeira": o canto deixa de machucar e fica suave. Para simetria, use a imagem do espelho: "o que você faz de um lado, o espelho copia do outro, de graça." Reforce que detalhe bom é detalhe simples — dois olhos bem posicionados já transformam o personagem. Evite termos técnicos demais; fale "linha", "canto", "ponto" e "espelho" antes de "edge loop", "bevel", "vértice" e "simetria".

## Erros comuns e como ajudar

O erro mais comum é inserir edge loops demais e travar o computador ou se perder na malha — oriente a usar poucos loops, só onde o detalhe vai ficar. Outro: aplicar Bevel com Segments muito alto, criando geometria pesada; mantenha Segments em 1 ou 2. Muitos esquecem de ativar a simetria e modelam só um lado — passe verificando se Symmetry: Object X está marcado. Alguns puxam o vértice errado e deformam o corpo todo; ensine a desfazer com Ctrl+Z sem medo. Por fim, vários esquecem de salvar — repita o lembrete do Ctrl+S em voz alta a cada rodada pela sala.`,
  exercicios: [
    {
      titulo: `Primeira linha de corte`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Aquecimento individual para todos dominarem o Insert Edge Loop antes de detalhar. Demonstre uma vez e deixe repetirem. Verifique se cada aluno consegue ver a linha amarela girar ao redor do modelo antes de clicar.`,
      atividade: `Abra seu personagem. Vá em Mesh Tools > Insert Edge Loop Tool e adicione duas linhas de corte na região onde ficará o rosto. Pressione Enter para finalizar a ferramenta.`,
      gabarito: `O modelo deve mostrar duas novas linhas de arestas dando a volta completa, paralelas entre si, na região do rosto. Se a linha não der a volta inteira, o aluno clicou numa aresta solta; oriente a clicar numa aresta que pertença ao corpo principal.`,
    },
    {
      titulo: `Cantos macios com Bevel`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Foco em suavizar cantos. Lembre de manter Segments baixo (1 ou 2). Mostre o antes e depois no projetor para o aluno perceber a diferença de aparência.`,
      atividade: `Selecione um canto reto do seu modelo (botão direito > Edge). Vá em Edit Mesh > Bevel e arraste o valor Fraction até o canto ficar levemente arredondado. Mantenha Segments em 1.`,
      gabarito: `O canto antes reto agora aparece chanfrado/arredondado, sem multiplicar a geometria. Acertou quem deixou o canto suave usando apenas 1 segmento; quem criou muitas faces extras deve refazer com Segments menor.`,
    },
    {
      titulo: `Olhos que aparecem dos dois lados`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Aqui entra a simetria. Confira que Symmetry > Object X está ativado na ferramenta Move antes do aluno começar a puxar vértices. Este é o ponto-chave da aula: economizar esforço com espelhamento.`,
      atividade: `Ative a simetria (Move > Tool Settings > Symmetry: Object X). Insira edge loops onde ficarão os olhos e puxe os vértices de UM lado para criar um relevo de olho. Confira se o outro lado acompanha sozinho.`,
      gabarito: `Os dois olhos devem surgir idênticos e espelhados, mesmo o aluno tendo mexido apenas em um lado. Se só um lado mudou, a simetria não estava ativada — reative e oriente a desfazer e refazer.`,
    },
    {
      titulo: `Detalhe a dois`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Trabalho colaborativo de revisão. Forme duplas. Um observa enquanto o outro executa, depois trocam. A dupla deve discutir qual característica deixa o personagem mais expressivo. Estimule feedback gentil e específico.`,
      atividade: `Em dupla, escolham juntos UMA característica para cada personagem (orelhas, nariz ou acessório). Um aluno modela usando edge loops, Bevel e simetria enquanto o colega confere os passos e sugere ajustes. Depois invertam os papéis.`,
      gabarito: `Cada personagem da dupla ganhou uma característica nova, simétrica e com cantos suaves. A dupla deve saber explicar qual ferramenta usou em cada etapa. Sinal de acerto: ambos os modelos têm o detalhe nos dois lados e o colega soube apontar um ajuste.`,
    },
    {
      titulo: `Meu personagem ganhou vida`,
      tipo: `Projeto curto`,
      tempo: `20 min`,
      guiaProfessor: `Síntese da aula. Cada aluno finaliza e apresenta. Reforce o uso do Mirror para garantir simetria perfeita. Reserve os últimos minutos para a roda de apresentação, onde cada um mostra e nomeia o detalhe que adicionou. Lembre de salvar.`,
      atividade: `Finalize seu personagem com pelo menos duas características marcantes (por exemplo, olhos e orelhas), usando Insert Edge Loop, Bevel e simetria. Use Mesh > Mirror no eixo X para garantir os dois lados iguais. Salve com Ctrl+S e apresente para a turma o detalhe favorito.`,
      gabarito: `O modelo final apresenta no mínimo duas características marcantes, simétricas e com cantos suaves, e está salvo. Na apresentação, o aluno consegue nomear o detalhe e dizer qual ferramenta usou. Acertou quem entrega um personagem reconhecível, equilibrado nos dois lados e sem cantos duros aparentes.`,
    },
  ],
};
