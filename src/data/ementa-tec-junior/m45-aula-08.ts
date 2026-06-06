import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Objeto que Reage: Entrega Final",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o entregável do mês, deixando um objeto reagindo por código com print, variável e mudança de propriedade, e apresentar esse objeto funcionando para a turma.`,
  descricao: `Esta é a grande aula de fechamento do mês de Lua! Durante quatro semanas a turma aprendeu a escrever código de texto de verdade dentro do Roblox Studio: primeiro o print para mandar recados, depois a caça aos bugs, depois as variáveis (as caixinhas que guardam valores), depois como mudar e combinar esses valores, e por fim como dar vida a um objeto mexendo nas propriedades dele por código. Agora chegou o momento de juntar tudo numa única criação: um objeto que reage.

A ideia do entregável é simples e poderosa. Cada criança tem uma peça (Part) no Roblox com um Script dentro. Quando o jogador encosta nessa peça, o código acorda e faz três coisas que a turma já treinou: escreve uma mensagem com print, usa uma variável para guardar algum valor e muda uma propriedade da peça (a cor, o tamanho ou a transparência). É a soma de todo o mês numa cena que dá para ver acontecer na tela. O aluno não está só copiando: ele decide o que o objeto vai fazer e ajusta o código até reagir do jeito que planejou.

Como esta é a entrega final, o foco não é aprender comando novo, e sim consolidar, testar e corrigir. As crianças vão clicar em Play várias vezes, olhar a janela Output, encontrar os últimos bugs (uma aspa faltando, uma letra maiúscula trocada, uma propriedade escrita errado) e arrumar com calma. O professor circula como um mecânico ajudando cada aluno a deixar seu objeto redondinho, sem dar a resposta pronta.

A aula termina com a parte mais especial: a roda de apresentação. Cada criança mostra o seu objeto funcionando para a turma, conta o que ele faz e clica em Play na frente de todos para ver a reação acontecer ao vivo. É o momento em que a criança percebe, com orgulho, que escreveu código de verdade e que aquele código faz um objeto reagir. É a ponte que prepara a turma para o próximo mês de mecânicas.`,
  materiais: [
    `Computadores (um por aluno ou em duplas) com o Roblox Studio já aberto no projeto que cada criança vinha construindo durante o mês, com a peça e o Script dentro.`,
    `Projetor ou TV ligada ao computador do professor para demonstrar passos e para as crianças apresentarem o objeto delas no fim.`,
    `Um objeto de exemplo pronto e funcionando, feito pelo professor, que ao ser tocado escreve no print, usa uma variável e muda de cor, para servir de modelo.`,
    `Um cartão impresso simples com a "lista de conferência da entrega" (tem print? tem variável? muda uma propriedade? testou no Play?) para cada criança marcar.`,
    `Crachás ou etiquetas no quadro com as palavras print, variável (local), propriedade, Color, Output e Play, para apoiar a memória da turma.`,
    `Cronômetro ou timer na tela para marcar os blocos de tempo da aula.`,
    `Um script de apoio salvo num bloco de notas com o código completo do objeto de exemplo, caso algum aluno precise comparar linha a linha.`,
  ],
  conceitosChave: [
    `Entregável — o objeto pronto que a criança termina e mostra no fim do mês; a prova de tudo que ela aprendeu.`,
    `Objeto que reage — uma peça que fica quietinha até alguém encostar e, aí, faz algo acontecer pelo código.`,
    `print — o comando que escreve uma mensagem na janela Output para a gente ver o que o código está fazendo.`,
    `Variável — uma caixinha com nome que guarda um valor para o código usar depois, criada com a palavra local.`,
    `Propriedade — uma característica da peça que dá para mudar pelo código, como a cor (Color), o tamanho (Size) ou a transparência (Transparency).`,
    `Testar — clicar em Play e experimentar para ver se o objeto reage do jeito certo antes de dizer que terminou.`,
    `Apresentar — mostrar para a turma o objeto funcionando e contar o que ele faz, com orgulho de criador.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar Roblox nem Lua para conduzir esta aula. Ela é de fechamento: nada é novo, tudo já apareceu nas aulas anteriores. Sua função é ajudar cada criança a juntar três peças que ela já conhece num único objeto que reage. As três peças são: um print (mensagem no Output), uma variável (uma caixinha criada com a palavra local) e a mudança de uma propriedade da peça (a cor é a mais fácil de ver). Tudo isso dentro de uma função que dispara quando o jogador encosta na peça, usando o evento Touched que a turma já viu. Antes da aula, abra o Roblox Studio e monte você mesmo o objeto de exemplo uma vez, do começo ao fim, e clique em Play para confirmar que ele reage. Saber onde ficam três janelas basta: o Explorer (a lista de tudo no jogo, à direita), o Output (os recados do código, que você abre pelo menu View, botão Output) e o botão Play (o boneco azul no topo).

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar em Roblox + Lua)

Aquecimento e revisão (10 min): com a turma reunida, mostre os crachás no quadro (print, variável, propriedade, Color, Output, Play). Pergunte, um por um: o que faz o print? E a variável local? E mudar a propriedade Color? Deixe as crianças responderem. Diga que hoje elas vão juntar os três numa coisa só e apresentar para a turma.

Conteúdo guiado (15 min): no projetor, abra o objeto de exemplo no Roblox Studio. No Explorer, clique na peça e mostre o Script dentro dela (clique duas vezes para abrir). Abra o Output pelo menu View, botão Output. Leia o código junto com a turma, linha por linha:

local peca = script.Parent
local vezes = 0

local function aoTocar()
	vezes = vezes + 1
	print("O objeto reagiu! Vezes: ")
	print(vezes)
	peca.Color = Color3.new(1, 0, 0)
end

peca.Touched:Connect(aoTocar)

Explique: peca é a peça onde o script está; vezes é a variável-caixinha que começa em 0; dentro da função, vezes cresce de um em um, o print escreve no Output, e peca.Color muda a cor para vermelho. Clique em Play (boneco azul), ande até a peça, encoste e mostre a mensagem no Output e a cor mudando. Aponte: viu? Os três juntos!

Mão na massa (25 min): cada criança volta para o próprio projeto e deixa o objeto dela completo, com os três ingredientes. Entregue o cartão da lista de conferência (tem print? tem variável? muda uma propriedade? testou no Play?). Circule pela sala como um mecânico: ajude a achar o que falta, mande clicar em Play, olhar o Output e arrumar os últimos bugs. Deixe cada um escolher a própria mensagem e a própria cor, tamanho ou transparência.

Desafio e compartilhar (10 min): roda de apresentação. Um a um, cada criança mostra o objeto no projetor, conta o que ele faz e clica em Play encostando na peça para a turma ver a reação ao vivo. Combine palmas para cada criança. Encerre dizendo que todos escreveram código de verdade neste mês.

## Como explicar para crianças

Use a imagem de uma receita: o objeto que reage é um bolinho com três ingredientes que elas já sabem misturar. O print é o recado, a variável é a caixinha que guarda um número, e mudar a propriedade é pintar ou esticar a peça. Diga que a peça fica dormindo até alguém encostar, e aí ela acorda e faz as três coisas de uma vez. Na hora de testar, fale assim: clicar em Play é o mesmo que apertar o liga do brinquedo para ver se funciona. Repita bastante a frase "testou, viu o que aconteceu, arruma e testa de novo", para a criança entender que corrigir faz parte e não é fracasso.

## Erros comuns e como ajudar

O erro mais comum é esquecer um dos três ingredientes; por isso o cartão de conferência existe, peça que confiram item por item. Script no lugar errado: ele precisa estar dentro da peça no Explorer, não solto no Workspace. Letras trocadas: Lua diferencia maiúscula de minúscula, então Touched, Color e Color3 começam com letra grande; mostre a grafia no crachá. Aspas ou parênteses faltando no print deixam o Output vermelho; é só recolocar o que sumiu. Nada muda na peça: confira se escreveram Color3.new com os três números entre 0 e 1. E a ansiedade de quem ainda não terminou na hora de apresentar: deixe esses alunos mostrarem o que já reage, valorizando o progresso, e ajude a terminar depois.`,
  exercicios: [
    {
      titulo: `A lista de conferência da entrega`,
      tipo: `Revisão em roda`,
      tempo: `7 minutos`,
      guiaProfessor: `Aqueça antes de mexer no código. Leia cada item do cartão em voz alta e peça que a turma responda em coro o que cada palavra faz. Anote no quadro os três ingredientes obrigatórios para todos verem.`,
      atividade: `Em roda, olhando o cartão de conferência, diga o que cada um destes três faz no objeto que reage: o print, a variável (local) e a mudança de propriedade (por exemplo Color).`,
      gabarito: `Respostas certas: o print escreve uma mensagem na janela Output para a gente ver o que está acontecendo; a variável local é uma caixinha com nome que guarda um valor para o código usar depois; mudar a propriedade (como Color) altera uma característica da peça, fazendo ela ficar de outra cor, tamanho ou transparência. O objetivo é a criança citar que o entregável precisa dos três juntos.`,
    },
    {
      titulo: `Achar os três ingredientes no exemplo`,
      tipo: `Leitura de código`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o código do objeto de exemplo no projetor. Vá apontando linha por linha e peça que as crianças levantem a mão quando virem cada ingrediente. Não corrija ainda nada; só ajude a localizar.`,
      atividade: `Olhando o código do objeto de exemplo, aponte qual linha cria a variável, qual linha tem o print e qual linha muda uma propriedade da peça.`,
      gabarito: `A linha que cria a variável é "local vezes = 0". As linhas com print são "print(\"O objeto reagiu! Vezes: \")" e "print(vezes)". A linha que muda a propriedade é "peca.Color = Color3.new(1, 0, 0)", que pinta a peça de vermelho. A criança acerta ao indicar corretamente pelo menos a variável, um print e a mudança de cor.`,
    },
    {
      titulo: `Montar o meu objeto que reage`,
      tipo: `Programação em Lua, mão na massa`,
      tempo: `15 minutos`,
      guiaProfessor: `Este é o coração da entrega. Circule confirmando que o Script está dentro da peça no Explorer e que o Output está aberto pelo menu View. Deixe a criança escolher a mensagem e a cor; o que importa é estarem os três ingredientes dentro da função.`,
      atividade: `No seu projeto, deixe a peça reagir ao toque com os três ingredientes: uma variável, um print e a mudança de uma propriedade. Depois clique em Play e encoste na peça para testar.`,
      gabarito: `Um código completo e válido é:

local peca = script.Parent
local vezes = 0

local function aoTocar()
	vezes = vezes + 1
	print("O objeto reagiu! Vezes: ")
	print(vezes)
	peca.Color = Color3.new(1, 0, 0)
end

peca.Touched:Connect(aoTocar)

Ao clicar em Play e encostar, o Output mostra a mensagem e o número crescendo, e a peça muda de cor. Variações são bem-vindas: outra mensagem, outra cor (com números diferentes entre 0 e 1), ou mudar Size ou Transparency no lugar de Color. O essencial é a função ter os três ingredientes e o objeto reagir no Play.`,
    },
    {
      titulo: `Caça aos últimos bugs`,
      tipo: `Correção de erros`,
      tempo: `12 minutos`,
      guiaProfessor: `Mostre no projetor um código com erros de propósito (ou use o de um aluno que travou, sem expor a criança). Conduza a turma a achar o problema olhando o Output, que mostra a linha do erro em vermelho. Não dê a resposta de imediato; pergunte o que está faltando.`,
      atividade: `Olhe este código que não funciona e descubra os erros para consertar. Depois diga como ele fica certo:

local peca = script.Parent
local vezes = 0

local function aoTocar()
	vezes = vezes + 1
	print("O objeto reagiu!)
	peca.color = Color3.new(1, 0, 0)
end

peca.Touched:Connect(aoTocar)`,
      gabarito: `São dois erros. Primeiro, no print falta a aspa de fechamento: o certo é print("O objeto reagiu!"). Segundo, a propriedade está com letra minúscula: o certo é peca.Color (Color com C maiúsculo), porque Lua diferencia maiúscula de minúscula. O código corrigido é:

local peca = script.Parent
local vezes = 0

local function aoTocar()
	vezes = vezes + 1
	print("O objeto reagiu!")
	peca.Color = Color3.new(1, 0, 0)
end

peca.Touched:Connect(aoTocar)

Depois de arrumar, clicar em Play e encostar deve mudar a cor sem erro vermelho no Output.`,
    },
    {
      titulo: `Apresentar o meu objeto para a turma`,
      tipo: `Desafio de apresentação`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o desafio final e mais completo da entrega. Cada criança vira a apresentadora da própria criação. Combine palmas para todos. Ajude os mais tímidos com perguntas curtas e valorize quem mostra mesmo o objeto pela metade, destacando o progresso.`,
      atividade: `Na frente da turma, mostre o seu objeto no projetor e conte três coisas: o que ele escreve no print, o que a sua variável guarda e qual propriedade muda. Depois clique em Play e encoste na peça para todos verem a reação ao vivo.`,
      gabarito: `O desafio é vencido quando a criança apresenta o objeto dizendo as três coisas pedidas (a mensagem do print, o que a variável guarda e qual propriedade muda) e clica em Play, mostrando a peça reagir de verdade na tela. Por exemplo: "ele escreve O objeto reagiu, a variável guarda quantas vezes encostaram e a cor muda para azul". Recebe os aplausos da turma como criador de código de verdade.`,
    },
  ],
};
