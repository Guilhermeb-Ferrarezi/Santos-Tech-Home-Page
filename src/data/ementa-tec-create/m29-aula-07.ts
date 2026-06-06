import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Acabamento: Limpando e Montando",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Dar acabamento profissional aos personagens impressos do jogo, removendo os suportes com segurança, limpando rebarbas e montando as peças.`,
  descricao: `Depois de horas de impressão, o personagem do jogo finalmente saiu da impressora 3D. Mas ele ainda não está pronto: a peça vem com suportes (aquelas estruturas finas que seguram as partes que flutuam no ar durante a impressão) e com pequenas rebarbas, sobras de filamento que ficam grudadas nas bordas. Esta aula é sobre transformar uma impressão "crua" em um item de jogo com aparência caprichada e profissional.

O acabamento é uma etapa que muita gente ignora, mas é o que separa um trabalho amador de um trabalho de qualidade. É como na programação: o código pode funcionar, mas um código limpo, organizado e bem cuidado é muito melhor. Aqui o aluno aprende a "limpar o código" da peça física: tirar o que sobra, alisar o que está áspero e juntar as partes que foram impressas separadas.

Nesta aula o aluno trabalha com as mãos e com ferramentas simples (alicate de corte, lixa, estilete sob supervisão). Ele aprende a identificar onde ficam os suportes, a removê-los sem quebrar a peça, a lixar as marcas que sobram e a montar o personagem usando cola apropriada quando o modelo tiver mais de uma parte. O Bambu Studio entra como referência: o aluno volta ao programa para olhar a pré-visualização e entender exatamente onde os suportes foram colocados.

Ao final, cada aluno terá um personagem ou item do jogo pronto para a apresentação da próxima semana: limpo, montado e com cara de produto de verdade. É o momento em que o personagem digital, que antes só existia na tela do Roblox e do Maya, ganha forma e textura no mundo real.`,
  materiais: [
    `Computadores com Bambu Studio instalado (para revisar a pré-visualização dos suportes)`,
    `Projetor para mostrar o passo a passo do acabamento`,
    `Peças impressas dos personagens (uma por aluno, prontas da Aula 6)`,
    `Alicate de corte (cortador lateral) e pinça por aluno`,
    `Lixas de grãos diferentes (240 e 400) e uma lima pequena`,
    `Cola apropriada para PLA (cola instantânea/cianoacrilato) ou cola plástica, usada com supervisão`,
    `Luvas, óculos de proteção e um pano ou toalha de papel para limpeza`,
  ],
  conceitosChave: [
    `Suporte — estrutura fina impressa para segurar partes da peça que ficam no ar; é removida no acabamento.`,
    `Rebarba — pequena sobra de plástico nas bordas ou cantos da peça, que precisa ser cortada ou lixada.`,
    `Lixar — passar a lixa na peça para alisar marcas e deixar a superfície lisa ao toque.`,
    `Grão da lixa — número que indica o quão fina é a lixa; quanto maior o número, mais fina e suave ela é.`,
    `Montagem — juntar com cola as várias partes impressas separadamente para formar o personagem completo.`,
    `Pós-processamento — nome técnico para tudo que se faz na peça depois que ela sai da impressora.`,
    `Linha de costura (seam) — marca fininha onde cada camada começou e terminou; pode ser disfarçada lixando.`,
  ],
  treinamento: `## O que o professor precisa saber

O acabamento (ou pós-processamento) é a etapa final da impressão 3D. Toda peça sai da impressora com três coisas para resolver: os suportes (estruturas de plástico que seguraram partes salientes), as rebarbas (sobras minúsculas nas bordas) e a textura áspera de algumas superfícies. Sua função é guiar a remoção segura e o caprico final. Você não precisa ser especialista: basta seguir os passos e priorizar a segurança. As ferramentas de corte são afiadas, então estabeleça regras claras antes de começar.

Antes da aula, abra o Bambu Studio em um arquivo já fatiado da turma e localize a aba de pré-visualização (Preview) para mostrar, em cores, onde estão os suportes. Tenha as peças, os alicates, as pinças e as lixas separados por aluno. Reserve um pano para apoiar a peça enquanto se trabalha nela.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma com as peças impressas sobre a mesa. Faça a pergunta: "O que ainda falta para o personagem ficar pronto?" Deixe os alunos apontarem os suportes e as rebarbas. No projetor, abra o Bambu Studio, vá na aba Preview e mostre os suportes destacados em cor diferente. Explique que aquilo precisa sair.

Conteúdo novo guiado (15 min): demonstre, com uma peça sua, a ordem correta do acabamento. Primeiro, segure a peça com firmeza sobre o pano. Pegue o alicate de corte e remova os suportes maiores começando pelas pontas, cortando rente à peça, nunca puxando com força (puxar quebra). Depois, com a pinça, retire os pedacinhos finos. Em seguida, mostre as rebarbas e corte-as com o alicate. Por fim, pegue a lixa de grão 240, passe nas marcas com movimentos suaves, e termine com a 400 para alisar. Se a peça tiver mais de uma parte, mostre como encaixar a seco antes de colar e aplique uma gota de cola só onde encostam.

Mão na massa (25 min): cada aluno faz o acabamento da própria peça nesta ordem fixa: 1) cortar suportes grandes com o alicate; 2) tirar restos com a pinça; 3) cortar rebarbas; 4) lixar com 240 e depois 400; 5) montar com cola, se houver mais de uma parte. Circule pela sala. A regra de segurança é: cortar sempre com a lâmina apontada para longe dos dedos. A cola fica com você e é aplicada por você ou sob supervisão direta, gota a gota.

Desafio e compartilhar (10 min): proponha o desafio "antes e depois". Cada aluno mostra a peça e diz uma coisa que melhorou. Quem terminar pode tentar disfarçar a linha de costura (seam) lixando de leve. Tire fotos das peças prontas para usar na apresentação da semana 8.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação com código: "A peça funciona, mas ainda está bagunçada, com 'comentários' sobrando. Vamos limpar." Chame os suportes de "andaimes": eles seguraram a obra durante a construção e agora a obra está de pé, então os andaimes saem. Para a lixa, diga que o número grande é a lixa mais "delicada", como uma borracha macia. Reforce sempre: "corte devagar, qualidade não tem pressa".

## Erros comuns e como ajudar

O erro mais comum é puxar o suporte com a mão e arrancar um pedaço da peça; oriente sempre a cortar com o alicate primeiro. Outro erro é lixar com muita força e criar um buraco; mostre o movimento leve e circular. Alunos costumam usar cola demais e melar tudo: aplique você mesmo, uma gota por vez. Por fim, alguns esquecem de encaixar a seco antes de colar e a peça fica torta; sempre teste o encaixe sem cola primeiro.`,
  exercicios: [
    {
      titulo: `Caça aos suportes no Bambu Studio`,
      tipo: `Observação guiada no computador`,
      tempo: `7 minutos`,
      guiaProfessor: `Peça que cada aluno abra o arquivo fatiado da própria peça no Bambu Studio e vá na aba Preview. Eles devem identificar e contar onde a impressora colocou suportes. Confirme com cada um antes que comecem a cortar de verdade.`,
      atividade: `Abra seu projeto no Bambu Studio, clique na aba Preview e localize os suportes (aparecem em cor diferente). Anote em quantos lugares do personagem há suportes e em qual parte está o maior deles.`,
      gabarito: `Resposta varia por peça. Exemplo de resposta correta: "Encontrei suportes em 3 lugares: embaixo dos braços, sob o queixo e atrás das pernas. O maior está sob os braços." O importante é que o aluno tenha aberto a aba Preview e localizado os suportes destacados em cor diferente antes de cortar.`,
    },
    {
      titulo: `A ordem certa do acabamento`,
      tipo: `Organização de passos`,
      tempo: `8 minutos`,
      guiaProfessor: `Entregue os passos embaralhados (no quadro ou em papel) e peça para o aluno colocar na ordem correta. Isso fixa a sequência antes de eles encostarem na peça. Corrija em voz alta com a turma.`,
      atividade: `Coloque estes passos na ordem certa: (a) lixar com grão 240 e depois 400; (b) cortar os suportes grandes com o alicate; (c) montar com cola se houver mais de uma parte; (d) tirar os restos finos com a pinça; (e) cortar as rebarbas.`,
      gabarito: `Ordem correta: b, d, e, a, c. Ou seja: 1) cortar os suportes grandes com o alicate; 2) tirar os restos finos com a pinça; 3) cortar as rebarbas; 4) lixar com grão 240 e depois 400; 5) montar com cola, se houver mais de uma parte.`,
    },
    {
      titulo: `Remoção dos suportes na peça`,
      tipo: `Prática com a mão (com supervisão)`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe de perto. Reforce a regra: cortar com a lâmina apontada para longe dos dedos, rente à peça, sem puxar. Comece pelos suportes maiores e use a pinça para os restos. Verifique se ninguém está forçando a peça.`,
      atividade: `Usando o alicate de corte, remova os suportes do seu personagem começando pelos maiores e cortando rente à peça. Depois, com a pinça, retire os pedacinhos finos que sobraram. Não puxe com a mão.`,
      gabarito: `Peça com todos os suportes removidos, sem partes quebradas. O aluno deve ter cortado (não arrancado) os suportes e usado a pinça nos restos. Se sobrou um pontinho de plástico, tudo bem: ele será resolvido na etapa de lixar.`,
    },
    {
      titulo: `Lixar e disfarçar marcas`,
      tipo: `Acabamento de superfície`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre o movimento leve e circular. Primeiro a lixa 240 (mais grossa) nas marcas deixadas pelos suportes, depois a 400 (mais fina) para alisar. Avise para não lixar com força para não criar buracos. Quem quiser, tenta suavizar a linha de costura (seam).`,
      atividade: `Lixe as marcas que os suportes deixaram. Use primeiro a lixa de grão 240 e depois a de grão 400, com movimentos leves. Passe o dedo: a superfície precisa ficar lisa. Tente também suavizar a linha de costura do personagem.`,
      gabarito: `Superfície lisa ao toque, sem marcas grandes de suporte e sem buracos por excesso de lixa. A sequência correta é 240 primeiro (alisa o grosso) e 400 depois (deixa fino e suave). A linha de costura fica menos visível, embora possa não sumir totalmente, o que é normal.`,
    },
    {
      titulo: `Montagem final e checklist de qualidade`,
      tipo: `Montagem e autoavaliação`,
      tempo: `10 minutos`,
      guiaProfessor: `Para peças de mais de uma parte, oriente o encaixe a seco antes da cola. A cola fica com você: aplique uma gota por vez, só onde as partes encostam. Ao final, peça que cada aluno responda ao checklist em voz alta para validar a qualidade antes da apresentação.`,
      atividade: `Se o seu personagem tem mais de uma parte, encaixe sem cola primeiro para conferir, depois peça ao professor para colar com uma gota. Por fim, responda ao checklist: 1) Todos os suportes saíram? 2) As rebarbas foram cortadas? 3) A superfície está lisa? 4) As partes estão bem montadas e firmes?`,
      gabarito: `Personagem montado, firme e alinhado, sem excesso de cola. O checklist deve estar todo com resposta "sim": 1) sim, suportes removidos; 2) sim, rebarbas cortadas; 3) sim, superfície lisa após lixar; 4) sim, partes montadas e firmes. Se alguma resposta for "não", o aluno volta à etapa correspondente antes de considerar a peça pronta.`,
    },
  ],
};
