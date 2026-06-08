import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Animações que Guiam o Olhar",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar animações de entrada, ênfase e saída em textos e objetos do PowerPoint e usar o Painel de Animação para sequenciar e cronometrar os efeitos com propósito, revelando a informação na ordem certa sem distrair a plateia.`,
  descricao: `Na aula passada os alunos aprenderam transições, que são os efeitos entre um slide e outro. Agora damos um passo para dentro do slide: as animações fazem cada elemento (um título, uma frase, uma imagem) aparecer, ganhar destaque ou sair no momento que você decidir. A diferença é importante e os alunos costumam confundir. Transição é a porta entre dois cômodos; animação é o que acontece com os móveis dentro do mesmo cômodo.

O grande objetivo da aula não é encher o slide de efeitos, e sim usar a animação para guiar o olhar de quem assiste. Quando o texto inteiro aparece de uma vez, a plateia lê tudo e para de ouvir o apresentador. Quando os tópicos surgem um a um, no clique, a atenção segue a fala. Por isso o PowerPoint separa as animações em três famílias: entrada (o elemento chega), ênfase (o elemento já está na tela e chama atenção, por exemplo pulsando ou mudando de cor) e saída (o elemento vai embora para liberar espaço).

A ferramenta central desta aula é o Painel de Animação. É nele que cada efeito vira uma linha numerada, e o aluno pode reordenar, decidir se começa Ao Clicar, Com a Anterior ou Após a Anterior, e ajustar a duração e o atraso. Esse painel transforma um amontoado de efeitos numa sequência pensada, com começo, meio e fim. Aprender a lê-lo e a arrastá-lo é o que separa uma apresentação amadora de uma profissional.

Ao final, os alunos devem entender que menos é mais. Duas ou três animações com propósito valem mais que dez efeitos espalhados. A pergunta que cada aluno deve se fazer antes de aplicar qualquer animação é simples: isso ajuda a plateia a entender, ou só serve para enfeitar? Essa mentalidade vai acompanhá-los até a apresentação de impacto, entregável do mês.`,
  materiais: [
    `Computadores (um por aluno) com o PowerPoint instalado e aberto, cada aluno logado na conta Microsoft da escola`,
    `Projetor ou TV ligada ao computador do professor para demonstrar cada passo na tela grande`,
    `Arquivo de exemplo "Animacoes-base.pptx" com três slides prontos: um com lista de tópicos, um com imagens e um com um gráfico simples`,
    `Slide de demonstração propositalmente exagerado (texto piscando, muitos efeitos) para mostrar o que NÃO fazer`,
    `Fones de ouvido opcionais, caso algum efeito tenha som, para não atrapalhar a turma`,
    `Lista impressa com as três famílias de animação (entrada, ênfase, saída) e o significado de Ao Clicar, Com a Anterior e Após a Anterior`,
    `Conta Microsoft ativa e acesso ao OneDrive ou pasta da turma para salvar o trabalho`,
  ],
  conceitosChave: [
    `Animação — efeito aplicado a um elemento dentro do slide (texto, imagem, forma), diferente da transição que ocorre entre slides.`,
    `Entrada — animação que faz o elemento surgir na tela, como Aparecer, Esmaecer ou Voar para Dentro.`,
    `Ênfase — animação que destaca um elemento que já está visível, como Pulsar, Girar ou Mudar de Cor.`,
    `Saída — animação que faz o elemento sair da tela para liberar espaço ou encerrar uma ideia.`,
    `Painel de Animação — janela lateral que lista cada efeito em ordem numerada e permite reordenar, cronometrar e ajustar.`,
    `Iniciar (Ao Clicar / Com a Anterior / Após a Anterior) — define se o efeito espera um clique, roda junto com o anterior ou logo depois dele.`,
    `Duração e Atraso — controlam quanto tempo o efeito leva e quanto ele espera antes de começar, medidos em segundos.`,
  ],
  treinamento: `## O que o professor precisa saber

Toda animação no PowerPoint mora na aba Animações, na faixa superior. Você seleciona o elemento (clica na imagem ou na caixa de texto), abre a aba Animações e escolhe um efeito na galeria. As cores dos efeitos ajudam: verde é entrada, amarelo é ênfase, vermelho é saída. Ao lado da galeria ficam dois botões essenciais: Painel de Animação (abre a lista lateral) e Intervalo, onde estão Iniciar, Duração e Atraso. Antes da aula, abra o arquivo de exemplo, aplique uma animação de entrada em um tópico, abra o Painel de Animação e arraste uma linha para mudar a ordem, para lembrar como o painel reage. Confirme também que o botão Visualizar (canto esquerdo da aba) toca a animação sem entrar no modo apresentação.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor o slide exagerado, com texto piscando e voando de tudo quanto é lado. Pergunte: "deu vontade de prestar atenção ou de fechar os olhos?". Conduza a turma à conclusão de que efeito demais atrapalha. Relembre a diferença entre transição (entre slides) e animação (dentro do slide).

Conteúdo novo guiado (15 min): abra o arquivo de exemplo no slide da lista de tópicos. Clique na caixa de texto, vá à aba Animações e clique em Aparecer (verde, entrada). Clique em Visualizar. Mostre que a lista inteira aparece junta. Agora clique no botão Painel de Animação: surge a lista à direita. Explique que cada tópico pode virar uma linha; em Opções de Efeito escolha "Por Parágrafo" para que os tópicos surjam um a um. Aplique uma ênfase (Pulsar, amarelo) numa palavra importante e uma saída (Esmaecer, vermelho) numa imagem. No grupo Intervalo, mostre Iniciar (Ao Clicar, Com a Anterior, Após a Anterior), Duração e Atraso, alterando cada um e visualizando.

Mão na massa (25 min): cada aluno abre o arquivo de exemplo. Tarefa: no slide de tópicos, fazer os itens entrarem um a um Ao Clicar; aplicar uma ênfase em apenas uma palavra-chave; e fazer uma imagem sair com Esmaecer ao final. Devem abrir o Painel de Animação e conferir a ordem numerada. Circule verificando se ninguém aplicou mais de uma ênfase por slide e se a ordem faz sentido com a leitura.

Desafio e compartilhar (10 min): cada aluno entra no modo apresentação (tecla F5 ou Apresentar) e testa a sequência com cliques. Dois ou três voluntários mostram o slide no projetor explicando por que escolheram cada animação.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de um holofote de teatro: a animação acende a luz em quem deve falar naquele momento. Diga que entrada é o ator entrando no palco, ênfase é o holofote piscando nele, e saída é o ator saindo de cena. Compare "Ao Clicar" a um controle remoto: você decide quando cada coisa acontece. Repita a pergunta-guia: "isso ajuda a entender ou só enfeita?". Mostre que numerar no Painel de Animação é como montar a ordem de uma receita: trocar a ordem muda o resultado.

## Erros comuns e como ajudar

O erro mais comum é confundir animação com transição; relembre que transição está em outra aba e atua entre slides. Muitos aplicam a animação no slide errado por não terem selecionado o elemento antes; mostre o contorno azul que confirma a seleção. Outro problema é exagerar: três ênfases pulsando ao mesmo tempo. Limite a uma ênfase por slide. Alguns deixam tudo "Com a Anterior" e a sequência dispara junta; ensine quando usar "Ao Clicar". Se a animação não toca, peça que cliquem em Visualizar ou entrem no modo apresentação, pois no modo edição alguns efeitos ficam parados. Por fim, se a lista some, foi o Painel de Animação que fechou; basta clicar de novo no botão para reabri-lo.`,
  exercicios: [
    {
      titulo: `Minha primeira entrada`,
      tipo: `prática na ferramenta`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que todos abriram o arquivo de exemplo no slide de tópicos. Mostre uma vez no projetor que é preciso clicar na caixa de texto antes de aplicar o efeito.`,
      atividade: `No slide de lista de tópicos, clique na caixa de texto, vá à aba Animações e aplique o efeito Aparecer (verde). Clique em Visualizar para ver o resultado.`,
      gabarito: `O aluno seleciona a caixa de texto (contorno azul visível), escolhe Aparecer na galeria da aba Animações e, ao clicar em Visualizar, a lista surge na tela. Um número 1 aparece ao lado do elemento, indicando que a animação foi aplicada.`,
    },
    {
      titulo: `Um tópico de cada vez`,
      tipo: `desafio`,
      tempo: `7 min`,
      guiaProfessor: `Mostre o botão Opções de Efeito e a escolha "Por Parágrafo". Lembre que isso transforma a entrada única em vários itens no Painel de Animação.`,
      atividade: `Abra o Painel de Animação. Em Opções de Efeito, escolha "Por Parágrafo" para que os tópicos entrem um a um, e deixe-os iniciando Ao Clicar. Teste no modo apresentação com a tecla F5.`,
      gabarito: `No Painel de Animação aparece uma linha numerada para cada tópico, todas configuradas como Ao Clicar. No modo apresentação (F5), cada clique do mouse revela um novo tópico da lista, na ordem de cima para baixo.`,
    },
    {
      titulo: `Ênfase com propósito`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Reforce a regra de uma ênfase por slide. Confira que o aluno selecionou apenas a palavra-chave e usou um efeito amarelo (ênfase), não verde.`,
      atividade: `Escolha a palavra mais importante de um tópico, selecione-a e aplique a animação de ênfase Pulsar (amarela). Ajuste a Duração para cerca de 1 segundo e visualize.`,
      gabarito: `O aluno seleciona uma única palavra-chave e aplica Pulsar (efeito de ênfase, cor amarela). A palavra pulsa por cerca de 1 segundo ao ser executada, chamando atenção sem que o restante do texto se mova. Há apenas uma ênfase no slide.`,
    },
    {
      titulo: `Sequência completa em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada dupla planeje a ordem antes de aplicar. Circule conferindo o Painel de Animação: a numeração deve seguir a leitura e os tipos de Iniciar devem fazer sentido.`,
      atividade: `Em dupla, montem o slide com a sequência completa: tópicos entrando um a um Ao Clicar, uma ênfase numa palavra-chave e uma imagem saindo com Esmaecer ao final. Reordenem as linhas no Painel de Animação arrastando-as, se necessário.`,
      gabarito: `O Painel de Animação mostra, em ordem: entradas dos tópicos (Ao Clicar), uma ênfase única e, por último, a saída Esmaecer da imagem. A dupla consegue arrastar linhas para corrigir a ordem. No modo apresentação a sequência revela a informação de forma lógica, terminando com a imagem desaparecendo.`,
    },
    {
      titulo: `Reduzir para impressionar`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Use o slide exagerado do início como referência. Conduza a turma a justificar cada corte. Anote no quadro a pergunta-guia "ajuda a entender ou só enfeita?".`,
      atividade: `Olhando o slide exagerado projetado, cada aluno aponta duas animações que removeria e explica por quê. Depois, na própria apresentação, cada um remove qualquer efeito que não tenha propósito clicando na linha do Painel de Animação e apertando Delete.`,
      gabarito: `Cada aluno identifica ao menos duas animações sem propósito (ex.: texto piscando, várias ênfases ao mesmo tempo) e justifica usando a pergunta-guia. Em seguida, seleciona a linha correspondente no Painel de Animação e a remove com Delete, deixando o slide mais limpo e com foco no conteúdo.`,
    },
  ],
};
