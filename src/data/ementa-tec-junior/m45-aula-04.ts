import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Errar e Consertar: Caça aos Bugs",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ao final da aula, cada criança terá escrito vários comandos print em sequência, lido as mensagens vermelhas de erro na janela Output do Roblox Studio e consertado bugs comuns como aspas e parênteses faltando.`,
  descricao: `Esta é a aula em que as crianças descobrem um segredo importante de quem programa: errar faz parte e não é problema nenhum. Nas aulas anteriores elas conheceram o Roblox Studio por dentro e escreveram o primeiro comando print. Agora vão escrever vários prints em sequência e, de propósito, vão aprender o que acontece quando um código quebra. O computador então mostra uma mensagem vermelha, e nós vamos aprender a ler essa mensagem como se fosse uma pista de detetive.

A grande ideia da aula é transformar o erro de vilão em amigo. Para uma criança, ver a tela ficar vermelha pode dar medo ou frustração. O professor mostra que o vermelho não é bronca, é o computador falando educadamente onde ele se perdeu. Cada bug tem uma causa simples: faltou fechar as aspas, esqueceu um parêntese, ou trocou uma letra. Aprender a caçar esses errinhos é a habilidade mais útil de toda a programação, e é por isso que a aula se chama Caça aos Bugs.

A palavra bug significa inseto em inglês, e é assim que os programadores chamam um errinho que se esconde no código, como uma formiguinha escondida. Quando a gente acha e conserta, dizemos que matamos o bug, ou em inglês, que fizemos um debug. As crianças adoram essa história, e vira uma brincadeira de detetive: cadê a formiguinha que quebrou o código?

A aula termina com a atividade favorita do mês: trabalho em dupla para achar e corrigir erros que o professor plantou de propósito. Em vez de só escrever código novo, as crianças viram médicas de código, recebem um script doentinho cheio de bugs e precisam descobrir e curar cada um. Isso treina a leitura atenta, a paciência e a alegria de fazer o código voltar a funcionar.`,
  materiais: [
    `Um computador por criança com o Roblox Studio já aberto, num lugar novo (Baseplate) e com a janela Output (Saída) visível na parte de baixo.`,
    `Computador do professor ligado ao projetor ou TV grande, com um Script aberto, para todos verem onde clicar e onde aparece o vermelho.`,
    `Um Script de exemplo já pronto e funcionando, com três ou quatro comandos print em sequência, para mostrar como deve ficar no final.`,
    `Um Script doentinho preparado pelo professor, com bugs plantados de propósito (aspas faltando, parêntese aberto e não fechado, letra trocada em print).`,
    `Uma folha impressa por dupla com o mesmo código doentinho escrito em letras grandes, para as crianças circularem os erros com lápis antes de mexer no computador.`,
    `Uma luneta ou lupa de brinquedo (ou desenhada em papel) para virar o símbolo do detetive caçador de bugs.`,
    `Adesivos de joaninha ou formiguinha para premiar cada bug consertado.`,
  ],
  conceitosChave: [
    `Bug — um errinho escondido no código, como uma formiguinha que quebra o programa. A palavra quer dizer inseto em inglês.`,
    `Debugar — caçar e consertar os bugs do código, como um detetive que acha e tira a formiguinha.`,
    `Output (Saída) — a janelinha de baixo do Roblox Studio onde aparecem as mensagens: o texto que o print mostra e os erros em vermelho.`,
    `Erro vermelho — a mensagem de cor vermelha que o computador escreve quando o código quebra; não é bronca, é uma pista de onde ele se perdeu.`,
    `Aspas — as duas plaquinhas que abraçam o texto, assim: aspas, palavra, aspas. Se faltar uma, o código quebra.`,
    `Parênteses — as duas curvinhas que vêm depois do print e seguram o que vai aparecer. Toda curvinha que abre precisa de uma que fecha.`,
    `Sequência — vários comandos escritos um embaixo do outro, que o computador lê de cima para baixo, na ordem.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula a turma vai escrever vários comandos print em sequência e vai aprender a ler erros. Você não precisa ser programador. Precisa saber três coisas. Primeiro: o print mostra um texto na janela Output (Saída), que fica embaixo no Roblox Studio. Se ela não estiver aberta, vá no menu de cima em View (Exibir) e clique em Output. Segundo: o código se escreve dentro de um Script. Para criar um, no painel Explorer (à direita), passe o mouse em ServerScriptService, clique no sinal de mais e escolha Script. Uma janela de texto abre. Terceiro: para rodar e ver o resultado, clique no botão Play (o triângulo azul no topo) ou pressione F5; para parar, clique em Stop.

O comando certo é assim: a palavra print, depois um parêntese que abre, depois aspas, o texto, aspas de novo, e o parêntese que fecha. Memorize os três bugs que você vai plantar e ensinar a caçar: aspas faltando (esqueceu uma das plaquinhas), parêntese faltando (abriu e não fechou) e letra trocada (escreveu prnt em vez de print). Cada um gera uma mensagem vermelha no Output, sempre com o número da linha onde está o problema. Esse número é a pista de ouro.

## Passo a passo da aula

10 min — aquecimento e revisão: Receba a turma com a luneta de detetive na mão. Relembre o print da aula passada e peça que cada criança escreva um print com o próprio nome e clique em Play para ver aparecer no Output. Anuncie: hoje a gente vai escrever vários e virar caçadores de bugs.

15 min — conteúdo novo guiado: No projetor, escreva três prints em sequência, um embaixo do outro (por exemplo print com Oi, print com Eu sou um robô, print com Tchau). Rode e mostre as três frases aparecendo na ordem, de cima para baixo. Agora apague de propósito uma aspa de um print e rode. A tela fica vermelha. Leia a mensagem em voz alta, aponte o número da linha e diga: o computador está dizendo onde se perdeu. Conserte na frente deles. Repita tirando um parêntese e depois trocando uma letra de print.

25 min — mão na massa: Junte a turma em duplas. Entregue a folha impressa com o código doentinho e a luneta. Primeiro, sem computador, as duplas circulam a lápis os erros que acham na folha. Depois abrem o Script doentinho no computador, rodam, leem o vermelho no Output e consertam um bug de cada vez, rodando de novo a cada conserto até a tela parar de ficar vermelha. Circule pela sala ajudando a ler o número da linha.

10 min — desafio e compartilhar: Desafie quem terminou a plantar um bug escondido no próprio código e passar para a dupla vizinha caçar. Na roda final, cada dupla conta qual bug foi o mais difícil de achar e mostra o Output limpo, sem vermelho. Entregue um adesivo de joaninha por bug consertado.

## Como explicar para crianças

Use sempre a história do detetive e da formiguinha. Diga que bug quer dizer inseto, e que um errinho é como uma formiguinha que se escondeu no código e fez o programa tropeçar. O vermelho não é bronca: é o computador sendo educado e mostrando o dedo no lugar onde ele se perdeu, igual quando a gente fala não achei meu sapato e aponta onde procurou. As aspas são duas plaquinhas que abraçam o texto, e toda plaquinha precisa do par. Os parênteses são duas curvinhas de mãos dadas: se uma abre, a outra tem que fechar. Faça você primeiro, devagar, e deixe que copiem olhando a sua tela.

## Erros comuns e como ajudar

O erro mais comum é a criança ter medo do vermelho e querer apagar tudo. Acalme: o vermelho é amigo, vamos ler juntos. Ensine sempre a olhar o número da linha na mensagem e contar as linhas do código até achar. Muitas confundem a vírgula com o ponto, ou escrevem a letra O no lugar do zero; mostre a diferença na tela. Outra confusão é fechar o parêntese antes das aspas; mostre a ordem certa, primeiro fecha aspas, depois fecha parêntese. Quem corrige um bug mas esquece de rodar de novo acha que não funcionou; lembre de clicar em Play depois de cada conserto. E elogie muito cada bug caçado, porque a coragem de errar e tentar de novo é o que estamos ensinando.`,
  exercicios: [
    {
      titulo: `Três prints em fila`,
      tipo: `Prática na ferramenta`,
      tempo: `5 minutos`,
      guiaProfessor: `No projetor, mostre como escrever três comandos print, um embaixo do outro, dentro do mesmo Script. Reforce que o computador lê de cima para baixo. Peça que cada criança copie e clique em Play para ver as três frases aparecerem na ordem no Output.`,
      atividade: `Escreva três comandos print, um em cada linha, com as frases que você quiser (por exemplo: Oi, Eu sou um robô, Tchau). Clique em Play e veja as três frases aparecerem na janela Output, na ordem de cima para baixo.`,
      gabarito: `Acertou quem tiver três comandos print, cada um com a palavra print, parêntese que abre, aspas, texto, aspas e parêntese que fecha, e que ao clicar em Play mostra as três frases no Output na mesma ordem em que foram escritas. Exemplo correto: print("Oi") na primeira linha, print("Eu sou um robô") na segunda e print("Tchau") na terceira.`,
    },
    {
      titulo: `O caso da aspa sumida`,
      tipo: `Caça ao bug guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre no projetor um print com uma das aspas faltando e clique em Play. A tela fica vermelha. Leia a mensagem em voz alta, aponte o número da linha e pergunte à turma o que está faltando. Conduza para a resposta: faltou uma aspa. Conserte e rode de novo para mostrar a tela limpa.`,
      atividade: `Olhe este comando com defeito: print("Bom dia). Descubra o que está faltando, conserte no seu computador e clique em Play até a tela não ficar mais vermelha.`,
      gabarito: `O bug é a aspa de fechamento que sumiu. O conserto correto é colocar a aspa depois da palavra dia, ficando print("Bom dia"). Acertou quem adiciona a aspa que faltava e roda sem aparecer mensagem vermelha no Output.`,
    },
    {
      titulo: `O parêntese que esqueceu de fechar`,
      tipo: `Caça ao bug guiada`,
      tempo: `7 minutos`,
      guiaProfessor: `Apresente um print com o parêntese de fechamento faltando. Rode e mostre o vermelho. Lembre a turma da regra das curvinhas de mãos dadas: toda que abre precisa de uma que fecha. Ajude a achar a linha pelo número que aparece na mensagem.`,
      atividade: `Olhe este comando com defeito: print("Oi turma". Falta uma curvinha. Descubra qual, conserte e clique em Play até a tela ficar limpa, sem vermelho.`,
      gabarito: `O bug é o parêntese de fechamento que faltou no final. O conserto correto é fechar a curvinha depois das aspas, ficando print("Oi turma"). Acertou quem adiciona o parêntese que faltava, na ordem certa (primeiro fecha aspas, depois fecha parêntese), e roda sem erro vermelho.`,
    },
    {
      titulo: `A letra trocada no comando`,
      tipo: `Caça ao bug guiada`,
      tempo: `6 minutos`,
      guiaProfessor: `Este bug é mais sutil: a palavra print está escrita errada, faltando uma letra. Mostre que o computador não reconhece a palavra e reclama. Ensine a comparar letra por letra com a palavra certa. Mostre também a diferença entre a letra O e o número zero, que confunde muito.`,
      atividade: `Olhe este comando com defeito: prnt("Ola"). A palavra do comando está escrita errada. Descubra a letra que sumiu, conserte e clique em Play até funcionar.`,
      gabarito: `O bug é a palavra do comando escrita errada: está prnt e o certo é print, com a letra i entre o p e o n. O conserto correto é print("Ola"). Acertou quem corrige a palavra para print e roda sem mensagem vermelha no Output.`,
    },
    {
      titulo: `Médicos de código em dupla`,
      tipo: `Atividade em dupla de caça aos bugs`,
      tempo: `10 minutos`,
      guiaProfessor: `Entregue a cada dupla a folha impressa com o código doentinho, que tem os três tipos de bug de uma vez (aspa faltando, parêntese faltando e letra trocada). Primeiro peça que circulem os erros a lápis na folha, sem computador. Depois abrem o Script doentinho, rodam, leem o vermelho e consertam um bug por vez, rodando de novo a cada conserto. Circule ajudando a ler o número da linha.`,
      atividade: `Em dupla, recebam o código doentinho. Circulem na folha os erros que acharem. Depois, no computador, consertem um bug de cada vez e cliquem em Play após cada conserto, até a janela Output não mostrar mais nenhum vermelho. As três frases devem aparecer certinhas no final.`,
      gabarito: `O código doentinho tem três bugs para curar. Exemplo: na linha 1, print("Bem-vindo) sem a aspa de fechamento, que vira print("Bem-vindo"); na linha 2, print("Vamos jogar" sem o parêntese de fechamento, que vira print("Vamos jogar"); na linha 3, prnt("Divirta-se") com a palavra errada, que vira print("Divirta-se"). Acertou a dupla que conserta os três bugs e roda o Script com o Output mostrando as três frases sem nenhuma mensagem vermelha.`,
    },
  ],
};
