import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Por dentro de um site real",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Usar a ferramenta Inspecionar do navegador para abrir o código de sites reais, reconhecer o trio HTML, CSS e JavaScript e planejar no papel a página pessoal que cada aluno vai construir ao longo do mês.`,
  descricao: `Na aula passada a turma descobriu como a web funciona por baixo dos panos: o navegador pede uma página a um servidor e recebe de volta arquivos de texto. Hoje vamos abrir esses arquivos de verdade. Todo navegador esconde uma ferramenta poderosa, chamada Inspecionar (ou DevTools), que mostra o código por trás de qualquer site do mundo. É como ter um raio-X que revela a estrutura secreta das páginas que usamos todos os dias.

O coração da aula é entender que um site não é feito de uma coisa só, e sim de três linguagens que trabalham juntas. O HTML é a estrutura, o esqueleto: ele diz o que existe na página, como títulos, parágrafos, imagens e botões. O CSS é o estilo, a roupa e a maquiagem: ele cuida das cores, dos tamanhos, das fontes e da posição de cada elemento. O JavaScript é o comportamento, o cérebro: ele faz a página reagir, abrir menus, validar formulários e responder a cliques. Estrutura, estilo e comportamento: esse é o trio que sustenta qualquer página da internet.

Para enxergar isso na prática, os alunos vão clicar com o botão direito em um site real e escolher Inspecionar. Vão passar o mouse sobre o código e ver partes da página acendendo, descobrir onde ficam os títulos no HTML e brincar de mudar um texto ou uma cor ali mesmo, ao vivo. Nada que eles fizerem estraga o site de verdade, porque a mudança acontece só na cópia que está aberta no computador deles. Essa liberdade de experimentar sem medo costuma ser o momento mais empolgante do mês.

A aula termina longe do computador, com papel e lápis. Antes de escrever qualquer linha de código, todo bom desenvolvedor planeja. Cada aluno vai desenhar um rascunho simples da página pessoal que vai construir durante o mês, decidindo quais blocos ela terá, como um título com o nome, uma foto, um pequeno texto de apresentação e talvez uma lista de hobbies. Esse desenho será o mapa que vai guiar todas as próximas aulas até a página entrar no ar.`,
  materiais: [
    `Computadores com um navegador moderno instalado (Google Chrome ou Microsoft Edge), um por aluno, com acesso à internet`,
    `Projetor ou TV grande para o professor demonstrar cada passo da ferramenta Inspecionar na tela`,
    `Lista de dois ou três sites simples e seguros para inspecionar, já testados pelo professor (por exemplo, o site da própria escola ou uma página de notícias leve)`,
    `Editor de código instalado (VS Code) apenas aberto como referência, para os alunos associarem o que veem no Inspecionar ao que vão escrever depois`,
    `Folhas de papel em branco e lápis ou caneta para o planejamento da página pessoal`,
    `Folha impressa com um modelo simples de rascunho (retângulos representando título, foto, texto e lista) para os alunos preencherem`,
    `Cartaz ou slide com o trio HTML, CSS e JavaScript e o que cada um faz (estrutura, estilo, comportamento)`,
  ],
  conceitosChave: [
    `Inspecionar (DevTools) — ferramenta embutida no navegador que mostra o código e a estrutura de qualquer página aberta; abre com o botão direito e a opção Inspecionar, ou com a tecla F12.`,
    `HTML — a linguagem da estrutura; define o que existe na página, como títulos, parágrafos, imagens e links. É o esqueleto do site.`,
    `CSS — a linguagem do estilo; cuida da aparência, como cores, fontes, tamanhos e posição dos elementos. É a roupa do site.`,
    `JavaScript — a linguagem do comportamento; faz a página reagir e se mexer, respondendo a cliques e mudanças. É o cérebro do site.`,
    `Elemento — cada pedaço da página marcado pelo HTML, como um título, um parágrafo ou uma imagem.`,
    `Aba Elements — a parte do Inspecionar que mostra o HTML da página em forma de lista organizada, onde dá para passar o mouse e ver cada elemento acender.`,
    `Rascunho (wireframe) — o desenho simples, feito no papel, que planeja onde cada bloco vai ficar na página antes de programar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista para dar esta aula; precisa apenas saber abrir o Inspecionar e reconhecer o trio HTML, CSS e JavaScript. Para abrir a ferramenta, clique com o botão direito em qualquer lugar de uma página e escolha Inspecionar, ou pressione a tecla F12. Vai surgir um painel, normalmente do lado direito ou em baixo, com várias abas no topo. Foque em duas: a aba Elements (ou Elementos), que mostra o HTML, e a aba Styles (ou Estilos), que aparece ao lado e mostra o CSS de um elemento selecionado.

O segredo mágico da aula é este: ao passar o mouse sobre uma linha de código na aba Elements, a parte correspondente da página acende com um destaque colorido. Isso conecta, na cabeça do aluno, o código com o que ele vê. Outra mágica: dando dois cliques em um texto dentro do código, dá para mudar esse texto ao vivo e a página muda na hora. Tranquilize a turma de que isso não estraga o site real; é só uma cópia temporária na máquina deles, que volta ao normal ao recarregar a página com a tecla F5. Antes da aula, teste seus dois ou três sites de exemplo e confirme que o Inspecionar abre sem bloqueios.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a aula anterior com perguntas rápidas. "O que o navegador faz quando digitamos um endereço?" "O que ele recebe de volta do servidor?" Conduza até a ideia de que a resposta é texto, é código. Diga que hoje vamos abrir esse código de sites de verdade.

Conteúdo novo guiado (15 min): no projetor, abra um site de exemplo. Clique com o botão direito e escolha Inspecionar (ou aperte F12). Mostre a aba Elements e passe o mouse devagar sobre as linhas, fazendo partes da página acenderem. Aponte uma tag de título e leia em voz alta um trecho como este, exatamente como aparece:

<h1>Bem-vindo ao nosso site</h1>

Explique que h1 é um título grande e que o texto entre a tag de abertura e a de fechamento é o que aparece na tela. Dê dois cliques no texto, troque por algo divertido e mostre a página mudando ao vivo. Em seguida, clique em um elemento e mostre na aba Styles um trecho de CSS parecido com este:

h1 {
  color: blue;
  font-size: 32px;
}

Diga que isso é o CSS, que pinta o título de azul e define o tamanho da letra. Por fim, cite que existe uma terceira linguagem, o JavaScript, que faz a página reagir a cliques, e que vamos conhecer melhor adiante.

Mão na massa (25 min): cada aluno abre um site da lista, ativa o Inspecionar e explora. Peça três tarefas: encontrar um título no HTML, trocar o texto desse título ao vivo e mudar uma cor pela aba Styles. Circule pela sala ajudando quem não acha a aba certa. Reforce que a tecla F5 traz tudo de volta ao normal.

Desafio e compartilhar (10 min): agora longe do computador. Entregue o papel e peça que cada aluno desenhe o rascunho da própria página pessoal, com blocos para nome, foto, texto de apresentação e uma lista de hobbies. Termine com dois ou três alunos mostrando o rascunho para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem do corpo humano: o HTML é o esqueleto, o CSS é a roupa e o JavaScript é o cérebro que faz tudo se mexer. Diga que o Inspecionar é um raio-X do site, que mostra os ossos por dentro. Compare uma tag a uma caixa com tampa: a tag de abertura abre a caixa, o conteúdo fica dentro e a tag de fechamento, com a barra, põe a tampa. Sempre que usar uma palavra em inglês como Elements ou Styles, fale o significado em português logo em seguida.

## Erros comuns e como ajudar

O tropeço mais comum é o aluno fechar o painel sem querer; mostre de novo o botão direito e a opção Inspecionar, ou a tecla F12. Alguns acham que estragaram o site ao mudar um texto; tranquilize e mostre que a tecla F5 recarrega e tudo volta. Há quem confunda as abas e procure cor no lugar do HTML; lembre que estrutura fica em Elements e cor fica em Styles. No planejamento, alguns querem desenhar algo perfeito e travam; explique que o rascunho é só um mapa simples, feito de retângulos, e que pode ser refeito depois.`,
  exercicios: [
    {
      titulo: `Abrindo o raio-X do site`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre antes no projetor as duas formas de abrir: botão direito e Inspecionar, ou a tecla F12. Garanta que cada aluno chegue a ver o painel de código aberto antes de seguir. Circule conferindo quem ainda não conseguiu.`,
      atividade: `Abra um dos sites da lista da turma. Clique com o botão direito na página e escolha Inspecionar (ou aperte F12) para abrir o painel de código. Em seguida, na aba Elements, passe o mouse devagar sobre as linhas e observe partes da página acenderem.`,
      gabarito: `O painel do Inspecionar abre com a aba Elements visível. Ao passar o mouse sobre as linhas de código, o aluno vê o trecho correspondente da página acender com um destaque colorido, conectando o código ao que aparece na tela.`,
    },
    {
      titulo: `Trocando um título ao vivo`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre o duplo clique sobre o texto dentro de uma tag de título antes de soltar a turma. Reforce que nada é estragado e que a tecla F5 recarrega a página original. Ajude quem clicar fora do texto e abrir o lugar errado.`,
      atividade: `Na aba Elements, encontre uma linha de título parecida com <h1>...</h1>. Dê dois cliques no texto que fica entre as tags, apague e escreva o seu nome. Veja o título mudar na hora na página. Depois aperte F5 para tudo voltar ao normal.`,
      gabarito: `O aluno localiza um elemento de título no HTML, edita o texto interno e vê a mudança refletida na página ao vivo. Por exemplo, a linha passa de <h1>Bem-vindo</h1> para <h1>Maria</h1>. Ao apertar F5, a página volta ao texto original.`,
    },
    {
      titulo: `Caçando o trio do site`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre o cartaz com os três papéis: estrutura, estilo e comportamento. Oriente a olhar o HTML na aba Elements e o CSS na aba Styles. Aceite respostas com as palavras dos alunos, sem exigir termos técnicos perfeitos.`,
      atividade: `No site aberto, encontre um exemplo de cada parte do trio: um pedaço de HTML (um título ou parágrafo na aba Elements) e um pedaço de CSS (uma cor ou tamanho na aba Styles). Anote no papel onde achou cada um e diga, com suas palavras, o que cada parte faz.`,
      gabarito: `O aluno aponta um elemento de HTML na aba Elements (por exemplo, um <p>texto</p>) e uma regra de CSS na aba Styles (por exemplo, color: blue ou font-size: 32px). Explica que o HTML é a estrutura, o CSS é o estilo e cita o JavaScript como o comportamento, mesmo que não o encontre na tela.`,
    },
    {
      titulo: `Detetives em dupla`,
      tipo: `em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e peça que rodízio de teclado: um comanda em voz alta e o outro executa, depois trocam. Sugira sites diferentes para cada dupla. Valorize a colaboração e a leitura do código em voz alta.`,
      atividade: `Em dupla, escolham um site novo da lista. Um aluno comanda em voz alta (por exemplo, "abra o Inspecionar", "ache um título", "mude a cor para vermelho") e o outro executa no teclado. Depois troquem de papel e repitam em outra parte da página.`,
      gabarito: `As duplas conseguem abrir o Inspecionar, localizar um elemento e alterar texto ou cor ao vivo, alternando os papéis. Cada aluno consegue, ao menos uma vez, comandar e executar uma mudança, demonstrando que sabe achar o HTML e o CSS sozinho.`,
    },
    {
      titulo: `O mapa da minha página`,
      tipo: `planejamento no papel`,
      tempo: `8 minutos`,
      guiaProfessor: `Distribua a folha com o modelo de retângulos. Explique que é só um rascunho simples, não uma obra de arte. Conduza com perguntas: "Qual será o seu título?" "Você quer foto?" "Quais hobbies vão na lista?" Deixe dois ou três alunos mostrarem o resultado.`,
      atividade: `No papel, desenhe o rascunho da página pessoal que você vai construir neste mês. Use retângulos para os blocos: um para o título com o seu nome, um para a foto, um para um pequeno texto de apresentação e um para uma lista de hobbies. Escreva dentro de cada retângulo o que vai ali.`,
      gabarito: `O aluno entrega um rascunho com pelo menos quatro blocos identificados: título com o nome, foto, texto de apresentação e lista de hobbies. Cada bloco traz uma anotação do conteúdo previsto. O desenho funciona como mapa para as próximas aulas, mesmo sendo simples e feito só com retângulos.`,
    },
  ],
};
