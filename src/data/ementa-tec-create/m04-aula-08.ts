import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Meu Personagem na Mão",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o entregável do mês — remover a peça da mesa de impressão, retirar os suportes com segurança, fazer o acabamento básico e apresentar o personagem do próprio jogo impresso para a turma.`,
  descricao: `Esta é a aula que fecha o mês inteiro. Durante quatro semanas o aluno aprendeu a abrir o Orca Slicer, explorar a mesa virtual, trazer o modelo do Maya, importar o próprio personagem, configurar suportes e preenchimento, fatiar, prever a impressão e finalmente imprimir de verdade. Agora chega o momento mais esperado: pegar a peça pronta na mão, deixá-la bonita e mostrar para os colegas. É a recompensa concreta de todo o trabalho digital.

O foco desta aula sai um pouco da tela e vai para a bancada. O aluno vai retirar a peça da chapa de impressão, separar com cuidado os suportes que seguraram as partes que ficavam no ar e fazer o acabamento básico — lixar pequenas rebarbas, limpar os pontos onde o suporte estava grudado e conferir os detalhes do personagem. É um trabalho manual que exige paciência e capricho, parecido com terminar uma maquete ou um artesanato. O computador volta a aparecer apenas para o aluno reabrir o arquivo no Orca Slicer e comparar a peça real com a pré-visualização que ele mesmo gerou na aula anterior.

Como esta é a última aula do mês, a parte de compartilhar ganha mais importância. Cada aluno vai apresentar o seu personagem impresso: dizer qual jogo ele criou, por que escolheu aquele modelo, o que foi mais difícil de imprimir e o que faria diferente da próxima vez. Essa roda de apresentação valoriza o esforço, treina a comunicação e fecha o ciclo modelar, fatiar e imprimir com um momento de orgulho coletivo.

Importante: a remoção de suportes e a lixa envolvem ferramentas com pontas e arestas. O professor precisa reforçar a segurança o tempo todo — luvas quando houver, alicate apontado para longe do corpo, óculos se a peça for dura e cuidado com as mãos dos colegas ao redor. No fim, cada aluno leva o personagem para casa, encerrando o entregável do mês: imprimir e levar pra casa.`,
  materiais: [
    `Peças impressas de cada aluno (os personagens do próprio jogo, ainda com os suportes), retiradas da impressora antes da aula ou ao vivo se houver tempo`,
    `Computadores com o Orca Slicer aberto e o arquivo de cada aluno carregado, para comparar a peça real com a pré-visualização da fatia`,
    `Projetor para o professor demonstrar a remoção de suporte e o acabamento numa peça de exemplo`,
    `Kit de acabamento por bancada: alicate de corte (ou de bico), espátula plástica para soltar a peça da chapa, lixas de grão fino (240 e 400) e um pincel para tirar o pó`,
    `Equipamento de segurança: luvas, óculos de proteção e um pano ou tapete para apoiar a peça enquanto se trabalha`,
    `Arquivo de exemplo "personagem-acabado.3mf" mostrando a peça já limpa e lixada, para servir de referência de qualidade`,
    `Saquinhos ou caixinhas para cada aluno guardar e transportar o personagem com segurança até em casa`,
  ],
  conceitosChave: [
    `Mesa de impressão (chapa de construção) — a placa onde a peça é impressa camada por camada; a peça precisa ser solta dela com cuidado, sem quebrar.`,
    `Suporte — estrutura extra que o Orca Slicer cria para segurar partes do modelo que ficam no ar; é descartável e deve ser removida no acabamento.`,
    `Brim (aba de aderência) — borda fininha impressa em volta da base da peça para ela não soltar da mesa; também é retirada no fim.`,
    `Acabamento — etapa manual de limpar, lixar e ajustar a peça impressa para ela ficar bonita e sem rebarbas.`,
    `Rebarba — pedacinho de plástico que sobra onde o suporte estava grudado; some com a lixa de grão fino.`,
    `Marca de suporte — pequena cicatriz na superfície da peça onde o suporte tocava; é normal e fica menos visível depois de lixar.`,
    `Entregável — o resultado final do mês que o aluno leva para casa; aqui é o personagem do próprio jogo impresso e acabado.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em impressão 3D para dar esta aula. O grosso do trabalho é manual: soltar a peça da mesa, tirar os suportes e lixar. O Orca Slicer entra só como apoio — o aluno reabre o próprio arquivo para comparar a peça real com a pré-visualização. Antes da aula, faça você mesmo o acabamento de uma peça de exemplo para sentir a dificuldade e saber onde os suportes resistem mais. Tenha em mãos o alicate de corte, a espátula plástica e as lixas de grão fino (240 e 400). Lembre-se: o suporte é descartável, a peça não — todo cuidado é com a peça. E reforce segurança o tempo todo, pois há pontas e arestas envolvidas.

## Passo a passo da aula

Aquecimento e revisão (10 min): com as peças ainda na chapa (ou já soltas) sobre a bancada, pergunte à turma: "Lembram o que era o suporte e por que ele apareceu?". Retome rapidamente que o suporte segura o que ficava no ar e que agora vamos removê-lo. Mostre no projetor o arquivo de exemplo "personagem-acabado.3mf" para a turma ver onde querem chegar.

Conteúdo novo guiado (15 min): faça a demonstração numa peça de exemplo, passo a passo.
1. Soltar da mesa: use a espátula plástica entrando por baixo de uma quina da peça, empurrando devagar até soltar. Nunca force com faca de metal.
2. Identificar suportes: mostre que o suporte é mais frágil e tem aparência de "treliça"; o corpo do personagem é maciço.
3. Remover suportes: com o alicate de corte, vá cortando os pontos de contato de fora para dentro, sempre com a ponta apontada para longe do corpo. Puxe os pedaços grandes com a mão.
4. Tirar o brim: a aba fininha em volta da base sai puxando ou cortando rente.
5. Lixar: passe a lixa 240 nas rebarbas e depois a 400 para alisar. Limpe o pó com o pincel.
6. Comparar no Orca Slicer: abra o arquivo do aluno, entre na aba Preview (pré-visualização) e mostre que os suportes que ele removeu são exatamente os que aparecem em cor diferente na tela.

Mão na massa (25 min): cada aluno faz o acabamento da própria peça na bancada, com o kit. Circule reforçando segurança e ajudando nos suportes teimosos. Quem terminar pode lixar mais fino e comparar a peça com a pré-visualização no Orca Slicer.

Desafio e compartilhar (10 min): cada aluno apresenta o personagem em uma frase — qual jogo é, o que foi mais difícil de imprimir. Guardem as peças nos saquinhos para levar pra casa.

## Como explicar de forma clara

Use comparações concretas. O suporte é "o andaime da obra: serviu para construir, agora a gente derruba". A espátula é "a faca de bolo que entra por baixo sem machucar". Lixar é "passar a borracha na borda áspera até ficar lisinha". A marca de suporte é "a cicatriz de onde o andaime estava — é normal, todo modelo tem". Diga que paciência aqui vale mais que pressa: peça quebrada não volta. E celebre: "isso que você está segurando começou como um desenho no computador".

## Erros comuns e como ajudar

A peça quebra ao soltar: o aluno forçou demais ou usou ferramenta de metal na chapa. Mostre a espátula plástica entrando devagar por vários lados. O aluno corta a peça achando que é suporte: pare e mostre a diferença — suporte é treliça frágil, corpo é maciço; na dúvida, comparem com a pré-visualização no Orca Slicer. Sobram rebarbas grandes: faltou cortar rente; volte com o alicate antes de lixar. Lixa demais e some o detalhe: lembre que lixa fina, leve e em um só sentido basta. Alicate apontado para o corpo ou para o colega: corrija na hora, é a regra de segurança principal. Aluno frustrado com a marca de suporte: normalize — toda impressão tem, e lixar disfarça. Por fim, garanta que cada peça vá para o saquinho identificada, para ninguém trocar ou esquecer ao levar pra casa.`,
  exercicios: [
    {
      titulo: `Soltando a peça da mesa`,
      tipo: `Prática no computador e na bancada`,
      tempo: `8 min`,
      guiaProfessor: `Distribua a espátula plástica e reforce a regra de ouro: entrar por baixo, devagar, por vários lados, sem faca de metal. Acompanhe de perto, pois é o momento de maior risco de quebra. Antes, peça que o aluno abra o próprio arquivo no Orca Slicer e veja na aba Preview onde fica a base da peça.`,
      atividade: `Abra seu arquivo no Orca Slicer e olhe a base do modelo na aba Preview. Depois, na bancada, use a espátula plástica para soltar a sua peça da mesa de impressão, entrando por baixo de uma quina e empurrando devagar por vários lados até ela liberar.`,
      gabarito: `O aluno acertou quando a peça sai inteira da chapa, sem rachar nem quebrar, usando só a espátula plástica e sem forçar com objeto de metal. Ele consegue apontar na pré-visualização do Orca Slicer onde ficava a base que estava colada na mesa.`,
    },
    {
      titulo: `Removendo os suportes`,
      tipo: `Prática na bancada`,
      tempo: `12 min`,
      guiaProfessor: `Mostre de novo, numa peça de exemplo, a diferença entre suporte (treliça frágil) e corpo (maciço). Entregue o alicate de corte e reforce: ponta sempre apontada para longe do corpo e dos colegas. Circule ajudando nos pontos de contato mais teimosos, que costumam ficar embaixo do personagem.`,
      atividade: `Com o alicate de corte, remova todos os suportes do seu personagem, cortando os pontos de contato de fora para dentro e puxando os pedaços grandes com a mão. Tire também o brim, aquela aba fininha em volta da base. No fim, passe a mão para sentir se sobrou algum suporte escondido.`,
      gabarito: `Está correto quando o personagem fica livre de suportes e do brim, sem nenhum pedaço de treliça preso e sem o aluno ter cortado parte do corpo da peça por engano. O alicate foi usado com a ponta voltada para longe das pessoas durante todo o exercício.`,
    },
    {
      titulo: `Acabamento com a lixa`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Explique a sequência de grãos: primeiro a lixa 240, mais áspera, para tirar rebarba; depois a 400, mais fina, para alisar. Demonstre o movimento leve e em um só sentido. Avise para não exagerar nas partes com detalhe, que somem se lixar demais. Tenha o pincel à mão para tirar o pó.`,
      atividade: `Lixe as rebarbas e as marcas de suporte do seu personagem: comece com a lixa 240 nas partes mais ásperas e termine com a 400 para deixar liso. Limpe o pó com o pincel e compare a sua peça com o exemplo "personagem-acabado.3mf" no projetor — chegue o mais perto que conseguir daquele acabamento.`,
      gabarito: `Sucesso quando as rebarbas grandes desapareceram, as marcas de suporte estão suavizadas e a superfície ficou lisa ao toque, sem que os detalhes do personagem tenham sido apagados pelo excesso de lixa. A peça está sem pó e com aparência próxima à do exemplo.`,
    },
    {
      titulo: `Conferência em dupla: peça x pré-visualização`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e peça que cada um abra o próprio arquivo no Orca Slicer na aba Preview. A ideia é treinar o olhar crítico: o que saiu como o previsto e o que ficou diferente. Reforce que apontar uma diferença é ajudar, não criticar. Circule para que as observações sejam concretas, não um simples "ficou legal".`,
      atividade: `Em dupla, troquem de lugar. Cada um abre o arquivo do colega no Orca Slicer (aba Preview) e compara a peça real impressa com a pré-visualização na tela. Anotem juntos pelo menos duas semelhanças e uma diferença entre o que aparecia na tela e o que ficou na mão (por exemplo, onde havia suporte, a altura, algum detalhe).`,
      gabarito: `Concluído quando a dupla aponta pelo menos duas semelhanças concretas e uma diferença real entre a pré-visualização no Orca Slicer e a peça impressa — por exemplo, "os suportes estavam aqui embaixo, como mostrava a tela" ou "essa ponta ficou mais grossa que no preview". Observações vagas devem ser refeitas com detalhe.`,
    },
    {
      titulo: `Meu personagem na mão: apresentação final`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `18 min`,
      guiaProfessor: `Esta é a entrega final do mês e o momento de valorizar o esforço de todos. Organize a turma em roda. Dê a cada aluno cerca de um minuto e faça perguntas-guia se alguém travar: qual jogo é, por que escolheu esse personagem, o que foi mais difícil de imprimir, o que faria diferente. Ao fim, garanta que cada peça vá identificada no saquinho para levar pra casa em segurança.`,
      atividade: `Apresente o seu personagem acabado para a turma. Conte: de qual jogo ele é, por que você escolheu esse modelo, qual parte foi mais difícil de imprimir ou acabar e o que você faria diferente na próxima impressão. No fim, guarde a sua peça no saquinho para levar pra casa.`,
      gabarito: `Concluído quando o aluno apresenta o personagem impresso e acabado, respondendo às quatro perguntas (qual jogo, por que o modelo, o que foi mais difícil e o que mudaria), e guarda a peça identificada para o transporte. O entregável do mês está cumprido: o personagem do próprio jogo, modelado, fatiado, impresso e levado pra casa.`,
    },
  ],
};
