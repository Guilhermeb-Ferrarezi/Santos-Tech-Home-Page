import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Criando Mais um Asset",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Modelar do zero, com mais autonomia e rapidez, um segundo asset 3D próprio no Blender, aplicando tudo o que a criança já aprendeu sobre formas, cores e proporção para enriquecer a sua coleção pessoal de modelos.`,
  descricao: `Esta é a aula da independência! Ao longo do mês, cada criança aprendeu a planejar um objeto, montar as partes no Blender, pintar com cores, usar materiais brilhantes e foscos, ajustar o tamanho de cada peça e dar o acabamento final. Tudo isso resultou no primeiro asset do mês, feito com bastante ajuda do professor, passo a passo. Agora chegou a hora de fazer de novo — mas sozinho (ou quase). O objetivo é que a criança crie um segundo asset 3D próprio, do começo ao fim, com mais confiança e menos paradas para perguntar "e agora?".

Um "asset" é uma peça pronta que pode entrar num jogo: uma fruta, uma árvore, um baú, uma poção, uma placa, um cogumelo. Quando temos vários assets guardados, montamos uma coleção, e essa coleção é o material de construção dos cenários do Roblox que virão mais para a frente na trilha. Por isso, fazer um segundo asset não é repetição à toa: é encher a caixa de peças do nosso jogo e, ao mesmo tempo, treinar a memória dos passos até eles virarem automáticos. Quando a criança modela pela segunda vez, ela percebe que já sabe o caminho — e isso dá um orgulho enorme.

O professor muda de papel nesta aula. Em vez de mostrar cada clique no projetor o tempo todo, ele vira um "ajudante de plantão": deixa as crianças tentarem primeiro, observa quem trava e dá uma mãozinha só onde precisa. A demonstração inicial é rápida, só para relembrar o ciclo completo (planejar, adicionar formas, ajustar proporção, pintar e dar material). Depois, o tempo é das crianças. Quem terminar rápido pode começar um terceiro asset ou caprichar nos detalhes do segundo.

A grande mensagem do dia é: "Eu já sei fazer isso." A criança sai da aula percebendo que aprendeu uma habilidade de verdade, que ela mesma consegue criar modelos 3D novos quando quiser. Esse sentimento de autonomia é mais importante do que a perfeição do modelo. Um asset simples e bem-feito, criado de forma independente, vale muito mais do que um objeto complicado que dependeu do professor o tempo inteiro.`,
  materiais: [
    `Computadores com o Blender já aberto em um arquivo novo para cada criança`,
    `Projetor ou TV grande no computador do professor para a revisão rápida do início`,
    `Os primeiros assets do mês, já salvos, abertos para servir de exemplo e inspiração`,
    `Folhas de papel e lápis de cor para o planejamento rápido do novo asset`,
    `Cartaz na parede com o ciclo de criação: planejar, montar, ajustar tamanho, pintar, dar material`,
    `Lista de teclas no quadro: G (mover), R (girar), S (tamanho), Tab (modo de edição), Add (adicionar forma)`,
    `Adesivos de "Criador Independente" para premiar quem fizer o segundo asset com autonomia`,
  ],
  conceitosChave: [
    `Asset — uma peça 3D pronta que pode entrar num jogo, como uma fruta, uma árvore ou um baú.`,
    `Coleção — o conjunto de vários assets que a gente vai guardando para usar nos jogos depois.`,
    `Autonomia — fazer sozinho, sem precisar perguntar cada passo, porque a gente já aprendeu o caminho.`,
    `Ciclo de criação — a ordem dos passos: planejar, montar as formas, ajustar o tamanho, pintar e dar material.`,
    `Proporção — o tamanho certo de cada parte em relação às outras, para o objeto ficar bonito e crível.`,
    `Material — o jeito da superfície parecer brilhante (como vidro) ou fosca (como madeira) no Blender.`,
    `Revisão — relembrar rapidinho o que já aprendemos antes de começar a criar de novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Nesta aula você não vai ensinar nada novo: vai conduzir uma revisão prática para que cada criança refaça, sozinha, o ciclo completo de criar um asset. Por isso, antes da aula, refaça você mesmo um modelo simples no Blender (uma maçã, um baú, um cogumelo) seguindo os passos do mês. Isso deixa o caminho fresco na sua cabeça e te dá um exemplo pronto para mostrar.

Relembre o ciclo: 1) adicionar uma forma pelo menu "Add" (Adicionar), no canto superior esquerdo, escolhendo "Mesh" (Malha) e depois "Cube" (Cubo), "UV Sphere" (Esfera), "Cylinder" (Cilindro) ou "Cone"; 2) mover com a tecla G, girar com R, mudar o tamanho com S; 3) ajustar a proporção comparando o tamanho das partes; 4) pintar entrando em "Material Properties" (a aba da bolinha vermelha no painel da direita), clicando em "New" (Novo) e mudando a cor em "Base Color" (Cor Base); 5) deixar a superfície fosca ou brilhante mexendo no valor "Roughness" (Aspereza) — perto de 1 fica fosco, perto de 0 fica brilhante. Tenha o Blender já aberto em todos os computadores num arquivo novo antes de a turma chegar.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): Mostre no projetor o primeiro asset do mês e pergunte: "Quais passos a gente fez para criar isto?". Deixe as crianças listarem em voz alta. Anote no quadro o ciclo (planejar, montar, ajustar tamanho, pintar, dar material). O objetivo é a turma perceber que já conhece todo o caminho.

Conteúdo novo guiado (15 min): Entregue papel e peça um planejamento rápido — só o desenho do novo asset e as formas que ele usa. Depois, no projetor, refaça o ciclo bem rápido com um objeto simples, sem se demorar: adicione uma forma em "Add" e "Mesh", ajuste com G e S, pinte em "Material Properties" clicando em "New" e mudando a "Base Color", e mude o "Roughness" para fosco ou brilhante. A ideia é só relembrar, não ensinar de novo.

Mão na massa (25 min): Agora é com elas. Cada criança modela o segundo asset do começo ao fim, no seu próprio ritmo. Circule pela sala, mas deixe tentarem antes de ajudar — pergunte "qual é o próximo passo do ciclo?" em vez de fazer por elas. Ajude só quem travar de verdade. Quem terminar pode começar um terceiro asset ou caprichar nos detalhes.

Desafio e compartilhar (10 min): Peça que cada criança gire a cena com o botão do meio do mouse e mostre o novo asset ao colega do lado, contando que passos fez sozinha. Dê o adesivo de "Criador Independente" para quem completou o segundo asset com autonomia. Salve cada arquivo com um nome claro para a coleção crescer.

## Como explicar para crianças

Use a ideia de "já sei o caminho": "Da primeira vez eu mostrei cada passo. Agora você já conhece a trilha e vai sozinho — eu fico só de plantão se você precisar." Chame os assets de "peças da nossa caixa de jogo": quanto mais a gente faz, mais cheia fica a caixa para montar os jogos depois. Reforce o ciclo como uma receita de bolo: "Primeiro planejar, depois montar as formas, ajustar o tamanho, pintar e dar o material — sempre nessa ordem." Elogie a tentativa independente mais do que o resultado perfeito.

## Erros comuns e como ajudar

A criança pula o planejamento e fica perdida no meio: peça que pare e faça um desenho rápido antes de continuar. A criança fica esperando você mostrar cada passo: devolva a pergunta — "o que vem agora no nosso ciclo?" — para ela recordar sozinha. O modelo escolhido é complicado demais: ajude a simplificar para 3 ou 4 formas grandes. A criança esquece de pintar e só faz a forma cinza: lembre da aba "Material Properties" (a bolinha vermelha) e do botão "New". A superfície não muda de brilho: confira se ela está mexendo no "Roughness" certo e não em outro campo. Uma forma some da tela: aperte a tecla Home para enquadrar tudo de novo.`,
  exercicios: [
    {
      titulo: `Relembrando o ciclo de criação`,
      tipo: `Roda de conversa`,
      tempo: `5 minutos`,
      guiaProfessor: `Mostre o primeiro asset do mês no projetor e pergunte quais passos foram feitos para criá-lo. Vá anotando no quadro a ordem do ciclo conforme as crianças falam. O objetivo é elas perceberem que já dominam o caminho inteiro.`,
      atividade: `Olhe o asset que você fez antes e diga, em ordem, quais passos a gente usou para criá-lo, do começo até o fim.`,
      gabarito: `A ordem esperada é: planejar (desenhar), montar as formas (Add e Mesh), ajustar o tamanho com S, pintar em Material Properties e dar o material mexendo no Roughness. Acerto = nomear pelo menos quatro passos na ordem aproximada.`,
    },
    {
      titulo: `Plano-relâmpago do novo asset`,
      tipo: `Desenho e planejamento`,
      tempo: `5 minutos`,
      guiaProfessor: `Entregue papel e lápis e peça um plano rápido: o desenho do novo asset e as formas que ele vai usar. Estimule escolher algo simples e diferente do primeiro asset. Quem ainda não escreve bem pode só desenhar as formas.`,
      atividade: `Desenhe rapidinho no papel o novo asset que você quer criar. Ao lado, marque quais formas básicas você vai usar para montá-lo.`,
      gabarito: `Um desenho do novo objeto com pelo menos duas formas básicas indicadas. Exemplo: uma maçã desenhada com a anotação "1 esfera e 1 cilindro fino para o cabinho". Acerto = o plano mostra o objeto e as formas que vão construí-lo.`,
    },
    {
      titulo: `Montando as formas sozinho`,
      tipo: `Prática no Blender`,
      tempo: `10 minutos`,
      guiaProfessor: `Deixe a criança adicionar e posicionar as formas do plano sem que você mostre no projetor. Circule e, se travar, pergunte "qual o próximo passo?" antes de ajudar. Relembre que é uma forma de cada vez: adicionar em Add e Mesh, posicionar com G, ajustar com S.`,
      atividade: `No seu computador, monte o seu novo asset adicionando as formas do seu plano, uma de cada vez. Use Add e Mesh para criar cada forma, G para posicionar e S para deixar do tamanho certo.`,
      gabarito: `As formas do plano ficam montadas e posicionadas formando o objeto, sem precisar que o professor mostre cada passo. Acerto = a criança adiciona e posiciona pelo menos duas formas com autonomia, usando Add, G e S corretamente.`,
    },
    {
      titulo: `Pintando e dando o material`,
      tipo: `Prática no Blender`,
      tempo: `8 minutos`,
      guiaProfessor: `A criança entra em "Material Properties" (a aba da bolinha vermelha à direita), clica em "New", muda a "Base Color" para a cor do objeto e ajusta o "Roughness" para fosco (perto de 1) ou brilhante (perto de 0). Ajude quem esquecer a aba ou só deixar a forma cinza.`,
      atividade: `Pinte o seu asset: abra "Material Properties", clique em "New", escolha a cor em "Base Color" e mexa no "Roughness" para deixar a superfície fosca ou brilhante, como o seu objeto pede.`,
      gabarito: `O asset fica colorido com a cor escolhida e com o brilho adequado ao objeto (por exemplo, fosco para madeira, brilhante para vidro). Acerto = a criança aplica um material com cor e ajusta o Roughness sozinha, sem deixar a forma cinza.`,
    },
    {
      titulo: `Asset pronto: mostrar e guardar na coleção`,
      tipo: `Desafio e compartilhar`,
      tempo: `12 minutos`,
      guiaProfessor: `Cada criança dá o acabamento final, gira a cena com o botão do meio do mouse e mostra o novo asset ao colega, contando que passos fez sozinha. Ajude a salvar o arquivo com um nome claro para a coleção crescer. Quem terminar antes pode iniciar um terceiro asset.`,
      atividade: `Termine o seu asset, gire a cena com o botão do meio do mouse e mostre ao colega o que você criou, contando quais passos você fez sozinho. Depois, ajude o professor a salvar o seu arquivo na coleção.`,
      gabarito: `Um segundo asset completo (formas, cor e material) criado com autonomia, apresentado ao colega e salvo na coleção. Acerto = o modelo está pronto, a criança consegue explicar pelo menos três passos que fez sozinha e o arquivo é guardado com nome claro.`,
    },
  ],
};
