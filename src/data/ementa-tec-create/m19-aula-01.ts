import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Nano Banana: a magia de gerar imagens",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Apresentar o Nano Banana dentro do Gemini e ensinar cada aluno a escrever um bom prompt (assunto, estilo, cor, iluminação) para gerar e organizar suas primeiras imagens do universo do próprio jogo.`,
  descricao: `Nesta primeira aula do mês os alunos descobrem o Nano Banana, o modelo de geração e edição de imagens por IA que vive dentro do Gemini. A ideia central é simples e poderosa: escrever uma frase boa em português e ver a inteligência artificial transformar essas palavras em uma imagem na hora. Como a turma já passou pelo Ano 1, os alunos entendem o que é um projeto de jogo; agora eles vão criar a arte desse jogo com palavras.

O coração da aula é o conceito de prompt. Um prompt é o pedido que escrevemos para a IA. Quanto mais claro o pedido, melhor a imagem. Por isso, ensinamos uma receita fácil de lembrar: assunto (o quê), estilo (como), cor (paleta) e iluminação (a luz da cena). Com essa receita, o aluno deixa de escrever pedidos vagos como "um monstro" e passa a escrever pedidos ricos como "um monstro fofo de slime verde, estilo cartoon, cores vivas, iluminação suave de fim de tarde".

A aula também planta uma semente de organização. Imagem gerada que não é salva e nomeada com cuidado vira bagunça na semana seguinte. Então, além de gerar, cada aluno aprende a baixar o arquivo, criar uma pasta do seu jogo e dar nomes claros aos arquivos. Esse hábito é o que vai permitir, lá na Aula 7, montar um pacote de imagens próprio e bem arrumado.

Ao final, cada aluno terá gerado de duas a quatro imagens de teste para o universo do seu jogo (um personagem, um cenário, um item) e terá começado a pasta do projeto. O clima é de experimentação alegre: erramos, ajustamos a frase e tentamos de novo. A mágica não está na ferramenta, e sim na clareza das palavras que o aluno aprende a usar.`,
  materiais: [
    `Computadores (um por aluno) com navegador atualizado e acesso ao Gemini com o Nano Banana (geração/edição de imagem por IA) habilitado`,
    `Contas de acesso ao Gemini já criadas e testadas antes da aula (logins da escola para os alunos)`,
    `Projetor ou TV para o professor demonstrar a tela do Gemini para a turma`,
    `Arquivo de exemplo: cartaz com a receita de prompt (assunto, estilo, cor, iluminação) impresso ou no slide`,
    `Pasta de exemplos com 3 a 4 imagens prontas (boas e ruins) para comparar prompts vagos e prompts ricos`,
    `Folha de planejamento simples: cada aluno anota o nome do jogo e três elementos (personagem, cenário, item)`,
    `Fones de ouvido opcionais e uma pasta compartilhada da turma para salvar os arquivos`,
  ],
  conceitosChave: [
    `Nano Banana — modelo de IA dentro do Gemini que gera e edita imagens a partir de texto em português.`,
    `Prompt — o pedido escrito que enviamos para a IA; quanto mais claro, melhor a imagem.`,
    `Assunto — o "o quê" da imagem: o personagem, o objeto ou o cenário principal.`,
    `Estilo — o "como" da imagem: cartoon, pixel art, realista, aquarela, 3D.`,
    `Paleta de cores — o conjunto de cores que define o clima da imagem (vivas, frias, pastel).`,
    `Iluminação — a luz da cena (suave, dramática, fim de tarde) que muda totalmente a sensação.`,
    `Organização de arquivos — salvar, nomear e guardar a imagem em uma pasta para achar depois.`,
  ],
  treinamento: `## O que o professor precisa saber

O Nano Banana é o gerador e editor de imagens por IA que funciona dentro do Gemini. Você não precisa ser artista nem dominar a ferramenta: basta saber escrever um pedido claro. Antes da aula, faça login no Gemini, confirme que o recurso de imagem está ativo e gere uma imagem de teste para ter certeza de que a conta funciona. Tenha a receita de prompt sempre à mão: assunto, estilo, cor e iluminação. Essa é a espinha dorsal de tudo nesta aula.

No Gemini, a área de conversa fica no centro da tela e a caixa de texto onde se escreve o pedido fica embaixo. Você digita a frase, aperta o botão de enviar (a setinha) e, em segundos, a imagem aparece. Para salvar, passe o mouse sobre a imagem gerada e clique no ícone de baixar (uma seta apontando para baixo) ou clique com o botão direito e escolha "Salvar imagem como". É só isso. O segredo da boa aula não está em menus complicados, e sim na qualidade das palavras.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): pergunte à turma "se vocês pudessem desenhar qualquer coisa só falando, o que desenhariam?". Mostre no projetor duas imagens da pasta de exemplos: uma feita com prompt vago e outra com prompt rico. Pergunte qual ficou melhor e por quê. Conduza a turma até a palavra "detalhe".

Conteúdo novo guiado (15 min): no projetor, abra o Gemini e mostre a caixa de texto. Apresente a receita assunto + estilo + cor + iluminação. Gere ao vivo: digite "um gato astronauta, estilo cartoon, cores vivas, iluminação suave" e envie. Depois mude só uma palavra (troque "cartoon" por "pixel art") e gere de novo para mostrar o poder do estilo. Em seguida, demonstre como baixar a imagem e onde ela cai no computador.

Mão na massa (25 min): cada aluno faz login, escolhe um elemento do seu jogo (um personagem, por exemplo) e escreve o prompt usando a receita. Circule pela sala. Peça que gerem, observem e melhorem a frase. Cada aluno deve gerar de duas a quatro imagens de teste. Nos últimos minutos, oriente todos a criar a pasta do jogo na área de trabalho ou na pasta da turma e salvar os arquivos com nomes claros, como "personagem-herói-v1".

Desafio e compartilhar (10 min): proponha o desafio "mude uma única palavra do seu prompt e mostre como a imagem muda". Faça uma roda rápida: cada aluno mostra sua imagem favorita e lê o prompt que usou. Elogie pedidos claros e celebre os erros úteis.

## Como explicar de forma clara (linguagem para a idade)

Use a metáfora da pizza: "o prompt é o seu pedido na pizzaria; se você só fala 'pizza', vem qualquer uma; se você fala o sabor, a borda e o tamanho, vem a sua". Diga que a IA é muito boa em obedecer, mas não adivinha; ela faz exatamente o que entende. Repita o bordão "assunto, estilo, cor, luz" como uma musiquinha. Mostre que trocar uma palavra é como apertar um botão mágico que muda tudo. Valorize a tentativa: "não existe errar, existe ainda não ajustar a frase".

## Erros comuns e como ajudar

O erro mais frequente é o prompt curto demais, como "um dragão". Peça que o aluno adicione estilo, cor e luz. Outro erro é misturar dez ideias numa frase só, o que confunde a IA; oriente a escolher um assunto principal. Alguns alunos esquecem de salvar e perdem o trabalho; reforce o passo de baixar e nomear antes de gerar a próxima imagem. Há quem queira "a imagem perfeita" de primeira e fique frustrado; lembre que esta aula é de teste e que versões são normais (v1, v2, v3). Por fim, cuidado com nomes de arquivo iguais que se sobrescrevem: ensine a numerar as versões.`,
  exercicios: [
    {
      titulo: `Minha primeira imagem com a receita`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno esteja logado no Gemini. Escreva a receita no quadro: assunto, estilo, cor, iluminação. Circule e confirme que todos enviaram pelo menos um prompt e viram a imagem aparecer.`,
      atividade: `Escolha um elemento do seu jogo e escreva um prompt completo usando a receita (assunto, estilo, cor e iluminação). Envie no Gemini e gere a sua primeira imagem.`,
      gabarito: `O aluno deve produzir uma frase com os quatro itens, por exemplo: "um robô amigável, estilo cartoon, cores azul e laranja, iluminação suave". A imagem gerada deve corresponder ao pedido. Considere correto qualquer prompt que tenha assunto claro mais pelo menos estilo, cor e iluminação.`,
    },
    {
      titulo: `Troque uma palavra, mude tudo`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor um exemplo trocando só o estilo. Peça que cada aluno repita a experiência com o próprio prompt. O foco é perceber o impacto de uma única mudança.`,
      atividade: `Pegue o prompt da atividade anterior e mude apenas UMA palavra (por exemplo, o estilo ou a cor). Gere de novo e compare as duas imagens.`,
      gabarito: `O aluno deve manter o prompt quase igual e alterar somente uma palavra, gerando uma segunda imagem visivelmente diferente. Espera-se que ele explique em uma frase o que mudou, por exemplo: "troquei cartoon por pixel art e a imagem ficou quadradinha".`,
    },
    {
      titulo: `Caça ao prompt fraco (em dupla)`,
      tipo: `em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas. Entregue ou projete um prompt fraco, como "um castelo". Oriente as duplas a melhorá-lo juntas e testar no Gemini. Reforce a receita.`,
      atividade: `Em dupla, peguem o prompt fraco "um castelo" e melhorem juntos acrescentando estilo, cor e iluminação. Gerem a imagem e comparem com a versão fraca.`,
      gabarito: `A dupla deve transformar "um castelo" em algo rico, por exemplo: "um castelo medieval em uma colina, estilo aquarela, cores quentes de outono, iluminação dourada de fim de tarde". A nova imagem deve ter claramente mais detalhe e clima do que a versão original.`,
    },
    {
      titulo: `Roda de prompts: o que funcionou?`,
      tipo: `roda de conversa`,
      tempo: `6 minutos`,
      guiaProfessor: `Sente a turma em roda. Cada aluno mostra a imagem favorita e lê o prompt em voz alta. Conduza a reflexão: qual palavra fez a maior diferença? Anote no quadro as palavras campeãs.`,
      atividade: `Mostre para a turma a sua imagem favorita de hoje, leia o prompt que você usou e diga qual palavra você acha que mais ajudou a IA.`,
      gabarito: `Não há resposta única. Considere completo quando o aluno lê um prompt com os quatro elementos da receita e aponta, com justificativa simples, uma palavra que mudou o resultado (por exemplo: "a palavra 'iluminação dramática' deixou a cena mais séria").`,
    },
    {
      titulo: `Começando minha pasta do jogo`,
      tipo: `projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre como criar uma pasta e baixar a imagem. Ensine a nomear arquivos com versões (v1, v2). Verifique que cada aluno salvou pelo menos duas imagens com nomes claros antes do fim da aula.`,
      atividade: `Crie uma pasta com o nome do seu jogo, baixe pelo menos duas imagens que você gerou hoje e salve cada uma com um nome claro, como "personagem-heroi-v1" e "cenario-floresta-v1".`,
      gabarito: `Espera-se uma pasta nomeada com o jogo do aluno contendo no mínimo duas imagens baixadas, com nomes descritivos e numeração de versão. Um exemplo correto: pasta "JogoDoNino" com os arquivos "personagem-heroi-v1.png" e "item-espada-v1.png". Nomes genéricos como "imagem1" devem ser corrigidos para descritivos.`,
    },
  ],
};
