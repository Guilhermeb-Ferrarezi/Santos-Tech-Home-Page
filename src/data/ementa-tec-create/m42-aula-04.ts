import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Materiais e prefabs do personagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar materiais e texturas no personagem importado do Blender, ajustar sua aparência na cena e transformá-lo em um Prefab reutilizável, usando o Claude para resolver problemas comuns de importação.`,
  descricao: `Nesta aula, os alunos pegam o modelo que importaram do Blender na aula passada e fazem ele parecer de verdade dentro do Unity. Um modelo recém-importado quase sempre chega cinza ou cor-de-rosa, sem as cores e texturas certas. O trabalho de hoje é dar cor e vida ao personagem por meio de materiais, que são as "tintas" que dizem ao Unity como cada parte da superfície deve aparecer.

No Unity, todo objeto que vemos na tela usa um material. O material guarda informações como a cor base, o brilho e as texturas (as imagens que cobrem o modelo, como a pele, a roupa ou o metal). Os alunos vão criar materiais na pasta de Assets, ajustar a cor e o brilho no painel Inspector e arrastar esses materiais sobre o personagem para ver a mudança acontecer na hora, na janela Scene. É um momento muito visual e gratificante: o personagem deixa de ser um boneco sem graça e ganha personalidade.

Depois de deixar o personagem bonito, vem o conceito mais importante da aula: o Prefab. Um Prefab é um molde do personagem já pronto, com modelo, materiais e ajustes salvos juntos. Com o Prefab, o aluno pode colocar várias cópias do mesmo personagem na cena sem refazer tudo, e qualquer mudança feita no molde original se reflete em todas as cópias. É a base de qualquer jogo profissional: criar uma vez, reutilizar muitas.

Por fim, os alunos vão arrumar a cena: posicionar o personagem no chão, conferir a iluminação e usar o Claude como assistente para resolver dúvidas reais, como texturas que somem na importação. Saber pedir ajuda de forma clara ao Claude é uma habilidade que eles levarão para todos os projetos do ano.`,
  materiais: [
    `Computadores com o Unity instalado e o Visual Studio (C#), um por aluno`,
    `Projeto do Unity da semana anterior, com o personagem do Blender já importado`,
    `Pasta de exemplo com o modelo do personagem e as texturas (arquivos .png ou .jpg) caso algum aluno tenha perdido os seus`,
    `Projetor ou TV para o professor demonstrar cada passo na tela`,
    `Acesso ao Claude no navegador para tirar dúvidas de importação`,
    `Folha impressa com a sequência de passos: criar material, aplicar, criar Prefab`,
  ],
  conceitosChave: [
    `Material — o conjunto de informações (cor, brilho, textura) que diz ao Unity como a superfície de um objeto deve aparecer na tela.`,
    `Textura — a imagem que cobre o modelo, como a pele ou a roupa do personagem, dando detalhe e realismo.`,
    `Shader — o programa que calcula como a luz interage com o material; o padrão do Unity chama-se Standard.`,
    `Inspector — o painel da direita onde ajustamos as propriedades do objeto ou do material selecionado.`,
    `Prefab — um molde reutilizável que guarda o modelo, os materiais e os ajustes juntos para criar várias cópias iguais.`,
    `Instância — cada cópia de um Prefab colocada na cena; mudar o molde original muda todas as instâncias.`,
    `Albedo — a cor base do material, a propriedade principal que define a tonalidade da superfície.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Unity para conduzir esta aula. São três ações: criar e aplicar materiais, transformar o personagem em Prefab e arrumar a cena. Localize quatro áreas na tela: a janela Scene (centro, onde montamos o mundo), a janela Hierarchy (esquerda, lista os objetos da cena), a janela Project (parte de baixo, mostra as pastas de Assets) e o Inspector (direita, mostra as propriedades do que está selecionado). Um material é um arquivo que fica na janela Project. Quando o modelo aparece cinza ou rosa, quase sempre falta material ou textura. O Unity salva tudo na pasta Assets, então peça aos alunos para criarem uma pasta chamada Materials para organizar.

## Passo a passo da aula

Aquecimento (10 min): Abra o projeto da aula anterior no projetor e mostre o personagem importado, ainda cinza. Pergunte: por que ele está sem cor? Conduza a ideia de que falta a "tinta" do Unity, o material. Mostre dois exemplos: um personagem cinza e um colorido, e pergunte qual parece pronto para um jogo.

Conteúdo novo guiado (15 min): Na janela Project, clique com o botão direito na pasta Assets e escolha Create, depois Folder, e nomeie Materials. Dentro dela, clique com o botão direito, Create, Material, e nomeie corpo_material. Selecione o material e, no Inspector, clique no quadradinho de cor ao lado de Albedo para escolher uma cor. Arraste o material da janela Project para cima do personagem na janela Scene: a cor muda na hora. Para usar textura, arraste a imagem para o pequeno quadrado ao lado de Albedo. Em seguida, mostre o Prefab: arraste o personagem da Hierarchy para uma pasta Prefabs na janela Project. O nome dele fica azul, sinal de que virou Prefab.

Mão na massa (25 min): Cada aluno cria a pasta Materials, faz pelo menos dois materiais com cores diferentes (corpo e detalhe), aplica no personagem e ajusta o brilho movendo os controles Metallic e Smoothness no Inspector. Depois cria a pasta Prefabs e arrasta o personagem para virar Prefab. Por fim, posiciona o personagem em cima do chão na janela Scene. Circule ajudando individualmente.

Desafio + compartilhar (10 min): Cada aluno coloca uma segunda instância do Prefab na cena arrastando-o de volta para a Hierarchy, e muda a cor só do molde original para ver as duas cópias mudarem juntas. Dois voluntários mostram no projetor.

## Como explicar de forma clara

Use comparações simples. Diga que o material é como uma "tinta inteligente": além da cor, ela sabe se a superfície é fosca ou brilhante. A textura é como um "adesivo" que cobre o boneco com uma foto. O shader é a "receita" que mistura luz e cor. O Prefab é como um "carimbo": você desenha uma vez e carimba quantas cópias quiser; se mudar o carimbo, todas as marcas mudam. Mostre na tela antes de mandar fazer e fale os nomes dos painéis enquanto aponta. Quando ensinar a pedir ajuda ao Claude, mostre uma pergunta boa, como: minha textura sumiu depois de importar do Blender no Unity, o que pode ser e como arrumo?

## Erros comuns e como ajudar

O erro mais comum é o personagem ficar rosa: isso quer dizer que o material perdeu o shader; oriente a selecionar o material e escolher Standard no campo Shader, no topo do Inspector. Outro erro é arrastar o material para o lugar errado da janela Project em vez de soltar sobre o personagem; mostre que o material precisa cair em cima do modelo na Scene. Muitos esquecem de aplicar as mudanças no Prefab e editam só a cópia; ensine a clicar em Overrides e Apply All, ou a editar o Prefab original com duplo clique. Texturas que somem geralmente estão fora da pasta Assets; peça que arrastem a imagem para dentro do projeto antes de usar. Por fim, alguns deixam o personagem flutuando ou enterrado no chão; ensine a usar a ferramenta Move (tecla W) para ajustar a altura.`,
  exercicios: [
    {
      titulo: `Primeira tinta no personagem`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno crie a pasta Materials dentro de Assets. Confirme que o material foi solto em cima do personagem na Scene, e não em uma pasta.`,
      atividade: `Crie uma pasta chamada Materials, crie dentro dela um material chamado corpo_material, escolha uma cor no Albedo e aplique-o no personagem arrastando o material sobre o modelo na janela Scene.`,
      gabarito: `O personagem aparece colorido com a cor escolhida. Na janela Project existe a pasta Materials com o arquivo corpo_material, e ao selecionar o personagem o Inspector mostra esse material aplicado.`,
    },
    {
      titulo: `Brilho e acabamento`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre os controles Metallic e Smoothness no Inspector do material. Explique que mais Smoothness deixa a superfície mais brilhante e lisa.`,
      atividade: `Crie um segundo material chamado detalhe_material, aplique-o em outra parte do personagem e ajuste os controles Metallic e Smoothness para deixar essa parte com brilho diferente do corpo.`,
      gabarito: `O personagem tem duas áreas com materiais distintos. O detalhe_material tem valores de Metallic e Smoothness diferentes do corpo_material, e a diferença de brilho é visível na janela Scene.`,
    },
    {
      titulo: `Nasce o Prefab`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a criar a pasta Prefabs e a arrastar o personagem da Hierarchy para dentro dela. Mostre que o nome na Hierarchy fica azul quando vira instância de Prefab.`,
      atividade: `Crie uma pasta chamada Prefabs e arraste o personagem já colorido da janela Hierarchy para dentro dessa pasta, transformando-o em um Prefab.`,
      gabarito: `Na janela Project, dentro da pasta Prefabs, existe o arquivo do personagem (Prefab). Na Hierarchy o nome do personagem aparece em azul, indicando que agora é uma instância de Prefab.`,
    },
    {
      titulo: `O poder do molde`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre como arrastar o Prefab da janela Project para a Scene cria novas instâncias. Demonstre que editar o Prefab original muda todas as cópias ao mesmo tempo.`,
      atividade: `Coloque duas cópias do Prefab do personagem na cena. Depois abra o Prefab original (duplo clique) e mude a cor do corpo_material. Observe o que acontece com as duas cópias na Scene.`,
      gabarito: `As duas instâncias do personagem mudam de cor juntas, porque ambas vêm do mesmo Prefab. O aluno consegue explicar que mudar o molde original altera todas as instâncias de uma vez.`,
    },
    {
      titulo: `Pedindo ajuda ao Claude`,
      tipo: `pesquisa e escrita`,
      tempo: `4 minutos`,
      guiaProfessor: `Reforce como descrever um problema de forma clara: o que aconteceu, em qual ferramenta e o que já tentou. Leia algumas perguntas em voz alta e avalie com a turma se estão claras.`,
      atividade: `Imagine que a textura do personagem sumiu depois de importar do Blender. Escreva uma pergunta clara para o Claude pedindo ajuda, dizendo o que aconteceu, em qual programa e o que você já tentou.`,
      gabarito: `Exemplo de pergunta esperada: Importei meu personagem do Blender para o Unity e a textura nao apareceu, o modelo ficou rosa. Ja conferi que o arquivo de imagem esta na pasta Assets. O que pode estar causando isso e como faco para a textura voltar a aparecer no material? A pergunta diz o problema, a ferramenta (Unity), o sintoma (modelo rosa) e o que ja foi tentado.`,
    },
  ],
};
