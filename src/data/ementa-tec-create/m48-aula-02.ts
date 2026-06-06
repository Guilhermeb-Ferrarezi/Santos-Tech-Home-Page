import type { Aula } from "./tipos";

export const aula: Aula = {
  numero: 2,
  titulo: "Mecânicas em C++ Avançadas",
  semana: "Semana 1",
  duracao: "1 hora",
  objetivo: `Reescrever a lógica central de uma mecânica do jogo em C++ na Unreal Engine e expô-la aos Blueprints com UFUNCTION e UPROPERTY, criando um sistema de pontuação, vida ou inimigos que funcione de forma híbrida entre código e Blueprint, com apoio do Claude na depuração.`,
  descricao: `Na aula passada o aluno montou mecânicas usando Blueprints, o sistema visual de programação da Unreal. Blueprints são ótimos para prototipar rápido, mas, quando a lógica fica grande, eles viram um emaranhado de fios difícil de ler e de manter. É aqui que entra o C++. Nesta aula, no ano final da trilha, o aluno dá um passo de programador profissional: ele tira a parte mais importante da mecânica de dentro do Blueprint e reescreve essa lógica em código C++, que é mais organizado, mais rápido e muito mais fácil de crescer.

A grande ideia da aula é a integração híbrida. Na Unreal, código C++ e Blueprint não competem: eles trabalham juntos. O aluno escreve a lógica pesada em C++ (por exemplo, somar pontos, tirar vida, contar inimigos) e depois expõe essas funções e variáveis para o Blueprint usando duas palavras-chave especiais chamadas UFUNCTION e UPROPERTY. Com elas, uma função escrita em C++ aparece como um bloco arrastável no editor de Blueprint, e uma variável de C++ aparece editável no painel de detalhes. Assim o aluno tem o melhor dos dois mundos: a força do código e a facilidade visual do Blueprint.

O sistema escolhido para esta aula é simples e poderoso: pontuação e vida. O aluno cria uma classe em C++ (ou usa o GameMode que já existe) com uma variável de pontos e uma de vida, mais duas funções: uma para adicionar pontos e outra para tirar vida. Cada função leva as macros UFUNCTION(BlueprintCallable) para poder ser chamada de qualquer Blueprint, e cada variável leva UPROPERTY(BlueprintReadWrite, EditAnywhere) para aparecer no editor. Depois, no Blueprint, basta arrastar essas funções nos eventos certos (pegar uma moeda, levar um dano) para o sistema funcionar.

A depuração é parte central da aula. Programar em C++ exige compilar o código, e compilar é onde os erros aparecem. O aluno vai aprender a ler a mensagem de erro do compilador, copiá-la e colá-la no Claude pedindo ajuda para entender o que deu errado e como corrigir. O Claude funciona como um parceiro de programação paciente: explica o erro em palavras simples, sugere a correção e ensina o porquê. Ao fim da hora, cada aluno deve ter uma mecânica central funcionando em C++ e respondendo a partir do Blueprint do jogo.`,
  materiais: [
    `Computadores (1 por aluno) com a Unreal Engine instalada, um projeto C++ aberto e o Visual Studio (ou Rider) configurado para compilar`,
    `Projetor ou TV para o professor mostrar a própria tela, alternando entre o editor de código e a Unreal`,
    `Acesso ao Claude (navegador ou app) para cada aluno usar como assistente de depuração`,
    `Arquivo de exemplo: um projeto Unreal C++ já configurado, com uma classe de GameMode pronta para receber as funções`,
    `Arquivo de exemplo: um trecho de código C++ com um erro proposital (faltando ponto e vírgula) para treinar a leitura de erros`,
    `Folha impressa com o "mapa de macros" (UFUNCTION e UPROPERTY) e seus especificadores mais usados`,
    `Cronômetro ou timer visível para controlar o ritmo dos blocos da aula`,
  ],
  conceitosChave: [
    `C++ — linguagem de programação em texto, mais rápida e organizada que o Blueprint, usada pela Unreal para a lógica central de jogos grandes.`,
    `Blueprint — sistema visual de programação da Unreal, feito de blocos e fios; ótimo para prototipar e para conectar a lógica do C++ aos eventos do jogo.`,
    `Integração híbrida — usar C++ e Blueprint juntos: a lógica pesada fica no código e o Blueprint apenas chama essa lógica nos momentos certos.`,
    `UFUNCTION — macro que marca uma função C++ para a Unreal; com o especificador BlueprintCallable, a função vira um bloco que pode ser arrastado no Blueprint.`,
    `UPROPERTY — macro que marca uma variável C++ para a Unreal; com EditAnywhere e BlueprintReadWrite, a variável aparece e pode ser editada no editor e no Blueprint.`,
    `Compilar — traduzir o código C++ em algo que o computador entende; é o passo em que os erros de digitação aparecem e precisam ser corrigidos.`,
    `Erro de compilação — mensagem que o compilador mostra quando algo no código está errado; ler essa mensagem com calma (ou com o Claude) é o caminho para consertar.`,
  ],
  treinamento: `## O que o professor precisa saber

Você não precisa ser programador C++ experiente para dar esta aula. Precisa entender uma ideia central e quatro passos. A ideia: na Unreal, uma função escrita em C++ só aparece no Blueprint se ela tiver a macro UFUNCTION em cima, e uma variável C++ só aparece no editor se tiver a macro UPROPERTY em cima. Essas macros são o "passaporte" que liga o código ao mundo visual.

Antes da aula, abra o projeto de exemplo e localize dois arquivos da classe de GameMode: o arquivo de cabeçalho, que termina em .h (onde declaramos funções e variáveis), e o arquivo de implementação, que termina em .cpp (onde escrevemos o que cada função faz). Treine o ciclo completo: escrever uma função simples, salvar, voltar para a Unreal e clicar no botão Compile (o ícone de C++ no topo do editor). Veja onde aparece a mensagem de sucesso e onde aparece o erro. Esse ciclo escrever, salvar, compilar e a turma vai repetir o tempo todo.

## Passo a passo da aula

Aquecimento e revisão (10 min). Pergunte: lembram da mecânica que vocês montaram só com Blueprint na aula passada? Hoje vamos pegar o coração dela e reescrever em C++, que é mais limpo. Mostre no projetor um Blueprint cheio de fios e diga: imaginem isso com cem nós; em C++ cabe em poucas linhas. Abra o projeto de exemplo.

Conteúdo novo guiado (15 min). No arquivo .h da classe de GameMode, declare as variáveis e as funções com as macros. Digite na frente da turma:

  UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "Jogo")
  int32 Pontos = 0;

  UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "Jogo")
  int32 Vida = 100;

  UFUNCTION(BlueprintCallable, Category = "Jogo")
  void AdicionarPontos(int32 Quantidade);

  UFUNCTION(BlueprintCallable, Category = "Jogo")
  void TirarVida(int32 Dano);

Explique cada parte: int32 é um número inteiro; UPROPERTY com EditAnywhere deixa editar no editor; UFUNCTION com BlueprintCallable cria o bloco no Blueprint. Agora vá ao arquivo .cpp e escreva o que cada função faz:

  void AMeuGameMode::AdicionarPontos(int32 Quantidade)
  {
      Pontos = Pontos + Quantidade;
  }

  void AMeuGameMode::TirarVida(int32 Dano)
  {
      Vida = Vida - Dano;
      if (Vida < 0)
      {
          Vida = 0;
      }
  }

Salve tudo, volte para a Unreal e clique em Compile. Quando compilar sem erro, abra o Blueprint do GameMode, clique com o botão direito no grafo e procure por AdicionarPontos: o bloco que veio do C++ vai aparecer.

Mão na massa (25 min). Cada aluno repete os passos no próprio projeto, escolhendo seu sistema (pontuação, vida ou contagem de inimigos). Circule pelas máquinas. Quando alguém der erro ao compilar, ensine o reflexo: copie a primeira linha da mensagem de erro e cole no Claude com a pergunta o que esse erro quer dizer e como corrijo. Reforce o ciclo escrever, salvar, compilar.

Desafio e compartilhar (10 min). Lance o desafio: faça o Blueprint chamar a função AdicionarPontos quando algo acontecer no jogo (por exemplo, sobrepor um item) e mostre os pontos subindo. Roda final: cada aluno mostra a tela em uma frase, dizendo qual mecânica passou para o C++.

## Como explicar de forma clara

Use a imagem do passaporte: a função em C++ é uma pessoa que quer entrar no país do Blueprint; a UFUNCTION é o passaporte que deixa ela passar. Sem passaporte, ela existe mas ninguém no Blueprint a enxerga. Diga que o arquivo .h é a lista de ingredientes da receita e o .cpp é o modo de preparo. Compilar é provar a comida: é quando você descobre se errou a mão no sal. Para a faixa de 10 a 15 anos, os mais novos gostam dessas analogias; os mais velhos gostam de entender que o C++ roda mais rápido e organiza melhor jogos grandes.

## Erros comuns e como ajudar

O erro mais comum é esquecer o ponto e vírgula no fim da linha; o compilador reclama e o aluno trava. Ensine a ler a mensagem e a buscar o ponto e vírgula que falta. Outro clássico é escrever a função no .cpp sem o nome da classe na frente (o AMeuGameMode:: antes do nome); sem isso, a Unreal não liga a implementação à declaração. Muitos esquecem de salvar o arquivo antes de clicar em Compile, então o código velho continua rodando; lembre sempre de salvar primeiro. Há quem coloque a UFUNCTION em cima da função no .cpp em vez do .h: explique que as macros vivem no .h, junto da declaração. E quando a turma travar de vez, o melhor caminho é copiar a mensagem de erro inteira e colar no Claude, que explica e sugere a correção em linguagem simples.`,
  exercicios: [
    {
      titulo: `A primeira variável com passaporte`,
      tipo: `Prática no computador`,
      tempo: `6 min`,
      guiaProfessor: `Garanta que cada aluno encontre o arquivo .h da classe de GameMode. Demonstre uma vez no projetor onde a variável é declarada. O objetivo é só ver a variável aparecer no editor depois de compilar, sem lógica ainda.`,
      atividade: `No arquivo .h do seu GameMode, declare uma variável de pontos com a macro UPROPERTY assim: UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "Jogo") int32 Pontos = 0; Salve, volte para a Unreal e clique em Compile. Abra o painel de detalhes do GameMode e veja a variável Pontos aparecer.`,
      gabarito: `O aluno acertou se o projeto compilou sem erro e a variável Pontos aparece editável no painel de detalhes, dentro da categoria Jogo. Código-solução: UPROPERTY(BlueprintReadWrite, EditAnywhere, Category = "Jogo") int32 Pontos = 0; colocada dentro da classe, no arquivo .h.`,
    },
    {
      titulo: `Caça ao erro de compilação`,
      tipo: `Desafio de depuração`,
      tempo: `7 min`,
      guiaProfessor: `Abra na máquina o arquivo de exemplo com o erro proposital (um ponto e vírgula faltando). O objetivo é o aluno ler a mensagem do compilador, identificar a linha e corrigir, usando o Claude se precisar. Mostre onde a janela de erros aparece.`,
      atividade: `Você recebeu um trecho de código com um erro de propósito. Tente compilar, leia a mensagem de erro e descubra o que falta. Se travar, copie a primeira linha do erro e cole no Claude perguntando o que ela significa. Corrija e compile de novo até dar certo.`,
      gabarito: `O aluno acertou se identificou que faltava o ponto e vírgula no fim da linha, adicionou esse ponto e vírgula e o projeto passou a compilar sem erro. Código-solução: a linha que estava como int32 Pontos = 0 passa a ser int32 Pontos = 0; com o ponto e vírgula no final.`,
    },
    {
      titulo: `Função que vira bloco no Blueprint`,
      tipo: `Prática no computador`,
      tempo: `7 min`,
      guiaProfessor: `Mostre a diferença entre declarar a função no .h (com a UFUNCTION) e implementar no .cpp (com o nome da classe na frente). Reforce que o bloco só aparece no Blueprint depois de compilar com sucesso.`,
      atividade: `Crie a função AdicionarPontos. No .h escreva: UFUNCTION(BlueprintCallable, Category = "Jogo") void AdicionarPontos(int32 Quantidade); No .cpp escreva o que ela faz, somando a quantidade aos pontos. Compile, abra o Blueprint do GameMode e procure pelo bloco AdicionarPontos.`,
      gabarito: `O aluno acertou se o bloco AdicionarPontos aparece ao buscar no grafo do Blueprint e o projeto compila sem erro. Código-solução no .cpp: void AMeuGameMode::AdicionarPontos(int32 Quantidade) seguido, entre chaves, da linha Pontos = Pontos + Quantidade; lembrando do nome da classe antes do nome da função.`,
    },
    {
      titulo: `Tirar vida com proteção`,
      tipo: `Prática no computador`,
      tempo: `8 min`,
      guiaProfessor: `Esta atividade introduz uma decisão no código (o if). Explique que sem a proteção a vida poderia ficar negativa, o que não faz sentido no jogo. Acompanhe o uso correto das chaves e do operador menor que.`,
      atividade: `Crie a função TirarVida que recebe um valor de dano e subtrai da variável Vida. Use um if para garantir que a vida nunca fique abaixo de zero: se Vida ficar menor que zero, coloque Vida igual a zero. Compile e teste pelo Blueprint chamando a função com um dano grande.`,
      gabarito: `O aluno acertou se, ao chamar TirarVida com um dano maior que a vida atual, a variável Vida para em zero e não fica negativa, e o projeto compila. Código-solução no .cpp: void AMeuGameMode::TirarVida(int32 Dano) com as linhas Vida = Vida - Dano; depois if (Vida < 0) e dentro das chaves Vida = 0; para travar no mínimo zero.`,
    },
    {
      titulo: `Mecânica híbrida completa`,
      tipo: `Projeto curto`,
      tempo: `12 min`,
      guiaProfessor: `Esta é a tarefa que fecha a aula e prova a integração híbrida. O aluno liga um evento do jogo (sobrepor um item, por exemplo) à função C++ AdicionarPontos pelo Blueprint. Faça a roda final de compartilhamento, cada um mostrando os pontos subindo na tela.`,
      atividade: `No Blueprint, escolha um evento do jogo (por exemplo, quando o jogador encosta em um item) e ligue esse evento ao bloco AdicionarPontos vindo do C++, passando uma quantidade de pontos. Teste no Play: ao acionar o evento, os pontos devem subir. Mostre o valor de Pontos aumentando.`,
      gabarito: `O aluno acertou se, ao rodar o jogo e acionar o evento escolhido, a variável Pontos aumenta de verdade, provando que o Blueprint chamou com sucesso a função escrita em C++. Solução esperada: no grafo do Blueprint, o nó do evento (por exemplo, On Component Begin Overlap) conectado ao nó AdicionarPontos, com a entrada Quantidade preenchida com um número como 10, e os pontos subindo a cada acionamento durante o Play.`,
    },
  ],
};
