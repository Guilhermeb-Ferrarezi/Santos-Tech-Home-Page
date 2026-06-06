import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Primeiros Passos com Lua",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Apresentar a lógica de programação em Lua dentro do Roblox Studio, ensinando variáveis, eventos e a diferença entre Script e LocalScript para o aluno criar seu primeiro código funcional que reage ao toque do jogador.`,
  descricao: `Nesta aula o aluno dá o passo que transforma o cenário montado nas aulas anteriores em um jogo de verdade: ele começa a programar. Até agora, na Aula 1 e na Aula 2, a turma trouxe os modelos do Maya para o Roblox e posicionou tudo no mapa. Hoje o cenário ganha vida, porque o aluno aprende a escrever instruções que o computador obedece. Programar é só isso: dar ordens claras, em ordem, para a máquina seguir. A linguagem que usamos no Roblox se chama Lua, e ela é amigável, curta e perfeita para começar.

Três ideias seguram a aula inteira. A primeira é a variável, que é uma caixinha com um nome onde guardamos um valor, como um número, um texto ou um objeto da cena. A segunda é o evento, que é um aviso de que algo aconteceu no jogo, por exemplo "alguém tocou nesta parte". A terceira é a diferença entre Script e LocalScript: o Script roda no servidor e vale para todos os jogadores, enquanto o LocalScript roda só no computador de um jogador, sendo ideal para interface e câmera. Entender quando usar cada um evita muita confusão lá na frente.

O projeto prático de hoje é simples e poderoso: o aluno cria uma Part no cenário e escreve um Script que detecta o toque do jogador e faz a Part mudar de cor. Esse padrão de "evento dispara, código responde" é a base de quase tudo em um jogo: portas que abrem, moedas que somem ao serem coletadas, botões que ativam armadilhas. Ao terminar, o aluno percebe que não precisa decorar tudo, e sim entender o ritmo: declarar o objeto, ligar o evento e descrever a reação.

Como o mês tem foco em montar e publicar o jogo, tudo o que for programado aqui já entra no projeto do aluno. O professor deve incentivar a turma a testar muito, errar sem medo e ler as mensagens de erro como dicas, não como castigo. No fim da aula, cada aluno terá pelo menos um objeto que reage ao jogador, e essa pequena vitória é o que dá confiança para as mecânicas mais avançadas da Aula 4.`,
  materiais: [
    `Computadores com o Roblox Studio instalado e atualizado, um por aluno (Windows ou Mac com a conta Roblox de cada aluno já logada)`,
    `Contas Roblox individuais dos alunos, com login feito antes da aula para não perder tempo`,
    `Projetor ou TV para o professor mostrar o Roblox Studio, a janela Explorer e o Script Editor em tela grande`,
    `Arquivo de exemplo .rbxl com o cenário das aulas anteriores já montado e uma área plana livre para os testes`,
    `Folha impressa ou slide com o código modelo do "toque muda a cor" para os alunos consultarem`,
    `Lista de erros comuns de Lua (digitação errada, maiúscula trocada, falta de end) afixada na parede ou no slide`,
  ],
  conceitosChave: [
    `Lua — a linguagem de programação usada no Roblox Studio para dar ordens ao jogo; é curta, simples e boa para iniciantes.`,
    `Script — bloco de código que roda no servidor e vale para todos os jogadores ao mesmo tempo; bom para regras do jogo.`,
    `LocalScript — bloco de código que roda só no computador de um jogador; bom para interface, câmera e tela.`,
    `Variável — uma caixinha com nome onde guardamos um valor, como um número, um texto ou um objeto da cena.`,
    `Evento — um aviso de que algo aconteceu no jogo, por exemplo o jogador tocar em uma Part; o código reage a ele.`,
    `Part — o bloco básico do Roblox; é um objeto da cena ao qual podemos prender um Script para fazê-lo reagir.`,
    `Função — um conjunto de passos com nome que descreve o que deve acontecer quando o evento dispara.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador para dar esta aula. Precisa entender três pilares e decorar um caminho de cliques. Primeiro pilar: a variável é uma caixinha com nome. Em Lua escrevemos local cor = "verde", e pronto, guardamos um valor. Segundo pilar: o evento é um gatilho. No Roblox, a Part tem um evento chamado Touched que dispara quando alguém encosta nela. Terceiro pilar: Script roda no servidor, para todos; LocalScript roda só na tela de um jogador. Para a aula de hoje usamos Script. O caminho que você precisa decorar é simples: na janela Explorer, ache a Part, passe o mouse, clique no sinal de mais e escolha Script. O Script Editor abre. É ali que digitamos o código. Antes da aula, faça você mesmo o exemplo uma vez para ganhar segurança.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão. Abra o cenário no Roblox Studio na tela grande. Pergunte: "Como fazemos a porta abrir ou a moeda sumir?" Conduza até a resposta: precisamos programar. Explique que hoje aprendemos a falar com o jogo usando Lua.

15 min, conteúdo novo guiado. No menu superior, aba Home, clique em Part para criar um bloco; ele aparece na cena. Na janela Explorer, à direita, encontre essa Part. Passe o mouse sobre ela, clique no ícone de mais e escolha Script. O Script Editor abre com a frase print("Hello world!"). Apague e digite junto com a turma, devagar:

local parte = script.Parent

local function aoTocar(outro)
	parte.BrickColor = BrickColor.new("Bright red")
end

parte.Touched:Connect(aoTocar)

Explique cada linha em voz alta: a primeira guarda a Part numa variável; a função descreve o que fazer; a última liga o evento Touched à função. Clique em Play, na aba Test, ande até a Part e mostre a cor mudando.

25 min, mão na massa. Cada aluno cria a própria Part, adiciona um Script e digita o código. Circule pela sala. Depois que funcionar, peça que troquem a cor para outra de sua escolha e que mudem o nome da variável. Quem terminar pode fazer a Part mudar para uma cor aleatória usando uma segunda variável de cor.

10 min, desafio e compartilhar. Cada aluno mostra ao colega do lado a Part reagindo ao toque. Faça uma rodada rápida: cada um diz qual evento usou e o que aconteceu. Reforce que esse padrão "evento dispara, código responde" vale para o jogo todo.

## Como explicar de forma clara (linguagem para a idade)

Use imagens do dia a dia. Diga: "A variável é uma mochila com etiqueta; você guarda algo e chama pelo nome." Para o evento: "É a campainha da casa; quando alguém aperta, você vai atender. O Touched é a campainha da Part." Para a função: "São as instruções de uma receita, os passos que o jogo segue quando a campainha toca." Para Script e LocalScript: "Script é o aviso no alto-falante da escola, todo mundo ouve; LocalScript é um fone de ouvido, só você escuta." Mostre que o código é lido de cima para baixo, como uma lista de tarefas. Sempre ligue ao jogo do aluno: "Que objeto seu poderia reagir ao toque?"

## Erros comuns e como ajudar

O erro mais comum é a maiúscula trocada: Lua diferencia Touched de touched e BrickColor de brickcolor. Ensine a conferir letra por letra. O segundo erro é esquecer o end que fecha a função; mostre que cada function pede um end. O terceiro é colocar o Script no lugar errado, fora da Part; lembre que o Script deve ficar dentro da Part no Explorer, e que script.Parent precisa apontar para ela. Há quem digite aspas curvas ao copiar de um documento; use sempre aspas retas. Por fim, se nada acontecer, peça para olhar a janela Output, no menu View, que mostra os erros em vermelho como dicas para arrumar.`,
  exercicios: [
    {
      titulo: `Primeiro código: a Part que muda de cor`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha criado uma Part e adicionado o Script dentro dela no Explorer antes de digitar. Reforce o caminho do ícone de mais sobre a Part.`,
      atividade: `Crie uma Part na cena. Adicione um Script dentro dela e digite o código do exemplo para que a Part fique vermelha quando o jogador a tocar. Clique em Play, ande até a Part e mostre a cor mudando ao professor.`,
      gabarito: `Ao tocar a Part durante o Play, ela deve ficar vermelha. Caminho correto: aba Home, botão Part; no Explorer, ícone de mais sobre a Part, escolher Script; digitar local parte = script.Parent, a função que faz parte.BrickColor = BrickColor.new("Bright red") e a linha parte.Touched:Connect(aoTocar). Se nada acontecer, o Script pode estar fora da Part ou há letra maiúscula trocada em Touched.`,
    },
    {
      titulo: `Escolha sua cor e renomeie a variável`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que troquem a cor por outra do BrickColor e mudem o nome da variável parte para algo que faça sentido. Mostre que o nome novo precisa ser usado em todas as linhas.`,
      atividade: `A partir do seu código que funciona, troque a cor vermelha por outra cor à sua escolha e renomeie a variável parte para um nome do seu jogo, como bloco ou botao. Teste no Play para confirmar que continua funcionando.`,
      gabarito: `A Part deve mudar para a nova cor escolhida ao ser tocada. O aluno precisa trocar o texto dentro de BrickColor.new (por exemplo "Bright blue") e substituir o nome da variável em todas as linhas onde ela aparece, incluindo script.Parent e o Touched. Se der erro, geralmente o nome foi trocado em uma linha e esquecido em outra.`,
    },
    {
      titulo: `Caça ao erro em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Prepare antes um Script com três erros de propósito: um end faltando, uma maiúscula trocada em Touched e uma aspa curva. Forme duplas e abra a janela Output juntos.`,
      atividade: `Em dupla, abram o Script com erros que o professor preparou. Usem a janela Output, no menu View, para achar as mensagens em vermelho e consertem os três erros até a Part voltar a funcionar. Anotem qual erro era cada um.`,
      gabarito: `Os três erros e a correção: faltava um end no fim da função, então adiciona-se a palavra end; estava touched com t minúsculo, troca-se por Touched; havia aspas curvas, trocam-se por aspas retas. Depois das correções, a Output não mostra mais linhas vermelhas e a Part reage ao toque. A dupla deve identificar cada erro pela cor vermelha e pela linha indicada na Output.`,
    },
    {
      titulo: `Roda de conversa: Script ou LocalScript?`,
      tipo: `roda de conversa`,
      tempo: `12 minutos`,
      guiaProfessor: `Conduza com exemplos concretos. Para cada situação, peça que a turma decida em conjunto. Anote no quadro as conclusões usando as comparações do alto-falante e do fone.`,
      atividade: `Em roda, o professor lê situações do jogo (uma porta que abre para todos, uma barra de vida só na sua tela, uma moeda que some para quem pega, um menu de pausa pessoal). Para cada uma, a turma diz se usaria Script ou LocalScript e explica por quê.`,
      gabarito: `Respostas esperadas: porta para todos é Script (servidor, vale para todos); barra de vida na sua tela é LocalScript (só o seu jogador vê); moeda que some é Script (precisa valer para o servidor); menu de pausa pessoal é LocalScript (interface individual). A justificativa correta liga "vale para todos" a Script e "só na minha tela" a LocalScript. Respostas sem justificativa devem ser aprofundadas pelo professor.`,
    },
    {
      titulo: `Mini projeto: um objeto do meu jogo que reage`,
      tipo: `projeto curto`,
      tempo: `15 minutos`,
      guiaProfessor: `Oriente cada aluno a escolher um objeto real do próprio cenário. Aceite reações simples como mudar de cor, sumir ou mudar de tamanho. Lembre de salvar o arquivo com o nome do aluno.`,
      atividade: `Escolha um objeto do cenário do seu jogo (uma porta, um botão, uma plataforma). Programe esse objeto para reagir quando o jogador o tocar: pode mudar de cor, ficar invisível usando Transparency ou mudar de tamanho. Teste no Play e salve o arquivo com o seu nome para usar na Aula 4.`,
      gabarito: `O objeto escolhido deve reagir ao toque do jogador durante o Play, de forma visível. Exemplos válidos: a Part muda de cor com BrickColor; fica invisível com parte.Transparency = 1; cresce com parte.Size = parte.Size * 2. O código precisa usar o evento parte.Touched:Connect ligado a uma função, com o Script dentro do objeto. Arquivo salvo com o nome do aluno. Se não reagir, conferir Output, posição do Script e maiúsculas.`,
    },
  ],
};
