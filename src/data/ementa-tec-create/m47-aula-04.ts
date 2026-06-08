import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 4,
  titulo: "Acabamento e UVs no Maya",
  semana: "Semana 2",
  duracao: "1 hora",
  objetivo: `Aplicar o acabamento final do modelo com suavização de normais e abrir um layout de UVs organizado, sem sobreposições, deixando o asset pronto para texturização.`,
  descricao: `Nesta aula os alunos fecham a etapa de modelagem e dão ao asset o acabamento que separa um modelo amador de um modelo de portfólio profissional. O primeiro foco é a suavização de normais: é ela que define como a luz "desliza" pela superfície do objeto. Quando as normais estão erradas, o modelo aparece com facetas duras, manchas escuras ou cantos estranhos no jogo, mesmo que a forma esteja correta. Corrigir isso no Maya, com Soften e Harden Edge, é um cuidado pequeno que muda completamente a qualidade visual.

O segundo grande tema é a abertura de UVs. UV é o mapa plano do objeto 3D: imagine descascar uma laranja e abrir a casca sobre a mesa. Esse "desenho aberto" é o que permite pintar uma textura e ela cair no lugar certo do modelo. Sem um bom UV, qualquer textura fica esticada, repetida ou borrada. No Maya, os alunos vão marcar as costuras (seams), desdobrar com Unfold e arrumar tudo dentro do quadrado UV usando o UV Editor.

A organização do layout é o que torna o trabalho de verdade aproveitável: as ilhas de UV não podem se sobrepor, devem usar bem o espaço do quadrado 0 a 1 e manter uma escala parecida entre si, para que a textura tenha a mesma densidade em todas as partes. É um trabalho de paciência e capricho, parecido com montar um quebra-cabeça que precisa caber numa folha.

Por fim, os alunos usam o Claude como assistente de revisão: descrevem o objeto e o layout que fizeram e pedem uma checagem dos problemas mais comuns de mapeamento (sobreposição, ilhas viradas, escala desigual, costuras em lugar visível) antes de exportar. O Claude não abre o Maya, mas funciona como um colega experiente que faz as perguntas certas e cria uma lista de verificação.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar os painéis e cada clique em tempo real`,
    `Arquivo de exemplo (.mb ou .ma) com um asset simples já modelado, pronto para suavizar e abrir UVs`,
    `Os arquivos dos assets que os alunos modelaram nas Aulas 2 e 3, salvos e prontos para abrir`,
    `Acesso ao Claude (no navegador ou app) para a revisão final do layout de UVs`,
    `Uma textura de teste tipo xadrez (checker) para conferir a escala e o esticamento das UVs`,
    `Folha de checklist impressa com os erros comuns de UV, para o aluno marcar item a item`,
  ],
  conceitosChave: [
    `Normal — a direção para onde a face aponta; é ela que decide como a luz reflete e se a superfície parece lisa ou facetada.`,
    `Soften Edge — comando que suaviza a transição de luz entre faces vizinhas, deixando curvas com aparência arredondada.`,
    `Harden Edge — comando que mantém uma quina nítida e dura, usado em cantos que devem parecer retos e bem definidos.`,
    `UV — as coordenadas planas (em U e V) que dizem em que ponto da textura cada parte do modelo 3D vai cair.`,
    `Seam (costura) — a aresta marcada como corte, onde a casca do modelo se abre para virar um mapa plano.`,
    `UV Shell (ilha) — cada pedaço solto do mapa de UVs depois de aberto; nenhuma ilha pode ficar por cima de outra.`,
    `UV Tile 0 a 1 — o quadrado padrão do UV Editor onde todas as ilhas precisam caber, usando bem o espaço disponível.`,
  ],
  treinamento: `## O que o professor precisa saber

O objetivo de hoje é dar acabamento e abrir UVs. Duas tarefas separadas, mas que andam juntas. A suavização de normais controla como a luz reflete: com facetas duras o modelo parece feito de papelão dobrado; suavizado, parece liso. As UVs são o "molde plano" do objeto, necessário para que qualquer textura caia no lugar certo. Sem UVs boas, texturizar é impossível.

Antes da aula, abra o Maya e localize o menu superior "UV". Na barra de modos, conheça o "UV Editor" (em Windows, "UV Editor", ou pelo menu UV maior). Tenha à mão os comandos "Mesh Display maior Soften Edge" e "Mesh Display maior Harden Edge". No UV Editor, identifique o quadrado branco (o tile de 0 a 1), as ferramentas "Cut", "Unfold" e "Layout". Deixe o arquivo de exemplo aberto e aplique uma textura xadrez de teste no objeto para conferir esticamento.

## Passo a passo da aula (ritmo 10 / 15 / 25 / 10)

Aquecimento (10 min): peça que cada aluno abra o asset das aulas anteriores. No projetor, mostre o mesmo objeto com normais erradas (manchas escuras) e depois suavizado. Pergunte: "qual dos dois parece pronto para um jogo de verdade?" Isso cria a motivação.

Conteúdo novo guiado (15 min): com o objeto selecionado, vá em "Mesh Display maior Soften Edge" e mostre a superfície ficar lisa. Em seguida, selecione as arestas que devem ser quinas vivas (cantos retos), entre no modo de aresta (botão direito maior Edge), selecione-as e use "Mesh Display maior Harden Edge". Depois abra o "UV Editor" (menu "UV maior UV Editor"). Selecione algumas arestas para serem costuras e clique em "Cut" (ou "UV maior Cut UV Edges"). Aplique "Unfold" para desdobrar e "Layout" para arrumar as ilhas dentro do quadrado 0 a 1. Mostre o xadrez ficando quadrado e uniforme.

Mão na massa (25 min): cada aluno repete o fluxo no próprio asset. Lembre a ordem: suavizar normais, marcar quinas com Harden, abrir UV Editor, marcar costuras, Cut, Unfold, Layout. Circule conferindo se as ilhas não estão sobrepostas e se o xadrez está sem esticar. Peça que salvem com "Ctrl + S".

Desafio e compartilhar (10 min): cada aluno descreve o objeto e o layout ao Claude e pede uma checagem. Um exemplo de prompt para escrever no Claude: "Modelei uma caixa de madeira no Maya e abri as UVs em 6 ilhas dentro do tile 0 a 1. Quais problemas comuns de mapeamento eu devo conferir antes de exportar?" O aluno usa a resposta como checklist final.

## Como explicar de forma clara (linguagem para a idade)

Para as normais, use a lanterna: "A normal é para onde a face olha. Se ela aponta para o lado errado, a luz bate errado e o objeto fica com manchas." Para UVs, use a laranja: "Descascar a laranja e abrir a casca na mesa é abrir as UVs. A casca aberta é o mapa onde a gente pinta." Para o layout, fale em quebra-cabeça: "Todas as peças precisam caber na folha (o quadrado), sem nenhuma em cima da outra." O xadrez é o detetive: "Se os quadradinhos esticam, a UV está errada ali."

## Erros comuns e como ajudar

O erro mais comum é ilhas de UV sobrepostas: duas partes do modelo dividem o mesmo lugar na textura e ficam pintadas igual. Mostre que o "Layout" separa as ilhas e peça que conferiram visualmente no UV Editor. Outro erro é esquecer o Harden nas quinas, deixando tudo arredondado demais; lembre que cantos retos precisam de aresta dura. Há quem aplique Soften depois e desfaça o Harden sem perceber: explique a ordem dos comandos. Muitos deixam ilhas com escalas muito diferentes, fazendo a textura ficar nítida numa parte e borrada em outra; o xadrez denuncia isso na hora. Por fim, alguns colocam costuras em lugares bem visíveis do objeto; oriente a esconder as costuras em cantos e partes traseiras.`,
  exercicios: [
    {
      titulo: `Suavizando as normais do meu asset`,
      tipo: `Prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Garanta que cada aluno abra o asset das aulas anteriores. Mostre no projetor a diferença visual entre o objeto com facetas duras e o objeto suavizado antes de eles começarem.`,
      atividade: `Selecione o seu asset inteiro e aplique "Mesh Display maior Soften Edge". Observe a superfície ficar lisa. Em seguida, selecione apenas as arestas dos cantos que devem ser quinas vivas e aplique "Mesh Display maior Harden Edge".`,
      gabarito: `O modelo deve aparecer com superfícies curvas lisas (sem manchas escuras facetadas) e com cantos retos bem definidos onde o aluno aplicou Harden Edge. O sucesso é ver a luz deslizar suave nas curvas e parar nas quinas.`,
    },
    {
      titulo: `Abrindo as UVs com costuras`,
      tipo: `Prática na ferramenta`,
      tempo: `10 minutos`,
      guiaProfessor: `Acompanhe a escolha das costuras. Reforce esconder as costuras em cantos e partes pouco visíveis. Mostre no projetor onde ficam "Cut", "Unfold" e "Layout" dentro do UV Editor.`,
      atividade: `Abra o "UV Editor" pelo menu "UV maior UV Editor". Entre no modo de aresta, selecione as arestas que serão costuras e clique em "Cut". Depois aplique "Unfold" para desdobrar e "Layout" para arrumar as ilhas dentro do quadrado 0 a 1.`,
      gabarito: `O objeto deve estar separado em ilhas (UV shells) dentro do quadrado 0 a 1, todas desdobradas sem dobras estranhas. As costuras devem estar em cantos ou na parte de trás, e não em uma face frontal bem visível.`,
    },
    {
      titulo: `Detetive do xadrez`,
      tipo: `Desafio individual`,
      tempo: `10 minutos`,
      guiaProfessor: `Ajude os alunos a aplicar a textura xadrez de teste no material do objeto. Explique que quadradinhos esticados ou de tamanhos diferentes indicam problemas de escala nas UVs.`,
      atividade: `Aplique a textura xadrez de teste no seu asset e olhe a superfície. Encontre pelo menos um lugar onde os quadradinhos estão esticados ou maiores que nos outros. Ajuste a ilha correspondente no UV Editor para que os quadradinhos fiquem parecidos em todo o modelo.`,
      gabarito: `Depois do ajuste, os quadradinhos do xadrez devem ter tamanho parecido em todas as partes do objeto e formato de quadrado (não retângulo esticado). O aluno consegue apontar qual ilha estava com escala errada e como corrigiu.`,
    },
    {
      titulo: `Caça aos erros em dupla`,
      tipo: `Atividade em dupla`,
      tempo: `12 minutos`,
      guiaProfessor: `Forme duplas e oriente uma crítica gentil e específica. Foque a atenção em ilhas sobrepostas, ilhas viradas e costuras visíveis. Circule ouvindo e ajudando a corrigir.`,
      atividade: `Troque de computador com o colega e olhe o UV Editor dele. Procure três problemas comuns: ilhas sobrepostas (uma em cima da outra), ilhas com escala muito diferente e costuras em lugar bem visível. Anote o que achou e depois cada um corrige o próprio layout.`,
      gabarito: `Cada dupla deve apontar e corrigir pelo menos um problema real. O resultado esperado é o layout final com ilhas sem sobreposição, escalas parecidas e costuras escondidas em cantos ou na traseira do objeto.`,
    },
    {
      titulo: `Revisão final com o Claude`,
      tipo: `Pesquisa guiada com IA`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como descrever o objeto e o layout de forma clara para o Claude. Reforce que a IA é um assistente de revisão: ela cria a lista de verificação, mas quem confere no Maya é o aluno.`,
      atividade: `Descreva ao Claude o seu objeto e como você abriu as UVs e peça uma checagem dos problemas comuns de mapeamento antes de exportar. Um exemplo de prompt: "Modelei um barril de madeira no Maya e abri as UVs em 5 ilhas dentro do tile 0 a 1. Quais problemas de UV eu devo conferir antes de exportar?" Use a resposta como checklist e confira cada item no UV Editor.`,
      gabarito: `Espera-se que o Claude liste itens como: sem ilhas sobrepostas, escalas uniformes (conferidas com xadrez), costuras escondidas, ilhas todas dentro do tile 0 a 1 e normais suavizadas. O aluno deve marcar cada item verificando no Maya e corrigir o que estiver pendente antes de considerar o asset pronto.`,
    },
  ],
};
