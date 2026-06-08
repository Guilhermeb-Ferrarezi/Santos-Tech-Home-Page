import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 5,
  titulo: "Gerando vários clipes",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Entrar em produção em série e gerar, de forma organizada e bem nomeada, todos os clipes que faltam do roteiro, acompanhando o que funcionou e marcando o que precisa ser refeito.`,
  descricao: `Até agora cada aluno trabalhou cena por cena, com calma, descrevendo um momento de cada vez. Nesta aula a turma muda de marcha: deixa de produzir um clipe isolado e entra na produção em série, gerando vários clipes do roteiro um atrás do outro, como uma pequena linha de montagem. O objetivo não é fazer um vídeo perfeito hoje, e sim ter na mão todo o material bruto das cenas, pronto para a aula 6 escolher os melhores.

Produzir vários clipes sem se perder exige organização. Por isso a palavra-chave da aula é nomear. Cada vez que o aluno manda o Sora gerar um vídeo, ele dá àquele resultado um nome claro, ligado ao roteiro: por exemplo, Cena 1 take A, Cena 1 take B, Cena 2 take A. Assim, quando tiver dez ou doze clipes baixados na pasta, ele sabe na hora qual é qual, sem precisar abrir vídeo por vídeo para descobrir. É a mesma lógica de um estúdio de verdade, onde cada gravação tem um nome e um número.

Outra ideia central é a folha de acompanhamento. Enquanto gera, o aluno marca numa tabelinha simples o que achou de cada clipe: deu certo, ficou mais ou menos, ou precisa refazer. Esse registro transforma a geração, que pode parecer só "apertar botão e esperar", num trabalho de diretor que observa, anota e decide. No fim da aula, o aluno consegue olhar a folha e dizer com segurança quantas cenas já estão resolvidas e quantas voltam para a fila.

Tecnicamente, a aula reforça hábitos que vão acompanhar o aluno o mês inteiro: usar o mesmo prompt da cena com pequenas variações para conseguir takes diferentes, esperar a fila do Sora sem ficar mandando o mesmo pedido várias vezes, e baixar e renomear cada clipe assim que fica pronto. Não é uma aula de prompt novo, é uma aula de método: gerar bastante, guardar direito e saber o que já tem.`,
  materiais: [
    `Computadores (até 10), um por aluno, com o navegador aberto no ChatGPT já logado e com acesso ao Sora (sora.com ou o painel de vídeo do ChatGPT) na conta da escola`,
    `Projetor ou TV no computador do professor para mostrar ao vivo a tela do Sora: o campo de prompt, a fila de geração e o botão de baixar (Download)`,
    `O roteiro e as descrições de cena que cada aluno escreveu nas aulas 3 e 4 (no caderno ou em arquivo), para saber quais cenas ainda faltam gerar`,
    `Uma pasta criada no computador para cada aluno (por exemplo "Cenas_Nome") onde os clipes baixados serão salvos e renomeados`,
    `A folha de acompanhamento impressa (uma tabela com colunas: Cena, Take, Nome do arquivo, Resultado, Refazer?) ou a mesma tabela num documento simples`,
    `Fones de ouvido por aluno para revisar os clipes sem atrapalhar a turma, já que vários vídeos tocam ao mesmo tempo`,
    `Clipes de exemplo do professor já nomeados (Cena1_takeA, Cena1_takeB) para mostrar como fica uma pasta organizada de verdade`,
  ],
  conceitosChave: [
    `Produção em série — gerar vários clipes seguidos, de forma organizada, em vez de um vídeo isolado por vez.`,
    `Take — cada tentativa de gerar a mesma cena; o take A e o take B são versões diferentes do mesmo momento.`,
    `Nomear (renomear) — dar a cada clipe um nome claro ligado ao roteiro, como Cena2_takeA, para achar o vídeo certo depois.`,
    `Fila de geração — a lista de pedidos que o Sora processa um de cada vez; enquanto um vídeo é criado, os outros esperam a vez.`,
    `Folha de acompanhamento — tabela simples onde o aluno anota, clipe por clipe, se deu certo ou se precisa refazer.`,
    `Material bruto — o conjunto de todos os clipes gerados, ainda sem escolha nem edição, que será filtrado nas próximas aulas.`,
    `Variação de prompt — pequena mudança no comando da cena (uma palavra, um detalhe) para conseguir um take diferente sem mudar a ideia.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser especialista em Sora para dar esta aula; precisa entender o fluxo de gerar muitos clipes sem bagunça. No ChatGPT, o Sora aparece no painel de vídeo (em sora.com ou no menu do ChatGPT). O caminho é sempre o mesmo: você cola a descrição da cena no campo de prompt, clica em criar (o botão pode aparecer como "Create video" ou uma seta de enviar), e o vídeo entra na fila de geração. Cada clipe leva de alguns segundos a alguns minutos. Quando fica pronto, passe o mouse sobre o vídeo e clique no botão de baixar (Download, ícone de seta para baixo). O arquivo cai na pasta de Downloads com um nome automático esquisito; o aluno então renomeia para algo claro.

A ideia mais importante de hoje é método, não comando novo. Antes da aula, crie a pasta de cada aluno e tenha a folha de acompanhamento pronta. Combine um padrão de nome com a turma, por exemplo Cena1_takeA. Treine você mesmo gerar dois takes da mesma cena para chegar seguro. Lembre que o Sora tem limite de gerações na conta: oriente os alunos a não disparar o mesmo pedido várias vezes só por ansiedade enquanto a fila roda.

## Passo a passo da aula (ritmo 10/15/25/10)

1. Aquecimento e revisão (10 min): Retome o roteiro. Pergunte "quantas cenas você já gerou e quantas faltam?". No projetor, abra o Sora e mostre rapidamente um clipe que você já fez, apontando o campo de prompt e a fila.

2. Conteúdo novo guiado (15 min): Demonstre a produção em série. Cole a descrição da Cena 1 no campo de prompt, clique em "Create video" e mostre o clipe entrando na fila. Sem esperar parado, cole a Cena 2 e gere também. Quando a primeira ficar pronta, baixe (Download) e renomeie o arquivo para Cena1_takeA na pasta. Mostre a folha de acompanhamento e marque ali "deu certo" ou "refazer".

3. Mão na massa (25 min): Cada aluno gera os clipes que faltam das suas cenas. A regra: para cada cena, mandar pelo menos dois takes (take A e take B, com uma pequena variação no prompt), baixar cada um e renomear na hora. A cada clipe baixado, preencher uma linha da folha. Circule lembrando de nomear antes de gerar o próximo e de não repetir o mesmo pedido enquanto a fila roda.

4. Desafio e compartilhar (10 min): Em roda, cada aluno diz quantos clipes tem na pasta e mostra a folha: quantas cenas estão resolvidas e quantas voltam para refazer na aula 6. Comemore quem organizou bem, não só quem gerou mais.

## Como explicar de forma clara (linguagem para a idade)

Para adolescentes de 10 a 15 anos, compare com um estúdio de cinema: "diretor de verdade grava a mesma cena várias vezes, esses são os takes, e depois escolhe o melhor". Explique a pasta como um armário de gavetas etiquetadas: "se você jogar tudo numa pilha sem nome, depois não acha nada". Use a imagem da fila do lanche para a fila de geração: "cada pedido espera a vez, ficar empurrando não faz andar mais rápido". E trate a folha de acompanhamento como o caderno do diretor, onde ele anota o que prestou e o que não prestou.

## Erros comuns e como ajudar

O erro mais comum é baixar vários clipes e não renomear, deixando nomes automáticos; depois ninguém sabe qual é qual. Insista: nomeou, só então gera o próximo. Outro erro é mandar o mesmo pedido três ou quatro vezes por achar que travou, gastando a cota da conta; mostre a fila e ensine a esperar. Há quem queira só um take perfeito e pule a ideia de gerar o take B; lembre que ter opções é o que torna a aula 6 possível. Alguns esquecem de preencher a folha e perdem o controle do que já têm; pare a turma no meio e peça que todos atualizem a tabela. Por fim, evite que o aluno fique mudando a ideia da cena: hoje a variação é pequena, só para conseguir um take diferente, não para reescrever o roteiro.`,
  exercicios: [
    {
      titulo: `Dois Takes da Mesma Cena`,
      tipo: `Prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Peça que cada aluno escolha uma cena já descrita e gere dois takes no Sora: cole a descrição, clique em "Create video", e depois gere de novo mudando só uma palavra ou detalhe. Reforce que é a mesma cena, só duas tentativas. Circule conferindo se de fato saíram dois clipes parecidos, e não duas cenas diferentes.`,
      atividade: `Escolha uma cena do seu roteiro. Cole a descrição no Sora e gere o take A. Depois mude só um detalhe pequeno do comando e gere o take B. Você deve terminar com dois clipes da mesma cena.`,
      gabarito: `O aluno gerou dois clipes da mesma cena (take A e take B) com apenas uma pequena variação no prompt, mantendo a ideia original. Acertou quem entendeu que take é tentativa, não cena nova, e produziu duas versões reconhecíveis do mesmo momento.`,
    },
    {
      titulo: `Pasta Etiquetada`,
      tipo: `Prática na ferramenta`,
      tempo: `10 min`,
      guiaProfessor: `Oriente cada aluno a baixar (Download) os clipes que já gerou e renomear cada arquivo no padrão combinado, por exemplo Cena1_takeA, Cena1_takeB, dentro da pasta dele. Mostre na sua tela como passar o mouse no vídeo, clicar em baixar e depois renomear o arquivo. Confira se os nomes batem com o roteiro.`,
      atividade: `Baixe os clipes que você já tem e salve na sua pasta. Renomeie cada um seguindo o padrão Cena_take, por exemplo Cena1_takeA. No fim, abra a pasta e confira se você entende, só pelo nome, qual clipe é cada um.`,
      gabarito: `Os arquivos da pasta seguem o padrão Cena_take e correspondem às cenas do roteiro, sem nomes automáticos. Acertou quem consegue identificar cada clipe só pelo nome, provando que a pasta está organizada e pronta para as próximas aulas.`,
    },
    {
      titulo: `Linha de Montagem do Roteiro`,
      tipo: `Projeto curto`,
      tempo: `14 min`,
      guiaProfessor: `Agora a produção em série de verdade: o aluno gera os clipes que faltam das suas cenas, ao menos dois takes por cena, baixando e renomeando cada um assim que fica pronto. A cada clipe, ele preenche uma linha da folha de acompanhamento. Circule lembrando de nomear antes de gerar o próximo e de não disparar o mesmo pedido enquanto a fila roda.`,
      atividade: `Gere os clipes que ainda faltam do seu roteiro, pelo menos dois takes por cena. Assim que cada vídeo ficar pronto, baixe, renomeie e anote na folha. Trabalhe como uma linha de montagem: gerar, baixar, nomear, anotar.`,
      gabarito: `O aluno gerou os clipes restantes (dois takes por cena), baixou e renomeou cada um, e registrou todos na folha. Acertou quem manteve o fluxo organizado do começo ao fim, terminando com o material bruto das cenas salvo e identificado.`,
    },
    {
      titulo: `Conferência de Pastas em Dupla`,
      tipo: `Em dupla`,
      tempo: `10 min`,
      guiaProfessor: `Forme duplas para revisão cruzada. Um aluno abre a pasta e a folha do colega e tenta, só pelos nomes, dizer qual clipe é qual e quais cenas faltam. Depois trocam. O objetivo é testar se a organização do outro está clara para alguém de fora. Oriente a darem uma dica de melhoria gentil.`,
      atividade: `Em dupla, abra a pasta e a folha do seu colega. Só olhando os nomes dos arquivos e a tabela, diga quais cenas ele já resolveu e quais faltam. Depois troquem e deem uma dica um ao outro para deixar a organização mais clara.`,
      gabarito: `Cada aluno conseguiu entender a pasta do colega apenas pelos nomes e pela folha, identificando cenas prontas e pendentes, e deu uma sugestão útil. Acertou a dupla cuja organização ficou clara para uma pessoa de fora, mostrando que a nomeação funciona.`,
    },
    {
      titulo: `Decisão de Diretor: o que refazer`,
      tipo: `Roda de conversa`,
      tempo: `8 min`,
      guiaProfessor: `Sente a turma em roda. Cada aluno, com a folha na mão, mostra quantas cenas ficaram boas e escolhe uma que vai refazer na aula 6, explicando o motivo (ficou tremida, não combinou com a ideia, faltou um detalhe). Conduza para que a decisão seja baseada na folha e no que ele viu nos clipes, não em achismo. Conecte com a próxima aula.`,
      atividade: `Na sua vez, mostre a folha de acompanhamento e diga quantas cenas já estão boas. Escolha uma cena que você vai refazer na próxima aula e explique, em uma frase, por que ela precisa de um novo take.`,
      gabarito: `O aluno usou a folha para dizer quantas cenas estão resolvidas e apontou pelo menos uma para refazer, com uma justificativa concreta ligada ao que viu no clipe. Acertou quem decidiu como um diretor, baseado no registro, deixando claro o plano para a aula 6.`,
    },
  ],
};
