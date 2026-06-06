import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Quando algo acontece: os eventos",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Entender o que é um evento no Roblox Studio e conectar o evento Touched a uma peça para que o código reaja, imprimindo uma mensagem no Output quando o personagem encostar nela.`,
  descricao: `Nesta aula as crianças descobrem uma das ideias mais importantes da programação de jogos: os eventos. Um evento é um aviso de que algo aconteceu dentro do jogo. Quando o jogador toca numa peça, clica num botão ou simplesmente entra no jogo, o Roblox dispara um aviso, e o nosso código pode ficar de orelha em pé esperando esse aviso para reagir. É como uma campainha: quando alguém aperta, o som toca. O aluno não fica mandando o jogo fazer coisas o tempo todo; ele ensina o jogo a esperar e a responder no momento certo.

O evento que vamos usar hoje se chama Touched (que quer dizer "foi tocado"). Ele pertence às peças (Parts) do Roblox. Toda vez que algum corpo encosta na peça, o Touched avisa. Para o código escutar esse aviso, usamos a palavra Connect (conectar). Conectar é ligar um fio invisível entre o evento e uma função: "quando isso acontecer, faça aquilo". Hoje o "faça aquilo" vai ser bem simples: escrever uma mensagem na janela Output, que é o quadro onde o Roblox mostra os recados do nosso código.

Essa aula abre o mês inteiro sobre mecânicas. Antes de uma peça curar o jogador, dar pontos ou abrir uma porta, o jogo precisa primeiro perceber que o jogador encostou nela. Por isso começamos pelo "quando algo acontece". Depois, nas próximas aulas, vamos colocar condições, pontos e regras em cima dessa base. Sem evento, o código fica parado; com evento, o jogo ganha vida e reage ao jogador.

O foco do professor é deixar o conceito concreto e visível. As crianças tocam na peça com o personagem, olham para o Output e veem a mensagem aparecer na hora. Esse "viu? funcionou!" é o coração da aula: ligar uma ação no jogo a uma resposta no código.`,
  materiais: [
    `Computadores (um por aluno ou duplas) com o Roblox Studio instalado e já aberto num lugar (baseplate) vazio`,
    `Projetor ou TV ligada ao computador do professor para demonstrar onde clicar`,
    `Um baseplate de exemplo pronto, com uma peça grande e colorida já posicionada no chão para quem travar`,
    `Um script de exemplo pronto, salvo num bloco de notas, com o código da aula para conferência`,
    `Crachás ou etiquetas com as palavras Touched, Connect e Output para colar no quadro`,
    `Cronômetro ou timer na tela para marcar os blocos de tempo da aula`,
    `Folha impressa simples com o passo a passo de criar Part e Script (apoio para o professor iniciante)`,
  ],
  conceitosChave: [
    `Evento — um aviso de que algo aconteceu no jogo, como tocar numa peça, clicar ou entrar.`,
    `Touched — o evento da peça que avisa toda vez que alguém encosta nela.`,
    `Connect — ligar um fio invisível entre o evento e o código, dizendo "quando isso acontecer, faça aquilo".`,
    `Função — uma caixinha de instruções que o jogo executa quando o evento dispara.`,
    `Output — a janela do Roblox onde o nosso código escreve recados e mensagens para a gente ler.`,
    `print — o comando que faz o código escrever uma mensagem na janela Output.`,
    `Script — a folha de papel onde a gente escreve o código em Lua dentro da peça.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. Precisa entender uma ideia: um evento é um aviso. A peça avisa "fui tocada!" e o nosso código escuta esse aviso e responde. Em Lua, isso vira uma linha só, no formato peça.Touched:Connect(função). Hoje a resposta será apenas escrever uma mensagem com o comando print, que aparece na janela Output. Abra o Roblox Studio antes da aula, crie uma Part no chão e teste você mesmo uma vez. Saber onde ficam três coisas já basta: a janela Explorer (lista de tudo no jogo), a janela Output (os recados do código) e o botão Play (o boneco azul no topo).

## Passo a passo da aula

Aquecimento (10 min): pergunte "o que faz uma campainha tocar?". Alguém aperta. Diga que no jogo é igual: alguém faz algo e o código responde. Mostre os crachás Touched, Connect e Output no quadro. Faça as crianças baterem na mesa e gritarem "tocou!" para virar o conceito de evento em brincadeira.

Conteúdo novo guiado (15 min): no projetor, mostre o Roblox Studio. No menu de cima, aba Home, clique em Part para criar uma peça; ela aparece no centro. Renomeie no Explorer para Armadilha (clique duas vezes no nome). Mude a cor no painel Properties, propriedade Color, para vermelho. Agora, no Explorer, passe o mouse na peça, clique no sinal de mais (+) e escolha Script. Apague o texto que já vem. Abra a janela Output pelo menu View, botão Output. Digite junto com a turma, linha por linha:

local peca = script.Parent

local function aoTocar()
	print("Alguem encostou na peca!")
end

peca.Touched:Connect(aoTocar)

Explique cada linha: a primeira diz que peca é a peça onde o script está (script.Parent é "o pai do script", ou seja, a Armadilha). A segunda cria uma função chamada aoTocar, que é a caixinha de instruções. Dentro dela, print escreve a mensagem no Output. A última linha é o fio mágico: peca.Touched conecta o aviso à função aoTocar. Clique no boneco azul Play, ande com o personagem até a peça, encoste e mostre a mensagem aparecendo no Output, repetida.

Mão na massa (25 min): cada aluno cria a própria peça, renomeia, pinta, adiciona o Script e digita o código. Circule pela sala. Mande cada um trocar a mensagem do print pela frase que quiser (por exemplo, o nome dele). Peça que testem com Play e encostem na peça.

Desafio e compartilhar (10 min): desafie quem terminou a fazer a peça imprimir uma mensagem diferente e maior. Cada criança mostra no projetor o personagem encostando e a mensagem surgindo. Aplauda cada "funcionou!".

## Como explicar para crianças

Use a campainha: o evento é o botão da campainha; o código é o som que toca. Diga que o jogo fica "esperando de olhos fechados" até alguém encostar, e aí ele acorda e fala a mensagem. Touched é o nome do nosso "alguém encostou". Connect é o fio que liga o aviso à resposta. Output é o caderninho onde o jogo escreve. Repita: "primeiro algo acontece, depois o código responde".

## Erros comuns e como ajudar

O Script no lugar errado: precisa estar dentro da peça, não no Workspace solto. Confira no Explorer se o Script aparece embaixo da peça. Esquecer os parênteses ou trocar Touched por touched (Lua diferencia maiúscula de minúscula): mostre a grafia certa no crachá. Nada aparece no Output: verifique se a janela Output está aberta (menu View) e se clicaram em Play, não só olharam parado. A mensagem aparece muitas vezes seguidas: isso é normal, pois o corpo do personagem toca a peça várias vezes; explique que é certo e tranquilize. Aspas tortas ou faltando ao redor da frase do print também travam; peça que digitem aspas retas simples.`,
  exercicios: [
    {
      titulo: `Caça aos eventos do dia a dia`,
      tipo: `Discussão em roda`,
      tempo: `8 minutos`,
      guiaProfessor: `Aqueça o conceito antes do computador. Conduza pela analogia da campainha e aceite respostas variadas. Anote no quadro as ideias das crianças em duas colunas: "o que acontece" e "o que responde".`,
      atividade: `Em roda, cada criança dá um exemplo de evento da vida real: algo que acontece e faz outra coisa responder. Exemplos para puxar: apertar a campainha faz o som tocar; abrir a geladeira acende a luz; bater palma chama a atenção.`,
      gabarito: `Respostas válidas mostram um gatilho e uma resposta. Exemplos: "apertar o interruptor" acende a luz; "tocar o despertador" acorda a pessoa; "abrir a porta" toca o sininho da loja. O importante é a criança separar o "acontece" do "responde", igual ao evento Touched (acontece o toque) e ao print (responde a mensagem).`,
    },
    {
      titulo: `Criar e pintar a minha peça`,
      tipo: `Prática guiada no Roblox Studio`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos cheguem na mesma tela antes do código. Vá devagar, mostrando no projetor cada clique. Confira no Explorer de cada aluno se a peça foi criada e renomeada.`,
      atividade: `No Roblox Studio, crie uma peça pela aba Home, botão Part. No Explorer, renomeie a peça para Armadilha. No painel Properties, mude a propriedade Color para uma cor bem viva à sua escolha.`,
      gabarito: `Ao final o aluno deve ter, no Explorer, uma Part chamada Armadilha visível no baseplate, com cor diferente do cinza padrão. Caminho correto: Home depois Part para criar; clique duplo no nome no Explorer para renomear; Properties depois Color para pintar. Se a peça sumiu, ela pode ter caído; basta movê-la de volta para o chão.`,
    },
    {
      titulo: `Conectar o evento Touched`,
      tipo: `Programação em Lua, linha a linha`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Digite junto, uma linha por vez, esperando a turma acompanhar. Abra a janela Output pelo menu View antes de testar. Lembre que Lua diferencia maiúsculas: Touched e Connect começam com letra grande.`,
      atividade: `Dentro da peça Armadilha, adicione um Script (sinal de mais no Explorer, opção Script). Apague o texto inicial e escreva o código que liga o evento Touched a uma função que faz um print. Depois clique em Play e encoste na peça.`,
      gabarito: `O código correto é:

local peca = script.Parent

local function aoTocar()
	print("Alguem encostou na peca!")
end

peca.Touched:Connect(aoTocar)

Ao clicar em Play e encostar o personagem na peça, a janela Output mostra a mensagem, repetida algumas vezes (normal, pois o corpo toca várias partes). Se nada aparece, confira se o Script está dentro da peça e se o Output está aberto.`,
    },
    {
      titulo: `Trocar a mensagem do print`,
      tipo: `Modificação de código`,
      tempo: `8 minutos`,
      guiaProfessor: `Reforce que só a parte entre aspas muda; o resto da linha continua igual. Mostre onde ficam as aspas e peça aspas retas. Incentive personalização para a criança sentir que o código é dela.`,
      atividade: `Mude a frase dentro do print para uma mensagem sua, por exemplo o seu nome ou um aviso engraçado. Teste de novo com Play, encostando na peça, e veja a sua nova mensagem aparecer no Output.`,
      gabarito: `A criança deve alterar apenas o texto entre as aspas. Exemplo válido: print("Voce pisou na armadilha do Joao!"). A estrutura print("...") precisa continuar com os dois parênteses e as duas aspas. Erro comum: apagar uma aspa ou um parêntese, o que faz o Output mostrar erro em vermelho; basta recolocar o que faltou.`,
    },
    {
      titulo: `Dois avisos no mesmo toque`,
      tipo: `Desafio de extensão`,
      tempo: `5 minutos`,
      guiaProfessor: `Para quem terminou rápido. O objetivo é mostrar que a função pode fazer mais de uma coisa: basta colocar outra linha dentro dela. Não introduza condições ainda (isso é a próxima aula); fique apenas em mais de um print.`,
      atividade: `Faça a peça escrever duas mensagens diferentes a cada toque. Para isso, coloque uma segunda linha de print dentro da função aoTocar, antes do end.`,
      gabarito: `Solução esperada:

local peca = script.Parent

local function aoTocar()
	print("Alguem encostou na peca!")
	print("Cuidado com a armadilha!")
end

peca.Touched:Connect(aoTocar)

As duas linhas de print ficam dentro da função, entre o nome aoTocar e o end. Ao encostar, o Output mostra as duas mensagens em sequência. Erro comum: colocar o segundo print depois do end, fora da função; nesse caso ele roda só uma vez ao iniciar, e não a cada toque. A correção é mover a linha para dentro, antes do end.`,
    },
  ],
};
