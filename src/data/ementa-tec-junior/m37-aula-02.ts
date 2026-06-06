import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Vamos treinar nosso primeiro modelo!",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança cria o próprio projeto no ML for Kids, coleta e rotula exemplos em pelo menos duas categorias, clica em treinar pela primeira vez e testa o modelo com exemplos novos.`,
  descricao: `Na aula passada as crianças descobriram o que é uma IA que aprende: um cérebro de computador que fica mais esperto quando a gente mostra muitos exemplos para ele. Hoje é o grande dia de colocar a mão na massa de verdade! Cada criança vai abrir o ML for Kids, criar o seu próprio projeto e ensinar o computador a reconhecer coisas, do jeitinho que a gente ensina um bebê: mostrando muitos exemplos e dizendo o nome de cada um.

O ML for Kids é um site gratuito, feito especialmente para crianças, onde dá para treinar uma IA sem precisar saber programar. A criança escolhe se quer ensinar o computador a entender textos (frases que a gente digita) ou imagens (fotos e desenhos). Depois, ela cria caixinhas chamadas etiquetas (por exemplo: "feliz" e "triste") e enche cada caixinha com vários exemplos. Quando aperta o botão de treinar, a IA estuda todos esses exemplos e fica pronta para adivinhar coisas novas.

O coração da aula é entender que a IA só aprende o que a gente mostra. Se eu coloco só dois exemplos, ela aprende pouco e erra muito. Se eu coloco muitos exemplos bons em cada etiqueta, ela aprende bem e acerta mais. Por isso as crianças vão coletar e rotular vários exemplos, com calma, antes de treinar. E o momento mais mágico vem no fim: depois de treinar, elas digitam (ou mostram) algo NOVO, que a IA nunca viu antes, e observam o computador tentar adivinhar sozinho a resposta.

O resultado concreto de hoje é o primeiro modelo treinado de cada criança, funcionando na tela. Não precisa ficar perfeito: precisa funcionar e gerar a maior alegria do mundo, aquele "o computador adivinhou!". É o primeiro passo do entregável do mês, que é um modelo de IA próprio. Achar que a IA errou também é ótimo, porque nas próximas aulas a turma vai aprender a deixá-la mais esperta.`,
  materiais: [
    `Computadores (1 por criança) com o ML for Kids já aberto no navegador, na página de projetos, prontos para começar (o professor deixa o site carregado antes da aula).`,
    `Projetor ou TV grande conectada ao computador do professor, para demonstrar cada clique ao vivo enquanto as crianças acompanham.`,
    `Um projeto de exemplo já pronto pelo professor (por exemplo, "Feliz ou Triste?") com duas etiquetas cheias de exemplos, para mostrar como fica um modelo treinado.`,
    `Uma lista impressa de exemplos prontos para copiar: frases para o projeto de texto (ex.: "que dia lindo", "estou chorando") ou ideias de imagens, caso alguma criança trave na hora de inventar.`,
    `Folha "Plano do meu modelo": um papel simples onde a criança escreve o tema e os nomes das duas etiquetas antes de ir para o computador.`,
    `Lápis e lápis de cor para preencher o plano e desenhar o que a IA vai aprender.`,
    `Adesivos de "Treinador de IA" para premiar quem treinar e testar o primeiro modelo.`,
  ],
  conceitosChave: [
    `Projeto — é a caixinha onde mora a IA que a criança está ensinando. Cada criança cria o seu projeto com um nome, como dar nome a um bichinho de estimação.`,
    `Etiqueta (ou rótulo) — é uma gavetinha com um nome, como "feliz" ou "triste", onde a gente guarda os exemplos que ensinam aquilo para a IA.`,
    `Exemplo — cada coisinha que a gente mostra para a IA aprender: uma frase, uma foto ou um desenho colocado dentro de uma etiqueta.`,
    `Treinar — é o momento em que a gente aperta o botão e a IA estuda todos os exemplos de uma vez, como quem decora a lição antes da prova.`,
    `Testar — depois de treinar, a gente mostra uma coisa nova, que a IA nunca viu, e ela tenta adivinhar em qual etiqueta aquilo se encaixa.`,
    `Confiança — é o quanto a IA tem certeza do que adivinhou, mostrada em porcentagem; quanto maior o número, mais segura ela está da resposta.`,
    `Texto ou imagem — os dois tipos de projeto desta aula: no de texto a criança ensina com frases que digita; no de imagem ela ensina com fotos ou desenhos.`,
  ],
  treinamento: `## O que o professor precisa saber

O ML for Kids (acessível em machinelearningforkids.co.uk) é um site gratuito onde crianças treinam modelos de IA sem programar. Para esta aula, o professor deve entrar no site, clicar em "Try it now" (ou "Experimente agora") e, se o site pedir, escolher entrar sem conta para a turma testar rápido. A tela principal mostra o menu "Projects" (Projetos). Para criar um projeto, clica-se no botão "+ Add a new project". Aparece uma janelinha pedindo o nome do projeto ("Project Name") e o tipo de aprendizado ("Recognising..."), onde se escolhe "text" (texto) ou "images" (imagens). Para a primeira vez, o tipo "texto" é o mais simples, porque a criança só digita frases.

Depois de criado, abre-se o projeto e aparecem três botões grandes: "Train" (Treinar/coletar exemplos), "Learn & Test" (Aprender e Testar) e "Make" (Fazer, que a gente não usa hoje). No botão "Train" a criança cria as etiquetas com "Add new label" e, dentro de cada etiqueta, adiciona exemplos com "Add example". Recomendam-se pelo menos 5 a 6 exemplos por etiqueta e no mínimo duas etiquetas. Em seguida, no botão "Learn & Test", clica-se em "Train new machine learning model" para treinar. Quando termina, a mesma tela oferece um campo para digitar um exemplo NOVO e ver a IA adivinhar a etiqueta e a porcentagem de confiança. É bom o professor montar tudo isso uma vez antes da aula para conhecer os nomes dos botões.

## Passo a passo da aula

10 min — Aquecimento e revisão: Relembre a Aula 1 com uma pergunta: "como a IA aprende?". Espere o "mostrando exemplos!". No projetor, abra o projeto de exemplo já treinado ("Feliz ou Triste?"), digite uma frase nova e mostre a IA adivinhando. Diga: "hoje cada um vai fazer um destes!".

15 min — Conteúdo novo guiado: Na sua tela, vá devagar: clique em "Projects", depois "+ Add a new project", digite um nome, escolha "text". Mostre o botão "Train", crie duas etiquetas com "Add new label" e adicione dois ou três exemplos com "Add example" em cada. As crianças apenas observam e dizem os nomes dos botões em voz alta com você.

25 min — Mão na massa: Cada criança cria o próprio projeto, escolhe texto ou imagem, cria duas etiquetas e enche cada uma com pelo menos 5 exemplos. Depois vai em "Learn & Test" e clica em "Train new machine learning model". Circule conferindo se cada etiqueta tem exemplos suficientes antes de treinar.

10 min — Desafio e compartilhar: Cada criança digita (ou mostra) um exemplo NOVO e observa a IA adivinhar, lendo a porcentagem de confiança. Em roda, cada um conta se a IA acertou. Comemore tudo e entregue o adesivo "Treinador de IA".

## Como explicar para crianças

Compare a IA com um bebê: "a gente ensina mostrando muitas vezes e dizendo o nome". As etiquetas são gavetinhas: "esta gaveta é a 'feliz', vamos enchê-la de frases felizes!". O treinar é a IA decorando a lição: "agora ela vai estudar tudo de uma vez". E o testar é a hora da mágica: "vamos mostrar uma frase nova, que ela nunca viu, e ver se ela adivinha!". Reforce que poucos exemplos deixam a IA "boba" e muitos exemplos a deixam "espertinha".

## Erros comuns e como ajudar

O erro mais comum é colocar poucos exemplos (um ou dois) e a IA errar muito; peça pelo menos cinco por etiqueta. Outro é criar só uma etiqueta: a IA precisa de no mínimo duas para escolher entre opções. Algumas crianças apertam "Train new machine learning model" antes de ter exemplos suficientes e o site reclama; mostre que basta voltar ao "Train" e adicionar mais. Há quem teste com um exemplo igualzinho a um que ensinou; explique que o teste é mais legal com algo NOVO. Por fim, se a IA errar, comemore mesmo assim: erro hoje é assunto das próximas aulas, e ninguém deve achar que fez algo errado.`,
  exercicios: [
    {
      titulo: `Plano do meu modelo (antes do computador)`,
      tipo: `roda de conversa com registro no papel`,
      tempo: `7 minutos`,
      guiaProfessor: `Antes de ligar a IA, reúna a turma e entregue a folha "Plano do meu modelo". Ajude cada criança a escolher um tema e os nomes de duas etiquetas. Dê exemplos no quadro: "Feliz ou Triste?", "Cachorro ou Gato?", "Educado ou Grosseiro?". O objetivo é a criança sair com o plano pronto antes de mexer no site, para não travar depois.`,
      atividade: `Pense no que você quer ensinar para a sua IA. Escreva na folha o tema e os nomes das DUAS etiquetas (gavetinhas). Exemplo: tema "sentimentos", etiquetas "feliz" e "triste". Faça um desenho de cada etiqueta se quiser!`,
      gabarito: `A criança acertou quando a folha tem um tema e DUAS etiquetas com nomes que fazem sentido juntos (formam um par de escolhas, como feliz/triste ou cachorro/gato). O professor confere se as duas etiquetas combinam com o mesmo tema; não vale uma só.`,
    },
    {
      titulo: `Criando o meu projeto no ML for Kids`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre na sua tela e peça que cada criança repita: clicar em "Projects", depois em "+ Add a new project", digitar o nome do projeto e escolher o tipo "text" (texto) ou "images" (imagens). Para a primeira vez, oriente a escolher texto, que é mais simples. Circule conferindo se todos chegaram à tela do projeto com os botões "Train" e "Learn & Test".`,
      atividade: `Clique em "Projects" e depois no botão "+ Add a new project". Digite o nome do seu projeto (pode ser o tema que você planejou). Escolha "text" se quiser ensinar com frases, ou "images" se quiser ensinar com fotos. Pronto, seu projeto nasceu!`,
      gabarito: `A criança acertou quando o projeto aparece na lista com o nome dela e, ao abri-lo, surgem os botões "Train", "Learn & Test" e "Make". O professor confere se o tipo escolhido (texto ou imagem) bate com o plano da criança.`,
    },
    {
      titulo: `Enchendo as gavetinhas (etiquetas e exemplos)`,
      tipo: `mão na massa na ferramenta`,
      tempo: `12 minutos`,
      guiaProfessor: `Esta é a parte mais importante. Mostre o botão "Train", depois "Add new label" para criar as duas etiquetas com os nomes do plano. Em cada etiqueta, use "Add example" para adicionar exemplos. Insista em pelo menos 5 exemplos por etiqueta. Tenha a lista de exemplos prontos à mão para quem travar. Passe de mesa em mesa contando os exemplos em voz alta com a criança.`,
      atividade: `Aperte "Train". Crie suas duas gavetinhas clicando em "Add new label" e dando os nomes do seu plano. Agora encha cada gavetinha: clique em "Add example" e coloque pelo menos 5 exemplos em cada etiqueta. Quanto mais exemplos bons, mais espertinha a sua IA vai ficar!`,
      gabarito: `A criança acertou quando tem DUAS etiquetas, cada uma com pelo menos 5 exemplos que combinam com o nome da etiqueta (frases felizes na "feliz", fotos de gato na "gato"). O professor confere a contagem e se os exemplos foram colocados na etiqueta certa.`,
    },
    {
      titulo: `Apertar o botão mágico: treinar!`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Leve a turma ao botão "Learn & Test" e mostre o botão "Train new machine learning model". Explique que a IA vai estudar todos os exemplos de uma vez e que pode demorar alguns segundos. Se o site reclamar que faltam exemplos, mostre que basta voltar ao "Train" e adicionar mais. Comemore quando a tela mostrar que o modelo ficou pronto.`,
      atividade: `Clique no botão "Learn & Test" e depois em "Train new machine learning model". Agora espere: a sua IA está estudando todos os exemplos, como quem decora a lição! Quando aparecer que ficou pronto, dê um joinha para a turma.`,
      gabarito: `A criança acertou quando o modelo termina de treinar e a tela mostra que está pronto (some o "treinando" e aparece a opção de testar). Se o site avisar que faltam exemplos, ela acerta ao voltar, adicionar mais e treinar de novo até concluir.`,
    },
    {
      titulo: `Desafio do adivinhador: testar com algo novo`,
      tipo: `desafio`,
      tempo: `9 minutos`,
      guiaProfessor: `Na mesma tela "Learn & Test", mostre o campo onde se digita um exemplo NOVO (no projeto de texto) ou se envia uma imagem nova. Reforce que tem de ser algo que a IA nunca viu. Mostre que ela responde com a etiqueta e uma porcentagem de confiança. Em roda, cada criança conta se a IA acertou. Comemore acertos E erros e entregue o adesivo "Treinador de IA". Lembre que melhorar a IA é assunto das próximas aulas.`,
      atividade: `Hora da mágica! Digite (ou mostre) uma coisa NOVA, que você nunca ensinou para a sua IA. Aperte para ela adivinhar. Veja qual etiqueta ela escolheu e o número da confiança. Depois conte para a turma: a sua IA acertou ou errou?`,
      gabarito: `A criança acertou a tarefa quando testa o modelo com um exemplo realmente novo (diferente dos que ensinou), lê a etiqueta que a IA escolheu e a porcentagem de confiança, e consegue dizer à turma se a IA acertou ou errou. O objetivo é testar e observar, não que a IA acerte sempre; tanto acerto quanto erro contam como sucesso da atividade.`,
    },
  ],
};
