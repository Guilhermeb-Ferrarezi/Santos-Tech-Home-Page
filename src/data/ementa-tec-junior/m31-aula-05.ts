import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Lixando os Cantos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Observar a peça no Blender e arredondar cantos pontudos, endireitar partes tortas e engrossar partes finas para que ela fique bonita e não quebre na impressão 3D.`,
  descricao: `Nas aulas anteriores a turma já modelou a peça inteira no Blender, juntando blocos e formas com capricho. Mas, quando olhamos de pertinho, percebemos que ainda faltam ajustes: tem canto muito pontudo que machuca a mão e racha na impressora, tem parte torta que fica caindo para o lado, e tem pedaço tão fininho que parece um fio e pode quebrar fácil. A aula de hoje é como lixar uma madeira: a gente passa a "lixa digital" para deixar tudo liso, firme e seguro.

A ideia central é que uma peça bonita na tela nem sempre é uma peça forte na vida real. A impressora 3D constrói camada por camada, e cantos muito afiados ou paredes muito finas são justamente os lugares que mais falham. Por isso vamos usar três truques do Blender: o Bevel (chanfro), que arredonda e suaviza os cantos; mover vértices e faces no Edit Mode (Modo de Edição) para endireitar o que ficou torto; e engrossar partes finas para que a peça aguente o uso. Tudo de forma visual, olhando e comparando o "antes" e o "depois".

O professor demonstra cada truque no projetor, com uma peça de exemplo bem feinha de propósito (cheia de cantos pontudos e pernas finas). As crianças observam o problema, sugerem o conserto e depois aplicam na própria peça. O foco é o olhar de detetive: aprender a enxergar o que precisa de ajuste antes de mandar imprimir. Não é sobre criar coisas novas hoje, e sim sobre cuidar e melhorar o que já existe.

Por ser uma turma pequena, de até dez alunos, dá para acompanhar cada peça de perto e ajudar individualmente a girar o modelo, achar os cantos perigosos e aplicar o arredondamento na medida certa. No fim da aula, cada criança terá uma peça mais lisa, mais reta e mais resistente, um passo importante para o modelo ficar pronto para imprimir nas próximas semanas.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo da peça de cada criança carregado`,
    `Projetor ou TV ligado ao computador do professor para demonstrar cada truque ao vivo`,
    `Uma peça de exemplo "feinha" de propósito, com cantos pontudos e pernas finas, para mostrar o antes e o depois`,
    `Uma peça de exemplo já ajustada (lisinha e firme) para comparar com a feinha`,
    `Objeto físico real para tocar (um brinquedo de plástico com cantos arredondados) e mostrar por que arredondar é melhor`,
    `Folha de "caça aos cantos" impressa, com desenhos de peças para as crianças circularem os pontos perigosos`,
    `Mouse com rodinha em cada computador (ajuda muito a girar e dar zoom no modelo)`,
  ],
  conceitosChave: [
    `Canto pontudo — a quina bem afiada da peça, igual à ponta de um lápis; arredondar deixa ela mais segura e mais forte.`,
    `Bevel (chanfro) — o truque do Blender que lixa os cantos e os deixa arredondados, como passar a mão numa borracha sem quebrar.`,
    `Parede fina — um pedaço da peça tão magrinho que parece um fio; engrossar deixa ele firme para não quebrar na impressão.`,
    `Edit Mode (Modo de Edição) — o jeito do Blender em que a gente entra "dentro" da forma para mexer nos cantinhos, nas linhas e nas faces.`,
    `Vértice — cada pontinho que junta as linhas da peça; mover um vértice é como puxar a pontinha de um desenho para endireitar.`,
    `Engrossar — deixar uma parte mais gorda e firme, igual a trocar um palitinho fraco por uma colher resistente.`,
    `Imprimível — quando a peça está lisa, reta e firme o bastante para a impressora 3D construir sem rachar nem desabar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender para dar esta aula; basta dominar três ações simples e treiná-las uma vez antes da turma. A primeira é o Bevel (chanfro), que arredonda os cantos. A segunda é mover vértices e faces no Edit Mode (Modo de Edição), para endireitar partes tortas. A terceira é engrossar partes finas. O conceito por trás de tudo: a impressora 3D constrói a peça camada por camada, e cantos muito afiados ou paredes muito finas são os pontos que mais quebram. Arredondar e engrossar deixa a peça forte. Antes da aula, abra a sua peça de exemplo feinha e pratique cada passo, para narrar com segurança. Tenha também a peça já ajustada aberta numa segunda janela ou arquivo, para comparar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Reúna a turma de frente para o projetor. Mostre a peça feinha ao lado da peça lisinha e pergunte: "Qual destas você acha que vai quebrar na impressora? Por quê?". Passe o brinquedo de plástico de mão em mão e diga que ele tem cantos arredondados de propósito. Explique a frase do dia: "Hoje a gente lixa os cantos para a peça sair bonita e não quebrar".

15 min — Conteúdo novo guiado (demonstração). No seu Blender, com a peça feinha aberta, faça três truques devagar, narrando. Truque 1, arredondar: clique na peça, aperte Tab para entrar no Edit Mode (Modo de Edição); no topo da janela escolha o modo de selecionar por arestas (o segundo ícone, Edge); selecione um canto pontudo; aperte Ctrl+B (atalho do Bevel), mexa o mouse devagar para arredondar e clique para confirmar. Mostre o antes e o depois. Truque 2, endireitar: ainda no Edit Mode, escolha selecionar por vértices (Vertex), clique num pontinho torto, aperte G (de Grab/Mover) e arraste para alinhar; clique para soltar. Truque 3, engrossar: aperte Tab para voltar ao Object Mode (Modo de Objeto), selecione a perninha fina e, com a ferramenta Scale (Escala, atalho S), engrosse só aquela parte. Salve com Ctrl+S.

25 min — Mão na massa. Cada criança abre a própria peça e vira detetive: gira o modelo com o botão do meio do mouse e procura cantos pontudos, partes tortas e pedaços finos. Passe de mesa em mesa. Em cada peça, ajude a aplicar pelo menos um Bevel num canto, a endireitar um vértice e a engrossar uma parte fina. Peça que salvem (Ctrl+S) ao terminar cada conserto. Lembre sempre: pouquinho de cada vez, comparando o antes e o depois.

10 min — Desafio e compartilhar. Cada criança mostra no projetor (ou na própria tela) o canto que mais melhorou e conta o que fez: arredondou, endireitou ou engrossou. O desafio é achar um último canto pontudo escondido e arredondá-lo na frente da turma. Encerre dizendo que a peça está ficando lisinha e forte, pronta para os próximos passos do mês.

## Como explicar para crianças

Use a analogia da lixa de madeira: "Quando a gente faz um brinquedo de madeira, ele sai cheio de farpas e pontas. A gente passa a lixa até ficar liso e gostoso de pegar. No Blender, o Bevel é a nossa lixa." Para paredes finas, diga: "Uma perninha fina é igual a um palito de sorvete: fininho demais quebra fácil. Vamos engrossar para virar uma perna de mesa, bem firme." Para partes tortas: "Está torto igual a uma torre que vai cair? Vamos puxar o pontinho de volta para o lugar certo." Mostre sempre o antes e o depois para a melhora ficar visível.

## Erros comuns e como ajudar

O erro mais comum é esquecer de entrar no Edit Mode (Modo de Edição); avise que o Bevel de canto precisa do Tab apertado primeiro. Muitas crianças exageram no arredondamento e a peça fica derretida; oriente a mexer o mouse só um pouquinho e clicar logo. Outras selecionam a peça inteira em vez de um canto só; ajude a clicar exatamente na aresta certa. Há quem perca a peça de vista ao girar demais; ensine a apertar a tecla Home para enquadrar tudo de novo. Por fim, muitos esquecem de salvar; crie o hábito de apertar Ctrl+S depois de cada conserto.`,
  exercicios: [
    {
      titulo: `Caça aos cantos perigosos`,
      tipo: `Observação com folha impressa`,
      tempo: `6 minutos`,
      guiaProfessor: `Faça no aquecimento, antes de abrir o Blender. Distribua a folha de "caça aos cantos" com desenhos de peças. Peça que cada criança circule os pontos pontudos e finos. Passe conferindo e elogiando cada descoberta. Serve para treinar o olhar de detetive.`,
      atividade: `Na sua folha, circule todos os cantos pontudos e todas as partes finas que você achar nas peças desenhadas. São esses os lugares que mais quebram na impressora.`,
      gabarito: `Estão certos os círculos feitos nas quinas afiadas (pontas de lápis) e nas partes magrinhas (como pernas finas e fios). Qualquer canto pontudo ou parede fina marcado é uma resposta válida; o importante é a criança reconhecer que esses pontos são os mais frágeis.`,
    },
    {
      titulo: `Forte ou fraca?`,
      tipo: `Pergunta oral de comparação`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre no projetor a peça feinha e a peça lisinha lado a lado. Faça a turma votar levantando a mão. Aceite respostas parecidas e explique o porquê com calma, ligando à impressão camada por camada.`,
      atividade: `Olhe as duas peças no telão. Levante a mão e diga: qual delas vai sair mais forte e bonita na impressora 3D? Por quê?`,
      gabarito: `A peça mais forte é a lisinha, com cantos arredondados e partes engrossadas. Ela é melhor porque cantos pontudos racham e paredes finas quebram quando a impressora constrói a peça camada por camada. A peça feinha tende a falhar.`,
    },
    {
      titulo: `Meu primeiro Bevel`,
      tipo: `Mão na massa guiada no Blender`,
      tempo: `12 minutos`,
      guiaProfessor: `Sente-se ao lado de cada criança ou guie a turma toda em ritmo único. Confira que entraram no Edit Mode com Tab e escolheram selecionar por arestas (Edge). Conduza o atalho Ctrl+B do Bevel, lembrando de mexer o mouse só um pouquinho. Peça que salvem com Ctrl+S no final.`,
      atividade: `Na sua peça, aperte Tab para entrar no Modo de Edição, escolha selecionar por arestas, clique num canto pontudo e aperte Ctrl+B. Mexa o mouse devagarinho para arredondar e clique para confirmar. Depois salve com Ctrl+S.`,
      gabarito: `O exercício está certo quando o canto antes pontudo fica visivelmente arredondado e suave, sem ter "derretido" a peça inteira. Sinal de êxito: dá para ver o antes pontudo virar um depois liso, e o arquivo foi salvo.`,
    },
    {
      titulo: `Endireitando a parte torta`,
      tipo: `Prática individual com correção visual`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude cada criança a achar uma parte torta girando o modelo com o botão do meio do mouse. No Edit Mode, oriente a escolher selecionar por vértices (Vertex), clicar no pontinho fora do lugar e usar o atalho G (Mover) para alinhar. Reforce comparar o antes e o depois.`,
      atividade: `Gire a sua peça e ache uma parte que ficou torta. No Modo de Edição, escolha selecionar por vértices, clique no pontinho fora do lugar, aperte G e arraste até deixar reto. Clique para soltar e salve.`,
      gabarito: `O exercício está correto quando a parte antes torta fica alinhada e reta, com o vértice no lugar certo. Não existe uma única posição exata: vale qualquer ajuste que deixe a peça visivelmente mais reta e firme do que estava antes.`,
    },
    {
      titulo: `Engrossar para não quebrar`,
      tipo: `Desafio final aplicado`,
      tempo: `12 minutos`,
      guiaProfessor: `É o passo mais avançado da aula. Ajude a criança a identificar a parte mais fina da peça (a candidata a quebrar). Volte ao Object Mode (Tab), selecione só aquela parte e use Scale (S) para engrossar com cuidado, sem deformar o resto. Confirme com a turma o antes e o depois e oriente salvar com Ctrl+S.`,
      atividade: `Ache a parte mais fininha da sua peça, aquela que parece um palito. Selecione essa parte e use a ferramenta Escala (atalho S) para engrossá-la até ficar firme, sem mexer no resto. Salve quando terminar e mostre o antes e o depois para a turma.`,
      gabarito: `O desafio é cumprido quando a parte que antes era fina como um palito fica visivelmente mais grossa e firme, parecendo uma perna de mesa, sem deformar o resto da peça. Sinal de êxito: a parte frágil vira uma parte resistente, e a peça está mais pronta para imprimir.`,
    },
  ],
};
