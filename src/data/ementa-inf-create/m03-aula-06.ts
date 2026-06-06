import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 6,
  titulo: "Mini-apps: do texto ao app",
  semana: "Semana 3",
  duracao: "1 hora",
  objetivo: `Criar com o Claude um mini-app interativo (calculadora, quiz ou conversor) dentro de um Artifact e melhorá-lo por etapas até ficar com a cara do aluno.`,
  descricao: `Na aula passada os alunos descobriram os Artifacts: aquele painel que abre do lado direito da conversa e mostra um documento ou uma página pronta. Hoje damos o próximo passo e transformamos texto em algo que funciona de verdade. Em vez de pedir um texto, o aluno vai pedir um mini-app interativo, ou seja, uma pequena página com botões, campos e cálculos que respondem ao clique. Pode ser uma calculadora de gorjeta, um quiz de perguntas e respostas, um sorteador de nomes ou um conversor de moedas. O Claude escreve o código por baixo, mas o aluno não precisa saber programar: ele descreve o que quer em português e vê o resultado aparecer e funcionar na hora.

O coração da aula é a ideia de iteração. Quase nunca o app sai perfeito no primeiro pedido. O aluno olha o resultado, percebe o que falta ou o que está estranho e pede um ajuste: mudar a cor, aumentar o botão, corrigir uma conta errada, acrescentar uma pergunta no quiz. A cada pedido, o Claude atualiza o mesmo Artifact, e o aluno acompanha a evolução lado a lado. É exatamente assim que profissionais constroem software: começam simples e melhoram aos poucos. Aqui o adolescente vive essa experiência sem barreira técnica.

Para o professor, a aula é uma oportunidade de mostrar que conversar bem com a IA é uma habilidade. Um pedido vago gera um app confuso; um pedido claro, com exemplos e regras, gera um app útil. Vamos ensinar os alunos a descrever o app em três partes: o que ele faz, como ele se parece e o que acontece quando alguém clica. Esse roteirinho simples já melhora muito o resultado.

Ao final, cada aluno terá um mini-app testado e personalizado, salvo dentro da conversa. Esse trabalho é a ponte direta para a Aula 8, quando cada um vai montar e apresentar o seu Artifact final do mês. Reforce que o objetivo de hoje não é fazer o app mais complexo, e sim fazer um app que funcione e que o aluno entenda e consiga melhorar sozinho.`,
  materiais: [
    `Computadores (um por aluno) com navegador e o site claude.ai aberto e a conta logada`,
    `Projetor ou tela grande para o professor demonstrar os passos ao vivo`,
    `Conta Claude para cada aluno (login feito antes do início da aula)`,
    `Lista impressa com 4 ideias de mini-app prontas: calculadora de gorjeta, quiz de 5 perguntas, sorteador de nomes e conversor de moedas`,
    `Cartaz ou slide com o roteiro do pedido: O que faz / Como se parece / O que acontece ao clicar`,
    `Caderno ou bloco de notas para anotar os ajustes pedidos a cada rodada`,
    `Cronômetro ou relógio visível para controlar o tempo de cada etapa`,
  ],
  conceitosChave: [
    `Mini-app — pequena página interativa, com botões e campos, que responde ao clique do usuário e faz algo útil.`,
    `Artifact — painel que abre ao lado da conversa no Claude e mostra o app pronto, já funcionando.`,
    `Iterar — melhorar o app em etapas: olhar, perceber o que falta e pedir um ajuste por vez.`,
    `Prévia (preview) — a visão do app já rodando dentro do Artifact, onde dá para clicar e testar.`,
    `Pedido claro — descrição em três partes (o que faz, como se parece, o que acontece ao clicar) que guia o Claude.`,
    `Testar — usar o próprio app, clicando em tudo, para descobrir erros antes de mostrar para os outros.`,
    `Personalizar — deixar o app com a cara do aluno mudando cores, textos, título e detalhes visuais.`,
  ],
  treinamento: `## O que o professor precisa saber

Um Artifact pode conter um mini-app interativo de verdade. Quando o aluno pede algo como uma calculadora ou um quiz, o Claude gera o código (geralmente uma página com HTML e React) e mostra o app já funcionando no painel da direita, sem o aluno ver código nenhum. Você não precisa programar para ensinar isto. Precisa saber três coisas: como pedir, como testar e como pedir melhorias. O segredo da aula é a iteração: pedir, olhar, ajustar, repetir. Cada ajuste atualiza o mesmo Artifact, e há uma setinha de versões no topo do painel para voltar atrás se algo piorar.

## Passo a passo da aula (ritmo 10/15/25/10)

10 min — Aquecimento. Retome a Aula 5 com uma pergunta: o que é um Artifact? Mostre no projetor o claude.ai já aberto. Diga que hoje o Artifact vai ter botões e fazer contas. Mostre o cartaz do roteiro do pedido (O que faz / Como se parece / O que acontece ao clicar).

15 min — Conteúdo guiado. No projetor, abra uma conversa nova clicando em Nova conversa (ou no ícone de lápis no canto superior esquerdo). Digite ao vivo um pedido completo, por exemplo: Crie um Artifact com uma calculadora de gorjeta. Campos para o valor da conta e a porcentagem da gorjeta. Um botão Calcular que mostra o valor da gorjeta e o total. Use cores azul e branco. Envie e espere o painel do Artifact abrir à direita. Clique nos campos, digite valores e clique em Calcular para mostrar que funciona. Em seguida, peça uma melhoria na conversa: Deixe o botão maior e adicione a opção de dividir a conta entre pessoas. Mostre o Artifact se atualizando. Aponte a barra de versões no topo do painel.

25 min — Mão na massa. Cada aluno escolhe uma das 4 ideias da lista e escreve o próprio pedido usando o roteiro de três partes. Depois de o app aparecer, eles testam clicando em tudo e fazem pelo menos dois ajustes (uma melhoria de função e uma de visual). Circule pela sala, leia os pedidos por cima do ombro e ajude quem travou. Lembre-os de testar a cada mudança.

10 min — Desafio e compartilhar. Cada aluno mostra o app para um colega ao lado, que testa e sugere uma melhoria. Quem quiser apresenta no projetor. Feche pedindo que salvem a conversa (ela já fica salva sozinha na barra lateral esquerda) e renomeiem com o nome do app.

## Como explicar de forma clara (linguagem para a idade)

Compare com um pedido de lanche: se você diz só quero um lanche, vem qualquer coisa; se você diz quero um X-burguer sem cebola, com batata e sem picles, vem o que você quer. Com o app é igual. Diga o Claude é como um programador muito rápido que faz exatamente o que você descrever. Use a frase olhe, percebeu, peça: olhe o app, perceba o que está faltando, peça o ajuste. Evite a palavra código; fale em o app ou a página.

## Erros comuns e como ajudar

O erro mais comum é o pedido vago (Faça um quiz) que gera um app sem graça; peça que acrescentem detalhes (5 perguntas sobre animais, com pontuação no final). Outro é mudar dez coisas de uma vez: oriente um ajuste por mensagem, para ver o efeito de cada um. Alguns alunos digitam no painel do Artifact em vez de na conversa; mostre que os pedidos vão sempre na caixa de mensagem, embaixo, à esquerda. Se o app parar de funcionar depois de um ajuste, use a barra de versões no topo do painel para voltar à versão anterior. Se nada aparecer no painel, confira se o aluno escreveu a palavra Artifact ou app no pedido e mande pedir de novo. Por fim, lembre que testar não é opcional: app que não foi clicado não foi testado.`,
  exercicios: [
    {
      titulo: `Minha primeira calculadora`,
      tipo: `prática na ferramenta`,
      tempo: `8 min`,
      guiaProfessor: `Garanta que cada aluno escreva o pedido completo, com campos, botão e cores. Circule e confira se o Artifact abriu à direita e se eles clicaram em Calcular para testar.`,
      atividade: `Peça ao Claude um Artifact com uma calculadora de gorjeta: campos para o valor da conta e a porcentagem, e um botão Calcular que mostra o valor da gorjeta e o total. Teste com uma conta de 100 reais e 10% de gorjeta.`,
      gabarito: `O Artifact abre à direita com dois campos e um botão Calcular. Ao digitar 100 e 10 e clicar em Calcular, o app mostra gorjeta de 10 reais e total de 110 reais. Se a conta estiver errada, peça: Corrija o cálculo, a gorjeta é a porcentagem sobre o valor da conta.`,
    },
    {
      titulo: `Iterar: melhorar em três rodadas`,
      tipo: `desafio`,
      tempo: `10 min`,
      guiaProfessor: `Reforce a regra de um ajuste por mensagem. Peça que anotem no caderno o que mudou a cada rodada e olhem o resultado antes do próximo pedido.`,
      atividade: `A partir da sua calculadora, faça três melhorias, uma de cada vez: 1) deixe o botão maior e azul; 2) acrescente a opção de dividir a conta entre um número de pessoas; 3) mostre o valor por pessoa. Teste depois de cada mudança.`,
      gabarito: `Após as três rodadas, o app tem botão azul e grande, um campo para o número de pessoas e exibe o valor por pessoa. Para 100 reais, 10% e 2 pessoas: total 110 reais e 55 reais por pessoa. Cada versão deve aparecer na barra de versões no topo do painel.`,
    },
    {
      titulo: `Quiz em dupla`,
      tipo: `em dupla`,
      tempo: `12 min`,
      guiaProfessor: `Forme duplas. Um aluno escolhe o tema e escreve as perguntas no pedido; o outro testa e sugere ajustes. Depois trocam de papel. Lembre-os de pedir pontuação no final.`,
      atividade: `Juntos, peçam ao Claude um Artifact com um quiz de 5 perguntas de múltipla escolha sobre um tema escolhido por vocês (animais, futebol, games). Cada pergunta com 3 alternativas e uma resposta certa. Ao final, o app mostra a pontuação. Testem respondendo o quiz inteiro.`,
      gabarito: `O Artifact exibe 5 perguntas, cada uma com 3 opções clicáveis, avança até o final e mostra a pontuação (por exemplo 4 de 5 acertos). Se a pontuação não aparecer, a dupla deve pedir: Mostre o total de acertos na última tela. Tema livre, mas as 5 perguntas e a contagem final são obrigatórias.`,
    },
    {
      titulo: `Roda de conversa: o que faz um bom pedido`,
      tipo: `roda de conversa`,
      tempo: `10 min`,
      guiaProfessor: `Conduza com perguntas abertas. Anote no quadro as ideias da turma. Conecte cada exemplo às três partes do roteiro (o que faz, como se parece, o que acontece ao clicar).`,
      atividade: `Em círculo, cada aluno conta um pedido que deu certo e um que deu errado hoje. A turma discute: por que o pedido vago falhou? Como o roteiro de três partes ajudou? Que palavras deixaram o pedido mais claro?`,
      gabarito: `Espera-se a conclusão de que pedidos claros descrevem campos, botões, regras e aparência, enquanto pedidos vagos geram apps confusos. Exemplos válidos: trocar Faça um quiz por Quiz de 5 perguntas sobre animais com pontuação. Reforce que iterar (um ajuste por vez) corrige o que faltou no primeiro pedido.`,
    },
    {
      titulo: `Meu mini-app personalizado`,
      tipo: `projeto curto`,
      tempo: `15 min`,
      guiaProfessor: `Deixe cada aluno escolher livremente entre sorteador, conversor, quiz ou calculadora. Exija pelo menos um teste e uma personalização visual. Esse projeto é o ensaio do Artifact final do mês.`,
      atividade: `Crie um mini-app à sua escolha (sorteador de nomes, conversor de moedas, calculadora ou quiz). Faça-o funcionar, teste clicando em tudo e personalize com seu título, suas cores e um emoji. Renomeie a conversa com o nome do seu app.`,
      gabarito: `O aluno entrega um Artifact funcionando, testado e personalizado: título próprio, cores escolhidas e ao menos um detalhe visual. Exemplo: um sorteador que recebe nomes separados por vírgula e mostra um sorteado ao clicar em Sortear. A conversa aparece renomeada na barra lateral. Qualquer dos quatro tipos é aceito, desde que funcione e tenha a cara do aluno.`,
    },
  ],
};
