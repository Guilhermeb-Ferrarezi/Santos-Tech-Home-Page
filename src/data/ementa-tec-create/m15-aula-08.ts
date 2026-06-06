import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Pacote de áudio pronto para o jogo",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar e exportar a trilha, as vozes e os efeitos nos formatos certos, organizando tudo em um pacote de áudio nomeado e pronto para usar no vídeo e no Roblox Studio.`,
  descricao: `Esta é a aula de fechamento do mês de som, música e voz com IA. Durante quatro semanas a turma compôs músicas no Suno, gerou vozes e narrações no ElevenLabs e criou efeitos sonoros. Agora chegou a hora mais importante para um criador de jogos: transformar todo esse material espalhado em um pacote de áudio limpo, organizado e pronto para ser usado de verdade. Sem essa etapa, os áudios ficam perdidos em downloads aleatórios e ninguém consegue reaproveitá-los no vídeo nem no jogo.

O aluno vai entender que cada lugar onde o som será usado precisa de um formato específico. O vídeo no CapCut aceita bem o MP3 e o WAV. Já o Roblox Studio é mais exigente: ele aceita arquivos de áudio (MP3 e OGG) com um limite de tempo e de tamanho, e cada som precisa ser enviado pela ferramenta de Asset Manager para virar um ID que o jogo reconhece. Por isso, exportar no formato certo e com um nome claro não é um detalhe, é o que faz a diferença entre um áudio que funciona e um que dá erro.

A ideia central é a organização profissional. O estudante cria uma pasta única do projeto, com subpastas separadas para música, vozes e efeitos, e renomeia cada arquivo com um padrão que qualquer pessoa entenderia: por exemplo, "musica_fase1_loop", "voz_heroi_vitoria" ou "efeito_moeda". Esse hábito de nomear e organizar é exatamente o que os profissionais de áudio para jogos fazem todos os dias, e é o que permite achar o som certo em segundos quando o jogo cresce.

Ao final, cada aluno terá um pacote de áudio completo e nomeado, com os arquivos baixados do Suno e do ElevenLabs nos formatos corretos, e fará uma breve apresentação para a turma mostrando seus três melhores sons e explicando onde cada um será usado. Essa aula amarra o entregável do mês e prepara o material que será reaproveitado nos vídeos e dentro dos jogos no Roblox.`,
  materiais: [
    `Computadores com acesso ao Suno e ao ElevenLabs (contas já criadas e logadas), além de uma pasta de projeto preparada no computador de cada aluno`,
    `Navegador atualizado e conexão de internet estável para baixar os áudios gerados nas semanas anteriores`,
    `Projetor ou TV para o professor demonstrar onde clicar para exportar no Suno e no ElevenLabs e como organizar as pastas`,
    `Arquivos de exemplo já prontos: uma música em MP3, uma voz em MP3 e um efeito sonoro curto, mostrando como deve ficar o pacote final`,
    `Modelo impresso (ou no projetor) da estrutura de pastas e do padrão de nomes dos arquivos`,
    `Fones de ouvido para cada aluno conferir os áudios sem atrapalhar os colegas`,
    `Acesso de teste ao Roblox Studio com o Asset Manager aberto, apenas para mostrar como um som é enviado e vira um ID`,
  ],
  conceitosChave: [
    `Pacote de áudio — uma pasta organizada que reúne toda a música, as vozes e os efeitos de um projeto, separados e nomeados, pronta para ser usada no vídeo e no jogo.`,
    `Formato de arquivo — o tipo do áudio, indicado pela extensão; MP3 e WAV servem para o vídeo no CapCut, e MP3 ou OGG são os aceitos pelo Roblox Studio.`,
    `Exportar (baixar) — salvar no computador o áudio criado na ferramenta de IA; no Suno e no ElevenLabs você usa o botão Download para gerar o arquivo final.`,
    `Padrão de nomes — uma regra simples para nomear cada arquivo, como "musica_fase1_loop", que deixa claro o que é o som e onde ele será usado.`,
    `Asset Manager — o painel do Roblox Studio por onde você envia um som para o jogo; depois do envio, o áudio vira um ID que o jogo reconhece.`,
    `Loop — um trecho de música ou som feito para tocar repetido sem cortes perceptíveis, ideal para a trilha de fundo de uma fase do jogo.`,
    `Organização de projeto — o hábito de separar os arquivos em subpastas (música, vozes, efeitos) para encontrar qualquer som rapidamente quando o projeto cresce.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em áudio para dar esta aula, mas teste antes o caminho de download em cada ferramenta. No Suno, abra uma música pronta, passe o mouse sobre ela na lista, clique nos três pontinhos (menu) e escolha Download e depois MP3 Audio; o arquivo cai na pasta de Downloads do navegador. No ElevenLabs, na tela onde a voz foi gerada, clique no ícone de Download (uma setinha para baixo) ao lado do áudio para baixar o MP3. Antes da aula, crie no computador modelo uma pasta chamada "audio_meujogo" com três subpastas: "musica", "vozes" e "efeitos". Deixe um arquivo de exemplo em cada uma, já renomeado, para mostrar o resultado final. Lembre o limite do Roblox: arquivos de áudio curtos funcionam melhor, e cada som é enviado pelo Asset Manager virando um ID. O objetivo da aula é simples: baixar tudo, nomear bem e guardar nas subpastas certas.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome o mês inteiro. Pergunte: que sons vocês criaram nas últimas semanas? Liste no quadro: música, voz, narração, efeitos. Diga que hoje vamos juntar tudo num pacote pronto para usar no vídeo e no jogo. Mostre no projetor a pasta de exemplo já organizada, para a turma ver onde quer chegar.

Conteúdo novo guiado (15 min): no projetor, abra o Suno e mostre o caminho do download: três pontinhos na música, Download, MP3 Audio. Depois abra o ElevenLabs e mostre o ícone de Download da voz. Em seguida, crie ao vivo a pasta "audio_meujogo" com as três subpastas e arraste um arquivo baixado para a subpasta certa, renomeando para "musica_fase1_loop". Por fim, abra o Asset Manager do Roblox Studio e mostre rapidamente como um som é enviado e vira um ID. Explique cada passo apontando na tela.

Mão na massa (25 min): cada aluno cria a própria pasta "audio_seunome_jogo" com as subpastas musica, vozes e efeitos. Passo 1: voltar ao Suno e baixar as melhores músicas em MP3. Passo 2: voltar ao ElevenLabs e baixar as vozes e narrações em MP3. Passo 3: mover cada arquivo para a subpasta certa e renomear seguindo o padrão (tipo_uso_detalhe). Caminhe entre as duplas, ajude quem se perdeu nos downloads e confira os nomes dos arquivos.

Desafio e compartilhar (10 min): cada aluno escolhe os três melhores sons do pacote e apresenta em 30 segundos, dizendo o nome do arquivo e onde ele será usado (vídeo ou jogo). A turma aplaude e o professor confirma se o pacote está organizado.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem de um estojo de escola. Um pacote de áudio é como um estojo organizado: caneta com caneta, lápis com lápis, e tudo com o nome na ponta para você achar na hora. Imagine procurar uma borracha num estojo bagunçado com cem coisas dentro, é o que acontece quando os áudios ficam soltos na pasta de Downloads. Diga que o formato do arquivo é como o tipo de tomada: cada aparelho só liga na tomada certa, e o Roblox só aceita certos formatos de som. E nomear bem é como escrever o nome no caderno: "musica_fase1" diz na hora o que é aquele som, enquanto "audio_final_3_v2" não diz nada.

## Erros comuns e como ajudar

O erro mais comum é o aluno baixar o áudio e deixar com o nome automático cheio de números; mostre como renomear logo após o download, antes de esquecer qual era. Outro é jogar tudo na mesma pasta sem separar; reforce as três subpastas. Muitos baixam no formato errado ou esquecem de clicar em MP3 Audio no Suno; confira junto. Alguns tentam enviar para o Roblox um áudio longo demais e ele recusa; explique o limite e peça para usar trechos curtos ou loops. Há quem renomeie com espaços e acentos no nome do arquivo, o que às vezes dá problema no jogo; ensine a usar palavras juntas com sublinhado, como "voz_heroi_vitoria". Se um aluno travar, peça que baixe um único som e o coloque na subpasta certa com o nome correto antes de seguir para os outros.`,
  exercicios: [
    {
      titulo: `Montando a Pasta do Projeto`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Mostre no projetor como criar a pasta principal e as três subpastas. Caminhe conferindo se cada aluno criou as subpastas com os nomes certos antes de começar a baixar os áudios. Esse passo organiza todo o resto da aula.`,
      atividade: `No seu computador, crie uma pasta chamada "audio_seunome_jogo". Dentro dela, crie três subpastas com estes nomes exatos: "musica", "vozes" e "efeitos". Deixe a pasta aberta numa janela para usar durante toda a aula.`,
      gabarito: `O aluno deve ter uma pasta principal nomeada com seu nome (por exemplo "audio_ana_jogo") contendo exatamente três subpastas chamadas musica, vozes e efeitos, escritas sem acentos e sem espaços. Considera-se correto quando a estrutura está pronta e aberta na tela, servindo de destino para os downloads das etapas seguintes.`,
    },
    {
      titulo: `Baixando no Formato Certo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre de novo o caminho de download no Suno (três pontinhos, Download, MP3 Audio) e no ElevenLabs (ícone de setinha para baixo). Garanta que cada aluno baixe em MP3 e não confunda o botão. Ajude quem não acha o áudio na pasta de Downloads.`,
      atividade: `Volte ao Suno e baixe a sua melhor música clicando nos três pontinhos, depois Download e MP3 Audio. Em seguida volte ao ElevenLabs e baixe uma voz clicando no ícone de Download. Confira que os dois arquivos chegaram na pasta de Downloads do navegador.`,
      gabarito: `O aluno acerta quando consegue baixar pelo menos um arquivo MP3 do Suno e um do ElevenLabs, usando os botões corretos de Download em cada ferramenta, e localiza os dois na pasta de Downloads. O ponto-chave é o formato MP3, que serve tanto para o vídeo no CapCut quanto para o Roblox Studio.`,
    },
    {
      titulo: `O Jogo dos Nomes em Dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas. Cada aluno mostra ao colega os arquivos que baixou e juntos decidem um bom nome para cada um, seguindo o padrão tipo_uso_detalhe. Oriente a evitar acentos e espaços. Passe nas duplas conferindo se os nomes ficaram claros.`,
      atividade: `Em dupla, olhem os arquivos que cada um baixou. Para cada som, escolham juntos um nome no padrão tipo_uso_detalhe, por exemplo "musica_fase1_loop", "voz_heroi_vitoria" ou "efeito_moeda". Renomeiem os arquivos do seu colega que ainda estiverem com nome automático e confiram se o seu também está claro.`,
      gabarito: `A dupla deve renomear os arquivos seguindo o padrão tipo_uso_detalhe, sem acentos e sem espaços, usando sublinhado entre as palavras. Considera-se correto quando qualquer pessoa, lendo só o nome do arquivo, entende que tipo de som é e onde ele será usado. Exemplos válidos: musica_menu_loop, voz_vilao_ameaca, efeito_pulo. Nomes vagos como "audio_final2" não são aceitos.`,
    },
    {
      titulo: `Roda de Conversa: Por que Organizar os Sons?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas abertas sobre a importância de nomear e separar os áudios. Garanta que todos falem ao menos uma frase. Valorize comparações criativas, não há resposta única.`,
      atividade: `Em roda, cada um responde: por que vale a pena separar os sons em subpastas e dar nomes claros, em vez de deixar tudo solto? O que aconteceria com o seu jogo daqui a alguns meses, com cem sons, se eles estivessem todos misturados e com nomes automáticos? Use uma comparação do dia a dia.`,
      gabarito: `Não há resposta única. Espera-se que o aluno explique que a organização permite achar o som certo em segundos, evita confusão quando o projeto cresce e facilita reaproveitar o áudio no vídeo e no jogo. Boas respostas comparam com um estojo organizado, uma estante de livros por ordem ou os contatos do celular com nome. O professor confirma o aprendizado quando o aluno liga a organização ao trabalho real de um criador de jogos.`,
    },
    {
      titulo: `Pacote de Áudio Pronto e Apresentação`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Atividade de fechamento do mês. Cada aluno finaliza o pacote movendo todos os arquivos para as subpastas certas, com os nomes no padrão, e depois apresenta os três melhores sons em 30 segundos. Recolha (ou registre) o estado de cada pacote para retomar nas aulas de vídeo e de Roblox.`,
      atividade: `Finalize o seu pacote de áudio: mova cada arquivo baixado para a subpasta certa (musica, vozes ou efeitos) e confira que todos seguem o padrão de nomes. Depois, escolha os seus três melhores sons e apresente em 30 segundos para a turma, dizendo o nome de cada arquivo e onde ele será usado: no vídeo, no jogo, ou nos dois.`,
      gabarito: `Pacote completo exige: a pasta principal com as três subpastas, cada arquivo movido para a subpasta correta, todos em MP3 e nomeados no padrão tipo_uso_detalhe (sem acentos nem espaços). A apresentação está correta quando o aluno mostra três sons reais do pacote, fala o nome de cada arquivo e explica de forma clara onde cada um será usado. Um pacote bem organizado e apresentado é o entregável do mês, pronto para ser reaproveitado nos vídeos do CapCut e dentro dos jogos no Roblox Studio.`,
    },
  ],
};
