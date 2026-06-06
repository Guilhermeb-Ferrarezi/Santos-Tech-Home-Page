import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Maya 3D",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o Maya como ferramenta profissional de modelagem 3D, explorar sua interface e fazer cada aluno criar a primeira cena com uma forma básica na tela.`,
  descricao: `Nesta aula os alunos conhecem o Maya, um dos programas mais usados em estúdios de cinema e de games no mundo inteiro. Filmes de animação, efeitos especiais e personagens de jogos famosos passam por ferramentas como essa. A ideia é mostrar que o aluno está aprendendo algo de gente grande, de verdade, e que ele já tem uma base: o MagicaVoxel, que usamos nos meses anteriores. A diferença é que, no MagicaVoxel, tudo é feito com cubinhos (voxels), parecido com montar com peças de Lego. No Maya, trabalhamos com malhas (meshes), que são feitas de pontos, linhas e faces que podemos esticar e moldar livremente, como se fosse argila digital.

O foco do mês é modelar um objeto em 3D no Maya e, no fim, deixá-lo pronto para a impressão 3D de verdade. Esta primeira aula é a porta de entrada: o aluno vai abrir o programa, entender onde fica cada coisa na tela e perder o medo de uma interface que, à primeira vista, parece cheia de botões. Vamos navegar pela viewport (a janela onde a cena aparece), conhecer os menus do topo, o Outliner (a lista de tudo que existe na cena) e o Channel Box (onde ficam os números de posição, rotação e tamanho de cada objeto).

A parte mais animadora é que ninguém sai de mãos vazias: todo aluno vai criar um novo projeto organizado, salvar o arquivo com o próprio nome e colocar a primeira forma básica na tela, um cubo ou uma esfera. É um passo pequeno, mas é o começo concreto do modelo que será impresso no fim do mês. Quando o aluno vê a forma girando na tela com o controle dele, a empolgação aparece sozinha.

Para o professor iniciante, a tranquilidade é esta: hoje não precisamos modelar nada complexo. O objetivo é familiaridade e confiança. Se cada aluno conseguir abrir, organizar, salvar e criar uma forma, a aula foi um sucesso completo.`,
  materiais: [
    `Computadores com o Maya instalado e já aberto antes da aula começar (para não perder tempo com a tela de carregamento)`,
    `Projetor ou TV ligado ao computador do professor, para mostrar cada clique na tela grande`,
    `Arquivo de exemplo do professor: uma cena simples já salva, com um cubo e uma esfera, para mostrar o resultado esperado`,
    `Slide ou imagem com exemplos de filmes e games feitos com Maya, para a abertura da aula`,
    `Folha impressa (ou imagem no projetor) com o mapa da interface do Maya: viewport, menus, Outliner e Channel Box marcados`,
    `Mouse com três botões (ou com roda que clica) em cada computador, essencial para navegar no Maya`,
    `Lista com os nomes dos alunos para padronizar como cada um vai nomear o próprio projeto e arquivo`,
  ],
  conceitosChave: [
    `Maya — programa profissional de modelagem e animação 3D, usado em estúdios de cinema e de games no mundo todo.`,
    `Viewport — a janela principal onde a cena 3D aparece e onde acontece a maior parte do trabalho.`,
    `Outliner — painel em lista que mostra o nome de tudo que existe na cena, como um índice dos objetos.`,
    `Channel Box — painel à direita que mostra os números do objeto: posição, rotação e escala (tamanho).`,
    `Malha (mesh) — a forma 3D feita de pontos, linhas e faces, diferente dos cubinhos (voxels) do MagicaVoxel.`,
    `Projeto (Set Project) — pasta organizada onde o Maya guarda os arquivos da cena, mantendo tudo no lugar certo.`,
    `Forma primitiva — formas básicas prontas do Maya, como cubo, esfera e cilindro, que servem de ponto de partida.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para dar esta aula. Precisa de quatro habilidades simples: abrir o programa, criar um projeto, salvar um arquivo e adicionar uma forma básica. Pratique esses passos uma vez antes da aula. O Maya parece assustador por ter muitos botões, mas hoje usaremos pouquíssimos. Deixe o programa já aberto em todos os computadores. Tenha em mente a regra de ouro da navegação: segurar a tecla "Alt" e usar o mouse move a câmera. Botão esquerdo do Alt gira a vista, botão do meio (a roda apertada) arrasta, e o botão direito dá zoom. Treine isso, pois os alunos vão perguntar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: Pergunte o que eles lembram do MagicaVoxel. Mostre no projetor imagens de filmes e games feitos com Maya. Diga a frase-chave: "No MagicaVoxel a gente monta com cubinhos; no Maya a gente molda como argila." Crie expectativa para o modelo que será impresso no fim do mês.

15 min, conteúdo novo guiado: No seu computador, mostre a interface peça por peça. Aponte a "viewport" (a janela grande do meio). Mostre os "menus" no topo. Abra o "Outliner" em "Windows" maior que "Outliner" e explique que é a lista de objetos. Mostre o "Channel Box" no canto direito (se não aparecer, clique no ícone do canto superior direito). Agora ensine a organizar: clique em "File" maior que "Set Project", crie uma pasta com o nome do aluno e confirme em "Set". Depois "File" maior que "Save Scene As" e salve como "nome-aula1". Por fim, crie a forma: vá em "Create" maior que "Polygon Primitives" maior que "Cube". Um cubo aparece na viewport.

25 min, mão na massa: Agora é a vez deles, um por um no próprio computador. Peça para: 1) criar o projeto com "Set Project" usando o próprio nome; 2) salvar com "Save Scene As"; 3) adicionar um cubo por "Create" maior que "Polygon Primitives" maior que "Cube"; 4) adicionar uma esfera por "Create" maior que "Polygon Primitives" maior que "Sphere"; 5) praticar a navegação com "Alt" e mouse para girar e dar zoom na forma. Circule pela sala. Elogie cada forma que aparece na tela.

10 min, desafio e compartilhar: Lance o desafio de deixar o cubo e a esfera lado a lado, sem se encostarem, usando a ferramenta de mover (atalho "W"). Peça que cada aluno gire a câmera e mostre a cena para o colega ao lado. Termine pedindo que todos salvem de novo com "Ctrl+S".

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Chame a viewport de "o palco" onde tudo acontece. Diga que o Outliner é "a lista de chamada dos objetos". O Channel Box é "o RG do objeto, com os números dele". Compare a malha com argila ou massinha que pode ser esticada. Sempre nomeie o menu em voz alta enquanto clica: "Estou indo em Create, depois Polygon Primitives, depois Cube." Repita o caminho duas vezes. Evite termos técnicos sem tradução; sempre dê o apelido simples junto.

## Erros comuns e como ajudar

O erro mais comum é esquecer de criar o projeto antes de salvar; reforce a ordem "primeiro Set Project, depois Save". Muitos alunos somem com a forma da tela ao girar demais a câmera: ensine o atalho de enquadrar, apertar "F" com o objeto selecionado para a câmera voltar a ele. Outro tropeço é confundir "Save Scene As" com "Save"; oriente que na primeira vez use sempre "Save Scene As" para dar nome. Há quem clique sem segurar "Alt" e mova objetos sem querer; mostre que para navegar a câmera precisa do "Alt". Se a tela ficar estranha, ensine a maximizar a viewport apertando a barra de espaço. Por fim, alunos sem mouse de três botões terão dificuldade para navegar; garanta um mouse adequado em cada máquina antes de começar.`,
  exercicios: [
    {
      titulo: `Caça aos painéis`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza com a tela do projetor visível. Diga o nome de um painel e peça que cada aluno aponte na própria tela. Confira um por um. O objetivo é só reconhecer onde fica cada parte da interface.`,
      atividade: `No seu Maya aberto, localize e aponte com o cursor: a viewport (a janela grande), os menus do topo, o Outliner e o Channel Box. Abra o Outliner pelo menu "Windows" maior que "Outliner".`,
      gabarito: `A viewport é a janela central onde a cena aparece. Os menus ficam na barra do topo (File, Edit, Create e outros). O Outliner é a lista de objetos, aberto em "Windows" maior que "Outliner". O Channel Box fica à direita e mostra posição, rotação e escala.`,
    },
    {
      titulo: `Meu primeiro projeto salvo`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre o caminho completo no projetor antes. Reforce a ordem correta: primeiro criar o projeto, depois salvar a cena. Passe de mesa em mesa confirmando que o arquivo apareceu com o nome certo.`,
      atividade: `Crie um projeto novo em "File" maior que "Set Project" com uma pasta que tenha o seu nome. Depois salve a cena em "File" maior que "Save Scene As" com o nome "seunome-aula1".`,
      gabarito: `O projeto é criado em "File" maior que "Set Project", escolhendo ou criando uma pasta e clicando em "Set". A cena é salva em "File" maior que "Save Scene As", digitando "seunome-aula1" e confirmando. O nome do arquivo deve aparecer na barra de título do Maya.`,
    },
    {
      titulo: `Cubo e esfera na cena`,
      tipo: `desafio individual`,
      tempo: `6 minutos`,
      guiaProfessor: `Deixe os alunos tentarem sozinhos antes de ajudar. Se travarem, relembre o caminho do menu Create. Incentive que usem "Alt" e o mouse para girar a câmera e ver as duas formas de ângulos diferentes.`,
      atividade: `Adicione um cubo em "Create" maior que "Polygon Primitives" maior que "Cube" e uma esfera em "Create" maior que "Polygon Primitives" maior que "Sphere". Gire a câmera segurando "Alt" e o botão esquerdo do mouse para observar as duas formas.`,
      gabarito: `O cubo surge por "Create" maior que "Polygon Primitives" maior que "Cube" e a esfera por "Create" maior que "Polygon Primitives" maior que "Sphere". As duas devem aparecer na viewport e também na lista do Outliner. Girar a câmera é feito com "Alt" mais o botão esquerdo do mouse.`,
    },
    {
      titulo: `Dupla exploradora da navegação`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno descreve em voz alta o movimento da câmera enquanto o outro executa, depois trocam. Caminhe pela sala e ajude quem perder a forma de vista, ensinando o atalho "F" para enquadrar o objeto selecionado.`,
      atividade: `Em dupla, treinem os três movimentos de câmera: girar ("Alt" mais botão esquerdo), arrastar ("Alt" mais botão do meio) e dar zoom ("Alt" mais botão direito). Quando a forma sumir, selecionem ela e apertem "F" para enquadrar. Expliquem um para o outro o que cada movimento faz.`,
      gabarito: `Girar a vista usa "Alt" mais botão esquerdo; arrastar a vista usa "Alt" mais botão do meio (roda apertada); dar zoom usa "Alt" mais botão direito. O atalho "F" enquadra o objeto selecionado, trazendo a câmera de volta a ele. Cada dupla deve conseguir explicar os três movimentos com clareza.`,
    },
    {
      titulo: `Roda de conversa: Maya x MagicaVoxel`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Sente a turma em roda. Faça perguntas abertas e deixe vários alunos responderem. Não corrija de forma dura; complete as ideias deles. O objetivo é fechar a aula consolidando a diferença entre as duas ferramentas e animar para o modelo que será impresso.`,
      atividade: `Conversem em grupo: qual a maior diferença entre construir com cubinhos no MagicaVoxel e moldar malhas no Maya? Onde o Maya é usado no mundo real? O que cada um quer modelar e imprimir até o fim do mês?`,
      gabarito: `No MagicaVoxel a forma é feita de voxels (cubinhos), como montar com Lego; no Maya a forma é uma malha de pontos, linhas e faces que pode ser moldada livremente, como argila. O Maya é usado em estúdios de cinema e de games. Respostas sobre o que imprimir são pessoais e válidas desde que citem um objeto possível de modelar.`,
    },
  ],
};
