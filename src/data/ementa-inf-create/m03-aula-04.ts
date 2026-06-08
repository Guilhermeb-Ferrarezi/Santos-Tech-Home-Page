import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Claude observador: imagens e planilhas",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a enviar fotos e planilhas ao Claude para descrever imagens, transcrever textos fotografados e transformar números de uma planilha em explicações e conclusões claras.`,
  descricao: `Na aula passada o aluno descobriu que o Claude consegue ler arquivos e PDFs. Agora damos um passo além: o Claude também é um ótimo observador. Ele enxerga imagens. Quando você envia uma foto, o Claude consegue descrever o que aparece nela, identificar objetos e cenas e até ler o texto que está escrito dentro da imagem. Isso é muito útil no dia a dia: imagine fotografar a lousa no fim da aula e pedir ao Claude para transcrever tudo em texto organizado, pronto para colar no caderno digital.

Além de fotos, o Claude lê planilhas. O aluno já conhece tabelas de números das aulas de Excel e Planilhas Google. O desafio de uma planilha é que ela é cheia de números frios. Quem nunca olhou para uma tabela e ficou sem saber o que aquilo significa? O Claude ajuda exatamente aí: ele lê os dados e os transforma em frases simples, aponta o maior e o menor valor, calcula totais e médias e escreve uma conclusão que qualquer pessoa entende.

Nesta aula o professor mostra três habilidades práticas do Claude observador. Primeiro, descrever uma imagem: enviar uma foto e pedir uma descrição. Segundo, transcrever um texto fotografado: fotografar (ou usar uma imagem pronta) de um cartaz, bilhete ou lousa e pedir para o Claude passar a limpo. Terceiro, interpretar uma planilha: enviar uma tabela pequena e pedir explicações e conclusões. Em todos os casos, o segredo continua sendo o mesmo das aulas anteriores: anexar o conteúdo e escrever um pedido claro.

É importante o professor reforçar a responsabilidade: nunca enviar fotos de documentos pessoais, rostos de colegas sem permissão ou senhas. Usamos sempre imagens e planilhas de exemplo, escolhidas pela escola, para praticar com segurança. Assim o aluno aprende a tecnologia e também o respeito à privacidade.`,
  materiais: [
    `Computadores com o Claude aberto no navegador (claude.ai), um por aluno, todos com login feito antes da aula`,
    `Projetor ou TV para o professor mostrar a tela com as etapas`,
    `Imagem de exemplo 1: uma foto de paisagem ou objeto (ex.: foto de uma bicicleta ou de um parque) para a descrição`,
    `Imagem de exemplo 2: foto de um texto manuscrito ou cartaz (ex.: foto de uma lousa com um bilhete) para a transcrição`,
    `Planilha de exemplo: tabela pequena salva como imagem (.png) ou arquivo .xlsx/.csv (ex.: notas de uma turma ou vendas de uma cantina)`,
    `Conta no Claude (gratuita) já configurada em cada máquina`,
    `Pasta compartilhada da escola com os arquivos de exemplo para os alunos baixarem`,
  ],
  conceitosChave: [
    `Imagem — qualquer foto ou figura (formatos como .jpg ou .png) que pode ser enviada ao Claude para ele observar.`,
    `Descrição de imagem — quando o Claude olha uma foto e escreve em palavras o que aparece nela.`,
    `Transcrição — passar para texto digitado aquilo que está escrito dentro de uma foto, como um cartaz ou uma lousa.`,
    `Planilha — tabela organizada em linhas e colunas com números ou informações, como as de Excel e Planilhas Google.`,
    `Interpretar dados — transformar os números frios de uma tabela em frases e conclusões que qualquer pessoa entende.`,
    `Anexar — usar o botão de clipe (+) para juntar uma imagem ou arquivo à mensagem antes de enviar.`,
    `Privacidade — cuidado de não enviar fotos de documentos, rostos sem permissão ou senhas; usar só exemplos seguros.`,
  ],
  treinamento: `## O que o professor precisa saber

O Claude tem visão: ele observa imagens enviadas e também lê planilhas. Você não precisa ser especialista. A regra é a mesma da aula anterior sobre arquivos: anexar o conteúdo e escrever um pedido claro. A diferença é que agora o conteúdo é uma foto ou uma tabela de números. O Claude consegue descrever cenas, ler texto dentro de uma foto (mesmo manuscrito legível) e analisar dados, apontando maior, menor, total e média. Teste tudo em casa uma vez antes da aula, usando os arquivos de exemplo da escola. Deixe os arquivos numa pasta que os alunos saibam abrir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 3. Pergunte: o Claude leu nossos PDFs, certo? Hoje ele vai virar observador e enxergar fotos e planilhas. Mostre no projetor uma foto qualquer e pergunte à turma o que veem. Diga que o Claude também consegue descrever.

Conteúdo novo guiado (15 min): no projetor, abra o claude.ai. Clique no botão de clipe ou no sinal de mais (+), à esquerda da caixa de mensagem na parte de baixo da tela. Escolha Enviar imagem ou Adicionar do computador e selecione a Imagem de exemplo 1. A miniatura aparece acima da caixa de texto. Digite: Descreva esta imagem em três frases simples. Pressione Enter (ou clique na seta de enviar). Leia a resposta com a turma. Depois remova a miniatura clicando no X e anexe a Imagem de exemplo 2 (o texto fotografado). Peça: Transcreva o texto que aparece nesta foto, mantendo a organização. Por fim, anexe a planilha de exemplo e peça: Explique o que estes dados mostram e escreva duas conclusões.

Mão na massa (25 min): cada aluno repete os três passos no próprio computador, com os mesmos arquivos. Circule pela sala. Primeiro a descrição da imagem, depois a transcrição, depois a planilha. Incentive cada um a fazer uma pergunta de acompanhamento, por exemplo: Qual foi o maior número da tabela? Lembre-os de anexar o arquivo ANTES de escrever o pedido.

Desafio e compartilhar (10 min): proponha que cada aluno peça ao Claude uma conclusão diferente sobre a planilha (a média, o item que mais vendeu, etc.). Convide dois ou três a lerem em voz alta a frase mais interessante que o Claude escreveu. Comente que números viram histórias quando bem explicados.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Diga: o Claude é como um amigo que olha por cima do seu ombro. Você mostra uma foto e ele conta o que está vendo. Mostra a lousa e ele passa a limpo pra você. Mostra uma tabela cheia de números e ele explica como se fosse uma legenda. Para a planilha, use o exemplo da cantina: estes números são quanto cada lanche vendeu na semana; vamos pedir ao Claude para dizer qual foi o campeão de vendas. Sempre diga: primeiro a gente anexa, depois a gente pede.

## Erros comuns e como ajudar

O erro mais comum é o aluno digitar o pedido e esquecer de anexar a imagem; o Claude responde que não recebeu nada. Mostre que a miniatura precisa aparecer acima da caixa antes de enviar. Outro erro é anexar a imagem errada, então confira a miniatura com eles. Imagens muito borradas ou com letra ilegível atrapalham a transcrição; oriente a usar fotos nítidas. Alguns alunos pedem coisas vagas como veja isto; ensine pedidos completos como Descreva esta imagem e diga quantas pessoas aparecem. Reforce sempre a privacidade: nada de fotos de documentos, senhas ou rostos de colegas sem permissão. Use apenas os arquivos de exemplo.`,
  exercicios: [
    {
      titulo: `Descreva a foto`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Confirme que cada aluno consegue achar o botão de clipe/mais (+) e que a miniatura da imagem aparece antes de enviar. Use a Imagem de exemplo 1.`,
      atividade: `Anexe a Imagem de exemplo 1 ao Claude e escreva: Descreva esta imagem em três frases simples. Leia a resposta.`,
      gabarito: `O Claude responde com três frases descrevendo a cena, por exemplo: a foto mostra uma bicicleta vermelha encostada em uma parede. Há uma rua tranquila ao fundo. A imagem parece ter sido tirada durante o dia. O acerto é o aluno ter anexado a imagem e recebido uma descrição em três frases.`,
    },
    {
      titulo: `Passa a limpo a lousa`,
      tipo: `Desafio individual`,
      tempo: `5 min`,
      guiaProfessor: `Use a Imagem de exemplo 2 (texto fotografado). Verifique se a foto está nítida. Mostre como remover a primeira imagem (X) antes de anexar a nova.`,
      atividade: `Anexe a Imagem de exemplo 2 e peça: Transcreva o texto que aparece nesta foto e organize em uma lista. Compare a transcrição com a foto original.`,
      gabarito: `O Claude devolve o texto digitado, fiel ao que está na imagem, organizado em lista. Por exemplo, se a foto trazia Levar caderno; estudar página 12; entregar trabalho sexta, a resposta repete esses itens em uma lista. O acerto é a transcrição corresponder ao conteúdo da foto.`,
    },
    {
      titulo: `Detetives da planilha`,
      tipo: `Em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Cada dupla anexa a planilha de exemplo e investiga. Lembre-os de anexar antes de escrever. Circule conferindo se as conclusões batem com os números reais da tabela.`,
      atividade: `Em dupla, anexem a planilha de exemplo e peçam: Explique o que estes dados mostram e diga qual é o maior valor, o menor valor e a média. Anotem as três respostas.`,
      gabarito: `O Claude identifica corretamente o maior e o menor valor e calcula a média. Exemplo: em uma planilha de vendas de lanches, maior valor = 45 (coxinha), menor valor = 8 (suco natural), média ≈ 22. A dupla acerta se as três respostas baterem com os números da tabela. O professor confere conferindo a planilha; a média também pode ser checada com a fórmula =MÉDIA(B2:B6).`,
    },
    {
      titulo: `Números viram conclusões`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma. Cada aluno pediu ao Claude uma conclusão sobre a planilha. Conduza a discussão: a conclusão do Claude fazia sentido? Os números provavam aquilo? Ensine a desconfiar e conferir.`,
      atividade: `Cada aluno lê a conclusão que o Claude escreveu sobre a planilha. A turma discute: essa conclusão está correta olhando os números? O que poderíamos perguntar a mais?`,
      gabarito: `Não há uma única resposta certa; o objetivo é o debate. Conclusões válidas saem dos dados, por exemplo: a coxinha foi o lanche mais vendido, então vale a pena produzir mais. Espera-se que os alunos percebam que toda conclusão precisa ser conferida nos números e que pedidos claros geram conclusões melhores. O professor valida quando a turma consegue ligar a conclusão aos dados reais.`,
    },
    {
      titulo: `Relatório da cantina`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Tarefa final que junta tudo: imagem mais planilha. Oriente a sequência de pedidos. Reforce a privacidade. Avalie se o relatório usa a transcrição e os dados corretos.`,
      atividade: `Anexe a planilha de exemplo e peça ao Claude um relatório curto: 1) explique os dados; 2) aponte o maior e o menor; 3) calcule o total; 4) escreva uma recomendação. Depois anexe a Imagem de exemplo 2 e peça para incluir, no fim do relatório, o texto transcrito da foto como observação.`,
      gabarito: `O relatório final traz quatro partes corretas (explicação dos dados, maior e menor valor, total e recomendação) e termina com o texto da foto transcrito como observação. Exemplo de total: se as vendas foram 45, 30, 22, 15 e 8, o total é 120, conferível com =SOMA(B2:B6). O acerto é o relatório usar os números reais da planilha e a transcrição fiel da imagem, mostrando que o aluno combinou as duas habilidades da aula.`,
    },
  ],
};
