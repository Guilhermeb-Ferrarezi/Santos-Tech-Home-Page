import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Primeiros Passos com Lua",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Escrever o primeiro script funcional em Lua dentro do Roblox Studio, entendendo a diferença entre Script e LocalScript, variáveis, print e a estrutura básica de um código.`,
  descricao: `Até agora os alunos construíram o cenário e integraram os modelos 3D, mas o mundo ainda está "parado": nada acontece sozinho. Nesta aula entra a peça que dá vida ao jogo, a programação. Em Roblox, a linguagem usada é Lua (mais precisamente Luau, a versão do Roblox), e é com ela que dizemos ao jogo o que deve acontecer e quando.

O foco da aula é desmistificar o código. Muitos adolescentes acham que programar é digitar coisas mágicas e impossíveis; aqui eles vão perceber que um script nada mais é do que uma lista de instruções escrita em ordem, de cima para baixo, que o computador lê e executa. Começamos pelo comando mais simples e mais importante para quem está aprendendo: o print, que mostra mensagens na janela Output (o console). Ver a própria mensagem aparecer no console é o primeiro grande "funcionou!" da jornada de programação.

Em seguida apresentamos as variáveis, que são caixinhas com nome onde guardamos informações (um número, um texto, uma cor). E mostramos a diferença essencial entre Script e LocalScript: o Script roda no servidor (vale para todos os jogadores e para o mundo do jogo) e o LocalScript roda no computador de cada jogador (interface, câmera, controles). Nesta aula trabalhamos principalmente com Script, porque vamos mexer no próprio mundo, mudando a cor de uma Part.

O entregável prático é pequeno e poderoso: cada aluno cria um Script dentro de uma Part, escreve algumas linhas, vê mensagens aparecerem no Output e faz a cor da Part mudar quando o jogo roda. É a ponte entre o cenário (que eles já dominam) e o jogo interativo das próximas aulas.`,
  materiais: [
    `Computadores com Roblox Studio instalado e atualizado, um por aluno`,
    `Conta Roblox de cada aluno já logada no Studio`,
    `Projetor para o professor demonstrar passo a passo na tela grande`,
    `Place (arquivo do jogo) que a turma vem construindo, com pelo menos uma Part no cenário`,
    `Arquivo de exemplo "exemplo-primeiro-script.txt" com o código pronto para consulta`,
    `Folha impressa com o mini-glossário (Script, LocalScript, variável, print, Output)`,
    `Quadro branco ou slide com a estrutura básica de um script`,
  ],
  conceitosChave: [
    `Script — pedaço de código que roda no servidor e controla o mundo do jogo (vale para todos os jogadores).`,
    `LocalScript — código que roda no computador de cada jogador; usado para interface, câmera e controles individuais.`,
    `Variável — uma caixinha com nome onde guardamos uma informação, como um número, um texto ou uma cor.`,
    `print — comando que mostra uma mensagem na janela Output; serve para testar e acompanhar o que o código faz.`,
    `Output — a janela (console) do Roblox Studio onde aparecem as mensagens do print e também os erros.`,
    `Propriedade — característica de um objeto que pode ser lida e mudada pelo código, como a cor (BrickColor) de uma Part.`,
    `Comentário — texto com dois hifens no início que o computador ignora; serve para explicar o código para humanos.`,
  ],
  treinamento: `## O que o professor precisa saber

Lua (no Roblox, chamado Luau) é a linguagem que controla tudo o que acontece no jogo. Você não precisa ser programador para dar esta aula: basta seguir os passos e digitar o código exatamente como está aqui. Um script é lido de cima para baixo, uma linha por vez. O comando mais importante para iniciantes é o print, que mostra mensagens na janela Output. Guarde uma ideia central para repetir aos alunos: "o computador faz exatamente o que está escrito, na ordem em que está escrito".

Diferença essencial: Script roda no servidor (controla o mundo, vale para todos) e LocalScript roda no computador de cada jogador (interface e controles). Hoje usamos Script, pois vamos mudar a cor de uma Part, que faz parte do mundo. Para criar um script: clique com o botão direito num objeto (ou em ServerScriptService), escolha Insert Object e depois Script. A janela Output abre pelo menu View, botão Output.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min). Abra o jogo da turma no projetor. Pergunte: "o que está faltando para nosso mundo virar um jogo de verdade?". Conduza até a resposta: falta dizer ao jogo o que deve acontecer, e isso se faz com código. Mostre a janela Output vazia e diga que hoje ela vai ganhar vida.

Conteúdo novo guiado (15 min). Abra a janela Output (menu View, botão Output). Clique com o botão direito em uma Part do cenário, Insert Object, Script. Apague o texto que vem pronto e digite junto com a turma, explicando cada linha:

print("Ola, Santos Tech!")

Clique em Play (botão azul no topo). A mensagem aparece no Output. Comemore: o primeiro código funcionou. Agora apresente variáveis. Pare o jogo (Stop) e escreva:

local nomeDoJogo = "Meu Primeiro Jogo"
print("O nome do jogo e:", nomeDoJogo)

Explique que "local" cria uma variável, "nomeDoJogo" é o nome dela e o texto entre aspas é o que ela guarda. O print mostra os dois pedaços separados por vírgula. Rode de novo e mostre o resultado no Output.

Mão na massa (25 min). Cada aluno cria um Script dentro de uma Part do próprio cenário e escreve um código que muda a cor da Part. Digite no projetor e peça que copiem, ajustando os nomes:

local minhaParte = script.Parent
print("Vou mudar a cor desta Part")
minhaParte.BrickColor = BrickColor.new("Bright red")
print("Pronto! A cor mudou.")

Explique: script.Parent é "o pai do script", ou seja, a própria Part onde ele está. A linha do meio troca a propriedade de cor. Peça que cada um teste cores diferentes (Bright blue, Lime green, Bright yellow) e confira no Output as duas mensagens.

Desafio e compartilhar (10 min). Desafio: criar uma variável com a cor escolhida e usá-la na troca, em vez de escrever a cor direto. Convide dois ou três alunos a mostrar o jogo rodando no projetor, lendo em voz alta o que aparece no Output.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Variável é uma "caixinha com etiqueta": a etiqueta é o nome, o conteúdo é o valor. Script é uma "receita de bolo": o computador segue os passos na ordem. print é "o jogo falando com a gente" pela janela Output. Propriedade é uma "característica" do objeto, como a cor de uma camiseta, que dá para trocar. Evite termos abstratos sem exemplo; sempre rode o código e mostre o efeito na hora. Repita que erro é normal e faz parte de programar.

## Erros comuns e como ajudar

Esquecer as aspas no texto: "Ola" funciona, Ola sozinho dá erro. Trocar aspas curvas por aspas retas (copiar de documentos enfeitados quebra o código); digite as aspas no próprio Studio. Escrever BrickColor com letra errada ou cor que não existe: confirme o nome exato da cor. Esquecer o ponto em minhaParte.BrickColor. Colocar o Script no lugar errado: para mudar a Part, o Script precisa estar dentro dela (script.Parent aponta para a Part). Sempre que algo não funcionar, leia juntos a mensagem vermelha do Output, que indica a linha do problema.`,
  exercicios: [
    {
      titulo: `Caça ao erro no print`,
      tipo: `Roda de conversa com tela`,
      tempo: `8 min`,
      guiaProfessor: `Projete cada linha e peça que a turma diga, em voz alta, se vai funcionar ou dar erro, e por quê. Use como aquecimento mental antes de eles digitarem. Reforce a regra das aspas e dos parênteses.`,
      atividade: `Olhe as três linhas abaixo e diga qual está correta e quais têm erro. Explique o erro de cada uma:

Linha A: print("Bem-vindo ao jogo")
Linha B: print(Bem-vindo ao jogo)
Linha C: print "Bem-vindo ao jogo"`,
      gabarito: `Linha A: correta. Tem print, parênteses e o texto entre aspas.
Linha B: errada. Falta as aspas em volta do texto; o computador acha que "Bem-vindo" é um comando.
Linha C: errada. Faltam os parênteses; print precisa de parênteses em volta do que vai mostrar.

Versão correta das três: print("Bem-vindo ao jogo")`,
    },
    {
      titulo: `Meu primeiro print`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que cada aluno consiga abrir a janela Output (menu View, botão Output) e criar um Script. Caminhe pela sala conferindo se a mensagem aparece ao clicar em Play. Comemore o primeiro código funcionando.`,
      atividade: `Crie um Script dentro de uma Part. Apague o texto que vem pronto e escreva um print que mostre uma saudação com o seu nome. Clique em Play e confira a mensagem na janela Output.`,
      gabarito: `Exemplo de solução (o nome muda conforme o aluno):

print("Ola, eu sou o Lucas e este e meu jogo!")

No Output deve aparecer a frase digitada. Se nada aparecer, verificar se a janela Output está aberta e se o aluno clicou em Play.`,
    },
    {
      titulo: `Variável com etiqueta`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Mostre que o nome da variável não pode ter espaços e que o texto vai entre aspas. Explique a vírgula dentro do print, que junta o texto fixo com o valor da variável. Peça que troquem o valor e rodem de novo para ver a mudança.`,
      atividade: `Crie duas variáveis: uma com o nome do seu jogo e outra com o número da sua fase favorita. Depois use o print para mostrar as duas informações no Output.`,
      gabarito: `Exemplo de solução:

local nomeDoJogo = "Aventura na Floresta"
local faseFavorita = 3
print("Nome do jogo:", nomeDoJogo)
print("Fase favorita:", faseFavorita)

No Output devem aparecer duas linhas, uma com o nome do jogo e outra com o número da fase. O número não leva aspas; o texto leva.`,
    },
    {
      titulo: `Trocando a cor da Part`,
      tipo: `Prática no computador`,
      tempo: `15 min`,
      guiaProfessor: `Confirme que o Script está dentro da Part (não em ServerScriptService), pois aqui usamos script.Parent. Tenha à mão nomes de cores válidos (Bright red, Bright blue, Lime green, Bright yellow). Se der erro, leiam juntos a mensagem do Output.`,
      atividade: `Coloque um Script dentro de uma Part do seu cenário. Faça o código mostrar uma mensagem, trocar a cor da Part por uma cor de sua escolha e depois mostrar uma segunda mensagem avisando que terminou. Rode e confira.`,
      gabarito: `Exemplo de solução:

local minhaParte = script.Parent
print("Vou mudar a cor desta Part")
minhaParte.BrickColor = BrickColor.new("Bright blue")
print("Pronto! A cor mudou.")

Ao clicar em Play, a Part muda de cor e o Output mostra as duas mensagens. Se a cor não mudar, conferir se o Script está dentro da Part e se o nome da cor está escrito corretamente entre aspas.`,
    },
    {
      titulo: `Desafio: cor guardada em variável`,
      tipo: `Desafio individual`,
      tempo: `15 min`,
      guiaProfessor: `Este é o passo mais avançado: usar uma variável para guardar a cor e aplicá-la na Part. Ajude quem travar mostrando que o valor da variável é o nome da cor entre aspas e que ele entra dentro do BrickColor.new. Incentive comentários no código com dois hifens.`,
      atividade: `Melhore o exercício anterior: crie uma variável chamada corEscolhida que guarda o nome de uma cor. Use essa variável para trocar a cor da Part, em vez de escrever a cor direto na linha. Adicione um comentário explicando o que o código faz.`,
      gabarito: `Exemplo de solução:

-- Este script muda a cor da Part usando uma variável
local minhaParte = script.Parent
local corEscolhida = "Lime green"
print("A cor escolhida foi:", corEscolhida)
minhaParte.BrickColor = BrickColor.new(corEscolhida)
print("A cor foi aplicada na Part!")

Ao rodar, a Part fica verde-limão e o Output mostra as mensagens. O ponto-chave é que corEscolhida guarda o nome da cor e é usada dentro de BrickColor.new(corEscolhida). A linha que começa com dois hifens é um comentário e não é executada.`,
    },
  ],
};
