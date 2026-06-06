import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Criando o clima certo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Dar emoção à cena do Roblox escolhendo a cor do céu, a neblina e o brilho para criar climas como ensolarado, misterioso ou mágico.`,
  descricao: `Nesta aula as crianças descobrem que uma cena 3D não conta só com os modelos: o clima também fala com quem visita o mundo. Um céu azul claro e cheio de luz passa a sensação de um dia alegre e seguro. Um céu acinzentado com neblina densa deixa tudo misterioso, como uma floresta encantada à noite. Já um céu colorido com brilho forte cria um clima mágico, de sonho. O segredo é que, no Roblox Studio, mudar poucas coisas muda a emoção inteira da cena.

A ferramenta principal de hoje é o serviço chamado Lighting, que fica na janela Explorer. É lá que ajustamos a cor da luz do ambiente, o brilho do sol e a neblina (Fog). Também vamos usar o objeto Atmosphere, que deixa o ar com aquela bruma bonita ao fundo, parecida com a paisagem real quando olhamos montanhas distantes. Cada propriedade tem um efeito visível na hora, e é por isso que esta aula é tão divertida: a criança mexe num número ou numa cor e a cena inteira responde na frente dos olhos dela.

O foco do mês é montar a cena no Roblox, e na semana passada as crianças já deixaram a cena bonita com cores e detalhes. Agora vamos um passo além: escolher um clima que combine com o tema do mundo. Se o tema é um castelo assombrado, o clima misterioso reforça o medinho gostoso. Se é uma ilha de férias, o clima ensolarado deixa tudo convidativo. As crianças aprendem a tomar essa decisão de design pensando na história que querem contar.

O professor não precisa ser especialista em Roblox para conduzir esta aula. Tudo é feito clicando em painéis e arrastando barrinhas de cor. O importante é demonstrar no projetor, deixar as crianças experimentarem bastante e celebrar cada descoberta. Errar a cor e achar feio também é aprendizado: basta voltar atrás e tentar de novo.`,
  materiais: [
    `Computadores com o Roblox Studio aberto, um por criança ou em duplas, já com a cena da semana anterior salva`,
    `Projetor ou TV grande conectado ao computador do professor para demonstrar cada passo`,
    `Três cenas-exemplo prontas pelo professor: uma ensolarada, uma misteriosa e uma mágica, para mostrar o efeito do clima`,
    `Cartões de papel com palavras de clima (ensolarado, misterioso, mágico, nevoento, pôr do sol) para as crianças sortearem`,
    `Folha de anotação simples para cada criança escrever a cor do céu e o nível de neblina que escolheu`,
    `Lápis de cor ou giz de cera para a criança rabiscar antes a cor do céu que imagina`,
  ],
  conceitosChave: [
    `Clima da cena — é a sensação que o lugar passa, como alegre, assustador ou mágico, feita com cor e luz.`,
    `Lighting — é a caixinha mágica do Roblox onde mexemos na luz, na cor do céu e na neblina de toda a cena.`,
    `Neblina (Fog) — é a fumacinha que deixa o longe meio escondido e dá clima de mistério.`,
    `Atmosphere — é o ar com brumazinha ao fundo, parecido com quando olhamos montanhas bem distantes.`,
    `Cor da luz do ambiente — é a tinta invisível que pinta tudo, deixando a cena mais quente, mais fria ou mais colorida.`,
    `Brightness (brilho) — é o quanto a luz do sol está forte; muito alto clareia tudo, muito baixo escurece.`,
    `ClockTime — é o relógio do céu, que escolhe se é dia, tardezinha ou noite na nossa cena.`,
  ],
  treinamento: `## O que o professor precisa saber

No Roblox Studio, todo o clima da cena vive dentro de um item chamado Lighting, que aparece na janela Explorer (lista do lado direito). Ao clicar em Lighting, a janela Properties (de baixo, à direita) mostra várias propriedades. As que vamos usar hoje são: Ambient e OutdoorAmbient (cor da luz que banha tudo), Brightness (força do sol), FogColor e FogEnd (a neblina), e ClockTime (a hora do dia). Dentro de Lighting também é possível adicionar um objeto Atmosphere, que cria a bruma bonita ao fundo. Não decore números: o segredo é mexer, olhar a cena e ajustar. Antes da aula, abra sua cena e teste cada propriedade uma vez para ganhar confiança.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor as três cenas-exemplo (ensolarada, misteriosa, mágica) e pergunte: "Como vocês se sentem em cada uma?". Faça as crianças sortearem um cartão de clima e desenharem rápido, no papel, a cor de céu que imaginam para aquele clima.

Conteúdo novo guiado (15 min): No seu computador, clique em Lighting no Explorer. Na janela Properties, mostre a propriedade ClockTime: digite 14 para dia, depois 18 para tardezinha, depois 0 para noite, e deixe que vejam a mudança. Em seguida mostre Brightness: aumente para 3 e diminua para 1. Depois mude OutdoorAmbient clicando na barrinha de cor e escolhendo um tom. Por fim, ative a neblina: na propriedade FogEnd, troque o número grande por algo como 200 para o longe sumir, e mude FogColor para combinar com o céu. Para mostrar a Atmosphere: clique com o botão direito em Lighting, escolha Insert Object e depois Atmosphere; ajuste a propriedade Density para 0.3.

Mão na massa (25 min): Cada criança abre a própria cena e escolhe um clima. Oriente o caminho: clicar em Lighting, mexer em ClockTime, depois Brightness, depois OutdoorAmbient e FogColor. Circule pela sala dizendo "tenta deixar mais escuro" ou "põe mais neblina". Peça que anotem na folha a cor do céu e o número da neblina que usaram. Lembre sempre de salvar com Ctrl+S.

Desafio e compartilhar (10 min): Lance o desafio: "Deixe sua cena com um clima que ninguém adivinha de primeira". Cada criança mostra a cena no projetor e a turma tenta adivinhar o clima (ensolarado, misterioso ou mágico). Comemore cada acerto e cada escolha corajosa de cor.

## Como explicar para crianças

Use analogias do dia a dia. Diga que o Lighting é como o interruptor e a janela da casa juntos: ele decide se está de dia ou de noite e que cor de luz entra. Compare a neblina (Fog) com aquele vapor do banho quente que embaça o espelho e esconde o que está longe. Explique a cor da luz do ambiente como uns óculos coloridos invisíveis que pintam tudo de uma vez. Fale que escolher o clima é como escolher a música de um filme: a mesma cena fica alegre com uma música e assustadora com outra. Sempre mostre primeiro, depois deixe a criança repetir no computador dela.

## Erros comuns e como ajudar

A criança some com a cena inteira porque colocou Brightness muito alto (tudo branco) ou ClockTime à meia-noite sem luz (tudo preto). Ajuda: volte ClockTime para 14 e Brightness para 2. Outro erro é clicar em Workspace em vez de Lighting; mostre de novo o nome certo na lista. Muitas vezes a neblina fica forte demais e some com os modelos: aumente o número de FogEnd para o longe voltar a aparecer. Há quem esqueça de salvar; reforce o Ctrl+S a cada descoberta. E se a criança achar a cor feia, lembre que basta clicar na barrinha de cor e escolher outra, sem medo de tentar.`,
  exercicios: [
    {
      titulo: `Que clima é esse?`,
      tipo: `Observação e discussão em roda`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor as três cenas-exemplo, uma de cada vez. Para cada uma, pergunte que sentimento ela passa e por quê. Aceite respostas variadas e conecte cada sensação à cor do céu e à neblina.`,
      atividade: `Olhe cada cena que o professor mostrar e diga em voz alta: esse clima parece alegre, misterioso ou mágico? Aponte o que na imagem te deu essa sensação.`,
      gabarito: `Cena com céu azul claro e luz forte = ensolarado e alegre. Cena com céu acinzentado e muita neblina = misterioso. Cena com céu colorido e brilho intenso = mágico. As pistas certas são a cor do céu, a quantidade de neblina e a força do brilho.`,
    },
    {
      titulo: `Mudando a hora do céu`,
      tipo: `Prática guiada individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que todos cliquem em Lighting no Explorer e achem a propriedade ClockTime em Properties. Conduza a turma a digitar três valores e observar a mudança a cada um.`,
      atividade: `Clique em Lighting. Na janela Properties, ache ClockTime e digite 14, depois 18, depois 0. Observe a cena mudar de dia para tardezinha para noite. Escolha o que mais combina com seu mundo.`,
      gabarito: `ClockTime 14 deixa a cena em dia claro, 18 cria a tardezinha alaranjada e 0 deixa noite escura. O caminho correto é Explorer maior que Lighting maior que Properties maior que ClockTime. Não existe resposta única: vale a hora que a criança escolher e souber explicar.`,
    },
    {
      titulo: `Pintando a luz da cena`,
      tipo: `Prática guiada com cor`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre como clicar na barrinha de cor da propriedade OutdoorAmbient para abrir o seletor de cores. Oriente a escolher uma cor que reforce o clima desejado e a comparar antes e depois.`,
      atividade: `Em Lighting, ache a propriedade OutdoorAmbient. Clique na barrinha de cor e escolha um tom: azul para frio, laranja para quente, roxo para mágico. Veja como a cena inteira fica pintada por essa cor.`,
      gabarito: `Tons azuis dão sensação fria e calma, laranjas dão sensação quente e aconchegante, roxos e rosas dão clima mágico. O acerto é a criança trocar a cor pela barrinha de OutdoorAmbient e perceber que a cor banha toda a cena de uma vez.`,
    },
    {
      titulo: `Ligando a neblina misteriosa`,
      tipo: `Prática aplicada`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a turma às propriedades FogEnd e FogColor em Lighting. Explique que diminuir FogEnd aproxima a neblina e que FogColor deve combinar com o céu. Lembre que neblina forte demais esconde os modelos.`,
      atividade: `Em Lighting, mude FogEnd para 200 e veja o longe sumir na neblina. Depois clique em FogColor e escolha uma cor parecida com a do seu céu. Ajuste FogEnd até a cena ficar com mistério mas ainda dar para ver seus modelos.`,
      gabarito: `FogEnd menor (como 100 ou 200) traz a neblina para perto e cria mistério; FogEnd maior (como 1000) afasta a neblina. FogColor deve combinar com o céu para parecer natural. Acerto: a cena fica enevoada mas os modelos principais continuam visíveis. Se sumiu tudo, aumentar FogEnd resolve.`,
    },
    {
      titulo: `Meu clima secreto`,
      tipo: `Desafio criativo e apresentação`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança combina ClockTime, Brightness, OutdoorAmbient, FogColor e FogEnd para montar um clima coerente com o tema da cena. Depois apresenta no projetor e a turma adivinha o clima. Incentive justificar as escolhas e a salvar com Ctrl+S.`,
      atividade: `Escolha um clima secreto (ensolarado, misterioso ou mágico) e ajuste em Lighting: a hora, o brilho, a cor da luz e a neblina, tudo combinando. Não conte o clima para ninguém. Apresente sua cena e deixe a turma adivinhar.`,
      gabarito: `Um clima bem-feito combina as escolhas: ensolarado usa ClockTime de dia, Brightness alto, luz azul clara e pouca neblina; misterioso usa hora de tardezinha ou noite, brilho baixo, luz acinzentada e FogEnd pequeno; mágico usa cores fortes como roxo e rosa com brilho alto. Acerto: a turma consegue adivinhar o clima porque as propriedades se reforçam, e a criança consegue explicar por que escolheu cada ajuste. A cena deve estar salva com Ctrl+S.`,
    },
  ],
};
