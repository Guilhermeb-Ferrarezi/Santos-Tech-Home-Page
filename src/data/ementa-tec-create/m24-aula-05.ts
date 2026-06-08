import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Importando os Assets no Roblox",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Importar no Roblox Studio os modelos 3D finais que o aluno exportou do Maya e posicioná-los corretamente no cenário do jogo, conferindo escala, encaixe e colisão junto da arte, da música e das vozes de IA que já estão no projeto.`,
  descricao: `Na aula passada o aluno exportou do Maya os modelos finais do jogo no formato certo (geralmente .fbx ou .obj), com as texturas separadas e os nomes organizados. Agora chega o momento que junta tudo: trazer esses modelos para dentro do Roblox Studio e encaixá-los no mundo do jogo. É a aula da grande costura, em que o trabalho de modelagem feito no Maya finalmente vira parte jogável, ao lado da interface desenhada no Canva, da trilha sonora criada no Suno e das vozes geradas no ElevenLabs que já estavam no projeto desde os meses anteriores.

O coração da aula é o botão de importar do Roblox Studio. Na aba "Home" ou na aba "Plugins" existe a opção "Import 3D" (Importar 3D), que abre uma janela onde o aluno escolhe o arquivo exportado do Maya. Ao confirmar, o Roblox processa o modelo e mostra uma pré-visualização. É aqui que aparecem os primeiros desafios: o modelo pode entrar gigante ou minúsculo, porque o Maya e o Roblox usam unidades de medida diferentes; pode entrar com a textura faltando, se o arquivo de imagem não foi anexado; e pode entrar girado ou deitado, por causa da diferença de eixos. Saber ler essa janela e ajustar antes de clicar em "Import" evita muito retrabalho.

Depois que o modelo está dentro do jogo, o trabalho passa a ser de posicionamento. O aluno usa as ferramentas "Move" (mover), "Scale" (escala) e "Rotate" (girar) para colocar a peça no lugar certo do cenário, encaixando-a com o que já existe. Aqui entra a noção de colisão: no Roblox, cada peça pode ter a propriedade "CanCollide" ligada (o jogador esbarra nela) ou desligada (o jogador atravessa). Uma parede precisa de colisão; um detalhe decorativo no alto, não. Conferir isso garante que o personagem ande pelo cenário sem cair em buracos invisíveis nem travar em objetos que deveriam ser só enfeite.

Por fim, esta aula reforça a ideia de projeto integrado. O modelo do Maya não chega num mundo vazio: ele convive com a música que toca pelo Sound, com a voz de IA que dispara num gatilho e com a interface (UI) feita no Canva que aparece na tela. O aluno aprende a posicionar o asset respeitando tudo isso, de modo que a peça nova pareça que sempre esteve ali. É a aula em que o jogo começa a ficar inteiro, faltando pouco para os ajustes finais e o teste da próxima semana.`,
  materiais: [
    `Computadores (até 10) com o Roblox Studio instalado e logado na conta do aluno, e com o Maya disponível para reabrir e reexportar um asset se preciso`,
    `Os arquivos finais exportados na aula 4 (modelos em .fbx ou .obj e as imagens de textura), salvos numa pasta organizada por aluno`,
    `Projetor ou TV ligado à máquina do professor para demonstrar o botão "Import 3D" e cada ajuste de escala e colisão ao vivo`,
    `O projeto do jogo no Roblox Studio já com o cenário, a interface (UI) do Canva, a música do Suno e as vozes do ElevenLabs colocadas nas aulas anteriores`,
    `Arquivo de exemplo do professor: um .fbx simples já testado, que importa certo, para mostrar o caminho completo sem surpresas`,
    `Folha impressa de "atalhos do dia": ferramentas Move, Scale e Rotate, e a propriedade CanCollide no painel Properties`,
    `Mouse externo, que facilita muito o posicionamento preciso das peças no cenário`,
  ],
  conceitosChave: [
    `Asset — qualquer peça pronta usada no jogo (modelo 3D, imagem, som ou voz); aqui é o modelo final que veio do Maya.`,
    `Importar (Import 3D) — trazer um arquivo de fora para dentro do Roblox Studio; o botão fica na aba Home ou Plugins.`,
    `Escala (Scale) — o tamanho da peça no mundo; como Maya e Roblox medem diferente, quase sempre é preciso ajustar.`,
    `Colisão (CanCollide) — propriedade que define se o jogador esbarra na peça (ligada) ou a atravessa (desligada).`,
    `MeshPart — o tipo de objeto que o Roblox cria ao importar um modelo 3D; é dentro dele que mora o seu mesh do Maya.`,
    `Explorer — o painel que lista tudo que existe no jogo em forma de árvore; é onde o aluno acha e organiza o asset importado.`,
    `Properties — o painel onde o aluno vê e muda as propriedades da peça selecionada, como tamanho, textura e CanCollide.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para conduzir esta aula. O essencial é conhecer quatro lugares da tela do Roblox Studio. Primeiro, a aba "Home" (ou "Plugins"), onde fica o botão "Import 3D" (Importar 3D) que abre a janela de importação. Segundo, o painel "Explorer" (Explorador), à direita, que lista tudo do jogo em árvore; é onde o modelo aparece depois de importado, como um "MeshPart". Terceiro, o painel "Properties" (Propriedades), logo abaixo do Explorer, onde você muda tamanho, textura e a propriedade "CanCollide". Quarto, a barra de ferramentas com "Move" (mover), "Scale" (escala) e "Rotate" (girar), usada para posicionar a peça.

Antes da aula, faça o caminho inteiro uma vez com o seu arquivo de exemplo: clique em Import 3D, escolha o .fbx, veja a pré-visualização, confirme, e repare como ele entra no Explorer. Se o modelo entrar gigante, é só selecionar e usar Scale; se entrar sem textura, abra Properties e confira o campo de textura. Saber que esses tropeços são normais deixa você tranquilo para ajudar.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Relembre a aula 4. Pergunte "o que a gente exportou do Maya e em qual formato?". No projetor, abra a pasta de arquivos e mostre o .fbx e a imagem de textura lado a lado. Abra o jogo no Roblox Studio e mostre que ele já tem cenário, música e voz de IA esperando o modelo novo.

2. Conteúdo novo guiado (15 min): No projetor, clique na aba "Home", depois em "Import 3D". Escolha o seu arquivo de exemplo e mostre a janela de pré-visualização. Confirme e aponte o modelo nascendo no painel "Explorer" como um MeshPart. Selecione-o, mostre o painel "Properties" e a propriedade "CanCollide". Demonstre o ajuste de tamanho com a ferramenta "Scale" e o posicionamento com "Move" e "Rotate", encaixando a peça no cenário.

3. Mão na massa (25 min): Cada aluno importa o próprio modelo final do Maya com "Import 3D", confere a pré-visualização e confirma. Depois ajusta a escala para o tamanho certo, posiciona com Move e Rotate no lugar do cenário e confere CanCollide (ligado em paredes e chão, desligado em enfeites altos). Circule de máquina em máquina. Quem terminar testa andando perto da peça com o botão "Play".

4. Desafio e compartilhar (10 min): Em roda rápida, dois ou três alunos mostram no projetor o asset encaixado, com a música tocando e a interface do Canva na tela. Cada um diz qual ajuste foi mais difícil (escala, textura ou colisão) e como resolveu.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, compare a importação com colar uma figurinha num álbum: "você recortou a figurinha no Maya, agora cola ela na página certa do Roblox". Explique a escala com a ideia de zoom: "o Maya e o Roblox medem o mundo com réguas diferentes, então quase sempre a peça chega do tamanho errado e a gente acerta com o Scale". Para a colisão, use o exemplo do jogo: "parede com CanCollide ligado é parede de verdade, você esbarra; enfeite lá no alto com CanCollide desligado, você atravessa sem travar". Lembre que o modelo entra num jogo que já tem música, voz e interface, então a peça nova precisa "combinar com a festa que já estava rolando".

## Erros comuns e como ajudar

O erro mais comum é o modelo entrar gigante ou minúsculo; tranquilize que é normal pela diferença de unidades e ensine a usar o "Scale" comparando com o personagem. Outro é a textura sumir, deixando a peça cinza; cheque no "Properties" se a imagem foi anexada e, se não, reimporte com o arquivo de textura junto. Muitos esquecem de conferir o "CanCollide" e depois o personagem atravessa a parede ou trava num enfeite; faça virar rotina testar com "Play". Alguns posicionam a peça flutuando no ar ou afundada no chão; ensine a olhar de vários ângulos antes de soltar. Por fim, há quem importe e deixe o MeshPart com nome genérico no Explorer; padronize renomear para achar fácil depois.`,
  exercicios: [
    {
      titulo: `Importando o meu primeiro asset`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe pelo projetor enquanto cada aluno abre o próprio projeto no Roblox Studio. Garanta que todos saibam onde está a pasta com o .fbx exportado do Maya. O foco é só trazer o modelo para dentro do jogo e vê-lo aparecer no Explorer.`,
      atividade: `No seu jogo, clique na aba "Home" e depois em "Import 3D". Escolha o arquivo final do seu personagem ou objeto exportado do Maya, confira a pré-visualização e confirme. Localize o modelo no painel "Explorer".`,
      gabarito: `O modelo do Maya aparece dentro do jogo como um MeshPart e está visível no painel Explorer. Forma correta: usar o botão Import 3D na aba Home, selecionar o arquivo certo e confirmar na janela de pré-visualização. O aluno sabe apontar onde o asset surgiu na árvore do Explorer.`,
    },
    {
      titulo: `Acertando a escala da peça`,
      tipo: `prática na ferramenta`,
      tempo: `9 min`,
      guiaProfessor: `Quase todos os modelos entram do tamanho errado; aproveite para mostrar que isso é esperado. Verifique se cada aluno seleciona a peça antes de usar a ferramenta Scale e se compara o tamanho com o personagem ou com o cenário já existente.`,
      atividade: `Selecione o modelo que você importou. Escolha a ferramenta "Scale" (escala) na barra de ferramentas e ajuste o tamanho da peça até ela ficar proporcional ao personagem e ao cenário do jogo. Compare olhando de perto e de longe.`,
      gabarito: `A peça fica com um tamanho que faz sentido junto do personagem e do cenário, nem gigante nem minúscula. O aluno selecionou o modelo, usou a ferramenta Scale e comparou a proporção com o que já existe no jogo. Ele entende que o ajuste foi preciso por causa da diferença de unidades entre Maya e Roblox.`,
    },
    {
      titulo: `Posicionando no cenário em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas para que um confira o posicionamento do outro. O foco é encaixar a peça no lugar certo do cenário usando Move e Rotate, sem deixá-la flutuando no ar nem afundada no chão. Oriente a olhar de vários ângulos antes de aprovar.`,
      atividade: `Em dupla, troquem de máquina. Olhando o jogo do colega, ajudem a posicionar o asset importado no lugar certo do cenário usando as ferramentas "Move" (mover) e "Rotate" (girar). Confiram juntos, de cima, de lado e de perto, se a peça não está flutuando nem afundada. Expliquem um ao outro o que ajustaram.`,
      gabarito: `O asset fica bem encaixado no cenário, apoiado no lugar certo, sem flutuar no ar nem afundar no chão. A dupla usou Move e Rotate, conferiu de vários ângulos e consegue explicar o que mudou em cada modelo. O posicionamento respeita o que já existe no jogo (cenário, interface e demais peças).`,
    },
    {
      titulo: `Caça-colisão: o que trava e o que atravessa`,
      tipo: `desafio`,
      tempo: `12 min`,
      guiaProfessor: `Aqui entra a propriedade CanCollide. Mostre no Properties como ligar e desligar. Desafie o aluno a decidir, peça por peça, o que precisa de colisão (paredes, chão, plataformas) e o que pode ser atravessado (enfeites altos, detalhes decorativos). Reforce testar com Play.`,
      atividade: `Selecione cada asset importado e, no painel "Properties", localize a propriedade "CanCollide". Decida: paredes, chão e plataformas ficam com CanCollide ligado; enfeites e detalhes no alto podem ficar desligados. Depois clique em "Play" e ande pelo cenário para conferir se o personagem esbarra onde deve e atravessa onde deve.`,
      gabarito: `Cada peça está com o CanCollide correto: ligado em paredes, chão e plataformas; desligado nos enfeites que o jogador atravessa. No teste com Play, o personagem esbarra nas estruturas sólidas e passa pelos detalhes decorativos sem travar nem cair em buraco invisível. O aluno sabe achar e mudar CanCollide no painel Properties.`,
    },
    {
      titulo: `Meu asset integrado ao jogo`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Este exercício junta tudo: importar, escalar, posicionar e conferir colisão, dentro do jogo que já tem música, voz e interface. Apoie quem ainda não terminou. Ao final, abra uma roda rápida para cada aluno mostrar o asset encaixado com a música tocando e a UI do Canva na tela, dizendo qual ajuste foi mais difícil.`,
      atividade: `Finalize a integração do seu asset: importe o modelo do Maya com "Import 3D", ajuste a escala, posicione no cenário com Move e Rotate, e confira o CanCollide de cada parte. Renomeie o MeshPart no "Explorer" com um nome claro. Clique em "Play", ande perto da peça com a música do Suno tocando e a interface do Canva na tela, e ajuste o que ainda estiver fora do lugar. Mostre o resultado para a turma.`,
      gabarito: `O asset do Maya está totalmente integrado: importado, na escala certa, bem posicionado no cenário, com o CanCollide adequado e com nome claro no Explorer. No teste com Play, a peça convive bem com a música do Suno, a voz do ElevenLabs e a interface do Canva, parecendo que sempre esteve ali. Na roda, o aluno aponta o ajuste mais difícil (escala, textura, posição ou colisão) e como o resolveu. Esse é o jogo quase pronto para os ajustes finais e o teste da próxima aula.`,
    },
  ],
};
