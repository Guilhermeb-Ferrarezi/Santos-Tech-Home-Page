import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Ensaio: contando o que a IA faz",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Cada criança ensaia explicar, em poucas frases, o que a IA do seu jogo reconhece e o que acontece na tela quando ela acerta.`,
  descricao: `Esta aula é quase toda fala e ensaio. As crianças já construíram um mini-jogo no Scratch que conversa com a Teachable Machine: a IA reconhece algo (um gesto, um objeto, um som ou uma carinha) e o jogo reage. Agora chegou a hora de elas aprenderem a contar isso para outras pessoas, com clareza e orgulho. O grande showcase é na próxima aula, então hoje preparamos o palco.

A ideia central é simples: apresentar não é decorar um texto difícil, é mostrar e contar. A criança aponta para a tela, mostra a IA funcionando ao vivo e diz três coisinhas: o que a IA reconhece, o que o jogo faz quando ela acerta e o que ela mais gostou de criar. Você, professor, vai oferecer um molde de fala curtinho (um "roteiro de três passos") para que ninguém fique travado na frente dos colegas.

O coração da aula é o ensaio em duplas. Cada criança apresenta para o parceiro, o parceiro escuta, bate palma e dá uma dica gentil. Depois trocam. Esse vai e volta tira o medo, porque a primeira plateia é só uma pessoa amiga, não a turma inteira. Enquanto ensaiam, elas também percebem os últimos ajustes do projeto: uma classe da IA que erra muito, um som que não toca, um nome de classe confuso. São consertos pequenos e rápidos.

No fim, algumas duplas voluntárias mostram a apresentação para a turma toda, já no projetor, simulando o showcase. Você reforça as boas falas, celebra cada coragem e deixa todos com a sensação de que estão prontos. O entregável do mês — apresentar o que a IA faz — fica praticamente no ponto ao terminar esta aula.`,
  materiais: [
    `Computadores (um por criança ou dupla) com o projeto do mês aberto no Scratch, já conectado à Teachable Machine`,
    `Projetor ou TV grande para as apresentações de teste no fim da aula`,
    `Um cartão impresso por criança com o "roteiro de três passos" (o que reconhece / o que acontece / o que gostei)`,
    `Exemplo pronto do professor: um mini-jogo com IA já funcionando, para demonstrar uma apresentação modelo`,
    `Adesivos ou carimbos de "ótimo apresentador" para celebrar cada ensaio concluído`,
    `Folha de "dica gentil" simples para o parceiro marcar (joinha para o que foi bom, lâmpada para uma ideia de melhorar)`,
  ],
  conceitosChave: [
    `Apresentar — mostrar e contar para outras pessoas o que você criou, sem pressa e com orgulho.`,
    `Roteiro — uma listinha curta de três coisas para falar, como um mapa que não deixa a gente se perder.`,
    `Demonstrar ao vivo — fazer a IA funcionar na frente de todos, ali na hora, em vez de só falar dela.`,
    `Ensaiar — treinar a fala antes da apresentação de verdade, para ficar mais fácil e tranquilo.`,
    `Dica gentil — um conselho amigo para o colega, dito com carinho, que ajuda a melhorar sem magoar.`,
    `Classe da IA — cada "gavetinha" que a Teachable Machine aprendeu a reconhecer, como "mão aberta" ou "mão fechada".`,
    `Plateia — as pessoas que assistem à apresentação e torcem por você.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje você não vai construir nada novo no Scratch nem treinar a IA do zero. A aula é de comunicação: as crianças aprendem a contar o que já fizeram. Antes de começar, abra o projeto do mês de uma criança (ou o seu exemplo) e confirme que tudo funciona: a Teachable Machine está conectada e, quando você mostra o gesto ou objeto na webcam, o jogo no Scratch reage. Se você for iniciante, lembre-se de que o projeto usa a extensão da Teachable Machine no Scratch; os blocos costumam dizer algo como "quando reconhecer [classe]". Cada "classe" é uma gavetinha que a IA aprendeu. Saber o nome dessas classes ajuda a guiar a fala da criança.

## Passo a passo da aula

Aquecimento (10 min): Sente a turma em roda. Faça a pergunta mágica: "Se um amigo seu nunca viu seu jogo, o que você contaria primeiro?" Deixe duas ou três crianças falarem. Depois mostre o seu exemplo pronto no projetor e faça uma apresentação modelo bem curtinha, em voz alta: "Minha IA reconhece mão aberta e mão fechada. Quando eu abro a mão, o personagem pula. O que eu mais gostei foi escolher o som do pulo." Repita o roteiro de três passos apontando os dedos: um, dois, três.

Conteúdo novo guiado (15 min): Entregue o cartão do roteiro de três passos. Explique cada passo devagar. Passo 1, o que a IA reconhece: peça que cada criança abra o projeto, clique na bandeira verde do Scratch (canto superior direito do palco) e teste a webcam para lembrar os nomes das classes. Passo 2, o que acontece no jogo: peça que mostrem a IA acertando e observem a reação na tela. Passo 3, o que mais gostaram. Faça todos repetirem o roteiro juntos, em coro, uma vez.

Mão na massa (25 min): Forme duplas. A criança A apresenta para a criança B usando os três passos, com o jogo rodando ao vivo. A criança B escuta, bate palma e marca uma dica gentil na folha (joinha para algo bom, lâmpada para uma ideia). Depois trocam os papéis. Circule pela sala. Se uma criança travar, sussurre a primeira frase do cartão. Se notar um ajuste no projeto — um som que não toca, uma classe que erra muito — ajude a consertar rapidinho ali mesmo. Deixe cada dupla ensaiar pelo menos duas rodadas.

Desafio e compartilhar (10 min): Convide duas ou três duplas voluntárias para apresentar no projetor, simulando o showcase. A turma vira plateia e aplaude. Termine entregando o adesivo de "ótimo apresentador" para todos e diga que na próxima aula é o grande dia.

## Como explicar para crianças

Use a frase: "Apresentar é mostrar e contar." Faça o gesto de apontar para a tela ao dizer "mostrar" e a mão na boca como megafone ao dizer "contar". Para o roteiro, use os dedos: "Um, o que a IA enxerga. Dois, o que o jogo faz. Três, o que eu amei." Compare o ensaio com treinar antes de uma festa de aniversário: a gente repete a musiquinha para não esquecer. Lembre que a dica gentil é como dar um presente para o amigo: a gente fala com carinho.

## Erros comuns e como ajudar

Algumas crianças vão querer ler um texto longo ou decorar tudo — corte isso, só três frases curtas bastam. Outras esquecem de testar a IA ao vivo e ficam só falando; lembre de mostrar a webcam funcionando. Há quem fale baixinho demais; brinque de "voz de super-herói" para subir o volume. Em duplas, alguém pode dar uma dica dura ("ficou feio"); reensine a dica gentil com joinha e lâmpada. E se o projeto quebrar na hora, respire junto, clique na bandeira verde de novo e mostre que consertar faz parte de ser criador.`,
  exercicios: [
    {
      titulo: `Os três dedos mágicos`,
      tipo: `Aquecimento oral em roda`,
      tempo: `8 minutos`,
      guiaProfessor: `Apresente o roteiro de três passos com os dedos e peça que a turma repita em coro. O objetivo é gravar a sequência na memória antes de qualquer ensaio individual. Não exija que falem do próprio jogo ainda, só a estrutura.`,
      atividade: `Levante um dedo e diga "o que a IA reconhece", dois dedos "o que o jogo faz", três dedos "o que eu mais gostei". Toda a turma repete junto, mostrando os dedos. Faça duas rodadas.`,
      gabarito: `Sucesso quando todas as crianças conseguem dizer os três passos na ordem certa, mostrando um, dois e três dedos. Exemplo de fala correta: "Um: o que a IA reconhece. Dois: o que o jogo faz. Três: o que eu mais gostei."`,
    },
    {
      titulo: `Descobrindo as classes da minha IA`,
      tipo: `Investigação no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada criança abre o projeto, clica na bandeira verde do Scratch e testa a webcam para lembrar quais classes a IA reconhece. Ande pela sala lendo os nomes das classes nos blocos "quando reconhecer". Ajude quem não souber ler a localizar pelo ícone.`,
      atividade: `Abra seu jogo, clique na bandeira verde e mostre seus gestos ou objetos para a webcam. Conte para o professor: quantas gavetinhas (classes) a sua IA tem e como elas se chamam?`,
      gabarito: `A criança nomeia corretamente as classes do seu projeto. Exemplo: "Minha IA tem duas classes: mão aberta e mão fechada." Qualquer resposta que liste de forma correta as classes existentes no projeto está certa; o número varia de aluno para aluno.`,
    },
    {
      titulo: `Minha apresentação de três frases`,
      tipo: `Produção de fala individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança monta sua fala completa usando o roteiro, com o jogo rodando ao vivo. Escute uma por uma se possível. Se travar, sussurre a primeira palavra de cada frase. Aceite frases simples; o importante é cobrir os três passos.`,
      atividade: `Olhando para o seu jogo funcionando, fale as suas três frases: o que a IA reconhece, o que acontece quando ela acerta e o que você mais gostou de criar.`,
      gabarito: `A apresentação cobre os três passos. Exemplo válido: "Minha IA reconhece quando eu mostro um polegar para cima. Quando ela acerta, a moeda aparece na tela. Eu mais gostei de escolher o som da moeda." Falta de um dos passos indica que precisa completar.`,
    },
    {
      titulo: `Ensaio em dupla com dica gentil`,
      tipo: `Ensaio em pares`,
      tempo: `14 minutos`,
      guiaProfessor: `Forme duplas. A apresenta para B com o jogo ao vivo; B escuta, aplaude e marca uma dica gentil (joinha para algo bom, lâmpada para uma ideia de melhorar). Depois trocam. Garanta pelo menos uma rodada para cada criança. Modele uma dica gentil antes de começar.`,
      atividade: `Apresente seu jogo para o seu par usando as três frases. Depois ouça o seu par e dê uma dica gentil: marque um joinha para o que ficou bom e uma lâmpada para uma ideia de melhorar.`,
      gabarito: `Cada criança apresenta os três passos e oferece ao par uma dica respeitosa. Exemplo de dica gentil correta: "Joinha porque você falou bem alto! Lâmpada: mostra a webcam mais perto para a gente ver melhor." Dicas duras ou ofensivas devem ser reformuladas com sua ajuda.`,
    },
    {
      titulo: `Palco de teste no projetor`,
      tipo: `Desafio de apresentação para a turma`,
      tempo: `10 minutos`,
      guiaProfessor: `Convide duas ou três duplas voluntárias a apresentar no projetor, simulando o showcase da próxima aula. A plateia aplaude. Reforce em voz alta uma coisa boa de cada apresentação. Ninguém é obrigado; valorize a coragem de quem se voluntaria.`,
      atividade: `Suba ao "palco" com seu par e apresente seu jogo no projetor para a turma toda, usando as três frases e mostrando a IA funcionando ao vivo. No fim, ouça os aplausos.`,
      gabarito: `A dupla apresenta os três passos diante da turma e demonstra a IA ao vivo no projetor. Exemplo de sucesso: a criança fala as três frases, mostra o gesto na webcam e o jogo reage na tela grande, recebendo aplausos. Considera-se concluído mesmo com pequenos esquecimentos, desde que a IA seja demonstrada funcionando.`,
    },
  ],
};
