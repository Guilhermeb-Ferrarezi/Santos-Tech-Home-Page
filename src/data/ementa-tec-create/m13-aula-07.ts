import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Organizando o material de vídeo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir todos os clipes aprovados em uma sequência clara que conta a história do roteiro, verificando a continuidade, renomeando os arquivos e preparando o pacote de vídeo da IA para usar depois no jogo.`,
  descricao: `Depois de várias aulas gerando, refazendo e escolhendo os melhores clipes no Sora, os alunos chegam com uma pasta cheia de vídeos soltos. Esta aula é o momento de colocar ordem nessa bagunça: pegar só os clipes aprovados e organizá-los na ordem certa, do começo ao fim da história, exatamente como o roteiro pediu. É menos sobre criar e mais sobre arrumar, conferir e empacotar, uma habilidade de produtor de vídeo que os profissionais usam todo dia.

A primeira tarefa é a continuidade: olhar os clipes em sequência e perguntar se a história faz sentido. O personagem some de um clipe e aparece em outro com outra roupa? O cenário muda do dia para a noite sem explicação? A ordem está embaralhada? Aqui o aluno aprende a enxergar o conjunto, e não só cada vídeo isolado, percebendo se a montagem conta uma história contínua e fácil de entender.

A segunda tarefa é renomear os arquivos. Nomes como video_final_2.mp4 ou sora_generation_8821.mp4 não dizem nada e atrapalham na hora de montar o jogo. Os alunos aprendem a usar um padrão simples e numerado, como 01_abertura.mp4, 02_personagem_corre.mp4, 03_vitoria.mp4, para que qualquer pessoa, e o próprio aluno no futuro, saiba a ordem só de bater o olho na pasta.

Por fim, eles montam o pacote final: uma pasta organizada com os clipes renomeados, na sequência do roteiro, pronta para ser reaproveitada lá na frente, quando o vídeo da IA virar abertura ou cutscene dentro do jogo no Roblox Studio. Essa aula prepara diretamente a Aula 8, a entrega do material de vídeo da IA, garantindo que o aluno chegue lá com tudo arrumado e nada perdido.`,
  materiais: [
    `Computadores com acesso ao Sora pela conta do ChatGPT (login já feito, plano com download de vídeos liberado)`,
    `Pasta de trabalho criada no computador para cada aluno guardar os clipes baixados`,
    `Projetor ou TV para mostrar o exemplo de pasta organizada e a sequência do roteiro`,
    `Arquivo de exemplo: uma pasta-modelo com clipes já renomeados no padrão numerado (01_, 02_, 03_)`,
    `O roteiro escrito pelo aluno nas aulas anteriores (em papel ou documento digital), para conferir a ordem`,
    `Lista de clipes aprovados feita na Aula 6 (quais vídeos passaram na escolha)`,
    `Bloco de notas ou documento digital para anotar o que falta e o que está fora de ordem`,
  ],
  conceitosChave: [
    `Continuidade — quando os clipes seguidos combinam entre si, sem o personagem, a roupa ou o cenário mudarem de repente sem explicação.`,
    `Sequência — a ordem em que os clipes aparecem, do começo ao fim, do jeito que o roteiro conta a história.`,
    `Renomear — trocar o nome confuso de um arquivo por um nome claro e numerado que mostra a ordem certa.`,
    `Padrão de nomes — um jeito combinado de nomear arquivos, por exemplo número mais descrição, como 01_abertura.mp4.`,
    `Pacote de vídeo — a pasta final com todos os clipes aprovados, renomeados e na ordem certa, pronta para usar depois.`,
    `Clipe aprovado — o vídeo que passou na escolha da aula anterior e merece entrar na montagem final.`,
    `Download (baixar) — salvar o clipe do Sora no computador, como arquivo .mp4, para poder organizar na pasta.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você é organizador de produção, não gerador de vídeo. O Sora já fez o trabalho pesado nas aulas anteriores; agora a missão é baixar, ordenar e renomear. Você não precisa criar prompts novos. Precisa saber duas coisas no Sora: como baixar um clipe e como reconhecer quais já foram aprovados.

Para baixar um clipe no Sora: entre em sora.com com a conta do ChatGPT, abra a aba "Library" (ou "My videos"), passe o mouse sobre o vídeo aprovado e clique no ícone de download (uma setinha para baixo) ou abra o vídeo e use o botão "Download". O arquivo cai na pasta "Downloads" do computador, em formato .mp4. Mostre isso uma vez no projetor antes de soltar a turma.

Para renomear no Windows: clique uma vez no arquivo .mp4 para selecioná-lo, aperte a tecla F2 (atalho de renomear), digite o nome novo e aperte Enter. Combine com a turma o padrão: dois dígitos, um traço baixo e uma palavra curta, como 01_abertura. O segredo é o número na frente, porque o Windows ordena a pasta sozinho por ele.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min - Aquecimento e revisão: Pergunte "Se você abrir uma pasta com 8 vídeos chamados video1, video2, captura_final, dá para saber a ordem da história?". Mostre no projetor uma pasta bagunçada e, ao lado, a pasta-modelo organizada com nomes 01_, 02_, 03_. Deixe claro o objetivo do dia: deixar a pasta deles igual à organizada.

15 min - Conteúdo novo guiado: No seu computador, demonstre o ciclo completo com um clipe: abra o Sora, vá em "Library", baixe um vídeo aprovado, encontre o arquivo na pasta "Downloads", aperte F2 e renomeie para 01_abertura.mp4. Depois mostre como mover esse arquivo para uma pasta nova chamada com o nome do aluno mais a palavra "video_ia". Explique a regra de continuidade comparando dois clipes lado a lado no projetor.

25 min - Mão na massa: Cada aluno cria sua pasta de pacote, baixa todos os clipes aprovados do Sora, renomeia cada um seguindo o padrão numerado na ordem do roteiro e arrasta tudo para dentro da pasta. Circule conferindo se os números batem com a ordem do roteiro e se nenhum clipe aprovado ficou de fora. Peça que confiram a continuidade abrindo os vídeos em sequência.

10 min - Desafio e compartilhar: Em duplas, cada aluno abre a pasta do colega e tenta entender a história só pelos nomes dos arquivos, sem assistir. Se conseguir contar a sequência, a organização passou no teste. Feche pedindo que um ou dois voluntários mostrem a pasta no projetor.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de arrumar o quarto antes da visita. Diga: "Os clipes são suas roupas espalhadas; hoje a gente dobra e guarda na ordem certa para achar tudo rapidinho depois." Compare a sequência a um quadrinho: "Cada clipe é um quadrinho; se você troca a ordem, a história fica sem pé nem cabeça." Para os nomes, fale: "O número na frente é como a página de um livro; o computador lê os números e coloca tudo na fila sozinho." Reforce que continuidade é como num desenho animado: o herói não pode estar de boné numa cena e sem boné na seguinte sem motivo.

## Erros comuns e como ajudar

O erro mais comum é esquecer de baixar algum clipe aprovado e montar a pasta incompleta; peça que confiram a lista da Aula 6 item por item. Outro é numerar fora da ordem do roteiro, então oriente a deixar o roteiro aberto ao lado enquanto renomeiam. Muitos digitam o número sem zero na frente (1 em vez de 01) e o computador embaralha 1, 10, 2; combine sempre dois dígitos. Alguns deixam o arquivo na pasta "Downloads" misturado com outras coisas; lembre de mover tudo para a pasta do pacote. Por fim, há quem renomeie e apague sem querer a extensão .mp4; explique que a parte depois do ponto não pode sumir, senão o vídeo não abre.`,
  exercicios: [
    {
      titulo: `Baixar e renomear o primeiro clipe`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Verifique se cada aluno consegue baixar um clipe do Sora e renomeá-lo com F2. Circule conferindo se o nome ficou no padrão 01_descrição e se a extensão .mp4 foi mantida.`,
      atividade: `No Sora, abra a aba "Library", baixe o primeiro clipe aprovado do seu roteiro e encontre o arquivo na pasta "Downloads". Aperte F2 e renomeie para 01_ mais uma palavra curta que descreva a cena, por exemplo 01_abertura.mp4.`,
      gabarito: `O aluno acerta quando o arquivo aparece baixado e renomeado no formato número de dois dígitos, traço baixo, descrição e a extensão .mp4 preservada. Exemplo válido: 01_abertura.mp4. Errado: 1_abertura ou 01_abertura sem o .mp4.`,
    },
    {
      titulo: `Montar a pasta do pacote completo`,
      tipo: `projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Confira se o aluno criou uma pasta com o próprio nome mais "video_ia", baixou todos os clipes aprovados e renomeou cada um na ordem do roteiro. Use a lista da Aula 6 para checar se nada ficou de fora.`,
      atividade: `Crie uma pasta com seu nome e a palavra video_ia. Baixe todos os clipes aprovados do Sora, renomeie cada um seguindo o padrão numerado na ordem do roteiro (01_, 02_, 03_) e mova todos para dentro dessa pasta.`,
      gabarito: `A pasta está pronta quando contém todos os clipes aprovados da lista, cada um renomeado com número de dois dígitos na ordem do roteiro e nenhum clipe faltando. Ao abrir a pasta, os arquivos aparecem em fila de 01 em diante, contando a história do começo ao fim.`,
    },
    {
      titulo: `Caça à falha de continuidade`,
      tipo: `desafio`,
      tempo: `8 min`,
      guiaProfessor: `Desafie o aluno a assistir seus clipes em sequência procurando uma quebra de continuidade. Tenha à mão um exemplo seu de troca de cenário ou roupa para ilustrar caso ninguém encontre.`,
      atividade: `Abra seus clipes na ordem da pasta, um atrás do outro, e procure uma falha de continuidade: o personagem mudou de roupa sem motivo, o cenário pulou do dia para a noite, ou a ordem ficou trocada. Anote o que achou e como resolver.`,
      gabarito: `O desafio é vencido quando o aluno aponta uma falha real ou confirma, com argumento, que a sequência está contínua. Exemplo aceito: "No clipe 03 era de dia e no 04 ficou de noite sem explicação; vou trocar a ordem ou regravar". Se não houver falha, ele deve justificar por que a história já está contínua.`,
    },
    {
      titulo: `Teste de leitura da pasta em dupla`,
      tipo: `em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e oriente que cada um abra a pasta do colega sem assistir aos vídeos, tentando contar a história só pelos nomes. Reforce que se não der para entender, os nomes precisam melhorar.`,
      atividade: `Troque de lugar com o colega e abra a pasta dele. Sem assistir aos vídeos, tente contar em voz alta a história só lendo os nomes dos arquivos na ordem. Depois, diga um elogio e uma sugestão para deixar os nomes mais claros.`,
      gabarito: `O teste passa quando o colega consegue narrar a sequência da história apenas pelos nomes, na ordem certa, sem precisar abrir os vídeos. O feedback deve trazer exatamente um elogio e uma sugestão concreta, como "troque 02_cena por 02_personagem_corre para ficar mais claro".`,
    },
    {
      titulo: `Roda de conversa: por que organizar ajuda no jogo`,
      tipo: `roda de conversa`,
      tempo: `9 min`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas que liguem a organização de hoje ao futuro do projeto: o vídeo da IA vai virar abertura ou cutscene no Roblox Studio. Ajude cada aluno a perceber o valor do pacote bem arrumado.`,
      atividade: `Em roda, responda: por que vale a pena gastar tempo renomeando e ordenando os clipes agora, se daria para deixar tudo solto? Pense em como você vai usar esse pacote de vídeo lá na frente, quando montar o jogo no Roblox.`,
      gabarito: `A participação é completa quando o aluno explica, com as próprias palavras, ao menos um motivo prático para organizar, ligando ao uso futuro. Exemplo aceito: "Se os clipes estiverem na ordem e com nomes claros, na hora de colocar a abertura no jogo eu acho tudo rápido e não uso o vídeo errado".`,
    },
  ],
};
