import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando para a Impressão",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar o modelo no Maya para deixá-lo com malha fechada, sem buracos e com espessura suficiente, pronto de verdade para virar uma peça impressa em 3D.`,
  descricao: `Modelar um personagem bonito na tela é só metade do caminho. Para que ele saia da impressora 3D como uma peça sólida, a geometria precisa estar limpa por dentro. Nesta aula a turma aprende o que separa um modelo que apenas parece bom de um modelo que realmente imprime: a malha precisa ser fechada (em inglês, watertight, ou seja, à prova de água), sem buracos por onde a água escaparia, sem faces invertidas e com paredes grossas o bastante para a impressora conseguir construir.

A ideia central é que a impressora 3D não enxerga a cor nem a beleza do modelo: ela só entende o volume sólido. Se houver um buraco na malha, a impressora não sabe onde é dentro e onde é fora. Se uma face estiver invertida (com a normal apontando para o lado errado), o fatiador pode interpretar aquela região como vazia. E se uma parede for fina demais, ela some na hora de imprimir ou quebra ao primeiro toque. Por isso o aluno vira detetive da própria geometria, procurando esses três problemas.

Para resolver, o Maya oferece uma ferramenta poderosa chamada Cleanup (Limpeza), dentro do menu Mesh. Ela varre o modelo e encontra automaticamente faces problemáticas: faces com lados a mais (n-gons), faces sem área, geometria que não fecha direito (non-manifold) e furos. O aluno aprende a marcar o que quer procurar, rodar o Cleanup e ver o Maya selecionar exatamente os pontos que precisam de conserto. Também aprende a usar Mesh Display para reverter normais invertidas e a olhar a espessura das paredes.

Ao final, cada estudante deixa o modelo com a geometria sólida e validada, registrando numa checklist o que revisou. Esta aula é a ponte entre criar e imprimir: na Aula 8 o modelo já limpo será finalizado e exportado pronto para a fatia. Aqui o foco é garantir que, por dentro, o modelo seja um sólido de verdade.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e aberto, cada aluno com o próprio modelo das aulas anteriores carregado`,
    `Projetor ou TV para o professor demonstrar os menus Mesh, Mesh Display e a janela do Cleanup na tela grande`,
    `Arquivo de exemplo propositalmente com defeitos (um buraco, uma face invertida e uma parede fina) para a turma praticar o conserto`,
    `Checklist impressa de modelo pronto para impressão (malha fechada, sem buracos, sem faces invertidas, espessura suficiente)`,
    `Impressora 3D por perto, apenas como referência visual, para lembrar o objetivo final da limpeza`,
    `Mouse com botão do meio e scroll para cada aluno, essencial para navegar e selecionar a geometria com precisão`,
  ],
  conceitosChave: [
    `Malha fechada (watertight) — geometria totalmente vedada, como uma garrafa sem furos; se enchesse de água, nada vazaria, e por isso a impressora entende onde é o sólido.`,
    `Buraco (hole) — uma abertura na malha, uma borda solta que deixa o modelo aberto; precisa ser fechada para a impressão dar certo.`,
    `Face invertida (flipped normal) — uma face virada do avesso, com a normal apontando para dentro em vez de para fora; aparece escura ou estranha e confunde o fatiador.`,
    `Normal — a setinha invisível que indica para que lado uma face está apontando; todas devem apontar para fora do modelo.`,
    `Espessura de parede (wall thickness) — a grossura das paredes do modelo; se for fina demais, a impressora não consegue construir e a peça quebra ou desaparece.`,
    `Cleanup (Limpeza) — ferramenta do menu Mesh que varre o modelo e encontra automaticamente faces problemáticas como n-gons, faces sem área e geometria que não fecha.`,
    `Non-manifold — geometria impossível na vida real, como uma aresta compartilhada por mais de duas faces; a impressora não consegue interpretar e precisa ser corrigida.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para dar esta aula, mas pratique antes os três caminhos principais. Primeiro, abra um modelo qualquer e teste o Cleanup: menu Mesh, opção Cleanup, clique no quadradinho de opções ao lado do nome para abrir as configurações. Segundo, aprenda a ver normais: menu Display, Polygons, Face Normals mostra as setinhas; e Mesh Display, Reverse vira uma face de lado. Terceiro, saiba ligar o sombreamento que revela faces invertidas: no menu do painel (viewport) vá em Lighting e marque Two Sided Lighting desligado, assim faces viradas ficam pretas e fáceis de ver. Tenha o arquivo de exemplo com defeitos já aberto para demonstrar. Lembre: malha fechada, sem buracos, sem faces invertidas e parede grossa o suficiente são os quatro objetivos da aula.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): retome a Aula 6. Pergunte o que a turma adicionou de detalhes no modelo. Mostre no projetor a impressora 3D e diga: hoje vamos preparar o modelo por dentro para ele virar peça de verdade. Mostre uma peça impressa com defeito (ou uma foto) para ilustrar o que acontece quando a malha não está limpa.

Conteúdo novo guiado (15 min): com o arquivo de exemplo aberto, desligue o Two Sided Lighting (menu do painel, Lighting) e mostre a face invertida ficando preta. Selecione essa face, vá em Mesh Display, Reverse e ela volta ao normal. Depois abra Mesh, Cleanup (clique no quadradinho de opções). Marque Faces with more than 4 sides, Faces with zero geometry area e Nonmanifold geometry. Clique em Cleanup e mostre o Maya selecionando os problemas. Explique cada caixinha apontando na tela.

Mão na massa (25 min): cada aluno abre o próprio modelo. Passo 1: desligar Two Sided Lighting e girar a câmera procurando faces pretas (invertidas); ao achar, selecionar e usar Mesh Display, Reverse. Passo 2: rodar Mesh, Cleanup com as opções marcadas e conferir o que ficou selecionado. Passo 3: olhar paredes muito finas e engrossar empurrando vértices ou usando o modelo mais cheio. Caminhe entre as duplas, ajude a girar a câmera e a ler as seleções. Cada aluno marca a checklist conforme valida cada item.

Desafio e compartilhar (10 min): cada aluno mostra ao colega ao lado um problema que encontrou e como resolveu. Quem deixou os quatro itens da checklist marcados conta como fez.

## Como explicar de forma clara (linguagem para a idade)

Use a imagem da garrafa: um modelo pronto para imprimir é como uma garrafa sem furos; se você enchesse de água, nada vazaria. Um buraco na malha é como um furo na garrafa, a água (e a impressora) se perde. Diga que cada face tem um lado certo de fora, como uma camiseta: face invertida é a camiseta do avesso, com a etiqueta para fora. A parede fina é como uma folha de papel tentando ficar de pé sozinha, ela dobra; já uma parede grossa é como uma parede de tijolos, fica firme. E o Cleanup é o detetive que aponta com a lupa onde estão os problemas escondidos.

## Erros comuns e como ajudar

O erro mais comum é o aluno rodar o Cleanup sem marcar nenhuma opção e achar que nada aconteceu; mostre que é preciso marcar as caixinhas antes de clicar. Outro é confundir face preta de iluminação com face invertida; por isso ligue o Two Sided Lighting para comparar e desligue só na hora de caçar. Muitos selecionam o objeto inteiro em vez de uma face só na hora de reverter; ensine a entrar no modo Face (segurar botão direito sobre o objeto, escolher Face). Há quem queira deletar a face com buraco em vez de fechar; explique que apagar abre mais a malha. Se um aluno travar, peça que gire a câmera devagar e olhe por dentro do modelo procurando vazios. Reforce sempre salvar o arquivo antes de rodar o Cleanup, pois ele altera a geometria.`,
  exercicios: [
    {
      titulo: `Caça à Face Invertida`,
      tipo: `prática na ferramenta`,
      tempo: `8 minutos`,
      guiaProfessor: `Peça que cada aluno desligue o Two Sided Lighting (menu do painel, Lighting) e gire a câmera ao redor do próprio modelo. As faces invertidas aparecem pretas. Caminhe ajudando a entrar no modo Face e a reverter.`,
      atividade: `No seu modelo, desligue o Two Sided Lighting e gire a câmera procurando faces pretas. Ao achar uma, entre no modo Face (botão direito sobre o objeto, Face), selecione a face preta e use Mesh Display, Reverse para virá-la para o lado certo.`,
      gabarito: `O aluno deve identificar pelo menos uma face escura como invertida, selecioná-la no modo Face e aplicar Mesh Display, Reverse, fazendo a face voltar à cor normal. Se o modelo não tiver faces invertidas, a resposta correta é confirmar que nenhuma face ficou preta, ou seja, todas as normais já apontam para fora.`,
    },
    {
      titulo: `Rodando o Cleanup`,
      tipo: `desafio`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que cada aluno salve o arquivo antes. Mostre de novo no projetor como abrir as opções do Cleanup (quadradinho ao lado do nome) e marcar as caixas certas. Desafie a turma a deixar o Cleanup sem encontrar nenhum problema.`,
      atividade: `Salve seu arquivo. Abra Mesh, Cleanup pelo quadradinho de opções, marque Faces with more than 4 sides, Faces with zero geometry area e Nonmanifold geometry e clique em Cleanup. Veja o que ficou selecionado e tente corrigir até o Cleanup não encontrar mais nada.`,
      gabarito: `Caminho correto: salvar, abrir o quadradinho de opções do Cleanup no menu Mesh, marcar as três caixas indicadas e clicar em Cleanup. O aluno acerta quando consegue rodar a ferramenta, lê quais faces foram selecionadas como problema e, ao rodar de novo após corrigir, o Maya não seleciona mais nenhuma face. Modelo limpo é o que passa no Cleanup sem seleção sobrando.`,
    },
    {
      titulo: `Detetives da Malha em Dupla`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e peça que troquem de computador. Cada aluno vira inspetor do modelo do colega, procurando buracos, faces pretas e paredes finas. Oriente a anotar os achados antes de devolver. Confira as listas com cada dupla.`,
      atividade: `Em dupla, troquem de lugar e inspecionem o modelo um do outro. Procurem e anotem: existe algum buraco na malha? Alguma face aparece preta (invertida)? Alguma parede parece fina demais? Devolvam a lista de achados ao dono do modelo.`,
      gabarito: `A dupla deve entregar uma lista com pelo menos os três itens verificados: presença ou ausência de buracos, de faces invertidas e de paredes finas. Considera-se correto quando os inspetores usam os métodos certos (girar a câmera, desligar Two Sided Lighting, olhar por dentro) e descrevem com clareza o que encontraram, mesmo que o veredito seja modelo sem problemas.`,
    },
    {
      titulo: `Roda de Conversa: Por que Fechar a Malha?`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Sente a turma em roda. Conduza com perguntas abertas sobre o porquê de a malha precisar estar fechada. Garanta que todos falem ao menos uma frase. Valorize comparações criativas, não há resposta única.`,
      atividade: `Em roda, cada um responde: por que a impressora 3D precisa de uma malha fechada, sem buracos? O que aconteceria com a peça se ela fosse impressa com um furo ou com uma parede muito fina? Use uma comparação do dia a dia.`,
      gabarito: `Não há resposta única. Espera-se que o aluno explique que a impressora só entende volume sólido e, sem malha fechada, não sabe onde é dentro e onde é fora, podendo falhar ou imprimir errado. Boas respostas citam que um buraco faz a água (e a impressão) vazar, como numa garrafa furada, e que parede fina quebra ou some. O professor confirma o aprendizado quando o aluno liga o conceito de watertight ao resultado físico da peça.`,
    },
    {
      titulo: `Checklist do Modelo Pronto`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Atividade de fechamento. Cada aluno percorre a checklist nos quatro itens e faz os ajustes finais no próprio modelo até poder marcar todos. Oriente a salvar ao final. Recolha as checklists para retomar na Aula 8.`,
      atividade: `Pegue a checklist e valide seu modelo nos quatro itens: 1) malha fechada, sem bordas soltas; 2) nenhuma face invertida (nenhuma preta); 3) nenhum buraco visível ao girar a câmera; 4) paredes com espessura suficiente, nada fino demais. Conserte o que faltar (Reverse, Cleanup, engrossar paredes) e marque cada item. Salve o arquivo ao terminar.`,
      gabarito: `Checklist completa exige os quatro itens validados: malha fechada sem bordas soltas, todas as normais apontando para fora (nenhuma face preta), ausência de buracos ao girar a câmera e paredes com espessura suficiente. Considera-se correto quando o aluno usa as ferramentas certas para corrigir o que faltava (Mesh Display, Reverse para faces invertidas, Mesh, Cleanup para problemas de geometria, ajuste de vértices para engrossar paredes) e salva o arquivo com os quatro itens marcados. Um modelo com todos os itens em ordem está pronto para a etapa de exportação da Aula 8.`,
    },
  ],
};
