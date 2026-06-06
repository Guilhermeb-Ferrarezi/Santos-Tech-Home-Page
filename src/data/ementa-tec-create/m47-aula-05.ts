import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Entendendo a Otimização para Jogos",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entender por que os assets de um jogo precisam ser leves, analisar a malha de um modelo no Maya para contar e enxergar os polígonos, identificar a geometria desnecessária e planejar uma versão otimizada (low-poly) que rode bem na Unreal Engine.`,
  descricao: `Nesta aula o aluno deixa de pensar só na beleza do modelo e passa a pensar como um profissional de jogos: além de bonito, o asset precisa ser leve. Nas aulas anteriores deste mês a turma planejou, modelou com polígonos e adicionou detalhes a um novo conjunto de itens no Maya. Esses modelos costumam acumular muita geometria, e agora chega o momento de olhar para eles com olhos críticos e perguntar: tudo isso é mesmo necessário para o jogo?

A ideia central é a contagem de polígonos (polycount). Cada triângulo que aparece na tela é uma conta que a placa de vídeo precisa fazer, muitas vezes por segundo. Quando o cenário tem dezenas ou centenas de objetos, esses números somam rápido. Um modelo pesado demais derruba os quadros por segundo (FPS), faz o jogo travar e cansa o computador. Por isso, no fluxo de produção, é comum criar uma versão high-poly cheia de detalhes e depois uma versão low-poly, mais leve, que é a que de fato vai para o motor de jogo.

Importante deixar claro que esta aula é de análise e planejamento, não de modelagem pesada. O aluno vai usar o painel Heads Up Display do Maya para mostrar o número de polígonos na tela, vai investigar a malha com o Outliner e o Hypershade, e vai aprender a enxergar onde existe geometria escondida ou inútil: faces internas que ninguém vê, arestas que não mudam a silhueta, partes traseiras de objetos encostados na parede. Tudo isso é gordura que pode sair sem o jogador perceber.

Ao final, cada aluno terá um pequeno plano de otimização do próprio asset: quantos polígonos ele tem hoje, qual meta de polígonos faz sentido para o jogo e uma lista do que pode ser removido ou simplificado. Esse plano é a ponte para a Aula 6, quando a turma de fato reduz a malha e exporta o FBX. Aqui o aluno desenvolve o olhar técnico que separa quem só modela de quem produz para jogos de verdade.`,
  materiais: [
    `Computadores com o Autodesk Maya instalado e aberto, um por aluno`,
    `Projetor ou TV para o professor demonstrar a interface do Maya em tempo real`,
    `Arquivo de exemplo (.mb ou .ma) com um asset pesado, cheio de polígonos, para a turma analisar`,
    `Arquivo de exemplo com a mesma peça em versão low-poly, para comparar lado a lado`,
    `Imagens de referência mostrando wireframe high-poly e low-poly do mesmo objeto`,
    `Folha impressa com uma tabela simples de metas de polígonos por tipo de asset (item pequeno, personagem, cenário)`,
    `Caderno ou folha para o aluno anotar o plano de otimização do próprio modelo`,
  ],
  conceitosChave: [
    `Polígono — a face plana que forma a superfície de um modelo 3D; o motor de jogo trabalha com triângulos, e juntos eles desenham o objeto.`,
    `Polycount (contagem de polígonos) — o número total de polígonos ou triângulos de um modelo; quanto maior, mais pesado para o computador desenhar.`,
    `High-poly — versão do modelo com muitos polígonos e muito detalhe, usada como referência ou para gerar texturas.`,
    `Low-poly — versão leve do mesmo modelo, com poucos polígonos, que vai de fato para o jogo.`,
    `FPS (quadros por segundo) — quantas imagens o jogo desenha a cada segundo; quanto mais alto, mais fluido fica o jogo.`,
    `Silhueta — o contorno geral do objeto; ela define a forma que o jogador reconhece, e os polígonos que não mudam a silhueta costumam ser dispensáveis.`,
    `Geometria desnecessária — faces e arestas que não aparecem para o jogador ou que não afetam a forma, como o fundo de um objeto encostado na parede.`,
  ],
  treinamento: `## O que o professor precisa saber

O Maya é o programa de modelagem 3D que a turma usa este mês. Você não precisa ser especialista; precisa saber mostrar onde ver o número de polígonos e como olhar a malha. Três recursos resolvem a aula. Primeiro, o contador de polígonos: no menu superior, abra Display, depois Heads Up Display e marque Poly Count. Vai aparecer no canto da tela uma tabela com Verts, Edges, Faces e Tris (vértices, arestas, faces e triângulos). É o número de Tris que mais importa para jogos. Segundo, o modo wireframe (aramado): aperte a tecla 4 para ver só as linhas da malha e a tecla 5 para voltar ao modo sólido; a tecla 6 mostra com textura. Terceiro, a seleção por componentes: clique com o botão direito sobre o objeto e escolha Face ou Edge para inspecionar partes da malha. Antes da aula, abra o arquivo de exemplo pesado e confirme que o Poly Count aparece. Tenha também a versão low-poly aberta numa segunda janela ou guia.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): no projetor, mostre dois vídeos curtos ou dois prints, um de jogo rodando liso e outro travando. Pergunte: por que um trava? Conduza até a ideia de que cada polígono e cada objeto custa trabalho da placa de vídeo. Abra o asset pesado e o low-poly lado a lado e pergunte qual deles é melhor para o jogo, e por quê.

Conteúdo novo guiado (15 min): com o Maya no projetor, ative o contador. Vá em Display, depois Heads Up Display, e clique em Poly Count. Mostre o número de Tris subindo conforme seleciona objetos. Aperte 4 para entrar no wireframe e mostre as linhas da malha; volte com 5. Selecione o objeto, clique com o botão direito, escolha Face e mostre faces escondidas dentro do modelo. Por fim, abra a versão low-poly e compare os números: mesma silhueta, muito menos polígonos.

Mão na massa (25 min): cada aluno abre o próprio asset feito nas aulas anteriores. Tarefa um: anotar o polycount atual (Tris). Tarefa dois: entrar no wireframe e procurar geometria desnecessária, faces internas, partes traseiras, arestas que não mudam a silhueta. Tarefa três: escrever no caderno um plano de otimização com três itens, o número atual de Tris, a meta de Tris e a lista do que dá para remover. Circule conferindo se cada aluno encontrou o contador e se a meta é realista.

Desafio e compartilhar (10 min): peça que cada aluno defina uma meta de redução em porcentagem (por exemplo, cair 40 por cento dos triângulos) e justifique. Dois ou três apresentam o plano e dizem qual será a primeira parte a sumir.

## Como explicar de forma clara (linguagem para a idade)

Use comparações de mochila e bagagem: o jogo carrega tudo nas costas a cada segundo, então quanto mais leve, mais rápido ele corre. Diga que polígono é como peça de Lego; com poucas peças bem colocadas dá para fazer uma forma reconhecível, e amontoar peças escondidas só pesa. Para silhueta, peça que apertem os olhos e olhem só o contorno: se a forma continua sendo reconhecida, os detalhes internos podem ir embora. Evite jargão; troque otimizar por deixar mais leve sem estragar a aparência.

## Erros comuns e como ajudar

O erro mais comum é olhar Faces em vez de Tris; lembre que o motor conta triângulos, então a linha Tris é a que vale. Outro é querer apagar geometria já nesta aula; reforce que hoje é só planejar, a redução acontece na Aula 6. Alguns confundem leve com feio e cortam de mais; mostre o exemplo low-poly que mantém a silhueta. Muitos não acham o contador; tenha o caminho Display, Heads Up Display, Poly Count escrito na lousa. Há quem fique perdido no wireframe achando que quebrou o modelo; explique que as teclas 4, 5 e 6 só mudam a forma de visualizar, não apagam nada.`,
  exercicios: [
    {
      titulo: `Ligando o contador de polígonos`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Garanta que todos abram o asset de exemplo. Escreva na lousa o caminho Display, Heads Up Display, Poly Count. Verifique se a tabela apareceu no canto da tela de cada aluno.`,
      atividade: `No Maya, abra o arquivo de exemplo pesado e ative o contador de polígonos pelo menu Display, depois Heads Up Display, depois Poly Count. Selecione o objeto e anote o número de Tris (triângulos) que aparece na tela.`,
      gabarito: `O aluno acessa Display, Heads Up Display, Poly Count, vê a tabela com Verts, Edges, Faces e Tris no canto da tela, seleciona o objeto e anota o valor da linha Tris. Resultado esperado: o número de triângulos do asset registrado no caderno, mostrando que o aluno sabe onde ler o polycount.`,
    },
    {
      titulo: `Olhando a malha por dentro`,
      tipo: `investigação`,
      tempo: `8 minutos`,
      guiaProfessor: `Relembre as teclas 4 (wireframe), 5 (sólido) e 6 (textura). Mostre como clicar com o botão direito e escolher Face. Circule ajudando quem se assustar com o aramado.`,
      atividade: `Com o asset aberto, aperte a tecla 4 para entrar no modo wireframe e observe as linhas da malha. Depois clique com o botão direito no objeto, escolha Face e procure pelo menos um lugar com geometria desnecessária, como faces escondidas, fundo encostado ou detalhe que o jogador nunca vê.`,
      gabarito: `O aluno entra no wireframe com a tecla 4, alterna para o modo Face pelo menu do botão direito e aponta ao menos uma região com geometria inútil, por exemplo a face traseira de um objeto ou faces internas fechadas. Resultado esperado: o aluno descreve em voz alta ou por escrito onde está a gordura da malha.`,
    },
    {
      titulo: `High-poly contra low-poly`,
      tipo: `em dupla`,
      tempo: `10 minutos`,
      guiaProfessor: `Forme duplas e abra o exemplo pesado e o exemplo low-poly lado a lado. Oriente a comparar os números de Tris e a silhueta dos dois. Reforce que a forma reconhecível é a silhueta.`,
      atividade: `Em dupla, comparem o asset high-poly e a versão low-poly do mesmo objeto. Anotem o polycount (Tris) de cada um, calculem mais ou menos quantos polígonos foram economizados e discutam: a silhueta mudou? O jogador notaria a diferença em movimento?`,
      gabarito: `A dupla registra os dois valores de Tris, percebe que o low-poly tem bem menos triângulos e conclui que a silhueta permanece reconhecível. Resultado esperado: a constatação de que é possível cortar muitos polígonos mantendo a forma, e que isso deixa o jogo mais leve sem o jogador perceber.`,
    },
    {
      titulo: `Tabela de metas de polígonos`,
      tipo: `roda de conversa`,
      tempo: `8 minutos`,
      guiaProfessor: `Use a folha impressa com metas por tipo de asset. Conduza a roda com perguntas abertas e ajude a turma a perceber que um item pequeno não precisa do mesmo orçamento de um personagem.`,
      atividade: `Em roda, olhem a tabela de metas de polígonos por tipo de asset (item pequeno, personagem, cenário). Cada aluno diz em qual categoria o próprio modelo se encaixa e qual seria uma meta de Tris razoável para ele rodar bem na Unreal Engine.`,
      gabarito: `Cada aluno classifica o próprio asset e propõe uma meta de polígonos coerente com a categoria, por exemplo poucos milhares de Tris para um item pequeno. Resultado esperado: respostas que mostram entendimento de que cada tipo de objeto tem um orçamento diferente de polígonos no jogo.`,
    },
    {
      titulo: `Plano de otimização do meu asset`,
      tipo: `projeto curto`,
      tempo: `12 minutos`,
      guiaProfessor: `Este é o exercício mais completo e prepara a Aula 6. Verifique se cada plano tem o número atual, a meta e a lista do que sai. Confira se a meta é realista e se o aluno não pretende apagar nada ainda hoje.`,
      atividade: `Abra o seu próprio asset das aulas anteriores e escreva um plano de otimização com três partes: 1) o polycount atual em Tris; 2) a meta de Tris que você quer atingir; 3) a lista do que pode ser removido ou simplificado (faces escondidas, partes traseiras, detalhes que não mudam a silhueta). Guarde esse plano para usar na próxima aula.`,
      gabarito: `O aluno entrega um plano com o número atual de Tris, uma meta menor e realista, e uma lista de pelo menos duas a três coisas que podem sair sem estragar a silhueta. Exemplo de plano: asset atual com 12000 Tris; meta de 7000 Tris; remover as faces internas do corpo, apagar a base traseira que fica contra a parede e simplificar as arestas extras da alça que não mudam o contorno. Resultado esperado: um documento curto e claro, pronto para guiar a redução de polígonos e a exportação do FBX na Aula 6.`,
    },
  ],
};
