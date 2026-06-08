import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Tirar da mesa e remover suportes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Retirar a peça impressa da placa com segurança e remover os suportes sem quebrar os detalhes, revelando o personagem que estava escondido sob o material de apoio.`,
  descricao: `Na aula passada a impressora trabalhou sozinha, camada por camada, e agora existe um personagem 3D colado na placa de impressão. Esta aula é o momento de "destravar o tesouro": tirar a peça da mesa e limpar todo o material de apoio que segurou as partes flutuantes durante a impressão. É uma etapa manual, quase artesanal, e os adolescentes adoram porque finalmente seguram o próprio personagem na mão.

A peça sai impressa em cima de uma placa de aço flexível com revestimento, presa por aquelas primeiras camadas que grudaram bem firme. O segredo para soltar sem forçar é a temperatura e a flexão: quando a placa esfria, o plástico encolhe um pouquinho e solta; e como a placa é flexível, basta dobrá-la levemente que a peça se desprende. Já os suportes são aquelas "estruturas de andaime" que o fatiador criou na aula 3 para sustentar partes que ficariam no ar, como braços abertos ou um chapéu. Eles existem só para a impressão e agora precisam sair.

A remoção dos suportes é onde o personagem realmente aparece. Por baixo daquela teia de plástico estão os detalhes que o aluno modelou e pintou no jogo: o rosto, as mãos, a espada. Por isso a palavra de ordem é cuidado. Suporte mal removido arranca um pedaço do modelo; suporte bem removido deixa uma superfície limpa, pronta para a aula 6 de acabamento. É uma lição de paciência e de respeito pelo próprio trabalho.

Esta aula também ensina segurança de oficina. Os alunos vão usar alicate de bico, espátula e, às vezes, um estilete sob supervisão. Não é uma aula de software pesado, mas o Bambu Studio continua aberto como mapa: nele o aluno vê, na pré-visualização do fatiamento, exatamente onde estão os suportes antes de mexer na peça física. Saber onde olhar na tela evita surpresas na bancada.`,
  materiais: [
    `Computadores (até 10) com o Bambu Studio aberto no projeto fatiado da aula anterior, para consultar onde estão os suportes na pré-visualização`,
    `Projetor ou TV ligado no computador do professor para mostrar a aba "Pré-visualização" (Preview) com os suportes destacados e demonstrar a técnica de remoção`,
    `A impressora 3D (Bambu Lab) com as peças dos alunos já impressas e a placa de impressão flexível pronta para ser retirada`,
    `Kit de ferramentas por aluno ou por dupla: alicate de bico fino, espátula/raspador, e estilete de precisão para uso sob supervisão`,
    `Óculos de proteção, uma bandeja ou pote para juntar os restos de suporte e luvas finas para quem preferir`,
    `Peças de exemplo do professor: uma já com suportes, uma com suportes parcialmente removidos e uma totalmente limpa, para mostrar as três fases`,
    `Pano e álcool isopropílico para limpar a placa de impressão depois de retirar a peça`,
  ],
  conceitosChave: [
    `Placa de impressão (build plate) — a base de aço flexível onde o personagem nasce; ela dobra para soltar a peça sem forçar.`,
    `Suporte (support) — estrutura temporária de plástico que segura partes que ficariam no ar durante a impressão; sai depois.`,
    `Material de apoio — o conjunto de suportes e a base larga (brim) que servem só para imprimir e não fazem parte do personagem.`,
    `Pré-visualização (Preview) — aba do Bambu Studio que mostra a peça fatiada e onde os suportes estão antes de mexer na peça real.`,
    `Marca de suporte — pequena aspereza ou ponto que sobra na superfície onde o suporte estava encostado; é normal e some no acabamento.`,
    `Espátula — ferramenta de lâmina chata usada para deslizar por baixo da peça e ajudar a soltá-la da placa.`,
    `Alicate de bico — ferramenta de ponta fina para agarrar e destacar os suportes em cantos apertados, sem machucar o modelo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar impressão 3D para conduzir esta aula. O essencial é entender três ideias: a peça gruda na placa pelas primeiras camadas; a placa é flexível e solta a peça quando dobrada; e os suportes são plástico descartável que sai com cuidado. Antes da aula, espere a placa esfriar até a temperatura ambiente (peça quente solta mal e ainda queima). No Bambu Studio, abra o projeto da aula anterior e clique na aba "Pré-visualização" (Preview), no topo da tela. Use a barra deslizante de camadas à direita ou embaixo e ative, no painel de cores, a opção que mostra "Support" (Suporte) em cor diferente. Assim você e a turma veem na tela exatamente onde estão os andaimes antes de tocar na peça.

Tenha as três peças-modelo (com suporte, meio limpa, limpa) na mão. Conheça as ferramentas: espátula para soltar da placa, alicate de bico para puxar suportes, estilete só sob sua supervisão direta. Combine a regra de ouro: ferramenta sempre aponta para longe do corpo e das mãos.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Relembre a aula 4. Pergunte "o que a impressora fez enquanto a gente esperava?". No projetor, abra o Bambu Studio na aba "Pré-visualização" e arraste a barra de camadas para mostrar a peça crescendo. Aponte os suportes em cor diferente: "isso aqui é andaime, não é o personagem".

2. Conteúdo novo guiado (15 min): Mostre a placa real com a peça grudada. Explique e demonstre: primeiro, dobre levemente a placa flexível e veja a peça soltar; se resistir, deslize a espátula por baixo, sempre empurrando para longe da mão. Depois, com a peça na bancada, demonstre remover um suporte com o alicate de bico, puxando devagar, do canto para o centro. Mostre as três peças-modelo lado a lado para a turma ver o "antes, durante e depois".

3. Mão na massa (25 min): Cada aluno (ou dupla) recebe a sua peça, as ferramentas e os óculos. Primeiro soltam a peça da placa; depois removem os suportes começando pelos pedaços grandes e fáceis, deixando os detalhes finos por último. Circule de bancada em bancada. Lembre: puxar devagar, nunca arrancar; se um suporte resistir num detalhe frágil, chame o professor para usar o estilete. Quem terminar limpa a placa com pano e álcool.

4. Desafio e compartilhar (10 min): Em roda, cada aluno mostra o personagem limpo e aponta onde ainda há "marcas de suporte" que a aula 6 vai resolver. Junte os restos de plástico na bandeja e fale de descarte. Comemore: o personagem do jogo agora existe de verdade.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, use a imagem da obra em construção: "o suporte é o andaime do prédio; quando a obra fica pronta, o andaime sai". Para soltar da placa, fale em "deixar esfriar e dobrar", como descolar um adesivo gelado. Trate a remoção como abrir um presente embrulhado: "vai com calma, ninguém rasga o presente com pressa". Reforce que marca de suporte é normal e não é defeito, é só sinal de onde o andaime estava. Eles são velhos o bastante para a responsabilidade das ferramentas, então fale de segurança como coisa de profissional, não de proibição.

## Erros comuns e como ajudar

O erro mais comum é querer arrancar a peça da placa quente ou na força, quebrando um detalhe. Insista: esfriou, dobra a placa, deixa soltar sozinho. Outro erro é puxar o suporte na direção errada e levar junto um pedaço do modelo; ensine a apoiar a peça com uma mão e puxar o suporte para fora do detalhe, não para dentro. Alguns alunos têm pressa e usam estilete sem pedir; mantenha o estilete com você e libere caso a caso. Há quem ache que a peça ficou "feia" por causa das marcas: tranquilize, a aula 6 lixa e finaliza. E se um suporte estiver muito preso, peça que o aluno consulte a "Pré-visualização" no Bambu Studio para ver o formato exato antes de insistir na bancada.`,
  exercicios: [
    {
      titulo: `Caça aos Suportes na Tela`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Com o Bambu Studio aberto na aba "Pré-visualização", peça que cada aluno arraste a barra de camadas e ative a cor de "Support". O objetivo é localizar, na tela, todos os lugares onde há suporte antes de tocar na peça física. Circule conferindo se encontraram braços, chapéus ou partes em balanço.`,
      atividade: `No seu projeto, abra a aba "Pré-visualização", deixe os suportes coloridos e aponte na tela três lugares do seu personagem onde existe suporte. Anote quais partes são.`,
      gabarito: `O aluno indicou ao menos três regiões com suporte (tipicamente partes em balanço como braços abertos, queixo, chapéu ou capa) e soube dizer que aquilo é material de apoio, não o modelo. Acertou quem ligou a cor da tela às partes físicas da peça.`,
    },
    {
      titulo: `Soltando da Placa`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Confirme que a placa está fria. Demonstre primeiro: dobrar a placa flexível e, se preciso, deslizar a espátula por baixo empurrando para longe do corpo. Depois cada aluno solta a própria peça. Reforce que é flexão, não força bruta, e que a espátula nunca aponta para a mão.`,
      atividade: `Pegue a sua placa fria, dobre-a levemente e solte o seu personagem. Se ele resistir, use a espátula por baixo, sempre empurrando para longe da sua mão.`,
      gabarito: `A peça saiu inteira, sem rachar a base, e o aluno usou flexão da placa ou a espátula no sentido seguro. Acertou quem retirou o personagem sem forçar e sem apontar a ferramenta para si.`,
    },
    {
      titulo: `Removendo os Suportes em Dupla`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas: enquanto um segura a peça firme, o outro remove os suportes com o alicate de bico, começando pelos pedaços grandes e fáceis. Depois trocam de papel. Oriente a puxar devagar, do canto para fora do detalhe. Os detalhes frágeis ficam por último e, se travarem, você intervém com o estilete.`,
      atividade: `Em dupla, um segura o personagem e o outro remove os suportes com o alicate, começando pelos grandes. Depois troquem. Deixem os detalhes finos por último e chamem o professor se algum suporte resistir.`,
      gabarito: `A dupla removeu a maior parte dos suportes sem quebrar detalhes, trabalhou do pedaço grande para o pequeno e pediu ajuda nos pontos frágeis. Acertou a dupla que limpou a peça com cuidado e cooperação, sem arrancar partes do modelo.`,
    },
    {
      titulo: `Roda das Marcas de Suporte`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Cada aluno mostra o personagem limpo e aponta onde sobraram "marcas de suporte". Conduza a conversa para que entendam que isso é normal e que a aula 6 vai resolver com lixa. Aproveite para falar de descarte do plástico retirado.`,
      atividade: `Na sua vez, mostre o seu personagem e aponte uma marca de suporte que ainda dá para ver. Diga por que ela está ali e o que a aula de acabamento vai fazer com ela.`,
      gabarito: `O aluno mostrou a peça, indicou ao menos uma marca de suporte, explicou que ali havia um andaime e que o acabamento (lixa) vai suavizar. Acertou quem participou da roda reconhecendo a marca como algo normal, não defeito.`,
    },
    {
      titulo: `Resgate do Detalhe Difícil`,
      tipo: `Desafio`,
      tempo: `12 min`,
      guiaProfessor: `Desafie o aluno a limpar o ponto mais difícil do personagem (um vão apertado, entre dedos ou sob o queixo). Ele deve primeiro consultar a "Pré-visualização" no Bambu Studio para entender o formato, depois remover o suporte com alicate e, só sob a sua supervisão direta, usar o estilete se necessário. Acompanhe de perto cada uso de lâmina.`,
      atividade: `Escolha o cantinho mais difícil do seu personagem. Olhe a "Pré-visualização" no Bambu Studio para ver o formato, planeje e remova o suporte com cuidado. Use o estilete apenas com o professor ao lado.`,
      gabarito: `O aluno consultou a pré-visualização, planejou a remoção e limpou o detalhe difícil preservando o modelo, usando o estilete somente sob supervisão. Acertou quem combinou a leitura da tela com a remoção segura e revelou o detalhe sem quebrá-lo.`,
    },
  ],
};
