import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Montando o Conjunto de Sprites",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Reunir personagem, itens e os primeiros elementos de cenário num único arquivo organizado por camadas e quadros, garantindo consistência visual de paleta e estilo em todo o conjunto.`,
  descricao: `Nesta aula o aluno deixa de criar sprites soltos e passa a pensar como um artista de jogos profissional: tudo precisa conversar entre si. O personagem que ele desenhou, os itens que coletou e os primeiros pedaços de cenário vão morar no mesmo arquivo, cada um em sua camada e em seu quadro, prontos para serem exportados na próxima aula. O coração do trabalho de hoje é a palavra consistência. Um conjunto de sprites consistente parece feito pela mesma pessoa, no mesmo dia, com a mesma intenção. Um conjunto inconsistente parece uma colcha de retalhos.

Para chegar lá, o aluno aprende a organizar o arquivo com nomes claros de camadas, a usar grupos quando há muitos elementos e a aproveitar a mesma paleta que travou na aula anterior. Ele também vai preencher as lacunas: quase sempre falta um ou dois sprites para o conjunto fechar, como uma variação do item, uma segunda peça de cenário ou um detalhe do personagem. Esses sprites extras precisam nascer já com a paleta e o estilo do restante, sem inventar cores novas nem mudar o nível de detalhe.

A organização não é burocracia, é o que permite animar, exportar e reaproveitar o trabalho depois. Quando o personagem está numa camada chamada PERSONAGEM e a árvore do cenário está numa camada chamada CENARIO_ARVORE, qualquer pessoa abre o arquivo e entende tudo em segundos. Esse cuidado é o que separa um projeto que termina bem de um projeto que vira bagunça na semana da entrega.

Ao final, cada aluno deve ter um arquivo único, limpo e coerente, com personagem, itens e início de cenário lado a lado, pronto para virar o entregável do mês na Aula 8.`,
  materiais: [
    `Computadores com o Aseprite instalado e aberto, um por aluno`,
    `Projetor ligado para o professor demonstrar passo a passo na tela`,
    `Arquivos de exemplo: um .aseprite com conjunto bem organizado e outro propositalmente bagunçado para comparação`,
    `Paleta do mês salva em arquivo .gpl ou .aseprite, a mesma travada na Aula 5`,
    `Personagem e itens já feitos pelos alunos nas aulas anteriores, salvos em pasta pessoal`,
    `Folha impressa de checklist de consistência (paleta única, mesmo tamanho de pixel, mesmo estilo de contorno)`,
  ],
  conceitosChave: [
    `Conjunto de sprites — grupo de desenhos do mesmo jogo que precisam parecer da mesma família visual.`,
    `Consistência visual — quando todos os sprites usam a mesma paleta, o mesmo tamanho de pixel e o mesmo estilo de contorno.`,
    `Camada — folha transparente empilhada onde mora um elemento separado, como o personagem ou uma árvore.`,
    `Grupo de camadas — pasta que junta várias camadas relacionadas para organizar arquivos grandes.`,
    `Quadro (frame) — cada quadrinho da linha do tempo, usado aqui para separar sprites diferentes no mesmo arquivo.`,
    `Variação — sprite extra criado a partir de um existente, mantendo paleta e estilo, como uma cor alternativa do item.`,
    `Sprite sheet — arquivo único que reúne vários sprites organizados, base para a exportação da próxima aula.`,
  ],
  treinamento: `## O que o professor precisa saber

Hoje o objetivo não é desenhar muita coisa nova, e sim reunir e organizar. Você vai guiar os alunos a juntar personagem, itens e início de cenário num só arquivo do Aseprite, cada elemento em sua camada e em seu quadro. A palavra-chave é consistência: mesma paleta, mesmo tamanho de pixel, mesmo estilo de contorno. Antes da aula, abra os dois arquivos de exemplo (o organizado e o bagunçado) e confira que a paleta do mês está à mão. Se você é iniciante no Aseprite, decore três coisas: o painel de Camadas fica à esquerda; a linha do tempo (Timeline) fica embaixo, ligada pelo atalho da tecla Tab; e cores novas só saem da paleta travada, nunca do seletor livre.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): projete os dois arquivos de exemplo lado a lado. Pergunte qual parece um jogo de verdade e por quê. Conduza até as respostas: paleta única, tamanhos iguais, contorno no mesmo estilo. Mostre o painel de Camadas no exemplo bom e leia os nomes em voz alta.

Conteúdo novo guiado (15 min): no Aseprite, crie um arquivo novo em File maior que o sprite, por exemplo 64x64, para caber vários elementos. No painel de Camadas (à esquerda), clique no ícone de mais para adicionar camadas e dê dois cliques no nome para renomear: PERSONAGEM, ITEM_1, CENARIO_1. Mostre como criar um Grupo: selecione duas camadas com Ctrl e clique com o botão direito em New Group. Abra a Timeline com Tab e mostre que cada quadro pode guardar um sprite diferente; clique no ícone de mais quadro para adicionar. Cole o personagem já pronto com Ctrl+C no arquivo antigo e Ctrl+V na camada certa.

Mão na massa (25 min): cada aluno abre seus arquivos anteriores e traz personagem e itens para o arquivo único, um por camada e por quadro, sempre renomeando. Em seguida, cria 1 ou 2 sprites que faltam, usando só a paleta travada. Circule pela sala conferindo nomes de camadas e a paleta. Lembre que cor nova só com conta-gotas (atalho Alt) pegando de outro sprite.

Desafio e compartilhar (10 min): peça que cada aluno mostre o painel de Camadas no projetor e leia os nomes. A turma aponta se algo está fora do estilo. Use a folha de checklist para fechar.

## Como explicar de forma clara (linguagem para a idade)

Compare o arquivo com uma mochila escolar bem arrumada: cada matéria num caderno, fácil de achar. Diga que camada é uma folha transparente e que empilhar folhas monta a cena. Para consistência, use a imagem de uma família: todos os sprites têm o mesmo ar de parentesco. Se um aluno quer uma cor que não existe na paleta, responda com calma que a regra do mês é não inventar cor, e mostre o conta-gotas como atalho mágico para reaproveitar o que já existe.

## Erros comuns e como ajudar

O erro mais frequente é deixar todas as camadas com o nome padrão Layer 1, Layer 2, e se perder. Pare a turma e faça todos renomearem juntos. Outro erro é puxar cor do seletor livre, quebrando a paleta; mostre na tela como o conta-gotas com Alt resolve. Muitos alunos esquecem de separar elementos e desenham tudo numa camada só; explique que assim não dá para animar nem exportar direito depois. Há quem mude o tamanho do pixel sem perceber, deixando um sprite com blocos maiores que os outros; compare lado a lado no projetor para o aluno enxergar a diferença. Por fim, alguns querem detalhar demais o cenário e gastam o tempo todo nele; lembre que hoje o cenário é só um começo, e que personagem e itens vêm primeiro.`,
  exercicios: [
    {
      titulo: `Arrumando a mochila digital`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Guie o aluno a abrir o arquivo único e renomear cada camada. Confira que ninguém deixou nomes padrão como Layer 1. Mostre o duplo clique no nome da camada no painel à esquerda.`,
      atividade: `Abra seu arquivo do conjunto e renomeie todas as camadas com nomes claros, como PERSONAGEM, ITEM_1 e CENARIO_1. Nenhuma camada pode ficar com nome padrão.`,
      gabarito: `Todas as camadas aparecem com nomes descritivos em maiúsculas, sem nenhum Layer 1 ou Layer 2 restante. O personagem está numa camada, cada item na sua e o cenário separado.`,
    },
    {
      titulo: `Caça à cor invasora`,
      tipo: `Desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Entregue ou projete um sprite preparado por você com uma ou duas cores fora da paleta do mês. Estimule o uso do conta-gotas com Alt para corrigir. Confira se o aluno comparou com a paleta travada.`,
      atividade: `Receba o sprite de teste, descubra qual cor não pertence à paleta do mês e corrija usando o conta-gotas (Alt) para pegar a cor certa de outro sprite.`,
      gabarito: `O aluno identifica a cor invasora, substitui pela tonalidade correta da paleta travada e o sprite passa a usar apenas as cores oficiais do mês. A paleta final tem somente as cores aprovadas.`,
    },
    {
      titulo: `Dupla organizadora`,
      tipo: `Em dupla`,
      tempo: `9 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de cadeira. Cada um abre o arquivo do colega e avalia camadas, paleta e tamanho de pixel usando o checklist. Reforce crítica gentil e específica.`,
      atividade: `Abra o arquivo do seu colega e use o checklist de consistência para apontar dois acertos e um ponto a melhorar na organização ou no estilo. Depois, ouça o retorno sobre o seu arquivo.`,
      gabarito: `Cada dupla produz duas observações concretas por arquivo, ligadas ao checklist: por exemplo, camadas bem nomeadas e paleta única como acertos, e um pixel de tamanho diferente como ponto a corrigir.`,
    },
    {
      titulo: `Roda da consistência`,
      tipo: `Roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Reúna a turma em roda com os arquivos projetados um a um. Conduza a discussão sobre o que faz um conjunto parecer da mesma família. Garanta que todos falem ao menos uma vez.`,
      atividade: `Em roda, observe os conjuntos da turma e explique com suas palavras por que a consistência visual é importante num jogo. Dê um exemplo do que quebraria essa consistência.`,
      gabarito: `O aluno articula que consistência significa mesma paleta, mesmo tamanho de pixel e mesmo estilo de contorno, e cita um exemplo válido de quebra, como uma cor fora da paleta ou um sprite com blocos maiores que os demais.`,
    },
    {
      titulo: `Fechando o conjunto`,
      tipo: `Projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Acompanhe cada aluno na criação dos sprites que faltam para o conjunto fechar. Confira camada nova, quadro novo, paleta travada e estilo igual. Esta é a base do entregável do mês.`,
      atividade: `Crie 1 ou 2 sprites que ainda faltam no seu conjunto, como uma variação do item ou um elemento de cenário. Cada novo sprite vai numa camada e num quadro próprios, usando só a paleta e o estilo do mês.`,
      gabarito: `O arquivo final reúne personagem, itens e início de cenário, com os sprites extras criados em camadas e quadros próprios, todos na mesma paleta e estilo. O conjunto está organizado e pronto para a exportação da próxima aula.`,
    },
  ],
};
