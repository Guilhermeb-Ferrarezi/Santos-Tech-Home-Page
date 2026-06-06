import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu modelo pronto pra impressão",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar, redimensionar e exportar o modelo voxel no formato correto para que ele fique pronto para a impressão 3D na Bambu Lab.`,
  descricao: `Esta é a aula que fecha o mês inteiro de trabalho. Durante quatro semanas, cada criança construiu, deu forma, pintou e detalhou um personagem em voxel no MagicaVoxel. Agora chegou o momento mais especial: transformar essa criação na tela em um arquivo de verdade, prontinho para virar um objeto que a criança vai poder segurar na mão. Esta aula é sobre cuidado, capricho e celebração. Não vamos criar coisas novas; vamos revisar com carinho o que já existe e prepará-lo para a impressora.

O coração desta aula é a exportação. No MagicaVoxel, o modelo voxel precisa ser salvo em um formato que a impressora 3D entenda. A impressora não lê o arquivo nativo do programa (o .vox); ela precisa de um arquivo de malha, como o formato .obj. Por isso, vamos ensinar a criança a usar o botão de exportar e a escolher o formato certo. Antes disso, fazemos uma revisão final: olhar o modelo de todos os lados, fechar buraquinhos, tirar cubinhos soltos e garantir que tudo está bem conectado.

O tamanho também importa muito. Um modelo voxel pode parecer enorme na tela, mas precisa ter um tamanho de grade que faça sentido para imprimir de verdade. Nesta aula, o professor ajuda a turma a verificar as dimensões do modelo e a entender que cada cubinho vai virar um pedacinho de plástico físico. Modelos muito grandes demoram horas para imprimir; modelos muito pequenos podem perder detalhes. Encontrar o equilíbrio faz parte da preparação.

No fim, cada criança salva seu arquivo com o próprio nome, mostra a criação para a turma e conta uma coisa de que mais gostou no processo. É um momento de orgulho e de pertencimento: o modelo está pronto para ir à Bambu Lab no próximo mês e voltar transformado em um brinquedo de verdade. O professor deve tornar esse encerramento caloroso e comemorativo.`,
  materiais: [
    `Computadores com o MagicaVoxel já aberto e o modelo de cada criança carregado`,
    `Projetor ou TV para o professor demonstrar os passos na tela grande`,
    `Dois ou três exemplos prontos: um modelo bem fechado e um com buracos, para comparar`,
    `Uma pasta combinada no computador para todos salvarem os arquivos exportados`,
    `Um objeto já impresso em 3D (ou foto) para mostrar o resultado final às crianças`,
    `Folha de "checklist do modelo pronto" impressa, com desenhos simples para cada item`,
  ],
  conceitosChave: [
    `Exportar — é tirar o desenho de dentro do programa e salvar como um arquivo que a impressora entende.`,
    `Formato .obj — o tipo de arquivo que guarda o modelo em forma de casquinha (malha) para a impressora ler.`,
    `Arquivo .vox — o arquivo do MagicaVoxel; é onde a gente continua editando, mas a impressora não lê ele.`,
    `Malha — a casquinha de fora do modelo, feita de muitos triângulos, que a impressora usa para construir o objeto.`,
    `Tamanho da grade — quantos cubinhos cabem na caixa do modelo; ele decide o tamanho do objeto impresso.`,
    `Revisão final — olhar o modelo de todos os lados para achar buracos e cubinhos soltos antes de salvar.`,
    `Buraco vazado — um espaço dentro do modelo que precisa ser fechado para a peça não quebrar na impressão.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta é a aula de fechamento do mês. O objetivo não é ensinar algo totalmente novo, e sim consolidar: revisar o modelo, ajustar o tamanho e exportar no formato certo. Mesmo que você seja iniciante no MagicaVoxel, três botões resolvem quase tudo. No canto superior esquerdo, o menu mostra a área de trabalho. Do lado direito ficam os painéis de cor e de ferramentas. Embaixo do canvas, fica a barra com o tamanho da grade (por exemplo, "40 40 40"). E à direita há os botões de salvar e exportar. O formato que a impressora 3D entende é o ".obj"; o arquivo ".vox" é só para continuar editando. Antes da aula, abra um modelo de teste e clique em "Export" uma vez para localizar a opção "obj". Assim você demonstra com segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): reúna a turma perto do projetor. Mostre o objeto 3D já impresso e diga: "hoje o modelo de vocês fica pronto para virar isto de verdade". Relembre o que fizeram nas semanas anteriores: construir, dar forma, pintar e detalhar. Peça para cada criança girar o próprio modelo na tela com o botão direito do mouse e olhar de todos os lados.

Conteúdo novo guiado (15 min): no seu computador projetado, faça a revisão final passo a passo. Primeiro, gire o modelo segurando o botão direito do mouse. Procure cubinhos flutuando soltos no ar; clique na ferramenta "Erase" e remova-os. Procure buracos onde deveria ter cubinho; use a ferramenta "Attach" (a setinha de adicionar) na cor certa e feche. Depois, mostre a barra embaixo do canvas com o tamanho da grade. Explique que aqueles números são o tamanho da caixa. Por fim, clique no botão "Export" (canto direito) e mostre a lista de formatos; aponte para "obj" e clique. Apareça uma janela para dar nome e salvar na pasta combinada.

Mão na massa (25 min): cada criança faz o mesmo no próprio modelo. Circule pela sala. Passo 1: girar e revisar de todos os lados. Passo 2: apagar cubinhos soltos com "Erase". Passo 3: fechar buracos com "Attach". Passo 4: conferir o tamanho da grade na barra de baixo. Passo 5: clicar em "Export", escolher "obj", digitar o próprio nome e salvar na pasta combinada. Use o checklist impresso: a criança marca cada item conforme termina. Quem acabar antes pode também salvar o ".vox" como cópia de segurança.

Desafio e compartilhar (10 min): cada criança mostra o modelo girando na tela e diz uma frase: "o que eu mais gostei de fazer foi...". Comemore cada um. Anuncie que no próximo mês os arquivos vão para a Bambu Lab e voltam impressos.

## Como explicar para crianças

Use a ideia da "casquinha". Diga: "o programa guarda o desenho do jeito dele, mas a impressora fala outra língua. Exportar é como traduzir o seu desenho para a língua da impressora." Compare o ".obj" com uma fôrma de biscoito: é o molde que a máquina vai usar. Para os buracos, diga: "se tiver um buraco, o plástico não tem onde se segurar, e a peça pode quebrar; vamos tampar como quem tampa um pote." Para o tamanho, mostre as mãos: "cada cubinho vira um pedacinho de plástico; se a caixa for gigante, demora muito; se for pequenininha, perde os detalhes."

## Erros comuns e como ajudar

O erro mais comum é salvar como ".vox" achando que está exportando; reforce que para a impressora é sempre "obj". Outro erro é deixar cubinhos soltos flutuando: eles viram pedacinhos quebrados na impressão, então peça para girar bastante e caçar os soltos. Crianças costumam esquecer de olhar embaixo e atrás do modelo; lembre-as de girar 360 graus. Alguns vão querer mudar a cor ou adicionar coisas novas; gentilmente redirecione: "hoje a gente finaliza, não cria". Por fim, muitos esquecem de digitar o próprio nome no arquivo; combine um padrão simples, como o primeiro nome, para ninguém perder a criação.`,
  exercicios: [
    {
      titulo: `Caça aos cubinhos soltos`,
      tipo: `Observação guiada`,
      tempo: `4 minutos`,
      guiaProfessor: `Peça para a criança girar o modelo segurando o botão direito do mouse e olhar de todos os lados. O objetivo é treinar o olhar antes de exportar. Ajude quem não conseguir girar a câmera.`,
      atividade: `Gire o seu modelo devagar e procure cubinhos que estão flutuando soltos no ar, sem encostar em nada. Aponte cada um que encontrar e conte em voz alta quantos achou.`,
      gabarito: `A criança consegue girar o modelo em todas as direções e identificar visualmente qualquer cubinho desconectado. Se não houver nenhum solto, a resposta correta é dizer "achei zero, meu modelo está limpo". O sucesso é ter olhado de frente, de trás, de cima e de baixo.`,
    },
    {
      titulo: `Tampando os buracos`,
      tipo: `Prática no MagicaVoxel`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre a ferramenta "Attach" (adicionar) e a ferramenta "Erase" (apagar). A criança usa "Erase" para tirar os soltos e "Attach" na cor certa para fechar buracos. Verifique se ela escolheu a cor parecida com a vizinhança.`,
      atividade: `Use a ferramenta "Erase" para apagar os cubinhos soltos que você achou. Depois, use a ferramenta "Attach" para colocar cubinhos e fechar qualquer buraco vazado, escolhendo uma cor parecida com a de perto.`,
      gabarito: `O modelo fica sem cubinhos soltos e sem buracos vazados visíveis. As cores dos cubinhos novos combinam com a região onde foram colocados. O modelo continua sendo uma peça única e bem conectada, pronta para o próximo passo.`,
    },
    {
      titulo: `Conferindo o tamanho da caixa`,
      tipo: `Leitura de números`,
      tempo: `4 minutos`,
      guiaProfessor: `Aponte a barra embaixo do canvas que mostra o tamanho da grade, por exemplo "40 40 40". Explique que são largura, altura e profundidade. Ajude a criança a ler os três números em voz alta.`,
      atividade: `Olhe a barra embaixo do seu modelo e leia os três números do tamanho da grade. Diga em voz alta quantos cubinhos de largura, de altura e de profundidade a caixa do seu modelo tem.`,
      gabarito: `A criança lê corretamente os três números mostrados na barra inferior (por exemplo, "quarenta, quarenta, quarenta") e entende que eles representam largura, altura e profundidade. Não há um valor único certo; o acerto é ler e nomear os três números do próprio modelo.`,
    },
    {
      titulo: `Exportando no formato certo`,
      tipo: `Tarefa central da aula`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe de perto. A criança clica em "Export", escolhe "obj", digita o próprio nome e salva na pasta combinada. O erro mais comum é confundir "obj" com "vox"; reforce que a impressora só lê "obj".`,
      atividade: `Clique no botão "Export", escolha o formato "obj", digite o seu primeiro nome no campo do arquivo e salve dentro da pasta combinada pela professora. Avise quando aparecer a mensagem de que salvou.`,
      gabarito: `Existe um arquivo com a extensão ".obj" salvo na pasta combinada, nomeado com o nome da criança. O arquivo NÃO é ".vox". A criança consegue mostrar onde o arquivo ficou guardado. Esse é o entregável principal do mês: o modelo pronto para impressão.`,
    },
    {
      titulo: `Checklist do modelo pronto e apresentação`,
      tipo: `Autoavaliação e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue o checklist impresso. A criança marca cada item: sem soltos, sem buracos, tamanho conferido, exportado em obj, salvo com o nome. Depois, cada uma apresenta o modelo girando e diz o que mais gostou. Comemore todos.`,
      atividade: `Marque cada item do checklist do seu modelo: sem cubinhos soltos, sem buracos, tamanho conferido, exportado em "obj" e salvo com o meu nome. Depois, mostre o seu modelo girando para a turma e diga uma frase: "o que eu mais gostei de fazer foi...".`,
      gabarito: `Todos os cinco itens do checklist estão marcados e verdadeiros: o modelo está sem soltos, sem buracos, com tamanho conferido, exportado em ".obj" e salvo com o nome. A criança apresenta o modelo para a turma e completa a frase com algo de que gostou. O modelo está oficialmente pronto para ir à Bambu Lab.`,
    },
  ],
};
