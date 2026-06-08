import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Bem-vindo ao Orca Slicer",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Descobrir o que é um fatiador, instalar e abrir o Orca Slicer, conhecer a interface e selecionar o perfil da impressora 3D da escola.`,
  descricao: `Nesta primeira aula do mês a turma começa a jornada da impressão 3D pelo passo que muita gente nem imagina que existe: o fatiador. Até agora o aluno aprendeu a modelar em 3D, mas a impressora não entende um modelo do jeito que ele sai do programa de modelagem. Ela precisa de um "tradutor" que transforme aquele desenho tridimensional em centenas de camadas finas, uma em cima da outra, e em instruções de movimento que a máquina sabe seguir. Esse tradutor é o fatiador, e o nosso será o Orca Slicer.

A palavra "fatiar" é a chave da aula. Assim como cortamos um pão em fatias para entender o que tem dentro, o fatiador corta o modelo 3D em fatias horizontais bem fininhas. A impressora então constrói o objeto fatia por fatia, de baixo para cima. Sem esse corte, a impressora simplesmente não saberia por onde começar nem como subir. O aluno vai perceber que existe uma ponte entre o mundo do desenho 3D e o objeto físico que ele vai segurar nas mãos no fim do mês.

O foco prático de hoje é ganhar familiaridade. O professor guia a instalação (ou abertura, se já estiver instalado), a turma passeia pela interface conhecendo a mesa de impressão virtual, o painel de objetos e a barra de ferramentas, e todos selecionam o perfil da impressora 3D da escola. Escolher o perfil certo é fundamental: é como dizer ao Orca Slicer "estou falando com esta impressora específica", para que as fatias saiam no tamanho e no formato corretos para a máquina da escola.

Não há impressão de verdade ainda nesta aula. O objetivo é o aluno sentir-se em casa no programa, saber nomear as partes da tela e entender por que o fatiador é o coração do processo. Esse conforto inicial prepara o terreno para as próximas aulas, quando ele vai mexer na mesa, importar personagens e, enfim, fatiar e imprimir o próprio modelo.`,
  materiais: [
    `Computadores com o Orca Slicer já instalado e aberto (um por aluno); se não estiver instalado, o instalador baixado numa pasta local ou pen drive`,
    `Projetor ou TV grande para o professor mostrar cada passo na tela`,
    `Conexão com a internet (caso seja preciso baixar o Orca Slicer do site oficial)`,
    `Arquivo de exemplo simples já em 3MF ou STL (por exemplo um cubo ou um chaveiro) para abrir e ver na mesa virtual`,
    `Impressora 3D da escola ligada e à vista, para os alunos associarem o perfil escolhido à máquina real`,
    `Folha impressa com o nome das partes da tela (mesa, painel de objetos, barra de ferramentas) colada na bancada`,
    `Ficha com o nome exato do perfil da impressora da escola, para todos selecionarem o mesmo`,
  ],
  conceitosChave: [
    `Fatiador (slicer) — programa que transforma um modelo 3D em camadas fininhas e em instruções que a impressora consegue seguir.`,
    `Orca Slicer — o fatiador que vamos usar o mês inteiro para preparar nossos modelos antes de imprimir.`,
    `Camada (layer) — cada "fatia" horizontal do objeto; a impressora monta o modelo empilhando camada sobre camada, de baixo para cima.`,
    `Perfil da impressora — o conjunto de ajustes que diz ao Orca Slicer com qual máquina ele está falando, para fatiar do jeito certo.`,
    `Mesa de impressão (plate) — a área virtual no centro da tela que representa a base real onde a peça será impressa.`,
    `Painel de objetos — a lista lateral que mostra os modelos carregados na cena e deixa selecionar e organizar cada um.`,
    `Barra de ferramentas — a fileira de ícones com as ações principais, como mover, girar e redimensionar o modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

O Orca Slicer é gratuito e pode ser baixado no site oficial (procure por "Orca Slicer" e baixe a versão para Windows). A instalação é a comum: baixar, executar e clicar em avançar até concluir. Na primeira vez que o programa abre, aparece um assistente de configuração (Configuration Wizard) que pede a marca e o modelo da impressora. É aqui que entra o perfil da impressora da escola. Tenha em mãos o nome exato do modelo da máquina da escola, anotado na ficha. As três regiões da tela que você vai nomear são: a mesa de impressão (o retângulo claro no centro, em 3D), o painel de objetos (lista à direita) e a barra de ferramentas (ícones na lateral esquerda, como mover, girar e escalar). Você não precisa fatiar nada hoje; basta abrir, reconhecer e selecionar o perfil. Faça o caminho uma vez sozinho antes da aula para ganhar segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre a impressora 3D da escola e faça a pergunta-chave: "como a impressora entende um modelo 3D?". Conduza até a ideia de que falta um tradutor. Apresente a palavra "fatiar" usando a comparação do pão cortado em fatias. Confirme com a turma que hoje vão conhecer esse tradutor, o Orca Slicer.

Conteúdo novo guiado (15 min): no projetor, abra o Orca Slicer. Se for a primeira abertura, percorra o Configuration Wizard: escolha a marca, depois o modelo da impressora da escola e clique em "Finish" (ou "Concluir"). Com o programa aberto, aponte e nomeie as três regiões: a mesa de impressão no centro, o painel de objetos à direita e a barra de ferramentas à esquerda. Abra o arquivo de exemplo em "File" e depois "Import" (ou arraste o arquivo para a mesa) só para que todos vejam um modelo pousado na mesa virtual. Por fim, mostre onde fica o nome do perfil da impressora, no topo do painel direito, e confirme que está o perfil da escola.

Mão na massa (25 min): cada aluno repete em seu computador. Quem precisa instalar, faz a instalação com você circulando pela sala. Todos abrem o Orca Slicer e, no assistente, selecionam o perfil da impressora da escola (o mesmo nome da ficha). Em seguida, importam o arquivo de exemplo por "File" e "Import" e observam o modelo aparecer na mesa. Peça que apontem com o mouse a mesa, o painel de objetos e a barra de ferramentas, nomeando cada um em voz alta. Circule confirmando que o perfil selecionado é igual para todos.

Desafio e compartilhar (10 min): desafie cada aluno a encontrar e ler em voz alta o nome do perfil da impressora na tela, provando que escolheram o certo. Feche com uma rodada rápida em que dois ou três alunos mostram a tela no projetor e dizem, com as próprias palavras, o que faz um fatiador.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. Diga que a impressora 3D é como um pedreiro que sobe uma parede tijolo por tijolo, mas que ele só sabe trabalhar se alguém entregar o projeto cortado em camadas. O fatiador é quem corta o modelo em fatias, como se fatiasse um pão para ver o miolo. O perfil da impressora é como colocar o crachá certo: é avisar ao programa "estou falando com esta máquina", senão as fatias saem do tamanho errado. Sempre que usar uma palavra em inglês como "slicer" ou "plate", fale o significado em português logo depois. Evite encher a aula de termos; hoje basta mesa, painel de objetos e barra de ferramentas.

## Erros comuns e como ajudar

O erro mais comum é o aluno escolher um modelo de impressora diferente no assistente, achando que tanto faz. Reforce que todos devem usar exatamente o perfil da escola, lendo o nome da ficha. Outro tropeço é fechar o Configuration Wizard sem escolher nada; nesse caso, mostre como reabrir o perfil pelo menu superior ou pelo seletor no topo do painel direito. Alguns confundem o painel de objetos com a barra de ferramentas; aponte cada região devagar e peça que repitam o nome. Há quem não consiga importar o exemplo por clicar no menu errado; oriente o caminho "File" e depois "Import", ou simplesmente arrastar o arquivo para a mesa. Por fim, se o programa abrir em inglês e isso travar o aluno, mostre onde mudar o idioma em "Preferences" caso esteja disponível, mas tranquilize que reconhecer os ícones já basta para hoje.`,
  exercicios: [
    {
      titulo: `Abrindo o Orca Slicer`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Acompanhe quem precisa instalar e circule confirmando que todos chegaram à tela inicial do programa. Use o projetor para mostrar o ícone do programa e o caminho de abertura.`,
      atividade: `Localize o ícone do Orca Slicer no computador, abra o programa e espere até ver a mesa de impressão no centro da tela. Se aparecer o assistente de configuração, deixe-o aberto sem fechar.`,
      gabarito: `O Orca Slicer abre e mostra a janela principal com a mesa de impressão (o retângulo claro em 3D no centro). Se for a primeira vez, o assistente de configuração aparece na tela, pronto para a próxima etapa.`,
    },
    {
      titulo: `Conhecendo as partes da tela`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor a mesa, o painel de objetos e a barra de ferramentas antes de soltar a turma. Peça que apontem com o mouse e digam o nome de cada região em voz alta.`,
      atividade: `Com o Orca Slicer aberto, aponte com o mouse e nomeie em voz alta três regiões da tela: a mesa de impressão (centro), o painel de objetos (lateral direita) e a barra de ferramentas (lateral esquerda).`,
      gabarito: `O aluno identifica corretamente as três regiões: a mesa de impressão no centro, o painel de objetos à direita e a barra de ferramentas à esquerda, nomeando cada uma sem trocar os nomes.`,
    },
    {
      titulo: `Selecionando o perfil da escola`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Tenha a ficha com o nome exato do perfil da impressora da escola visível. Confira um a um que todos selecionaram o mesmo modelo, e não um parecido.`,
      atividade: `No assistente de configuração (ou no seletor no topo do painel direito), escolha o perfil da impressora 3D da escola, igualzinho ao nome da ficha. Confirme a escolha e leia o nome do perfil que ficou na tela.`,
      gabarito: `O perfil selecionado é exatamente o da impressora da escola, idêntico ao da ficha. O nome do perfil aparece no topo do painel direito, e o aluno consegue lê-lo em voz alta confirmando o acerto.`,
    },
    {
      titulo: `Carregando o exemplo em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas. Um aluno dita os passos e o outro executa, depois trocam. Reforce o caminho "File" e depois "Import" e a alternativa de arrastar o arquivo para a mesa.`,
      atividade: `Em dupla, um dita e o outro executa: abrir o menu "File", clicar em "Import" e escolher o arquivo de exemplo, vendo o modelo pousar na mesa de impressão. Depois troquem de papel e repitam com o programa fechado e reaberto.`,
      gabarito: `O arquivo de exemplo aparece sobre a mesa de impressão e seu nome surge no painel de objetos à direita. Os dois alunos conseguem importar o modelo ao menos uma vez, usando o menu "File" e "Import" ou arrastando o arquivo.`,
    },
    {
      titulo: `Roda de conversa: para que serve um fatiador`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Conduza a roda com perguntas abertas e deixe dois ou três alunos mostrarem a tela no projetor. Valorize as explicações com palavras próprias e corrija com gentileza quem inverter a ideia.`,
      atividade: `Em roda, cada aluno explica com suas palavras o que faz um fatiador e por que a impressora 3D precisa dele. Use a comparação do pão fatiado ou da parede construída camada por camada para ajudar na explicação.`,
      gabarito: `Cada aluno explica que o fatiador corta o modelo 3D em camadas fininhas e cria as instruções que a impressora segue de baixo para cima. Respostas válidas usam comparações como "pão fatiado" ou "parede tijolo por tijolo" e citam o Orca Slicer como o fatiador da turma.`,
    },
  ],
};
