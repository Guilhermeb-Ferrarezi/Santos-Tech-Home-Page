import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Do jogo para a impressora",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Importar para o Bambu Studio os personagens 3D criados ao longo do Ano 1 e revisar a malha de cada modelo, conferindo escala, proporção e se o arquivo está fechado, para preparar o terreno da impressão real.`,
  descricao: `Chegou o último mês do Ano 1, e ele é especial: os personagens que cada aluno desenhou em pixel art, modelou em voxel e transformou em 3D vão sair da tela e virar objetos de verdade. Mas antes de apertar qualquer botão de imprimir, precisamos preparar o caminho. Esta primeira aula é a ponte entre o computador e a impressora: vamos abrir o Bambu Studio e trazer cada modelo para dentro dele.

O Bambu Studio é o programa que conversa com a impressora 3D. Ele recebe um modelo 3D (um arquivo .stl, .obj ou .3mf), mostra esse modelo flutuando em cima de uma "mesa" virtual e, mais pra frente, traduz o desenho em instruções que a máquina entende. Nesta aula, o foco não é fatiar nem imprimir ainda, e sim garantir que o modelo de cada aluno está saudável: do tamanho certo, com proporções corretas e, principalmente, com a malha fechada (sem buracos).

Por que tanto cuidado com a malha? Porque a impressora 3D constrói o objeto camada por camada, como se empilhasse fatias de presunto. Se o modelo tem um buraco na "casca", a impressora se confunde e não sabe onde é dentro e onde é fora. O resultado costuma ser uma impressão falhada, com partes faltando ou derretendo no ar. Por isso o professor vai mostrar onde o Bambu Studio avisa que existe um problema e como pedir que ele tente consertar sozinho.

Ao final da aula, cada aluno deve ter pelo menos um personagem aberto no Bambu Studio, posicionado sobre a mesa virtual, no tamanho aproximado de uma miniatura e sem avisos de erro na malha. Esse é o ponto de partida seguro para as próximas aulas, em que vamos orientar, gerar suportes, fatiar e, enfim, imprimir de verdade.`,
  materiais: [
    `Computadores (1 por aluno) com o Bambu Studio instalado e aberto`,
    `Projetor ou TV para o professor mostrar a própria tela passo a passo`,
    `Arquivos 3D dos personagens criados no Ano 1 (.stl, .obj ou .3mf), organizados em uma pasta por aluno`,
    `Um arquivo de exemplo do professor (um personagem simples) para demonstrar a importação`,
    `Um arquivo "quebrado" de propósito (modelo com buraco na malha) para mostrar o aviso de erro`,
    `A impressora 3D no canto da sala, ligada, só para os alunos verem o destino final (sem imprimir hoje)`,
    `Pendrive ou pasta de rede para os alunos que precisarem copiar os arquivos do Ano 1`,
  ],
  conceitosChave: [
    `Malha (mesh) — a "casca" do modelo 3D, feita de milhares de triângulos que formam a superfície do personagem.`,
    `Malha fechada (watertight) — quando a casca não tem buracos, como um balão sem furos; é o que a impressora precisa para funcionar.`,
    `Mesa de impressão (plate) — a área quadriculada na tela do Bambu Studio que representa a base real da impressora onde o objeto será construído.`,
    `Importar — trazer um arquivo de fora para dentro do programa, usando o menu Arquivo ou o botão "+", para que o modelo apareça na cena.`,
    `Escala — o tamanho do modelo; mexer na escala deixa o personagem maior ou menor, em porcentagem ou em milímetros.`,
    `Formato de arquivo — o "sobrenome" do arquivo (.stl, .obj, .3mf) que diz como o modelo está guardado; o Bambu Studio abre todos esses.`,
    `Reparar malha (repair) — função do Bambu Studio que tenta fechar buracos e consertar erros do modelo automaticamente.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula; precisa só conhecer quatro telas do Bambu Studio. Abra o programa antes dos alunos chegarem. Na tela inicial você verá uma área central quadriculada (a mesa de impressão), uma barra de ferramentas vertical à esquerda, e o menu superior com "Arquivo" (ou "File"). No topo direito aparece a impressora selecionada; se houver uma Bambu Lab listada, ótimo, deixe-a. Hoje ninguém vai imprimir: o objetivo é só importar os personagens e checar se estão saudáveis.

Faça um teste sozinho: importe seu arquivo de exemplo, gire a câmera com o botão direito do mouse, dê zoom com a rolagem e mova o modelo. Assim você ganha segurança para repetir na frente da turma.

## Passo a passo da aula

Aquecimento (10 min). Pergunte: "Lembram dos personagens que vocês criaram? Hoje começamos a transformá-los em bonecos de verdade." Mostre a impressora ligada no canto e explique que a aula de hoje é a "sala de espera" antes da impressão. Abra o Bambu Studio no projetor.

Conteúdo novo guiado (15 min). Demonstre a importação na sua tela. Clique em "Arquivo" e depois em "Importar" (atalho Ctrl+I), ou use o ícone "+" na barra superior. Escolha seu arquivo de exemplo e clique em "Abrir". O personagem aparece sobre a mesa quadriculada. Gire a câmera segurando o botão direito do mouse e arrastando; dê zoom com a rolagem. Clique uma vez no modelo para selecioná-lo (fica com contorno). À direita aparece o painel de objeto, onde estão a posição e o tamanho. Mostre o campo de Escala (Scale): explique que 100% é o tamanho original. Em seguida, abra seu arquivo "quebrado" de propósito: o Bambu Studio mostra um aviso (um triângulo amarelo ou uma mensagem de malha não fechada). Clique com o botão direito sobre o modelo e escolha "Reparar" (Fix model / Repair) para ele tentar consertar.

Mão na massa (25 min). Cada aluno abre seus próprios arquivos do Ano 1. Passe nas máquinas e ajude a localizar a pasta. Para cada personagem: importar, posicionar no centro da mesa, conferir se aparece algum aviso amarelo e, se aparecer, usar "Reparar". Peça que olhem a régua: a mesa tem medidas em milímetros, então dá pra ver se o boneco está do tamanho de uma miniatura (entre 3 e 6 cm de altura é um bom alvo). Quem terminar um personagem importa o próximo.

Desafio e compartilhar (10 min). Lance o desafio: "Deixe seu personagem favorito centralizado, sem nenhum aviso de erro e com altura parecida com a de uma borracha escolar." Faça uma volta rápida pela sala para cada aluno mostrar a tela em uma frase.

## Como explicar de forma clara

Use comparações do dia a dia. A malha é a "casca" ou a "embalagem" do personagem; se tiver furo, "vaza". A mesa é o "tabuleiro" onde o boneco vai nascer. Importar é "trazer de visita" o arquivo pra dentro do programa. Evite jargão técnico solto: sempre que disser "malha" ou "escala", dê logo o exemplo concreto. Lembre que a faixa é de 10 a 15 anos; os mais novos gostam de analogias (balão, presunto fatiado), os mais velhos gostam de saber o porquê (a impressora precisa saber onde é dentro e fora).

## Erros comuns e como ajudar

O erro mais frequente é o aluno não achar o arquivo: confirme em que pasta o personagem do Ano 1 foi salvo e o formato (.stl, .obj ou .3mf). Outro clássico é o modelo aparecer gigante ou minúsculo, dependendo de como foi exportado; mostre o campo de Escala e ajude a aproximar do tamanho de miniatura, sem ainda se preocupar com o número exato. Muitos esquecem de selecionar o objeto antes de mexer (clique uma vez nele). E quando aparece o aviso amarelo de malha aberta, o aluno tende a ignorar: reforce que esse aviso é o mais importante do dia e sempre tente "Reparar" primeiro. Se a câmera "sumir" com o modelo, ensine o atalho de centralizar a vista ou peça que deem zoom out com a rolagem.`,
  exercicios: [
    {
      titulo: `Trazendo o personagem pra dentro`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno saiba localizar a própria pasta do Ano 1. Demonstre a importação uma vez no projetor antes de soltar a turma. Circule confirmando que o modelo aparece sobre a mesa.`,
      atividade: `Abra o Bambu Studio, clique em Arquivo > Importar (ou use Ctrl+I), escolha um personagem que você criou no Ano 1 e clique em Abrir. Gire a câmera com o botão direito do mouse e dê zoom para ver seu boneco de todos os lados.`,
      gabarito: `O aluno acertou se o personagem dele aparece flutuando ou apoiado sobre a mesa quadriculada e ele consegue girar a câmera para ver o modelo de vários ângulos. Não precisa estar perfeito ainda, só visível na cena.`,
    },
    {
      titulo: `Caça ao buraco na malha`,
      tipo: `Desafio`,
      tempo: `7 min`,
      guiaProfessor: `Distribua (ou abra na máquina) o arquivo "quebrado" de propósito junto com um arquivo bom. O objetivo é o aluno reconhecer o aviso de erro e usar a função Reparar. Mostre onde o triângulo amarelo costuma aparecer.`,
      atividade: `Você recebeu dois modelos: um saudável e um com buraco na casca. Importe os dois, descubra qual deles mostra o aviso amarelo de malha não fechada e clique com o botão direito sobre ele para escolher Reparar. Veja se o aviso some.`,
      gabarito: `O aluno acertou se identificou corretamente qual modelo tinha o aviso de erro e usou a opção Reparar (Fix model / Repair). Sucesso total é o aviso desaparecer; se não sumir, o importante é ele ter percebido o problema e tentado a correção.`,
    },
    {
      titulo: `Tamanho de miniatura`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Mostre o campo de Escala no painel à direita e explique que 100% é o tamanho original. Use a régua da mesa (em milímetros) como referência. Não exija número exato; o objetivo é noção de proporção.`,
      atividade: `Selecione seu personagem clicando nele uma vez. No painel à direita, encontre a Escala. Ajuste até o boneco ficar com mais ou menos a altura de uma borracha escolar (entre 3 e 6 cm), usando a régua da mesa para conferir.`,
      gabarito: `O aluno acertou se o personagem está visivelmente do tamanho aproximado de uma miniatura, dentro da faixa de 3 a 6 cm de altura, e se ele soube usar o campo de Escala para mudar o tamanho sem deformar o modelo.`,
    },
    {
      titulo: `Dupla de revisão`,
      tipo: `Em dupla`,
      tempo: `8 min`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira. Cada um revisa o modelo do colega usando uma checklist simples. Estimule a falar com gentileza ("achei um detalhe", não "está errado").`,
      atividade: `Troque de lugar com o colega. Olhe a tela dele e confira três coisas: (1) o personagem está sobre a mesa? (2) tem algum aviso amarelo de malha? (3) o tamanho parece de miniatura? Anote o que encontrar e conte pra ele.`,
      gabarito: `A dupla acertou se conseguiu apontar, para cada modelo, se passou ou não nos três itens da checklist. O resultado esperado é cada aluno sair sabendo se o próprio personagem está centralizado, sem aviso de erro e em tamanho de miniatura.`,
    },
    {
      titulo: `Meu personagem pronto pra fila`,
      tipo: `Projeto curto`,
      tempo: `10 min`,
      guiaProfessor: `Esta é a tarefa que fecha a aula e prepara a próxima. Peça que cada aluno deixe um personagem "aprovado" e salve o projeto. Faça a roda final de compartilhamento, cada um em uma frase, mostrando a tela.`,
      atividade: `Escolha seu personagem favorito do Ano 1. Deixe-o sobre a mesa, centralizado, sem nenhum aviso amarelo de malha e em tamanho de miniatura. Salve o projeto (Arquivo > Salvar) e diga à turma, em uma frase, quem é esse personagem.`,
      gabarito: `O aluno acertou se entregou um personagem importado, centralizado na mesa, sem avisos de erro de malha, em tamanho aproximado de miniatura e com o projeto salvo. Esse modelo é o que será orientado e fatiado nas próximas aulas; se sobrou algum aviso, anote para retomar na Aula 2.`,
    },
  ],
};
