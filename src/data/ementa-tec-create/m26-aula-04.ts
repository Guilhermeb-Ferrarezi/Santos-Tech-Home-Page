import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Integrando os Modelos 3D ao Cenário",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Importar os modelos 3D feitos no Maya para dentro do Roblox Studio e encaixá-los no cenário, ajustando posição, tamanho e material para o jogo ganhar identidade visual própria.`,
  descricao: `Nesta aula o aluno faz a ponte entre dois mundos que ele já conhece: o Maya, onde criou e deu acabamento nos seus modelos 3D, e o Roblox Studio, onde construiu o mundo do jogo. Até agora os personagens e objetos viviam separados. Hoje eles entram no cenário de verdade. É um momento muito especial, porque o jogo deixa de ser um mundo genérico de blocos e passa a ter a cara do aluno: o personagem dele, os objetos dele, as ideias dele ocupando o espaço.

A importação acontece pelo Asset Manager, o gerenciador de itens do Roblox Studio. O aluno vai pegar o arquivo do modelo (no formato .fbx ou .obj exportado do Maya na aula passada), trazer para dentro do Studio e ver o modelo aparecer no mundo 3D. Mas importar é só o começo. Quase sempre o modelo chega no lugar errado, grande demais ou pequeno demais, e às vezes sem cor. Por isso a aula gira em torno de três ajustes práticos: mover (posição), redimensionar (tamanho) e aplicar material (aparência).

Para isso, o aluno usa três ferramentas centrais do Studio que ficam na aba Home ou Model: Move (mover), Scale (escalar) e Rotate (girar). São setas e caixinhas coloridas que aparecem em volta do objeto selecionado e permitem arrastar com o mouse. Também usamos a janela Properties para conferir e digitar valores exatos de posição e tamanho, e a propriedade Material para escolher o acabamento (plástico, madeira, metal, neon).

O foco do mês é Montar o jogo no Roblox, e o entregável é o Jogo tomando forma. Tudo o que for feito hoje serve diretamente a esse objetivo: ao final da aula, cada aluno terá pelo menos o personagem principal e um objeto importado, posicionados e encaixados no cenário, com tamanho coerente e material aplicado. O professor deve reforçar a ideia de proporção (o personagem não pode ser maior que a casa) e de capricho visual. Na próxima aula entramos no código Lua; hoje o trabalho é deixar o palco montado e bonito.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e logado em uma conta (um por aluno)`,
    `Projetor ou TV para o professor demonstrar a importação e os ajustes em tela grande`,
    `Arquivos de modelos 3D exportados do Maya na Aula 3, no formato .fbx ou .obj, salvos numa pasta por aluno (personagem e pelo menos um objeto)`,
    `Cópia de segurança dos arquivos do jogo de cada aluno (place do Roblox da Semana 1) para abrir e continuar`,
    `Arquivos de exemplo prontos pelo professor (um .fbx de personagem e um de objeto simples) para quem ainda não exportou`,
    `Mouse com scroll para facilitar a navegação na câmera 3D do Studio`,
  ],
  conceitosChave: [
    `Asset (asset 3D) — qualquer item pronto do jogo, como um personagem, um objeto ou uma textura, que pode ser importado e reutilizado.`,
    `Asset Manager — o gerenciador do Roblox Studio onde importamos, guardamos e organizamos os modelos e imagens do jogo.`,
    `Importar — trazer um arquivo de fora (o .fbx do Maya) para dentro do Studio, fazendo o modelo aparecer no mundo do jogo.`,
    `Mover, Escalar e Girar (Move, Scale, Rotate) — as três ferramentas que mudam, respectivamente, a posição, o tamanho e a rotação de um objeto selecionado.`,
    `Properties (Propriedades) — a janela onde vemos e digitamos valores exatos do objeto, como posição, tamanho e material.`,
    `Material — a propriedade que define a aparência da superfície (plástico, madeira, metal, neon), parecida com o material que o aluno usou no Maya.`,
    `Anchor (ancorar) — travar um objeto no lugar para ele não cair nem se mexer sozinho quando o jogo rodar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Roblox Studio para conduzir esta aula. Precisa entender o caminho da importação e as três ferramentas de ajuste. O caminho da importação é: aba View, abrir o Asset Manager, clicar no ícone de importar (uma seta para cima), escolher o arquivo .fbx ou .obj do aluno e confirmar. O modelo aparece na janela do Asset Manager e, ao dar duplo clique ou arrastar, vai para o mundo 3D.

As três ferramentas ficam no canto superior esquerdo, na aba Home: Move (mover), Scale (escalar) e Rotate (girar). Quando você seleciona um objeto e clica numa delas, aparecem setas ou caixinhas coloridas em volta. Vermelho é o eixo X, verde é o Y (altura) e azul é o Z. Arraste a seta para mover, a caixinha para escalar. Antes da aula, abra um place qualquer, insira uma Part (Part é um bloco), e treine mover e escalar uma vez. Isso já te dá segurança total.

## Passo a passo da aula (ritmo 10/15/25/10, com os passos exatos)

10 min, aquecimento e revisão. Abra na tela grande o cenário que a turma construiu na Semana 1 e mostre os modelos exportados do Maya na Aula 3. Pergunte: "Onde o seu personagem vai morar nesse mundo?" Crie expectativa: hoje os modelos entram no jogo.

15 min, conteúdo novo guiado. Faça os passos no projetor enquanto a turma observa. 1. Vá na aba View e clique em "Asset Manager". 2. Na janela que abre, clique no ícone de importar (seta para cima). 3. Escolha o arquivo .fbx do personagem e confirme; aceite as opções padrão. 4. Quando o modelo aparecer na lista, arraste-o para dentro do mundo 3D. 5. Com o modelo selecionado, clique na ferramenta Move (aba Home) e arraste as setas coloridas até pousar o modelo no chão do cenário. 6. Clique em Scale e arraste as caixinhas para ajustar o tamanho (compare com um personagem padrão do Roblox). 7. Abra a janela Properties, ache "Material" e escolha "Plastic" ou "SmoothPlastic". 8. Ainda em Properties, marque a caixinha "Anchored" para o modelo não cair.

25 min, mão na massa. Cada aluno importa o próprio personagem e pelo menos um objeto, repetindo os 8 passos. A tarefa é: posicionar no cenário, ajustar o tamanho para ficar proporcional, aplicar um material e ancorar. Circule pela sala. Quem terminar pode importar mais objetos e montar uma pequena cena (por exemplo, o personagem ao lado de uma árvore).

10 min, desafio e compartilhar. Peça que cada aluno gire a câmera (segure o botão direito do mouse e arraste) e mostre a cena montada ao colega do lado. Faça uma rodada rápida: cada um diz qual modelo importou e um ajuste que precisou fazer.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do teatro. Diga: "O cenário é o palco; os modelos são os atores. Importar é trazer o ator do camarim (o Maya) para o palco (o Roblox)." Para as três ferramentas: "Mover é arrastar o ator pelo palco; escalar é fazer ele crescer ou encolher; girar é fazê-lo virar o rosto." Para as setas coloridas: "Cada cor é uma direção. Vermelho vai para os lados, azul para frente e trás, verde para cima e para baixo." Para ancorar: "Ancorar é pregar o ator no chão para ele não cair quando as luzes acenderem." Sempre puxe a proporção: "Seu personagem cabe na porta da casa? Então o tamanho está bom."

## Erros comuns e como ajudar

O erro mais comum é o modelo aparecer gigante ou minúsculo, porque a escala do Maya é diferente da do Roblox. Ensine a usar Scale com calma e a comparar com um objeto que já está na cena. O segundo erro é o modelo cair ou atravessar o chão ao testar o jogo: a solução é marcar "Anchored" em Properties. O terceiro é o aluno não conseguir selecionar o modelo certo, pois ele veio agrupado; mostre como clicar no item dentro do Explorer (a lista à direita). O quarto é o modelo chegar cinza e sem cor; lembre que a cor e o material podem ser ajustados na propriedade Material e em Color. Por fim, se a importação falhar, quase sempre é o formato do arquivo: confira se é .fbx ou .obj e use o arquivo de exemplo do professor enquanto resolve.`,
  exercicios: [
    {
      titulo: `Primeira importação: trazer o personagem`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o arquivo .fbx do personagem na pasta. Reforce o caminho View, Asset Manager, ícone de importar. Tenha o arquivo de exemplo pronto para quem não exportou.`,
      atividade: `Abra o seu jogo no Roblox Studio. Pelo Asset Manager, importe o arquivo do seu personagem e arraste-o para dentro do mundo. Mostre ao professor o personagem aparecendo na cena.`,
      gabarito: `O personagem deve aparecer no mundo 3D. Caminho correto: aba View, "Asset Manager", ícone de importar (seta para cima), escolher o arquivo .fbx, confirmar e arrastar o item para a cena. Se nada aparecer, verifique se o arquivo é .fbx ou .obj e se o item foi arrastado para o mundo, e não apenas importado para a lista.`,
    },
    {
      titulo: `No lugar certo: posição e tamanho`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre as setas coloridas do Move e as caixinhas do Scale. Lembre os eixos: vermelho lados, azul frente e trás, verde altura. Peça que comparem o tamanho com um objeto que já existe na cena.`,
      atividade: `Selecione o personagem importado. Use a ferramenta Move para pousá-lo no chão do cenário, em um lugar que faça sentido. Depois use a ferramenta Scale para deixar o tamanho proporcional ao mundo (nem gigante, nem minúsculo).`,
      gabarito: `O personagem deve ficar apoiado no chão, em um ponto coerente, e com tamanho proporcional ao cenário. Caminho: aba Home, ferramenta Move para arrastar as setas até o chão, e ferramenta Scale para ajustar as caixinhas. Um bom teste: o personagem deve caber na porta ou ao lado dos objetos existentes. Se ele estiver flutuando, ainda falta descer no eixo verde (Y).`,
    },
    {
      titulo: `Travando a cena: aplicar material e ancorar`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Abra a janela Properties com a turma. Mostre onde fica "Material" e a caixinha "Anchored". Explique que ancorar impede o modelo de cair quando o jogo roda.`,
      atividade: `Com o personagem ainda selecionado, abra a janela Properties. Mude a propriedade Material para "SmoothPlastic" ou outro material que combine com o seu jogo. Em seguida, marque a caixinha "Anchored" para travar o modelo. Teste o jogo no botão Play e veja se o personagem fica parado.`,
      gabarito: `Depois de marcar "Anchored", o modelo deve permanecer parado ao apertar Play, sem cair nem atravessar o chão; o material escolhido muda a aparência da superfície. Caminho: janela Properties, propriedade "Material" para escolher o acabamento e caixinha "Anchored" marcada. Se o modelo cair ao testar, a caixinha "Anchored" não foi marcada.`,
    },
    {
      titulo: `Montando a cena em dupla`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas. Um aluno importa e posiciona; o outro confere a proporção e a posição girando a câmera (botão direito do mouse arrastando). Depois trocam de papel.`,
      atividade: `Em dupla, escolham um objeto (além do personagem) para importar e encaixar na cena de um dos jogos. Posicionem, ajustem o tamanho, apliquem um material e ancorem. Girem a câmera e confiram juntos se o objeto está bem encaixado e proporcional. Em seguida, expliquem um ao outro qual ajuste foi mais difícil.`,
      gabarito: `O objeto deve estar importado, posicionado de forma coerente, com tamanho proporcional, material aplicado e ancorado. A dupla deve conseguir girar a câmera e enxergar o objeto encaixado no cenário. Resposta esperada na conversa: identificar um ajuste real, por exemplo "o mais difícil foi a escala, porque o objeto veio gigante e tivemos que usar o Scale várias vezes".`,
    },
    {
      titulo: `Mini projeto: meu canto do jogo com identidade`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Incentive os alunos a montar uma pequena cena com o personagem e dois ou três objetos importados. Reforce capricho visual, proporção e materiais coerentes com o estilo do jogo. Peça para salvarem o place ao final.`,
      atividade: `Monte um cantinho do seu jogo com o seu personagem e pelo menos dois objetos importados. Posicione tudo, ajuste os tamanhos para ficarem proporcionais, aplique materiais que combinem com o estilo do seu jogo e ancore os modelos. Salve o seu jogo (Ctrl + S) com o seu nome.`,
      gabarito: `A cena deve conter o personagem e pelo menos dois objetos importados, todos posicionados de forma coerente, proporcionais entre si, com materiais aplicados e ancorados. O place deve estar salvo. Caminho de salvar: menu File, "Save to File" ou atalho Ctrl + S. Uma cena bem feita mostra proporção (o personagem cabe no ambiente) e identidade visual (materiais e cores combinam com o estilo do jogo). Se os modelos caírem ao testar com Play, falta marcar "Anchored" em algum deles.`,
    },
  ],
};
