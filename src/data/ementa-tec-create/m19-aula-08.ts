import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Pacote pronto e apresentado",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar o pacote de imagens próprio, conferir qualidade e formatos e apresentar como cada imagem será usada dentro do jogo.`,
  descricao: `Esta é a aula de fechamento do mês. Ao longo das últimas semanas, cada aluno gerou e editou imagens com o Gemini + Nano Banana e, na aula passada, começou a organizar tudo em um pacote próprio. Agora chega a hora de consolidar: revisar cada imagem, garantir que ela está bonita, na resolução certa e no formato certo, e separar o material que de fato será reaproveitado no jogo do Roblox.

A ideia central é simples: um pacote de imagens não é só uma pasta cheia de arquivos. É um conjunto organizado, com nomes claros, formatos corretos (PNG com fundo transparente para ícones e elementos, JPG ou PNG para fundos e cenários) e uma intenção por trás de cada imagem. O aluno precisa saber explicar para que serve cada peça: este é o ícone de vida, esta é a textura da parede, este é o fundo da tela de início.

A segunda metade da aula é dedicada à apresentação. Cada aluno mostra, em poucos minutos, o seu pacote e conta a história dele: o que gerou, o que editou, quais versões testou e como aquela imagem vai aparecer no jogo. Isso treina comunicação, organização e orgulho do próprio trabalho — habilidades tão importantes quanto saber escrever um prompt.

Para o professor, esta aula é menos sobre ensinar uma ferramenta nova e mais sobre ajudar o aluno a olhar com olhar crítico para o que já fez, corrigir os últimos detalhes e celebrar a entrega. É o momento de fechar o ciclo do mês com uma vitória concreta na mão de cada um.`,
  materiais: [
    `Computadores com acesso ao Gemini (gemini.google.com) e ao recurso de imagem Nano Banana, com as contas dos alunos já conectadas`,
    `Projetor ou TV para a roda de apresentações e para mostrar exemplos`,
    `Uma pasta no computador (ou nuvem) para cada aluno guardar o pacote final de imagens`,
    `Arquivo de exemplo: um pacote-modelo já pronto, com ícones em PNG transparente, uma textura e um fundo, mostrando nomes bem escolhidos`,
    `Lista de verificação impressa (checklist) com os itens de qualidade do pacote`,
    `Cronômetro ou timer visível para controlar o tempo de cada apresentação`,
  ],
  conceitosChave: [
    `Pacote de imagens — conjunto organizado de imagens próprias, separadas por uso, prontas para entrar no jogo.`,
    `Formato de arquivo — o tipo do arquivo de imagem; PNG guarda transparência, JPG é mais leve para fundos e fotos.`,
    `Fundo transparente — área "vazia" da imagem (sem cor) que deixa o cenário do jogo aparecer atrás do ícone ou elemento.`,
    `Resolução — o tamanho da imagem em pixels; quanto maior, mais nítida, mas também mais pesada.`,
    `Nomeação de arquivos — dar nomes claros e organizados (por exemplo "ícone-vida" em vez de "imagem3") para achar tudo depois.`,
    `Reaproveitamento — usar a mesma arte criada com IA dentro do jogo no Roblox, em vez de gerar tudo de novo.`,
    `Apresentação — mostrar e explicar o próprio trabalho de forma curta e clara para os colegas.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista. Esta aula reúne o que os alunos já fizeram. Seu papel é guiar a conferência de qualidade e conduzir a roda de apresentações. Tenha o pacote-modelo aberto para mostrar como um pacote organizado se parece: nomes claros, ícones em PNG com fundo transparente e fundos em JPG ou PNG. Lembre-se de dois pontos práticos do Nano Banana: para baixar uma imagem gerada no Gemini, passe o mouse sobre ela e clique no ícone de download (seta para baixo) ou nos três pontinhos e em "Baixar"; para pedir fundo transparente, escreva no prompt algo como "com fundo transparente, em PNG". Se o fundo vier branco, peça de novo reforçando "remova o fundo, deixe transparente".

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): faça uma roda rápida. Cada aluno diz, em uma frase, qual é a imagem favorita do pacote dele e por quê. Projete o pacote-modelo e mostre a diferença entre uma pasta bagunçada ("imagem1, imagem2, foto final final2") e uma pasta organizada ("ícone-vida.png", "fundo-floresta.jpg", "textura-pedra.png").

Conteúdo novo guiado (15 min): apresente a lista de verificação. No Gemini, mostre como reabrir uma imagem antiga (role a conversa ou use o histórico no menu lateral). Demonstre como conferir o formato: ao baixar, o nome do arquivo termina em ".png" ou ".jpg". Mostre como pedir uma correção rápida pelo próprio chat, por exemplo: "Deixe esta imagem mais nítida e com fundo transparente, em PNG". Explique quando usar cada formato: PNG transparente para ícones e elementos soltos; JPG ou PNG para fundos e cenários.

Mão na massa (25 min): cada aluno abre o próprio pacote e passa pela lista de verificação, imagem por imagem. Eles corrigem o que falta: regeram uma imagem borrada, pedem fundo transparente onde precisa, renomeiam os arquivos com nomes claros e separam em duas categorias — "vai para o jogo" e "extra". Circule pela sala ajudando quem travar. A meta é cada um terminar com o pacote completo, conferido e nomeado.

Desafio e compartilhar (10 min): roda de apresentações relâmpago. Cada aluno mostra o pacote no projetor por cerca de um minuto e responde: o que é cada imagem e onde ela vai aparecer no jogo. Feche com um aplauso coletivo.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de "kit": "Vocês montaram um kit de arte do seu jogo, como um kit de adesivos." Para formatos, diga: "PNG transparente é como um adesivo recortado, sem aquele quadrado branco em volta; JPG é como uma foto, ótima para o cenário de fundo." Para nomes de arquivo: "Imagine procurar a sua camiseta numa gaveta sem etiqueta. Dar nome bom é colocar etiqueta." Para a apresentação: "Não é prova, é mostrar o que você criou com orgulho, em poucas palavras."

## Erros comuns e como ajudar

Ícone com fundo branco quando devia ser transparente: o aluno esqueceu de pedir transparência. Ajude a reescrever o prompt com "remova o fundo, deixe transparente, em PNG". Imagem borrada ou pequena: peça para regerar pedindo "mais nítida e em alta resolução". Nomes bagunçados: sente ao lado e renomeie um arquivo junto, como exemplo, depois deixe ele seguir. Aluno que quer recomeçar tudo: lembre que o objetivo é finalizar, não criar de novo; ajude a escolher as três melhores imagens. Timidez na apresentação: dê uma pergunta-guia simples ("Qual é a sua imagem favorita e onde ela aparece no jogo?") para destravar.`,
  exercicios: [
    {
      titulo: `Conferência de qualidade do pacote`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Entregue a lista de verificação e peça que cada aluno passe por todas as suas imagens marcando cada item. Circule e confira se eles abrem os arquivos baixados para ver o formato.`,
      atividade: `Abra o seu pacote e confira imagem por imagem: está nítida? Está no formato certo (PNG transparente para ícones, JPG ou PNG para fundos)? O nome do arquivo está claro? Marque cada item na lista.`,
      gabarito: `Pacote conferido com todos os itens marcados: imagens nítidas, ícones em PNG transparente, fundos em JPG ou PNG, e cada arquivo com nome claro (por exemplo "ícone-vida.png"). Espera-se que o aluno identifique pelo menos uma imagem que precisa de ajuste.`,
    },
    {
      titulo: `Corrigindo o detalhe que falta`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno escolha a imagem mais fraca do pacote e a melhore no Gemini com um único prompt de correção. Reforce os comandos de nitidez e transparência.`,
      atividade: `Escolha a imagem do seu pacote que está pior. No Gemini + Nano Banana, peça uma correção em um prompt só, por exemplo: "Deixe esta imagem mais nítida e com fundo transparente, em PNG." Baixe a versão corrigida.`,
      gabarito: `Imagem corrigida e baixada, claramente melhor que a original (mais nítida ou com o fundo transparente correto). Exemplo de prompt válido: "Melhore a nitidez deste ícone e remova o fundo, deixando transparente, em PNG."`,
    },
    {
      titulo: `Revisão entre colegas`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Cada aluno revisa o pacote do colega usando a lista de verificação e aponta um ponto forte e uma sugestão. Garanta um clima respeitoso e construtivo.`,
      atividade: `Troque de lugar com o colega da dupla. Olhe o pacote dele com a lista de verificação e escreva: um ponto forte ("o que está ótimo") e uma sugestão ("o que dá para melhorar"). Depois, invertam.`,
      gabarito: `Cada dupla produz dois retornos por aluno: um elogio específico (ex.: "o ícone de vida está bem recortado") e uma sugestão concreta (ex.: "o fundo da floresta poderia ficar mais nítido"). Sem comentários vagos como "está legal".`,
    },
    {
      titulo: `Roda de conversa: meu pacote no jogo`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza uma roda em que cada aluno escolhe uma imagem e diz exatamente onde ela vai aparecer no jogo do Roblox. Anote no quadro as ideias para conectar com as próximas aulas.`,
      atividade: `Escolha uma imagem do seu pacote e conte para a turma: o que é, e em que parte do jogo ela vai aparecer (tela de início, ícone na interface, textura de um objeto, fundo de cenário)?`,
      gabarito: `Cada aluno conecta pelo menos uma imagem a um uso concreto no jogo. Exemplos válidos: "este fundo vai na tela de início", "esta textura de pedra vai na parede da fase", "este ícone de vida vai no canto da interface".`,
    },
    {
      titulo: `Apresentação final do pacote`,
      tipo: `projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Use o projetor e o timer. Dê cerca de um minuto para cada aluno apresentar o pacote completo. Faça as duas perguntas-guia se a pessoa travar e puxe os aplausos no fim.`,
      atividade: `Apresente o seu pacote final para a turma no projetor. Em até um minuto, mostre as imagens e explique: o que você criou, o que editou e como cada imagem será usada no jogo.`,
      gabarito: `Apresentação completa em que o aluno mostra o pacote organizado e responde às três partes: o que criou, o que editou e onde cada imagem entra no jogo. Pacote final entregue na pasta, com arquivos nomeados e separados entre "vai para o jogo" e "extra".`,
    },
  ],
};
