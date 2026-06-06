import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Som e Voz da IA no Menu",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Fazer a música do Suno tocar no menu do jogo e disparar um som de clique ou uma voz do ElevenLabs ao apertar os botões, integrando arte e áudio da IA dentro da interface no Roblox Studio.`,
  descricao: `Nesta aula os alunos dão vida sonora ao menu que já construíram. Eles reaproveitam a trilha sonora criada no Suno e as vozes geradas no ElevenLabs nos meses anteriores, importando esses áudios para dentro do Roblox Studio. O objetivo é que a música comece a tocar assim que o jogo abre e que cada botão da interface reaja com um som de clique ou uma fala curta, deixando o menu muito mais vivo e profissional.

O coração técnico da aula é o objeto Sound do Roblox e a programação em Lua dentro de um LocalScript. O aluno aprende que todo áudio no Roblox vira um asset com um Id próprio depois de ser enviado pelo Asset Manager, e que esse Id é colado na propriedade SoundId. Para a música de fundo, basta apertar Play no Sound; para o clique, conectamos o evento MouseButton1Click do botão a uma função que toca o som. É a primeira vez que eles ligam interface, programação e mídia da IA num único fluxo.

A aula também reforça o conceito de reaproveitamento: o som que o aluno criou no Suno e a voz que ele gerou no ElevenLabs não foram trabalho jogado fora, eles voltam agora dentro do produto final. Isso fecha o ciclo do curso, mostrando que cada ferramenta de IA aprendida tem um lugar dentro do jogo. O entregável do mês, a interface funcionando, ganha aqui sua camada de áudio.

Ao final, o menu deve abrir com música, e ao clicar em Jogar ou em outros botões deve sair um som. É um momento de muita empolgação na turma, porque pela primeira vez o jogo soa como um jogo de verdade. O professor deve guardar tempo para todos ouvirem o resultado uns dos outros no fechamento.`,
  materiais: [
    `Computadores com Roblox Studio instalado e login Roblox de cada aluno (necessário para enviar áudios)`,
    `Arquivos de áudio prontos: a trilha do Suno e uma ou duas vozes do ElevenLabs, em formato .mp3 ou .ogg, salvos numa pasta de fácil acesso`,
    `Projetor para o professor mostrar o Asset Manager, a propriedade SoundId e o LocalScript`,
    `Projeto Roblox de cada aluno com o menu e os botões da interface já montados (das aulas anteriores)`,
    `Arquivo de exemplo: um menu pronto do professor com música e clique já funcionando, para mostrar a meta da aula`,
    `Fones de ouvido (recomendado) para a turma testar áudio sem atrapalhar os colegas`,
    `Um som de clique curto extra (.mp3) como reserva, caso algum aluno não tenha trazido sua voz do ElevenLabs`,
  ],
  conceitosChave: [
    `Sound (objeto) — peça que o Roblox usa para guardar e tocar um áudio dentro do jogo.`,
    `SoundId — endereço do áudio (um número de asset) que você cola dentro do Sound para ele saber qual som tocar.`,
    `Asset Manager — painel do Roblox Studio onde você envia seus arquivos de áudio e imagem para a nuvem e recebe o Id deles.`,
    `LocalScript — tipo de script que roda no computador do jogador, ideal para mexer com a interface e tocar sons de botão.`,
    `Evento MouseButton1Click — sinal que o botão envia toda vez que alguém clica nele com o botão esquerdo do mouse.`,
    `:Play() — comando em Lua que manda o Sound começar a tocar naquele instante.`,
    `Reaproveitamento de mídia — usar dentro do jogo a música e a voz que você já tinha criado antes com a IA, sem refazer.`,
  ],
  treinamento: `## O que o professor precisa saber

Áudio no Roblox funciona em três etapas: enviar o arquivo, colocar um objeto Sound e tocar esse Sound. Você não precisa ser programador para dominar isso. O objeto Sound fica dentro de algum lugar do jogo (vamos usar o SoundService, que é a casa oficial dos sons). Cada áudio enviado vira um asset com um número, chamado SoundId. Tocar é só chamar o comando :Play(). Para a música do menu, fazemos isso de forma automática. Para o clique, ligamos o som ao evento de clique do botão usando um LocalScript. Importante: o envio de áudio às vezes passa por uma revisão da Roblox e pode demorar. Por isso peça que os áudios sejam enviados no começo da aula, e tenha um som de clique reserva já aprovado.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o seu projeto de exemplo no projetor. Clique em Play, mostre o menu abrindo com música e clique nos botões para a turma ouvir o som. Pergunte: de onde veio essa música? Eles devem lembrar do Suno e do ElevenLabs. Diga que hoje o áudio deles entra no jogo.

Conteúdo guiado (15 min): no seu Studio, abra a aba View e ligue o Asset Manager. Clique no botão de upload, escolha Audio e envie um .mp3. Mostre que ele aparece com um número, o SoundId. Depois, no Explorer, clique com o botão direito em SoundService, escolha Insert Object e adicione um Sound. Selecione esse Sound, vá no painel Properties e cole o número na propriedade SoundId. Renomeie o Sound para MusicaMenu. Marque a caixa Playing como verdadeira e Looped como verdadeira, para a música repetir. Teste com Play.

Mão na massa (25 min): cada aluno envia sua trilha do Suno pelo Asset Manager, cria o Sound MusicaMenu no SoundService, cola o SoundId e liga Playing e Looped. Depois, criam o som de clique: enviam a voz do ElevenLabs ou um clique, criam outro Sound chamado SomClique. Agora o passo de Lua: clique com o botão direito no botão da interface (dentro do ScreenGui) e adicione um LocalScript. Apague o conteúdo e escreva exatamente:

local botao = script.Parent
local clique = game.SoundService.SomClique
botao.MouseButton1Click:Connect(function()
    clique:Play()
end)

Explique linha por linha: a primeira pega o botão onde o script mora, a segunda pega o som, e a terceira diz que ao clicar, toca o som. Peça que testem com Play e cliquem no botão.

Desafio e compartilhar (10 min): proponha que façam um segundo botão com um som diferente, ou troquem o clique pela voz do ElevenLabs dizendo Jogar. No fim, cada aluno mostra seu menu para a turma, todos ouvem juntos. Elogie o reaproveitamento da mídia da IA.

## Como explicar de forma clara

Use a ideia de tocar uma campainha. O Sound é a campainha, o SoundId é o som que ela faz, e o :Play() é o dedo apertando. O LocalScript é só um bilhete que diz quando apertar. Para o evento do clique, diga: o botão grita clicaram em mim toda vez, e a gente ensina o computador a responder tocando o som. Evite a palavra função no começo, fale receita ou bloco de instruções. Lembre que Lua diferencia maiúsculas de minúsculas, então MusicaMenu é diferente de musicamenu.

## Erros comuns e como ajudar

O erro mais comum é o som não tocar porque o SoundId está vazio ou o nome no script não bate com o nome do Sound. Peça para conferir se SomClique no script é igual ao nome no Explorer. Outro erro é colocar o script num Script normal em vez de LocalScript, fazendo o clique não funcionar. Áudio em revisão também não toca: use o som reserva enquanto espera. Por fim, alguns colocam o Sound dentro do botão e esquecem o caminho game.SoundService; ajude a corrigir o caminho ou deixem o Sound no SoundService como combinado.`,
  exercicios: [
    {
      titulo: `Música no menu`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Acompanhe o envio do áudio pelo Asset Manager e a criação do Sound no SoundService. O ponto crítico é colar o SoundId e marcar Playing e Looped.`,
      atividade: `Envie sua trilha do Suno pelo Asset Manager, crie um Sound no SoundService chamado MusicaMenu, cole o SoundId e marque as caixas Playing e Looped. Teste com Play e ouça a música tocar no menu.`,
      gabarito: `O Sound MusicaMenu existe dentro do SoundService, com o SoundId preenchido (um número), Playing igual a true e Looped igual a true. Ao apertar Play, a música do Suno toca e se repete sem parar.`,
    },
    {
      titulo: `Clique que faz som`,
      tipo: `prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Garanta que o aluno use um LocalScript, não um Script comum, e que o nome do som no código bata com o nome no Explorer. Verifique a digitação de MouseButton1Click.`,
      atividade: `Crie um Sound chamado SomClique no SoundService com o som de clique. Adicione um LocalScript dentro do botão Jogar e escreva o código que toca SomClique ao clicar. Teste clicando no botão.`,
      gabarito: `Existe o Sound SomClique e um LocalScript dentro do botão com: local botao = script.Parent / local clique = game.SoundService.SomClique / botao.MouseButton1Click:Connect(function() clique:Play() end). Ao clicar no botão durante o Play, o som dispara.`,
    },
    {
      titulo: `Voz da IA no botão`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Incentive trocar o clique por uma voz curta do ElevenLabs. Ajude quem não trouxe a voz a usar o clique reserva. Reforce que só muda o SoundId do som usado.`,
      atividade: `Troque o som de clique de um botão pela sua voz do ElevenLabs (por exemplo, a palavra Jogar). Envie a voz pelo Asset Manager, atualize o SoundId do Sound usado e teste clicando.`,
      gabarito: `O Sound ligado ao botão agora aponta para o SoundId da voz do ElevenLabs. Ao clicar no botão, em vez de um clique seco, sai a voz gravada pela IA dizendo a palavra escolhida.`,
    },
    {
      titulo: `Dois botões, dois sons`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Em duplas, cada um cuida de um botão. Vigie nomes repetidos: cada Sound precisa de nome único e cada LocalScript deve apontar para o som certo. É o momento de praticar copiar e adaptar o código.`,
      atividade: `Em dupla, façam o menu ter dois botões com sons diferentes (por exemplo, Jogar com uma voz e Sair com um clique). Criem dois Sounds com nomes diferentes e um LocalScript em cada botão. Testem juntos.`,
      gabarito: `O menu tem dois botões funcionando, cada um com seu próprio Sound de nome único e seu LocalScript apontando para o som correto. Clicar em cada botão dispara o áudio esperado, sem trocar os sons entre si.`,
    },
    {
      titulo: `Como o som deixa o jogo melhor`,
      tipo: `roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Conduza a roda valorizando o reaproveitamento da mídia da IA. Faça a turma ouvir o menu de dois ou três alunos e comparar antes e depois do áudio. Anote ideias para a aula final de entrega.`,
      atividade: `Em roda, cada aluno mostra seu menu com som e responde: o que mudou no jogo depois que entrou a música e a voz? De onde veio cada áudio? O que ainda falta ajustar antes da entrega?`,
      gabarito: `Cada aluno apresenta o menu com música e clique funcionando, identifica que a música veio do Suno e a voz do ElevenLabs, e cita pelo menos um ajuste possível, como volume, repetir a música ou trocar o som de um botão. A turma percebe que o áudio deixou o menu mais vivo.`,
    },
  ],
};
