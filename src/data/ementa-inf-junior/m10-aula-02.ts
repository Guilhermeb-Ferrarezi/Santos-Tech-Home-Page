import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: `Como a IA Aprende?`,
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `A criança entende que a Inteligência Artificial aprende vendo muitos exemplos, "ensina" a IA com cartões de figuras e faz a primeira conversa falada simples com o Gemini.`,
  descricao: `Esta é a segunda aula do mês da Inteligência Artificial. Na aula anterior a turma descobriu que existe um robô que pensa e que a IA é uma ajudante esperta dentro do computador. Hoje a gente dá um passo importante: descobrir COMO essa ajudante ficou tão esperta. A resposta é simples e encantadora para as crianças: a IA aprende vendo muitos e muitos exemplos, igualzinho a um bebê que vê vários cachorros até saber dizer "au-au".

A ideia central do dia é a repetição. Pense numa criança bem pequena: ela vê um gato na rua, outro gato na televisão, o gato da vizinha, o gato do desenho. Depois de ver tantos gatos diferentes, o cérebro dela guarda o "jeitão" de gato: orelhas pontudas, bigode, rabo. A partir daí ela reconhece um gato que nunca viu antes. A IA faz a mesma coisa, só que vê milhares de figuras de gatos de uma vez. Quanto mais exemplos ela vê, melhor ela acerta. Essa é a grande sacada que a turma vai levar para casa hoje.

Na parte prática, as crianças viram professoras da IA. Com cartões de figuras (vários gatos, vários cachorros, várias maçãs), elas vão "alimentar" uma IA de mentirinha, mostrando exemplo atrás de exemplo, para sentir na pele que ensinar é repetir. Em seguida, pela primeira vez, a turma conversa de verdade com o Gemini: o professor abre o Gemini no computador, aperta o microfone e a turma faz perguntas faladas bem simples, como "Gemini, o que é um gato?". Ver a IA responder na hora gera muita alegria e fecha a ideia de que ela aprendeu observando muitos exemplos.

O grande objetivo do dia não é virar especialista, e sim plantar duas sementes: a IA aprende por exemplos (não por mágica) e dá para conversar com ela falando. Essas duas descobertas preparam o terreno para as próximas aulas, quando a turma vai escrever palavras mágicas para a IA criar figuras. Hoje a meta é entender o "como aprende" e ouvir a IA responder pela primeira vez.`,
  materiais: [
    `Um computador por aluno (ou em duplas) com o Gemini já aberto no navegador (site gemini.google.com), logado na conta da escola e na tela de conversa, pronto para usar.`,
    `Computador do professor ligado a um projetor ou televisão grande, com o Gemini aberto, para demonstrar cada clique e a primeira conversa falada para a turma toda.`,
    `Microfone funcionando (o do computador ou um headset), testado antes da aula, já que a conversa de hoje é falada.`,
    `Conjunto de cartões impressos e plastificados com figuras repetidas: vários gatos diferentes, vários cachorros, várias maçãs e algumas figuras "pegadinha" (um tigre, um lobo) para o jogo.`,
    `Uma conversa de exemplo já pronta no Gemini (uma pergunta simples e a resposta), salva ou aberta numa aba, para mostrar como fica o resultado caso a internet falhe.`,
    `Folhas de papel e lápis de cor para a atividade de desenho dos exemplos.`,
    `Um cronômetro ou relógio visível para controlar o ritmo das quatro etapas da aula.`,
  ],
  conceitosChave: [
    `Inteligência Artificial (IA) — uma ajudante muito esperta que mora dentro do computador e aprende a fazer coisas, como reconhecer figuras e responder perguntas.`,
    `Aprender por exemplos — o jeito que a IA fica esperta: ela vê muitas e muitas figuras parecidas até saber reconhecer sozinha.`,
    `Exemplo — cada figura ou cada coisa que a gente mostra para a IA aprender (um gato é um exemplo; outro gato é mais um exemplo).`,
    `Treinar a IA — mostrar muitos exemplos para a IA, como quando a gente treina para ficar bom numa brincadeira.`,
    `Gemini — a IA da aula, um programa no computador com quem a gente pode conversar escrevendo ou falando.`,
    `Microfone — o aparelho que escuta a nossa voz; a gente aperta o botão de microfone para falar com o Gemini.`,
    `Reconhecer — quando a IA olha uma figura nova e consegue dizer o que é, porque já viu muitos exemplos parecidos antes.`,
  ],
  treinamento: `## O que o professor precisa saber

A grande ideia desta aula cabe numa frase: a IA aprende vendo muitos exemplos. Ela não nasce sabendo nem adivinha por mágica. Programadores mostram milhares de figuras já com o nome certo (isto é gato, isto é cachorro) e a IA vai guardando os padrões. Depois de ver exemplos demais, ela reconhece coisas novas. Esse processo de mostrar muitos exemplos chama-se treinar. É a mesma ideia de uma criança que vê vários gatos até reconhecer qualquer gato.

A ferramenta de hoje é o Gemini, a IA do Google. Abra no navegador pelo site gemini.google.com, já logado na conta da escola. A tela mostra uma caixa de escrever embaixo, escrito "Pergunte ao Gemini" ou "Insira um comando aqui". Do lado dessa caixa há um ícone de microfone (um desenho de microfonezinho). Ao clicar no microfone, o navegador pode pedir permissão para usar o microfone: clique em Permitir. Depois é só falar; o Gemini escuta, escreve o que ouviu e responde. Importante: o professor conduz; as crianças apenas falam a pergunta combinada. Teste o microfone antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10, dizendo onde clicar no Gemini)

1. Aquecimento e revisão (10 min). Junte a turma em roda. Relembre a aula passada: "O que é a IA? É uma ajudante esperta no computador." Faça a pergunta do dia: "Mas como ela ficou tão esperta?" Mostre dois cartões de gato e pergunte: "Como vocês sabem que isto é um gato?" Deixe a turma responder. Conduza para a ideia: "A gente já viu MUITOS gatos na vida!"

2. Conteúdo novo guiado (15 min). Explique que a IA aprende igual: vendo muitos exemplos. No computador do professor, abra o Gemini em gemini.google.com (já estará aberto). Aponte a caixa de escrever embaixo e o ícone de microfone ao lado. Clique no microfone, clique em Permitir se aparecer o aviso, e fale devagar: "Gemini, o que é um gato?" Espere a resposta aparecer na tela e leia em voz alta para a turma. Diga: "Ele só sabe responder porque viu muitos gatos antes!"

3. Mão na massa (25 min). Primeira parte com os cartões: divida a turma em grupos e diga que eles são os professores de uma IA de mentirinha. Eles mostram cartão por cartão de gato, dizendo "isto é gato", repetindo muitas vezes; é o "treino". Segunda parte no computador: leve as crianças aos computadores com o Gemini aberto. Guie todos a clicar no microfone e falar, um de cada vez, uma pergunta simples combinada, como "Gemini, o que é um cachorro?". Espere o Gemini responder e celebre.

4. Desafio e compartilhar (10 min). Proponha o desafio: cada criança inventa uma pergunta nova e curtinha para o Gemini, do tipo "o que come a girafa?". Quem quiser fala no microfone. Depois reúna a roda e pergunte: "Como a IA aprendeu a responder?" A resposta certa, repetida em coro: "Vendo muitos exemplos!"

## Como explicar para crianças de 5 a 9 anos

Use a comparação do bebê e do gato o tempo todo. Diga: "Quando vocês eram bebês, viram um gato, depois outro, depois mais um. Hoje vocês reconhecem qualquer gato! A IA faz igual, mas vê montes de gatos de uma vez." Use as mãos: empilhe cartões dizendo "mais um exemplo, mais um, mais um" para mostrar que repetição é o segredo. Para a parte do Gemini, fale frases curtas: "Aperto o microfonezinho, falo a pergunta, e ele responde." Deixe a criança ouvir a IA falar; a surpresa segura a atenção.

## Erros comuns e como ajudar

- Achar que a IA "sabe de tudo" sozinha por mágica. Volte aos cartões: "Ela só sabe porque viu muitos exemplos antes, ninguém nasce sabendo."

- Falar todos ao mesmo tempo no microfone. Combine a regra "um fala, todos escutam" e use a vez de cada um; o microfone só ouve uma voz por vez.

- O microfone não pegar a voz. Verifique se clicou em Permitir, se o microfone está ligado e peça para a criança falar pertinho e devagar.

- Frustração quando o Gemini demora ou erra a resposta. Diga com calma: "Ele está pensando" e lembre que a IA também pode errar, igual a gente quando está aprendendo.`,
  exercicios: [
    {
      titulo: `Como você sabe que é um gato?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Comece na roda com os cartões de gato na mão. Mostre um gato e pergunte: "O que é isto?" Mostre outro gato diferente e pergunte de novo. Conduza a turma a perceber que eles sabem porque já viram muitos gatos na vida. Para quem ainda não fala muito, peça que aponte as partes do gato (orelha, rabo, bigode). Termine introduzindo a frase do dia: "A IA aprende do mesmo jeito, vendo muitos exemplos."`,
      atividade: `Olhe os gatos que o professor mostrar. Eles são todos iguais? Não! Mas você sabe que todos são gatos. Como você sabe? Porque já viu MUITOS gatos! Fale com a turma: como é um gato? Tem orelha, tem rabo, tem bigode!`,
      gabarito: `A criança acerta se entender que reconhece um gato porque já viu muitos gatos antes, não por mágica. Sinal de sucesso: dizer ou apontar que viu vários gatos na vida e citar uma parte do gato (orelha, rabo, bigode). Não é preciso explicar perfeito, basta ligar "saber" a "já ter visto muitos".`,
    },
    {
      titulo: `Eu sou professor da IA`,
      tipo: `Jogo com cartões`,
      tempo: `10 min`,
      guiaProfessor: `Divida a turma em grupos e diga que eles vão "treinar" uma IA de mentirinha. Cada grupo recebe cartões repetidos de um animal ou fruta. Eles mostram cartão por cartão dizendo em voz alta o nome, repetindo muitas vezes, como se ensinassem um robô. Depois embaralhe e mostre um cartão "pegadinha" (um tigre no meio dos gatos) e pergunte se a IA aprendeu direito. Reforce que treinar é repetir muitos exemplos.`,
      atividade: `Hora de ser professor da IA! Pegue os cartões e mostre um por um, falando alto: "isto é gato, isto é gato, isto é gato". Repita bastante, como se estivesse ensinando um robô. Quantos exemplos você consegue mostrar? Quanto mais, mais esperta a IA fica!`,
      gabarito: `A criança acerta se repetir vários exemplos do mesmo tipo dizendo o nome certo, mostrando que entendeu que ensinar a IA é repetir muitos exemplos. Sinal de sucesso: mostrar mais de três cartões falando o nome e perceber, na pegadinha, que um exemplo diferente (tigre) não é gato. O número exato não importa, importa a ideia de repetição.`,
    },
    {
      titulo: `Minha primeira conversa com o Gemini`,
      tipo: `Prática no computador`,
      tempo: `12 min`,
      guiaProfessor: `Este é o coração da aula. No projetor, mostre o caminho: o Gemini já aberto em gemini.google.com, a caixa de escrever embaixo e o ícone de microfone ao lado. Clique no microfone, clique em Permitir se aparecer o aviso e fale devagar uma pergunta simples. Leia a resposta em voz alta. Depois leve a turma aos computadores e guie cada criança, uma de cada vez, a clicar no microfone e falar a pergunta combinada. Combine a regra "um fala, todos escutam".`,
      atividade: `Vamos conversar com o Gemini! Siga o professor: 1. Ache o microfonezinho perto da caixa de escrever. 2. Clique nele. 3. Fale bem devagar e pertinho: "Gemini, o que é um cachorro?". 4. Espere e escute a resposta. A IA respondeu para você? Você falou com uma Inteligência Artificial!`,
      gabarito: `A criança acerta se clicar no microfone e falar uma pergunta simples que o Gemini escute e responda. Sinal de sucesso: a fala da criança aparece escrita na tela e o Gemini devolve uma resposta. Aceitar pequenas trocas de palavra e ajuda do professor para apertar o microfone. O importante é a criança falar e ouvir a IA responder.`,
    },
    {
      titulo: `O caderno de exemplos da IA`,
      tipo: `Desenho`,
      tempo: `10 min`,
      guiaProfessor: `Entregue uma folha e lápis de cor. Peça que cada criança escolha uma coisa (gato, cachorro, maçã) e desenhe três exemplos diferentes dela, como se fossem os exemplos que a IA precisa ver para aprender. Para os menores, basta desenhar e contar quantos fez. Enquanto desenham, pergunte de mesa em mesa: "Quantos exemplos a IA precisa ver para aprender?", reforçando que é MUITOS, não só um.`,
      atividade: `Faça o caderno de exemplos da IA! Escolha uma coisa: gato, cachorro ou maçã. Agora desenhe ela três vezes, cada uma um pouquinho diferente. Esses são os exemplos que a IA olha para aprender! Quanto mais exemplos, mais esperta ela fica.`,
      gabarito: `A criança acerta se desenhar mais de um exemplo da mesma coisa e entender que a IA aprende vendo vários exemplos. Sinal de sucesso: pelo menos dois ou três desenhos do mesmo tipo (vários gatos, várias maçãs) e a criança dizer que são "exemplos para a IA aprender". Não há desenho certo ou errado, o foco é a ideia de muitos exemplos.`,
    },
    {
      titulo: `Desafio: minha pergunta nova para a IA`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Proponha o desafio depois que todos já fizeram a primeira conversa. Peça que cada criança invente uma pergunta nova e curtinha para o Gemini, diferente da que já usaram, como "o que come a girafa?" ou "de que cor é o céu?". Quem quiser clica no microfone e fala; ajude com o botão. Acompanhe a regra de um por vez. Ao final, conduza a roda de compartilhamento e pergunte em coro como a IA aprendeu.`,
      atividade: `Desafio do dia! Pense numa pergunta novinha, que ninguém fez ainda, para o Gemini. Pode ser "o que come a girafa?" ou "de que cor é o céu?". Clique no microfone e fale a sua pergunta. Depois conte para a turma: o que o Gemini respondeu? E lembre: como ele aprendeu? Vendo muitos exemplos!`,
      gabarito: `A criança acerta se inventar uma pergunta nova e curtinha, diferente da primeira, falar no microfone e ouvir a resposta, além de responder que a IA aprendeu "vendo muitos exemplos". Sinal de sucesso: uma pergunta diferente da anterior, a resposta do Gemini na tela e a criança repetir a ideia central do dia. Aceitar ajuda do professor para clicar e formular a pergunta.`,
    },
  ],
};
