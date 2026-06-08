import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 8,
  titulo: "Cena finalizada e apresentação",
  semana: "Semana 4",
  duracao: "1 hora",
  objetivo: `Revisar, testar e finalizar a cena na Unreal Engine, capturar screenshots para o portfólio e apresentar o trabalho aos colegas, fechando a etapa 2 de 4 do projeto do ano.`,
  descricao: `Esta é a última aula do mês na Unreal Engine, e o clima é de fechamento. Durante as sete aulas anteriores o aluno conheceu a engine, aprendeu a navegar pelo editor, trouxe os modelos do Maya, ajustou os assets na cena, deu os primeiros passos nos Blueprints, entendeu a ponte entre Blueprints e C++ e montou o ambiente com iluminação. Agora todas essas peças se juntam: o objetivo de hoje é deixar a cena pronta para entrar no portfólio e ser apresentada.

A aula tem duas grandes partes. A primeira é de polimento e teste. O aluno percorre a própria cena com olhar crítico, conferindo se a iluminação está agradável, se os objetos estão bem posicionados e se a interação criada nas aulas de Blueprints realmente funciona quando ele aperta o botão Play. É o momento de caçar os últimos detalhes: uma luz forte demais, um objeto flutuando, uma porta que não abre. Pequenos ajustes fazem uma cena parecer muito mais profissional.

A segunda parte é de registro e apresentação. Depois do teste final no modo Play, o aluno tira screenshots da cena de ângulos bem escolhidos, como faria um fotógrafo, para guardar no portfólio. Esse portfólio é o que o aluno levará da escola: a prova concreta do que aprendeu a criar. Por fim, cada um mostra a cena aos colegas em uma pequena apresentação, contando o que construiu, qual foi o maior desafio e o que mais gostou.

Para o professor, vale lembrar que esta cena é a etapa 2 de 4 do grande projeto do ano: o portfólio de jogos. A etapa 1 foi a experiência em Realidade Virtual no Unity; esta é a cena na Unreal; as próximas serão o jogo completo na Unreal e o jogo na Unreal com assets do Maya. Apresentar bem e documentar com capricho faz parte da formação de quem cria games de verdade.`,
  materiais: [
    `Computadores com a Unreal Engine instalada e o projeto C++ de cada aluno aberto, um por aluno`,
    `Projetor ou TV ligada ao computador do professor para as demonstrações e as apresentações finais`,
    `Arquivo de exemplo: um projeto da Unreal com uma cena simples já finalizada (iluminação ajustada e uma interação funcionando no Play)`,
    `Pasta compartilhada ou pen drive para os alunos salvarem os screenshots do portfólio`,
    `Folha impressa de checklist de finalização (iluminação, posicionamento, interação, performance) para conferir a cena`,
    `Quadro branco ou bloco de notas digital para anotar a ordem das apresentações e os comentários da turma`,
  ],
  conceitosChave: [
    `Cena (Level) — na Unreal, é o ambiente completo que reúne os modelos, as luzes e a interação; corresponde ao mundo que o jogador vê quando aperta Play.`,
    `Play in Editor (PIE) — modo de teste da Unreal que roda a cena dentro do próprio editor ao clicar em Play, sem precisar exportar nada.`,
    `Polimento — etapa final em que se ajustam pequenos detalhes de luz, posição e interação para a cena parecer acabada e profissional.`,
    `Screenshot — imagem capturada da tela usada para registrar a cena; na Unreal pode ser tirada pelo High Resolution Screenshot, que gera uma foto em alta qualidade.`,
    `Portfólio — coleção dos melhores trabalhos do aluno que mostra, na prática, o que ele sabe criar; aqui recebe as imagens da cena pronta.`,
    `Build Lighting — cálculo da iluminação da Unreal que deixa as luzes estáticas mais bonitas e sem manchas escuras antes da entrega.`,
    `Apresentação — momento em que o aluno mostra a cena aos colegas e explica suas escolhas, treinando comunicação e orgulho do próprio trabalho.`,
  ],
  treinamento: `## O que o professor precisa saber

Esta aula não cria recursos novos: ela revisa, testa e finaliza a cena que o aluno vem montando o mês inteiro. Você não precisa dominar a Unreal nem C++ para conduzi-la; basta saber onde ficam quatro coisas no editor. O botão Play fica na barra superior, no centro (atalho Alt+P) e roda a cena dentro do editor, o chamado Play in Editor. O painel World Outliner, à direita, lista todos os objetos e luzes da cena. O menu Build, no topo, tem a opção Build Lighting Only, que recalcula a iluminação. E o High Resolution Screenshot fica na setinha ao lado do botão de captura da viewport (canto superior esquerdo da janela 3D), usado para tirar a foto em alta qualidade do portfólio. Antes da aula, abra o projeto de exemplo, aperte Play, teste a interação, saia do Play com Esc e tire um screenshot para já estar familiarizado com o caminho.

## Passo a passo da aula (ritmo 10/15/25/10)

Aquecimento (10 min): peça que todos abram o próprio projeto e apertem Play (Alt+P) para rever a cena no modo Play in Editor. Cada aluno anda pela cena por um minuto e responde no checklist: a luz está boa? Os objetos estão no lugar? A interação funciona? Saia do Play com a tecla Esc. No World Outliner, à direita, confira que as luzes e os modelos importados do Maya estão todos lá.

Conteúdo novo guiado (15 min): no projetor, abra o exemplo e mostre o fluxo de finalização. Primeiro o teste: clique em Play, mostre a interação funcionando (por exemplo, uma luz que acende ao apertar uma tecla), saia com Esc. Depois o polimento: selecione uma luz no World Outliner e, no painel Details à direita, ajuste a propriedade Intensity para suavizar. Em seguida vá no menu Build e escolha Build Lighting Only para recalcular a iluminação. Por fim, abra a setinha ao lado do ícone de captura da viewport, escolha High Resolution Screenshot, defina o multiplicador 2 e clique em Capture; mostre onde o arquivo é salvo (pasta Saved/Screenshots do projeto).

Mão na massa (25 min): cada aluno percorre o checklist na própria cena. Testa a interação no Play, ajusta ao menos uma luz pelo Intensity no painel Details, reposiciona qualquer objeto fora do lugar e roda o Build Lighting Only. Depois tira pelo menos dois screenshots em alta resolução de ângulos diferentes e salva na pasta do portfólio. Circule pela sala ajudando a achar o painel certo e lembrando de salvar o projeto com Ctrl+S.

Desafio e compartilhar (10 min): cada aluno faz uma apresentação curta no projetor, mostrando a cena no Play, contando o maior desafio e o que mais gostou. A turma faz um comentário positivo para cada colega.

## Como explicar de forma clara (linguagem para a idade)

Compare a finalização com terminar um quarto antes de receber visita: a mobília já está lá, agora é arrumar a luz, tirar a poeira e deixar bonito. Diga que apertar Play é como entrar de verdade na cena para ver se tudo funciona, e que o Esc é a porta de saída. Explique o screenshot como a foto que você tira de algo do qual tem orgulho: ele vai para o portfólio, que é o álbum de conquistas que o aluno leva para a vida. Sobre a apresentação, reforce que mostrar o próprio trabalho e explicar as escolhas é uma habilidade tão importante quanto saber mexer na engine, e que todo profissional de games faz isso.

## Erros comuns e como ajudar

O erro mais comum é esquecer de sair do modo Play antes de tentar editar: lembre que, com a cena rodando, mudanças não são salvas; o Esc volta para o modo de edição. Outro é deixar a iluminação com manchas escuras por não rodar o Build Lighting Only depois de mexer nas luzes; mostre o menu Build. Muitos exageram na Intensity e estouram a cena de branco; oriente a mudar de pouco em pouco e ver o resultado. Há quem tire screenshot do editor com os painéis abertos, em vez da cena limpa; mostre o High Resolution Screenshot, que captura só a imagem 3D. Por fim, alguns ficam tímidos na apresentação; combine antes três frases simples (o que é, o maior desafio, o que mais gostou) para guiar a fala.`,
  exercicios: [
    {
      titulo: `Teste final no Play`,
      tipo: `Prática na ferramenta`,
      tempo: `5 min`,
      guiaProfessor: `Garanta que cada aluno saiba apertar Play (Alt+P) e sair com Esc. Reforce que a interação criada nas aulas de Blueprints precisa ser testada de verdade, não só olhada.`,
      atividade: `Aperte Play para entrar na sua cena. Ande por ela, teste a interação que você criou (por exemplo, apertar a tecla que acende a luz ou abre a porta) e veja se tudo funciona. Saia do Play com Esc e marque no checklist o que funcionou e o que precisa de ajuste.`,
      gabarito: `O aluno entra no modo Play in Editor, percorre a cena e aciona a interação criada nas aulas anteriores. Sai do Play com Esc e preenche o checklist apontando ao menos um item que funciona e, se houver, um que precisa de ajuste, como a luz forte demais ou a interação que não responde.`,
    },
    {
      titulo: `Ajustando uma luz`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Mostre como selecionar uma luz no World Outliner e localizar a propriedade Intensity no painel Details. Oriente a mudar o valor aos poucos e lembre de rodar o Build Lighting Only depois.`,
      atividade: `No painel World Outliner, clique em uma luz da sua cena. No painel Details, encontre a propriedade Intensity e mude o valor para deixar a cena mais agradável, nem escura nem estourada de branco. Depois vá no menu Build e escolha Build Lighting Only. Salve com Ctrl+S.`,
      gabarito: `O aluno seleciona uma luz pelo World Outliner, altera a propriedade Intensity no painel Details para um valor equilibrado e roda o Build Lighting Only pelo menu Build, deixando a iluminação sem manchas escuras. O projeto é salvo com Ctrl+S e a cena fica visivelmente mais bem iluminada do que antes.`,
    },
    {
      titulo: `Screenshots para o portfólio`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Mostre a setinha ao lado do ícone de captura da viewport e a opção High Resolution Screenshot. Ensine a escolher bons ângulos, como um fotógrafo, e indique onde os arquivos são salvos (pasta Saved/Screenshots).`,
      atividade: `Posicione a câmera da viewport em um ângulo bonito da sua cena. Abra o High Resolution Screenshot, defina o multiplicador 2 e clique em Capture. Repita em outro ângulo. Salve pelo menos duas imagens na pasta do portfólio.`,
      gabarito: `O aluno usa o High Resolution Screenshot com multiplicador 2 e gera ao menos duas imagens em alta resolução, de ângulos diferentes, que mostram a cena limpa sem os painéis do editor. As imagens são salvas na pasta do portfólio (Saved/Screenshots ou a pasta compartilhada combinada).`,
    },
    {
      titulo: `Checklist de finalização`,
      tipo: `Desafio`,
      tempo: `8 min`,
      guiaProfessor: `Entregue o checklist com os quatro itens: iluminação, posicionamento, interação e performance. Oriente a corrigir um problema por vez e testar logo depois no Play.`,
      atividade: `Percorra o checklist de finalização na sua cena: a iluminação está boa, os objetos estão bem posicionados, a interação funciona e o jogo roda sem travar? Escolha um problema que ainda restou e corrija. Rode o Play para confirmar que sumiu.`,
      gabarito: `O aluno confere os quatro itens do checklist e identifica ao menos um problema restante (por exemplo, um objeto flutuando ou uma luz fraca). Corrige esse problema na cena, testa no modo Play e confirma que foi resolvido, marcando o item como concluído no checklist.`,
    },
    {
      titulo: `Apresentação da cena`,
      tipo: `Apresentação`,
      tempo: `9 min`,
      guiaProfessor: `Organize a ordem das apresentações no quadro. Combine antes três pontos para cada fala: o que é a cena, o maior desafio e o que mais gostou. Garanta que a turma faça um comentário positivo para cada colega.`,
      atividade: `Apresente a sua cena no projetor. Rode o Play para a turma ver a interação, conte o que você construiu, qual foi o maior desafio do mês e o que você mais gostou de fazer na Unreal. Ouça os comentários dos colegas.`,
      gabarito: `O aluno mostra a cena no modo Play diante da turma e explica, em poucas frases, o que construiu, o maior desafio e o que mais gostou, usando termos como cena, Play, iluminação e interação. A turma oferece pelo menos um comentário positivo, fechando com clareza a etapa 2 de 4 do projeto do ano.`,
    },
  ],
};
