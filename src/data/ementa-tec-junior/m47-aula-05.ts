import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Itens e objetivos: o que o jogador precisa fazer",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança cria itens colecionáveis no cenário do Roblox e usa um script em Lua para contar quantos o jogador pegou, mostrando o número na tela e definindo o objetivo do jogo.`,
  descricao: `Nas semanas anteriores a turma abriu o Roblox Studio, montou o cenário do jogo e já deu os primeiros comandos em Lua. Agora chega a parte que transforma um mundo bonito em um jogo de verdade: dar ao jogador uma missão. Todo jogo precisa de um objetivo, ou seja, de uma coisa clara para o jogador tentar conseguir. Sem objetivo, o jogador entra, anda um pouco e fica sem saber o que fazer.

O assunto central desta aula é a ideia de item colecionável e de contagem de pontos. Um item colecionável é um objeto espalhado pelo cenário que o jogador pega ao encostar nele, como moedas, chaves ou estrelas. Cada vez que ele pega um item, um número na tela aumenta. Esse número é o placar, e o objetivo do jogo passa a ser simples e divertido: "junte todas as moedas" ou "pegue as três chaves". É exatamente o mesmo segredo dos jogos que as crianças já conhecem e adoram.

Na prática, cada aluno vai criar uma peça simples no cenário (uma Part), transformá-la em moeda, e escrever um pequeno script em Lua que faz três coisas: perceber quando o jogador toca na moeda, somar um ponto e fazer a moeda desaparecer. Depois a turma coloca um texto na tela mostrando o placar. O professor demonstra cada passo no projetor, bem devagar, e as crianças repetem no próprio computador, conectando os novos itens ao cenário que já estava montado.

Esta aula é a ponte entre "ter um cenário" e "ter um jogo jogável". Ela prepara o terreno para as próximas semanas, quando a turma vai ajustar a dificuldade, caçar bugs e finalmente mostrar o jogo pronto. O foco aqui é a emoção de ver o número subir na tela quando se pega um item, porque é esse retorno imediato que faz a criança entender o que é um objetivo de jogo.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto, no mesmo arquivo do jogo que a turma vem montando, com o cenário das semanas anteriores visível.`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada clique e cada linha de código bem devagar.`,
    `Arquivo de exemplo "jogo_das_moedas.rbxl" salvo na pasta da aula, já com três moedas funcionando e o placar na tela, para abrir e inspirar a turma.`,
    `Cartões impressos grandes com imagens de jogos conhecidos mostrando moedas, chaves e estrelas, para a roda de conversa sobre objetivos.`,
    `Moedas de brinquedo, chaves de plástico ou estrelinhas de papel de verdade, para as crianças manusearem e contarem com as mãos antes do computador.`,
    `Folha impressa "colinha do código" com o script da moeda escrito linha a linha, uma por dupla, para consultarem enquanto digitam.`,
    `Adesivos ou estrelinhas para premiar quem fizer o placar subir e compartilhar o jogo no final.`,
  ],
  conceitosChave: [
    `Item colecionável — um objeto espalhado pelo cenário que o jogador pega encostando nele, como moeda, chave ou estrela.`,
    `Objetivo — a missão do jogo, a coisa clara que o jogador precisa fazer, por exemplo "junte todas as moedas".`,
    `Placar — o número na tela que mostra quantos pontos o jogador já conseguiu.`,
    `Toque — o momento em que o personagem encosta no item; no Roblox isso se chama "Touched" e avisa o script.`,
    `Variável — uma caixinha com nome onde o computador guarda um número, como a contagem de pontos.`,
    `Função — um bloco de código com nome que só roda quando é chamado, como uma receita guardada para a hora certa.`,
    `Script — o pedacinho de código em Lua que dá vida ao item, dizendo o que acontece quando ele é tocado.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio, cada objeto do cenário é uma "Part" (peça). Para virar um item colecionável, a Part precisa de um "Script", que é o arquivo onde escrevemos Lua. O script fica dentro da Part, na janela "Explorer" (o painel à direita que mostra a árvore de tudo que existe no jogo). Para abrir o Explorer e o "Properties" (Propriedades), use o menu superior "View" e clique nos dois nomes.

A mágica do item colecionável usa um evento chamado "Touched". Todo objeto físico avisa o jogo quando algo encosta nele. No script, ligamos uma função a esse aviso. Quando o personagem toca a moeda, a função roda, soma um ponto numa variável e apaga a moeda. Você não precisa decorar Lua: basta seguir a colinha. Os termos-chave são variável (a caixinha do número), função (a receita) e o método Destroy, que faz a peça sumir. Teste tudo antes da aula clicando no botão verde "Play" no topo.

## Passo a passo da aula

Aquecimento (10 min): abra o arquivo "jogo_das_moedas.rbxl" no projetor e clique em "Play". Ande pelo cenário, pegue uma moeda e mostre o número subindo. Pergunte: "Qual é o objetivo deste jogo?". Relembre que na semana passada eles já escreveram comandos em Lua. Diga que hoje vão dar uma missão ao jogador.

Conteúdo novo guiado (15 min): no seu computador, no projetor, faça devagar. No Explorer, clique com o botão direito em "Workspace", escolha "Insert Object" e depois "Part". Renomeie para "Moeda", deixe ela amarela e dourada nas Propriedades (cor "BrickColor"). Clique com o botão direito na Moeda, "Insert Object", "Script". Apague o texto que vem pronto e digite a colinha em voz alta, explicando cada linha:

local moeda = script.Parent
local pontos = 0
local function pegou(parte)
  local jogador = parte.Parent
  if jogador:FindFirstChild("Humanoid") then
    pontos = pontos + 1
    print("Pontos: " .. pontos)
    moeda:Destroy()
  end
end
moeda.Touched:Connect(pegou)

Explique: a primeira linha guarda a moeda numa caixinha; "pontos" começa em zero; a função "pegou" roda quando algo encosta; o "if" confere se foi um personagem (procurando o "Humanoid"); então soma um ponto, escreve na janela "Output" e destrói a moeda. A última linha liga a função ao toque. Clique em "Play" e pegue a moeda para mostrar funcionando.

Mão na massa (25 min): cada criança no seu computador, no arquivo do próprio jogo. Peça que criem uma Part, renomeiem para "Moeda", pintem de dourado e insiram um Script. Usando a colinha de papel, digitam o código linha a linha. Circule pela sala ajudando a achar o Explorer e corrigindo a digitação. Quando funcionar, peça que copiem a moeda (Ctrl+C, Ctrl+V) e espalhem várias pelo cenário montado nas semanas anteriores.

Desafio e compartilhar (10 min): proponha o desafio "Espalhe pelo menos cinco moedas e diga em voz alta qual é o objetivo do seu jogo". Faça uma volta rápida: cada criança mostra a tela com a janela "Output" e clica em Play para pegar uma moeda na frente da turma. Dê uma estrelinha para cada um.

## Como explicar para crianças

Comece pela emoção: "Todo jogo bom tem uma missão. Qual é a missão do seu?". Use apelidos concretos. A variável "pontos" é "a caixinha que conta"; a função é "uma receita que só usamos quando precisa"; o Touched é "o sininho que toca quando alguém encosta". Compare com brincadeira de pega-pega: quando você encosta no amigo, algo acontece. Aqui, quando o personagem encosta na moeda, o número sobe. Diga que o ".." junta palavras com números, como colar dois papéis.

## Erros comuns e como ajudar

O erro mais comum é digitar errado e esquecer o "end" no fim da função, ou o "end" do "if". Mostre que cada "function" e cada "if" precisam de um "end" para fechar, como cada porta aberta precisa ser fechada. Outro erro é criar o Script fora da moeda, no lugar errado do Explorer; confira que o Script está dentro da Part "Moeda". Há quem esqueça de pintar a peça e não ache a moeda no cenário: arraste-a para um lugar bem visível. Se nada acontece ao pegar, peça para abrir a janela "Output" (menu View) e ler junto a mensagem em vermelho, que aponta a linha do erro. Lembre que digitar com calma evita quase todos os problemas.`,
  exercicios: [
    {
      titulo: `Qual é a missão do jogo?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda e mostre os cartões de jogos conhecidos com moedas, chaves e estrelas. Pergunte qual é o objetivo de cada um. O objetivo é fazer a criança perceber que todo jogo tem uma missão clara antes de pensar em código. Anote no quadro as ideias que surgirem.`,
      atividade: `Olhem os cartões e digam, para cada jogo, o que o jogador precisa fazer para ganhar. Depois cada criança inventa uma missão para o próprio jogo e fala em voz alta: "no meu jogo o objetivo é...".`,
      gabarito: `Acertou quem identifica um objetivo claro em cada cartão (por exemplo: "juntar todas as moedas", "achar a chave", "pegar a estrela") e consegue inventar uma missão simples para o próprio jogo. Vale qualquer objetivo de coletar itens, desde que seja claro.`,
    },
    {
      titulo: `Conta nas mãos`,
      tipo: `mão na massa com material físico`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua moedas de brinquedo ou estrelinhas de papel. Antes do computador, peça que cada criança pegue um item por vez e diga o número em voz alta, como se fosse o placar subindo. Isso prepara o cérebro para a ideia de variável que aumenta de um em um. Conduza a contagem em ritmo lento.`,
      atividade: `Pegue uma moeda de cada vez e, a cada uma, fale o total: "um, dois, três...". Quando juntar cinco, mostre a mãozinha cheia e diga "consegui o objetivo".`,
      gabarito: `Acertou quem conta corretamente um a um, percebendo que cada item pego aumenta o total em um, e relaciona isso com o placar do jogo. O importante é entender a contagem crescente, não a quantidade exata.`,
    },
    {
      titulo: `Minha primeira moeda`,
      tipo: `prática na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Demonstre uma vez no projetor e deixe a turma repetir. Oriente a inserir uma Part no Workspace pelo Explorer, renomear para "Moeda" e pintar de dourado nas Propriedades. Ainda sem código: o foco é criar e posicionar o item dentro do cenário montado nas semanas passadas. Ajude quem não acha o Explorer (menu View).`,
      atividade: `No Roblox Studio, crie uma Part, renomeie para "Moeda", pinte de amarelo dourado e arraste-a para um lugar bonito do seu cenário, onde o jogador vai passar.`,
      gabarito: `A cena deve mostrar uma peça dourada chamada "Moeda" posicionada num caminho visível do cenário. Acertou quem criou a Part, renomeou e pintou corretamente, deixando a moeda à vista.`,
    },
    {
      titulo: `O código que conta`,
      tipo: `programação em Lua`,
      tempo: `16 minutos`,
      guiaProfessor: `Esta é a parte central. Com a colinha de papel na mão, demonstre inserir um Script dentro da Moeda e digitar o código linha a linha. Explique que cada "function" e cada "if" precisam de um "end". Peça que cliquem em Play e peguem a moeda, abrindo a janela Output para ver a contagem. Circule corrigindo erros de digitação.`,
      atividade: `Insira um Script dentro da sua Moeda e digite o código da colinha. Clique em Play, encoste na moeda com seu personagem e veja o número de pontos aparecer na janela Output. A moeda deve sumir ao ser pega.`,
      gabarito: `Ao testar, a moeda some quando o personagem encosta e a janela Output mostra "Pontos: 1". Acertou quem digitou o script com os "end" fechados corretamente, colocou-o dentro da Moeda e viu a contagem subir. O código esperado soma 1 em "pontos", imprime o total e usa moeda:Destroy() para apagar a peça.`,
    },
    {
      titulo: `Desafio: o objetivo do meu jogo`,
      tipo: `desafio e compartilhar`,
      tempo: `16 minutos`,
      guiaProfessor: `Ponto alto da aula. Peça que cada criança copie a moeda funcionando (Ctrl+C, Ctrl+V) e espalhe pelo menos cinco pelo cenário, conectando os itens ao mundo já montado. Depois conduza a rodada de compartilhamento: cada um mostra a tela, clica em Play, pega uma moeda na frente da turma e diz qual é o objetivo do jogo. Dê estrelinhas.`,
      atividade: `Copie sua moeda e espalhe pelo menos cinco pelo cenário, em lugares por onde o jogador vai passar. Depois mostre para a turma, pegue uma moeda ao vivo e diga em voz alta: "o objetivo do meu jogo é juntar todas as moedas".`,
      gabarito: `Acertou quem tem cinco ou mais moedas funcionando espalhadas pelo cenário, cada uma somando ponto e sumindo ao ser tocada, e consegue enunciar um objetivo claro para o jogo. Sucesso é o placar subir ao vivo e o colega entender a missão.`,
    },
  ],
};
