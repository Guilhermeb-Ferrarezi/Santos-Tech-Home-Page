import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Proporção e Equilíbrio",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Praticar o ajuste de proporção e a simetria do personagem e dos itens usando imagens de referência e a ferramenta de espelhamento (mirror), garantindo tamanhos relativos coerentes e equilíbrio entre os assets do jogo.`,
  descricao: `Nesta aula os alunos aprendem a deixar o personagem e os itens equilibrados. Equilíbrio, aqui, tem dois sentidos que se completam. O primeiro é a proporção: os tamanhos relativos entre as partes precisam combinar, como os dois braços terem o mesmo comprimento e a cabeça ter um tamanho coerente com o corpo. O segundo é a simetria: muitos personagens e objetos têm um lado esquerdo igual ao direito, e quando esses lados não batem, o olho percebe na hora que algo está torto.

A grande novidade da aula é a ferramenta de espelhamento, chamada de mirror no Maya. Em vez de modelar manualmente o braço esquerdo e depois o direito (o que quase sempre gera diferenças), o aluno modela apenas metade e pede ao programa para criar a outra metade espelhada de forma perfeita. Isso economiza tempo, evita erros e garante simetria exata. Para isso, é importante entender o eixo de simetria, uma linha imaginária no centro do objeto que separa os dois lados iguais.

A aula também retoma o uso de imagens de referência. Uma referência é qualquer foto ou desenho do mundo real usado como guia. Colocando a referência atrás do modelo, o aluno consegue conferir se os tamanhos relativos estão certos: se o braço está comprido demais, se a cabeça ficou grande, se o item é coerente com a mão do personagem. A referência funciona como um molde por cima do qual o aluno confere o trabalho.

Ao final, cada aluno terá personagens e itens com proporções corrigidas e lados simétricos, prontos para receberem detalhes nas próximas aulas. Esse equilíbrio é o que faz um asset parecer cuidado e profissional, em vez de improvisado, e é uma habilidade que os alunos vão usar em todos os modelos do projeto do jogo.`,
  materiais: [
    `Computadores com Maya instalado (um por aluno)`,
    `Projetor ou TV para a demonstração do professor`,
    `Arquivo de exemplo com o personagem e os itens modelados nas aulas anteriores`,
    `Imagens de referência frontais (personagem e objetos do dia a dia, de frente, mostrando os dois lados)`,
    `Folha impressa com um checklist de proporção e simetria (braços iguais, cabeça coerente, lados batendo)`,
    `Mouse com três botões (recomendado para navegar no Maya)`,
  ],
  conceitosChave: [
    `Proporção — relação de tamanho entre as partes de um mesmo objeto, como o braço em relação ao corpo.`,
    `Equilíbrio — sensação de que o modelo está harmônico, com partes coerentes e lados que se correspondem.`,
    `Simetria — quando o lado esquerdo de um objeto é igual ao lado direito, refletido como num espelho.`,
    `Eixo de simetria — linha imaginária no centro do objeto que separa os dois lados iguais.`,
    `Mirror (espelhamento) — comando do Maya que cria uma cópia refletida de uma metade para gerar o lado oposto.`,
    `Referência — foto ou desenho do mundo real colocado como guia para conferir tamanhos e formas.`,
    `Image Plane — plano onde a imagem de referência é exibida dentro da cena do Maya, atrás do modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista para conduzir esta aula: basta dominar três ideias e um comando. A primeira ideia é proporção, ou seja, o tamanho relativo das partes (os dois braços iguais, a cabeça coerente com o corpo). A segunda é simetria, quando o lado esquerdo e o direito são iguais. A terceira é o eixo de simetria, a linha central que separa esses dois lados; no Maya esse centro fica no eixo X igual a zero, no meio da grade. O comando estrela é o Mirror, que copia uma metade e cria a outra refletida automaticamente.

Antes da aula, abra o arquivo de exemplo e localize o menu Mesh, onde fica a opção Mirror (em algumas versões aparece como Mesh > Mirror ou Modify > Mirror). Teste o caminho com um objeto simples: selecione metade de um modelo e aplique Mirror para ver o lado oposto surgir. Confira também como inserir uma imagem de referência: no painel de uma vista (por exemplo a vista de frente, tecla 1 do teclado numérico ou menu Panels), use View > Image Plane > Import Image. Deixe uma imagem frontal já separada para a turma.

## Passo a passo da aula (ritmo 10/15/25/10, com o passo a passo exato)

Aquecimento (10 min): mostre no projetor duas imagens de um mesmo personagem, uma com os lados batendo e outra com um braço maior que o outro. Pergunte qual parece bem-feito e por quê. Apresente as palavras proporção, equilíbrio e simetria. Peça que cada aluno abra o Maya e o arquivo com seu personagem e seus itens.

Conteúdo novo guiado (15 min): com todos olhando o projetor, mostre como colocar a referência. Vá em View > Image Plane > Import Image e escolha a imagem frontal; posicione-a atrás do modelo na vista de frente. Em seguida ensine o espelhamento: selecione o objeto, vá em Mesh > Mirror e mostre as opções do espelhamento (eixo X, direção e a opção de unir as bordas no centro, chamada Merge). Explique que o eixo de simetria deve estar em X igual a zero, no meio da grade, para os dois lados se encaixarem. Demonstre desfazer com Ctrl Z se o lado nascer no lugar errado e apenas trocar a direção (de positivo para negativo).

Mão na massa (25 min): cada aluno aplica o que viu no próprio personagem. Roteiro: 1) abrir a vista de frente e importar a imagem de referência como Image Plane; 2) comparar o modelo com a referência e corrigir proporções com a ferramenta Scale (tecla R), deixando braços do mesmo tamanho e a cabeça coerente; 3) selecionar uma metade do objeto e aplicar Mesh > Mirror para gerar o lado simétrico; 4) conferir, no centro, se as bordas se uniram (Merge) e se não há buraco. Circule pela sala conferindo simetria e proporção.

Desafio e compartilhar (10 min): proponha o caça-assimetria. Cada dupla troca de computador e procura, no modelo do colega, uma parte fora de proporção ou um lado que não bate. Quem encontrar ajuda a corrigir com Scale ou refazendo o Mirror. Termine com cada aluno mostrando o personagem simétrico para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a simetria é como dobrar uma folha ao meio: se os dois lados se encaixam, está simétrico. O eixo de simetria é essa dobra, a linha do meio. Compare o Mirror com um espelho de verdade: você levanta a mão e o reflexo levanta a mão igualzinha, na mesma hora. Explique proporção perguntando se as partes combinam: um braço bem maior que o outro parece estranho, como um sapato gigante num pé só. Reforce que a referência é um molde: a gente coloca a foto atrás e confere se o modelo cabe por cima dela.

## Erros comuns e como ajudar

O lado espelhado nasce em cima do original: o eixo de simetria não está no centro; oriente a mover o objeto para o meio da grade (X igual a zero) antes de aplicar o Mirror, ou trocar a direção do espelhamento. Aparece um buraco ou uma emenda no centro: faltou unir as bordas; refaça o Mirror com a opção Merge ligada. O aluno espelha o objeto inteiro e fica com quatro braços: lembre que se espelha apenas metade; peça Ctrl Z e oriente a selecionar só um lado. Proporção fica estranha após o Scale: ele mexeu em um eixo só; mostre que arrastar o cubo central da ferramenta Scale mantém a forma. A referência some atrás do modelo: ajuste a transparência do Image Plane ou alterne a vista (tecla 1 do teclado numérico) para a vista de frente.`,
  exercicios: [
    {
      titulo: `Caça-simetria nas imagens`,
      tipo: `Discussão em grupo`,
      tempo: `5 min`,
      guiaProfessor: `Use no aquecimento. Mostre no projetor pares de imagens de personagens: um com lados iguais e outro com um braço maior, uma orelha mais alta ou a cabeça torta. Conduza a votação a mão levantada e peça que justifiquem em uma frase.`,
      atividade: `Olhe cada par de imagens e aponte qual personagem está simétrico e equilibrado. Diga em uma frase o que está errado no personagem desequilibrado.`,
      gabarito: `O personagem correto é aquele em que o lado esquerdo corresponde ao direito (braços do mesmo tamanho, olhos na mesma altura) e a cabeça tem tamanho coerente com o corpo. Erros típicos: um braço maior que o outro (proporção errada) e um lado mais alto que o outro (falta de simetria). O critério é imaginar uma linha no meio e conferir se os dois lados batem.`,
    },
    {
      titulo: `Colocando a referência na cena`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto no projetor. Garanta que cada aluno está na vista de frente (tecla 1 do teclado numérico ou menu Panels). Acompanhe o caminho View > Image Plane > Import Image e confirme que a imagem aparece atrás do modelo.`,
      atividade: `Abra a vista de frente, importe a imagem de referência como Image Plane e posicione-a atrás do seu personagem. Compare: alguma parte do modelo está maior ou menor do que na referência?`,
      gabarito: `Passos: ir para a vista de frente; menu View > Image Plane > Import Image; escolher a imagem frontal; posicionar atrás do modelo. A resposta sobre as diferenças varia conforme o modelo. Exemplo de resposta válida: "Na referência os braços são mais curtos, o meu está comprido demais." O importante é o aluno conseguir exibir a referência e usá-la para conferir tamanhos.`,
    },
    {
      titulo: `Corrigindo proporções com a referência`,
      tipo: `Exercício individual`,
      tempo: `10 min`,
      guiaProfessor: `Reforce a comparação constante com a referência. Mostre a ferramenta Scale (tecla R) e lembre de arrastar o cubo central para manter a forma. Use o checklist impresso (braços iguais, cabeça coerente) como apoio.`,
      atividade: `Usando a imagem de referência como guia, corrija as proporções do seu personagem com a ferramenta Scale: deixe os braços do mesmo comprimento e a cabeça coerente com o corpo. Marque cada item do checklist conforme for acertando.`,
      gabarito: `Procedimento: comparar cada parte com a referência; selecionar a parte fora de proporção; pressionar R; arrastar o cubo central da ferramenta Scale (nunca apenas um eixo) até o tamanho bater com a referência. Resultado esperado: os dois braços do mesmo comprimento, a cabeça coerente com o corpo e todos os itens do checklist marcados. Sucesso = o modelo encaixa por cima da referência.`,
    },
    {
      titulo: `Espelhando metade com o Mirror`,
      tipo: `Mão na massa`,
      tempo: `12 min`,
      guiaProfessor: `Circule conferindo o centro de cada modelo. Lembre que se espelha apenas metade e que o eixo de simetria deve estar em X igual a zero. Verifique se a opção Merge (unir bordas) está ligada para não sobrar emenda no meio.`,
      atividade: `Selecione apenas uma metade do seu personagem (ou de um item simétrico) e use Mesh > Mirror para criar o lado oposto. Confira se as bordas se uniram no centro, sem buraco e sem emenda.`,
      gabarito: `Passos: posicionar o objeto no centro da grade (eixo X igual a zero); selecionar somente uma metade; ir em Mesh > Mirror; escolher o eixo X e a direção correta; manter a opção Merge ligada para unir as bordas. Resultado: o lado espelhado nasce perfeitamente igual ao original, encaixado no centro, sem buraco e sem emenda. Se o lado nascer sobreposto, desfazer com Ctrl Z e trocar a direção (de positivo para negativo).`,
    },
    {
      titulo: `Caça-assimetria em dupla`,
      tipo: `Desafio em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e peça que troquem de computador. Oriente a usar o eixo central como referência para encontrar lados que não batem. Premie quem identificar e corrigir uma assimetria ou uma proporção errada com Scale ou refazendo o Mirror.`,
      atividade: `Troque de computador com seu colega e procure no modelo dele uma parte fora de proporção ou um lado que não bate com o outro. Encontre pelo menos um problema e corrija com a ferramenta Scale ou refazendo o Mirror.`,
      gabarito: `O par deve usar a linha central (eixo de simetria) para comparar os dois lados e a referência para conferir proporções. Correção possível: selecionar a parte desproporcional, pressionar R e ajustar com o cubo central da ferramenta Scale; ou, se o lado não bate, apagar a metade errada e refazer Mesh > Mirror com Merge ligado e o objeto centralizado em X igual a zero. Sucesso = o modelo do colega fica com os dois lados iguais e as partes em proporção coerente.`,
    },
  ],
};
