import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Será que a IA acerta? Hora de testar",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Virar testadores da própria IA, dando várias entradas no ML for Kids para descobrir, sem frustração, quando ela acerta e quando se confunde, e anotar os pontos do jogo que precisam de ajuste.`,
  descricao: `Nas aulas anteriores cada criança treinou uma IA no ML for Kids e ligou ela ao seu protótipo com os blocos. Agora chega a parte mais divertida e mais importante: testar. Testar é dar muitos exemplos diferentes para a IA e observar com calma o que ela responde. Às vezes ela acerta na hora; às vezes ela se confunde e dá uma resposta engraçada ou errada. As duas coisas são ótimas, porque cada erro encontrado é um tesouro: mostra exatamente onde precisamos melhorar.

O coração desta aula é a ideia de que testar faz parte de criar. Programadores e criadores de jogos de verdade passam muito tempo testando, e ninguém fica bravo quando acha um erro. Pelo contrário: comemoram, porque agora sabem o que arrumar. As crianças vão usar o botão de testar do ML for Kids (a área "Make"/"Test") para escrever ou dizer várias entradas e ver o rótulo que a IA escolhe e a porcentagem de confiança que ela mostra.

Cada aluno recebe uma folha de testes simples, em formato de tabela, onde anota a entrada que deu, o que esperava, o que a IA respondeu e se foi acerto ou confusão. Essa folha vira o mapa de ajustes do protótipo. Ao marcar com um carimbo ou adesivo os pontos confusos, a criança aprende a olhar para o próprio trabalho com olhos de investigadora, sem desânimo.

A meta da aula não é ter uma IA perfeita, e sim ter uma lista clara de "o que funciona bem" e "o que precisa de ajuste". Essa lista será usada na próxima aula, quando vamos deixar a IA mais esperta. Hoje somos detetives gentis: observamos, anotamos e celebramos cada descoberta.`,
  materiais: [
    `Computadores com o ML for Kids aberto, já com o projeto e o modelo treinado de cada criança carregados`,
    `Projetor ou TV grande para o professor demonstrar o teste na tela "Make"/"Test" do ML for Kids`,
    `Exemplo pronto: um modelo simples já treinado pelo professor (ex.: reconhecer "amigo" ou "inimigo") para mostrar acertos e confusões`,
    `Folha de testes impressa para cada aluno (colunas: entrada, o que eu esperava, o que a IA respondeu, acertou ou confundiu)`,
    `Lápis, e carimbos ou adesivos coloridos para marcar os pontos confusos do jogo`,
    `Cartaz na parede com a frase "Testar faz parte de criar" e um desenho de lupa`,
  ],
  conceitosChave: [
    `Testar — dar vários exemplos para a IA e olhar com calma se ela respondeu certo.`,
    `Entrada — a coisa que você dá para a IA pensar (uma palavra, uma frase ou uma imagem).`,
    `Acerto — quando a IA escolhe o rótulo certo, igual ao que você esperava.`,
    `Confusão — quando a IA escolhe o rótulo errado ou fica em dúvida; não é um defeito, é uma pista.`,
    `Confiança — o número em porcentagem que mostra o quanto a IA tem certeza da resposta.`,
    `Folha de testes — a tabela onde anotamos cada teste para lembrar o que precisa de ajuste.`,
    `Ponto de ajuste — o lugar do jogo ou do modelo que se confundiu e vamos melhorar depois.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em IA. O ML for Kids guarda os projetos das crianças na página inicial, em "Projects" (Projetos): basta clicar duas vezes no cartão do projeto da criança para abrir. Dentro do projeto há três botões grandes: "Train" (treinar os exemplos), "Learn & Test" (aprender e testar) e "Make" (montar no Scratch ou ver blocos). Para testar o modelo, abra "Learn & Test"; ali aparece uma caixa escrita "Test by typing in some text" (testar digitando um texto) ou, em projetos de imagem, um campo para enviar uma foto. A criança escreve uma entrada, clica em "Test" e o ML for Kids mostra dois resultados: o rótulo escolhido (ex.: "amigo") e a confiança em porcentagem (ex.: "with 87% confidence"). Importante: testar NÃO treina de novo o modelo; só pergunta a ele. Por isso podemos testar à vontade, sem medo de estragar nada. Deixe os projetos já abertos na tela "Learn & Test" antes da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento e revisão (10 min): Em roda, relembre o que cada um treinou. Mostre o cartaz "Testar faz parte de criar". Conte que hoje viramos testadores, como os criadores de jogos de verdade, e que achar um erro é motivo de festa, não de tristeza.

Conteúdo novo guiado (15 min): No projetor, abra o seu modelo de exemplo em "Learn & Test". Digite uma entrada fácil que você sabe que acerta (ex.: "oi amigo"), clique em "Test" e mostre o rótulo e a porcentagem de confiança. Depois digite de propósito uma entrada confusa (ex.: uma palavra que o modelo nunca viu) e mostre a IA errando ou ficando com confiança baixa. Comemore o erro: "Que ótimo, achamos um ponto de ajuste!". Apresente a folha de testes e preencha uma linha junto com a turma.

Mão na massa (25 min): Cada criança testa o próprio modelo. Ela escreve pelo menos cinco entradas diferentes (algumas fáceis, algumas estranhas), clica em "Test" e anota na folha: a entrada, o que esperava, o que a IA respondeu e se acertou ou confundiu. Circule pela sala ajudando a ler a porcentagem de confiança. Quando aparecer uma confusão, a criança marca um adesivo na linha. Incentive testes diferentes, não repetidos.

Desafio e compartilhar (10 min): Desafie cada um a achar uma entrada que deixe a IA "bem na dúvida" (confiança abaixo de 60%). Depois, em roda, cada criança conta um acerto e uma confusão que descobriu e mostra um ponto de ajuste marcado. Encerre dizendo que na próxima aula vamos usar essa lista para deixar a IA mais esperta.

## Como explicar para crianças

Use a ideia do detetive gentil: "Hoje somos detetives com lupa, procurando pistas de onde a IA se confunde." Explique a confiança como o quanto a IA está "com certeza no coração": 90% é "tenho bastante certeza", 50% é "estou na dúvida". Compare testar com provar a comida antes de servir: provamos várias vezes para ver se está boa, e se faltar sal não ficamos bravos, só colocamos mais. Reforce sempre: errar no teste é bom, porque agora sabemos o que arrumar.

## Erros comuns e como ajudar

A criança fica triste quando a IA erra: lembre o cartaz e comemore junto, transformando o erro em conquista de detetive. A criança testa sempre a mesma entrada: peça entradas bem diferentes, até umas bobas, para a IA "pensar mais". A criança confunde "Train" com "Test" e acha que está treinando: mostre que estamos só na aba "Learn & Test" e que aqui a gente pergunta, não ensina. A criança não entende a porcentagem: leia em voz alta como "a IA tem tantos por cento de certeza". A criança esquece de anotar: pare com ela e preencham uma linha juntos, devagar, antes de continuar.`,
  exercicios: [
    {
      titulo: `Detetives prontos: abrindo o teste`,
      tipo: `Aquecimento guiado`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada projeto esteja na tela "Learn & Test". Peça que a criança ache a caixa de digitar texto (ou enviar foto). Mostre no projetor onde fica o botão "Test" e onde aparece a confiança em porcentagem.`,
      atividade: `Abra o seu projeto no ML for Kids e clique em "Learn & Test". Ache a caixinha onde se escreve um texto e o botão "Test". Aponte com o dedo onde vai aparecer a porcentagem de confiança.`,
      gabarito: `A criança chega na tela "Learn & Test", localiza a caixa de entrada e o botão "Test", e aponta o lugar da porcentagem. Acerto = saber onde testar sem confundir com a aba "Train". Exemplo: dedo na caixa de texto e no botão "Test".`,
    },
    {
      titulo: `Primeiro teste fácil`,
      tipo: `Prática individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça uma entrada que a criança tem certeza que vai acertar (parecida com os exemplos que ela treinou). Ela digita, clica "Test" e lê o rótulo e a confiança. Ajude a anotar a primeira linha da folha de testes.`,
      atividade: `Escreva uma entrada fácil, parecida com os exemplos que você treinou, clique em "Test" e veja o que a IA respondeu. Anote na folha: a entrada, o que você esperava e se a IA acertou.`,
      gabarito: `Linha da folha preenchida com um acerto. Exemplo: entrada "oi amigo", esperava "amigo", a IA respondeu "amigo" com 88% de confiança, marcou "acertou". Acerto = ler o rótulo e a porcentagem corretamente.`,
    },
    {
      titulo: `Cinco entradas diferentes`,
      tipo: `Investigação na folha de testes`,
      tempo: `12 minutos`,
      guiaProfessor: `Oriente a criança a testar cinco entradas variadas (algumas fáceis, algumas estranhas) e anotar cada uma. Reforce não repetir a mesma entrada. Quando der confusão, ela cola um adesivo na linha. Circule lendo as porcentagens com quem precisa.`,
      atividade: `Faça cinco testes diferentes na sua IA. Para cada um, anote na folha a entrada, o que você esperava, o que a IA respondeu e se acertou ou confundiu. Cole um adesivo nas linhas em que ela se confundiu.`,
      gabarito: `Folha com cinco linhas preenchidas e entradas diferentes entre si, com pelo menos uma confusão marcada com adesivo. Acerto = registrar acertos e confusões sem repetir entradas. Exemplo: "tchau", "vai embora", "amigo legal", "blábláblá", "socorro".`,
    },
    {
      titulo: `Caçando a maior dúvida`,
      tipo: `Desafio de confiança`,
      tempo: `8 minutos`,
      guiaProfessor: `Desafie a criança a achar uma entrada que deixe a IA na dúvida, com confiança abaixo de 60%. Mostre que palavras estranhas ou misturadas costumam confundir. Comemore quando ela encontrar; isso vira um ponto de ajuste importante.`,
      atividade: `Tente achar uma entrada que deixe a IA bem na dúvida, com a confiança abaixo de 60%. Quando conseguir, anote a entrada e a porcentagem na sua folha e marque como um ponto de ajuste.`,
      gabarito: `Uma entrada registrada com confiança abaixo de 60% e marcada como ponto de ajuste. Exemplo: entrada "amigo inimigo" devolveu "amigo" com 52% de confiança. Acerto = identificar e anotar uma resposta de baixa confiança.`,
    },
    {
      titulo: `Meu mapa de ajustes`,
      tipo: `Síntese e compartilhar`,
      tempo: `10 minutos`,
      guiaProfessor: `Peça que a criança olhe a folha inteira e escolha os pontos do jogo ou do modelo que precisam de ajuste, marcando-os. Em roda, cada uma conta um acerto e uma confusão. Guarde a folha para a próxima aula, quando vamos melhorar a IA.`,
      atividade: `Olhe toda a sua folha de testes e faça um círculo nos pontos que precisam de ajuste. Depois, na roda, conte para a turma um acerto e uma confusão que você descobriu hoje.`,
      gabarito: `Folha com os pontos de ajuste circulados e a criança apresentando um acerto e uma confusão na roda. Acerto = transformar os testes em uma lista clara do que melhorar. Exemplo: "Acertou em 'oi amigo'; se confundiu em 'amigo inimigo', vou treinar mais exemplos disso."`,
    },
  ],
};
