import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Deixando no Tamanho Certo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ensinar a criança a redimensionar e centralizar o item no Blender seguindo a lista de regras da loja, deixando o modelo arrumado e pronto para ser exportado.`,
  descricao: `Na aula passada vocês conheceram as regras da loja do Roblox: o item precisa ter um tamanho parecido com o do mundo do jogo, ficar centralizado e apoiado no chão. Hoje é a aula de arrumar de verdade. Cada criança vai pegar o próprio item, olhar a lista de regras e corrigir o que estiver fora do lugar. É como organizar o quarto antes da visita chegar: a gente já sabe o que precisa estar guardado, agora é só guardar.

No Blender, três coisas resolvem quase tudo. A primeira é o tamanho: às vezes o item ficou gigante feito um prédio ou pequenininho feito uma formiga, e a gente precisa deixar ele no tamanho certo. A segunda é a posição: o item costuma nascer torto, flutuando no ar ou enterrado no chão, e precisa ficar plantado direitinho no centro, em cima da grade. A terceira é o "origem" do objeto, que é o pontinho laranja que diz onde é o "umbigo" do modelo. Quando o umbigo está no lugar certo, fica muito mais fácil centralizar tudo.

O professor vai mostrar no projetor cada correção, passo a passo, e depois cada criança faz no próprio computador. Não tem mistério: é apertar as teclas certas, olhar a grade e conferir a lista. Quem terminar rápido ajuda a conferir o item de um colega, virando "fiscal da loja". No fim, todo mundo deve ter o item no tamanho certo, centralizado e apoiado no chão.

Essa aula é uma ponte. Depois de hoje, o item está com a "casa arrumada" e pronto para a próxima etapa, que é exportar para a loja. Um item bem ajustado agora evita um monte de problema lá na frente, por isso capricho aqui vale ouro.`,
  materiais: [
    `Computadores com o Blender já aberto e o item de cada criança carregado (arquivo .blend salvo)`,
    `Projetor ou TV grande conectada ao computador do professor para demonstrar cada passo`,
    `Cartaz ou folha impressa com a "Lista de Regras da Loja" (tamanho certo, centralizado, apoiado no chão)`,
    `Exemplo pronto: um arquivo com um item TORTO e fora do tamanho, para a turma consertar junto`,
    `Exemplo pronto: um item já ARRUMADO, para servir de modelo de "como deve ficar"`,
    `Adesivos ou carimbos de "Item Arrumado" para premiar quem terminar a lista`,
    `Folha de checklist individual para a criança marcar cada regra cumprida`,
  ],
  conceitosChave: [
    `Redimensionar — mudar o tamanho do item, deixando ele maior ou menor sem estragar o formato.`,
    `Escala — o número que diz o tamanho do objeto; quando está em 1, o tamanho é o "normal".`,
    `Centralizar — colocar o item bem no meio da cena, em cima do cruzamento das linhas da grade.`,
    `Origem — o pontinho laranja que é o "umbigo" do objeto; tudo gira e cresce em volta dele.`,
    `Grade — as linhas quadriculadas do chão do Blender que ajudam a ver o centro e o nível do chão.`,
    `Apoiar no chão — deixar a parte de baixo do item encostada na grade, sem flutuar nem afundar.`,
    `Aplicar transformação — "carimbar" o tamanho e a posição no objeto para que fiquem definitivos.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar o Blender para dar esta aula. São poucos comandos e todos se repetem. Antes da aula, abra o Blender e deixe o item de cada criança carregado. Tenha à mão dois arquivos de exemplo: um item TORTO (para consertar junto) e um item ARRUMADO (para mostrar o objetivo).

Os comandos desta aula, na janela 3D (a área grande do meio, chamada "Viewport"):
- Selecionar o item: clique com o botão esquerdo em cima do objeto. Ele fica com um contorno laranja.
- Redimensionar: aperte a tecla S (de "Scale", escala), mexa o mouse e clique para confirmar. Para precisão, depois de apertar S, digite um número (ex.: 2 dobra o tamanho; 0.5 deixa pela metade) e aperte Enter.
- Mover: aperte a tecla G (de "Grab", agarrar), mexa o mouse e clique para confirmar. Aperte G e depois Z para mover só para cima/baixo.
- Centralizar a origem: menu "Object" (topo da Viewport) > "Set Origin" > "Origin to Geometry". Isso põe o umbigo no meio do item.
- Levar o item ao centro do mundo: com o item selecionado, aperte Shift + S e escolha "Selection to Cursor" (o cursor 3D começa no centro). Ou no menu "Object" > "Clear" > "Location".
- Conferir tamanho e posição: aperte a tecla N para abrir o painel lateral direito. Em "Transform", você lê "Location" (posição) e "Dimensions" (tamanho em metros).
- Aplicar escala: menu "Object" > "Apply" > "Scale". Isso deixa a escala em 1 sem mudar o tamanho visível. É importante para a loja não se confundir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, releia o cartaz da "Lista de Regras da Loja": tamanho certo, centralizado e apoiado no chão. Pergunte: "O que acontece se o item nascer gigante ou flutuando?". Mostre rapidinho o item ARRUMADO no projetor como o alvo de hoje.

Conteúdo novo guiado (15 min): No projetor, abra o item TORTO. Aperte N para mostrar o painel "Transform". Conserte na frente da turma, narrando cada tecla: selecione o item (clique), arrume o umbigo ("Object" > "Set Origin" > "Origin to Geometry"), centralize ("Object" > "Clear" > "Location"), ajuste o tamanho com S e um número, suba com G depois Z até a base encostar na grade e, por fim, "Object" > "Apply" > "Scale". Confira a lista junto com a turma.

Mão na massa (25 min): Cada criança faz no próprio item, na mesma ordem do quadro. Circule pela sala. Quem terminar marca o checklist e vira "fiscal da loja", conferindo o item de um colega com a lista na mão. Salve com Ctrl + S no fim.

Desafio e compartilhar (10 min): Desafio do "tamanho exato": peça que deixem a maior medida do item perto de um número combinado (ex.: 4 metros em "Dimensions"). Cada um mostra o item arrumado no projetor e diz uma regra que corrigiu.

## Como explicar para crianças

Use a analogia de arrumar o quarto: "A lista de regras é a lista de tarefas; vamos guardar cada coisa no lugar". Chame a origem de "umbigo do boneco", o ponto onde tudo gira. Diga que a grade é o "chão mágico": a parte de baixo do item tem que encostar nele para não ficar voando. Compare a escala com um botão de zoom: S aumenta ou diminui o item inteirinho de uma vez.

## Erros comuns e como ajudar

A criança gira sem querer ao apertar R em vez de S: lembre que S é de "Size" (tamanho) e mostre desfazer com Ctrl + Z. O item some da tela depois de redimensionar muito: aperte a tecla Início (Home) para enquadrar tudo de novo. A criança move só um pedaço porque entrou no "Edit Mode": confira no canto superior esquerdo se está em "Object Mode" (aperte Tab para voltar). O item flutua mesmo depois de centralizar: explique que centralizar é o meio, e apoiar no chão é subir/descer com G e Z. A criança esquece de aplicar a escala: passe conferindo o painel N; "Scale" deve voltar a 1 depois do "Apply".`,
  exercicios: [
    {
      titulo: `Caça aos erros na lista`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o item TORTO no projetor com o painel N aberto. Leia a lista de regras junto com a turma e peça que apontem o que está errado: tamanho, posição e se está apoiado no chão. Anote no quadro cada problema encontrado.`,
      atividade: `Olhe o item na tela e a Lista de Regras da Loja. Diga em voz alta o que está errado: ele está grande ou pequeno demais? Está no centro? Está apoiado no chão ou flutuando?`,
      gabarito: `A criança aponta pelo menos dois problemas reais do item. Exemplo de acerto: "Ele está flutuando no ar e está torto, fora do centro". Vale citar tamanho errado, posição fora do meio ou base sem encostar na grade.`,
    },
    {
      titulo: `Achar o umbigo do item`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o pontinho laranja (a origem) e como movê-lo para o centro do item. Selecione o objeto e use o menu "Object" > "Set Origin" > "Origin to Geometry". Confirme que o pontinho foi para o meio do modelo.`,
      atividade: `Selecione o seu item clicando nele. Vá no menu "Object", depois "Set Origin" e escolha "Origin to Geometry". Veja o pontinho laranja, o umbigo, pular para o meio do seu item.`,
      gabarito: `O pontinho laranja (origem) fica posicionado no centro do modelo. Acerto = usar o caminho "Object > Set Origin > Origin to Geometry" e ver a origem no meio do item, não numa ponta solta.`,
    },
    {
      titulo: `Centralizar na grade`,
      tipo: `Prática no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a levar o item ao centro do mundo. Com o objeto selecionado, use "Object" > "Clear" > "Location". Aperte N e mostre que "Location" em X, Y e Z deve ficar em 0. Ajude quem o item sumir a apertar a tecla Home para reenquadrar.`,
      atividade: `Com o seu item selecionado, vá no menu "Object", depois "Clear" e clique em "Location". Aperte N e confira: a posição (Location) precisa ficar em 0, 0, 0, bem no cruzamento das linhas da grade.`,
      gabarito: `O item fica no centro da cena, com Location X=0, Y=0, Z=0 no painel N. Acerto = o item parado no cruzamento das linhas da grade. Erro comum: continuar fora do meio por não ter usado "Clear Location".`,
    },
    {
      titulo: `Tamanho certo e pés no chão`,
      tipo: `Prática no Blender`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre redimensionar com a tecla S (digitando um número e Enter) e apoiar no chão com G depois Z. Abra o painel N em "Dimensions" para conferir o tamanho. Por fim, "Object" > "Apply" > "Scale" para a escala voltar a 1. Circule e confira o checklist de cada criança.`,
      atividade: `Aperte S para mudar o tamanho do item até ele ficar parecido com o tamanho do jogo. Depois aperte G e Z para subir ou descer até a base encostar na grade. No fim, use "Object" > "Apply" > "Scale".`,
      gabarito: `O item fica num tamanho razoável (visível em "Dimensions"), com a base encostada na grade e a escala em 1 após o "Apply". Acerto = base apoiada no chão, sem flutuar nem afundar, e "Scale" mostrando 1, 1, 1 no painel N.`,
    },
    {
      titulo: `Fiscal da loja: o desafio do tamanho exato`,
      tipo: `Desafio final em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Combine um número-alvo para a maior medida (ex.: 4 metros em "Dimensions"). Cada criança ajusta o próprio item e depois vira "fiscal" do colega, conferindo a lista inteira com o painel N aberto. Premie com o carimbo "Item Arrumado" quem passar em todas as regras.`,
      atividade: `Deixe a maior medida do seu item bem perto do número combinado pelo professor, olhando em "Dimensions". Depois seja o fiscal do colega: confira a lista dele e diga se passou em todas as regras da loja.`,
      gabarito: `O item da criança bate as três regras (tamanho perto do alvo, centralizado em 0,0,0 e base no chão) e ela consegue conferir o item do colega usando a lista. Acerto = aprovar ou apontar com clareza, ex.: "Faltou apoiar no chão, está flutuando um pouquinho".`,
    },
  ],
};
