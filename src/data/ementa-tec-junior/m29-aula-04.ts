import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Materiais Brilhantes e Foscos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar as crianças a deixar cada parte do asset 3D brilhante (como metal e vidro) ou fosca (como madeira e tecido) ajustando o brilho do material no Blender.`,
  descricao: `Na aula passada nós pintamos nosso objeto com várias cores diferentes usando materiais. Mas você já reparou que, no mundo de verdade, as coisas não são só coloridas? Uma colher de metal espelha a luz e fica brilhante, enquanto uma almofada de tecido é fofinha e fosca, sem brilho nenhum. Nesta aula vamos aprender a controlar esse brilho dentro do Blender para deixar nossos assets muito mais realistas e bonitos.

O segredo está em duas propriedades simples do material: a "Roughness" (que quer dizer "aspereza" ou "quão lisinho é") e o "Metallic" (que diz se o material é de metal ou não). Quando deixamos a Roughness bem baixinha, perto de zero, a superfície fica lisa como um espelho e reflete a luz, ficando brilhante. Quando deixamos a Roughness bem alta, perto de um, a superfície fica áspera e espalha a luz, ficando fosca e sem brilho. É como a diferença entre um chão de cerâmica encerado e um tapete.

As crianças já têm um asset com várias partes coloridas. Hoje a missão delas é olhar para cada pedacinho e perguntar: "esse pedaço é de metal brilhante, de vidro, de madeira ou de tecido?". Depois, elas vão ajustar o brilho de cada material para combinar com o tipo de coisa que aquela parte representa. Um robô pode ter o corpo de metal brilhante e os olhos de vidro; uma casinha pode ter telhado fosco de telha e janelas brilhantes de vidro.

O professor vai mostrar tudo no projetor antes, comparando exemplos prontos lado a lado: o mesmo objeto fosco e brilhante. Assim as crianças veem na prática a diferença antes de mexer no próprio trabalho. No fim, cada uma compartilha qual parte ficou mais legal com o novo acabamento.`,
  materiais: [
    `Computadores com o Blender já aberto e o arquivo do asset de cada criança salvo na pasta`,
    `Projetor ligado e conectado ao computador do professor para a demonstração`,
    `Dois exemplos prontos do mesmo objeto: um todo fosco e outro todo brilhante, para comparar`,
    `Objetos de verdade na mesa: uma colher de metal, um copo de vidro, um pedaço de madeira e um paninho`,
    `Cartões impressos com as palavras "Roughness", "Metallic", "Brilhante" e "Fosco" para colar no quadro`,
    `Lista impressa das partes do asset de cada criança, para marcar qual material cada uma vai usar`,
  ],
  conceitosChave: [
    `Material — a "roupa" que colocamos num pedaço do objeto 3D para dizer a cor e como ele reflete a luz.`,
    `Roughness (aspereza) — o controle que diz se a superfície é lisinha e brilhante ou áspera e fosca.`,
    `Brilhante — quando a superfície reflete a luz, como um espelho, um metal ou um vidro.`,
    `Fosco — quando a superfície não reflete a luz e fica "apagada", como a madeira ou o tecido.`,
    `Metallic (metálico) — o botão que avisa o Blender que aquela parte é feita de metal de verdade.`,
    `Reflexo — a luz que "bate e volta" numa superfície brilhante, deixando ela parecer molhada ou espelhada.`,
    `Base Color (cor base) — a cor principal do material, que continua a mesma sendo ela brilhante ou fosca.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Blender para dar esta aula. Tudo gira em torno de dois controles do painel de material. No Blender, todo material novo usa um "cérebro" chamado Principled BSDF. Dentro dele existem dois deslizadores importantes: o "Roughness" e o "Metallic". O Roughness vai de 0,000 até 1,000. Perto de 0 a superfície fica lisa e brilhante (reflete a luz); perto de 1 fica áspera e fosca (sem brilho). O Metallic também vai de 0 a 1: deixe em 0 para plástico, madeira e tecido; coloque em 1 para metal de verdade. Vidro fica bonito com Roughness baixo e Metallic em 0. Treine isso uma vez sozinho antes da aula para chegar confiante.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Abra os objetos de verdade na mesa. Passe a colher de metal e o paninho de mão em mão. Pergunte: "qual brilha e qual não brilha?". Relembre que na aula passada demos cores; hoje vamos dar brilho. Mostre no projetor o asset de exemplo já colorido.

15 min — Conteúdo novo guiado. No seu Blender, clique na parte do objeto que quer mudar (clique esquerdo nela na janela 3D). No painel da direita, clique no ícone de bolinha vermelha xadrez, que é a aba "Material Properties". Você verá o material já criado. Localize a linha "Roughness". Clique no número e arraste para a esquerda até quase 0 — mostre como a parte fica brilhante. Depois arraste para a direita até quase 1 — mostre como fica fosca. Faça isso devagar, no projetor, comentando em voz alta. Em seguida mostre o "Metallic": coloque em 1 numa parte e diga "agora virou metal!". Para ver o brilho de verdade, mude o modo de visualização no canto superior direito da janela 3D, clicando na terceira bolinha (Material Preview).

25 min — Mão na massa. Cada criança abre o próprio asset. Com a lista de partes na frente, elas decidem o material de cada pedaço. Para cada parte: clicam na parte, vão na aba Material Properties (bolinha xadrez), acham o Roughness e arrastam. Quem quiser metal, sobe o Metallic. Circule pela sala ajudando a achar o painel certo. Lembre sempre de estar no modo Material Preview para enxergar o brilho.

10 min — Desafio e compartilhar. Desafio: deixar pelo menos uma parte bem brilhante (vidro ou metal) e uma parte bem fosca (madeira ou tecido) no mesmo objeto. Cada criança gira o asset e mostra para a turma a parte que mais gostou.

## Como explicar para crianças

Use comparações do dia a dia. Diga: "imagina uma maçã molhada de chuva, ela brilha; e uma maçã sequinha, ela não brilha. O Roughness é o paninho que seca a superfície". Quanto mais você "seca" (Roughness alto), menos brilho. Chame o Metallic de "botão mágico que transforma a coisa em metal". Mostre, não só fale: deixe-os verem a mudança acontecer na tela. Peça para tocarem nos objetos de verdade e adivinharem o Roughness "alto" ou "baixo".

## Erros comuns e como ajudar

O erro mais comum é a criança não ver o brilho mudar porque está no modo de visualização errado. Ajude clicando na bolinha "Material Preview" no canto superior direito. Outro erro é mexer no Roughness sem ter clicado na parte certa, mudando o material errado; sempre confira se a parte certa está selecionada (ela fica com a borda laranja). Algumas crianças arrastam demais e o número some; mostre que dá para clicar no número e digitar, por exemplo, 0,1. Por fim, evite confundir Metallic com cor: lembre que a cor continua a mesma, só o brilho muda.`,
  exercicios: [
    {
      titulo: `Brilha ou não brilha?`,
      tipo: `Observação e conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Espalhe os objetos de verdade na mesa (colher de metal, copo de vidro, madeira, paninho). Peça para cada criança pegar um e dizer se ele brilha ou não. Conecte cada resposta à ideia de Roughness alto ou baixo.`,
      atividade: `Pegue um objeto da mesa, olhe bem para ele e diga para a turma: "esse objeto BRILHA" ou "esse objeto é FOSCO".`,
      gabarito: `Colher de metal e copo de vidro = brilhantes (Roughness baixo). Madeira e paninho = foscos (Roughness alto). Não existe resposta errada na observação, mas o professor confirma a classificação correta de cada item.`,
    },
    {
      titulo: `Achando o controle do brilho`,
      tipo: `Prática guiada no Blender`,
      tempo: `5 minutos`,
      guiaProfessor: `Faça junto com a turma, passo a passo, no projetor. Garanta que todos acharam a aba de material (bolinha vermelha xadrez) e a linha Roughness antes de seguir.`,
      atividade: `No seu Blender, clique numa parte do objeto. Depois clique na aba "Material Properties" (a bolinha vermelha xadrez na direita) e encontre a palavra "Roughness".`,
      gabarito: `A criança deve ter selecionado uma parte (borda laranja), aberto a aba Material Properties e localizado a linha Roughness com um número entre 0,000 e 1,000. O professor verifica olhando a tela de cada uma.`,
    },
    {
      titulo: `Deixando uma parte brilhante`,
      tipo: `Aplicação no asset`,
      tempo: `6 minutos`,
      guiaProfessor: `Lembre a turma de estar no modo "Material Preview" (terceira bolinha no canto superior direito) para ver o brilho. Ajude quem não enxergar a mudança.`,
      atividade: `Escolha uma parte do seu objeto que deveria ser de vidro ou metal. Clique nela, ache o Roughness e arraste o número para perto de 0 para deixá-la brilhante.`,
      gabarito: `A parte escolhida fica com Roughness próximo de 0 (por exemplo 0,1) e visivelmente brilhante no modo Material Preview, refletindo a luz. Para metal, o Metallic também pode estar em 1.`,
    },
    {
      titulo: `Deixando uma parte fosca`,
      tipo: `Aplicação no asset`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce a comparação: madeira e tecido não brilham. Confira se a criança clicou na parte certa antes de mudar o Roughness, para não alterar o material errado.`,
      atividade: `Escolha uma parte que deveria ser de madeira ou tecido. Clique nela, ache o Roughness e arraste o número para perto de 1 para deixá-la fosca, sem brilho.`,
      gabarito: `A parte escolhida fica com Roughness próximo de 1 (por exemplo 0,9) e sem brilho, com aparência "apagada" no modo Material Preview. O Metallic deve continuar em 0.`,
    },
    {
      titulo: `Desafio do material misturado`,
      tipo: `Desafio criativo e compartilhar`,
      tempo: `8 minutos`,
      guiaProfessor: `Este é o desafio final. Cada criança precisa ter no mesmo objeto pelo menos uma parte brilhante e uma fosca. Ao final, peça para girarem o asset e mostrarem para a turma.`,
      atividade: `Deixe o seu asset com pelo menos UMA parte bem brilhante (vidro ou metal) e UMA parte bem fosca (madeira ou tecido). Depois gire o objeto e mostre para a turma qual parte você mais gostou.`,
      gabarito: `O asset final tem ao menos uma parte com Roughness baixo (brilhante) e uma com Roughness alto (fosca), criando contraste realista. A criança consegue apontar e nomear cada parte ("essa é de metal", "essa é de madeira") ao compartilhar.`,
    },
  ],
};
