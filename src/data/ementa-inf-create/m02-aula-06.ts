import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Resolver problemas passo a passo com DeepSeek",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Praticar o DeepSeek em desafios de raciocínio, pedindo que a IA mostre o passo a passo para resolver um problema de matemática, organizar uma lista de tarefas e explicar um tema difícil em etapas.`,
  descricao: `Na aula passada o aluno conheceu o DeepSeek e enviou suas primeiras mensagens. Agora chega a parte mais interessante: usar essa inteligência artificial como uma parceira de raciocínio. O DeepSeek é especialmente bom em mostrar o caminho do pensamento, ou seja, em explicar como chegou a uma resposta, e não só cuspir o resultado pronto. Quando o aluno pede "mostre o passo a passo", a IA escreve cada etapa numerada, como um professor faria no quadro.

Nesta aula o aluno vai treinar três tipos de desafio. Primeiro, um problema de matemática: em vez de só pedir a resposta, ele aprende a pedir as contas explicadas, conferindo cada linha. Segundo, organizar uma lista de tarefas bagunçada em uma ordem que faça sentido, com prioridades. Terceiro, pedir que o DeepSeek explique um tema difícil dividido em etapas pequenas, do jeito que um adolescente entende. O fio que liga os três é o mesmo: pedir o raciocínio aberto e depois conferir.

A grande lição do dia é que a IA pode errar, e errar com confiança. Por isso o aluno não copia a resposta cega: ele lê cada passo, refaz a conta na calculadora ou no caderno e marca onde concorda ou desconfia. Essa atitude de "conferente" é uma habilidade que vale para a vida inteira, com qualquer ferramenta.

Para fechar, o aluno compara a clareza do DeepSeek com a do ChatGPT e a do Gemini, que ele já conhece das semanas anteriores. Ele cola o mesmo problema nas três IAs e observa qual explicou de forma mais clara e organizada. Não existe resposta única: o objetivo é o aluno perceber diferenças e formar a própria opinião com argumentos.`,
  materiais: [
    `Computadores com acesso à internet e ao DeepSeek aberto no navegador (chat.deepseek.com), um por aluno, já com a conta de cada aluno conectada`,
    `Projetor ou TV para o professor mostrar o DeepSeek e digitar os comandos passo a passo`,
    `O ChatGPT e o Gemini também abertos em abas separadas, para a comparação final entre as três IAs`,
    `Arquivo ou slide com três desafios prontos para colar: um problema de matemática, uma lista de tarefas embaralhada e um tema difícil para explicar`,
    `Caderno e caneta (ou calculadora) para o aluno conferir as contas e anotar onde a IA acertou ou errou`,
    `Folha impressa com a frase mágica do dia: "Mostre o passo a passo, uma etapa de cada vez."`,
    `Contas de cada aluno no DeepSeek, no ChatGPT e no Gemini (as mesmas usadas nas aulas anteriores)`,
  ],
  conceitosChave: [
    `Passo a passo — quando a IA mostra cada etapa do raciocínio, numerada e em ordem, em vez de dar só a resposta final.`,
    `Raciocínio — o caminho de pensamento que liga a pergunta à resposta; pedir o raciocínio ajuda a entender e a conferir.`,
    `Conferir — refazer ou checar cada etapa da resposta da IA para descobrir se está correta antes de confiar.`,
    `Priorizar — colocar as tarefas em ordem de importância e urgência, decidindo o que fazer primeiro.`,
    `Decompor — dividir um tema grande e difícil em partes pequenas e fáceis de entender.`,
    `Alucinação — quando a IA inventa uma informação errada com aparência de verdade; por isso sempre conferimos.`,
    `Comparar IAs — colar o mesmo desafio em IAs diferentes para observar qual respondeu de forma mais clara e organizada.`,
  ],
  treinamento: `## O que o professor precisa saber

O DeepSeek é uma inteligência artificial de conversa parecida com o ChatGPT, acessada pelo site chat.deepseek.com. Para esta aula, o ponto importante é um botão que costuma aparecer abaixo ou ao lado da caixa de mensagem, chamado "DeepThink" (ou "Pensamento profundo"). Quando ativado, o DeepSeek mostra o raciocínio dele numa área cinza antes da resposta final. Se não encontrar o botão, não tem problema: basta pedir por escrito "mostre o passo a passo" e a IA também responderá em etapas.

Você não precisa ser especialista em matemática. A ideia é justamente o aluno conferir junto com você. Tenha as respostas certas dos três desafios anotadas para si, mas conduza a aula como uma investigação: "Será que a IA acertou? Vamos checar a etapa 2." Lembre que a IA pode errar uma conta simples e mesmo assim parecer convicta. Esse é o aprendizado central.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior perguntando o que cada aluno achou do DeepSeek. Peça que abram chat.deepseek.com e enviem uma mensagem rápida para acordar a ferramenta, por exemplo "Olá, você está pronto para me ajudar a resolver problemas?". Mostre no projetor onde fica a caixa de mensagem e o botão "DeepThink", se ele aparecer.

Conteúdo novo guiado (15 min): no projetor, cole o problema de matemática do slide e digite no fim do comando: "Resolva mostrando o passo a passo, uma etapa de cada vez, e explique cada conta." Clique no botão de enviar (a setinha) ou aperte Enter. Quando a resposta vier, leia em voz alta a etapa 1, refaça a conta no quadro e pergunte à turma se concordam. Faça o mesmo com a lista de tarefas, pedindo "organize esta lista em ordem de prioridade e explique por quê". Por fim, peça ao DeepSeek "explique este tema em etapas simples, como para um adolescente de 12 anos".

Mão na massa (25 min): cada aluno faz os três desafios no próprio computador, colando os comandos prontos do slide. Para cada resposta, ele confere pelo menos uma etapa no caderno ou na calculadora e marca com um "certo" ou um "?". Circule pela sala ajudando quem travar e incentivando os alunos a refazerem o pedido com mais detalhes quando a resposta vier confusa.

Desafio e compartilhar (10 min): cada aluno escolhe um dos três desafios, cola o mesmo comando no ChatGPT e no Gemini (abas já abertas) e compara as três respostas. Em seguida, diz a um colega qual IA explicou de forma mais clara e por quê.

## Como explicar de forma clara (linguagem para a idade)

Compare o "passo a passo" com uma receita de bolo: ninguém joga todos os ingredientes de uma vez; segue etapa por etapa. Diga: "A IA é como um colega esperto que às vezes chuta a resposta. Por isso a gente pede para ele mostrar a conta e confere junto." Use a palavra "conferente", como o profissional que revisa antes de aprovar. Para a ideia de alucinação, diga que a IA pode "inventar com cara de verdade", igual a alguém que responde com firmeza mas está errado. Para a comparação entre IAs, use a imagem de pedir a mesma explicação para três professores diferentes: cada um tem um jeito, e você escolhe o que entendeu melhor.

## Erros comuns e como ajudar

O erro mais comum é o aluno copiar a resposta sem conferir nada; insista que ele cheque ao menos uma etapa por desafio. Outro erro é escrever um comando vago, como "faça a conta", e receber uma resposta curta; mostre que pedir "mostre o passo a passo, uma etapa de cada vez" muda tudo. Alguns alunos acham que, se a IA respondeu com confiança, está sempre certa; aproveite qualquer erro real para mostrar que não é assim. Há quem clique muitas vezes no enviar e gere respostas repetidas; ensine a esperar a IA terminar de escrever. Na comparação final, alguns colam comandos diferentes em cada IA e depois reclamam que a comparação ficou injusta; reforce que o comando precisa ser exatamente o mesmo nas três para valer a comparação.`,
  exercicios: [
    {
      titulo: `A conta explicada`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Tenha o resultado correto do problema anotado para si. Circule conferindo se o aluno realmente pediu o passo a passo e não só a resposta. Use um problema do nível da turma, por exemplo: "Em uma loja, um caderno custa R$ 12 e uma caneta custa R$ 3. Quanto custam 4 cadernos e 5 canetas?".`,
      atividade: `Cole o problema de matemática do slide no DeepSeek e termine o comando com: "Resolva mostrando o passo a passo, uma etapa de cada vez, e explique cada conta." Depois confira a etapa final na calculadora ou no caderno.`,
      gabarito: `O DeepSeek deve listar as etapas numeradas: por exemplo, 4 cadernos a R$ 12 dão R$ 48; 5 canetas a R$ 3 dão R$ 15; somando, R$ 48 + R$ 15 = R$ 63. O aluno deve confirmar o total refazendo a conta. O essencial é que ele tenha pedido o passo a passo e checado pelo menos a etapa final.`,
    },
    {
      titulo: `Caçando o erro escondido`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Explique que aqui o objetivo é desconfiar. Peça que o aluno leia etapa por etapa procurando algo estranho. Se a IA acertar tudo, peça que ele explique por que confia em cada etapa.`,
      atividade: `Peça ao DeepSeek para resolver um problema de matemática com passo a passo. Em seguida, leia cada etapa e marque no caderno qual delas você conferiu e se concorda. Encontre pelo menos uma etapa que você teve que checar com mais atenção.`,
      gabarito: `O aluno deve ter conferido cada etapa, refazendo as contas, e apontado onde precisou checar com mais cuidado. Se encontrar um erro real da IA, deve descrevê-lo; se tudo estiver certo, deve justificar por que confia em cada passo. O ponto-chave é a atitude de conferente: nunca copiar sem checar.`,
    },
    {
      titulo: `Organizando a bagunça`,
      tipo: `em dupla`,
      tempo: `6 minutos`,
      guiaProfessor: `Forme duplas. Dê a mesma lista embaralhada para todos, por exemplo: estudar para a prova, alimentar o cachorro, responder mensagem do amigo, fazer a tarefa de casa que vence amanhã, organizar o quarto. Reforce que prioridade combina importância com urgência.`,
      atividade: `Em dupla, colem a lista de tarefas embaralhada no DeepSeek e peçam: "Organize esta lista em ordem de prioridade e explique por que cada tarefa ficou nessa posição." Depois discutam se concordam com a ordem que a IA sugeriu.`,
      gabarito: `O DeepSeek deve reordenar a lista colocando primeiro o que é mais urgente e importante (por exemplo, a tarefa que vence amanhã e estudar para a prova) e por último o que pode esperar. Não há uma única ordem certa: a dupla deve justificar se concorda ou propor uma ordem diferente com argumentos sobre urgência e importância.`,
    },
    {
      titulo: `Explica como se eu tivesse 12 anos`,
      tipo: `roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Escolha um tema difícil e atual, por exemplo "como funciona a internet" ou "o que é inflação". Conduza a roda perguntando se a explicação em etapas ficou fácil de entender e o que ainda ficou confuso.`,
      atividade: `Peça ao DeepSeek: "Explique [tema difícil] em etapas simples, como para um adolescente de 12 anos." Leia a resposta e, na roda, conte qual etapa deixou o tema mais claro para você.`,
      gabarito: `O DeepSeek deve dividir o tema em etapas curtas e simples, com palavras fáceis e exemplos do dia a dia. Cada aluno deve identificar qual etapa ajudou mais e, se possível, apontar uma parte que ainda ficou confusa, mostrando que leu de verdade e não apenas copiou.`,
    },
    {
      titulo: `As três IAs no mesmo desafio`,
      tipo: `projeto curto`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que o aluno cole exatamente o mesmo comando nas três IAs, senão a comparação fica injusta. Deixe ChatGPT e Gemini já abertos. Lembre que não existe vencedor único: o que importa é o aluno argumentar.`,
      atividade: `Escolha um dos desafios do dia e cole o mesmo comando, com "mostre o passo a passo", no DeepSeek, no ChatGPT e no Gemini. Compare as três respostas e escreva uma frase dizendo qual explicou de forma mais clara e por quê.`,
      gabarito: `As três IAs costumam chegar a respostas parecidas, mas mudam na forma: uma usa mais etapas, outra dá mais exemplos, outra é mais curta. Não há resposta certa sobre qual é "a melhor": o aluno deve escolher uma e justificar com um motivo concreto, como "foi a mais organizada" ou "usou um exemplo que entendi". O essencial é o mesmo comando nas três e um argumento claro.`,
    },
  ],
};
