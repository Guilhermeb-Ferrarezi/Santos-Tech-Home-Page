import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Preparando os Assets",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Finalizar os primeiros assets 3D limpando a geometria, renomeando os objetos no Outliner e congelando as transformações, deixando tudo organizado e pronto para a exportação rumo ao Roblox.`,
  descricao: `Nesta aula os alunos aprendem que um bom modelo 3D não termina quando a forma fica bonita: ele termina quando está limpo e organizado. Assim como a gente arruma a mochila antes de viajar, um asset precisa ser preparado antes de sair do Maya. Hoje o foco é deixar cada modelo arrumado por dentro, com nomes claros e medidas certas, para que ele funcione bem quando chegar ao Roblox.

Três tarefas guiam a aula. A primeira é limpar a geometria: apagar faces escondidas, vértices soltos e histórico de construção que só atrapalham. A segunda é renomear os objetos no Outliner, que é a lista de tudo o que existe na cena; nomes como "pCube1" não dizem nada, mas "espada", "moeda" e "escudo" deixam o projeto fácil de entender. A terceira é congelar as transformações (Freeze Transformations), que zera posição, rotação e escala sem mudar a aparência do modelo, registrando o tamanho atual como o tamanho oficial.

Esses cuidados parecem pequenos, mas fazem uma diferença enorme. Um asset com histórico cheio e nomes bagunçados pode dar erro na hora de exportar, aparecer torto no Roblox ou ficar impossível de achar quando a cena tiver dezenas de peças. Profissionais de jogos chamam essa etapa de "limpeza" ou "preparação", e ela é parte obrigatória do trabalho.

Ao final da aula, cada aluno terá seus primeiros assets organizados: geometria limpa, nomes claros no Outliner e transformações congeladas. É a aula que transforma modelos soltos em arquivos prontos para o próximo passo, a exportação, que será o tema da aula final do mês.`,
  materiais: [
    `Computadores com Maya instalado (um por aluno)`,
    `Projetor ou TV para a demonstração do professor`,
    `Arquivo de exemplo com os assets modelados nas aulas anteriores (personagem e itens do jogo)`,
    `Folha impressa com a lista de verificação de limpeza (checklist) para os alunos seguirem`,
    `Cartão com sugestões de nomes claros para os objetos (espada, moeda, escudo, caixa)`,
    `Mouse com três botões (recomendado para navegar no Maya)`,
  ],
  conceitosChave: [
    `Outliner — janela do Maya que lista todos os objetos da cena, como um índice do projeto.`,
    `Geometria — o conjunto de vértices, arestas e faces que formam o modelo 3D.`,
    `Histórico de construção — o registro de cada passo feito no objeto, que deve ser apagado ao finalizar.`,
    `Delete History — comando que apaga o histórico de construção e deixa o modelo mais leve e estável.`,
    `Freeze Transformations — comando que zera posição, rotação e escala registrando o estado atual como o oficial.`,
    `Renomear — dar um nome claro a cada objeto para encontrá-lo e exportá-lo com facilidade.`,
    `Asset — uma peça pronta do jogo (personagem ou item) já limpa e organizada para uso.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Maya para conduzir esta aula. Ela é uma rotina de arrumação com três comandos principais, todos em menus simples. O primeiro é apagar o histórico de construção: menu Edit, opção Delete by Type, em seguida History (atalho Alt mais Shift mais D). O segundo é congelar transformações: menu Modify, opção Freeze Transformations. O terceiro é renomear no Outliner: abrir Windows, depois Outliner, e dar dois cliques sobre o nome do objeto para digitar o novo. Antes da aula, abra o arquivo de exemplo e teste esses três passos uma vez, para se sentir seguro. Deixe o Outliner aberto na lateral durante toda a aula, pois ele é o painel mais importante de hoje.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): mostre no projetor duas cenas, uma com objetos chamados "pCube1, pCube2, pSphere1" e outra com "espada, escudo, moeda". Pergunte qual é mais fácil de entender. Explique que hoje vamos arrumar a casa: limpar, nomear e congelar. Peça que cada aluno abra o Maya e o arquivo com seus assets.

Conteúdo novo guiado (15 min): com todos olhando o projetor, abra o Outliner em Windows, depois Outliner. Selecione um objeto e mostre o nome confuso. Dê dois cliques no nome e digite um nome claro, por exemplo espada. Em seguida, demonstre a limpeza: com o objeto selecionado, vá em Edit, Delete by Type, History. Explique que isso apaga o histórico antigo. Por fim, mostre Modify, Freeze Transformations, e abra o Channel Box (lado direito) para que vejam Translate, Rotate e Scale voltarem a zero, zero e um, sem o objeto mudar de aparência.

Mão na massa (25 min): cada aluno repete o processo em todos os seus assets. Roteiro na lousa: 1) renomear cada objeto no Outliner com um nome claro; 2) selecionar o objeto e aplicar Edit, Delete by Type, History; 3) aplicar Modify, Freeze Transformations; 4) conferir no Channel Box se Translate e Rotate estão em zero e Scale em um. Circule pela sala conferindo nomes e o Channel Box de cada um.

Desafio e compartilhar (10 min): proponha a "inspeção de qualidade". Cada dupla troca de computador e confere o Outliner do colega usando o checklist: todos os nomes fazem sentido? Algum objeto ainda tem Scale diferente de um? Quem encontrar um item fora do padrão ajuda a corrigir. Termine com alguns alunos mostrando o Outliner organizado para a turma.

## Como explicar de forma clara (linguagem para a idade)

Use a comparação da arrumação. Diga que o Outliner é como a lista de contatos do celular: se todo mundo se chamar "contato1", você nunca acha ninguém. Limpar o histórico é como apagar os rascunhos depois de terminar o desenho, fica mais leve e ninguém se confunde. Congelar transformações é como tirar uma foto do tamanho certo e dizer ao Maya "este é o tamanho oficial agora". Reforce que congelar não muda a aparência: o objeto continua igual na tela, só os números do Channel Box voltam ao padrão. Repita que um asset bem nomeado e limpo é um asset profissional.

## Erros comuns e como ajudar

Aluno esquece de selecionar o objeto antes do comando: lembre que é preciso clicar no objeto primeiro, no Outliner ou na cena. Nome com espaço ou acento dá problema na exportação: oriente nomes simples, sem espaço e sem acento, como espada ou moeda_ouro. Objeto some depois do Freeze: na verdade ele não sumiu, peça Ctrl mais Z e refaça com calma conferindo o Channel Box. Aluno aplica Freeze mas o Scale continua diferente: ele pode ter aplicado em outro objeto; confirme a seleção pelo nome no Outliner. Por fim, se o Outliner não aparece, vá em Windows, depois Outliner para abri-lo.`,
  exercicios: [
    {
      titulo: `Nomes que ajudam ou atrapalham`,
      tipo: `Discussão em grupo`,
      tempo: `5 min`,
      guiaProfessor: `Use no aquecimento. Mostre no projetor um Outliner com nomes confusos (pCube1, pSphere2) e outro com nomes claros (espada, moeda). Conduza a votação a mão levantada e peça que justifiquem por que nomes claros ajudam.`,
      atividade: `Olhe as duas listas de objetos no projetor e diga qual é mais fácil de entender. Em uma frase, explique por que dar bons nomes ajuda quando a cena tem muitas peças.`,
      gabarito: `A lista correta é a de nomes claros (espada, moeda, escudo), porque cada nome diz o que o objeto é. Nomes como pCube1 não dizem nada e fazem perder tempo procurando. Frase esperada, com palavras parecidas: "Nomes claros ajudam a achar e exportar cada peça rápido, sem confusão."`,
    },
    {
      titulo: `Abrindo e lendo o Outliner`,
      tipo: `Prática guiada`,
      tempo: `8 min`,
      guiaProfessor: `Faça junto no projetor. Garanta que cada aluno consiga abrir o Outliner em Windows, depois Outliner, e identificar quantos objetos existem na cena dele.`,
      atividade: `Abra o Outliner pelo menu Windows, depois Outliner. Conte quantos objetos a sua cena tem e anote o nome atual de cada um.`,
      gabarito: `Procedimento fixo: menu Windows, opção Outliner; a janela lista todos os objetos da cena. A contagem varia conforme o projeto. Exemplo de resposta válida: "Minha cena tem 4 objetos: pCube1, pCube2, pSphere1 e personagem." O importante é o aluno conseguir abrir o Outliner e ler a lista.`,
    },
    {
      titulo: `Renomeando os assets`,
      tipo: `Exercício individual`,
      tempo: `10 min`,
      guiaProfessor: `Mostre o duplo clique sobre o nome no Outliner. Reforce a regra de nomes simples: sem espaço e sem acento. Ofereça o cartão de sugestões (espada, moeda, escudo, caixa) para quem precisar de ideias.`,
      atividade: `No Outliner, dê dois cliques no nome de cada objeto e troque por um nome claro, sem espaço e sem acento, que diga o que o objeto é (por exemplo espada, moeda, escudo).`,
      gabarito: `Passos: abrir o Outliner; dar dois cliques no nome do objeto; digitar um nome claro e pressionar Enter. Exemplos corretos: espada, escudo, moeda_ouro, caixa_madeira. Exemplos a evitar: "espada do herói" (tem espaço e acento) e pCube1 (não diz nada). Sucesso = todos os objetos da cena com nomes que descrevem o que são.`,
    },
    {
      titulo: `Limpar e congelar`,
      tipo: `Mão na massa`,
      tempo: `12 min`,
      guiaProfessor: `Circule conferindo o Channel Box de cada aluno. Lembre a ordem: selecionar, apagar histórico, congelar. Verifique se Translate e Rotate ficaram em zero e Scale em um após o Freeze.`,
      atividade: `Para cada objeto: 1) selecione-o; 2) vá em Edit, Delete by Type, History; 3) vá em Modify, Freeze Transformations; 4) confira no Channel Box se Translate e Rotate estão em zero e Scale em um.`,
      gabarito: `Procedimento por objeto: selecionar no Outliner ou na cena; Edit, Delete by Type, History (apaga o histórico); Modify, Freeze Transformations (zera as transformações). Resultado correto no Channel Box: Translate X, Y e Z em 0; Rotate X, Y e Z em 0; Scale X, Y e Z em 1. O objeto continua com a mesma aparência na tela, só os números voltaram ao padrão.`,
    },
    {
      titulo: `Inspeção de qualidade em dupla`,
      tipo: `Desafio em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas e oriente a troca de computador. Entregue o checklist (nomes claros, histórico apagado, Translate e Rotate em zero, Scale em um). Premie quem encontrar e ajudar a corrigir um item fora do padrão.`,
      atividade: `Troque de computador com o colega e confira a cena dele com o checklist: todos os nomes são claros? Algum objeto ainda tem Scale diferente de um ou Rotate fora de zero? Encontre pelo menos um problema e ajude a corrigir.`,
      gabarito: `A dupla deve abrir o Outliner do colega e checar item por item: nomes claros e sem espaço ou acento; Channel Box com Translate e Rotate em 0 e Scale em 1. Correção típica: achar um objeto com Scale 1.5 e aplicar Modify, Freeze Transformations; ou renomear um pCube1 esquecido. Sucesso = as duas cenas passam no checklist, com todos os assets nomeados, limpos e congelados, prontos para exportar.`,
    },
  ],
};
