import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Apresentando a minha IA",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança faz os testes finais do seu modelo de IA, prepara uma demonstração curta e apresenta para a turma explicando o que a IA aprendeu, a confiança dela e onde ainda erra.`,
  descricao: `Esta é a última aula do mês e o grande dia de cada aluno: depois de quatro semanas treinando uma inteligência artificial no ML for Kids, chegou a hora de mostrar a IA própria funcionando para os colegas. É um dia de orgulho, não de aprender muita coisa nova. O foco é testar bem o modelo, preparar uma fala curtinha e celebrar tudo o que cada criança ensinou para o computador.

Ao longo do mês, os alunos descobriram o que é uma IA que aprende, treinaram o primeiro modelo juntando exemplos em grupos (os famosos "buckets" ou "rótulos"), viram como a IA mostra a confiança dela em porcentagem, caçaram erros de treino e construíram um modelo final só deles. Agora tudo isso vira uma demonstração de verdade: a criança digita ou mostra algo novo, a IA responde com um rótulo e uma confiança, e o aluno explica por que a máquina respondeu daquele jeito.

Nesta aula o professor conduz uma rodada final de testes (testar exemplos novos, ver a confiança, anotar onde a IA erra) e depois organiza uma roda de apresentações em que cada criança senta na cadeira do criador, conta em poucas palavras o que a IA dela aprendeu e faz a máquina responder ao vivo. O objetivo emocional é tão grande quanto o técnico: as crianças precisam sentir que terminaram algo de verdade e que são capazes de ensinar uma inteligência artificial.

Por ser uma aula de fechamento, o ritmo é leve e acolhedor. Erros viram parte da apresentação ("olha onde a minha IA ainda se confunde!"), e cada demonstração termina com palmas. No final, o professor faz a ponte para o futuro: essa mesma ideia de uma IA que reconhece coisas pode virar parte de um jogo, preparando o caminho para a trilha CREATE.`,
  materiais: [
    `Computadores com o ML for Kids já aberto no navegador e o projeto (modelo final) de cada aluno carregado e treinado.`,
    `Projetor ou TV grande conectada ao computador do professor, para a roda de apresentações.`,
    `Um projeto de exemplo já treinado e funcionando (por exemplo, uma IA que reconhece se um texto é "elogio" ou "reclamação"), para o professor demonstrar como fica uma IA pronta.`,
    `Lista de checagem impressa e ilustrada (a IA está treinada, ela responde a exemplos novos, ela mostra a confiança, eu sei onde ela erra) para cada aluno marcar.`,
    `Folhas e lápis de cor para a atividade do cartaz da IA e para anotar os exemplos de teste.`,
    `Crachás de "Treinador de IA" e adesivos de "Modelo Pronto" para premiar cada criança ao apresentar.`,
    `Cartões com exemplos novos de teste (frases, palavras ou imagens, conforme o tema de cada modelo) preparados pelo professor para a demonstração.`,
  ],
  conceitosChave: [
    `Modelo treinado — a IA que já aprendeu com os exemplos que a criança deu; é o cérebro pronto que sabe responder.`,
    `Testar — mostrar exemplos novos, que a IA nunca viu antes, para descobrir se ela aprendeu de verdade.`,
    `Confiança — o número em porcentagem que a IA mostra para dizer o quanto ela tem certeza da resposta; perto de 100% é bem confiante.`,
    `Rótulo — o nome do grupo que a IA escolhe para a resposta, como "gato", "cachorro", "elogio" ou "reclamação".`,
    `Erro da IA — quando a máquina escolhe o rótulo errado; faz parte e ajuda a gente a entender o que ela ainda não aprendeu.`,
    `Demonstração — o momento de mostrar a IA funcionando ao vivo, digitando ou mostrando algo e vendo a resposta.`,
    `Ponte para o jogo — a ideia de que uma IA que reconhece coisas pode virar uma peça de um jogo no futuro.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula encerra um projeto de quatro semanas e é, tecnicamente, a mais leve do mês: quase nada novo é criado. O trabalho é testar o modelo, observar a confiança, anotar onde ele erra e apresentar. No ML for Kids, tudo gira em torno do botão azul "Learn & Test" (Aprender e Testar). Cada aluno entra no projeto dele, clica em "Learn & Test" e encontra uma caixa onde escreve um exemplo novo (ou envia uma imagem, se o modelo for de imagens) e aperta o botão "Test" (Testar). A IA então mostra o rótulo escolhido e a confiança em porcentagem.

Antes da aula, abra você mesmo o projeto de cada criança pela página inicial do ML for Kids (botão "Projects", no topo) e confira se o modelo está treinado. Se aparecer a mensagem "model is ready to use" depois de clicar em "Train new machine learning model", está pronto. Se aparecer "you do not have enough examples", o modelo ainda precisa de mais exemplos em cada rótulo (o ideal é pelo menos cinco a dez por grupo). Resolva isso antes, para nenhuma criança ficar travada na hora de apresentar.

Lembre que o objetivo central hoje é emocional: cada aluno precisa terminar a aula sentindo orgulho de ter ensinado uma IA. Erros não são vergonha; são parte da história que a criança conta.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): reúna a turma perto do projetor. Abra o seu projeto de exemplo, clique em "Learn & Test" e teste uma frase na frente deles. Diga: "Hoje é o dia de mostrar a IA de vocês funcionando para os amigos!" Relembre rapidinho o que cada um treinou e o que significa a confiança em porcentagem.

Conteúdo novo guiado (15 min): no seu computador projetado, ensine a rotina do teste. Clique no botão azul "Learn & Test", depois em "Test with a new example" (ou na caixa de texto), digite um exemplo novo e clique em "Test". Mostre o rótulo e a confiança que aparecem. Teste de propósito algo difícil para a IA errar e diga: "Viram? Aqui ela ainda se confunde. Isso é normal!" Apresente a lista de checagem.

Mão na massa (25 min): cada aluno vai ao seu computador com o projeto aberto. Eles clicam em "Learn & Test", testam três exemplos novos (use os cartões), anotam a confiança de cada um e marcam na lista um exemplo em que a IA acerta e um em que ela erra. Circule pela sala. Se um modelo não responder bem, ajude a criança a clicar em "Train new machine learning model" para treinar de novo e teste outra vez.

Desafio + compartilhar (10 min): comece a roda de apresentações. Um por vez, conecte o projeto da criança ao projetor. O treinador diz uma frase sobre o que a IA aprendeu, testa um exemplo ao vivo, mostra a confiança e conta onde ela ainda erra. Todos batem palmas e o criador ganha o crachá de "Treinador de IA". Feche dizendo que essa IA poderia reconhecer comandos dentro de um jogo no futuro.

## Como explicar para crianças

Use a analogia do aluno e do professor: "Durante o mês, vocês foram os professores e a IA foi a aluna. Hoje a aluna faz a prova final na frente da turma!" Testar é "fazer perguntas novas para ver se a IA aprendeu mesmo". A confiança é "o quanto a IA tem certeza, igual a você dizendo 'tenho quase certeza' ou 'acho que sim'". Um rótulo é "a gavetinha onde a IA guarda a resposta". E quando a IA erra, diga: "Olha, ela ainda se confunde aqui, igual a gente quando está aprendendo coisa nova." Termine sempre dizendo que ensinar uma máquina é coisa de gente grande e que eles conseguiram.

## Erros comuns e como ajudar

As crianças costumam querer adicionar exemplos novos no último dia e bagunçar o modelo. Acolha, mas redirecione: "Hoje a gente mostra a IA pronta; treinar mais a gente guarda para o próximo projeto." Outro erro é testar só exemplos iguais aos do treino, e então a IA acerta sempre e a criança não vê os erros; ofereça cartões com exemplos bem diferentes. Algumas confundem confiança alta com "estar certo": explique que a IA pode estar bem confiante e mesmo assim errar. Se um modelo não estiver treinado, clique junto em "Train new machine learning model" e espere a mensagem de pronto. E para as tímidas, ofereça apresentar junto, segurando a fala por elas. Termine cada apresentação com palmas, sem comparar as IAs entre si.`,
  exercicios: [
    {
      titulo: `Acordando a Minha IA com o Botão Aprender e Testar`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor onde fica o botão azul "Learn & Test" dentro do projeto. Diga que é a sala de provas da IA. Peça que cada criança entre no seu projeto pelo botão "Projects", abra o modelo e clique em "Learn & Test".`,
      atividade: `Cada aluno abre o seu projeto no ML for Kids, clica no botão azul "Learn & Test", digita um exemplo simples na caixa de texto (ou envia uma imagem) e aperta "Test" para ver a IA responder.`,
      gabarito: `A IA mostra um rótulo e uma confiança em porcentagem na tela. Se a resposta aparece depois que a criança clica em "Test", o aluno encontrou e usou a tela certa.`,
    },
    {
      titulo: `Lista de Checagem da Minha IA`,
      tipo: `teste + checklist`,
      tempo: `12 min`,
      guiaProfessor: `Entregue a lista ilustrada (a IA está treinada, ela responde a exemplos novos, ela mostra a confiança, eu sei onde ela erra). Explique que eles vão testar exemplos dos cartões e marcar um certinho em cada item que funcionar. Circule e ajude a treinar de novo quem precisar.`,
      atividade: `O aluno testa três exemplos novos dos cartões, confere se a IA responde e mostra a confiança, e marca na lista cada item que funcionou. O que não funcionar, ele chama o professor.`,
      gabarito: `Ao final, os quatro itens da lista estão marcados e a IA responde aos exemplos novos mostrando a confiança. Se algum item não foi marcado, o professor ajudou a treinar de novo e o aluno remarcou.`,
    },
    {
      titulo: `Caçada ao Erro da IA`,
      tipo: `desafio na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Explique que toda IA ainda erra em alguma coisa e que isso é normal. Mostre no seu exemplo um caso em que a IA escolhe o rótulo errado. Peça que cada criança procure um exemplo difícil que faça a IA dela se confundir e anote qual foi.`,
      atividade: `Cada criança testa exemplos cada vez mais difíceis até achar um em que a IA escolhe o rótulo errado, e anota numa folha o exemplo e o rótulo errado que apareceu.`,
      gabarito: `O aluno encontra e anota pelo menos um exemplo em que a IA erra o rótulo. Reconhecer onde a IA ainda se confunde, mesmo com confiança, conta como acerto.`,
    },
    {
      titulo: `O Cartaz da Minha IA`,
      tipo: `desenho / papel`,
      tempo: `10 min`,
      guiaProfessor: `Distribua folhas e lápis de cor. Peça que cada criança desenhe um cartaz da sua IA: o nome dela, os rótulos que ela conhece e um desenho do que ela faz. Diga que é o pôster para apresentar a IA na roda.`,
      atividade: `O aluno desenha num cartaz o nome da IA, os rótulos que ela aprendeu (por exemplo "gato" e "cachorro") e uma carinha mostrando se a IA está confiante, e escreve o nome bem grande.`,
      gabarito: `O cartaz mostra pelo menos o nome da IA e os rótulos que ela conhece, combinando com o modelo de verdade. Se o desenho representa os grupos reais que a criança treinou, está certo.`,
    },
    {
      titulo: `Roda da IA: Eu Sou Treinador!`,
      tipo: `roda de conversa / apresentação`,
      tempo: `12 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, conecte o projeto da criança. Ajude-a a dizer uma frase ("Minha IA aprendeu a reconhecer..."), testar um exemplo ao vivo, mostrar a confiança e contar onde ela erra. Encerre cada fala lembrando que essa IA poderia virar parte de um jogo.`,
      atividade: `Cada aluno apresenta a sua IA dizendo o que ela aprendeu, testa um exemplo ao vivo mostrando o rótulo e a confiança, e conta um lugar onde ela ainda se confunde, enquanto a turma assiste e torce.`,
      gabarito: `O aluno consegue dizer o que a IA aprendeu, fazê-la responder ao vivo com rótulo e confiança, e apontar onde ela erra. Toda criança apresentar e receber o crachá de "Treinador de IA" significa que a roda deu certo.`,
    },
  ],
};
