import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu jogo jogável: hora de mostrar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `A criança finaliza e salva a versão jogável completa do seu jogo no Roblox Studio com código Lua, joga o jogo de um colega, recebe quem joga o seu e anota o que mais gostou, fechando o entregável do mês.`,
  descricao: `Esta é a última aula do mês e o grande dia da turma: o jogo que cada criança vem montando há quatro semanas finalmente fica pronto, salvo e jogável. Durante o mês os alunos abriram o Roblox Studio, construíram o cenário, escreveram scripts em Lua que deram vida ao mundo, programaram as mecânicas, criaram itens e objetivos, ajustaram o equilíbrio e caçaram os bugs. Agora chega a hora de juntar tudo, dar o último teste e apertar o salvar com orgulho.

Finalizar um jogo é tão importante quanto começar. Os profissionais que fazem jogos de verdade sempre fazem uma última jogada completa antes de entregar: conferem se dá para jogar do começo ao fim, se as moedas aparecem, se o placar conta certo e se nada quebra no meio. Nesta aula a criança aprende esse hábito de testar a versão final e de guardar o trabalho no lugar certo, do mesmo jeito que um desenvolvedor publica a sua criação para o mundo todo poder brincar.

O coração da aula é o momento de jogar o jogo do colega e deixar o colega jogar o seu. Cada criança troca de cadeira, experimenta a criação de um amigo, anota numa fichinha o que mais gostou e devolve um elogio. Esse compartilhar dá confiança, ensina a observar o trabalho dos outros com carinho e celebra a conquista de ter criado um jogo inteiro com código de texto, e não mais arrastando blocos.

A palavra-chave do dia é entrega. O jogo está pronto para ser jogado por outra pessoa, e isso é o que transforma um monte de scripts num jogo de verdade. O professor reforça que esse projeto não acaba aqui: ele é a ponte para o próximo mês da etapa de projeto, quando a turma vai levar tudo o que aprendeu para criações ainda maiores. A aula é leve, comemorativa e cheia de orgulho, fechando o mês com a sensação de dever cumprido.`,
  materiais: [
    `Computadores ligados, um por criança, com o Roblox Studio aberto e o jogo de cada aluno (o projeto das semanas anteriores) já carregado na tela.`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar o salvar e o teste, e para celebrar as criações no fechamento.`,
    `Um jogo de exemplo já finalizado e salvo pelo professor, completo e jogável do começo ao fim, para mostrar como fica um projeto pronto.`,
    `Fichinhas de papel impressas com o título "O que eu mais gostei no jogo do colega" e espaço para o nome e um desenho, uma por criança.`,
    `Lápis de cor e canetinhas para preencher as fichinhas de elogio.`,
    `Uma conta do Roblox Studio já logada em cada máquina (ou a conta da escola), para que o salvar na nuvem funcione sem travar.`,
    `Adesivos ou estrelinhas para premiar cada criança que terminar e salvar o seu jogo.`,
  ],
  conceitosChave: [
    `Versão jogável — o jogo pronto para alguém jogar do começo ao fim, sem precisar do criador do lado explicando.`,
    `Salvar — guardar o jogo no computador ou na nuvem do Roblox para ele não se perder, como colocar o trabalho numa gaveta segura.`,
    `Testar — jogar o próprio jogo inteiro para conferir se tudo funciona antes de mostrar para os outros.`,
    `Playtest — quando outra pessoa joga o seu jogo e te conta o que achou, igual a um amigo provar o seu bolo e dizer se ficou gostoso.`,
    `Script em Lua — o pedaço de código de texto que dá vida ao jogo, dizendo ao computador o que fazer.`,
    `Publicar — colocar o jogo no Roblox para outras pessoas poderem entrar e jogar, como soltar um pipa no céu para todo mundo ver.`,
    `Feedback — o elogio ou a dica que um colega dá depois de jogar, para a gente melhorar e ficar feliz com o que fez.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não introduz mecânicas novas: ela junta, finaliza e salva o jogo, e abre espaço para os alunos jogarem o trabalho uns dos outros. Você precisa dominar três ações no Roblox Studio. Primeira, testar o jogo: clique no botão "Play" (o triângulo verde no topo, na aba "Home" ou "Test"); o seu personagem entra no mundo e você joga de verdade; para parar, clique no quadrado "Stop" (vermelho). Segunda, salvar: vá no menu "File" (canto superior esquerdo) e escolha "Save to Roblox" para guardar na nuvem, ou "Save to File" para guardar um arquivo ".rbxl" no computador; na primeira vez o Studio pede um nome para o jogo, então digite o nome do aluno. Terceira, abrir o jogo de um colega: feche o projeto atual salvo, vá em "File" e "Open from Roblox" (ou abra o arquivo ".rbxl" do colega), e clique em "Play" para jogar. Faça você mesmo o teste antes da aula, salvando e reabrindo o jogo de exemplo, para não travar na frente da turma. Lembre-se: nesta idade o professor confere o salvar junto com a criança; ela aponta e clica, você acompanha.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma com clima de festa. Projete o jogo de exemplo e jogue ele do começo ao fim na frente de todos, mostrando que dá para terminar. Pergunte: "O que o jogo de vocês já faz?". Relembre rapidinho o cenário, os scripts em Lua, as moedas e o objetivo. Diga que hoje é o dia de deixar tudo pronto e jogável.

Conteúdo novo guiado (15 min): no projetor, mostre as três ações. Clique em "Play" (triângulo verde) e jogue o exemplo inteiro, apontando o que conferir: começar, pegar item, ver o placar subir e chegar no objetivo; clique em "Stop". Depois mostre o salvar: menu "File", "Save to Roblox", digite o nome, confirme. Por fim, mostre como abrir o jogo de outra pessoa em "File" e "Open from Roblox". Repita o salvar duas vezes para grudar na cabeça.

Mão na massa (25 min): cada criança faz a jogada final do seu jogo, conferindo se dá para jogar do começo ao fim. Passe de mesa em mesa. Se um script quebrar, abra a janela "Output" (na aba "View", botão "Output") e leia a linha vermelha com o aluno; corrija o erro simples (uma palavra errada, um "end" faltando). Quando o jogo passar no teste, sente ao lado e salve juntos: a criança aponta "File", clica em "Save to Roblox", digita o nome com a sua ajuda e confirma. Comemore cada jogo salvo com um joinha e um adesivo.

Desafio e compartilhar (10 min): rodada de playtest. Cada criança troca de lugar com um colega, joga o jogo dele por dois ou três minutos e preenche a fichinha "O que eu mais gostei". Depois volta para o seu lugar e lê o elogio que recebeu. Feche dizendo que todos os jogos estão salvos e que esse projeto é a ponte para criações maiores no próximo mês.

## Como explicar para crianças

Use a ideia de entrega o tempo todo. "Seu jogo está pronto para outra pessoa jogar, igual a um presente embrulhado!". Salvar é "guardar o jogo numa caixa segura na nuvem para ele nunca se perder". Testar é "jogar você mesmo do começo ao fim, como provar o bolo antes de servir". Playtest é "deixar o amigo brincar com a sua criação e te contar o que achou". Evite palavras difíceis como "compilar" ou "deploy"; fale "guardar", "jogar" e "mostrar". Na hora do feedback, ensine a regra do elogio: a gente só fala uma coisa boa que gostou, porque todo criador merece carinho.

## Erros comuns e como ajudar

O erro mais comum é a criança fechar o Studio sem salvar; por isso o salvar é feito junto com você, nunca sozinha, e sempre antes de abrir o jogo do colega. Outro erro é o script parar de funcionar na hora do teste: abra o "Output", procure a linha vermelha e leia junto; quase sempre é uma palavra digitada errada ou um "end" que faltou no final de uma função ou de uma condição. Algumas crianças querem mexer no jogo para sempre e nunca terminam; combine "só mais um ajuste" e celebre o que já está jogável. Há quem fique bravo se o colega achar um errinho; reforce a regra do elogio e diga que achar um erro é ajudar, não criticar. Se a criança ficar tímida na hora de mostrar, jogue o jogo dela junto, narrando o que está acontecendo com entusiasmo.`,
  exercicios: [
    {
      titulo: `A Jogada Final`,
      tipo: `Prática no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Introduza dizendo que todo criador de jogo faz uma última jogada completa antes de entregar. Projete o exemplo e mostre rapidinho onde fica o botão "Play" (triângulo verde) e o "Stop" (quadrado vermelho). Peça que cada criança jogue o próprio jogo do começo ao fim uma vez, sem mexer no código, só para ver se está jogável.`,
      atividade: `Clique no triângulo verde "Play" e jogue o seu jogo do começo até o fim, como se fosse um jogador de verdade. Veja se você consegue começar, pegar um item e chegar no objetivo. Quando terminar, clique no quadrado vermelho "Stop".`,
      gabarito: `A criança acerta se conseguir jogar o jogo inteiro pelo menos uma vez: o personagem entra, ela interage com algum item ou mecânica e chega ao fim ou ao objetivo, depois clica em "Stop". O professor vê na tela o jogo rodando do começo ao fim sem travar de vez.`,
    },
    {
      titulo: `Verdadeiro ou Falso da Entrega`,
      tipo: `Jogo`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza como um joguinho de corpo: as crianças levantam os dois braços para "verdadeiro" e cruzam os braços para "falso". Leia frases curtas sobre salvar, testar e jogar o jogo do colega. Faça com energia e comemore os acertos. Use as frases para reforçar os conceitos do dia.`,
      atividade: `Levante os braços se for VERDADE e cruze os braços se for MENTIRA: 1) Salvar é guardar o jogo para ele não se perder. 2) A gente precisa apagar todos os scripts antes de mostrar o jogo. 3) Testar é jogar o jogo inteiro para ver se funciona. 4) Quem salva o jogo consegue abrir e jogar ele de novo depois.`,
      gabarito: `Respostas certas: 1) Verdade. 2) Mentira (os scripts em Lua são o que dão vida ao jogo, a gente nunca apaga). 3) Verdade. 4) Verdade. A turma acerta quando faz os gestos certos e consegue explicar com palavras simples por que salvar e testar são importantes.`,
    },
    {
      titulo: `Guardando na Caixa Segura`,
      tipo: `Prática no computador`,
      tempo: `9 minutos`,
      guiaProfessor: `Este é o momento de salvar o entregável do mês. Mostre de novo no projetor o caminho "File" e "Save to Roblox". Depois sente ao lado de cada criança, uma de cada vez, e salve junto: ela aponta o menu, clica, digita o nome com a sua ajuda e confirma. Confira na barra de título do Studio que o nome do jogo aparece, sinal de que foi salvo. Premie com um adesivo.`,
      atividade: `Com a ajuda do professor, salve o seu jogo! Clique no menu "File" no canto de cima, escolha "Save to Roblox", digite o nome do seu jogo (pode ser o seu nome) e confirme. Pronto: seu jogo está guardado numa caixa segura na nuvem.`,
      gabarito: `A criança acerta quando o jogo é salvo de verdade: o professor confere que o nome do jogo aparece na barra de título do Studio e que, ao reabrir, o projeto carrega completo. O sucesso é cada aluno ter o seu jogo salvo, que é o entregável do mês.`,
    },
    {
      titulo: `O Caça-Erro de Última Hora`,
      tipo: `Resolução de problema`,
      tempo: `10 minutos`,
      guiaProfessor: `Use um jogo de exemplo onde você inseriu de propósito um erro simples no script (por exemplo, escreveu "prin" no lugar de "print", ou tirou um "end" do fim de uma função). Projete a janela "Output" (aba "View", botão "Output") com a linha vermelha. Mostre que o computador avisa o erro e ajude a turma a achar a palavra errada. Em seguida, cada criança confere o próprio jogo procurando linhas vermelhas no Output.`,
      atividade: `Olhe a janela "Output" do professor: tem uma linha vermelha! O computador está avisando um erro no código. Vamos achar juntos: o que está escrito errado nesta linha de Lua? Depois, abra o "Output" do seu jogo e veja se aparece alguma linha vermelha para arrumar com o professor.`,
      gabarito: `No exemplo do professor, a criança acerta ao apontar a palavra errada (por exemplo "prin" deveria ser "print") ou notar que faltou um "end" no fim da função, e o erro some do Output depois de corrigir. No próprio jogo, acerta quem confere o Output e, se houver linha vermelha, corrige com ajuda; se não houver, mostra que o jogo está limpo de erros.`,
    },
    {
      titulo: `O Grande Playtest da Turma`,
      tipo: `Desafio e apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o ponto alto da aula. Garanta que todos salvaram antes de começar. Organize as trocas: cada criança vai à cadeira de um colega, joga o jogo dele por dois ou três minutos e preenche a fichinha "O que eu mais gostei". Reforce a regra do elogio: só falamos uma coisa boa. No final, cada criança volta para o seu lugar e lê em voz alta o elogio que recebeu. Faça uma salva de palmas geral e anuncie que todos os jogos estão guardados para a etapa de projeto do próximo mês.`,
      atividade: `Troque de lugar com um colega e jogue o jogo dele! Brinque por uns minutos e depois preencha a fichinha: escreva ou desenhe a coisa que você MAIS gostou no jogo do amigo. Quando voltar para o seu lugar, leia o elogio que um colega deixou para você. No final, todo mundo bate palma para todo mundo!`,
      gabarito: `A criança acerta o desafio quando consegue jogar o jogo de um colega (prova de que o jogo do colega foi salvo e está jogável), preenche a fichinha com pelo menos um elogio sincero seguindo a regra de só falar coisa boa, e participa das palmas finais. O sucesso da turma é todos terem um jogo salvo, jogável por outra pessoa, e terem trocado feedback positivo.`,
    },
  ],
};
