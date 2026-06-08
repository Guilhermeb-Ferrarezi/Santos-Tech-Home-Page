import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Ciclo de Caminhada",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar um ciclo de caminhada fluido em pixel art, animando o personagem em 4 a 8 quadros com poses-chave de contato, passagem e recuo das pernas no Aseprite.`,
  descricao: `Na aula passada o aluno deu o primeiro sopro de vida ao personagem com o idle, aquela animação suave de respiração que faz o boneco parecer vivo mesmo parado. Agora a gente coloca esse personagem para andar. O ciclo de caminhada (em inglês, walk cycle) é um dos exercícios mais clássicos da animação: um conjunto pequeno de quadros que, repetidos em loop, dão a sensação de um passo eterno. É a base de quase todo jogo 2D de plataforma.

A ideia central é que andar não é só mover as pernas para frente e para trás. Existem poses-chave que se repetem em todo passo: o contato (o pé toca o chão e a perna estica à frente), a passagem (o corpo fica por cima da perna de apoio, no ponto mais alto), e o recuo (a perna empurra o chão para trás). Quando o aluno entende essas poses, ele consegue montar uma caminhada convincente até com poucos quadros. Em pixel art, com 4 a 8 quadros já se faz mágica.

Além das pernas, os braços contam muito. Eles balançam em oposição às pernas: quando a perna direita vai para a frente, o braço direito vai para trás. Esse detalhe simples é o que separa um boneco rígido de um personagem que parece realmente caminhar. O corpo também sobe e desce um pouquinho a cada passo, acompanhando o ritmo.

A grande aliada da aula é a janela de preview em loop do Aseprite. Em vez de imaginar como vai ficar, o aluno aperta um botão e vê a caminhada rodando em tempo real, ajustando a velocidade de cada quadro até o passo ficar no ritmo certo. Refinar olhando o preview é exatamente o que um animador profissional faz.`,
  materiais: [
    `Computadores com Aseprite instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os passos na tela grande`,
    `Arquivo de exemplo .aseprite com o personagem do aluno (sprite do idle da Aula 1)`,
    `Arquivo de referência com um walk cycle pronto de 4 quadros para comparação`,
    `Folha impressa ou slide com as poses-chave (contato, passagem, recuo) desenhadas`,
    `Mouse externo para quem preferir desenhar sem o touchpad`,
  ],
  conceitosChave: [
    `Ciclo de caminhada (walk cycle) — sequência de quadros que, repetida em loop, faz o personagem parecer andar sem parar.`,
    `Pose de contato — quadro em que o pé toca o chão e a perna da frente estica; é o início e o fim do passo.`,
    `Pose de passagem — quadro em que o corpo passa por cima da perna de apoio e fica no ponto mais alto da caminhada.`,
    `Pose de recuo (empurrão) — quadro em que a perna de trás empurra o chão e o corpo se prepara para o próximo passo.`,
    `Oposição de braços e pernas — quando uma perna vai para a frente, o braço do mesmo lado vai para trás, dando naturalidade.`,
    `Loop — repetição contínua da animação, em que o último quadro liga de volta no primeiro sem corte.`,
    `Onion skin (papel cebola) — recurso que mostra o quadro anterior translúcido por baixo, ajudando a manter o movimento alinhado.`,
  ],
  treinamento: `## O que o professor precisa saber

O ciclo de caminhada parece difícil, mas vira algo simples quando você pensa em apenas três poses-chave: contato, passagem e recuo. Numa caminhada de 4 quadros temos: contato com a perna direita à frente, passagem, contato com a perna esquerda à frente, passagem de novo. Repare que as poses se espelham entre os lados. Antes da aula, abra o arquivo de referência e rode o preview umas vezes para você mesmo sentir o ritmo. Não precisa ser artista: você só vai guiar o aluno a posicionar pernas e braços nos quadros certos. O segredo está em olhar o preview e ajustar, não em acertar de primeira.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram o arquivo do personagem do idle. Reveja como criar quadros: na linha do tempo (Timeline) embaixo, clique no ícone de "+" (Novo quadro) ou aperte Alt+N. Mostre o botão de Play da Timeline para rodar a animação atual. Pergunte: "Como a gente faz esse boneco andar?". Deixe levantarem ideias.

Conteúdo novo guiado (15 min): no projetor, explique as três poses. Crie um sprite novo de teste e desenhe a pose de contato (perna da frente esticada, perna de trás recuada, braços em oposição). Ative o onion skin clicando no ícone das duas folhinhas no topo da Timeline para ver o quadro anterior por baixo. Crie o segundo quadro (Alt+N) e desenhe a passagem: pernas mais juntas, corpo um pixel mais alto. Crie o terceiro com o contato espelhado e o quarto com a outra passagem. Abra a janela de preview em Frame > Open Preview Window e mostre a caminhada rodando em loop.

Mão na massa (25 min): cada aluno monta o próprio walk cycle de 4 quadros no seu personagem. Circule pela sala. Lembre-os de usar onion skin e de só mexer nas pernas e braços, mantendo o tronco e a cabeça quase parados. Quem terminar os 4 quadros pode dobrar para 8, inserindo um quadro intermediário entre cada pose para deixar mais suave. Ajuste o tempo de cada quadro com duplo clique no quadro na Timeline (campo "Frame duration", em milissegundos; 100 a 130 ms costuma dar um passo bom).

Desafio e compartilhar (10 min): proponha o desafio do balanço dos braços (veja exercícios). Depois, cada aluno roda o preview no projetor por 20 segundos e os colegas dizem uma coisa boa e uma coisa para melhorar.

## Como explicar de forma clara (linguagem para a idade)

Use o corpo: peça que os alunos se levantem e andem devagar, percebendo que o braço vai para o lado contrário da perna. "Sentiu? Quando o pé direito vai na frente, a mão direita vai pra trás." Compare o walk cycle com uma esteira de academia: o personagem anda no lugar e o cenário é que se move depois, no jogo. Chame os 4 quadros de "as 4 fotos do passo". Diga que o preview é a "câmera de cinema" que junta as fotos e mostra o filme. Evite termos técnicos demais de uma vez; introduza "contato, passagem, recuo" mostrando na tela.

## Erros comuns e como ajudar

O erro mais comum é mexer o corpo inteiro de lugar, fazendo o personagem "deslizar". Lembre que na caminhada em loop o boneco anda parado no centro; só as pernas e braços mudam. Outro erro é esquecer a oposição dos braços, deixando braço e perna do mesmo lado indo juntos, o que parece um robô; mostre o gesto com o próprio corpo. Muitos esquecem de ativar o onion skin e os quadros saem desalinhados; passe ativando para eles. Há quem deixe o passo rápido demais ou lento demais; ensine a ajustar a Frame duration olhando o preview. Por fim, alguns desenham os 4 quadros bem diferentes entre si e a animação "pisca"; oriente a copiar o quadro anterior (Ctrl+C, Ctrl+V no novo quadro) e só ajustar as pernas, mantendo a base igual.`,
  exercicios: [
    {
      titulo: `Os dois contatos`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno tenha o personagem aberto e saiba criar quadros com Alt+N. Reforce o uso do onion skin antes de começarem.`,
      atividade: `Crie dois quadros do seu personagem mostrando apenas as poses de contato: no primeiro, a perna direita esticada à frente e a esquerda recuada; no segundo, o espelho, com a perna esquerda à frente. Use o onion skin para alinhar.`,
      gabarito: `O aluno tem 2 quadros novos. No quadro 1 a perna direita está esticada para a frente e a esquerda para trás; no quadro 2 as posições estão invertidas. O tronco e a cabeça permanecem na mesma posição central nos dois quadros, sem deslizar para os lados.`,
    },
    {
      titulo: `Fechando o ciclo de 4 quadros`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre como inserir os quadros de passagem entre os contatos. Lembre que na passagem o corpo sobe um pixel e as pernas ficam mais juntas.`,
      atividade: `Complete o ciclo de caminhada com 4 quadros na ordem contato, passagem, contato, passagem. Abra Frame > Open Preview Window e rode em loop para conferir se o passo flui.`,
      gabarito: `A Timeline mostra 4 quadros na sequência correta. Os quadros de passagem (2 e 4) têm as pernas próximas e o corpo um pouco mais alto. No preview em loop, o personagem parece dar passos contínuos, sem travadas e sem deslizar.`,
    },
    {
      titulo: `O balanço dos braços`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Peça que andem pela sala sentindo a oposição. Quem tiver dificuldade, mande copiar o braço e mover poucos pixels por quadro.`,
      atividade: `Volte aos seus 4 quadros e anime os braços em oposição às pernas: quando a perna direita avança, o braço direito vai para trás. Ajuste quadro a quadro e confira no preview.`,
      gabarito: `Em cada quadro, o braço do lado da perna que avança está recuado, e o braço oposto está à frente. No preview, os braços balançam de forma contrária às pernas, deixando a caminhada mais natural e menos robótica.`,
    },
    {
      titulo: `Caça ao deslize`,
      tipo: `Em dupla`,
      tempo: `7 min`,
      guiaProfessor: `Forme duplas e oriente a trocar de computador. O foco é dar um retorno gentil e específico, não criticar o desenho.`,
      atividade: `Troque de lugar com o colega e rode o preview da caminhada dele. Verifique três coisas: o corpo desliza para os lados? Os braços estão em oposição? O passo está rápido ou lento demais? Anote e devolva o retorno.`,
      gabarito: `A dupla aponta com clareza pelo menos um acerto e um ponto de melhoria, usando os termos contato, passagem e oposição. Identificam corretamente se há deslize do corpo e sugerem ajustar a Frame duration caso o passo esteja fora do ritmo.`,
    },
    {
      titulo: `Da caminhada de 4 para a de 8 quadros`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Indicado para quem já fechou o ciclo de 4 quadros. Ensine a inserir um quadro intermediário entre cada pose copiando o anterior e ajustando poucos pixels.`,
      atividade: `Transforme seu ciclo de 4 quadros em um de 8, inserindo um quadro intermediário entre cada pose-chave. Ajuste a Frame duration de todos para manter o ritmo e refine no preview até a caminhada ficar bem suave.`,
      gabarito: `A Timeline tem 8 quadros alternando poses-chave e intermediários. A Frame duration foi reduzida (por volta de 60 a 80 ms) para manter a velocidade do passo. No preview em loop, a caminhada está visivelmente mais fluida do que a versão de 4 quadros, sem saltos entre os quadros.`,
    },
  ],
};
