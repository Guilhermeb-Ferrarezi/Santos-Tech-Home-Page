import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Dando o acabamento caprichado",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Revisar e finalizar o acabamento de toda a coleção de itens 3D, arredondando cantos, alinhando formas e arrumando detalhes para deixar tudo bonito e limpo.`,
  descricao: `Nesta aula a turma vira "equipe de acabamento" de uma fábrica de brinquedos. Os itens 3D já existem e já têm proporções certinhas (vimos isso na aula passada), mas agora vamos olhar de pertinho e perguntar: este canto está muito pontudo? Estas peças estão tortas? Sobrou alguma forma escondida bagunçando o modelo? Acabamento é justamente esse cuidado final que separa um trabalho "feito às pressas" de um trabalho "caprichado".

No Maya, três técnicas simples dão um salto enorme de qualidade. A primeira é arredondar cantos com a ferramenta Bevel, que tira aquele bico duro e deixa a quina suave, como o canto de um sabonete. A segunda é alinhar formas usando o Snap (ímã) e o Move Tool, encostando as peças com precisão em vez de "no olho". A terceira é arrumar detalhes: apagar formas perdidas, juntar pedaços com Combine e deletar o que ficou solto, deixando a cena organizada.

Para crianças de 5 a 9 anos, o segredo é demonstrar muito e dar nomes concretos. "Bevel é a lixa que tira o bico", "Snap é o ímã que gruda no lugar certo", "Combine é a cola que junta as peças". O professor mostra no projetor, faz junto e só depois solta a turma para o mão na massa em cada coleção pessoal.

O entregável do mês é um conjunto de itens 3D para o jogo, e esta é a aula em que a coleção fica "pronta de verdade". Por isso o foco não é criar coisa nova, e sim revisar item por item e deixar cada um limpo, alinhado e suave. Na aula seguinte vamos juntar tudo numa coleção organizada, então quanto mais caprichado sair daqui, mais fácil será o próximo passo.`,
  materiais: [
    `Computadores com o Maya aberto, um por aluno, com a cena de itens da semana anterior salva`,
    `Projetor ligado para o professor demonstrar cada passo na tela grande`,
    `Dois exemplos prontos do mesmo item: um "sem acabamento" (cantos duros, peças tortas) e um "caprichado" (cantos suaves, alinhado)`,
    `Mouse com três botões para cada aluno (esquerdo, direito e rodinha do meio)`,
    `Cartões impressos com os ícones das ferramentas Bevel, Move (W) e Snap (ímã)`,
    `Folha de checklist do acabamento: "canto suave? peças alinhadas? nada solto?"`,
    `Pasta compartilhada ou pendrive para salvar a versão final de cada coleção`,
  ],
  conceitosChave: [
    `Acabamento — é o capricho final, quando a gente arruma os detalhes para o item ficar bonito e limpo.`,
    `Bevel — a "lixa mágica" do Maya que arredonda um canto pontudo e deixa a quina macia.`,
    `Canto (ou aresta) — a linha onde dois lados do objeto se encontram; pode ficar dura ou suave.`,
    `Snap (ímã) — uma ajuda que faz a peça grudar certinho no lugar, sem ficar torta.`,
    `Alinhar — deixar as peças encostadas e organizadas, retinhas, não tortas nem desencontradas.`,
    `Combine — a "cola" que junta vários objetos separados em uma peça só.`,
    `Caprichado — feito com cuidado e atenção, sem pressa e sem bagunça sobrando.`,
  ],
  treinamento: `## O que o professor precisa saber

Acabamento é a parte mais fácil de explicar e a que mais impressiona: o item "feio" vira "bonito" na frente das crianças. Você vai usar três recursos do Maya. O Bevel arredonda cantos: selecione um objeto, entre no modo aresta e aplique. O Snap encosta peças com precisão. O Combine junta objetos soltos em um só. Antes da aula, abra o Maya e teste o caminho do menu Mesh, opção Bevel, e o botão do ímã no topo da tela. Tenha em mãos os dois exemplos (um sem acabamento e um caprichado) para mostrar o "antes e depois". Você não precisa dominar o Maya: basta seguir os passos abaixo e repetir os mesmos cliques com a turma.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão: Abra os dois exemplos no projetor. Pergunte: "Qual está mais caprichado? Por quê?". Deixe as crianças apontarem os cantos duros e as peças tortas. Diga que hoje somos a "equipe de acabamento" e vamos deixar toda a coleção bonita. Peça que cada aluno abra a própria cena salva (menu File, Open Scene).

15 min — Conteúdo novo guiado: Demonstre as três técnicas, uma por vez, com a turma só olhando. (1) Bevel: clique no objeto com o botão esquerdo; clique com o botão direito e segure, escolha "Edge"; selecione uma aresta pontuda; vá no menu Mesh, escolha Bevel; arraste devagar para arredondar. (2) Snap: ative o ímã clicando no botão de ímã com a grade no topo (ou segure a tecla X enquanto move com o W); mova uma peça e mostre que ela "gruda" na grade. (3) Combine: selecione duas peças segurando Shift; vá no menu Mesh, escolha Combine; mostre que viraram uma só. Faça cada passo bem devagar e nomeie os botões em voz alta.

25 min — Mão na massa: Cada aluno abre a própria coleção e passa item por item com a folha de checklist. Primeiro arredondam os cantos mais pontudos com Bevel; depois alinham as peças tortas com Move (W) e o ímã ligado; por fim juntam pedaços soltos com Combine e deletam o que sobrou (selecionar e tecla Delete). Circule pela sala, sente ao lado de quem travar e refaça o clique junto. Lembre de salvar com File, Save Scene a cada item terminado.

10 min — Desafio e compartilhar: Lance o desafio "antes e depois": cada aluno escolhe o item que mais melhorou e mostra para a turma o que arrumou. Reforce o vocabulário: Bevel, alinhar, Combine. Termine pedindo que todos salvem a versão final na pasta combinada.

## Como explicar para crianças

Use analogias concretas e mãos à obra. O Bevel é a "lixa mágica": passa no bico e ele fica macio, igual ao canto de um sabonete velho. O Snap é um "ímã" que puxa a peça para o lugar certo, então ela não fica torta. O Combine é "cola": dois pedaços viram um só e não se soltam mais. Acabamento é "passar o pente no cabelo antes da foto": a gente não muda a pessoa, só deixa arrumadinha. Mostre sempre o antes e o depois para a criança ver a diferença com os próprios olhos.

## Erros comuns e como ajudar

A criança aplica Bevel forte demais e o objeto fica "derretido": peça para desfazer com Ctrl+Z e arrastar bem pouquinho. Alguém esquece de entrar no modo "Edge" e o Bevel não aparece: lembre do clique com o botão direito segurado para escolher "Edge". Peças continuam tortas porque o ímã está desligado: mostre de novo o botão do ímã aceso. Itens "somem": geralmente foram só afastados pela câmera; ensine a tecla F para enquadrar o objeto selecionado. E o maior erro de todos é esquecer de salvar: crie o hábito de dizer "terminou um item, salva o item" a cada peça finalizada.`,
  exercicios: [
    {
      titulo: `Detetive do acabamento`,
      tipo: `Observação e discussão`,
      tempo: `8 minutos`,
      guiaProfessor: `Mostre no projetor os dois exemplos (sem acabamento e caprichado). Conduza a turma a apontar as diferenças. Aceite respostas simples e repita o vocabulário correto ao confirmar cada achado.`,
      atividade: `Olhe as duas versões do mesmo item na tela e diga, levantando a mão, três coisas que estão diferentes entre o item "feito às pressas" e o item "caprichado".`,
      gabarito: `Diferenças esperadas: no item caprichado os cantos estão suaves (Bevel) e no outro estão pontudos; as peças estão alinhadas e não tortas; não há formas soltas sobrando; tudo parece organizado e limpo. Qualquer três dessas observações vale.`,
    },
    {
      titulo: `A lixa mágica: meu primeiro Bevel`,
      tipo: `Prática guiada no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Faça junto, um clique de cada vez. Garanta que cada criança entrou no modo "Edge" antes de aplicar. Peça para arrastar pouco. Use Ctrl+Z se exagerar.`,
      atividade: `Escolha um item da sua coleção com um canto bem pontudo. Entre no modo aresta (botão direito segurado, "Edge"), selecione a aresta, vá em Mesh e Bevel e arraste devagar até o canto ficar macio.`,
      gabarito: `O aluno seleciona uma aresta no modo Edge, aplica Mesh > Bevel e arrasta pouco, resultando em um canto arredondado e suave em vez de pontudo. O objeto continua com a forma reconhecível, apenas com a quina macia.`,
    },
    {
      titulo: `O ímã que deixa retinho`,
      tipo: `Prática guiada no Maya`,
      tempo: `10 minutos`,
      guiaProfessor: `Mostre como ligar o ímã (botão de ímã com a grade, ou segurar X). Verifique se as crianças usam o Move (W). Compare o "antes torto" e o "depois alinhado".`,
      atividade: `Pegue duas peças do seu item que estão tortas ou desencontradas. Ligue o ímã, use a ferramenta Move (tecla W) e encoste uma peça na outra até ficarem retinhas e alinhadas.`,
      gabarito: `Com o Snap (ímã) ligado e o Move ativo, o aluno move as peças e elas "grudam" alinhadas na grade. O resultado é as duas peças encostadas e retas, sem ficarem tortas ou flutuando separadas.`,
    },
    {
      titulo: `Cola e faxina: Combine e limpar`,
      tipo: `Desafio prático no Maya`,
      tempo: `12 minutos`,
      guiaProfessor: `Reforce selecionar com Shift antes do Combine. Depois ajude a achar e deletar formas perdidas. Lembre de salvar ao final. Apoie quem perder objetos com a tecla F.`,
      atividade: `Em um item feito de várias peças, selecione todas com Shift e use Mesh e Combine para virar uma só. Depois procure formas soltas que não fazem parte do item, selecione e apague com Delete. Salve a cena.`,
      gabarito: `O aluno junta as peças do item em um único objeto com Mesh > Combine e remove os objetos soltos com Delete, deixando a cena limpa. Ao final salva com File > Save Scene. O item fica como uma peça organizada e sem sobras.`,
    },
    {
      titulo: `Coleção caprichada: antes e depois`,
      tipo: `Projeto de finalização e compartilhamento`,
      tempo: `15 minutos`,
      guiaProfessor: `Entregue a folha de checklist. Acompanhe a revisão item por item. No final, conduza a roda de "antes e depois" e garanta que todos salvem a versão final na pasta combinada.`,
      atividade: `Use o checklist (canto suave? peças alinhadas? nada solto?) e revise cada item da sua coleção, aplicando Bevel, ímã e Combine onde precisar. Escolha o item que mais melhorou e mostre o antes e o depois para a turma. Salve tudo na pasta.`,
      gabarito: `Toda a coleção passa pelo checklist: cantos arredondados, peças alinhadas e nada solto sobrando. O aluno apresenta um item explicando o que arrumou (ex.: "arredondei o canto com Bevel e juntei as peças com Combine") e salva a versão final na pasta combinada. Coleção pronta para a próxima aula.`,
    },
  ],
};
