import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Texturas com a Arte da IA",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aplicar as imagens criadas no DALL-E e no Nano Banana como texturas nos modelos 3D do Maya, conectando a arte da IA aos materiais e ajustando o mapeamento para que o visual combine com o jogo.`,
  descricao: `Na aula passada o aluno aprendeu a dar cores e materiais aos modelos usando o Hypershade do Maya. Agora chega a hora de subir o nível do acabamento: em vez de uma cor lisa, cada objeto vai receber uma imagem de verdade colada na sua superfície. Essa imagem é a textura, e ela é a ponte entre dois mundos que o aluno já conhece bem: a arte que ele gerou na IA (DALL-E e Nano Banana) e o modelo 3D que ele construiu no Maya. É o momento em que a madeira parece madeira, a pedra parece pedra e o personagem ganha rosto e roupa de verdade.

A ideia central é simples de explicar, mas poderosa: uma textura é como um adesivo ou um papel de presente que envolve o objeto. No Maya, esse adesivo é uma imagem comum (um arquivo PNG ou JPG) que entra no material pelo canal de cor, chamado de Color. Quando o aluno conecta a imagem da IA nesse canal, o modelo deixa de ter uma cor única e passa a exibir todos os detalhes daquela arte. O grande desafio não é colar a imagem, e sim fazer ela cair no lugar certo, sem esticar, sem ficar de cabeça para baixo e sem repetir de forma estranha. Esse ajuste se chama mapeamento.

Para isso o aluno vai conhecer o conceito de UV, que é o nome dado ao molde plano do objeto, como se a gente desenrolasse a superfície 3D numa folha de papel. As coordenadas UV dizem ao Maya qual pedaço da imagem fica em cada parte do modelo. Nesta aula o foco é prático e visual: o aluno conecta a textura, observa onde ela ficou torta ou esticada e usa o nó place2dTexture para girar, repetir e encaixar a arte. Não é preciso dominar UVs avançados; o objetivo é que a textura combine com o jogo e fique reconhecível.

Ao final, cada aluno terá pelo menos um modelo com a arte da IA aplicada como textura, ajustada para parecer natural. Isso reaproveita diretamente as imagens que ele já gerou no curso e conecta a etapa de arte 2D com a modelagem 3D, deixando os assets muito mais próximos do visual final do jogo que será montado no Roblox Studio nas próximas etapas.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e o arquivo de modelagem de cada aluno aberto`,
    `Projetor ou tela grande para o professor demonstrar cada passo no Maya`,
    `Pasta organizada com as imagens de textura geradas no DALL-E e no Nano Banana (arquivos PNG ou JPG)`,
    `Arquivo de exemplo do Maya com um modelo simples já texturizado, para consulta rápida`,
    `Imagens de exemplo de texturas que se repetem bem (madeira, pedra, tijolo) salvas em uma pasta de apoio`,
    `Folha impressa de apoio com o passo a passo: criar material, abrir File, conectar Color, ajustar place2dTexture`,
    `Mouse com três botões em cada estação, pois o Maya depende muito do botão do meio e dos atalhos`,
  ],
  conceitosChave: [
    `Textura — imagem colada na superfície de um modelo 3D para dar detalhe, como um adesivo que envolve o objeto.`,
    `Canal Color — entrada do material onde se conecta a imagem da textura para definir a cor e o desenho da superfície.`,
    `Nó File — bloco do Maya que carrega um arquivo de imagem (PNG ou JPG) para ser usado como textura.`,
    `UV — molde plano do objeto, como se a superfície 3D fosse desenrolada numa folha, indicando onde cada parte da imagem cai.`,
    `Mapeamento — processo de ajustar a textura para que ela caia no lugar certo, sem esticar, repetir ou ficar torta.`,
    `place2dTexture — nó que controla a posição da textura: permite repetir, girar e deslocar a imagem na superfície.`,
    `Mapa UV (UV layout) — a vista plana das coordenadas UV, usada para conferir se a imagem está encaixada corretamente.`,
  ],
  treinamento: `## O que o professor precisa saber

Aplicar uma textura no Maya é mais fácil do que parece. Tudo gira em torno de três coisas: um material (você já criou na aula passada, geralmente um Lambert ou aiStandardSurface), um nó File que carrega a imagem, e a ligação entre eles pelo canal Color. Quando a imagem fica torta ou esticada, o culpado quase sempre são as coordenadas UV do modelo ou os valores do nó place2dTexture. Você não precisa ser especialista em UVs. Nesta aula basta saber abrir o material no Hypershade, conectar a imagem da IA no Color e usar Repeat UV e Rotate para encaixar. Antes da aula, abra o Maya, confira que as imagens da IA estão numa pasta sem acentos no nome e teste você mesmo o caminho de aplicar uma textura num cubo. Isso evita surpresas na frente da turma.

## Passo a passo da aula

Aquecimento (10 min): mostre no projetor dois objetos lado a lado, um com cor lisa e outro com textura de madeira. Pergunte qual parece mais real. Explique que hoje a arte da IA que eles criaram vira o adesivo dos modelos. Reveja rápido o material da aula 5 (Color liso) para ligar ao conteúdo novo.

Conteúdo novo guiado (15 min): selecione o modelo. Abra o Hypershade pelo menu Windows, depois Rendering Editors, depois Hypershade. Selecione o material do objeto. No painel Property Editor à direita, encontre o atributo Color e clique no quadradinho com o ícone de tabuleiro ao lado dele (o checker map). Na janela Create Render Node, escolha File. No nó File que aparece, clique na pasta do campo Image Name e escolha a imagem da IA (PNG ou JPG). Aperte 6 no teclado para ver a textura na viewport. Mostre que ela apareceu, mas pode estar torta. Selecione o nó place2dTexture (sai junto do File) e mostre os campos Repeat UV e Rotate UV.

Mão na massa (25 min): cada aluno repete os passos no próprio modelo, usando a sua imagem da IA. Oriente a apertar 6 para ver o resultado. Quando a textura estiver esticada, peça que ajustem Repeat UV (por exemplo 2 e 2 para repetir) ou Rotate UV (90 para girar). Para quem terminar rápido, mostre o atalho de abrir o UV Editor pelo menu UV, depois UV Editor, só para enxergar o molde. Circule pela sala ajudando individualmente, pois cada modelo reage diferente.

Desafio e compartilhar (10 min): peça que cada aluno tente deixar a textura mais natural, sem esticões visíveis. Dois ou três alunos mostram o antes e depois no projetor.

## Como explicar de forma clara

Use a imagem do adesivo e do papel de presente: a textura é um papel que a gente cola em volta do objeto. Diga que o UV é o molde, como aqueles moldes de caixinha de papel que a gente desenrola: se o molde está torto, o desenho cai no lugar errado. Para o place2dTexture, use a comparação de repetir um azulejo na parede: Repeat UV é quantas vezes o azulejo se repete; Rotate UV é girar o azulejo. Sempre nomeie o que está na tela em voz alta: Color, File, Image Name. Adolescentes aprendem rápido quando associam o termo técnico ao gesto do clique.

## Erros comuns e como ajudar

O erro mais comum é apertar a tecla errada e não ver a textura: lembre que é o número 6 que liga a visualização de texturas na viewport. Outro erro frequente é o nome do arquivo ou da pasta ter acento ou espaço, e o Maya não carregar a imagem: oriente a salvar tudo com nomes simples e sem acento. Muitos esquecem de selecionar o material certo no Hypershade e conectam a imagem no objeto errado; peça que cliquem primeiro no modelo e usem a opção de selecionar o material dele. Quando a textura aparece esticada, a turma tende a achar que está quebrada, mas é só o mapeamento: ajuste Repeat UV ou gire com Rotate UV. Por fim, alguns conectam a imagem no canal errado (como Bump em vez de Color); confirme sempre que a ligação foi feita no Color.`,
  exercicios: [
    {
      titulo: `Colando a primeira textura`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe pelo projetor enquanto a turma abre o Hypershade. Verifique se cada aluno selecionou o material certo antes de conectar a imagem e lembre-os de apertar 6.`,
      atividade: `Abra o Hypershade, selecione o material do seu modelo, clique no ícone de tabuleiro ao lado de Color e escolha File. Carregue uma imagem da IA pelo campo Image Name e aperte 6 para ver a textura na viewport.`,
      gabarito: `O modelo deixa de ter cor lisa e passa a mostrar a imagem da IA na superfície. O nó File aparece ligado ao canal Color do material e a textura é visível na viewport ao apertar 6. Pode estar torta, e tudo bem nesta etapa.`,
    },
    {
      titulo: `Encaixando a textura no lugar`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre onde ficam Repeat UV e Rotate UV no nó place2dTexture. Ajude quem não acha o nó a selecioná-lo junto ao File. Incentive a testar valores diferentes.`,
      atividade: `Selecione o nó place2dTexture da sua textura. Ajuste Repeat UV (tente 2 e 2) e Rotate UV (tente 90) até a imagem ficar bem encaixada e sem esticões grandes na superfície do modelo.`,
      gabarito: `A textura fica mais natural depois do ajuste: sem esticões evidentes e com o desenho na orientação certa. O aluno consegue explicar que Repeat UV repete a imagem e Rotate UV gira a textura. O resultado combina melhor com o objeto.`,
    },
    {
      titulo: `Conferindo o molde UV`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `As duplas abrem o UV Editor juntas, um navega e o outro observa. O objetivo é só enxergar o molde plano, não editar UVs avançados. Peça que comparem o molde com onde a textura caiu.`,
      atividade: `Em dupla, abram o UV Editor pelo menu UV, depois UV Editor. Observem o molde plano do modelo de cada um e discutam: a imagem da IA caiu no lugar certo? Onde ela esticou? Anotem uma observação cada.`,
      gabarito: `A dupla consegue abrir o UV Editor e identificar o molde plano do modelo. Cada aluno aponta pelo menos um lugar onde a textura encaixou bem e um onde esticou, relacionando o molde UV ao resultado visto na viewport.`,
    },
    {
      titulo: `Texturizando o conjunto de assets`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o passo mais completo. Cada aluno aplica texturas em mais de um modelo, reaproveitando imagens diferentes da IA. Circule e ajude a manter os nomes de arquivo simples e a conexão sempre no Color.`,
      atividade: `Escolha pelo menos dois modelos do seu jogo (por exemplo o personagem e um item) e aplique em cada um uma textura da IA diferente. Ajuste o mapeamento de cada um para que combinem com o estilo do jogo.`,
      gabarito: `O aluno entrega dois ou mais modelos texturizados com imagens diferentes da IA, cada um com a conexão no canal Color e o mapeamento ajustado. As texturas combinam entre si no estilo e nenhuma fica visivelmente esticada ou de cabeça para baixo.`,
    },
    {
      titulo: `Da IA para o 3D: o que mudou?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza uma roda rápida. Faça cada aluno usar os termos da aula: textura, canal Color, UV, mapeamento, place2dTexture. Reforce a ligação entre a arte 2D da IA e o modelo 3D.`,
      atividade: `Em roda, cada aluno mostra ou descreve um modelo texturizado e responde: qual imagem da IA você usou? Em que canal você a conectou? Precisou ajustar o mapeamento? O que ficou melhor depois da textura?`,
      gabarito: `Cada aluno usa corretamente os conceitos da aula: cita a imagem da IA usada, confirma que a conexão foi no canal Color, descreve algum ajuste de mapeamento (Repeat ou Rotate) e percebe a melhora visual. As respostas variam, mas devem usar os termos certos.`,
    },
  ],
};
