import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Compondo a trilha do meu jogo",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Criar a faixa-tema do próprio projeto no Suno, usando prompts detalhados com clima, andamento e duração, e comparar versões para exportar o áudio final.`,
  descricao: `Na aula passada, os alunos fizeram a primeira música no Suno e descobriram como a inteligência artificial transforma uma descrição em som. Agora damos um passo importante: em vez de gerar uma música qualquer, cada aluno vai compor a faixa-tema do seu próprio jogo ou vídeo. A diferença está na intenção. Antes de escrever o prompt, o aluno precisa pensar no clima do projeto: o jogo é tenso e cheio de ação, é calmo e misterioso, é divertido e colorido? A música precisa combinar com essa sensação.

O coração desta aula é o prompt detalhado. Um prompt fraco, como "música legal", entrega um resultado genérico. Um prompt rico descreve o estilo, os instrumentos, o clima e o ritmo. No Suno, escrevemos esse pedido no campo de descrição (Song Description) ou, no modo personalizado (Custom), separamos o estilo musical (Style of Music) da letra (Lyrics). Quanto mais claro o aluno for sobre o que quer, mais perto a IA chega do som imaginado.

Dois conceitos novos entram em cena: o andamento e a duração. O andamento é a velocidade da música, medida em BPM (batidas por minuto). Uma trilha de fase de corrida pede um andamento rápido; uma tela de menu pede algo mais lento e tranquilo. A duração é o tamanho da faixa: para um tema que vai tocar em loop dentro do jogo, uma música curta e que repete bem costuma funcionar melhor do que uma longa.

Por fim, os alunos vão aprender a comparar versões. O Suno gera duas opções a cada pedido, e dá para gerar de novo mudando o prompt. Ouvir com atenção, escolher a melhor e exportar (Download) o arquivo de áudio é o que fecha a aula. Ao final, cada aluno sai com a faixa-tema do seu projeto salva e pronta para usar nos vídeos e nos jogos do mês.`,
  materiais: [
    `Computadores com acesso ao Suno pelo navegador (suno.com), um por aluno`,
    `Conta no Suno já criada e com login feito antes da aula, com créditos disponíveis`,
    `Projetor ou TV para o professor mostrar a tela e demonstrar cada passo no Suno`,
    `Fones de ouvido para cada aluno escutar e comparar as versões sem atrapalhar a turma`,
    `Folha impressa ou slide com a "ficha de clima" do projeto (estilo, instrumentos, andamento, duração)`,
    `Dois ou três exemplos de áudio prontos: uma trilha calma, uma de ação e uma misteriosa`,
    `Pasta no computador para cada aluno salvar a faixa exportada (arquivo .mp3)`,
  ],
  conceitosChave: [
    `Faixa-tema — a música principal que representa o clima do jogo ou vídeo e costuma tocar na tela inicial ou na fase principal.`,
    `Prompt detalhado — a descrição rica que damos à IA, com estilo, instrumentos, clima e ritmo, em vez de um pedido vago.`,
    `Andamento (BPM) — a velocidade da música em batidas por minuto; mais BPM dá energia, menos BPM dá calma.`,
    `Clima (mood) — a sensação que a música transmite, como tensão, alegria, mistério ou aventura.`,
    `Modo personalizado (Custom) — a opção do Suno que separa o estilo musical da letra, dando mais controle ao aluno.`,
    `Versão — cada uma das opções geradas pela IA; comparamos as versões para escolher a que combina com o projeto.`,
    `Exportar (Download) — salvar a música pronta como arquivo de áudio no computador, para usar depois no jogo ou no vídeo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser músico nem dominar o Suno. Esta aula é sobre descrever bem e comparar com calma. O Suno funciona no navegador, em suno.com. Depois de fazer login, clique em "Create" (Criar) na barra lateral esquerda. Aparece um campo grande de descrição (Song Description). Acima dele há um botão "Custom" (modo personalizado): quando ligado, a tela se divide em "Lyrics" (letra) e "Style of Music" (estilo da música). Para uma trilha de jogo sem voz, marque a caixa "Instrumental". O botão azul "Create" gera as músicas. Cada geração produz duas faixas, que aparecem na lista à direita; clicando no nome de uma, ela toca no player de baixo. Para salvar, passe o mouse sobre a faixa, clique nos três pontinhos e escolha "Download" e depois "Audio (MP3)". O andamento entra no prompt em palavras: "fast tempo, 140 BPM" ou "slow and calm". Teste tudo uma vez antes da aula para conhecer os botões.

## Passo a passo da aula

Aquecimento (10 min): Toque os três exemplos de áudio (calmo, ação, misterioso) sem dizer o nome de cada um. Peça que a turma adivinhe o clima de cada música. Conecte com a aula anterior: "vocês já fizeram uma música; hoje vamos fazer a música certa para o jogo de vocês". Cada aluno descreve em uma frase o clima do próprio projeto.

Conteúdo novo guiado (15 min): No projetor, abra o Suno e clique em "Create". Ligue o "Custom", marque "Instrumental" e mostre o campo "Style of Music". Escreva um prompt detalhado de exemplo: "epic adventure game theme, orchestral, heroic, medium tempo 120 BPM, loopable". Explique cada parte: estilo, instrumento, clima, andamento e o pedido de loop. Clique em "Create" e, enquanto gera, mostre onde as duas versões vão aparecer. Toque as duas, compare em voz alta e escolha. Demonstre o "Download > Audio (MP3)".

Mão na massa (25 min): Cada aluno preenche a ficha de clima do projeto e transforma isso num prompt detalhado em inglês simples (ajude com as palavras). Gera a faixa, ouve as duas versões com fones e, se não gostar, ajusta o prompt e gera de novo (mudando andamento ou instrumentos). Ao acertar, exporta o MP3 para a pasta dele. Circule pela sala lendo prompts e sugerindo melhorias.

Desafio + compartilhar (10 min): Cada aluno toca um trecho da faixa-tema para o colega do lado, que tenta adivinhar o clima do jogo só pelo som. Dois ou três voluntários apresentam no projetor e contam que prompt usaram.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que o prompt é como um pedido de lanche: "se você só pede 'comida', vem qualquer coisa; se pede 'hambúrguer com queijo e sem cebola', vem o que você quer". O andamento é a velocidade da batida: peça que batam palma rápido (ação) e devagar (menu) para sentir a diferença. Clima é a emoção da cena. Mostre sempre antes de mandar fazer, e fale os nomes dos botões em inglês apontando na tela ("Create", "Custom", "Instrumental"). Lembre que comparar duas versões é normal e faz parte do trabalho de quem cria.

## Erros comuns e como ajudar

O erro mais comum é o prompt vago ("música de jogo"). Peça sempre quatro coisas: estilo, instrumento, clima e andamento. Outro erro é esquecer de marcar "Instrumental" e a música vir com voz cantada no meio da trilha; mostre onde fica a caixinha. Muitos aceitam a primeira versão sem ouvir a segunda; insista que ouçam as duas antes de decidir. Alguns gastam todos os créditos gerando sem parar; oriente a pensar e ajustar o prompt antes de clicar de novo. Há quem esqueça de exportar e perca o trabalho; lembre o passo "três pontinhos > Download > Audio (MP3)" e confira se o arquivo entrou na pasta certa.`,
  exercicios: [
    {
      titulo: `Da ficha ao prompt`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Ajude cada aluno a preencher a ficha de clima (estilo, instrumento, clima, andamento) e a transformar isso numa frase. Confira se o "Instrumental" está marcado.`,
      atividade: `Preencha a ficha de clima do seu projeto e escreva um prompt detalhado no campo "Style of Music" do Suno, com estilo, instrumento, clima e andamento.`,
      gabarito: `O aluno tem um prompt que cita as quatro partes (ex.: "calm puzzle game music, soft piano, relaxing, slow tempo 80 BPM"), com a caixa "Instrumental" marcada, pronto para gerar.`,
    },
    {
      titulo: `Gerar e comparar versões`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre que o Suno entrega duas faixas por geração. Incentive o uso de fones e que ouçam as duas inteiras antes de escolher.`,
      atividade: `Clique em "Create", espere as duas versões e ouça as duas com atenção. Escolha a que mais combina com o clima do seu jogo e anote por que escolheu.`,
      gabarito: `O aluno ouviu as duas versões, apontou uma como favorita e justificou com base no clima (ex.: "a segunda é mais tensa e combina com a fase do chefe").`,
    },
    {
      titulo: `Trocar o andamento`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Ensine a mudar só o andamento no prompt (ex.: trocar "slow tempo 80 BPM" por "fast tempo 150 BPM") e gerar de novo para sentir o efeito.`,
      atividade: `Pegue o seu prompt e gere uma versão bem mais rápida e outra bem mais lenta, mudando só o BPM. Compare como o clima muda com a velocidade.`,
      gabarito: `O aluno tem duas faixas do mesmo tema com andamentos diferentes e consegue explicar que a rápida dá energia/ação e a lenta dá calma/suspense.`,
    },
    {
      titulo: `Adivinha o clima`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno toca a faixa sem contar o tema; o colega tenta adivinhar o clima e o tipo de jogo. Oriente um retorno gentil.`,
      atividade: `Toque a sua faixa-tema para o colega sem dizer o tema. Ele tenta adivinhar o clima e que tipo de jogo é. Depois invertam os papéis.`,
      gabarito: `Em pelo menos uma das duas faixas o colega acerta o clima (calmo, ação ou mistério), o que mostra que o prompt traduziu bem a sensação pretendida.`,
    },
    {
      titulo: `Faixa-tema exportada`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Acompanhe a exportação: três pontinhos na faixa, "Download", "Audio (MP3)". Confira se cada aluno salvou o arquivo na pasta certa com um nome claro.`,
      atividade: `Escolha a melhor versão da sua faixa-tema, exporte como MP3 pelo botão "Download" e salve na sua pasta com um nome que diga o tema (ex.: "tema-fase-floresta.mp3").`,
      gabarito: `Existe um arquivo .mp3 da faixa-tema salvo na pasta do aluno, com nome claro, pronto para reaproveitar nos vídeos e no jogo do Roblox mais adiante.`,
    },
  ],
};
