import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Caçadores de erros da IA",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Investigar de propósito onde o próprio modelo de IA erra, descobrir a causa e provar que ele melhora quando adicionamos novos exemplos e treinamos de novo.`,
  descricao: `Nesta aula as crianças viram detetives. Em vez de torcer para a IA acertar, elas vão tentar enganar o próprio modelo de propósito: dar exemplos esquisitos, parecidos demais ou diferentes do normal, e anotar com cuidado cada vez que a máquina escorrega. A ideia é transformar o erro em pista, não em fracasso. Quando descobrimos por que a IA errou, ganhamos o poder de consertar.

O foco é fazer as crianças perceberem que a IA não é mágica nem perfeita: ela só conhece aquilo que mostramos no treino. Se mostramos poucos exemplos, ela fica insegura. Se os exemplos de duas categorias são parecidos demais, ela se confunde e mistura as respostas. Esses dois problemas — "poucos exemplos" e "exemplos parecidos demais entre categorias" — são as causas mais comuns de erro e vão aparecer o tempo todo na atividade.

Depois de caçar os erros, vem a parte mais importante: o conserto. As crianças voltam ao ML for Kids, adicionam novos exemplos justamente nos pontos fracos que descobriram, clicam para treinar de novo e testam outra vez aquela mesma entrada que enganava o modelo. Quando a IA finalmente acerta o que antes errava, a turma comemora: elas comprovaram, com as próprias mãos, que dados melhores deixam a IA mais esperta.

Essa aula é a ponte entre "saber treinar" (Aula 2) e "saber melhorar de verdade" (próximas aulas e projeto final). É também um treino de paciência e de método científico: observar, anotar, mudar uma coisa de cada vez e comparar o antes e o depois.`,
  materiais: [
    `Computadores (um por dupla) com o navegador aberto no projeto de IA das crianças no ML for Kids (machinelearningforkids.co.uk), já com login feito`,
    `Projetor ou TV para o professor mostrar a tela do ML for Kids e fazer a demonstração ao vivo`,
    `Um modelo já treinado na Aula 2 em cada projeto (por exemplo: classificar texto em "elogio" e "reclamação", ou imagens de "gato" e "cachorro")`,
    `Folha de caça aos erros impressa: colunas "O que eu testei", "O que a IA respondeu", "Acertou ou errou?", "Por quê?"`,
    `Lápis ou caneta para anotar e adesivos/estrelinhas para marcar os erros descobertos`,
    `Cartão grande com as duas causas comuns escritas: "Poucos exemplos" e "Exemplos parecidos demais"`,
    `Cronômetro ou timer projetado para controlar os blocos de tempo da aula`,
  ],
  conceitosChave: [
    `Caçar erros — testar a IA de propósito para descobrir onde ela escorrega, como um detetive procurando pistas.`,
    `Erro da IA — quando a máquina dá uma resposta diferente da certa; não é defeito da criança, é uma pista para melhorar.`,
    `Poucos exemplos — quando ensinamos a IA com pouquíssimas amostras, ela fica insegura e chuta mais.`,
    `Exemplos parecidos demais — quando duas categorias têm amostras muito iguais, a IA se confunde e troca as respostas.`,
    `Confiança — o número (em porcentagem) que a IA mostra dizendo o quanto ela acha que está certa.`,
    `Treinar de novo — apertar o botão de treinar depois de adicionar exemplos novos, para a IA reaprender já corrigida.`,
    `Antes e depois — comparar a resposta da IA antes do conserto e depois do conserto para provar que ela melhorou.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA. O ML for Kids é um site gratuito onde a criança ensina um modelo dando exemplos rotulados (chamados de "buckets" ou categorias) e depois clica em "Train new machine learning model". Nesta aula o modelo JÁ existe (foi feito na Aula 2). O nosso trabalho hoje é quebrá-lo de propósito para entender e consertar. A grande mensagem é: a IA só sabe o que mostramos. Erro não é castigo, é pista. As duas causas que você vai repetir o tempo todo são "poucos exemplos" e "exemplos parecidos demais entre categorias". Tenha o seu próprio projeto aberto no projetor para demonstrar cada passo antes de soltar as crianças.

## Passo a passo da aula

10 min — Aquecimento e revisão. Pergunte: "A IA acerta sempre?". Deixe responderem. No projetor, abra o seu projeto, clique no botão "Test" (ou "Make"/"Learn & Test", dependendo da versão) e teste uma entrada fácil: a IA acerta. Comemore. Agora teste uma entrada esquisita de propósito e mostre a IA errando ou com confiança baixa. Diga: "Hoje somos caçadores de erros!".

15 min — Conteúdo novo guiado. Mostre as duas causas no cartão grande. Demonstre "poucos exemplos": abra uma categoria (clique no nome do bucket) e mostre que ela tem só 3 ou 4 exemplos. Explique que pouca informação deixa a IA chutando. Depois demonstre "parecidos demais": mostre dois exemplos quase iguais em categorias diferentes e teste algo no meio do caminho — a IA hesita. Ensine onde olhar a confiança: ao clicar em "Test", o ML for Kids mostra o rótulo e a porcentagem. Confiança baixa (por exemplo, 55%) é sinal de modelo inseguro.

25 min — Mão na massa (duplas). Cada dupla abre o próprio projeto, vai em "Test" e tenta enganar o modelo: digitar frases torcidas, ambíguas, ou mostrar imagens diferentes. A cada teste, anotam na folha: o que testaram, o que a IA respondeu, se acertou e o porquê (pouco exemplo? parecido demais?). Peça pelo menos 4 erros anotados. Depois, a dupla volta em "Train", clica em "Add new label" não — em vez disso, entra na categoria certa e clica em "Add example" para inserir 3 a 5 exemplos novos parecidos com os que enganaram. Voltam ao topo e clicam em "Train new machine learning model". Esperam o modelo ficar "Available" e testam de novo a MESMA entrada que enganava. Anotam o "antes e depois".

10 min — Desafio e compartilhar. Cada dupla mostra um erro que caçou e conta como consertou. Pergunte: "A confiança subiu?". Celebre quem provou a melhora.

## Como explicar para crianças

Use a ideia do detetive: "Vamos procurar o ponto fraco da nossa IA, como um detetive procura pistas". Para "poucos exemplos", diga: "Se você só viu 3 cachorros na vida, vai confundir um lobo com um cachorro. A IA também". Para "parecidos demais", diga: "Se duas gavetas têm coisas quase iguais, você abre a errada. A IA também se atrapalha". Reforce sempre: "Errar não é ruim, errar mostra onde melhorar". E ao final do conserto: "Demos mais exemplos, treinamos de novo, e a IA ficou mais esperta — você ensinou ela!".

## Erros comuns e como ajudar

A criança esquece de clicar em "Train new machine learning model" depois de adicionar exemplos e acha que não melhorou — lembre que sem treinar de novo a IA não reaprende. A criança adiciona o exemplo na categoria errada — confira junto antes de treinar. A dupla testa coisas totalmente fora do tema (a IA chuta porque nunca viu) — explique que isso é normal e é outro tipo de limite. A criança fica frustrada quando a IA continua errando — mostre que pode precisar de mais exemplos ainda, e que melhorar aos poucos também é vitória. Por fim, alguns esperam acerto de 100% — explique que confiança alta já é ótimo e que IA quase nunca é perfeita.`,
  exercicios: [
    {
      titulo: `Acertou ou errou?`,
      tipo: `Observação guiada`,
      tempo: `5 minutos`,
      guiaProfessor: `Projete o seu modelo e faça três testes ao vivo: um fácil (a IA acerta), um esquisito (a IA erra) e um ambíguo (confiança baixa). Peça para a turma gritar "ACERTOU" ou "ERROU" a cada um e olhar a porcentagem de confiança na tela.`,
      atividade: `Olhe a tela do professor. A cada teste da IA, diga em voz alta se ela acertou ou errou e leia o número da confiança que aparece.`,
      gabarito: `Teste fácil: a IA acerta com confiança alta (por exemplo, 90% ou mais). Teste esquisito: a IA erra ou troca a categoria. Teste ambíguo: a IA até pode acertar, mas com confiança baixa (perto de 50% a 60%), sinal de que ela ficou insegura.`,
    },
    {
      titulo: `Encontre o ponto fraco`,
      tipo: `Investigação em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Cada dupla abre o próprio projeto e clica em "Test". O objetivo é enganar o modelo de propósito pelo menos 3 vezes e anotar cada erro na folha de caça. Circule pela sala perguntando "por que será que ela errou aqui?".`,
      atividade: `Tente enganar a sua IA. Digite frases torcidas ou mostre exemplos diferentes até ela errar. Anote na folha cada erro: o que você testou e o que a IA respondeu.`,
      gabarito: `A dupla deve ter pelo menos 3 linhas preenchidas com erros reais. Exemplo válido: testaram "o produto chegou quebrado mas eu adorei a caixa" e a IA classificou como "elogio" quando deveria ser "reclamação". Qualquer erro anotado de forma honesta conta como certo.`,
    },
    {
      titulo: `Detetive das causas`,
      tipo: `Análise e classificação`,
      tempo: `8 minutos`,
      guiaProfessor: `Com a folha de erros na mão, a dupla decide para cada erro qual foi a causa: "poucos exemplos" ou "exemplos parecidos demais". Ajude-os a abrir as categorias no ML for Kids e contar quantos exemplos cada uma tem.`,
      atividade: `Olhe cada erro que você anotou. Escreva ao lado a causa: foi "poucos exemplos" (a categoria tinha pouquinhos) ou "parecidos demais" (duas categorias muito iguais)?`,
      gabarito: `Cada erro deve ter uma causa marcada. Se a categoria certa tinha poucos exemplos (3 ou 4), a causa é "poucos exemplos". Se a frase testada parecia muito com exemplos de outra categoria, a causa é "parecidos demais". Pode haver erros com as duas causas juntas — isso também está correto.`,
    },
    {
      titulo: `Conserto e treino`,
      tipo: `Mão na massa`,
      tempo: `7 minutos`,
      guiaProfessor: `A dupla entra na categoria certa, clica em "Add example" e adiciona de 3 a 5 exemplos novos parecidos com os que enganaram. Depois voltam ao topo e clicam em "Train new machine learning model". Confirme com cada dupla que o exemplo foi para a categoria certa antes de treinar.`,
      atividade: `Adicione 3 a 5 exemplos novos na categoria certa, parecidos com o que enganou a IA. Depois clique em "Train new machine learning model" e espere o modelo ficar pronto ("Available").`,
      gabarito: `Sucesso é: exemplos novos adicionados na categoria correta e o modelo treinado de novo, mostrando o status "Available" (ou "model is ready"). Se esqueceram de treinar, o conserto não vale ainda — precisam clicar no botão de treinar.`,
    },
    {
      titulo: `Prova do antes e depois`,
      tipo: `Comprovação e compartilhar`,
      tempo: `7 minutos`,
      guiaProfessor: `A dupla testa de novo a MESMA entrada que antes enganava a IA e compara a resposta e a confiança com o que tinham anotado. Cada dupla apresenta um caso para a turma: "antes errava, agora acerta". Celebre as melhoras e acolha os casos que ainda não melhoraram, sugerindo mais exemplos.`,
      atividade: `Teste outra vez aquela entrada que enganava a sua IA. Compare com o que você anotou antes. A IA acertou agora? A confiança subiu? Conte para a turma o seu antes e depois.`,
      gabarito: `Resultado esperado: a entrada que antes era classificada errada agora aparece na categoria certa, e/ou a confiança subiu (por exemplo, de 55% para 85%). Se ainda errar, a resposta certa é reconhecer que talvez precise de mais exemplos — isso mostra que a dupla entendeu a lógica de melhorar a IA com dados.`,
    },
  ],
};
