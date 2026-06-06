import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Refazendo e escolhendo os melhores",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Ensinar o aluno a olhar com olhar crítico para os clipes que o Sora gerou, regerar os fracos com prompts melhores e montar a coleção final de clipes aprovados na ordem do roteiro, pronta para a edição.`,
  descricao: `Nesta aula o aluno deixa de apenas "gerar vídeo" e passa a curar vídeo. Nas aulas anteriores ele escreveu o roteiro, descreveu cada cena e pediu ao Sora vários clipes. Agora chegou a hora mais importante e menos óbvia: escolher. Nem todo clipe que a inteligência artificial cria fica bom. Alguns saem tortos, com mãos estranhas, movimento esquisito ou cenário diferente do que foi pedido. Selecionar os melhores e refazer os fracos é o que separa um amontoado de vídeos de um material de vídeo de verdade.

O coração da aula é o ciclo "olhar, decidir, refazer". O aluno abre cada cena, assiste aos clipes que tem, compara lado a lado e decide: este aqui está bom o suficiente para o jogo, ou preciso de uma versão melhor? Quando um clipe não passa, ele não joga fora a ideia: ele ajusta o prompt (muda uma palavra, acrescenta um detalhe, troca o ângulo) e pede ao Sora para gerar de novo. Refazer com prompt ajustado quase sempre dá um resultado melhor do que apertar "gerar" repetindo o mesmo texto.

Para adolescentes de 10 a 15 anos, este é o momento de virar diretor do próprio material. Eles vão aprender que ter critério é uma habilidade: definir o que é "bom o bastante", saber por que um clipe foi reprovado e conseguir dizer em palavras o que precisa mudar. Isso desenvolve senso estético, paciência e a capacidade de dar e receber opinião sobre um trabalho. Como cada geração no Sora leva tempo e consome créditos, escolher bem também ensina a não desperdiçar: refazer só o que precisa, e refazer com intenção.

Ao final da aula, cada aluno deve ter, para cada cena do roteiro, uma melhor versão escolhida e marcada, com os clipes fracos regerados pelo menos uma vez. O resultado é a coleção final de clipes aprovados, organizada na ordem do roteiro. Essa coleção é a matéria-prima das próximas aulas, quando o aluno vai organizar o material (Aula 7) e fazer a entrega do mês (Aula 8). Sem uma boa seleção agora, a edição depois fica impossível.`,
  materiais: [
    `Computadores (até 10) com navegador atualizado, login feito no ChatGPT e acesso ao Sora (sora.com ou o painel do Sora dentro do ChatGPT) na conta da escola`,
    `Projetor ou TV ligado no computador do professor para mostrar a biblioteca do Sora, a comparação de clipes e o ajuste de prompt ao vivo`,
    `O roteiro de cada aluno (em papel ou arquivo) e a lista de cenas, das aulas 3 e 4, para conferir a ordem`,
    `Os vários clipes que cada aluno já gerou na Aula 5, salvos na biblioteca do Sora ou baixados em uma pasta com o nome do aluno`,
    `Arquivos de exemplo do professor: dois clipes da mesma cena, um "aprovado" e um "reprovado", para treinar o olhar crítico`,
    `Uma ficha de seleção impressa (uma linha por cena: número da cena, melhor clipe, precisa refazer? sim ou não) para o aluno marcar as escolhas`,
    `Pasta compartilhada ou pen drive para reunir os clipes aprovados de cada aluno ao final`,
  ],
  conceitosChave: [
    `Curadoria — ato de assistir, comparar e escolher os melhores clipes, em vez de aproveitar tudo o que a inteligência artificial gerou.`,
    `Clipe aprovado — o vídeo que ficou bom o bastante para entrar no jogo; é o que vai para a coleção final na ordem do roteiro.`,
    `Regerar — pedir ao Sora um novo vídeo para a mesma cena, geralmente depois de ajustar o prompt, buscando uma versão melhor.`,
    `Ajuste de prompt — mudar palavras do comando (acrescentar detalhe, trocar ângulo, corrigir algo) para que o próximo clipe saia melhor.`,
    `Critério de seleção — a regra combinada para dizer se um clipe passa ou não (nítido, movimento natural, cena igual ao roteiro, sem erros feios).`,
    `Artefato — defeito visual que a inteligência artificial às vezes cria, como mãos tortas, rostos derretidos ou objetos que mudam de forma.`,
    `Coleção final — o conjunto dos melhores clipes, um por cena, organizados na ordem do roteiro e prontos para a edição.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Sora para conduzir esta aula, mas precisa saber navegar na biblioteca dele. Depois de fazer login no ChatGPT e abrir o Sora (em sora.com ou no painel do Sora), procure a área onde ficam todos os vídeos já gerados — costuma se chamar "Library" (Biblioteca) ou aparecer como uma grade de miniaturas na página inicial. Clique numa miniatura para abrir o clipe em tamanho grande e dar play. Para gerar de novo, há um botão de "Remix", "Re-cut" ou simplesmente um campo de prompt embaixo do vídeo onde você reescreve o comando e aperta o botão de criar (o ícone de seta ou "Create"/"Generate"). Os nomes mudam de versão para versão; antes da aula, entre uma vez e localize: a biblioteca, o play, o campo de prompt e o botão de gerar.

O conceito central a transmitir é simples: gerar é fácil, escolher é o trabalho de verdade. Combine com a turma um critério de seleção em quatro perguntas: está nítido? o movimento parece natural? a cena é a que o roteiro pedia? não tem erro feio (mão torta, rosto estranho, objeto que some)? Se as quatro respostas forem sim, o clipe está aprovado.

Sobre refazer: ajustar o prompt antes de gerar de novo é o segredo. Mude uma coisa por vez (um detalhe, um ângulo, uma palavra de estilo) para entender o que melhorou. Repetir o mesmo prompt clicando "gerar" várias vezes desperdiça tempo e créditos.

## Passo a passo da aula (ritmo 10/15/25/10, onde clicar no Sora)

1. Aquecimento e revisão (10 min): Receba a turma e relembre a Aula 5: "vocês geraram vários clipes; hoje vamos escolher os melhores". No projetor, abra a Biblioteca do Sora e mostre os dois clipes de exemplo da mesma cena. Pergunte: "qual é melhor e por quê?". Anote as palavras dos alunos.

2. Conteúdo novo guiado (15 min): Apresente o critério das quatro perguntas (nítido, movimento natural, igual ao roteiro, sem erro feio). Aplique-o ao vivo nos dois exemplos e mostre por que um é aprovado e o outro reprovado. Em seguida, pegue o reprovado, abra o campo de prompt embaixo do vídeo, ajuste uma palavra (por exemplo, troque "mão segurando a espada" por "as duas mãos segurando o cabo da espada") e clique em "Create"/"Generate" para gerar de novo. Mostre que a versão nova tende a ficar melhor.

3. Mão na massa (25 min): Cada aluno abre a própria Biblioteca, assiste aos clipes cena por cena com o roteiro ao lado e usa a ficha de seleção. Para cada cena, marca a melhor versão e decide se precisa refazer. Onde reprovar, ajusta o prompt e regenera. Circule perguntando "por que reprovou?" e ajudando a colocar o defeito em palavras antes de refazer.

4. Desafio e compartilhar (10 min): Peça que cada aluno mostre à turma um clipe que melhorou ao refazer (versão antiga x versão nova) e diga o que mudou no prompt. Confira que cada um tem a ficha preenchida com uma melhor versão por cena. Combine que na próxima aula o material será organizado.

## Como explicar de forma clara (linguagem para a idade)

Use a ideia de diretor de cinema: "o diretor grava a mesma cena várias vezes e fica só com a melhor tomada; hoje vocês são o diretor". Para o critério, transforme as quatro perguntas em um carimbo: "passou nas quatro? carimba de aprovado". Para refazer, use a metáfora do videogame: "errou a fase? não adianta apertar o mesmo botão; muda a estratégia e tenta de novo" — aqui, mudar a estratégia é ajustar o prompt. E valorize ter critério: "saber dizer por que um vídeo está ruim é uma habilidade de profissional, não é só não gostar".

## Erros comuns e como ajudar

O erro mais comum é aprovar tudo, com pressa de terminar. Volte ao critério das quatro perguntas e peça para o aluno justificar cada aprovação. O oposto também acontece: reprovar tudo e nunca se contentar; combine que "bom o bastante para o jogo" não é "perfeito" e ponha um limite de uma ou duas tentativas por cena. Muitos refazem clicando "gerar" sem mudar nada no prompt; pare na hora e mostre que é preciso ajustar uma palavra antes. Outro erro é esquecer o roteiro e escolher o clipe mais bonito mesmo que seja de outra cena; lembre de manter o roteiro ao lado e comparar cena a cena. Por fim, alguns esquecem de marcar a escolha e depois não acham o melhor clipe; reforce o uso da ficha de seleção, anotando qual versão venceu em cada cena.`,
  exercicios: [
    {
      titulo: `Aprovado ou Reprovado?`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `No projetor, mostre o critério das quatro perguntas. Depois, com a Biblioteca do Sora aberta, peça que cada aluno abra um clipe seu, dê play e aplique as quatro perguntas. Ajude quem não souber localizar o botão de play ou voltar à grade de miniaturas.`,
      atividade: `Abra a Biblioteca do Sora, escolha um dos seus clipes e dê play. Aplique as quatro perguntas: está nítido? o movimento é natural? é a cena do roteiro? tem algum erro feio? Diga se ele está aprovado ou reprovado e por quê.`,
      gabarito: `O aluno abriu um clipe na Biblioteca, assistiu e respondeu às quatro perguntas, chegando a uma decisão (aprovado ou reprovado) com pelo menos uma justificativa clara. Saber dizer o porquê, e não só "gostei" ou "não gostei", é o acerto.`,
    },
    {
      titulo: `Caça aos Artefatos`,
      tipo: `Desafio`,
      tempo: `9 min`,
      guiaProfessor: `Explique o que é um artefato (mão torta, rosto estranho, objeto que muda de forma, movimento impossível). Desafie cada aluno a percorrer seus clipes e encontrar artefatos, pausando o vídeo no momento exato do defeito. Mostre como usar a barra de progresso para pausar no frame certo.`,
      atividade: `Vasculhe seus clipes e ache pelo menos dois artefatos: um defeito que a inteligência artificial criou sem querer. Pause o vídeo bem no momento do defeito e descreva o que está errado (por exemplo: "a mão tem seis dedos").`,
      gabarito: `O aluno encontrou e pausou pelo menos dois artefatos diferentes e descreveu cada um em palavras. Identificar o defeito e saber nomeá-lo mostra que desenvolveu o olhar crítico, que é o objetivo do desafio.`,
    },
    {
      titulo: `Refazendo com Prompt Melhor`,
      tipo: `Prática na ferramenta`,
      tempo: `12 min`,
      guiaProfessor: `Escolha com cada aluno um clipe reprovado. Ajude a abrir o campo de prompt embaixo do vídeo (ou o botão "Remix"/"Re-cut"), a ler o prompt antigo e a mudar UMA coisa para corrigir o defeito. Depois é só clicar em "Create"/"Generate" e esperar. Reforce: muda uma coisa por vez, para saber o que melhorou.`,
      atividade: `Pegue um clipe que você reprovou. Leia o prompt que o gerou e mude uma única coisa para corrigir o problema (acrescente um detalhe, troque o ângulo ou ajuste uma palavra). Clique em gerar e compare a versão nova com a antiga.`,
      gabarito: `O aluno ajustou o prompt mudando um elemento ligado ao defeito, gerou um novo clipe e conseguiu comparar antigo x novo. Vale o acerto se a versão nova ficou igual ou melhor e o aluno sabe dizer o que mudou no prompt.`,
    },
    {
      titulo: `Júri em Dupla`,
      tipo: `Em dupla`,
      tempo: `11 min`,
      guiaProfessor: `Forme duplas. Cada aluno mostra ao colega duas versões da mesma cena e o colega, usando as quatro perguntas, vota em qual deve ser aprovada e explica o motivo. Depois trocam. O objetivo é treinar dar e receber opinião com critério, sem ofender.`,
      atividade: `Em dupla, mostre ao colega duas versões de uma cena sua. Ele escolhe qual aprovar usando as quatro perguntas e explica o porquê. Depois inverta: você vira o júri das cenas dele. Anotem em qual ponto concordaram e em qual discordaram.`,
      gabarito: `A dupla comparou versões da mesma cena, cada um votou usando o critério combinado e justificou a escolha. Conseguir defender a decisão com as quatro perguntas, e ouvir a opinião do colega com respeito, é o sucesso da atividade.`,
    },
    {
      titulo: `Minha Coleção Final`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Peça que cada aluno feche a seleção: para cada cena do roteiro, marque na ficha o clipe vencedor e confirme que os reprovados foram regerados ao menos uma vez. Ajude a reunir os clipes aprovados na pasta com o nome do aluno, na ordem do roteiro. Encerre com cada um apresentando uma melhora que conseguiu ao refazer.`,
      atividade: `Complete sua ficha de seleção: para cada cena, marque qual clipe é o melhor e prontidão para a edição. Reúna os clipes aprovados na ordem do roteiro, na sua pasta. Apresente à turma uma cena que ficou melhor depois de você refazer e diga o que mudou.`,
      gabarito: `O aluno tem uma melhor versão escolhida por cena, os clipes fracos foram regerados pelo menos uma vez e a coleção final está reunida na ordem do roteiro. Terminar com a ficha preenchida e a pasta organizada, pronta para a Aula 7, é o objetivo cumprido.`,
    },
  ],
};
