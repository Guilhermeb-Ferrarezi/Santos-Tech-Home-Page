import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Polindo a Animação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar e refinar todas as animações do mês — idle, caminhada, moeda e explosão — corrigindo timing, suavizando quadros travados e padronizando paleta e tamanho para que tudo fique consistente.`,
  descricao: `Nesta aula o aluno deixa de criar coisas novas e vira o crítico do próprio trabalho. Durante o mês ele animou um personagem parado (idle), um ciclo de caminhada, o brilho de uma moeda e uma explosão. Cada animação nasceu numa aula diferente, então é normal que tenham ritmos diferentes, paletas levemente diferentes e tamanhos que não combinam. Polir é justamente alinhar tudo isso: fazer as quatro animações parecerem parte do mesmo jogo.

O primeiro alvo é o timing. No Aseprite, cada quadro tem uma duração em milissegundos, e é ela que faz a animação parecer rápida, lenta ou travada. Um idle deve respirar devagar; uma explosão precisa estourar e sumir rápido. Reproduzindo a animação em loop e ajustando a duração quadro a quadro, o aluno sente onde o movimento "engasga" e corrige. Muitas vezes o problema é um único quadro com tempo errado ou um salto grande demais entre duas poses.

O segundo alvo é a suavização. Quando dois quadros são muito diferentes, o olho percebe um pulo. A solução é adicionar um quadro intermediário (um inbetween) ou ajustar alguns pixels para que a passagem fique macia. Aqui o aluno aprende que poucos pixels no lugar certo valem mais que muitos quadros bagunçados.

O terceiro alvo é a consistência visual: mesma paleta, mesmo tamanho de canvas e mesmo estilo de contorno em todos os sprites. Se a moeda usa um amarelo diferente do brilho do personagem, ou se a explosão é gigante perto da caminhada, o jogo parece "remendado". Padronizar a paleta com a janela Palette e igualar o tamanho com Sprite > Canvas Size é o que dá acabamento profissional ao conjunto.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, com os quatro arquivos do mês carregados (idle, caminhada, moeda, explosão)`,
    `Projetor para o professor demonstrar cada ajuste na tela grande, com o painel de Timeline bem visível`,
    `Pasta de exemplo com versões "antes e depois" das animações, mostrando uma travada e uma já polida`,
    `Uma paleta padrão do projeto salva em arquivo .gpl ou .aseprite, para todos importarem e usarem a mesma`,
    `Folha impressa com a "Lista de revisão" (checklist) dos quatro itens: timing, suavização, paleta e tamanho`,
    `Fones de ouvido por aluno (caso o projeto já tenha efeitos pensados) e mouse externo, que facilita o ajuste fino de pixels`,
  ],
  conceitosChave: [
    `Timing — a duração de cada quadro em milissegundos; é o que controla se a animação parece rápida, lenta ou travada.`,
    `Quadro travado — quadro com tempo errado ou muito diferente do vizinho, que faz a animação "engasgar" aos olhos.`,
    `Inbetween (quadro intermediário) — quadro extra colocado entre dois muito diferentes para suavizar a passagem do movimento.`,
    `Onion Skin — recurso do Aseprite que mostra o quadro anterior e o seguinte como sombras, ajudando a alinhar o movimento.`,
    `Paleta — o conjunto fixo de cores do projeto; usar a mesma paleta em tudo deixa as animações com a mesma identidade visual.`,
    `Canvas Size — o tamanho da tela do sprite; padronizar o tamanho faz os personagens e objetos combinarem entre si no jogo.`,
    `Consistência visual — quando todos os sprites compartilham paleta, tamanho e estilo, parecendo parte do mesmo jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Aseprite para dar esta aula. O foco é revisar, não criar. Antes de começar, abra um dos arquivos de exemplo e localize três coisas: a Timeline (a faixa de quadros, embaixo; se não aparecer, ative em View > Timeline), o painel Palette (à esquerda, as cores) e a barra de Play da animação. Saiba que cada quadro tem uma duração própria, em milissegundos, mostrada quando você passa o mouse sobre ele na Timeline. Reproduza a animação com a barra de espaço para ver o loop. Esses são todos os controles que a aula precisa.

## Passo a passo da aula

Aquecimento e revisão (10 min): peça que cada aluno abra os quatro arquivos do mês e reproduza cada um com a barra de espaço. No quadro, escreva a "Lista de revisão": timing, suavização, paleta, tamanho. Pergunte: "Qual das suas animações está mais travada?". Anote as respostas — isso já direciona o trabalho.

Conteúdo novo guiado (15 min): no projetor, mostre os quatro ajustes.
1. Timing: na Timeline, dê um duplo clique na duração de um quadro (o número embaixo dele) e digite um valor novo em milissegundos. Para mudar vários de uma vez, selecione os quadros segurando Shift e use Frame > Frame Properties. Reproduza com a barra de espaço e compare.
2. Suavização: ative o Onion Skin (ícone das duas cebolas no topo da Timeline) para ver os quadros vizinhos como sombra. Onde houver um pulo, clique com o botão direito num quadro e escolha New Frame para criar um intermediário, e ajuste alguns pixels.
3. Paleta: vá em Palette, clique no menu (ícone de três barras) e escolha Load Palette para importar a paleta padrão do projeto. Use Sprite > Color Mode para conferir o modo Indexed quando quiser travar as cores.
4. Tamanho: em Sprite > Canvas Size, defina o mesmo tamanho para todos (por exemplo, 32x32) e use a âncora central para não cortar o desenho.

Mão na massa (25 min): cada aluno passa a Lista de revisão nos quatro arquivos, corrigindo o que achar. Circule pela sala e peça que reproduzam antes e depois de cada mudança. Lembre de salvar com Ctrl + S a cada animação ajustada.

Desafio e compartilhar (10 min): cada aluno troca de lugar e reproduz as animações do colega, apontando na folha um item que melhorou e um que ainda pode melhorar. Dois ou três voluntários mostram o "antes e depois" no projetor.

## Como explicar de forma clara

Use imagens do dia a dia. Timing é "o ritmo da música": uma explosão é um tambor rápido, o idle é uma respiração lenta. O quadro travado é "o soluço da animação" — aquele tranco que estraga o movimento. O Onion Skin é "enxergar o fantasma do quadro de antes e do de depois" para saber onde colocar o próximo desenho. A paleta é "a caixa de lápis de cor combinada da turma": se cada um usar um amarelo diferente, o jogo fica remendado. Padronizar o tamanho é "deixar todos os bonecos na mesma escala", para a moeda não ficar maior que o herói.

## Erros comuns e como ajudar

A Timeline sumiu: ative em View > Timeline; é o erro mais comum no início. O aluno muda o tempo e nada acontece: ele provavelmente editou só um quadro achando que valia para todos — mostre Frame > Frame Properties com vários selecionados. A animação fica pior depois de "suavizar": em geral o aluno criou quadros demais; lembre que menos quadros bem feitos batem muitos quadros bagunçados. As cores mudam sozinhas: isso acontece no modo Indexed quando ele importa uma paleta diferente; oriente a carregar primeiro a paleta padrão e só depois desenhar. O desenho some ao mudar o Canvas Size: ele esqueceu a âncora central — mostre o seletor de âncora no diálogo. Por fim, reforce salvar com Ctrl + S após cada ajuste, porque revisar mexe em muitos arquivos e é fácil perder trabalho.`,
  exercicios: [
    {
      titulo: `Caçando o quadro travado`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Conduza no projetor enquanto cada aluno repete no próprio idle. O objetivo é só identificar e corrigir o timing de um quadro. Pare e confira se todos sabem reproduzir com a barra de espaço e dar duplo clique na duração antes de seguir.`,
      atividade: `Abra a sua animação de idle, reproduza em loop com a barra de espaço e encontre o quadro que parece "engasgar". Ajuste a duração dele em milissegundos até o movimento ficar fluido. Reproduza de novo para conferir.`,
      gabarito: `O aluno acertou se, ao reproduzir, o idle roda sem trancos visíveis e ele consegue apontar qual quadro corrigiu e que valor de duração usou. A animação está salva com Ctrl + S.`,
    },
    {
      titulo: `Suavizando com Onion Skin`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como ligar o Onion Skin (ícone das cebolas no topo da Timeline) e explique que as sombras são os quadros vizinhos. Cuide para que ninguém crie quadros demais — o erro clássico aqui é exagerar nos intermediários e bagunçar o movimento.`,
      atividade: `Na sua animação de caminhada, ative o Onion Skin e procure um ponto onde o personagem "pula" de uma pose para outra. Crie um quadro intermediário com New Frame e ajuste alguns pixels para suavizar a passagem.`,
      gabarito: `Está correto quando a transição que antes pulava agora passa de forma macia, com no máximo um quadro intermediário novo, e o aluno consegue mostrar o antes e o depois reproduzindo a animação. O arquivo está salvo.`,
    },
    {
      titulo: `Uma paleta para todos os sprites`,
      tipo: `Desafio`,
      tempo: `10 min`,
      guiaProfessor: `Este passo gera dúvida quando as cores "mudam sozinhas" no modo Indexed. Mostre Palette > Load Palette para importar a paleta padrão e explique a ordem: primeiro carregar a paleta, depois ajustar as cores. Deixe o aluno comparar a moeda com o brilho do personagem.`,
      atividade: `Importe a paleta padrão do projeto e aplique-a às quatro animações (idle, caminhada, moeda, explosão). Garanta que o amarelo da moeda e o brilho do personagem usem exatamente as mesmas cores da paleta.`,
      gabarito: `Correto quando as quatro animações usam a mesma paleta carregada e não há cores "fora" dela — a moeda e o brilho compartilham o mesmo amarelo. O aluno consegue mostrar a paleta idêntica nos quatro arquivos.`,
    },
    {
      titulo: `Revisão cruzada em dupla`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas e peça que troquem de computador. Entregue a folha "Lista de revisão". Reforce que apontar o que melhorar no trabalho do colega é ajuda, não crítica — todo estúdio revisa as animações em equipe. Circule garantindo anotações específicas, não vagas.`,
      atividade: `Reproduza as quatro animações do seu colega. Na folha, marque para cada uma se o timing, a suavização, a paleta e o tamanho estão bons, e anote pelo menos duas melhorias concretas. Depois volte ao seu projeto e aplique pelo menos uma melhoria que o colega sugeriu para você.`,
      gabarito: `Sucesso quando a dupla preencheu a Lista de revisão das quatro animações com pelo menos duas sugestões concretas, e cada aluno aplicou ao menos uma melhoria recebida — comprovado reproduzindo a animação corrigida. Anotações vagas como "está ruim" devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Conjunto consistente e padronizado`,
      tipo: `Projeto curto`,
      tempo: `20 min`,
      guiaProfessor: `Esta é a entrega final do polimento e une tudo. Explique que consistência é o que faz um jogo parecer profissional. Mostre onde padronizar o tamanho (Sprite > Canvas Size, com âncora central) e relembre os quatro itens da lista. Incentive ajustar, reproduzir e ajustar de novo.`,
      atividade: `Deixe as quatro animações como um conjunto: mesmo tamanho de canvas (por exemplo, 32x32), mesma paleta, timing fluido e transições suaves. Reproduza as quatro em sequência e confira se parecem do mesmo jogo. Salve cada arquivo com Ctrl + S.`,
      gabarito: `Concluído quando as quatro animações têm o mesmo tamanho de canvas, compartilham a mesma paleta, rodam sem quadros travados e com transições suaves — comprovado reproduzindo as quatro em seguida sem que nenhuma destoe. Todos os arquivos estão salvos.`,
    },
  ],
};
