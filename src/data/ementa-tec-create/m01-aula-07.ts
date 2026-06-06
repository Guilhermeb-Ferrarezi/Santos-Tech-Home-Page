import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Checando o Modelo para Imprimir",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Inspecionar o próprio modelo voxel e corrigir falhas para que ele fique conectado, firme e pronto para virar um objeto real na impressora 3D.`,
  descricao: `Nesta aula os alunos descobrem que existe uma diferença enorme entre uma arte que aparece bonita na tela e um objeto que pode existir de verdade no mundo. Um modelo voxel pode parecer perfeito no MagicaVoxel, mas, se tiver peças soltas, cubinhos flutuando no ar ou partes ligadas só por um canto, ele simplesmente não imprime — ou imprime quebrado. Por isso, antes de exportar (o que será feito na próxima aula), o aluno precisa virar um verdadeiro inspetor do próprio trabalho.

O conceito central é a conexão. Na vida real, a impressora 3D constrói o objeto camada por camada, de baixo para cima, depositando material físico. Se um voxel está solto no ar, sem nada embaixo nem ao lado dele, a impressora não tem como segurar aquele material — ele cai. E se duas partes do modelo se tocam apenas por uma quina (canto com canto), na prática elas se soltam ao menor toque. O modelo precisa formar uma peça única e firme, com os cubinhos colados pelas faces.

Durante a aula, cada aluno abre o personagem que vem construindo desde o início do mês e faz uma checagem cuidadosa: gira a câmera por todos os lados, procura partes que estão no ar, identifica detalhes que ficaram presos por um fio só e reforça as ligações frágeis. É um momento de revisão e cuidado, parecido com revisar um texto antes de entregar, ou conferir uma ponte de blocos antes de soltar a mão.

Ao final, o aluno entende que ser criador de objetos 3D é também ser responsável por eles. A arte deixa de ser só pixels coloridos e passa a ser um projeto que vai sair da tela e virar algo que dá para segurar na mão. Essa mudança de mentalidade — de "desenho" para "objeto real" — é o coração desta aula e prepara o terreno para a exportação final.`,
  materiais: [
    `Computadores com o MagicaVoxel instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a inspeção do modelo em tempo real`,
    `Arquivo de exemplo "modelo_bom.vox" (personagem todo conectado e firme)`,
    `Arquivo de exemplo "modelo_com_falhas.vox" (com voxels flutuando e peças presas por uma quina)`,
    `Impressora 3D na sala (ou uma peça já impressa) para mostrar o resultado físico, quando disponível`,
    `Folha simples de checklist impressa: "Está conectado? Tem peça solta? Tem cubinho voando?"`,
  ],
  conceitosChave: [
    `Voxel conectado — cubinho que encosta em outro pela face (lado inteiro), formando uma peça firme.`,
    `Peça solta — parte do modelo que não está ligada ao corpo principal e cairia na impressão.`,
    `Voxel flutuante — cubinho parado no ar, sem nada embaixo nem ao lado, que a impressora não consegue sustentar.`,
    `Ligação por quina — quando duas partes se tocam só por um canto; parece colada, mas se solta facilmente.`,
    `Modelo único — quando todos os voxels formam um só corpo conectado, sem partes separadas.`,
    `Arte de tela x objeto real — diferença entre o que aparece bonito no computador e o que pode existir fisicamente.`,
    `Inspeção — ato de girar e revisar o modelo por todos os lados procurando falhas antes de imprimir.`,
  ],
  treinamento: `## O que o professor precisa saber

A grande ideia desta aula é simples: nem tudo que fica bonito na tela existe de verdade. A impressora 3D constrói o objeto de baixo para cima, camada por camada, com material físico. Por isso, três coisas estragam uma impressão: voxels flutuando no ar, peças que se soltaram do corpo principal e partes ligadas só por uma quina (canto com canto). Seu papel hoje é ensinar o aluno a virar inspetor do próprio modelo: girar a câmera, achar essas falhas e consertar. Você não precisa dominar o MagicaVoxel — só precisa saber girar o modelo e usar duas ferramentas básicas, que estão descritas abaixo.

Antes da aula, abra o arquivo "modelo_com_falhas.vox" e confira você mesmo onde estão os problemas, para demonstrar com segurança.

## Passo a passo da aula

10 min — Aquecimento. Mostre no projetor uma peça já impressa (ou a foto de uma). Pergunte: "O que acontece se uma parte do boneco estiver solta no ar?" Deixe os alunos responderem. Conduza até a resposta: "ela cai, não imprime". Reabra rapidamente o conceito de voxel das aulas anteriores.

15 min — Conteúdo novo guiado. Abra o "modelo_com_falhas.vox" no projetor. Gire a câmera segurando o botão direito do mouse e arrastando — mostre o modelo por todos os lados. Aponte um voxel flutuando (sozinho no ar) e um detalhe preso por uma quina. Explique a regra: "cubinhos precisam encostar de lado cheio, não de pontinha". Mostre as duas ferramentas no painel da esquerda: o "Attach" (pincel que adiciona voxel, tecla L) para reconectar partes, e o "Erase" (borracha, tecla T) para apagar um cubinho perdido. Corrija uma falha ao vivo, devagar.

25 min — Mão na massa. Cada aluno abre o próprio personagem. Peça que girem a câmera (botão direito arrastando) e inspecionem todos os lados, de cima e de baixo. Distribua a folha de checklist: "Está conectado? Tem peça solta? Tem cubinho voando?". Eles marcam as falhas e consertam com Attach (L) para reforçar ligações e Erase (T) para remover voxels perdidos. Circule pela sala e olhe a base de cada modelo no chão da grade.

10 min — Desafio e compartilhar. Lance o desafio: "encontre e mostre a falha mais escondida do seu modelo". Cada aluno gira o próprio modelo para um colega e aponta uma falha que achou e consertou. Reforce que o modelo agora é uma peça única e firme.

## Como explicar de forma clara

Use a linguagem do mundo físico, que essa idade entende na hora. Compare com blocos de montar: "se um bloco não está encaixado em nenhum outro, ele cai quando você levanta o brinquedo". Compare com uma torre: "ela só fica em pé se cada pedaço apoia no de baixo". Use a expressão "cubinho voando" para o voxel flutuante e "preso por uma pontinha" para a ligação por quina — são imagens fáceis de visualizar. Repita a frase-chave da aula: "se não dá para segurar na mão, não está pronto". Sempre que possível, mostre a peça impressa real e diga: "isso aqui começou na tela igual ao seu".

## Erros comuns e como ajudar

O erro mais frequente é o aluno achar que o modelo está perfeito só porque está bonito de frente — ele esquece de girar e ver por baixo e por trás. Lembre sempre: "olhe a barriga e as costas do boneco". Outro erro é confundir voxel encostado de lado (firme) com voxel encostado de quina (frágil); aproxime o zoom (rolando o scroll do mouse) para o aluno enxergar a diferença. Alguns vão apagar a peça boa por engano com o Erase — ensine o desfazer com Ctrl+Z. Há ainda quem queira "consertar" deletando partes inteiras do personagem; oriente a reconectar com o Attach em vez de apagar, preservando o trabalho do mês. Por fim, há os perfeccionistas que travam: combine que o objetivo de hoje é firmeza, não beleza nova.`,
  exercicios: [
    {
      titulo: `Caça aos Cubinhos Voadores`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Abra o "modelo_com_falhas.vox" em todos os computadores antes de começar. Mostre como girar a câmera com o botão direito do mouse arrastando. Oriente os alunos a olharem por baixo e por trás, não só de frente.`,
      atividade: `Abra o arquivo de exemplo, gire a câmera por todos os lados e encontre os voxels que estão flutuando no ar (cubinhos voando). Aponte cada um para o professor.`,
      gabarito: `O aluno deve identificar os cubinhos isolados no ar, sem nenhum voxel encostado embaixo ou ao lado. Esses são os voxels flutuantes que a impressora não conseguiria sustentar — eles cairiam durante a impressão.`,
    },
    {
      titulo: `Consertando o Modelo de Exemplo`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Relembre os atalhos: Attach é a tecla L (adiciona/reconecta voxel) e Erase é a tecla T (apaga voxel). Mostre o desfazer com Ctrl+Z para quem errar. Deixe que tentem antes de ajudar.`,
      atividade: `No "modelo_com_falhas.vox", conserte as falhas: apague (Erase, tecla T) os cubinhos perdidos no ar e reconecte (Attach, tecla L) as partes que estavam ligadas só por uma quina, deixando-as encostadas de lado cheio.`,
      gabarito: `O modelo corrigido fica como uma peça única: nenhum voxel solto no ar, nenhuma parte presa apenas por canto. Todas as ligações ficam pela face (lado inteiro). Se o aluno apagar uma parte boa, basta usar Ctrl+Z e refazer com Attach.`,
    },
    {
      titulo: `Inspetor do Meu Personagem`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Distribua a folha de checklist. Circule pela sala olhando a base de cada modelo no chão da grade. Reforce que o objetivo é firmeza, não criar arte nova. Elogie quem encontra e conserta as próprias falhas.`,
      atividade: `Abra o seu personagem do mês. Usando o checklist ("Está conectado? Tem peça solta? Tem cubinho voando?"), inspecione todos os lados e conserte cada falha que encontrar com Attach (L) e Erase (T).`,
      gabarito: `Ao final, o personagem do aluno forma um modelo único e firme: sem peças soltas, sem voxels flutuantes e sem ligações por quina. O aluno consegue dizer pelo menos uma falha que encontrou e como a corrigiu.`,
    },
    {
      titulo: `Dupla de Inspetores`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno gira o próprio modelo para o colega inspecionar. Reforce o respeito: apontar falhas é ajudar, não criticar. Peça que conversem usando os termos da aula (voxel flutuante, ligação por quina).`,
      atividade: `Troque de cadeira com a dupla. Inspecione o modelo do colega girando a câmera e tente encontrar uma falha que ele não viu. Depois, juntos, decidam como consertar.`,
      gabarito: `A dupla deve encontrar e nomear corretamente pelo menos uma falha em cada modelo (peça solta, voxel flutuante ou ligação por quina) e combinar a correção certa: Erase para o que está perdido, Attach para reconectar.`,
    },
    {
      titulo: `Por que Não Imprime?`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em roda. Use a peça impressa real (ou a foto) como apoio. Conduza com perguntas abertas e deixe vários alunos falarem. Feche a roda repetindo a frase-chave: "se não dá para segurar na mão, não está pronto".`,
      atividade: `Em roda, responda e debata: por que um cubinho voando não imprime? Qual a diferença entre a arte que aparece na tela e um objeto real que dá para pegar na mão?`,
      gabarito: `O aluno explica que a impressora constrói de baixo para cima com material físico, então um voxel sem apoio cai e não vira objeto. A arte de tela é só imagem colorida; o objeto real precisa ser uma peça conectada e firme para existir fora do computador.`,
    },
  ],
};
