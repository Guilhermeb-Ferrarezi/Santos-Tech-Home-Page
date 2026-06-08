import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Minha Peça Pronta pra Levar",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Concluir a primeira peça impressa em 3D, removendo-a da placa, retirando os suportes e fazendo o acabamento básico com segurança para levar para casa.`,
  descricao: `Esta é a aula que fecha o mês inteiro com chave de ouro. Depois de aprender o que é impressão 3D, conhecer a impressora Bambu Lab, abrir o Bambu Studio, posicionar a peça, fatiar e imprimir de verdade, chegou o grande momento: o aluno finalmente segura nas mãos o objeto que ele mesmo criou no computador. É um momento de orgulho gigante, e o professor deve celebrar isso com a turma.

O foco desta aula não é mais o software, e sim o trabalho manual de pós-processamento. O aluno vai aprender a soltar a peça da placa de impressão com calma, identificar e remover os suportes (aquelas estruturas extras que seguraram as partes salientes durante a impressão) e fazer um acabamento básico, deixando a superfície mais limpa e agradável ao toque. Tudo isso com muita atenção à segurança, porque algumas peças podem ter pontas, rebarbas ou cantos vivos.

Além do trabalho com as mãos, esta aula tem um lado de revisão e apresentação. Cada aluno mostra sua peça para a turma e conta, em poucas palavras, o caminho que percorreu: qual arquivo usou, como fatiou e como foi a impressão. Assim o professor amarra todos os conceitos do mês e ajuda o aluno a perceber o quanto evoluiu desde a primeira aula.

Ao final, todos saem da sala com a peça embalada e pronta para levar para casa. Esse entregável físico é a prova concreta de que o aluno domina o ciclo completo da impressão 3D, do arquivo digital ao objeto real.`,
  materiais: [
    `Computadores com Bambu Studio (impressão 3D) instalado e aberto, para revisar o histórico de fatiamento das peças`,
    `Projetor para o professor mostrar as etapas do mês e exibir fotos de peças com e sem suportes`,
    `Impressora 3D Bambu Lab com as peças dos alunos já impressas e prontas na placa`,
    `Espátula de metal ou plástico para soltar as peças da placa de impressão`,
    `Alicate de corte pequeno e cuidador para retirar suportes, mais lixa fina para o acabamento`,
    `Óculos de proteção e luvas leves para o manuseio seguro`,
    `Sacos ou caixinhas para embalar a peça pronta de cada aluno levar para casa`,
  ],
  conceitosChave: [
    `Pós-processamento — todo o trabalho manual feito depois que a impressão termina, como soltar a peça, tirar suportes e lixar.`,
    `Suporte — estrutura extra impressa que segura partes salientes da peça e que precisa ser removida no final.`,
    `Placa de impressão — a base de metal magnética onde a peça é construída e da qual ela precisa ser solta com cuidado.`,
    `Espátula — ferramenta de ponta fina usada para fazer alavanca e descolar a peça da placa sem quebrá-la.`,
    `Rebarba — pequena sobra de material áspera que fica na peça e que tiramos com lixa para deixar a superfície lisa.`,
    `Acabamento — etapa final em que deixamos a peça limpa, sem pontas e bonita para usar ou exibir.`,
    `Entregável — o resultado concreto do mês, neste caso a peça impressa em 3D que o aluno leva para casa.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não vai depender muito do software, então respire aliviado: o destaque é o trabalho com as mãos e a celebração. Mesmo assim, deixe o Bambu Studio aberto nos computadores para revisar com a turma o histórico do mês. Antes da aula, confira se todas as peças já estão impressas e ainda na placa, ou já soltas e separadas por aluno. Tenha em mãos espátula, alicate de corte, lixa fina, óculos de proteção e luvas. Teste você mesmo soltar uma peça e tirar um suporte antes da turma chegar, para saber o nível de força necessário.

Lembre-se: peças recém-impressas podem estar mornas e a placa pode estar quente se a impressão acabou de terminar. Espere esfriar. Suportes às vezes saem com a mão, às vezes precisam do alicate. Segurança em primeiro lugar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): receba a turma celebrando. Diga que hoje é o dia de pegar a peça na mão. Faça uma roda rápida e peça que cada aluno diga uma coisa que aprendeu no mês. No projetor, mostre a linha do tempo: arquivo, posicionar na placa, fatiar, imprimir e, agora, acabar.

Conteúdo novo guiado (15 min): demonstre o pós-processamento na frente da turma. Primeiro, mostre como remover a placa magnética da impressora puxando-a para fora. Segure a placa, flexione-a levemente e use a espátula em um canto da peça, fazendo alavanca suave para soltar. Depois, mostre o que é um suporte: aponte na peça e nas imagens do projetor. Pegue o alicate de corte e retire um suporte com calma, cortando rente. Por fim, passe a lixa fina na rebarba para mostrar o acabamento. Reforce os óculos de proteção.

Mão na massa (25 min): cada aluno trabalha na própria peça, sempre sob seu olhar. Eles soltam a peça da placa, removem os suportes e lixam as rebarbas. Circule pela sala ajudando quem tiver dificuldade. Quem terminar pode abrir o Bambu Studio e revisar o próprio projeto fatiado, conferindo tempo de impressão e camadas.

Desafio e compartilhar (10 min): cada aluno apresenta a peça pronta em uma frase, contando o caminho que percorreu (arquivo, fatiamento, impressão, acabamento). Embale a peça de cada um e entregue para levar para casa. Tire uma foto da turma com as peças.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga que os suportes são como "rodinhas de bicicleta": ajudam enquanto a peça está sendo construída, mas depois a gente tira porque não precisa mais. Explique que lixar é igual a "alisar a unha com a lixinha", tirando as partes ásperas. Chame o pós-processamento de "dar o toque final no seu objeto". Valorize muito o esforço: lembre que aquela peça começou como um arquivo no computador e virou algo de verdade que dá para segurar. Pergunte: "Quem imaginava, na primeira aula, que ia sair daqui com isso na mão?".

## Erros comuns e como ajudar

O erro mais comum é forçar demais a peça para soltar e quebrá-la. Ensine a usar a espátula só na borda e a flexionar a placa, nunca puxar com violência. Outro erro é tentar arrancar o suporte com a mão e machucar o dedo numa ponta: insista no alicate e nos óculos. Alguns confundem suporte com a própria peça e cortam parte do modelo; ajude-os a identificar o que é estrutura extra antes de cortar. Há também quem lixe demais e desgaste o detalhe: oriente movimentos leves e poucos. Por fim, alguns terminam rápido e ficam parados; tenha o desafio de revisar o projeto no Bambu Studio para mantê-los engajados.`,
  exercicios: [
    {
      titulo: `Soltando a peça da placa`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Acompanhe cada aluno de perto. Garanta que a placa esteja fria e que ninguém use força excessiva. Mostre o ângulo certo da espátula antes de começar.`,
      atividade: `Cada aluno remove a placa magnética da impressora, flexiona levemente e usa a espátula em um canto para soltar a própria peça sem quebrá-la.`,
      gabarito: `A peça sai inteira quando a espátula é apoiada na borda e a placa é flexionada com calma. O movimento correto é de alavanca suave, nunca puxão. Se a peça resistir, espera-se esfriar mais ou tenta-se outro canto.`,
    },
    {
      titulo: `Caça aos suportes`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de liberar o corte, peça que cada aluno aponte onde estão os suportes. Confira se identificaram corretamente para não cortarem parte do modelo.`,
      atividade: `O aluno examina a própria peça e marca com o dedo todos os pontos onde existem suportes, explicando por que aquelas estruturas estavam ali durante a impressão.`,
      gabarito: `Os suportes ficam em partes salientes ou inclinadas que não tinham apoio embaixo. O aluno deve diferenciar a estrutura extra do corpo da peça. Resposta correta indica os suportes nas regiões em balanço, e não no modelo em si.`,
    },
    {
      titulo: `Acabamento em dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e oriente que um confere o trabalho do outro. Reforce o uso de óculos de proteção e movimentos leves de lixa. Circule verificando segurança.`,
      atividade: `Em dupla, um aluno retira os suportes com o alicate enquanto o colega observa a segurança e aponta rebarbas; depois trocam de papel e lixam juntos cada peça.`,
      gabarito: `Cada peça fica sem suportes visíveis e com superfície mais lisa ao toque. Espera-se cortes rentes feitos com alicate, sem pedaços de suporte sobrando, e lixamento leve apenas nas rebarbas, preservando os detalhes do modelo.`,
    },
    {
      titulo: `A jornada do meu objeto`,
      tipo: `roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a roda dando a vez a cada aluno. Faça perguntas guiando pela ordem das etapas do mês para que ninguém se perca. Valorize todas as falas.`,
      atividade: `Em roda, cada aluno conta a jornada da própria peça em poucas frases: qual arquivo usou, como posicionou e fatiou no Bambu Studio, como foi a impressão e o acabamento.`,
      gabarito: `Uma boa resposta passa pelas etapas na ordem certa: arquivo do modelo, posicionamento na placa, fatiamento (slicing), impressão na Bambu Lab e pós-processamento. O aluno demonstra entender que o objeto físico veio de um arquivo digital.`,
    },
    {
      titulo: `Minha peça pronta pra levar`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Ajude a verificar se a peça está segura para o manuseio, sem pontas perigosas. Oriente a embalagem e registre uma foto. Celebre a conquista de cada um.`,
      atividade: `O aluno faz a checagem final da peça (sem suportes, sem rebarbas perigosas, superfície lisa), embala o objeto e o apresenta à turma como o entregável do mês pronto para levar para casa.`,
      gabarito: `A peça finalizada não tem suportes presos, não apresenta pontas que machuquem e está com acabamento básico feito. O aluno consegue descrever em uma frase o resultado e leva o objeto embalado, concluindo o ciclo completo da impressão 3D.`,
    },
  ],
};
