import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Empacotar e Publicar o Jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Compilar e empacotar o projeto da Unreal Engine em um executável jogável (build) para Windows, configurar as opções de empacotamento, testar o jogo fora do editor e preparar a versão final que será apresentada no Demo Day.`,
  descricao: `Nesta aula o aluno dá o passo que transforma o projeto em um jogo de verdade: deixar de jogar só dentro do editor e gerar um executável que roda sozinho no computador, como qualquer jogo que ele baixa ou instala. Até agora a turma testou tudo pelo botão Play da Unreal Engine, mas ninguém entrega um jogo pedindo para a pessoa abrir o editor. O entregável do mês é um jogo final pronto para o Demo Day, e empacotar (fazer o packaging) é o que cria esse pacote distribuível.

Empacotar significa pegar o projeto, compilar o código C++, processar todos os assets (modelos, texturas, sons, mapas) e juntar tudo em uma pasta com um arquivo executável e os arquivos de apoio. A grande diferença em relação ao editor é que o build é otimizado e fechado: ele roda mais rápido, não mostra os painéis de edição e funciona em uma máquina que nem tem a Unreal Engine instalada. É a versão Shipping (ou Development) do jogo, aquela que vai para a mão do jogador.

O aluno vai aprender onde ficam as configurações de projeto que importam para o empacotamento: o mapa que abre quando o jogo inicia (Default Maps), a plataforma de destino (Windows), a configuração de build (Development para testar, Shipping para a versão final) e o nome e ícone do jogo. Depois vai disparar o empacotamento pelo menu Platforms, acompanhar o log, encontrar a pasta gerada e, o momento mais importante, dar dois cliques no executável para jogar o próprio jogo fora do editor.

Esta aula também trabalha disciplina de produção: empacotar pode demorar e pode falhar por causa de um erro de compilação C++ ou de um asset com problema. Por isso o aluno aprende a ler o log de empacotamento, identificar a linha do erro e corrigir antes de tentar de novo. Ao final, cada aluno terá uma pasta de build testada, com o jogo abrindo direto pelo executável, pronta para ser levada ao Demo Day da Aula 8.`,
  materiais: [
    `Computadores com a Unreal Engine instalada, com o compilador C++ configurado (Visual Studio com as ferramentas de C++), um por aluno`,
    `Projetor ou TV para o professor demonstrar as telas de Project Settings e Platforms em tempo real`,
    `O projeto de jogo de cada aluno, salvo e funcionando pelo botão Play do editor`,
    `Projeto Unreal de exemplo simples e leve, que empacota rápido, para o professor demonstrar sem esperar muito`,
    `Pasta vazia ou pen drive para guardar a build final de cada aluno`,
    `Folha impressa com o passo a passo do empacotamento e os nomes exatos dos menus (Project Settings, Maps and Modes, Platforms, Package Project)`,
    `Um ícone .ico simples (opcional) para o aluno usar como ícone do executável`,
  ],
  conceitosChave: [
    `Empacotar (Packaging) — processo que junta o código compilado e todos os assets do projeto em um executável jogável fora do editor.`,
    `Build — a versão fechada e pronta do jogo, a pasta com o executável e os arquivos de apoio que dá para distribuir.`,
    `Executável (.exe) — o arquivo que inicia o jogo com dois cliques, sem precisar abrir a Unreal Engine.`,
    `Development — configuração de build usada para testar; roda com ferramentas de diagnóstico e mostra mensagens de erro.`,
    `Shipping — configuração de build final, mais leve e rápida, sem ferramentas de diagnóstico, pensada para o jogador.`,
    `Default Map — o mapa (nível) que o jogo abre automaticamente quando o executável inicia.`,
    `Log de empacotamento — a janela de mensagens que mostra o progresso do build e aponta a linha do erro quando algo falha.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar a Unreal Engine para conduzir esta aula; precisa saber acionar três áreas. Primeiro, as configurações do projeto: no topo do editor, abra Edit, depois Project Settings. Na coluna da esquerda, a seção Maps and Modes define o Game Default Map, que é o nível que abre quando o jogo inicia, e a seção Description define o nome do projeto e o ícone. Segundo, o empacotamento em si: no topo do editor existe um botão Platforms (em versões mais antigas o caminho era File, depois Package Project). Clique em Platforms, passe o mouse em Windows e escolha Package Project. A Unreal pede uma pasta de destino e começa a empacotar. Terceiro, a configuração de build: ainda em Platforms, em Build Configuration, escolha Development para os testes desta aula e deixe claro que Shipping é a versão final.

Antes da aula, empacote o projeto de exemplo uma vez na sua própria máquina para saber quanto tempo demora e confirmar que o compilador C++ está funcionando. Tenha o caminho dos menus anotado na lousa.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte como eles entregariam o jogo para um amigo que não tem a Unreal Engine. Conduza até a ideia de que precisamos de um executável. Mostre no projetor uma pasta de build pronta e dê dois cliques no .exe para o jogo abrir sozinho, sem editor. Esse momento empolga a turma.

Conteúdo novo guiado (15 min): com o projeto de exemplo aberto, vá em Edit, depois Project Settings, depois Maps and Modes, e mostre o campo Game Default Map; selecione o mapa principal do jogo. Em Description, mostre onde se troca o nome do projeto. Feche as configurações. No topo, clique em Platforms, mostre Build Configuration e escolha Development. Passe em Windows e clique em Package Project. Escolha uma pasta. Abra a janela de Output Log e mostre o empacotamento andando.

Mão na massa (25 min): cada aluno abre o próprio projeto. Tarefa um: definir o Game Default Map em Maps and Modes para o nível certo do jogo. Tarefa dois: conferir o nome do jogo em Description. Tarefa três: empacotar em Development pelo menu Platforms, Windows, Package Project, escolhendo uma pasta com o nome do aluno. Tarefa quatro: ao terminar, abrir a pasta gerada, achar o .exe e jogar fora do editor. Circule muito nesta etapa, porque o empacotamento pode falhar e cada aluno avança num ritmo diferente.

Desafio e compartilhar (10 min): peça que troquem o ícone do jogo em Project Settings, Description, e re-empacotem; quem conseguir mostra a pasta com o ícone novo. Dois ou três alunos abrem a própria build no projetor e contam quanto tempo o empacotamento levou e se deu algum erro.

## Como explicar de forma clara (linguagem para a idade)

Compare com cozinhar e servir: até agora eles provaram a comida na cozinha (o editor); empacotar é colocar o prato pronto na bandeja para o cliente comer na mesa, sem entrar na cozinha. Diga que o build é o jogo enlatado: tudo dentro de uma caixa que abre com dois cliques. Explique Development como o jogo com etiqueta de teste, que avisa quando algo dá errado, e Shipping como a versão da loja, mais leve e sem etiquetas. Para o Default Map, use a ideia da primeira tela: é a porta de entrada do jogo. Evite jargão; troque compilar por o computador montar o jogo a partir das peças.

## Erros comuns e como ajudar

O erro mais comum é o build abrir o mapa errado ou uma tela vazia, porque o Game Default Map não foi definido; mande conferir Maps and Modes. Outro é o empacotamento falhar por erro de compilação C++; abra o Output Log, leia a última linha em vermelho e volte ao código corrigir antes de tentar de novo. Alguns escolhem Shipping e o build demora demais ou esconde os erros; nesta aula use Development. Muitos esquecem onde a pasta foi salva; oriente a criar uma pasta com o próprio nome em um lugar fácil. Há quem ache que travou porque o empacotamento demora; explique que é normal levar alguns minutos e que o log mostra o progresso.`,
  exercicios: [
    {
      titulo: `Definindo o mapa inicial do jogo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Escreva na lousa o caminho Edit, Project Settings, Maps and Modes. Verifique se cada aluno selecionou o nível correto no Game Default Map e salvou o projeto.`,
      atividade: `No seu projeto, abra Edit, depois Project Settings, depois Maps and Modes. No campo Game Default Map, escolha o nível principal do seu jogo, aquele que deve abrir assim que o jogo iniciar. Salve o projeto.`,
      gabarito: `O aluno acessa Edit, Project Settings, Maps and Modes e define o Game Default Map para o nível principal do jogo. Resultado esperado: o campo Game Default Map mostrando o nome do mapa correto, garantindo que o build vai abrir direto na tela certa em vez de uma cena vazia.`,
    },
    {
      titulo: `Empacotando a primeira build`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Confirme que cada aluno escolheu Development em Build Configuration. Oriente a salvar numa pasta com o próprio nome. Avise que o empacotamento demora alguns minutos e que isso é normal; circule acompanhando o Output Log.`,
      atividade: `No topo do editor, clique em Platforms. Em Build Configuration, escolha Development. Passe o mouse em Windows e clique em Package Project. Quando pedir, escolha uma pasta com o seu nome. Aguarde o empacotamento terminar acompanhando as mensagens no Output Log.`,
      gabarito: `O aluno aciona Platforms, seleciona Development em Build Configuration, escolhe Windows, clica em Package Project, indica uma pasta de destino e aguarda. Resultado esperado: o Output Log exibindo a mensagem de sucesso (BUILD SUCCESSFUL) e a pasta de destino contendo o executável do jogo e os arquivos de apoio.`,
    },
    {
      titulo: `Jogando fora do editor`,
      tipo: `teste`,
      tempo: `8 minutos`,
      guiaProfessor: `Ajude a turma a localizar a pasta gerada e o arquivo .exe dentro dela (em geral dentro de uma subpasta Windows ou WindowsNoEditor). Reforce que o jogo agora roda sem a Unreal Engine aberta.`,
      atividade: `Abra a pasta da build que você gerou, encontre o arquivo executável do jogo (com extensão .exe) e dê dois cliques nele. Jogue por um minuto e confira: o jogo abre na tela certa? Os controles funcionam? Há algo diferente de quando você jogava pelo botão Play do editor?`,
      gabarito: `O aluno localiza o .exe na pasta da build, abre o jogo com dois cliques e joga fora do editor. Resultado esperado: o jogo iniciando direto no mapa definido, com controles funcionando, confirmando que o build é jogável de forma independente. O aluno relata diferenças, como ausência dos painéis de edição e jogo rodando mais fluido.`,
    },
    {
      titulo: `Personalizando nome e ícone`,
      tipo: `desafio`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre em Project Settings, Description, onde ficam o Project Name e o Project Icon. Quem tiver um arquivo .ico pode usar como ícone. Lembre que é preciso empacotar de novo para o ícone aparecer no executável.`,
      atividade: `Abra Edit, depois Project Settings, depois Description. Troque o Project Name pelo nome final do seu jogo e, se houver um arquivo de ícone .ico disponível, defina-o no campo de ícone do projeto. Em seguida, empacote o jogo de novo em Development e confira se o nome e o ícone novos aparecem no executável.`,
      gabarito: `O aluno acessa Project Settings, Description, altera o Project Name para o nome final do jogo, define um ícone .ico quando disponível e re-empacota em Development. Resultado esperado: a nova build apresentando o executável com o nome correto e, quando o ícone foi configurado, com o ícone personalizado visível na pasta, dando ao jogo uma identidade própria para o Demo Day.`,
    },
    {
      titulo: `Investigando e corrigindo um erro de empacotamento`,
      tipo: `resolução de problema`,
      tempo: `14 minutos`,
      guiaProfessor: `Este é o exercício mais avançado. Tenha em mãos o exemplo de um erro comum de C++ (por exemplo, falta de ponto e vírgula ou nome de variável errado). Ensine a ler o Output Log de baixo para cima e achar a linha do arquivo .cpp citada. Reforce que o gabarito mostra a forma correta de escrever o trecho.`,
      atividade: `Imagine (ou reproduza com a ajuda do professor) que o empacotamento falhou com um erro de compilação C++. Abra o Output Log, encontre a linha que aponta o arquivo e o número da linha do erro, vá até esse trecho do código, corrija o problema e empacote de novo até obter sucesso. Descreva qual era o erro e como você o corrigiu.`,
      gabarito: `O aluno lê o Output Log, identifica a mensagem de erro com o caminho do arquivo .cpp e o número da linha, abre o código no Visual Studio, corrige o problema e re-empacota com sucesso. Exemplo de erro e correção: uma função de início estava escrita sem o ponto e virgula no final de uma instrucao. Forma correta do trecho em C++:

void AMeuPersonagem::BeginPlay()
{
    Super::BeginPlay();
    int Pontos = 0;
    UE_LOG(LogTemp, Warning, TEXT("Jogo iniciado"));
}

Aqui o detalhe que faltava era o ponto e virgula ao final da linha que declara a variavel Pontos. Resultado esperado: o aluno explica o erro lido no log, mostra o trecho corrigido e obtem a mensagem BUILD SUCCESSFUL no novo empacotamento, entendendo que ler o log e o caminho para resolver falhas de build.`,
    },
  ],
};
