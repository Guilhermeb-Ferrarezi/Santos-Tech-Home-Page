import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Acendendo as luzes da cena",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a mudar a hora do dia no Roblox para deixar a cena clara ou escura e adicionar uma luz pequena (PointLight) perto de um objeto especial.`,
  descricao: `Nesta aula as crianças vão descobrir que toda cena do Roblox tem um Sol de mentirinha que ilumina tudo. Assim como no mundo real o dia tem manhã, tarde e noite, no Roblox também dá para escolher a hora do dia. Quando mudamos essa hora, a cena inteira fica mais clara ou mais escura, e até as sombras mudam de lugar. É uma maneira mágica de transformar o clima do cenário sem mover nenhum objeto.

O ponto principal da aula é o controle chamado ClockTime (a hora do relógio do jogo). Ele vai de 0 até 24, igual às horas de um dia inteiro. Por volta de 12 é meio-dia, bem claro e ensolarado; por volta de 0 ou 24 é meia-noite, tudo escuro. As crianças vão deslizar esse número e ver a cena toda mudar na frente dos olhos, como se estivessem girando o tempo com a mão.

Depois de brincar com o Sol, cada criança vai aprender que existem luzinhas menores que a gente pode colocar onde quiser. A luz desta aula chama PointLight, que é uma luz que brilha para todos os lados, como uma lâmpada ou uma fogueira. Elas vão escolher um objeto especial da cena (uma fogueira, uma lanterna, um cristal mágico) e grudar uma PointLight bem perto dele para que ele pareça acender de verdade.

No fim, a turma vai entender que luz não serve só para enxergar: luz cria sentimento. Uma cena clara parece alegre e segura; uma cena escura com uma luzinha laranja parece misteriosa e aconchegante. Os pequenos artistas saem da aula sabendo que podem contar histórias só mudando a luz do seu mundo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um para cada criança, já com a cena 3D da semana carregada`,
    `Projetor ou TV grande ligada ao computador do professor para demonstrar cada passo`,
    `Uma cena de exemplo pronta com objetos que combinam com luz (fogueira, lanterna, poste, cristal)`,
    `Cartão impresso com a escala da hora do dia: 6 = manhã, 12 = meio-dia, 18 = tarde, 0 = meia-noite`,
    `Folhas de papel e lápis de cor para as crianças desenharem como ficou a luz da cena delas`,
    `Lista de cores de luz sugeridas (laranja de fogo, azul de noite, branco de lâmpada) em cartaz`,
  ],
  conceitosChave: [
    `Sol da cena — é a luz grande que ilumina o mundo inteiro do Roblox, igual ao Sol de verdade no céu.`,
    `Hora do dia (ClockTime) — um número de 0 a 24 que diz se é manhã, tarde ou noite na sua cena.`,
    `Lighting — a caixa de ferramentas onde ficam guardados os controles da luz e do céu da cena.`,
    `PointLight — uma luzinha pequena que brilha para todos os lados, parecida com uma lâmpada ou uma fogueira.`,
    `Brilho (Brightness) — o número que diz se a luz é fraquinha ou bem forte e potente.`,
    `Cor da luz (Color) — a tinta da luz; pode ser laranja de fogo, azul de noite ou branca de lâmpada.`,
    `Alcance (Range) — o tamanho da bolha de luz; diz até onde longe a luzinha consegue iluminar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Roblox para dar esta aula. Existem só duas ideias para dominar antes. A primeira é a hora do dia, controlada por uma propriedade chamada ClockTime, que vive dentro de um item chamado Lighting (no painel Explorer, do lado direito). A segunda é a PointLight, uma luzinha que você adiciona dentro de uma peça (Part) clicando no sinal de mais. Faça o passo a passo uma vez sozinho antes da aula para se sentir seguro. Se a cena ficar toda preta e ninguém enxergar nada, é só voltar o ClockTime para 12 (meio-dia) que tudo clareia.

## Passo a passo da aula (ritmo 10/15/25/10)

AQUECIMENTO (10 min): Pergunte às crianças: "De manhã é claro ou escuro? E de noite?". Apague a luz da sala por um segundo e acenda de novo para mostrar a diferença. No projetor, abra a cena de exemplo e diga que hoje vamos virar o tempo do nosso mundo com a mão.

CONTEÚDO NOVO GUIADO (15 min): No projetor, mostre o painel Explorer (canto direito). Clique no item Lighting. Embaixo abre o painel Properties. Encontre a linha ClockTime. Clique no número e digite 12: a cena fica clara, é meio-dia. Digite 18: vira tarde, fica dourada. Digite 0: vira noite, fica escura. Repita devagar dizendo cada hora. Depois mostre a luzinha: clique numa Part da cena (uma fogueira), passe o mouse e clique no sinal de mais (+) que aparece, role a lista e escolha PointLight. Aponte que apareceu uma bolha de luz. Mostre as propriedades Brightness (brilho), Color (cor) e Range (alcance).

MÃO NA MASSA (25 min): Agora cada criança no seu computador. Peça que cliquem em Lighting e troquem o ClockTime: primeiro manhã (6), depois meio-dia (12), depois noite (0). Deixe que escolham qual hora gostam mais para a cena delas. Em seguida, cada uma escolhe um objeto especial, clica nele, clica no sinal de mais (+) e adiciona uma PointLight. Ajude a mudar a Color para laranja se for fogo, e a aumentar o Brightness se a luz estiver fraca. Circule pela sala elogiando e ajudando quem travar.

DESAFIO + COMPARTILHAR (10 min): Desafio: "Deixe a cena na hora da noite e faça sua luzinha brilhar forte para parecer uma fogueira no escuro". Depois, cada criança gira a câmera e mostra para a turma como ficou a luz dela. Todos batem palma.

## Como explicar para crianças

Use a analogia do interruptor da casa: "O ClockTime é o botão gigante que liga o dia e a noite do nosso mundo inteiro". Para a PointLight, diga: "É uma lâmpada de bolso que a gente cola perto de uma coisa para ela brilhar". Explique o Brightness assim: "número pequeno é luz de vela, número grande é luz de holofote". Para a cor, use comida e fogo: "laranja é cor de fogueira, azul é cor de noite gelada". Sempre mostre primeiro no projetor e só depois peça para fazerem, porque criança aprende vendo e copiando.

## Erros comuns e como ajudar

O erro mais comum é a cena ficar toda preta e a criança achar que quebrou tudo: é só voltar o ClockTime para 12. Outro erro é clicar no nome errado e adicionar a luz no lugar errado; oriente a clicar primeiro no objeto certo na cena antes de apertar o mais (+). Algumas crianças vão digitar 100 no ClockTime: lembre que só vai até 24, igual às horas do dia. Quando a PointLight não aparecer brilhando, quase sempre o Brightness está baixo ou o Range é pequeno; aumente os dois. E se a luz ficar branca demais, troque a Color para deixar bonita.`,
  exercicios: [
    {
      titulo: `Que horas são na nossa cena?`,
      tipo: `Pergunta e resposta oral`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça as perguntas em roda, antes de tocar no computador. Aceite respostas com as próprias palavras das crianças e celebre cada acerto.`,
      atividade: `O professor mostra três fotos da mesma cena: uma clara, uma dourada e uma escura. Pergunta para cada uma: "Essa é manhã, tarde ou noite?".`,
      gabarito: `Cena clara e bem iluminada = meio-dia (ClockTime perto de 12). Cena dourada e mais baixa = tarde (perto de 18). Cena escura = noite (perto de 0 ou 24). O importante é a criança ligar claro com dia e escuro com noite.`,
    },
    {
      titulo: `Girando o tempo do meu mundo`,
      tipo: `Prática guiada no computador`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor onde fica o item Lighting e a linha ClockTime. Faça junto com a turma, devagar, esperando todos acharem o número.`,
      atividade: `Cada criança clica em Lighting no painel Explorer, acha o ClockTime e troca o número para 6, depois 12, depois 0, observando a cena mudar a cada vez.`,
      gabarito: `Com 6 a cena fica em luz de manhã; com 12 fica bem clara de meio-dia; com 0 fica escura de noite. A criança acertou se conseguiu digitar os três números e percebeu a cena clareando e escurecendo.`,
    },
    {
      titulo: `Colando minha luzinha`,
      tipo: `Mão na massa individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Lembre a turma de clicar primeiro no objeto certo e só depois no sinal de mais (+). Passe de mesa em mesa conferindo se a PointLight ficou dentro do objeto.`,
      atividade: `Cada criança escolhe um objeto especial da cena (fogueira, lanterna ou cristal), clica nele, aperta o sinal de mais (+) e adiciona uma PointLight.`,
      gabarito: `A PointLight deve aparecer dentro do objeto escolhido, no painel Explorer, fazendo uma bolha de luz ao redor dele. Está correto quando o objeto parece brilhar.`,
    },
    {
      titulo: `Deixando a luz do jeito certo`,
      tipo: `Ajuste de propriedades`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre as três propriedades no projetor: Brightness, Color e Range. Ajude quem confundir os campos. Sugira laranja para fogo.`,
      atividade: `A criança seleciona a sua PointLight e muda o Brightness para mais forte, escolhe uma Color combinando com o objeto e aumenta um pouco o Range.`,
      gabarito: `Brightness mais alto deixa a luz mais forte; a Color combina com o objeto (laranja para fogueira, branco para lâmpada); Range maior espalha a luz mais longe. Correto quando a luz ficou visível e com a cor escolhida.`,
    },
    {
      titulo: `Fogueira no escuro`,
      tipo: `Desafio criativo`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o desafio final que junta tudo. Deixe a criança decidir, mas confira se ela mudou tanto o ClockTime quanto a PointLight. Termine com cada um mostrando a cena para a turma.`,
      atividade: `Deixe a cena na hora da noite (ClockTime perto de 0) e faça a sua PointLight laranja brilhar forte, para o objeto parecer uma fogueira acesa no escuro. Depois mostre para a turma.`,
      gabarito: `Resposta esperada: ClockTime perto de 0 ou 24 (cena escura), PointLight com Color laranja e Brightness alto, criando um ponto de luz quente no meio do escuro. Acertou quem deixou a cena escura e a luzinha bem visível e aconchegante.`,
    },
  ],
};
