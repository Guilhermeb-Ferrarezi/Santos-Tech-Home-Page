import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Criando ícones com IA e Canva",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Reaproveitar imagens criadas com IA (DALL-E e Nano Banana) dentro do Canva para montar um conjunto de ícones do jogo, deixando todos com o mesmo estilo, tamanho e cor para que pareçam de uma família só.`,
  descricao: `Nesta aula, os alunos vão transformar imagens soltas em um conjunto de ícones que conversa entre si. Um ícone é um desenho pequeno que representa uma ação ou um objeto do jogo: o coração da vida, a moeda, o botão de pausa, a mochila do inventário. Quando todos os ícones têm o mesmo "jeito", a interface inteira parece profissional e o jogador entende tudo rapidinho.

O ponto central é a coerência visual. Coerência é quando as peças parecem da mesma família: mesmo traço, mesma paleta de cores, mesmo tamanho e o mesmo fundo. Para chegar lá, os alunos vão buscar imagens geradas por IA (no DALL-E e no Nano Banana) seguindo a identidade visual que a turma já definiu nas aulas anteriores, e depois vão organizá-las e padronizá-las dentro do Canva.

O Canva entra como a "mesa de montagem". Nele, os alunos vão remover o fundo das imagens, recortar tudo em molduras quadradas iguais, aplicar a mesma cor de base e alinhar os ícones em uma grade. A ideia não é desenhar do zero, e sim curar e ajustar: escolher as melhores imagens da IA e deixá-las uniformes. É um trabalho de organização tanto quanto de arte.

Ao final, cada aluno terá uma prancha com pelo menos quatro ícones prontos, todos no mesmo tamanho, com a mesma cor e o mesmo estilo, encaixados em uma grade. Esse conjunto será reaproveitado na próxima aula, quando a turma montar a UI completa do jogo. Esta aula é sobre fazer peças diferentes parecerem irmãs.`,
  materiais: [
    `Computadores com o Canva aberto no navegador (conta gratuita ou Pro já logada), um por aluno`,
    `Acesso ao DALL-E e ao Nano Banana para gerar ou buscar as imagens dos ícones`,
    `Projetor ou TV para o professor demonstrar cada passo na tela`,
    `A identidade visual do jogo definida nas aulas anteriores (paleta de cores e estilo) impressa ou em slide`,
    `Pasta com imagens de exemplo de IA: 6 a 8 figuras (coração, moeda, espada, escudo, mochila, estrela) para quem travar`,
    `Lista impressa dos ícones que o jogo precisa (vida, moeda, pausa, inventário, som)`,
    `Folha de checagem da coerência: mesmo tamanho? mesma cor? mesmo fundo? mesmo estilo?`,
  ],
  conceitosChave: [
    `Ícone — desenho pequeno e simples que representa uma ação ou objeto do jogo, como o coração da vida ou a moeda.`,
    `Coerência visual — quando os ícones parecem de uma família só: mesmo traço, mesma cor, mesmo tamanho e mesmo fundo.`,
    `Remover fundo — apagar o que está atrás da figura, deixando o ícone com fundo transparente para encaixar em qualquer tela.`,
    `Grade (grid) — linhas-guia invisíveis que ajudam a alinhar os ícones em fileiras e colunas iguais.`,
    `Moldura quadrada — o quadradinho de mesmo tamanho onde cada ícone é encaixado, para que todos fiquem do mesmo jeito.`,
    `Paleta de cores — o conjunto fixo de cores do jogo que todos os ícones devem respeitar.`,
    `Padronizar — deixar peças diferentes com o mesmo tamanho, a mesma cor e o mesmo estilo, para que combinem entre si.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o Canva. Esta aula é sobre quatro ações simples: trazer imagens de IA para o Canva, remover o fundo, recortar tudo no mesmo quadrado e aplicar a mesma cor. No Canva, a tela do meio é a página de trabalho; à esquerda fica o painel com "Elementos", "Uploads" (Envios) e "Texto"; no topo, quando você clica numa imagem, aparece a barra com "Editar imagem", "Cortar" e "Posição". O botão mais importante hoje é "Editar imagem" e, dentro dele, "Remover fundo" (Background Remover, disponível na conta Pro). O atalho útil é "Ctrl + D" para duplicar um quadro pronto e reaproveitar o mesmo tamanho.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor dois conjuntos de ícones, um bagunçado (cores e tamanhos diferentes) e um coerente (tudo igualzinho). Pergunte qual parece de jogo profissional e por quê. Conduza para a palavra coerência. Relembre a paleta de cores e o estilo que a turma definiu nas aulas anteriores.

Conteúdo novo guiado (15 min): No DALL-E ou no Nano Banana, gere uma imagem usando um prompt com estilo definido, por exemplo: "ícone de coração de vida, estilo cartoon flat, contorno grosso, cores vermelho e branco, fundo branco liso, vista de frente". Baixe a imagem. No Canva, clique em "Uploads" (Envios), suba a imagem e arraste para a página. Clique nela, vá em "Editar imagem" e depois "Remover fundo". Em seguida desenhe um quadrado de moldura (em "Elementos" pegue um quadrado), defina o tamanho exato (por exemplo 200 x 200) na barra de "Posição" e encaixe o ícone dentro. Duplique a moldura com "Ctrl + D" para os próximos ícones já saírem do mesmo tamanho.

Mão na massa (25 min): Cada aluno gera ou escolhe pelo menos quatro imagens de ícones com a IA, respeitando a paleta e o estilo do jogo. Sobe tudo no Canva, remove os fundos, encaixa cada um numa moldura quadrada igual e aplica a mesma cor de base. Circule pela sala conferindo a coerência com a folha de checagem.

Desafio + compartilhar (10 min): Cada aluno mostra a prancha ao colega do lado, que aponta o ícone que mais "fugiu" da família. Dois ou três voluntários mostram no projetor e a turma vota se o conjunto parece coerente.

## Como explicar de forma clara

Use a ideia de "família". Diga que os ícones são como irmãos: podem ser diferentes (um é coração, outro é moeda), mas têm o mesmo "rosto" da família, ou seja, a mesma cor, o mesmo contorno e o mesmo tamanho. Mostre antes de mandar fazer. Repita que o segredo está em três perguntas: tem o mesmo tamanho? tem a mesma cor? tem o mesmo fundo? Evite termos difíceis: fale "tirar o fundo" em vez de "transparência alfa". Sempre aponte o botão na tela enquanto fala o nome dele em voz alta.

## Erros comuns e como ajudar

O erro mais comum é cada ícone sair de um tamanho. Ensine a usar a moldura quadrada fixa e o "Ctrl + D" para duplicar sempre o mesmo quadrado. Outro erro é misturar estilos: um ícone realista e outro cartoon. Oriente a colar o mesmo estilo em todos os prompts da IA, mudando só o objeto. Muitos esquecem de remover o fundo e o ícone fica com um quadrado branco atrás; lembre o caminho "Editar imagem" e "Remover fundo". Alguns trocam a cor base e fogem da paleta; mostre como pegar a cor exata pelo código hexadecimal. Por fim, há quem encha a prancha de ícones e perca a organização; oriente a alinhar tudo em grade, usando as linhas-guia roxas que o Canva mostra ao arrastar.`,
  exercicios: [
    {
      titulo: `Trazendo a IA para o Canva`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno gere uma imagem no DALL-E ou no Nano Banana com um prompt que descreva o estilo. Mostre o caminho "Uploads" (Envios) no Canva e ajude quem não achar o botão.`,
      atividade: `Gere uma imagem de ícone na IA usando um prompt com estilo definido (cartoon flat, contorno grosso, cores do jogo), baixe-a e suba no Canva pela aba "Uploads".`,
      gabarito: `O aluno tem, dentro do Canva, uma imagem de ícone vinda da IA, já visível na página de trabalho. O prompt usado descreve o estilo (não pede só "um coração", mas "coração estilo cartoon flat com as cores do jogo").`,
    },
    {
      titulo: `Tirando o fundo e encaixando na moldura`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre "Editar imagem" e "Remover fundo". Ensine a criar um quadrado de moldura com tamanho fixo (por exemplo 200 x 200) e a duplicá-lo com "Ctrl + D".`,
      atividade: `No ícone que você subiu, remova o fundo, crie uma moldura quadrada de tamanho fixo e encaixe o ícone dentro dela, deixando-o centralizado.`,
      gabarito: `O ícone está sem o fundo original e centralizado dentro de uma moldura quadrada. O tamanho da moldura está definido em número (por exemplo 200 x 200), pronto para ser repetido nos próximos ícones.`,
    },
    {
      titulo: `A família de quatro ícones`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Incentive a reaproveitar a moldura com "Ctrl + D" e a colar o mesmo estilo em todos os prompts, mudando só o objeto. Confira com a folha de checagem.`,
      atividade: `Monte um conjunto de quatro ícones diferentes (por exemplo vida, moeda, pausa e som), todos no mesmo tamanho, com a mesma cor de base e o mesmo estilo.`,
      gabarito: `Existem quatro ícones na prancha, em molduras quadradas iguais, com a mesma cor de base e o mesmo estilo. Ao olhar de longe, eles parecem da mesma família, sem nenhum destoando em tamanho ou cor.`,
    },
    {
      titulo: `Caça ao ícone fora da família`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um analise a prancha do colega usando as três perguntas (mesmo tamanho? mesma cor? mesmo fundo?) e aponte, com gentileza, o que ajustar.`,
      atividade: `Troque de lugar com o colega, olhe a prancha dele e aponte qual ícone mais foge da família. Depois ajudem-se a corrigir esse ícone no Canva.`,
      gabarito: `A dupla identificou pelo menos um ícone fora do padrão e o corrigiu (igualou o tamanho, a cor ou removeu o fundo). O aluno consegue explicar qual das três perguntas o ícone reprovava antes do ajuste.`,
    },
    {
      titulo: `Roda de conversa: o que faz uma família de ícones`,
      tipo: `roda de conversa`,
      tempo: `4 minutos`,
      guiaProfessor: `Reúna a turma em roda e conduza com perguntas abertas. Anote no quadro as regras que surgirem para retomar na próxima aula, quando a UI for montada.`,
      atividade: `Em roda, cada aluno diz uma regra que aprendeu hoje para que ícones diferentes pareçam da mesma família (por exemplo, manter o mesmo tamanho ou a mesma paleta de cores).`,
      gabarito: `A turma levanta ao menos quatro regras válidas, como: usar o mesmo tamanho de moldura, respeitar a paleta de cores, remover o fundo de todos e repetir o mesmo estilo no prompt da IA.`,
    },
  ],
};
