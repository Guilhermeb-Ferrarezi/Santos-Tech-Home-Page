import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Refinando e Variando os Clipes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Melhorar os clipes fracos por regeneração e ajuste de prompt e criar variações dos melhores takes, selecionando o que serve e descartando o que está repetido para abastecer o projeto com vídeos suficientes e de boa qualidade.`,
  descricao: `Nesta aula, os alunos param de só gerar vídeos novos e começam a refinar o que já têm. Até agora, eles aprenderam a escrever prompts, dirigir a câmera e criar cenas em movimento no Veo (a geração de vídeo por IA dentro do Gemini). Agora chega o momento de olhar com olho crítico para o material: separar os clipes que ficaram bons dos que ficaram fracos, e decidir o que fazer com cada um. Refinar é o trabalho de quem leva a sério: nem todo clipe sai pronto na primeira tentativa, e isso é normal.

A ideia central é a regeneração. Quando um clipe fica estranho (uma mão deformada, um movimento travado, uma cor errada), o aluno não joga fora a ideia: ele ajusta o prompt e gera de novo. Pequenas mudanças no texto do prompt mudam muito o resultado. Trocar uma palavra, acrescentar um detalhe de luz ou de câmera, ou pedir um movimento mais lento já pode resolver o problema. O aluno aprende que o prompt é como uma receita que a gente vai temperando até ficar do jeito certo.

O segundo conceito é a variação. Um clipe que ficou ótimo pode render irmãos: gerando de novo com pequenas mudanças, o aluno cria várias versões do mesmo take (ângulos diferentes, climas diferentes, velocidades diferentes). Ter variações dá liberdade na hora de montar o jogo, porque o aluno escolhe a melhor entre várias parecidas. Mas variação demais vira bagunça: por isso esta aula também ensina a descartar. O aluno compara os clipes parecidos, escolhe o melhor (o melhor take) e apaga os repetidos.

Ao final, cada aluno terá feito uma curadoria do próprio material: clipes fracos regenerados, takes bons com variações, e os repetidos descartados. O resultado é um conjunto mais enxuto e mais forte, pronto para alimentar o Banco de Vídeos do mês. Não se trata de ter muitos clipes, e sim de ter os clipes certos.`,
  materiais: [
    `Computadores com acesso ao Gemini + Veo (geração de vídeo por IA), um por aluno, com login feito antes da aula`,
    `Conta Google com o Gemini liberado para gerar vídeo no Veo (verificar o acesso antes da aula)`,
    `Projetor ou TV para o professor demonstrar a regeneração e a variação passo a passo na tela`,
    `Pasta de exemplo com 6 a 8 clipes já gerados nas aulas anteriores, sendo alguns propositalmente fracos (movimento travado, objeto deformado)`,
    `Folha de curadoria impressa (uma tabela simples com colunas: clipe, nota de 1 a 5, manter ou regenerar, o que ajustar)`,
    `Fones de ouvido para cada aluno avaliar os clipes sem atrapalhar a turma`,
    `Slide com exemplos de prompts antes e depois (versão fraca e versão melhorada do mesmo clipe)`,
  ],
  conceitosChave: [
    `Regenerar — gerar o clipe de novo, em vez de aceitar o resultado fraco, usando o mesmo prompt ou uma versão ajustada dele.`,
    `Variação — criar versões diferentes de um clipe bom mudando pouca coisa no prompt (ângulo, luz, velocidade ou clima).`,
    `Take — cada tentativa de um mesmo clipe; o melhor take é a versão que vamos manter.`,
    `Curadoria — o trabalho de olhar todos os clipes, dar nota, escolher os melhores e descartar os repetidos.`,
    `Ajuste de prompt — mudar palavras do prompt para corrigir um defeito ou puxar o resultado para outro caminho.`,
    `Descartar — apagar de propósito os clipes repetidos ou fracos, deixando só o que serve ao projeto.`,
    `Semente (seed) — o número que define o ponto de partida da geração; manter a semente repete o estilo, trocar a semente traz um resultado novo.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa dominar a IA para dar esta aula. O foco é simples: olhar clipes, decidir quais melhorar e gerar de novo com pequenas mudanças. No Gemini, a geração de vídeo do Veo aparece na caixa de mensagem (o prompt), onde você digita o pedido, e às vezes em um seletor de ferramenta ou modelo perto da caixa (procure por "Veo" ou pelo ícone de vídeo). Depois de gerar, cada clipe mostra botões úteis: um menu de três pontos ou um botão "Gerar novamente" (regenerar), e a opção de baixar (download). Para refinar, a gente reescreve o prompt e envia outra vez; para variar, a gente muda pouca coisa e envia de novo. Lembre que a IA leva alguns segundos para gerar, então o ritmo da sala precisa prever essa espera.

## Passo a passo da aula

Aquecimento (10 min): Mostre no projetor dois clipes da pasta de exemplo: um bom e um fraco. Pergunte à turma o que está errado no fraco (movimento travado? mão estranha? cor feia?). Anote as queixas no quadro. Conduza a ideia: clipe fraco não se joga fora, se conserta. Apresente as três saídas de hoje: regenerar, variar e descartar.

Conteúdo novo guiado (15 min): No Gemini, abra um clipe fraco e mostre o prompt original na caixa de mensagem. Faça um ajuste de prompt ao vivo: acrescente um detalhe (por exemplo, "movimento lento e suave da câmera, luz suave") e envie de novo clicando no botão de enviar (a seta). Quando o novo clipe aparecer, compare com o antigo no projetor. Depois, pegue um clipe bom e crie uma variação: mude só uma palavra (troque "dia" por "fim de tarde") e gere de novo. Mostre o botão de baixar (download) para guardar o melhor take na pasta do aluno.

Mão na massa (25 min): Cada aluno preenche a folha de curadoria dando nota de 1 a 5 para os próprios clipes. Em seguida, escolhe os dois mais fracos e regenera cada um com um ajuste de prompt. Depois, pega o melhor clipe e cria duas variações dele. Por fim, compara os parecidos, escolhe o melhor take e apaga os repetidos. Circule pela sala ajudando nos ajustes de prompt e lembrando de baixar os bons.

Desafio + compartilhar (10 min): Cada aluno mostra ao colega do lado um "antes e depois" (o clipe fraco e a versão regenerada). Dois ou três voluntários apresentam no projetor e contam qual palavra mudaram para melhorar.

## Como explicar de forma clara

Use comparações do dia a dia. Diga que regenerar é como tirar outra foto quando a primeira saiu tremida: mesma ideia, nova tentativa. Variar é como provar o mesmo prato em sabores diferentes. Curadoria é como montar um time: você não leva todo mundo, leva os melhores. Fale que o prompt é uma receita que a gente tempera: um detalhe a mais muda o gosto. Mostre sempre antes de pedir para fazer, e diga em voz alta o nome dos botões ("Gerar novamente", "Baixar") enquanto aponta na tela. Evite termos difíceis; prefira "gerar de novo" a "regenerar" quando perceber que travou.

## Erros comuns e como ajudar

O erro mais comum é mudar o prompt inteiro de uma vez: aí o aluno não sabe o que melhorou. Oriente a mudar uma coisa por vez. Outro erro é gerar sem parar e esquecer de baixar os bons; lembre-os de salvar o melhor take antes de continuar. Muitos confundem variação com repetição: explique que variação muda algo de propósito, repetição é o mesmo clipe duas vezes. Alguns ficam com pena de descartar; reforce que apagar os repetidos deixa o banco mais forte. Por fim, há quem espere o clipe perfeito na primeira tentativa; mostre que duas ou três regenerações é o normal e faz parte do trabalho.`,
  exercicios: [
    {
      titulo: `Dando nota aos clipes`,
      tipo: `prática na ferramenta`,
      tempo: `6 minutos`,
      guiaProfessor: `Entregue a folha de curadoria e mostre como assistir cada clipe inteiro antes de dar nota. Garanta que cada aluno marque "manter" ou "regenerar" para todos os clipes.`,
      atividade: `Assista a todos os seus clipes, dê uma nota de 1 a 5 para cada um na folha de curadoria e marque se vai manter ou regenerar.`,
      gabarito: `A folha está completa: todos os clipes têm nota de 1 a 5 e a decisão (manter ou regenerar). Os clipes com defeito claro receberam nota baixa e foram marcados para regenerar.`,
    },
    {
      titulo: `Consertar com um ajuste`,
      tipo: `prática na ferramenta`,
      tempo: `7 minutos`,
      guiaProfessor: `Mostre onde fica o prompt na caixa de mensagem do Gemini e o botão de enviar. Insista em mudar só um detalhe por vez para o aluno perceber o efeito.`,
      atividade: `Pegue o seu clipe mais fraco, acrescente um único detalhe ao prompt (por exemplo, movimento mais lento ou luz suave) e gere de novo no Veo.`,
      gabarito: `Existe uma versão regenerada do clipe fraco, com apenas um detalhe mudado no prompt. O aluno consegue dizer qual palavra acrescentou e que defeito tentou corrigir.`,
    },
    {
      titulo: `Três irmãos do mesmo take`,
      tipo: `desafio`,
      tempo: `6 minutos`,
      guiaProfessor: `Escolha com o aluno um clipe bom. Incentive variações com mudança única e clara (clima, ângulo ou velocidade). Lembre de baixar cada variação que ficar boa.`,
      atividade: `A partir do seu melhor clipe, crie três variações mudando uma coisa em cada uma (por exemplo: fim de tarde, câmera mais alta, movimento mais rápido).`,
      gabarito: `Há três variações do mesmo take, cada uma com uma mudança diferente e perceptível. As três se parecem com o original, mas nenhuma é idêntica à outra.`,
    },
    {
      titulo: `Curadoria em dupla`,
      tipo: `em dupla`,
      tempo: `5 minutos`,
      guiaProfessor: `Forme duplas. Oriente que cada um avalie os clipes do colega com olho neutro, indicando qual take manter e quais repetidos descartar, sem julgar a pessoa.`,
      atividade: `Troque com o colega, assista aos clipes parecidos dele e ajude a escolher o melhor take de cada grupo e a apagar os repetidos.`,
      gabarito: `A dupla escolheu, junto, o melhor take de pelo menos um grupo de clipes parecidos e apagou os repetidos. O aluno explica por que aquele take ficou melhor que os outros.`,
    },
    {
      titulo: `Mini lote para o banco`,
      tipo: `projeto curto`,
      tempo: `6 minutos`,
      guiaProfessor: `Peça uma meta clara: terminar com pelo menos cinco clipes fortes e baixados, prontos para o banco. Confira a pasta de cada aluno ao final e a folha de curadoria atualizada.`,
      atividade: `Reúna os seus melhores clipes (regenerados e variações), baixe cada um e organize na pasta do projeto, deixando ao menos cinco clipes fortes prontos para o Banco de Vídeos.`,
      gabarito: `A pasta do aluno tem pelo menos cinco clipes baixados, sem repetidos óbvios, com qualidade boa. A folha de curadoria reflete o que foi mantido e o que foi descartado.`,
    },
  ],
};
