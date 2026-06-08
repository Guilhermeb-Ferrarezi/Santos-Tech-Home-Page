import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 1,
  titulo: "Primeiros Vídeos com o Veo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Gerar o primeiro clipe curto de vídeo com IA no Gemini + Veo, entendendo a anatomia de um prompt de vídeo (sujeito, ação, cenário e estilo) e como esse clipe se conecta ao projeto de jogo do aluno.`,
  descricao: `Neste mês os alunos avançam no uso de vídeo com inteligência artificial. A ferramenta da vez é o Gemini com o modelo Veo, capaz de transformar uma descrição em texto (o prompt) em um vídeo curto e animado. É a primeira vez que muitos deles veem uma frase escrita virar movimento real na tela, e essa sensação de "mágica" é o gancho perfeito para a aula de abertura do mês.

Esta primeira aula é sobre experimentar e entender. Antes de querer o clipe perfeito, o aluno precisa sentir como a ferramenta responde: onde digitar, quanto tempo demora, o que sai bom e o que sai estranho. Por isso o objetivo aqui não é um vídeo lindo, e sim um primeiro clipe de teste que ensine a lógica da máquina. A partir desse teste, introduzimos a anatomia do prompt de vídeo dividida em quatro partes simples: sujeito (quem ou o quê aparece), ação (o que está acontecendo), cenário (onde acontece) e estilo (a aparência, como desenho animado, realista ou pixel art).

Tudo isso já olhando para o projeto de jogo de cada aluno. No Ano 1 e no mês passado eles trabalharam com personagens, cenários e ideias de games. Agora o vídeo com IA vira mais uma peça desse mundo: um trailer, uma cutscene de abertura, uma animação de fundo. Por isso, desde o primeiro clipe, pedimos que o tema seja algo do jogo do aluno (o herói correndo, a nave decolando, o mapa da fase). Assim, o "banco de vídeos da IA", entregável do mês, já começa a nascer conectado ao projeto.

Como professor, sua missão nesta aula é destravar a ferramenta e plantar o vocabulário. Não se preocupe em dominar todos os recursos avançados do Veo: o foco é o ciclo simples de escrever um prompt com as quatro partes, gerar, assistir e comentar o resultado. As próximas sete aulas vão aprofundar prompts, câmera, movimento e organização do banco. Hoje, basta que cada aluno saia com um clipe gerado por ele mesmo e com as palavras sujeito, ação, cenário e estilo na ponta da língua.`,
  materiais: [
    `Computadores (1 por aluno) com navegador atualizado e acesso ao Gemini com Veo já logado na conta da escola`,
    `Conta Google/Gemini da escola com o plano que libera a geração de vídeo (Veo) testada antes da aula`,
    `Projetor ou TV ligada ao computador do professor para demonstrar ao vivo a geração de um clipe`,
    `Internet estável e de boa velocidade (a geração de vídeo consome banda e pode demorar)`,
    `Arquivo de exemplo: lista impressa ou no projetor com 3 prompts-modelo já quebrados em sujeito, ação, cenário e estilo`,
    `Caderno ou bloco de notas digital para o aluno anotar o prompt que escreveu e o resultado que viu`,
    `Pasta compartilhada (ou pasta no computador) chamada "Banco de Vídeos" para guardar os primeiros testes`,
  ],
  conceitosChave: [
    `Veo — modelo de inteligência artificial, dentro do Gemini, que cria vídeos curtos a partir de uma descrição em texto.`,
    `Prompt de vídeo — a frase ou texto que você escreve para dizer à IA qual vídeo quer ver.`,
    `Sujeito — quem ou o quê é o personagem principal do clipe (o herói, a nave, o dragão).`,
    `Ação — o que está acontecendo na cena (correndo, voando, explodindo, pulando).`,
    `Cenário — o lugar onde a cena acontece (floresta, espaço, cidade futurista, masmorra).`,
    `Estilo — a aparência do vídeo (desenho animado, realista, pixel art, estilo cinema).`,
    `Clipe de teste — um vídeo curto feito só para experimentar e entender como a ferramenta responde, sem precisar ficar perfeito.`,
  ],
  treinamento: `## O que o professor precisa saber

O Veo é o gerador de vídeo da família Gemini. Você escreve um texto (o prompt) e ele devolve um clipe curto, normalmente de poucos segundos. Antes da aula, faça você mesmo o caminho completo uma vez: abra o Gemini no navegador, confirme que está logado na conta da escola e verifique se a opção de gerar vídeo (Veo) aparece. Em geral ela fica no seletor de modelo, no topo, ou em um menu de ferramentas/criação perto da caixa de texto onde se digita a mensagem. Gere um clipe de teste para saber quanto tempo demora na internet da escola (pode levar de alguns segundos a alguns minutos) e para não ser pego de surpresa em sala. Tenha 2 ou 3 prompts prontos no bolso.

A regra de ouro da aula é a anatomia do prompt em quatro partes: sujeito, ação, cenário e estilo. Você vai repetir essas quatro palavras várias vezes. Elas são o esqueleto de tudo que vem no mês.

## Passo a passo da aula

Aquecimento (10 min): receba a turma e relembre o mês anterior. Pergunte: "quem lembra de um vídeo de IA que viu por aí?". Mostre no projetor um clipe curto que você gerou antes e diga: "isso aqui nasceu de UMA frase. Hoje vocês vão escrever a frase de vocês."

Conteúdo novo guiado (15 min): abra o Gemini no projetor. Mostre onde clicar para ativar o vídeo (Veo) no seletor de modelo ou no menu de criação ao lado da caixa de texto. Apresente a anatomia do prompt escrevendo na lousa: Sujeito + Ação + Cenário + Estilo. Monte um exemplo ao vivo, por exemplo: "Um robô azul (sujeito) correndo (ação) por uma cidade futurista à noite (cenário), estilo desenho animado (estilo)". Clique em gerar e, enquanto carrega, explique cada parte. Quando o clipe aparecer, assista junto e comente o que funcionou.

Mão na massa (25 min): cada aluno no seu computador. Peça que escolham um elemento do próprio jogo como sujeito. Eles escrevem o primeiro prompt usando as quatro partes, geram e assistem. Circule pela sala. Para quem travar, ofereça um dos prompts-modelo. Incentive a gerar um segundo clipe mudando só uma parte (por exemplo, trocar o estilo) para verem a diferença. Lembre que é teste: não precisa ficar perfeito.

Desafio e compartilhar (10 min): proponha um mini desafio (trocar o cenário do clipe) e abra a roda. Dois ou três alunos mostram o vídeo e leem o prompt em voz alta, dizendo qual parte é o sujeito, a ação, o cenário e o estilo.

## Como explicar de forma clara

Para a idade (10 a 15 anos), use a comparação de "dar uma receita para a IA": se você esquece um ingrediente, o prato sai estranho. O sujeito é o personagem, a ação é o que ele faz, o cenário é o palco e o estilo é a roupa visual. Fale devagar e mostre na tela cada vez que citar um termo. Evite palavras técnicas demais; prefira "frase que descreve o vídeo" em vez de jargão. Comemore os erros engraçados que a IA produz, porque eles ajudam a entender que a máquina segue exatamente o que foi escrito.

## Erros comuns e como ajudar

O erro mais comum é o prompt curto demais, tipo só "um dragão". Mostre como ele fica vago e ajude a completar com ação, cenário e estilo. O segundo erro é querer perfeição no primeiro clipe e ficar frustrado; reforce que hoje é teste. O terceiro é escrever um prompt enorme e confuso, com dez ideias juntas; ensine a focar em UMA cena. Há também quem gere muitas vezes seguidas e sobrecarregue a internet ou a cota; peça que assistam e anotem antes de gerar de novo. Por fim, alguns esquecem de ligar o vídeo (Veo) e ficam só no chat de texto; passe na mesa e confirme que o modo de vídeo está selecionado.`,
  exercicios: [
    {
      titulo: `Meu primeiro clipe de teste`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha o modo de vídeo (Veo) ativado antes de começar. Aceite qualquer tema simples; o objetivo é só fazer o ciclo escrever-gerar-assistir funcionar uma vez.`,
      atividade: `Escreva um prompt curto com pelo menos um sujeito e uma ação, gere o vídeo no Gemini + Veo e assista ao resultado. Anote no caderno o prompt que você escreveu.`,
      gabarito: `O aluno consegue gerar e assistir a um clipe. Exemplo de prompt válido: "Um gato pulando em cima de uma caixa". Espera-se um vídeo curto mostrando o gato pulando; pequenas imperfeições são normais e esperadas neste teste.`,
    },
    {
      titulo: `Encontre as quatro partes`,
      tipo: `Desafio individual`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor um prompt completo e peça que os alunos separem as quatro partes no caderno. Corrija junto, perguntando parte por parte.`,
      atividade: `Leia este prompt e separe sujeito, ação, cenário e estilo: "Uma nave espacial prateada decolando de um planeta vermelho, estilo cinema realista".`,
      gabarito: `Sujeito: uma nave espacial prateada. Ação: decolando. Cenário: de um planeta vermelho. Estilo: cinema realista. Aceitar pequenas variações de palavras, desde que a categoria esteja correta.`,
    },
    {
      titulo: `Prompt do meu jogo`,
      tipo: `Projeto curto individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que o sujeito seja um elemento do jogo do próprio aluno. Confira se o prompt tem as quatro partes antes de o aluno gerar; ajude quem deixou cenário ou estilo de fora.`,
      atividade: `Escreva um prompt completo com sujeito, ação, cenário e estilo, usando um personagem ou elemento do SEU jogo. Gere o vídeo e salve o clipe na pasta "Banco de Vídeos".`,
      gabarito: `Prompt deve conter as quatro partes e o sujeito deve vir do jogo do aluno. Exemplo: "Meu herói cavaleiro azul (sujeito) atacando com a espada (ação) em uma masmorra escura (cenário), estilo pixel art (estilo)". O clipe gerado deve estar salvo na pasta.`,
    },
    {
      titulo: `Troca de estilo em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `7 minutos`,
      guiaProfessor: `Forme duplas. A ideia é que os dois usem o mesmo sujeito, ação e cenário, mudando só o estilo, e comparem os resultados. Reforce que isso mostra o poder da palavra "estilo".`,
      atividade: `Em dupla, escolham um mesmo sujeito, ação e cenário. Um colega gera o clipe em estilo desenho animado e o outro em estilo realista. Comparem os dois vídeos e digam qual parte mudou.`,
      gabarito: `Os dois clipes devem mostrar a mesma cena com aparências diferentes. A dupla deve concluir que apenas o estilo foi alterado, e que a mesma cena pode ter visuais bem distintos. Exemplo: "robô andando na floresta" em desenho fica colorido e fofo; em realista fica detalhado e sério.`,
    },
    {
      titulo: `Roda do clipe: o que eu pediu, o que veio`,
      tipo: `Roda de conversa`,
      tempo: `10 minutos`,
      guiaProfessor: `Conduza a roda com perguntas. Peça que dois ou três alunos mostrem o clipe e leiam o prompt, apontando cada uma das quatro partes. Valorize tanto os acertos quanto os resultados engraçados.`,
      atividade: `Mostre para a turma um dos seus clipes, leia o prompt em voz alta e explique qual é o sujeito, a ação, o cenário e o estilo. Conte o que combinou com o que você pediu e o que saiu diferente.`,
      gabarito: `Não há resposta única. Espera-se que o aluno identifique corretamente as quatro partes do próprio prompt e comente ao menos uma diferença entre o que pediu e o que a IA gerou. Exemplo de fala: "Pedi o dragão voando, mas ele apareceu parado, então minha ação não ficou clara". Demonstra que entendeu a ligação entre prompt e resultado.`,
    },
  ],
};
