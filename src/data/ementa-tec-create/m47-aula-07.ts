import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 7,
  titulo: "Finalizando o Conjunto de Assets",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Padronizar nomes, escala e pivots de toda a coleção de assets no Maya e usar o Claude para criar uma checklist de qualidade que garanta consistência.`,
  descricao: `Esta é a aula de fechamento da produção. Durante o mês os alunos modelaram vários itens novos no Maya; agora chegou a hora de transformar essa pilha de modelos soltos em um conjunto coeso e profissional. Finalizar não é criar mais polígonos: é completar os últimos detalhes pendentes e, principalmente, padronizar a coleção inteira para que todos os assets pareçam membros da mesma família.

Três padrões são o coração desta aula. Primeiro, os nomes: cada objeto precisa de um nome claro e previsível (por exemplo SM_Barril_01 em vez de pCube47), porque é assim que um time real encontra e organiza centenas de arquivos. Segundo, a escala: todos os modelos devem usar a mesma unidade do mundo, para que uma cadeira não chegue gigante e uma maçã não chegue minúscula dentro do mesmo jogo. Terceiro, o pivot (ponto de origem): ele deve ficar na base do objeto e zerado no mundo, para que o asset apareça exatamente onde o programador espera.

Para garantir que nada escape, os alunos vão pedir ajuda ao Claude para montar uma checklist de qualidade (uma QA checklist). O Claude é ótimo para listar itens que costumamos esquecer, sugerir uma convenção de nomes e organizar tudo numa tabela. O aluno continua sendo o responsável: ele lê, julga, ajusta e aplica cada item olhando para o seu próprio projeto.

Ao final, o aluno terá uma coleção verificada item por item, pronta para ser exportada e levada ao portfólio na próxima aula. É uma aula que ensina disciplina e cuidado, qualidades tão importantes quanto saber modelar.`,
  materiais: [
    `Computadores com Autodesk Maya instalado (um por aluno)`,
    `Os assets já modelados pelos alunos durante o mês, salvos numa pasta do projeto`,
    `Acesso ao Claude (assistente) em uma aba do navegador`,
    `Projetor para o professor demonstrar os passos no Maya`,
    `Arquivo de exemplo do professor: uma cena com 4 a 5 assets propositalmente bagunçados (nomes errados, escalas diferentes, pivots fora do lugar)`,
    `Modelo de checklist impresso ou em tela para comparar com o resultado do Claude`,
  ],
  conceitosChave: [
    `Asset — qualquer item pronto para o jogo, como um modelo 3D, que será reutilizado dentro da cena.`,
    `Padronização — deixar todos os assets seguindo as mesmas regras de nome, escala e pivot para parecerem uma coleção única.`,
    `Pivot — o ponto de origem do objeto; é em torno dele que o modelo gira, escala e se posiciona no mundo.`,
    `Convenção de nomes — um padrão combinado para nomear arquivos e objetos, como prefixo SM_ para modelos estáticos.`,
    `Freeze Transformations — comando do Maya que zera posição, rotação e escala, fixando os valores atuais como o novo padrão do objeto.`,
    `Checklist de qualidade (QA) — lista de verificação usada para conferir, item por item, se cada asset está dentro do padrão antes da entrega.`,
    `Outliner — janela do Maya que mostra a lista de todos os objetos da cena, usada para organizar e renomear.`,
  ],
  treinamento: `## O que o professor precisa saber

Finalizar uma coleção de assets é organizar, não desenhar. Você não precisa ser artista para conduzir esta aula; precisa apenas saber abrir três coisas no Maya: o Outliner (menu Windows, depois Outliner), o Channel Box (painel à direita que mostra os números de Translate, Rotate e Scale) e o menu Modify. Três padrões guiam tudo: nome claro, escala igual e pivot na base e zerado. Antes da aula, abra o arquivo de exemplo bagunçado e treine os passos uma vez. Tenha o Claude aberto para a parte da checklist.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento e revisão. Mostre no projetor a cena de exemplo bagunçada. Pergunte: o que está errado aqui? Conduza os alunos a notarem nomes como pCube12, tamanhos diferentes e objetos que giram fora do centro. Explique que hoje vamos arrumar a casa.

15 min — Conteúdo novo guiado. Demonstre os três padrões.
1. Renomear: no Outliner, dê duplo clique no nome do objeto e digite o novo, por exemplo SM_Barril_01. Combine o padrão: prefixo SM_ (static mesh), nome do item, número com dois dígitos.
2. Escala: clique no objeto, olhe o Channel Box. Se Scale X, Y, Z não forem 1, vá em Modify e clique em Freeze Transformations para fixar a escala atual como padrão.
3. Pivot: pressione a tecla D para entrar no modo de editar pivot, segure X para usar o snap de grade e arraste o pivot para a base do objeto. Solte D. Depois, em Modify, use Center Pivot se quiser centralizar. Para zerar a posição no mundo, com o objeto selecionado, use Modify e Freeze Transformations de novo.

25 min — Mão na massa. Cada aluno abre a própria coleção e aplica os três padrões a todos os assets. Em seguida, abrem o Claude e pedem a checklist. Mostre no projetor um exemplo de pedido (prompt):

Sou aluno de modelagem 3D no Maya. Crie uma checklist de qualidade para finalizar uma coleção de assets de jogo. Inclua itens sobre nomes padronizados, escala em unidade igual, pivot na base e zerado, e contagem de polígonos. Responda em uma tabela com colunas Item, Como verificar e OK.

Cada aluno cola a resposta do Claude e percorre a coleção marcando OK item por item, corrigindo o que faltar.

10 min — Desafio e compartilhar. Lance o desafio: deixe a cena 100 por cento verde na checklist. Quem terminar mostra a tela e explica uma correção que fez. Reforce que a coleção está pronta para a exportação da próxima aula.

## Como explicar de forma clara (linguagem para a idade)

Compare a coleção a um time de futebol com o mesmo uniforme: se cada jogador usar uma roupa diferente, ninguém entende que são do mesmo time. Os nomes são as camisas numeradas; a escala é a altura justa; o pivot é o pé que toca o chão. Diga que o Claude é como um colega experiente que lembra o que costumamos esquecer, mas quem decide o que entra na lista é o aluno, olhando o próprio projeto. Use a frase pivot na base e no zero como um bordão da aula.

## Erros comuns e como ajudar

O pivot some ou fica torto: lembre que a tecla D só edita o pivot enquanto estiver pressionada. Escala que volta ao errado: o aluno esqueceu o Freeze Transformations; reforce que sem ele os números não viram padrão. Nomes com espaço ou acento: o Maya pode reclamar; oriente usar apenas letras, números e o sublinhado. Aluno que copia a checklist do Claude sem ler: peça que ele explique um item com as próprias palavras antes de marcar OK.`,
  exercicios: [
    {
      titulo: `Caça aos erros na cena bagunçada`,
      tipo: `Roda de observação`,
      tempo: `8 min`,
      guiaProfessor: `Projete a cena de exemplo com problemas. Conduza a turma a apontar o que está fora do padrão, sem corrigir ainda. O objetivo é treinar o olhar.`,
      atividade: `Olhe a cena projetada e liste pelo menos três problemas de padronização que você consegue ver no Outliner e no Channel Box.`,
      gabarito: `Respostas esperadas (pelo menos três): nomes genéricos como pCube12 em vez de nomes claros; escalas diferentes entre objetos (valores de Scale diferentes de 1); pivots fora da base ou fora do zero; objetos posicionados longe da origem do mundo; falta de prefixo padrão como SM_.`,
    },
    {
      titulo: `Renomear seguindo a convenção`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Combine com a turma a convenção: prefixo SM_, nome do item, número com dois dígitos. Acompanhe o uso do duplo clique no Outliner.`,
      atividade: `Abra sua coleção, vá ao Outliner e renomeie todos os objetos seguindo o padrão prefixo, nome e número, usando apenas letras, números e sublinhado.`,
      gabarito: `Todos os objetos renomeados no padrão, por exemplo: SM_Barril_01, SM_Caixa_02, SM_Espada_03. Sem espaços, sem acentos, sem nomes automáticos do Maya. Cada item com numeração de dois dígitos e prefixo SM_ consistente.`,
    },
    {
      titulo: `Escala e pivot no lugar certo`,
      tipo: `Prática no computador`,
      tempo: `10 min`,
      guiaProfessor: `Mostre de novo o caminho: Channel Box para conferir Scale, tecla D para mover o pivot até a base, Modify e Freeze Transformations para fixar. Circule pela sala ajudando individualmente.`,
      atividade: `Para cada asset: confira a escala no Channel Box, mova o pivot para a base do objeto com a tecla D e aplique Freeze Transformations para zerar posição, rotação e escala.`,
      gabarito: `Após o trabalho, ao selecionar qualquer asset, o Channel Box deve mostrar Translate 0, 0, 0; Rotate 0, 0, 0; Scale 1, 1, 1. O pivot deve aparecer na base do objeto. Isso é resultado do Freeze Transformations aplicado após posicionar o pivot.`,
    },
    {
      titulo: `Checklist de qualidade com o Claude`,
      tipo: `Uso do assistente`,
      tempo: `10 min`,
      guiaProfessor: `Mostre o prompt de exemplo no projetor. Reforce que o aluno deve ler cada item e julgar se faz sentido para o projeto dele antes de aceitar.`,
      atividade: `Peça ao Claude uma checklist de qualidade para finalizar a coleção, em tabela com colunas Item, Como verificar e OK. Cole a resposta e marque OK em cada asset que já passou.`,
      gabarito: `Uma checklist em tabela contendo, no mínimo: nomes padronizados (verificar no Outliner); escala em unidade igual (Scale 1 no Channel Box); pivot na base e zerado (selecionar e olhar a origem); posição zerada no mundo (Translate 0, 0, 0); contagem de polígonos sob controle. O aluno deve conseguir explicar com as próprias palavras pelo menos dois itens da lista.`,
    },
    {
      titulo: `Coleção 100 por cento verde`,
      tipo: `Desafio e compartilhar`,
      tempo: `9 min`,
      guiaProfessor: `Este é o fechamento. Peça que cada aluno deixe todos os itens da checklist marcados como OK. Quem terminar apresenta uma correção que fez. Valorize o cuidado, não a velocidade.`,
      atividade: `Percorra sua coleção inteira até que todos os itens da checklist estejam OK para todos os assets. Depois, apresente à turma uma correção que você precisou fazer e por quê.`,
      gabarito: `Coleção finalizada: todos os assets com nome no padrão, Scale 1, pivot na base, Translate e Rotate zerados, e cada linha da checklist marcada como OK. Exemplo de explicação aceitável: o barril estava com Scale 2 porque eu tinha aumentado ele no olho; apliquei Freeze Transformations e agora ele fica no tamanho certo dentro do jogo. A coleção está pronta para exportação na próxima aula.`,
    },
  ],
};
