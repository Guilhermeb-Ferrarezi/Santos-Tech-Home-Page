import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Preparando o Unity para VR",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Criar um novo projeto Unity e instalar, pelo Package Manager, o XR Plugin Management e o XR Interaction Toolkit, deixando o ambiente pronto para desenvolver em Realidade Virtual.`,
  descricao: `Nesta aula o aluno dá o primeiro passo prático da jornada em Realidade Virtual: ele monta o ambiente de trabalho. Nas Aulas 1 e 2 a turma entendeu o que é VR e como o headset engana o cérebro com duas imagens e sensores de movimento. Agora chegou a hora de ligar a oficina. Assim como um marceneiro precisa preparar a bancada antes de cortar a madeira, o desenvolvedor de VR precisa preparar o Unity antes de programar a experiência. Hoje ninguém vai colocar o óculos ainda; o trabalho é deixar tudo pronto para isso.

O Unity, sozinho, não sabe falar com óculos de Realidade Virtual. Ele precisa de pacotes extras, que são como aplicativos que instalamos no programa para ganhar novas habilidades. Dois pacotes são essenciais e serão instalados nesta aula. O primeiro é o XR Plugin Management, que funciona como um tradutor: ele faz o Unity conversar com diferentes marcas de óculos (Meta Quest, Valve, e o simulador no PC) sem que o aluno precise reescrever o projeto para cada um. O segundo é o XR Interaction Toolkit, que é uma caixa de ferramentas pronta com comportamentos comuns de VR, como olhar ao redor, mover, pegar objetos e teleportar.

A instalação acontece dentro de uma janela chamada Package Manager, o gerenciador de pacotes do Unity. O aluno vai aprender a abrir essa janela, encontrar os pacotes oficiais e instalá-los com poucos cliques. Tudo é feito pela interface, sem digitar comandos. O importante é que o aluno entenda o porquê de cada pacote, e não só decore os cliques: assim ele saberá explicar para que serve cada peça do quebra-cabeça da VR.

O foco do mês é a Introdução à VR no Unity, e o entregável final é olhar e se mover dentro de um mundo virtual. Esta aula é a fundação de tudo: sem o ambiente preparado, nada nas próximas aulas vai funcionar. Por isso o professor deve dar atenção especial para que TODOS os alunos terminem a aula com os dois pacotes instalados e o projeto salvo. Quem sair daqui com o ambiente pronto vai conseguir acompanhar a montagem do XR Rig na Aula 4 sem tropeços.`,
  materiais: [
    `Computadores com Unity Hub e o Unity Editor (versão LTS recente) instalados e funcionando, um por aluno`,
    `Conexão com a internet estável para baixar os pacotes pelo Package Manager`,
    `Projetor ou TV para o professor demonstrar cada passo no Unity em tela grande`,
    `Óculos VR guardados (nesta aula não serão usados; apenas mostrados rapidamente para motivar a turma)`,
    `Arquivo de exemplo: um documento simples com os nomes exatos dos dois pacotes (XR Plugin Management e XR Interaction Toolkit) para os alunos copiarem sem erro`,
    `Folha impressa ou slide com o checklist da aula (criar projeto, abrir Package Manager, instalar pacote 1, instalar pacote 2, salvar)`,
  ],
  conceitosChave: [
    `Projeto Unity — a pasta que guarda tudo de um jogo ou experiência: cenas, códigos, modelos e configurações.`,
    `Package Manager — a janela do Unity onde instalamos, atualizamos e removemos pacotes extras de funcionalidade.`,
    `Pacote (package) — um conjunto pronto de código e recursos que adiciona novas habilidades ao Unity, como um aplicativo instalado.`,
    `XR — sigla para Extended Reality (realidade estendida), que reúne Realidade Virtual, Aumentada e Mista em uma só família.`,
    `XR Plugin Management — o pacote tradutor que faz o Unity conversar com diferentes marcas de óculos e com o simulador no PC.`,
    `XR Interaction Toolkit — a caixa de ferramentas pronta com comportamentos de VR, como olhar, mover, pegar e teleportar.`,
    `Template (modelo de projeto) — um ponto de partida já configurado que o Unity oferece ao criar um projeto novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Realidade Virtual para dar esta aula. Precisa entender três ideias simples. Primeira: o Unity é o programa onde criamos o jogo, e cada jogo vive dentro de um projeto, que é uma pasta. Segunda: o Unity puro não fala com óculos de VR; para isso instalamos pacotes, que são como aplicativos extras. Terceira: a instalação é feita por uma janela chamada Package Manager, toda com cliques, sem digitar comando nenhum. Os dois pacotes da aula são o XR Plugin Management (o tradutor que conversa com os óculos) e o XR Interaction Toolkit (a caixa de ferramentas com olhar, mover e pegar). Antes da aula, faça o caminho completo uma vez sozinho para ganhar confiança e descobrir quanto tempo leva o download na internet da escola.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Relembre a turma: "Como o óculos engana o cérebro?" Conduza até as duas imagens e os sensores. Depois faça a ponte: "Hoje vamos preparar a oficina para construir esse mundo." Mostre rápido um óculos guardado e diga que ele só funcionará quando o ambiente estiver pronto.

15 min, conteúdo novo guiado. No projetor, abra o Unity Hub, clique em "New project", escolha o template "3D" (ou "3D Core"), dê um nome como ProjetoVR e clique em "Create project". Quando o Unity abrir, vá no menu superior "Window" e clique em "Package Manager". No topo da janela, troque o seletor para "Unity Registry". Na barra de busca, digite XR Plugin Management, selecione o pacote e clique em "Install". Espere terminar. Em seguida, busque XR Interaction Toolkit e clique em "Install"; se aparecer um aviso pedindo para reiniciar ou ativar o novo sistema de Input, aceite. Explique cada clique em voz alta enquanto faz.

25 min, mão na massa. Cada aluno repete o caminho no próprio computador: cria o projeto, abre o Package Manager, troca para "Unity Registry" e instala os dois pacotes. Circule pela sala conferindo. Quando um aluno terminar, peça que abra "Edit", "Project Settings", "XR Plug-in Management" só para ver que a seção agora existe, prova de que o tradutor foi instalado. Por fim, mande todos salvarem com "File", "Save Project".

10 min, desafio e compartilhar. Peça que cada aluno explique ao colega do lado, com as próprias palavras, para que serve cada um dos dois pacotes. Faça uma rodada rápida: cada um diz "o XR Plugin Management serve para..." e "o XR Interaction Toolkit serve para...". Encerre confirmando que todos terminaram com o ambiente pronto.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: "O projeto é a pasta do trabalho de escola: tudo do jogo fica guardado lá." Para os pacotes: "O Unity vem de fábrica sem saber falar com óculos. Os pacotes são como aplicativos que instalamos no celular para ganhar funções novas." Para o XR Plugin Management: "É o tradutor que faz o Unity conversar com qualquer marca de óculos." Para o XR Interaction Toolkit: "É a caixa de ferramentas pronta, com olhar, mover e pegar já feitos, para não precisarmos programar tudo do zero." Sempre conecte ao objetivo do mês: "Sem isso, nas próximas aulas o óculos não vai funcionar."

## Erros comuns e como ajudar

O erro mais comum é o aluno buscar o pacote com o seletor ainda em "In Project" e não achar nada; ensine a trocar para "Unity Registry" antes de buscar. Outro erro é digitar o nome errado na busca; deixe o nome exato no arquivo de exemplo para copiar. Alguns clicam em "Install" e acham que travou, mas é só o download; peça paciência e mostre a barrinha de progresso. Quando aparece o aviso para reiniciar por causa do novo sistema de Input, muitos clicam em "No" por medo; explique que deve clicar para aceitar e que o Unity vai reabrir sozinho. Por fim, há quem esqueça de salvar o projeto; reforce o "File", "Save Project" no final, senão o trabalho se perde.`,
  exercicios: [
    {
      titulo: `Criando a oficina: novo projeto Unity`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno use o template "3D" e dê um nome sem espaços nem acentos, como ProjetoVR. Confira que o Unity abre sem erros antes de seguir.`,
      atividade: `No Unity Hub, crie um novo projeto usando o template "3D". Dê o nome ProjetoVR e clique em "Create project". Espere o Unity abrir e mostre a tela inicial ao professor.`,
      gabarito: `Caminho correto: Unity Hub, botão "New project", template "3D" (ou "3D Core"), nome ProjetoVR, botão "Create project". O resultado esperado é o Unity Editor aberto com uma cena vazia. Se não abrir, geralmente o template não foi selecionado ou o nome tinha caracteres inválidos; refaça escolhendo o template "3D" e usando um nome simples sem espaços nem acentos.`,
    },
    {
      titulo: `Achando a loja de pacotes: o Package Manager`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre que o Package Manager fica no menu "Window". Reforce a troca do seletor do topo de "In Project" para "Unity Registry", pois é o erro que mais trava a busca.`,
      atividade: `Com o projeto aberto, abra o Package Manager pelo menu "Window". No topo da janela, troque o seletor para "Unity Registry". Na barra de busca, digite XR e veja a lista de pacotes aparecer.`,
      gabarito: `Caminho correto: menu "Window", "Package Manager"; no topo, trocar o seletor para "Unity Registry"; buscar por XR. O resultado esperado é uma lista com vários pacotes XR aparecendo. Se nada aparecer na busca, o seletor provavelmente está em "In Project"; basta trocar para "Unity Registry" e buscar de novo.`,
    },
    {
      titulo: `Instalando o tradutor: XR Plugin Management`,
      tipo: `prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe o download, que pode demorar conforme a internet. Depois da instalação, mostre que a seção "XR Plug-in Management" aparece em "Project Settings", prova de que funcionou.`,
      atividade: `No Package Manager, busque XR Plugin Management, selecione o pacote e clique em "Install". Espere terminar. Depois, abra "Edit", "Project Settings" e encontre a seção "XR Plug-in Management" para confirmar que ele foi instalado.`,
      gabarito: `Caminho correto: Package Manager com "Unity Registry" selecionado, buscar XR Plugin Management, selecionar e clicar em "Install"; aguardar o download. Confirmação: em "Edit", "Project Settings" passa a existir a seção "XR Plug-in Management". Se ela não aparecer, a instalação não terminou ou o pacote errado foi instalado; refaça a busca e a instalação e aguarde a barra de progresso concluir.`,
    },
    {
      titulo: `Instalando a caixa de ferramentas: XR Interaction Toolkit`,
      tipo: `em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas: um instala enquanto o outro confere o nome exato no arquivo de exemplo. Avise que pode surgir um aviso pedindo para reiniciar por causa do novo sistema de Input; oriente a aceitar.`,
      atividade: `Em dupla, no Package Manager (em "Unity Registry"), busquem XR Interaction Toolkit e cliquem em "Install". Se aparecer um aviso pedindo para ativar o novo sistema de Input e reiniciar, aceitem. Confiram juntos que o pacote aparece na lista de instalados.`,
      gabarito: `Caminho correto: Package Manager em "Unity Registry", buscar XR Interaction Toolkit, clicar em "Install"; ao surgir o aviso do novo Input System, aceitar e deixar o Unity reiniciar. Confirmação: o XR Interaction Toolkit aparece marcado como instalado na janela do Package Manager. Se a dupla clicar em "No" no aviso, o sistema de Input pode não ficar pronto; reabra o Package Manager e aceite o aviso ao reinstalar ou reativar.`,
    },
    {
      titulo: `Mini desafio: explicar e salvar o ambiente pronto`,
      tipo: `desafio`,
      tempo: `12 minutos`,
      guiaProfessor: `Este exercício fecha a aula e garante o entregável. Cobre a explicação em voz do aluno (entendimento) e o salvamento (não perder o trabalho). Confira o checklist com cada aluno antes de liberar.`,
      atividade: `Confira seu checklist: projeto criado, dois pacotes instalados (XR Plugin Management e XR Interaction Toolkit). Explique ao colega, em uma frase para cada, o que cada pacote faz. Por fim, salve tudo com "File", "Save Project".`,
      gabarito: `Respostas esperadas nas frases: "O XR Plugin Management serve para o Unity conversar com diferentes óculos de VR e com o simulador, como um tradutor"; "O XR Interaction Toolkit serve para dar ferramentas prontas de VR, como olhar, mover e pegar objetos". Salvamento correto: menu "File", "Save Project". O ambiente está pronto quando os dois pacotes estão instalados e o projeto foi salvo. Respostas fracas a melhorar: "São pacotes de VR" sem dizer a função de cada um; peça ao aluno que diferencie o tradutor (Plugin Management) da caixa de ferramentas (Interaction Toolkit).`,
    },
  ],
};
