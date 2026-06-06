import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Ícones com cara de profissional",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Gerar no Gemini com o Nano Banana um set de ícones e símbolos para a interface do jogo (botões, vida, moedas e itens) com fundo limpo e estilo unificado, exportando cada um no formato certo para a UI.`,
  descricao: `Nesta aula, os alunos saem da imagem grande e bonita para o detalhe que ninguém percebe, mas todo mundo usa: o ícone. Ícone é aquele desenho pequeno que aparece na tela do jogo para dizer alguma coisa sem precisar de texto, como o coração da vida, a moeda dourada, o botão de jogar ou a estrela de bônus. Quando os ícones são bem feitos, o jogo parece profissional; quando são tortos e cada um de um jeito, o jogo parece amador.

O segredo de um bom conjunto de ícones é a consistência. Consistência quer dizer que todos os ícones combinam entre si: mesmo estilo de traço, mesma paleta de cores, mesmo nível de detalhe e o mesmo tipo de fundo. Para conseguir isso no Nano Banana, os alunos vão aprender a montar um prompt-base (um texto que descreve o estilo) e reaproveitá-lo, trocando só o objeto. Assim, o coração, a moeda e a espada saem como se fossem irmãos, da mesma família visual.

O outro grande tema é o fundo limpo. Ícones de interface quase sempre precisam de fundo transparente ou de uma cor sólida fácil de recortar, para encaixar em cima de qualquer tela do jogo. Os alunos vão pedir ao Nano Banana imagens centralizadas, com bastante espaço em volta e fundo neutro, e vão aprender a exportar no formato certo (PNG, que guarda transparência) para levar a UI ao Canva e ao Roblox depois.

Ao final, cada aluno terá um pequeno conjunto de ícones unificado, com pelo menos quatro símbolos (vida, moeda, botão e item), todos no mesmo estilo, com fundo limpo e salvos com nomes organizados. É um pedaço direto do entregável do mês, o pacote de imagens próprio, e a base da interface dos jogos que eles vão montar mais para frente.`,
  materiais: [
    `Computadores com acesso ao Gemini (gemini.google.com) e ao Nano Banana para geração e edição de imagem por IA, um por aluno`,
    `Conta Google de cada aluno já logada no Gemini antes da aula, com o modelo de imagem disponível`,
    `Projetor ou TV para o professor demonstrar cada passo na tela do Gemini`,
    `Pasta com exemplos de bons sets de ícones de jogos (coração de vida, moeda, botão de play, estrela) para mostrar o que é consistência`,
    `Folha impressa ou slide com o prompt-base de estilo pronto para os alunos copiarem e adaptarem`,
    `Pasta no computador, organizada e com nome (por exemplo, "icones-do-jogo"), para salvar as imagens exportadas`,
  ],
  conceitosChave: [
    `Ícone — desenho pequeno da interface que comunica algo sem texto, como o coração da vida ou a moeda.`,
    `Set (conjunto) de ícones — vários ícones criados para o mesmo jogo, pensados para combinar entre si.`,
    `Consistência — quando todos os ícones têm o mesmo estilo, paleta e traço, parecendo da mesma família.`,
    `Prompt-base — o texto de estilo que descrevemos uma vez e reaproveitamos, trocando só o objeto.`,
    `Fundo limpo — fundo transparente ou de cor sólida neutra, fácil de recortar e encaixar na tela do jogo.`,
    `PNG — formato de imagem que guarda transparência; o certo para ícones de interface.`,
    `Paleta de cores — o grupo de cores escolhido que se repete em todos os ícones para dar unidade.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser artista. Esta aula é sobre repetir um mesmo pedido de estilo várias vezes, mudando só o objeto. No Gemini, o aluno escreve o pedido na barra de mensagem embaixo (onde diz "Pergunte ao Gemini") e usa o ícone de imagem para ativar a geração com o Nano Banana. A resposta aparece como uma imagem que dá para baixar pelo ícone de download (a setinha para baixo) ou pelo menu de três pontos. O ponto-chave da aula é o prompt-base: um texto curto que descreve o estilo (cores, traço, fundo) e termina com o nome do objeto. Troca-se só o objeto e tudo continua combinando. Para o fundo limpo, peça sempre "fundo branco liso" ou "fundo transparente", "objeto centralizado" e "com espaço em volta". Salve cada imagem como PNG.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor dois jogos de celular, um com ícones bonitos e iguais e outro com ícones tortos e diferentes. Pergunte qual parece mais profissional e por quê. Conduza até a palavra "consistência". Mostre exemplos do coração de vida, da moeda e do botão de play e diga que hoje a turma vai criar os seus.

Conteúdo novo guiado (15 min): Abra o Gemini no projetor. Cole na barra de mensagem o prompt-base, por exemplo: "Ícone de jogo estilo cartoon, contorno grosso preto, cores vivas, fundo branco liso, objeto centralizado com espaço em volta, alta qualidade: um coração vermelho de vida". Gere e mostre o resultado. Agora troque só o final do prompt para "uma moeda dourada" e gere de novo: mostre que sai no mesmo estilo. Aponte como baixar a imagem (ícone de download) e como nomear o arquivo. Explique por que escolhemos PNG.

Mão na massa (25 min): Cada aluno copia o prompt-base e gera pelo menos quatro ícones, trocando só o objeto: vida, moeda, um botão (por exemplo, play ou pausa) e um item do jogo (espada, poção, chave). Devem manter o mesmo começo de prompt em todos. Em seguida, baixam cada imagem como PNG e salvam na pasta "icones-do-jogo" com nomes claros, como "vida.png", "moeda.png". Circule conferindo a consistência e o fundo limpo.

Desafio + compartilhar (10 min): Cada aluno coloca os quatro ícones lado a lado na tela e mostra ao colega. A turma vota: o conjunto parece "da mesma família"? Dois voluntários apresentam no projetor.

## Como explicar de forma clara

Use a ideia de "família". Diga que ícones do mesmo jogo são como irmãos: têm que ter o mesmo "rosto", o mesmo estilo. O prompt-base é a "receita do bolo": você muda só o recheio (o objeto), mas a massa continua igual. Fundo limpo é como recortar um adesivo: precisa de espaço em branco em volta para não cortar o desenho. Mostre sempre antes de mandar fazer e repita em voz alta as três palavras mágicas do fundo: "centralizado", "espaço em volta", "fundo branco liso". Evite termos difíceis; prefira "começo do pedido" em vez de "prefixo do prompt".

## Erros comuns e como ajudar

O erro mais comum é mudar o estilo a cada ícone: o aluno reescreve o prompt inteiro e tudo sai diferente. Ensine a copiar e colar o prompt-base e trocar só a última parte. Outro erro é o fundo sujo, cheio de cenário; lembre de pedir "fundo branco liso" e "objeto centralizado". Muitos esquecem do espaço em volta e o desenho fica colado na borda, difícil de recortar; oriente a pedir "com espaço em volta". Há quem salve em formato errado ou sem nome; mostre o passo de baixar como PNG e nomear o arquivo na hora. Por fim, alguns pedem detalhes demais e o ícone vira uma cena complicada; explique que ícone é simples, com poucos elementos, para ser entendido pequeno na tela.`,
  exercicios: [
    {
      titulo: `Meu primeiro ícone com fundo limpo`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Garanta que cada aluno cole o prompt-base na barra do Gemini e ative a imagem. Confira se pediram fundo limpo e objeto centralizado.`,
      atividade: `Use o prompt-base entregue e gere o ícone de vida (um coração). Verifique se ele saiu centralizado, com espaço em volta e fundo branco liso.`,
      gabarito: `O aluno gerou um coração de vida no estilo do prompt-base, centralizado, com fundo branco limpo e espaço nas bordas, pronto para recorte.`,
    },
    {
      titulo: `Mesma família, objetos diferentes`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre que só a última parte do prompt muda. Passe na sala conferindo se o começo do pedido foi mantido igual em todos.`,
      atividade: `Mantendo o mesmo começo de prompt, gere mais três ícones trocando só o objeto: uma moeda, um botão (play ou pausa) e um item (espada, poção ou chave).`,
      gabarito: `Os quatro ícones (vida, moeda, botão e item) saíram com o mesmo traço, paleta e fundo, parecendo da mesma família visual.`,
    },
    {
      titulo: `Exportar e organizar o set`,
      tipo: `desafio`,
      tempo: `5 minutos`,
      guiaProfessor: `Ensine a baixar como PNG e a nomear cada arquivo. Confira se tudo foi salvo na pasta certa com nomes claros.`,
      atividade: `Baixe os quatro ícones como PNG e salve-os na pasta "icones-do-jogo" com nomes simples, como "vida.png", "moeda.png", "botao.png" e "item.png".`,
      gabarito: `A pasta contém quatro arquivos PNG nomeados de forma clara, um para cada ícone, todos com fundo limpo e prontos para a UI.`,
    },
    {
      titulo: `Conferência de consistência em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente a comparar os sets lado a lado e apontar um ícone que destoa, sugerindo um novo prompt para refazê-lo.`,
      atividade: `Compare seu set com o do colega e, juntos, achem o ícone menos parecido com os outros. Reescrevam o final do prompt e gerem de novo para deixá-lo na mesma família.`,
      gabarito: `A dupla identificou o ícone fora do padrão e o refez com o mesmo prompt-base, deixando o conjunto mais consistente; o aluno explica o que ajustou.`,
    },
    {
      titulo: `Mini-projeto: o set do meu jogo`,
      tipo: `projeto curto`,
      tempo: `2 minutos`,
      guiaProfessor: `Peça que cada aluno apresente o conjunto pronto, dizendo o estilo escolhido. Use a roda final para reforçar consistência e fundo limpo.`,
      atividade: `Mostre seu set final de quatro ícones lado a lado e diga em uma frase qual é o estilo (por exemplo, cartoon de contorno grosso) e por que eles combinam.`,
      gabarito: `O aluno apresenta quatro ícones unificados, em PNG e com fundo limpo, e descreve corretamente o estilo e o motivo da consistência (mesmo prompt-base).`,
    },
  ],
};
