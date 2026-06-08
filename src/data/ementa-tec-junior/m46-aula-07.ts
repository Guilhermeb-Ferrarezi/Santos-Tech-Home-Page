import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando a minha mecânica",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Juntar evento, condição, pontuação e função para construir a primeira versão funcionando de uma mecânica própria escolhida pela criança.`,
  descricao: `Chegou o momento mais esperado do mês: a criança vai juntar tudo o que aprendeu (evento, condição, pontuação e função) para montar a sua própria mecânica. Uma mecânica é uma regrinha que faz o jogo acontecer, como uma armadilha que tira pontos, um coletável que dá pontos ou um botão especial que faz algo divertido. Nas aulas anteriores cada peça foi treinada separada; nesta aula elas se encaixam como peças de LEGO para formar algo que funciona de verdade.

O segredo desta aula é planejar antes de programar. Em vez de sair clicando, a criança primeiro responde três perguntas: o que faz começar (o evento), qual é a regra (a condição) e o que acontece (a função e a pontuação). Esse pequeno plano vira uma bússola que evita que a criança se perca no meio do código. O professor não precisa dominar Roblox nem Lua: basta seguir os passos deste material, que indicam onde clicar e o que digitar.

Cada aluno escolhe uma mecânica simples entre três opções prontas (armadilha, coletável ou botão especial). Todas usam as mesmas peças, então o professor consegue ajudar todos ao mesmo tempo, mesmo que cada um escolha algo diferente. O foco não é deixar tudo perfeito, e sim ter uma primeira versão que já roda. Ajustes e enfeites ficam para a próxima aula.

Ao final, cada criança terá no Roblox Studio uma mecânica que reage a uma ação, verifica uma condição e muda a pontuação. É a hora de ver as peças soltas virarem um brinquedo de verdade, e isso costuma render muito orgulho e muita vontade de mostrar para os colegas.`,
  materiais: [
    `Computadores com o Roblox Studio aberto e a janela de código (Script) já visível para cada aluno`,
    `Projetor ligado para o professor mostrar onde clicar e o código linha a linha`,
    `Três exemplos prontos salvos no computador do professor: uma armadilha, um coletável e um botão especial`,
    `Folha de planejamento impressa com as três perguntas (o que faz começar, qual é a regra, o que acontece)`,
    `Lápis ou caneta para a criança preencher o plano antes de programar`,
    `Cartaz na parede com os blocos já aprendidos: evento, condição (if), pontuação e função`,
  ],
  conceitosChave: [
    `Mecânica — uma regrinha que faz o jogo acontecer, como uma armadilha que tira pontos ou um coletável que dá pontos.`,
    `Evento — o momento em que algo começa, como tocar numa peça ou apertar um botão.`,
    `Condição — a pergunta sim ou não que o código faz antes de agir, usando a palavra if.`,
    `Função — uma caixinha de código com um nome, que guarda passos para usar quando a gente chamar.`,
    `Pontuação — o número que sobe ou desce para mostrar quem está ganhando.`,
    `Planejar — pensar antes de fazer, escrevendo num papel o que vai acontecer no jogo.`,
    `Primeira versão — a forma mais simples da mecânica que já funciona, sem enfeites ainda.`,
  ],
  treinamento: `## O que o professor precisa saber

Uma mecânica nada mais é do que juntar quatro peças que as crianças já treinaram: um evento (o que faz começar), uma condição (a regra com if), uma pontuação (o número que sobe ou desce) e uma função (a caixinha de passos). Você não precisa ser especialista. No Roblox Studio, o código mora dentro de um objeto chamado Script. Para abrir, a criança clica numa peça (Part) na janela Explorer, à direita, e procura o Script já criado nas aulas anteriores. Dois cliques no Script abrem a janela de código no centro da tela. É ali que digitamos em Lua. Tenha os três exemplos prontos abertos no seu computador para mostrar no projetor.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, mostre o cartaz com as quatro peças. Pergunte: o que é um evento? E uma condição? Relembre rapidinho que function é uma caixinha com nome. Diga a frase mágica do dia: primeiro a gente planeja, depois a gente programa.

Conteúdo novo guiado (15 min): entregue a folha de planejamento. Mostre no projetor a sua mecânica de exemplo (o coletável). Preencha o plano em voz alta: o que faz começar é tocar na moeda; a regra é se quem tocou for um jogador; o que acontece é somar um ponto. Agora mostre o código exato. Na janela do Script, apague o que houver e digite:

local moeda = script.Parent
local function coletar(parte)
local jogador = game.Players:GetPlayerFromCharacter(parte.Parent)
if jogador then
print("Ponto para " .. jogador.Name)
moeda:Destroy()
end
end
moeda.Touched:Connect(coletar)

Explique linha a linha: local moeda guarda a peça; local function coletar é a caixinha que roda quando algo toca; if jogador then é a regra; print mostra o ponto; Destroy faz a moeda sumir; a última linha liga o evento Touched à função. Clique no botão Play, na barra de cima, e toque na moeda para mostrar funcionando.

Mão na massa (25 min): cada criança escolhe uma das três mecânicas e preenche a folha de plano primeiro. Só depois abre o Script da sua peça e digita o código. Circule pela sala. Quem escolheu armadilha troca print por algo que tira ponto; quem escolheu botão usa ClickDetector no lugar de Touched. Peça para testarem com Play sempre que terminarem uma parte.

Desafio e compartilhar (10 min): peça que cada um aperte Play e mostre a mecânica rodando para o colega do lado. O desafio é trocar a mensagem do print para algo divertido com o nome do jogo deles.

## Como explicar para crianças

Use a comparação com receita de bolo: o evento é a campainha tocando, a condição é olhar pelo olho mágico para ver quem é, e a função é a lista de passos que você faz depois. Diga que a mecânica é como uma armadilha de desenho animado: alguém pisa (evento), o código pergunta se é um jogador (condição) e a coisa dispara (função). Reforce sempre: a gente desenha no papel antes de digitar, igual a um mapa do tesouro.

## Erros comuns e como ajudar

O erro mais comum é querer programar sem planejar; insista na folha primeiro. Muitos esquecem a palavra end e o código fica vermelho; ensine a contar: cada function e cada if precisam de um end para fechar, como abrir e fechar a tampa de uma caixa. Outro tropeço é digitar Conect em vez de Connect, ou trocar maiúscula por minúscula; o Lua é exigente com letras. Se nada acontece ao tocar a peça, verifique se a propriedade CanTouch da Part está marcada e se a última linha (Touched:Connect) foi digitada. Por fim, lembre que apertar Play de novo desfaz o teste anterior, então não precisam ter medo de errar.`,
  exercicios: [
    {
      titulo: `Qual é a peça?`,
      tipo: `Aquecimento oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça no início, com a turma toda olhando o cartaz das quatro peças. Leia cada situação e peça que apontem para a peça certa no cartaz. Aceite respostas em voz alta e elogie.`,
      atividade: `Aponte no cartaz qual peça é cada uma: (a) tocar na moeda faz algo começar; (b) o código pergunta se quem tocou é jogador; (c) o número de pontos sobe; (d) a caixinha com nome que guarda os passos.`,
      gabarito: `(a) Evento; (b) Condição (if); (c) Pontuação; (d) Função. São exatamente as quatro peças que vamos juntar na mecânica de hoje.`,
    },
    {
      titulo: `Meu plano em três perguntas`,
      tipo: `Planejamento no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue a folha de planejamento. Cada criança escolhe uma mecânica (armadilha, coletável ou botão) e responde as três perguntas com palavras simples, sem código ainda. Passe de mesa em mesa confirindo se cada resposta está clara.`,
      atividade: `Na folha, escreva a sua escolha e responda: 1) O que faz começar? 2) Qual é a regra (o if)? 3) O que acontece no final?`,
      gabarito: `Exemplo de coletável: 1) Tocar na moeda; 2) Se quem tocou for um jogador; 3) Soma um ponto e a moeda some. Qualquer resposta vale desde que tenha um evento, uma condição e um resultado claros.`,
    },
    {
      titulo: `Complete o código que falta`,
      tipo: `Preencher lacunas`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre o código no projetor com duas partes apagadas. Peça que digam ou escrevam o que falta antes de digitar no Script. Confira em voz alta antes de seguir.`,
      atividade: `Complete: local function coletar(parte) / _____ jogador then / print("Ponto!") / moeda:Destroy() / _____ . Quais duas palavras faltam para a regra e para fechar a caixinha?`,
      gabarito: `Falta if (a palavra da regra, na linha if jogador then) e falta end (para fechar a função). Cada function e cada if precisam de um end.`,
    },
    {
      titulo: `Construir a primeira versão`,
      tipo: `Mão na massa no Roblox Studio`,
      tempo: `25 minutos`,
      guiaProfessor: `Cada criança abre o Script da sua peça (dois cliques no Script dentro do Explorer) e digita o código da mecânica que planejou. Lembre de testar com Play. Circule ajudando com letras maiúsculas e a palavra end. Quem terminar cedo pode mudar a mensagem do print.`,
      atividade: `Digite no Script o código da sua mecânica usando evento, condição e função. Depois aperte Play e teste tocando ou clicando na peça para ver se funciona.`,
      gabarito: `A mecânica está pronta quando, ao apertar Play e interagir com a peça, algo acontece (a mensagem aparece, a peça some ou o ponto muda). Para o coletável, o código modelo do treinamento já funciona; para a armadilha troca-se o resultado por tirar ponto; para o botão usa-se ClickDetector com o evento MouseClick no lugar de Touched.`,
    },
    {
      titulo: `Desafio: minha mensagem especial`,
      tipo: `Desafio e compartilhar`,
      tempo: `5 minutos`,
      guiaProfessor: `No final, peça que cada um personalize a mensagem do print com o nome do jogo ou uma palavra divertida, aperte Play e mostre para o colega do lado. Termine reunindo a turma para comemorar as mecânicas que já funcionam.`,
      atividade: `Mude a frase dentro do print para algo do seu jogo, como print("Você pegou um cristal mágico!"). Aperte Play, teste e mostre para o colega ao lado.`,
      gabarito: `Resposta válida é qualquer texto novo entre aspas dentro do print que apareça corretamente ao testar, sem deixar o código vermelho. Exemplo: print("Você venceu a armadilha!"). O importante é a mensagem mudar e a mecânica continuar funcionando.`,
    },
  ],
};
