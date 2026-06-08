import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Salvar e copiar sem perder nada",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Fazer o aluno salvar um arquivo no lugar certo e dominar a diferença entre copiar e recortar usando os atalhos Ctrl+C, Ctrl+V e Ctrl+X sem perder o original.`,
  descricao: `Nas aulas anteriores os alunos descobriram o que é um arquivo, conheceram as extensões e aprenderam que as pastas são a casa onde os arquivos moram. Agora chega a hora de juntar tudo isso na prática: salvar de propósito, no lugar que a gente escolheu, e mover ou duplicar arquivos sem medo de apagar algo importante. Esta é uma das aulas mais úteis do mês, porque "perder o arquivo" é o pesadelo número um de qualquer pessoa que usa computador.

O primeiro grande tema é a diferença entre Salvar e Salvar como. Quando criamos um documento novo no Bloco de Notas ou no WordPad, ele ainda não existe no disco — está só na memória, e some se a energia cair. Salvar é gravar esse trabalho num arquivo de verdade, dentro de uma pasta. O detalhe que confunde todo mundo é que, na primeira vez, Salvar e Salvar como fazem a mesma coisa: abrem uma janela perguntando o nome e o lugar. Depois disso, Salvar grava por cima silenciosamente, enquanto Salvar como cria uma cópia nova, com outro nome ou em outra pasta. Entender isso evita aquele drama de "sumiu meu texto" ou "salvou tudo errado".

O segundo tema é a diferença entre copiar e recortar, que vale tanto para textos quanto para arquivos inteiros. Copiar (Ctrl+C) tira uma fotografia do item e guarda numa área invisível chamada área de transferência; o original continua no lugar. Recortar (Ctrl+X) também guarda na área de transferência, mas o original vai embora assim que você cola. Colar (Ctrl+V) joga o que está guardado no destino escolhido. A regra de ouro que o aluno precisa gravar é simples: copiar mantém dois, recortar move um.

Ao final desta aula, o aluno consegue criar um documento, salvá-lo numa pasta específica, fazer uma cópia de segurança com Ctrl+C e Ctrl+V e mover um arquivo de uma pasta para outra com Ctrl+X e Ctrl+V, sempre sabendo de antemão se o original vai ficar onde estava ou não. Esse domínio prepara a próxima aula, sobre mover, organizar e renomear, e alimenta diretamente o entregável do mês: arquivos bem organizados em pastas.`,
  materiais: [
    `Computadores (um por aluno) com Windows ligado, área de trabalho visível e o Explorador de Arquivos funcionando`,
    `Bloco de Notas ou WordPad disponível no Windows (já vem instalado) para criar e salvar textos`,
    `Projetor ou TV ligada ao computador do professor para demonstrar ao vivo cada passo na tela`,
    `Uma pasta de exemplo já criada na área de trabalho de cada máquina, chamada "Santos Tech", com dois ou três arquivos dentro`,
    `Pen drive ou pasta extra opcional para mostrar uma cópia de segurança indo para outro lugar`,
    `Folha impressa (ou slide) com os três atalhos em letras grandes: Ctrl+C copiar, Ctrl+X recortar, Ctrl+V colar`,
  ],
  conceitosChave: [
    `Salvar — gravar o trabalho que está na tela dentro de um arquivo de verdade, para que ele não se perca ao fechar o programa.`,
    `Salvar como — comando que cria uma cópia nova do arquivo, deixando você escolher outro nome ou outra pasta, sem mexer no original.`,
    `Área de transferência — espaço invisível do Windows onde fica guardado, por um instante, o que você copiou ou recortou, até você colar.`,
    `Copiar (Ctrl+C) — guardar uma cópia do item na área de transferência; o original continua no lugar, então você fica com dois.`,
    `Recortar (Ctrl+X) — guardar o item na área de transferência para movê-lo; quando você cola, o original sai do lugar de origem.`,
    `Colar (Ctrl+V) — soltar no destino escolhido aquilo que está guardado na área de transferência.`,
    `Original e cópia — o original é o arquivo de onde você partiu; a cópia é o novo arquivo idêntico que aparece depois de colar.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula tem dois conceitos que parecem óbvios para quem já usa computador, mas que travam o iniciante: o significado real de Salvar como e a diferença entre copiar e recortar. Tenha clareza nos dois antes de entrar na sala. Sobre o salvamento: na primeira vez que você salva um arquivo novo, tanto Salvar (Ctrl+S) quanto Salvar como abrem a mesma janela pedindo nome e pasta. A diferença só aparece depois. A partir da segunda vez, Salvar grava por cima do mesmo arquivo, sem perguntar nada; Salvar como sempre abre a janela de novo para criar outro arquivo. Use isso para uma cópia de segurança.

Sobre a área de transferência: copiar e recortar colocam o item nesse espaço invisível, e colar o traz de volta. Copiar deixa o original onde está (você fica com dois); recortar tira o original quando você cola (você move um). Esses atalhos funcionam tanto para texto dentro de um documento quanto para arquivos inteiros no Explorador de Arquivos. Faça todo o roteiro uma vez na sua máquina antes da aula, com o projetor, porque os caminhos de menu mudam um pouco entre versões do Windows.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula das pastas perguntando "onde os arquivos moram?". No projetor, abra o Explorador de Arquivos pela barra de tarefas (ícone de pasta amarela) e mostre a pasta "Santos Tech" na área de trabalho. Pergunte: "se eu fizer um texto agora e a luz cair, o que acontece?". Deixe a turma chegar na resposta: some, porque ainda não foi salvo.

Conteúdo novo guiado (15 min): abra o Bloco de Notas (menu Iniciar, digite Bloco de Notas). Escreva uma frase curta. Clique em Arquivo, depois Salvar como; mostre a janela, escolha a pasta "Santos Tech", digite o nome "meu-primeiro-texto" e clique em Salvar. Acrescente outra frase e aperte Ctrl+S: aponte que nada perguntou, porque gravou por cima. Agora vá ao Explorador, clique uma vez no arquivo, aperte Ctrl+C, abra outra pasta e aperte Ctrl+V: existem dois arquivos. Volte, clique no original, aperte Ctrl+X, vá à outra pasta e Ctrl+V: agora o original sumiu da origem. Diga em voz alta a regra: copiar mantém dois, recortar move um.

Mão na massa (25 min): cada aluno repete o roteiro. Primeiro cria um texto no Bloco de Notas e usa Salvar como para gravar na pasta "Santos Tech" com um nome claro. Depois faz uma cópia de segurança do arquivo com Ctrl+C e Ctrl+V dentro de uma subpasta chamada "backup". Por fim, move um dos arquivos de exemplo de uma pasta para outra usando Ctrl+X e Ctrl+V. Circule conferindo se eles sabem dizer, antes de colar, se o original vai ficar ou sair.

Desafio e compartilhar (10 min): proponha o jogo "copiar ou recortar?". Você diz uma situação ("quero levar uma foto para o pen drive mas manter no PC") e o aluno responde qual atalho usar. Peça que dois alunos mostrem no projetor a pasta "backup" com a cópia dentro.

## Como explicar de forma clara

Compare a área de transferência com uma bandeja: você coloca algo nela (copiar ou recortar) e depois descarrega num lugar (colar). Para a diferença, use a ideia da fotocópia: copiar é tirar uma xerox e ficar com o papel original na mão; recortar é pegar o papel e levar embora. Para Salvar como, diga que é como tirar uma foto sua com outra roupa: vira uma imagem nova, e a antiga continua existindo. Repita a regra curta sempre que precisar: copiar mantém dois, recortar move um.

## Erros comuns e como ajudar

Muitos clicam em Salvar achando que vão escolher a pasta, mas o arquivo já existia e gravou por cima sem perguntar: ensine a usar Salvar como quando quiserem outro lugar ou nome. Outros recortam um arquivo, esquecem de colar e acham que apagaram: explique que com Ctrl+X o original só sai depois do Ctrl+V, então é só colar. Há quem aperte Ctrl+C duas vezes esperando duas cópias: lembre que a área de transferência guarda só o último item. Por fim, alguns não acham o arquivo salvo porque não repararam na pasta da janela: oriente sempre a olhar, no topo da janela de salvar, em qual pasta estão antes de clicar em Salvar.`,
  exercicios: [
    {
      titulo: `Salvar no lugar certo`,
      tipo: `Prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno abriu o Bloco de Notas e enxerga o menu Arquivo. Confira pela sala se todos escolheram a pasta "Santos Tech" antes de clicar em Salvar.`,
      atividade: `Abra o Bloco de Notas, escreva a frase "Estou aprendendo a salvar arquivos". Clique em Arquivo, depois Salvar como, escolha a pasta "Santos Tech" na área de trabalho, dê o nome "treino-salvar" e clique em Salvar.`,
      gabarito: `Dentro da pasta "Santos Tech" aparece um arquivo chamado "treino-salvar.txt". Ao abrir, ele contém a frase pedida. O aluno consegue apontar em qual pasta o arquivo ficou.`,
    },
    {
      titulo: `Gravar por cima com Ctrl+S`,
      tipo: `Prática na ferramenta`,
      tempo: `7 min`,
      guiaProfessor: `Mostre que, da segunda vez em diante, o Ctrl+S não abre janela nenhuma. Peça que reparem que nada foi perguntado, sinal de que gravou por cima do mesmo arquivo.`,
      atividade: `No arquivo "treino-salvar" que você acabou de criar, acrescente uma segunda frase: "Agora estou salvando por cima". Aperte Ctrl+S. Feche o Bloco de Notas e abra o arquivo de novo para conferir.`,
      gabarito: `O arquivo "treino-salvar.txt" agora tem as duas frases. Nenhuma janela perguntou nome ou pasta, porque o Ctrl+S gravou por cima do arquivo que já existia. O aluno explica que Salvar grava no mesmo arquivo.`,
    },
    {
      titulo: `Cópia de segurança com Ctrl+C`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Ajude a criar a subpasta "backup" dentro de "Santos Tech" (botão direito, Novo, Pasta). Reforce que, ao copiar, o original NÃO sai do lugar — devem sobrar dois arquivos.`,
      atividade: `No Explorador de Arquivos, abra a pasta "Santos Tech". Crie dentro dela uma subpasta chamada "backup". Clique uma vez no arquivo "treino-salvar.txt", aperte Ctrl+C, entre na pasta "backup" e aperte Ctrl+V.`,
      gabarito: `Existem dois arquivos iguais: o "treino-salvar.txt" continua em "Santos Tech" e uma cópia idêntica aparece em "Santos Tech\\backup". O aluno confirma que copiar manteve o original e criou uma cópia.`,
    },
    {
      titulo: `Mover de verdade em dupla`,
      tipo: `Em dupla`,
      tempo: `11 min`,
      guiaProfessor: `Forme duplas no mesmo computador. Antes de colar, peça que digam em voz alta se o original vai ficar ou sair. Lembre que Ctrl+X só remove o original depois do Ctrl+V.`,
      atividade: `Em dupla, escolham um dos arquivos de exemplo da pasta "Santos Tech". Um aluno clica nele e aperta Ctrl+X; o outro abre a subpasta "backup" e aperta Ctrl+V. Confiram juntos onde o arquivo está agora.`,
      gabarito: `O arquivo escolhido saiu da pasta "Santos Tech" e passou a existir apenas em "Santos Tech\\backup". A dupla consegue explicar que recortar moveu o arquivo, restando só uma cópia, e que o original deixou a pasta de origem ao colar.`,
    },
    {
      titulo: `Roda do copiar ou recortar`,
      tipo: `Roda de conversa e projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Conduza a roda lendo situações em voz alta. Cada aluno responde "copiar" ou "recortar" e justifica. Depois, peça um mini-projeto rápido na máquina e valorize quem souber prever o resultado antes de colar.`,
      atividade: `Na roda, responda para cada situação se usaria copiar ou recortar: 1) levar uma foto ao pen drive mas mantê-la no PC; 2) tirar um arquivo da área de trabalho e guardá-lo numa pasta; 3) duplicar um texto para ter uma versão de teste. Depois, na sua máquina, faça um arquivo novo chamado "minha-rotina.txt", salve em "Santos Tech" e crie uma cópia dele em "backup".`,
      gabarito: `Respostas esperadas: 1) copiar, porque quer manter os dois; 2) recortar, porque quer tirar do lugar; 3) copiar, porque quer ficar com original e versão de teste. No fim, existem dois arquivos "minha-rotina.txt": um em "Santos Tech" e a cópia em "backup". O aluno explica que copiar mantém dois e recortar move um.`,
    },
  ],
};
