import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Testar, ajustar e mostrar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança testa a própria mecânica feita em Lua, corrige os erros do código com apoio do professor e a deixa funcionando no jogo, encerrando a apresentação aos colegas.`,
  descricao: `Esta é a aula de fechamento do mês e o grande momento do entregável: durante quatro semanas a turma aprendeu eventos, condições, pontos, regras e funções em Lua, e na aula passada cada criança montou a sua própria mecânica. Agora chegou a hora mais importante de quem programa: testar de verdade, descobrir o que ainda não funciona e arrumar. Programar não é acertar de primeira; é tentar, ver o que deu errado e ajustar até ficar bom.

Testar significa apertar o botão "Play" no Roblox Studio e brincar com a própria mecânica como se fosse um jogador. A criança observa: o evento dispara na hora certa? A condição se isso, então aquilo está acontecendo? A função é chamada quando deveria? Os pontos sobem como o esperado? Quando algo não funciona, abre-se a janela "Output" (Saída), onde o Roblox escreve mensagens vermelhas avisando em qual linha está o problema. Ler essa mensagem é como ler uma pista de detetive: ela diz onde procurar.

O professor conduz esta aula como um treinador de oficina mecânica: ninguém conserta o carro do aluno por ele, mas mostra onde está o barulho estranho e empresta a chave de fenda. Os erros mais comuns nesta idade são pequenos e previsíveis: esquecer um "end" no fim de um bloco, escrever o nome de um objeto de um jeito diferente do real, ou trocar o sinal de igualdade. Saber reconhecer esses três erros já resolve quase tudo.

No final, cada criança mostra a mecânica funcionando para a turma, em trinta segundos, explicando o que ela faz. Isso fecha a etapa 2 de 4 do projeto do ano e dá à criança a sensação concreta de ter criado algo com as próprias mãos, em código de texto de verdade. É uma aula de orgulho e de aprender que errar e corrigir faz parte de ser um programador.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um para cada criança, com o jogo e a mecânica da aula 7 já carregados`,
    `Projetor ou TV grande ligada para o professor mostrar o código e a janela "Output" na tela grande`,
    `Exemplo pronto pelo professor: uma mecânica simples que funciona e uma cópia dela com um erro proposital (um "end" faltando) para demonstrar o conserto`,
    `Cartaz ou slide com a "Lista dos 3 erros campeões": end faltando, nome escrito diferente e sinal de igual trocado`,
    `Folha de "Ficha de Teste" para cada criança marcar o que funcionou e o que precisa arrumar`,
    `Cronômetro ou ampulheta visível para organizar o tempo de cada apresentação`,
    `Adesivos ou carimbos de "Programador Caça-Bugs" para premiar quem consertar o próprio erro`,
  ],
  conceitosChave: [
    `Testar — é apertar "Play" e brincar com a sua mecânica para ver se ela faz o que você queria.`,
    `Bug — é um errinho no código que faz a mecânica não funcionar como deveria; achar e arrumar o bug se chama depurar.`,
    `Output (Saída) — é a janelinha do Roblox onde aparecem mensagens vermelhas avisando que tem um erro e em qual linha ele está.`,
    `End — é a palavrinha que fecha um bloco de código; todo "if" e toda "function" precisam de um "end" para fechar, como uma porta.`,
    `Ajustar — é mexer no código para corrigir o erro e deixar a mecânica funcionando direitinho.`,
    `Linha do erro — é o número que o Output mostra para você saber exatamente onde procurar o problema no código.`,
    `Entregável — é o trabalho final do mês; aqui é a sua mecânica testada e funcionando dentro do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser um programador experiente para conduzir esta aula. O foco não é escrever código novo, e sim testar e consertar o que já existe. Três ferramentas resolvem quase tudo. Primeira: o botão "Play" (um triângulo azul, no topo, na aba "Home" ou "Test") liga o teste; o quadrado vermelho "Stop" o desliga. Segunda: a janela "Output" (Saída) mostra os erros. Para abri-la, vá na aba "View" (Visualizar) e clique em "Output"; uma faixa aparece embaixo da tela. Quando há erro, surge uma linha vermelha, por exemplo: Script de teste, linha 4. Terceira: o painel "Explorer" mostra onde os scripts estão guardados, para a criança achar o seu código de novo.

Antes da aula, decore os três erros campeões. Um: faltou um "end". Em Lua, todo bloco "if" e toda "function" precisam fechar com a palavra "end". Se faltar, o Output reclama de "end expected". A solução é digitar "end" no fim do bloco. Dois: nome escrito diferente. Se a peça se chama Botao mas o código diz botao, o Roblox não acha. A solução é comparar letra por letra, respeitando maiúsculas. Três: sinal de igual trocado. Para comparar se dois valores são iguais, Lua usa dois sinais juntos, ou seja, igual igual. Um sinal só serve para guardar valor, não para comparar. Faça você mesmo cada conserto uma vez no computador da escola antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Reúna a turma e relembre as quatro semanas: evento, condição, pontos, função. Pergunte em voz alta o que cada mecânica deles faz. Diga a frase do dia: "Bom programador não acerta de primeira, ele testa e arruma". Mostre o cartaz dos três erros campeões.

Conteúdo novo guiado (15 min): No projetor, abra a sua cópia com o erro proposital. Clique em "Play": nada acontece. Diga "vamos virar detetives". Abra o "Output" pela aba "View". Mostre a linha vermelha e leia o número da linha. Vá até essa linha no script, mostre que falta o "end", digite o "end", clique em "Play" de novo e comemore quando funcionar. Repita rápido mostrando um nome escrito diferente. Ensine o ciclo: Play, ler o Output, achar a linha, arrumar, Play de novo.

Mão na massa (25 min): Cada criança abre o seu jogo, aperta "Play" e testa a própria mecânica, anotando na Ficha de Teste o que funcionou e o que não. Depois abre o "Output", lê o erro e tenta consertar, sempre com você por perto. Circule pela sala. Não conserte por elas: aponte a linha do Output e pergunte "o que será que falta aqui?". Quem deixar a mecânica funcionando ganha o carimbo de "Programador Caça-Bugs".

Desafio e compartilhar (10 min): Cada criança mostra a mecânica funcionando no projetor por trinta segundos e diz em uma frase o que ela faz. A turma bate palma. Encerre lembrando que isso fecha a etapa 2 de 4 do projeto do ano.

## Como explicar para crianças

Use a ideia do detetive: o erro é um mistério, e o "Output" é a lupa que mostra a pista, ou seja, o número da linha. Diga que procurar e arrumar erro é "caçar bug", e bug é um bichinho que entrou no código. Compare o "end" com a tampa de uma caixa: se você abre a caixa do "if" e esquece de fechar com "end", o computador fica confuso. Para o nome escrito diferente, diga que o Roblox é como um carteiro muito exigente: se o endereço tiver uma letra trocada, a carta não chega. Reforce sempre que errar faz parte e que o legal é a alegria de consertar.

## Erros comuns e como ajudar

O erro mais comum é a criança desanimar ao ver a mensagem vermelha; explique que vermelho não é bronca, é uma dica de onde procurar. Muitas esquecem o "end"; mostre a contar quantos "if" e "function" abriram e quantos "end" fecharam, pois os números têm que bater. Outra confusão é o nome do objeto com letra trocada ou maiúscula errada; compare letra por letra junto da criança. Algumas apertam "Play" e esquecem o "Stop", e depois não conseguem editar o código; lembre sempre de parar antes de mexer. Há quem feche a janela "Output" sem querer e ache que sumiu; reabra pela aba "View". Por fim, alguém pode mexer demais e bagunçar o que funcionava; oriente a arrumar um erro de cada vez, testando após cada mudança.`,
  exercicios: [
    {
      titulo: `Caça aos três erros campeões`,
      tipo: `Quiz rápido oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas para a turma toda responder em coro, usando o cartaz como apoio. É um aquecimento para fixar quais são os erros que eles mais vão encontrar. Comemore cada acerto e relembre que esses três resolvem quase tudo.`,
      atividade: `Responda rápido: 1) Qual palavrinha fecha um bloco de "if" ou de "function" em Lua? 2) Se a peça se chama Botao e o código diz botao com b minúsculo, o Roblox acha a peça? 3) Para comparar se dois valores são iguais, usamos um sinal de igual ou dois?`,
      gabarito: `1) A palavra "end". 2) Não, porque o nome precisa ser escrito igualzinho, respeitando as letras maiúsculas e minúsculas. 3) Dois sinais de igual juntos (igual igual); um sinal só serve para guardar valor, não para comparar.`,
    },
    {
      titulo: `Abrindo a janela de pistas`,
      tipo: `Prática guiada no Roblox Studio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o "Output". O objetivo é que cada criança consiga abrir essa janela sozinha, porque é nela que os erros aparecem. Acompanhe quem não achar e confirme que a faixa apareceu embaixo da tela.`,
      atividade: `No seu Roblox Studio, clique na aba "View" (Visualizar) lá em cima e depois no botão "Output". Veja a janelinha aparecer embaixo da tela. Aperte "Play" e observe se aparece alguma mensagem; depois aperte "Stop".`,
      gabarito: `A criança clica em "View", depois em "Output", e a janela aparece na parte de baixo da tela. Acerto = conseguir abrir o "Output" e saber que é ali que os erros vermelhos aparecem. Se a janela já estiver aberta, basta apontá-la e reconhecer para que serve.`,
    },
    {
      titulo: `Testando a minha mecânica`,
      tipo: `Prática individual com ficha`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a Ficha de Teste. Cada criança abre o seu jogo, aperta "Play" e brinca com a própria mecânica observando se ela faz o que deveria. O foco é observar com calma e anotar, ainda sem consertar. Circule conferindo as anotações.`,
      atividade: `Aperte "Play" e teste a sua mecânica como se fosse um jogador. Na Ficha de Teste, marque um certo no que funcionou e um sinal de atenção no que não funcionou. Escreva ou desenhe o que você esperava que acontecesse. Depois aperte "Stop".`,
      gabarito: `A criança testa a mecânica e preenche a ficha com pelo menos um item observado. Acerto = identificar com clareza o que funciona e o que precisa de ajuste, mesmo que a mecânica ainda tenha erro. Se tudo já funcionar, ela marca todos os certos e descreve o que a mecânica faz.`,
    },
    {
      titulo: `Consertando o "end" que fugiu`,
      tipo: `Depuração passo a passo`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o coração da aula. Trabalhe o erro mais comum: o "end" faltando. Mostre no projetor um código sem o "end", leia a mensagem do Output ("end expected") e o número da linha. Depois cada criança procura no seu código se algum "if" ou "function" ficou sem fechar. Aponte a linha do Output, mas deixe a criança digitar o "end".`,
      atividade: `Olhe o seu código e conte quantos "if" e "function" você abriu e quantos "end" você escreveu. Os números têm que bater. Se faltar um "end", digite a palavra "end" no fim do bloco, aperte "Play" e veja se a mensagem vermelha sumiu.`,
      gabarito: `A criança encontra o bloco sem fechamento e digita "end" no lugar certo. Acerto = a mensagem de "end expected" desaparecer do Output e a mecânica voltar a rodar ao apertar "Play". Exemplo: um bloco que começa com "if pontos == 10 then" e termina com a ação precisa de um "end" logo abaixo. Se o erro for outro (nome trocado ou um sinal de igual só), o conserto correspondente também vale.`,
    },
    {
      titulo: `Mostrar a mecânica pronta`,
      tipo: `Apresentação para a turma`,
      tempo: `15 minutos`,
      guiaProfessor: `Feche a aula com celebração. Cada criança mostra a mecânica funcionando no projetor por trinta segundos e diz em uma frase o que ela faz. Garanta que a mecânica esteja salva e rodando. Valorize cada trabalho, pois é o entregável do mês e fecha a etapa 2 de 4 do projeto. Entregue o carimbo de "Programador Caça-Bugs" a quem consertou o próprio erro.`,
      atividade: `Aperte "Play" e mostre a sua mecânica funcionando para a turma. Conte em uma frase o que ela faz, por exemplo: "quando o jogador toca o botão, ele ganha dez pontos". A turma bate palma e você ganha o carimbo de Programador Caça-Bugs.`,
      gabarito: `A apresentação está completa quando a criança mostra a mecânica rodando no "Play" e explica em uma frase o que ela faz. Acerto = a mecânica funcionar ao vivo (evento dispara, condição funciona ou pontos mudam) e a criança descrever o que criou. Toda mecânica que roda, mesmo simples, fecha o entregável do mês com sucesso.`,
    },
  ],
};
