import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Mecânicas que Dão Vida ao Jogo",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Programar as mecânicas centrais do jogo (pontuação, coleta de itens, gatilhos e condições de vitória ou derrota) e conectar o primeiro som de IA a uma ação.`,
  descricao: `Até aqui o cenário já está montado e os alunos deram os primeiros passos com Lua. Agora chega a parte mais empolgante: transformar um cenário parado em um jogo de verdade. Nesta aula o aluno programa as mecânicas que fazem o jogo reagir ao jogador. Quando o personagem encosta em uma moeda, a moeda some e a pontuação sobe; quando atinge a meta, aparece a vitória; se cair em uma área perigosa, vem a derrota. São essas regras que dão vida e desafio ao jogo.

O coração da aula são quatro ideias que trabalham juntas: pontuação (um número que cresce), coleta de itens (objetos que somem quando tocados), gatilhos (o evento Touched que detecta o toque) e condições de vitória ou derrota (um if que verifica se o jogador venceu ou perdeu). Tudo é programado com Scripts dentro de Parts no Roblox Studio, usando a linguagem Lua. O aluno aprende que um jogo é, no fundo, um conjunto de regras simples encadeadas.

Como ponte com os meses anteriores, o aluno reaproveita um som criado com IA (Suno ou ElevenLabs). Ao coletar um item, além de somar pontos, o jogo toca um efeito sonoro. Isso mostra na prática que a arte, a música e a voz geradas com IA não ficam soltas: elas viram parte da jogabilidade. É a primeira integração de mídia de IA dentro da lógica do jogo, e prepara o terreno para a Aula 5, que aprofunda essa conexão.

Ao final, cada aluno terá um jogo jogável com placar funcionando, itens colecionáveis com som e uma tela ou mensagem de vitória. Não precisa estar polido ou perfeito; o objetivo é que a mecânica principal funcione de ponta a ponta e que o aluno entenda o porquê de cada linha de código.`,
  materiais: [
    `Computadores com Roblox Studio instalado e conta Roblox logada para cada aluno`,
    `Projetor ou TV para o professor demonstrar os passos em tempo real`,
    `Projeto Roblox de cada aluno (cenário das Aulas 1 a 3) salvo e acessível`,
    `Arquivo de áudio de IA já importado (efeito de coleta feito no Suno ou ElevenLabs) ou um ID de som de exemplo de reserva`,
    `Script de exemplo pronto (cópia impressa ou em arquivo de texto) com o código de pontuação e coleta para consulta`,
    `Conexão com a internet para fazer upload do som e usar a biblioteca de áudios do Roblox`,
    `Folha de apoio com os erros comuns e os nomes exatos dos painéis (Explorer, Properties, Output)`,
  ],
  conceitosChave: [
    `Pontuação — um número guardado em uma variável que aumenta cada vez que o jogador faz algo certo, como coletar um item.`,
    `Coleta de item — quando o personagem encosta em um objeto e ele desaparece, normalmente somando pontos.`,
    `Gatilho (evento Touched) — um aviso que o Roblox dispara quando algo toca uma Part; usamos para reagir ao jogador.`,
    `Condição de vitória ou derrota — uma regra (com if) que checa se o jogador venceu ou perdeu, por exemplo ao atingir certa pontuação.`,
    `Variável — um nome que guarda um valor na memória, como pontos = 0, e que pode mudar durante o jogo.`,
    `Função — um bloco de código com nome que executa uma tarefa quando é chamado, como tocar um som ou somar pontos.`,
    `Efeito sonoro de IA — som curto criado com inteligência artificial (Suno ou ElevenLabs) que toca durante uma ação do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador. Tudo nesta aula gira em torno de um padrão simples: "quando algo acontece, faça isto". No Roblox, esse "quando" é o evento Touched (toque), e o "faça isto" é o código dentro de uma função. Um Script é um arquivo de código que mora dentro de um objeto. Para esta aula, ele fica dentro de uma Part (um item colecionável). Os três painéis que você vai usar o tempo todo são: Explorer (lista tudo no jogo, lado direito), Properties (propriedades do item selecionado) e Output (mostra mensagens e erros, ative em View, Output). Teste antes da aula: insira uma Part, clique com o botão direito, Insert Object, Script, e cole o código de exemplo. Aperte Play (atalho F5) e ande sobre o item. Se sumir e o placar subir, está pronto.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min, aquecimento e revisão: abra o projeto de um aluno no projetor. Relembre a Aula 3: o que é uma variável e como se cria um Script (botão direito na Part, Insert Object, Script). Pergunte: "o que faz um jogo ser divertido?" e conduza até a resposta "regras e desafio". Anuncie a meta: hoje o jogo vai ter placar e itens que somem com som.

15 min, conteúdo novo guiado: no projetor, crie uma Part, renomeie para Moeda no Explorer (dois cliques no nome). Insira um Script dentro dela. Escreva e explique linha a linha o código abaixo, em voz alta:

local pontos = 0
local moeda = script.Parent
local som = moeda:WaitForChild("Sound")

local function aoTocar(outro)
	local humano = outro.Parent:FindFirstChild("Humanoid")
	if humano then
		pontos = pontos + 1
		som:Play()
		print("Pontos: " .. pontos)
		moeda:Destroy()
	end
end

moeda.Touched:Connect(aoTocar)

Explique: pontos guarda o placar; Touched dispara quando alguém encosta; o if confere se é um jogador (tem Humanoid); som:Play() toca o áudio de IA; Destroy() faz a moeda sumir. Mostre o resultado no Output ao apertar Play.

25 min, mão na massa: os alunos abrem o próprio projeto, criam a moeda, inserem o Script e colam o código. Em seguida arrastam para dentro da Part o objeto Sound com o áudio de IA (botão direito na Part, Insert Object, Sound; em Properties, no campo SoundId, cole o ID do som). Circule pela sala. Quando o básico funcionar, peça para duplicar a moeda várias vezes (Ctrl+C, Ctrl+V) e espalhar pelo cenário. Depois, desafie a adicionar a condição de vitória: ao chegar a 5 pontos, mostrar uma mensagem com print("Você venceu!").

10 min, desafio e compartilhar: cada aluno troca de cadeira e joga o jogo do colega por 1 minuto, anotando uma coisa que funcionou e uma ideia. Dois ou três voluntários mostram o placar subindo no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. A variável é uma caixinha com etiqueta que guarda o número de pontos. O evento Touched é como um sensor de porta automática: quando alguém passa, ele dispara. A função é uma receita: só faz alguma coisa quando você chama. O if é uma pergunta de sim ou não. Evite o termo "parâmetro"; diga "a informação que chega quando algo toca". Mostre sempre rodando: adolescentes entendem muito mais vendo a moeda sumir do que ouvindo a teoria.

## Erros comuns e como ajudar

O esquecimento mais frequente é o nome do Sound não bater com o WaitForChild("Sound"); confira que o objeto se chama exatamente Sound. Se nada acontece, quase sempre o Script foi colocado fora da Part (deve estar dentro dela no Explorer). Indentação não quebra Lua, mas peça capricho. Erros aparecem em vermelho no Output: leia a linha indicada juntos. Se a moeda some mas não soma, faltou o if com Humanoid ou o jogador tocou com outra coisa. Se o som não toca, o SoundId está vazio ou o volume é zero em Properties.`,
  exercicios: [
    {
      titulo: `Minha primeira moeda que some`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe cada aluno criar a Part, renomear para Moeda, inserir o Script e colar o código de coleta. Confirme no Explorer que o Script está dentro da Part. Peça para apertar Play e andar sobre a moeda.`,
      atividade: `Crie uma Part chamada Moeda, insira um Script dentro dela, cole o código de coleta da aula e teste apertando Play até a moeda sumir ao ser tocada.`,
      gabarito: `A moeda desaparece ao toque do personagem e o Output mostra a mensagem de pontos. O Script aparece como filho da Part Moeda no Explorer, e o evento moeda.Touched:Connect(aoTocar) está presente no código.`,
    },
    {
      titulo: `Placar que sobe`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Reforce a ideia de variável que cresce. Mostre como ler o Output. Verifique que a linha pontos = pontos + 1 está dentro do if e que o print exibe o número atualizado a cada coleta.`,
      atividade: `Duplique a moeda três vezes com Ctrl+C e Ctrl+V, espalhe pelo cenário e jogue coletando todas. Observe no Output o número de pontos subir de 1 até 3.`,
      gabarito: `Cada moeda coletada soma 1 ao placar; ao pegar as três, o Output mostra a sequência Pontos: 1, Pontos: 2, Pontos: 3. As moedas somem uma a uma sem travar o jogo.`,
    },
    {
      titulo: `Som de IA na coleta`,
      tipo: `desafio`,
      tempo: `9 min`,
      guiaProfessor: `Ajude no upload ou no uso do ID do som de IA. Confira que o objeto Sound foi inserido dentro da Part e nomeado exatamente Sound, e que o SoundId está preenchido em Properties. Lembre de checar o volume.`,
      atividade: `Insira um objeto Sound dentro da moeda, cole o SoundId do efeito feito no Suno ou ElevenLabs e faça o som tocar toda vez que a moeda for coletada.`,
      gabarito: `Ao coletar a moeda, o efeito sonoro de IA toca uma vez. O objeto chama-se Sound, está dentro da Part, tem SoundId preenchido e volume maior que zero, e a linha som:Play() é executada na função de coleta.`,
    },
    {
      titulo: `Vencer o jogo`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Oriente a adicionar a condição de vitória com um if que compara a pontuação. Cuidado com o sinal de igualdade duplo (==) para comparar. Peça que as duplas testem juntas antes de chamar você.`,
      atividade: `Em dupla, adicionem uma condição de vitória: quando os pontos chegarem a 5, o jogo deve mostrar a mensagem Você venceu! no Output. Coloquem 5 moedas no cenário e testem coletando todas.`,
      gabarito: `Após coletar a quinta moeda, o Output exibe Você venceu!. O código contém algo como if pontos == 5 then print("Você venceu!") end dentro da função de coleta, e as 5 moedas estão posicionadas no cenário.`,
    },
    {
      titulo: `Roda de conversa: as regras do meu jogo`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em círculo. Conduza cada aluno a explicar em uma frase a regra principal do próprio jogo (como se ganha e como se perde). Valorize ideias de derrota (cair, tempo) sem cobrar que já estejam programadas. Anote propostas para a Aula 5.`,
      atividade: `Cada aluno apresenta o próprio jogo em uma frase respondendo: como o jogador ganha pontos, como vence e qual seria uma forma de perder. Ouça duas ideias dos colegas para melhorar a sua mecânica.`,
      gabarito: `Cada aluno descreve com clareza a mecânica de pontuação e a condição de vitória do seu jogo e propõe pelo menos uma condição de derrota possível (por exemplo, cair de uma plataforma ou acabar o tempo). Não é exigido que a derrota já esteja codificada.`,
    },
  ],
};
