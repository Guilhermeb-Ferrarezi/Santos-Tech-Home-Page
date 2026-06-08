import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "A Máquina do Tempo do Documento",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Aprender a usar o histórico de versões do Google Docs para ver todas as alterações, descobrir quem editou cada parte, nomear versões importantes e restaurar o documento para um ponto anterior.`,
  descricao: `Toda vez que você escreve no Google Docs, algo mágico acontece nos bastidores: o documento se salva sozinho na nuvem e guarda uma "fotografia" de cada momento. Isso significa que nada se perde de verdade. Se você apagou um parágrafo importante por engano, mudou de ideia sobre uma formatação ou simplesmente quer ver como o texto estava ontem, é possível voltar no tempo. Essa ferramenta poderosa se chama Histórico de versões, e é exatamente como uma máquina do tempo do documento.

O Histórico de versões registra automaticamente as mudanças e mostra uma linha do tempo na lateral direita da tela. Cada entrada tem a data, a hora e o nome de quem editou. Quando você clica em uma dessas entradas, o documento aparece exatamente como estava naquele instante, com as partes alteradas destacadas por cores diferentes para cada pessoa. É como reassistir a um vídeo da criação do texto, vendo cada acréscimo e cada correção surgir.

Além de olhar o passado, dá para organizar a linha do tempo. Versões muito importantes podem ganhar um nome, como "Primeira versão pronta" ou "Antes da revisão da turma", para serem encontradas rapidamente depois. E o recurso mais surpreendente é a restauração: com poucos cliques, o documento inteiro pode voltar a ser exatamente como era em um ponto anterior, sem perder o resto do histórico. Mesmo restaurando, a máquina do tempo continua guardando tudo.

Nesta aula, os alunos vão entender por que documentos na nuvem são tão seguros e por que profissionais confiam neles para trabalhos importantes. Eles vão experimentar o medo de "perder tudo" e descobrir, na prática, que com o Google Docs esse medo simplesmente acaba. É uma lição sobre tecnologia, mas também sobre confiança e organização.`,
  materiais: [
    `Um computador por aluno, com navegador Chrome ou Edge e o Google Docs aberto (docs.google.com)`,
    `Conta Google escolar (G Suite / Workspace) ativa para cada aluno, já com login feito`,
    `Projetor ou TV conectado ao computador do professor para demonstrar o passo a passo`,
    `Um documento de exemplo já criado e editado várias vezes pelo professor (com histórico rico), pronto para compartilhar com a turma`,
    `Um documento compartilhado entre duplas (criado na Aula 3) para praticar o histórico com várias pessoas editando`,
    `Folha ou slide com o roteiro do "experimento da máquina do tempo" (texto que será apagado e restaurado)`,
    `Acesso à internet estável (o histórico de versões depende da nuvem)`,
  ],
  conceitosChave: [
    `Histórico de versões — registro automático de todas as alterações de um documento, mostrando como ele estava em cada momento.`,
    `Versão — uma "fotografia" do documento em um instante específico, guardada na nuvem.`,
    `Linha do tempo — a lista, na lateral direita, que mostra todas as versões em ordem de data e hora.`,
    `Nomear uma versão — dar um apelido a uma versão importante para encontrá-la com facilidade depois.`,
    `Restaurar — fazer o documento voltar a ser exatamente como era em uma versão anterior.`,
    `Cores por editor — cada pessoa que edita recebe uma cor, mostrando quem escreveu ou apagou cada parte.`,
    `Salvamento automático — recurso que grava o documento na nuvem sozinho, sem precisar clicar em "salvar".`,
  ],
  treinamento: `## O que o professor precisa saber

O Histórico de versões fica em Arquivo > Histórico de versões > Ver histórico de versões, ou pelo atalho Ctrl+Alt+Shift+H. Ele abre um painel à direita com a linha do tempo de todas as edições. Clicar em uma entrada mostra o documento naquele momento; o botão azul "Restaurar esta versão", no topo, traz o documento de volta àquele ponto. Para nomear, use Arquivo > Histórico de versões > Nomear versão atual, ou clique nos três pontinhos ao lado de uma versão na lista e escolha "Nomear esta versão". Importante: o histórico nunca se perde ao restaurar — uma nova entrada é criada registrando a restauração. Teste tudo isso no seu documento de exemplo antes da aula, para conhecer os botões e os nomes exatos.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): comece com uma pergunta: "Quem já apagou algo importante sem querer e teve vontade de chorar?". Recolha histórias rápidas. Revise a Aula 3 e 4 (edição em conjunto, comentários) e diga que hoje a turma vai aprender a viajar no tempo dentro do documento.

Conteúdo novo guiado (15 min): com o projetor ligado, abra seu documento de exemplo. Mostre o caminho Arquivo > Histórico de versões > Ver histórico de versões. Apresente o painel da direita: aponte as datas, as horas e os nomes dos editores. Clique em uma versão antiga e mostre o texto mudando na tela, com as partes destacadas por cores. Em seguida, demonstre Nomear versão atual, digitando algo como "Versão da aula de hoje". Por fim, clique no botão azul "Restaurar esta versão" e mostre que o documento voltou. Feche o painel pela seta no canto superior esquerdo.

Mão na massa (25 min): cada aluno abre um documento próprio (pode ser o da dupla) e digita um parágrafo curto sobre seu jogo, série ou esporte favorito. Peça que esperem alguns segundos para o salvamento automático acontecer. Depois, oriente: apaguem todo o parágrafo de propósito. Cara de susto! Agora todos abrem Histórico de versões, encontram a versão com o texto e clicam em Restaurar esta versão. O texto volta. Em seguida, peça que nomeiem essa versão como "Texto recuperado". Circule pela sala ajudando quem se perder no caminho dos menus.

Desafio e compartilhar (10 min): em duplas, no documento compartilhado, peça que cada um escreva uma frase, depois abram o histórico juntos e descubram quem escreveu o quê pelas cores. Fechem com uma roda rápida: "Por que nada se perde na nuvem?".

## Como explicar de forma clara

Use a imagem do videogame: o histórico de versões é como salvar o jogo em vários pontos; se você "morre", carrega um save anterior e continua. Diga que cada versão é uma foto do documento, e a linha do tempo é o álbum dessas fotos. Compare restaurar com apertar o botão de voltar no controle. Reforce a ideia central: na nuvem, o computador guarda tudo sozinho, então errar não é perigoso, é parte de aprender. Evite termos técnicos demais; fale "voltar no tempo", "foto do texto" e "quem escreveu cada cor".

## Erros comuns e como ajudar

Muitos alunos não acham o menu porque procuram com pressa: mostre devagar que é Arquivo, lá em cima à esquerda, e não Editar. Alguns clicam em uma versão mas esquecem de Restaurar, achando que basta olhar; lembre que olhar não muda nada, só o botão azul restaura. Outros se assustam ao ver o texto destacado em cores e pensam que "quebrou"; explique que cor é só uma marca de quem editou. Há quem nomeie a versão errada: oriente a sempre nomear a versão do topo, que é a atual. Por fim, se o histórico parecer vazio, geralmente é porque o documento é novo demais ou a internet caiu; peça que digitem mais um pouco e aguardem o salvamento automático.`,
  exercicios: [
    {
      titulo: `Abrindo a máquina do tempo`,
      tipo: `prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `Garanta que cada aluno tenha um documento com pelo menos duas edições antes de começar. Mostre o caminho no projetor uma vez e depois deixe que façam sozinhos.`,
      atividade: `Abra um documento seu no Google Docs. Vá em Arquivo > Histórico de versões > Ver histórico de versões. Observe o painel da direita e conte quantas versões aparecem na linha do tempo. Anote a data e a hora da versão mais antiga.`,
      gabarito: `O aluno deve abrir o painel pelo menu Arquivo (ou pelo atalho Ctrl+Alt+Shift+H), localizar a lista de versões à direita e informar um número de versões e a data/hora da mais antiga. A resposta correta é qualquer número condizente com o documento dele, desde que tenha aberto o painel certo.`,
    },
    {
      titulo: `Recuperando o texto perdido`,
      tipo: `desafio individual`,
      tempo: `8 minutos`,
      guiaProfessor: `Avise que vão apagar o texto de propósito e que ninguém vai perder nada. Acompanhe para que cliquem no botão azul "Restaurar esta versão", e não apenas visualizem.`,
      atividade: `Digite um parágrafo sobre seu hobby favorito e espere o salvamento automático. Depois apague o parágrafo inteiro. Abra o Histórico de versões, encontre a versão que ainda tem o texto, clique nela e use "Restaurar esta versão" para trazer o parágrafo de volta.`,
      gabarito: `O documento deve voltar a exibir o parágrafo apagado. Considera-se certo quando o aluno seleciona a versão anterior na linha do tempo e clica no botão azul "Restaurar esta versão" no topo, fazendo o texto reaparecer. Apenas visualizar a versão sem restaurar não conta como concluído.`,
    },
    {
      titulo: `Dando nome às versões`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Reforce que nomes claros ajudam a achar versões depois. Mostre os dois caminhos: pelo menu Arquivo e pelos três pontinhos ao lado da versão na lista.`,
      atividade: `No seu documento, vá em Arquivo > Histórico de versões > Nomear versão atual e dê o nome "Primeira versão pronta". Depois faça uma pequena edição, salve, e nomeie a nova versão atual como "Depois da correção". Abra o histórico e confira se os dois nomes aparecem na linha do tempo.`,
      gabarito: `Na linha do tempo devem aparecer duas versões com os nomes "Primeira versão pronta" e "Depois da correção", em vez de apenas data e hora. O aluno acerta se conseguir nomear as duas versões e localizá-las pelos nomes no painel.`,
    },
    {
      titulo: `Quem escreveu cada cor?`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Use o documento compartilhado da dupla. Peça que cada um escreva com seu próprio login para que as cores fiquem diferentes. Ajude a interpretar a legenda de cores do histórico.`,
      atividade: `Em dupla, no mesmo documento compartilhado, cada um escreve uma frase diferente. Depois abram juntos o Histórico de versões, ativem a opção que mostra as alterações por cor e descubram qual cor pertence a cada colega. Escrevam embaixo do texto: "A cor X é do(a) [nome]".`,
      gabarito: `A dupla deve identificar corretamente, pela legenda de cores do painel, qual editor escreveu cada trecho. Acerta quem associa cada cor ao nome certo do colega, comprovando que o histórico registra quem fez cada alteração.`,
    },
    {
      titulo: `Roda de conversa: por que nada se perde?`,
      tipo: `roda de conversa`,
      tempo: `7 minutos`,
      guiaProfessor: `Conduza a discussão deixando os alunos falarem primeiro. Anote as melhores ideias no quadro e conclua reforçando o conceito de salvamento automático na nuvem.`,
      atividade: `Em roda, cada aluno responde em uma frase: "Por que, no Google Docs, é quase impossível perder o seu trabalho?". Depois, juntos, listem três situações da vida real em que o histórico de versões salvaria alguém de um grande problema.`,
      gabarito: `Respostas válidas mencionam o salvamento automático na nuvem e o histórico de versões guardando cada momento, permitindo restaurar. Exemplos de situações: apagar um trabalho escolar sem querer, o computador desligar no meio da escrita, ou alguém alterar o texto errado em um trabalho em grupo. Qualquer trio de exemplos coerentes com esses conceitos é considerado correto.`,
    },
  ],
};
