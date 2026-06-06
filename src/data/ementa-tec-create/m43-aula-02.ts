import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Modelando Cenário e Itens",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Transformar o blockout do cenário em malhas detalhadas no Blender, usando extrusão, bisel e modificadores para esculpir o ambiente e modelar os itens com topologia limpa e pronta para o jogo.`,
  descricao: `Na aula anterior a turma planejou o cenário e montou um blockout, aquele rascunho 3D feito só com caixas e cilindros simples que define onde cada coisa fica. Agora chega a parte mais divertida: dar forma de verdade a essas caixas. Vamos pegar o volume bruto e transformá-lo em paredes com espessura, móveis com cantos suaves e itens reconhecíveis. O segredo desta aula não é fazer muita coisa, e sim fazer cada peça com cuidado, mantendo a malha organizada.

Para isso o aluno vai dominar três ferramentas centrais do Modo de Edição do Blender: a extrusão (extrude), que puxa faces para criar volume novo a partir do que já existe; o bisel (bevel), que arredonda ou chanfra arestas para o objeto parecer menos artificial; e os modificadores, especialmente o Mirror, que espelha metade do modelo para ganhar tempo, e o Subdivision Surface, que suaviza a forma. Esses recursos são o coração da modelagem 3D usada por estúdios de games no mundo todo.

Junto das ferramentas vem um conceito que vai acompanhar o aluno até o fim da trilha: topologia limpa. Topologia é o jeito como as faces e arestas estão arrumadas na superfície do modelo. Uma topologia limpa usa principalmente quadrados (quads), evita faces com muitos lados e segue o formato do objeto. Isso importa porque o mesmo modelo precisará ser texturizado, otimizado e exportado nas próximas aulas; uma malha bagunçada dá problema lá na frente, dentro da Unity ou da Unreal.

O entregável do mês é um conjunto de novos assets 3D, e esta aula produz as primeiras peças sólidas dessa coleção. Ao final, cada aluno terá pelo menos uma parte do cenário e um item modelados com volume e cantos trabalhados, salvos no arquivo .blend. O aluno pode usar o Claude como assistente para tirar dúvidas sobre atalhos ou sobre quando usar cada modificador, sempre conferindo o resultado na própria tela.`,
  materiais: [
    `Computadores com o Blender instalado e aberto, um por aluno, de preferência com mouse de três botões`,
    `Projetor ou TV para o professor demonstrar cada passo no Modo de Edição do Blender`,
    `Arquivo .blend de exemplo com o blockout do cenário pronto da aula anterior`,
    `Arquivo .blend de referência mostrando o mesmo cenário já modelado, para a turma ver o objetivo`,
    `Imagens de referência (concept art) do cenário e dos itens projetadas na parede`,
    `Pasta compartilhada onde os alunos salvam e versionam os arquivos .blend`,
    `Folha impressa com os atalhos do dia: E (extrude), Ctrl+B (bevel), Tab (alternar modo)`,
  ],
  conceitosChave: [
    `Modo de Edição — modo do Blender onde editamos vértices, arestas e faces da malha; entra e sai com a tecla Tab.`,
    `Extrusão (Extrude) — puxar uma face ou aresta para fora criando volume novo a partir do que já existe; atalho E.`,
    `Bisel (Bevel) — arredondar ou chanfrar uma aresta para o canto ficar mais suave e realista; atalho Ctrl+B.`,
    `Modificador — efeito não destrutivo aplicado ao objeto inteiro, como Mirror (espelhar) e Subdivision Surface (suavizar).`,
    `Topologia — a organização das faces e arestas na superfície do modelo; topologia limpa usa quads e segue a forma.`,
    `Quad — face de quatro lados; é a face preferida em modelagem para games porque deforma e texturiza melhor.`,
    `Loop cut — corte que adiciona um anel de arestas no modelo para criar mais detalhe ou controlar a forma; atalho Ctrl+R.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser modelador profissional para conduzir esta aula. O essencial é entender a diferença entre os dois modos do Blender. No Modo de Objeto (Object Mode) movemos e organizamos objetos inteiros; no Modo de Edição (Edit Mode) mexemos nos vértices, arestas e faces de um objeto. Alterna-se entre eles com a tecla Tab, com o objeto selecionado. Dentro do Modo de Edição existem três formas de seleção no topo da tela: vértice, aresta e face (atalhos 1, 2 e 3).

Antes da aula, abra o arquivo de blockout, entre no Modo de Edição de uma caixa e teste os três atalhos do dia: E para extrudar uma face, Ctrl+B para biselar uma aresta (role o mouse para ver mais segmentos) e Ctrl+R para um loop cut. Conheça também os modificadores na aba da chave inglesa (Modifier Properties), em especial o Mirror e o Subdivision Surface. Deixe na tela o arquivo de referência já modelado, para a turma comparar com o que vai produzir.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): abra o blockout no projetor e ao lado o arquivo de referência já modelado. Pergunte: o que falta para a caixa virar uma parede de verdade? Conduza até as respostas espessura, cantos e detalhe. Reveja com a turma como entrar e sair do Modo de Edição com Tab e como alternar entre vértice, aresta e face com 1, 2 e 3.

Conteúdo novo guiado (15 min): selecione uma caixa do blockout e aperte Tab para entrar no Modo de Edição. Selecione uma face (modo face, tecla 3), aperte E para extrudar e arraste para criar volume; clique para confirmar. Selecione uma aresta (tecla 2), aperte Ctrl+B e arraste para biselar; role a roda do mouse para aumentar os segmentos e deixar o canto mais redondo. Mostre um loop cut com Ctrl+R passando o mouse sobre a malha. Por fim, com o objeto selecionado, vá na aba do modificador (ícone da chave inglesa), clique em Add Modifier, escolha Mirror e depois mostre também o Subdivision Surface, explicando que são efeitos reversíveis.

Mão na massa (25 min): cada aluno escolhe uma peça do cenário e um item. Tarefas: dar espessura a uma parede com E, biselar pelo menos quatro arestas com Ctrl+B e aplicar um modificador (Mirror ou Subdivision Surface). Reforce salvar com Ctrl+S a cada poucos minutos. Circule conferindo a topologia: pedir que evitem faces de muitos lados e prefiram quads. Quem terminar parte uma para um segundo item.

Desafio e compartilhar (10 min): proponha modelar um detalhe extra com um único loop cut bem colocado (Ctrl+R) que melhore a silhueta do item. Depois, cada aluno gira a câmera (orbitar com o botão do meio do mouse) e mostra ao colega ao lado a peça e um canto biselado. Termine perguntando quando usar bisel e quando usar Subdivision Surface.

## Como explicar de forma clara (linguagem para a idade)

Use comparações do dia a dia. Extrudar é como puxar massinha de modelar: você agarra uma parte e estica para criar mais material. Biselar é lixar o canto de uma mesa para não machucar: o canto vivo vira um canto suave. Modificador é como um filtro de foto que dá para ligar e desligar sem estragar a imagem original. Topologia limpa é como arrumar os ladrilhos de uma parede em fileiras retas, e não jogados de qualquer jeito; quando está arrumado, fica fácil consertar depois. Sempre nomeie a ferramenta, mostre onde ela fica e só depois explique o atalho.

## Erros comuns e como ajudar

O erro mais comum é esquecer de entrar no Modo de Edição e tentar extrudar no Modo de Objeto; lembre o aluno de apertar Tab primeiro. Outro clássico é extrudar e mover sem confirmar, deixando uma face dobrada no mesmo lugar (faces duplicadas); ensine a apertar Esc se errar e a usar Merge by Distance para limpar. No bisel, muitos puxam longe demais e deformam a peça; oriente movimentos pequenos e o uso da roda do mouse para os segmentos. Alguns criam faces de muitos lados (n-gons) que sujam a topologia; mostre como dividir em quads. Por fim, há quem esqueça de salvar: mantenha o hábito do Ctrl+S constante e do nome de arquivo organizado na pasta da turma.`,
  exercicios: [
    {
      titulo: `Entrar no Modo de Edição e extrudar uma face`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Conduza com o projetor. Garanta que cada aluno aperte Tab com o objeto selecionado antes de extrudar. Repita os atalhos em voz alta enquanto eles clicam e confirme que ninguém ficou no Modo de Objeto.`,
      atividade: `Selecione uma caixa do blockout, aperte Tab para entrar no Modo de Edição, mude para seleção de face (tecla 3), selecione uma face, aperte E e arraste para criar volume novo. Clique para confirmar e salve com Ctrl+S.`,
      gabarito: `O aluno deve ter uma face extrudada criando volume visível, ainda no Modo de Edição. Caminho esperado: objeto selecionado > Tab > tecla 3 > clicar a face > E > arrastar > clique esquerdo para confirmar > Ctrl+S. Se a face ficou dobrada no lugar, faltou mover após o E.`,
    },
    {
      titulo: `Biselar quatro arestas de um item`,
      tipo: `desafio`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre uma vez o Ctrl+B no projetor e role a roda do mouse para revelar os segmentos. Circule conferindo que os movimentos são pequenos para não deformar a peça. Reforce a seleção de aresta com a tecla 2.`,
      atividade: `Em um item do seu cenário, entre no Modo de Edição, mude para seleção de aresta (tecla 2) e bisele pelo menos quatro arestas com Ctrl+B. Em uma delas, role a roda do mouse para deixar o canto mais redondo com mais segmentos.`,
      gabarito: `O item deve apresentar pelo menos quatro arestas biseladas, com cantos suaves em vez de vivos, e ao menos um canto com vários segmentos. Caminho esperado: Tab > tecla 2 > selecionar aresta > Ctrl+B > arrastar pouco > rolar a roda para mais segmentos > clique para confirmar.`,
    },
    {
      titulo: `Aplicar o modificador Mirror`,
      tipo: `em dupla`,
      tempo: `8 minutos`,
      guiaProfessor: `Forme duplas. Um aluno aplica o Mirror enquanto o outro confere o eixo de espelhamento e se o resultado ficou simétrico; depois trocam. Explique que o Mirror modela metade e espelha a outra automaticamente, economizando tempo.`,
      atividade: `Em dupla, escolha um item simétrico (uma porta, uma janela ou uma mesa). No Modo de Objeto, abra a aba do modificador (ícone da chave inglesa), clique em Add Modifier, escolha Mirror e ajuste o eixo (X, Y ou Z) até a peça ficar simétrica. Depois troque de lugar com o colega.`,
      gabarito: `O item deve aparecer espelhado e simétrico após o modificador Mirror. Caminho esperado: objeto selecionado > aba Modifier Properties (chave inglesa) > Add Modifier > Mirror > marcar o eixo correto (geralmente X). Se não espelhou, o eixo escolhido não corresponde à orientação da peça; basta trocar o eixo.`,
    },
    {
      titulo: `Loop cut para controlar a forma`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Demonstre o Ctrl+R passando o mouse sobre a malha para ver a linha amarela do corte aparecer. Mostre que o primeiro clique define o corte e o segundo (ou clique direito) o deixa no centro. Verifique se o corte segue o sentido útil da peça.`,
      atividade: `Em uma parede ou objeto do cenário, no Modo de Edição, aperte Ctrl+R e passe o mouse até aparecer a linha do loop cut no sentido que você quer. Clique uma vez para criar o corte e clique direito para deixá-lo no centro. Use esse corte para puxar e criar um detalhe na forma.`,
      gabarito: `A malha deve ganhar um novo anel de arestas (loop) no sentido escolhido, usado para criar um detalhe. Caminho esperado: Tab > Ctrl+R > mover o mouse até a linha amarela aparecer no sentido certo > clique esquerdo > clique direito para centralizar. Mais cortes geram mais detalhe; um corte basta para o exercício.`,
    },
    {
      titulo: `Mini projeto: peça de cenário e item com topologia limpa`,
      tipo: `projeto curto`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe os alunos trabalharem sozinhos e circule conferindo a topologia: peça que evitem n-gons e prefiram quads. Ao final, peça que todos salvem com Ctrl+S e orbitem a câmera (botão do meio do mouse) para mostrar a peça ao colega.`,
      atividade: `Modele uma peça do cenário com espessura (E) e ao menos quatro arestas biseladas (Ctrl+B), e um item usando pelo menos um modificador (Mirror ou Subdivision Surface). Mantenha a malha em quads, evitando faces de muitos lados. Salve o arquivo .blend ao terminar.`,
      gabarito: `O arquivo .blend deve conter uma peça de cenário com volume e cantos biselados e um item com ao menos um modificador aplicado, ambos com topologia em quads e sem n-gons evidentes. Espera-se uso correto de E para volume, Ctrl+B para os cantos e a aba Modifier Properties para o modificador. A peça deve ficar reconhecível e organizada para uso posterior no jogo.`,
    },
  ],
};
