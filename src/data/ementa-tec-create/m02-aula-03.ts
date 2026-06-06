import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Abrindo o Bambu Studio",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Conhecer a interface do Bambu Studio importando um modelo 3D próprio (.stl ou .3mf) e aprendendo a girar, mover e dar zoom na peça sobre a placa virtual de impressão.`,
  descricao: `Nesta aula o aluno abre pela primeira vez o Bambu Studio e descobre que ele é o "tradutor" entre o modelo 3D que criou nos meses anteriores e a impressora de verdade. Nas aulas passadas a turma conheceu o mundo da impressão 3D e viu por dentro a impressora Bambu Lab. Agora chega o momento de colocar a mão no programa que prepara qualquer peça para ser impressa. O foco de hoje é só conhecer a tela e aprender a olhar o modelo por todos os lados, sem ainda fatiar nem imprimir.

O Bambu Studio mostra uma grande placa quadriculada no centro: é a representação virtual da mesa da impressora. Tudo o que o aluno colocar ali será, mais tarde, transformado em camadas e impresso de verdade. Por isso, a primeira tarefa é importar um arquivo 3D. Os alunos vão usar os próprios modelos feitos no MagicaVoxel, no Maya ou no Blender e exportados em formato .stl ou .3mf. Ver o personagem ou o objeto que ele mesmo criou aparecer dentro do programa é um momento poderoso e motivador.

Depois de importar, o aluno aprende a navegar: orbitar para girar a câmera em volta da peça, dar zoom para chegar perto ou se afastar e deslocar a vista para reposicionar a cena. Esses movimentos são parecidos com os do Blender, então vale relembrar o que já sabem. A diferença importante é que aqui também existe mover a peça sobre a placa, que é diferente de mover a câmera: um arrasta o objeto, o outro só muda o olhar.

O objetivo do mês é levar para casa uma peça impressa de verdade, e tudo começa com a peça bem colocada na placa virtual. Sem saber importar e enxergar o modelo por todos os ângulos, o aluno não consegue conferir se ele está inteiro, apoiado e pronto. A aula termina com cada aluno com o seu próprio modelo carregado e centralizado na placa, deixando o terreno preparado para as aulas de posicionamento e fatiamento que vêm a seguir.`,
  materiais: [
    `Computadores com o Bambu Studio instalado e aberto (um por aluno), de preferência com mouse de três botões`,
    `Projetor ou tela grande para o professor demonstrar cada passo da interface ao vivo`,
    `Arquivos 3D dos próprios alunos em formato .stl ou .3mf, salvos numa pasta de fácil acesso na área de trabalho`,
    `Arquivo de exemplo "chaveiro-exemplo.3mf" para quem ainda não tem um modelo pronto ou esquecer o seu`,
    `Folha impressa de "atalhos da aula" com os ícones do mouse (orbitar, zoom, deslocar) e os botões de importar`,
    `A impressora Bambu Lab da sala visível, para lembrar que a placa da tela representa a mesa real da máquina`,
  ],
  conceitosChave: [
    `Bambu Studio — programa que prepara o modelo 3D para a impressora, funcionando como ponte entre o arquivo e a máquina.`,
    `Importar — ação de trazer um arquivo 3D de fora para dentro do programa, usando o botão de importar ou arrastando o arquivo.`,
    `Arquivo .stl — formato comum de modelo 3D que guarda só a forma da peça (a "casca"), pronto para impressão.`,
    `Arquivo .3mf — formato mais moderno que guarda a forma e também ajustes do projeto, sendo o preferido da Bambu Lab.`,
    `Placa de impressão (build plate) — o quadrado quadriculado da tela que representa a mesa real onde a peça será impressa.`,
    `Orbitar — girar a câmera ao redor da peça para vê-la por outros ângulos, segurando o botão do meio do mouse.`,
    `Mover a peça — arrastar o modelo sobre a placa para reposicioná-lo, diferente de mover a câmera, que só muda o olhar.`,
  ],
  treinamento: `## O que o professor precisa saber

O Bambu Studio é o "fatiador" (slicer) oficial da Bambu Lab, mas hoje você só vai usar a parte de importar e navegar; nada de fatiar ainda. Ao abrir o programa, a tela principal mostra a placa quadriculada no centro, uma barra de ferramentas vertical à esquerda e painéis de configuração à direita. Para importar um modelo há três caminhos: o menu Arquivo (File) > Importar (Import) > Importar objeto 3D; o ícone de pasta na barra de cima; ou simplesmente arrastar o arquivo .stl ou .3mf de uma janela do explorador direto para a placa. A navegação usa o mouse: segurar o botão do meio e arrastar orbita a câmera; girar a rodinha dá zoom; segurar o botão direito (ou Shift mais botão do meio) desloca a vista. Para mover a peça sobre a placa, é diferente: clica-se no objeto para selecioná-lo (ele fica destacado) e usa-se a ferramenta Mover (Move), o primeiro ícone da barra esquerda, atalho M. Teste tudo no seu computador antes da aula e deixe a pasta com os arquivos dos alunos já localizada.

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte o que eles lembram das duas primeiras aulas: o que a impressora faz? O que é uma camada? Mostre a impressora real da sala e diga que hoje vão conhecer o programa que conversa com ela. Abra o Bambu Studio no projetor com a placa vazia.

15 min — Conteúdo novo guiado. Apresente a tela devagar: aponte a placa quadriculada e diga que é a mesa virtual. Demonstre importar pelo menu Arquivo > Importar > Importar objeto 3D e escolha o "chaveiro-exemplo.3mf". A peça aparece na placa. Mostre a navegação: orbite (botão do meio), dê zoom (rodinha) e desloque (botão direito). Em seguida selecione a peça com um clique e mostre a ferramenta Mover (M) para arrastá-la pela placa. Lembre a diferença: orbitar muda o olhar, mover muda o objeto.

25 min — Mão na massa. Cada aluno importa o próprio modelo (.stl ou .3mf) feito nos meses anteriores. Circule pelas estações ajudando a achar a pasta e o botão de importar. Depois peça que orbitem, deem zoom e centralizem a peça na placa usando a ferramenta Mover. Quem esqueceu o arquivo usa o exemplo.

10 min — Desafio e compartilhar. Lance o desafio: "deixe a sua peça bem no centro da placa e mostre ela vista por cima e por baixo". Cada aluno orbita a cena e apresenta o próprio modelo carregado à turma.

## Como explicar de forma clara

Use comparações simples. Diga que o Bambu Studio é como o "balcão de preparo" de uma cozinha: o modelo é o ingrediente que você traz, a placa é a bancada e mais para a frente o programa "cozinha" a peça em camadas. Importar é "trazer o seu desenho de casa para dentro do programa". Para a navegação, repita o bordão do Blender: orbitar é "andar em volta da estátua", zoom é "chegar o rosto perto" e deslocar é "empurrar a folha na mesa". Reforce sempre a frase-chave: "a câmera mexe no olhar, a ferramenta Mover mexe na peça". Adolescentes se empolgam ao ver o próprio personagem na tela, então valorize esse momento: "esse é o seu modelo, agora dentro da máquina virtual".

## Erros comuns e como ajudar

O erro mais comum é não achar o arquivo: o aluno se perde na janela de importar. Tenha a pasta dos modelos numa pasta única e visível na área de trabalho. Outro erro é arrastar o objeto sem querer ao tentar orbitar, achando que está só olhando; mostre a diferença entre botão do meio (orbita) e a ferramenta Mover. Alguns dão zoom demais e "atravessam" a peça ou ficam perdidos no vazio; ensine que a tecla de enquadrar tudo traz a cena de volta para o centro. Há também quem importe o arquivo errado ou um formato não suportado; confirme que o arquivo termina em .stl ou .3mf. Por fim, modelos muito pequenos ou enormes podem aparecer como um ponto ou sumindo da placa; nesse caso oriente a dar zoom para encontrá-los, sem mexer no tamanho ainda, pois redimensionar é assunto da próxima aula.`,
  exercicios: [
    {
      titulo: `Primeiro contato com a tela`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Faça com o Bambu Studio aberto no projetor e a placa vazia. Conduza apontando cada região da tela e deixe os alunos nomearem o que veem antes de você confirmar.`,
      atividade: `Olhando a tela do Bambu Studio, identifique em voz alta três partes: a placa quadriculada do centro, a barra de ferramentas da esquerda e os painéis da direita. Diga, com suas palavras, o que você acha que a placa quadriculada representa.`,
      gabarito: `A placa quadriculada do centro representa a mesa real da impressora, onde a peça será impressa de verdade. A barra da esquerda guarda as ferramentas (como mover) e os painéis da direita guardam os ajustes da impressão. A resposta certa sobre a placa é qualquer explicação de que ela é a "mesa virtual" que corresponde à bandeja da máquina.`,
    },
    {
      titulo: `Trazendo o exemplo para a placa`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre o caminho do menu uma vez no projetor e depois deixe o aluno repetir sozinho. Garanta que todos saibam onde está a pasta dos arquivos.`,
      atividade: `Importe o arquivo "chaveiro-exemplo.3mf" usando o menu Arquivo > Importar > Importar objeto 3D. Confirme que a peça apareceu sobre a placa. Em seguida, orbite com o botão do meio do mouse para ver o chaveiro por cima e por baixo.`,
      gabarito: `O chaveiro deve aparecer sobre a placa quadriculada logo após a importação. Ao orbitar com o botão do meio, o aluno consegue ver a peça de diferentes ângulos, inclusive por baixo, sem que o objeto saia do lugar, pois só a câmera se moveu. Se a peça não aparecer, geralmente o aluno escolheu o arquivo errado ou precisa dar zoom para encontrá-la.`,
    },
    {
      titulo: `Importando o meu próprio modelo`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Este é o coração da aula. Circule pelas estações ajudando a localizar o arquivo de cada aluno. Quem esqueceu o seu usa o exemplo, sem prejuízo.`,
      atividade: `Importe o seu próprio modelo 3D (.stl ou .3mf) feito nos meses anteriores. Depois use o zoom (rodinha do mouse) e a navegação para conferir se a peça está inteira, sem partes faltando, e orbite ao redor dela para vê-la por todos os lados.`,
      gabarito: `O modelo do próprio aluno deve aparecer na placa. Ao orbitar e dar zoom, ele confere que a peça está completa e fechada. O exercício está correto quando o aluno carrega o arquivo certo (terminando em .stl ou .3mf) e consegue observar o modelo de vários ângulos. Modelos que somem da vista costumam estar muito pequenos ou grandes; basta dar zoom para localizá-los, sem alterar o tamanho ainda.`,
    },
    {
      titulo: `Câmera ou peça? Em dupla`,
      tipo: `em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas. Um aluno comanda em voz alta, o outro executa; depois trocam. O objetivo é fixar a diferença entre orbitar (olhar) e mover (objeto).`,
      atividade: `Em dupla, o "diretor" pede ações misturadas: "veja a peça por trás", "aproxime", "agora arraste a peça para o canto da placa", "volte ela para o centro". O "piloto" decide em cada caso se usa a navegação (botão do meio para orbitar) ou a ferramenta Mover (M) para arrastar o objeto. Depois invertam os papéis.`,
      gabarito: `O piloto acerta quando usa a navegação (orbitar, zoom, deslocar) para os pedidos de olhar e a ferramenta Mover apenas para os pedidos de arrastar a peça. Para "ver por trás" ou "aproximar", a peça não pode sair do lugar. Para "arrastar para o canto" ou "voltar ao centro", o objeto se desloca sobre a placa. A dupla domina o conceito quando não confunde mais mexer na câmera com mexer no objeto.`,
    },
    {
      titulo: `Peça centralizada e apresentada`,
      tipo: `projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `É o fechamento da aula e a roda de compartilhamento. Circule ajudando a centralizar. No fim, cada aluno orbita para mostrar o próprio modelo à turma.`,
      atividade: `Deixe o seu modelo bem no centro da placa usando a ferramenta Mover (M). Depois orbite para mostrá-lo visto por cima e visto por baixo. Por fim, apresente o seu modelo carregado para a turma, dizendo qual programa você usou para criá-lo (MagicaVoxel, Maya ou Blender).`,
      gabarito: `O modelo deve terminar centralizado na placa, com a peça apoiada sobre o quadriculado. O aluno usa a ferramenta Mover para centralizar e a navegação para mostrar a vista de cima e de baixo. A apresentação está completa quando ele exibe a peça por mais de um ângulo e diz em que programa a criou. Pequenas imperfeições de centralização são aceitáveis; o essencial é importar com segurança, navegar com confiança e diferenciar mover a câmera de mover a peça.`,
    },
  ],
};
