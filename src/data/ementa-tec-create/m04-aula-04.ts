import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Importando Meu Personagem",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Importar o próprio personagem modelado no Maya para dentro do Orca Slicer, conferir a escala real em milímetros, deitar a peça na mesa e corrigir problemas comuns de tamanho e posição.`,
  descricao: `Nesta aula o aluno dá um passo muito esperado: trazer o personagem que ele mesmo criou no Maya para dentro do Orca Slicer, o programa que prepara o modelo para a impressão 3D. Até agora a turma explorou a mesa virtual e entendeu como o arquivo sai do Maya; agora cada aluno coloca o próprio herói sobre a mesa de impressão e começa a tratá-lo como uma peça real que vai ganhar volume no mundo físico.

O foco da aula é a escala. No computador, um modelo pode parecer do tamanho certo, mas a impressora só entende milímetros de verdade. Por isso o aluno aprende a olhar as dimensões da peça nos eixos X, Y e Z e a perceber se o personagem ficou pequeno como uma formiga ou gigante como um prédio. Ajustar a escala para um tamanho que caiba na mesa e seja agradável de imprimir é uma habilidade central de quem trabalha com impressão 3D.

Além do tamanho, a aula trata da orientação. A forma como a peça fica apoiada na mesa muda tudo: uma figura em pé pode tombar ou exigir muitos suportes, enquanto a mesma figura deitada pode imprimir com mais firmeza. O aluno aprende a girar o modelo e a usar a função que "deita" a peça apoiando a face plana na mesa, deixando o personagem estável e pronto para as próximas etapas.

Por fim, o aluno encara os problemas mais comuns de importação: o modelo que aparece minúsculo, o que nasce flutuando acima da mesa, o que fica atravessando o chão ou caindo para fora da área de impressão. Resolver esses tropeços com calma ensina que preparar um arquivo é tão importante quanto modelá-lo, e dá ao aluno a confiança de cuidar do próprio projeto do início ao fim.`,
  materiais: [
    `Computadores com o Orca Slicer já instalado e aberto, com o perfil da impressora da escola selecionado (um por aluno)`,
    `Projetor ou TV grande para o professor mostrar onde clicar na tela do Orca Slicer`,
    `Arquivo do personagem de cada aluno exportado do Maya em formato .obj ou .stl, salvo numa pasta combinada`,
    `Um arquivo de exemplo extra (um personagem simples já pronto) para alunos que faltaram ou ainda não exportaram o seu`,
    `Folha impressa com as dimensões máximas da mesa de impressão (largura, profundidade e altura em milímetros)`,
    `Mouse externo para cada computador, pois facilita girar e mover o modelo na mesa virtual`,
    `Impressora 3D da escola ligada por perto, apenas para mostrar o tamanho real da área de impressão (sem imprimir ainda)`,
  ],
  conceitosChave: [
    `Importar — trazer um arquivo de fora (o personagem do Maya) para dentro do Orca Slicer usando o botão de adicionar modelo.`,
    `Escala — o tamanho da peça; pode ser ajustada em porcentagem ou digitando o valor real em milímetros.`,
    `Milímetro (mm) — a unidade que a impressora entende; toda medida da peça é mostrada em milímetros.`,
    `Eixos X, Y e Z — as três direções da mesa: X é a largura, Y é a profundidade e Z é a altura da peça.`,
    `Orientação — a forma como a peça fica virada e apoiada na mesa; girar muda quais faces tocam o chão.`,
    `Deitar na mesa (Place on Face) — a função que apoia uma face plana do modelo na mesa, deixando a peça estável.`,
    `Área de impressão — o espaço útil da mesa; a peça precisa caber dentro dele, sem ultrapassar as bordas.`,
  ],
  treinamento: `## O que o professor precisa saber

O Orca Slicer abre com a mesa de impressão no centro da tela. Para trazer o personagem do aluno, use o botão "Add" (ícone de pasta ou de "+") na barra superior, ou simplesmente arraste o arquivo .obj/.stl para cima da mesa. Ao clicar no modelo, uma barra de ferramentas aparece na lateral esquerda com os ícones de Mover (Move), Escala (Scale), Girar (Rotate) e "Deitar na face" (Place on Face). As dimensões reais da peça aparecem no painel direito, no item "Size", mostrando os valores de X, Y e Z em milímetros. Para mudar o tamanho, clique no ícone Scale e digite o novo valor em mm em um dos eixos; se o cadeado de proporção estiver fechado, os outros eixos mudam juntos e a peça não distorce. Para deitar a peça, clique no ícone "Place on Face" e depois clique na face do modelo que deve ficar encostada na mesa. Um modelo importado de cabeça para baixo ou flutuando se resolve clicando com o botão direito sobre ele e escolhendo "Drop to bed" (encostar na mesa). Você não precisa decorar tudo: siga os passos junto da turma com calma.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior com perguntas rápidas. "De que formato sai o arquivo do Maya?" e "O que a impressora usa para medir, centímetros ou milímetros?". Peça que cada aluno abra o Orca Slicer e localize a pasta com o próprio arquivo exportado.

Conteúdo novo guiado (15 min): no projetor, clique no botão "Add" e selecione o arquivo de exemplo. Mostre o personagem surgindo na mesa. Clique nele e aponte o painel direito, no "Size", lendo em voz alta os valores de X, Y e Z em milímetros. Clique no ícone Scale e digite uma altura nova, por exemplo 60 mm no eixo Z, mostrando como os outros eixos acompanham com o cadeado fechado. Em seguida, clique no ícone "Place on Face" e clique na face plana das costas do personagem para deitá-lo. Por fim, clique com o botão direito e mostre a opção "Drop to bed" para encostar a peça na mesa.

Mão na massa (25 min): cada aluno importa o próprio personagem com o botão "Add". Primeiro lê as dimensões no "Size" e compara com a folha das medidas máximas da mesa. Depois ajusta a escala para uma altura entre 40 mm e 70 mm. Em seguida usa o "Place on Face" para deitar a peça apoiando uma face plana, e confirma que ela está encostada na mesa com o "Drop to bed". Circule pela sala ajudando quem importou um modelo minúsculo, gigante ou flutuando.

Desafio e compartilhar (10 min): proponha que cada aluno encontre a melhor orientação para o personagem dele ficar firme e descubra a maior altura que ainda cabe na mesa. Termine com dois ou três alunos mostrando o personagem deitado e na escala certa no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações concretas. Diga que importar é como "colar uma figurinha" do Maya na mesa do Orca Slicer. Explique que a impressora é "teimosa" e só entende milímetros, então um número que parece grande na tela pode virar uma peça do tamanho de uma moeda. Compare a escala com aumentar ou diminuir uma foto: se mexer só em um lado sem o cadeado, a foto fica "esticada" e estranha. Para a orientação, peça que imaginem deitar um bonequinho de papel na mesa para ele não cair: a face plana encostada deixa tudo firme. Sempre que usar uma palavra em inglês, fale o significado em português logo depois.

## Erros comuns e como ajudar

O erro mais comum é o personagem aparecer minúsculo ou enorme por causa da unidade de exportação do Maya; mostre o "Size", confira os milímetros e ajuste a escala com o cadeado fechado. Outro tropeço é a peça nascer flutuando acima da mesa ou atravessando o chão; resolva com o botão direito e "Drop to bed". Muitos esquecem de deixar o cadeado de proporção fechado e distorcem o modelo; mostre o ícone de cadeado ao lado dos campos de escala. Alguns deixam a peça em pé e instável; lembre do "Place on Face" para deitar numa face plana. Por fim, há quem arraste o personagem para fora da área de impressão; oriente a usar o ícone Move ou o "Auto arrange" para recentralizar a peça na mesa.`,
  exercicios: [
    {
      titulo: `Trazendo meu personagem para a mesa`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno saiba onde está a pasta com o próprio arquivo. Mostre no projetor o botão "Add" e também o atalho de arrastar o arquivo para a mesa. Tenha o arquivo de exemplo pronto para quem faltou.`,
      atividade: `Abra o Orca Slicer, clique no botão "Add" (ícone de pasta ou "+"), escolha o seu personagem em .obj ou .stl e veja-o aparecer sobre a mesa de impressão.`,
      gabarito: `O personagem do aluno aparece apoiado na mesa virtual, visível no centro da tela. Ao clicar nele, a barra de ferramentas lateral e o painel direito com o "Size" ficam disponíveis, confirmando que o modelo foi importado.`,
    },
    {
      titulo: `Lendo o tamanho em milímetros`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o "Size" no painel direito e leia os três eixos em voz alta. Compare com a folha das dimensões máximas da mesa. Reforce que a unidade é sempre milímetro.`,
      atividade: `Clique no seu personagem, olhe o painel direito no item "Size" e anote os valores de X, Y e Z em milímetros. Diga se a peça está pequena demais, grande demais ou num tamanho razoável para a mesa.`,
      gabarito: `O aluno lê corretamente os três valores em milímetros no "Size" e compara com a mesa: se o Z passa da altura máxima ou se a peça mede poucos milímetros, ele identifica que precisa de ajuste. Uma resposta válida cita os números lidos.`,
    },
    {
      titulo: `Ajustando a escala certa`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o ícone Scale e o cadeado de proporção. Avise que mexer num eixo com o cadeado aberto distorce a peça. Acompanhe os valores digitados para ninguém criar um personagem gigante.`,
      atividade: `Clique no ícone Scale, confira que o cadeado de proporção está fechado e digite no eixo Z uma altura entre 40 mm e 70 mm. Confirme no "Size" se a peça ficou nesse tamanho e sem distorção.`,
      gabarito: `A altura (Z) do personagem fica entre 40 mm e 70 mm, e os eixos X e Y acompanham na mesma proporção por causa do cadeado fechado. O "Size" mostra os novos valores e a peça mantém a forma original, sem esticar.`,
    },
    {
      titulo: `Deitando a peça em dupla`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno comanda em voz alta e o outro executa, depois trocam. Reforce o "Place on Face" e o "Drop to bed" do botão direito. Ajude quem clicar na face errada.`,
      atividade: `Em dupla, um dita e o outro executa: use o ícone "Place on Face" e clique numa face plana do personagem para deitá-lo, depois clique com o botão direito e escolha "Drop to bed" para encostar na mesa. Em seguida troquem de papel.`,
      gabarito: `Os dois alunos conseguem deitar o personagem apoiando uma face plana na mesa e encostá-lo com o "Drop to bed". A peça fica estável, sem flutuar nem atravessar o chão, e cada aluno demonstra o processo ao menos uma vez.`,
    },
    {
      titulo: `Projeto curto: meu personagem pronto para fatiar`,
      tipo: `projeto curto`,
      tempo: `9 minutos`,
      guiaProfessor: `Peça que cada aluno entregue o personagem importado, na escala certa, deitado e dentro da área de impressão. Use o "Auto arrange" para recentralizar quem deixou a peça fora da mesa. Salve o projeto ao final.`,
      atividade: `Deixe seu personagem totalmente pronto: importado, com altura entre 40 mm e 70 mm, deitado numa face plana, encostado na mesa e inteiramente dentro da área de impressão. Salve o projeto com o nome do seu personagem.`,
      gabarito: `O personagem aparece centralizado e completamente dentro da área de impressão, com altura entre 40 mm e 70 mm no "Size", apoiado por uma face plana e encostado na mesa. O projeto é salvo com o nome correto, pronto para a etapa de fatiar.`,
    },
  ],
};
