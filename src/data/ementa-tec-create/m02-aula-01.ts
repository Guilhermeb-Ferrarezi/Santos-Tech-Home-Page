import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Mundo da Impressão 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Compreender o que é impressão 3D e como uma impressora Bambu Lab transforma um arquivo digital em um objeto físico real, construído camada por camada.`,
  descricao: `A impressão 3D é uma tecnologia que pega um modelo feito no computador e o transforma em um objeto que você pode segurar com as mãos. Em vez de cortar ou esculpir um bloco de material, a impressora 3D faz o contrário: ela constrói o objeto do zero, adicionando finas camadas de plástico derretido, uma em cima da outra, até a peça ficar pronta. Por isso essa técnica também é chamada de manufatura aditiva, porque ela vai somando material.

Nesta aula, os alunos descobrem o ciclo completo da impressão 3D na Santos Tech. Tudo começa com um modelo 3D digital (que eles mesmos vão criar nos próximos meses em programas como o MagicaVoxel, o Maya e o Blender). Esse arquivo digital precisa ser preparado por um programa especial chamado Bambu Studio, que conversa com a impressora Bambu Lab. A impressora então aquece um fio de plástico, chamado filamento, e o deposita com muita precisão para formar a peça.

O filamento usado na escola é o PLA, um plástico feito a partir de fontes vegetais, fácil de imprimir e seguro para o ambiente da sala de aula. Ele vem em rolos coloridos e é o material ideal para quem está começando, porque não solta cheiro forte e não precisa de temperaturas altíssimas. Ao longo do mês, cada aluno vai sair com uma peça impressa de verdade para levar para casa.

O objetivo desta primeira aula é despertar o encantamento e dar o mapa completo da jornada: do desenho na tela até o objeto na mão. Os alunos não vão mexer em configurações avançadas ainda, mas vão entender o caminho que um arquivo percorre, ver exemplos reais de peças impressas e conhecer a impressora que os acompanhará durante todo o mês.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto (um por aluno)`,
    `Projetor ou TV para mostrar exemplos e a tela do professor para a turma`,
    `Impressora Bambu Lab ligada e visível na sala (pode estar imprimindo uma peça de demonstração)`,
    `Caixa com peças já impressas em PLA (chaveiros, miniaturas, peças de encaixe) para circular entre os alunos`,
    `Rolos de filamento PLA de cores diferentes para mostrar e deixar os alunos tocarem`,
    `Arquivos de exemplo no formato 3MF abertos no Bambu Studio (um cubo simples e uma peça mais detalhada)`,
    `Quadro branco ou flip-chart para desenhar o ciclo da impressão 3D`,
  ],
  conceitosChave: [
    `Impressão 3D — tecnologia que constrói um objeto físico a partir de um arquivo digital, depositando material em camadas.`,
    `Manufatura aditiva — nome técnico da impressão 3D, porque o objeto é formado adicionando material, e não retirando.`,
    `Modelo 3D — o desenho digital do objeto, criado no computador, que serve de receita para a impressora.`,
    `Filamento — o fio de plástico, enrolado em um rolo, que a impressora derrete para construir a peça.`,
    `PLA — tipo de filamento feito de fontes vegetais, fácil de imprimir e seguro, usado em todas as impressões da escola.`,
    `Bambu Lab — a marca da impressora 3D usada na Santos Tech, conhecida por ser rápida e precisa.`,
    `Bambu Studio — o programa de computador que prepara o modelo 3D e envia as instruções para a impressora.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O foco aqui é encantamento e visão geral, não configurações técnicas. Antes da aula, abra o Bambu Studio uma vez no seu computador para se familiarizar com a tela inicial. Ao abrir, o programa mostra uma área de trabalho cinza com uma placa quadriculada no centro (chamada de placa de impressão ou build plate) e uma barra de menus no topo: Arquivo (File), Editar (Edit), Visualizar (View) e Ajuda (Help). No canto superior direito ficam os botões Slice (Fatiar) e Print (Imprimir), que NÃO serão usados nesta aula. Tenha pelo menos um arquivo de exemplo (formato 3MF ou STL) salvo na área de trabalho para abrir com File, depois Open. Deixe a impressora Bambu Lab ligada e, se possível, imprimindo algo enquanto a turma chega: ver a máquina trabalhando vale mais que mil explicações.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Receba a turma com a caixa de peças impressas já circulando. Pergunte: alguém aqui já viu uma impressora 3D funcionando? O que vocês acham que dá para imprimir? Deixe a curiosidade fluir. Mostre a impressora Bambu Lab ligada e, se ela estiver imprimindo, peça que todos observem as camadas se formando.

Conteúdo novo guiado (15 min): No projetor, desenhe o ciclo no quadro: Modelo 3D digital, depois Bambu Studio, depois Impressora, depois Peça pronta. Explique cada etapa apontando para a impressora real. Abra o Bambu Studio na sua tela. Mostre o menu File, clique em Open e abra um arquivo de exemplo. Use o botão direito do mouse arrastando para girar a câmera e a rolagem do mouse para dar zoom, só para a turma ver a peça por todos os lados. Mostre o rolo de filamento PLA e explique que aquele fio vira a peça.

Mão na massa (25 min): Cada aluno abre o Bambu Studio no próprio computador. Oriente-os a clicar em File, depois Open e abrir o arquivo de exemplo que você distribuiu. Peça que pratiquem girar a peça (botão direito do mouse arrastando) e dar zoom (rolagem do mouse). Desafie cada um a encontrar a placa quadriculada e a contar quantos lados o objeto tem. Circule pela sala ajudando quem travou.

Desafio e compartilhar (10 min): Cada aluno mostra na tela a peça que conseguiu girar e diz uma coisa que aprendeu sobre o ciclo da impressão. Feche relembrando: do desenho na tela até o objeto na mão.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que a impressora 3D é como uma máquina de waffle muito esperta: ela vai colocando camadas de massa até formar o objeto, só que a massa é plástico. Compare o modelo 3D com uma receita de bolo: sem a receita, o cozinheiro (a impressora) não sabe o que fazer. Chame o filamento de fio de plástico mágico que vira qualquer coisa. Evite palavras como extrusão ou bico aquecido neste primeiro dia; isso vem nas próximas aulas. Mantenha o tom de aventura: estamos começando uma jornada que termina com uma peça de verdade na mão de cada um.

## Erros comuns e como ajudar

O erro mais comum é o aluno fechar o Bambu Studio sem querer ou abrir o arquivo errado: oriente sempre a usar File, depois Open. Outro tropeço frequente é confundir girar a câmera com mover a peça; explique que girar com o botão direito só muda o ponto de vista, não estraga nada. Alguns alunos vão querer apertar Slice ou Print por curiosidade; combine que esses botões são para depois, nas próximas aulas. Se um aluno achar que tudo é muito complicado, lembre que hoje só estamos explorando, sem errar nada de verdade. Cuidado também com quem toca o bico ou a placa da impressora ligada: reforce que essas partes esquentam e não se toca.`,
  exercicios: [
    {
      titulo: `Explorando o Bambu Studio`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abriu o Bambu Studio e o arquivo de exemplo (File, depois Open). Mostre na sua tela como girar com o botão direito do mouse arrastando e dar zoom com a rolagem. Circule e confira se todos encontraram a placa quadriculada.`,
      atividade: `Abra o Bambu Studio, use File e depois Open para abrir o arquivo de exemplo. Gire a peça com o botão direito do mouse e dê zoom com a rolagem. Encontre a placa quadriculada no centro da tela.`,
      gabarito: `O aluno abre o programa, carrega o arquivo, consegue girar e dar zoom na peça e aponta corretamente a placa quadriculada (build plate) no centro da área de trabalho.`,
    },
    {
      titulo: `O caminho do arquivo até a peça`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada aluno coloque na ordem certa as etapas do ciclo da impressão 3D. Se travarem, aponte o desenho que você fez no quadro. Aceite respostas com as próprias palavras.`,
      atividade: `Coloque na ordem correta as quatro etapas: Peça pronta na mão, Impressora Bambu Lab, Modelo 3D no computador, Bambu Studio prepara o arquivo.`,
      gabarito: `A ordem correta é: 1) Modelo 3D no computador; 2) Bambu Studio prepara o arquivo; 3) Impressora Bambu Lab; 4) Peça pronta na mão.`,
    },
    {
      titulo: `Detetives das peças impressas`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e entregue uma ou duas peças impressas para cada uma. Oriente os alunos a observarem de perto e tentarem enxergar as linhas das camadas. Passe pelas duplas perguntando o que descobriram.`,
      atividade: `Em dupla, peguem uma peça impressa e observem bem de perto. Encontrem as linhas das camadas, contem quantos lados a peça tem e decidam qual cor de filamento foi usada.`,
      gabarito: `A dupla identifica as linhas horizontais das camadas, conta corretamente os lados da peça e nomeia a cor do filamento. Espera-se que percebam que o objeto foi formado por camadas empilhadas.`,
    },
    {
      titulo: `Roda de conversa: o que dá para imprimir?`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Sente a turma em roda. Conduza a conversa com perguntas abertas e anote ideias no quadro. Valorize toda contribuição e ligue as ideias ao que será feito no curso (personagens do próprio jogo virando peças impressas).`,
      atividade: `Na roda, cada um responde: se você pudesse imprimir qualquer objeto em 3D, o que imprimiria e por quê? Pense em algo que combine com games ou tecnologia.`,
      gabarito: `Não há resposta única. Espera-se que cada aluno proponha um objeto coerente (um chaveiro, uma miniatura, uma peça de jogo) e explique o motivo. O professor valida ideias viáveis de imprimir em PLA e conecta com o projeto do curso.`,
    },
    {
      titulo: `Meu mapa da impressão 3D`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue papel e peça que cada aluno desenhe o ciclo completo da impressão 3D com setas e legendas. Incentive criatividade nos desenhos. Recolha ou fotografe para acompanhar o progresso ao longo do mês.`,
      atividade: `Desenhe em uma folha o caminho completo da impressão 3D, da ideia até a peça pronta. Use setas e escreva o nome de cada etapa: modelo 3D, Bambu Studio, impressora Bambu Lab e peça final.`,
      gabarito: `O desenho mostra as quatro etapas na ordem correta, ligadas por setas, com os nomes escritos: modelo 3D, Bambu Studio, impressora Bambu Lab e peça pronta. O ciclo precisa fluir do digital para o físico.`,
    },
  ],
};
