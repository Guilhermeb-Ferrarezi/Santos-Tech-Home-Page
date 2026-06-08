import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Showcase: meu jogo com IA",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança apresenta seu protótipo, mostra o que a IA treinada no ML for Kids reconhece e como o jogo reage, recebendo perguntas e elogios dos colegas para celebrar a etapa 2 de 2 do mês.`,
  descricao: `Esta é a última aula do mês e o grande dia de mostrar o trabalho: cada aluno vira o apresentador do seu próprio protótipo com Inteligência Artificial. Durante as quatro semanas, a turma aprendeu onde a IA mora dentro de um jogo, treinou um modelo no ML for Kids, ligou esse modelo ao projeto, montou a ponte com blocos, testou se a IA acertava, deixou a IA mais esperta e deu os últimos retoques. Hoje tudo isso vira uma apresentação de verdade, em que a criança mostra para que serve a sua IA e como o jogo responde quando ela reconhece algo.

O coração desta aula é a palavra mostrar. Não vamos treinar modelos novos nem mexer em blocos novos: o protótipo já está pronto desde a aula passada. O trabalho de hoje é abrir o projeto, fazer um teste rápido para garantir que a IA ainda reconhece direitinho, e então cada aluno conta em poucas frases o que ensinou para a sua Inteligência Artificial. Por exemplo: "Eu ensinei a minha IA a separar fala de elogio e fala de bronca, e quando ela ouve um elogio o personagem fica feliz." É o momento de a criança perceber que ela construiu algo que pensa e reage, e que isso é coisa de gente grande.

A turma toda participa como plateia carinhosa. Cada apresentação termina com palmas, um elogio sincero de um colega e uma pergunta curiosa do tipo "o que acontece se a IA errar?" ou "quantos exemplos você deu para ela?". Esse ritual de feedback positivo ensina as crianças a valorizar o trabalho dos outros e a falar sobre o próprio projeto com orgulho, sem medo de errar. O professor garante que ninguém fique de fora e que todo protótipo seja testado antes da mostra, para que nenhuma criança passe pela frustração de apresentar algo que não funciona.

Por ser uma aula de fechamento, fechamos celebrando a etapa 2 de 2 do mês e mostrando a ponte para o próximo nível da trilha. A IA foi a primeira grande ferramenta deste Ano 4; nas próximas semanas a turma vai criar itens 3D para a loja do Roblox, imprimir peças de verdade e programar com a linguagem Lua. O recado final é poderoso: hoje vocês treinaram uma Inteligência Artificial e ela funciona, e isso é só o começo do que vocês são capazes de criar.`,
  materiais: [
    `Computadores com o ML for Kids aberto e logado, e o projeto com IA de cada aluno carregado (Scratch ou a ferramenta de blocos usada no mês).`,
    `Projetor ou TV grande conectada ao computador do professor, para a mostra do showcase.`,
    `Um protótipo de exemplo já finalizado e funcionando (o do professor), para mostrar como fica uma apresentação completa.`,
    `Microfone ou webcam funcionando em cada máquina, caso a IA do projeto reconheça voz ou imagem (teste o som e a câmera antes da aula).`,
    `Cartões de feedback impressos e ilustrados, com um espaço para "um elogio" e um espaço para "uma pergunta".`,
    `Lista de checagem impressa (projeto abre, modelo conectado, IA reconhece, jogo reage) para cada aluno marcar antes de apresentar.`,
    `Crachás ou certificados de "Treinador de IA" e adesivos de celebração para premiar cada criança no fim.`,
  ],
  conceitosChave: [
    `Showcase — o momento de mostrar, em que cada criança apresenta o que construiu para a turma inteira.`,
    `Protótipo — a primeira versão de um jogo, ainda simples, feita para mostrar a ideia funcionando, igual a uma maquete.`,
    `Inteligência Artificial (IA) — um cérebro de computador que aprende com exemplos e depois tenta reconhecer coisas novas sozinho.`,
    `Reconhecer — quando a IA olha ou ouve algo e diz a qual grupo (rótulo) aquilo pertence, tipo "isso é um elogio".`,
    `Reagir — quando o jogo faz alguma coisa por causa da resposta da IA, como o personagem ficar feliz ou pular.`,
    `Feedback positivo — falar primeiro o que você gostou no trabalho do colega antes de fazer uma pergunta.`,
    `Treinador de IA — quem ensina a Inteligência Artificial dando exemplos; hoje cada aluno é um treinador de IA de verdade.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula encerra um mês inteiro de trabalho com Inteligência Artificial. Tecnicamente é a aula mais leve do mês: nada novo é criado. O protótipo de cada aluno já existe e já foi testado na Aula 7. Hoje você só precisa abrir o projeto, conferir que a IA ainda reconhece e conduzir as apresentações.

Relembre o caminho que a IA percorre no ML for Kids. O modelo de cada criança vive na página do site, na caixinha do projeto que abre na aba "Learn & Test" (Aprender e Testar). Lá ela vê o botão "Train new machine learning model" (treinar novo modelo) e, mais abaixo, a área de teste onde digita uma frase, fala no microfone ou mostra algo para a câmera, e a IA responde com o rótulo e a porcentagem de confiança. No projeto de blocos (na aba "Make", Criar), o modelo aparece como blocos próprios, tipo "recognise text [ ]" (reconhecer texto) que devolve o rótulo. Não é preciso re-treinar: se a criança não apagou o modelo, ele continua salvo na conta.

Antes da aula, abra e teste o projeto de cada aluno você mesmo. Faça um reconhecimento rápido para já saber quais IAs estão respondendo bem e quais precisam de um empurrãozinho. Se a câmera ou o microfone estiverem desligados, o navegador costuma pedir permissão (clique em "Permitir" / "Allow"). O objetivo central de hoje é emocional: cada criança precisa terminar a aula com orgulho de ter treinado uma IA que funciona.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): reúna a turma perto do projetor. Abra o seu protótipo de exemplo e mostre a IA funcionando: digite ou fale algo e deixe a turma ver o personagem reagir. Diga: "Hoje é o dia de mostrar para os amigos a Inteligência Artificial que vocês treinaram!" Relembre rapidinho o caminho: treinamos a IA, ligamos ao jogo e o jogo reage.

Conteúdo novo guiado (15 min): no seu computador projetado, ensine o ritual da apresentação. Abra o ML for Kids, mostre a aba "Learn & Test", faça um teste rápido (a IA responde com o rótulo) e depois mostre o jogo reagindo. Diga em voz alta a fórmula da apresentação: "Eu ensinei a minha IA a reconhecer..., e quando ela reconhece..., o jogo faz...". Mostre a lista de checagem e explique que cada um vai conferir o próprio projeto antes de subir ao palco.

Mão na massa (25 min): cada aluno vai ao seu computador com o projeto aberto. Eles fazem o teste de reconhecimento, marcam a lista de checagem e treinam a frase de apresentação baixinho. Circule pela sala. Se uma IA não reconhecer, conserte com passos curtos: volte à aba "Learn & Test", confira se o modelo está lá, refaça o teste; se o microfone ou a câmera estiverem mudos, dê a permissão no navegador. Garanta que todo protótipo reconhece e reage antes do showcase.

Desafio e compartilhar (10 min): comece o showcase. Um por vez, conecte a criança ao projetor (ou leve a turma até a máquina dela). O aluno diz a frase de apresentação e faz a IA reconhecer ao vivo. Um colega dá um elogio e faz uma pergunta usando o cartão de feedback. Todos batem palmas e o apresentador ganha o crachá de "Treinador de IA". Feche celebrando a etapa 2 de 2 e contando que vem a ponte para o próximo nível.

## Como explicar para crianças

Use a analogia do bichinho ensinado: "A gente ensinou a IA igual a gente ensina um cachorrinho a sentar, mostrando muitos exemplos. Hoje a gente mostra a graça que ela aprendeu!" Reconhecer é "a IA adivinhar de qual grupo é a coisa". Reagir é "o jogo obedecer ao que a IA falou". Apresentar é "mostrar a sua invenção para os amigos". Feedback positivo é "começar falando o que você achou legal". Repita sempre que treinar uma IA é coisa de gente grande e que eles conseguiram.

## Erros comuns e como ajudar

Algumas crianças vão querer treinar exemplos novos no último dia ("quero ensinar mais uma coisa!"). Acolha, mas redirecione: "Hoje a gente mostra o que já está pronto; ideias novas a gente guarda para o próximo projeto." Outra confusão é apagar o modelo sem querer dentro do ML for Kids; peça que toquem só onde você indicar e tenha o seu protótipo de exemplo de reserva para qualquer demonstração. Muitas vão esquecer de dar permissão de microfone ou câmera, e a IA parece "quebrada" sem motivo; ensine a clicar em "Permitir" no aviso do navegador. Algumas ficam tímidas para apresentar; ofereça subir junto e segurar a fala por elas. Se um protótipo estiver muito travado, conserte você rapidinho antes da mostra para a criança não se frustrar, e termine cada apresentação com palmas, sem comparar projetos entre si.`,
  exercicios: [
    {
      titulo: `Teste Rápido: a minha IA ainda reconhece?`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre no projetor a aba "Learn & Test" (Aprender e Testar) do ML for Kids e onde fica a área de teste. Faça um exemplo: digite uma frase ou fale no microfone e mostre a IA respondendo com o rótulo. Peça que cada criança abra o próprio projeto e repita.`,
      atividade: `Cada aluno abre seu projeto no ML for Kids, vai até a aba de testar e dá um exemplo para a IA (uma frase, uma fala ou uma imagem). Observa qual rótulo a IA responde.`,
      gabarito: `A IA responde com um rótulo e uma porcentagem de confiança. Se a criança dá um exemplo e a IA mostra um nome de grupo de volta, o modelo está funcionando e o aluno acertou o teste.`,
    },
    {
      titulo: `Lista de Checagem do Showcase`,
      tipo: `prática + checklist`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a lista ilustrada (projeto abre, modelo conectado, IA reconhece, jogo reage). Explique que eles vão conferir o próprio protótipo do começo ao fim e marcar um certinho em cada item que funcionar. Circule e ajude a consertar o que faltar antes de apresentar.`,
      atividade: `O aluno percorre seu protótipo conferindo: o projeto abriu, o modelo está conectado, a IA reconhece e o jogo reage. Marca cada item que funciona e chama o professor para o que faltar.`,
      gabarito: `Ao final, os quatro itens da lista estão marcados e o protótipo reconhece e reage sem travar. Se algum item não foi marcado, o professor ajudou a corrigir e o aluno remarcou.`,
    },
    {
      titulo: `Minha Frase de Apresentação`,
      tipo: `escrita / preparação`,
      tempo: `10 min`,
      guiaProfessor: `Escreva no quadro a fórmula: "Eu ensinei a minha IA a reconhecer ___, e quando ela reconhece ___, o jogo faz ___." Leia a sua, usando o protótipo de exemplo. Peça que cada criança preencha a dela e treine falando baixinho uma vez.`,
      atividade: `O aluno completa a frase de apresentação com o que a sua IA reconhece e como o jogo reage, e treina dizê-la em voz baixa uma vez antes do showcase.`,
      gabarito: `A frase tem as três partes preenchidas e bate com o protótipo real do aluno (o que a IA reconhece e como o jogo reage são verdadeiros no projeto). Se a frase descreve o que o jogo realmente faz, está certa.`,
    },
    {
      titulo: `Cartão de Feedback Positivo`,
      tipo: `roda de conversa / escuta`,
      tempo: `10 min`,
      guiaProfessor: `Distribua os cartões de feedback (um espaço para um elogio, um espaço para uma pergunta). Ensine a regra de ouro: primeiro um elogio sincero, depois uma pergunta curiosa, nunca uma crítica. Dê exemplos: "Gostei de como o personagem ficou feliz" e "O que acontece se a IA errar?".`,
      atividade: `Enquanto um colega apresenta, o aluno escreve (ou pensa) um elogio e uma pergunta no cartão e entrega ou fala para o apresentador no fim da mostra dele.`,
      gabarito: `O aluno oferece um elogio de verdade sobre o protótipo do colega e faz uma pergunta sobre a IA ou o jogo. Se o feedback começa por algo positivo e traz uma pergunta gentil, o aluno acertou o exercício.`,
    },
    {
      titulo: `Showcase: Eu Sou Treinador de IA!`,
      tipo: `apresentação / celebração`,
      tempo: `12 min`,
      guiaProfessor: `Organize a turma em roda perto do projetor. Um por vez, conecte o projeto da criança. Ajude-a a dizer a frase de apresentação e a fazer a IA reconhecer ao vivo. Um colega dá o feedback do cartão. Todos batem palmas, o apresentador recebe o crachá de "Treinador de IA" e você fecha celebrando a etapa 2 de 2 e a ponte para o próximo nível.`,
      atividade: `Cada aluno apresenta seu protótipo dizendo a frase de apresentação, faz a IA reconhecer um exemplo ao vivo e mostra o jogo reagindo, enquanto a turma assiste, elogia e pergunta.`,
      gabarito: `O aluno diz sua frase, a IA reconhece um exemplo na frente da turma e o jogo reage. Toda criança apresentar, mostrar a IA funcionando e receber o crachá de "Treinador de IA" significa que o showcase deu certo.`,
    },
  ],
};
