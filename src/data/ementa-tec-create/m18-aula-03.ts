import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 3,
  titulo: "Anatomia de um prompt visual",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar a estrutura de um bom prompt visual no ChatGPT com DALL-E — assunto, cenário, estilo, cores e iluminação — para que o aluno controle a imagem que a IA cria em vez de depender da sorte.`,
  descricao: `Nesta aula, os alunos descobrem que escrever um prompt não é só "pedir um desenho": é montar uma frase com partes bem definidas, como quem monta uma receita. Eles já geraram imagens nas aulas anteriores, mas muitas vezes o resultado saía diferente do imaginado. O motivo quase sempre é o mesmo — o pedido estava vago. A partir de hoje, eles aprendem a anatomia de um prompt: as cinco partes que, juntas, descrevem com clareza o que a IA deve desenhar.

As cinco partes são assunto (o que aparece), cenário (onde está), estilo (como é desenhado), cores (a paleta) e iluminação (a luz da cena). Quando o aluno informa todas elas, a imagem fica muito mais perto do que ele queria. Quando esquece alguma, a IA "chuta" a parte que faltou — e é aí que surgem surpresas indesejadas. O objetivo da aula é que cada aluno passe a escrever prompts completos e organizados.

O ponto mais divertido e mais educativo da aula é a comparação. Os alunos vão pegar um mesmo prompt e mudar apenas uma palavra de cada vez — trocar "dia" por "noite", "realista" por "desenho animado", "azul" por "vermelho" — e ver como cada pequena mudança transforma a imagem inteira. Esse exercício de comparar mostra, na prática, o poder de cada palavra-chave visual e ensina o aluno a ser preciso.

Ao final, cada aluno terá um pequeno banco de palavras-chave visuais (uma lista de estilos, cores e tipos de luz) e terá gerado pelo menos um par de imagens "antes e depois" para provar que entendeu como o texto controla o desenho. Esse domínio do prompt é a base para as próximas aulas, em que eles criarão arte de verdade para os games.`,
  materiais: [
    `Computadores com acesso ao ChatGPT (com DALL-E ativo na geração de imagem), um por aluno`,
    `Conta no ChatGPT já criada e com login feito antes da aula (plano com geração de imagem habilitada)`,
    `Projetor ou TV para o professor demonstrar cada passo na tela grande`,
    `Folha impressa "As 5 partes do prompt" (assunto, cenário, estilo, cores, iluminação) para cada aluno`,
    `Cartaz ou slide com um banco de palavras-chave visuais: estilos, cores e tipos de iluminação`,
    `Arquivo de exemplo com duas imagens "antes e depois" geradas do mesmo prompt com uma palavra trocada`,
    `Caderno ou bloco de notas digital para o aluno anotar os prompts que funcionaram`,
  ],
  conceitosChave: [
    `Prompt — o texto que escrevemos para a IA dizendo qual imagem queremos que ela desenhe.`,
    `Assunto — o que aparece na imagem (o personagem, o objeto ou a criatura principal).`,
    `Cenário — o lugar onde a cena acontece (floresta, espaço, cidade, caverna).`,
    `Estilo — o jeito do desenho (realista, desenho animado, pixel art, aquarela, 3D).`,
    `Paleta de cores — o conjunto de cores que domina a imagem (tons quentes, tons frios, cores vibrantes).`,
    `Iluminação — a luz da cena, que muda o clima (luz do dia, pôr do sol, luz de neon, penumbra).`,
    `Palavra-chave visual — uma palavra forte que diz à IA uma informação clara sobre a aparência da imagem.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista nem dominar o DALL-E para dar esta aula. O que importa é entender as cinco partes do prompt e mostrá-las uma a uma. No ChatGPT, a geração de imagem acontece na própria conversa: o aluno digita o pedido na caixa de mensagem (embaixo da tela), aperta "Enter" e, depois de alguns segundos, a imagem aparece dentro do chat. Para um prompt de imagem funcionar bem, basta uma frase descritiva — não precisa escrever "desenhe" no começo, mas escrever ajuda os iniciantes. Para baixar a imagem, é só passar o mouse por cima dela e clicar no ícone de download (uma seta para baixo). Para tentar de novo, o aluno pode clicar em "Regenerar" ou simplesmente enviar o prompt outra vez. Tenha em mente que a mesma frase pode gerar imagens diferentes a cada vez — isso é normal e faz parte da IA.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor as duas imagens "antes e depois" do arquivo de exemplo, sem revelar o que mudou. Pergunte: "O que ficou diferente entre as duas?" Conduza a turma a perceber que bastou trocar uma palavra (por exemplo, "dia" por "noite") para mudar tudo. Apresente a ideia central: o texto controla a imagem.

Conteúdo novo guiado (15 min): Abra o ChatGPT no projetor e mostre a caixa de mensagem embaixo. Escreva um prompt curto e fraco, como "um dragão", e gere. Em seguida, construa o prompt completo na frente da turma, anunciando cada parte em voz alta: assunto ("um dragão filhote"), cenário ("dentro de uma caverna de cristais"), estilo ("estilo desenho animado 3D"), cores ("tons de roxo e azul") e iluminação ("iluminado por uma luz mágica suave"). Junte tudo em uma frase, gere e compare com a primeira. Mostre como baixar a imagem pelo ícone de download.

Mão na massa (25 min): Cada aluno usa a folha "As 5 partes do prompt" para montar o próprio prompt completo, preenchendo as cinco partes. Depois, gera a imagem no ChatGPT. Em seguida, faz a comparação: copia o mesmo prompt, troca apenas uma palavra (o estilo, a cor ou a iluminação) e gera de novo. Pede-se que salvem os dois resultados. Circule pela sala lendo os prompts e sugerindo palavras-chave mais precisas.

Desafio + compartilhar (10 min): Cada aluno mostra ao colega do lado o seu par "antes e depois" e explica qual palavra trocou e o que aconteceu. Dois ou três voluntários apresentam no projetor.

## Como explicar de forma clara

Use a comparação da receita de bolo: o prompt tem ingredientes, e se faltar um, o bolo sai estranho. Diga que o assunto é "o personagem", o cenário é "o palco", o estilo é "o traço do desenho", as cores são "a tinta" e a iluminação é "o interruptor de luz". Mostre sempre antes de mandar fazer. Fale devagar e escreva as cinco partes no quadro como uma lista, para o aluno copiar. Reforce a regra de ouro: "uma palavra de cada vez" quando for comparar, para enxergar com clareza o que cada palavra muda.

## Erros comuns e como ajudar

O erro mais frequente é o prompt curto demais, do tipo "um carro". Peça que o aluno acrescente cenário, estilo, cores e luz. Outro erro é mudar várias palavras ao mesmo tempo na comparação, o que impede ver o efeito de cada uma — lembre a regra de trocar só uma palavra por vez. Alguns ficam frustrados porque a imagem não saiu igual à da cabeça deles; explique que a IA interpreta o texto e que prompts melhores aproximam o resultado, mas nunca é exato. Há quem escreva pedidos confusos com muitas ideias misturadas; oriente a usar uma frase organizada nas cinco partes. Por fim, vários esquecem de salvar; lembre-os do ícone de download antes de gerar a próxima imagem, para não perder a anterior.`,
  exercicios: [
    {
      titulo: `Caça às cinco partes`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue três prompts prontos (um completo, um sem cenário, um sem iluminação). Ajude os alunos a marcar na folha qual parte falta em cada um.`,
      atividade: `Leia os três prompts entregues e, em cada um, identifique e escreva quais das cinco partes (assunto, cenário, estilo, cores, iluminação) estão presentes e quais estão faltando.`,
      gabarito: `O aluno identifica corretamente que o primeiro prompt tem as cinco partes, o segundo está sem o cenário e o terceiro está sem a iluminação, anotando cada falta na folha.`,
    },
    {
      titulo: `Meu primeiro prompt completo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe o preenchimento da folha "As 5 partes do prompt". Confira se cada aluno incluiu assunto, cenário, estilo, cores e iluminação antes de gerar no ChatGPT.`,
      atividade: `Preencha as cinco partes na folha, junte tudo em uma frase só e gere a imagem no ChatGPT com o DALL-E. Salve a imagem pelo ícone de download.`,
      gabarito: `O aluno tem uma imagem gerada a partir de um prompt que contém as cinco partes de forma clara, e a imagem está salva no computador.`,
    },
    {
      titulo: `Troque uma palavra`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce a regra "uma palavra por vez". Verifique se o aluno mudou apenas o estilo, a cor ou a iluminação, mantendo o resto do prompt igual.`,
      atividade: `Pegue o prompt completo da atividade anterior, troque apenas uma palavra-chave (o estilo, uma cor ou a iluminação) e gere de novo. Salve o par "antes e depois".`,
      gabarito: `O aluno tem duas imagens do mesmo prompt com uma única palavra alterada e consegue apontar o que mudou na imagem por causa dessa troca.`,
    },
    {
      titulo: `Detetives do prompt em dupla`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Oriente que um aluno olhe só a imagem do colega (sem ver o prompt) e tente adivinhar quais palavras-chave foram usadas.`,
      atividade: `Mostre ao colega apenas a sua imagem. Ele tenta adivinhar o estilo, as cores e a iluminação do seu prompt. Depois, revele o prompt e comparem com os palpites.`,
      gabarito: `A dupla compara os palpites com o prompt real e o aluno consegue explicar qual palavra-chave deu a "pista" certa para o estilo, a cor ou a luz adivinhada.`,
    },
    {
      titulo: `Mini banco de palavras-chave visuais`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza uma roda rápida para a turma sugerir palavras. Anote no quadro e peça que cada aluno copie a lista no caderno para usar nas próximas aulas.`,
      atividade: `Monte no caderno uma lista com pelo menos três estilos, três paletas de cores e três tipos de iluminação que você gostaria de testar nas próximas imagens.`,
      gabarito: `O aluno tem uma lista organizada com no mínimo nove palavras-chave visuais (três estilos, três paletas de cores e três tipos de iluminação), pronta para reusar nos próximos prompts.`,
    },
  ],
};
