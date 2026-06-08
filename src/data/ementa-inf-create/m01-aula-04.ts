import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Pastas: a casa dos arquivos",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a criar, renomear e navegar entre pastas e subpastas no Explorador de Arquivos do Windows, entendendo o caminho até um arquivo e a lógica de uma árvore de pastas bem organizada.`,
  descricao: `Na aula passada o aluno aprendeu o que é um arquivo, seus tipos e suas extensões. Agora chegou a hora de descobrir onde esses arquivos moram: dentro de pastas. Uma pasta é como uma gaveta ou uma caixa onde guardamos arquivos parecidos juntos. Assim como você não jogaria todas as suas roupas misturadas no chão do quarto, também não deixamos todos os arquivos espalhados pela tela. As pastas existem para dar ordem, e quem organiza bem encontra tudo rápido.

O mais interessante é que uma pasta pode ter outras pastas dentro dela. A essas pastas de dentro damos o nome de subpastas. É como uma mochila que tem um estojo dentro, e dentro do estojo há lápis e canetas. Quando empilhamos pastas dentro de pastas, formamos uma árvore de pastas: começa numa pasta grande e vai se ramificando em pastas menores, cada vez mais específicas. Por exemplo, uma pasta Escola pode conter as subpastas Matemática, História e Informática, e cada uma dessas pode ter ainda subpastas por mês ou por tema.

Para abrir, ver e mexer nessas pastas, o Windows tem uma ferramenta chamada Explorador de Arquivos. É a janela amarela com o ícone de pasta que fica na barra de tarefas. Nela o aluno vai aprender a criar uma pasta nova, dar um nome a ela, abrir, voltar e entender o caminho, que é a sequência de pastas que precisamos percorrer até chegar a um arquivo. O caminho aparece numa barra no topo da janela e funciona como o endereço de uma casa: estado, cidade, rua e número.

Esta aula é prática do começo ao fim. O aluno não vai só ouvir sobre pastas; ele vai criar a própria estrutura na tela, navegar para frente e para trás e perceber, na prática, que um computador organizado é um computador onde a gente nunca perde nada. Essa árvore de pastas será a base do entregável do mês, então capriche para que cada aluno saia daqui sabendo construir a casa dos próprios arquivos.`,
  materiais: [
    `Computadores com Windows 10 ou 11, um por aluno, ligados e com o Explorador de Arquivos disponível na barra de tarefas`,
    `Projetor ou TV para o professor mostrar a tela e cada passo do Explorador de Arquivos`,
    `Uma pasta de exemplo já pronta pelo professor (ex.: Escola com subpastas) para mostrar uma árvore organizada`,
    `Alguns arquivos de exemplo (umas fotos .jpg e um texto .txt) na Área de Trabalho de cada máquina para os alunos guardarem nas pastas`,
    `Folha impressa com o desenho de uma árvore de pastas em branco para o aluno planejar antes de criar`,
    `Conta de usuário do Windows já iniciada em cada computador antes da aula`,
  ],
  conceitosChave: [
    `Pasta — caixa digital onde guardamos arquivos parecidos juntos, para manter o computador organizado.`,
    `Subpasta — uma pasta que fica dentro de outra pasta, como um estojo dentro da mochila.`,
    `Árvore de pastas — a organização de pastas dentro de pastas, que vai se ramificando da maior para as menores e mais específicas.`,
    `Explorador de Arquivos — programa do Windows (ícone de pasta amarela na barra de tarefas) usado para ver, abrir, criar e organizar pastas e arquivos.`,
    `Caminho — a sequência de pastas que precisamos percorrer até chegar a um arquivo, como o endereço de uma casa.`,
    `Navegar — andar entre as pastas, entrando nelas com duplo clique e voltando com o botão de seta para trás.`,
    `Barra de endereço — a faixa no topo do Explorador que mostra em que pasta você está agora.`,
  ],
  treinamento: `## O que o professor precisa saber

O Explorador de Arquivos é a janela que mostra as pastas e os arquivos do Windows. Você o abre clicando no ícone de pasta amarela na barra de tarefas, ou pressionando a tecla Windows mais a letra E ao mesmo tempo. Do lado esquerdo há uma coluna chamada painel de navegação, com atalhos como Área de Trabalho, Downloads, Documentos e Imagens. No meio fica o conteúdo da pasta aberta. No topo há a barra de endereço, que mostra o caminho, e os botões de seta para voltar e avançar. Para criar uma pasta basta clicar com o botão direito num espaço vazio e escolher Novo e depois Pasta, ou usar o botão Novo no menu de cima. Para renomear, clique na pasta uma vez, pressione F2, digite o nome e tecle Enter. Teste tudo uma vez em casa para chegar seguro.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior perguntando o que é um arquivo. Mostre no projetor uma Área de Trabalho cheia de arquivos bagunçados e pergunte: como achar uma foto específica aqui no meio dessa zona? Apresente a ideia da pasta como gaveta. Mostre rapidamente a sua pasta de exemplo Escola já organizada com subpastas.

Conteúdo novo guiado (15 min): no projetor, abra o Explorador de Arquivos pelo ícone amarelo da barra de tarefas. Clique em Documentos no painel da esquerda. Clique com o botão direito num espaço vazio, escolha Novo e depois Pasta. Aparece uma pasta com o nome Nova pasta já selecionado em azul; digite Escola e tecle Enter. Dê dois cliques rápidos para entrar na pasta Escola. Lá dentro, crie a subpasta Informática do mesmo jeito. Mostre a barra de endereço no topo: ela agora exibe Documentos, depois Escola, depois Informática. Diga que isso é o caminho. Clique na seta para trás para voltar e mostre que dá para andar entre as pastas.

Mão na massa (25 min): cada aluno repete no próprio computador. Primeiro abre o Explorador, vai em Documentos e cria a pasta Escola. Entra nela e cria três subpastas: Informática, Trabalhos e Fotos. Depois arrasta os arquivos de exemplo da Área de Trabalho para dentro das subpastas certas (as fotos vão em Fotos, o texto em Trabalhos). Circule pela sala conferindo se cada um conseguiu entrar e sair das pastas usando a seta de voltar e o duplo clique.

Desafio e compartilhar (10 min): proponha que cada aluno crie mais uma subpasta dentro de Informática chamada Aula 4 e diga em voz alta o caminho completo até ela (Documentos, Escola, Informática, Aula 4). Convide dois ou três a mostrarem a árvore de pastas no projetor e a lerem o caminho.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação da casa e do armário. Diga: o computador é como uma casa enorme; as pastas são os armários e gavetas. Se você joga tudo no chão, nunca acha nada; se guarda cada coisa na gaveta certa, encontra na hora. A subpasta é uma gaveta dentro de outra gaveta. O caminho é o endereço: para chegar na sua foto, eu sigo Documentos, depois Escola, depois Fotos, igual a seguir rua e número até uma casa. Sempre repita o gesto: clica com o direito, Novo, Pasta, digita o nome, Enter.

## Erros comuns e como ajudar

O erro mais comum é o aluno criar a pasta no lugar errado, geralmente solta na Área de Trabalho em vez de dentro de Documentos. Mostre a barra de endereço para conferir onde ele está antes de criar. Outro erro é dar dois cliques muito devagar ao renomear e acabar entrando na pasta sem trocar o nome; ensine a usar a tecla F2 para renomear com segurança. Muitos esquecem de teclar Enter depois de digitar o nome, e a pasta fica como Nova pasta; lembre sempre do Enter. Alguns se perdem ao entrar em várias subpastas e não sabem voltar; mostre a seta para trás no canto superior esquerdo e a barra de endereço como mapa. Por fim, evite nomes com a barra ou outros símbolos proibidos, pois o Windows não aceita; oriente nomes simples e claros.`,
  exercicios: [
    {
      titulo: `Minha primeira pasta`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Confirme que cada aluno consegue abrir o Explorador de Arquivos e está dentro de Documentos antes de criar. Acompanhe o clique com o botão direito e o uso do Enter.`,
      atividade: `Abra o Explorador de Arquivos, entre em Documentos e crie uma pasta chamada Escola. Clique com o botão direito num espaço vazio, escolha Novo e depois Pasta, digite Escola e tecle Enter.`,
      gabarito: `Dentro de Documentos aparece uma pasta com o nome Escola (e não Nova pasta), confirmando que o aluno digitou o nome e teclou Enter. O acerto é a pasta existir, estar nomeada corretamente e localizada dentro de Documentos.`,
    },
    {
      titulo: `Gavetas dentro da gaveta`,
      tipo: `Desafio individual`,
      tempo: `7 min`,
      guiaProfessor: `Verifique se o aluno entrou na pasta Escola com duplo clique antes de criar as subpastas. Use a barra de endereço para mostrar que ele está dentro de Escola.`,
      atividade: `Entre na pasta Escola com dois cliques. Lá dentro, crie três subpastas: Informática, Trabalhos e Fotos. Depois clique na seta para trás e confirme que as três aparecem dentro de Escola.`,
      gabarito: `Dentro da pasta Escola existem exatamente três subpastas com os nomes Informática, Trabalhos e Fotos. A barra de endereço, ao entrar em Escola, mostra Documentos e depois Escola. O acerto é as três subpastas estarem dentro de Escola, e não soltas em Documentos.`,
    },
    {
      titulo: `Cada coisa em seu lugar`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas. Cada dupla guarda os arquivos de exemplo nas subpastas corretas, arrastando ou usando recortar e colar. Circule conferindo se as fotos foram para Fotos e o texto para Trabalhos.`,
      atividade: `Em dupla, peguem os arquivos de exemplo da Área de Trabalho e guardem cada um na subpasta certa: as fotos .jpg vão para a subpasta Fotos e o arquivo de texto .txt vai para Trabalhos. Depois abram cada subpasta e confiram o conteúdo.`,
      gabarito: `A subpasta Fotos contém as imagens .jpg e a subpasta Trabalhos contém o arquivo .txt; a Área de Trabalho ficou sem esses arquivos de exemplo. O acerto é cada arquivo estar na subpasta correspondente ao seu tipo, mostrando que a dupla entendeu a lógica da organização.`,
    },
    {
      titulo: `Que caminho é esse?`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Reúna a turma em volta de um computador no projetor. Aponte a barra de endereço e conduza a leitura do caminho. Ligue a ideia ao endereço de uma casa para fixar o conceito.`,
      atividade: `Olhando a barra de endereço no topo do Explorador, a turma lê em voz alta o caminho completo até a subpasta Fotos. Em seguida, discutam: por que esse caminho é parecido com o endereço de uma casa?`,
      gabarito: `O caminho correto até as fotos é Documentos, depois Escola, depois Fotos. Espera-se que os alunos percebam que o caminho funciona como um endereço: vai do maior (Documentos) para o mais específico (Fotos), assim como cidade, rua e número levam até uma casa. O professor valida quando a turma lê o caminho na ordem certa e faz essa ligação.`,
    },
    {
      titulo: `A árvore da minha escola`,
      tipo: `Projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Tarefa final que junta tudo: criar, entrar, renomear e navegar. Oriente o aluno a planejar primeiro na folha impressa e depois montar no computador. Avalie a estrutura completa e o caminho falado.`,
      atividade: `Monte sua árvore de pastas completa dentro de Escola: crie a subpasta Aula 4 dentro de Informática. Renomeie a subpasta Trabalhos para Atividades usando a tecla F2. No fim, navegue até Aula 4 e diga em voz alta o caminho completo até ela.`,
      gabarito: `A estrutura final, dentro de Documentos, é: Escola contém Informática, Atividades (antiga Trabalhos, renomeada) e Fotos; dentro de Informática há a subpasta Aula 4. O caminho falado correto é Documentos, Escola, Informática, Aula 4. O acerto é a árvore estar montada nessa ordem, a renomeação ter funcionado e o aluno ler o caminho completo sem se perder, demonstrando domínio de criar, renomear e navegar.`,
    },
  ],
};
