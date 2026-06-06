import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Ajustando o Modelo para Imprimir",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Preparar o personagem para a impressão real ajustando a escala correta, garantindo uma boa base de apoio na mesa e identificando as partes frágeis antes de fatiar.`,
  descricao: `Nesta aula o aluno dá um passo decisivo: deixar o personagem do jogo realmente pronto para sair da tela e virar um objeto na mão. Na Aula 3 a turma conheceu o Bambu Studio, importou o modelo e passeou pelos botões principais. Hoje vamos colocar a mão na massa de verdade e ajustar três coisas que decidem se a impressão vai dar certo ou falhar: o tamanho real do personagem, a forma como ele se apoia na mesa de impressão e as partes mais finas que podem quebrar.

O primeiro grande ajuste é a escala. Um personagem que no jogo parece gigante pode chegar ao Bambu Studio do tamanho de um grão de arroz, ou então enorme demais para caber na mesa. O aluno vai aprender a ler as medidas em milímetros e a usar a ferramenta de escala para deixar a figura num tamanho que fique bonito, imprima rápido e caiba na placa. A regra de ouro desta idade é simples: nem tão pequeno que os detalhes somem, nem tão grande que gaste plástico e horas demais.

O segundo ajuste é a base de apoio. A impressora 3D constrói o objeto de baixo para cima, camada por camada, como empilhar panquecas. Se o personagem tocar a mesa só pela ponta do pé, ele balança e descola no meio da impressão. Por isso o aluno vai aprender a girar e a "deitar" o modelo para que ele apoie por uma área plana e larga, dando estabilidade. Vamos usar a função de colocar o objeto sobre a mesa e o giro nos eixos para encontrar a melhor posição.

O terceiro ponto é olhar com olho clínico para as partes frágeis: espadas finas, antenas, dedos, capas soltas. Essas partes finas são justamente as que mais quebram. O aluno aprende a identificá-las e a pensar em soluções (engrossar, deitar, ou aceitar que vão precisar de suporte). Para fechar, a turma pratica o arranjo de vários itens do jogo na mesma mesa, de forma organizada e sem encostar um no outro, para economizar tempo de impressão. Tudo isso prepara o terreno para o fatiamento, que é o foco da Aula 5.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e funcionando (um por aluno)`,
    `Projetor ou TV para o professor demonstrar cada clique no Bambu Studio em tela grande`,
    `Arquivos de exemplo .stl ou .3mf dos personagens exportados do Maya (um por aluno, da Aula 2 deste mês)`,
    `Arquivo extra com vários itens pequenos do jogo (moeda, espada, escudo, chave) para praticar o arranjo na mesa`,
    `Régua ou trena na sala para os alunos compararem milímetros com o tamanho real das coisas`,
    `Um objeto impresso de exemplo (já pronto) e, se houver, uma peça que quebrou numa parte fina, para mostrar o problema na prática`,
    `Folha impressa com a tabela de tamanhos sugeridos (pequeno, médio, grande) e tempo aproximado de cada um`,
  ],
  conceitosChave: [
    `Escala — o tamanho do modelo. Mudar a escala deixa o personagem maior ou menor sem deformar a forma.`,
    `Milímetro (mm) — a unidade que o Bambu Studio usa para medir. Cem milímetros são dez centímetros, do tamanho de uma mão.`,
    `Mesa de impressão (placa) — a superfície quadrada onde a peça é construída. Tudo precisa caber dentro dela.`,
    `Base de apoio — a parte do modelo que toca a mesa. Quanto mais larga e plana, mais firme fica a impressão.`,
    `Orientação — a posição do modelo na mesa (em pé, deitado, girado). A orientação certa evita quedas e quebras.`,
    `Parte frágil — pedaço fino e saliente (espada, antena, dedo) que quebra fácil e exige cuidado ou suporte.`,
    `Arranjo (auto-arrange) — organizar várias peças na mesma mesa sem que se toquem, para imprimir tudo de uma vez.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar impressão 3D. Precisa entender três ideias e decorar quatro botões. As três ideias: tamanho (escala), apoio (base) e fragilidade (partes finas). Os quatro botões ficam na barra de ferramentas à esquerda do Bambu Studio: a setinha de Mover (Move), a seta curva de Girar (Rotate), a caixa de Escala (Scale) e a opção de colocar a peça na mesa, chamada "Place on Face" ou "Drop to bed". Ao selecionar o modelo com um clique, aparecem caixas com números em milímetros; é ali que se digita o tamanho. Antes da aula, abra o Bambu Studio, importe um modelo, clique na ferramenta Scale e mude o tamanho uma vez para ganhar confiança. Lembre que a mesa da maioria das impressoras tem por volta de 256 por 256 milímetros, então a peça precisa caber nesse quadrado.

## Passo a passo da aula (ritmo 10/15/25/10, com o codigo exato)

10 min, aquecimento e revisão. Mostre na tela grande o personagem de um aluno importado no Bambu Studio. Pergunte: "Esse tamanho está bom? Ele vai ficar de pé na mesa? Tem alguma parte que pode quebrar?" Mostre a peça impressa de exemplo e, se tiver, a peça quebrada na parte fina. Aqui não há código de programação; o "código" da impressão é a sequência exata de cliques que vem a seguir.

15 min, conteúdo novo guiado. Faça na tela grande, devagar:
1. Clique uma vez no modelo para selecioná-lo (ele fica destacado).
2. Clique na ferramenta Scale (ícone da caixa). Aparecem três campos com o tamanho em milímetros. Deixe o cadeado de proporção ATIVADO para não deformar. Digite a altura desejada, por exemplo 60, e aperte Enter. O personagem muda de tamanho.
3. Clique na ferramenta Rotate (seta curva) e gire o modelo até ele ficar de pé ou deitado de forma estável.
4. Clique com o botão direito no modelo e escolha "Place on Face"; depois clique na face plana que deve tocar a mesa. O modelo "senta" na placa.
5. Olhe as partes finas. Gire a câmera (segure o botão do meio do mouse e arraste) e aponte espadas e antenas.

25 min, mão na massa. Cada aluno repete os passos no próprio personagem: ajusta a escala para um tamanho entre 40 e 80 milímetros, gira para achar a base mais larga, usa "Place on Face" e lista as partes frágeis. Quem terminar abre o arquivo extra com vários itens e usa o botão "Arrange" (auto-arranjo) para espalhar tudo na mesa sem encostar. Circule pela sala conferindo se as peças cabem na placa e estão bem apoiadas.

10 min, desafio e compartilhar. Cada aluno mostra ao colega do lado o personagem ajustado e diz o tamanho em milímetros, qual é a base de apoio e qual parte considera mais frágil. Faça uma rodada rápida de respostas.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Para escala: "Sessenta milímetros é mais ou menos do tamanho do seu dedo indicador." Para base de apoio: "Imagine empilhar moedas. Se a primeira moeda for pequena e torta, a pilha cai. A base é a primeira moeda." Para orientação: "Um boneco em pé num pé só cai; deitado ou de pé firme, não cai." Para parte frágil: "A ponta de um palito quebra fácil; o cabo grosso não. Procure os palitos do seu modelo." Repita sempre a pergunta-chave: "Esse personagem fica firme na mesa?"

## Erros comuns e como ajudar

O erro mais comum é mudar a escala com o cadeado de proporção desligado, deixando o personagem achatado ou esticado. Mostre o ícone do cadeado e mantenha ativado. Outro erro é deixar a peça maior que a mesa: ela fica vermelha ou cortada; basta reduzir a escala. Muitos esquecem de usar "Place on Face" e a peça fica flutuando ou tocando a mesa por um cantinho; lembre de "sentar" o modelo numa face plana. Há quem deixe o personagem em pé numa base estreitíssima; sugira deitar. Por fim, ao arranjar vários itens, alguns deixam as peças encostando; o botão "Arrange" separa tudo automaticamente.`,
  exercicios: [
    {
      titulo: `Lendo o tamanho em milímetros`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o personagem importado e selecionado. Mostre onde aparecem os números de tamanho ao clicar em Scale. Tenha uma régua à mão para comparar milímetros com o mundo real.`,
      atividade: `Selecione seu personagem e clique na ferramenta Scale. Leia em voz baixa a altura atual em milímetros. Compare com a régua: ele é maior ou menor que o seu dedo? Anote a altura atual numa folha.`,
      gabarito: `O aluno deve abrir a ferramenta Scale e identificar corretamente a altura em milímetros mostrada no campo de tamanho. Resposta esperada: um número em mm anotado (por exemplo, "altura atual: 23 mm") e a comparação correta com a régua (23 mm é menor que o dedo indicador, que tem cerca de 60 a 70 mm). Se o aluno confundir milímetro com centímetro, lembre que 10 mm valem 1 cm.`,
    },
    {
      titulo: `Ajustando a escala sem deformar`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Reforce que o cadeado de proporção deve ficar ATIVADO. Mostre o ícone do cadeado antes de começar. Confirme que a peça final cabe na mesa de 256 por 256 mm.`,
      atividade: `Com o cadeado de proporção ativado, mude a altura do seu personagem para um valor entre 40 e 80 milímetros e aperte Enter. Confira se ele continua com a forma certa (sem achatar nem esticar) e se cabe inteiro na mesa.`,
      gabarito: `O personagem deve ficar com altura entre 40 e 80 mm, mantendo a proporção (não achatado nem esticado) porque o cadeado estava ativado, e caber dentro do quadrado da mesa sem ficar vermelho. Caminho correto: selecionar o modelo, abrir Scale, conferir o cadeado ativo, digitar o valor no campo de altura e apertar Enter. Se a peça deformar, o cadeado estava desligado; se ficar vermelha, é grande demais e deve ser reduzida.`,
    },
    {
      titulo: `Achando a melhor base de apoio em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Um aluno gira o modelo com a ferramenta Rotate e usa "Place on Face"; o outro confere se a base ficou larga e plana girando a câmera. Depois trocam.`,
      atividade: `Em dupla, escolham um personagem e girem ele com a ferramenta Rotate para testar duas posições diferentes na mesa. Usem "Place on Face" para apoiar numa face plana. Decidam juntos qual posição dá a base mais larga e firme e expliquem por quê.`,
      gabarito: `A dupla deve escolher a orientação cuja área de contato com a mesa é a mais larga e plana (por exemplo, deitar o personagem ou apoiá-lo pelos dois pés, em vez de equilibrá-lo numa ponta). Caminho: ferramenta Rotate para girar, botão direito e "Place on Face" para sentar na mesa. Justificativa esperada: "Esta posição é melhor porque a peça toca a mesa por uma área grande e plana, então não balança nem descola." Base estreita ou apoio por um único ponto é a escolha errada.`,
    },
    {
      titulo: `Caça às partes frágeis`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza a turma a girar a câmera (botão do meio do mouse) e observar o modelo de todos os ângulos. Anote no quadro as partes frágeis citadas (espada, antena, capa, dedo). Mostre, se tiver, a peça que quebrou numa parte fina.`,
      atividade: `Gire a câmera ao redor do seu personagem e procure as partes finas e saídas (espadas, antenas, dedos, capas). Em roda, cada aluno mostra o modelo e aponta a parte que considera mais frágil, dizendo uma ideia para protegê-la: engrossar, deitar ou usar suporte.`,
      gabarito: `Não há resposta única, mas o aluno deve identificar pelo menos uma parte fina e saliente (espada, antena, dedo, capa) e propor uma solução coerente. Exemplos válidos: "A espada é fina e fica em pé, então vou deitar o personagem para ela não quebrar"; "A antena é frágil, vou engrossar um pouco no modelo." Resposta a melhorar: apontar uma parte grossa e firme como frágil, sem justificativa. O professor reforça que partes finas e saídas são as que mais quebram.`,
    },
    {
      titulo: `Arrumando vários itens na mesma mesa`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Use o arquivo extra com vários itens do jogo (moeda, espada, escudo, chave). Mostre o botão "Arrange" (auto-arranjo) e explique que ele separa as peças sozinho. Confira se nada está encostando nem saindo da mesa.`,
      atividade: `Abra o arquivo com os vários itens do jogo. Ajuste a escala de cada um para um tamanho parecido e use o botão "Arrange" para espalhá-los na mesa. Confira se nenhuma peça encosta na outra e se todas cabem na placa. Salve o arranjo final.`,
      gabarito: `O resultado deve ter todas as peças dentro da mesa, com espaço entre elas e nenhuma encostando ou cortada pela borda (sem partes vermelhas). Caminho: importar o arquivo, ajustar a escala de cada item, clicar em "Arrange" para o programa separar tudo automaticamente e salvar. Se duas peças estiverem grudadas, clicar em "Arrange" novamente resolve; se alguma sair da mesa, é preciso reduzir a escala ou mover para dentro do quadrado.`,
    },
  ],
};
