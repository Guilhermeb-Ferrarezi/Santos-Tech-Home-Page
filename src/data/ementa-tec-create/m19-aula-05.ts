import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Texturas que dão vida ao jogo",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar com o Gemini e o Nano Banana um conjunto de texturas de jogo (pedra, madeira, metal e grama) que se repetem sem emenda, pensando em onde cada uma será usada no cenário do Roblox.`,
  descricao: `Nesta aula os alunos descobrem que, num jogo, quase tudo é coberto por uma imagem que se repete: o chão de pedra, a parede de madeira, a porta de metal, o gramado do campo. Essa imagem é a textura. Em vez de desenhar uma parede gigante inteira, o jogo pega um quadradinho de pedra e o repete várias vezes para cobrir uma superfície enorme. Por isso a textura precisa ter um truque especial: a borda direita tem que encaixar na borda esquerda e a borda de cima na de baixo, para que, ao repetir, ninguém veja a "emenda". Quando isso funciona, chamamos de textura que se repete sem emenda (em inglês, seamless ou tileable).

O foco da aula é gerar essas texturas com IA usando o Gemini com o Nano Banana. Os alunos vão pedir, em texto, imagens de pedra, madeira, metal e grama, sempre com a instrução de que a imagem deve ladrilhar sem emenda. Eles vão comparar uma textura comum (que mostra a emenda quando repete) com uma textura feita para ladrilhar, e vão entender por que a segunda some bonito no cenário. A diferença entre as duas é o coração da aula.

Mais do que gerar imagens bonitas, o aluno aprende a pensar com cabeça de game designer: antes de gerar, ele decide onde aquela textura vai morar no jogo. A pedra vai no chão da masmorra? A madeira vai nas paredes da cabana? O metal vai na nave? A grama vai no campo aberto? Essa decisão muda o prompt: uma pedra de caverna escura é diferente de uma pedra de calçada ensolarada. Pensar no uso antes de gerar é o que separa uma pilha de imagens soltas de um conjunto de texturas que conversa entre si.

Ao final, cada aluno terá um pequeno conjunto com quatro texturas (pedra, madeira, metal e grama), cada uma pensada para um lugar do cenário do Roblox. Esse material entra direto no pacote de imagens do mês e será reaproveitado mais adiante, quando a turma montar o jogo no Roblox Studio e aplicar essas texturas nas superfícies das peças (os Parts). Hoje plantamos a base visual do mundo do jogo.`,
  materiais: [
    `Computadores com acesso ao Gemini (site gemini.google.com) com o recurso de geração de imagem Nano Banana ativo, um por aluno`,
    `Conta Google já criada e com login feito antes da aula, para entrar no Gemini sem perder tempo`,
    `Projetor ou TV para o professor demonstrar cada prompt e mostrar a textura repetindo ao vivo`,
    `Arquivo de exemplo: duas imagens prontas do mesmo material, uma com emenda visível e outra sem emenda, para comparar`,
    `Folha impressa com a "receita de prompt de textura" (material + superfície vista de cima + sem emenda + uso no jogo)`,
    `Lista de superfícies sugeridas do cenário (chão de masmorra, parede de cabana, porta de nave, campo aberto) para quem travar`,
    `Pasta ou pen drive para cada aluno salvar as quatro texturas geradas com nomes claros (pedra, madeira, metal, grama)`,
  ],
  conceitosChave: [
    `Textura — imagem que cobre a superfície de um objeto do jogo, como a pele que veste uma peça (pedra, madeira, metal, grama).`,
    `Repetir sem emenda — quando a imagem é repetida lado a lado e as bordas encaixam tão bem que não dá para ver onde uma termina e a outra começa.`,
    `Emenda — a linha ou risco que aparece quando uma textura mal feita é repetida e as bordas não combinam.`,
    `Ladrilhar (tileable) — preparar a imagem para ser usada como ladrilho, repetindo várias vezes para cobrir uma área grande.`,
    `Vista de cima (top-down) — olhar a superfície de frente, reta, como se a câmera estivesse plana sobre ela, sem perspectiva nem sombra de objeto.`,
    `Material — do que a superfície é feita: pedra, madeira, metal, grama; cada material tem cor, brilho e relevo próprios.`,
    `Conjunto de texturas — grupo de texturas que combinam entre si e foram pensadas para o mesmo cenário do jogo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. O Gemini com o Nano Banana gera imagem dentro de uma conversa: o aluno abre o site gemini.google.com já logado, escreve o pedido no campo de texto embaixo (onde aparece "Pergunte ao Gemini") e aperta "Enter" ou a setinha de enviar. A IA responde com uma imagem. Para salvar, passe o mouse sobre a imagem, clique no ícone de baixar (uma setinha para baixo) ou clique com o botão direito e escolha "Salvar imagem como"; oriente a nomear pedra, madeira, metal e grama.

O segredo da aula é uma palavra mágica no prompt: peça sempre uma "textura sem emenda, que se repete (seamless, tileable), vista de cima, plana, iluminação uniforme". Sem isso, a IA tende a desenhar um pedaço de parede com sombra e perspectiva, que não ladrilha. A única preparação real é, em casa, gerar antes uma textura de cada material para chegar confiante e ter um exemplo bom para mostrar. Escreva os prompts em português; o Gemini entende bem.

## Passo a passo da aula

Aquecimento e revisão (10 min): No projetor, mostre o arquivo de exemplo com as duas imagens do mesmo material, uma com emenda visível e outra sem. Repita cada uma lado a lado e pergunte: "Em qual você vê a linha de emenda?". Conduza a turma a perceber que o jogo cobre superfícies grandes repetindo um quadradinho, então ele precisa encaixar.

Conteúdo novo guiado (15 min): Abra o Gemini. Digite um prompt fraco de propósito: "uma parede de pedra". Mostre que sai com sombra e perspectiva e que, repetida, mostra emenda. Agora digite a versão boa: "textura de pedra de masmorra, vista de cima, plana, sem emenda, que se repete (seamless tileable), iluminação uniforme, sem objetos". Gere e, se possível, cole a imagem repetida para mostrar que some a emenda. Apresente a receita no quadro: material + superfície vista de cima + sem emenda + uso no jogo. Repita rápido para madeira e grama, mudando só o material e o lugar.

Mão na massa (25 min): Cada aluno gera as quatro texturas (pedra, madeira, metal e grama), decidindo antes onde cada uma vai no cenário do Roblox (chão, parede, porta, campo). Peça que usem a receita e refinem pelo menos uma ("deixe a madeira mais escura", "tire a sombra forte"). Circule lembrando da expressão "sem emenda, vista de cima" e ajudando a salvar com o nome certo na pasta.

Desafio + compartilhar (10 min): Desafie cada aluno a dizer, para uma textura, onde ela vai no jogo e por que combina. Dois ou três voluntários mostram uma textura no projetor enquanto a turma julga se ela ladrilharia bem ou se ainda mostra emenda.

## Como explicar de forma clara

Use a comparação do papel de parede: você não pinta a parede inteira, usa um rolo com um desenho que se repete, e o desenho bom é aquele em que não dá para ver onde uma volta termina e a outra começa. Texto da emenda: "é como um piso de azulejos; se os azulejos forem todos iguais e encaixarem, o chão fica liso; se não encaixarem, aparece um risco". Para "vista de cima", peça que imaginem olhar o chão diretamente, de pé, sem inclinar a cabeça. Fale devagar os quatro materiais e mostre um exemplo de cada na tela.

## Erros comuns e como ajudar

O erro mais comum é esquecer "sem emenda, vista de cima": a IA devolve uma parede com sombra e perspectiva que não ladrilha; peça para acrescentar essas palavras. Outro é gerar texturas lindas mas sem pensar no uso; lembre de decidir o lugar no cenário antes de gerar. Alguns pedem objetos na imagem ("uma pedra"), e vem uma pedra solta em vez da superfície; reforce "textura de superfície", não objeto. Há quem aceite a primeira imagem mesmo com emenda; ensine a refinar pedindo "deixe os tons mais parecidos para sumir a emenda". Por fim, muitos salvam tudo com o nome padrão e se perdem; lembre de nomear pedra, madeira, metal e grama.`,
  exercicios: [
    {
      titulo: `Caça à emenda`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno repita a imagem (colando duas vezes lado a lado no Canva, no editor ou na própria tela) para enxergar a emenda. O objetivo é treinar o olho, não gerar a textura final ainda.`,
      atividade: `Gere a textura de pedra com a receita ("textura de pedra, vista de cima, plana, sem emenda, que se repete, iluminação uniforme"). Repita a imagem lado a lado e diga se aparece ou não a linha de emenda.`,
      gabarito: `O aluno consegue gerar a pedra com a receita e olhar a imagem repetida apontando se há ou não emenda visível, explicando que as bordas precisam encaixar para o jogo não mostrar o risco.`,
    },
    {
      titulo: `Quatro materiais do meu cenário`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Antes de gerar, peça que cada aluno escreva numa folha onde cada material vai (chão, parede, porta, campo). Confira se eles mantêm "sem emenda, vista de cima" em todos os quatro prompts.`,
      atividade: `Gere as quatro texturas do seu cenário: pedra, madeira, metal e grama. Em cada prompt, diga também o lugar (por exemplo, "pedra de chão de masmorra", "madeira de parede de cabana"). Salve cada uma com o nome certo.`,
      gabarito: `O aluno tem quatro texturas salvas e nomeadas (pedra, madeira, metal, grama), todas no estilo plano vista de cima, e sabe dizer em qual superfície do cenário cada uma será usada.`,
    },
    {
      titulo: `Refino para sumir a emenda`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Escolha com o aluno a textura que mais mostra emenda. Reforce que o ajuste é pedido na mesma conversa, sem repetir o prompt todo, e que tons mais parecidos ajudam a esconder a borda.`,
      atividade: `Pegue a sua textura que mais mostra emenda e peça à IA, na mesma conversa, dois ajustes seguidos para melhorar (por exemplo: "deixe os tons mais uniformes" e "reduza as manchas escuras para repetir sem emenda").`,
      gabarito: `A nova versão repete com a emenda bem menos visível que a inicial, mantendo o mesmo material, e o aluno explica que tons uniformes e bordas parecidas ajudam a esconder o encaixe.`,
    },
    {
      titulo: `Adivinhe o lugar da textura`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada aluno mostre uma textura sem dizer o material nem o lugar, e o colega tente adivinhar onde ela ficaria no jogo, justificando.`,
      atividade: `Troque com o colega. Olhe uma textura dele e diga qual é o material e em que parte do cenário do Roblox ela combinaria (chão, parede, porta ou campo), explicando por quê.`,
      gabarito: `O colega identifica o material correto e propõe um uso coerente (pedra no chão, madeira na parede, metal na porta, grama no campo), justificando pela cor, pelo brilho ou pelo relevo da textura.`,
    },
    {
      titulo: `Mini-mapa de texturas do jogo`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza como um fechamento em roda e projeto. Peça que cada aluno organize as quatro texturas e monte um pequeno mapa (pode ser só um desenho rápido ou uma lista) ligando cada textura ao seu lugar no cenário. Anote no quadro para retomar na aula de montar o pacote.`,
      atividade: `Monte um mini-mapa do seu cenário: liste as quatro texturas (pedra, madeira, metal, grama) e, ao lado de cada uma, escreva onde ela será usada no Roblox e por que combina com aquele lugar.`,
      gabarito: `O aluno apresenta um mini-mapa com as quatro texturas associadas a um lugar coerente do cenário e justifica cada escolha, mostrando que pensou no uso no jogo e não apenas na imagem isolada.`,
    },
  ],
};
