import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Treinando a primeira IA no ML for Kids",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Cada criança cria um projeto de reconhecimento no ML for Kids e ensina a própria IA com vários exemplos por categoria, descobrindo na prática que quanto mais exemplos a gente dá, melhor a máquina acerta.`,
  descricao: `Na aula passada as crianças descobriram onde a IA mora dentro de um jogo: o cérebro esperto que decide o que o NPC faz ou que reconhece o que o jogador escreve ou mostra. Hoje elas colocam a mão na massa de verdade e treinam a primeira IA delas no ML for Kids, um site gratuito feito para crianças aprenderem a ensinar máquinas. É a primeira vez que cada aluno vai ser o professor de uma inteligência artificial.

O ML for Kids funciona como um caderninho de exemplos. A gente cria caixinhas (as categorias, chamadas de "labels") e coloca dentro de cada caixinha vários exemplos do que pertence ali. Se a IA vai reconhecer texto, colocamos frases dentro de cada caixinha; se vai reconhecer imagem, colocamos figuras. Depois apertamos um botão e a máquina "estuda" todos esses exemplos. Quando ela termina de estudar, conseguimos testar: damos um exemplo novo, que ela nunca viu, e ela tenta adivinhar em qual caixinha aquilo se encaixa.

A grande descoberta da aula é simples e poderosa: a IA não nasce sabendo, ela aprende pelos exemplos que damos. Com poucos exemplos ela chuta e erra bastante; com muitos exemplos parecidos com a vida real, ela começa a acertar com confiança. As crianças vão sentir isso na pele quando treinarem com 3 exemplos, testarem, depois adicionarem mais e testarem de novo, vendo o número de confiança subir.

No fim, cada aluno conecta esse treino com a ideia que escolheu na aula anterior: o NPC que entende se o jogador foi gentil ou grosseiro, o reconhecimento de "amigo ou inimigo", o detector de palavra mágica. O treino de hoje é a sementinha do protótipo com IA que eles vão montar no jogo nas próximas aulas. Hoje plantamos a semente; nas próximas semanas ela vira o cérebro do jogo.`,
  materiais: [
    `Computadores com o ML for Kids já aberto no navegador (site machinelearningforkids.co.uk), um por criança`,
    `Projetor ou TV grande conectada para o professor demonstrar cada clique na tela grande`,
    `Login de turma do ML for Kids já criado e testado antes da aula (contas das crianças prontas, sem precisar de e-mail)`,
    `Folha impressa com 2 ou 3 categorias de exemplo prontas (ex.: "Gentil" e "Grosseiro") e várias frases para copiar`,
    `Cartão da aula anterior em que cada criança anotou a ideia de NPC ou reconhecimento que escolheu`,
    `Quadro branco para escrever as categorias da turma e desenhar as "caixinhas de exemplos"`,
    `Cronômetro ou ampulheta visível para marcar o tempo de cada momento da aula`,
  ],
  conceitosChave: [
    `Treinar a IA — dar vários exemplos para a máquina aprender, igual a ensinar um amiguinho mostrando muitas figuras.`,
    `Categoria (label) — uma caixinha com um nome onde a gente guarda exemplos do mesmo tipo, como "Gentil" ou "Grosseiro".`,
    `Exemplo — uma frase ou figura que a gente coloca dentro de uma caixinha para a IA aprender com ela.`,
    `Reconhecer — quando a IA olha um exemplo novo e diz em qual caixinha ele se encaixa.`,
    `Confiança — o número de 0 a 100 que mostra o quanto a IA tem certeza do palpite dela.`,
    `Modelo — o "cérebro" pronto que nasce depois que a IA estuda todos os nossos exemplos.`,
    `Quanto mais exemplos, melhor — a regra de ouro: dar muitos exemplos faz a IA acertar mais.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa entender de programação nem de matemática para dar esta aula. O ML for Kids é um site visual, todo em caixinhas e botões. Antes da aula, faça você mesmo o caminho uma vez, com calma. Acesse o site, entre com o login da turma e clique em "Projects" (Projetos) no topo. Para criar um projeto, clique no botão "Add a new project" (Adicionar um novo projeto), dê um nome (ex.: "Gentil ou Grosseiro"), escolha o tipo "text" (texto) para reconhecer frases ou "images" (imagens) para reconhecer figuras, e em idioma escolha "Portuguese" se o projeto for de texto. Recomende texto para a turma toda hoje: é mais rápido e não depende de webcam.

Ao abrir o projeto, você verá três botões grandes: "Train" (Treinar), "Learn & Test" (Aprender e Testar) e "Make" (Fazer/Usar). Em "Train" a gente cria as categorias (botão "Add new label") e coloca exemplos dentro de cada uma (botão "Add example"). Em "Learn & Test" tem o botão "Train new machine learning model" (Treinar novo modelo) que faz a IA estudar, e logo abaixo uma caixinha para digitar um teste e ver o palpite com a confiança. Decore esses três nomes; o resto a aula flui sozinha.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Em roda, retome a aula passada. Pergunte: "Quem lembra onde a IA mora no jogo?". Mostre o projetor e diga que hoje cada um vai ser o professor de uma IA de verdade. Faça uma brincadeira: você é a "IA-bebê" e só sabe o que ensinarem. As crianças dizem frases gentis e grosseiras e você repete sem saber classificar; mostre que sem exemplos você não acerta nada. Isso prepara a ideia central.

Conteúdo novo guiado (15 min): No projetor, crie um projeto novo do zero, devagar. Clique em "Projects", "Add a new project", digite o nome, escolha "text" e idioma "Portuguese", clique em "Create". Entre no projeto, clique em "Train". Clique em "Add new label" e crie duas caixinhas: "Gentil" e "Grosseiro". Em cada uma, clique em "Add example" e digite 3 frases (ex.: "você é meu amigo", "que legal te ver"). Mostre cada clique nomeando o botão em voz alta.

Mão na massa (25 min): Cada criança faz o mesmo no seu computador. Circule pela sala. Elas criam o projeto, criam as duas categorias e colocam ao menos 3 exemplos em cada. Depois vão em "Learn & Test", clicam em "Train new machine learning model" e esperam aparecer "Available" (Pronto). Aí testam digitando uma frase nova e olham a confiança. Em seguida, peça que voltem ao "Train", adicionem mais 3 exemplos em cada caixinha, treinem de novo e testem a mesma frase: a confiança sobe. Esse vai e volta é o coração da aula.

Desafio e compartilhar (10 min): Cada criança liga o treino à ideia do cartão da aula anterior (NPC ou reconhecimento). Peça que renomeiem as categorias para combinar com o jogo delas (ex.: "amigo" e "inimigo"). Na roda final, dois ou três voluntários mostram no projetor a IA acertando, e a turma comemora o número de confiança alto.

## Como explicar para crianças

Use a analogia do caderninho de figurinhas: cada categoria é um álbum, e cada exemplo é uma figurinha que colamos lá. Quanto mais figurinhas a IA vê, mais ela reconhece. Chame o treino de "dar aulinha para a IA". Explique a confiança como o "termômetro de certeza": perto de 100 a IA tem muita certeza, perto de 50 ela está em dúvida. Compare com aprender a reconhecer cachorros: se você só viu um cachorro na vida, pode confundir; se viu mil, acerta na hora.

## Erros comuns e como ajudar

A criança coloca só 1 exemplo por caixinha e a IA erra: mostre que precisa de vários e ajude a adicionar mais. A criança esquece de treinar depois de adicionar exemplos: lembre que toda vez que muda algo precisa clicar de novo em "Train new machine learning model". A criança põe a mesma frase nas duas caixinhas e confunde a IA: explique que cada exemplo mora em uma caixinha só. A criança escreve com muitos erros de digitação e a IA não entende: tudo bem, mas peça frases curtas e claras. A criança quer testar antes de o modelo ficar "Available": peça para esperar a palavra "Available" aparecer.`,
  exercicios: [
    {
      titulo: `A IA-bebê não sabe nada`,
      tipo: `Roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Em roda, finja ser uma IA recém-nascida que só sabe o que ensinarem. As crianças dizem frases gentis e grosseiras e você não consegue classificar nenhuma. Conduza para a descoberta: sem exemplos, a IA não acerta. É a preparação para tudo o que vem depois.`,
      atividade: `O professor virou uma IA-bebê que não sabe nada. Diga uma frase gentil e uma frase grosseira para ele. Ele consegue saber qual é qual sem ninguém ter ensinado? Por quê?`,
      gabarito: `A criança percebe que a IA-bebê não consegue separar as frases porque ninguém deu exemplos a ela. Acerto = explicar com as próprias palavras que a IA só aprende depois que a gente ensina com exemplos. Ex.: "ela não sabe porque nunca viu nenhum exemplo antes".`,
    },
    {
      titulo: `Criando minhas duas caixinhas`,
      tipo: `Prática no ML for Kids`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor e acompanhe cada criança. Elas entram no projeto, clicam em "Train", clicam em "Add new label" e criam duas categorias com os nomes "Gentil" e "Grosseiro". O objetivo é só criar as caixinhas vazias, ainda sem exemplos.`,
      atividade: `No seu projeto, clique no botão "Train". Depois clique em "Add new label" e crie duas caixinhas: uma chamada "Gentil" e outra chamada "Grosseiro".`,
      gabarito: `As duas categorias aparecem na tela com os nomes certos, ainda vazias. Acerto = ter exatamente as caixinhas "Gentil" e "Grosseiro" criadas. Erro comum: criar uma só ou trocar o nome; basta usar "Add new label" de novo ou apagar e refazer.`,
    },
    {
      titulo: `Enchendo as caixinhas de exemplos`,
      tipo: `Prática no ML for Kids`,
      tempo: `10 minutos`,
      guiaProfessor: `Cada criança clica em "Add example" dentro de cada caixinha e digita ao menos 3 frases coerentes. Use a folha impressa com sugestões para quem travar. Frases curtas e claras funcionam melhor. Circule garantindo que cada caixinha tenha pelo menos 3 exemplos.`,
      atividade: `Clique em "Add example" e coloque 3 frases dentro de cada caixinha. Na "Gentil", frases legais como "você é meu amigo". Na "Grosseiro", frases ruins como "sai daqui". Capriche!`,
      gabarito: `Cada categoria tem 3 ou mais exemplos digitados e corretos para o tipo (gentis na "Gentil", grosseiras na "Grosseiro"). Acerto = nenhuma caixinha vazia e nenhuma frase na caixinha errada. Ex.: "Gentil": "que bom te ver", "vamos brincar juntos", "você joga bem".`,
    },
    {
      titulo: `Treinar e testar a minha IA`,
      tipo: `Experimento guiado`,
      tempo: `10 minutos`,
      guiaProfessor: `As crianças vão em "Learn & Test", clicam em "Train new machine learning model" e esperam aparecer "Available". Depois digitam uma frase nova na caixinha de teste e leem o palpite e a confiança. Ajude quem testar antes de o modelo ficar pronto.`,
      atividade: `Clique em "Learn & Test" e depois em "Train new machine learning model". Espere aparecer "Available". Agora digite uma frase nova, como "você é legal", e veja em qual caixinha a IA coloca e qual o número de confiança.`,
      gabarito: `O modelo treina, fica "Available" e classifica a frase de teste mostrando a categoria e um número de confiança. Acerto = a criança ler corretamente o palpite e a confiança. Ex.: "você é legal" cai em "Gentil" com confiança 80. Pequenos erros da IA aqui são normais e esperados.`,
    },
    {
      titulo: `Mais exemplos, IA mais esperta`,
      tipo: `Desafio final`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que cada criança anote a confiança que teve no teste anterior. Depois adicionam mais 3 exemplos em cada caixinha, treinam de novo e testam a MESMA frase. Comparam os dois números. Conduza para a descoberta da regra de ouro: mais exemplos, mais acerto. Quem terminar conecta as categorias à ideia do jogo do cartão.`,
      atividade: `Anote a confiança do teste anterior. Agora volte em "Train", adicione mais 3 frases em cada caixinha e clique de novo em "Train new machine learning model". Teste a mesma frase. O número de confiança subiu ou desceu?`,
      gabarito: `A criança compara as duas confianças e percebe que, com mais exemplos, a IA fica mais certa (a confiança geralmente sobe e os acertos melhoram). Acerto = explicar a regra de ouro: quanto mais exemplos, melhor a IA acerta. Ex.: confiança passou de 70 para 90 depois de adicionar exemplos.`,
    },
  ],
};
